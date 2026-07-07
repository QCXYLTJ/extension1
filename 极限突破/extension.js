import { lib, game, ui, get, ai, _status } from '../../noname.js';
const extensionInfo = await lib.init.promises.json(`extension/极限突破/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '极限突破',
        content(config, pack) { },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '极限突破',
                    connect: true,
                    character: {
                        极鲁肃: ['male', 'wu', 3, ['独断', 'tamo'], ['des:独断的外交家']],
                        极刘备: ['male', 'shu', 4, ['jxtp_rende', 'jxtp_zhangwu', 'jxtp_jijiang'], ['des:仁德之君']],
                        极杨彪: ['male', 'qun', 3, ['jxtp_zhaohan', 'rangjie', 'jxtp_qianzhi'], ['des:时代的大魔王']],
                        极杜预: ['male', 'jin', 5, ['jxtp_beiwu', 'jxtp_chenyan'], ['des:肉身化圣的神于吉']],
                        极花鬘: ['female', 'shu', 4, ['jxtp_manyi', 'jxtp_yuxiang', 'jxtp_zhanyuan'], ['des:蛮族女侠,超级厉害的大象']],
                        极吕布: ['male', 'qun', 5, ['jxtp_shenyong', 'jxtp_shenwei', 'jxtp_shenqu'], ['des:三国战神,盖世无双']],
                        极郭嘉: ['male', 'wei', 3, ['jxtp_jijiu', 'jxtp_guimou'], ['des:郭嘉不死,卧龙不出']],
                        极徐盛: ['male', 'wu', 4, ['jxtp_pojun'], ['des:一刀无双的江东铁壁']],
                        极孙权: ['male', 'wu', 4, ['jxtp_zhiheng', 'jxtp_jiuyuan'], ['des:吴大帝.纵横捭阖,自有制衡之道']],
                        极吕蒙: ['male', 'wu', 4, ['博学', 'jxtp_gongxin'], ['zhu', 'des:君子博学,强而不威']],
                        三国君王: ['male', 'shen', '4/8', ['君威'], ['zhu', 'des:在历史星河中留下璀璨之姿的君主们']],
                        极张绣: ['male', 'qun', 4, ['jxtp_xiaoluan', '从武'], ['des:贝蒂小熊,乱世不败!']],
                        极李儒: ['male', 'qun', 3, ['jxtp_mieji', 'jxtp_juece', 'jxtp_fencheng'], ['des:时代的骄傲']],
                        极刘协: ['male', 'qun', 3, ['sphuangen', '天威', 'jxtp_tianming'], ['des:汉末天子']],
                        极司马懿: ['male', 'jin', 4, ['jxtp_yr', 'jxtp_guicai', 'jxtp_guiyi'], ['des:晋国之主']],
                        极左慈: ['male', 'shen', 3, ['jxtp_huashen', 'jxtp_xiuxian1', 'jxtp_xinshen'], ['boss', 'bossallowed', 'des:得道成仙的迷之仙人']],
                        极皇甫嵩: ['male', 'qun', 4, ['jxtp_yangjie', 'jxtp_zhengjun', 'jxtp_juxiang'], ['des:汉末三杰,最后的名将之光']],
                        极袁绍: ['male', 'qun', 4, ['jxtp_luanji', 'jxtp_zhenshi'], ['des:三国第一男主角,一直快乐一直爽']],
                        极文鸯: ['male', 'wei', 4, ['jxtp_quedi', 'jxtp_cj', 'jxtp_choujue'], ['des:天光破云的推土机']],
                        极荀攸: ['male', 'wei', 3, ['jxtp_qice0', 'jxtp_zhiyu'], ['des:百计之谋主']],
                        极曹操: ['male', 'wei', 4, ['jxtp_jianxiong', 'jxtp_qingzheng', 'jxtp_hujia'], ['zhu', 'des:清平之英杰、乱世之奸雄']],
                        极马超: ['male', 'shu', 4, ['jxtp_mashen'], ['des:马超就是神!']],
                        极许劭: ['male', 'qun', 4, ['jxtp_pingjian'], ['des:品评士人的汝南名士']],
                        极曹冲: ['male', 'wei', '3/3', ['jxtp_quesong', 'jxtp_chengxiang2'], ['des:冲儿']],
                        jxtp_wolong: ['male', 'shu', 3, ['jxtp_kanpo', 'jxtp_huoji'], ['des:运筹帷幄,天下三分']],
                        jxtp_laozhuge: ['male', 'shu', 3, ['jxtp_guanxing', 'jxtp_kongcheng'], ['des:功盖三分国,名成八阵图']],
                        极关羽: ['male', 'shu', 4, ['jxtp_wusheng', 'jxtp_yijue'], ['des:威震华夏!']],
                        极曹爽: ['male', 'wei', 4, ['jxtp_zhuanquan', 'jxtp_zixiang', 'retuogu'], ['des:辅政大将军']],
                        极曹丕: ['male', 'wei', 3, ['jxtp_xingshang', 'jxtp_xingshang1', 'jxtp_fangzhu2', 'jxtp_songwei'], ['des:翻面男']],
                        极刘禅: ['male', 'shu', 3, ['jxtp_fangquan', 'jxtp_ruoyu'], ['zhu', 'des:全权脱手的皇二代']],
                        极曹髦: ['male', 'wei', 4, ['jxtp_qianlong', 'jxtp_mbjuejin'], ['zhu', 'des:高贵乡公']],
                        极糜竺: ['male', 'shu', 3, ['jxtp_jugu', 'jxtp_ziyuan', 'jxtp_zhouzhuan'], ['des:财大气粗的徐州土豪']],
                        极夏侯惇: ['male', 'wei', 4, ['jxtp_ganglie', 'jxtp_qingjian'], ['des:清俭持家的刺猬猛男']],
                        jx_zhangrang: ['male', 'qun', 3, ['jxtp_taoluan4'], []],
                        jx_zhaozhong: ['male', 'qun', 3, ['jxtp_chiyan1'], []],
                        jx_sunzhang: ['male', 'qun', 3, ['jxtp_zimou1'], []],
                        jx_bilan: ['male', 'qun', 3, ['jxtp_pichai1'], []],
                        jx_xiayun: ['male', 'qun', 3, ['jxtp_yaozhuo1'], []],
                        jx_hankui: ['male', 'qun', 3, ['jxtp_xiaolu1'], []],
                        jx_lisong: ['male', 'qun', 3, ['jxtp_kuiji0'], []],
                        jx_duangui: ['male', 'qun', 3, ['jxtp_chihe1'], []],
                        jx_guosheng: ['male', 'qun', 3, ['jxtp_niqu1'], []],
                        jx_gaowang: ['male', 'qun', 3, ['jxtp_miaoyu1'], []],
                        全力十常侍: ['male', 'qun', 1, ['jxtp_mowang2', 'jxtp_mowang', 'jxtp_danggu2'], ['des:十常侍,指中国东汉(公元25年-220年)灵帝时期(168年-189年)操纵政权的宦官,其首领是张让和赵忠.他们玩弄小皇帝于股掌之中,以至灵帝称<张常侍是我父,赵常侍是我母>.十常侍自己横征暴敛,卖官鬻爵,他们的父兄子弟遍布天下,横行乡里,祸害百姓,无官敢管.人民不堪剥削、压迫,纷纷起来反抗']],
                        极十常侍: ['male', 'qun', 3, ['jxtp_danggu', 'jxtp_mowang3', 'jxtp_mowang7'], ['des:汉灵帝时的宦官集团,人称<十常侍>,其首领是张让和赵忠.他们玩弄小皇帝于股掌之中,以至灵帝称<张常侍是我父,赵常侍是我母>.十常侍自己横征暴敛,卖官鬻爵,他们的父兄子弟遍布天下,横行乡里,祸害百姓,无官敢管.人民不堪剥削、压迫,纷纷起来反抗']],
                        极张角: ['male', 'qun', 3, ['jxtp_leiji', 'jxtp_guidao', 'jxtp_huangtian', 'jxtp_guidao4'], ['zhu', 'des:狂奔的雷电蜗牛']],
                        jxtp_zhonghui: ['male', 'wei', 4, ['jxtp_quanji4', 'jxtp_zili'], ['des:伯约的一号舔狗']],
                        极董昭: ['male', 'wei', 3, ['jxtp_miaolve', 'jxtp_yingjia'], ['des:陈筹定势']],
                        极刘晔: ['male', 'wei', 4, ['jxtp_polu', 'jxtp_choulve'], ['des:霹雳车大师']],
                        极张奋: ['male', 'wu', 4, ['jxtp_quchong', 'jxtp_xunjie'], ['des:攻守兼备的大攻车']],
                        极孙策: ['male', 'wu', '1/4/3', ['jxtp_jiang', 'jxtp_hunzi', 'jxtp_zhiba'], ['des:锦绣江东,岂容小丑横行!!']],
                        极华雄: ['male', 'qun', '4/6', ['jxtp_yangwei', 'jxtp_yaowu'], ['des:哈哈哈,这下谁还小看我华雄？']],
                        极灵雎: ['female', 'qun', '3/3', ['jxtp_jieyuan', 'jxtp_fenxin'], ['des:灵雎,<铜雀台>中的角色,相传为吕布和貂蝉的女儿,被汉献帝掳走并训练为死士,被秘密送入宫中接近曹操,成为其<忘年红颜知己>.外表是柔弱的女子,实际上身怀致命的杀人绝技,等待时机给予曹操致命一击']],
                        极蔡文姬: ['female', 'qun', 3, ['jxtp_chenqing', 'jxtp_beige'], ['des:蔡文姬,名琰,原字昭姬,晋时避司马昭讳,改字文姬,东汉末年陈留圉(今河南开封杞县)人,东汉大文学家蔡邕的女儿,是中国历史上著名的才女和文学家.代表作有<胡笳十八拍>、<悲愤诗>等']],
                        极陈珪: ['male', 'qun', 3, ['jxtp_guimou1', 'jxtp_yingtu', 'jxtp_zhouxian'], ['des:陈珪,字汉瑜,徐州下邳人.广汉太守陈亹之孙,太尉陈球之侄,东城太守陈登之父. 陈珪出身士族名门,起初被举为孝廉,任青州北海国治所剧县令,后辞官而去. 袁术意图篡汉自立时,因其与陈珪素有交情,写信招他至淮南.当时陈珪的二儿子陈应在下邳,被袁术抓为人质逼迫陈珪前来投靠.结果陈珪并没有前往,而是写信痛斥袁术所为. 吕布袭夺徐州后,袁术意欲与之结亲,于是派出韩胤前往徐州,请求将吕布之女带回淮南.得知消息的陈珪游说吕布投靠曹操,吕布也回想起之前袁术的失信,于是将女儿追回,并把韩胤送往曹操处.后陈登奉吕布之命出使曹操,与其定下计策消灭吕布,曹操赠陈珪秩中二千石之俸,又表陈登为广陵太守. 袁术见吕布反复,起大军攻徐州.陈珪献谋吕布,派人离间韩暹、杨奉,吕布联合二人,大破袁术军,袁术势力自此衰败']],
                        极徐荣: ['male', 'qun', 4, ['jxtp_xionghuo', 'jxtp_shajue'], ['des:徐荣(？－192年),玄菟人(一说为辽东襄平人,<公孙度传>中说公孙度本辽东襄平人,迁居玄菟,为同郡徐荣所举,任辽东太守.同郡当是同<玄菟>郡),东汉末年将领.本为中郎将,曾向董卓推举同郡出身的公孙度出任辽东太守.于汴水之战中击败曹操的独立追击军,以及在梁东之战中击败孙坚的部队.在董卓死后,受司徒王允的命令与李傕、郭汜交战,因部将胡轸投降,寡不敌众,于新丰之战被击败,战死在乱军之中']],
                        极笮融: ['male', 'qun', 4, ['jxtp_cansi', 'jxtp_futu'], ['des:笮[zé]融(生卒年不详),丹阳(治今安徽宣城)人,东汉末年豪强,生性残暴却笃信佛教,为佛教在中国的发展作出了很大贡献.最初聚众数百,投奔徐州牧陶谦,督管下邳、彭城、广陵三郡运漕.将其中大量物资占为己有累积财力,遂在徐州一带大规模崇佛,修建豪华佛寺,铸造金铜大佛,衣以锦彩,并举行浴佛节,招揽信徒万余人.其崇佛活动奠定了中国大型佛事活动的基础.曹操攻徐州时,笮融奔走,先后杀害广陵太守赵昱、彭城相薛礼、豫章太守朱皓.后来遭到扬州牧刘繇兴兵讨伐,兵败逃入山中,被百姓所杀']],
                        极周瑜: ['male', 'wu', '2/3/1', ['jxtp_zyyingzi', 'jxtp_fanjian'], ['des:周瑜(175年—210年),字公瑾,庐江郡舒县(一说今安徽省庐江县、一说今安徽省舒城县)人,东汉末年军事家、政治家、谋略家、东吴名将.洛阳令周异之子,从祖周景、从父周忠,都官至太尉,位列三公.周瑜身材高大,容貌俊美精音律,当时有<曲有误周郎顾>之语']],
                        极黄盖: ['male', 'wu', 4, ['jxtp_kurou', 'jxtp_zhaxiang'], ['des:黄盖(生卒年不详),字公覆,零陵郡泉陵县(今湖南省永州市)人.汉末三国时期孙吴将领']],
                        极诸葛瞻: ['male', 'shu', 3, ['jxtp_zuilun', 'jxtp_fuyin'], ['des:诸葛瞻(227年7月—263年11月),字思远,琅邪阳都(今山东沂南县)人.三国时期蜀汉大臣,丞相诸葛亮之子']],
                    },
                    skill: {
                        独断: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                let num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                return num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0 || num % 9 == 0 || num % 11 == 0 || num % 13 == 0 || num % 17 == 0;
                            },
                            content() {
                                let num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                let cards = [];
                                if (num % 2 == 0) {
                                    let card = get.cardPile2(function (card) {
                                        return card.name == 'sha';
                                    });
                                    if (card) {
                                        cards.push(card);
                                    }
                                }
                                if (num % 3 == 0) {
                                    let card = get.cardPile2(function (card) {
                                        return card.name == 'shan';
                                    });
                                    if (card) {
                                        cards.push(card);
                                    }
                                }
                                if (num % 5 == 0) {
                                    let card = get.cardPile2(function (card) {
                                        return ['tao', 'jiu', 'zong', 'xionghuangjiu'].includes(card.name);
                                    });
                                    if (card) {
                                        cards.push(card);
                                    }
                                }
                                if (num % 7 == 0) {
                                    let card = get.cardPile2(function (card) {
                                        return ['juedou', 'wuzhong', 'zengbin', 'sadouchengbing', 'dongzhuxianji', 'tongzhougongji'].includes(card.name);
                                    });
                                    if (card) {
                                        cards.push(card);
                                    }
                                }
                                if (num % 9 == 0) {
                                    let card = get.cardPile2(function (card) {
                                        return card.name == 'guohe' || card.name == 'shunshou';
                                    });
                                    if (card) {
                                        cards.push(card);
                                    }
                                }
                                if (num % 11 == 0) {
                                    let card = get.cardPile2(function (card) {
                                        return card.name == 'huogong' || card.name == 'tiesuo';
                                    });
                                    if (card) {
                                        cards.push(card);
                                    }
                                }
                                if (num % 13 == 0) {
                                    let card = get.cardPile2(function (card) {
                                        return card.name == 'nanman' || card.name == 'wanjian';
                                    });
                                    if (card) {
                                        cards.push(card);
                                    }
                                }
                                if (num % 17 == 0) {
                                    let card = get.cardPile2(function (card) {
                                        return card.name == 'lebu' || card.name == 'bingliang';
                                    });
                                    if (card) {
                                        cards.push(card);
                                    }
                                }
                                if (cards.length) {
                                    player.gain(cards, 'gain2');
                                }
                            },
                            group: 'qinzheng_count',
                            intro: {
                                content(num) {
                                    let str = '<li>总次数:';
                                    str += num;
                                    str += '<br><li>杀:';
                                    str += num % 2;
                                    str += '<br><li>闪:';
                                    str += num % 3;
                                    str += '/3<br><li>桃/酒:';
                                    str += num % 5;
                                    str += '/5<br><li>决斗/无中生有:';
                                    str += num % 7;
                                    str += '<br><li>过河拆桥/顺手牵羊:';
                                    str += num % 9;
                                    str += '<br><li>火攻/铁索连环:';
                                    str += num % 11;
                                    str += '<br><li>南蛮入侵/万剑齐发:';
                                    str += num % 13;
                                    str += '<br><li>乐不思蜀/兵粮寸断:';
                                    str += num % 17;
                                    str += '/17';
                                    return str;
                                },
                            },
                        },
                        君恩: {
                            audio: 'ext:极限突破/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                const hs = player.getCards('h');
                                if (hs.length < 2) {
                                    return false;
                                }
                                let red = 0,
                                    black = 0;
                                for (let i of hs) {
                                    if (get.color(i, player) == 'red') {
                                        red++;
                                    } else {
                                        black++;
                                    }
                                    if (red > 1 || black > 1) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            complexCard: true,
                            selectCard: 1,
                            filterCard(card, player) {
                                if (ui.selected.cards.length) {
                                    return get.color(card, player) == get.color(ui.selected.cards[0], player);
                                }
                                const color = get.color(card, player);
                                return (
                                    player.countCards('h', function (cardx) {
                                        return cardx != card && color == get.color(cardx, player);
                                    }) > 0
                                );
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            position: 'h',
                            content() {
                                target.draw(5);
                                target.recover();
                                player.draw(5);
                                player.recover();
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target: 2,
                                },
                            },
                        },
                        天威: {
                            audio: 'shiyuan',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                let num = 2;
                                return (
                                    player != event.player &&
                                    player.getHistory('gain', function (evt) {
                                        return evt.getParent(2).name == 'shiyuan' && evt.cards.length == 2 + get.sgn(event.player.hp - player.hp);
                                    }).length < num
                                );
                            },
                            content() {
                                player.draw(2 + get.sgn(trigger.player.hp - player.hp));
                            },
                        },
                        神罚: {
                            audio: 'ext:极限突破/audio:2',
                            enable: 'phaseUse',
                            limited: true,
                            content() {
                                'step 0';
                                player.loseHp(3);
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                player.line(event.targets, 'green');
                                event.targets2 = event.targets.slice(0);
                                event.targets3 = event.targets.slice(0);
                                ('step 1');
                                if (event.targets2.length) {
                                    event.targets2.shift().damage('nocard');
                                    event.redo();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    event.current = event.targets.shift();
                                    event.current.discard(event.current.getCards('e')).delay = false;
                                }
                                ('step 3');
                                if (event.targets.length) {
                                    event.goto(2);
                                }
                                ('step 4');
                                if (event.targets3.length) {
                                    let target = event.targets3.shift();
                                    target.chooseToDiscard(30, 'h', true).delay = false;
                                }
                                ('step 5');
                                if (event.targets3.length) {
                                    event.goto(4);
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        if (player.hp < 5 || player.hasUnknown()) {
                                            return 0;
                                        }
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
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
                        肃清: {
                            audio: 'ext:极限突破/audio:2',
                            enable: 'phaseUse',
                            limited: true,
                            content() {
                                'step 0';
                                player.loseHp(3);
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                player.line(event.targets, 'green');
                                event.targets2 = event.targets.slice(0);
                                event.targets3 = event.targets.slice(0);
                                ('step 1');
                                if (event.targets2.length) {
                                    event.targets2.shift().damage('nocard');
                                    event.redo();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    event.current = event.targets.shift();
                                    event.current.discard(event.current.getCards('e')).delay = false;
                                }
                                ('step 3');
                                if (event.targets.length) {
                                    event.goto(2);
                                }
                                ('step 4');
                                if (event.targets3.length) {
                                    let target = event.targets3.shift();
                                    target.chooseToDiscard(99, 'h', true).delay = false;
                                }
                                ('step 5');
                                if (event.targets3.length) {
                                    event.goto(4);
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        if (player.hp < 5 || player.hasUnknown()) {
                                            return 0;
                                        }
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
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
                        天眷: {
                            mod: {
                                maxHandcardBase(player) {
                                    return player.maxHp + 3;
                                },
                            },
                            audio: 'ext:极限突破/audio:2',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return event.type == 'dying' && player == event.dying && player.countCards('he') > 1;
                            },
                            selectCard: 3,
                            filterCard: true,
                            position: 'he',
                            check(card) {
                                return 1 / Math.max(0.1, get.value(card));
                            },
                            content() {
                                player.recover(1);
                            },
                            ai: {
                                save: true,
                                skillTagFilter(player, tag, target) {
                                    return player == target;
                                },
                                order: 1.4,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        庙算: {
                            usable: 1,
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.parent.triggeredTargets3.length > 1) {
                                    return false;
                                }
                                if (!['basic', 'trick'].includes(get.type(event.card))) {
                                    return false;
                                }
                                if (player.maxHp > 5) {
                                    return false;
                                }
                                if (get.tag(event.card, 'damage')) {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('庙算'), function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        return 2 - get.attitude(_status.event.player, target);
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    event.target = target;
                                    event.choice = {
                                        basic: false,
                                        trick: false,
                                        equip: false,
                                    };
                                    player.chooseBool('是否押基本牌？').ai = function (event, player) {
                                        let rand = 0.95;
                                        if (!target.countCards('h', { type: ['basic'] })) {
                                            rand = 0.05;
                                        }
                                        if (!target.countCards('h')) {
                                            rand = 0;
                                        }
                                        return Math.random() < rand ? true : false;
                                    };
                                } else {
                                    player.getStat('triggerSkill').miaosuan--;
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.choice.basic = true;
                                }
                                player.chooseBool('是否押锦囊牌？').ai = function (event, player) {
                                    let rand = 0.9;
                                    if (!target.countCards('h', { type: ['trick', 'delay'] })) {
                                        rand = 0.1;
                                    }
                                    if (!target.countCards('h')) {
                                        rand = 0;
                                    }
                                    return Math.random() < rand ? true : false;
                                };
                                ('step 3');
                                if (result.bool) {
                                    event.choice.trick = true;
                                }
                                player.chooseBool('是否押装备牌？').ai = function (event, player) {
                                    let rand = 0.75;
                                    if (!target.countCards('h', { type: ['equip'] })) {
                                        rand = 0.25;
                                    }
                                    if (!target.countCards('h')) {
                                        rand = 0;
                                    }
                                    return Math.random() < rand ? true : false;
                                };
                                ('step 4');
                                if (result.bool) {
                                    event.choice.equip = true;
                                }
                                const reality = {
                                    basic: false,
                                    trick: false,
                                    equip: false,
                                };
                                const he = target.getCards('h');
                                for (let i = 0; i < he.length; i++) {
                                    reality[get.type(he[i], 'trick')] = true;
                                }
                                event.num = 0;
                                const tl = ['basic', 'trick', 'equip'];
                                for (let i = 0; i < tl.length; i++) {
                                    if (event.choice[tl[i]] == reality[tl[i]]) {
                                        event.num++;
                                    }
                                }
                                ('step 5');
                                player.popup('猜对' + get.cnNumber(event.num) + '项');
                                game.log(player, '猜对了' + get.cnNumber(event.num) + '项');
                                if (event.num > 0) {
                                    player.gainPlayerCard(target);
                                }
                                if (event.num > 1) {
                                    player.gainMaxHp();
                                }
                                if (event.num > 2) {
                                    trigger.parent.baseDamage++;
                                }
                                if (event.num > 2) {
                                    player.draw(3);
                                    player.chooseToDiscard(3);
                                }
                            },
                            ai: {
                                threaten: 2.4,
                            },
                        },
                        天妒: {
                            mod: {
                                cardname(card, player) {
                                    if (card.name == 'tao') {
                                        return 'chuqibuyi';
                                    }
                                },
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('h', 'tao')) {
                                        return false;
                                    }
                                },
                                respondSha: true,
                            },
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: ['useCard1', 'respond'],
                            },
                            firstDo: true,
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'chuqibuyi' && !event.skill && event.cards.length == 1 && event.cards[0].name == 'tao';
                            },
                            content() { },
                        },
                        对策: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                let num = 0;
                                player.getHistory('gain', function (evt) {
                                    num += evt.cards.length;
                                });
                                if (num < 3) {
                                    return false;
                                }
                                return (
                                    player.countCards('h') > 0 &&
                                    game.hasPlayer(function (current) {
                                        return player != current && player.canCompare(current);
                                    })
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('对策'), function (card, player, target) {
                                        return player.canCompare(target);
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target) / target.countCards('h');
                                    });
                                ('step 1');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    event.target = target;
                                    player.chooseToCompare(target);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    let card = { name: 'juedou' };
                                    if (player.canUse(card, target, false)) {
                                        player.useCard(card, target, false).card.duicei = true;
                                    }
                                } else {
                                    player.gainPlayerCard(target);
                                    player.damage(target);
                                }
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!arg || !arg.card || arg.card.duice != true) {
                                        return false;
                                    }
                                },
                            },
                        },
                        遗策: {
                            audio: 'nsyice', //QQQ
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = 1;
                                ('step 1');
                                player.draw(player.getDamagedHp());
                                event.given = 0;
                                ('step 2');
                                if (player.maxHp > 4) {
                                    player.loseMaxHp(2);
                                }
                                ('step 3');
                                player.chooseCardTarget({
                                    filterCard: true,
                                    selectCard: [1, 2 - event.given],
                                    filterTarget(card, player, target) {
                                        return player != target && target != event.temp;
                                    },
                                    ai1(card) {
                                        if (ui.selected.cards.length) {
                                            return -1;
                                        }
                                        if (card.name == 'du') {
                                            return 20;
                                        }
                                        return _status.event.player.countCards('h') - _status.event.player.hp;
                                    },
                                    ai2(target) {
                                        let att = get.attitude(_status.event.player, target);
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            if (target.hasSkillTag('nodu')) {
                                                return 0;
                                            }
                                            return 1 - att;
                                        }
                                        return att - 4;
                                    },
                                    prompt: '请选择要送人的卡牌',
                                });
                                ('step 4');
                                if (result.bool) {
                                    player.line(result.targets, 'green');
                                    result.targets[0].gain(result.cards, player, 'giveAuto');
                                    event.given += result.cards.length;
                                    if (event.given < 2) {
                                        event.temp = result.targets[0];
                                        event.goto(2);
                                    } else if (event.count < trigger.num) {
                                        delete event.temp;
                                        event.count++;
                                        player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                                    } else {
                                        event.finish();
                                    }
                                } else if (event.count < trigger.num) {
                                    delete event.temp;
                                    event.count++;
                                    player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                                } else {
                                    event.finish();
                                }
                                ('step 5');
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
                                            if (player.hasSkillTag('jueqing', false, target)) {
                                                return [1, -2];
                                            }
                                            if (!target.hasFriend()) {
                                                return;
                                            }
                                            let num = 1;
                                            if (get.attitude(player, target) > 0) {
                                                if (player.needsToDiscard()) {
                                                    num = 0.7;
                                                } else {
                                                    num = 0.5;
                                                }
                                            }
                                            if (player.hp >= 4) {
                                                return [1, num * 2];
                                            }
                                            if (target.hp == 3) {
                                                return [1, num * 1.5];
                                            }
                                            if (target.hp == 2) {
                                                return [1, num * 0.5];
                                            }
                                        }
                                    },
                                },
                                threaten: 0.6,
                            },
                        },
                        铁壁: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.tag(event.card, 'damage') > 0 && !player.getStorage('dinghan_clear').includes(event.card.name);
                            },
                            content() {
                                trigger.targets.remove(player);
                                trigger.parent.triggeredTargets2.remove(player);
                                trigger.untrigger();
                            },
                            subSkill: {
                                clear: {},
                            },
                        },
                        神陨: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.maxHp > 0;
                            },
                            content() {
                                player.loseMaxHp();
                                player.draw(3);
                            },
                        },
                        博学: {
                            audio: 'shelie',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                'step 0';
                                trigger.changeToZero();
                                event.cards = get.cards(Math.max(5, game.countPlayer()));
                                game.cardsGotoOrdering(event.cards);
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards) {
                                        let str;
                                        if (player == game.me && !_status.auto) {
                                            str = '博学:获取花色各不相同的牌';
                                        } else {
                                            str = '博学';
                                        }
                                        const dialog = ui.create.dialog(str, cards);
                                        dialog.videoId = id;
                                    },
                                    player,
                                    event.videoId,
                                    event.cards
                                );
                                event.time = get.utc();
                                game.addVideo('showCards', player, ['博学', get.cardsInfo(event.cards)]);
                                game.addVideo('delay', null, 2);
                                ('step 1');
                                let next = player.chooseButton([0, 8], true);
                                next.set('dialog', event.videoId);
                                next.set('filterButton', function (button) {
                                    for (let i = 0; i < ui.selected.buttons.length; i++) {
                                        if (ui.selected.buttons[i].link.suit == button.link.suit) {
                                            return false;
                                        }
                                    }
                                    return true;
                                });
                                next.set('ai', function (button) {
                                    return get.value(button.link, _status.event.player);
                                });
                                ('step 2');
                                if (result.bool && result.links) {
                                    event.cards2 = result.links;
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                game.broadcastAll('closeDialog', event.videoId);
                                const cards2 = event.cards2;
                                player.gain(cards2, 'log', 'gain2');
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        约盟: {
                            enable: 'phaseUse',
                            usable: 3,
                            filter(event, player) {
                                return game.hasPlayer((current) => lib.skill.oldimeng.filterTarget(null, player, current));
                            },
                            selectTarget: 2,
                            complexTarget: true,
                            filterTarget(card, player, target) {
                                if (target == player) {
                                    return false;
                                }
                                const ps = player.countCards('he');
                                if (!ui.selected.targets.length) {
                                    const hs = target.countCards('h');
                                    return game.hasPlayer(function (current) {
                                        if (current == player || current == target) {
                                            return false;
                                        }
                                        const cs = current.countCards('h');
                                        return (hs > 0 || cs > 0) && Math.abs(hs - cs) <= ps;
                                    });
                                }
                                const current = ui.selected.targets[0],
                                    hs = target.countCards('h'),
                                    cs = current.countCards('h');
                                return (hs > 0 || cs > 0) && Math.abs(hs - cs) <= ps;
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                targets[0].swapHandcards(targets[1]);
                                let num = Math.abs(targets[0].countCards('h') - targets[1].countCards('h'));
                                if (num > 0) {
                                    player.addMark('oldimeng_discard', num, false);
                                    player.addTempSkill('oldimeng_discard', 'phaseUseAfter');
                                }
                            },
                            ai: {
                                threaten: 4.5,
                                pretao: true,
                                nokeep: true,
                                order: 1,
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if (!ui.selected.targets.length) {
                                            return -Math.sqrt(target.countCards('h'));
                                        }
                                        const h1 = ui.selected.targets[0].getCards('h'),
                                            h2 = target.getCards('h');
                                        if (h2.length > h1.length) {
                                            return 0;
                                        }
                                        const delval = get.value(h2, target) - get.value(h1, ui.selected.targets[0]);
                                        if (delval >= 0) {
                                            return 0;
                                        }
                                        return -delval * (h1.length - h2.length);
                                    },
                                },
                            },
                        },
                        jxtp_zhizheng: {
                            audio: 'ext:极限突破/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer((current) => lib.skill.rongbei.filterTarget(null, player, current));
                            },
                            filterTarget(card, player, target) {
                                for (let i = 1; i < 6; i++) {
                                    if (target.isEmpty(i)) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                player.awakenSkill('rongbei');
                                ('step 1');
                                while (!target.isEmpty(event.num)) {
                                    event.num++;
                                    if (event.num > 5) {
                                        event.finish();
                                        return;
                                    }
                                }
                                let card = get.cardPile2(function (card) {
                                    return get.subtype(card) == 'equip' + event.num && target.canUse(card, target);
                                });
                                if (card) {
                                    target.chooseUseTarget(card, true, 'nopopup');
                                }
                                event.num++;
                                if (event.num <= 5) {
                                    event.redo();
                                }
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target(player, target) {
                                        return (target.hasSkillTag('noe') ? 2 : 1) * (5 - target.countCards('e') - target.countDisabled());
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
                        jxtp_zhengzhi: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                            },
                        },
                        修政: {
                            group: ['jxtp_zhengzhi', 'jxtp_zhizheng'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_poji1: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.name != 'wuxie' && get.color(card) != 'red') {
                                        return;
                                    }
                                    let cards = player.getCards('hs', function (card) {
                                        return card.name == 'wuxie' || get.color(card) == 'red';
                                    });
                                    cards.sort(function (a, b) {
                                        return (b.name == 'wuxie' ? 1 : 2) - (a.name == 'wuxie' ? 1 : 2);
                                    });
                                    const geti = function () {
                                        if (cards.includes(card)) {
                                            return cards.indexOf(card);
                                        }
                                        return cards.length;
                                    };
                                    if (card.name == 'wuxie') {
                                        return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                                    }
                                    return Math.max(num, [6, 4, 3][Math.min(geti(), 2)]);
                                },
                                aiUseful() {
                                    return lib.skill.kanpo.mod.aiValue.apply(this, arguments);
                                },
                            },
                            audio: 'ext:极限突破/audio:2',
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return get.color(card) == 'red';
                            },
                            viewAsFilter(player) {
                                return player.countCards('hs', { color: 'red' }) > 0;
                            },
                            viewAs: {
                                name: 'wuxie',
                            },
                            position: 'hs',
                            prompt: '将一张红色手牌当无懈可击使用',
                            check(card) {
                                const tri = _status.event.getTrigger();
                                if (tri && tri.card && tri.card.name == 'chiling') {
                                    return -1;
                                }
                                return 8 - get.value(card);
                            },
                            threaten: 1.2,
                            ai: {
                                basic: {
                                    useful: [6, 4, 3],
                                    value: [6, 4, 3],
                                },
                                result: {
                                    player: 1,
                                },
                                expose: 0.2,
                            },
                        },
                        jxtp_poji2: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.name != 'wuxie' && get.color(card) != 'black') {
                                        return;
                                    }
                                    let cards = player.getCards('hs', function (card) {
                                        return card.name == 'wuxie' || get.color(card) == 'black';
                                    });
                                    cards.sort(function (a, b) {
                                        return (b.name == 'wuxie' ? 1 : 2) - (a.name == 'wuxie' ? 1 : 2);
                                    });
                                    const geti = function () {
                                        if (cards.includes(card)) {
                                            return cards.indexOf(card);
                                        }
                                        return cards.length;
                                    };
                                    if (card.name == 'wuxie') {
                                        return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                                    }
                                    return Math.max(num, [6, 4, 3][Math.min(geti(), 2)]);
                                },
                                aiUseful() {
                                    return lib.skill.kanpo.mod.aiValue.apply(this, arguments);
                                },
                            },
                            audio: 'ext:极限突破/audio:2',
                            enable: 'chooseToUse',
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            viewAsFilter(player) {
                                return player.countCards('hs', { color: 'black' }) > 0;
                            },
                            viewAs: {
                                name: 'wuxie',
                            },
                            position: 'hs',
                            prompt: '将一张手牌当无懈可击使用',
                            check(card) {
                                const tri = _status.event.getTrigger();
                                if (tri && tri.card && tri.card.name == 'chiling') {
                                    return -1;
                                }
                                return 8 - get.value(card);
                            },
                            threaten: 1.2,
                            ai: {
                                basic: {
                                    useful: [6, 4, 3],
                                    value: [6, 4, 3],
                                },
                                result: {
                                    player: 1,
                                },
                                expose: 0.2,
                            },
                        },
                        jxtp_poji3: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.name != 'shan' && get.color(card) != 'red') {
                                        return;
                                    }
                                    let cards = player.getCards('hs', function (card) {
                                        return card.name == 'shan' || get.color(card) == 'red';
                                    });
                                    cards.sort(function (a, b) {
                                        return (b.name == 'shan' ? 1 : 2) - (a.name == 'shan' ? 1 : 2);
                                    });
                                    const geti = function () {
                                        if (cards.includes(card)) {
                                            return cards.indexOf(card);
                                        }
                                        return cards.length;
                                    };
                                    if (card.name == 'shan') {
                                        return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                                    }
                                    return Math.max(num, [6.5, 4, 3][Math.min(geti(), 2)]);
                                },
                                aiUseful() {
                                    return lib.skill.qingguo.mod.aiValue.apply(this, arguments);
                                },
                            },
                            audio: 'ext:极限突破/audio:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                return get.color(card) == 'red';
                            },
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hs', { color: 'red' })) {
                                    return false;
                                }
                            },
                            position: 'hs',
                            prompt: '将一张红色手牌当闪使用或打出',
                            check() {
                                return 1;
                            },
                            ai: {
                                order: 3,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('hs', { color: 'red' })) {
                                        return false;
                                    }
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan') && current < 0) {
                                            return 0.6;
                                        }
                                    },
                                },
                                basic: {
                                    useful: [7, 5.1, 2],
                                    value: [7, 5.1, 2],
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        破计: {
                            group: ['jxtp_poji1', 'jxtp_poji2', 'jxtp_poji3', 'jxtp_kongcheng'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_fawu: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return player.countMark('spwuku') > 3;
                            },
                            content() {
                                player.removeSkill('jxtp_fawu');
                                player.loseMaxHp(1);
                                player.recover(99);
                                player.addSkillLog('jxtp_pozhu');
                            },
                            derivation: 'jxtp_pozhu',
                        },
                        jxtp_chenyan: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return player.countMark('spwuku') > 0;
                            },
                            content() {
                                player.removeSkill('jxtp_chenyan');
                                player.loseMaxHp(1);
                                player.recover(99);
                                player.addSkillLog('jxtp_fawu');
                                player.addSkillLog('jxtp_sanchen');
                            },
                            derivation: 'jxtp_sanchen',
                        },
                        jxtp_sanchen: {
                            audio: 'ext:极限突破/audio:2',
                            enable: 'phaseUse',
                            usable: 3,
                            filter(event, player) {
                                const stat = player.getStat('sanchen');
                                return game.hasPlayer(function (current) {
                                    return !stat || !stat.includes(current);
                                });
                            },
                            filterTarget(card, player, target) {
                                const stat = player.getStat('sanchen');
                                return !stat || !stat.includes(target);
                            },
                            content() {
                                'step 0';
                                const stat = player.getStat();
                                if (!stat.sanchen) {
                                    stat.sanchen = [];
                                }
                                stat.sanchen.push(target);
                                if (get.mode() != 'guozhan') {
                                    player.addMark('sanchen', 1, false);
                                }
                                target.draw(3);
                                ('step 1');
                                if (!target.countCards('he')) {
                                    event.finish();
                                } else {
                                    target.chooseToDiscard('he', true, 3).set('ai', function (card) {
                                        let list = ui.selected.cards.map(function (i) {
                                            return get.type2(i);
                                        });
                                        if (!list.includes(get.type2(card))) {
                                            return 7 - get.value(card);
                                        }
                                        return -get.value(card);
                                    });
                                }
                                ('step 2');
                                if (result.bool && result.cards && result.cards.length) {
                                    let list = [];
                                    for (let i of result.cards) {
                                        list.add(get.type2(i));
                                    }
                                    if (list.length == result.cards.length) {
                                        target.draw(3);
                                        player.getStat('skill').sanchen--;
                                        if (get.mode() == 'guozhan') {
                                            player.addTempSkill('pozhu');
                                        }
                                    }
                                } else {
                                    target.draw();
                                    player.getStat('skill').sanchen--;
                                    if (get.mode() == 'guozhan') {
                                        player.addTempSkill('pozhu');
                                    }
                                }
                            },
                            ai: {
                                order: 9,
                                threaten: 1.7,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) {
                                            return 0.1;
                                        }
                                        return Math.sqrt(target.countCards('he'));
                                    },
                                },
                            },
                            intro: {
                                content: '已发动过#次技能',
                            },
                            marktext: '陈',
                        },
                        君威: {
                            group: ['rerende', 'rejianxiong', 'rezhiheng', 'reguicai', 'feiying', 'fangzhu', 'huituo', 'reyanzhu', 'jxtp_mingzhi'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_mingzhi: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.countCards('h') < Math.min(8, game.countPlayer());
                            },
                            content() {
                                player.drawTo(Math.min(8, game.countPlayer()));
                            },
                        },
                        jxtp_xiaoluan: {
                            audio: 'drlt_xiongluan',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (player.storage.drlt_xiongluan) {
                                    return false;
                                }
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                let card = get.discardPile(function (card) {
                                    return card.name == 'sha';
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                }
                                ('step 2');
                                player.addTempSkill('jxtp_jiming');
                                player.addTempSkill('drlt_xiongluan_effect');
                                player.storage.drlt_xiongluan_effect = [target];
                                target.addTempSkill('fengyin');
                                target.addSkill('drlt_xiongluan_ban');
                                target.markSkillCharacter('drlt_xiongluan_effect', player, '雄乱', '无法使用或打出任何手牌');
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target(player, target) {
                                        if (target.getEquip('bagua') || target.getEquip('rewrite_bagua')) {
                                            return 0;
                                        }
                                        const hs = player.countCards('h', function (card) {
                                            return ['sha', 'juedou'].includes(card.name) && get.effect(target, card, player, player) != 0;
                                        });
                                        const ts = target.hp;
                                        if (hs >= ts && ts > 1) {
                                            return -1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        jxtp_jiming: {
                            audio: 'kuanggu_ol_weiyan',
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return get.distance(player, event.player) <= 99 && event.num > 0;
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                let choice;
                                if (
                                    player.isDamaged() &&
                                    get.recoverEffect(player) > 0 &&
                                    player.countCards('hs', function (card) {
                                        return card.name == 'sha' && player.hasValueTarget(card);
                                    }) >= player.getCardUsable('sha')
                                ) {
                                    player.draw();
                                }
                            },
                        },
                        jxtp_juehu: {
                            nobracket: true,
                            audio: 'juece',
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.isMinHp() || current.countCards('h') <= player.countCards('h') || current.countCards('e') <= player.countCards('e');
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('灭绝'), function (card, player, target) {
                                        return target.Hp != player.Hp || target.countCards('h') <= player.countCards('h') || target.countCards('e') <= player.countCards('e');
                                    })
                                    .set('ai', function (target) {
                                        const player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets[0], 'white');
                                    result.targets[0].damage();
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        灭绝: {
                            group: ['jxtp_juehu', 'rejuece', 'juece'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        热狱: {
                            enable: 'phaseUse',
                            audio: 'fencheng',
                            usable: 1,
                            content() {
                                'step 0';
                                event.current = player.next;
                                player.line(event.current, 'white');
                                ('step 1');
                                event.current.chooseControl('弃牌', '受伤').ai = function () {
                                    if (event.current.hasSkillTag('nofire')) {
                                        return '受伤';
                                    }
                                    if (event.current.countCards('h', { type: 'basic' }) > 0) {
                                        return '弃牌';
                                    }
                                    if (event.current.hp < 4) {
                                        return '弃牌';
                                    }
                                    if (event.current.hp > 4) {
                                        return '受伤';
                                    }
                                    return '弃牌';
                                };
                                ('step 2');
                                if (result.control == '弃牌') {
                                    if (event.current.countCards('he') > 3) {
                                        event.current.chooseToDiscard('he', true, 4);
                                    } else {
                                        const damage = [2];
                                        event.current.damage(damage.randomGet(), 'fire');
                                    }
                                } else {
                                    const damage = [2];
                                    event.current.damage(damage.randomGet(), 'fire');
                                }
                                ('step 3');
                                if (event.current.next != player) {
                                    event.current.line(event.current.next, 'white');
                                    event.current = event.current.next;
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player, 'fire'));
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        毒谋: {
                            mod: {
                                cardname(card, player) {
                                    if (card.name == 'sha') {
                                        return 'tiesuo';
                                    }
                                },
                            },
                            audio: 'ext:极限突破/audio:2',
                            enable: 'phaseUse',
                            usable: 3,
                            filter(event, player) {
                                return player.countCards('he', { color: 'black' });
                            },
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he') > 0;
                            },
                            discard: false,
                            delay: false,
                            loseTo: 'cardPile',
                            insert: true,
                            visible: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.showCards(cards);
                                ('step 1');
                                if (
                                    !target.countCards('he', function (card) {
                                        if (get.type2(card) == 'trick') {
                                            return true;
                                        }
                                        return lib.filter.cardDiscardable(card, target, 'remieji');
                                    })
                                ) {
                                    event.finish();
                                } else {
                                    target
                                        .chooseCard('he', true, function (card, player) {
                                            if (get.type2(card) == 'trick') {
                                                return true;
                                            }
                                            return lib.filter.cardDiscardable(card, player, 'remieji');
                                        })
                                        .set('prompt', '选择交给' + get.translation(player) + '一张锦囊牌,或依次弃置两张非锦囊牌');
                                }
                                ('step 2');
                                if (result.cards && result.cards.length) {
                                    if (get.type2(result.cards[0]) == 'trick') {
                                        player.gain(result.cards, target, 'giveAuto');
                                        event.finish();
                                    } else {
                                        target.discard(result.cards);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (
                                    target.countCards('he', function (card) {
                                        return get.type2(card) != 'trick';
                                    })
                                ) {
                                    target.chooseToDiscard('he', true, function (card) {
                                        return get.type2(card) != 'trick';
                                    });
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        jxtp_zhanyuan: {
                            audio: 'zhanyuan',
                            forced: true,
                            filter(event, player) {
                                return player.countMark('jxtp_manyi') >= 5;
                            },
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            content() {
                                'step 0';
                                player.removeSkill('jxtp_zhanyuan');
                                player.removeSkill('jxtp_yuxiang');
                                player.addSkill('jxtp_yuxiang2');
                                ('step 1');
                                player.chooseTarget('是否令一名其他男性角色获得〖蛮裔〗并与你共同获得〖系力〗？', function (card, player, target) {
                                    return target != player && target.hasSex('male');
                                }).ai = function (target) {
                                    return get.attitude(_status.event.player, target);
                                };
                                ('step 2');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    player.line(target, 'fire');
                                    player.addSkill('hmxili');
                                    target.addSkill('hmxili');
                                    target.addSkill('jxtp_manyi');
                                    target.drawTo(Math.min(8, game.countPlayer()));
                                    target.gainMaxHp();
                                    target.recover(9);
                                } else {
                                    player.gainMaxHp();
                                    player.recover(9);
                                    player.drawTo(player.maxHp);
                                }
                            },
                        },
                        jxtp_manyi: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                                globalTo(from, to, distance) {
                                    return distance + 2;
                                },
                                targetEnabled(card, player, target) {
                                    if (card.name == 'nanman') {
                                        return false;
                                    }
                                },
                            },
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'nanman';
                            },
                            forced: true,
                            content() {
                                player.draw(1);
                                player.addMark('jxtp_manyi', 1, false);
                            },
                            intro: {
                                content: '已累计造成#次伤害',
                            },
                            group: ['jxtp_manyi_gain'],
                            subSkill: {
                                gain: {
                                    audio: 'mansi',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('jxtp_manyi') >= 9;
                                    },
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    content() {
                                        let num = player.countMark('jxtp_manyi');
                                        player.removeMark('jxtp_manyi', num);
                                        player.gainMaxHp();
                                        player.recover();
                                    },
                                },
                            },
                        },
                        jxtp_qianzhi: {
                            audio: 'yizheng',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return 0 <= player.hp && player.canCompare(current);
                                });
                            },
                            filterTarget(card, player, current) {
                                return current.hp <= player.hp && player.canCompare(current);
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                player.chooseToCompare(target);
                                ('step 2');
                                if (result.bool) {
                                    target.skip('phaseDraw');
                                    target.skip('phaseUse');
                                } else {
                                    player.damage(target);
                                    player.removeSkill('jxtp_qianzhi');
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.skipList.includes('phaseDraw') || target.hasSkill('pingkou')) {
                                            return 0;
                                        }
                                        const hs = player.getCards('h').sort(function (a, b) {
                                            return b.number - a.number;
                                        });
                                        const ts = target.getCards('h').sort(function (a, b) {
                                            return b.number - a.number;
                                        });
                                        if (!hs.length || !ts.length) {
                                            return 0;
                                        }
                                        if (hs[0].number > ts[0].number) {
                                            return -1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        jxtp_zhaohan: {
                            audio: 'zhaohan',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                if (player.phaseNumber < 4) {
                                    player.gainMaxHp();
                                    player.recover();
                                } else {
                                    player.recover();
                                }
                                player.addSkill('jxtp_qianzhi');
                            },
                        },
                        jxtp_yuxiang: {
                            audio: 'manyi',
                            position: 'h',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: -1,
                            filter(event, player) {
                                const hs = player.getCards('h');
                                if (!hs.length) {
                                    return false;
                                }
                                for (let i = 0; i < hs.length; i++) {
                                    const mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 === false) {
                                        return false;
                                    }
                                }
                                return true;
                            },
                            viewAs: {
                                name: 'nanman',
                            },
                            ai: {
                                order: 0.1,
                                nokeep: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag === 'nokeep') {
                                        return (!arg || (arg.card && arg.card.name === 'tao')) && player.isPhaseUsing() && !player.getStat('skill').jxtp_yuxiang && player.hasCard((card) => card.name !== 'tao', 'h');
                                    }
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) {
                                            return 0;
                                        }
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: [5, 1],
                                    value: 5,
                                },
                                result: {
                                    target_use(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') {
                                            return 0;
                                        }
                                        const nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) {
                                                return -100;
                                            }
                                        }
                                        if (nh == 0) {
                                            return -2;
                                        }
                                        if (nh == 1) {
                                            return -1.7;
                                        }
                                        return -1.5;
                                    },
                                    target(player, target) {
                                        const nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) {
                                                return -100;
                                            }
                                        }
                                        if (nh == 0) {
                                            return -2;
                                        }
                                        if (nh == 1) {
                                            return -1.7;
                                        }
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
                            group: ['jxtp_yuxiang_zhunbei'],
                            subSkill: {
                                zhunbei: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    check(event, player) {
                                        return player.getFriends().length < player.getEnemies().length;
                                    }, //QQQ
                                    content() {
                                        let list = game.filterPlayer(function (current) {
                                            return player.canUse('nanman', current) && current.isEnemiesOf(player);
                                        });
                                        list.sort(lib.sort.seat);
                                        player.useCard({ name: 'nanman' }, list);
                                    },
                                    ai: {
                                        threaten: 1.8,
                                    },
                                },
                            },
                        },
                        jxtp_gongxin: {
                            audio: 'gongxin',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            position: 'he',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                target.addTempSkill('fengyin');
                                target.gain(target.getCards('e'), 'gain2');
                                player.gainPlayerCard(target, 2, 'h', true, 'visible');
                            },
                            ai: {
                                order: 6,
                                result: {
                                    player: 0.5,
                                    target(player, target) {
                                        if (target.hasSkillTag('noh')) {
                                            return 0;
                                        }
                                        return -1;
                                    },
                                },
                            },
                        },
                        jxtp_zhanshen: {
                            audio: 'ext:极限突破/audio:2',
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.color(card) == 'red') {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.color(card) == 'red') {
                                        return false;
                                    }
                                },
                                targetInRange(card) {
                                    if (get.color(card) == 'red') {
                                        return true;
                                    } //QQQ
                                },
                                cardUsable(card) {
                                    if (get.color(card) == 'black') {
                                        return Infinity;
                                    }
                                },
                            },
                        },
                        jxtp_shenyong: {
                            group: ['jxtp_zhanshen', 'wushuang1'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_tianming: {
                            audio: 'tianming',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            check(event, player) {
                                let cards = player.getCards('h');
                                if (cards.length <= 2) {
                                    for (let i = 0; i < cards.length; i++) {
                                        if (cards[i].name == 'shan' || cards[i].name == 'tao') {
                                            return false;
                                        }
                                    }
                                }
                                return true;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.draw(3);
                                player.chooseToDiscard(3, true, 'he');
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha') {
                                            return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_shenqu: {
                            audio: 'shenqu',
                            trigger: {
                                player: 'phaseZhunbeiEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp < 4;
                            },
                            content() {
                                'step 0';
                                if (game.countPlayer() > 3) {
                                    player.gainMaxHp(game.countPlayer() - player.maxHp, true);
                                } else {
                                    if (player.maxHp == 1) {
                                        player.gainMaxHp(3);
                                    } else {
                                        if (player.maxHp == 2) {
                                            player.gainMaxHp(2);
                                        } else {
                                            if (player.maxHp == 3) {
                                                player.gainMaxHp();
                                            } else {
                                                if (player.maxHp == 5) {
                                                    player.loseMaxHp(1);
                                                } else {
                                                    if (player.maxHp == 6) {
                                                        player.loseMaxHp(2);
                                                    } else {
                                                        if (player.maxHp == 7) {
                                                            player.loseMaxHp(3);
                                                        } else {
                                                            if (player.maxHp == 8) {
                                                                player.loseMaxHp(4);
                                                            } else {
                                                                player.recover();
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                ('step 1');
                                player.recover(4 - player.hp);
                            },
                        },
                        jxtp_shenwei: {
                            audio: 'shenwei',
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                if (player.maxHp < 4) {
                                    return false;
                                }
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw(2);
                                ('step 1');
                                if (player.isDamaged()) {
                                    player.loseMaxHp();
                                } else {
                                    player.loseHp();
                                }
                            },
                        },
                        jxtp_jijiu: {
                            audio: 'ext:极限突破/audio:2',
                            usable: 3,
                            enable: 'chooseToUse',
                            filterCard: true,
                            prompt: '弃置一张牌然后视为使用一张【酒】',
                            filter(event, player) {
                                if (player.countCards('he') <= 0) {
                                    return false;
                                }
                                return event.filterCard({ name: 'jiu' }, player, event);
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            position: 'he',
                            delay: false,
                            content() {
                                player.useCard({ name: 'jiu' }, false, player);
                                player.addTempSkill('jxtp_jj');
                            },
                            ai: {
                                save: true,
                                order() {
                                    return get.order({ name: 'sha' }) + 1;
                                },
                                skillTagFilter(player) {
                                    if (player.getStat().skill.jingyao > 0) {
                                        return false;
                                    }
                                    if (player.hp > 0) {
                                        return false;
                                    }
                                    return player.countCards('he') > 0;
                                },
                                result: {
                                    player(player) {
                                        if (player.hp <= 0) {
                                            return 3;
                                        }
                                        if (!player.countCards('h', 'sha')) {
                                            return 0;
                                        }
                                        const players = game.filterPlayer();
                                        for (let i = 0; i < players.length; i++) {
                                            if (get.attitude(player, players[i]) < 0) {
                                                if (player.canUse('sha', players[i], true, true)) {
                                                    return 1;
                                                }
                                            }
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        jxtp_jj: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            charlotte: true,
                            filter(event, player) {
                                if (event.target.hasSkill('jxtp_pohuai')) {
                                    return false;
                                }
                                return event.card && event.card.name == 'sha';
                            },
                            prompt2(event, player) {
                                return '令' + get.translation(event.target) + '的防具失效直到回合结束';
                            },
                            content() {
                                player.line(trigger.target, 'green');
                                trigger.target.addTempSkill('jxtp_pohuai');
                            },
                            ai: {
                                unequip2: true,
                            },
                        },
                        jxtp_pohuai: {
                            charlotte: true,
                            ai: {
                                unequip2: true,
                            },
                        },
                        jxtp_guimou: {
                            audio: 'ext:极限突破/audio:2',
                            group: ['jxtp_guimou_mark', 'jxtp_guimou_damage'],
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.storage.jxtp_guimou_mark.length != 0;
                            },
                            forced: true,
                            content() {
                                player.gain(player.storage.jxtp_guimou_mark, 'draw');
                                game.log(player, '从武将牌上获得了', player.storage.jxtp_guimou_mark);
                                player.storage.jxtp_guimou_mark.length = 0;
                                player.unmarkSkill('jxtp_guimou_mark');
                            },
                            subSkill: {
                                mark: {
                                    audio: 'ext:极限突破/audio:1',
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.storage.jxtp_guimou_mark.length >= Math.max(4, player.maxHp)) {
                                            return false;
                                        }
                                        if (!['useSkill', 'discard', 'jxtp_tachen', 'duoduan', 'xinfu_jingxie2'].includes(event.parent.name)) {
                                            return false;
                                        }
                                        for (const card of event.cards) {
                                            if (get.position(card, true) == 'd') {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    init(player) {
                                        if (!player.storage.jxtp_guimou_mark) {
                                            player.storage.jxtp_guimou_mark = [];
                                        }
                                    },
                                    async content(event, trigger, player) {
                                        let cards1;
                                        const tempCards = trigger.cards.filter((card) => get.position(card, true) != 'd');
                                        const space = Math.max(4, player.maxHp) - player.storage.jxtp_guimou_mark.length;
                                        if (tempCards.length <= space) {
                                            cards1 = tempCards;
                                        } else {
                                            const { links } = await player
                                                .chooseCardButton('因失去牌触发〖鬼谋〗,请选择' + get.cnNumber(space) + '张牌置于武将牌上', true, tempCards, space)
                                                .set('ai', (button) => get.value(button.link))
                                                .forResult();
                                            if (links?.length) {
                                                cards1 = links;
                                            }
                                        }
                                        game.log(player, '将', cards1, '放到了武将牌上');
                                        player.markAuto('jxtp_guimou_mark', cards1);
                                        game.cardsGotoSpecial(cards1);
                                        for (const i of tempCards.filter((card) => !cards1.includes(card))) {
                                            ui.discardPile.appendChild(i);
                                        }
                                    }, //QQQ
                                    intro: {
                                        content: 'cards',
                                        onunmark: 'throw',
                                    },
                                },
                                damage: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return player.storage.jxtp_guimou_mark.length;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        lib.count = trigger.num;
                                        ('step 1');
                                        player.chooseCardButton('选择获得一张【谋】并摸两张牌', true, player.storage.jxtp_guimou_mark);
                                        ('step 2');
                                        if (result.bool) {
                                            lib.count--;
                                            player.gain(result.links[0], 'gain2');
                                            player.storage.jxtp_guimou_mark.remove(result.links[0]);
                                            player.draw(2);
                                            if (player.storage.jxtp_guimou_mark.length == 0) {
                                                player.unmarkSkill('jxtp_guimou_mark');
                                            } else {
                                                if (lib.count > 0) {
                                                    event.goto(1);
                                                }
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_yinren: {
                            audio: 'renjie',
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.gainMaxHp();
                                player.recover(99);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        jxtp_yr: {
                            group: ['jxtp_yinren', 'jxtp_fankui'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_guiyi: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.maxHp > game.players.length && !player.storage.juyi;
                            },
                            forced: true,
                            juexingji: true,
                            content() {
                                player.gainMaxHp();
                                player.recover(99);
                                player.addSkill('jxtp_cuiku');
                                player.storage.juyi = true;
                                player.removeSkill('jxtp_guiyi');
                                player.removeSkill('jxtp_yr');
                                player.removeSkill('jxtp_yinren');
                                player.removeSkill('jxtp_fankui');
                            },
                        },
                        jxtp_zhipan: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            logTarget: 'source',
                            preHidden: true,
                            filter(event, player) {
                                return event.source && event.source.countGainableCards(player, 'he') && event.num > 0 && event.source != player;
                            },
                            content() {
                                player.gainPlayerCard(99, true, trigger.source, 'he');
                                trigger.source.addTempSkill('fengyin');
                            }, //QQQ
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) {
                                                return [1, -1.5];
                                            }
                                            if (get.attitude(target, player) < 0) {
                                                return [1, 1];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_guicai: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('hes') > 0;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('jxtp_guicai'), 'hes', function (card) {
                                        const player = _status.event.player;
                                        const mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        if (mod2 != 'unchanged') {
                                            return mod2;
                                        }
                                        const mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                        if (mod != 'unchanged') {
                                            return mod;
                                        }
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        const trigger = _status.event.getTrigger();
                                        const player = _status.event.player;
                                        const judging = _status.event.judging;
                                        let result = trigger.judge(card) - trigger.judge(judging);
                                        const attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0 || result == 0) {
                                            return 0;
                                        }
                                        if (attitude > 0) {
                                            return result - get.value(card) / 2;
                                        } else {
                                            return -result - get.value(card) / 2;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 2');
                                if (result.bool) {
                                    player.respond(result.cards, 'highlight', 'jxtp_guicai', 'noOrdering');
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    let card = result.cards[0];
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.orderingCards.addArray(result.cards);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                                ('step 4');
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        jxtp_fankui: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            logTarget: 'source',
                            preHidden: true,
                            filter(event, player) {
                                return event.source && event.source.countGainableCards(player, 'he') && event.num > 0 && event.source != player;
                            },
                            content() {
                                player.gainPlayerCard(1, true, trigger.source, 'he');
                                let evt = _status.event;
                                for (let i = 0; i < 10; i++) {
                                    if (evt && evt.getParent) {
                                        evt = evt.parent;
                                    }
                                    if (evt.name == 'phaseUse') {
                                        evt.skipped = true;
                                        break;
                                    }
                                }
                            },
                            ai: {
                                maixie_defend: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) {
                                                return [1, -1.5];
                                            }
                                            if (get.attitude(target, player) < 0) {
                                                return [1, 1];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_hengsao: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                let cards = [];
                                player.getHistory('lose', function (evt) {
                                    if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) {
                                        cards.addArray(evt.cards2);
                                    }
                                });
                                return cards.length >= 0;
                            },
                            content() {
                                'step 0';
                                event.forceDie = true;
                                if (typeof event.count != 'number') {
                                    event.count = 1;
                                }
                                let recover = 0,
                                    lose = 0,
                                    players = game.filterPlayer();
                                for (let i = 0; i < players.length; i++) {
                                    if (players[i].hp < players[i].maxHp) {
                                        if (get.attitude(player, players[i]) > 0) {
                                            if (players[i].hp < 2) {
                                                lose--;
                                                recover += 0.5;
                                            }
                                            lose--;
                                            recover++;
                                        } else if (get.attitude(player, players[i]) < 0) {
                                            if (players[i].hp < 2) {
                                                lose++;
                                                recover -= 0.5;
                                            }
                                            lose++;
                                            recover--;
                                        }
                                    } else {
                                        if (get.attitude(player, players[i]) > 0) {
                                            lose--;
                                        } else if (get.attitude(player, players[i]) < 0) {
                                            lose++;
                                        }
                                    }
                                }
                                let prompt = get.prompt('jxtp_hengsao') + '(剩余' + get.cnNumber(event.count) + '次)';
                                player.chooseControl('发动', '取消', ui.create.dialog(get.prompt('jxtp_hengsao'), 'hidden')).ai = function () {
                                    if (lose > recover && lose > 0) {
                                        return 0;
                                    }
                                    return 1;
                                };
                                ('step 1');
                                if (result.control == '取消') {
                                    event.finish();
                                } else {
                                    event.bool = result.control == '发动';
                                    event.num = 0;
                                    event.players = game.filterPlayer();
                                }
                                ('step 2');
                                if (event.num < event.players.length) {
                                    let target = event.players[event.num];
                                    target.loseMaxHp(2);
                                    event.num++;
                                    event.redo();
                                }
                                ('step 3');
                                if (event.count > 1) {
                                    event.count--;
                                    event.goto(0);
                                }
                            },
                        },
                        jxtp_cuiku: {
                            group: ['jxtp_hengsao', 'jxtp_zhipan'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_beiwu: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.type(event.card) != 'equip') {
                                    return false;
                                }
                                return player.countMark('spwuku') < 9;
                            },
                            content() {
                                player.draw();
                                player.addMark('spwuku', 1);
                            },
                            marktext: '库',
                            intro: {
                                content: 'mark',
                            },
                        },
                        jxtp_pozhu: {
                            audio: 'ext:极限突破/audio:2',
                            usable: 3,
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (!player.countMark('spwuku') || !player.countCards('hse')) {
                                    return false;
                                }
                                for (let i of lib.inpile) {
                                    const type = get.type2(i);
                                    if ((type == 'basic' || type == 'trick') && lib.filter.filterCard({ name: i }, player, event)) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    let list = [];
                                    for (let i = 0; i < lib.inpile.length; i++) {
                                        let name = lib.inpile[i];
                                        if (name == 'sha') {
                                            if (event.filterCard && event.filterCard({ name: name }, player, event)) {
                                                list.push(['基本', '', 'sha']);
                                            }
                                            for (let j of lib.inpile_nature) {
                                                if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) {
                                                    list.push(['基本', '', 'sha', j]);
                                                }
                                            }
                                        } else if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) {
                                            list.push(['锦囊', '', name]);
                                        } else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) {
                                            list.push(['基本', '', name]);
                                        }
                                    }
                                    return ui.create.dialog('破竹', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    if (_status.event.parent.type != 'phase') {
                                        return 1;
                                    }
                                    const player = _status.event.player;
                                    if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) {
                                        return 0;
                                    }
                                    return player.getUseValue({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        audio: 'spmiewu',
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'hse',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            player.removeMark('spwuku', 1);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                const type = get.type2(name);
                                return (type == 'basic' || type == 'trick') && player.countMark('spwuku') > 0 && player.countCards('she') > 0;
                            },
                            ai: {
                                combo: 'spwuku',
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countMark('spwuku') || !player.countCards('hse')) {
                                        return false;
                                    }
                                },
                                order: 1,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) {
                                            return get.attitude(player, _status.event.dying);
                                        }
                                        return 1;
                                    },
                                },
                            },
                        },
                        jxtp_huashen_init: {
                            audio: 'jxtp_huashen',
                            trigger: {
                                global: 'gameDrawEnd',
                                player: 'enterGame',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                lib.skill.jxtp_huashen.addHuashens(player, Math.max(5, game.countPlayer()));
                                player.markSkill('jxtp_huashen');
                                let next = game.createEvent('jxtp_huashen');
                                next.player = player;
                                next._trigger = trigger;
                                next.triggername = 'jxtp_huashen';
                                next.setContent(lib.skill.jxtp_huashen.content);
                            },
                        },
                        jxtp_huashen: {
                            group: ['jxtp_huashen_init'],
                            audio: 'ext:极限突破/audio:2',
                            forced: true,
                            content() {
                                'step 0';
                                const chat = ['得道成仙,幻化无穷'].randomGet();
                                player.say(chat);
                                _status.noclearcountdown = true;
                                event.videoId = lib.status.videoId++;
                                let cards = player.storage.jxtp_huashen.character.slice(0);
                                const skills = [];
                                const sto = player.storage.jxtp_huashen;
                                for (let i in player.storage.jxtp_huashen.map) {
                                    skills.addArray(player.storage.jxtp_huashen.map[i]);
                                }
                                let cond = 'out';
                                if (event.triggername == 'phaseBegin') {
                                    cond = 'in';
                                }
                                skills.randomSort();
                                skills.sort(function (a, b) {
                                    return get.skillRank(b, cond) - get.skillRank(a, cond);
                                });
                                event.aiChoice = skills[0];
                                let choice = '更换化身';
                                if (event.aiChoice == player.storage.jxtp_huashen.current2 || get.skillRank(event.aiChoice, cond) < 1) {
                                    choice = '重铸化身';
                                }
                                if (player.isOnline2()) {
                                    player.send(
                                        function (cards, id) {
                                            const dialog = ui.create.dialog('是否发动【化身】？', [cards, 'character']);
                                            dialog.videoId = id;
                                        },
                                        cards,
                                        event.videoId
                                    );
                                }
                                event.dialog = ui.create.dialog(get.prompt('jxtp_huashen'), [cards, 'character']);
                                event.dialog.videoId = event.videoId;
                                if (!event.isMine()) {
                                    event.dialog.style.display = 'none';
                                }
                                if (event.triggername == 'jxtp_huashen') {
                                    event._result = { control: '更换化身' };
                                } else {
                                    player
                                        .chooseControl('重铸化身', '更换化身', 'cancel2')
                                        .set('ai', function () {
                                            return _status.event.choice;
                                        })
                                        .set('choice', choice);
                                }
                                ('step 1');
                                event.control = result.control;
                                if (event.control == 'cancel2') {
                                    if (player.isOnline2()) {
                                        player.send('closeDialog', event.videoId);
                                    }
                                    delete _status.noclearcountdown;
                                    if (!_status.noclearcountdown) {
                                        game.stopCountChoose();
                                    }
                                    event.dialog.close();
                                    event.finish();
                                    return;
                                }
                                let next = player.chooseButton(true).set('dialog', event.videoId);
                                if (event.control == '重铸化身') {
                                    next.set('selectButton', [1, 999]);
                                    next.set('filterButton', function (button) {
                                        return button.link != _status.event.current;
                                    });
                                    next.set('current', player.storage.jxtp_huashen.current);
                                } else {
                                    next.set('ai', function (button) {
                                        return player.storage.jxtp_huashen.map[button.link].includes(_status.event.choice) ? 2.5 : 1 + Math.random();
                                    });
                                    next.set('choice', event.aiChoice);
                                }
                                let prompt = event.control == '重铸化身' ? '选择任意数量要重铸的化身牌' : '选择要更换的化身牌';
                                const func = function (id, prompt) {
                                    const dialog = get.idDialog(id);
                                    if (dialog) {
                                        dialog.content.childNodes[0].innerHTML = prompt;
                                    }
                                };
                                if (player.isOnline2()) {
                                    player.send(func, event.videoId, prompt);
                                } else if (event.isMine()) {
                                    func(event.videoId, prompt);
                                }
                                ('step 2');
                                if (result.bool && event.control != '重铸化身') {
                                    event.card = result.links[0];
                                    const func = function (card, id) {
                                        const dialog = get.idDialog(id);
                                        if (dialog) {
                                            for (let i = 0; i < dialog.buttons.length; i++) {
                                                if (dialog.buttons[i].link == card) {
                                                    dialog.buttons[i].classList.add('selectedx');
                                                } else {
                                                    dialog.buttons[i].classList.add('unselectable');
                                                }
                                            }
                                        }
                                    };
                                    if (player.isOnline2()) {
                                        player.send(func, event.card, event.videoId);
                                    } else if (event.isMine()) {
                                        func(event.card, event.videoId);
                                    }
                                    event._result = {
                                        control: player.storage.jxtp_huashen.map[event.card].slice(0).filter((val) => {
                                            const infoSkill = lib.skill[val];
                                            if (!infoSkill) {
                                                return;
                                            }
                                            if (infoSkill.zhuSkill) {
                                                return;
                                            }
                                            return true;
                                        }),
                                    };
                                } else {
                                    lib.skill.jxtp_huashen.removeHuashen(player, result.links.slice(0));
                                    lib.skill.jxtp_huashen.addHuashens(player, result.links.length + 1);
                                }
                                ('step 3');
                                if (result.control == '返回') {
                                    const func = function (id) {
                                        const dialog = get.idDialog(id);
                                        if (dialog) {
                                            for (let i = 0; i < dialog.buttons.length; i++) {
                                                dialog.buttons[i].classList.remove('selectedx');
                                                dialog.buttons[i].classList.remove('unselectable');
                                            }
                                        }
                                    };
                                    if (player.isOnline2()) {
                                        player.send(func, event.videoId);
                                    } else if (event.isMine()) {
                                        func(event.videoId);
                                    }
                                    event._result = { control: '重铸化身' };
                                    event.goto(1);
                                    return;
                                }
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                delete _status.noclearcountdown;
                                if (!_status.noclearcountdown) {
                                    game.stopCountChoose();
                                }
                                if (event.control == '重铸化身') {
                                    return;
                                }
                                if (player.storage.jxtp_huashen.current != event.card) {
                                    player.storage.jxtp_huashen.current = event.card;
                                    game.broadcastAll(
                                        function (character, player) {
                                            player.sex = lib.character[character][0];
                                            player.group = lib.character[character][1];
                                            player.node.name.dataset.nature = get.groupnature(player.group);
                                        },
                                        event.card,
                                        player
                                    );
                                }
                                const link = result.control;
                                player.storage.jxtp_huashen.current2 = link;
                                if (!player.additionalSkills.jxtp_huashen || !player.additionalSkills.jxtp_huashen.includes(link)) {
                                    player.addAdditionalSkill('jxtp_huashen', link);
                                    player.flashAvatar('jxtp_huashen', event.card);
                                    game.log(player, '获得技能', '#g【' + get.translation(link) + '】');
                                    player.popup(link);
                                }
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) {
                                    player.storage[skill] = {
                                        character: [],
                                        map: {},
                                    };
                                }
                            },
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd', 'jxtp_huashen'],
                            },
                            filter(event, player, name) {
                                return player.storage.jxtp_huashen && player.storage.jxtp_huashen.character.length;
                            },
                            banned: ['lisu', 'sp_xiahoudun', 'xushao'],
                            addHuashen(player) {
                                if (!player.storage.jxtp_huashen) {
                                    return;
                                }
                                if (!_status.characterlist) {
                                    let list = [];
                                    if (_status.connectMode) {
                                        list = get.charactersOL();
                                    } else {
                                        for (let i in lib.character) {
                                            if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) {
                                                continue;
                                            }
                                            list.push(i);
                                        }
                                    }
                                    game.countPlayer2(function (current) {
                                        list.remove(current.name);
                                        list.remove(current.name1);
                                        list.remove(current.name2);
                                        if (current.storage.jxtp_huashen && current.storage.jxtp_huashen.character) {
                                            list.removeArray(current.storage.jxtp_huashen.character);
                                        }
                                    });
                                    _status.characterlist = list;
                                }
                                _status.characterlist.randomSort();
                                for (let i = 0; i < _status.characterlist.length; i++) {
                                    let name = _status.characterlist[i];
                                    if (name.includes('zuoci') || name.indexOf('key') == 0 || lib.skill.jxtp_huashen.banned.includes(name) || player.storage.jxtp_huashen.character.includes(name)) {
                                        continue;
                                    }
                                    const skills = lib.character[name][3];
                                    for (let j = 0; j < skills.length; j++) {
                                        const info = lib.skill[skills[j]];
                                        if (info.charlotte || info.zhuSkill) {
                                            skills.splice(j--, 1);
                                        }
                                    }
                                    if (skills.length) {
                                        player.storage.jxtp_huashen.character.push(name);
                                        player.storage.jxtp_huashen.map[name] = skills;
                                        _status.characterlist.remove(name);
                                        return name;
                                    }
                                }
                            },
                            addHuashens(player, num) {
                                let list = [];
                                for (let i = 0; i < num; i++) {
                                    let name = lib.skill.jxtp_huashen.addHuashen(player);
                                    if (name) {
                                        list.push(name);
                                    }
                                }
                                if (list.length) {
                                    game.log(player, '获得了', get.cnNumber(list.length) + '张', '#g化身');
                                    lib.skill.jxtp_huashen.drawCharacter(player, list);
                                }
                            },
                            removeHuashen(player, links) {
                                player.storage.jxtp_huashen.character.removeArray(links);
                                _status.characterlist.addArray(links);
                                game.log(player, '移去了', get.cnNumber(links.length) + '张', '#g化身');
                            },
                            drawCharacter(player, list) {
                                game.broadcastAll(
                                    function (player, list) {
                                        if (player.isUnderControl(true)) {
                                            let cards = [];
                                            for (let i = 0; i < list.length; i++) {
                                                const cardname = 'rehuashen_card_' + list[i];
                                                lib.card[cardname] = {
                                                    fullimage: true,
                                                    image: 'character:' + list[i],
                                                };
                                                lib.translate[cardname] = get.rawName2(list[i]);
                                                cards.push(game.createCard(cardname, '', ''));
                                            }
                                            player.$draw(cards, 'nobroadcast');
                                        }
                                    },
                                    player,
                                    list
                                );
                            },
                            intro: {
                                onunmark(storage, player) {
                                    _status.characterlist.addArray(storage.character);
                                    storage.character = [];
                                },
                                mark(dialog, storage, player) {
                                    if (storage && storage.current) {
                                        dialog.addSmall([[storage.current], 'character']);
                                    }
                                    if (storage && storage.current2) {
                                        if (!Array.isArray(storage.current2)) {
                                            storage.current2 = [storage.current2];
                                        }
                                    }
                                    for (let i of storage.current2) {
                                        dialog.add('<div><div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div></div>');
                                    }
                                    if (storage && storage.character.length) {
                                        if (player.isUnderControl(true)) {
                                            dialog.addSmall([storage.character, 'character']);
                                        } else {
                                            dialog.addText('共有' + get.cnNumber(storage.character.length) + '张<化身>');
                                        }
                                    } else {
                                        return '没有化身';
                                    }
                                },
                                content(storage, player) {
                                    return '共有' + get.cnNumber(storage.character.length) + '张<化身>';
                                },
                                markcount(storage, player) {
                                    if (storage && storage.character) {
                                        return storage.character.length;
                                    }
                                    return 0;
                                },
                            },
                        },
                        jxtp_xiuxian2: {
                            audio: 'jxtp_xiuxian1',
                            trigger: {
                                player: ['gainMaxHpBefore', 'loseMaxHpBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.maxHp == 4) {
                                    return true;
                                }
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.maxHp;
                                },
                            },
                        },
                        jxtp_xiuxian3: {
                            audio: 'jxtp_xiuxian1',
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.num >= 2) {
                                    return true;
                                }
                            },
                            content() {
                                trigger.num--;
                            },
                        },
                        jxtp_xiuxian1: {
                            group: ['jxtp_xiuxian2', 'jxtp_xiuxian3'],
                            audio: 'ext|:极限突破:2',
                            trigger: {
                                global: ['gameDrawBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.maxHp < 4) {
                                    return true;
                                }
                                if (player.maxHp > 4) {
                                    return true;
                                }
                            },
                            content() {
                                const unm = 4 - player.maxHp;
                                let num = player.maxHP - 4;
                                if (player.maxHp < 4) {
                                    player.gainMaxHp(unm);
                                    player.recover(unm);
                                } else {
                                    player.loseMaxHp(num);
                                }
                            },
                        },
                        jxtp_yangjie: {
                            audio: 'ext:极限突破/audio:2',
                            group: ['yangjie_add'],
                            enable: 'phaseUse',
                            prompt: '摸一张牌并与一名其他角色进行拼点',
                            filter(event, player) {
                                let num = player.getFriends(true).length;
                                if ((player.getStat().skill.jxtp_yangjie || 0) >= num) {
                                    return false;
                                }
                                return player.countCards('h') > 0;
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0 && !target.hasSkillTag('noCompareTarget');
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                if (player.canCompare(target)) {
                                    player.chooseToCompare(target).set('preserve', 'lose');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (!result.bool) {
                                    let cards = [result.player, result.target].filterInD('d');
                                    if (!cards.length || !game.hasPlayer((current) => current != player && current != target)) {
                                        event.finish();
                                    } else {
                                        event.cards = cards;
                                        player
                                            .chooseTarget('请选择一名角色', '令其获得' + get.translation(cards) + ',且视为对' + get.translation(target) + '使用一张火【杀】', function (card, player, target) {
                                                return target != player && target != _status.event.parent.target;
                                            })
                                            .set('ai', function (target) {
                                                let player = _status.event.player,
                                                    cards = _status.event.parent.cards,
                                                    target2 = _status.event.parent.target;
                                                let val = get.value(cards, target) * get.attitude(player, target);
                                                if (val <= 0) {
                                                    return 0;
                                                }
                                                return val + target.canUse({ name: 'sha', nature: 'fire' }, target2, false) ? get.effect(target2, { name: 'sha', nature: 'fire' }, target, player) : 0;
                                            });
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    const source = result.targets[0];
                                    event.source = source;
                                    player.line(source);
                                    source.gain(cards, 'gain2');
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                let card = { name: 'sha', nature: 'fire' };
                                if (target.isIn() && source.isIn() && source.canUse(card, target, false)) {
                                    source.useCard(card, target, false);
                                }
                            },
                            subSkill: {
                                add: {
                                    trigger: {
                                        player: 'compare',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.parent.name == 'jxtp_yangjie' && event.num1 > 1 && player.isDamaged();
                                    },
                                    content() {
                                        let num = player.getDamagedHp();
                                        game.log(player, '的拼点牌点数-', num);
                                        trigger.num1 = Math.max(1, trigger.num1 - num);
                                    },
                                },
                            },
                            ai: {
                                order: 3,
                                result: {
                                    target: -1.5,
                                },
                            },
                        },
                        jxtp_juxiang: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                global: 'dyingAfter',
                            },
                            logTarget: 'player',
                            limited: true,
                            filter(event, player) {
                                return event.player != player && event.player.isAlive();
                            },
                            check(event, player) {
                                return get.damageEffect(event.player, player, player) > 0;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('jxtp_juxiang');
                                trigger.player.damage(trigger.player.maxHp);
                                ('step 1');
                                if (trigger.player.maxHp > 0) {
                                    player.draw(trigger.player.maxHp);
                                }
                            },
                            ai: {
                                expose: 10,
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        jxtp_zhengjun: {
                            audio: 'ext:极限突破/audio:2',
                            usable: 1,
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                if (get.mode() == 'guozhan') {
                                    if (player == target) {
                                        return true;
                                    }
                                    if (player.identity == 'ye') {
                                        return false;
                                    }
                                    if (player.identity == 'unknown') {
                                        if (_status.yeidentity.includes(player._group)) {
                                            return false;
                                        } else if (get.zhu(player) || get.population(player._group) + 1 <= get.population() / 2) {
                                            return player._group == target.identity;
                                        } else {
                                            return false;
                                        }
                                    }
                                    return player.identity == target.identity;
                                } else {
                                    return true;
                                }
                            },
                            multitarget: true,
                            multiline: true,
                            selectTarget() {
                                return [1, 4];
                            },
                            content() {
                                'step 0';
                                game.asyncDraw(targets, 2);
                                ('step 1');
                                if (targets.length <= 3) {
                                    player.draw();
                                }
                                ('step 2');
                                if (targets.length <= 2) {
                                    player.recover();
                                }
                                ('step 3');
                                if (targets.length <= 1) {
                                    player.gainMaxHp();
                                    player.recover();
                                    player.addSkill('jxtp_taoluan');
                                    player.addSkill('jxtp_shiji');
                                    player.removeSkill('jxtp_zhengjun');
                                    player.removeSkill('jxtp_yangjie');
                                }
                            },
                        },
                        jxtp_shiji: {
                            audio: 'ext:极限突破/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            position: 'he',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.viewHandcards(target);
                                ('step 1');
                                player.chooseControl('红色', '黑色').set('ai', function () {
                                    const player = _status.event.player;
                                    if (player.countCards('h', { color: 'red' }) == 1 && player.countCards('h', { color: 'black' }) > 1) {
                                        return '红色';
                                    }
                                    return '黑色';
                                });
                                ('step 2');
                                event.control = result.control;
                                let cards;
                                if (event.control == '红色') {
                                    cards = target.getCards('h', { color: 'red' });
                                } else {
                                    cards = target.getCards('h', { color: 'black' });
                                }
                                target.discard(cards);
                                player.draw(cards.length);
                            },
                            ai: {
                                order(item, player) {
                                    if (player.countCards('h', { color: 'red' }) == 1) {
                                        return 10;
                                    }
                                    if (player.countCards('h', { color: 'black' }) == 1) {
                                        return 10;
                                    }
                                    return 1;
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        jxtp_taoluan: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                global: 'judgeEnd',
                            },
                            filter(event, player) {
                                return true;
                            },
                            check(event, player) {
                                return event.result.judge * get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                'step 0';
                                let evt = trigger.parent;
                                if (evt.name == 'phaseJudge') {
                                    evt.excluded = true;
                                } else {
                                    evt.finish();
                                    evt._triggered = null;
                                }
                                let list = [];
                                if (get.position(trigger.result.card) == 'd') {
                                    list.push(0);
                                }
                                if (trigger.player.isIn() && player.canUse({ name: 'sha', nature: 'fire' }, trigger.player, false)) {
                                    list.push(1);
                                }
                                if (list.length == 2) {
                                    player
                                        .chooseControl()
                                        .set('choiceList', ['回复一点体力并摸两张牌', '获得' + get.translation(trigger.result.card) + '视为对' + get.translation(trigger.player) + '使用一张火【杀】'])
                                        .set('choice', get.effect(trigger.player, { name: 'sha' }, player, player) > 0 ? 1 : 0);
                                } else if (list.length == 1) {
                                    event._result = { index: list[0] };
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.index == 0) {
                                    player.recover();
                                    player.draw(2);
                                } else {
                                    player.gain(trigger.result.card, 'gain2');
                                    player.useCard({ name: 'sha', nature: 'fire' }, trigger.player, false);
                                }
                            },
                        },
                        jxtp_luanji: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'wanjian') {
                                        return false;
                                    }
                                },
                            },
                            audio: 'luanji',
                            line: false,
                            check(card) {
                                return 7 - get.value(card);
                            },
                            enable: 'phaseUse',
                            viewAs: {
                                name: 'wanjian',
                            },
                            filterCard(card, player) {
                                return true;
                            },
                            selectCard: 2,
                            complexCard: true,
                            ai: {
                                basic: {
                                    order: 8.5,
                                    useful: 1,
                                    value: 5,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) {
                                            return 0;
                                        }
                                    }
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') {
                                            return 0;
                                        }
                                        const nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) {
                                                return -100;
                                            }
                                        }
                                        if (nh == 0) {
                                            return -2;
                                        }
                                        if (nh == 1) {
                                            return -1.7;
                                        }
                                        return -1.5;
                                    },
                                    target_use(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') {
                                            return 0;
                                        }
                                        const nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) {
                                                return -100;
                                            }
                                        }
                                        if (nh == 0) {
                                            return -2;
                                        }
                                        if (nh == 1) {
                                            return -1.7;
                                        }
                                        return -1.5;
                                    },
                                    player(player, target) {
                                        if (player._wanjian_temp || player.hasSkillTag('jueqing', false, target)) {
                                            return 0;
                                        }
                                        player._wanjian_temp = true;
                                        let eff = get.effect(target, new lib.element.VCard({ name: 'wanjian' }), player, target);
                                        delete player._wanjian_temp;
                                        if (eff >= 0) {
                                            return 0;
                                        }
                                        if (target.hp > 2 || (target.hp > 1 && !target.isZhu && target != game.boss && target != game.trueZhu && target != game.falseZhu)) {
                                            return 0;
                                        }
                                        if (target.hp > 1 && target.hasSkillTag('respondShan', true, 'respond', true)) {
                                            return 0;
                                        }
                                        if (
                                            player.hasSkillTag('viewHandcard', null, target, true) &&
                                            (target.hasCard(function (card) {
                                                let name = card.name;
                                                return (name == 'shan' || name == 'hufu') && lib.filter.cardRespondable(card, target);
                                            }, 'h') ||
                                                target.hasCard(function (card) {
                                                    return card.name == 'wuxie' && lib.filter.cardEnabled(card, target, 'forceEnable');
                                                }, 'h'))
                                        ) {
                                            return 0;
                                        }
                                        if (target.hp > 1 && target.countCards('hs') > 1.67 + 2 * Math.random()) {
                                            return 0;
                                        }
                                        let res = 0,
                                            att = get.sgn(get.attitude(player, target));
                                        res -= att * (0.8 * target.countCards('hs') + 0.6 * target.countCards('e') + 3.6);
                                        if (get.mode() == 'identity' && target.identity == 'fan') {
                                            res += 2.4;
                                        }
                                        if ((get.mode() == 'guozhan' && player.identity != 'ye' && player.identity == target.identity) || (get.mode() == 'identity' && player.identity == 'zhu' && (target.identity == 'zhong' || target.identity == 'mingzhong'))) {
                                            res -= 0.8 * player.countCards('he');
                                        }
                                        return res;
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
                        jxtp_zhenshi: {
                            audio: 'olxueyi',
                            enable: 'phaseUse',
                            prompt: '支付代价摸两张牌',
                            content() {
                                'step 0';
                                if (player.isDamaged()) {
                                    player.loseMaxHp();
                                } else {
                                    player.loseHp();
                                }
                                ('step 1');
                                player.draw(2);
                                player.addTempSkill('jxtp_qunshang', { player: 'phaseAfter' });
                            },
                        },
                        jxtp_qunshang: {
                            trigger: {
                                source: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'wanjian' && event.parent.name == 'wanjian' && event.player.isAlive() && player.canCompare(event.player);
                            },
                            content() {
                                trigger.source = undefined;
                                trigger.nosource = true;
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        let num = get.tag(card, 'damage');
                                        if (num && get.attitude(player, target) < 0) {
                                            return 'zeroplayer';
                                        }
                                    },
                                },
                            }, //QQQ
                        },
                        jxtp_zhiheng: {
                            audio: 'rezhiheng',
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                const mod = game.checkMod(card, player, event.parent.name, 'unchanged', 'cardDiscardable', player);
                                if (mod != 'unchanged') {
                                    return mod;
                                }
                                return true;
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            selectCard: [1, Infinity],
                            check(card) {
                                const player = _status.event.player;
                                if (
                                    get.position(card) == 'h' &&
                                    !player.countCards('h', function (card) {
                                        return get.value(card) >= 8;
                                    })
                                ) {
                                    return 8 - get.value(card);
                                }
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.discard(cards);
                                event.num = 1;
                                const hs = player.getCards('h');
                                if (!hs.length) {
                                    event.num = 0;
                                }
                                for (let i = 0; i < hs.length; i++) {
                                    if (!cards.includes(hs[i])) {
                                        event.num = 0;
                                        break;
                                    }
                                }
                                ('step 1');
                                for (let i = 0; i < event.num + cards.length; i++) {
                                    let next = game.createEvent('jxtp_huiwan');
                                    next.player = player;
                                    next.setContent(lib.skill.jxtp_huiwan.content);
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.55,
                            },
                        },
                        jxtp_huiwan: {
                            content() {
                                'step 0';
                                let list = [];
                                for (let i = 0; i < lib.inpile.length; i++) {
                                    let name = lib.inpile[i];
                                    if (get.type(name) == 'delay') {
                                        list.push(['延迟', '', name]);
                                    }
                                    if (get.type(name) == 'trick') {
                                        list.push(['锦囊', '', name]);
                                    } else if (get.type(name) == 'basic') {
                                        list.push(['基本', '', name]);
                                    } else if (get.type(name) == 'equip') {
                                        list.push(['装备', '', name]);
                                    }
                                }
                                if (list.length == 0) {
                                    player.draw();
                                    event.finish();
                                } else {
                                    player.chooseButton(['选择一张牌', [list, 'vcard']], true, [1, 1]).set('ai', function (button) {
                                        let target = player;
                                        let card = { name: button.link[2] };
                                        return get.attitude(_status.event.player, target) * (target.getUseValue(card) - 0.1);
                                    });
                                }
                                ('step 1');
                                let list2 = result.links;
                                let cards = [];
                                for (let i = 0; i < Math.min(1, list2.length); i++) {
                                    let card = get.cardPile(function (cardx) {
                                        return !cards.includes(cardx) && cardx.name == list2[Math.min(i, list2.length - 1)][2];
                                    });
                                    if (card) {
                                        cards.push(card);
                                        break;
                                    }
                                }
                                if (cards.length) {
                                    player.gain(cards, 'gain2', 'log');
                                } else {
                                    player.draw();
                                }
                            },
                        },
                        从武: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        jxtp_quedi: {
                            audio: 'ext:极限突破/audio:2',
                            mod: {
                                targetInRange(card) {
                                    if (card.name == 'sha') {
                                        return true;
                                    }
                                },
                            },
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    (event.card.name == 'sha' || event.card.name == 'juedou') &&
                                    event.targets.length == 1 &&
                                    (event.target.countGainableCards(player, 'h') > 0 ||
                                        player.hasCard(function (i) {
                                            return _status.connectMode || (get.type(i, player) == 'basic' && lib.filter.cardDiscardable(i, player, 'dbquedi'));
                                        }, 'h'))
                                );
                            },
                            content() {
                                'step 0';
                                let target = trigger.target;
                                event.target = target;
                                let list = [];
                                if (target.countGainableCards(player, 'h') > 0) {
                                    list.push('选项一');
                                }
                                if (
                                    player.hasCard(function (i) {
                                        return get.type(i, player) == 'basic' && lib.filter.cardDiscardable(i, player, 'dbquedi');
                                    }, 'h')
                                ) {
                                    list.push('选项二');
                                }
                                list.push('背水!');
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('choiceList', ['获得' + get.translation(target) + '的两张手牌', '弃置一张牌并令' + get.translation(trigger.card) + '伤害+1', '背水!减1点体力上限摸两张牌并执行所有选项'])
                                    .set('prompt', get.prompt('dbquedi', target))
                                    .set('ai', function () {
                                        let evt = _status.event.getTrigger(),
                                            player = evt.player,
                                            target = evt.target,
                                            card = evt.card;
                                        if (get.attitude(player, target) > 0) {
                                            return 'cancel2';
                                        }
                                        const bool1 = target.countGainableCards(player, 'h') > 0;
                                        const bool2 =
                                            player.hasCard(function (i) {
                                                return get.type(i, player) == 'basic' && lib.filter.cardDiscardable(i, player, 'dbquedi') && get.value(card, player) < 5;
                                            }, 'h') &&
                                            !target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: card,
                                            });
                                        if (bool1 && bool2 && (target.hp <= 2 || (player.isDamaged() && player.maxHp > 3))) {
                                            return '背水!';
                                        }
                                        if (bool1) {
                                            return '选项一';
                                        }
                                        if (bool2) {
                                            return '选项二';
                                        }
                                        return 'cancel2';
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    event.control = result.control;
                                    if (event.control == '背水!') {
                                        player.loseMaxHp();
                                    }
                                } else {
                                    player.getStat('triggerSkill').dbquedi--;
                                    event.finish();
                                }
                                ('step 2');
                                if ((event.control == '选项一' || event.control == '背水!') && target.countGainableCards(player, 'h') > 0) {
                                    player.gainPlayerCard(2, target, true, 'h');
                                }
                                ('step 3');
                                if (
                                    (event.control == '选项二' || event.control == '背水!') &&
                                    player.hasCard(function (i) {
                                        return get.type(i, player) == 'basic' && lib.filter.cardDiscardable(i, player, 'dbquedi');
                                    }, 'h')
                                ) {
                                    player.chooseToDiscard('h', '弃置一张牌', true);
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (result.bool) {
                                    trigger.parent.baseDamage++;
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!arg || !arg.card || !arg.target || (arg.card.name != 'sha' && arg.card.name != 'juedou')) {
                                        return false;
                                    }
                                    if (player.getStat('triggerSkill').dbquedi > 0) {
                                        return false;
                                    }
                                    if (
                                        arg.target.countCards('h') == 1 &&
                                        (arg.card.name != 'sha' ||
                                            !arg.target.getEquip('bagua') ||
                                            player.hasSkillTag('unequip', false, {
                                                name: arg.card ? arg.card.name : null,
                                                target: arg.target,
                                                card: arg.card,
                                            }) ||
                                            player.hasSkillTag('unequip', false, {
                                                name: arg.card ? arg.card.name : null,
                                                target: arg.target,
                                                card: arg.card,
                                            }))
                                    ) {
                                        return true;
                                    }
                                    return false;
                                },
                            },
                        },
                        jxtp_chongjian2: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                source: 'damageBegin2',
                            },
                            filter(event, player) {
                                return player != event.player && event.player.countCards('e') > 0;
                            },
                            check(event, player) {
                                return (
                                    get.damageEffect(event.player, player, player) < 0 ||
                                    (!event.player.hasSkillTag('noe') &&
                                        event.player.hasCard(function (card) {
                                            return get.value(card) > 6;
                                        }, 'e'))
                                );
                            },
                            logTarget: 'player',
                            content() {
                                player.gainPlayerCard(trigger.player, 'e', true);
                            },
                        },
                        jxtp_chongjian1: {
                            audio: 'chongzhen2',
                            enable: 'chooseToUse',
                            viewAs: {
                                name: 'juedou',
                            },
                            filterCard: {
                                type: 'equip',
                            },
                            position: 'hes',
                            viewAsFilter(player) {
                                return player.hasCard({ type: 'equip' }, 'ehs');
                            },
                            check: (card) => 5 - get.value(card),
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.countCards('e');
                                },
                            },
                            ai: {
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
                                        const hs1 = target.getCards('h', 'sha');
                                        const hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        const hsx = target.getCards('h');
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
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                            },
                        },
                        jxtp_cj: {
                            group: ['jxtp_chongjian1', 'jxtp_chongjian2'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_xinshen: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: ['damageAfter', 'loseHpAfter'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                lib.skill.jxtp_huashen.addHuashens(player, trigger.num);
                                ('step 1');
                                lib.skill.jxtp_huashen.addHuashens(player, trigger.num);
                            },
                        },
                        jxtp_choujue1: {
                            audio: 'dbchoujue',
                            trigger: {
                                global: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                return player == _status.currentPhase;
                            },
                            content() {
                                player.draw();
                                player.recover(1);
                            },
                        },
                        jxtp_choujue2: {
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                let i = 0;
                                let list = [];
                                while (i++ < 2) {
                                    let card = get.cardPile(function (card) {
                                        if (get.type(card) != 'equip') {
                                            return false;
                                        }
                                        return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
                                    });
                                    if (card) {
                                        list.push(card);
                                    }
                                }
                                if (!list.length) {
                                    event.finish();
                                    return;
                                }
                                event.list = list;
                                player.gain(event.list, 'gain2');
                                ('step 1');
                                player.gainMaxHp();
                                player.recover();
                                ('step 2');
                                player.removeSkill('jxtp_quedi');
                            },
                        },
                        jxtp_choujue: {
                            group: ['jxtp_choujue1', 'jxtp_choujue2', 'jxtp_choujue3'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_choujue3: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.addSkill('jxtp_quedi');
                            },
                        },
                        jxtp_zhiyu: {
                            dutySkill: true,
                            derivation: ['jxtp_mouzhu'],
                            group: ['jxtp_zhiyu_draw', 'jxtp_zhiyu_achieve', 'jxtp_zhiyu_fail'],
                            subSkill: {
                                draw: {
                                    audio: 'rezhiyu',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    maxMarkCount: 12,
                                    content() {
                                        'step 0';
                                        player.chooseControl().set('choiceList', ['摸二张牌(无牌摸三张)', '弃置二张牌并回复一点体力']);
                                        ('step 1');
                                        if (result.index == 0) {
                                            if (!player.countCards('h')) {
                                                player.draw(3);
                                            } else {
                                                player.draw(2);
                                            }
                                        } else {
                                            if (player.countCards('h') < 2) {
                                                if (!player.countCards('h')) {
                                                    player.draw(3);
                                                } else {
                                                    player.draw(2);
                                                }
                                            } else {
                                                player.chooseToDiscard(2, 'he', true);
                                                player.recover();
                                            }
                                        }
                                        ('step 2');
                                        player.chooseToDiscard('he', true);
                                        ('step 3');
                                        if (!trigger.source || !trigger.source.isIn()) {
                                            event._result = { bool: false, cards: [] };
                                        } else {
                                            trigger.source.chooseToDiscard('智愚:请弃置一张牌', 'he', true);
                                        }
                                        ('step 4');
                                        if (!player.countCards('h')) {
                                            event.finish();
                                        } else {
                                            player.showHandcards();
                                        }
                                        ('step 5');
                                        let cards = player.getCards('h');
                                        const color = get.color(cards[0], player);
                                        let bool = true;
                                        for (let i = 1; i < cards.length; i++) {
                                            if (get.color(cards[i], player) != color) {
                                                bool = false;
                                                break;
                                            }
                                        }
                                        if (bool) {
                                            player.addMark('jxtp_qice_mark', 1);
                                            player.addSkill('jxtp_qice_mark');
                                            let cards = result.cards.filterInD('d');
                                            if (cards.length) {
                                                if (!trigger.source.countCards('h')) {
                                                    player.gain(cards, 'gain2');
                                                    trigger.source.damage();
                                                } else {
                                                    let num = player.countMark('jxtp_qice_mark');
                                                    player.gainPlayerCard(num, true, trigger.source, trigger.source != player ? 'he' : 'e');
                                                }
                                            }
                                        }
                                    },
                                    ai: {
                                        maixie_defend: true,
                                        threaten: 0.85,
                                    },
                                },
                                achieve: {
                                    audio: 'rezhiyu',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    filter(event, player) {
                                        return player.countMark('jxtp_qice_mark') >= 2;
                                    },
                                    forced: true,
                                    async content(event, trigger, player) {
                                        player.removeSkill('jxtp_zhiyu');
                                        player.removeSkill('jxtp_qice0');
                                        game.log(player, '成功完成使命');
                                        player.gainMaxHp();
                                        player.recover(player.maxHp);
                                        player.addSkill('jxtp_qice');
                                        player.addSkill('jxtp_mouzhu');
                                    },
                                },
                                fail: {
                                    audio: 'rezhiyu',
                                    trigger: {
                                        player: 'dying',
                                    },
                                    forced: true,
                                    content() {
                                        player.removeSkill('jxtp_zhiyu');
                                        player.recover(3 - player.hp);
                                        player.addSkill('jxtp_zhiyu1');
                                        game.log(player, '使命失败');
                                    },
                                },
                            },
                        },
                        jxtp_qice: {
                            audio: 'reqice',
                            enable: 'phaseUse',
                            filter(event, player) {
                                const hs = player.getCards('h');
                                if (!hs.length) {
                                    return false;
                                }
                                if ((player.getStat('skill').jxtp_qice || 0) >= player.countMark('jxtp_qice_mark') + 1) {
                                    return false;
                                }
                                if (
                                    hs.some((card) => {
                                        const mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        return mod2 === false;
                                    })
                                ) {
                                    return false;
                                }
                                return lib.inpile.some((name) => {
                                    if (get.type(name) != 'trick') {
                                        return false;
                                    }
                                    const card = { name };
                                    return event.filterCard(card, player, event);
                                });
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    let list = [];
                                    for (let i = 0; i < lib.inpile.length; i++) {
                                        if (get.type(lib.inpile[i]) == 'trick') {
                                            list.push(['锦囊', '', lib.inpile[i]]);
                                        }
                                    }
                                    return ui.create.dialog(get.translation('jxtp_qice'), [list, 'vcard']);
                                },
                                filter(button, player) {
                                    const event = _status.event.parent,
                                        card = {
                                            name: button.link[2],
                                        };
                                    return event.filterCard(card, player, event);
                                },
                                check(button) {
                                    const player = _status.event.player;
                                    let effect = player.getUseValue(button.link[2]);
                                    if (player.countCards('hs', button.link[2]) > 0) {
                                        return 0;
                                    }
                                    if ((player.getStat('skill').reqice || 0) < player.countMark('jxtp_qice_mark') + 1) {
                                        if (
                                            ['draw', 'gain'].some(
                                                (i) =>
                                                    get.tag(
                                                        {
                                                            name: button.link[2], //QQQ
                                                        },
                                                        i
                                                    ) >= 1
                                            )
                                        ) {
                                            return effect * 5;
                                        }
                                    }
                                    if (effect > 0) {
                                        return effect;
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        selectCard: -1,
                                        position: 'h',
                                        audio: 'reqice',
                                        popname: true,
                                        viewAs: { name: links[0][2] },
                                    };
                                },
                                prompt(links, player) {
                                    return '将所有手牌当【' + get.translation(links[0][2]) + '】使用';
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        let num = 0;
                                        let cards = player.getCards('h');
                                        if (cards.length >= 3 && player.hp >= 3 && player.countMark('jxtp_qice_mark') < 2) {
                                            return 0;
                                        }
                                        for (let i = 0; i < cards.length; i++) {
                                            num += Math.max(0, get.value(cards[i], player, 'raw'));
                                        }
                                        num /= cards.length;
                                        num /= (player.countMark('jxtp_qice_mark') + 1) * 1.3;
                                        num *= Math.min(cards.length, player.hp);
                                        return 13 - num;
                                    },
                                },
                                nokeep: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag === 'nokeep') {
                                        return (!arg || (arg.card && arg.card.name === 'tao')) && player.isPhaseUsing() && !player.getStat('skill').jxtp_qice && player.hasCard((card) => card.name != 'tao', 'h');
                                    }
                                },
                                threaten: 1.7,
                            },
                            subSkill: {
                                bakcup: {},
                                mark: {
                                    charlotte: true,
                                    intro: {
                                        name2: '奇策',
                                        content: 'mark',
                                    },
                                },
                            },
                        },
                        jxtp_jianxiong: {
                            audio: 'sbjianxiong',
                            trigger: {
                                player: 'damageEnd',
                            },
                            maxMarkCount: 4,
                            group: ['jxtp_jianxiong_mark', 'jxtp_jianxiong_discard'],
                            filter(event, player) {
                                return (get.itemtype(event.cards) == 'cards' && event.cards.some((i) => get.position(i, true) == 'o')) || player.countMark('jxtp_jianxiong') > 0;
                            },
                            prompt2(event, player) {
                                let gain = get.itemtype(event.cards) == 'cards' && event.cards.some((i) => get.position(i, true) == 'o'),
                                    draw = 1 + player.countMark('jxtp_jianxiong');
                                let str = '';
                                if (gain) {
                                    str += '获得' + get.translation(event.cards);
                                }
                                if (gain && draw > 0) {
                                    str += '并';
                                }
                                if (draw > 0) {
                                    str += '摸' + get.cnNumber(1 + player.countMark('jxtp_jianxiong')) + '张牌';
                                }
                                if (1 + player.countMark('jxtp_jianxiong')) {
                                    str += ',然后可以弃1枚<奸雄>';
                                }
                                return str;
                            },
                            content() {
                                'step 0';
                                if (get.itemtype(trigger.cards) == 'cards' && trigger.cards.some((i) => get.position(i, true) == 'o')) {
                                    player.gain(trigger.cards, 'gain2');
                                }
                                let num = 1 + player.countMark('jxtp_jianxiong');
                                if (num > 0) {
                                    player.draw(num, 'nodelay');
                                }
                                if (!num) {
                                    event.finish();
                                }
                                ('step 1');
                                if (player.countMark('jxtp_jianxiong') > 0) {
                                    player.chooseBool('是否弃1枚<奸雄>？').set('ai', () => (Math.random() < 0.5 ? 0 : 1));
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.removeMark('jxtp_jianxiong', 1);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) {
                                            return [1, -1];
                                        }
                                        if (get.tag(card, 'damage') && player != target) {
                                            let cards = card.cards,
                                                evt = _status.event;
                                            if (evt.player == target && card.name == 'damage' && evt.parent.type == 'card') {
                                                cards = evt.parent.cards.filterInD();
                                            }
                                            if (target.hp <= 1) {
                                                return;
                                            }
                                            if (get.itemtype(cards) != 'cards') {
                                                return;
                                            }
                                            for (let i of cards) {
                                                if (i.name == 'tao') {
                                                    return [1, 5];
                                                }
                                            }
                                            if (get.value(cards, target) >= 7 + target.getDamagedHp()) {
                                                return [1, 3];
                                            }
                                            return [1, 0.55 + 0.05 * Math.max(0, 1 - target.countMark('jxtp_jianxiong'))];
                                        }
                                    },
                                },
                            },
                            marktext: '雄',
                            intro: {
                                name: '奸雄',
                                name2: '奸雄',
                                content: 'mark',
                            },
                            subSkill: {
                                mark: {
                                    audio: 'sbjianxiong',
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    content() {
                                        'step 0';
                                        const map = {};
                                        let list = [];
                                        for (let i = 1; i <= 4; i++) {
                                            const cn = get.cnNumber(i, true);
                                            map[cn] = i;
                                            list.push(cn);
                                        }
                                        event.map = map;
                                        list.push('cancel2');
                                        player
                                            .chooseControl(list, function () {
                                                return get.cnNumber(2, true);
                                            })
                                            .set('prompt', '奸雄:获得任意枚<奸雄>标记');
                                        ('step 1');
                                        if (result.control != 'cancel2') {
                                            player.addMark('jxtp_jianxiong', event.map[result.control]);
                                        }
                                    },
                                },
                                discard: {
                                    trigger: {
                                        player: 'phaseDiscardBefore',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.getHistory('skipped').length;
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        jxtp_qingzheng: {
                            audio: 'sbqingzheng',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                let num = Math.max(1, player.countMark('jxtp_jianxiong'));
                                let prompt = '###' + get.prompt('jxtp_qingzheng') + '###弃置' + get.cnNumber(num) + '种花色的所有牌';
                                let next = player.chooseButton([prompt, [lib.suit.map((i) => ['', '', 'lukai_' + i]), 'vcard']], num);
                                next.set('filterButton', (button) => {
                                    const player = _status.event.player;
                                    let cards = player.getCards('h', { suit: button.link[2].slice(6) });
                                    return cards.length && cards.filter((card) => lib.filter.cardDiscardable(card, player, 'jxtp_qingzheng')).length == cards.length;
                                });
                                next.set('ai', (button) => {
                                    const player = _status.event.player;
                                    return (
                                        player.countMark('jxtp_jianxiong') * 15 -
                                        player
                                            .getCards('h', { suit: button.link[2].slice(6) })
                                            .map((i) => get.value(i))
                                            .reduce((p, c) => p + c, 0)
                                    );
                                });
                                next.set('custom', {
                                    replace: {
                                        button(button) {
                                            if (!_status.event.isMine()) {
                                                return;
                                            }
                                            if (button.classList.contains('selectable') == false) {
                                                return;
                                            }
                                            let cards = _status.event.player.getCards('h', { suit: button.link[2].slice(6) });
                                            if (cards.length) {
                                                const chosen = cards.filter((i) => ui.selected.cards.includes(i)).length == cards.length;
                                                if (chosen) {
                                                    ui.selected.cards.removeArray(cards);
                                                    cards.forEach((card) => {
                                                        card.classList.remove('selected');
                                                        card.updateTransform(false);
                                                    });
                                                } else {
                                                    ui.selected.cards.addArray(cards);
                                                    cards.forEach((card) => {
                                                        card.classList.add('selected');
                                                        card.updateTransform(true);
                                                    });
                                                }
                                            }
                                            if (button.classList.contains('selected')) {
                                                ui.selected.buttons.remove(button);
                                                button.classList.remove('selected');
                                                if (_status.multitarget || _status.event.complexSelect) {
                                                    game.uncheck();
                                                    game.check();
                                                }
                                            } else {
                                                button.classList.add('selected');
                                                ui.selected.buttons.add(button);
                                            }
                                            const custom = _status.event.custom;
                                            if (custom && custom.add && custom.add.button) {
                                                custom.add.button();
                                            }
                                            game.check();
                                        },
                                    },
                                    add: next.custom.add,
                                });
                                ('step 1');
                                if (result.bool) {
                                    let cards = result.cards;
                                    if (!cards.length) {
                                        const suits = result.links.map((i) => i[2].slice(6));
                                        cards = player.getCards('h', (card) => suits.includes(card.suit));
                                    }
                                    event.cards = cards;
                                    if (!cards.length) {
                                        event.finish();
                                    } else {
                                        player
                                            .chooseTarget('清正:观看一名其他角色的手牌并弃置其中一种花色的所有牌', (card, player, target) => {
                                                return target != player && target.countCards('h');
                                            })
                                            .set('ai', (target) => {
                                                let player = _status.event.player,
                                                    att = get.attitude(player, target);
                                                if (att >= 0) {
                                                    return 0;
                                                }
                                                return 1 - att / 2 + Math.sqrt(target.countCards('h'));
                                            });
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    event.target = target;
                                    player.discard(cards);
                                    let list = [];
                                    const dialog = ['清正:弃置' + get.translation(target) + '一种花色的所有牌'];
                                    for (const suit of lib.suit.concat('none')) {
                                        if (target.countCards('h', { suit: suit })) {
                                            dialog.push('<div class="text center">' + get.translation(suit + '2') + '牌</div>');
                                            dialog.push(target.getCards('h', { suit: suit }));
                                            list.push(suit);
                                        }
                                    }
                                    if (list.length) {
                                        player
                                            .chooseControl(list)
                                            .set('dialog', dialog)
                                            .set('ai', () => {
                                                return _status.event.control;
                                            })
                                            .set(
                                                'control',
                                                (() => {
                                                    const getv = (cards) => cards.map((i) => get.value(i)).reduce((p, c) => p + c, 0);
                                                    return list.sort((a, b) => {
                                                        return getv(target.getCards('h', { suit: b })) - getv(target.getCards('h', { suit: a }));
                                                    })[0];
                                                })()
                                            );
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                const cards2 = target.getCards('h', { suit: result.control });
                                event.cards2 = cards2;
                                target.discard(cards2, 'notBySelf').set('discarder', player);
                                ('step 4');
                                if (event.cards2.length < cards.length) {
                                    target.damage();
                                }
                                ('step 5');
                                player.chooseBool('是否获得1枚<奸雄>？').set('ai', () => (Math.random() < 0.5 ? 0 : 1));
                                ('step 6');
                                if (result.bool) {
                                    player.addMark('jxtp_jianxiong', 1);
                                }
                            },
                            ai: {
                                combo: 'jxtp_jianxiong',
                            },
                        },
                        jxtp_pojun_juli: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 2;
                                },
                            },
                        },
                        jxtp_pojun_mopai: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                            },
                        },
                        jxtp_pojun_duodao: {
                            mod: {
                                selectTarget(card, player, range) {
                                    if (Array.isArray(range) && range[1] == -1) {
                                        return;
                                    }
                                    if (card.name == 'sha') {
                                        range[1] += 1;
                                    }
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') {
                                        return num + 1;
                                    }
                                },
                            },
                        },
                        jxtp_pojun: {
                            group: ['jxtp_pojun_zengshang', 'jxtp_pojun_fengyin', 'jxtp_pojun_duodao', 'jxtp_pojun_mopai', 'jxtp_pojun_juli'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_pojun_fengyin: {
                            shaRelated: true,
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                let next = player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.hp, trigger.target.countCards('he'))], get.prompt('repojun', trigger.target));
                                next.set('ai', function (button) {
                                    if (!_status.event.goon) {
                                        return 0;
                                    }
                                    let val = get.value(button.link);
                                    if (button.link == _status.event.target.getEquip(2)) {
                                        return 2 * (val + 3);
                                    }
                                    return val;
                                });
                                next.set('goon', get.attitude(player, trigger.target) <= 0);
                                next.set('forceAuto', true);
                                ('step 1');
                                if (!trigger.target.hasSkill('fengyin')) {
                                    trigger.target.addTempSkill('fengyin');
                                }
                                ('step 2');
                                if (result.bool) {
                                    let target = trigger.target;
                                    target.addSkill('repojun2');
                                    target.addToExpansion('giveAuto', result.cards, target).gaintag.add('repojun2');
                                }
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0) {
                                        return false;
                                    }
                                    if (tag == 'directHit_ai') {
                                        return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                                    }
                                    if (arg && arg.name == 'sha' && arg.target.getEquip(2)) {
                                        return true;
                                    }
                                    return false;
                                },
                            },
                            group: 'repojun3',
                        },
                        jxtp_pojun_zengshang: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.parent.name == 'sha';
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        jxtp_tianyan: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(true, '火计:选择一名角色,对其造成1点火焰伤害').set('ai', function (target) {
                                    const player = _status.event.player;
                                    return get.damageEffect(target, player, player);
                                });
                                ('step 1');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    event.target = target;
                                    player.line(target, 'green');
                                    target.damage('fire');
                                }
                                ('step 2');
                                let targets = game.filterPlayer((current) => {
                                    if (current == player || current == target) {
                                        return false;
                                    }
                                    return current.group == target.group;
                                });
                                if (targets.length) {
                                    player.line(targets, 'fire');
                                    targets.forEach((i) => i.damage('fire'));
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        jxtp_jinsuo: {
                            enable: 'phaseUse',
                            audio: 'ext:极限突破/audio:2',
                            usable: 1,
                            filterTarget: true,
                            selectTarget() {
                                return [1, 8];
                            },
                            content() {
                                if (target.isLinked()) {
                                    target.link();
                                    target.turnOver(false);
                                } else {
                                    target.chooseToDiscard(2, 'he', true);
                                    target.link();
                                    event.finish();
                                }
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player, target) {
                                        if (!player.hasSkill('xiushen')) {
                                            return 0;
                                        }
                                        if (target.isLinked()) {
                                            return 0;
                                        }
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current.isLinked();
                                            })
                                        ) {
                                            return 0;
                                        }
                                        return 1;
                                    },
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        jxtp_hujia: {
                            audio: 'sbhujia',
                            zhuSkill: true,
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (player == _status.currentPhase) {
                                    return false;
                                }
                                if (player.countMark('jxtp_jianxiong') < 2 || !player.countCards('hse')) {
                                    return false;
                                }
                                for (let i of lib.inpile) {
                                    const type = get.type2(i);
                                    if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    let list = [];
                                    for (let i = 0; i < lib.inpile.length; i++) {
                                        let name = lib.inpile[i];
                                        if (name == 'sha') {
                                            if (event.filterCard && event.filterCard({ name }, player, event)) {
                                                list.push(['基本', '', 'sha']);
                                            }
                                            for (let nature of lib.inpile_nature) {
                                                if (event.filterCard && event.filterCard({ name, nature }, player, event)) {
                                                    list.push(['基本', '', 'sha', nature]);
                                                }
                                            }
                                        } else if (get.type2(name) == 'trick' && event.filterCard({ name }, player, event)) {
                                            list.push(['锦囊', '', name]);
                                        } else if (get.type(name) == 'basic' && event.filterCard({ name }, player, event)) {
                                            list.push(['基本', '', name]);
                                        }
                                    }
                                    return ui.create.dialog('护驾', [list, 'vcard']);
                                },
                                check(button) {
                                    if (_status.event.parent.type != 'phase') {
                                        return 1;
                                    }
                                    const player = _status.event.player;
                                    if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) {
                                        return 0;
                                    }
                                    return player.getUseValue({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'hse',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            player.recover();
                                            player.removeMark('jxtp_jianxiong', 2);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                if (!lib.inpile.includes(name)) {
                                    return false;
                                }
                                const type = get.type2(name);
                                return (type == 'basic' || type == 'trick') && player.countMark('jxtp_jianxiong') > 1 && player.countCards('she') > 0;
                            },
                            ai: {
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (player == _status.currentPhase) {
                                        return false;
                                    }
                                    if (player.countMark('jxtp_jianxiong') < 2 || !player.countCards('hse')) {
                                        return false;
                                    }
                                },
                                order: 1,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) {
                                            return get.attitude(player, _status.event.dying);
                                        }
                                        return 1;
                                    },
                                },
                            },
                        },
                        jxtp_mashen: {
                            group: ['jxtp_ms_cuijun', 'jxtp_ms_qishu', 'jxtp_ms_tuji', 'jxtp_ms_zhuanzhu'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_ms_tuji: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            logTarget: 'target',
                            filter(event, player) {
                                return player != event.target && event.card.name == 'sha' && event.target.isIn();
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            content() {
                                'step 0';
                                let target = trigger.target;
                                event.target = target;
                                target.addTempSkill('fengyin');
                                trigger.directHit.add(target);
                                player.chooseToDuiben(target).set('title', '谋弈').set('namelist', ['出阵迎战', '拱卫中军', '直取敌营', '扰阵疲敌']);
                                ('step 1');
                                if (result.bool) {
                                    if (result.player == 'db_def1') {
                                        player.gainPlayerCard(target, 'he', true, 2);
                                    } else {
                                        player.draw(3);
                                    }
                                } else {
                                    player.draw(1);
                                }
                            },
                            shaRelated: true,
                            ai: {
                                ignoreSkill: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'directHit_ai') {
                                        return get.attitude(player, arg.target) <= 0;
                                    }
                                    if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') {
                                        return false;
                                    }
                                    if (!arg.target || get.attitude(player, arg.target) >= 0) {
                                        return false;
                                    }
                                    if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).includes(arg.skill)) {
                                        return false;
                                    }
                                },
                                directHit_ai: true,
                            },
                        },
                        jxtp_ms_cuijun: {
                            audio: 'ext:极限突破/audio:2',
                            mod: {
                                cardUsable(card) {
                                    if (card.storage && card.storage.shouli) {
                                        return Infinity;
                                    }
                                },
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (player != _status.currentPhase && (name == 'sha' || name == 'juedou')) {
                                    return true;
                                }
                            },
                            filter(event, player) {
                                if (event.responded || event.shouli || event.type == 'wuxie') {
                                    return false;
                                }
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.getEquip(2);
                                    }) &&
                                    event.filterCard(
                                        {
                                            name: 'sha',
                                            storage: { shouli: true },
                                        },
                                        player,
                                        event
                                    )
                                ) {
                                    return true;
                                }
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.getEquip(1);
                                    }) &&
                                    event.filterCard(
                                        {
                                            name: 'juedou',
                                            storage: { shouli: true },
                                        },
                                        player,
                                        event
                                    )
                                ) {
                                    return true;
                                }
                                return false;
                            },
                            delay: false,
                            filterTarget(card, player, target) {
                                let event = _status.event,
                                    evt = event;
                                if (event._backup) {
                                    evt = event._backup;
                                }
                                const equip1 = target.getEquip(1);
                                if (
                                    equip1 &&
                                    evt.filterCard(
                                        {
                                            name: 'juedou',
                                            storage: { shouli: true },
                                        },
                                        player,
                                        event
                                    )
                                ) {
                                    return true;
                                }
                                const equip2 = target.getEquip(2);
                                const sha = {
                                    name: 'sha',
                                    storage: { shouli: true },
                                }; //QQQ
                                if (equip2 && evt.filterCard(sha, player, event)) {
                                    if (!evt.filterTarget) {
                                        return true;
                                    }
                                    return game.hasPlayer(function (current) {
                                        return evt.filterTarget(sha, player, current);
                                    });
                                }
                                return false;
                            },
                            prompt: '将场上的一张防具/武器牌当做【杀】/【决斗】使用或打出',
                            content() {
                                'step 0';
                                let evt = event.getParent(2);
                                evt.set('shouli', true);
                                let list = [];
                                const equip1 = target.getEquip(1);
                                const equip2 = target.getEquip(2);
                                const backupx = _status.event;
                                _status.event = evt;
                                if (equip1) {
                                    const juedou = {
                                        name: 'juedou',
                                        storage: { shouli: true },
                                    };
                                    if (evt.filterCard && evt.filterCard(juedou, player, event)) {
                                        list.push('juedou');
                                    }
                                }
                                if (equip2) {
                                    const sha = {
                                        name: 'sha',
                                        storage: { shouli: true },
                                    };
                                    if (
                                        evt.filterCard(sha, player, evt) &&
                                        (!evt.filterTarget ||
                                            game.hasPlayer(function (current) {
                                                return evt.filterTarget(sha, player, current);
                                            }))
                                    ) {
                                        list.push('sha');
                                    }
                                }
                                _status.event = backupx;
                                if (list.length == 1) {
                                    event._result = {
                                        bool: true,
                                        links: [list[0] == 'juedou' ? equip1 : equip2],
                                    };
                                } else {
                                    player.choosePlayerCard(true, target, 'e').set('filterButton', function (button) {
                                        const type = get.subtype(button.link);
                                        return type == 'equip1' || type == 'equip2';
                                    });
                                }
                                ('step 1');
                                let evt2 = event.getParent(2);
                                if (result.bool && result.links && result.links.length) {
                                    let name = get.subtype(result.links[0]) == 'equip1' ? 'juedou' : 'sha';
                                    if (evt2.name == 'chooseToUse') {
                                        game.broadcastAll(
                                            function (result, name) {
                                                lib.skill.shouli_backup.viewAs = {
                                                    name: name,
                                                    cards: [result],
                                                    storage: { shouli: true },
                                                };
                                                lib.skill.shouli_backup.prompt = '选择' + get.translation(name) + '(' + get.translation(result) + ')的目标';
                                            },
                                            result.links[0],
                                            name
                                        );
                                        evt2.set('_backupevent', 'shouli_backup');
                                        evt2.backup('shouli_backup');
                                        evt2.set('openskilldialog', '选择' + get.translation(name) + '(' + get.translation(result.links[0]) + ')的目标');
                                        evt2.set('norestore', true);
                                        evt2.set('custom', {
                                            add: {},
                                            replace: { window() { } },
                                        });
                                    } else {
                                        delete evt2.result.skill;
                                        delete evt2.result.used;
                                        evt2.result.card = {
                                            name: name,
                                            cards: [result],
                                            storage: { shouli: true },
                                        };
                                        evt2.result.cards = [result.links[0]];
                                        target.$give(result.links[0], player, false);
                                        if (player != target) {
                                            target.addTempSkill('fengyin');
                                        }
                                        target.addTempSkill('shouli_thunder');
                                        player.addTempSkill('shouli_thunder');
                                        evt2.redo();
                                        return;
                                    }
                                }
                                evt2.goto(0);
                            },
                            ai: {
                                respondSha: true,
                                respondjuedou: true,
                                skillTagFilter(player, tag) {
                                    const subtype = tag == 'respondSha' ? 'equip2' : 'equip1';
                                    return game.hasPlayer(function (current) {
                                        return current.getEquip(subtype);
                                    });
                                },
                                order: 2,
                                result: {
                                    player(player, target) {
                                        let att = Math.max(8, get.attitude(player, target));
                                        if (_status.event.type != 'phase') {
                                            return 9 - att;
                                        }
                                        if (!player.hasValueTarget({ name: 'sha' })) {
                                            return 0;
                                        }
                                        return 9 - att;
                                    },
                                },
                            },
                            group: 'shouli_init',
                            subSkill: {
                                thunder: {
                                    charlotte: true,
                                    trigger: {
                                        player: 'damageBegin1',
                                    },
                                    forced: true,
                                    mark: true,
                                    content() {
                                        trigger.num++;
                                        trigger.nature = 'thunder';
                                    },
                                    marktext: '⚡',
                                    intro: {
                                        content: '受到的伤害+1且改为雷属性',
                                    },
                                },
                                init: {
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    logTarget: () => game.filterPlayer(),
                                    content() {
                                        'step 0';
                                        let targets = game.filterPlayer().sortBySeat(player.next);
                                        event.targets = targets;
                                        event.num = 0;
                                        ('step 1');
                                        let target = event.targets[num];
                                        if (target.isIn()) {
                                            let card = get.cardPile2(function (card) {
                                                if (get.cardtag(card, 'gifts')) {
                                                    return false;
                                                }
                                                const type = get.subtype(card);
                                                if (type != 'equip1' && type != 'equip2' && type != 'equip6') {
                                                    return false;
                                                }
                                                return target.canUse(card, target);
                                            });
                                            if (card) {
                                                target.chooseUseTarget(card, 'nopopup', 'noanimate', true);
                                            }
                                        }
                                        event.num++;
                                        if (event.num < targets.length) {
                                            event.redo();
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_ms_qishu: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - game.countPlayer() - 1;
                                },
                                globalTo(from, to, distance) {
                                    return distance + game.countPlayer() + 1;
                                },
                            },
                        },
                        jxtp_ms_zhuanzhu: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (card.name == 'shunshou' || card.name == 'guohe' || card.name == 'bingliang' || card.name == 'lebu') {
                                        return false;
                                    }
                                },
                            },
                            audio: 'ext:极限突破/audio:2',
                        },
                        jxtp_rende: {
                            audio: 'ext:极限突破/audio:3',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (event.type == 'wuxie') {
                                    return false;
                                }
                                if (player.countMark('jxtp_rende') < 1) {
                                    return false;
                                }
                                for (let name of lib.inpile) {
                                    if (get.type(name) != 'basic') {
                                        continue;
                                    }
                                    let card = { name: name };
                                    if (event.filterCard && event.filterCard(card, player, event)) {
                                        return true;
                                    }
                                    if (name == 'sha') {
                                        for (let nature of lib.inpile_nature) {
                                            card.nature = nature;
                                            if (event.filterCard && event.filterCard(card, player, event)) {
                                                return true;
                                            }
                                        }
                                    }
                                }
                                return false;
                            },
                            group: ['jxtp_rende_give', 'jxtp_rende_gain'],
                            chooseButton: {
                                dialog(event, player) {
                                    const dialog = ui.create.dialog('仁德');
                                    if (event.type == 'phase') {
                                        dialog._chosenOpt = [];
                                        const table = document.createElement('div');
                                        table.classList.add('add-setting');
                                        table.style.margin = '0';
                                        table.style.width = '100%';
                                        table.style.position = 'relative';
                                        let list = ['视为使用基本牌', '交给其他角色牌'];
                                        for (let i of list) {
                                            const td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                            td.innerHTML = '<span>' + i + '</span>';
                                            td.link = i;
                                            if (i == list[0]) {
                                                td.classList.add('bluebg');
                                                dialog._chosenOpt.add(td);
                                            }
                                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                                if (_status.dragged) {
                                                    return;
                                                }
                                                if (_status.clicked) {
                                                    return;
                                                }
                                                if (_status.justdragged) {
                                                    return;
                                                }
                                                _status.tempNoButton = true;
                                                _status.clicked = true;
                                                setTimeout(function () {
                                                    _status.tempNoButton = false;
                                                }, 500);
                                                const link = this.link;
                                                if (link == '交给其他角色牌') {
                                                    game.uncheck();
                                                }
                                                const current = this.parentNode.querySelector('.bluebg');
                                                if (current) {
                                                    current.classList.remove('bluebg');
                                                    dialog._chosenOpt.remove(current);
                                                }
                                                dialog._chosenOpt.add(this);
                                                this.classList.add('bluebg');
                                                game.check();
                                            });
                                            table.appendChild(td);
                                            dialog.buttons.add(td);
                                        }
                                        dialog.content.appendChild(table);
                                    }
                                    let cards = [];
                                    for (let name of lib.inpile) {
                                        if (get.type(name) != 'basic') {
                                            continue;
                                        }
                                        let card = { name: name };
                                        if (event.filterCard && event.filterCard(card, player, event)) {
                                            cards.push(['基本', '', name]);
                                        }
                                        if (name == 'sha') {
                                            for (let nature of lib.inpile_nature) {
                                                card.nature = nature;
                                                if (event.filterCard && event.filterCard(card, player, event)) {
                                                    cards.push(['基本', '', name, nature]);
                                                }
                                            }
                                        }
                                    }
                                    dialog.add([cards, 'vcard']);
                                    return dialog;
                                },
                                check(button, player) {
                                    if (typeof button.link == 'string') {
                                        return -1;
                                    }
                                    if (_status.event.parent.type != 'phase') {
                                        return 1;
                                    }
                                    return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                                },
                                select() {
                                    const opts = _status.event.dialog._chosenOpt;
                                    return opts && opts.length && opts[0].link == '交给其他角色牌' ? 0 : 1;
                                },
                                backup(links, player) {
                                    const isUse = links.length == 1;
                                    const backup = get.copy(lib.skill['jxtp_rende_' + (isUse ? 'use' : 'give')]);
                                    if (isUse) {
                                        backup.viewAs = { name: links[0][2], nature: links[0][3] };
                                    }
                                    return backup;
                                },
                                prompt(links, player) {
                                    const isUse = links.length == 1;
                                    return isUse ? '移去1枚<仁望>,视为使用或打出' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) : '###仁德###出牌阶段,你可以将任意张牌交给一名其他角色,然后你获得1枚<仁望>标记';
                                },
                            },
                            hiddenCard(player, name) {
                                return get.type(name) == 'basic' && player.countMark('jxtp_rende') > 1;
                            },
                            marktext: '仁',
                            intro: {
                                name: '仁望',
                                name2: '仁望',
                                content: 'mark',
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                save: true,
                                skillTagFilter(player) {
                                    return player.countMark('jxtp_rende') > 1 && !player.hasSkill('jxtp_rende_used');
                                },
                                order(item, player) {
                                    if (_status.event.type == 'phase' && lib.skill.sbzhangwu.ai.result.player(player) > 0) {
                                        return 9.1;
                                    }
                                    return 0.5;
                                },
                                result: {
                                    player(player) {
                                        if (_status.event.dying) {
                                            return get.attitude(player, _status.event.dying);
                                        }
                                        return _status.event.type == 'phase' && player.countMark('jxtp_rende') <= 2 ? 0 : 1;
                                    },
                                },
                            },
                            subSkill: {
                                backup: {},
                                use: {
                                    audio: 'jxtp_rende',
                                    filterCard: () => false,
                                    selectCard: -1,
                                    popname: true,
                                    precontent() {
                                        player.removeMark('jxtp_rende', 1);
                                    },
                                },
                                give: {
                                    audio: 'jxtp_rende',
                                    enable: 'phaseUse',
                                    filterCard: true,
                                    selectCard: [1, Infinity],
                                    position: 'he',
                                    discard: false,
                                    lose: false,
                                    delay: false,
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                    prompt(event) {
                                        return '出牌阶段,你可以将任意张牌交给一名其他角色,然后你获得1枚<仁望>标记';
                                    },
                                    check(card) {
                                        const player = get.owner(card);
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            return 0;
                                        }
                                        if (!ui.selected.cards.length && card.name == 'du') {
                                            return 20;
                                        }
                                        if (ui.selected.cards.length >= Math.max(2, player.countCards('he') - player.hp)) {
                                            return 0;
                                        }
                                        if (player.countCards('he') <= 1) {
                                            const players = game.filterPlayer();
                                            for (let i = 0; i < players.length; i++) {
                                                if (players[i].hasSkill('haoshi') && !players[i].isTurnedOver() && !players[i].hasJudge('lebu') && get.attitude(player, players[i]) >= 3 && get.attitude(players[i], player) >= 3) {
                                                    return 11 - get.value(card);
                                                }
                                            }
                                            if (player.countCards('he') > player.hp) {
                                                return 10 - get.value(card);
                                            }
                                            if (player.countCards('he') > 2) {
                                                return 6 - get.value(card);
                                            }
                                            return -1;
                                        }
                                        return 18 - (ui.selected.cards.length + player.countMark('jxtp_rende')) - get.value(card);
                                    },
                                    content() {
                                        player.give(cards, target);
                                        player.addMark('jxtp_rende', 1);
                                    },
                                    ai: {
                                        order(skill, player) {
                                            return player.countMark('jxtp_rende') < 2 ? 6.8 : 5.8;
                                        },
                                        result: {
                                            target(player, target) {
                                                if (!player.hasFriend() && player.hasSkill('sbzhangwu') && ui.selected.cards.length && get.value(ui.selected.cards[0]) > (lib.skill.sbzhangwu.filterTarget(null, player, target) ? 3 : 5)) {
                                                    return -0.1;
                                                }
                                                if (target.hasSkillTag('nogain')) {
                                                    return 0;
                                                }
                                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                                    if (target.hasSkillTag('nodu')) {
                                                        return 0;
                                                    }
                                                    return -10;
                                                }
                                                if (target.hasJudge('lebu')) {
                                                    return 0;
                                                }
                                                const nh = target.countCards('h');
                                                return Math.max(1, 5 - nh);
                                            },
                                        },
                                        threaten: 1.1,
                                    },
                                },
                                gain: {
                                    audio: 'jxtp_rende',
                                    trigger: {
                                        player: ['phaseZhunbeiBegin', 'phaseUseBegin'],
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    content() {
                                        player.addMark('jxtp_rende', 1);
                                    },
                                },
                            },
                        },
                        jxtp_zhangwu: {
                            audio: 'ext:极限突破/audio:2',
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                if (game.roundNumber <= 2) {
                                    return false;
                                }
                                return true;
                            },
                            selectTarget: -1,
                            multiline: true,
                            content() {
                                'step 0';
                                player.awakenSkill('jxtp_zhangwu');
                                let num = Math.max(player.countMark('jxtp_rende'), 2);
                                player.draw(num);
                                player.removeMark('jxtp_rende', num);
                                ('step 1');
                                if (result.bool) {
                                    target.give(result.cards, player);
                                }
                            },
                            contentAfter() {
                                'step 0';
                                player.gainMaxHp(4);
                                player.recover(4);
                                ('step 1');
                                player.addTempSkill('nzry_longnu_2');
                                player.addSkill('nzry_longnu');
                            },
                            ai: {
                                order: 9,
                                combo: 'jxtp_rende',
                                result: {
                                    player(player, target) {
                                        let targets = game.filterPlayer((current) => lib.skill.sbzhangwu.filterTarget(null, player, current));
                                        if (!targets.length) {
                                            return 0;
                                        }
                                        let eff = 0;
                                        for (let target of targets) {
                                            eff += get.effect(target, { name: 'shunshou_copy2' }, player, player);
                                        }
                                        eff += 15 - 5 * Math.max(0, 3 - player.getDamagedHp());
                                        return eff > 15 ? 1 : 0;
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
                        jxtp_jijiang: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            zhuSkill: true,
                            forced: true,
                            filter(event, player) {
                                if (!player.hasZhuSkill('jxtp_jijiang')) {
                                    return false;
                                }
                                return game.hasPlayer((current) => {
                                    if (current.group != 'shu') {
                                        return false;
                                    }
                                    return game.hasPlayer((currentx) => current.inRange(currentx));
                                });
                            },
                            content() {
                                'step 0';
                                let next = player.chooseTarget(get.prompt2('jxtp_jijiang'), 2);
                                next.set('filterTarget', (card, player, target) => {
                                    if (!ui.selected.targets.length) {
                                        return true;
                                    }
                                    const current = ui.selected.targets[0];
                                    if (current.group == 'shu') {
                                        return current.inRange(target);
                                    } else {
                                        return target.group == 'shu' && target.inRange(current) && target != player;
                                    }
                                });
                                next.set('targetprompt', (target) => {
                                    const player = _status.event.player;
                                    if (
                                        target.group == 'shu' &&
                                        target != player &&
                                        !ui.selected.targets.some((i) => {
                                            return i != target && i.group == 'shu';
                                        })
                                    ) {
                                        return '进行选择';
                                    }
                                    return '选择对象';
                                });
                                next.set('ai', (target) => {
                                    const player = _status.event.player;
                                    if (ui.selected.targets.length) {
                                        const current = ui.selected.targets[0];
                                        if (current.group == 'shu') {
                                            return -get.attitude(player, target);
                                        }
                                        return Math.abs(get.attitude(player, current));
                                    } else {
                                        if (
                                            target.group == 'shu' &&
                                            game.hasPlayer((current) => {
                                                return get.attitude(player, current) < 0;
                                            })
                                        ) {
                                            return 10;
                                        }
                                        return 1;
                                    }
                                });
                                ('step 1');
                                if (result.bool) {
                                    let targets = result.targets;
                                    event.targets = targets;
                                    if (targets[0].group != 'shu') {
                                        targets.reverse();
                                    }
                                    player.line2(targets);
                                    const choiceList = ['视为对' + get.translation(targets[1]) + '使用一张【杀】', '你的下一个出牌阶段开始前,跳过此阶段'];
                                    targets[0]
                                        .chooseControl()
                                        .set('choiceList', choiceList)
                                        .set('ai', () => {
                                            return _status.event.choice;
                                        })
                                        .set('choice', get.effect(targets[1], { name: 'sha' }, targets[0], targets[0]) > get.effect(targets[0], { name: 'lebu' }, targets[0], targets[0]) ? 0 : 1);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.index == 0) {
                                    targets[0].useCard({ name: 'sha' }, targets[1], false);
                                } else {
                                    targets[0].addSkill('jxtp_jijiang_skip');
                                }
                            },
                            subSkill: {
                                skip: {
                                    trigger: {
                                        player: 'phaseUseBefore',
                                    },
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                        player.removeSkill('jxtp_jijiang_skip');
                                    },
                                },
                            },
                        },
                        jxtp_taoluan1: {
                            audio: 'taoluan',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (!player.countCards('hse')) {
                                    return false;
                                }
                                for (let i of lib.inpile) {
                                    const type = get.type2(i);
                                    if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            init(player) {
                                if (!player.storage.jxtp_taoluan1) {
                                    player.storage.jxtp_taoluan1 = [];
                                }
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    let list = [];
                                    for (let i = 0; i < lib.inpile.length; i++) {
                                        let name = lib.inpile[i];
                                        if (player.storage.jxtp_taoluan1 && player.storage.jxtp_taoluan1.includes(name)) {
                                            continue;
                                        }
                                        if (name == 'sha') {
                                            if (event.filterCard && event.filterCard({ name: name }, player, event)) {
                                                list.push(['基本', '', 'sha']);
                                            }
                                            for (let j of lib.inpile_nature) {
                                                if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) {
                                                    list.push(['基本', '', 'sha', j]);
                                                }
                                            }
                                        } else if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) {
                                            list.push(['锦囊', '', name]);
                                        } else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) {
                                            list.push(['基本', '', name]);
                                        }
                                    }
                                    return ui.create.dialog('滔乱', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    if (_status.event.parent.type != 'phase') {
                                        return 1;
                                    }
                                    const player = _status.event.player;
                                    if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) {
                                        return 0;
                                    }
                                    return player.getUseValue({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        audio: 'taoluan',
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'hse',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        onuse(result, player) {
                                            player.storage.jxtp_taoluan1.add(result.card.name);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                if (!lib.inpile.includes(name)) {
                                    return false;
                                }
                                const type = get.type2(name);
                                return (type == 'basic' || type == 'trick') && player.countCards('she') > 0;
                            },
                            ai: {
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('hse')) {
                                        return false;
                                    }
                                },
                                order: 1,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) {
                                            return get.attitude(player, _status.event.dying);
                                        }
                                        return 1;
                                    },
                                },
                            },
                            group: ['jxtp_taoluan1_draw', 'jxtp_taoluan1_clear'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.skill == 'jxtp_taoluan1_backup';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                clear: {
                                    trigger: {
                                        global: 'phaseJieshuEnd',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.jxtp_taoluan1;
                                    },
                                    content() {
                                        player.storage.jxtp_taoluan1 = [];
                                    },
                                },
                            },
                        },
                        jxtp_pingjian: {
                            audio: 'pingjian',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseDrawBegin2', 'damageEnd', 'loseHpEnd', 'phaseJieshuBegin', 'dying'],
                            },
                            initList() {
                                let list = [];
                                if (_status.connectMode) {
                                    let list = get.charactersOL();
                                } else {
                                    let list = [];
                                    for (let i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) {
                                            continue;
                                        }
                                        list.push(i);
                                    }
                                }
                                game.countPlayer2(function (current) {
                                    list.remove(current.name);
                                    list.remove(current.name1);
                                    list.remove(current.name2);
                                    if (current.storage.rehuashen && current.storage.rehuashen.character) {
                                        list.removeArray(current.storage.rehuashen.character);
                                    }
                                });
                                _status.characterlist = list;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (!player.storage.jxtp_pingjian) {
                                    player.storage.jxtp_pingjian = [];
                                }
                                event._result = { bool: true };
                                ('step 1');
                                if (result.bool) {
                                    if (!_status.characterlist) {
                                        lib.skill.jxtp_pingjian.initList();
                                    }
                                    let list = [];
                                    const skills = [];
                                    const map = [];
                                    _status.characterlist.randomSort();
                                    let name2 = event.triggername;
                                    for (let i = 0; i < _status.characterlist.length; i++) {
                                        let name = _status.characterlist[i];
                                        if (name.includes('zuoci') || name.includes('xushao')) {
                                            continue;
                                        }
                                        const skills2 = lib.character[name][3];
                                        for (let j = 0; j < skills2.length; j++) {
                                            if (player.storage.jxtp_pingjian.includes(skills2[j])) {
                                                continue;
                                            }
                                            if (skills.includes(skills2[j])) {
                                                list.add(name);
                                                if (!map[name]) {
                                                    map[name] = [];
                                                }
                                                map[name].push(skills2[j]);
                                                skills.add(skills2[j]);
                                                continue;
                                            }
                                            const list2 = [skills2[j]];
                                            game.expandSkills(list2);
                                            for (let k = 0; k < list2.length; k++) {
                                                const info = lib.skill[list2[k]];
                                                if (!info || !info.trigger || !info.trigger.player || info.silent || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) {
                                                    continue;
                                                }
                                                if (info.trigger.player == name2 || (Array.isArray(info.trigger.player) && info.trigger.player.includes(name2))) {
                                                    if (info.init || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) {
                                                        continue;
                                                    }
                                                    if (info.filter) {
                                                        try {
                                                            let bool = info.filter(trigger, player, name2);
                                                            if (!bool) {
                                                                continue;
                                                            }
                                                        } catch (e) {
                                                            continue;
                                                        }
                                                    }
                                                    list.add(name);
                                                    if (!map[name]) {
                                                        map[name] = [];
                                                    }
                                                    map[name].push(skills2[j]);
                                                    skills.add(skills2[j]);
                                                    break;
                                                }
                                            }
                                        }
                                        if (list.length > 2) {
                                            break;
                                        }
                                    }
                                    if (!skills.length) {
                                        player.draw();
                                        event.finish();
                                    } else {
                                        skills.unshift('摸牌');
                                        player
                                            .chooseControl(skills)
                                            .set('dialog', ['请选择要发动的技能', [list, 'character']])
                                            .set('ai', function () {
                                                return 0;
                                            });
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.control == '摸牌') {
                                    player.draw();
                                    return;
                                }
                                player.storage.jxtp_pingjian.add(result.control);
                                if (event.triggername == 'phaseDrawBegin2') {
                                    player.addTempSkill(result.control, 'phaseDrawEnd');
                                } else if (event.triggername == 'phaseZhunbeiBegin') {
                                    player.addTempSkill(result.control, 'phaseZhunbei');
                                } else if (event.triggername == 'damageEnd') {
                                    player.addTempSkill(result.control, 'damageAfter');
                                } else if (event.triggername == 'loseHpEnd') {
                                    player.addTempSkill(result.control, 'loseHpAfter');
                                } else if (event.triggername == 'phaseJieshuBegin') {
                                    player.addTempSkill(result.control, 'phaseJieshu');
                                } else {
                                    player.addTempSkill(result.control, 'dyingAfter');
                                }
                            },
                            group: 'pingjian_use',
                            phaseUse_special: ['xinfu_lingren'],
                        },
                        jxtp_quesong: {
                            audio: 'renxin',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                player.damage('unreal');
                                target.damage('unreal');
                                target.recover();
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target(player, target) {
                                        if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) < 1) {
                                            return 0;
                                        }
                                        const _hp = target.hp,
                                            _maxhp = target.maxHp;
                                        target.hp = 10;
                                        target.maxHp = 10;
                                        let att = -get.sgnAttitude(player, target);
                                        let val = get.damageEffect(target, player, target) * att;
                                        target.getSkills(null, false, false).forEach((skill) => {
                                            const info = get.info(skill);
                                            if (info && info.ai && (info.ai.maixie || info.ai.maixie_hp || info.ai.maixie_defend)) {
                                                val = Math[val > 0 ? 'max' : 'min'](val > 0 ? 0.1 : -0.1, val + 2 * att);
                                            }
                                        });
                                        let eff = 100 / val;
                                        target.hp = _hp;
                                        target.maxHp = _maxhp;
                                        let limit = 17.5;
                                        if (player.hasSkill('mbquesong')) {
                                            if (!player.getStat().damaged) {
                                                limit += 7.5;
                                            }
                                        }
                                        if (eff < limit) {
                                            return 0;
                                        }
                                        return eff / 30;
                                    },
                                },
                            },
                        },
                        jxtp_chengxiang: {
                            audio: 'rechengxiang',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                player.chooseTarget(get.prompt2('jxtp_chengxiang')).set('ai', (target) => {
                                    const player = _status.event.player;
                                    if (get.attitude(player, target) <= 0) {
                                        return 0;
                                    }
                                    const len = [1, 2, 3, 4, 5].reduce((p, c) => p + target.countEmptySlot(c), 0);
                                    return len + target.isTurnedOver() * 2 + (1.5 * Math.min(4, target.getDamagedHp())) / (target.getHp() + 1);
                                });
                                ('step 2');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    event.target = target;
                                    const len = [1, 2, 3, 4, 5].reduce((p, c) => p + target.countEmptySlot(c), 0);
                                    const hp = target.getHp(); //QQQ
                                    let forced = false;
                                    if (len == 0) {
                                        forced = true;
                                    }
                                    if (hp == 0 || target.countCards('h') < hp) {
                                        if (forced) {
                                            event.finish();
                                        } else {
                                            event._result = { bool: false };
                                        }
                                    } else {
                                        let str = `${forced ? '请' : '是否'}弃置${get.cnNumber(hp)}张手牌并回复1点体力${forced ? '' : '？或点击<取消>摸' + get.cnNumber(len) + '张牌并复原武将牌'}.`;
                                        target
                                            .chooseToDiscard(get.translation(player) + '对你发动了【称象】', str, forced, 'h', hp)
                                            .set('ai', (card) => {
                                                if (!_status.event.goon) {
                                                    return 0;
                                                }
                                                return 6 - get.value(card);
                                            })
                                            .set(
                                                'goon',
                                                (function () {
                                                    const _hp = hp + target.isTurnedOver() * 1.5;
                                                    if (forced || _hp + player.countCards('hs', (card) => get.tag(card, 'recover')) <= 2 - len / 4) {
                                                        return true;
                                                    }
                                                    return len > _hp;
                                                })()
                                            );
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    target.recover();
                                    event.finish();
                                } else {
                                    target.draw([1, 2, 3, 4, 5].reduce((p, c) => p + target.countEmptySlot(c), 0));
                                }
                                ('step 4');
                                target.link(false);
                                ('step 5');
                                target.turnOver(false);
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) {
                                                return [1, -2];
                                            }
                                            if (!target.hasFriend()) {
                                                return;
                                            }
                                            let num = 1;
                                            if (get.attitude(player, target) > 0) {
                                                if (player.needsToDiscard()) {
                                                    num = 0.7;
                                                } else {
                                                    num = 0.5;
                                                }
                                            }
                                            if (target.hp >= 4) {
                                                return [1, num * 2];
                                            }
                                            if (target.hp == 3) {
                                                return [1, num * 1.5];
                                            }
                                            if (target.hp == 2) {
                                                return [1, num * 0.5];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_chengxiang1: {
                            audio: 'rechengxiang',
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return event.player.isIn() && !event.player.getHistory('sourceDamage').length;
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                let num = 7;
                                if (!event.showCards) {
                                    event.showCards = [];
                                }
                                await event.trigger('chengxiangShowBegin');
                                if (event.name == 'olchengxiang') {
                                    let mark = player.countMark('olchengxiang');
                                    num += mark;
                                    player.removeMark('olchengxiang', mark, false);
                                }
                                const cards = [];
                                if (num > event.showCards.length) {
                                    cards.addArray(get.cards(num - event.showCards.length));
                                    await game.cardsGotoOrdering(cards);
                                }
                                cards.addArray(event.showCards);
                                const videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards, num) {
                                        var str;
                                        if (player == game.me && !_status.auto) {
                                            str = '称象:选择任意张点数不大于' + num + '的牌';
                                        } else {
                                            str = '称象';
                                        }
                                        var dialog = ui.create.dialog(str, cards);
                                        dialog.videoId = id;
                                    },
                                    player,
                                    videoId,
                                    cards,
                                    event.name == 'oldchengxiang' ? 12 : 13
                                );
                                const time = get.utc();
                                game.addVideo('showCards', player, ['称象', get.cardsInfo(cards)]);
                                game.addVideo('delay', null, 2);
                                const next = player.chooseButton([0, Infinity]);
                                next.set('dialog', videoId);
                                next.set('filterButton', function (button) {
                                    let num = 0;
                                    for (let i = 0; i < ui.selected.buttons.length; i++) {
                                        num += ui.selected.buttons[i].link.number;
                                    }
                                    return num + button.link.number <= _status.event.maxNum;
                                });
                                next.set('maxNum', event.name == 'oldchengxiang' ? 12 : 13);
                                next.set('ai', function (button) {
                                    let player = _status.event.player,
                                        name = button.link.name,
                                        val = get.value(button.link, player);
                                    if (name === 'tao') {
                                        return val + 2 * Math.min(3, 1 + player.getDamagedHp());
                                    }
                                    if (name === 'jiu' && player.hp < 3) {
                                        return val + 2 * (2.8 - player.hp);
                                    }
                                    if (name === 'wuxie' && player.countCards('j') && !player.hasWuxie()) {
                                        return val + 5;
                                    }
                                    if (player.hp > 1 && player.hasSkill('renxin') && player.hasFriend() && get.type(button.link) === 'equip') {
                                        return val + 4;
                                    }
                                    return val;
                                });
                                const result = await next.forResult();
                                let cards2 = [];
                                if (result.bool && result.links) {
                                    for (const i of result.links) {
                                        cards2.push(i);
                                        cards.remove(i);
                                    }
                                } else {
                                    return;
                                }
                                game.broadcastAll('closeDialog', videoId);
                                await player.gain(cards2, 'gain2');
                                if (event.name == 'olchengxiang') {
                                    let num = cards2.reduce((num, i) => {
                                        return num + i.number;
                                    }, 0);
                                    if (num == 13) {
                                        player.addMark('olchengxiang', 1, false);
                                    }
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) {
                                                return [1, -2];
                                            }
                                            if (!target.hasFriend()) {
                                                return;
                                            }
                                            if (target.hp >= 4) {
                                                return [1, 2];
                                            }
                                            if (target.hp == 3) {
                                                return [1, 1.5];
                                            }
                                            if (target.hp == 2) {
                                                return [1, 0.5];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_chengxiang2: {
                            group: ['jxtp_chengxiang', 'jxtp_chengxiang1'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_pichai: {
                            audio: 'scspicai',
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                event.cards = [];
                                event.suits = [];
                                ('step 1');
                                player
                                    .judge(function (result) {
                                        let evt = _status.event.getParent('jxtp_pichai');
                                        if (evt && evt.suits && evt.suits.includes(result.suit)) {
                                            return 0;
                                        }
                                        return 1;
                                    })
                                    .set('callback', lib.skill.jxtp_pichai.callback).judge2 = function (result) {
                                        return result.bool ? true : false;
                                    };
                                ('step 2');
                                let cards = event.cards.filterInD();
                                if (cards.length) {
                                    player.chooseTarget('将' + get.translation(cards) + '交给一名角色', true).set('ai', function (target) {
                                        const player = _status.event.player;
                                        let att = get.attitude(player, target) / Math.sqrt(1 + target.countCards('h'));
                                        if (target.hasSkillTag('nogain')) {
                                            att /= 10;
                                        }
                                        return att;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    event.target = target;
                                    player.line(target, 'green');
                                    target.gain(cards, 'gain2').giver = player;
                                    ('step 4');
                                    if (target.isDamaged()) {
                                        target.recover(target.maxHp);
                                    } else {
                                        target.gainMaxHp();
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                            callback() {
                                'step 0';
                                let evt = event.getParent(2);
                                event.parent.orderingCards.remove(event.judgeResult.card);
                                evt.cards.push(event.judgeResult.card);
                                if (event.parent.result.bool) {
                                    evt.suits.push(event.parent.result.suit);
                                    player.chooseBool('是否继续发动【庀材】？').set('frequentSkill', 'jxtp_pichai');
                                } else {
                                    event._result = { bool: false };
                                }
                                ('step 1');
                                if (result.bool) {
                                    event.getParent(2).redo();
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        jxtp_zimou: {
                            audio: 'scszimou',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                let evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) {
                                    return false;
                                }
                                let num = player.getHistory('useCard', (evtx) => evtx.getParent('phaseUse') == evt).length;
                                return num == 1 || num == 2 || num == 3;
                            },
                            content() {
                                let evt = trigger.getParent('phaseUse');
                                let num = player.getHistory('useCard', (evtx) => evtx.getParent('phaseUse') == evt).length;
                                let cards = [];
                                if (num == 1) {
                                    let card = get.cardPile((card) => {
                                        return card.name == 'sha';
                                    });
                                    if (card) {
                                        cards.push(card);
                                    }
                                } else if (num == 2) {
                                    let card = get.cardPile((card) => {
                                        return card.name == 'huogong';
                                    });
                                    if (card) {
                                        cards.push(card);
                                    }
                                } else if (num == 3) {
                                    let card = get.cardPile((card) => {
                                        return card.name == 'juedou';
                                    });
                                    if (card) {
                                        cards.push(card);
                                    }
                                }
                                if (cards.length) {
                                    player.gain(cards, 'gain2');
                                }
                            },
                        },
                        jxtp_niqu: {
                            audio: 'scsniqu',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: true,
                            selectTarget: [1, 2],
                            content() {
                                target.damage(1, 'fire');
                            },
                            ai: {
                                expose: 0.2,
                                order: 5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target, 'fire') / 10;
                                    },
                                },
                            },
                        },
                        jxtp_xiaolu: {
                            audio: 'scsxiaolu',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                let card = get.cardPile(function (card) {
                                    return card.name == 'shan' || card.name == 'tao';
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                }
                                ('step 1');
                                let card1 = get.cardPile(function (card) {
                                    return card.name == 'sha' || card.name == 'jiu';
                                });
                                if (card1) {
                                    player.gain(card1, 'gain2');
                                }
                                ('step 2');
                                let card2 = get.cardPile(function (card) {
                                    return card.name == 'juedou' || card.name == 'huogong' || card.name == 'nanman' || card.name == 'wanjian' || card.name == 'binglin' || card.name == 'qizheng' || card.name == 'chuqi' || card.name == 'huoshao';
                                });
                                if (card2) {
                                    player.gain(card2, 'gain2');
                                }
                                ('step 3');
                                let card3 = get.cardPile(function (card) {
                                    return get.type2(card) == 'trick' && !get.tag(event.card, 'damage');
                                });
                                if (card3) {
                                    player.gain(card3, 'gain2');
                                }
                                ('step 4');
                                let card4 = get.cardPile(function (card) {
                                    return get.type2(card) == 'equip';
                                });
                                if (card4) {
                                    player.gain(card4, 'gain2');
                                }
                                ('step 5');
                                let num = player.countCards('he');
                                if (!num) {
                                    event.finish();
                                } else if (num < 5) {
                                    event._result = { index: 1 };
                                } else {
                                    player
                                        .chooseControl()
                                        .set('choiceList', ['选五张牌给人', '咱家全部私吞'])
                                        .set('ai', function () {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return current != player && get.attitude(player, current) > 0;
                                                })
                                            ) {
                                                return 0;
                                            }
                                            return 1;
                                        });
                                }
                                ('step 6');
                                if (result.index == 0) {
                                    player.chooseCardTarget({
                                        position: 'he',
                                        filterCard: true,
                                        selectCard: 5,
                                        filterTarget(card, player, target) {
                                            return player != target;
                                        },
                                        ai1(card) {
                                            return get.unuseful(card);
                                        },
                                        ai2(target) {
                                            let att = get.attitude(_status.event.player, target);
                                            if (target.hasSkillTag('nogain')) {
                                                att /= 10;
                                            }
                                            if (target.hasJudge('lebu')) {
                                                att /= 5;
                                            }
                                            return att;
                                        },
                                        prompt: '选择五张牌,交给一名其他角色',
                                        forced: true,
                                    });
                                } else {
                                    player.loseHp();
                                    event.finish();
                                }
                                ('step 7');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    player.give(result.cards, target);
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 2,
                                },
                            },
                        },
                        jxtp_chihe: {
                            audio: 'scschihe',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return (event.card && event.card.name == 'sha') || event.card.name == 'juedou';
                            },
                            prompt2(event, player) {
                                let str = '亮出牌堆顶的五张牌并增加伤害;且';
                                str += '令' + get.translation(event.target) + '不能使用';
                                str += '这五张牌所包含的花色';
                                str += '的牌响应' + get.translation(event.card);
                                return str;
                            },
                            logTarget: 'target',
                            check(event, player) {
                                let target = event.target;
                                if (get.attitude(player, target) > 0) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                let num = 5;
                                let evt = trigger.parent;
                                const suit = trigger.card.suit;
                                const suits = [];
                                if (num > 0) {
                                    if (typeof evt.baseDamage != 'number') {
                                        evt.baseDamage = 1;
                                    }
                                    let cards = get.cards(num);
                                    player.showCards(cards.slice(0), get.translation(player) + '发动了【叱吓】');
                                    while (cards.length) {
                                        let card = cards.pop();
                                        const suitx = card.suit;
                                        suits.add(suitx);
                                        if (suit == suitx) {
                                            evt.baseDamage++;
                                        }
                                    }
                                    game.updateRoundNumber();
                                }
                                evt._jxtp_chihe_player = player;
                                let target = trigger.target;
                                target.addTempSkill('jxtp_chihe_block');
                                if (!target.storage.jxtp_chihe_block) {
                                    target.storage.jxtp_chihe_block = [];
                                }
                                target.storage.jxtp_chihe_block.push([evt.card, suits]);
                                lib.skill.jxtp_chihe.updateBlocker(target);
                            },
                            updateBlocker(player) {
                                let list = [],
                                    storage = player.storage.jxtp_chihe_block;
                                if (storage && storage.length) {
                                    for (let i of storage) {
                                        list.addArray(i[1]);
                                    }
                                }
                                player.storage.jxtp_chihe_blocker = list;
                            },
                            ai: {
                                threaten: 2.5,
                                halfneg: true,
                            },
                            subSkill: {
                                block: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (!player.storage.jxtp_chihe_blocker) {
                                                return;
                                            }
                                            const suit = card.suit;
                                            if (suit == 'none') {
                                                return;
                                            }
                                            let evt = _status.event;
                                            if (evt.name != 'chooseToUse') {
                                                evt = evt.getParent('chooseToUse');
                                            }
                                            if (!evt || !evt.respondTo || evt.respondTo[1].name != 'sha') {
                                                return;
                                            }
                                            if (player.storage.jxtp_chihe_blocker.includes(suit)) {
                                                return false;
                                            }
                                        },
                                    },
                                    trigger: {
                                        player: ['damageBefore', 'damageCancelled', 'damageZero'],
                                        target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd'],
                                        global: ['useCardEnd'],
                                    },
                                    forced: true,
                                    firstDo: true,
                                    charlotte: true,
                                    popup: false,
                                    onremove(player) {
                                        delete player.storage.jxtp_chihe_block;
                                        delete player.storage.jxtp_chihe_blocker;
                                    },
                                    filter(event, player) {
                                        if (!event.card || !player.storage.jxtp_chihe_block) {
                                            return false;
                                        }
                                        for (let i of player.storage.jxtp_chihe_block) {
                                            if (i[0] == event.card) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        const storage = player.storage.jxtp_chihe_block;
                                        for (let i = 0; i < storage.length; i++) {
                                            if (storage[i][0] == trigger.card) {
                                                storage.splice(i--, 1);
                                            }
                                        }
                                        if (!storage.length) {
                                            player.removeSkill('jxtp_chihe_block');
                                        } else {
                                            lib.skilljxtp_chihe.updateBlocker(target);
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_taoluan2: {
                            mod: {
                                selectTarget(card, player, range) {
                                    if (Array.isArray(range) && range[1] == -1) {
                                        return;
                                    }
                                    if (card.name == 'sha') {
                                        range[1] += 8;
                                    }
                                },
                            },
                            audio: 'csctaoluan',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (!player.countMark('taoluan') || !player.countCards('hse') || player.hasSkill('jxtp_taoluan6')) {
                                    return false;
                                }
                                for (let i of lib.inpile) {
                                    const type = get.type2(i);
                                    if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    let list = [];
                                    for (let i = 0; i < lib.inpile.length; i++) {
                                        let name = lib.inpile[i];
                                        if (name == 'sha') {
                                            if (event.filterCard && event.filterCard({ name }, player, event)) {
                                                list.push(['基本', '', 'sha']);
                                            }
                                            for (let nature of lib.inpile_nature) {
                                                if (event.filterCard && event.filterCard({ name, nature }, player, event)) {
                                                    list.push(['基本', '', 'sha', nature]);
                                                }
                                            }
                                        } else if (get.type2(name) == 'trick' && event.filterCard({ name }, player, event)) {
                                            list.push(['锦囊', '', name]);
                                        } else if (get.type(name) == 'basic' && event.filterCard({ name }, player, event)) {
                                            list.push(['基本', '', name]);
                                        }
                                    }
                                    return ui.create.dialog('滔乱', [list, 'vcard']);
                                },
                                check(button) {
                                    if (_status.event.parent.type != 'phase') {
                                        return 1;
                                    }
                                    const player = _status.event.player;
                                    if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) {
                                        return 0;
                                    }
                                    return player.getUseValue({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        audio: 'scstaoluan',
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'hse',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            player.addTempSkill('jxtp_taoluan6');
                                            player.removeMark('toluan', 1);
                                            player.draw();
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                if (!lib.inpile.includes(name)) {
                                    return false;
                                }
                                const type = get.type2(name);
                                return (type == 'basic' || type == 'trick') && player.countMark('taoluan') > 0 && player.countCards('she') > 0 && !player.hasSkill('jxtp_taoluan6');
                            },
                            ai: {
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countMark('taoluan') || !player.countCards('hse') || player.hasSkill('jxtp_taoluan6')) {
                                        return false;
                                    }
                                },
                                order: 1,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) {
                                            return get.attitude(player, _status.event.dying);
                                        }
                                        return 1;
                                    },
                                },
                            },
                        },
                        jxtp_chiyan: {
                            shaRelated: true,
                            audio: 'scschiyan',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                let next = player.choosePlayerCard(trigger.target, 'he', [1, Math.max(trigger.target.maxHp, 3)], get.prompt('jxtp_chiyan', trigger.target));
                                next.set('ai', function (button) {
                                    if (!_status.event.goon) {
                                        return 0;
                                    }
                                    let val = get.value(button.link);
                                    if (button.link == _status.event.target.getEquip(2)) {
                                        return 2 * (val + 3);
                                    }
                                    return val;
                                });
                                next.set('goon', get.attitude(player, trigger.target) <= 0);
                                next.set('forceAuto', true);
                                ('step 1');
                                if (result.bool) {
                                    let target = trigger.target;
                                    target.addTempSkill('fengyin');
                                    target.addSkill('jxtp_chiyan2');
                                    target.addToExpansion('giveAuto', result.cards, target).gaintag.add('jxtp_chiyan2');
                                }
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0) {
                                        return false;
                                    }
                                    if (tag == 'directHit_ai') {
                                        return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                                    }
                                    if (arg && arg.name == 'sha' && arg.target.getEquip(2)) {
                                        return true;
                                    }
                                    return false;
                                },
                            },
                        },
                        jxtp_chiyan2: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            filter(event, player) {
                                return player.getExpansions('jxtp_chiyan2').length;
                            },
                            content() {
                                'step 0';
                                let cards = player.getExpansions('jxtp_chiyan2');
                                player.discard(cards, 'draw');
                                game.log(player, '弃置了' + get.cnNumber(cards.length) + '张<鸱咽>牌');
                                ('step 1');
                                player.removeSkill('jxtp_chiyan2');
                            },
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, storage, player) {
                                    let cards = player.getExpansions('jxtp_chiyan2');
                                    if (player.isUnderControl(true)) {
                                        dialog.addAuto(cards);
                                    } else {
                                        return '共有' + get.cnNumber(cards.length) + '张牌';
                                    }
                                },
                            },
                        },
                        jxtp_anruo: {
                            audio: 'scsanruo',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            prompt: '将一张♥️️牌当做桃,♦️️牌当做火杀,♣️️牌当做闪,♠️️牌当做无懈可击使用或打出',
                            viewAs(cards, player) {
                                let name = false;
                                let nature = null;
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
                                if (name) {
                                    return { name: name, nature: nature };
                                }
                                return null;
                            },
                            check(card) {
                                const player = _status.event.player;
                                if (_status.event.type == 'phase') {
                                    let max = 0;
                                    let name2;
                                    let list = ['sha', 'tao'];
                                    const map = { sha: 'diamond', tao: 'heart' };
                                    for (let i = 0; i < list.length; i++) {
                                        let name = list[i];
                                        if (
                                            player.countCards('hes', function (card) {
                                                return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                            }) > 0 &&
                                            player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                        ) {
                                            const temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                            if (temp > max) {
                                                max = temp;
                                                name2 = map[name];
                                            }
                                        }
                                    }
                                    if (name2 == card.suit) {
                                        return name2 == 'diamond' ? 5 - get.value(card) : 20 - get.value(card);
                                    }
                                    return 0;
                                }
                                return 1;
                            },
                            position: 'hes',
                            filterCard(card, player, event) {
                                event = event || _status.event;
                                const filter = event._backup.filterCard;
                                let name = card.suit;
                                if (name == 'club' && filter({ name: 'shan', cards: [card] }, player, event)) {
                                    return true;
                                }
                                if (name == 'diamond' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) {
                                    return true;
                                }
                                if (name == 'spade' && filter({ name: 'wuxie', cards: [card] }, player, event)) {
                                    return true;
                                }
                                if (name == 'heart' && filter({ name: 'tao', cards: [card] }, player, event)) {
                                    return true;
                                }
                                return false;
                            },
                            filter(event, player) {
                                const filter = event.filterCard;
                                if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hes', { suit: 'diamond' })) {
                                    return true;
                                }
                                if (filter({ name: 'shan' }, player, event) && player.countCards('hes', { suit: 'club' })) {
                                    return true;
                                }
                                if (filter({ name: 'tao' }, player, event) && player.countCards('hes', { suit: 'heart' })) {
                                    return true;
                                }
                                if (filter({ name: 'wuxie' }, player, event) && player.countCards('hes', { suit: 'spade' })) {
                                    return true;
                                }
                                return false;
                            },
                            precontent() {
                                'step 0';
                                player.addTempSkill('jxtp_anruo_effect');
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    let name;
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
                                    if (!player.countCards('hes', { suit: name })) {
                                        return false;
                                    }
                                },
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        let max = 0;
                                        let list = ['sha', 'tao'];
                                        const map = { sha: 'diamond', tao: 'heart' };
                                        for (let i = 0; i < list.length; i++) {
                                            let name = list[i];
                                            if (
                                                player.countCards('hes', function (card) {
                                                    return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                                }) > 0 &&
                                                player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                            ) {
                                                const temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                                if (temp > max) {
                                                    max = temp;
                                                }
                                            }
                                        }
                                        max /= 1.1;
                                        return max;
                                    }
                                    return 2;
                                },
                            },
                            hiddenCard(player, name) {
                                if (name == 'wuxie' && _status.connectMode && player.countCards('hes') > 0) {
                                    return true;
                                }
                                if (name == 'wuxie') {
                                    return player.countCards('hes', { suit: 'spade' }) > 0;
                                }
                                if (name == 'tao') {
                                    return player.countCards('hes', { suit: 'heart' }) > 0;
                                }
                            },
                            subSkill: {
                                effect: {
                                    audio: 'jxtp_anruo',
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    filter(event, player) {
                                        return event.skill == 'jxtp_anruo';
                                    },
                                    forced: true,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        let name = trigger.card.name;
                                        let next = game.createEvent('jxtp_anruo_' + name);
                                        next.player = player;
                                        next.setContent(lib.skill.jxtp_anruo_effect[name == 'shan' ? 'sha' : name] || function () { });
                                    },
                                    sha() {
                                        'step 0';
                                        let target;
                                        const trigger = event.parent.getTrigger();
                                        if (trigger.name == 'useCard') {
                                            target = lib.skill.chongzhen.logTarget(trigger, player);
                                        } else {
                                            target = trigger.source;
                                        }
                                        event.target = target;
                                        if (!target || !target.countGainableCards(player, 'he')) {
                                            event._result = { bool: false };
                                        } else {
                                            player
                                                .chooseBool(get.prompt('jxtp_anruo_effect', target), '获得该角色的一张牌')
                                                .set('ai', () => {
                                                    return _status.event.goon;
                                                })
                                                .set('goon', get.attitude(player, target) < 1);
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            player.gainPlayerCard(target, 'he', true);
                                        }
                                    },
                                    tao() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('jxtp_anruo'), '获得一名其他角色的一张牌', (card, player, target) => {
                                                return target.countGainableCards(player, 'he') && target != player;
                                            })
                                            .set('ai', (target) => {
                                                return 1 - get.attitude(_status.event.player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            let target = result.targets[0];
                                            player.gainPlayerCard(target, 'he', true);
                                        }
                                    },
                                    wuxie() {
                                        'step 0';
                                        const trigger = event.parent.getTrigger();
                                        if (!trigger.respondTo) {
                                            event.finish();
                                            return;
                                        }
                                        let target = trigger.respondTo[0];
                                        event.target = target;
                                        if (!target || !target.countGainableCards(player, player == target ? 'e' : 'he')) {
                                            event._result = { bool: false };
                                        } else {
                                            player
                                                .chooseBool(get.prompt('jxtp_anruo_effect', target), '获得该角色的一张牌')
                                                .set('ai', () => {
                                                    return _status.event.goon;
                                                })
                                                .set('goon', get.attitude(player, target) < 1);
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            player.gainPlayerCard(target, player == target ? 'e' : 'he', true);
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_mowang2: {
                            group: ['jxtp_mowang_turn', 'jxtp_mowang_damage'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.notLink() && event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                turn: {
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
                                },
                            },
                            ai: {
                                noturn: true,
                            },
                        },
                        jxtp_mowang_damage: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.notLink() && event.card && event.card.name == 'sha';
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        jxtp_mowang: {
                            group: ['jxtp_mowang0', 'jxtp_mowang1'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_yaozhuo: {
                            audio: 'scsyaozhuo',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return player.canCompare(current);
                                });
                            },
                            filterTarget(card, player, current) {
                                return player.canCompare(current);
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 0');
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    target.skip('phaseUse');
                                    target.addTempSkill('jxtp_yaozhuo_skip', { player: 'phaseUseSkipped' });
                                } else {
                                    target.addTempSkill('fengyin', { player: 'phaseEnd' });
                                    let num = target.countCards('h') - target.maxHp;
                                    if (num > 0) {
                                        target.chooseToDiscard('h', true, num);
                                    }
                                }
                            },
                            subSkill: {
                                skip: {
                                    mark: true,
                                    intro: {
                                        content: '跳过下一个出牌阶段',
                                    },
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.skipList.includes('phaseDraw') || target.hasSkill('pingkou')) {
                                            return 0;
                                        }
                                        const hs = player.getCards('h').sort(function (a, b) {
                                            return b.number - a.number;
                                        });
                                        const ts = target.getCards('h').sort(function (a, b) {
                                            return b.number - a.number;
                                        });
                                        if (!hs.length || !ts.length) {
                                            return 0;
                                        }
                                        if (hs[0].number > ts[0].number - 2 && hs[0].number > 5) {
                                            return -1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        jxtp_kuiji: {
                            audio: 'scskuiji',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                event.list1 = [];
                                event.list2 = [];
                                let chooseButton;
                                if (player.countCards('h') > 0) {
                                    chooseButton = player.chooseButton(4, ['你的手牌', player.getCards('h'), get.translation(target.name) + '的手牌', target.getCards('h')]);
                                } else {
                                    chooseButton = player.chooseButton(4, [get.translation(target.name) + '的手牌', target.getCards('h')]);
                                }
                                chooseButton.set('target', target);
                                chooseButton.set('ai', function (button) {
                                    const player = _status.event.player;
                                    let target = _status.event.target;
                                    const ps = [];
                                    const ts = [];
                                    for (let i = 0; i < ui.selected.buttons.length; i++) {
                                        let card = ui.selected.buttons[i].link;
                                        if (target.getCards('h').includes(card)) {
                                            ts.push(card);
                                        } else {
                                            ps.push(card);
                                        }
                                    }
                                    let card = button.link;
                                    const owner = get.owner(card);
                                    let val = get.value(card) || 1;
                                    if (owner == target) {
                                        if (ts.length > 1) {
                                            return 0;
                                        }
                                        if (ts.length == 0 || player.hp > 3) {
                                            return val;
                                        }
                                        return 2 * val;
                                    }
                                    return 7 - val;
                                });
                                chooseButton.set('filterButton', function (button) {
                                    for (let i = 0; i < ui.selected.buttons.length; i++) {
                                        if (button.link.suit == ui.selected.buttons[i].link.suit) {
                                            return false;
                                        }
                                    }
                                    return true;
                                });
                                ('step 1');
                                if (result.bool) {
                                    let list = result.links;
                                    for (let i = 0; i < list.length; i++) {
                                        if (get.owner(list[i]) == player) {
                                            event.list1.push(list[i]);
                                        } else {
                                            event.list2.push(list[i]);
                                        }
                                    }
                                    if (event.list1.length && event.list2.length) {
                                        game.loseAsync({
                                            lose_list: [
                                                [player, event.list1],
                                                [target, event.list2],
                                            ],

                                            discarder: player,
                                        }).setContent('discardMultiple');
                                    } else if (event.list2.length) {
                                        target.discard(event.list2);
                                    } else {
                                        player.discard(event.list1);
                                    }
                                }
                                ('step 2');
                                if (event.list1.length + event.list2.length == 4) {
                                    if (event.list1.length == 1) {
                                        player.draw(1);
                                    }
                                    if (event.list1.length == 2) {
                                        player.draw(2);
                                    }
                                    if (event.list1.length == 3) {
                                        player.draw(3);
                                    }
                                    if (event.list1.length == 4) {
                                        player.draw(4);
                                    }
                                }
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        jxtp_mowang1: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.die();
                            },
                        },
                        jxtp_guanxing: {
                            audio: 'guanxing',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            filter(event, player) {
                                return event.name == 'phaseZhunbei' || (player.hasSkill('jxtp_guanxing_on') && player.countCards('s', (card) => card.hasGaintag('jxtp_guanxing')));
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.name == 'phaseJieshu') {
                                    event.goto(2);
                                    return;
                                }
                                let cards = player.getCards('s', (card) => card.hasGaintag('jxtp_guanxing'));
                                if (cards.length) {
                                    player.loseToDiscardpile(cards);
                                }
                                let bool = player.getAllHistory('useSkill', (evt) => evt.skill == 'jxtp_guanxing').length > 1;
                                event.num = 7;
                                ('step 1');
                                const cards2 = get.cards(num);
                                player.$gain2(cards2, false);
                                game.log(player, '将', cards2, '置于了武将牌上');
                                player.loseToSpecial(cards2, 'jxtp_guanxing').visible = true;
                                player.markSkill('jxtp_guanxing');
                                ('step 2');
                                let cards3 = player.getCards('s', (card) => card.hasGaintag('jxtp_guanxing'));
                                if (cards3.length) {
                                    player
                                        .chooseToMove()
                                        .set('list', [['你的<星>', cards3], ['牌堆顶']])
                                        .set('prompt', '观星:点击将牌移动到牌堆顶')
                                        .set('processAI', function (list) {
                                            let cards1 = list[0][1].slice(),
                                                player = _status.event.player;
                                            let name = _status.event.getTrigger().name;
                                            let target = name == 'phaseZhunbei' ? player : player.next;
                                            const judges = target.getCards('j');
                                            let top = [],
                                                att = get.sgn(get.attitude(player, target));
                                            if (judges.length && att != 0 && (target != player || !player.hasWuxie())) {
                                                for (let i = 0; i < judges.length; i++) {
                                                    const judge = (card, num) => get.judge(card) * num;
                                                    cards1.sort((a, b) => judge(b, att) - judge(a, att));
                                                    if (judge(cards1[0], att) < 0) {
                                                        break;
                                                    } else {
                                                        top.unshift(cards1.shift());
                                                    }
                                                }
                                            }
                                            return [cards1, top];
                                        })
                                        .set('filterOk', function (moved) {
                                            return moved[1].length;
                                        });
                                } else {
                                    event._result = { bool: false };
                                }
                                ('step 3');
                                if (result.bool) {
                                    let cards = result.moved[1];
                                    player.loseToDiscardpile(cards, ui.cardPile, 'insert').log = false;
                                    game.log(player, '将', cards, '置于了牌堆顶');
                                } else if (trigger.name == 'phaseZhunbei') {
                                    player.addTempSkill('jxtp_guanxing_on');
                                }
                            },
                            group: 'jxtp_guanxing_unmark',
                            subSkill: {
                                on: {
                                    charlotte: true,
                                },
                                unmark: {
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    filter(event, player) {
                                        if (!event.ss || !event.ss.length) {
                                            return false;
                                        }
                                        return !player.countCards('s', (card) => card.hasGaintag('jxtp_guanxing'));
                                    },
                                    charlotte: true,
                                    forced: true,
                                    silent: true,
                                    content() {
                                        player.unmarkSkill('jxtp_guanxing');
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                            marktext: '星',
                            intro: {
                                mark(dialog, storage, player) {
                                    let cards = player.getCards('s', (card) => card.hasGaintag('jxtp_guanxing'));
                                    if (!cards || !cards.length) {
                                        return;
                                    }
                                    dialog.addAuto(cards);
                                },
                                markcount(storage, player) {
                                    return player.countCards('s', (card) => card.hasGaintag('jxtp_guanxing'));
                                },
                                onunmark(storage, player) {
                                    let cards = player.getCards('s', (card) => card.hasGaintag('jxtp_guanxing'));
                                    if (cards.length) {
                                        player.loseToDiscardpile(cards);
                                    }
                                },
                            },
                            mod: {
                                aiOrder(player, card, num) {
                                    let cards = player.getCards('s', (card) => card.hasGaintag('jxtp_guanxing'));
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('jxtp_guanxing')) {
                                        return num + (cards.length > 1 ? 0.5 : -0.0001);
                                    }
                                },
                            },
                        },
                        jxtp_guanxing_unmark: {
                            trigger: {
                                player: 'loseAfter',
                            },
                            filter(event, player) {
                                if (!event.ss || !event.ss.length) {
                                    return false;
                                }
                                return !player.countCards('s', (card) => card.hasGaintag('jxtp_guanxing'));
                            },
                            charlotte: true,
                            forced: true,
                            silent: true,
                            content() {
                                player.unmarkSkill('jxtp_guanxing');
                            },
                            popup: false,
                            _priority: 1,
                        },
                        jxtp_guanxing_on: {
                            charlotte: true,
                        },
                        jxtp_fangyu: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target.countCards('h') == 0) {
                                        if (card.name == 'sha' || (card.name == 'juedou') | (card.name == 'nanman') | (card.name == 'wanjian') | (card.name == 'tiesuo') | (card.name == 'wugu') | (card.name == 'huoshao') | (card.name == 'shuiyan') | (card.name == 'shandian') | (card.name == 'zengbin') | (card.name == 'lebu') | (card.name == 'bingliang')) {
                                            return false;
                                        }
                                    }
                                },
                            },
                            group: 'kongcheng1',
                            audio: 'kongcheng1',
                            audioname: ['re_zhugeliang'],
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh') {
                                        if (player.countCards('h') != 1) {
                                            return false;
                                        }
                                    }
                                },
                            },
                        },
                        jxtp_kongcheng: {
                            audio: 'kongcheng',
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            usable: 1,
                            filter(event, player) {
                                return get.tag(event.card, 'damage') > 0;
                            },
                            content() {
                                trigger.targets.remove(player);
                                trigger.parent.triggeredTargets2.remove(player);
                                trigger.untrigger();
                            },
                            subSkill: {
                                clear: {},
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        jxtp_kanpo: {
                            audio: 'sbkanpo',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            getNumber: 7,
                            async content(event, map) {
                                const player = map.player;
                                const storage = player.getStorage('jxtp_kanpo').slice();
                                if (storage.length) {
                                    player.unmarkAuto('jxtp_kanpo', storage);
                                }
                                const list = get.inpileVCardList((info) => {
                                    if (info[2] == 'sha' && info[3]) {
                                        return false;
                                    }
                                    return info[0] != 'equip';
                                });
                                const func = () => {
                                    const event = get.event();
                                    const controls = [
                                        (link) => {
                                            const evt = get.event();
                                            if (link == 'cancel2') {
                                                ui.click.cancel();
                                            } else {
                                                if (evt.dialog && evt.dialog.buttons) {
                                                    for (let i = 0; i < evt.dialog.buttons.length; i++) {
                                                        const button = evt.dialog.buttons[i];
                                                        button.classList.remove('selectable');
                                                        button.classList.remove('selected');
                                                        const counterNode = button.querySelector('.caption');
                                                        if (counterNode) {
                                                            counterNode.childNodes[0].innerHTML = ``;
                                                        }
                                                    }
                                                    ui.selected.buttons.length = 0;
                                                    game.check();
                                                }
                                                return;
                                            }
                                        },
                                    ];

                                    event.controls = ['清除选择', 'cancel2'].map((control) => {
                                        return ui.create.control(controls.concat(control == '清除选择' ? [control, 'stayleft'] : control));
                                    });
                                };
                                if (event.isMine()) {
                                    func();
                                } else if (event.isOnline()) {
                                    event.player.send(func);
                                }
                                let result = await player
                                    .chooseButton(['看破:是否记录七个牌名？', [list, 'vcard']], [1, 7], true)
                                    .set('ai', function (button) {
                                        switch (button.link[2]) {
                                            case 'wuxie':
                                                return 5 + Math.random();
                                            case 'sha':
                                                return 5 + Math.random();
                                            case 'tao':
                                                return 4 + Math.random();
                                            case 'jiu':
                                                return 3 + Math.random();
                                            case 'lebu':
                                                return 3 + Math.random();
                                            case 'shan':
                                                return 4.5 + Math.random();
                                            case 'wuzhong':
                                                return 4 + Math.random();
                                            case 'shunshou':
                                                return 2.7 + Math.random();
                                            case 'nanman':
                                                return 2 + Math.random();
                                            case 'wanjian':
                                                return 1.6 + Math.random();
                                            default:
                                                return 1.5 + Math.random();
                                        }
                                    })
                                    .set('filterButton', (button) => {
                                        return !_status.event.names.includes(button.link[2]);
                                    })
                                    .set('names', storage)
                                    .set('custom', {
                                        add: {
                                            confirm(bool) {
                                                if (bool != true) {
                                                    return;
                                                }
                                                const event = get.event().parent;
                                                if (event.controls) {
                                                    event.controls.forEach((i) => i.close());
                                                }
                                                if (ui.confirm) {
                                                    ui.confirm.close();
                                                }
                                                game.uncheck();
                                            },
                                            button() {
                                                if (ui.selected.buttons.length) {
                                                    return;
                                                }
                                                const event = get.event();
                                                if (event.dialog && event.dialog.buttons) {
                                                    for (let i = 0; i < event.dialog.buttons.length; i++) {
                                                        const button = event.dialog.buttons[i];
                                                        const counterNode = button.querySelector('.caption');
                                                        if (counterNode) {
                                                            counterNode.childNodes[0].innerHTML = ``;
                                                        }
                                                    }
                                                }
                                                if (!ui.selected.buttons.length) {
                                                    const evt = event.parent;
                                                    if (evt.controls) {
                                                        evt.controls[0].hide();
                                                    }
                                                }
                                            },
                                        },
                                        replace: {
                                            button(button) {
                                                const event = get.event();
                                                if (!event.isMine()) {
                                                    return;
                                                }
                                                if (button.classList.contains('selectable') == false) {
                                                    return;
                                                }
                                                if (ui.selected.buttons.length >= lib.skill.jxtp_kanpo.getNumber) {
                                                    return false;
                                                }
                                                button.classList.add('selected');
                                                ui.selected.buttons.push(button);
                                                let counterNode = button.querySelector('.caption');
                                                const count = ui.selected.buttons.filter((i) => i == button).length;
                                                if (counterNode) {
                                                    counterNode = counterNode.childNodes[0];
                                                    counterNode.innerHTML = `×${count}`;
                                                } else {
                                                    counterNode = ui.create.caption(`<span style="font-size:24px; font-family:xinwei; text-shadow:#FFF 0 0 4px, #FFF 0 0 4px, rgba(74,29,1,1) 0 0 3px;">×${count}</span>`, button);
                                                    counterNode.style.right = '5px';
                                                    counterNode.style.bottom = '2px';
                                                }
                                                const evt = event.parent;
                                                if (evt.controls) {
                                                    evt.controls[0].show();
                                                }
                                                game.check();
                                            },
                                        },
                                    });
                                if (result.bool) {
                                    const names = result.links.map((link) => link[2]);
                                    player.setStorage('jxtp_kanpo', names);
                                    player.markSkill('jxtp_kanpo');
                                }
                            },
                            marktext: '破',
                            intro: {
                                markcount(storage, player) {
                                    if (player.isUnderControl(true)) {
                                        return storage.length;
                                    }
                                    return '?';
                                },
                                mark(dialog, content, player) {
                                    if (player.isUnderControl(true)) {
                                        const storage = player.getStorage('jxtp_kanpo');
                                        dialog.addText('已记录牌名:');
                                        dialog.addSmall([storage, 'vcard']);
                                    } else {
                                        return `${get.translation(player)}记录了一些牌名`;
                                    }
                                },
                            },
                            group: 'jxtp_kanpo_kanpo',
                            subSkill: {
                                kanpo: {
                                    audio: 'jxtp_kanpo',
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    filter(event, player) {
                                        return event.player != player && player.getStorage('jxtp_kanpo').includes(event.card.name);
                                    },
                                    prompt2(event, player) {
                                        return '移除' + get.translation(event.card.name) + '的记录,令' + get.translation(event.card) + '无效';
                                    },
                                    check(event, player) {
                                        let effect = 0;
                                        if (event.card.name == 'wuxie' || event.card.name == 'shan') {
                                            if (get.attitude(player, event.player) < -1) {
                                                effect = -1;
                                            }
                                        } else if (event.targets && event.targets.length) {
                                            for (let i = 0; i < event.targets.length; i++) {
                                                effect += get.effect(event.targets[i], event.card, event.player, player);
                                            }
                                        }
                                        if (effect < 0) {
                                            if (event.card.name == 'sha') {
                                                let target = event.targets[0];
                                                if (target == player) {
                                                    return !player.countCards('h', 'shan');
                                                } else {
                                                    return target.hp == 1 || (target.countCards('h') <= 2 && target.hp <= 2);
                                                }
                                            } else {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    logTarget: 'player',
                                    content() {
                                        player.unmarkAuto('jxtp_kanpo', [trigger.card.name]);
                                        trigger.targets.length = 0;
                                        trigger.all_excluded = true;
                                        player.draw();
                                    },
                                },
                            },
                        },
                        jxtp_kanpo_kanpo: {
                            audio: 'kanpo',
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                return event.player != player && player.getStorage('jxtp_kanpo').includes(event.card.name);
                            },
                            prompt2(event, player) {
                                return '移除' + get.translation(event.card.name) + '的记录,令' + get.translation(event.card) + '无效';
                            },
                            check(event, player) {
                                let effect = 0;
                                if (event.card.name == 'wuxie' || event.card.name == 'shan') {
                                    if (get.attitude(player, event.player) < -1) {
                                        effect = -1;
                                    }
                                } else if (event.targets && event.targets.length) {
                                    for (let i = 0; i < event.targets.length; i++) {
                                        effect += get.effect(event.targets[i], event.card, event.player, player);
                                    }
                                }
                                if (effect < 0) {
                                    if (event.card.name == 'sha') {
                                        let target = event.targets[0];
                                        if (target == player) {
                                            return !player.countCards('h', 'shan');
                                        } else {
                                            return target.hp == 1 || (target.countCards('h') <= 2 && target.hp <= 2);
                                        }
                                    } else {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            logTarget: 'player',
                            content() {
                                player.unmarkAuto('jxtp_kanpo', [trigger.card.name]);
                                trigger.targets.length = 0;
                                trigger.all_excluded = true;
                            },
                        },
                        jxtp_wusheng: {
                            audio: 'sbwusheng',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return !event.player.isMad();
                            },
                            content() {
                                player.addSkill('jxtp_wusheng_use');
                                player.addSkill('jxtp_wusheng_cancel');
                            },
                            group: 'jxtp_wusheng_wusheng',
                            subSkill: {
                                wusheng: {
                                    audio: 'sbwusheng',
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    hiddenCard(player, name) {
                                        return name == 'sha' && player.countCards('hs');
                                    },
                                    filter(event, player) {
                                        return event.filterCard({ name: 'sha' }, player, event) || lib.inpile_nature.some((nature) => event.filterCard({ name: 'sha', nature }, player, event));
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            let list = [];
                                            if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                                list.push(['基本', '', 'sha']);
                                            }
                                            for (let j of lib.inpile_nature) {
                                                if (event.filterCard && event.filterCard({ name: 'sha', nature: j }, player, event)) {
                                                    list.push(['基本', '', 'sha', j]);
                                                }
                                            }
                                            const dialog = ui.create.dialog('武圣', [list, 'vcard'], 'hidden');
                                            dialog.direct = true;
                                            return dialog;
                                        },
                                        check(button) {
                                            const player = _status.event.player;
                                            let card = { name: button.link[2], nature: button.link[3] };
                                            if (
                                                _status.event.parent.type == 'phase' &&
                                                game.hasPlayer(function (current) {
                                                    return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                                })
                                            ) {
                                                switch (button.link[2]) {
                                                    case 'sha':
                                                        if (button.link[3] == 'fire') {
                                                            return 2.95;
                                                        } else if (button.link[3] == 'thunder' || button.link[3] == 'ice') {
                                                            return 2.92;
                                                        } else {
                                                            return 2.9;
                                                        }
                                                }
                                            }
                                            return 1 + Math.random();
                                        },
                                        backup(links, player) {
                                            return {
                                                audio: 'sbwusheng',
                                                filterCard: true,
                                                check(card) {
                                                    return 6 - get.value(card);
                                                },
                                                viewAs: { name: links[0][2], nature: links[0][3] },
                                                position: 'hs',
                                                popname: true,
                                            };
                                        },
                                        prompt(links, player) {
                                            return '将一张手牌当作' + get.translation(links[0][3] || '') + '【' + get.translation(links[0][2]) + '】' + (_status.event.name == 'chooseToUse' ? '使用' : '打出');
                                        },
                                    },
                                    ai: {
                                        respondSha: true,
                                        fireAttack: true,
                                        skillTagFilter(player, tag) {
                                            if (!player.countCards('hs')) {
                                                return false;
                                            }
                                        },
                                        order(item, player) {
                                            if (player && _status.event.type == 'phase') {
                                                let max = 0;
                                                if (lib.inpile_nature.some((i) => player.getUseValue({ name: 'sha', nature: i }) > 0)) {
                                                    const temp = get.order({ name: 'sha' });
                                                    if (temp > max) {
                                                        max = temp;
                                                    }
                                                }
                                                if (max > 0) {
                                                    max += 0.3;
                                                }
                                                return max;
                                            }
                                            return 4;
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                use: {
                                    mod: {
                                        cardUsable(card) {
                                            if (get.info(card) && get.info(card).forceUsable) {
                                                return;
                                            }
                                            return Infinity;
                                        },
                                        targetInRange() {
                                            return true;
                                        },
                                        aiOrder(player, card, num) {
                                            let name = card.name;
                                            if (name == 'tao') {
                                                return num + 7 + Math.pow(player.getDamagedHp(), 2);
                                            }
                                            if (name == 'sha') {
                                                return num + 6;
                                            }
                                            if (get.subtype(card) == 'equip2') {
                                                return num + get.value(card) / 3;
                                            }
                                        },
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    popup: false,
                                    content() {
                                        player.draw();
                                        if (player.countMark('wusheng') >= 4) {
                                            player.removeMark('wusheng', 4);
                                            player.removeSkill('jxtp_wusheng_use');
                                            player.removeSkill('jxtp_wusheng_cancel');
                                        } else {
                                            game.broadcastAll(function (player) {
                                                player.addMark('wusheng');
                                            }, player);
                                        }
                                    },
                                    visible: true,
                                    marktext: '武圣',
                                    intro: {
                                        name2: '武圣',
                                        content: 'mark',
                                    },
                                    _priority: 1,
                                },
                                cancel: {
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    firstDo: true,
                                    silent: true,
                                    charlotte: true,
                                    content() {
                                        player.removeSkill('jxtp_wusheng_use');
                                        player.removeSkill('jxtp_wusheng_cancel');
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                            ai: {
                                threaten: 4.5,
                            },
                        },
                        jxtp_yijue: {
                            audio: 'yijue',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.maxHp > 0 && player.countCards('h') > 0;
                            },
                            position: 'h',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            selectTarget() {
                                return [1, game.countPlayer()];
                            },
                            check(card) {
                                return 2 * (game.countPlayer() + 2) - get.value(card);
                            },
                            content() {
                                'step 0';
                                if (!target.countCards('he')) {
                                    event._result = { bool: false };
                                } else {
                                    target.chooseCard(2, 'he', '交给' + get.translation(player) + '两张牌并令你与其各获得一点护甲,或非锁定技失效且不能响应其使用的牌直到回合结束').set('ai', function (card) {
                                        let player = _status.event.player,
                                            target = _status.event.parent.player,
                                            val = get.value(card);
                                        if (get.attitude(player, target) > 0) {
                                            if (card.name == 'sha' && target.hasValueTarget(card)) {
                                                return 30 - val;
                                            }
                                            return 20 - val;
                                        }
                                        return -val;
                                    });
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.removeMark('wusheng', 1);
                                    target.give(result.cards, player);
                                    target.changeHujia(1, null, true);
                                    player.changeHujia(1, null, true);
                                } else {
                                    target.addTempSkill('fengyin');
                                    target.addTempSkill('new_yijue_effect'); //QQQ
                                }
                            },
                            ai: {
                                threaten: 2.4,
                                order: 3.6,
                                result: {
                                    player(player, target) {
                                        if (get.attitude(target, player) > 0) {
                                            if (
                                                target.countCards('e', function (card) {
                                                    return get.value(card, target) < 0;
                                                })
                                            ) {
                                                return 3;
                                            }
                                            return Math.sqrt(target.countCards('he'));
                                        }
                                        if (
                                            target.mayHaveShan(
                                                player,
                                                'use',
                                                target.getCards('h', (i) => {
                                                    return i.hasGaintag('sha_notshan');
                                                })
                                            ) &&
                                            player.countCards('hs', function (card) {
                                                return !ui.selected.cards.includes(card) && card.name == 'sha' && player.canUse(card, target) && get.effect(target, card, player, player) != 0;
                                            })
                                        ) {
                                            return -Math.sqrt(Math.abs(get.attitude(player, target))) / 2;
                                        }
                                        return 0.1;
                                    },
                                },
                            },
                        },
                        jxtp_zhuanquan: {
                            audio: 'dcjianzhuan',
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                const evtx = event.getParent('phaseUse');
                                return (
                                    player.isPhaseUsing() &&
                                    player.getHistory('useSkill', (evt) => {
                                        return evt.skill == 'jxtp_zhuanquan' && evt.event.getParent('phaseUse') == evtx;
                                    }).length <
                                    4 - player.getStorage('jxtp_zhuanquan').length
                                );
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                const evtx = event.getParent('phaseUse'),
                                    num = player.getHistory('useSkill', (evt) => {
                                        return evt.skill == 'jxtp_zhuanquan' && evt.event.getParent('phaseUse') == evtx;
                                    }).length,
                                    info = get.info('jxtp_zhuanquan').choices;
                                const choices = [],
                                    choiceList = [],
                                    map = {};
                                for (const i in info) {
                                    map[info[i].intro] = i;
                                    if (player.getStorage('jxtp_zhuanquan').includes(i) || player.getStorage('jxtp_zhuanquan_used').includes(i)) {
                                        continue;
                                    }
                                    choices.push(info[i].intro);
                                    choiceList.push(info[i].introx(num));
                                }
                                const { control } = await player
                                    .chooseControl(choices)
                                    .set('choiceList', choiceList)
                                    .set('ai', () => {
                                        const player = get.event('player'),
                                            num = get.event('num'),
                                            info = get.info('jxtp_zhuanquan').choices;
                                        const choices = get.event('controls').slice(),
                                            map = get.event('map');
                                        return choices.sort((a, b) => info[map[b]].ai_effect(player, num) - info[map[a]].ai_effect(player, num))[0];
                                    })
                                    .set('num', num)
                                    .set('map', map)
                                    .set('prompt', '渐专:请选择一项执行')
                                    .forResult();
                                if (control) {
                                    if (!player.storage.jxtp_zhuanquan_used) {
                                        player.when('phaseUseAfter').then(() => delete player.storage.jxtp_zhuanquan_used);
                                    }
                                    player.markAuto('jxtp_zhuanquan_used', [map[control]]);
                                    await info[map[control]].content(player, num);
                                }
                            },
                            choices: {
                                discard_target: {
                                    intro: '拆牌',
                                    introx: (num) => '令一名角色弃置' + num + '张牌',
                                    ai_effect(player, num) {
                                        return game.hasPlayer((target) => {
                                            return get.effect(target, { name: 'guohe_copy2' }, player, player) > 0;
                                        })
                                            ? 2 + num
                                            : 0;
                                    },
                                    async content(player, num = 1) {
                                        const { bool, targets } = await player
                                            .chooseTarget('令一名角色弃置' + num + '张牌', true)
                                            .set('ai', (target) => {
                                                return get.effect(target, { name: 'guohe_copy2' }, get.event('player'), get.event('player')) * Math.sqrt(Math.min(get.event('num'), target.countDiscardableCards(target, 'he')));
                                            })
                                            .set('num', num)
                                            .forResult();
                                        if (bool) {
                                            const target = targets[0];
                                            player.line(target);
                                            await target.chooseToDiscard(num, 'he', true);
                                        }
                                    },
                                },
                                draw_self: {
                                    intro: '摸牌',
                                    introx: (num) => '摸' + num + '张牌',
                                    ai_effect(player, num) {
                                        return 3;
                                    },
                                    async content(player, num = 1) {
                                        await player.draw(num);
                                    },
                                },
                                recast_self: {
                                    intro: '重铸',
                                    introx: (num) => '重铸' + num + '张牌',
                                    ai_effect(player, num) {
                                        return 1;
                                    },
                                    async content(player, num = 1) {
                                        const { bool, cards } = await player
                                            .chooseCard('重铸' + num + '张牌', 'he', num, lib.filter.cardRecastable, true)
                                            .set('ai', lib.skill.zhiheng.check)
                                            .forResult();
                                        if (bool) {
                                            await player.recast(cards);
                                        }
                                    },
                                },
                                discard_self: {
                                    intro: '拆+摸',
                                    introx: (num) => '令一名角色弃置' + num + '张牌,你摸' + num + '张牌',
                                    ai_effect(player, num) {
                                        return game.hasPlayer((target) => {
                                            return get.effect(target, { name: 'guohe_copy2' }, player, player) > 0;
                                        })
                                            ? 2 + num
                                            : 0;
                                    },
                                    async content(player, num = 1) {
                                        const { bool, targets } = await player
                                            .chooseTarget('令一名角色弃置' + num + '张牌', true)
                                            .set('ai', (target) => {
                                                return get.effect(target, { name: 'guohe_copy2' }, get.event('player'), get.event('player')) * Math.sqrt(Math.min(get.event('num'), target.countDiscardableCards(target, 'he')));
                                            })
                                            .set('num', num)
                                            .forResult();
                                        if (bool) {
                                            const target = targets[0];
                                            player.line(target);
                                            await target.chooseToDiscard(num, 'he', true);
                                            await player.draw(num);
                                        }
                                    },
                                },
                            },
                            group: 'jxtp_zhuanquan_remove',
                            subSkill: {
                                remove: {
                                    audio: 'dcjianzhuan',
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    filter(event, player) {
                                        if (player.getStorage('jxtp_zhuanquan').length >= 4) {
                                            return false;
                                        }
                                        return player.getStorage('jxtp_zhuanquan_used').length >= 4 - player.getStorage('jxtp_zhuanquan').length;
                                    },
                                    forced: true,
                                    async content(event, trigger, player) {
                                        const info = get.info('jxtp_zhuanquan').choices;
                                        const choices = [],
                                            map = {};
                                        for (const i in info) {
                                            map[info[i].intro] = i;
                                            if (player.getStorage('jxtp_zhuanquan').includes(i)) {
                                                continue;
                                            }
                                            choices.push(info[i].intro);
                                        }
                                        const removeChoice = choices.randomGet();
                                        player.markAuto('jxtp_zhuanquan', [map[removeChoice]]);
                                        player.popup(removeChoice);
                                        player.gainMaxHp(1);
                                        player.recover(1);
                                        game.log(player, '移去了', '#g' + removeChoice, '项');
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                markcount(storage) {
                                    return 4 - (storage || []).length;
                                },
                                content(storage) {
                                    if (!(storage || []).length) {
                                        return '暂未移去任何项';
                                    }
                                    const info = get.info('jxtp_zhuanquan').choices;
                                    let str = '';
                                    for (const i of storage) {
                                        str += info[i].intro;
                                        str += '、';
                                    }
                                    str = str.slice(0, -1);
                                    return '已移去' + str + '项';
                                },
                            },
                        },
                        jxtp_zixiang: {
                            audio: 'dcfanshi',
                            forced: true,
                            juexingji: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return 4 - player.getStorage('jxtp_zhuanquan').length < 1;
                            },
                            content() {
                                player.awakenSkill('jxtp_zixiang');
                                player.removeSkill('jxtp_zhuanquan');
                                player.disableJudge();
                                player.recover(player.maxHp);
                                player.drawTo(player.maxHp);
                                player.addSkills('jxtp_zhuanquan2');
                                player.addSkills('twsaotao');
                            },
                        },
                        jxtp_zhuanquan2: {
                            trigger: {
                                source: 'damageSource',
                            },
                            audio: 'shanzhuan',
                            forced: true,
                            filter(event, player) {
                                return player != event.player && !event.player.isDisabledJudge() && event.player.countCards('he') && !event.player.countCards('j', (card) => get.type(card.viewAs || card.name) == 'delay');
                            },
                            content() {
                                'step 0';
                                player.choosePlayerCard(trigger.player, 'he', get.prompt('jxtp_zhuanquan2', trigger.player)).set('ai', function (b) {
                                    if (get.attitude(_status.event.player, _status.event.target) >= 0) {
                                        return 0;
                                    }
                                    return get.buttonValue(b);
                                });
                                ('step 1');
                                if (result.bool) {
                                    let card = result.cards[0];
                                    trigger.player.$throw(card);
                                    if (get.type(card, false) == 'delay') {
                                        trigger.player.addJudge(card);
                                    } else {
                                        trigger.player.addJudge({ name: get.color(card, false) == 'red' ? 'lebu' : 'bingliang' }, result.cards);
                                    }
                                }
                            },
                            group: 'jxtp_zhuanquan2_draw',
                            subfrequent: ['draw'],
                            subSkill: {
                                draw: {
                                    audio: 'retuogu',
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    prompt: '是否发动【专权】,失去一点体力将手牌摸至体力上限？',
                                    filter(event, player) {
                                        return !player.getHistory('sourceDamage').length;
                                    },
                                    content() {
                                        player.loseHp();
                                        player.drawTo(player.maxHp);
                                    },
                                },
                            },
                        },
                        jxtp_xingshang: {
                            audio: 'sbxingshang',
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                player.addMark('jxtp_xingshang', 1);
                            },
                            marktext: '殇',
                            intro: {
                                name: '殇',
                                content: 'mark',
                            },
                            ai: {
                                threaten: 2.5,
                            },
                            group: 'jxtp_xingshang_use',
                            subSkill: {
                                use: {
                                    audio: 'sbxingshang',
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        return game.hasPlayer((target) => {
                                            if (player.countMark('jxtp_xingshang') > 0) {
                                                return true;
                                            }
                                            return player.countMark('jxtp_xingshang') && (target.isLinked() || target.isTurnedOver());
                                        });
                                    },
                                    chooseButton: {
                                        dialog() {
                                            const dialog = ui.create.dialog(
                                                '行殇:请选择你要执行的一项',
                                                [
                                                    [
                                                        [1, '　　　⒈复原一名角色的武将牌　　　'],
                                                        [2, '　　　⒉令一名角色摸' + Math.max(2, game.dead.length) + '张牌　　　'],
                                                    ],

                                                    'tdnodes',
                                                ],

                                                [[[3, '　　　⒊令一名体力上限小于20的角色加1点体力上限并回复1点体力,然后随机回复一个被废除的装备栏　　　']], 'tdnodes'],
                                                [[[4, '　　　⒋获得一名已阵亡角色的所有技能,然后失去武将牌上的所有技能　　　']], 'tdnodes']
                                            );
                                            return dialog;
                                        },
                                        filter(button, player) {
                                            if (button.link > player.countMark('jxtp_xingshang')) {
                                                return false;
                                            }
                                            switch (button.link) {
                                                case 1:
                                                    return game.hasPlayer((target) => target.isLinked() || target.isTurnedOver());
                                                case 2:
                                                    return true;
                                                case 3:
                                                    return game.hasPlayer((target) => target.maxHp < 20);
                                                case 4:
                                                    return game.dead.length;
                                            }
                                        },
                                        check(button) {
                                            const player = _status.event.player;
                                            switch (button.link) {
                                                case 1:
                                                    return game
                                                        .filterPlayer((current) => get.attitude(player, current) > 0)
                                                        .reduce((list, target) => {
                                                            let num = 0;
                                                            if (target.isLinked()) {
                                                                num += 0.5;
                                                            }
                                                            if (target.isTurnedOver()) {
                                                                num += 10;
                                                            }
                                                            list.push(num);
                                                            return list;
                                                        }, [])
                                                        .sort((a, b) => b - a)[0];
                                                case 2:
                                                    return Math.max(2, game.dead.length);
                                                case 3:
                                                    return game
                                                        .filterPlayer()
                                                        .reduce((list, target) => {
                                                            list.push(get.recoverEffect(target, player, player));
                                                            return list;
                                                        }, [])
                                                        .sort((a, b) => b - a)[0];
                                                case 4:
                                                    return game.dead
                                                        .reduce((list, target) => {
                                                            let num = 0;
                                                            if (target.name && lib.character[target.name]) {
                                                                num += get.rank(target.name, true);
                                                            }
                                                            if (target.name2 && lib.character[target.name2]) {
                                                                num += get.rank(target.name2, true);
                                                            }
                                                            list.push(num);
                                                            return list;
                                                        }, [])
                                                        .sort((a, b) => b - a)[0];
                                            }
                                        },
                                        backup(links, player) {
                                            return {
                                                num: links[0],
                                                audio: 'jxtp_xingshang',
                                                filterTarget(card, player, target) {
                                                    switch (lib.skill.jxtp_xingshang_use_backup.num) {
                                                        case 1:
                                                            return (target) => target.isLinked() || target.isTurnedOver();
                                                        case 2:
                                                            return true;
                                                        case 3:
                                                            return target.maxHp < 20;
                                                        case 4:
                                                            return target == player;
                                                    }
                                                },
                                                selectTarget: () => (lib.skill.jxtp_xingshang_use_backup.num == 4 ? -1 : 1),
                                                async content(event, trigger, player) {
                                                    const target = event.targets[0];
                                                    const num = lib.skill.jxtp_xingshang_use_backup.num;
                                                    player.removeMark('jxtp_xingshang', num);
                                                    switch (num) {
                                                        case 1:
                                                            if (target.isLinked()) {
                                                                target.link(false);
                                                            }
                                                            if (target.isTurnedOver()) {
                                                                target.turnOver();
                                                            }
                                                            break;
                                                        case 2:
                                                            target.draw(Math.max(2, game.dead.length));
                                                            break;
                                                        case 3:
                                                            {
                                                                target.gainMaxHp();
                                                                target.recover();
                                                                let list = [];
                                                                for (let i = 1; i <= 5; i++) {
                                                                    if (target.hasDisabledSlot(i)) {
                                                                        list.push('equip' + i);
                                                                    }
                                                                }
                                                                if (list.length) {
                                                                    target.enableEquip(list.randomGet());
                                                                }
                                                            }
                                                            break;
                                                        case 4: {
                                                            const map = {};
                                                            game.dead.forEach((target) => (map[target.playerid] = get.translation(target)));
                                                            const { control } = await player
                                                                .chooseControl(Object.values(map))
                                                                .set('ai', () => {
                                                                    const getNum = (target) => {
                                                                        let num = 0;
                                                                        if (target.name && lib.character[target.name]) {
                                                                            num += get.rank(target.name, true);
                                                                        }
                                                                        if (target.name2 && lib.character[target.name2]) {
                                                                            num += get.rank(target.name2, true);
                                                                        }
                                                                        return num;
                                                                    };
                                                                    let controls = _status.event.controls.slice();
                                                                    controls = controls.map((name) => [name, game.dead.find((target) => _status.event.map[target.playerid] == name)]);
                                                                    controls.sort((a, b) => getNum(b[1]) - getNum(a[1]));
                                                                    return controls[0][0];
                                                                })
                                                                .set('prompt', '获得一名已阵亡角色的所有技能')
                                                                .set('map', map)
                                                                .forResult();
                                                            if (control) {
                                                                const target2 = game.dead.find((targetx) => map[targetx.playerid] == control);
                                                                player.line(target2);
                                                                game.log(player, '选择了', target2);
                                                                const skills = target2.getStockSkills(true, true);
                                                                const skills2 = player.getStockSkills(true, true);
                                                                player.changeSkills(skills, skills2);
                                                            }
                                                        }
                                                    }
                                                },
                                                ai: {
                                                    result: {
                                                        target(player, target) {
                                                            switch (lib.skill.jxtp_xingshang_use_backup.num) {
                                                                case 1: {
                                                                    let num = 0;
                                                                    if (target.isLinked()) {
                                                                        num += 0.5;
                                                                    }
                                                                    if (target.isTurnedOver()) {
                                                                        num += 10;
                                                                    }
                                                                    return num;
                                                                }
                                                                case 2:
                                                                    return 1;
                                                                case 3:
                                                                    return get.recoverEffect(target, player, player);
                                                                case 4:
                                                                    return 1;
                                                            }
                                                        },
                                                    },
                                                },
                                            };
                                        },
                                        prompt(links, player) {
                                            switch (links[0]) {
                                                case 1:
                                                    return '复原一名角色的武将牌';
                                                case 2:
                                                    return '令一名角色摸' + get.cnNumber(Math.min(5, Math.max(2, game.dead.length))) + '张牌';
                                                case 3:
                                                    return '令一名体力上限小于20的角色加1点体力上限并回复1点体力,然后随机回复一个被废除的装备栏';
                                                case 4:
                                                    return '获得一名已阵亡角色的所有技能,然后失去武将牌上的所有技能';
                                            }
                                        },
                                    },
                                    ai: {
                                        order: 9,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                use_backup: {},
                            },
                        },
                        jxtp_fangzhu: {
                            audio: 'sbfangzhu',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('jxtp_xingshang') > 1;
                            },
                            chooseButton: {
                                dialog() {
                                    const dialog = ui.create.dialog('放逐:请选择你要执行的一项', 'hidden');
                                    dialog.add([
                                        [
                                            [1, '移去2个<颂>标记,令一名其他角色的非Charlotte技能失效直到其回合结束'],
                                            [2, '移去2个<颂>标记,令一名其他角色不能响应除其外的角色使用的牌直到其回合结束'],
                                            [3, '移去3个<颂>标记,令一名其他角色将武将牌翻面'],
                                            [4, '移去3个<颂>标记,令一名其他角色只能使用你选择的一种类型的牌直到其回合结束'],
                                        ],

                                        'textbutton',
                                    ]);
                                    return dialog;
                                },
                                filter(button, player) {
                                    if (button.link > 2 && player.countMark('jxtp_xingshang') < 3) {
                                        return false;
                                    }
                                    if (button.link == 4) {
                                        return game.hasPlayer((target) => target != player && !target.hasSkill('jxtp_fangzhu_ban'));
                                    }
                                    return true;
                                },
                                check(button) {
                                    const player = _status.event.player;
                                    switch (button.link) {
                                        case 1:
                                            return game
                                                .filterPlayer((current) => get.attitude(player, current) < 0)
                                                .reduce((list, target) => {
                                                    let num = 0;
                                                    if (target.name && lib.character[target.name]) {
                                                        num += get.rank(target.name, true);
                                                    }
                                                    if (target.name2 && lib.character[target.name2]) {
                                                        num += get.rank(target.name2, true);
                                                    }
                                                    list.push(num);
                                                    return list;
                                                }, [])
                                                .sort((a, b) => b - a)[0];
                                        case 2:
                                            return 0;
                                        case 3:
                                            return game
                                                .filterPlayer((target) => target != player && !target.hasSkill('jxtp_fangzhu_ban'))
                                                .reduce((list, target) => {
                                                    if (get.attitude(player, target) > 0 && target.isTurnedOver()) {
                                                        list.push(10 * target.countCards('hs') + 1);
                                                    } else if (get.attitude(player, target) < 0 && !target.isTurnedOver()) {
                                                        list.push(5 * target.countCards('hs') + 1);
                                                    } else {
                                                        list.push(0);
                                                    }
                                                    return list;
                                                }, [])
                                                .sort((a, b) => b - a)[0];
                                        case 4:
                                            return 0;
                                    }
                                },
                                backup(links, player) {
                                    return {
                                        num: links[0],
                                        audio: 'sbfangzhu',
                                        filterTarget: lib.filter.notMe,
                                        async content(event, trigger, player) {
                                            const target = event.target;
                                            const num = lib.skill.jxtp_fangzhu_backup.num;
                                            player.removeMark('jxtp_xingshang', num > 2 ? 3 : 2);
                                            switch (num) {
                                                case 1:
                                                    target.removeSkill('baiban');
                                                    target.addTempSkill('baiban', { player: 'phaseEnd' });
                                                    break;
                                                case 2:
                                                    target.addTempSkill('jxtp_fangzhu_kill', { player: 'phaseEnd' });
                                                    break;
                                                case 3:
                                                    target.turnOver();
                                                    break;
                                                case 4: {
                                                    const { control } = await player
                                                        .chooseControl('basic', 'trick', 'equip')
                                                        .set('ai', () => 'equip')
                                                        .set('prompt', '放逐:请选择' + get.translation(target) + '仅能使用的类别的牌')
                                                        .forResult();
                                                    if (control) {
                                                        player.line(target);
                                                        player.popup(get.translation(control) + '牌');
                                                        target.addTempSkill('jxtp_fangzhu_ban', { player: 'phaseEnd' });
                                                        target.markAuto('jxtp_fangzhu_ban', [control]);
                                                    }
                                                }
                                            }
                                        },
                                        ai: {
                                            result: {
                                                target(player, target) {
                                                    switch (lib.skill.jxtp_fangzhu_backup.num) {
                                                        case 1: {
                                                            let num = 0;
                                                            if (target.name && lib.character[target.name]) {
                                                                num += get.rank(target.name, true);
                                                            }
                                                            if (target.name2 && lib.character[target.name2]) {
                                                                num += get.rank(target.name2, true);
                                                            }
                                                            return num;
                                                        }
                                                        case 2:
                                                            return 0;
                                                        case 3:
                                                            if (get.attitude(player, target) > 0 && target.isTurnedOver()) {
                                                                return 10 * target.countCards('hs') + 1;
                                                            }
                                                            if (get.attitude(player, target) < 0 && !target.isTurnedOver()) {
                                                                return -5 * target.countCards('hs') + 1;
                                                            }
                                                            return 0;
                                                        case 4:
                                                            return 0;
                                                    }
                                                },
                                            },
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    switch (links[0]) {
                                        case 1:
                                            return '移去2个<颂>标记,令一名其他角色的非Charlotte技能失效直到其回合结束';
                                        case 2:
                                            return '移去2个<颂>标记,令一名其他角色不能响应除其外的角色使用的牌直到其回合结束';
                                        case 3:
                                            return '移去3个<颂>标记,令一名其他角色将武将牌翻面';
                                        case 4:
                                            return '移去3个<颂>标记,令一名其他角色只能使用你选择的一种类型的牌直到其回合结束';
                                    }
                                },
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                backup: {},
                                kill: {
                                    charlotte: true,
                                    mark: true,
                                    marktext: '禁',
                                    intro: {
                                        content: '不能响应其他角色使用的牌',
                                    },
                                    trigger: {
                                        global: 'useCard1',
                                    },
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    forced: true,
                                    popup: false,
                                    async content(event, trigger, player) {
                                        trigger.directHit.add(player);
                                    },
                                },
                                ban: {
                                    charlotte: true,
                                    mark: true,
                                    marktext: '禁',
                                    intro: {
                                        markcount: () => 0,
                                        content: '只能使用$牌',
                                    },
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (!player.getStorage('jxtp_fangzhu_ban').includes(get.type2(card))) {
                                                return false;
                                            }
                                        },
                                        cardSavable(card, player) {
                                            if (!player.getStorage('jxtp_fangzhu_ban').includes(get.type2(card))) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        jxtp_songwei: {
                            audio: 'sbsongwei',
                            init(player) {
                                player.addSkill('jxtp_songwei_delete');
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return game.hasPlayer((target) => target.group == 'wei' && target != player);
                            },
                            zhuSkill: true,
                            forced: true,
                            async content(event, trigger, player) {
                                player.addMark('jxtp_xingshang', 1 + game.countPlayer((target) => target.group == 'wei' && target != player));
                            },
                            subSkill: {
                                delete: {
                                    audio: 'sbsongwei',
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        return game.hasPlayer((target) => lib.skill.jxtp_songwei.subSkill.delete.filterTarget(null, player, target));
                                    },
                                    filterTarget(card, player, target) {
                                        return target != player && target.getStockSkills(false, true).length;
                                    },
                                    async content(event, trigger, player) {
                                        player.awakenSkill('jxtp_songwei_delete');
                                        event.target.removeSkills(event.target.getStockSkills(false, true));
                                    },
                                    ai: {
                                        order: 13,
                                        result: {
                                            target(player, target) {
                                                return -target.getStockSkills(false, true).length;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        jxtp_fangzhu1: {
                            audio: 'refangzhu',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                'step 0';
                                const draw = player.getDamagedHp();
                                player
                                    .chooseTarget(get.prompt('jxtp_fangzhu1'), '移除两个<殇>标记令一名其他角色翻面' + (draw > 0 ? '并弃置' + get.cnNumber(1 + player.getDamagedHp()) + '张牌' : ''), function (card, player, target) {
                                        return player != target;
                                    })
                                    .setHiddenSkill('jxtp_fangzhu1')
                                    .set('ai', (target) => {
                                        if (target.hasSkillTag('noturn')) {
                                            return 0;
                                        }
                                        const player = _status.event.player;
                                        const current = _status.currentPhase;
                                        const dis = current ? get.distance(current, target, 'absolute') : 1;
                                        const draw = player.getDamagedHp();
                                        let att = get.attitude(player, target);
                                        if (att == 0) {
                                            return target.hasJudge('lebu') ? Math.random() / 3 : Math.sqrt(get.threaten(target)) / 5 + Math.random() / 2;
                                        }
                                        if (att > 0) {
                                            if (target.isTurnedOver()) {
                                                return att + draw;
                                            }
                                            if (draw < 4) {
                                                return -1;
                                            }
                                            if (current && target.seatNum > current.seatNum) {
                                                return att + draw / 3;
                                            }
                                            return (10 * Math.sqrt(Math.max(0.01, get.threaten(target)))) / (3.5 - draw) + dis / (2 * game.countPlayer());
                                        } else {
                                            if (target.isTurnedOver()) {
                                                return att - draw;
                                            }
                                            if (draw >= 5) {
                                                return -1;
                                            }
                                            if (current && target.seatNum <= current.seatNum) {
                                                return -att + draw / 3;
                                            }
                                            return (4.25 - draw) * 10 * Math.sqrt(Math.max(0.01, get.threaten(target))) + (2 * game.countPlayer()) / dis;
                                        }
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.removeMark('jxtp_xingshang', 2);
                                    result.targets[0].turnOver();
                                    result.targets[0].chooseToDiscard('he', true, 1 + player.getDamagedHp());
                                } //QQQ
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) {
                                                return [1, -2];
                                            }
                                            if (target.hp <= 1) {
                                                return;
                                            }
                                            if (!target.hasFriend()) {
                                                return;
                                            }
                                            let hastarget = false;
                                            let turnfriend = false;
                                            const players = game.filterPlayer();
                                            for (let i = 0; i < players.length; i++) {
                                                if (get.attitude(target, players[i]) < 0 && !players[i].isTurnedOver()) {
                                                    hastarget = true;
                                                }
                                                if (get.attitude(target, players[i]) > 0 && players[i].isTurnedOver()) {
                                                    hastarget = true;
                                                    turnfriend = true;
                                                }
                                            }
                                            if (get.attitude(player, target) > 0 && !hastarget) {
                                                return;
                                            }
                                            if (turnfriend || target.hp == target.maxHp) {
                                                return [0.5, 1];
                                            }
                                            if (target.hp > 1) {
                                                return [1, 0.5];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_fangzhu2: {
                            group: ['jxtp_fangzhu1', 'jxtp_fangzhu'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_xingshang1: {
                            audio: 'rexingshang',
                            trigger: {
                                global: 'die',
                            },
                            preHidden: true,
                            filter(event, player) {
                                return event.player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.recover();
                                player.addMark('jxtp_xingshang', 2);
                                ('step 1');
                                event.togain = trigger.player.getCards('he');
                                player.gain(event.togain, trigger.player, 'giveAuto', 'bySelf');
                            },
                        },
                        jxtp_fangquan: {
                            audio: 'olfangquan',
                            enable: 'phaseUse',
                            limited: true,
                            filterTarget: true,
                            content() {
                                'step 0';
                                player.removeSkill('jxtp_fangquan');
                                target.markSkillCharacter('jxtp_shuzheng', player, '蜀政', '执掌朝纲,兴复大汉');
                                target.phase('nodelay');
                                target.changeGroup('shu');
                                target.disableJudge();
                                target.addSkill('jxtp_shuzheng');
                                target.gainMaxHp();
                                target.recover();
                                ('step 1');
                                if (target != player) {
                                    player.gainMaxHp(2);
                                    player.recover(player.maxHp);
                                    player.markSkillCharacter('jxtp_xiangle', player, '享乐', '权柄已托,不掌国事');
                                    player.addSkill('refangquan');
                                    player.addSkill('jxtp_xiangle');
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: 1,
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                        jxtp_shuzheng1: {
                            audio: 'fangquan',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num += Math.min(game.countPlayer(), game.countPlayer((target) => target.group == 'shu') + 1);
                            },
                            mod: {
                                maxHandcard(player, current) {
                                    return current + Math.min(game.countPlayer(), game.countPlayer((target) => target.group == 'shu') + 1);
                                },
                            },
                        },
                        jxtp_shuzheng2: {
                            mod: {
                                selectTarget(card, player, range) {
                                    if (Array.isArray(range) && range[1] == -1) {
                                        return;
                                    }
                                    if (card.name == 'sha') {
                                        range[1] += 1;
                                    }
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') {
                                        return num + 1;
                                    }
                                },
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                        },
                        jxtp_shuzheng: {
                            group: ['jxtp_shuzheng1', 'jxtp_shuzheng2', 'jxtp_shuzheng3'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_shuzheng3: {
                            audio: 'ext:极限突破/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event) {
                                return (get.type(event.card) == 'equip') | (get.type(event.card) == 'trick');
                            },
                            async content(event, trigger, player) {
                                player.draw();
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                        },
                        jxtp_xiangle: {
                            group: ['jxtp_xiangle1', 'jxtp_xiangle2', 'jxtp_xiangle3'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_xiangle1: {
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        jxtp_xiangle2: {
                            trigger: {
                                global: ['phaseDrawSkipped', 'phaseDrawCancelled'],
                            },
                            audio: 'xiangle',
                            forced: true,
                            content() {
                                player.draw();
                                player.recover();
                            },
                        },
                        jxtp_xiangle3: {
                            audio: 'xiangle',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                if (player == _status.currentPhase) {
                                    return false;
                                }
                                return event.target == player && event.card.name != 'tao';
                            },
                            content() {
                                'step 0';
                                let eff = get.effect(player, trigger.card, trigger.player, trigger.player);
                                trigger.player
                                    .chooseToDiscard('享乐:弃置一张基本牌,否则此牌无效', function (card) {
                                        return get.type(card) == 'basic';
                                    })
                                    .set('ai', function (card) {
                                        if (eff > 0) {
                                            return 10 - get.value(card);
                                        }
                                        return 0;
                                    });
                                ('step 1');
                                let eff1 = get.effect(player, trigger.card, trigger.player, trigger.player);
                                trigger.player
                                    .chooseToDiscard('享乐:弃置一张锦囊牌,否则此牌无效', function (card) {
                                        return get.type(card) == 'trick';
                                    })
                                    .set('ai', function (card) {
                                        if (eff1 > 0) {
                                            return 10 - get.value(card);
                                        }
                                        return 0;
                                    });
                                ('step 2');
                                let eff2 = get.effect(player, trigger.card, trigger.player, trigger.player);
                                trigger.player
                                    .chooseToDiscard('享乐:弃置一张装备牌,否则此牌无效', function (card) {
                                        return get.type(card) == 'equip';
                                    })
                                    .set('ai', function (card) {
                                        if (eff2 > 0) {
                                            return 10 - get.value(card);
                                        }
                                        return 0;
                                    });
                                ('step 3');
                                if (result.bool == false) {
                                    trigger.parent.excluded.add(player);
                                }
                            },
                            ai: {
                                effect: {
                                    target_use(card, player, target, current) {
                                        if (card.name == 'sha' && get.attitude(player, target) < 0) {
                                            if (_status.event.name == 'xiangle') {
                                                return;
                                            }
                                            if (get.attitude(player, target) > 0 && current < 0) {
                                                return 'zerotarget';
                                            }
                                            let bs = player.getCards('h', { type: 'basic' });
                                            bs.remove(card);
                                            if (card.cards) {
                                                bs.removeArray(card.cards);
                                            } else {
                                                bs.removeArray(ui.selected.cards);
                                            }
                                            if (!bs.length) {
                                                return 'zerotarget';
                                            }
                                            if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) {
                                                return;
                                            }
                                            if (bs.length <= 2) {
                                                for (let i = 0; i < bs.length; i++) {
                                                    if (get.value(bs[i]) < 7) {
                                                        return [1, 0, 1, -0.5];
                                                    }
                                                }
                                                return [1, 0, 0.3, 0];
                                            }
                                            return [1, 0, 1, -0.5];
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_ruoyu: {
                            juexingji: true,
                            zhuSkill: true,
                            keepSkill: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isMaxHp();
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('jxtp_ruoyu');
                                player.gainMaxHp();
                                player.recover();
                                ('step 1');
                                player.addSkill('jxtp_jijiang');
                            },
                        },
                        jxtp_mbjuejin: {
                            audio: 'mbjuejin',
                            enable: 'phaseUse',
                            limited: true,
                            zhuSkill: true,
                            filterCard: () => false,
                            selectCard: [-1, -2],
                            filterTarget: true,
                            selectTarget: -1,
                            multiline: true,
                            async contentBefore(event, trigger, player) {
                                player.awakenSkill('jxtp_mbjuejin');
                                player.addMark('jxtp_qianlong', 20);
                                player.changeHujia(2, null, true);
                            },
                            async content(event, trigger, player) {
                                const target = event.target;
                                const delt = target.getHp(true) - 1,
                                    num = Math.abs(delt);
                                await target[delt > 0 ? 'loseHp' : 'recover'](num);
                                if (num > 0) {
                                    await target.changeHujia(num, null, true);
                                }
                            },
                            async contentAfter(event, trigger, player) {
                                game.addGlobalSkill('jxtp_mbjuejin_xiangsicunwei');
                                player.$fullscreenpop('向死存魏!', 'thunder');
                            },
                            ai: {
                                order: 0.1,
                                result: {
                                    player(player) {
                                        let eff = 1;
                                        game.countPlayer((current) => {
                                            const att = get.attitude(player, current),
                                                num = Math.abs(current.getHp(true) - 1);
                                            const delt = Math.max(0, num + current.hujia - 5);
                                            eff -= att * delt;
                                        });
                                        return eff > 0 ? 1 : 0;
                                    },
                                },
                            },
                            subSkill: {
                                xiangsicunwei: {
                                    trigger: {
                                        global: ['loseAfter', 'equipAfter', 'loseAsyncAfter', 'cardsDiscardAfter'],
                                    },
                                    forced: true,
                                    silent: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        const nameList = ['shan', 'tao', 'jiu'];
                                        return event.getd().some((card) => {
                                            return nameList.includes(card.name) && get.position(card, true) === 'd';
                                        });
                                    },
                                    async content(event, trigger, player) {
                                        const nameList = ['shan', 'tao', 'jiu'];
                                        const cards = trigger.getd().filter((card) => {
                                            return nameList.includes(card.name) && get.position(card, true) === 'd';
                                        });
                                        await game.cardsGotoSpecial(cards);
                                        game.log(cards, '被移出了游戏');
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                        jxtp_mbcmfangzhu: {
                            audio: 'sbfangzhu_mb_caomao',
                            inherit: 'jxtp_mbcmfangzhu',
                            filter(event, player) {
                                return game.hasPlayer((current) => current !== player);
                            },
                            usable: 1,
                            chooseButton: {
                                dialog() {
                                    const dialog = ui.create.dialog('放逐:令一名其他角色...', 'hidden');
                                    dialog.add([
                                        [
                                            [1, '不能使用手牌中的非锦囊牌直到其回合结束'],
                                            [2, '非Charlotte技能失效直到其回合结束'],
                                        ],

                                        'textbutton',
                                    ]);
                                    return dialog;
                                },
                                check(button) {
                                    const player = get.player();
                                    if (button.link === 2) {
                                        if (
                                            game.hasPlayer((target) => {
                                                if (target.hasSkill('jxtp_mbcmfangzhu_ban') || target.hasSkill('fengyin') || target.hasSkill('baiban')) {
                                                    return false;
                                                }
                                                return (
                                                    get.attitude(player, target) < 0 &&
                                                    ['name', 'name1', 'name2']
                                                        .map((sum, name) => {
                                                            if (target[name] && (name != 'name1' || target.name != target.name1)) {
                                                                if (get.character(target[name])) {
                                                                    return get.rank(target[name], true);
                                                                }
                                                            }
                                                            return 0;
                                                        })
                                                        .reduce((p, c) => {
                                                            return p + c;
                                                        }, 0) > 5
                                                );
                                            })
                                        ) {
                                            return 6;
                                        }
                                    }
                                    return button.link === 1 ? 1 : 0;
                                },
                                backup(links, player) {
                                    return {
                                        num: links[0],
                                        audio: 'fensi',
                                        filterCard: () => false,
                                        selectCard: -1,
                                        filterTarget(card, player, target) {
                                            if (target == player) {
                                                return false;
                                            }
                                            const num = lib.skill.jxtp_mbcmfangzhu_backup.num,
                                                storage = target.getStorage('jxtp_mbcmfangzhu_ban');
                                            return num != 1 || !storage.length;
                                        },
                                        async content(event, trigger, player) {
                                            const target = event.target;
                                            const num = lib.skill.jxtp_mbcmfangzhu_backup.num;
                                            switch (num) {
                                                case 1:
                                                    target.addTempSkill('jxtp_mbcmfangzhu_ban', { player: 'phaseEnd' });
                                                    target.markAuto('jxtp_mbcmfangzhu_ban', ['trick']);
                                                    break;
                                                case 2:
                                                    target.addTempSkill('jxtp_mbcmfangzhu_baiban', { player: 'phaseEnd' });
                                                    break;
                                            }
                                        },
                                        ai: {
                                            result: {
                                                target(player, target) {
                                                    switch (lib.skill.jxtp_mbcmfangzhu_backup.num) {
                                                        case 1:
                                                            return -target.countCards('h', (card) => get.type(card) != 'trick') - 1;
                                                        case 2:
                                                            return -target.getSkills(null, null, false).reduce((sum, skill) => {
                                                                return sum + Math.max(get.skillRank(skill, 'out'), get.skillRank(skill, 'in'));
                                                            }, 0);
                                                    }
                                                },
                                            },
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    const str = '###放逐###';
                                    switch (links[0]) {
                                        case 1:
                                            return str + '令一名其他角色不能使用手牌中的非锦囊牌直到其回合结束';
                                        case 2:
                                            return str + '令一名其他角色的非Charlotte技能失效直到其回合结束';
                                    }
                                },
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        return game.hasPlayer((current) => get.attitude(player, current) < 0) ? 1 : 0;
                                    },
                                },
                            },
                            subSkill: {
                                backup: {},
                                baiban: {
                                    inherit: 'baiban',
                                    marktext: '逐',
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    charlotte: true,
                                    skillBlocker(skill, player) {
                                        return !lib.skill[skill].charlotte;
                                    },
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            let list = player.getSkills(null, false, false).filter(function (i) {
                                                return lib.skill.baiban.skillBlocker(i, player);
                                            });
                                            if (list.length) {
                                                return '失效技能:' + get.translation(list);
                                            }
                                            return '无失效技能';
                                        },
                                    },
                                },
                                ban: {
                                    charlotte: true,
                                    mark: true,
                                    marktext: '禁',
                                    intro: {
                                        markcount: () => 0,
                                        content(storage) {
                                            if (storage.length > 1) {
                                                return '不能使用手牌';
                                            }
                                            return '不能使用手牌中的非' + get.translation(storage[0]) + '牌';
                                        },
                                    },
                                    mod: {
                                        cardEnabled(card, player) {
                                            const storage = player.getStorage('jxtp_mbcmfangzhu_ban');
                                            const hs = player.getCards('h'),
                                                cards = [card];
                                            if (Array.isArray(card.cards)) {
                                                cards.addArray(card.cards);
                                            }
                                            if (cards.containsSome(...hs) && !storage.includes(get.type2(card))) {
                                                return false;
                                            }
                                        },
                                        cardSavable(card, player) {
                                            const storage = player.getStorage('jxtp_mbcmfangzhu_ban');
                                            const hs = player.getCards('h'),
                                                cards = [card];
                                            if (Array.isArray(card.cards)) {
                                                cards.addArray(card.cards);
                                            }
                                            if (cards.containsSome(...hs) && !storage.includes(get.type2(card))) {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                            enable: 'phaseUse',
                        },
                        jxtp_mbcmjiushi: {
                            audio: 'mbcmjiushi',
                            group: ['jxtp_mbcmjiushi_jiu', 'jxtp_mbcmjiushi_check', 'jxtp_mbcmjiushi_turnback', 'jxtp_mbcmjiushi_gain'],
                            subSkill: {
                                jiu: {
                                    hiddenCard(player, name) {
                                        if (name == 'jiu') {
                                            return !player.isTurnedOver();
                                        }
                                        return false;
                                    },
                                    audio: 'mbcmjiushi',
                                    enable: 'chooseToUse',
                                    filter(event, player) {
                                        if (player.classList.contains('turnedover')) {
                                            return false;
                                        }
                                        return event.filterCard({ name: 'jiu' }, player, event);
                                    },
                                    content() {
                                        if (_status.event.getParent(2).type == 'dying') {
                                            event.dying = player;
                                            event.type = 'dying';
                                        }
                                        player.turnOver();
                                        player.useCard({ name: 'jiu' }, player);
                                    },
                                    ai: {
                                        order: 5,
                                        result: {
                                            player(player) {
                                                if (_status.event.parent.name == 'phaseUse') {
                                                    if (player.countCards('h', 'jiu') > 0) {
                                                        return 0;
                                                    }
                                                    if (player.getEquip('zhuge') && player.countCards('h', 'sha') > 1) {
                                                        return 0;
                                                    }
                                                    if (!player.countCards('h', 'sha')) {
                                                        return 0;
                                                    }
                                                    let targets = [];
                                                    let target;
                                                    const players = game.filterPlayer();
                                                    for (let i = 0; i < players.length; i++) {
                                                        if (get.attitude(player, players[i]) < 0) {
                                                            if (player.canUse('sha', players[i], true, true)) {
                                                                targets.push(players[i]);
                                                            }
                                                        }
                                                    }
                                                    if (targets.length) {
                                                        target = targets[0];
                                                    } else {
                                                        return 0;
                                                    }
                                                    let num = get.effect(target, { name: 'sha' }, player, player);
                                                    for (let i = 1; i < targets.length; i++) {
                                                        const num2 = get.effect(targets[i], { name: 'sha' }, player, player);
                                                        if (num2 > num) {
                                                            target = targets[i];
                                                            num = num2;
                                                        }
                                                    }
                                                    if (num <= 0) {
                                                        return 0;
                                                    }
                                                    const e2 = target.getEquip(2);
                                                    if (e2) {
                                                        if (e2.name == 'tengjia') {
                                                            if (!player.countCards('h', { name: 'sha', nature: 'fire' }) && !player.getEquip('zhuque')) {
                                                                return 0;
                                                            }
                                                        }
                                                        if (e2.name == 'renwang') {
                                                            if (!player.countCards('h', { name: 'sha', color: 'red' })) {
                                                                return 0;
                                                            }
                                                        }
                                                        if (e2.name == 'baiyin') {
                                                            return 0;
                                                        }
                                                    }
                                                    if (player.getEquip('guanshi') && player.countCards('he') > 2) {
                                                        return 1;
                                                    }
                                                    return target.countCards('h') > 3 ? 0 : 1;
                                                }
                                                if (player == _status.event.dying || player.isTurnedOver()) {
                                                    return 3;
                                                }
                                            },
                                        },
                                        effect: {
                                            target(card, player, target) {
                                                if (card.name == 'guiyoujie') {
                                                    return [0, 0.5];
                                                }
                                                if (target.isTurnedOver()) {
                                                    if (get.tag(card, 'damage')) {
                                                        if (player.hasSkillTag('jueqing', false, target)) {
                                                            return [1, -2];
                                                        }
                                                        if (target.hp == 1) {
                                                            return;
                                                        }
                                                        return [1, target.countCards('h') / 2];
                                                    }
                                                }
                                            },
                                        },
                                    },
                                },
                                check: {
                                    trigger: {
                                        player: 'damageBegin3',
                                    },
                                    silent: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        return player.isTurnedOver();
                                    },
                                    content() {
                                        trigger.jxtp_mbcmjiushi = true;
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                turnback: {
                                    audio: 'mbcmjiushi',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    check(event, player) {
                                        return player.isTurnedOver();
                                    },
                                    filter(event, player) {
                                        return event.jxtp_mbcmjiushi;
                                    },
                                    prompt(event, player) {
                                        return '是否发动【酒诗】将武将牌翻面';
                                    },
                                    content() {
                                        'step 0';
                                        delete trigger.jxtp_mbcmjiushi;
                                        player.turnOver();
                                        ('step 1');
                                        player
                                            .chooseToDiscard('he', get.prompt('jxtp_mbcmjiushi'), '重铸一张牌并移动场上的一张牌或选择取消增加一点护甲', lib.filter.cardDiscardable)
                                            .set('ai', function (card) {
                                                if (!_status.event.check) {
                                                    return 0;
                                                }
                                                return 7 - get.value(card);
                                            })
                                            .set('check', player.canMoveCard(true));
                                        ('step 2');
                                        if (result.bool) {
                                            player.draw();
                                            player.moveCard(true);
                                        } else {
                                            player.changeHujia(1, null, true);
                                        }
                                    },
                                },
                                gain: {
                                    audio: 'mbcmjiushi',
                                    trigger: {
                                        player: 'turnOverAfter',
                                    },
                                    forced: true,
                                    prompt: '是否发动【酒诗】,获得牌堆中的一张锦囊牌？',
                                    content() {
                                        let card = get.cardPile2(function (card) {
                                            return get.type2(card) == 'trick';
                                        });
                                        if (card) {
                                            player.gain(card, 'gain2');
                                        }
                                    },
                                },
                            },
                            subfrequent: ['gain'],
                        },
                        jxtp_sbqingzheng: {
                            audio: 'mbcmqingzheng',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                let num = [1, 4];
                                let prompt = '###' + get.prompt('jxtp_sbqingzheng') + '###弃置选择花色的所有牌';
                                let next = player.chooseButton([prompt, [lib.suit.map((i) => ['', '', 'lukai_' + i]), 'vcard']], num);
                                next.set('filterButton', (button) => {
                                    const player = _status.event.player;
                                    let cards = player.getCards('h', { suit: button.link[2].slice(6) });
                                    return cards.length && cards.filter((card) => lib.filter.cardDiscardable(card, player, 'jxtp_sbqingzheng')).length == cards.length;
                                });
                                next.set('ai', (button) => {
                                    const player = _status.event.player;
                                    return (
                                        15 -
                                        player
                                            .getCards('h', { suit: button.link[2].slice(6) })
                                            .map((i) => get.value(i))
                                            .reduce((p, c) => p + c, 0)
                                    );
                                });
                                next.set('custom', {
                                    replace: {
                                        button(button) {
                                            if (!_status.event.isMine()) {
                                                return;
                                            }
                                            if (button.classList.contains('selectable') == false) {
                                                return;
                                            }
                                            let cards = _status.event.player.getCards('h', {
                                                suit: button.link[2].slice(6),
                                            });
                                            if (cards.length) {
                                                const chosen = cards.filter((i) => ui.selected.cards.includes(i)).length == cards.length;
                                                if (chosen) {
                                                    ui.selected.cards.removeArray(cards);
                                                    cards.forEach((card) => {
                                                        card.classList.remove('selected');
                                                        card.updateTransform(false);
                                                    });
                                                } else {
                                                    ui.selected.cards.addArray(cards);
                                                    cards.forEach((card) => {
                                                        card.classList.add('selected');
                                                        card.updateTransform(true);
                                                    });
                                                }
                                            }
                                            if (button.classList.contains('selected')) {
                                                ui.selected.buttons.remove(button);
                                                button.classList.remove('selected');
                                                if (_status.multitarget || _status.event.complexSelect) {
                                                    game.uncheck();
                                                    game.check();
                                                }
                                            } else {
                                                button.classList.add('selected');
                                                ui.selected.buttons.add(button);
                                            }
                                            const custom = _status.event.custom;
                                            if (custom && custom.add && custom.add.button) {
                                                custom.add.button();
                                            }
                                            game.check();
                                        },
                                    },
                                    add: next.custom.add,
                                });
                                ('step 1');
                                if (result.bool) {
                                    let cards = result.cards;
                                    if (!cards.length) {
                                        const suits = result.links.map((i) => i[2].slice(6));
                                        cards = player.getCards('h', (card) => suits.includes(card.suit));
                                    }
                                    event.cards = cards;
                                    if (!cards.length) {
                                        event.finish();
                                    } else {
                                        player
                                            .chooseTarget('清正:观看一名其他角色的手牌并弃置其中一种花色的所有牌', (card, player, target) => {
                                                return target != player && target.countCards('h');
                                            })
                                            .set('ai', (target) => {
                                                let player = _status.event.player,
                                                    att = get.attitude(player, target);
                                                if (att >= 0) {
                                                    return 0;
                                                }
                                                return 1 - att / 2 + Math.sqrt(target.countCards('h'));
                                            });
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    event.target = target;
                                    player.discard(cards);
                                    let list = [];
                                    const dialog = ['清正:弃置其中一种花色的所有牌'];
                                    for (const suit of lib.suit.concat('none')) {
                                        if (target.countCards('h', { suit: suit })) {
                                            dialog.push('<div class="text center">' + get.translation(suit + '2') + '牌</div>');
                                            dialog.push(target.getCards('h', { suit: suit }));
                                            list.push(suit);
                                        }
                                    }
                                    if (list.length) {
                                        player
                                            .chooseControl(list)
                                            .set('dialog', dialog)
                                            .set('ai', () => {
                                                return _status.event.control;
                                            })
                                            .set(
                                                'control',
                                                (() => {
                                                    const getv = (cards) => cards.map((i) => get.value(i)).reduce((p, c) => p + c, 0);
                                                    return list.sort((a, b) => {
                                                        return getv(target.getCards('h', { suit: b })) - getv(target.getCards('h', { suit: a }));
                                                    })[0];
                                                })()
                                            );
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                const cards2 = target.getCards('h', { suit: result.control });
                                event.cards2 = cards2;
                                target.discard(cards2, 'notBySelf').set('discarder', player);
                                ('step 4');
                                if (event.cards2.length < cards.length) {
                                    target.damage(2);
                                } else {
                                    player.changeHujia(1, null, true);
                                }
                            },
                        },
                        jxtp_qianlong: {
                            audio: 'mbqianlong',
                            trigger: {
                                player: ['jxtp_qianlong_beginAfter', 'jxtp_qianlong_addAfter', 'jxtp_mbjuejinAfter'],
                            },
                            filter(event, player) {
                                const skills = [];
                                if (player.additionalSkills && player.additionalSkills.jxtp_qianlong) {
                                    skills.addArray(player.additionalSkills.jxtp_qianlong);
                                }
                                return player.countMark('jxtp_qianlong') >= 20 * skills.length;
                            },
                            forced: true,
                            beginMarkCount: 10,
                            maxMarkCount: 100,
                            derivation: ['jxtp_qianlong1', 'jxtp_mbcmjiushi', 'jxtp_sbqingzheng', 'jxtp_mbcmfangzhu', 'jxtp_juetao'],
                            addMark(player, num) {
                                num = Math.min(num, lib.skill.jxtp_qianlong.maxMarkCount - player.countMark('jxtp_qianlong'));
                                player.addMark('jxtp_qianlong', num);
                            },
                            group: ['jxtp_qianlong_begin', 'jxtp_qianlong_add'],
                            async content(event, trigger, player) {
                                player.addAdditionalSkill('jxtp_qianlong', lib.skill.jxtp_qianlong.derivation.slice(0, Math.floor(player.countMark('jxtp_qianlong') / 20)));
                            },
                            marktext: '忿',
                            intro: {
                                name: '忿肆',
                                name2: '忿肆',
                                content: '当前忿肆值为#',
                            },
                            subSkill: {
                                begin: {
                                    audio: 'jxtp_qianlong',
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    filter(event, player) {
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    forced: true,
                                    async content(event, trigger, player) {
                                        lib.skill.jxtp_qianlong.addMark(player, lib.skill.jxtp_qianlong.beginMarkCount);
                                    },
                                },
                                add: {
                                    audio: 'jxtp_qianlong',
                                    trigger: {
                                        player: 'damageEnd',
                                        source: 'damageSource',
                                        global: 'loseAsyncAfter',
                                    },
                                    filter(event, player) {
                                        if (player.countMark('jxtp_qianlong') >= lib.skill.jxtp_qianlong.maxMarkCount) {
                                            return false;
                                        }
                                        if (event.name === 'damage') {
                                            return event.num > 0;
                                        }
                                        return event.getg(player).length;
                                    },
                                    getIndex(event, player, triggername) {
                                        if (event.name === 'damage') {
                                            return event.num;
                                        }
                                        return 1;
                                    },
                                    forced: true,
                                    async content(event, trigger, player) {
                                        const toAdd = 5 * ((event.trigger.name === 'damageSource') + (trigger.name === 'damage'));
                                        lib.skill.jxtp_qianlong.addMark(player, toAdd);
                                    },
                                },
                            },
                        },
                        jxtp_juetao: {
                            audio: 'juetao',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            limited: true,
                            filter(event, player) {
                                return player.hp < player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('jxtp_juetao'), lib.filter.notMe).set('ai', function (target) {
                                    let att = -get.attitude(_status.event.player, target);
                                    if (att <= 0) {
                                        return att;
                                    }
                                    if (target.hasSkillTag('nodamage') || target.getEquip('qimenbagua')) {
                                        return 0.01 * att;
                                    }
                                    if (target.getEquip('tengjia') || target.getEquip('renwang')) {
                                        return 0.3 * att;
                                    }
                                    if (target.getEquip('rewrite_tengjia') || target.getEquip('rewrite_renwang')) {
                                        return 0.2 * att;
                                    }
                                    if (
                                        target.hasSkillTag(
                                            'freeShan',
                                            false,
                                            {
                                                player: _status.event.player,
                                            },
                                            true
                                        )
                                    ) {
                                        return 0.3 * att;
                                    }
                                    if (target.getEquip(2)) {
                                        return att / 2;
                                    }
                                    return 1.2 * att;
                                });
                                ('step 1');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    event.target = target;
                                    player.disableJudge();
                                    player.changeHujia(5, null, true);
                                    player.awakenSkill('jxtp_juetao');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                let card = get.bottomCards()[0];
                                game.cardsGotoOrdering(card);
                                player.showCards(card);
                                player
                                    .chooseUseTarget(card, true, false, 'nodistance')
                                    .set('filterTarget', function (card, player, target) {
                                        let evt = _status.event;
                                        if (_status.event.name == 'chooseTarget') {
                                            evt = evt.parent;
                                        }
                                        if (target != player && target != evt.jxtp_juetao_target) {
                                            return false;
                                        }
                                        return lib.filter.targetEnabledx(card, player, target);
                                    })
                                    .set('jxtp_juetao_target', target);
                                ('step 3');
                                if (result.bool && target.isIn()) {
                                    event.goto(2);
                                }
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                        jxtp_qianlong1: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.hujia;
                                },
                            },
                            audio: 'qianlong',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                let cards = get.cards(5);
                                event.cards = cards;
                                game.cardsGotoOrdering(cards);
                                //展示牌
                                game.log(player, '展示了', event.cards);
                                event.videoId = lib.status.videoId++;
                                game.broadcastAll(
                                    function (player, id, cards) {
                                        if (player == game.me || player.isUnderControl()) {
                                            return;
                                        }
                                        let str = get.translation(player) + '发动了【潜龙】';
                                        const dialog = ui.create.dialog(str, cards);
                                        dialog.videoId = id;
                                    },
                                    player,
                                    event.videoId,
                                    event.cards
                                );
                                game.addVideo('showCards', player, [get.translation(player) + '发动了【潜龙】', get.cardsInfo(event.cards)]);
                                //选牌
                                let next = player.chooseToMove('潜龙:获得至多' + get.cnNumber(Math.min(5, player.getDamagedHp() + 1)) + '张牌并将其余牌置于牌堆底');
                                next.set('list', [['置于牌堆底', cards], ['自己获得']]);
                                next.set('filterMove', function (from, to, moved) {
                                    if (moved[0].includes(from.link)) {
                                        if (typeof to == 'number') {
                                            if (to == 1) {
                                                if (moved[1].length >= _status.event.player.getDamagedHp() + 1) {
                                                    return false;
                                                }
                                            }
                                            return true;
                                        }
                                    }
                                    return true;
                                });
                                next.set('processAI', function (list) {
                                    let cards = list[0][1].slice(0),
                                        player = _status.event.player;
                                    cards.sort((a, b) => {
                                        return get.value(b, player) - get.value(a, player);
                                    });
                                    if (!player.storage.jxtp_juetao && player.hasSkill('jxtp_juetao') && player.hasSha()) {
                                        let gain,
                                            bottom,
                                            pai = cards.filter((card) => card.name !== 'sha');
                                        pai.sort((a, b) => {
                                            return get.value(b, player) - get.value(a, player);
                                        });
                                        gain = pai.splice(0, player.getDamagedHp() + 1);
                                        bottom = pai;
                                        return [bottom, gain];
                                    }
                                    return [cards, cards.splice(0, player.getDamagedHp() + 1)];
                                });
                                ('step 1');
                                game.broadcastAll('closeDialog', event.videoId);
                                game.addVideo('cardDialog', null, event.videoId);
                                const moved = result.moved;
                                if (moved[0].length) {
                                    for (let i of moved[0]) {
                                        i.fix();
                                        ui.cardPile.appendChild(i);
                                    }
                                }
                                if (moved[1].length) {
                                    player.gain(moved[1], 'gain2');
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) {
                                                return;
                                            }
                                            if (!target.hasFriend()) {
                                                return;
                                            }
                                            let num = 1;
                                            if (!player.needsToDiscard() && target.isDamaged()) {
                                                num = 0.7;
                                            } else {
                                                num = 0.5;
                                            }
                                            if (target.hp >= 4) {
                                                return [1, num * 2];
                                            }
                                            if (target.hp == 3) {
                                                return [1, num * 1.5];
                                            }
                                            if (target.hp == 2) {
                                                return [1, num * 0.5];
                                            }
                                        }
                                    },
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        jxtp_benxi: {
                            trigger: {
                                player: ['loseAfter'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            zhuanhuanji: true,
                            filter(event, player) {
                                const evt = event.getl(player);
                                return evt && evt.hs && evt.hs.length;
                            },
                            async content(event, trigger, player) {
                                player.changeZhuanhuanji('jxtp_benxi');
                                if (player.storage.jxtp_benxi) {
                                    const map = lib.skill.jxtp_benxi.getMap(),
                                        list = Object.keys(map);
                                    if (list.length) {
                                        const skill = list.randomGet(),
                                            voiceMap = game.parseSkillTextMap(skill, map[skill]);
                                        player.storage.jxtp_benxi_pending = skill;
                                        findaudio: for (const data of voiceMap) {
                                            if (!data.text) {
                                                continue;
                                            }
                                            const pinyins = get.pinyin(data.text, false);
                                            for (let i = 0; i < pinyins.length - 1; i++) {
                                                if (pinyins[i] === 'wu' && pinyins[i + 1] === 'yi') {
                                                    player.chat(data.text);
                                                    game.broadcastAll((file) => game.playAudio(file), data.file);
                                                    break findaudio;
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    const skill = player.storage.jxtp_benxi_pending;
                                    if (skill) {
                                        if (player.hasSkill(skill, null, false)) {
                                            const targets = game.filterPlayer((current) => current != player).sortBySeat();
                                            player.line(targets, 'fire');
                                            for (let target of targets) {
                                                if (target.isIn()) {
                                                    await target.damage();
                                                }
                                            }
                                        } else {
                                            await player.addTempSkills([skill], { player: 'phaseBegin' });
                                        }
                                        delete player.storage.jxtp_benxi_pending;
                                    }
                                }
                            },
                            onremove(player) {
                                delete player.storage.jxtp_benxi;
                                delete player.storage.jxtp_benxi_pending;
                            },
                            mark: true,
                            marktext: '☯',
                            intro: {
                                mark(dialog, storage, player) {
                                    if (storage) {
                                        const skill = player.storage.jxtp_benxi_pending;
                                        if (skill) {
                                            dialog.addText(`锁定技,当你下次失去手牌后,你获得技能〖${get.translation(skill)}〗直到你的下回合开始.若已获得该技能,则改为对所有其他角色各造成1点伤害.`, false);
                                            dialog.add('<div><div class="skill">【' + get.translation(lib.translate[skill + '_ab'] || get.translation(skill).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(skill, player) + '</div></div>');
                                        }
                                    } else {
                                        return '锁定技.当你下次失去手牌后,你随机念出一句拼音中含有<wu,yi>的台词';
                                    }
                                },
                            },
                            getMap() {
                                if (!_status.jxtp_benxi_map) {
                                    _status.jxtp_benxi_map = {};
                                    let list;
                                    if (_status.connectMode) {
                                        list = get.charactersOL();
                                    } else {
                                        list = get.gainableCharacters();
                                    }
                                    list.forEach((name) => {
                                        if (name !== 'jxtp_wuyi') {
                                            const skills = get.character(name, 3);
                                            skills.forEach((skill) => {
                                                const info = get.info(skill);
                                                if (!info || (info.ai && info.ai.combo)) {
                                                    return;
                                                }
                                                if (skill in _status.jxtp_benxi_map) {
                                                    return;
                                                }
                                                const voices = game.parseSkillText(skill, name);
                                                if (
                                                    voices.some((text) => {
                                                        const pinyins = get.pinyin(text, false);
                                                        for (let i = 0; i < pinyins.length - 1; i++) {
                                                            if (pinyins[i] === 'wu' && pinyins[i + 1] === 'yi') {
                                                                return true;
                                                            }
                                                        }
                                                        return false;
                                                    })
                                                ) {
                                                    _status.jxtp_benxi_map[skill] = name;
                                                }
                                            });
                                        }
                                    });
                                }
                                return _status.jxtp_benxi_map;
                            },
                        },
                        jxtp_chuanyang: {
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player != player;
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseBool('穿杨:是否对' + get.translation(player) + '使用一张杀？');
                                ('step 1');
                                if (result.bool) {
                                    if (player.canUse({ name: 'sha' }, trigger.player)) {
                                        event.related = player.useCard({ name: 'sha' }, trigger.player);
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        jxtp_jugu: {
                            audio: 'jugu',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw(player.maxHp);
                                ('step 1');
                                let cards = player.getCards('h');
                                player.addGaintag(cards, 'jxtp_jugu_tag');
                                player.markAuto('jxtp_jugu', cards);
                            },
                            group: 'jxtp_jugu_restore',
                            subSkill: {
                                tag: {},
                                restore: {
                                    audio: 'jugu',
                                    trigger: {
                                        player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                                    },
                                    filter(event, player) {
                                        const targets = game.players.slice().concat(game.dead);
                                        return targets.some((target) => target.getStorage('jxtp_jugu').filterInD('d').length);
                                    },
                                    forced: true,
                                    content() {
                                        const targets = game.players.slice().concat(game.dead);
                                        const cards = targets.reduce((list, target) => list.addArray(target.getStorage('jxtp_jugu').filterInD('d')), []);
                                        player.gain(cards, 'gain2').gaintag.add('jxtp_jugu_tag');
                                    },
                                },
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('jxtp_jugu_tag')) {
                                        return true;
                                    }
                                },
                                maxHandcard(player, num) {
                                    return num + player.maxHp;
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('jxtp_jugu_tag')) {
                                        return false;
                                    }
                                },
                            },
                        },
                        jxtp_jugu_tag: {},
                        jxtp_ziyuan: {
                            audio: 'ziyuan',
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    position: 'he',
                                    filterCard: true,
                                    selectCard: [1, Infinity],
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                });
                                ('step 1');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    let cards = result.cards;
                                    const type = [];
                                    for (let i = 0; i < cards.length; i++) {
                                        type.add(get.type2(cards[i]));
                                    }
                                    player.give(cards, target);
                                    const current = _status.currentPhase;
                                }
                                ('step 2');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    event.target = target;
                                    player.line(target, 'green');
                                    target.addTempSkill('jxtp_ziyuan_draw', { player: 'phaseAfter' });
                                    target.markSkill('jxtp_ziyuan_draw');
                                }
                            },
                            subSkill: {
                                draw: {
                                    audio: 'ziyuan',
                                    charlotte: true,
                                    intro: {
                                        content(storage) {
                                            return '收到了土豪的馈赠';
                                        },
                                    },
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.numFixed;
                                    },
                                    content() {
                                        trigger.num += 2;
                                        player.recover();
                                    },
                                    ai: {
                                        threaten: 1.3,
                                    },
                                },
                            },
                        },
                        jxtp_zhouzhuan: {
                            audio: 'jugu',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return (
                                    player.countCards(lib.skill.jxtp_zhouzhuan.position, (card) => {
                                        return lib.skill.jxtp_zhouzhuan.filterCard(card, player);
                                    }) &&
                                    game.hasPlayer((target) => {
                                        return lib.skill.jxtp_zhouzhuan.filterTarget(null, player, target);
                                    })
                                );
                            },
                            filterCard(card, player) {
                                return card.hasGaintag('jxtp_jugu_tag') && lib.filter.cardDiscardable(card, player);
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he');
                            },
                            position: 'h',
                            check(card) {
                                const player = _status.event.player;
                                const target = game.players.reduce(
                                    (result, current) => {
                                        if (current === player) {
                                            return result;
                                        }
                                        const effect = Math.abs(lib.skill.jxtp_zhouzhuan.ai.result.target(player, current));
                                        return effect > result[1] ? [current, effect] : result;
                                    },
                                    [null, 0]
                                )[0];
                                return target ? lib.skill.jxtp_zhouzhuan.getWeiWanEffect(player, card, target) : 0;
                            },
                            usable: 1,
                            content() {
                                let target = event.target;
                                const suit = event.cards[0].suit;
                                let cards = target.getCards('hej', (card) => card.suit != suit && lib.filter.canBeGained(card, player, target));
                                if (!cards.length) {
                                    player.chat('无牌可得!!');
                                    return;
                                }
                                const suits = lib.suit.slice();
                                suits.reverse();
                                suits.add('none');
                                suits.forEach((suit2) => {
                                    const cards2 = cards.filter((card) => card.suit == suit2);
                                    if (cards2.length) {
                                        cards2.randomRemove();
                                        cards.removeArray(cards2);
                                    }
                                });
                                if (!cards.length) {
                                    player.chat('无牌可得!!');
                                    return;
                                }
                                player.gain(cards, target, 'give');
                                switch (cards.length) {
                                    case 1:
                                        player.draw(3);
                                        break;
                                    case 2:
                                        player.gainMaxHp();
                                        player.recover();
                                        break;
                                    case 3:
                                        player.addTempSkill('tanbei_effect3');
                                        target.addTempSkill('tanbei_effect1');
                                        break;
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        const att = get.sgn(get.attitude(player, target)) - 1;
                                        const cards = player.getCards(lib.skill.jxtp_zhouzhuan.position, (card) => lib.skill.jxtp_zhouzhuan.filterCard(card, player));
                                        return (
                                            att *
                                            cards.reduce((result, card) => {
                                                const effect = lib.skill.jxtp_zhouzhuan.getWeiWanEffect(player, card, target);
                                                return effect > result ? effect : result;
                                            }, 0)
                                        );
                                    },
                                },
                            },
                            getWeiWanEffect(player, cardx, target) {
                                const suit = cardx.suit;
                                const cards = target.getCards('hej', (card) => card.suit !== suit && lib.filter.canBeGained(card, player, target));
                                const num = lib.suits.filter((suit) => cards.some((card) => card.suit === suit)).length;
                                switch (num) {
                                    case 1:
                                        return num + Math.max(0, get.sgn(get.effect(target, { name: 'losehp' }, player, player)));
                                    case 2:
                                        return num + player.countCards('he', (card) => player.canUse(card, target, false) && get.effect(target, card, player, player) > 0);
                                    case 3:
                                        return Math.ceil(num / 2);
                                    default:
                                        return num;
                                }
                            },
                        },
                        jxtp_ganglie1: {
                            audio: 'sbganglie',
                            enable: 'phaseUse',
                            usable: 1,
                            onChooseToUse(event) {
                                if (game.online || event.type !== 'phase') {
                                    return;
                                }
                                const player = event.player;
                                const chosen = player
                                    .getAllHistory('useSkill', (evt) => evt.skill === 'jxtp_ganglie1')
                                    .map((evt) => {
                                        return evt.targets;
                                    })
                                    .flat();
                                const targets = player
                                    .getAllHistory('damage', (evt) => evt.source && evt.source.isIn())
                                    .map((evt) => evt.source)
                                    .unique();
                                event.set('jxtp_ganglie1_enabledTargets', targets);
                            },
                            filterTarget(card, player, target) {
                                return get.event('jxtp_ganglie1_enabledTargets').includes(target);
                            },
                            async content(event, trigger, player) {
                                event.targets[0].damage(2);
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target: -2,
                                },
                            },
                        },
                        jxtp_ganglie2: {
                            audio: 'reganglie',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.source != undefined && event.num > 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            preHidden: true,
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                trigger.source.markSkillCharacter('jxtp_ganglie2', player, '裂', '敢打我惇哥,等着吧你!');
                                ('step 2');
                                trigger.source.addTempSkill('fengyin');
                                ('step 3');
                                if (trigger.source.isIn()) {
                                    trigger.source.damage(num);
                                }
                                ('step 4');
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') {
                                        return 1;
                                    }
                                    return 0;
                                });
                                ('step 5');
                                if (result.color == 'black') {
                                    if (trigger.source.countCards('he')) {
                                        player.discardPlayerCard(trigger.source, 'he', 2 * num, true);
                                    }
                                } else if (trigger.source.countCards('he')) {
                                    player.gainPlayerCard(trigger.source, 'he', 2 * num, true);
                                }
                                event.num--;
                                if (event.num > 0 && player.hasSkill('jxtp_ganglie2')) {
                                    player.chooseBool(get.prompt2('jxtp_ganglie2'));
                                } else {
                                    event.finish();
                                }
                                ('step 6');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                maixie_defend: true,
                                expose: 0.4,
                            },
                        },
                        jxtp_ganglie: {
                            group: ['jxtp_ganglie1', 'jxtp_ganglie2'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_qingjian: {
                            trigger: {
                                global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter', 'equipAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.getExpansions('jxtp_qingjian').length >= 1) {
                                    return false;
                                }
                                if (event.name !== 'cardsDiscard') {
                                    if (event.position !== ui.discardPile) {
                                        return false;
                                    }
                                    if (
                                        !game.hasPlayer((current) => {
                                            const evt = event.getl(current);
                                            return evt.cards && evt.cards.length;
                                        })
                                    ) {
                                        return false;
                                    }
                                } else {
                                    const evt = event.parent;
                                    if (evt.relatedEvent && evt.relatedEvent.name === 'useCard') {
                                        return false;
                                    }
                                }
                                return true;
                            },
                            group: 'jxtp_qingjian_give',
                            async content(event, trigger, player) {
                                let cards = trigger.cards.slice();
                                const maxNum = 1;
                                const myLen = player.getExpansions('jxtp_qingjian').length,
                                    cardsLen = trigger.cards.length;
                                const overflow = myLen + cardsLen - maxNum;
                                if (overflow > 0) {
                                    cards.randomRemove(overflow);
                                }
                                const next = player.addToExpansion(cards, 'gain2');
                                next.gaintag.add('jxtp_qingjian');
                                await next;
                            },
                            marktext: '俭',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            subSkill: {
                                give: {
                                    audio: 'sbqingjian',
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    filter(event, player) {
                                        return player.getExpansions('jxtp_qingjian').length;
                                    },
                                    forced: true,
                                    async content(event, trigger, player) {
                                        if (_status.connectMode) {
                                            game.broadcastAll(() => {
                                                _status.noclearcountdown = true;
                                            });
                                        }
                                        const given_map = {};
                                        event.given_map = given_map;
                                        const expansions = player.getExpansions('jxtp_qingjian');
                                        let result;
                                        while (true) {
                                            if (expansions.length > 1) {
                                                result = await player
                                                    .chooseCardButton('清俭:请选择要分配的牌', true, expansions, [1, expansions.length])
                                                    .set('ai', (button) => {
                                                        if (ui.selected.buttons.length) {
                                                            return 0;
                                                        }
                                                        return get.value(button.link, get.player());
                                                    })
                                                    .forResult();
                                            } else if (expansions.length === 1) {
                                                result = { bool: true, links: expansions.slice(0) };
                                            } else {
                                                return;
                                            }
                                            if (!result.bool) {
                                                return;
                                            }
                                            const toGive = result.links;
                                            result = await player
                                                .chooseTarget(`选择一名角色获得${get.translation(toGive)}`, expansions.length === 1)
                                                .set('ai', (target) => {
                                                    const att = get.attitude(get.player(), target);
                                                    if (get.event('toEnemy')) {
                                                        return Math.max(0.01, 100 - att);
                                                    } else if (att > 0) {
                                                        return Math.max(0.1, att / Math.sqrt(1 + target.countCards('h') + (get.event().parent.given_map[target.playerid] || 0)));
                                                    } else {
                                                        return Math.max(0.01, (100 + att) / 200);
                                                    }
                                                })
                                                .set('toEnemy', get.value(toGive[0], player, 'raw') < 0)
                                                .forResult();
                                            if (result.bool) {
                                                expansions.removeArray(toGive);
                                                if (result.targets.length) {
                                                    const id = result.targets[0].playerid;
                                                    if (!given_map[id]) {
                                                        given_map[id] = [];
                                                    }
                                                    given_map[id].addArray(toGive);
                                                }
                                                if (!expansions.length) {
                                                    break;
                                                }
                                            }
                                        }
                                        if (_status.connectMode) {
                                            game.broadcastAll(() => {
                                                delete _status.noclearcountdown;
                                                game.stopCountChoose();
                                            });
                                        }
                                        const gain_list = [];
                                        for (const i in given_map) {
                                            const source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                                            player.line(source, 'green');
                                            gain_list.push([source, given_map[i]]);
                                            game.log(source, '获得了', given_map[i]);
                                        }
                                        await game
                                            .loseAsync({
                                                gain_list,
                                                giver: player,
                                                animate: 'gain2',
                                            })
                                            .setContent('gaincardMultiple');
                                    },
                                },
                            },
                        },
                        jxtp_danggu2: {
                            group: ['jxtp_zimou', 'jxtp_chiyan', 'jxtp_chihe', 'jxtp_pichai', 'jxtp_taoluan2', 'jxtp_niqu', 'jxtp_xiaolu', 'jxtp_yaozhuo', 'jxtp_kuiji', 'jxtp_anruo'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_danggu: {
                            audio: 'mbdanggu',
                            trigger: {
                                player: 'enterGame',
                                global: 'phaseBefore',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            derivation: ['mbdanggu_faq', 'mbdanggu_faq2'],
                            forced: true,
                            onremove(player) {
                                delete player.storage.jxtp_danggu;
                                delete player.storage.jxtp_danggu_current;
                                if (lib.skill.jxtp_danggu.isSingleShichangshi(player)) {
                                    game.broadcastAll(function (player) {
                                        player.name1 = player.name;
                                        player.smoothAvatar(false);
                                        player.node.avatar.setBackground(player.name, 'character');
                                        player.node.name.innerHTML = get.slimName(player.name);
                                        delete player.name2;
                                        player.classList.remove('fullskin2');
                                        player.node.avatar2.classList.add('hidden');
                                        player.node.name2.innerHTML = '';
                                        if (player == game.me && ui.fakeme) {
                                            ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
                                        }
                                    }, player);
                                }
                            },
                            changshi: [
                                ['jx_zhangrang', 'jxtp_taoluan4'],
                                ['jx_zhaozhong', 'jxtp_chiyan1'],
                                ['jx_sunzhang', 'jxtp_zimou1'],
                                ['jx_bilan', 'jxtp_pichai1'],
                                ['jx_xiayun', 'jxtp_yaozhuo1'],
                                ['jx_hankui', 'jxtp_xiaolu1'],
                                ['jx_lisong', 'jxtp_kuiji0'],
                                ['jx_duangui', 'jxtp_chihe1'],
                                ['jx_guosheng', 'jxtp_niqu1'],
                                ['jx_gaowang', 'jxtp_miaoyu1'],
                            ],

                            conflictMap(player) {
                                if (!_status.changshiMap) {
                                    _status.changshiMap = {
                                        jx_zhangrang: ['lisong'],
                                        jx_zhaozhong: [],
                                        jx_sunzhang: [],
                                        jx_bilan: [],
                                        jx_xiayun: [],
                                        jx_hankui: [],
                                        jx_lisong: ['zhangrang'],
                                        jx_duangui: [],
                                        jx_guosheng: [],
                                        jx_gaowang: [],
                                    };
                                    if (!get.isLuckyStar(player)) {
                                        let list = lib.skill.jxtp_danggu.changshi.map((i) => i[0]);
                                        for (let i of list) {
                                            const select = list.filter((scs) => scs != i && !_status.changshiMap[i].includes(i));
                                            _status.changshiMap[i].addArray(select.randomGets(get.rand(0, select.length)));
                                        }
                                    }
                                }
                                return _status.changshiMap;
                            },
                            group: 'jxtp_danggu_back',
                            content() {
                                'step 0';
                                let list = lib.skill.jxtp_danggu.changshi.map((i) => i[0]);
                                player.markAuto('jxtp_danggu', list);
                                game.broadcastAll(
                                    function (player, list) {
                                        let cards = [];
                                        for (let i = 0; i < list.length; i++) {
                                            const cardname = 'huashen_card_' + list[i];
                                            lib.card[cardname] = {
                                                fullimage: true,
                                                image: 'character/' + list[i],
                                            };
                                            lib.translate[cardname] = get.rawName2(list[i]);
                                            cards.push(game.createCard(cardname, '', ''));
                                        }
                                        player.$draw(cards, 'nobroadcast');
                                    },
                                    player,
                                    list
                                );
                                ('step 1');
                                let next = game.createEvent('jxtp_danggu_clique');
                                next.player = player;
                                next.setContent(lib.skill.jxtp_danggu.contentx);
                            },
                            contentx() {
                                'step 0';
                                let list = player.getStorage('jxtp_danggu').slice();
                                const first = list.randomRemove();
                                event.first = first;
                                const others = list.randomGets(9);
                                if (others.length == 1) {
                                    event._result = { bool: true, links: others };
                                } else {
                                    const map = {
                                        jx_zhangrang: 'jx_lisong',
                                        jx_lisong: 'jx_zhangrang',
                                    },
                                        map2 = lib.skill.jxtp_danggu.conflictMap(player);
                                    let conflictList = others.filter((changshi) => {
                                        if (map[first] && others.some((changshi2) => map[first] == changshi2)) {
                                            return map[first] == changshi;
                                        } else {
                                            return map2[first].includes(changshi);
                                        }
                                    }),
                                        list = others.slice();
                                    if (conflictList.length) {
                                        const conflict = conflictList.randomGet();
                                        list.remove(conflict);
                                        game.broadcastAll(
                                            function (changshi, player) {
                                                if (lib.config.background_speak) {
                                                    if (player.isUnderControl(true)) {
                                                        game.playAudio('skill', changshi + '_enter');
                                                    }
                                                }
                                            },
                                            conflict,
                                            player
                                        );
                                    }
                                    player
                                        .chooseButton(['党锢:请选择结党对象', [[first], 'character'], '<div class="text center">可选常侍</div>', [others, 'character']], true)
                                        .set('filterButton', (button) => {
                                            return _status.event.canChoose.includes(button.link);
                                        })
                                        .set('canChoose', list)
                                        .set('ai', (button) => Math.random() * 10);
                                }
                                ('step 1');
                                if (result.bool) {
                                    const first = event.first;
                                    const chosen = result.links[0];
                                    const skills = [];
                                    let list = lib.skill.jxtp_danggu.changshi;
                                    const changshis = [first, chosen];
                                    player.unmarkAuto('jxtp_danggu', changshis);
                                    player.storage.jxtp_danggu_current = changshis;
                                    for (const changshi of changshis) {
                                        for (const cs of list) {
                                            if (changshi == cs[0]) {
                                                skills.push(cs[1]);
                                            }
                                        }
                                    }
                                    if (lib.skill.jxtp_danggu.isSingleShichangshi(player)) {
                                        game.broadcastAll(
                                            function (player, first, chosen) {
                                                player.name1 = first;
                                                player.node.avatar.setBackground(first, 'character');
                                                player.node.name.innerHTML = get.slimName(first);
                                                player.name2 = chosen;
                                                player.classList.add('fullskin2');
                                                player.node.avatar2.classList.remove('hidden');
                                                player.node.avatar2.setBackground(chosen, 'character');
                                                player.node.name2.innerHTML = get.slimName(chosen);
                                                if (player == game.me && ui.fakeme) {
                                                    ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
                                                }
                                            },
                                            player,
                                            first,
                                            chosen
                                        );
                                    }
                                    game.log(player, '选择了常侍', '#y' + get.translation(changshis));
                                    if (skills.length) {
                                        player.addAdditionalSkill('jxtp_danggu', skills);
                                        let str = '';
                                        for (let i of skills) {
                                            str += '【' + get.translation(i) + '】、';
                                            player.popup(i);
                                        }
                                        str = str.slice(0, -1);
                                        game.log(player, '获得了技能', '#g' + str);
                                    }
                                }
                            },
                            isSingleShichangshi(player) {
                                const map = lib.skill.jxtp_danggu.conflictMap(player);
                                return player.name == 'shichangshi' && ((map[player.name1] && map[player.name2]) || (map[player.name1] && !player.name2) || (!player.name1 && !player.name2) || (player.name == player.name1 && !player.name2));
                            },
                            mod: {
                                aiValue(player, card, num) {
                                    if (['shan', 'tao', 'wuxie', 'caochuan'].includes(card.name)) {
                                        return num / 10;
                                    }
                                },
                                aiUseful() {
                                    return lib.skill.jxtp_danggu.mod.aiValue.apply(this, arguments);
                                },
                            },
                            ai: {
                                combo: 'jxtp_mowang',
                                nokeep: true,
                            },
                            intro: {
                                mark(dialog, storage, player) {
                                    dialog.addText('剩余常侍');
                                    dialog.addSmall([storage, 'character']);
                                    if (player.storage.jxtp_danggu_current && player.isIn()) {
                                        dialog.addText('当前常侍');
                                        dialog.addSmall([player.storage.jxtp_danggu_current, 'character']);
                                    }
                                },
                            },
                            subSkill: {
                                back: {
                                    audio: 'jxtp_danggu',
                                    trigger: {
                                        global: 'restEnd',
                                    },
                                    filter(event, player) {
                                        return event.getTrigger().player == player;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        delete player.storage.jxtp_danggu_current;
                                        if (lib.skill.jxtp_danggu.isSingleShichangshi(player)) {
                                            game.broadcastAll(function (player) {
                                                player.name1 = player.name;
                                                player.smoothAvatar(false);
                                                player.node.avatar.setBackground(player.name, 'character');
                                                player.node.name.innerHTML = get.slimName(player.name);
                                                delete player.name2;
                                                player.classList.remove('fullskin2');
                                                player.node.avatar2.classList.add('hidden');
                                                player.node.name2.innerHTML = '';
                                                if (player == game.me && ui.fakeme) {
                                                    ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
                                                }
                                            }, player);
                                        }
                                        ('step 1');
                                        let next = game.createEvent('jxtp_danggu_clique');
                                        next.player = player;
                                        next.setContent(lib.skill.jxtp_danggu.contentx);
                                        player.draw(2);
                                        ('step 2');
                                        if (player.maxHp > 3) {
                                            event.num = player.maxHp - 3;
                                            player.loseMaxHp(event.num, true);
                                        } else {
                                            event.num = 3 - player.maxHp;
                                            player.gainMaxHp(event.num, true);
                                            player.recover(event.num, true);
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_mowang3: {
                            audio: 'mbmowang',
                            trigger: {
                                player: 'dieBefore',
                            },
                            filter(event, player) {
                                return player.getStorage('jxtp_danggu').length && event.parent.name != 'giveup' && player.maxHp > 0;
                            },
                            derivation: 'mbmowang_faq',
                            forced: true,
                            _priority: 15,
                            group: ['jxtp_mowang3_die', 'jxtp_mowang3_return'],
                            content() {
                                if (_status.jxtp_mowang3_return && _status.jxtp_mowang3_return[player.playerid]) {
                                    trigger.cancel();
                                } else {
                                    game.broadcastAll(function () {
                                        if (lib.config.background_speak) {
                                            game.playAudio('die', 'shichangshiRest');
                                        }
                                    });
                                    trigger.setContent(lib.skill.jxtp_mowang3.dieContent);
                                    trigger.includeOut = true;
                                }
                            },
                            ai: {
                                combo: 'jxtp_danggu',
                                neg: true,
                            },
                            dieContent() {
                                'step 0';
                                event.forceDie = true;
                                if (source) {
                                    game.log(player, '被', source, '杀害');
                                    if (source.stat[source.stat.length - 1].kill == undefined) {
                                        source.stat[source.stat.length - 1].kill = 1;
                                    } else {
                                        source.stat[source.stat.length - 1].kill++;
                                    }
                                } else {
                                    game.log(player, '阵亡');
                                }
                                if (player.isIn() && (!_status.jxtp_mowang3_return || !_status.jxtp_mowang3_return[player.playerid])) {
                                    event.reserveOut = true;
                                    game.log(player, '进入了修整状态');
                                    game.log(player, '移出了游戏');
                                    if (!_status.jxtp_mowang3_return) {
                                        _status.jxtp_mowang3_return = {};
                                    }
                                    _status.jxtp_mowang3_return[player.playerid] = 1;
                                } else {
                                    event.finish();
                                }
                                if (!game.countPlayer()) {
                                    game.over();
                                } else if (player.hp != 0) {
                                    player.changeHp(0 - player.hp, false).forceDie = true;
                                }
                                game.broadcastAll(function (player) {
                                    if (player.isLinked()) {
                                        if (get.is.linked2(player)) {
                                            player.classList.toggle('linked2');
                                        } else {
                                            player.classList.toggle('linked');
                                        }
                                    }
                                    if (player.isTurnedOver()) {
                                        player.classList.toggle('turnedover');
                                    }
                                }, player);
                                game.addVideo('link', player, player.isLinked());
                                game.addVideo('turnOver', player, player.classList.contains('turnedover'));
                                ('step 1');
                                event.trigger('die');
                                ('step 2');
                                if (event.reserveOut) {
                                    if (!game.reserveDead) {
                                        for (const mark in player.marks) {
                                            if (mark == 'jxtp_danggu') {
                                                continue;
                                            }
                                            player.unmarkSkill(mark);
                                        }
                                        let count = 1;
                                        let list = Array.from(player.node.marks.childNodes);
                                        if (list.some((i) => i.name == 'jxtp_danggu')) {
                                            count++;
                                        }
                                        while (player.node.marks.childNodes.length > count) {
                                            let node = player.node.marks.lastChild;
                                            if (node.name == 'jxtp_danggu') {
                                                node = node.previousSibling;
                                            }
                                            node.remove();
                                        }
                                        game.broadcast(
                                            function (player, count) {
                                                while (player.node.marks.childNodes.length > count) {
                                                    let node = player.node.marks.lastChild;
                                                    if (node.name == 'jxtp_danggu') {
                                                        node = node.previousSibling;
                                                    }
                                                    node.remove();
                                                }
                                            },
                                            player,
                                            count
                                        );
                                    }
                                    for (let i in player.tempSkills) {
                                        player.removeSkill(i);
                                    }
                                    const skills = player.getSkills();
                                    for (let i = 0; i < skills.length; i++) {
                                        if (lib.skill[skills[i]].temp) {
                                            player.removeSkill(skills[i]);
                                        }
                                    }
                                    event.cards = player.getCards('hejsx');
                                    if (event.cards.length) {
                                        player.discard(event.cards).forceDie = true;
                                    }
                                }
                                ('step 3');
                                if (event.reserveOut) {
                                    game.broadcastAll(
                                        function (player, list) {
                                            player.classList.add('out');
                                            if (list.includes(player.name1) || player.name1 == 'shichangshi') {
                                                player.smoothAvatar(false);
                                                player.node.avatar.setBackground(player.name1 + '_dead', 'character');
                                            }
                                            if (list.includes(player.name2) || player.name2 == 'shichangshi') {
                                                player.smoothAvatar(true);
                                                player.node.avatar2.setBackground(player.name2 + '_dead', 'character');
                                            }
                                        },
                                        player,
                                        lib.skill.jxtp_danggu.changshi.map((i) => i[0])
                                    );
                                }
                                if (source && lib.config.border_style == 'auto' && (lib.config.autoborder_count == 'kill' || lib.config.autoborder_count == 'mix')) {
                                    switch (source.node.framebg.dataset.auto) {
                                        case 'gold':
                                        case 'silver':
                                            source.node.framebg.dataset.auto = 'gold';
                                            break;
                                        case 'bronze':
                                            source.node.framebg.dataset.auto = 'silver';
                                            break;
                                        default:
                                            source.node.framebg.dataset.auto = lib.config.autoborder_start || 'bronze';
                                    }
                                    if (lib.config.autoborder_count == 'kill') {
                                        source.node.framebg.dataset.decoration = source.node.framebg.dataset.auto;
                                    } else {
                                        let dnum = 0;
                                        for (let j = 0; j < source.stat.length; j++) {
                                            if (source.stat[j].damage != undefined) {
                                                dnum += source.stat[j].damage;
                                            }
                                        }
                                        source.node.framebg.dataset.decoration = '';
                                        switch (source.node.framebg.dataset.auto) {
                                            case 'bronze':
                                                if (dnum >= 4) {
                                                    source.node.framebg.dataset.decoration = 'bronze';
                                                }
                                                break;
                                            case 'silver':
                                                if (dnum >= 8) {
                                                    source.node.framebg.dataset.decoration = 'silver';
                                                }
                                                break;
                                            case 'gold':
                                                if (dnum >= 12) {
                                                    source.node.framebg.dataset.decoration = 'gold';
                                                }
                                                break;
                                        }
                                    }
                                    source.classList.add('topcount');
                                }
                            },
                            subSkill: {
                                die: {
                                    audio: 'mbmowang',
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    forceDie: true,
                                    content() {
                                        if (!player.getStorage('jxtp_danggu').length) {
                                            game.broadcastAll(function (player) {
                                                player.name1 = player.name;
                                                player.smoothAvatar(false);
                                                player.node.avatar.setBackground(player.name + '_dead', 'character');
                                                player.node.name.innerHTML = get.slimName(player.name);
                                                delete player.name2;
                                                player.classList.remove('fullskin2');
                                                player.node.avatar2.classList.add('hidden');
                                                player.node.name2.innerHTML = '';
                                                if (player == game.me && ui.fakeme) {
                                                    ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
                                                }
                                            }, player);
                                        }
                                    },
                                },
                                return: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    forceDie: true,
                                    forceOut: true,
                                    filter(event, player) {
                                        return !event._jxtp_mowang3_return && event.player.isOut() && _status.jxtp_mowang3_return[event.player.playerid];
                                    },
                                    content() {
                                        'step 0';
                                        trigger._jxtp_mowang3_return = true;
                                        game.broadcastAll(function (player) {
                                            player.classList.remove('out');
                                        }, trigger.player);
                                        game.log(trigger.player, '移回了游戏');
                                        delete _status.jxtp_mowang3_return[trigger.player.playerid];
                                        trigger.player.recover(trigger.player.maxHp - trigger.player.hp);
                                        game.broadcastAll(function (player) {
                                            if (player.name1 == 'gdshichangshi') {
                                                player.smoothAvatar(false);
                                                player.node.avatar.setBackground(player.name1, 'character');
                                            }
                                            if (player.name2 == 'gdshichangshi') {
                                                player.smoothAvatar(true);
                                                player.node.avatar2.setBackground(player.name2, 'character');
                                            }
                                        }, trigger.player);
                                        ('step 1');
                                        event.trigger('restEnd');
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        jxtp_mowang4: {
                            trigger: {
                                player: 'phaseDiscard',
                            },
                            forced: true,
                            content() {
                                player.chooseToDiscard(true, 'h', player.countCards('h'));
                            },
                        },
                        jxtp_mowang5: {
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num += Math.max(0, 5 - player.maxHp);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        jxtp_mowang6: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                player.draw(player.maxHp + 2);
                            },
                        },
                        jxtp_mowang7: {
                            group: ['jxtp_mowang4', 'jxtp_mowang5', 'jxtp_mowang6', 'jxtp_mowang8'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_kuiji1: {
                            audio: 'scskuiji',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (target == player) {
                                    return false;
                                }
                                return target.countDiscardableCards(player, 'he') + player.countDiscardableCards(player, 'he') >= 4;
                            },
                            content() {
                                'step 0';
                                const dialog = [];
                                dialog.push('窥机:弃置你与' + get.translation(target) + '的共计四张牌');
                                if (target.countCards('h')) {
                                    dialog.addArray(['<div class="text center">' + get.translation(target) + '的手牌</div>', target.getCards('h')]);
                                }
                                if (target.countCards('e')) {
                                    dialog.addArray(['<div class="text center">' + get.translation(target) + '的装备</div>', target.getCards('e')]);
                                }
                                if (player.countCards('h')) {
                                    dialog.addArray(['<div class="text center">你的手牌</div>', player.getCards('h')]);
                                }
                                if (player.countCards('e')) {
                                    dialog.addArray(['<div class="text center">你的装备</div>', player.getCards('e')]);
                                }
                                player
                                    .chooseButton(4, true)
                                    .set('createDialog', dialog)
                                    .set('filterButton', (button) => {
                                        if (!lib.filter.canBeDiscarded(button.link, _status.event.player, get.owner(button.link))) {
                                            return false;
                                        }
                                        return true;
                                    })
                                    .set('filterOk', () => {
                                        return ui.selected.buttons.length == 4;
                                    })
                                    .set('ai', (button) => {
                                        const player = _status.event.player;
                                        let target = _status.event.parent.target;
                                        let card = button.link;
                                        if (get.owner(card) == player) {
                                            if (_status.event.damage) {
                                                return 15 - get.value(card);
                                            }
                                            if (player.hp >= 3 || get.damageEffect(player, target, player) >= 0 || (player.hasSkill('dcpitian') && player.getHandcardLimit() - player.countCards('h') >= 1 && player.hp > 1)) {
                                                return 0;
                                            }
                                            if (ui.selected.buttons.length == 0) {
                                                return 10 - get.value(card);
                                            }
                                            return 0;
                                        } else {
                                            if (_status.event.damage) {
                                                return 0;
                                            }
                                            return -(get.sgnAttitude(player, target) || 1) * get.value(card);
                                        }
                                    })
                                    .set(
                                        'damage',
                                        get.damageEffect(target, player, player) > 10 &&
                                        player.countCards('he', (card) => {
                                            return lib.filter.canBeDiscarded(card, player, player) && get.value(card) < 5;
                                        }) >= 4
                                    );
                                ('step 1');
                                if (result.bool) {
                                    const links = result.links;
                                    const list1 = [],
                                        list2 = [];
                                    event.players = [player, target];
                                    for (let card of links) {
                                        if (get.owner(card) == player) {
                                            list1.push(card);
                                        } else {
                                            list2.push(card);
                                        }
                                    }
                                    if (list1.length && list2.length) {
                                        game.loseAsync({
                                            lose_list: [
                                                [player, list1],
                                                [target, list2],
                                            ],

                                            discarder: player,
                                        }).setContent('discardMultiple');
                                        event.finish();
                                    } else if (list2.length) {
                                        target.discard(list2);
                                    } else {
                                        player.discard(list1);
                                    }
                                    if (list2.length >= 5) {
                                        event.players.reverse();
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                expose: 0.2,
                                order: 4,
                                result: {
                                    target(player, target) {
                                        return (get.effect(target, { name: 'guohe_copy2' }, player, target) / 2) * (target.countDiscardableCards(player, 'he') >= 2 ? 1.25 : 1) + get.damageEffect(target, player, target) / 3;
                                    },
                                },
                            },
                        },
                        jxtp_miaoyu: {
                            audio: 'scsanruo',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            prompt: '将至多两张♦️️牌当作火【杀】,♥️️牌当作【桃】,♣️️牌当作【闪】,♠️️牌当作【无懈可击】使用或打出',
                            viewAs(cards, player) {
                                let name = false;
                                let nature = null;
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
                                if (name) {
                                    return { name: name, nature: nature };
                                }
                                return null;
                            },
                            check(card) {
                                if (ui.selected.cards.length) {
                                    return 0;
                                }
                                const player = _status.event.player;
                                if (_status.event.type == 'phase') {
                                    let max = 0;
                                    let name2;
                                    let list = ['sha', 'tao'];
                                    const map = { sha: 'diamond', tao: 'heart' };
                                    for (let i = 0; i < list.length; i++) {
                                        let name = list[i];
                                        if (
                                            player.countCards('hes', function (card) {
                                                return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                            }) > 0 &&
                                            player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                        ) {
                                            const temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                            if (temp > max) {
                                                max = temp;
                                                name2 = map[name];
                                            }
                                        }
                                    }
                                    if (name2 == card.suit) {
                                        return name2 == 'diamond' ? 5 - get.value(card) : 20 - get.value(card);
                                    }
                                    return 0;
                                }
                                return 1;
                            },
                            selectCard: [1, 2],
                            complexCard: true,
                            position: 'hes',
                            filterCard(card, player, event) {
                                if (ui.selected.cards.length) {
                                    return card.suit == ui.selected.cards[0].suit;
                                }
                                event = event || _status.event;
                                const filter = event._backup.filterCard;
                                let name = card.suit;
                                if (name == 'club' && filter({ name: 'shan', cards: [card] }, player, event)) {
                                    return true;
                                }
                                if (name == 'diamond' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) {
                                    return true;
                                }
                                if (name == 'spade' && filter({ name: 'wuxie', cards: [card] }, player, event)) {
                                    return true;
                                }
                                if (name == 'heart' && filter({ name: 'tao', cards: [card] }, player, event)) {
                                    return true;
                                }
                                return false;
                            },
                            filter(event, player) {
                                const filter = event.filterCard;
                                if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hes', { suit: 'diamond' })) {
                                    return true;
                                }
                                if (filter({ name: 'shan' }, player, event) && player.countCards('hes', { suit: 'club' })) {
                                    return true;
                                }
                                if (filter({ name: 'tao' }, player, event) && player.countCards('hes', { suit: 'heart' })) {
                                    return true;
                                }
                                if (filter({ name: 'wuxie' }, player, event) && player.countCards('hes', { suit: 'spade' })) {
                                    return true;
                                }
                                return false;
                            },
                            precontent() {
                                'step 0';
                                player.addTempSkill('jxtp_miaoyu_effect');
                                player.addTempSkill('jxtp_miaoyu_num');
                                player.addTempSkill('jxtp_miaoyu_discard');
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    let name;
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
                                    if (!player.countCards('hes', { suit: name })) {
                                        return false;
                                    }
                                },
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        let max = 0;
                                        let list = ['sha', 'tao'];
                                        const map = { sha: 'diamond', tao: 'heart' };
                                        for (let i = 0; i < list.length; i++) {
                                            let name = list[i];
                                            if (
                                                player.countCards('hes', function (card) {
                                                    return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                                }) > 0 &&
                                                player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                            ) {
                                                const temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                                if (temp > max) {
                                                    max = temp;
                                                }
                                            }
                                        }
                                        max /= 1.1;
                                        return max;
                                    }
                                    return 2;
                                },
                            },
                            hiddenCard(player, name) {
                                if (name == 'wuxie' && _status.connectMode && player.countCards('hes') > 0) {
                                    return true;
                                }
                                if (name == 'wuxie') {
                                    return player.countCards('hes', { suit: 'spade' }) > 0;
                                }
                                if (name == 'tao') {
                                    return player.countCards('hes', { suit: 'heart' }) > 0;
                                }
                            },
                            subSkill: {
                                num: {
                                    charlotte: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return ['sha', 'tao'].includes(event.card.name) && event.skill == 'jxtp_miaoyu' && event.cards && event.cards.length == 2;
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        trigger.baseDamage++;
                                    },
                                },
                                discard: {
                                    charlotte: true,
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    autodelay(event) {
                                        return event.name == 'respond' ? 0.5 : false;
                                    },
                                    filter(event, player) {
                                        return ['shan', 'wuxie'].includes(event.card.name) && event.skill == 'jxtp_miaoyu' && event.cards && event.cards.length == 2 && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countDiscardableCards(player, 'he');
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        player.line(_status.currentPhase, 'green');
                                        player.gainPlayerCard(_status.currentPhase, 'he', true);
                                    },
                                },
                                effect: {
                                    audio: 'jxtp_miaoyu',
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    filter(event, player) {
                                        return event.skill == 'jxtp_miaoyu';
                                    },
                                    forced: true,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        let name = trigger.card.name;
                                        let next = game.createEvent('jxtp_miaoyu_' + name);
                                        next.player = player;
                                        next.setContent(lib.skill.jxtp_miaoyu_effect[name == 'shan' ? 'sha' : name] || function () { });
                                    },
                                    tao() {
                                        player.draw();
                                    },
                                    wuxie() {
                                        'step 0';
                                        const trigger = event.parent.getTrigger();
                                        if (!trigger.respondTo) {
                                            event.finish();
                                            return;
                                        }
                                        let target = trigger.respondTo[0];
                                        event.target = target;
                                        if (!target || !target.countGainableCards(player, player == target ? 'e' : 'he')) {
                                            event._result = { bool: false };
                                        } else {
                                            player
                                                .chooseBool(get.prompt('jxtp_miaoyu_effect', target), '弃置该角色的一张牌')
                                                .set('ai', () => {
                                                    return _status.event.goon;
                                                })
                                                .set('goon', get.attitude(player, target) < 1);
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            player.discardPlayerCard(target, player == target ? 'e' : 'he', true);
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_leiji2: {
                            audio: 'releiji',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'shan';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('jxtp_leiji2'), function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    if (target.hasSkill('hongyan')) {
                                        return 0;
                                    }
                                    return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.judge(function (card) {
                                        const color = get.color(card);
                                        return 0;
                                    }).judge2 = function (result) {
                                        return result.bool == false ? true : false;
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.color == 'black') {
                                    event.target.damage(2, 'thunder');
                                } else if (result.color == 'red') {
                                    player.recover();
                                }
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
                                            let club = 0,
                                                spade = 0;
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return get.attitude(target, current) < 0 && get.damageEffect(current, target, target, 'thunder') > 0;
                                                })
                                            ) {
                                                club = 2;
                                                spade = 4;
                                            }
                                            if (!target.isHealthy()) {
                                                club += 2;
                                            }
                                            if (!club && !spade) {
                                                return 1;
                                            }
                                            if (card.name === 'sha') {
                                                if (
                                                    !target.mayHaveShan(
                                                        player,
                                                        'use',
                                                        target.getCards('h', (i) => {
                                                            return i.hasGaintag('sha_notshan');
                                                        })
                                                    )
                                                ) {
                                                    return;
                                                }
                                            } else if (!target.mayHaveShan(player)) {
                                                return 1 - 0.1 * Math.min(5, target.countCards('hs'));
                                            }
                                            if (!target.hasSkillTag('rejudge')) {
                                                return [1, (club + spade) / 4];
                                            }
                                            let pos = player.hasSkillTag('viewHandcard', null, target, true) ? 'hes' : 'e',
                                                better = club > spade ? 'club' : 'spade',
                                                max = 0;
                                            target.hasCard(function (cardx) {
                                                if (cardx.suit === better) {
                                                    max = 2;
                                                    return true;
                                                }
                                                if (spade && get.color(cardx) === 'black') {
                                                    max = 1;
                                                }
                                            }, pos);
                                            if (max === 2) {
                                                return [1, Math.max(club, spade)];
                                            }
                                            if (max === 1) {
                                                return [1, Math.min(club, spade)];
                                            }
                                            if (pos === 'e') {
                                                return [1, Math.min((Math.max(1, target.countCards('hs')) * (club + spade)) / 4, Math.max(club, spade))];
                                            }
                                            return [1, (club + spade) / 4];
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_guidao1: {
                            audio: 'xinguidao',
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.fixedResult && event.fixedResult.color) {
                                    return event.fixedResult.color == 'red';
                                }
                                return get.color(event.player.judging[0], event.player) == 'red';
                            },
                            content() {
                                'step 0';
                                let str = '鬼道:' + get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',请将其改为一种花色';
                                player
                                    .chooseControl('heart', 'diamond', 'spade', 'club')
                                    .set('prompt', str)
                                    .set('ai', function () {
                                        const judging = _status.event.judging;
                                        const trigger = _status.event.getTrigger();
                                        const res1 = trigger.judge(judging);
                                        let list = lib.suit.slice(0);
                                        const attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0) {
                                            return 0;
                                        }
                                        const getj = function (suit) {
                                            return trigger.judge({
                                                name: judging.name,
                                                nature: get.nature(judging),
                                                suit: suit,
                                                number: judging.number,
                                            });
                                        };
                                        list.sort(function (a, b) {
                                            return (getj(b) - getj(a)) * get.sgn(attitude);
                                        });
                                        return list[0];
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    player.addExpose(0.25);
                                    player.popup(result.control);
                                    game.log(player, '将判定结果改为了', '#y' + get.translation(result.control + 2));
                                    if (!trigger.fixedResult) {
                                        trigger.fixedResult = {};
                                    }
                                    trigger.fixedResult.suit = result.control;
                                    trigger.fixedResult.color = get.color({ suit: result.control });
                                }
                                ('step 2');
                                player.addMark('jxtp_guidao2', 2);
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 0.4,
                                },
                                expose: 0.5,
                            },
                        },
                        jxtp_leiji0: {
                            audio: 'sbleiji',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                let next = player.chooseControl('鸣雷', '轰雷', function () {
                                    if (Math.random() < 0.65) {
                                        return 0;
                                    }
                                    return 1;
                                });
                                next.prompt = get.prompt('jxtp_leiji0');
                                next.choiceList = ['获得【鸣雷】,可以造成雷电伤害并回复自身', '获得【轰雷】,能够造成更加强大的雷电伤害'];
                                ('step 1');
                                if (result.control == '轰雷') {
                                    player.addTempSkill('jxtp_leiji1');
                                } else {
                                    player.addTempSkill('jxtp_leiji3');
                                }
                            },
                            ai: {
                                threaten: 2.5,
                            },
                        },
                        jxtp_leiji1: {
                            audio: 'sbleiji',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('jxtp_guidao2') >= 4;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                player.removeMark('jxtp_guidao2', 4);
                                target.damage(2, 'thunder');
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target, 'thunder');
                                    },
                                },
                            },
                        },
                        jxtp_leiji3: {
                            audio: 'sbleiji',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('jxtp_guidao2') >= 4;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                player.removeMark('jxtp_guidao2', 4);
                                target.damage('thunder');
                                player.recover();
                                player.draw(2);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, target, 'thunder');
                                    },
                                },
                            },
                        },
                        jxtp_guidao2: {
                            audio: 'sbguidao',
                            trigger: {
                                global: ['phaseBefore', 'damageEnd'],
                                player: 'enterGame',
                            },
                            forced: true,
                            group: 'jxtp_guidao2_defend',
                            filter(event, player) {
                                if (event.name == 'damage') {
                                    return event.hasNature() && !player.hasSkill('jxtp_guidao2_forbid');
                                }
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                let num = 1;
                                if (trigger.name != 'damage') {
                                    num += 3;
                                }
                                player.addMark('jxtp_guidao2', num);
                            },
                            marktext: '兵',
                            intro: {
                                name: '道兵',
                                name2: '道兵',
                                content: '共有$枚<道兵>',
                            },
                            subSkill: {
                                defend: {
                                    audio: 'sbguidao',
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    filter(event, player) {
                                        return player.countMark('jxtp_guidao2') >= 999;
                                    },
                                    prompt2: '弃1枚<道兵>,防止伤害',
                                    check(event, player) {
                                        return event.num >= 2 || player.hp <= event.num;
                                    },
                                    content() {
                                        trigger.cancel();
                                        player.removeMark('jxtp_guidao2', 1);
                                        player.draw(2);
                                        if (player != _status.currentPhase) {
                                            player.addTempSkill('jxtp_guidao2_forbid', { player: 'phaseBegin' });
                                        }
                                    },
                                },
                                forbid: {
                                    charlotte: true,
                                },
                            },
                        },
                        jxtp_leiji: {
                            group: ['jxtp_leiji0', 'jxtp_leiji2'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_guidao: {
                            group: ['jxtp_guidao1', 'jxtp_guidao2', 'jxtp_guidao3'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_huangtian: {
                            audio: 'sbhuangtian',
                            juexingji: true,
                            zhuSkill: true,
                            keepSkill: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.hasZhuSkill('jxtp_huangtian')) {
                                    return false;
                                }
                                return player.hp < player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('jxtp_huangtian');
                                player.addMark('jxtp_guidao2', 4);
                                ('step 1');
                                player.removeSkill('jxtp_guidao4');
                                player.addSkill('jxtp_guidao5');
                            },
                        },
                        jxtp_guidao3: {
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isPhaseUsing() && event.player != player && event.player.isIn();
                            },
                            content() {
                                player.addMark('jxtp_guidao2', 1);
                            },
                        },
                        jxtp_guidao4: {
                            audio: 'sbguidao',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return player.countMark('jxtp_guidao2') >= 2;
                            },
                            prompt2: '弃2枚<道兵>,防止伤害并摸1张牌',
                            check(event, player) {
                                return event.num >= 2 || player.hp <= event.num;
                            },
                            content() {
                                trigger.cancel();
                                player.removeMark('jxtp_guidao2', 2);
                                player.draw();
                            },
                        },
                        jxtp_guidao5: {
                            audio: 'sbguidao',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return player.countMark('jxtp_guidao2') >= 1;
                            },
                            prompt2: '弃1枚<道兵>,防止伤害',
                            check(event, player) {
                                return event.num >= 2 || player.hp <= event.num;
                            },
                            content() {
                                trigger.cancel();
                                player.removeMark('jxtp_guidao2', 1);
                                player.draw(2);
                            },
                        },
                        jxtp_huoji: {
                            dutySkill: true,
                            derivation: ['jxtp_jinsuo', 'jxtp_guanxing', 'jxtp_kongcheng'],
                            group: ['jxtp_huoji_fire', 'jxtp_huoji_achieve', 'jxtp_huoji_fail', 'sbhuoji_mark'],
                            subSkill: {
                                fire: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget(true, '火计:选择一名角色,对其造成1点火焰伤害').set('ai', function (target) {
                                            const player = _status.event.player;
                                            return get.damageEffect(target, player, player);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            let target = result.targets[0];
                                            event.target = target;
                                            player.line(target, 'green');
                                            target.damage('fire');
                                        }
                                        ('step 2');
                                        let targets = game.filterPlayer((current) => {
                                            if (current == player || current == target) {
                                                return false;
                                            }
                                            return current.group == target.group;
                                        });
                                        if (targets.length) {
                                            player.line(targets, 'fire');
                                            targets.forEach((i) => i.damage('fire'));
                                        } else {
                                            event.finish();
                                        }
                                    },
                                },
                                achieve: {
                                    audio: 'sbhuoji2',
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    filter(event, player) {
                                        return player.getAllHistory('sourceDamage', (evt) => evt.hasNature('fire')).reduce((num, evt) => num + evt.num, 0) >= game.players.length + game.dead.length;
                                    },
                                    forced: true,
                                    async content(event, trigger, player) {
                                        player.removeSkill('jxtp_huoji');
                                        game.log(player, '成功完成使命');
                                        player.recover(player.maxHp);
                                        player.addSkill('jxtp_jinsuo');
                                        player.addSkill('jxtp_tianyan');
                                    },
                                },
                                fail: {
                                    trigger: {
                                        player: 'dying',
                                    },
                                    forced: true,
                                    content() {
                                        player.recover(1 - player.hp);
                                        player.addTempSkill('jxtp_kongcheng_wudi', { player: 'phaseBegin' });
                                        player.changeSkin('sbhuoji', 'sb_zhugeliang');
                                        player.changeSkills(['jxtp_guanxing', 'jxtp_kongcheng'], ['jxtp_huoji', 'jxtp_kanpo']);
                                        game.log(player, '使命失败');
                                    },
                                },
                                mark: {
                                    charlotte: true,
                                    trigger: {
                                        source: 'damage',
                                    },
                                    filter(event, player) {
                                        return event.hasNature('fire');
                                    },
                                    firstDo: true,
                                    forced: true,
                                    popup: false,
                                    content() {
                                        player.addTempSkill('jxtp_huoji_count', { player: ['jxtp_huoji_achieveBegin', 'jxtp_huoji_failBegin'] });
                                        player.storage.sbhuoji_count = player.getAllHistory('sourceDamage', (evt) => evt.hasNature('fire')).reduce((num, evt) => num + evt.num, 0);
                                        player.markSkill('jxtp_huoji_count');
                                    },
                                },
                                count: {
                                    charlotte: true,
                                    intro: {
                                        content: '本局游戏已造成过#点火属性伤害',
                                    },
                                },
                            },
                        },
                        jxtp_kongcheng_wudi: {
                            audio: 'kongcheng',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            charlotte: true,
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            mark: true,
                            intro: {
                                content: '无敌空城中',
                            },
                        },
                        jxtp_moumo: {
                            audio: 'requanji',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                const suit = event.card.suit;
                                if (!lib.suit.includes(suit)) {
                                    return false;
                                }
                                let evt = event.getParent('phaseUse');
                                if (!evt || player != evt.player) {
                                    return false;
                                }
                                let list = [],
                                    history = player.getHistory('useCard');
                                if (history.length < 2) {
                                    return false;
                                }
                                for (let i of history) {
                                    if (i.getParent('phaseUse') != evt) {
                                        continue;
                                    }
                                    const suit2 = i.card.suit;
                                    if (!lib.suit.includes(suit2)) {
                                        continue;
                                    }
                                    if (i != event && suit2 == suit) {
                                        return false;
                                    }
                                    if (i.finished) {
                                        list.add(suit2);
                                    }
                                }
                                return list.length > 1 && list.length < 5;
                            },
                            content() {
                                'step 0';
                                const suit = trigger.card.suit;
                                let evt = event.getParent('phaseUse');
                                let list = [],
                                    history = player.getHistory('useCard');
                                for (let i of history) {
                                    if (i.getParent('phaseUse') != evt) {
                                        continue;
                                    }
                                    const suit2 = i.card.suit;
                                    if (!lib.suit.includes(suit2)) {
                                        continue;
                                    }
                                    if (i.finished) {
                                        list.add(suit2);
                                    }
                                }
                                let prompt, filterTarget, ai;
                                switch (list.length) {
                                    case 2:
                                        prompt = '重铸一名角色两张牌';
                                        filterTarget = function (card, player, target) {
                                            return true;
                                        };
                                        ai = function (target) {
                                            const player = _status.event.player;
                                            let att = get.attitude(player, target);
                                            if (target.hasSkill('nogain')) {
                                                att /= 10;
                                            }
                                            return att / Math.sqrt(Math.min(5, 1 + target.countCards('h')));
                                        };
                                        break;
                                    case 3:
                                        prompt = '令一名角色摸两张牌';
                                        filterTarget = function (card, player, target) {
                                            return target.hasCard(function (card) {
                                                return lib.filter.canBeDiscarded(card, player, target);
                                            }, 'hej');
                                        };
                                        ai = function (target) {
                                            const player = _status.event.player;
                                            let att = get.attitude(player, target);
                                            if (target.hasSkill('nogain')) {
                                                att /= 10;
                                            }
                                            return att / Math.sqrt(Math.min(5, 1 + target.countCards('h')));
                                        };
                                        break;
                                    case 4:
                                        prompt = '获得一名其他角色2张牌';
                                        filterTarget = function (card, player, target) {
                                            return target != player;
                                        };
                                        ai = function (target) {
                                            const player = _status.event.player;
                                            return get.effect(target, { name: 'guohe_copy' }, player, player);
                                        };
                                        break;
                                    default:
                                        event.finish();
                                        return;
                                }
                                event.num = list.length;
                                player.chooseTarget(get.prompt('jxtp_moumo'), prompt, filterTarget).set('ai', ai);
                                ('step 1');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    event.target = target;
                                    event.goto(num);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.discardPlayerCard(2, target, 'he', true);
                                target.draw(2);
                                event.finish();
                                ('step 3');
                                target.draw(2);
                                event.finish();
                                ('step 4');
                                player.gainPlayerCard(2, target, true, 'hej');
                            },
                        },
                        jxtp_quanji: {
                            audio: 'xinquanji',
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.getExpansions('jxtp_quanji').length;
                                },
                            },
                            trigger: {
                                player: ['damageEnd', 'phaseDiscardBefore'],
                            },
                            forced: true,
                            notemp: true,
                            filter(event, player) {
                                if (event.name == 'phaseDiscard') {
                                    return player.countCards('h') >= player.hp;
                                }
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = trigger.num || 1;
                                ('step 1');
                                event.count--;
                                player.draw(2);
                                ('step 2');
                                if (player.countCards('h')) {
                                    player.chooseCard('将一张手牌置于武将牌上作为<权>', true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.cards && result.cards.length) {
                                    player.addToExpansion(result.cards, player, 'give').gaintag.add('jxtp_quanji');
                                }
                                ('step 4');
                                if (event.count > 0 && player.hasSkill(event.name) && !get.is.blocked(event.name, player)) {
                                    player.chooseBool(get.prompt2('jxtp_quanji')).set('frequentSkill', event.name);
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                let cards = player.getExpansions('jxtp_quanji');
                                if (cards.length) {
                                    player.loseToDiscardpile(cards);
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten: 0.8,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) {
                                                return [1, -2];
                                            }
                                            if (!target.hasFriend()) {
                                                return;
                                            }
                                            if (target.hp >= 4) {
                                                return [0.5, get.tag(card, 'damage') * 2];
                                            }
                                            if (!target.hasSkill('paiyi') && target.hp > 1) {
                                                return [0.5, get.tag(card, 'damage') * 1.5];
                                            }
                                            if (target.hp == 3) {
                                                return [0.5, get.tag(card, 'damage') * 1.5];
                                            }
                                            if (target.hp == 2) {
                                                return [1, get.tag(card, 'damage') * 0.5];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_zili: {
                            audio: 'xinzili',
                            juexingji: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            derivation: 'jxtp_paiyi',
                            filter(event, player) {
                                return !player.hasSkill('jxtp_paiyi') && player.getExpansions('jxtp_quanji').length > 3;
                            },
                            content() {
                                'step 0';
                                player.changeGroup('qun');
                                player.removeSkill('jxtp_quanji4');
                                player.recover(player.maxHp);
                                ('step 1');
                                player.addSkills('jxtp_quanji3');
                                player.addSkills('jxtp_paiyi');
                                player.removeSkill('jxtp_zili');
                            },
                            ai: {
                                combo: 'jxtp_quanji',
                            },
                        },
                        jxtp_paiyi: {
                            enable: 'phaseUse',
                            usable: 2,
                            audio: 'xinpaiyi',
                            filter(event, player) {
                                return player.getExpansions('jxtp_quanji').length;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('排异', player.getExpansions('jxtp_quanji'), 'hidden');
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'xinpaiyi',
                                        filterTarget: true,
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        card: links[0],
                                        delay: false,
                                        content: lib.skill.jxtp_paiyi.contentx,
                                        ai: {
                                            order: 10,
                                            result: {
                                                target(player, target) {
                                                    if (player != target) {
                                                        return 0;
                                                    }
                                                    if (player.hasSkill('jxtp_quanji') || player.countCards('h') + 2 <= player.hp + player.getExpansions('jxtp_quanji').length) {
                                                        return 1;
                                                    }
                                                    return 0;
                                                },
                                            },
                                        },
                                    };
                                },
                                prompt() {
                                    return '请选择〖排异〗的目标';
                                },
                            },
                            contentx() {
                                'step 0';
                                let card = lib.skill.jxtp_paiyi_backup.card;
                                player.loseToDiscardpile(card);
                                ('step 1');
                                if (target != player) {
                                    target.addTempSkill('jxtp_paiyi2');
                                    target.addTempSkill('jxtp_paiyi3');
                                    target.markSkillCharacter('jxtp_paiyi2', player, '排异', '艾命不遵,死有余辜!');
                                    target.gain(target.getCards('e'), 'gain2');
                                }
                                ('step 2');
                                if (target != player) {
                                    let num = target.countCards('h') - Math.min(player.hp, target.hp);
                                    if (num > 0) {
                                        target.chooseToDiscard('h', true, num);
                                    }
                                } else {
                                    let cards = player.getExpansions('jxtp_quanji');
                                    player.draw(Math.min(5, Math.max(2, cards.length)));
                                    player.addTempSkill('jxtp_paiyi1');
                                }
                            },
                            ai: {
                                order: 1,
                                combo: 'jxtp_quanji',
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        jxtp_paiyi2: {
                            charlotte: true,
                            trigger: {
                                player: 'damageBegin1',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        jxtp_quanji1: {
                            audio: 'clanxieshu',
                            trigger: {
                                player: 'phaseDrawAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getExpansions('jxtp_quanji').length && player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                let cards = player.getExpansions('jxtp_quanji');
                                if (!cards.length || !player.countCards('h')) {
                                    event.finish();
                                    return;
                                }
                                let next = player.chooseToMove('权计:是否将手牌和<权>交换？');
                                next.set('list', [
                                    [get.translation(player) + '(你)的权', cards],
                                    ['你的手牌', player.getCards()],
                                ]);
                                next.set('filterMove', function (from, to) {
                                    return typeof to != 'number';
                                });
                                next.set('processAI', function (list) {
                                    let player = _status.event.player,
                                        cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                            return get.value(a) - get.value(b);
                                        }),
                                        cards2 = cards.splice(0, player.getExpansions('jxtp_quanji').length);
                                    return [cards2, cards];
                                });
                                ('step 1');
                                if (result.bool) {
                                    const pushs = result.moved[0],
                                        gains = result.moved[1];
                                    pushs.removeArray(player.getExpansions('jxtp_quanji'));
                                    gains.removeArray(player.getCards('h'));
                                    if (!pushs.length || pushs.length != gains.length) {
                                        return;
                                    }
                                    player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('jxtp_quanji');
                                    game.log(player, '将', pushs, '作为<权>置于武将牌上');
                                    player.gain(gains, 'draw');
                                }
                            },
                        },
                        jxtp_quanji2: {
                            audio: 'clanyuzhi',
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.getExpansions('jxtp_quanji').length;
                                },
                            },
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            notemp: true,
                            filter(event, player) {
                                if (event.name == 'phaseDiscard') {
                                    return player.countCards('h') >= player.hp;
                                }
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = trigger.num || 1;
                                ('step 1');
                                event.count--;
                                player.draw();
                                ('step 2');
                                if (player.countCards('h')) {
                                    player.chooseCard('将一张手牌置于武将牌上作为<权>', true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.cards && result.cards.length) {
                                    player.addToExpansion(result.cards, player, 'give').gaintag.add('jxtp_quanji');
                                }
                                ('step 4');
                                if (event.count > 0 && player.hasSkill(event.name) && !get.is.blocked(event.name, player)) {
                                    player.chooseBool(get.prompt2('jxtp_quanji2')).set('frequentSkill', event.name);
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                let cards = player.getExpansions('jxtp_quanji');
                                if (cards.length) {
                                    player.loseToDiscardpile(cards);
                                }
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) {
                                                return [1, -2];
                                            }
                                            if (!target.hasFriend()) {
                                                return;
                                            }
                                            if (target.hp >= 4) {
                                                return [0.5, get.tag(card, 'damage') * 2];
                                            }
                                            if (!target.hasSkill('paiyi') && target.hp > 1) {
                                                return [0.5, get.tag(card, 'damage') * 1.5];
                                            }
                                            if (target.hp == 3) {
                                                return [0.5, get.tag(card, 'damage') * 1.5];
                                            }
                                            if (target.hp == 2) {
                                                return [1, get.tag(card, 'damage') * 0.5];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_quanji3: {
                            group: ['jxtp_quanji1', 'jxtp_quanji2', 'jxtp_quanji5'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_quanji4: {
                            group: ['jxtp_quanji', 'jxtp_moumo'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_paiyi1: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') {
                                        return num + Math.max(1, player.hp);
                                    }
                                },
                            },
                            charlotte: true,
                        },
                        jxtp_quanji5: {
                            audio: 'clanyuzhi',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            notemp: true,
                            filter(event, player) {
                                if (event.name == 'phaseDiscard') {
                                    return player.countCards('h') >= player.hp;
                                }
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                event.count = trigger.num || 1;
                                ('step 1');
                                event.count--;
                                player.draw(2);
                                ('step 2');
                                if (player.countCards('h')) {
                                    player.chooseCard('将一张手牌置于武将牌上作为<权>', true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.cards && result.cards.length) {
                                    player.addToExpansion(result.cards, player, 'give').gaintag.add('jxtp_quanji');
                                }
                                ('step 4');
                                if (event.count > 0 && player.hasSkill(event.name) && !get.is.blocked(event.name, player)) {
                                    player.chooseBool(get.prompt2('jxtp_quanji5')).set('frequentSkill', event.name);
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                let cards = player.getExpansions('jxtp_quanji');
                                if (cards.length) {
                                    player.loseToDiscardpile(cards);
                                }
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) {
                                                return [1, -2];
                                            }
                                            if (!target.hasFriend()) {
                                                return;
                                            }
                                            if (target.hp >= 4) {
                                                return [0.5, get.tag(card, 'damage') * 2];
                                            }
                                            if (!target.hasSkill('paiyi') && target.hp > 1) {
                                                return [0.5, get.tag(card, 'damage') * 1.5];
                                            }
                                            if (target.hp == 3) {
                                                return [0.5, get.tag(card, 'damage') * 1.5];
                                            }
                                            if (target.hp == 2) {
                                                return [1, get.tag(card, 'damage') * 0.5];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_paiyi3: {
                            init(player, skill) {
                                player.addSkillBlocker(skill);
                            },
                            onremove(player, skill) {
                                player.removeSkillBlocker(skill);
                            },
                            charlotte: true,
                            skillBlocker(skill, player) {
                                return !lib.skill[skill].charlotte;
                            },
                        },
                        jxtp_kuiji2: {
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                noh: true,
                            },
                        },
                        jxtp_kuiji0: {
                            group: ['jxtp_kuiji1', 'jxtp_kuiji2'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_niqu2: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return !player.storage.jxtp_niqu2 && event.hasNature('fire');
                            },
                            forced: true,
                            logTarget: 'player',
                            init(player) {
                                player.storage.jxtp_niqu2 = false;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) >= 0) {
                                    return 0;
                                }
                                if (player.hasUnknown()) {
                                    return 0;
                                }
                                let num = 0,
                                    players = game.filterPlayer();
                                for (let i = 0; i < players.length; i++) {
                                    if (players[i] != player && players[i] != event.player && get.distance(event.player, players[i]) <= 1) {
                                        let eff = get.damageEffect(players[i], player, player, 'fire');
                                        if (eff > 0) {
                                            num++;
                                        } else if (eff < 0) {
                                            num--;
                                        }
                                    }
                                }
                                return num > 0;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        jxtp_niqu1: {
                            group: ['jxtp_niqu2', 'jxtp_niqu'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_chihe2: {
                            mod: {
                                targetInRange: () => true,
                            },
                        },
                        jxtp_chihe1: {
                            group: ['jxtp_chihe2', 'jxtp_chihe'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_xiaolu2: {
                            audio: 'scsxiaolu',
                            trigger: {
                                global: 'gainAfter',
                                player: 'loseAsyncAfter',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                if (event.name == 'loseAsync') {
                                    if (event.type != 'gain') {
                                        return false;
                                    }
                                    let cards = event.getl(player).cards2;
                                    return game.hasPlayer(function (current) {
                                        let hs = current.getCards('h');
                                        if (current == player) {
                                            return false;
                                        }
                                        const cardsx = event.getg(current);
                                        for (let i of cardsx) {
                                            if (cards.includes(i) && hs.includes(card) && cards.includes(card)) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    });
                                }
                                if (event.player != player) {
                                    const hs = event.player.getCards('h');
                                    let evt = event.getl(player);
                                    return (
                                        evt &&
                                        evt.cards2 &&
                                        evt.cards2.filter(function (card) {
                                            return hs.includes(card);
                                        }).length
                                    );
                                }
                                return false;
                            },
                            content() {
                                player.draw(2);
                            },
                        },
                        jxtp_xiaolu1: {
                            group: ['jxtp_xiaolu', 'jxtp_xiaolu2'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_yaozhuo2: {
                            audio: 'scsyaozhuo',
                            trigger: {
                                player: 'compare',
                                target: 'compare',
                            },
                            filter(event, player) {
                                return !event.iwhile;
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                'step 0';
                                player
                                    .chooseControl('点数改为K', '点数改为A', 'cancel2')
                                    .set('prompt', get.prompt2('jxtp_yaozhuo2'))
                                    .set('ai', function () {
                                        if (_status.event.small) {
                                            return 1;
                                        } else {
                                            return 0;
                                        }
                                    })
                                    .set('small', trigger.small);
                                ('step 1');
                                if (result.index != 2) {
                                    if (result.index == 0) {
                                        game.log(player, '点数改为K');
                                        if (player == trigger.player) {
                                            trigger.num1 += 13;
                                            if (trigger.num1 > 13) {
                                                trigger.num1 = 13;
                                            }
                                        } else {
                                            trigger.num2 += 13;
                                            if (trigger.num2 > 13) {
                                                trigger.num2 = 13;
                                            }
                                        }
                                    } else {
                                        game.log(player, '点数改为A');
                                        if (player == trigger.player) {
                                            trigger.num1 -= 13;
                                            if (trigger.num1 < 1) {
                                                trigger.num1 = 1;
                                            }
                                        } else {
                                            trigger.num2 -= 13;
                                            if (trigger.num2 < 1) {
                                                trigger.num2 = 1;
                                            }
                                        }
                                    }
                                }
                            },
                        },
                        jxtp_yaozhuo1: {
                            group: ['jxtp_yaozhuo', 'jxtp_yaozhuo2'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_zimou2: {
                            audio: 'scszimou',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (player.storage.jxtp_zimou2) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                let card = get.cardPile(function (card) {
                                    return card.name == 'jiu';
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                }
                                ('step 1');
                                let card2 = get.cardPile(function (card) {
                                    return get.type2(card) == 'trick' && !get.tag(event.card, 'damage');
                                });
                                if (card2) {
                                    player.gain(card2, 'gain2');
                                }
                            },
                            ai: {
                                order: 13,
                                result: {
                                    player: 3,
                                }, //QQQ
                            },
                        },
                        jxtp_zimou1: {
                            group: ['jxtp_zimou', 'jxtp_zimou2'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_pichai2: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') {
                                        return num + 1;
                                    }
                                },
                            },
                        },
                        jxtp_pichai1: {
                            group: ['jxtp_pichai', 'jxtp_pichai2'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_miaoyu2: {
                            audio: 'ext:极限突破/audio:true',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.num <= 1) {
                                    return false;
                                }
                                if (player.hasSkillTag('unequip2')) {
                                    return false;
                                }
                                if (
                                    event.source &&
                                    event.source.hasSkillTag('unequip', false, {
                                        name: event.card ? event.card.name : null,
                                        target: player,
                                        card: event.card,
                                    })
                                ) {
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                trigger.num = 1;
                            },
                        },
                        jxtp_miaoyu1: {
                            group: ['jxtp_miaoyu', 'jxtp_miaoyu2'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_taoluan3: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (card.name == 'lebu') {
                                        return false;
                                    }
                                },
                            },
                        },
                        jxtp_taoluan4: {
                            group: ['jxtp_taoluan2', 'jxtp_taoluan3', 'jxtp_taoluan5'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_chiyan1: {
                            group: ['jxtp_chiyan', 'jxtp_mowang_damage', 'jxtp_chiyan3'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_chiyan3: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (card.name == 'bingliang') {
                                        return false;
                                    }
                                },
                            },
                        },
                        jxtp_taoluan5: {
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('taoluan') < 1;
                            },
                            content() {
                                player.addMark('taoluan', 1);
                            },
                            marktext: '乱',
                            intro: {
                                content: 'mark',
                            },
                        },
                        jxtp_taoluan6: {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            forced: true,
                            charlotte: true,
                            popup: false,
                            filter(event, player) {
                                return event.skill == 'jxtp_taoluan2_backup';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        jxtp_mowang8: {
                            trigger: {
                                player: 'dieBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source != player;
                            },
                            content() {
                                trigger.source.clearSkills();
                                trigger.source.discard(trigger.source.getCards('he'));
                                trigger.source.addSkill('jxtp_mowang8_skip');
                                trigger.source.addSkill('jxtp_mowang9');
                            },
                            logTarget: 'source',
                            subSkill: {
                                skip: {
                                    mark: true,
                                    intro: {
                                        content: '已被死亡常侍的怨魂所纠缠',
                                    },
                                },
                            },
                            ai: {
                                maixie_defend: true,
                                threaten(player, target) {
                                    if (target.hp == 1) {
                                        return 0.2;
                                    }
                                    return 1.5;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (!target.hasFriend()) {
                                            return;
                                        }
                                        if (target.hp <= 1 && get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) {
                                                return 3;
                                            }
                                            return [1, 0, 0, -3 * get.threaten(player)];
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_mowang9: {
                            trigger: {
                                player: 'recoverBefore',
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                noh: true,
                            },
                            group: 'jxtp_mowang10',
                        },
                        jxtp_mowang10: {
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'gain' && event.player == player) {
                                    return player.countCards('h') > 0;
                                }
                                let evt = event.getl(player);
                                if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= 0) {
                                    return false;
                                }
                                let evt1 = event;
                                for (let i = 0; i < 0; i++) {
                                    evt1 = evt1.getParent('jxtp_mowang10');
                                    if (evt1.name != 'jxtp_mowang10') {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                let num = 0 - player.countCards('h');
                                if (num > 0) {
                                    player.draw(num);
                                } else {
                                    player.chooseToDiscard('h', true, -num);
                                }
                            },
                        },
                        jxtp_qice_end: {
                            audio: 'reqice',
                            forced: true,
                            trigger: {
                                player: 'phaseJieshuEnd',
                            },
                            filter(event, player) {
                                return player.countMark('jxtp_qice_mark') >= 1;
                            },
                            async content(event, trigger, player) {
                                let num = player.countMark('jxtp_qice_mark');
                                player.removeMark('jxtp_qice_mark', num);
                                player.chooseDrawRecover(2 * num, true);
                            },
                        },
                        jxtp_qice0: {
                            group: ['jxtp_qice', 'jxtp_qice_end'],
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        jxtp_mouzhu: {
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event) {
                                return get.type(event.card, 'trick') == 'trick' && !event.card.isCard;
                            },
                            async content(event, trigger, player) {
                                let num = player.countMark('jxtp_qice_mark');
                                player.draw(num);
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                        },
                        jxtp_zhiyu1: {
                            audio: 'rezhiyu',
                            preHidden: true,
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                player.draw();
                                ('step 2');
                                if (trigger.source?.countCards('h')) {
                                    trigger.source.chooseToDiscard('智愚:请弃置一张牌', 'he', true);
                                } else {
                                    player.recover();
                                } //QQQ
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) {
                                            return [1, -1];
                                        }
                                        if (get.tag(card, 'damage')) {
                                            return [1, 0.55];
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_miaolve: {
                            audio: 'twmiaolve',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            forced: true,
                            content() {
                                if (!lib.inpile.includes('dz_mantianguohai')) {
                                    lib.inpile.add('dz_mantianguohai');
                                }
                                if (!_status.dz_mantianguohai_suits) {
                                    _status.dz_mantianguohai_suits = lib.suit.slice(0);
                                }
                                let list = _status.dz_mantianguohai_suits.randomRemove(2).map(function (i) {
                                    return game.createCard2('dz_mantianguohai', i, 5);
                                });
                                if (list.length) {
                                    player.gain(list, 'gain2', 'log');
                                }
                            },
                            group: ['jxtp_miaolve_damage', 'jxtp_miaolve_begin'],
                            subSkill: {
                                begin: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        if (!_status.dz_mantianguohai_suits || _status.dz_mantianguohai_suits.length) {
                                            if (!lib.inpile.includes('dz_mantianguohai')) {
                                                lib.inpile.add('dz_mantianguohai');
                                            }
                                            if (!_status.dz_mantianguohai_suits) {
                                                _status.dz_mantianguohai_suits = lib.suit.slice(0);
                                            }
                                            player.gain(game.createCard2('dz_mantianguohai', _status.dz_mantianguohai_suits.randomRemove(), 6), 'gain2');
                                        } else {
                                            let card = get.cardPile(function (card) {
                                                return card.name == 'dz_mantianguohai';
                                            });
                                            if (card) {
                                                player.gain(card, 'gain2');
                                            }
                                        }
                                    },
                                },
                                damage: {
                                    audio: 'twmiaolve',
                                    trigger: {
                                        player: ['damageEnd', 'phaseZhunbeiBegin'],
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        event.count = Math.min(trigger.num, 9);
                                        ('step 1');
                                        event.count--;
                                        let list = get.zhinangs();
                                        player.chooseButton(['###' + get.prompt('jxtp_miaolve_damage') + '###获得一张智囊或摸两张牌', [list, 'vcard'], [['摸两张牌', '取消'], 'tdnodes']], true).set('ai', function (card) {
                                            if (card.link[2]) {
                                                if (
                                                    !get.cardPile(function (cardx) {
                                                        return cardx.name == card.link[2];
                                                    })
                                                ) {
                                                    return 0;
                                                }
                                                return (Math.random() + 1.5) * get.value({ name: card.link[2] }, _status.event.player);
                                            }
                                            if (card.link == '摸两张牌') {
                                                return 1;
                                            }
                                            return 0;
                                        });
                                        ('step 2');
                                        if (result.bool && result.links[0] != '取消') {
                                            if (result.links[0] == '摸两张牌') {
                                                player.draw(2);
                                            } else {
                                                let card = get.cardPile(function (card) {
                                                    return card.name == result.links[0][2];
                                                });
                                                if (card) {
                                                    player.gain(card, 'gain2');
                                                }
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_yingjia: {
                            audio: 'twyingjia',
                            group: ['jxtp_yingjia_mark', 'jxtp_yingjia_end'],
                            subSkill: {
                                mark: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    logTarget(event, player) {
                                        return game.filterPlayer((current) => !current.hasMark('jxtp_yingjia'));
                                    },
                                    content() {
                                        let list = game.filterPlayer((current) => !current.hasMark('jxtp_yingjia')).sortBySeat();
                                        for (let i of list) {
                                            i.addMark('jxtp_yingjia', 1, false);
                                        }
                                    },
                                },
                                end: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    audio: 'twyingjia',
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasMark('jxtp_yingjia') && player.countCards('h') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCard({
                                            prompt: get.prompt('jxtp_yingjia'),
                                            prompt2: '弃置一张手牌并令当前回合角色进行一个额外回合或选择取消摸一张牌',
                                            filterCard: lib.filter.cardDiscardable,
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.discard(result.cards);
                                            _status.currentPhase.removeMark('jxtp_yingjia', 1);
                                            _status.currentPhase.phase('nodelay');
                                        } else {
                                            _status.currentPhase.removeMark('jxtp_yingjia', 1);
                                            player.draw();
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_polu: {
                            audio: 'polu',
                            trigger: {
                                global: 'phaseBefore',
                                player: ['phaseZhunbeiBegin', 'enterGame'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'phase' && game.phaseNumber > 0) {
                                    return false;
                                }
                                if (player.getEquip('pilitoushiche') || player.getEquip('ly_piliche')) {
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.countDiscardableCards(player, 'he') > 0;
                                    });
                                } else {
                                    return player.hasEquipableSlot(5);
                                }
                            },
                            content() {
                                'step 0';
                                if (player.getEquip('pilitoushiche')) {
                                    event.goto(2);
                                    player
                                        .chooseTarget(get.prompt('jxtp_polu'), '弃置一名其他角色的至多两张牌', function (card, player, target) {
                                            return target != player && target.countDiscardableCards(player, 'he') > 0;
                                        })
                                        .set('ai', function (target) {
                                            let player = _status.event.player,
                                                cards = target.getDiscardableCards(player, 'he');
                                            let att = get.attitude(player, target);
                                            if (att < 0 && target.hasSkillTag('noe')) {
                                                att /= 2;
                                            }
                                            let zheng = [],
                                                fu = [];
                                            for (let i of cards) {
                                                let val = get.value(i, target);
                                                if (val > 0) {
                                                    zheng.push(i);
                                                } else {
                                                    fu.push(i);
                                                }
                                            }
                                            zheng.sort((a, b) => get.value(b, target) - get.value(a, target));
                                            fu.sort((a, b) => get.value(b, target) - get.value(a, target));
                                            zheng = zheng.slice(0, 2);
                                            fu = fu.slice(0, 2);
                                            let eff1 = 0,
                                                eff2 = 0;
                                            for (let i of zheng) {
                                                eff1 += get.value(i, target);
                                            }
                                            for (let i of fu) {
                                                if (get.position(i) == 'e') {
                                                    eff2 += 1 - get.value(i, target);
                                                }
                                            }
                                            return -att * Math.max(eff1, eff2);
                                        });
                                } else {
                                    player.chooseBool(get.prompt('jxtp_polu'), '装备一张【霹雳投石车】').set('ai', function () {
                                        return true;
                                    });
                                }
                                ('step 1');
                                if (result.bool) {
                                    let card = game.createCard('pilitoushiche', 'diamond', 9);
                                    player.$gain2(card);
                                    player.equip(card);
                                }
                                event.finish();
                                ('step 2');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    player.discardPlayerCard(target, true, 'he', [0, 2]);
                                }
                            },
                            group: ['jxtp_polu_recast', 'jxtp_polu_equip'],
                            subSkill: {
                                recast: {
                                    enable: 'phaseUse',
                                    position: 'he',
                                    filter: (event, player) => player.hasCard((card) => lib.skill.drlt_huairou.filterCard(card, player), lib.skill.drlt_huairou.position),
                                    filterCard: (card, player) => get.type(card) == 'equip' && player.canRecast(card),
                                    check(card) {
                                        if (!_status.event.player.canEquip(card)) {
                                            return 5;
                                        }
                                        return 3 - get.value(card);
                                    },
                                    content() {
                                        player.recast(cards);
                                    },
                                    discard: false,
                                    lose: false,
                                    delay: false,
                                    prompt: '将一张装备牌置入弃牌堆并摸一张牌',
                                    ai: {
                                        order: 10,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                equip: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!lib.inpile.includes('ly_piliche')) {
                                            return true;
                                        }
                                        return !!get.cardPile(function (card) {
                                            return card.name == 'ly_piliche';
                                        });
                                    },
                                    content() {
                                        let card;
                                        if (!lib.inpile.includes('ly_piliche')) {
                                            card = game.createCard2('ly_piliche', 'diamond', 1);
                                            lib.inpile.push('ly_piliche');
                                        } else {
                                            card = get.cardPile(function (card) {
                                                return card.name == 'ly_piliche';
                                            });
                                        }
                                        player.chooseUseTarget(card, true, 'nopopup');
                                    },
                                },
                            },
                        },
                        jxtp_quchong: {
                            forced: true,
                            trigger: {
                                global: 'phaseBefore',
                                player: ['phaseJieshuBegin', 'enterGame'],
                            },
                            filter(event, player) {
                                if (event.name == 'phase' && game.phaseNumber > 0) {
                                    return false;
                                }
                                if (player.getEquip('dagongche_attack') || player.getEquip('dagongche_defend')) {
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.countDiscardableCards(player, 'he') > 0;
                                    });
                                } else {
                                    return player.hasEquipableSlot(5);
                                }
                            },
                            content() {
                                'step 0';
                                if (player.getEquip('dagongche_attack') || player.getEquip('dagongche_defend')) {
                                    event.goto(2);
                                    player
                                        .chooseTarget(get.prompt('jxtp_quchong'), '弃置一名其他角色的至多两张牌', function (card, player, target) {
                                            return target != player && target.countDiscardableCards(player, 'he') > 0;
                                        })
                                        .set('ai', function (target) {
                                            let player = _status.event.player,
                                                cards = target.getDiscardableCards(player, 'he');
                                            let att = get.attitude(player, target);
                                            if (att < 0 && target.hasSkillTag('noe')) {
                                                att /= 2;
                                            }
                                            let zheng = [],
                                                fu = [];
                                            for (let i of cards) {
                                                let val = get.value(i, target);
                                                if (val > 0) {
                                                    zheng.push(i);
                                                } else {
                                                    fu.push(i);
                                                }
                                            }
                                            zheng.sort((a, b) => get.value(b, target) - get.value(a, target));
                                            fu.sort((a, b) => get.value(b, target) - get.value(a, target));
                                            zheng = zheng.slice(0, 2);
                                            fu = fu.slice(0, 2);
                                            let eff1 = 0,
                                                eff2 = 0;
                                            for (let i of zheng) {
                                                eff1 += get.value(i, target);
                                            }
                                            for (let i of fu) {
                                                if (get.position(i) == 'e') {
                                                    eff2 += 1 - get.value(i, target);
                                                }
                                            }
                                            return -att * Math.max(eff1, eff2);
                                        });
                                } else {
                                    player.chooseBool(get.prompt('jxtp_quchong'), '装备一张【大攻车·守备】').set('ai', function () {
                                        return true;
                                    });
                                }
                                ('step 1');
                                if (result.bool) {
                                    let card = game.createCard('dagongche_defend', 'diamond', 9);
                                    player.$gain2(card);
                                    player.equip(card);
                                }
                                event.finish();
                                ('step 2');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    player.discardPlayerCard(target, true, 'he', [0, 2]);
                                }
                            },
                            group: ['jxtp_quchong_zhunbei', 'jxtp_quchong_recast', 'jxtp_quchong_begin'],
                            subSkill: {
                                zhunbei: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    preHidden: true,
                                    content() {
                                        'step 0';
                                        player.chooseCard('渠冲:是否重铸任意张牌？', [1, Infinity], lib.filter.cardRecastable, 'he').set('ai', (card) => {
                                            return 6 - get.value(card);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.recast(result.cards);
                                        }
                                    },
                                },
                                recast: {
                                    audio: 'mbquchong',
                                    enable: 'phaseUse',
                                    position: 'he',
                                    filter: (event, player) => player.hasCard((card) => lib.skill.drlt_huairou.filterCard(card, player), lib.skill.drlt_huairou.position),
                                    filterCard: (card, player) => get.type(card) == 'equip' && player.canRecast(card),
                                    check(card) {
                                        if (!_status.event.player.canEquip(card)) {
                                            return 5;
                                        }
                                        return 3 - get.value(card);
                                    },
                                    content() {
                                        player.recast(cards);
                                    },
                                    discard: false,
                                    lose: false,
                                    delay: false,
                                    prompt: '将一张装备牌置入弃牌堆并摸一张牌',
                                    ai: {
                                        order: 10,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                begin: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.name == 'phase' && game.phaseNumber > 0) {
                                            return false;
                                        }
                                        if (player.getEquip('dagongche_attack') || player.getEquip('dagongche_defend')) {
                                            return game.hasPlayer(function (current) {
                                                return current != player && current.countDiscardableCards(player, 'he') > 0;
                                            });
                                        } else {
                                            return player.hasEquipableSlot(5);
                                        }
                                    },
                                    content() {
                                        'step 0';
                                        if (player.getEquip('dagongche_attack') || player.getEquip('dagongche_defend')) {
                                            event.goto(2);
                                            player
                                                .chooseTarget(get.prompt('jxtp_quchong_begin'), '弃置一名其他角色的至多两张牌', function (card, player, target) {
                                                    return target != player && target.countDiscardableCards(player, 'he') > 0;
                                                })
                                                .set('ai', function (target) {
                                                    let player = _status.event.player,
                                                        cards = target.getDiscardableCards(player, 'he');
                                                    let att = get.attitude(player, target);
                                                    if (att < 0 && target.hasSkillTag('noe')) {
                                                        att /= 2;
                                                    }
                                                    let zheng = [],
                                                        fu = [];
                                                    for (let i of cards) {
                                                        let val = get.value(i, target);
                                                        if (val > 0) {
                                                            zheng.push(i);
                                                        } else {
                                                            fu.push(i);
                                                        }
                                                    }
                                                    zheng.sort((a, b) => get.value(b, target) - get.value(a, target));
                                                    fu.sort((a, b) => get.value(b, target) - get.value(a, target));
                                                    zheng = zheng.slice(0, 2);
                                                    fu = fu.slice(0, 2);
                                                    let eff1 = 0,
                                                        eff2 = 0;
                                                    for (let i of zheng) {
                                                        eff1 += get.value(i, target);
                                                    }
                                                    for (let i of fu) {
                                                        if (get.position(i) == 'e') {
                                                            eff2 += 1 - get.value(i, target);
                                                        }
                                                    }
                                                    return -att * Math.max(eff1, eff2);
                                                });
                                        } else {
                                            player.chooseBool(get.prompt('jxtp_quchong_begin'), '装备一张【大攻车·进击】').set('ai', function () {
                                                return true;
                                            });
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            let card = game.createCard('dagongche_attack', 'diamond', 9);
                                            player.$gain2(card);
                                            player.equip(card);
                                        }
                                        event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            let target = result.targets[0];
                                            player.discardPlayerCard(target, true, 'he', [0, 2]);
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_choulve: {
                            audio: 'dchuace',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return event.jxtp_choulve && event.jxtp_choulve.length && player.countCards('hs') > 0;
                            },
                            onChooseToUse(event) {
                                if (game.online || event.jxtp_choulve) {
                                    return;
                                }
                                let list = lib.inpile.filter(function (i) {
                                    return get.type(i) == 'trick' && lib.filter.filterCard({ name: i }, event.player, event);
                                });
                                if (!list.length) {
                                    event.set('jxtp_choulve', list);
                                    return;
                                }
                                const history = _status.globalHistory;
                                let stop = false;
                                for (let i = history.length - 1; i >= 0; i--) {
                                    let evt = history[i];
                                    if (!stop) {
                                        if (evt.isRound) {
                                            stop = true;
                                        }
                                        continue;
                                    } else {
                                        for (let j of evt.useCard) {
                                            list.remove(j.card.name);
                                        }
                                        if (evt.isRound) {
                                            break;
                                        }
                                    }
                                }
                                event.set('jxtp_choulve', list);
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('筹略', [event.jxtp_choulve, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    let player = _status.event.player,
                                        card = { name: button.link[2] };
                                    return player.getUseValue(card);
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'dchuace',
                                        viewAs: { name: links[0][2] },
                                        ai1: (card) => 7 - get.value(card),
                                        filterCard: true,
                                        position: 'hs',
                                        popname: true,
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张手牌当做【' + get.translation(links[0][2]) + '】使用';
                                },
                            },
                            ai: {
                                order: 6,
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['jxtp_choulve_backup', 'jxtp_choulve_damage'],
                            subSkill: {
                                backup: {},
                                damage: {
                                    audio: 'choulve',
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    forced: true,
                                    preHidden: true,
                                    content() {
                                        'step 0';
                                        player.judge(function (result) {
                                            if (get.color(result) == 'red') {
                                                return 2;
                                            }
                                            return -1;
                                        }).judge2 = function (result) {
                                            return result.bool;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.num--;
                                        } else {
                                            player.draw();
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_xunjie: {
                            trigger: {
                                player: ['loseAfter', 'disableEquipAfter', 'enableEquipAfter'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter', 'phaseBefore'],
                            },
                            forced: true,
                            popup: false,
                            init(player) {
                                if (game.online) {
                                    return;
                                }
                                player.removeAdditionalSkill('jxtp_xunjie');
                                let list = [];
                                if (player.getEquip('dagongche_attack')) {
                                    list.push('jxtp_xunjie_gong');
                                }
                                if (player.getEquip('dagongche_defend')) {
                                    list.push('jxtp_xunjie_shou');
                                }
                                if (!player.getEquip('dagongche_attack') && !player.getEquip('dagongche_defend')) {
                                    list.push('jxtp_xunjie_damage');
                                }
                                if (list.length) {
                                    player.addAdditionalSkill('jxtp_xunjie', list);
                                }
                            },
                            content() {
                                player.removeAdditionalSkill('jxtp_xunjie');
                                let list = [];
                                if (player.getEquip('dagongche_attack')) {
                                    list.push('jxtp_xunjie_gong');
                                }
                                if (player.getEquip('dagongche_defend')) {
                                    list.push('jxtp_xunjie_shou');
                                }
                                if (!player.getEquip('dagongche_attack') && !player.getEquip('dagongche_defend')) {
                                    list.push('jxtp_xunjie_damage');
                                }
                                if (list.length) {
                                    player.addAdditionalSkill('jxtp_xunjie', list);
                                }
                            },
                            group: ['jxtp_xunjie_gong', 'jxtp_xunjie_shou', 'jxtp_xunjie_damage'],
                            subSkill: {
                                gong: {
                                    audio: 'mbxunjie',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    content() {
                                        trigger.num += Math.max(1, game.roundNumber);
                                    },
                                },
                                shou: {
                                    audio: 'mbxunjie',
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num--;
                                    },
                                },
                                damage: {
                                    audio: 'mbxunjie',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        player.draw(2);
                                    },
                                },
                            },
                        },
                        jxtp_jiang: {
                            audio: 'sbjiang',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            shaRelated: true,
                            filter(event, player) {
                                if (!(event.card.name == 'juedou' || (event.card.name == 'sha' && get.color(event.card) == 'red'))) {
                                    return false;
                                }
                                return true;
                            },
                            forced: true,
                            group: ['jxtp_jiang_add', 'jxtp_jiang_qiben'],
                            content() {
                                player.draw(2);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') {
                                            return [1, 0.6];
                                        }
                                    },
                                    player(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') {
                                            return [1, 1];
                                        }
                                    },
                                },
                            },
                            subSkill: {
                                add: {
                                    audio: 'sbjiang',
                                    trigger: {
                                        player: 'useCard2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!(event.card.name == 'juedou' || (event.card.name == 'sha' && get.color(event.card) == 'red'))) {
                                            return false;
                                        }
                                        const info = get.info(event.card);
                                        if (info.allowMultiple == false) {
                                            return false;
                                        }
                                        if (event.targets && !info.multitarget) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
                                                })
                                            ) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        const prompt2 = '为' + get.translation(trigger.card) + '额外指定一个目标,然后失去1点体力';
                                        player
                                            .chooseTarget(get.prompt('jxtp_jiang_add'), function (card, player, target) {
                                                if (_status.event.targets.includes(target)) {
                                                    return false;
                                                }
                                                return lib.filter.targetEnabled2(_status.event.card, player, target);
                                            })
                                            .set('prompt2', prompt2)
                                            .set('ai', function (target) {
                                                const trigger = _status.event.getTrigger();
                                                const player = _status.event.player;
                                                let eff = get.effect(target, trigger.card, player, player);
                                                if (player.hasZhuSkill('jxtp_zhiba') && !player.hasMark('jxtp_jiang')) {
                                                    return eff;
                                                }
                                                if (eff + get.effect(player, { name: 'losehp' }, player) / 8 > 0) {
                                                    return eff;
                                                }
                                                return 0;
                                            })
                                            .set('targets', trigger.targets)
                                            .set('card', trigger.card);
                                        ('step 1');
                                        if (result.bool) {
                                            event.targets = result.targets;
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (event.targets) {
                                            trigger.targets.addArray(event.targets);
                                            player.loseHp();
                                            player.changeHujia(1, null, true);
                                        }
                                    },
                                },
                                qiben: {
                                    audio: 'sbjiang',
                                    enable: 'phaseUse',
                                    viewAs: {
                                        name: 'juedou',
                                    },
                                    filterCard: true,
                                    position: 'h',
                                    selectCard: -1,
                                    prompt() {
                                        const player = _status.event.player;
                                        let limit = player.hasMark('jxtp_jiang')
                                            ? game.countPlayer((current) => {
                                                return current.group == 'wu' && current != player;
                                            }) + 1
                                            : 1;
                                        return '出牌阶段限' + get.cnNumber(limit) + '次.你可以将所有手牌当【决斗】使用';
                                    },
                                    filter(event, player) {
                                        let limit = player.hasMark('jxtp_jiang')
                                            ? game.countPlayer((current) => {
                                                return current.group == 'wu';
                                            }) + 1
                                            : 1;
                                        if ((player.getStat('skill').jxtp_jiang_qiben || 0) >= limit) {
                                            return false;
                                        }
                                        const hs = player.getCards('h');
                                        if (!hs.length) {
                                            return false;
                                        }
                                        for (let i = 0; i < hs.length; i++) {
                                            const mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                            if (mod2 === false) {
                                                return false;
                                            }
                                        }
                                        return event.filterCard({ name: 'juedou' }, player);
                                    },
                                    ai: {
                                        order: 0.001,
                                        nokeep: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (tag === 'nokeep') {
                                                if (arg && (!arg.card || arg.card.name !== 'tao')) {
                                                    return false;
                                                }
                                                let limit = player.hasMark('jxtp_jiang')
                                                    ? game.countPlayer((current) => {
                                                        return current.group == 'wu' && current != player;
                                                    }) + 1
                                                    : 1;
                                                return player.isPhaseUsing() && (player.getStat('skill').jxtp_jiang_qiben || 0) < limit && player.hasCard((card) => card.name != 'tao', 'h');
                                            }
                                        },
                                        wuxie(target, card, player, viewer, status) {
                                            if (player === game.me && get.attitude(viewer, player._trueMe || player) > 0) {
                                                return 0;
                                            }
                                            if (status * get.attitude(viewer, target) * get.effect(target, card, player, target) >= 0) {
                                                return 0;
                                            }
                                        },
                                        basic: {
                                            order: 5,
                                            useful: 1,
                                            value: 5.5,
                                        },
                                        result: {
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
                                                if (get.damageEffect(target, player, target) >= 0) {
                                                    return 0;
                                                }
                                                let pd = get.damageEffect(player, target, player),
                                                    att = get.attitude(player, target);
                                                if (att > 0 && get.damageEffect(target, player, player) > pd) {
                                                    return 0;
                                                }
                                                const ts = target.mayHaveSha(player, 'respond', null, 'count'),
                                                    ps = player.mayHaveSha(player, 'respond', null, 'count');
                                                if (ts < 1 && ts << 3 < Math.pow(player.hp, 2)) {
                                                    return 0;
                                                }
                                                if (att > 0) {
                                                    if (ts < 1) {
                                                        return 0;
                                                    }
                                                    return -2;
                                                }
                                                if (ts - ps + Math.exp(0.8 - player.hp) < 1) {
                                                    return -ts;
                                                }
                                                if (pd >= 0) {
                                                    return pd / get.attitude(player, player);
                                                }
                                                return -2 - ts;
                                            },
                                            target(player, target, card) {
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
                                                    return -2;
                                                }
                                                const td = get.damageEffect(target, player, target);
                                                if (td >= 0) {
                                                    return td / get.attitude(target, target);
                                                }
                                                let pd = get.damageEffect(player, target, player),
                                                    att = get.attitude(player, target);
                                                if (att > 0 && get.damageEffect(target, player, player) > pd) {
                                                    return -2;
                                                }
                                                const ts = target.mayHaveSha(player, 'respond', null, 'count'),
                                                    ps = player.mayHaveSha(player, 'respond', null, 'count');
                                                if (ts < 1) {
                                                    return -1.5;
                                                }
                                                if (att > 0) {
                                                    return -2;
                                                }
                                                if (ts - ps < 1) {
                                                    return -2 - ts;
                                                }
                                                if (pd >= 0) {
                                                    return -1;
                                                }
                                                return -ts;
                                            },
                                        },
                                        tag: {
                                            respond: 2,
                                            respondSha: 2,
                                            damage: 1,
                                        },
                                    },
                                },
                            },
                        },
                        jxtp_yingzi: {
                            audio: 'sbyingzi',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            getNum(player) {
                                return (player.countCards('h') >= 1) + (player.hp >= 1) + (player.countCards('e') >= 1) + (player.getDamagedHp() >= 1) + (player.hujia >= 1);
                            },
                            filter(event, player) {
                                return !event.numFixed && lib.skill.sbyingzi.getNum(player) > 0;
                            },
                            content() {
                                let num = lib.skill.jxtp_yingzi.getNum(player);
                                trigger.num += num;
                                player.addTempSkill('jxtp_yingzi_limit');
                                player.addMark('jxtp_yingzi_limit', num, false);
                            },
                            ai: {
                                threaten: 2,
                            },
                            subSkill: {
                                limit: {
                                    charlotte: true,
                                    forced: true,
                                    marktext: '英',
                                    intro: {
                                        content: '本回合手牌上限+#',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + player.countMark('jxtp_yingzi_limit');
                                        },
                                    },
                                },
                            },
                        },
                        jxtp_yinghun: {
                            mod: {
                                aiOrder(player, card, num) {
                                    if (num > 0 && _status.event && _status.event.type == 'phase' && get.tag(card, 'recover')) {
                                        if (player.needsToDiscard()) {
                                            return num / 3;
                                        }
                                        return 0;
                                    }
                                },
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('jxtp_yinghun'), function (card, player, target) {
                                    return player != target;
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.num = player.maxHp;
                                    event.target = result.targets[0];
                                    if (event.num == 1) {
                                        event.directcontrol = true;
                                    } else {
                                        const str1 = '摸' + get.cnNumber(event.num, true) + '弃' + get.cnNumber(player.getDamagedHp(), true);
                                        const str2 = '摸' + get.cnNumber(player.hp, true) + '弃' + get.cnNumber(event.num, true);
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
                                    event.target.chooseToDiscard(Math.max(0, player.getDamagedHp()), true, 'he');
                                } else {
                                    event.target.draw(Math.max(0, player.hp));
                                    event.target.chooseToDiscard(event.num, true, 'he');
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (
                                            get.tag(card, 'damage') &&
                                            get.itemtype(player) === 'player' &&
                                            target.hp >
                                            (player.hasSkillTag('damageBonus', true, {
                                                target: target,
                                                card: card,
                                            })
                                                ? 2
                                                : 1)
                                        ) {
                                            return [1, 1];
                                        }
                                    },
                                },
                                threaten(player, target) {
                                    return Math.max(0.5, target.getDamagedHp() / 2);
                                },
                                maixie: true,
                            },
                        },
                        jxtp_hunzi: {
                            audio: 'sbhunzi',
                            trigger: {
                                player: 'dying',
                            },
                            juexingji: true,
                            forced: true,
                            content() {
                                'step 0';
                                player.removeSkill('jxtp_hunzi');
                                event.targets = game
                                    .filterPlayer((current) => {
                                        return current.group == 'wu';
                                    })
                                    .sortBySeat(_status.currentPhase);
                                let num = event.targets.length;
                                player.recover(num + 1);
                                ('step 1');
                                player.gainMaxHp();
                                player.changeHujia(2, null, true);
                                ('step 2');
                                player.draw(4);
                                ('step 3');
                                player.addSkill('jxtp_yingzi');
                                player.addSkill('jxtp_yinghun');
                            },
                        },
                        jxtp_zhiba: {
                            audio: 'sbzhiba',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            zhuSkill: true,
                            filter(event, player) {
                                return (
                                    player.hasZhuSkill('jxtp_zhiba') &&
                                    game.hasPlayer(function (current) {
                                        return current != player && current.group == 'wu';
                                    })
                                );
                            },
                            content() {
                                let card = get.cardPile(function (card) {
                                    return card.name == 'juedou';
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                }
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target(player, target) {
                                        if (target.getEquip('bagua') || target.getEquip('rewrite_bagua')) {
                                            return 0;
                                        }
                                        const hs = player.countCards('h', function (card) {
                                            return ['sha', 'juedou'].includes(card.name) && get.effect(target, card, player, player) != 0;
                                        });
                                        const ts = target.hp;
                                        if (hs >= ts && ts > 1) {
                                            return -1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        jxtp_fencheng: {
                            enable: 'phaseUse',
                            audio: 'fencheng',
                            filterTarget: true,
                            selectTarget: [1, Infinity],
                            content() {
                                'step 0';
                                player.awakenSkill('jxtp_fencheng');
                                ('step 1');
                                target.chooseControl('弃牌', '受伤').ai = function () {
                                    if (target.hasSkillTag('nofire')) {
                                        return '受伤';
                                    }
                                    if (target.countCards('h') > 7) {
                                        return '受伤';
                                    }
                                    if (target.countCards('h', { name: 'tao' }) > 1) {
                                        return '受伤';
                                    }
                                    if (target.hp > 3) {
                                        return '受伤';
                                    }
                                    return '弃牌';
                                };
                                ('step 2');
                                if (result.control == '弃牌') {
                                    if (target.countCards('he') > 3) {
                                        target.addTempSkill('baiban', { player: 'phaseEnd' });
                                        target.markSkillCharacter('jxtp_fencheng', player, '弃城', '弃城而逃');
                                        target.addSkill('jxtp_qicheng');
                                        target.discard(target.getCards('he'));
                                    } else {
                                        const damage = [1];
                                        target.damage(damage.randomGet(), 'fire');
                                        target.markSkillCharacter('jxtp_fencheng', player, '灼伤', '被火灼伤');
                                        target.addSkill('jxtp_zhuoshang');
                                    }
                                } else {
                                    const damage = [1];
                                    target.damage(damage.randomGet(), 'fire');
                                    target.addSkill('jxtp_zhuoshang');
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player, 'fire'));
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        jxtp_juece: {
                            audio: 'xinjuece',
                            trigger: {
                                global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (_status.currentPhase != player) {
                                    return false;
                                }
                                return game.hasPlayer((current) => {
                                    if (current == player || current.countCards('h')) {
                                        return false;
                                    }
                                    let evt = event.getl(current);
                                    return evt && evt.hs && evt.hs.length;
                                });
                            },
                            check(event, player) {
                                return get.damageEffect(event.player, player, player) > 0;
                            },
                            content() {
                                'step 0';
                                let targets = game.filterPlayer((current) => {
                                    if (current == player || current.countCards('h')) {
                                        return false;
                                    }
                                    let evt = trigger.getl(current);
                                    return evt && evt.hs && evt.hs.length;
                                });
                                event.targets = targets;
                                ('step 1');
                                let target = event.targets.shift();
                                event.target = target;
                                player.chooseBool(get.prompt2('jxtp_juece', target)).set('ai', () => {
                                    return get.damageEffect(_status.event.parent.target, _status.event.player, _status.event.player) >= 0;
                                });
                                ('step 2');
                                if (result.bool) {
                                    target.damage('fire');
                                }
                                ('step 3');
                                if (targets.length) {
                                    event.goto(1);
                                }
                            },
                            group: ['jxtp_juece_player', 'jxtp_juece_target'],
                            subSkill: {
                                player: {
                                    audio: 'rejuece',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return (
                                                current != player &&
                                                current.getHistory('lose', function (evt) {
                                                    return evt.cards2 && evt.cards2.length;
                                                }).length
                                            );
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('jxtp_juece_player'), '对一名本回合失去过牌的其他角色造成1点火焰伤害', function (card, player, target) {
                                                return _status.event.targets.includes(target);
                                            })
                                            .set(
                                                'targets',
                                                game.filterPlayer(function (current) {
                                                    return (
                                                        current != player &&
                                                        current.getHistory('lose', function (evt) {
                                                            return evt.cards2 && evt.cards2.length;
                                                        }).length
                                                    );
                                                })
                                            )
                                            .set('ai', function (target) {
                                                const player = _status.event.player;
                                                return get.damageEffect(target, player, player);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            let target = result.targets[0];
                                            target.damage('fire');
                                        }
                                    },
                                },
                                target: {
                                    audio: 'juece',
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    filter(event, player) {
                                        if (event.player.countCards('h') == 0 && event.player.isIn()) {
                                            return true;
                                        }
                                        return false;
                                    },
                                    preHidden: true,
                                    check(event, player) {
                                        return get.attitude(player, event.player) > 2;
                                    },
                                    content() {
                                        trigger.player.damage(player, 'fire');
                                    },
                                },
                            },
                        },
                        jxtp_zhuoshang: {
                            forced: true,
                            group: ['jxtp_zhuoshang_discard', 'jxtp_zhuoshang_damage'],
                            subSkill: {
                                discard: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.countCards('he') == 0) {
                                            return false;
                                        }
                                        if (get.type(event.card) == 'basic') {
                                            return true;
                                        }
                                        if (get.type(event.card) == 'equip') {
                                            return true;
                                        }
                                        return get.type(event.card) == 'trick';
                                    },
                                    autodelay: true,
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard(true, 'he');
                                        ('step 1');
                                        if (player != _status.currentPhase && player.countCards('he') > 0) {
                                            player.chooseToDiscard(true, 'he');
                                        }
                                    },
                                },
                                damage: {
                                    trigger: {
                                        player: 'damageBegin3',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.hasNature('fire');
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        jxtp_qicheng: {
                            charlotte: true,
                            mod: {
                                maxHandcard: () => 1,
                            },
                        },
                        jxtp_mieji: {
                            audio: 'remieji',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card, player) {
                                return get.color(card) == 'black' || get.color(card) == 'red';
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he') > 0;
                            },
                            discard: false,
                            delay: false,
                            loseTo: 'cardPile',
                            insert: true,
                            visible: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.showCards(cards);
                                ('step 1');
                                if (
                                    !target.countCards('he', function (card) {
                                        if (get.type2(card) == 'trick') {
                                            return true;
                                        }
                                        return lib.filter.cardDiscardable(card, target, 'jxtp_mieji');
                                    })
                                ) {
                                    event.finish();
                                } else {
                                    target
                                        .chooseCard('he', true, function (card, player) {
                                            if (get.type2(card) == 'trick') {
                                                return true;
                                            }
                                            return lib.filter.cardDiscardable(card, player, 'jxtp_mieji');
                                        })
                                        .set('prompt', '选择交给' + get.translation(player) + '一张锦囊牌,或弃置一张非锦囊牌并失去1点体力');
                                }
                                ('step 2');
                                if (result.cards && result.cards.length) {
                                    if (get.type2(result.cards[0]) == 'trick') {
                                        target.give(result.cards, player);
                                        event.finish();
                                    } else {
                                        target.discard(result.cards);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                target.loseHp();
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        jxtp_yangwei: {
                            audio: 'sbyangwei',
                            enable: 'phaseUse',
                            forced: true,
                            filter(event, player) {
                                return player.countMark('jxtp_yangwei_use') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseControl('选项一', '选项二', '背水!', 'cancel2').set('choiceList', ['摸两张牌,本阶段内使用【杀】的次数上限+1', '视为使用一张【决斗】', '背水!失去1点体力上限并依次执行上述所有选项']);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    game.log(player, '选择了', '#g【扬威】', '的', '#y' + result.control);
                                    if (result.index % 2 == 0) {
                                        player.draw(2);
                                        player.addTempSkill('jxtp_yangwei_add', 'phaseUseEnd');
                                        player.addMark('jxtp_yangwei_add', 1);
                                    }
                                    if (result.index > 0) {
                                        player.chooseUseTarget('决斗谁？', { name: 'juedou' }, false);
                                    }
                                    if (result.index == 2) {
                                        player.loseMaxHp();
                                        player.addMark('yangwei_mark', 1);
                                    }
                                }
                                ('step 2');
                                player.removeMark('jxtp_yangwei_use', 1);
                                ('step 3');
                                if (player.countMark('yangwei_mark') > 0) {
                                    player.addTempSkill('jxtp_yangwei_damage', 'phaseUseEnd');
                                    player.removeMark('yangwei_mark', 1);
                                }
                            },
                            group: ['jxtp_yangwei_use'],
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('jxtp_yangwei_use') < 1;
                                    },
                                    content() {
                                        player.addMark('jxtp_yangwei_use', 1);
                                    },
                                    marktext: '威',
                                    intro: {
                                        content: 'mark',
                                    },
                                },
                                add: {
                                    charlotte: true,
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') {
                                                return num + player.countMark('jxtp_yangwei_add');
                                            }
                                        },
                                    },
                                },
                                damage: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    forced: true,
                                    content() {
                                        player.addMark('jxtp_yangwei_use', 1);
                                        player.removeSkill('jxtp_yangwei_damage');
                                    },
                                },
                            },
                        },
                        jxtp_yaowu: {
                            trigger: {
                                source: 'damageSource',
                            },
                            audio: 'new_reyaowu',
                            forced: true,
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) {
                                    return false;
                                }
                                return event.player != player && event.player.isIn();
                            },
                            content() {
                                player.draw();
                            },
                            group: ['jxtp_yaowu_damage', 'jxtp_yaowu_red'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    audio: 'new_reyaowu',
                                    forced: true,
                                    filter(event, player) {
                                        return get.color(event.card) != 'red' || (event.source && event.source.isIn());
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                red: {
                                    trigger: {
                                        player: 'damageBegin3',
                                    },
                                    audio: 'new_reyaowu',
                                    filter(event) {
                                        if (event.card) {
                                            if (get.color(event.card) == 'red') {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    check() {
                                        return false;
                                    },
                                    content() {
                                        player.gainMaxHp();
                                    },
                                },
                            },
                        },
                        jxtp_jieyuan: {
                            group: ['jxtp_jieyuan_more', 'jxtp_jieyuan_less', 'jxtp_jieyuan_juedou'],
                            subSkill: {
                                more: {
                                    audio: 'jieyuan_more',
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        return player.countCards('he', { color: 'black' }) > 0 && player != event.player;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard('he', '弃置一张黑色牌令伤害+1', { color: 'black' });
                                        ('step 1');
                                        if (result.bool) {
                                            player.draw();
                                            trigger.num++;
                                        }
                                    },
                                },
                                less: {
                                    audio: 'jieyuan_less',
                                    trigger: {
                                        player: 'damageBegin2',
                                    },
                                    filter(event, player) {
                                        return player.countCards('he', { color: 'red' }) > 0 && player != event.source;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard('he', '弃置一张红色牌令伤害-1', { color: 'red' });
                                        ('step 1');
                                        if (result.bool) {
                                            player.draw();
                                            trigger.num--;
                                        }
                                    },
                                },
                                juedou: {
                                    audio: 'jieyuan_more',
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        if (event._notrigger.includes(event.player)) {
                                            return false;
                                        }
                                        return event.player != player && event.player.isIn() && event.player.countGainableCards(player, 'hej') > 0;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .gainPlayerCard(get.prompt('jieyuan', trigger.player), trigger.player, 'hej', 'visibleMove')
                                            .set('ai', function (button) {
                                                let player = _status.event.player,
                                                    target = _status.event.target;
                                                if (get.attitude(player, target) > 0 && get.position(button.link) === 'j') {
                                                    return 4 + get.value(button.link);
                                                }
                                                if (get.type(button.link) === 'equip') {
                                                    return _status.event.juedou;
                                                }
                                                return 3;
                                            })
                                            .set(
                                                'juedou',
                                                (() => {
                                                    if (
                                                        get.attitude(player, trigger.player) > 0 &&
                                                        game.hasPlayer(function (current) {
                                                            return player.canUse({ name: 'juedou' }, current) && current != player && get.effect(current, { name: 'juedou' }, player, _status.event.player) > 2;
                                                        })
                                                    ) {
                                                        return 5;
                                                    }
                                                    if (
                                                        game.hasPlayer(function (current) {
                                                            return player.canUse({ name: 'juedou' }, current) && current != player && get.effect(current, { name: 'juedou' }, player, _status.event.player) < 0;
                                                        })
                                                    ) {
                                                        return 1;
                                                    }
                                                    return 4;
                                                })()
                                            );
                                        ('step 1');
                                        if (result.bool) {
                                            if (get.type(result.cards[0]) != 'equip') {
                                                trigger.player.draw();
                                                event.finish();
                                            } else {
                                                if (
                                                    !game.hasPlayer(function (current) {
                                                        return current != player && player.canUse('juedou', current);
                                                    })
                                                ) {
                                                    event.finish();
                                                    return;
                                                }
                                                trigger.player
                                                    .chooseTarget(
                                                        true,
                                                        function (card, player, target) {
                                                            let evt = _status.event.parent;
                                                            return evt.player.canUse({ name: 'juedou' }, target) && target != _status.event.player;
                                                        },
                                                        '请选择一名角色,视为' + get.translation(player) + '对其使用【决斗】'
                                                    )
                                                    .set('ai', function (target) {
                                                        let evt = _status.event.parent;
                                                        return get.effect(target, { name: 'juedou' }, evt.player, _status.event.player) - 2;
                                                    });
                                            }
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.targets) {
                                            player.chooseUseTarget('决斗谁？', { name: 'juedou' }, false);
                                        }
                                    },
                                    ai: {
                                        halfneg: true,
                                    },
                                },
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.5,
                            },
                        },
                        jxtp_fenxin_fail: {
                            audio: 'fenxin',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                let i = 0;
                                let list = [];
                                while (i++ < 2) {
                                    let card = get.cardPile(function (card) {
                                        if (get.color(card) != 'black') {
                                            return false;
                                        }
                                        return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
                                    });
                                    if (card) {
                                        list.push(card);
                                    }
                                }
                                if (!list.length) {
                                    event.finish();
                                    return;
                                }
                                event.list = list;
                                player.gain(event.list, 'gain2');
                            },
                            group: ['jxtp_fenxin_fail_lose', 'jxtp_fenxin_fail_jieshu'],
                            subSkill: {
                                lose: {
                                    audio: 'fenxin',
                                    trigger: {
                                        player: 'phaseJieshuEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getHistory('useCard').length && player.getHistory('sourceDamage').length == 0;
                                    },
                                    content() {
                                        player.loseHp();
                                    },
                                },
                                jieshu: {
                                    audio: 'fenxin',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    content() {
                                        let i = 0;
                                        let list = [];
                                        while (i++ < 2) {
                                            let card = get.cardPile(function (card) {
                                                if (get.color(card) != 'red') {
                                                    return false;
                                                }
                                                return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
                                            });
                                            if (card) {
                                                list.push(card);
                                            }
                                        }
                                        if (!list.length) {
                                            event.finish();
                                            return;
                                        }
                                        event.list = list;
                                        player.gain(event.list, 'gain2');
                                    },
                                },
                            },
                        },
                        jxtp_fenxin_win: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                let i = 0;
                                let list = [];
                                while (i++ < 1) {
                                    let card = get.cardPile(function (card) {
                                        if (get.color(card) != 'black') {
                                            return false;
                                        }
                                        return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
                                    });
                                    if (card) {
                                        list.push(card);
                                    }
                                }
                                if (!list.length) {
                                    event.finish();
                                    return;
                                }
                                event.list = list;
                                player.gain(event.list, 'gain2');
                            },
                            group: ['jxtp_fenxin_win_jieshu'],
                            subSkill: {
                                jieshu: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    content() {
                                        let i = 0;
                                        let list = [];
                                        while (i++ < 1) {
                                            let card = get.cardPile(function (card) {
                                                if (get.color(card) != 'red') {
                                                    return false;
                                                }
                                                return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
                                            });
                                            if (card) {
                                                list.push(card);
                                            }
                                        }
                                        if (!list.length) {
                                            event.finish();
                                            return;
                                        }
                                        event.list = list;
                                        player.gain(event.list, 'gain2');
                                    },
                                },
                            },
                        },
                        jxtp_fenxin2: {
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            content() {
                                player.addSkill('jxtp_fenxin_win');
                                player.removeSkill('jxtp_fenxin1');
                            },
                        },
                        jxtp_fenxin1: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            charlotte: true,
                            content() {
                                player.loseHp();
                                player.addSkill('jxtp_fenxin_fail');
                                player.removeSkill('jxtp_fenxin1');
                            },
                            group: 'jxtp_fenxin2',
                        },
                        jxtp_fenxin: {
                            enable: 'phaseUse',
                            audio: 'fenxin',
                            content() {
                                player.addTempSkill('jxtp_fenxin3');
                                player.chooseUseTarget('###是否发动【焚心】？###视为使用一张没有距离限制且无视防具的【刺杀】', { name: 'sha', nature: 'stab' }, false, 'nodistance');
                                player.addSkill('jxtp_fenxin1');
                                player.removeSkill('jxtp_fenxin');
                            },
                            ai: {
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                            group: ['jxtp_fenxin_lose', 'jxtp_fenxin_zhunbei', 'jxtp_fenxin_jieshu'],
                            subSkill: {
                                lose: {
                                    audio: 'fenxin',
                                    trigger: {
                                        player: 'phaseJieshuEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getHistory('useCard').length && player.getHistory('sourceDamage').length == 0;
                                    },
                                    content() {
                                        player.loseHp();
                                    },
                                },
                                zhunbei: {
                                    audio: 'fenxin',
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    content() {
                                        let i = 0;
                                        let list = [];
                                        while (i++ < 1) {
                                            let card = get.cardPile(function (card) {
                                                if (get.color(card) != 'black') {
                                                    return false;
                                                }
                                                return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
                                            });
                                            if (card) {
                                                list.push(card);
                                            }
                                        }
                                        if (!list.length) {
                                            event.finish();
                                            return;
                                        }
                                        event.list = list;
                                        player.gain(event.list, 'gain2');
                                    },
                                },
                                jieshu: {
                                    audio: 'fenxin',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    content() {
                                        let i = 0;
                                        let list = [];
                                        while (i++ < 1) {
                                            let card = get.cardPile(function (card) {
                                                if (get.color(card) != 'red') {
                                                    return false;
                                                }
                                                return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
                                            });
                                            if (card) {
                                                list.push(card);
                                            }
                                        }
                                        if (!list.length) {
                                            event.finish();
                                            return;
                                        }
                                        event.list = list;
                                        player.gain(event.list, 'gain2');
                                    },
                                },
                            },
                        },
                        jxtp_fenxin3: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            charlotte: true,
                            forced: true,
                            filter(event, player) {
                                if (event.target.hasSkill('jxtp_pohuai')) {
                                    return false;
                                }
                                return event.card && event.card.name == 'sha' && event.card.nature == 'stab';
                            },
                            prompt2(event, player) {
                                return '令' + get.translation(event.target) + '的防具失效直到回合结束';
                            },
                            content() {
                                player.line(trigger.target, 'green');
                                trigger.target.addTempSkill('jxtp_pohuai');
                            },
                            ai: {
                                unequip2: true,
                            },
                        },
                        jxtp_beige: {
                            audio: 'beige',
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                if (player.countCards('he') == 0) {
                                    return false;
                                }
                                return event.source && event.player.isIn() && event.source != player && event.source != event.player;
                            },
                            forced: true,
                            checkx(event, player) {
                                const att1 = get.attitude(player, event.player);
                                const att2 = get.attitude(player, event.source);
                                return att1 > 0 && att2 <= 0;
                            },
                            content() {
                                'step 0';
                                if (trigger.player.countMark('jxtp_chenqing_haogan') >= 1) {
                                    let next = player.chooseToDiscard('he', get.prompt2('jxtp_beige', '伤害来源', trigger.player));
                                    const check = lib.skill.jxtp_beige.checkx(trigger, player);
                                    next.set('ai', function (card) {
                                        if (_status.event.goon) {
                                            return 8 - get.value(card);
                                        }
                                        return 0;
                                    });
                                    next.set('goon', check);
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.judge();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                switch (result.suit) {
                                    case 'heart':
                                        player.draw(2);
                                        trigger.player.gainMaxHp();
                                        trigger.player.recover(trigger.num);
                                        break;
                                    case 'diamond':
                                        player.draw(2);
                                        trigger.player.draw(3);
                                        break;
                                    case 'club':
                                        trigger.source.chooseToDiscard('he', 2, true);
                                        trigger.source.loseHp(trigger.num);
                                        break;
                                    case 'spade':
                                        trigger.source.chooseToDiscard('he', 2, true);
                                        trigger.source.addTempSkill('fengyin');
                                        trigger.source.addMark('jxtp_beige_handcard', 2);
                                        break;
                                } //QQQ
                            },
                            ai: {
                                expose: 0.3,
                            },
                            group: ['jxtp_beige_mark', 'jxtp_beige_die'],
                            subSkill: {
                                mark: {
                                    trigger: {
                                        global: 'gameStart',
                                    },
                                    forced: true,
                                    logTarget(event, player) {
                                        return game.filterPlayer((current) => !current.hasMark('jxtp_beige_handcard'));
                                    },
                                    content() {
                                        let list = game.filterPlayer((current) => !current.hasMark('jxtp_beige_handcard')).sortBySeat();
                                        for (let i of list) {
                                            i.addSkill('jxtp_beige_handcard');
                                        }
                                    },
                                },
                                handcard: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - player.countMark('jxtp_beige_handcard');
                                        },
                                    },
                                    intro: {
                                        content: '手牌上限-#',
                                    },
                                },
                                die: {
                                    audio: 'duanchang',
                                    trigger: {
                                        global: 'die',
                                    },
                                    filter(event, player) {
                                        return event.source && event.player.hasMark('jxtp_chenqing_haogan') && event.source != player;
                                    },
                                    prompt: '令伤害来源失去全部技能',
                                    content() {
                                        trigger.source.clearSkills();
                                        player.addMark('beifen', 2);
                                        player.addTempSkill('jxtp_beifen', { player: 'phaseEnd' });
                                    },
                                },
                            },
                        },
                        jxtp_beifen: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.countMark('beifen');
                                },
                                targetInRange(card, player) {
                                    return true;
                                },
                                cardUsable(card, player) {
                                    return Infinity;
                                },
                            },
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num += player.countMark('beifen');
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        jxtp_chenqing: {
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            audio: 'chenqing',
                            forced: true,
                            filter(event, player) {
                                return event.player.hasMark('jxtp_chenqing_haogan');
                            },
                            content() {
                                'step 0';
                                player.draw();
                                player.chooseCard({
                                    prompt: get.prompt('jxtp_chenqing'),
                                    prompt2: '你摸一张牌并选择是:交给当前回合角色一张手牌令其获得【默识】;否:其摸4张牌,然后弃置4张牌',
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.give(result.cards, _status.currentPhase);
                                    _status.currentPhase.addTempSkill('jxtp_mozhi');
                                } else {
                                    _status.currentPhase.draw(4);
                                    _status.currentPhase.chooseToDiscard(4, true, 'he');
                                }
                            },
                            group: ['jxtp_chenqing_haogan', 'jxtp_chenqing_egan'],
                            subSkill: {
                                haogan: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    maxMarkCount: 1,
                                    content() {
                                        'step 0';
                                        player.chooseTarget([1, game.countPlayer()], get.prompt('jxtp_chenqing_haogan'), '选择任意名角色获得你的<好感>').set('ai', function (target) {
                                            return get.attitude(_status.event.player, target);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            let targets = result.targets;
                                            targets.add(player);
                                            targets.sortBySeat();
                                            game.countPlayer(function (current) {
                                                if (!targets.includes(current)) {
                                                    current.removeMark('jxtp_chenqing_haogan', 1);
                                                } else {
                                                    current.addMark('jxtp_chenqing_haogan', 1, false);
                                                }
                                            });
                                        }
                                    },
                                },
                                egan: {
                                    trigger: {
                                        global: 'phaseUseBegin',
                                    },
                                    audio: 'dcbeifen',
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player.hasMark('jxtp_chenqing_haogan')) {
                                            return false;
                                        }
                                        return player.countCards('h') > 0 && _status.currentPhase.countCards('h') > _status.currentPhase.maxHp;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCard({
                                            prompt: get.prompt('jxtp_chenqing'),
                                            prompt2: '你弃置一张牌并令其获得【霜笳】;否:你获得其1张牌',
                                            filterCard: lib.filter.cardDiscardable,
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.discard(result.cards);
                                            _status.currentPhase.addTempSkill('jxtp_shuangjia');
                                        } else {
                                            player.gainPlayerCard(_status.currentPhase, 1, 'he', true);
                                        }
                                    },
                                },
                            },
                        },
                        jxtp_mozhi: {
                            audio: 'mozhi',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getHistory('useCard').length <= player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.draw(player.getHistory('useCard').length);
                                ('step 1');
                                if (player.getHistory('useCard').length == player.hp) {
                                    player.recover();
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        jxtp_shuangjia: {
                            audio: 'dcshuangjia',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                let evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) {
                                    return false;
                                }
                                let num = player.getHistory('useCard', (evtx) => evtx.getParent('phaseUse') == evt).length;
                                return num == player.maxHp;
                            },
                            content() {
                                player.discard(player.getCards('he'));
                                let evt = _status.event;
                                for (let i = 0; i < 10; i++) {
                                    if (evt && evt.getParent) {
                                        evt = evt.parent;
                                    }
                                    if (evt.name == 'phaseUse') {
                                        evt.skipped = true;
                                        break;
                                    }
                                }
                            },
                        },
                        jxtp_zhouxian: {
                            audio: 'zhouxian',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.player != player && get.tag(event.card, 'damage');
                            },
                            forced: true,
                            logTarget: 'player',
                            async content(event, map) {
                                let player = map.player,
                                    trigger = map.trigger,
                                    target = trigger.player;
                                let cards = get.cards(1);
                                await game.cardsDiscard(cards);
                                player.showCards(cards, get.translation(player) + '发动了【州贤】');
                                let result = await target
                                    .chooseToDiscard(2, 'h', '州贤:弃置两张与展示牌相同类别的手牌,或令此牌对' + get.translation(player) + '无效', (card, player) => {
                                        return _status.event.cards.some((cardx) => get.type2(cardx) == get.type2(card));
                                    })
                                    .set('cards', cards)
                                    .set('ai', (card) => {
                                        if (!_status.event.goon) {
                                            return 0;
                                        }
                                        return 7.5 - get.value(card);
                                    })
                                    .set('goon', get.effect(player, trigger.card, target, target) > 0);
                                if (!result.bool) {
                                    trigger.parent.excluded.add(player);
                                }
                            },
                            ai: {
                                effect: {
                                    target_use(card, player, target, current) {
                                        if (get.tag(card, 'damage') && get.attitude(player, target) < 0 && target != player) {
                                            if (_status.event.name == 'jxtp_zhouxian') {
                                                return;
                                            }
                                            if (get.attitude(player, target) > 0 && current < 0) {
                                                return 'zerotarget';
                                            }
                                            let bs = player.getDiscardableCards(player, 'he');
                                            bs.remove(card);
                                            if (card.cards) {
                                                bs.removeArray(card.cards);
                                            } else {
                                                bs.removeArray(ui.selected.cards);
                                            }
                                            const cardx = Array.from(ui.cardPile.childNodes).slice(0, 3);
                                            bs = bs.filter((i) => cardx.some((j) => get.type2(j) == get.type2(i)));
                                            if (!bs.length) {
                                                return 'zerotarget';
                                            }
                                            if (bs.length <= 2) {
                                                if (bs.some((bsi) => get.value(bsi) < 7)) {
                                                    return [1, 0, 1, -0.5];
                                                }
                                                return [1, 0, 0.3, 0];
                                            }
                                            return [1, 0, 1, -0.5];
                                        }
                                    },
                                },
                            },
                            group: ['jxtp_zhouxian_discard'],
                            subSkill: {
                                discard: {
                                    audio: 'dccongshi',
                                    trigger: {
                                        player: 'phaseDiscardBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('h') > 1 && game.countPlayer() > 2;
                                    },
                                    content() {
                                        'step 0';
                                        const ai2 = function (target) {
                                            const player = _status.event.player;
                                            if (get.attitude(player, target) <= 0) {
                                                return 0;
                                            }
                                            let list = [null, 'juedou'].concat(lib.inpile_nature);
                                            if (target.hasSkill('ayato_zenshen')) {
                                                list.push('kami');
                                            }
                                            let num = Math.max.apply(
                                                Math,
                                                list.map(function (i) {
                                                    if (i == 'juedou') {
                                                        return target.getUseValue({ name: 'juedou' }, false);
                                                    }
                                                    let card = { name: 'sha', nature: i };
                                                    return target.getUseValue(card, false);
                                                })
                                            );
                                            if (target.hasSkillTag('nogain')) {
                                                num /= 4;
                                            }
                                            return num;
                                        };
                                        player.chooseCardTarget({
                                            prompt: get.prompt2('jxtp_zhouxian_discard'),
                                            filterCard: true,
                                            selectCard: [0, Infinity],
                                            position: 'he',
                                            filterTarget: lib.filter.notMe,
                                            goon: game.hasPlayer(function (current) {
                                                return current != player && ai2(player, current) > 0;
                                            }),
                                            ai1(card) {
                                                if (!_status.event.goon) {
                                                    return 0;
                                                }
                                                return 7 - get.value(card);
                                            },
                                            ai2: ai2,
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            let target = result.targets[0];
                                            event.target = target;
                                            player.give(result.cards, target);
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        player.recover();
                                    },
                                    ai: {
                                        expose: 0.17,
                                        fireAttack: true,
                                        skillTagFilter(player) {
                                            return player.hasFriend();
                                        },
                                    },
                                },
                            },
                        },
                        jxtp_yingtu: {
                            audio: 'dccongshi',
                            trigger: {
                                global: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (_status.currentPhase == player) {
                                    return false;
                                }
                                return _status.currentPhase?.countCards('he') && get.type(event.card, null, false) == 'equip' && event.player.isMaxEquip();
                            },
                            content() {
                                let target = _status.currentPhase;
                                player.gainPlayerCard(target, true, 'he');
                            },
                            group: ['jxtp_yingtu_draw'],
                            subSkill: {
                                draw: {
                                    audio: 'dcyingtu',
                                    trigger: {
                                        global: ['gainAfter', 'loseAsyncAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (_status.currentPhase == player) {
                                            return false;
                                        }
                                        let evt = event.getParent('phaseDraw');
                                        return (
                                            _status.currentPhase?.isMaxHandcard(true) &&
                                            game.hasPlayer((target) => {
                                                if (target == player || (evt && evt.player == target)) {
                                                    return false;
                                                }
                                                return event.getg(target).length && target.countCards('he');
                                            })
                                        );
                                    },
                                    logTarget(event, player) {
                                        let evt = event.getParent('phaseDraw');
                                        return game.filterPlayer((target) => {
                                            if (target == player || (evt && evt.player == target)) {
                                                return false;
                                            }
                                            return event.getg(target).length && target.countCards('he');
                                        });
                                    },
                                    content() {
                                        if (_status.currentPhase.isMaxHandcard(true)) {
                                            player.draw();
                                        }
                                    },
                                    ai: {
                                        threaten: 3,
                                    },
                                },
                            },
                        },
                        jxtp_guimou1: {
                            audio: 'guimou',
                            trigger: {
                                global: 'phaseBefore',
                                player: ['enterGame', 'phaseEnd', 'phaseZhunbeiBegin'],
                            },
                            filter(event, player, name) {
                                if (event.name == 'phaseZhunbei' || name == 'phaseEnd') {
                                    return true;
                                }
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            forced: true,
                            async content(event, map) {
                                const player = map.player,
                                    trigger = map.trigger;
                                if (trigger.name != 'phaseZhunbei') {
                                    let result,
                                        choiceList = ['惩罚期间使用牌最少的角色', '惩罚期间弃置牌最少的角色', '惩罚期间得到牌最少的角色'];
                                    if (trigger.name != 'phase' || game.phaseNumber == 0) {
                                        result = { index: get.rand(0, 2) };
                                    } else {
                                        result = await player
                                            .chooseControl()
                                            .set('choiceList', choiceList)
                                            .set('ai', () => get.rand(0, 2));
                                    }
                                    let str = choiceList[result.index];
                                    game.log(player, '选择', '#g' + str);
                                    player.addSkill('jxtp_guimou1_' + result.index);
                                    return;
                                }
                                let targets = [];
                                for (let i = 0; i <= 2; i++) {
                                    const skill = 'jxtp_guimou1_' + i;
                                    if (player.hasSkill(skill)) {
                                        const storage = player.storage[skill],
                                            nums = storage[0].slice();
                                        let targetx = nums.sort((a, b) => storage[1][storage[0].indexOf(a)] - storage[1][storage[0].indexOf(b)]);
                                        targetx = targetx.filter((target) => storage[1][storage[0].indexOf(target)] == storage[1][storage[0].indexOf(targetx[0])]);
                                        targets.addArray(targetx);
                                        player.removeSkill(skill);
                                    }
                                }
                                targets = targets.filter((target) => target != player && target.countCards('h'));
                                if (targets.length) {
                                    let result = await player
                                        .chooseTarget(
                                            '请选择【诡谋】的目标',
                                            '观看一名可选择的角色的手牌并将其中两张牌交给另一名其他角色或令其失去2点体力',
                                            (card, player, target) => {
                                                return _status.event.targets.includes(target) && target.countCards('h');
                                            },
                                            true
                                        )
                                        .set('ai', (target) => {
                                            return Math.sqrt(Math.min(3, target.countCards('h'))) * get.effect(target, { name: 'guohe_copy2' }, player, player);
                                        })
                                        .set('targets', targets);
                                    if (result.bool) {
                                        let target = result.targets[0];
                                        player.addExpose(0.3);
                                        const result2 = await player
                                            .choosePlayerCard(2, target, 'he', 'visible', true)
                                            .set('ai', (button) => {
                                                return get.value(button.link);
                                            })
                                            .set('prompt', '诡谋:请选择' + get.translation(target) + '的两张牌')
                                            .set('prompt2', '<div class="text center">将选择的牌交给另一名其他角色或令其失去两点体力</div>');
                                        if (result2.bool) {
                                            let cards = result2.links.slice(),
                                                result3;
                                            if (!game.hasPlayer((targetx) => targetx != player && targetx != target)) {
                                                result3 = { bool: false };
                                            } else {
                                                result3 = await player
                                                    .chooseTarget('是否令另一名角色获得' + get.translation(cards) + '？', (card, player, target) => {
                                                        return target != _status.event.target;
                                                    })
                                                    .set('ai', (target) => get.attitude(_status.event.player, target))
                                                    .set('target', target);
                                            }
                                            if (result3.bool) {
                                                let targetx = result3.targets[0];
                                                player.line(targetx);
                                                targetx.gain(cards, target, 'give');
                                            } else {
                                                target.loseHp(2);
                                            }
                                        }
                                    }
                                }
                            },
                            subSkill: {
                                0: {
                                    charlotte: true,
                                    init(player, skill) {
                                        if (!player.storage[skill]) {
                                            player.storage[skill] = [[], []];
                                            let targets = game.filterPlayer().sortBySeat(player);
                                            targets.forEach((target) => {
                                                player.storage[skill][0].push(target);
                                                player.storage[skill][1].push(0);
                                            });
                                        }
                                    },
                                    mark: true,
                                    intro: {
                                        markcount: (storage) => 0,
                                        content(storage, player) {
                                            let str = '当前使用牌数排行榜';
                                            let lose = storage[1].slice().sort((a, b) => a - b)[0];
                                            storage[0].forEach((target) => {
                                                str += '<br><li>';
                                                const score = storage[1][storage[0].indexOf(target)];
                                                if (score == lose) {
                                                    str += "<span class='texiaotext' style='color: #FF0000'>";
                                                }
                                                str += ' ' + get.translation(target) + ' ';
                                                str += score + '张';
                                                if (score == lose) {
                                                    str += '</span>';
                                                }
                                            });
                                            return str;
                                        },
                                    },
                                    trigger: {
                                        global: 'useCard1',
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        const storage = player.storage['jxtp_guimou1_0'];
                                        if (!storage[0].includes(trigger.player)) {
                                            storage[0].push(trigger.player);
                                            storage[1].push(0);
                                        }
                                        storage[1][storage[0].indexOf(trigger.player)]++;
                                    },
                                },
                                1: {
                                    charlotte: true,
                                    init(player, skill) {
                                        if (!player.storage[skill]) {
                                            player.storage[skill] = [[], []];
                                            let targets = game.filterPlayer().sortBySeat(player);
                                            targets.forEach((target) => {
                                                player.storage[skill][0].push(target);
                                                player.storage[skill][1].push(0);
                                            });
                                        }
                                    },
                                    mark: true,
                                    intro: {
                                        markcount: (storage) => 0,
                                        content(storage, player) {
                                            let str = '当前弃置牌数排行榜';
                                            let lose = storage[1].slice().sort((a, b) => a - b)[0];
                                            storage[0].forEach((target) => {
                                                str += '<br><li>';
                                                const score = storage[1][storage[0].indexOf(target)];
                                                if (score == lose) {
                                                    str += "<span class='texiaotext' style='color: #FF0000'>";
                                                }
                                                str += ' ' + get.translation(target) + ' ';
                                                str += score + '张';
                                                if (score == lose) {
                                                    str += '</span>';
                                                }
                                            });
                                            return str;
                                        },
                                    },
                                    trigger: {
                                        global: ['loseAfter', 'loseAsyncAfter'],
                                    },
                                    filter(event, player) {
                                        return event.type == 'discard' && game.hasPlayer((target) => event.getl(target).cards2.length);
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        const storage = player.storage['jxtp_guimou1_1'];
                                        let targets = game.filterPlayer((target) => trigger.getl(target).cards2.length);
                                        targets.forEach((target) => {
                                            if (!storage[0].includes(target)) {
                                                storage[0].push(target);
                                                storage[1].push(0);
                                            }
                                            storage[1][storage[0].indexOf(target)] += trigger.getl(target).cards2.length;
                                        });
                                    },
                                },
                                2: {
                                    charlotte: true,
                                    init(player, skill) {
                                        if (!player.storage[skill]) {
                                            player.storage[skill] = [[], []];
                                            let targets = game.filterPlayer().sortBySeat(player);
                                            targets.forEach((target) => {
                                                player.storage[skill][0].push(target);
                                                player.storage[skill][1].push(0);
                                            });
                                        }
                                    },
                                    mark: true,
                                    intro: {
                                        markcount: (storage) => 0,
                                        content(storage, player) {
                                            let str = '当前得到牌数排行榜';
                                            let lose = storage[1].slice().sort((a, b) => a - b)[0];
                                            storage[0].forEach((target) => {
                                                str += '<br><li>';
                                                const score = storage[1][storage[0].indexOf(target)];
                                                if (score == lose) {
                                                    str += "<span class='texiaotext' style='color: #FF0000'>";
                                                }
                                                str += ' ' + get.translation(target) + ' ';
                                                str += score + '张';
                                                if (score == lose) {
                                                    str += '</span>';
                                                }
                                            });
                                            return str;
                                        },
                                    },
                                    trigger: {
                                        global: ['gainAfter', 'loseAsyncAfter'],
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        const storage = player.storage['jxtp_guimou1_2'];
                                        let targets = game.filterPlayer((target) => trigger.getg(target).length);
                                        targets.forEach((target) => {
                                            if (!storage[0].includes(target)) {
                                                storage[0].push(target);
                                                storage[1].push(0);
                                            }
                                            storage[1][storage[0].indexOf(target)] += trigger.getg(target).length;
                                        });
                                    },
                                },
                            },
                        },
                        jxtp_zhouxian_discard: {
                            audio: 'dccongshi',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') > 1 && game.countPlayer() > 2;
                            },
                            content() {
                                'step 0';
                                const ai2 = function (target) {
                                    const player = _status.event.player;
                                    if (get.attitude(player, target) <= 0) {
                                        return 0;
                                    }
                                    let list = [null, 'juedou'].concat(lib.inpile_nature);
                                    if (target.hasSkill('ayato_zenshen')) {
                                        list.push('kami');
                                    }
                                    let num = Math.max.apply(
                                        Math,
                                        list.map(function (i) {
                                            if (i == 'juedou') {
                                                return target.getUseValue({ name: 'juedou' }, false);
                                            }
                                            let card = { name: 'sha', nature: i };
                                            return target.getUseValue(card, false);
                                        })
                                    );
                                    if (target.hasSkillTag('nogain')) {
                                        num /= 4;
                                    }
                                    return num;
                                };
                                player.chooseCardTarget({
                                    prompt: get.prompt2('jxtp_zhouxian_discard'),
                                    filterCard: true,
                                    selectCard: [0, Infinity],
                                    position: 'he',
                                    filterTarget: lib.filter.notMe,
                                    goon: game.hasPlayer(function (current) {
                                        return current != player && ai2(player, current) > 0;
                                    }),
                                    ai1(card) {
                                        if (!_status.event.goon) {
                                            return 0;
                                        }
                                        return 7 - get.value(card);
                                    },
                                    ai2: ai2,
                                });
                                ('step 1');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    event.target = target;
                                    player.give(result.cards, target);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.recover();
                            },
                            ai: {
                                expose: 0.17,
                                fireAttack: true,
                                skillTagFilter(player) {
                                    return player.hasFriend();
                                },
                            },
                        },
                        jxtp_xionghuo: {
                            audio: 'xinfu_xionghuo',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countMark('jxtp_xionghuo') > 0;
                            },
                            filterTarget(card, player, target) {
                                return player != target && !target.hasMark('jxtp_xionghuo');
                            },
                            content() {
                                player.removeMark('jxtp_xionghuo', 1);
                                target.addMark('jxtp_xionghuo', 1);
                            },
                            ai: {
                                order: 11,
                                result: {
                                    target(player, target) {
                                        if (
                                            (player.countMark('jxtp_xionghuo') >= 2 ||
                                                !game.hasPlayer(function (current) {
                                                    return current != player && get.attitude(player, current) < 0 && current.hasMark('jxtp_xionghuo');
                                                })) &&
                                            player.countCards('h', function (card) {
                                                return (
                                                    get.tag(card, 'damage') &&
                                                    player.canUse(card, target, null, true) &&
                                                    player.getUseValue(card) > 0 &&
                                                    get.effect_use(target, card, player) > 0 &&
                                                    target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                    })
                                                );
                                            })
                                        ) {
                                            return 3 / Math.max(1, target.hp);
                                        }
                                        if (
                                            (!player.hasUnknown() &&
                                                game.countPlayer(function (current) {
                                                    return get.attitude(player, current) < 0;
                                                }) <= 1) ||
                                            player.countMark('jxtp_xionghuo') >= 2
                                        ) {
                                            return -1;
                                        }
                                        return 0;
                                    },
                                },
                                effect: {
                                    player(card, player, target) {
                                        if (
                                            player != target &&
                                            get.tag(card, 'damage') &&
                                            target &&
                                            target.hasMark('jxtp_xionghuo') &&
                                            !target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: card,
                                            })
                                        ) {
                                            return [1, 0, 1, -2];
                                        }
                                    },
                                },
                                threaten: 1.6,
                            },
                            marktext: '戾',
                            intro: {
                                name: '暴戾',
                                content: 'mark',
                            },
                            group: ['jxtp_xionghuo_init', 'jxtp_xionghuo_zhunbei', 'jxtp_xionghuo_damage', 'jxtp_xionghuo_effect'],
                            subSkill: {
                                init: {
                                    audio: 'jxtp_xionghuo',
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: 'enterGame',
                                    },
                                    filter(event, player) {
                                        if (player.countMark('jxtp_xionghuo') >= 8) {
                                            return false;
                                        }
                                        return event.name != 'phase' || game.phaseNumber == 0;
                                    },
                                    forced: true,
                                    content() {
                                        player.addMark('jxtp_xionghuo', 1);
                                    },
                                },
                                zhunbei: {
                                    audio: 'jxtp_xionghuo',
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    filter(event, player) {
                                        if (player.countMark('jxtp_xionghuo') >= 8) {
                                            return false;
                                        }
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        player.addMark('jxtp_xionghuo', 1);
                                    },
                                },
                                damage: {
                                    audio: 'jxtp_xionghuo',
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        return event.player.countMark('jxtp_xionghuo') > 0 && event.player != player;
                                    },
                                    forced: true,
                                    logTarget: 'player',
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                effect: {
                                    audio: 'jxtp_xionghuo',
                                    trigger: {
                                        global: 'phaseZhunbeiBegin',
                                    },
                                    filter(event, player) {
                                        return event.player.countMark('jxtp_xionghuo') > 0 && event.player != player;
                                    },
                                    line: false,
                                    forced: true,
                                    logTarget: 'player',
                                    content() {
                                        'step 0';
                                        player.gainPlayerCard(trigger.player, 1, 'he', true, 'visible');
                                        trigger.player.removeMark('jxtp_xionghuo', trigger.player.countMark('jxtp_xionghuo'));
                                        ('step 1');
                                        let num = get.rand(0, 2);
                                        switch (num) {
                                            case 0:
                                                player.line(trigger.player, 'fire');
                                                trigger.player.damage('fire');
                                                trigger.player.addTempSkill('jxtp_xionghuo_disable');
                                                trigger.player.markAuto('jxtp_xionghuo_disable', [player]);
                                                break;
                                            case 1:
                                                player.line(trigger.player, 'water');
                                                trigger.player.damage('ice');
                                                trigger.player.addMark('jxtp_xionghuo_low', 3, false);
                                                trigger.player.addTempSkill('jxtp_xionghuo_low');
                                                break;
                                            case 2:
                                                player.line(trigger.player, 'thunder');
                                                trigger.player.damage('thunder');
                                                trigger.player.addTempSkill('fengyin');
                                                break;
                                        }
                                        ('step 2');
                                    },
                                },
                                disable: {
                                    mod: {
                                        playerEnabled(card, player, target) {
                                            if (card.name == 'sha' && player.getStorage('jxtp_xionghuo_disable').includes(target)) {
                                                return false;
                                            }
                                        },
                                    },
                                    charlotte: true,
                                    mark: true,
                                    marktext: '禁',
                                    intro: {
                                        content: '不能对$使用【杀】',
                                    },
                                },
                                low: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - player.countMark('jxtp_xionghuo_low');
                                        },
                                    },
                                    charlotte: true,
                                    mark: true,
                                    marktext: '减',
                                    intro: {
                                        content: '手牌上限-#',
                                    },
                                },
                            },
                        },
                        jxtp_shajue: {
                            audio: 'xinfu_shajue',
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                if (event.player == player) {
                                    return false;
                                }
                                const bool1 = !player.hasSkill('jxtp_xionghuo') || player.countMark('jxtp_xionghuo') < 8;
                                const bool2 = event.player.hp < 0 && get.itemtype(event.parent.cards) == 'cards' && event.parent.cards.some((card) => get.position(card, true) == 'o');
                                return bool1 || bool2;
                            },
                            forced: true,
                            content() {
                                if (!player.hasSkill('jxtp_xionghuo') || player.countMark('jxtp_xionghuo') < 8) {
                                    player.addMark('jxtp_xionghuo', 1);
                                }
                                if (trigger.player.hp < 0 && get.itemtype(trigger.parent.cards) == 'cards' && trigger.parent.cards.some((card) => get.position(card, true) == 'o')) {
                                    player.gain(
                                        trigger.parent.cards.filter((card) => get.position(card, true) == 'o'),
                                        'gain2'
                                    );
                                }
                            },
                            group: ['jxtp_shajue_die', 'jxtp_shajue_draw'],
                            subSkill: {
                                die: {
                                    trigger: {
                                        source: 'dieAfter',
                                    },
                                    forceDie: true,
                                    filter(event, player, name) {
                                        return name == 'die' || player.isIn();
                                    },
                                    forced: true,
                                    content() {
                                        player.recover();
                                        player.addSkill('jxtp_wudi');
                                    },
                                },
                                draw: {
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    forced: true,
                                    content() {
                                        let num = player.countMark('jxtp_xionghuo');
                                        trigger.num += num;
                                    },
                                },
                            },
                        },
                        jxtp_wudi: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            popup: false,
                            content() {
                                player.removeSkill('jxtp_wudi');
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (player != target) {
                                        return false;
                                    }
                                },
                            },
                        },
                        jxtp_cansi: {
                            audio: 'dccansi',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                let num = player.countMark('jxtp_futu_mark2');
                                player.removeMark('jxtp_futu_mark2', num);
                                player.recover();
                                ('step 1');
                                if (!game.hasPlayer((current) => current != player)) {
                                    event.finish();
                                } else {
                                    player.chooseTarget('残肆:选择一名其他角色', true, lib.filter.notMe).set('ai', (target) => {
                                        let list = ['recover', 'tuixinzhifu', 'wy_xiaolicangdao', 'chuqibuyi', 'sha', 'huogong'];
                                        return list.reduce((p, c) => {
                                            return p + get.effect(target, { name: c }, player, player);
                                        }, 0);
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    event.target = target;
                                    player.line(target, 'fire');
                                    let num = target.countCards('h') - target.hp;
                                    if (num > 0) {
                                        target.chooseToDiscard('h', true, num);
                                    }
                                    event.list = ['tuixinzhifu', 'wy_xiaolicangdao', 'chuqibuyi', 'sha', 'huogong'];
                                    player.addTempSkill('jxtp_cansi_draw');
                                    player.storage.jxtp_cansi_draw = target;
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                let card = { name: event.list.shift() };
                                if (target.isIn() && player.canUse(card, target, false)) {
                                    player.useCard(card, target, false);
                                }
                                if (event.list.length) {
                                    event.redo();
                                }
                                ('step 4');
                                player.removeSkill('jxtp_cansi_draw');
                                ('step 5');
                                if (player.countMark('jxtp_futu_mark2') == 0) {
                                    player.addMark('jxtp_cansi_mark', 1);
                                }
                            },
                            subSkill: {
                                draw: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.getParent(3).name == 'jxtp_cansi' && player.storage.jxtp_cansi_draw == event.player;
                                    },
                                    content() {
                                        for (let i = 0; i < trigger.num; i++) {
                                            player.addMark('jxtp_futu_mark', 1);
                                            player.addMark('jxtp_futu_mark2', 1);
                                            player.draw(1);
                                        }
                                    },
                                },
                                mark: {
                                    charlotte: true,
                                    intro: {
                                        name2: '残肆',
                                        content: 'mark',
                                    },
                                },
                            },
                            ai: {
                                threaten: 5,
                                expose: 0.3,
                            },
                        },
                        jxtp_futu: {
                            audio: 'dcfozong',
                            forced: true,
                            juexingji: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.countMark('jxtp_futu_mark') >= 7;
                            },
                            content() {
                                'step 0';
                                const unm = 7 - player.maxHp;
                                let num = player.maxHP - 7;
                                if (player.maxHp < 7) {
                                    player.gainMaxHp(unm);
                                    player.recover(unm);
                                } else {
                                    player.loseMaxHp(num);
                                }
                                ('step 1');
                                let num1 = player.countMark('jxtp_futu_mark');
                                player.removeMark('jxtp_futu_mark', num1);
                                player.removeMark('jxtp_cansi_mark', 1);
                                player.recover(player.maxHp);
                                player.removeSkill('jxtp_cansi');
                                player.addSkill('jxtp_jingtu');
                                ('step 2');
                                let list = game.filterPlayer((current) => !current.hasMark('jxtp_jingtu')).sortBySeat();
                                for (let i of list) {
                                    i.addMark('jxtp_jingtu', 1, false);
                                }
                                ('step 3');
                                player.awakenSkill('jxtp_futu');
                            },
                            group: ['jxtp_futu_mark', 'jxtp_futu_shibai', 'jxtp_futu_dying'],
                            subSkill: {
                                mark: {
                                    charlotte: true,
                                    intro: {
                                        name2: '浮屠',
                                        content: 'mark',
                                    },
                                },
                                mark2: {
                                    charlotte: true,
                                    intro: {
                                        name2: '浮屠',
                                        content: 'mark',
                                    },
                                },
                                shibai: {
                                    audio: 'dcfozong',
                                    forced: true,
                                    juexingji: true,
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return player.countMark('jxtp_cansi_mark') >= 1;
                                    },
                                    content() {
                                        'step 0';
                                        let num = player.countMark('jxtp_futu_mark');
                                        player.removeMark('jxtp_futu_mark', num);
                                        player.removeMark('jxtp_cansi_mark', 2);
                                        player.recover(player.maxHp);
                                        player.changeHujia(5, null, true);
                                        ('step 1');
                                        player.removeSkill('jxtp_cansi');
                                        player.addSkill('jxtp_cansi2');
                                        ('step 2');
                                        player.awakenSkill('jxtp_futu');
                                    },
                                },
                                dying: {
                                    audio: 'dcfozong',
                                    forced: true,
                                    juexingji: true,
                                    trigger: {
                                        player: 'dying',
                                    },
                                    content() {
                                        'step 0';
                                        let num = player.countMark('jxtp_futu_mark');
                                        player.removeMark('jxtp_futu_mark', num);
                                        ('step 1');
                                        let num1 = player.maxHp - player.hp;
                                        if (num1) {
                                            player.recover(num1);
                                        }
                                        player.changeHujia(5, null, true);
                                        ('step 2');
                                        player.removeSkill('jxtp_cansi');
                                        player.addSkill('jxtp_cansi2');
                                        ('step 3');
                                        player.awakenSkill('jxtp_futu');
                                    },
                                },
                            },
                        },
                        jxtp_jingtu: {
                            mod: {
                                targetInRange: () => true,
                            },
                            trigger: {
                                player: ['loseAfter', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.getl && !event.getl(player)) {
                                    return false;
                                }
                                return player.countCards('h') < player.maxHp;
                            },
                            content() {
                                player.draw(player.maxHp - player.countCards('h'));
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh' && player.maxHp - player.hp < player.countCards('h')) {
                                        return false;
                                    }
                                },
                            },
                            group: ['jxtp_jingtu_end', 'jxtp_jingtu_hp', 'jxtp_jingtu_discard', 'jxtp_jingtu_MaxHp', 'jxtp_jingtu_fengyin'],
                            subSkill: {
                                end: {
                                    trigger: {
                                        player: ['phaseJudgeBefore', 'phaseDiscardBefore'],
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                hp: {
                                    trigger: {
                                        player: ['gainMaxHpBefore', 'loseMaxHpBefore'],
                                    },
                                    forced: true,
                                    content() {
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                },
                                discard: {
                                    trigger: {
                                        global: ['phaseZhunbeiBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasMark('jxtp_jingtu');
                                    },
                                    content() {
                                        let num = _status.currentPhase.countCards('he');
                                        _status.currentPhase.chooseToDiscard(true, 'he', num);
                                    },
                                },
                                MaxHp: {
                                    trigger: {
                                        global: ['phaseJieshuBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasMark('jxtp_jingtu');
                                    },
                                    content() {
                                        let num = _status.currentPhase.countCards('he');
                                        _status.currentPhase.chooseToDiscard(true, 'he', num);
                                        _status.currentPhase.loseMaxHp();
                                    },
                                },
                                fengyin: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && event.player.hasMark('jxtp_jingtu');
                                    },
                                    content() {
                                        _status.currentPhase.addTempSkill('jxtp_jingtu_skill');
                                    },
                                },
                            },
                        },
                        jxtp_jingtu_skill: {
                            mod: {
                                targetInRange: () => true,
                            },
                            init(player, skill) {
                                player.addSkillBlocker(skill);
                            },
                            onremove(player, skill) {
                                player.removeSkillBlocker(skill);
                            },
                            charlotte: true,
                            skillBlocker(skill, player) {
                                return !lib.skill[skill].charlotte;
                            },
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    let list = player.getSkills(null, false, false).filter(function (i) {
                                        return lib.skill.baiban.skillBlocker(i, player);
                                    });
                                    if (list.length) {
                                        return '失效技能:' + get.translation(list);
                                    }
                                    return '无失效技能';
                                },
                            },
                        },
                        jxtp_cansi2: {
                            audio: 'dccansi',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (!game.hasPlayer((current) => current != player)) {
                                    event.finish();
                                } else {
                                    player.chooseTarget('残肆:选择一名其他角色', true, lib.filter.notMe).set('ai', (target) => {
                                        let list = ['chenghuodajie', 'sha', 'juedou', 'huogong'];
                                        return list.reduce((p, c) => {
                                            return p + get.effect(target, { name: c }, player, player);
                                        }, 0);
                                    });
                                }
                                ('step 1');
                                if (result.bool) {
                                    let target = result.targets[0];
                                    event.target = target;
                                    player.line(target, 'fire');
                                    target.addTempSkill('jxtp_cansi2_fengyin');
                                    target.gain(target.getCards('e'), 'gain2');
                                    let num = target.countCards('h') - target.hp;
                                    if (num > 0) {
                                        target.chooseToDiscard('h', true, num);
                                    }
                                    event.list = ['chenghuodajie', 'sha', 'juedou', 'huogong'];
                                    player.addTempSkill('jxtp_cansi2_draw');
                                    player.storage.jxtp_cansi2_draw = target;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                let card = { name: event.list.shift() };
                                if (target.isIn() && player.canUse(card, target, false)) {
                                    player.useCard(card, target, false);
                                }
                                if (event.list.length) {
                                    event.redo();
                                }
                                ('step 3');
                                player.removeSkill('jxtp_cansi2_draw');
                                ('step 4');
                                if (player.countMark('jxtp_cansi2_mark') < 3) {
                                    target.removeSkill('jxtp_cansi2_fengyin');
                                    target.addTempSkill('jxtp_cansi2_fengyin', { player: 'phaseEnd' });
                                }
                                ('step 5');
                                let num = player.countMark('jxtp_cansi2_mark');
                                player.removeMark('jxtp_cansi2_mark', num);
                            },
                            subSkill: {
                                fengyin: {
                                    init(player, skill) {
                                        player.addSkillBlocker(skill);
                                    },
                                    onremove(player, skill) {
                                        player.removeSkillBlocker(skill);
                                    },
                                    charlotte: true,
                                    skillBlocker(skill, player) {
                                        return !lib.skill[skill].charlotte;
                                    },
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            let list = player.getSkills(null, false, false).filter(function (i) {
                                                return lib.skill.baiban.skillBlocker(i, player);
                                            });
                                            if (list.length) {
                                                return '失效技能:' + get.translation(list);
                                            }
                                            return '无失效技能';
                                        },
                                    },
                                },
                                draw: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.getParent(3).name == 'jxtp_cansi2' && player.storage.jxtp_cansi2_draw == event.player;
                                    },
                                    content() {
                                        for (let i = 0; i < trigger.num; i++) {
                                            player.addMark('jxtp_cansi2_mark', 1);
                                            player.changeHujia(1, null, true);
                                            player.draw(2);
                                        }
                                    },
                                },
                            },
                            ai: {
                                threaten: 5,
                                expose: 0.3,
                            },
                        },
                        jxtp_zyyingzi: {
                            audio: 'reyingzi',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            getNum(player) {
                                return (player.countCards('h') >= 1) + (player.hp >= 1) + (player.countCards('e') >= 1) + (player.getDamagedHp() >= 1) + (player.hujia >= 1);
                            },
                            filter(event, player) {
                                return !event.numFixed && lib.skill.sbyingzi.getNum(player) > 0;
                            },
                            content() {
                                let num = lib.skill.jxtp_zyyingzi.getNum(player);
                                trigger.num += num;
                                player.addTempSkill('jxtp_zyyingzi_limit');
                                player.addMark('jxtp_zyyingzi_limit', num, false);
                            },
                            ai: {
                                threaten: 2,
                            },
                            subSkill: {
                                limit: {
                                    charlotte: true,
                                    forced: true,
                                    marktext: '英',
                                    intro: {
                                        content: '本回合手牌上限+#',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num + player.countMark('jxtp_zyyingzi_limit');
                                        },
                                    },
                                },
                            },
                        },
                        jxtp_fanjian: {
                            audio: 'refanjian',
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
                            lose: false,
                            delay: false,
                            content() {
                                'step 0';
                                player.changeHujia(1);
                                target.storage.jxtp_fanjian = cards[0];
                                player.give(cards[0], target);
                                ('step 1');
                                if (!target.countCards('h')) {
                                    event._result = { control: 'jxtp_fanjian_hp' };
                                } else {
                                    target.chooseControl('jxtp_fanjian_card', 'jxtp_fanjian_hp').ai = function (event, player) {
                                        let cards = player.getCards('he', { suit: player.storage.jxtp_fanjian.suit });
                                        if (cards.length == 1) {
                                            return 0;
                                        }
                                        if (cards.length >= 2) {
                                            for (let i = 0; i < cards.length; i++) {
                                                if (get.tag(cards[i], 'save')) {
                                                    return 1;
                                                }
                                            }
                                        }
                                        if (player.hp == 1) {
                                            return 0;
                                        }
                                        for (let i = 0; i < cards.length; i++) {
                                            if (get.value(cards[i]) >= 8) {
                                                return 1;
                                            }
                                        }
                                        if (cards.length > 2 && player.hp > 2) {
                                            return 1;
                                        }
                                        if (cards.length > 3) {
                                            return 1;
                                        }
                                        return 0;
                                    };
                                }
                                ('step 2');
                                if (result.control == 'jxtp_fanjian_card') {
                                    target.showHandcards();
                                } else {
                                    target.damage(3, 'fire');
                                    target.changeHujia(1);
                                    event.finish();
                                }
                                ('step 3');
                                const color = get.color(target.storage.jxtp_fanjian);
                                target.discard(
                                    target.getCards('he', function (i) {
                                        return get.color(i) == color && lib.filter.cardDiscardable(i, target, 'jxtp_fanjian');
                                    })
                                );
                                target.loseHp();
                                delete target.storage.jxtp_fanjian;
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        return -target.countCards('he') - (player.countCards('h', 'du') ? 1 : 0);
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        jxtp_kurou: {
                            audio: 'sbkurou',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                let num = player.hp - 1;
                                if (player.countCards('hs', { name: ['tao', 'jiu'] })) {
                                    num = player.hp;
                                }
                                const map = {};
                                let list = [];
                                for (let i = 1; i <= player.hp; i++) {
                                    const cn = get.cnNumber(i, true);
                                    map[cn] = i;
                                    list.push(cn);
                                }
                                event.map = map;
                                player.storage.jxtp_kurou = true;
                                player
                                    .chooseControl(list, function () {
                                        return get.cnNumber(_status.event.goon, true);
                                    })
                                    .set('prompt', '失去任意点体力')
                                    .set('goon', num);
                                ('step 1');
                                let num1 = event.map[result.control] || 1;
                                player.storage.jxtp_kurou2 = num1;
                                player.loseHp(num1);
                                player.addMark('kurou', num1);
                                player.addTempSkill('jxtp_kurou_use');
                                player.addTempSkill('jxtp_kurou_cancel');
                            },
                            ai: {
                                order: 14,
                                result: {
                                    player(player) {
                                        if (player.hp < 3) {
                                            return false;
                                        }
                                        let mindist = player.hp;
                                        if (player.countCards('hs', (card) => player.canSaveCard(card, player))) {
                                            mindist++;
                                        }
                                        if (
                                            game.hasPlayer(function (current) {
                                                return get.distance(player, current) <= mindist && player.canUse('sha', current, false) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                            })
                                        ) {
                                            return 1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            group: ['jxtp_kurou_hp'],
                            subSkill: {
                                hp: {
                                    forced: true,
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    content() {
                                        trigger.cancel();
                                        player.loseHp();
                                    },
                                },
                                use: {
                                    mod: {
                                        cardUsable(card) {
                                            if (get.info(card) && get.info(card).forceUsable) {
                                                return;
                                            }
                                            return Infinity;
                                        },
                                        targetInRange() {
                                            return true;
                                        },
                                        aiOrder(player, card, num) {
                                            let name = card.name;
                                            if (name == 'tao') {
                                                return num + 7 + Math.pow(player.getDamagedHp(), 2);
                                            }
                                            if (name == 'sha') {
                                                return num + 6;
                                            }
                                            if (get.subtype(card) == 'equip2') {
                                                return num + get.value(card) / 3;
                                            }
                                        },
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    popup: false,
                                    content() {
                                        trigger.directHit.addArray(game.players);
                                        if (player.countMark('kurou') <= 0) {
                                            player.removeSkill('jxtp_kurou_use');
                                            player.removeSkill('jxtp_kurou_cancel');
                                        } else {
                                            game.broadcastAll(function (player) {
                                                player.removeMark('kurou');
                                            }, player);
                                        }
                                    },
                                },
                                cancel: {
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    firstDo: true,
                                    silent: true,
                                    charlotte: true,
                                    content() {
                                        player.removeMark('kurou', 9);
                                        player.removeSkill('jxtp_kurou_use');
                                        player.removeSkill('jxtp_kurou_cancel');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        jxtp_zhaxiang: {
                            audio: 'sbzhaxiang',
                            trigger: {
                                player: 'loseHpEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                player.draw(2);
                                player.changeHujia(1);
                                ('step 2');
                                if (event.count > 0 && player.hasSkill('jxtp_zhaxiang') && !get.is.blocked('jxtp_zhaxiang', player)) {
                                    event.goto(1);
                                }
                            },
                            group: ['jxtp_zhaxiang_hp'],
                            subSkill: {
                                hp: {
                                    forced: true,
                                    trigger: {
                                        player: ['phaseBegin', 'phaseDiscardBegin'],
                                    },
                                    content() {
                                        let num = player.hujia;
                                        player.changeHujia(-num);
                                        player.recover(num - 1);
                                    },
                                },
                            },
                        },
                        jxtp_zuilun: {
                            audio: 'xinfu_zuilun',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            check(event, player) {
                                let num = 0;
                                if (
                                    player.hasHistory('lose', function (evt) {
                                        return evt.type == 'discard';
                                    })
                                ) {
                                    num++;
                                }
                                if (!player.isMinHandcard()) {
                                    num++;
                                }
                                if (!player.getStat('damage')) {
                                    num++;
                                }
                                if (num == 3) {
                                    return player.hp >= 2;
                                }
                                return true;
                            },
                            prompt(event, player) {
                                let num = 3;
                                if (
                                    player.hasHistory('lose', function (evt) {
                                        return evt.type == 'discard';
                                    })
                                ) {
                                    num--;
                                }
                                if (!player.isMinHandcard()) {
                                    num--;
                                }
                                if (!player.getStat('damage')) {
                                    num--;
                                }
                                return get.prompt('jxtp_zuilun') + '(可获得' + get.cnNumber(num) + '张牌)';
                            },
                            content() {
                                'step 0';
                                if (
                                    !player.hasHistory('lose', function (evt) {
                                        return evt.type == 'discard';
                                    })
                                ) {
                                    player.recover();
                                    if (player.maxHp < 7) {
                                        player.gainMaxHp();
                                    }
                                }
                                ('step 1');
                                if (player.getStat('damage')) {
                                    player.addTempSkill('sbjizhi', { player: 'phaseUseEnd' });
                                    player.addTempSkill('rekanpo', { player: 'phaseUseEnd' });
                                }
                                ('step 2');
                                if (player.isMinHandcard()) {
                                    const choiceList = ['获得一点护甲'];
                                    if (player.canMoveCard()) {
                                        choiceList.push('移动场上的一张牌');
                                    }
                                    player
                                        .chooseControl('cancel2')
                                        .set('choiceList', choiceList)
                                        .set('prompt', get.prompt('jxtp_zuilun'))
                                        .set('ai', function () {
                                            const player = _status.event.player;
                                        });
                                }
                                ('step 3');
                                if (player.isMinHandcard()) {
                                    if (result.control == 'cancel2') {
                                        event.goto(4);
                                    } else {
                                        if (result.index == 0) {
                                            player.changeHujia(1);
                                        } else {
                                            player.moveCard(true);
                                            event.goto(4);
                                        }
                                    }
                                }
                                ('step 4');
                                event.num = 0;
                                event.cards = get.cards(3);
                                if (
                                    player.getHistory('lose', function (evt) {
                                        return evt.type == 'discard';
                                    }).length
                                ) {
                                    event.num++;
                                }
                                if (!player.isMinHandcard()) {
                                    event.num++;
                                }
                                if (!player.getStat('damage')) {
                                    event.num++;
                                }
                                ('step 5');
                                if (event.num == 0) {
                                    player.gain(event.cards, 'draw');
                                    event.finish();
                                    return;
                                }
                                let prompt = '罪论:将' + event.num + '张牌置于牌堆顶';
                                if (event.num < 3) {
                                    prompt += '并获得其余的牌';
                                }
                                const chooseToMove = player.chooseToMove(prompt, true);
                                if (event.num < 3) {
                                    chooseToMove.set('list', [['牌堆顶', event.cards], ['获得']]);
                                    chooseToMove.set('filterMove', function (from, to, moved) {
                                        if (to == 1 && moved[0].length <= _status.event.num) {
                                            return false;
                                        }
                                        return true;
                                    });
                                    chooseToMove.set('filterOk', function (moved) {
                                        return moved[0].length == _status.event.num;
                                    });
                                } else {
                                    chooseToMove.set('list', [['牌堆顶', event.cards]]);
                                }
                                chooseToMove.set('num', event.num);
                                chooseToMove.set('processAI', function (list) {
                                    const check = function (card) {
                                        const player = _status.event.player;
                                        const next = player.next;
                                        const att = get.attitude(player, next);
                                        const judge = next.getCards('j')[tops.length];
                                        if (judge) {
                                            return get.judge(judge)(card) * att;
                                        }
                                        return next.getUseValue(card) * att;
                                    };
                                    const cards = list[0][1].slice(0),
                                        tops = [];
                                    while (tops.length < _status.event.num) {
                                        list.sort(function (a, b) {
                                            return check(b) - check(a);
                                        });
                                        tops.push(cards.shift());
                                    }
                                    return [tops, cards];
                                });
                                ('step 6');
                                result.moved[0].reverse();
                                for (const i of result.moved[0]) {
                                    ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                }
                                if (result.moved[1].length) {
                                    player.gain(result.moved[1], 'draw');
                                    event.finish();
                                } else {
                                    player.chooseTarget('请选择一名角色,与其一同失去1点体力', true, function (card, player, target) {
                                        return target != player;
                                    }).ai = function (target) {
                                        return -get.attitude(player, target);
                                    };
                                }
                                ('step 7');
                                player.line(result.targets[0], 'fire');
                                player.loseHp();
                                result.targets[0].loseHp();
                            },
                        },
                        jxtp_fuyin: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            audio: 'xinfu_fuyin',
                            filter(event, player) {
                                if (event.player.countCards('h') < player.countCards('h')) {
                                    return false;
                                }
                                if (event.card.name != 'sha' && event.card.name != 'juedou') {
                                    return false;
                                }
                                return !game.hasPlayer2(function (current) {
                                    return current.getHistory('useCard', function (evt) {
                                        return evt != event.parent && evt.card && ['sha', 'juedou'].includes(evt.card.name) && evt.targets.includes(player);
                                    }).length;
                                });
                            },
                            content() {
                                trigger.parent.excluded.add(player);
                            },
                            group: ['jxtp_fuyin_discard'],
                            subSkill: {
                                discard: {
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    forced: true,
                                    audio: 'xinfu_fuyin',
                                    filter(event, player) {
                                        if (event.player.countCards('h') > player.countCards('h')) {
                                            return false;
                                        }
                                        if (event.card.name != 'sha' && event.card.name != 'juedou') {
                                            return false;
                                        }
                                        return (
                                            _status.currentPhase &&
                                            !game.hasPlayer2(function (current) {
                                                return current.getHistory('useCard', function (evt) {
                                                    return evt != event.parent && evt.card && ['sha', 'juedou'].includes(evt.card.name) && evt.targets.includes(player);
                                                }).length;
                                            })
                                        );
                                    },
                                    content() {
                                        _status.currentPhase.chooseToDiscard(2, 'he', true);
                                    },
                                },
                            },
                        },
                        jxtp_jiuyuan: {
                            audio: 'sbjiuyuan',
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            zhuSkill: true,
                            group: 'jxtp_jiuyuan_recover',
                            filter(event, player) {
                                return event.card && event.card.name == 'tao' && player != event.player && event.player.group == 'wu' && event.player.isIn() && player.hasZhuSkill('jxtp_jiuyuan', event.player);
                            },
                            content() {
                                player.draw();
                                trigger.player.draw();
                            },
                            subSkill: {
                                recover: {
                                    audio: 'sbjiuyuan',
                                    trigger: {
                                        target: 'taoBegin',
                                    },
                                    zhuSkill: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (player != event.player) {
                                            return false;
                                        }
                                        if (!player.hasZhuSkill('jxtp_jiuyuan', event.player)) {
                                            return false;
                                        }
                                        return true;
                                    },
                                    content() {
                                        trigger.baseDamage++;
                                    },
                                },
                            },
                        },
                        jxtp_yuxiang2: {
                            audio: 'manyi',
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'nanman';
                            },
                            content() {
                                player.draw(2);
                            },
                            group: ['jxtp_yuxiang2_nanman'],
                            subSkill: {
                                nanman: {
                                    trigger: {
                                        player: ['phaseZhunbeiBegin', 'phaseJieshuEnd'],
                                    },
                                    forced: true, //QQQ
                                    content() {
                                        let list = game.filterPlayer(function (current) {
                                            return player.canUse('nanman', current) && current.isEnemiesOf(player);
                                        });
                                        list.sort(lib.sort.seat);
                                        player.useCard({ name: 'nanman' }, list);
                                    },
                                    ai: {
                                        threaten: 1.8,
                                    },
                                },
                            },
                        },
                    },
                    translate: {
                        极鲁肃: '极鲁肃',
                        极刘备: '极刘备',
                        极杨彪: '极杨彪',
                        极杜预: '极杜预',
                        极花鬘: '极花鬘',
                        极吕布: '极吕布',
                        极郭嘉: '极郭嘉',
                        极徐盛: '极徐盛',
                        极孙权: '极孙权',
                        极吕蒙: '极吕蒙',
                        三国君王: '三国君王',
                        极张绣: '极张绣',
                        极李儒: '极李儒',
                        极刘协: '极刘协',
                        极司马懿: '极司马懿',
                        极左慈: '极左慈',
                        极皇甫嵩: '极皇甫嵩',
                        极袁绍: '极袁绍',
                        极文鸯: '极文鸯',
                        极荀攸: '极荀攸',
                        极曹操: '极曹操',
                        极马超: '极马超',
                        极许劭: '极许劭',
                        极曹冲: '极曹冲',
                        jxtp_wolong: '极诸葛亮',
                        jxtp_laozhuge: '极诸葛亮',
                        极关羽: '极关羽',
                        极曹爽: '极曹爽',
                        极曹丕: '极曹丕',
                        极刘禅: '极刘禅',
                        极曹髦: '极曹髦',
                        极糜竺: '极糜竺',
                        极夏侯惇: '极夏侯惇',
                        jx_zhangrang: '张让',
                        jx_zhaozhong: '赵忠',
                        jx_sunzhang: '孙璋',
                        jx_bilan: '毕岚',
                        jx_xiayun: '夏恽',
                        jx_hankui: '韩悝',
                        jx_lisong: '栗嵩',
                        jx_duangui: '段珪',
                        jx_guosheng: '郭胜',
                        jx_gaowang: '高望',
                        全力十常侍: '全力十常侍',
                        极十常侍: '极十常侍',
                        极张角: '极张角',
                        jxtp_zhonghui: '极钟会',
                        极董昭: '极董昭',
                        极刘晔: '极刘晔',
                        极张奋: '极张奋',
                        极孙策: '极孙策',
                        极华雄: '极华雄',
                        极灵雎: '极灵雎',
                        极蔡文姬: '极蔡文姬',
                        极陈珪: '极陈珪',
                        极徐荣: '极徐荣',
                        极笮融: '极笮融',
                        极周瑜: '极周瑜',
                        极黄盖: '极黄盖',
                        极诸葛瞻: '极诸葛瞻',
                        独断: '独断',
                        独断_info: '锁定技,当你使用牌为下列数的倍速时,从牌堆中随机获得相应的牌:2-杀;3-闪;5-桃/酒;7-决斗/无中生有;9-过河拆桥/顺手牵羊;11-火攻/铁索连环;13-南蛮入侵/万箭齐发;17-乐不思蜀/兵粮寸断',
                        君恩: '君恩',
                        君恩_info: '出牌阶段限一次,你可以弃置一张牌,然后你选择一名其他角色,你与其各回复一点体力并摸5张牌',
                        天威: '天威',
                        天威_info: '当你成为其他角色使用牌的目标后:①若其体力值大于你,你摸三张牌.②若其体力值等于你,你摸二张牌.③若其体力值小于你,你摸一张牌',
                        神罚: '神罚',
                        神罚_info: '出牌阶段,你可以失去3点体力,对所有其他角色各造成1点伤害.这些角色弃置装备区内的所有牌,然后弃置所有手牌',
                        肃清: '肃清',
                        肃清_info: '出牌阶段,你可以失去3点体力,对所有其他角色各造成1点伤害.这些角色弃置装备区内的所有牌,然后弃置所有手牌',
                        天眷: '天眷',
                        天眷_info: '你的手牌上限始终等于你的体力上限+3.当你处于濒死状态时,你可弃置三张牌,然后回复1点体力',
                        庙算: '庙算',
                        庙算_info: '每回合限一次.若你的体力上限不大于五5,则当你使用带有「伤害」这一标签的基本牌或普通锦囊牌指定目标后,你可以猜测其中的一个目标的手牌中是否有基本牌,锦囊牌或装备牌.若你猜中的项目数:≥1,你获得其一张牌;≥2,增加一点体力上限;≥3,你摸3张牌并弃置3张牌,然后使此牌伤害+1',
                        天妒: '天妒',
                        天妒_info: '锁定技,你的【桃】均视为【出其不意】',
                        对策: '对策',
                        对策_info: '若你在任意角色的结束阶段前获得过超过3张牌,则你可以与一名角色拼点.若你赢,你视为对其使用一张【决斗】,否则你获得其一张牌,然后受到其一点伤害',
                        遗策: '遗策',
                        遗策_info: '当你受到1点伤害后,你可以摸等同已损失体力数张牌,然后可以将至多两张手牌交给其他角色.若你此时体力上限大于4,则你减2点体力上限',
                        铁壁: '铁壁',
                        铁壁_info: '锁定技,当你成为伤害类卡牌的目标时,取消之.你与其他角色距离始终-2',
                        神陨: '神陨',
                        神陨_info: '锁定技,你于你的每一个结束阶段扣减一点体力上限,然后摸3张牌',
                        博学: '博学',
                        博学_info: '在你的准备阶段和结束阶段,你可以从牌堆顶亮出牌顶X张牌,然后选择获得不同花色的牌各一张(X为场上现存人数且最小为5)',
                        约盟: '约盟',
                        约盟_info: '出牌阶段限三次,你可令两名满足X≤Y的其他角色交换手牌并获得如下效果:出牌阶段结束时,你弃置X张牌(X为这两名角色手牌数之差的绝对值;Y为你的手牌数)',
                        jxtp_zhizheng: '治政',
                        jxtp_zhizheng_info: '出牌阶段限一次,你可以指定一名装备栏未满的角色,随机给该角色的空装备栏使用装备',
                        jxtp_zhengzhi: '政治',
                        jxtp_zhengzhi_info: '准备阶段,你可以摸2张牌',
                        修政: '修政',
                        修政_info: '准备阶段,你可以摸2张牌.在你的出牌阶段,你可以指定一名装备栏未满的角色,随机给该角色的空装备栏使用装备.(每回合限一次)',
                        jxtp_poji1: '破阳',
                        jxtp_poji1_info: '你可以将你的任意一张手牌当做【无懈可击】使用',
                        jxtp_poji2: '破阴',
                        jxtp_poji2_info: '你可以将你的任意一张手牌当做【无懈可击】使用',
                        jxtp_poji3: '破击',
                        jxtp_poji3_info: '你可以将一张红色手牌当做【闪】使用或打出',
                        破计: '破计',
                        破计_info: '你可以将任意手牌当无懈可击使用,你可以将任意红色手牌当闪使用或打出.当你没有手牌时,你不会成为伤害牌和延时性锦囊的目标',
                        jxtp_fawu: '伐吴',
                        jxtp_fawu_info: '觉醒技,结束阶段,若你拥有的<武库>标记大于3,则你减1点体力上限并回复满体力,然后获得〖破竹〗',
                        jxtp_chenyan: '陈言',
                        jxtp_chenyan_info: '觉醒技,准备阶段,若你已拥有<武库>标记,则你减1点体力上限并回复满体力,然后获得〖三陈〗和〖伐吴〗',
                        jxtp_sanchen: '三陈',
                        jxtp_sanchen_info: '出牌阶段限3次,你可选择一名本回合未被此技能指定过的角色.其摸三张牌,然后弃置三张牌.若此法弃置的牌的类别均不相同,则其摸三张牌',
                        君威: '君威',
                        君威_info: '三国纷争、君威浩荡!',
                        jxtp_mingzhi: '明治',
                        jxtp_mingzhi_info: '结束阶段,你将手牌摸至X张(X为场上存活人数且至多为8)',
                        jxtp_xiaoluan: '枭乱',
                        jxtp_xiaoluan_info: '出牌阶段限一次,你可以失去1点体力并从弃牌堆获得一张杀,然后指定一名其他角色.直到回合结束,你对其使用牌无距离和次数限制,其非锁定技无效且不能使用和打出手牌.若如此做,回合结束前你获得技能【破势】',
                        jxtp_jiming: '破势',
                        jxtp_jiming_info: '锁定技,你每造成一次伤害,你摸一张牌',
                        jxtp_juehu: '灭绝',
                        jxtp_juehu_info: '弃牌阶段结束时,你可以对1名手牌数不大于你、装备区内牌数不大于你、体力值与你不相等的其他角色造成1点伤害',
                        灭绝: '灭绝',
                        灭绝_info: '在你的回合,你可以选择满足以下条件的角色,对其造成1点伤害:1、回合结束时手牌/装备/体力小于你;2、回合结束时本回合失去过牌;3、失去最后一张手牌时',
                        热狱: '热狱',
                        热狱_info: '出牌阶段限1次,你可令除你外的所有角色依次弃置4张牌,无法如此做者受到你对其造成的2点火焰伤害',
                        毒谋: '毒谋',
                        毒谋_info: '你的杀视为铁索连环.出牌阶段限三次,你可以将一张黑色牌置于牌堆顶,然后令一名有牌的其他角色选择一项:交给你一张锦囊牌,或依次弃置两张非锦囊牌',
                        jxtp_zhanyuan: '战缘',
                        jxtp_zhanyuan_info: '觉醒技,结束阶段,若你已因〖蛮裔〗累计获得达到5张牌或更多,你修改技能〖薮影〗.然后你可以选择一名其他男性角色,令其获得〖蛮裔〗并与你获得技能〖系力〗,其增加一点体力值上限,回复满体力并将手牌摸至等同场上人数.否则,你加一点体力上限,回复全部体力将手牌摸至体力上限',
                        jxtp_manyi: '蛮裔',
                        jxtp_manyi_info: '锁定技,南蛮入侵对你无效,你结算与其他人距离时,始终-1,其他人结算与你的距离时,始终+2;当有角色受到【南蛮入侵】的伤害后,你摸一张牌;回合结束时,若【南蛮入侵】累计造成了9次伤害,你增加1点体力上限并回复1点体力,然后重置计数',
                        jxtp_qianzhi: '义争',
                        jxtp_qianzhi_info: '出牌阶段,你可以和一名其他角色拼点.若你赢,其跳过下个摸牌阶段和出牌阶段.若你没赢,你受到其一点伤害并失去技能【义争】直到你的下个回合开始',
                        jxtp_zhaohan: '昭汉',
                        jxtp_zhaohan_info: '锁定技,回合开始时,你回复一点体力,若此阶段为你的前3个准备阶段,你额外赠加1点体力上限',
                        jxtp_yuxiang: '薮影',
                        jxtp_yuxiang_info: '准备阶段开始时,你可以视为使用一张【南蛮入侵】.出牌阶段限一次,你可以将所有手牌当做【南蛮入侵】使用',
                        jxtp_gongxin: '攻心',
                        jxtp_gongxin_info: '出牌阶段限一次.你可以指定一名其他角色,令其直到回合结束所有非锁定技失效并收回其装备区全部装备,然后你观看其手牌并获得其中两张',
                        jxtp_zhanshen: '神勇',
                        jxtp_zhanshen_info: '锁定技,你使用牌无距离限制,你的红色牌不计入手牌上限.你使用黑色牌无次数限制',
                        jxtp_shenyong: '神勇',
                        jxtp_shenyong_info: '锁定技,你使用牌无距离限制,你的红色牌不计入手牌上限.你使用黑色牌无次数限制.你使用的【杀】对方需要连续使用两张【闪】才能抵消',
                        jxtp_tianming: '天命',
                        jxtp_tianming_info: '当你成为【杀】的目标时,你可以摸3张牌,然后弃置3张牌',
                        jxtp_shenqu: '神躯',
                        jxtp_shenqu_info: '锁定技,准备阶段,若你的体力低于4,则你将体力上限调整至场上人数(最少为4),并回复体力至4点',
                        jxtp_shenwei: '神威',
                        jxtp_shenwei_info: '锁定技.任意角色的准备阶段,若你的体力上限大于3,你摸两张牌.然后若你已受伤,则你减一点体力上限,否则,你失去一点体力',
                        jxtp_jijiu: '祭酒',
                        jxtp_jijiu_info: '出牌阶段限三次,你可以弃置一张牌,视为使用了一张不计入次数限制的酒.当你使用因此使用杀指定一名角色后,你可以令其防具无效直到回合结束',
                        jxtp_jj: '祭酒',
                        jxtp_jj_info: '',
                        jxtp_pohuai: '祭酒',
                        jxtp_pohuai_info: '',
                        jxtp_guimou: '鬼谋',
                        jxtp_guimou_info: '锁定技,当你的牌因弃置或重铸而进入弃牌堆时,你将这些牌置于你的武将牌上,并称其为谋;你至多拥有体力上限数的谋(不少于4);出牌阶段开始时,你获得武将牌上的所有谋;当你受到一点伤害后,你获得一张谋并摸两张牌',
                        jxtp_yinren: '隐忍',
                        jxtp_yinren_info: '锁定技,每当场上有角色阵亡时,你增加一点体力上限并回复体力至上限',
                        jxtp_yr: '隐忍',
                        jxtp_yr_info: '锁定技,每当场上有角色阵亡时,你增加一点体力上限并回复体力至上限.每当你收到一次伤害,你可以获得伤害来源的一张牌并结束此出牌阶段',
                        jxtp_guiyi: '归一',
                        jxtp_guiyi_info: '觉醒技:你的准备阶段,若你的体力上限大于场上人数,你增加一点体力上限并回复体力至上限,失去技能【隐忍】,然后获得技能【摧枯】',
                        jxtp_zhipan: '摧枯',
                        jxtp_zhipan_info: '当你受到伤害后,你可以获得伤害来源的全部牌',
                        jxtp_guicai: '鬼才',
                        jxtp_guicai_info: '在任意角色的判定牌生效前,你摸一张牌,然后你可以打出一张牌替换之',
                        jxtp_fankui: '隐忍',
                        jxtp_fankui_info: '当你收到伤害后,你可以获得伤害来源一张牌并结束此出牌阶段',
                        jxtp_hengsao: '摧枯',
                        jxtp_hengsao_info: '你可以选择令全体角色失去两点体力上限',
                        jxtp_cuiku: '摧枯',
                        jxtp_cuiku_info: '结束阶段,你可以选择令全体角色失去两点体力上限.当你受到伤害后,你可以获得伤害来源的全部牌',
                        jxtp_beiwu: '备武',
                        jxtp_beiwu_info: '锁定技,当有角色使用装备牌时,则你摸一张牌并获得一个<武库>,你最多同时拥有9个"武库"',
                        jxtp_pozhu: '破竹',
                        jxtp_pozhu_info: '每回合限3次,你可以弃置一个<武库>标记,然后将任一张牌当任一张牌使用',
                        jxtp_huashen_init: '化身',
                        jxtp_huashen_init_info: '',
                        jxtp_huashen: '化身',
                        jxtp_huashen_info: '游戏开始时你随机获得X张未登场的化身牌选择其中一张展示之(X为场上人数且最小为5).你视为拥有展示的化身牌上除主公技之外的所有技能同时将你的武将性别和势力变为与展示的化身牌相同直到展示的化身牌被更换.你每个回合开始或结束阶段你可以选择一项:①弃置任意数量的化身牌并获得等同于弃置数量加一张化身牌②更换展示的化身牌',
                        jxtp_xiuxian2: '仙体',
                        jxtp_xiuxian2_info: '',
                        jxtp_xiuxian3: '仙体',
                        jxtp_xiuxian3_info: '',
                        jxtp_xiuxian1: '仙体',
                        jxtp_xiuxian1_info: '锁定技,你的体力上限和手牌上限锁定为4,当你受到/失去大于1点的伤害/体力时,你令伤害值或失去的体力值-1',
                        jxtp_yangjie: '佯解',
                        jxtp_yangjie_info: '出牌阶段限X次,你可以摸一张牌并和一名其他角色A拼点.若你没赢,则你可以令另一名其他角色B获得两张拼点牌,然后其视为对A使用一张火【杀】.(X为你场上现存队友的数量)',
                        jxtp_juxiang: '拒降',
                        jxtp_juxiang_info: '限定技.一名其他角色脱离濒死状态时,你可以对其造成X点伤害,然后摸X张牌',
                        jxtp_zhengjun: '整军',
                        jxtp_zhengjun_info: '出牌阶段限一次,你可以令至多4名角色各摸2张牌.此时,若你选择的角色:①不多于3名:你额外摸1张牌.②不多于2名:你回复1点体力,③只有1名:你增加一点体力上限并回复一点体力,失去技能【整军】【佯解】,获得技能【讨乱】【势击】',
                        jxtp_shiji: '势击',
                        jxtp_shiji_info: '出牌阶段限一次,你可以选择一名其他角色,你观看其手牌并选择一种颜色,其弃置相同颜色的全部手牌,然后你摸等量的牌',
                        jxtp_taoluan: '讨乱',
                        jxtp_taoluan_info: '一名角色的判定牌生效后,你可以终止导致此判定.然后选择一项:①回复一点体力并摸两张牌.②获得此判定牌并视为对判定角色使用一张火【杀】(无距离和次数限制)',
                        jxtp_luanji: '乱击',
                        jxtp_luanji_info: '锁定技,【万箭齐发】对你无效.出牌阶段,你可以将两张牌当做万箭齐发使用',
                        jxtp_zhenshi: '增矢',
                        jxtp_zhenshi_info: '出牌阶段,你可以失去一点体力(若你已受伤,则改为失去一点体力上限)并摸两张牌,然后本回合你使用万箭齐发造成的伤害均视为无来源伤害',
                        jxtp_qunshang: '乱击',
                        jxtp_qunshang_info: '',
                        jxtp_zhiheng: '制衡',
                        jxtp_zhiheng_info: '出牌阶段限一次,你可以发动一次制衡并改为在牌堆中选择你喜欢的牌',
                        jxtp_huiwan: '会玩',
                        jxtp_huiwan_info: '',
                        从武: '从武',
                        从武_info: '锁定技.当场上有角色使用【杀】时,你摸一张牌',
                        jxtp_quedi: '却敌',
                        jxtp_quedi_info: '锁定技,你的杀无距离限制.当你使用【杀】或【决斗】指定唯一目标后,你可选择:①获得目标角色的两张手牌.②弃置一张牌,并令此牌的伤害值基数+1.③背水:减1点体力上限,然后依次执行上述所有选项',
                        jxtp_chongjian2: '冲坚',
                        jxtp_chongjian2_info: '你可以获得其装备区内的一张牌',
                        jxtp_chongjian1: '冲坚',
                        jxtp_chongjian1_info: '你可以将一张装备牌当做【决斗】使用',
                        jxtp_cj: '冲坚 ',
                        jxtp_cj_info: '你可以将一张装备牌当做【决斗】使用.你对装备栏有牌的角色造成伤害时,你可以获得目标角色装备栏内一张牌.你的手牌上限+X(X为你装备区内的牌数)',
                        jxtp_xinshen: '新生',
                        jxtp_xinshen_info: '锁定技,当你受到一点伤害或失去一点体力后,你随机获得两张新的化身牌',
                        jxtp_choujue1: '仇决',
                        jxtp_choujue1_info: '',
                        jxtp_choujue2: '仇决',
                        jxtp_choujue2_info: '',
                        jxtp_choujue: '仇决',
                        jxtp_choujue_info: '锁定技.你对其他角色造成伤害进入濒死时,你回复1点体力并摸一张牌,若你击杀了该角色,你增加1点体力上限回复1点体力并获得两张不同类型的装备牌,然后你失去技能【却敌】直到回合结束',
                        jxtp_choujue3: '却敌',
                        jxtp_choujue3_info: '',
                        jxtp_zhiyu: '智愚',
                        jxtp_zhiyu_info: '使命技,当你受到伤害后,你可以选择摸两张牌(若无手牌则摸三张)或弃置二张牌并回复一点体力,然后你和伤害来源各弃置一张牌,之后展示你的手牌,若你有手牌且均为同一颜色,你获得一个<奇策>标记并获得伤害来源X张牌(X为‘奇策’数,若其无牌则获得其弃置的牌并对其造成1点伤害).成功:结束阶段,你拥有2个以上的‘奇策’标记,你增加1点体力上限回复1点体力,获得技能【谋主】并修改【奇策】.失败:使命成功前进入濒死,你回复体力至3点并修改技能【智愚】',
                        jxtp_qice: '奇策',
                        jxtp_qice_info: '出牌阶段限X次,你可以将全部手牌当做任意普通锦囊牌使用(X为你的‘奇策’标记数)',
                        jxtp_jianxiong: '奸雄',
                        jxtp_jianxiong_info: '①游戏开始时,你可获得任意枚<奸雄>标记(你最多拥有4枚<奸雄>标记).②当你受到伤害后,你可获得伤害牌,然后摸1+X张牌(X为<奸雄>标记数),然后你可以弃1枚<奸雄>标记.③本回合若你跳过了摸牌或出牌阶段,你跳过弃牌阶段',
                        jxtp_qingzheng: '清正',
                        jxtp_qingzheng_info: '出牌阶段,你可以弃置X种花色的所有手牌(X为<奸雄>标记数且最小为1),并观看一名有手牌的其他角色的手牌,你弃置其中一种花色的所有牌.若其被弃置的牌数小于你以此法弃置的牌数,你对其造成1点伤害.然后你可以获得1枚<奸雄>标记',
                        jxtp_pojun_juli: '破距',
                        jxtp_pojun_juli_info: '',
                        jxtp_pojun_mopai: '破军',
                        jxtp_pojun_mopai_info: '',
                        jxtp_pojun_duodao: '破杀',
                        jxtp_pojun_duodao_info: '',
                        jxtp_pojun: '破军',
                        jxtp_pojun_info: '锁定技,出牌阶段开始时你额外摸2张牌.你计算与其他角色的距离时始终-2.你使用【杀】的次数+1、目标+1、你使用【杀】造成的伤害+1.当你使用【杀】指定对象后,你令该角色非锁定技无效,你可以将其最多X张牌置于其武将牌上,回合结束阶段,其获得其武将牌上的全部牌(X为其体力值)',
                        jxtp_pojun_fengyin: '破封',
                        jxtp_pojun_fengyin_info: '',
                        jxtp_pojun_zengshang: '破伤',
                        jxtp_pojun_zengshang_info: '是否令此【杀】伤害值+1',
                        jxtp_tianyan: '火计',
                        jxtp_tianyan_info: '结束阶段,你可以选择一名其他角色,对其及其同势力的其他角色各造成1点火焰伤害',
                        jxtp_jinsuo: '八阵',
                        jxtp_jinsuo_info: '出牌阶段限一次,你可以选择至多8名角色.若其未横置,其横置并弃置2张牌;若其已横置,其复原武将牌',
                        jxtp_hujia: '护驾',
                        jxtp_hujia_info: '主公技,你于回合外需要使用或打出一张牌时,你可以弃置2枚<奸雄>标记,将一张牌当做此牌使用或打出,并回复一点体力',
                        jxtp_mashen: '马神',
                        jxtp_mashen_info: '马超就是神!',
                        jxtp_ms_tuji: '突击',
                        jxtp_ms_tuji_info: '没有人能抵挡马神的进攻!',
                        jxtp_ms_cuijun: '催军',
                        jxtp_ms_cuijun_info: '没有人能在马神面前装武器和防具!',
                        jxtp_ms_qishu: '骑术',
                        jxtp_ms_qishu_info: '没有人能躲开或接近马神!',
                        jxtp_ms_zhuanzhu: '专注',
                        jxtp_ms_zhuanzhu_info: '没有人能干扰马神的动作!',
                        jxtp_rende: '仁德',
                        jxtp_rende_info: '每轮开始时和你的准备阶段/出牌开始时,你获得1枚<仁望>标记.出牌阶段,你可以将任意张牌交给一名其他角色并获得1枚<仁望>标记.你可以移去1枚<仁望>,视为使用或打出一张基本牌',
                        jxtp_zhangwu: '章武',
                        jxtp_zhangwu_info: '限定技.出牌阶段,当目前游戏轮数不小于3,你可以弃置全部的<仁望>标记并摸等量的牌,增加4点体力上限并回复4点体力.然后你获得技能【龙怒】且直接执行阴状态效果',
                        jxtp_jijiang: '激将',
                        jxtp_jijiang_info: '主公技.出牌阶段开始时,你可以选择两名角色.后一名角色选择一项:1.视为对前一名角色使用一张【杀】;2.跳过下个出牌阶段.若你选择了蜀势力角色,则由蜀势力角色进行选择',
                        jxtp_taoluan1: '滔乱',
                        jxtp_taoluan1_info: '每回合每张牌名限一次,你可以将一张牌当做任意一张基本牌或锦囊牌使用或打出,然后你摸一张牌',
                        jxtp_pingjian: '评鉴',
                        jxtp_pingjian_info: '准备阶段开始时/摸牌阶段开始时/结束阶段开始时/当你受到伤害后/当你失去体力后/当你进入濒死状态时/出牌阶段限一次,你可以令系统随机从剩余武将牌堆中检索出三张拥有对应发动时机技能的武将牌.然后你可以选择发动其中一个技能或摸一张牌.每个技能每局只能选择一次',
                        jxtp_quesong: '雀颂',
                        jxtp_quesong_info: '出牌阶段限一次.你可以视为受到1点伤害,视为对一名其他角色造成过1点伤害并另其回复一点体力',
                        jxtp_chengxiang: '称象',
                        jxtp_chengxiang_info: '你受到一点伤害时,你可以令一名角色选择一项:1.摸等同于其装备区中空栏的数量的牌并复原武将牌;2.弃置等同于其体力值的手牌并回复1点体力',
                        jxtp_chengxiang1: '称象',
                        jxtp_chengxiang1_info: '一名角色的结束阶段,若其没有造成过伤害,你可以亮出牌堆顶的七张牌.然后获得其中任意数量点数之和不大于13的牌',
                        jxtp_chengxiang2: '称象',
                        jxtp_chengxiang2_info: '一名角色的结束阶段,若其没有造成过伤害,你可以亮出牌堆顶的七张牌.然后获得其中任意数量点数之和不大于13的牌.你受到一点伤害时,你可以令一名角色选择一项:1.摸等同于其装备区中空栏的数量的牌并复原武将牌;2.弃置等同于其体力值的手牌并回复1点体力',
                        jxtp_pichai: '庀材',
                        jxtp_pichai_info: '出牌阶段限一次,判定的判定结果花色均不相同你可进行一次判定:若判定结果与本阶段内以此法进行,你可以重复此判定.然后你可以将所有生效的判定牌交给任意一名角色,若如此做,其回复全部体力',
                        jxtp_zimou: '自谋',
                        jxtp_zimou_info: '锁定技,出牌阶段,当你使用前三张牌时,你依次从牌堆或弃牌堆获得一张【杀】、【火攻】和【决斗】',
                        jxtp_niqu: '逆取',
                        jxtp_niqu_info: '出牌阶段限一次,你可以对最多两名角色各造成1点火焰伤害',
                        jxtp_xiaolu: '宵赂',
                        jxtp_xiaolu_info: '',
                        jxtp_chihe: '叱吓',
                        jxtp_chihe_info: '①当你使用【杀】或【决斗】指定目标后,你可以亮出牌堆顶五张牌,然后每有一张牌花色与你使用的【杀】或【决斗】花色相同,你令此【杀】或【决斗】伤害+1,且其不能使用亮出牌的花色响应此【杀】.②锁定技,你使用牌无距离限制',
                        jxtp_taoluan2: '滔乱',
                        jxtp_taoluan2_info: '',
                        jxtp_chiyan: '鸱咽',
                        jxtp_chiyan_info: '',
                        jxtp_chiyan2: '鸱咽',
                        jxtp_chiyan2_info: '',
                        jxtp_anruo: '安弱',
                        jxtp_anruo_info: '你可以将牌按下列规则使用或打出:♥️️️当【桃】;♦️️️当火【杀】;♣️️️当【闪】;♠️️️当【无懈可击】.当你以此法使用或打出【杀】或【闪】时,你可以获得对方的一张牌;当你以此法使用【桃】时,你可以获得一名角色的一张牌;当你以此法使用【无懈可击】时,你可以获得该非延时锦囊使用者的一张牌',
                        jxtp_mowang2: '殁亡',
                        jxtp_mowang2_info: '',
                        jxtp_mowang_damage: '鸱咽',
                        jxtp_mowang_damage_info: '',
                        jxtp_mowang: '殁亡',
                        jxtp_mowang_info: '锁定技:你不能被翻面,回合结束时,你死亡',
                        jxtp_yaozhuo: '谣诼',
                        jxtp_yaozhuo_info: '出牌阶段限一次,你可以摸一张牌并选择一名其他角色拼点:若你赢,跳过其下一个出牌阶段;若你没赢,其将手牌弃置至体力上限且直到其下个回合结束,其非锁定技失效',
                        jxtp_kuiji: '窥机',
                        jxtp_kuiji_info: '出牌阶段限一次,你可以观看一名其他角色的手牌,然后你可以弃置你与其手里的四张牌(必须为四张且花色各不相同),若你以此法弃置了牌,你摸等同于弃置牌数量的牌',
                        jxtp_mowang1: '殁亡',
                        jxtp_mowang1_info: '',
                        jxtp_guanxing: '观星',
                        jxtp_guanxing_info: '准备阶段,你移去所有的<星>,并将牌堆顶的7张牌置于武将牌上,称为<星>.然后你可以将任意张<星>牌置于牌堆顶.结束阶段,若你未于准备阶段将<星>牌置于牌堆顶,则你可以将任意张<星>牌置于牌堆顶.当你需要使用或打出手牌时,你可以将<星>视为你的牌使用或打出',
                        jxtp_guanxing_unmark: '观星',
                        jxtp_guanxing_unmark_info: '',
                        jxtp_guanxing_on: '观星',
                        jxtp_guanxing_on_info: '',
                        jxtp_fangyu: '防御',
                        jxtp_fangyu_info: '锁定技,当你没有手牌时,你不能成为伤害类牌,延时类锦囊和【铁索连环】的目标',
                        jxtp_kongcheng: '空城',
                        jxtp_kongcheng_info: '每回合限一次,当你成为伤害类卡牌的目标时,你可以取消之',
                        jxtp_kanpo: '看破',
                        jxtp_kanpo_info: '每轮开始时,你清除【看破】记录的牌名,然后你可以依次记录共计七个未于本次清除过的非装备牌名.当其他角色使用你【看破】记录过的牌名的牌时,你可以移去一个【看破】中此牌名的记录,使此牌无效并摸一张牌.  ',
                        jxtp_kanpo_kanpo: '看破 ',
                        jxtp_kanpo_kanpo_info: '',
                        jxtp_wusheng: '武圣 ',
                        jxtp_wusheng_info: '你可以将你的任意一张手牌当做【杀】使用或打出.出牌阶段开始时,你可以令你进入<武圣>形态:本回合使用牌无次数和距离限制,且每使用一张牌摸一张牌,你以此法摸5牌后,退出此形态',
                        jxtp_yijue: '义绝  ',
                        jxtp_yijue_info: '出牌阶段限一次,你可以选择任意名角色,令其选择是否交给你两张牌.若是,其与你各获得1点护甲并使你本回合<武圣>形态记录的已摸牌数-1.若否,其本回合非锁定技失效且无法使用或打出手牌,你使用的♥️️️【杀】对其伤害+1',
                        jxtp_zhuanquan: '渐专 ',
                        jxtp_zhuanquan_info: '锁定技,出牌阶段每项限一次,你使用牌时,选择一项:1.令一名角色弃X张牌;2.摸X张牌;3重铸X张牌;4.同时执行2和3选项(X为此技能次阶段发动次数).出牌阶段结束时,若你执行了全部选项,则你增加一点体力上限回复一点体力值,然后你随机删除其中一个选项',
                        jxtp_zixiang: '自享 ',
                        jxtp_zixiang_info: '觉醒技:准备阶段,若你【渐专】的四个选项均被删除,你废除判定区,回复全部体力并将手牌摸至体力上限,然后你失去【渐专】并获得【专权】【扫讨】. ',
                        jxtp_zhuanquan2: '专权 ',
                        jxtp_zhuanquan2_info: '当你对一名其他角色造成伤害后,若其判定区里没有牌,你可将其一张牌置于其判定区.若此牌不为延时锦囊牌且此牌:为红色,此牌视为【乐不思蜀】;为黑色,此牌视为【兵粮寸断】.回合结束时,若你本回合未造成过伤害,你可失去一点体力将手牌摸至体力上限',
                        jxtp_xingshang: '行殇 ',
                        jxtp_xingshang_info: '一名角色受到伤害/死亡后,你获得1/2个<殇>标记.你可以获得角色死亡的所有牌然后回复一点体力.出牌阶段,你选择一名角色,移去任意数量的<颂>令其执行对应的一个操作:1个,复原武将牌;2个,摸X张牌(X为本局已死亡角色数,X至少为2);3个,增加1点体力上限并回复1点体力,然后随机回复一个被废除的装备栏(目标体力上限不大于19方可选择);4个,追思*一名已阵亡的角色,获得其武将牌上除主公技外的所有技能(你选择自己时方可选择此项),然后你失去武将牌上全部技能',
                        jxtp_fangzhu: '放逐',
                        jxtp_fangzhu_info: '',
                        jxtp_songwei: '颂威',
                        jxtp_songwei_info: '主公技,出牌阶段开始时,你获得X个<殇>标记(X为本局游戏魏势力角色数).每局游戏限一次,你可于出牌阶段令一名其他角色失去其武将牌上的所有技能',
                        jxtp_fangzhu1: '放逐',
                        jxtp_fangzhu1_info: '',
                        jxtp_fangzhu2: '放逐',
                        jxtp_fangzhu2_info: '出牌阶段,你可以选择一名其他角色,移去任意数量的<殇>令其执行对应的操作:2个,令一名其他角色的非Charlotte技能失效直到其回合结束或不能响应除其外的角色使用的牌直到其回合结束;3个,其翻面或只能使用你选择的一种类型的牌直到其回合结束.你受到伤害时,你可以弃置2个<殇>(不足则全弃),令一名其他角色翻面并弃置X张牌(X为你已损失体力值+1)',
                        jxtp_xingshang1: '行殇 ',
                        jxtp_xingshang1_info: '',
                        jxtp_fangquan: '放权',
                        jxtp_fangquan_info: '限定技,出牌阶段,你可以指定一名角色,该角色变更势力为【蜀】,废除判定区,增加一点体力上限并回复一点体力,获得技能【蜀政】并在你的回合结束后执行一个额外回合.若你选择的角色不为你自己,则你增加两点体力上限并回复全部体力,修改技能【放权】并获得技能【享乐】',
                        jxtp_shuzheng1: '蜀政',
                        jxtp_shuzheng1_info: '',
                        jxtp_shuzheng2: '蜀政',
                        jxtp_shuzheng2_info: '',
                        jxtp_shuzheng: '蜀政',
                        jxtp_shuzheng_info: '锁定技,摸牌阶段,你额外摸X张牌,你的手牌上限+X(X为场上蜀势力角色+1且最多不超过游戏人数),结算你与其他角色距离时,始终-1.出牌阶段,你可额外使用1张杀,你使用杀指定目标时可额外选择1个目标.你使用装备牌或普通锦囊牌时,摸一张牌',
                        jxtp_shuzheng3: '蜀政',
                        jxtp_shuzheng3_info: '',
                        jxtp_xiangle: '享乐',
                        jxtp_xiangle_info: '锁定技,你永远跳过摸牌阶段.场上有角色跳过摸牌阶段时,你回复1点体力并摸1张牌.其他角色对你使用除【桃】外的卡牌时,须依次从手牌弃置1张基本牌或锦囊牌和1张装备牌,否则此牌对你无效',
                        jxtp_xiangle1: '享乐',
                        jxtp_xiangle1_info: '',
                        jxtp_xiangle2: '享乐',
                        jxtp_xiangle2_info: '',
                        jxtp_xiangle3: '享乐',
                        jxtp_xiangle3_info: '',
                        jxtp_ruoyu: '若愚',
                        jxtp_ruoyu_info: '主公技,觉醒技,准备阶段,若你的体力值为全场最高,你增加1点体力上限并回复1点体力,然后获得技能【激将】',
                        jxtp_mbjuejin: '决进',
                        jxtp_mbjuejin_info: '主公技,限定技.出牌阶段,你可以增加20点忿肆值和2点护甲,然后令所有角色依次将体力回复或失去至1并获得X点护甲(X为一名角色以此法变化的体力值).然后游戏进入<向死存魏>模式:当【闪】、【桃】和【酒】进入弃牌堆后,直接移出游戏',
                        jxtp_mbcmfangzhu: '放逐',
                        jxtp_mbcmfangzhu_info: '出牌阶段限一次.你可以选择一名其他角色,选择一项:⒈令其不能使用手牌中的非锦囊牌直到其回合结束;⒉令其所有非Charlotte技能失效直到其回合结束',
                        jxtp_mbcmjiushi: '酒诗',
                        jxtp_mbcmjiushi_info: '①当你需要使用【酒】时,若你的武将牌正面向上,你可以翻面,视为使用一张【酒】.②当你受到伤害后,若你的武将牌背面向上,你可以翻面然后可以重铸一张牌并移动场上一张牌或增加1点护甲.③当你翻面后,你获得牌堆里的一张锦囊牌',
                        jxtp_sbqingzheng: '清正',
                        jxtp_sbqingzheng_info: '出牌阶段限一次,你可以弃置任意种花色的所有手牌,并观看一名有手牌的其他角色的手牌,你弃置其中一种花色的所有牌.若其被弃置的牌数小于你以此法弃置的牌数,你对其造成2点伤害,否则你增加一点护甲',
                        jxtp_qianlong: '忿肆',
                        jxtp_qianlong_info: '游戏开始时,你获得10枚<忿肆>.当你受到1点伤害后/造成1点伤害后,你获得5枚<忿肆>(上限为100枚).当你的<忿肆>数不小于20/40/60/80/100时,你视为拥有〖潜龙〗/〖酒诗〗/〖清正〗/〖放逐〗/〖决讨〗',
                        jxtp_juetao: '决讨',
                        jxtp_juetao_info: '限定技,结束阶段,若你已受伤,则你可以增加5点护甲并选择一名其他角色.你展示牌堆底的一张牌,若此牌能被使用,则你使用此牌并重复此流程直到出现不可使用的牌或其死亡(你与其以外的角色不是此牌的合法目标)',
                        jxtp_qianlong1: '潜龙',
                        jxtp_qianlong1_info: '锁定技,你的手牌上限+X(X为你的护甲值).当你受到伤害后,你可以展示牌堆顶的五张牌并获得其中至多X张牌(X为你已损失体力值+1),然后将剩余的牌置于牌底',
                        jxtp_benxi: '奔袭',
                        jxtp_benxi_info: '转换技.当你下次失去手牌后,阴:你随机念出一句拼音中含有<wu,yi>的台词.阳:你获得上一个你念台词的技能直到你的下回合开始.若已获得该技能,则改为对所有其他角色各造成1点伤害',
                        jxtp_chuanyang: '穿杨',
                        jxtp_chuanyang_info: '其他角色回合外使用【桃】时,你可以视为对其使用一张【杀】',
                        jxtp_jugu: '巨贾  ',
                        jxtp_jugu_info: '锁定技,游戏开始时,你摸X张牌,然后将手牌标记为<本金>.你的准备阶段和结束阶段,你收回弃牌堆中所有<本金>.你的<本金>不计入手牌上限,且手牌上限+X(X为你的体力上限)',
                        jxtp_jugu_tag: '本金 ',
                        jxtp_jugu_tag_info: '',
                        jxtp_ziyuan: '资援',
                        jxtp_ziyuan_info: '出牌阶段限一次,你可以交给一名角色任意张牌,然后令该角色下个摸牌阶段额外摸2张牌并回复一点体力. ',
                        jxtp_zhouzhuan: '通财',
                        jxtp_zhouzhuan_info: '出牌阶段限一次,你可以弃置一张<本金>并选择一名其他角色,随机获得其区域内与该<本金>不同花色的牌各一张.若你获得牌的张数为: 1张:你摸3张牌; 2张:你增加一点体力上限并回复一点体力; 3张:你本回合对其使用牌无距离和次数限制',
                        jxtp_ganglie1: '刚烈',
                        jxtp_ganglie1_info: '',
                        jxtp_ganglie2: '刚烈',
                        jxtp_ganglie2_info: '',
                        jxtp_ganglie: '刚烈',
                        jxtp_ganglie_info: '每当你受到一点伤害,你可令伤害来源失去全部技能直到本回合结束并对其造成X点伤害,然后你进行判定:若结果为红,你获得其2*X张牌;若为黑,你弃置其2*X张牌(X为此次伤害数-此次伤害期间你发动本技能的次数).出牌阶段限一次,你选择1名本局游戏对你造成过伤害的角色,对其造成2点伤害',
                        jxtp_qingjian: '清俭',
                        jxtp_qingjian_info: '当一张牌不因使用而进入弃牌堆时,若你没有<清俭>牌,你将其置于你的武将牌上,称为<清俭>,每名角色回合结束时,你可以任意分配你的<清俭>牌',
                        jxtp_danggu2: '党锢',
                        jxtp_danggu2_info: '十常侍孤注一掷!游戏开始时,你获得全部十位常侍的强化技能并摸等同场上人数的牌',
                        jxtp_danggu: '党锢',
                        jxtp_danggu_info: '锁定技.①游戏开始时,你获得十张<常侍>牌,然后你进行一次结党并获得亮出的<常侍>牌上的技能.②当你修整结束后,你将体力上限调整为3,进行一次结党并摸2张牌.③摸牌阶段,你额外摸X张牌(X为5-你的体力上限且至少为0)',
                        jxtp_mowang3: '殁亡',
                        jxtp_mowang3_info: '锁定技.①弃牌阶段,你弃置全部手牌并于回合结束阶段摸体力上限+2的牌.②击杀你的角色失去全部技能并弃置全部牌,之后其无法以任何形式回复体力和摸牌.③你死亡后,若你拥有技能<党锢>且你仍有未亮出的<常侍>牌,则改为休整一轮',
                        jxtp_mowang4: '殁亡',
                        jxtp_mowang4_info: '',
                        jxtp_mowang5: '党锢',
                        jxtp_mowang5_info: '',
                        jxtp_mowang6: '殁亡',
                        jxtp_mowang6_info: '',
                        jxtp_mowang7: '殁亡',
                        jxtp_mowang7_info: '',
                        jxtp_kuiji1: '窥机',
                        jxtp_kuiji1_info: '',
                        jxtp_miaoyu: '妙语',
                        jxtp_miaoyu_info: '你可以将至多两张相同花色的牌按下列规则使用或打出:♥️️️当【桃】;♦️️️当火【杀】;♣️️️当【闪】;♠️️️当【无懈可击】.当你以此法使用【桃】时,你可以摸一张牌;当你以此法使用【无懈可击】时,你可以弃置该非延时锦囊使用者的一张牌;若你以此法使用两张红色牌,则此牌回复值或伤害值+1;若你以此法使用了两张黑色牌,则你获得当前回合角色一张牌',
                        jxtp_leiji2: '雷击',
                        jxtp_leiji2_info: '',
                        jxtp_guidao1: '鬼道',
                        jxtp_guidao1_info: '',
                        jxtp_leiji0: '雷击',
                        jxtp_leiji0_info: '',
                        jxtp_leiji1: '轰雷',
                        jxtp_leiji1_info: '弃置4枚道兵标记,对选择的一名其他角色造成2点雷电伤害',
                        jxtp_leiji3: '鸣雷',
                        jxtp_leiji3_info: '弃置4枚道兵标记,对选择的一名其他角色造成1点雷电伤害,然后你回复1点体力并摸2张牌',
                        jxtp_guidao2: '鬼道',
                        jxtp_guidao2_info: '',
                        jxtp_leiji: '雷击',
                        jxtp_leiji_info: '①准备阶段,你可选择于出牌阶段获得技能【鸣雷】(弃置4枚道兵标记,对选择的一名其他角色造成1点雷电伤害,然后你回复1点体力并摸2张牌)或【轰雷】(弃置4枚道兵标记,对选择的一名其他角色造成2点雷电伤害).②当你打出或使用【闪】时,你可以进行判定,若判定结果为黑色,你选择一名其他角色对其造成2点雷电伤害.若判定结果为红色,你回复1点体力',
                        jxtp_guidao: '鬼道',
                        jxtp_guidao_info: '①当一名角色的判定牌为红色时,你可以将判定结果改为你选择的一种花色并获得2枚<道兵>标记.②游戏开始/你造成伤害后/一名角色受到属性伤害后,你获得4/1/1枚<道兵>标记.③当你受到伤害时,你可以弃置2枚<道兵>标记防止此伤害并摸1张牌',
                        jxtp_huangtian: '黄天',
                        jxtp_huangtian_info: '主公技,觉醒技.准备阶段,若你已受伤,你获得4枚<道兵>标记,然后修改【鬼道】③当你受到伤害时,你可以弃置1枚<道兵>标记防止此伤害并摸2张牌',
                        jxtp_guidao3: '鬼道',
                        jxtp_guidao3_info: '',
                        jxtp_guidao4: '鬼道',
                        jxtp_guidao4_info: '',
                        jxtp_guidao5: '鬼道',
                        jxtp_guidao5_info: '',
                        jxtp_huoji: '火计',
                        jxtp_huoji_info: '【火计】使命技,结束阶段,你可以选择一名其他角色,对其及其同势力的其他角色各造成1点火焰伤害.成功:准备阶段,若你本局游戏对其他角色造成过至少X点火焰伤害(X为本局游戏人数),你回复全部体力并获得<八阵>.失败:成功达成使命前,进入濒死状态,你回复体力至1点且直到你的回合开始,防止全部伤害.然后你失去<火计>和<看破>,获得<观星>和<空城>',
                        jxtp_kongcheng_wudi: '空城',
                        jxtp_kongcheng_wudi_info: '',
                        jxtp_moumo: '权计',
                        jxtp_moumo_info: '',
                        jxtp_quanji: '权计',
                        jxtp_quanji_info: '',
                        jxtp_zili: '自立',
                        jxtp_zili_info: '准备阶段开始时,若你武将牌上的<权>超过3个,则你变更势力为群,回复全部体力,然后修改技能【权计】并获得技能【排异】',
                        jxtp_paiyi: '排异',
                        jxtp_paiyi_info: '出牌阶段限2次,你可以弃置一张<权>,指定一名角色:①若其为你,你摸X张牌(X为你权的数量,最低为2最高为5)且本回合出杀次数+Y(Y为你的体力值).②若其不为你,其获得以下效果直到回合结束:你 的所有技能失效且你受到伤害时,此伤害+1.其收回全部装备并将手牌弃至Z(Z为你与其体力值最小值)',
                        jxtp_paiyi2: '排异',
                        jxtp_paiyi2_info: '锁定技,本回合内你的所有技能失效且你受到伤害时,此伤害+1',
                        jxtp_quanji1: '权计',
                        jxtp_quanji1_info: '',
                        jxtp_quanji2: '权计',
                        jxtp_quanji2_info: '',
                        jxtp_quanji3: '权计',
                        jxtp_quanji3_info: '当你造成/受到1点伤害后,你可以摸1/2张牌,然后将1张手牌置于你的武将牌上,称为<权>,你的手牌上限+X(X为你的<权>的数量).摸牌阶段结束后,你可以用任意张<权>交换你等量的手牌',
                        jxtp_quanji4: '权计',
                        jxtp_quanji4_info: '①弃牌阶段开始时,若你的手牌数不小于体力值,或当你受到1点伤害后,你可以摸2张牌,然后将1张手牌置于你的武将牌上,成为<权>,你的手牌上限+X(X为你的<权>的数量). ②出牌阶段,当你使用一张牌后,若此牌花色与本回合使用牌的花色均不同,你可以根据已使用花色的数量选择:①2色:重铸一名角色2张牌.②3色:令一名角色摸2张牌.③4色:获得一名角色2张牌',
                        jxtp_paiyi1: '排异',
                        jxtp_paiyi1_info: '',
                        jxtp_quanji5: '权计',
                        jxtp_quanji5_info: '',
                        jxtp_paiyi3: '排异',
                        jxtp_paiyi3_info: '',
                        jxtp_kuiji2: '窥机',
                        jxtp_kuiji2_info: '',
                        jxtp_kuiji0: '窥机',
                        jxtp_kuiji0_info: '①出牌阶段限一次,你可以选择一名其他角色,你弃置你与其共计四张牌.②锁定技,你跳过弃牌阶段',
                        jxtp_niqu2: '逆取',
                        jxtp_niqu2_info: '火伤+1',
                        jxtp_niqu1: '逆取',
                        jxtp_niqu1_info: '①出牌阶段限一次,你可以选择最多两名角色,对其各造成1点火焰伤害.②锁定技,你造成的火焰伤害+1',
                        jxtp_chihe2: '叱吓',
                        jxtp_chihe2_info: '',
                        jxtp_chihe1: '叱吓',
                        jxtp_chihe1_info: '①当你使用【杀】或【决斗】指定目标后,你可以亮出牌堆顶五张牌,然后每有一张牌花色与你使用的【杀】或【决斗】花色相同,你令此【杀】或【决斗】伤害+1,且其不能使用亮出牌的花色响应此【杀】.②锁定技,你使用牌无距离限制',
                        jxtp_xiaolu2: '宵赂',
                        jxtp_xiaolu2_info: '',
                        jxtp_xiaolu1: '宵赂',
                        jxtp_xiaolu1_info: '①出牌阶段限一次,你可以摸5张牌,然后你选择5张牌将其交给一名其他角色或失去一点体力.②锁定技,其他人获得你的牌时,你摸两张牌',
                        jxtp_yaozhuo2: '谣诼',
                        jxtp_yaozhuo2_info: '你的拼点牌亮出后,你可以令其点数改为K或A',
                        jxtp_yaozhuo1: '谣诼',
                        jxtp_yaozhuo1_info: '①出牌阶段限一次,你可以摸一张牌并选择一名其他角色拼点:若你赢,跳过其下一个出牌阶段;若你没赢,其将手牌弃置至体力上限且直到其下个回合结束,其非锁定技失效.②锁定技,你的拼点牌亮出后,你可以令其点数改为K或A',
                        jxtp_zimou2: '自谋',
                        jxtp_zimou2_info: '',
                        jxtp_zimou1: '自谋',
                        jxtp_zimou1_info: '①出牌阶段限一次,你可以从牌堆或者弃牌堆获得一张【酒】和随机一张非伤害类锦囊牌.②锁定技,出牌阶段,当你使用前三张牌时,你依次从牌堆或弃牌堆获得一张【杀】、【火攻】和【决斗】',
                        jxtp_pichai2: '庀材',
                        jxtp_pichai2_info: '',
                        jxtp_pichai1: '庀材',
                        jxtp_pichai1_info: '①出牌阶段限一次,你可进行一次判定:若判定结果与本阶段内以此法进行判定的判定结果花色均不相同,你可以重复此判定.然后你可以将所有生效的判定牌交给任意一名角色,若其已受伤,其回复全部体力,否则其增加1点体力上限.②锁定技,出牌阶段,你出杀次数+1',
                        jxtp_miaoyu2: '妙语',
                        jxtp_miaoyu2_info: '',
                        jxtp_miaoyu1: '妙语',
                        jxtp_miaoyu1_info: '①你可以将至多两张相同花色的牌按下列规则使用或打出:♥️️️当【桃】;♦️️️当火【杀】;♣️️️当【闪】;♠️️️当【无懈可击】.当你以此法使用【桃】时,你可以摸一张牌;当你以此法使用【无懈可击】时,你可以弃置该非延时锦囊使用者的一张牌;若你以此法使用两张红色牌,则此牌回复值或伤害值+1;若你以此法使用了两张黑色牌,则你获得当前回合角色一张牌.②锁定技,你受到的伤害至多为1',
                        jxtp_taoluan3: '滔乱',
                        jxtp_taoluan3_info: '',
                        jxtp_taoluan4: '滔乱',
                        jxtp_taoluan4_info: '①每个回合限一次,你可将一张牌当做任意一张基本牌或锦囊牌使用,然后你摸两张牌.②锁定技,你使用【杀】可以额外指定任意合法目标.③锁定技,【乐不思蜀】对你无效',
                        jxtp_chiyan1: '鸱咽',
                        jxtp_chiyan1_info: '①当你使用【杀】指定一个目标后,你可以令其非锁定技失效直至本回合结束并将其至多X(X为其体力上限且最多为5)张牌扣置于其的武将牌上;若如此做,当前回合结束后,该角色弃置这些牌.②锁定技,你使用【杀】造成的伤害+1.③锁定技,【兵粮寸断】对你无效',
                        jxtp_chiyan3: '鸱咽',
                        jxtp_chiyan3_info: '',
                        jxtp_taoluan5: '滔乱',
                        jxtp_taoluan5_info: '',
                        jxtp_taoluan6: '滔乱',
                        jxtp_taoluan6_info: '',
                        jxtp_mowang8: '殁亡 ',
                        jxtp_mowang8_info: '',
                        jxtp_mowang9: '殁亡',
                        jxtp_mowang9_info: '',
                        jxtp_mowang10: '殁亡',
                        jxtp_mowang10_info: '',
                        jxtp_qice_end: '奇策',
                        jxtp_qice_end_info: '',
                        jxtp_qice0: '奇策',
                        jxtp_qice0_info: '①出牌阶段限X次,你可以将全部手牌当做任意普通锦囊牌使用(X为你的‘奇策’标记数).②锁定技,结束阶段,你移除全部‘奇策’标记选择回复1点体力或摸双倍数量的牌',
                        jxtp_mouzhu: '谋主',
                        jxtp_mouzhu_info: '锁定技,你使用转化类锦囊牌时,摸X张牌(X为‘奇策’数)',
                        jxtp_zhiyu1: '智愚',
                        jxtp_zhiyu1_info: '你受到1点伤害后,你摸1张牌,伤害来源弃置1张牌,若其无牌可弃,你回复1点体力',
                        jxtp_miaolve: '妙略',
                        jxtp_miaolve_info: ' ①游戏开始时/你的回合开始时,你获得两张/一张【瞒天过海】;②你的准备阶段或当你受到伤害后,可以选择一项:1.获得一张智囊牌,2.摸两张牌',
                        jxtp_yingjia: '迎驾 ',
                        jxtp_yingjia_info: '每轮每名角色限一次,其回合结束时,你可以选择一项①弃置一张手牌令其执行一个额外回合,②摸一张牌',
                        jxtp_polu: '破橹',
                        jxtp_polu_info: '①锁定技,游戏开始时或准备阶段开始时,若你没有【霹雳车】,你将缺失的【霹雳车】置入对应装备区,若你有【霹雳车】,你可以弃置一名角色至多两张牌.②出牌阶段,你可以重铸装备牌',
                        jxtp_quchong: '渠冲',
                        jxtp_quchong_info: '①游戏开始时或结束阶段开始时,若你没有【大攻车】,你将一张【大攻车·守备】置入装备区,出牌阶段开始时,若你没有【大攻车】,你将一张【大攻车·进击】置入装备区;若你有【大攻车】,你可以弃置一名角色最多两张牌.②准备阶段,你可以重铸任意张牌,出牌阶段,你可以重铸装备牌',
                        jxtp_choulve: '筹略',
                        jxtp_choulve_info: '①出牌阶段限一次,你可以将一张手牌当上回合未使用过的普通锦囊牌使用.②锁定技,你受到伤害时进行判定,若判定结果为红色,此伤害-1,否则你摸一张牌',
                        jxtp_xunjie: '逊节',
                        jxtp_xunjie_info: '锁定技,若你拥有【大攻车·进击】,你造成伤害+X(X为当前游戏轮数);若你拥有【大攻车·守备】,你受到的伤害始终-1;若你没有【大攻车】,当你受到伤害时,你摸两张牌',
                        jxtp_jiang: '激昂',
                        jxtp_jiang_info: '①你使用【决斗】或红色【杀】选择目标时,你可以流失1点体力并增加1点护甲,额外为此牌指定一个目标.②当你使用【决斗】或红色【杀】指定目标后,或成为【决斗】或红色【杀】的目标后,你摸两张牌.③出牌阶段限一次,你可以将所有手牌当【决斗】使用',
                        jxtp_yingzi: '英姿',
                        jxtp_yingzi_info: '锁定技,摸牌阶段,你每满足以下一项,你便多摸一张牌且本回合手牌上限+1:1.手牌数大于等于1;2.体力值大于等于1;3.装备区的牌数大于等于1;4.已损失体力值大于等于1;5.护甲值大于等于1',
                        jxtp_yinghun: '英魂',
                        jxtp_yinghun_info: '准备阶段,你可以选择一名其他角色并选择一项:1.令其摸X张牌,然后弃置你已损失体力值张牌;2.令其摸你当前体力值张牌,然后弃置X张牌(X为你的体力值上限)',
                        jxtp_hunzi: '魂姿',
                        jxtp_hunzi_info: '觉醒技,当你进入濒死状态时,你可以回复X+1点体力并修改【激昂】③为出牌阶段限X次(X为场上吴势力角色数),你增加1点体力上限,获得2点护甲并摸4张牌,然后获得<英姿>和<英魂>',
                        jxtp_zhiba: '制霸',
                        jxtp_zhiba_info: '主公技,锁定技,出牌阶段开始时,若场上有其他吴势力角色存活,你从牌堆或弃牌堆获得一张【决斗】. ',
                        jxtp_fencheng: '焚城',
                        jxtp_fencheng_info: '限定技,出牌阶段,你可以选择任意角色,令其弃置全部牌(至少4张)且直到其回合结束所有技能失效,否则其受到你对其造成的2点火焰伤害.选择弃牌的角色进入弃城状态:你的手牌上限为1;选择受伤的角色进入灼伤状态:你使用牌时,需弃置1张牌,若此时为你回合外,你需额外弃置1张牌;你受到火焰伤害时,伤害+1',
                        jxtp_juece: '绝策',
                        jxtp_juece_info: '你可以在以下时机对该角色造成1点火焰伤害:1、你的回合内,一名角色失去最后的手牌时;2、其他角色的结束阶段,其没有手牌时;3、你的结束阶段,选择一名没有手牌的其他角色',
                        jxtp_zhuoshang: '灼伤',
                        jxtp_zhuoshang_info: '',
                        jxtp_qicheng: '弃城',
                        jxtp_qicheng_info: '',
                        jxtp_mieji: '灭计',
                        jxtp_mieji_info: '出牌阶段限一次,你可以展示一张手牌并将之置于牌堆顶,令一名有手牌的其他其选择一项:①交给你1张锦囊牌,②弃置1张非锦囊牌并失去1点体力',
                        jxtp_yangwei: '扬威',
                        jxtp_yangwei_info: '出牌阶段限一次,你可以选择1项:1、摸2张牌,本回合你使用【杀】次数+1;2、视为使用一张【决斗】;3、背水,减少1点体力上限同时执行以上两项,且在本回合下一次造成伤害后,重置此技能',
                        jxtp_yaowu: '耀武',
                        jxtp_yaowu_info: '你造成或受到伤害时,你摸1张牌.若令你受伤的为红色牌,则你额外增加1点体力上限',
                        jxtp_jieyuan: '竭缘',
                        jxtp_jieyuan_info: '①你对其他角色造成伤害时/你受到其他角色的伤害时,你可以弃置一张黑色/红色牌,然后摸一张牌并令此伤害+1/-1.②你对其他角色造成伤害后,你可以获得其他角色一张牌,若获得的牌为装备牌,你视为使用一张【决斗】,否则其摸一张牌',
                        jxtp_fenxin_fail: '焚心',
                        jxtp_fenxin_fail_info: '锁定技,准备阶段/结束阶段,你获得两张黑色/红色牌.若你本回合使用过牌但未造成伤害,你于结束阶段失去1点体力',
                        jxtp_fenxin_win: '焚心',
                        jxtp_fenxin_win_info: '锁定技,准备阶段/结束阶段,你获得一张黑色/红色牌',
                        jxtp_fenxin2: '焚心',
                        jxtp_fenxin2_info: '',
                        jxtp_fenxin1: '焚心',
                        jxtp_fenxin1_info: '殊死一搏!',
                        jxtp_fenxin: '焚心',
                        jxtp_fenxin_info: '①锁定技,准备阶段/结束阶段,你获得一张黑色/红色牌.若你本回合内使用过牌但未造成过伤害,你于回合结束阶段失去1点体力.②每局游戏限一次,你可以于出牌阶段视为使用一张无距离限制且无视防具的【刺杀】,若此回合你成功击杀了任意角色,你将焚心①修改为不会失去体力,否则你失去1点体力并修改焚心①令获得牌数翻倍',
                        jxtp_fenxin3: '焚心',
                        jxtp_fenxin3_info: '',
                        jxtp_beige: '悲歌',
                        jxtp_beige_info: '①你或者拥有<好感>的角色受到伤害后且你与其均不为伤害来源时,你可以弃置1张牌进行判定,若结果为红色,你摸2张牌;若结果为黑色,伤害来源弃置两张牌;若花色为♥️️️,其回复等同于伤害值的体力并增加一点体力上限;若花色为♦️️️,其摸3张牌;若花色为♣️️️,伤害来源失去1点体力,若花色为♠️️️,伤害来源本回合非锁定技失效且手牌上限永久-2.②当拥有<好感>的角色死亡时,你可以令伤害来源失去全部技能,你获得技能【悲奋】直到你的下个回合结束',
                        jxtp_beifen: '悲愤',
                        jxtp_beifen_info: '你使用牌无距离和次数限制,你手牌上限+X,摸牌阶段摸牌数+X(X为已阵亡拥有<好感>角色数的两倍)',
                        jxtp_chenqing: '陈情',
                        jxtp_chenqing_info: '锁定技,①游戏开始时,你可以选择任意名角色,其获得你的<好感>.每轮开始时你可以重新选定<好感>角色.②你或有<好感>的角色出牌阶段开始时,你摸1张牌然后你选择一项:1、交给其1张手牌令其本回合内获得【默识】;2、你令其摸4张牌,然后弃置4张牌.③未有<好感>的角色出牌阶段开始时,若其手牌数大于其体力上限,你选择一项:1、弃置1张手牌令其本回合内获得【霜笳】;2、获得其1张牌',
                        jxtp_mozhi: '默识',
                        jxtp_mozhi_info: '锁定技,你记录你本回合使用的牌数为X.结束阶段,若X不大于你的体力上限,你摸X张牌.若X等于你的体力值,你回复1点体力',
                        jxtp_shuangjia: '霜笳',
                        jxtp_shuangjia_info: '锁定技,出牌阶段,当你使用第X张牌时,弃置全部牌并结束出牌阶段(X为你的体力上限)',
                        jxtp_zhouxian: '州贤',
                        jxtp_zhouxian_info: '①锁定技,其他角色使用带伤害标签的牌指定你为目标时,你展示牌堆顶一张牌,其除非弃置两张与展示牌相同类型的手牌,否则此牌对你无效.②弃牌阶段开始时,你可以选择任意张牌交给一名其他角色,然后你回复一点体力',
                        jxtp_yingtu: '营图',
                        jxtp_yingtu_info: '锁定技,你的回合外,①当其他角色于摸牌阶段外获得牌时,若当前回合角色手牌全场最多,你摸一张牌;②当其他角色使用一张装备牌后,若其装备数量全场最多,你可以获得当前回合角色一张牌',
                        jxtp_guimou1: '诡谋',
                        jxtp_guimou1_info: '锁定技,游戏开始时/你的结束阶段,你随机/选择其中一项直到你的下个准备阶段:1、记录期间场上角色使用牌数;2、记录期间场上角色弃置牌数;3、记录期间场上角色获得牌数.准备阶段,你可以选择一名场上对应记录数值最少的其他角色,观看其手牌并将其两张牌交给另一名角色或令其失去两点体力',
                        jxtp_zhouxian_discard: '州贤',
                        jxtp_zhouxian_discard_info: '弃牌阶段开始时,你可以将你的任意牌交给一名其他角色',
                        jxtp_xionghuo: '凶镬',
                        jxtp_xionghuo_info: '游戏开始时或你的准备阶段,你获得1个<暴戾>标记(最多获得8个标记).出牌阶段,你可以交给一名其他角色一个<暴戾>标记,你对有此标记的角色造成的伤害+1,且其准备阶段开始时,你观看其手牌并选择其一张牌获得之,其移去<暴戾>标记并随机执行一项:1.受到1点火焰伤害且本回合不能对你使用【杀】;2.受到1点冰冻伤害且本回合手牌上限-3;3.受到1点雷电伤害且本回合非锁定技失效',
                        jxtp_shajue: '杀绝',
                        jxtp_shajue_info: '锁定技,摸牌阶段,你额外摸X张牌(X为你拥有的<暴戾>标记数).其他角色进入濒死状态时,你获得一个<暴戾>标记,若其体力小于0,你获得使其进入濒死状态的牌.你击杀其他角色后,你回复1点体力,然后直到你的下个回合开始,你不能成为其他角色使用牌的目标',
                        jxtp_wudi: '无敌',
                        jxtp_wudi_info: '你无敌了',
                        jxtp_cansi: '残肆',
                        jxtp_cansi_info: '锁定技,准备阶段,你回复1点体力,然后选择一名其他角色,其将手牌弃置至等同于体力值的张数,然后你依次对其使用一张<推心置腹>、<笑里藏刀>、<出其不意>、<杀>和<火攻>,你因此技能每造成1点伤害,你获得1个<浮屠>标记并摸1张牌',
                        jxtp_futu: '浮屠',
                        jxtp_futu_info: '觉醒技,①回合结束时,若你的<浮屠>标记数大于等于7,你移除所有<浮屠>标记,调整体力上限为7,并回复全部体力,失去技能【残肆】、【浮屠】,获得技能【佛宗】并开启【净土】光环:任意角色在其回合内,其使用牌无距离限制,其所有技能失效,准备阶段和结束阶段弃置全部牌并在结束阶段失去一点体力上限.②若你进入濒死或在回合结束时,你本回合已发动过【残肆】但未造成伤害,你失去技能【浮屠】,回复全部体力,获得5点护甲并升级技能【残肆】',
                        jxtp_jingtu: '佛宗',
                        jxtp_jingtu_info: '锁定技,你不会因净土光环而失去技能,你跳过判定和弃牌阶段,你锁定你当前体力上限.当你的手牌数小于体力上限时,你将手牌补至体力上限',
                        jxtp_jingtu_skill: '净土',
                        jxtp_jingtu_skill_info: '受【净土】光环影响,所有技能失效',
                        jxtp_cansi2: '残肆',
                        jxtp_cansi2_info: '锁定技,准备阶段,你选择一名其他角色,其本回合内所有技能失效,其收回全部装备并将手牌弃置至等同于体力值的张数,然后你依次对其使用一张<趁火打劫>、<杀>、<决斗>和<火攻>,你因此技能每造成1点伤害,你获得1点护甲并摸2张牌.若你因此技能造成的伤害不足3点,其技能失效时间延长至其下个回合结束',
                        jxtp_zyyingzi: '英姿',
                        jxtp_zyyingzi_info: '锁定技,摸牌阶段,你每满足以下一项,你便多摸一张牌且本回合手牌上限+1:1.手牌数大于等于1;2.体力值大于等于1;3.装备区的牌数大于等于1;4.已损失体力值大于等于1;5.护甲值大于等于1',
                        jxtp_fanjian: '反间',
                        jxtp_fanjian_info: '出牌阶段限一次,你可以展示一张手牌并交给一名其他角色并获得1点护甲,其选择一项:1.展示所有手牌,然后弃置与此牌颜色相同的所有牌并失去1点体力;2.受到你造成的3点火焰伤害并获得1点护甲',
                        jxtp_kurou: '苦肉',
                        jxtp_kurou_info: '①出牌阶段限一次,你可以失去任意点体力,若如此做,你接下来使用的X张牌无距离和次数限制且不可被响应(X为你因此失去的体力值+1);②锁定技,当你受到伤害时,你防止此伤害并失去1点体力',
                        jxtp_zhaxiang: '诈降',
                        jxtp_zhaxiang_info: '锁定技,①回合开始时和弃牌阶段开始时,你失去全部护甲并回复Y点体力(Y未你因此失去的护甲值-1);②当你失去1点体力时,你获得1点护甲并摸2张牌',
                        jxtp_zuilun: '罪论',
                        jxtp_zuilun_info: '结束阶段,你可以观看牌堆顶三张牌,你每满足以下一项便获得其中的一张并获得括号内对应效果,然后以任意顺序放回其余的牌:1.你于此回合内造成过伤害(你获得[集智]和[看破]直到你的下个出牌阶段结束);2.你于此回合内未弃置过牌(你回复1点体力,若你的体力上限小于7则你额外增加1点体力上限);3.手牌数为全场最少(你可移动场上一张牌或获得一点护甲).若均不满足,你与一名其他角色失去1点体力',
                        jxtp_fuyin: '父荫',
                        jxtp_fuyin_info: '锁定技,你每回合第一次成为【杀】或【决斗】的目标后,若你的手牌数不大于/不小于该角色,此牌对你无效/当前回合角色需弃置两张牌',
                        jxtp_jiuyuan: '救援 ',
                        jxtp_jiuyuan_info: '主公技,锁定技,你对你使用的<桃>回复量+1,其他吴势力角色使用桃时,你与其各摸1张牌',
                        jxtp_yuxiang2: '薮影',
                        jxtp_yuxiang2_info: '锁定技,场上有角色使用【南蛮入侵】时,你摸2张牌.准备阶段和结束阶段结束时,你可以视为使用一张【南蛮入侵】',
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].push(`ext:极限突破/image/${i}.jpg`);
                    info[4].push(`die:ext:极限突破/audio/${i}.mp3`);
                }
                lib.config.all.characters.add('极限突破');
                lib.config.characters.add('极限突破');
                lib.translate['极限突破_character_config'] = `极限突破`;
                return QQQ;
            });
        },
        package: extensionInfo,
    };
});

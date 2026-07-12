import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '星火燎原·紫',
        content(config, pack) { },
        precontent() {
            //—————————————————————————————————————————————————————————————————————————————视为转化虚拟牌相关自创函数
            const shiwei = function () {
                lib.element.player.filterCardx = function (card, filter) {
                    if (typeof card == 'string') {
                        card = { name: card };
                    }
                    const player = this,
                        info = get.info(card);
                    if (!lib.filter.cardEnabled(card, player)) return false; //卡牌使用限制
                    if (info.notarget) return true;
                    if (!info.filterTarget) return true;
                    if (!info.enable) return true;
                    return game.hasPlayer(function (current) {
                        if (info.multicheck && !info.multicheck(card, player)) return false;
                        if (filter) {
                            if (!lib.filter.targetInRange(card, player, current)) return false; //距离限制
                            return lib.filter.targetEnabledx(card, player, current);
                        }
                        return lib.filter.targetEnabled(card, player, current); //目标限制
                    });
                }; //适用于choosetouse的filtercard
                lib.element.player.filterCard = function (card, filter) {
                    if (typeof card == 'string') {
                        card = { name: card };
                    }
                    const player = this,
                        info = get.info(card),
                        event = _status.event;
                    const evt = event.name.startsWith('chooseTo') ? event : event.getParent((q) => q.name.startsWith('chooseTo'));
                    if (evt.filterCard2) {
                        return evt._backup.filterCard(card, player, evt);
                    } //viewAs的技能会修改chooseToUse事件的filterCard
                    else if (evt.filterCard && evt.filterCard != lib.filter.filterCard) {
                        return evt.filterCard(card, player, evt); //这里也有次数限制
                    } else {
                        if (!lib.filter.cardEnabled(card, player)) return false; //卡牌使用限制
                        if (info.notarget) return true;
                        if (!info.filterTarget) return true;
                        if (!info.enable) return true;
                        if (evt.name == 'chooseToRespond') return true; //chooseToRespond无次数距离目标限制
                        if (filter) {
                            if (!lib.filter.cardUsable(card, player, evt)) return false; //次数限制
                        }
                        if (evt.filterTarget && evt.filterTarget != lib.filter.filterTarget) {
                            return game.hasPlayer(function (current) {
                                return evt.filterTarget(card, player, current);
                            });
                        }
                        return game.hasPlayer(function (current) {
                            if (info.multicheck && !info.multicheck(card, player)) return false;
                            if (filter) {
                                if (!lib.filter.targetInRange(card, player, current)) return false; //距离限制
                                return lib.filter.targetEnabledx(card, player, current);
                            }
                            return lib.filter.targetEnabled(card, player, current); //目标限制
                        });
                    }
                }; //删除次数限制//filter决定有无次数距离限制//viewAs的技能会修改chooseToUse事件的filterCard
                lib.element.player.qcard = function (type, filter, range) {
                    const list = [];
                    for (const i in lib.card) {
                        const info = lib.card[i];
                        if (info.mode && !info.mode.includes(lib.config.mode)) {
                            continue;
                        }
                        if (!info.content) {
                            continue;
                        }
                        if (['delay', 'equip'].includes(info.type)) {
                            continue;
                        }
                        if (type && info.type != type) {
                            continue;
                        }
                        if (filter !== false) {
                            const player = this;
                            if (range !== false) {
                                range = true;
                            }
                            if (!player.filterCard(i, range)) {
                                continue;
                            }
                        }
                        list.push([lib.suits.randomGet(), lib.number.randomGet(), i]); //花色/点数/牌名/属性/应变
                        if (i == 'sha') {
                            for (const j of Array.from(lib.nature.keys())) {
                                list.push([lib.suits.randomGet(), lib.number.randomGet(), 'sha', j]);
                            }
                        }
                    }
                    return list;
                }; //可以转化为的牌//filter控制player.filterCard//range控制是否计算次数与距离限制
            };
            shiwei();
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '星火燎原·紫',
                    connect: true,
                    character: {
                        zi_wangling: ['male', 'wei', 4, ['zi_zhangchuan', 'zi_mouli'], []],
                        zi_yuejin: ['male', 'wei', 4, ['zi_xiaoguo'], []],
                        zi_xiahouba: ['male', 'shu', '4/5', ['zi_baobian'], []],
                        zi_zhangyì: ['male', 'shu', 4, ['zi_zhiyi'], []],
                        zi_sunhuan: ['male', 'wu', 4, ['zi_zhandao'], []],
                        zi_puyangxing: ['male', 'wu', 3, ['zi_gongyong', 'zi_zuotang'], []],
                        zi_yanbaihu: ['male', 'qun', 4, ['zi_zhidao', 'zi_jili'], []],
                        zi_yuantanyuanshang: ['male', 'qun', 4, ['zi_neifa'], []],
                        zi_litong: ['male', 'wei', 4, ['zi_tuifeng'], [], []],
                        zi_wangshuang: ['male', 'wei', 8, ['zi_zhuilie'], [], []],
                        zi_fuqian: ['male', 'shu', 4, ['zi_danyong'], [], []],
                        zi_wuban: ['male', 'shu', 4, ['zi_xiahao'], [], []],
                        zi_sunyi: ['male', 'wu', 4, ['zi_qiaoji'], [], []],
                        zi_wujing: ['male', 'wu', 4, ['zi_xiezhong', 'zi_fuye'], [], []],
                        zi_hucheer: ['male', 'qun', 4, ['zi_yedao'], [], []],
                        zi_quyi: ['male', 'qun', 4, ['zi_fuqi', 'zi_jiaozi'], [], []],
                        zi_yangfu: ['male', 'wei', 4, ['zi_nantui', 'zi_yifu'], []],
                        zi_jianggan: ['male', 'wei', 3, ['zi_weicheng', 'zi_daoshu'], []],
                        zi_qiaozhou: ['male', 'shu', 3, ['zi_xuejiu', 'zi_xingbu'], []],
                        zi_xf_yiji: ['male', 'shu', 3, ['zi_huaxian', 'zi_dingli'], []],
                        zi_zhaozi: ['male', 'wu', 3, ['zi_poli', 'zi_weidui'], []],
                        zi_zhangwen: ['male', 'wu', 3, ['zi_heguo', 'zi_tiannan'], []],
                        zi_mayuanyi: ['male', 'qun', 4, ['zi_heluan'], []],
                        zi_yanpu: ['male', 'qun', 3, ['zi_fumou', 'zi_birui'], []],
                        zi_xinxianying: ['female', 'wei', 3, ['zi_zhidui', 'zi_caishi'], []],
                        zi_luzhi: ['male', 'wei', 3, ['zi_qingzhong', 'zi_weijing'], []],
                        zi_huojun: ['male', 'shu', 4, ['zi_guzhu'], []],
                        zi_yangwan: ['female', 'shu', 3, ['zi_zhenwan', 'zi_fuyi'], []],
                        zi_sunluyu: ['female', 'wu', 3, ['zi_meibu', 'zi_mumu'], []],
                        zi_zhangti: ['male', 'wu', 3, ['zi_fujiang', 'zi_shuxun'], []],
                        zi_dongbai: ['female', 'qun', 3, ['zi_lianzhu', 'zi_xiehui'], []],
                        zi_liuyu: ['male', 'qun', 4, ['zi_lyweicheng', 'zi_lide'], []],
                        zi_sunziliufang: ['male', 'wei', 3, ['zi_guizao', 'zi_jiyu'], []],
                        zi_jiaxu: ['male', 'wei', 3, ['zi_zhenlve', 'zi_jianshu', 'zi_yongdi'], []],
                        zi_huanghao: ['male', 'shu', 3, ['zi_qinqing', 'zi_huisheng'], []],
                        zi_yangyi: ['male', 'shu', 3, ['zi_juanxia', 'zi_dingcuo'], []],
                        zi_cenhun: ['male', 'wu', 3, ['zi_jishe', 'zi_lianhuo'], []],
                        zi_sunjunsunchen: ['male', 'wu', 4, ['zi_jianwei', 'zi_xiongyi'], []],
                        zi_zhangrang: ['male', 'qun', 3, ['zi_taoluan'], []],
                        zi_beimihu: ['female', 'qun', 3, ['zi_zongkui', 'zi_guju', 'zi_baijia'], []],
                        zi_jikang: ['male', 'wei', 3, ['zi_qingxian', 'zi_juexiang'], []],
                        zi_ruanji: ['male', 'wei', 3, ['zi_fangyi', 'zi_tuqiong'], []],
                        zi_maliang: ['male', 'shu', 3, ['zi_qinshu', 'zi_yingyuan'], []],
                        zi_xianglang: ['male', 'shu', 3, ['zi_cangjuan', 'zi_yandian', 'zi_shouxue'], []],
                        zi_kanze: ['male', 'wu', 3, ['zi_xiashu', 'zi_kuanshi'], []],
                        zi_weiyao: ['male', 'wu', 3, ['zi_guozhu', 'zi_bianshi', 'zi_boyi'], []],
                        zi_mamidi: ['male', 'qun', 3, ['zi_bingmao', 'zi_xuzhuan'], []],
                        zi_zhengxuan: ['male', 'qun', 3, ['zi_xidian', 'zi_bianzhu'], []],
                        zi_simafu: ['male', 'wei', 3, ['zi_bukong', 'zi_zhenchi'], []],
                        zi_caohong: ['male', 'wei', 4, ['zi_yuanhu'], []],
                        zi_xujing: ['male', 'shu', 3, ['zi_guming', 'zi_jushi'], []],
                        zi_laimin: ['male', 'shu', 3, ['zi_jingdian', 'zi_kuangyan'], []],
                        zi_dingfeng: ['male', 'wu', 4, ['zi_fenxun', 'zi_duanbing'], []],
                        zi_lukai: ['male', 'wu', 3, ['zi_leijian', 'zi_xunxuan', 'zi_jiane'], []],
                        zi_fuwan: ['male', 'qun', 4, ['zi_moukui'], []],
                        zi_liuqi: ['male', 'qun', 3, ['zi_wenji', 'zi_tunjiang'], []],
                    },
                    characterIntro: {
                        zi_yangfu: '杨阜,字义山,天水冀县(今甘肃甘谷东南)人,三国时期曹魏名臣.献帝建安初年,任凉州从事,旋拜安定长史,韦康任刺史后辟为别驾,改任州参军.因讨马超有功,赐爵关内侯.曹操征汉中时,杨阜担任益州刺史,回来后又担任武都太守.魏文帝曹丕、明帝曹叡时,在朝廷任职,德才兼备、刚正不阿.原甘谷县文昌宫西侧尚有杨氏家祠,内悬<两代尚书>匾额,即指杨阜和杨豹而言.',
                        zi_zhaozi: '赵咨,字德度,南阳人,博闻多识,善于辩论.三国时期吴国大臣,吴蜀夷陵之战时,奉孙权之命出使曹魏.',
                        zi_sunhuan: '孙桓(198年－223年),字叔武,吴郡富春(今浙江杭州富阳区)人,三国时期吴国建武将军,孙河第三子,仪容端正,器怀聪明,博学强记,能论议应对,孙权常称为<宗室颜渊>.初擢为武卫都尉,建安二十四年(219年),参与由吕蒙指挥的袭击荆州行动,从讨关羽于华容,招揽关羽余众,得五千人以及大量牛马器械.黄武元年(222年),孙桓二十五岁,拜安东中郎将,跟随陆逊抗击进攻东吴的刘备.当时刘备率领众多兵众进攻,满山都是蜀军,孙桓奋战,与陆逊等协力击破蜀军.刘备兵败逃走,孙桓截击,<斩上夔道,扼要径>,差点生擒刘备.战后孙桓因功拜建武将军,封丹徒侯,督牛渚,修筑横江坞,期间逝世.',
                        zi_zhangti: '张悌(236年－280年),字巨先.荆州襄阳郡(今湖北省襄阳市)人.三国孙吴时大臣.张悌自少有名理,于吴景帝时为屯骑校尉.吴末帝天纪三年(279年)升任丞相.天纪四年(280年),西晋伐吴.张悌明知必败,仍与沈莹、诸葛靓率军三万渡江接战,与晋军交战,大败于板桥.诸葛靓率众来迎张悌,张悌不肯逃命,以身殉难.',
                        zi_sunjunsunchen: '孙峻(219年－256年10月19日),字子远,吴郡富春(今浙江富阳)人.三国时期吴国宗室、权臣,昭义中郎将孙静曾孙,定武中郎将孙暠之孙,散骑侍郎孙恭之子.孙峻年少时骁勇果敢精明强干,初任武卫都尉兼侍中,孙权病危时,与诸葛恪共受遗诏辅政,孙亮即位之后,升任武卫将军,封都乡侯,在设计诛杀政敌诸葛恪后开始掌握吴国大权,拜丞相、大将军,封富春侯.掌权后,大肆残害宗亲,废太子孙和、孙权之女孙鲁育、宣太子孙登之子孙英先后被杀.太平元年(256年),孙峻在征伐魏国时因病去世,时年38岁,将后事托付给了堂弟孙綝.景帝孙休在位时,孙綝被杀,孙峻、孙綝兄弟被孙休下诏从族谱上除名,改称故峻、故綝.<br>孙綝(chēn)(231年－259年1月18日),字子通,吴郡富春(今浙江杭州市富阳区)人.三国时期吴国宗室、权臣,昭义中郎将孙静曾孙、定武中郎将孙暠之孙、安民都尉孙绰之子.孙綝初任偏将军.太平元年(256年),孙綝的从兄孙峻在北伐曹魏途中过世,他接替其位,升任侍中兼武卫将军,领中外诸军事.掌权后,消灭了反对他的大司马滕胤、骠骑将军吕据等重臣,进而升为大将军,封永宁侯.孙綝执政时嗜好杀戮,与吴帝孙亮的矛盾激化.他最终废黜孙亮,改立琅琊王孙休为帝.孙休即位后,加孙綝为丞相,领荆州牧.永安元年十二月(259年1月),孙綝在左将军张布等人的协助下被孙休捕杀,年仅二十八岁.他死后,孙休将其与孙峻从族谱上除名,改称故峻、故綝.',
                        zi_ruanji: '阮籍(公元210年～263年),字嗣宗,陈留尉氏(今河南省开封市)人,三国时期魏国诗人、竹林七贤之一.门荫入仕,累迁步兵校尉,世称阮步兵.崇奉老庄之学,政治上则采取谨慎避祸的态度.景元四年(公元263年),阮籍去世,享年五十三岁.作为<正始之音>的代表,著有<咏怀八十二首>、<大人先生传>等,其著作收录在<阮籍集>中.',
                        zi_xianglang: '向朗(约167年—247年),字巨达.襄阳郡宜城县(今湖北宜城)人,三国时期蜀汉官员、藏书家、学者.向朗早年师从于司马徽,并被荆州牧刘表任命为临沮县长.后随刘备入蜀,历任巴西、牂牁、房陵太守,并拜步兵校尉,领丞相长史,随丞相诸葛亮北伐.因包庇马谡被免职,后为光禄勋,转左将军、特进,封显明亭侯.曾代理丞相册封张皇后及太子刘璿.晚年专心研究典籍,诱导青年学习,家中藏书丰富,受到举国尊重.延熙十年(247年),向朗去世.<全三国文>收录有一篇<遗言戒子>.',
                        zi_weiyao: '韦曜(204年―273年),本名韦昭,字弘嗣,吴郡云阳县(今江苏省丹阳市)人.三国时期吴国重臣、史学家.少时好学,善于作文.早年曾任丞相掾、西安县令、尚书郎、太子中庶子、黄门侍郎、太史令等职.吴景帝孙休时期,担任中书郎、博士祭酒,管理国子学.吴末帝孙皓即位后,韦曜受封高陵亭侯,迁中书仆射、侍中,领左国史.凤凰二年(273年),被赐死,时年七十岁.韦曜著有<吴书>(合著)、<汉书音义><国语注><官职训><三吴郡国志>等.作为中国古代从事史书编纂时间最长的史学家,后世<三国志>大多取材<吴书>.',
                        zi_laimin: '来敏(165年—261年),字敬达,义阳新野人,东汉太中大夫来歙之后,司空来艳之子,三国时期蜀汉官员.东汉末年,逢董卓之乱,来敏跟随姐夫黄琬到荆州避难,黄琬是刘璋祖母的侄子,来敏又与姐姐来氏入蜀,被刘璋引为宾客.来敏喜欢读书,尤其喜欢<左氏春秋>.刘备平定益州后,以来敏为典学校尉,后立太子,来敏为家令.刘禅继位后,任命来敏为虎贲中郎将,诸葛亮驻汉中,请来敏为军祭酒、辅军将军.却因其口出狂言而被罢官,诸葛亮死后,来敏历任大长秋、光禄大夫、执慎将军等职,期间多次因说错话而被免官,蜀汉景耀年间,来敏去世,时年九十七岁.',
                        zi_lukai: '陆凯(198－269年),字敬风,吴郡吴县(今江苏省苏州市)人.三国时期吴国重臣,丞相陆逊的族侄,大司马陆抗的族兄.黄武年间,举孝廉出身,曾任永兴县长、诸暨县长,颇有治绩.拜建武都尉、儋耳太守,与聂友率军讨伐朱崖和儋耳,迁建武校尉.五凤二年(255年),讨斩零陵山贼陈毖,拜偏将军、巴丘督,册封都乡侯.迁武昌右部督,随军进入寿春.后拜荡魏将军,加号绥远将军.吴景帝孙休继位,拜征北将军、假节、领豫州牧.孙皓即位,迁任镇西大将军,都督巴丘,又领荆州牧,进封嘉兴侯.宝鼎元年(266年),迁左丞相.以正直及屡次劝谏孙皓而闻名.建衡元年(269年),去世,时年七十二.',
                    },
                    skill: {
                        //锁定技,你使用【杀】和普通锦囊牌均具有<助战→目标+1>的效果.若你的手牌数为全场最多,其他角色响应你的助战时摸一张牌
                        zi_bukong: {
                            trigger: {
                                player: ['useCardBefore'],
                            },
                            forced: true,
                            filter: (event, player) => event.targets && !['delay', 'equip'].includes(get.type(event.card)),
                            async content(event, trigger, player) {
                                //QQQ
                                let num = 0;
                                for (const npc of game.players) {
                                    const { cards } = await npc
                                        .chooseToDiscard('he', `弃置一张牌令${get.translation(player)}的${get.translation(trigger.card)}增加目标`, (c) => get.type(c) == get.type(trigger.card))
                                        .set('ai', (c) => get.attitude(player, npc) - get.value(c))
                                        .forResult();
                                    if (cards?.length) {
                                        num++;
                                        if (player.isMaxHandcard()) {
                                            npc.draw();
                                        }
                                    }
                                }
                                if (num > 0) {
                                    const { targets } = await player
                                        .chooseTarget('增加目标', [1, num], (c, p, t) => !trigger.targets.includes(t))
                                        .set('ai', (t) => get.effect(t, trigger.card, player, player))
                                        .forResult();
                                    if (targets?.length) {
                                        trigger.targets.addArray(targets);
                                    }
                                }
                            },
                        }, //AAA
                        zi_zhenchi: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'phaseEnd' },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.getHistory('damage').length;
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var targets = game
                                    .filterPlayer(function (current) {
                                        return current.getHistory('damage').length;
                                    })
                                    .sortBySeat();
                                player
                                    .chooseTarget(get.prompt2('zi_zhenchi'), [1, targets.length], function (card, player, target) {
                                        return targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets.sortBySeat();
                                    game.asyncDraw(targets);
                                }
                            },
                            ai: { expose: 0.2 },
                        },
                        zi_yuanhu: {
                            derivation: 'feiying',
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseJieshuBegin' },
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' }) > 0;
                            },
                            forced: true,
                            //结束阶段,你可以将一张装备牌置入一名角色的装备区.若如此做,其选择一项,你选择另一项:①回复1点体力;②摸两张牌;③弃置距离1以内的一名角色区域内一张牌;④获得技能〖飞影〗直到你的下个回合开始
                            async content(event, trigger, player) {
                                const result = await player.chooseCardTarget({
                                    prompt: get.prompt2('zi_yuanhu'),
                                    filterCard: (card) => get.type(card) == 'equip',
                                    position: 'he',
                                    filterTarget(card, player, target) {
                                        return target.isEmpty(get.subtype(card));
                                    },
                                    ai1: (card) => 8 - get.value(card),
                                    ai2: (target) => get.attitude(player, target),
                                }).forResult();
                                if (result.targets && result.targets[0] && result.cards && result.cards[0]) {
                                    result.targets[0].equip(result.cards[0]);
                                    const list = ['回血', '摸牌', '弃牌', '飞影'];
                                    var choiceList = ['回复1点体力', '摸两张牌', '弃置距离为1以内的一名角色区域内的一张牌', '获得【飞影】直到你的下个回合开始'];
                                    for (var i of [result.targets[0], player]) {
                                        const { result: result1 } = await i
                                            .chooseControl(list)
                                            .set('prompt', '援护:请选择一项')
                                            .set('choiceList', choiceList)
                                            .set('ai', function () {
                                                var num1 = get.effect(i, { name: 'wuzhong' }, i, i);
                                                if (!list.includes('回血')) num1 = -1;
                                                var num2 = get.recoverEffect(i, i, i);
                                                if (!list.includes('摸牌')) num2 = -1;
                                                var num3 = 0;
                                                const list1 = game.filterPlayer((current) => get.distance(i, current) <= 1 && current.countDiscardableCards(i, 'hej') && get.effect(current, { name: 'guohe' }, i, i) > 0);
                                                if (list1[0]) {
                                                    for (var j of list1) {
                                                        if (get.effect(j, { name: 'guohe' }, i, i) > num3) {
                                                            num3 = get.effect(j, { name: 'guohe' }, i, i);
                                                        }
                                                    }
                                                }
                                                if (!list.includes('弃牌')) num3 = -1;
                                                var num4 = 2;
                                                if (!list.includes('飞影')) num4 = -1;
                                                switch (Math.max(num1, num2, num3, num4)) {
                                                    case num1:
                                                        return '回血';
                                                    case num2:
                                                        return '摸牌';
                                                    case num3:
                                                        return '弃牌';
                                                    case num4:
                                                        return '飞影';
                                                }
                                            });
                                        var num = list.indexOf(result1.control);
                                        list.remove(result1.control);
                                        choiceList.remove(choiceList[num]);
                                        switch (result1.control) {
                                            case '回血':
                                                i.recover();
                                                break;
                                            case '摸牌':
                                                i.draw(2);
                                                break;
                                            case '弃牌':
                                                {
                                                    const { result: result2 } = await i.chooseTarget('弃置距离为1以内的一名角色的一张牌', true, (c, p, target) => get.distance(i, target) <= 1 && target.countDiscardableCards(i, 'hej')).set('ai', (target) => get.effect(target, { name: 'guohe' }, i, i));
                                                    if (result2.targets && result2.targets[0]) {
                                                        i.discardPlayerCard(result2.targets[0], 'hej', true);
                                                    }
                                                }
                                                break;
                                            case '飞影':
                                                i.addTempSkill('feiying', { player: 'phaseBegin' });
                                                break;
                                        }
                                    }
                                }
                            },
                        },
                        zi_guming: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (event.getParent('useCard').zi_guming || !event.targets || !event.targets.length) return false;
                                if (event.player == player) return get.type(event.card) == 'basic' || get.type(event.card) == 'trick';
                                return event.targets.length > 1;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.getParent('useCard').zi_guming = true;
                                var targets = trigger.targets;
                                player
                                    .chooseTarget(get.prompt2('zi_guming'), function (card, player, target) {
                                        return targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var trigger = _status.event.getTrigger();
                                        return -get.effect(target, trigger.card, trigger.player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    trigger.parent.excluded.add(target);
                                    player.addTempSkill('zi_guming_round', 'roundStart');
                                    player.addMark('zi_guming_round', 1, false);
                                }
                            },
                            subSkill: { round: { charlotte: true, onremove: true } },
                        },
                        zi_jushi: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                var num = player.getStat('skill').zi_jushi || 0;
                                return num < Math.min(5, player.countMark('zi_guming_round'));
                            },
                            filterTarget: true,
                            content() {
                                'step 0';
                                target.draw(2);
                                ('step 1');
                                if (
                                    !target.countCards('h', function (card) {
                                        return (
                                            get.type(card) != 'basic' &&
                                            game.hasPlayer(function (current) {
                                                return target.canUse(card, current);
                                            })
                                        );
                                    })
                                )
                                    result.index = 1;
                                else
                                    target
                                        .chooseControl()
                                        .set('prompt', '举仕:请选择一项')
                                        .set('ai', function () {
                                            var player = _status.event.player;
                                            if (_status.event.goon) return 1;
                                            if (
                                                !player.countCards('h', function (card) {
                                                    return (
                                                        get.type(card) != 'basic' &&
                                                        game.hasPlayer(function (current) {
                                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                                        })
                                                    );
                                                })
                                            )
                                                return 1;
                                            return 0;
                                        })
                                        .set('goon', get.attitude(target, player) < 0)
                                        .set('choiceList', ['使用一张非基本牌', '令' + get.translation(player) + '弃置' + get.cnNumber(player.getStat('skill').zi_jushi) + '张牌']);
                                ('step 2');
                                if (result.index == 1) {
                                    target.line(player);
                                    player.chooseToDiscard('he', player.getStat('skill').zi_jushi, true);
                                } else
                                    target.chooseToUse(function (card) {
                                        if (!lib.filter.cardEnabled(card, _status.event.player, _status.event)) {
                                            return false;
                                        }
                                        return (type = get.type(card) != 'basic');
                                    }, '举仕:使用一张非基本牌');
                            },
                            ai: {
                                order: 7,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) > 0) {
                                            if (
                                                target.countCards('h', function (card) {
                                                    return (
                                                        get.type(card) != 'basic' &&
                                                        game.hasPlayer(function (current) {
                                                            return target.canUse(card, current) && get.effect(current, card, target, player) > 0 && get.effect(current, card, target, target) > 0;
                                                        })
                                                    );
                                                })
                                            )
                                                return 3 * get.attitude(player, target);
                                            if ((player.getStat('skill').zi_jushi || 0) < 2) return get.attitude(player, target);
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        zi_jingdian: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && player.canCompare(current);
                                });
                            },
                            usable: 1,
                            //出牌阶段限一次,你可以展示牌堆顶的X张牌(X为全场势力数),你选择其中一张牌与一名其他角色进行拼点.若你赢,你可重复此流程;若你没赢,你获得剩余展示的牌
                            async content(event, trigger, player) {
                                //QQQ
                                var cards = get.cards(game.countGroup());
                                game.cardsGotoSpecial(cards);
                                player.showCards(cards);
                                while (true) {
                                    const result = await player.chooseButton(['精典:请选择一张拼点牌', cards], true).set('ai', function (button) {
                                        return button.link.number;
                                    }).forResult();
                                    if (result.links?.length) {
                                        const { result: result1 } = await player.chooseTarget('请选择拼点目标', true, (card, player, target) => target != player).set('ai', (target) => -get.attitude(player, target));
                                        if (result1.targets && result1.targets[0]) {
                                            cards.remove(result.links[0]);
                                            const event = player.chooseToCompare(result1.targets[0]);
                                            event.fixedResult = { [player.playerid]: result.links[0] };
                                            await event;
                                            if (event.result.bool) {
                                                //QQQ
                                                if (cards[0]) {
                                                    const { result: result3 } = await player.chooseBool('是否继续进行拼点？');
                                                    if (!result3.bool) break;
                                                } else break;
                                            } else {
                                                if (cards[0]) {
                                                    player.gain(cards, 'gain2');
                                                }
                                                break;
                                            }
                                        } else break;
                                    } else break;
                                }
                            },
                            ai: {
                                order: 7,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zi_kuangyan: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'chooseToCompareAfter', target: 'chooseToCompareAfter' },
                            filter(event, player) {
                                var suit = player == event.player ? event.card1.suit : event.card2.suit;
                                return lib.suit.includes(suit);
                            },
                            forced: true,
                            content() {
                                var suit;
                                if (player == trigger.player) {
                                    suit = trigger.card1.suit;
                                    if (trigger.num1 <= trigger.num2) {
                                        player.addTempSkill('zi_kuangyan2');
                                        if (!player.storage.zi_kuangyan2.includes(suit)) player.storage.zi_kuangyan2.push(suit);
                                        player.markSkill('zi_kuangyan2');
                                    }
                                    if (trigger.num2 <= trigger.num1) {
                                        trigger.target.addTempSkill('zi_kuangyan2');
                                        if (!trigger.target.storage.zi_kuangyan2.includes(suit)) trigger.target.storage.zi_kuangyan2.push(suit);
                                        trigger.target.markSkill('zi_kuangyan2');
                                    }
                                } else {
                                    suit = trigger.card2.suit;
                                    if (trigger.num2 <= trigger.num1) {
                                        player.addTempSkill('zi_kuangyan2');
                                        if (!player.storage.zi_kuangyan2.includes(suit)) player.storage.zi_kuangyan2.push(suit);
                                        player.markSkill('zi_kuangyan2');
                                    }
                                    if (trigger.num1 <= trigger.num2) {
                                        trigger.player.addTempSkill('zi_kuangyan2');
                                        if (!trigger.player.storage.zi_kuangyan2.includes(suit)) trigger.player.storage.zi_kuangyan2.push(suit);
                                        trigger.player.markSkill('zi_kuangyan2');
                                    }
                                }
                            },
                        },
                        zi_kuangyan2: {
                            init(player) {
                                if (!player.storage.zi_kuangyan2) player.storage.zi_kuangyan2 = [];
                            },
                            mod: {
                                cardEnabled2(card, player) {
                                    if (player.storage.zi_kuangyan2.includes(card.suit)) return false;
                                },
                            },
                            charlotte: true,
                            mark: true,
                            intro: {
                                content(storage) {
                                    return '不能使用或打出' + get.translation(storage) + '牌';
                                },
                            },
                        },
                        zi_fenxun: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return (
                                    player.countCards('he') &&
                                    game.hasPlayer(function (current) {
                                        return current != player && !current.hasSkill('zi_fenxun2');
                                    })
                                );
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return !target.hasSkill('zi_fenxun2');
                            },
                            filterCard: true,
                            position: 'he',
                            check(card) {
                                if (card.name == 'sha' && _status.event.player.countCards('h', 'sha') <= 1) return 0;
                                return 6 - get.value(card);
                            },
                            content() {
                                player.addTempSkill('zi_fenxun4');
                                target.addTempSkill('zi_fenxun2');
                                target.addTempSkill('zi_fenxun3');
                            },
                            ai: {
                                order: 6.5,
                                result: {
                                    player(player, target) {
                                        if (get.distance(player, target) <= 1) return 0;
                                        var hs = player.getCards('h', 'shunshou');
                                        if (hs.length && player.canUse(hs[0], target, false)) {
                                            return 1;
                                        }
                                        var geteff = function (current) {
                                            return player.canUse('sha', current, false, true) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                        };
                                        if (player.hasSha() && geteff(target)) {
                                            var num = game.countPlayer(function (current) {
                                                return current != player && get.distance(player, current) <= 1 && geteff(current);
                                            });
                                            if (num == 0) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return player.canUse('sha', current) && geteff(current) && current != target;
                                                    })
                                                ) {
                                                    return 1;
                                                }
                                            } else if (num == 1) {
                                                return 1;
                                            }
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        zi_fenxun2: {
                            charlotte: true,
                            trigger: { player: ['useCard', 'respond'] },
                            usable: 1,
                            forced: true,
                            content() {
                                game.log(trigger.card, '无效');
                                trigger.cancel();
                                player.removeSkill('zi_fenxun2');
                            },
                        },
                        zi_fenxun3: { charlotte: true },
                        zi_fenxun4: {
                            charlotte: true,
                            mod: {
                                globalFrom(from, to) {
                                    if (from == _status.currentPhase && to.hasSkill('zi_fenxun3')) return -Infinity;
                                },
                            },
                        },
                        zi_duanbing: {
                            group: 'zi_duanbing_buff',
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'useCard2' },
                            filter(event, player) {
                                if (event.zi_duanbing) return false;
                                return event.card && event.card.name == 'sha' && event.targets && event.targets.length == 1;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = get.distance(player, trigger.targets[0]);
                                var bool = game.hasPlayer(function (current) {
                                    return !trigger.targets.includes(current) && get.distance(player, current) == num && player.canUse(trigger.card, current);
                                });
                                var choiceList = ['额外指定任意名距离为' + num + '的角色为' + get.translation(trigger.card) + '的目标', '令' + get.translation(trigger.card) + '额外结算一次'];
                                var list = ['选项二'];
                                if (bool) {
                                    list.push('选项一');
                                    list.reverse();
                                } else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                                list.push('cancel2');
                                var eff = get.effect(trigger.targets[0], trigger.card, player, player);
                                var targets = trigger.targets;
                                var card = trigger.card;
                                player
                                    .chooseControl(list)
                                    .set('promot', get.prompt('zi_duanbing'))
                                    .set('choiceList', choiceList)
                                    .set('ai', function () {
                                        var effnum = eff;
                                        var player = _status.event.player;
                                        var list = game.filterPlayer(function (current) {
                                            return !targets.includes(current) && get.distance(player, current) == num && player.canUse(card, current);
                                        });
                                        for (var i of list) {
                                            if (get.effect(i, card, player, player) > 0) effnum += get.effect(i, card, player, player);
                                        }
                                        if (effnum > eff && list.includes('选项一')) return '选项一';
                                        if (eff > 0) return '选项二';
                                        return 'cancel2';
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    if (result.control == '选项二') {
                                        trigger.zi_duanbing = player;
                                        event.finish();
                                    }
                                } else event.finish();
                                ('step 2');
                                var num = get.distance(player, trigger.targets[0]);
                                var list = game.filterPlayer(function (current) {
                                    return !trigger.targets.includes(current) && get.distance(player, current) == num && player.canUse(trigger.card, current);
                                });
                                player
                                    .chooseTarget('为' + get.translation(trigger.card) + '添加至多' + get.cnNumber(list.length) + '个目标', [1, list.length], true, function (card, player, target) {
                                        var evt = _status.event.getTrigger();
                                        return target != player && !evt.targets.includes(target) && get.distance(player, target) == num && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
                                    })
                                    .set('ai', function (target) {
                                        return get.effect(target, _status.event.getTrigger().card, _status.event.player);
                                    });
                                ('step 3');
                                if (result.bool) {
                                    event.targets = result.targets.sortBySeat();
                                } else event.finish();
                                ('step 4');
                                player.line(targets);
                                game.log(player, '为', trigger.card, '添加了目标', targets);
                                trigger.targets.addArray(targets);
                            },
                            subSkill: {
                                buff: {
                                    charlotte: true,
                                    trigger: { global: 'useCardToTargeted' },
                                    filter(event, player) {
                                        return event.parent.zi_duanbing == player && event.targets.length == event.parent.triggeredTargets4.length;
                                    },
                                    forced: true,
                                    popup: false,
                                    lastDo: true,
                                    content() {
                                        trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
                                        trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
                                    },
                                },
                            },
                            ai: {
                                effect: {
                                    player(card, player, target, current, isLink) {
                                        if (!isLink && card.name == 'sha') {
                                            if (player._zi_duanbingtmp) return;
                                            player._zi_duanbingtmp = true;
                                            if (get.effect(target, card, player, player) <= 0) {
                                                delete player._zi_duanbingtmp;
                                                return;
                                            }
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return current != target && get.distance(player, current) <= 1 && player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                                })
                                            ) {
                                                delete player._zi_duanbingtmp;
                                                return [1, 1];
                                            }
                                            delete player._zi_duanbingtmp;
                                        }
                                    },
                                },
                            },
                        },
                        zi_leijian: {
                            init(player) {
                                player.storage.renku = true;
                            },
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'discardEnd' },
                            filter(event, player) {
                                return event.cards && event.cards.filterInD('d').length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseButton([get.prompt2('zi_leijian'), trigger.cards.filterInD('d')]).set('ai', function (button) {
                                    return get.value(button.link);
                                });
                                ('step 1');
                                if (result.links?.length) {
                                    player.$gain2(result.links, false);
                                    game.log(player, '将', result.links, '置于了仁库');
                                    game.cardsGotoSpecial(result.links, 'toRenku');
                                }
                            },
                        },
                        zi_xunxuan: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'phaseZhunbeiBegin' },
                            filter(event, player) {
                                if (!_status.renku.length || player.hasSkill('zi_xunxuan_round')) return false;
                                var num1 = 0,
                                    num2 = 0;
                                for (var card of _status.renku) {
                                    if (get.color(card) == 'red') num1++;
                                    else num2++;
                                }
                                return num1 != num2;
                            },
                            check(event, player) {
                                var num1 = 0,
                                    num2 = 0;
                                for (var card of _status.renku) {
                                    if (get.color(card) == 'red') num1++;
                                    else num2++;
                                }
                                return get.attitude(player, event.player) * (num1 > num2 ? 1 : -1) > 0;
                            },
                            logTarget: 'player',
                            content() {
                                player.addTempSkill('zi_xunxuan_round', 'roundStart');
                                var num1 = 0,
                                    num2 = 0;
                                for (var card of _status.renku) {
                                    if (get.color(card) == 'red') num1++;
                                    else num2++;
                                }
                                var skill = 'zi_xunxuan_' + (num1 > num2 ? 0 : 1);
                                trigger.player.addTempSkill(skill);
                                trigger.player.storage[skill] = [num1 > num2 ? num1 : num2, []];
                                trigger.player.storage[skill][1].push(player);
                                trigger.player.markSkill(skill);
                                game.log(trigger.player, ['使用红色牌摸一张牌', '使用黑色牌造成的伤害-1'][num1 > num2 ? 0 : 1]);
                            },
                            subSkill: {
                                round: { charlotte: true },
                                red: { charlotte: true, onremove: true },
                                black: { charlotte: true, onremove: true },
                                0: {
                                    charlotte: true,
                                    mark: true,
                                    marktext: '红',
                                    intro: {
                                        content(storage, player) {
                                            return '使用红色牌时摸一张牌,发动' + storage[0] + '次摸牌效果后此效果失效且' + get.translation(storage[1]) + '重置〖驯玄〗';
                                        },
                                    },
                                    audio: 'zi_xunxuan',
                                    trigger: { player: 'useCard' },
                                    filter(event, player) {
                                        return get.color(event.card) == 'red';
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.addTempSkill('zi_xunxuan_red');
                                        player.addMark('zi_xunxuan_red', 1, false);
                                        player.draw();
                                        ('step 1');
                                        if (player.countMark('zi_xunxuan_red') == player.storage.zi_xunxuan_0[0]) {
                                            var targets = player.storage.zi_xunxuan_0[1];
                                            player.removeSkill('zi_xunxuan_0');
                                            for (var i of targets) {
                                                i.removeSkill('zi_xunxuan_round');
                                                game.log(i, '重置了技能', '#g【驯玄】');
                                            }
                                        }
                                    },
                                },
                                1: {
                                    charlotte: true,
                                    mark: true,
                                    marktext: '黑',
                                    intro: {
                                        content(storage, player) {
                                            return '使用黑色牌造成的伤害-1,发动' + storage[0] + '次减伤效果后此效果失效且' + get.translation(storage[1]) + '重置〖驯玄〗';
                                        },
                                    },
                                    trigger: { source: 'damageBegin1' },
                                    filter(event, player) {
                                        return event.card && get.color(event.card) == 'black';
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.addTempSkill('zi_xunxuan_black');
                                        player.addMark('zi_xunxuan_black', 1, false);
                                        trigger.num--;
                                        ('step 1');
                                        if (player.countMark('zi_xunxuan_black') == player.storage.zi_xunxuan_1[0]) {
                                            var targets = player.storage.zi_xunxuan_1[1];
                                            player.removeSkill('zi_xunxuan_1');
                                            for (var i of targets) {
                                                i.removeSkill('zi_xunxuan_round');
                                                game.log(i, '重置了技能', '#g【驯玄】');
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zi_jiane: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return _status.renku.length;
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                event.list = [];
                                ('step 1');
                                var list = event.list;
                                var list2 = [];
                                for (var card of _status.renku) {
                                    if (!list.includes(get.type2(card)) && !list2.includes(get.type2(card))) list2.push(get.type2(card));
                                }
                                player
                                    .chooseButton(['是否将<仁>牌分配给任意角色？', _status.renku], [1, list2.length])
                                    .set('ai', function (button) {
                                        return get.value(button.link);
                                    })
                                    .set('filterButton', function (button) {
                                        if (list.includes(get.type2(button.link))) return false;
                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                            if (get.type2(ui.selected.buttons[i].link) == get.type2(button.link)) return false;
                                        }
                                        return true;
                                    });
                                ('step 2');
                                if (result.bool) {
                                    event.cards = result.links;
                                    player.chooseTarget('请选择获得牌的目标', '令其获得' + get.translation(event.cards), true).set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.attitude(player, target);
                                    });
                                } else event.finish();
                                ('step 3');
                                var target = result.targets[0];
                                player.line(target);
                                _status.renku.removeArray(event.cards);
                                game.updateRenku();
                                for (var i of event.cards) {
                                    if (!event.list.includes(get.type2(i))) event.list.push(get.type2(i));
                                }
                                target.gain(event.cards, player, 'give');
                                if (!_status.renku.length) event.finish();
                                ('step 4');
                                var list = event.list;
                                var list2 = [];
                                for (var card of _status.renku) {
                                    if (!list.includes(get.type2(card)) && !list2.includes(get.type2(card))) list2.push(get.type2(card));
                                }
                                if (list2.length) event.goto(1);
                            },
                            ai: {
                                order: 7,
                                result: { player: 1 },
                            },
                        },
                        zi_moukui: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'useCardToPlayered' },
                            preHidden: true,
                            filter(event, player) {
                                if (event.getParent('useCard').zi_moukui || !event.targets || !event.targets.length) return false;
                                return event.card && (event.card.name == 'sha' || get.type(event.card) == 'trick') && get.tag(event.card, 'damage');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                trigger.getParent('useCard').zi_moukui = true;
                                var targets = trigger.targets;
                                player
                                    .chooseTarget(get.prompt2('zi_moukui'), function (card, player, target) {
                                        return targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return -get.attitude(player, target) + 999;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                } else event.finish();
                                ('step 2');
                                var HePlayer = target;
                                var list = ['选项一'];
                                if (target.countDiscardableCards(player, 'he') > 0) {
                                    list.push('选项二');
                                    list.push('背水!');
                                }
                                player
                                    .chooseControl(list)
                                    .set('choiceList', ['摸一张牌', '弃置' + get.translation(target) + '的一张牌', '背水!依次执行以上两项.若' + get.translation(target) + '未令其进入濒死状态,则其弃置你的一张牌.'])
                                    .set('prompt', '谋溃:请选择一项')
                                    .set('ai', function () {
                                        var player = _status.event.player,
                                            target = HePlayer;
                                        if (list.includes('背水!') && get.effect(target, { name: 'guohe_copy2' }, player, player) > 0) return '背水!';
                                        return '选项一';
                                    });
                                ('step 3');
                                if (result.control == '选项一' || result.control == '背水!') player.draw();
                                if (result.control == '选项二' || result.control == '背水!') player.discardPlayerCard(target, true, 'he');
                                if (result.control == '背水!') {
                                    player.addTempSkill('zi_moukui_effect');
                                    var evt = trigger.parent;
                                    if (!evt.zi_moukui_effect) evt.zi_moukui_effect = [];
                                    evt.zi_moukui_effect.add(target);
                                }
                            },
                            subSkill: {
                                effect: {
                                    trigger: { player: 'useCardAfter' },
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return (
                                            event.zi_moukui_effect &&
                                            event.zi_moukui_effect.filter(function (current) {
                                                return (
                                                    current.isIn() &&
                                                    !current.hasHistory('damage', function (evt) {
                                                        return evt._dyinged && evt.card == event.card;
                                                    })
                                                );
                                            }).length
                                        );
                                    },
                                    content() {
                                        var list = trigger.zi_moukui_effect
                                            .filter(function (current) {
                                                return (
                                                    current.isIn() &&
                                                    !current.hasHistory('damage', function (evt) {
                                                        return evt._dyinged && evt.card == event.card;
                                                    })
                                                );
                                            })
                                            .sortBySeat();
                                        for (var i of list) i.discardPlayerCard(player, true, 'he').boolline = true;
                                    },
                                },
                            },
                        },
                        zi_wenji: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseUseBegin' },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('he');
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('zi_wenji'), function (card, player, target) {
                                        return target != player && target.countCards('he') > 0;
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
                                    target.chooseCard('he', true, '问计:将一张牌交给' + get.translation(player));
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.addTempSkill('zi_wenji_respond');
                                    player.storage.zi_wenji_respond = result.cards[0].name;
                                    event.target.give(result.cards, player, true);
                                }
                            },
                            subSkill: {
                                respond: {
                                    charlotte: true,
                                    audio: 'zi_wenji',
                                    trigger: { player: 'useCard' },
                                    filter(event, player) {
                                        return event.card && event.card.name == player.storage.zi_wenji_respond;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                return current != player;
                                            })
                                        );
                                    },
                                    ai: {
                                        directHit_ai: true,
                                        skillTagFilter(player, tag, arg) {
                                            return arg.card.name == player.storage.zi_wenji_respond;
                                        },
                                    },
                                },
                            },
                        },
                        zi_tunjiang: {
                            group: 'zi_tunjiang_act',
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseJieshuBegin' },
                            filter(event, player) {
                                if (!player.hasSkill('zi_tunjiang_acted')) return false;
                                return !player.getHistory('sourceDamage').length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('zi_tunjiang')).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    if (target == player) {
                                        player.draw(game.countGroup());
                                        event.finish();
                                    }
                                } else event.finish();
                                ('step 2');
                                var num = game.countGroup();
                                var list = [];
                                for (var i = 0; i <= num; i++) {
                                    list.push('你摸' + get.cnNumber(num - i, true) + '他摸' + get.cnNumber(i, true));
                                }
                                player
                                    .chooseControl(list)
                                    .set('prompt', '屯江:请分配你与' + get.translation(target) + '的摸牌数')
                                    .set('ai', function () {
                                        return 0;
                                    });
                                ('step 3');
                                var num = game.countGroup();
                                if (num - result.index > 0) player.draw(num - result.index, 'nodelay');
                                if (result.index > 0) target.draw(result.index, 'nodelay');
                                ('step 4');
                            },
                            subSkill: {
                                acted: { charlotte: true },
                                act: {
                                    charlotte: true,
                                    trigger: { player: 'phaseUseBegin' },
                                    firstDo: true,
                                    _priority: 7,
                                    forced: true,
                                    content() {
                                        player.addTempSkill('zi_tunjiang_acted');
                                    },
                                },
                            },
                        },
                        zi_qingxian: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { source: 'damageSource', player: 'recoverEnd' },
                            filter(event, player) {
                                return !_status.dying.length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('zi_qingxian'), lib.filter.notMe).set('ai', function (target) {
                                    var att = get.attitude(_status.event.player, target);
                                    if (target.isHealthy() && att > 0) return 0;
                                    if (target.hp == 1 && att != 0) {
                                        if (att > 0) return 9;
                                        else return 10;
                                    } else {
                                        return Math.sqrt(Math.abs(att));
                                    }
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                } else event.finish();
                                ('step 2');
                                if (target.isHealthy()) {
                                    event._result = { index: 0 };
                                } else {
                                    var index;
                                    if (get.attitude(player, target) > 0) {
                                        index = 1;
                                    } else {
                                        index = 0;
                                    }
                                    player
                                        .chooseControlList(['令' + get.translation(target) + '失去1点体力', '令' + get.translation(target) + '回复1点体力'], true, function (event, player) {
                                            return _status.event.index;
                                        })
                                        .set('index', index);
                                }
                                ('step 3');
                                target[result.index == 0 ? 'loseHp' : 'recover']();
                                ('step 4');
                                if (player.hp == target.hp) player.draw('nodelay');
                                else event.finish();
                                ('step 5');
                                if (result[0].suit == 'club') player.draw('nodelay');
                                target.draw('nodelay');
                                ('step 6');
                                if (result[0].suit == 'club') target.draw('nodelay');
                            },
                        },
                        zi_juexiang: {
                            derivation: 'zi_qingxian_list',
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'die' },
                            forceDie: true,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('zhuiyi'), lib.filter.notMe)
                                    .set('forceDie', true)
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.addSkillLog('zi_qingxian_list');
                                    target.addTempSkill('zi_juexiang_club', { player: 'phaseBegin' });
                                }
                            },
                            subSkill: {
                                club: {
                                    mark: true,
                                    intro: { content: '不能成为♣️️牌的目标' },
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (card.suit == 'club') return false;
                                        },
                                    },
                                },
                            },
                        },
                        zi_qingxian_list: {
                            nobracket: true,
                            group: ['zi_qingxianx', 'zi_qingxiany'],
                            audio: 'zi_qingxian',
                            init(player) {
                                player.storage.zi_qingxian_list = [false, false, false, false];
                            },
                            trigger: { source: 'damageSource', player: 'recoverEnd' },
                            filter(event, player) {
                                var list = player.storage.zi_qingxian_list;
                                if (list[2] && list[3]) return false;
                                if (list[0]) return false;
                                return !_status.dying.length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = player.storage.zi_qingxian_list;
                                var str = '令一名其他角色';
                                if (!list[2]) str += '失去';
                                if (!list[2] && !list[3]) str += '或';
                                if (!list[2]) str += '回复';
                                str += '1点体力';
                                player.chooseTarget(get.prompt('zi_qingxian'), str, lib.filter.notMe).set('ai', function (target) {
                                    var att = get.attitude(_status.event.player, target);
                                    if (str == '令一名其他角色失去1点体力') return -att;
                                    if (str == '令一名其他角色回复1点体力') return att * (target.isHealthy() ? 0 : 1);
                                    if (target.isHealthy() && att > 0) return 0;
                                    if (target.hp == 1 && att != 0) {
                                        if (att > 0) return 9;
                                        else return 10;
                                    } else {
                                        return Math.sqrt(Math.abs(att));
                                    }
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                } else event.finish();
                                ('step 2');
                                var list = player.storage.zi_qingxian_list;
                                if (target.isHealthy() || list[3]) {
                                    event._result = { index: 0 };
                                } else if (list[2]) event._result = { index: 1 };
                                else {
                                    var index;
                                    if (get.attitude(player, target) > 0) {
                                        index = 1;
                                    } else {
                                        index = 0;
                                    }
                                    player
                                        .chooseControlList(['令' + get.translation(target) + '失去1点体力', '令' + get.translation(target) + '回复1点体力'], true, function (event, player) {
                                            return _status.event.index;
                                        })
                                        .set('index', index);
                                }
                                ('step 3');
                                target[result.index == 0 ? 'loseHp' : 'recover']();
                                ('step 4');
                                if (player.hp == target.hp) player.draw('nodelay');
                                else event.finish();
                                ('step 5');
                                if (result[0].suit == 'club') player.draw('nodelay');
                                target.draw('nodelay');
                                ('step 6');
                                if (result[0].suit == 'club') target.draw('nodelay');
                                ('step 7');
                                var listx = player.storage.zi_qingxian_list;
                                var list = [];
                                if (!listx[0]) list.push('造成伤害');
                                if (!listx[1]) list.push('受到伤害');
                                if (!listx[2]) list.push('失去体力');
                                if (!listx[3]) list.push('回复体力');
                                player.chooseControl('清弦:选择失去一个发动时机或选项').set('ai', function () {
                                    for (var i of ['回复体力', '受到伤害', '失去体力', '造成伤害']) {
                                        if (list.includes(i)) return i;
                                    }
                                });
                                ('step 8');
                                switch (result.control) {
                                    case '造成伤害':
                                    case '受到伤害':
                                        game.log(player, '移除了发动时机', '#g' + result.control);
                                    default:
                                        game.log(player, '移除了发动选项', '#y' + result.control);
                                }
                                var list = player.storage.zi_qingxian_list;
                                switch (result.control) {
                                    case '造成伤害':
                                        list[0] = true;
                                        break;
                                    case '受到伤害':
                                        list[1] = true;
                                        break;
                                    case '失去体力':
                                        list[2] = true;
                                        break;
                                    case '回复体力':
                                        list[3] = true;
                                        break;
                                }
                            },
                        },
                        zi_fangyi: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            enable: 'chooseToUse',
                            filterCard: () => false,
                            selectCard: -1,
                            check: () => 1,
                            viewAs: { name: 'jiu' },
                            viewAsFilter(player) {
                                if (player.hasSkill('zi_fangyi2')) return false;
                                return true;
                            },
                            log: false,
                            precontent() {
                                player.showHandcards(get.translation(player) + '发动了【放逸】');
                                player.addTempSkill('zi_fangyi2');
                            },
                            prompt: '展示所有手牌,视为使用【酒】',
                        },
                        zi_fangyi2: {
                            charlotte: true,
                            audio: 'zi_fangyi',
                            trigger: { global: 'phaseEnd' },
                            filter(event, player) {
                                return (
                                    !player.getHistory('sourceDamage', function (evt) {
                                        return evt.num > 1;
                                    }).length ||
                                    !player.getHistory('damage', function (evt) {
                                        return evt.num > 1;
                                    }).length
                                );
                            },
                            forced: true,
                            prompt2: '从牌堆中检索一张牌,将这张牌交给一名角色',
                            content() {
                                'step 0';
                                event.card = get.cardPile2(function (card) {
                                    return true;
                                });
                                game.cardsGotoOrdering(event.card);
                                player.showCards(event.card);
                                ('step 1');
                                player
                                    .chooseTarget('令一名角色获得' + get.translation(event.card), true)
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (_status.event.du) {
                                            if (target.hasSkillTag('nodu')) return 0;
                                            return -att;
                                        }
                                        if (att > 0) {
                                            if (target == player) att *= 0.6;
                                            return att + Math.sqrt(Math.max(0, 5 - target.countCards('h')));
                                        }
                                        return att;
                                    })
                                    .set('du', card.name == 'du');
                                ('step 2');
                                if (result && result.bool) {
                                    var target = result.targets[0];
                                    player.line(target);
                                    target.gain(event.card, 'gain2');
                                }
                            },
                        },
                        zi_tuqiong: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            juexingji: true,
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                var evt = event.getl(player);
                                return evt && evt.player == player && evt.hs && evt.hs.length;
                            },
                            content() {
                                trigger.zi_tuqiong = true;
                                player.awakenSkill('zi_tuqiong');
                                player.draw(2);
                                player.recover();
                                player.addSkill('zi_tuqiong2');
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    target(card) {
                                        if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                                    },
                                },
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh') {
                                        if (player.countCards('h') != 1) return false;
                                    }
                                },
                            },
                        },
                        zi_tuqiong2: {
                            charlotte: true,
                            mark: true,
                            intro: { content: '失去最后的♣️️手牌后摸一张牌' },
                            audio: 'zi_tuqiong',
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.zi_tuqiong) return false;
                                if (player.countCards('h', { suit: 'club' })) return false;
                                var evt = event.getl(player);
                                if (evt && evt.player == player && evt.hs && evt.hs.length) {
                                    for (var card of evt.hs) {
                                        if (card.suit == 'club') return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        zi_qinshu: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'gainAfter' },
                            filter(event, player) {
                                return event.getParent(2).name != 'zi_qinshu';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw('nodelay');
                                ('step 1');
                                var list = [];
                                for (var i of player.getCards('h')) {
                                    if (!list.includes(i.suit)) list.push(i.suit);
                                }
                                if (list.length != lib.suit.length) event.finish();
                                ('step 2');
                                player.chooseToDiscard('he', true);
                                if (!player.storage.zi_qinshu) {
                                    player.storage.zi_qinshu = true;
                                    if (player.hasSkill('zi_yingyuan')) {
                                        player.storage.zi_yingyuan = [];
                                        game.log(player, '重置了技能', '#g【应援】');
                                    }
                                }
                            },
                        },
                        zi_yingyuan: {
                            init(player) {
                                player.storage.zi_yingyuan = [];
                            },
                            group: 'zi_yingyuan_clear',
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'useCardAfter' },
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                if (player.storage.zi_yingyuan.includes(get.type2(event.card))) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var str;
                                if (trigger.cards.filterInD().length) str = '令一名其他角色获得' + get.translation(trigger.cards.filterInD());
                                else str = '令一名角色从牌堆中获得一张' + get.translation(get.type2(trigger.card)) + '牌';
                                player
                                    .chooseTarget(get.prompt('zi_yingyuan'), str, lib.filter.notMe)
                                    .set('ai', function (target) {
                                        if (target.hasJudge('lebu')) return 0;
                                        var att = get.attitude(_status.event.player, target);
                                        if (att < 3) return 0;
                                        if (target.hasSkillTag('nogain')) att /= 10;
                                        if (target.hasSha() && _status.event.sha) {
                                            att /= 5;
                                        }
                                        if (event.wuxie && target.needsToDiscard(1)) {
                                            att /= 5;
                                        }
                                        return att / (1 + get.distance(player, target, 'absolute'));
                                    })
                                    .set('sha', trigger.cards[0].name == 'sha')
                                    .set('wuxie', trigger.cards[0].name == 'wuxie');
                                ('step 1');
                                if (result.bool) {
                                    var type = get.type2(trigger.card);
                                    var target = result.targets[0];
                                    if (trigger.cards.filterInD().length) target.gain(trigger.cards.filterInD(), 'gain2');
                                    else {
                                        var card = get.cardPile2(function (card) {
                                            return get.type2(card) == type;
                                        });
                                        if (card) target.gain(card, 'gain2');
                                    }
                                    player.storage.zi_yingyuan.push(type);
                                }
                            },
                            subSkill: {
                                clear: {
                                    charlotte: true,
                                    trigger: { player: 'phaseBefore' },
                                    firstDo: true,
                                    _priority: 6,
                                    forced: true,
                                    content() {
                                        player.storage.zi_yingyuan = [];
                                    },
                                },
                            },
                        },
                        zi_cangjuan: {
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.type2(card) == 'trick') return true;
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.type2(card) == 'trick') return false;
                                },
                            },
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'phaseBefore', player: 'enterGame' },
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            forced: true,
                            content() {
                                var cards = [];
                                for (var i = 0; i < 3; i++) {
                                    var card = get.cardPile2(function (card) {
                                        return get.type(card) == 'trick' && !cards.includes(card);
                                    });
                                    if (card) cards.push(card);
                                }
                                if (cards.length) player.addToExpansion('gain2', cards).gaintag.add('zi_cangjuan');
                            },
                            marktext: '典',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                        },
                        zi_yandian: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseJieshuBegin' },
                            filter(event, player) {
                                if (player.countCards('h') && _status.connectMode) return true;
                                return player.countCards('h', { type: ['basic', 'trick'] });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseCard('h', get.prompt2('zi_yandian'), [1, 2], function (card) {
                                        return get.type(card) == 'basic' || get.type(card) == 'trick';
                                    })
                                    .set('ai', function (card) {
                                        return 5 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.addToExpansion(result.cards, player, 'give').gaintag.add('zi_cangjuan');
                                    player.draw(2);
                                }
                            },
                        },
                        zi_shouxue: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'phaseBegin' },
                            filter(event, player) {
                                return player.getExpansions('zi_cangjuan').length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('zi_shouxue')).set('ai', function (target) {
                                    var player = _status.event.player,
                                        cards = player.getExpansions('zi_cangjuan'),
                                        att = get.attitude(player, target),
                                        bool = false;
                                    if (target == _status.currentPhase && get.attitude(player, _status.currentPhase) > 0) return 3 * att;
                                    for (var card of cards) if ((card.name == 'shan' && target.countCards('hs', { type: 'basic' })) || (card.name == 'wuxie' && target.countCards('hs', { type: ['trick', 'delay'] }))) bool = true;
                                    if (bool) return att;
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.addTempSkill('zi_shouxue_remove');
                                    target.addTempSkill('zi_shouxue2');
                                    for (var i of player.getExpansions('zi_cangjuan')) {
                                        if (!target.storage.zi_shouxue2.includes(i.name)) target.storage.zi_shouxue2.push(i.name);
                                    }
                                }
                            },
                            subSkill: {
                                remove: {
                                    charlotte: true,
                                    trigger: { global: 'phaseEnd' },
                                    filter(event, player) {
                                        return player.getExpansions('zi_cangjuan').length;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('zi_cangjuan');
                                        player.chooseButton(['授学:选择移去一张<典>', cards], true);
                                        ('step 1');
                                        if (result.bool) player.loseToDiscardpile(result.links);
                                    },
                                },
                            },
                        },
                        zi_shouxue2: {
                            init(player) {
                                player.storage.zi_shouxue2 = [];
                            },
                            charlotte: true,
                            enable: 'chooseToUse',
                            hiddenCard(player, name) {
                                if (lib.inpile.includes(name) && player.getStorage('zi_shouxue2').includes(name)) return true;
                            },
                            usable: 1,
                            filter(event, player) {
                                var storage = player.storage.zi_shouxue2;
                                for (var i of lib.inpile) {
                                    if (!storage || !storage.includes(i)) continue;
                                    var card = { name: i };
                                    if (event.filterCard(card, player, event)) return true;
                                    if (i == 'sha') {
                                        for (var j of lib.inpile_nature) {
                                            card.nature = j;
                                            if (event.filterCard(card, player, event)) return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    var storage = player.storage.zi_shouxue2;
                                    for (var i of lib.inpile) {
                                        if (!storage || !storage.includes(i)) continue;
                                        var card = { name: i };
                                        if (event.filterCard(card, player, event)) list.push(['基本', '', i]);
                                        if (i == 'sha') {
                                            for (var j of lib.inpile_nature) {
                                                card.nature = j;
                                                if (event.filterCard(card, player, event)) list.push(['基本', '', i, j]);
                                            }
                                        }
                                    }
                                    return ui.create.dialog('授学', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card) {
                                            var cardx = {
                                                name: links[0][2],
                                                nature: links[0][3],
                                            };
                                            return get.type2(card) == get.type2(cardx);
                                        },
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                        },
                                        check(card) {
                                            return 7 - get.value(card);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    var name = links[0][2];
                                    var nature = links[0][3];
                                    return '将一张同类型的牌当作' + (get.translation(nature) || '') + get.translation(name) + '使用';
                                },
                            },
                            ai: {
                                order: 7,
                                respondShan: true,
                                respondSha: true,
                                skillTagFilter(player, tag) {
                                    var storage = player.storage.zi_shouxue2;
                                    if (!storage || !storage.includes('s' + tag.slice(8))) return false;
                                },
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                        },
                        zi_xiashu: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseUseBegin' },
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var maxval = 0;
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    maxval = Math.max(maxval, get.value(hs[i]));
                                }
                                player
                                    .chooseCardTarget({
                                        prompt: get.prompt2('zi_xiashu'),
                                        filterCard: true,
                                        selectCard: [1, Infinity],
                                        filterTarget: lib.filter.notMe,
                                        ai1(card) {
                                            return 7 - ui.selected.cards.length - get.value(card);
                                        },
                                        ai2(target) {
                                            var player = _status.event.player;
                                            var maxval = _status.event.maxval;
                                            var dh = target.countCards('h') - (ui.selected.cards.length || 0);
                                            var att = get.attitude(player, target);
                                            if (target.hasSkill('qingjian')) return false;
                                            if (dh <= 0) return 0;
                                            if (att > 0) return 0.1;
                                            if (maxval >= 8) return 0;
                                            if (att == 0) return 0.2;
                                            if (dh >= 3) return dh;
                                            if (dh == 2) {
                                                if (maxval <= 7) return dh;
                                            }
                                            if (maxval <= 6) return dh;
                                            return 0;
                                        },
                                    })
                                    .set('maxval', maxval);
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    event.gained = true;
                                    if (result.cards.length < player.countCards('h')) {
                                        event.gained = false;
                                        event.gainednum = result.cards.length;
                                    }
                                    target.gain(result.cards, player, 'giveAuto');
                                } else event.finish();
                                ('step 2');
                                var hs = target.getCards('h');
                                if (!hs.length) {
                                    event.finish();
                                    return;
                                }
                                hs.sort(function (a, b) {
                                    return get.value(b, player, 'raw') - get.value(a, player, 'raw');
                                });
                                target
                                    .chooseCard([1, hs.length], '展示至少一张手牌', true)
                                    .set('ai', function (card) {
                                        var rand = _status.event.rand;
                                        var list = _status.event.list;
                                        if (_status.event.att) {
                                            if (ui.selected.cards.length >= Math.ceil(list.length / 2)) return 0;
                                            var value = get.value(card);
                                            if (_status.event.parent.player.isHealthy()) {
                                                value += (get.tag(card, 'damage') ? 1.5 : 0) + (get.tag(card, 'draw') ? 2 : 0);
                                            }
                                            return value;
                                        }
                                        if (ui.selected.cards.length >= Math.floor(list.length / 2)) return 0;
                                        return list.indexOf(card) % 2 == rand ? 1 : 0;
                                    })
                                    .set('rand', Math.random() < 0.6 ? 1 : 0)
                                    .set('list', hs)
                                    .set('att', get.attitude(target, player) > 0);
                                ('step 3');
                                target.showCards(result.cards);
                                event.cards1 = result.cards;
                                event.cards2 = target.getCards('h', function (card) {
                                    return !event.cards1.includes(card);
                                });
                                ('step 4');
                                var choice;
                                var num1 = event.cards1.length;
                                var num2 = event.cards2.length;
                                if (get.attitude(target, player) > 0 && num1 >= num2) {
                                    choice = 0;
                                } else if (num1 == num2) {
                                    choice = Math.random() < 0.45 ? 0 : 1;
                                } else if (num1 > num2) {
                                    if (num1 - num2 == 1) {
                                        choice = Math.random() < 0.6 ? 0 : 1;
                                    } else {
                                        choice = 0;
                                    }
                                } else {
                                    if (num2 - num1 == 1) {
                                        choice = Math.random() < 0.6 ? 1 : 0;
                                    } else {
                                        choice = 1;
                                    }
                                }
                                player
                                    .chooseControl(function (event, player) {
                                        return _status.event.choice;
                                    })
                                    .set('choiceList', ['获得' + get.translation(target) + '展示的牌', '获得' + get.translation(target) + '未展示的牌'])
                                    .set('choice', choice);
                                ('step 5');
                                var cards = result.index == 0 ? event.cards1 : event.cards2;
                                if (event.gained == true) {
                                    player.gain(cards, target, result.index == 0 ? 'give' : 'giveAuto');
                                    event.finish();
                                } else if (result.index == 1) {
                                    player.gain(cards.randomGets(Math.min(event.gainednum, cards.length)), target, 'giveAuto');
                                    event.finish();
                                } else
                                    player.chooseButton(['获得其中的' + get.cnNumber(event.gainednum) + '张牌', cards], Math.min(event.gainednum, cards.length), true).set('ai', function (button) {
                                        var player = _status.event.player;
                                        return get.value(button.link, player);
                                    });
                                ('step 6');
                                player.gain(result.links, target, 'give');
                            },
                            ai: { expose: 0.1 },
                        },
                        zi_kuanshi: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseJieshuBegin' },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('zi_kuanshi'))
                                    .set('animate', false)
                                    .set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        if (target.hp < 3) att /= 1.5;
                                        return att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.addTempSkill('zi_kuanshi_effect', { player: 'phaseBegin' });
                                    player.storage.zi_kuanshi_effect = result.targets[0];
                                }
                            },
                            subSkill: {
                                effect: {
                                    charlotte: true,
                                    audio: 'zi_kuanshi',
                                    trigger: { global: 'damageBegin4' },
                                    filter(event, player) {
                                        if (event.player.isHealthy()) return false;
                                        if (event.player != player.storage.zi_kuanshi_effect || event.player.isHealthy()) return false;
                                        var history = event.player.getHistory('damage', null, event),
                                            num = 0;
                                        for (var i of history) num += i.num;
                                        return num > 1 && num - event.num < 2;
                                    },
                                    forced: true,
                                    logTarget: 'player',
                                    content() {
                                        trigger.player.recover();
                                        player.removeSkill('zi_kuanshi_effect');
                                    },
                                },
                            },
                        },
                        zi_guozhu: {
                            init(player) {
                                player.storage.zi_guozhu = [];
                            },
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    if (!storage.length) return '未记录牌名';
                                    return '已记录' + get.translation(storage);
                                },
                            },
                            global: 'zi_guozhu2',
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'useCardAfter' },
                            filter(event, player) {
                                if (!event.targets || !event.targets.includes(player)) return false;
                                if (player.storage.zi_guozhu.includes(event.card.name)) return false;
                                return !player.getHistory('damage', function (evt) {
                                    return evt.card == event.card;
                                }).length;
                            },
                            forced: true,
                            content() {
                                player.storage.zi_guozhu.push(trigger.card.name);
                                player.markSkill('zi_guozhu');
                            },
                        },
                        zi_guozhu2: {
                            audio: 'zi_guozhu',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.hasSkill('zi_guozhu3')) return false;
                                return (
                                    player.countCards('he') &&
                                    game.hasPlayer(function (current) {
                                        return current.hasSkill('zi_guozhu') && current.storage.zi_guozhu.length && current.countCards('h') == player.countCards('h');
                                    })
                                );
                            },
                            forced: true,
                            delay: false,
                            filterCard: true,
                            discard: false,
                            lose: false,
                            filterCard(card) {
                                var player = _status.event.player;
                                const boss = game.players.find((current) => current.hasSkill('zi_guozhu') && current.storage.zi_guozhu.length && current.countCards('h') == player.countCards('h'));
                                if (boss == player) return false;
                                return true;
                            },
                            position: 'he',
                            selectCard() {
                                var player = _status.event.player;
                                const boss = game.players.find((current) => current.hasSkill('zi_guozhu') && current.storage.zi_guozhu.length && current.countCards('h') == player.countCards('h'));
                                if (boss == player) return -1;
                                return 1;
                            },
                            prompt() {
                                var player = _status.event.player;
                                const boss = game.players.find((current) => current.hasSkill('zi_guozhu') && current.storage.zi_guozhu.length && current.countCards('h') == player.countCards('h'));
                                if (boss == player) return '获得一张【国注】记录的牌';
                                return '将一张牌交给' + get.translation(boss);
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                const boss = game.players.find((current) => current.hasSkill('zi_guozhu') && current.storage.zi_guozhu.length && current.countCards('h') == player.countCards('h'));
                                if (boss) {
                                    if (boss != player) {
                                        player.addTempSkill('zi_guozhu3', 'phaseUseEnd');
                                        player.give(event.cards, boss);
                                    }
                                    const { links } = await player
                                        .chooseButton(['请选择一张牌从牌堆中获得之(若为装备牌则改为获得对应副类别的牌)', [boss.storage.zi_guozhu, 'vcard']], true)
                                        .set('ai', function (button) {
                                            return get.value({ name: button.link[2] });
                                        })
                                        .forResult();
                                    if (links?.length) {
                                        var name = links[0][2],
                                            cardx = { name: name };
                                        player.popup(get.translation(name));
                                        game.log(player, '选择了', '#g' + get.translation(name));
                                        boss.storage.zi_guozhu.remove(name);
                                        boss.markSkill('zi_guozhu');
                                        var card;
                                        if (get.type(cardx) != 'equip') {
                                            //QQQ
                                            card = get.cardPile2(function (card) {
                                                return card.name == name;
                                            });
                                        } else {
                                            card = get.cardPile2(function (card) {
                                                return get.subtype(cardx) == get.subtype(card);
                                            });
                                        }
                                        if (card) player.gain(card, 'gain2');
                                    }
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player(player, target) {
                                        var target = game.findPlayer(function (current) {
                                            return current.hasSkill('zi_guozhu') && current.storage.zi_guozhu.length && current.countCards('h') == player.countCards('h');
                                        });
                                        if (target) {
                                            return get.attitude(player, target);
                                        }
                                    },
                                },
                            },
                        },
                        zi_guozhu3: { charlotte: true },
                        zi_bianshi: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseJieshuBegin' },
                            forced: true,
                            content() {
                                'step 0';
                                var dialog = [get.prompt2('zi_bianshi')];
                                var list1 = player.storage.zi_guozhu,
                                    list2 = lib.inpile.filter(function (i) {
                                        return !list1.includes(i);
                                    });
                                if (list1.length) {
                                    dialog.push('<div class="text center">已记录</div>');
                                    dialog.push([list1, 'vcard']);
                                }
                                if (list2.length) {
                                    dialog.push('<div class="text center">未记录</div>');
                                    dialog.push([list2, 'vcard']);
                                }
                                player.chooseButton(dialog).set('ai', function (button) {
                                    return get.value({ name: button.link[2] });
                                }); //QQQ
                                ('step 1');
                                if (result.bool) {
                                    var name = result.links[0][2];
                                    if (player.storage.zi_guozhu.includes(name)) {
                                        player.storage.zi_guozhu.remove(name);
                                        game.log(player, '移除了', '#y' + get.translation(name));
                                    } else {
                                        player.storage.zi_guozhu.push(name);
                                        game.log(player, '添加了', '#y' + get.translation(name));
                                    }
                                    player.markSkill('zi_guozhu');
                                }
                            },
                            ai: { combo: 'zi_guozhu' },
                        },
                        zi_boyi: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { target: 'useCardToTargeted' },
                            logTarget: 'player',
                            check(event, player) {
                                var target = event.player;
                                if (
                                    get.attitude(player, target) >= -2 ||
                                    target.countCards('he', function (card) {
                                        return get.value(card, target) > 5;
                                    }) < 2
                                )
                                    return false;
                                return true;
                            },
                            filter(event, player) {
                                return player != event.player && event.player.countDiscardableCards(event.player, 'he') > 0;
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                trigger.player.chooseToDiscard(2, 'he', true);
                                ('step 1');
                                var cards = [];
                                trigger.player.getHistory('gain', function (evt) {
                                    cards.addArray(evt.cards);
                                });
                                var bool = true;
                                if (trigger.cards.length) for (var i of trigger.cards) if (!cards.includes(i)) bool = false;
                                if (!bool) {
                                    player.storage.zi_boyi_damage = trigger.player;
                                    player.addTempSkill('zi_boyi_damage');
                                }
                            },
                            subSkill: {
                                damage: {
                                    charlotte: true,
                                    trigger: { player: 'damageBegin1' },
                                    filter(event, player) {
                                        return event.source && event.source == player.storage.zi_boyi_damage;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        zi_bingmao: {
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    return '已记录' + get.translation(storage);
                                },
                            },
                            init(player) {
                                player.storage.zi_bingmao = [];
                            },
                            audio: 'ext:星火燎原·紫/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return game.hasPlayer(function (target) {
                                    if (target == player) return false;
                                    return !player.storage.zi_bingmao.includes(target) && target.countCards('h');
                                });
                            },
                            filterTarget(card, player, target) {
                                return target != player && !player.storage.zi_bingmao.includes(target) && target.countCards('h');
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                player.storage.zi_bingmao.push(target);
                                target.chooseCard('he', true, '问计:将一张牌交给' + get.translation(player));
                                ('step 1');
                                if (result.bool) {
                                    target.give(result.cards, player, true);
                                    player.chooseCardTarget({
                                        position: 'h',
                                        filterCard: true,
                                        filterTarget(card, player, target) {
                                            return target != _status.event.parent.target;
                                        },
                                        prompt: '是否将一张手牌交给一名其他角色？',
                                        ai1(card) {
                                            var player = _status.event.player;
                                            if (card.name == 'du') return 20;
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return current != _status.event.parent.target && player.inRange(current) && get.attitude(player, current) > 0 && current.getUseValue(card) > player.getUseValue(card) && current.getUseValue(card) > player.getUseValue(card);
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
                                            return (-att * Math.min(4, target.countCards('he'))) / 6;
                                        },
                                    });
                                } else event.finish();
                                ('step 2');
                                player.addTempSkill('zi_bingmao_targets', { player: 'phaseBegin' });
                                var list = [target];
                                if (result.bool) {
                                    result.targets[0].gain(result.cards, player, 'giveAuto');
                                    list.push(result.targets[0]);
                                }
                                list.sortBySeat();
                                player.storage.zi_bingmao_targets = list;
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        return 999 + get.attitude(player, target) + target.countCards('h') * (get.attitude(player, target) > 0 ? 1 : -1);
                                    },
                                },
                            },
                        },
                        zi_bingmao_targets: {
                            charlotte: true,
                            audio: 'zi_bingmao',
                            trigger: { target: 'useCardToTarget' },
                            filter(event, player) {
                                return player.storage.zi_bingmao_targets.includes(event.player);
                            },
                            forced: true,
                            _priority: 15,
                            content() {
                                trigger.parent.targets.remove(player);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (target.storage.zi_bingmao_targets.includes(player)) return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        zi_xuzhuan: {
                            group: 'zi_xuzhuan_discard',
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'phaseEnd' },
                            filter(event, player) {
                                if (!event.player.isAlive()) return false;
                                if (!player.storage.zi_xuzhuan_mark) return false;
                                var cards = player.storage.zi_xuzhuan_mark.filterInD('d');
                                for (var card of cards) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return event.player.canUse(card, current);
                                        })
                                    )
                                        return true;
                                }
                                return false;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var cards = [],
                                    target = trigger.player;
                                event.target = target;
                                for (var card of player.storage.zi_xuzhuan_mark.filterInD('d')) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return event.player.canUse(card, current);
                                        })
                                    )
                                        cards.push(card);
                                }
                                target.chooseButton(['是否使用本回合进入弃牌堆的一张牌？', cards]).set('ai', function (button) {
                                    return _status.event.player.getUseValue(button.link);
                                });
                                ('step 1');
                                if (result.bool) {
                                    target.$gain2(result.links[0], false);
                                    target.chooseUseTarget(true, result.links[0], false);
                                }
                            },
                            subSkill: {
                                discard: {
                                    charlotte: true,
                                    trigger: { global: 'discardAfter' },
                                    filter(event, player) {
                                        return event.cards && event.cards.filterInD('d').length;
                                    },
                                    firstDo: true,
                                    _priority: 6,
                                    forced: true,
                                    content() {
                                        player.addTempSkill('zi_xuzhuan_mark');
                                        player.storage.zi_xuzhuan_mark.addArray(trigger.cards.filterInD('d'));
                                    },
                                },
                                mark: {
                                    init(player) {
                                        player.storage.zi_xuzhuan_mark = [];
                                    },
                                    charlotte: true,
                                },
                            },
                        },
                        // 每回合限一次,你可将弃牌堆内两张同名牌置于牌堆底,视为使用此牌
                        zi_xidian: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            usable: 1,
                            hiddenCard(player, name) {
                                return Array.from(ui.discardPile.childNodes).filter((q) => q.name == name).length > 1;
                            },
                            filter(event, player) {
                                return player.qcard().some((arr) => {
                                    return Array.from(ui.discardPile.childNodes).filter((q) => q.name == arr[2]).length > 1;
                                });
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    const list = player.qcard().filter((arr) => {
                                        return Array.from(ui.discardPile.childNodes).filter((q) => q.name == arr[2]).length > 1;
                                    });
                                    return ui.create.dialog('悉典', [list, 'vcard']);
                                },
                                check(button) {
                                    const player = _status.event.player;
                                    const num = player.getUseValue(
                                        {
                                            name: button.link[2],
                                            nature: button.link[3],
                                        },
                                        null,
                                        true
                                    );
                                    return number0(num) + 10;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: () => false,
                                        selectCard: -1,
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                            suit: links[0][0],
                                            number: links[0][1],
                                        },
                                        async precontent(event, trigger, player) {
                                            const list = Array.from(ui.discardPile.childNodes).filter((q) => q.name == event.result.card.name);
                                            const { links } = await player
                                                .chooseButton(['请选择置于牌堆底的牌', list], 2, true)
                                                .set('ai', (button) => 2)
                                                .forResult();
                                            if (links?.length) {
                                                game.log(player, '将', links, '置入了牌堆底');
                                                for (const card of links) {
                                                    ui.cardPile.appendChild(card);
                                                }
                                            }
                                        }, //QQQ
                                    };
                                },
                                prompt(links) {
                                    return '悉典:视为使用' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
                                },
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player(player, target) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                            group: ['zi_xidian_push'],
                        },
                        zi_bianzhu: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'phaseEnd' },
                            filter(event, player) {
                                if (event.player == player || player.hasSkill('zi_bianzhu_silent')) return false;
                                var list = ['basic', 'trick', 'equip'];
                                event.player.getHistory('useCard', function (evt) {
                                    if (list.includes(get.type2(evt.card))) list.remove(get.type2(evt.card));
                                });
                                return list.length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = ['basic', 'trick', 'equip'];
                                trigger.player.getHistory('useCard', function (evt) {
                                    if (list.includes(get.type2(evt.card))) list.remove(get.type2(evt.card));
                                });
                                player
                                    .chooseControl('选项一', '选项二', 'cancel2')
                                    .set('prompt', get.prompt('zi_bianzhu'))
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        if (
                                            player.countCards('hs', function (card) {
                                                return game.hasPlayer(function (current) {
                                                    return list.includes(get.type2(card)) && get.effect(current, card, player, player) > 0;
                                                });
                                            })
                                        )
                                            return '选项一';
                                        return '选项二';
                                    })
                                    .set('choiceList', ['使用一张牌(限' + get.translation(list) + '牌)', '从牌堆中获得一张牌(限' + get.translation(list) + '牌)']);
                                ('step 1');
                                var list = ['basic', 'trick', 'equip'];
                                trigger.player.getHistory('useCard', function (evt) {
                                    if (list.includes(get.type2(evt.card))) list.remove(get.type2(evt.card));
                                });
                                if (result.control != 'cancel2') {
                                    switch (result.control) {
                                        case '选项一':
                                            player.chooseToUse(function (card) {
                                                if (!lib.filter.cardEnabled(card, _status.event.player, _status.event)) {
                                                    return false;
                                                }
                                                var type = get.type2(card);
                                                return list.includes(type);
                                            }, '是否使用一张牌？');
                                            break;
                                        case '选项二':
                                            var card = get.cardPile2(function (card) {
                                                return list.includes(get.type2(card));
                                            });
                                            if (card) player.gain(card, 'gain2');
                                            player.addTempSkill('zi_bianzhu_silent', { player: 'phaseBegin' });
                                            break;
                                    }
                                }
                            },
                            subSkill: { silent: { charlotte: true } },
                        },
                        zi_guizao: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseDiscardEnd' },
                            forced: true,
                            filter(event, player) {
                                if (event.cards) {
                                    var suits = [];
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            var suit = i.suit;
                                            if (suits.includes(suit)) {
                                                return false;
                                            } else {
                                                suits.push(suit);
                                            }
                                        }
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                if (player.isMaxHandcard()) player.chooseBool(get.prompt('zi_guizao'), '摸一张牌并回复1点体力');
                                else event.goto(2);
                                ('step 1');
                                if (result.bool) {
                                    player.draw();
                                    player.recover();
                                }
                                event.finish();
                                ('step 2');
                                var num = 0;
                                for (var i of game.players) {
                                    if (i.countCards('h') > num) num = i.countCards('h');
                                }
                                num = Math.min(num, player.countCards('h') + 5);
                                var num1 = get.effect(player, { name: 'wuzhong' }, player, player) / 2;
                                var num2 = get.recoverEffect(player, player, player);
                                var numx = num - player.countCards('h');
                                player
                                    .chooseControl('选项一', '选项二', 'cancel2')
                                    .set('prompt', get.prompt('zi_guizao'))
                                    .set('choiceList', ['将手牌摸至' + get.cnNumber(num) + '张', '摸一张牌并回复1点体力'])
                                    .set('ai', function () {
                                        if (numx * num1 > num1 + num2) return 0;
                                        return 1;
                                    });
                                event.num = num;
                                ('step 3');
                                if (result.control != 'cancel2') {
                                    if (result.index == 0) player.drawTo(event.num);
                                    else {
                                        player.draw();
                                        player.recover();
                                    }
                                }
                            },
                        },
                        zi_jiyu: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (!player.getStat().skill.zi_jiyu || !player.storage.zi_jiyu2) return true;
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (!player.storage.zi_jiyu2.includes(hs[i].suit)) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('h') && (!player.storage.zi_jiyu || !player.storage.zi_jiyu.includes(target));
                            },
                            content() {
                                'step 0';
                                var evt = _status.event.getParent('phaseUse');
                                if (evt && evt.name == 'phaseUse' && !evt.zi_jiyu) {
                                    evt.zi_jiyu = true;
                                    var next = game.createEvent('zi_jiyu_clear');
                                    _status.event.next.remove(next);
                                    evt.after.push(next);
                                    next.player = player;
                                    next.setContent(function () {
                                        game.broadcastAll(function (player) {
                                            delete player.storage.zi_jiyu;
                                            delete player.storage.zi_jiyu2;
                                        }, player);
                                    });
                                }
                                if (!player.storage.zi_jiyu) player.storage.zi_jiyu = [];
                                player.storage.zi_jiyu.push(target);
                                var spade = true;
                                if (player.isTurnedOver() || get.attitude(target, player) > 0 || target.hp <= 2) {
                                    spade = false;
                                }
                                target
                                    .chooseToDiscard('h', true)
                                    .set('ai', function (card) {
                                        if (card.suit == 'spade') {
                                            if (_status.event.spade) {
                                                return 10 - get.value(card);
                                            } else {
                                                return -10 - get.value(card);
                                            }
                                        }
                                        if (_status.event.parent.player.storage.zi_jiyu2 && _status.event.parent.player.storage.zi_jiyu2.includes(card.suit)) {
                                            return -3 - get.value(card);
                                        }
                                        return -get.value(card);
                                    })
                                    .set('spade', spade);
                                ('step 1');
                                var boolx = false;
                                if (!result.cards || !result.cards.length) return;
                                var card = result.cards[0];
                                if (card.suit == 'spade') {
                                    player.turnOver();
                                    boolx = true;
                                }
                                if (!player.storage.zi_jiyu2) player.storage.zi_jiyu2 = [];
                                player.storage.zi_jiyu2.add(card.suit);
                                if (boolx) player.chooseBool('是否令' + get.translation(target) + '失去1点体力？').set('choice', get.attitude(player, target) < 0);
                                else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.line(target);
                                    target.loseHp();
                                }
                            },
                            onremove: ['zi_jiyu', 'zi_jiyu2'],
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (player.isTurnedOver() || target.countCards('h') <= 3) return -1;
                                        return 0;
                                    },
                                },
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (player.storage.zi_jiyu2 && player.storage.zi_jiyu2.includes(card.suit)) return false;
                                },
                            },
                        },
                        zi_jiyu2: {
                            charlotte: true,
                            trigger: { player: ['phaseUseBegin', 'phaseUseAfter'] },
                            firstDo: true,
                            _priority: 5,
                            forced: true,
                            content() {
                                player.storage.zi_jiyu = [];
                                player.storage.zi_jiyu2 = [];
                            },
                        },
                        zi_zhenlve: {
                            hiddenCard(player, name) {
                                if (name == 'wuxie') {
                                    if (player.hasSkill('zi_zhenlve_round')) return false;
                                    var list = [];
                                    if (!player.storage._disableJudge || player.storage._disableJudge == false) return true;
                                    for (var i = 1; i < 6; i++) {
                                        if (!player.isDisabled(i)) return true;
                                    }
                                    return false;
                                }
                                return false;
                            },
                            group: ['zi_zhenlve_wuxie', 'zi_zhenlve_wuxie2'],
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'useCardBefore' },
                            filter(event, player) {
                                return event.skill == 'zi_zhenlve_wuxie';
                            },
                            forced: true,
                            firstDo: true,
                            _priority: 5,
                            content() {
                                'step 0';
                                var list = [];
                                if (!player.storage._disableJudge || player.storage._disableJudge == false) list.push('判定区');
                                for (var i = 1; i < 6; i++) {
                                    if (!player.isDisabled(i)) list.push('equip' + i);
                                }
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('prompt', get.prompt2('zi_zhenlve'))
                                    .set('ai', function () {
                                        if (list.includes('判定区')) return '判定区';
                                        for (var i = 5; i > 0; i--) {
                                            if (list.includes('equip' + i)) return 'equip' + i;
                                        }
                                        return 'cancel2';
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    switch (result.control) {
                                        case '判定区':
                                            player.disableJudge();
                                            break;
                                        default:
                                            player.disableEquip(result.control);
                                            break;
                                    }
                                    player.addTempSkill('zi_zhenlve_round', 'roundStart');
                                } else trigger.cancel();
                            },
                            subSkill: {
                                round: { charlotte: true },
                                wuxie: {
                                    log: false,
                                    silent: true,
                                    popup: false,
                                    enable: 'chooseToUse',
                                    viewAs: {
                                        name: 'wuxie',
                                    },
                                    viewAsFilter(player) {
                                        var list = [];
                                        if (!player.storage._disableJudge || player.storage._disableJudge == false) list.push('判定区');
                                        for (var i = 1; i < 6; i++) {
                                            if (!player.isDisabled(i)) list.push('equip' + i);
                                        }
                                        return list.length && !player.hasSkill('zi_zhenlve_round');
                                    },
                                    filterCard: () => false,
                                    selectCard: -1,
                                    check: () => 1,
                                    ai: {
                                        order: 7,
                                    },
                                },
                                wuxie2: {
                                    charlotte: true,
                                    trigger: { player: 'useCard' },
                                    filter(event, player) {
                                        return event.skill == 'zi_zhenlve_wuxie';
                                    },
                                    forced: true,
                                    firstDo: true,
                                    _priority: 5,
                                    content() {
                                        trigger.nowuxie = true;
                                    },
                                },
                            },
                        },
                        zi_jianshu: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return game.players.length >= 3 && player.countCards('h', { color: 'black' }) > 0;
                            },
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                if (ui.selected.targets.length) {
                                    return ui.selected.targets[0] != target && !ui.selected.targets[0].hasSkillTag('noCompareSource') && target.countCards('h') && !target.hasSkillTag('noCompareTarget');
                                }
                                return true;
                            },
                            filterCard: { color: 'black' },
                            discard: false,
                            lose: false,
                            delay: false,
                            check(card) {
                                if (_status.event.player.hp == 1) return 8 - get.value(card);
                                return 6 - get.value(card);
                            },
                            selectTarget: 2,
                            multitarget: true,
                            targetprompt: ['得牌发<br>起拼点', '被拼点'],
                            content() {
                                'step 0';
                                targets[0].gain(cards, player, 'give');
                                ('step 1');
                                targets[0].chooseToCompare(targets[1]);
                                ('step 2');
                                event.targetx = [];
                                event.num = 0;
                                if (result.bool) event.targetx.push(targets[1]);
                                else if (result.tie) event.targetx.addArray([targets[0], targets[1]]);
                                else event.targetx.push(targets[0]);
                                ('step 3');
                                var target = event.targetx[num];
                                event.target = target;
                                target.chooseToDiscard(2, 'he', '间书:弃置两张牌或失去1点体力').set('ai', function (card) {
                                    if (card.name == 'tao') return -10;
                                    if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                                    return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                                });
                                ('step 4');
                                if (!result.bool) target.loseHp();
                                if (event.num < event.targetx.length - 1) {
                                    event.num++;
                                    event.goto(3);
                                }
                            },
                            ai: {
                                expose: 0.2,
                                order: 7,
                                result: {
                                    target(player, target) {
                                        if (ui.selected.targets.length) return -1;
                                        return -0.5;
                                    },
                                },
                            },
                        },
                        zi_yongdi: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            limited: true,
                            trigger: { player: 'phaseZhunbeiBegin' },
                            mark: true,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('zi_yongdi'), lib.filter.notMe)
                                    .set('ai', function (target) {
                                        if (!_status.event.goon) return 0;
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (att <= 1) return 0;
                                        var mode = get.mode();
                                        if (mode == 'identity' || (mode == 'versus' && _status.mode == 'four')) {
                                            if (target.name && lib.character[target.name]) {
                                                for (var i = 0; i < lib.character[target.name][3].length; i++) {
                                                    if (lib.skill[lib.character[target.name][3][i]].zhuSkill) {
                                                        return att * 2;
                                                    }
                                                }
                                            }
                                        }
                                        return att;
                                    })
                                    .set('goon', !player.hasUnknown());
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    event.groupx = target.group;
                                    event.king = target;
                                    event.num = 0;
                                    event.targets = [];
                                    var zhuboolx = false;
                                    player.awakenSkill('zi_yongdi');
                                    for (var i of game.players) {
                                        if (i != target) event.targets.push(i);
                                    }
                                    event.targets.sortBySeat();
                                    target.gainMaxHp(true);
                                    target.recover();
                                    if (target.name && lib.character[target.name]) {
                                        var skills = lib.character[target.name][3];
                                        for (var i = 0; i < skills.length; i++) {
                                            var info = lib.skill[skills[i]];
                                            if (info.zhuSkill) {
                                                zhuboolx = true;
                                                target.addSkill(skills[i]); //QQQ
                                                target.popup(skills[i]);
                                                game.log(target, '激活了主公技', '#g【' + get.translation(skills[i]) + '】');
                                                if (info.init) {
                                                    info.init(target);
                                                }
                                                if (info.init2) {
                                                    info.init2(target);
                                                }
                                            }
                                        }
                                    }
                                    if (zhuboolx) event.goto(4);
                                } else event.finish();
                                ('step 2');
                                var list = [];
                                if (!_status.characterlist) {
                                    if (_status.connectMode) var list = get.charactersOL();
                                    else {
                                        var list = [];
                                        for (var i in lib.character) {
                                            if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                            list.push(i);
                                        }
                                    }
                                    game.countPlayer2(function (current) {
                                        list.remove(current.name);
                                        list.remove(current.name1);
                                        list.remove(current.name2);
                                        if (current.storage.rehuashen && current.storage.rehuashen.character) list.removeArray(current.storage.rehuashen.character);
                                    });
                                    _status.characterlist = list;
                                }
                                _status.characterlist.randomSort();
                                var chara = [];
                                var skills = [];
                                for (var i of _status.characterlist) {
                                    if (i == 'key_yuri') continue;
                                    var character = lib.character[i];
                                    if (character[1] != target.group) continue;
                                    if (character && character[3]) {
                                        for (var j of character[3]) {
                                            if (skills.includes(j) || j == 'yuri_wangxi' || target.hasSkill('j')) continue;
                                            var info = get.info(j);
                                            if (info && info.zhuSkill) {
                                                skills.add(j);
                                                chara.add(i);
                                                continue;
                                            }
                                        }
                                    }
                                    if (skills.length >= 3) break;
                                }
                                if (!skills.length) {
                                    player.chat('无王可造!');
                                    game.log('无王可造!');
                                    event.goto(4);
                                    return;
                                }
                                event.chara = chara;
                                event.skills = skills;
                                target.chooseControl(skills).set('dialog', ['选择获得一个技能', [chara, 'character']]);
                                ('step 3');
                                target.addSkillLog(result.control);
                                target.setAvatarQueue(target.name1 || target.name, [event.chara[event.skills.indexOf(result.control)]]);
                                ('step 4');
                                var target = targets[num];
                                event.target = target;
                                event.king.line(target);
                                target.chooseBool('是否追随新王' + get.translation(event.king) + '？', '将势力更改为' + get.translation(event.groupx + 2)).set('choice', get.attitude(target, event.king) > 0);
                                ('step 5');
                                if (result.bool) target.changeGroup(event.groupx);
                                ('step 6');
                                if (event.num < event.targets.length - 1) {
                                    event.num++;
                                    event.goto(4);
                                }
                            },
                            ai: { expose: 0.2 },
                        },
                        zi_qinqing: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseJieshuBegin' },
                            filter(event, player) {
                                return game.hasPlayer(function (target) {
                                    return game.hasPlayer(function (current) {
                                        return current.inRange(target);
                                    });
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('zi_qinqing'), function (card, player, target) {
                                        return game.hasPlayer(function (current) {
                                            return current.inRange(target);
                                        });
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return game.countPlayer(function (current) {
                                            return current.inRange(target) && get.effect(current, { name: 'guohe_copy2' }, player, player) > 0;
                                        });
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var zhu = result.targets[0];
                                    event.zhu = zhu;
                                    var targets = game.filterPlayer(function (current) {
                                        return current.inRange(zhu);
                                    });
                                    event.targets = targets;
                                    player.line(targets);
                                } else event.finish();
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
                                var zhu = event.zhu;
                                if (zhu) {
                                    var nh = zhu.countCards('h');
                                    for (var i = 0; i < event.targets.length; i++) {
                                        if (event.targets[i].countCards('h') > nh) {
                                            num++;
                                        }
                                    }
                                    if (num > 0) {
                                        player.draw(num);
                                    }
                                }
                            },
                        },
                        zi_huisheng: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'damageBegin4' },
                            filter(event, player) {
                                if (player.hasSkill('zi_huisheng_silent')) return false;
                                if (!player.countCards('he')) return false;
                                if (!event.source || event.source == player || !event.source.isIn()) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var att = get.attitude(player, trigger.source) > 0;
                                var goon = false;
                                if (player.hp == 1) {
                                    goon = true;
                                } else {
                                    var he = player.getCards('he');
                                    var num = 0;
                                    for (var i = 0; i < he.length; i++) {
                                        if (get.value(he[i]) < 8) {
                                            num++;
                                            if (num >= 2) {
                                                goon = true;
                                                break;
                                            }
                                        }
                                    }
                                }
                                player
                                    .chooseCard('he', [1, player.countCards('he')], get.prompt2('zi_huisheng', trigger.source))
                                    .set('ai', function (card) {
                                        if (_status.event.att) {
                                            return 10 - get.value(card);
                                        }
                                        if (_status.event.goon) {
                                            return 8 - get.value(card);
                                        }
                                        if (!ui.selected.cards.length) {
                                            return 7 - get.value(card);
                                        }
                                        return 0;
                                    })
                                    .set('goon', goon)
                                    .set('att', att);
                                ('step 1');
                                if (result.bool) {
                                    event.num = result.cards.length;
                                    var goon = false;
                                    if (event.num > 2 || get.attitude(trigger.source, player) >= 0) {
                                        goon = true;
                                    }
                                    var forced = false;
                                    var str = '获得其中一张牌并防止伤害';
                                    if (trigger.source.countCards('he') < event.num) {
                                        forced = true;
                                    } else {
                                        str += ',或取消并弃置' + get.cnNumber(result.cards.length) + '张牌';
                                    }
                                    trigger.source
                                        .chooseButton([str, result.cards], forced)
                                        .set('ai', function (button) {
                                            if (_status.event.goon) {
                                                return get.value(button.link);
                                            }
                                            return get.value(button.link) - 8;
                                        })
                                        .set('goon', goon);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    var card = result.links[0];
                                    trigger.source.gain(card, player, 'giveAuto');
                                    trigger.cancel();
                                    player.addTempSkill('zi_huisheng_silent');
                                } else {
                                    trigger.source.chooseToDiscard(event.num, true, 'he');
                                }
                            },
                            subSkill: {
                                silent: { charlotte: true },
                            },
                        },
                        zi_juanxia: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseJieshuBegin' },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('zi_juanxia'), lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player,
                                        list = [];
                                    for (var name of lib.inpile) {
                                        var info = lib.card[name];
                                        if (!info || info.type != 'trick' || info.notarget || (info.selectTarget && info.selectTarget != 1)) continue;
                                        if (!player.canUse(name, target)) continue;
                                        var eff = get.effect(target, { name: name }, player, player);
                                        if (eff > 0) list.push(eff);
                                    }
                                    list.sort().reverse();
                                    if (!list.length) return 0;
                                    return list[0] + (list[1] || 0) + (list[2] || 0);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                } else event.finish();
                                ('step 2');
                                var list = [];
                                for (var name of lib.inpile) {
                                    var info = lib.card[name];
                                    if (!info || info.type != 'trick' || info.notarget || (info.selectTarget && info.selectTarget != 1)) continue;
                                    list.push(name);
                                }
                                if (!list.length) event.finish();
                                else {
                                    event.list = list;
                                    event.count = 0;
                                }
                                ('step 3');
                                var list = event.list.filter(function (name) {
                                    return player.canUse(name, target);
                                });
                                if (list.length) {
                                    var next = player.chooseButton(['视为对' + get.translation(target) + '使用一张牌', [list, 'vcard']]).set('ai', function (button) {
                                        var evt = _status.event.parent;
                                        return get.effect(evt.target, { name: button.link[2] }, evt.player, evt.player);
                                    });
                                    if (event.count == 0) next.set('forced', true);
                                } else {
                                    event.stopped = true;
                                    event.goto(5);
                                }
                                ('step 4');
                                if (result.bool) {
                                    event.count++;
                                    var name = result.links[0][2];
                                    event.list.remove(name);
                                    player.useCard({ name: name }, target, false);
                                } else event.stopped = true;
                                ('step 5');
                                if (target.isIn() && event.count > 0) {
                                    if (event.count < 2 && !event.stopped && event.list.length) event.goto(3);
                                    else {
                                        target.addTempSkill('zi_juanxia_counter', { player: 'phaseAfter' });
                                        if (!target.storage.zi_juanxia_counter) target.storage.zi_juanxia_counter = {};
                                        if (!target.storage.zi_juanxia_counter[player.playerid]) target.storage.zi_juanxia_counter[player.playerid] = 0;
                                        target.storage.zi_juanxia_counter[player.playerid] += event.count;
                                    }
                                }
                            },
                            subSkill: {
                                counter: {
                                    trigger: { player: 'phaseEnd' },
                                    charlotte: true,
                                    filter(event, player) {
                                        var map1 = game.playerMap,
                                            map2 = player.storage.zi_juanxia_counter;
                                        if (!map2) return false;
                                        for (var i in map2) {
                                            if (map1[i] && map1[i].isIn() && player.canUse('sha', map1[i], false)) return true;
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var list = [];
                                        var map1 = game.playerMap,
                                            map2 = player.storage.zi_juanxia_counter;
                                        if (!map2) return false;
                                        for (var i in map2) {
                                            if (map1[i] && map1[i].isIn()) list.push(map1[i]);
                                        }
                                        list.sortBySeat();
                                        event.num = 0;
                                        event.targets = list;
                                        ('step 1');
                                        var target = targets[num];
                                        event.target = target;
                                        event.count = player.storage.zi_juanxia_counter[target.playerid];
                                        ('step 2');
                                        if (target.isIn() && player.canUse('sha', target, false))
                                            player
                                                .chooseBool('狷狭:是否视为对' + get.translation(target) + '使用一张【杀】？(第' + get.cnNumber(player.storage.zi_juanxia_counter[target.playerid] - event.count + 1, true) + '张,共' + get.cnNumber(player.storage.zi_juanxia_counter[target.playerid]) + '张)')
                                                .set('goon', get.effect(target, { name: 'sha' }, player, player) > 0)
                                                .set('ai', () => _status.event.goon);
                                        ('step 3');
                                        if (result.bool) {
                                            event.count--;
                                            player.popup('狷狭');
                                            if (player.canUse('sha', target, false)) player.useCard({ name: 'sha' }, target, false);
                                            if (event.count > 0) event.goto(2);
                                        }
                                        ('step 4');
                                        if (event.num < targets.length - 1) {
                                            event.num++;
                                            event.goto(1);
                                        }
                                    },
                                },
                            },
                        },
                        zi_dingcuo: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                player.draw(2);
                                ('step 1');
                                var bool = false;
                                if (Array.isArray(result) && result.length > 1) {
                                    var color = get.color(result[0], player);
                                    for (var i = 1; i < result.length; i++) {
                                        if (get.color(result[i], player) != color) {
                                            if (player.countCards('h')) bool = true;
                                            break;
                                        }
                                    }
                                }
                                if (bool) player.chooseToDiscard('h', true);
                                else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    var color = get.color(result.cards[0]);
                                    player.addTempSkill('zi_dingcuo_damage');
                                    player.storage.zi_dingcuo_damage.push(color);
                                }
                            },
                            subSkill: {
                                damage: {
                                    init(player) {
                                        player.storage.zi_dingcuo_damage = [];
                                    },
                                    audio: 'zi_dingcuo',
                                    trigger: { player: 'damageBegin4' },
                                    filter(event, player) {
                                        return event.card && player.storage.zi_dingcuo_damage.includes(get.color(event.card));
                                    },
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'damage') && target.storage.zi_dingcuo_damage.includes(get.color(card))) {
                                                    return 'zeroplayertarget';
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        zi_jishe: {
                            group: 'zi_jishe2',
                            audio: 'ext:星火燎原·紫/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return (
                                    player.getHandcardLimit() > 0 &&
                                    game.hasPlayer(function (q) {
                                        return !player.storage.zi_jishe1.includes(q) && !q.isLinked();
                                    })
                                );
                            },
                            filterTarget(card, player, t) {
                                return !player.storage.zi_jishe1.includes(t) && !t.isLinked();
                            },
                            intro: { content: '手牌上限-#' },
                            init(player) {
                                player.storage.zi_jishe = 0;
                                player.storage.zi_jishe1 = [];
                            }, //QQQ
                            usable: 20,
                            content() {
                                'step 0';
                                player.draw();
                                player.storage.zi_jishe1.push(target);
                                target.link();
                                target.chooseBool('是否令' + get.translation(player) + '本回合的手牌上限-1？').set('choice', get.attitude(target, player) < 0);
                                ('step 1');
                                if (result.bool) {
                                    target.line(player);
                                    target.addExpose(0.2);
                                    player.storage.zi_jishe++;
                                    player.markSkill('zi_jishe');
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        if (get.effect(target, { name: 'tiesuo' }, player, player) > 0) {
                                            if (get.attitude(player, target) > 0) return 3;
                                            return -2;
                                        }
                                        return 1;
                                    },
                                },
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num - player.storage.zi_jishe;
                                },
                            },
                        },
                        zi_jishe2: {
                            charlotte: true,
                            trigger: { player: 'phaseAfter' },
                            forced: true,
                            content() {
                                player.unmarkSkill('zi_jishe');
                                player.storage.zi_jishe = 0;
                                player.storage.zi_jishe1 = [];
                            },
                        },
                        zi_lianhuo: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            inherit: 'lianhuo',
                        },
                        zi_jianwei: {
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player) {
                                    return storage ? '准备阶段,你可以选择一名角色,直到你的下回合开始,当其回复体力时,你弃置一张牌,将回复角色改为你' : '准备阶段,你可以选择一名角色,直到你的下回合开始,当其受到伤害时,你摸一张牌,将此伤害转移给你';
                                },
                            },
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            content() {
                                'step 0';
                                var storage = player.storage.zi_jianwei;
                                var num = storage ? -1 : 1;
                                var str = storage ? '准备阶段,你可以选择一名角色,直到你的下回合开始,当其回复体力时,你弃置一张牌,将回复角色改为你' : '准备阶段,你可以选择一名角色,直到你的下回合开始,当其受到伤害时,你摸一张牌,将此伤害转移给你';
                                player.chooseTarget(get.prompt('zi_jianwei'), str).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target) * num;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    var skill = player.storage.zi_jianwei ? 'zi_jianwei_recover' : 'zi_jianwei_damage';
                                    player.addTempSkill(skill, { player: 'phaseBegin' });
                                    player.storage[skill] = target;
                                } else event.finish();
                                ('step 2');
                                player.changeZhuanhuanji('zi_jianwei');
                            },
                            subSkill: {
                                damage: {
                                    mark: true,
                                    marktext: '忠',
                                    intro: { content: '保护$ing...' },
                                    charlotte: true,
                                    audio: 'zi_jianwei',
                                    trigger: { global: 'damageBegin4' },
                                    filter(event, player) {
                                        return event.player == player.storage.zi_jianwei_damage;
                                    },
                                    forced: true,
                                    logTarget: 'player',
                                    content() {
                                        player.draw();
                                        trigger.player = player;
                                    },
                                },
                                recover: {
                                    mark: true,
                                    marktext: '奸',
                                    intro: { content: '迫害$ing...' },
                                    charlotte: true,
                                    audio: 'zi_jianwei',
                                    trigger: { global: 'recoverBegin' },
                                    filter(event, player) {
                                        return player.countCards('he') && event.player == player.storage.zi_jianwei_recover;
                                    },
                                    forced: true,
                                    logTarget: 'player',
                                    content() {
                                        player.chooseToDiscard('he', true);
                                        trigger.player = player;
                                    },
                                },
                            },
                        },
                        zi_xiongyi: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'dying' },
                            limited: true,
                            mark: true,
                            content() {
                                'step 0';
                                player.awakenSkill('zi_xiongyi');
                                player.recover(1 - player.hp);
                                ('step 1');
                                player.addTempSkill('zi_xiongyi_wanjian');
                            },
                            subSkill: {
                                wanjian: {
                                    charlotte: true,
                                    group: 'zi_xiongyi_damage',
                                    audio: 'zi_xiongyi',
                                    trigger: { global: 'phaseEnd' },
                                    forced: true,
                                    content() {
                                        player.chooseUseTarget(true, { name: 'wanjian' }, false);
                                    },
                                },
                                damage: {
                                    charlotte: true,
                                    trigger: { source: 'damageSource' },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'wanjian';
                                    },
                                    forced: true,
                                    content() {
                                        if (player.isDamaged()) player.recover();
                                        else player.draw(2);
                                    },
                                },
                            },
                        },
                        zi_taoluan: {
                            getNum() {
                                var list = [];
                                for (var i of game.players) {
                                    if (!list.includes(i.identity)) list.push(i.identity);
                                }
                                return list.length;
                            },
                            audio: 'ext:星火燎原·紫/audio:2',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return event.type != 'wuxie' && event.type != 'respondShan' && !player.hasSkill('zi_taoluan3') && player.countMark('zi_taoluan6') < lib.skill.zi_taoluan.getNum() && player.countCards('hes') > 0;
                            },
                            hiddenCard(player, name) {
                                return !player.getStorage('zi_taoluan').includes(name) && player.countCards('hes') > 0 && !player.hasSkill('zi_taoluan3') && player.countMark('zi_taoluan6') < lib.skill.zi_taoluan.getNum() && lib.inpile.includes(name);
                            },
                            init(player) {
                                if (!player.storage.zi_taoluan) player.storage.zi_taoluan = [];
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (player.storage.zi_taoluan && player.storage.zi_taoluan.includes(name)) continue;
                                        if (name == 'sha') {
                                            list.push(['基本', '', 'sha']);
                                            for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                        } else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                                    }
                                    if (list.length == 0) {
                                        return ui.create.dialog('滔乱已无可用牌');
                                    }
                                    return ui.create.dialog('滔乱', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    if (player.countCards('hs', button.link[2]) > 0) return 0;
                                    if (button.link[2] == 'wugu') return 0;
                                    var effect = player.getUseValue(button.link[2]);
                                    if (effect > 0) return effect;
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        audio: 'zi_taoluan',
                                        selectCard: 1,
                                        popname: true,
                                        check(card) {
                                            return 6 - get.value(card);
                                        },
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        onuse(result, player) {
                                            player.addTempSkill('zi_taoluan6', 'roundStart');
                                            player.addMark('zi_taoluan6', 1, false);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('hes') || player.hasSkill('zi_taoluan3') || player.countMark('zi_taoluan6') >= lib.skill.zi_taoluan.getNum()) return false;
                                    if (!player.storage.zi_taoluan.includes('tao')) {
                                    } else if (player.isDying() && !player.storage.zi_taoluan.includes('jiu')) {
                                    } else return false;
                                },
                                order: 4,
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
                            },
                            group: ['zi_taoluan2', 'zi_taoluan4', 'zi_taoluan5'],
                        },
                        zi_taoluan2: {
                            trigger: { player: ['useCardAfter', 'respondAfter'] },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.skill == 'zi_taoluan_backup' || event.skill == 'zi_taoluan5' || event.skill == 'zi_taoluan4';
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(
                                        true,
                                        function (card, player, target) {
                                            return target != player;
                                        },
                                        '滔乱<br><br><div class="text center">令一名其他角色选择一项:1.交给你一张与你以此法使用的牌类别相同的牌并记录牌名;2.你于当前回合结束时失去1点体力'
                                    )
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(player, target) > 0) {
                                            if (get.attitude(target, player) > 0) {
                                                return target.countCards('he');
                                            }
                                            return target.countCards('he') / 2;
                                        }
                                        return 0;
                                    });
                                ('step 1');
                                var target = result.targets[0];
                                event.target = target;
                                player.line(target, 'green');
                                var type = get.type(trigger.card, 'trick');
                                target
                                    .chooseCard('滔乱<br><br><div class="text center">交给' + get.translation(player) + '一张不为' + get.translation(type) + '牌的牌,或令其于当前回合结束时失去一点体力且本回合【滔乱】无效', 'he', function (card, player, target) {
                                        return get.type(card, 'trick') != _status.event.cardType;
                                    })
                                    .set('cardType', type)
                                    .set('ai', function (card) {
                                        if (_status.event.att) {
                                            return 11 - get.value(card);
                                        }
                                        return 0;
                                    })
                                    .set('att', get.attitude(target, player) > 0);
                                ('step 2');
                                var target = event.target;
                                if (result.bool) {
                                    player.gain(result.cards, target, 'give');
                                    player.storage.zi_taoluan.add(trigger.card.name);
                                } else {
                                    player.addTempSkill('zi_taoluan3');
                                    var next = player.loseHp();
                                    event.next.remove(next);
                                    event.getParent('phase').after.push(next);
                                }
                            },
                        },
                        zi_taoluan3: {},
                        zi_taoluan4: {
                            audio: 'zi_taoluan',
                            prompt: '将一张牌当做闪使用',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return !player.getStorage('zi_taoluan').includes('shan') && !player.hasSkill('zi_taoluan3') && player.countMark('zi_taoluan6') < lib.skill.zi_taoluan.getNum() && player.countCards('hes');
                            },
                            filterCard: true,
                            position: 'hes',
                            selectCard: 1,
                            viewAs: { name: 'shan' },
                            onuse(result, player) {
                                player.addTempSkill('zi_taoluan6', 'roundStart');
                                player.addMark('zi_taoluan6', 1, false);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    return player.countCards('hes') && !player.getStorage('zi_taoluan').includes('shan') && !player.hasSkill('zi_taoluan3') && player.countMark('zi_taoluan6') < lib.skill.zi_taoluan.getNum();
                                },
                                threaten: 1.5,
                                respondShan: true,
                            },
                        },
                        zi_taoluan5: {
                            audio: 'zi_taoluan',
                            enable: 'chooseToUse',
                            prompt: '将一张牌当做无懈可击使用',
                            viewAsFilter(player) {
                                return !player.getStorage('zi_taoluan').includes('wuxie') && !player.hasSkill('zi_taoluan3') && player.countMark('zi_taoluan6') < lib.skill.zi_taoluan.getNum() && player.countCards('hes');
                            },
                            filterCard: true,
                            position: 'hes',
                            selectCard: 1,
                            viewAs: { name: 'wuxie' },
                            onuse(result, player) {
                                player.addTempSkill('zi_taoluan6', 'roundStart');
                                player.addMark('zi_taoluan6', 1, false);
                            },
                        },
                        zi_taoluan_backup: {},
                        zi_taoluan6: {
                            charlotte: true,
                        },
                        zi_zongkui: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: ['phaseZhunbeiBegin', 'damageEnd'], global: 'roundStart' },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    if (current.isMaxHp(true)) return false;
                                    return current != player && !current.hasMark('zongkui_mark');
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('zi_zongkui'), '令一名体力值不为全场唯一最多的其他角色获得<傀>标记', function (card, player, target) {
                                        if (target.isMaxHp(true)) return false;
                                        return target != player && !target.hasMark('zongkui_mark');
                                    })
                                    .set('ai', function (target) {
                                        var num = target.isMinHp() ? 0.5 : 1;
                                        return num * get.threaten(target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.addMark('zongkui_mark', 1);
                                }
                            },
                        },
                        zi_guju: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            intro: {
                                content(storage, player) {
                                    return '已因此技能摸了' + storage + '张牌';
                                },
                            },
                            trigger: { global: 'damageEnd' },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.player.isAlive() && event.player.hasMark('zongkui_mark');
                            },
                            content() {
                                'step 0';
                                player.draw();
                                player.addMark('zi_guju'); //QQQ
                                player.markSkill('guju');
                                ('step 1');
                                var bool = false;
                                var zhus = game.filterPlayer(function (current) {
                                    return lib.translate[current.identity] == '主';
                                });
                                for (var i of zhus) if (i.group == trigger.player.group) bool = true;
                                if (bool && trigger.player.isAlive()) {
                                    trigger.player.chooseBool('是否令' + get.translation(player) + '多摸一张牌？').ai = function () {
                                        return get.attitude(trigger.player, player) > 0;
                                    };
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    trigger.player.line(player);
                                    player.draw();
                                    player.addMark('zi_guju');
                                    player.markSkill('guju');
                                }
                            },
                            ai: {
                                combo: 'zi_zongkui',
                            },
                        },
                        zi_baijia: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            derivation: 'zi_canshi',
                            juexingji: true,
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            filter(event, player) {
                                return player.storage.zi_guju >= 7;
                            },
                            content() {
                                player.awakenSkill('zi_baijia');
                                player.gainMaxHp();
                                player.recover();
                                var list = game.filterPlayer();
                                for (var i = 0; i < list.length; i++) {
                                    if (list[i] != player && !list[i].hasMark('zongkui_mark')) {
                                        list[i].addMark('zongkui_mark', 1);
                                        player.line(list[i], 'green');
                                    }
                                }
                                player.removeSkill('zi_guju');
                                player.addSkill('zi_canshi');
                            },
                            ai: {
                                combo: 'zi_guju',
                            },
                        },
                        zi_canshi: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            group: ['zi_canshi_add', 'zi_canshi_remove'],
                            subSkill: {
                                add: {
                                    audio: 'zi_canshi',
                                    trigger: { player: 'useCard2' },
                                    filter(event, player) {
                                        if (!event.targets || event.targets.length != 1) return false;
                                        var info = get.info(event.card);
                                        if (info.multitarget) return false;
                                        if (info.allowMultiple == false) return false;
                                        if (info.type == 'equip') return false;
                                        if (info.type == 'delay') return false;
                                        return game.hasPlayer(function (current) {
                                            if (!current.hasMark('zongkui_mark')) return false;
                                            return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
                                        });
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt2('zi_canshi'), [1, Infinity], function (card, player, target) {
                                                if (!target.hasMark('zongkui_mark')) return false;
                                                var trigger = _status.event.getTrigger();
                                                return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target);
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.effect(target, _status.event.getTrigger().card, player, player);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            event.targets = result.targets.sortBySeat();
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        for (var i = 0; i < event.targets.length; i++) {
                                            event.targets[i].removeMark('zongkui_mark', 1);
                                        }
                                        trigger.targets.addArray(event.targets);
                                    },
                                },
                                remove: {
                                    audio: 'zi_canshi',
                                    trigger: {
                                        target: 'useCardToTarget',
                                    },
                                    check(event, player) {
                                        return get.attitude(event.player, player) < 0 && get.effect(player, event.card, event.player, player) < 0;
                                    },
                                    logTarget: 'player',
                                    filter(event, player) {
                                        if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                                        if (!event.targets || event.targets.length != 1) return false;
                                        return event.player.hasMark('zongkui_mark');
                                    },
                                    content() {
                                        trigger.targets.remove(player);
                                        trigger.parent.triggeredTargets2.remove(player);
                                        trigger.player.removeMark('zongkui_mark');
                                    },
                                },
                            },
                        },
                        zi_zhidui: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                var num = 1;
                                if (player.hasSkill('zi_zhidui_level')) num++;
                                if (player.countMark('zi_zhidui_phase') >= num) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('h');
                                });
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var dialog = ui.create.dialog('###智对###' + get.translation('zi_zhidui_info'));
                                    dialog.addText('花色');
                                    var table = document.createElement('div');
                                    table.classList.add('add-setting');
                                    table.style.margin = '0';
                                    table.style.width = '100%';
                                    table.style.position = 'relative';
                                    for (var i of ['heart', 'diamond', 'spade', 'club']) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.innerHTML = '<span>' + get.translation(i) + '</span>';
                                        td.link = i;
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        Object.setPrototypeOf(td, lib.element.Button.prototype); //QQQ
                                        table.appendChild(td);
                                        dialog.buttons.add(td);
                                    }
                                    dialog.content.appendChild(table);
                                    dialog.addText('点数');
                                    var table2 = document.createElement('div');
                                    table2.classList.add('add-setting');
                                    table2.style.margin = '0';
                                    table2.style.width = '100%';
                                    table2.style.position = 'relative';
                                    for (var i = 1; i <= 13; i++) {
                                        var td2 = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td2.innerHTML = '<span>' + i + '</span>';
                                        td2.link = i;
                                        td2.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        Object.setPrototypeOf(td2, lib.element.Button.prototype); //QQQ
                                        table2.appendChild(td2);
                                        dialog.buttons.add(td2);
                                    }
                                    dialog.content.appendChild(table2);
                                    return dialog;
                                },
                                filter(button) {
                                    if (ui.selected.buttons.length && typeof button.link == typeof ui.selected.buttons[0].link) return false;
                                    return true;
                                },
                                select: 2,
                                check(button) {
                                    if (typeof button.link == 'number') {
                                        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet(); //QQQ
                                    }
                                    return lib.suit.randomGet();
                                },
                                backup(links, player) {
                                    if (typeof links[0] == 'number') links.reverse();
                                    _status.zhiduisuit = links[0];
                                    _status.zhiduinumber = links[1];
                                    return {
                                        audio: 'zi_zhidui',
                                        filterTarget(card, player, target) {
                                            return target.countCards('h');
                                        },
                                        content() {
                                            'step 0';
                                            game.log(player, '选择了', '#g' + get.translation(_status.zhiduisuit), '花色,', '#y' + _status.zhiduinumber, '点数');
                                            event.boolx = false;
                                            event.count = 0;
                                            player.addTempSkill('zi_zhidui_phase', 'phaseUseAfter');
                                            player.addMark('zi_zhidui_phase', 1, false);
                                            ('step 1');
                                            player.choosePlayerCard(target, 'h', '展示' + get.translation(target) + '的' + get.cnNumber(Math.min(target.countCards('h'), target.hp)) + '张牌', Math.min(target.countCards('h'), target.hp), true);
                                            ('step 2');
                                            event.cards = result.cards.slice(0);
                                            target.showCards(event.cards);
                                            ('step 3');
                                            var card = event.cards.shift();
                                            if (card.suit == _status.zhiduisuit) event.count++;
                                            if (card.number == _status.zhiduinumber) event.boolx = true;
                                            ('step 4');
                                            if (event.cards.length) event.goto(3);
                                            else if (event.count == 0) event.goto(8);
                                            ('step 5');
                                            event.count--;
                                            var filterTarget = function (card, player, target) {
                                                return target != player && target.countDiscardableCards(player, 'he') > 0;
                                            };
                                            if (
                                                !game.hasPlayer(function (current) {
                                                    return filterTarget(null, player, current);
                                                })
                                            )
                                                event._result = { bool: false };
                                            else
                                                player.chooseTarget(filterTarget, '弃置一名其他角色的一张牌或摸一张牌').set('ai', function (target) {
                                                    var player = _status.event.player;
                                                    var att = get.attitude(player, target);
                                                    if (att >= 0) return 0;
                                                    if (
                                                        target.countCards('he', function (card) {
                                                            return get.value(card) > 5;
                                                        })
                                                    )
                                                        return -att;
                                                    return 0;
                                                });
                                            ('step 6');
                                            if (!result.bool) player.draw();
                                            else {
                                                player.line(result.targets[0], 'green');
                                                player.discardPlayerCard(result.targets[0], true, 'he');
                                            }
                                            ('step 7');
                                            if (event.count) event.goto(5);
                                            ('step 8');
                                            if (event.boolx == true) {
                                                player.addTempSkill('zi_zhidui_level');
                                                game.log(player, '升级了技能', '【智对】');
                                            }
                                        },
                                        ai: {
                                            order: 10,
                                            result: {
                                                target(player, target) {
                                                    return target.countCards('h');
                                                },
                                            },
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    if (typeof links[0] == 'number') links.reverse();
                                    return '请选择【智对】的目标(花色为' + get.translation(links[0]) + ',点数为' + links[1] + ')';
                                },
                            },
                            ai: {
                                order: 7,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                phase: { charlotte: true, onremove: true },
                                level: {
                                    charlotte: true,
                                    mark: true,
                                    intro: { content: '本回合〖智对〗改为出牌阶段限两次' },
                                },
                            },
                        },
                        zi_caishi: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseDrawEnd' },
                            isSame(event) {
                                var cards = [];
                                event.player.getHistory('gain', function (evt) {
                                    if (evt.parent.name == 'draw' && evt.getParent('phaseDraw') == event) cards.addArray(evt.cards);
                                });
                                if (!cards.length) return 'nogain';
                                var list = [];
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        list.add(i.suit);
                                    }
                                if (list.length == 1) return true;
                                if (list.length == cards.length) return false;
                                return 'nogain';
                            },
                            filter(event, player) {
                                var isSame = lib.skill.zi_caishi.isSame(event);
                                if (isSame == 'nogain') return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (lib.skill.zi_caishi.isSame(trigger)) {
                                    player.chooseBool(get.prompt('zi_caishi'), '回复1点体力,本回合内不能对自己使用牌').set('ai', function () {
                                        if (player.countCards('h', 'tao')) return false;
                                        if (player.hp < 2) return true;
                                        return (
                                            player.countCards('h', function (card) {
                                                var info = get.info(card);
                                                return info && (info.toself || info.selectTarget == -1) && player.canUse(card, player) && player.getUseValue(card) > 0;
                                            }) == 0
                                        );
                                    });
                                } else player.chooseBool(get.prompt('zi_caishi'), '令自己的手牌上限+1');
                                ('step 1');
                                if (result.bool) {
                                    if (lib.skill.zi_caishi.isSame(trigger)) {
                                        player.recover();
                                        player.addTempSkill('zi_caishi3');
                                    } else {
                                        player.addSkill('zi_caishi2');
                                        player.addMark('zi_caishi2', 1, false);
                                    }
                                }
                            },
                        },
                        zi_caishi2: {
                            charlotte: true,
                            mark: true,
                            intro: { content: '手牌上限+#' },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.countMark('zi_caishi2');
                                },
                            },
                        },
                        zi_caishi3: {
                            charlotte: true,
                            mark: true,
                            intro: { content: '本回合内不能对自己使用牌' },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (player == target) return false;
                                },
                            },
                        },
                        zi_qingzhong: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseUseBegin' },
                            check(event, player) {
                                if (
                                    game.hasPlayer(function (current) {
                                        return current != player && current.isMinHandcard() && get.attitude(player, current) > 0;
                                    })
                                ) {
                                    return true;
                                }
                                if (player.countCards('h') <= 2) return true;
                                return false;
                            },
                            content() {
                                player.draw(2);
                                player.addTempSkill('zi_qingzhong_give');
                            },
                            subSkill: {
                                give: {
                                    audio: 'zi_qingzhong',
                                    trigger: { player: 'phaseUseEnd' },
                                    filter(event, player) {
                                        return !player.isMinHandcard(true);
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var list = game.filterPlayer(function (current) {
                                            return current.isMinHandcard();
                                        });
                                        if (list.length == 1) {
                                            if (list[0] != player) {
                                                player.line(list[0], 'green');
                                                player.swapHandcards(list[0]);
                                            }
                                            event.finish();
                                        } else {
                                            player
                                                .chooseTarget(true, '清忠:选择一名手牌最少的角色与其交换手牌', function (card, player, target) {
                                                    return target.isMinHandcard();
                                                })
                                                .set('ai', function (target) {
                                                    return get.attitude(_status.event.player, target);
                                                });
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            if (target != player) {
                                                player.line(target, 'green');
                                                player.swapHandcards(target);
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zi_weijing: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            group: ['zi_weijing_sha', 'zi_weijing_shan'],
                            subSkill: {
                                sha: {
                                    audio: 'zi_weijing',
                                    enable: 'chooseToUse',
                                    viewAs: { name: 'sha' },
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        if (player.hasSkill('zi_weijing_disable')) return false;
                                    },
                                    selectCard: -1,
                                    mark: false,
                                    precontent() {
                                        player.addTempSkill('zi_weijing_disable', 'roundStart');
                                    },
                                    prompt: '视为使用一张杀',
                                    ai: {
                                        order() {
                                            var player = _status.event.player;
                                            if (
                                                !player.hasShan() &&
                                                !game.hasPlayer(function (current) {
                                                    return player.canUse('sha', current) && current.hp == 1 && get.effect(current, { name: 'sha' }, player, player) > 0;
                                                })
                                            ) {
                                                return 0;
                                            }
                                            return 2.95;
                                        },
                                        skillTagFilter(player, tag, arg) {
                                            if (player.hasSkill('zi_weijing_disable')) return false;
                                            if (arg != 'use') return false;
                                        },
                                        respondSha: true,
                                    },
                                },
                                shan: {
                                    audio: 'zi_weijing',
                                    enable: 'chooseToUse',
                                    viewAs: { name: 'shan' },
                                    mark: false,
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        if (player.hasSkill('zi_weijing_disable')) return false;
                                        return true;
                                    },
                                    onuse(event, player) {
                                        player.addTempSkill('zi_weijing_disable', 'roundStart');
                                    },
                                    selectCard: -1,
                                    prompt: '视为使用一张闪',
                                    ai: {
                                        order() {
                                            var player = _status.event.player;
                                            if (player.hasSkill('zi_qingzhong_give')) return 2.95;
                                            return 3.15;
                                        },
                                        skillTagFilter(player) {
                                            if (player.hasSkill('zi_weijing_disable')) return false;
                                        },
                                        respondShan: true,
                                    },
                                },
                                disable: {
                                    mark: true,
                                    intro: {
                                        content: '本轮已发动',
                                    },
                                },
                            },
                        },
                        zi_guzhu: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'phaseUseEnd' },
                            filter(event, player) {
                                var num1 = player.getHistory('gain').length;
                                var num2 = player.getHistory('lose').length;
                                if (num1 == 0 && !event.player.countCards('he')) return false;
                                return num1 + num2 > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var att = get.attitude(player, trigger.player);
                                var list = [];
                                var num1 = player.getHistory('gain').length;
                                var num2 = player.getHistory('lose').length;
                                var choiceList = ['令' + get.translation(trigger.player) + '摸' + get.cnNumber(num1) + '张牌', '令' + get.translation(trigger.player) + '弃置' + get.cnNumber(num2) + '张牌'];
                                event.num1 = num1;
                                event.num2 = num2;
                                if (num1 > 0) list.push('摸牌');
                                else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
                                if (num2 > 0) list.push('弃牌');
                                else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('prompt', get.prompt('zi_guzhu', trigger.player))
                                    .set('ai', function (target) {
                                        if (att > 0 && list.includes('摸牌')) return '摸牌';
                                        if (att < 0 && list.includes('弃牌')) return '弃牌';
                                        return 'cancel2';
                                    })
                                    .set('choiceList', choiceList);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    if (trigger.player != player) player.addExpose(0.2);
                                    switch (result.control) {
                                        case '摸牌':
                                            trigger.player.draw(event.num1);
                                            break;
                                        case '弃牌':
                                            trigger.player.chooseToDiscard(event.num2, 'he', true);
                                            break;
                                    }
                                }
                            },
                        },
                        zi_zhenwan: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                var target = event.target == player ? event.player : event.target;
                                return target.countCards('h') && event.target != event.player;
                            },
                            forced: true,
                            usable: 1,
                            content() {
                                'step 0';
                                var target = trigger.target == player ? trigger.player : trigger.target;
                                event.target = target;
                                player.choosePlayerCard(target, 'he', [1, Math.min(target.countCards('he'), 2)], get.prompt2('zi_zhenwan', target)).set('forceAuto', true);
                                ('step 1');
                                if (result.bool) {
                                    event.cards = result.cards;
                                    if (player.countCards('h') <= event.cards.length) {
                                        player.swapHandcards(target, player.getCards('h'), event.cards);
                                        player.addTempSkill('zi_zhenwan_gangzhi');
                                        event.finish();
                                    } else
                                        player.chooseCard('he', event.cards.length, true, '贞婉:请选择交换的牌').set('ai', function (card) {
                                            return -get.value(card);
                                        });
                                } else {
                                    player.getStat('triggerSkill').zi_zhenwan--;
                                    event.finish();
                                }
                                ('step 2');
                                player.swapHandcards(target, result.cards, event.cards);
                                player.addTempSkill('zi_zhenwan_gangzhi');
                            },
                            subSkill: {
                                gangzhi: {
                                    charlotte: true,
                                    mark: true,
                                    intro: { content: '本回合造成和受到的伤害均视为失去体力' },
                                    trigger: {
                                        player: 'damageBefore',
                                        source: 'damageBefore',
                                    },
                                    forced: true,
                                    content() {
                                        player.popup('刚直[doge]');
                                        trigger.cancel();
                                        trigger.player.loseHp(trigger.num);
                                    },
                                    ai: {
                                        jueqing: true,
                                    },
                                },
                            },
                        },
                        zi_fuyi: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'loseHpEnd' },
                            filter(event, player) {
                                if (!event.player.isAlive()) return false;
                                return _status.currentPhase == player || event.player.countCards('he');
                            },
                            prompt2(event, player) {
                                return '令' + get.translation(event.player) + (_status.currentPhase == player ? '摸' : '弃置') + '一张牌';
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) && (_status.currentPhase == player ? 1 : -1) > 0;
                            },
                            logTarget: 'player',
                            content() {
                                if (trigger.player != player) player.addExpose(0.2);
                                if (_status.currentPhase == player) trigger.player.draw();
                                else trigger.player.chooseToDiscard('he', true);
                            },
                        },
                        zi_meibu: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'phaseUseBegin' },
                            filter(event, player) {
                                return event.player != player && event.player.isAlive() && player.countCards('he') && event.player.inRange(player);
                            },
                            checkx(event, player) {
                                if (get.attitude(player, event.player) >= 0) return false;
                                var e2 = player.getEquip(2);
                                if (e2) {
                                    if (e2.name == 'tengjia') return true;
                                    if (e2.name == 'bagua') return true;
                                }
                                return event.player.countCards('h') > event.player.hp;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var check = lib.skill.zi_meibu.checkx(trigger, player);
                                player
                                    .chooseToDiscard(get.prompt2('zi_meibu', trigger.player), 'he')
                                    .set('ai', function (card) {
                                        if (_status.event.check) return 6 - get.value(card);
                                        return 0;
                                    })
                                    .set('check', check);
                                ('step 1');
                                if (result.bool) {
                                    var target = trigger.player;
                                    var card = result.cards[0];
                                    player.line(target, 'green');
                                    target.addTempSkill('zi_zhixi', 'phaseUseAfter');
                                    target.storage.zi_zhixi2 = player;
                                }
                            },
                            ai: { expose: 0.2 },
                        },
                        zi_zhixi: {
                            mod: {
                                cardEnabled(card, player) {
                                    if (player.storage.zi_zhixi2 || player.countMark('zi_zhixi') >= player.hp) return false;
                                },
                                cardUsable(card, player) {
                                    if (player.storage.zi_zhixi2 || player.countMark('zi_zhixi') >= player.hp) return false;
                                },
                                cardRespondable(card, player) {
                                    if (player.storage.zi_zhixi2 || player.countMark('zi_zhixi') >= player.hp) return false;
                                },
                            },
                            group: 'zi_zhixi2',
                            trigger: { player: 'useCard1' },
                            forced: true,
                            popup: false,
                            firstDo: true,
                            onremove(player) {
                                delete player.storage.zi_zhixi;
                                delete player.storage.zi_zhixi2;
                            },
                            content() {
                                player.addMark('zi_zhixi', 1, false);
                            },
                            ai: { presha: true, pretao: true, nokeep: true },
                        },
                        zi_zhixi2: {
                            trigger: { player: 'useCardAfter' },
                            forced: true,
                            popup: false,
                            firstDo: true,
                            filter(event, player) {
                                return get.type2(event.card) == 'trick';
                            },
                            content() {
                                var target = player.storage.zi_zhixi2;
                                var evt = event.getParent('phaseUse');
                                if (evt && evt.player == player) evt.skipped = true;
                                if (player.countCards('he') && target && target.isAlive()) {
                                    target.line(player);
                                    target.gainPlayerCard(player, 'he', true);
                                }
                            },
                        },
                        zi_mumu: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseUseBegin' },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('zi_mumu'), function (card, player, target) {
                                        return target.countCards('he');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (
                                            att > 0 &&
                                            target.countCards('ej', function (card) {
                                                return get.position(card) == 'j' || get.value(card, target) <= 0;
                                            })
                                        )
                                            return 2 * att;
                                        else if (
                                            att < 0 &&
                                            target.countCards('e', function (card) {
                                                return get.value(card, target) > 5;
                                            })
                                        )
                                            return -att;
                                        return -1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.gainPlayerCard(target, 'ej', true);
                                } else event.finish();
                                ('step 2');
                                player.chooseToDiscard('he', true);
                                ('step 3');
                                if (get.type(result.cards[0]) != 'equip') player.addTempSkill('zi_mumu_less');
                            },
                            subSkill: {
                                less: {
                                    charlotte: true,
                                    mark: true,
                                    intro: { content: '本回合不能使用【杀】' },
                                    mod: {
                                        cardEnabled(card) {
                                            if (card.name == 'sha') return false;
                                        },
                                    },
                                },
                            },
                        },
                        zi_fujiang: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseZhunbeiBegin' },
                            filter(event, player) {
                                return !player.isMinHandcard(true);
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('zi_fujiang'), function (card, player, target) {
                                        return target != player && target.countCards('h') <= player.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(player, target) > 0) return get.attitude(player, target) * 999;
                                        var num1 = 0,
                                            num2 = 0;
                                        player.countCards('h', function (card) {
                                            num1 += get.value(card);
                                        });
                                        target.countCards('h', function (card) {
                                            num2 += get.value(card);
                                        });
                                        if (player.countCards('h') - target.countCards('h') > 1) return 0;
                                        return -get.attitude(player, target) * (num2 - num1);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.swapHandcards(target);
                                } else event.finish();
                                ('step 2');
                                target
                                    .chooseControl('摸牌', '决斗')
                                    .set('prompt', '覆江:请选择一项')
                                    .set('choiceList', ['令' + get.translation(player) + '摸两张牌', '视为对' + get.translation(player) + '使用一张【决斗】'])
                                    .set('ai', function () {
                                        if (_status.event.goon) return '决斗';
                                        return '摸牌';
                                    })
                                    .set('goon', get.effect(player, { name: 'juedou' }, target, target) > 0);
                                ('step 3');
                                if (result.control == '摸牌') {
                                    target.line(player);
                                    player.draw(2);
                                } else target.useCard({ name: 'juedou' }, player, false);
                            },
                        },
                        zi_shuxun: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'damageEnd' },
                            forced: true,
                            content() {
                                'step 0';
                                var str = '';
                                if (player.hp == 1) str = '(你可死亡并令回复量和摸牌数翻倍)';
                                player.chooseTarget(get.prompt('zi_shuxun'), '令一名其他角色回复1点体力并摸一张牌' + str, lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    if (get.attitude(player, target) > 0) return get.attitude(player, target) * 999;
                                    var num1 = 0,
                                        num2 = 0;
                                    player.countCards('h', function (card) {
                                        num1 += get.value(card);
                                    });
                                    target.countCards('h', function (card) {
                                        num2 += get.value(card);
                                    });
                                    if (player.countCards('h') - target.countCards('h') > 1) return 0;
                                    return -get.attitude(player, target) * (num2 - num1);
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.num = 1;
                                    var target = result.targets[0];
                                    event.target = target;
                                    if (player.hp == 1) player.chooseBool('是否死亡并令回复量和摸牌数+1？').set('choice', lib.skill.zi_shuxun.checkx(trigger, player) == true);
                                    else result.bool = false;
                                } else event.finish();
                                ('step 2');
                                if (result.bool) event.num = 2;
                                ('step 3');
                                target.recover(event.num);
                                target.draw(event.num);
                                ('step 4');
                                if (event.num == 2) player.die();
                            },
                            checkx(event, player) {
                                if (!player.hasFriend()) return false;
                                if (
                                    player.countCards('hs', function (card) {
                                        return card.name != 'du';
                                    }) > 2
                                )
                                    return false;
                                if (player.countCards('hs', { name: ['tao', 'jiu'] })) return false;
                                if (['主', '内', '将', '帅'].includes(lib.translate[player.identity])) return false;
                                return true;
                            },
                        },
                        zi_lianzhu: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            position: 'he',
                            filter(event, player) {
                                return (
                                    player.countCards('he') &&
                                    !player.hasSkill('zi_lianzhu3') &&
                                    game.hasPlayer(function (target) {
                                        return target != player && !target.hasSkill('zi_lianzhu2');
                                    })
                                );
                            },
                            filterTarget(card, player, target) {
                                return target != player && !target.hasSkill('zi_lianzhu2');
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
                                target.addTempSkill('zi_lianzhu2', 'phaseUseAfter');
                                target.gain(cards, player, 'giveAuto');
                                ('step 1');
                                var num = 0;
                                if (get.color(cards[0]) == 'black') {
                                    for (var i of game.players) {
                                        if (i.getExpansions('zi_xiehui2').length) num++;
                                    }
                                    target
                                        .chooseToDiscard(2, 'he', '弃置两张牌,或令' + get.translation(player) + '摸' + get.cnNumber(1 + num) + '张牌')
                                        .set('ai', function (card) {
                                            if (_status.event.goon) return 7 - get.value(card);
                                            return 0;
                                        })
                                        .set('goon', get.attitude(target, player) < 0);
                                    event.num = num;
                                } else event.finish();
                                ('step 2');
                                if (!result.bool) {
                                    player.draw(1 + event.num);
                                    player.addTempSkill('zi_lianzhu3');
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
                        zi_lianzhu2: { charlotte: true },
                        zi_lianzhu3: { charlotte: true },
                        zi_xiehui: {
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
                            trigger: { global: 'gainAfter' },
                            forced: true,
                            filter(event, player) {
                                if (event.player != player) {
                                    var hs = event.player.getCards('h');
                                    var evt = event.getl(player);
                                    return (
                                        evt &&
                                        evt.cards2 &&
                                        evt.cards2.filter(function (card) {
                                            return hs.includes(card) && get.color(card, event.player) == 'black';
                                        }).length
                                    );
                                }
                                return false;
                            },
                            logTarget: 'player',
                            content() {
                                trigger.player.addSkill('zi_xiehui2');
                                var hs = trigger.player.getCards('h');
                                var cards = trigger.getl(player).cards2.filter(function (card) {
                                    return hs.includes(card) && get.color(card, trigger.player) == 'black';
                                });
                                trigger.player.addToExpansion(cards, trigger.player, 'give').gaintag.add('zi_xiehui2');
                            },
                        },
                        zi_xiehui2: {
                            marktext: '弄',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            trigger: { player: 'damageEnd' },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            content() {
                                'step 0';
                                var cards = player.getExpansions('zi_xiehui2');
                                player.gain(cards, 'gain2');
                                if (cards.length > 1) player.loseHp();
                                ('step 1');
                                player.removeSkill('zi_xiehui2');
                            },
                        },
                        zi_lyweicheng: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'useCardAfter' },
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                var list = [];
                                game.countPlayer(function (current) {
                                    if (current.group && current.group != 'unknown') list.add(current.group);
                                });
                                list.sort(function (a, b) {
                                    return lib.group.indexOf(a) - lib.group.indexOf(b);
                                });
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('prompt', get.prompt2('zi_lyweicheng'))
                                    .set('ai', function () {
                                        return _status.event.choice;
                                    })
                                    .set(
                                        'choice',
                                        (function () {
                                            var getn = function (group) {
                                                return game.countPlayer(function (current) {
                                                    if (current.group != group) return false;
                                                    if (player == current) return 0.3;
                                                    if (get.attitude(current, player) > 0) return 1;
                                                    return 0.7;
                                                });
                                            };
                                            list.sort(function (a, b) {
                                                return getn(b) - getn(a);
                                            });
                                            return list[0];
                                        })()
                                    );
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    game.log(player, '选择了', '#y' + get.translation(result.control + 2));
                                    player.storage.zi_lyweicheng2 = result.control;
                                    player.addTempSkill('zi_lyweicheng2');
                                    player.draw(
                                        game.countPlayer(function (current) {
                                            return current.group == result.control;
                                        })
                                    );
                                } else player.getStat('triggerSkill').zi_lyweicheng--;
                            },
                        },
                        zi_lyweicheng2: {
                            charlotte: true,
                            mod: {
                                playerEnabled(card, player, target) {
                                    if (target.group == player.storage.zi_lyweicheng2) return false;
                                },
                            },
                        },
                        zi_lide: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseDiscardEnd' },
                            filter(event, player) {
                                return player.getHistory('lose', function (evt) {
                                    return evt.type == 'discard' && evt.getParent('phaseDiscard') == event && evt.hs.filterInD('d').length;
                                }).length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var cards = [];
                                game.getGlobalHistory('cardMove', function (evt) {
                                    if (evt.name == 'cardsDiscard' && evt.getParent('phaseDiscard') == trigger) cards.addArray(evt.cards.filterInD('d'));
                                });
                                game.countPlayer2(function (current) {
                                    current.getHistory('lose', function (evt) {
                                        if (evt.type != 'discard' || evt.getParent('phaseDiscard') != trigger) return;
                                        cards.addArray(evt.cards.filterInD('d'));
                                    });
                                });
                                event.cards = cards;
                                event.list = [];
                                event.log = false;
                                ('step 1');
                                var num = event.cards.length,
                                    list = event.list;
                                if (!event.log)
                                    player
                                        .chooseTarget(get.prompt2(''), function (card, player, target) {
                                            return !list.includes(target) && target != player && get.distance(player, target) <= num;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.attitude(player, target);
                                        }).animate = false;
                                else
                                    player
                                        .chooseTarget('是否继续发动【励德】？', lib.translate.zi_lide_info, function (card, player, target) {
                                            return target != player && get.distance(player, target) <= num;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.attitude(player, target);
                                        }).animate = false;
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    event.list.push(target);
                                    if (!event.log) {
                                        event.log = true;
                                    }
                                    player.line(target);
                                    player.chooseButton(['令' + get.translation(target) + '获得其中的' + get.cnNumber(get.distance(player, target)) + '张牌', cards], get.distance(player, target), true);
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    for (var i of result.links) event.cards.remove(i);
                                    target.gain(result.links, player, 'give');
                                }
                                ('step 4');
                                if (event.cards.length) event.goto(1);
                            },
                        },
                        zi_nantui: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            check(event, player) {
                                if (event.player == player) return get.effect(event.target, { name: 'sha' }, player, player) > 0;
                                return get.effect(player, { name: 'sha' }, event.player, event.player) > 0;
                            },
                            logTarget: 'target',
                            content() {
                                trigger.parent.excluded.add(trigger.target);
                                trigger.player.useCard({ name: 'juedou' }, trigger.target, false);
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        zi_yifu: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'damageEnd' },
                            filter(event, player) {
                                return player.countCards('he') && event.source && event.source.isAlive() && game.players.length > 2;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var targets = [player, trigger.source];
                                player.chooseCardTarget({
                                    filterCard: true,
                                    filterTarget(card, player, target) {
                                        return !targets.includes(target);
                                    },
                                    selectCard: [1, 2],
                                    position: 'he',
                                    prompt: get.prompt2('zi_yifu'),
                                    ai1(card) {
                                        var player = _status.event.player;
                                        if (ui.selected.cards.length <= Math.max(1, player.needsToDiscard(), player.countCards('h') - 4)) return 6 - get.value(card);
                                        return 4 - get.value(card);
                                    },
                                    ai2(target) {
                                        if (target == game.me || target.isOnline() || target.hasValueTarget({ name: 'juedou' })) return 2;
                                        if (player.needsToDiscard()) return 0.5;
                                        return 0;
                                    },
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    target.gain(result.cards, player, 'giveAuto');
                                    event.cards = result.cards;
                                } else event.finish();
                                ('step 2');
                                var list = [],
                                    bool = false,
                                    MePlayer = player;
                                for (var name of ['sha', 'juedou']) {
                                    if (target.canUse({ name: name }, trigger.source)) bool = true;
                                    if (name == 'sha') {
                                        for (var i of lib.inpile_nature) {
                                            if (target.canUse({ name: name, nature: i }, trigger.source)) bool = true;
                                        }
                                    }
                                    if (bool) break;
                                }
                                if (player.countCards('h') < player.maxHp) list.push('选项一');
                                if (bool) list.push('选项二');
                                list.push('背水!');
                                target
                                    .chooseControl(list)
                                    .set('choiceList', ['令' + get.translation(player) + '将手牌补至体力上限', '将' + get.translation(event.cards) + '当作任意一种【杀】或【决斗】使用', '背水!执行所有选项,本回合你和' + get.translation(player) + '受到的伤害+1'])
                                    .set('prompt', '义负:请选择一项执行')
                                    .set('ai', function () {
                                        var trigger = _status.event.getTrigger(),
                                            player = _status.event.player,
                                            target = MePlayer;
                                        if (get.attitude(player, target) > 0 && get.effect(trigger.source, { name: 'juedou' }, player, player) > 0) return '背水!';
                                        if (get.effect(trigger.source, { name: 'juedou' }, player, player) > 0) return '选项二';
                                        return '选项一';
                                    });
                                ('step 3');
                                game.log(target, '选择了', '#g' + result.control);
                                if (result.control == '背水!') {
                                    player.addTempSkill('zi_yifu_damage');
                                    target.addTempSkill('zi_yifu_damage');
                                }
                                if (result.control != '选项二' && player.countCards('h') < player.maxHp) player.drawTo(player.maxHp);
                                if (result.control != '选项一') {
                                    var next = game.createEvent('zi_yifu_use');
                                    next.player = target;
                                    next.target = trigger.source;
                                    next.cards = event.cards;
                                    next.setContent(lib.skill.zi_yifu.contentx);
                                }
                            },
                            contentx() {
                                'step 0';
                                var list = [],
                                    HePlayer = target;
                                for (var name of ['sha', 'juedou']) {
                                    if (name == 'sha') {
                                        if (player.canUse({ name: name }, target)) list.push(['基本', '', name]);
                                        for (var nature of lib.inpile_nature) {
                                            if (player.canUse({ name: name, nature: nature }, target)) list.push(['基本', '', name, nature]);
                                        }
                                    } else if (player.canUse({ name: 'juedou' }, target)) list.push(['锦囊', '', name]);
                                }
                                if (list.length)
                                    player.chooseButton(['将' + get.translation(cards) + '当做一种任意一种【杀】或【决斗】对' + get.translation(target) + '使用', [list, 'vcard']], true).set('ai', function (button) {
                                        var player = _status.event.player,
                                            target = HePlayer;
                                        return get.effect(target, { name: button.link[2], nature: button.link[3] }, player, player);
                                    });
                                else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    var name = result.links[0][2],
                                        nature = result.links[0][3];
                                    player.useCard({ name: name, nature: nature }, cards, target, false);
                                }
                            },
                            subSkill: {
                                damage: {
                                    charlotte: true,
                                    trigger: { player: 'damageBegin1' },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                    marktext: '伤',
                                    mark: true,
                                    intro: {
                                        content: '受到的伤害+1',
                                    },
                                },
                            },
                        },
                        zi_weicheng: {
                            derivation: 'zi_zhijizhibi',
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'gainAfter' },
                            forced: true,
                            filter(event, player) {
                                if (!player.storage.zi_weicheng2) player.storage.zi_weicheng2 = [];
                                var list = ['zi_zhijizhibi'];
                                list.addArray(get.zhinangs());
                                for (var i of player.storage.zi_weicheng2) list.remove(i);
                                if (!list.length) return false;
                                return event.source == player && event.player != player;
                            },
                            preHidden: true,
                            content() {
                                'step 0';
                                player.addTempSkill('zi_weicheng2');
                                if (!player.storage.zi_weicheng2) player.storage.zi_weicheng2 = [];
                                var list = ['zi_zhijizhibi'];
                                list.addArray(get.zhinangs());
                                for (var i of player.storage.zi_weicheng2) list.remove(i);
                                player.chooseButton(['选择一个智囊或【知己知彼】', [list, 'vcard']], true).set('ai', function (button) {
                                    return _status.event.player.getUseValue({ name: button.link[2] });
                                });
                                ('step 1');
                                if (result.bool) {
                                    var name = result.links[0][2];
                                    player.storage.zi_weicheng2.push(name);
                                    if (name == 'zi_yuanjiaojingong') {
                                        if (!_status.zi_yuanjiaojingong) {
                                            _status.zi_yuanjiaojingong = [
                                                ['club', 3],
                                                ['club', 4],
                                            ];

                                            game.broadcastAll(function () {
                                                lib.inpile.add('zi_yuanjiaojingong');
                                            });
                                        }
                                        if (_status.zi_yuanjiaojingong.length) {
                                            var info = _status.zi_yuanjiaojingong.randomRemove();
                                            card = game.createCard2('zi_yuanjiaojingong', info[0], info[1]);
                                        }
                                    }
                                    if (!card) card = get.cardPile(name);
                                    if (card) player.gain(card, 'gain2');
                                }
                            },
                        },
                        zi_weicheng2: {
                            charlotte: true,
                        },
                        zi_zhijizhibi2: {
                            charlotte: true,
                        },
                        zi_daoshu: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            inherit: 'daoshu',
                        },
                        zi_xuejiu: {
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.type2(card) == 'trick') return true;
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.type2(card) == 'trick') return false;
                                },
                            },
                            group: ['zi_xuejiu_achieve', 'zi_xuejiu_lost'],
                            audio: 'ext:星火燎原·紫/audio:2',
                            dutySkill: true,
                            trigger: { player: 'useCardAfter' },
                            filter(event, player) {
                                return get.type2(event.card) != 'trick';
                            },
                            forced: true,
                            //当你使用非锦囊牌后,你卜算X(X为你本回合发动〖学究〗的次数且X至多为3),你可获得其中的一张锦囊牌,你的锦囊牌不计入手牌上限
                            content() {
                                'step 0';
                                trigger.zi_xuejiu = true;
                                var num = Math.min(
                                    3,
                                    player.getHistory('useSkill', function (evt) {
                                        return evt.skill == 'zi_xuejiu';
                                    }).length
                                );
                                var cards = get.cards(num);
                                event.cards = cards;
                                game.cardsGotoOrdering(cards);
                                var next = player.chooseToMove();
                                next.set('list', [['牌堆顶', cards], ['牌堆底']]);
                                next.set('prompt', '学究:将牌移动到牌堆顶或牌堆底');
                                next.processAI = function (list) {
                                    var cards = list[0][1],
                                        player = _status.event.player;
                                    const target = _status.currentPhase?.next || player;
                                    const att = get.attitude(player, target);
                                    const top = [],
                                        bottom = cards;
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
                                    return [top, bottom];
                                };
                                ('step 1');
                                var top = result.moved[0];
                                var bottom = result.moved[1];
                                top.reverse();
                                for (var i = 0; i < top.length; i++) {
                                    ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                }
                                for (var i = 0; i < bottom.length; i++) {
                                    ui.cardPile.appendChild(bottom[i]);
                                }
                                player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                game.updateRoundNumber();
                                ('step 2');
                                player
                                    .chooseButton(['是否获得其中的一张锦囊牌？', result.moved[0].concat(result.moved[1])])
                                    .set('filterButton', (button) => get.type2(button.link) == 'trick')
                                    .set('ai', (button) => get.value(button.link)); //QQQ
                                ('step 3');
                                if (result.bool) player.gain(result.links, 'gain2');
                            },
                            subSkill: {
                                achieve: {
                                    audio: 'zi_xuejiu',
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: ['gainEnd', 'enterGame'],
                                    },
                                    filter(event, player) {
                                        for (var name of get.zhinangs()) {
                                            if (
                                                !player.countCards('h', function (card) {
                                                    return card.name == name;
                                                })
                                            )
                                                return false;
                                        }
                                        return event.name != 'phase' || game.phaseNumber == 0; //QQQ
                                    },
                                    forced: true,
                                    content() {
                                        game.log(player, '使命成功');
                                        player.awakenSkill('zi_xuejiu');
                                        player.addSkill('zi_xuejiux');
                                        game.log(player, '修改了技能', '#g【学究】');
                                    },
                                },
                                lost: {
                                    audio: 'zi_xuejiu',
                                    trigger: { player: 'loseAfter' },
                                    filter(event, player) {
                                        if (
                                            player.countCards('h', function (card) {
                                                return get.type2(card) == 'trick';
                                            })
                                        )
                                            return false;
                                        for (var card of event.cards2) {
                                            if (get.type2(card) == 'trick') return true;
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        game.log(player, '使命失败');
                                        player.awakenSkill('zi_xuejiu');
                                    },
                                },
                            },
                        },
                        zi_xuejiux: {
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.type2(card) == 'trick') return true;
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && get.type2(card) == 'trick') return false;
                                },
                            },
                            audio: 'zi_xuejiu',
                            trigger: { player: 'useCardAfter' },
                            filter(event, player) {
                                return get.type2(event.card) != 'trick' && !event.zi_xuejiu;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var cards = get.cards(3);
                                event.cards = cards;
                                game.cardsGotoOrdering(cards);
                                var next = player.chooseToMove();
                                next.set('list', [['牌堆顶', cards], ['牌堆底']]);
                                next.set('prompt', '学究:将牌移动到牌堆顶或牌堆底');
                                next.processAI = function (list) {
                                    var cards = list[0][1],
                                        player = _status.event.player;
                                    const target = _status.currentPhase?.next || player;
                                    const att = get.attitude(player, target);
                                    const top = [],
                                        bottom = cards;
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
                                    return [top, bottom];
                                };
                                ('step 1');
                                var top = result.moved[0];
                                var bottom = result.moved[1];
                                top.reverse();
                                for (var i = 0; i < top.length; i++) {
                                    ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                }
                                for (var i = 0; i < bottom.length; i++) {
                                    ui.cardPile.appendChild(bottom[i]);
                                }
                                player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                game.updateRoundNumber();
                                ('step 2');
                                player
                                    .chooseButton(['是否获得其中的一张锦囊牌？', event.cards])
                                    .set('filterButton', function (button) {
                                        return get.type2(button.link) == 'trick';
                                    })
                                    .set('ai', function (button) {
                                        var player = _status.event.player;
                                        return get.value(button.link, player);
                                    });
                                ('step 3');
                                if (result.bool) player.gain(result.links, 'gain2');
                            },
                        },
                        zi_xingbu: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseJieshuBegin' },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('zi_xingbu'), lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target) + 999;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    var cards = get.cards(3);
                                    for (var i of cards) {
                                        ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                    } //QQQ
                                    event.cards = cards;
                                    player.showCards(cards, get.translation(player) + '发动了【星卜】');
                                } else event.finish();
                                ('step 2');
                                var num1 = 0;
                                for (var i of event.cards) {
                                    if (get.color(i, false) == 'red') num1++;
                                }
                                var num2 = 3 - num1;
                                target.addTempSkill('zi_xingbu_effect' + (num1 > num2 ? 1 : 2), { player: 'phaseAfter' });
                            },
                            subSkill: {
                                effect1: {
                                    charlotte: true,
                                    mark: true,
                                    intro: { content: '出【杀】次数+1' },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + 1;
                                        },
                                    },
                                },
                                effect2: {
                                    charlotte: true,
                                    mark: true,
                                    intro: { content: '回合内第一次造成伤害-1' },
                                    trigger: { source: 'damageBegin1' },
                                    filter(event, player) {
                                        return _status.currentPhase == player;
                                    },
                                    usable: 1,
                                    forced: true,
                                    content() {
                                        player.popup('星卜');
                                        trigger.num--;
                                    },
                                },
                            },
                        },
                        zi_huaxian: {
                            derivation: 'zi_jinchan',
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: {
                                global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter(event, player) {
                                return (
                                    !player.hasSkill('zi_huaxian_silent') &&
                                    game.hasPlayer(function (current) {
                                        var evt = event.getl(current);
                                        return evt && evt.hs && evt.hs.length && current.countCards('h') == 1;
                                    })
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.list = game
                                    .filterPlayer(function (current) {
                                        var evt = trigger.getl(current);
                                        return evt && evt.hs && evt.hs.length && current.countCards('h') == 1;
                                    })
                                    .sortBySeat();
                                event.num = 0;
                                ('step 1');
                                event.target = event.list[num];
                                ('step 2');
                                var list = ['zi_jinchan'];
                                var att = get.attitude(player, target);
                                list.addArray(get.zhinangs());
                                player.chooseButton([get.prompt2('zi_huaxian', target), [list, 'vcard']]).set('ai', function (button) {
                                    if (att <= 0) return 0;
                                    return event.target.getUseValue({ name: button.link[2] });
                                });
                                ('step 3');
                                if (result.bool) {
                                    var name = result.links[0][2];
                                    player.addTempSkill('zi_huaxian_silent');
                                    game.log(player, '选择了', '#y' + get.translation(name));
                                    target.addSkill('zi_huaxian_eff');
                                    target.addGaintag(target.getCards('h'), 'zi_huaxian');
                                    target.storage.zi_huaxian_eff = name;
                                    event.finish();
                                }
                                ('step 4');
                                if (event.num < event.list.length - 1 && !player.hasSkill('zi_huaxian_silent')) {
                                    event.num++;
                                    event.goto(1);
                                }
                            },
                            subSkill: {
                                silent: { charlotte: true },
                                eff: {
                                    charlotte: true,
                                    mod: {
                                        cardname(card, player) {
                                            var name = player.storage.zi_huaxian_eff;
                                            if (name && get.itemtype(card) == 'card' && card.hasGaintag('zi_huaxian')) return name;
                                        },
                                        cardnature(card, player) {
                                            var name = player.storage.zi_huaxian_eff;
                                            if (name && get.itemtype(card) == 'card' && card.hasGaintag('zi_huaxian')) return false;
                                        },
                                    },
                                },
                            },
                        },
                        _zi_huaxian_clear: {
                            charlotte: true,
                            trigger: { player: 'loseAfter' },
                            filter(event, player) {
                                if (
                                    player.countCards('h', function (card) {
                                        return card.hasGaintag('zi_huaxian');
                                    })
                                )
                                    return false;
                                return player.hasSkill('zi_huaxian_eff');
                            },
                            firstDo: true,
                            _priority: 3,
                            forced: true,
                            content() {
                                var name = player.storage.zi_huaxian_eff;
                                player.removeSkill('zi_huaxian_eff');
                                if (trigger.type == 'discard' && name == 'zi_jinchan') {
                                    player.draw();
                                }
                            },
                        },
                        zi_jinchan_log: {},
                        zi_dingli: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'phaseDrawEnd' },
                            filter(event, player) {
                                return !player.hasSkill('zi_dingli_round');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('zi_dingli'), [1, Infinity]).set('ai', function (target) {
                                    var player = _status.event.player,
                                        trigger = _status.event.getTrigger();
                                    if (get.attitude(player, trigger.player) < 1) return -1;
                                    return get.attitude(player, target) + get.attitude(trigger.player, target);
                                }).animate = false;
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets.sortBySeat();
                                    event.targets = targets;
                                    event.num = 0;
                                    event.bool = true;
                                    player.addTempSkill('zi_dingli_round', 'roundStart');
                                } else event.finish();
                                ('step 2');
                                player.line(targets);
                                ('step 3');
                                var target = targets[num];
                                event.target = target;
                                target
                                    .chooseToDiscard('是否弃置一张牌并令' + get.translation(trigger.player) + '摸一张牌？')
                                    .set('ai', function (card) {
                                        if (!_status.event.goon) return 0;
                                        return 5 - get.value(card);
                                    })
                                    .set('goon', get.attitude(target, trigger.player) > 0);
                                ('step 4');
                                target.addExpose(0.1);
                                if (result.bool) {
                                    target.line(trigger.player);
                                    trigger.player.draw();
                                } else event.bool = false;
                                ('step 5');
                                if (event.num < event.targets.length - 1) {
                                    event.num++;
                                    event.goto(3);
                                } else if (event.bool == true) player.draw();
                            },
                            subSkill: { round: { charlotte: true } },
                        },
                        _zi_g_jinchan: {
                            cardSkill: true,
                            trigger: { target: 'useCardToBefore' },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (event.parent.directHit.includes(player)) return false;
                                var num = player.countCards('h', function (card) {
                                    var name = player.storage.zi_huaxian_eff;
                                    if (name && name == 'zi_jinchan' && get.itemtype(card) == 'card' && card.hasGaintag('zi_huaxian')) return true;
                                    return card.name == 'zi_jinchan';
                                });
                                return num && num == player.countCards('h');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToUse('是否对' + get.translation(trigger.card) + '使用【金蝉脱壳】？')
                                    .set('ai1', function (card) {
                                        return _status.event.bool;
                                    })
                                    .set('bool', -get.effect(player, trigger.card, trigger.player, player))
                                    .set('respondTo', [trigger.player, trigger.card])
                                    .set('filterCard', function (card, player) {
                                        if (card.name != 'zi_jinchan') return false;
                                        return lib.filter.cardEnabled(card, player, 'forceEnable');
                                    });
                                trigger.zi_jinchan = true;
                                ('step 1');
                                delete trigger.zi_jinchan;
                            },
                        },
                        zi_poli: {
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player) {
                                    return storage ? '出牌阶段限一次,你可以回复1点体力,摸' + get.cnNumber(player.countMark('zi_polix')) + '张牌' : '出牌阶段限一次,你可以失去1点体力,弃置至多两张牌';
                                },
                            },
                            audio: 'ext:星火燎原·紫/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                if (player.storage.zi_poli == true) {
                                    player.recover();
                                    player.draw(player.countMark('zi_polix'));
                                    player.removeSkill('zi_polix');
                                    event.goto(2);
                                } else {
                                    player.loseHp();
                                    player.chooseToDiscard('he', [1, 2], '先破后立,请选择先破(弃置)的牌,下次发动〖破立〗时后立(摸牌数)将为先破弃牌数的两倍').set('ai', function (card) {
                                        return 6 - get.value(card);
                                    });
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.addSkill('zi_polix'); //QQQ
                                    player.addMark('zi_polix', result.cards.length * 2, false);
                                }
                                ('step 2');
                                player.changeZhuanhuanji('zi_poli');
                            },
                            ai: {
                                order(skill, player) {
                                    if (player.hasMark('zi_polix')) return 10;
                                    return 1;
                                },
                                result: {
                                    player(player) {
                                        if (!player.hasMark('zi_polix') && player.hp + player.countCards('hs', { name: ['tao', 'jiu'] }) <= 2) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        zi_polix: { charlotte: true, onremove: true },
                        zi_weidui: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: ['loseEnd', 'gainEnd'] },
                            filter(event, player) {
                                if (!event.player.isAlive()) return false;
                                if (player.hasSkill('zi_weidui_' + event.name)) return false;
                                return event.cards && event.cards.length >= event.player.hp;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (event.name == 'lose' && event.player.isHealthy()) return false;
                                return get.attitude(player, event.player) * (event.name == 'lose' ? 1 : -1) > 0;
                            },
                            prompt(event, player) {
                                return get.prompt('zi_weidui', event.player) + '(令' + get.translation(event.player) + (event.name == 'lose' ? '回复' : '失去') + '1点体力' + (_status.currentPhase == player ? '' : ',并可于当前回合结束时发动〖破立〗') + ')';
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('zi_weidui_' + trigger.name, 'roundStart');
                                trigger.player[trigger.name == 'gain' ? 'loseHp' : 'recover']();
                                ('step 1');
                                if (_status.currentPhase != player) player.addTempSkill('zi_weidui_poli');
                            },
                            subSkill: {
                                lose: { charlotte: true },
                                gain: { charlotte: true },
                                poli: {
                                    charlotte: true,
                                    trigger: { global: 'phaseEnd' },
                                    filter(event, player) {
                                        return player.hasSkill('zi_poli');
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseBool('是否发动〖破立〗？');
                                        ('step 1');
                                        if (result.bool) player.useSkill('zi_poli');
                                    },
                                },
                            },
                        },
                        zi_heguo: {
                            group: ['zi_heguo_achieve', 'zi_heguo_lost'],
                            audio: 'ext:星火燎原·紫/audio:2',
                            dutySkill: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.countMark('zi_heguo_used') > 1) return false;
                                return player.countCards('h');
                            },
                            filterTarget(card, player, target) {
                                return target != player && player.canCompare(target);
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('zi_heguo_used');
                                player.addMark('zi_heguo_used', 1, false);
                                if (!_status.zi_heguox) _status.zi_heguox = 0;
                                player.chooseToCompare(target).set('small', get.attitude(player, target) > 0 && player.countMark('zi_heguo_lostx') < 2);
                                ('step 1');
                                if (!result.bool) {
                                    if (result.tie) {
                                        _status.zi_heguox += 2;
                                        player.draw(2, 'nodelay');
                                        _status.zi_heguox += 2;
                                        target.draw(2);
                                    } else {
                                        _status.zi_heguox += 2;
                                        player.draw(2);
                                    }
                                } else {
                                    _status.zi_heguox += 2;
                                    target.draw(2);
                                    target.addTempSkill('zi_heguo_ai');
                                }
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkill('zi_heguo_ai', null, null, false)) return 0;
                                        var maxnum = 0;
                                        var cards2 = target.getCards('h');
                                        for (var i = 0; i < cards2.length; i++) {
                                            if (cards2[i].number > maxnum) {
                                                maxnum = cards2[i].number;
                                            }
                                        }
                                        if (maxnum > 10) maxnum = 10;
                                        if (maxnum < 5 && cards2.length > 1) maxnum = 5;
                                        var cards = player.getCards('h');
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (i.number < maxnum) return 1;
                                            }
                                        return 0;
                                    },
                                },
                            },
                            subSkill: {
                                achieve: {
                                    audio: 'zi_heguo',
                                    trigger: { global: ['zi_heguoAfter', 'zi_heguoxAfter'] },
                                    filter(event, player) {
                                        return _status.zi_heguox && _status.zi_heguox >= game.players.length;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        game.log(player, '使命成功');
                                        player.awakenSkill('zi_heguo');
                                        player.gainMaxHp();
                                        ('step 1');
                                        if (player.maxHp > player.hp) player.hp = player.maxHp;
                                        ('step 2');
                                        player.addSkill('zi_heguox');
                                        game.log(player, '修改了技能', '#g【和国】');
                                    },
                                },
                                lost: {
                                    audio: 'zi_heguo',
                                    trigger: { player: ['chooseToCompareAfter', 'compareMultipleAfter'], target: ['chooseToCompareAfter', 'compareMultipleAfter'] },
                                    filter(event, player) {
                                        if (event.preserve) return false;
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        if ((trigger.num1 - trigger.num2) * (player == trigger.player ? 1 : -1) > 0) player.removeSkill('zi_heguo_lostx');
                                        else {
                                            player.addSkill('zi_heguo_lostx');
                                            player.addMark('zi_heguo_lostx', 1, false);
                                            if (player.countMark('zi_heguo_lostx') >= 3) {
                                                game.log(player, '使命失败');
                                                player.awakenSkill('zi_heguo');
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zi_heguo_ai: { charlotte: true },
                        zi_heguo_lostx: { charlotte: true, onremove: true },
                        zi_heguo_used: { charlotte: true, onremove: true },
                        zi_heguox: {
                            audio: 'zi_heguo',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.hasMark('zi_heguo_used')) return false;
                                return player.countCards('h');
                            },
                            filterTarget(card, player, target) {
                                return target != player && player.canCompare(target);
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('zi_heguo_used');
                                player.addMark('zi_heguo_used', 1, false);
                                if (!_status.zi_heguox) _status.zi_heguox = 0;
                                player.chooseToCompare(target).set('small', get.attitude(player, target) > 0);
                                ('step 1');
                                if (!result.bool) {
                                    if (result.tie) {
                                        _status.zi_heguox += 2;
                                        player.draw(2, 'nodelay');
                                        _status.zi_heguox += 2;
                                        target.draw(2);
                                    } else {
                                        _status.zi_heguox += 2;
                                        player.draw(2);
                                    }
                                } else {
                                    _status.zi_heguox += 2;
                                    target.draw(2);
                                    target.addTempSkill('zi_heguo_ai');
                                }
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkill('zi_heguo_ai', null, null, false)) return 0;
                                        var maxnum = 0;
                                        var cards2 = target.getCards('h');
                                        for (var i = 0; i < cards2.length; i++) {
                                            if (cards2[i].number > maxnum) {
                                                maxnum = cards2[i].number;
                                            }
                                        }
                                        if (maxnum > 10) maxnum = 10;
                                        if (maxnum < 5 && cards2.length > 1) maxnum = 5;
                                        var cards = player.getCards('h');
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (i.number < maxnum) return 1;
                                            }
                                        return 0;
                                    },
                                },
                            },
                        },
                        zi_tiannan: {
                            group: 'zi_tiannan_number',
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: {
                                global: 'chooseToCompareBegin',
                            },
                            filter(event, player) {
                                if (!player.countCards('e')) return false;
                                if (player == event.player) return true;
                                if (event.targets) return event.targets.includes(player);
                                return player == event.target;
                            },
                            prompt2(event, player) {
                                return '使用装备区的一张牌进行拼点';
                            },
                            check: () => false,
                            content() {
                                'step 0';
                                if (!trigger.fixedResult) trigger.fixedResult = {};
                                player.chooseCard('e', '天难:请选择一张装备牌作为拼点牌', true);
                                ('step 1');
                                if (result.bool) trigger.fixedResult[player.playerid] = result.cards[0];
                            },
                            subSkill: {
                                number: {
                                    trigger: { player: 'compare', target: 'compare' },
                                    filter(event, player) {
                                        if (event.iwhile) return false;
                                        if (event.player == player) return event.card1.suit == 'spade' && event.num1 > 1;
                                        else return event.card2.suit == 'spade' && event.num2 > 1;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var num = undefined,
                                            list = [];
                                        if (player == trigger.player) num = trigger.num1;
                                        else num = trigger.num2;
                                        for (var i = num - 1; i >= 1; i--) list.push(i);
                                        list.reverse();
                                        list.push('cancel2');
                                        player
                                            .chooseControl(list)
                                            .set('prompt', get.prompt('zi_tiannan'))
                                            .set('prompt2', '将你的拼点牌的点数减少任意点数至以下结果')
                                            .set('ai', function () {
                                                return 'cancel2';
                                            });
                                        ('step 1');
                                        if (result.control != 'cancel2') {
                                            player.popup(result.control);
                                            game.log(player, '的拼点点数改为了', '#g' + result.control);
                                            if (trigger.player == player) trigger.num1 = result.control;
                                            else trigger.num2 = result.control;
                                        }
                                    },
                                },
                            },
                        },
                        zi_heluan: {
                            mod: {
                                targetInRange(card) {
                                    if (card.name == 'sha' && lib.inpile_nature.includes(card.nature)) return true;
                                },
                                cardUsable(card, player) {
                                    if (card.name == 'sha' && lib.inpile_nature.includes(card.nature)) return Infinity;
                                },
                            },
                            audio: 'ext:星火燎原·紫/audio:2',
                            dutuSkill: true,
                            trigger: { player: 'phaseUseBegin' },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.countCards('ej', function (card) {
                                        return get.color(card, current) == 'black';
                                    });
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = 0;
                                for (var i of game.players) {
                                    num += i.countCards('ej', function (card) {
                                        return get.color(card, i) == 'black';
                                    });
                                }
                                num = Math.min(game.players.length - 1, num);
                                if (num > 0)
                                    player.chooseTarget(get.prompt2('zi_heluan'), num, lib.filter.notMe).set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.attitude(player, target) * target.countCards('he') + 999;
                                    });
                                else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets.sortBySeat();
                                    player.awakenSkill('zi_heluan');
                                    event.targets = targets;
                                    event.num = 0;
                                    event.list = [[], [], []];
                                } else event.finish();
                                ('step 2');
                                var target = targets[num];
                                event.target = target;
                                target
                                    .chooseCard('是否交给' + get.translation(player) + '一张牌？')
                                    .set('ai', function (card) {
                                        if (!_status.event.goon) return 0;
                                        return 6 + (get.color(card) == 'black' ? 2 : -1) - get.value(card);
                                    })
                                    .set('goon', get.attitude(target, player) > 0);
                                ('step 3');
                                target.addExpose(0.1);
                                if (result.bool) {
                                    player.gain(result.cards, target, 'give');
                                    switch (get.color(result.cards[0], target)) {
                                        case 'black':
                                            event.list[0].push(target);
                                            break;
                                        case 'red':
                                            event.list[1].push(target);
                                            break;
                                    }
                                } else {
                                    event.list[2].push(target);
                                    target.chat('不给!');
                                }
                                ('step 4');
                                if (event.num < event.targets.length - 1) {
                                    event.num++;
                                    event.goto(2);
                                }
                                ('step 5');
                                var list = event.list;
                                if (list[0].length > list[1].length) {
                                    player.$fullscreenpop('合乱', 'thunder');
                                    game.log(player, '使命成功');
                                    player.draw(list[0].length + list[1].length);
                                    player
                                        .chooseTarget('令一名角色获得或重置技能〖合乱〗', true, function (card, player, target) {
                                            if (target.hasSkill('zi_heluan') && !target.awakenedSkills.includes('zi_heluan')) return false;
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.attitude(player, target) - 3;
                                        });
                                } else {
                                    game.log(player, '使命失败');
                                    player.loseHp();
                                    player.addSkill('zi_heluan_sha');
                                    player.storage.zi_heluan_sha.addArray(list[1]);
                                    player.storage.zi_heluan_sha.addArray(list[2]);
                                    player.storage.zi_heluan_sha.sortBySeat();
                                    event.finish();
                                }
                                ('step 6');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target);
                                    if (target.awakenedSkills.includes('zi_heluan')) {
                                        target.restoreSkill('zi_heluan');
                                        target.popup('合乱');
                                        game.log(target, '重置了技能', '【合乱】');
                                    } else if (!target.hasSkill('zi_heluan')) target.addSkillLog('zi_heluan');
                                }
                            },
                            subSkill: {
                                sha: {
                                    init(player) {
                                        player.storage.zi_heluan_sha = [];
                                    },
                                    charlotte: true,
                                    mark: true,
                                    intro: { content: '使用【杀】可额外指定$为目标' },
                                    audio: 'zi_heluan',
                                    trigger: { player: 'useCard2' },
                                    filter(event, player) {
                                        return (
                                            event.card &&
                                            event.card.name == 'sha' &&
                                            game.hasPlayer(function (current) {
                                                return player.storage.zi_heluan_sha.includes(current) && !event.targets.includes(current);
                                            })
                                        );
                                    },
                                    prompt(event, player) {
                                        var targets = game
                                            .filterPlayer(function (current) {
                                                return player.storage.zi_heluan_sha.includes(current) && !event.targets.includes(current);
                                            })
                                            .sortBySeat();
                                        return get.prompt('zi_heluan', targets);
                                    },
                                    prompt2(event, player) {
                                        var targets = game
                                            .filterPlayer(function (current) {
                                                return player.storage.zi_heluan_sha.includes(current) && !event.targets.includes(current);
                                            })
                                            .sortBySeat();
                                        return '令' + get.translation(targets) + '成为' + get.translation(event.card) + '的额外目标';
                                    },
                                    check(event, player) {
                                        var targets = game
                                            .filterPlayer(function (current) {
                                                return player.storage.zi_heluan_sha.includes(current) && !event.targets.includes(current);
                                            })
                                            .sortBySeat();
                                        var num = 0;
                                        for (var i of targets) num += get.effect(i, event.card, player, player);
                                        return num >= 0;
                                    },
                                    logTarget(event, player) {
                                        return game
                                            .filterPlayer(function (current) {
                                                return player.storage.zi_heluan_sha.includes(current) && !event.targets.includes(current);
                                            })
                                            .sortBySeat();
                                    },
                                    content() {
                                        var targets = game
                                            .filterPlayer(function (current) {
                                                return player.storage.zi_heluan_sha.includes(current) && !trigger.targets.includes(current);
                                            })
                                            .sortBySeat();
                                        trigger.targets.addArray(targets);
                                        game.log(targets, '成为了', trigger.card, '的额外目标');
                                    },
                                },
                            },
                        },
                        zi_fumou: {
                            init(player) {
                                player.storage.zi_fumou_players = [];
                            },
                            group: 'zi_fumou_players',
                            derivation: 'zi_geanguanhuo',
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'phaseEnd' },
                            filter(event, player) {
                                if (player.hasSkill('zi_fumou_round')) return false;
                                return game.hasPlayer(function (current) {
                                    return current.getHistory('lose', function (evt) {
                                        for (var i of evt.cards2) {
                                            if (get.zhinangs().includes(i.name)) return true;
                                        }
                                    }).length;
                                });
                            },
                            //一名角色的回合结束时,若本回合有智囊进入弃牌堆,你可以依次视为使用至多三种智囊或【隔岸观火】(你不能于此次〖辅谋〗的结算中使用这些牌已经指定过的目标)
                            content() {
                                'step 0';
                                player.storage.zi_fumou_players = [];
                                player.addTempSkill('zi_fumou_round', 'roundStart');
                                event.count = 3;
                                event.list = ['zi_geanguanhuo'];
                                event.list.addArray(get.zhinangs());
                                if (!event.list.length) event.finish();
                                ('step 1');
                                if (event.count == 3) {
                                    player
                                        .chooseButton(['视为使用一张锦囊牌', [event.list, 'vcard']], true)
                                        .set('filterButton', function (button) {
                                            var player = _status.event.player,
                                                card = { name: button.link[2], nature: button.link[3] };
                                            return game.hasPlayer(function (current) {
                                                return !player.storage.zi_fumou_players.includes(current) && player.canUse(card, current);
                                            });
                                        })
                                        .set('ai', (button) => _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] }));
                                } else {
                                    player
                                        .chooseButton(['是否视为使用一张锦囊牌？', [event.list, 'vcard']])
                                        .set('filterButton', function (button) {
                                            var player = _status.event.player,
                                                card = { name: button.link[2], nature: button.link[3] };
                                            return game.hasPlayer(function (current) {
                                                return !player.storage.zi_fumou_players.includes(current) && player.canUse(card, current);
                                            });
                                        })
                                        .set('ai', (button) => _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] }));
                                }
                                ('step 2');
                                event.count--;
                                if (result.links?.length) {
                                    //QQQ
                                    event.list.remove(result.links[0][2]);
                                    var card = { name: result.links[0][2], nature: result.links[0][3] };
                                    if (
                                        !game.hasPlayer(function (current) {
                                            return !player.storage.zi_fumou_players.includes(current) && player.canUse(card, current);
                                        })
                                    )
                                        event.finish();
                                    else
                                        player
                                            .chooseUseTarget(card, true, false)
                                            .set('filterTarget', function (card, player, target) {
                                                var evt = _status.event;
                                                if (_status.event.name == 'chooseTarget') evt = evt.parent;
                                                if (evt.list.includes(target)) return false;
                                                return lib.filter.targetEnabledx(card, player, target) && lib.filter.targetInRange(card, player, target);
                                            })
                                            .set('list', player.storage.zi_fumou_players);
                                } else event.finish();
                                ('step 3');
                                if (event.count && event.list.length) event.goto(1);
                            },
                            subSkill: {
                                round: {
                                    charlotte: true,
                                    mark: true,
                                    intro: { content: '本轮已发动〖辅谋〗' },
                                },
                                players: {
                                    charlotte: true,
                                    trigger: { player: 'useCard2' },
                                    filter(event, player) {
                                        var evt = event.getParent(2);
                                        if (evt.name != 'zi_fumou' || evt.player != player || !event.targets) return false;
                                        return true;
                                    },
                                    firstDo: true,
                                    _priority: 3,
                                    forced: true,
                                    content() {
                                        player.storage.zi_fumou_players.addArray(trigger.targets);
                                    },
                                },
                            },
                        },
                        zi_birui: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'damageEnd' },
                            forced: true,
                            content() {
                                'step 0';
                                var choiceList = ['摸一张牌,为智囊添加一种普通锦囊牌的牌名', '令本轮视为未发动过〖辅谋〗'];
                                var list = ['选项一'];
                                if (player.hasSkill('zi_fumou_round')) list.push('选项二');
                                else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                                player
                                    .chooseControl(list, 'cancel2')
                                    .set('prompt', get.prompt2('zi_birui'))
                                    .set('ai', function () {
                                        return '选项一';
                                    })
                                    .set('choiceList', choiceList);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    if (result.control == '选项二') {
                                        player.removeSkill('zi_fumou_round');
                                        event.finish();
                                    } else player.draw();
                                } else event.finish();
                                ('step 2');
                                var list = lib.inpile
                                    .filter(function (i) {
                                        return get.type(i) == 'trick' && !get.zhinangs().includes(i);
                                    })
                                    .map(function (i) {
                                        return ['锦囊', '', i];
                                    });
                                if (!list.length) event.finish();
                                else
                                    player.chooseButton(['请选择一个普通锦囊牌牌名加入智囊', [list, 'vcard']], true).set('ai', function (button) {
                                        var player = _status.event.player;
                                        return player.getUseValue({ name: button.link[2], nature: button.link[3] }) + 999;
                                    });
                                ('step 3');
                                if (result.bool) {
                                    var name = result.links[0][2];
                                    game.log(player, '为智囊添加了', '#g' + get.translation(name));
                                    var list = (_status.connectMode ? lib.configOL : lib.config).zhinang_tricks;
                                    list.push(name);
                                }
                            },
                        },
                        zi_tuifeng: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { source: 'damageSource', player: 'damageEnd' },
                            filter(event, player) {
                                return player.countCards('he') && !player.hasSkill('zi_tuifeng_buff');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = player.countCards('hs', { name: 'sha' });
                                player.chooseToDiscard('he', get.prompt2('zi_tuifeng')).set('ai', function (card) {
                                    if (card.name == 'sha' && num <= 1) return 0;
                                    return 7 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) player.addTempSkill('zi_tuifeng_buff');
                            },
                            subSkill: {
                                buff: {
                                    audio: 'zi_tuifeng',
                                    trigger: { global: 'phaseEnd' },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.draw(2);
                                        player.chooseToUse(function (card) {
                                            if (!lib.filter.cardEnabled(card, _status.event.player, _status.event)) {
                                                return false;
                                            }
                                            return card.name == 'sha';
                                        }, '是否使用一张【杀】？');
                                        ('step 1');
                                        if (
                                            player.hasHistory('sourceDamage', function (evt) {
                                                return evt.card && evt.card.name == 'sha' && evt.getParent(4) == event; //QQQ
                                            }) &&
                                            player.canMoveCard()
                                        )
                                            player.moveCard(true);
                                    },
                                },
                            },
                        },
                        zi_zhuilie: {
                            mod: {
                                targetInRange(card) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'useCardToTargeted' },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && !player.inRange(event.target);
                            },
                            forced: true,
                            logTarget: 'target',
                            content() {
                                'step 0';
                                if (trigger.parent.addCount !== false) {
                                    trigger.parent.addCount = false;
                                    var stat = player.getStat();
                                    if (stat && stat.card && stat.card.sha) stat.card.sha--;
                                }
                                player.judge(function (card) {
                                    var type = get.type(card);
                                    switch (type) {
                                        case 'equip':
                                            return 4;
                                        case 'basic':
                                            return -4;
                                        default:
                                            return 0;
                                    }
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                ('step 1');
                                if (get.type(result.card) == 'equip') {
                                    var map = trigger.customArgs;
                                    var id = trigger.target.playerid;
                                    if (!map[id]) map[id] = {};
                                    if (typeof map[id].extraDamage != 'number') map[id].extraDamage = 0;
                                    map[id].extraDamage += trigger.target.hp - 1;
                                }
                                if (get.type(result.card) == 'basic') player.loseHp();
                            },
                        },
                        zi_danyong: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseJieshuBegin' },
                            forced: true,
                            filter(event, player) {
                                return player.hp > 0;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                for (var i = 1; i <= player.hp; i++) {
                                    list.push(get.cnNumber(i) + '点');
                                }
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('prompt', get.prompt2('zi_danyong'))
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        if (player.hp > 2) return player.hp - 3;
                                        return 'cancel2';
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    var num = result.index + 1;
                                    player.loseHp(num);
                                    player.storage.zi_danyong_eff = num;
                                    player.addSkill('zi_danyong_eff');
                                }
                            },
                            subSkill: {
                                eff: {
                                    charlotte: true,
                                    audio: 'zi_danyong',
                                    trigger: { player: 'phaseBegin' },
                                    filter(event, player) {
                                        return player.storage.zi_danyong_eff && player.storage.zi_danyong_eff > 0;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var num = player.storage.zi_danyong_eff;
                                        player.removeSkill('zi_longdan_eff');
                                        player.recover(num);
                                        player
                                            .chooseTarget([1, num], '是否弃置至多' + get.cnNumber(num) + '名角色的各一张牌？', function (card, player, target) {
                                                return target.countCards('he');
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.effect(target, { name: 'guohe_copy2' }, player, player);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var targets = result.targets.sortBySeat();
                                            player.line(targets);
                                            for (var i of targets) player.discardPlayerCard(i, 'he', true);
                                        }
                                    },
                                },
                            },
                        },
                        zi_xiahao: {
                            group: 'zi_xiahao_clear',
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'phaseBegin' },
                            filter(event, player) {
                                return !player.hasMark('zi_xiahao') && event.player.countCards('h');
                            },
                            check(event, player) {
                                var att = get.attitude(player, event.player);
                                if (att > 0 && event.player.countCards('h') - event.player.hp > 0) return true;
                                if (att < 0 && event.player.countCards('h') < event.player.hp) return true;
                                return false;
                            },
                            logTarget: 'player',
                            content() {
                                player.addMark('zi_xiahao');
                                trigger.player.storage.zi_xiahao_hand = [trigger.player.countCards('h'), player];
                                trigger.player.addTempSkill('zi_xiahao_hand');
                            },
                            subSkill: {
                                hand: {
                                    charlotte: true,
                                    mod: {
                                        maxHandcardBase(player, num) {
                                            return player.storage.zi_xiahao_hand[0];
                                        },
                                    },
                                    trigger: { player: 'phaseDiscardEnd' },
                                    filter(event, player) {
                                        var cards = [];
                                        player.getHistory('lose', function (evt) {
                                            if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) cards.addArray(evt.cards2);
                                        });
                                        return !cards.length && player.storage.zi_xiahao_hand[1].isAlive();
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var target = player.storage.zi_xiahao_hand[1];
                                        event.target = target;
                                        target.chooseBool('侠豪:是否对' + get.translation(player) + '造成1点伤害？').set('choice', get.damageEffect(player, target, target) > 0);
                                        ('step 1');
                                        if (result.bool) {
                                            target.line(player);
                                            player.damage();
                                        }
                                    },
                                },
                                clear: {
                                    charlotte: true,
                                    trigger: { global: ['roundStart', 'damageAfter'] },
                                    filter(event, player, name) {
                                        if (!player.hasMark('zi_xiahao')) return false;
                                        if (name == 'roundStart') return true;
                                        return lib.translate[event.player.identity] == '主';
                                    },
                                    firstDo: true,
                                    _priority: 2,
                                    forced: true,
                                    content() {
                                        player.removeMark('zi_xiahao', player.countMark('zi_xiahao'), false);
                                    },
                                },
                            },
                        },
                        zi_qiaoji: {
                            group: ['zi_qiaoji_discard', 'zi_qiaoji_damage'],
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'drawBegin' },
                            usable: 3,
                            prompt(event, player) {
                                return get.prompt('zi_qiaoji') + '(改为摸' + get.cnNumber(event.num * 3) + '张牌,将手牌数弃置至三张)';
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            check(event, player) {
                                return event.num + player.countCards('h') <= 3;
                            },
                            content() {
                                trigger.num = trigger.num * 3;
                                trigger.zi_qiaoji = true;
                            },
                            subSkill: {
                                discard: {
                                    charlotte: true,
                                    trigger: { player: 'drawAfter' },
                                    filter(event, player) {
                                        return event.zi_qiaoji == true && player.countCards('h') > 3;
                                    },
                                    forced: true,
                                    content() {
                                        player.chooseToDiscard(player.countCards('h') - 3, 'h', true);
                                    },
                                },
                                damage: {
                                    trigger: { global: 'phaseEnd' },
                                    filter(event, player) {
                                        return player.getHistory('lose', function (evt) {
                                            for (var i of evt.cards2) {
                                                if (i.name == 'sha' && get.color(i, player) == 'red') return true;
                                            }
                                            return false;
                                        }).length;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseTarget(get.prompt('zi_qiaoji'), '对一名角色造成1点伤害').set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.damageEffect(target, player, player);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            result.targets[0].damage();
                                        }
                                    },
                                },
                            },
                        },
                        //你距离1的角色弃牌阶段结束时,若其于本阶段弃置过牌,则你可以选择一项:1.获得这些牌;2.弃置其X张牌(X为其本回合使用过的牌数)
                        zi_xiezhong: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'phaseDiscardEnd' },
                            filter(event, player) {
                                if (get.distance(player, event.player) != 1) return false;
                                var cards = [];
                                event.player.getHistory('lose', function (evt) {
                                    if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) cards.addArray(evt.cards2);
                                });
                                return cards.length;
                            }, //QQQ
                            forced: true,
                            preHidden: true,
                            async content(event, trigger, player) {
                                //QQQ
                                const cards = [];
                                trigger.player.getHistory('lose', function (evt) {
                                    if (evt.type == 'discard' && evt.getParent('phaseDiscard') == trigger) cards.addArray(evt.cards2);
                                });
                                const num = trigger.player.getHistory('useCard').length;
                                var numx = trigger.player.countCards('he');
                                const { index } = await player
                                    .chooseControl(['选项一', '选项二', 'cancel2'])
                                    .set('choiceList', ['获得' + get.translation(cards), '弃置' + get.translation(trigger.player) + get.cnNumber(num) + '张牌'])
                                    .set('ai', function () {
                                        if (cards.length > 2) return 0;
                                        if (num > 0) if (num - numx <= 0) return 1;
                                        return [0, 1].randomGet();
                                    })
                                    .set('prompt', get.prompt2('zi_xiezhong'))
                                    .forResult();
                                switch (index) {
                                    case 0:
                                        player.gain(cards, 'gain2');
                                        break;
                                    case 1:
                                        player.discardPlayerCard(trigger.player, num, 'he', true);
                                        break;
                                    default:
                                        break;
                                }
                            },
                        },
                        zi_fuye: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            selectCard: [1, Infinity],
                            selectTarget() {
                                return ui.selected.cards.length;
                            },
                            filterTarget: true,
                            filterCard: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            position: 'he',
                            complexCard: true,
                            multitarget: true,
                            multiline: true,
                            content() {
                                game.asyncDraw(targets);
                                var bool = true;
                                for (var i of targets) {
                                    if (get.distance(player, i) <= 1) bool = false;
                                }
                                if (bool) player.recover();
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (get.distance(player, target) > 1) return 2;
                                        return 1;
                                    },
                                },
                            },
                        },
                        zi_yedao: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'phaseUseBegin' },
                            filter(event, player) {
                                return event.player != player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0; //QQQ
                            },
                            round: 1,
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var mode = get.mode(),
                                    bool = false;
                                if (
                                    mode == 'identity' &&
                                    game.countPlayer(function (current) {
                                        return current.identity == 'fan';
                                    }) >
                                    game.countPlayer(function (current) {
                                        return current.identity == 'zhu' || current.identity == 'zhong';
                                    })
                                )
                                    bool = true;
                                player[bool ? 'gainPlayerCard' : 'discardPlayerCard'](trigger.player, 'he', true);
                                ('step 1');
                                trigger.player
                                    .chooseControl()
                                    .set('choiceList', ['本回合攻击范围视为0', '本回合不因【杀】造成的伤害-1'])
                                    .set('ai', function () {
                                        return [0, 1].randomGet();
                                    });
                                ('step 2');
                                trigger.player.addTempSkill('zi_yedao_' + result.index);
                                game.log(trigger.player, '#g' + ['本回合攻击范围视为0', '本回合不因【杀】造成的伤害-1'][result.index]);
                            },
                            ai: { expose: 0.2 },
                            subSkill: {
                                0: {
                                    charlotte: true,
                                    mod: {
                                        attackRangeBase(player) {
                                            return 0;
                                        },
                                    },
                                },
                                1: {
                                    charlotte: true,
                                    trigger: { source: 'damageBegin1' },
                                    filter(event, player) {
                                        return event.card && event.card.name != 'sha';
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num--;
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player, target, current) {
                                                if (card.name != 'sha' && get.tag(card, 'damage')) {
                                                    return 'zeroplayertarget';
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        zi_fuqi: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            inherit: 'fuqi',
                        },
                        zi_jiaozi: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            inherit: 'jiaozi',
                        },
                        zi_zhangchuan: {
                            init(player) {
                                player.storage.zi_zhangchuan = [];
                            },
                            group: 'zi_zhangchuan_discard',
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'damageAfter' },
                            filter(event, player) {
                                return player.hp > 0 && event.player.isAlive();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            logTarget: 'player',
                            content() {
                                player.storage.zi_zhangchuan.push(trigger.player);
                                trigger.player.draw(player.hp).gaintag = ['zi_zhangchuan'];
                            },
                            subSkill: {
                                discard: {
                                    audio: 'zi_zhangchuan',
                                    trigger: { player: 'damageEnd' },
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.countCards('hs', function (card) {
                                                return card.hasGaintag('zi_zhangchuan');
                                            });
                                        });
                                    },
                                    forced: true,
                                    content() {
                                        for (var i of game.players) {
                                            if (
                                                i.countCards('hs', function (card) {
                                                    return card.hasGaintag('zi_zhangchuan');
                                                })
                                            )
                                                i.discard(
                                                    i.getCards('hs', function (card) {
                                                        return card.hasGaintag('zi_zhangchuan');
                                                    })
                                                );
                                        }
                                    },
                                },
                            },
                        },
                        _zi_zhangchuan: {
                            mod: {
                                cardname(card) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('zi_zhangchuan') && get.color(card) == 'red') return 'shan';
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('zi_zhangchuan') && get.color(card) == 'black') return 'sha';
                                },
                                cardnature(card) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('zi_zhangchuan')) return false;
                                },
                            },
                        },
                        zi_mouli: {
                            derivation: 'zi_douying',
                            audio: 'ext:星火燎原·紫/audio:2',
                            juexingji: true,
                            forced: true,
                            trigger: { global: 'dying' },
                            filter(event, player) {
                                return player.storage.zi_zhangchuan && player.storage.zi_zhangchuan.includes(event.player);
                            },
                            content() {
                                player.awakenSkill('zi_mouli');
                                trigger.player.recover();
                                player.recover();
                                player.addSkillLog('zi_douying');
                            },
                        },
                        zi_douying: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'phaseEnd' },
                            filter(event, player) {
                                return (
                                    player.countCards('he') &&
                                    game.hasPlayer(function (current) {
                                        return current.getHistory('damage').length;
                                    })
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard('he', true, lib.translate.zi_douying_info).set('ai', function (card) {
                                    if (card.name == 'sha' || card.name == 'shan') return 20 - get.value(card);
                                    return -get.value(card);
                                });
                                ('step 1');
                                if (result.cards && (result.cards[0].name == 'sha' || result.cards[0].name == 'shan')) {
                                    player.chooseTarget('对一名角色造成1点伤害', true).set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets[0]);
                                    result.targets[0].damage();
                                }
                            },
                        },
                        zi_xiaoguo: {
                            init(player) {
                                player.storage.zi_xiaoguo = false;
                            },
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player) {
                                    var list = ['基本牌', '装备牌'];
                                    if (storage) list.reverse();
                                    return '其他角色的结束阶段,你可弃置一张' + list[0] + ',令其交给你一张牌并展示之,若此牌不为' + list[1] + ',你可弃置之并对其造成2点伤害.';
                                },
                            },
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'phaseJieshuBegin' },
                            filter(event, player) {
                                if (event.player == player || !event.player.countCards('he')) return false;
                                var storage = player.storage.zi_xiaoguo,
                                    type = storage ? 'equip' : 'basic';
                                return player.countCards('he', { type: type }) || (player.countCards('he') && _status.connectMode);
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var storage = player.storage.zi_xiaoguo,
                                    type = storage ? 'equip' : 'basic';
                                var list = ['basic', 'equip'],
                                    transtype = ['基本牌', '装备牌'];
                                if (storage) {
                                    list.reverse();
                                    transtype.reverse();
                                }
                                player
                                    .chooseToDiscard('he', get.prompt('zi_xiaoguo', trigger.player), '弃置一张' + transtype[0] + ',令' + get.translation(trigger.player) + '交给你一张牌并展示之,若此牌不为' + transtype[1] + ',你可弃置之并对其造成2点伤害', function (card) {
                                        return get.type2(card) == type;
                                    })
                                    .set('ai', function (card) {
                                        if (!_status.event.goon) return 0;
                                        return 9 - get.value(card);
                                    })
                                    .set('goon', get.attitude(player, trigger.player) < 0);
                                ('step 1');
                                if (result.bool) {
                                    var num = player.storage.zi_xiaoguo ? 0 : 1;
                                    var transtype = ['基本牌', '装备牌'][num],
                                        type = ['basic', 'equip'][num];
                                    trigger.player.chooseCard('he', '将一张牌交给' + get.translation(player) + ',若此牌不为' + transtype + ',其可弃置此牌对你造成2点伤害', true).set('ai', function (card) {
                                        if (get.type2(card) == type) return 20 - get.value(card);
                                        return -get.value(card);
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    var num = player.storage.zi_xiaoguo ? 0 : 1;
                                    event.cards = result.cards;
                                    player.gain(result.cards, trigger.player, 'give');
                                    if (get.type2(result.cards[0]) != ['basic', 'equip'][num]) player.chooseBool('是否弃置' + get.translation(result.cards) + '并对' + get.translation(trigger.player) + '造成2点伤害？');
                                    else {
                                        player.changeZhuanhuanji('zi_xiaoguo');
                                        event.finish();
                                    }
                                } else event.finish();
                                ('step 3');
                                player.changeZhuanhuanji('zi_xiaoguo');
                                if (result.bool) {
                                    player.discard(event.cards);
                                    trigger.player.damage(2);
                                }
                            },
                        },
                        zi_baobian: {
                            group: 'zi_baobian_level',
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { source: 'damageSource', player: 'damageEnd' },
                            filter(event, player) {
                                return !player.hasSkill('zi_baobian_remove') && _status.currentPhase && _status.currentPhase.countCards('hej');
                            },
                            logTarget: () => _status.currentPhase,
                            check(event, player) {
                                return get.attitude(player, _status.currentPhase) <= 0;
                            },
                            content() {
                                'step 0';
                                trigger.zi_baobian = true;
                                var target = _status.currentPhase;
                                event.target = target;
                                var num = 0;
                                if (target.countCards('h')) num++;
                                if (target.countCards('e')) num++;
                                if (target.countCards('j')) num++;
                                if (num > 0) {
                                    player
                                        .choosePlayerCard(target, num, 'hej', true)
                                        .set('filterButton', function (button) {
                                            for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                                            }
                                            return true;
                                        })
                                        .set('prompt', '弃置' + get.translation(target) + '每个区域内的一张牌');
                                }
                                ('step 1');
                                if (result.bool) target.discard(result.links);
                                player.addSkill('zi_baobian_remove');
                            },
                            subSkill: {
                                level: {
                                    trigger: { source: 'damageSource', player: 'damageEnd' },
                                    filter(event, player) {
                                        if (event.zi_baobian) return false;
                                        if (!player.hasSkill('zi_baobian_remove')) return false;
                                        return (
                                            player.isDamaged() &&
                                            game.hasPlayer(function (current) {
                                                return current.countCards('hej');
                                            })
                                        );
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget([1, player.getDamagedHp()], get.prompt('zi_baobian'), '选择至多' + get.cnNumber(player.getDamagedHp()) + '名角色,弃置这些角色各个区域内的一张牌', function (card, player, target) {
                                                return target.countCards('hej');
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                var num = 0;
                                                if (target.countCards('h')) num++;
                                                if (target.countCards('e')) num++;
                                                if (target.countCards('j')) num++;
                                                return get.effect(target, { name: 'guohe_copy2' }, player, player) * num;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var targets = result.targets.sortBySeat();
                                            event.targets = targets;
                                            event.num = 0;
                                        } else event.finish();
                                        ('step 2');
                                        var target = targets[num];
                                        event.target = target;
                                        var numx = 0;
                                        if (target.countCards('h')) numx++;
                                        if (target.countCards('e')) numx++;
                                        if (target.countCards('j')) numx++;
                                        if (numx > 0) {
                                            player
                                                .choosePlayerCard(target, numx, 'hej', true)
                                                .set('filterButton', function (button) {
                                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                        if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                                                    }
                                                    return true;
                                                })
                                                .set('prompt', '弃置' + get.translation(target) + '每个区域内的一张牌');
                                        }
                                        ('step 3');
                                        if (result.bool) target.discard(result.links);
                                        if (event.num < event.targets.length - 1) {
                                            event.num++;
                                            event.goto(2);
                                        }
                                    },
                                },
                                remove: {
                                    charlotte: true,
                                    trigger: { global: 'dying' },
                                    firstDo: true,
                                    _priority: 1,
                                    forced: true,
                                    content() {
                                        player.removeSkill('zi_baobian_remove');
                                    },
                                },
                            },
                        },
                        zi_zhiyi: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: ['useCard', 'respond'] },
                            filter(event, player) {
                                return get.type(event.card) == 'basic';
                            },
                            filterx(event, player) {
                                if (event.zi_zhiyi_eff || !event.targets.length || player.hasSkill('zi_zhiyi_eff')) return false;
                                return true;
                            },
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseControl('选项一', '选项二', 'cancel2')
                                    .set('prompt', get.prompt2('zi_zhiyi'))
                                    .set('ai', function () {
                                        return '选项二';
                                    })
                                    .set('choiceList', ['摸一张牌,可以弃置一张牌令' + get.translation(trigger.card) + '额外结算一次', '本回合不能使用或打出手牌,并于当前回合结束时视为使用一张不为' + get.translation(trigger.card.name) + '的基本牌']);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    switch (result.control) {
                                        case '选项一':
                                            player.draw();
                                            if (lib.skill.zi_zhiyi.filterx(trigger, player))
                                                player.chooseToDiscard('he', '是否弃置一张牌并令' + get.translation(trigger.card) + '额外执行一次？').set('ai', function (card) {
                                                    return -1;
                                                });
                                            else event.finish();
                                            break;
                                        case '选项二':
                                            player.addTempSkill('zi_zhiyi_use');
                                            player.storage.zi_zhiyi_use = trigger.card.name;
                                            event.finish();
                                            break;
                                    }
                                } else {
                                    player.getStat('triggerSkill').zi_zhiyi--;
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.addTempSkill('zi_zhiyi_eff');
                                    trigger.zi_zhiyi_eff = player;
                                }
                            },
                            subSkill: {
                                use: {
                                    mod: {
                                        cardEnabled2(card) {
                                            if (get.position(card) == 'h') return false;
                                        },
                                    },
                                    mark: true,
                                    intro: { content: '不能使用或打出手牌' },
                                    charlotte: true,
                                    audio: 'zi_zhiyi',
                                    trigger: { global: 'phaseEnd' },
                                    filter(event, player) {
                                        for (var i of lib.inpile) {
                                            if (i == 'shan' || get.type(i) != 'basic' || i == player.storage.zi_zhiyi_use) continue;
                                            var card = { name: i };
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return player.canUse(card, current);
                                                })
                                            )
                                                return true;
                                            if (i == 'sha') {
                                                for (var j of lib.inpile_nature) {
                                                    if (
                                                        game.hasPlayer(function (current) {
                                                            return player.canUse({ name: i, nature: j }, current);
                                                        })
                                                    )
                                                        return true;
                                                }
                                            }
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var list = [];
                                        for (var i of lib.inpile) {
                                            if (i == 'shan' || get.type(i) != 'basic' || i == player.storage.zi_zhiyi_use) continue;
                                            var card = { name: i };
                                            if (
                                                !list.includes(i) &&
                                                game.hasPlayer(function (current) {
                                                    return player.canUse(card, current);
                                                })
                                            )
                                                list.push(['基本', '', i]);
                                            if (i == 'sha') {
                                                for (var j of lib.inpile_nature) list.push(['基本', '', i, j]);
                                            }
                                        }
                                        player.chooseButton(
                                            ['执义:选择要使用的牌', [list, 'vcard']],
                                            true,
                                            function (button) {
                                                return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                                            },
                                            function (button) {
                                                return _status.event.player.hasUseTarget({ name: button.link[2], nature: button.link[3] });
                                            }
                                        );
                                        ('step 1');
                                        player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, true);
                                    },
                                },
                                eff: {
                                    trigger: { global: 'useCardToTargeted' },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    lastDo: true,
                                    filter(event, player) {
                                        return event.parent.zi_zhiyi_eff == player && event.targets.length == event.parent.triggeredTargets4.length;
                                    },
                                    content() {
                                        trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
                                        trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
                                    },
                                },
                            },
                        },
                        zi_zhandao: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'useCard' },
                            filter(event, player) {
                                var bool1 = player.countCards('h', { type: 'basic' }) && lib.skill.zi_zhandao.filterx(event, player);
                                var bool2 = !_status.dying.length && player.countCards('he') >= event.player.countCards('h');
                                return event.player == _status.currentPhase && get.type(event.card) == 'basic' && (bool1 || bool2);
                            },
                            filterx(event, player) {
                                if (event.zi_zhandao_eff || !event.targets.length || player.hasSkill('zi_zhandao_eff')) return false;
                                return true;
                            },
                            usable: 1,
                            forced: true,
                            content() {
                                'step 0';
                                var choose = [];
                                var list = ['重铸一张基本牌并令' + get.translation(trigger.card) + '额外结算一次', '弃置' + get.cnNumber(trigger.player.countCards('h')) + '张牌并对' + get.translation(trigger.player) + '造成1点伤害'];
                                var att = get.attitude(player, trigger.player);
                                var bool1 = player.countCards('h', { type: 'basic' }) && lib.skill.zi_zhandao.filterx(trigger, player);
                                if (bool1) choose.push('选项一');
                                else list[0] = '<span style="opacity:0.5">' + list[0] + '</span>';
                                var bool2 = !_status.dying.length && player.countCards('he') >= trigger.player.countCards('h');
                                if (bool2) choose.push('选项二');
                                else list[1] = '<span style="opacity:0.5">' + list[1] + '</span>';
                                choose.push('cancel2');
                                player
                                    .chooseControl(choose)
                                    .set('prompt', get.prompt2('zi_zhandao'))
                                    .set('ai', function () {
                                        if (bool1 && att > 0) return '选项一';
                                        if (bool2 && att < 0) return '选项二';
                                        return 'cancel2';
                                    })
                                    .set('choiceList', list);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    switch (result.control) {
                                        case '选项一':
                                            player.chooseCard('he', true, '请重铸一张基本牌', function (card) {
                                                return get.type(card) == 'basic';
                                            });
                                            break;
                                        case '选项二':
                                            player.chooseToDiscard(trigger.player.countCards('h'), 'he', true);
                                            trigger.player.damage();
                                            event.finish();
                                            break;
                                    }
                                } else {
                                    player.getStat('triggerSkill').zi_zhandao--;
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.loseToDiscardpile(result.cards);
                                    player.draw();
                                    player.addTempSkill('zi_zhandao_eff');
                                    trigger.zi_zhandao_eff = trigger.player;
                                }
                            },
                            subSkill: {
                                eff: {
                                    trigger: { global: 'useCardToTargeted' },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    lastDo: true,
                                    filter(event, player) {
                                        return event.parent.zi_zhandao_eff == event.player && event.targets.length == event.parent.triggeredTargets4.length;
                                    },
                                    content() {
                                        trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
                                        trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
                                    },
                                },
                            },
                        },
                        zi_gongyong: {
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player) {
                                    return '出牌阶段限一次,你可以令所有角色依次展示一张手牌并交给其' + (storage ? '下家' : '上家') + ',若此牌为红色牌,你摸一张牌.';
                                },
                            },
                            audio: 'ext:星火燎原·紫/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            delay: 0,
                            content() {
                                'step 0';
                                player.line(game.players);
                                event.num = 0;
                                ('step 1');
                                var target = game.players[num];
                                event.target = target;
                                if (target.isDead() || !target.countCards('h')) event.goto(4);
                                else player.line(target);
                                ('step 2');
                                var att = get.attitude(target, player);
                                var gainner = player.storage.zi_gongyong ? target.next : target.previous;
                                target.chooseCard('h', true, '展示一张手牌并交给' + get.translation(gainner) + ',若此牌为红色,' + get.translation(player) + '摸一张牌').set('ai', function (card) {
                                    var num = 0;
                                    if (att > 0 && get.color(card) == 'red') num += 5;
                                    if (att < 0 && get.color(card) == 'black') num += 5;
                                    return num - get.value(card);
                                });
                                ('step 3');
                                if (result.bool) {
                                    var gainner = player.storage.zi_gongyong ? target.next : target.previous;
                                    gainner.gain(result.cards, target, 'give');
                                    if (get.color(result.cards[0]) == 'red') player.draw();
                                }
                                ('step 4');
                                if (event.num < game.players.length - 1) {
                                    event.num++;
                                    event.goto(1);
                                } else player.changeZhuanhuanji('zi_gongyong');
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zi_zuotang: {
                            group: 'zi_zuotang_recover',
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'gainEnd' },
                            filter(event, player) {
                                for (var i of event.cards) {
                                    if (get.type(i) == 'equip') return true;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var cards = trigger.cards;
                                player
                                    .chooseCard('he', [1, Infinity], function (card) {
                                        return cards.includes(card) && get.type(card) == 'equip';
                                    })
                                    .set('ai', function (card) {
                                        return 7.5 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var cards = result.cards;
                                    player.addToExpansion(cards, player, 'give').gaintag.add('zi_zuotang');
                                }
                            },
                            marktext: '塘',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            subSkill: {
                                recover: {
                                    trigger: { global: 'phaseEnd' },
                                    filter(event, player) {
                                        return (
                                            player.getExpansions('zi_zuotang').length >= player.hp &&
                                            game.hasPlayer(function (current) {
                                                return current.isDamaged();
                                            })
                                        );
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('zi_zuotang'), [1, player.getExpansions('zi_zuotang').length], '弃置至多' + get.cnNumber(player.getExpansions('zi_zuotang').length) + '张<塘>并令等量名角色各回复1点体力', function (card, player, target) {
                                                return target.isDamaged();
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.recoverEffect(target, target, player);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var targets = result.targets.sortBySeat();
                                            player.loseToDiscardpile(player.getExpansions('zi_zuotang'));
                                            for (var i of targets) i.recover();
                                        }
                                    },
                                },
                            },
                        },
                        zi_zhidao: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { global: 'damageAfter' },
                            filter(event, player) {
                                return event.source && event.source == player && event.player.isAlive() && event.player.countCards('hej') > 0 && !player.hasSkill('zi_zhidao2');
                            },
                            usable: 1,
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content() {
                                var num = 0;
                                if (trigger.player.countCards('h')) num++;
                                if (trigger.player.countCards('e')) num++;
                                if (trigger.player.countCards('j')) num++;
                                if (num > 0) {
                                    player.gainPlayerCard(trigger.player, num, 'hej', true).set('filterButton', function (button) {
                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                            if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                                        }
                                        return true;
                                    });
                                }
                                player.addTempSkill('zi_zhidao2');
                                player.storage.zi_zhidao2 = trigger.player;
                            },
                        },
                        zi_zhidao2: {
                            charlotte: true,
                            mod: {
                                playerEnabled(card, player, target) {
                                    if (target != player && target != player.storage.zi_zhidao2) return false;
                                },
                                globalFrom(from, to) {
                                    if (to == from.storage.zi_zhidao2) return -Infinity;
                                },
                                cardUsableTarget(card, player, target) {
                                    if ([player, player.storage.zi_zhidao2].includes(target)) return true;
                                },
                            },
                        },
                        zi_jili: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            inherit: 'jili',
                        },
                        zi_neifa: {
                            audio: 'ext:星火燎原·紫/audio:2',
                            trigger: { player: 'phaseUseBegin' },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.countCards('ej') > 0;
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                _status.noclearcountdown = true;
                                player
                                    .chooseTarget(get.prompt('zi_neifa'), '获得一名角色装备区或判定区内的一张牌', function (card, player, target) {
                                        return target.countCards('ej') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (
                                            att > 0 &&
                                            target.countCards('ej', function (card) {
                                                return get.position(card) == 'j' || get.value(card, target) <= 0;
                                            })
                                        )
                                            return 2 * att;
                                        else if (
                                            att < 0 &&
                                            target.countCards('e', function (card) {
                                                return get.value(card, target) > 5;
                                            })
                                        )
                                            return -att;
                                        return -1;
                                    });
                                ('step 1');
                                delete _status.noclearcountdown;
                                if (!_status.noclearcountdown) {
                                    game.stopCountChoose();
                                }
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.gainPlayerCard(target, 'ej', true);
                                } else event.finish();
                                ('step 2');
                                var num1 = Math.min(
                                    5,
                                    player.countCards('h', function (cardx) {
                                        return get.type(cardx, player) != 'basic';
                                    })
                                );
                                var num2 = Math.min(
                                    5,
                                    player.countCards('h', function (cardx) {
                                        return get.type(cardx, player) == 'basic';
                                    })
                                );
                                player
                                    .chooseControl()
                                    .set('choiceList', ['本回合只能使用基本牌,使用基本牌目标上限为2,使用【杀】次数+' + num1, '本回合只能使用非基本牌,使用锦囊牌目标上限为2,使用前两张装备牌时卜算' + num2 + '并摸两张牌'])
                                    .set('ai', function () {
                                        return player.countCards('hs', { type: ['trick', 'equip'] }) >= player.countCards('hs', { type: 'basic' }) ? 1 : 0;
                                    });
                                ('step 3');
                                var name = result.index == 0 ? 'zi_neifa_basic' : 'zi_neifa_nobasic';
                                player.addTempSkill(name);
                                var num = Math.min(
                                    5,
                                    player.countCards('h', function (cardx) {
                                        return (name == 'zi_neifa_basic') != (get.type(cardx, player) == 'basic');
                                    })
                                );
                                if (num > 0) player.addMark(name, num, false);
                            },
                        },
                        zi_neifa_basic: {
                            mark: true,
                            marktext: '伐',
                            intro: {
                                name: '内伐 - 基本牌',
                                content: '本回合内不能使用锦囊牌和装备牌,使用基本牌的目标上限为2,使用【杀】的次数上限+#.',
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (['trick', 'equip'].includes(get.type(card, 'trick'))) return false;
                                },
                                cardSavable(card, player) {
                                    if (['trick', 'equip'].includes(get.type(card, 'trick'))) return false;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') {
                                        return num + player.countMark('zi_neifa_basic');
                                    }
                                },
                                selectTarget(card, player, range) {
                                    if (get.type(card) == 'basic') range[1] = 2;
                                },
                            },
                        },
                        zi_neifa_nobasic: {
                            trigger: { player: 'useCard2' },
                            forced: true,
                            mark: true,
                            marktext: '伐',
                            mod: {
                                cardEnabled(card, player) {
                                    if (get.type(card) == 'basic') return false;
                                },
                                cardSavable(card, player) {
                                    if (get.type(card) == 'basic') return false;
                                },
                                selectTarget(card, player, range) {
                                    if (get.type(card) == 'trick') range[1] = 2;
                                },
                            },
                            intro: {
                                name: '内伐 - 非基本牌',
                                content: '本回合内不能使用基本牌,且使用普通锦囊牌的目标上限为2,且本回合的出牌阶段内前两次使用装备牌时占卜#并摸两张牌.',
                            },
                            audio: 'zi_neifa',
                            usable: 2,
                            trigger: { player: 'useCard' },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card) == 'equip';
                            },
                            content() {
                                if (player.hasMark('zi_neifa_nobasic')) player.chooseToGuanxing(player.countMark('zi_neifa_nobasic'));
                                player.draw(2);
                            },
                            ai: {
                                reverseOrder: true,
                                skillTagFilter(player) {
                                    if (player.getStat('triggerSkill').zi_neifa_use >= 2) return false;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if ((!player.getStat('triggerSkill').zi_neifa_use || player.getStat('triggerSkill').zi_neifa_use < 2) && player == target && get.type(card) == 'equip') return [1, 3];
                                    },
                                },
                            },
                        },
                    },
                    dynamicTranslate: {
                        zi_jianwei(player) {
                            if (player.storage.zi_jianwei) return '转换技,准备阶段,你可以选择一名角色,直到你的下个回合开始,阳:当其受到伤害时,你摸一张牌并将此伤害转移给自己;<span class="bluetext">阴:当其回复体力时,你弃置一张牌并将回复角色改为你</span>.';
                            return '转换技,准备阶段,你可以选择一名角色,直到你的下个回合开始,<span class="bluetext">阳:当其受到伤害时,你摸一张牌并将此伤害转移给自己</span>;阴:当其回复体力时,你弃置一张牌并将回复角色改为你.';
                        },
                        zi_poli(player) {
                            if (player.storage.zi_poli == true) return '转换技,出牌阶段限一次,你可以:阳,失去1点体力,弃置至多两张牌;<span class="bluetext">阴:回复1点体力,摸等同上次发动此技能弃牌数两倍的牌</span>.';
                            return '转换技,出牌阶段限一次,你可以:<span class="bluetext">阳,失去1点体力,弃置至多两张牌</span>;阴,回复1点体力,摸等同上次发动此技能弃牌数两倍的牌.';
                        },
                        zi_yedao(player) {
                            var mode = get.mode(),
                                bool = false;
                            if (
                                mode == 'identity' &&
                                game.countPlayer(function (current) {
                                    return current.identity == 'fan';
                                }) >
                                game.countPlayer(function (current) {
                                    return current.identity == 'zhu' || current.identity == 'zhong';
                                })
                            )
                                return '每轮限一次,其他角色的出牌阶段开始时,你可以获得其一张牌,其选择一项:1.本回合攻击范围为0;2.本回合不因【杀】造成的伤害-1.';
                            return '每轮限一次,其他角色的出牌阶段开始时,你可以弃置其一张牌,其选择一项:1.本回合攻击范围为0;2.本回合不因【杀】造成的伤害-1.';
                        },
                        zi_xiaoguo(player) {
                            var list = ['基本牌', '装备牌'];
                            if (player.storage.zi_xiaoguo) list.reverse();
                            return '其他角色的结束阶段,你可弃置一张' + list[0] + ',令其交给你一张牌并展示之,若此牌不为' + list[1] + ',你可弃置之并对其造成2点伤害.';
                        },
                        zi_baobian(player) {
                            if (player.hasSkill('zi_baobian_remove')) return '当你造成或受到伤害后,你可以弃置至多X名角色每个区域内的一张牌(X为你已损失的体力值).';
                            return '当你造成或受到伤害后,你可以弃置当前回合角色每个区域内的一张牌.若如此做,你将此技能描述中的<当前回合角色>改为<至多X名角色(X为你已损失的体力值)>直到有角色进入濒死状态.';
                        },
                        zi_gongyong(player) {
                            return '出牌阶段限一次,你可以令所有角色依次展示一张手牌并交给其' + (player.storage.zi_gongyong ? '下家' : '上家') + ',若此牌为红色牌,你摸一张牌.';
                        },
                    },
                    translate: {
                        zi_simafu: '司马孚',
                        zi_bukong: '布控',
                        zi_bukong_info: '锁定技,你使用【杀】和普通锦囊牌均具有<助战→目标+1>的效果.若你的手牌数为全场最多,其他角色响应你的助战时摸一张牌.',
                        zi_zhenchi: '镇持',
                        zi_zhenchi_info: '一名角色的回合结束时,你可以令任意名本回合受到过伤害的角色各摸一张牌.',
                        zi_caohong: '曹洪',
                        zi_yuanhu: '援护',
                        zi_yuanhu_info: '结束阶段,你可以将一张装备牌置入一名角色的装备区.若如此做,其选择一项,你选择另一项:①回复1点体力;②摸两张牌;③弃置距离1以内的一名角色区域内一张牌;④获得技能〖飞影〗直到你的下个回合开始.',
                        zi_xujing: '许靖',
                        zi_guming: '沽名',
                        zi_guming_info: '当你使用基本牌或普通锦囊牌指定目标后,或成为目标数大于1的牌的目标后,你可以令此牌对一个目标无效.',
                        zi_jushi: '举仕',
                        zi_jushi_info: '出牌阶段限X次,你可以令一名角色摸两张牌,其选择一项:①使用一张非基本牌;②令你弃置X张牌.(X为你本轮发动〖沽名〗的次数,且X至多为5)',
                        zi_laimin: '来敏',
                        zi_jingdian: '精典',
                        zi_jingdian_info: '出牌阶段限一次,你可以展示牌堆顶的X张牌(X为全场势力数),你选择其中一张牌与一名其他角色进行拼点.若你赢,你可重复此流程;若你没赢,你获得剩余展示的牌.',
                        zi_kuangyan: '狂言',
                        zi_kuangyan2: '狂言',
                        zi_kuangyan_info: '锁定技,当你拼点结束后,你令没赢的角色本回合不能使用或打出与你此次拼点牌花色相同的牌.',
                        zi_dingfeng: '丁奉',
                        zi_fenxun: '奋迅',
                        zi_fenxun2: '奋迅',
                        zi_fenxun3: '奋迅',
                        zi_fenxun4: '奋迅',
                        zi_fenxun_info: '出牌阶段,你可以弃置一张牌并选择一名其他角色,其本回合使用或打出的下一张牌作废且你与其计算距离为1.',
                        zi_duanbing: '短兵',
                        zi_duanbing_info: '当你使用【杀】指定唯一目标时,你可以选择一项:①为此【杀】增加任意名距离为X的目标(X为你与此唯一目标的距离);②令此【杀】额外结算一次.',
                        zi_lukai: '陆凯',
                        zi_leijian: '累谏',
                        zi_leijian_info: '当牌因弃置置入弃牌堆后,你可以将其中一张牌置入仁库.',
                        zi_xunxuan: '驯玄',
                        zi_xunxuan_info: '每轮限一次,一名角色的准备阶段,若仁库中的红色牌和黑色牌的数目不同,你可以令其本回合获得如下效果:①若你发动〖驯玄〗时仁库中的红色牌大于黑色牌,其使用红色牌时摸一张牌,其发动X次摸牌效果后此效果失效,且你重置〖驯玄〗(X为你发动〖驯玄〗时仁库中的红色牌数量);②若你发动〖驯玄〗时仁库中的黑色牌大于红色牌,其使用黑色牌造成的伤害-1,其发动Y次减伤效果后此效果失效,且你重置〖驯玄〗(Y为你发动〖驯玄〗时仁库中的黑色牌数量).',
                        zi_jiane: '謇谔',
                        zi_jiane_info: '出牌阶段限一次,你可以将仁库中任意类别不同的各一张牌分配给任意角色.',
                        zi_fuwan: '伏完',
                        zi_moukui: '谋溃',
                        zi_moukui_info: '当你使用【杀】或伤害类锦囊牌指定目标后,你可以选择其中一个目标并选择一项:①摸一张牌;②弃置该角色的一张牌;③背水:若该角色未因此牌造成的伤害而进入过濒死状态,则该角色弃置你的一张牌.',
                        zi_liuqi: '刘琦',
                        zi_wenji: '问计',
                        zi_wenji_info: '出牌阶段开始时,你可以令一名其他角色交给你一张牌.你于本回合内使用与该牌名称相同的牌时不能被其他角色响应.',
                        zi_tunjiang: '屯江',
                        zi_tunjiang_info: '结束阶段,若你于本回合执行的出牌阶段中未造成过伤害,则你可以选择一名角色,你与其共计摸X张牌(X为场上势力数).',
                        zi_jikang: '嵇康',
                        zi_qingxian: '清弦',
                        zi_qingxian_info: '当你受到伤害或回复体力后,若场上没有角色处于濒死状态,你可以令一名角色失去或回复1点体力.若你与其体力值相同,你可与其各摸一张牌,以此法摸到♣️️牌的角色再摸一张牌.',
                        zi_juexiang: '绝响',
                        zi_juexiang_info: '当你死亡时,你可令一名角色获得技能〖清弦·残谱〗,且直到其下回合开始前,其不能成为♣️️牌的目标.',
                        zi_qingxian_list: '清弦·残谱',
                        zi_qingxian_list_info: '当你受到伤害或回复体力后,若场上没有角色处于濒死状态,你可以令一名角色失去或回复1点体力.若你与其体力值相同,你可与其各摸一张牌,以此法摸到♣️️牌的角色再摸一张牌.当你发动〖清弦·残谱〗后,你须删除〖清弦·残谱〗的一个发动时机或选项.',
                        zi_ruanji: '阮籍',
                        zi_fangyi: '放逸',
                        zi_fangyi_info: '每回合限一次,你可以展示所有手牌,视为使用一张【酒】.当前回合结束时,若你本回合造成或受到过大于1点的伤害,你可以从牌堆中检索一张牌,并将此牌交给一名角色.',
                        zi_tuqiong: '途穷',
                        zi_tuqiong2: '途穷',
                        zi_tuqiong_info: '觉醒技,当你失去最后的手牌后,你摸两张牌并回复1点体力,当你于本局游戏中失去最后的♣️️手牌后,你摸一张牌.',
                        zi_maliang: '马良',
                        zi_qinshu: '勤书',
                        zi_qinshu_info: '锁定技,当你不因〖勤书〗获得牌后,你摸一张牌.若你的手牌中包含了所有花色,你弃置一张牌.当你第一次因〖勤书〗弃牌后,你视为本回合未发动过〖应援〗.',
                        zi_yingyuan: '应援',
                        zi_yingyuan_info: '你的回合内每种类型的牌限一次,当你使用牌后,你可以令一名其他角色获得此牌(若此牌未处于弃牌堆中,则改为令其从牌堆中获得一张与此牌类型相同的牌).',
                        zi_xianglang: '向朗',
                        zi_cangjuan: '藏卷',
                        zi_cangjuan_info: '锁定技,游戏开始时,你将牌堆中三张不同牌名的普通锦囊牌置于武将牌上,称为<典>;锦囊牌不计入你的手牌上限.',
                        zi_yandian: '研典',
                        zi_yandian_info: '结束阶段,你可以将至多两张基本牌或普通锦囊牌置于武将牌上,称为<典>,你摸两张牌.',
                        zi_shouxue: '授学',
                        zi_shouxue2: '授学',
                        zi_shouxue2_backup: '授学',
                        zi_shouxue_info: '一名角色的回合开始时,你可选择一名角色.若如此做,该角色本回合可以将一张与你的其中一张<典>类别相同的牌当作此<典>使用(限一次),且当前回合结束时,你移去一张<典>.',
                        zi_kanze: '阚泽',
                        zi_xiashu: '下书',
                        zi_xiashu_info: '出牌阶段开始时,你可以将任意张手牌交给一名其他角色,该角色亮出任意数量的手牌(至少一张).你选择一项:1.获得其亮出的手牌;2.获得其未亮出的手牌(若你未将所有手牌交出,则你从你选择获取的牌中选择X张获得,X为你本次交出的牌数).',
                        zi_kuanshi: '宽释',
                        zi_kuanshi_info: '结束阶段,你可以选择一名角色.你获得如下一次性效果直到你下回合开始:当其于一回合内受到第2点伤害时,其回复1点体力.',
                        zi_weiyao: '韦曜',
                        zi_guozhu: '国注',
                        zi_guozhu2: '国注',
                        zi_guozhu3: '国注',
                        zi_guozhu_info: '当场上的一张牌结算完毕后,若你为过此牌的目标且此牌未对你造成过伤害,你记录此牌牌名.一名角色的出牌阶段限一次,若其手牌数与你相同,其可以交给你一张牌(若该角色为你则跳过此步骤),其选择一个你因〖国注〗记录的牌名,从牌堆中获得一张与选择的记录相同牌名的牌(若此纪录为装备牌则改为获得一张与选择的记录相同副类别的牌).',
                        zi_bianshi: '辨释',
                        zi_bianshi_info: '结束阶段,你可以选择一种牌名,加入〖国注〗记录或从〖国注〗记录中移除.',
                        zi_boyi: '博弈',
                        zi_boyi_info: '每回合限一次,当你成为其他角色使用牌的目标后,你可以令其弃置两张牌,若其使用的不是本回合获得的牌,本回合其对你造成伤害+1.',
                        zi_mamidi: '马日磾',
                        zi_bingmao: '秉髦',
                        zi_bingmao_targets: '秉髦',
                        zi_bingmao_info: '出牌阶段限一次,你可以令一名未成为过你发动〖秉髦〗的目标的其他角色将一张手牌交给你,你可以将一张牌交给另一名其他角色.若如此做,直到你的下个回合开始,这些角色使用的牌对你无效.',
                        zi_xuzhuan: '续传',
                        zi_xuzhuan_info: '一名角色的回合结束时,你可以令其使用本回合因弃置而置入弃牌堆的一张牌.',
                        zi_zhengxuan: '郑玄',
                        zi_xidian: '悉典',
                        zi_xidian_info: '每回合限一次,当你需要使用基本牌/普通锦囊牌时,你可将弃牌堆内的四张/两张与此牌牌名相同的置于牌堆底,视为使用此牌.',
                        zi_bianzhu: '辨注',
                        zi_bianzhu_info: '其他角色的回合结束时,你可以选择一项:①使用一张本回合其未使用过的类型的牌;②从牌堆中获得一张其本回合未使用过的类型的牌,此技能失效直至你的下个回合开始.',
                        zi_sunziliufang: '孙资刘放',
                        zi_guizao: '瑰藻',
                        zi_guizao_info: '弃牌阶段结束时,若你弃置的牌的花色均不同,你可以将手牌数补至全场最多(至多摸5张),或回复1点体力并摸一张牌.',
                        zi_jiyu: '讥谀',
                        zi_jiyu_info: '出牌阶段限一次,你可以令一名角色弃置一张手牌.若如此做,你不能使用与之相同花色的牌,直到回合结束.若其以此法弃置的牌为♠️️,你翻面,且你可以令其失去1点体力.若你有未被〖讥谀〗限制的手牌,则你可以继续发动此技能,但不能选择本回合已经选择过的目标.',
                        zi_jiaxu: '贾诩',
                        zi_zhenlve: '缜略',
                        zi_zhenlve_info: '每轮限一次,你可以废除判定区或一个装备栏,视为使用一张不可被响应的【无懈可击】.',
                        zi_jianshu: '间书',
                        zi_jianshu_info: '出牌阶段限一次,你可以将一张黑色手牌交给一名其他角色,并令其与你选择的另一名其他角色拼点.没赢的角色弃置两张牌或失去1点体力.',
                        zi_yongdi: '拥嫡',
                        zi_yongdi_info: '限定技,准备阶段,你可令一名其他角色增加1点体力上限并回复1点体力,若该角色不为主公:若其武将牌上有主公技,其获得此主公技,否则其选择获得一个所有与其势力相同且拥有主公技的武将牌上的技能.场上所有角色依次选择是否更换势力与其相同.',
                        zi_huanghao: '黄皓',
                        zi_qinqing: '寝情',
                        zi_qinqing_info: '结束阶段,你可以选择一名角色,你依次弃置所有攻击范围含有该角色的所有角色的各一张牌并令其摸一张牌(无牌则不弃),若如此做,你摸X张牌(X为其中手牌比该角色多的角色数)',
                        zi_huisheng: '贿生',
                        zi_huisheng_info: '当你受到其他角色对你造成的伤害时,你可以令其观看你任意数量的牌并令其选择一项:1.获得这些牌中的一张并防止此伤害,本回合你不能发动〖贿生〗;2.弃置等量的牌.',
                        zi_yangyi: '杨仪',
                        zi_juanxia: '狷狭',
                        zi_juanxia_info: '结束阶段,你可以选择一名其他角色,并依次视为对其使用至多两种单目标普通锦囊牌.其下回合结束时,可视为对你使用等量的【杀】.',
                        zi_dingcuo: '定措',
                        zi_dingcuo_info: '每回合限一次,当你受到或造成伤害后,你可以摸两张牌.若这两张牌颜色不同,则你弃置一张手牌,且防止本回合你受到的与你弃置的牌颜色相同的牌造成的伤害.',
                        zi_cenhun: '岑昏',
                        zi_jishe: '极奢',
                        zi_jishe_info: '出牌阶段每名角色各限一次,若你的手牌上限大于0,你可以摸一张牌并横置一名未被横置的角色,其可令你本回合手牌上限-1.',
                        zi_lianhuo: '链祸',
                        zi_sunjunsunchen: '孙峻孙綝',
                        zi_jianwei: '监卫',
                        zi_jianwei_info: '转换技,准备阶段,你可以选择一名角色,直到你的下个回合开始,阳:当其受到伤害时,你摸一张牌并将此伤害转移给自己;阴:当其回复体力时,你弃置一张牌并将回复角色改为你.',
                        zi_xiongyi: '凶溢',
                        zi_xiongyi_info: '限定技,当你进入濒死状态时,你可以将体力值回复至1点.若如此做,你于当前回合结束时视为使用一张【万箭齐发】,你以此法造成伤害时回复1点体力(若你的体力值已满,则改为摸两张牌).',
                        zi_zhangrang: '张让',
                        zi_taoluan: '滔乱',
                        zi_taoluan4: '滔乱',
                        zi_taoluan5: '滔乱',
                        zi_taoluan_backup: '滔乱',
                        zi_taoluan_info: '每轮限X次(X为场上的存活身份数),你可以将一张牌当做任意一张基本牌或普通锦囊牌使用,你令一名其他角色选择一项:1.交给你一张与你以此法使用的牌类别不同的牌,你不能因〖滔乱〗使用或打出此种牌名;2.令〖滔乱〗于本回合失效,你于回合结束时失去1点体力.',
                        zi_beimihu: '卑弥呼',
                        zi_zongkui: '纵傀',
                        zi_zongkui_info: '新的一轮开始时/准备阶段/当你受到伤害后,你可以指定一名未拥有<傀>标记且体力值不为全场唯一最大的其他角色,令其获得一枚<傀>标记.',
                        zi_guju: '骨疽',
                        zi_guju_info: '锁定技,拥有<傀>标记的角色受到伤害后,你摸一张牌.若该角色的势力和主公相同,其可以令你额外摸一张牌.',
                        zi_baijia: '拜假',
                        zi_baijia_info: '觉醒技,准备阶段,若你因〖骨疽〗获得的牌不少于7张,则你增加1点体力上限,回复1点体力,令所有未拥有<傀>标记的其他角色获得<傀>标记,最后失去技能〖骨疽〗并获得技能〖蚕食〗.',
                        zi_canshi: '蚕食',
                        zi_canshi_info: '一名角色使用基本牌或普通锦囊牌指定你为唯一目标时,若其有<傀>标记,你可以取消之,其失去<傀>标记;你使用牌仅指定一名角色为目标时,你可以额外指定任意名带有<傀>标记的角色为目标(无距离限制),这些角色失去<傀>标记.',
                        zi_xinxianying: '辛宪英',
                        zi_zhidui: '智对',
                        zi_zhidui_backup: '智对',
                        zi_zhidui_info: '出牌阶段限一次,你可以声明一种花色和一个点数,展示一名其他角色的X张手牌(X为该角色的体力值).其中每有一张牌与你声明的:花色相同,你摸一张牌或弃置一名其他角色的一张牌;点数相同:本回合〖智对〗修改为<出牌阶段限两次>.',
                        zi_caishi: '才识',
                        zi_caishi2: '才识',
                        zi_caishi3: '才识',
                        zi_caishi_info: '摸牌阶段结束时,若你于本阶段内因摸牌而获得的所有的牌:花色均相同,你可回复1点体力,若如此做,你本回合内不能对自己使用牌.不均相同,你可令你的手牌上限+1.',
                        zi_luzhi: '鲁芝',
                        zi_qingzhong: '清忠',
                        zi_qingzhong_info: '出牌阶段开始时,你可以摸两张牌,若如此做,此阶段结束时,你与手牌数最少的角色交换手牌.',
                        zi_weijing: '卫境',
                        zi_weijing_info: '每轮限一次,当你需要使用【杀】或【闪】时,你可以视为使用一张【杀】或【闪】.',
                        zi_huojun: '霍骏',
                        zi_guzhu: '孤伫',
                        zi_guzhu_info: '一名角色的出牌阶段结束时,你可以令该角色摸X张牌或弃置Y张牌(X为你本回合获得牌的次数,Y为你本回合失去牌的次数).',
                        zi_yangwan: '杨婉',
                        zi_zhenwan: '贞婉',
                        zi_zhenwan_info: '每回合限一次,当你使用牌指定其他角色为目标时,或你成为其他角色使用牌的目标时,你可以选择该角色的至多两张牌并选择X张手牌交换这些牌(X为你的手牌数与你选择的牌数的最小值),你本回合造成或受到的伤害均视为失去体力.',
                        zi_fuyi: '扶异',
                        zi_fuyi_info: '当一名角色失去体力后,若当前回合角色为你,你可以令其摸一张牌;若当前回合角色不为你,你可以令其弃置一张牌.',
                        zi_sunluyu: '孙鲁育',
                        zi_meibu: '止息',
                        zi_meibu_info: '其他角色的出牌阶段开始时,若你在其攻击范围内,你可以弃置一张牌,令其本阶段至多使用X张牌(X为其体力值),其使用锦囊牌结算完成后结束此阶段且你获得其一张牌.',
                        zi_mumu: '穆穆',
                        zi_mumu_info: '出牌阶段开始时,你可以获得场上的一张牌,弃置一张牌,若你弃置的牌不为装备牌,你本回合不能使用【杀】.',
                        zi_zhangti: '张悌',
                        zi_fujiang: '覆江',
                        zi_fujiang_info: '准备阶段,你可以与一名手牌数不大于你的角色交换手牌,其选择一项:①你摸两张牌;②视为对你使用一张【决斗】.',
                        zi_shuxun: '述殉',
                        zi_shuxun_info: '当你受到伤害后,你可以令一名其他角色回复1点体力并摸两张牌.若你的体力值为1,则你可以令此次回复值和摸牌数翻倍,你死亡.',
                        zi_dongbai: '董白',
                        zi_lianzhu: '连诛',
                        zi_lianzhu_info: '出牌阶段限,你可以展示并交给一名本阶段未选择过的其他角色一张牌,若此牌为黑色,其选择一项:1.弃置两张牌;2.你摸X+1张牌并令〖连诛〗于本回合失效(X为场上拥有<弄>的角色数).',
                        zi_xiehui: '黠慧',
                        zi_xiehui2: '黠慧',
                        zi_xiehui_info: '锁定技,你的黑色牌不计入手牌上限;其他角色获得你的黑色牌时,其将这些牌置于武将牌上,称为<弄>.其受到伤害后获得这些牌,若这些牌的数量大于一张,其失去1点体力.',
                        zi_liuyu: '刘虞',
                        zi_lyweicheng: '维城',
                        zi_lyweicheng_info: '每回合限一次,你使用牌结算完成后,你可以选择一个势力,你摸等同于场上该势力角色数的牌,且你本回合使用牌无法指定该势力的角色为目标.',
                        zi_lide: '励德',
                        zi_lide_info: '弃牌阶段结束时,你可以选择任意张本阶段进入弃牌堆的牌并交给一名你计算与其的距离为X的其他角色(X为牌数),你可以对不同的其他角色重复此步骤.',
                        zi_yangfu: '杨阜',
                        zi_nantui: '难退',
                        zi_nantui_info: '当你使用【杀】指定目标或成为【杀】的目标时,你可以令【杀】对目标无效,使用者视为对目标角色使用一张【决斗】.',
                        zi_yifu: '义负',
                        zi_yifu_info: '当你受到伤害后,你可以选择一名来源以外的角色,交给其至多两张牌,令其选择一项:1.你将手牌摸至体力上限;2.将这些牌当任意一种【杀】或【决斗】对来源使用.背水:本回合你与其受到的伤害+1.',
                        zi_jianggan: '蒋干',
                        zi_weicheng: '伪诚',
                        zi_weicheng_info: '其他角色获得你的牌后,你可获得一张本回合未以此法选择过的智囊或【知己知彼】.',
                        zi_daoshu: '盗书',
                        zi_qiaozhou: '谯周',
                        zi_xuejiu: '学究',
                        zi_xuejiu_info: '使命技.当你使用非锦囊牌后,你卜算X(X为你本回合发动〖学究〗的次数且X至多为3),你可获得其中的一张锦囊牌,你的锦囊牌不计入手牌上限.成功:游戏开始时,或你获得牌后,若你的手牌中含有所有智囊牌的牌名的牌,你修改〖学究〗为非使命技并修改其中X的数值恒为3.失败:当你失去锦囊牌后,若你的手牌中没有锦囊牌,则你使命失败.',
                        zi_xuejiux: '学究',
                        zi_xuejiux_info: '当你使用非锦囊牌后,你卜算3,你可获得其中的一张锦囊牌,你的锦囊牌不计入手牌上限.',
                        zi_xingbu: '星卜',
                        zi_xingbu_info: '结束阶段,你可以选择一名其他角色,你亮出牌堆顶的三张牌,若其中红色牌多于黑色牌,其下回合使用【杀】的次数上限+1;若其中黑色牌多于红色牌,其下回合第一次造成的伤害-1.',
                        zi_xf_yiji: '伊籍',
                        zi_huaxian: '化险',
                        zi_huaxian_info: '每回合限一次,当一名角色失去手牌后,若其手牌数为1,你可对其声明一种智囊或【金蝉脱壳】,令该手牌视为你声明的牌.',
                        zi_dingli: '鼎力',
                        zi_dingli_info: '每轮限一次,一名角色的摸牌阶段结束时,你可以令任意名角色依次选择是否弃置一张牌,令其摸一张牌.若这些角色均选择是,你摸一张牌.',
                        zi_zhaozi: '赵咨',
                        zi_poli: '破立',
                        zi_poli_info: '转换技,出牌阶段限一次,你可以:阳,失去1点体力,弃置至多两张牌;阴:回复1点体力,摸等同上次发动此技能弃牌数两倍的牌.',
                        zi_weidui: '威对',
                        zi_weidui_info: '每轮各限一次,当一名角色一次性失去/获得不小于体力值的牌时,若没有角色濒死,你可以令其回复/失去1点体力,若当前回合角色不是你,你可以于当前回合结束时发动一次〖破立〗.',
                        zi_zhangwen: '张温',
                        zi_heguo: '和国',
                        zi_heguo_info: '使命技.出牌阶段限两次,你可以与一名其他角色拼点,没赢的角色摸两张牌.成功:所有角色因〖和国〗累计摸牌的数量达到角色数时,你加1点体力上限并回复体力至上限,将〖和国〗改为非使命技,且将〖和国〗描述中的<出牌阶段限两次>修改为<出牌阶段限一次>.失败:你连续三次拼点没赢后,使命失败.',
                        zi_heguox: '和国',
                        zi_heguox_info: '出牌阶段限一次,你可以与一名其他角色拼点,没赢的角色摸两张牌.',
                        zi_tiannan: '天难',
                        zi_tiannan_info: '你可以使用装备区的牌进行拼点;当你拼点的牌亮出后,若此牌为♠️️,你可以为此牌减少任意点数.',
                        zi_mayuanyi: '马元义',
                        zi_heluan: '合乱',
                        zi_heluan_info: '使命技,你使用属性【杀】无距离次数限制.使命:出牌阶段开始时,你可以令X名其他角色依次选择是否交给你一张牌(X为场上的黑色牌数且X至多为场上的其他角色数).成功:若你发动〖合乱〗后,以此法获得的黑色牌多于红色牌,你摸等同获得牌数的牌,并选择一名角色,令其获得技能〖合乱〗(若该角色已发动过〖合乱〗则改为令其重置〖合乱〗).失败:若你发动〖合乱〗后,以此法获得的黑色牌不多于红色牌,你失去1点体力,且本局游戏使用【杀】时,可令所有未交给你黑色牌的角色成为此牌的额外目标.',
                        zi_yanpu: '阎圃',
                        zi_fumou: '辅谋',
                        zi_fumou_info: '每轮限一次,一名角色的回合结束时,若本回合有智囊进入弃牌堆,你可以依次视为使用至多三种智囊或【隔岸观火】(你不能于此次〖辅谋〗的结算中使用这些牌已经指定过的目标).',
                        zi_birui: '避锐',
                        zi_birui_info: '当你受到伤害后,你可以选择一项:①摸一张牌,选择一种普通锦囊牌名,加入本局的智囊;②若你本轮发动过〖辅谋〗,你视为本轮未发动过〖辅谋〗.',
                        zi_litong: '李通',
                        zi_tuifeng: '推锋',
                        zi_tuifeng_info: '每回合限一次,当你造成或受到伤害后,你可以弃置一张牌.若如此做,你于此回合结束时摸两张牌,你可使用一张【杀】,若此【杀】造成伤害,你移动场上的一张牌.',
                        zi_wangshuang: '王双',
                        zi_zhuilie: '追猎',
                        zi_zhuilie_info: '锁定技,你使用【杀】无距离限制;当你使用【杀】指定目标后,若其不在你的攻击范围内,此【杀】不计入使用次数限制且你判定.若判定结果为:装备牌,此【杀】的伤害基数改为X(X为其体力值);基本牌,你失去1点体力.',
                        zi_fuqian: '傅佥',
                        zi_danyong: '胆勇',
                        zi_danyong_info: '结束阶段,你可以失去任意点体力(至少为1,至多为你的体力值).若如此做,你的下个回合开始时,你回复X点体力并可以弃置至多X名角色的各一张牌(X为你本次以此法失去的体力值).',
                        zi_wuban: '吴班',
                        zi_xiahao: '侠豪',
                        zi_xiahao_info: '每轮限一次,有手牌的角色回合开始时,你可令其本回合手牌上限改为其当前手牌数,弃牌阶段结束时,若其本阶段未弃置手牌,你可对其造成1点伤害.主公受到伤害后,此技能视为未发动过.',
                        zi_sunyi: '孙翊',
                        zi_qiaoji: '峭急',
                        zi_qiaoji_info: '每回合限三次,当你摸牌时,你可改为摸三倍的牌,将手牌弃置至三张.一名角色的回合结束时,若你本回合失去过红色【杀】,你可对一名角色造成1点伤害.',
                        zi_wujing: '吴景',
                        zi_xiezhong: '挟众',
                        zi_xiezhong_info: '你距离1的角色弃牌阶段结束时,若其于本阶段弃置过牌,则你可以选择一项:1.获得这些牌;2.弃置其X张牌(X为其本回合使用过的牌数).',
                        zi_fuye: '扶业',
                        zi_fuye_info: '出牌阶段限一次,你可以弃置任意张牌并令等量的角色各摸一张牌.若这些角色均不为你距离1以内的角色,你回复1点体力.',
                        zi_hucheer: '胡车儿',
                        zi_yedao: '夜盗',
                        zi_yedao_info_identity: '每轮限一次,其他角色的出牌阶段开始时,你可以弃置(若反贼数多于主忠数,则改为获得)其一张牌,其选择一项:1.本回合攻击范围视为0;2.本回合不因【杀】造成的伤害-1.',
                        zi_yedao_info: '每轮限一次,其他角色的出牌阶段开始时,你可以弃置其一张牌,其选择一项:1.本回合攻击范围为0;2.本回合不因【杀】造成的伤害-1.',
                        zi_quyi: '麴义',
                        zi_fuqi: '伏骑',
                        zi_jiaozi: '骄姿',
                        zi_wangling: '王凌',
                        zi_zhangchuan: '障川',
                        zi_zhangchuan_info: '当一名角色受到伤害后,你可以令其摸X张牌(X为你的体力值),其中黑色牌视为【杀】,红色牌视为【闪】;当你受到伤害时,所有角色弃置其因〖障川〗获得的牌.',
                        zi_mouli: '谋立',
                        zi_mouli_info: '觉醒技,当一名角色进入濒死状态时,若其成为过〖障川〗目标,你与其各回复1点体力,你获得技能〖斗萤〗.',
                        zi_douying: '斗萤',
                        zi_douying_info: '锁定技,有角色受到过伤害的回合结束时,你弃置一张牌,若此牌为【杀】或【闪】,你对一名角色造成1点伤害.',
                        zi_yuejin: '乐进',
                        zi_xiaoguo: '骁果',
                        zi_xiaoguo_info: '转换技,其他角色的结束阶段,你可弃置一张:阳,基本牌;阴,装备牌,令其交给你一张牌并展示之,若此牌不为:阳,装备牌;阴,基本牌,你可弃置之并对其造成2点伤害.',
                        zi_xiahouba: '夏侯霸',
                        zi_baobian: '豹变',
                        zi_baobian_info: '当你造成或受到伤害后,你可以弃置当前回合角色每个区域内的一张牌.若如此做,你将此技能描述中的<当前回合角色>改为<至多X名角色(X为你已损失的体力值)>直到有角色进入濒死状态.',
                        zi_zhangyì: '张翼',
                        zi_zhiyi: '执义',
                        zi_zhiyi_info: '每回合限一次,当你使用或打出基本牌时,你可选择一项:1.摸一张牌,你可弃置一张手牌并令此牌额外结算一次;2.令你本回合不能再使用或打出手牌,并于当前回合结束时视为使用一张不为此牌牌名的基本牌.',
                        zi_sunhuan: '孙桓',
                        zi_zhandao: '斩道',
                        zi_zhandao_info: '每回合限一次,当前回合的角色使用基本牌时,你可以选择一项:1.重铸一张基本牌并令此牌额外结算一次;2.若场上没有角色处于濒死状态,则你可以弃置等于其手牌数的牌并对其造成1点伤害.',
                        zi_puyangxing: '濮阳兴',
                        zi_gongyong: '功佣',
                        zi_gongyong_info: '出牌阶段限一次,你可以令所有角色依次展示一张手牌并交给其:阳,上家;阴,下家,若此牌为红色牌,你摸一张牌.',
                        zi_zuotang: '作塘',
                        zi_zuotang_info: '当你获得装备牌时,你可将此牌置于武将牌上,称为<塘>.一名角色的回合结束时,若<塘>数大于等于你的体力值,你可移去所有<塘>并令至多等量的角色各回复1点体力.',
                        zi_yanbaihu: '严白虎',
                        zi_zhidao: '雉盗',
                        zi_zhidao_info: '每回合限一次,当你造成伤害后,你可获得受伤角色每个区域的一张牌,你本回合只能对你和该角色使用牌(无距离和次数限制).',
                        zi_jili: '寄篱',
                        zi_yuantanyuanshang: '袁谭袁尚',
                        zi_neifa: '内伐',
                        zi_neifa_info: '出牌阶段开始时,你可获得场上的一张牌并选择一项:1.本回合只能使用基本牌,使用基本牌目标上限为2,使用【杀】次数+X;2.本回合只能使用非基本牌,使用锦囊牌目标上限为2,前两次使用装备牌时卜算X并摸两张牌(X为你因此不能使用的牌数,至多为5).',
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].push(`ext:星火燎原·紫/image/${i}.jpg`);
                    info[4].push(`die:ext:星火燎原·紫/audio/${i}.mp3`);
                }
                lib.config.all.characters.add('星火燎原·紫');
                lib.config.characters.add('星火燎原·紫');
                lib.translate['星火燎原·紫_character_config'] = `星火燎原·紫`;
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
                }; //true转为1,false转为-1
                window.numberq0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.abs(Number(num));
                }; //始终返回正数(取绝对值)
                window.numberq1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Math.abs(Number(num)), 1);
                }; //始终返回正数且至少为1(取绝对值)
                window.number0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.max(Number(num), 0);
                }; //始终返回正数
                window.number1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Number(num), 1);
                }; //始终返回正数且至少为1
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
            game.import('card', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '星火燎原·紫',
                    connect: true,
                    card: {
                        zi_zhijizhibi: {
                            cardimage: 'zhibi',
                            type: 'trick',
                            enable: true,
                            chongzhu: true,
                            filterTarget: lib.filter.notMe,
                            content() {
                                if (!player.storage.zi_zhijizhibi2) player.storage.zi_zhijizhibi2 = [];
                                player.addTempSkill('zi_zhijizhibi2');
                                var content = [get.translation(target) + '的手牌', target.getCards('h')];
                                game.log(player, '观看了', target, '的手牌');
                                player.chooseControl('ok').set('dialog', content);
                            },
                            ai: {
                                order: 9.5,
                                wuxie() {
                                    return 0.01;
                                },
                                result: {
                                    player: 1,
                                    target(player, target, card) {
                                        if (!player.storage.zi_zhijizhibi2 || !player.storage.zi_zhijizhibi2.includes(target)) return 2;
                                        return 0.5;
                                    },
                                },
                            },
                        },
                        zi_jinchan: {
                            cardimage: 'jinchan',
                            wuxieable: true,
                            type: 'trick',
                            notarget: true,
                            content() {
                                var evt = event.getParent(3)._trigger;
                                if (evt.zi_jinchan) {
                                    var type = get.type(evt.card, 'trick');
                                    if (type == 'basic' || type == 'trick') {
                                        evt.cancel();
                                    }
                                }
                                player.draw(2);
                            },
                            ai: {
                                useful() {
                                    var player = _status.event.player;
                                    var nj = player.countCards('h', function (card) {
                                        return card.name == 'zi_jinchan';
                                    });
                                    var num = player.getHandcardLimit();
                                    if (nj >= num) {
                                        return 10;
                                    }
                                    if (nj == num - 1) {
                                        return 6;
                                    }
                                    return 1;
                                },
                                result: {
                                    player: 1,
                                },
                                value: 5,
                            },
                        },
                        zi_geanguanhuo: {
                            cardimage: 'geanguanhuo',
                            type: 'trick',
                            enable: true,
                            filterTarget: lib.filter.notMe,
                            content() {
                                'step 0';
                                target.chooseToUse(function (card) {
                                    if (!lib.filter.cardEnabled(card, _status.event.player, _status.event)) {
                                        return false;
                                    }
                                    return true;
                                }, '是否使用一张牌？');
                                ('step 1');
                                if (result.bool) {
                                    if (
                                        target.hasHistory('sourceDamage', function (evt) {
                                            return evt.getParent(4) == event && evt.player != player;
                                        })
                                    )
                                        player.draw(2);
                                }
                            },
                            ai: {
                                order: 9.5,
                                wuxie() {
                                    return 1;
                                },
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        if (
                                            target.countCards('hs', function (card) {
                                                return game.hasPlayer(function (current) {
                                                    return target.canUse(card, current) && get.effect(current, card, target, target) > 0;
                                                });
                                            })
                                        )
                                            return 2;
                                        return 0;
                                    },
                                },
                            },
                        },
                    },
                    translate: {
                        zi_zhijizhibi: '知己知彼',
                        zi_zhijizhibi_info: '出牌阶段,对一名其他角色使用,你观看其手牌并摸一张牌.',
                        zi_jinchan: '金蝉脱壳',
                        zi_jinchan_log: '金蝉脱壳',
                        zi_jinchan_info: '当你成为其他角色使用牌的目标时,若你的手牌里只有【金蝉脱壳】,使目标锦囊牌或基本牌对你无效,你摸两张牌.当你因弃置而失去【金蝉脱壳】时,你摸一张牌.',
                        zi_geanguanhuo: '隔岸观火',
                        zi_geanguanhuo_info: '出牌阶段,对一名其他角色使用.目标角色可以使用一张牌,若此牌对除你以外的角色造成过伤害,你摸两张牌.',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    lib.inpile.add(i);
                    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                }
                lib.config.all.cards.add('星火燎原·紫');
                lib.config.cards.add('星火燎原·紫');
                lib.translate['星火燎原·紫_card_config'] = '星火燎原·紫';
                return QQQ;
            });
        },
        package: {
            intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '萌新(转型中)',
        },
    };
});

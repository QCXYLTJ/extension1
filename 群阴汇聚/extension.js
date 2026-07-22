import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '群阴汇聚',
        content(config, pack) {
            //————————————————————————————————————标记效果————————————————————————————————————//
            lib.skill._diywj_marks = {
                ruleSkill: true,
                mod: {
                    maxHandcard(player, num) {
                        return num + player.countMark('diy_jingxiang');
                    },
                },
            };
            lib.skill._diy_reluoshen_mark = {
                ruleSkill: true,
                trigger: {
                    player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                },
                filter(event, player) {
                    if (event.responded) return false;
                    if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                    if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                    return player.countMark('diy_reluoshen_mark') > 0;
                },
                content() {
                    player.removeMark('diy_reluoshen_mark', 1);
                    trigger.untrigger();
                    trigger.set('responded', true);
                    trigger.result = { bool: true, card: { name: 'shan' } };
                },
                ai: {
                    respondShan: true,
                    skillTagFilter(player) {
                        if (!player.countMark('diy_reluoshen_mark')) return false;
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
                    },
                    result: {
                        player: 1,
                    },
                },
            };
            //————————————————————————————————————装备突破————————————————————————————————————//
            lib.skill._diywj_reequip = {
                trigger: {
                    global: 'gameStart',
                },
                forced: true,
                _priority: Infinity,
                popup: false,
                content() {
                    for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                        var node = ui.cardPile.childNodes[i];
                        if (['guding', 'cixiong', 'zhuque', 'qinggang', 'bagua', 'zhuge'].includes(node.name)) {
                            lib.inpile.remove(node.name);
                            lib.inpile.add('re' + node.name);
                            node.init([node.suit, node.number, 're' + node.name]);
                        }
                    }
                    lib.inpile.sort(lib.sort.card);
                },
            };
            //————————————————————————————————————阵亡配音————————————————————————————————————//
            lib.skill._diywj_dieAudio = {
                trigger: {
                    player: 'dieBegin',
                },
                forced: true,
                //direct:true,
                _priority: 2,
                popup: false,
                content() {
                    game.playAudio('../extension/群阴汇聚', 'audio', 'die', trigger.player.name);
                },
            };
            //————————————————————————————————————刘焉动皮————————————————————————————————————//
            lib.skill._diywj_re_liuyan_skinAction = {
                trigger: {
                    global: 'gameStart',
                },
                filter(event, player) {
                    if (player.name != 're_liuyan') return false;
                    return true;
                },
                forced: true,
                //direct:true,
                _priority: 2,
                popup: false,
                content() {
                    player.node.avatar.setBackgroundImage('extension/群阴汇聚/image/character/re_liuyan_gameStart.jpg');
                    setTimeout(function () {
                        player.node.avatar.setBackgroundImage('extension/群阴汇聚/image/character/re_liuyan.jpg');
                    }, 3500);
                },
            };
            lib.skill._diywj_re_liuyan_skinAction_sha = {
                trigger: {
                    player: 'useCardBefore',
                },
                filter(event, player) {
                    if (player.name != 're_liuyan') return false;
                    return get.tag(event.card, 'damage');
                },
                forced: true,
                //direct:true,
                _priority: 2,
                popup: false,
                content() {
                    player.node.avatar.setBackgroundImage('extension/群阴汇聚/image/character/re_liuyan_sha.jpg');
                    setTimeout(function () {
                        player.node.avatar.setBackgroundImage('extension/群阴汇聚/image/character/re_liuyan.jpg');
                    }, 3500);
                },
            };
            lib.skill._diywj_re_liuyan_skinAction_dead = {
                trigger: {
                    player: 'die',
                },
                filter(event, player) {
                    return player.name == 're_liuyan';
                },
                forced: true,
                forceDie: true,
                forced: true,
                popup: false,
                content() {
                    player.node.avatar.setBackgroundImage('extension/群阴汇聚/image/character/re_liuyan_dead.jpg');
                },
            };
            //————————————————————————————————————武将评级————————————————————————————————————//
            if (lib.rank) {
                lib.rank.rarity.rare.addArray(['diy_re_luxun', 'diy_re_simayi']);
                lib.rank.rarity.epic.addArray(['diy_re_jiaxu', 're_yiji', 'diy_re_guojia', 're_xizhicai', 'diy_re_huangyueying', 'diy_re_zhangliao', 're_caoang', 'diy_re_sunxiu', 'diy_re_zhenji', 'diy_re_dengai', 'diy_re_wangyi', 're_lifeng', 'diy_re_sunshangxiang', 're_zhongyao']);
                lib.rank.rarity.legend.addArray(['re_xuyou', 're_liuyan', 'old_re_liuyan', 'diy_re_xusheng', 'diy_re_wuyi', 'diy_re_guohuai', 're_zhaoxiang', 'guojiaxizhicai', 're_shen_zhouyu', 're_shen_liubei', 're_shen_simayi', 'diy_re_sunquan', 'diy_re_caopi', 'diy_re_zhaoyun', 're_shen_zhaoyun', 're_caochun', 'diy_re_liru', 're_liuqi', 're_sp_sunshangxiang', 'diy_re_jushou']);
            }
            //————————————————————————————————————技能修改————————————————————————————————————//
            if (config.diywj_changeSkill) {
                lib.skill.rejueqing.subSkill.rewrite.trigger = { source: 'damageBegin1' };
                lib.skill.spchizhong.trigger = { global: 'die' };
                lib.translate.spchizhong_info = '锁定技,你的手牌上限视为体力上限;当一名角色死亡时,你加1点体力上限.';
            }
        },
        precontent(diywj) {
            game.import('character', function () {
                const diywujiang = {
                    name: 'diywujiang',
                    connect: true,
                    characterSort: {
                        diywujiang: {
                            diywj_refresh_standard: ['diy_re_guojia', 'diy_re_simayi', 'diy_re_huangyueying', 'diy_re_zhaoyun', 're_yiji', 'diy_re_luxun', 'diy_re_sunquan', 'diy_re_zhangliao', 'diy_re_zhenji', 'diy_re_sunshangxiang'],
                            diywj_refresh_feng: [],
                            diywj_refresh_lin: ['diy_re_caopi', 'diy_re_jiaxu'],
                            diywj_refresh_huo: ['re_shen_zhouyu'],
                            diywj_refresh_shan: ['re_shen_simayi', 're_shen_zhaoyun', 'diy_re_dengai'],
                            diywj_refresh_yin: ['re_shen_liubei', 're_xuyou'],
                            diywj_refresh_yijiang_one: ['diy_re_xusheng'],
                            diywj_refresh_yijiang_two: ['diy_re_wangyi'],
                            diywj_refresh_yijiang_three: ['diy_re_guohuai', 'diy_re_liru'],
                            diywj_refresh_yijiang_four: ['diy_re_wuyi', 'diy_re_jushou'],
                            diywj_refresh_yijiang_five: ['diy_re_sunxiu', 're_zhongyao'],
                            diywj_refresh_sp: ['re_caoang', 're_xizhicai', 're_zhaoxiang', 're_caochun', 're_sp_sunshangxiang'],
                            diywj_refresh_sp_longzhou: ['re_liuqi'],
                        },
                    },
                    character: {
                        guojiaxizhicai: ['male', 'wei', 3, ['xianfu', 'retianduEX', 'yice'], []],
                        re_liuyan: ['male', 'qun', 3, ['new_retushe', 'new_relimu', 'rejuedao'], ['zhu']],
                        re_xuyou: ['male', 'qun', 3, ['rechenglve', 'new_reshicai', 'recunmu'], []],
                        diy_re_guojia: ['male', 'wei', 3, ['retiandu', 'diy_reyiji'], []],
                        re_xizhicai: ['male', 'wei', 3, ['retiandu', 'xianfu', 'rechouce'], []],
                        diy_re_luxun: ['male', 'wu', '3/4', ['diy_reqianxun', 'fenying'], []],
                        diy_re_guohuai: ['male', 'wei', '3/4', ['fangce', 'diy_jingxiang'], []],
                        re_yiji: ['male', 'shu', 3, ['rejijie', 'rejiyuan'], []],
                        re_zhaoxiang: ['female', 'shu', 4, ['diy_refanghun', 'diy_refuhan'], []],
                        diy_re_xusheng: ['male', 'wu', 4, ['diy_repojun', 'reyicheng'], []],
                        re_shen_liubei: ['male', 'shen', 6, ['relongnu', 'rejieying'], ['shu']],
                        diy_re_zhangliao: ['male', 'wei', 4, ['diy_retuxi', 'cuifeng'], []],
                        re_shen_zhouyu: ['male', 'shen', 4, ['reyeyan', 'reqinyin'], ['wu']],
                        diy_re_simayi: ['male', 'wei', 3, ['diy_refankui', 'diy_reguicai'], []],
                        diy_re_sunquan: ['male', 'wu', 4, ['diy_rezhiheng', 'diy_rejiuyuan'], ['zhu']],
                        diy_re_caopi: ['male', 'wei', 3, ['diy_refangzhu', 'diy_rexingshang', 'resongwei'], ['zhu']],
                        diy_re_jiaxu: ['male', 'qun', 3, ['diy_reluanwu', 'diy_rewansha', 'cezong'], []],
                        diy_re_huangyueying: ['female', 'shu', 3, ['diy_rejizhi', 'diy_reqicai'], []],
                        re_shen_simayi: ['male', 'shen', 4, ['rerenjie', 'lianpo', 'rebaiyin', 'jinzu'], ['jin', 'hiddenSkill']],
                        diy_re_wuyi: ['male', 'shu', 4, ['diy_rebenxi'], []],
                        re_caoang: ['male', 'wei', 4, ['rekangkai', 'rexuepin'], []],
                        diy_re_sunxiu: ['male', 'wu', 3, ['diy_reyanzhu', 'diy_rexingxue', 'diy_rezhaofu'], ['zhu']],
                        diy_re_zhaoyun: ['male', 'shu', 4, ['diy_longdan', 'diy_reyajiao'], []],
                        re_shen_zhaoyun: ['male', 'shen', 1, ['diy_relonghun', 'rejuejing', 'rezhanjiang', 'bm_shuangqiang', 'youzhu'], ['shu']],
                        diy_re_zhenji: ['female', 'wei', 3, ['diy_reqingguo', 'diy_reluoshen'], []],
                        re_caochun: ['male', 'wei', 4, ['reshanjia'], []],
                        diy_re_liru: ['male', 'qun', 3, ['diy_rejuece', 'diy_remieji', 'diy_refencheng'], []],
                        diy_re_dengai: ['male', 'wei', 4, ['diy_retuntian', 'rezaoxian'], []],
                        re_liuqi: ['male', 'qun', 3, ['diy_rewenji', 'retunjiang'], []],
                        diy_re_wangyi: ['female', 'wei', '3/4', ['diy_rezhenlie', 'diy_remiji'], []],
                        re_lifeng: ['male', 'shu', 3, ['retunchu', 'reshuliang'], []],
                        diy_re_sunshangxiang: ['female', 'wu', 3, ['rexiaoji', 'diy_rejieyin', 'yinli'], []],
                        re_sp_sunshangxiang: ['female', 'shu', 3, ['reliangzhu', 'refanxiang'], []],
                        diy_re_jushou: ['male', 'qun', 3, ['diy_rejianying', 'huanjin', 'reshibei'], []],
                        re_zhongyao: ['male', 'wei', 3, ['rehuomo', 'rezuoding'], []],
                        old_re_liuyan: ['male', 'qun', 3, ['retushe', 'relimu'], []],
                    },
                    characterIntro: {
                        guojiaxizhicai: '颍川的天妒二杰,他们在一起时气运逆天.',
                        re_liuyan: '偏安一隅的大地主土皇帝刘老板,废史立牧的第一人,也是第一个州牧.',
                        re_xuyou: '人送外号BB机,擅长阿瞒阿瞒袁本初.',
                        diy_re_guojia: '颍川的才子,进一步受到天的嫉妒,已是濒临死亡的绝境.',
                        re_xizhicai: '颍川的才子,进一步受到天的嫉妒,已是濒临死亡的绝境.',
                        diy_re_luxun: '在夷陵焚毁刘备的连营之策,却不料刘备在此时证道成神.',
                        diy_re_guohuai: '得寸进尺？不不不,他是想把你逼到没有退路!屠神小组成员之一.',
                        re_yiji: '只要有他在,人人都是神赵云.',
                        re_zhaoxiang: '赵云之女,扶大汉之将倾.',
                        diy_re_xusheng: '集四宝之力,得阴间神将.屠神小组前任队长.现任副队长.',
                        re_shen_liubei: '因夷陵之火,他证道成神,带着更汹涌的怒火,誓要为兄弟报仇!',
                        diy_re_zhangliao: '你以为我是张辽？其实是我神曹操哒!屠神小组成员之一.',
                        re_shen_zhouyu: '因琴音引动了强烈的天灾,他证道成神,一挥手,整个赤壁将都被他的业火所覆盖!',
                        diy_re_simayi_ab: '著名谐星达人,他告诉我们技能好玩才是真好玩,强度什么都无所谓.',
                        diy_re_sunquan: '生子当如孙仲谋,合肥十万送人头.',
                        diy_re_caopi: '他会给你一张免费的出国旅游的机票,还送钱,但是机票是单程的.',
                        re_jiaxu: '实不相瞒,他确实偷了神曹操的马,但那马实在是太烈了.',
                        diy_re_huangyueying: '锦囊复锦囊,锦囊何其多.',
                        re_shen_simayi: '因超越常人的忍耐力,他证道成神,并拜印获得了极高的权力,现在他要着手报复曹氏了.',
                        diy_re_wuyi: '岂曰吴懿,御子同袍.屠神小组队长.',
                        re_caoang: '舍身为父,是为大义!',
                        diy_re_sunxiu: '设鸿门宴,斩灭逆臣!被宴诛者便是这宴桌上美食.',
                        diy_re_zhaoyun: '捂奶长衫罩子浓,参见主公!',
                        re_shen_zhaoyun: '高达一号,再临人间!',
                        diy_re_zhenji: '帝王家中的典型悲剧妃子.',
                        re_caochun: '虎豹骑大将军.屠神小组副队长.',
                        diy_re_liru: '毒杀少帝,焚烧洛阳,都是他一手的杰作.',
                        diy_re_dengai: '资深农业专家提醒您:<干饭千万条,节约第一条.铺张且浪费,农伯两行泪>.',
                        re_liuqi: '上屋抽梯问计策,下进江陵避灾祸.',
                        diy_re_wangyi: '所有花好月圆皮肤中唯她的丈夫没有在三国杀中登场.',
                        re_lifeng: '暂时不知道该放哪个分包的仓管.',
                        diy_re_sunshangxiang: '该名女子至今仍在给她的丈夫戴绿帽.',
                        re_sp_sunshangxiang: '该名女子现今已不给她的丈夫戴绿帽了,因为他们已经离婚了.',
                        diy_re_jushou: '打游戏的时候记得面朝北方,这样更容易续上.',
                        re_zhongyao: '天机图掌握者,荀攸的至交.',
                    },
                    characterTitle: {
                        diy_re_guojia: 'EX.Calibur',
                        diy_re_guohuai: '鸢唳',
                        re_caoang: '每天不一样的小林',
                        diy_re_dengai: '唯一的小宇',
                        re_shen_liubei: '龙临夷陵',
                        re_shen_zhouyu: '赤壁天灾',
                        re_shen_simayi: '三分归一',
                        re_shen_zhaoyun: '高达一号',
                        re_liuyan: '雄踞益州',
                        diy_re_liru: '鸩杀少帝',
                        re_liuqi: '御子',
                    },
                    dynamicTranslate: {
                        rechenglve(player) {
                            if (player.storage.rechenglve == true) return '<b>转换技</b>,出牌阶段限一次,<b>阴</b>:你可以摸X+1张牌,弃置Y张牌.<span class="bluetext"><b>阳</b>:你可以摸X+2张牌,弃置X+1张牌.</span>(X为本回合你发动过<恃才>②效果的次数,Y为X+2且至多为4)若如此做,直到本回合结束,你使用与弃置牌花色相同的牌无距离和次数限制.';
                            return '<b>转换技</b>,出牌阶段限一次,<span class="bluetext"><b>阴</b>:你可以摸X+1张牌,弃置Y张牌.</span><b>阳</b>:你可以摸X+2张牌,弃置X+1张牌.(X为本回合你发动过<恃才>②效果的次数,Y为X+2且至多为4)若如此做,直到本回合结束,你使用与弃置牌花色相同的牌无距离和次数限制.';
                        },
                        diy_reyanzhu(player) {
                            return lib.translate[`${player.storage.diy_reyanzhu ? 'diy_reyanzhu_rewrite' : 'diy_reyanzhu'}_info`];
                        },
                        youzhu(player) {
                            return lib.translate[`${player.hasSkill('youzhu3') ? 'youzhu_rewrite' : 'youzhu'}_info`];
                        },
                    },
                    card: {
                        reyinyueqiang: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            image: 'ext:群阴汇聚/image/equip/reyinyueqiang.png',
                            distance: {
                                attackFrom: -2,
                            },
                            ai: {
                                basic: {
                                    equipValue: 4,
                                },
                            },
                            skills: ['reyinyueqiang_skill'],
                        },
                        reyajiaoqiang: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            image: 'ext:群阴汇聚/image/equip/reyajiaoqiang.png',
                            distance: {
                                attackFrom: -2,
                            },
                            ai: {
                                equipValue(card, player) {
                                    var skills = ['longdan', 'kanpo', 'rekanpo', 'qingguo', 'reqingguo', 'ollongdan', 'refanghun', 'diy_longdan', 'diy_reqingguo'];
                                    for (var i = 0; i < skills.length; i++) {
                                        if (player.hasSkill(skills[i])) return 5;
                                    }
                                    if (
                                        player.countCards('h', function (card) {
                                            return get.color(card) == 'black' && ['wuxie', 'caochuan'].includes(card);
                                        })
                                    )
                                        return 5;
                                    return 2;
                                },
                                basic: {
                                    equipValue: 5,
                                },
                            },
                            skills: ['reyajiaoqiang_skill'],
                        },
                        rexuwangzhimian: {
                            fullskin: true,
                            nomod: true,
                            nopower: true,
                            type: 'equip',
                            subtype: 'equip5',
                            image: 'ext:群阴汇聚/image/equip/rexuwangzhimian.png',
                            ai: {
                                basic: {
                                    equipValue: 9,
                                },
                            },
                            skills: ['rexuwangzhimian_skill'],
                        },
                        luanfenghemingjian_recixiong: {
                            fullskin: true,
                            nomod: true,
                            nopower: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -2,
                            },
                            image: 'ext:群阴汇聚/image/equip/luanfenghemingjian_recixiong.png',
                            ai: {
                                basic: {
                                    equipValue: 9,
                                },
                            },
                            skills: ['luanfenghemingjian_recixiong_skill'],
                        },
                        chiyanzhenhunqin_rezhuque: {
                            fullskin: true,
                            nomod: true,
                            nopower: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -3,
                            },
                            image: 'ext:群阴汇聚/image/equip/chiyanzhenhunqin_rezhuque.png',
                            ai: {
                                basic: {
                                    equipValue: 3,
                                },
                            },
                            skills: ['chiyanzhenhunqin_rezhuque_skill'],
                        },
                        chixueqingfeng_reqinggang: {
                            fullskin: true,
                            nomod: true,
                            nopower: true,
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            image: 'ext:群阴汇聚/image/equip/chixueqingfeng_reqinggang.png',
                            ai: {
                                basic: {
                                    equipValue: 9,
                                },
                            },
                            skills: ['chixueQ'],
                        },
                        equip_liushan: {
                            fullskin: true,
                            nomod: true,
                            nopower: true,
                            type: 'equip',
                            subtype: 'equip5',
                            image: 'ext:群阴汇聚/image/equip/equip_liushan.png',
                            ai: {
                                basic: {
                                    equipValue: 9,
                                },
                            },
                            skills: ['equip_liushan_skill'],
                        },
                    },
                    translate: {
                        diy_reyiji_append: '<span style="font-family: yuanli">你只能以此法将至多两张牌置于同一名角色的武将牌上</span>',
                        diy_retieji_append: '<span style="font-family: yuanli">世人信仰马神,世人皆惧马神!</span>',
                        reguding_append: '<span style="font-family: yuanli">我TM一刀给你皮燕子淦碎!</span>',
                        _diy_reluoshen_mark: '「仿」标记',
                        _diy_reluoshen_mark_info: '将1枚此标记当做【闪】使用或打出.',
                        diy_reyanzhu_rewrite: '宴诛·改',
                        diy_reyanzhu_rewrite_info: '出牌阶段限一次,你可以令一名其他角色弃置一张牌且其受到的伤害+1直到其下回合开始.',
                        youzhu_rewrite: '佑主·改',
                        youzhu_rewrite_info: '<b>锁定技</b>,一名角色的回合结束时,若你没有【襁褓阿斗】,则你获得游戏内的【襁褓阿斗】并置入装备区;你装备区的【襁褓阿斗】无法被其他角色弃置或获得.',
                        diy_rezhiheng_backup: '制衡',
                        diy_refanghun_sha: '龙胆',
                        diy_longdan_backup: '龙胆',
                        diywj_refresh_standard: 'DIY界限突破·标准',
                        diywj_refresh_feng: 'DIY界限突破·风',
                        diywj_refresh_lin: 'DIY界限突破·林',
                        diywj_refresh_huo: 'DIY界限突破·火',
                        diywj_refresh_shan: 'DIY界限突破·山',
                        diywj_refresh_yin: 'DIY界限突破·阴',
                        diywj_refresh_yijiang_one: 'DIY界限突破·将1',
                        diywj_refresh_yijiang_two: 'DIY界限突破·将2',
                        diywj_refresh_yijiang_three: 'DIY界限突破·将3',
                        diywj_refresh_yijiang_four: 'DIY界限突破·将4',
                        diywj_refresh_yijiang_five: 'DIY界限突破·将5',
                        diywj_refresh_sp: 'DIY界限突破·SP',
                        diywj_refresh_sp_longzhou: 'DIY界限突破·龙舟',
                        chiyanzhenhunqin_rezhuque: '界赤焰镇魂琴',
                        chiyanzhenhunqin_rezhuque_info: '锁定技,你造成的伤害均具有火属性;你使用火【杀】无距离和次数限制且你的【杀】均视为火【杀】;每当你造成1点火焰伤害后,你受到1点无来源火焰伤害.',
                        luanfenghemingjian_recixiong: '界鸾凤和鸣剑',
                        luanfenghemingjian_recixiong_info: '当你使用属性【杀】指定一名其他角色后,你可令其弃置一张手牌(无牌不弃),你摸一张牌.',
                        rexuwangzhimian: '界虚妄之冕',
                        rexuwangzhimian_info: '锁定技,摸牌阶段,你额外摸两张牌;你的手牌上限-1;锁定技,准备阶段,你获得1枚「忍」.',
                        reyajiaoqiang: '界涯角枪',
                        reyajiaoqiang_info: '当你于其他角色的回合内首次使用的黑色牌结算完成后,你可摸一张牌并弃置当前回合角色的一张牌(无牌不弃),你获得此牌对应的所有实体牌.',
                        reyinyueqiang: '界银月枪',
                        reyinyueqiang_info: '你的回合外,每当你使用或打出了一张黑色手牌(若为使用则在它结算之前),若没有处于濒死状态的角色,则你可立即对你攻击范围内的任意一名角色使用一张【杀】,并于此【杀】结算后对其造成1点等同于此牌转化前的属性的伤害并摸一张牌',
                        chixueqingfeng_reqinggang: '界赤血青锋',
                        chixueqingfeng_reqinggang_info: '锁定技,你使用【杀】结算结束前,目标角色不能使用或打出手牌,且此【杀】无视其防具.当你使用【杀】对目标角色造成伤害时,你可弃置其装备区的一张武器牌或防具牌,此伤害+1.',
                        equip_liushan: '襁褓阿斗',
                        equip_liushan_info: '锁定技,当你成为【南蛮入侵】或【万箭齐发】的目标时,取消之;每轮限一次,当你进入濒死状态时,你回复1点体力.',
                        guojiaxizhicai: '郭嘉戏志才',
                        re_liuyan: '界刘焉',
                        re_xuyou: '界许攸',
                        diy_re_guojia: 'DIY界郭嘉',
                        diy_re_guojia_ab: '界郭嘉',
                        re_xizhicai: '界戏志才',
                        diy_re_luxun: 'DIY界陆逊',
                        diy_re_luxun_ab: '界陆逊',
                        diy_re_guohuai: 'DIY界郭淮',
                        diy_re_guohuai_ab: '界郭淮',
                        re_yiji: '界伊籍',
                        re_zhaoxiang: '界赵襄',
                        diy_re_xusheng: 'DIY界徐盛',
                        diy_re_xusheng_ab: '界徐盛',
                        re_shen_liubei: '界神刘备',
                        diy_re_zhangliao: 'DIY界张辽',
                        diy_re_zhangliao_ab: '界张辽',
                        re_shen_zhouyu: '界神周瑜',
                        diy_re_simayi: 'DIY界司马懿',
                        diy_re_simayi_ab: '界司马懿',
                        diy_re_sunquan: 'DIY界孙权',
                        diy_re_sunquan_ab: '界孙权',
                        diy_re_caopi: 'DIY界曹丕',
                        diy_re_caopi_ab: '界曹丕',
                        diy_re_jiaxu: 'DIY界贾诩',
                        diy_re_jiaxu_ab: '界贾诩',
                        diy_re_huangyueying: 'DIY界黄月英',
                        diy_re_huangyueying_ab: '界黄月英',
                        re_shen_simayi: '界神司马懿',
                        diy_re_wuyi: 'DIY界吴懿',
                        diy_re_wuyi_ab: '界吴懿',
                        re_caoang: '界曹昂',
                        diy_re_sunxiu: 'DIY界孙休',
                        diy_re_sunxiu_ab: '界孙休',
                        diy_re_zhaoyun: 'DIY界赵云',
                        diy_re_zhaoyun_ab: '界赵云',
                        re_shen_zhaoyun: '界神赵云',
                        diy_re_zhenji: 'DIY界甄宓',
                        diy_re_zhenji_ab: '界甄宓',
                        re_caochun: '界曹纯',
                        diy_re_liru: 'DIY界李儒',
                        diy_re_liru_ab: '界李儒',
                        diy_re_dengai: 'DIY界邓艾',
                        diy_re_dengai_ab: '界邓艾',
                        re_liuqi: '界刘琦',
                        diy_re_wangyi: 'DIY界王异',
                        diy_re_wangyi_ab: '界王异',
                        re_lifeng: '界李丰',
                        diy_re_sunshangxiang: 'DIY界孙尚香',
                        diy_re_sunshangxiang_ab: '界孙尚香',
                        re_sp_sunshangxiang: '界SP孙尚香',
                        re_sp_sunshangxiang_ab: '界孙尚香',
                        diy_re_jushou: 'DIY界沮授',
                        diy_re_jushou_ab: '界沮授',
                        re_zhongyao: '界钟繇',
                        old_re_liuyan: '旧界刘焉',
                    },
                };
                for (const i in diywujiang.character) {
                    const info = diywujiang.character[i];
                    info[4].push(`ext:群阴汇聚/image/character/${i}.jpg`);
                    info[4].push(`die:ext:群阴汇聚/audio/${i}.mp3`);
                }
                lib.config.all.characters.add('diywujiang');
                lib.config.characters.add('diywujiang');
                lib.translate.diywujiang_character_config = '群阴武将';
                return diywujiang;
            });
            game.import('card', function () {
                var diywj_equip = {
                    name: 'diywj_equip',
                    connect: true,
                    card: {
                        reguding: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            image: 'ext:群阴汇聚/image/equip/reguding.png',
                            distance: {
                                attackFrom: -1,
                            },
                            ai: {
                                basic: {
                                    equipValue: 2,
                                },
                            },
                            skills: ['reguding_skill'],
                        },
                        recixiong: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            image: 'ext:群阴汇聚/image/equip/recixiong.png',
                            distance: {
                                attackFrom: -1,
                            },
                            ai: {
                                basic: {
                                    equipValue: 2,
                                },
                            },
                            skills: ['recixiong_skill'],
                        },
                        rezhuque: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            image: 'ext:群阴汇聚/image/equip/rezhuque.png',
                            distance: {
                                attackFrom: -3,
                            },
                            ai: {
                                basic: {
                                    equipValue: 2,
                                },
                            },
                            skills: ['rezhuque_skill'],
                        },
                        reqinggang: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            image: 'ext:群阴汇聚/image/equip/reqinggang.png',
                            distance: {
                                attackFrom: -1,
                            },
                            ai: {
                                basic: {
                                    equipValue: 2,
                                },
                            },
                            skills: ['reqinggang_skill'],
                        },
                        rebagua: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip2',
                            image: 'ext:群阴汇聚/image/equip/rebagua.png',
                            ai: {
                                basic: {
                                    equipValue: 7.5,
                                },
                            },
                            skills: ['rebagua_skill'],
                        },
                        rezhuge: {
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip1',
                            image: 'ext:群阴汇聚/image/equip/rezhuge.png',
                            equipDelay: false,
                            loseDelay: false,
                            onLose() {
                                player.removeMark('rezhuge_mark', player.storage.rezhuge_mark);
                            },
                            clearLose: true,
                            ai: {
                                order() {
                                    return get.order({ name: 'sha' }) - 0.1;
                                },
                                equipValue(card, player) {
                                    if (player._rezhuge_temp) return 1;
                                    player._rezhuge_temp = true;
                                    var result = (function () {
                                        if (
                                            !game.hasPlayer(function (current) {
                                                return player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                            })
                                        )
                                            return 1;
                                        if (player.hasSha() && _status.currentPhase == player) {
                                            if ((player.getEquip('rezhuge') && player.countUsed('sha')) || player.getCardUsable('sha') == 0) return 10;
                                        }
                                        var num = player.countCards('hs', 'sha');
                                        if (num > 1) return 6 + num;
                                        return 3 + num;
                                    })();
                                    delete player._rezhuge_temp;
                                    return result;
                                },
                                basic: {
                                    equipValue: 5,
                                },
                                tag: {
                                    valueswap: 1,
                                },
                            },
                            skills: ['rezhuge_skill'],
                        },
                    },
                    translate: {
                        reguding: '界古锭刀',
                        reguding_info: '锁定技,当你使用【杀】对目标角色造成伤害时,若其每满足以下一项,此伤害+1:1.没有手牌;2.装备区没有牌;3.判定区有牌;4.已横置;5.武将牌为背面朝上.',
                        recixiong: '界雌雄双股剑',
                        recixiong_info: '当你使用【杀】指定一名异性的其他角色后,你可令其弃置一张手牌(无牌不弃),你摸一张牌.',
                        rezhuque: '界朱雀羽扇',
                        rezhuque_info: '当你使用普通【杀】时,你可将此【杀】改为火【杀】;锁定技,你使用火【杀】无次数限制.',
                        reqinggang: '界青釭剑',
                        reqinggang_info: '锁定技,当你使用【杀】指定目标后,你令其防具技能无效直到此【杀】被抵消或造成伤害.当你使用【杀】对目标角色造成伤害时,你可弃置其装备区的一张武器牌或防具牌.',
                        rebagua: '界八卦阵',
                        rebagua_info: '当你需要使用或打出【闪】时,你可以进行一次判定,若结果为:红色,你视为使用或打出了此【闪】;黑色,你摸一张牌.',
                        rezhuge: '界诸葛连弩',
                        rezhuge_info: '锁定技,你使用【杀】的次数上限+3;你每使用一张【杀】,本回合你的攻击范围+1.',
                    },
                };
                lib.translate.diywj_equip_card_config = '界装备牌';
                lib.config.all.cards.add('diywj_equip');
                lib.config.cards.add('diywj_equip');
                return diywj_equip;
            });
        },
        config: {
            Special_Thanks: {
                name: '特别感谢(长按此处查看)',
                intro: '特别感谢@一条咸鱼 大佬提供的代码与技术支持、@诗笺 大佬提供的代码支持、@风华易逝 &@乌鸦 提供的技术指导、@EX.Calibur 提供的DIY界郭嘉、@鸢唳 提供的DIY界郭淮、@求三兴衰的曹叡 &@天水色一剑 提供的界神刘备',
            },
            diywj_changeSkill: {
                name: '技能修改',
                intro: '开启后重启游戏生效,将本体的某些技能的描述效果与代码结算替换成和三国杀一致',
                init: false,
            },
        },
        package: {
            skill: {
                skill: {
                    rechenglve: {
                        mark: true,
                        zhuanhuanji: true,
                        marktext: '成',
                        intro: {
                            content(storage, player) {
                                var str = skill ? `出牌阶段限一次,你可以摸${storage.length + 2}张牌,弃置${storage.length + 1}张牌.若如此做,直到本回合结束,你使用与弃置牌花色相同的牌无距离和次数限制` : `出牌阶段限一次,可以摸${storage.length + 1}张牌,弃置${Math.min(2 + storage.length, 4)}张牌.若如此做,直到本回合结束,你使用与弃置牌花色相同的牌无距离和次数限制`;
                                if (player.storage.rechenglve1) {
                                    str += '<br><li>当前花色:';
                                    str += get.translation(player.storage.rechenglve1);
                                }
                                return str;
                            },
                        },
                        enable: 'phaseUse',
                        usable: 1,
                        audio: 'ext:群阴汇聚/audio:2',
                        content() {
                            'step 0';
                            player.storage.rechenglve = !player.storage.rechenglve;
                            player.draw((player.storage.rechenglve == true ? 2 : 1) + player.storage.new_reshicai.length);
                            player.chooseToDiscard('he', player.storage.rechenglve == true ? 1 + player.storage.new_reshicai.length : Math.min(2 + player.storage.new_reshicai.length, 4), true);
                            ('step 1');
                            if (result.bool) {
                                player.storage.rechenglve1 = [];
                                if (Array.isArray(result.cards))
                                    for (var i of result.cards) {
                                        player.storage.rechenglve1.add(i.suit);
                                    }
                                player.markSkill('rechenglve');
                                player.addTempSkill('rechenglve1');
                            }
                        },
                        ai: {
                            order: 2.7,
                            result: {
                                player(player) {
                                    if ((player.storage.rechenglve == undefined || player.storage.rechenglve == false) && player.countCards('h') < 3 + player.storage.new_reshicai.length) return 0;
                                    return 1;
                                },
                            },
                        },
                    },
                    rechenglve1: {
                        marktext: '成',
                        mod: {
                            cardUsable(card, player) {
                                var cards = player.storage.rechenglve1;
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (i == card.suit) return Infinity;
                                    }
                            },
                            targetInRange(card, player) {
                                var cards = player.storage.rechenglve1;
                                return cards.some((i) => i == card.suit);
                            },
                        },
                    },
                    retushe: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        forced: true,
                        filter(event, player) {
                            if (event.parent.triggeredTargets3.length > 1) return false;
                        },
                        content() {
                            'step 0';
                            if (!trigger.target.hasSkill('baiban')) {
                                trigger.target.addTempSkill('baiban');
                            }
                            ('step 1');
                            var x = trigger.targets.length + player.countCards('j') + player.countCards('e');
                            player.draw(x);
                        },
                        ai: {
                            presha: true,
                            pretao: true,
                            threaten: 1.8,
                        },
                        group: ['retushe_shan', 'retushe_wuxie', 'retushe_respond'],
                        subSkill: {
                            respond: {
                                prompt: '是否摸牌',
                                audio: 'retushe',
                                trigger: {
                                    player: 'respond',
                                },
                                content() {
                                    var y = 1 + player.countCards('j') + player.countCards('e');
                                    player.draw(y);
                                },
                            },
                            shan: {
                                prompt: '是否摸牌',
                                audio: 'retushe',
                                trigger: {
                                    player: 'useCardAfter',
                                },
                                filter(event, player) {
                                    if (event.card.name == 'shan') return true;
                                },
                                content() {
                                    var y = 1 + player.countCards('j') + player.countCards('e');
                                    player.draw(y);
                                },
                            },
                            wuxie: {
                                prompt: '是否摸牌',
                                audio: 'retushe',
                                trigger: {
                                    player: 'useCardAfter',
                                },
                                filter(event, player) {
                                    if (event.card.name == 'wuxie') return true;
                                },
                                content() {
                                    var y = 1 + player.countCards('j') + player.countCards('e');
                                    player.draw(y);
                                },
                            },
                        },
                    },
                    new_retushe: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        forced: true,
                        filter(event, player) {
                            if (event.parent.triggeredTargets3.length > 1) return false;
                            return event.targets.length && player.countCards('h', { type: 'basic' }) <= Math.floor(player.hp / 2);
                        },
                        content() {
                            'step 0';
                            game.countPlayer(function (current) {
                                if (current != player && !current.hasSkill('fengyin')) {
                                    for (var i = 0; i < trigger.targets.length; i++) {
                                        if (current == trigger.targets[i]) {
                                            player.line(current, 'green');
                                            current.addTempSkill('fengyin');
                                        }
                                    }
                                }
                            });
                            ('step 1');
                            var x = trigger.targets.length + player.countCards('j') - player.countCards('e');
                            player.draw(Math.max(x, 1));
                        },
                        ai: {
                            presha: true,
                            pretao: true,
                            threaten: 1.8,
                        },
                        group: ['new_retushe_use', 'new_retushe_respond'],
                        subSkill: {
                            respond: {
                                prompt(event, player) {
                                    var y = player.countCards('j') - player.countCards('e');
                                    return `是否摸${get.cnNumber(Math.max(y, 1))}张牌？`;
                                },
                                audio: 'new_retushe',
                                trigger: {
                                    player: 'respond',
                                },
                                filter(event, player) {
                                    return player.countCards('h', { type: 'basic' }) <= Math.floor(player.hp / 2);
                                },
                                content() {
                                    var y = player.countCards('j') - player.countCards('e');
                                    player.draw(Math.max(y, 1));
                                },
                            },
                            use: {
                                prompt(event, player) {
                                    var y = player.countCards('j') - player.countCards('e');
                                    return `是否摸${get.cnNumber(Math.max(y, 1))}张牌？`;
                                },
                                audio: 'new_retushe',
                                trigger: {
                                    player: 'useCardAfter',
                                },
                                filter(event, player) {
                                    if (['shan', 'wuxie'].includes(event.card.name)) return player.countCards('h', { type: 'basic' }) <= Math.floor(player.hp / 2);
                                },
                                content() {
                                    var y = player.countCards('j') - player.countCards('e');
                                    player.draw(Math.max(y, 1));
                                },
                            },
                        },
                    },
                    new_relimu: {
                        group: 'new_relimu_yingwei',
                        mod: {
                            targetInRange(card, player, target) {
                                if (player.countCards('j') && player.inRange(target)) return true;
                            },
                            cardUsable(card, player, num) {
                                if (typeof num == 'number' && player.countCards('j')) return Infinity;
                            },
                            aiValue(player, card, num) {
                                if (card.name == 'zhangba') return 15;
                                if (player.getEquip('zhangba') && player.countCards('h') > 1 && ['shan', 'tao'].includes(card.name)) return 0;
                                if (['shan', 'tao'].includes(card.name)) return num / 2;
                            },
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        enable: 'phaseUse',
                        discard: false,
                        filter(event, player) {
                            if (player.hasJudge('lebu')) return false;
                            return player.countCards('he', { suit: 'diamond' }) > 0;
                        },
                        viewAs: {
                            name: 'lebu',
                        },
                        position: 'hes',
                        filterCard(card, player, event) {
                            return card.suit == 'diamond';
                        },
                        selectTarget: -1,
                        filterTarget(card, player, target) {
                            return player == target;
                        },
                        check(card) {
                            var player = _status.event.player;
                            if (!player.getEquip('zhangba') && player.countCards('hs', 'sha') < 2) {
                                if (
                                    player.countCards('h', function (cardx) {
                                        return cardx != card && cardx.name == 'shan';
                                    }) > 0
                                )
                                    return 0;
                                var damaged = player.maxHp - player.hp - 1;
                                var ts = player.countCards('h', function (cardx) {
                                    return cardx != card && cardx.name == 'tao';
                                });
                                if (ts > 0 && ts > damaged) return 0;
                            }
                            if (card.name == 'shan') return 15;
                            if (card.name == 'tao') return 10;
                            return 9 - get.value(card);
                        },
                        onuse(links, player) {
                            var next = game.createEvent('new_relimu_draw', false, _status.event.parent),
                                next2 = game.createEvent('new_relimu_recover', false, _status.event.parent);
                            next.player = player;
                            next2.player = player;
                            next.setContent(function () {
                                player.draw();
                            });
                            next2.setContent(function () {
                                player.recover();
                            });
                        },
                        subSkill: {
                            yingwei: {
                                trigger: {
                                    player: 'useCard1',
                                },
                                forced: true,
                                filter(event, player) {
                                    return !event.card.yingbian && player.countCards('j') && Array.isArray(get.info(event.card).yingbian_tags);
                                },
                                content() {
                                    if (!trigger.card.yingbian) {
                                        trigger.card.yingbian = true;
                                        var info = get.info(trigger.card);
                                        trigger.card.cardtags = info.yingbian_tags.map(function (i) {
                                            return 'yingbian_' + i;
                                        });
                                        if (info && info.yingbian) info.yingbian(trigger);
                                        player.addTempSkill('yingbian_changeTarget');
                                    }
                                },
                            },
                        },
                        ai: {
                            result: {
                                target: 1,
                                ignoreStatus: true,
                            },
                            order: 12,
                            basic: {
                                order: 1,
                                useful: 1,
                                value: 8,
                            },
                            tag: {
                                skip: 'phaseUse',
                            },
                        },
                    },
                    new_reshicai: {
                        audio: 'ext:群阴汇聚/audio:2',
                        init(player) {
                            if (!player.storage.new_reshicai) player.storage.new_reshicai = [];
                        },
                        group: ['new_reshicai_nodiscard', 'new_reshicai_choose'],
                        intro: {
                            content(storage, player) {
                                return (
                                    '本回合' +
                                    storage
                                        .map(function (i) {
                                            return get.translation(i);
                                        })
                                        .toString() +
                                    '牌不计入手牌上限'
                                );
                            },
                        },
                        ai: {
                            reverseOrder: true,
                            skillTagFilter(player) {
                                if (
                                    player.getHistory('useCard', function (evt) {
                                        return get.type(evt.card) == 'equip';
                                    }).length
                                )
                                    return false;
                            },
                            effect: {
                                target(card, player, target) {
                                    if (
                                        player == target &&
                                        get.type(card) == 'equip' &&
                                        !player.getHistory('useCard', function (evt) {
                                            return get.type(evt.card) == 'equip';
                                        }).length == 0
                                    )
                                        return [1, 3];
                                },
                            },
                            threaten: 2.4,
                        },
                        trigger: {
                            player: ['useCardAfter'],
                            target: 'useCardToTargeted',
                        },
                        filter(event, player, name) {
                            if (name == 'useCardToTargeted' && ('equip' != get.type(event.card) || event.player != player)) return false;
                            if (name == 'useCardAfter' && ['equip', 'delay'].includes(get.type(event.card))) return false;
                            if (event.cards.filterInD().length <= 0) return false;
                            var history = player.getHistory('useCard');
                            var evt = name == 'useCardAfter' ? event : event.parent;
                            for (var i = 0; i < history.length; i++) {
                                if (history[i] != evt && get.type(history[i].card) == get.type(event.card)) return false;
                                else if (history[i] == evt) return true;
                            }
                            return false;
                        },
                        check(event, player) {
                            if (get.type(event.card) == 'equip') {
                                if (get.subtype(event.card) == 'equip6') return true;
                                if (get.equipResult(player, event.target, event.card.name) <= 0) return true;
                                var eff1 = player.getUseValue(event.card);
                                var subtype = get.subtype(event.card);
                                return (
                                    player.countCards('h', function (card) {
                                        return get.subtype(card) == subtype && player.getUseValue(card) >= eff1;
                                    }) > 0
                                );
                            }
                            return true;
                        },
                        content() {
                            'step 0';
                            event.cards = trigger.cards.filterInD();
                            if (event.cards.length > 1) {
                                player
                                    .chooseButton(true, event.cards.length, ['按顺序将卡牌置于牌堆顶(先选择的在上)', event.cards])
                                    .set('ai', function (button) {
                                        var value = get.value(button.link);
                                        if (_status.event.reverse) return value;
                                        return -value;
                                    })
                                    .set('reverse', _status.currentPhase && _status.currentPhase.next ? get.attitude(player, _status.currentPhase.next) > 0 : false);
                            }
                            ('step 1');
                            if (result.links?.length) cards = result.links.slice(0);
                            while (cards.length) {
                                var card = cards.pop();
                                if (get.position(card, true) == 'o') {
                                    card.fix();
                                    ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                    game.log(player, '将', card, '置于牌堆顶');
                                }
                            }
                            game.updateRoundNumber();
                            if (_status.currentPhase == player) {
                                player.storage.new_reshicai.add(get.type2(trigger.card));
                                player.markSkill('new_reshicai');
                            }
                        },
                        subSkill: {
                            nodiscard: {
                                trigger: {
                                    player: ['phaseAfter'],
                                },
                                forced: true,
                                silent: true,
                                content() {
                                    player.storage.new_reshicai = [];
                                    player.unmarkSkill('new_reshicai');
                                },
                                mod: {
                                    ignoredHandcard(card, player) {
                                        if (player.storage.new_reshicai.includes(get.type2(card))) {
                                            return true;
                                        }
                                    },
                                    cardDiscardable(card, player, name) {
                                        if (name == 'phaseDiscard' && player.storage.new_reshicai.includes(get.type2(card))) return false;
                                    },
                                },
                                popup: false,
                            },
                        },
                    },
                    diy_reqianxun: {
                        intro: {
                            markcount: 'expansion',
                            mark(dialog, storage, player) {
                                var cards = player.getExpansions('diy_reqianxun');
                                if (player.isUnderControl(true)) dialog.addAuto(cards);
                                else return `共有${get.cnNumber(cards.length)}张「谦」`;
                            },
                        },
                        onremove(player, skill) {
                            var cards = player.getExpansions(skill);
                            if (cards.length) player.loseToDiscardpile(cards);
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            target: 'useCardToTarget',
                            player: 'judgeBefore',
                        },
                        filter(event, player) {
                            if (player.countCards('h') == 0) return false;
                            if (event.parent.name == 'phaseJudge') {
                                if (lib.skill.diy_reqianxun.trigger.player == 'judgeBefore') {
                                    return true;
                                }
                                return event.result && event.result.judge != 0;
                            }
                            if (event.name == 'judge') return false;
                            if (event.targets && event.targets.length > 1) return false;
                            if (event.card && get.type(event.card) == 'trick') return true;
                        },
                        content() {
                            var hs = player.getCards('h');
                            player.addToExpansion(hs, 'giveAuto', player).gaintag.add('diy_reqianxun');
                            player.addTempSkill('diy_reqianxun2');
                        },
                        ai: {
                            effect(card, player, target) {
                                if (!target.hasFriend()) return;
                                if (player == target) return;
                                var type = get.type(card);
                                var nh = target.countCards();
                                if (type == 'trick') {
                                    if (!get.tag(card, 'multitarget') || get.info(card).singleCard) {
                                        if (get.tag(card, 'damage')) {
                                            if (nh < 3 || target.hp <= 2) return 0.8;
                                        }
                                        return [1, nh];
                                    }
                                } else if (type == 'delay') {
                                    return [0.5, 0.5];
                                }
                            },
                        },
                    },
                    diy_reqianxun2: {
                        trigger: {
                            player: 'damageEnd',
                        },
                        onremove(player, skill) {
                            if (player.getExpansions('diy_reqianxun').length) {
                                player.gain(player.getExpansions('diy_reqianxun'), 'draw');
                            }
                        },
                        charlotte: true,
                        forced: true,
                        content() {
                            'step 0';
                            var num = Math.min(trigger.num, player.getExpansions('diy_reqianxun').length);
                            player.chooseButton([`【谦逊】你是否拿回至多${num}张「谦」？`, player.getExpansions('diy_reqianxun')], [1, num]).ai = function (button) {
                                return player.getUseValue(button.link);
                            };
                            ('step 1');
                            if (result.links?.length) {
                                var cards = result.links;
                                player.gain(cards, 'draw');
                            }
                            if (!player.getExpansions('diy_reqianxun').length) player.removeSkill('diy_reqianxun2');
                        },
                    },
                    diy_reyiji: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'judgeAfter',
                        },
                        derivation: 'diy_reyiji_faq',
                        forced: true,
                        //当你的判定牌生效后,你可摸一张牌,若结果为:红色,你可以交给至多两名其他角色共计至多两张牌;黑色,你可以将至多四张手牌置于至多两名其他角色的武将牌上,这些角色的下个摸牌阶段开始时获得这些牌.若此次累计至少两张牌被置于这些角色的武将牌上,你摸两张牌
                        content() {
                            'step 0';
                            player.draw();
                            event.color = trigger.result.color;
                            ('step 1');
                            if (event.color != 'red') {
                                event.whitelist = [];
                                event.blacklist = [];
                                event.num = 1;
                            } //QQQ
                            event.given = 0;
                            ('step 2');
                            player.chooseCardTarget({
                                selectCard() {
                                    if (event.color == 'red') return [1, 2 - event.given];
                                    else {
                                        if (event.whitelist.length > 1 || event.whitelist.length + event.blacklist.length > 1) return 1;
                                        return [1, 2];
                                    }
                                },
                                filterTarget(card, player, target) {
                                    if (event.color == 'red') return player != target;
                                    else {
                                        if (ui.selected.cards.length && ui.selected.cards.length == 1) {
                                            if (event.whitelist.length == 2 || event.whitelist.length + event.blacklist.length == 2) return event.whitelist.includes(target);
                                            return player != target && !event.blacklist.includes(target);
                                        }
                                        return player != target && !event.blacklist.includes(target) && !event.whitelist.includes(target);
                                    }
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
                                prompt: `【遗计】结果为${get.translation(event.color)},请选择要送人的牌`,
                            });
                            ('step 3');
                            if (result.cards?.length) {
                                //QQQ
                                if (event.color == 'red') {
                                    player.line(result.targets, 'green');
                                    result.targets[0].gain(result.cards, player, 'giveAuto');
                                    event.given += result.cards.length;
                                    if (event.given < 2) event.goto(2);
                                } else {
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    if (result.targets[0].hasSkill('diy_reyiji2')) {
                                        result.targets[0].storage.diy_reyiji2 = result.targets[0].storage.diy_reyiji2.concat(result.cards);
                                    } else {
                                        result.targets[0].addSkill('diy_reyiji2');
                                        result.targets[0].storage.diy_reyiji2 = result.cards;
                                        result.targets[0].storage.diy_reyiji3 = player;
                                    }
                                    player.$give(result.cards.length, result.targets[0], false);
                                    player.line(result.targets, 'green');
                                    game.addVideo('storage', result.targets[0], ['diy_reyiji2', get.cardsInfo(result.targets[0].storage.diy_reyiji2), 'cards']);
                                    event.given += result.cards.length;
                                    if (event.given > 1 && event.num == 1) {
                                        player.draw(2);
                                        event.num--;
                                    }
                                    if (result.cards.length < 2) {
                                        if (event.whitelist.includes(result.targets[0])) {
                                            event.whitelist.remove(result.targets[0]);
                                            event.blacklist.push(result.targets[0]);
                                        } else event.whitelist.push(result.targets[0]);
                                    } else event.blacklist.push(result.targets[0]);
                                    if (
                                        event.blacklist.length < 2 &&
                                        event.blacklist.length <
                                        game.countPlayer(function (current) {
                                            return current != player;
                                        })
                                    )
                                        event.goto(2);
                                }
                            }
                        },
                    },
                    rechouce: {
                        audio: 'ext:群阴汇聚/audio:2',
                        forced: true,
                        trigger: {
                            player: 'judgeAfter',
                        },
                        content() {
                            'step 0';
                            event.color = trigger.result.color;
                            if (event.color == 'black') {
                                player
                                    .chooseTarget('弃置一名角色区域内的一张牌', function (card, player, target) {
                                        return target.countCards('hej');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (att < 0) {
                                            att = -Math.sqrt(-att);
                                        } else {
                                            att = Math.sqrt(att);
                                        }
                                        return att * lib.card.guohe.ai.result.target(player, target);
                                    });
                            } else {
                                var next = player.chooseTarget('令一名角色摸一张牌');
                                if (player.storage.xianfu2 && player.storage.xianfu2.length) {
                                    next.set('prompt2', `(若目标为${get.translation(player.storage.xianfu2)}则改为摸两张牌)`);
                                }
                                next.set('ai', function (target) {
                                    var player = _status.event.player;
                                    var att = get.attitude(player, target) / Math.sqrt(1 + target.countCards('h'));
                                    if (player.storage.xianfu2 && player.storage.xianfu2.includes(target)) return att * 2;
                                    return att;
                                });
                            }
                            ('step 1');
                            if (result.targets?.length) {
                                var target = result.targets[0];
                                player.line(target, 'green');
                                if (event.color == 'black') {
                                    player.discardPlayerCard(target, 'hej', true);
                                    if (
                                        game.hasPlayer(function (target) {
                                            return target.special_identity == 'identity_junshi';
                                        }) &&
                                        get.population('fan') >= 3
                                    ) {
                                        if (!event.jshi) {
                                            event.jshi = true;
                                            event.goto(0);
                                        }
                                    }
                                } else {
                                    if (player.storage.xianfu2 && player.storage.xianfu2.includes(target)) {
                                        if (!target.storage.xianfu_mark) target.storage.xianfu_mark = [];
                                        target.storage.xianfu_mark.add(player);
                                        target.storage.xianfu_mark.sortBySeat();
                                        target.markSkill('xianfu_mark');
                                        target.draw(2);
                                    } else {
                                        target.draw();
                                    }
                                }
                            }
                        },
                    },
                    retiandu: {
                        group: ['retiandu_tiandu', 'retiandu_zisha'],
                        audio: 'ext:群阴汇聚/audio:2',
                        audioname2: {
                            re_xizhicai: 'retiandu_xzc',
                        },
                        trigger: {
                            player: 'damageEnd',
                        },
                        forced: true,
                        content() {
                            'step 0';
                            event.num = Math.min(trigger.num, 9);
                            ('step 1');
                            player.judge(function (card) {
                                if (card.suit == 'heart' && card.number >= 2 && card.number <= 9) return 2;
                                return -0.5;
                            }).judge2 = function (result) {
                                return result.bool;
                            };
                            ('step 2');
                            if (result.bool) player.recover();
                            event.num--;
                            if (event.num > 0) player.chooseBool(get.prompt2('retiandu')).set('frequentSkill', 'retiandu');
                            else event.finish();
                            ('step 3');
                            if (result.bool) {
                                event.goto(1);
                            }
                        },
                        subSkill: {
                            tiandu: {
                                audio: 'retiandu',
                                audioname2: {
                                    re_xizhicai: 'retiandu_xzc',
                                },
                                prompt: '当你的判定牌生效后,你可获得之',
                                frequent() {
                                    return !lib.config.autoskilllist.includes('retiandu');
                                },
                                audioname: ['re_guojia', 'xizhicai', 'gz_nagisa'],
                                trigger: {
                                    player: ')',
                                },
                                check(event) {
                                    if (event.result.card.name == 'du') return false;
                                    return true;
                                },
                                filter(event, player) {
                                    return get.position(event.result.card, true) == 'o';
                                },
                                content() {
                                    player.gain(trigger.result.card, 'gain2');
                                },
                            },
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
                    retiandu_xzc: {
                        audio: 'ext:群阴汇聚/audio:2',
                    },
                    reguding_skill: {
                        equipSkill: true,
                        audio: 'guding_skill',
                        trigger: {
                            source: 'damageBegin1',
                        },
                        filter(event, player) {
                            if (event.player.countCards('h') && event.player.countCards('e') && !event.player.countCards('j') && !event.player.isLinked() && !event.player.isTurnedOver()) return false;
                            if (event.card && event.card.name == 'sha') {
                                return true;
                            }
                            return false;
                        },
                        forced: true,
                        content() {
                            if (!trigger.player.countCards('h')) trigger.num++;
                            if (!trigger.player.countCards('e')) trigger.num++;
                            if (trigger.player.countCards('j')) trigger.num++;
                            if (trigger.player.isLinked()) trigger.num++;
                            if (trigger.player.isTurnedOver()) trigger.num++;
                        },
                        ai: {
                            damageBonus: true,
                            effect: {
                                player(card, player, target, current) {
                                    if (
                                        card.name == 'sha' &&
                                        !target.hasSkillTag('filterDamage', null, {
                                            player: player,
                                            card: card,
                                        })
                                    )
                                        return [1, 0, 1, -3];
                                },
                            },
                        },
                    },
                    sizhan: {
                        audio: 'ext:群阴汇聚/audio:2',
                        limited: true,
                        enable: 'phaseUse',
                        mark: true,
                        content() {
                            'step 0';
                            player.awakenSkill('sizhan');
                            player.storage.sizhan = true;
                            player.recover(player.getDamagedHp());
                            ('step 1');
                            _status._aozhan = true;
                            ui.aozhan = ui.create.div('.touchinfo.left', ui.window);
                            ui.aozhan.innerHTML = '鏖战模式';
                            if (ui.time3) ui.time3.style.display = 'none';
                            ui.aozhanInfo = ui.create.system('鏖战模式', null, true);
                            game.playBackgroundMusic();
                            game.countPlayer(function (current) {
                                current.addSkill('aozhan');
                            });
                        },
                        intro: {
                            content: 'limited',
                        },
                        init(player, skill) {
                            player.storage[skill] = false;
                        },
                    },
                    rejiyuan: {
                        trigger: {
                            global: ['dying', 'dyingAfter'],
                            source: 'gainAfter',
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        filter(event, player) {
                            if (event.name == 'dying') return event.player.isAlive();
                            return event.player != player && event.bySelf != true;
                        },
                        check(event, player) {
                            return get.attitude(player, event.player) > 0;
                        },
                        logTarget: 'player',
                        content() {
                            trigger.player.draw('nodelay');
                        },
                        group: ['rejiyuan_zhanji'],
                        subSkill: {
                            zhanji: {
                                trigger: {
                                    player: 'gainAfter',
                                },
                                audio: 'rejiyuan',
                                prompt: '是否摸一张牌？',
                                filter(event, player) {
                                    return event.getParent(2).name != 'rejiyuan' && event.getParent(2).name != 'rejiyuan_zhanji';
                                },
                                content() {
                                    player.draw('nodelay');
                                },
                                audioname2: {
                                    old_yuanshu: 'weidi',
                                },
                            },
                        },
                        audioname2: {
                            old_yuanshu: 'weidi',
                        },
                    },
                    rejijie: {
                        enable: 'phaseUse',
                        trigger: {
                            global: 'dying',
                        },
                        filter(event, player) {
                            return !player.hasSkill('rejijie2');
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        content() {
                            'step 0';
                            player.addTempSkill('rejijie2');
                            //event.card=ui.cardPile.lastChild;
                            event.card = get.bottomCards()[0];
                            var content = ['牌堆底的一张牌', [event.card]];
                            game.log(player, '观看了牌堆底的一张牌');
                            player.chooseControl('ok').set('dialog', content);
                            ('step 1');
                            player
                                .chooseTarget('选择获得此牌的角色')
                                .set('ai', function (target) {
                                    var att = get.attitude(_status.event.player, target);
                                    if (_status.event.du) {
                                        if (target.hasSkillTag('nodu')) return 0.5;
                                        return -att;
                                    }
                                    if (att > 0) {
                                        if (_status.event.player != target) att += 2;
                                        return att + Math.max(0, 5 - target.countCards('h'));
                                    }
                                    return att;
                                })
                                .set('du', event.card.name == 'du');
                            ('step 2');
                            if (result.targets?.length) {
                                event.target = result.targets[0];
                                player.line(event.target, 'green');
                                player.give(event.card, event.target);
                            } else ui.cardPile.appendChild(event.card);
                            game.updateRoundNumber();
                        },
                        ai: {
                            order: 7.2,
                            result: {
                                player: 1,
                            },
                        },
                        audioname2: {
                            old_yuanshu: 'weidi',
                        },
                    },
                    old_retiandu_zisha: {
                        audio: 'retiandu',
                        forced: true,
                        trigger: {
                            player: 'phaseJieshuBegin',
                        },
                        content() {
                            'step 0';
                            player.loseHp();
                            player.draw();
                            ('step 1');
                            player.judge(function (card) {
                                if (card.number >= 2 && card.number <= 9 && ['spade', 'club', 'diamond'].includes(card.suit)) return -1;
                                return 0;
                            });
                            ('step 2');
                            if (result.number >= 2 && result.number <= 9 && ['spade', 'club', 'diamond'].includes(result.suit)) {
                                var na = null;
                                switch (result.suit) {
                                    case 'spade':
                                        na = 'thunder';
                                        break;
                                    case 'diamond':
                                        na = 'fire';
                                        break;
                                }
                                player.damage(na, 'nosource');
                            }
                        },
                    },
                    old_retiandu_xzc_zisha: {
                        audio: 'retiandu_xzc',
                        forced: true,
                        trigger: {
                            player: 'phaseJieshuBegin',
                        },
                        content() {
                            'step 0';
                            player.loseHp();
                            player.draw();
                            ('step 1');
                            player.judge(function (card) {
                                if (card.number >= 2 && card.number <= 9 && ['spade', 'club', 'diamond'].includes(card.suit)) return -1;
                                return 0;
                            });
                            ('step 2');
                            if (result.number >= 2 && result.number <= 9 && ['spade', 'club', 'diamond'].includes(result.suit)) {
                                var na = null;
                                switch (result.suit) {
                                    case 'spade':
                                        na = 'thunder';
                                        break;
                                    case 'diamond':
                                        na = 'fire';
                                        break;
                                }
                                player.damage(na, 'nosource');
                            }
                        },
                    },
                    retiandu_zisha: {
                        audio: 'retiandu',
                        audioname2: {
                            re_xizhicai: 'retiandu_xzc',
                        },
                        forced: true,
                        trigger: {
                            player: 'phaseJieshuBegin',
                        },
                        content() {
                            'step 0';
                            player.loseHp();
                            player.draw();
                            ('step 1');
                            player.judge();
                        },
                    },
                    diy_refanghun: {
                        mod: {
                            aiValue(player, card, num) {
                                if (card.name != 'sha' && card.name != 'shan') return;
                                var geti = function () {
                                    var cards = player.getCards('hs', function (card) {
                                        return card.name == 'sha' || card.name == 'shan';
                                    });
                                    if (cards.includes(card)) {
                                        return cards.indexOf(card);
                                    }
                                    return cards.length;
                                };
                                return Math.max(num, [7, 5, 5, 3][Math.min(geti(), 3)]);
                            },
                        },
                        hiddenCard(player, name) {
                            if (!player.storage.fanghun || player.storage.fanghun <= 0) return false;
                            if (name == 'tao') return player.countCards('hs', 'jiu') > 0;
                            if (name == 'jiu') return player.countCards('hs', 'tao') > 0;
                            return false;
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        forced: true,
                        trigger: {
                            player: ['useCard', 'damageEnd'],
                            target: 'useCardToTargeted',
                            source: 'damageSource',
                        },
                        marktext: '影',
                        intro: {
                            content: 'mark',
                            name: '梅影',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        content() {
                            player.addMark('diy_refanghun', trigger.num || 1);
                            player.addMark('diy_refanghun2', trigger.num || 1, false);
                        },
                        group: ['diy_refanghun_sha', 'diy_refanghun_draw', 'diy_refanghun_strat', 'diy_refanghun_shanafter', 'diy_refanghun_shamiss', 'diy_xinlongdan_draw', 'diy_xinlongdan_chongzhen1', 'diy_xinlongdan_chongzhen2'],
                        subSkill: {
                            draw: {
                                audio: 'diy_refanghun',
                                trigger: {
                                    player: ['useCard', 'respond'],
                                },
                                forced: true,
                                popup: false,
                                filter(event, player) {
                                    return event.skill == 'diy_refanghun_sha';
                                },
                                content() {
                                    player.draw();
                                },
                            },
                            sha: {
                                enable: ['chooseToUse', 'chooseToRespond'],
                                prompt: '【龙胆】弃置一<梅影>,将杀当做闪,或将闪当做杀,或将桃当做酒,或将酒当做桃使用或打出',
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
                                            if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
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
                                selectCard: 1,
                                position: 'hs',
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
                                    if (!player.storage.diy_refanghun || player.storage.diy_refanghun < 0) return false;
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
                                    player.removeMark('diy_refanghun', 1);
                                },
                                ai: {
                                    respondSha: true,
                                    respondShan: true,
                                    save: true,
                                    skillTagFilter(player, tag) {
                                        if (!player.storage.diy_refanghun || player.storage.diy_refanghun < 0) return false;
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
                                        if (!player.countCards('hs', name)) return false;
                                    },
                                    order(item, player) {
                                        if (player && _status.event.type == 'phase') {
                                            var max = 0;
                                            var list = ['sha', 'tao', 'jiu'];
                                            var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                            for (var i = 0; i < list.length; i++) {
                                                var name = list[i];
                                                if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
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
                            strat: {
                                audio: 'diy_refanghun',
                                forced: true,
                                trigger: {
                                    global: 'phaseBefore',
                                    player: 'enterGame',
                                },
                                filter(event, player) {
                                    return !player.hasMark('diy_refanghun') && (event.name != 'phase' || game.phaseNumber == 0);
                                },
                                content() {
                                    player.addMark('diy_refanghun', 1);
                                    player.addMark('diy_refanghun2', 1, false);
                                },
                            },
                            shanafter: {
                                audio: 'diy_refanghun',
                                audioname2: {
                                    diy_re_zhaoyun: 'diy_longdan',
                                },
                                trigger: {
                                    player: 'useCard',
                                },
                                filter(event, player) {
                                    return ['diy_refanghun_sha', 'diy_longdan'].includes(event.skill) && event.getParent(2).name == 'sha';
                                },
                                forced: true,
                                content() {
                                    'step 0';
                                    player
                                        .chooseTarget('是否发动【龙胆】令一名其他角色回复1点体力？', function (card, player, target) {
                                            return target != _status.event.source && target != player && target.isDamaged();
                                        })
                                        .set('ai', function (target) {
                                            return get.attitude(_status.event.player, target);
                                        })
                                        .set('source', trigger.getParent(2).player);
                                    ('step 1');
                                    if (result.targets?.length) {
                                        player.line(result.targets[0], 'green');
                                        result.targets[0].recover();
                                    }
                                },
                            },
                            shamiss: {
                                audio: 'diy_refanghun',
                                audioname2: {
                                    diy_re_zhaoyun: 'diy_longdan',
                                },
                                trigger: {
                                    player: 'shaMiss',
                                },
                                forced: true,
                                filter(event, player) {
                                    return ['diy_refanghun_sha', 'diy_longdan'].includes(event.skill);
                                },
                                content() {
                                    'step 0';
                                    player
                                        .chooseTarget('是否发动【龙胆】对一名其他角色造成1点伤害？', function (card, player, target) {
                                            return target != _status.event.target && target != player;
                                        })
                                        .set('ai', function (target) {
                                            return -get.attitude(_status.event.player, target);
                                        })
                                        .set('target', trigger.target);
                                    ('step 1');
                                    if (result.targets?.length) {
                                        player.line(result.targets[0], 'green');
                                        result.targets[0].damage();
                                    }
                                },
                            },
                        },
                    },
                    diy_refuhan: {
                        audio: 'ext:群阴汇聚/audio:2',
                        derivation: ['new_rewusheng', 'new_repaoxiao', 'retieji', 'xinliegong', 'xinkuanggu'],
                        trigger: {
                            player: 'phaseBegin',
                        },
                        limited: true,
                        prompt(event, player) {
                            var num = Math.min(20, player.countMark('diy_refanghun2') || 0);
                            num = num + 1;
                            return get.prompt('diy_refuhan') + `(体力上限:${num})`;
                        },
                        filter(event, player) {
                            return player.countMark('diy_refanghun2') >= 4;
                        },
                        content() {
                            'step 0';
                            if (player.countMark('diy_refanghun')) player.draw(player.countMark('diy_refanghun'));
                            player.removeMark('diy_refanghun', player.countMark('diy_refanghun'));
                            var num = Math.min(player.countMark('diy_refanghun2'), 20) + 1 - player.maxHp;
                            if (num > 0) player.gainMaxHp(num);
                            else player.loseMaxHp(-num);
                            player.recover(4);
                            ('step 1');
                            var list = Object.keys(lib.character).filter((q) => lib.character[q][1] == 'shu'); //QQQ
                            player
                                .chooseButton(true)
                                .set('ai', function (button) {
                                    return get.rank(button.link, true) - lib.character[button.link][2];
                                })
                                .set('createDialog', ['获得一张武将牌上的所有技能', [list.randomGets(8), 'character']]);
                            ('step 2');
                            player.addSkill(lib.character[result.links[0]][3]);
                            player.flashAvatar('diy_refuhan', result.links[0]);
                            game.log(player, '获得了', '#g' + get.translation(result.links[0]), '的所有技能');
                            ('step 3');
                            var list = Object.keys(lib.character)
                                .filter((q) => lib.character[q][1] == 'shu')
                                .randomGets(8);
                            var skills = [];
                            for (var i of list) {
                                skills.addArray(lib.character[i][3]);
                            }
                            player.chooseButton(['选择获得一个技能', [list, 'character'], [skills.map((i) => [i, get.translation(i)]), 'tdnodes']]).set('filterButton', (button) => skills.includes(button.link));
                            ('step 4');
                            if (result.links?.length) {
                                player.addSkillLog(result.links);
                            } //QQQ
                            ('step 5');
                            player
                                .chooseControl('new_rewusheng', 'new_repaoxiao', 'diy_retieji', 'diy_reliegong', 'xinkuanggu')
                                .set('prompt', '选择获得一个技能')
                                .set('ai', function () {
                                    var player = _status.event.player;
                                    if (!player.hasSkill('xinkuanggu')) return 'xinkuanggu';
                                    if (!player.hasSkill('diy_reliegong')) return 'diy_reliegong';
                                    if (!player.hasSkill('new_rewusheng') && !player.hasSkill('wusheng')) return 'new_rewusheng';
                                    if (!player.hasSkill('new_repaoxiao') && !player.hasSkill('paoxiao') && !player.hasSkill('olpaoxiao')) return 'new_repaoxiao';
                                    return 'diy_retieji';
                                });
                            ('step 6');
                            player.addSkillLog(result.control);
                        },
                        mark: true,
                        intro: {
                            content: 'limited',
                        },
                        init(player, skill) {
                            player.storage[skill] = false;
                        },
                    },
                    diy_repojun: {
                        shaRelated: true,
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('hej') > 0;
                        },
                        content() {
                            'step 0';
                            var num = Math.min(2 * trigger.target.maxHp, trigger.target.countCards('hej'));
                            var next = player.choosePlayerCard(trigger.target, 'hej', [1, num], get.prompt('diy_repojun', trigger.target));
                            next.set('ai', function (button) {
                                if (!_status.event.goon) return 0;
                                var val = get.value(button.link);
                                if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
                                return val;
                            });
                            next.set('goon', get.attitude(player, trigger.target) <= 0);
                            next.set('forceAuto', true);
                            ('step 1');
                            if (result.cards?.length) {
                                event.cards = result.cards;
                                var target = trigger.target;
                                target.addSkill('diy_repojun2');
                                target.addToExpansion(result.cards, 'giveAuto', target).gaintag.add('diy_repojun2');
                            } else event.finish();
                            ('step 2');
                            var discard = false,
                                draw = false;
                            for (var i of cards) {
                                var type = get.type2(i),
                                    name = i.name;
                                if (type == 'equip') discard = true;
                                if (type == 'trick' || name == 'shan') draw = true;
                            }
                            if (discard) {
                                event.equip = true;
                                player
                                    .chooseButton(
                                        [
                                            '选择一张牌置入弃牌堆',
                                            cards.filter(function (card) {
                                                return get.type(card) == 'equip';
                                            }),
                                        ],
                                        true
                                    )
                                    .set('ai', function (button) {
                                        return get.value(button.link, _status.event.getTrigger().target);
                                    });
                            }
                            if (draw) event.draw = true;
                            ('step 3');
                            if (event.equip && result.links && result.links.length) trigger.target.loseToDiscardpile(result.links);
                            if (event.draw) player.draw();
                        },
                        ai: {
                            unequip: true,
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                if (get.attitude(player, arg.target) > 0) return false;
                                if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                                if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
                                return false;
                            },
                        },
                        group: ['diy_repojun3', 'diy_repojun4'],
                    },
                    diy_repojun2: {
                        trigger: {
                            global: 'phaseEnd',
                        },
                        charlotte: true,
                        forced: true,
                        popup: false,
                        filter(event, player) {
                            return player.getExpansions('diy_repojun2').length;
                        },
                        content() {
                            'step 0';
                            player.chooseCardButton('【破军】请选择获得一张牌', true, player.getExpansions('diy_repojun2')).set('ai', function (button) {
                                return get.value(button.link);
                            });
                            ('step 1');
                            if (result.links?.length) {
                                var card = result.links;
                                player.gain(card, 'draw');
                                game.log(player, '收回了一张〖破军〗牌');
                            }
                            ('step 2');
                            if (player.getExpansions('diy_repojun2').length <= 0) player.removeSkill('diy_repojun2');
                        },
                        intro: {
                            markcount: 'expansion',
                            mark(dialog, storage, player) {
                                var cards = player.getExpansions('diy_repojun2');
                                if (player.isUnderControl(true)) dialog.addAuto(cards);
                                else return `共有${get.cnNumber(cards.length)}张牌`;
                            },
                        },
                    },
                    diy_repojun3: {
                        audio: 'diy_repojun',
                        trigger: {
                            source: 'damageBegin1',
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        prompt(event, player) {
                            return `是否进行一次判定对${get.translation(event.player)}造成更多伤害？`;
                        },
                        logTarget: 'player',
                        content() {
                            'step 0';
                            player.judge(function (card) {
                                return card.number < 9 ? 1 : 2;
                            });
                            ('step 1');
                            var x = Math.ceil(result.number / 8);
                            trigger.num += x;
                        },
                        ai: {
                            damageBonus: true,
                        },
                    },
                    diy_repojun4: {
                        audio: 'diy_repojun',
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
                            if (event._notrigger.includes(event.player)) return false;
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
                    rejieying: {
                        audio: 'ext:群阴汇聚/audio:2',
                        global: 'g_rejieying',
                        ai: {
                            effect: {
                                target(card) {
                                    if (card.name == 'tiesuo') return 'zeroplayertarget';
                                },
                            },
                        },
                        group: ['rejieying_1', 'rejieying_2', 'rejieying_3', 'rejieying_4', 'rejieying_5'],
                        subSkill: {
                            1: {
                                audio: 'rejieying',
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
                                audio: 'rejieying',
                                trigger: {
                                    player: 'phaseJieshuBegin',
                                },
                                forced: true,
                                content() {
                                    'step 0';
                                    player.chooseTarget(true, '请选择【结营】的目标', lib.filter.notMe).ai = function (target) {
                                        return 1 + Math.random();
                                    };
                                    ('step 1');
                                    if (result.targets?.length) {
                                        player.line(result.targets);
                                        result.targets[0].link();
                                    } else {
                                        event.finish();
                                    }
                                },
                            },
                            3: {
                                audio: 'rejieying',
                                trigger: {
                                    global: 'linkBefore',
                                },
                                prompt(event, player) {
                                    return get.translation(event.player) + '想下贼船,是否阻止？';
                                },
                                filter(event, player) {
                                    return event.player != player && event.player.isLinked() == (event.name == 'link');
                                },
                                check(event, player) {
                                    var att = get.attitude(event.player, player);
                                    if (att > 0) return false;
                                    if (att < 0) return true;
                                },
                                content() {
                                    trigger.cancel();
                                },
                            },
                            4: {
                                audio: 'rejieying',
                                trigger: {
                                    player: 'damageBegin4',
                                },
                                filter(event, player) {
                                    if (event.nature) return true;
                                    return false;
                                },
                                forced: true,
                                content() {
                                    'step 0';
                                    event.num = Math.min(trigger.num, 9);
                                    trigger.cancel();
                                    ('step 1');
                                    player.chooseDrawRecover(get.prompt(event.name), true)
                                        ('step 2');
                                    if (result.control != 'cancel2') {
                                        event.num--;
                                        if (event.num > 0) {
                                            event.goto(1);
                                        }
                                    }
                                },
                                ai: {
                                    nofire: true,
                                    nothunder: true,
                                    effect: {
                                        target(card, player, target, current) {
                                            if (get.tag(card, 'natureDamage')) return [0, 2];
                                        },
                                    },
                                },
                            },
                            5: {
                                mod: {
                                    selectTarget(card, player, range) {
                                        if (card.name == 'tiesuo' && Array.isArray(range) && range[1] != -1) range[1] += Infinity;
                                    },
                                },
                            },
                        },
                    },
                    relongnu: {
                        audio: 'ext:群阴汇聚/audio:4',
                        derivation: ['longxi_wusheng', 'diy_tianhuo', 'longyinlei_paoxiao', 'tianlei'],
                        enable: 'phaseUse',
                        usable: 1,
                        content() {
                            'step 0';
                            player.storage.relongnu = true;
                            player.draw();
                            ('step 1');
                            var list = ['longxi_wusheng', 'longyinlei_paoxiao'];
                            player
                                .chooseControl(list, function () {
                                    var player = _status.event.player;
                                    if (player.countCards('h', { type: ['trick', 'delay'] }) > 2 && player.maxHp > 2) return 'longyinlei_paoxiao';
                                    return 'longxi_wusheng';
                                })
                                .set('prompt', get.prompt2('relongnu'));
                            ('step 2');
                            var skill = result.control;
                            player[skill == 'longxi_wusheng' ? 'loseHp' : 'loseMaxHp']();
                            player.addTempSkill(skill, 'phaseEnd');
                        },
                        ai: {
                            order: 10,
                            result: {
                                player: 1,
                            },
                            fireAttack: true,
                            halfneg: true,
                            threaten: 1.05,
                        },
                        group: ['relongnu_jingxie', 'relongnu_jieshu'],
                        subSkill: {
                            jieshu: {
                                trigger: {
                                    player: 'phaseJieshuEnd',
                                },
                                popup: false,
                                silent: true,
                                forced: true,
                                content() {
                                    if (player.storage.relongnu) player.storage.relongnu = false;
                                    else {
                                        player.chooseToDiscard('he', true);
                                    }
                                },
                            },
                            jingxie: {
                                position: 'hes',
                                audio: 'relongnu',
                                enable: 'phaseUse',
                                prompt: '请选择一张【界雌雄双股剑】',
                                filter(event, player) {
                                    var hes = player.getCards('hes');
                                    return hes.some((i) => i.name == 'recixiong');
                                },
                                filterCard: {
                                    name: 'recixiong',
                                },
                                discard: false,
                                lose: false,
                                delay: false,
                                check() {
                                    return 1;
                                },
                                content() {
                                    'step 0';
                                    player.showCards(cards);
                                    ('step 1');
                                    var card = cards[0];
                                    var bool = get.position(card) == 'e';
                                    if (bool) player.removeEquipTrigger(card);
                                    game.addVideo('skill', player, ['relongnu', [bool, get.cardInfo(card)]]);
                                    game.broadcastAll(function (card) {
                                        card.init([card.suit, card.number, 'luanfenghemingjian_' + card.name]);
                                        if (!bool) player.equip(card);
                                    }, card);
                                    if (bool) {
                                        var info = get.info(card);
                                        if (info.skills) {
                                            for (var i = 0; i < info.skills.length; i++) {
                                                player.addSkillTrigger(info.skills[i]);
                                            }
                                        }
                                    }
                                },
                                ai: {
                                    basic: {
                                        order: 10,
                                    },
                                    result: {
                                        player: 1,
                                    },
                                },
                            },
                        },
                    },
                    longxi_wusheng: {
                        mark: true,
                        marktext: '火',
                        intro: {
                            content() {
                                return '本回合你的红色牌均视为火【杀】,你使用火【杀】无距离限制且不能被响应';
                            },
                            name: '龙息·武圣',
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        forced: true,
                        nobracket: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && event.card.nature == 'fire' && player.isPhaseUsing();
                        },
                        content() {
                            trigger.directHit.addArray(game.players);
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
                        },
                        group: ['diy_tianhuo'],
                        ai: {
                            effect: {
                                target(card, player, target, current) {
                                    if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                },
                            },
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                return arg.card.name == 'sha' && get.nature(arg.card) == 'fire';
                            },
                        },
                    },
                    longyinlei_paoxiao: {
                        mark: true,
                        marktext: '雷',
                        intro: {
                            content() {
                                return '本回合你的锦囊牌均视为雷【杀】,你使用雷【杀】无次数限制且无视防具';
                            },
                            name: '龙引雷·咆哮',
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        forced: true,
                        nobracket: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && event.card.nature == 'thunder' && player.isPhaseUsing();
                        },
                        content() {
                            if (trigger.addCount !== false) {
                                trigger.addCount = false;
                                if (player.stat[player.stat.length - 1].card.sha > 0) {
                                    player.stat[player.stat.length - 1].card.sha--;
                                }
                            }
                        },
                        mod: {
                            cardname(card, player) {
                                if (['trick', 'delay'].includes(lib.card[card.name].type)) return 'sha';
                            },
                            cardnature(card, player) {
                                if (['trick', 'delay'].includes(lib.card[card.name].type)) return 'thunder';
                            },
                            cardUsable(card, player) {
                                if (card.name == 'sha' && card.nature == 'thunder') return Infinity;
                            },
                        },
                        group: ['tianlei'],
                        ai: {
                            unequip: true,
                            skillTagFilter(player, tag, arg) {
                                return arg.card.name == 'sha' && get.nature(arg.card) == 'thunder';
                            },
                            effect: {
                                target(card, player, target, current) {
                                    if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                },
                            },
                        },
                    },
                    g_rejieying: {
                        mod: {
                            maxHandcard(player, num) {
                                if (
                                    game.countPlayer(function (current) {
                                        return current.hasSkill('rejieying');
                                    }) > 0 &&
                                    player.isLinked()
                                )
                                    return num + 2;
                            },
                        },
                    },
                    tianlei: {
                        enable: 'phaseUse',
                        usable: 1,
                        audio: 'longyinlei_paoxiao',
                        check(card) {
                            return 10 - get.value(card);
                        },
                        filterCard: true,
                        position: 'he',
                        filterTarget(card, player, target) {
                            return player != target;
                        },
                        content() {
                            'step 0';
                            target.judge(function (card) {
                                if (card.number >= 2 && card.number <= 9 && card.suit == 'spade') return -4;
                                return 0;
                            }).judge2 = function (result) {
                                return result.bool == false ? true : false;
                            };
                            ('step 1');
                            var suit = result.suit,
                                num = result.number;
                            if (num > 1 && num < 10 && suit == 'spade') {
                                target.damage(3, 'thunder');
                                target.skip('phaseUse');
                                target.addTempSkill('tianlei_use', { player: 'phaseUseSkipped' });
                            } else player.draw();
                        },
                        ai: {
                            order: 10,
                            result: {
                                player(player) {
                                    var players = game.filterPlayer();
                                    for (var i of players) {
                                        if (i != player && get.attitude(player, i) <= 1 && get.attitude(i, player) <= 1) {
                                            return 1;
                                        }
                                    }
                                    return 0;
                                },
                                target(player, target) {
                                    return -1;
                                },
                            },
                        },
                        subSkill: {
                            use: {
                                mark: true,
                                marktext: '乐',
                                intro: {
                                    content() {
                                        return '你跳过下个出牌阶段';
                                    },
                                    name: '天雷·乐不思蜀',
                                },
                            },
                        },
                    },
                    diy_tianhuo: {
                        enable: 'phaseUse',
                        usable: 1,
                        audio: 'longxi_wusheng',
                        check(card) {
                            return 10 - get.value(card);
                        },
                        filterCard: true,
                        position: 'he',
                        filterTarget(card, player, target) {
                            return player != target;
                        },
                        content() {
                            'step 0';
                            target.judge(function (card) {
                                if (card.number >= 2 && card.number <= 9 && card.suit == 'heart') return -4;
                                return 0;
                            }).judge2 = function (result) {
                                return result.bool == false ? true : false;
                            };
                            ('step 1');
                            var suit = result.suit,
                                num = result.number;
                            if (num > 1 && num < 10 && suit == 'heart') {
                                target.damage(3, 'fire');
                                target.skip('phaseDraw');
                                target.addTempSkill('tianlei_use', { player: 'phaseDrawSkipped' });
                            } else player.gain(cards, 'gain2');
                        },
                        ai: {
                            order: 10,
                            result: {
                                player(player) {
                                    var players = game.filterPlayer();
                                    for (var i of players) {
                                        if (i != player && get.attitude(player, i) <= 1 && get.attitude(i, player) <= 1) {
                                            return 1;
                                        }
                                    }
                                    return 0;
                                },
                                target(player, target) {
                                    return -1;
                                },
                            },
                        },
                        subSkill: {
                            draw: {
                                mark: true,
                                marktext: '兵',
                                intro: {
                                    content() {
                                        return '你跳过下个摸牌阶段';
                                    },
                                    name: '天火·兵粮寸断',
                                },
                            },
                        },
                    },
                    relimu: {
                        audio: 'ext:群阴汇聚/audio:2',
                        enable: 'phaseUse',
                        forced: true,
                        async content(event, trigger, player) {
                            if (player.countCards('h') >= Math.min(player.maxHp, 5)) {
                                player.draw();
                            } else {
                                player.drawTo(Math.min(5, player.maxHp));
                            }
                            if (player.maxHp < 3) {
                                player.gainMaxHp(3 - player.maxHp);
                            }
                            player.hp = player.maxHp;
                            player.addTempSkill('relimu_extermination', { player: 'phaseUseBefore' });
                        },
                        subSkill: {
                            extermination: {
                                audio: 'relimu',
                                mod: {
                                    globalFrom(from, to, distance) {
                                        return distance - Infinity;
                                    },
                                    cardUsable(card, player) {
                                        return Infinity;
                                    },
                                },
                                forced: true,
                                trigger: {
                                    player: ['loseMaxHpEnd', 'damageEnd', 'loseHpEnd', 'loseMaxHpBefore', 'damageBefore', 'loseHpBefore', 'gainMaxHpAfter', 'gainAfter', 'recoverAfter', 'phaseDiscardBefore', 'phaseJudgeBefore', 'dyingBefore', 'dieBefore', 'turnOverBefore'],
                                    source: 'damageBegin1',
                                },
                                content() {
                                    if (event.triggername == 'loseMaxHpEnd' || event.triggername == 'damageEnd' || event.triggername == 'loseHpEnd' || event.triggername == 'gainMaxHpAfter' || event.triggername == 'gainAfter' || event.triggername == 'recoverAfter') {
                                        if (player.maxHp < 3) {
                                            player.gainMaxHp(3 - player.maxHp);
                                        }
                                        player.hp = player.maxHp;
                                        player.update();
                                    } else if (event.triggername == 'loseMaxHpBefore' || event.triggername == 'damageBefore' || event.triggername == 'loseHpBefore' || event.triggername == 'phaseDiscardBefore' || event.triggername == 'dyingBefore' || event.triggername == 'dieBefore' || event.triggername == 'turnOverBefore' || event.triggername == 'phaseJudgeBefore') {
                                        trigger.cancel();
                                        player.update();
                                    } else trigger.num++;
                                },
                            },
                        },
                    },
                    yice: {
                        derivation: ['rechouce', 'diy_reyiji'],
                        audio: 'ext:群阴汇聚/audio:4',
                        trigger: {
                            player: 'judgeAfter',
                        },
                        forced: true,
                        content() {
                            event.suit = trigger.result.suit;
                            if (event.suit == 'heart') {
                                event.insert(lib.skill.yice.cotx, { player: player });
                                player.say('戏志才:<该我上场表演了.>');
                            } else if (event.suit == 'diamond') {
                                event.insert(lib.skill.yice.coty, { player: player });
                                player.say('郭嘉:<轮到我了.>');
                            } else if (event.suit == 'club') {
                                player.say('郭嘉&戏志才:<草(一种植物).>');
                            } else if (event.suit == 'spade') {
                                player.say('郭嘉&戏志才:<我真是心态炸了鸭.>');
                            }
                        },
                        cotx() {
                            if (!player.hasSkill('rechouce')) {
                                player.addSkill('rechouce');
                            }
                            player.removeSkill('diy_reyiji');
                        },
                        coty() {
                            if (!player.hasSkill('diy_reyiji')) {
                                player.addSkill('diy_reyiji');
                            }
                            player.removeSkill('rechouce');
                        },
                        group: ['yice_start', 'yice_zhunbei'],
                        subSkill: {
                            start: {
                                audio: 'yice',
                                forced: true,
                                trigger: {
                                    global: 'gameDrawAfter',
                                    player: 'enterGame',
                                },
                                content() {
                                    event.insert(lib.skill.yice.cotx, { player: player });
                                },
                            },
                            zhunbei: {
                                audio: 'yice',
                                forced: true,
                                trigger: {
                                    player: 'phaseZhunbeiBefore',
                                },
                                content() {
                                    'step 0';
                                    player.draw();
                                    ('step 1');
                                    player.judge();
                                },
                            },
                        },
                    },
                    retianduEX: {
                        group: ['retianduEX_tiandu', 'retianduEX_juangu'],
                        audio: 'ext:群阴汇聚/audio:5',
                        trigger: {
                            player: 'damageEnd',
                        },
                        forced: true,
                        content() {
                            'step 0';
                            event.num = Math.min(trigger.num, 9);
                            ('step 1');
                            player.judge(function (card) {
                                if (player.isHealthy()) {
                                    if (card.suit == 'heart' && card.number >= 2 && card.number <= 9) return -1;
                                }
                                if (['heart', 'diamond'].includes(card.suit) && card.number >= 2 && card.number <= 9) return 1;
                                return 1;
                            }).judge2 = function (result) {
                                return result.bool;
                            };
                            ('step 2');
                            var suit = result.suit,
                                number = result.number;
                            if (suit == 'heart' && number >= 2 && number <= 9) {
                                if (player.hp < player.maxHp) player.recover();
                            } else if (suit == 'diamond' && number >= 2 && number <= 9) {
                                player.draw();
                            }
                            event.num--;
                            if (event.num > 0) player.chooseBool(get.prompt2('retiandu'));
                            else event.finish();
                            ('step 3');
                            if (result.bool) {
                                event.goto(1);
                            }
                        },
                        subSkill: {
                            tiandu: {
                                prompt: '当你的判定牌生效后,你可获得之',
                                audio: 'retianduEX',
                                trigger: {
                                    player: 'judgeEnd',
                                },
                                frequent(event) {
                                    if (event.result.card.name == 'du') return false;
                                    //if(get.mode()=='guozhan') return false;
                                    return true;
                                },
                                check(event) {
                                    if (event.result.card.name == 'du') return false;
                                    return true;
                                },
                                filter(event, player) {
                                    return get.position(event.result.card, true) == 'o';
                                },
                                content() {
                                    player.gain(trigger.result.card, 'gain2');
                                },
                            },
                            juangu: {
                                trigger: {
                                    player: 'judgeBegin',
                                },
                                forced: true,
                                silent: true,
                                filter(event, player) {
                                    return !event.directresult;
                                },
                                content() {
                                    var tempcard = false,
                                        temp = -Infinity;
                                    for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                        var card = ui.cardPile.childNodes[i];
                                        var temp2 = trigger.judge(card);
                                        if (temp2 > temp) {
                                            tempcard = card;
                                            temp = temp2;
                                        }
                                    }
                                    if (tempcard) trigger.directresult = tempcard;
                                },
                                ai: {
                                    luckyStar: true,
                                },
                                popup: false,
                            },
                        },
                        ai: {
                            maixie: true,
                            maixie_hp: true,
                        },
                    },
                    recixiong_skill: {
                        equipSkill: true,
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        audio: 'cixiong_skill',
                        logTarget: 'target',
                        check(event, player) {
                            if (get.attitude(player, event.target) > 0) return true;
                            var target = event.target;
                            return target.countCards('h') == 0 || !target.hasSkillTag('noh');
                        },
                        filter(event, player) {
                            if (event.card.name != 'sha') return false;
                            return player.differentSexFrom(event.target);
                        },
                        content() {
                            'step 0';
                            if (trigger.target.countCards('h')) trigger.target.chooseToDiscard('h', true);
                            player.draw();
                        },
                    },
                    diy_retuxi: {
                        audio: 'ext:群阴汇聚/audio:2',
                        usable: 1,
                        trigger: {
                            player: 'phaseDrawEnd',
                        },
                        forced: true,
                        filter(event, player) {
                            return (
                                event.num > 0 &&
                                game.hasPlayer(function (current) {
                                    return current.countGainableCards(player, 'h') > 0 && player != current;
                                })
                            );
                        },
                        content() {
                            'step 0';
                            var num = Math.max(trigger.num, 2);
                            if (get.mode() == 'guozhan' && num != 2) num = 2;
                            player.chooseCardTarget({
                                selectCard: [1, num],
                                filterTarget(card, player, target) {
                                    return target.countGainableCards(player, 'h') > 0 && player != target;
                                },
                                selectTarget() {
                                    return ui.selected.cards.length;
                                },
                                ai1(card) {
                                    var player = _status.event.player;
                                    return get.attitude(player, player.next) > 0 ? 9 - get.value(card) : get.unuseful(card);
                                },
                                ai2(target) {
                                    var att = get.attitude(_status.event.player, target);
                                    if (target.hasSkill('tuntian')) return att / 10;
                                    return 1 - att;
                                },
                                prompt: get.prompt2('diy_retuxi'),
                            });
                            ('step 1');
                            if (result.targets?.length) {
                                result.targets.sortBySeat();
                                game.log(player, '将', get.cnNumber(result.cards.length), '张牌置于了牌堆顶');
                                player.lose(result.cards, ui.cardPile, 'insert');
                                player.$throw(result.cards.length, 1000);
                                player.gainMultiple(result.targets, 'h');
                            }
                        },
                        ai: {
                            threaten: 1.6,
                            expose: 0.2,
                        },
                    },
                    cuifeng: {
                        subSkill: {
                            backup: {
                                filterCard(card) {
                                    return _status.event.cards && _status.event.cards.includes(card);
                                },
                                viewAs: {
                                    name: 'chuqibuyi',
                                },
                                ai: {
                                    basic: {
                                        order: 5,
                                        useful: 2,
                                        value: 6,
                                    },
                                    yingbian(card, player, targets, viewer) {
                                        if (get.attitude(viewer, player) <= 0) return 0;
                                        if (
                                            game.hasPlayer(function (current) {
                                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                            })
                                        )
                                            return 6;
                                        return 0;
                                    },
                                    result: {
                                        target(player, target, cardx) {
                                            if (player.hasSkillTag('viewHandcard', null, target, true))
                                                return target.countCards('h', function (card) {
                                                    return card.suit != cardx.suit;
                                                }) > 0
                                                    ? -1.5
                                                    : 0;
                                            return -1.4;
                                        },
                                    },
                                    tag: {
                                        damage: 1,
                                    },
                                },
                            },
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'gainAfter',
                        },
                        usable: 1,
                        filter(event, player) {
                            return event.cards && event.cards.length && event.parent.name != 'draw' && !_status.dying.length;
                        },
                        forced: true,
                        content() {
                            'step 0';
                            var next = player.chooseToUse();
                            next.set('cards', trigger.cards);
                            next.set('openskilldialog', get.prompt2('cuifeng'));
                            next.set('norestore', true);
                            next.set('_backupevent', 'cuifeng_backup');
                            next.set('custom', {
                                add: {},
                                replace: { window() { } },
                            });
                            next.backup('cuifeng_backup');
                            ('step 1');
                            if (!result.bool) player.getStat('triggerSkill').cuifeng--;
                        },
                    },
                    reyeyan: {
                        audio: 'ext:群阴汇聚/audio:2',
                        enable: 'phaseUse',
                        usable: 1,
                        filter(event, player) {
                            var suit = [];
                            for (var i = 0; i < player.countCards('he'); i++) {
                                suit.add(get.suit(player.getCards('he')[i]));
                            }
                            return suit.length == 4;
                        },
                        filterCard(card) {
                            var suit = card.suit;
                            return ui.selected.cards.every((i) => i.suit != suit);
                        },
                        selectCard: 4,
                        position: 'he',
                        complexCard: true,
                        check(card) {
                            return 6 - get.value(card);
                        },
                        content() {
                            'step 0';
                            player.loseHp(3);
                            event.targets = get.players(lib.sort.seat);
                            ('step 1');
                            var num = [1, 2, 3].randomGet();
                            if (get.isLuckyStar(player) || game.countPlayer() <= 2) num = 3;
                            if (event.targets.length) {
                                var current = event.targets.shift();
                                if (current.isIn()) {
                                    player.line(current, 'fire');
                                    current.damage(num, 'fire');
                                    event.redo();
                                }
                            }
                            ('step 2');
                            var card1 = get.cardPile('rezhuque', 'field'),
                                card2 = get.cardPile('chiyanzhenhunqin_rezhuque', 'field');
                            if (card1) {
                                player.gain(card1, 'gain2');
                            } else if (card2) {
                                player.gain(card2, 'gain2');
                            }
                        },
                        ai: {
                            basic: {
                                order: 10,
                            },
                            result: {
                                player(player) {
                                    if (player.hp < 3) return -1;
                                    var num = game.countPlayer(function (current) {
                                        var eff = get.sgn(get.damageEffect(current, player, player, 'fire'));
                                        if (current.hp == 1) eff *= 1.5;
                                        return eff;
                                    });
                                    return num;
                                },
                            },
                        },
                        group: ['reyeyan_huoshen'],
                        subSkill: {
                            huoshen: {
                                audio: 'reyeyan',
                                trigger: {
                                    player: 'damageBegin4',
                                },
                                forced: true,
                                filter(event, player) {
                                    return event.nature == 'fire';
                                },
                                content() {
                                    'step 0';
                                    event.num = Math.min(trigger.num, 9);
                                    trigger.cancel();
                                    ('step 1');
                                    player.chooseDrawRecover(get.prompt(event.name), true)
                                        ('step 2');
                                    if (result.control != 'cancel2') {
                                        event.num--;
                                        if (event.num > 0) {
                                            event.goto(1);
                                        }
                                    }
                                },
                                ai: {
                                    nofire: true,
                                    effect: {
                                        target(card) {
                                            if (get.tag(card, 'fireDamage')) return [0, 2];
                                        },
                                    },
                                },
                            },
                        },
                    },
                    reqinyin: {
                        audio: 'ext:群阴汇聚/audio:2',
                        position: 'hes',
                        enable: 'phaseUse',
                        prompt: '请选择一张【界朱雀羽扇】',
                        filter(event, player) {
                            var hes = player.getCards('hes');
                            return hes.some((i) => i.name == 'rezhuque');
                        },
                        filterCard: {
                            name: 'rezhuque',
                        },
                        discard: false,
                        lose: false,
                        delay: false,
                        check() {
                            return 1;
                        },
                        content() {
                            'step 0';
                            player.showCards(cards);
                            ('step 1');
                            var card = cards[0];
                            var bool = get.position(card) == 'e';
                            if (bool) player.removeEquipTrigger(card);
                            game.addVideo('skill', player, ['reqinyin', [bool, get.cardInfo(card)]]);
                            game.broadcastAll(function (card) {
                                card.init([card.suit, card.number, 'chiyanzhenhunqin_' + card.name]);
                                if (!bool) player.equip(card);
                            }, card);
                            if (bool) {
                                var info = get.info(card);
                                if (info.skills) {
                                    for (var i = 0; i < info.skills.length; i++) {
                                        player.addSkillTrigger(info.skills[i]);
                                    }
                                }
                            }
                        },
                        ai: {
                            basic: {
                                order: 10,
                            },
                            result: {
                                player: 1,
                            },
                        },
                        group: 'reqinyin_1',
                        subSkill: {
                            1: {
                                audio: 'reqinyin',
                                trigger: {
                                    player: ['chooseToCompareAfter', 'compareMultipleAfter', 'judgeAfter', 'phaseJieshuBegin', 'phaseUseEnd', 'phaseDiscardEnd'],
                                    target: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                },
                                filter(event, player) {
                                    if (event.preserve) return false;
                                    return !event.preserve;
                                },
                                content() {
                                    'step 0';
                                    player.draw(2);
                                    event.forceDie = true;
                                    if (typeof event.count != 'number') {
                                        // event.count=trigger.cards.length-1;
                                        event.count = 1;
                                    }
                                    var recover = 0,
                                        damage = 0,
                                        players = game.filterPlayer();
                                    players.remove(player);
                                    for (var i of players) {
                                        if (i.hp < i.maxHp) {
                                            if (get.attitude(player, i) > 0) {
                                                if (i.hp < 2) {
                                                    damage--;
                                                    recover += 0.5;
                                                }
                                                damage--;
                                                recover++;
                                            } else if (get.attitude(player, i) < 0) {
                                                if (i.hp < 2) {
                                                    damage++;
                                                    recover -= 0.5;
                                                }
                                                damage++;
                                                recover--;
                                            }
                                        } else {
                                            if (get.attitude(player, i) > 0) damage--;
                                            else if (get.attitude(player, i) < 0) damage++;
                                        }
                                    }
                                    var prompt = get.prompt('reqinyin') + `(剩余${get.cnNumber(event.count)}次)`;
                                    player.chooseControl('造成伤害', '回复体力', 'cancel2', ui.create.dialog(get.prompt('reqinyin'), 'hidden')).ai = function () {
                                        if (damage > recover && damage > 0) return 0;
                                        if (damage < recover && recover > 0) return 1;
                                        return 2;
                                    };
                                    ('step 1');
                                    if (result.control == 'cancel2') {
                                        event.finish();
                                    } else {
                                        event.bool = result.control == '回复体力';
                                        event.num = 0;
                                        event.players = game.filterPlayer();
                                    }
                                    ('step 2');
                                    if (event.num < event.players.length) {
                                        var target = event.players[event.num];
                                        if (event.bool) {
                                            target.recover();
                                        } else {
                                            target.damage('fire');
                                        }
                                        event.num++;
                                        event.redo();
                                    }
                                    ('step 3');
                                    if (event.count > 1) {
                                        event.count--;
                                        event.goto(0);
                                    }
                                },
                                ai: {
                                    expose: 0.1,
                                    threaten: 2,
                                },
                            },
                        },
                    },
                    rezhuque_skill: {
                        equipSkill: true,
                        mod: {
                            cardUsable(card, player) {
                                if (card.name == 'sha' && card.nature == 'fire') return Infinity;
                            },
                        },
                        trigger: {
                            player: 'useCard1',
                        },
                        filter(event, player) {
                            if (event.card.name == 'sha' && !event.card.nature) return true;
                        },
                        audio: 'zhuque_skill',
                        check(event, player) {
                            var eff = 0;
                            for (var i = 0; i < event.targets.length; i++) {
                                var target = event.targets[i];
                                var eff1 = get.damageEffect(target, player, player);
                                var eff2 = get.damageEffect(target, player, player, 'fire');
                                eff += eff2;
                                eff -= eff1;
                            }
                            return eff >= 0;
                        },
                        content() {
                            trigger.card.nature = 'fire';
                            if (get.itemtype(trigger.card) == 'card') {
                                var next = game.createEvent('zhuque_clear');
                                next.card = trigger.card;
                                event.next.remove(next);
                                trigger.after.push(next);
                                next.setContent(function () {
                                    delete card.nature;
                                });
                            }
                        },
                    },
                    luanfenghemingjian_recixiong_skill: {
                        equipSkill: true,
                        inherit: 'recixiong_skill',
                        filter(event, player) {
                            if (event.card.name != 'sha') return false;
                            return lib.linked.includes(event.card.nature);
                        },
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        audio: 'longfenghemingjian',
                        logTarget: 'target',
                        check(event, player) {
                            if (get.attitude(player, event.target) > 0) return true;
                            var target = event.target;
                            return target.countCards('h') == 0 || !target.hasSkillTag('noh');
                        },
                        content() {
                            'step 0';
                            if (trigger.target.countCards('h')) trigger.target.chooseToDiscard('h', true);
                            player.draw();
                        },
                    },
                    chiyanzhenhunqin_rezhuque_skill: {
                        equipSkill: true,
                        mod: {
                            cardUsable(card, player) {
                                if (card.name == 'sha' && card.nature == 'fire') return Infinity;
                            },
                            targetInRange(card) {
                                if (card.name == 'sha' && card.nature == 'fire') return true;
                            },
                            cardnature(card, player) {
                                if (card.name == 'sha') return 'fire';
                            },
                        },
                        trigger: {
                            source: 'damageBefore',
                        },
                        forced: true,
                        content() {
                            trigger.nature = 'fire';
                        },
                        group: ['chiyanzhenhunqin_rezhuque_skill_damage'],
                        subSkill: {
                            damage: {
                                equipSkill: true,
                                trigger: {
                                    source: 'damageSource',
                                },
                                forced: true,
                                filter(event, player) {
                                    return event.num > 0 && event.nature == 'fire';
                                },
                                content() {
                                    player.damage('fire', trigger.num, 'nosource');
                                },
                            },
                        },
                    },
                    fenying: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'loseAfter',
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        filter(event, player) {
                            if (player.countCards('h')) return false;
                            var evt = event.getl(player);
                            return evt && evt.hs && evt.hs.length;
                        },
                        content() {
                            'step 0';
                            player.draw();
                            ('step 1');
                            var nolink = false;
                            var num = trigger.getl(player).hs.length,
                                num2 = num - 1;
                            var choiceList = [`横置至多${num}名角色`, `对一名已横置的其他角色造成1点火焰伤害,可以令除其外的至多${num2}名其他角色各摸一张牌,若该角色没有手牌,其多摸一张牌`];
                            if (
                                !game.hasPlayer(function (current) {
                                    return current.isLinked() && current != player;
                                })
                            ) {
                                choiceList.remove(`对一名已横置的其他角色造成1点火焰伤害,可以令除其外的至多${num2}名其他角色各摸一张牌,若该角色没有手牌,其多摸一张牌`);
                            }
                            if (_status.dying.length) {
                                choiceList.remove(`对一名已横置的其他角色造成1点火焰伤害,可以令除其外的至多${num2}名其他角色各摸一张牌,若该角色没有手牌,其多摸一张牌`);
                            }
                            if (
                                !game.hasPlayer(function (current) {
                                    return !current.isLinked();
                                })
                            ) {
                                choiceList.remove(`横置至多${num}名角色`);
                                nolink = true;
                            }
                            if (choiceList.length == 1) event._result = { index: nolink ? 1 : 0 };
                            else if (choiceList.length)
                                player
                                    .chooseControl()
                                    .set('prompt', '【焚营】请选择一项')
                                    .set('choiceList', choiceList)
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        if (
                                            (num == 1 &&
                                                game.hasPlayer(function (current) {
                                                    return get.attitude(player, current) < 0 && current.isLinked() && current != player;
                                                })) ||
                                            game.hasPlayer(function (current) {
                                                return get.attitude(player, current) < 0 && current.isLinked() && current != player && current.hp <= 1 && (!player.isLinked() || player.hp > 1);
                                            })
                                        )
                                            return _status.event.nolink ? 0 : 1;
                                        if (
                                            game.hasPlayer(function (current) {
                                                return get.attitude(player, current) < 0 && !current.isLinked() && current != player;
                                            })
                                        )
                                            return 0;
                                    })
                                    .set('nolink', event.nolink);
                            else event.finish();
                            ('step 2');
                            event.index = result.index;
                            var num = trigger.getl(player).hs.length,
                                nolinks = game.countPlayer(function (current) {
                                    return !current.isLinked();
                                });
                            if (event.index == 0) {
                                player.chooseTarget('【焚营】选择横置目标', [1, Math.min(num, nolinks)], true, function (card, player, target) {
                                    return !target.isLinked();
                                }).ai = function (target) {
                                    var player = _status.event.player;
                                    return -get.attitude(player, target);
                                };
                            } else {
                                player.chooseTarget('【焚营】选择目标造成伤害', true, function (card, player, target) {
                                    return target.isLinked() && target != player;
                                }).ai = function (target) {
                                    var player = _status.event.player;
                                    if (get.damageEffect(target, player, player, 'fire') > 0 && target.hp <= 1) return 15;
                                    return get.damageEffect(target, player, player, 'fire');
                                };
                            }
                            ('step 3');
                            var num = trigger.getl(player).hs.length - 1;
                            if (result.targets?.length) {
                                var players = game.countPlayer(function (current) {
                                    var player = _status.event.player;
                                    return ![player, result.targets[0]].includes(current);
                                });
                                player.line(result.targets);
                                if (event.index == 0) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        if (!result.targets[i].isLinked()) result.targets[i].link(true);
                                    }
                                    event.finish();
                                } else {
                                    result.targets[0].damage('fire');
                                    if (num > 0)
                                        player.chooseTarget('【焚营】选择摸牌目标', [1, Math.min(num, players)], function (card, player, target) {
                                            return ![player, result.targets[0]].includes(target);
                                        }).ai = function (target) {
                                            var player = _status.event.player;
                                            return get.attitude(player, target);
                                        };
                                    else event.finish();
                                }
                            }
                            ('step 4');
                            if (result.targets?.length) {
                                game.asyncDraw(result.targets, function (target) {
                                    return !target.countCards('h') ? 2 : 1;
                                });
                            }
                        },
                    },
                    diy_reguicai: {
                        init(player) {
                            player.disableJudge();
                        },
                        onremove(player) {
                            player.enableJudge();
                        },
                        mod: {
                            cardEnabled(card) {
                                if (get.type(card) == 'delay') {
                                    return false;
                                }
                            },
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        audioname2: {
                            re_shen_simayi: 'rejilue_guicai',
                        },
                        trigger: {
                            global: 'judge',
                        },
                        forced: true,
                        filter(event, player) {
                            return player.countCards('he') > 0;
                        },
                        content() {
                            'step 0';
                            player
                                .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('diy_reguicai'), 'he', function (card) {
                                    var player = _status.event.player;
                                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 != 'unchanged') return mod2;
                                    var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                    if (mod != 'unchanged') return mod;
                                    return true;
                                })
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
                            if (result.cards?.length) {
                                player.respond(result.cards, 'diy_reguicai', 'highlight', 'noOrdering');
                            } else {
                                event.finish();
                            }
                            ('step 2');
                            if (result.cards?.length) {
                                var card = result.cards[0];
                                if (card.suit == 'spade' && card.number > 1 && card.number < 10) {
                                    player.$gain2(trigger.player.judging[0]);
                                    player.gain(trigger.player.judging[0]);
                                    player.draw('nodelay');
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.orderingCards.addArray(result.cards);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                    event.finish();
                                } else game.cardsDiscard(trigger.player.judging[0]);
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
                                trigger.player.judging[0] = result.cards[0];
                                trigger.orderingCards.addArray(result.cards);
                                game.log(trigger.player, '的判定牌改为', result.cards[0]);
                            }
                        },
                        ai: {
                            rejudge: true,
                            tag: {
                                rejudge: 1,
                            },
                        },
                        group: ['diy_reguicai_huoshou'],
                        subSkill: {
                            huoshou: {
                                audio: 'diy_reguicai',
                                audioname2: {
                                    re_shen_simayi: 'rejilue_guicai',
                                },
                                trigger: {
                                    global: 'damageBefore',
                                },
                                forced: true,
                                filter(event, player) {
                                    return event.card && get.type(event.card) == 'delay';
                                },
                                content() {
                                    trigger.cancel();
                                    player.line(trigger.player);
                                    trigger.player.damage(trigger.num, trigger.nature);
                                },
                            },
                        },
                    },
                    diy_refankui: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'damageEnd',
                        },
                        direct(event, player) {
                            if (lib.skill.diy_refankui.filterx(event, player)) return true;
                            return false;
                        },
                        filter(event, player) {
                            if (lib.skill.diy_refankui.filterx(event, player) || lib.skill.diy_refankui.filtery(event, player)) return event.num > 0;
                            return false;
                        },
                        filterx(event, player) {
                            return event.source && event.source.countGainableCards(player, 'hej') > 0 && event.source != player;
                        },
                        filtery(event, player) {
                            return !event.source || event.source == player || !event.source.countGainableCards(player, 'hej');
                        },
                        content() {
                            'step 0';
                            event.count = Math.min(trigger.num, 9);
                            if (lib.skill.diy_refankui.filtery(trigger, player)) {
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                targets.sort(lib.sort.seat);
                                event.targets = targets;
                            }
                            ('step 1');
                            event.count--;
                            if (lib.skill.diy_refankui.filterx(trigger, player)) {
                                player.gainPlayerCard(get.prompt('diy_refankui', trigger.source), trigger.source, 'hej')
                            }
                            if (lib.skill.diy_refankui.filtery(trigger, player)) {
                                player.gainMultiple(targets, 'hej');
                            }
                            ('step 2');
                            if (lib.skill.diy_refankui.filterx(trigger, player)) {
                                if (result.bool && event.count > 0 && trigger.source.countGainableCards(player, 'hej') > 0) event.goto(1);
                                else {
                                    event.finish();
                                    return;
                                }
                            }
                            if (lib.skill.diy_refankui.filtery(trigger, player)) {
                                player.chooseBool(get.prompt2('diy_refankui')).set('frequentSkill', 'diy_refankui');
                            }
                            ('step 3');
                            if (lib.skill.diy_refankui.filtery(trigger, player) && result.bool && event.count > 0) {
                                event.goto(1);
                            }
                        },
                        ai: {
                            maixie: true,
                            maixie_hp: true,
                            maixie_defend: true,
                            effect: {
                                target(card, player, target) {
                                    if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                        if (get.attitude(target, player) < 0) return [1, 1];
                                    }
                                },
                            },
                        },
                        group: 'diy_refankui_tianjiang',
                        subSkill: {
                            tianjiang: {
                                audio: 'diy_refankui',
                                prompt: '将手牌里的一张延时锦囊牌置入其他角色的判定区',
                                enable: 'phaseUse',
                                position: 'hs',
                                filter(event, player) {
                                    return player.countCards('h', { type: 'delay' }) > 0;
                                },
                                filterCard: {
                                    type: 'delay',
                                },
                                filterTarget(event, player, target) {
                                    return target != player && !target.hasJudge(ui.selected.cards[0]);
                                },
                                prepare: 'give',
                                discard: false,
                                lose: false,
                                content() {
                                    target.addJudge(cards[0]);
                                },
                                check(card) {
                                    return 6 - get.value(card);
                                },
                                ai: {
                                    order: 9,
                                    threaten: 1.5,
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
                                        skip: ['phaseUse', 'phaseDraw'],
                                    },
                                },
                            },
                        },
                    },
                    diy_rezhiheng: {
                        audio: 'ext:群阴汇聚/audio:2',
                        audioname2: {
                            re_shen_simayi: 'rejilue_zhiheng',
                        },
                        enable: 'phaseUse',
                        usable: 1,
                        filter(event, player) {
                            if (player.name == 're_shen_simayi' || player.name2 == 're_shen_simayi') return player.countCards('he') > 0 && player.countMark('rerenjie') > 0;
                            return player.countCards('he') > 0;
                        },
                        chooseButton: {
                            dialog(event, player) {
                                return ui.create.dialog('###' + (player.name == 're_shen_simayi' || player.name2 == 're_shen_simayi' ? '是否弃置一<忍>发动【制衡】？' : '制衡') + '###' + lib.translate.diy_rezhiheng_info);
                            },
                            chooseControl(event, player) {
                                var map = {};
                                var list = [];
                                for (var i = 1; i < player.countCards('he') + 1; i++) {
                                    var cn = get.cnNumber(i);
                                    map[cn] = i;
                                    list.push(cn);
                                }
                                player.storage.diy_rezhiheng_map = map;
                                list.push('cancel2');
                                return list;
                            },
                            check(event, player) {
                                var num = player.countCards('he');
                                return get.cnNumber(num);
                            },
                            backup(result, player) {
                                return {
                                    num: result.control,
                                    audio: 'diy_rezhiheng',
                                    audioname2: {
                                        re_shen_simayi: 'rejilue_zhiheng',
                                    },
                                    content() {
                                        'step 0';
                                        event.hscount = player.countCards('h');
                                        ('step 1');
                                        if (player.name == 're_shen_simayi' || player.name2 == 're_shen_simayi') player.removeMark('rerenjie', 1);
                                        var num = player.storage.diy_rezhiheng_map[lib.skill[event.name].num];
                                        player.draw(num);
                                        player.chooseToDiscard('he', num, true);
                                        ('step 2');
                                        if (result.bool) {
                                            var hs = [];
                                            if (Array.isArray(result.cards))
                                                for (var i of result.cards) {
                                                    if (i.original == 'h') hs.add(i);
                                                }
                                            if (hs.length == event.hscount) player.draw();
                                        }
                                    },
                                };
                            },
                        },
                        ai: {
                            order: 1,
                            result: {
                                player: 1,
                            },
                            threaten: 1.55,
                        },
                    },
                    diy_refangzhu: {
                        audio: 'ext:群阴汇聚/audio:2',
                        audioname2: {
                            re_shen_simayi: 'rejilue_fangzhu',
                        },
                        trigger: {
                            player: 'damageEnd',
                        },
                        filter(event, player) {
                            return event.num > 0;
                        },
                        forced: true,
                        content() {
                            'step 0';
                            if (num > 0) event.count = num;
                            else event.count = Math.min(trigger.num, 9);
                            ('step 1');
                            var choiceList = [`令一名其他角色摸${get.cnNumber(player.maxHp - player.hp)}张牌并将武将牌翻面`, `令一名其他角色弃置${get.cnNumber(player.maxHp - player.hp)}张牌并失去一点体力`];
                            player
                                .chooseControl('cancel2')
                                .set((player.name == 're_shen_simayi' || player.name2 == 're_shen_simayi' ? '选择一项发动,弃置一忍' : 'prompt', get.prompt('diy_refangzhu')))
                                .set('choiceList', choiceList)
                                .set('ai', function (crad, player) {
                                    if (
                                        player.hp >= 3 &&
                                        game.hasPlayer(function (current) {
                                            return get.attitude(player, current) < 0;
                                        })
                                    )
                                        return 0;
                                    if (
                                        player.hp < 3 &&
                                        game.hasPlayer(function (current) {
                                            return get.attitude(player, current) > 0;
                                        })
                                    )
                                        return 0;
                                    return 1;
                                });
                            ('step 2');
                            if (result.control == 'cancel2') event.finish();
                            else {
                                event.index = result.index;
                                if (event.index == 0) {
                                    player.chooseTarget('选择发动【放逐】的目标', true, function (card, player, target) {
                                        return player != target;
                                    }).ai = function (target) {
                                        if (target.hasSkillTag('noturn')) return 0;
                                        var player = _status.event.player;
                                        if (get.attitude(player, target) == 0) return 0;
                                        if (get.attitude(player, target) > 0) {
                                            if (target.classList.contains('turnedover')) return 10;
                                            if (player.maxHp - player.hp < 3) return -1;
                                            return 100 - target.countCards('h');
                                        } else {
                                            if (target.classList.contains('turnedover')) return -1;
                                            if (player.maxHp - player.hp >= 3) return -1;
                                            return 1 + target.countCards('h');
                                        }
                                    };
                                } else if (event.index == 1) {
                                    player.chooseTarget('选择发动【放逐】的目标', true, function (card, player, target) {
                                        return player != target;
                                    }).ai = function (target) {
                                        if (target.hasSkillTag('maihp')) return 0;
                                        if (get.attitude(player, target) == 0) return 0;
                                        if (get.attitude(player, target) > 0) {
                                            return -1;
                                        } else {
                                            return 1 + target.countCards('h');
                                        }
                                    };
                                }
                            }
                            ('step 3');
                            event.count--;
                            if (result.bool) {
                                if ((player.name == 're_shen_simayi' || player.name2 == 're_shen_simayi') && player.name != 'diy_re_caopi' && player.name2 != 'diy_re_caopi') player.removeMark('rerenjie', 1);
                                var num = player.maxHp - player.hp;
                                if (event.index == 0) {
                                    if (player.isDamaged()) result.targets[0].draw(num);
                                    result.targets[0].turnOver();
                                } else if (event.index == 1) {
                                    if (result.targets[0].countCards('he')) result.targets[0].chooseToDiscard('he', num, true);
                                    result.targets[0].loseHp();
                                }
                                if (event.count > 0) event.goto(1);
                            }
                        },
                        ai: {
                            maixie: true,
                            maixie_hp: true,
                            effect: {
                                target(card, player, target) {
                                    if (get.tag(card, 'damage')) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
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
                                        if (turnfriend || target.isHealthy()) return [0.5, 1];
                                        if (target.hp > 1) return [1, 0.5];
                                    }
                                },
                            },
                        },
                    },
                    diy_rejizhi: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'useCard2',
                        },
                        forced: true,
                        filter(event, player) {
                            return get.type(event.card) != 'basic';
                        },
                        content() {
                            'step 0';
                            player.draw();
                            ('step 1');
                            event.card = result.cards[0];
                            player
                                .chooseBool('是否弃置' + get.translation(event.card) + (event.card.number == trigger.card.number && get.type(trigger.card) == 'trick' ? '并收回' + get.translation(trigger.cards) : '') + '？')
                                .set('ai', function (evt, player) {
                                    if (event.card.number == trigger.card.number) return _status.event.value2 > 6;
                                    return _status.currentPhase == player && player.needsToDiscard(-3) && _status.event.value < 6;
                                })
                                .set('value', get.value(event.card, player))
                                .set('value2', get.value(trigger.card, player));
                            ('step 2');
                            if (result.bool) {
                                player.discard(event.card);
                                if (event.card.number == trigger.card.number && get.type(trigger.card) == 'trick') player.gain(trigger.cards, 'gain2');
                                if (_status.currentPhase == player) {
                                    if (!player.storage.diy_rejizhi) player.storage.diy_rejizhi = 0;
                                    player.storage.diy_rejizhi++;
                                    player.markSkill('diy_rejizhi');
                                    var evt = _status.event.getParent('phase');
                                    if (evt && evt.name == 'phase' && !evt.diy_rejizhi) {
                                        var next = game.createEvent('diy_rejizhi_clear');
                                        _status.event.next.remove(next);
                                        evt.after.push(next);
                                        evt.diy_rejizhi = true;
                                        next.player = player;
                                        next.setContent(function () {
                                            delete player.storage.diy_rejizhi;
                                            player.unmarkSkill('diy_rejizhi');
                                        });
                                    }
                                }
                            }
                        },
                        ai: {
                            threaten: 1.4,
                            noautowuxie: true,
                        },
                        mod: {
                            maxHandcard(player, num) {
                                return num + (player.storage.diy_rejizhi || 0);
                            },
                        },
                        intro: {
                            content: '本回合手牌上限+#',
                        },
                    },
                    diy_rejiuyuan: {
                        global: 'diy_rejiuyuan2',
                        audio: 'ext:群阴汇聚/audio:2',
                        zhuSkill: true,
                        trigger: {
                            global: 'taoBegin',
                        },
                        forced: true,
                        filter(event, player) {
                            if (event.player == player) return false;
                            if (!player.hasZhuSkill('diy_rejiuyuan')) return false;
                            if (event.player.group != 'wu') return false;
                            return true;
                        },
                        content() {
                            player.draw();
                            if (trigger.target == player) trigger.baseDamage++;
                        },
                    },
                    diy_rejiuyuan2: {
                        audio: 'diy_rejiuyuan',
                        forceaudio: true,
                        trigger: {
                            player: ['recoverBegin', 'useCardToPlayer'],
                        },
                        filter(event, player) {
                            if (event.name == 'useCard' && (event.target != player || event.card.name != 'tao')) return false;
                            if (event.name == 'recover' && event.num <= 0) return false;
                            if (player.group != 'wu') return false;
                            return game.hasPlayer(function (target) {
                                if (event.name == 'useCard' && event.targets.includes(target)) return false;
                                return player != target && target.isDamaged() && target.hasZhuSkill('diy_rejiuyuan', player);
                            });
                        },
                        forced: true,
                        content() {
                            'step 0';
                            player
                                .chooseTarget(get.prompt2('diy_rejiuyuan'), function (card, player, target) {
                                    if (_status.event.name == 'useCard' && _status.event.targets.includes(target)) return false;
                                    return player != target && target.isDamaged() && target.hasZhuSkill('diy_rejiuyuan', player);
                                })
                                .set('ai', function (target) {
                                    return get.attitude(_status.event.player, target);
                                })
                                .set('targets', trigger.targets);
                            ('step 1');
                            if (result.targets?.length) {
                                var target = result.targets[0];
                                player.line('diy_rejiuyuan2', target, 'green');
                                if (trigger.name == 'useCard') {
                                    trigger.parent.targets.remove(player);
                                    trigger.parent.targets.push(target);
                                } else trigger.player = target;
                                player.draw();
                            }
                        },
                    },
                    diy_reqicai: {
                        group: ['reqicai_rebagua', 'reqicai_rezhuge', 'reqicai_rezhuge_clear'],
                        mod: {
                            targetInRange(card, player, target) {
                                if (get.type2(card) == 'trick') return true;
                            },
                            canBeDiscarded(card) {
                                if (get.position(card) == 'e' && !['equip3', 'equip4', 'equip6'].includes(get.subtype(card))) return false;
                            },
                            canBeGained(card) {
                                if (get.position(card) == 'e' && !['equip3', 'equip4', 'equip6'].includes(get.subtype(card))) return false;
                            },
                        },
                    },
                    diy_rexingshang: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            global: 'die',
                        },
                        content() {
                            'step 0';
                            event.togain = trigger.player.getCards('hej');
                            if (event.togain) player.gain(event.togain, trigger.player, 'giveAuto');
                            player.recover();
                            player.draw();
                        },
                    },
                    resongwei: {
                        group: 'resongwei2',
                        audio: 'resongwei2',
                        zhuSkill: true,
                    },
                    resongwei2: {
                        audio: 'ext:群阴汇聚/audio:2',
                        forceaudio: true,
                        trigger: {
                            global: 'judgeEnd',
                        },
                        filter(event, player) {
                            if (event.player.group != 'wei') return false;
                            if (event.result.color != 'black') return false;
                            return player.hasZhuSkill('resongwei', event.player);
                        },
                        forced: true,
                        content() {
                            'step 0';
                            trigger.player.chooseBool('是否发动【颂威】,' + (trigger.player.hasSkill('resongwei3') ? '' : '回复一点体力并') + `获得判定牌,令${get.translation(player)}摸一张牌？`).set('choice', get.attitude(trigger.player, player) > 0);
                            ('step 1');
                            if (result.bool) {
                                trigger.player.line(player, 'green');
                                if (trigger.player == player) player.gain(trigger.result.cards, 'gain2');
                                player.draw();
                            }
                        },
                    },
                    rejilue_zhiheng: {
                        audio: 'ext:群阴汇聚/audio:1',
                    },
                    rejilue_wansha: {
                        audio: 'ext:群阴汇聚/audio:1',
                        enable: 'phaseUse',
                        usable: 1,
                        filter(event, player) {
                            return player.countMark('rerenjie') > 0;
                        },
                        content() {
                            player.removeMark('rerenjie', 1);
                            player.addTempSkill('diy_rewansha');
                        },
                    },
                    rejilue_jizhi: {
                        audio: 'ext:群阴汇聚/audio:1',
                    },
                    rejilue_fangzhu: {
                        audio: 'ext:群阴汇聚/audio:1',
                    },
                    rerenjie: {
                        audio: 'renjie2',
                        trigger: {
                            player: ['damageEnd', 'loseHpEnd'],
                        },
                        forced: true,
                        group: 'rerenjie2',
                        notemp: true,
                        filter(event, player) {
                            return event.num > 0;
                        },
                        content() {
                            player.addMark('rerenjie', trigger.num);
                        },
                        marktext: '忍',
                        intro: {
                            name: '忍',
                            content: 'mark',
                        },
                        ai: {
                            maixie: true,
                            maixie_hp: true,
                            maihp: true,
                            combo: 'rebaiyin',
                        },
                    },
                    rerenjie2: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'loseAfter',
                        },
                        forced: true,
                        filter(event, player) {
                            if (event.type != 'discard' || !event.cards2) return false;
                            if (player.isPhaseUsing()) return false;
                            if (event.isPhaseUsing(player)) return false;
                            return event.getParent(2).name != 'rejilue_zhiheng';
                        },
                        content() {
                            player.addMark('rerenjie', trigger.cards2.length);
                        },
                    },
                    rebaiyin: {
                        juexingji: true,
                        derivation: ['rejilue', 'diy_reguicai', 'diy_refangzhu', 'rejilue_wansha2', 'diy_rezhiheng', 'diy_rejizhi'],
                        trigger: {
                            player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                        },
                        forced: true,
                        audio: 'ext:群阴汇聚/audio:2',
                        filter(event, player) {
                            return player.countMark('rerenjie') >= 5;
                        },
                        content() {
                            player.loseMaxHp();
                            player.addSkill('rejilue');
                            if (!lib.inpile.includes('rexuwangzhimian')) {
                                lib.inpile.push('rexuwangzhimian');
                                player.equip(game.createCard('rexuwangzhimian', 'diamond', 4));
                            } else {
                                var card = get.cardPile(function (card) {
                                    return card.name == 'rexuwangzhimian' && card != player.getEquip(5);
                                }, 'field');
                                if (card) player.equip(card);
                            }
                            player.awakenSkill('rebaiyin');
                        },
                    },
                    rexuwangzhimian_skill: {
                        equipSkill: true,
                        trigger: {
                            player: 'phaseDrawBegin2',
                        },
                        forced: true,
                        filter(event, player) {
                            return !event.numFixed;
                        },
                        content() {
                            trigger.num += 2;
                        },
                        mod: {
                            maxHandcard(player, num) {
                                return num - 1;
                            },
                        },
                        group: 'rexuwangzhimian_skill_mark',
                        subSkill: {
                            mark: {
                                trigger: {
                                    player: 'phaseZhunbeiBegin',
                                },
                                forced: true,
                                filter(event, player) {
                                    if (!player.hasSkill('rejilue')) return false;
                                    return player.name == 're_shen_simayi';
                                },
                                content() {
                                    player.addMark('rerenjie');
                                },
                            },
                        },
                    },
                    jinzu: {
                        audio: 'ext:群阴汇聚/audio:4',
                        trigger: {
                            player: 'showCharacterAfter',
                        },
                        check(event, player) {
                            var num = game.countPlayer(function (current) {
                                if (current.countCards('he') && get.attitude(player, current) <= 0) {
                                    return true;
                                }
                                if (current.countCards('j') && get.attitude(player, current) > 0) {
                                    return true;
                                }
                            });
                            return num >= 1;
                        },
                        hiddenSkill: true,
                        filter(event, player) {
                            if (player.isZhu) return event.toShow.includes('re_shen_simayi');
                            return event.toShow.includes('re_shen_simayi') && player != _status.currentPhase;
                        },
                        content() {
                            'step 0';
                            var targets = game.filterPlayer();
                            targets.remove(player);
                            targets.sort(lib.sort.seat);
                            event.targets = targets;
                            ('step 1');
                            event.num = 0;
                            player.line(targets, 'green');
                            ('step 2');
                            if (num < event.targets.length) {
                                if (!get.is.altered('jinzu')) {
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
                        },
                        ai: {
                            effect: {
                                target(card, player, target) {
                                    var num = game.countPlayer(function (current) {
                                        if (current.countCards('he') && get.attitude(player, current) <= 0) {
                                            return true;
                                        }
                                        if (current.countCards('j') && get.attitude(player, current) > 0) {
                                            return true;
                                        }
                                    });
                                    if (num > 2) return [0, 1];
                                    if (num == 2) return [0.5, 1];
                                },
                            },
                        },
                    },
                    rejilue: {
                        group: ['rejilue_guicai', 'rejilue_fangzhu', 'rejilue_wansha', 'rejilue_zhiheng', 'rejilue_jizhi'],
                        ai: {
                            combo: 'renjie',
                        },
                    }, //QQQ
                    rejilue_guicai: {
                        audio: 'ext:群阴汇聚/audio:1',
                    },
                    diy_benxi: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'useCard1',
                        },
                        forced: true,
                        filter(event, player) {
                            return player.isPhaseUsing();
                        },
                        content() { },
                        mod: {
                            globalFrom(from, to, distance) {
                                if (_status.currentPhase == from) {
                                    return distance - from.countUsed();
                                }
                            },
                        },
                        ai: {
                            unequip: true,
                            skillTagFilter(player) {
                                if (
                                    game.hasPlayer(function (current) {
                                        return get.distance(player, current) > 1;
                                    })
                                ) {
                                    return false;
                                }
                            },
                        },
                        group: ['diy_benxi_benxi'],
                        subSkill: {
                            benxi: {
                                auidio: 'diy_benxi',
                                trigger: {
                                    player: 'useCard2',
                                },
                                forced: true,
                                filter(trigger, player) {
                                    var info = get.info(trigger.card);
                                    if (info.allowMultiple == false) return false;
                                    if (
                                        trigger.targets &&
                                        !info.multitarget &&
                                        _status.currentPhase == player &&
                                        trigger.card.name == 'sha' &&
                                        !game.hasPlayer(function (current) {
                                            return get.distance(player, current) > 1;
                                        })
                                    ) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return lib.filter.targetEnabled2(trigger.card, player, current) && !trigger.targets.includes(current);
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
                                        .chooseTarget(`请选择${get.translation(trigger.card)}的额外目标`, function (card, player, target) {
                                            var player = _status.event.player;
                                            if (_status.event.targets.includes(target)) return false;
                                            return lib.filter.targetEnabled2(_status.event.card, player, target);
                                        })
                                        .set('targets', trigger.targets)
                                        .set('card', trigger.card)
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            var player = _status.event.player;
                                            return get.effect(target, trigger.card, player, player);
                                        })
                                        .set('autodelay', true);
                                    ('step 1');
                                    if (result.targets?.length) {
                                        player.line(result.targets);
                                        trigger.targets.addArray(result.targets);
                                    }
                                },
                            },
                        },
                    },
                    diy_rebenxi: {
                        group: ['diy_rebenxi_summer', 'diy_rebenxi_kuanggu'],
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'useCard1',
                        },
                        forced: true,
                        mod: {
                            globalFrom(from, to, distance) {
                                if (_status.currentPhase == from) {
                                    return distance - Math.abs(from.storage.diy_rebenxi);
                                }
                            },
                            wuxieRespondable(card, player, target, current) {
                                if (player != current && player.storage.diy_rebenxi_directHit.includes(card)) {
                                    return false;
                                }
                            },
                        },
                        init(player) {
                            player.storage.diy_rebenxi_directHit = [];
                            player.storage.diy_rebenxi_kuanggu = [];
                            player.storage.diy_rebenxi = 0;
                        },
                        intro: {
                            content(storage, player) {
                                var str = '<li>本回合你丝毫未动';
                                if (storage) str = '<li>本回合你与其他角色计算距离时' + storage;
                                var targets = game.filterPlayer();
                                targets.remove(player);
                                targets.sort(function (a, b) {
                                    return Math.max(1, get.distance(player, b)) - Math.max(1, get.distance(player, a));
                                });
                                var distance = Math.max(1, get.distance(player, targets[0]));
                                for (var i = 1; i < targets.length; i++) {
                                    if (Math.max(1, get.distance(player, targets[i])) < distance) {
                                        targets.splice(i);
                                        break;
                                    }
                                }
                                if (targets[0]) str += `<br><li>本回合你与${get.translation(targets[0])}的距离为` + get.cnNumber(distance, true);
                                if (distance - 1 != 0) str += `<br><li>本回合你还需使用${get.cnNumber(distance - 1)}张牌才能发动此技能`;
                                else str += '<br><li>你可以发动此技能了,尽情杀戮吧!';
                                return str;
                            },
                        },
                        filter(event, player) {
                            return (
                                _status.currentPhase == player &&
                                event.targets &&
                                (get.type(event.card) == 'basic' || get.type(event.card) == 'trick') &&
                                !game.hasPlayer(function (current) {
                                    return get.distance(player, current) > 1;
                                })
                            );
                        },
                        filterx(event, player) {
                            var info = get.info(event.card);
                            if (info.allowMultiple == false) return false;
                            if (event.targets && !info.multitarget) {
                                if (
                                    game.hasPlayer(function (current) {
                                        return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
                                    })
                                ) {
                                    return true;
                                }
                            }
                            return false;
                        },
                        filtery(event, player) {
                            return !event.card.yingbian && Array.isArray(get.info(event.card).yingbian_tags);
                        },
                        content() {
                            'step 0';
                            if (!lib.skill.diy_rebenxi.filterx(trigger, player)) event.goto(4);
                            ('step 1');
                            var prompt2 = `为${get.translation(trigger.card)}增加一个目标`;
                            player
                                .chooseTarget(get.prompt('diy_rebenxi'), function (card, player, target) {
                                    var player = _status.event.player;
                                    return !_status.event.targets.includes(target) && lib.filter.targetEnabled2(_status.event.card, player, target);
                                })
                                .set('prompt2', prompt2)
                                .set('ai', function (target) {
                                    var trigger = _status.event.getTrigger();
                                    var player = _status.event.player;
                                    return get.effect(target, trigger.card, player, player);
                                })
                                .set('card', trigger.card)
                                .set('targets', trigger.targets);
                            ('step 2');
                            if (result.targets?.length) {
                                event.targets = result.targets;
                            } else event.goto(4);
                            ('step 3');
                            if (event.targets) {
                                trigger.targets.addArray(event.targets);
                            }
                            ('step 4');
                            event.videoId = lib.status.videoId++;
                            var func = function (card, id, bool1, bool3) {
                                var list = ['为XXX多指定一个目标', '令XXX不可被其他角色响应', '令XXX直接发动对应的全部强化效果', '每当XXX造成1点伤害时回复1点体力或摸一张牌'];
                                var choiceList = ui.create.dialog('【奔袭】:请选择一至两项', 'forcebutton');
                                choiceList.videoId = id;
                                for (var i = 0; i < list.length; i++) {
                                    list[i] = list[i].replace(/XXX/g, card);
                                    var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                    if ((i == 0 && !bool1) || (i == 2 && !bool3)) str += '<div style="opacity:0.5">';
                                    str += list[i];
                                    if ((i == 0 && !bool1) || (i == 2 && !bool3)) str += '</div>';
                                    str += '</div>';
                                    var next = choiceList.add(str);
                                    next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                    next.firstChild.link = i;
                                    Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                    choiceList.buttons.add(next.firstChild);
                                }
                                return choiceList;
                            };
                            if (player.isOnline2()) {
                                player.send(func, get.translation(trigger.card), event.videoId, lib.skill.diy_rebenxi.filterx(trigger, player), lib.skill.diy_rebenxi.filtery(trigger, player));
                            }
                            event.dialog = func(get.translation(trigger.card), event.videoId, lib.skill.diy_rebenxi.filterx(trigger, player), lib.skill.diy_rebenxi.filtery(trigger, player));
                            if (player != game.me || _status.auto) {
                                event.dialog.style.display = 'none';
                            }
                            var next = player.chooseButton();
                            next.set('dialog', event.videoId);
                            next.set('forced', true);
                            next.set('selectButton', [1, 2]);
                            next.set('filterButton', function (button) {
                                if (button.link == 0) return _status.event.bool1;
                                if (button.link == 2) return _status.event.bool3;
                                return true;
                            });
                            next.set('bool1', lib.skill.diy_rebenxi.filterx(trigger, player));
                            next.set('bool3', lib.skill.diy_rebenxi.filtery(trigger, player));
                            next.set('ai', function (button) {
                                var player = _status.event.player;
                                var trigger = _status.event.getTrigger();
                                switch (button.link) {
                                    case 0: {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return lib.filter.targetEnabled2(trigger.card, player, current) && !trigger.targets.includes(current) && get.effect(current, trigger.card, player, player) > 0;
                                            })
                                        )
                                            return 1.6 + Math.random();
                                        return 0;
                                    }
                                    case 1: {
                                        var num = 1.3;
                                        if (
                                            trigger.card.name == 'sha' &&
                                            trigger.targets.filter(function (current) {
                                                if (current.mayHaveShan() && get.attitude(player, current) <= 0) {
                                                    if (current.hasSkillTag('useShan')) num = 1.9;
                                                    return true;
                                                }
                                                return false;
                                            }).length
                                        )
                                            return num + Math.random();
                                        if (
                                            get.type(trigger.type) == 'trick' &&
                                            game.hasPlayer(function (current) {
                                                return get.attitude(current, player) <= 0 && current.hasWuxie();
                                            })
                                        )
                                            return num + Math.random();
                                        return 0.5 + Math.random();
                                    }
                                    case 2: {
                                        if (Array.isArray(get.info(trigger.card).yingbian_tags)) return 2 + Math.random();
                                        return 0;
                                    }
                                    case 3: {
                                        return (get.tag(trigger.card, 'damage') || 0) + Math.random();
                                    }
                                }
                            });
                            ('step 5');
                            if (player.isOnline2()) {
                                player.send('closeDialog', event.videoId);
                            }
                            event.dialog.close();
                            var map = [
                                function (trigger, player, event) {
                                    player
                                        .chooseTarget(`为${get.translation(trigger.card)}增加一个目标`, true, function (card, player, target) {
                                            var player = _status.event.player;
                                            return !_status.event.targets.includes(target) && lib.filter.targetEnabled2(_status.event.card, player, target);
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            var player = _status.event.player;
                                            return get.effect(target, trigger.card, player, player);
                                        })
                                        .set('card', trigger.card)
                                        .set('targets', trigger.targets);
                                },
                                function (trigger, player, event) {
                                    player.storage.diy_rebenxi_directHit.push(trigger.card);
                                    trigger.directHit.addArray(
                                        game.filterPlayer(function (current) {
                                            return player != current && get.distance(player, current) <= 1;
                                        })
                                    );
                                },
                                function (trigger, player, event) {
                                    if (!trigger.card.yingbian) {
                                        trigger.card.yingbian = true;
                                        var info = get.info(trigger.card);
                                        trigger.card.cardtags = info.yingbian_tags.map(function (i) {
                                            return 'yingbian_' + i;
                                        });
                                        if (info && info.yingbian) info.yingbian(trigger);
                                        player.addTempSkill('yingbian_changeTarget');
                                    }
                                },
                                function (trigger, player, event) {
                                    player.storage.diy_rebenxi_kuanggu.push(trigger.card);
                                },
                            ];
                            for (var i of result.links) {
                                game.log(player, '选择了', '#g【奔袭】', '的', '#y选项' + get.cnNumber(i + 1, true));
                                map[i](trigger, player, event);
                            }
                            if (!result.links.includes(0)) event.finish();
                            ('step 6');
                            if (result.targets?.length) {
                                event.targets = result.targets;
                            } else event.finish();
                            ('step 7');
                            if (event.targets) {
                                trigger.targets.addArray(event.targets);
                            }
                        },
                        ai: {
                            unequip: true,
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                if (tag == 'directHit_ai' && Array.isArray(arg)) {
                                    if (
                                        player == arg ||
                                        _status.currentPhase != player ||
                                        game.hasPlayer(function (current) {
                                            return get.distance(player, current) > 1;
                                        })
                                    )
                                        return false;
                                    var evt = arg[2].parent;
                                    if (evt.type == 'card' && player.storage.diy_rebenxi_directHit.includes(evt.card)) return true;
                                    return false;
                                }
                                var card = arg.target.getEquip(2);
                                if (card && card.name.includes('bagua')) return true;
                            },
                        },
                        subSkill: {
                            kuanggu: {
                                trigger: {
                                    global: 'damageBegin1',
                                },
                                audio: 'diy_rebenxi',
                                forced: true,
                                filter(event, player) {
                                    return event.card && player.storage.diy_rebenxi_kuanggu.includes(event.card);
                                },
                                content() {
                                    'step 0';
                                    event.num = Math.min(trigger.num, 9);
                                    ('step 1');
                                    player.chooseDrawRecover(get.prompt(event.name), true)
                                        ('step 2');
                                    if (result.control != 'cancel2') {
                                        event.num--;
                                        if (event.num > 0) {
                                            event.goto(1);
                                        }
                                    }
                                },
                            },
                            summer: {
                                trigger: {
                                    player: ['phaseBegin', 'phaseAfter', 'useCardAfter', 'useCard'],
                                },
                                silent: true,
                                filter(event, player) {
                                    return player == _status.currentPhase;
                                },
                                content() {
                                    if (event.triggername == 'phaseBegin') {
                                        player.markSkill('diy_rebenxi');
                                        return;
                                    } else if (event.triggername == 'phaseAfter') {
                                        player.storage.diy_rebenxi = 0;
                                        player.unmarkSkill('diy_rebenxi');
                                        return;
                                    } else if (event.triggername == 'useCard') {
                                        player.storage.diy_rebenxi--;
                                        return;
                                    } else {
                                        player.storage.diy_rebenxi_directHit.remove(event.card);
                                        player.storage.diy_rebenxi_kuanggu.remove(event.card);
                                    }
                                },
                                forced: true,
                                popup: false,
                            },
                        },
                    },
                    rejuedao: {
                        enable: 'phaseUse',
                        init(player) {
                            if (player.hasZhuSkill('rejuedao')) {
                                player.markSkill('rejuedao');
                                player.storage.rejuedao = false;
                            }
                        },
                        intro: {
                            content: 'limited',
                        },
                        mark: false,
                        limited: true,
                        zhuSkill: true,
                        derivation: ['regeju'],
                        audio: 'ext:群阴汇聚/audio:2',
                        filterTarget(card, player, target) {
                            return player != target;
                        },
                        filterCard(card) {
                            return card.name != 'zhangba' && get.type(card) != 'trick';
                        },
                        selectCard: -1,
                        discard: false,
                        lose: false,
                        delay: false,
                        filter(event, player) {
                            if (player.storage.rejuedao) return false;
                            if (!player.hasZhuSkill('rejuedao')) return false;
                            return (
                                player.countCards('he', function (card) {
                                    return card.name != 'zhangba' && get.type(card) != 'trick';
                                }) > 0
                            );
                        },
                        content() {
                            'step 0';
                            player.storage.rejuedao = true;
                            player.awakenSkill('rejuedao');
                            ('step 1');
                            target.gain(cards, player, 'give');
                            target.loseHp(Math.min(3, Math.floor(cards.length / 2)));
                            ('step 2');
                            player.gainMaxHp();
                            player.recover(player.maxHp - player.hp + 1);
                            player.addSkill('regeju');
                            ('step 3');
                            if (target.group == player.group) {
                                player.addSkill('rejuedao2');
                                target.addSkill('rejuedao2');
                                player.$damagepop(cards.length, 'unknownx');
                                target.$damagepop(-cards.length, 'unknownx');
                                player.storage.rejuedao2 += cards.length;
                                target.storage.rejuedao2 -= cards.length;
                                player.markSkill('rejuedao2');
                                target.markSkill('rejuedao2');
                                game.addVideo('storage', player, ['rejuedao2', player.storage.rejuedao2]);
                                game.addVideo('storage', target, ['rejuedao2', target.storage.rejuedao2]);
                            }
                        },
                        ai: {
                            order: 9,
                            result: {
                                target(player, target) {
                                    if (target.hasSkillTag('nogain')) return 0;
                                    if (player.countCards('h') == player.countCards('h', 'du')) return -1;
                                    if (target.hasJudge('lebu')) return -3;
                                    if (get.attitude(player, target) < 0) {
                                        var basis = get.threaten(target);
                                        if (
                                            player.hp <= 2 &&
                                            !game.hasPlayer(function (current) {
                                                return get.attitude(current, player) < 0 && current.countCards('h', 'tao') > 0;
                                            })
                                        )
                                            return 0;
                                        if (target.group == player.group) return -basis * 2;
                                        if (
                                            Math.floor(
                                                player.countCards('he', function (card) {
                                                    return card.name != 'zhangba' && get.type(card) != 'trick';
                                                }) / 2
                                            ) > target.hp
                                        )
                                            return -basis * 0.8;
                                        return -basis;
                                    }
                                    return 0;
                                },
                            },
                        },
                    },
                    rekangkai: {
                        audio: 'ext:群阴汇聚/audio:3',
                        trigger: {
                            global: 'useCardToTargeted',
                        },
                        filter(event, player) {
                            if ((get.distance(player, event.target) <= 1 || get.distance(event.target, player) <= 1) && event.card.name == 'sha') return true;
                            return false;
                        },
                        check(event, player) {
                            return get.attitude(player, event.target) >= 0;
                        },
                        content() {
                            'step 0';
                            event.target = trigger.target;
                            player.say('我发动【慷忾】,从牌堆顶摸一张牌');
                            player.draw();
                            ('step 1');
                            player.chooseCard(true, 'he', target == player ? '展示一张牌' : `交给${get.translation(target)}一张牌`).set('ai', function (card) {
                                var player = _status.event.player,
                                    target = _status.event.parent.target;
                                if (get.position(card) == 'e') {
                                    if (target == player) return 1.5;
                                    return -1;
                                }
                                if (card.name == 'shan') return 1;
                                if (get.type(card) == 'equip') {
                                    if (target == player) return 1.5;
                                    return 0.5;
                                }
                                return 0;
                            });
                            ('step 2');
                            if (target != player) {
                                player.say('根据【慷忾】的效果描述,我将' + (get.position(result.cards[0]) == 'h' ? '一张手牌' : get.translation(result.cards[0])) + '交给' + get.translation(target));
                                target.gain(result.cards, player, 'give');
                            } else {
                                if (get.position(result.cards[0]) == 'h') {
                                    player.say('根据【慷忾】的效果描述,我展示一张手牌');
                                    player.showCards(result.cards[0]);
                                    if (get.type(result.cards[0]) == 'equip') {
                                        player.say('由于我展示的是装备牌,所以再根据【慷忾】的效果描述,我可以使用展示牌');
                                        player.chooseUseTarget(result.cards[0]);
                                    }
                                } else {
                                    player.say(`根据【慷忾】的效果描述,我展示我装备区的${get.translation(result.cards[0])},再根据【慷忾】的效果描述,我可以使用展示牌`);
                                    player.showCards(result.cards[0]);
                                    player.chooseUseTarget(result.cards[0]);
                                }
                                event.finish();
                            }
                            event.card = result.cards[0];
                            ('step 3');
                            if (target.getCards('h').includes(card) && get.type(card) == 'equip') {
                                player.say(`由于我交给${get.translation(target)}的牌的类别是装备牌,所以再根据【慷忾】的效果描述,${get.translation(target)}可以使用我交给` + (target.sex == 'female' ? '她' : '他') + '的牌');
                                target.chooseUseTarget(card);
                            }
                        },
                        ai: {
                            threaten: 1.1,
                        },
                    },
                    rexuepin: {
                        enable: 'phaseUse',
                        audio: 'ext:群阴汇聚/audio:3',
                        usable: 1,
                        filterTarget(event, player, target) {
                            return player.inRange(target) && target.countCards('he') && !target.hasSkillTag('noCompareTarget');
                        },
                        content() {
                            'step 0';
                            player.choosePlayerCard(target, 'he', '选择其的拼点牌', true).set('ai', function (button) {
                                if (get.position(button.link) == 'e') {
                                    return Math.min(2, get.value(button.link)) / button.link.number;
                                }
                                return 0;
                            });
                            ('step 1');
                            if (result.cards?.length) event.card = result.cards[0];
                            else event.finish();
                            ('step 2');
                            var next = player.chooseToCompare(target);
                            if (!next.fixedResult) next.fixedResult = {};
                            next.fixedResult[player.playerid] = get.cards()[0];
                            next.fixedResult[target.playerid] = event.card;
                            ('step 3');
                            event.type = get.type(result.target, 'trick');
                            if (!result.bool) player.loseHp();
                            ('step 4');
                            if (target.countDiscardableCards(player, 'he') > 0) player.discardPlayerCard(target, 'he', true);
                            else event.finish();
                            ('step 5');
                            if (get.type2(result.cards[0], result.cards[0].original == 'h' ? target : false) == event.type) {
                                event.discard = result.cards[0];
                                if (player.isHealthy()) event._result = { control: '获得牌' };
                                else {
                                    var list = ['recover_hp', '获得牌'];
                                    player
                                        .chooseControl(list, function () {
                                            var player = _status.event.player,
                                                list = [],
                                                list2 = [];
                                            list.push(event.discard);
                                            list.push(event.card);
                                            for (var i = 0; i < list.length; i++) {
                                                if (['tao', 'wuzhong', 'dongzhuxianji'].includes(list[i].name)) list2.push(list[i]);
                                                else if (get.tag(list[i], 'damage') && list[i].name != 'sha') list2.push(list[i]);
                                            }
                                            if (list2.length) return '获得牌';
                                            return 'recover_hp';
                                        })
                                        .set('prompt', '【血拼】请选择一项');
                                }
                            }
                            ('step 6');
                            if (result.control == 'recover_hp') player.recover();
                            else {
                                player.gain(event.discard, 'gain2');
                                player.gain(event.card, 'gain2');
                            }
                        },
                        ai: {
                            order: 8,
                            result: {
                                player(player, target) {
                                    if (target.countCards('h') > 2) return 0;
                                    if (player.hp > 2 || target.countCards('h') < 2) return -0.5;
                                    return -2;
                                },
                                target(player, target) {
                                    var num = target.countCards('h') - target.countDiscardableCards(player, 'h');
                                    if (target.countCards('h') > 1 + num && target.countDiscardableCards(player, 'he') > 0) return -2;
                                    return 0;
                                },
                            },
                        },
                    },
                    cezong: {
                        audio: 'ext:群阴汇聚/audio:2',
                        enable: 'phaseUse',
                        usable: 1,
                        filter(event, player) {
                            return player.countCards('he', { color: 'black' });
                        },
                        filterCard: {
                            color: 'black',
                        },
                        filterTarget(card, player, target) {
                            if (ui.selected.targets.length == 0) {
                                return player != target;
                            } else {
                                return ui.selected.targets[0].inRange(target) && lib.filter.filterTarget({ name: 'sha' }, ui.selected.targets[0], target);
                            }
                        },
                        position: 'he',
                        discard: false,
                        delay: false,
                        loseTo: 'cardPile',
                        insert: true,
                        visible: true,
                        selectTarget: 2,
                        multitarget: true,
                        multicheck() {
                            return game.hasPlayer(function (current) {
                                if (current.countCards('h') + current.countCards('e') < 2) {
                                    return game.hasPlayer(function (current2) {
                                        return lib.filter.filterTarget({ name: 'sha' }, current, current2);
                                    });
                                }
                            });
                        },
                        check(card) {
                            return 6 - get.value(card);
                        },
                        targetprompt: ['被策纵', '出杀目标'],
                        content() {
                            'step 0';
                            player.showCards(cards);
                            ('step 1');
                            if (!_status.connectMode && lib.config.skip_shan && !target.hasSha()) event._result = { bool: 'cancel2' };
                            else
                                targets[0]
                                    .chooseToUse(`对${get.translation(targets[1])}使用一张杀,或令${get.translation(player)}对你造成一点伤害且你与${get.translation(player)}计算距离时+1直到你的下个回合结束`, function (card, player) {
                                        if (card.name != 'sha') return false;
                                        return lib.filter.filterCard.apply(this, arguments);
                                    })
                                    .set('targetRequired', true)
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.filterTarget.apply(this, arguments);
                                    })
                                    .set('sourcex', targets[1])
                                    .set('addCount', false)
                                    .set('respondTo', [player, card]);
                            ('step 2');
                            if (!result.bool) {
                                player.line(targets[0]);
                                game.log(player, '疏远了', targets[0]);
                                targets[0].damage();
                                targets[0].storage.cezong_ma = player;
                                targets[0].addTempSkill('cezong_ma', { player: 'phaseEnd' });
                            }
                        },
                        subSkill: {
                            ma: {
                                intro: {
                                    content: '你与$计算距离时+1直到你的下个回合结束',
                                },
                                mod: {
                                    globalFrom(from, to, distance) {
                                        var players = game.filterPlayer();
                                        for (var i of players) {
                                            if (i == from.storage.cezong_ma && i == to) return distance + 1;
                                        }
                                    },
                                },
                            },
                        },
                        ai: {
                            result: {
                                player(player) {
                                    var players = game.filterPlayer();
                                    for (var i of players) {
                                        if (i != player && get.attitude(player, i) <= 1 && get.attitude(i, player) <= 1) {
                                            return 1;
                                        }
                                    }
                                    return 0;
                                },
                                target(player, target) {
                                    return -1;
                                },
                            },
                            order: 8.5,
                            expose: 0.2,
                        },
                    },
                    diy_reyanzhu: {
                        enable: 'phaseUse',
                        audio: 'ext:群阴汇聚/audio:2',
                        usable: 1,
                        filterTarget(card, player, target) {
                            return player != target;
                        },
                        derivation: 'diy_reyanzhu_rewrite',
                        prompt() {
                            return lib.translate[`${_status.event.player.storage.diy_reyanzhu ? 'diy_reyanzhu_rewrite' : 'diy_reyanzhu'}_info`];
                        },
                        content() {
                            'step 0';
                            if (player.storage.diy_reyanzhu || !target.countCards('e')) event._result = { index: 1 };
                            else
                                target
                                    .chooseControl()
                                    .set('prompt', get.translation(player) + '发动了【宴诛】,请选择一项')
                                    .set('choiceList', [`交给${get.translation(player)}装备区的所有牌并令其移除此选项`, '弃置一张牌,且你受到的伤害+1直到下回合开始'])
                                    .set('ai', function () {
                                        if (_status.event.player.countCards('e') >= 3) return 1;
                                        return 0;
                                    });
                            ('step 1');
                            if (result.index == 0) {
                                player.gain(target.getCards('e'), 'giveAuto', target);
                                player.addTempSkill('diy_reyanzhu3', { player: 'phaseBegin' });
                                player.addMark('diy_reyanzhu3', 1, false);
                                player.storage.diy_reyanzhu = true;
                            } else {
                                target.addTempSkill('diy_reyanzhu2', { player: 'phaseBegin' });
                                target.addMark('diy_reyanzhu2', 1, false);
                                if (target.countCards('he') > 0) target.chooseToDiscard('he', true);
                            }
                        },
                        ai: {
                            order: 6,
                            result: {
                                target(player, target) {
                                    if (player.storage.diy_reyanzhu) return -1;
                                    var ne = target.countCards('e');
                                    if (!ne) return -2;
                                    if (ne >= 2) return -ne;
                                    return 0;
                                },
                            },
                        },
                    },
                    diy_rexingxue: {
                        trigger: {
                            player: 'phaseJieshuBegin',
                        },
                        forced: true,
                        audio: 'ext:群阴汇聚/audio:2',
                        filter(event, player) {
                            return player.maxHp > 0;
                        },
                        content() {
                            'step 0';
                            player.chooseTarget([1, player.maxHp], get.prompt('diy_rexingxue'), `令至多${player.maxHp}角色各摸一张牌,其中所有手牌数大于体力上限的角色将一张牌置于牌堆顶`).set('ai', function (target) {
                                var att = get.attitude(player, target);
                                if (target.countCards('h') == target.maxHp - 1) att *= 2;
                                return att;
                            });
                            ('step 1');
                            if (result.targets?.length) {
                                event.targets = result.targets.sortBySeat();
                                game.asyncDraw(result.targets);
                            } else event.finish();
                            ('step 2');
                            ('step 3');
                            if (event.targets.length) {
                                event.target = event.targets.shift();
                                if (event.target.isDead()) event.redo();
                            } else event.finish();
                            ('step 4');
                            if (target.isAlive() && target.countCards('h') && target.countCards('h') > target.maxHp) target.chooseCard('he', true, '将一张牌置于牌堆顶');
                            else event.goto(3);
                            ('step 5');
                            if (result.cards?.length) {
                                event.card = result.cards[0];
                                target.lose(result.cards, ui.special);
                                game.log(target, '将', get.position(event.card) == 'h' ? '一张牌' : event.card, '置于牌堆顶');
                                game.broadcastAll(function (player) {
                                    var cardx = ui.create.card();
                                    cardx.classList.add('infohidden');
                                    cardx.classList.add('infoflip');
                                    player.$throw(cardx, 1000, 'nobroadcast');
                                }, target);
                            } else {
                                event.card = null;
                            }
                            ('step 6');
                            if (event.card) {
                                event.card.fix();
                                ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
                            }
                            event.goto(3);
                        },
                    },
                    diy_rezhaofu: {
                        mod: {
                            targetInRange(card, player, target) {
                                if (player.inRange(target)) return true;
                            },
                        },
                        global: 'diy_rezhaofu2',
                        zhuSkill: true,
                        audio: 'ext:群阴汇聚/audio:2',
                        shaRelated: true,
                        trigger: {
                            global: 'useCardToTargeted',
                        },
                        forced: true,
                        filter(event, player) {
                            if (event.player.group != 'wu') return false;
                            return event.player != player && player.inRange(event.target) && event.card.name == 'sha' && event.player.isPhaseUsing();
                        },
                        content() {
                            'step 0';
                            var go = false;
                            if (get.attitude(player, trigger.player) > 0) {
                                if (trigger.addCount === false || !trigger.player.isPhaseUsing()) go = false;
                                else if (!trigger.player.hasSkill('paoxiao') && !trigger.player.hasSkill('tanlin3') && !trigger.player.hasSkill('zhaxiang2') && !trigger.player.hasSkill('fengnu') && !trigger.player.getEquip('zhuge')) {
                                    var nh = trigger.player.countCards('h');
                                    if (player == trigger.player) {
                                        go = player.countCards('h', 'sha') > 0;
                                    } else if (nh >= 4) {
                                        go = true;
                                    } else if (player.countCards('h', 'sha')) {
                                        if (nh == 3) {
                                            go = Math.random() < 0.8;
                                        } else if (nh == 2) {
                                            go = Math.random() < 0.5;
                                        }
                                    } else if (nh >= 3) {
                                        if (nh == 3) {
                                            go = Math.random() < 0.5;
                                        } else if (nh == 2) {
                                            go = Math.random() < 0.2;
                                        }
                                    }
                                }
                            }
                            var next = player.chooseBool(get.prompt('diy_rezhaofu'), `是否令${get.translation(trigger.player)}本次使用的【杀】不计入使用次数？`);
                            next.set('ai', function () {
                                if (_status.event.go) return true;
                                return false;
                            });
                            next.set('go', go);
                            ('step 1');
                            if (result.bool) {
                                if (trigger.addCount !== false) {
                                    trigger.addCount = false;
                                    trigger.player.getStat().card.sha--;
                                }
                            }
                        },
                        ai: {
                            expose: 0.2,
                        },
                    },
                    diy_reyanzhu2: {
                        trigger: {
                            player: 'damageBegin3',
                        },
                        charlotte: true,
                        forced: true,
                        content() {
                            trigger.num += player.countMark('diy_reyanzhu2');
                            game.log(player, '受到的伤害+' + player.countMark('diy_reyanzhu2'));
                        },
                        intro: {
                            content: '受到的伤害+#直到下回合开始',
                        },
                    },
                    diy_reyanzhu3: {
                        trigger: {
                            player: 'damageBegin3',
                        },
                        charlotte: true,
                        forced: true,
                        content() {
                            trigger.num -= player.countMark('diy_reyanzhu3');
                            game.log(player, '受到的伤害+' - player.countMark('diy_reyanzhu3'));
                        },
                        intro: {
                            content: '受到的伤害-#直到下回合开始',
                        },
                    },
                    diy_rezhaofu2: {
                        mod: {
                            globalFrom(from, to, distance) {
                                if (from.group != 'wu') return;
                                var players = game.filterPlayer(function (current) {
                                    return current.hasZhuSkill('diy_rezhaofu');
                                });
                                if (players.length < 1) return;
                                for (var i of players) {
                                    if (i != from && i != to) {
                                        if (i.inRange(to)) return distance - Infinity;
                                    }
                                }
                            },
                        },
                    },
                    diy_longdan: {
                        mod: {
                            aiValue(player, card, num) {
                                if (card.name != 'sha' && card.name != 'shan') return;
                                var geti = function () {
                                    var cards = player.getCards('hs', function (card) {
                                        return card.name == 'sha' || card.name == 'shan';
                                    });
                                    if (cards.includes(card)) {
                                        return cards.indexOf(card);
                                    }
                                    return cards.length;
                                };
                                return Math.max(num, [7, 5, 5, 3][Math.min(geti(), 3)]);
                            },
                            aiUseful() {
                                return lib.skill.diy_longdan.mod.aiValue.apply(this, arguments);
                            },
                        },
                        audio: 'ext:群阴汇聚/audio:8',
                        hiddenCard(player, name) {
                            if (name == 'tao') return player.countCards('hs', 'jiu') > 0;
                            if (name == 'jiu') return player.countCards('hs', 'tao') > 0;
                            return false;
                        },
                        group: ['diy_xinlongdan_draw', 'diy_xinlongdan_chongzhen1', 'diy_xinlongdan_chongzhen2', 'diy_refanghun_shanafter', 'diy_refanghun_shamiss'],
                        enable: ['chooseToUse', 'chooseToRespond'],
                        position: 'hs',
                        prompt: '将杀当做闪,或将闪当做杀,或将桃当做酒,或将酒当做桃使用或打出',
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
                                    if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
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
                            var filter = event.filterCard;
                            if (filter({ name: 'sha' }, player, event) && player.countCards('hs', 'shan')) return true;
                            if (filter({ name: 'shan' }, player, event) && player.countCards('hs', 'sha')) return true;
                            if (filter({ name: 'tao' }, player, event) && player.countCards('hs', 'jiu')) return true;
                            if (filter({ name: 'jiu' }, player, event) && player.countCards('hs', 'tao')) return true;
                            return false;
                        },
                        onrespond() {
                            return this.onuse.apply(this, arguments);
                        },
                        onuse(links, player) {
                            var next = game.createEvent('diy_longdan_draw', false, _status.event.parent);
                            next.player = player;
                            next.setContent(function () {
                                player.draw();
                            });
                        },
                        ai: {
                            respondSha: true,
                            respondShan: true,
                            skillTagFilter(player, tag) {
                                var name;
                                switch (tag) {
                                    case 'respondSha':
                                        name = 'shan';
                                        break;
                                    case 'respondShan':
                                        name = 'sha';
                                        break;
                                }
                                if (!player.countCards('hs', name)) return false;
                            },
                            order(item, player) {
                                if (player && _status.event.type == 'phase') {
                                    var max = 0;
                                    var list = ['sha', 'tao', 'jiu'];
                                    var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                    for (var i = 0; i < list.length; i++) {
                                        var name = list[i];
                                        if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
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
                    diy_xinlongdan: {
                        group: ['diy_longdan1', 'diy_longdan2', 'diy_longdan3', 'diy_longdan4', 'diy_xinlongdan_num', 'diy_xinlongdan_discard', 'diy_xinlongdan_draw', 'diy_xinlongdan_chongzhen1', 'diy_xinlongdan_chongzhen2'],
                        ai: {
                            skillTagFilter(player, tag) {
                                switch (tag) {
                                    case 'respondSha': {
                                        if (player.countCards('he', { suit: 'diamond' }) == 0) return false;
                                        break;
                                    }
                                    case 'respondShan': {
                                        if (player.countCards('he', { suit: 'club' }) == 0) return false;
                                        break;
                                    }
                                    case 'save': {
                                        if (player.countCards('he', { suit: 'spade' }) == 0) return false;
                                        break;
                                    }
                                    case 'save': {
                                        if (player.countCards('he', { suit: 'heart' }) == 0) return false;
                                        break;
                                    }
                                }
                            },
                            save: true,
                            respondSha: true,
                            respondShan: true,
                            threaten: 1.8,
                        },
                        subSkill: {
                            draw: {
                                trigger: {
                                    player: 'useCard',
                                },
                                forced: true,
                                popup: false,
                                filter(event, player) {
                                    return (['diy_longdan1', 'diy_longdan3'].includes(event.skill) || (['jiu', 'tao'].includes(event.card.name) && ['diy_refanghun_sha', 'diy_longdan'].includes(event.skill))) && event.card;
                                },
                                content() {
                                    player.draw();
                                },
                            },
                            chongzhen1: {
                                audio: 'ext:群阴汇聚/audio:4',
                                audioname2: {
                                    re_zhaoxiang: 'diy_refanghun',
                                },
                                trigger: {
                                    player: 'useCard',
                                },
                                filter(event, player) {
                                    var target = lib.skill.diy_xinlongdan_chongzhen1.logTarget(event, player);
                                    return ((['sha', 'shan'].includes(event.card.name) && ['diy_refanghun_sha', 'diy_longdan'].includes(event.skill)) || ['diy_longdan2', 'diy_longdan4'].includes(event.skill)) && event.card && target && target.countGainableCards(player, 'he') > 0;
                                },
                                logTarget(event, player) {
                                    if (event.card.name == 'sha') return event.targets[0];
                                    if (event.card.name == 'shan') return event.respondTo[0];
                                },
                                prompt2(event, player) {
                                    if (event.card.name == 'sha') return `是否获得${get.translation(event.targets[0])}的一张牌？`;
                                    if (event.card.name == 'shan') return `是否获得${get.translation(event.respondTo[0])}的一张牌？`;
                                },
                                content() {
                                    var target = lib.skill.diy_xinlongdan_chongzhen1.logTarget(trigger, player);
                                    player.gainPlayerCard(target, 'he', true);
                                },
                                ai: {
                                    combo: 'diy_longdan',
                                    mingzhi: false,
                                    effect: {
                                        target(card, player, target, current) {
                                            if (get.tag(card, 'respondShan') || get.tag(card, 'respondSha')) {
                                                if (get.attitude(target, player) <= 0) {
                                                    if (current > 0) return;
                                                    if (target.countCards('he') == 0) return 1.6;
                                                    if (target.countCards('he') == 1) return 1.2;
                                                    if (target.countCards('he') == 2) return [0.8, 0.2, 0, -0.2];
                                                    return [0.4, 0.7, 0, -0.7];
                                                }
                                            }
                                        },
                                    },
                                },
                            },
                            chongzhen2: {
                                audio: 'ext:群阴汇聚/audio:4',
                                audioname2: {
                                    re_zhaoxiang: 'diy_refanghun',
                                },
                                trigger: {
                                    player: 'respond',
                                },
                                filter(event, player) {
                                    return ((['sha', 'shan'].includes(event.card.name) && ['diy_refanghun_sha', 'diy_longdan'].includes(event.skill)) || ['diy_longdan2', 'diy_longdan4'].includes(event.skill)) && event.card && event.source && event.source.countGainableCards(player, 'he') > 0;
                                },
                                logTarget: 'source',
                                prompt2(event, player) {
                                    return `是否获得${get.translation(event.source[0])}的一张牌？`;
                                },
                                content() {
                                    player.gainPlayerCard(trigger.source, 'he', true);
                                },
                                ai: {
                                    combo: 'diy_longdan',
                                    mingzhi: false,
                                    effect: {
                                        target(card, player, target, current) {
                                            if (get.tag(card, 'respondShan') || get.tag(card, 'respondSha')) {
                                                if (get.attitude(target, player) <= 0) {
                                                    if (current > 0) return;
                                                    if (target.countCards('he') == 0) return 1.6;
                                                    if (target.countCards('he') == 1) return 1.2;
                                                    if (target.countCards('he') == 2) return [0.8, 0.2, 0, -0.2];
                                                    return [0.4, 0.7, 0, -0.7];
                                                }
                                            }
                                        },
                                    },
                                },
                            },
                            num: {
                                trigger: {
                                    player: 'useCard',
                                },
                                forced: true,
                                popup: false,
                                filter(event, player) {
                                    return (event.skill == 'diy_longdan1' || event.skill == 'diy_longdan2' || (['sha', 'tao'].includes(event.card.name) && event.skill == 'diy_relonghun')) && event.card;
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
                                    return (evt.skill == 'diy_relonghun1' || evt.skill == 'diy_relonghun2' || (['shan', 'jiu', 'wuxie'].includes(evt.card.name) && evt.skill == 'diy_relonghun')) && evt.card && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countDiscardableCards(player, 'he');
                                },
                                content() {
                                    player.line(_status.currentPhase, 'green');
                                    player.discardPlayerCard(_status.currentPhase, 'he', true);
                                },
                            },
                        },
                    },
                    diy_longdan1: {
                        audio: 'diy_longdan',
                        enable: ['chooseToUse', 'chooseToRespond'],
                        prompt() {
                            return '将一张♥️️牌当作桃使用';
                        },
                        position: 'hes',
                        check(card, event) {
                            if (ui.selected.cards.length) return 0;
                            return 10 - get.value(card);
                        },
                        selectCard: 1,
                        viewAs: {
                            name: 'tao',
                        },
                        filter(event, player) {
                            return player.countCards('he', { suit: 'heart' }) > 0;
                        },
                        filterCard(card) {
                            return card.suit == 'heart';
                        },
                        ai: {
                            basic: {
                                order(card, player) {
                                    if (player.hasSkillTag('pretao')) return 5;
                                    return 2;
                                },
                                useful: [8, 6.5, 5, 4],
                                value: [8, 6.5, 5, 4],
                            },
                            result: {
                                target: 2,
                                target_use(player, target) {
                                    // if(player==target&&player.hp<=0) return 2;
                                    if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                                    var nd = player.needsToDiscard();
                                    var keep = false;
                                    if (nd <= 0) {
                                        keep = true;
                                    } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                        keep = true;
                                    }
                                    var mode = get.mode();
                                    if (target.hp >= 2 && keep && target.hasFriend()) {
                                        if (target.hp > 2 || nd == 0) return 0;
                                        if (target.hp == 2) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    if (target != current && get.attitude(target, current) >= 3) {
                                                        if (current.hp <= 1) return true;
                                                        if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                    }
                                                })
                                            ) {
                                                return 0;
                                            }
                                        }
                                    }
                                    if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                    var att = get.attitude(player, target);
                                    if (att < 3 && att >= 0 && player != target) return 0;
                                    var tri = _status.event.getTrigger();
                                    if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                        if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                            var num = game.countPlayer(function (current) {
                                                if (current.identity == 'fan') {
                                                    return current.countCards('h', 'tao');
                                                }
                                            });
                                            if (num > 1 && player == target) return 2;
                                            return 0;
                                        }
                                    }
                                    if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                        if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                            return 0;
                                        }
                                    }
                                    if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
                                        return 0;
                                    }
                                    return 2;
                                },
                            },
                            tag: {
                                recover: 1,
                                save: 1,
                            },
                        },
                    },
                    diy_longdan2: {
                        audio: 'diy_longdan',
                        enable: ['chooseToUse', 'chooseToRespond'],
                        prompt() {
                            return '将一张♦️️牌当作杀使用或打出';
                        },
                        position: 'hes',
                        check(card, event) {
                            if (ui.selected.cards.length) return 0;
                            return 10 - get.value(card);
                        },
                        selectCard: 1,
                        viewAs: {
                            name: 'sha',
                        },
                        filter(event, player) {
                            return player.countCards('he', { suit: 'diamond' }) > 0;
                        },
                        filterCard(card) {
                            return card.suit == 'diamond';
                        },
                        ai: {
                            basic: {
                                useful: [5, 1],
                                value: [5, 1],
                            },
                            order(item, player) {
                                if (player.hasSkillTag('presha', true, null, true)) return 10;
                                if (lib.linked.includes(get.nature(item))) return player.getCardUsable('sha') > 1 ? 3 : 3.1;
                                return 3.05;
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
                        },
                    },
                    diy_longdan3: {
                        audio: 'diy_longdan',
                        enable: ['chooseToUse', 'chooseToRespond'],
                        prompt() {
                            return '将一张♠️️牌当作酒使用';
                        },
                        position: 'hes',
                        check(card, event) {
                            if (ui.selected.cards.length) return 0;
                            return 10 - get.value(card);
                        },
                        selectCard: 1,
                        viewAs: {
                            name: 'jiu',
                        },
                        filter(event, player) {
                            return player.countCards('he', { suit: 'spade' }) > 0;
                        },
                        filterCard(card) {
                            return card.suit == 'spade';
                        },
                        ai: {
                            basic: {
                                useful(card, i) {
                                    if (_status.event.player.hp > 1) {
                                        if (i == 0) return 4;
                                        return 1;
                                    }
                                    if (i == 0) return 7.3;
                                    return 3;
                                },
                                value(card, player, i) {
                                    if (player.hp > 1) {
                                        if (i == 0) return 5;
                                        return 1;
                                    }
                                    if (i == 0) return 7.3;
                                    return 3;
                                },
                            },
                            order() {
                                return get.order({ name: 'sha' }) + 0.2;
                            },
                            result: {
                                target(player, target) {
                                    if (target && target.isDying()) return 2;
                                    if (target && !target.isPhaseUsing()) return 0;
                                    if (lib.config.mode == 'stone' && !player.isMin()) {
                                        if (player.getActCount() + 1 >= player.actcount) return 0;
                                    }
                                    var shas = player.getCards('h', 'sha');
                                    if (shas.length > 1 && (player.getCardUsable('sha') > 1 || player.countCards('h', 'zhuge'))) {
                                        return 0;
                                    }
                                    shas.sort(function (a, b) {
                                        return get.order(b) - get.order(a);
                                    });
                                    var card;
                                    if (shas.length) {
                                        for (var i = 0; i < shas.length; i++) {
                                            if (lib.filter.filterCard(shas[i], target)) {
                                                card = shas[i];
                                                break;
                                            }
                                        }
                                    } else if (player.hasSha() && player.needsToDiscard()) {
                                        if (player.countCards('h', 'hufu') != 1) {
                                            card = { name: 'sha' };
                                        }
                                    }
                                    if (card) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return (
                                                    get.attitude(target, current) < 0 &&
                                                    target.canUse(card, current, true, true) &&
                                                    !current.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    }) &&
                                                    get.effect(current, card, target) > 0
                                                );
                                            })
                                        ) {
                                            return 1;
                                        }
                                    }
                                    return 0;
                                },
                            },
                            tag: {
                                save: 1,
                            },
                        },
                    },
                    diy_longdan4: {
                        audio: 'diy_longdan',
                        enable: ['chooseToUse', 'chooseToRespond'],
                        prompt() {
                            return '将一张♣️️牌当作闪使用或打出';
                        },
                        position: 'hes',
                        check(card, event) {
                            if (ui.selected.cards.length) return 0;
                            return 10 - get.value(card);
                        },
                        selectCard: 1,
                        viewAs: {
                            name: 'shan',
                        },
                        filter(event, player) {
                            return player.countCards('he', { suit: 'club' }) > 0;
                        },
                        filterCard(card) {
                            return card.suit == 'club';
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
                    diy_reyajiao: {
                        audio: 'ext:群阴汇聚/audio:4',
                        trigger: {
                            player: ['useCard', 'respond'],
                        },
                        forced: true,
                        content() {
                            'step 0';
                            event.card = get.cards()[0];
                            player.showCards(event.card);
                            player
                                .chooseControl('cancel2')
                                .set('prompt', `【涯角】请选择一项对${get.translation(event.card)}进行操作,或点<取消>放回牌堆顶`)
                                .set('choiceList', [`将${get.translation(event.card)}交给一名角色`, `将${get.translation(event.card)}置于牌堆底`])
                                .set('ai', function () {
                                    return 0;
                                });
                            ('step 1');
                            if (result.control == 'cancel2') {
                                event.card.fix();
                                ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
                                game.log(player, '将', event.card, '置于牌堆顶');
                            } else {
                                event.index = result.index;
                                if (event.index == 0) {
                                    player
                                        .chooseTarget('选择获得此牌的角色', true)
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (_status.event.du) {
                                                if (target.hasSkillTag('nodu')) return 0;
                                                return -att;
                                            }
                                            if (att > 0) {
                                                return att + Math.max(0, 5 - target.countCards('h'));
                                            }
                                            return att;
                                        })
                                        .set('du', event.card.name == 'du');
                                } else {
                                    event.card.fix();
                                    ui.cardPile.appendChild(event.card);
                                    game.log(player, '将', event.card, '置于牌堆底');
                                }
                            }
                            if (!event.index || event.index != 0) {
                                game.updateRoundNumber();
                            }
                            ('step 2');
                            if (result.bool && event.index == 0) {
                                player.line(result.targets, 'green');
                                result.targets[0].gain(event.card, 'gain2');
                            }
                            ('step 3');
                            if (get.type(event.card, 'trick') != get.type(trigger.card, 'trick') || player == _status.currentPhase) {
                                player
                                    .chooseTarget('是否弃置一名角色区域内的一张牌？', function (card, player, target) {
                                        return target.countDiscardableCards(player, 'hej') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (target.countCards('j')) return att;
                                        return -att;
                                    });
                            }
                            ('step 4');
                            if (result.targets?.length) {
                                player.line(result.targets[0], 'green');
                                player.discardPlayerCard(result.targets[0], 'hej', true);
                            }
                        },
                        ai: {
                            effect: {
                                target(card, player, target) {
                                    if (get.tag(card, 'respond') && target.countCards('h') > 1) return [1, 0.2];
                                },
                            },
                        },
                    },
                    reyajiaoqiang_skill: {
                        trigger: {
                            player: 'useCardAfter',
                        },
                        filter(event, player) {
                            if (_status.currentPhase == player || get.color(event.card) != 'black' || event.cards.filterInD().length == 0) return false;
                            return (
                                player
                                    .getHistory('useCard', function (evt) {
                                        return get.color(evt.card) == 'black';
                                    })
                                    .indexOf(event) == 0
                            );
                        },
                        prompt2(event, player) {
                            return `摸一张牌弃置${get.translation(_status.currentPhase)}的一张牌并获得` + get.translation(event.cards.filterInD());
                        },
                        content() {
                            player.draw();
                            if (_status.currentPhase) {
                                player.discardPlayerCard(_status.currentPhase, 'he', true);
                            }
                            player.gain(trigger.cards.filterInD(), 'gain2', 'log');
                        },
                    },
                    rejuejing: {
                        audio: 'ext:群阴汇聚/audio:3',
                        trigger: {
                            player: ['phaseDrawBefore', 'phaseJudgeBefore'],
                        },
                        forced: true,
                        popup: false,
                        content() {
                            trigger.cancel();
                        },
                        ai: {
                            noh: true,
                        },
                        group: ['rejuejing2', 'rejuejing4'],
                    },
                    rejuejing4: {
                        mod: {
                            targetEnabled(card, player, target) {
                                if (get.type(card) == 'delay') {
                                    return false;
                                }
                            },
                        },
                        audio: 'rejuejing',
                        trigger: {
                            player: ['dying', 'dyingAfter'],
                        },
                        forced: true,
                        content() {
                            player.draw();
                        },
                    },
                    rejuejing2: {
                        trigger: {
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter', 'changeHp', 'phaseBefore'],
                            player: ['loseAfter', 'enterGame'],
                        },
                        forced: true,
                        filter(event, player, name) {
                            var target = game.findPlayer(function (current) {
                                return current.isMaxHp();
                            });
                            if (event.name == 'gain' && event.player == player) return player.countCards('h') > Math.min(8, Math.max(4, target.hp));
                            if (['phaseBefore', 'enterGame'].includes(name)) {
                                return player.countCards('h') != Math.min(8, Math.max(4, target.hp)) && (event.name != 'phase' || game.phaseNumber == 0);
                            } else if (name == 'changeHp') return player.countCards('h') != Math.min(8, Math.max(4, target.hp));
                            else {
                                var evt = event.getl(player);
                                if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= Math.min(8, Math.max(4, target.hp))) return false;
                                var evt = event;
                                for (var i = 0; i < Math.min(8, Math.max(4, target.hp)); i++) {
                                    evt = evt.getParent('rejuejing2');
                                    if (evt.name != 'rejuejing2') return true;
                                }
                            }
                            return false;
                        },
                        content() {
                            var target = game.findPlayer(function (current) {
                                return current.isMaxHp();
                            });
                            var num = Math.min(8, Math.max(4, target.hp)) - player.countCards('h');
                            if (num > 0) player.draw(num);
                            else player.chooseToDiscard('h', true, -num);
                        },
                        audio: 'rejuejing',
                    },
                    diy_relonghun: {
                        audio: 'ext:群阴汇聚/audio:3',
                        enable: ['chooseToUse', 'chooseToRespond'],
                        prompt: '将♦️️牌当做火杀,♥️️牌当做桃,黑色牌当做酒使用或打出',
                        viewAs(cards, player) {
                            var name = false;
                            var nature = null;
                            //根据选择的卡牌的花色 判断要转化出的卡牌是火杀还是酒还是桃
                            switch (cards[0]?.suit) {
                                case 'diamond':
                                    name = 'sha';
                                    nature = 'fire';
                                    break;
                                case 'heart':
                                    name = 'tao';
                                    break;
                                case 'club':
                                    name = 'jiu';
                                    break;
                                case 'spade':
                                    name = 'jiu';
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
                                var list = ['sha', 'tao', 'jiu'];
                                var map = { sha: 'diamond', tao: 'heart', jiu: 'club', jiu: 'spade' };
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
                        selectCard: 1,
                        position: 'hes',
                        filterCard(card, player, event) {
                            event = event || _status.event;
                            //获取当前时机的卡牌选择限制
                            var filter = event._backup.filterCard;
                            //获取卡牌花色或颜色
                            var name = card.suit;
                            //如果这张牌是♦️️并且当前时机能够使用/打出火杀 那么这张牌可以选择
                            if (name == 'diamond' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) return true;
                            //如果这张牌是黑色并且当前时机能够使用/打出酒 那么这张牌可以选择
                            if (name == 'club' && filter({ name: 'jiu', cards: [card] }, player, event)) return true;
                            if (name == 'spade' && filter({ name: 'jiu', cards: [card] }, player, event)) return true;
                            //如果这张牌是♥️️并且当前时机能够使用/打出桃 那么这张牌可以选择
                            if (name == 'heart' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                            //上述条件都不满足 那么就不能选择这张牌
                            return false;
                        },
                        filter(event, player) {
                            //获取当前时机的卡牌选择限制
                            var filter = event.filterCard;
                            //如果当前时机能够使用/打出火杀并且角色有♦️️ 那么可以发动技能
                            if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('he', { suit: 'diamond' })) return true;
                            //如果当前时机能够使用/打出桃并且角色有♥️️ 那么可以发动技能
                            if (filter({ name: 'tao' }, player, event) && player.countCards('he', { suit: 'heart' })) return true;
                            //如果当前时机能够使用/打出酒并且角色有黑色 那么可以发动技能
                            if (filter({ name: 'jiu' }, player, event) && player.countCards('he', { suit: 'club' })) return true;
                            if (filter({ name: 'jiu' }, player, event) && player.countCards('he', { suit: 'spade' })) return true;
                            return false;
                        },
                        ai: {
                            respondSha: true,
                            save: true,
                            skillTagFilter(player, tag) {
                                var name;
                                switch (tag) {
                                    case 'respondSha':
                                        name = 'diamond';
                                        break;
                                    case 'save':
                                        name = 'spade';
                                        break;
                                    case 'save':
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
                                    var list = ['sha', 'tao', 'jiu'];
                                    var map = { sha: 'diamond', tao: 'heart', jiu: 'spade', jiu: 'club' };
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
                            if (name == 'tao') return player.countCards('hes', { suit: 'heart' }) > 0;
                        },
                        group: ['diy_xinlongdan_num', 'diy_xinlongdan_discard', 'diy_relonghun1', 'diy_relonghun2'],
                    },
                    diy_relonghun1: {
                        audio: 'diy_relonghun',
                        enable: ['chooseToUse', 'chooseToRespond'],
                        prompt() {
                            return '将一张黑色牌当作无懈可击使用';
                        },
                        position: 'hes',
                        filter(event, player) {
                            var filter = event.filterCard;
                            if (filter({ name: 'wuxie' }, player, event) && player.countCards('he', { color: 'black' })) return true;
                            return false;
                        },
                        check(card, event) {
                            if (_status.event.player.hp > 1) return 0;
                            return 7 - get.value(card);
                        },
                        selectCard: 1,
                        viewAs: {
                            name: 'wuxie',
                        },
                        viewAsFilter(player) {
                            return player.countCards('he', { color: 'black' });
                        },
                        filterCard(card) {
                            return get.color(card) == 'black';
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
                        hiddenCard(player, name) {
                            if (name == 'wuxie' && _status.connectMode && player.countCards('hes') > 0) return true;
                            if (name == 'wuxie') return player.countCards('hes', { color: 'black' }) > 0;
                        },
                    },
                    diy_relonghun2: {
                        audio: 'diy_relonghun',
                        enable: ['chooseToUse', 'chooseToRespond'],
                        prompt() {
                            return '将一张黑色牌当作闪使用';
                        },
                        position: 'hes',
                        filter(event, player) {
                            var filter = event.filterCard;
                            if (filter({ name: 'shan' }, player, event) && player.countCards('he', { color: 'black' })) return true;
                            return false;
                        },
                        check(card, event) {
                            if (_status.event.player.hp > 1) return 0;
                            return 10 - get.value(card);
                        },
                        selectCard: 1,
                        viewAs: {
                            name: 'shan',
                        },
                        viewAsFilter(player) {
                            return player.countCards('he', { color: 'black' });
                        },
                        filterCard(card) {
                            return get.color(card) == 'black';
                        },
                        ai: {
                            respondShan: true,
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
                    bm_shuangqiang2: {
                        mod: {
                            cardUsable(card, player, num) {
                                var equip = player.getCards('e', { subtype: 'equip1' });
                                if (equip.length > 1 && card.name == 'sha') return num + equip.length - 1;
                            },
                        },
                        audio: 'bm_shuangqiang',
                        trigger: {
                            player: 'equipBefore',
                        },
                        forced: true,
                        filter(event, player) {
                            if (event.isequipx) return false;
                            var current = player.getCards('e', { subtype: get.subtype(event.card) });
                            if (!current.length) return false;
                            return get.subtype(event.card) == 'equip1';
                        },
                        async content(event, trigger, player) {
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
                            const info = get.info(card, false);
                            if (info.skills) {
                                for (const i of info.skills) {
                                    player.addSkillTrigger(i);
                                }
                            }
                            const cards = player.getCards('e', { subtype: get.subtype(card) });//没有trigger.card
                            const num = cards.length - 2;
                            if (num > 0) {
                                const { links } = await player.chooseButton(['选择弃置', cards], num, true).forResult();
                                if (links.length) {
                                    player.discard(links);
                                }
                            }
                        },
                        ai: {
                            effect: {
                                target(card, player, target, current) {
                                    if (get.subtype(card) == 'equip1') return [1, 3];
                                },
                            },
                            threaten: 1,
                        },
                    },
                    bm_shuangqiang: {
                        audio: 'ext:群阴汇聚/audio:3',
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        filter(event, player) {
                            return (event.name != 'phase' || game.phaseNumber == 0) && !player.isDisabled(1);
                        },
                        forced: true,
                        group: 'bm_shuangqiang2',
                        content() {
                            'step 0';
                            var card1 = game.createCard('reyajiaoqiang', 'diamond', 6),
                                card2 = game.createCard('reyinyueqiang', 'diamond', 12);
                            var list = [card1, card2];
                            player.chooseButton(['【双枪】请选择你的初始专属装备', list], true).ai = function (button) {
                                return get.equipValue(button);
                            };
                            ('step 1');
                            if (result.links?.length) {
                                lib.inpile.add(result.links[0].name);
                                player.equip(result.links[0]);
                            } //QQQ
                        },
                        mod: {
                            canBeGained(card) {
                                if ((get.position(card) == 'e' && card.name == 'reyajiaoqiang') || (get.position(card) == 'e' && card.name == 'reyinyueqiang')) return false;
                            },
                            canBeDiscarded(card) {
                                if ((get.position(card) == 'e' && card.name == 'reyajiaoqiang') || (get.position(card) == 'e' && card.name == 'reyinyueqiang')) return false;
                            },
                        },
                    },
                    rezhanjiang: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'phaseZhunbeiBegin',
                        },
                        forced: true,
                        content() {
                            var list = [];
                            var card1 = get.cardPile('reqinggang', 'field'),
                                card2 = get.cardPile('chixueqingfeng_reqinggang', 'field');
                            if (card1) list.push(card1);
                            if (card2) list.push(card2);
                            game.countPlayer(function (current) {
                                var h = current.getCards('h', { name: ['reqinggang', 'chixueqingfeng_reqinggang'] });
                                if (h.length) {
                                    list.addArray(h);
                                }
                            });
                            if (list.length) {
                                var card = list.randomGet();
                                var owner = get.owner(card);
                                if (owner) {
                                    if (owner != player) owner.damage();
                                    player.gain(card, owner, 'give');
                                    player.line(owner, 'green');
                                } else player.gain(card, 'gain2');
                            }
                        },
                        group: 'rezhanjiang_jingxie',
                        subSkill: {
                            jingxie: {
                                position: 'hes',
                                enable: 'phaseUse',
                                prompt: '请选择一张【界青釭剑】',
                                filter(event, player) {
                                    var hes = player.getCards('hes');
                                    return hes.some((i) => i.name == 'reqinggang');
                                },
                                filterCard: {
                                    name: 'reqinggang',
                                },
                                discard: false,
                                lose: false,
                                delay: false,
                                check() {
                                    return 1;
                                },
                                content() {
                                    'step 0';
                                    player.showCards(cards);
                                    ('step 1');
                                    var card = cards[0];
                                    var bool = get.position(card) == 'e';
                                    if (bool) player.removeEquipTrigger(card);
                                    game.addVideo('skill', player, ['rezhanjiang', [bool, get.cardInfo(card)]]);
                                    game.broadcastAll(function (card) {
                                        card.init([card.suit, card.number, 'chixueqingfeng_' + card.name]);
                                        if (!bool) player.equip(card);
                                    }, card);
                                    if (bool) {
                                        var info = get.info(card);
                                        if (info.skills) {
                                            for (var i = 0; i < info.skills.length; i++) {
                                                player.addSkillTrigger(info.skills[i]);
                                            }
                                        }
                                    }
                                },
                                ai: {
                                    basic: {
                                        order: 10,
                                    },
                                    result: {
                                        player: 1,
                                    },
                                },
                            },
                        },
                    },
                    reqinggang_skill: {
                        equipSkill: true,
                        audio: 'qinggang_skill',
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        forced: true,
                        logTarget: 'target',
                        content() {
                            trigger.target.addTempSkill('qinggang2');
                            trigger.target.storage.qinggang2.push(trigger.card);
                        },
                        ai: {
                            unequip: true,
                            skillTagFilter(player, tag, arg) {
                                if (arg && arg.name == 'sha') return true;
                                return false;
                            },
                        },
                        group: 'reqinggang_skill_xiejia',
                        subSkill: {
                            xiejia: {
                                equipSkill: true,
                                trigger: {
                                    source: 'damageBegin2',
                                },
                                filter(event, player) {
                                    return event.card && event.card.name == 'sha' && event.player.countCards('e', (c) => ['equip1', 'equip2'].includes(get.subtype(c))) > 0;
                                },
                                forced: true,
                                audio: true,
                                content() {
                                    'step 0';
                                    var att = get.attitude(player, trigger.player) <= 0;
                                    var next = player.chooseButton();
                                    next.set('att', att);
                                    next.set('createDialog', [`是否弃置${get.translation(trigger.player)}的一张武器牌或防具牌`, trigger.player.getCards('e', (c) => ['equip1', 'equip2'].includes(get.subtype(c)))]);
                                    next.set('ai', function (button) {
                                        if (_status.event.att) return get.buttonValue(button);
                                        return 0;
                                    });
                                    ('step 1');
                                    if (result.links?.length) {
                                        trigger.player.discard(result.links[0]);
                                    }
                                },
                            },
                        },
                    },
                    reyinyueqiang_skill: {
                        equipSkill: true,
                        trigger: {
                            player: ['useCard', 'respondAfter'],
                        },
                        forced: true,
                        filter(event, player) {
                            if (_status.currentPhase == player) return false;
                            if (!event.cards) return false;
                            if (event.cards.length != 1) return false;
                            if (lib.filter.autoRespondSha.call({ player: player })) return false;
                            return get.color(event.cards[0]) == 'black' && !_status.dying.length;
                        },
                        content() {
                            'step 0';
                            var next = player.chooseToUse(get.prompt('reyinyueqiang_skill'), { name: 'sha' }, function (card) {
                                return _status.event.player.getEquip('reyinyueqiang') != card;
                            });
                            next.aidelay = true;
                            next.noButton = true;
                            ('step 1');
                            if (result.targets?.length) {
                                result.targets[0].damage('nodelay', result.cards[0].nature);
                                player.draw('nodelay');
                            }
                        },
                    },
                    chixueQ: {
                        equipSkill: true,
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        logTarget: 'target',
                        forced: true,
                        content() {
                            trigger.target.addTempSkill('chixueqingfeng2', 'shaAfter');
                            trigger.target.addTempSkill('qinggang2');
                            trigger.target.storage.qinggang2.push(trigger.card);
                        },
                        ai: {
                            damageBonus: true,
                        },
                        group: 'chixueQ_xiejia',
                        subSkill: {
                            xiejia: {
                                equipSkill: true,
                                trigger: {
                                    source: 'damageBegin2',
                                },
                                filter(event, player) {
                                    return event.card && event.card.name == 'sha' && event.player.countCards('e', (c) => ['equip1', 'equip2'].includes(get.subtype(c))) > 0;
                                },
                                forced: true,
                                audio: true,
                                content() {
                                    var att = get.attitude(player, trigger.player) <= 0;
                                    player
                                        .chooseButton()
                                        .set('att', att)
                                        .set('createDialog', [`是否弃置${get.translation(trigger.player)}的一张武器牌或防具牌,此伤害+1`, trigger.player.getCards('e', (c) => ['equip1', 'equip2'].includes(get.subtype(c)))]) //QQQ
                                        .set('ai', function (button) {
                                            if (_status.event.att) return get.buttonValue(button);
                                            return 0;
                                        });
                                    ('step 1');
                                    if (result.links?.length) {
                                        trigger.player.discard(result.links[0]);
                                        trigger.num++;
                                    }
                                },
                            },
                        },
                    },
                    equip_liushan_skill: {
                        equipSkill: true,
                        trigger: {
                            target: 'useCardToTarget',
                        },
                        forced: true,
                        check(event, player) {
                            return get.effect(event.target, event.card, event.player, player) < 0;
                        },
                        filter(event, player) {
                            if (['nanman', 'wanjian'].includes(event.card.name)) return true;
                            return false;
                        },
                        content() {
                            trigger.parent.targets.remove(player);
                        },
                        ai: {
                            effect: {
                                target(card, player, target, current) {
                                    if (['nanman', 'wanjian'].includes(card.name)) {
                                        return 'zeroplayertarget';
                                    }
                                },
                            },
                        },
                        group: 'equip_liushan_skill_recover',
                        subSkill: {
                            recover: {
                                equipSkill: true,
                                trigger: {
                                    player: 'dying',
                                },
                                forced: true,
                                round: 1,
                                content() {
                                    player.recover();
                                },
                                group: ['equip_liushan_skill_recover_roundcount'],
                            },
                        },
                    },
                    recunmu: {
                        mark: true,
                        intro: {
                            name(name, player) {
                                if (player != game.me) return '寸目';
                                return '牌堆底的一张牌';
                            },
                            mark(dialog, content, player) {
                                if (get.itemtype(ui.cardPile.lastChild) != 'card') return '牌堆顶无牌';
                                if (player != game.me) return '你想偷看？门都没有!';
                                dialog.add([ui.cardPile.lastChild]);
                            },
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'drawBegin',
                        },
                        forced: true,
                        content() {
                            trigger.bottom = true;
                        },
                        group: ['recunmu_tianbian', 'recunmu_number'],
                        subSkill: {
                            tianbian: {
                                audio: 'recunmu',
                                enable: 'chooseCard',
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
                                    return game.cardsGotoOrdering(get.bottomCards()).cards;
                                },
                            },
                            number: {
                                audio: 'recunmu',
                                trigger: {
                                    player: 'compare',
                                    target: 'compare',
                                },
                                filter(event, player) {
                                    if (event.iwhile) return false;
                                    if (event.player == player) {
                                        return event.card1.suit == 'spade'; //&&event.card1.vanishtag.includes('tianbian');
                                    } else {
                                        return event.card2.suit == 'spade'; //&&event.card2.vanishtag.includes('tianbian');
                                    }
                                },
                                silent: true,
                                content() {
                                    game.log(player, '拼点牌点数视为', '#yK');
                                    if (player == trigger.player) {
                                        trigger.num1 = 13;
                                    } else {
                                        trigger.num2 = 13;
                                    }
                                },
                                forced: true,
                                popup: false,
                            },
                        },
                    },
                    diy_reyiji2: {
                        trigger: {
                            player: 'phaseDrawBegin',
                        },
                        charlotte: true,
                        forced: true,
                        mark: true,
                        popup: '遗计拿牌',
                        audio: 2, //QQQ
                        content() {
                            player.gain(player.storage.diy_reyiji2, 'fromStorage', 'draw');
                            player.storage.diy_reyiji2.length = 0;
                            delete player.storage.diy_reyiji3;
                            player.removeSkill('diy_reyiji2');
                        },
                        intro: {
                            onunmark: 'throw',
                            mark(dialog, content, player) {
                                if (player.storage.diy_reyiji3 == game.me || player.storage.diy_reyiji3.isUnderControl()) {
                                    dialog.push(player.storage.diy_reyiji2);
                                } else {
                                    return `共有${get.cnNumber(player.storage.diy_reyiji2.length)}张牌`;
                                }
                            },
                            content(content, player) {
                                if (player.storage.diy_reyiji3 == game.me || player.storage.diy_reyiji3.isUnderControl()) {
                                    return get.translation(player.storage.diy_reyiji2);
                                }
                                return `共有${get.cnNumber(player.storage.diy_reyiji2.length)}张牌`;
                            },
                        },
                    },
                    new_reshicai_choose: {
                        enable: ['chooseToUse', 'chooseToRespond'],
                        chooseButton: {
                            dialog(event, player) {
                                return ui.create.dialog('【恃才】请将此牌使用或打出', [ui.cardPile.lastChild], 'hidden');
                            },
                            filter(button, player) {
                                var evt = _status.event.parent;
                                if (evt && evt.filterCard) {
                                    return evt.filterCard(button.link, player, evt);
                                }
                                return true;
                            },
                            check(button) {
                                return 1;
                            },
                            backup(links, player) {
                                return {
                                    audio: 'new_reshicai',
                                    filterCard() {
                                        return false;
                                    },
                                    selectCard: -1,
                                    position: 'h',
                                    viewAs: links[0],
                                };
                            },
                            prompt(links) {
                                return `选择${get.translation(links[0])}的目标`;
                            },
                        },
                        hiddenCard(player, name) {
                            if (name == 'wuxie' && _status.connectMode) return true;
                            if (name == 'wuxie') return ui.cardPile.lastChild.name == 'wuxie';
                            if (name == 'tao') return ui.cardPile.lastChild.name == 'tao';
                        },
                        ai: {
                            respondSha: true,
                            respondShan: true,
                            save: true,
                            order(item, player) {
                                var event = _status.event;
                                if (event.type != 'phase') return 4;
                                if (!player) return -1;
                                return 0.1;
                            },
                            effect: {
                                target(card, player, target, effect) {
                                    if (get.tag(card, 'respondShan') || get.tag(card, 'respondSha') || get.tag(card, 'save')) return 0.7;
                                },
                            },
                            result: {
                                player(player) {
                                    if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                    for (var i = 0; i < 1; i++) {
                                        var card = ui.cardPile.childNodes[i];
                                        if (
                                            game.hasPlayer(function (current) {
                                                var evt = _status.event.parent;
                                                if (evt && evt.filterCard) {
                                                    return (
                                                        evt.filterCard(button.link, player, evt) &&
                                                        game.hasPlayer(function (current) {
                                                            return player.canUse(button.link, current, false) && get.effect(current, card, player, player) > 0;
                                                        })
                                                    );
                                                }
                                                return game.hasPlayer(function (current) {
                                                    return get.effect(current, card, player, player) > 0;
                                                });
                                            })
                                        )
                                            return 1;
                                    }
                                    return 1;
                                },
                            },
                            basic: {
                                useful: [6, 4],
                                value: [6, 4],
                            },
                            expose: 0.2,
                            useful: -1,
                            value: -1,
                        },
                    },
                    rebagua_skill: {
                        equipSkill: true,
                        trigger: {
                            player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                        },
                        filter(event, player) {
                            if (event.responded) return false;
                            if (event.bagua_skill) return false;
                            if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                            if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                            if (player.hasSkillTag('unequip2')) return false;
                            var evt = event.parent;
                            if (
                                evt.player &&
                                evt.player.hasSkillTag('unequip', false, {
                                    name: evt.card ? evt.card.name : null,
                                    target: player,
                                    card: evt.card,
                                })
                            )
                                return false;
                            return true;
                        },
                        audio: 'bagua_skill',
                        check(event, player) {
                            if (event && (event.ai || event.ai1)) {
                                var ai = event.ai || event.ai1;
                                var tmp = _status.event;
                                _status.event = event;
                                var result = ai({ name: 'shan' }, _status.event.player, event);
                                _status.event = tmp;
                                return result > 0;
                            }
                            return true;
                        },
                        content() {
                            'step 0';
                            trigger.bagua_skill = true;
                            player.judge('rebagua', function (card) {
                                return get.color(card) == 'red' ? 1.5 : -0.5;
                            }).judge2 = function (result) {
                                return result.bool;
                            };
                            ('step 1');
                            if (result.judge > 0) {
                                trigger.untrigger();
                                trigger.set('responded', true);
                                trigger.result = { bool: true, card: { name: 'shan' } };
                            } else if (result.judge < 0) player.draw();
                        },
                        ai: {
                            respondShan: true,
                            effect: {
                                target(card, player, target, effect) {
                                    if (target.hasSkillTag('unequip2')) return;
                                    if (
                                        player.hasSkillTag('unequip', false, {
                                            name: card ? card.name : null,
                                            target: target,
                                            card: card,
                                        }) ||
                                        player.hasSkillTag('unequip', false, {
                                            name: card ? card.name : null,
                                            target: target,
                                            card: card,
                                        })
                                    )
                                        return;
                                    if (get.tag(card, 'respondShan')) return 0.5;
                                },
                            },
                        },
                    },
                    reqicai_rebagua: {
                        audio: 'ext:群阴汇聚/audio:2',
                        inherit: 'rebagua_skill',
                        filter(event, player) {
                            if (!lib.skill.rebagua_skill.filter(event, player)) return false;
                            if (!player.isEmpty(2)) return false;
                            return true;
                        },
                        ai: {
                            respondShan: true,
                            effect: {
                                target(card, player, target) {
                                    if (player == target && get.subtype(card) == 'equip2') {
                                        if (get.equipValue(card) <= 7.5) return 0;
                                    }
                                    if (target.getEquip(2)) return;
                                    return lib.skill.rebagua_skill.ai.effect.target.apply(this, arguments);
                                },
                            },
                        },
                        equipSkill: true,
                        trigger: {
                            player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                        },
                        check(event, player) {
                            if (event && (event.ai || event.ai1)) {
                                var ai = event.ai || event.ai1;
                                var tmp = _status.event;
                                _status.event = event;
                                var result = ai({ name: 'shan' }, _status.event.player, event);
                                _status.event = tmp;
                                return result > 0;
                            }
                            return true;
                        },
                        content() {
                            'step 0';
                            trigger.bagua_skill = true;
                            player.judge('bagua', function (card) {
                                return get.color(card) == 'red' ? 1.5 : -0.5;
                            }).judge2 = function (result) {
                                return result.bool;
                            };
                            ('step 1');
                            if (result.judge > 0) {
                                trigger.untrigger();
                                trigger.set('responded', true);
                                trigger.result = { bool: true, card: { name: 'shan' } };
                            } else if (result.judge < 0) player.draw();
                        },
                        audioname2: {
                            old_yuanshu: 'weidi',
                        },
                    },
                    reqicai_rezhuge: {
                        onremove(player, skill) {
                            player.removeMark('rezhuge_mark', player.storage.rezhuge_mark);
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        inherit: 'rezhuge_skill',
                        filter(event, player) {
                            if (!lib.skill.rezhuge_skill.filter(event, player)) return false;
                            if (!player.isEmpty(1)) return false;
                            return true;
                        },
                        equipSkill: true,
                        firstDo: true,
                        trigger: {
                            player: 'useCard1',
                        },
                        forced: true,
                        content() {
                            player.addMark('rezhuge_mark', 1);
                        },
                        mod: {
                            cardUsable(card, player, num) {
                                var cardx = player.getEquip('rezhuge');
                                if (player.isEmpty(1) && card.name == 'sha' && (!cardx || player.hasSkill('reqicai_rezhuge', null, false) || (!_status.rezhuge_temp && !ui.selected.cards.includes(cardx)))) {
                                    return num + 3;
                                }
                            },
                            attackRange(player, num) {
                                return num + (player.storage.rezhuge_mark || 0);
                            },
                            cardEnabled2(card, player) {
                                if (!_status.event.addCount_extra || player.hasSkill('reqicai_rezhuge', null, false)) return;
                                if (card && card == player.getEquip('rezhuge')) {
                                    try {
                                        var cardz = get.card();
                                    } catch (e) {
                                        return;
                                    }
                                    if (!cardz || cardz.name != 'sha') return;
                                    _status.rezhuge_temp = true;
                                    var bool = lib.filter.cardUsable({ name: 'sha' }, player);
                                    delete _status.rezhuge_temp;
                                    if (!bool) return false;
                                }
                            },
                        },
                        subSkill: {
                            clear: {
                                trigger: {
                                    global: 'phaseAfter',
                                },
                                silent: true,
                                content() {
                                    player.removeMark('rezhuge_mark', player.storage.rezhuge_mark);
                                },
                                forced: true,
                                popup: false,
                                audioname2: {
                                    old_yuanshu: 'weidi',
                                },
                            },
                        },
                        group: 'rezhuge_skill_clear',
                        audioname2: {
                            old_yuanshu: 'weidi',
                        },
                    },
                    rezhuge_skill: {
                        equipSkill: true,
                        audio: 'zhuge_skill',
                        firstDo: true,
                        trigger: {
                            player: 'useCard1',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        content() {
                            player.addMark('rezhuge_mark', 1);
                        },
                        mod: {
                            cardUsable(card, player, num) {
                                var cardx = player.getEquip('rezhuge');
                                if (card.name == 'sha' && (!cardx || player.hasSkill('rezhuge_skill', null, false) || (!_status.rezhuge_temp && !ui.selected.cards.includes(cardx)))) {
                                    return num + 3;
                                }
                            },
                            attackRange(player, num) {
                                return num + (player.storage.rezhuge_mark || 0);
                            },
                            cardEnabled2(card, player) {
                                if (!_status.event.addCount_extra || player.hasSkill('rezhuge_skill', null, false)) return;
                                if (card && card == player.getEquip('rezhuge')) {
                                    try {
                                        var cardz = get.card();
                                    } catch (e) {
                                        return;
                                    }
                                    if (!cardz || cardz.name != 'sha') return;
                                    _status.rezhuge_temp = true;
                                    var bool = lib.filter.cardUsable({ name: 'sha' }, player);
                                    delete _status.rezhuge_temp;
                                    if (!bool) return false;
                                }
                            },
                        },
                        group: 'rezhuge_skill_clear',
                        subSkill: {
                            clear: {
                                trigger: {
                                    global: 'phaseAfter',
                                },
                                silent: true,
                                content() {
                                    player.removeMark('rezhuge_mark', player.storage.rezhuge_mark);
                                },
                                forced: true,
                                popup: false,
                            },
                        },
                    },
                    rezhuge_mark: {
                        marktext: '文',
                        intro: {
                            name: '文射',
                            content(storage, player) {
                                return '本回合你的攻击范围为' + (storage + 1);
                            },
                        },
                    },
                    resongwei3: {},
                    regeju: {
                        audio: 'ext:群阴汇聚/audio:2',
                        zhuSkill: true,
                        enable: 'phaseUse',
                        filterCard: {
                            type: 'basic',
                        },
                        filter(event, player) {
                            var bool = game.hasPlayer(function (current) {
                                return current != player && get.distance(current, player) > 1;
                            });
                            return (
                                bool &&
                                player.countCards('h', function (card) {
                                    return get.type(card) == 'basic';
                                }) > 0
                            );
                        },
                        check(card) {
                            var player = _status.event.player;
                            if (card.name == 'du') return 20;
                            if (
                                get.position(card) == 'h' &&
                                game.hasPlayer(function (current) {
                                    return current != player && get.attitude(player, current) > 0;
                                })
                            )
                                return 12;
                            if (
                                game.hasPlayer(function (current) {
                                    return current != player && get.attitude(player, current) > 0;
                                })
                            ) {
                                if (card.name == 'tao' && player.countCards('h', 'tao') > 0) return 5;
                                if (card.name == 'shan' && player.countCards('h', 'shan') > 0) return 9;
                            }
                            return 6 / Math.max(1, get.value(card));
                        },
                        filterTarget(card, player, target) {
                            if (target.group != player.group || target == player) return false;
                            return true;
                        },
                        selectTarget() {
                            if (ui.selected.cards.length && !lib.filter.cardDiscardable(ui.selected.cards[0], _status.event.player)) {
                                return [1, 1];
                            }
                            return [0, 1];
                        },
                        discard: false,
                        delay: false,
                        lose: false,
                        content() {
                            'step 0';
                            if (!target) player.discard(cards);
                            else target.gain(cards[0], player, 'give');
                            ('step 1');
                            player.addSkill('rejuedao2');
                            player.storage.rejuedao2 -= cards.length;
                            player.markSkill('rejuedao2');
                            game.addVideo('storage', player, ['rejuedao2', player.storage.rejuedao2]);
                        },
                        ai: {
                            order: 10,
                            result: {
                                target(card, player, target) {
                                    var att = get.attitude(player, target);
                                    if (card.name == 'du') return -6 * att;
                                    if (att > 0) {
                                        if (get.position(card) == 'h') return 4 * att;
                                        return 1.2 * att;
                                    }
                                    return 0;
                                },
                            },
                        },
                    },
                    rejuedao2: {
                        mark: true,
                        charlotte: true,
                        intro: {
                            content(storage, player) {
                                if (storage > 0) {
                                    return '其他角色与你计算距离时+' + storage;
                                } else if (storage < 0) {
                                    return '其他角色与你计算距离时' + storage;
                                } else {
                                    return '无距离变化';
                                }
                            },
                        },
                        init(player) {
                            player.storage.rejuedao2 = 0;
                        },
                        mod: {
                            globalTo(from, to, distance) {
                                return distance + to.storage.rejuedao2;
                            },
                        },
                    },
                    reyicheng: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            global: 'useCardToTargeted',
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        check(event, player) {
                            return get.attitude(player, event.target) > 0;
                        },
                        logTarget: 'target',
                        content() {
                            'step 0';
                            trigger.target.chooseBool('是否选择摸一张牌').ai = () => true;
                            ('step 1');
                            if (result.bool) trigger.target.draw();
                            else event.finish();
                            ('step 2');
                            trigger.target
                                .chooseCard('he', true, '弃置一张牌,或使用手牌中的一张装备牌', function (card, player) {
                                    if (get.position(card) == 'h' && get.type(card) == 'equip' && lib.filter.cardEnabled(card, player, 'reyicheng')) return true;
                                    return lib.filter.cardDiscardable(card, player, 'reyicheng');
                                })
                                .set('ai', function (card) {
                                    if (get.position(card) == 'h' && get.type(card) == 'equip') {
                                        return 5 - get.value(card);
                                    }
                                    return -get.value(card);
                                });
                            ('step 3');
                            if (result.cards?.length) {
                                if (get.position(result.cards[0]) == 'h' && get.type(result.cards[0]) == 'equip' && !player.isDisabled(get.subtype(result.cards[0])) && lib.filter.cardEnabled(result.cards[0], trigger.target)) player.chooseUseTarget(result.cards[0], true, 'nopopup');
                                else player.discard(result.cards[0]);
                            }
                        },
                    },
                    diy_reluoshen: {
                        mark: true,
                        marktext: '洛',
                        intro: {
                            mark(dialog, storage, player) {
                                dialog.addAuto(
                                    player.getCards('s', function (card) {
                                        return card.hasGaintag('diy_reluoshen');
                                    })
                                );
                            },
                            markcount(storage, player) {
                                return player.getCards('s', function (card) {
                                    return card.hasGaintag('diy_reluoshen');
                                }).length;
                            },
                            onunmark(storage, player) {
                                var cards = player.getCards('s', function (card) {
                                    return card.hasGaintag('diy_reluoshen');
                                });
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'phaseZhunbeiBegin',
                        },
                        forced: true,
                        content() {
                            'step 0';
                            event.cards = [];
                            ('step 1');
                            var next = player.judge(function (card) {
                                if (!event.color) return 1.5;
                                return get.color(card) == event.color ? 1.5 : -1.5;
                            });
                            next.judge2 = function (result) {
                                return result.bool;
                            };
                            if (get.mode() != 'guozhan' && !player.hasSkillTag('rejudge')) next.set('callback', lib.skill.diy_reluoshen.callback);
                            else
                                next.set('callback', function () {
                                    if (event.judgeResult.color == 'black') event.parent.orderingCards.remove(card);
                                });
                            ('step 2');
                            event.cards.push(result.card);
                            if (!event.color) event.color = get.color(event.cards[0]);
                            if (!event.cards.length) player.addMark('diy_reluoshen_mark', 1);
                            if (event.cards.length == 1 && get.color(event.cards[0]) == 'red') player.addMark('diy_reluoshen_mark', 1);
                            if (result.bool) player.chooseBool(get.prompt2('diy_reluoshen')).set('frequentSkill', 'diy_reluoshen');
                            else {
                                event.cards = event.cards.filter((i) => get.position(i) == 'o');
                                if (event.cards.length) {
                                    player.$gain2(event.cards);
                                    event.goto(4);
                                } else event.finish();
                            }
                            ('step 3');
                            if (result.bool) event.goto(1);
                            else {
                                event.cards = event.cards.filter((i) => get.position(i) == 'o');
                                if (event.cards.length) {
                                    player.$gain2(event.cards);
                                }
                            }
                            ('step 4');
                            game.cardsGotoSpecial(event.cards).set('getlx', false);
                            ('step 5');
                            player.directgains(event.cards, null, 'diy_reluoshen');
                        },
                        callback() {
                            'step 0';
                            if (get.position(card, true) != 'o') {
                                //game.cardsDiscard(card);
                                return;
                            }
                            player.$gain2(card);
                            ('step 1');
                            game.cardsGotoSpecial(card).set('getlx', false);
                            ('step 2');
                            player.directgains([card], null, 'diy_reluoshen');
                        },
                        group: 'diy_reluoshen_gain',
                        subSkill: {
                            mark: {
                                marktext: '仿',
                                intro: {
                                    name: '仿',
                                    markcount: 'mark',
                                    content: '◇你可以将1枚此标记当做【闪】使用或打出',
                                },
                            },
                            gain: {
                                trigger: {
                                    player: 'phaseBegin',
                                },
                                forced: true,
                                silent: true,
                                popup: false,
                                content() {
                                    var cards = player.getCards('s', function (card) {
                                        return card.hasGaintag('diy_reluoshen');
                                    });
                                    if (cards.length) player.gain(cards, 'gain2');
                                },
                            },
                        },
                    },
                    diy_reqingguo: {
                        mod: {
                            aiValue(player, card, num) {
                                var cards = player.getCards('hes');
                                cards.sort(function (a, b) {
                                    return (b.name == 'shan' ? 1 : 2) - (a.name == 'shan' ? 1 : 2);
                                });
                                var geti = function () {
                                    if (cards.includes(card)) {
                                        return cards.indexOf(card);
                                    }
                                    return cards.length;
                                };
                                if (card.name == 'shan') return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                                return Math.max(num, [6.5, 4, 3][Math.min(geti(), 2)]);
                            },
                            aiUseful() {
                                return lib.skill.diy_reqingguo.mod.aiValue.apply(this, arguments);
                            },
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        enable: ['chooseToRespond', 'chooseToUse'],
                        filterCard: true,
                        position: 'hes',
                        viewAs: {
                            name: 'shan',
                        },
                        viewAsFilter(player) {
                            if (!player.countCards('hes', { color: 'black' })) return false;
                        },
                        prompt: '将一张牌当闪使用或打出',
                        check() {
                            return 1;
                        },
                        ai: {
                            respondShan: true,
                            effect: {
                                target(card, player, target, current) {
                                    if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                },
                            },
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
                    reshanjia: {
                        group: 'reshanjia_count',
                        mod: {
                            aiValue(player, card, num) {
                                if ((player.storage.reshanjiax || 0) < 3 && get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) {
                                    return num / player.hp;
                                }
                            },
                        },
                        subSkill: {
                            count: {
                                forced: true,
                                silent: true,
                                popup: false,
                                trigger: {
                                    player: ['useCard', 'loseEnd'],
                                },
                                filter(event, player) {
                                    if (event.name == 'lose') return event.cards2 && event.cards2.length;
                                    return get.type(event.card) == 'equip';
                                },
                                content() {
                                    lib.skill.reshanjia.sync(player);
                                },
                            },
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'phaseUseBegin',
                        },
                        intro: {
                            content(storage, player) {
                                var str = '缮甲厉兵,伺机而行';
                                if (player.storage.reshanjiay < 7 || player.storage.reshanjiax < 3 + player.storage.reshanjiay) {
                                    if (player.storage.reshanjiax) {
                                        str += '<br><li>本局内你已失去过';
                                        str += player.storage.reshanjiax;
                                        str += '张装备牌';
                                        if (player.storage.reshanjiax < 3 + player.storage.reshanjiay) {
                                            str += '<br><li>还需失去';
                                            str += 3 + player.storage.reshanjiay - player.storage.reshanjiax;
                                            str += '张装备牌';
                                        } else str += '<br><li>你已完成第一阶段进化';
                                    }
                                    if (player.storage.reshanjiay) {
                                        str += '<br><li>本局内你已使用过';
                                        str += player.storage.reshanjiay;
                                        str += '张装备牌';
                                        if (player.storage.reshanjiay < 7) {
                                            str += '<br><li>还需使用';
                                            str += 7 - player.storage.reshanjiay;
                                            str += '张装备牌';
                                        } else str += '<br><li>你已完成第二阶段进化';
                                    }
                                } else str += '<br><li>恭喜您进化为完全体,恭迎至尊龙王回归!';
                                return str;
                            },
                        },
                        forced: true,
                        sync(player) {
                            var history = player.actionHistory;
                            var numy = 0;
                            for (var i = 0; i < history.length; i++) {
                                for (var j = 0; j < history[i].useCard.length; j++) {
                                    if (get.type(history[i].useCard[j].card) == 'equip') numy++;
                                }
                            }
                            player.storage.reshanjiay = numy;
                            if (numy > 0) player.markSkill('reshanjia');
                            var numx = 0;
                            for (var i = 0; i < history.length; i++) {
                                for (var j = 0; j < history[i].lose.length; j++) {
                                    numx += history[i].lose[j].cards2.filter(function (card) {
                                        return get.type(card, false) == 'equip';
                                    }).length;
                                }
                            }
                            player.storage.reshanjiax = numx;
                            if (numx > 0) player.markSkill('reshanjia');
                        },
                        content() {
                            'step 0';
                            lib.skill.reshanjia.sync(player);
                            player.draw(3 + Math.min(7, player.storage.reshanjiay));
                            ('step 1');
                            lib.skill.reshanjia.sync(player);
                            var num = 3 - player.storage.reshanjiax + Math.min(7, player.storage.reshanjiay);
                            if (num > 0) player.chooseToDiscard('he', true, num).ai = get.disvalue;
                            else
                                player.chooseToDiscard('he').ai = function (card) {
                                    if (get.type(card) == 'equip') return 20 - get.value(card);
                                    return 0;
                                };
                            ('step 2');
                            event.count = 1;
                            if (result.cards?.length) {
                                if (Array.isArray(result.cards))
                                    for (var i of result.cards) {
                                        if (get.type(i, i.original == 'h' ? player : false) == 'equip') {
                                            event.count++;
                                            break;
                                        }
                                    }
                                if (Array.isArray(result.cards))
                                    for (var i of result.cards) {
                                        if (['basic', 'trick'].includes(get.type(i, 'trick', i.original == 'h' ? player : false))) {
                                            event.count--;
                                            break;
                                        }
                                    }
                            }
                            ('step 3');
                            if (event.count > 0) {
                                event.count--;
                                player.chooseUseTarget({ name: 'sha' }, '是否视为使用一张【杀】？', false, 'nodistance');
                                if (event.count > 0) event.redo();
                            }
                        },
                        ai: {
                            threaten(player, target) {
                                if (typeof target.storage.reshanjiay == 'number') {
                                    return Math.min(3, Math.sqrt(1 + target.storage.reshanjiay));
                                }
                            },
                            noe: true,
                            reverseOrder: true,
                            skillTagFilter(player) {
                                if (player.storage.reshanjiax > 2 + player.storage.reshanjiay) return false;
                            },
                            effect: {
                                target(card, player, target) {
                                    if (player.storage.reshanjiax < 3 + player.storage.reshanjiay && get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                                },
                            },
                        },
                    },
                    diy_rejuece: {
                        subSkill: {
                            start: {
                                trigger: {
                                    player: 'phaseBefore',
                                },
                                popup: false,
                                silent: true,
                                forced: true,
                                content() {
                                    game.countPlayer(function (current) {
                                        if (current != player) current.addTempSkill('diy_rejuece_storage');
                                    });
                                },
                            },
                            storage: {
                                charlotte: true,
                                init(player) {
                                    player.storage.diy_rejuece_storage = 0;
                                },
                                popup: false,
                                silent: true,
                                forced: true,
                                trigger: {
                                    player: 'loseAfter',
                                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                },
                                filter(event, player) {
                                    if (player.countCards('h')) return false;
                                    var evt = event.getl(player);
                                    return evt && evt.hs && evt.hs.length;
                                },
                                content() {
                                    player.storage.diy_rejuece_storage++;
                                },
                            },
                        },
                        group: 'diy_rejuece_start',
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'phaseJieshuBegin',
                        },
                        forced: true,
                        filter(event, player) {
                            return game.hasPlayer(function (current) {
                                return (
                                    current != player &&
                                    (current.getHistory('lose', function (evt) {
                                        return evt.cards2 && evt.cards2.length;
                                    }).length ||
                                        current.countCards('h') == 0)
                                );
                            });
                        },
                        content() {
                            'step 0';
                            var prompt2 = '对一名没有手牌或本回合失去过牌的其他角色造成伤害.';
                            if (
                                game.hasPlayer(function (current) {
                                    return current.storage.diy_rejuece_storage > 1;
                                })
                            ) {
                                prompt2 +=
                                    '<br><li>本回合空城过至少两次的角色:' +
                                    game
                                        .filterPlayer(function (current) {
                                            return current.storage.diy_rejuece_storage >= 2;
                                        })
                                        .map(function (i) {
                                            return get.translation(i);
                                        })
                                        .toString();
                            }
                            player
                                .chooseTarget(get.prompt('diy_rejuece'), prompt2, function (card, player, target) {
                                    return _status.event.targets.includes(target);
                                })
                                .set(
                                    'targets',
                                    game.filterPlayer(function (current) {
                                        return (
                                            current != player &&
                                            (current.getHistory('lose', function (evt) {
                                                return evt.cards2 && evt.cards2.length;
                                            }).length ||
                                                !current.countCards('h'))
                                        );
                                    })
                                )
                                .set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.damageEffect(target, player, player);
                                });
                            ('step 1');
                            if (result.targets?.length) {
                                var target = result.targets[0];
                                target.damage(Math.max(target.storage.diy_rejuece_storage, 1));
                                player.draw('bottom');
                            }
                        },
                    },
                    diy_remieji: {
                        audio: 'ext:群阴汇聚/audio:2',
                        enable: 'phaseUse',
                        usable: 1,
                        filter(event, player) {
                            return player.countCards('he', { color: 'black' });
                        },
                        filterCard(card) {
                            return get.color(card) == 'black';
                        },
                        filterTarget(card, player, target) {
                            return target != player && target.countCards('he') > 0;
                        },
                        position: 'he',
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
                                    if (get.type2(card) == 'trick') return true;
                                    return lib.filter.cardDiscardable(card, target, 'diy_remieji');
                                })
                            )
                                event.finish();
                            else
                                target
                                    .chooseCard('he', true, function (card, player) {
                                        if (get.type2(card) == 'trick') return true;
                                        return lib.filter.cardDiscardable(card, player, 'diy_remieji');
                                    })
                                    .set('prompt', `选择将一张锦囊牌交给${get.translation(player)},或依次弃置两张非锦囊牌.`);
                            ('step 2');
                            if (result.cards?.length) {
                                if (get.type2(result.cards[0]) == 'trick') {
                                    player.gain(result.cards, target, 'give').gaintag.add('diy_remieji');
                                    player.addTempSkill('diy_remieji2');
                                    event.finish();
                                } else target.discard(result.cards);
                            } else event.finish();
                            ('step 3');
                            if (
                                target.countCards('he', function (card) {
                                    return get.type2(card) != 'trick';
                                })
                            )
                                target.chooseToDiscard('he', true, function (card) {
                                    return get.type2(card) != 'trick';
                                });
                        },
                        ai: {
                            order: 9,
                            result: {
                                target: -1,
                            },
                        },
                    },
                    diy_remieji2: {
                        onremove(player) {
                            player.removeGaintag('diy_remieji');
                        },
                        trigger: {
                            player: 'useCard2',
                        },
                        forced: true,
                        filter(event, player) {
                            var info = get.info(event.card);
                            if (info.allowMultiple == false) return false;
                            if (event.targets && !info.multitarget) {
                                if (
                                    game.hasPlayer(function (current) {
                                        return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
                                    })
                                )
                                    return player.getHistory('lose', function (evt) {
                                        if (evt.parent != event) return false;
                                        for (var i in evt.gaintag_map) {
                                            if (evt.gaintag_map[i].includes('diy_remieji')) return true;
                                        }
                                        return false;
                                    }).length;
                            }
                            return false;
                        },
                        content() {
                            'step 0';
                            var prompt2 = `为${get.translation(trigger.card)}增加一个目标`;
                            player
                                .chooseTarget(get.prompt('diy_remieji'), function (card, player, target) {
                                    var player = _status.event.player;
                                    return !_status.event.targets.includes(target) && lib.filter.targetEnabled2(_status.event.card, player, target);
                                })
                                .set('prompt2', prompt2)
                                .set('ai', function (target) {
                                    var trigger = _status.event.getTrigger();
                                    var player = _status.event.player;
                                    return get.effect(target, trigger.card, player, player);
                                })
                                .set('card', trigger.card)
                                .set('targets', trigger.targets);
                            ('step 1');
                            if (result.targets?.length) {
                                event.targets = result.targets;
                            } else {
                                event.finish();
                            }
                            ('step 2');
                            if (event.targets) {
                                trigger.targets.addArray(event.targets);
                            }
                        },
                    },
                    diy_refencheng: {
                        audio: 'ext:群阴汇聚/audio:2',
                        enable: 'phaseUse',
                        filter(event, player) {
                            return !player.storage.diy_refencheng;
                        },
                        filterTarget(card, player, target) {
                            return player != target;
                        },
                        limited: true,
                        selectTarget: -1,
                        multitarget: true,
                        multiline: true,
                        mark: true,
                        line: 'fire',
                        content() {
                            'step 0';
                            player.storage.diy_refencheng = true;
                            player.awakenSkill('diy_refencheng');
                            event.num = 1;
                            event.targets = targets.slice(0);
                            event.targets.sort(lib.sort.seat);
                            ('step 1');
                            if (event.targets.length) {
                                var target = event.targets.shift();
                                event.target = target;
                                var res = get.damageEffect(target, player, target, 'fire');
                                var numx = Math.max(event.num, target.countCards('e') + 1);
                                target
                                    .chooseToDiscard('he', `弃置至少${get.cnNumber(numx)}张牌或受到两点火焰伤害`, [numx, Infinity])
                                    .set('ai', function (card) {
                                        if (ui.selected.cards.length >= _status.event.parent.num) return -1;
                                        if (_status.event.player.hasSkillTag('nofire')) return -1;
                                        if (_status.event.res >= 0) return 6 - get.value(card);
                                        if (get.type(card) != 'basic') {
                                            return 10 - get.value(card);
                                        }
                                        return 8 - get.value(card);
                                    })
                                    .set('res', res);
                            } else {
                                event.finish();
                            }
                            ('step 2');
                            if (!result.bool) {
                                event.target.damage(2, 'fire');
                                event.num = 1;
                                event.goto(1);
                            } else {
                                event.num = result.cards.length + 1;
                                if (result.cards.length > 1)
                                    player.chooseButton(['选择获得其中的一张牌', result.cards.slice(0)], true).ai = function (button) {
                                        return get.value(button.link);
                                    };
                            }
                            ('step 3');
                            if (result.links?.length) player.gain(result.links, 'gain2');
                            event.goto(1);
                        },
                        ai: {
                            order: 1,
                            result: {
                                player(player) {
                                    var num = 0,
                                        eff = 0,
                                        players = game
                                            .filterPlayer(function (current) {
                                                return current != player;
                                            })
                                            .sortBySeat(player);
                                    for (var target of players) {
                                        if (get.damageEffect(target, player, target, 'fire') >= 0) {
                                            num = 0;
                                            continue;
                                        }
                                        var shao = false;
                                        num++;
                                        if (
                                            target.countCards('he', function (card) {
                                                if (get.type(card) != 'basic') {
                                                    return get.value(card) < 10;
                                                }
                                                return get.value(card) < 8;
                                            }) < num
                                        )
                                            shao = true;
                                        if (shao) {
                                            eff -= 4 * (get.realAttitude || get.attitude)(player, target);
                                            num = 0;
                                        } else eff -= (num * (get.realAttitude || get.attitude)(player, target)) / 4;
                                    }
                                    if (eff < 4) return 0;
                                    return eff;
                                },
                            },
                        },
                        init(player) {
                            player.storage.xinfencheng = false;
                        },
                        intro: {
                            content: 'limited',
                        },
                    },
                    youzhu: {
                        derivation: ['youzhu_rewrite'],
                        group: 'youzhu2',
                        audio: 'ext:群阴汇聚/audio:4',
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        filter(event, player) {
                            if (
                                game.hasPlayer(function (current) {
                                    return ['mifuren', 'sp_mifuren'].includes(current.name) || ['mifuren', 'sp_mifuren'].includes(current.name2);
                                })
                            )
                                return false;
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        forced: true,
                        content() {
                            'step 0';
                            player.chooseTarget('选择获得糜夫人的目标', true, lib.filter.notMe).ai = function (target) {
                                var player = _status.event.player;
                                return get.attitude(player, target) > 0;
                            };
                            ('step 1');
                            if (result.targets?.length) {
                                var list = [];
                                if (lib.character.sp_mifuren) list.add('sp_mifuren');
                                if (lib.character.mifuren) list.add('mifuren');
                                event.target = result.targets[0];
                                if (list.length == 1) {
                                    event.target.init(event.target.name, list[0]);
                                    game.log(event.target, '将', list, '作为了副将');
                                    event.finish();
                                } else
                                    event.target
                                        .chooseButton(true)
                                        .set('ai', function (button) {
                                            return get.rank(button.link, true) - lib.character[button.link][2];
                                        })
                                        .set('createDialog', ['选择一张糜夫人作为副将', [list, 'character']]);
                            }
                            ('step 2');
                            if (result.links?.length) {
                                event.target.init(event.target.name, result.links[0]);
                                game.log(event.target, '将', result.links, '作为了副将');
                            }
                        },
                    },
                    youzhu2: {
                        audio: 'youzhu',
                        trigger: {
                            global: 'die',
                        },
                        filter(event, player) {
                            return (['mifuren', 'sp_mifuren'].includes(event.player.name) || ['mifuren', 'sp_mifuren'].includes(event.player.name2)) && (!event.source || event.source != player);
                        },
                        forced: true,
                        content() {
                            if (!lib.inpile.includes('equip_liushan')) {
                                lib.inpile.push('equip_liushan');
                                player.equip(game.createCard('equip_liushan'), 'fromStorage');
                            } else {
                                var card = get.cardPile(function (card) {
                                    return card.name == 'equip_liushan' && card != player.getEquip(5);
                                }, 'field');
                                if (card && !player.isDisabled(5)) player.equip(card);
                            }
                            player.addSkill('youzhu3');
                        },
                    },
                    youzhu3: {
                        trigger: {
                            global: 'phaseEnd',
                        },
                        filter(event, player) {
                            return !player.countCards('hes', 'equip_liushan');
                        },
                        forced: true,
                        content() {
                            var list = [];
                            var card = get.cardPile(function (card) {
                                return card.name == 'equip_liushan' && card != player.getEquip(1);
                            }, 'field');
                            if (card) list.push(card);
                            game.countPlayer(function (current) {
                                var h = current.getCards('h', function (card) {
                                    return card.name == 'equip_liushan' && card != player.getEquip(1);
                                });
                                if (h.length) {
                                    list.addArray(h);
                                }
                            });
                            if (list.length) {
                                var card = list.randomGet();
                                var owner = get.owner(card);
                                if (owner) {
                                    player.gain(card, owner, 'give');
                                    player.chooseUseTarget(card, 'noanimate', 'nopopup', true);
                                    player.line(owner, 'green');
                                } else player.equip(card);
                            }
                        },
                    },
                    rejilue2: {
                        trigger: {
                            player: ['damageEnd', 'useCard2', 'loseAfter'],
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        init(player) {
                            player.storage.diy_rejizhi = 0;
                        },
                        forced: true,
                        filter(event, player) {
                            if (event.name == 'damage' && event.num <= 0) return false;
                            if (event.name == 'useCard' && !lib.skill.diy_rejizhi.filter(event, player)) return false;
                            if (['lose', 'equip', 'addJudge', 'gain', 'loseAsync', 'addToExpansion'].includes(event.name) && !lib.skill.diy_rezhiheng_lianying.filter(event, player)) return false;
                            return player.countMark('rerenjie') > 0;
                        },
                        content() {
                            'step 0';
                            if (trigger.name == 'damage') {
                                event.forced = true;
                            } else {
                                player.chooseBool(get.prompt(trigger.name == 'useCard' ? 'diy_rejizhi' : 'diy_rezhiheng'), '以弃置一枚忍作为代价').set('ai', function () {
                                    return true;
                                });
                            }
                            ('step 1');
                            if (event.forced || result.bool) {
                                if (trigger.name == 'useCard') {
                                    player.removeMark('rerenjie', 1);
                                    player.draw();
                                }
                                if (trigger.name == 'damage') {
                                    var next = game.createEvent('diy_refangzhu', false);
                                    next.player = player;
                                    next.num = trigger.num;
                                    next.setContent(lib.skill.diy_refangzhu.content);
                                    event.finish();
                                }
                                if (['lose', 'equip', 'addJudge', 'gain', 'loseAsync'].includes(trigger.name)) {
                                    player.removeMark('rerenjie', 1);
                                    var next = game.createEvent('diy_rezhiheng_lianying', false);
                                    next.player = player;
                                    next.setContent(function () {
                                        player.draw();
                                    });
                                    event.finish();
                                }
                            } else event.finish();
                            ('step 2');
                            player.storage.rejilue_result = result.cards[0];
                            var next = game.createEvent('diy_rejizhi', false);
                            next.player = player;
                            next.card = trigger.card;
                            next.cards = trigger.cards;
                            next.setContent(lib.skill.rejilue2.jizhi_content);
                        },
                        jizhi_content() {
                            'step 0';
                            event.card = player.storage.rejilue_result;
                            player
                                .chooseBool('是否弃置' + get.translation(event.card) + (_status.currentPhase == player ? '令本回合手牌上限+1' : '') + (event.card.number == card.number && get.type(card) == 'trick' ? '并收回' + get.translation(cards) : '') + '？')
                                .set('ai', function (evt, player) {
                                    if (result.number == card.number) return _status.event.value2 > 6;
                                    return _status.currentPhase == player && player.needsToDiscard(-3) && _status.event.value < 6;
                                })
                                .set('value', get.value(event.card, player))
                                .set('value2', get.value(card, player));
                            ('step 1');
                            if (result.bool) {
                                player.discard(event.card);
                                if (card.number == result.number && get.type(card) == 'trick') player.gain(cards, 'gain2');
                                if (_status.currentPhase == player) {
                                    player.storage.diy_rejizhi++;
                                    player.markSkill('diy_rejizhi');
                                    var evt = _status.event.getParent('phase');
                                    if (evt && evt.name == 'phase' && !evt.diy_rejizhi) {
                                        var next = game.createEvent('diy_rejizhi_clear');
                                        _status.event.next.remove(next);
                                        evt.after.push(next);
                                        evt.diy_rejizhi = true;
                                        next.player = player;
                                        next.setContent(function () {
                                            player.storage.diy_rejizhi = 0;
                                            player.unmarkSkill('diy_rejizhi');
                                        });
                                    }
                                }
                                event.card = get.cards(2);
                                player.showCards(event.card);
                            } else {
                                event.finish();
                            }
                            ('step 2');
                            event.gained = [];
                            event.tothrow = [];
                            for (var i = 0; i < event.card.length; i++) {
                                if (get.type(event.card[i]) != 'basic') {
                                    event.gained.push(event.card[i]);
                                } else {
                                    event.tothrow.push(event.card[i]);
                                }
                            }
                            if (event.tothrow.length == 2)
                                player.chooseCardButton('【集智】选择一张牌获得', event.tothrow, true).ai = function (button) {
                                    return get.value(button);
                                };
                            ('step 3');
                            player.gain(event.gained, 'gain2');
                            if (result.links?.length) {
                                player.gain(result.links, 'gain2');
                                event.tothrow.remove(result.links);
                                game.cardsDiscard(event.tothrow);
                            } else game.cardsDiscard(event.tothrow);
                        },
                        ai: {
                            order: 1,
                            result: {
                                player: 1,
                            },
                            threaten: 1.55,
                            noautowuxie: true,
                            maixie: true,
                            maixie_hp: true,
                            effect: {
                                target(card, player, target) {
                                    if (get.tag(card, 'damage')) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
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
                                        if (turnfriend || target.isHealthy()) return [0.5, 1];
                                        if (target.hp > 1) return [1, 0.5];
                                    }
                                },
                            },
                        },
                        mod: {
                            maxHandcard(player, num) {
                                return num + player.storage.diy_rejizhi;
                            },
                        },
                        intro: {
                            content: '本回合手牌上限+#',
                        },
                    },
                    rejijie2: {},
                    retunjiang: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'phaseJieshuBegin',
                        },
                        forced: true,
                        filter(event, player) {
                            if (player.getHistory('skipped').includes('phaseUse')) return true;
                            return !event.player.getHistory('sourceDamage', function (evt) {
                                if (!evt.isPhaseUsing(player)) return false;
                                return player != evt.player;
                            }).length;
                        },
                        content() {
                            'step 0';
                            event.num = Math.max(2, game.countGroup());
                            player.chooseTarget(get.prompt('retunjiang'), `令一名角色摸${get.cnNumber(event.num)}张牌`).ai = function (target) {
                                var player = _status.event.player;
                                if (player == target) return get.attitude(player, target) + 10;
                                return get.attitude(player, target);
                            };
                            ('step 1');
                            if (result.targets?.length) {
                                result.targets[0].draw(event.num);
                                if (event.num < player.hp) event.finish();
                            } else event.finish();
                            ('step 2');
                            var list = [];
                            var hes = player.getCards('he');
                            for (var i of hes) {
                                list.add(i.suit);
                            }
                            if (hes.length)
                                player
                                    .chooseToDiscard('he', '【屯江】弃置任意张花色不同的牌并摸等量张牌', [1, list.length], function (card, player) {
                                        var suit = card.suit;
                                        return ui.selected.cards.every((i) => i.suit != suit);
                                    })
                                    .set('ai', lib.skill.zhiheng.check)
                                    .set('complexCard', true);
                            ('step 3');
                            if (result.cards?.length) {
                                player.draw(result.cards.length);
                            }
                        },
                    },
                    diy_refenyin: {
                        subSkill: {
                            color: {
                                mark: true,
                                onremove(player) {
                                    player.storage.diy_refenyin_color = 'none';
                                },
                                intro: {
                                    content(storage, player) {
                                        var str = '没有上一张牌';
                                        if (storage != 'none') {
                                            str = '上一张牌的颜色为';
                                            str += get.translation(storage);
                                        }
                                        return str;
                                    },
                                },
                            },
                            summer: {
                                trigger: {
                                    player: 'phaseBegin',
                                },
                                silent: true,
                                content() {
                                    player.addTempSkill('diy_refenyin_color');
                                },
                                forced: true,
                                popup: false,
                            },
                        },
                        init(player) {
                            player.storage.diy_refenyin_color = 'none';
                        },
                        global: 'g_diy_refenyin',
                        group: 'diy_refenyin_summer',
                        audio: 'ext:群阴汇聚:2',
                        trigger: {
                            global: ['loseAfter', 'cardsDiscardAfter'],
                        },
                        forced: true,
                        filter(event, player) {
                            if (player != _status.currentPhase) return false;
                            if (event.name == 'lose' && event.position != ui.discardPile) return false;
                            var color1 = player.storage.diy_refenyin_color;
                            if (Array.isArray(event.cards))
                                for (var i of event.cards) {
                                    var card = i;
                                    var color2 = get.color(card, event.cards2 && event.cards2.includes(card) ? event.player : false);
                                    if (color1 && color2 && color2 != 'none' && color1 != color2) return event.cards && event.cards.length;
                                }
                            return false;
                        },
                        content() {
                            'step 0';
                            var cn = 0;
                            if (Array.isArray(trigger.cards))
                                for (var i of trigger.cards) {
                                    var card = i;
                                    if (get.color(card, trigger.cards2 && trigger.cards2.includes(card) ? trigger.player : false) != player.storage.diy_refenyin_color && player.storage.diy_refenyin_color != 'none') cn++;
                                    player.storage.diy_refenyin_color = get.color(card, trigger.cards2 && trigger.cards2.includes(card) ? trigger.player : false);
                                }
                            event.cn = cn;
                            ('step 1');
                            if (event.cn > 0) player.chooseBool(get.prompt2('diy_refenyin')).set('frequentSkill', 'diy_refenyin');
                            ('step 2');
                            if (result.bool) {
                                event.cn--;
                                player.draw();
                                event.goto(1);
                            }
                        },
                    },
                    g_diy_refenyin: {
                        mod: {
                            aiOrder(player, card, num) {
                                if (typeof card == 'object' && _status.currentPhase.hasSkill('diy_fenyin')) {
                                    var att = get.attitude(player, _status.currentPhase);
                                    var storage = _status.currentPhase.storage.diy_refenyin_color;
                                    if (storage == 'none') return num;
                                    if (att > 0 || _status.currentPhase == player) {
                                        if (storage && storage != 'none' && get.color(card) != 'none' && storage != get.color(card)) return num + 10;
                                    } else {
                                        if (storage && storage != 'none' && get.color(card) != 'none' && storage == get.color(card)) return num + 10;
                                    }
                                }
                            },
                        },
                    },
                    diy_rewansha: {
                        audio: 'ext:群阴汇聚/audio:2',
                        audioname2: {
                            re_shen_simayi: 'rejilue_wansha',
                        },
                        global: 'diy_rewansha_global',
                        trigger: {
                            global: 'dying',
                        },
                        _priority: null,
                        forced: true,
                        filter(event, player, name) {
                            return _status.currentPhase == player;
                        },
                        content() {
                            game.countPlayer(function (current) {
                                if (current != player && !current.hasSkill('fengyin')) {
                                    player.line(current);
                                    current.addTempSkill('fengyin', 'dyingAfter');
                                }
                            });
                        },
                        subSkill: {
                            global: {
                                mod: {
                                    cardSavable(card, player) {
                                        if (!_status.currentPhase) return;
                                        if (_status.currentPhase.isAlive() && _status.currentPhase.hasSkill('diy_rewansha') && _status.currentPhase != player) {
                                            if (card.name == 'tao') return false;
                                        }
                                    },
                                    cardEnabled(card, player) {
                                        if (!_status.currentPhase) return;
                                        if (_status.currentPhase.isAlive() && _status.currentPhase.hasSkill('diy_rewansha') && _status.currentPhase != player) {
                                            if (card.name == 'tao') return false;
                                        }
                                    },
                                },
                            },
                        },
                    },
                    diy_reluanwu: {
                        audio: 'ext:群阴汇聚/audio:2',
                        enable: 'phaseUse',
                        limited: true,
                        filterTarget(card, player, target) {
                            return player != target;
                        },
                        selectTarget: -1,
                        multitarget: true,
                        multiline: true,
                        content() {
                            'step 0';
                            player.awakenSkill('diy_reluanwu');
                            player.addTempSkill('diy_reluanwu_feiying');
                            event.current = player.next;
                            event.currented = [];
                            event.num1 = 0;
                            event.num2 = 0;
                            ('step 1');
                            event.currented.push(event.current);
                            event.current.addTempClass('target');
                            event.current
                                .chooseToUse(
                                    '【乱武】使用一张杀或失去一点体力',
                                    function (card) {
                                        if (card.name != 'sha') return false;
                                        return lib.filter.filterCard.apply(this, arguments);
                                    },
                                    function (card, player, target) {
                                        if (player == target) return false;
                                        var dist = get.distance(player, target);
                                        if (dist > 1) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return current != player && get.distance(player, current) < dist;
                                                })
                                            ) {
                                                return false;
                                            }
                                        }
                                        return lib.filter.filterTarget.apply(this, arguments);
                                    }
                                )
                                .set('ai2', function (target) {
                                    if (target) {
                                        return get.effect_use(target) + 0.01;
                                    }
                                });
                            ('step 2');
                            if (!result.bool) {
                                event.num1++;
                                event.current.loseHp();
                            } else event.num2++;
                            event.current = event.current.next;
                            if (event.current != player && !event.currented.includes(event.current)) {
                                event.goto(1);
                            } else player.draw(Math.max(event.num1, event.num2));
                        },
                        subSkill: {
                            feiying: {
                                mark: true,
                                marktext: '影',
                                intro: {
                                    content() {
                                        return '本回合其他角色与你计算距离时+1';
                                    },
                                    name: '临时飞影',
                                },
                                mod: {
                                    globalTo(from, to, distance) {
                                        return distance + 1;
                                    },
                                },
                            },
                        },
                        ai: {
                            order: 1,
                            result: {
                                player(player) {
                                    if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
                                        if (game.zhu.hp == 1 && game.zhu.countCards('h') <= 2) return 1;
                                    }
                                    var num = 0;
                                    var players = game.filterPlayer();
                                    for (var i of players) {
                                        var att = get.attitude(player, i);
                                        if (att > 0) att = 1;
                                        if (att < 0) att = -1;
                                        if (i != player && i.hp <= 3) {
                                            if (i.countCards('h') == 0) num += att / i.hp;
                                            else if (i.countCards('h') == 1) num += att / 2 / i.hp;
                                            else if (i.countCards('h') == 2) num += att / 4 / i.hp;
                                        }
                                        if (i.hp == 1) num += att * 1.5;
                                    }
                                    if (player.hp == 1) {
                                        return -num;
                                    }
                                    if (player.hp == 2) {
                                        return -game.players.length / 4 - num;
                                    }
                                    return -game.players.length / 3 - num;
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
                    diy_rewenji: {
                        audio: 'ext:群阴汇聚/audio:2',
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
                                .chooseTarget(get.prompt2('diy_rewenji'), function (card, player, target) {
                                    return player != target && target.countCards('he');
                                })
                                .set('ai', function (target) {
                                    var att = get.attitude(_status.event.player, target);
                                    if (att > 0) return Math.sqrt(att) / 10;
                                    return 5 - att;
                                });
                            ('step 1');
                            if (result.targets?.length) {
                                var target = result.targets[0];
                                event.target = target;
                                target.chooseCard('he', true, `【问计】交给${get.translation(player)}一张牌`);
                                event.card;
                            } else event.finish();
                            ('step 2');
                            if (result.cards?.length) {
                                event.card = result.cards[0];
                                if (get.type2(event.card, target) == 'trick') player.addTempSkill('diy_rewenji_feiying', { player: 'phaseBegin' });
                                player.gain(result.cards, target, 'give');
                            } else event.finish();
                            ('step 3');
                            player
                                .chooseCard('he', `【问计】交给${get.translation(target)}另一张牌,或本回合你${get.translation(get.type2(event.card, target))}牌无距离与次数限制且不可被响应、不能对${get.translation(target)}使用牌`, function (card) {
                                    return card != event.card;
                                })
                                .set('ai', function (card) {
                                    var player = _status.event.player,
                                        target = _status.event.target;
                                    var att = get.attitude(player, target);
                                    var cards = player.getCards('h').filter(function (card) {
                                        return get.type2(card) == _status.event.type && player.getUseValue(card) > 0;
                                    });
                                    if (cards.length > 2) return 0;
                                    if (att < 0) return -get.value(card);
                                    return 5 - get.value(card);
                                })
                                .set('target', target)
                                .set('type', get.type2(event.card));
                            ('step 4');
                            if (result.cards?.length) target.gain(result.cards[0], player, 'give');
                            else {
                                player.addTempSkill('diy_rewenji_respond');
                                player.storage.diy_rewenji_respond = {
                                    target: target,
                                    type: get.type2(event.card, target),
                                };
                            }
                        },
                        subSkill: {
                            feiying: {
                                mark: true,
                                marktext: '影',
                                intro: {
                                    content() {
                                        return '直到下个回合开始其他角色与你计算距离时+1';
                                    },
                                    name: '临时飞影',
                                },
                                mod: {
                                    globalTo(from, to, distance) {
                                        return distance + 1;
                                    },
                                },
                            },
                            respond: {
                                mark: true,
                                intro: {
                                    name: '谢先生指点!',
                                    mark(dialog, storage, player) {
                                        dialog.addAuto([storage.target]);
                                        dialog.addText(`你使用${get.translation(storage.type)}牌无视次数、无距离限制且不可被响应`);
                                    },
                                },
                                mod: {
                                    targetInRange(card, player, target) {
                                        if (!card.cards) return;
                                        for (var i of card.cards) {
                                            if (get.type2(i) == player.storage.diy_rewenji_respond.type) return true;
                                        }
                                    },
                                    cardUsable(card, player, target) {
                                        if (!card.cards) return;
                                        for (var i of card.cards) {
                                            if (get.type2(i) == player.storage.diy_rewenji_respond.type) return Infinity;
                                        }
                                    },
                                    playerEnabled(card, player, target) {
                                        if (target == player.storage.diy_rewenji_respond.target) return false;
                                    },
                                },
                                trigger: { player: 'useCard' },
                                forced: true,
                                charlotte: true,
                                audio: 'diy_rewenji',
                                filter(event, player) {
                                    return get.type2(event.card) == player.storage.diy_rewenji_respond.type;
                                },
                                content() {
                                    trigger.directHit.addArray(
                                        game.filterPlayer(function (current) {
                                            return current != player;
                                        })
                                    );
                                    if (trigger.addCount !== false) {
                                        trigger.addCount = false;
                                        var stat = player.getStat();
                                        if (stat && stat.card && stat.card[trigger.card.name]) stat.card[trigger.card.name]--;
                                    }
                                },
                                ai: {
                                    directHit_ai: true,
                                    skillTagFilter(player, tag, arg) {
                                        return get.type2(arg.card) == player.storage.diy_rewenji_respond.type;
                                    },
                                },
                            },
                        },
                    },
                    diy_rezhenlie: {
                        audio: 'ext:群阴汇聚/audio:2',
                        filter(event, player) {
                            return event.player != player && event.card && (event.card.name == 'sha' || get.type2(event.card) == 'trick');
                        },
                        logTarget: 'player',
                        check(event, player) {
                            if (get.attitude(player, event.player) > 0) return false;
                            if (!event.player.hasSkill('fengyin') && event.player.isIn()) return true;
                            if (event.parent.excluded.includes(player)) return false;
                            if (get.tag(event.card, 'respondSha')) return player.countCards('h', { name: 'sha' }) == 0;
                            else if (get.tag(event.card, 'respondShan')) return player.countCards('h', { name: 'shan' }) == 0;
                            else if (get.tag(event.card, 'damage')) {
                                if (event.card.name == 'shuiyanqijunx') return player.countCards('e') == 0;
                                return true;
                            } else if ((event.card.name == 'shunshou' || (event.card.name == 'zhujinqiyuan' && (event.card.yingbian || get.distance(event.player, player) < 0))) && player.hp > 1) return true;
                            return false;
                        },
                        trigger: {
                            target: 'useCardToTarget',
                        },
                        content() {
                            'step 0';
                            player.loseHp();
                            player.discardPlayerCard(trigger.player, 'he', true);
                            ('step 1');
                            var list = [];
                            if (trigger.parent.targets.includes(player)) list.push('选项一');
                            if (!trigger.player.hasSkill('fengyin') && trigger.player.isIn()) list.push('选项二');
                            if (player.countCards('he') >= player.getDamagedHp()) list.push('背水!');
                            if (!list.length || (list.length == 1 && list[0] == '背水!')) event.finish();
                            else if (list.length == 1) event._result = { control: list[0], index: list[0] == '选项一' ? 0 : 1 };
                            else
                                player.chooseControl(list).set('choiceList', [`取消成为【${get.translation(trigger.card)}】的目标`, `令${get.translation(trigger.player)}本回合非锁定技失效`, `背水!弃置${get.cnNumber(player.getDamagedHp())}张牌,依次执行以上所有选项!`]).ai = function () {
                                    var trigger = _status.event.getTrigger(),
                                        player = _status.event.player;
                                    var bool1 = false,
                                        bool2 = false;
                                    if (!trigger.player.hasSkill('fengyin') && trigger.player.isIn()) bool1 = true;
                                    if (trigger.parent.targets.includes(player) && !trigger.parent.excluded.includes(player)) bool2 = true;
                                    if (bool1 && bool2 && player.countCards('he') >= player.getDamagedHp()) return '背水';
                                    if (bool1) return '选项二';
                                    return '选项一';
                                };
                            ('step 2');
                            if (result.index == 2) player.chooseToDiscard('he', true, player.getDamagedHp());
                            if ([0, 2].includes(result.index)) trigger.parent.targets.remove(player);
                            if ([1, 2].includes(result.index)) trigger.player.addTempSkill('fengyin');
                        },
                        ai: {
                            expose: 0.3,
                        },
                    },
                    diy_remiji: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: ['phaseJieshuBegin', 'phaseZhunbeiBegin'],
                        },
                        forced: true,
                        content() {
                            'step 0';
                            player.judge(function (card) {
                                return get.color(card) == 'black' ? 1.5 : 0.5;
                            });
                            ('step 1');
                            event.num = player.getDamagedHp();
                            player.draw(result.color == 'black' ? event.num + 1 : event.num);
                            ('step 2');
                            var check = player.countCards('h') - event.num;
                            player
                                .chooseCardTarget({
                                    selectCard: [1, Infinity],
                                    position: 'he',
                                    filterTarget: lib.filter.notMe,
                                    ai1(card) {
                                        var player = _status.event.player;
                                        if (player.maxHp - player.hp == 1 && card.name == 'du') return 30;
                                        var check = _status.event.check;
                                        if (check < 1) return 0;
                                        if (player.hp > 1 && check < 2) return 0;
                                        return get.unuseful(card) + 9;
                                    },
                                    ai2(target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (ui.selected.cards.length == 1 && ui.selected.cards[0].name == 'du') return 1 - att;
                                        return att - 2;
                                    },
                                    prompt: '交给一名其他角色任意张牌',
                                })
                                .set('check', check);
                            ('step 3');
                            if (result.targets?.length) {
                                result.targets[0].gain(result.cards, event.player, 'giveAuto');
                                player.line(result.targets, 'green');
                            }
                        },
                        ai: {
                            threaten(player, target) {
                                if (target.hp == 1) return 3;
                                if (target.hp == 2) return 1.5;
                                return 0.5;
                            },
                            effect: {
                                target(card, player, target) {
                                    if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
                                },
                            },
                        },
                    },
                    diy_retuntian: {
                        audio: 'ext:群阴汇聚/audio:2',
                        filter(event, player) {
                            if (player == _status.currentPhase) {
                                return (
                                    event.name == 'lose' &&
                                    event.type == 'discard' &&
                                    event.cards2.filter(function (card) {
                                        return get.name(card, event.hs.includes(card) ? player : false) == 'sha';
                                    }).length
                                );
                            }
                            if (event.name == 'gain' && event.player == player) return false;
                            var evt = event.getl(player);
                            return evt && evt.cards2 && evt.cards2.length;
                        },
                        callback() {
                            if (event.judgeResult.suit == 'heart') {
                                player.gain(card, 'gain2');
                                event.finish();
                                return;
                            }
                            player.storage.tuntian.push(event.card);
                            game.cardsGotoSpecial(card);
                            event.node = event.judgeResult.node;
                            event.node.moveDelete(player);
                            game.broadcast(
                                function (cardid, player) {
                                    var node = lib.cardOL[cardid];
                                    if (node) {
                                        node.moveDelete(player);
                                    }
                                },
                                event.node.cardid,
                                player
                            );
                            game.addVideo('gain2', player, get.cardsInfo([event.node]));
                            player.markSkill('tuntian');
                            game.addVideo('storage', player, ['tuntian', get.cardsInfo(player.storage.tuntian), 'cards']);
                        },
                        trigger: {
                            player: 'loseAfter',
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        forced: true,
                        content() {
                            'step 0';
                            if (player == _status.currentPhase) {
                                event.num = trigger.cards2.filter(function (card) {
                                    return get.name(card, trigger.hs.includes(card) ? player : false) == 'sha';
                                }).length;
                            } else event.num = trigger.getl(player).cards2.length;
                            ('step 1');
                            var next = player.judge(function (card) {
                                return 1;
                            });
                            if (get.mode() != 'guozhan') {
                                next.callback = lib.skill.diy_retuntian.callback;
                                event.num--;
                                if (event.num > 0) event.goto(5);
                                else {
                                    event.finish();
                                    return;
                                }
                            }
                            ('step 2');
                            event.num--;
                            if (result.suit == 'heart' || get.position(result.card) != 'd') {
                                //game.cardsDiscard(card);
                                player.gain(result.card, 'gain2');
                                if (event.num > 0) event.goto(5);
                                else {
                                    event.finish();
                                    return;
                                }
                            }
                            event.card = result.card;
                            event.node = result.node;
                            ('step 3');
                            player.chooseBool(`是否将${get.translation(event.card)}作为【田】置于武将牌上？`).ai = function () {
                                return true;
                            };
                            ('step 4');
                            if (result.bool) {
                                player.storage.tuntian.push(event.card);
                                game.cardsGotoSpecial(card);
                                event.node.moveDelete(player);
                                game.broadcast(
                                    function (cardid, player) {
                                        var node = lib.cardOL[cardid];
                                        if (node) {
                                            node.moveDelete(player);
                                        }
                                    },
                                    event.node.cardid,
                                    player
                                );
                                game.addVideo('gain2', player, get.cardsInfo([event.node]));
                                player.markSkill('tuntian');
                                game.addVideo('storage', player, ['tuntian', get.cardsInfo(player.storage.tuntian), 'cards']);
                            }
                            ('step 5');
                            if (event.num > 0) player.chooseBool(get.prompt2('diy_retuntian')).set('frequentSkill', 'diy_retuntian');
                            ('step 6');
                            if (result.bool) {
                                event.goto(1);
                            }
                        },
                        init(player) {
                            if (!player.storage.tuntian) player.storage.tuntian = [];
                        },
                        intro: {
                            content: 'cards',
                            onunmark(storage, player) {
                                if (storage && storage.length) {
                                    player.$throw(storage, 1000);
                                    game.cardsDiscard(storage);
                                    game.log(storage, '被置入了弃牌堆');
                                    player.storage.tuntian.length = 0;
                                }
                            },
                        },
                        group: 'diy_retuntian_draw',
                        subSkill: {
                            draw: {
                                audio: 'diy_retuntian',
                                trigger: {
                                    player: 'phaseDrawBegin2',
                                },
                                filter(event, player) {
                                    return !event.numFixed && player.storage.tuntian && Math.floor(player.storage.tuntian.length / 2) > 0;
                                },
                                content() {
                                    trigger.num += Math.min(Math.floor(player.storage.tuntian.length / 2), 3);
                                },
                                forced: true,
                            },
                        },
                        ai: {
                            effect: {
                                target(card, player, target, current) {
                                    if (!target.hasFriend() && !player.hasUnknown()) return;
                                    if (_status.currentPhase == target) return;
                                    if (card.name != 'shuiyanqijunx' && get.tag(card, 'loseCard') && target.countCards('he')) {
                                        if (target.hasSkill('reziliang')) return 0.7;
                                        return [0.5, Math.max(2, target.countCards('h'))];
                                    }
                                    if (target.isUnderControl(true, player)) {
                                        if ((get.tag(card, 'respondSha') && target.countCards('h', 'sha')) || (get.tag(card, 'respondShan') && target.countCards('h', 'shan'))) {
                                            if (target.hasSkill('reziliang')) return 0.7;
                                            return [0.5, 1];
                                        }
                                    } else if (get.tag(card, 'respondSha') || get.tag(card, 'respondShan')) {
                                        if (get.attitude(player, target) > 0 && card.name == 'juedou') return;
                                        if (get.tag(card, 'damage') && target.hasSkillTag('maixie')) return;
                                        if (target.countCards('h') == 0) return 2;
                                        if (target.hasSkill('reziliang')) return 0.7;
                                        if (get.mode() == 'guozhan') return 0.5;
                                        return [0.5, Math.max(target.countCards('h') / 4, target.countCards('h', 'sha') + target.countCards('h', 'shan'))];
                                    }
                                },
                            },
                            threaten(player, target) {
                                if (target.countCards('h') == 0) return 2;
                                return 0.5;
                            },
                            nodiscard: true,
                        },
                        preHidden: true,
                    },
                    rezaoxian: {
                        audio: 'ext:群阴汇聚/audio:2',
                        juexingji: true,
                        trigger: {
                            player: 'phaseZhunbeiBegin',
                        },
                        forced: true,
                        filter(event, player) {
                            return player.storage.tuntian && player.storage.tuntian.length >= 3 && !player.storage.rezaoxian;
                        },
                        derivation: ['rejixi', 'reziliang'],
                        content() {
                            player.loseMaxHp();
                            player.addSkill('rejixi');
                            player.addSkill('reziliang');
                            player.phase('nodelay');
                            player.storage.rezaoxian = true;
                            player.awakenSkill('rezaoxian');
                        },
                    },
                    rejixi: {
                        audio: 'ext:群阴汇聚/audio:2',
                        enable: 'phaseUse',
                        usable: 1,
                        filterTarget(card, player, target) {
                            return player != target && player.storage.tuntian.length >= Math.max(target.countCards('h'), Math.max(1, get.distance(player, target)));
                        },
                        filter(event, player) {
                            return game.hasPlayer(function (current) {
                                return player != current && player.storage.tuntian.length >= Math.max(current.countCards('h'), Math.max(1, get.distance(player, current)));
                            });
                        },
                        content() {
                            'step 0';
                            var list = [];
                            for (var i of player.storage.tuntian) list.push(i);
                            if (player.storage.tuntian.length == Math.max(target.countCards('h'), Math.max(1, get.distance(player, target)))) event._result = { bool: true, links: list };
                            else
                                player.chooseButton([`【屯田】请移去${get.cnNumber(Math.max(target.countCards('h'), Math.max(1, get.distance(player, target))))}张「田」`, player.storage.tuntian], Math.max(target.countCards('h'), Math.max(1, get.distance(player, target))), true).set('ai', function (button) {
                                    return 10 - get.value(button);
                                });
                            ('step 1');
                            if (result.links?.length) {
                                var card = result.links;
                                for (var i = 0; i < card.length; i++) {
                                    if (['shunshou', 'zhujinqiyuan'].includes(card[i].name)) {
                                        target.damage();
                                        break;
                                    }
                                }
                                player.storage.tuntian.remove(card);
                                if (!player.storage.tuntian.length) {
                                    player.unmarkSkill('tuntian');
                                } else {
                                }
                                game.cardsDiscard(card);
                                player.$throw(card);
                                game.log(card, '进入了弃牌堆');
                            }
                            ('step 2');
                            player.storage.rejixi_use = target;
                            player.addTempSkill('rejixi_use');
                        },
                        ai: {
                            order: 10,
                            result: {
                                player(player) {
                                    var players = game.filterPlayer();
                                    for (var i of players) {
                                        if (i != player && get.attitude(player, i) <= 1 && get.attitude(i, player) <= 1) {
                                            return 1;
                                        }
                                    }
                                    return 0;
                                },
                                target(player, target) {
                                    return -1;
                                },
                            },
                        },
                        subSkill: {
                            use: {
                                audio: 'diy_rejixi',
                                intro: {
                                    content: '本回合你与$的距离为1,且你使用牌指定$为目标后,你获得$的一张牌',
                                },
                                mod: {
                                    globalFrom(from, to, distance) {
                                        if (to == from.storage.rejixi_use) return distance - Infinity;
                                    },
                                },
                                trigger: {
                                    player: 'useCardToPlayered',
                                },
                                filter(event, player) {
                                    return event.target == player.storage.rejixi_use && event.target.countGainableCards(player, 'he') > 0;
                                },
                                forced: true,
                                logTarget: 'target',
                                content() {
                                    player.gainPlayerCard(trigger.target, 'he', true);
                                },
                            },
                        },
                    },
                    reziliang: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            global: 'phaseJieshuBegin',
                        },
                        forced: true,
                        filter(event, player) {
                            return (
                                game.hasPlayer(function (current) {
                                    return current.getHistory('damage').length;
                                }) &&
                                player.storage.tuntian &&
                                player.storage.tuntian.length
                            );
                        },
                        content() {
                            'step 0';
                            player
                                .chooseTarget(get.prompt('reziliang'), '选择一名本回合受到过伤害的角色', function (card, player, target) {
                                    return target.getHistory('damage').length;
                                })
                                .set('ai', function (target) {
                                    if (target.hasSkillTag('nogain') && target != _status.currentPhase) return 1;
                                    var player = _status.event.player,
                                        att = get.attitude(player, target);
                                    if (player.storage.tuntian.includes('du')) return -att;
                                    return att;
                                });
                            ('step 1');
                            if (result.targets?.length) {
                                var target = result.targets[0];
                                event.target = target;
                                var num = 0;
                                target.getHistory('damage', function (evt) {
                                    num += evt.num;
                                });
                                player
                                    .chooseCardButton(`交给其至多${num}张「田」`, [1, num], player.storage.tuntian, true)
                                    .set('ai', function (button) {
                                        var player = _status.event.player,
                                            target = _status.event.target;
                                        if (get.attitude(player, target) > 0) return get.value(button.link);
                                        if (get.attitude(player, target) < 0 && button.link.name == 'du') return 1;
                                        return 0;
                                    })
                                    .set('target', target);
                            } else event.finish();
                            ('step 2');
                            if (result.links?.length) {
                                var cards = result.links;
                                player.storage.tuntian.remove(cards);
                                if (!player.storage.tuntian.length) {
                                    player.unmarkSkill('tuntian');
                                } else {
                                }
                                target.gain(cards);
                                if (target == player) {
                                    player.$draw(cards, true);
                                } else {
                                    player.$give(cards, trigger.player);
                                }
                                player.draw();
                            }
                        },
                    },
                    diy_reyiji_faq: {},
                    diy_retieji: {
                        shaRelated: true,
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        check(event, player) {
                            return get.attitude(player, event.target) <= 0;
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        logTarget: 'target',
                        content() {
                            'step 0';
                            trigger.target.addTempSkill('fengyin');
                            trigger.parent.directHit.add(trigger.target);
                            ('step 1');
                            player.judge(function (card) {
                                if (get.color(card) == 'black') return card.suit == 'spade' ? 2 : 1.5;
                                return card.suit == 'heart' ? 2 : 1;
                            });
                            ('step 2');
                            var target = trigger.target;
                            var suit = result.suit;
                            if (result.color == 'red') {
                                player.discardPlayerCard(target, 'he', true);
                                if (suit == 'heart') player.draw(2);
                                event.finish();
                            } else {
                                player.chooseControl('draw_card', '获得判定牌', function () {
                                    if (get.tag(result.card, 'damage') || result.card.name == 'wuxie') return '获得判定牌';
                                    return 'draw_card';
                                });
                                event.card = result.card;
                                if (suit == 'spade') {
                                    var id = target.playerid;
                                    var map = trigger.parent.customArgs;
                                    if (!map[id]) map[id] = {};
                                    if (typeof map[id].extraDamage != 'number') {
                                        map[id].extraDamage = 0;
                                    }
                                    map[id].extraDamage++;
                                }
                            }
                            ('step 3');
                            if (result.control == 'draw_card') player.draw();
                            else player.gain(event.card, 'gain2');
                        },
                        ai: {
                            directHit_ai: true,
                            ignoreSkill: true,
                            skillTagFilter(player, tag, arg) {
                                if (tag == 'directHit_ai') {
                                    return get.attitude(player, arg.target) <= 0 && arg.card.name == 'sha';
                                }
                                if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
                                if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
                                if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).includes(arg.skill)) return false;
                            },
                        },
                    },
                    diy_reliegong: {
                        shaRelated: true,
                        mod: {
                            attackRangeBase() {
                                return Infinity;
                            },
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'useCardToTargeted',
                        },
                        logTarget: 'target',
                        check(event, player) {
                            return get.attitude(player, event.target) <= 0;
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        content() {
                            trigger.parent.directHit.push(trigger.target);
                            var id = trigger.target.playerid;
                            var map = trigger.parent.customArgs;
                            if (!map[id]) map[id] = {};
                            if (typeof map[id].extraDamage != 'number') {
                                map[id].extraDamage = 0;
                            }
                            map[id].extraDamage++;
                        },
                        ai: {
                            threaten: 0.5,
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                if (get.attitude(player, arg.target) <= 0 && arg.card.name == 'sha') return true;
                                return false;
                            },
                        },
                    },
                    fangce: {
                        marktext: '策',
                        intro: {
                            markcount: 'expansion',
                            content: 'expansion',
                        },
                        onremove(player, skill) {
                            var cards = player.getExpansions(skill);
                            if (cards.length) player.loseToDiscardpile(cards);
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            global: ['cardsDiscardAfter', 'loseAfter'],
                        },
                        forced: true,
                        filter(event, player) {
                            var evt = event.parent,
                                evtx = evt.relatedEvent;
                            var xs = player.getExpansions('fangce');
                            var types = [],
                                suits = [];
                            if (xs.length) {
                                for (var i of xs) {
                                    types.add(get.type2(i));
                                    suits.add(i.suit);
                                }
                            }
                            if (_status.currentPhase != player) return false;
                            if (event.name == 'lose' && evt.name == 'equip') {
                                for (var j of event.cards) {
                                    if (get.position(j, true) == 'd' && get.type(j) == 'equip') {
                                        if (xs.length) return !types.includes(get.type(j)) || !suits.includes(j.suit);
                                        return true;
                                    }
                                }
                            }
                            if (evt.name != 'orderingDiscard' || !evtx || !['useCard', 'respond'].includes(evtx.name)) return false;
                            var cards = event.cards.filterInD('d');
                            if (xs.length <= 0) return cards.length;
                            if (cards.length) return cards.some((k) => !types.includes(get.type2(k)) || !suits.includes(k.suit));
                            return false;
                        },
                        content() {
                            'step 0';
                            var evt = trigger.parent,
                                evtx = evt.relatedEvent;
                            ('step 1');
                            var xs = player.getExpansions('fangce');
                            var types = [],
                                suits = [];
                            if (xs.length) {
                                for (var i of xs) {
                                    types.add(get.type2(i));
                                    suits.add(i.suit);
                                }
                            }
                            var list = [];
                            if (trigger.parent.name == 'equip') {
                                var cards = trigger.cards;
                                for (var j of cards) {
                                    if (get.position(j, true) == 'd' && get.type(j) == 'equip') {
                                        if (xs.length) {
                                            if (!types.includes(get.type(j)) || !suits.includes(j.suit)) list.push(j);
                                        } else list.push(j);
                                    }
                                }
                            } else {
                                var cards = trigger.cards.filterInD('d');
                                if (xs.length) {
                                    for (var j of cards) {
                                        if (!types.includes(get.type2(j)) || !suits.includes(j.suit)) list.push(j);
                                    }
                                } else list.addArray(cards);
                            }
                            event.list = list;
                            ('step 2');
                            var types = [],
                                suits = [];
                            var listx = [];
                            if (event.list.length) {
                                if (event.list.length == 1) player.addToExpansion(event.list[0], 'gain2').gaintag.add('fangce');
                                else {
                                    for (var i of event.list) {
                                        if (types.includes(get.type2(i)) || suits.includes(i.suit)) continue;
                                        listx.push(i);
                                        types.add(get.type2(i));
                                        suits.add(i.suit);
                                    }
                                }
                            }
                            if (listx.length) player.addToExpansion(listx, 'gain2').gaintag.add('fangce');
                        },
                        group: 'fangce_draw',
                        subSkill: {
                            draw: {
                                audio: 'fangce',
                                trigger: {
                                    player: 'phaseUseEnd',
                                },
                                forced: true,
                                filter(event, player) {
                                    return player.getExpansions('fangce').length;
                                },
                                content() {
                                    'step 0';
                                    player.chooseButton(['【方策】请移去至多三张「策」,摸等量张牌', player.getExpansions('fangce')], [1, 3]).ai = () => 1;
                                    ('step 1');
                                    if (result.bool) {
                                        player.addTempSkill('fangce_add');
                                        player.loseToDiscardpile(result.links);
                                        player.draw(result.links.length).gaintag = ['fangce'];
                                    }
                                },
                            },
                            add: {
                                mod: {
                                    ignoredHandcard(card, player) {
                                        if (card.hasGaintag('fangce')) return true;
                                    },
                                    cardDiscardable(card, player, name) {
                                        if (name == 'phaseDiscard' && card.hasGaintag('fangce')) return false;
                                    },
                                },
                                onremove(player) {
                                    player.removeGaintag('fangce');
                                },
                            },
                        },
                    },
                    remoukui: {
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        content() {
                            'step 0';
                            var list = ['选项一'];
                            if (trigger.target.countDiscardableCards(player, 'he')) list.push('选项二');
                            list.push('背水!');
                            list.push('cancel2');
                            player
                                .chooseControl(list)
                                .set('choiceList', ['摸一张牌', `弃置${get.translation(trigger.target)}的一张牌`, '背水!依次执行以上两项.若此【杀】被【闪】抵消,则其弃置你的一张牌.'])
                                .set('prompt', get.prompt('remoukui', trigger.target));
                            ('step 1');
                            if (result.control != 'cancel2') {
                                var target = trigger.target;
                                if (['选项一', '背水!'].includes(result.control)) player.draw();
                                if (['选项二', '背水!'].includes(result.control)) player.discardPlayerCard(target, true, 'he');
                                if (result.control == '背水!') {
                                    player.addTempSkill('remoukui_effect');
                                    var evt = trigger.parent;
                                    if (!evt.remoukui_effect)
                                        evt.remoukui_effect = {
                                            card: trigger.card,
                                            target: trigger.target,
                                        };
                                }
                            }
                        },
                        subSkill: {
                            effect: {
                                trigger: {
                                    player: 'shaMiss',
                                },
                                charlotte: true,
                                forced: true,
                                filter(event, player) {
                                    var evt = event.parent;
                                    var info = evt.remoukui_effect;
                                    if (event.target != info.target || event.card != info.card) return false;
                                    return player.countDiscardableCards(event.target, 'he');
                                },
                                content() {
                                    trigger.target.discardPlayerCard(player, true, 'he').boolline = true;
                                },
                            },
                        },
                    },
                    diy_jingxiang: {
                        intro: {
                            content(storage, player) {
                                var str = '<li>本回合已使用的花色:';
                                var suit = [];
                                player.getHistory('useCard', function (evt) {
                                    suit.add(evt.card.suit);
                                });
                                str += suit
                                    .map(function (i) {
                                        return i != 'none' && get.translation(i);
                                    })
                                    .toString();
                                str += '<br><li>本回合手牌上限+';
                                str += storage;
                                return str;
                            },
                            markcount: 'mark',
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: 'phaseJieshuBegin',
                        },
                        content() {
                            'step 0';
                            player.draw();
                            if (player.getHistory('useCard').length < player.hp) event.finish();
                            ('step 1');
                            var list = ['摸牌阶段', '出牌阶段'];
                            if (player.countMark('diy_jingxiang') >= player.hp) list.push('顺势!我全都要!');
                            player.chooseControl(list).set('prompt', '【精详】选择要执行的额外阶段');
                            ('step 2');
                            if (result.control == '顺势!我全都要!') {
                                var next_d = player.phaseDraw(),
                                    next_u = player.phaseUse();
                                event.next.remove(next_d);
                                event.next.remove(next_u);
                                trigger.parent.next.push(next_d);
                                trigger.parent.next.push(next_u);
                            } else {
                                var next = player[result.index ? 'phaseUse' : 'phaseDraw']();
                                event.next.remove(next);
                                trigger.parent.next.push(next);
                            }
                        },
                        subSkill: {
                            add: {
                                audio: 'diy_jingxiang',
                                trigger: {
                                    player: 'useCard',
                                },
                                filter(event, player) {
                                    if (player != _status.currentPhase) return false;
                                    var suit = event.card.suit;
                                    if (!lib.suit.includes(suit)) return false;
                                    return (
                                        player.getHistory('useCard', function (evt) {
                                            return evt != event && evt.card.suit == suit;
                                        }).length == 0
                                    );
                                },
                                content() {
                                    player.addMark('diy_jingxiang', 1);
                                    if (!player.hasSkill('diy_jingxiang_remove')) player.addTempSkill('diy_jingxiang_remove');
                                },
                                forced: true,
                            },
                            remove: {
                                onremove(player) {
                                    player.removeMark('diy_jingxiang', player.countMark('diy_jingxiang'));
                                },
                            },
                        },
                        group: 'diy_jingxiang_add',
                    },
                    retunchu: {
                        subSkill: {
                            maxhand: {
                                mark: true,
                                mod: {
                                    maxHandcard(player, num) {
                                        return num + 2;
                                    },
                                },
                                intro: {
                                    content: '本回合手牌上限+2',
                                },
                            },
                        },
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            player: ['phaseDrawBegin2', 'phaseDiscardBegin'],
                        },
                        filter(event, player) {
                            if (event.name == 'phaseDraw') return !event.numFixed;
                            return !player.getHistory('useCard', function (evt) {
                                return evt.isPhaseUsing() && evt.card.name == 'sha';
                            }).length;
                        },
                        forced: true,
                        preHidden: true,
                        content() {
                            if (trigger.name == 'phaseDraw') trigger.num += 2;
                            else player.addTempSkill('retunchu_maxhand', 'phaseDiscardEnd');
                        },
                    },
                    reshuliang: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            global: 'phaseJieshuBegin',
                        },
                        forced: true,
                        filter(event, player) {
                            if (!player.countCards('h')) return false;
                            return event.player.countCards('h') < event.player.hp;
                        },
                        content() {
                            'step 0';
                            player.chooseToDiscard(get.prompt2('reshuliang', trigger.player)).ai = function (card) {
                                var trigger = _status.event.getTrigger();
                                var player = _status.event.player;
                                if (get.attitude(player, trigger.player) > 0) return 10 - get.value(card);
                                return 0;
                            };
                            ('step 1');
                            if (result.bool) {
                                trigger.player.phaseDraw();
                            }
                        },
                    },
                    rexuehen: {
                        audio: 'ext:群阴汇聚:2',
                        enable: 'phaseUse',
                        usable: 1,
                        filter(event, player) {
                            return player.countCards('he', { color: 'red' }) > 0;
                        },
                        filterTarget: true,
                        selectTarget() {
                            var player = _status.event.player;
                            return [1, player.getDamagedHp() + 1];
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
                        line: 'fire',
                        content() {
                            'step 0';
                            for (var i = 0; i < targets.length; i++) {
                                if (!targets[i].isLinked()) {
                                    targets[i].link(true);
                                }
                            }
                            ('step 1');
                            ('step 2');
                            targets[0].damage('fire', 'nocard');
                        },
                        ai: {
                            damage: true,
                            fireAttack: true,
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
                    rehuxiao: {
                        trigger: {
                            source: 'damageSource',
                        },
                        filter(event, player) {
                            return event.nature == 'fire';
                        },
                        logTarget: 'player',
                        content() {
                            trigger.player.draw();
                        },
                    },
                    rexiaoji: {
                        audio: 'ext:群阴汇聚/audio:2',
                        audioname2: {
                            re_sp_sunshangxiang: 'rexiaoji_gsp',
                        },
                        trigger: {
                            player: 'loseAfter',
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        forced: true,
                        filter(event, player) {
                            var evt = event.getl(player);
                            return evt && evt.player == player && evt.es && evt.es.length;
                        },
                        content() {
                            'step 0';
                            event.count = trigger.getl(player).es.length;
                            ('step 1');
                            event.count--;
                            var info = get.info('rexiaoji');
                            var checkFrequent = function (info) {
                                if (player.hasSkillTag('nofrequent', false, event.skill)) return false;
                                if (typeof info.frequent == 'boolean') return info.frequent;
                                if (typeof info.frequent == 'function') return info.frequent(trigger, player);
                                if (info.frequent == 'check' && typeof info.check == 'function') return info.check(trigger, player);
                                return false;
                            };
                            var frequent = false,
                                boolean = false;
                            if (checkFrequent(info)) frequent = true;
                            if (frequent && !lib.config.autoskilllist.includes('rexiaoji')) boolean = true;
                            player.chooseDrawRecover(2, boolean).set('prompt', get.prompt('rexiaoji'));
                            ('step 2');
                            if (result.control != 'cancel2') {
                                if (_status.currentPhase != player) player.draw();
                            }
                            if (event.count > 0) event.goto(1);
                        },
                        ai: {
                            noe: true,
                            reverseEquip: true,
                            effect: {
                                target(card, player, target, current) {
                                    if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                                },
                            },
                        },
                    },
                    diy_rejieyin: {
                        audio: 'ext:群阴汇聚/audio:2',
                        enable: 'phaseUse',
                        filterCard: true,
                        selectCard: [1, 2],
                        usable: 1,
                        position: 'he',
                        filter(event, player) {
                            return player.countCards('he') > 0;
                        },
                        check(card) {
                            var player = _status.event.player;
                            if (
                                get.type(card, false) == 'equip' &&
                                game.hasPlayer(function (current) {
                                    return current != player && current.canEquip(card, true) && !current.hasSkillTag('refuseGifts') && get.effect(current, card, player, player) > 0;
                                })
                            )
                                return 20 - get.value(card);
                            if (!player.needsToDiscard()) return 0;
                            return 8 - get.value(card);
                        },
                        filterTarget(card, player, target) {
                            if (!target.hasSex('male')) return false;
                            var cards = ui.selected.cards;
                            for (var i of cards) {
                                if (get.type(i) == 'equip') return target.canEquip(card, true);
                            }
                            return true;
                        },
                        discard: false,
                        delay: false,
                        lose: false,
                        content() {
                            'step 0';
                            if (event._zengyu_denied) {
                                player.$throw(cards, 1000);
                                player.lose(cards, ui.discardPile, 'visible');
                            } else {
                                var toequip = [];
                                for (var i of cards) {
                                    if (get.type(i, false) == 'equip') {
                                        toequip.push(i);
                                        cards.remove(i);
                                    }
                                }
                                for (var j of toequip) {
                                    player.$give(j, target, false);
                                    target.equip(j);
                                }
                                if (cards.length) target.gain(cards, player, 'give');
                                if (!toequip.length) event.goto(2);
                            }
                            ('step 1');
                            ('step 2');
                            if (player.isDamaged()) player.recover();
                            else player.draw();
                            if (target.isDamaged()) target.recover();
                            else target.draw();
                            ('step 3');
                            player.storage.diy_rejieyin = target;
                            game.countPlayer(function (current) {
                                current.unmarkSkill('diy_rejieyin');
                            });
                            target.markSkillCharacter('diy_rejieyin', player, '结姻', `恭喜!你与${get.translation(player)}喜结连理!`);
                        },
                        ai: {
                            order(item, player) {
                                if (
                                    player.hasCard(function (card) {
                                        return (
                                            get.type(card, false) == 'equip' &&
                                            game.hasPlayer(function (current) {
                                                return current != player && current.canEquip(card, true) && !current.hasSkillTag('refuseGifts') && get.effect(current, card, player, player) > 0;
                                            })
                                        );
                                    }, 'he')
                                )
                                    return 7;
                                return 2;
                            },
                            result: {
                                target(player, target) {
                                    var cards = ui.selected.cards;
                                    if (!cards || target.hasSkillTag('refuseGifts') || target.hasSkillTag('nogain')) return 0;
                                    for (var i of cards) {
                                        if (get.type(i, false) == 'equip') return get.effect(target, i, target, target);
                                        if (i.name == 'du') return player.hp > target.hp ? -1 : 0;
                                        return Math.max(1, get.value(i, player) - get.value(i, target));
                                    }
                                },
                            },
                        },
                    },
                    yinli: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            global: ['loseAfter', 'cardsDiscardAfter'],
                        },
                        forced: true,
                        filter(event, player) {
                            if (!player.storage.diy_rejieyin || player.storage.diy_rejieyin != event.player) return false;
                            if (event.name == 'lose' && event.position != ui.discardPile) return false;
                            if (event.player != _status.currentPhase) return false;
                            return (
                                event.cards &&
                                event.cards.filter(function (card) {
                                    return get.type(card, false) == 'equip';
                                })
                            );
                        },
                        async content(event, trigger, player) {
                            var cards = trigger.cards.filter(function (card) {
                                return get.type(card, false) == 'equip';
                            });
                            player.gain(cards, 'gain2', 'log');
                        },
                    },
                    reliangzhu: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            global: 'recoverAfter',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.player.isPhaseUsing();
                        },
                        content() {
                            'step 0';
                            var choiceList = ['摸一张牌', '摸两张牌'];
                            if (player.getEquip(1) && lib.filter.canBeGained(player.getEquip(1), player, player)) {
                                choiceList.push(`获得${get.translation(player.getEquip(1))}`);
                                var cge1 = true;
                            }
                            if (player == trigger.player) {
                                player
                                    .chooseControl('cancel2')
                                    .set('choiceList', choiceList)
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        if (player.hasSkill('rexiaoji') && _status.event.cge1) return 2;
                                        return 1;
                                    })
                                    .set('prompt', get.prompt('reliangzhu'))
                                    .set('cge1', cge1);
                                event.single = true;
                            } else {
                                player
                                    .chooseTarget(get.prompt2('reliangzhu'), function (card, player, target) {
                                        return target == _status.event.player || target == _status.event.target;
                                    })
                                    .set('target', trigger.player)
                                    .set('ai', function (target) {
                                        var player = _status.event.player,
                                            att = get.attitude(player, target);
                                        if (player == target) return 1;
                                        if (_status.event.cge1) -att - 1.5;
                                        return att - 1.5;
                                    })
                                    .set('cge1', cge1);
                            }
                            ('step 1');
                            if (event.single) {
                                if (result.control != 'cancel2') {
                                    player.storage.reliangzhu = true;
                                    if (result.index == 0) player.draw();
                                    else if (result.index == 1) player.draw(2);
                                    else player.gain(player.getEquip(1), player, 'gain2');
                                    event.finish();
                                }
                            } else if (result.targets?.length) {
                                var target = result.targets[0];
                                event.target = target;
                                if (target == player) {
                                    player.storage.reliangzhu = true;
                                    player.draw();
                                    event.finish();
                                } else {
                                    if (!target.getEquip(1)) event._result = { bool: false };
                                    else {
                                        var att = get.attitude(player, trigger.player) <= 0;
                                        var next = player.chooseButton();
                                        next.set('att', att);
                                        next.set('createDialog', [`获得${get.translation(trigger.player)}的${get.translation(target.getEquip(1))},或点〖取消〗令其摸两张牌`, [target.getEquip(1)]]);
                                        next.set('ai', function (button) {
                                            if (_status.event.att) return get.buttonValue(button);
                                            return 0;
                                        });
                                    }
                                }
                            }
                            ('step 2');
                            player.storage.reliangzhu = true;
                            if (result.bool) {
                                player.gain(trigger.player.getEquip(1), trigger.player, 'gain2');
                            } else trigger.player.draw(2);
                        },
                        ai: {
                            expose: 0.1,
                        },
                    },
                    refanxiang: {
                        audio: 'ext:群阴汇聚/audio:2',
                        juexingji: true,
                        derivation: ['rexiaoji', 'diy_jianwu'],
                        trigger: {
                            player: 'phaseZhunbeiBegin',
                        },
                        filter(event, player) {
                            return player.storage.reliangzhu == true;
                        },
                        forced: true,
                        content() {
                            player.gainMaxHp();
                            player.recover();
                            player.changeGroup('wu');
                            player.addSkill('diy_jianwu');
                            player.addSkill('rexiaoji');
                            player.awakenSkill('refanxiang');
                        },
                    },
                    diy_jianwu: {
                        audio: 'ext:群阴汇聚/audio:2',
                        enable: 'phaseUse',
                        filterCard: {
                            type: 'equip',
                        },
                        position: 'e',
                        viewAs: {
                            name: 'sha',
                        },
                        viewAsFilter(player) {
                            return player.countCards('e', { type: 'equip' });
                        },
                        precontent() {
                            event.parent.addCount = false;
                        },
                        prompt: '将装备区的牌当杀使用或打出',
                        check(card) {
                            return 5 - get.value(card);
                        },
                        ai: {
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
                                if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                return true;
                            },
                            basic: {
                                useful: [5, 3, 1],
                                value: [5, 3, 1],
                            },
                            order(item, player) {
                                if (player.hasSkillTag('presha', true, null, true)) return 10;
                                if (lib.linked.includes(get.nature(item))) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                        }) &&
                                        game.countPlayer(function (current) {
                                            return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                        }) > 1
                                    )
                                        return 3.1;
                                    return 3;
                                }
                                return 3.05;
                            },
                            result: {
                                target(player, target, card, isLink) {
                                    var eff = (function () {
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
                                    })();
                                    if (
                                        !isLink &&
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
                                        return eff / 1.2;
                                    return eff;
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
                    rexiaoji_gsp: {
                        audio: 'ext:群阴汇聚/audio:2',
                    },
                    huanjin: {
                        audio: 'ext:群阴汇聚/audio:2',
                        enable: 'phaseUse',
                        usable: 1,
                        filter(event, player) {
                            if (!player.countCards('he')) return false;
                            for (var i of lib.inpile) {
                                if (i != 'du' && get.type(i, false) == 'basic') {
                                    if (event.filterCard && event.filterCard({ name: i }, player, event)) return true;
                                    if (i == 'sha') {
                                        for (var j of lib.inpile_nature) {
                                            if (event.filterCard && event.filterCard({ name: 'sha', nature: j }, player, event)) {
                                                return true;
                                            }
                                        }
                                    }
                                }
                            }
                            return false;
                        },
                        chooseButton: {
                            dialog(event, player) {
                                var list = [];
                                var str = get.translation('spade');
                                for (var i of lib.inpile) {
                                    if (i != 'du' && get.type(i, false) == 'basic') {
                                        if (event.filterCard && event.filterCard({ name: i }, player, event)) {
                                            list.push(['基本', str, i]);
                                        }
                                        if (i == 'sha') {
                                            for (var j of lib.inpile_nature) {
                                                if (event.filterCard && event.filterCard({ name: 'sha', nature: j }, player, event)) {
                                                    list.push(['基本', str, i, j]);
                                                }
                                            }
                                        }
                                    }
                                }
                                return ui.create.dialog('缓进', [list, 'vcard']);
                            },
                            check(button) {
                                if (button.link[2] == 'jiu') return 0;
                                return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                            },
                            //你可以将一张牌当做任意一张不计入使用次数的基本牌使用.此牌的花色视为♠️️
                            backup(links, player) {
                                return {
                                    audio: 'huanjin',
                                    filterCard: true,
                                    selectCard: 1,
                                    popname: true,
                                    position: 'he',
                                    viewAs: {
                                        name: links[0][2],
                                        nature: links[0][3],
                                        suit: 'spade',
                                    },
                                    precontent() {
                                        event.parent.addCount = false;
                                        var evtx = event.getParent(2);
                                        if (
                                            player.hasHistory('useCard', function (evt) {
                                                return evt.skill == 'huanjin_backup' && evt.getParent(2) == evtx;
                                            })
                                        ) {
                                            alert('检测到您安装了十周年UI等具有出牌特效的扩展.该扩展会导致【缓进】出现无视次数限制发动的bug.为避免无限循环,即将重启游戏.请卸载相关扩展以解决此问题.');
                                            game.reload();
                                        }
                                    },
                                };
                            },
                            prompt(links) {
                                return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '(♠️️)使用';
                            },
                        },
                        ai: {
                            order: 16,
                            result: {
                                player: 1,
                            },
                        },
                    },
                    reshibei: {
                        trigger: {
                            player: 'damageEnd',
                        },
                        forced: true,
                        audio: 'ext:群阴汇聚/audio:2',
                        filter(event, player) {
                            return player.getHistory('damage').indexOf(event) <= 1;
                        },
                        check(event, player) {
                            return player.getHistory('damage').indexOf(event) == 0;
                        },
                        content() {
                            'step 0';
                            if (player.getHistory('damage').indexOf(trigger) == 1) {
                                if (player.countCards('he') < 2) event._result = { control: 'cancel2' };
                                else
                                    player.chooseToDiscard(2, 'he', '弃置两张牌,或失去一点体力').ai = function (card) {
                                        var player = _status.event.player;
                                        if ([player.previous, player].includes(_status.currentPhase)) return 0;
                                        return get.unuseful(card);
                                    };
                            } else player.chooseDrawRecover(3, true);
                            ('step 1');
                            if (result.control == 'cancel2') player.loseHp();
                            if (result.control == 'recover_hp') player.draw();
                        },
                        ai: {
                            maixie_defend: true,
                            threaten: 0.9,
                            effect: {
                                target(card, player, target) {
                                    if (player.hasSkillTag('jueqing')) return;
                                    if (target.hujia) return;
                                    if (player._shibei_tmp) return;
                                    if (_status.event.getParent('useCard', true) || _status.event.getParent('_wuxie', true)) return;
                                    if (get.tag(card, 'damage')) {
                                        if (target.getHistory('damage').length) {
                                            return [1, -2];
                                        } else {
                                            if (get.attitude(player, target) > 0 && target.hp > 1) {
                                                return 0;
                                            }
                                            if (get.attitude(player, target) < 0 && !player.hasSkillTag('damageBonus')) {
                                                if (card.name == 'sha') return;
                                                var sha = false;
                                                player._shibei_tmp = true;
                                                var num = player.countCards('h', function (card) {
                                                    if (card.name == 'sha') {
                                                        if (sha) {
                                                            return false;
                                                        } else {
                                                            sha = true;
                                                        }
                                                    }
                                                    return get.tag(card, 'damage') && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
                                                });
                                                delete player._shibei_tmp;
                                                if (player.hasSkillTag('damage')) {
                                                    num++;
                                                }
                                                if (num < 2) {
                                                    var enemies = player.getEnemies();
                                                    if (enemies.length == 1 && enemies[0] == target && player.needsToDiscard()) {
                                                        return;
                                                    }
                                                    return 0;
                                                }
                                            }
                                        }
                                    }
                                },
                            },
                        },
                    },
                    diy_rejianying: {
                        group: 'diy_rejianying_storage',
                        audio: 'ext:群阴汇聚/audio:2',
                        mod: {
                            aiOrder(player, card, num) {
                                if (typeof card == 'object' && player.isPhaseUsing()) {
                                    if (card.suit == 'spade') return num + 10;
                                    var evt = player.storage.diy_rejianying_mark;
                                    if ((evt && evt.suit && evt.suit == card.suit) || (evt.number && evt.number == card.number)) {
                                        return num + 10;
                                    }
                                }
                            },
                        },
                        trigger: {
                            player: 'useCard1',
                        },
                        forced: true,
                        filter(event, player) {
                            if (event.card.suit == 'spade') return true;
                            var evt = player.storage.diy_rejianying_mark;
                            if (!evt) return false;
                            return (evt.suit != 'none' && evt.suit == event.card.suit) || (typeof evt.number == 'number' && evt.number == event.card.number);
                        },
                        content() {
                            player.draw();
                        },
                        subSkill: {
                            mark: {
                                intro: {
                                    content(storage, player) {
                                        var str = '记录花色点数为:';
                                        if (storage.suit == 'none') str += '🃏';
                                        else str += get.translation(storage.suit);
                                        var num = storage.number;
                                        if ([1, 11, 12, 13].includes(num)) num = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' }[num];
                                        str += num;
                                        return str;
                                    },
                                },
                            },
                            storage: {
                                trigger: {
                                    player: 'useCard2',
                                },
                                forced: true,
                                popup: false,
                                silent: true,
                                content() {
                                    'step 0';
                                    if (trigger.card.suit != 'spade') event._result = { control: trigger.card.suit };
                                    else {
                                        var suits = [];
                                        for (var i of player.getCards('h')) {
                                            if (i.suit != 'spade' && player.getUseValue(i) > 0) suits.push(i.suit);
                                        }
                                        var list = lib.suit.filter(function (j) {
                                            return j != 'spade';
                                        });
                                        player
                                            .chooseControl(list)
                                            .set('prompt', '选择一种花色并记录')
                                            .set('ai', function () {
                                                return _status.event.suits.randomGet();
                                            })
                                            .set('suits', suits);
                                    }
                                    ('step 1');
                                    player.storage.diy_rejianying_mark = { suit: result.control, number: trigger.card.number };
                                    player.markSkill('diy_rejianying_mark');
                                },
                            },
                        },
                    },
                    rehuomo: {
                        audio: 'ext:群阴汇聚/audio:2',
                        enable: 'chooseToUse',
                        hiddenCard(player, name) {
                            return (
                                ['sha', 'shan', 'tao', 'jiu'].includes(name) &&
                                player.hasCard(function (card) {
                                    return get.color(card) == 'black' && get.type(card) != 'basic';
                                }, 'he')
                            );
                        },
                        filter(event, player) {
                            if ((event.filterCard && event.filterCard({ name: 'sha' }, player, event)) || event.filterCard({ name: 'jiu' }, player, event) || event.filterCard({ name: 'shan' }, player, event) || event.filterCard({ name: 'tao' }, player, event)) {
                                return player.hasCard(function (card) {
                                    return get.color(card) == 'black' && get.type(card) != 'basic';
                                }, 'he');
                            }
                            return false;
                        },
                        chooseButton: {
                            dialog(event, player) {
                                var list = [];
                                if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                    list.push(['基本', '', 'sha']);
                                    for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                }
                                if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) list.push(['基本', '', 'tao']);
                                if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) list.push(['基本', '', 'shan']);
                                if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event)) list.push(['基本', '', 'jiu']);
                                return ui.create.dialog('活墨', [list, 'vcard'], 'hidden');
                            },
                            check(button) {
                                var player = _status.event.player;
                                var card = { name: button.link[2], nature: button.link[3] };
                                if (
                                    game.hasPlayer(function (current) {
                                        return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                    })
                                ) {
                                    switch (button.link[2]) {
                                        case 'tao':
                                            return 5;
                                        case 'jiu':
                                            return 3.01;
                                        case 'shan':
                                            return 3.01;
                                        case 'sha':
                                            if (button.link[3] == 'fire') return 2.95;
                                            else if (button.link[3] == 'fire') return 2.92;
                                            else return 2.9;
                                    }
                                }
                                return 0;
                            },
                            backup(links, player) {
                                return {
                                    check(card) {
                                        return 1 / Math.max(0.1, get.value(card));
                                    },
                                    filterCard(card) {
                                        return get.type(card) != 'basic' && get.color(card) == 'black';
                                    },
                                    viewAs: {
                                        name: links[0][2],
                                        nature: links[0][3],
                                        suit: 'none',
                                        number: null,
                                    },
                                    position: 'he',
                                    popname: true,
                                    ignoreMod: true,
                                    precontent() {
                                        'step 0';
                                        var card = event.result.cards[0];
                                        event.card = card;
                                        player.$throw(card, 1000);
                                        game.log(player, '将', card, '置于牌堆顶');
                                        event.result.card = { name: event.result.card.name, nature: event.result.card.nature };
                                        event.result.cards = [];
                                        player.lose(card, ui.cardPile, 'visible', 'insert');
                                        ('step 1');
                                    },
                                };
                            },
                            prompt(links, player) {
                                return '将一张黑色非基本牌置于牌堆顶并视为使用一张' + get.translation(links[0][3] || '') + get.translation(links[0][2]);
                            },
                        },
                        ai: {
                            order() {
                                var player = _status.event.player;
                                var event = _status.event;
                                if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0) return 3.1;
                                return 2.9;
                            },
                            respondSha: true,
                            fireAttack: true,
                            respondShan: true,
                            skillTagFilter(player, tag, arg) {
                                if (tag == 'fireAttack') return true;
                                if (
                                    player.hasCard(function (card) {
                                        return get.color(card) == 'black' && get.type(card) != 'basic';
                                    }, 'he')
                                ) {
                                    if (tag == 'respondSha') return arg == 'use';
                                }
                                return false;
                            },
                            result: {
                                player: 1,
                            },
                        },
                    },
                    rezuoding: {
                        audio: 'ext:群阴汇聚/audio:2',
                        trigger: {
                            global: 'useCardToPlayered',
                        },
                        filter(event, player) {
                            if (event.parent.triggeredTargets3.length > 1) return false;
                            return event.card.suit == 'spade' && event.player != player && player.getHistory('damage').length == 0;
                        },
                        forced: true,
                        content() {
                            'step 0';
                            player.chooseTarget(get.prompt('rezuoding'), '令一名角色摸一张牌').set('ai', function (target) {
                                return get.attitude(_status.event.player, target);
                            });
                            ('step 1');
                            if (result.targets?.length) {
                                result.targets[0].draw();
                            }
                        },
                        ai: {
                            expose: 0.2,
                        },
                    },
                },
                translate: {
                    rechenglve: '成略',
                    rechenglve_info: '<b>转换技</b>,<b>锁定技</b>,出牌阶段限一次,<b>阴</b>:你可以摸X+1张牌,弃置Y张牌.<b>阳</b>:你可以摸X+2张牌,弃置X+1张牌.(X为本回合你发动过<恃才>②效果的次数,Y为X+2且至多为4)若如此做,直到本回合结束,你使用与弃置牌花色相同的牌无距离和次数限制.',
                    rechenglve1: '成略',
                    rechenglve1_info: '',
                    retushe: '图射',
                    retushe_info: '当你使用牌指定目标或使用【闪】/【无懈可击】或打出牌后,则你可摸X张牌(X为此牌指定的目标数+你判定区的牌数+你装备区的牌数,且X至少为1);若你使用牌仅指定一名其他角色,你可令其技能失效直到回合结束.',
                    new_retushe: '图射',
                    new_retushe_info: '当你使用牌指定目标或使用【闪】/【无懈可击】或打出牌后,若你的基本牌数不大于X,则你可令此牌的其他目标的非锁定技失效直到回合结束(无目标则不触发)并摸Y张牌(X为你的体力值的一半且向下取整,Y为此牌指定的目标数与你判定区的牌数的总和减去你装备区的牌数,且至少为1).',
                    new_relimu: '立牧',
                    new_relimu_info: '<b>锁定技</b>,出牌阶段,你可以将一张♦️️牌当做【乐不思蜀】对自己使用,摸一张牌并回复1点体力.若你的判定区有牌,你使用牌直接发动对应的全部强化效果且对你与攻击范围内的角色使用牌没有次数和距离限制.',
                    new_reshicai: '恃才',
                    new_reshicai_info: '①你可以将牌堆底的一张牌如手牌般使用或打出.②当你使用一张牌结算结束后,若此牌与你本回合使用过的牌类型均不同(包括装备牌),你可将此牌置于牌堆顶.若当前回合为你,该类型的牌不计入手牌上限.',
                    diy_reqianxun: '谦逊',
                    diy_reqianxun_info: '当你判定区的牌生效或成为普通锦囊牌的唯一目标时,你可将所有手牌置于武将牌上,称为「谦」.若如此做,当你受到伤害后,你可获得至多X张「谦」(X为伤害值);此回合结束时,你获得所有「谦」.',
                    diy_reqianxun2: '谦逊',
                    diy_reqianxun2_info: '',
                    diy_reyiji: '遗计',
                    diy_reyiji_info: '当你的判定牌生效后,你可摸一张牌,若结果为:红色,你可以交给至多两名其他角色共计至多两张牌;黑色,你可以将至多四张手牌置于至多两名其他角色的武将牌上,这些角色的下个摸牌阶段开始时获得这些牌.若此次累计至少两张牌被置于这些角色的武将牌上,你摸两张牌.',
                    rechouce: '筹策',
                    rechouce_info: '当你的判定牌生效后,若结果为:黑色,你弃置一名角色区域内的一张牌.若场上的军师仍存活且存活的反贼不少于3,则改为你弃置至多两名角色区域内共计两张牌;红色,你令一名角色摸一张牌.若为<先辅>角色,则改为令其摸两张牌.',
                    retiandu: '天妒',
                    retiandu_info: '当你的判定牌生效后,你可获得之;每当你受到1点伤害后,你可进行一次判定,若结果为♥️️2~9,你回复1点体力;<b>锁定技</b>,结束阶段,你失去一点体力并摸一张牌,进行一次判定.',
                    retiandu_xzc: '天妒',
                    retiandu_xzc_info: '',
                    reguding_skill: '界古锭刀',
                    reguding_skill_info: '',
                    sizhan: '死战',
                    sizhan_info: '<b>限定技</b>,出牌阶段,你可以回复体力至体力上限,开启鏖战模式.',
                    rejiyuan: '急援',
                    rejiyuan_info: '当一名角色进入或脱离濒死状态时,或你交给一名其他角色牌时,亦或当你不因此技能获得牌时,你可令其/你可摸一张牌.',
                    rejijie: '机捷',
                    rejijie_info: '每回合限一次,当一名角色进入濒死状态时或出牌阶段,你可以观看牌堆底的一张牌,将之交给一名角色.',
                    old_retiandu_zisha: '天妒',
                    old_retiandu_zisha_info: '',
                    old_retiandu_xzc_zisha: '天妒',
                    old_retiandu_xzc_zisha_info: '',
                    retiandu_zisha: '天妒',
                    retiandu_zisha_info: '',
                    diy_refanghun: '芳魂',
                    diy_refanghun_sha: '龙胆',
                    diy_refanghun_info: '你可以弃置1枚<梅影>标记以发动<龙胆>并摸随机一至两张牌(开启幸运星模式改为摸三张牌);<b>锁定技</b>,游戏开始时,你获得随机1~2枚<梅影>标记;当你成为【杀】的目标/使用【杀】指定目标时或当你受到【杀】的伤害/使用【杀】造成伤害后,你获得X枚<梅影>标记(X为伤害值且至少为1).',
                    diy_refuhan: '扶汉',
                    diy_refuhan_info: '<b>限定技</b>,回合开始时,若你拥有过的<梅影>标记数不小于4,则你可弃置所有<梅影>标记并摸等量张牌,从八张蜀势力武将牌中选择一张,获得其上所有的技能,再从八张蜀势力武将牌中选择并获得一个技能(ban<龙胆>、<自书>和<界急援>),最后从<武圣>、<咆哮>、<铁骑>、<烈弓>和<狂骨>中选择一个获得,并将体力上限数调整为本局游戏中拥有过的<梅影>标记数(至多为15);若此时你是场上体力值最少的角色,你回复1点体力;获得1点血量上限并回复2点体力.',
                    diy_repojun: '破军',
                    diy_repojun_info: '当你使用【杀】指定目标后,你可将其区域内至多2X张牌置于其武将牌上(X为其体力上限).若这些牌中有:装备牌,你将其中一张装备牌置于弃牌堆;锦囊牌或【闪】,你摸一张牌.一名角色回合结束时,其获得以此法置于自己武将牌上的一张牌.当你使用【杀】造成伤害时,你可进行一次判定,此伤害+Y(Y为判定结果点数除以8且向上取整).当你使用【杀】造成伤害后,你可令受伤角色摸Z张牌(Z为其当前的体力值且至多为5),其翻面.',
                    diy_repojun2: '破军',
                    diy_repojun2_info: '',
                    diy_repojun3: '破军',
                    diy_repojun3_info: '',
                    diy_repojun4: '破军',
                    diy_repojun4_info: '当你使用【杀】造成伤害后,你可令受到该伤害的角色摸Y张牌(Y为该角色当前的体力值且至多为5),该角色翻面.',
                    rejieying: '结营',
                    rejieying_info: '<b>锁定技</b>,游戏开始时或当你的武将牌重置时,你横置;所有已横置的角色手牌上限+2;结束阶段,你横置或重置一名其他角色;当其他角色的武将牌重置时,你可横置其;每当你受到1点传导伤害时,改为你回复1点体力或摸一张牌.',
                    relongnu: '龙怒',
                    relongnu_info: '①出牌阶段限一次,你可以摸两张牌,选择一项:1.失去1点体力,获得【龙息·武圣】直到回合结束;2.失去1点体力上限,获得【龙引雷·咆哮】直到回合结束.②出牌阶段,你可以展示一张【界雌雄双股剑】并强化为【界鸾凤和鸣剑】,将之置入装备区.③结束阶段,若你于回合内未发动过此技能的①效果,你弃置一张牌.',
                    longxi_wusheng: '龙息·武圣',
                    longxi_wusheng_info: '<b>锁定技</b>,视为你拥有【天火】,你的红色手牌均视为火【杀】,你使用火【杀】无距离限制且不能被响应.',
                    longyinlei_paoxiao: '龙引雷·咆哮',
                    longyinlei_paoxiao_info: '<b>锁定技</b>,视为你拥有【天雷】,你的锦囊牌均视为雷【杀】,你使用雷【杀】无次数限制且无视防具.',
                    g_rejieying: 'g_rejieying',
                    g_rejieying_info: '',
                    tianlei: '天雷',
                    tianlei_info: '出牌阶段限一次,你可以弃置一张牌,令一名其他角色进行一次判定,若结果:为♠️️2~9,你对其造成3点雷电伤害,跳过其下个出牌阶段;不为♠️️2~9,你摸一张牌.',
                    diy_tianhuo: '天火',
                    diy_tianhuo_info: '出牌阶段限一次,你可以弃置一张牌,令一名其他角色进行一次判定,若结果:为♥️️2~9,你对其造成3点火焰伤害,跳过其下个摸牌阶段;不为♥️️2~9,你获得弃置的牌.',
                    relimu: '立牧',
                    relimu_info: '出牌阶段,你可以将手牌摸至体力上限(若手牌数不小于体力上限则改为摸一张牌)并将体力上限变为3且回复已损失的体力值;若如此做,你直到下个出牌阶段开始你的体力值始终为你的体力上限且你的体力上限始终不小于3,你使用牌无距离/次数限制且造成伤害时伤害+1,最后你始终跳过判定和弃牌阶段且不会被翻面.',
                    yice: '遗策',
                    yice_info: '<b>锁定技</b>,游戏开始时,你获得<筹策>并失去<遗计>;准备阶段,你摸一张牌并进行一次判定;当你的判定牌生效后,若结果为:♥️️,你获得<筹策>并失去<遗计>;♦️️,你获得<遗计>并失去<筹策>.',
                    retianduEX: '天妒',
                    retianduEX_info: '当你的判定牌生效后,你可获得之.每当你受到1点伤害后,你可进行一次判定.若结果为:♥️️2~9,你回复1点体力;♦️️2~9,你摸一张牌.<br>眷顾:<b>锁定技</b>,当你进行判定时,结果会往对你有利的方向发生偏移.',
                    recixiong_skill: '界雌雄双股剑',
                    recixiong_skill_info: '当你使用【杀】指定一名异性的其他角色后,你可令其弃置一张手牌(无牌不弃),你摸一张牌.',
                    diy_retuxi: '突袭',
                    diy_retuxi_info: '摸牌阶段结束时,你可以将至多X张手牌置于牌堆顶,获得等量名其他角色的各一张手牌(X为此阶段你因摸牌而获得的牌数).',
                    cuifeng: '摧锋',
                    cuifeng_info: '每回合限一次,当你不因摸牌而获得牌后,你可以将其中一张牌当做【出其不意】使用.',
                    reyeyan: '业炎',
                    reyeyan_info: '出牌阶段限一次,你可以弃置四张花色不同的牌并失去3点体力,对所有角色依次随机造成1~3点火焰伤害(若存活人数小于3则改为造成3点伤害).你从场上、牌堆或弃牌堆中获得【界朱雀羽扇】或【界赤焰镇魂琴】.<b>锁定技</b>,每当你受到1点火焰伤害时,改为你回复1点体力或摸一张牌.',
                    reqinyin: '琴音',
                    reqinyin_info: '出牌阶段,你可以展示一张【界朱雀羽扇】并强化为【界赤焰镇魂琴】,将之置入装备区;出牌阶段结束时或弃牌阶段结束时或结束阶段或当你进行判定或拼点后,你可摸两张牌,可以选择一项:1. 令所有角色各回复1点体力;2. 令所有角色各受到1点火焰伤害.',
                    rezhuque_skill: '界朱雀羽扇',
                    rezhuque_skill_info: '当你使用普通【杀】时,你可将此【杀】改为火【杀】;锁定技,你使用火【杀】无次数限制.',
                    luanfenghemingjian_recixiong_skill: '界鸾凤和鸣剑',
                    luanfenghemingjian_recixiong_skill_info: '当你当你使用属性【杀】指定一名其他角色后,你可令其弃置一张手牌(无牌不弃),你摸一张牌.',
                    chiyanzhenhunqin_rezhuque_skill: '界赤焰镇魂琴',
                    chiyanzhenhunqin_rezhuque_skill_info: '锁定技,你造成的伤害均具有火属性;你使用火【杀】无距离和次数限制且你的【杀】均视为火【杀】;每当你造成1点火焰伤害后,你受到1点无来源火焰伤害.',
                    fenying: '焚营',
                    fenying_info: '当你失去最后的手牌后,你可摸一张牌,选择一项:1.令至多X名角色横置;2.若没有处于濒死状态的角色,对一名已横置的其他角色造成1点火焰伤害,可以令除其外的至多X-1名其他角色各摸一张牌(X为你本次失去的牌数).当没有手牌的其他角色以此法摸牌时,其多摸一张牌.',
                    diy_reguicai: '鬼才',
                    diy_reguicai_info: '<b>锁定技</b>,当一名角色的判定牌生效前,你可打出一张牌代替之.若你以此法打出了♠️️2~9的牌,你获得被代替的牌并摸一张牌;废除你的判定区直到失去此技能;你不能使用延时锦囊牌;当一名角色受到延时锦囊牌造成的伤害时,改为你对其造成等量同属性伤害.',
                    diy_refankui: '反馈',
                    diy_refankui_info: '每当你受到1点伤害后,若:有伤害来源且不为你,你可获得伤害来源区域内的一张牌;伤害来源为你或伤害来源没有可获得的牌或没有伤害来源,你可获得所有其他角色区域内各一张牌.出牌阶段,你可以将一张延时锦囊牌置入一名其他角色的判定区.',
                    diy_rezhiheng: '制衡',
                    diy_rezhiheng_info: "出牌阶段限一次,你可以摸至多X张牌,player.chooseToDiscard('he',X,true)(X为你的牌数). If you discard Y hands, you draw an additional card (Y is the number of your hands before).",
                    diy_refangzhu: '放逐',
                    diy_refangzhu_info: '每当你受到1点伤害后,你可选择一名其他角色,你可以选择一项:1.令其摸X张牌并翻面;2.令其弃置X张牌(不足全弃,无牌不弃)并失去1点体力(X为你已损失的体力值).',
                    diy_rejizhi: '集智',
                    diy_rejizhi_info: '<b>锁定技</b>,当你使用非基本牌时,你可摸一张牌,可以弃置之.若你以此法弃置了牌且:当前回合角色为你,本回合你的手牌上限+1;此牌点数与你当前使用的普通锦囊牌相同,你收回该锦囊牌.',
                    diy_rejiuyuan: '救援',
                    diy_rejiuyuan_info: '<b>主公技</b>,当其他吴势力角色使用【桃】时,你摸一张牌.当其他吴势力角色对你使用【桃】时,此【桃】回复+1.当其他吴势力角色使用【桃】/回复体力时,若你已受伤,其可将此【桃】的目标改为你/回复转移给你,其摸一张牌.',
                    diy_rejiuyuan2: '救援',
                    diy_rejiuyuan2_info: '',
                    diy_reqicai: '奇才',
                    diy_reqicai_info: '<b>锁定技</b>,你使用锦囊牌无距离限制;你使用普通锦囊牌直接发动对应的全部强化效果;其他角色不能获得或弃置你的防具牌和宝物牌.若你装备区没有:防具牌,你视为装备着【界八卦阵】;武器牌,你视为装备着【界诸葛连弩】.准备阶段,若你装备区没有宝物牌,你从牌堆或弃牌堆中获得一张锦囊牌.弃牌阶段内,若你装备区没有坐骑牌,锦囊牌不计入手牌上限.',
                    diy_rexingshang: '行殇',
                    diy_rexingshang_info: '当一名角色死亡时,你可获得该角色区域内的所有牌并回复1点体力,摸一张牌.',
                    resongwei: '颂威',
                    resongwei_info: '<b>主公技</b>,魏势力角色的判定牌结果为黑色且生效后,其可令你摸一张牌.若其为你,你获得判定牌.',
                    resongwei2: '颂威',
                    resongwei2_info: '',
                    rejilue_zhiheng: '制衡',
                    rejilue_zhiheng_info: '',
                    rejilue_wansha: '完杀',
                    rejilue_wansha_info: '',
                    rejilue_jizhi: '集智',
                    rejilue_jizhi_info: '',
                    rejilue_fangzhu: '放逐',
                    rejilue_fangzhu_info: '',
                    rerenjie: '忍戒',
                    rerenjie_info: '<b>锁定技</b>,当你受到伤害或失去体力后,你获得等量枚<忍>标记;当你于出牌阶段外因弃置而失去牌后,你获得等同于失去的牌数量的<忍>标记.',
                    rerenjie2: '忍戒',
                    rerenjie2_info: '',
                    rebaiyin: '拜印',
                    rebaiyin_info: '<b>觉醒技</b>,准备阶段或结束阶段,若你的<忍>标记数不小于5,你失去1点体力上限并获得<极略>,从游戏外获得一张【界虚妄之冕】并置入装备区.',
                    rexuwangzhimian_skill: '界虚妄之冕',
                    rexuwangzhimian_skill_info: '<b>锁定技</b>,摸牌阶段,你额外摸两张牌;你的手牌上限-1;<b>锁定技</b>,准备阶段,你获得1枚<忍>.',
                    jinzu: '晋祖',
                    jinzu_info: '<b>隐匿技</b>,当你于其他角色的回合登场时(若你是本局第一个开始回合的角色,则改为你登场时),你可获得场上所有其他角色区域内的一张牌.',
                    rejilue_guicai: '鬼才',
                    rejilue_guicai_info: '',
                    diy_benxi: '奔袭',
                    diy_benxi_info: '<b>锁定技</b>,你的回合内,你每使用一次牌后,你的进攻距离+1直到回合结束;你的回合内,若你与所有角色的距离均为1,你无视其他角色的防具且你使用【杀】时可多指定一个目标.',
                    diy_rebenxi: '奔袭',
                    diy_rebenxi_info: '<b>锁定技</b>,当你于回合内使用牌时,你本回合与其他角色计算距离时-1.你的回合内,若你与所有其他角色计算距离时均不大于1,则你使用的基本牌或非延时锦囊牌无视防具且可以多指定一个目标,选择至多两项:1.为此牌再多指定一个目标;2.令此牌不可被其他角色响应;3.令此牌直接发动对应的全部强化效果;4.每当此牌造成1点伤害时,你回复1点体力或摸一张牌.',
                    rejuedao: '绝道',
                    rejuedao_info: '<b>主公技</b>,<b>限定技</b>,出牌阶段,你可以交给一名其他角色所有非锦囊牌,令其失去X/2(向下取整且至多为3)点体力,你加1点体力上限并回复体力至体力上限,获得<割据>.若你以此法将牌交给了群势力角色,则本局内其他角色与你计算距离时+X,与其计算距离时-X(X为你以此法交出的基本牌数).',
                    rekangkai: '慷忾',
                    rekangkai_info: '当你距离1以内或与你距离1以内的角色成为【杀】的目标后,你可摸一张牌,你正面朝上交给其一张牌(若其为你,则改为展示一张牌).若此牌为装备牌,其可以使用此牌.',
                    rexuepin: '血拼',
                    rexuepin_info: '出牌阶段限一次,你可以选择攻击范围内的一名角色的一张牌,用牌堆顶一张牌与你选择的牌拼点,若你没赢,你失去1点体力.此次拼点结束后,你弃置其一张牌.若弃置牌与对方的拼点牌类别相同,你选择一项:1.获得弃置牌与对方的拼点牌;2.回复1点体力.',
                    cezong: '策纵',
                    cezong_info: '出牌阶段限一次,你可以将一张黑色牌置于牌堆顶,令一名其他角色需对其攻击范围内另一名角色使用一张【杀】,否则你对其造成1点伤害,其与你计算距离时+1直到其下个回合结束.',
                    diy_reyanzhu: '宴诛',
                    diy_reyanzhu_info: '出牌阶段限一次,你可以令一名其他角色选择一项:1.交给你装备区的所有牌且你受到的伤害-1直到下个回合开始,修改<宴诛>;2.弃置一张牌(无牌不弃)且其受到的伤害+1直到其下回合开始.',
                    diy_rexingxue: '兴学',
                    diy_rexingxue_info: '结束阶段,你可令至多X名角色各摸一张牌,若其手牌数大于体力上限,其将一张牌置于牌堆顶(X为你的体力上限).',
                    diy_rezhaofu: '诏缚',
                    diy_rezhaofu_info: '<b>主公技</b>,其他吴势力角色使用【杀】指定你攻击范围内的角色后,你可令此【杀】不计入使用次数.<b>锁定技</b>,所有吴势力角色与你攻击范围里的角色计算距离时视为1.',
                    diy_reyanzhu2: '宴诛',
                    diy_reyanzhu2_info: '',
                    diy_reyanzhu3: '宴诛',
                    diy_reyanzhu3_info: '',
                    diy_rezhaofu2: 'diy_rezhaofu2',
                    diy_rezhaofu2_info: '',
                    diy_longdan: '龙胆',
                    diy_longdan_info: '你可以将一张【杀】当做【闪】、【闪】当做【杀】、【酒】当做【桃】、【桃】当做【酒】使用或打出,摸一张牌.当你发动<龙胆>使用或打出【杀】或【闪】时,你获得对方的一张牌.当你发动<龙胆>使用【桃】或【酒】时,你摸一张牌.当你发动<龙胆>使用【杀】被【闪】抵消后,你可以对另一名角色造成1点伤害.当你发动<龙胆>使用【闪】抵消【杀】后,你可以令一名除【杀】的使用者以外的其他角色回复1点体力.',
                    diy_xinlongdan: '龙胆',
                    diy_xinlongdan_info: '你可以将一张牌按下列规则使用或打出:♥️️当【桃】,♦️️当【杀】,♣️️当【闪】,♠️️当【酒】.若你以此法使用了红色牌,则此牌回复值或伤害值+1.若你以此法使用了黑色牌,则你弃置当前回合角色一张牌.若你以此法使用或打出了【杀】或【闪】,则你获得对方的一张牌.若你以此法使用了【桃】或【酒】,则你摸一张牌.',
                    diy_longdan1: '龙胆♥️️️',
                    diy_longdan1_info: '',
                    diy_longdan2: '龙胆♦️️️',
                    diy_longdan2_info: '',
                    diy_longdan3: '龙胆♠️️️',
                    diy_longdan3_info: '',
                    diy_longdan4: '龙胆♣️️️',
                    diy_longdan4_info: '',
                    diy_reyajiao: '涯角',
                    diy_reyajiao_info: '当你使用或打出牌时,你可展示牌堆顶的一张牌,你可选择一项:1.将此牌交给一名角色;2.置于牌堆底.若当前回合角色为你或这两张牌类别不同,你可以弃置一名角色区域内的一张牌.',
                    rezhanjiang1_info: '',
                    reyajiaoqiang_skill: '界涯角枪',
                    reyajiaoqiang_skill_info: '',
                    rejuejing: '绝境',
                    rejuejing_info: '<b>锁定技</b>,你始终跳过判定阶段和摸牌阶段;你的手牌数始终为X(X为场上体力值最多的角色的体力值且至多为8至少为4);当你进入或脱离濒死状态后,你摸一张牌.',
                    rejuejing4: '绝境',
                    rejuejing4_info: '锁定技,当你进入或脱离濒死状态时,你摸一张牌.',
                    rejuejing2: '绝境',
                    rejuejing2_info: '',
                    diy_relonghun: '龙魂',
                    diy_relonghun_info: '你可以将一张牌按照以下规则使用或打出:♥️️当【桃】;♦️️当火【杀】;黑色当【酒】、【闪】、【无懈可击】.若你以此法使用了:红色牌,你令此牌数值+1;黑色牌,你弃置当前回合角色的一张牌.',
                    diy_relonghun1: '龙魂',
                    diy_relonghun1_info: '',
                    diy_relonghun2: '龙魂',
                    diy_relonghun2_info: '',
                    bm_shuangqiang2: '双枪',
                    bm_shuangqiang2_info: '',
                    bm_shuangqiang: '双枪',
                    bm_shuangqiang_info: '<b>锁定技</b>,游戏开始时,你从游戏外选择一张【界涯角枪】或【界银月枪】获得并置入装备区;你装备区的【界涯角枪】和【界银月枪】无法被其他角色弃置或获得;你可以额外装备两张武器牌;你使用【杀】的次数上限+X(X为你装备区的武器牌数-1).',
                    rezhanjiang: '斩将',
                    rezhanjiang_info: '出牌阶段,你可以展示一张【界青釭剑】并强化为【界赤血青锋】,将之置入装备区.<b>锁定技</b>,准备阶段,你从游戏内获得一张【界青釭剑】或【界赤血青锋】.若你以此法从一名其他角色的区域内获得此牌,你对其造成1点伤害.',
                    reqinggang_skill: '界青釭剑',
                    reqinggang_skill_info: '',
                    reyinyueqiang_skill: '界银月枪',
                    reyinyueqiang_skill_info: '你的回合外,每当你使用或打出了一张黑色手牌(若为使用则在它结算之前),若没有处于濒死状态的角色,则你可立即对你攻击范围内的任意一名角色使用一张【杀】,并于此【杀】结算后对其造成1点等同于此牌转化前的属性的伤害并摸一张牌.',
                    chixueQ: '界赤血青锋',
                    chixueQ_info: '',
                    equip_liushan_skill: '襁褓阿斗',
                    equip_liushan_skill_info: '',
                    recunmu: '寸目',
                    recunmu_info: '你拼点时,可改为用牌堆底的一张牌进行拼点;当你拼点的牌亮出后,若此牌花色为♠️️,则此牌的点数视为K.<b>锁定技</b>,当你摸牌时,改为从牌堆底摸牌;牌堆底的一张牌始终对你可见.',
                    diy_reyiji2: '遗计',
                    diy_reyiji2_info: '',
                    new_reshicai_choose: '恃才',
                    new_reshicai_choose_info: '',
                    rebagua_skill: '界八卦阵',
                    rebagua_skill_info: '当你需要使用或打出【闪】时,你可以进行一次判定,若结果为:红色,你视为使用或打出了此【闪】;黑色,你摸一张牌.',
                    reqicai_rebagua: '界八卦阵',
                    reqicai_rebagua_info: '当你需要使用或打出【闪】时,你可以进行一次判定,若结果为:红色,你视为使用或打出了此【闪】;黑色,你摸一张牌.',
                    reqicai_rezhuge: '界诸葛连弩',
                    reqicai_rezhuge_info: '锁定技,你使用【杀】的次数上限+3;你每使用一张【杀】,本回合你的攻击范围+1.',
                    rezhuge_skill: '界诸葛连弩',
                    rezhuge_skill_info: '锁定技,你使用【杀】的次数上限+3;你每使用一张【杀】,本回合你的攻击范围+1.',
                    rezhuge_mark: '文射',
                    rezhuge_mark_info: '',
                    resongwei3: '颂威',
                    resongwei3_info: '',
                    regeju: '割据',
                    regeju_info: '<b>主公技</b>,出牌阶段,若场上有角色与你的距离大于1,你可以将将一张基本牌交给其他群势力角色或弃置,令本局内其他角色与你计算距离时-1.',
                    rejuedao2: '绝道',
                    rejuedao2_info: '',
                    reyicheng: '疑城',
                    reyicheng_info: '当一名角色成为【杀】的目标时,你可令其选择是否摸一张牌.若其选择是,其弃置一张牌或使用一张装备牌.',
                    diy_reluoshen: '洛神',
                    diy_reluoshen_info: '准备阶段,你可进行一次判定,将判定牌置于武将牌上,称为「洛」,若:你的「洛」颜色均相同,你可以重复此流程;结果为红色且你的「洛」数为1,你获得1枚「仿」标记.你可以如手牌般使用或打出「洛」.回合开始时,你获得所有的「洛」.',
                    diy_reqingguo: '倾国',
                    diy_reqingguo_info: '你可以将一张牌当做【闪】使用或打出.',
                    reshanjia: '缮甲',
                    reshanjia_info: '<b>锁定技</b>,出牌阶段开始时,你可摸X+3张牌,弃置X+3-Y张牌(Y为你失去过的装备牌数,X为你使用过的装备牌数且至多为7).若X+3-Y不大于0,则改为你可以弃置一张牌.你可以依次视为使用Z张不计入使用次数且无距离限制的【杀】(Z为0,若你未以此法弃置基本牌或锦囊牌,则Z+1,若你以此法弃置了装备牌,则Z+1).',
                    diy_rejuece: '绝策',
                    diy_rejuece_info: '结束阶段,你可对一名没有手牌或本回合失去过牌的其他角色造成X点伤害,从牌堆底摸一张牌(X为其本回合失去最后的手牌的次数且至少为1).',
                    diy_remieji: '灭计',
                    diy_remieji_info: '出牌阶段限一次,你可以将一张黑色牌置于牌堆顶,令一名其他角色交给你一张锦囊牌,否则其依次弃置两张非锦囊牌.若如此做,本回合你使用以此法获得的锦囊牌可目标+1.',
                    diy_remieji2: '灭计',
                    diy_remieji2_info: '',
                    diy_refencheng: '焚城',
                    diy_refencheng_info: '<b>限定技</b>,出牌阶段,你令所有其他角色依次选择一项:1.弃置X+1张牌,若其弃置了至少两张牌,你获得其中一张牌(X为其装备区与上家以此法弃置的牌数中的较大值);2.受到你造成的2点火焰伤害.',
                    youzhu: '佑主',
                    youzhu_info: '<b>锁定技</b>,游戏开始时,若场上没有糜夫人,你令一名其他角色将糜夫人作为副将;当一名角色死亡时,若击杀其的角色不为你且其主/副将为糜夫人,你从游戏外获得一张【襁褓阿斗】并置入装备区,并修改【佑主】.',
                    youzhu2: '佑主',
                    youzhu2_info: '',
                    youzhu3: '佑主',
                    youzhu3_info: '',
                    rejilue2: '极略',
                    rejilue2_info: '',
                    rejijie2: '机捷',
                    rejijie2_info: '',
                    retunjiang: '屯江',
                    retunjiang_info: '结束阶段,若你于本回合出牌阶段未对其他角色造成伤害,你可以令一名角色摸X张牌.若X不小于你的体力值,你可以弃置任意张花色不同的牌,摸等量张牌(X为势力数且至少为2).',
                    diy_refenyin: '奋音',
                    diy_refenyin_info: '每当一张牌于你的回合内进入弃牌堆后,若此牌与于此回合内进入弃牌堆的上一张牌颜色不同,你可摸一张牌.',
                    g_diy_refenyin: 'g_diy_refenyin',
                    g_diy_refenyin_info: '',
                    diy_rewansha: '完杀',
                    diy_rewansha_info: '<b>锁定技</b>,其他角色于你的回合内不能使用【桃】;当其他角色于你的回合内进入濒死状态时,你令所有其他角色的非锁定技失效直到此次濒死结算结束.',
                    diy_reluanwu: '乱武',
                    diy_reluanwu_info: '<b>限定技</b>,出牌阶段,你可令本回合其他角色与你计算距离时+1,令所有其他角色需依次对与其距离最近的另一名角色使用一张【杀】,否则失去X点体力(X为1,若该角色的上家以此法使用了【杀】,则此数值+1直到该角色以此法失去体力).',
                    diy_rewenji: '问计',
                    diy_rewenji_info: '出牌阶段开始时,你可以令一名其他角色正面朝上交给你一张牌,你需正面朝上交给其另一张牌,否则本回合你:不能对其使用牌;使用与此牌类别相同的牌无视次数、无距离限制且不可被其它角色响应.若此牌为锦囊牌,直到你的下个回合开始,其他角色与你计算距离时+1.',
                    diy_rezhenlie: '贞烈',
                    diy_rezhenlie_info: '当你成为其他角色使用【杀】或锦囊牌的目标时,你可失去1点体力并弃置其一张牌,选择一项:1.取消之;2.其本回合非锁定技失效.背水:弃置X张牌(X为你已损失的体力值).',
                    diy_remiji: '秘计',
                    diy_remiji_info: '准备阶段或结束阶段,你可进行一次判定并摸X张牌(若结果为黑色则你多摸一张牌),可以交给一名其他角色任意张牌(X为你已损失的体力值).',
                    diy_retuntian: '屯田',
                    diy_retuntian_info: '每当你于回合外失去一张牌或于回合内因弃置而失去一张【杀】时,你可进行一次判定,若结果为♥️️,你获得判定牌,否则你将生效后的判定牌置于武将牌上,称为「田」;摸牌阶段,你多摸X张牌(X为你的「田」数的一半且向下取整且至多为3).',
                    rezaoxian: '凿险',
                    rezaoxian_info: '<b>觉醒技</b>,准备阶段,若你的「田」数不小于3,你减1点体力上限,获得【急袭】和【资粮】,且此回合结束后,你进行一个额外的回合.',
                    rejixi: '急袭',
                    rejixi_info: '出牌阶段限一次,你可以指定一名其他角色并移去X张「田」,本回合你与其计算距离时视为1,且你使用牌指定其为目标后,你获得其一张牌(X为其手牌数且至少为你与其的距离).若你移去了【顺手牵羊】或【逐近弃远】,你对其造成1点伤害.',
                    reziliang: '资粮',
                    reziliang_info: '一名角色的结束阶段,你可交给一名本回合受到过伤害的角色至多X张「田」,你摸一张牌(X为其本回合受到的伤害值).',
                    diy_reyiji_faq: '你只能以此法将至多两张牌置于同一名角色的武将牌上',
                    diy_reyiji_faq_info: '',
                    diy_retieji: '铁骑',
                    diy_retieji_info: '当你使用【杀】指定目标后,你可令此【杀】不可被响应且目标角色的非锁定技失效直到回合结束,进行一次判定,若结果为:红色,你弃置其一张牌;♥️️,你摸两张牌;黑色,获得判定牌或摸一张牌;♠️️,此【杀】伤害+1.',
                    diy_reliegong: '烈弓',
                    diy_reliegong_info: '你的攻击范围无限.当你使用【杀】指定目标后,你可令此【杀】不可被目标角色响应且伤害+1.',
                    fangce: '方策',
                    fangce_info: '每当一张牌于你的回合内因使用/打出/装备替换而进入弃牌堆后,若此牌与你的「策」类别或花色均不同,你将此牌置于武将牌上,称为「策」.出牌阶段结束时,你可移去至多三张「策」,摸等量张牌.你以此法摸的牌本回合不计入手牌上限.',
                    remoukui: '谋溃',
                    remoukui_info: '当你使用【杀】指定目标后,你可选择一项:1.摸一张牌;2.弃置目标角色的一张手牌.背水:若此【杀】被【闪】抵消,其弃置你的一张牌.',
                    diy_jingxiang: '精详',
                    diy_jingxiang_info: '每当你于回合内使用每种花色的首张牌时,你获得1枚「精」标记直到本回合结束.结束阶段,你可摸一张牌,若你本回合使用的牌数不小于X,你执行一个额外的摸牌阶段或出牌阶段.顺势:你的「精」标记数也不小于X(X为你的体力值).',
                    retunchu: '囤储',
                    retunchu_info: '<b>锁定技</b>,摸牌阶段,你多摸两张牌;弃牌阶段开始时,若你于本回合出牌阶段未使用【杀】,你本回合手牌上限+2.',
                    reshuliang: '输粮',
                    reshuliang_info: '一名角色的结束阶段,若其手牌数小于体力值,你可弃置一张手牌,令其执行一个额外的摸牌阶段.',
                    rexuehen: '血恨',
                    rexuehen_info: '出牌阶段限一次,你可以弃置一张红色牌,横置至多X+1名角色并对其中一名角色造成1点火焰伤害(X为你已损失的体力值).',
                    rehuxiao: '虎啸',
                    rehuxiao_info: '锁定技,当你造成火属性伤害时,该角色摸一张牌.你于此回合内对其使用牌没有次数限制.',
                    rexiaoji: '枭姬',
                    rexiaoji_info: '每当你失去装备区的一张牌后,你可摸两张牌或回复1点体力.若当前回合角色不为你,你摸一张牌.',
                    diy_rejieyin: '结姻',
                    diy_rejieyin_info: '出牌阶段限一次,你可以赠予一名男性角色至多两张牌,你与其各回复1点体力(未受伤则改为摸一张牌).',
                    yinli: '姻礼',
                    yinli_info: '当你上次发动【结姻】的目标角色的装备牌进入弃牌堆后,若当前回合角色为其,你可获得这些牌.',
                    reliangzhu: '良助',
                    reliangzhu_info: '当一名角色于其出牌阶段回复体力后,你可选择一项:1.摸一张牌;2.令其摸两张牌;3.获得其装备区的武器牌.',
                    refanxiang: '返乡',
                    refanxiang_info: '<b>觉醒技</b>,准备阶段,若你发动过【良助】,你加1点体力上限并回复1点体力,获得【枭姬】和【剑舞】,将势力改为<吴>.',
                    diy_jianwu: '剑舞',
                    diy_jianwu_info: '出牌阶段,你可以将装备区的牌当做不计入使用次数的【杀】使用.',
                    rexiaoji_gsp: '枭姬',
                    rexiaoji_gsp_info: '',
                    huanjin: '缓进',
                    huanjin_info: '出牌阶段限一次,你可以将一张牌当做任意一张不计入使用次数的基本牌使用.此牌的花色视为♠️️.',
                    reshibei: '矢北',
                    reshibei_info: '<b>锁定技</b>,当你受到伤害后,若为本回合你:首次受到的伤害,你回复1点体力并摸一张牌或摸三张牌;第二次受到的伤害,你失去1点体力或弃置两张牌.',
                    diy_rejianying: '渐营',
                    diy_rejianying_info: '当你使用点数或花色与记录相同的牌或♠️️牌时①,你可摸一张牌.当你使用牌时②,若此牌不为♠️️,则你记录此牌花色与点数;否则你记录不为♠️️的一种花色与此牌点数(已有记录则覆盖之).',
                    rehuomo: '活墨',
                    rehuomo_info: '当你需要使用基本牌时,你可以将一张黑色非基本牌置于牌堆顶,视为使用之.',
                    rezuoding: '佐定',
                    rezuoding_info: '当其他角色使用♠️️牌指定目标后,若你本回合内未受到伤害,你可以令一名角色摸一张牌.',
                },
            },
            intro: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>0.9.5版本更新说明:<br><li>依旧是bug修复:依旧是数不过来的bug被修复;<br><li>通渠武将:界刘琦;<br><li>重制武将:DIY界郭淮(基本重做)、DIY界张辽(从单纯的卖血归心改成控顶强命);<br><li>新增武将:DIY界王异、界李丰、DIY界孙尚香、界SP孙尚香、DIY界沮授、界钟繇.",
            author: '污言噫对',
            version: '0.9.5',
        },
    };
});

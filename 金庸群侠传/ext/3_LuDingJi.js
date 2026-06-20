'use strict';
window.jyimport(function (lib, game, ui, get, ai, _status) {
    game.import('character', function () {
        lib.config.all.characters.add('jyldj');
        lib.config.characters.add('jyldj');
        lib.translate.jyldj_character_config = '<img style=width:100px  src=extension/金庸群侠传/image/title/jy_title_ldj.jpg>';
        var Group = function (str1, str2) {
            if (!str2) return str1;
            return lib.config.extension_金庸群侠传_changeGroup ? str2 : str1;
        };
        var jyldj = {
            name: 'jyldj',
            connect: true,
            characterFilter: {},
            characterSort: {
                jyldj: {
                    //绝世高手
                    ldj_jueshi: ['ldj_jue_weixiaobao'],
                    //紫禁城
                    ldj_zijincheng: ['ldj_nanhuairentangruowang', 'ldj_fulin', 'ldj_dongefei', 'qtpz_jianninggongzhu', 'qtpz_haidafu', 'qtpz_aobai', 'qtpz_xuanye', 'qtpz_weixiaobao', 'qtpz_weihutou', 'ldj_weixiaobaojianning', 'ldj_weishihougong'],
                    //天地会
                    ldj_tiandihui: ['qtpz_chenjinnan', 'qtpz_fengjizhong'],
                    //丽春院
                    ldj_lichunyuan: ['ldj_weichunhua'],
                    //福龙教
                    ldj_shenlongjiao: ['ldj_pangshoutoutuo', 'qtpz_suquan', 'qtpz_maodongzhu', 'qtpz_hongantong'],
                    //沐王府
                    ldj_muwangfu: ['ldj_mujianpin', 'ldj_fangyi'],
                    //王屋山
                    ldj_wangwushan: ['qtpz_zengrou'],
                    //少林
                    ldj_shaolin: [''],
                    //郑氏家族
                    ldj_taiwan: [''],
                    //平西王府
                    ldj_pingxiwangfu: ['qtpz_wusangui', 'ldj_wuyingxiong'],
                    //沙俄
                    ldj_shae: ['ldj_sufeiya'],
                    //台湾郑氏
                    ldj_taiwan: ['ldj_zhengkeshuang'],
                    //藏宗
                    ldj_zangzhong: ['qtpz_sangjielama'],
                    //江湖侠客
                    ldj_xiake: ['qtpz_shuanger', 'ldj_wuzhirong', 'ldj_ake'],
                },
            },
            character: {
                //-----------------------新将标记--------------
                ldj_nanhuairentangruowang: ['male', Group('shu', 'jy_qing'), 3, ['ldj_chuanjiao', 'ldj_jingxue', 'ldj_jupao'], ['bangpai:jy_dalu'], { drawer: '画师:佚名', skinLevel: 1 }],
                ldj_jue_weixiaobao: ['male', Group('shen', 'jy_jue'), 3, ['ldj_huachai', 'ldj_huijiao', 'ldj_tongchi'], ['bangpai:jy_tiandihui:jy_dalu'], { drawer: '画师:韦小宝传奇', skinLevel: 2 }],
                ldj_wuzhirong: ['male', Group('shu', 'jy_qing'), 3, ['ldj_wenyu', 'ldj_yuanzui', 'ldj_xingan'], ['bangpai:jy_miaotang'], { drawer: '画师:佚名', skinLevel: 1 }],
                ldj_fulin: ['male', Group('shu', 'jy_qing'), 4, ['ldj_mizhi', 'ldj_kongmen', 'ldj_foyuan'], ['zhu', 'bangpai:jy_dalu'], { drawer: '画师:佚名', skinLevel: 2 }],
                ldj_dongefei: ['female', Group('shu', 'jy_qing'), 3, ['ldj_zhuanchong', 'ldj_feiming'], ['bangpai:jy_hougong'], { drawer: '画师:佚名', skinLevel: 4 }],
                ldj_zhengkeshuang: ['male', Group('shu', 'jy_qing'), 3, ['ldj_wanku', 'ldj_xiangqing'], ['bangpai:jy_wangzu'], { drawer: '画师:轩辕剑手游', skinLevel: 2 }],
                ldj_weishihougong: ['male', Group('shu', 'jy_qing'), '3/7', ['ldj_fengyuan', 'ldj_fugang', 'ldj_fanpai'], ['bangpai:jy_hougong'], { drawer: '画师:爱奇艺新鹿鼎记', skinLevel: 4 }],
                ldj_sufeiya: ['female', Group('qun', 'jy_lie'), 3, ['ldj_diyue', 'ldj_zhengluan'], ['bangpai:jy_yibang'], { drawer: '画师:谷瑞恩', skinLevel: 4 }],
                ldj_ake: ['female', Group('shu', 'jy_qing'), 3, ['ldj_juese', 'ldj_zhuxin'], ['bangpai:jy_youxia'], { drawer: '画师:畅游时代鹿鼎记', skinLevel: 4 }],
                ldj_weichunhua: ['female', Group('shu', 'jy_qing'), 3, ['ldj_goulan', 'ldj_wasi'], ['bangpai:jy_youxia'], { drawer: '画师:佚名', skinLevel: 1 }],
                ldj_weixiaobaojianning: ['male', Group('shu', 'jy_qing'), 4, ['ldj_haodu', 'ldj_yuannie'], ['bangpai:jy_tiandihui:jy_hougong'], { drawer: '画师:黄光剑', skinLevel: 4 }],
                //jy_hougong【后宫】
                //jy_tiandihui【天地会】以陈近南为主的反清组织
                //jy_dalu【鞑虏】长期虎视、侵略、统计中原的辽金蒙满等少民政权
                ldj_pangshoutoutuo: ['male', Group('shu', 'jy_qing'), '4/6', ['ldj_dubian', 'ldj_fuming'], ['bangpai:jy_shenlong'], { drawer: '画师:齐名网络;佚名', skinLevel: 4, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=379997017&bvid=BV1MZ4y1X7CK&cid=465058537&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
                //jy_shenlong【神龙教】以洪安通为主的神龙教
                ldj_mujianpin: ['female', Group('shu', 'jy_qing'), 3, ['ldj_weisheng', 'ldj_yizhu'], ['bangpai:jy_wangzu'], { drawer: '画师:畅游时代鹿鼎记', skinLevel: 3 }],
                ldj_fangyi: ['female', Group('shu', 'jy_qing'), 4, ['ldj_weizui', 'ldj_zhongji'], ['bangpai:jy_wangzu'], { drawer: '画师:畅游时代鹿鼎记', skinLevel: 3 }],
                qtpz_weixiaobao: ['male', Group('shu', 'jy_qing'), 4, ['qtpz_yabao', 'qtpz_qiaoshe'], ['zhu', 'bangpai:jy_tiandihui:jy_dalu'], { drawer: '画师:畅游天下鹿鼎记', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=659706314&bvid=BV1Hh4y1Q7uA&cid=1231212279&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>', '<iframe src="http://player.bilibili.com/player.html?aid=51985093&bvid=BV184411Y7YC&cid=91007055&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }], //www.weibo.com/ludingjisy
                qtpz_suquan: ['female', Group('shu', 'jy_qing'), 3, ['qtpz_zhenggang', 'qtpz_yiqing'], ['bangpai:jy_shenlongjiao'], { drawer: '画师:畅游时代鹿鼎记', skinLevel: 4 }],
                qtpz_weihutou: ['male', Group('shu', 'jy_qing'), 3, ['qtpz_mengtong', 'qtpz_fuyin'], ['bangpai:jy_wangzu'], { drawer: '画师:四时菘蓝', skinLevel: 4 }],
                qtpz_xuanye: ['male', Group('shu', 'jy_qing'), 4, ['qtpz_zhenfan', 'qtpz_fujiang', 'qtpz_shengshi'], ['zhu', 'bangpai:jy_dalu'], { drawer: '画师:畅游时代鹿鼎记', skinLevel: 4 }],
                qtpz_chenjinnan: ['male', Group('shu', 'jy_qing'), 4, ['qtpz_ningxue', 'qtpz_zhongsu'], ['bangpai:jy_tiandihui']],
                qtpz_jianninggongzhu: ['female', Group('shu', 'jy_qing'), 3, ['qtpz_yunie', 'qtpz_weizhao'], ['bangpai:jy_hougong'], { drawer: '画师:畅游时代鹿鼎记', skinLevel: 4 }],
                qtpz_fengjizhong: ['male', Group('shu', 'jy_qing'), 3, ['qtpz_diebao', 'qtpz_jibian'], ['bangpai:jy_tiandihui:jy_dalu'], { drawer: '画师:投名状OL', skinLevel: 4 }],
                qtpz_aobai: ['male', Group('shu', 'jy_qing'), 4, ['qtpz_shezheng', 'qtpz_yingshi'], ['bangpai:jy_dalu'], { drawer: '画师:畅游时代鹿鼎记', skinLevel: 4 }],
                qtpz_haidafu: ['male', Group('shu', 'jy_qing'), 3, ['qtpz_shidu', 'qtpz_fenji', 'ldj_huashi'], ['bangpai:jy_hougong'], { drawer: '画师:畅游', skinLevel: 4 }],
                qtpz_zengrou: ['female', Group('shu', 'jy_qing'), 3, ['qtpz_zhitou', 'qtpz_wangfu'], ['bangpai:jy_youxia'], { drawer: '画师:畅游时代鹿鼎记', skinLevel: 3, videos: ['<iframe src="http://player.bilibili.com/player.html?aid=617450757&bvid=BV1D84y1o7Nj&cid=1239231269&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>'] }],
                qtpz_hongantong: ['male', Group('shu', 'jy_qing'), 3, ['qtpz_baotai', 'qtpz_aozun'], ['bangpai:jy_shenlong'], { drawer: '画师:畅游时代鹿鼎记', skinLevel: 3 }],
                qtpz_maodongzhu: ['female', Group('shu', 'jy_qing'), 3, ['qtpz_luanwei', 'qtpz_huagu'], ['bangpai:jy_dalu:jy_shenlong'], { drawer: '画师:畅游时代鹿鼎记', skinLevel: 3 }],
                //jy_shenlong【神龙教】
                qtpz_shuanger: ['female', Group('shu', 'jy_qing'), 3, ['qtpz_xiangfu', 'qtpz_kangli'], ['bangpai:jy_youxia'], { drawer: '画师:畅游时代鹿鼎记', skinLevel: 3 }],
                qtpz_sangjielama: ['male', Group('qun', 'jy_lie'), 4, ['sdxl_mizong', 'qtpz_dayin'], ['bangpai:jy_zangzong'], { drawer: '画师:芝姬ZOO(孙娜)', skinLevel: 4 }],
                //jy_zangzong【藏宗】西藏金刚宗、密宗等统称
                qtpz_wusangui: ['male', Group('shu', 'jy_qing'), 4, ['qtpz_xianguan', 'qtpz_fanluan'], ['bangpai:jy_wangzu'], { drawer: '画师:佚名', skinLevel: 3 }],
                ldj_wuyingxiong: ['male', Group('shu', 'jy_qing'), 3, ['ldj_yazhi', 'ldj_lianyin'], ['bangpai:jy_wangzu'], { drawer: '画师:佚名', skinLevel: 1 }],
            },
            characterIntro: {},
            characterTitle: {
                ldj_nanhuairentangruowang: '学贯中西',
                ldj_jue_weixiaobao: '以小博大',
                ldj_wuzhirong: '虎饱鸱咽',
                ldj_fulin: '遁入空门',
                ldj_ake: '绝代佳人',
                ldj_weichunhua: '勾栏瓦肆',
                ldj_weixiaobaojianning: '欢喜冤家',
                ldj_pangshoutoutuo: '神龙鹰犬',
                ldj_mujianpin: '沧海遗珠',
                ldj_fangyi: '诿罪奸佞',
                qtpz_weixiaobao: '左右逢源',
                qtpz_suquan: '一正夫纲',
                qtpz_weihutou: '轻车都尉',
                qtpz_xuanye: '千古一帝',
                qtpz_chenjinnan: '天地会舵',
                qtpz_jianninggongzhu: '金枝欲孽',
                qtpz_fengjizhong: '内通外党',
                qtpz_aobai: '满洲第一勇士',
                qtpz_haidafu: '饮鸠止渴',
                qtpz_zengrou: '娇柔可人',
                qtpz_hongantong: '神龙教教主',
                qtpz_maodongzhu: '冒牌皇太后',
                qtpz_shuanger: '舍身救夫',
                qtpz_sangjielama: '密宗喇嘛吴',
                qtpz_wusangui: '平西王',
                ldj_wuyingxiong: '皇权的棋子',
            }, //称号
            perfectPair: {},
            //珠联壁合
            //-------------------------鹿鼎记技能开始--------------------
            skill: {
                //南怀仁汤若望 霸天 20240622
                ldj_chuanjiao: {
                    subSkill: {
                        removeSkill: {
                            mod: {
                                cardname(card, player) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('ldj_chuanjiao')) {
                                        for (const tag of card.gaintag) {
                                            if (tag.startsWith('ldj_chuanjiao::')) {
                                                const cardname = tag.split('::');
                                                return cardname[1];
                                            }
                                        }
                                    }
                                },
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            trigger: {
                                global: ['phaseBegin', 'die'],
                            },
                            forced: true,
                            forceDie: true,
                            charlotte: true,
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.name == 'die' && trigger.player == player) {
                                    player.removeSkill('ldj_chuanjiao_removeSkill');
                                    event.finish();
                                    return;
                                }
                                const list = player.getStorage('ldj_chuanjiao_removeSkill').filter((i) => i == trigger.player);
                                if (list.length) {
                                    player.unmarkAuto('ldj_chuanjiao_removeSkill', list);
                                }
                                ('step 1');
                                if (!player.getStorage('ldj_chuanjiao_removeSkill').length) {
                                    player.removeSkill('ldj_chuanjiao_removeSkill');
                                }
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'useCardEnd',
                    },
                    cost() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('ldj_chuanjiao'), function (card, player, target) {
                                return (
                                    target != player &&
                                    target.countCards('h', function (i) {
                                        return !i.hasGaintag('ldj_chuanjiao');
                                    })
                                );
                            })
                            .set('ai', function (target) {
                                const player = _status.event.player;
                                return 1;
                                //return get.attitude(player,target);
                            });
                        ('step 1');
                        event.result = result;
                    },
                    filter(event, player) {
                        if (!player.isPhaseUsing()) return false;
                        const type = get.type(event.card);
                        if (type != 'basic' && type != 'trick') return false;
                        return game.hasPlayer(function (target) {
                            return (
                                target != player &&
                                target.countCards('h', function (i) {
                                    return !i.hasGaintag('ldj_chuanjiao');
                                })
                            );
                        });
                    },
                    usable: 1,
                    content() {
                        'step 0';
                        event.playerx = player;
                        event.targetsed = [player, event.targets[0]];
                        ('step 1');
                        player
                            .choosePlayerCard(event.targets[0], 'h', 'visible')
                            .set('filterButton', function (button) {
                                const card = _status.event.valueCard;
                                return !button.link.hasGaintag('ldj_chuanjiao') && card.suit == button.link.suit;
                            })
                            .set('ai', function (button) {
                                const player = _status.event.player;
                                const target = _status.event.target;
                                const card = _status.event.valueCard;
                                return get.value(card, target) - get.value(button.link, target);
                            })
                            .set('valueCard', trigger.card);
                        ('step 2');
                        if (result.bool) {
                            player.line(event.targets[0]);
                            event.targets[0].addGaintag(result.cards, event.name);
                            const tag = event.name + '::' + trigger.card.name;
                            lib.translate[tag] = 'invisible';
                            event.targets[0].addGaintag(result.cards, tag);
                            event.targets[0].addSkill('ldj_chuanjiao_removeSkill');
                            event.targets[0].markAuto('ldj_chuanjiao_removeSkill', [event.playerx]);
                            event.target = event.targets[0];
                        } else {
                            event.finish();
                        }
                        ('step 3');
                        const bool = game.hasPlayer(function (target) {
                            return (
                                !event.targetsed.includes(target) &&
                                target.countCards('h', function (i) {
                                    return !i.hasGaintag('ldj_chuanjiao');
                                })
                            );
                        });
                        if (!bool) {
                            event.finish();
                            return;
                        }
                        target
                            .chooseTarget(get.prompt2('ldj_chuanjiao'), function (card, player, target) {
                                const targetsed = _status.event.targetsed;
                                return (
                                    !targetsed.includes(target) &&
                                    target.countCards('h', function (i) {
                                        return !i.hasGaintag('ldj_chuanjiao');
                                    })
                                );
                            })
                            .set('ai', function (target) {
                                const player = _status.event.player;
                                return 1;
                                //return get.attitude(player,target);
                            })
                            .set('targetsed', event.targetsed);
                        ('step 4');
                        if (result.bool) {
                            event.goto(1);
                            event.targetsed.add(result.targets[0]);
                            event.player = event.target;
                            event.targets = result.targets;
                        }
                    },
                },
                ldj_jupao: {
                    group: ['ldj_jupao_noshan', 'ldj_jupao_dis'],
                    subSkill: {
                        noshan: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            popup: false,
                            forced: true,
                            filter(trigger, player) {
                                return trigger.card.name == 'sha' && trigger.card.ldj_jupao1;
                            },
                            content() {
                                //game.log('11111111111111');
                                trigger.set('ldj_jupao', true);
                                trigger.target.addTempSkill('ldj_jupao_nouse', 'shaAfter');
                            },
                        },
                        dis: {
                            forced: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.card.ldj_jupao2;
                            },
                            content() {
                                'step 0';
                                //game.log('22222222222222');
                                if (trigger.player.countDiscardableCards(player, 'he')) {
                                    player.line(trigger.player);
                                    player.discardPlayerCard('he', trigger.player, true);
                                }
                                ('step 1');
                                if (trigger.player.countDiscardableCards(player, 'he')) {
                                    player.line(trigger.player);
                                    player.discardPlayerCard('he', trigger.player, true);
                                }
                            },
                        },
                        nouse: {
                            charlotte: true,
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.name != 'shan') return;
                                    const evt = _status.event.getParent('sha');
                                    if (!evt || !evt.ldj_jupao) return;
                                    let bool = false;
                                    const nature = get.nature(card);
                                    if (nature && lib.card.shan.jy_nature.includes(nature)) {
                                        bool = true;
                                    }
                                    if (!bool) return false;
                                },
                                cardRespondable(card, player) {
                                    if (card.name != 'shan') return;
                                    const evt = _status.event.getParent('sha');
                                    if (!evt || !evt.ldj_jupao) return;
                                    let bool = false;
                                    const nature = get.nature(card);
                                    if (nature && lib.card.shan.jy_nature.includes(nature)) {
                                        bool = true;
                                    }
                                    if (!bool) return false;
                                },
                            },
                        },
                    },
                    mod: {
                        attackRange(player, distance) {
                            return distance + 7;
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'useCard2',
                    },
                    filter(trigger, player) {
                        return trigger.targets && trigger.targets.length && trigger.card.name == 'sha';
                    },
                    check0(event, player) {
                        let eff = 0;
                        for (var i = 0; i < event.targets.length; i++) {
                            const target = event.targets[i];
                            const eff1 = get.damageEffect(target, player, player);
                            const eff2 = get.damageEffect(target, player, player, 'fire');
                            eff += eff2;
                            eff -= eff1;
                        }
                        return eff;
                    },
                    forced: true,
                    check1(event, player, res) {
                        const results = [];
                        for (var i of event.targets) {
                            if (player.canUse(event.card, i.next, false) && !event.targets.includes(i.next)) results.add(i.next);
                            if (player.canUse(event.card, i.previous, false) && !event.targets.includes(i.previous)) results.add(i.previous);
                        }
                        if (res) return results.length;
                        let eff = 0;
                        for (var i of results) {
                            eff += get.effect(i, event.card, player, player);
                        }
                        return eff;
                    },
                    check2(event, player) {
                        return 1;
                    },
                    check3(event, player) {
                        return 1;
                    },
                    check4(event, player) {
                        return 1;
                    },
                    content() {
                        'step 0';
                        const cardname = get.translation(trigger.card);
                        const list = ['将XXX改为火【杀】', 'XXX的目标上家下家也成为目标', 'XXX只能用轻功【闪】响应', 'XXX造成伤害后弃置目标两张牌', 'XXX造成伤害+1'];
                        const list2 = [];
                        for (var i = 0; i < list.length; i++) {
                            list2.push([i, list[i].replace(/XXX/g, cardname)]);
                        }
                        const next = player.chooseButton([get.prompt(event.name), [list2, 'textbutton']]);
                        next.set('selectButton', [1, 5]);
                        next.set('filterButton', function (button) {
                            return _status.event['bool' + button.link];
                        });
                        next.set('bool0', trigger.card.nature != 'fire');
                        next.set('bool1', lib.skill.ldj_jupao.check1(trigger, player, true) > 0);
                        next.set('bool2', true);
                        next.set('bool3', true);
                        next.set('bool4', true);
                        next.set('aii0', lib.skill.ldj_jupao.check0(trigger, player));
                        next.set('aii1', lib.skill.ldj_jupao.check1(trigger, player, false));
                        next.set('aii2', lib.skill.ldj_jupao.check2(trigger, player));
                        next.set('aii3', lib.skill.ldj_jupao.check3(trigger, player));
                        next.set('aii4', lib.skill.ldj_jupao.check4(trigger, player));
                        next.set('ai', function (button) {
                            return _status.event['aii' + button.link];
                        });
                        ('step 1');
                        if (result && result.links && result.links.length) {
                            for (const link of result.links) {
                                game.log(player, '选择了', '#g【巨炮】', '的', '#y选项' + get.cnNumber(link + 1, true));
                                if (link == 0) {
                                    game.setNature(trigger.card, 'fire');
                                    if (get.itemtype(trigger.card) == 'card') {
                                        const next2 = game.createEvent('zhuque_clear');
                                        next2.card = trigger.card;
                                        event.next.remove(next2);
                                        trigger.after.push(next2);
                                        next2.setContent(function () {
                                            game.setNature(trigger.card, []);
                                        });
                                    }
                                } else if (link == 1) {
                                    const results = [];
                                    for (var i of trigger.targets) {
                                        if (player.canUse(trigger.card, i.next, false) && !trigger.targets.includes(i.next)) results.add(i.next);
                                        if (player.canUse(trigger.card, i.previous, false) && !trigger.targets.includes(i.previous)) results.add(i.previous);
                                    }
                                    if (results.length) {
                                        trigger.targets.addArray(results);
                                        game.log(results, '成为了', trigger.card, '的额外目标');
                                    }
                                } else if (link == 2) {
                                    trigger.card.ldj_jupao1 = true;
                                    game.log(trigger.card, '只能使用轻功【闪】响应');
                                } else if (link == 3) {
                                    trigger.card.ldj_jupao2 = true;
                                    game.log(trigger.card, '造成伤害后弃置目标两张牌');
                                } else if (link == 4) {
                                    if (!trigger.baseDamage) trigger.baseDamage = 1;
                                    trigger.baseDamage += 1;
                                    game.log(trigger.card, '造成伤害加一');
                                }
                            }
                        }
                    },
                },
                ldj_jingxue: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'phaseBegin',
                    },
                    cost() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('ldj_jingxue'), [1, 4], function (card, player, target) {
                                return true;
                            })
                            .set('ai', function (target) {
                                const player = _status.event.player;
                                return get.attitude(player, target);
                            });
                        ('step 1');
                        event.result = result;
                    },
                    content() {
                        'step 0';
                        event.listSkills = ['ldj_jingxue_juguang', 'ldj_jingxue_sanguang', 'ldj_jingxue_pianguang', 'ldj_jingxue_fanshe'];
                        ('step 1');
                        event.target = event.targets.shift();
                        if (event.listSkills.length > 1) {
                            player
                                .chooseControl(event.listSkills)
                                .set('prompt', `选择令${get.translation(event.target)}获得的技能`)
                                .set('ai', function () {
                                    return _status.event.listSkills.randomGet();
                                })
                                .set('listSkills', event.listSkills);
                        } else {
                            event._result = { control: event.listSkills[0] };
                        }
                        ('step 2');
                        if (result.control) {
                            event.listSkills.remove(result.control);
                            event.target.addTempSkill(result.control, function (eventx, playerx, namex) {
                                if (namex == 'phaseBefore') {
                                    return eventx.player == player;
                                }
                                if (namex == 'die') {
                                    return eventx.player == playerx || eventx.player == player;
                                }
                                return false;
                            });
                        }
                        if (event.targets.length) event.goto(1);
                    },
                    subSkill: {
                        juguang: {
                            name: '聚光',
                            mark: true,
                            intro: {
                                content: 'info',
                            },
                            charlotte: true,
                            trigger: {
                                global: 'useCardEnd',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (!event.targets || !event.targets.length) return false;
                                if (!event.targets.includes(player)) return false;
                                return event.cards && event.cards.length && event.cards.filterInD('od').length;
                            },
                            content() {
                                player.gain('log', 'gain2', trigger.cards.filterInD('od'));
                                player.removeSkill('ldj_jingxue_juguang');
                            },
                        },
                        sanguang: {
                            name: '散光',
                            mark: true,
                            intro: {
                                content: 'info',
                            },
                            charlotte: true,
                            trigger: {
                                player: 'useCard2',
                            },
                            filter(event, player) {
                                const type = get.type(event.card);
                                if (type != 'basic' && type != 'trick') return false;
                                const info = get.info(event.card);
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
                            cost() {
                                'step 0';
                                player
                                    .chooseTarget([1, Infinity], '你使用的基本牌或普通锦囊牌无目标数量限制', function (card, player, target) {
                                        var player = _status.event.player;
                                        if (_status.event.targets.includes(target)) return false;
                                        return lib.filter.targetEnabled2(_status.event.card, player, target);
                                    })
                                    .set('prompt2', '是否指定任意名角色成为' + get.translation(trigger.card) + '的目标')
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return get.effect(target, trigger.card, player, player);
                                    })
                                    .set('targets', trigger.targets)
                                    .set('card', trigger.card);
                                ('step 1');
                                event.result = result;
                            },
                            content() {
                                trigger.targets.addArray(event.targets);
                                player.removeSkill('ldj_jingxue_sanguang');
                            },
                        },
                        pianguang: {
                            name: '偏光',
                            mark: true,
                            intro: {
                                content: 'info',
                            },
                            charlotte: true,
                            trigger: {
                                global: 'useCard1',
                            },
                            filter(event, player) {
                                const type = get.type(event.card);
                                if (type != 'basic') return false;
                                if (event.player == player) return false;
                                if (!event.targets || event.targets.length != 1) return false;
                                if (!event.targets.includes(player)) return false;
                                return true;
                            },
                            check(event, player) {
                                return get.effect(player, event.card, event.player, player) < 0;
                            },
                            content() {
                                trigger.targets = [player.next];
                                game.log(trigger.card, '的目标改为', trigger.targets);
                                player.removeSkill('ldj_jingxue_pianguang');
                            },
                        },
                        fanshe: {
                            name: '反射',
                            mark: true,
                            intro: {
                                content: 'info',
                            },
                            charlotte: true,
                            trigger: {
                                global: 'useCard1',
                            },
                            filter(event, player) {
                                const type = get.type(event.card);
                                if (type != 'trick') return false;
                                if (event.player == player) return false;
                                if (!event.targets || event.targets.length != 1) return false;
                                if (!event.targets.includes(player)) return false;
                                return player.canUse(event.card, event.player, false);
                            },
                            check(event, player) {
                                return get.effect(player, event.card, event.player, player) < 0;
                            },
                            content() {
                                const source = trigger.player;
                                trigger.targets = [source];
                                trigger.player = player;
                                game.log(trigger.card, '对调了使用者和目标');
                                player.removeSkill('ldj_jingxue_fanshe');
                            },
                        },
                    },
                },
                //绝韦小宝 霸天20240422
                ldj_huachai: {
                    subSkill: {
                        buff: {
                            charlotte: true,
                            onremove(player, skill) {
                                delete player.storage[skill];
                                delete player.storage[skill + '2'];
                            },
                            init(player, skill) {
                                player.storage[skill + '2'] = {};
                            },
                            forced: true,
                            popup: false,
                            nopop: false,
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            content() {
                                const id = trigger.player.playerid;
                                const map = player.storage['ldj_huachai_buff2'];
                                if (!map[id]) map[id] = 0;
                                map[id] += 1;
                                const number = player.storage.ldj_huachai_buff;
                                if (number != map[id]) return;
                                const cards = trigger.player.getExpansions('ldj_huachai');
                                if (!cards.length) return;
                                const cardSuit = trigger.card.suit;
                                const gains = cards.filter(function (i) {
                                    const suit = i.suit;
                                    return cardSuit == suit;
                                });
                                if (gains.length) trigger.player.gain(gains, 'gain2');
                            },
                            intro: {
                                content: '骰子点数#',
                            },
                        },
                    },
                    marktext: '票',
                    intro: {
                        name: '银票',
                        content: 'expansion',
                        markcount: 'expansion',
                    },
                    onremove(player, skill) {
                        const cards = player.getExpansions(skill);
                        if (cards.length) player.loseToDiscardpile(cards);
                    },
                    audio: 'ext:金庸群侠传/peiyin:4',
                    trigger: {
                        player: 'phaseBegin',
                    },
                    content() {
                        'step 0';
                        game.countPlayer(function (i) {
                            const piaozi = i.getExpansions('ldj_huachai');
                            if (piaozi.length) i.give(piaozi, player, true).log = true;
                        });
                        ('step 1');
                        game.countPlayer(function (i) {
                            if (i !== player) {
                                i.addToExpansion(get.cards(0), player, 'gain2', 'log', 'bySelf').gaintag.add('ldj_huachai');
                            }
                        });
                        ('step 2');
                        player.throwDice();
                        ('step 3');
                        player.addTempSkill('ldj_huachai_buff', { player: 'phaseBefore' });
                        player.addMark('ldj_huachai_buff', num, false);
                    },
                },
                ldj_huijiao: {
                    audio: 'ext:金庸群侠传/peiyin:3',
                    trigger: {
                        player: 'damageEnd',
                    },
                    filter(event, player) {
                        if (!player.countCards('h')) return false;
                        return event.num > 0;
                    },
                    getIndex(event, player, triggername) {
                        return Math.min(event.num, 9) || 1;
                    },
                    cost: async function (event, trigger, player) {
                        const next = player.chooseTarget(get.prompt2('ldj_huijiao'), [1, 4], (card, player, target) => {
                            return target != player && target.countCards('h');
                        });
                        next.set('ai', (target) => 10 - get.attitude(_status.event.player, target));
                        event.result = await next.forResult();
                    },
                    content: async function (event, trigger, player) {
                        const targets = event.targets;
                        const { red, black } = await player.chooseToDebate([player].addArray(targets)).forResult();
                        let draws, discards;
                        //game.log('redx',red);
                        //game.log('blackx',black);
                        if (red.some((i) => i[0] == player)) {
                            draws = red.filter((i) => i[0] != player);
                            discards = black.slice(0);
                        } else {
                            draws = black.filter((i) => i[0] != player);
                            discards = red.slice(0);
                        }
                        for (let targetx of discards) {
                            if (
                                targetx[0].hasCard(function (card) {
                                    return lib.filter.cardDiscardable(card, targetx[0], event.name);
                                }, 'he')
                            ) {
                                await targetx[0].chooseToDiscard('he', 1, true);
                            }
                        }
                        for (let targetx of draws) {
                            await player.draw();
                        }
                    },
                },
                ldj_tongchi: {
                    intro: {
                        name: '通吃',
                        content: '你不能再对$发动【通吃】',
                    },
                    audio: 'ext:金庸群侠传/peiyin:3',
                    trigger: {
                        global: 'useCard1',
                    },
                    lastDo: true,
                    filter(event, player) {
                        if (player.getStorage('ldj_tongchi').includes(event.player)) return false;
                        if (!get.tag(event.card, 'damage')) return false;
                        if (event.targets.length != 1) return false;
                        if (event.player == player) return false;
                        if (event.targets[0] == player) return false;
                        if (event.player == event.targets[0]) return false;
                        if (!event.targets[0].canCompare(event.player)) return false;
                        return true;
                    },
                    logTarget(event, player) {
                        return [event.player, event.targets[0]];
                    },
                    check(event, player) {
                        const att = get.attitude(player, event.player);
                        const att2 = get.attitude(player, event.targets[0]);
                        const bool1 = get.effect(event.targets[0], event.card, event.player, player);
                        if (att < 0 && bool1 < 0) return true;
                        return false;
                    },
                    content: async function (event, trigger, player) {
                        const result = await trigger.targets[0].chooseToCompare(trigger.player).forResult();
                        if (!result.tie) {
                            if (result.bool) {
                                const gains = [result.player, result.target].filterInD('od');
                                if (gains.length) player.gain(gains, 'gain2');
                                trigger.targets.length = 0;
                                trigger.all_excluded = true;
                            } else {
                                player.markAuto('ldj_tongchi', [trigger.player]);
                                trigger.targets.push(player);
                            }
                        }
                    },
                },
                //吴之荣  棉花糖  20240409
                ldj_wenyu: {
                    audio: 'ext:金庸群侠传/peiyin:3',
                    trigger: {
                        player: 'phaseBegin',
                    },
                    forced: true,
                    popup: false,
                    mark: true,
                    marktext: '狱',
                    intro: {
                        name: '文狱',
                        content(storage, player) {
                            let str = '';
                            if (player.storage.ldj_wenyu && typeof player.storage.ldj_wenyu == 'string') {
                                str += player.storage.ldj_wenyu;
                            }
                            if (player.isUnderControl(true)) return str;
                            return '';
                        },
                    },
                    group: 'ldj_wenyu_use',
                    async content(event, trigger, player) {
                        let strList = ['杀', '伤害', '获得', '弃置'];
                        if (player.storage.ldj_wenyu && typeof player.storage.ldj_wenyu == 'string') strList.remove(player.storage.ldj_wenyu);
                        const control = await player
                            .chooseControl(strList)
                            .set('ai', function () {
                                return strList.randomGet();
                            })
                            .forResultControl();
                        if (control) player.storage.ldj_wenyu = control;
                    },
                    subSkill: {
                        use: {
                            trigger: {
                                global: 'useCardBegin',
                            },
                            filter(event, player) {
                                if (!event.cards || !event.cards.length) return false;
                                if (event.player == player) return false;
                                if (player.storage.ldj_wenyu && typeof player.storage.ldj_wenyu == 'string') {
                                    let str = lib.translate[event.card.name + '_info'];
                                    if (str.includes(player.storage.ldj_wenyu)) return true;
                                }
                                return false;
                            },
                            prompt(event, player) {
                                return `〖文狱〗:${get.translation(event.player)}使用${get.translation(event.cards[0])}即将生效,是否发动文狱？`;
                            },
                            async content(event, trigger, player) {
                                let num = lib.translate[trigger.card.name].length;
                                let controlList = [`弃置至多${num}名角色各一张牌`, `令${get.translation(trigger.player)}弃置${num}张牌`];
                                if (!trigger.player.countCards('hej')) controlList.remove(controlList[1]);
                                const {
                                    result: { index },
                                } =
                                    controlList.length == 1
                                        ? { result: { index: controlList[0] } }
                                        : await player
                                            .chooseControlList(get.prompt(event.name, player), controlList)
                                            .set('ai', () => {
                                                let player = get.player();
                                                if (get.attitude(player, trigger.player) > 0) return 1;
                                                return 0;
                                            })
                                            .set('trigger.player', trigger.player);
                                if (index == 0) {
                                    const targets = await player
                                        .chooseTarget([1, num], `〖文狱〗:请选择至多${num}名其他角色弃置其各一张牌`, lib.filter.notMe)
                                        .set('ai', (target) => get.attitude(player, target) <= 0)
                                        .forResultTargets();
                                    if (targets) {
                                        for (let target of targets) {
                                            await player.discardPlayerCard('hej', target, true).set('target', target).set('ai', lib.card.guohe.ai.button);
                                        }
                                    }
                                } else if (index == 1) {
                                    trigger.player.chooseToDiscard('hej', num, true);
                                }
                                await player.useSkill('ldj_wenyu', player);
                            },
                        },
                    },
                },
                ldj_yuanzui: {
                    enable: 'phaseUse',
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    filterTarget(card, player, target) {
                        return !target.isLinked();
                    },
                    prompt(event, player) {
                        return `〖冤罪〗:请选择一名未横置的角色令其交给你一张牌或横置`;
                    },
                    async content(event, trigger, player) {
                        const [bool, cards] = await event.targets[0]
                            .chooseCard(1, '交给' + get.translation(player) + '1张牌或横置', 'he')
                            .set('ai', () => get.attitude(player, event.targets[0]))
                            .forResult('bool', 'cards');
                        if (bool) event.targets[0].give(cards, player);
                        else event.targets[0].link(true);
                    },
                    ai: {
                        order: 12,
                        result: {
                            target: -1,
                        },
                    },
                },
                ldj_xingan: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'damageBegin',
                    },
                    limited: true,
                    init(player, skill) {
                        player.storage[skill] = false;
                    },
                    filter(event, player) {
                        if (player.storage.ldj_xingan && player.storage.ldj_xingan == true) return false;
                        const lianhuan = event.parent;
                        return lianhuan && lianhuan.name == '_lianhuan';
                    },
                    check(event, player) {
                        const lianhuan = event.parent;
                        let targets = lianhuan.targets.slice(0);
                        targets.unshift(event.player);
                        //let targets=game.filterPlayer(current=>{
                        //    return current.isLinked();
                        //}).sort(lib.sort.seat);
                        let targets2 = targets
                            .filter((current) => {
                                return player.getFriends(true).includes(current);
                            })
                            .sort(lib.sort.seat);
                        if (
                            targets2.filter((current) => {
                                return targets.indexOf(current) == targets.length || targets.indexOf(current) >= current.hp;
                            }).length
                        )
                            return false;
                        return targets.length <= 2 ? 0 : targets.length;
                    },
                    async content(event, trigger, player) {
                        player.awakenSkill('ldj_xingan');
                        player.storage.ldj_xingan = true;
                        trigger.num++;
                        const lianhuan = trigger.parent;
                        lianhuan._args[0] += 1;
                        lianhuan.pushHandler(function (event, option) {
                            if (event.step == 2 && option.state == 'begin') {
                                event._args[0] += 1;
                            }
                        });
                    },
                    subSkill: {
                        temp: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            _priority: 3,
                            content() {
                                trigger.num += player.storage.ldj_xinganTemp;
                                delete player.storage.ldj_xinganTemp;
                                player.removeSkill('ldj_xingan_temp', true);
                            },
                        },
                    },
                },
                //福临 霸天 20240330
                ldj_mizhi2: {
                    audio: 'ldj_mizhi',
                    trigger: {
                        player: 'useCard',
                    },
                    forced: true,
                    charlotte: true,
                    firstDo: true,
                    popup: false,
                    filter(event, player) {
                        return event.player.hasHistory('lose', function (evt) {
                            if (evt.parent != event) return false;
                            for (var i in evt.gaintag_map) {
                                if (evt.gaintag_map[i].includes('ldj_mizhi')) return true;
                            }
                            return false;
                        });
                    },
                    content() {
                        trigger.card.ldj_mizhi = true;
                    },
                },
                ldj_mizhi3: {
                    audio: 'ldj_mizhi',
                    trigger: {
                        player: ['discardPlayerCardBegin', 'gainPlayerCardBegin'],
                    },
                    forced: true,
                    charlotte: true,
                    firstDo: true,
                    popup: false,
                    filter(event, player) {
                        var evt = event.parent;
                        if (!evt.card) return false;
                        if (evt.card.name != 'shunshou' && evt.card.name != 'guohe') return false;
                        return evt.card.ldj_mizhi === true;
                    },
                    content() {
                        trigger.set('visible', true);
                    },
                },
                ldj_mizhi: {
                    global: ['ldj_mizhi2', 'ldj_mizhi3'],
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'phaseJieshuBegin',
                    },
                    content() {
                        'step 0';
                        player.turnOver();
                        let gains = get.randomCards(4, function (card) {
                            const color = get.color(card);
                            const type = get.type(card);
                            return color == 'black' && type == 'trick';
                        });
                        if (gains && gains.length) {
                            player.gain(gains, 'draw2');
                            event.gains = gains;
                        } else {
                            event.finish();
                            return;
                        }
                        ('step 1');
                        if (event.gains && event.gains.length) {
                            var hs = player.getCards('h');
                            if (hs.some((i) => event.gains.includes(i))) {
                                event.cards = hs.filter((i) => event.gains.includes(i));
                            } else {
                                event.finish();
                                return;
                            }
                        } else event.finish();
                        ('step 2');
                        if (_status.connectMode)
                            game.broadcastAll(function () {
                                _status.noclearcountdown = true;
                            });
                        event.given_map = {};
                        ('step 3');
                        player.chooseCardTarget({
                            filterCard(card, player) {
                                return _status.event.cards.includes(card) && !card.hasGaintag('ldj_mizhi_given');
                            },
                            cards: cards,
                            filterTarget: lib.filter.notMe,
                            selectCard: [1, cards.length],
                            ai1(card) {
                                if (!ui.selected.cards.length) return 1;
                                return 0;
                            },
                            ai2(target) {
                                var player = _status.event.player,
                                    card = ui.selected.cards[0];
                                var val = target.getUseValue(card);
                                if (val > 0) return val * get.attitude(player, target) * 2;
                                return get.value(card, target) * get.attitude(player, target);
                            },
                        });
                        ('step 4');
                        if (result.bool) {
                            event.givennd = true;
                            var res = result.cards,
                                target = result.targets[0].playerid;
                            player.addGaintag(res, 'ldj_mizhi_given');
                            cards.removeArray(res);
                            if (!event.given_map[target]) event.given_map[target] = [];
                            event.given_map[target].addArray(res);
                            if (cards.length) event.goto(3);
                        } else {
                            if (!event.givennd) event.goto(6);
                        }
                        ('step 5');
                        if (_status.connectMode) {
                            game.broadcastAll(function () {
                                delete _status.noclearcountdown;
                                game.stopCountChoose();
                            });
                        }
                        var map = [],
                            cards = [];
                        for (var i in event.given_map) {
                            var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                            player.line(source, 'green');
                            map.push([source, event.given_map[i]]);
                            cards.addArray(event.given_map[i]);
                        }
                        if (map.length)
                            game.loseAsync({
                                gain_list: map,
                                player: player,
                                cards: cards,
                                giver: player,
                                animate: 'giveAuto',
                                gaintag: ['ldj_mizhi'],
                            }).setContent('gaincardMultiple');
                        ('step 6');
                        var hs = player.getCards('h');
                        if (hs.some((i) => event.cards.includes(i))) {
                            event.cards = hs.filter((i) => event.cards.includes(i));
                            player.addGaintag(event.cards, 'ldj_mizhi');
                        }
                    },
                },
                ldj_kongmen: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: ['loseAfter'],
                        global: ['showCardsEnd', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                    },
                    usable: 4,
                    forced: true,
                    filter(event, player) {
                        if (!get.jy_deEffect(player)) return false;
                        if (event.name == 'showCards') return player.getCards('h').some((i) => event.cards.includes(i));
                        const evt = event.getl(player);
                        return evt && evt.player == player && evt.hs && evt.hs.length;
                    },
                    content() {
                        var count = 0;
                        if (trigger.name == 'showCards') {
                            count = player.getCards('h').filter((i) => trigger.cards.includes(i)).length;
                        } else {
                            count = trigger.getl(player).hs.length;
                        }
                        player.draw(count);
                    },
                    ai: {
                        threaten: 0.8,
                        effect: {
                            target(card, player, target) {
                                if (card.name == 'tiesuo') {
                                    if (!target.isLinked()) {
                                        return [1, 3];
                                    } else {
                                        return [1, -3];
                                    }
                                }
                                if (get.jy_deEffect(target)) {
                                    if (card.name == 'huogong' || card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                                }
                            },
                        },
                        noh: true,
                        skillTagFilter(player, tag) {
                            if (tag == 'noh') {
                                if (!get.jy_deEffect(player)) return false;
                            }
                        },
                    },
                },
                ldj_foyuan: {
                    global: 'ldj_foyuan2',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    zhuSkill: true,
                },
                ldj_foyuan3: {
                    forced: true,
                    charlotte: true,
                    firstDo: true,
                    audio: 'ldj_foyuan',
                    popup: false,
                },
                ldj_foyuan2: {
                    audio: 'ldj_foyuan',
                    enable: 'phaseUse',
                    prompt() {
                        var player = _status.event.player;
                        var list = game.filterPlayer(function (target) {
                            if (target.group != player.group) return false;
                            return target.hasZhuSkill('ldj_foyuan', player) && target.countCards('h') && target != player && !target.hasSkill('ldj_foyuan3');
                        });
                        var str = '展示' + get.translation(list);
                        if (list.length > 1) str += '中的一人';
                        str += '的一张手牌,将一张手牌当此牌使用(不能使用则跳过此步)';
                        return str;
                    },
                    filter(event, player) {
                        if (player.countCards('h') == 0) return false;
                        return game.hasPlayer(function (target) {
                            if (target.group != player.group) return false;
                            return target.hasZhuSkill('ldj_foyuan', player) && target.countCards('h') && target != player && !target.hasSkill('ldj_foyuan3');
                        });
                    },
                    filterTarget(card, player, target) {
                        if (target.group != player.group) return false;
                        return target.hasZhuSkill('ldj_foyuan', player) && target.countCards('h') && target != player && !target.hasSkill('ldj_foyuan3');
                    },
                    log: false,
                    prepare(cards, player, targets) {
                    },
                    usable: 1,
                    content() {
                        'step 0';
                        target.addTempSkill('ldj_foyuan3', 'phaseUseEnd');
                        player.choosePlayerCard(target, 'h', true).set('ai', function (button) {
                            let vcard = {
                                name: button.link.name,
                                nature: get.nature(button.link),
                                suit: 'unsure',
                                number: 'unsure',
                                color: 'unsure',
                            };
                            if (get.type(vcard) == 'equip') return -1;
                            return player.getUseValue(vcard);
                        });
                        ('step 1');
                        if (result.bool) {
                            var card = result.links[0];
                            player.showCards(card, get.translation(player) + '发动了【佛缘】');
                            let vcard = {
                                name: card.name,
                                nature: get.nature(card),
                                //suit:'unsure',
                                //number:'unsure',
                                //color:'unsure',
                            };
                            if (get.type(vcard) != 'equip' && lib.filter.cardEnabled(vcard)) {
                                if (
                                    game.hasPlayer(function (current) {
                                        return player.canUse(vcard, current);
                                    })
                                ) {
                                    lib.skill.ldj_foyuan4.viewAs = vcard;
                                    var next = player.chooseToUse();
                                    if (next.isOnline()) {
                                        player.send(function (vcard) {
                                            lib.skill.ldj_foyuan4.viewAs = vcard;
                                        }, vcard);
                                    }
                                    //next.logSkill='mozhi';
                                    next.set('openskilldialog', '佛缘:将一张手牌当' + get.translation(vcard) + '使用');
                                    next.set('norestore', true);
                                    next.set('_backupevent', 'ldj_foyuan4');
                                    next.set('addCount', false);
                                    next.set('custom', {
                                        add: {},
                                        replace: { window() { } },
                                    });
                                    next.backup('ldj_foyuan4');
                                }
                            }
                        }
                    },
                    ai: {
                        basic: {
                            order: 10,
                        },
                        expose: 0.2,
                        result: {
                            player(player, target) {
                                return 1;
                            },
                        },
                    },
                },
                ldj_foyuan4: {
                    audio: 'ldj_foyuan',
                    filterCard(card, player) {
                        return get.itemtype(card) == 'card';
                    },
                    selectCard: 1,
                    position: 'hs',
                    popname: true,
                },
                //董鄂妃 棉花糖 20230828
                ldj_zhuanchong: {
                    enable: 'phaseUse',
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:4',
                    async content(event, trigger, player) {
                        const cards = player.getCards('h');
                        const suits = ['heart', 'diamond', 'club', 'spade'];
                        if (cards.length === 0) {
                            const cardsToGain = suits.map((suit) => {
                                let card = get.cardPile((cardx) => cardx.suit === suit);
                                if (!card) card = game.createCard(card);
                                return card;
                            });
                            player.gain(cardsToGain, player, 'draw');
                        } else {
                            const suitCounts = new Map();
                            cards.forEach((card) => {
                                const suit = card.suit;
                                suitCounts.set(suit, (suitCounts.get(suit) || 0) + 1);
                            });
                            if (suitCounts.size < 4) {
                                for await (let suit of suits) {
                                    if (!suitCounts.has(suit)) suitCounts.set(suit, 0);
                                }
                            }
                            const maxCount = Math.max(...suitCounts.values());
                            suitCounts.forEach((count, suit) => {
                                if (count < maxCount) {
                                    const needed = maxCount - count;
                                    const additionalCards = get.randomCards(needed, (card) => card.suit === suit);
                                    player.gain(additionalCards, player, 'draw');
                                }
                            });
                        }
                    },
                    ai: {
                        order: 8,
                        result: {
                            player: 1,
                        },
                    },
                },
                ldj_feiming: {
                    audio: 'ext:金庸群侠传/peiyin:3',
                    trigger: {
                        player: 'useCardAfter',
                    },
                    forced: true,
                    mark: true,
                    marktext: '命',
                    intro: {
                        name: '非命',
                        content(storage, player) {
                            if (!storage || storage.size == 0) return;
                            let list = [...storage.keys()],
                                str = ``;
                            for (let suit of list) {
                                str += `${get.translation(suit)}`;
                            }
                            return str;
                        },
                    },
                    filter(event, player) {
                        if (event.card && event.card.suit != 'none') return true;
                        return false;
                    },
                    init(player, skill) {
                        if (!player.storage.ldj_feiming) player.storage.ldj_feiming = new Map();
                    },
                    async content(event, trigger, player) {
                        let obj = player.storage.ldj_feiming;
                        let suit = trigger.card.suit;
                        if (!obj.has(suit)) obj.set(suit, 1);
                        if (obj.size >= 4) {
                            let dialog = ui.create.dialog('〖非命〗:请选择一项', 'hidden');
                            let list = [`选项一:${get.translation(player)}受到一点无来源蛊毒伤害`, `选项二:${get.translation(player)}弃置两张牌`];
                            for (var i = 0; i < list.length; i++) {
                                list[i] = [i, list[i]];
                            }
                            dialog.add([list, 'textbutton']);
                            const {
                                result: { links },
                            } =
                                player.countCards('he') < 2
                                    ? { result: { links: list[0] } }
                                    : await player.chooseButton(dialog, true).set('ai', () => {
                                        let player = get.player();
                                        if (player.hp <= 2) return 1;
                                        return 0;
                                    });
                            if (links) {
                                let index = links[0];
                                if (index == 0) {
                                    player.damage(1, 'nosource', 'nocard', 'jy_du');
                                } else {
                                    player.chooseToDiscard('he', 2, true);
                                }
                                obj.clear();
                            }
                        } else {
                            return;
                        }
                    },
                },
                //郑克塽-霸天
                ldj_wanku: {
                    audio: 'ext:金庸群侠传/peiyin:4',
                    enable: 'phaseUse',
                    usable: 1,
                    multitarget: true,
                    multiline: true,
                    selectTarget: [1, 4],
                    intro: {
                        mark(dialog, storage, player) {
                            if (!storage.length) return '无';
                            var list = [];
                            for (var i = 0; i < storage.length; i++) {
                                list.push(['锦囊', '', storage[i]]);
                            }
                            dialog.addAuto([list, 'vcard']);
                        },
                        markcount(storage, player) {
                            return storage.length;
                        },
                    },
                    filter(event, player) {
                        return game.hasPlayer(function (target) {
                            if (player == target) return false;
                            var count = target.getGainableCards(player, 'ej', function (cardx) {
                                var suit = cardx.suit;
                                return suit == 'spade' || suit == 'heart';
                            });
                            var count2 = target.countCards('h');
                            if (count > 0) return true;
                            if (!count2) return false;
                            return true;
                        });
                    },
                    filterTarget(card, player, target) {
                        if (player == target) return false;
                        var count = target.getGainableCards(player, 'ej', function (cardx) {
                            var suit = cardx.suit;
                            return suit == 'spade' || suit == 'heart';
                        });
                        var count2 = target.countCards('h');
                        if (count > 0) return true;
                        if (!count2) return false;
                        return true;
                    },
                    content() {
                        'step 0';
                        var gains = [];
                        var suits = ['club', 'spade', 'diamond', 'heart'];
                        for (var i of targets) {
                            var temp = i.getGainableCards(player, 'hej', function (gain) {
                                var suit = gain.suit;
                                return suit == 'spade' || suit == 'heart';
                            });
                            gains.addArray(temp);
                        }
                        var togain;
                        if (gains.length > 2) {
                            togain = gains.randomGets(2);
                        } else if (gains.length) {
                            togain = gains;
                        } else {
                            event.finish();
                            return;
                        }
                        var isSpade = false,
                            isHeart = false;
                        for (var j of togain) {
                            var suitx = j.suit;
                            if (suitx == 'spade') isSpade = true;
                            if (suitx == 'heart') isHeart = true;
                        }
                        if (togain.length === 2) {
                            var owner1 = get.owner(togain[0]);
                            var owner2 = get.owner(togain[1]);
                            if (owner1 != owner2) {
                                player.gain(togain[0], owner1, 'give', 'bySelf');
                                player.gain(togain[1], owner2, 'give', 'bySelf');
                            } else {
                                player.gain(togain, owner1, 'give', 'bySelf');
                            }
                        } else if (togain.length === 1) {
                            var owner1 = get.owner(togain[0]);
                            player.gain(togain[0], owner1, 'give', 'bySelf');
                        } else {
                            event.finish();
                            return;
                        }
                        if (isSpade && isHeart) {
                            event.goto(1);
                        } else if (!isSpade && !isHeart) {
                            event.finish();
                            return;
                        } else {
                            var name = isHeart ? 'wuzhong' : 'guohe';
                            var bool = player.hasUseTarget({ name: name });
                            if (bool) {
                                var next = player.chooseUseTarget({ name: name }, false);
                                next.set('oncard', function (card, player) {
                                    player.markAuto('ldj_wanku', [card.name]);
                                });
                            }
                            event.finish();
                        }
                        ('step 1');
                        var bool = player.hasUseTarget({ name: 'nanman' });
                        if (bool) {
                            var next = player.chooseUseTarget({ name: 'nanman' }, false);
                            next.set('oncard', function (card, player) {
                                player.markAuto('ldj_wanku', [card.name]);
                            });
                        }
                        event._result = { bool: false };
                        ('step 2');
                        if (!result.bool || player.storage.ldj_xiangqing) {
                            var bool = player.hasUseTarget({ name: 'wanjian' });
                            if (bool) {
                                var next = player.chooseUseTarget({ name: 'wanjian' }, false);
                                next.set('oncard', function (card, player) {
                                    player.markAuto('ldj_wanku', [card.name]);
                                });
                            }
                        }
                    },
                    ai: {
                        order: 12,
                        result: {
                            target(player, target) {
                                return -target.countCards('he');
                            },
                        },
                    },
                },
                ldj_xiangqing2: {
                    audio: 'ldj_xiangqing',
                    trigger: {
                        source: 'damageBegin1',
                    },
                    filter(event, player) {
                        if (get.jy_group(event.player) != 'hanren') return false;
                        return (event.card && event.card.name == 'nanman') || event.card.name == 'wanjian';
                    },
                    forced: true,
                    logTarget: 'player',
                    content() {
                        trigger.num++;
                    },
                    ai: {
                        effect: {
                            player(card, player, target, current, isLink) {
                                if (!target) return;
                                if (isLink) return;
                                if (get.jy_group(target) != 'hanren') return;
                                if (card.name != 'nanman' && card.name != 'wanjian') return;
                                if (
                                    target.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: card,
                                    })
                                )
                                    return;
                                return [1, 0, 1, -1.5];
                            },
                        },
                    },
                },
                ldj_xiangqing: {
                    juexingji: true,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'ldj_wankuEnd',
                    },
                    forced: true,
                    filter(event, player) {
                        if (player.storage.ldj_xiangqing) return false;
                        return player.getStorage('ldj_wanku').length >= 3;
                    },
                    content() {
                        player.storage.ldj_xiangqing = true;
                        player.awakenSkill('ldj_xiangqing');
                        player.addSkills('jy_dalu');
                        player.addSkills('ldj_xiangqing2');
                    },
                },
                //韦氏后宫团
                //逢源
                ldj_fengyuan: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        target: 'useCardToTargeted',
                        player: 'useCardToTargeted',
                    },
                    logTarget(event, player) {
                        if (event.player == player) return event.target;
                        return event.player;
                    },
                    check(event, player) {
                        if (event.player == player) return get.effect(event.target, event.card, player, player) < 0;
                        return get.effect(player, event.card, event.player, player) < 0;
                    },
                    filter(event, player) {
                        if (event.target == event.player) return false;
                        var storage = player.getStorage('ldj_fengyuan');
                        return !storage.includes(event.card.name);
                    },
                    content() {
                        var target = lib.skill.ldj_fengyuan.logTarget(trigger, player);
                        trigger.parent.excluded.add(trigger.target);
                        player.markAuto('ldj_fengyuan', [trigger.card.name]);
                        game.asyncDraw([trigger.player, trigger.target]);
                    },
                    intro: {
                        mark(dialog, storage, player) {
                            if (!storage.length) return '无';
                            var list = [];
                            for (var i = 0; i < storage.length; i++) {
                                list.push([get.type(storage[i]), '', storage[i]]);
                            }
                            dialog.addAuto([list, 'vcard']);
                        },
                        markcount(storage, player) {
                            return storage.length;
                        },
                    },
                },
                //翻牌,藏海
                ldj_fanpai: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'phaseZhunbeiBegin' },
                    //forced:true,
                    forced: true,
                    check(event, player) {
                        return 1;
                    },
                    derivation: ['ldj_yuanzhong', 'ldj_huizhong', 'ldj_linglong', 'ldj_xiuwai', 'ldj_yazhu', 'ldj_jinghong'],
                    content() {
                        'step 0';
                        player.throwDice();
                        ('step 1');
                        player.addTempSkills(lib.skill.ldj_fanpai.derivation[event.num - 1]);
                    },
                },
                //押注
                ldj_yazhu2: {
                    mark: true,
                    marktext: '压',
                    intro: {
                        name: '押注',
                        content: '本阶段只能使用7-K点的牌且使用这些点数的牌可额外指定一个目标',
                    },
                    init(player, skill) {
                        if (!player.storage[skill]) player.storage[skill] = [];
                    },
                    mod: {
                        cardEnabled(card, player) {
                            var number = card.number;
                            if (typeof number != 'number') return;
                            if (![7, 8, 9, 10, 11, 12, 13].includes(number)) return false;
                        },
                        cardSavable(card, player) {
                            var number = card.number;
                            if (typeof number != 'number') return;
                            if (![7, 8, 9, 10, 11, 12, 13].includes(number)) return false;
                        },
                        ignoredHandcard(card, player) {
                            var number = card.number;
                            if (typeof number != 'number') return;
                            var storage = player.getStorage('ldj_yazhu2');
                            if (!storage.includes(number)) {
                                return true;
                            }
                        },
                        cardDiscardable(card, player, name) {
                            var number = card.number;
                            if (typeof number != 'number') return;
                            var storage = player.getStorage('ldj_yazhu2');
                            if (name == 'phaseDiscard' && !storage.includes(number)) return false;
                        },
                    },
                    trigger: { player: 'useCard2' },
                    filter(event, player) {
                        var number = event.card.number;
                        if (typeof number != 'number') return false;
                        player.markAuto('ldj_yazhu2', [number]);
                        if (![7, 8, 9, 10, 11, 12, 13].includes(number)) return false;
                        var info = get.info(event.card);
                        if (info.allowMultiple == false) return false;
                        if (event.targets && !info.multitarget) {
                            if (
                                game.hasPlayer(function (current) {
                                    return player.canUse(event.card, current) && !event.targets.includes(current);
                                })
                            ) {
                                return true;
                            }
                        }
                        return false;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt('ldj_yazhu2'), '为' + get.translation(trigger.card) + '增加一个目标', function (card, player, target) {
                                return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
                            })
                            .set('sourcex', trigger.targets)
                            .set('ai', function (target) {
                                var player = _status.event.player;
                                return get.effect(target, _status.event.card, player, player);
                            })
                            .set('card', trigger.card);
                        ('step 1');
                        if (result.bool) {
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
                                if (!isLink) {
                                    var number = card.number;
                                    if (typeof number != 'number') return;
                                    if (![7, 8, 9, 10, 11, 12, 13].includes(number)) return;
                                    if (!target) return;
                                    if (player._ldj_yazhu2) return;
                                    player._ldj_yazhu2 = true;
                                    if (get.effect(target, card, player, player) <= 0) {
                                        delete player._ldj_yazhu2;
                                        return;
                                    }
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current != target && player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    ) {
                                        delete player._ldj_yazhu2;
                                        return [1, 1];
                                    }
                                    delete player._ldj_yazhu2;
                                }
                            },
                        },
                    },
                },
                ldj_yazhu1: {
                    mark: true,
                    marktext: '压',
                    init(player, skill) {
                        if (!player.storage[skill]) player.storage[skill] = [];
                    },
                    intro: {
                        name: '押注',
                        content: '本阶段只能使用1-7点的牌且使用此点数的牌后摸一张牌',
                    },
                    mod: {
                        cardEnabled(card, player) {
                            var number = card.number;
                            if (typeof number != 'number') return;
                            if (![1, 2, 3, 4, 5, 6, 7].includes(number)) return false;
                        },
                        cardSavable(card, player) {
                            var number = card.number;
                            if (typeof number != 'number') return;
                            if (![1, 2, 3, 4, 5, 6, 7].includes(number)) return false;
                        },
                        ignoredHandcard(card, player) {
                            var number = card.number;
                            if (typeof number != 'number') return;
                            var storage = player.getStorage('ldj_yazhu1');
                            if (!storage.includes(number)) {
                                return true;
                            }
                        },
                        cardDiscardable(card, player, name) {
                            var number = card.number;
                            if (typeof number != 'number') return;
                            var storage = player.getStorage('ldj_yazhu1');
                            if (name == 'phaseDiscard' && !storage.includes(number)) return false;
                        },
                    },
                    trigger: { player: 'useCard' },
                    filter(event, player) {
                        var number = event.card.number;
                        if (typeof number != 'number') return false;
                        player.markAuto('ldj_yazhu1', [number]);
                        if ([1, 2, 3, 4, 5, 6, 7].includes(number)) return true;
                        return false;
                    },
                    forced: true,
                    content() {
                        player.draw();
                    },
                    ai: {
                        effect: {
                            player(card, player, target) {
                                var number = card.number;
                                if (typeof number != 'number') return;
                                if ([1, 2, 3, 4, 5, 6, 7].includes(number)) return [1, 1];
                            },
                        },
                    },
                },
                ldj_yazhu: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'phaseUseBegin',
                    },
                    content() {
                        'step 0';
                        player
                            .chooseControl()
                            .set('choiceList', ['本阶段只能使用1-7点的牌且使用这些点数的牌后摸一张牌,本阶段未使用过的点数的牌不占上限.', '只能使用7-K点的牌且使用这些点数的牌可额外指定一个目标,本阶段未使用过的点数的牌不占上限.'])
                            .set('ai', function () {
                                return [0, 1].randomGet();
                            });
                        ('step 1');
                        if (result.index == 1) {
                            player.addTempSkill('ldj_yazhu2');
                        } else player.addTempSkill('ldj_yazhu1');
                    },
                },
                //玲珑
                ldj_linglong: {
                    filter(event, player) {
                        return (
                            player
                                .getHistory('useCard', function (evt) {
                                    return evt.card.name == event.card.name;
                                })
                                .indexOf(event) == 0
                        );
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'useCard',
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player.chooseTarget(get.prompt('ldj_linglong'), '令一名角色摸一张牌').set('ai', function (target) {
                            return get.attitude(player, target);
                        });
                        ('step 1');
                        if (result.bool) {
                            result.targets[0].draw();
                        }
                    },
                },
                //夫纲--霸天
                ldj_fugang: {
                    filter(event, player) {
                        if (event.player != _status.currentPhase) return false;
                        if (!event.player.hasSex('female')) return false;
                        if (event.player == player) return false;
                        if (event.card.suit == 'heart') return false;
                        var usecard = event.parent;
                        return event.player.getHistory('useCard').indexOf(usecard) == 0;
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { target: 'useCardToTargeted' },
                    forced: true,
                    content() {
                        trigger.parent.excluded.add(player);
                    },
                    ai: {
                        effect: {
                            target(card, player, target, current) {
                                if (!target) return;
                                if (player != _status.currentPhase) return;
                                if (!player.hasSex('female')) return;
                                if (player == target) return;
                                var list = player.getHistory('useCard');
                                if (list.length) return;
                                if (card.suit != 'heart') return 'zeroplayertarget';
                            },
                        },
                    },
                },
                //慧中--藏海
                ldj_huizhong: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: ['discardAfter', 'gainAfter'],
                    },
                    forced: true,
                    filter(event, player) {
                        return event.cards && event.cards.length;
                    },
                    content() {
                        'step 0';
                        event.cards = trigger.cards.slice(0);
                        player
                            .chooseTarget(get.prompt('ldj_huizhong'), '令一名其他角色摸' + get.translation(event.cards.length) + '张牌', function (card, player, target) {
                                return target != player;
                            })
                            .set('ai', function (target) {
                                return get.attitude(player, target);
                            });
                        ('step 1');
                        if (result.bool) {
                            result.targets[0].draw(event.cards.length);
                        }
                    },
                },
                ldj_xiuwai: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'useCard1' },
                    filter(event, player) {
                        var type = get.type(event.card);
                        if (!['basic', 'trick'].includes(type)) return false;
                        return event.card && get.tag(event.card, 'damage') && get.color(event.card) == 'black';
                    },
                    content() {
                        if (!trigger.baseDamage) trigger.baseDamage = 1;
                        trigger.baseDamage += 1;
                        if (!trigger.cards) return;
                        var next = game.createEvent('ldj_xiuwaiend', false);
                        next.player = player;
                        next._trigger = trigger;
                        event.next.remove(next);
                        trigger.after.push(next);
                        next.setContent(lib.skill.ldj_xiuwai.contentx);
                    },
                    contentx() {
                        'step 0';
                        if (!trigger.cards.filterInD('od').length) {
                            event.finish();
                        }
                        ('step 1');
                        player
                            .chooseTarget(get.prompt('ldj_xiuwai'), '将' + get.translation(trigger.cards) + '交给一名其他角色', function (card, player, target) {
                                return target != player;
                            })
                            .set('ai', function (target) {
                                if (target.hasJudge('lebu')) return 0;
                                var att = get.attitude(_status.event.player, target);
                                if (att < 3) return 0;
                                if (target.hasSkillTag('nogain')) att /= 10;
                                return att / (1 + get.distance(player, target, 'absolute'));
                            });
                        ('step 2');
                        if (result.bool) {
                            result.targets[0].gain(trigger.cards.filterInD('od'), 'gain2');
                        }
                    },
                },
                //冤种--藏海
                ldj_yuanzhong: {
                    enable: 'phaseUse',
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    filterTarget(card, player, target) {
                        return player != target && !target.isDisabledJudge();
                    },
                    content() {
                        var cards = get.cardPile2(function (card) {
                            return get.type(card) == 'delay' && target.canAddJudge(card);
                        });
                        if (!cards) return;
                        target.addJudge(cards);
                        target.$gain2(cards);
                        if (cards.name == 'jydiy_yungongliaoshang') target.loseHp();
                        else if (cards.name == 'lebu') player.recover();
                    },
                    ai: {
                        order: 5,
                        result: {
                            target: -2,
                        },
                        threaten: 2,
                    },
                },
                //惊鸿----藏海
                ldj_jinghong: {
                    enable: 'phaseUse',
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    count() {
                        return game.countPlayer(function (current) {
                            return current.countCards('hej', function (cardx) {
                                if (/*get.type(cardx)=='equip'&&*/ cardx.suit == 'heart') {
                                    return true;
                                }
                                return false;
                            });
                        });
                    },
                    content() {
                        var num = lib.skill.ldj_jinghong.count();
                        player.draw(num);
                    },
                    ai: {
                        order: 5,
                        result: {
                            target: 2,
                        },
                        threaten: 2,
                    },
                },
                //苏菲亚 -- 霸天20220214
                ldj_diyue: {
                    audio: 'ext:金庸群侠传/peiyin:3',
                    trigger: {
                        player: 'phaseZhunbeiBegin',
                    },
                    forced: true,
                    group: 'ldj_diyue2',
                    filter(event, player) {
                        return game.hasPlayer(
                            (target) =>
                                target != player &&
                                target.countCards('e', function (card) {
                                    return get.subtype(card) == 'equip1' || lib.jy_mijiList.includes(card.name);
                                })
                        );
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('ldj_diyue'), function (card, player, target) {
                                return (
                                    target != player &&
                                    target.countCards('e', function (card) {
                                        return get.subtype(card) == 'equip1' || lib.jy_mijiList.includes(card.name);
                                    })
                                );
                            })
                            .set('ai', function (target) {
                                var att = get.attitude(player, target);
                                if (att > 0)
                                    return target.countCards('e', function (card) {
                                        return get.subtype(card) == 'equip1' || lib.jy_mijiList.includes(card.name);
                                    });
                                return 0;
                            });
                        ('step 1');
                        if (result.bool) {
                            var cards = result.targets[0].getCards('e', function (card) {
                                return get.subtype(card) == 'equip1' || lib.jy_mijiList.includes(card.name);
                            });
                            result.targets[0].draw(cards.length);
                            if (!player.storage.ldj_diyue_equip) player.storage.ldj_diyue_equip = [];
                            if (!player.storage.ldj_diyue_skills) player.storage.ldj_diyue_skills = [];
                            var skills = [];
                            for (var i of cards) {
                                player.storage.ldj_diyue_equip.add(i.name);
                                var info = lib.card[i.name].skills;
                                if (info && info.length) skills.addArray(info);
                            }
                            player.storage.ldj_diyue_skills.addArray(skills);
                            player.addTempSkill('ldj_diyue_equip');
                            if (player.storage.ldj_diyue_skills.length) player.addAdditionalSkills('ldj_diyue_equip', player.storage.ldj_diyue_skills);
                        }
                    },
                    ai: {
                        threaten: 2,
                    },
                },
                ldj_diyue2: {
                    audio: 'ldj_diyue',
                    trigger: {
                        global: 'phaseZhunbeiBegin',
                    },
                    logTarget: 'player',
                    forced: true,
                    filter(event, player) {
                        if (event.player == player) return false;
                        return player.countCards('e', function (card) {
                            return get.subtype(card) == 'equip1' || lib.jy_mijiList.includes(card.name);
                        });
                    },
                    check(event, player) {
                        return get.attitude(player, event.player) >= 0;
                    },
                    content() {
                        'step 0';
                        trigger.player
                            .chooseBool(
                                '是否令' +
                                get.translation(player) +
                                '摸' +
                                get.translation(
                                    player.getCards('e', function (card) {
                                        return get.subtype(card) == 'equip1' || lib.jy_mijiList.includes(card.name);
                                    }).length
                                ) +
                                '张牌？'
                            )
                            .set('ai', function (evt, player) {
                                return get.attitude(player, trigger.player) > 0;
                            });
                        ('step 1');
                        if (result.bool) {
                            var cards = player.getCards('e', function (card) {
                                return get.subtype(card) == 'equip1' || lib.jy_mijiList.includes(card.name);
                            });
                            player.draw(cards.length);
                            if (!trigger.player.storage.ldj_diyue_equip) trigger.player.storage.ldj_diyue_equip = [];
                            if (!trigger.player.storage.ldj_diyue_skills) trigger.player.storage.ldj_diyue_skills = [];
                            var skills = [];
                            for (var i of cards) {
                                trigger.player.storage.ldj_diyue_equip.add(i.name);
                                var info = lib.card[i.name].skills;
                                if (info && info.length) skills.addArray(info);
                            }
                            trigger.player.storage.ldj_diyue_skills.addArray(skills);
                            trigger.player.addTempSkill('ldj_diyue_equip');
                            if (trigger.player.storage.ldj_diyue_skills.length) trigger.player.addAdditionalSkills('ldj_diyue_equip', trigger.player.storage.ldj_diyue_skills);
                        }
                    },
                },
                ldj_diyue_equip: {
                    charlotte: true,
                    mod: {
                        globalFrom(from, to, distance) {
                            if (!from.storage.ldj_diyue_equip) return;
                            var cards = from.storage.ldj_diyue_equip;
                            var num = 0;
                            for (var i of cards) {
                                var info = lib.card[i];
                                if (info && info.distance && info.distance.globalFrom) num += info.distance.globalFrom;
                            }
                            return distance + num;
                        },
                        globalTo(from, to, distance) {
                            if (!to.storage.ldj_diyue_equip) return;
                            var cards = to.storage.ldj_diyue_equip;
                            var num = 0;
                            for (var i of cards) {
                                var info = lib.card[i];
                                if (info && info.distance && info.distance.globalTo) num += info.distance.globalTo;
                            }
                            return distance + num;
                        },
                        attackRange(from, distance) {
                            if (!from.storage.ldj_diyue_equip) return;
                            var cards = from.storage.ldj_diyue_equip;
                            var num = 0;
                            for (var i of cards) {
                                var info = lib.card[i];
                                if (info && info.distance && info.distance.attackFrom) num += info.distance.attackFrom;
                            }
                            return distance - num;
                        },
                        attackTo(from, to, distance) {
                            if (!to.storage.ldj_diyue_equip) return;
                            var cards = to.storage.ldj_diyue_equip;
                            var num = 0;
                            for (var i of cards) {
                                var info = lib.card[i];
                                if (info && info.distance && info.distance.attackTo) num += info.distance.attackTo;
                            }
                            return distance + num;
                        },
                    },
                    mark: true,
                    intro: {
                        mark(dialog, storage, player) {
                            if (!storage.length) return '无';
                            var list = [];
                            for (var i = 0; i < storage.length; i++) {
                                list.push(['装备', '', storage[i]]);
                            }
                            dialog.addAuto([list, 'vcard']);
                        },
                        markcount(storage, player) {
                            return storage.length;
                        },
                        onunmark(storage, player) {
                            player.removeAdditionalSkills('ldj_diyue_equip');
                            delete player.storage.ldj_diyue_equip;
                            delete player.storage.ldj_diyue_skills;
                        },
                    },
                },
                ldj_zhengluan: {
                    enable: 'phaseUse',
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:3',
                    filter(event, player) {
                        if (get.jy_hasbangpai(player)) return game.hasPlayer((target) => target != player && get.jy_hasbangpai(target));
                        return true;
                    },
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    filterTarget(card, player, target) {
                        if (get.jy_hasbangpai(player)) return target != player && get.jy_hasbangpai(target);
                        return false;
                    },
                    selectTarget() {
                        var player = _status.event.player;
                        if (get.jy_hasbangpai(player)) return [1, 1];
                        return [-1, -1];
                    },
                    content() {
                        if (get.jy_hasbangpai(player)) {
                            var bp = lib.jy_bangPaiList.slice(0);
                            for (var i of bp) {
                                target.removeSkills(i);
                            }
                        } else {
                            player.choose_bangpai_skill();
                        }
                    },
                    ai: {
                        order: 9,
                        result: {
                            player: 1,
                            target(player, target) {
                                if (get.jy_hasbangpai(player)) return -1;
                                return 0;
                            },
                        },
                        threaten: 2,
                    },
                },
                //阿珂
                //----诛心
                ldj_zhuxin: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    logTarget: 'player',
                    trigger: { source: 'damageBegin1' },
                    filter(event, player) {
                        if (event.player == player) return false; //其他角色
                        return event.player.countCards('h', { suit: 'heart' }) > 0 && event.notLink();
                    },
                    forced: true,
                    content() {
                        'step 0';
                        trigger.player
                            .chooseCard('h', false, function (card) {
                                return card.suit == 'heart';
                            })
                            .set('ai', function () {
                                return true;
                            });
                        ('step 1');
                        if (result.bool) {
                            var cards = result.cards[0];
                            trigger.player.showCards(cards, '诛心');
                        } else {
                            trigger.player.chat('心殇难治!');
                            trigger.num++;
                        }
                    },
                    ai: {
                        effect: {
                            player(card, player, target, current, isLink) {
                                if (!target) return;
                                if (isLink) return;
                                if (target == player) return;
                                if (!get.tag(card, 'damage')) return;
                                if (
                                    target.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: card,
                                    })
                                )
                                    return;
                                if (target.countCards('h', { suit: 'heart' }) > 0) return;
                                return [1, 0, 1, -1.5];
                            },
                        },
                    },
                },
                //绝色
                ldj_juese: {
                    //unique:true,
                    audio: 'ext:金庸群侠传/peiyin:2',
                    global: 'ldj_juese2',
                },
                ldj_juese3: {},
                ldj_juese2: {
                    // audio:"ldj_juese",//已经logskill了
                    enable: 'phaseUse',
                    prepare(cards, player, targets) {
                    },
                    forced: true,
                    delay: false,
                    discard: false,
                    lose: false,
                    position: 'he',
                    prompt() {
                        var player = _status.event.player;
                        var list = game.filterPlayer(function (target) {
                            return target != player && target.hasSkill('ldj_juese') && !target.hasSkill('ldj_juese3');
                        });
                        var str = '将一张牌♥️️牌交给' + get.translation(list);
                        if (list.length > 1) str += '中的一人';
                        return str;
                    },
                    filter(event, player) {
                        if (player.countCards('he', { suit: 'heart' }) == 0) return false;
                        if (player.sex != 'male') return false;
                        return game.hasPlayer(function (target) {
                            return target != player && target.hasSkill('ldj_juese') && !target.hasSkill('ldj_juese3');
                        });
                    },
                    filterCard: { suit: 'heart' },
                    log: false,
                    visible: true,
                    filterTarget(card, player, target) {
                        return target != player && target.hasSkill('ldj_juese') && !target.hasSkill('ldj_juese3');
                    },
                    content() {
                        'step 0';
                        target.gain(cards, player, 'giveAuto');
                        //player.draw();
                        target.addTempSkill('ldj_juese3', 'phaseEnd');
                        ('step 1');
                        if (player.isIn() && target.isIn()) {
                            target
                                .chooseBool('是否令' + get.translation(player) + '摸两张牌？')
                                .set('ai', function (evt, player) {
                                    return _status.event.value;
                                })
                                .set('value', get.attitude(target, player) > 0);
                        } else event.finish();
                        ('step 2');
                        if (result.bool) {
                            target.line(player);
                            player.draw(2);
                        }
                    },
                    ai: {
                        expose: 0.3,
                        order: 10,
                        result: { target: 3 },
                    },
                },
                //韦春花
                ldj_goulan: {
                    contentAfter() {
                        'step 0';
                        event.num = 0;
                        event.yabao = event.parent.ya.cards;
                        game.log(player, '的牌为', cards[0]);
                        ('step 1');
                        player.$compareMultiple(cards[0], targets, event.yabao);
                        for (var name of event.yabao) {
                            game.log(get.owner(name), '的牌为', name);
                        }
                        ('step 2');
                        game.broadcastAll(ui.clear);
                        ('step 3');
                        var list = event.yabao.slice(0);
                        if (list.length == 1) {
                            game.asyncDraw([player, targets[0]], null, null);
                            event.finish();
                            return;
                        }
                        var draw = [player];
                        var dis = [];
                        list.sort(function (a, b) {
                            var number1 = Math.abs(a.number - cards[0].number);
                            var number2 = Math.abs(b.number - cards[0].number);
                            return number1 - number2;
                        });
                        for (var i = 0; i < list.length; i++) {
                            var number1 = Math.abs(list[0].number - cards[0].number);
                            var number2 = Math.abs(list[i].number - cards[0].number);
                            if (number1 == number2) {
                                draw.add(get.owner(list[i]));
                            } else {
                                dis.add(get.owner(list[i]));
                            }
                        }
                        game.asyncDraw(draw, null, null);
                        while (dis.length) {
                            var target = dis.pop();
                            if (target.countCards('h')) target.chooseToDiscard(true, 'h');
                        }
                    },
                    contentBefore() {
                        event.parent.ya = {
                            cards: [],
                        };
                    },
                    content() {
                        'step 0';
                        target.chooseCard('h', 1, '选择一张手牌', true).set('ai', function (card) {
                            return Math.random();
                        });
                        ('step 1');
                        if (result.bool) {
                            //target.$throw(1,1000,'nobroadcast');
                            event.parent.ya.cards.push(result.cards[0]);
                        }
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    usable: 1,
                    check(card) {
                        return 8;
                    },
                    filter(event, player) {
                        return player.countCards('h') > 0;
                    },
                    filterTarget(card, player, target) {
                        return target.countCards('h') > 0 && target != player;
                    },
                    filterCard(card, player, target) {
                        return true;
                    },
                    selectCard: 1,
                    selectTarget: [1, 4],
                    discard: false,
                    lose: false,
                    line: 'fire',
                    ai: {
                        order: 1,
                        result: {
                            target(player, target) {
                                if (!ui.selected.targets.length) {
                                    return 1;
                                }
                                return 0;
                            },
                        },
                    },
                },
                ldj_wasi: {
                    limited: true,
                    enable: 'phaseUse',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    mark: true,
                    marktext2: '肆',
                    markimage: 'extension/金庸群侠传/image/icon/jy_icon_wasi.jpg',
                    intro: { content: 'limited' },
                    filter(event, player) {
                        return game.hasPlayer(function (current) {
                            return current != player && current.hasSex('male') && current.countCards('h');
                        });
                    },
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    init(player) {
                        player.storage.ldj_wasi = false;
                    },
                    filterTarget(card, player, current) {
                        return current != player && current.hasSex('male') && current.countCards('h');
                    },
                    content() {
                        'step 0';
                        player.awakenSkill('ldj_wasi');
                        player.storage.ldj_wasi = true;
                        ('step 1');
                        var num = 0;
                        if (target.countGainableCards(player, 'h', { suit: 'heart' }) && !player.countCards('h', { suit: 'heart' })) num++;
                        if (target.countGainableCards(player, 'h', { suit: 'diamond' }) && !player.countCards('h', { suit: 'diamond' })) num++;
                        if (target.countGainableCards(player, 'h', { suit: 'club' }) && !player.countCards('h', { suit: 'club' })) num++;
                        if (target.countGainableCards(player, 'h', { suit: 'spade' }) && !player.countCards('h', { suit: 'spade' })) num++;
                        if (num > 0) {
                            player.gainPlayerCard(target, num, 'h', true, 'visible').set('filterButton', function (button) {
                                var player = _status.event.player;
                                if (player.countCards('h', { suit: button.link.suit })) return false;
                                for (var i = 0; i < ui.selected.buttons.length; i++) {
                                    if (button.link.suit == ui.selected.buttons[i].link.suit) return false;
                                }
                                return true;
                            });
                        } else {
                            player.viewHandcards(target);
                        }
                    },
                    ai: {
                        order: 1,
                        result: {
                            target(player, target) {
                                var num = 0;
                                if (target.countGainableCards(player, 'h', { suit: 'heart' }) && !player.countCards('h', { suit: 'heart' })) num++;
                                if (target.countGainableCards(player, 'h', { suit: 'diamond' }) && !player.countCards('h', { suit: 'diamond' })) num++;
                                if (target.countGainableCards(player, 'h', { suit: 'club' }) && !player.countCards('h', { suit: 'club' })) num++;
                                if (target.countGainableCards(player, 'h', { suit: 'spade' }) && !player.countCards('h', { suit: 'spade' })) num++;
                                if (num < 2) return 0;
                                return -num;
                            },
                        },
                    },
                },
                /////吴应熊测试-------------------------------------------------------------------------------------------------------------
                ldj_lianyin: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    global: 'ldj_lianyin2',
                },
                ldj_lianyin2: {
                    subSkill: { backup: {} },
                    enable: 'chooseToUse',
                    filter(event, player) {
                        if (!event.filterCard || !event.filterTarget) return false;
                        return game.hasPlayer(function (current) {
                            var cards = current.getExpansions('ldj_yazhi');
                            if (current != player && cards.length) {
                                for (var i of cards) {
                                    var color = get.color(i);
                                    if (color == 'black') {
                                        if (
                                            event.filterCard(
                                                {
                                                    name: 'sha',
                                                    cards: [i],
                                                },
                                                player,
                                                event
                                            ) &&
                                            event.filterTarget(
                                                {
                                                    name: 'sha',
                                                    cards: [i],
                                                },
                                                player,
                                                current
                                            )
                                        )
                                            return true;
                                    }
                                    if (color == 'red' && event.type == 'phase') {
                                        if (
                                            event.filterCard(
                                                {
                                                    name: 'lebu',
                                                    cards: [i],
                                                },
                                                player,
                                                event
                                            ) &&
                                            event.filterTarget(
                                                {
                                                    name: 'lebu',
                                                    cards: [i],
                                                },
                                                player,
                                                current
                                            )
                                        )
                                            return true;
                                        if (
                                            event.filterCard(
                                                {
                                                    name: 'jydiy_yungongliaoshang',
                                                    cards: [i],
                                                },
                                                player,
                                                event
                                            ) &&
                                            event.filterTarget(
                                                {
                                                    name: 'jydiy_yungongliaoshang',
                                                    cards: [i],
                                                },
                                                player,
                                                current
                                            )
                                        )
                                            return true;
                                    }
                                }
                                return false;
                            }
                            return false;
                        });
                    },
                    chooseButton: {
                        select: 2,
                        dialog(event, player) {
                            var dialog = ui.create.dialog('押质', 'hidden');
                            var list = [];
                            if (
                                game.hasPlayer(function (current) {
                                    var cards = current.getExpansions('ldj_yazhi');
                                    if (current != player && cards.length) {
                                        for (var i of cards) {
                                            var color = get.color(i);
                                            if (color == 'black') {
                                                if (
                                                    event.filterCard(
                                                        {
                                                            name: 'sha',
                                                            cards: [i],
                                                        },
                                                        player,
                                                        event
                                                    ) &&
                                                    event.filterTarget(
                                                        {
                                                            name: 'sha',
                                                            cards: [i],
                                                        },
                                                        player,
                                                        current
                                                    )
                                                )
                                                    return true;
                                            }
                                        }
                                        return false;
                                    }
                                    return false;
                                })
                            ) {
                                list.push(['基本', '', 'sha']);
                                for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                            }
                            if (
                                game.hasPlayer(function (current) {
                                    var cards = current.getExpansions('ldj_yazhi');
                                    if (current != player && cards.length) {
                                        for (var i of cards) {
                                            var color = get.color(i);
                                            if (color == 'red' && event.type == 'phase') {
                                                if (
                                                    event.filterCard(
                                                        {
                                                            name: 'lebu',
                                                            cards: [i],
                                                        },
                                                        player,
                                                        event
                                                    ) &&
                                                    event.filterTarget(
                                                        {
                                                            name: 'lebu',
                                                            cards: [i],
                                                        },
                                                        player,
                                                        current
                                                    )
                                                )
                                                    return true;
                                            }
                                        }
                                        return false;
                                    }
                                    return false;
                                })
                            )
                                list.push(['锦囊', '', 'lebu']);
                            if (
                                game.hasPlayer(function (current) {
                                    var cards = current.getExpansions('ldj_yazhi');
                                    if (current != player && cards.length) {
                                        for (var i of cards) {
                                            var color = get.color(i);
                                            if (color == 'red' && event.type == 'phase') {
                                                if (
                                                    event.filterCard(
                                                        {
                                                            name: 'jydiy_yungongliaoshang',
                                                            cards: [i],
                                                        },
                                                        player,
                                                        event
                                                    ) &&
                                                    event.filterTarget(
                                                        {
                                                            name: 'jydiy_yungongliaoshang',
                                                            cards: [i],
                                                        },
                                                        player,
                                                        current
                                                    )
                                                )
                                                    return true;
                                            }
                                        }
                                        return false;
                                    }
                                    return false;
                                })
                            )
                                list.push(['锦囊', '', 'jydiy_yungongliaoshang']);
                            dialog.add([list, 'vcard']);
                            var players = game.filterPlayer(function (current) {
                                var cards = current.getExpansions('ldj_yazhi');
                                return current != player && cards.length;
                            });
                            for (var i of players) {
                                dialog.addText('【' + get.translation(i) + '】的质');
                                var map = i.getExpansions('ldj_yazhi');
                                dialog.add(map);
                            }
                            return dialog;
                        },
                        filter(button, player) {
                            var player = _status.event.player;
                            var evt = _status.event.getParent('chooseToUse');
                            if (!ui.selected.buttons.length) {
                                if (get.itemtype(button.link) != 'card') return false;
                                var target = game.findPlayer(function (current) {
                                    var cards = current.getExpansions('ldj_yazhi');
                                    return current != player && cards.includes(button.link);
                                });
                                if (target) {
                                    var color = get.color(button.link);
                                    if (color == 'red' && evt.type == 'phase') {
                                        if (
                                            evt.filterCard(
                                                {
                                                    name: 'jydiy_yungongliaoshang',
                                                    cards: [button.link],
                                                },
                                                player,
                                                evt
                                            ) &&
                                            evt.filterTarget(
                                                {
                                                    name: 'jydiy_yungongliaoshang',
                                                    cards: [button.link],
                                                },
                                                player,
                                                target
                                            )
                                        )
                                            return true;
                                        if (
                                            evt.filterCard(
                                                {
                                                    name: 'lebu',
                                                    cards: [button.link],
                                                },
                                                player,
                                                evt
                                            ) &&
                                            evt.filterTarget(
                                                {
                                                    name: 'lebu',
                                                    cards: [button.link],
                                                },
                                                player,
                                                target
                                            )
                                        )
                                            return true;
                                    }
                                    if (color == 'black') {
                                        if (
                                            evt.filterCard(
                                                {
                                                    name: 'sha',
                                                    cards: [button.link],
                                                },
                                                player,
                                                evt
                                            ) &&
                                            evt.filterTarget(
                                                {
                                                    name: 'sha',
                                                    cards: [button.link],
                                                },
                                                player,
                                                target
                                            )
                                        )
                                            return true;
                                    }
                                    return false;
                                }
                                return false;
                            } else {
                                if (get.itemtype(ui.selected.buttons[0].link) != 'card') return false;
                                //game.log('card11')
                                if (get.itemtype(button.link) == 'card') return false;
                                //game.log('card21')
                                var target = game.findPlayer(function (current) {
                                    var cards = current.getExpansions('ldj_yazhi');
                                    return current != player && cards.includes(ui.selected.buttons[0].link);
                                });
                                //game.log('11111111')
                                var name = button.link[2];
                                if (target) {
                                    //game.log('2222222')
                                    var color = get.color(ui.selected.buttons[0].link);
                                    if (color == 'red' && evt.type == 'phase') {
                                        //return name=='jydiy_yungongliaoshang'||name=='lebu';
                                        if (
                                            evt.filterCard(
                                                {
                                                    name: 'jydiy_yungongliaoshang',
                                                    cards: [ui.selected.buttons[0].link],
                                                },
                                                player,
                                                evt
                                            ) &&
                                            name == 'jydiy_yungongliaoshang' &&
                                            evt.filterTarget(
                                                {
                                                    name: 'jydiy_yungongliaoshang',
                                                    cards: [ui.selected.buttons[0].link],
                                                },
                                                player,
                                                target
                                            )
                                        )
                                            return true;
                                        if (
                                            evt.filterCard(
                                                {
                                                    name: 'lebu',
                                                    cards: [ui.selected.buttons[0].link],
                                                },
                                                player,
                                                evt
                                            ) &&
                                            name == 'lebu' &&
                                            evt.filterTarget(
                                                {
                                                    name: 'lebu',
                                                    cards: [ui.selected.buttons[0].link],
                                                },
                                                player,
                                                target
                                            )
                                        )
                                            return true;
                                    }
                                    if (color == 'black') {
                                        //return name=='sha';
                                        if (
                                            evt.filterCard(
                                                {
                                                    name: 'sha',
                                                    cards: [ui.selected.buttons[0].link],
                                                },
                                                player,
                                                evt
                                            ) &&
                                            evt.filterTarget(
                                                {
                                                    name: 'sha',
                                                    cards: [ui.selected.buttons[0].link],
                                                },
                                                player,
                                                target
                                            )
                                        )
                                            return true;
                                    }
                                    return false;
                                }
                                return false;
                            }
                        },
                        check(button) {
                            var player = _status.event.player;
                            if (ui.selected.buttons.length) {
                                var target = game.findPlayer(function (current) {
                                    var cards = current.getExpansions('ldj_yazhi');
                                    return current != player && cards.includes(ui.selected.buttons[0].link);
                                });
                                var name = button.link[2];
                                return get.effect(
                                    target,
                                    {
                                        name: name,
                                        cards: [ui.selected.buttons[0].link],
                                    },
                                    player,
                                    player
                                );
                            }
                            return 1 + Math.random();
                        },
                        backup(links) {
                            var card = links[0];
                            var name = links[1][2];
                            var nature = links[1][3];
                            var next = {
                                cardx: card,
                                filterCard() {
                                    return false;
                                },
                                selectCard: -1,
                                complexCard: true,
                                check() {
                                    return 1;
                                },
                                popname: true,
                                viewAs: {
                                    name: name,
                                    nature: nature,
                                    cards: [card],
                                },
                                filterTarget(card, player, target) {
                                    var source = game.findPlayer(function (current) {
                                        var cards = current.getExpansions('ldj_yazhi');
                                        return current != player && cards.includes(links[0]);
                                    });
                                    var evt = _status.event;
                                    //if(target!=source) return false;
                                    if (target != source && !ui.selected.targets.includes(source)) return false;
                                    if (evt._backup && evt._backup.filterTarget) return evt._backup.filterTarget(card, player, target);
                                    return lib.filter.filterTarget(card, player, target);
                                },
                                complexTarget: true,
                                complexSelect: true,
                                precontent() {
                                    'step 0';
                                    var card = event.result.card.cards[0];
                                    event.result.cards = [card];
                                    var source = game.findPlayer(function (current) {
                                        var cards = current.getExpansions('ldj_yazhi');
                                        return current != player && cards.includes(card);
                                    });
                                },
                            };
                            return next;
                        },
                        prompt(links) {
                            var card = links[0];
                            var name = links[1][2];
                            var nature = links[1][3];
                            return (
                                '将一张质' +
                                get.translation(card) +
                                '当做' +
                                get.translation({
                                    name: name,
                                    nature: nature,
                                }) +
                                '使用'
                            );
                        },
                    },
                    ai: {
                        order() {
                            return 1;
                        },
                        result: {
                            player: 1,
                        },
                    },
                },
                ///押质
                ldj_yazhi2: {
                    charlotte: true,
                },
                ldj_yazhi3: {
                    charlotte: true,
                },
                ldj_yazhi: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'damageEnd',
                    },
                    check(event, player) {
                        if (get.attitude(player, event.player) < 0) return false;
                        if (get.attitude(player, event.source) > 0) return false;
                        return true;
                    },
                    filter(event, player) {
                        if (player.hasSkill('ldj_yazhi3')) return false;
                        return event.source && event.player != event.source && event.source.isIn() && event.player.isIn() && event.source.countCards('h');
                    },
                    content() {
                        'step 0';
                        if (!player.hasSkill('ldj_yazhi2')) {
                            player.addTempSkill('ldj_yazhi2', 'roundStart');
                        } else {
                            player.addTempSkill('ldj_yazhi3', 'roundStart');
                        }
                        player.line([trigger.source, trigger.player], 'fire');
                        player.choosePlayerCard(trigger.source, 'h', true);
                        ('step 1');
                        if (result.bool) {
                            player.addToExpansion(result.links, 'log', 'give', trigger.source).gaintag.add('ldj_yazhi');
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        trigger.player.draw();
                        ('step 3');
                        if (trigger.source.countCards('h') == trigger.player.countCards('h')) player.draw();
                    },
                    mark: true,
                    marktext2: '质',
                    markimage: 'extension/金庸群侠传/image/icon/jy_icon_yazhi.jpg',
                    intro: {
                        content: 'expansion',
                        markcount: 'expansion',
                    },
                    onremove(player, skill) {
                        var cards = player.getExpansions(skill);
                        if (cards.length) player.loseToDiscardpile(cards);
                    },
                },
                //韦小宝建宁:豪赌、冤孽
                ldj_haodu: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'phaseZhunbeiBegin',
                    },
                    forced: true,
                    filter(event, player) {
                        return game.hasPlayer(function (target) {
                            return lib.skill.ldj_haodu.canCompare(player, target);
                        });
                    },
                    canCompare(player, target) {
                        if (player == target) return false;
                        if (player.hasSkillTag('noCompareSource') || target.hasSkillTag('noCompareTarget')) return false;
                        return true;
                    },
                    content() {
                        'step 0';
                        player.chooseTarget(
                            get.prompt2('ldj_haodu'),
                            function (card, player, target) {
                                return lib.skill.ldj_haodu.canCompare(player, target);
                            },
                            function (target) {
                                return 1;
                                //return get.attitude(get.player(),target)<0;
                            }
                        );
                        ('step 1');
                        if (result.bool) {
                            event.target = result.targets[0];
                        } else event.finish();
                        ('step 2');
                        //by 咸鱼大佬
                        event.cot = 3;
                        event.winnered = 0;
                        event.cs1 = get.cards(3);
                        game.cardsGotoOrdering(event.cs1);
                        event.cs2 = get.cards(3);
                        game.cardsGotoOrdering(event.cs2);
                        player.showCards(event.cs1, '<img style=width:150px src=extension/金庸群侠传/image/button/jy_button_haoduzhuangjia.jpg>');
                        ('step 3');
                        target.showCards(event.cs2, '<img style=width:150px src=extension/金庸群侠传/image/button/jy_button_haoduduijia.jpg>');
                        //依次展示
                        ('step 4');
                        player.chooseCardButton('<img style=width:150px src=extension/金庸群侠传/image/button/jy_button_haodumaidinglishou.jpg><br>请选择三张拼点牌的顺序(先选先拼)', event.cs1, 3, true).set('ai', function (b) {
                            return Math.random();
                        });
                        ('step 5');
                        event.res1 = result.links;
                        target.chooseCardButton('<img style=width:150px src=extension/金庸群侠传/image/button/jy_button_haodumaidinglishou.jpg><br>请选择三张拼点牌的顺序(先选先拼)', event.cs2, 3, true).set('ai', function (b) {
                            return Math.random();
                        });
                        ('step 6');
                        event.res2 = result.links;
                        ('step 7');
                        //防止某些于拼点时机摸牌的命令 故不置回牌堆
                        event.playerCard = event.res1.shift();
                        event.targetCard = event.res2.shift();
                        var next = player.chooseToCompare(target);
                        next.fixedResult = {};
                        next.fixedResult[player.playerid] = event.playerCard;
                        next.fixedResult[target.playerid] = event.targetCard;
                        ('step 8');
                        if (result.bool && result.winner && result.winner == player) {
                            event.winnered++;
                            if (result.player && get.position(result.player, true) == 'o') {
                                player.gain(result.player, 'gain2');
                            }
                        }
                        event.cot--;
                        if (event.cot > 0) event.goto(7);
                        ('step 9');
                        if (event.winnered == 3) {
                            player.addTempSkills('qtpz_zhitou');
                        } else if (event.winnered == 2) {
                            player.addTempSkills('qtpz_ningxue');
                        } else if (event.winnered == 1) {
                            if (lib.config.extension_金庸群侠传_jiexiantupo) {
                                player.addTempSkills('ldj_zhuxin');
                            }
                        } else if (event.winnered == 0) {
                            player.popup('杯具');
                            var dis = player.getCards('e');
                            if (dis.length) player.discard(dis);
                        }
                    },
                },
                ldj_yuannie: {
                    enable: 'phaseUse',
                    usable: 1,
                    audio: 'ext:金庸群侠传/peiyin:3',
                    filter(event, player) {
                        return game.hasPlayer(function (target) {
                            var list = lib.inpile.filter(function (c) {
                                return get.type(c) == 'trick';
                            });
                            return (
                                player != target &&
                                target.countCards('h', function (card) {
                                    return list.filter(function (i) {
                                        return target.hasUseTarget({ name: i, cards: [card] });
                                    }).length;
                                })
                            );
                        });
                    },
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    filterTarget(card, player, target) {
                        var list = lib.inpile.filter(function (c) {
                            return get.type(c) == 'trick';
                        });
                        return (
                            player != target &&
                            target.countCards('h', function (card) {
                                return list.filter(function (i) {
                                    return target.hasUseTarget({ name: i, cards: [card] });
                                }).length;
                            })
                        );
                    },
                    content() {
                        'step 0';
                        var list = lib.inpile.filter(function (c) {
                            return (
                                get.type(c) == 'trick' &&
                                target.countCards('h', function (card) {
                                    return target.hasUseTarget({ name: c, cards: [card] });
                                })
                            );
                        });
                        for (var i = 0; i < list.length; i++) {
                            list[i] = ['锦囊', '', list[i]];
                        }
                        player
                            .chooseButton(true, ['请声明一张可用的普通锦囊', [list, 'vcard']])
                            .set('ai', function (button) {
                                var att = get.attitude(_status.event.player, _status.event.targetx);
                                var card = { name: button.link[2] };
                                return _status.event.targetx.getUseValue(card) * att;
                            })
                            .set('targetx', target);
                        ('step 1');
                        if (result.bool) {
                            event.cardx = { name: result.links[0][2] };
                            game.log(player, '声明了', event.cardx);
                            lib.skill.ldj_yuannie_use.viewAs = event.cardx;
                            var next = target.chooseToUse();
                            if (next.isOnline()) {
                                player.send(function (card) {
                                    lib.skill.ldj_yuannie_use.viewAs = card;
                                }, event.cardx);
                            }
                            next.set('openskilldialog', '冤孽:是否将一张手牌当' + get.translation(event.cardx) + '使用？若使用,其失去一点体力,否则你弃置区域的内的一张牌.');
                            next.set('norestore', true);
                            next.set('_backupevent', 'ldj_yuannie_use');
                            next.set('custom', {
                                add: {},
                                replace: {
                                    window() { },
                                },
                            });
                            next.backup('ldj_yuannie_use');
                        } else event.finish();
                        ('step 2');
                        if (result.bool) {
                            player.loseHp();
                        } else if (target.countDiscardableCards(target, 'hej')) target.discardPlayerCard(target, 'hej', true);
                    },
                    ai: {
                        order: 8,
                        result: {
                            target(player, target) {
                                var bool = get.attitude(player, target) > 0;
                                if (bool) {
                                    return get.effect(target, { name: 'guohe_copy' }, player, player) > 0 ? 1 : 0;
                                } else {
                                    return get.effect(target, { name: 'guohe_copy' }, player, player) > 0 ? -1 : 0;
                                }
                            },
                        },
                        threaten: 1,
                    },
                    subSkill: {
                        use: {
                            filterCard(card, player) {
                                return get.itemtype(card) == 'card';
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (player.countDiscardableCards(player, 'hej') && lib.card.guohe.ai.result.target(player, player) > 0) return -1;
                                if (!player.countDiscardableCards(player, 'hej')) return -1;
                                return 10 - get.value(card);
                            },
                            log: false,
                            selectCard: 1,
                            popname: true,
                            charlotte: true,
                            fixed: true,
                        },
                    },
                },
                //胖瘦头陀开始:毒变、复命
                ldj_dubian: {
                    init(player, skill) {
                        player.storage[skill] = true;
                        player.unmarkSkill('ldj_dubian_b');
                        player.markSkill('ldj_dubian_a');
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'phaseDrawBegin1',
                    },
                    forced: true,
                    filter(event, player) {
                        return !event.numFixed;
                    },
                    content() {
                        var num = player.storage.ldj_dubian ? player.getDamagedHp() : player.hp;
                        var str = player.storage.ldj_dubian ? 'a' : 'b';
                        player.unmarkSkill('ldj_dubian_' + str);
                        player.addTempSkill('ldj_dubian_' + (str == 'a' ? 'c' : 'd'));
                        player.markSkill('ldj_dubian_' + (str == 'a' ? 'b' : 'a'));
                        player.storage.ldj_dubian = !player.storage.ldj_dubian;
                        trigger.changeToZero();
                        if (num > 0) player.draw(num);
                    },
                    subSkill: {
                        a: {
                            marktext2: '毒',
                            markimage: 'extension/金庸群侠传/image/icon/jytaixuanying.jpg',
                            intro: { content: '摸牌阶段开始时,你改为摸已损失体力值数量的牌,且本回合使用牌无距离限制.' },
                        },
                        b: {
                            marktext2: '毒',
                            markimage: 'extension/金庸群侠传/image/icon/jytaixuanyang.jpg',
                            intro: { content: '摸牌阶段开始时,你改为摸当前体力值数量的牌,且本回合手牌上限基数改为已损失体力值.' },
                        },
                        c: {
                            mod: {
                                targetInRange(card, player, target) {
                                    return true;
                                },
                            },
                        },
                        d: {
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.getDamagedHp();
                                },
                            },
                        },
                    },
                },
                ldj_fuming: {
                    enable: 'phaseUse',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    usable: 1,
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    filter(event, player) {
                        return (
                            player.countCards('h') &&
                            game.hasPlayer(function (target) {
                                return player != target; //&&!player.storage.ldj_fuming.includes(target);
                            })
                        );
                    },
                    filterTarget(card, player, target) {
                        return player != target; //&&!player.storage.ldj_fuming.includes(target);
                    },
                    content() {
                        'step 0';
                        //player.storage.ldj_fuming.push(target);
                        //player.markSkill("ldj_fuming");
                        target
                            .chooseControl('basic', 'trick', 'equip', true)
                            .set('ai', function (event, player) {
                                var basic = false;
                                var trick = false;
                                var equip = false;
                                event.player.countCards('h', function (i) {
                                    var type = get.type2(i);
                                    if (type == 'basic') basic = true;
                                    if (type == 'trick') trick = true;
                                    if (type == 'equip') equip = true;
                                });
                                if (get.attitude(event.player, player) > 0) {
                                    if (basic) return 'basic';
                                    if (trick) return 'trick';
                                    if (equip) return 'equip';
                                } else {
                                    if (!basic) return 'basic';
                                    if (!trick) return 'trick';
                                    if (!equip) return 'equip';
                                }
                                return ['basic', 'trick', 'equip'].randomGet();
                            })
                            .set('prompt', '请选择令' + get.translation(player) + '交给你一张牌');
                        ('step 1');
                        var type = result.control;
                        player
                            .chooseCard('请交给' + get.translation(target) + '一张手牌,若为' + get.translation(type) + '牌,你回复一点体力,否则你失去一点体力.', true)
                            .set('ai', function (card) {
                                var player = _status.event.player;
                                var cardType = _status.event.cardType;
                                if (get.type2(card) == cardType) return 30 - get.value(card);
                                return 7 - get.value(card);
                            })
                            .set('cardType', type);
                        event.r1 = type;
                        ('step 2');
                        player.give(result.cards, target, 'visible');
                        event.r2 = get.type2(result.cards[0]);
                        ('step 3');
                        if (event.r1 == event.r2) player.recover();
                        else player.loseHp();
                    },
                    ai: {
                        order: 2,
                        result: {
                            target(player, target) {
                                if (player.needsToDiscard() || player.isDamaged()) {
                                    return 1;
                                }
                                return 0;
                                //return get.attitude(player,target);
                            },
                        },
                    },
                },
                //胖瘦头陀结束
                qtpz_xianguan: {
                    subSkill: {
                        two: {
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (_status.currentPhase != player) return;
                                        if (!player.storage.qtpz_xianguan_two) return;
                                        if (card.name != 'tao' && target == player.storage.qtpz_xianguan_two) return [10, 0];
                                    },
                                },
                            },
                            mod: {
                                globalFrom(from, to) {
                                    if (from.storage.qtpz_xianguan_two && from.storage.qtpz_xianguan_two == to) return -Infinity;
                                },
                            },
                            onremove(player) {
                                delete player.storage.qtpz_xianguan_two;
                                delete player.storage.qtpz_xianguan_source;
                            },
                            intro: {
                                content: '献关',
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            audio: 'ext:金庸群侠传/peiyin:2',
                            forced: true,
                            filter(event, player) {
                                if (player.storage.qtpz_xianguan_source && player.storage.qtpz_xianguan_source.isIn()) {
                                    return event.targets && event.targets.includes(player.storage.qtpz_xianguan_two);
                                }
                                return false;
                            },
                            content() {//QQQ
                                'step 0';
                                game.log(player.storage.qtpz_xianguan_source, '献关效果被触发');
                                ('step 1');
                                player.storage.qtpz_xianguan_source
                                    .chooseBool('献关<br>是否令' + get.translation(player) + '获得摸一张牌?否则你摸一张牌')
                                    .set('ai', function () {
                                        var player0 = _status.event.player;
                                        var targets0 = _status.event.targets0;
                                        if (player0.countCards('h') >= player0.hp && get.attitude(targets0, player0) > 0) return true;
                                        return false;
                                    })
                                    .set('targets0', player);
                                ('step 2');
                                if (result.bool) {
                                    player.storage.qtpz_xianguan_source.line(player, 'green');
                                    game.log(player.storage.qtpz_xianguan_source, '令', player, '摸一张牌');
                                    player.draw();
                                } else {
                                    player.storage.qtpz_xianguan_source.draw();
                                }
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'phaseZhunbeiBefore' },
                    forced: true,
                    _priority: 5,
                    filter(event, player) {
                        if (event.player == player) return false;
                        if (player.countCards('h') == 0) return false;
                        return true;
                    },
                    content() {
                        'step 0';
                        player.chooseCardTarget({
                            position: 'h',
                            filterCard: lib.filter.cardDiscardable,
                            filterTarget(card, player, target) {
                                var trigger = _status.event.getTrigger();
                                return target != trigger.player;
                            },
                            ai1(card) {
                                return 7 - get.value(card);
                            },
                            ai2(target) {
                                var trigger = _status.event.getTrigger();
                                var att1 = get.attitude(_status.event.player, trigger.player);
                                var att2 = -get.attitude(_status.event.player, target);
                                if (att1 > 0 && !trigger.player.hasJudge('lebu')) return att2;
                                return -1;
                            },
                            prompt: get.prompt2('qtpz_xianguan'),
                        });
                        ('step 1');
                        if (result.bool) {
                            player.discard(result.cards);
                            var target = result.targets[0];
                            trigger.player.storage.qtpz_xianguan_two = target;
                            trigger.player.storage.qtpz_xianguan_source = player;
                            trigger.player.addTempSkill('qtpz_xianguan_two');
                        }
                    },
                },
                qtpz_fanluan: {
                    subSkill: {
                        sha: {
                            mod: {
                                cardUsable(card, player, num) {
                                    var num2 = game.countPlayer(function (current) {
                                        return current.getEquip(1);
                                    });
                                    if (card.name == 'sha') return num + num2;
                                },
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    marktext2: '藩',
                    markimage: 'extension/金庸群侠传/image/icon/jyfanluan.jpg',
                    mark: true,
                    init(player) {
                        player.storage.qtpz_fanluan = false;
                    },
                    intro: {
                        content: 'limited',
                    },
                    trigger: { player: 'phaseUseBegin' },
                    check(event, player) {
                        if (player.countCards('h', 'sha') < 3) return false;
                        if (!player.hasSha()) return false;
                        var num = game.countPlayer(function (current) {
                            return current.getEquip(1);
                        });
                        if (num > 1)
                            return game.hasPlayer(function (current) {
                                return get.attitude(player, current) < 0 && player.canUse('sha', current);
                            });
                        return false;
                    },
                    filter(event, player) {
                        if (player.storage.qtpz_fanluan) return false;
                        return game.hasPlayer(function (current) {
                            return current.getEquip(1);
                        });
                    },
                    content() {
                        player.addTempSkill('qtpz_fanluan_sha', 'phaseEnd');
                        player.storage.qtpz_fanluan = true;
                        player.awakenSkill('qtpz_fanluan');
                    },
                },
                qtpz_dayin: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: ['useCard', 'respond'],
                    },
                    check(event, player) {
                        return get.attitude(player, event.player) <= 0;
                    },
                    filter(event, player) {
                        var respondTo = event.respondTo;
                        if (!respondTo) return false;
                        if (event.player == player) return false;
                        if (respondTo[0] == player) {
                            return event.parent.result && event.parent.result.bool;
                        }
                        return false;
                    },
                    logTarget: 'player',
                    content() {
                        'step 0';
                        var str = '是否弃置一张牌?否则你' + (trigger.name == 'useCard' ? '使用的' : '打出的') + get.translation(trigger.card) + '无效!';
                        trigger.player.chooseToDiscard('大印', str).set('ai', function (card) {
                            if (card.name == 'tao') return -10;
                            if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
                            return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
                        });
                        ('step 1');
                        if (result.bool == false) {
                            trigger.parent.result.bool = false;
                            if (trigger.name == 'useCard') {
                                trigger.targets.length = 0;
                                trigger.all_excluded = true;
                            }
                        }
                    },
                },
                qtpz_mizong: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                },
                qtpz_xiangfu: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'discardAfter' },
                    logTarget: 'player',
                    check(event, player) {
                        if (event.player.hasSkillTag('nogain')) return false;
                        var att = get.attitude(player, event.player),
                            num = 0,
                            name = event.getParent(3).name;
                        if (att <= 0) return false;
                        if (player.hp <= 1) return false;
                        var togain = event.cards.filterInD('od');
                        for (var i = 0; i < togain.length; i++) {
                            if (togain[i].name != 'du') {
                                if (togain[i].name == 'tao') {
                                    num += 2;
                                } else {
                                    num++;
                                }
                            } else {
                                num -= 2;
                            }
                        }
                        if (name == 'phaseDiscard') return num > 2;
                        return num > 3;
                    },
                    filter(event, player) {
                        if (!event.player.isIn()) return false;
                        if (event.player == player) return false;
                        var num = player.getHistory('custom', function (evt) {
                            return evt.qtpz_xiangfu && evt.qtpz_xiangfu == event.player;
                        }).length;
                        if (num > 0) return false;
                        var togain = event.cards.filterInD('od');
                        return togain.length;
                    },
                    content() {
                        'step 0';
                        var togain = trigger.cards.filterInD('od');
                        player.getHistory('custom').push({ qtpz_xiangfu: trigger.player });
                        trigger.player.gain(togain, 'gain2', 'log');
                        ('step 1');
                        player.loseHp(1);
                    },
                },
                qtpz_kangli: {
                    subSkill: {
                        off: {
                            mark: true,
                            marktext2: '伉',
                            markimage: 'extension/金庸群侠传/image/icon/jy_avatar_kangli.jpg',
                            intro: {
                                content: '你本轮已发动【伉俪】.',
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    logTarget: 'player',
                    trigger: { global: 'gainEnd' },
                    check(event, player) {
                        return event.cards && event.cards.length >= 2;
                    },
                    filter(event, player) {
                        if (player.hasSkill('qtpz_kangli_off')) return false;
                        if (event.player == player) return false;
                        return event.cards && event.cards.length;
                    },
                    content() {
                        'step 0';
                        player.addTempSkill('qtpz_kangli_off', 'roundStart');
                        trigger.player.chooseBool('伉俪<br>是否令' + get.translation(player) + '摸' + trigger.cards.length + '张牌？否则你弃置你获得的牌').set('ai', function () {
                            if (get.attitude(trigger.player, player) >= 0) return true;
                            if (trigger.cards.length == 1 && get.value(trigger.cards[0]) < 6) return false;
                            return true;
                        });
                        ('step 1');
                        if (result.bool) {
                            player.draw(trigger.cards.length);
                        } else {
                            var dis = trigger.player.getCards('he', function (card) {
                                return trigger.cards.includes(card);
                            });
                            if (dis.length) {
                                trigger.player.discard(dis);
                            }
                        }
                    },
                },
                qtpz_luanwei: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    marktext2: '乱',
                    markimage: 'extension/金庸群侠传/image/icon/jyluanwei.jpg',
                    mark: true,
                    intro: {
                        mark(dialog, storage, player) {
                            if (!storage.length) return '无';
                            var list = [];
                            for (var i = 0; i < storage.length; i++) {
                                list.push(['锦囊', '', storage[i]]);
                            }
                            dialog.addAuto([list, 'vcard']);
                        },
                        markcount(storage, player) {
                            return storage.length;
                        },
                    },
                    init(player, skill) {
                        if (!player.storage[skill]) player.storage[skill] = [];
                    },
                    check(event, player) {
                        var togive = event.cards.filterInD('od');
                        if (togive[0].name == 'du') return false;
                        var num = get.value(togive[0]) - 4;
                        return num > 0 || togive.length > 1;
                    },
                    logTarget: 'player',
                    trigger: {
                        global: 'useCardEnd',
                    },
                    filter(event, player) {
                        if (event.player == player) return false;
                        if (get.type(event.card) != 'trick') return false;
                        if (player.storage.qtpz_luanwei.includes(event.card.name)) return false;
                        return event.cards && event.cards.length && event.cards.filterInD('od').length;
                    },
                    content() {
                        'step 0';
                        event.togive = trigger.cards.filterInD('od');
                        trigger.player.chooseBool('乱闱<br>是否令' + get.translation(player) + '获得' + get.translation(event.togive) + '?否则你失去一点体力.').set('ai', function () {
                            if (get.attitude(trigger.player, player) > 0) return true;
                            if (get.attitude(trigger.player, player) < 0 && event.togive.length > 2) return false;
                            return true;
                        });
                        ('step 1');
                        if (result.bool) {
                            player.gain(event.togive, 'gain2', 'log');
                            player.storage.qtpz_luanwei.add(trigger.card.name);
                            player.markSkill('qtpz_luanwei');
                        } else {
                            trigger.player.loseHp(1);
                        }
                    },
                },
                qtpz_huagu: {
                    logTarget: 'player',
                    check(event, player) {
                        var num = 0;
                        for (var i = 0; i < event.targets.length; i++) {
                            var juese = event.targets[i];
                            var eff = get.effect(juese, event.card, event.player, player);
                            num += eff;
                        }
                        return num < 0;
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'useCard' },
                    filter(event, player) {
                        //if(event.card.name=='wuxie') return false;
                        //if(!event.targets||!event.targets.length) return false;
                        if (event.player == player) return false;
                        if (get.type(event.card) != 'trick' && get.type(event.card) != 'basic') return false;
                        return event.card.suit == 'spade';
                    },
                    content() {
                        'step 0';
                        trigger.player.judge(function (card) {
                            if (get.color(card) == 'black') return -1;
                            return 0;
                        }).judge2 = function (result) {
                            return result.bool;
                        };
                        ('step 1');
                        if (result.bool == false) {
                            game.log(trigger.player, '使用的', trigger.card, '因化骨无效');
                            //trigger.targets.length=0;
                            trigger.all_excluded = true;
                            trigger.excluded.addArray(game.filterPlayer());
                        }
                    },
                },
                qtpz_aozun: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: ['useCard', 'respond'],
                    },
                    filter(event, player) {
                        var respondTo = event.respondTo;
                        if (!respondTo) return false;
                        if (!event.cards || event.cards.length != 1) return false;
                        if (player == event.player && get.position(event.cards[0]) == 'd') {
                            if (get.itemtype(respondTo[1]) == 'card') {
                                return event.card.number > respondTo[1].number;
                            } else if (respondTo[1].cards && respondTo[1].cards.length == 1) {
                                return event.card.number > respondTo[1].cards[0].number;
                            } else return false;
                        } else if (respondTo[0] == player) {
                            if (get.itemtype(respondTo[1]) == 'card' && get.position(respondTo[1]) == 'd') {
                                return event.card.number < respondTo[1].number;
                            } else if (respondTo[1].cards && respondTo[1].cards.length == 1 && get.position(respondTo[1].cards[0]) == 'd') {
                                return event.card.number < respondTo[1].cards[0].number;
                            } else return false;
                        }
                        return false;
                    },
                    check(event, player) {
                        var respondTo = event.respondTo;
                        if (player == event.player) {
                            if (event.card.name == 'du') return false;
                            return true;
                        } else if (respondTo[0] == player) {
                            if (get.itemtype(respondTo[1]) == 'card' && respondTo[1].name == 'du') {
                                return false;
                            } else if (respondTo[1].cards && respondTo[1].cards.length == 1) {
                                if (respondTo[1].cards[0].name == 'du') return false;
                                return true;
                            }
                        }
                        return true;
                    },
                    content() {
                        var respondTo = trigger.respondTo;
                        var togain = null;
                        if (player == trigger.player) {
                            togain = trigger.cards;
                        } else if (respondTo[0] == player) {
                            if (get.itemtype(respondTo[1]) == 'card') {
                                togain = respondTo[1];
                            } else if (respondTo[1].cards && respondTo[1].cards) {
                                togain = respondTo[1].cards;
                            }
                        }
                        player.gain(togain, 'gain2', 'log');
                    },
                },
                qtpz_baotai: {
                    subSkill: {
                        draw: {
                            mark: true,
                            marktext2: '豹',
                            markimage: 'extension/金庸群侠传/image/icon/jy_avatar_baotai.jpg',
                            intro: {
                                content: '你下回合摸牌数减#.',
                            },
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            onremove(player) {
                                player.storage.qtpz_baotai_draw = 0;
                            },
                            _priority: 20,
                            forced: true,
                            filter(event, player) {
                                if (event.numFixed) return false;
                                if (player.storage.qtpz_baotai_draw && player.storage.qtpz_baotai_draw > 0) {
                                    return event.num > 0;
                                }
                                return false;
                            },
                            content() {
                                trigger.num -= player.storage.qtpz_baotai_draw;
                                if (trigger.num < 0) {
                                    trigger.num = 0;
                                }
                            },
                        },
                        lose: {
                            trigger: { player: ['loseEnd'] },
                            silent: true,
                            filter(event, player) {
                                if (event.getParent(2).name == 'qtpz_baotai') return false;
                                if (Array.isArray(event.cards)) for (var i of event.cards) {
                                    if (i.storage && i.storage.qtpz_baotai) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                var baotai = [],
                                    num = 0;
                                if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
                                    if (i.storage && i.storage.qtpz_baotai) {
                                        delete i.storage.yttl_qianwo;
                                        baotai.push(i);
                                        num++;
                                    }
                                }
                                if (num > 0) {
                                    player.showCards('豹胎<br>', baotai);
                                    if (trigger.parent.name == 'discard') {
                                        if (!player.hasSkill('qtpz_baotai_draw')) {
                                            player.addTempSkill('qtpz_baotai_draw', { player: 'phaseDrawEnd' });
                                        }
                                        if (player.storage.qtpz_baotai_draw == undefined) {
                                            player.storage.qtpz_baotai_draw = num;
                                        } else {
                                            player.storage.qtpz_baotai_draw += num;
                                        }
                                        player.markSkill('qtpz_baotai_draw');
                                    } else if (trigger.parent.name == 'useCard' || trigger.parent.name == 'respond') {
                                        player.loseHp(num);
                                    }
                                }
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    usable: 1,
                    filter(event, player) {
                        return player.countCards('h') > 0;
                    },
                    filterCard: true,
                    selectCard: [1, 2],
                    discard: false,
                    lose: false,
                    filterTarget(card, player, target) {
                        return player != target;
                    },
                    check(card) {
                        if (ui.selected.cards.length) return 0;
                        return 4 - get.value(card);
                    },
                    content() {
                        player.showCards('豹胎<br>', cards);
                        target.gain(cards, player, 'give', 'log').gaintag.add('qtpz_baotai');
                        if (Array.isArray(cards)) for (var i of cards) {
                            if (!i.storage) i.storage = {};
                            i.storage.qtpz_baotai = true;
                        }
                        target.addSkill('qtpz_baotai_lose');
                    },
                    ai: {
                        order: 1,
                        result: {
                            target(player, target) {
                                if (target.hasSkillTag('nogain')) return 0;
                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                    if (target.hasSkillTag('nodu')) return 0;
                                    return -10;
                                }
                                if (target.hasJudge('lebu')) return -2;
                                return -0.5;
                            },
                        },
                        threaten: 0.8,
                    },
                },
                qtpz_zhitou: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'phaseUseBegin',
                    },
                    forced: true,
                    content() {
                        'step 0';
                        event.cards = get.cards(1);
                        player.showCards(event.cards, '掷骰');
                        ('step 1');
                        var number = event.cards[0].number;
                        if (number > 7) {
                            player.addTempSkill('qtpz_zhitou_dayu');
                        } else if (number < 7) {
                            player.addTempSkill('qtpz_zhitou_xiaoyu');
                        } else if (number == 7) {
                            player.addTempSkill('qtpz_zhitou_dengyu');
                        }
                        ('step 2');
                        ui.cardPile.insertBefore(event.cards[0], ui.cardPile.firstChild);
                    },
                    subSkill: {
                        dayu: {
                            trigger: {
                                player: 'useCard',
                            },
                            audio: 'ext:金庸群侠传/peiyin:2',
                            forced: true,
                            filter(event, player) {
                                return event.card.number && event.card.number > 7;
                            },
                            content() {
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (card.number > 7) return [1, 0.5];
                                    },
                                },
                            },
                        },
                        xiaoyu: {
                            audio: 'ext:金庸群侠传/peiyin:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.number && event.card.number < 7;
                            },
                            content() {
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (card.number < 7) return [1, 0.5];
                                    },
                                },
                            },
                        },
                        dengyu: {
                            audio: 'ext:金庸群侠传/peiyin:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                    },
                },
                qtpz_wangfu: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    filter(event, player) {
                        if (!player.countCards('h')) return false;
                        return (
                            game.countPlayer(function (current) {
                                return current != player && current.hasSex('male') && current.countCards('h');
                            }) > 0
                        );
                    },
                    usable: 1,
                    filterTarget(card, player, target) {
                        return player != target && target.countCards('h') && target.hasSex('male');
                    },
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    content() {
                        'step 0';
                        var str = '望夫:是否交换一张手牌？';
                        var dialog = ui.create.dialog(str, 'hidden');
                        dialog.addText('【' + get.translation(player) + '】的手牌');
                        dialog.add(player.getCards('h'));
                        dialog.addText('【' + get.translation(targets[0]) + '】的手牌');
                        dialog.add(targets[0].getCards('h'));
                        targets[0]
                            .chooseButton(dialog, 2)
                            .set('filterButton', function (button) {
                                for (var i = 0; i < ui.selected.buttons.length; i++) {
                                    var owner = get.owner(ui.selected.buttons[i].link);
                                    if (owner == get.owner(button.link)) return false;
                                }
                                return true;
                            })
                            .set('ai', function (button) {
                                var owner = get.owner(button.link);
                                if (owner == targets[0]) {
                                    return 9 - get.value(button.link);
                                } else {
                                    return get.value(button.link);
                                }
                                return -1;
                            });
                        ('step 1');
                        if (result.bool) {
                            var list = result.links;
                            for (var i = 0; i < list.length; i++) {
                                var owner = get.owner(list[i]);
                                if (owner == player) {
                                    player.give(list[i], targets[0], true);
                                    //player.$give(1,targets[0]);
                                    //targets[0].gain(list[i],player,'');
                                } else {
                                    targets[0].give(list[i], player, true);
                                    //targets[0].$give(1,player);
                                    //player.gain(list[i],targets[0]);
                                }
                            }
                        }
                    },
                    ai: {
                        order: 1,
                        result: {
                            target(player, target) {
                                return target.countCards('h');
                            },
                        },
                        threaten: 1.1,
                    },
                },
                qtpz_fenji: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'phaseDrawEnd' },
                    check(event, player) {
                        var att = get.attitude(player, event.player);
                        if (att > 0) return true;
                        if (att <= 0) {
                            if (!event.player.canUse({ name: 'huogong' }, player)) return true;
                            if (event.player.countCards('h') < 4) return true;
                        }
                        return false;
                    },
                    filter(event, player) {
                        if (event.player == player) return false;
                        return event.player.countCards('h') >= 2;
                    },
                    logTarget: 'player',
                    content() {
                        'step 0';
                        event.hs = trigger.player.getCards('h');
                        event.hs1 = event.hs.randomGets(2);
                        ('step 1');
                        player.showCards(event.hs1);
                        ('step 2');
                        if (event.hs1[0].suit != event.hs1[1].suit) {
                            if (trigger.player.canUse({ name: 'huogong' }, player)) {
                                trigger.player.useCard({ name: 'huogong' }, player);
                            }
                        } else {
                            player.loseMaxHp();
                        }
                    },
                    ai: {
                        threaten: 1.2,
                    },
                },
                //优化版化尸--霸天20220618
                ldj_huashi: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'phaseUseBegin',
                    },
                    forced: true,
                    filter(event, player) {
                        if (event.player == player) return false;
                        return true;
                    },
                    content() {
                        'step 0';
                        player
                            .chooseControl('spade', 'heart', 'diamond', 'club', 'cancel2')
                            .set('prompt', get.prompt2(event.name, trigger.player))
                            .set('ai', function () {
                                var trigger = _status.event.getTrigger();
                                var player = _status.event.player;
                                if (player.maxHp < 3) return 'cancel2';
                                if (player.maxHp - player.hp < 3) return 'cancel2';
                                if (get.attitude(player, trigger.player) >= 0) return 'cancel2';
                                var list = ['spade', 'diamond', 'club', 'heart'];
                                var count = function (suit) {
                                    return trigger.player.countCards('hs', function (card) {
                                        var suitx = card.suit;
                                        if (suitx != suit) return false;
                                        return trigger.player.getUseValue(card) > 0;
                                    });
                                };
                                list.sort(function (a, b) {
                                    return count(b) - count(a);
                                });
                                if (count(list[0]) < 3) return 'cancel2';
                                return list[0];
                            });
                        ('step 1');
                        if (result.control != 'cancel2') {
                            player.loseMaxHp();
                            trigger.player.addTempSkill(event.name + '_' + result.control);
                        }
                    },
                    subSkill: {
                        heart: {
                            mark: true,
                            marktext: '♥️️️',
                            charlotte: true,
                            intro: {
                                content: '你中了化尸水,你本回合不能使用或打出♥️️️牌.',
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.suit == 'heart') return false;
                                },
                                cardUsable(card, player) {
                                    if (card.suit == 'heart') return false;
                                },
                                cardRespondable(card, player) {
                                    if (card.suit == 'heart') return false;
                                },
                                cardSavable(card, player) {
                                    if (card.suit == 'heart') return false;
                                },
                                targetInRange(card) {
                                    if (card.suit == 'heart') return false;
                                },
                            },
                        },
                        diamond: {
                            mark: true,
                            marktext: '♦️️️',
                            charlotte: true,
                            intro: {
                                content: '你中了化尸水,本回合不能使用或打出♦️️️牌.',
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.suit == 'diamond') return false;
                                },
                                cardUsable(card, player) {
                                    if (card.suit == 'diamond') return false;
                                },
                                cardRespondable(card, player) {
                                    if (card.suit == 'diamond') return false;
                                },
                                cardSavable(card, player) {
                                    if (card.suit == 'diamond') return false;
                                },
                                targetInRange(card) {
                                    if (card.suit == 'diamond') return false;
                                },
                            },
                        },
                        club: {
                            mark: true,
                            marktext: '♣️️️',
                            charlotte: true,
                            intro: {
                                content: '你中了化尸水,本回合不能使用或打出♣️️️牌.',
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.suit == 'club') return false;
                                },
                                cardUsable(card, player) {
                                    if (card.suit == 'club') return false;
                                },
                                cardRespondable(card, player) {
                                    if (card.suit == 'club') return false;
                                },
                                cardSavable(card, player) {
                                    if (card.suit == 'club') return false;
                                },
                                targetInRange(card) {
                                    if (card.suit == 'club') return false;
                                },
                            },
                        },
                        spade: {
                            mark: true,
                            marktext: '♠️️️',
                            charlotte: true,
                            intro: {
                                content: '你中了化尸水,本回合不能使用或打出♠️️️牌.',
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.suit == 'spade') return false;
                                },
                                cardUsable(card, player) {
                                    if (card.suit == 'spade') return false;
                                },
                                cardRespondable(card, player) {
                                    if (card.suit == 'spade') return false;
                                },
                                cardSavable(card, player) {
                                    if (card.suit == 'spade') return false;
                                },
                                targetInRange(card) {
                                    if (card.suit == 'spade') return false;
                                },
                            },
                        },
                    },
                },
                //旧化尸
                qtpz_huashi: {
                    audio: 'ldj_huashi',
                    trigger: { global: 'phaseUseBegin' },
                    logTarget: 'player',
                    check(event, player) {
                        if (event.player.countCards('h') < 5) return false;
                        if (player.maxHp < 3) return false;
                        if (player.maxHp - player.hp < 3) return false;
                        return get.attitude(player, event.player) <= 0;
                    },
                    filter(event, player) {
                        if (event.player == player) return false;
                        return true;
                    },
                    content() {
                        'step 0';
                        player.loseMaxHp();
                        ('step 1');
                        var controls = ['heart', 'diamond', 'club', 'spade'];
                        var str = '请声明一种花色,其回合内不能使用打出你声明的花色.';
                        player.chooseControl(controls, ui.create.dialog(str, 'hidden')).ai = function () {
                            return Math.floor(Math.random() * controls.length);
                        };
                        ('step 2');
                        if (result.control) {
                            player.popup(result.control);
                            player.line(trigger.player, 'green');
                            game.log(player, '声明了', result.control);
                            trigger.player.addTempSkill('qtpz_huashi_' + result.control);
                        }
                    },
                    subSkill: {
                        heart: {
                            mark: true,
                            marktext2: '♥️️️',
                            markimage: 'extension/金庸群侠传/image/icon/jy_avatar_hongtao.jpg',
                            intro: {
                                content: '你中了化尸水,你本回合不能使用或打出♥️️️牌.',
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.suit == 'heart') return false;
                                },
                                cardUsable(card, player) {
                                    if (card.suit == 'heart') return false;
                                },
                                cardRespondable(card, player) {
                                    if (card.suit == 'heart') return false;
                                },
                                cardSavable(card, player) {
                                    if (card.suit == 'heart') return false;
                                },
                                targetInRange(card) {
                                    if (card.suit == 'heart') return false;
                                },
                            },
                        },
                        diamond: {
                            mark: true,
                            marktext2: '♦️️️',
                            markimage: 'extension/金庸群侠传/image/icon/jy_avatar_fangpian.jpg',
                            intro: {
                                content: '你中了化尸水,本回合不能使用或打出♦️️️牌.',
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.suit == 'diamond') return false;
                                },
                                cardUsable(card, player) {
                                    if (card.suit == 'diamond') return false;
                                },
                                cardRespondable(card, player) {
                                    if (card.suit == 'diamond') return false;
                                },
                                cardSavable(card, player) {
                                    if (card.suit == 'diamond') return false;
                                },
                                targetInRange(card) {
                                    if (card.suit == 'diamond') return false;
                                },
                            },
                        },
                        club: {
                            mark: true,
                            marktext2: '♣️️️',
                            marktext: '️<img style=width:33px height:33px src=extension/金庸群侠传/jymilingmeihua.jpg>',
                            intro: {
                                content: '你中了化尸水,本回合不能使用或打出♣️️️牌.',
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.suit == 'club') return false;
                                },
                                cardUsable(card, player) {
                                    if (card.suit == 'club') return false;
                                },
                                cardRespondable(card, player) {
                                    if (card.suit == 'club') return false;
                                },
                                cardSavable(card, player) {
                                    if (card.suit == 'club') return false;
                                },
                                targetInRange(card) {
                                    if (card.suit == 'club') return false;
                                },
                            },
                        },
                        spade: {
                            mark: true,
                            marktext2: '♠️️️',
                            markimage: 'extension/金庸群侠传/image/icon/jy_avatar_heitao.jpg',
                            intro: {
                                content: '你中了化尸水,本回合不能使用或打出♠️️️牌.',
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (card.suit == 'spade') return false;
                                },
                                cardUsable(card, player) {
                                    if (card.suit == 'spade') return false;
                                },
                                cardRespondable(card, player) {
                                    if (card.suit == 'spade') return false;
                                },
                                cardSavable(card, player) {
                                    if (card.suit == 'spade') return false;
                                },
                                targetInRange(card) {
                                    if (card.suit == 'spade') return false;
                                },
                            },
                        },
                    },
                },
                qtpz_shidu: {
                    group: ['qtpz_shidu_tao'],
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'useCardToPlayered',
                        target: 'useCardToTargeted',
                    },
                    filter(event, player, name) {
                        if (!get.jyCardDu(event.card, false)) return false;
                        if (name == 'useCardToPlayered') return event.isFirstTarget == true;
                        return true;
                    },
                    forced: true,
                    content() {
                        player.gainMaxHp();
                    },
                    ai: {
                        effect: {
                            target(card, player, target) {
                                if (get.jyCardDu(card)) return [1, 0.3];
                            },
                            player(card, player, target) {
                                if (get.jyCardDu(card)) return [1, 0.5];
                            },
                        },
                    },
                },
                qtpz_shidu_tao: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    filterCard(card, player) {
                        return get.jyCardDu(card);
                    },
                    enable: 'chooseToUse',
                    viewAsFilter(player) {
                        if (
                            !player.countCards('hs', function (card) {
                                return get.jyCardDu(card);
                            })
                        )
                            return false;
                        var event = _status.event;
                        if (event.type == 'dying') {
                            if (player != event.dying) return false;
                        }
                        return true;
                    },
                    position: 'hs',
                    viewAs: { name: 'tao' },
                    prompt: '你可以将一张【硝磷火弹】或属性【杀】当桃使用.',
                    check(card) {
                        return 15 - get.value(card);
                    },
                    ai: {
                        save: true,
                        skillTagFilter(player, tag, target) {
                            if (player != target) return false;
                            if (
                                !player.countCards('hs', function (card) {
                                    return get.jyCardDu(card);
                                })
                            )
                                return false;
                        },
                    },
                },
                qtpz_shezheng: {
                    subSkill: {
                        spade: {
                            marktext: '♠️️️',
                            mark: true,
                            intro: { name: '【摄政♠️️️】', content: '你本轮已发动【摄政♠️️️】' },
                        },
                        heart: {
                            marktext: '♥️️',
                            mark: true,
                            intro: { name: '【摄政♥️️】', content: '你本轮已发动【摄政♥️️】' },
                        },
                        club: {
                            marktext: '♣️️',
                            mark: true,
                            intro: { name: '【摄政♣️️】', content: '你本轮已发动【摄政♣️️】' },
                        },
                        diamond: {
                            marktext: '♦️️️',
                            mark: true,
                            intro: { name: '【摄政♦️️️】', content: '你本轮已发动【摄政♦️️️】' },
                        },
                        off: {
                            marktext2: '摄',
                            markimage: 'extension/金庸群侠传/image/icon/jyshezheng.jpg',
                            mark: true,
                            intro: { content: '你本轮已发动【摄政】' },
                        },
                        judge: {
                            trigger: { global: 'cardsDiscardAfter' },
                            forced: true,
                            silent: true,
                            popup: false,
                            filter(event, player) {
                                if (!lib.config.extension_金庸群侠传_jiexiantupo) return false;
                                var evt = event.parent.relatedEvent;
                                if (!evt || evt.name != 'judge') return false;
                                if (evt.player == player) return false;
                                var touse = event.cards.filterInD('od');
                                for (var i = 0; i < touse.length; i++) {
                                    if (touse[i].name == 'sha') {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return player.canUse(touse[i], current, false) && evt.player.inRange(current) && evt.player != current;
                                            })
                                        ) {
                                            var suit = touse[i].suit;
                                            if (['heart', 'diamond', 'club', 'spade'].includes(suit)) {
                                                if (!player.hasSkill('qtpz_shezheng_' + suit)) return true;
                                            }
                                        }
                                    }
                                }
                                return false;
                            },
                            content() {
                                var next = game.createEvent('qtpz_shezheng');
                                next.player = player;
                                var evt2 = trigger.parent.relatedEvent;
                                var evt = {
                                    player: evt2.player,
                                    cards: trigger.cards,
                                };
                                next._trigger = evt;
                                next.setContent(lib.skill.qtpz_shezheng.content);
                            },
                        },
                    },
                    group: 'qtpz_shezheng_judge',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'discardAfter' },
                    filter(event, player) {
                        if (!lib.config.extension_金庸群侠传_jiexiantupo && player.hasSkill('qtpz_shezheng_off')) return false;
                        if (event.player == player) return false;
                        var touse = event.cards.filterInD('od');
                        for (var i = 0; i < touse.length; i++) {
                            if (touse[i].name == 'sha') {
                                if (
                                    game.hasPlayer(function (current) {
                                        return player.canUse(touse[i], current, false) && event.player.inRange(current) && event.player != current;
                                    })
                                ) {
                                    if (lib.config.extension_金庸群侠传_jiexiantupo) {
                                        var suit = touse[i].suit;
                                        if (['heart', 'diamond', 'club', 'spade'].includes(suit)) {
                                            if (!player.hasSkill('qtpz_shezheng_' + suit)) return true;
                                        }
                                    } else {
                                        return true;
                                    }
                                }
                            }
                        }
                        return false;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        event.list = [];
                        var touse = trigger.cards.filterInD('od');
                        for (var i = 0; i < touse.length; i++) {
                            if (touse[i].name == 'sha') {
                                if (
                                    game.hasPlayer(function (current) {
                                        return player.canUse(touse[i], current, false) && trigger.player.inRange(current) && trigger.player != current;
                                    })
                                ) {
                                    if (lib.config.extension_金庸群侠传_jiexiantupo) {
                                        var suit = touse[i].suit;
                                        if (['heart', 'diamond', 'club', 'spade'].includes(suit)) {
                                            if (!player.hasSkill('qtpz_shezheng_' + suit)) event.list.push(touse[i]);
                                        }
                                    } else {
                                        event.list.push(touse[i]);
                                    }
                                }
                            }
                        }
                        ('step 1');
                        if (event.list.length && event.list.length != 1) {
                            var next = player.chooseCardButton(get.prompt2('qtpz_shezheng'), event.list);
                            next.set('ai', function (button) {
                                if (
                                    game.hasPlayer(function (current) {
                                        var player = _status.event.player;
                                        return player.canUse(button.link, current, false) && get.effect(current, button.link, player, player) > 0 && trigger.player.inRange(current) && trigger.player != current;
                                    })
                                ) {
                                    return 2;
                                }
                                return -1;
                            });
                        } else if (event.list.length == 1) {
                            event.forced = true;
                            event.dircard = event.list[0];
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result.bool || event.dircard) {
                            event._result = { bool: false };
                            event.forced = !event.forced;
                            event.using = event.dircard || result.links[0];
                            var next = player.chooseUseTarget(event.using, false, 'nodistance');
                            next.set(
                                'targets',
                                game.filterPlayer(function (current) {
                                    return trigger.player.inRange(current) && trigger.player != current;
                                })
                            );
                            next.set('oncard', function (card, player) {
                                if (!player) player = this.player;
                                if (!card) card = this.card;
                                if (lib.config.extension_金庸群侠传_jiexiantupo) {
                                    var suit = card.suit;
                                    if (['heart', 'diamond', 'club', 'spade'].includes(suit)) {
                                        player.addTempSkill('qtpz_shezheng_' + suit, 'roundStart');
                                    }
                                } else {
                                    player.addTempSkill('qtpz_shezheng_off', 'roundStart');
                                }
                            });
                            if (event.forced) next.set('forced', true);
                            if (!event.forced) next.set('prompt', get.prompt('qtpz_shezheng') + '<br>选择' + get.translation(event.using) + '的目标');
                        } else {
                            event.finish();
                        }
                    },
                },
                qtpz_yingshi: {
                    audio: 'ext:金庸群侠传/peiyin:4', //摄政一旦发动必然触发营私,为了不太吵,故两技能配音合为一处,不是失识操作
                    trigger: {
                        player: ['useCard', 'respond'],
                    },
                    forced: true,
                    filter(event, player) {
                        if (player == _status.currentPhase) return false;
                        return event.card && event.card.name == 'sha';
                    },
                    content() {
                        player.draw();
                    },
                },
                qtpz_diebao_ai: {
                    ai: {
                        effect: {
                            player(card, player, target, current, isLink) {
                                if (card.name != 'guohe' && card.name != 'shunshou') return;
                                if (player._qtpz_diebao_ai) return;
                                player._qtpz_diebao_ai = true;
                                var target2 = game.findPlayer(function (current) {
                                    return current.hasSkill('qtpz_diebao');
                                });
                                if (!target2 || target2 == player) {
                                    delete player._qtpz_diebao_ai;
                                    return;
                                }
                                if (get.effect(target, card, player, player) <= 0) {
                                    delete player._qtpz_diebao_ai;
                                    return;
                                }
                                var eff = get.effect(target, card, target2, target2);
                                var att = get.attitude(player, target2);
                                var att2 = get.attitude(target2, target);
                                if (att > 0 && att2 > 0) {
                                    delete player._qtpz_diebao_ai;
                                    return;
                                }
                                if (att < 0 && att2 > 0 && eff > 0) {
                                    delete player._qtpz_diebao_ai;
                                    return 'zeroplayertarget';
                                }
                                delete player._qtpz_diebao_ai;
                            },
                        },
                    },
                },
                qtpz_diebao: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    group: 'qtpz_diebao1',
                    global: 'qtpz_diebao_ai',
                    trigger: {
                        global: ['rewriteGainResult', 'rewriteDiscardResult'],
                    },
                    forced: true,
                    filter(event, player) {
                        return event.player != event.target;
                    },
                    content() {
                        'step 0';
                        var prompt = '<span style="color: #FF0000">【' + get.translation(trigger.target) + '】</span>即将失去' + get.translation(trigger.result.cards) + ',是否发动【谍报】？';
                        var next = player.choosePlayerCard(trigger.target, prompt, trigger.position, 'visible');
                        next.set('ai', function (button) {
                            var val = get.buttonValue(button);
                            var val2 = _status.event.val2;
                            if (get.attitude(_status.event.player, get.owner(button.link)) > 0) return val2 - val;
                            return val;
                        });
                        next.filterButton = trigger.filterButton;
                        next.selectButton = trigger.result.cards.length;
                        next.set('val2', get.value(trigger.result.cards, trigger.target));
                        ('step 1');
                        if (result.bool) {
                            trigger.result.cards = result.links.slice(0);
                            trigger.result.links = result.links.slice(0);
                            trigger.cards = result.links.slice(0);
                            trigger.untrigger();
                        }
                    },
                },
                qtpz_diebao1: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'judgeBegin',
                    },
                    forced: true,
                    filter(event, player) {
                        return ui.cardPile.childNodes.length > 1;
                    },
                    check() {
                        return false;
                    },
                    content() {
                        'step 0';
                        var str = get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定';
                        var cards = get.cards(2);
                        event.cardss = cards;
                        var att = get.attitude(player, trigger.player);
                        var delta = trigger.judge(event.cardss[1]) - trigger.judge(event.cardss[0]);
                        player.chooseControl('调换顺序', 'cancel2', ui.create.dialog('谍报:' + str, event.cardss, 'hidden')).set('ai', function () {
                            if (att * delta > 0) return '调换顺序';
                            else return 'cancel2';
                        });
                        ('step 1');
                        if (result.control == '调换顺序') {
                            ui.cardPile.insertBefore(event.cardss[0], ui.cardPile.firstChild);
                            ui.cardPile.insertBefore(event.cardss[1], ui.cardPile.firstChild);
                            game.log(player, '#y调换了牌堆顶两张牌的顺序');
                        } else {
                            ui.cardPile.insertBefore(event.cardss[1], ui.cardPile.firstChild);
                            ui.cardPile.insertBefore(event.cardss[0], ui.cardPile.firstChild);
                            game.log(player, '#y观看牌堆顶两张牌');
                        }
                    },
                    ai: {
                        expose: 0.1,
                        tag: {
                            rejudge: 0.5,
                        },
                    },
                },
                qtpz_jibian: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'useCardEnd' },
                    forced: true,
                    filter(event, player) {
                        if (event.getParent(2).name == 'qtpz_jibian') return false;
                        if (!event.cards) return false;
                        if (!player.countCards('h', { color: 'red' })) return false;
                        if (event.player == player) return false;
                        if (get.color(event.card) != 'red') return false;
                        if (get.type(event.card) != 'trick' && get.type(event.card) != 'basic') return false;
                        var info = get.info(event.card);
                        if (info.allowMultiple == false) return false;
                        if (event.targets && !info.multitarget) {
                            if (
                                game.hasPlayer(function (current) {
                                    return player.canUse(event.card, current);
                                })
                            ) {
                                return true;
                            }
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        var str = get.prompt('qtpz_jibian', trigger.player);
                        var str2 = '将一张张牌红色手牌交给' + get.translation(trigger.player) + '你立即使用' + get.translation(trigger.card);
                        player
                            .chooseCard('h', str, str2, function (card, player) {
                                return get.color(card) == 'red';
                            })
                            .set('ai', function (card) {
                                var player = _status.event.player;
                                var att = get.attitude(player, trigger.player);
                                if (att > 0) {
                                    if (player.getUseValue(trigger.card) > 0) return 1;
                                }
                                if (att <= 0) {
                                    if (player.getUseValue(trigger.card) > 0) return 3 - get.value(card);
                                }
                                return -1;
                            });
                        ('step 1');
                        if (result.bool) {
                            //trigger.player.gain(result.cards[0],player,'giveAuto');
                            player.give(result.cards[0], trigger.player, true);
                            player.chooseUseTarget(trigger.card, true);
                        }
                    },
                    ai: {
                        threaten: 2,
                    },
                },
                qtpz_weizhao_ai: {
                    ai: {
                        effect: {
                            player(card, player, target, current, isLink) {
                                if (get.type(card) != 'delay') return;
                                if (player.hasSkill('qtpz_weizhao')) return;
                                if (player._qtpz_weizhao_ai) return;
                                player._qtpz_weizhao_ai = true;
                                var target2 = game.findPlayer(function (current) {
                                    return current.hasSkill('qtpz_weizhao');
                                });
                                if (!target2) {
                                    delete player._qtpz_weizhao_ai;
                                    return;
                                }
                                var list = get.inpile('delay');
                                var list2 = [];
                                for (var i = 0; i < list.length; i++) {
                                    if (card.name != list[i] && !target.hasJudge(list[i])) {
                                        list2.push({ name: list[i] });
                                    }
                                }
                                var effect = get.effect(target, card, player, player);
                                var att = get.attitude(player, target2);
                                var att2 = get.attitude(target2, target);
                                if (effect <= 0) {
                                    for (var e of list2) {
                                        var result = get.effect(target, e, target2, target2);
                                        if (result > 0 && att > 0 && att2 > 0) {
                                            delete player._qtpz_weizhao_ai;
                                            //强行调为正数并放大2倍//
                                            return -2;
                                        }
                                    }
                                } else if (effect > 0) {
                                    for (var e of list2) {
                                        var result = get.effect(target, e, target2, target2);
                                        if (result > 0 && att < 0 && att2 > 0) {
                                            delete player._qtpz_weizhao_ai;
                                            return 'zeroplayertarget';
                                        }
                                    }
                                }
                                delete player._qtpz_weizhao_ai;
                            },
                        },
                    },
                },
                qtpz_weizhao: {
                    global: 'qtpz_weizhao_ai',
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'useCardToPlayer' },
                    forced: true,
                    _priority: 5,
                    filter(event, player) {
                        // if(event.parent.name=='qtpz_weizhao') return false;
                        if (get.type(event.card) != 'delay') return false;
                        if (!event.targets || event.targets.length != 1) return false;
                        var list = get.inpile(function (name) {
                            if (get.type({ name: name }) != 'delay') return false;
                            if (name == event.card.name) return false;
                            return event.targets[0].canAddJudge({ name: name, cards: event.cards });
                        });
                        return list.length;
                    },
                    content() {
                        'step 0';
                        var list = get.inpile(function (name) {
                            if (get.type({ name: name }) != 'delay') return false;
                            if (name == trigger.card.name) return false;
                            return trigger.targets[0].canAddJudge({ name: name, cards: trigger.cards });
                        });
                        for (var i = 0; i < list.length; i++) {
                            list[i] = ['锦囊', '', list[i]];
                        }
                        var str = get.prompt('qtpz_weizhao', trigger.player);
                        var str2 = get.translation(trigger.player) + '对' + get.translation(trigger.target) + '使用了' + get.translation(trigger.card);
                        player
                            .chooseButton([1, 1], 'hidden', [str, [list, 'vcard'], 'hidden'])
                            .set('ai', function (button) {
                                var player = _status.event.player;
                                var card = {
                                    name: button.link[2],
                                    cards: trigger.cards,
                                };
                                var eff = get.effect(trigger.target, trigger.card, trigger.player, player);
                                var eff2 = get.effect(trigger.target, card, trigger.player, player);
                                return eff2 - eff;
                            })
                            .set('prompt2', str2);
                        ('step 1');
                        if (result.bool) {
                            const oldCard = trigger.card;
                            trigger.card.name = result.links[0][2];
                            game.log(oldCard, '改为了', trigger.card);
                        }
                    },
                    ai: {
                        effect: {
                            player(card, player, target, current, isLink) {
                                //AI 优化 //
                                if (player._qtpz_weizhao_tmp) return;
                                if (target) {//QQQ
                                    var att = get.attitude(player, target);
                                    if (att == 0) return;
                                    if (get.type(card) == 'delay') {
                                        var list = get.inpile('delay');
                                        var list2 = [];
                                        for (var i = 0; i < list.length; i++) {
                                            if (card.name != list[i] && !target.hasJudge(list[i])) {
                                                list2.push({ name: list[i] });
                                            }
                                        }
                                        player._qtpz_weizhao_tmp = true;
                                        var effect = get.effect(target, card, player, player);
                                        if (effect <= 0) {
                                            for (var e of list2) {
                                                var result = get.effect(target, e, player, player);
                                                if (result > 0) {
                                                    delete player._qtpz_weizhao_tmp;
                                                    //强行调为正数并放大2倍//
                                                    return -2;
                                                }
                                            }
                                        } else {
                                            //放大10倍//
                                            delete player._qtpz_weizhao_tmp;
                                            return 10;
                                        }
                                    }
                                    delete player._qtpz_weizhao_tmp;
                                }
                            },
                        },
                    },
                },
                qtpz_yunie: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    usable: 1,
                    filter(event, player) {
                        if (!player.countCards('h')) return false;
                        var list = get.inpile('trick');
                        for (var i = 0; i < list.length; i++) {
                            if (
                                game.hasPlayer(function (current) {
                                    return player.countCards('h', function (card) {
                                        var cardxx = { name: list[i], cards: [card] };
                                        return player.canUse(cardxx, current);
                                    });
                                })
                            ) {
                                return true;
                            }
                        }
                        return false;
                    },
                    filterTarget(card, player, target) {
                        if (player == target) return false;
                        //if(!target.countCards('hej')) return false;
                        return true;
                    },
                    selectTarget: 1,
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    content() {
                        'step 0';
                        event.target = targets[0];
                        ('step 1');
                        var list = [];
                        var list2 = get.inpile('trick');
                        for (var i = 0; i < list2.length; i++) {
                            if (
                                game.hasPlayer(function (current) {
                                    return player.countCards('h', function (card) {
                                        var cardxx = { name: list2[i], cards: [card] };
                                        return player.canUse(cardxx, current);
                                    });
                                })
                            ) {
                                list.push(list2[i]);
                            }
                        }
                        for (var i = 0; i < list.length; i++) {
                            list[i] = ['锦囊', '', list[i]];
                        }
                        target
                            .chooseButton(true, ['请声明一张可用的普通锦囊', [list, 'vcard']])
                            .set('ai', function (button) {
                                var att = get.attitude(_status.event.player, _status.event.targetx);
                                var card = { name: button.link[2] };
                                return _status.event.targetx.getUseValue(card) * att;
                            })
                            .set('targetx', player);
                        ('step 2');
                        if (result.bool) {
                            event.cardx = { name: result.links[0][2] };
                            game.log(target, '声明了', event.cardx);
                            lib.skill.qtpz_yunie_use.viewAs = event.cardx;
                            var next = player.chooseToUse();
                            if (next.isOnline()) {
                                player.send(function (card) {
                                    lib.skill.qtpz_yunie_use.viewAs = card;
                                }, event.cardx);
                            }
                            next.set('openskilldialog', '欲孽:是否将一张手牌当' + get.translation(event.cardx) + '使用？否则你弃置' + get.translation(target) + '区域的一张牌.');
                            next.set('norestore', true);
                            next.set('targetx', target);
                            next.set('_backupevent', 'qtpz_yunie_use');
                            next.set('custom', {
                                add: {},
                                replace: {
                                    window() { },
                                },
                            });
                            next.backup('qtpz_yunie_use');
                        } else event.finish();
                        ('step 3');
                        if (result.bool) {
                            target.draw();
                        } else {
                            if (target.countDiscardableCards(player, 'hej')) {
                                player.discardPlayerCard('hej', target, true);
                            }
                        }
                    },
                    subSkill: {
                        use: {
                            filterCard(card, player) {
                                return get.itemtype(card) == 'card';
                            },
                            check(card) {
                                var player = _status.event.player;
                                var targetx = _status.event.targetx;
                                if (get.attitude(player, targetx) > 0 && targetx.countDiscardableCards(player, 'hej') && lib.card.guohe.ai.result.target(player, targetx) > 0) return -1;
                                if (get.attitude(player, targetx) < 0 && targetx.countDiscardableCards(player, 'hej') && lib.card.guohe.ai.result.target(player, targetx) < 0) return -1;
                                return 8 - get.value(card);
                            },
                            log: false,
                            selectCard: 1,
                            popname: true,
                            charlotte: true,
                            fixed: true,
                        },
                    },
                    ai: {
                        order: 1,
                        result: {
                            target(player, target) {
                                //优先 拆牌;
                                if (target.countDiscardableCards(player, 'hej')) {
                                    var disnum = lib.card.guohe.ai.result.target(player, target);
                                    if (get.attitude(player, target) > 0 && disnum > 0) return disnum + 3;
                                }
                                var bool = false;
                                var list = get.inpile('trick');
                                var bool2 = false;
                                for (var i = 0; i < list.length; i++) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return player.countCards('h', function (card) {
                                                var cardxx = { name: list[i], cards: [card] };
                                                return player.canUse(cardxx, current) && player.getUseValue(cardxx) > 0;
                                            });
                                        })
                                    ) {
                                        return 1;
                                    }
                                }
                                if (get.attitude(player, target) < 0 && target.countDiscardableCards(player, 'hej') && lib.card.guohe.ai.result.target(player, target) < 0) return -0.5;
                                return 0;
                            },
                        },
                        threaten: 1,
                    },
                },
                qtpz_ningxue: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    group: ['qtpz_ningxue_miss', 'qtpz_ningxue_damage'],
                    subSkill: {
                        miss: {
                            trigger: { player: 'shaUnhirt' },
                            audio: 'qtpz_ningxue',
                            _priority: -1,
                            filter(event, player) {
                                return !event.target.hasSkill('qtpz_ningxue_basic');
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0;
                            },
                            content() {
                                trigger.target.addTempSkill('qtpz_ningxue_basic', { player: 'phaseEnd' });
                            },
                        },
                        damage: {
                            trigger: { source: 'damageSource' },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.player.isIn() && !event.player.hasSkill('qtpz_ningxue_trick');
                            },
                            audio: 'qtpz_ningxue',
                            _priority: -1,
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content() {
                                trigger.player.addTempSkill('qtpz_ningxue_trick', { player: 'phaseEnd' });
                            },
                        },
                        trick: {
                            mark: true,
                            marktext2: '凝',
                            markimage: 'extension/金庸群侠传/image/icon/jyningxuezhao.jpg',
                            intro: {
                                content: '因神秘侠客使用杀对你造成伤害,其对你发动【凝血】,你不能使用锦囊牌.',
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    var type = get.type(card);
                                    if (_status.currentPhase == player && (type == 'trick' || type == 'delay')) return false;
                                },
                                cardUsable(card, player) {
                                    var type = get.type(card);
                                    if (_status.currentPhase == player && (type == 'trick' || type == 'delay')) return false;
                                },
                                cardSavable(card, player) {
                                    var type = get.type(card);
                                    if (_status.currentPhase == player && (type == 'trick' || type == 'delay')) return false;
                                },
                                targetInRange(card, player) {
                                    var type = get.type(card);
                                    if (_status.currentPhase == player && (type == 'trick' || type == 'delay')) return false;
                                },
                            },
                        },
                        basic: {
                            mark: true,
                            marktext2: '凝',
                            markimage: 'extension/金庸群侠传/image/icon/jyningxuezhao.jpg',
                            intro: {
                                content: '因你抵消了神秘侠客的杀,其对你发动【凝血】,你不能使用基本牌.',
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    var type = get.type(card);
                                    if (_status.currentPhase == player && type == 'basic') return false;
                                },
                                cardUsable(card, player) {
                                    var type = get.type(card);
                                    if (_status.currentPhase == player && type == 'basic') return false;
                                },
                                cardSavable(card, player) {
                                    var type = get.type(card);
                                    if (_status.currentPhase == player && type == 'basic') return false;
                                },
                                targetInRange(card, player) {
                                    var type = get.type(card);
                                    if (_status.currentPhase == player && type == 'basic') return false;
                                },
                            },
                        },
                    },
                },
                qtpz_zhongsu: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'damage' },
                    check(event, player) {
                        return get.attitude(player, event.source) > 0;
                    },
                    filter(event, player) {
                        if (!event.source) return false;
                        if (!event.source.isIn()) return false;
                        return event.cards && event.cards.filterInD('od').length;
                    },
                    logTarget: 'source',
                    content() {
                        var togain = trigger.cards.filterInD('od');
                        //trigger.source.gain(togain,player,'log','give');
                        player.give(togain, trigger.source, true);
                        player.draw();
                    },
                },
                qtpz_zhenfan: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'damageSource' },
                    filter(event, player) {
                        if (!player.countCards('h')) return false;
                        if (!event.source || event.source == player) return false;
                        if (!event.source.isIn()) return false;
                        //if(!event.source.countDiscardableCards(player,'e')) return false;+
                        if (!event.source.countCards(player, 'e')) return false;
                        return true;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        player
                            .chooseToDiscard(1, 'h', '是否弃置一张手牌将' + get.translation(trigger.source) + '装备区的一张牌置于你的侠客牌？')
                            .set('ai', function (card) {
                                const player = _status.event.player;
                                const target = trigger.source;
                                //const att=get.attitude(player,target)>0?1:-1;
                                if (
                                    get.effect(
                                        target,
                                        {
                                            name: 'loseCard_ai',
                                            position: 'e',
                                        },
                                        player,
                                        player
                                    ) <= 0
                                )
                                    return -1;
                                if (player.hasSkill('qtpz_fujiang')) 9 - get.value(card);
                                return 6 - get.value(card);
                            })
                            ('step 1');
                        if (result.bool) {
                            player.choosePlayerCard('e', trigger.source, true).set('ai', lib.card.loseCard_ai.button);
                            //player.discardPlayerCard('e',trigger.source,true);
                        } else event.finish();
                        ('step 2');
                        if (result.bool) {
                            player.addToExpansion(result.links, trigger.source, 'give').gaintag.add('qtpz_fujiang');
                        }
                    },
                },
                qtpz_fujiang2: {
                    trigger: { global: 'phaseEnd' },
                    silent: true,
                    forced: true,
                    content() {
                        player.storage['qtpz_fujiang2'] = [];
                    },
                },
                qtpz_fujiang: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    group: ['qtpz_fujiang1', 'qtpz_fujiang2'],
                    marktext2: '疆',
                    markimage: 'extension/金庸群侠传/image/icon/jyfujiang.jpg',
                    intro: {
                        content: 'expansion',
                        markcount: 'expansion',
                    },
                    onremove(player, skill) {
                        var cards = player.getExpansions(skill);
                        if (cards.length) player.loseToDiscardpile(cards);
                    },
                    trigger: {
                        player: 'loseEnd',
                        global: 'loseAsyncEnd',
                    },
                    filter(event, player) {
                        var storage = player.getStorage('qtpz_fujiang2');
                        if (event.type != 'discard' || event.getlx === false) return false;
                        var evt = event.getl(player);
                        if (!evt || !evt.cards2) return false;
                        return (
                            evt.cards2.filterInD('od').filter(function (i) {
                                return !storage.includes(i);
                            }).length
                        );
                    },
                    content() {
                        var storage = player.getStorage('qtpz_fujiang2');
                        var cards2 = trigger.getl(player).cards2;
                        event.cards = cards2.filterInD('od').filter(function (i) {
                            return !storage.includes(i);
                        });
                        player.markAuto('qtpz_fujiang2', event.cards);
                        player.addToExpansion(event.cards, 'gain2', 'log').gaintag.add('qtpz_fujiang');
                    },
                    ai: {
                        effect: {
                            target(card, player, target, current) {
                                if (get.tag(card, 'discard')) {
                                    return [1, 0.6];
                                }
                            },
                        },
                    },
                },
                qtpz_fujiang1: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'loseAfter',
                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                    },
                    filter(event, player) {
                        var evt = event.getl(player);
                        if (evt && evt.player == player && evt.hs && evt.hs.length) {
                            var cards = player.getExpansions('qtpz_fujiang');
                            if (cards.length == 0) return false;
                            return player.needsToDiscard(null, null, true) < 0;
                        }
                        return false;
                    },
                    content() {
                        'step 0';
                        var cards = player.getExpansions('qtpz_fujiang');
                        if (cards.length) {
                            var num = -player.needsToDiscard(null, null, true);
                            if (cards.length <= num) {
                                event._result = { bool: true, links: cards.slice(0) };
                            } else {
                                player.chooseCardButton('选择获得' + num + '张<疆>', num, cards, true).set('ai', get.buttonValue);
                            }
                        } else {
                            event.finish();
                        }
                        ('step 1');
                        if (result.bool) {
                            var links = result.links;
                            player.gain(links, 'gain2', 'fromStorage', 'log');
                        }
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
                                var cards = player.getExpansions('qtpz_fujiang');
                                if (cards.length == 0) return false;
                                var num = player.needsToDiscard(null, null, true);
                                if (num != 0) return false;
                            }
                        },
                    },
                },
                qtpz_shengshi: {
                    group: ['qtpz_shengshi_remove'],
                    subSkill: {
                        off: {
                        },
                        remove: {
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                return player.identity != 'zhu';
                            },
                            content() {
                                player.removeSkill('qtpz_shengshi');
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { global: 'loseEnd' },
                    zhuSkill: true,
                    filter(event, player) {
                        if (player.hasSkill('qtpz_shengshi_off')) return false;
                        if (!player.hasSkill('qtpz_fujiang')) return false;
                        if (!player.hasZhuSkill('qtpz_shengshi')) return false;
                        if (event.parent.name != 'discard') return false;
                        if (event.player == player) return false;
                        var group = 'shu';
                        if (lib.jy_changeSkill) group = 'jy_qing';
                        if (group != event.player.group) return false;
                        return event.cards2 && event.cards2.filterInD('od').length;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        event.cards = trigger.cards2.filterInD('od');
                        ('step 1');
                        if (event.cards.length) {
                            var str = '是否将其中一张' + get.translation(event.cards) + '置于' + get.translation(player) + '的侠客牌上称为"疆"？';
                            trigger.player
                                .chooseCardButton('盛世', event.cards, 1, str)
                                .set('filterButton', function (button) {
                                    return true;
                                })
                                .set('ai', function (button) {
                                    var att = get.attitude(trigger.player, player);
                                    if (att > 0) {
                                        return get.value(button.link);
                                    } else {
                                        return -1;
                                    }
                                });
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result.bool) {
                            var links = result.links;
                            player.addToExpansion(links, 'give', 'log', trigger.player).gaintag.add('qtpz_fujiang');
                        }
                    },
                },
                qtpz_fuyin: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'phaseDrawBegin1' },
                    check(event, player) {
                        if (event.num > 3) return false;
                        return true;
                    },
                    filter(event, player) {
                        return !event.numFixed;
                    },
                    content() {
                        'step 0';
                        trigger.changeToZero();
                        ('step 1');
                        var str = '请选择<摸大>或<摸小>.';
                        var controls = ['摸大', '摸小'];
                        player.chooseControl(controls, ui.create.dialog(str, 'hidden')).ai = function () {
                            return Math.floor(Math.random() * controls.length);
                        };
                        ('step 2');
                        if (result.control) {
                            event.control = result.control;
                            game.log(player, '声明了' + result.control);
                            player.popup(result.control);
                        }
                        ('step 3');
                        event.cards = get.cards(7);
                        event.gain = [];
                        event.dis = [];
                        ('step 4');
                        player.showCards(event.cards);
                        ('step 5');
                        for (var e = 0; e < event.cards.length; e++) {
                            if (event.cards[e].number == 7) {
                                event.gain.push(event.cards[e]);
                            } else if (event.cards[e].number > 7 && event.control == '摸大') {
                                event.gain.push(event.cards[e]);
                            } else if (event.cards[e].number < 7 && event.control == '摸小') {
                                event.gain.push(event.cards[e]);
                            } else event.dis.push(event.cards[e]);
                        }
                        ('step 6');
                        event.dialog = ui.create.dialog('hidden');
                        event.dialog.add('父荫:展示的牌');
                        event.dialog.add(event.cards);
                        if (event.gain.length) {
                            event.dialog.add('父荫:因声明' + event.control + '能获得的牌');
                            event.dialog.add(event.gain);
                            if (event.dis.length) {
                                event.dialog.add('父荫:置回牌堆顶的牌');
                                event.dialog.add(event.dis);
                            }
                        } else {
                            var str;
                            str = '父荫:因声明' + event.control + '没有符合的牌而置回牌堆顶的牌';
                            event.dialog.add(str);
                            event.dialog.add(event.dis);
                        }
                        var dialogs = event.dialog;
                        player.chooseControl('ok').set('dialog', dialogs);
                        ('step 7');
                        if (event.gain.length) {
                            player.gain(event.gain, 'gain2');
                        }
                        if (event.dis.length) {
                            game.log(player, '将', event.dis, '置回了牌堆顶');
                            while (event.dis.length) {
                                ui.cardPile.insertBefore(event.dis.pop(), ui.cardPile.firstChild);
                            }
                        }
                    },
                },
                qtpz_mengtong: {
                    subSkill: {
                        off: {
                            mark: true,
                            markimage: 'extension/金庸群侠传/image/icon/jy_avatar_mengtong.jpg',
                            intro: {
                                content: '你本轮已发动【蒙童】.',
                            },
                        },
                    },
                    trigger: { global: 'judge' },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    filter(event, player) {
                        if (player.hasSkill('qtpz_mengtong_off')) return false;
                        return true;
                    },
                    forced: true,
                    content() {
                        'step 0';
                        var str = get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('qtpz_mengtong');
                        player
                            .chooseControl('spade', 'heart', 'diamond', 'club', 'cancel2')
                            .set('prompt', str)
                            .set('ai', function () {
                                //return '取消';
                                var judging = _status.event.judging;
                                var trigger = _status.event.getTrigger();
                                var res1 = trigger.judge(judging);
                                var list = lib.suit.slice(0);
                                var attitude = get.attitude(player, trigger.player);
                                if (attitude == 0) return 0;
                                var getj = function (suit) {
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
                                if ((getj(list[0]) - res1) * attitude > 0) return list[0];
                                return 'cancel2';
                            })
                            .set('judging', trigger.player.judging[0]);
                        ('step 1');
                        if (result.control != 'cancel2') {
                            //player.line(trigger.player);
                            player.popup(result.control + 2);
                            game.log(player, '将判定结果改为了', '#y' + get.translation(result.control + 2));
                            trigger.fixedResult = {
                                suit: result.control,
                                color: get.color({ suit: result.control }),
                            };
                            player.addTempSkill('qtpz_mengtong_off', 'roundStart');
                        }
                    },
                    ai: {
                        tag: {
                            rejudge: 1,
                        },
                    },
                },
                qtpz_zhenggang: {
                    global: ['qtpz_zhenggang1', 'qtpz_zhenggang1_begin'],
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: 'phaseZhunbeiBefore',
                    },
                    check(event, player) {
                        var att = get.attitude(player, event.player);
                        return att < 0;
                    },
                    prompt(event, player) {
                        var count = event.player.previous.storage.qtpz_zhenggang1_count;
                        //count=count -1;
                        if (count < 0) {
                            count = 0;
                        }
                        return '是否令 ' + get.translation(event.player) + ' 本回合内只能使用 ' + count + ' 张牌？';
                    },
                    filter(event, player) {
                        return !player.hasSkill('qtpz_zhenggang_off') && player != event.player && event.player.previous.storage.qtpz_zhenggang1_count != undefined && event.player.previous.hp > event.player.hp;
                    },
                    content() {
                        var count = trigger.player.previous.storage.qtpz_zhenggang1_count;
                        //count=count -1;
                        if (count < 0) {
                            count = 0;
                        }
                        game.log(player, '对', trigger.player, '发动了【正纲】,', trigger.player, '本回合内只能使用', count, '张牌');
                        trigger.player.storage.qtpz_zhenggang1_limit = count;
                        trigger.player.storage.qtpz_zhenggang_source = player;
                        trigger.player.addTempSkill('qtpz_zhenggang_limited', 'phaseJieshuAfter');
                        trigger.player.addTempSkill('qtpz_zhenggang_end', 'phaseJieshuAfter');
                    },
                    ai: {
                        expose: 1,
                        result: {
                            player: -1,
                            target(player, target) {
                                var count = target.previous.storage.qtpz_zhenggang1_count;
                                if (count == undefined) {
                                    count = 0;
                                }
                                //count=count -1;
                                if (count < 0) {
                                    count = 0;
                                }
                                var cards = target.getCards('h');
                                if (cards) {
                                    var v = -cards.length - 2 + count;
                                    return v > -1 ? -1 : v;
                                }
                                return -5;
                            },
                        },
                    },
                    subSkill: {
                        off: {
                            mark: true,
                            marktext2: '正',
                            markimage: 'extension/金庸群侠传/image/icon/jyzhenggang.jpg',
                            intro: {
                                content: '本轮内你不能发动正纲.',
                            },
                        },
                        end: {
                            forced: true,
                            trigger: {
                                player: 'phaseJieshuEnd',
                            },
                            filter(event, player) {
                                return player.storage.qtpz_zhenggang1_count == 0;
                            },
                            content() {
                                if (player.storage.qtpz_zhenggang_source) {
                                    player.storage.qtpz_zhenggang_source.addTempSkill('qtpz_zhenggang_off', 'roundEnd');
                                    game.log(player.storage.qtpz_zhenggang_source, '本轮内不得正纲.');
                                }
                            },
                        },
                        limited: {
                            mark: true,
                            marktext2: '纲',
                            markimage: 'extension/金庸群侠传/image/icon/jyzhenggang.jpg',
                            forced: true,
                            intro: {
                                content: '本回合内,你使用的牌不能比你上家使用的牌张数多.',
                            },
                        },
                        forbid: {
                            mark: true,
                            marktext2: '禁',
                            markimage: 'extension/金庸群侠传/image/icon/jyzhenggang.jpg',
                            forced: true,
                            intro: {
                                content: '你本回合因【正纲】被禁止使用牌.',
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    return false;
                                },
                                cardUsable(card, player) {
                                    return false;
                                },
                                cardSavable(card, player) {
                                    return false;
                                },
                                targetInRange(card) {
                                    return false;
                                },
                            },
                        },
                    },
                },
                qtpz_zhenggang1: {
                    forced: true,
                    silent: true,
                    _priority: 1003,
                    group: ['qtpz_zhenggang1_begin'],
                    trigger: {
                        player: 'useCard2',
                    },
                    filter(event, player) {
                        return event.player == player && _status.currentPhase == player;
                    },
                    content() {
                        if (!player.storage.qtpz_zhenggang1_count) {
                            player.storage.qtpz_zhenggang1_count = 0;
                        }
                        player.storage.qtpz_zhenggang1_count++;
                        game.log(player, '使用牌数', player.storage.qtpz_zhenggang1_count);
                        if (player.hasSkill('qtpz_zhenggang_limited')) {
                            if (player.storage.qtpz_zhenggang1_limit <= player.storage.qtpz_zhenggang1_count) {
                                if (!player.hasSkill('qtpz_zhenggang_forbid')) {
                                    player.addTempSkill('qtpz_zhenggang_forbid', 'phaseJieshuEnd');
                                }
                            }
                        }
                    },
                    subSkill: {
                        begin: {
                            forced: true,
                            silent: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                player.storage.qtpz_zhenggang1_count = 0;
                                game.log(player, '重置使用牌数.');
                                if (player.hasSkill('qtpz_zhenggang_limited')) {
                                    if (player.storage.qtpz_zhenggang1_limit <= player.storage.qtpz_zhenggang1_count) {
                                        if (!player.hasSkill('qtpz_zhenggang_forbid')) {
                                            player.addTempSkill('qtpz_zhenggang_forbid', 'phaseJieshuEnd');
                                        }
                                    }
                                }
                            },
                        },
                    },
                },
                qtpz_yiqing: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'dying',
                    },
                    forced: true,
                    mark: true,
                    marktext2: '情',
                    markimage: 'extension/金庸群侠传/image/icon/jyyiqing.jpg',
                    limited: true,
                    filter(event, player) {
                        if (player.storage.qtpz_yiqing) return false;
                        if (
                            game.hasPlayer(function (current) {
                                return current.name == 'qtpz_weixiaobao' || current.name2 == 'qtpz_weixiaobao';
                            })
                        )
                            return false;
                        return game.hasPlayer(function (current) {
                            return current != player && current.hasSex('male');
                        });
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('qtpz_yiqing'), function (card, player, target) {
                                return target != player && target.hasSex('male');
                            })
                            .set('ai', function (target) {
                                return get.attitude(player, target);
                            });
                        ('step 1');
                        if (result.bool) {
                            player.awakenSkill('qtpz_yiqing');
                            player.storage.qtpz_yiqing = true;
                            event.target = result.targets[0];
                            if (event.target.name2 != undefined) {
                                event.target.chooseControl(event.target.name, event.target.name2).set('prompt', '请选择要更换的侠客牌');
                            } else event._result = { control: event.target.name };
                        } else event.finish();
                        ('step 2');
                        target.reinit(result.control, 'qtpz_weixiaobao');
                        if (_status.characterlist) {
                            _status.characterlist.add(result.control);
                            _status.characterlist.remove('qtpz_weixiaobao');
                        }
                        if (player.maxHp > player.hp) {
                            player.recover();
                        }
                        if (target.maxHp > target.hp) {
                            target.recover();
                        }
                    },
                },
                qtpz_yabao: {
                    contentAfter() {
                        'step 0';
                        player.chooseControl('押大', '押小', function (evt, playerx) {
                            var yabao = evt.parent.ya;
                            if (yabao.low.length > yabao.high.length) return '押小';
                            return '押大';
                        });
                        event.num = 0;
                        ('step 1');
                        game.log(player, '声明了' + result.control);
                        event.dix = result.control;
                        ('step 2');
                        ui.clear();
                        event.gain = [];
                        var yabao = event.parent.ya;
                        var dialog = ui.create.dialog('<img style=width:150px height=38px src=extension/金庸群侠传/image/button/jy_button_duguan.jpg>');
                        //var dialog=ui.create.dialog('押宝',true);
                        dialog.addText(get.translation(player));
                        dialog.add(cards);
                        dialog.addText('其他角色的<押宝>牌');
                        dialog.add(yabao.cards);
                        if (yabao.zhuang.length) {
                            dialog.add(get.translation(player) + '的<宝>' + get.translation(cards) + '因撞点' + get.translation(yabao.zhuang) + '能获得的<押宝>牌');
                            dialog.add(yabao.cards);
                            event.gain = yabao.cards;
                        } else if (event.dix == '押大' && yabao.high.length) {
                            dialog.add(get.translation(player) + '的<宝>' + get.translation(cards) + '因押大能获得的<押宝>牌');
                            dialog.add(yabao.high);
                            event.gain = yabao.high;
                        } else if (event.dix == '押小' && yabao.low.length) {
                            dialog.add(get.translation(player) + '的<宝>' + get.translation(cards) + '因押小能获得的<押宝>牌');
                            dialog.add(yabao.low);
                            event.gain = yabao.low;
                        } else {
                            dialog.add('真是失败!什么也没捞到,回家洗洗睡吧!!!');
                        }
                        player.chooseControl('ok').set('dialog', dialog);
                        ('step 3');
                        var gainer = event.gain;
                        if (gainer.length <= 1) {
                            player.say('时运不济,晦气,晦气!');
                        } else if (gainer.length <= 3) {
                            player.say('嘿嘿,弟兄们客气了!');
                        } else {
                            player.$fullscreenpop('鸿运当头', 'fire');
                            player.say('鸿运当头,哈哈,我发了!');
                        }
                        while (gainer.length) {
                            var give = gainer.shift();
                            var owner = get.owner(give);
                            player.gain(give, owner, 'bySelf');
                            owner.$give(give, player);
                        }
                    },
                    content() {
                        'step 0';
                        target.chooseCard('h', 1, '押宝:选择一张手牌当<押宝>牌', true).set('ai', function (card) {
                            return -get.value(card);
                        });
                        ('step 1');
                        if (result.bool) {
                            target.$throw(1, 1000, 'nobroadcast');
                            event.parent.ya.cards.push(result.cards[0]);
                            if (event.parent.ya.player < result.cards[0].number) {
                                event.parent.ya.high.push(result.cards[0]);
                            } else if (event.parent.ya.player > result.cards[0].number) {
                                event.parent.ya.low.push(result.cards[0]);
                            } else if (event.parent.ya.player == result.cards[0].number) {
                                event.parent.ya.zhuang.push(result.cards[0]);
                            }
                        }
                    },
                    contentBefore() {
                        player.$throw(1, 1000, 'nobroadcast');
                        event.parent.ya = {
                            player: cards[0].number,
                            zhuang: [],
                            cards: [],
                            low: [],
                            high: [],
                        };
                    },
                    ai: {
                        order: 9,
                        result: {
                            player: 1,
                            target: -0.5,
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    usable: 1,
                    check(card) {
                        return 8 - get.value(card);
                    },
                    filter(event, player) {
                        return player.countCards('h', { number: [5, 6, 7, 8, 9] }) > 0;
                    },
                    filterTarget(card, player, target) {
                        return target.countCards('h') > 0 && target != player;
                    },
                    filterCard(card, player, target) {
                        var number = card.number;
                        return number >= 5 && number <= 9;
                    },
                    selectCard: 1,
                    selectTarget: [1, 4],
                    discard: false,
                    lose: false,
                },
                qtpz_yabao_old: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    enable: 'phaseUse',
                    usable: 1,
                    multiline: true,
                    check(card) {
                        return 8 - get.value(card);
                    },
                    filter(event, player) {
                        return player.countCards('h', { number: [5, 6, 7, 8, 9] }) > 0;
                    },
                    filterTarget(card, player, target) {
                        return target.countCards('h') > 0 && target != player;
                    },
                    filterCard(card, player, target) {
                        var number = card.number;
                        return number >= 5 && number <= 9;
                    },
                    selectCard: 1,
                    selectTarget: [1, 4],
                    multitarget: true,
                    discard: false,
                    lose: false,
                    content() {
                        'step 0';
                        event.plcard = cards.slice(0);
                        //  game.log(event.plcard[0].number);
                        event.allnumber = [];
                        event.tar = targets;
                        event.da = [];
                        event.xiao = [];
                        event.num1 = 0;
                        event.show = [];
                        ('step 1');
                        if (event.num1 < event.tar.length) {
                            event.tar[event.num1].chooseCard('h', 1, '押宝:选择一张手牌当"押宝"牌', true).set('ai', function (card) {
                                return -get.value(card);
                            });
                        }
                        ('step 2');
                        if (result.bool) {
                            var care = result.cards.slice(0);
                            // event.tar[event.num1].showCards(result.cards[0]);
                            event.show.push(care);
                            //  game.log(care[0].number);
                            if (!event.allnumber.includes(care[0].number)) {
                                event.allnumber.push(care[0].number);
                            }
                            if (event.plcard[0].number < care[0].number) {
                                event.da.push(care);
                            }
                            if (event.plcard[0].number > care[0].number) {
                                event.xiao.push(care);
                            }
                            event.num1++;
                            if (event.num1 < event.tar.length) event.goto(1);
                        }
                        ('step 3');
                        player.chooseControl('大', '小', function (event, player) {
                            if (event.da.length < event.xiao.length) return '小';
                            if (event.da.length > event.xiao.length) return '大';
                            return '小';
                        });
                        ('step 4');
                        if (result.control != '大') {
                            event.controlxiao = true;
                            game.log(player, '声明了小');
                        } else {
                            event.controlda = true;
                            game.log(player, '声明了大');
                        }
                        ('step 5');
                        player.showCards(event.plcard);
                        for (var i = 0; i < event.tar.length; i++) {
                            event.tar[i].showCards(event.show[i]);
                        }
                        ('step 6');
                        event.dialog = ui.create.dialog('hidden');
                        event.dialog.add(get.translation(player) + '的"押宝"牌');
                        event.dialog.add(event.plcard);
                        event.dialog.add('押宝:其他角色的"押宝"牌');
                        for (var i = 0; i < event.tar.length; i++) {
                            event.dialog.add(get.translation(event.tar[i]) + '的"押宝"的牌');
                            event.dialog.add(event.show[i]);
                        }
                        if (event.allnumber.includes(event.plcard[0].number)) {
                            event.dialog.add('因有其他角色"押宝"牌点数等于你的"押宝"牌' + get.translation(event.plcard[0]) + '点数能获得的"押宝"牌');
                            for (var i = 0; i < event.tar.length; i++) {
                                event.dialog.add(event.show[i]);
                            }
                        } else if (event.controlda == true && event.da.length) {
                            event.dialog.add('你的"押宝"牌' + get.translation(event.plcard[0]) + '因押大能获得的"押宝"牌');
                            for (var i = 0; i < event.tar.length; i++) {
                                if (event.da.includes(event.show[i])) {
                                    event.dialog.add(event.show[i]);
                                }
                            }
                        } else if (event.controlxiao == true && event.xiao.length) {
                            event.dialog.add('你的"押宝"牌' + get.translation(event.plcard[0]) + '因押小能获得的"押宝"牌');
                            for (var i = 0; i < event.tar.length; i++) {
                                if (event.xiao.includes(event.show[i])) {
                                    event.dialog.add(event.show[i]);
                                }
                            }
                        }
                        var dialogs = event.dialog;
                        player.chooseControl('ok').set('dialog', dialogs);
                        ('step 7');
                        var countYabaoGainCard = 0;
                        if (event.allnumber.includes(event.plcard[0].number)) {
                            for (var i = 0; i < event.tar.length; i++) {
                                player.gain(event.show[i], event.tar[i]);
                                event.tar[i].$give(event.show[i], player);
                                countYabaoGainCard = countYabaoGainCard + 1;
                            }
                        } else if (event.controlda == true && event.da.length) {
                            for (var i = 0; i < event.tar.length; i++) {
                                if (event.da.includes(event.show[i])) {
                                    player.gain(event.show[i], event.tar[i]);
                                    event.tar[i].$give(event.show[i], player);
                                    countYabaoGainCard = countYabaoGainCard + 1;
                                }
                            }
                        } else if (event.controlxiao == true && event.xiao.length) {
                            for (var i = 0; i < event.tar.length; i++) {
                                if (event.xiao.includes(event.show[i])) {
                                    player.gain(event.show[i], event.tar[i]);
                                    event.tar[i].$give(event.show[i], player);
                                    countYabaoGainCard = countYabaoGainCard + 1;
                                }
                            }
                        }
                        if (countYabaoGainCard <= 1) {
                            player.say('时运不济,晦气,晦气!');
                        } else if (countYabaoGainCard <= 3) {
                            player.say('嘿嘿,弟兄们客气了!');
                        } else {
                            player.$fullscreenpop('鸿运当头', 'fire');
                            player.say('鸿运当头,哈哈,我发了!');
                        }
                    },
                    ai: {
                        order: 9,
                        result: {
                            player: 1,
                            target: -0.5,
                        },
                    },
                },
                qtpz_qiaoshe: {
                    subSkill: {
                        remove: {
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            zhuSkill: true,
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                return player.identity != 'zhu';
                            },
                            content() {
                                player.removeSkill('qtpz_qiaoshe');
                            },
                        },
                    },
                    trigger: { player: 'dying' },
                    zhuSkill: true,
                    group: ['qtpz_qiaoshe_remove'],
                    audio: 'ext:金庸群侠传/peiyin:2',
                    filter(event, player) {
                        if (!player.hasZhuSkill('qtpz_qiaoshe')) return false;
                        if (!player.isDying()) return false;
                        var group = 'shu';
                        if (lib.jy_changeSkill) group = 'jy_qing';
                        return game.hasPlayer(function (current) {
                            if (group != current.group) return false;
                            return current != player;
                        });
                    },
                    content() {
                        'step 0';
                        event.targets = game
                            .filterPlayer(function (current) {
                                var group = 'shu';
                                if (lib.jy_changeSkill) group = 'jy_qing';
                                if (group != current.group) return false;
                                return current != player;
                            })
                            .sortBySeat();
                        //event.targets.remove(player);
                        ('step 1');
                        if (targets.length) {
                            var target = targets.shift();
                            event.target = target;
                            if (!target.isIn()) {
                                event.redo();
                                return;
                            }
                            if (!player.isDying()) {
                                event.finish();
                                return;
                            }
                            target.addTempClass('target');
                            target
                                .chooseBool('巧舌:是否令' + get.translation(player) + '观看牌堆顶七张牌？')
                                .set('ai', function () {
                                    if (get.attitude(_status.event.player, _status.event.sourcex) > 0) return true;
                                    return false;
                                })
                                .set('sourcex', player);
                        } else {
                            event.finish();
                        }
                        ('step 2');
                        if (result.bool) {
                            target.line(player);
                            event.cards = get.cards(7);
                            player.showCards(event.cards, '巧舌');
                        } else {
                            event.goto(1);
                        }
                        ('step 3');
                        player
                            .chooseCardButton(event.cards, 1, '巧舌:是否使用其中一张【酒】或【九花玉露丸】？')
                            .set('filterButton', function (button) {
                                var cards = button.link;
                                return (cards.name == 'jiu' || cards.name == 'tao') && player.canUse(cards, player);
                            })
                            .set('ai', function (button) {
                                return 1;
                            });
                        ('step 4');
                        if (result.bool) {
                            player.useCard(result.links[0], player);
                            event.cards.remove(result.links[0]);
                        }
                        while (event.cards.length) {
                            var cardx = event.cards.pop();
                            ui.cardPile.insertBefore(cardx, ui.cardPile.firstChild);
                        }
                        event.goto(1);
                    },
                },
                ldj_weizui: {
                    group: ['ldj_weizui_after'],
                    subSkill: {
                        after: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                return event.ldj_weizui && event.ldj_weizui.isIn() && event.ldj_weizui.countCards('he');
                            },
                            popup: false,
                            forced: true,
                            _priority: -1,
                            content() {
                                var history = trigger.ldj_weizui.getHistory('sourceDamage', function (evt) {
                                    return evt.card == trigger.card;
                                });
                                var num = 0;
                                for (var i = 0; i < history.length; i++) {
                                    num += history[i].num;
                                }
                                num = num * 2;
                                if (num > trigger.ldj_weizui.countCards('he')) num = trigger.ldj_weizui.countCards('he');
                                if (num !== 0) {
                                    trigger.ldj_weizui.chooseToDiscard(num, true);
                                }
                            },
                        },
                    },
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: { player: 'useCard' },
                    forced: true,
                    filter(event, player) {
                        if (!event.targets || !event.targets.length) return false;
                        if (lib.config.extension_金庸群侠传_jiexiantupo) return get.tag(event.card, 'damage');
                        if (['sha', 'juedou', 'huogong', 'nanman', 'wanjian'].includes(event.card.name)) return true;
                        return false;
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('ldj_weizui'), function (card, player, target) {
                                return target != player;
                            })
                            .set('ai', function (target) {
                                var player = _status.event.player;
                                var att = get.attitude(player, target);
                                if (att < 0) return target.countCards('he');
                                return 0;
                            });
                        ('step 1');
                        if (result.bool) {
                            trigger.customArgs.default.customSource = result.targets[0];
                            trigger.ldj_weizui = result.targets[0];
                        }
                    },
                },
                ldj_zhongji: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        global: ['respond', 'useCard'],
                    },
                    forced: true,
                    filter(event, player) {
                        if (game.countPlayer() < 3) return false;
                        if (!event.respondTo) return false;
                        //if(event.player==player) return false;
                        if (player != event.respondTo[0]) return false;
                        if (event.card.name != 'wuxie') {
                            if (!event.getParent(3).targets || event.getParent(3).targets.length != 1) return false;
                            if (event.getParent(3).card != event.respondTo[1]) return false;
                            if (event.getParent(3).card.name != 'sha' && get.type(event.getParent(3).card) != 'trick') return false;
                        } else {
                            if (get.type(event.getParent(2)._trigger.card) != 'trick' || event.getParent(2)._trigger.targets.length != 1) return false;
                        }
                        var cards = [];
                        if (get.itemtype(event.respondTo[1]) == 'card') cards.push(event.respondTo[1]);
                        else if (event.respondTo[1].cards) cards.addArray(event.respondTo[1].cards);
                        return cards.filterInD('od').length;
                    },
                    content() {
                        'step 0';
                        player
                            .chooseTarget(get.prompt2('ldj_zhongji'), function (card, player, target) {
                                return target != _status.event.source && target != player;
                            })
                            .set('ai', function (target) {
                                var player = _status.event.player;
                                var att = get.attitude(player, target);
                                return att;
                            })
                            .set('source', trigger.player);
                        ('step 1');
                        if (result.bool) {
                            var cards = [];
                            if (get.itemtype(trigger.respondTo[1]) == 'card') cards.push(trigger.respondTo[1]);
                            else if (trigger.respondTo[1].cards) cards.addArray(trigger.respondTo[1].cards);
                            cards = cards.filterInD('od');
                            result.targets[0].gain(cards, 'gain2', 'log');
                        }
                    },
                },
                ldj_yizhu: {
                    audio: 'ext:金庸群侠传/peiyin:2',
                    trigger: {
                        player: 'dying',
                    },
                    init(player) {
                        player.storage.ldj_yizhu = false;
                    },
                    filter(event, player) {
                        var history = player.getAllHistory('useCard');
                        var list = get.inpile(function (name) {
                            return (get.type(name) == 'trick' || get.type(name) == 'basic') && player.hasUseTarget({ name: name }, false);
                        });
                        var list2 = [];
                        if (!list.length) return false;
                        for (var i = 0; i < history.length; i++) {
                            list2.add(history[i].card.name);
                        }
                        list.removeArray(list2);
                        if (!list.length) return false;
                        return !player.storage.ldj_yizhu;
                    },
                    limited: true,
                    content() {
                        'step 0';
                        event.count = 4;
                        player.awakenSkill('ldj_yizhu');
                        player.storage.ldj_yizhu = true;
                        ('step 1');
                        var history = player.getAllHistory('useCard');
                        var list = get.inpile(function (name) {
                            var type = get.type(name);
                            return (type == 'trick' || type == 'basic') && player.hasUseTarget({ name: name }, false);
                        });
                        for (var i = 0; i < history.length; i++) {
                            list.remove(history[i].card.name);
                        }
                        if (!list.length) {
                            event.finish();
                            return;
                        }
                        var list2 = [];
                        for (var i = 0; i < list.length; i++) {
                            if (list[i] == 'sha') {
                                list2.push(['基本', '', 'sha']);
                                for (var j of lib.inpile_nature) list2.push(['基本', '', 'sha', j]);
                            } else {
                                var type = get.type(list[i]);
                                if (type == 'trick') list2.push(['锦囊', '', list[i]]);
                                if (type == 'basic') list2.push(['基本', '', list[i]]);
                            }
                        }
                        if (list2.length == 1) {
                            event._result = { bool: true, links: list2 };
                            event.nochoose = true;
                        } else {
                            var dialog = ui.create.dialog([list2, 'vcard']);
                            player
                                .chooseButton(dialog)
                                .set('ai', function (button) {
                                    return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                                })
                                .set('filterButton', function (button) {
                                    return _status.event.player.hasUseTarget({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                });
                        }
                        ('step 2');
                        if (result.bool) {
                            player.chooseUseTarget(
                                {
                                    name: result.links[0][2],
                                    nature: result.links[0][3],
                                },
                                event.nochoose ? null : true
                            );
                        } else {
                            event.finish();
                        }
                        ('step 3');
                        if (result.bool) {
                            event.count--;
                            if (event.count > 0) event.goto(1);
                        } else {
                            event.finish();
                        }
                    },
                    marktext2: '珠',
                    markimage: 'extension/金庸群侠传/image/icon/jyyizhu.jpg',
                    mark: true,
                    intro: {
                        content: 'limited',
                    },
                },
                ldj_weisheng: {
                    audio: 'ext:金庸群侠传/peiyin:3',
                    enable: 'phaseUse',
                    marktext2: '委',
                    markimage: 'extension/金庸群侠传/image/icon/jyweishen.jpg',
                    mark: true,
                    limited: true,
                    init(player) {
                        player.storage.ldj_weisheng = false;
                    },
                    filter(event, player) {
                        if (player.storage.ldj_weisheng) return false;
                        return true;
                    },
                    filterCard() {
                        return false;
                    },
                    selectCard: -1,
                    filterTarget(card, player, target) {
                        return target != player && !target.hasSkill('ldj_weisheng');
                    },
                    content() {
                        player.awakenSkill('ldj_weisheng');
                        player.storage.ldj_weisheng = true;
                        player.storage.ldj_weisheng2 = target;
                        target.storage.ldj_weisheng2 = player;
                        target.addSkill('ldj_weisheng2');
                        player.addSkill('ldj_weisheng2');
                        //target.markSkillCharacter('ldj_weisheng2',player,'你与其的手牌对彼此始终可见,且你与其可在合适的时机,使用彼此的一张手牌(每名角色的回合限一次),以此法失去红色牌的角色摸一张牌.');
                        //player.markSkillCharacter('ldj_weisheng2',target,'你与其的手牌对彼此始终可见,且你与其可在合适的时机,使用彼此的一张手牌(每名角色的回合限一次),以此法失去红色牌的角色摸一张牌.');
                    },
                    ai: {
                        order: 9,
                        result: {
                            target: 2,
                        },
                        threaten: 2,
                    },
                    intro: {
                        content: 'limited',
                    },
                },
                ldj_weisheng3: {
                    charlotte: true,
                },
                ldj_weisheng2: {
                    mod: {
                        cardEnabled2(card, player) {
                            if (_status.event.skill && get.itemtype(card) == 'card' && card.hasGaintag('ldj_weisheng')) return false;
                        },
                        aiOrder(player, card, num) {
                            if (get.itemtype(card) == 'card' && card.hasGaintag('ldj_weisheng') && get.color(card) == 'red') return num + 1;
                        },
                    },
                    intro: { content: '你与$的手牌对彼此始终可见,且你与其可在合适的时机,使用彼此的一张手牌(每名角色的回合限一次),以此法失去红色牌的角色摸一张牌.' },
                    charlotte: true,
                    forced: true,
                    lastDo: true,
                    audio: 'ldj_weisheng',
                    trigger: { player: ['chooseToRespondBegin', 'chooseToUseBegin'] },
                    hiddenCard(player, name) {
                        if (player.hasSkill('ldj_weisheng3')) return false;
                        const target = player.storage.ldj_weisheng2;
                        if (!target || !target.isIn()) return false;
                        return target.getCards('h').some((i) => i.name == name);
                    },
                    filter(event, player) {
                        if (event.responded || event.skill) return false;
                        if (player.hasSkill('ldj_weisheng3')) return false;
                        const target = player.storage.ldj_weisheng2;
                        if (!target || !target.isIn()) return false;
                        return target.countCards('h');
                    },
                    onremove(player, skill) {
                        const cards2 = player.getCards('s', function (card) {
                            return card.hasGaintag('ldj_weisheng');
                        });
                        if (cards2.length) {
                            lib.skill.ldj_weisheng.onUpdate(player, cards2);
                        }
                    },
                    onUpdate(player, cards2) {
                        if (player.isOnline2()) {
                            player.send(
                                function (cards, player) {
                                    cards.forEach((i) => i.delete());
                                    if (player == game.me) ui.updatehl();
                                },
                                cards2,
                                player
                            );
                        }
                        cards2.forEach((i) => i.delete());
                        if (player == game.me) ui.updatehl();
                    },
                    precontent() {
                        event.result['ldj_weisheng2'].draw();
                        delete event.result['ldj_weisheng2'];
                    },
                    content() {
                        const target = player.storage.ldj_weisheng2;
                        const cards = target.getCards('h');
                        const gains = cards.map(function (card) {
                            const cardx = ui.create.card();
                            cardx.init(get.cardInfo(card));
                            cardx._cardid = card.cardid;
                            return cardx;
                        });
                        player.directgains(gains, null, 'ldj_weisheng');
                        trigger.pushHandler(function (event, option) {
                            if (event.ldj_weisheng) return;
                            if (event.step == 4 && option.state == 'begin') {
                                event.set('ldj_weisheng', true);
                                const player = event.player;
                                const playerCards = player.getCards('s', function (card) {
                                    return card.hasGaintag('ldj_weisheng');
                                });
                                if (event.result && event.result.bool) {
                                    const target = player.storage.ldj_weisheng2;
                                    const cards = target.getCards('h');
                                    const cards2 = [];
                                    if (!event.result.cards) event.result.cards = [];
                                    for (var card of event.result.cards) {
                                        var cardx = cards.filter((cardx) => cardx.cardid == card._cardid);
                                        if (cardx.length) cards2.push(cardx[0]);
                                    }
                                    if (cards2.some((i) => get.color(i, target) == 'red')) {
                                        if (!event.nouse) {
                                            var next = target.draw();
                                            event.next.remove(next);
                                            event.after.push(next);
                                        } else if (!event.result.skill) {
                                            event.result.skill = 'ldj_weisheng2';
                                            event.result['ldj_weisheng2'] = target;
                                        } else {
                                            var next = target.draw();
                                            event.next.remove(next);
                                            event.getParent.next.push(next);
                                        }
                                    }
                                    if (cards2.length) {
                                        player.addTempSkill('ldj_weisheng3');
                                        event.result.cards = cards2;
                                        event.result.card.cards = cards2;
                                    }
                                }
                                if (player.isOnline2()) {
                                    player.send(
                                        function (cards, player) {
                                            cards.forEach((i) => i.delete());
                                            if (player == game.me) ui.updatehl();
                                        },
                                        playerCards,
                                        player
                                    );
                                }
                                playerCards.forEach((i) => i.delete());
                                if (player == game.me) ui.updatehl();
                            }
                        });
                    },
                    ai: {
                        save: true,
                        viewHandcard: true,
                        respondSha: true,
                        respondShan: true,
                        fireAttack: true,
                        skillTagFilter(player, tag, arg) {
                            if (tag == 'viewHandcard') {
                                if (player == arg) return false;
                                if (player.storage.ldj_weisheng2 != arg) return false;
                                return true;
                            }
                            const target = player.storage.ldj_weisheng2;
                            if (!target || !target.isIn()) return false;
                            const cards = target.getCards('h');
                            if (Array.isArray(cards)) for (var i of cards) {
                                if (tag == 'respondSha') {
                                    if (i.name == 'sha') return true;
                                } else if (tag == 'respondShan') {
                                    if (i.name == 'shan') return true;
                                } else if (tag == 'save') {
                                    if (i.name == 'jiu' || i.name == 'tao') return true;
                                } else if (tag == 'fireAttack') {
                                    if (i.name == 'huogong') return true;
                                }
                            }
                            return false;
                        },
                    },
                    onremove(player) {
                        var target = player.storage.ldj_weisheng2;
                        target.unmarkSkill('ldj_weisheng2');
                        player.unmarkSkill('ldj_weisheng2');
                    },
                },
                //------------------------技能-----------------
            },
            translate: {
                ldj_nanhuairentangruowang: '南怀仁汤若望',
                ldj_chuanjiao: '传教',
                ldj_chuanjiao_info: '出牌阶段限一次,你使用基本牌或锦囊牌后,你可以观看一名其他角色的手牌,将其中一张同花色的牌改为你使用的牌名.直到你下个回合开始或你死亡,依此法被选择过的角色也可以这么做,但不能选择此间已被选择过的角色.',
                ldj_jingxue: '镜学',
                ldj_jingxue_info: '回合开始时,你可以为至多四名角色分配不同效果, 每名角色限分配一项, 你的下回合开始时或其触发一次后失去.聚光:其他角色以你为目标的牌结算完后,你可获得之. 散光:你使用的基本牌或普通锦囊牌无目标数量限制.偏光:你成为基本牌的唯一目标时,若来源不是你的下家,则目标改为你的下家.反射:你成为锦囊牌唯一目标时,目标改来源(需合法).',
                ldj_jingxue_juguang: '其他角色以你为目标的牌结算完后,你可获得之.',
                ldj_jingxue_sanguang: '你使用的基本牌或普通锦囊牌无目标数量限制.',
                ldj_jingxue_pianguang: '你成为基本牌的唯一目标时,若来源不是你的下家,则目标改为你的下家.',
                ldj_jingxue_fanshe: '你成为锦囊牌唯一目标时,目标改来源(需合法).',
                ldj_jupao: '巨炮',
                ldj_jupao_info: '<b>锁定技.</b>你的攻击范围初始值为8.你使用【杀】指定目标后,可为此杀选择任意个效果.①改为【火杀】;②目标上家下家也成为目标;③只能用轻功【闪】响应;④造成伤害后弃置目标两张牌;⑤伤害+1.每项限选一次.',
                ldj_wuzhirong: '吴之荣',
                ldj_wenyu: '文狱',
                ldj_wenyu_info: '<b>锁定技.</b>你拥有狱字<杀、伤害、获得、弃置>;回合开始时,你需激活一个仅你知道的狱字.当其他角色使用卡牌描述中含有该狱字的牌时,你可以选择:弃置其X张牌;或弃置X名其他角色各一张牌(X为此牌名的字数)你需更换一个狱字激活.',
                ldj_xingan: '兴案',
                ldj_xingan_info: '<b>限定技.</b>当处于横置状态的角色受到传导属性的属性伤害时,你可以令此伤害值比该传导链中的上一名角色受到的伤害数+1.',
                ldj_yuanzui: '冤罪',
                ldj_yuanzui_info: '出牌阶段限一次,你可以令一名未横置的角色选择一项:交给你一张牌;其横置.',
                ldj_pangshoutoutuo: '胖瘦头陀',
                ldj_dubian: '毒变',
                ldj_dubian_info: '<b>转换技,锁定技.</b>摸牌阶段开始时,你改为:阴,摸已损失体力值数量的牌,本回合使用牌无距离限制;阳,摸当前体力值数量的牌,本回合手牌上限基数改为已损失的体力值.',
                ldj_fuming: '复命',
                ldj_fuming_info: '出牌阶段限一次,你可以令一名其他角色声明一种牌的类别,你将一张手牌交给该角色.若你交给其的牌与其声明的类别相同,你回复一点体力,否则你失去一点体力.',
                qtpz_wusangui: '吴三桂',
                qtpz_xianguan: '献关',
                qtpz_xianguan_info: '其他角色回合开始时,你可以弃置一张手牌并选择令一名角色,其此回合计算你选择的角色距离始终为一,并且其对你选择的角色使用牌时,你可以选择摸一张牌或令其摸一张牌.',
                qtpz_fanluan: '藩乱',
                qtpz_fanluan_info: '<b>限定技,</b>你的出牌阶段开始时,你可以令你此阶段使用【杀】的次数加X(X为场上武器牌的数量).',
                qtpz_sangjielama: '桑结喇嘛',
                qtpz_dayin: '大印',
                qtpz_dayin_info: '其他角色响,应或抵消你使用的牌时,你可以令其选择是否弃置一张牌,若其选择否,其此次使用或打出的牌无效.',
                qtpz_shuanger: '双儿',
                qtpz_xiangfu: '相夫',
                qtpz_xiangfu_info: '一名角色的牌因弃置进入弃牌堆时,你可以失去一点体力,将这些牌返回其手牌区.',
                qtpz_kangli: '伉俪',
                qtpz_kangli_info: '每轮限一次,其他角色获得牌后,你可以令其选择一项:①弃置获得的牌,②令你摸等量的牌.',
                qtpz_maodongzhu: '毛东珠',
                qtpz_huagu: '化骨',
                qtpz_huagu_info: '其他角色使用♠️️基本牌或♠️️普通锦囊牌时,你可以令其判定.若判定结果为黑色,则此牌无效.',
                qtpz_luanwei: '乱闱',
                qtpz_luanwei_info: '其他角色使用的普通锦囊牌进入弃牌堆后,你可以令其选择一项:①令你获得该锦囊牌.②失去一点体力.(其他角色使用普通锦囊牌后,若你已此法获得过同名牌,则此技能失效).',
                qtpz_hongantong: '洪安通',
                qtpz_aozun: '傲尊',
                qtpz_aozun_info: '你打出一张牌或你使用的一张牌被其他角色响应后,若你打出/使用比其使用/打出的牌点数大,你可以收回此牌.',
                qtpz_baotai: '豹胎',
                qtpz_baotai_info: '出牌阶段限一次,你可以将至多两张手牌交给一名其他角色,称为<豹胎>牌.每当其使用或打出一张<豹胎>牌后其失去一点体力.若<豹胎>牌被弃置,其下个回合摸牌数减X(X为其上轮弃置的豹胎牌数量).',
                qtpz_zengrou: '曾柔',
                qtpz_zhitou: '掷骰',
                qtpz_zhitou_info: '出牌阶段开始时,你可以亮出牌堆顶1张牌,称为<骰>,本阶段内,若<骰>的点数:大于7,你使用点数大于7的牌时,你摸一张牌;小于7,你使用点数小于7的牌时,你摸一张牌;等于7,你使用牌时,你摸一张牌.',
                qtpz_wangfu: '望夫',
                qtpz_wangfu_info: '出牌阶段限一次,若你有手牌,你可以令一名有手牌的男性角色观看你的手牌,其可以用一张手牌交换你的一张手牌.',
                qtpz_haidafu: '海大富',
                qtpz_fenji: '愤激',
                qtpz_fenji_info: '其他角色摸牌阶段结束时,你可以展示其两张手牌.若花色不同,视为其对你使用一张<硝磷火弹>,否则你减一点体力上限.',
                ldj_huashi: '化尸',
                ldj_huashi_info: '其他角色出牌阶段开始时,你可以失去一点体力上限,声明一种花色,其此回合不能使用或打出该花色的牌.',
                qtpz_shidu: '嗜毒',
                qtpz_shidu_info: '<b>锁定技,</b>当你使用的属性杀(【火杀】、【雷杀】、【冰杀】、【毒杀】、【邪杀】、【刺杀】、【神杀】)或【硝磷火弹】指定目标或成为此牌的目标时,你加一点体力上限.你可以将的属性杀(【火杀】、【雷杀】、【冰杀】、【毒杀】、【邪杀】、【刺杀】、【神杀】)或【硝磷火弹】当【九花玉露丸】使用.',
                qtpz_shidu_tao: '嗜毒',
                qtpz_shidu_tao_info: '',
                qtpz_aobai: lib.config.extension_金庸群侠传_jiexiantupo ? '界鳌拜' : '鳌拜',
                qtpz_shezheng: '摄政',
                qtpz_shezheng_info: (function () {
                    if (lib.config.extension_金庸群侠传_jiexiantupo) return '每轮每种花色限一次,其他角色的【杀】因弃置或判定进入弃牌堆后,你可以对其攻击范围内的一名其他角色使用此【杀】.';
                    return '每轮限一次,其他角色的【杀】因弃置而进入弃牌堆后,你可以对其攻击范围内的一名其他角色使用此【杀】.';
                })(),
                //"qtpz_shezheng":"摄政",
                //"qtpz_shezheng_info":"每轮限一次,其他角色的【杀】因弃置而进入弃牌堆后,你可以对其攻击范围内的一名其他角色使用此杀.",
                qtpz_yingshi: '营私',
                qtpz_yingshi_info: '<b>锁定技.</b>每当你于回合外使用或打出【杀】后,你摸1张牌.',
                qtpz_fengjizhong: '风际中',
                qtpz_diebao: '谍报',
                qtpz_diebao_info: '当一名角色被其他角色获得或弃置而失去牌时,你可以观看其手牌并代替其选择失去的牌;一名角色进行判定前,你可以观看牌堆顶2张牌,并可以将其调换此牌的顺序.',
                qtpz_diebao1: '谍报',
                qtpz_diebao1_info: '任意一名角色进行判定前,你可以观看牌堆顶的两张牌,并可以将其调换顺序.',
                qtpz_jibian: '机变',
                qtpz_jibian_info: '其他角色不因〖机变〗使用红色普通锦囊牌或基本牌后,你可以交给其一张红色手牌.若如此做,视为你使用了其使用的牌.',
                qtpz_jianninggongzhu: '建宁公主',
                qtpz_weizhao: '违诏',
                qtpz_weizhao_info: '当一名角色成为延时锦囊牌的目标时,你可以令此牌视为由你声明的另一种延时锦囊牌.',
                qtpz_yunie: '欲孽',
                qtpz_yunie_info: '出牌阶段限一次,若你有手牌,你可以选择一名其他角色,令其声明一种普通锦囊牌的牌名,你选择:将一张手牌当其声明的牌使用,其摸1张牌;或弃置其区域里的一张牌.',
                qtpz_xuanye: '玄烨',
                qtpz_zhenfan: '镇藩',
                qtpz_zhenfan_info: '其他角色造成伤害后,你可以弃置一张手牌,其装备区里一张装备牌当<疆>置于你的侠客牌上.',
                qtpz_fujiang: '复疆',
                qtpz_fujiang_info: '当你的牌因弃置而进入弃牌堆时,你可以将这些牌置于侠客牌上,称为<疆>.每当你失去手牌后,你可以用任意<疆>将手牌补至手牌上限.',
                qtpz_fujiang1: '复疆',
                qtpz_fujiang1_info: '每当你失去手牌后,你可以用任意<疆>将手牌补至手牌上限.',
                qtpz_shengshi: '盛世',
                qtpz_shengshi_info: (function () {
                    if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.</b>每回合限一次,其他清势力角色的牌因弃置而进入弃牌堆时,其可以将其中一张牌当<疆>置于你侠客牌上.';
                    return '<b>盟主技.</b>每回合限一次,其他蜀势力角色的牌因弃置而进入弃牌堆时,其可以将其中一张牌当<疆>置于你侠客牌上.';
                })(),
                //"qtpz_shengshi_info":"<b>盟主技.</b>每回合限一次,其他XXX势力角色的牌因弃置而进入弃牌堆时,其可以将其中一张牌当<疆>置于你侠客牌上.",
                qtpz_weihutou: '韦虎头',
                qtpz_fuyin: '父荫',
                qtpz_fuyin_info: '摸牌阶段开始时,你可以放弃摸牌,选择摸大或摸小并亮出牌堆顶7张牌.若你选择摸大,你获得其中A-7点的牌;若你选择摸小,你获得其中7-K点的牌.',
                qtpz_fuyin_old_info: '<b>锁定技.</b>摸牌阶段开始时,你可以放弃摸牌,声明大或小,并亮出牌堆顶7张牌.若你声明大,你获得其中点数大于7的牌;若你声明小,你获得其中点数小于7的牌,若其中至少有一张点数为7的牌,你获得亮出的所有牌.',
                qtpz_mengtong: '蒙童',
                qtpz_mengtong_info: '每轮限一次,一名角色的判定牌生效前,你可以任意改变此牌的花色.',
                ldj_mujianpin: '沐剑屏',
                ldj_weisheng: '委身',
                ldj_weisheng_info: '<b>限定技.</b>出牌阶段,你选一名其他角色,你与其的手牌对彼此始终可见,且你与其可在合适的时机,使用彼此的一张手牌(每名角色的回合限一次),以此法失去红色牌的角色摸一张牌.',
                ldj_weisheng2: '委身',
                ldj_weisheng2_info: '',
                ldj_yizhu: '遗珠',
                ldj_yizhu_info: '<b>限定技.</b>你进入濒死状态时,你可以依次选择视 为使用至多四张你于本局游戏中未使用过的牌名各不相同的基本牌或普通锦囊牌.',
                ldj_fangyi: '方怡',
                ldj_weizui: '诿罪',
                ldj_weizui_info: (function () {
                    if (lib.config.extension_金庸群侠传_jiexiantupo) return '当你使用(伤害类卡牌)指定目标时,你可以选择一名其他角色(可选此牌目标)代替你成为此牌的伤害来源.此牌结算完后,其须弃置2X张牌(X为此牌造成的伤害数).';
                    return '当你使用【杀】、【比武】、【硝磷火弹】、【鞑虏入侵】或【漫天花雨】指定目标时,你可以选择一名其他角色(可选此牌目标)代替你成为此牌的伤害来源.此牌结算完后,其须弃置2X张牌(X为此牌造成的伤害数).';
                })(),
                ldj_zhongji: '忠继',
                ldj_zhongji_info: '你使用的【杀】或普通锦囊牌指定唯一目标后, 若此牌被抵消,你可将之交给一名除目标外的其他角色.',
                qtpz_weixiaobao: '韦小宝',
                qtpz_yabao: '押宝',
                qtpz_yabao_info: '出牌阶段限一次,你可以扣置一张点数为5~9的手牌,称为<宝>,你令至多四名其他角色各扣置一张手牌,你声明大或小,最后你与其他角色展示扣置的牌.若你:声明大,你获得其中点数大于<宝>的牌;声明小,你获得点数小于<宝>的牌.若其中至少有一张与<宝>点数相同,你获得所有其他角色展示的牌.',
                qtpz_qiaoshe1: '巧舌',
                qtpz_qiaoshe1_info: '',
                qtpz_qiaoshe: '巧舌',
                qtpz_qiaoshe_info: (function () {
                    if (lib.config.extension_金庸群侠传_changeGroup) return '<b>盟主技.</b>当你进入濒死状态时,其他清势力角色可以展示牌堆顶7张牌,并令你使用其中的一张酒或桃.';
                    return '<b>盟主技.</b>当你进入濒死状态时,其他蜀势力角色可以展示牌堆顶7张牌,并令你使用其中的一张酒或桃.';
                })(),
                //"qtpz_qiaoshe_info":"<b>盟主技.</b>当你进入濒死状态时,其他XXX势力角色可以展示牌堆顶7张牌,并令你使用其中的一张酒或桃.",
                qtpz_suquan: '苏荃',
                qtpz_zhenggang: '正纲',
                qtpz_zhenggang_info: '其他角色回合开始时,若其体力值比其上家的体力值小,你可令其本回合内最多只能使用X张牌(X为其上家上个回合内使用的牌数).若其本回合内未使用过牌,此技能本轮内无效.',
                qtpz_zhenggang1: '正纲',
                qtpz_zhenggang1_info: '',
                qtpz_yiqing: '移情',
                qtpz_yiqing_info: '<b>限定技.</b>当你进入濒死状态时,如果韦小宝不在场上,你令一名其他男性角色用韦小宝代替其武将.你与其各回复一点体力.',
                qtpz_chenjinnan: '陈近南',
                qtpz_ningxue: '凝血',
                qtpz_ningxue_info: '你使用【杀】后,若目标抵消之,你可以令其下个回合不能使用基本牌;若其受到伤害,你可以令其下个回合不能使用锦囊牌.',
                qtpz_zhongsu: '忠恕',
                qtpz_zhongsu_info: '你可以立即将对你造成伤害的牌交给伤害来源,若如此做,你摸1张牌.',
                ldj_weixiaobaojianning: lib.config.extension_金庸群侠传_jiexiantupo ? '界韦小宝建宁' : '韦小宝建宁',
                ldj_haodu: '豪赌',
                ldj_haodu_info: (function () {
                    if (lib.config.extension_金庸群侠传_jiexiantupo) return '准备阶段开始时,你可以选择一名其他角色依次将牌堆顶前3张牌在处理区按任意顺序扣置,其与你轮流将这些牌放回牌堆顶.接着,你们用牌堆顶的牌进行3次拼点,你每赢一次,你获得你的拼点牌.最后,若你赢一次,你本回合获得〖诛心〗,若你赢两次,你本回合获得〖凝血〗,若你赢三次,你本回合获得〖掷骰〗,若你赢零次,你弃置所有装备区里的牌.';
                    return '准备阶段开始时,你可以选择一名其他角色依次将牌堆顶前3张牌在处理区按任意顺序扣置,其与你轮流将这些牌放回牌堆顶.接着,你们用牌堆顶的牌进行3次拼点,你每赢一次,你获得你的拼点牌.最后,若你赢两次,你本回合获得〖凝血〗,若你赢三次,你本回合获得〖掷骰〗,若你赢零次,你弃置所有装备区里的牌.';
                })(),
                ldj_yuannie: '冤孽',
                ldj_yuannie_info: '出牌阶段限一次,你可以令一名有手牌的其他角色选择是否将一张手牌当你声明的普通锦囊使用.若其选择是,你失去一点体力,若其选择否,其弃置一张牌.',
                ldj_wuyingxiong: '吴应熊',
                ldj_yazhi: '联姻',
                ldj_yazhi_info: '每轮限两次,当一名角色对另一名角色造成伤害后,你可以将来源一张手牌当<质>置于你的侠客牌上,并令目标摸一张牌,若此时这两名角色的手牌数相等,你摸一张牌.',
                ldj_lianyin: '押质',
                ldj_lianyin_info: '其他角色在需要对你使用【杀】时,可将一张黑色的<质>当【杀】对你使用;其他角色的出牌阶段,其可将一张红色的<质>当【隔空点穴】或【运功疗伤】对你使用.',
                ldj_lianyin2: '押质',
                ldj_lianyin2_info: '其他角色在需要对你使用【杀】时,可将一张黑色的<质>当【杀】对你使用;其他角色的出牌阶段,其可将一张红色的<质>【隔空点穴】或【运功疗伤】对你使用.',
                ldj_goulan: '勾栏',
                ldj_goulan_info: '出牌阶段限一次,你可以与至多四名其他角色各扣置一张手牌,你展示这些牌.你令其中展示牌的点数与你展示牌的点数之差的绝对值最小的角色与你各摸一张牌,其余角色需各弃置一张牌.',
                ldj_wasi: '瓦肆',
                ldj_wasi_info: '<b>限定技.</b>出牌阶段,你观看一名其他男性角色的手牌,获得其中你手牌中没有的花色的牌各一张.',
                ldj_weichunhua: '韦春花',
                ldj_ake: '阿珂',
                ldj_zhuxin: '诛心',
                ldj_zhuxin_info: '<b>锁定技.</b>你对一名其他角色造成伤害时,其需展示一张♥️️手牌,否则此伤害+1.',
                ldj_juese: '绝色',
                ldj_juese_info: '其他男性角色的出牌阶段限一次,其可以交给你一张♥️️牌,你可以令其摸两张牌.',
                ldj_juese2: '绝色',
                ldj_juese2_info: '其他男性角色的出牌阶段限一次,其可以交给你一张♥️️牌,你可以令其摸两张牌.',
                ldj_juese3: '绝色',
                ldj_juese3_info: '其他男性角色的出牌阶段限一次,其可以交给你一张♥️️牌,你可以令其摸两张牌.',
                ldj_sufeiya: '苏菲亚',
                ldj_diyue: '缔约',
                ldj_diyue_info: '你的回合开始时,你可以令一名装备了武器或秘籍牌的角色摸等同于其武器和秘籍牌总数量的牌,你本回合内视为装备了其武器和秘籍.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他角色的回合开始时,若你装备了武器或秘籍牌,其可以令你摸等同于你武器和秘籍牌总数量的牌,其本回合内视为装备了你的武器和秘籍.',
                ldj_diyue2: '缔约',
                ldj_diyue2_info: '你的回合开始时,你可以令一名装备了武器或秘籍牌的角色摸等同于其武器和秘籍牌总数量的牌,你本回合内视为装备了其武器和秘籍.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他角色的回合开始时,若你装备了武器或秘籍牌,其可以令你摸等同于你武器和秘籍牌总数量的牌,其本回合内视为装备了你的武器和秘籍.',
                ldj_diyue_equip: '缔约',
                ldj_diyue_equip_info: '你的回合开始时,你可以令一名装备了 武器或秘籍牌的角色摸等同于其武器和秘籍牌总数量的牌,你本回合内视为装备了其武器和秘籍.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他角色的回合开始时,若你装备了武器或秘籍牌,其可以令你摸等同于你武器和秘籍牌总数量的牌,其本回合内视为装备了你的武器和秘籍.',
                ldj_zhengluan: '政乱',
                ldj_zhengluan_info: '出牌阶段,若你未拥有帮派技,你可以获得你的一项帮派技;若你已拥有帮派技,你可以令一名其他角色失去其所有帮派技.',
                ldj_weishihougong: '韦氏后宫',
                ldj_jinghong: '惊鸿',
                ldj_jinghong_info: '[6点]出牌阶段限一次,你可以摸X张牌(X为其他角色区域内的♥️️牌数).',
                ldj_fengyuan_info: '每种牌名限一次,你使用牌指定其他角色为目标或你成为其他角色使用牌的目标时,你可与其各摸一张牌取消之 .',
                ldj_fengyuan: '逢源',
                ldj_fugang: '夫纲',
                ldj_fugang_info: '<b>锁定技.</b>其他女性角色在其回合内对你使用的首张牌若不为♥️️牌,此牌对你无效.',
                ldj_fanpai: '翻牌',
                ldj_fanpai_info: '回合开始时你摇骰子,根据点数你于本回合内获得技能.',
                ldj_yuanzhong: '冤种',
                ldj_yuanzhong_info: '[1点]出牌阶段限一次,你对一名其他角色随机使用一张延时锦囊牌,若为:【运功疗伤】,其失去一点体力;【隔空点穴】(【乐不思蜀】),你回复一点体力.',
                ldj_huizhong: '慧中',
                ldj_huizhong_info: '[2点]当你获得或弃置牌后,你可令一名其他角色摸等量牌.',
                ldj_xiuwai_info: '[3点]<b>锁定技,</b>你使用黑色伤害类卡牌造成伤害+1,且结算完后可交给其他角色.',
                ldj_xiuwai: '秀外',
                ldj_yazhu1: '押注',
                ldj_yazhu2: '押注',
                ldj_yazhu: '押注',
                ldj_yazhu_info: '[4点]出牌阶段开始时你可选择:本阶段只能使用1-7点的牌且使用这些点数的牌后摸一张牌;或只能使用7-K点的牌且使用这些点数的牌可额外指定一个目标,本阶段未使用过的点数的牌不占手牌上限.',
                ldj_linglong: '玲珑',
                ldj_linglong_info: '[5点]你于本回合首次使用一种牌名后,你可以令一名角色摸1张牌.',
                ldj_zhengkeshuang: '郑克塽',
                ldj_wanku: '纨绔',
                ldj_wanku_info: '出牌阶段限一次,你可以选择至多四名其他角色并随机获得这些角色区域内两张♥️️或♠️️牌.若你依此法获得的牌:只有♥️️,你可以视为使用一张【无极而生】;只有♠️️,你可以视为使用一张【见招拆招】;♥️️和♠️️都有,你可以选择视为使用一张【鞑虏入侵】或【漫天花雨】.',
                ldj_xiangqing: '降清',
                ldj_xiangqing_info: '<b>觉醒技.</b>当你因〖纨绔〗使用过三种牌后,你获得〖南伐〗,且发动〖纨绔〗时可以【鞑虏入侵】和【漫天花雨】都使用,且你使用上述两种牌对汉人角色造成的伤害+1.',
                ldj_xiangqing2: '降清',
                ldj_xiangqing2_info: '<b>觉醒技.</b>当你因〖纨绔〗使用过三种牌后,你获得〖南伐〗,且发动〖纨绔〗时可以【鞑虏入侵】和【漫天花雨】都使用,且你使用上述两种牌对汉人角色造成的伤害+1.',
                ldj_jueshi: '绝世高手',
                ldj_zijincheng: '紫禁城',
                ldj_tiandihui: '天地会',
                ldj_lichunyuan: '丽春院',
                ldj_shenlongjiao: '神龙教',
                ldj_muwangfu: '沐王府',
                ldj_wangwushan: '王屋山',
                ldj_shaolin: '少林',
                ldj_taiwan: '台湾郑家',
                ldj_pingxiwangfu: '平西王府',
                ldj_shae: '沙俄',
                ldj_zangzhong: '藏宗',
                ldj_xiake: '江湖侠客',
                ldj_taiwan: '台湾郑氏',
                ldj_dongefei: '董鄂妃',
                ldj_zhuanchong: '专宠',
                ldj_zhuanchong_info: '出牌阶段限一次,你可以将你手牌中四种花色的牌补至一样多(若你没有手牌则改为获得四种花色的牌各一张).',
                ldj_feiming: '非命',
                ldj_feiming_info: '<b>锁定技.</b>每当你在本局游戏中累计使用了四种花色的牌后,你需选择一项:你受到1点无来源的蛊毒伤害;弃置2张牌.',
                ldj_fulin: '福临',
                ldj_mizhi_given: '已分配',
                ldj_mizhi: '密旨',
                ldj_mizhi_info: '回合结束时,你可以翻面,获得4张黑色普通锦囊牌并任意分配之.一名角色使用此法获得的【见招拆招】、【妙手空空】时,目标的手牌对其可见.',
                ldj_kongmen: '空门',
                ldj_kongmen_info: '你展示手牌时或失去牌后,若此时你处于负面状态,你摸X张牌(X为此次展示或失去的手牌数,每回合限4次).',
                ldj_foyuan: '佛缘',
                ldj_foyuan2: '佛缘',
                ldj_foyuan_info: '<b>盟主技.</b>与你同势力的其他角色出牌阶段限一次,其可以展示你的一张手牌,将一张手牌当此牌使用(不能使用则跳过此步).',
                ldj_foyuan4: '佛缘',
                ldj_foyuan4_info: '<b>盟主技.</b>与你同势力的其他角色出牌阶段限一次,其可以展示你的一张手牌,将一张手牌当此牌使用(不能使用则跳过此步).',
                ldj_foyuan2_info: '<b>盟主技.</b>与你同势力的其他角色出牌阶段限一次,其可以展示你的一张手牌,将一张手牌当此牌使用(不能使用则跳过此步).',
                ldj_foyuan3: '佛缘',
                ldj_foyuan3_info: '<b>盟主技.</b>与你同势力的其他角色出牌阶段限一次,其可以展示你的一张手牌,将一张手牌当此牌使用(不能使用则跳过此步).',
                ldj_mizhi3: '密旨',
                ldj_mizhi3_info: 'undefined',
                ldj_mizhi2: '密旨',
                ldj_mizhi2_info: 'undefined',
                ldj_jue_weixiaobao: '绝韦小宝',
                ldj_huachai: '花差',
                ldj_huachai_info: '回合开始时,你获得场上所有<银票>(若无则跳过),从牌堆顶将所有其他角色的侠客牌上各放置一张牌,称为<银票>,你摇骰子并记录点数(若有记录则清除).在你下个回合开始之前,其他角色累计使用或打出第X张(X为你摇骰子的点数)花色与其<银票>一致的牌后,其获得其<银票>.',
                ldj_huijiao_info: '每当你受到伤害后,你可以与至多四名其他角色议事.和你意见一致的角色需令你摸一张牌,和你意见不一致的角色需弃置一张牌.',
                ldj_huijiao: '贿交',
                ldj_tongchi: '通吃',
                ldj_tongchi_info: '每回合限一次,其他角色使用伤害卡牌指定其他角色为唯一目标时,你可令来源与目标拼点.若:目标赢,你获得两张拼点牌且此伤害牌取消结算;来源赢,你成为此伤害牌的额外目标且本局游戏你不能再对该来源角色发动本技能.',
            },
        };
        for (var i in jyldj.character) {
            jyldj.character[i][4].push('jy_die_audio');
            jyldj.character[i][4].push(`die:ext:金庸群侠传/peiyin:true`);
            jyldj.character[i][4].push('ext:金庸群侠传/character/yuanban/' + i + '.jpg');
        }
        return jyldj;
    });
});

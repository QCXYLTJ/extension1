'use strict';
//WaterMargin
game.import('character', function (lib, game, ui, get, ai, _status) {
    const WaterMargin = {
        name: 'WaterMargin',
        connect: true,
        character: {
            'SH-001': ['male', 'qun', 3, ['shfengshi', 'shjuyi', 'shshenzhu', 'shtiankui'], []],
            'SH-002': ['male', 'qun', 4, ['shguanjue', 'shweiyi', 'shtiangang'], []],
            'SH-003': ['male', 'qun', 3, ['shzhijue', 'shduomou', 'shshanduan', 'shtianji'], []],
            'SH-004': ['male', 'qun', 3, ['shqulei', 'shchedian', 'shwulei', 'shtianxian'], []],
            'SH-005': ['male', 'qun', 3, ['shwujue', 'shshenyi', 'shtianyong'], []],
            'SH-006': ['male', 'qun', 3, ['shbaoxiao', 'shlinye', 'shtianxiong'], []],
            'SH-007': ['male', 'qun', 3, ['shbanghe', 'shtianmeng'], []],
            'SH-008': ['male', 'qun', 3, ['shlianqi', 'shtamie', 'shtianwei'], []],
            'SH-009': ['male', 'qun', 3, ['shyinqiang', 'shchuanyang', 'shtianying'], []],
            'SH-010': ['male', 'qun', 3, ['shshucai', 'shmingmen', 'shtiangui'], []],
            'SH-011': ['male', 'qun', 3, ['shshayu', 'shfeiling', 'shtianfu'], []],
            'SH-012': ['male', 'qun', 3, ['shbihu', 'shchennu', 'shtianman'], []],
            'SH-013': ['male', 'qun', 4, ['shwangdao', 'shwujuexin', 'shtiangu'], []],
            'SH-014': ['male', 'qun', '4/6', ['shxiangmo', 'shtianshang'], []],
            'SH-015': ['male', 'qun', 4, ['shzhizhuang', 'shtianli'], []],
            'SH-016': ['male', 'qun', 3, ['shfeishi', 'shtianjie'], []],
            'SH-017': ['male', 'qun', 4, ['shkunshou', 'shtianan'], []],
            'SH-018': ['male', 'qun', 4, ['shgoulian', 'shjinqiang', 'shtianyou'], []],
            'SH-019': ['male', 'qun', 4, ['shjijin', 'shqinsha', 'shtiankong'], []],
            'SH-020': ['male', 'qun', 3, ['shshenxing', 'shjiama', 'shtiansu'], []],
            'SH-021': ['male', 'qun', 4, ['shqiangxi', 'shtianyi'], []],
            'SH-022': ['male', 'qun', 4, ['shluxin', 'shjiusha', 'shtiansha'], []],
            'SH-023': ['male', 'qun', 4, ['shlongteng', 'shtianweixin'], []],
            'SH-024': ['male', 'qun', 4, ['shmodang', 'shluezhen', 'shtianjiu'], []],
            'SH-025': ['male', 'qun', 4, ['shhuyue', 'shhuijia', 'shtiantui'], []],
            'SH-026': ['male', 'qun', 4, ['shduanlang', 'shyinchao', 'shtianshou'], []],
            'SH-027': ['male', 'qun', 4, ['shxiongshen', 'shbusha', 'shtianjian'], []],
            'SH-028': ['male', 'qun', 4, ['shlanhe', 'shjiejiang', 'shtianping'], []],
            'SH-029': ['male', 'qun', 4, ['shboming', 'shesha', 'shtianzui'], []],
            'SH-030': ['male', 'qun', 4, ['shfubo', 'shnongchao'], []],
            'SH-031': ['male', 'qun', 4, ['shdaojiu', 'shkuaihuo', 'shtianbai'], []],
            'SH-032': ['male', 'qun', 4, ['shzhanjian', 'shchue', 'shtianlao'], []],
            'SH-033': ['male', 'qun', 4, ['shdanshi', 'shzhuojian', 'shtianhui'], []],
            'SH-034': ['male', 'qun', 4, ['shyadu', 'shsheshi', 'shtianbao'], []],
            'SH-035': ['male', 'qun', 4, ['shaozhe', 'shxieci', 'shtianku'], []],
            'SH-036': ['male', 'qun', 3, ['shnuji', 'shtayan', 'shtianqiao'], []],
            'SH-037': ['male', 'qun', 3, ['shshizhen', 'shposhi', 'shdangji', 'shdikui'], []],
            'SH-038': ['male', 'qun', 4, ['shlizhi', 'shsangmen', 'shdisha'], []],
            'SH-039': ['male', 'qun', 4, ['shyangbian', 'shluanqiang', 'shdiyong'], []],
            'SH-040': ['male', 'qun', 4, ['shpianyi', 'shlianzhu', 'shdijie'], []],
            'SH-041': ['male', 'qun', 4, ['shjingsu', 'shdixiong'], []],
            'SH-042': ['male', 'qun', 4, ['shzhengsheng', 'shhengshuo', 'shdiwei'], []],
            'SH-043': ['male', 'qun', 4, ['shjumu', 'shguisu', 'shdiying'], []],
            'SH-044': ['male', 'qun', 4, ['shjiliu', 'shxuanjia', 'shdiqi'], []],
            'SH-045': ['male', 'qun', 4, ['shranyan', 'shjiangyi', 'shdimeng'], []],
            'SH-046': ['male', 'qun', 3, ['shlinmu', 'shdiwen'], []],
            'SH-047': ['male', 'qun', 3, ['shbue', 'shjiucha', 'shdizheng'], []],
            'SH-048': ['male', 'qun', 3, ['shzhenchi', 'shpanxuan', 'shdikuo'], []],
            'SH-049': ['male', 'qun', 3, ['shjiyuan', 'shdihe'], []],
            'SH-050': ['male', 'qun', 4, ['shjielue', 'shzhazhai', 'shdiqiang'], []],
            'SH-051': ['male', 'qun', 3, ['shtanshao', 'shdian'], []],
            'SH-052': ['male', 'qun', 3, ['shfengchi', 'shdizhou'], []],
            'SH-053': ['male', 'qun', 3, ['shsuanchou', 'shshuli', 'shdihui'], []],
            'SH-054': ['male', 'qun', 4, ['shwuer', 'shdizuo'], []],
            'SH-055': ['male', 'qun', 3, ['shhujun', 'shdiyou'], []],
            'SH-056': ['male', 'qun', 3, ['shfuming', 'shjianti', 'shdiling'], []],
            'SH-057': ['male', 'qun', 3, ['shyuma', 'shxiangju', 'shdishou'], []],
            'SH-058': ['male', 'qun', 4, ['shzhengyan', 'shjinghan', 'shbuyu', 'shdiweixin'], []],
            'SH-059': ['female', 'qun', 3, ['shqianzi', 'shchansheng', 'shdihuixin'], []],
            'SH-060': ['male', 'qun', 6, ['shdiansi', 'shsuoming', 'shdibao'], []],
            'SH-061': ['male', 'qun', 4, ['shchaowu', 'shmuai', 'shpingmo', 'shdiran'], []],
            'SH-062': ['male', 'qun', 4, ['shmaosu', 'shdichang'], []],
            'SH-063': ['male', 'qun', 4, ['shzhuaya', 'shdikuang'], []],
            'SH-064': ['male', 'qun', 4, ['shfeidao', 'shmanpai', 'shdifei'], []],
            'SH-065': ['male', 'qun', 4, ['shbiaoqiang', 'shtuanpai', 'shdizou'], []],
            'SH-066': ['male', 'qun', 3, ['shkezhang', 'shtuoyin', 'shdiqiao'], []],
            'SH-067': ['male', 'qun', 4, ['shxiangdi', 'shdiming'], []],
            'SH-068': ['male', 'qun', 3, ['shjiaoku', 'shqianyuan', 'shdijin'], []],
            'SH-069': ['male', 'qun', 3, ['shshenlou', 'shfuhai', 'shditui'], []],
            'SH-070': ['male', 'qun', 3, ['shyangfan', 'shlinghang', 'shdiman'], []],
            'SH-071': ['male', 'qun', 3, ['shzhijin', 'shzhikai', 'shmingzhe', 'shdisui'], []],
            'SH-072': ['male', 'qun', 3, ['shliqiang', 'shdizhouxin'], []],
            'SH-073': ['male', 'qun', 3, ['shhengdao', 'shfuji', 'shdiyin'], []],
            'SH-074': ['male', 'qun', 3, ['shpouxin', 'shxuexian', 'shdiyi'], []],
            'SH-075': ['male', 'qun', 3, ['shyinglei', 'shjianbi', 'shqingye', 'shdili'], []],
            'SH-076': ['male', 'qun', 3, ['shbeixi', 'shkaiyan', 'shdijun'], []],
            'SH-077': ['male', 'qun', 3, ['shchenqing', 'shqiaoshuo', 'shdiyue'], []],
            'SH-078': ['male', 'qun', 3, ['shfeiqiang', 'shdijiexin'], []],
            'SH-079': ['male', 'qun', 3, ['shfeicha', 'shdisu'], []],
            'SH-080': ['male', 'qun', 3, ['shpingwei', 'shzuochang', 'shdizhen'], []],
            'SH-081': ['male', 'qun', 3, ['shroujue', 'shdaocu', 'shdiji'], []],
            'SH-082': ['male', 'qun', 3, ['shdingtian', 'shdimo'], []],
            'SH-083': ['male', 'qun', 3, ['shlidi', 'shdiyao'], []],
            'SH-084': ['male', 'qun', 4, ['shyizhu', 'shchandou', 'shdiyouxin'], []],
            'SH-085': ['male', 'qun', 4, ['shbaoen', 'shqingyuan', 'shdifu'], []],
            'SH-086': ['male', 'qun', 3, ['shhaoli', 'shdipi'], []],
            'SH-087': ['male', 'qun', 3, ['shxise', 'shdikong'], []],
            'SH-088': ['male', 'qun', 3, ['shyelian', 'shduanzao', 'shliezhuang', 'shdigu'], []],
            'SH-089': ['male', 'qun', 3, ['shdiancai', 'shxingshang', 'shdiquan'], []],
            'SH-090': ['male', 'qun', 3, ['shdengyun', 'shdiduan'], []],
            'SH-091': ['male', 'qun', 4, ['shmanzhuang', 'shdijiao'], []],
            'SH-092': ['male', 'qun', 3, ['shlianmin', 'shhaojian', 'shdiqiu'], []],
            'SH-093': ['male', 'qun', 3, ['shniangjiu', 'shhaoyi', 'shdaixin', 'shdizang'], []],
            'SH-094': ['male', 'qun', 3, ['shzhuihun', 'shdiping'], []],
            'SH-095': ['male', 'qun', 4, ['shduoming', 'shdisun'], []],
            'SH-096': ['male', 'qun', 3, ['shjuxing', 'shzhisi', 'shdinu'], []],
            'SH-097': ['male', 'qun', 3, ['shbitong', 'shgouzhu', 'shbijiu', 'shdicha'], []],
            'SH-098': ['male', 'qun', 3, ['shqinbao', 'shtuoju', 'shpaoshuai', 'shdie'], []],
            'SH-099': ['male', 'qun', 3, ['shdushi', 'shpanyan', 'shdichou'], []],
            'SH-100': ['male', 'qun', 4, ['shtibian', 'shchaoqiang', 'shdishu'], []],
            'SH-101': ['female', 'qun', 3, ['shfuruo', 'shbiaohan', 'shhuwei', 'shdiyin'], []],
            'SH-102': ['male', 'qun', 3, ['shgengyun', 'shjianming', 'shdixing'], []],
            'SH-103': ['female', 'qun', 3, ['shjiesha', 'shshixue', 'shdizhuang'], []],
            'SH-104': ['male', 'qun', 3, ['shjixing', 'shshandun', 'shdilie'], []],
            'SH-105': ['male', 'qun', 4, ['shpengqi', 'shdijian'], []],
            'SH-106': ['male', 'qun', 3, ['shguiji', 'shjiaozha', 'shdihao'], []],
            'SH-107': ['male', 'qun', 3, ['shpaliang', 'shdaojia', 'shdizei'], []],
            'SH-108': ['male', 'qun', 4, ['shdaoma', 'shyinhuo', 'shdiquanxin'], []],
        },
        characterSort: {},
        characterIntro: {},
        characterTitle: {
            'SH-001': '呼保义',
            'SH-002': '玉麒麟',
            'SH-003': '智多星',
            'SH-004': '入云龙',
            'SH-005': '大刀',
            'SH-006': '豹子头',
            'SH-007': '霹雳火',
            'SH-008': '双鞭',
            'SH-009': '小李广',
            'SH-010': '小旋风',
            'SH-011': '扑天雕',
            'SH-012': '美髯公',
            'SH-013': '花和尚',
            'SH-014': '行者',
            'SH-015': '双枪将',
            'SH-016': '没羽箭',
            'SH-017': '青面兽',
            'SH-018': '金枪手',
            'SH-019': '急先锋',
            'SH-020': '神行太保',
            'SH-021': '赤发鬼',
            'SH-022': '黒旋风',
            'SH-023': '九纹龙',
            'SH-024': '没遮拦',
            'SH-025': '插翅虎',
            'SH-026': '混江龙',
            'SH-027': '立地太岁',
            'SH-028': '船火儿',
            'SH-029': '短命二郎',
            'SH-030': '浪里白跳',
            'SH-031': '活阎罗',
            'SH-032': '病关索',
            'SH-033': '拼命三郎',
            'SH-034': '两头蛇',
            'SH-035': '双尾蝎',
            'SH-036': '浪子',
            'SH-037': '神机军师',
            'SH-038': '镇三山',
            'SH-039': '病尉迟',
            'SH-040': '丑郡马',
            'SH-041': '井木犴',
            'SH-042': '百胜将',
            'SH-043': '天目将',
            'SH-044': '圣水将',
            'SH-045': '神火将',
            'SH-046': '圣手书生',
            'SH-047': '铁面孔目',
            'SH-048': '摩云金翅',
            'SH-049': '火眼狻猊',
            'SH-050': '锦毛虎',
            'SH-051': '锦豹子',
            'SH-052': '轰天雷',
            'SH-053': '神算子',
            'SH-054': '小温侯',
            'SH-055': '赛仁贵',
            'SH-056': '神医',
            'SH-057': '紫髯伯',
            'SH-058': '矮脚虎',
            'SH-059': '一丈青',
            'SH-060': '丧门神',
            'SH-061': '混世魔王',
            'SH-062': '毛头星',
            'SH-063': '独火星',
            'SH-064': '八臂哪吒',
            'SH-065': '飞天大圣',
            'SH-066': '玉臂匠',
            'SH-067': '铁笛仙',
            'SH-068': '出洞蛟',
            'SH-069': '翻江蜃',
            'SH-070': '玉幡竿',
            'SH-071': '通臂猿',
            'SH-072': '跳涧虎',
            'SH-073': '白花蛇',
            'SH-074': '白面郎君',
            'SH-075': '九尾亀',
            'SH-076': '铁扇子',
            'SH-077': '铁叫子',
            'SH-078': '花项虎',
            'SH-079': '中箭虎',
            'SH-080': '小遮拦',
            'SH-081': '操刀鬼',
            'SH-082': '云里金刚',
            'SH-083': '摸着天',
            'SH-084': '病大虫',
            'SH-085': '打虎将',
            'SH-086': '小霸王',
            'SH-087': '金钱豹子',
            'SH-088': '鬼脸儿',
            'SH-089': '出林龙',
            'SH-090': '独角龙',
            'SH-091': '旱地忽律',
            'SH-092': '笑面虎',
            'SH-093': '金眼彪',
            'SH-094': '鉄臂膊',
            'SH-095': '一枝花',
            'SH-096': '催命判官',
            'SH-097': '青眼虎',
            'SH-098': '没面目',
            'SH-099': '石将军',
            'SH-100': '小尉遅',
            'SH-101': '母大虫',
            'SH-102': '菜园子',
            'SH-103': '母夜叉',
            'SH-104': '活闪婆',
            'SH-105': '険道神',
            'SH-106': '白日鼠',
            'SH-107': '鼓上蚤',
            'SH-108': '金毛犬',
        },
        characterReplace: {},
        skill: {
            //SH001
            shfengshi: {
                trigger: {
                    global: 'useCardToTarget',
                },
                forced: true,
                filter(event, player) {
                    return get.tag(event.card, 'damage');
                },
                async content(event, trigger, player) {
                    const { bool, cards, targets } = await player
                        .chooseCardTarget({
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return trigger.target == target;
                            },
                            position: 'h',
                            ai1(card) {
                                if (card.name == 'du') return 20;
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
                            prompt: get.prompt2(event.name),
                        })
                        .forResult();
                    if (bool) {
                        await player.give(cards, targets[0], 'give');
                        player.draw();
                    }
                },
            },
            shjuyi: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget: true,
                selectTarget: -1,
                multitarget: true,
                async content(event, trigger, player) {
                    const targets = event.targets;
                    while (targets.length) {
                        const target = targets.shift();
                        const list = [];
                        list.push('选项一');
                        if (target.countCards('h')) list.push('选项二');
                        if (
                            target.hasCard(function (card) {
                                return lib.filter.cardDiscardable(card, target, 'shjuyi');
                            }, 'h')
                        )
                            list.push('选项三');
                        const { control } = await target
                            .chooseControl(list)
                            .set('choiceList', [`令${get.translation(player)}摸一张牌`, `交给${get.translation(player)}一张手牌`, `弃置一张手牌并对${get.translation(player)}造成1点伤害`])
                            .set('prompt', get.translation(event.name))
                            .set('ai', () => {
                                if (
                                    target.hasCard(function (card) {
                                        return lib.filter.cardDiscardable(card, target, 'shjuyi') && get.value(card, target) < 7;
                                    }, 'h') &&
                                    get.damageEffect(player, target, target) > 0
                                )
                                    return '选项三';
                                if (get.attitude(target, player) > 4) {
                                    if (
                                        target.countCards('h') > 2 &&
                                        target.hasCard(function (card) {
                                            return player.getUseValue(card) > 10;
                                        })
                                    )
                                        return '选项二';
                                }
                                return '选项一';
                            })
                            .forResult();
                        if (control == '选项一') {
                            await player.draw('nodelay');
                        } else if (control == '选项二') {
                            const { cards } = await target.chooseCard('h', true, `交给${get.translation(player)}一张牌`).forResult();
                            await target.give(cards, player, 'give');
                        } else if (
                            target.hasCard(function (card) {
                                return lib.filter.cardDiscardable(card, target, 'shjuyi');
                            }, 'h')
                        ) {
                            const { cards } = await target.chooseToDiscard('h', true, `弃置一张手牌并对${get.translation(player)}造成1点伤害`).forResult();
                            await player.damage(target);
                        }
                    }
                },
                ai: {
                    order: 3,
                    result: {
                        target: -1,
                    },
                },
            },
            shshenzhu: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                filter(event, player) {
                    return player.hp == 1 && !player.countCards('h', { name: 'tao' });
                },
                async content(event, trigger, player) {
                    player.recover();
                },
            },
            shtiankui: {
                zhuSkill: true,
                mod: {
                    maxHandcard(player, num) {
                        if (!player.hasZhuSkill('shtiankui')) return false;
                        return (num += player.hp);
                    },
                },
            },
            //SH002
            shguanjue: {
                enable: ['chooseToUse', 'chooseToRespond'],
                forced: true,
                filterCard(card, player) {
                    return get.type(card) == 'basic';
                },
                position: 'hes',
                viewAs: {
                    name: 'sha',
                },
                viewAsFilter(player) {
                    if (player.hasHistory('useSkill', (evt) => evt.skill == 'shguanjue')) return false;
                    if (!player.countCards('hes', { type: 'basic' })) return false;
                },
                precontent() {
                    event.parent.addCount = false;
                },
                prompt: '将一张基本牌当【杀】使用或打出',
                check(card) {
                    let val = get.value(card);
                    if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                    return 5 - val;
                },
            },
            shweiyi: {
                global: 'shweiyi_global',
                trigger: {
                    source: 'damageSource',
                },
                forced: true,
                filter(event, player) {
                    return !event.player.hasMark('shweiyi');
                },
                async content(event, trigger, player) {
                    trigger.player.addMark('shweiyi');
                },
                marktext: '怯',
                intro: {
                    name: '怯',
                    name2: '怯',
                    markcount: () => 0,
                    content: '已获得<怯>标记',
                },
                subSkill: {
                    global: {
                        trigger: {
                            source: 'damageSource',
                        },
                        silent: true,
                        charlotte: true,
                        filter(event, player) {
                            if (!player.hasMark('shweiyi')) return false;
                            return !event.player.hasSkill('shweiyi');
                        },
                        async content(event, trigger, player) {
                            player.removeMark('shweiyi');
                        },
                        mod: {
                            playerEnabled(card, player, target) {
                                if (!player.countMark('shweiyi')) return;
                                if (['sha', 'juedou'].includes(card.name) && target.hasSkill('shweiyi')) return false;
                            },
                        },
                    },
                },
            },
            shtiangang: {
                enable: 'phaseUse',
                usable: 1,
                zhuSkill: true,
                filter(event, player) {
                    if (!game.hasPlayer((current) => current != player && current.group == 'qun')) return false;
                    return player.hasZhuSkill('shtiangang');
                },
                filterTarget(card, player, target) {
                    if (!ui.selected.targets.length) return target.group == 'qun';
                    return true;
                },
                selectTarget: 2,
                complexTarget: true,
                multitarget: true,
                async content(event, trigger, player) {
                    const target1 = event.targets[0];
                    const target2 = event.targets[1];
                    const list = [];
                    const sha = new lib.element.VCard({ name: 'sha' });
                    if (target1.canUse(sha, target2)) list.push('选项一');
                    if (target1.countCards('h', { type: 'basic' })) list.push('选项二');
                    if (!list.length) {
                        event.finish();
                        return;
                    }
                    const { control } = await target1
                        .chooseControl(list)
                        .set('choiceList', [`视为对${get.translation(target2)}使用【杀】`, `交给${get.translation(player)}一张基本牌`])
                        .set('prompt', get.translation(event.name))
                        .set('ai', () => {
                            const player = get.player();
                            if (get.effect(target2, sha, player, player) <= 0) return '选项一';
                            if (player.countCards('hs', { type: 'basic' })) return '选项二';
                            return '选项二';
                        })
                        .forResult();
                    if (control == '选项一') {
                        target1.useCard(sha, target2);
                    } else {
                        const result = await target1.chooseCard('hes', { type: 'basic' }, true, `交给${get.translation(player)}一张基本牌`).forResult();
                        target1.give(result.cards, player, 'give');
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            if (!ui.selected.targets.length) return 1;
                            return get.effect(target, { name: 'sha' }, ui.selected.targets[0], target);
                        },
                    },
                },
            },
            //SH003
            shzhijue: {
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                filter(event, player) {
                    return get.type(event.card) == 'trick';
                },
                async content(event, trigger, player) {
                    trigger.nowuxie = true;
                },
            },
            shduomou: {
                trigger: {
                    player: 'useCard2',
                },
                forced: true,
                filter(event, player) {
                    if (!event.targets || !event.targets.length) return false;
                    return get.type(event.card) == 'trick';
                },
                async content(event, trigger, player) {
                    const { bool, targets } = await player
                        .chooseTarget(get.prompt(event.name), function (card, player, target) {
                            if (_status.event.targets.includes(target)) return true;
                            return lib.filter.targetEnabled2(_status.event.card, player, target) && lib.filter.targetInRange(_status.event.card, player, target);
                        })
                        .set('prompt2', '为' + get.translation(trigger.card) + '增加或减少一个目标')
                        .set('ai', function (target) {
                            var trigger = _status.event.getTrigger();
                            var player = get.player();
                            return get.effect(target, trigger.card, player, player) * (_status.event.targets.includes(target) ? -1 : 1);
                        })
                        .set('targets', trigger.targets)
                        .set('card', trigger.card)
                        .forResult();
                    if (bool) {
                        if (trigger.targets.includes(targets[0])) trigger.targets.removeArray(targets);
                        else trigger.targets.addArray(targets);
                    }
                },
            },
            shshanduan: {
                trigger: {
                    global: 'phaseZhunbeiBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    const cards = get.cards(2);
                    game.cardsGotoOrdering(cards);
                    const next = player.chooseToMove('善断', true);
                    next.set('list', [['牌堆顶', cards], ['牌堆底']]);
                    next.set('filterMove', function (from, to, moved) {
                        if (to == 1 && moved[1].length >= 1) return false;
                        return true;
                    });
                    next.set('filterOk', function (moved) {
                        return moved[1].length == 1;
                    });
                    next.set('processAI', function (list) {
                        const cards = list[0][1].slice(0).sort(function (a, b) {
                            return get.value(b) - get.value(a);
                        });
                        return [cards, cards.splice(1)];
                    });
                    const result = await next.forResult();
                    const top = result.moved[0];
                    const bottom = result.moved[1];
                    top.reverse();
                    for (var i = 0; i < top.length; i++) {
                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                    }
                    for (var i = 0; i < bottom.length; i++) {
                        ui.cardPile.appendChild(bottom[i]);
                    }
                    game.updateRoundNumber();
                },
                ai: {
                    threaten: 1.5,
                },
            },
            shtianji: {
                trigger: {
                    global: 'judge',
                },
                async content(event, trigger, player) {
                    const card = get.cards()[0];
                    event.card = card;
                    game.cardsGotoOrdering(card).relatedEvent = trigger;
                    player.$throw(card);
                    if (trigger.player.judging[0].clone) {
                        trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                        game.broadcast(function (card) {
                            if (card.clone) {
                                card.clone.classList.remove('thrownhighlight');
                            }
                        }, trigger.player.judging[0]);
                        game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                    }
                    game.cardsDiscard(trigger.player.judging[0]);
                    trigger.player.judging[0] = card;
                    game.log(trigger.player, '的判定牌改为', card);
                },
                check(event, player) {
                    if (get.attitude(player, event.player) < 0) return event.judge(event.player.judging[0]) > 0;
                    return event.judge(event.player.judging[0]) < 0;
                },
            },
            //SH004
            shqulei: {
                trigger: {
                    player: ['phaseZhunbeiBegin', 'judgeEnd'],
                },
                forced: true,
                filter(event, player, name) {
                    return name == 'judgeEnd' ? get.position(event.result.card, true) == 'o' : true;
                },
                async content(event, trigger, player) {
                    player.addToExpansion(event.triggername == 'judgeEnd' ? trigger.result.card : get.cards(5), 'giveAuto').gaintag.add('shqulei');
                },
                marktext: '雷',
                intro: {
                    name: '雷(驱雷)',
                    content: 'expansion',
                    markcount: 'expansion',
                },
            },
            shchedian: {
                enable: 'phaseUse',
                usable: 1,
                forced: true,
                filter(event, player) {
                    return player.storage.shwulei ? player.getExpansions('shqulei').length : true;
                },
                chooseButton: {
                    dialog(event, player) {
                        var dialog = ui.create.dialog('掣电', 'hidden');
                        if (player.storage.shwulei) dialog.add(player.getExpansions('shqulei'));
                        else dialog.add([[['', '', 'shandian']], 'vcard']);
                        dialog.direct = true;
                        return dialog;
                    },
                    backup(links, player) {
                        return {
                            filterCard: () => false,
                            selectCard: -1,
                            filterTarget: true,
                            card: links[0],
                            delay: false,
                            async content(event, trigger, player) {
                                const card = lib.skill.shchedian_backup.card;
                                const target = event.target;
                                if (player.storage.shwulei) await player.loseToDiscardpile(card);
                                if (!player.storage.shwulei) {
                                    const result = await player
                                        .judge(function (card) {
                                            return card.suit == 'spade' ? 2 : -1;
                                        })
                                        .set('judge2', (result) => result.bool)
                                        .forResult();
                                    if (!result.bool) return;
                                }
                                target.damage('thunder');
                            },
                            ai: {
                                damage: true,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, player, 'thunder');
                                    },
                                },
                            },
                        };
                    },
                    prompt(links, player) {
                        return '请选择〖掣电〗的目标';
                    },
                },
                ai: {
                    order: 1,
                    combo: 'shqulei',
                    result: {
                        player: 1,
                    },
                },
                subSkill: {
                    backup: {},
                },
            },
            shchedian_rewrite: {},
            shwulei: {
                derivation: 'shchedian_rewrite',
                trigger: {
                    player: 'shquleiAfter',
                },
                juexingji: true,
                forced: true,
                filter(event, player) {
                    return player.getExpansions('shqulei').length == 5;
                },
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    player.link(false);
                    player.turnOver(false);
                    player.recover(player.getDamagedHp());
                    player.storage.shwulei = true;
                },
                ai: {
                    combo: 'shqulei',
                },
            },
            shtianxian: {
                trigger: {
                    target: 'useCardToBefore',
                },
                forced: true,
                filter(event, player) {
                    return ['shandian', 'lebu'].includes(event.card.name);
                },
                async content(event, trigger, player) {
                    trigger.cancel();
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (['shandian', 'lebu'].includes(card.name)) return 0;
                        },
                    },
                },
            },
            //SH005
            shwujue: {
                enable: ['chooseToUse', 'chooseToRespond'],
                forced: true,
                filter(event, player) {
                    if (event.type == 'wuxie' || !player.countCards('h')) return false;
                    for (var name of ['sha', 'shan']) {
                        if (event.filterCard && event.filterCard({ name: name }, player, event)) return true;
                    }
                    return false;
                },
                chooseButton: {
                    dialog(event, player) {
                        var vcards = [];
                        for (var name of ['sha', 'shan']) {
                            var card = { name: name };
                            if (event.filterCard(card, player, event)) vcards.push(['基本', '', name]);
                        }
                        var dialog = ui.create.dialog('武绝', [vcards, 'vcard'], 'hidden');
                        dialog.direct = true;
                        return dialog;
                    },
                    backup(links, player) {
                        return {
                            filterCard: true,
                            viewAs: {
                                name: links[0][2],
                            },
                            popname: true,
                            precontent() {
                                event.parent.addCount = false;
                            },
                        };
                    },
                    prompt(links, player) {
                        return '武绝:将一张手牌当做【' + get.translation(links[0][2]) + '】使用或打出';
                    },
                },
                hiddenCard(player, name) {
                    if (['sha', 'shan'].includes(name)) return player.countCards('h');
                },
                ai: {
                    order(item, player) {
                        var player = _status.event.player;
                        var event = _status.event;
                        if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                            if (
                                !player.hasShan() &&
                                !game.hasPlayer(function (current) {
                                    return player.canUse('sha', current) && current.hp == 1 && get.effect(current, { name: 'sha' }, player, player) > 0;
                                })
                            ) {
                                return 0;
                            }
                            return 2.95;
                        } else {
                            var player = _status.event.player;
                            if (player.hasSkill('qingzhong_give')) return 2.95;
                            return 3.15;
                        }
                    },
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag, arg) {
                        if (!player.countCards('h')) return false;
                    },
                    result: {
                        player: 1,
                    },
                },
            },
            shshenyi: {
                trigger: {
                    player: 'shaMiss',
                },
                forced: true,
                async content(event, trigger, player) {
                    player.chooseToUse('神裔:你可以再使用一张【杀】', { name: 'sha' }).set('addCount', false);
                },
            },
            shtianyong: {
                trigger: {
                    player: 'useCardToTargeted',
                },
                forced: true,
                logTarget: 'target',
                filter(event, player) {
                    if (event.card.name != 'sha') return false;
                    return event.target.hp + event.target.countCards('h') > player.hp + player.countCards('h');
                },
                async content(event, trigger, player) {
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
                        if (
                            get.attitude(player, arg.target) <= 0 &&
                            arg.card.name == 'sha' &&
                            player.countCards('h', function (card) {
                                return card != arg.card && (!arg.card.cards || !arg.card.cards.includes(card));
                            }) +
                            player.hp <
                            arg.target.countCards('h') + arg.target.hp
                        )
                            return true;
                        return false;
                    },
                },
            },
            //SH006
            shbaoxiao: {
                mod: {
                    cardEnabled(card, player) {
                        if (card.name != 'sha') return;
                        if (!player.isPhaseUsing()) return;
                        if (player.getHistory('useCard', (evt) => evt.card.name == 'sha').length >= (player.storage.shlinye ? player.maxHp : player.getDamagedHp())) return false;
                    },
                    globalFrom(from, to, distance) {
                        var num = distance - from.storage.shlinye ? from.maxHp : from.getDamagedHp();
                        return distance - num;
                    },
                },
            },
            shlinye: {
                derivation: ['shbaoxiao_rewrite', 'shhuobin'],
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                juexingji: true,
                forced: true,
                filter(event, player) {
                    var history = player.actionHistory;
                    var num = 0;
                    for (var i = history.length - 2; i >= 0; i--) {
                        for (var j = 0; j < history[i].damage.length; j++) {
                            num += history[i].damage[j].num;
                        }
                        if (history[i].isRound) break;
                    }
                    return num > 2;
                },
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    player.storage.shlinye = true;
                    player.addSkill('shhuobin');
                },
            },
            shhuobin: {
                trigger: {
                    global: 'damageEnd',
                },
                limited: true,
                charlotte: true,
                filter(event, player) {
                    return event.source && event.source.isIn();
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseToDiscard(get.prompt2(event.name), 'hes', function (card) {
                            return get.subtype(card) == 'equip1';
                        })
                        .set('ai', (card) => {
                            const player = get.player();
                            if (get.attitude(player, trigger.source) > 0) return 0;
                            if (get.damageEffect(trigger.source, player, player, 'fire') <= 0) return 0;
                            return 8 - get.value(card);
                        })
                        .forResult();
                    if (result.bool) {
                        player.awakenSkill(event.name);
                        trigger.source.damage('fire', 2);
                    }
                },
            },
            shtianxiong: {
                trigger: {
                    player: 'dying',
                },
                filter(event, player) {
                    if (player.hasSkill('shtianxiong_round')) return false;
                    return !player.countCards('h', { name: ['tao', 'jiu'] });
                },
                async content(event, trigger, player) {
                    player.recover();
                    player.addTempSkill('shtianxiong_round', 'roundStart');
                },
                subSkill: {
                    round: { charlotte: true },
                },
            },
            //SH007
            shbanghe: {
                enable: 'phaseUse',
                filter(event, player) {
                    const hs = player.getCards('h');
                    if (!hs.length) return false;
                    if (
                        hs.some((card) => {
                            const mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            return mod2 === false;
                        })
                    )
                        return false;
                    return ['sha', 'juedou'].some((name) => {
                        const card = { name };
                        return event.filterCard(card, player, event);
                    });
                },
                chooseButton: {
                    dialog(player) {
                        const list = [];
                        list.push(['基本', '', 'sha']);
                        list.push(['锦囊', '', 'juedou']);
                        return ui.create.dialog(get.translation('shbanghe'), [list, 'vcard']);
                    },
                    filter(button, player) {
                        const event = _status.event.parent,
                            card = {
                                name: button.link[2],
                            };
                        return event.filterCard(card, player, event);
                    },
                    check(button) {
                        var player = get.player();
                        return player.getUseValue({
                            name: button.link[2],
                            nature: button.link[3],
                        });
                    },
                    backup(links, player) {
                        return {
                            filterCard: true,
                            selectCard: -1,
                            position: 'h',
                            popname: true,
                            viewAs: {
                                name: links[0][2],
                                storage: { shbanghe: true },
                            },
                            precontent() {
                                event.parent.addCount = false;
                                player
                                    .when('useCardAfter')
                                    .filter((event, player) => event.card.storage && event.card.storage.shbanghe)
                                    .then(() => {
                                        if (!player.hasHistory('sourceDamage', (evt) => evt.card == trigger.card)) return;
                                        player.draw(2);
                                        var evt = _status.event.getParent('phaseUse');
                                        if (evt && evt.name == 'phaseUse') {
                                            evt.skipped = true;
                                        }
                                        var evt = _status.event.getParent('phase');
                                        if (evt && evt.name == 'phase') {
                                            evt.finish();
                                        }
                                    });
                            },
                            onuse(links, player) {
                                _status.event.addCount = false;
                            },
                        };
                    },
                    prompt(links, player) {
                        return '将全部手牌当作' + get.translation(links[0][2]) + '使用';
                    },
                },
                ai: {
                    order: 1,
                    result: {
                        player(player) {
                            var num = 0;
                            var cards = player.getCards('h');
                            if (cards.length >= 3 && player.hp >= 3) return 0;
                            if (Array.isArray(cards))
                                for (var i of cards) {
                                    num += Math.max(0, get.value(i, player, 'raw'));
                                }
                            num /= cards.length;
                            num *= Math.min(cards.length, player.hp);
                            return 12 - num;
                        },
                    },
                    nokeep: true,
                    skillTagFilter(player, tag, arg) {
                        if (tag === 'nokeep') return (!arg || (arg.card && arg.card.name === 'tao')) && player.isPhaseUsing() && !player.getStat('skill').shbanghe && player.hasCard((card) => card.name != 'tao', 'h');
                    },
                },
            },
            shtianmeng: {
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                filter(event, player) {
                    return !player.hasHistory('sourceDamage');
                },
                async content(event, trigger, player) {
                    trigger.num++;
                },
            },
            //SH008
            shlianqi: {
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                check(card) {
                    return 7 - get.value(card);
                },
                async content(event, trigger, player) {
                    player.link();
                },
                ai: {
                    order: 1,
                    result: {
                        player(player) {
                            return !player.isLinked();
                        },
                    },
                },
                group: 'shlianqi_damage',
                subSkill: {
                    damage: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        filter(event, player) {
                            if (!player.countCards('e')) return false;
                            return event.hasNature();
                        },
                        prompt2: '当你受到属性伤害时,若你已横置,你可以弃置装备区的所有牌并防止此伤害.',
                        async content(event, trigger, player) {
                            player.discard(player.getCards('e'));
                            trigger.cancel();
                        },
                        check(event, player) {
                            return get.damageEffect(player, event.source, player, event.nature);
                        },
                    },
                },
            },
            shtamie: {
                enable: 'phaseUse',
                limited: true,
                filterTarget: true,
                selectTarget: -1,
                multitarget: true,
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    const targets = event.targets;
                    while (targets.length) {
                        const target = targets.shift();
                        const result = await target.chooseToRespond('你需要打出一张【杀】,否则受到1点火焰伤害', { name: 'sha' }).forResult();
                        if (!result.bool) target.damage('fire');
                        const { bool } = await target.chooseToRespond('你需要打出一张【闪】,否则受到1点火焰伤害', { name: 'shan' }).forResult();
                        if (!bool) target.damage('fire');
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target, card) {
                            return -1;
                        },
                    },
                },
            },
            shtianwei: {
                trigger: {
                    player: 'linkAfter',
                    target: 'useCardToBefore',
                },
                forced: true,
                filter(event, player) {
                    if (event.name == 'link') return !player.isLinked() && event.parent.name == 'shlianqi';
                    if (!player.isLinked()) return false;
                    return (event.card && event.card.name == 'tiesuo') || (event.card.name == 'sha' && !game.hasNature(event.card)) || (get.type(event.card) == 'trick' && get.tag(event.card, 'damage'));
                },
                async content(event, trigger, player) {
                    if (trigger.name == 'link') player.loseHp();
                    else trigger.cancel();
                },
                mod: {
                    globalFrom(from, to, distance) {
                        if (!from.isLinked()) return;
                        return distance - 1;
                    },
                },
            },
            //SH009
            shyinqiang: {
                enable: 'phaseUse',
                usable: 1,
                async content(event, trigger, player) {
                    const cards = get.cards();
                    game.cardsGotoOrdering(cards);
                    await player.showCards(cards);
                    if (get.tag(cards[0], 'damage')) {
                        const { bool } = await player.chooseBool(`你可以获得${get.translation(cards)}`).forResult();
                        if (bool) player.gain(cards, 'gain2');
                    } else {
                        const { bool, targets } = await player
                            .chooseTarget(function (card, player, target) {
                                return target != player;
                            })
                            .set('ai', (target) => {
                                return get.attitude(get.player(), target);
                            })
                            .set('prompt', `你可以将${get.translation(cards)}交给一名其他角色或者置入弃牌堆`)
                            .forResult();
                        if (bool) {
                            player.line(targets[0]);
                            const gainEvent = targets[0].gain(cards, 'gain2');
                            gainEvent.giver = player;
                        }
                    }
                },
                ai: {
                    order: 9,
                    result: {
                        player: 1,
                    },
                },
            },
            shchuanyang: {
                mod: {
                    cardUsable(card, player) {
                        if (card.name != 'sha') return;
                        if (!player.isMaxHandcard()) return;
                        return Infinity;
                    },
                    targetInRange(card, player, target) {
                        if (card.name != 'sha') return;
                        if (!player.isMaxHandcard()) return;
                        return true;
                    },
                },
            },
            shtianying: {
                trigger: {
                    global: ['gainAfter', 'loseAsyncAfter'],
                },
                usable: 1,
                filter(event, player) {
                    if (event.name == 'gain') {
                        if (event.player == player) return false;
                        var cards = event.getg(event.player);
                        if (!cards.length) return false;
                        return game.hasPlayer(function (current) {
                            if (current == event.player) return false;
                            var hs = event.getl(current).hs;
                            for (var i of hs) {
                                if (cards.includes(i)) return true;
                            }
                            return false;
                        });
                    } else if (event.type == 'gain') {
                        var hs = event.getl(event.player).hs;
                        return game.hasPlayer(function (current) {
                            if (current == event.player) return false;
                            var cards = event.getg(current);
                            for (var i of cards) {
                                if (hs.includes(i)) return true;
                            }
                        });
                    }
                    return false;
                },
                async content(event, trigger, player) {
                    player.draw();
                },
            },
            //SH010
            shshucai: {
                enable: 'phaseUse',
                filterCard: true,
                selectCard: [1, Infinity],
                discard: false,
                lose: false,
                delay: 0,
                filterTarget(card, player, target) {
                    return player != target;
                },
                check(card) {
                    if (ui.selected.cards.length > 1) return 0;
                    if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                    if (!ui.selected.cards.length && card.name == 'du') return 20;
                    const player = get.owner(card);
                    let num = 0;
                    if (player.hp == player.maxHp || num > 1 || player.countCards('h') <= 1) {
                        if (ui.selected.cards.length) {
                            return -1;
                        }
                        const players = game.filterPlayer();
                        for (var i of players) {
                            if (i.hasSkill('haoshi') && !i.isTurnedOver() && !i.hasJudge('lebu') && get.attitude(player, i) >= 3 && get.attitude(i, player) >= 3) {
                                return 11 - get.value(card);
                            }
                        }
                        if (player.countCards('h') > player.hp) return 10 - get.value(card);
                        if (player.countCards('h') > 2) return 6 - get.value(card);
                        return -1;
                    }
                    return 10 - get.value(card);
                },
                async content(event, trigger, player) {
                    const target = event.target;
                    const result = await target
                        .chooseBool(`你可以获得${get.translation(event.cards)}`)
                        .set('ai', () => {
                            if (get.attitude(target, player) >= 0) return true;
                            if (player.hasSkill('shmingmen')) return Math.random() <= 0.6;
                            return false;
                        })
                        .forResult();
                    if (result.bool) {
                        player.give(event.cards, target);
                    } else {
                        target.say('拒绝施舍');
                        player.discard(event.cards);
                    }
                },
                ai: {
                    threaten: 0.8,
                    order(skill, player) {
                        if (player.hp < player.maxHp && player.countCards('h') > 1) {
                            return 10;
                        }
                        return 1;
                    },
                    result: {
                        target(player, target) {
                            if (target.hasSkillTag('nogain')) return 0;
                            if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                return target.hasSkillTag('nodu') ? 0 : -10;
                            }
                            if (target.hasJudge('lebu')) return 0;
                            const nh = target.countCards('h');
                            const np = player.countCards('h');
                            if (player.hp == player.maxHp || player.countCards('h') <= 1) {
                                if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                            }
                            return Math.max(1, 5 - nh);
                        },
                    },
                    effect: {
                        target(card, player, target) {
                            if (player == target && get.type(card) == 'equip') {
                                if (player.countCards('e', { subtype: get.subtype(card) })) {
                                    const players = game.filterPlayer();
                                    for (var i of players) {
                                        if (i != player && get.attitude(player, i) > 0) {
                                            return 0;
                                        }
                                    }
                                }
                            }
                        },
                    },
                },
            },
            shmingmen: {
                trigger: {
                    global: 'gainAfter',
                },
                forced: true,
                filter(event, player) {
                    if (player == event.player) return false;
                    var evt = event.getl(player);
                    return evt && evt.cards2 && evt.cards2.length;
                },
                async content(event, trigger, player) {
                    trigger.player.addTempSkill('shmingmen_disable', { player: 'phaseJieshuBegin' });
                    trigger.player.markAuto('shmingmen_disable', [player]);
                },
                subSkill: {
                    disable: {
                        trigger: {
                            source: 'damageBegin1',
                        },
                        forced: true,
                        charlotte: true,
                        filter(event, player) {
                            return player.getStorage('shmingmen_disable').includes(event.player);
                        },
                        async content(event, trigger, player) {
                            trigger.cancel();
                        },
                        mark: true,
                        intro: {
                            content: '你不能对$造成伤害直至你的下个结束阶段',
                        },
                    },
                },
            },
            shtiangui: {
                trigger: {
                    player: 'phaseDrawBegin2',
                },
                filter(event, player) {
                    if (game.roundNumber <= 1) return false;
                    return !event.numFixed && lib.skill.shtiangui.getNum(player);
                },
                async content(event, trigger, player) {
                    trigger.num += lib.skill.shtiangui.getNum(player);
                },
                prompt2(event, player) {
                    return `摸牌阶段,你可以多摸${get.cnNumber(lib.skill.shtiangui.getNum(player))}张牌`;
                },
                getNum(player) {
                    let num = 0;
                    const history = game.getAllGlobalHistory();
                    for (var i = history.length - 2; i >= 0; i--) {
                        const evt = history[i]['everything'];
                        for (let j = evt.length - 1; j >= 0; j--) {
                            if (evt[j].name == 'gain' && evt[j].player != player && evt[j].source == player) num += evt[j].cards.length;
                        }
                        if (history[i].isRound) break;
                    }
                    return num;
                },
            },
            //SH011
            shshayu: {
                trigger: {
                    player: 'phaseDiscardBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    const { bool, cards } = await player.chooseCard(get.prompt2(event.name), [1, Infinity]).forResult();
                    if (bool) {
                        player.addToExpansion(cards, player, 'giveAuto').gaintag.add('shshayu');
                    }
                },
                marktext: '翎',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
            },
            shfeiling: {
                trigger: {
                    global: ['loseAfter', 'loseAsyncAfter'],
                },
                forced: true,
                filter(event, player) {
                    if (event.type != 'discard') return false;
                    var evt = event.getl(event.player);
                    return evt.cards2 && evt.cards2.length;
                },
                async content(event, trigger, player) {
                    const targets = game.filterPlayer((current) => {
                        return trigger.getl(current).cards2.length;
                    });
                    while (targets.length) {
                        const target = targets.shift();
                        if (!target.isIn()) continue;
                        const cards = trigger.getl(target).cards2;
                        if (!player.getExpansions('shshayu').length) break;
                        const result = await player
                            .chooseButton(['飞翎', player.getExpansions('shshayu'), `你可以弃置一张<翎>对${get.translation(target)}造成1点伤害`])
                            .set('filterButton', (button) => {
                                return cards.map((card) => get.color(card)).includes(get.color(button.link)) || cards.map((card) => card.number).includes(button.link.number);
                            })
                            .set('ai', (button) => {
                                const player = get.player();
                                return get.damageEffect(target, player, player);
                            })
                            .forResult();
                        if (result.bool) {
                            player.loseToDiscardpile(result.links);
                            await target.damage();
                        }
                    }
                },
            },
            shtianfu: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.hp > 0;
                },
                async content(event, trigger, player) {
                    const cards = get.cards(player.hp);
                    game.cardsGotoOrdering(cards);
                    game.log(player, '展示了', cards);
                    event.videoId = lib.status.videoId++;
                    game.broadcastAll(
                        function (player, id, cards) {
                            if (player == game.me || player.isUnderControl()) return;
                            var str = '天富';
                            var dialog = ui.create.dialog(str, cards);
                            dialog.videoId = id;
                        },
                        player,
                        event.videoId,
                        cards
                    );
                    game.addVideo('showCards', player, [get.translation(player) + '发动了【天富】', get.cardsInfo(cards)]);
                    const next = player.chooseToMove('天富');
                    next.set('list', [['分配', cards], ['获得']]);
                    next.set('filterMove', function (from, to, moved) {
                        if (moved[0].includes(from.link)) {
                            if (typeof to == 'number') {
                                if (to == 1) {
                                    if (moved[1].length >= 1) return false;
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
                        if (!player.storage.juetao && player.hasSkill('juetao') && player.hasSha()) {
                            let gain,
                                bottom,
                                pai = cards.filter((card) => card.name !== 'sha');
                            pai.sort((a, b) => {
                                return get.value(b, player) - get.value(a, player);
                            });
                            gain = pai.splice(0, 1);
                            bottom = pai;
                            return [bottom, gain];
                        }
                        return [cards, cards.splice(0, 1)];
                    });
                    const result = await next.forResult();
                    game.broadcastAll('closeDialog', event.videoId);
                    game.addVideo('cardDialog', null, event.videoId);
                    const moved = result.moved;
                    if (moved[1].length) {
                        await player.gain(moved[1], 'gain2');
                        cards.removeArray(moved[1]);
                    }
                    if (moved[0].length) {
                        if (_status.connectMode)
                            game.broadcastAll(function () {
                                _status.noclearcountdown = true;
                            });
                        event.given_map = {};
                        if (!cards.length) return;
                        if (!game.hasPlayer((current) => current != player && !event.given_map.hasOwnProperty(current.playerid))) return;
                        // event.goto -> do while
                        do {
                            const {
                                result: { bool, links },
                            } =
                                cards.length == 1
                                    ? { result: { links: cards.slice(0), bool: true } }
                                    : await player.chooseCardButton('天富:请选择要分配的牌', true, cards).set('ai', () => {
                                        if (ui.selected.buttons.length == 0) return 1;
                                        return 0;
                                    });
                            if (!bool) return;
                            cards.removeArray(links);
                            event.togive = links.slice(0);
                            const { targets } = await player
                                .chooseTarget('选择一名其他角色获得' + get.translation(links), true)
                                .set('ai', (target) => {
                                    let att = get.attitude(_status.event.player, target);
                                    if (_status.event.enemy) {
                                        return -att;
                                    } else if (att > 0) {
                                        return att / (1 + target.countCards('h'));
                                    } else {
                                        return att / 100;
                                    }
                                })
                                .set('enemy', get.value(event.togive[0], player, 'raw') < 0)
                                .set('filterTarget', (card, player, target) => {
                                    return target != player && !event.given_map.hasOwnProperty(target.playerid);
                                })
                                .forResult();
                            if (targets.length) {
                                const id = targets[0].playerid,
                                    map = event.given_map;
                                if (!map[id]) map[id] = [];
                                map[id].addArray(event.togive);
                            }
                        } while (cards.length && game.hasPlayer((current) => current != player && !event.given_map.hasOwnProperty(current.playerid)));
                        if (_status.connectMode) {
                            game.broadcastAll(function () {
                                delete _status.noclearcountdown;
                                game.stopCountChoose();
                            });
                        }
                        const list = [];
                        for (var i in event.given_map) {
                            const source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                            player.line(source, 'green');
                            if (player !== source && (get.mode() !== 'identity' || player.identity !== 'nei')) player.addExpose(0.2);
                            list.push([source, event.given_map[i]]);
                            cards.removeArray(event.given_map[i]);
                        }
                        game.loseAsync({
                            gain_list: list,
                            giver: player,
                            animate: 'draw',
                        }).setContent('gaincardMultiple');
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        player(player) {
                            return player.hasFriend() || player.hp < 3;
                        },
                    },
                },
            },
            //SH012
            shbihu: {
                trigger: {
                    source: 'damageBegin1',
                    player: 'damageBegin3',
                },
                forced: true,
                filter(event, player, name) {
                    if (name == 'damageBegin1') return event.player.countMark('shbihu');
                    return event.source && event.source.countMark('shbihu');
                },
                async content(event, trigger, player) {
                    if (event.triggername == 'damageBegin1') trigger.cancel();
                    else {
                        const { bool } = await player
                            .chooseBool(`你可以移除${get.translation(trigger.source)}的<庇护>标记`)
                            .set('ai', () => {
                                return get.attitude(get.player(), trigger.source) < 0;
                            })
                            .forResult();
                        if (bool) {
                            trigger.source.removeMark('shbihu', trigger.source.countMark('shbihu'));
                        }
                    }
                },
                intro: {
                    markcount: () => 0,
                    content: '已获得<庇护>标记',
                },
                group: ['shbihu_init', 'shbihu_attack'],
                subSkill: {
                    init: {
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        forced: true,
                        filter(event, player) {
                            return game.hasPlayer((current) => current != player) && (event.name != 'phase' || game.phaseNumber == 0);
                        },
                        async content(event, trigger, player) {
                            const result = await player
                                .chooseTarget('请选择<庇护>的目标', lib.translate.xianfu_info, true, function (card, player, target) {
                                    return target != player;
                                })
                                .set('ai', function (target) {
                                    var att = get.attitude(_status.event.player, target);
                                    if (att > 0) return att + 1;
                                    if (att == 0) return Math.random();
                                    return att;
                                })
                                .forResult();
                            if (result.bool) {
                                const target = result.targets[0];
                                target.addMark('shbihu');
                            }
                        },
                    },
                    attack: {
                        trigger: {
                            global: 'useCardToAfter',
                        },
                        forced: true,
                        logTarget: 'source',
                        filter(event, player) {
                            const sha = new lib.element.VCard({ name: 'sha' });
                            if (!event.player || !event.player.isIn()) return false;
                            if (!player.canUse(sha, event.player)) return false;
                            if (!event.target) return false;
                            if (!['sha', 'juedou'].includes(event.card.name)) return false;
                            return event.target.countMark('shbihu');
                        },
                        async content(event, trigger, player) {
                            const sha = new lib.element.VCard({ name: 'sha' });
                            if (player.canUse(sha, trigger.player)) player.useCard(sha, trigger.player);
                        },
                    },
                },
            },
            shchennu: {
                trigger: {
                    global: 'dieAfter',
                },
                juexingji: true,
                forced: true,
                filter(event, player) {
                    return event.player.countMark('shbihu');
                },
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    player.storage.shchennu = true;
                    const result = await player.draw(4).forResult();
                    const cards = result.filter((card) => card.name != 'sha');
                    player.discard(cards);
                    player
                        .when('phaseUseEnd')
                        .assign({
                            mod: {
                                cardUsable(card, player, num) {
                                    if (!_status.event.getParent('phaseUse').skill || _status.event.getParent('phaseUse').skill != 'shchennu') return;
                                    if (card.name == 'sha') return Infinity;
                                },
                                targetInRange(card, player, target) {
                                    if (!_status.event.getParent('phaseUse').skill || _status.event.getParent('phaseUse').skill != 'shchennu') return;
                                    if (card.name == 'sha') return true;
                                },
                            },
                        })
                        .filter((event, player) => event.skill == 'shchennu')
                        .then(() => { });
                    var next = player.phaseUse();
                    next.set('skill', 'shchennu');
                    event.next.remove(next);
                    trigger.parent.next.push(next);
                },
            },
            shtianman: {
                mod: {
                    maxHandcard(player, num) {
                        if (player.storage.shchennu) return (num += player.getDamagedHp());
                        if (!game.hasPlayer((current) => current.countMark('shbihu'))) return;
                        var number = game
                            .filterPlayer((p) => p.countMark('shbihu'))
                            .map((p) => p.hp)
                            .reduce((p, c) => p + c, 0);
                        return (num += number);
                    },
                },
            },
            //SH013
            shwangdao: {
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'jiu';
                },
                async content(event, trigger, player) {
                    player.addTempSkill('shwangdao_effect');
                },
                mod: {
                    cardname(card, player) {
                        if (card.name == 'tao') return 'jiu';
                    },
                },
                subSkill: {
                    effect: {
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        charlotte: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        async content(event, trigger, player) {
                            trigger.directHit.addArray(game.players);
                            player.removeSkill(event.name);
                        },
                    },
                },
            },
            shwujuexin: {
                derivation: 'shchanxin',
                trigger: {
                    source: 'dieAfter',
                },
                juexingji: true,
                forced: true,
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    player.recover(player.getDamagedHp());
                    const cards = player.getEquips(1).concat(player.getCards('h', { name: ['jiu', 'sha'] }));
                    if (cards.length) player.discard(cards);
                    player.removeSkill('shwangdao');
                    player.addSkill('shchanxin');
                },
            },
            shchanxin: {
                trigger: {
                    player: ['damageEnd', 'gainAfter'],
                    global: 'loseAsyncAfter',
                },
                forced: true,
                filter(event, player) {
                    if (event.name == 'damage') return event.source && event.source.isIn();
                    const hs = player.getCards('h');
                    return event.getg(player).filter((card) => hs.includes(card) && card.name == 'jiu').length;
                },
                async content(event, trigger, player) {
                    if (trigger.name == 'damage') {
                        trigger.source.loseHp();
                    } else {
                        const hs = player.getCards('h');
                        const cards = trigger.getg(player).filter((card) => hs.includes(card) && card.name == 'jiu');
                        await player.discard(cards);
                        player.draw();
                    }
                },
                ai: {
                    maixie_defend: true,
                },
                mod: {
                    cardEnabled(card) {
                        if (card.name == 'sha') return false;
                    },
                },
            },
            shtiangu: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                filter(event, player) {
                    return !player.hasHistory('sourceDamage');
                },
                async content(event, trigger, player) {
                    player.draw();
                },
            },
            //SH014
            shxiangmo: {
                trigger: {
                    player: 'phaseUseBegin',
                },
                filter(event, player) {
                    return !player.hasHistory('sourceDamage');
                },
                async content(event, trigger, player) {
                    player.loseMaxHp();
                    player.addTempSkill('shxiangmo_effect', { player: 'phaseZhunbei' });
                },
                check(event, player) {
                    if (player.maxHp < 3) return false;
                    if (!player.hasSha()) return false;
                    return player.hasUseTarget({ name: 'sha' });
                },
                subSkill: {
                    effect: {
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        charlotte: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha';
                        },
                        async content(event, trigger, player) {
                            trigger.directHit.addArray(game.filterPlayer((current) => current != player));
                        },
                        ai: {
                            directHit_ai: true,
                            skillTagFilter(player, tag, arg) {
                                if (arg && arg.card && arg.card.name == 'sha' && arg.target != player) return true;
                                return false;
                            },
                        },
                    },
                },
            },
            shtianshang: {
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    return event.source && event.source.isIn();
                },
                async content(event, trigger, player) {
                    player
                        .chooseToUse(
                            function (card, player, event) {
                                if (card.name != 'sha') return false;
                                return lib.filter.filterCard.apply(this, arguments);
                            },
                            '天伤:是否对' + get.translation(trigger.source) + '使用一张【杀】？'
                        )
                        .set('complexSelect', true)
                        .set('filterTarget', function (card, player, target) {
                            if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                            return lib.filter.filterTarget.apply(this, arguments);
                        })
                        .set('sourcex', trigger.source)
                        .set('oncard', () => {
                            return _status.event.baseDamage++;
                        });
                },
            },
            //SH015
            shzhizhuang: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return game.hasPlayer((current) => lib.skill.shzhizhuang.filterTarget(null, player, current));
                },
                filterTarget(card, player, target) {
                    return player.inRange(target);
                },
                async content(event, trigger, player) {
                    const target = event.target;
                    const list = [];
                    if (lib.filter.cardRespondable({ name: 'sha' }, target, event)) list.push('选项一');
                    if (lib.filter.cardRespondable({ name: 'shan' }, target, event)) list.push('选项二');
                    list.push('选项三');
                    const { control } = await target
                        .chooseControl(list)
                        .set('choiceList', [`打出一张【杀】,你视为对${get.translation(player)}使用【决斗】`, `打出一张【闪】,你令${get.translation(player)}视为对其攻击范围内的另一名角色使用<直撞>`, `受到1点伤害`])
                        .set('prompt', '直撞')
                        .set('ai', () => {
                            const player = get.player();
                            const evt = _status.event.parent;
                            if (get.damageEffect(player, evt.player, player) >= 0) return '选项三';
                            if (player.countCards('hs', { name: 'sha' })) return '选项一';
                            if (player.countCards('hs', { name: 'shan' })) return '选项二';
                            return '选项三';
                        })
                        .forResult();
                    if (control == '选项一') {
                        const { bool } = await target.chooseToRespond({ name: 'sha' }).forResult();
                        if (bool) {
                            const juedou = new lib.element.VCard({ name: 'juedou' });
                            if (target.canUse(juedou, player)) {
                                target.line(player);
                                target.useCard(juedou, player);
                            }
                        } else target.damage();
                    } else if (control == '选项二') {
                        const result = await target.chooseToRespond({ name: 'shan' }).forResult();
                        if (result.bool) {
                            const result = await target
                                .chooseTarget(`你令${get.translation(player)}视为对其攻击范围内的另一名角色使用<直撞>`, function (card, player, target) {
                                    const evt = _status.event.parent;
                                    return target != player && evt.player.inRange(target);
                                })
                                .set('ai', (target) => {
                                    const player = get.player();
                                    const evt = _status.event.parent;
                                    return get.effect(target, 'shzhizhuang', evt.player, evt.player);
                                })
                                .forResult();
                            if (result.bool) {
                                target.line(result.targets[0]);
                                result.skill = 'shzhizhuang';
                                player.useResult(result, event);
                            }
                        } else target.damage();
                    } else {
                        target.damage();
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            if (target.mayHaveSha() || target.mayHaveShan()) return -0.8;
                            return get.damageEffect(target, player, player);
                        },
                    },
                },
            },
            shtianli: {
                trigger: {
                    player: 'respond',
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                async content(event, trigger, player) {
                    player.draw();
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (get.tag(card, 'respondSha')) return [1, 0.6];
                        },
                    },
                },
                mod: {
                    selectTarget(card, player, range) {
                        if (!['sha', 'juedou'].includes(card.name)) return;
                        if (Array.isArray(range) && range[1] != -1) range[1]++;
                    },
                },
            },
            //SH016
            shfeishi: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.getExpansions('shfeishi').length;
                },
                chooseButton: {
                    dialog(event, player) {
                        return ui.create.dialog('飞石', player.getExpansions('shfeishi'), 'hidden');
                    },
                    backup(links, player) {
                        return {
                            filterCard: () => false,
                            selectCard: -1,
                            filterTarget: true,
                            card: links[0],
                            delay: false,
                            async content(event, trigger, player) {
                                const card = lib.skill.shfeishi_backup.card;
                                const target = event.target;
                                await player.loseToDiscardpile(card);
                                const { bool } = await target.chooseToRespond({ name: 'shan' }).forResult();
                                if (!bool) target.damage();
                            },
                            ai: {
                                damage: true,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, player);
                                    },
                                },
                            },
                        };
                    },
                    prompt(links, player) {
                        return '请选择〖飞石〗的目标';
                    },
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                    },
                },
                marktext: '石',
                intro: {
                    name: '石(飞石)',
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                group: 'shfeishi_add',
                subSkill: {
                    backup: {},
                    add: {
                        trigger: {
                            global: 'phaseZhunbeiBegin',
                        },
                        forced: true,
                        filter(event, player) {
                            if (event.player != player) return player.getExpansions('shfeishi').length;
                            return player.countCards('h');
                        },
                        async content(event, trigger, player) {
                            if (trigger.player == player) {
                                const result = await player
                                    .chooseCard(`飞石:你可以将任意张手牌置于你的武将牌上,称为<石>`)
                                    .set('ai', (card) => {
                                        return 6 - get.value(card);
                                    })
                                    .set('selectCard', [1, Infinity])
                                    .forResult();
                                if (result.bool) {
                                    player.addToExpansion(result.cards, player, 'give').gaintag.add('shfeishi');
                                }
                            } else {
                                const { bool, links } = await player
                                    .chooseCardButton(`你可以弃置一张<石>对${get.translation(trigger.player)}造成1点伤害`, player.getExpansions('shfeishi'))
                                    .set('ai', (button) => {
                                        const player = get.player();
                                        return get.damageEffect(trigger.player, player, player);
                                    })
                                    .forResult();
                                if (bool) {
                                    player.loseToDiscardpile(links);
                                    const { bool } = await trigger.player.chooseToRespond({ name: 'shan' }, '你需打出一张【闪】,否则受到1点伤害').forResult();
                                    if (!bool) trigger.player.damage();
                                }
                            }
                        },
                    },
                },
            },
            shtianjie: {
                trigger: {
                    global: ['useCard', 'respond'],
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'shan';
                },
                async content(event, trigger, player) {
                    const cards = trigger.cards.filterInD();
                    if (cards.length && trigger.player != player) {
                        const result = await player.chooseBool(`天捷:你可以获得${get.translation(cards)},若如此做,${get.translation(trigger.player)}摸一张牌`).forResult();
                        if (result.bool) {
                            await player.gain(cards, 'gain2');
                            await trigger.player.draw();
                        }
                    }
                    if (trigger.player != player) return;
                    const num = player.getAllHistory('useCard', (evt) => evt.card.name == 'shan').length + player.getAllHistory('respond', (evt) => evt.card.name == 'shan').length;
                    if (num % 2 == 0) {
                        const result = await player.chooseBool(`天捷:你可以摸一张牌`).forResult();
                        if (result.bool) {
                            player.draw();
                        }
                    }
                },
            },
            //SH017
            shkunshou: {
                trigger: {
                    global: 'phaseEnd',
                },
                juexingji: true,
                forced: true,
                filter(event, player) {
                    if (_status.currentPhase == player) return false;
                    return !player.countCards('h') && player.getHistory('lose', (evt) => evt.cards2 && evt.cards2.length).length > 2;
                },
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    await player.loseMaxHp();
                    player.recover(player.getDamagedHp());
                    player.addSkill('shkunshou_effect');
                },
                subSkill: {
                    effect: {
                        trigger: {
                            source: 'damageBegin1',
                        },
                        forced: true,
                        charlotte: true,
                        async content(event, trigger, player) {
                            trigger.num++;
                        },
                        ai: {
                            damageBonus: true,
                        },
                    },
                },
            },
            shtianan: {
                trigger: {
                    global: 'phaseUseBegin',
                },
                forced: true,
                filter(event, player) {
                    return event.player != player;
                },
                async content(event, trigger, player) {
                    const { bool, cards, targets } = await player
                        .chooseCardTarget({
                            filterCard(card) {
                                return get.position(card) == 'h' ? true : get.subtype(card) == 'equip1';
                            },
                            filterTarget(card, player, target) {
                                return _status.currentPhase == target;
                            },
                            position: 'he',
                            ai1(card) {
                                if (ui.selected.cards.length == 0) return 1;
                                return 0;
                            },
                            ai2(target) {
                                const player = get.player();
                                const card = ui.selected.cards[0];
                                let val = target.getUseValue(card);
                                if (val > 0) return val * get.attitude(player, target) * 2;
                                return get.value(card, target) * get.attitude(player, target);
                            },
                            prompt: get.prompt2(event.name),
                        })
                        .forResult();
                    if (bool) {
                        const target = targets[0];
                        await player.give(cards, target, 'give');
                        const result = await target
                            .chooseToUse(
                                function (card, player, event) {
                                    if (card.name != 'sha') return false;
                                    return lib.filter.filterCard.apply(this, arguments);
                                },
                                '天暗:对' + get.translation(player) + '使用一张杀,或受到1点伤害'
                            )
                            .set('targetRequired', true)
                            .set('complexSelect', true)
                            .set('filterTarget', function (card, player, target) {
                                if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                return lib.filter.filterTarget.apply(this, arguments);
                            })
                            .set('sourcex', player)
                            .forResult();
                        if (!result.bool) target.damage();
                    }
                },
                ai: {
                    expose: 0.6,
                },
            },
            //SH018
            shgoulian: {
                trigger: {
                    source: 'damageEnd',
                },
                usable: 1,
                logTarget: 'player',
                filter(event, player) {
                    return player.isPhaseUsing() && event.player && event.player.isIn();
                },
                async content(event, trigger, player) {
                    const list = [];
                    const target = trigger.player;
                    if (target.countDiscardableCards(player, 'e')) list.push('选项一');
                    if (target.countDiscardableCards(player, 'h') > 1) list.push('选项二');
                    list.push('背水!');
                    const { control } = await target
                        .chooseControl(list)
                        .set('choiceList', [`令${get.translation(player)}弃置你装备区的一张牌`, `令${get.translation(player)}弃置你的两张手牌`, '背水!对你造成1点伤害并依次执行以上两项'])
                        .set('prompt', get.translation(event.name))
                        .set('ai', () => {
                            const player = get.player();
                            const evt = _status.event.parent;
                            if (list.length == 1) return '背水!';
                            const bool1 = list.includes('选项一');
                            const bool2 = player.countCards('h') > 4;
                            if (bool1) return '选项一';
                            if (bool2) return '选项二';
                            return '背水!';
                        })
                        .forResult();
                    if (control == '背水!') {
                        await player.damage();
                    }
                    if ((control == '选项一' || control == '背水!') && target.countDiscardableCards(player, 'e')) {
                        await player.discardPlayerCard(target, 'e', true);
                    }
                    const num = Math.min(2, target.countDiscardableCards(player, 'h'));
                    if ((control == '选项二' || control == '背水!') && num > 0) {
                        player.discardPlayerCard(target, 'h', num, true);
                    }
                },
                check(event, player) {
                    if (event.player.countDiscardableCards(player, 'h') < 2 && player.hp < 2) return false;
                    return get.attitude(player, event.player) <= 0;
                },
            },
            shjinqiang: {
                enable: ['chooseToUse', 'chooseToRespond'],
                usable: 1,
                filterCard(card, player) {
                    return get.type(card) == 'equip';
                },
                check(card) {
                    return 6 - get.value(card);
                },
                position: 'hes',
                viewAs: {
                    name: 'sha',
                },
                viewAsFilter(player) {
                    if (!player.countCards('hes', { type: 'equip' })) return false;
                },
                precontent() {
                    event.parent.addCount = false;
                },
                prompt: '将一张装备牌当杀使用或打出',
                check(card) {
                    let val = get.value(card);
                    if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                    return 5 - val;
                },
            },
            shtianyou: {
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                filter(event, player) {
                    if (_status.currentPhase == player) return false;
                    const evt = event.getl(player);
                    return evt && evt.player == player && evt.es && evt.es.length;
                },
                async content(event, trigger, player) {
                    let count = trigger.getl(player).es.length;
                    while (count-- > 0) {
                        const result = await player
                            .chooseTarget(get.prompt2(event.name), function (card, player, target) {
                                return target.countDiscardableCards(player, 'hej') && target != player;
                            })
                            .forResult();
                        if (result.bool) {
                            const target = result.targets[0];
                            player.discardPlayerCard(target, 'hej', true);
                        } else break;
                        if (!count || !player.hasSkill(event.name)) break;
                    }
                },
                ai: {
                    noe: true,
                    skillTagFilter(player, tag, arg) {
                        if (_status.currentPhase == player) return false;
                    },
                },
            },
            //SH019
            shjijin: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    const bool = await player.chooseToUse({ name: 'sha' }, `急进:你可以使用一张【杀】,若此牌造成了伤害,你执行一个额外的出牌阶段`).forResult();
                    if (bool && player.hasHistory('sourceDamage', (evt) => evt.getParent('shjijin') == event)) {
                        const next = player.phaseUse();
                        event.next.remove(next);
                        trigger.getParent('phase').next.push(next);
                    }
                },
            },
            shqinsha: {
                trigger: {
                    player: 'useCardToPlayered',
                },
                forced: true,
                logTarget: 'target',
                filter(event, player) {
                    if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                    return get.distance(player, event.target) <= 1;
                },
                async content(event, trigger, player) {
                    trigger.parent.directHit.add(trigger.target);
                },
            },
            shtiankong: {
                enable: ['chooseToUse', 'chooseToRespond'],
                viewAs: {
                    name: 'sha',
                },
                filterCard() {
                    return false;
                },
                selectCard: -1,
                async precontent(event, trigger, player) {
                    const { bool } = await player
                        .judge('shtiankong', function (card) {
                            return get.color(card) == 'red' ? 1.5 : -2;
                        })
                        .set('judge2', (result) => result.bool)
                        .forResult();
                    if (!bool) {
                        //event.parent.finish();
                        event.parent.cancel();
                        event.parent.goto(0);
                        if (player.countDiscardableCards(player, 'h')) player.chooseToDiscard('h', true);
                    }
                },
            },
            //SH020
            shshenxing: {
                derivation: 'xinshensu',
                group: ['shshenxing_qingguo', 'shshenxing_shensu'],
                subSkill: {
                    qingguo: {
                        enable: ['chooseToUse', 'chooseToRespond'],
                        filterCard(card) {
                            return get.type(card) == 'basic';
                        },
                        viewAs: {
                            name: 'shan',
                        },
                        viewAsFilter(player) {
                            if (player.getExpansions('shjiama').length < 2) return false;
                            if (!player.countCards('hs', { type: 'basic' })) return false;
                        },
                        position: 'hs',
                        prompt: '将一张基本牌当闪使用或打出',
                        check() {
                            return 1;
                        },
                    },
                    shensu: {
                        trigger: {
                            player: ['phaseJudgeBefore', 'phaseUseBefore', 'phaseDiscardBefore'],
                        },
                        forced: true,
                        filter(event, player) {
                            return player.getExpansions('shjiama').length > 3;
                        },
                        async content(event, trigger, player) {
                            const description = function () {
                                switch (trigger.name) {
                                    case 'phaseJudge':
                                        return '跳过判定阶段和摸牌阶段,视为对一名其他角色使用一张【杀】';
                                        break;
                                    case 'phaseUse':
                                        return '弃置一张装备牌并跳过出牌阶段,视为对一名其他角色使用一张【杀】';
                                        break;
                                    case 'phaseDiscard':
                                        return '跳过弃牌阶段并将武将牌翻面,视为对一名其他角色使用一张【杀】';
                                        break;
                                }
                            };
                            const check = function () {
                                switch (trigger.name) {
                                    case 'phaseJudge':
                                        return (
                                            player.countCards('hs', (i) => {
                                                return player.hasValueTarget(i, null, true);
                                            }) >
                                            player.hp - 1
                                        );

                                        break;
                                    case 'phaseUse':
                                        return player.countCards('h') > 2;
                                        break;
                                    case 'phaseDiscard':
                                        return player.needsToDiscard() || player.isTurnedOver() || (player.hasSkill('shebian') && player.canMoveCard(true, true));
                                        break;
                                }
                            };
                            const result = await player
                                .chooseCardTarget({
                                    prompt: get.prompt('shensu'),
                                    prompt2: description(),
                                    filterCard(card, player) {
                                        return trigger.name == 'phaseUse' ? get.type(card) == 'equip' && lib.filter.cardDiscardable(card, player) : false;
                                    },
                                    selectCard() {
                                        return trigger.name == 'phaseUse' ? 1 : -1;
                                    },
                                    position: 'he',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        return player.canUse({ name: 'sha' }, target, false);
                                    },
                                    ai1(card) {
                                        if (check()) return 0;
                                        return 6 - get.value(card);
                                    },
                                    ai2(target) {
                                        if (check()) return 0;
                                        return get.effect(target, { name: 'sha' }, _status.event.player);
                                    },
                                })
                                .forResult();
                            if (result.bool) {
                                if (trigger.name == 'phaseJudge') player.skip('phaseDraw');
                                else if (trigger.name == 'phaseUse') player.discard(result.cards[0]);
                                else player.turnOver();
                                trigger.cancel();
                                player.useCard({ name: 'sha' }, result.targets[0], false);
                            }
                        },
                    },
                },
            },
            shjiama: {
                enable: 'phaseUse',
                filter(event, player) {
                    return player.getExpansions('shjiama').length < 4;
                },
                filterCard(card) {
                    return get.type(card) == 'equip';
                },
                position: 'hes',
                lose: false,
                discard: false,
                delay: false,
                async content(event, trigger, player) {
                    player.addToExpansion(event.cards, player, 'giveAuto').gaintag.add('shjiama');
                },
                marktext: '甲马',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                mod: {
                    maxHandcard(player, num) {
                        return num + player.getExpansions('shjiama').length;
                    },
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            return 1;
                        },
                    },
                },
            },
            shtiansu: {
                trigger: {
                    player: 'loseAfter',
                    global: ['gainAfter', 'equipAfter', 'addJudgeAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                filter(event, player) {
                    if (_status.currentPhase == player) return false;
                    const evt = event.getl(player);
                    const num = player.getExpansions('shjiama').map((jm) => jm.number);
                    return evt && evt.player == player && evt.hs && evt.hs.some((i) => num.includes(i.number));
                },
                async content(event, trigger, player) {
                    player.draw(2);
                    player.turnOver();
                },
                check(event, player) {
                    if (player.isTurnedOver()) return true;
                    return player.countCards('h') < 5;
                },
            },
            //SH021
            shqiangxi: {
                trigger: {
                    player: 'phaseDrawBegin2',
                },
                filter(event, player) {
                    return !event.numFixed;
                },
                async content(event, trigger, player) {
                    trigger.num--;
                    player.addTempSkill('shqiangxi_effect');
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        mod: {
                            targetInRange(card, player, target) {
                                if (card.name == 'sha') return true;
                            },
                        },
                        ai: {
                            unequip: true,
                            skillTagFilter(player, tag, arg) {
                                if (!arg || !arg.card || arg.card.name != 'sha') return false;
                            },
                        },
                        mark: true,
                        intro: {
                            content: '你使用【杀】无距离限制且无视防具',
                        },
                    },
                },
            },
            shtianyi: {
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                check(card) {
                    return 7 - get.value(card);
                },
                filterTarget: lib.filter.notMe,
                lose: false,
                discard: false,
                delay: false,
                async content(event, trigger, player) {
                    const target = event.target;
                    const sha = new lib.element.VCard({ name: 'sha' });
                    const show = event.cards[0];
                    await player.showCards(show);
                    const result = await target
                        .judge(function (card) {
                            return card.suit == show.suit ? 2 : -2;
                        })
                        .set('judge2', (result) => result.bool)
                        .set('callback', async (event, trigger, player) => {
                            if (event.judgeResult.suit == show.suit) {
                                if (get.position(event.judgeResult.card, true) == 'o') player.gain(show, 'gain2', 'log');
                            } else {
                                const source = event.getParent(2).player;
                                if (source.canUse(sha, player)) source.useCard(sha, player, false);
                            }
                        })
                        .forResult();
                },
                ai: {
                    order: 1,
                    result: {
                        target: -1,
                    },
                },
            },
            //SH022
            shluxin: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget: lib.filter.notMe,
                async content(event, trigger, player) {
                    const juedou = new lib.element.VCard({ name: 'juedou' });
                    const target = event.target;
                    await player.loseHp();
                    const result = await target
                        .judge(function (card) {
                            return card.suit == 'heart' ? 2 : -2;
                        })
                        .set('judge2', (result) => result.bool)
                        .set('callback', async (event, trigger, player) => {
                            if (event.judgeResult.suit == 'heart') {
                                const source = event.getParent(2).player;
                                source.chooseUseTarget({ name: 'jiu' }, true, 'noTargetDelay', 'nodelayx');
                            } else {
                                const source = event.getParent(2).player;
                                if (source.canUse(juedou, player)) source.useCard(juedou, player);
                            }
                        })
                        .forResult();
                },
                ai: {
                    order: 4,
                    result: {
                        target(player, target) {
                            if (
                                player.hp +
                                player.countCards('h', function (card) {
                                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 != 'unchanged') return mod2;
                                    var mod = game.checkMod(card, player, player, 'unchanged', 'cardSavable', player);
                                    if (mod != 'unchanged') return mod;
                                    var savable = get.info(card).savable;
                                    if (typeof savable == 'function') savable = savable(card, player, player);
                                    return savable;
                                }) <=
                                1
                            )
                                return 0;
                            return -1;
                        },
                    },
                },
            },
            shjiusha: {
                trigger: {
                    player: ['useCard', 'phaseJieshuBegin'],
                },
                forced: true,
                filter(event, player, name) {
                    if (name == 'useCard') return event.card && event.card.name == 'jiu';
                    return player.countCards('h', { name: 'jiu' });
                },
                async content(event, trigger, player) {
                    player[trigger.name == 'useCard' ? 'recover' : 'loseHp']();
                },
                mod: {
                    cardname(card, player) {
                        if (get.color(card) == 'red') return 'jiu';
                    },
                    cardUsable(card, player) {
                        if (card.name == 'jiu') return Infinity;
                    },
                },
            },
            shtiansha: {
                trigger: {
                    source: 'dieAfter',
                },
                forced: true,
                async content(event, trigger, player) {
                    player.draw(3);
                },
                mod: {
                    cardname(card, player) {
                        if (get.color(card) == 'black') return 'sha';
                    },
                    cardUsable(card, player) {
                        if (card.name == 'sha') return Infinity;
                    },
                    targetInRange(card, player) {
                        if (card.name == 'sha') return true;
                    },
                },
            },
            //SH023
            shlongteng: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    //const suitCount=player.getCards('h').map(card=>card.suit).toUniqued().length;
                    const suit = player
                        .getCards('h')
                        .map((card) => card.suit)
                        .reduce((p, n) => {
                            p[n] = p[n] + 1 || 1;
                            return p;
                        }, {});
                    const suitCount = Object.keys(suit).filter((key) => suit[key] == 1).length;
                    switch (suitCount) {
                        case 1:
                            {
                                const { bool, cards } = await player
                                    .chooseToDiscard('龙腾:你可以弃置任意张手牌,摸等量的牌并跳过弃牌阶段')
                                    .set('ai', (card) => {
                                        return 7 - get.value(card);
                                    })
                                    .set('selectCard', [1, Infinity])
                                    .set('filterCard', lib.filter.cardDiscardable)
                                    .forResult();
                                if (bool) {
                                    await player.draw(cards.length);
                                    player.skip('phaseDiscard');
                                }
                            }
                            break;
                        case 2:
                            {
                                const { bool, targets } = await player
                                    .chooseTarget('龙腾:你可以弃置两名其他角色的各一张牌', function (card, player, target) {
                                        return target != player && target.countDiscardableCards(player, 'he');
                                    })
                                    .set('ai', (target) => {
                                        var player = _status.event.player;
                                        return get.effect(target, { name: 'guohe' }, player, player);
                                    })
                                    .set('selectTarget', 2)
                                    .forResult();
                                if (bool) {
                                    while (targets.length) {
                                        const target = targets.shift();
                                        await player.discardPlayerCard(target, 'he', true);
                                    }
                                }
                            }
                            break;
                        case 3:
                            {
                                const { bool, targets } = await player
                                    .chooseTarget('龙腾:你可以获得其他两名角色的各一张手牌并跳过摸牌阶段', function (card, player, target) {
                                        return target != player && target.countGainableCards(player, 'h');
                                    })
                                    .set('ai', (target) => {
                                        let att = get.attitude(get.player(), target);
                                        if (target.hasSkill('tuntian')) return att / 10;
                                        return 1 - att;
                                    })
                                    .set('selectTarget', 2)
                                    .forResult();
                                if (bool) {
                                    player.gainMultiple(targets);
                                    player.skip('phaseDraw');
                                }
                            }
                            break;
                        case 4:
                            {
                                const { bool, cards, targets } = await player
                                    .chooseCardTarget({
                                        filterCard(card, player) {
                                            return !ui.selected.cards.some((cardx) => cardx.suit == card.suit);
                                        },
                                        selectCard: 4,
                                        complexCard: true,
                                        complexSelect: true,
                                        filterTarget(card, player, target) {
                                            return true;
                                        },
                                        position: 'h',
                                        ai1(card) {
                                            return 1 / (get.value(card) || 0.5);
                                        },
                                        ai2(target) {
                                            return get.damageEffect(target, player, player);
                                        },
                                        prompt: '你可以发动【龙腾】',
                                        prompt2: '龙腾:你可以弃置四张花色各不相同的手牌,对一名角色造成2点伤害',
                                    })
                                    .forResult();
                                if (bool) {
                                    player.discard(cards);
                                    targets[0].damage(2);
                                }
                            }
                            break;
                        default:
                            break;
                    }
                },
            },
            shtianweixin: {
                mod: {
                    targetEnabled(card, player, target, now) {
                        if (!target.isMinHp(true) && !target.isMinHandcard(true)) return;
                        if (card.name == 'sha') return false;
                    },
                },
            },
            //SH024
            shmodang: {
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                check(card) {
                    return 6 - get.value(card);
                },
                async content(event, trigger, player) {
                    player
                        .when('useCard')
                        .filter((event, player) => {
                            return get.type(event.card) == 'trick';
                        })
                        .then(() => {
                            trigger.effectCount++;
                        });
                },
                ai: {
                    order: 12,
                    result: {
                        player(player) {
                            return 1;
                        },
                    },
                },
            },
            shluezhen: {
                trigger: {
                    source: 'damageBegin2',
                },
                filter(event, player) {
                    return event.player.countCards('e');
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    if (trigger.player.countGainableCards(player, 'e')) {
                        await player.gainPlayerCard(trigger.player, 'e', true);
                    }
                    trigger.cancel();
                },
                check(event, player) {
                    if (get.damageEffect(event.player, player, player) < 0) return true;
                    var att = get.attitude(player, event.player);
                    if (event.num > 1) {
                        if (att < 0) return false;
                        if (att > 0) return true;
                    }
                    var cards = event.player.getGainableCards(player, 'e');
                    if (Array.isArray(cards))
                        for (var i of cards) {
                            if (get.equipValue(i) >= 6) return true;
                        }
                    return false;
                },
            },
            shtianjiu: {
                trigger: {
                    global: 'gainAfter',
                },
                forced: true,
                logTarget: 'player',
                filter(event, player) {
                    var evt = event.getl(player);
                    return evt && evt.cards2 && evt.cards2.length;
                },
                async content(event, trigger, player) {
                    trigger.player.addTempSkill('shtianjiu_disable', { player: 'phaseJieshu' });
                    trigger.player.markAuto('shtianjiu_disable', [player]);
                },
                subSkill: {
                    disable: {
                        mod: {
                            playerEnabled(card, player, target) {
                                if (player.getStorage('shtianjiu_disable').includes(target)) return false;
                            },
                        },
                        charlotte: true,
                        mark: true,
                        marktext: '禁',
                        intro: {
                            markcount: () => 0,
                            content: '你不能对$使用牌',
                        },
                    },
                },
            },
            //SH025
            shhuyue: {
                mod: {
                    targetInRange(card, player, target) {
                        if (player.isHealthy()) return;
                        if (card.name == 'sha' || get.type2(card) == 'trick') return true;
                    },
                },
            },
            shhuijia: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget: lib.filter.notMe,
                async content(event, trigger, player) {
                    player.loseHp();
                    const list = [];
                    const target = event.target;
                    list.push('选项一');
                    list.push('选项二');
                    const { control } = await target
                        .chooseControl(list)
                        .set('choiceList', [`受到${get.translation(player)}对你造成1点伤害`, `令${get.translation(player)}摸两张牌`])
                        .set('prompt', get.translation(event.name))
                        .set('ai', () => {
                            var player = get.player();
                            if (get.damageEffect(player, player, player)) return '选项一';
                            return '选项二';
                        })
                        .forResult();
                    if (control == '选项一') {
                        target.damage();
                    } else {
                        player.draw(2);
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            if (
                                player.hp +
                                player.countCards('h', function (card) {
                                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 != 'unchanged') return mod2;
                                    var mod = game.checkMod(card, player, player, 'unchanged', 'cardSavable', player);
                                    if (mod != 'unchanged') return mod;
                                    var savable = get.info(card).savable;
                                    if (typeof savable == 'function') savable = savable(card, player, player);
                                    return savable;
                                }) <=
                                1
                            )
                                return 0;
                            return -1;
                        },
                    },
                },
            },
            shtiantui: {
                trigger: {
                    player: 'loseHpAfter',
                },
                forced: true,
                async content(event, trigger, player) {
                    let count = trigger.num;
                    while (count-- > 0) {
                        await player.draw();
                    }
                },
            },
            //SH026
            shduanlang: {
                enable: ['chooseToUse', 'chooseToRespond'],
                forced: true,
                filter(event, player) {
                    if (!player.countCards('hes', { type: 'equip' })) return false;
                    for (var name of ['shan', 'wuxie']) {
                        if (event.filterCard && event.filterCard({ name: name }, player, event)) return true;
                    }
                    return false;
                },
                chooseButton: {
                    dialog(event, player) {
                        var vcards = [];
                        if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) vcards.push(['基本', '', 'shan']);
                        if (event.filterCard && event.filterCard({ name: 'wuxie' }, player, event)) vcards.push(['锦囊', '', 'wuxie']);
                        var dialog = ui.create.dialog('断浪', [vcards, 'vcard'], 'hidden');
                        dialog.direct = true;
                        return dialog;
                    },
                    backup(links, player) {
                        return {
                            filterCard(card) {
                                return get.type(card) == 'equip';
                            },
                            viewAs: {
                                name: links[0][2],
                            },
                            popname: true,
                            position: 'hes',
                            precontent() { },
                        };
                    },
                    prompt(links, player) {
                        return '断浪:视为使用一张【' + get.translation(links[0][2]) + '】';
                    },
                },
                hiddenCard(player, name) {
                    if (!['shan', 'wuxie'].includes(name)) return false;
                    return player.countCards('hes', { type: 'equip' });
                },
                ai: {
                    respondShan: true,
                    order: 10,
                    skillTagFilter(player, tag, arg) {
                        return player.countCards('hes', { type: 'equip' });
                    },
                    result: {
                        player: 1,
                    },
                },
            },
            shyinchao: {
                trigger: {
                    target: 'useCardToTargeted',
                },
                usable: 1,
                forced: true,
                filter(event, player) {
                    return (
                        event.targets.length == 1 &&
                        ['basic', 'trick'].includes(get.type(event.card)) &&
                        game.hasPlayer(function (current) {
                            return event.player.inRange(current) && lib.filter.targetEnabled2(event.card, event.player, current);
                        })
                    );
                },
                logTarget(event, player) {
                    return game
                        .filterPlayer(function (current) {
                            return event.player.inRange(current) && lib.filter.targetEnabled2(event.card, event.player, current);
                        })
                        .sortBySeat();
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseToDiscard(get.prompt2(event.name), 'h')
                        .set('ai', (card) => {
                            var effect1 = get.effect(trigger.target, trigger.card, trigger.player, player);
                            var effect2 = 0,
                                targets = lib.skill[event.name].logTarget(trigger, player);
                            for (var i of targets) effect2 += get.effect(i, trigger.card, trigger.player, player);
                            if (effect2 > effect1) return 7 - get.value(card);
                        })
                        .forResult();
                    if (result.bool) {
                        const targets = lib.skill[event.name].logTarget(trigger, player);
                        trigger.targets.length = 0;
                        trigger.targets.addArray(targets);
                        trigger.parent.triggeredTargets1.length = 0;
                    }
                },
            },
            shtianshou: {
                trigger: {
                    global: 'phaseJieshuBegin',
                },
                filter(event, player) {
                    return event.player != player && !event.player.hasHistory('sourceDamage', (evt) => evt.player == player);
                },
                async content(event, trigger, player) {
                    await player.draw(2);
                    const cards = player.getCards('h');
                    if (cards.length && trigger.player.isIn()) {
                        const { cards } = await player.chooseCard('h', '天寿:交给' + get.translation(trigger.player) + '一张手牌', true).forResult();
                        player.give(cards, trigger.player);
                    }
                },
                check(event, player) {
                    return get.attitude(player, event.player) > -5;
                },
            },
            //SH027
            shxiongshen: {
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                position: 'hes',
                filterTarget: true,
                async content(event, trigger, player) {
                    const target = event.target;
                    const list = [];
                    if (target.countCards('h')) list.push('选项一');
                    list.push('选项二');
                    list.push('背水!');
                    const { control } = await target
                        .chooseControl(list)
                        .set('choiceList', [`交给${get.translation(player)}一张手牌`, `受到1点伤害`, '背水!摸两张牌并依次执行以上两项'])
                        .set('prompt', get.translation(event.name))
                        .set('ai', () => {
                            const player = get.player();
                            const bool1 = player.countCards('h');
                            const bool2 = player.hp > 2 || get.damageEffect(player, player, player) > 0;
                            if (bool2) return '背水!';
                            if (bool1) return '选项一';
                            if (bool2) return '背水!';
                        })
                        .forResult();
                    if (control == '背水!') {
                        await target.draw(2);
                    }
                    if ((control == '选项一' || control == '背水!') && target.countCards('h')) {
                        const { bool, cards } = await target.chooseCard('h', `交给${get.translation(player)}一张手牌`, true).forResult();
                        if (bool) await target.give(cards, player);
                    }
                    if (control == '选项二' || control == '背水!') {
                        target.damage();
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            return -0.7;
                        },
                    },
                },
            },
            shbusha: {
                enable: 'phaseUse',
                limited: true,
                filterTarget(card, player, target) {
                    return target != player;
                },
                selectTarget: -1,
                multitarget: true,
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    const targets = event.targets;
                    const voters = targets.slice(0);
                    const vote = {};
                    targets.forEach((target) => (vote[target.playerid] = 0));
                    while (targets.length) {
                        const target = event.targets.shift();
                        const result = await target
                            .chooseTarget(true, '给一名角色投一张票', (card, player, target) => {
                                return target != event.parent.player;
                            })
                            .set('ai', (target) => {
                                const player = get.player();
                                let att = get.attitude(player, target);
                                if (att < 0) return att - 1;
                                if (att == 0) return Math.random();
                                return -att;
                            })
                            .forResult();
                        if (result.bool) {
                            const current = result.targets[0];
                            vote[current.playerid]++;
                        }
                    }
                    while (voters.length) {
                        const voter = voters.shift();
                        const num = vote[voter.playerid];
                        if (num == 0) continue;
                        const { bool, cards } = await voter
                            .chooseCard('hes', `选择交给${get.translation(player)}${get.cnNumber(num)}张牌,否则受到2点伤害`)
                            .set('ai', (card) => {
                                return 7 - get.value(card);
                            })
                            .set('selectCard', num)
                            .forResult();
                        if (bool) {
                            await voter.give(cards, player);
                        } else {
                            await voter.damage(2);
                        }
                    }
                },
            },
            shtianjian: {
                trigger: {
                    source: 'dieAfter',
                    global: 'dying',
                },
                firstDo: true,
                forced: true,
                filter(event, player) {
                    if (event.name == 'dying') return !event.player.countCards('h') && event.source && event.source == player;
                    return event.player.countCards('x');
                },
                async content(event, trigger, player) {
                    if (trigger.name == 'dying') {
                        trigger.player.addSkill('shtianjian_wansha');
                        trigger.player.when('dyingAfter').then(() => {
                            player.removeSkill('shtianjian_wansha');
                        });
                        return;
                    }
                    const cards = trigger.player.getCards('x');
                    if (cards.length) player.gain(cards, 'gain2');
                },
                subSkill: {
                    wansha: {
                        trigger: {
                            target: 'useCardToBefore',
                        },
                        charlotte: true,
                        silent: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'tao';
                        },
                        async content(event, trigger, player) {
                            trigger.cancel();
                        },
                        ai: {
                            effect: {
                                target(card, player, target) {
                                    if (['tao'].includes(card.name)) return 0;
                                },
                            },
                        },
                    },
                },
            },
            //SH028
            shlanhe: {
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                position: 'hes',
                filterTarget: true,
                async content(event, trigger, player) {
                    const target = event.target;
                    const list = [];
                    if (target.countCards('h')) list.push('选项一');
                    list.push('选项二');
                    list.push('背水!');
                    const { control } = await target
                        .chooseControl(list)
                        .set('choiceList', [`交给${get.translation(player)}一张手牌`, `受到1点伤害`, '背水!摸两张牌并依次执行以上两项'])
                        .set('prompt', get.translation(event.name))
                        .set('ai', () => {
                            const player = get.player();
                            const bool1 = player.countCards('h');
                            const bool2 = player.hp > 2 || get.damageEffect(player, player, player) > 0;
                            if (bool2) return '背水!';
                            if (bool1) return '选项一';
                            if (bool2) return '背水!';
                        })
                        .forResult();
                    if (control == '背水!') {
                        await target.draw(2);
                    }
                    if ((control == '选项一' || control == '背水!') && target.countCards('h')) {
                        const { bool, cards } = await target.chooseCard('h', `交给${get.translation(player)}一张手牌`, true).forResult();
                        if (bool) await target.give(cards, player);
                    }
                    if (control == '选项二' || control == '背水!') {
                        target.damage();
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            return -0.7;
                        },
                    },
                },
            },
            shjiejiang: {
                enable: 'phaseUse',
                limited: true,
                filterTarget(card, player, target) {
                    return target != player;
                },
                selectTarget: -1,
                multitarget: true,
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    const targets = event.targets;
                    const voters = targets.slice(0);
                    let vote = {};
                    targets.forEach((target) => (vote[target.playerid] = 0));
                    while (targets.length) {
                        const target = event.targets.shift();
                        const result = await target
                            .chooseTarget(true, '给一名角色投一张票', (card, player, target) => {
                                return target != event.parent.player;
                            })
                            .set('ai', (target) => {
                                const player = get.player();
                                let att = get.attitude(player, target);
                                if (att < 0) return att - 1;
                                if (att == 0) return Math.random();
                                return -att;
                            })
                            .forResult();
                        if (result.bool) {
                            const current = result.targets[0];
                            vote[current.playerid]++;
                        }
                    }
                    while (voters.length) {
                        const voter = voters.shift();
                        const num = vote[voter.playerid];
                        if (num == 0) continue;
                        const { bool, cards } = await voter
                            .chooseCard('hes', `选择交给${get.translation(player)}${get.cnNumber(num)}张牌,否则受到2点伤害`)
                            .set('ai', (card) => {
                                return 7 - get.value(card);
                            })
                            .set('selectCard', num)
                            .forResult();
                        if (bool) {
                            await voter.give(cards, player);
                        } else {
                            await voter.damage(2);
                        }
                    }
                },
            },
            shtianping: {
                trigger: {
                    source: 'damageBegin2',
                },
                forced: true,
                filter(event, player) {
                    if (event.player.hp >= player.hp) return true;
                    return event.player && event.player.isIn();
                },
                logTarget(event, player) {
                    if (event.player.hp >= player.hp) return player;
                    return event.player;
                },
                async content(event, trigger, player) {
                    if (trigger.player.hp >= player.hp) player.draw();
                    else trigger.player.draw();
                },
            },
            //SH029
            shboming: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    return player.canCompare(target);
                },
                async content(event, trigger, player) {
                    const target = event.target;
                    const result = await player.chooseToCompare(target).forResult();
                    if (result.bool) {
                        target.addTempSkill('shboming_disable');
                        target.markAuto('shboming_disable', [player]);
                    } else {
                        if (get.position(result.player, true) == 'd') target.gain(result.player, 'gain2');
                    }
                },
                ai: {
                    order: 8,
                    result: {
                        target(player, target) {
                            if (
                                !player.hasCard(function (card) {
                                    if (get.position(card) != 'h') return false;
                                    var val = get.value(card);
                                    if (val < 0) return true;
                                    if (val <= 5) {
                                        return card.number >= 11;
                                    }
                                    if (val <= 6) {
                                        return card.number >= 13;
                                    }
                                    return false;
                                })
                            )
                                return 0;
                            return -Math.sqrt(1 + target.countCards('he')) / (1 + target.countCards('j'));
                        },
                    },
                },
                subSkill: {
                    disable: {
                        trigger: {
                            global: 'useCard',
                        },
                        forced: true,
                        charlotte: true,
                        filter(event, player) {
                            if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                            return player.getStorage('shboming_disable').includes(event.player);
                        },
                        async content(event, trigger, player) {
                            trigger.directHit.add(player);
                        },
                    },
                },
            },
            shesha: {
                trigger: {
                    source: 'damageSource',
                },
                async content(event, trigger, player) {
                    const result = await player.draw(3).forResult();
                    if (player.getCards('h', (card) => result.includes(card))) {
                        const { cards } = await player
                            .chooseCard(true, (card, player, target) => {
                                return result.includes(card);
                            })
                            .set('ai', (card) => {
                                return -get.value(card);
                            })
                            .set('prompt', `恶煞:将一张牌置于武将牌上,称为<罪>`)
                            .forResult();
                        player.addToExpansion(cards, player, 'giveAuto').gaintag.add('shesha');
                    }
                },
                check(event, player) {
                    const num =
                        player.hp +
                        player.countCards('h', function (card) {
                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            var mod = game.checkMod(card, player, player, 'unchanged', 'cardSavable', player);
                            if (mod != 'unchanged') return mod;
                            var savable = get.info(card).savable;
                            if (typeof savable == 'function') savable = savable(card, player, player);
                            return savable;
                        });
                    return player.getExpansions('shesha').length < num;
                },
                marktext: '罪',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
            },
            shtianzui: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                filter(event, player) {
                    return player.getExpansions('shesha').length;
                },
                async content(event, trigger, player) {
                    const cards = player.getExpansions('shesha');
                    await player.discard(cards);
                    player.loseHp(cards.length);
                },
                mod: {
                    maxHandcard(player, num) {
                        return (num += player.getExpansions('shesha').length);
                    },
                },
            },
            //SH030
            shfubo: {
                trigger: {
                    player: 'damageBegin4',
                },
                usable: 1,
                async content(event, trigger, player) {
                    player.draw();
                    player.turnOver();
                },
                check(event, player) {
                    if (player.isTurnedOver()) return 5;
                    return 0.5;
                },
            },
            shnongchao: {
                trigger: {
                    global: 'phaseJieshuBegin',
                },
                forced: true,
                filter(event, player) {
                    return event.player != player && player.isTurnedOver();
                },
                async content(event, trigger, player) {
                    player
                        .chooseToUse(
                            function (card, player, event) {
                                var name = card.name;
                                if (name != 'sha' && name != 'juedou') return false;
                                return lib.filter.cardEnabled.apply(this, arguments);
                            },
                            '弄潮:你可以对' + get.translation(trigger.player) + '使用一张【杀】或【决斗】？'
                        )
                        .set('complexSelect', true)
                        .set('filterTarget', function (card, player, target) {
                            if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                            return lib.filter.targetEnabled.apply(this, arguments);
                        })
                        .set('sourcex', trigger.player)
                        .set('addCount', false);
                },
            },
            //SH031
            shdaojiu: {
                trigger: {
                    global: 'useCard',
                },
                forced: true,
                filter(event, player) {
                    return event.player != player && event.card.name == 'jiu';
                },
                async content(event, trigger, player) {
                    const { bool } = await player
                        .chooseToDiscard('hes', get.prompt2(event.name))
                        .set('ai', (card) => {
                            return 7 - get.value(card);
                        })
                        .forResult();
                    if (bool) {
                        trigger.targets.length = 0;
                        trigger.all_excluded = true;
                        game.log(trigger.card, '被无效了');
                        const cards = trigger.cards.filterInD();
                        if (cards.length) player.gain(cards, 'gain2');
                    }
                },
            },
            shkuaihuo: {
                trigger: {
                    player: 'useCardAfter',
                },
                filter(event, player) {
                    return player.isPhaseUsing() && get.type(event.card) == 'basic';
                },
                async content(event, trigger, player) {
                    player.draw(3);
                },
            },
            shtianbai: {
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                filter(event, player) {
                    if (player.countCards('h') <= player.maxHp) return false;
                    let gain = 0,
                        lose = 0;
                    if (event.getg) gain = event.getg(player).length;
                    if (event.getl) lose = event.getl(player).hs.length;
                    return gain != lose;
                },
                async content(event, trigger, player) {
                    const num = Math.abs(player.maxHp - player.countCards('h'));
                    player.chooseToDiscard('h', num, true);
                },
            },
            //SH032
            shzhanjian: {
                trigger: {
                    global: 'recoverEnd',
                },
                forced: true,
                filter(event, player) {
                    return event.player != _status.currentPhase;
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseToDiscard('hes', get.prompt2(event.name))
                        .set('ai', (card) => {
                            if (get.attitude(get.player(), trigger.player) > 0) return 0;
                            return 6 - get.value(card);
                        })
                        .forResult();
                    if (result.bool) {
                        const sha = new lib.element.VCard({ name: 'sha' });
                        const list = [];
                        if (trigger.player.countGainableCards(player, 'h')) list.push('选项一');
                        if (player.canUse(sha, trigger.player)) list.push('选项二');
                        if (!list.length) {
                            event.finish();
                            return;
                        }
                        const { control } = await trigger.player
                            .chooseControl(list)
                            .set('choiceList', [`令${get.translation(player)}随机获得你的一张手牌`, `视为${get.translation(player)}对你使用【杀】`])
                            .set('ai', () => {
                                const player = get.player();
                                const evt = event.parent;
                                if (get.effect(player, sha, evt.player, player) > 0) return '选项二';
                                return '选项一';
                            })
                            .forResult();
                        if (control == '选项一') {
                            const card = trigger.player.getCards('h').randomGets(1);
                            player.gain(card, trigger.player, 'giveAuto').giver = trigger.player;
                        } else {
                            player.chooseUseTarget(sha, trigger.player, true, false);
                        }
                    }
                },
                check(event, player) {
                    return get.attitude(player, event.player) <= 0;
                },
            },
            shchue: {
                trigger: {
                    global: 'phaseJieshuBegin',
                },
                logTarget: 'player',
                filter(event, player) {
                    return (
                        game.hasPlayer2((current) => {
                            return (
                                current
                                    .getHistory('damage', (evt) => evt.source && evt.source == event.player)
                                    .map((evt) => evt.num)
                                    .reduce((p, c) => p + c, 0) > 1
                            );
                        }) || game.filterPlayer2((current) => current.hasHistory('damage', (evt) => evt.source && evt.source == event.player)).length > 1
                    );
                },
                async content(event, trigger, player) {
                    const sha = new lib.element.VCard({ name: 'sha' });
                    const list = [];
                    if (trigger.player.countDiscardableCards(trigger.player, 'hes')) list.push('选项一');
                    if (player.canUse(sha, trigger.player)) list.push('选项二');
                    if (!list.length) {
                        event.finish();
                        return;
                    }
                    const result = await trigger.player
                        .chooseControl(list)
                        .set('choiceList', [`弃置一张牌`, `视为${get.translation(player)}对你使用一张【杀】`])
                        .set('ai', () => {
                            const player = get.player();
                            if (get.effect(player, { name: 'sha' }, event.player, player) > 0) return '选项二';
                            return '选项一';
                        })
                        .forResult();
                    if (result.control == '选项一') {
                        trigger.player.chooseToDiscard('hes', true);
                    } else {
                        player.chooseUseTarget(sha, trigger.player, true, false);
                    }
                },
                check(event, player) {
                    return get.attitude(player, event.player) <= 0;
                },
            },
            shtianlao: {
                enable: 'phaseUse',
                limited: true,
                charlotte: true,
                filter(event, player) {
                    return player.countCards('h');
                },
                filterCard: true,
                selectCard: -1,
                filterTarget: true,
                selectTarget: -1,
                multitarget: true,
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    player.addSkill(event.name + '_tenrao');
                    player.markAuto(event.name + '_tenrao', event.targets);
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            return -1;
                        },
                    },
                },
                subSkill: {
                    tenrao: {
                        trigger: {
                            player: 'phaseZhunbeiBegin',
                            global: 'phaseDrawBefore',
                        },
                        silent: true,
                        charlotte: true,
                        filter(event, player) {
                            return event.name == 'phaseZhunbei' ? true : player.getStorage('shtianlao_tenrao').includes(event.player);
                        },
                        async content(event, trigger, player) {
                            if (trigger.name == 'phaseZhunbei') player.removeSkill(event.name);
                            else trigger.cancel();
                        },
                    },
                },
            },
            //SH033
            shdanshi: {
                enable: 'phaseUse',
                filter(event, player) {
                    return game.hasPlayer((current) => lib.skill.shdanshi.filterTarget(null, player, current));
                },
                filterTarget(card, player, target) {
                    var stat = player.getStat('skill').shdanshi_targets;
                    return (!stat || !stat.includes(target)) && target.countCards('h'); //QQQ
                },
                //出牌阶段每名角色限一次,你声明一种牌的类型,你展示一名角色的一张手牌,若该牌与你声明的类型相同,则你可以获得之,否则你失去1点体力并失去<胆识>直到结束阶段
                async content(event, trigger, player) {
                    const target = event.target;
                    var stat = player.getStat('skill');
                    if (!stat.shdanshi_targets) stat.shdanshi_targets = [];
                    stat.shdanshi_targets.push(target);
                    const { control } = await player
                        .chooseControl(lib.suit.slice(0).reverse())
                        .set('prompt', '声明一个花色')
                        .set('ai', function () {
                            return lib.suit.randomGet();
                        })
                        .forResult();
                    const result = await player.choosePlayerCard(target, 'h', true).forResult();
                    if (result && result.cards && result.cards[0]) {
                        var card = result.cards[0];
                        await target.showCards(card, get.translation(target) + '因【胆识】展示');
                        if (card.suit == control) {
                            const { bool } = await player.chooseBool(`你可以获得${get.translation(card)}`).forResult();
                            if (bool) player.gain(card, 'gain2');
                        } else {
                            player.loseHp();
                            player.removeSkill(event.name);
                            var str = '【' + get.translation(event.name) + '】';
                            player.popup(event.name);
                            game.log(player, '失去了技能', '#g' + str);
                            player.addTempSkill(event.name + '_restore', { player: 'phaseJieshuBegin' });
                            player.markAuto(event.name + '_restore', [event.name]);
                        }
                    }
                },
                unshiftArray(list1, list2) {
                    list1.removeArray(list2);
                    for (var i = list2.length - 1; i >= 0; i--) {
                        list1.unshift(list2[i]);
                    }
                },
                ai: {
                    order: 4,
                    result: {
                        target(player, target) {
                            if (
                                player.hp +
                                player.countCards('h', function (card) {
                                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 != 'unchanged') return mod2;
                                    var mod = game.checkMod(card, player, player, 'unchanged', 'cardSavable', player);
                                    if (mod != 'unchanged') return mod;
                                    var savable = get.info(card).savable;
                                    if (typeof savable == 'function') savable = savable(card, player, player);
                                    return savable;
                                }) <=
                                1
                            )
                                return 0;
                            return -0.5;
                        },
                    },
                },
                subSkill: {
                    restore: {
                        charlotte: true,
                        onremove(player, skill) {
                            var skills = player.getStorage(skill);
                            skills.sort(function (a, b) {
                                var getNum = function (skill) {
                                    if (!player.getStockSkills(true, true).includes(skill)) return skills.length;
                                    return player.getStockSkills(true, true).indexOf(skill);
                                };
                                return getNum(a) - getNum(b);
                            });
                            player.addSkill(skills);
                            game.broadcastAll(
                                function (player, skills) {
                                    lib.skill.shdanshi.unshiftArray(player.skills, skills);
                                },
                                player,
                                skills
                            );
                            player.update();
                            var str = '';
                            for (var i of skills) {
                                str += '【' + get.translation(i) + '】、';
                                player.popup(i);
                            }
                            str = str.slice(0, -1);
                            game.log(player, '回复了技能', '#g' + str);
                            delete player.storage[skill];
                        },
                    },
                },
            },
            shzhuojian: {
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return _status.currentPhase != player;
                },
                async content(event, trigger, player) {
                    const { control } = await player
                        .chooseControl(lib.suit.slice(0).reverse())
                        .set('prompt', '声明一个花色')
                        .set('ai', function () {
                            return lib.suit.randomGet();
                        })
                        .forResult();
                    event.source = trigger.source;
                    const result = await player
                        .judge(function (card) {
                            return card.suit == control ? 2 : -2;
                        })
                        .set('judge2', (result) => result.bool)
                        .set('callback', async (event, trigger, player) => {
                            if (get.position(event.judgeResult.card, true) == 'o') {
                                const result = await player
                                    .chooseBool(`你可以获得${get.translation(event.judgeResult.card)}`)
                                    .set('ai', () => {
                                        return event.judgeResult.card.name !== 'du';
                                    })
                                    .forResult();
                                if (result.bool) player.gain(event.judgeResult.card, 'gain2', 'log');
                            }
                            if (event.judgeResult.suit == control) {
                                if (event.getParent(2).source && event.getParent(2).source.isIn()) event.getParent(2).source.damage();
                            }
                        })
                        .forResult();
                },
            },
            shtianhui: {
                trigger: {
                    global: ['gainAfter', 'loseAsyncAfter'],
                },
                forced: true,
                filter(event, player) {
                    const cards = event.getg(player);
                    if (!cards.length) return false;
                    return game.hasPlayer((current) => {
                        if (current == player) return false;
                        var evt = event.getl(current);
                        if (evt && evt.cards && evt.cards.length) return true;
                        return false;
                    });
                },
                async content(event, trigger, player) {
                    const cards = trigger.getg(player);
                    player.addGaintag(cards, 'shtianhui');
                },
                mod: {
                    ignoredHandcard(card, player) {
                        if (card.hasGaintag('shtianhui')) return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && card.hasGaintag('shtianhui')) return false;
                    },
                },
            },
            //SH034
            shyadu: {
                global: 'shyadu_ai',
                trigger: {
                    source: 'damageSource',
                    global: ['recoverBegin', 'dying', 'useCard'],
                },
                forced: true,
                logTarget: 'player',
                filter(event, player, name) {
                    if (name == 'damageSource') return event.player && event.player.isIn() && !event.player.hasMark('shyadu');
                    if (name == 'useCard' && event.card.name != 'jiu') return false;
                    return event.player.countMark('shyadu');
                },
                async content(event, trigger, player) {
                    const evt = event.triggername;
                    if (evt == 'damageSource') trigger.player.addMark('shyadu');
                    else if (evt == 'recoverBegin') trigger.cancel();
                    else trigger.player.removeMark('shyadu');
                },
                marktext: '牙毒',
                intro: {
                    name: '牙毒',
                    name2: '牙毒',
                    markcount: () => 0,
                    content: '已获得<牙毒>标记',
                },
                subSkill: {
                    ai: {
                        mod: {
                            aiOrder(player, card, num) {
                                if (!player.countMark('shyadu')) return;
                                if (card.name == 'jiu') return num + 10;
                            },
                        },
                    },
                },
            },
            shsheshi: {
                trigger: {
                    source: 'damageSource',
                },
                forced: true,
                filter(event, player) {
                    const history = player.getAllHistory('sourceDamage');
                    if (history.length < 2) return false;
                    return history[history.length - 2].player == event.player;
                },
                async content(event, trigger, player) {
                    player.recover();
                },
            },
            shtianbao: {
                trigger: {
                    player: 'useCard',
                },
                usable: 1,
                filter(event, player) {
                    if (!player.isPhaseUsing()) return false;
                    return get.tag(event.card, 'damage');
                },
                async content(event, trigger, player) {
                    player.loseHp(2);
                    trigger.effectCount++;
                },
                check(event, player) {
                    if (event.card.name == 'tiesuo') return false;
                    let num = 0;
                    for (var i of event.targets) num += get.effect(i, event.card, player, player);
                    if (num <= 0) return false;
                    return (
                        player.hp +
                        player.countCards('h', function (card) {
                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            var mod = game.checkMod(card, player, player, 'unchanged', 'cardSavable', player);
                            if (mod != 'unchanged') return mod;
                            var savable = get.info(card).savable;
                            if (typeof savable == 'function') savable = savable(card, player, player);
                            return savable;
                        }) >
                        3
                    );
                },
            },
            //SH035
            shaozhe: {
                group: 'shaozhe_ai',
                trigger: {
                    source: 'damageSource',
                    global: ['phaseJieshuBegin', 'useCard'],
                },
                forced: true,
                logTarget: 'player',
                filter(event, player, name) {
                    if (name == 'damageSource') return event.player && event.player.isIn() && event.num > 1 && !event.player.hasMark('shaozhe');
                    if (name == 'useCard' && event.card.name != 'tao') return false;
                    return event.player.countMark('shaozhe');
                },
                async content(event, trigger, player) {
                    const evt = event.triggername;
                    if (evt == 'damageSource') trigger.player.addMark('shaozhe');
                    else if (evt == 'phaseJieshu') trigger.player.loseHp();
                    else trigger.player.removeMark('shaozhe');
                },
                marktext: '鳌蛰',
                intro: {
                    name: '鳌蛰',
                    name2: '鳌蛰',
                    markcount: () => 0,
                    content: '已获得<鳌蛰>标记',
                },
                subSkill: {
                    ai: {
                        mod: {
                            aiOrder(player, card, num) {
                                if (!player.countMark('shyadu')) return;
                                if (card.name == 'tao') return num + 10;
                            },
                        },
                    },
                },
            },
            shxieci: {
                trigger: {
                    player: 'useCardToPlayered',
                },
                forced: true,
                filter(event, player) {
                    if (event.card.name != 'sha') return false;
                    return event.targets && event.targets.length == 1;
                },
                async content(event, trigger, player) {
                    var id = trigger.target.playerid;
                    var map = trigger.parent.customArgs;
                    if (!map[id]) map[id] = {};
                    if (typeof map[id].extraDamage != 'number') {
                        map[id].extraDamage = 0;
                    }
                    map[id].extraDamage++;
                },
                mod: {
                    selectTarget(card, player, range) {
                        if (card.name != 'sha') return;
                        if (Array.isArray(range) && range[1] != -1) range[1]++;
                    },
                },
            },
            shtianku: {
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    var evt = lib.skill.dcjianying.getLastUsed(player, event);
                    if (!evt || !evt.card) return false;
                    if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                    if (!event.targets || !event.targets.length) return false;
                    if (!evt.targets || !evt.targets.length) return false;
                    return event.targets.slice().removeArray(evt.targets).length == 0 && evt.targets.slice().removeArray(event.targets).length == 0;
                },
                async content(event, trigger, player) {
                    trigger.directHit.addArray(game.players);
                },
                check(event, player) {
                    return true;
                },
            },
            //SH036
            shnuji: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    const result = await player
                        .chooseTarget(get.prompt2(event.name), function (card, player, target) {
                            return target != player;
                        })
                        .set('ai', (target) => {
                            const player = get.player();
                            return get.damageEffect(target, player, player);
                        })
                        .forResult();
                    if (result.bool) {
                        const target = result.targets[0];
                        target.damage();
                    }
                },
            },
            shtayan: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    const cards = get.cards(3);
                    game.cardsGotoOrdering(cards);
                    var next = player.chooseToMove();
                    next.set('list', [['牌堆顶', cards], ['牌堆底'], ['获得']]);
                    next.set('prompt', '踏燕:点击将牌移动到牌堆顶或牌堆底');
                    next.set('filterMove', function (from, to, moved) {
                        if (moved[0].includes(from.link) || moved[1].includes(from.link)) {
                            if (typeof to == 'number') {
                                if (to == 2) {
                                    if (moved[2].length >= 1) return false;
                                }
                                return true;
                            }
                        }
                        return true;
                    });
                    next.set('filterOk', function (moved) {
                        return moved[2].length == 1;
                    });
                    next.processAI = function (list) {
                        var cards = list[0][1],
                            player = _status.event.player;
                        const top = [],
                            bottom = cards;
                        for (const i of player.getCards('j')) {
                            const judge = get.judge(i);
                            bottom.sort((a, b) => judge(b) - judge(a)); //价值高的牌放前面
                            if (bottom.length) {
                                top.push(bottom.shift());
                            }
                        }
                        bottom.sort((a, b) => get.value(b) - get.value(a)); //把价值高的牌放前面
                        while (bottom.length) {
                            top.push(bottom.shift());
                        }
                        return [top, bottom];
                    };
                    const result = await next.forResult();
                    if (result.bool) {
                        const top = result.moved[0];
                        const bottom = result.moved[1];
                        const gain = result.moved[2];
                        player.gain(gain, 'draw');
                        top.reverse();
                        for (var i = 0; i < top.length; i++) {
                            ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                        }
                        for (var i = 0; i < bottom.length; i++) {
                            ui.cardPile.appendChild(bottom[i]);
                        }
                        game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                        game.updateRoundNumber();
                    }
                },
            },
            shtianqiao: {
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (!player.countCards('h', (card) => card.suit == 'heart' && get.type(card) == 'basic')) return false;
                    for (var i of lib.inpile) {
                        if (i != 'du' && get.type(i, false) == 'basic') {
                            if (event.filterCard && event.filterCard({ name: i }, player, event)) return true;
                            if (i == 'sha') {
                                for (var j of lib.inpile_nature) {
                                    if (event.filterCard && event.filterCard({ name: i, nature: j }, player, event)) return true;
                                }
                            }
                        }
                    }
                    return false;
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        for (var i of lib.inpile) {
                            if (i != 'du' && get.type(i, false) == 'basic') {
                                if (event.filterCard && event.filterCard({ name: i }, player, event)) list.push(['基本', '', i]);
                                if (i == 'sha') {
                                    for (var j of lib.inpile_nature) {
                                        if (event.filterCard && event.filterCard({ name: i, nature: j }, player, event)) list.push(['基本', '', i, j]);
                                    }
                                }
                            }
                        }
                        return ui.create.dialog('天巧', [list, 'vcard']);
                    },
                    check(button) {
                        if (button.link[2] == 'jiu') return 0;
                        return _status.event.player.getUseValue({
                            name: button.link[2],
                            nature: button.link[3],
                        });
                    },
                    backup(links, player) {
                        return {
                            filterCard(card, player) {
                                return card.suit == 'heart' && get.type(card) == 'basic';
                            },
                            position: 'hes',
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            check(card) {
                                return 7 - _status.event.player.getUseValue(card, null, true);
                            },
                        };
                    },
                    prompt(links) {
                        return '将一张♥️️基本牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    },
                },
                hiddenCard(player, name) {
                    if (!lib.inpile.includes(name)) return false;
                    var type = get.type(name);
                    return type == 'basic' && player.countCards('h', (card) => card.suit == 'heart' && get.type(card) == 'basic') > 0;
                },
                ai: {
                    fireAttack: true,
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player) {
                        if (!player.countCards('h', (card) => card.suit == 'heart' && get.type(card) == 'basic')) return false;
                    },
                    order: 1,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
            },
            //SH037
            shshizhen: {
                trigger: {
                    target: 'useCardToTargeted',
                },
                usable: 1,
                filter(event, player) {
                    return event.targets && event.targets.length == 1;
                },
                async content(event, trigger, player) {
                    player.viewHandcards(trigger.player);
                },
                check(event, player) {
                    return event.player != player;
                },
            },
            shposhi: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    return target.countCards('h') > player.countCards('h') && target.hp > player.hp;
                },
                async content(event, trigger, player) {
                    const target = event.target;
                    const list = [];
                    if (target.countCards('h')) list.push('选项一');
                    list.push('选项二');
                    const { control } = await target
                        .chooseControl(list)
                        .set('choiceList', [`将手牌弃置与${get.translation(player)}的体力值相同`, `你不能使用伤害牌直到你的下个结束阶段`])
                        .set('prompt', get.translation(event.name))
                        .set('ai', () => {
                            const player = get.player();
                            if (!player.countCards('h', (card) => get.tag(card, 'damage'))) return '选项二';
                            return '选项一';
                        })
                        .forResult();
                    if (control == '选项一') {
                        const num = target.countCards('h') - player.hp;
                        target.chooseToDiscard('h', num, true);
                    } else {
                        target.addTempSkill('shposhi_disable', { player: 'phaseJieshuBegin' });
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        target: -1,
                    }, //QQQ
                },
                subSkill: {
                    disable: {
                        charlotte: true,
                        mod: {
                            cardEnabled(card) {
                                if (get.tag(card, 'damage')) return false;
                            },
                        },
                    },
                },
            },
            shdangji: {
                trigger: {
                    source: 'damageSource',
                    player: 'recoverEnd',
                },
                filter(event, player) {
                    if (event.name == 'damageSource') return player.storage.shdangji;
                    return !player.storage.shdangji;
                },
                async content(event, trigger, player) {
                    player.changeZhuanhuanji(event.name);
                    player.draw(trigger.num);
                },
                mark: true,
                marktext: '☯',
                zhuanhuanji: true,
                intro: {
                    content(storage) {
                        if (!storage) return '当你回复1点体力后,你摸一张牌';
                        return '当你造成1点伤害后,你摸一张牌';
                    },
                },
                init(player, skill) {
                    player.storage[skill] = false;
                },
            },
            shdikui: {
                mod: {
                    targetEnabled(card, player, target, now) {
                        if (card.name == 'bingliang' || card.name == 'lebu') return false;
                    },
                },
            },
            //SH038
            shlizhi: {
                trigger: {
                    source: 'damageSource',
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                filter(event, player, name) {
                    if (name == 'damageSource') {
                        for (var i = player.actionHistory.length - 1; i >= 0; i--) {
                            let history = player.actionHistory[i].useSkill;
                            for (let j = history.length - 1; j >= 0; j--) {
                                if (history[j].skill == 'shlizhi' && history[j]._lizhi && history[j].targets.includes(event.player)) return false;
                            }
                            if (player.actionHistory[i].isRound) break;
                        }
                        return event.player.countMark('shlizhi');
                    }
                    if (name == 'phaseJieshuBegin') return !player.hasHistory('sourceDamage', (evt) => evt.player.countMark('shlizhi'));
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trigger, player) {
                    if (event.triggername == 'damageSource') {
                        player.addMark('shlizhi');
                        var history = player.getHistory('useSkill', (evt) => evt.skill == event.name);
                        if (history.length) history[history.length - 1]._lizhi = true;
                        event.finish();
                        return;
                    } else if (event.triggername == 'phaseJieshuBegin') {
                        player.removeMark('shlizhi');
                        event.finish();
                        return;
                    }
                    const result = await player
                        .chooseTarget([1, 3], true, '你令至多三名其他角色获得<志>标记', function (card, player, target) {
                            return target != player;
                        })
                        .set('ai', (target) => {
                            var att = get.attitude(_status.event.player, target);
                            if (att > 0) return att + 1;
                            if (att == 0) return Math.random();
                            return att;
                        })
                        .forResult();
                    if (result.bool) {
                        result.targets.forEach((target) => target.addMark('shlizhi'));
                    }
                },
                marktext: '志',
                intro: {
                    content: 'mark',
                },
            },
            shsangmen: {
                trigger: {
                    player: 'useCardToPlayer',
                },
                filter(event, player) {
                    if (!player.countMark('shlizhi')) return false;
                    if (player.storage.shdisha) return true;
                    if (player.hasSkill('shsangmen_used')) return false;
                    return false;
                },
                async content(event, trigger, player) {
                    player.removeMark('shlizhi');
                    if (!player.storage.shdisha) player.addTempSkill('shsangmen_used', { player: 'phaseUseEnd' });
                    const result = await player
                        .chooseTarget('为' + get.translation(trigger.card) + '增加一个目标,或者令此牌不可被响应', function (card, player, target) {
                            var player = get.player();
                            return lib.filter.targetEnabled2(_status.event.card, player, target) && lib.filter.targetInRange(_status.event.card, player, target);
                        })
                        .set('ai', function (target) {
                            var trigger = _status.event.getTrigger();
                            var player = _status.event.player;
                            return get.effect(target, trigger.card, player, player) * (_status.event.targets.includes(target) ? -1 : 1);
                        })
                        .set('targets', trigger.targets)
                        .set('card', trigger.card)
                        .forResult();
                    if (result.targets && result.targets[0]) {
                        //QQQ
                        player.line(result.targets);
                        trigger.targets.addArray(result.targets);
                    } else {
                        trigger.parent.directHit.add(trigger.target);
                    }
                },
                subSkill: {
                    used: {},
                },
            },
            shdisha: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                juexingji: true,
                filter(event, player) {
                    return player.countMark('shlizhi') >= 3;
                },
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    player.link(false);
                    player.turnOver(false);
                    player.recover();
                    player.storage.shdisha = true;
                },
            },
            //SH039
            shyangbian: {
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    if (_status.currentPhase == player) return false;
                    return (
                        event.source &&
                        event.source.isIn() &&
                        player.hasCard(function (card) {
                            return lib.filter.cardDiscardable(card, player, 'shyangbian');
                        }, 'h')
                    );
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseToDiscard(get.prompt2(event.name), 'h')
                        .set('ai', (card) => {
                            const player = get.player();
                            if (get.attitude(player, trigger.source) > 0) return false;
                            return 7 - get.value(card);
                        })
                        .forResult();
                    if (result.bool) {
                        player.useCard({ name: 'sha' }, trigger.source);
                    }
                },
            },
            shluanqiang: {
                trigger: {
                    player: 'useCardToPlayered',
                },
                usable: 1,
                filter(event, player) {
                    return ['sha', 'juedou'].includes(event.card.name);
                },
                async content(event, trigger, player) {
                    await player.draw(2);
                    const target = trigger.target;
                    if (player.countCards('h')) {
                        const num = Math.min(2, player.countCards('h'));
                        const result = await player.chooseCard('he', true, num, '选择交给' + get.translation(target) + get.cnNumber(num) + '张牌').forResult();
                        player.give(result.cards, target, 'give');
                    }
                },
                check(event, player) {
                    return get.attitude(player, event.target) >= 0;
                },
            },
            shdiyong: {
                trigger: {
                    player: 'useCard',
                    source: 'damageBegin1',
                },
                forced: true,
                filter(event, player) {
                    if (event.name == 'useCard') return game.hasPlayer((current) => current.countCards('h') > player.countCards('h'));
                    return event.player.hp > player.hp;
                },
                logTarget(event, player) {
                    if (event.name == 'useCard') return game.filterPlayer((current) => current.countCards('h') > player.countCards('h'));
                    return event.player;
                },
                async content(event, trigger, player) {
                    if (trigger.name == 'useCard') trigger.directHit.addArray(lib.skill[event.name].logTarget(trigger, player));
                    else trigger.num++;
                },
            },
            //SH040
            shpianyi: {
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    if (event.card.name != 'sha') return false;
                    return !player.countCards('h');
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseCardTarget({
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return target != trigger.source && get.distance(player, target) <= 1;
                            },
                            position: 'h',
                            ai1(card) {
                                return 1 / (get.value(card) || 0.5);
                            },
                            ai2(target) {
                                const player = get.player();
                                return get.damageEffect(target, player, player);
                            },
                            prompt: '偏移:你可以弃置一张手牌并对一名角色造成1点伤',
                        })
                        .forResult();
                    if (result.bool) {
                        const target = result.targets[0];
                        player.discard(result.cards);
                        target.damage();
                    }
                },
            },
            shlianzhu: {
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                filter(event, player) {
                    if (!player.isPhaseUsing()) return false;
                    if (event.card.name != 'sha') return false;
                    return !player.countCards('h');
                },
                async content(event, trigger, player) {
                    trigger.effectCount++;
                },
            },
            shdijie: {
                mod: {
                    globalFrom(from, to, distance) {
                        if (from.countCards('e', (card) => get.is.attackingMount(card))) return;
                        return distance - 1;
                    },
                },
            },
            //SH041
            shjingsu: {
                enable: 'phaseUse',
                filterCard: true,
                filter(event, player) {
                    return game.hasPlayer((current) => lib.skill.shjingsu.filterTarget(null, player, current));
                },
                filterTarget(card, player, target) {
                    var stat = player.getStat('skill').shjingsu_targets;
                    return !stat || !stat.includes(target);
                },
                async content(event, trigger, player) {
                    const target = event.target;
                    const list = [];
                    var stat = player.getStat('skill');
                    if (!stat.shjingsu_targets) stat.shjingsu_targets = [];
                    stat.shjingsu_targets.push(target);
                    if (player.countDiscardableCards(target, 'h') || player.countDiscardableCards(target, 'e')) list.push('选项一');
                    if (target.countDiscardableCards(target, 'h') > 1) list.push('选项二');
                    list.push('选项三');
                    const { control } = await target
                        .chooseControl(list)
                        .set('choiceList', [`令${get.translation(player)}弃置你的一张牌`, `弃置两张手牌`, `受到1点伤害`])
                        .set('ai', () => {
                            const player = get.player();
                            if (get.damageEffect(player, player, player) > 0) return '选项三';
                            if (list.includes('选项二') && player.countCards('h') > 4) return '选项二';
                            if (list.includes('选项一')) return '选项一';
                            return '选项三';
                        })
                        .forResult();
                    if (control == '选项一') {
                        player.discardPlayerCard(target, 'he', true);
                    } else if (control == '选项二') {
                        target.chooseToDiscard('h', 2, true);
                    } else {
                        target.damage();
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        target: -1,
                    },
                },
            },
            shdixiong: {
                trigger: {
                    player: 'useCardToPlayered',
                },
                forced: true,
                logTarget: 'target',
                filter(event, player) {
                    if (event.card.name != 'sha') return false;
                    return event.target.countCards('h') <= player.countCards('h');
                },
                async content(event, trigger, player) {
                    trigger.parent.directHit.add(trigger.target);
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg && arg.card.name != 'sha') return false;
                        return arg.target.countCards('h') <= player.countCards('h');
                    },
                },
            },
            //SH042
            shzhengsheng: {
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return player.canCompare(target);
                },
                async content(event, trigger, player) {
                    const target = event.target;
                    const result = await player.chooseToCompare(target).forResult();
                    if (result.bool) {
                        target.damage();
                    } else player.loseHp();
                },
                ai: {
                    order: 8,
                    result: {
                        target(player, target) {
                            if (
                                player.hp +
                                player.countCards('h', function (card) {
                                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 != 'unchanged') return mod2;
                                    var mod = game.checkMod(card, player, player, 'unchanged', 'cardSavable', player);
                                    if (mod != 'unchanged') return mod;
                                    var savable = get.info(card).savable;
                                    if (typeof savable == 'function') savable = savable(card, player, player);
                                    return savable;
                                }) <=
                                1
                            )
                                return 0;
                            if (
                                !player.hasCard(function (card) {
                                    if (get.position(card) != 'h') return false;
                                    var val = get.value(card);
                                    if (val < 0) return true;
                                    if (val <= 5) {
                                        return card.number >= 11;
                                    }
                                    if (val <= 6) {
                                        return card.number >= 13;
                                    }
                                    return false;
                                })
                            )
                                return 0;
                            return -Math.sqrt(1 + target.countCards('he')) / (1 + target.countCards('j'));
                        },
                    },
                },
            },
            shhengshuo: {
                trigger: {
                    global: ['loseAfter', 'cardsDiscardAfter', 'equipAfter'],
                },
                forced: true,
                filter(event, player) {
                    return event.getd().some((gd) => get.subtype(gd) == 'equip1');
                },
                async content(event, trigger, player) {
                    const cards = trigger.getd().filter((gd) => get.subtype(gd) == 'equip1');
                    const result = await player
                        .chooseToDiscard('h')
                        .set('ai', (card) => {
                            return 6 - get.value(card);
                        })
                        .set('prompt', `你可以弃置一张手牌并获得${get.translation(cards)}并装备之`)
                        .forResult();
                    if (result.bool) {
                        if (cards.length) await player.gain(cards, 'gain2');
                        while (cards.length) {
                            const card = cards.shift();
                            if (player.getCards('h').includes(card)) player.chooseUseTarget(card, 'nopopup', true);
                        }
                    }
                },
                check(event, player) {
                    if (player.countCards('h', { name: 'sha' }) > 3) return false;
                    return player.hp > 2 || player.countCards('hs', { name: ['tao', 'jiu'] });
                },
            },
            shdiwei: {
                trigger: {
                    player: 'compare',
                    target: 'compare',
                    global: ['chooseToCompareAfter', 'compareMultipleAfter'],
                },
                forced: true,
                filter(event, player, name) {
                    if (['chooseToCompareAfter', 'compareMultipleAfter'].includes(name)) {
                        if (event.preserve) return false;
                        if (player != event.player && player != event.target && (!event.targets || !event.targets.includes(player))) return false;
                        for (var i of event.lose_list) {
                            if (Array.isArray(i[1])) {
                                for (var j of i[1]) {
                                    if (i[0][i[1].indexOf(j)] == player && j.name == 'sha' && get.position(j, true) == 'o') return true;
                                }
                            } else {
                                var j = i[1];
                                if (i[0] == player && j.name == 'sha' && get.position(j, true) == 'o') return true;
                            }
                        }
                        return false;
                    }
                    if (event.player == player) {
                        if (event.iwhile) return false;
                    }
                    return true;
                },
                async content(event, trigger, player) {
                    if (['chooseToCompareAfter', 'compareMultipleAfter'].includes(event.triggername)) {
                        let cards = [];
                        for (var i of trigger.lose_list) {
                            if (Array.isArray(i[1])) {
                                for (var j of i[1]) {
                                    if (i[0][i[1].indexOf(j)] == player && j.name == 'sha' && get.position(j, true) == 'o') cards.add(j);
                                }
                            } else {
                                var j = i[1];
                                if (i[0] == player && j.name == 'sha' && get.position(j, true) == 'o') cards.add(j);
                            }
                        }
                        if (cards.length) {
                            const vcard = { name: 'sha' };
                            const target = trigger[trigger.player == player ? 'target' : 'player'];
                            player.chooseUseTarget(vcard, cards, target, true, false);
                        }
                        return;
                    }
                    var num = player.getAttackRange();
                    if (player == trigger.player) {
                        trigger.num1 += num;
                        if (trigger.num1 > 13) trigger.num1 = 13;
                    } else {
                        trigger.num2 += num;
                        if (trigger.num2 > 13) trigger.num2 = 13;
                    }
                    game.log(player, '的拼点牌点数+' + num);
                },
            },
            //SH043
            shjumu: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                filter(event, player) {
                    return game.hasPlayer((current) => current.countCards('h') > player.countCards('h'));
                },
                async content(event, trigger, player) {
                    const { bool, targets } = await player
                        .chooseTarget(get.prompt2(event.name), function (card, player, target) {
                            return target.countCards('h') > player.countCards('h');
                        })
                        .set('selectTarget', [1, 2])
                        .forResult();
                    if (bool) {
                        while (targets.length) {
                            const target = targets.shift();
                            await player.viewHandcards(target);
                        }
                    }
                },
            },
            shguisu: {
                enable: 'phaseUse',
                filter(event, player) {
                    return game.hasPlayer((current) => lib.skill.shguisu.filterTarget(null, player, current));
                },
                filterTarget(card, player, target) {
                    var stat = player.getStat('skill').shguisu_targets;
                    return !stat || !stat.includes(target);
                },
                async content(event, trigger, player) {
                    const target = event.target;
                    var stat = player.getStat('skill');
                    if (!stat.shguisu_targets) stat.shguisu_targets = [];
                    stat.shguisu_targets.push(target);
                    target.judge().set('callback', lib.skill.shguisu.judge);
                },
                async judge(event, trigger, player) {
                    let card = event.judgeResult.card;
                    let source = event.getParent(2).player;
                    let target = event.getParent(2).target;
                    const result = await source
                        .chooseToDiscard(function (cardx) {
                            return cardx.suit == card.suit;
                        })
                        .set('ai', (card) => {
                            return 7 - get.value(card);
                        })
                        .set('prompt', `你可以弃置一张手牌,视为对${get.translation(target)}使用【过河拆桥】`)
                        .forResult();
                    if (result.bool) {
                        if (!source.canUse({ name: 'guohe' }, target)) return;
                        source.chooseUseTarget({ name: 'guohe' }, target, true);
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        target(player, target) {
                            return get.effect(target, { name: 'guohe' }, player, player);
                        },
                    },
                },
            },
            shdiying: {
                trigger: {
                    player: 'discardPlayerCardBegin',
                },
                forced: true,
                filter(event, player) {
                    return event.parent.name == 'guohe';
                },
                async content(event, trigger, player) {
                    trigger.selectButton = 2;
                },
            },
            //SH044
            shjiliu: {
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                filterTarget: lib.filter.notMe,
                async content(event, trigger, player) {
                    const target = event.target;
                    const list = [];
                    if (target.countCards('e')) list.push('选项一');
                    list.push('选项二');
                    const { control } = await target
                        .chooseControl(list)
                        .set('choiceList', [`弃置装备区的所有牌`, `受到1点雷电伤害`])
                        .set('prompt', get.translation(event.name))
                        .set('ai', () => {
                            const player = get.player();
                            const evt = event.parent;
                            if (get.damageEffect(player, evt.player, player, 'thunder') >= 0) return '选项二';
                            if (player.hasSkillTag('noe')) return '选项一';
                            if (player.countCards('e') && player.countCards('e') < 3) return '选项一';
                            return '选项二';
                        })
                        .forResult();
                    if (control == '选项一') {
                        target.discard(target.getCards('e'));
                    } else {
                        target.damage('thunder');
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            return target.countCards('e') ? -target.countCards('e') : get.damageEffect(target, player, player, 'thunder');
                        },
                    },
                },
            },
            shxuanjia: {
                trigger: {
                    player: 'damageBegin4',
                },
                forced: true,
                filter(event, player) {
                    if (player.getEquips(2).length) return false;
                    return event.hasNature('fire');
                },
                async content(event, trigger, player) {
                    trigger.cancel();
                },
                ai: {
                    nofire: true,
                    effect: {
                        target(card, player, target, current) {
                            if (target.getEquips(2).length) return;
                            if (get.tag(card, 'fireDamage')) return 'zerotarget';
                        },
                    },
                },
            },
            shdiqi: {
                trigger: {
                    global: 'phaseZhunbeiBegin',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('h') > 1;
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseToDiscard(get.prompt2(event.name), 2, (card, player) => {
                            return !ui.selected.cards.some((cardx) => cardx.suit == card.suit);
                        })
                        .set('ai', (card) => {
                            if (game.filterPlayer().every((p) => p.isLinked())) return 0;
                            var player = get.player();
                            return 8 - get.value(card);
                        })
                        .set('complexCard', true)
                        .forResult();
                    if (result.bool) {
                        const targets = game.filterPlayer((current) => !current.isLinked());
                        while (targets.length) {
                            const target = targets.shift();
                            await target.link(true);
                        }
                    }
                },
            },
            //SH045
            shranyan: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    return target != player && target.countCards('h');
                },
                async content(event, trigger, player) {
                    const target = event.target;
                    const { cards } = await player.choosePlayerCard(target, 'h', true).forResult();
                    await target.showCards(cards, get.translation(target) + '因【燃焰】展示');
                    const result = await player
                        .chooseToDiscard(function (card, player) {
                            return card.suit == cards[0].suit && lib.filter.cardDiscardable(card, player, 'shranyan');
                        })
                        .set('ai', (card) => {
                            return 8 - get.value(card);
                        })
                        .set('prompt', `你可以弃置一张相同花色的牌对${get.translation(target)}造成1点火焰伤害`)
                        .forResult();
                    if (result.bool) {
                        target.damage('fire');
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            return get.damageEffect(target, player, player, 'fire');
                        },
                    },
                },
            },
            shjiangyi: {
                trigger: {
                    player: 'damageBegin4',
                },
                forced: true,
                filter(event, player) {
                    if (player.getEquips(2).length) return false;
                    return event.hasNature('thunder');
                },
                async content(event, trigger, player) {
                    trigger.cancel();
                },
                ai: {
                    nofire: true,
                    effect: {
                        target(card, player, target, current) {
                            if (target.getEquips(2).length) return;
                            if (get.tag(card, 'thunderDamage')) return 'zerotarget';
                        },
                    },
                },
            },
            shdimeng: {
                trigger: {
                    player: 'useCardToPlayer',
                },
                logTarget: 'target',
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && !event.target.isLinked();
                },
                async content(event, trigger, player) {
                    trigger.target.link(true);
                },
                check(event, player) {
                    return get.attitude(player, event.target) <= 0;
                },
            },
            //SH046
            shlinmu: {
                enable: 'chooseToUse',
                forced: true,
                filter(event, player) {
                    if (!player.isPhaseUsing()) return false;
                    if (!player.getExpansions('shlinmu').length) return false;
                    if (!player.getStorage('shlinmu_record').length) return false;
                    if (!event.shlinmu || !event.shlinmu.length) return false;
                    for (var i of lib.inpile) {
                        var type = get.type(i);
                        if (type == 'trick' && event.filterCard({ name: i }, player, event) && event.shlinmu.includes(i)) return true;
                    }
                    return false;
                },
                onChooseToUse(event) {
                    if (game.online || event.shlinmu) return;
                    const player = get.player();
                    event.set(
                        'shlinmu',
                        player.getStorage('shlinmu_record').map((i) => i[1])
                    );
                },
                chooseButton: {
                    dialog(event, player) {
                        var dialog = ui.create.dialog('临摹');
                        dialog.add(player.getExpansions('shlinmu'));
                        var button;
                        for (var i = 0; i < dialog.buttons.length; i++) {
                            if (player.getStorage('shlinmu_record')[i][0] != dialog.buttons[i].link) continue;
                            button = dialog.buttons[i];
                            button.querySelector('.info').innerHTML = (function (player) {
                                return get.translation(player.getStorage('shlinmu_record')[i][1]);
                            })(player);
                        }
                        return dialog;
                    },
                    filter(button, player) {
                        const cardx = player.getExpansions('shlinmu').find((card) => card == button.link);
                        const num = player.getExpansions('shlinmu').indexOf(cardx);
                        const name = player.getStorage('shlinmu_record')[num][1];
                        return _status.event.parent.filterCard({ name: name }, player, _status.event.parent);
                    },
                    check(button) {
                        var player = _status.event.player;
                        var card = { name: button.link[2] };
                        return player.getUseValue(card);
                    },
                    backup(links, player) {
                        const cardx = player.getExpansions('shlinmu').find((card) => card == links[0]);
                        const num = player.getExpansions('shlinmu').indexOf(cardx);
                        const name = player.getStorage('shlinmu_record')[num][1];
                        return {
                            viewAs: {
                                name: name,
                            },
                            filterCard: () => false,
                            selectCard: -1,
                            card: links,
                            check: (card) => 7 - get.value(card),
                            precontent() {
                                for (var i = 0; i < player.storage['shlinmu_record'].length; i++) {
                                    if (player.storage['shlinmu_record'][i][0] != lib.skill.shlinmu_backup.card[0]) continue;
                                    if (player.storage['shlinmu_record'][i][1] != event.result.card.name) continue;
                                    player.storage['shlinmu_record'].splice(i--, 1);
                                }
                                event.result.cards = [];
                                event.result.cards = lib.skill.shlinmu_backup.card;
                            },
                        };
                    },
                    prompt(links, player) {
                        const cardx = player.getExpansions('shlinmu').find((card) => card == links[0]);
                        const num = player.getExpansions('shlinmu').indexOf(cardx);
                        const name = player.getStorage('shlinmu_record')[num][1];
                        return '将<文>当做【' + get.translation(name) + '】使用';
                    },
                },
                ai: {
                    order: 10,
                    result: {
                        player(player) {
                            return 1;
                        },
                    },
                },
                marktext: '文',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                    mark(dialog, storage, player) {
                        dialog.add(player.getExpansions('shlinmu'));
                        var button;
                        for (var i = 0; i < dialog.buttons.length; i++) {
                            if (player.getStorage('shlinmu_record')[i][0] != dialog.buttons[i].link) continue;
                            button = dialog.buttons[i];
                            button.querySelector('.info').innerHTML = (function (player) {
                                return get.translation(player.getStorage('shlinmu_record')[i][1]);
                            })(player);
                        }
                    },
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                group: 'shlinmu_record',
                subSkill: {
                    record: {
                        trigger: {
                            global: 'useCard',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.player != player && get.type(event.card) == 'trick';
                        },
                        async content(event, trigger, player) {
                            const { bool, cards } = await player
                                .chooseCard(`你可以将一张手牌记为${get.translation(trigger.card)}并置于武将牌上`)
                                .set('ai', (card) => {
                                    if (get.value(trigger.card) < 8) return 0;
                                    return 7 - get.value(card);
                                })
                                .forResult();
                            if (bool) {
                                if (!player.storage.shlinmu_record) player.storage.shlinmu_record = [];
                                player.storage.shlinmu_record.unshift([cards[0], trigger.card.name]);
                                game.log(player.storage.shlinmu_record);
                                player.addToExpansion(cards, player, 'giveAuto').gaintag.add('shlinmu');
                            }
                        },
                    },
                },
            },
            shdiwen: {
                trigger: {
                    player: 'damageBegin3',
                },
                forced: true,
                filter(event, player) {
                    return player.getExpansions('shlinmu').length;
                },
                async content(event, trigger, player) {
                    const dialog = ui.create.dialog('临摹');
                    dialog.add(player.getExpansions('shlinmu'));
                    var button;
                    for (var i = 0; i < dialog.buttons.length; i++) {
                        if (player.getStorage('shlinmu_record')[i][0] != dialog.buttons[i].link) continue;
                        button = dialog.buttons[i];
                        button.querySelector('.info').innerHTML = (function (player) {
                            return get.translation(player.getStorage('shlinmu_record')[i][1]);
                        })(player);
                    }
                    const { bool, links } = await player
                        .chooseButton(get.translation('shdiwen'), dialog)
                        .set('ai', (button) => {
                            const player = get.player();
                            return get.damageEffect(player, trigger.source ? trigger.source : player, player, trigger.nature) > 0;
                        })
                        .forResult();
                    if (bool) {
                        player.loseToDiscardpile(links);
                        player.draw();
                        trigger.num--;
                    }
                },
            },
            //SH047
            shbue: {
                group: ['shbue_self', 'shbue_other'],
                subSkill: {
                    self: {
                        trigger: {
                            global: ['gainAfter', 'loseAsyncAfter'],
                        },
                        forced: true,
                        filter(event, player) {
                            const cards = event.getg(player);
                            if (!cards.length) return false;
                            return game.hasPlayer((current) => {
                                if (current == player) return false;
                                const evt = event.getl(current);
                                if (evt && evt.cards && evt.cards.length) return true;
                                return false;
                            });
                        },
                        async content(event, trigger, player) {
                            const cards = trigger.getg(player);
                            player.loseToDiscardpile(cards);
                        },
                    },
                    other: {
                        trigger: {
                            global: 'gainAfter',
                            player: 'loseAsyncAfter',
                        },
                        forced: true,
                        filter(event, player) {
                            if (event.name == 'loseAsync') {
                                if (event.type != 'gain') return false;
                                const hs = current.getCards('h'),
                                    cards = event.getl(player).cards2;
                                return game.hasPlayer(function (current) {
                                    if (current == player) return false;
                                    const cardsx = event.getg(current);
                                    for (var i of cardsx) {
                                        if (cards.includes(i) && hs.includes(card) && cards.includes(card)) return true;
                                    }
                                    return false;
                                });
                            }
                            if (event.player != player) {
                                const hs = event.player.getCards('h');
                                const evt = event.getl(player);
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
                        async content(event, trigger, player) {
                            const cards = trigger.getl(player).cards2;
                            const targets = game.filterPlayer();
                            while (targets.length) {
                                const target = targets.shift();
                                if (target == player) continue;
                                const hs = target.getCards('h');
                                const cardsx = trigger.getg(target).filter(function (card) {
                                    return hs.includes(card) && cards.includes(card);
                                });
                                if (cardsx.length) await target.loseToDiscardpile(cards);
                            }
                        },
                    },
                },
            },
            shjiucha: {
                trigger: {
                    global: ['gainAfter', 'loseAsyncAfter'],
                },
                usable: 1,
                logTarget: 'player',
                filter(event, player) {
                    if (event.player) {
                        var cards = event.getg(event.player);
                        if (event.player == player || !cards.length) return false;
                        return game.hasPlayer((current) => {
                            if (current == player) return false;
                            var evt = event.getl(current);
                            if (evt && evt.cards && evt.cards.length) return true;
                            return false;
                        });
                    } //QQQ
                },
                async content(event, trigger, player) {
                    const list = [];
                    const target = trigger.player;
                    if (target.countCards('h')) list.push('选项一');
                    list.push('选项二');
                    const { control } = await target
                        .chooseControl(list)
                        .set('choiceList', [`弃置一张手牌`, `受到1点伤害`])
                        .set('prompt', get.translation(event.name))
                        .set('ai', () => {
                            const player = get.player();
                            const evt = event.parent;
                            if (get.damageEffect(player, evt.player, player) >= 0) return '选项二';
                            if (
                                player.hasCard(function (card) {
                                    return lib.filter.cardDiscardable(card, player, 'shjiucha');
                                }, 'h')
                            )
                                return '选项一';
                            return '选项二';
                        })
                        .forResult();
                    if (control == '选项一') {
                        target.chooseToDiscard('h', true);
                    } else {
                        target.damage();
                    }
                },
            },
            shdizheng: {
                trigger: {
                    global: 'damageBegin4',
                },
                logTarget: 'player',
                filter(event, player) {
                    return event.player != player && event.source && event.source != player;
                },
                async content(event, trigger, player) {
                    const { color } = await trigger.player.judge().forResult();
                    if (color == 'red') {
                        if (!trigger.source || trigger.source.isIn()) return;
                        const result = await trigger.player
                            .chooseCard(`你可以交给${get.translation(trigger.source)}一张牌并防止此伤害`, 'hes')
                            .set('ai', (card) => {
                                const player = get.player();
                                if (get.damageEffect(player, trigger.source, player) >= 0) return 0;
                                if (get.attitude(player, trigger.source) > 0) return 7 - get.value(card);
                                return 6 - get.value(card);
                            })
                            .forResult();
                        if (result.bool) {
                            trigger.player.give(result.cards, trigger.source);
                            trigger.cancel();
                        }
                    } else if (color == 'black') {
                        const result = await trigger.player
                            .chooseCard(`你可以交给${get.translation(player)}一张牌并令其代替承受此伤害`, 'hes')
                            .set('ai', (card) => {
                                const player = get.player();
                                if (get.damageEffect(player, trigger.source, player) >= 0) return 0;
                                if (get.attitude(player, trigger.source) > 0) return 7 - get.value(card);
                                return 6 - get.value(card);
                            })
                            .forResult();
                        if (result.bool) {
                            trigger.player.give(result.cards, player);
                            trigger.cancel();
                            player
                                .damage(trigger.source ? trigger.source : 'nosource', trigger.nature, trigger.num)
                                .set('card', trigger.card)
                                .set('cards', trigger.cards);
                        }
                    }
                },
            },
            //SH048
            shzhenchi: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('h') < player.hp;
                },
                async content(event, trigger, player) {
                    player.addTempSkill('shzhenchi_flutter', { player: 'phaseBefore' });
                },
                subSkill: {
                    flutter: {
                        charlotte: true,
                        mod: {
                            globalTo(from, to, distance) {
                                return distance + 3;
                            },
                        },
                    },
                },
            },
            shpanxuan: {
                trigger: {
                    global: 'useCardAfter',
                },
                filter(event, player) {
                    if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                    return event.player != player && _status.currentPhase != player;
                },
                async content(event, trigger, player) {
                    event.target = trigger.player;
                    const result = await player
                        .judge(function (card) {
                            return card.name == 'sha' ? 2 : -2;
                        })
                        .set('judge2', (result) => result.bool)
                        .set('callback', async (event, trigger, player) => {
                            if (event.judgeResult.name == 'sha') {
                                const target = event.getParent(2).target;
                                if (player.canUse({ name: 'sha' }, target)) player.chooseUseTarget({ name: 'sha' }, target, true, false);
                            } else {
                                if (get.position(event.judgeResult.card, true) == 'o') {
                                    player.gain(event.judgeResult.card, 'gain2', 'log');
                                }
                                player.addTempSkill('shpanxuan_hover', { player: 'phaseZhunbeiBegin' });
                                player.addMark('shpanxuan_hover', 1, false);
                            }
                        })
                        .forResult();
                },
                subSkill: {
                    hover: {
                        charlotte: true,
                        mod: {
                            globalTo(from, to, distance) {
                                return distance - to.storage.shpanxuan_hover;
                            },
                        },
                    },
                },
            },
            shdikuo: {
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (!player.countCards('h')) return false;
                    for (var i of lib.inpile) {
                        var type = get.type(i);
                        if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event) && !player.getStorage('shdikuo_record').includes(i)) return true;
                    }
                    return false;
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        for (var i = 0; i < lib.inpile.length; i++) {
                            var name = lib.inpile[i];
                            if (name == 'sha') {
                                if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                for (var j of lib.inpile_nature) {
                                    if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
                                }
                            } else if (get.type(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                            else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                        }
                        return ui.create.dialog('地阔', [list, 'vcard']);
                    },
                    filter(button, player) {
                        if (player.getStorage('shdikuo_record').includes(button.link[2])) return false;
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
                            popname: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            precontent() {
                                player.addSkill('shdikuo_record');
                                player.markAuto('shdikuo_record', [event.result.card.name]);
                            },
                        };
                    },
                    prompt(links, player) {
                        return '将一张手牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    },
                },
                hiddenCard(player, name) {
                    if (!lib.inpile.includes(name)) return false;
                    var type = get.type(name);
                    return (type == 'basic' || type == 'trick') && player.countCards('h') > 0 && !player.getStorage('shdikuo_record').includes(name);
                },
                ai: {
                    fireAttack: true,
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag) {
                        if (!player.countCards('h')) return false;
                        if (tag == 'respondSha') return !player.getStorage('shdikuo_record').includes('sha');
                        if (tag == 'respondShan') return !player.getStorage('shdikuo_record').includes('shan');
                    },
                    order: 1,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
                subSkill: {
                    record: {
                        charlotte: true,
                        mark: true,
                        intro: {
                            mark(dialog, content, player) {
                                if (content && content.length) {
                                    dialog.addText('已使用过的牌名');
                                    return dialog.addAuto([content, 'vcard']);
                                }
                            },
                        },
                    },
                },
            },
            //SH049
            shjiyuan: {
                trigger: {
                    global: 'damageBegin4',
                },
                usable: 1,
                logTarget: 'source',
                filter(event, player) {
                    return event.source && event.source != player && player.canCompare(event.source);
                },
                async content(event, trigger, player) {
                    const result = await player.chooseToCompare(trigger.source).forResult();
                    if (result.bool) {
                        const list = [];
                        list.push('选项一');
                        list.push('选项二');
                        const { control } = await player
                            .chooseControl(list)
                            .set('choiceList', [`防止${get.translation(trigger.player)}受到的此次伤害`, `对${get.translation(trigger.source)}造成1点伤害`])
                            .set('prompt', get.translation(event.name))
                            .set('ai', () => {
                                const player = get.player();
                                if (get.attitude(player, trigger.player) > 0) return '选项一';
                                if (get.damageEffect(trigger.source, player, player) >= 0) return '选项二';
                                return '选项一';
                            })
                            .forResult();
                        if (control == '选项一') {
                            trigger.cancel();
                        } else {
                            trigger.source.damage();
                        }
                    } else {
                        await player.damage(trigger.source);
                        player.draw();
                    }
                },
                check(event, player) {
                    if (get.attitude(player, event.source) < -2) {
                        var cards = player.getCards('h');
                        if (cards.length > player.hp) return true;
                        if (Array.isArray(cards))
                            for (var i of cards) {
                                var useful = get.useful(i);
                                if (useful < 5) return true;
                                if (i.number > 7 && useful < 7) return true;
                            }
                    }
                    return false;
                },
            },
            shdihe: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget: true,
                async content(event, trigger, player) {
                    player.loseHp();
                    event.target
                        .when('damageBegin4')
                        .filter((evt, player) => {
                            if (evt.source && evt.source == player) return false;
                            return evt.card && ['sha', 'juedou'].includes(evt.card.name);
                        })
                        .then(() => {
                            trigger.cancel();
                        });
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            if (
                                player.hp +
                                player.countCards('h', function (card) {
                                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 != 'unchanged') return mod2;
                                    var mod = game.checkMod(card, player, player, 'unchanged', 'cardSavable', player);
                                    if (mod != 'unchanged') return mod;
                                    var savable = get.info(card).savable;
                                    if (typeof savable == 'function') savable = savable(card, player, player);
                                    return savable;
                                }) <=
                                1
                            )
                                return 0;
                            return 1;
                        },
                    },
                },
            },
            //SH050
            shjielue: {
                trigger: {
                    global: 'phaseJieshuBegin',
                },
                logTarget: 'player',
                filter(event, player) {
                    return event.player.countGainableCards(player, 'h');
                },
                async content(event, trigger, player) {
                    const result = await player
                        .judge(function (card) {
                            return card.suit == 'spade' ? 2 : -2;
                        })
                        .set('judge2', (result) => result.bool)
                        .forResult();
                    if (result.bool) {
                        if (trigger.player.countGainableCards(player, 'h')) player.gain(trigger.player.getCards('h').randomGet(), trigger.player, 'give');
                    }
                },
                check(event, player) {
                    return get.attitude(player, event.player) <= 0;
                },
            },
            shzhazhai: {
                enable: 'phaseUse',
                limited: true,
                charlotte: true,
                changeSeat: true,
                filter(event, player) {
                    return player.countCards('he');
                },
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    await player.discard(player.getCards('he'));
                    await player.draw(Math.min(player.hp, 20));
                    if (game.countPlayer() > 2) {
                        player
                            .when('phaseEnd')
                            .filter((event, player) => !event.skill)
                            .then(() => {
                                var evt = trigger.parent;
                                if (evt.name == 'phaseLoop' && evt._isStandardLoop) evt.player = player.next;
                            });
                        const result = await player
                            .chooseTarget(
                                '请选择一名要更换座次的角色,将自己移动到该角色的上家位置',
                                true,
                                function (card, player, target) {
                                    return target != player && target != player.next;
                                },
                                true
                            )
                            .set('ai', function (target) {
                                const player = get.player();
                                const current = _status.currentPhase.next;
                                let max = 20,
                                    att = 0;
                                while (max > 0) {
                                    max--;
                                    if (current == target) return att;
                                    att -= get.attitude(player, current);
                                    current = current.next;
                                }
                                return att;
                            })
                            .forResult();
                        const target = result.targets[0];
                        game.broadcastAll(
                            function (target1, target2) {
                                game.swapSeat(target1, target2, null, true);
                            },
                            player,
                            target
                        );
                        player.turnOver();
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        player(player) {
                            return player.countCards('h') < player.hp;
                        },
                    },
                },
            },
            shdiqiang: {
                trigger: {
                    global: 'useCardToTarget',
                },
                usable: 1,
                filter(event, player) {
                    if (event.player == player) return false;
                    return get.distance(event.player, event.target) > get.distance(event.player, player);
                },
                async content(event, trigger, player) {
                    const list = [];
                    if (trigger.player.countCards('hes')) list.push('选项一');
                    list.push('选项二');
                    const { control } = await trigger.player
                        .chooseControl(list)
                        .set('choiceList', [`交给${get.translation(player)}一张牌`, `受到${get.translation(player)}造成的1点伤害`])
                        .set('prompt', get.translation(event.name))
                        .set('ai', () => {
                            const player = get.player();
                            const evt = event.parent;
                            if (get.damageEffect(player, evt.player, evt.player) >= 0) return '选项二';
                            if (player.countCards('h') > 4) return '选项一';
                            return '选项一';
                        })
                        .forResult();
                    if (control == '选项一') {
                        const { bool, cards } = await trigger.player.chooseCard(`交给${get.translation(player)}一张牌`, 'hes', true).forResult();
                        if (bool) trigger.player.give(cards, player, 'give');
                    } else {
                        trigger.player.damage();
                    }
                },
                check(event, player) {
                    return get.attitude(player, event.player) <= 0;
                },
                ai: {
                    expose: 0.6,
                },
            },
            //SH051
            shtanshao: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    return target.countCards('h');
                },
                complexTarget: true,
                selectTarget: [1, 4],
                multitarget: true,
                async content(event, trigger, player) {
                    const targets = event.targets;
                    const scouts = [];
                    while (targets.length) {
                        const target = targets.shift();
                        const { cards } = await player.choosePlayerCard(target, 'h', true).forResult();
                        await target.showCards(cards, get.translation(target) + '因【探哨】展示');
                        scouts.push([target, cards[0]]);
                    }
                    const { suit } = await player.judge().forResult();
                    while (scouts.length) {
                        const scout = scouts.shift();
                        if (scout[1].suit != suit) continue;
                        const { bool } = await scout[0]
                            .chooseToDiscard('h', function (card) {
                                return card != scout[1];
                            })
                            .set('ai', (card) => {
                                const player = get.player();
                                if (get.damageEffect(player, player, player) > 0) return 0;
                                return 8 - get.value(card);
                            })
                            .set('prompt', '你需要弃置一张不为展示牌的手牌,否则你受到1点伤害')
                            .forResult();
                        if (!bool) await scout[0].damage();
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        target: -1,
                    },
                },
            },
            shdian: {
                enable: 'phaseUse',
                filterCard: true,
                filter(event, player) {
                    var stat = player.getStat('skill').shdian_targets;
                    return !stat || stat.length < 2;
                },
                filterTarget(card, player, target) {
                    if (!target.countCards('h')) return false;
                    var stat = player.getStat('skill').shdian_targets;
                    return !stat || !stat.includes(target);
                },
                async content(event, trigger, player) {
                    const target = event.target;
                    var stat = player.getStat('skill');
                    if (!stat.shdian_targets) stat.shdian_targets = [];
                    stat.shdian_targets.push(target);
                    const cards = target.getCards('h');
                    let count = 0;
                    while (cards.length) {
                        const card = cards.shift();
                        const dialog = ui.create.dialog('地暗', [lib.inpile, 'vcard']);
                        const { links } = await player
                            .chooseButton(get.translation('shdian'), dialog)
                            .set('ai', (button) => {
                                return 1 + Math.random();
                            })
                            .set('forced', true)
                            .forResult();
                        if (card.name == links[0][2]) count++;
                        game.log(player, '已猜测正确', count, '次');
                        if (count > 5) break;
                    }
                    if (count > 0) await player.draw();
                    if (count > 1 && target.countDiscardableCards(player, 'h')) await player.discardPlayerCard(target, 'h', true);
                    if (count > 2) await target.damage();
                    if (count > 3 && target.countGainableCards(player, 'he')) await player.gainPlayerCard(target, 'he', true);
                    if (count > 4) target.turnOver(true);
                },
                ai: {
                    order: 1,
                    result: {
                        target: -1,
                    },
                },
            },
            //SH052
            shfengchi: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.getExpansions('shdizhou').length;
                },
                chooseButton: {
                    dialog(event, player) {
                        return ui.create.dialog('风驰', player.getExpansions('shdizhou'), 'hidden');
                    },
                    select: [1, Infinity],
                    filter(button, player) {
                        return !ui.selected.buttons.some((buttonx) => buttonx.link.suit == button.link.suit);
                    },
                    backup(links, player) {
                        return {
                            filterTarget: true,
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            cards: links,
                            delay: false,
                            content: lib.skill.shfengchi.contentx,
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player, player);
                                    },
                                },
                            },
                        };
                    },
                    prompt() {
                        return '请选择〖风驰〗的目标';
                    },
                },
                async contentx(event, trigger, player) {
                    const cards = lib.skill.shfengchi_backup.cards;
                    player.loseToDiscardpile(cards);
                    event.target.damage(cards.length);
                },
                ai: {
                    order: 1,
                    combo: 'quanji',
                    result: {
                        player: 1,
                    },
                },
                subSkill: {
                    backup: {},
                },
            },
            shdizhou: {
                trigger: {
                    global: 'phaseZhunbeiBegin',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('h');
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseToDiscard('h', get.prompt2(event.name))
                        .set('ai', (card) => {
                            return 6 - get.value(card);
                        })
                        .forResult();
                    if (result.bool) {
                        const result = await player
                            .judge()
                            .set('callback', async (event, trigger, player) => {
                                if (get.position(event.judgeResult.card, true) == 'o') {
                                    player.addToExpansion(event.judgeResult.card, player, 'giveAuto').gaintag.add('shdizhou');
                                }
                            })
                            .forResult();
                    }
                },
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
            },
            //SH053
            shsuanchou: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('s', (card) => card.hasGaintag('shsuanchou')) < 4;
                },
                async content(event, trigger, player) {
                    const cards = get.cards(3);
                    game.cardsGotoOrdering(cards);
                    const num = player.countCards('s', (card) => card.hasGaintag('shsuanchou'));
                    const { bool, links } = await player
                        .chooseCardButton(get.translation(event.name), cards)
                        .set('selectButton', () => {
                            const number = Math.min(3, 4 - player.countCards('s', (card) => card.hasGaintag('shsuanchou')));
                            return [1, number];
                        })
                        .forResult();
                    if (bool) {
                        player.markSkill(event.name);
                        player.loseToSpecial(links, 'shsuanchou').visible = true;
                        cards.removeArray(links);
                        while (cards.length) {
                            ui.cardPile.insertBefore(cards.pop(), ui.cardPile.firstChild);
                        }
                        game.updateRoundNumber();
                    }
                },
                marktext: '数',
                intro: {
                    mark(dialog, storage, player) {
                        dialog.addAuto(
                            player.getCards('s', function (card) {
                                return card.hasGaintag('shsuanchou');
                            })
                        );
                    },
                    markcount(storage, player) {
                        return player.getCards('s', function (card) {
                            return card.hasGaintag('shsuanchou');
                        }).length;
                    },
                    onunmark(storage, player) {
                        var cards = player.getCards('s', function (card) {
                            return card.hasGaintag('shsuanchou');
                        });
                        if (cards.length) {
                            player.lose(cards, ui.discardPile);
                            player.$throw(cards, 1000);
                            game.log(cards, '进入了弃牌堆');
                        }
                    },
                },
                mod: {
                    cardEnabled2(card, player) {
                        if (get.itemtype(card) == 'card' && card.hasGaintag('shsuanchou')) {
                            return false;
                        }
                    },
                },
            },
            shshuli: {
                enable: 'phaseUse',
                filterCard: true,
                filterOk() {
                    return ui.selected.cards.some((card) => card.hasGaintag('shsuanchou'));
                },
                selectCard: [1, Infinity],
                complexCard: true,
                position: 'hs',
                getc(player, num) {
                    if (num > 0) return num;
                    return player.hp;
                },
                getn(player, cards) {
                    return cards.map((card) => card.number);
                },
                test(player, cards, num) {
                    var cs = lib.skill.shshuli.getc(player, num);
                    var ns = lib.skill.shshuli.getn(player, cards);
                    return lib.skill.shshuli.calc(ns, cs);
                },
                calc(arr, num) {
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i] == num) {
                            return true;
                        }
                    }
                    if (arr.length > 1) {
                        for (var i = 0; i < arr.length - 1; i++) {
                            for (var j = i + 1; j < arr.length; j++) {
                                var brr = [];
                                for (var k = 0; k < arr.length; k++) {
                                    if (k != i && k != j) {
                                        brr.push(arr[k]);
                                    }
                                }
                                if (lib.skill.shshuli.calc(brr.concat([arr[i] + arr[j]]), num)) return true;
                                if (lib.skill.shshuli.calc(brr.concat([arr[i] - arr[j]]), num)) return true;
                                if (lib.skill.shshuli.calc(brr.concat([arr[i] * arr[j]]), num)) return true;
                                if (lib.skill.shshuli.calc(brr.concat([arr[i] / arr[j]]), num)) return true;
                            }
                        }
                    }
                    return false;
                },
                async content(event, trigger, player) {
                    const cards = event.cards;
                    if (lib.skill.shshuli.test(player, cards)) {
                        const list = [];
                        list.push('选项一');
                        if (game.hasPlayer((current) => current.countDiscardableCards(player, 'hej') > 1)) list.push('选项二');
                        if (player.isDamaged()) list.push('选项三');
                        const { control } = await player
                            .chooseControl(list)
                            .set('choiceList', [`分配1点伤害`, `弃置一名角色区域内的两张牌`, `回复1点体力`])
                            .set('prompt', get.translation(event.name))
                            .set('ai', () => {
                                const player = get.player();
                                if (get.recoverEffect(player, player, player) > 0) return '选项三';
                                if (game.hasPlayer((current) => get.damageEffect(current, player, player) < 0)) return '选项一';
                                return '选项二';
                            })
                            .forResult();
                        if (control == '选项一') {
                            const result = await player
                                .chooseTarget(`对一名角色造成1点伤害`, true)
                                .set('ai', (target) => {
                                    return get.damageEffect(target, player, player);
                                })
                                .forResult();
                            const target = result.targets[0];
                            player.line(target);
                            target.damage();
                        } else if (control == '选项二') {
                            const result = await player
                                .chooseTarget(`弃置一名角色区域内的两张牌`, function (card, player, target) {
                                    return target.countDiscardableCards(player, 'hej') > 1;
                                })
                                .set('ai', (target) => {
                                    const player = get.player();
                                    let att = get.attitude(player, target) > 0 ? 2 : 1;
                                    return get.effect(target, { name: 'guohe_copy' }, player, player) * att;
                                })
                                .forResult();
                            const target = result.targets[0];
                            player.line(target);
                            player.discardPlayerCard(target, 'hej', 2, true);
                        } else {
                            player.recover();
                        }
                    }
                },
                subSkill: {
                    ai: {},
                },
            },
            shdihui: {
                trigger: {
                    player: ['useCard', 'loseAfter'],
                    global: 'loseAsyncAfter',
                },
                forced: true,
                filter(event, player) {
                    if (player.countCards('s', (card) => card.hasGaintag('shsuanchou')) < 2) return false;
                    if (event.name == 'useCard') return typeof event.card.number == 'number';
                    if (event.type != 'discard') return false;
                    var evt = event.getl(player);
                    return evt && evt.cards2 && evt.cards2.length;
                },
                async content(event, trigger, player) {
                    let num;
                    if (trigger.name == 'useCard') {
                        num = trigger.card.number;
                    } else {
                        num = trigger
                            .getl(player)
                            .cards2.map((i) => i.number)
                            .reduce((p, c) => p + c, 0);
                    }
                    const { bool, cards } = await player
                        .chooseCard('s')
                        .set('filterCard', (card) => {
                            return card.hasGaintag('shsuanchou');
                        })
                        .set('selectCard', [2, Infinity])
                        .set('prompt', `你可以选择至少两张<数>,若这些<数>的点数能通过四则运算等于${num},则你摸一张牌`)
                        .forResult();
                    if (bool) {
                        if (lib.skill.shshuli.test(player, cards, num)) {
                            player.draw();
                        }
                    }
                },
            },
            //SH054
            shwuer: {
                trigger: {
                    player: 'useCardToPlayer',
                },
                forced: true,
                logTarget: 'target',
                filter(event, player) {
                    if (!event.isFirstTarget) return false;
                    return event.card && event.card.name == 'sha';
                },
                async content(event, trigger, player) {
                    const num = game.roundNumber;
                    const id = trigger.target.playerid;
                    const map = trigger.parent.customArgs;
                    if (!map[id]) map[id] = {};
                    if (typeof map[id].shanRequired == 'number') {
                        map[id].shanRequired += num - 1;
                    } else {
                        map[id].shanRequired = num;
                    }
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > game.roundNumber) return false;
                    },
                },
            },
            shdizuo: {
                enable: 'chooseToUse',
                filterCard: () => false,
                selectCard: -1,
                viewAs: {
                    name: 'sha',
                },
                viewAsFilter(player) {
                    if (!player.isPhaseUsing()) return false;
                    if (player.getHistory('useSkill', (evt) => evt.skill == 'shdizuo').length >= game.roundNumber) return false;
                },
                prompt: '你可以视为使用一张【杀】',
            },
            //SH055
            shhujun: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    const skill = lib.skill.shhujun;
                    return game.hasPlayer(function (current) {
                        return skill.hasMark('shhujun', player, current);
                    });
                },
                filterTarget(card, player, target) {
                    if (ui.selected.targets.length == 0) {
                        const skill = lib.skill.shhujun;
                        return skill.hasMark('shhujun', player, target);
                    }
                    return true;
                },
                selectTarget: 2,
                complexSelect: true,
                complexTarget: true,
                multitarget: true,
                prompt: '移动场上的<护军>',
                targetprompt: ['失去<护军>', '获得<护军>'],
                async content(event, trigger, player) {
                    const targets = event.targets;
                    var skill = lib.skill.shhujun,
                        mark = 'shhujun';
                    skill.removeMark(mark, player, targets[0]);
                    skill.addMark(mark, player, targets[1]);
                },
                hasMark(mark, player, target) {
                    mark = mark + '_effect';
                    if (!target) return player.getStorage(mark).length;
                    return target.getStorage(mark).includes(player);
                },
                addMark(mark, player, target) {
                    mark = mark + '_effect';
                    target.addAdditionalSkill(`${mark}_${player.playerid}`, 'shhujun');
                    target.markAuto(mark, [player]);
                    game.log(player, '令', target, '获得了', `#g<${'护军'}>`);
                },
                removeMark(mark, player, target, log) {
                    if (lib.skill.shhujun.hasMark(mark, player, target, log)) {
                        mark = mark + '_effect';
                        target.removeAdditionalSkill(`${mark}_${player.playerid}`);
                        target.unmarkAuto(mark, [player]);
                        if (log) game.log(target, '移去了', player, '给予的', `#g<${'护军'}>`);
                        else game.log(player, '移去了', target, '的', `#g<${'护军'}>`);
                    }
                },
                ai: {
                    order: 8,
                    result: {
                        target(player, target) {
                            if (ui.selected.targets.length == 0) {
                                return get.attitude(player, target) < 0 ? -999 : -3;
                            } else {
                                return target.countCards('h') + 1;
                            }
                        },
                    },
                    expose: 0.4,
                },
                group: ['shhujun_init', 'shhujun_damage'],
                subSkill: {
                    init: {
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        async content(event, trigger, player) {
                            var skill = lib.skill.shhujun,
                                mark = 'shhujun';
                            skill.addMark(mark, player, player);
                        },
                    },
                    damage: {
                        trigger: {
                            global: 'damageBegin4',
                        },
                        logTarget: 'player',
                        filter(event, player) {
                            if (event.player == player) return false;
                            return lib.skill.shhujun.hasMark('shhujun', player, event.player);
                        },
                        check(event, player) {
                            if (get.damageEffect(event.player, event.source, player) > 0 || (get.attitude(player, event.player) > 0 && get.damageEffect(event.player, event.source, event.player) > 0)) return false;
                            return get.attitude(player, event.player) > 0 && event.player.hp < player.hp && ((['君', '主'].includes(lib.translate[event.player.identity]) && !['野', '内'].includes(lib.translate[player.identity])) || player.hp + player.hujia - event.num > 0);
                        },
                        prompt2(event, player) {
                            return '你可以代替' + get.translation(event.player) + '承受此次伤害' + (event.source ? ',对' + get.translation(event.source) + '造成1点伤害' : '');
                        },
                        async content(event, trigger, player) {
                            game.log(player, '为', trigger.player, '承受了此次伤害');
                            trigger.cancel();
                            player
                                .damage(trigger.source ? trigger.source : 'nosource', trigger.nature, trigger.num)
                                .set('card', trigger.card)
                                .set('cards', trigger.cards);
                        },
                    },
                    effect: {
                        marktext: '军',
                        intro: {
                            name: '护军',
                            name2: '军',
                            markcount: () => 0,
                            content: '已获得<护军>标记',
                        },
                    },
                },
            },
            shdiyou: {
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                async content(event, trigger, player) {
                    player.draw();
                    const targets = game.filterPlayer((target) => lib.skill.shhujun.hasMark('shhujun', player, target));
                    if (targets.length) game.asyncDraw(targets);
                },
            },
            //SH056
            shfuming: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget: true,
                async content(event, trigger, player) {
                    const { control } = await player
                        .chooseControl('失去体力', '减少体力上限')
                        .set('ai', () => {
                            if (player.getDamagedHp() > 1 && player.maxHp > 1) return '减少体力上限';
                            return '失去体力';
                        })
                        .forResult();
                    await player[control == '失去体力' ? 'loseHp' : 'loseMaxHp']();
                    event.target.recover();
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            if (
                                player.hp +
                                player.countCards('h', function (card) {
                                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 != 'unchanged') return mod2;
                                    var mod = game.checkMod(card, player, player, 'unchanged', 'cardSavable', player);
                                    if (mod != 'unchanged') return mod;
                                    var savable = get.info(card).savable;
                                    if (typeof savable == 'function') savable = savable(card, player, player);
                                    return savable;
                                }) <=
                                1
                            )
                                return 0;
                            return get.recoverEffect(target, player, player);
                        },
                    },
                },
            },
            shjianti: {
                trigger: {
                    global: 'recoverBegin',
                },
                forced: true,
                filter(event, player) {
                    if (event.player.hasSkill('shjianti_effect')) return false;
                    if (event.num < event.player.hp) return false;
                    return event.source && event.source == player;
                },
                async content(event, trigger, player) {
                    trigger.player.addSkill('shjianti_effect');
                },
                subSkill: {
                    effect: {
                        trigger: {
                            player: 'damageBegin4',
                        },
                        async content(event, trigger, player) {
                            trigger.num--;
                            player.removeSkill(event.name);
                        },
                        prompt2(event, player) {
                            return '你可以移去<健>标记,令此次受到的伤害-1';
                        },
                        marktext: '健',
                        intro: {
                            name: '健',
                            name2: '健',
                            markcount: () => 0,
                            content: '已获得<健>标记',
                        },
                    },
                },
            },
            shdiling: {
                trigger: {
                    player: 'useCard',
                },
                usable: 1,
                filter(event, player) {
                    return event.card && event.card.name == 'tao';
                },
                async content(event, trigger, player) {
                    trigger.baseDamage++;
                },
            },
            //SH057
            shyuma: {
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (!player.countCards('hes', (card) => ['equip3', 'equip4', 'equip6'].includes(get.subtype(card))) || !player.isPhaseUsing()) return false;
                    for (var i of lib.inpile) {
                        var type = get.type2(i);
                        if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) return true;
                    }
                    return false;
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        for (var i = 0; i < lib.inpile.length; i++) {
                            var name = lib.inpile[i];
                            if (name == 'sha') {
                                if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                for (var j of lib.inpile_nature) {
                                    if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
                                }
                            } else if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                            else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                        }
                        return ui.create.dialog('御马', [list, 'vcard']);
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
                            filterCard(card) {
                                return ['equip3', 'equip4', 'equip6'].includes(get.subtype(card));
                            },
                            popname: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            position: 'hes',
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            precontent() { },
                        };
                    },
                    prompt(links, player) {
                        return '将一张坐骑牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    },
                },
                hiddenCard(player, name) {
                    if (!lib.inpile.includes(name)) return false;
                    var type = get.type2(name);
                    return (type == 'basic' || type == 'trick') && player.countCards('hes', { type: ['equip3', 'equip4', 'equip6'] }) > 0 && player.isPhaseUsing();
                },
                ai: {
                    combo: 'spwuku',
                    fireAttack: true,
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player) {
                        if (!player.countCards('hes', (card) => ['equip3', 'equip4', 'equip6'].includes(get.subtype(card))) || !player.isPhaseUsing()) return false;
                    },
                    order: 1,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
            },
            shxiangju: {
                trigger: {
                    player: 'useCardToPlayered',
                },
                usable: 1,
                forced: true,
                logTarget: 'target',
                filter(event, player) {
                    return player.isPhaseUsing() && event.target.countCards('e', (card) => ['equip3', 'equip4', 'equip6'].includes(get.subtype(card)));
                },
                async content(event, trigger, player) {
                    const cards = trigger.target.countCards('e', (card) => ['equip3', 'equip4', 'equip6'].includes(get.subtype(card)));
                    if (cards.length) player.gain(cards, trigger.target, 'give');
                },
            },
            shdishou: {
                trigger: {
                    player: ['loseBefore', 'disableEquipBefore'],
                },
                forced: true,
                filter(event, player) {
                    if (event.name == 'disableEquip') return event.slots.includes('equip3') || event.slots.includes('equip4');
                    if (event.parent.name == 'useCard') return false;
                    return event.cards && event.cards.some((card) => ['equip3', 'equip4', 'equip6'].includes(get.subtype(card)));
                },
                async content(event, trigger, player) {
                    if (trigger.name == 'lose') {
                        const cards = trigger.cards.filter((card) => ['equip3', 'equip4', 'equip6'].includes(get.subtype(card)));
                        trigger.cards.removeArray(cards);
                    } else {
                        while (trigger.slots.includes('equip3') || trigger.slots.includes('equip4')) {
                            trigger.slots.remove('equip3');
                            trigger.slots.remove('equip4');
                        }
                    }
                },
                mod: {
                    ignoredHandcard(card, player) {
                        if (['equip3', 'equip4', 'equip6'].includes(get.subtype(card))) return true;
                    },
                    canBeDiscarded(card) {
                        if (get.position(card) == 'e' && ['equip3', 'equip4', 'equip6'].includes(get.subtype(card))) return false;
                    },
                    canBeGained(card, source, player) {
                        if (['equip3', 'equip4', 'equip6'].includes(get.subtype(card))) return false;
                    },
                    canBeDiscarded(card, source, player) {
                        if (['equip3', 'equip4', 'equip6'].includes(get.subtype(card))) return false;
                    },
                    cardDiscardable(card, player) {
                        if (['equip3', 'equip4', 'equip6'].includes(get.subtype(card))) return false;
                    },
                },
            },
            //SH058
            shzhengyan: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget: true,
                async content(event, trigger, player) {
                    await player.loseHp();
                    event.target.damage();
                },
                ai: {
                    damage: true,
                    order: 1,
                    result: {
                        target(player, target) {
                            if (
                                player.hp +
                                player.countCards('h', function (card) {
                                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 != 'unchanged') return mod2;
                                    var mod = game.checkMod(card, player, player, 'unchanged', 'cardSavable', player);
                                    if (mod != 'unchanged') return mod;
                                    var savable = get.info(card).savable;
                                    if (typeof savable == 'function') savable = savable(card, player, player);
                                    return savable;
                                }) <=
                                1
                            )
                                return 0;
                            return get.damageEffect(target, player, player);
                        },
                    },
                },
            },
            shjinghan: {
                trigger: {
                    source: 'damageSource',
                    player: 'loseHpAfter',
                },
                forced: true,
                filter(event, player, name) {
                    if (name == 'damageSource') return !player.hasHistory('sourceDamage');
                    return game.getGlobalHistory('changeHp', (evt) => evt.player == player && evt.parent.name == 'loseHp').length <= 1;
                },
                async content(event, trigger, player) {
                    player.draw();
                },
            },
            shbuyu: {
                derivation: 'shdiweixin_rewrite',
                trigger: {
                    player: 'dying',
                },
                forced: true,
                juexingji: true,
                filter(event, player) {
                    const evt = event.getParent(2);
                    return player.isDying() && event.reason && event.reason.name == 'damage' && evt.player.hasSex('female');
                },
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    player.storage.shbuyu = true;
                    await player.loseMaxHp();
                    player.recover(player.getDamagedHp());
                },
            },
            shdiweixin: {
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                filter(event, player) {
                    if (!player.storage.shbuyu) return false;
                    return event.card && ['sha', 'juedou'].includes(event.card.name);
                },
                async content(event, trigger, player) {
                    trigger.num++;
                },
                mod: {
                    playerEnabled(card, player, target) {
                        if (player.storage.shbuyu) return;
                        if (!target.hasSex('female')) return;
                        if (!['sha', 'juedou'].includes(card.name)) return;
                        return false;
                    },
                },
            },
            //SH059
            shqianzi: {
                enable: ['chooseToUse', 'chooseToRespond'],
                usable: 1,
                filterCard: () => false,
                selectCard: -1,
                viewAs: {
                    name: 'shan',
                },
                prompt: '视为使用或打出一张【闪】',
            },
            shchansheng: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('h');
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseTarget(get.prompt2(event.name), function (card, player, target) {
                            return target != player && get.distance(player, target) <= 1;
                        })
                        .set('ai', (target) => {
                            return get.attitude(get.player(), target);
                        })
                        .forResult();
                    if (result.bool) {
                        const target = result.targets[0];
                        player.discard(player.getCards('h'));
                        target.skip('phaseUse');
                        target.skip('phaseDiscard');
                    }
                },
            },
            shdihuixin: {
                trigger: {
                    target: 'useCardToTargeted',
                },
                forced: true,
                filter(event, player) {
                    return _status.currentPhase != player && get.type2(event.card) == 'trick';
                },
                async content(event, trigger, player) {
                    player.draw();
                },
            },
            //SH060
            shdiansi: {
                enable: 'phaseUse',
                usable: 2,
                filterCard: true,
                filterTarget: true,
                async content(event, trigger, player) {
                    player.loseHp();
                    event.target.addToExpansion(event.cards, player, 'giveAuto').gaintag.add('shdiansi');
                },
                marktext: '死',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            if (
                                player.hp +
                                player.countCards('h', function (card) {
                                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 != 'unchanged') return mod2;
                                    var mod = game.checkMod(card, player, player, 'unchanged', 'cardSavable', player);
                                    if (mod != 'unchanged') return mod;
                                    var savable = get.info(card).savable;
                                    if (typeof savable == 'function') savable = savable(card, player, player);
                                    return savable;
                                }) <=
                                1
                            )
                                return 0;
                            return -1;
                        },
                    },
                },
            },
            shsuoming: {
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return event.source && event.source.isIn();
                },
                async content(event, trigger, player) {
                    trigger.source.addToExpansion(get.cards(), player, 'giveAuto').gaintag.add('shdiansi');
                },
                check(event, player) {
                    return get.attitude(player, event.source) <= 0;
                },
            },
            shdibao: {
                trigger: {
                    source: ['damageBegin1', 'damageSource'],
                },
                forced: true,
                logTarget: 'player',
                filter(event, player, name) {
                    return event.player.getExpansions('shdiansi').length;
                },
                async content(event, trigger, player) {
                    if (event.triggername == 'damageSource') trigger.player.loseToDiscardpile(trigger.player.getExpansions('shdiansi'));
                    else trigger.num += trigger.player.getExpansions('shdiansi').length;
                },
            },
            //SH061
            shchaowu: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    const result = await player
                        .chooseCardTarget({
                            filterCard: true,
                            filterTarget: true,
                            position: 'hes',
                            ai1(card) {
                                return 7 - get.value(card);
                            },
                            ai2(target) {
                                const player = get.player();
                                return get.damageEffect(target, player, player, 'fire');
                            },
                            prompt: get.prompt2(event.name),
                        })
                        .forResult();
                    if (result.bool) {
                        var target = result.targets[0];
                        player.discard(result.cards);
                        if (!player.storage.shpingmo) {
                            const result = await player
                                .judge(function (card) {
                                    return card.suit == 'heart' ? 2 : -1;
                                })
                                .set('judge2', (result) => result.bool)
                                .forResult();
                            if (!result.bool) return;
                        }
                        target.damage('fire');
                    }
                },
            },
            shmuai: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    const result = await player
                        .chooseCardTarget({
                            filterCard: true,
                            filterTarget: true,
                            position: 'hes',
                            ai1(card) {
                                return 7 - get.value(card);
                            },
                            ai2(target) {
                                const player = get.player();
                                return get.damageEffect(target, player, player, 'thunder');
                            },
                            prompt: get.prompt2(event.name),
                        })
                        .forResult();
                    if (result.bool) {
                        var target = result.targets[0];
                        player.discard(result.cards);
                        if (!player.storage.shpingmo) {
                            const result = await player
                                .judge(function (card) {
                                    return card.suit == 'spade' ? 2 : -1;
                                })
                                .set('judge2', (result) => result.bool)
                                .forResult();
                            if (!result.bool) return;
                        }
                        target.damage('thunder');
                    }
                },
            },
            shpingmo: {
                derivation: ['shchaowu_rewrite', 'shmuai_rewrite'],
                trigger: {
                    player: 'shdiranGuess',
                },
                juexingji: true,
                forced: true,
                filter(event, player) {
                    var history = player.getAllHistory('useSkill', (evt) => evt.skill == 'shdiran');
                    var num = 0;
                    for (var i = history.length - 1; i >= 0; i--) {
                        if (!history[i]._guess) break;
                        num++;
                    }
                    return num == 3;
                },
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    player.draw(2);
                    player.storage.shpingmo = true;
                },
            },
            shdiran: {
                trigger: {
                    global: 'judgeBegin',
                },
                async content(event, trigger, player) {
                    const { control } = await player
                        .chooseControl(lib.suit.slice(0).reverse())
                        .set('prompt', '请选择猜测一个花色')
                        .set('ai', function () {
                            return lib.suit.randomGet();
                        })
                        .forResult();
                    trigger.player
                        .when('judge')
                        .assign({
                            targetx: player,
                            suitx: control,
                        })
                        .then(() => {
                            var suit = get.info(event.name).suitx;
                            var target = get.info(event.name).targetx;
                            if (player.judging[0].suit != suit) {
                                event.finish();
                                return;
                            }
                            var history = target.getAllHistory('useSkill', (evt) => evt.skill == 'shdiran');
                            if (history) history[history.length - 1]._guess = true;
                            event.trigger('shdiranGuess');
                            target
                                .chooseButton(['地然', [lib.inpile, 'vcard'], [['♣️️', '♠️️', '♦️️', '♥️️'], 'tdnodes'], [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 'tdnodes']])
                                .set('filterButton', (button) => {
                                    var type = typeof button.link;
                                    if (!ui.selected.buttons.length) return type == 'object';
                                    else if (ui.selected.buttons.length == 1) return type == 'string';
                                    else return (type = 'number');
                                })
                                .set('selectButton', 3);
                        })
                        .then(() => {
                            if (!result.bool) return;
                            var name = result.links[0][2];
                            var map = {
                                '♠️️': 'spade',
                                '♥️️': 'heart',
                                '♣️️': 'club',
                                '♦️️': 'diamond',
                            };
                            var suit = map[result.links[1]];
                            var number = result.links[2];
                            game.log(player, '将判定结果改为了', '#y【' + get.translation(name) + get.translation(suit) + number + '】');
                            if (!trigger.fixedResult) trigger.fixedResult = {};
                            trigger.fixedResult.name = name;
                            trigger.fixedResult.suit = suit;
                            trigger.fixedResult.color = get.color({ suit: suit });
                            trigger.fixedResult.number = number;
                        });
                },
            },
            //SH062
            shmaosu: {
                trigger: {
                    player: 'phaseDrawBegin1',
                },
                filter(event, player) {
                    return !event.numFixed;
                },
                async content(event, trigger, player) {
                    await player.chooseUseTarget({ name: 'wugu' }, true);
                    const targets = game.filterPlayer((target) => {
                        return (
                            target != player &&
                            target.getHistory('gain', (evt) => {
                                const wugu = evt.parent;
                                const use = evt.getParent(2);
                                if (wugu && wugu.name == 'wugu' && use) return evt.cards;
                                return false;
                            }).length
                        );
                    });
                    while (targets.length) {
                        const target = targets.shift();
                        const list = [];
                        if (target.countCards('h')) list.push('选项一');
                        if (player.canUse({ name: 'sha' }, target)) list.push('选项二');
                        const { control } = await target
                            .chooseControl(list)
                            .set('choiceList', [`交给${get.translation(player)}一张手牌`, `视为${get.translation(player)}对你使用【杀】`])
                            .set('prompt', get.translation(event.name))
                            .set('ai', () => {
                                const player = get.player();
                                if (get.effect(player, { name: 'sha' }, event.parent.player, event.parent.player) <= 0) return '选项二';
                                if (player.countCards('h') < 2 && player.hp > 2) return '选项二';
                                return '选项一';
                            })
                            .forResult();
                        if (control == '选项一') {
                            const { bool, cards } = await target.chooseCard('h', true, `交给${get.translation(player)}一张手牌`).forResult();
                            if (bool) target.give(cards, player);
                        } else {
                            if (player.canUse({ name: 'sha' }, target)) player.useCard({ name: 'sha' }, target);
                        }
                    }
                    trigger.changeToZero();
                },
            },
            shdichang: {
                trigger: {
                    player: 'shaMiss',
                },
                forced: true,
                filter(event, player) {
                    return player.canUse({ name: 'juedou' }, event.target);
                },
                async content(event, trigger, player) {
                    const juedou = new lib.element.VCard({ name: 'juedou' });
                    player.chooseUseTarget(juedou, trigger.target);
                },
            },
            //SH063
            shzhuaya: {
                trigger: {
                    player: 'useCardToPlayered',
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                async content(event, trigger, player) {
                    const { bool, cards, targets } = await player
                        .chooseCardTarget({
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return target != player && target.inRange(trigger.target);
                            },
                            position: 'h',
                            ai1(card) {
                                return 7 - get.value(card);
                            },
                            ai2(target) {
                                var player = get.player();
                                return get.attitude(player, target) > 0;
                            },
                            prompt2: get.prompt2(event.name),
                        })
                        .forResult();
                    if (bool) {
                        await player.give(cards, targets[0]);
                        const { bool } = await targets[0]
                            .chooseToUse(
                                function (card, player, event) {
                                    if (card.name != 'sha') return false;
                                    return lib.filter.filterCard.apply(this, arguments);
                                },
                                '对' + get.translation(trigger.target) + '使用一张杀,否则你需交给' + get.translation(player) + '一张手牌'
                            )
                            .set('targetRequired', true)
                            .set('complexSelect', true)
                            .set('filterTarget', function (card, player, target) {
                                if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                return lib.filter.targetEnabled.apply(this, arguments);
                            })
                            .set('sourcex', trigger.target)
                            .set('addCount', false)
                            .forResult();
                        if (!bool && targets[0].countCards('h', (card) => !cards.includes(card))) {
                            const result = await targets[0]
                                .chooseCard('h', true, function (card) {
                                    return !cards.includes(card);
                                })
                                .set('prompt', `选择交给${get.translation(player)}一张手牌`)
                                .set('ai', (card) => {
                                    return 7 - get.value(card);
                                })
                                .forResult();
                            player.line(targets[0]);
                            targets[0].give(result.cards, player);
                        }
                    }
                },
            },
            shdikuang: {
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                filterTarget: lib.filter.notMe,
                async content(event, trigger, player) {
                    const list = [];
                    const target = event.target;
                    const { bool } = await target
                        .chooseToUse(
                            function (card, player, event) {
                                if (!['sha', 'juedou'].includes(card.name)) return false;
                                return lib.filter.filterCard.apply(this, arguments);
                            },
                            '对' + get.translation(player) + '使用一张杀或者决斗,否则你需弃置一张手牌'
                        )
                        .set('targetRequired', true)
                        .set('complexSelect', true)
                        .set('filterTarget', function (card, player, target) {
                            if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                            return lib.filter.targetEnabled.apply(this, arguments);
                        })
                        .set('sourcex', player)
                        .set('addCount', false)
                        .forResult();
                    if (!bool) {
                        if (
                            target.hasCard(function (card) {
                                return lib.filter.cardDiscardable(card, target, 'shdikuang');
                            }, 'h')
                        )
                            await target.chooseToDiscard('h', true);
                        player.draw(3);
                    } else {
                        if (player.hasHistory('damage', (evt) => evt.getParent('shdikuang', true) == _status.event)) return;
                        player.draw(3);
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        target: -1,
                    },
                },
            },
            //SH064
            shfeidao: {
                trigger: {
                    player: 'useCardToPlayered',
                },
                filter(event, player) {
                    if (!player.countMark('shfeidao')) return false;
                    return get.tag(event.card, 'damage') && typeof event.card.number == 'number' && player.countMark('shfeidao') >= event.card.number;
                },
                async content(event, trigger, player) {
                    const num = trigger.card.number;
                    if (num > 0) player.removeMark('shfeidao', num);
                    const { bool } = await trigger.target.chooseToRespond({ name: 'shan' }, '你需打出一张【闪】,否则你受到1点伤害').forResult();
                    if (!bool) trigger.target.damage();
                },
                check(event, player) {
                    return get.attitude(player, event.target) <= 0;
                },
                marktext: '刀',
                intro: {
                    name: '飞刀',
                    name2: '刀',
                    content: '当前有#个<飞刀>',
                },
                group: 'shfeidao_init',
                subSkill: {
                    init: {
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        async content(event, trigger, player) {
                            player.addMark('shfeidao', 24);
                        },
                    },
                },
            },
            shmanpai: {
                trigger: {
                    target: 'useCardToBefore',
                },
                forced: true,
                filter(event, player) {
                    return ['nanman', 'wanjian'].includes(event.card.name);
                },
                async content(event, trigger, player) {
                    trigger.cancel();
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (['nanman', 'wanjian'].includes(card.name)) return 'zerotarget';
                        },
                    },
                },
            },
            shdifei: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                async content(event, trigger, player) {
                    player.skip('phaseUse');
                    player.skip('phaseDiscard');
                    player.when('phaseUseEnd').then(() => {
                        var next = trigger.player.phaseUse();
                        event.next.remove(next);
                        trigger.getParent('phase').next.push(next);
                        var next = trigger.player.phaseUse();
                        event.next.remove(next);
                        trigger.getParent('phase').next.push(next);
                    });
                },
            },
            //SH065
            shbiaoqiang: {
                trigger: {
                    target: 'useCardToTargeted',
                },
                filter(event, player) {
                    if (!player.countMark('shbiaoqiang')) return false;
                    return get.tag(event.card, 'damage') && typeof event.card.number == 'number' && player.countMark('shbiaoqiang') >= event.card.number;
                },
                async content(event, trigger, player) {
                    const num = trigger.card.number;
                    if (num > 0) player.removeMark('shbiaoqiang', num);
                    const { bool } = await trigger.player.chooseToRespond({ name: 'shan' }, '你需打出一张【闪】,否则你受到1点伤害').forResult();
                    if (!bool) trigger.player.damage();
                },
                check(event, player) {
                    return get.attitude(player, event.player) <= 0;
                },
                marktext: '枪',
                intro: {
                    name: '标枪',
                    name2: '枪',
                    content: '当前有#个<标枪>',
                },
                group: 'shfeidao_init',
                subSkill: {
                    init: {
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        async content(event, trigger, player) {
                            player.addMark('shbiaoqiang', 24);
                        },
                    },
                },
            },
            shtuanpai: {
                mod: {
                    targetEnabled(card, player, target, now) {
                        if (get.distance(player, target) < 2) return;
                        if (['sha', 'juedou'].includes(card.name)) return false;
                    },
                },
            },
            shdizou: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                async content(event, trigger, player) {
                    player.skip('phaseUse');
                    player
                        .when('phaseDrawBegin2')
                        .filter((event, player) => {
                            return !event.numFixed;
                        })
                        .then(() => {
                            trigger.num += 2;
                            player.skip('phaseDiscard');
                        });
                },
            },
            //SH066
            shkezhang: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.getExpansions('shkezhang').length;
                },
                async content(event, trigger, player) {
                    const cards = player.getExpansions('shkezhang');
                    const next = player.chooseToMove('刻章');
                    next.set('list', [
                        ['刻章', cards],
                        ['手牌', player.getCards('h')],
                    ]);
                    next.set('filterMove', function (from, to) {
                        return typeof to != 'number';
                    });
                    next.set('processAI', function (list) {
                        var player = _status.event.player,
                            cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                return get.useful(a) - get.useful(b);
                            }),
                            cards2 = cards.splice(0, player.getExpansions('shkezhang').length);
                        return [cards2, cards];
                    });
                    const result = await next.forResult();
                    if (result.bool) {
                        var pushs = result.moved[0];
                        var gains = result.moved[1];
                        pushs.removeArray(player.getExpansions('shkezhang'));
                        gains.removeArray(player.getCards('h'));
                        if (!pushs.length || pushs.length != gains.length) return;
                        player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('shkezhang');
                        player.gain(gains, 'draw');
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                    },
                },
                marktext: '章',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                group: 'shkezhang_init',
                subSkill: {
                    init: {
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        async content(event, trigger, player) {
                            player.addToExpansion(get.cards(3), 'draw').gaintag.add('shkezhang');
                        },
                    },
                },
            },
            shtuoyin: {
                trigger: {
                    global: 'useCardEnd',
                },
                forced: true,
                filter(event, player) {
                    if (get.type(event.card) != 'trick') return false;
                    if (!player.hasUseTarget(event.card)) return false;
                    return player.getExpansions('shkezhang').some((card) => ['name', 'suit', 'number'].some((i) => get[i](card) == get[i](event.card)));
                },
                async content(event, trigger, player) {
                    const cards = player.getExpansions('shkezhang');
                    const cardsx = cards.map((card) => {
                        const cardx = ui.create.card();
                        cardx.init(get.cardInfo(card));
                        cardx._cardid = card.cardid;
                        return cardx;
                    });
                    player.directgains(cardsx, null, 'shkezhang');
                    player.addSkill('shtuoyin_in');
                    const vcard = { name: trigger.card.name, nature: trigger.card.nature, suit: trigger.card.suit, number: trigger.card.number };
                    game.broadcastAll(function (vcard) {
                        lib.skill.shtuoyin_backup.viewAs = vcard;
                        lib.skill.shtuoyin_backup.prompt = '选择' + get.translation(vcard.name) + '的目标';
                    }, vcard);
                    const next = player.chooseToUse();
                    next.set('openskilldialog', `###${get.prompt('shtuoyin')}###将一张<章>当做${get.translation(vcard)}使用`);
                    next.set('norestore', true);
                    next.set('_backupevent', 'shtuoyin_backup');
                    next.set('vcard', vcard);
                    next.set('custom', {
                        add: {},
                        replace: { window() { } },
                    });
                    next.backup('shtuoyin_backup');
                    await next;
                    player.removeSkill('shtuoyin_in');
                },
                subSkill: {
                    backup: {
                        filterCard(card, player, event) {
                            return get.itemtype(card) == 'card' && card.hasGaintag('shkezhang') && ['name', 'suit', 'number'].some((i) => get[i](card) == get[i](_status.event.vcard));
                        },
                        selectCard: 1,
                        ai1(card) {
                            const player = get.player();
                            let maxVal = 5.5;
                            if (card.name == 'ying' && player.hasSkill('jsrgchuaxin')) maxVal -= 3;
                            return maxVal - get.value(card);
                        },
                        precontent() {
                            var idList = player.getCards('s', (card) => card.hasGaintag('shkezhang')).map((i) => i._cardid);
                            var cards = player.getExpansions('shkezhang');
                            var cards2 = [];
                            for (var card of event.result.cards) {
                                var cardx = cards.find((cardx) => cardx.cardid == card._cardid);
                                if (cardx) cards2.push(cardx);
                            }
                            var cards3 = event.result.cards.slice();
                            event.result.cards = cards2;
                            event.result.card.cards = cards2;
                            if (player.isOnline2()) {
                                player.send(
                                    function (cards, player) {
                                        cards.forEach((i) => i.delete());
                                        if (player == game.me) ui.updatehl();
                                    },
                                    cards3,
                                    player
                                );
                            }
                            cards3.forEach((i) => i.delete());
                            if (player == game.me) ui.updatehl();
                        },
                    },
                    in: {
                        charlotte: true,
                        forced: true,
                        popup: false,
                        firstDo: true,
                        onremove(player) {
                            var cards2 = player.getCards('s', (card) => {
                                return card.hasGaintag('shkezhang');
                            });
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
                        group: ['shkezhang_use', 'shkezhang_lose'],
                    },
                    use: {
                        trigger: {
                            player: ['useCardBefore', 'respondBefore'],
                        },
                        charlotte: true,
                        forced: true,
                        popup: false,
                        firstDo: true,
                        filter(event, player) {
                            var cards = player.getCards('s', (card) => card.hasGaintag('shkezhang') && card._cardid);
                            return (
                                event.cards &&
                                event.cards.some((card) => {
                                    return cards.includes(card);
                                })
                            );
                        },
                        content() {
                            var idList = player.getCards('s', (card) => card.hasGaintag('shkezhang')).map((i) => i._cardid);
                            var cards = player.getExpansions('shkezhang');
                            var cards2 = [];
                            for (var card of trigger.cards) {
                                var cardx = cards.find((cardx) => cardx.cardid == card._cardid);
                                if (cardx) cards2.push(cardx);
                            }
                            var cards3 = trigger.cards.slice();
                            trigger.cards = cards2;
                            trigger.card.cards = cards2;
                            if (player.isOnline2()) {
                                player.send(
                                    function (cards, player) {
                                        cards.forEach((i) => i.delete());
                                        if (player == game.me) ui.updatehl();
                                    },
                                    cards3,
                                    player
                                );
                            }
                            cards3.forEach((i) => i.delete());
                            if (player == game.me) ui.updatehl();
                        },
                    },
                    lose: {
                        trigger: {
                            global: ['loseEnd', 'equipEnd', 'addJudgeEnd', 'gainEnd', 'loseAsyncEnd', 'addToExpansionEnd', 'cardsGotoOrderingBegin'],
                        },
                        charlotte: true,
                        forced: true,
                        popup: false,
                        firstDo: true,
                        filter(event, player) {
                            var idList = player.getCards('s', (card) => card.hasGaintag('shkezhang')).map((i) => i._cardid);
                            return (
                                event.cards &&
                                event.cards.some((card) => {
                                    return idList.includes(card.cardid);
                                })
                            );
                        },
                        content() {
                            var cards2 = player.getCards('s', (card) => {
                                return card.hasGaintag('shkezhang');
                            });
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
                    },
                },
            },
            shdiqiao: {
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('h') && !player.getExpansions('shkezhang').length;
                },
                limited: true,
                filterCard: true,
                selectCard: -1,
                discard: false,
                lose: false,
                delay: false,
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    player.addToExpansion(event.cards, player, 'giveAuto').gaintag.add('shkezhang');
                },
                ai: {
                    order: 1,
                    result: {
                        player(player) {
                            return player.hasSkill('shtuoyin');
                        },
                    },
                },
            },
            //SH067
            shxiangdi: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                async content(event, trigger, player) {
                    await player.loseHp();
                    const list = [];
                    list.push('选项一');
                    list.push('选项二');
                    const { control } = await player
                        .chooseControl(list)
                        .set('choiceList', [`令至多三名角色于其各自的下一个出牌阶段第一次造成的伤害+1`, `令至多两名角色于其各自的下一个结束阶段回复1点体力`])
                        .set('ai', () => {
                            const player = get.player();
                            if (get.damageEffect(player, player, player) <= 0) return '选项三';
                            if (list.includes('选项一')) return '选项一';
                            return '选项三';
                        })
                        .forResult();
                    const { bool, targets } = await player
                        .chooseTarget()
                        .set('ai', (target) => {
                            return get.attitude(get.player(), target);
                        })
                        .set('selectTarget', () => {
                            return [1, control == '选项一' ? 3 : 2];
                        })
                        .set('prompt', `令至多${get.cnNumber(control == '选项一' ? 3 : 2)}名角色于其各自的下一个${control == '选项一' ? `出牌阶段第一次造成的伤害+1` : `结束阶段回复1点体力`}`)
                        .forResult();
                    if (bool) {
                        player.line(targets);
                        targets.forEach((target) => target.addTempSkill(control == '选项一' ? 'shxiangdi_damage' : 'shxiangdi_recover', { player: control == '选项一' ? 'phaseUseEnd' : 'phaseJieshuEnd' }));
                    }
                },
                check(event, player) {
                    if (
                        player.hp +
                        player.countCards('h', function (card) {
                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            var mod = game.checkMod(card, player, player, 'unchanged', 'cardSavable', player);
                            if (mod != 'unchanged') return mod;
                            var savable = get.info(card).savable;
                            if (typeof savable == 'function') savable = savable(card, player, player);
                            return savable;
                        }) <=
                        1
                    )
                        return false;
                    return true;
                },
                subSkill: {
                    damage: {
                        trigger: {
                            source: 'damageBegin1',
                        },
                        silent: true,
                        charlotte: true,
                        filter(event, player) {
                            return player.isPhaseUsing() && !player.hasHistory('sourceDamage');
                        },
                        async content(event, trigger, player) {
                            trigger.num++;
                            player.removeSkill(event.name);
                        },
                    },
                    recover: {
                        trigger: {
                            player: 'phaseJieshuBegin',
                        },
                        silent: true,
                        charlotte: true,
                        async content(event, trigger, player) {
                            player.recover();
                            player.removeSkill(event.name);
                        },
                    },
                },
            },
            shdiming: {
                trigger: {
                    player: 'loseHpBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    let num = trigger.num;
                    while (num > 0) {
                        num--;
                        const cards = get.cards(3);
                        game.cardsGotoOrdering(cards);
                        game.log(player, '观看了牌堆顶的' + get.cnNumber(cards.length) + '张牌');
                        const { links } = await player
                            .chooseButton(['地明', cards, '获得其中的一张牌'], true)
                            .set('ai', (button) => {
                                return get.player().getUseValue(button.link);
                            })
                            .forResult();
                        await player.gain(links, 'gain2');
                    }
                },
            },
            //SH068
            shjiaoku: {
                trigger: {
                    global: ['phaseDrawSkipped', 'phaseDrawCancelled', 'phaseUseSkipped', 'phaseUseCancelled'],
                },
                forced: true,
                filter(event, player) {
                    return event.player.isIn();
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseCardTarget({
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return trigger.player == target;
                            },
                            selectCard: 2,
                            position: 'hes',
                            ai1(card) {
                                return 7 - get.value(card);
                            },
                            ai2(target) {
                                var player = get.player();
                                return get.attitude(player, target) <= 0;
                            },
                            prompt: get.prompt2(event.name),
                        })
                        .forResult();
                    if (result.bool) {
                        const target = result.targets[0];
                        await player.discard(result.cards);
                        const list = [];
                        if (target.countCards('hes', { type: 'equip' })) list.push('选项一');
                        list.push('选项二');
                        list.push('背水!');
                        const { control } = await target
                            .chooseControl(list)
                            .set('choiceList', [`弃置一张装备牌`, `受到1点伤害`, `背水!对${get.translation(player)}造成1点伤害并依次执行以上两项`])
                            .set('prompt', get.translation(event.name))
                            .set('ai', () => {
                                const player = get.player();
                                const bool1 = player.countCards('h');
                                const bool2 = player.hp > 2 || get.damageEffect(player, player, player) > 0;
                                if (bool2) return '背水!';
                                if (bool1) return '选项一';
                                if (bool2) return '背水!';
                            })
                            .forResult();
                        if (control == '背水!') {
                            await player.damage();
                        }
                        if ((control == '选项一' || control == '背水!') && target.countCards('hes', { type: 'equip' })) {
                            await target.chooseToDiscard('hes', (card) => get.type(card) == 'equip', true);
                        }
                        if (control == '选项二' || control == '背水!') {
                            target.damage();
                        }
                    }
                },
            },
            shqianyuan: {
                trigger: {
                    player: 'phaseDrawBegin2',
                },
                filter(event, player) {
                    return !event.numFixed;
                },
                async content(event, trigger, player) {
                    trigger.num += 2;
                    player.skip('phaseUse');
                    player.skip('phaseDiscard');
                },
            },
            shdijin: {
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    if (player.hasSkill('shdijin_round')) return false;
                    return _status.currentPhase != player;
                },
                async content(event, trigger, player) {
                    player.draw();
                    player.addTempSkill('shdijin_round', 'roundStart');
                    const next = player.phaseUse();
                    event.next.remove(next);
                    trigger.next.push(next);
                },
                subSkill: {
                    round: { charlotte: true },
                },
            },
            //SH069
            shshenlou: {
                trigger: {
                    global: 'useCard',
                },
                usable: 1,
                forced: true,
                filter(event, player) {
                    return event.player.isPhaseUsing();
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseCard('hes', function (card) {
                            var player = get.player();
                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                            if (mod != 'unchanged') return mod;
                            return true;
                        })
                        .set('ai', function (card) {
                            var player = get.player();
                            return 5 - get.value(card);
                        })
                        .set('prompt', `你可以打出一张牌代替${get.translation(trigger.cards)}`)
                        .forResult();
                    if (result.bool) {
                        await player.respond(result.cards);
                        const cards = trigger.cards.filterInD();
                        player.$gain2(trigger.cards.filterInD());
                        if (cards.length) player.gain(cards, 'gain2');
                        trigger.cards = [];
                        trigger.cards = result.cards;
                    } else player.getStat('triggerSkill').shshenlou--;
                },
            },
            shfuhai: {
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return target.countCards('e');
                },
                selectTarget: -1,
                limited: true,
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    const targets = event.targets;
                    while (targets.length) {
                        const target = targets.shift();
                        await target.discard(target.getCards('e')).set('discarder', player);
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            return -target.countCards('e');
                        },
                    },
                },
            },
            shditui: {
                trigger: {
                    player: 'damageBegin4',
                },
                forced: true,
                async content(event, trigger, player) {
                    trigger.cancel();
                    player.draw();
                },
            },
            //SH070
            shyangfan: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                async content(event, trigger, player) {
                    game.asyncDraw(game.players);
                },
            },
            shlinghang: {
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                filterTarget: lib.filter.notMe,
                position: 'hes',
                async content(event, trigger, player) {
                    const target = event.target;
                    const targets = game.filterPlayer((p) => p != player && p != target);
                    while (targets.length) {
                        const other = targets.shift();
                        const list = [];
                        if (other.hasSha()) list.push('选项一');
                        if (other.countCards('h')) list.push('选项二');
                        list.push('背水!');
                        const { control } = await other
                            .chooseControl(list)
                            .set('choiceList', [`对${get.translation(target)}使用一张【杀】`, `交给${get.translation(player)}一张手牌,视为对${get.translation(target)}使用一张【杀】`, `背水!对${get.translation(player)}造成1点伤害并依次执行以上两项`])
                            .set('prompt', get.translation(event.name))
                            .set('ai', () => {
                                const player = get.player();
                                const bool1 = player.countCards('h');
                                const bool2 = player.hp > 2 || get.damageEffect(player, player, player) > 0;
                                if (bool2) return '背水!';
                                if (bool1) return '选项一';
                                if (bool2) return '背水!';
                            })
                            .forResult();
                        if (control == '背水!') {
                            await player.damage();
                        }
                        if ((control == '选项一' || control == '背水!') && other.countCards('h')) {
                            if (other.hasSha()) {
                                const { bool } = await other
                                    .chooseToUse(
                                        function (card, player, event) {
                                            if (card.name != 'sha') return false;
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        '对' + get.translation(target) + '使用一张杀,否则你需交给' + get.translation(player) + '一张手牌'
                                    )
                                    .set('targetRequired', true)
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.targetEnabled.apply(this, arguments);
                                    })
                                    .set('sourcex', target)
                                    .set('addCount', false)
                                    .set('forced', true)
                                    .forResult();
                            }
                        }
                        if (control == '选项二' || control == '背水!') {
                            if (other.countCards('h')) {
                                await other.chooseCard('h', true, `交给${get.translation(player)}一张手牌`);
                            }
                            const sha = new lib.element.VCard({ name: 'sha' });
                            if (other.canUse(sha, target)) other.useCard(sha, target, false);
                        }
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        target: -1,
                    },
                },
            },
            shdiman: {
                mod: {
                    maxHandcard(player, num) {
                        return (num += game.countPlayer((current) => current.countMark('h') >= current.hp));
                    },
                },
            },
            //SH071
            shzhijin: {
                enable: 'phaseUse',
                filter(event, player) {
                    var he = player.getCards('he');
                    for (var i = 0; i < he.length; i++) {
                        if (['bagua', 'baiyin', 'renwang', 'tengjia'].includes(he[i].name)) return true;
                    }
                    return false;
                },
                filterCard(card) {
                    return ['bagua', 'baiyin', 'renwang', 'tengjia'].includes(card.name);
                },
                position: 'hes',
                discard: false,
                lose: false,
                delay: false,
                check() {
                    return 1;
                },
                async content(event, trigger, player) {
                    await player.showCards(event.cards);
                    var card = event.cards[0];
                    var bool = get.position(card) == 'e';
                    if (bool) player.removeEquipTrigger(card);
                    game.addVideo('skill', player, ['xinfu_jingxie', [bool, get.cardInfo(card)]]);
                    game.broadcastAll(function (card) {
                        card.init([card.suit, card.number, 'rewrite_' + card.name]);
                    }, card);
                    if (bool) {
                        var info = get.info(card);
                        if (info.skills) {
                            for (var i = 0; i < info.skills.length; i++) {
                                player.addSkillTrigger(info.skills[i]);
                            }
                        }
                    }
                    const result = await player
                        .chooseTarget(`你可以将${get.translation(card)}交给一名其他角色`, function (card, player, target) {
                            return target != player;
                        })
                        .set('ai', (target) => {
                            if (target.getEquips(2).length) return 0;
                            return get.attitude(get.player(), target) >= 0;
                        })
                        .forResult();
                    if (result.bool) {
                        player.give(card, result.targets[0]);
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player: 1,
                    },
                },
                group: 'shzhijin_damage',
                subSkill: {
                    damage: {
                        trigger: {
                            player: 'damageEnd',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.hasNature();
                        },
                        async content(event, trigger, player) {
                            player.loseHp();
                        },
                    },
                },
            },
            shzhikai: {
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                filter(event, player) {
                    return !player.getEquips(2).length;
                },
                check(card) {
                    var player = _status.event.player;
                    return 7 - get.value(card);
                },
                async content(event, trigger, player) {
                    const map = {
                        heart: 'bagua',
                        diamond: 'baiyin',
                        club: 'renwang',
                        spade: 'tengjia',
                    };
                    const suit = event.cards[0].suit;
                    const name = map[suit];
                    if (!lib.card[name]) return;
                    var card = game.createCard(name, suit, event.cards[0].number);
                    card.destroyed = 'discardPile';
                    player.gain(card, 'gain2');
                },
                ai: {
                    order: 10,
                    result: {
                        player: 1,
                    },
                },
            },
            shmingzhe: {
                trigger: {
                    player: 'phaseDrawBegin2',
                },
                forced: true,
                filter(event, player) {
                    return !player.getEquips(2).length && !event.numFixed;
                },
                async content(event, trigger, player) {
                    trigger.num++;
                },
                mod: {
                    maxHandcard(player, num) {
                        if (!player.getEquips(2).length) return num - 2;
                    },
                },
            },
            shdisui: {
                enable: 'chooseToUse',
                filterCard: (card, player) => get.subtype(card) == 'equip2',
                filter(event, player) {
                    if (event.type != 'dying') return false;
                    if (player != event.dying) return false;
                    return player.hasCard((card) => lib.skill.shdisui.filterCard(card, player), 'he');
                },
                position: 'he',
                async content(event, trigger, player) {
                    var num = 1 - player.hp;
                    if (num > 0) player.recover(num);
                    player.draw(2);
                },
                ai: {
                    order: 0.5,
                    skillTagFilter(player, arg, target) {
                        if (player != target) return false;
                        return player.hasCard((card) => (_status.connectMode && get.position(card) == 'h') || (get.subtype(card) == 'equip2' && player.canRecast(card)), 'he');
                    },
                    save: true,
                    result: {
                        player(player) {
                            return 10;
                        },
                    },
                },
            },
            //SH072
            shliqiang: {
                enable: 'phaseUse',
                usable: 1,
                filterCard(card, player) {
                    return ['sha', 'shan'].includes(card.name);
                },
                filterTarget: true,
                lose: false,
                discard: false,
                delay: false,
                async content(event, trigger, player) {
                    const target = event.target;
                    const list = ['sha', 'shan'];
                    const names = list.map((i) => '【' + get.translation(i) + '】').join('或');
                    const next = target.chooseToRespond('是否打出一张' + names + '？', { name: list });
                    next.set('ai', function () {
                        if (get.damageEffect(target, player, player) >= 0) return 0;
                        return 1;
                    });
                    next.set('skillwarn', '打出一张' + names);
                    next.autochoose = function () {
                        if (!lib.filter.autoRespondSha.apply(this, arguments)) return false;
                        return lib.filter.autoRespondShan.apply(this, arguments);
                    };
                    const result = await next.forResult();
                    if (result.bool) {
                        if (event.cards[0].name == result.card.name) game.asyncDraw([player, target]);
                        else player.draw();
                    } else target.damage();
                    player.discard(event.cards);
                },
                ai: {
                    order: 1,
                    result: {
                        target: -1,
                    },
                },
            },
            shdizhouxin: {
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                filterTarget(card, player, target) {
                    return player != target;
                },
                position: 'hes',
                async content(event, trigger, player) {
                    const target = event.target;
                    const targets = game.filterPlayer((p) => p != player && p != target);
                    while (targets.length) {
                        const other = targets.shift();
                        const list = [];
                        if (other.hasSha()) list.push('选项一');
                        if (other.countCards('h')) list.push('选项二');
                        list.push('背水!');
                        const { control } = await other
                            .chooseControl(list)
                            .set('choiceList', [`对${get.translation(target)}使用一张【杀】`, `交给${get.translation(player)}一张手牌,视为对${get.translation(target)}使用一张【杀】`, `背水!对${get.translation(player)}造成1点伤害并依次执行以上两项`])
                            .set('prompt', get.translation(event.name))
                            .set('ai', () => {
                                const player = get.player();
                                const bool1 = player.countCards('h');
                                const bool2 = player.hp > 2 || get.damageEffect(player, player, player) > 0;
                                if (bool2) return '背水!';
                                if (bool1) return '选项一';
                                if (bool2) return '背水!';
                            })
                            .forResult();
                        if (control == '背水!') {
                            await player.damage();
                        }
                        if ((control == '选项一' || control == '背水!') && other.countCards('h')) {
                            if (other.hasSha()) {
                                const { bool } = await other
                                    .chooseToUse(
                                        function (card, player, event) {
                                            if (card.name != 'sha') return false;
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        '对' + get.translation(target) + '使用一张杀,否则你需交给' + get.translation(player) + '一张手牌'
                                    )
                                    .set('targetRequired', true)
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.targetEnabled.apply(this, arguments);
                                    })
                                    .set('sourcex', target)
                                    .set('addCount', false)
                                    .set('forced', true)
                                    .forResult();
                            }
                        }
                        if (control == '选项二' || control == '背水!') {
                            if (other.countCards('h')) {
                                await other.chooseCard('h', true, `交给${get.translation(player)}一张手牌`);
                            }
                            const sha = new lib.element.VCard({ name: 'sha' });
                            if (other.canUse(sha, target)) other.useCard(sha, target, false);
                        }
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        target: -1,
                    },
                },
            },
            //SH073
            shhengdao: {
                enable: 'phaseUse',
                usable: 1,
                filterCard(card, player) {
                    return ['sha', 'shan'].includes(card.name);
                },
                filterTarget: true,
                lose: false,
                discard: false,
                delay: false,
                async content(event, trigger, player) {
                    const target = event.target;
                    const list = ['sha', 'shan'];
                    const names = list.map((i) => '【' + get.translation(i) + '】').join('或');
                    const next = target.chooseToRespond('是否打出一张' + names + '？', { name: list });
                    next.set('ai', function () {
                        return 1;
                    });
                    next.set('skillwarn', '打出一张' + names);
                    next.autochoose = function () {
                        if (!lib.filter.autoRespondSha.apply(this, arguments)) return false;
                        return lib.filter.autoRespondShan.apply(this, arguments);
                    };
                    const result = await next.forResult();
                    if (result.bool) {
                        if (event.cards[0].name == result.card.name) target.addTempSkill('shhengdao_true', { player: 'phaseJieshuBegin' });
                        else target.addTempSkill('shhengdao_false', { player: 'phaseJieshuBegin' });
                    } else if (
                        target.hasCard(function (card) {
                            return lib.filter.cardDiscardable(card, target, 'shhengdao');
                        }, 'hes')
                    )
                        target.chooseToDiscard('hes', true);
                },
                ai: {
                    order: 1,
                    result: {
                        target: -1,
                    },
                },
                subSkill: {
                    true: {
                        globalFrom(from, to, distance) {
                            return distance - 1;
                        },
                    },
                    false: {
                        globalFrom(from, to, distance) {
                            return distance + 1;
                        },
                    },
                },
            },
            shfuji: {
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                filter(event, player) {
                    if (!player.isPhaseUsing()) return false;
                    return !event.player.inRange(player) && !player.hasHistory('sourceDamage', (evt) => evt.player == event.player);
                },
                async content(event, trigger, player) {
                    trigger.num++;
                },
            },
            shdiyin: {
                trigger: {
                    target: 'useCardToTargeted',
                },
                forced: true,
                filter(event, player) {
                    return event.player != player && target.inRange(player);
                },
                async content(event, trigger, player) {
                    trigger.excluded.add(player);
                    game.log(trigger.card, '对', player, '无效');
                },
                mod: {
                    globalTo(from, to, distance) {
                        return distance + 1;
                    },
                },
            },
            //SH074
            shpouxin: {
                trigger: {
                    player: 'useCardToPlayered',
                },
                logTarget: 'target',
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                async content(event, trigger, player) {
                    const result = await player
                        .judge(function (card) {
                            return get.color(card) == 'red' ? 2 : -2;
                        })
                        .set('judge2', (result) => result.bool)
                        .forResult();
                    if (result.suit == 'heart') {
                        var id = trigger.target.playerid;
                        var map = trigger.parent.customArgs;
                        if (!map[id]) map[id] = {};
                        if (typeof map[id].extraDamage != 'number') {
                            map[id].extraDamage = 0;
                        }
                        map[id].extraDamage++;
                    } else if (result.suit == 'diamond') trigger.parent.directHit.push(trigger.target);
                },
                check(event, player) {
                    return get.attitude(player, event.target) <= 0;
                },
            },
            shxuexian: {
                trigger: {
                    global: 'judge',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('hes', (card) => get.type(card) == 'basic' && card.suit == 'heart');
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('shxuexian'), 'hes', function (card) {
                            if (get.type(card) != 'basic' || card.suit != 'heart') return false;
                            const player = get.player();
                            const mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            const mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                            if (mod != 'unchanged') return mod;
                            return true;
                        })
                        .set('ai', function (card) {
                            const trigger = _status.event.getTrigger();
                            const player = get.player();
                            const judging = _status.event.judging;
                            const result = trigger.judge(card) - trigger.judge(judging);
                            let attitude = get.attitude(player, trigger.player);
                            if (attitude == 0 || result == 0) return 0;
                            if (attitude > 0) {
                                return result;
                            } else {
                                return -result;
                            }
                        })
                        .set('judging', trigger.player.judging[0])
                        .forResult();
                    if (result.bool) {
                        await player.respond(result.cards, 'highlight', 'shxuexian', 'noOrdering');
                        player.$gain2(trigger.player.judging[0]);
                        await player.gain(trigger.player.judging[0]);
                        trigger.player.judging[0] = result.cards[0];
                        trigger.orderingCards.addArray(result.cards);
                        game.log(trigger.player, '的判定牌改为', result.cards[0]);
                        player.draw();
                    }
                },
                ai: {
                    rejudge: true,
                    skillTagFilter(player, tag, arg) {
                        if (!player.countCards('hes', (card) => get.type(card) == 'basic' && card.suit == 'heart')) return false;
                    },
                    tag: {
                        rejudge: 1,
                    },
                },
            },
            shdiyi: {
                trigger: {
                    player: 'damageEnd',
                },
                usable: 1,
                async content(event, trigger, player) {
                    const result = await player
                        .judge(function (card) {
                            return get.color(card) == 'red' ? 2 : -2;
                        })
                        .set('judge2', (result) => result.bool)
                        .forResult();
                    if (result.bool) player.recover();
                },
                check(event, player) {
                    return player.isDamaged();
                },
            },
            //SH075
            shyinglei: {
                trigger: {
                    player: ['phaseDrawBegin2', 'phaseDiscardBefore', 'phaseJieshuBegin'],
                },
                forced: true,
                filter(event, player, name) {
                    if (!player.getExpansions('shyinglei').length) return false;
                    if (name == 'phaseDrawBegin2') return !event.numFixed;
                    if (name == 'phaseDiscardBefore') return player.countCards('h') > player.getExpansions('shyinglei').length;
                    return true;
                },
                async content(event, trigger, player) {
                    const lei = player.getExpansions('shyinglei').length;
                    if (event.triggername == 'phaseDrawBegin2') trigger.num = lei;
                    else if (event.triggername == 'phaseDiscardBefore') trigger.cancel();
                    else player.chooseToDiscard('h', player.countCards('h') - lei, true);
                },
                mod: {
                    globalTo(from, to, distance) {
                        if (to.getExpansions('shyinglei').length) return distance + 1;
                    },
                },
                marktext: '垒',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
            },
            shjianbi: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    const result = await player
                        .chooseCard('h', [1, 2], get.prompt2(event.name))
                        .set('ai', (card) => {
                            return 7 - get.value(card);
                        })
                        .forResult();
                    if (result.bool) {
                        player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('shyinglei');
                    }
                },
            },
            shqingye: {
                enable: 'chooseToUse',
                filterCard: () => false,
                selectCard: -1,
                viewAs: {
                    name: 'sha',
                },
                viewAsFilter(player) {
                    if (!player.getExpansions('shyinglei').length) return false;
                },
                prompt: '弃置一张<垒>并视为使用一张【杀】',
                async precontent(event, trigger, player) {
                    const result = await player.chooseCardButton('清野', player.getExpansions('shyinglei'), true).forResult();
                    player.loseToDiscardpile(result.links);
                },
            },
            shdili: {
                trigger: {
                    player: 'damageBegin3',
                },
                forced: true,
                filter(event, player) {
                    return player.getExpansions('shyinglei').length;
                },
                async content(event, trigger, player) {
                    const result = await player.chooseCardButton(get.translation(event.name), player.getExpansions('shyinglei', true)).forResult();
                    if (result.bool) {
                        player.loseToDiscardpile(result.links);
                        trigger.num -= 2;
                    }
                },
                group: 'shdili_lose',
                subSkill: {
                    lose: {
                        trigger: {
                            player: 'loseAfter',
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                        },
                        forced: true,
                        filter(event, player) {
                            if (player.getExpansions('shyinglei').length) return false;
                            if (event.name == 'lose' && event.getlx !== false) {
                                for (var i in event.gaintag_map) {
                                    if (event.gaintag_map[i].includes('shyinglei')) return true;
                                }
                                return false;
                            }
                            return game.getGlobalHistory('cardMove', function (evt) {
                                if (evt.name != 'lose' || event != evt.parent) return false;
                                for (var i in evt.gaintag_map) {
                                    if (evt.gaintag_map[i].includes('shyinglei')) return evt.player == player;
                                }
                                return false;
                            }).length;
                        },
                        async content(event, trigger, player) {
                            player.loseHp();
                        },
                    },
                },
            },
            //SH076
            shbeixi: {
                enable: 'phaseUse',
                filterCard: true,
                filterTarget: true,
                selectTarget() {
                    const player = get.player();
                    const num = Math.min(5, player.maxHp);
                    return [1, num];
                },
                complexTarget: true,
                multitarget: true,
                async content(event, trigger, player) {
                    const targets = event.targets;
                    if (targets.length == 1) targets[0].draw(Math.min(player.maxHp, 5));
                    else game.asyncDraw(targets);
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            if (ui.selected.targets.length == 0) return 5;
                            return 1;
                        },
                    },
                },
            },
            shkaiyan: {
                enable: 'phaseUse',
                limited: true,
                filterTarget(card, player, target) {
                    return target.countCards('h');
                },
                selectTarget: -1,
                multitarget: true,
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    const lose_list = [];
                    const cards = [];
                    for (var i = 0; i < event.targets.length; i++) {
                        lose_list.push([event.targets[i], event.targets[i].getCards('h')]);
                        cards.addArray(event.targets[i].getCards('h'));
                    }
                    game.loseAsync({
                        lose_list: lose_list,
                    }).setContent('chooseToCompareLose');
                    const lose_map = {};
                    game.countPlayer((current) => (lose_map[current.playerid] = []));
                    const randomCards = lose_list.map((i) => i[1]).randomSort();
                    if (Array.isArray(cards))
                        for (var i of cards) {
                            lose_map[game.players[i % game.countPlayer()].playerid].push(i);
                        }
                    const list = [];
                    for (var i in lose_map) {
                        const source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                        list.push([source, lose_map[i]]);
                    }
                    game.loseAsync({
                        gain_list: list,
                        giver: player,
                        animate: 'draw',
                    }).setContent('gaincardMultiple');
                },
                ai: {
                    order: 1,
                    result: {
                        target: -1,
                    },
                },
            },
            shdijun: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                filter(event, player) {
                    if (game.roundNumber <= 1) return false;
                    const history = player.actionHistory;
                    for (var i = history.length - 2; i >= 0; i--) {
                        const evt = history[i].damage;
                        for (let j = 0; j < evt.length; j++) {
                            if (evt[j]) return false;
                        }
                        if (history[i].isRound) break;
                    }
                    return true;
                },
                async content(event, trigger, player) {
                    const list = [];
                    if (player.isDamaged()) list.push('选项一');
                    list.push('选项二');
                    const { control } = await player
                        .chooseControl(list)
                        .set('choiceList', [`回复1点体力`, `增加1点体力上限`])
                        .set('prompt', get.translation(event.name))
                        .set('ai', () => {
                            const player = get.player();
                            if (get.recoverEffect(player, player, player)) return '选项一';
                            return '选项二';
                        })
                        .forResult();
                    player[control == '选项一' ? 'recover' : 'gainMaxHp']();
                },
            },
            //SH077
            shchenqing: {
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('h') > 0 && game.hasPlayer((current) => lib.skill.shchenqing.filterTarget(null, player, current));
                },
                filterTarget(card, player, target) {
                    if (target == player) return false;
                    var stat = player.getStat('skill').shchenqing_targets;
                    return !stat || !stat.includes(target);
                },
                async content(event, trigger, player) {
                    const target = event.target;
                    var stat = player.getStat('skill');
                    if (!stat.shchenqing_targets) stat.shchenqing_targets = [];
                    stat.shchenqing_targets.push(target);
                    const list = [];
                    list.push('选项一');
                    list.push('选项二');
                    const { control } = await target
                        .chooseControl(list)
                        .set('choiceList', [`令${get.translation(player)}摸一张牌`, `摸一张牌并交给${get.translation(player)}一张手牌`])
                        .set('prompt', get.translation(event.name))
                        .set('ai', () => {
                            const player = get.player();
                            return '选项二';
                            return '选项一';
                        })
                        .forResult();
                    if (control == '选项一') {
                        player.draw();
                    } else {
                        await target.draw();
                        if (target.countCards('h')) {
                            const { cards } = await target
                                .chooseCard(`交给${get.translation(player)}一张手牌`, 'h', true)
                                .set('ai', (card) => {
                                    return -get.value(card);
                                })
                                .forResult();
                            target.give(cards, player);
                        }
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            if (get.attitude(player, target) > 0) return 1;
                            return 0.5;
                        },
                    },
                },
            },
            shqiaoshuo: {
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('h') > 0 && game.hasPlayer((current) => lib.skill.shqiaoshuo.filterTarget(null, player, current));
                },
                filterTarget(card, player, target) {
                    if (target == player) return false;
                    var stat = player.getStat('skill').shqiaoshuo_targets;
                    return !stat || !stat.includes(target);
                },
                filterCard: true,
                discard: false,
                lose: false,
                delay: false,
                async content(event, trigger, player) {
                    const target = event.target;
                    const card = event.cards[0];
                    var stat = player.getStat('skill');
                    if (!stat.shqiaoshuo_targets) stat.shqiaoshuo_targets = [];
                    stat.shqiaoshuo_targets.push(target);
                    await player.give(event.cards, target);
                    if (!target.getCards('h').includes(card)) return;
                    if (!target.hasUseTarget(card)) return;
                    target.chooseUseTarget(card, true, false);
                },
                check(card) {
                    return 6 - get.value(card);
                },
                ai: {
                    order: 2,
                    result: {
                        target(player, target) {
                            if (!target.hasSha()) return 1.2;
                            return 1;
                        },
                    },
                },
            },
            shdiyue: {
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    return event.source && event.source != player && event.source.isIn();
                },
                async content(event, trigger, player) {
                    const { bool } = await trigger.source
                        .chooseToDiscard('hes', function (card) {
                            return true;
                        })
                        .set('ai', function (card) {
                            if (get.recoverEffect(_status.event.parent.player, _status.event.player, _status.event.player) < 0) {
                                return 7 - get.value(card);
                            }
                            return 0;
                        })
                        .set('prompt', `弃置一张牌或令${get.translation(player)}回复1点体力`)
                        .forResult();
                    if (!bool) player.recover();
                },
            },
            //SH078
            shfeiqiang: {
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (player.countCards('h', { name: 'sha' })) return false;
                    return player.getExpansions('shfeiqiang').length && event.filterCard && event.filterCard({ name: 'sha' }, player, event);
                },
                chooseButton: {
                    dialog(event, player) {
                        var dialog = ui.create.dialog('飞枪', 'hidden');
                        dialog.add(player.getExpansions('shfeiqiang'));
                        return dialog;
                    },
                    filter(button) {
                        var evt = _status.event,
                            player = _status.event.player;
                        return true;
                    },
                    backup(links, player) {
                        return {
                            filterCard(card) {
                                return card == links[0];
                            },
                            selectCard: -1,
                            position: 'x',
                            viewAs: { name: 'sha' },
                        };
                    },
                    prompt(links, player) {
                        return '请选择【杀】的目标';
                    },
                },
                hiddenCard(player, name) {
                    return name == 'sha' && player.getExpansions('shfeiqiang').length && !player.countCards('h', { name: 'sha' });
                },
                ai: {
                    respondSha: true,
                    skillTagFilter(player, tag, arg) {
                        if (player.countCards('h', { name: 'sha' })) return false;
                        return player.getExpansions('shfeiqiang').length;
                    },
                    order(item, player) {
                        return 1;
                    },
                    result: {
                        player: 1,
                    },
                },
                marktext: '枪',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                group: 'shfeiqiang_draw',
                subSkill: {
                    draw: {
                        trigger: {
                            player: 'phaseDrawBegin2',
                        },
                        filter(event, player) {
                            return !event.numFixed;
                        },
                        prompt2: '你可以少摸一张牌,将牌堆顶两张牌置于武将牌上,称为<枪>',
                        async content(event, trigger, player) {
                            trigger.num--;
                            player.addToExpansion(get.cards(2), 'draw').gaintag.add('shfeiqiang');
                        },
                        check(event, player) {
                            if (player.getExpansions('shfeiqiang').length > 2 && player.countCards('h') < 3) return false;
                            return true;
                        },
                    },
                },
            },
            shdijiexin: {
                trigger: {
                    player: 'shaMiss',
                },
                forced: true,
                logTarget: 'target',
                async content(event, trigger, player) {
                    const target = trigger.target;
                    const list = [];
                    list.push('选项一');
                    list.push('选项二');
                    const { control } = await target
                        .chooseControl(list)
                        .set('choiceList', [`受到1点伤害`, `本回合不能再响应${get.translation(player)}使用的牌`])
                        .set('prompt', get.translation(event.name))
                        .set('ai', () => {
                            const player = get.player();
                            if (get.damageEffect(player, player, player) <= 0) return '选项一';
                            return '选项二';
                            return '选项一';
                        })
                        .forResult();
                    if (control == '选项一') {
                        target.damage();
                    } else {
                        target.addTempSkill('shdijiexin_disable');
                        target.markAuto('shdijiexin_disable', [player]);
                    }
                },
                subSkill: {
                    disable: {
                        trigger: {
                            global: 'useCard',
                        },
                        silent: true,
                        charlotte: true,
                        filter(event, player) {
                            return player.getStorage('shdijiexin_disable').includes(event.player);
                        },
                        async content(event, trigger, player) {
                            trigger.directHit.add(player);
                        },
                        mark: true,
                        intro: {
                            content: '本回合不能响应$使用的牌',
                        },
                    },
                },
            },
            //SH079
            shfeicha: {
                enable: 'chooseToUse',
                filter(event, player) {
                    return player.getExpansions('shfeicha').length && event.filterCard && event.filterCard({ name: 'sha' }, player, event);
                },
                chooseButton: {
                    dialog(event, player) {
                        var dialog = ui.create.dialog('飞叉', 'hidden');
                        dialog.add(player.getExpansions('shfeicha'));
                        return dialog;
                    },
                    filter(button) {
                        var evt = _status.event,
                            player = _status.event.player;
                        return true;
                    },
                    backup(links, player) {
                        return {
                            filterCard(card) {
                                return card == links[0];
                            },
                            selectCard: -1,
                            position: 'x',
                            viewAs: { name: 'sha' },
                            precontent() {
                                _status.event.parent.addCount = false;
                            },
                        };
                    },
                    prompt(links, player) {
                        return '请选择【杀】的目标';
                    },
                },
                hiddenCard(player, name) {
                    return name == 'sha' && player.getExpansions('shfeicha').length;
                },
                ai: {
                    respondSha: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg != 'use') return false;
                        return player.getExpansions('shfeicha').length;
                    },
                    order(item, player) {
                        return 1;
                    },
                    result: {
                        player: 1,
                    },
                },
                marktext: '叉',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                group: 'shfeicha_draw',
                subSkill: {
                    draw: {
                        trigger: {
                            player: 'phaseZhunbeiBegin',
                        },
                        filter(event, player) {
                            return !event.numFixed;
                        },
                        prompt2: '你可以跳过摸牌阶段,将牌堆顶两张牌置于武将牌上,称为<叉>',
                        async content(event, trigger, player) {
                            player.skip('phaseDraw');
                            player.addToExpansion(get.cards(2), 'draw').gaintag.add('shfeicha');
                        },
                        check(event, player) {
                            if (player.getExpansions('shfeichag').length > 2 && player.countCards('h') < 3) return false;
                            return true;
                        },
                    },
                },
            },
            shdisu: {
                trigger: {
                    global: 'phaseUseBefore',
                },
                filter(event, player) {
                    return player.hasSkill('shdisu_round');
                },
                async content(event, trigger, player) {
                    player.addTempSkill('shdisu_round', 'roundStart');
                    const next = player.phaseUse();
                    event.next.remove(next);
                    trigger.next.push(next);
                },
                subSkill: {
                    round: { charlotte: true },
                },
            },
            //SH080
            shpingwei: {
                trigger: {
                    player: 'phaseUseBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    const result = await player
                        .chooseTarget(get.prompt2(event.name), (card, player, target) => {
                            return true;
                        })
                        .set('ai', (target) => {
                            const player = get.player();
                            if (
                                player.hp +
                                player.countCards('h', function (card) {
                                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 != 'unchanged') return mod2;
                                    var mod = game.checkMod(card, player, player, 'unchanged', 'cardSavable', player);
                                    if (mod != 'unchanged') return mod;
                                    var savable = get.info(card).savable;
                                    if (typeof savable == 'function') savable = savable(card, player, player);
                                    return savable;
                                }) <=
                                1
                            )
                                return 0;
                            return get.attitude(player, target) > 0;
                        })
                        .forResult();
                    if (result.bool) {
                        const target = result.targets[0];
                        trigger.cancel();
                        player.loseHp();
                        var next = target.phaseDraw('shpingwei', true);
                        event.next.remove(next);
                        trigger.parent.next.push(next);
                        var next = target.phaseUse('shpingwei', true);
                        event.next.remove(next);
                        trigger.parent.next.push(next);
                    }
                },
            },
            shzuochang: {
                trigger: {
                    target: 'useCardToTarget',
                },
                usable: 1,
                forced: true,
                filter(event, player) {
                    if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                    return game.hasPlayer((current) => {
                        return player.inRange(current) && current != event.player && current != player && lib.filter.targetEnabled(event.card, event.player, current);
                    });
                },
                async content(event, trigger, player) {
                    const { bool } = await player
                        .chooseToDiscard(get.prompt2(event.name), 'hes')
                        .set('ai', (card) => {
                            return get.unuseful(card) + 9;
                        })
                        .forResult();
                    if (bool) {
                        const { bool, targets } = await trigger.player
                            .chooseTarget(true, (card, player, target) => {
                                const trigger = _status.event;
                                if (event.parent.player.inRange(target) && target != event.parent.player) {
                                    if (lib.filter.targetEnabled(trigger.card, trigger.source, target)) return true;
                                }
                                return false;
                            })
                            .set('card', trigger.card)
                            .set('source', trigger.player)
                            .set('ai', (target) => {
                                if (_status.event.player.countCards('h', 'shan')) {
                                    return -get.attitude(_status.event.player, target);
                                }
                                if (get.attitude(_status.event.player, target) < 5) {
                                    return 6 - get.attitude(_status.event.player, target);
                                }
                                if (_status.event.player.hp == 1 && player.countCards('h', 'shan') == 0) {
                                    return 10 - get.attitude(_status.event.player, target);
                                }
                                if (_status.event.player.hp == 2 && player.countCards('h', 'shan') == 0) {
                                    return 8 - get.attitude(_status.event.player, target);
                                }
                                return -1;
                            })
                            .set('prompt', `将${get.translation(trigger.card)}转移给${get.translation(player)}攻击范围内的一名其他角色`)
                            .forResult();
                        if (bool) {
                            const target = targets[0];
                            trigger.player.line(target);
                            const evt = trigger.parent;
                            evt.triggeredTargets2.remove(player);
                            evt.targets.remove(player);
                            evt.targets.push(target);
                        }
                    } else player.getStat('triggerSkill').shzuochang--;
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (target.countCards('he') == 0) return;
                            if (card.name != 'sha') return;
                            let min = 1;
                            const friend = get.attitude(player, target) > 0;
                            const vcard = { name: 'shacopy', nature: card.nature, suit: card.suit };
                            const players = game.filterPlayer();
                            for (var i of players) {
                                if (player != i && get.attitude(target, i) < 0 && target.canUse(card, i)) {
                                    if (!friend) return 0;
                                    if (get.effect(i, vcard, player, player) > 0) {
                                        if (!player.canUse(card, players[0])) {
                                            return [0, 0.1];
                                        }
                                        min = 0;
                                    }
                                }
                            }
                            return min;
                        },
                    },
                },
            },
            shdizhen: {
                trigger: {
                    global: 'phaseDrawBegin2',
                },
                forced: true,
                filter(event, player) {
                    return [player, player.previous, player.next].includes(event.player);
                },
                async content(event, trigger, player) {
                    trigger.num++;
                },
            },
            //SH081
            shroujue: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                filter(event, player) {
                    return player.countMark('shroujue') && game.hasPlayer((current) => current != player && current.isDamaged());
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseTarget(`你可以将一个<肉>标记交给一名已受伤的其他角色`, function (card, player, target) {
                            return target != player && target.isDamaged();
                        })
                        .set('ai', (target) => {
                            const player = get.player();
                            if (target.countMark('shroujue')) return 0;
                            return get.attitude(player, target) <= 0;
                        })
                        .forResult();
                    if (result.bool) {
                        const target = result.targets[0];
                        player.removeMark('shroujue');
                        target.addMark('shroujue');
                    }
                },
                intro: {
                    content: 'mark',
                },
                group: 'shroujue_init',
                subSkill: {
                    init: {
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        async content(event, trigger, player) {
                            player.addMark('shroujue', 3);
                        },
                    },
                },
            },
            shdaocu: {
                trigger: {
                    source: 'damageBegin1',
                    global: 'die',
                },
                forced: true,
                filter(event, player) {
                    return event.player.countMark('shroujue');
                },
                async content(event, trigger, player) {
                    if (trigger.name == 'die') player.recover();
                    else trigger.num++;
                },
            },
            shdiji: {
                trigger: {
                    global: 'phaseDiscardAfter',
                },
                forced: true,
                filter(event, player) {
                    return event.player.getHistory('lose', function (evt) {
                        return evt.type == 'discard' && evt.getParent('phaseDiscard') == event && evt.hs.someInD('d');
                    }).length;
                },
                async content(event, trigger, player) {
                    const cards = [],
                        cards2 = [];
                    const target = trigger.player;
                    game.getGlobalHistory('cardMove', function (evt) {
                        if (evt.name == 'cardsDiscard') {
                            if (evt.getParent('phaseDiscard') == trigger) {
                                var moves = evt.cards.filterInD('d');
                                cards.addArray(moves);
                                cards2.removeArray(moves);
                            }
                        }
                        if (evt.name == 'lose') {
                            if (evt.type != 'discard' || evt.position != ui.discardPile || evt.getParent('phaseDiscard') != trigger) return;
                            var moves = evt.cards.filterInD('d');
                            cards.addArray(moves);
                            if (evt.player == target) cards2.addArray(moves);
                            else cards2.removeArray(moves);
                        }
                    });
                    if (!cards2.length) event.finish();
                    const result = await player
                        .chooseButton(['地稽', cards, `你可以获得其中的一张牌`])
                        .set('ai', function (button) {
                            return 20 - get.value(button.link, get.player());
                        })
                        .forResult();
                    if (result.bool) {
                        player.gain(result.links, 'gain2');
                    }
                },
                ai: {
                    threaten: 1.3,
                    expose: 0.2,
                },
            },
            //SH082
            shdingtian: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                async content(event, trigger, player) {
                    await player.loseHp();
                    const targets = game.filterPlayer((current) => current != player).sortBySeat(player);
                    while (targets.length) {
                        const target = targets.shift();
                        const { bool } = await target.chooseToUse({ type: 'basic' }, `你需使用一张基本牌,否则令${get.translation(player)}回复1点体力`).forResult();
                        if (!bool) {
                            const { bool } = await target.chooseToRespond({ type: 'basic' }, `你需打出一张基本牌,否则令${get.translation(player)}回复1点体力`).forResult();
                            if (!bool) await player.recover(target);
                        }
                    }
                },
                check(event, player) {
                    if (
                        player.hp +
                        player.countCards('h', function (card) {
                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            var mod = game.checkMod(card, player, player, 'unchanged', 'cardSavable', player);
                            if (mod != 'unchanged') return mod;
                            var savable = get.info(card).savable;
                            if (typeof savable == 'function') savable = savable(card, player, player);
                            return savable;
                        }) <=
                        1
                    )
                        return false;
                    return true;
                },
            },
            shdimo: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    const targets = game.filterPlayer().sortBySeat(player);
                    while (targets.length) {
                        const target = targets.shift();
                        const { bool } = await target
                            .chooseToDiscard('hs', { type: 'basic' })
                            .set('ai', (card) => {
                                return 7 - get.value(card);
                            })
                            .forResult();
                        if (!bool) {
                            await target.damage();
                        }
                    }
                },
            },
            //SH083
            shlidi: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                async content(event, trigger, player) {
                    await player.loseHp();
                    const targets = game.filterPlayer((current) => current != player).sortBySeat(player);
                    while (targets.length) {
                        const target = targets.shift();
                        const { bool } = await target.chooseToUse({ type: 'basic' }, `你需使用一张基本牌,否则令${get.translation(player)}回复1点体力`).forResult();
                        if (!bool) {
                            const { bool } = await target.chooseToRespond({ type: 'basic' }, `你需打出一张基本牌,否则令${get.translation(player)}回复1点体力`).forResult();
                            if (!bool) await player.recover(target);
                        }
                    }
                },
                check(event, player) {
                    if (
                        player.hp +
                        player.countCards('h', function (card) {
                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            var mod = game.checkMod(card, player, player, 'unchanged', 'cardSavable', player);
                            if (mod != 'unchanged') return mod;
                            var savable = get.info(card).savable;
                            if (typeof savable == 'function') savable = savable(card, player, player);
                            return savable;
                        }) <=
                        1
                    )
                        return false;
                    return true;
                },
            },
            shdiyao: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    const targets = game.filterPlayer().sortBySeat(player);
                    while (targets.length) {
                        const target = targets.shift();
                        const result = await target.chooseToDiscard('hs', (card) => get.type(card) == 'basic').forResult();
                        if (!result.bool) {
                            target.damage();
                        }
                    }
                },
            },
            //SH084
            shyizhu: {
                trigger: {
                    global: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    return get.distance(player, event.player) <= 2;
                },
                async content(event, trigger, player) {
                    const { bool } = await player
                        .chooseToUse(
                            function (card, player, event) {
                                if (card.name != 'sha') return false;
                                return lib.filter.filterCard.apply(this, arguments);
                            },
                            '义助:是否对' + get.translation(trigger.source) + '使用一张【杀】？'
                        )
                        .set('complexSelect', true)
                        .set('filterTarget', function (card, player, target) {
                            if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                            return lib.filter.filterTarget.apply(this, arguments);
                        })
                        .set('sourcex', trigger.source)
                        .forResult();
                    if (bool) {
                        player.draw();
                    }
                },
            },
            shchandou: {
                trigger: {
                    player: ['shaMiss', 'eventNeutralized'],
                },
                forced: true,
                logTarget: 'target',
                filter(event, player) {
                    return player.canUse({ name: 'sha' }, event.target, true);
                },
                async content(event, trigger, player) {
                    player.chooseUseTarget({ name: 'sha' }, trigger.target, true, false);
                },
            },
            shdiyouxin: {
                mod: {
                    globalFrom(from, to, distance) {
                        return distance - from.hp;
                    },
                },
            },
            //SH085
            shbaoen: {
                trigger: {
                    player: 'recoverEnd',
                },
                forced: true,
                logTarget: 'source',
                filter(event, player) {
                    return event.source;
                },
                async content(event, trigger, player) {
                    trigger.source.addTempSkill('shbaoen_1');
                    trigger.source.when({ source: 'damageBegin1' }).then(() => {
                        trigger.num++;
                    });
                },
                check(event, player) {
                    return get.attitude(player, event.source) > 0;
                },
                subSkill: {
                    1: {},
                },
            },
            shqingyuan: {
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('h') > 1;
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseCardTarget({
                            selectCard: 2,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            ai1(card) {
                                var player = _status.event.player;
                                if (player.maxHp - player.hp == 1 && card.name == 'du') return 30;
                                return get.unuseful(card) + 9;
                            },
                            ai2(target) {
                                var att = get.attitude(_status.event.player, target);
                                if (ui.selected.cards.length == 1 && ui.selected.cards[0].name == 'du') return 1 - att;
                                return att - 2;
                            },
                            prompt: get.prompt2(event.name),
                        })
                        .forResult();
                    if (result.bool) {
                        const target = result.targets[0];
                        player.give(result.cards, target);
                        const { bool } = await target
                            .chooseToUse(
                                function (card, player, event) {
                                    if (card.name != 'sha') return false;
                                    return lib.filter.filterCard.apply(this, arguments);
                                },
                                '请援:对' + get.translation(trigger.source) + '使用一张杀或者决斗,或令' + get.translation(player) + '回复1点体力'
                            )
                            .set('targetRequired', true)
                            .set('complexSelect', true)
                            .set('filterTarget', function (card, player, target) {
                                if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                return lib.filter.filterTarget.apply(this, arguments);
                            })
                            .set('sourcex', trigger.source)
                            .forResult();
                        if (!bool) player.recover(target);
                    }
                },
            },
            shdifu: {
                trigger: {
                    global: 'dying',
                },
                usable: 1,
                logTarget: 'player',
                filter(event, player) {
                    return event.player != player && event.player.hasSkill('shbaoen_1'); //QQQ
                },
                async content(event, trigger, player) {
                    trigger.player.recover(2);
                    player.damage('nosource');
                },
                check(event, player) {
                    return get.attitude(player, event.player) > 4;
                },
            },
            //SH086
            shhaoli: {
                global: 'shhaoli_global',
                subSkill: {
                    global: {
                        trigger: {
                            player: 'dying',
                        },
                        forced: true,
                        filter(event, player) {
                            if (!game.hasPlayer((current) => current.hasSkill('shhaoli'))) return false;
                            if (player.hasSkill('shhaoli')) return player.countCards('h') && !player.hasSkill('shhaoli_used');
                            return player.countCards('h');
                        },
                        prompt2(event, player) {
                            if (player.hasSkill('shhaoli')) return '你可以回复1点体力并弃置所有手牌';
                            const players = game.filterPlayer(function (target) {
                                return target != player && target.hasSkill('shhaoli') && !target.hasSkill('shhaoli_block');
                            });
                            var str = '将一张手牌交给' + get.translation(players) + '并回复1点体力';
                            if (players.length > 1) str += '中的一人并回复1点体力';
                            return str;
                        },
                        async content(event, trigger, player) {
                            if (player.hasSkill('shhaoli')) {
                                const result = await player
                                    .chooseBool(`你可以回复1点体力并弃置所有手牌`)
                                    .set('ai', () => {
                                        if (player.canSave(player)) return false;
                                        return true;
                                    })
                                    .forResult();
                                if (result.bool) {
                                    player.addTempSkill('shhaoli_used');
                                    await player.recover();
                                    player.discard(player.getCards('h'));
                                }
                            } else {
                                const players = game.filterPlayer(function (target) {
                                    return target != player && target.hasSkill('shhaoli') && !target.hasSkill('shhaoli_block');
                                });
                                let str = '将一张手牌交给' + get.translation(players) + '并回复1点体力';
                                if (players.length > 1) str += '中的一人并回复1点体力';
                                const result = await player
                                    .chooseCardTarget({
                                        filterCard: true,
                                        filterTarget(card, player, target) {
                                            return target.hasSkill('shhaoli') && !target.hasSkill('shhaoli_used');
                                        },
                                        position: 'h',
                                        ai1(card) {
                                            return 7 - get.value(card);
                                        },
                                        ai2(target) {
                                            const player = get.player();
                                            let att = get.attitude(player, target);
                                            return att + 8;
                                        },
                                        prompt: '你可以发动<好利>',
                                        prompt2: str,
                                    })
                                    .forResult();
                                if (result.bool) {
                                    const target = result.targets[0];
                                    target.addTempSkill('shhaoli_block');
                                    player.give(result.cards, target);
                                    player.recover();
                                }
                            }
                        },
                    },
                    used: { charlotte: true },
                    block: { charlotte: true },
                },
            },
            shdipi: {
                mod: {
                    globalFrom(from, to, distance) {
                        return distance + game.countPlayer();
                    },
                    globalTo(from, to, distance) {
                        return distance + game.countPlayer();
                    },
                },
            },
            //SH087
            shxise: {
                trigger: {
                    player: 'phaseUseBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    const result = await player
                        .chooseTarget(get.prompt2(event.name), function (card, player, target) {
                            return target != player;
                        })
                        .set('ai', (target) => {
                            return;
                        })
                        .set('selectTarget', [1, player.hp])
                        .forResult();
                    if (result.bool) {
                        const targets = result.targets;
                        while (targets.length) {
                            const target = targets.shift();
                            const { bool, links } = await target
                                .chooseButton([
                                    get.translation(event.name),
                                    [
                                        [
                                            [1, `摸一张牌,直到${get.translation(player)}的下个准备阶段,你对${get.translation(player)}造成的伤害-1`],
                                            [2, `令${get.translation(player)}摸一张牌,直到其的下个准备阶段,${get.translation(player)}对你造成的伤害-1`],
                                        ],

                                        'textbutton',
                                    ],
                                ])
                                .set('selectButton', () => {
                                    const player = get.player();
                                    return [1, player.hasSex('female') ? 2 : 1];
                                })
                                .set('ai', (button) => {
                                    if (get.attitude(target, player) >= 0) return 2;
                                    return Math.random() <= 0.5 ? 1 : 2;
                                })
                                .forResult();
                            (links[0] == 1 ? target : player).draw();
                            player.addTempSkill('shxise_' + links[0], { player: 'phaseZhunbeiBegin' });
                            player.markAuto('shxise_' + links[0], [target]);
                        }
                    }
                },
                subSkill: {
                    1: {
                        trigger: {
                            player: 'damageBegin3',
                        },
                        charlotte: true,
                        silent: true,
                        filter(event, player) {
                            return event.source && player.getStorage('shxise_1').includes(event.source);
                        },
                        async content(event, trigger, player) {
                            trigger.num--;
                        },
                    },
                    2: {
                        trigger: {
                            source: 'damageBegin1',
                        },
                        charlotte: true,
                        silent: true,
                        filter(event, player) {
                            return event.player && player.getStorage('shxise_2').includes(event.player);
                        },
                        async content(event, trigger, player) {
                            trigger.num--;
                        },
                    },
                },
            },
            shdikong: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                filter(event, player) {
                    return !player.countCards('e');
                },
                async content(event, trigger, player) {
                    player.recover();
                },
            },
            //SH088
            shyelian: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trigger, player) {
                    const cards = get.cardPile((card) => get.type(card) == 'equip' && get.subtype(card) == 'equip1');
                    if (cards) player.addToExpansion(cards, player, 'draw').gaintag.add('shyelian');
                    const info = get.info(cards);
                    if (info.skills) player.addAdditionalSkill('shyelian', info.skills);
                },
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                init(player, skill) {
                    player.addSkill('shyelian_init');
                },
                onremove(player, skill) {
                    player.removeSkill('shyelian_init');
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                    while (cards.length) {
                        const card = cards.shift();
                        const info = get.info(card);
                        if (info.skills) player.removeAdditionalSkill('shyelian', info.skills);
                    }
                },
                subSkill: {
                    init: {
                        trigger: {
                            player: 'loseAfter',
                        },
                        charlotte: true,
                        silent: true,
                        filter(event, player) {
                            if (!event.xs || !event.xs.length) return false;
                            for (var i in event.gaintag_map) {
                                if (event.gaintag_map[i].includes('shyelian')) return true;
                                return false;
                            }
                        },
                        async content(event, trigger, player) {
                            for (var i of trigger.xs) {
                                if (!trigger.gaintag_map[i.cardid] || !trigger.gaintag_map[i.cardid].includes('Pucci_qunxing')) continue;
                                const info = get.info(i);
                                if (info.skills) player.removeAdditionalSkill('shyelian', info.skills);
                            }
                        },
                    },
                },
            },
            shduanzao: {
                enable: 'phaseUse',
                usable: 1,
                filterCard(card) {
                    return get.type(card) == 'equip';
                },
                position: 'hes',
                async content(event, trigger, player) {
                    const map = {
                        1: 'zhuge',
                        2: 'qinggang',
                        3: 'chixiong',
                        4: 'qinglong',
                        5: 'zhangba',
                        6: 'guanshi',
                        7: 'hanbing',
                        8: 'zhuque',
                        9: 'qilin',
                        10: 'fangtian',
                        11: 'guding',
                        12: 'yinyueqiang',
                        13: 'sanjian',
                    };
                    const num = event.cards[0].number;
                    const name = map[num];
                    if (!lib.card[name]) return;
                    var card = game.createCard(name, event.cards[0].suit, num);
                    card.destroyed = 'discardPile';
                    player.gain(card, 'gain2');
                },
                ai: {
                    order: 10,
                    result: {
                        player: 1,
                    },
                },
            },
            shliezhuang: {
                mod: {
                    maxHandcard(player, num) {
                        return num + player.countCards('e');
                    },
                },
            },
            shdigu: {
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return player.canMoveCard();
                },
                async content(event, trigger, player) {
                    const result = await player.moveCard(true).forResult();
                    if (result.targets[0] == player && result.position !== 'e') {
                        player.draw(2);
                    }
                },
                check(event, player) {
                    return player.canMoveCard(true);
                },
            },
            //SH089
            shdiancai: {
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                filter(event, player) {
                    var evt = event.getl(player);
                    return evt && evt.player == player && evt.cards2 && evt.cards2.length;
                },
                async content(event, trigger, player) {
                    let count = trigger.getl(player).cards2.length;
                    while (count-- > 0) {
                        player.addMark('shdiancai');
                        if (!count || !player.hasSkill(event.name)) break;
                    }
                },
                marktext: '金',
                intro: {
                    name: '金币',
                    content: '你一共有#枚<金币>',
                },
                group: 'shdiancai_init',
                subSkill: {
                    init: {
                        trigger: {
                            global: 'roundStart',
                        },
                        forced: true,
                        logTarget: () => game.filterPlayer().sortBySeat(),
                        async content(event, trigger, player) {
                            game.filterPlayer()
                                .sortBySeat()
                                .forEach(function (current) {
                                    current.addMark('shdiancai', 10);
                                });
                        },
                    },
                },
            },
            shxingshang: {
                enable: 'phaseUse',
                filter(event, player) {
                    return !player.hasSkill('shxingshang_shixiao');
                },
                filterCard: true,
                check(card) {
                    return 10 - get.value(card);
                },
                lose: false,
                discard: false,
                delay: false,
                async content(event, trigger, player) {
                    await player.showCards(event.cards);
                    const targets = game.filterPlayer((current) => current != player).sortBySeat();
                    let bid = false;
                    var num0 = [];
                    for (var i = 1; i < 11; i++) {
                        num0.push(i);
                    } //QQQ
                    const result = await player.chooseControl(num0).set('prompt', '竞拍').set('prompt2', `你声明一个报价,所有参与的其他角色按游戏顺序依次报价,每名角色报价时必须大于上一名角色的报价`).forResult();
                    let price = result.control;
                    while (targets.length) {
                        const target = targets.shift();
                        if (!target.countMark('shdiancai')) continue;
                        var num1 = [];
                        for (var i = price; i < target.countMark('shdiancai'); i++) {
                            num1.push(i);
                        }
                        num1.push('cancel');
                        const result1 = await target
                            .chooseControl(num1)
                            .set('processAI', () => {
                                const player = get.player();
                                const gold = player.countMark('shdiancai');
                                if (get.value(event.cards[0]) > 6 && gold >= price) {
                                    return [price, gold].randomGet();
                                }
                                return 'cancel';
                            })
                            .set('prompt', '竞拍')
                            .set('prompt2', `你可以报价,报价后没有其他角色报价,你竞价成功`)
                            .forResult();
                        if (result1.control != 'cancel') {
                            target.say('竞价' + get.cnNumber(result1.control) + '枚金币');
                            bid = target;
                            price = result1.control + 1;
                        }
                    }
                    if (!bid) {
                        player.draw();
                        player.addTempSkill('shxingshang_shixiao', { player: 'phaseJieshu' });
                    } else {
                        bid.removeMark('shdiancai', price - 1);
                        bid.gain(event.cards, 'gain2', 'log');
                        game.log(bid, '竞价成功!!!');
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        player(player) {
                            return 1;
                        },
                    },
                },
                subSkill: {
                    shixiao: {
                        charlotte: true,
                        mark: true,
                        intro: {
                            markcount: () => '失效',
                        },
                    },
                },
            },
            shdiquan: {
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    for (var i of lib.inpile) {
                        if (!['basic', 'trick'].includes(get.type2(i))) continue;
                        const type = get.type(i);
                        const type_map = {
                            basic: 8,
                            trick: 12,
                            delay: 16,
                        };
                        if (event.filterCard && event.filterCard({ name: i }, player, event) && player.countMark('shdiancai') >= type_map[type]) return true;
                    }
                    return false;
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        for (var i = 0; i < lib.inpile.length; i++) {
                            var name = lib.inpile[i];
                            if (name == 'sha') {
                                if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                for (var j of lib.inpile_nature) {
                                    if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
                                }
                            } else if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                            else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                        }
                        return ui.create.dialog('地全', [list, 'vcard']);
                    },
                    filter(button, player) {
                        const type = get.type(button.link[2]);
                        const type_map = {
                            basic: 8,
                            trick: 12,
                            delay: 16,
                        };
                        if (player.countMark('shdiancai') < type_map[type]) return false;
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
                            filterCard: () => false,
                            selectCard: -1,
                            popname: true,
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            precontent() {
                                const type = get.type(event.result.card);
                                const type_map = {
                                    basic: 8,
                                    trick: 12,
                                    delay: 16,
                                };
                                player.removeMark('shdiancai', type_map[type]);
                            },
                        };
                    },
                    prompt(links, player) {
                        return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    },
                },
                hiddenCard(player, name) {
                    if (!lib.inpile.includes(name)) return false;
                    const type = get.type(name);
                    if (!['basic', 'trick'].includes(get.type2(name))) return false;
                    switch (type) {
                        case 'basic':
                            return player.countMark('shdiancai') >= 8;
                            break;
                        case 'trick':
                            return player.countMark('shdiancai') >= 12;
                            break;
                        case 'delay':
                            return player.countMark('shdiancai') >= 16;
                            break;
                    }
                },
                ai: {
                    combo: 'shdiancai',
                    fireAttack: true,
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player) {
                        if (!player.countMark('shdiancai') || !player.countCards('hes')) return false;
                    },
                    order: 1,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
            },
            //SH090
            shdengyun: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                async content(event, trigger, player) {
                    const result = await player.judge().forResult();
                    if (result.color == 'red') {
                        player.addTempSkill('shdengyun_red', { player: 'phaseUseEnd' });
                        player.draw();
                    } else if (result.color == 'black') {
                        player.addTempSkill('shdengyun_black');
                    }
                },
                subSkill: {
                    red: {
                        charlotte: true,
                        mod: {
                            cardUsable(card, player, num) {
                                if (card.name == 'sha') return num + 1;
                            },
                        },
                    },
                    black: {
                        charlotte: true,
                        mod: {
                            globalFrom(from, to, distance) {
                                return 1;
                            },
                        },
                    },
                },
            },
            shdiduan: {
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                filter(event, player) {
                    if (!player.isPhaseUsing()) return false;
                    if (get.distance(player, event.player) > 1) return false;
                    var evt = event.getParent('phaseUse');
                    if (!evt || !evt.player) return false;
                    return (
                        player
                            .getHistory('sourceDamage', function (evtx) {
                                return evtx.getParent('phaseUse') == evt;
                            })
                            .indexOf(event) == 0
                    );
                },
                async content(event, trigger, player) {
                    trigger.num++;
                },
            },
            //SH091
            shmanzhuang: {
                enable: 'phaseUse',
                usable: 1,
                viewAs: {
                    name: 'sha',
                },
                filterCard: () => false,
                selectCard: -1,
                selectTarget: [1, 2],
                filterTarget(card, player, target) {
                    if (ui.selected.targets.length) {
                        return get.distance(target, ui.selected.targets[0], 'pure') <= 1;
                    }
                    return true;
                },
                precontent() {
                    player.loseHp();
                    _status.event.parent.addCount = false;
                },
            },
            shdijiao: {
                trigger: {
                    source: 'damageSource',
                },
                forced: true,
                logTarget: 'player',
                filter(event, player) {
                    return event.player.countDiscardableCards(player, 'h');
                },
                async content(event, trigger, player) {
                    player.discardPlayerCard(trigger.player, 'h', true);
                },
            },
            //SH092
            shlianmin: {
                trigger: {
                    player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                },
                forced: true,
                filter(event, player) {
                    return game.hasPlayer((current) => current.isDamaged());
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseTarget(`你可以令一名体力值最少的角色回复1点体力`, function (card, player, target) {
                            return target.isMaxHp() && target.isDamaged();
                        })
                        .forResult();
                    if (result.bool) {
                        const target = result.targets[0];
                        target.recover();
                    }
                },
            },
            shhaojian: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget: true,
                async content(event, trigger, player) {
                    const target = event.target;
                    const targets = game.filterPlayer((current) => current != player && current.countCards('h'));
                    while (targets.length) {
                        const current = targets.shift();
                        const { bool } = await current
                            .chooseToUse(
                                function (card, player, event) {
                                    if (card.name != 'sha') return false;
                                    return lib.filter.filterCard.apply(this, arguments);
                                },
                                '号箭:对' + get.translation(target) + '使用一张杀,或你弃置一张手牌'
                            )
                            .set('targetRequired', true)
                            .set('complexSelect', true)
                            .set('filterTarget', function (card, player, target) {
                                if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                return lib.filter.filterTarget.apply(this, arguments);
                            })
                            .set('sourcex', target)
                            .forResult();
                        if (
                            !bool &&
                            current.hasCard(function (card) {
                                return lib.filter.cardDiscardable(card, current, 'shhaojian');
                            }, 'h')
                        )
                            current.chooseToDiscard('h', true);
                    }
                },
                ai: {
                    order: 5,
                    result: {
                        target: -1,
                    },
                },
            },
            shdiqiu: {
                trigger: {
                    global: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    return event.source && event.source.isIn();
                },
                async content(event, trigger, player) {
                    trigger.source.addTempSkill('shdiqiu_prevent', { player: 'phaseJieshu' });
                    trigger.source.markAuto('shdiqiu_prevent', [player]);
                },
                subSkill: {
                    prevent: {
                        trigger: {
                            source: 'damageBefore',
                        },
                        silent: true,
                        charlotte: true,
                        filter(event, player) {
                            return player.getStorage('shdiqiu_prevent').includes(event.player);
                        },
                        async content(event, trigger, player) {
                            trigger.cancel();
                        },
                    },
                },
            },
            //SH093
            shniangjiu: {
                global: 'shniangjiu_global',
                trigger: {
                    player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('h');
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseCard('你可以将一张手牌置于武将牌上,称为<酿>')
                        .set('ai', (card) => {
                            return 7 - get.value(card);
                        })
                        .forResult();
                    if (result.bool) {
                        player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('shniangjiu');
                    }
                },
                marktext: '酿',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                    },
                },
                subSkill: {
                    global: {
                        enable: 'chooseToUse',
                        filter(event, player) {
                            if (!game.hasPlayer((current) => current.hasSkill('shniangjiu'))) return false;
                            return player.getExpansions('shniangjiu').length;
                        },
                        filterCard: () => false,
                        selectCard: -1,
                        viewAs: {
                            name: 'jiu',
                        },
                        prompt: '弃置一张<酿>并视为使用一张【酒】',
                        async precontent(event, trigger, player) {
                            const result = await player.chooseCardButton('酿酒', player.getExpansions('shniangjiu'), true).forResult();
                            player.loseToDiscardpile(result.links);
                        },
                    },
                },
            },
            shhaoyi: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.getExpansions('shniangjiu').length;
                },
                filterTarget: lib.filter.notMe,
                async content(event, trigger, player) {
                    const result = await player.chooseCardButton('酿酒', player.getExpansions('shniangjiu'), true).forResult();
                    player.loseToDiscardpile(result.links);
                    game.cardsGotoOrdering(result.links);
                    event.target.addToExpansion(result.links, player, 'giveAuto').gaintag.add('shniangjiu');
                },
                ai: {
                    order: 1,
                    result: {
                        target: 1,
                    },
                },
            },
            shdaixin: {
                trigger: {
                    global: 'loseAfter',
                },
                forced: true,
                filter(event, player) {
                    if (event.player == player) return false;
                    if (!event.xs || !event.xs.length) return false;
                    for (var i in event.gaintag_map) {
                        if (event.gaintag_map[i].includes('shniangjiu')) return true;
                        return false;
                    }
                },
                async content(event, trigger, player) {
                    const colors = [];
                    for (var i of trigger.xs) {
                        if (!trigger.gaintag_map[i.cardid] || !trigger.gaintag_map[i.cardid].includes('shniangjiu')) continue;
                        const color = get.color(i, false);
                        colors.add(color);
                    }
                    const result = await player
                        .chooseToDiscard(get.prompt2(event.name), function (card) {
                            return colors.includes(get.color(card));
                        })
                        .set('ai', (card) => {
                            return get.damageEffect(trigger.player, player, player);
                        })
                        .forResult();
                    if (result.bool) {
                        trigger.player.damage();
                    }
                },
            },
            shdizang: {
                trigger: {
                    player: 'loseAfter',
                    global: 'recoverBegin',
                },
                forced: true,
                filter(event, player) {
                    if (event.name == 'recover') return event.player != player && event.parent.name == 'jiu' && event.parent.player == player;
                    if (!event.xs || !event.xs.length) return false;
                    for (var i in event.gaintag_map) {
                        if (event.gaintag_map[i].includes('shniangjiu')) return true;
                        return false;
                    }
                },
                async content(event, trigger, player) {
                    if (trigger.name == 'recover') trigger.num++;
                    else player.draw();
                },
                ai: {
                    jiuOther: true,
                },
            },
            //SH094
            shzhuihun: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    return target.isDamaged();
                },
                async content(event, trigger, player) {
                    const target = event.target;
                    const list = [];
                    if (target.countCards('h') > 1) list.push('选项一');
                    list.push('选项二');
                    const { control } = await target
                        .chooseControl(list)
                        .set('choiceList', [`交给${get.translation(player)}两张牌并回复1点体力`, `摸一张牌并受到1点伤害`])
                        .set('prompt', get.translation(event.name))
                        .set('ai', () => {
                            const player = get.player();
                            if (get.recoverEffect(player, player, player) > 0) return '选项一';
                            return '选项二';
                        })
                        .forResult();
                    if (control == '选项一') {
                        await target.chooseCard('hes', 2, true, `交给${get.translation(player)}两张牌并回复1点体力`);
                        target.recover();
                    } else {
                        await target.draw();
                        target.damage();
                    }
                },
            },
            shdiping: {
                trigger: {
                    source: 'damageSource',
                },
                forced: true,
                async content(event, trigger, player) {
                    trigger.player.addTempSkill('fengyin', { player: 'phaseJieshu' });
                },
            },
            //SH095
            shduoming: {
                trigger: {
                    global: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    return player.inRange(event.player) && player.canUse({ name: 'sha' }, event.player);
                },
                async content(event, trigger, player) {
                    player.chooseUseTarget({ name: 'sha' }, trigger.player, false);
                },
            },
            shdisun: {
                trigger: {
                    source: 'damageSource',
                },
                forced: true,
                filter(event, player) {
                    return !event.player.countCards('h') && event.player.hp == 1;
                },
                async content(event, trigger, player) {
                    trigger.player.die();
                },
            },
            //SH096
            shjuxing: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.countCards('he') > 0;
                },
                filterCard: true,
                filterTarget(card, player, target) {
                    return !target.isDisabledJudge();
                },
                check(card) {
                    return 6 - get.value(card);
                },
                position: 'he',
                discard: false,
                lose: false,
                delay: false,
                async content(event, trigger, player) {
                    const target = event.target;
                    player.$give(event.cards, target, false);
                    await game.asyncDelay(0.5);
                    const name = event.cards[0].name;
                    const namex = 'shjuxing_' + name;
                    if (!lib.card[namex]) {
                        lib.card[namex] = {
                            type: 'special_delay',
                            fullskin: true,
                            wuxieable: false,
                            judge(card) {
                                return 2;
                            },
                            judge2(result) {
                                if (result.bool == false) return true;
                                return false;
                            },
                            effect() { },
                        };
                        lib.card[namex].cardimage = name;
                        lib.translate[namex] = lib.translate[name] + '·举刑';
                        lib.translate[namex + '_info'] = '由【举刑】技能创造的无效果【' + lib.translate[name] + '】';
                    }
                    target.addJudge({ name: 'shjuxing_' + name }, event.cards);
                },
                ai: {
                    order: 1,
                    result: {
                        target: -1,
                    },
                },
            },
            shzhisi: {
                trigger: {
                    global: 'judgeEnd',
                },
                forced: true,
                filter(event, player) {
                    return event.result.card.suit != 'none';
                },
                async content(event, trigger, player) {
                    if (get.color(trigger.result.card) == 'red') {
                        if (trigger.player.countDiscardableCards(player, 'he')) player.discardPlayerCard(trigger.player, 'he');
                    } else {
                        const result = await player
                            .chooseCard('h', function (card) {
                                if (get.color(card) != 'black') return false;
                                const player = get.player();
                                const mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                if (mod2 != 'unchanged') return mod2;
                                const mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                                if (mod != 'unchanged') return mod;
                                return true;
                            })
                            .set('ai', function (card) {
                                var player = get.player();
                                return get.damageEffect(trigger.player, player, player);
                            })
                            .set('prompt', `你可以弃置一张黑色手牌对${get.translation(trigger.player)}造成1点伤害`)
                            .forResult();
                        if (result.bool) {
                            await player.respond(result.cards);
                            trigger.player.damage();
                        }
                    }
                },
            },
            shdinu: {
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return event.source && event.source.isIn();
                },
                async content(event, trigger, player) {
                    await player.draw(2);
                    if (player.countCards('h')) {
                        const result = await player.chooseCard('h', true, `交给${get.translation(trigger.source)}一张手牌`).forResult();
                        player.give(result.cards, trigger.source, 'give');
                        const list = [];
                        list.push('选项一');
                        list.push('选项二');
                        const { control } = await trigger.source
                            .chooseControl(list)
                            .set('choiceList', [`进行一次判定`, `令${get.translation(player)}回复1点体力`])
                            .set('prompt', get.translation(event.name))
                            .set('ai', () => {
                                const player = get.player();
                                if (get.recoverEffect(player, player, player) > 0) return '选项二';
                                return '选项一';
                            })
                            .forResult();
                        if (control == '选项一') {
                            trigger.source.judge();
                        } else {
                            player.recover(trigger.source);
                        }
                    }
                },
            },
            //SH097
            shbitong: {
                trigger: {
                    player: 'phaseDrawBegin2',
                },
                forced: true,
                filter(event, player) {
                    return player.isDamaged() && !event.numFixed;
                },
                async content(event, trigger, player) {
                    const list = ['多摸', '少摸', 'cancel2'];
                    const control = await player
                        .chooseControl(list)
                        .set('ai', () => {
                            const player = get.player();
                            if (get.recoverEffect(player, player, player) > 0) return '少摸';
                            return '多摸';
                        })
                        .set('prompt', get.prompt2('shbitong'))
                        .forResultControl();
                    if (control == '多摸') {
                        trigger.num++;
                    } else if (control == '少摸') {
                        trigger.num--;
                        player.recover();
                    }
                },
            },
            shgouzhu: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return Array.from(ui.discardPile.childNodes).filter((card) => get.type(card) == 'basic').length;
                },
                async content(event, trigger, player) {
                    const cards = Array.from(ui.discardPile.childNodes);
                    const result = await player
                        .chooseButton(true, ['构筑', cards, '获得一张基本牌'])
                        .set('ai', function (button) {
                            const player = get.player();
                            const card = button.link;
                            let val = player.getUseValue(card);
                            if (player.hasSkill('shbijiu') && card.name == 'jiu') val += 5;
                            return val;
                        })
                        .set('filterButton', function (button) {
                            return get.type(button.link) == 'basic';
                        })
                        .forResult();
                    player.gain(result.links, 'gain2');
                },
                ai: {
                    order: 5,
                    result: {
                        player: 1,
                    },
                },
            },
            shbijiu: {
                trigger: {
                    player: 'gainAfter',
                    global: 'loseAsyncAfter',
                },
                forced: true,
                filter(event, player) {
                    const hs = player.getCards('h');
                    return event.getg(player).filter((card) => hs.includes(card) && card.name == 'jiu').length;
                },
                async content(event, trigger, player) {
                    const hs = player.getCards('h');
                    const cards = trigger.getg(player).filter((card) => hs.includes(card) && card.name == 'jiu');
                    player.discard(cards);
                    player.draw(2);
                },
            },
            shdicha: {
                trigger: {
                    global: 'phaseZhunbeiBegin',
                },
                async content(event, trigger, player) {
                    const cards = get.cards();
                    const hs = player.getCards('h');
                    game.cardsGotoOrdering(cards);
                    const next = player.chooseToMove('地察', true);
                    next.set('list', [
                        ['牌堆顶', cards],
                        ['手牌', hs],
                    ]);
                    next.set('filterMove', function (from, to, moved) {
                        if (to == 0 && moved[0].length > 1) return false;
                        return true;
                    });
                    next.set('filterOk', function (moved) {
                        return moved[0].length == 1;
                    });
                    next.set('processAI', function (list) {
                        const cards = list[0][1].slice(0).sort(function (a, b) {
                            return get.value(b) - get.value(a);
                        });
                        return [cards.splice(1), cards];
                    });
                    const result = await next.forResult();
                    player.lose(result.moved[0], ui.cardPile, 'insert');
                    player.$throw(result.moved[0].length, 1000);
                    player.gain(result.moved[1], 'draw');
                    game.updateRoundNumber();
                },
            },
            //SH098
            shqinbao: {
                trigger: {
                    player: 'phaseDrawBegin2',
                },
                forced: true,
                filter(event, player) {
                    return !event.numFixed;
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseTarget(get.prompt2(event.name), function (card, player, target) {
                            return player.inRange(target);
                        })
                        .forResult();
                    if (result.bool) {
                        result.targets[0].addTempSkill('shqinbao_1');
                        const target = result.targets[0];
                        trigger.num--;
                        target
                            .when('phaseDrawBegin2')
                            .filter((event, player) => !event.numFixed)
                            .then(() => {
                                trigger.num--;
                            });
                    }
                },
                subSkill: {
                    1: {},
                },
            },
            shtuoju: {
                trigger: {
                    player: 'phaseUseBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    const result = await player
                        .chooseCardTarget({
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return player.inRange(target) && target.countDiscardableCards(player, 'he');
                            },
                            position: 'hes',
                            ai1(card) {
                                return 7 - get.value(card);
                            },
                            ai2(target) {
                                const player = get.player();
                                let att = get.attitude(player, target);
                                if (target.hasSkill('shqinbao_1')) att = att * 2; //QQQ
                                return -att;
                            },
                            prompt: '你可以发动<托举>',
                            prompt2: get.prompt2(event.name),
                        })
                        .forResult();
                    if (result.bool) {
                        result.targets[0].addTempSkill('shtuoju_1');
                        const target = result.targets[0];
                        await player.discard(result.cards);
                        await player.discardPlayerCard(target, 'he', true);
                        if (target.hasSkill('shqinbao_1') && target.countDiscardableCards(player, 'he')) player.discardPlayerCard(target, 'he', true);
                    }
                },
                subSkill: {
                    1: {},
                },
            },
            shpaoshuai: {
                trigger: {
                    player: 'phaseDiscardBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    const result = await player
                        .chooseCardTarget({
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return player.inRange(target);
                            },
                            position: 'hes',
                            ai1(card) {
                                return 7 - get.value(card);
                            },
                            ai2(target) {
                                const player = get.player();
                                let att = get.attitude(player, target);
                                if (target.hasSkill('shqinbao_1') && target.hasSkill('shtuoju_1')) att = att * 2;
                                return -att;
                            },
                            prompt: '你可以发动<抛摔>',
                            prompt2: get.prompt2(event.name),
                        })
                        .forResult();
                    if (result.bool) {
                        const target = result.targets[0];
                        player.discard(result.cards);
                        target.damage(target.hasSkill('shqinbao_1') && target.hasSkill('shtuoju_1') ? 2 : 1);
                    }
                },
            },
            shdie: {
                trigger: {
                    player: ['logSkill', 'useSkillAfter'],
                },
                forced: true,
                sealSkill: true,
                filter(event, player) {
                    if (!event.targets || !event.targets.length) return false;
                    const history = player.getAllHistory('useSkill');
                    if (!history || !history.length || history.length < 2) return false;
                    if (!history[history.length - 2].targets) return false;
                    if (history[history.length - 2].targets.every((target) => !event.targets.includes(target))) return false;
                    return player
                        .getSkills(false, false, false)
                        .filter((item) => !lib.skill[item].sealSkill)
                        .some((skill) => [event.sourceSkill, name].includes(skill));
                },
                async content(event, trigger, player) {
                    player.loseHp();
                },
            },
            //SH099
            shdushi: {
                enable: 'phaseUse',
                usable: 2,
                filterTarget(card, player, target) {
                    return target != player && target.countCards('h');
                },
                async content(event, trigger, player) {
                    const target = event.target;
                    const { cards } = await target.chooseCard('h', true).forResult();
                    const bet = ['type', 'suit', 'number'];
                    const dialog = ui.create.dialog('赌石');
                    const type = ['basic', 'trick', 'equip'];
                    const suit = lib.suits;
                    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                    dialog.add([type, 'tdnodes']);
                    dialog.add([suit, 'tdnodes']);
                    dialog.add([num, 'tdnodes']);
                    const { bool, links } = await player
                        .chooseButton(3, dialog, true)
                        .set('filterButton', function (button) {
                            if (!ui.selected.buttons.length) return type.includes(button.link);
                            if (ui.selected.buttons.length == 1) return suit.includes(button.link);
                            return num.includes(button.link);
                        })
                        .forResult();
                    if (bool) {
                        const count = 0;
                        for (var i = 0; i < bet.length; i++) {
                            if (get[bet[i]](cards[0], target) == links[i]) count++;
                        }
                        if (count == 0) player.damage();
                        else {
                            if (count > 0) await player.draw();
                            if (count > 1) await player.gain(cards[0]);
                            if (count > 2) target.damage();
                        }
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        target: -1,
                    },
                },
            },
            shpanyan: {
                trigger: {
                    player: 'damageBegin3',
                },
                usable: 1,
                filter(event, player) {
                    if (!player.storage.shdichou) return false;
                    return event.num > 1;
                },
                async content(event, trigger, player) {
                    player.addMark('shpanyan');
                    if (player.storage.shdichou) trigger.num = 1;
                    else trigger.num--;
                },
                marktext: '岩',
                intro: {
                    name: '岩',
                    content: '你共有#个<岩>',
                },
            },
            shdichou: {
                derivation: ['shnianya', 'shpanyan_rewrit'],
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                juexingji: true,
                filter(event, player) {
                    return player.countMark('shpanyan') >= 3;
                },
                async content(event, trigger, player) {
                    player.awakenSkill(event.name);
                    player.storage.shdichou = true;
                    player.gainMaxHp();
                    player.addSkill('shnianya');
                },
            },
            shnianya: {
                enable: 'phaseUse',
                filterTarget: true,
                filter(event, player) {
                    return player.countMark('shpanyan') > 1;
                },
                async content(event, trigger, player) {
                    player.removeMark('shpanyan', 2);
                    const target = event.target;
                    const { bool } = await target
                        .chooseToDiscard('hes', 2)
                        .set('ai', (card) => {
                            return 8 - get.value(card);
                        })
                        .forResult();
                    if (!bool) target.damage(2);
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            return get.damageEffect(target, player, player);
                        },
                    },
                },
            },
            //SH100
            shtibian: {
                trigger: {
                    target: 'useCardToTarget',
                },
                usable: 1,
                async content(event, trigger, player) {
                    const result = await player.draw(2).forResult();
                    if (!player.getCards('h', (card) => result.includes(card))) return;
                    const { bool, cards, targets } = await player
                        .chooseCardTarget({
                            forced: true,
                            filterCard(card) {
                                return result.includes(card);
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            position: 'h',
                            ai1(card) {
                                return 7 - get.value(card);
                            },
                            ai2(target) {
                                var player = get.player();
                                return get.attitude(player, target) > 0;
                            },
                            prompt: '将其一张牌交给一名其他角色',
                        })
                        .forResult();
                    if (bool) {
                        player.line(targets[0]);
                        player.give(cards, targets[0]);
                    }
                },
            },
            shchaoqiang: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget: true,
                async content(event, trigger, player) {
                    const target = event.target;
                    var num = target.countCards('h') - target.hp;
                    if (num <= 0) target.drawTo(target.hp);
                    else target.chooseToDiscard('h', num, true);
                },
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            var num = target.countCards('h') - target.hp;
                            var att = get.attitude(player, target);
                            if (att > 0 && num < 0) return -num;
                            if (att <= 0 && num > 0) return -num;
                            return 0;
                        },
                    },
                },
            },
            shdishu: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('h') == player.hp;
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseTarget('你可以对一名角色造成1点伤害', function (card, player, target) {
                            return target != player;
                        })
                        .set('ai', function (target) {
                            var player = get.player();
                            return get.damageEffect(target, player, player);
                        })
                        .forResult();
                    if (result.bool) {
                        const target = result.targets[0];
                        target.damage();
                    }
                },
            },
            //SH101
            shfuruo: {
                trigger: {
                    global: 'damageEnd',
                },
                usable: 1,
                filter(event, player) {
                    if (player == _status.currentPhase) return false;
                    return event.source && player.canCompare(event.source);
                },
                async content(event, trigger, player) {
                    const sha = new lib.element.VCard({ name: 'sha' });
                    var { result } = await player.chooseToCompare(trigger.source);
                    if (result.bool) {
                        if (!player.canUse(sha, trigger.source)) return;
                        player.useCard(sha, trigger.source);
                    } else {
                        trigger.player.draw();
                    }
                },
                ai: {
                    order: 8,
                    result: {
                        target(player, target) {
                            if (
                                !player.hasCard(function (card) {
                                    if (get.position(card) != 'h') return false;
                                    var val = get.value(card);
                                    if (val < 0) return true;
                                    if (val <= 5) {
                                        return card.number >= 11;
                                    }
                                    if (val <= 6) {
                                        return card.number >= 13;
                                    }
                                    return false;
                                })
                            )
                                return 0;
                            return -Math.sqrt(1 + target.countCards('he')) / (1 + target.countCards('j'));
                        },
                    },
                },
            },
            shbiaohan: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    return player.canCompare(target);
                },
                async content(event, trigger, player) {
                    const sha = new lib.element.VCard({ name: 'sha' });
                    const target = event.target;
                    var { result } = await player.chooseToCompare(target);
                    if (result.bool) {
                        if (!player.canUse(sha, target)) return;
                        player.useCard(sha, target);
                    } else {
                        target.draw();
                    }
                },
                ai: {
                    order: 8,
                    result: {
                        target(player, target) {
                            if (
                                !player.hasCard(function (card) {
                                    if (get.position(card) != 'h') return false;
                                    var val = get.value(card);
                                    if (val < 0) return true;
                                    if (val <= 5) {
                                        return card.number >= 11;
                                    }
                                    if (val <= 6) {
                                        return card.number >= 13;
                                    }
                                    return false;
                                })
                            )
                                return 0;
                            return -Math.sqrt(1 + target.countCards('he')) / (1 + target.countCards('j'));
                        },
                    },
                },
            },
            shhuwei: {
                trigger: {
                    player: ['compare', 'chooseToCompareBegin', 'compareMultipleBegin'],
                    target: 'compare',
                },
                forced: true,
                filter(event, player, name) {
                    if (['chooseToCompareBegin', 'compareMultipleBegin'].includes(name)) return true;
                    if (player != event.target && event.iwhile) return false;
                    return true;
                },
                async content(event, trigger, player) {
                    if (event.triggername != 'compare') {
                        player.draw();
                        return;
                    }
                    var num = player.hp;
                    if (player == trigger.player) {
                        trigger.num1 += num;
                        if (trigger.num1 > 13) trigger.num1 = 13;
                    } else {
                        trigger.num2 += num;
                        if (trigger.num2 > 13) trigger.num2 = 13;
                    }
                    game.log(player, '的拼点牌点数+', num);
                },
            },
            shdiyin: {
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                logTarget: 'player',
                filter(event, player) {
                    return event.player.hasSex('female');
                },
                async content(event, trigger, player) {
                    trigger.num++;
                },
            },
            //SH102
            shgengyun: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('h');
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseToDiscard('h', get.prompt2(event.name))
                        .set('ai', (card) => {
                            return 6 - get.value(card);
                        })
                        .forResult();
                    if (result.bool) {
                        player
                            .when('phaseDrawBegin2')
                            .filter((event) => !event.numFixed)
                            .then(() => {
                                trigger.num++;
                            });
                    }
                },
            },
            shjianming: {
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                complexCard: true,
                selectCard: 2,
                position: 'hes',
                discard: false,
                lose: false,
                delay: 0,
                filterTarget(card, player, target) {
                    if (!ui.selected.targets.length) return target != player;
                    return true;
                },
                selectTarget: 2,
                complexTarget: true,
                multitarget: true,
                targetprompt: ['得到牌', '出杀目标'],
                async content(event, trigger, player) {
                    const target1 = event.targets[0];
                    const target2 = event.targets[1];
                    const list = [];
                    await player.give(event.cards, target1, 'give');
                    const result = await target1.chooseToUse('对' + get.translation(target2) + '使用【杀】,或令' + get.translation(player) + '回复1点体力', { name: 'sha' }, target2, -1).forResult();
                    if (!result.bool) {
                        player.recover();
                    }
                },
                ai: {
                    order: 3,
                    result: {
                        target(player, target) {
                            if (ui.selected.targets.length == 0) {
                                if (target.name == 'SH-103') return 2;
                                return 1;
                            } else {
                                return get.effect(target, { name: 'sha' }, ui.selected.targets[0], target);
                            }
                        },
                    },
                },
            },
            shdixing: {
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                filter(event, player) {
                    if (player.countCards('h')) return false;
                    const evt = event.getl(player);
                    return evt && evt.player == player && evt.hs && evt.hs.length;
                },
                async content(event, trigger, player) {
                    const { bool, targets } = await player
                        .chooseTarget(get.prompt2(event.name))
                        .set('ai', (target) => {
                            const player = get.player();
                            return get.damageEffect(target, player, player);
                        })
                        .forResult();
                    if (bool) {
                        targets[0].damage();
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
                            if (player.countCards('h') != 1) return false;
                        }
                    },
                },
            },
            //SH103
            shjiesha: {
                trigger: {
                    global: ['loseAfter', 'cardsDiscardAfter', 'equipAfter'],
                },
                usable: 1,
                filter(event, player) {
                    return event.getd().length == 1 && event.getd()[0].name == 'sha';
                },
                async content(event, trigger, player) {
                    await player.loseHp();
                    player.gain(trigger.getd(), 'gain2');
                },
                check(event, player) {
                    if (
                        player.hp +
                        player.countCards('h', function (card) {
                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            var mod = game.checkMod(card, player, player, 'unchanged', 'cardSavable', player);
                            if (mod != 'unchanged') return mod;
                            var savable = get.info(card).savable;
                            if (typeof savable == 'function') savable = savable(card, player, player);
                            return savable;
                        }) <=
                        1
                    )
                        return false;
                    return true;
                },
            },
            shshixue: {
                enable: 'phaseUse',
                usable: 1,
                filterCard(card) {
                    return card.name == 'sha';
                },
                viewAs: {
                    name: 'tao',
                },
                viewAsFilter(player) {
                    if (!player.countCards('hs', { name: 'sha' })) return false;
                },
                position: 'hs',
                prompt: '将一张【杀】当【桃】使用',
                check(card) {
                    var player = get.player();
                    if (player.countCards('h') > player.hp) {
                        return 6 - get.value(card);
                    }
                    return 3 - get.value(card);
                },
            },
            shdizhuang: {
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseToDiscard(get.prompt2(event.name), 'hes', (card) => {
                            return card.name == 'sha';
                        })
                        .set('ai', (card) => {
                            if (get.attitude(get.player(), trigger.player) > 0) return 0;
                            return 7 - get.value(card);
                        })
                        .forResult();
                    if (result.bool) {
                        trigger.num += result.cards.length;
                    }
                },
            },
            //SH104
            shjixing: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                filter(event, player) {
                    return game.filterPlayer().length - 1 > 0;
                },
                async content(event, trigger, player) {
                    const num = game.filterPlayer().length - 1;
                    const cards = get.cards(num);
                    event.cards = cards;
                    game.cardsGotoOrdering(cards);
                    while (cards.length) {
                        if (cards.every((card) => !player.hasUseTarget(card))) break;
                        const result = await player
                            .chooseButton(true, ['疾行', cards, '使用其中的一张牌'])
                            .set('filterButton', (button) => {
                                return _status.event.player.hasUseTarget(button.link);
                            })
                            .set('ai', (button) => {
                                var player = _status.event.player,
                                    card = button.link,
                                    cards = _status.event.parent.cards;
                                var val = player.getUseValue(card) + 0.01;
                                if ((val > 0 && cards.length > 1) || (val > 4 && cards.length == 1 && (player.maxHp > 3 || player.isDamaged()))) return get.order(card) + val / 5;
                                return 0;
                            })
                            .forResult();
                        if (result.bool) {
                            const card = result.links[0];
                            cards.remove(card);
                            player.$gain2(card, false);
                            await player.chooseUseTarget(true, card, false);
                        }
                    }
                    var evt = _status.event.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = _status.event.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        evt.finish();
                    }
                },
                check(event, player) {
                    return game.filterPlayer().length > 3;
                },
            },
            shshandun: {
                trigger: {
                    player: 'damageBegin4',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('hes');
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseToDiscard('hes', get.prompt2(event.name))
                        .set('ai', (card) => {
                            const player = get.player();
                            if (get.damageEffect(player, player, player, trigger.nature) > 0) return 0;
                            return 6 - get.value(card);
                        })
                        .forResult();
                    if (result.bool) {
                        trigger.cancel();
                    }
                },
            },
            shdilie: {
                mod: {
                    targetEnabled(card, player, target, now) {
                        if (card.name == 'shunshou') return false;
                    },
                },
            },
            //SH105
            shpengqi: {
                derivation: ['shguanjue', 'paoxiao', 'shqianzi', 'shshenzhu'],
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trigger, player) {
                    const cards = get.cards();
                    const flag = lib.skill.shpengqi.derivation[lib.suit.indexOf(cards[0].suit)];
                    if (flag) {
                        player.addToExpansion(cards, 'draw').gaintag.add(event.name);
                        player.addAdditionalSkill('shpengqi', flag);
                    } //QQQ
                },
                marktext: '旗',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    player.removeAdditionalSkill('shpengqi');
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
            },
            shdijian: {
                trigger: {
                    player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                },
                forced: true,
                async content(event, trigger, player) {
                    if (trigger.name == 'phaseZhunbei') {
                        const result = await player
                            .chooseTarget(`准备阶段,你可以选择一名其他角色,直到你的下个准备阶段,该角色获得与你相同的<捧旗>效果.`, function (card, player, target) {
                                return target != player;
                            })
                            .set('ai', (target) => {
                                return get.attitude(player, target) > 0;
                            })
                            .forResult();
                        if (result.bool) {
                            const target = result.targets[0];
                            const skill = 'shpengqi_' + player.playerid;
                            target.addAdditionalSkill(skill, player.additionalSkills['shpengqi']);
                            player.addTempSkill('shdijian_clear', { player: ['phaseZhunbeiBegin', 'die'] });
                        }
                    } else {
                        const result = await player
                            .chooseCard('h', '你可以用一张手牌替换<棋>')
                            .set('ai', (card) => {
                                return 6 - get.value(card);
                            })
                            .set('ai', (card) => {
                                return 6 - get.value(card);
                            })
                            .forResult();
                        if (result.bool) {
                            const flag = player.getExpansions('shpengqi');
                            await player.gain(flag, 'gain2', 'fromStorage');
                            player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('shpengqi');
                        }
                    }
                },
                subSkill: {
                    clear: {
                        charlotte: true,
                        onremove(player) {
                            game.countPlayer2((current) => {
                                if (current.additionalSkills && current.additionalSkills[`shpengqi_${player.playerid}`]) {
                                    current.removeAdditionalSkill(`shpengqi_${player.playerid}`);
                                }
                            }, true);
                        },
                    },
                },
            },
            //SH106
            shguiji: {
                trigger: {
                    player: 'phaseUseBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    const result = await player
                        .chooseTarget(get.prompt2(event.name), function (card, player, target) {
                            return target != player && target.countCards('h');
                        })
                        .set('ai', (target) => {
                            const player = get.player();
                            let att = get.attitude(player, target);
                            let num1 = player.countCards('h');
                            let num2 = target.countCards('h');
                            if (att > 0) {
                                if (target.hasSkillTag('nogain')) return 0.5;
                                return target.maxHp - num2;
                            } else {
                                if (num2 > num1) return num2 - num1;
                            }
                            return target.maxHp - num2;
                        })
                        .forResult();
                    if (result.bool) {
                        const target = result.targets[0];
                        await player.swapHandcards(target);
                        var num = player.countCards('h') - target.maxHp;
                        if (num <= 0) player.drawTo(target.maxHp);
                        else player.chooseToDiscard('h', num, true);
                    }
                },
            },
            shjiaozha: {
                trigger: {
                    target: 'useCardToTarget',
                },
                usable: 1,
                filter(event, player) {
                    if (!lib.skill.shjiaozha.logTarget(event, player).length) return false;
                    return ['sha', 'juedou'].includes(event.card.name);
                },
                logTarget(event, player) {
                    var list = [];
                    if (!player.isIn()) return [];
                    if (player.next.isIn()) list.add(player.next);
                    if (player.previous.isIn()) list.add(player.previous);
                    list.remove(event.player);
                    return list;
                },
                async content(event, trigger, player) {
                    const jiaozha = {
                        linked: player.isLinked(),
                        turnedover: player.isTurnedOver(),
                    };
                    let adjoin = lib.skill[event.name].logTarget(trigger, player);
                    adjoin.add(player);
                    adjoin.randomSort();
                    adjoin.forEach((ad) => ad.classList.add('unseen'));
                    var dialog = ui.create.dialog('狡诈');
                    dialog.add(adjoin);
                    dialog.add(`${get.translation(player)}发动了狡诈 请选择一张武将牌`);
                    for (var i = 0; i < dialog.buttons.length; i++) {
                        dialog.buttons[i].style.backgroundImage = 'url("extension/无名水浒/image/jiang.jpg' + '")';
                    }
                    const result = await trigger.player.chooseButton(dialog, true).forResult();
                    const target = result.links[0];
                    adjoin.forEach((ad) => ad.classList.remove('unseen'));
                    trigger.player.line(target);
                    trigger.targets[trigger.targets.indexOf(player)] = target;
                    game.log(trigger.player, '使用的', trigger.card, '的目标改为了', target);
                    player.classList[jiaozha.linked ? 'add' : 'remove']('linked');
                    player.classList[jiaozha.turnedover ? 'add' : 'remove']('turnedover');
                },
                ai: {
                    threaten: 2,
                    expose: 1.2,
                    effect: {
                        target(card, player, target) {
                            if (!['sha', 'juedou'].includes(card.name)) return;
                            return 0.7;
                        },
                    },
                },
            },
            shdihao: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    const targets = game.filterPlayer().sortBySeat(player);
                    game.asyncDraw(targets);
                    while (targets.length) {
                        const target = targets.shift();
                        if (
                            target.hasCard(function (card) {
                                return lib.filter.cardDiscardable(card, target, 'shdihao');
                            }, 'h')
                        )
                            await target.chooseToDiscard('h', true);
                    }
                },
            },
            //SH107
            shpaliang: {
                enable: 'phaseUse',
                filterCard(card) {
                    return get.type(card) == 'equip';
                },
                position: 'hes',
                async content(event, trigger, player) {
                    player.when('phaseDiscardBefore').then(() => {
                        trigger.cancel();
                    });
                    player.addTempSkill('shpaliang_effect', { player: ['useCard', 'phaseZhunbeiBegin'] });
                },
                ai: {
                    order: 1,
                    result: {
                        player(player) {
                            return player.hasSkill('shpaliang_effect') ? 0 : 1;
                        },
                    },
                },
                subSkill: {
                    effect: {
                        charlotte: true,
                        mod: {
                            targetEnabled(card, player, target, now) {
                                if (card.name == 'sha' || (get.tag(card, 'damage') && get.type(card) == 'trick')) return false;
                            },
                        },
                    },
                },
            },
            shdaojia: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return game.hasPlayer((current) => lib.skill.shdaojia.filterTarget(null, player, current));
                },
                filterTarget(card, player, target) {
                    return target != player && target.countGainableCards(player, 'e', (card) => target.getEquips(2).includes(card));
                },
                async content(event, trigger, player) {
                    const target = event.target;
                    const cards = target.getEquips(2);
                    if (cards.length) player.gain(cards, target, 'give');
                },
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            var att = get.attitude(player, target);
                            if (target.getEquip(2) && player.hasEmptySlot(2)) {
                                return -2 * att;
                            }
                            return -att;
                        },
                    },
                },
            },
            shdizei: {
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                filter(event, player) {
                    if (player.countCards('h')) return false;
                    const evt = event.getl(player);
                    return evt && evt.player == player && evt.hs && evt.hs.length;
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseTarget(get.prompt2(event.name), function (card, player, target) {
                            return target.countGainableCards(player, 'hej');
                        })
                        .set('ai', (target) => {
                            var player = _status.event.player;
                            var att = get.attitude(player, target);
                            if (att < 0) att = -Math.sqrt(-att);
                            else att = Math.sqrt(att);
                            return att * lib.card.shunshou.ai.result.target(player, target);
                        })
                        .forResult();
                    if (result.bool) {
                        const target = result.targets[0];
                        player.gainPlayerCard(target, 'hej', true);
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
                            if (player.countCards('h') != 1) return false;
                        }
                    },
                },
            },
            //SH108
            shdaoma: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    return target != player && target.countGainableCards(player, 'e', (card) => ['equip3', 'equip4'].includes(get.subtype(card)));
                },
                async content(event, trigger, player) {
                    const target = event.target;
                    player.loseHp();
                    const cards = target.getCards('e', (card) => ['equip3', 'equip4'].includes(get.subtype(card)));
                    if (cards.length) player.gain(cards, target, 'give');
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            if (
                                player.hp +
                                player.countCards('h', function (card) {
                                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 != 'unchanged') return mod2;
                                    var mod = game.checkMod(card, player, player, 'unchanged', 'cardSavable', player);
                                    if (mod != 'unchanged') return mod;
                                    var savable = get.info(card).savable;
                                    if (typeof savable == 'function') savable = savable(card, player, player);
                                    return savable;
                                }) <=
                                1
                            )
                                return 0;
                            if (!player.hasEmptySlot('horse')) return 0;
                            if (!player.hasEnabledSlot('horse')) return 0;
                            return -target.countGainableCards(player, 'e', (card) => ['equip3', 'equip4'].includes(get.subtype(card))) * 0.5;
                        },
                    },
                },
            },
            shyinhuo: {
                trigger: {
                    target: 'useCardToTarget',
                },
                usable: 1,
                forced: true,
                filter(event, player) {
                    return event.targets.length == 1;
                },
                async content(event, trigger, player) {
                    const result = await player
                        .chooseTarget(get.prompt2(event.name), function (card, player, target) {
                            return target != player && target != trigger.player;
                        })
                        .set('ai', (target) => {
                            return get.attitude(get.player(), target) <= 0;
                        })
                        .forResult();
                    if (result.bool) {
                        const target = result.targets[0];
                        const list = [];
                        if (target.countGainableCards(player, 'h')) list.push('选项一');
                        if (lib.filter.targetEnabled2(trigger.card, trigger.player, target)) list.push('选项二');
                        list.push('背水!');
                        const { control } = await player
                            .chooseControl(list)
                            .set('choiceList', [`令${get.translation(player)}获得你的一张牌`, `你也成为${get.translation(trigger.card)}的目标`, `背水!对${get.translation(player)}造成1点伤害并依次执行以上两项`])
                            .set('ai', () => {
                                const player = get.player();
                                if (get.attitude(target, player) < 0) return '背水!';
                                if (get.effect(player, trigger.card, trigger.player, player) > 0) return '选项二';
                                if (list.includes('选项一')) return '选项一';
                                return '背水!';
                            })
                            .forResult();
                        if (control == '背水!') {
                            await player.damage(target);
                        }
                        if ((control == '选项一' || control == '背水!') && target.countGainableCards(player, 'h')) {
                            await player.gainPlayerCard(target, 'h', true);
                        }
                        if ((control == '选项二' || control == '背水!') && lib.filter.targetEnabled2(trigger.card, trigger.player, target)) {
                            trigger.parent.targets.add(target);
                            trigger.player.line(target);
                        }
                    } else player.getStat('triggerSkill')[event.name]--;
                },
            },
            shdiquanxin: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                filter(event, player) {
                    return player.getEquips(3).length || player.getEquips(4).length;
                },
                async content(event, trigger, player) {
                    player.recover();
                },
            },
        },
        translate: {
            WaterMargin: '无名水浒',
            'SH-001': '宋江',
            'SH-002': '卢俊义',
            'SH-003': '吴用',
            'SH-004': '公孙胜',
            'SH-005': '关胜',
            'SH-006': '林冲',
            'SH-007': '秦明',
            'SH-008': '呼延灼',
            'SH-009': '花荣',
            'SH-010': '柴进',
            'SH-011': '李应',
            'SH-012': '朱仝',
            'SH-013': '鲁智深',
            'SH-014': '武松',
            'SH-015': '董平',
            'SH-016': '张清',
            'SH-017': '杨志',
            'SH-018': '徐宁',
            'SH-019': '索超',
            'SH-020': '戴宗',
            'SH-021': '刘唐',
            'SH-022': '李逵',
            'SH-023': '史进',
            'SH-024': '穆弘',
            'SH-025': '雷横',
            'SH-026': '李俊',
            'SH-027': '阮小二',
            'SH-028': '张横',
            'SH-029': '阮小五',
            'SH-030': '张顺',
            'SH-031': '阮小七',
            'SH-032': '杨雄',
            'SH-033': '石秀',
            'SH-034': '解珍',
            'SH-035': '解宝',
            'SH-036': '燕青',
            'SH-037': '朱武',
            'SH-038': '黄信',
            'SH-039': '孙立',
            'SH-040': '宣赞',
            'SH-041': '郝思文',
            'SH-042': '韩滔',
            'SH-043': '彭玘',
            'SH-044': '单廷圭',
            'SH-045': '魏定国',
            'SH-046': '萧让',
            'SH-047': '裴宣',
            'SH-048': '欧鹏',
            'SH-049': '邓飞',
            'SH-050': '燕顺',
            'SH-051': '杨林',
            'SH-052': '凌振',
            'SH-053': '蒋敬',
            'SH-054': '吕方',
            'SH-055': '郭盛',
            'SH-056': '安道全',
            'SH-057': '皇甫端',
            'SH-058': '王英',
            'SH-059': '扈三娘',
            'SH-060': '鲍旭',
            'SH-061': '樊瑞',
            'SH-062': '孔明',
            'SH-063': '孔亮',
            'SH-064': '项充',
            'SH-065': '李衮',
            'SH-066': '金大坚',
            'SH-067': '马麟',
            'SH-068': '童威',
            'SH-069': '童猛',
            'SH-070': '孟康',
            'SH-071': '侯健',
            'SH-072': '陈达',
            'SH-073': '杨春',
            'SH-074': '郑天寿',
            'SH-075': '陶宗旺',
            'SH-076': '宋清',
            'SH-077': '乐和',
            'SH-078': '龚旺',
            'SH-079': '丁得孙',
            'SH-080': '穆春',
            'SH-081': '曹正',
            'SH-082': '宋万',
            'SH-083': '杜迁',
            'SH-084': '薛永',
            'SH-085': '李忠',
            'SH-086': '周通',
            'SH-087': '汤隆',
            'SH-088': '杜兴',
            'SH-089': '邹渊',
            'SH-090': '邹润',
            'SH-091': '朱贵',
            'SH-092': '朱富',
            'SH-093': '施恩',
            'SH-094': '蔡福',
            'SH-095': '蔡庆',
            'SH-096': '李立',
            'SH-097': '李云',
            'SH-098': '焦挺',
            'SH-099': '石勇',
            'SH-100': '孙新',
            'SH-101': '顾大嫂',
            'SH-102': '张青',
            'SH-103': '孙二娘',
            'SH-104': '王定六',
            'SH-105': '郁保四',
            'SH-106': '白胜',
            'SH-107': '时迁',
            'SH-108': '段景住',
            //SH001
            shfengshi: '逢时',
            shfengshi_info: '当一名角色成为伤害牌的目标时,你可以将一张手牌交给该角色并摸一张牌.',
            shjuyi: '聚义',
            shjuyi_info: '出牌阶段限一次,你可以令所有角色依次选择一项:1.令你摸一张牌;2.交给你一张手牌;3.弃置一张手牌并对你造成1点伤害.',
            shshenzhu: '神助',
            shshenzhu_info: '结束阶段,若你的体力值为1且手牌中没有【桃】,你回复1点体力.',
            shtiankui: '天魁',
            shtiankui_info: '主公技,锁定技,你的手牌上限+X(X为你的体力值).',
            //SH002
            shguanjue: '冠绝',
            shguanjue_info: '每回合限一次,你可以将一张基本牌当做【杀】使用或打出(不计入次数限制).',
            shweiyi: '威仪',
            shweiyi_info: '当你造成伤害后,你令该角色获得<怯>标记.拥有<怯>的角色不能对你使用【杀】或【决斗】,且当其对除你以外的角色造成伤害后移除.',
            shtiangang: '天罡',
            shtiangang_info: '主公技,出牌阶段限一次,你可以令一名群势力角色选择一项:1.视为对你指定的另一名角色使用【杀】;2.交给你一张基本牌.',
            //SH003
            shzhijue: '智绝',
            shzhijue_info: '锁定技,你使用的普通锦囊牌不能被【无懈可击】响应.',
            shduomou: '多谋',
            shduomou_info: '出牌阶段,你使用普通锦囊牌可以多指定或少指定一个目标.',
            shshanduan: '擅断',
            shshanduan_info: '一名角色的准备阶段,你可以观看牌堆顶的两张牌并将其中一张置于牌堆底.',
            shtianji: '天机',
            shtianji_info: '一名角色的判定牌生效前,你可以用牌堆顶的一张牌代替之.',
            //SH004
            shqulei: '驱雷',
            shqulei_info: '准备阶段,你可以将牌堆顶的一张牌置于武将牌上.当你的判定牌生效后,你将其置于武将牌上.你以此法置于武将牌上的牌称为<雷>.',
            shchedian: '掣电',
            shchedian_info: '出牌阶段限一次,你可以进行判定,若判定结果为♠️️,你对一名角色造成1点雷电伤害.',
            shchedian_rewrite: '掣电',
            shchedian_rewrite_info: '出牌阶段限一次,你可以移去一张<雷>并对一名角色造成1点雷电伤害.',
            shwulei: '五雷',
            shwulei_info: '觉醒技,当你拥有五张<雷>时,你复原你的武将牌并回复全部体力,修改<掣电>.',
            shtianxian: '天闲',
            shtianxian_info: '锁定技,【闪电】和【乐不思蜀】对你无效.',
            //SH005
            shwujue: '武绝',
            shwujue_info: '你可以将一张手牌当做不计入次数限制的【杀】或【闪】使用或打出.',
            shshenyi: '神裔',
            shshenyi_info: '当你使用【杀】被【闪】抵消时,你可以再使用一张【杀】(无距离限制).',
            shtianyong: '天勇',
            shtianyong_info: '锁定技,当你使用【杀】指定目标后,若目标角色体力值与手牌数之和大于你体力值与手牌数之和,则此【杀】伤害+1.',
            //SH006
            shbaoxiao: '豹啸',
            shbaoxiao_info: '锁定技,你于出牌阶段使用【杀】的次数上限为X,你计算与其他角色的距离时-X(X为你已损失的体力值).',
            shbaoxiao_rewrite: '豹啸',
            shbaoxiao_rewrite_info: '锁定技,你于出牌阶段使用【杀】的次数上限为X,你计算与其他角色的距离时-X(X为你的体力上限).',
            shlinye: '凛夜',
            shlinye_info: '觉醒技,准备阶段,若你上一轮内受到的伤害数不小于3,你修改<豹啸>并获得<火并>.',
            shhuobin: '火并',
            shhuobin_info: '限定技,当一名角色受到伤害后,你可以弃置一张武器牌并对伤害来源造成2点火焰伤害.',
            shtianxiong: '天雄',
            shtianxiong_info: '每轮限一次,当你进入濒死状态时,若你手中没有【桃】或【酒】,你回复1点体力.',
            //SH007
            shbanghe: '棒喝',
            shbanghe_info: '出牌阶段,你可以将所有手牌当【杀】或【决斗】使用.若此牌造成了伤害,你摸两张牌并结束当前回合.',
            shtianmeng: '天猛',
            shtianmeng_info: '锁定技,当你于每回合首次造成伤害时,此伤害+1.',
            //SH008
            shlianqi: '链骑',
            shlianqi_info: '出牌阶段限一次,你可以弃置一张手牌并将武将牌横置或重置.当你受到属性伤害时,若你已横置,你可以弃置装备区的所有牌并防止此伤害.',
            shtamie: '踏灭',
            shtamie_info: '限定技,出牌阶段,你可以令所有角色需依次打出一张【杀】和一张【闪】,否则该角色依次受到1点火焰伤害.',
            shtianwei: '天威',
            shtianwei_info: '锁定技,当你处于横置状态时,你计算与其他角色的距离时-1且普【杀】、【铁索连环】和伤害类锦囊对你无效.当你非因<链骑>而重置武将牌时,你失去1点体力.',
            //SH009
            shyinqiang: '银枪',
            shyinqiang_info: '出牌阶段限一次,你可以展示牌堆顶的一张牌,若为伤害牌,你可以获得此牌,否则你将其置入弃牌堆或交给一名其他角色.',
            shchuanyang: '穿杨',
            shchuanyang_info: '锁定技,若你的手牌数为全场最多,你使用【杀】无距离和次数限制.',
            shtianying: '天英',
            shtianying_info: '每回合限一次,当一名其他角色获得一名角色的手牌时,你可以摸一张牌.',
            //SH010
            shshucai: '疏财',
            shshucai_info: '出牌阶段,你可以将任意张手牌交给其他角色(目标角色可以拒绝).',
            shmingmen: '名门',
            shmingmen_info: '锁定技,当一名其他角色获得你的牌后,防止其对你造成的伤害直到其的下个结束阶段.',
            shtiangui: '天贵',
            shtiangui_info: '摸牌阶段,你可以多摸X张牌(X为你上一轮交给其他角色的手牌数).',
            //SH011
            shshayu: '铩羽',
            shshayu_info: '弃牌阶段开始时,你可以将任意张手牌置于武将牌上,称为<翎>.',
            shfeiling: '飞翎',
            shfeiling_info: '当有角色弃置牌时,你可以移去一张与该角色弃置的牌颜色或点数相同的<翎>,对其造成1点伤害.',
            shtianfu: '天富',
            shtianfu_info: '出牌阶段限一次,你可以展示牌堆顶的X张牌(X为你的体力值),你获得其中一张,将其余牌分配给其他角色(每名角色至多分配一张).',
            //SH012
            shbihu: '庇护',
            shbihu_info: '游戏开始时,你令一名其他角色获得<庇护>标记.你对有<庇护>的角色造成的伤害无效,当其对你造成伤害后,你可以移去标记.当有<庇护>的角色成为【杀】或【决斗】的目标结算后,你视为对伤害来源使用一张【杀】.',
            shchennu: '嗔怒',
            shchennu_info: '觉醒技,当拥有<庇护>的角色死亡时,你摸四张牌弃置其中所有不为【杀】的牌,你修改<天满>并执行一个额外出牌阶段,且该阶段内你使用【杀】无距离和次数限制.',
            shtianman: '天满',
            shtianman_info: '锁定技,你的手牌上限+X(X为有<庇护>角色的体力值).',
            shtianman_rewrite: '天满',
            shtianman_rewrite_info: '锁定技,你的手牌上限+X(X为你的已损失体力值).',
            //SH013
            shwangdao: '忘道',
            shwangdao_info: '锁定技,当你使用【酒】时,本回合你使用的下一张【杀】不可被响应.你的【桃】均视为【酒】.',
            shwujuexin: '悟觉',
            shwujuexin_info: '觉醒技,当你击杀一名角色后,你将体力回复至上限并弃置装备区的武器牌和手牌中所有的【酒】和【杀】,你失去<忘道>,获得<禅心>.',
            shchanxin: '禅心',
            shchanxin_info: '锁定技,你不能使用【杀】.当你获得【酒】时,你弃置之并摸一张牌.当你受到伤害后,伤害来源失去1点体力.',
            shtiangu: '天孤',
            shtiangu_info: '锁定技,结束阶段,若你本回合未造成过伤害,你摸一张牌.',
            //SH014
            shxiangmo: '降魔',
            shxiangmo_info: '出牌阶段开始时,你可以减少1点体力上限.若如此做,直到你的下个准备阶段,其他角色角色不能响应你使用的【杀】.',
            shtianshang: '天伤',
            shtianshang_info: '当你受到伤害后,你可以对伤害来源使用一张【杀】,此【杀】无距离和次数限制且伤害+1.',
            //SH015
            shzhizhuang: '直撞',
            shzhizhuang_info: '出牌阶段限一次,你可以令你攻击范围内的一名其他角色选择一项:1.打出一张【杀】,视为其对你使用【决斗】;2.打出一张【闪】,令你视为对你攻击范围内的另一名角色使用<直撞>;3.受到1点伤害.',
            shtianli: '天立',
            shtianli_info: '当你打出【杀】时,你摸一张牌.你使用【杀】和【决斗】可以多指定一个自标.',
            //SH016
            shfeishi: '飞石',
            shfeishi_info: '准备阶段,你可以将任意张手牌置于你的武将牌上,称为<石>.出牌阶段限一次/其他角色的准备阶段,你可以弃置一张<石>,令一名角色/该角色需打出一张【闪】,否则其受到1点伤害.',
            shtianjie: '天捷',
            shtianjie_info: '当其他角色使用或打出【闪】时,你可以获得此牌并令该角色摸一张牌.你每使用或打出两张【闪】,你可以摸一张牌.',
            //SH017
            shkunshou: '困兽',
            shkunshou_info: '觉醒技,其他角色的回合结束时,若你没有手牌且本回合失去至少三张牌时,你减少1点体力上限,将体力回复至上限并摸三张牌,本局游戏你造成的伤害+1.',
            shtianan: '天暗',
            shtianan_info: '其他角色的出牌阶段开始时,你可以将一张手牌或装备区的一张武器牌交给该角色,令其选择一项:1.受到1点伤害;2.对你使用一张【杀】.',
            //SH018
            shgoulian: '钩镰',
            shgoulian_info: '出牌阶段限一次,当你使用【杀】造成伤害后,你可以令受到伤害的角色选择一项:1.令你弃置其装备区里的一张牌;2.令你弃置其两张手牌;背水:对你造成1点伤害.',
            shjinqiang: '金枪',
            shjinqiang_info: '每回合限一次,你可以将一张装备牌当【杀】使用或打出(不计入次数限制).',
            shtianyou: '天佑',
            shtianyou_info: '你的回合外,当你失去装备区里的一张牌时,你可以弃置一名其他角色区域里的一张牌.',
            //SH019
            shjijin: '急进',
            shjijin_info: '准备阶段,你可以使用一张【杀】,若如此做且此牌造成了伤害,你执行一个额外的出牌阶段.',
            shqinsha: '擒杀',
            shqinsha_info: '当你使用牌指定目标时,若你与目标角色距离小于等于1,则其不能响应此牌.',
            shtiankong: '天空',
            shtiankong_info: '当你需要使用或打出【杀】时,你可以进行判定,若判定结果为:红色,视为你使用或打出之;黑色,你弃置一张手牌.',
            //SH020
            shshenxing: '神行',
            shshenxing_info: '根据你的<甲马>数依次获得对应效果:2.你可以将一张基本牌当做【闪】使用或打出;4.你视为拥有<神速>.',
            shjiama: '甲马',
            shjiama_info: '出牌阶段,你可以将一张装备牌置于武将牌上,称为<甲马>(你至多拥有四张).你的手牌上限+X(X为你的<甲马>数).',
            shtiansu: '天速',
            shtiansu_info: '当你于回合外失去与<甲马>点数相同的手牌后,你可以摸两张牌并翻面.',
            //SH021
            shqiangxi: '强袭',
            shqiangxi_info: '摸牌阶段开始时,你可以少摸一张牌,本回合你使用【杀】无距离限制且无视防具.',
            shtianyi: '天异',
            shtianyi_info: '出牌阶段限一次,你可以展示一张手牌,令一名其他角色进行判定,若判定结果与展示牌花色相同,其获得展示的牌;否则视为你对其使用一张【杀】.',
            //SH022
            shluxin: '戮心',
            shluxin_info: '出牌阶段限一次,你可以失去1点体力,令一名其他角色进行判定,若判定结果为♥️️,则视为你使用一张【酒】,否则视为你对其使用一张【决斗】.',
            shjiusha: '酒煞',
            shjiusha_info: '锁定技,你的红色手牌均视为【酒】且你使用【酒】无次数限制.当你使用【酒】时,你回复1点体力.结束阶段,若你的手牌中有【酒】,你失去1点体力.',
            shtiansha: '天杀',
            shtiansha_info: '锁定技,你的黑色手牌均视为【杀】且你使用【杀】无距离和次数限制.当你击杀一名角色时,你摸三张牌.',
            //SH023
            shlongteng: '龙腾',
            shlongteng_info: '准备阶段,你根据手牌中不同花色的种类执行:一种,你可以弃置任意张手牌,摸等量的牌并跳过弃牌阶段;两种,你可以弃置两名其他角色的各一张牌;三种,你可以获得其他两名角色的各一张手牌并跳过摸牌阶段;四种,你可以弃置四种花色的手牌各一张,对一名角色造成2点伤害.',
            shtianweixin: '天微',
            shtianweixin_info: '锁定技,若你的体力值或手牌数为全场唯一最少,你不能成为【杀】的目标.',
            //SH024
            shmodang: '莫当',
            shmodang_info: '出牌阶段限一次,你可以弃置一张手牌,若如此做,你使用的下一张普通锦囊牌结算两次.',
            shluezhen: '掠阵',
            shluezhen_info: '当你对一名角色造成伤害时,若其装备区里有牌,你可以防止该伤害,获得其一张装备区里的牌.',
            shtianjiu: '天究',
            shtianjiu_info: '锁定技,当其他角色获得你的牌后,直到该角色的结束阶段,其不能对你使用牌.',
            //SH025
            shhuyue: '虎跃',
            shhuyue_info: '锁定技,若你已受伤,你使用【杀】和锦囊牌无距离限制.',
            shhuijia: '挥枷',
            shhuijia_info: '出牌阶段限一次,你可以失去1点体力,令一名其他角色选择一项:1.你对其造成1点伤害;2.令你摸两张牌.',
            shtiantui: '天退',
            shtiantui_info: '锁定技,当你失去1点体力后,你摸一张牌.',
            //SH026
            shduanlang: '断浪',
            shduanlang_info: '你可以将一张装备牌当【闪】或【无懈可击】使用或打出.',
            shyinchao: '引潮',
            shyinchao_info: '每回合限一次,当一名角色使用牌指定你为唯一目标时,你可以弃置一张手牌,令处于你攻击范围内的角色都成为此牌的目标.',
            shtianshou: '天寿',
            shtianshou_info: '其他角色的结束阶段,若其本回合没有对你造成过伤害,你可以摸两张牌,交给其一张手牌.',
            //SH027
            shxiongshen: '凶神',
            shxiongshen_info: '出牌阶段限一次,你可以弃置一张牌,令一名角色选择一项:1.交给你一张手牌;2.受到1点伤害;背水:摸两张牌.',
            shbusha: '捕杀',
            shbusha_info: '限定技,出牌阶段,你可以令除你以外的所有角色进行投票(你不能成为投票目标),所有角色依次交给你等同于其票数的牌,否则受到2点伤害.',
            shtianjian: '天剑',
            shtianjian_info: '锁定技,当一名角色进入濒死状态时,若其没有手牌且你为伤害来源,则【桃】对其无效.当你击杀一名角色后,你获得其武将牌上的所有牌.',
            //SH028
            shlanhe: '拦河',
            shlanhe_info: '出牌阶段限一次,你可以弃置一张牌,令一名角色选择一项:1.交给你一张手牌;2.受到1点伤害;背水:摸两张牌.',
            shjiejiang: '截江',
            shjiejiang_info: '限定技,出牌阶段,你可以令除你以外的所有角色进行投票(你不能成为投票目标),所有角色依次交给你等同于其票数的牌,否则受到2点伤害.',
            shtianping: '天平',
            shtianping_info: '锁定技,当你造成伤害时,若受伤角色的体力值不小于你,则你摸一张牌,否则你令其摸一张牌.',
            //SH029
            shboming: '搏命',
            shboming_info: '出牌阶段限一次,你可以和一名其他角色拼点.若你赢,该角色本回合不能响应你打出的牌;若你没赢,其获得你的拼点牌.',
            shesha: '恶煞',
            shesha_info: '当你造成伤害后,你可以摸三张牌,将其中一张置于你的武将牌上,称为<罪>.',
            shtianzui: '天罪',
            shtianzui_info: '锁定技,你的手牌上限+X(X为你拥有<罪>的数量).结束阶段,你弃置所有的<罪>并失去等量体力.',
            //SH030
            shfubo: '伏波',
            shfubo_info: '每回合限一次,当你受到伤害时,你可以防止该伤害,若如此做,你摸一张牌并将武将牌翻面.',
            shnongchao: '弄潮',
            shnongchao_info: '其他角色的结束阶段,若你的武将牌背面朝上,你可以对该角色使用一张【杀】或【决斗】.',
            //SH031
            shdaojiu: '盗酒',
            shdaojiu_info: '当其他角色使用【酒】时,你可以弃置一张牌,令此【酒】无效并获得之.',
            shkuaihuo: '快活',
            shkuaihuo_info: '出牌阶段,当你使用基本牌结算后,你可以摸三张牌.',
            shtianbai: '天败',
            shtianbai_info: '锁定技,当你的手牌数大于你的体力上限时,你将手牌弃至等于你体力上限的数.',
            //SH032
            shzhanjian: '斩奸',
            shzhanjian_info: '当一名角色于其回合外回复体力后,你可以弃置一张牌,令其选择一项:1.令你随机获得一张手牌;2.视为你对其使用【杀】.',
            shchue: '除恶',
            shchue_info: '一名角色的结束阶段,若该角色本回合内对至少两名其他角色造成过伤害或对一名其他角色造成过至少2点伤害,你可以令其选择一项:1.弃置一张牌;2.视为你对其使用【杀】.',
            shtianlao: '天牢',
            shtianlao_info: '限定技,出牌阶段,你可以弃置所有手牌,令所有角色跳过摸牌阶段直到你的下个准备阶段.',
            //SH033
            shdanshi: '胆识',
            shdanshi_info: '出牌阶段每名角色限一次,你声明一种牌的类型,你展示一名角色的一张手牌,若该牌与你声明的类型相同,则你可以获得之,否则你失去1点体力并失去<胆识>直到结束阶段.',
            shzhuojian: '灼见',
            shzhuojian_info: '你的回合外,当你受到伤害后,你可以声明一种花色,进行判定且你可以获得判定牌.若判定结果与你声明的花色相同,则你对伤害来源造成1点伤害.',
            shtianhui: '天慧',
            shtianhui_info: '锁定技,当你获得其他角色的牌后,这些牌不计入手牌上限.',
            //SH034
            shyadu: '牙毒',
            shyadu_info: '当你造成伤害后,你令受伤角色获得<牙毒>标记.当该角色进入濒死状态或使用【酒】时,其移去标记.有<牙毒>的角色不能回复体力.',
            shsheshi: '蛇噬',
            shsheshi_info: '锁定技,当你连续对同一个目标角色造成伤害后,你回复1点体力.',
            shtianbao: '天暴',
            shtianbao_info: '出牌阶段限一次,当你使用伤害牌时,你可以失去2点体力,令此牌结算两次.',
            //SH035
            shaozhe: '鳌蛰',
            shaozhe_info: '当你一次至少造成2点伤害后,你令受伤角色获得<鳌蛰>标记.当该角色使用【桃】时,其移去标记.有<鳌蛰>的角色的结束阶段,其失去1点体力.',
            shxieci: '蝎刺',
            shxieci_info: '你使用【杀】可以多指定一个目标,若仅指定唯一目标,此【杀】伤害+1.',
            shtianku: '天哭',
            shtianku_info: '出牌阶段限一次,若你使用牌指定的目标与你使用的上一张牌完全相同,则你可以令此牌不可被响应.',
            //SH036
            shnuji: '弩击',
            shnuji_info: '准备阶段,你可以对一名其他角色造成1点伤害.',
            shtayan: '踏燕',
            shtayan_info: '结束阶段,你可以观看牌堆顶的三张牌并获得其中一张,将剩余的牌置入弃牌堆或放回牌堆顶.',
            shtianqiao: '天巧',
            shtianqiao_info: '你可以将一张♥️️基本牌当做任意基本牌使用或打出.',
            //SH037
            shshizhen: '识阵',
            shshizhen_info: '每回合限一次,当一名角色使用牌指定你为唯一目标后,你可以观看其的全部手牌.',
            shposhi: '破势',
            shposhi_info: '出牌阶段限一次,你可以令一名手牌数和体力值均大于你的角色选择一项:1.将手牌数弃至与你的体力值相同;2.其不能使用伤害牌直至其的下个结束阶段.',
            shdangji: '当机',
            shdangji_info: '转换技,阳,当你造成1点伤害后,你可以摸一张牌;阴,当你回复1点体力后,你可以摸一张牌.',
            shdikui: '地魁',
            shdikui_info: '锁定技,你不能成为【兵粮寸断】和【乐不思蜀】的目标.',
            //SH038
            shlizhi: '立志',
            shlizhi_info: '游戏开始时,你令至多三名其他角色各获得1枚<志>标记.每轮你对一名有<志>的角色首次造成伤害后,你获得1枚<志>标记.结束阶段,若你本回合未对有<志>的角色造成过伤害,你移去1枚<志>标记.',
            shsangmen: '丧门',
            shsangmen_info: '出牌阶段限一次,当你使用【杀】指定目标时,你可以移去1枚<志>标记,多指定一个目标或令目标不能响应.',
            shsangmen_rewrite: '丧门',
            shsangmen_rewrite_info: '当你使用【杀】指定目标时,你可以移去1枚<志>标记,多指定一个目标或令目标不能响应.',
            shdisha: '地煞',
            shdisha_info: '觉醒技,准备阶段,若你拥有至少3枚<志>标记,你复原武将牌,回复1点体力并修改<丧门>.',
            //SH039
            shyangbian: '扬鞭',
            shyangbian_info: '当你于回合外受到伤害后,你可以弃置一张手牌并视为对伤害来源使用一张【杀】.',
            shluanqiang: '栾枪',
            shluanqiang_info: '每回合限一次,当你使用【杀】或【决斗】指定目标后,你可以摸两张牌,交给目标角色两张牌.',
            shdiyong: '地勇',
            shdiyong_info: '锁定技,手牌数大于你的角色无法响应你的牌.你对体力值大于你的角色造成的伤害+1.',
            //SH040
            shpianyi: '偏移',
            shpianyi_info: '当你受到伤害后,你可以弃置一张手牌并对与你距离不大于1的一名角色(不能为伤害来源)造成1点伤害.',
            shlianzhu: '连珠',
            shlianzhu_info: '当你于出牌阶段使用【杀】指定目标时,若你没有手牌,此【杀】结算两次.',
            shdijie: '地杰',
            shdijie_info: '锁定技,若你没有装备进攻坐骑牌,则你计算与其他角色的距离时-1.',
            //SH041
            shjingsu: '井宿',
            shjingsu_info: '出牌阶段每名角色限一次,你可以弃置一张牌,令一名其他角色选择一项:1.令你弃置其一张牌;2.弃置两张手牌;3.受到1点伤害.',
            shdixiong: '地雄',
            shdixiong_info: '锁定技,你使用【杀】指定目标时,若目标角色手牌数小于等于你,其不能响应你使用的【杀】.',
            //SH042
            shzhengsheng: '争胜',
            shzhengsheng_info: '出牌阶段,你可以与一名角色拼点.若你赢,你对其造成1点伤害;若你没赢,你失去1点体力.',
            shhengshuo: '横槊',
            shhengshuo_info: '当有武器牌被置入弃牌堆后,你可以弃置一张手牌,你获得并使用此武器牌.',
            shdiwei: '地威',
            shdiwei_info: '锁定技,你的拼点牌的点数+X(X为你的攻击范围).当你拼点结算后,若你的拼点牌为【杀】,视为你对目标角色使用此【杀】.',
            //SH043
            shjumu: '炬目',
            shjumu_info: '准备阶段,你可以观看至多两名手牌数大于你的角色的全部手牌.',
            shguisu: '鬼宿',
            shguisu_info: '出牌阶段每名角色限一次,你可以令一名角色判定,你可以弃置一张与判定结果同花色的手牌,视为你对其使用【过河拆桥】.',
            shdiying: '地英',
            shdiying_info: '锁定技,当你使用【过河拆桥】时,多弃置目标角色的一张牌.',
            //SH044
            shjiliu: '激流',
            shjiliu_info: '出牌阶段限一次,你可以弃置一张牌,令一名其他角色选择一项:1.弃置其装备区的所有牌;2.受到1点雷属性伤害.',
            shxuanjia: '玄甲',
            shxuanjia_info: '锁定技,若你没有装备防具,火焰伤害对你无效.',
            shdiqi: '地奇',
            shdiqi_info: '一名角色的准备阶段,你可以弃置两张花色相同的手牌,令所有角色横置.',
            //SH045
            shranyan: '燃焰',
            shranyan_info: '出牌阶段限一次,你可以令一名其他角色展示一张手牌,你弃置一张与其花色相同的牌并对其造成1点火焰伤害.',
            shjiangyi: '绛衣',
            shjiangyi_info: '锁定技,若你没有装备防具,雷电伤害对你无效.',
            shdimeng: '地猛',
            shdimeng_info: '当你使用【杀】指定目标时,你可以将目标角色横置.',
            //SH046
            shlinmu: '临摹',
            shlinmu_info: '当有其他角色使用锦囊牌时,你可以记录该牌名并将一张手牌置于武将牌上,称为<文>.出牌阶段,你可以使用记录牌名的<文>.',
            shdiwen: '地文',
            shdiwen_info: '当你受到伤害时,你可以移去一张<文>并摸一张牌,令此伤害-1.',
            //SH047
            shbue: '不阿',
            shbue_info: '锁定技,当你获得其他角色的牌后或其他角色获得你的牌后,须将这些牌置入弃牌堆.',
            shjiucha: '纠察',
            shjiucha_info: '每回合限一次,当有其他角色获得另一名其他角色的牌后,你可以令其选择一项:1.弃置一张手牌;2.受到1点伤害.',
            shdizheng: '地正',
            shdizheng_info: '当其他角色受到伤害时,若你不是伤害来源,你可以令该角色进行判定.若判定结果为:红色,其可以交给伤害来源一张牌并防止此伤害;黑色,其可以交给你一张牌并令你代替其承受此伤害.',
            //SH048
            shzhenchi: '振翅',
            shzhenchi_info: '锁定技,结束阶段,若你的手牌数小于体力值,直到你的下个回合开始,其他角色计算与你的距离时+3.',
            shpanxuan: '盘旋',
            shpanxuan_info: '你的回合外,当有其他角色使用基本牌和普通锦囊牌结算后,你可以进行判定,若判定结果为【杀】,你视为对其使用【杀】,否则你获得你的判定牌,直到你的下个准备阶段,其他角色计算与你的距离时-1.',
            shdikuo: '地阔',
            shdikuo_info: '每种牌名限一次,你可以将一张手牌当任意一张基本牌和普通锦囊牌使用或打出.',
            //SH049
            shjiyuan: '急援',
            shjiyuan_info: '每回合限一次,当一名其他角色受到伤害时,若你不为伤害来源,你可以与伤害来源拼点.若你赢,你选择一项:1.防止此伤害;2.你对伤害来源造成1点伤害.若你没赢,你受到1点伤害并摸一张牌.',
            shdihe: '地阖',
            shdihe_info: '出牌阶段限一次,你可以失去1点体力并选择一名角色,该角色下次受到其他角色使用【杀】或【决斗】而造成的伤害时,防止之.',
            //SH050
            shjielue: '劫掠',
            shjielue_info: '一名角色的结束阶段,你可以进行判定.若判定结果为♠️️,你可以随机获得其的一张手牌.',
            shzhazhai: '扎寨',
            shzhazhai_info: '限定技,出牌阶段,你可以弃置全部牌并摸等于你体力值数张牌,你将位置换到任意两名角色之间并翻面(不改变当前轮次回合顺序).',
            shdiqiang: '地强',
            shdiqiang_info: '每回合限一次,当一名其他角色使用牌指定目标后,若该角色与目标角色的距离大于该角色与你的距离,你可以令其选择一项:1.交给你一张牌;2.受到1点伤害.',
            //SH051
            shtanshao: '探哨',
            shtanshao_info: '出牌阶段限一次,你可以令至多四名角色各展示一张手牌,你进行判定,若一名角色展示的手牌与判定结果花色相同,则其需弃置展示牌外的一张牌,否则受到1点伤害.',
            shdian: '地暗',
            shdian_info: '出牌阶段至多两名角色各限一次,你可以弃置一张手牌并指定一名有手牌的其他角色,猜测其所有手牌的牌名,根据猜中的数量依次执行:一张,你摸一张牌;两张,你弃置其一张手牌;三张,你对其造成1点伤害;四张,你获得其一张牌;五张及以上,令其翻面.',
            //SH052
            shfengchi: '风驰',
            shfengchi_info: '出牌阶段限一次,你可以弃置任意张花色各不相同的<轴>并对一名角色造成等量伤害.',
            shdizhou: '地轴',
            shdizhou_info: '一名角色的准备阶段,你可以弃置一张牌,进行判定并将判定牌置于武将牌上,称为<轴>.',
            //SH053
            shsuanchou: '算筹',
            shsuanchou_info: '准备阶段,你可以并将牌堆顶的至多三张牌置于你的武将牌上,称为<数>(你至多拥有四张).',
            shshuli: '数理',
            shshuli_info: '出牌阶段,你可以弃置任意张手牌和<数>,若你弃置牌的点数通过四则运算后等于你的体力值,你选择一项:1.对一名角色造成1点伤害;2.弃置一名角色区域里的两张牌;3.回复1点体力.',
            shdihui: '地会',
            shdihui_info: '当你使用或弃置牌时,若此牌点数与至少两张<数>的点数能通过四则运算形成等式,你可以摸一张牌.',
            //SH054
            shwuer: '无二',
            shwuer_info: '锁定技,当你使用【杀】指定一个目标后,目标角色需要依次使用X张【闪】响应(X为游戏轮数).',
            shdizuo: '地佐',
            shdizuo_info: '出牌阶段限X次,你可以使用视为使用一张【杀】(X为游戏轮数).',
            //SH055
            shhujun: '护军',
            shhujun_info: '游戏开始时,你获得1枚<中军>标记.出牌阶段限一次,你可以将场上的<中军>转移给另一名角色.其他有<中军>的角色受到伤害时,你可以代替其承受此伤害并对伤害来源造成1点伤害.',
            shdiyou: '地佑',
            shdiyou_info: '锁定技,当你受到伤害后,你摸一张牌,有<中军>的角色摸一张牌.',
            //SH056
            shfuming: '扶命',
            shfuming_info: '出牌阶段限一次,你可以失去1点体力或减少1点体力上限,令一名其他角色回复1点体力.',
            shjianti: '健体',
            shjianti_info: '当你令一名角色回复体力时,若回复值不小于该角色的体力值,你令其获得<健>标记.有<健>的角色受到伤害时,其可以移去<健>并令此伤害-1.',
            shdiling: '地灵',
            shdiling_info: '每回合限一次,当你使用【桃】时,你可以令此牌的回复值+1.',
            //SH057
            shyuma: '御马',
            shyuma_info: '出牌阶段,你可以将一张坐骑牌当做任意即时牌使用或打出.',
            shxiangju: '相驹',
            shxiangju_info: '出牌阶段限一次,当你使用牌指定目标后,你获得目标角色装备区内的坐骑牌.',
            shdishou: '地兽',
            shdishou_info: '锁定技,你的坐骑牌不计入手牌限制.你不会因非使用外的效果失去坐骑牌.',
            //SH058
            shzhengyan: '争艳',
            shzhengyan_info: '出牌阶段限一次,你可以失去1点体力并对一名角色造成1点伤害.',
            shjinghan: '精悍',
            shjinghan_info: '锁定技,当你于每回合首次造成伤害和失去体力后,你摸一张牌.',
            shbuyu: '不渝',
            shbuyu_info: '觉醒技,当你受到女性角色造成的伤害而进入濒死状态时,你减少1点体力上限并将体力回复至上限,修改<地微>.',
            shdiweixin: '地微',
            shdiweixin_info: '锁定技,你不能对女性角色使用【杀】或【决斗】.',
            shdiweixin_rewrite: '地微',
            shdiweixin_rewrite_info: '锁定技,你对女性角色使用【杀】或【决斗】造成的伤害+1.',
            //SH059
            shqianzi: '倩姿',
            shqianzi_info: '每回合限一次,你可以视为使用或打出一张【闪】.',
            shchansheng: '缠绳',
            shchansheng_info: '结束阶段,你可以弃置全部手牌,令一名与你距离不大于1的其他角色跳过其的下个出牌和弃牌阶段.',
            shdihuixin: '地彗',
            shdihuixin_info: '锁定技,你的回合外,当一名角色使用锦囊牌指定你为目标后,你摸一张牌.',
            //SH060
            shdiansi: '点死',
            shdiansi_info: '出牌阶段限两次,你可以失去1点体力,将一张手牌置于一名角色的武将牌上,称为<死>.',
            shsuoming: '索命',
            shsuoming_info: '当你受到伤害后,你可以将牌堆顶的一张牌当做<死>置于伤害来源的武将牌上.',
            shdibao: '地暴',
            shdibao_info: '锁定技,当一名角色受到你造成的伤害后,其移去所有的<死>.你对有<死>的角色造成的伤害+X(X为其拥有<死>的数量).',
            //SH061
            shchaowu: '朝雾',
            shchaowu_info: '准备阶段,你可以弃置一张牌并进行判定,若判定结果为♥️️,你对一名角色造成1点火焰伤害.',
            shchaowu_rewrite: '朝雾',
            shchaowu_rewrite_info: '准备阶段,你可以弃置一张牌并对一名角色造成1点火焰伤害.',
            shmuai: '暮霭',
            shmuai_info: '结束阶段,你可以弃置一张牌并进行判定,若判定结果为♠️️,你对一名角色造成1点雷电伤害.',
            shmuai_rewrite: '暮霭',
            shmuai_rewrite_info: '结束阶段,你可以弃置一张牌并对一名角色造成1点雷电伤害.',
            shpingmo: '凭魔',
            shpingmo_info: '觉醒技,若你连续三次使用<地然>猜测正确,你摸两张牌,你修改<朝雾>和<暮霭>.',
            shdiran: '地然',
            shdiran_info: '一名角色判定时,你可以猜测其判定牌的花色,若你猜测正确,你可以更改此判定牌的牌名、花色与点数.',
            //SH062
            shmaosu: '昴宿',
            shmaosu_info: '摸牌阶段开始时,你可以改为使用一张【五谷丰登】,令所有因此法获得牌的其他角色依次选择一项执行:1.交给你一张手牌;2.视为你对其使用【杀】.',
            shdichang: '地猖',
            shdichang_info: '当你使用的【杀】被【闪】抵消时,你可以视为对目标角色使用一张【决斗】.',
            //SH063
            shzhuaya: '爪牙',
            shzhuaya_info: '当你使用【杀】指定目标时,你可以将一张手牌交给攻击范围内包含目标角色的另一名其他角色,令其除非对目标角色使用一张【杀】,否则须交给你你交给其的手牌外的一张手牌.',
            shdikuang: '地狂',
            shdikuang_info: '出牌阶段限一次,你可以交给一名其他角色一张手牌,令其选择一项:1.对你使用【杀】;2.对你使用【决斗】;3.弃置一张手牌.若其未以此法对你造成伤害,你摸三张牌.',
            //SH064
            shfeidao: '飞刀',
            shfeidao_info: '游戏开始时,你获得24枚<飞刀>标记.出牌阶段限两次,当你使用伤害牌指定目标后,你可以移除等于此牌点数枚<飞刀>标记,并令目标需打出一张【闪】,否则其受到1点伤害.',
            shmanpai: '蛮牌',
            shmanpai_info: '锁定技,【南蛮入侵】和【万箭齐发】对你无效.',
            shdifei: '地飞',
            shdifei_info: '准备阶段,你可以跳过出牌阶段和弃牌阶段.若如此做,你的下个出牌阶段结束后,你执行两个额外出牌阶段.',
            //SH065
            shbiaoqiang: '标枪',
            shbiaoqiang_info: '游戏开始时,你获得24枚<标枪>标记.当一名角色使用牌指定你为目标后,你可以移除等于此牌点数枚<标枪>标记,并令目标打出一张【闪】,否则其受到1点伤害.',
            shtuanpai: '团牌',
            shtuanpai_info: '锁定技,与你的距离不小于2的角色不能对你使用【杀】和【决斗】.',
            shdizou: '地走',
            shdizou_info: '准备阶段,你可以跳过出牌阶段.若如此做,你的下个摸牌阶段多摸两张牌且跳过下个弃牌阶段.',
            //SH066
            shkezhang: '刻章',
            shkezhang_info: '游戏开始时,你将牌堆顶的三张牌置于武将牌上,称为<章>.出牌阶段限一次,你可以用任意张手牌交换等量的<章>.',
            shtuoyin: '拓印',
            shtuoyin_info: '一名角色使用的非转化普通锦囊牌结算后,你可以将一张<章>当做此牌使用(须与此牌的牌名、花色或点数任一项相同).',
            shdiqiao: '地巧',
            shdiqiao_info: '限定技,出牌阶段,若你没有<章>,你可以将所有手牌置于武将牌上,称为<章>.',
            //SH067
            shxiangdi: '响笛',
            shxiangdi_info: '准备阶段,你可以失去1点体力,选择一项:1.令至多三名角色于其各自的下一个出牌阶段第一次造成的伤害+1;2.令至多两名角色于其各自的下一个结束阶段回复1点体力.',
            shdiming: '地明',
            shdiming_info: '锁定技,你失去1点体力时,你观看牌堆顶部的三张牌并获得其中一张,将剩余的牌置入弃牌堆.',
            //SH068
            shjiaoku: '蛟窟',
            shjiaoku_info: '当一名角色跳过摸牌阶段和出牌阶段时,你可以弃置两张牌令该角色选择一项:1.弃置一张装备牌;2.受到1点伤害;背水:对你造成1点伤害.',
            shqianyuan: '潜渊',
            shqianyuan_info: '摸牌阶段,你可以多摸两张牌,若如此做,你跳过下个出牌阶段和弃牌阶段.',
            shdijin: '地进',
            shdijin_info: '每轮限一次,当你于回合外受到伤害后,你可以摸一张牌并执行一个额外出牌阶段.',
            //SH069
            shshenlou: '蜃楼',
            shshenlou_info: '每名角色的出牌阶段限一次,当该角色使用牌时,你可以打出一张牌代替之.',
            shfuhai: '覆海',
            shfuhai_info: '限定技,出牌阶段,你可以令所有角色弃置装备区内的所有牌.',
            shditui: '地退',
            shditui_info: '每回合限一次,当你受到伤害时,你摸一张牌并防止此伤害.',
            //SH070
            shyangfan: '扬帆',
            shyangfan_info: '准备阶段,你可以令所有角色各摸一张牌.',
            shlinghang: '领航',
            shlinghang_info: '出牌阶段限一次,你可以弃置一张牌并选择一名其他角色,令除你和该角色以外的所有角色依次执行一项:1.对该角色使用一张【杀】;2.交给你一张手牌并视为对该角色使用【杀】;背水:对你造成1点伤害.',
            shdiman: '地满',
            shdiman_info: '锁定技,你的手牌上限+X(X为全场手牌数不小于体力值的角色数).',
            //SH071
            shzhijin: '织锦',
            shzhijin_info: '出牌阶段,你可以展示并强化一张防具牌,你可以将此牌交给一名角色.当你受到属性伤害后,你失去1点体力.',
            shzhikai: '制铠',
            shzhikai_info: '出牌阶段限一次,你可以弃置一张手牌,并根据此牌的花色,获得一张防具牌.此牌进入弃牌堆时,将其移出游戏.',
            shmingzhe: '明哲',
            shmingzhe_info: '锁定技,若你没有装备防具牌,你于摸牌阶段多摸一张牌且你的手牌上限-2.',
            shdisui: '地遂',
            shdisui_info: '当你处于进入状态时,你可以弃置一张防具牌,将体力回复至1点并摸两张牌.',
            //SH072
            shliqiang: '立枪',
            shliqiang_info: '出牌阶段限一次,你可以将一张【杀】或【闪】扣置,你令一名其他角色需打出一张【杀】或【闪】,否则其受到1点伤害.若目标角色打出牌与你扣置的牌牌名:相同,你与其各摸一张牌;不同:你摸一张牌.结算完成后,你弃置扣置的牌.',
            shdizhouxin: '地周',
            shdizhouxin_info: '出牌阶段限一次,你可以弃置一张牌并选择一名其他角色,令除你和该角色以外的所有角色依次执行一项:1.对该角色使用一张【杀】;2.交给你一张手牌并视为对该角色使用【杀】;背水:对你造成1点伤害.',
            //SH073
            shhengdao: '横刀',
            shhengdao_info: '出牌阶段限一次,你可以选择一张【杀】或【闪】,你令一名其他角色需打出一张【杀】或【闪】,否则其弃置一张牌.若该角色打出牌与你选择的牌牌名:相同,其计算与其他角色的距离-1直至其下个结束阶段;不同:其计算与其他角色的距离+1直至其下个结束阶段.',
            shfuji: '伏击',
            shfuji_info: '锁定技,当你于出牌阶段首次对一名角色造成伤害时,若你不在其攻击范围内,该伤害+1.',
            shdiyin: '地隐',
            shdiyin_info: '锁定技,当你成为一名角色使用牌的自标时,若你不在其攻击范围内,则此牌对你无效.其他角色计算与你的距离时+1.',
            //SH074
            shpouxin: '剖心',
            shpouxin_info: '你使用【杀】指定目标时,你可以进行判定.若判定结果为为♥️️,此【杀】伤害+1.若判定结果为为♦️️,此【杀】不能被响应.',
            shxuexian: '血涎',
            shxuexian_info: '一名角色的判定牌生效前,你可以打出一张红色基本牌代替之,若如此做,你摸一张牌.',
            shdiyi: '地异',
            shdiyi_info: '每回合限一次,当你受到伤害后,你可以进行判定,若判定结果为红色,你回复1点体力.',
            //SH075
            shyinglei: '营垒',
            shyinglei_info: '游戏开始时,你可以将任意张手牌置于你的武将牌上,称为<垒>.当你拥有<垒>时,摸牌阶段改为摸X张牌,跳过弃牌阶段,结束阶段你将手牌弃至X张,其他角色计算与你的距离+1(X为你拥有<垒>的数量).',
            shjianbi: '坚壁',
            shjianbi_info: '准备阶段,你可以至多两张手牌当做<垒>置于你的武将牌上.',
            shqingye: '清野',
            shqingye_info: '出牌阶段限一次,你可以移去一张<垒>并视为使用一张【杀】.',
            shdili: '地理',
            shdili_info: '锁定技,当你受到伤害时,你移去一张<垒>并令此伤害-2.当你失去最后一张<垒>时,你失去1点体力.',
            //SH076
            shbeixi: '备席',
            shbeixi_info: '出牌阶段,你可以弃置一张牌,选择一项:1.令X名角色各摸一张牌;2.令一名角色摸X张牌(X为你的体力上限且至多为5).',
            shkaiyan: '开宴',
            shkaiyan_info: '限定技,出牌阶段,你将所有角色的手牌收集起来并打乱,按顺序依次分配给一名角色一张牌并循环此流程直到所有牌都分配完毕.',
            shdijun: '地俊',
            shdijun_info: '结束阶段,若你上一轮未受到过伤害,你选择一项:1.回复1点体力;2.增加1点体力上限.',
            //SH077
            shchenqing: '陈情',
            shchenqing_info: '出牌阶段每名角色限一次,你可以令一名其他角色选择一项:1.令你摸一张牌;2.摸一张牌并交给你一张手牌.',
            shqiaoshuo: '巧说',
            shqiaoshuo_info: '出牌阶段每名角色限一次,你可以交给一名其他角色一张手牌并令其使用你交给其的手牌.',
            shdiyue: '地乐',
            shdiyue_info: '锁定技,当一名其他角色对你造成伤害后,其需弃置一张牌,否则你回复1点体力.',
            //SH078
            shfeiqiang: '飞枪',
            shfeiqiang_info: '摸牌阶段,你可以少摸一张牌,将牌堆顶的一张牌置于你的武将牌上,称为<枪>.每回合限一次,若你的手牌没有【杀】,你可以将一张<枪>当【杀】使用或打出.',
            shdijiexin: '地捷',
            shdijiexin_info: '锁定技,当你使用【杀】被【闪】响应时,你令目标角色选择一项:1.受到1点伤害;2.本回合不能响应你使用的牌.',
            //SH079
            shfeicha: '飞叉',
            shfeicha_info: '准备阶段,你可以跳过摸牌阶段,将牌堆顶的两张牌置于你的武将牌上,称为<叉>.你可以将一张<叉>当【杀】使用.',
            shdisu: '地速',
            shdisu_info: '每轮限一次,一名角色的出牌阶段开始前,你可以执行一个额外的出牌阶段.',
            //SH080
            shpingwei: '凭威',
            shpingwei_info: '出牌阶段开始时,你可以跳过出牌阶段并失去1点体力,令一名角色执行一个额外的摸牌阶段和出牌阶段.',
            shzuochang: '作怅',
            shzuochang_info: '每回合限一次,当一名角色使用牌指定你为目标时,你可以弃置一张牌并令其将目标转移给你攻击范围内的另一名角色.',
            shdizhen: '地镇',
            shdizhen_info: '锁定技,你与你相邻的两名角色的摸牌阶段多摸一张牌.',
            //SH081
            shroujue: '肉攫',
            shroujue_info: '游戏开始时,你获得3枚<肉攫>标记.准备阶段,你可以将1枚<肉攫>交给一名已受伤的其他角色.',
            shdaocu: '万俎',
            shdaocu_info: '’锁定技,你对有<肉攫>的角色造成的伤害+1.当有<肉攫>的角色死亡时,你回复1点体力.',
            shdiji: '地稽',
            shdiji_info: '一名角色的弃牌阶段结束后,你可以获得其弃置的一张牌.',
            //SH082
            shdingtian: '顶天',
            shdingtian_info: '结束阶段,你可以失去1点体力,令所有其他角色选择一项:1.令你回复1点体力;2.使用或打出一张基本牌.',
            shdimo: '地魔',
            shdimo_info: '锁定技,准备阶段,所有角色需依次弃置一张基本牌,否则该角色受到1点伤害.',
            //SH083
            shlidi: '立地',
            shlidi_info: '准备阶段,你可以失去1点体力,令所有其他角色选择一项:1.令你回复1点体力;2.使用或打出一张基本牌.',
            shdiyao: '地妖',
            shdiyao_info: '锁定技,结束阶段,所有角色需依次弃置一张基本牌,否则该角色受到1点伤害.',
            //SH084
            shyizhu: '义助',
            shyizhu_info: '当一名与你距离不大于2的角色受到伤害后,你可以摸一张牌并对伤害来源使用一张【杀】.',
            shchandou: '缠斗',
            shchandou_info: '锁定技,当你使用的牌被抵消后,你视为对目标角色使用一张【杀】(不计入次数限制).',
            shdiyouxin: '地幽',
            shdiyouxin_info: '锁定技,你计算与其他角色的距离时-X(X为你的体力值).',
            //SH085
            shbaoen: '报恩',
            shbaoen_info: '当一名角色令你回复体力后,你可以令其下一次造成的伤害+1.',
            shqingyuan: '请援',
            shqingyuan_info: '当你受到伤害后,你可以交给一名其他角色两张手牌,令其选择一项:1.令你回复1点体力;2、对伤害来源使用一张【杀】或【决斗】.',
            shdifu: '地伏',
            shdifu_info: '每回合限一次,当其他角色进入濒死状态时,若你对其发动过<报恩>,你可以令其回复2点体力,若如此做,你受到1点无来源伤害.',
            //SH086
            shhaoli: '好利',
            shhaoli_info: '每回合各限一次,①当一名其他角色进入濒死状态时,其可以交给你一张手牌并回复1点体力.②当你进入濒死状态时,若你有手牌,你回复1点体力弃置所有手牌.',
            shdipi: '地僻',
            shdipi_info: '锁定技,你计算与其他角色的距离和其他角色计算与你的距离时+X(X为场上人数).',
            //SH087
            shxise: '喜色',
            shxise_info: '出牌阶段开始时,你可以令X名其他角色选择一项:1.摸一张牌,直到你的下个准备阶段,其对你造成的伤害-1;2.令你摸一张牌,直到你的下个准备阶段,你对其造成的伤害-1.若目标角色为女性角色,其可以选择两项(X为你的体力值).',
            shdikong: '地空',
            shdikong_info: '锁定技,结束阶段,若你的装备区里没有牌,你回复1点体力.',
            //SH088
            shyelian: '冶炼',
            shyelian_info: '游戏开始时,你将一张武器牌置于武将牌上,你视为拥有此武器的技能效果.',
            shduanzao: '锻造',
            shduanzao_info: '出牌阶段限一次,你可以弃置一张装备牌,根据此牌的点数,获得一张武器牌.此牌进入弃牌堆时,将其移出游戏.',
            shliezhuang: '列装',
            shliezhuang_info: '锁定技,你的手牌上限+X(X你装备区的牌数).',
            shdigu: '地孤',
            shdigu_info: '当你受到伤害后,你可以移动场上的一张装备牌,若你以此法移动你装备区的牌,你摸两张牌.',
            //SH089
            shdiancai: '典财',
            shdiancai_info: '轮次开始时,每名角色各获得10枚<金币>.当你失去一张牌后,你获得1枚<金币>.',
            shxingshang: '行商',
            shxingshang_info: '出牌阶段,你可以展示一张手牌并进行<竞价>,竞价成功的角色交给你对应数量的<金币>并获得此牌.若没有角色进行竞价,你摸一张牌,你令此技能失效直至结束阶段.',
            shdiquan: '地全',
            shdiquan_info: '你可以移去8/12/16枚<金币>,视为使用或打出一张基本/普通锦囊/延时锦囊牌.',
            //SH090
            shdengyun: '登云',
            shdengyun_info: '准备阶段,你可以进行判定,若判定结果为:红色,你摸一张牌且出牌阶段可以多使用一张【杀】;黑色,你计算与其他角色的距离均为1直至你的下个准备阶段.',
            shdiduan: '地短',
            shdiduan_info: '当你于出牌阶段首次对与你距离不大于1的角色使用【杀】造成伤害时,此伤害+1.',
            //SH091
            shmanzhuang: '蛮撞',
            shmanzhuang_info: '出牌阶段限一次,你可以失去1点体力并视为对至多两名相邻的角色使用一张【杀】.',
            shdijiao: '地角',
            shdijiao_info: '锁定技,当你使用【杀】造成伤害后,弃置受伤角色的一张手牌.',
            //SH092
            shlianmin: '悯恤',
            shlianmin_info: '准备阶段和结束阶段,你可以令场上体力值最低的一名角色回复1点体力.',
            shhaojian: '号箭',
            shhaojian_info: '出牌阶段限一次,你可以弃置一张牌并选择一名角色,所有有手牌的其他角色选择一项:1.对该角色使用一张【杀】;2.弃置一张手牌.',
            shdiqiu: '地囚',
            shdiqiu_info: '锁定技,当你受到伤害后,你令伤害来源对你造成伤害时防止之直至其下个结束阶段.',
            //SH093
            shniangjiu: '酿酒',
            shniangjiu_info: '准备阶段或结束阶段,你可以将一张手牌置于你的武将牌上,称为<酿>.有<酿>的角色可以移去一张<酿>,视为使用一张【酒】.',
            shhaoyi: '好意',
            shhaoyi_info: '出牌阶段,你可以将一张<酿>移动至一名其他角色的武将牌上.',
            shdaixin: '歹心',
            shdaixin_info: '当一其他名角色失去张<酿>后,你可弃置一张与此<酿>颜色相同的手牌并对该角色造成1点伤害.',
            shdizang: '地藏',
            shdizang_info: '锁定技,当你失去一张<酿>后,你摸一张牌.你可以对其他角色使用【酒②】,当你对濒死状态的角色使用【酒②】时,此牌的回复值+1.',
            //SH094
            shzhuihun: '追魂',
            shzhuihun_info: '出牌阶段限一次,你可以令一名已受伤的角色选择一项:1.交给你两张牌并回复1点体力;2.摸一张牌并受到1点伤害.',
            shdiping: '地平',
            shdiping_info: '锁定技,当你造成伤害后,受伤角色失去所有非锁定技直到该角色的下个结束阶段.',
            //SH095
            shduoming: '夺命',
            shduoming_info: '每回合限一次,当有角色受到伤害后,若该角色处于你的攻击范围内,你可以对其使用一张【杀】(不计入次数限制).',
            shdisun: '地损',
            shdisun_info: '锁定技,当你对一名没有手牌且体力值为1的角色造成伤害时,其立即死亡.',
            //SH096
            shjuxing: '举刑',
            shjuxing_info: '出牌阶段限一次,你可以将一张手牌置于一名角色的判定区.',
            shzhisi: '执死',
            shzhis_info: '一名角色进行判定时,若判定结果为:红色,你可以弃置其一张牌;黑色,你可以打出一张黑色手牌并对其造成1点伤害.',
            shdinu: '地奴',
            shdinu_info: '每回合限一次,当你受到伤害后,你可以摸两张牌并交给伤害来源一张手牌,你令其选择一项:1.进行一次判定;2.令你回复1点体力.',
            //SH097
            shbitong: '碧瞳',
            shbitong_info: '摸牌阶段,若你已受伤,你可以选择一项:1.多摸一张牌;2.少摸一张牌并回复1点体力.',
            shgouzhu: '构筑',
            shgouzhu_info: '出牌阶段限一次,你可以从弃牌堆获得一张基本牌.',
            shbijiu: '避酒',
            shbijiu_info: '锁定技,当你获得【酒】后,你弃置此牌并摸两张牌.',
            shdicha: '地察',
            shdicha_info: '一名角色的准备阶段,你可以观看牌堆顶的一张牌并用一张手牌替换之.',
            //SH098
            shqinbao: '擒抱',
            shqinbao_info: '摸牌阶段开始时,你可以少摸一张牌,选择一名攻击范围内的其他角色,该角色的下个摸牌阶段少摸一张牌.',
            shtuoju: '托举',
            shtuoju_info: '出牌阶段开始时,你可以弃置一张牌,选择一名攻击范围内的其他角色,你弃置其一张牌.若本回合你对其使用过<擒抱>,你再弃置其一张牌.',
            shpaoshuai: '抛摔',
            shpaoshuai_info: '弃牌阶段开始时,你可以弃置一张牌,选择一名攻击范围内的其他角色,你对其造成1点伤害.若本回合你对其使用过<擒抱>和<托举>,此伤害+1.',
            shdie: '地恶',
            shdie_info: '锁定技,当你于一回合内连续对一名角色使用技能后,你失去1点体力.',
            //SH099
            shdushi: '赌石',
            shdushi_info: '出牌阶段限两次,你可以令一名角色选择其的一张手牌,你猜测此牌的类型、花色和点数,根据你猜中的次数依次执行:一次,你摸一张牌;两次,你获得此牌;三次,你对其造成1点伤害.若你没有猜中,你受到2点伤害.',
            shpanyan: '磐岩',
            shpanyan_info: '每回合限一次,当你受到大于1点的伤害时,你可以获得1枚<岩>标记并令此伤害-1.',
            shpanyan_rewrite: '磐岩',
            shpanyan_rewrite_info: '每回合限一次,当你受到大于1点的伤害时,你可以获得1枚<岩>标记并将此伤害改为1.',
            shdichou: '地丑',
            shdichou_info: '觉醒技,准备阶段,若你拥有至少3枚<岩>标记,你增加1点体力上限,修改<磐岩>并获得<碾压>.',
            shnianya: '碾压',
            shnianya_info: '出牌阶段,你可以移去两枚<岩>标记,令一名角色需弃置两张牌,否则该角色受到2点伤害.',
            //SH100
            shtibian: '提鞭',
            shtibian_info: '每回合限一次,当一名角色使用牌指定你为目标时,你可以摸两张牌并将其中一张交给一名其他角色.',
            shchaoqiang: '绰枪',
            shchaoqiang_info: '出牌阶段限一次,你可以令一名角色将牌摸至或弃至等同于其体力值的张数.',
            shdishu: '地数',
            shdishu_info: '结束阶段,若你的手牌数等于体力值,你可以对一名其他角色造成1点伤害.',
            //SH101
            shfuruo: '辅弱',
            shfuruo_info: '每回合限一次,你的回合外,当一名角色受到伤害时,你可以与伤害来源拼点.若你赢,你视为对其使用一张【杀】.若你没赢,目标角色摸一张牌.',
            shbiaohan: '彪悍',
            shbiaohan_info: '出牌阶段限一次,你可以与一名角色拼点.若你赢,你视为对其使用一张【杀】(不计入次数限制).若你没赢,目标角色摸一张牌.',
            shhuwei: '虎威',
            shhuwei_info: '锁定技,你对一名角色发动拼点时,你摸一张牌.你拼点使用的牌点数+X(X为你的体力值).',
            shdiyin: '地阴',
            shdiyin_info: '锁定技,你对女性角色造成的伤害+1.',
            //SH102
            shgengyun: '耕耘',
            shgengyun_info: '准备阶段,你可以弃置一张手牌,若如此做,你的下个摸牌阶段多摸两张牌.',
            shjianming: '谏命',
            shjianming_info: '出牌阶段限一次,你可以将两张手牌交给一名角色并令其选择一项:1.令你回复1点体力;2.对你指定的另一名角色使用一张【杀】.',
            shdixing: '地刑',
            shdixing_info: '当你失去所有手牌时,你可以对一名角色造成1点伤害.',
            //SH103
            shjiesha: '截杀',
            shjiesha_info: '每回合限一次,当一张【杀】进入弃牌堆时,你可以失去1点体力并获得此【杀】.',
            shshixue: '嗜血',
            shshixue_info: '出牌阶段限一次,你可以将一张【杀】当【桃】使用.',
            shdizhuang: '地壮',
            shdizhuang_info: '当你使用【杀】对一名角色造成伤害时,你可以弃置X张【杀】,令该伤害+X.',
            //SH104
            shjixing: '疾行',
            shjixing_info: '准备阶段,你可以观看牌堆顶的X张牌(X为场上其他角色数),你使用其中所有能使用的牌并将其余牌置入弃牌堆.若如此做,你结束回合.',
            shshandun: '闪遁',
            shshandun_info: '每回合限一次,当你受到伤害时,你可以弃置一张牌来防止该伤害.',
            shdilie: '地质',
            shdilie_info: '锁定技,你不能成为【顺手牵羊】的目标.锁定技,你不能成为[顺手牵羊]的目标.',
            //SH105
            shpengqi: '捧旗',
            shpengqi_info: '游戏开始时,你将牌堆顶的一张牌置于你的武将牌上,称为<旗>.你根据<旗>的花色视为拥有对应技能:♥️️,<神助>;♦️️,<倩姿>;♠️️,<咆哮>;♣️️,<冠绝>.',
            shdijian: '地健',
            shdijian_info: '准备阶段,你可以选择一名其他角色,直到你的下个准备阶段,该角色获得与你相同的<捧旗>效果.结束阶段,你可以用一张手牌替换<旗>.',
            //SH106
            shguiji: '诡计',
            shguiji_info: '出牌阶段开始时,你可以与一名有手牌的其角色交换手牌,将手牌摸至或弃至X张(X为其体力上限).',
            shjiaozha: '狡诈',
            shjiaozha_info: '每回合限一次,当一名角色使用【杀】或【决斗】指定你为目标时,你将你和与你相邻的两名角色的武将牌(不能为对你使用牌的角色)扣置并打乱,令其选择一张并将目标改为该角色.结算完成后,你将武将牌回复至使用<狡诈>前的状态.',
            shdihao: '地耗',
            shdihao_info: '锁定技,结束阶段,所有角色摸一张牌并弃置一张手牌.',
            //SH107
            shpaliang: '趴梁',
            shpaliang_info: '出牌阶段,你可以弃置一张装备牌,若如此做,你跳过弃牌阶段,直到你使用了一张牌或你的下个准备阶段你不能成为【杀】和伤害类锦囊的目标.',
            shdaojia: '盗甲',
            shdaojia_info: '出牌阶段限一次,你可以获得一名其他角色装备区里的防具牌.',
            shdizei: '地贼',
            shdizei_info: '当你失去最后一张手牌时,你可以获得一名其他角色区域里的一张牌.',
            //SH108
            shdaoma: '盗马',
            shdaoma_info: '出牌阶段限一次,你可以失去1点体力并获得一名其他角色装备区内的坐骑牌.',
            shyinhuo: '引祸',
            shyinhuo_info: '每回合限一次,当一名角色使用牌指定你为唯一目标时,你可以令另一名角色选择一项:1.令你获得其一张牌;2.其也成为目标;背水:对你造成1点伤害.',
            shdiquanxin: '地犬',
            shdiquanxin_info: '锁定技,结束阶段,若你装备坐骑牌,你回复1点体力.',
        },
        dynamicTranslate: {
            shchedian(player) {
                if (player.storage.shwulei) return '出牌阶段限一次,你可以移去一张<雷>并对一名角色造成1点雷电伤害.';
                return '出牌阶段限一次,你可以进行判定,若判定结果为♠️️,你对一名角色造成1点雷电伤害.';
            },
            shbaoxiao(player) {
                if (player.storage.shlinye) return '锁定技,你于出牌阶段使用【杀】的次数上限为X,你计算与其他角色的距离时-X(X为你的体力上限).';
                return '锁定技,你于出牌阶段使用【杀】的次数上限为X,你计算与其他角色的距离时-X(X为你已损失的体力值).';
            },
            shtianman(player) {
                if (player.storage.shchennu) return '锁定技,你的手牌上限+X(X为你的已损失体力值).';
                return '锁定技,你的手牌上限+X(X为有<庇护>角色的体力值).';
            },
            shsangmen(player) {
                if (player.storage.shdisha) return '当你使用【杀】指定目标时,你可以移去1枚<志>标记,多指定一个目标或令目标不能响应.';
                return '出牌阶段限一次,当你使用【杀】指定目标时,你可以移去1枚<志>标记,多指定一个目标或令目标不能响应.';
            },
            shdiweixin(player) {
                if (player.storage.shbuyu) return '锁定技,你对女性角色使用【杀】或【决斗】造成的伤害+1.';
                return '锁定技,你不能对女性角色使用【杀】或【决斗】.';
            },
            shchaowu(player) {
                if (player.storage.shpingmou) return '准备阶段,你可以弃置一张牌并对一名角色造成1点火焰伤害.';
                return '准备阶段,你可以弃置一张牌并进行判定,若判定结果为♥️️,你对一名角色造成1点火焰伤害.';
            },
            shmuai(player) {
                if (player.storage.shpingmo) return '结束阶段,你可以弃置一张牌并对一名角色造成1点雷电伤害.';
                return '结束阶段,你可以弃置一张牌并进行判定,若判定结果为♠️️,你对一名角色造成1点雷电伤害.';
            },
            shpanyan(player) {
                if (player.storage.shdichou) return '每回合限一次,当你受到大于1点的伤害时,你可以获得1枚<岩>标记并将此伤害改为1.';
                return '每回合限一次,当你受到大于1点的伤害时,你可以获得1枚<岩>标记并令此伤害-1.';
            },
        },
    };
    for (var i in WaterMargin.character) {
        WaterMargin.character[i][4].push('ext:无名水浒/image/' + i + '.jpg');
    }
    lib.config.characters.add('WaterMargin');
    lib.config.all.characters.add('WaterMargin');
    return WaterMargin;
});

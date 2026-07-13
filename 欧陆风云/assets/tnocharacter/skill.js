import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
/** @type { importCharacterConfig.skill } */
const skills = {
    Europa_deguoliangcang: {
        nobracket: true,
        trigger: { global: 'phaseEnd' },
        filter(event, player) {
            return player.countMark('Europa_youjiduihuodong') < 20;
        },
        forced: true,
        content() {
            player.addMark('Europa_youjiduihuodong', get.rand(1, Math.min(3, 20 - player.countMark('Europa_youjiduihuodong'))));
        },
        group: ['Europa_deguoliangcang_init', 'Europa_deguoliangcang_die'],
        subSkill: {
            init: {
                nobracket: true,
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    return event.name !== 'phase' || game.phaseNumber === 0;
                },
                forced: true,
                async content(event, trigger, player) {
                    const next = game.createEvent('Europa_openBreadLand');
                    next.player = player;
                    next.setContent(async function (event, trigger, player) {
                        ['deguoliangshixuqiu', 'dongfangjieduan', 're_wukelanweiyuan', 'wukelanfankang', 'diqufazhan', 'youjiduihuodong', 'zhilifangzhen'].forEach((skill) => player.addSkill('Europa_' + skill));
                        player.$fullscreenpop('德意志的面包篮', 'wood');
                        game.log(player, '启用了', '#g德意志的面包篮', '机制');
                    });
                    await next;
                },
            },
            die: {
                trigger: { player: ['Europa_deguoliangshixuqiu', 'useSkillAfter', 'logSkill'] },
                filter(event, player) {
                    if (event.name === 'Europa_deguoliangshixuqiu') {
                        if (event.goon) return false;
                        let history = game.getAllGlobalHistory('everything', (evt) => evt.player === player && evt.name === 'Europa_deguoliangshixuqiu');
                        history = history[history.indexOf(event) - 1];
                        return history && history.goon === false;
                    }
                    const content = get.info(event.skill).content;
                    if (!content?.toString().includes("player.addMark('Europa_youjiduihuodong'")) return false;
                    return player.countMark('Europa_youjiduihuodong') >= 20;
                },
                forced: true,
                async content(event, trigger, player) {
                    await game.me.chooseControl('ok').set('dialog', ui.create.dialog('埃里希·科赫在爆炸中严重受伤!', '<img style=width:238px src=extension/欧陆风云/image/icon/Europa_deguoliangcang.jpg>'));
                    if (Math.random() <= 0.05) {
                        player.chat('g,抢救失败');
                        await player.die();
                    } else {
                        player.chat('捡了一条命我勒个豆');
                    }
                },
            },
        },
    },
    Europa_shantoulinli: {
        nobracket: true,
        trigger: { player: 'phaseBegin' },
        forced: true,
        async content(event, trigger, player) {
            const result = await player.chooseToDiscard('he', [1, 3]).forResult();
            const num = result?.cards?.length || 0;
            if (!num) await player.loseHp();
            if (num >= 1) player.addMark('Europa_diqufazhan', 1);
            if (num >= 2) player.addMark('Europa_diqufazhan_giveliang', 1);
            if (num >= 3 && player.hasMark('Europa_youjiduihuodong')) {
                player.removeMark('Europa_youjiduihuodong', 1);
                await player.draw();
            }
        },
    },
    Europa_weijinzhileyuan: {
        nobracket: true,
        trigger: { player: 'useCardAfter' },
        filter(event, player) {
            if (!game.hasPlayer((t) => t !== player)) return false;
            return event.card && event.card.name === 'Europa_qiyi' && player.isPhaseUsing();
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2('Europa_weijinzhileyuan'), lib.filter.notMe)
                .set('ai', (target) => {
                    const player = get.player();
                    return get.damageEffect(target, player, player);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            player.addTempSkill('Europa_weijinzhileyuan_gain');
            await event.targets[0].damage();
        },
        subSkill: {
            gain: {
                charlotte: true,
                trigger: { global: 'dying' },
                filter(event, player) {
                    const evt = event.getParent('Europa_weijinzhileyuan', true);
                    return evt?.player === player && evt.targets?.includes(event.player);
                },
                forced: true,
                popup: false,
                content() {
                    player.addMark('Europa_diqufazhan', 2);
                    player.addMark('Europa_diqufazhan_giveliang', 2);
                },
            },
        },
    },
    _Europa_khChooseAudio: {
        ruleSkill: true,
        trigger: { global: ['chooseCharacterAfter', 'showCharacterAfter'] },
        filter(event, player) {
            if (_status._Europa_characerChooseAudio) return false;
            const list = ['Europa_tno_ailixikezi'];
            return game.hasPlayer((target) => ['name', 'name2'].some((name) => list.includes(target[name])));
        },
        forced: true,
        popup: false,
        firstDo: true,
        content() {
            _status._Europa_characerChooseAudio = true;
            lib.config.background_music = 'music_custom';
            lib.config.background_music_src = ui.backgroundMusic.src = `extension/欧陆风云/audio/effect/华屋丘墟.mp3`;
        },
    },
    Europa_deguoliangshixuqiu: {
        nobracket: true,
        init(player) {
            var wklbtn = ui.create.div('.wklbtn', document.body);
            wklbtn.addEventListener('click', function () {
                var wkldialog = ui.create.div('.wkldialog', document.body);
                var fazhannum;
                if (player.countMark('Europa_diqufazhan') > 0) {
                    fazhannum = player.countMark('Europa_diqufazhan');
                } else {
                    fazhannum = '0';
                }
                var wkldiqufazhan = ui.create.div('.wkldiqufazhan', fazhannum, wkldialog);
                ui._wkldialogbx_ = true;
                var wklditu = ui.create.div('.wklditu', document.body);
                ui._bigwkldialog_ = function () {
                    if (ui._wkldialogbx_ != true) return;
                    ui._wkldialogbx_ = false;
                    ui._changewkldialog_ = ui._smallwkldialog_;
                    wkldialog.style.transform = 'scale(1.5)';
                };
                ui._changewkldialog_ = ui._bigwkldialog_;
                ui._smallwkldialog_ = function () {
                    if (ui._wkldialogbx_ == true) return;
                    ui._wkldialogbx_ = true;
                    ui._changewkldialog_ = ui._bigwkldialog_;
                    wkldialog.style.transform = '';
                };
                wkldialog.addEventListener('click', function () {
                    ui._changewkldialog_();
                });
                wklditu.addEventListener('click', function () {
                    wkldialog.remove();
                    wklditu.remove();
                });
            });
        },
        trigger: { global: 'roundStart' },
        filter(event, player) {
            return game.roundNumber > 1;
        },
        forced: true,
        async content(event, trigger, player) {
            const goon = (event.goon = player.countMark('Europa_diqufazhan_liang') >= player.countMark(event.name));
            player.removeMark('Europa_diqufazhan_liang', player.countMark(event.name));
            player.addMark(event.name, 12);
            const targets = game
                .getAllGlobalHistory('everything', (evt) => {
                    return evt.name === 'Europa_openGroReich';
                })
                .reduce((list, evt) => list.add(evt.player), []);
            if (goon) {
                player.popup('指标达成', 'wood');
                game.log(player, '#g完成了粮食指标');
                await player.draw(3);
                const cards = player.getCards('h', (card) => card.name === 'Europa_qiyi' && lib.filter.cardDiscardable(card, player));
                if (cards.length) await player.discard(cards);
                if (targets.length) {
                    player.line(targets);
                    for (var i of targets) await i.recover();
                }
            } else {
                player.popup('指标失败', 'fire');
                game.log(player, '#y未完成粮食指标');
                await player.loseHp(2);
                const num = player.countMark('Europa_youjiduihuodong');
                if (num < 20) player.addMark('Europa_youjiduihuodong', Math.min(5, 20 - num));
                if (targets.length) {
                    for (var i of targets) {
                        i.line(player);
                        await player.damage(1, i);
                    }
                }
            }
        },
        marktext: '求',
        intro: {
            name: '粮食指标',
            content: '当前拥有#点粮食指标',
        },
        group: 'Europa_deguoliangshixuqiu_init',
        subSkill: {
            init: {
                nobracket: true,
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    return event.name !== 'phase' || game.phaseNumber === 0;
                },
                forced: true,
                content() {
                    player.addMark('Europa_deguoliangshixuqiu', 36);
                },
            },
        },
    },
    Europa_dongfangjieduan: {
        mod: {
            maxHandcard(player, num) {
                return num + player.maxHp;
            },
        },
        nobracket: true,
        trigger: { player: 'phaseEnd' },
        forced: true,
        async content(event, trigger, player) {
            await player.draw(2);
            const num = player.countMark('Europa_youjiduihuodong');
            if (num < 20) player.addMark('Europa_youjiduihuodong', 1);
            if (player.countMark('Europa_diqufazhan') < 12 || player.countMark('Europa_youjiduihuodong') >= 15) {
                await player.loseHp();
                trigger.phaseList.splice(trigger.num, 0, 'phaseUse|' + event.name);
            }
        },
    },
    Europa_wukelanweiyuan: {
        nobracket: true,
        trigger: { player: 'Europa_qiyiBegin' },
        filter(event, player) {
            return player.hasCard((card) => lib.filter.cardDiscardable(card, player), 'h');
        },
        check(event, player) {
            return get.damageEffect(player, player, player) <= get.effect(player, { name: 'guohe_copy', position: 'h' }, player, player);
        },
        content() {
            trigger.setContent(function () {
                player.chooseToDiscard('h', true);
            });
        },
    },
    Europa_re_wukelanweiyuan: {
        nobracket: true,
        inherit: 'Europa_wukelanweiyuan',
        check(event, player) {
            const num = player.getCards('h', (card) => lib.filter.cardDiscardable(card, player));
            return get.damageEffect(player, player, player) <= get.effect(player, { name: 'guohe_copy', position: 'h' }, player, player) * Math.min(2, num);
        },
        content() {
            trigger.setContent(function () {
                player.chooseToDiscard('h', 2, true);
            });
        },
    },
    Europa_wukelanfankang: {
        nobracket: true,
        trigger: { player: 'damageEnd' },
        filter(event, player) {
            return event.card?.name === 'Europa_qiyi' || event.parent.name === 'g_Europa_qiyi';
        },
        forced: true,
        content() {
            player.loseMaxHp();
        },
    },
    Europa_diqufazhan: {
        mod: {
            maxHandcard(player, num) {
                return num + Math.floor(player.countMark('Europa_diqufazhan') / 3);
            },
        },
        nobracket: true,
        trigger: { player: 'phaseDrawBegin2' },
        filter(event, player) {
            return !event.numFixed && Math.floor(player.countMark('Europa_diqufazhan') / 3) > 0;
        },
        forced: true,
        content() {
            trigger.num += Math.floor(player.countMark('Europa_diqufazhan') / 3);
        },
        marktext: '展',
        intro: {
            name: '地区发展度',
            content: '当前拥有#点地区发展度',
        },
        group: 'Europa_diqufazhan_init',
        subSkill: {
            init: {
                nobracket: true,
                trigger: {
                    global: ['phaseBefore', 'phaseEnd'],
                    player: 'enterGame',
                },
                filter(event, player, name) {
                    if (name === 'phaseEnd') return player.hasMark('Europa_diqufazhan_giveliang');
                    return event.name !== 'phase' || game.phaseNumber === 0;
                },
                forced: true,
                content() {
                    if (event.triggername === 'phaseEnd') {
                        player.addMark('Europa_diqufazhan_liang', player.countMark('Europa_diqufazhan_giveliang'));
                    } else {
                        player.addMark('Europa_diqufazhan', 5);
                        player.addMark('Europa_diqufazhan_giveliang', 3);
                    }
                },
            },
            giveliang: {
                nobracket: true,
                marktext: '产',
                intro: {
                    name: '粮食产出能力',
                    content: '当前拥有#点粮食产出能力',
                },
            },
            liang: {
                marktext: '粮',
                intro: {
                    name: '粮',
                    content: '当前拥有#个<粮>',
                },
            },
        },
    },
    Europa_youjiduihuodong: {
        nobracket: true,
        trigger: { player: 'useCard' },
        filter(event, player) {
            return event.card && event.card.name === 'Europa_qiyi' && ['Europa_diqufazhan', 'Europa_diqufazhan_giveliang'].some((mark) => player.hasMark(mark));
        },
        forced: true,
        async content(event, trigger, player) {
            let result;
            if (!player.hasMark('Europa_diqufazhan')) result = { index: 1 };
            else if (!player.hasMark('Europa_diqufazhan_giveliang')) result = { index: 0 };
            else
                result = await player
                    .chooseControl()
                    .set('choiceList', ['失去1点地区发展度', '失去3点粮食产出能力'])
                    .set('prompt', '游击队活动:请选择一项')
                    .set('ai', () => {
                        const player = get.player();
                        return player.countMark('Europa_diqufazhan') - 1 > player.countMark('Europa_diqufazhan_giveliang') / 3 - 1 ? 0 : 1;
                    })
                    .forResult();
            if (result.index === 0) player.removeMark('Europa_diqufazhan', 1);
            else player.removeMark('Europa_diqufazhan_giveliang', 3);
        },
        marktext: '动',
        intro: {
            name: '游击队活跃度',
            content: '当前拥有#点游击队活跃度',
        },
        group: 'Europa_youjiduihuodong_init',
        subSkill: {
            init: {
                nobracket: true,
                trigger: {
                    global: ['phaseBefore', 'roundStart'],
                    player: 'enterGame',
                },
                filter(event, player, name) {
                    const num = player.countMark('Europa_youjiduihuodong');
                    if (name === 'roundStart') return game.phaseNumber > 1 && Math.floor(num / 5) > 0;
                    if (num >= 20) return false;
                    return event.name !== 'phase' || game.phaseNumber === 0;
                },
                forced: true,
                content() {
                    const num = player.countMark('Europa_youjiduihuodong');
                    if (event.triggername === 'roundStart') {
                        player.gain(
                            Array.from({ length: Math.floor(num / 5) }).map(() => {
                                return game.createCard('Europa_qiyi', lib.suit.randomGet(), get.rand(1, 13));
                            }),
                            'gain2'
                        );
                    } else {
                        if (num < 20) player.addMark('Europa_youjiduihuodong', Math.min(3, 20 - num));
                    }
                },
            },
        },
    },
    Europa_zhilifangzhen: {
        enable: 'phaseUse',
        filter(event, player) {
            return lib.skill.Europa_zhilifangzhen.derivation.some((item) => lib.skill[item].cost(player));
        },
        usable: 1,
        async content(event, trigger, player) {
            let choosed = [];
            while (lib.skill.Europa_zhilifangzhen.derivation.some((item) => !choosed.includes(item) && lib.skill[item].cost(player))) {
                let list = lib.skill.Europa_zhilifangzhen.derivation.filter((item) => {
                    return !choosed.includes(item) && lib.skill[item].cost(player);
                });
                if (choosed.length) list.push('cancel2');
                const choice = await player
                    .chooseControl(list)
                    .set(
                        'choiceList',
                        list
                            .filter((item) => item !== 'cancel2')
                            .map((item) => {
                                return '<div class="skill">【' + get.translation(lib.translate[item + '_ab'] || get.translation(item).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(item, player) + '</div>';
                            })
                    )
                    .set('displayIndex', false)
                    .set('prompt', '治理方针:请选择你想执行的选项')
                    .set('ai', () => {
                        return get.event().controls.randomGet();
                    })
                    .forResult('control');
                if (choice && choice !== 'cancel2') {
                    choosed.add(choice);
                    await lib.skill[choice].content(player);
                } else break;
            }
        },
        derivation: ['开垦农田', '农业机械化', '减少食物补给', '武装当地警察', '修建隔离哨所', '出动党卫军警察部队'].map((i) => 'Europa_zhilifangzhen_' + i),
        ai: {
            order: 1,
            result: { player: 1 },
        },
        subSkill: {
            hand: {
                charlotte: true,
                intro: { content: '手牌上限-#' },
                mod: {
                    maxHandcard(player, num) {
                        return num - player.countMark('Europa_zhilifangzhen_hand');
                    },
                },
                markimage: 'image/card/handcard.png',
            },
            开垦农田: {
                cost(player) {
                    return player.countMark('Europa_diqufazhan') >= 3;
                },
                async content(player) {
                    player.removeMark('Europa_diqufazhan', 3);
                    player.addMark('Europa_diqufazhan_giveliang', 2);
                    const num = player.countMark('Europa_youjiduihuodong');
                    if (num < 20) player.addMark('Europa_youjiduihuodong', 1);
                },
            },
            农业机械化: {
                cost(player) {
                    return player.countCards('h', (card) => lib.filter.cardDiscardable(card, player)) >= 3;
                },
                async content(player) {
                    await player.chooseToDiscard(3, 'h', true);
                    player.addMark('Europa_diqufazhan', 6);
                    player.addMark('Europa_diqufazhan_giveliang', 5);
                },
            },
            减少食物补给: {
                cost: () => true,
                async content(player) {
                    player.addTempSkill('Europa_zhilifangzhen_hand');
                    player.addMark('Europa_zhilifangzhen_hand', 2);
                    player.addMark('Europa_diqufazhan', 1);
                    player.addMark('Europa_diqufazhan_giveliang', 1);
                    const num = player.countMark('Europa_youjiduihuodong');
                    if (num < 20) player.addMark('Europa_youjiduihuodong', 1);
                },
            },
            武装当地警察: {
                cost(player) {
                    return (
                        player.hasCard((card) => {
                            return get.type(card) === 'equip' && lib.filter.cardDiscardable(card, player);
                        }, 'he') && player.countMark('Europa_youjiduihuodong') >= 5
                    );
                },
                async content(player) {
                    await player.chooseToDiscard('he', { type: 'equip' }, true);
                    player.removeMark('Europa_youjiduihuodong', 5);
                    await player.gain(game.createCard('Europa_qiyi', lib.suit.randomGet(), get.rand(1, 13)), 'gain2');
                },
            },
            修建隔离哨所: {
                cost(player) {
                    return player.countMark('Europa_diqufazhan') >= 2 && player.countMark('Europa_diqufazhan_giveliang') >= 2 && player.countMark('Europa_youjiduihuodong') >= 3;
                },
                async content(player) {
                    player.removeMark('Europa_diqufazhan', 2);
                    player.removeMark('Europa_diqufazhan_giveliang', 2);
                    player.removeMark('Europa_youjiduihuodong', 3);
                    await player.changeHujia(2);
                },
            },
            出动党卫军警察部队: {
                cost(player) {
                    return player.countCards('h', (card) => lib.filter.cardDiscardable(card, player)) >= 2 && player.countMark('Europa_youjiduihuodong') >= 15 && player.hasMark('Europa_diqufazhan');
                },
                async content(player) {
                    await player.chooseToDiscard(2, true, 'h');
                    player.removeMark('Europa_youjiduihuodong', 15);
                    player.clearMark('Europa_diqufazhan');
                },
            },
        },
    },
    _Europa_characerChooseFilter: {
        ruleSkill: true,
        trigger: {
            player: ['chooseButtonBegin', 'enterGame'],
            global: 'gameStart',
        },
        filter(event, player, name) {
            if (event.name === 'chooseButton') return event.parent.name === 'chooseCharacter';
            const map = lib.skill._Europa_characerChooseFilter.getList;
            return ['name', 'name1', 'name2'].some((name) => {
                return Object.keys(map).some(
                    (identity) =>
                        !(() => {
                            if (identity === 'zhu') return get.zhu(player) === player;
                            return player.identity === identity;
                        })() && map[identity].includes(player[name])
                );
            });
        },
        forced: true,
        popup: false,
        firstDo: true,
        forceLoad: true,
        content() {
            if (trigger.name === 'chooseButton') {
                if (!_status.characterlist) lib.skill.pingjian.initList();
                const names = ['Europa_tno_atuersaisiyinkuate', 'Europa_tno_ailixikezi'].filter((name) => _status.characterlist.includes(name));
                if (names.length) {
                    const zhu = get.zhu(player),
                        map = lib.skill._Europa_characerChooseFilter.getList;
                    if (
                        zhu &&
                        ['name', 'name1', 'name2'].some((name) => {
                            return map.zhu.includes(zhu[name]) && get.character(zhu[name])?.skills?.some((skill) => lib.translate[skill + '_info'].includes('启用<大日耳曼帝国>机制'));
                        })
                    ) {
                        const parentNode = Array.isArray(dialog.buttons) && dialog.buttons[0] ? dialog.buttons[0].parentElement : a.querySelector('.buttons');
                        if (!parentNode.querySelector('.Europa_characerChooseFilter')) {
                            for (const name of names) {
                                let EuropaButton = ui.create.button(name, 'characterx', parentNode);
                                EuropaButton.classList.add('Europa_characerChooseFilter');
                                if (Array.isArray(dialog.buttons)) dialog.buttons.push(EuropaButton);
                                game.uncheck();
                                game.check();
                            }
                        }
                    }
                }
                const filter =
                    trigger.filterButton ||
                    function () {
                        return true;
                    };
                trigger.set('originalFilter', filter);
                trigger.set('filterButton', (button) => {
                    if (!get.event().originalFilter(button)) return false;
                    const player = get.player(),
                        map = lib.skill._Europa_characerChooseFilter.getList;
                    return !Object.keys(map).some(
                        (identity) =>
                            !(() => {
                                if (identity === 'zhu') return get.zhu(player) === player;
                                return player.identity === identity;
                            })() && map[identity].includes(button.link)
                    );
                });
            } else {
                const map = lib.skill._Europa_characerChooseFilter.getList;
                const names = ['name', 'name1', 'name2'].filter((name) => {
                    if (name === 'name' && player.name === player.name1) return false;
                    return Object.keys(map).some(
                        (identity) =>
                            !(() => {
                                if (identity === 'zhu') return get.zhu(player) === player;
                                return player.identity === identity;
                            })() && map[identity].includes(player[name])
                    );
                });
                for (const name of names) {
                    const group = get.character('sunce').group;
                    const change = name.endsWith('1') && player.group !== group;
                    player.reinit(player[name], name.endsWith('1') ? 'sunce' : 're_yuji');
                    if (change) {
                        game.addVideo('changeGroup', player, group);
                        game.broadcastAll(
                            (player, group) => {
                                player.group = group;
                                player.node.name.dataset.nature = get.groupnature(group);
                            },
                            player,
                            group
                        );
                    }
                }
            }
        },
        getList: {
            zhu: ['Europa_tno_adaofuxitele', 'Europa_tno_madingbaoman', 'Europa_tno_aerboteshipeier'],
            nei: ['Europa_tuotuomishi', 'Europa_yexian'],
        },
    },
    _Europa_characerChooseAudio: {
        ruleSkill: true,
        trigger: { global: ['chooseCharacterAfter', 'showCharacterAfter'] },
        filter(event, player) {
            if (_status._Europa_characerChooseAudio) return false;
            const list = ['Europa_tno_adaofuxitele', 'Europa_tno_madingbaoman', 'Europa_tno_aerboteshipeier'];
            return game.hasPlayer((target) => ['name', 'name2'].some((name) => list.includes(target[name])));
        },
        forced: true,
        popup: false,
        firstDo: true,
        content() {
            _status._Europa_characerChooseAudio = true;
            lib.config.background_music = 'music_custom';
            lib.config.background_music_src = ui.backgroundMusic.src = `extension/欧陆风云/audio/effect/趁手工具.mp3`;
        },
    },
    Europa_ouzhouzhizhu: {
        nobracket: true,
        charlotte: true,
        superCharlotte: true,
        init(player) {
            var xtlbtn = ui.create.div('.xtlbtn', document.body);
            xtlbtn.addEventListener('click', function () {
                var xtldialog = ui.create.div('.xtldialog', document.body);
                var nulinum;
                if (player.countMark('Europa_quanmiannuli') > 0) {
                    nulinum = player.countMark('Europa_quanmiannuli') + 'k';
                } else {
                    nulinum = '0';
                }
                var xtlnulishuliang = ui.create.div('.xtlnulishuliang', nulinum, xtldialog);
                var list = lib.skill.Europa_paixi.getList;
                var xtlbaoshoupai = ui.create.div('.xtlbaoshoupai', list[Math.max(0, Math.min(list.length, player.getStorage('Europa_paixi_保守派')) - 1)], xtldialog);
                var xtlgaigepai = ui.create.div('.xtlgaigepai', list[Math.max(0, Math.min(list.length, player.getStorage('Europa_paixi_改革派')) - 1)], xtldialog);
                var xtljunguopai = ui.create.div('.xtljunguopai', list[Math.max(0, Math.min(list.length, player.getStorage('Europa_paixi_军国派')) - 1)], xtldialog);
                var xtldangweijun = ui.create.div('.xtldangweijun', list[Math.max(0, Math.min(list.length, player.getStorage('Europa_paixi_党卫军')) - 1)], xtldialog);
                var qiyestorage = player.getStorage('Europa_guojiajuqi');
                var xtlqiye1;
                var xtlqiye2;
                var xtlqiye3;
                var xtlqiye4;
                if (!qiyestorage.includes('IG法本')) {
                    xtlqiye1 = ui.create.div('.xtlqiye1', '已肢解', xtldialog);
                }
                if (!qiyestorage.includes('国家工厂')) {
                    xtlqiye2 = ui.create.div('.xtlqiye2', '已肢解', xtldialog);
                }
                if (!qiyestorage.includes('戴勒姆·奔驰')) {
                    xtlqiye3 = ui.create.div('.xtlqiye3', '已肢解', xtldialog);
                }
                if (!qiyestorage.includes('西门子')) {
                    xtlqiye4 = ui.create.div('.xtlqiye4', '已肢解', xtldialog);
                }
                var finished = player.getStorage('Europa_chaojixiangmu_finished');
                var xtlxiangmu1 = ui.create.div('.xtlxiangmu1', finished.includes('Europa_chaojixiangmu_日耳曼尼亚') ? '已完成' : player.getStorage('Europa_chaojixiangmu_日耳曼尼亚').length ? `还剩${player.getStorage('Europa_chaojixiangmu_日耳曼尼亚')}轮` : '未修建', xtldialog);
                var xtlxiangmu2 = ui.create.div('.xtlxiangmu2', finished.includes('Europa_chaojixiangmu_载人登月') ? '已完成' : player.getStorage('Europa_chaojixiangmu_载人登月').length ? `还剩${player.getStorage('Europa_chaojixiangmu_载人登月')}轮` : '未修建', xtldialog);
                var xtlxiangmu3 = ui.create.div('.xtlxiangmu3', finished.includes('Europa_chaojixiangmu_刚果湖') ? '已完成' : player.getStorage('Europa_chaojixiangmu_刚果湖').length ? `还剩${player.getStorage('Europa_chaojixiangmu_刚果湖')}轮` : '未修建', xtldialog);
                var xtlxiangmu4 = ui.create.div('.xtlxiangmu4', finished.includes('Europa_chaojixiangmu_超级宽轨') ? '已完成' : player.getStorage('Europa_chaojixiangmu_超级宽轨').length ? `还剩${player.getStorage('Europa_chaojixiangmu_超级宽轨')}轮` : '未修建', xtldialog);
                var xtlxiangmu5 = ui.create.div('.xtlxiangmu5', finished.includes('Europa_chaojixiangmu_大威力核弹') ? '已完成' : player.getStorage('Europa_chaojixiangmu_大威力核弹').length ? `还剩${player.getStorage('Europa_chaojixiangmu_大威力核弹')}轮` : '未修建', xtldialog);
                var xtlxiangmu6 = ui.create.div('.xtlxiangmu6', finished.includes('Europa_chaojixiangmu_全国避难地堡') ? '已完成' : player.getStorage('Europa_chaojixiangmu_全国避难地堡').length ? `还剩${player.getStorage('Europa_chaojixiangmu_全国避难地堡')}轮` : '未修建', xtldialog);
                ui._xtldialogbx_ = true;
                var xtlditu = ui.create.div('.xtlditu', document.body);
                ui._bigxtldialog_ = function () {
                    if (ui._xtldialogbx_ != true) return;
                    ui._xtldialogbx_ = false;
                    ui._changextldialog_ = ui._smallxtldialog_;
                    xtldialog.style.transform = 'scale(1.5)';
                };
                ui._changextldialog_ = ui._bigxtldialog_;
                ui._smallxtldialog_ = function () {
                    if (ui._xtldialogbx_ == true) return;
                    ui._xtldialogbx_ = true;
                    ui._changextldialog_ = ui._bigxtldialog_;
                    xtldialog.style.transform = '';
                };
                xtldialog.addEventListener('click', function () {
                    ui._changextldialog_();
                });
                xtlditu.addEventListener('click', function () {
                    xtldialog.remove();
                    xtlditu.remove();
                });
            });
        },
        trigger: {
            global: 'phaseBegin',
            player: 'phaseZhunbeiBegin',
        },
        filter(event, player) {
            if (event.name === 'phaseZhunbei') return player.hasSkill('Europa_quanmiannuli', null, null, false) && game.hasPlayer((target) => target.hasClan('团结协定'));
            return event.player.hasClan('团结协定') || (event.player === player && lib.skill.Europa_paixi.getList2.some((item) => player.countMark('Europa_ouzhouzhizhu_' + item) === 1));
        },
        forced: true,
        logTarget: 'player',
        async content(event, trigger, player) {
            let num = player.getVEquips('Europa_riermanniya').length;
            if (trigger.name === 'phaseZhunbei') player.addMark('Europa_quanmiannuli', game.countPlayer((target) => target.hasClan('团结协定')) * (2 + num));
            else {
                const target = trigger.player;
                if (target.hasClan('团结协定')) {
                    const card = get.cardPile2('sha');
                    if (card) await target.gain(card, 'gain2');
                    while (num > 0) {
                        num--;
                        const card2 = get.cardPile2((card2) => get.type(card2) === 'trick' && get.tag(card2, 'damage') > 0.5);
                        if (card2) await target.gain(card2, 'gain2');
                        else break;
                    }
                }
                if (target === player && lib.skill.Europa_paixi.getList2.some((item) => player.countMark('Europa_ouzhouzhizhu_' + item) === 1)) {
                    await player.loseHp(lib.skill.Europa_paixi.getList2.filter((item) => player.countMark('Europa_ouzhouzhizhu_' + item) === 1).length);
                }
            }
        },
    },
    Europa_paixi: {
        nobracket: true,
        charlotte: true,
        superCharlotte: true,
        init(player) {
            const name = ['name', 'name2'].find((name) => lib.skill.Europa_paixi.getMap[player[name]]);
            if (name) {
                const list = lib.skill.Europa_paixi.getList;
                const map = lib.skill.Europa_paixi.getMap[player[name]];
                for (var item in map) {
                    player.addSkill('Europa_paixi_' + item);
                    player.addMark('Europa_paixi_' + item, list.indexOf(map[item]) + 1, false);
                }
            }
        },
        mod: {
            cardUsable(card, player, num) {
                if (card.name === 'sha') {
                    const list = lib.skill.Europa_paixi.getList;
                    const list2 = lib.skill.Europa_paixi.getList2.filter((item) => player.hasSkill('Europa_paixi_' + item));
                    return num + list2.filter((item) => player.countMark('Europa_paixi_' + item) > list.indexOf('口头效忠') + 1).length;
                }
            },
            maxHandcard(player, num) {
                const list = lib.skill.Europa_paixi.getList;
                const list2 = lib.skill.Europa_paixi.getList2.filter((item) => player.hasSkill('Europa_paixi_' + item));
                return num - list2.filter((item) => player.countMark('Europa_paixi_' + item) < list.indexOf('暗中使绊') + 1).length * 3;
            },
        },
        getList2: ['保守派', '改革派', '军国派', '党卫军'],
        getList: ['公开反对', '处处刁难', '暗中使绊', '毫不关心', '口头效忠', '亲密朋党', '俯首帖耳'],
        getMap: {
            Europa_tno_adaofuxitele: { 保守派: '亲密朋党', 改革派: '口头效忠', 军国派: '亲密朋党', 党卫军: '口头效忠' },
            Europa_tno_madingbaoman: { 保守派: '亲密朋党', 改革派: '处处刁难', 军国派: '公开反对', 党卫军: '口头效忠' },
            Europa_tno_aerboteshipeier: { 保守派: '处处刁难', 改革派: '俯首帖耳', 军国派: '暗中使绊', 党卫军: '毫不关心' },
        },
        enable: 'phaseUse',
        filter(event, player) {
            const list = lib.skill.Europa_paixi.getList2.filter((item) => player.hasSkill('Europa_paixi_' + item));
            return list.length > 1 && list.some((item) => player.countMark('Europa_paixi_' + item) === 1);
        },
        chooseButton: {
            dialog(event, player) {
                return ui.create.dialog('###欧洲之主###<div class="text center">减少3点体力上限,清洗一个公开反对的派系</div>');
            },
            chooseControl(event, player) {
                return lib.skill.Europa_paixi.getList2.filter((item) => player.countMark('Europa_paixi_' + item) === 1).concat(['cancel2']);
            },
            check(event, player) {
                return lib.skill.Europa_paixi.getList2.find((item) => player.countMark('Europa_paixi_' + item) === 1) || 'cancel2';
            },
            backup(result) {
                return {
                    filterCard: () => false,
                    selectCard: -1,
                    position: 'Europa_paixi_' + result.control,
                    async content(event, trigger, player) {
                        await player.loseMaxHp(3);
                        const position = lib.skill.Europa_paixi_backup.position;
                        player.removeSkill(position);
                        game.log(player, '清洗了', '#g' + get.translation(position));
                    },
                };
            },
        },
        ai: {
            order: 10,
            result: { player: (player) => player.maxHp - 5 },
        },
        group: 'Europa_paixi_less',
        subSkill: {
            backup: {},
            less: {
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return lib.skill.Europa_paixi.getList2.some((item) => {
                        if (item === '保守派' && player.hasSkill('Europa_diercichangdaozhiye_effect')) return false;
                        return player.hasSkill('Europa_paixi_' + item) && player.countMark('Europa_paixi_' + item) > 1;
                    });
                },
                forced: true,
                content() {
                    const list = lib.skill.Europa_paixi.getList2.filter((item) => {
                        if (item === '保守派' && player.hasSkill('Europa_diercichangdaozhiye_effect')) return false;
                        return player.hasSkill('Europa_paixi_' + item) && player.countMark('Europa_paixi_' + item) > 1;
                    });
                    if (list.length) {
                        for (var item of list) {
                            player.removeMark('Europa_paixi_' + item, 1, false);
                            game.log(item, '#y忠诚度-1');
                        }
                    }
                },
            },
            保守派: {
                nobracket: true,
                charlotte: true,
                marktext: '守',
                trigger: { player: ['Europa_quanmiannuliAfter', 'useCardAfter', 'Europa_chaojixiangmuAfter', 'recoverAfter', 'Europa_guojiajuqiAfter'] },
                filter(event, player) {
                    return lib.skill.Europa_paixi_保守派.getMap(player).filter((list) => list[1]).length >= 3;
                },
                forced: true,
                content() {
                    const limit = lib.skill.Europa_paixi.getList.length;
                    if (player.countMark(event.name) < limit) {
                        player.addMark(event.name, Math.min(2, limit - player.countMark(event.name)), false);
                        game.log(get.translation(event.name), '#g忠诚度+2');
                    }
                },
                getMap(player) {
                    return [
                        [
                            '使用奴隶劳工',
                            (() => {
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'Europa_quanmiannuli' && evt.control === '使用奴隶劳工') return true;
                                            if (evt.name === 'Europa_paixi_保守派') return false;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],

                        [
                            '对其他角色使用至多一张伤害类卡牌',
                            (() => {
                                let num = 0;
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'useCard' && get.tag(evt.card, 'damage') > 0.5 && evt.targets?.some((i) => i !== player)) {
                                                num++;
                                                if (num >= 2) return false;
                                            }
                                            if (evt.name === 'Europa_paixi_保守派') return true;
                                        }
                                    }
                                }
                                return true;
                            })(),
                        ],

                        [
                            '开始修建日耳曼尼亚或宽轨铁路',
                            (() => {
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'Europa_chaojixiangmu' && ['日耳曼尼亚', '超级宽轨'].includes(evt.control)) return true;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],

                        [
                            '回复过至少1点体力',
                            (() => {
                                let num = 0;
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'recover') {
                                                num += evt.num;
                                                if (num >= 1) return true;
                                            }
                                            if (evt.name === 'Europa_paixi_保守派') return false;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],

                        [
                            '利用企业巨头',
                            (() => {
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'Europa_guojiajuqi') return true;
                                            if (evt.name === 'Europa_paixi_保守派') return false;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],
                    ];
                },
                intro: {
                    markcount(storage = 0) {
                        const list = lib.skill.Europa_paixi.getList;
                        return list[Math.max(0, Math.min(list.length, storage) - 1)][0];
                    },
                    content(storage = 0, player) {
                        const list = lib.skill.Europa_paixi.getList;
                        return [
                            '当前保守派忠诚度为:' + list[Math.max(0, Math.min(list.length, storage) - 1)],
                            ...lib.skill.Europa_paixi_保守派.getMap(player).map((list) => {
                                let str = list[0];
                                if (!list[1]) str = '<span style="opacity:0.5">' + str + '(未完成)</span>';
                                return str;
                            }),
                        ]
                            .map((str) => '<li>' + str)
                            .join('<br>');
                    },
                },
            },
            改革派: {
                nobracket: true,
                charlotte: true,
                marktext: '革',
                trigger: {
                    global: ['gainAfter', 'loseAsyncAfter'],
                    player: ['Europa_quanmiannuliAfter', 'Europa_guojiajuqiAfter'],
                },
                filter(event, player) {
                    return lib.skill.Europa_paixi_改革派.getMap(player).filter((list) => list[1]).length >= 3;
                },
                forced: true,
                content() {
                    const limit = lib.skill.Europa_paixi.getList.length;
                    if (player.countMark(event.name) < limit) {
                        player.addMark(event.name, Math.min(2, limit - player.countMark(event.name)), false);
                        game.log(get.translation(event.name), '#g忠诚度+2');
                    }
                },
                getMap(player) {
                    return [
                        [
                            '获得过至少两张牌',
                            (() => {
                                let num = 0;
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'gain') {
                                                num += evt.cards.length;
                                                if (num >= 2) return true;
                                            }
                                            if (evt.name === 'Europa_paixi_改革派') return false;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],

                        [
                            '遣返奴隶劳工',
                            (() => {
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'Europa_quanmiannuli' && evt.control === '遣返奴隶') return true;
                                            if (evt.name === 'Europa_paixi_改革派') return false;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],

                        [
                            '未对其他角色造成过伤害',
                            (() => {
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything;
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'damage' && evt.source === player) return false;
                                            if (evt.name === 'Europa_paixi_改革派' && evt.player === player) return true;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],

                        [
                            '交给其他角色牌',
                            (() => {
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (['gain', 'loseAsync'].includes(evt.name) && evt.giver === player) return true;
                                            if (evt.name === 'Europa_paixi_改革派' && evt.player === player) return false;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],

                        [
                            '肢解企业巨头',
                            (() => {
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'Europa_guojiajuqi' && evt._destroy) return true;
                                            if (evt.name === 'Europa_paixi_保守派') return false;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],
                    ];
                },
                intro: {
                    markcount(storage = 0) {
                        const list = lib.skill.Europa_paixi.getList;
                        return list[Math.max(0, Math.min(list.length, storage) - 1)][0];
                    },
                    content(storage = 0, player) {
                        const list = lib.skill.Europa_paixi.getList;
                        return [
                            '当前改革派忠诚度为:' + list[Math.max(0, Math.min(list.length, storage) - 1)],
                            ...lib.skill.Europa_paixi_改革派.getMap(player).map((list) => {
                                let str = list[0];
                                if (!list[1]) str = '<span style="opacity:0.5">' + str + '(未完成)</span>';
                                return str;
                            }),
                        ]
                            .map((str) => '<li>' + str)
                            .join('<br>');
                    },
                },
            },
            军国派: {
                nobracket: true,
                charlotte: true,
                marktext: '国',
                trigger: {
                    source: 'damageSource',
                    player: ['useCardAfter', 'Europa_chaojixiangmuAfter', 'Europa_guojiajuqiAfter'],
                },
                filter(event, player) {
                    return lib.skill.Europa_paixi_军国派.getMap(player).filter((list) => list[1]).length >= 3;
                },
                forced: true,
                content() {
                    const limit = lib.skill.Europa_paixi.getList.length;
                    if (player.countMark(event.name) < limit) {
                        player.addMark(event.name, Math.min(2, limit - player.countMark(event.name)), false);
                        game.log(get.translation(event.name), '#g忠诚度+2');
                    }
                },
                getMap(player) {
                    return [
                        [
                            '对其他角色造成过至少2点伤害',
                            (() => {
                                let num = 0;
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything;
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'damage' && evt.source === player && evt.player !== player) {
                                                num += evt.num;
                                                if (num >= 2) return true;
                                            }
                                            if (evt.name === 'Europa_paixi_军国派' && evt.player === player) return false;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],

                        [
                            '使用至少两张伤害牌',
                            (() => {
                                let num = 0;
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'useCard' && get.tag(evt.card, 'damage') > 0.5) {
                                                num++;
                                                if (num >= 2) return true;
                                            }
                                            if (evt.name === 'Europa_paixi_军国派') return false;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],

                        [
                            '研发大威力核弹',
                            (() => {
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'Europa_chaojixiangmu' && evt.control === '大威力核弹') return true;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],

                        [
                            '利用国家工厂或IG法本',
                            (() => {
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'Europa_guojiajuqi' && evt.controls?.some((control) => ['国家工厂', 'IG法本'].includes(control))) return true;
                                            if (evt.name === 'Europa_paixi_军国派') return false;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],

                        [
                            '使用武器牌',
                            (() => {
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'useCard' && get.type(evt.card) === 'equip') return true;
                                            if (evt.name === 'Europa_paixi_军国派') return false;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],
                    ];
                },
                intro: {
                    markcount(storage = 0) {
                        const list = lib.skill.Europa_paixi.getList;
                        return list[Math.max(0, Math.min(list.length, storage) - 1)][0];
                    },
                    content(storage = 0, player) {
                        const list = lib.skill.Europa_paixi.getList;
                        return [
                            '当前军国派忠诚度为:' + list[Math.max(0, Math.min(list.length, storage) - 1)],
                            ...lib.skill.Europa_paixi_军国派.getMap(player).map((list) => {
                                let str = list[0];
                                if (!list[1]) str = '<span style="opacity:0.5">' + str + '(未完成)</span>';
                                return str;
                            }),
                        ]
                            .map((str) => '<li>' + str)
                            .join('<br>');
                    },
                },
            },
            党卫军: {
                nobracket: true,
                charlotte: true,
                marktext: '卫',
                trigger: {
                    source: 'dieAfter',
                    player: ['useCardAfter', 'Europa_chaojixiangmuAfter', 'Europa_quanmiannuliAfter'],
                },
                filter(event, player) {
                    return lib.skill.Europa_paixi_党卫军.getMap(player).filter((list) => list[1]).length >= 3;
                },
                forced: true,
                content() {
                    const limit = lib.skill.Europa_paixi.getList.length;
                    if (player.countMark(event.name) < limit) {
                        player.addMark(event.name, Math.min(2, limit - player.countMark(event.name)), false);
                        game.log(get.translation(event.name), '#g忠诚度+2');
                    }
                },
                getMap(player) {
                    return [
                        [
                            '击杀一名其他角色',
                            (() => {
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything;
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'die' && evt.source === player) return true;
                                            if (evt.name === 'Europa_paixi_党卫军' && evt.player === player) return false;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],

                        [
                            '对其他角色使用至少三张牌',
                            (() => {
                                let num = 0;
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'useCard' && evt.targets?.some((i) => i !== player)) {
                                                num++;
                                                if (num >= 3) return true;
                                            }
                                            if (evt.name === 'Europa_paixi_党卫军') return false;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],

                        [
                            '修建全国避难地堡',
                            (() => {
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'Europa_chaojixiangmu' && evt.control === '全国避难地堡') return true;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],

                        [
                            '使用【起义】',
                            (() => {
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'useCard' && evt.card.name === 'Europa_qiyi') return true;
                                            if (evt.name === 'Europa_paixi_党卫军') return false;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],

                        [
                            '对奴隶进行种族进化',
                            (() => {
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                                    if (history.length) {
                                        for (let j = history.length - 1; j >= 0; j--) {
                                            const evt = history[j];
                                            if (evt.name === 'Europa_quanmiannuli' && evt.control === '种族进化') return true;
                                            if (evt.name === 'Europa_paixi_党卫军') return false;
                                        }
                                    }
                                }
                                return false;
                            })(),
                        ],
                    ];
                },
                intro: {
                    markcount(storage = 0) {
                        const list = lib.skill.Europa_paixi.getList;
                        return list[Math.max(0, Math.min(list.length, storage) - 1)][0];
                    },
                    content(storage = 0, player) {
                        const list = lib.skill.Europa_paixi.getList;
                        return [
                            '当前党卫军忠诚度为:' + list[Math.max(0, Math.min(list.length, storage) - 1)],
                            ...lib.skill.Europa_paixi_党卫军.getMap(player).map((list) => {
                                let str = list[0];
                                if (!list[1]) str = '<span style="opacity:0.5">' + str + '(未完成)</span>';
                                return str;
                            }),
                        ]
                            .map((str) => '<li>' + str)
                            .join('<br>');
                    },
                },
            },
        },
    },
    Europa_guojiajuqi: {
        nobracket: true,
        charlotte: true,
        superCharlotte: true,
        init(player, skill) {
            if (!player.storage[skill]) player.markAuto(skill, ['IG法本', '国家工厂', '戴勒姆·奔驰', '西门子']);
        },
        trigger: {
            global: 'roundStart',
            player: 'phaseBegin',
        },
        filter(event, player, name) {
            const gongcheng = player.getStorage('Europa_guojiajuqi');
            if (!gongcheng.length) return false;
            return gongcheng.some((item) => {
                if (name === 'phaseBegin') return lib.skill['Europa_guojiajuqi_' + item].cost(player);
                let num = 0;
                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                    if (history.length) {
                        for (let j = history.length - 1; j >= 0; j--) {
                            const evt = history[j];
                            if (evt.name === 'Europa_guojiajuqi' && evt.controls?.includes(item)) return num > 2;
                        }
                    }
                    if (_status.globalHistory[i].isRound) num++;
                }
                return num > 2;
            });
        },
        async cost(event, trigger, player) {
            const name = event.triggername;
            let payed = [];
            if (name === 'phaseBegin') {
                while (
                    player.getStorage('Europa_guojiajuqi').some((item) => {
                        return !payed.includes(item) && lib.skill['Europa_guojiajuqi_' + item].cost(player);
                    })
                ) {
                    const items = player.getStorage('Europa_guojiajuqi').filter((item) => {
                        return !payed.includes(item) && lib.skill['Europa_guojiajuqi_' + item].cost(player);
                    }),
                        resultx = await player
                            .chooseControl(items)
                            .set('prompt', '请选择企业支付报酬')
                            .set('ai', () => {
                                return get.rand(0, get.event().controls.length - 1);
                            })
                            .set(
                                'choiceList',
                                items.map((item) => item + ':' + lib.translate['Europa_guojiajuqi_' + item + '_info'].split(',')[0])
                            )
                            .set('displayIndex', false)
                            .forResult();
                    const control = resultx?.control;
                    if (control) {
                        payed.push(control);
                        await lib.skill['Europa_guojiajuqi_' + control].costx(player);
                    } else break;
                }
            }
            const gongcheng = player.getStorage('Europa_guojiajuqi').filter((item) => {
                if (name === 'phaseBegin') return payed.includes(item) && lib.skill['Europa_guojiajuqi_' + item].cost(player);
                let num = 0;
                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                    const history = _status.globalHistory[i].everything.filter((evt) => evt.player === player);
                    if (history.length) {
                        for (let j = history.length - 1; j >= 0; j--) {
                            const evt = history[j];
                            if (evt.name === 'Europa_guojiajuqi' && evt.controls?.includes(item)) return num > 2;
                        }
                    }
                    if (_status.globalHistory[i].isRound) num++;
                }
                return num > 2;
            });
            if (!gongcheng.length) {
                event.result = { bool: false };
                return;
            }
            const result = await player
                .chooseButton(
                    [
                        name === 'phaseBegin' ? '是否选择至多两个企业？' : '是否肢解至少两轮未选择过的企业？',
                        [
                            gongcheng.map((skill) => {
                                return [skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">' + get.translation('Europa_guojiajuqi_' + skill) + '</div><div>' + lib.translate['Europa_guojiajuqi_' + skill + '_info'].split(',').slice(1).join(',') + '</div></div>'];
                            }),
                            'textbutton',
                        ],
                    ],

                    [1, name === 'roundStart' ? Infinity : 2]
                )
                .set('currentName', name)
                .set('ai', (button) => {
                    if (get.event().currentName === 'roundStart') return 0;
                    return (
                        lib.skill['Europa_guojiajuqi_' + button.link].getEffect ||
                        function () {
                            return 0;
                        }
                    )(get.player());
                })
                .forResult();
            if (result.bool) result.cost_data = result.links;
            event.result = result;
        },
        async content(event, trigger, player) {
            const name = event.triggername,
                qiye = event.cost_data;
            if (name === 'roundStart') {
                event._destroy = true;
                player.unmarkAuto(event.name, qiye);
                player.popup(qiye);
                game.log(player, '肢解了', '#y' + qiye, '企业');
            } else {
                event.controls = qiye;
                player.popup(qiye);
                game.log(player, '选择了', '#y' + qiye, '企业');
                for (var i of qiye) await lib.skill['Europa_guojiajuqi_' + i].content(player);
            }
        },
        intro: { content: '当前可用企业:$' },
        derivation: ['IG法本', '国家工厂', '戴勒姆·奔驰', '西门子'].map((item) => 'Europa_guojiajuqi_' + item),
        subSkill: {
            IG法本: {
                cost(player) {
                    return player.countMark('Europa_quanmiannuli') >= 5 && player.countDiscardableCards(player, 'he');
                },
                getEffect(player) {
                    return get.effect(player, { name: 'draw' }, player, player) * 2;
                },
                async costx(player) {
                    player.removeMark('Europa_quanmiannuli', 5);
                    await player.chooseToDiscard('he', true);
                },
                async content(player) {
                    get.info('_Europa_FuelMechanism')?.addFuel?.(player, 5);
                    let list = [];
                    while (list.length < 2) {
                        const card = get.cardPile2((card) => !list.includes(card) && get.type2(card) === 'trick');
                        if (card) list.push(card);
                        else break;
                    }
                    if (list.length) await player.gain(list, 'gain2');
                },
            },
            国家工厂: {
                cost(player) {
                    return player.countMark('Europa_quanmiannuli') >= 4 && player.countDiscardableCards(player, 'he');
                },
                getEffect(player) {
                    return get.effect(player, { name: 'draw' }, player, player) * (1.5 + Math.random());
                },
                async costx(player) {
                    player.removeMark('Europa_quanmiannuli', 4);
                    await player.chooseToDiscard('he', true);
                },
                async content(player) {
                    const result = await player
                        .chooseTarget('令一名角色获得并使用【团结协定标准坦克底盘】,若其已装备一种【坦克底盘】,则改为令其获得5枚弹药', true)
                        .set('ai', (target) => {
                            const player = get.player();
                            return get.attitude(player, target);
                        })
                        .forResult();
                    if (result?.bool && result.targets?.length) {
                        const [target] = result.targets;
                        player.line(target);
                        const goon = ['Europa_tankChassis', 'Europa_tankChassis_tuanjiexieding'].some((equip) => target.getVEquips(equip).length);
                        if (goon) player.addMark('_Europa_AmmunitionMechanism', 5);
                        else {
                            const card = game.createCard('Europa_tankChassis_tuanjiexieding', lib.suit.randomGet(), get.rand(1, 13));
                            if (card) {
                                await target.gain(card, 'gain2');
                                if (target.getCards('h').includes(card) && get.type(card) == 'equip') {
                                    await target.chooseUseTarget(card, true, false);
                                }
                            }
                        }
                    }
                },
            },
            '戴勒姆·奔驰': {
                cost(player) {
                    return player.countMark('Europa_quanmiannuli') >= 3 && player.countDiscardableCards(player, 'he');
                },
                getEffect(player) {
                    if (_status.currentPhase !== player) return 0;
                    return Math.max(
                        ...game
                            .filterPlayer((target) => {
                                return get.distance(player, target) <= 3;
                            })
                            .map((target) => get.effect(target, { name: 'sha' }, player, player))
                    );
                },
                async costx(player) {
                    player.removeMark('Europa_quanmiannuli', 3);
                    await player.chooseToDiscard('he', true);
                },
                async content(player) {
                    player.addTempSkill('Europa_guojiajuqi_effect');
                },
            },
            西门子: {
                cost(player) {
                    return player.countMark('Europa_quanmiannuli') >= 1 && player.countDiscardableCards(player, 'he');
                },
                getEffect(player) {
                    return Math.max(...game.filterPlayer().map((target) => get.effect(target, { name: 'shunshou_copy2' }, player, player)));
                },
                async costx(player) {
                    player.removeMark('Europa_quanmiannuli', 1);
                    await player.chooseToDiscard('he', true);
                },
                async content(player) {
                    const result = await player
                        .chooseTarget('观看一名角色的手牌并获得其中一张', (card, player, target) => {
                            return target !== player && target.countCards('h');
                        })
                        .set('ai', (target) => {
                            const player = get.player();
                            return get.effect(target, { name: 'shunshou', position: 'h' }, player, player); //QQQ
                        })
                        .forResult();
                    if (result?.bool && result.targets?.length) {
                        const [target] = result.targets;
                        player.line(target);
                        await player.gainPlayerCard(target, 'h', true, 'visible');
                    }
                },
            },
            effect: {
                charlotte: true,
                mod: { globalFrom: (from, to, dist) => dist - (from === to ? 0 : 2) },
                trigger: { player: 'useCard' },
                filter(event, player) {
                    return event.card && event.card.name === 'sha' && game.hasPlayer((current) => get.distance(player, current) <= 1);
                },
                forced: true,
                content() {
                    const targets = game.filterPlayer((current) => get.distance(player, current) <= 1);
                    player.line(targets);
                    trigger.directHit.addArray(targets);
                    player.chat(['吹牛逼呢？你开过吗!', '这叫俄罗斯大贝塔!', '城里人咋的？', '城里人,你也开不起!', '吹牛逼!', '你只能看着!', '你三哥开!', '这叫实力？懂吗!', '加纳!!!哈哈哈哈哈哈!'].join('<br>'));
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (!arg || !arg.card || !arg.target) return false;
                        return arg.card.name === 'sha' && get.distance(player, arg.target) <= 1;
                    },
                },
                intro: { content: '计算与其他角色的距离-2,距离1以内的角色无法响应你使用的【杀】' },
            },
        },
    },
    Europa_quanmiannuli: {
        nobracket: true,
        charlotte: true,
        superCharlotte: true,
        init(player, skill) {
            if (!player.storage[skill]) player.addMark(skill, 120);
        },
        intro: {
            name: '奴隶',
            markcount: (storage = 0) => storage.toString() + 'k',
            content: (storage = 0) => '当前拥有' + storage + 'k奴隶',
        },
        trigger: {
            global: 'roundStart',
            player: 'phaseUseBegin',
        },
        forced: true,
        derivation: ['使用奴隶劳工', '遣返奴隶', '抓捕奴隶', '种族进化', '禁用奴隶栏目'].map((item) => 'Europa_quanmiannuli_' + item),
        async content(event, trigger, player) {
            if (event.triggername === 'roundStart') {
                player.addMark(event.name, 2);
                if (player.countMark(event.name) >= 5 && !player.hasSkill('Europa_diercichangdaozhiye_effect')) {
                    await player.gain(game.createCard('Europa_qiyi', lib.suit.randomGet(), get.rand(1, 13)), 'gain2');
                }
            } else {
                const result = await player
                    .chooseButton([
                        '是否选择一个奴隶栏目？',
                        [
                            lib.skill[event.name].derivation
                                .filter((item) => {
                                    return (
                                        lib.skill[item].cost ||
                                        function () {
                                            return true;
                                        }
                                    )(player);
                                })
                                .map((skill) => {
                                    return [skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">' + get.translation(skill) + '</div><div>' + lib.translate[skill + '_info'] + '</div></div>'];
                                }),
                            'textbutton',
                        ],
                    ])
                    .set('ai', (button) => {
                        if (get.event().currentName === 'roundStart') return 0;
                        return (
                            lib.skill[button.link].getEffect || //QQQ
                            function () {
                                return 0;
                            }
                        )(get.player());
                    })
                    .forResult();
                if (result?.bool && result.links?.length) {
                    const [choice] = ([event.control] = result.links.map((i) => i.slice('Europa_quanmiannuli_'.length)));
                    await lib.skill['Europa_quanmiannuli_' + choice].content(player);
                }
            }
        },
        subSkill: {
            使用奴隶劳工: {
                cost(player) {
                    return player.countMark('Europa_quanmiannuli') >= 10;
                },
                getEffect(player) {
                    return get.effect(player, { name: 'draw' }, player, player) * 3;
                },
                async content(player) {
                    const xiangmu = player.getStorage('Europa_chaojixiangmu').find((i) => !player.getStorage('Europa_chaojixiangmu_finished').includes(i));
                    const result = xiangmu
                        ? await player
                            .chooseControl()
                            .set('choiceList', ['摸三张牌', '减少项目' + get.translation(xiangmu) + '一轮修建时间'])
                            .set('ai', () => {
                                const player = get.player();
                                return get.effect(player, { name: 'draw' }, player, player) > 0 ? 0 : 1;
                            })
                            .forResult()
                        : { index: 0 };
                    if (result.index === 0) await player.draw(3);
                    else await lib.skill[xiangmu].contentx(player, xiangmu, 1);
                },
            },
            遣返奴隶: {
                cost(player) {
                    return player.countMark('Europa_quanmiannuli') >= 5;
                },
                getEffect(player) {
                    return get.effect(player, { name: 'draw' }, player, player);
                },
                async content(player) {
                    player.removeMark('Europa_quanmiannuli', 5);
                    await player.draw();
                },
            },
            抓捕奴隶: {
                getEffect(player) {
                    return 10 - player.countMark('Europa_quanmiannuli');
                },
                async content(player) {
                    const result = await player
                        .chooseToDiscard(
                            (card, player) => {
                                return get.type(card) === 'equip' && get.subtypes(card).includes('equip1');
                            },
                            'he',
                            '弃置一张武器牌或失去1点体力'
                        )
                        .set('ai', (card) => {
                            const player = get.player();
                            return get.effect(player, { name: 'losehp' }, player, player) > 0 ? 0 : 7 - get.value(card);
                        })
                        .forResult();
                    if (!result?.bool) await player.loseHp();
                    player.addMark('Europa_quanmiannuli', 3);
                },
            },
            种族进化: {
                cost(player) {
                    return player.countMark('Europa_quanmiannuli') >= 15 && player.countDiscardableCards(player, 'h', (card) => card.name === 'sha') >= 2;
                },
                getEffect(player) {
                    return get.effect(player, { name: 'draw' }, player, player) * 2;
                },
                async content(player) {
                    player.removeMark('Europa_quanmiannuli', 15);
                    await player.chooseToDiscard(2, { name: 'sha' }, true);
                    const result = await player.judge().forResult();
                    if (result.color === 'red') {
                        const xiangmu = player.getStorage('Europa_chaojixiangmu').find((i) => !player.getStorage('Europa_chaojixiangmu_finished').includes(i));
                        if (xiangmu) await lib.skill[xiangmu].contentx(player, xiangmu, 2);
                    }
                    if (result.color === 'black' && !player.hasSkill('Europa_diercichangdaozhiye_effect')) {
                        await player.gain(
                            Array.from({ length: 2 }).map(() => {
                                return game.createCard('Europa_qiyi', lib.suit.randomGet(), get.rand(1, 13));
                            }),
                            'gain2'
                        );
                    }
                },
            },
            禁用奴隶栏目: {
                cost(player) {
                    return !player.hasMark('Europa_quanmiannuli');
                },
                async content(player) {
                    player.removeSkill('Europa_quanmiannuli');
                    player.$fullscreenpop('废除奴隶制', 'fire');
                },
            },
        },
    },
    Europa_chaojixiangmu: {
        charlotte: true,
        superCharlotte: true,
        trigger: { player: ['Europa_openGroReichAfter', 'Europa_xiangmuFinish'] },
        filter(event, player) {
            return lib.skill.Europa_chaojixiangmu.derivation.some((item) => !player.getStorage('Europa_chaojixiangmu').includes(item));
        },
        forced: true,
        async content(event, trigger, player) {
            const result = await player
                .chooseButton(
                    [
                        '选择修建一个项目',
                        [
                            lib.skill[event.name].derivation
                                .filter((item) => {
                                    return !player.getStorage('Europa_chaojixiangmu').includes(item);
                                })
                                .map((skill) => {
                                    return [skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">' + get.translation(skill) + '</div><div>' + lib.translate[skill + '_info'] + '</div></div>'];
                                }),
                            'textbutton',
                        ],
                    ],

                    true
                )
                .set('ai', () => 1 + Math.random())
                .forResult();
            if (result?.bool && result.links?.length) {
                const [choice] = ([event.control] = result.links);
                player.popup(choice);
                game.log(player, '选择修建', '#y' + get.translation(choice));
                player.addMark(choice, lib.skill[choice].getRound, false);
                player.markAuto(event.name, [choice]);
            }
        },
        intro: {
            content(storage = [], player) {
                let finished = player.getStorage('Europa_chaojixiangmu_finished'),
                    open = storage.filter((i) => !finished.includes(i));
                return ['执行中的项目:' + (open.length ? get.translation(open) : '无'), '已完成的项目:' + (finished.length ? get.translation(finished) : '无')].map((str) => '<li>' + str).join('<br>');
            },
        },
        group: 'Europa_chaojixiangmu_round',
        derivation: ['日耳曼尼亚', '载人登月', '刚果湖', '超级宽轨', '大威力核弹', '全国避难地堡'].map((item) => 'Europa_chaojixiangmu_' + item),
        subSkill: {
            round: {
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return player.getStorage('Europa_chaojixiangmu').some((i) => !player.getStorage('Europa_chaojixiangmu_finished').includes(i));
                },
                forced: true,
                async content(event, trigger, player) {
                    const xiangmu = player.getStorage('Europa_chaojixiangmu').find((i) => !player.getStorage('Europa_chaojixiangmu_finished').includes(i));
                    await lib.skill[xiangmu].contentx(player, xiangmu, 1);
                },
            },
            日耳曼尼亚: {
                getRound: 4,
                intro: { content: '还剩#轮' },
                async contentx(player, name, num = 1) {
                    player.removeMark(name, num, false);
                    if (!player.hasMark(name)) {
                        player.markAuto('Europa_chaojixiangmu_finished', [name]);
                        player.$fullscreenpop(get.translation(name), 'thunder');
                        game.log(player, '完成修建', '#g' + get.translation(name));
                        const card = game.createCard('Europa_riermanniya', 'spade', 5);
                        if (player.canEquip(card, true)) await player.equip(card);
                        await _status.event.trigger('Europa_xiangmuFinish');
                    }
                },
            },
            载人登月: {
                getRound: 5,
                intro: { content: '还剩#轮' },
                async contentx(player, name, num = 1) {
                    player.removeMark(name, num, false);
                    if (!player.hasMark(name)) {
                        player.markAuto('Europa_chaojixiangmu_finished', [name]);
                        player.$fullscreenpop(get.translation(name), 'thunder');
                        game.log(player, '完成修建', '#g' + get.translation(name));
                        await game.me.chooseControl('ok').set('dialog', ui.create.dialog('德国完成载月!', '<img style=width:238px src=extension/欧陆风云/image/icon/Europa_chaojixiangmu_载人登月.png>'));
                        await player.draw(2);
                        player.addSkill(name);
                        await _status.event.trigger('Europa_xiangmuFinish');
                    }
                },
                trigger: { global: 'phaseEnd' },
                forced: true,
                content() {
                    player.draw();
                },
            },
            刚果湖: {
                getRound: 5,
                intro: { content: '还剩#轮' },
                async contentx(player, name, num = 1) {
                    player.removeMark(name, num, false);
                    if (!player.hasMark(name)) {
                        player.markAuto('Europa_chaojixiangmu_finished', [name]);
                        player.$fullscreenpop(get.translation(name), 'thunder');
                        game.log(player, '完成修建', '#g' + get.translation(name));
                        player.addSkill(name);
                        await _status.event.trigger('Europa_xiangmuFinish');
                    }
                },
                trigger: { player: 'phaseUseBegin' },
                forced: true,
                async content(event, trigger, player) {
                    const cards = get.bottomCards(3, true);
                    const result = await player
                        .chooseButton(['刚果湖:选择获得其中两张牌', cards], 2, true)
                        .set('ai', (button) => {
                            const player = get.player();
                            return get.value(button.link, player);
                        })
                        .forResult();
                    if (result.bool) await player.gain(result.links, 'gain2');
                },
            },
            超级宽轨: {
                getRound: 12,
                intro: { content: '还剩#轮' },
                async contentx(player, name, num = 1) {
                    player.removeMark(name, num, false);
                    if (!player.hasMark(name)) {
                        player.markAuto('Europa_chaojixiangmu_finished', [name]);
                        player.$fullscreenpop(get.translation(name), 'thunder');
                        game.log(player, '完成修建', '#g' + get.translation(name));
                        player.addSkill(name);
                        await _status.event.trigger('Europa_xiangmuFinish');
                    }
                },
                mod: {
                    globalFrom(from, to) {
                        if (from === to) return;
                        return -Infinity;
                    },
                },
                trigger: { player: 'phaseEnd' },
                filter(event, player) {
                    return game.hasPlayer((t) => t !== player);
                },
                prompt2: () => '获得所有其他角色一张牌,若有角色无牌可得,则你选择令其减1点体力上限或令你当前修建的超级项目的轮数-1',
                async content(event, trigger, player) {
                    const targets = game.filterPlayer((t) => t !== player).sortBySeat();
                    player.line(targets);
                    for (const target of targets) {
                        const resultx = await player.gainPlayerCard(target, 'he', true).forResult();
                        if (!resultx?.bool || !resultx.cards?.length) {
                            const xiangmu = player.getStorage('Europa_chaojixiangmu').find((i) => !player.getStorage('Europa_chaojixiangmu_finished').includes(i));
                            const result = xiangmu
                                ? await player
                                    .chooseControl()
                                    .set('choiceList', ['令' + get.translation(target) + '减1点体力上限', '减少项目' + get.translation(xiangmu) + '一轮修建时间'])
                                    .set('target', target)
                                    .set('ai', () => {
                                        const player = get.player(),
                                            target = get.event().target;
                                        return get.attitude(player, target) > 0 ? 1 : 0;
                                    })
                                    .forResult()
                                : { index: 0 };
                            if (result.index === 0) {
                                player.line(target);
                                await target.loseMaxHp();
                            } else {
                                await lib.skill[xiangmu].contentx(player, xiangmu, 1);
                            }
                        }
                    }
                },
            },
            大威力核弹: {
                getRound: 9,
                intro: { content: '还剩#轮' },
                async contentx(player, name, num = 1) {
                    player.removeMark(name, num, false);
                    if (!player.hasMark(name)) {
                        player.markAuto('Europa_chaojixiangmu_finished', [name]);
                        player.$fullscreenpop(get.translation(name), 'thunder');
                        game.log(player, '完成修建', '#g' + get.translation(name));
                        const targets = game.filterPlayer((target) => {
                            return target !== player || !player.getStorage('Europa_chaojixiangmu_finished').includes('Europa_chaojixiangmu_全国避难地堡');
                        });
                        for (const target of targets) {
                            if (target.maxHp > 1) await target.loseMaxHp(target.maxHp - 1);
                            if (target.hp > 1) await target.loseHp(target.hp - 1);
                            for (var i = 1; i <= 5; i++) {
                                while (player.hasEnabledSlot(i)) {
                                    await player.disableEquip('equip' + i);
                                }
                            }
                        }
                        await _status.event.trigger('Europa_xiangmuFinish');
                    }
                },
            },
            全国避难地堡: {
                getRound: 10,
                intro: { content: '还剩#轮' },
                async contentx(player, name, num = 1) {
                    player.removeMark(name, num, false);
                    if (!player.hasMark(name)) {
                        player.markAuto('Europa_chaojixiangmu_finished', [name]);
                        player.$fullscreenpop(get.translation(name), 'thunder');
                        game.log(player, '完成修建', '#g' + get.translation(name));
                        player.addSkill(name);
                        await _status.event.trigger('Europa_xiangmuFinish');
                    }
                },
                trigger: { player: ['linkAfter', 'turnOverAfter'] },
                filter(event, player) {
                    return !player.isLinked() && !player.isTurnedOver();
                },
                forced: true,
                async content(event, trigger, player) {
                    if (player.isDamaged()) await player.recoverTo(player.maxHp);
                    await player.draw(5);
                },
                group: 'Europa_chaojixiangmu_niepan',
            },
            niepan: {
                trigger: { player: 'damageBegin4' },
                filter(event, player) {
                    if (player.storage.Europa_chaojixiangmu_niepan) return false;
                    return player.hp + player.hujia <= event.num;
                },
                forced: true,
                content() {
                    player.storage.Europa_chaojixiangmu_niepan = true;
                    trigger.cancel();
                    player.turnOver(true);
                },
            },
        },
    },
    Europa_riermanniya_skill: {
        mod: {
            canBeGained(card, source, player) {
                if (player.getEquips('Europa_riermanniya').includes(card)) return false;
            },
            canBeDiscarded(card, source, player) {
                if (player.getEquips('Europa_riermanniya').includes(card)) return false;
            },
            canBeReplaced(card, player) {
                if (player.getEquips('Europa_riermanniya').includes(card)) return false;
            },
            cardDiscardable(card, player) {
                if (player.getEquips('Europa_riermanniya').includes(card)) return false;
            },
            cardEnabled2(card, player) {
                if (player.getEquips('Europa_riermanniya').includes(card)) return false;
            },
        },
        equipSkill: true,
        trigger: { player: 'loseBefore' },
        filter(event, player) {
            const cards = player.getEquips('Europa_riermanniya');
            return event.cards && event.cards.some((card) => cards.includes(card));
        },
        forced: true,
        popup: false,
        content() {
            trigger.cards.removeArray(player.getEquips('Europa_riermanniya'));
        },
    },
    Europa_guojiadexinfangzi: {
        nobracket: true,
        mod: { maxHandcardBase: (player) => player.getHp() * 1 },
        trigger: { global: 'phaseBegin' },
        filter(event, player) {
            return event.player !== player && !game.hasPlayer((current) => current !== player && current.maxHp >= player.maxHp);
        },
        logTarget: 'player',
        check(event, player) {
            if (player.getHp() <= 2) return false;
            return get.attitude(player, event.player) > 0;
        },
        prompt2: () => '令其增加1点体力上限并摸一张牌,失去1点体力并减1点体力上限',
        async content(event, trigger, player) {
            const target = trigger.player;
            await target.gainMaxHp();
            await target.draw();
            await player.loseHp();
            await player.loseMaxHp();
        },
    },
    Europa_neibuquanzizhiluan: {
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        filter(event, player) {
            return event.name !== 'phase' || game.phaseNumber === 0;
        },
        forced: true,
        async content(event, trigger, player) {
            await player.Europa_openGroReich();
        },
        group: ['Europa_neibuquanzizhiluan_event', 'Europa_neibuquanzizhiluan_hp', 'Europa_neibuquanzizhiluan_loseHp'],
        subSkill: {
            event: {
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return game.roundNumber === 2;
                },
                forced: true,
                async content(event, trigger, player) {
                    await game.me.chooseControl('ok').set('dialog', ui.create.dialog('希特勒被枪击!', '<img style=width:238px src=extension/欧陆风云/image/icon/Europa_neibuquanzizhiluan.png>'));
                    const list = lib.skill.Europa_paixi.getList2.filter((item) => player.hasSkill('Europa_paixi_' + item) && player.countMark('Europa_paixi_' + item) > 1);
                    if (list.length) {
                        for (var item of list) {
                            player.removeMark('Europa_paixi_' + item, Math.min(2, player.countMark('Europa_paixi_' + item) - 1), false);
                            game.log(item, '#y忠诚度-2');
                        }
                    }
                    await player.loseHp(5);
                },
            },
            hp: {
                trigger: { player: 'changeHpEnd' },
                filter(event, player) {
                    if (event.num >= 0) return false;
                    return [15, 10, 5].some(
                        (num) =>
                            player.getHp() <= num &&
                            !game.getAllGlobalHistory('changeHp', (evt) => {
                                return evt.player === player && evt._Europa_neibuquanzizhiluan?.includes(num);
                            }).length
                    );
                },
                forced: true,
                content() {
                    const list = [15, 10, 5].filter(
                        (num) =>
                            player.getHp() <= num &&
                            !game.getAllGlobalHistory('changeHp', (evt) => {
                                return evt.player === player && evt._Europa_neibuquanzizhiluan?.includes(num);
                            }).length
                    );
                    trigger.set('_Europa_neibuquanzizhiluan', list);
                    player.loseMaxHp(5 * list.length);
                    player.draw(5 * list.length);
                },
            },
            loseHp: {
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    return lib.skill.Europa_paixi.getList2.some((item) => player.countMark('Europa_paixi_' + item) === 1);
                },
                forced: true,
                content() {
                    player.loseHp(lib.skill.Europa_paixi.getList2.filter((item) => player.countMark('Europa_paixi_' + item) === 1).length);
                },
            },
        },
    },
    Europa_shiqudeshinian: {
        nobracket: true,
        trigger: { player: 'useCard' },
        filter(event, player) {
            if (!(get.tag(event.card, 'damage') > 0.5) || !event.targets || event.targets.length !== 1) return false;
            return !player.hasHistory('lose', (evt) => {
                if (evt.parent != event) return false;
                return Object.keys(evt.gaintag_map).some((i) => evt.gaintag_map[i].includes('Europa_shiqudeshinian_tag'));
            });
        },
        forced: true,
        async content(event, trigger, player) {
            const result = await player
                .chooseToDiscard(get.translation(event.name) + ':弃置一张牌或失去1点体力', 'he')
                .set('ai', (card) => {
                    const player = get.player();
                    if (get.tag(card, 'recover')) return false;
                    return get.effect(player, { name: 'losehp' }, player, player) > get.effect(player, { name: 'guohe_copy2' }, player, player) ? 7 - get.value(card) : 0;
                })
                .forResult();
            if (!result.bool) await player.loseHp();
            trigger.baseDamage = 1 + (trigger.baseDamage || 1);
            player
                .when('useCardAfter')
                .filter((evt) => {
                    if (!evt.cards?.someInD()) return false;
                    return evt === trigger && player.hasHistory('sourceDamage', (evt) => evt.card === trigger.card);
                })
                .then(() => player.gain(trigger.cards.filterInD(), 'gain2').gaintag.add('Europa_shiqudeshinian_tag'));
        },
        subSkill: { tag: {} },
    },
    Europa_zuizhongshengli: {
        zhuSkill: true,
        nobracket: true,
        trigger: { global: 'phaseEnd' },
        filter(event, player) {
            if (event.player === player) return false;
            return event.player.countCards('he') && event.player.hasClan('团结协定');
        },
        async cost(event, trigger, player) {
            const target = trigger.player,
                list = ['Europa_zuizhongshengli', player];
            event.result = await trigger.player
                .chooseToGive(player, 'he', get.prompt2(...list))
                .set('ai', (card) => {
                    const player = get.player(),
                        target = get.event().parent.player;
                    return get.attitude(player, target) > 0 ? 7 - get.value(card) : 0;
                })
                .forResult();
        },
        popup: false,
        async content(event, trigger, player) {
            const target = trigger.player,
                [card] = event.cards;
            await player.showCards(event.cards, get.translation(target) + '【' + get.translation(event.name) + '】给予');
            await target[get.tag(card, 'damage') > 0.5 ? 'draw' : 'recover']();
        },
    },
    Europa_kuangyezhengcheng: {
        nobracket: true,
        trigger: { player: ['Europa_paixi_保守派After', 'Europa_xiangmuFinish'] },
        filter(event, player, name) {
            return lib.skill.Europa_paixi.getList2.some((item) => item !== '保守派' && player.countMark('Europa_paixi_' + item) > 1);
        },
        forced: true,
        async content(event, trigger, player) {
            const list = lib.skill.Europa_paixi.getList2.filter((item) => item !== '保守派' && player.countMark('Europa_paixi_' + item) > 1);
            for (var item of list) {
                player.removeMark('Europa_paixi_' + item, 1, false);
                game.log(item, '#y忠诚度-1');
            }
            const name = event.triggername === 'Europa_xiangmuFinish';
            await player[name ? 'draw' : 'recover'](name ? 2 : 1);
        },
        derivation: 'Europa_diercichangdaozhiye',
        group: ['Europa_kuangyezhengcheng_open', 'Europa_kuangyezhengcheng_lose', 'Europa_kuangyezhengcheng_addSkill'],
        getNum: (player) => lib.skill.Europa_paixi.getList2.filter((item) => item !== '保守派' && player.hasSkill('Europa_paixi_' + item)).length,
        subSkill: {
            addSkill: {
                trigger: { player: ['Europa_paixi_backupAfter', 'Europa_zhenzhengdetuanjieAfter'] },
                filter(event, player) {
                    if (player.hasSkill('Europa_diercichangdaozhiye', null, false, false)) return false;
                    return !lib.skill.Europa_kuangyezhengcheng.getNum(player);
                },
                forced: true,
                content() {
                    player.addSkills('Europa_diercichangdaozhiye');
                },
            },
            open: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    return event.name !== 'phase' || game.phaseNumber === 0;
                },
                forced: true,
                async content(event, trigger, player) {
                    await player.Europa_openGroReich();
                },
            },
            lose: {
                trigger: { player: 'phaseEnd' },
                filter(event, player) {
                    return lib.skill.Europa_kuangyezhengcheng.getNum(player) > 0;
                },
                forced: true,
                content() {
                    player.loseHp(lib.skill.Europa_kuangyezhengcheng.getNum(player));
                },
            },
        },
    },
    Europa_zhenzhengdetuanjie: {
        nobracket: true,
        enable: 'phaseUse',
        filter(event, player) {
            const cards = player.getCards('h', { name: ['sha', 'juedou'] });
            return cards.length > 1 && cards.every((card) => lib.filter.cardDiscardable(card, player));
        },
        usable: 1,
        async content(event, trigger, player) {
            await player.discard(player.getCards('h', { name: ['sha', 'juedou'] }));
            const list = lib.skill.Europa_paixi.getList2.filter((item) => item !== '保守派' && player.countMark('Europa_paixi_' + item) === 1);
            if (list.length) {
                const result = await player
                    .chooseControl(list, 'cancel2')
                    .set('ai', () => {
                        return get
                            .event()
                            .controls.filter((i) => i !== 'cancel2')
                            .randomGet();
                    })
                    .set('prompt', '是否清洗一个非保守派公开反对派系？')
                    .forResult();
                if (result.control === 'cancel2') return;
                event._destroy = true;
                player.popup(result.control);
                player.removeSkill('Europa_paixi_' + result.control);
                game.log(player, '清洗了', '#g' + get.translation(result.control));
            }
        },
        ai: {
            order: 1,
            result: {
                player(player) {
                    const goon = lib.skill.Europa_paixi.getList2.some((item) => item !== '保守派' && player.countMark('Europa_paixi_' + item) === 1);
                    return goon ? 1 : 0;
                },
            },
        },
        group: 'Europa_zhenzhengdetuanjie_effect',
        subSkill: {
            effect: {
                trigger: { player: 'Europa_zhenzhengdetuanjieAfter' },
                filter(event, player) {
                    return event._destroy && player.hasSkill('Europa_paixi_保守派');
                },
                forced: true,
                async content(event, trigger, player) {
                    const limit = lib.skill.Europa_paixi.getList.length;
                    if (player.countMark('Europa_paixi_保守派') < limit) {
                        const num = limit - player.countMark('Europa_paixi_保守派');
                        player.addMark('Europa_paixi_保守派', num, false);
                        game.log('保守派', '#g忠诚度+' + num);
                        if (player.countCards('h') < player.getHp()) {
                            await player.drawTo(player.getHp());
                        }
                    } else player.addTempSkill('Europa_zhenzhengdetuanjie_buff');
                },
            },
            buff: {
                charlotte: true,
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    if (
                        player.hasHistory('lose', (evt) => {
                            return evt.type == 'discard' && (evt.cards2 || []).someInD('d');
                        })
                    )
                        return true;
                    return player.getStorage('Europa_chaojixiangmu').some((i) => !player.getStorage('Europa_chaojixiangmu_finished').includes(i));
                },
                forced: true,
                async content(event, trigger, player) {
                    const cards = player
                        .getHistory('lose', (evt) => {
                            return evt.type == 'discard' && (evt.cards2 || []).someInD('d');
                        })
                        .reduce((list, evt) => {
                            return list.addArray(evt.cards2.filterInD('d'));
                        });
                    const xiangmu = player.getStorage('Europa_chaojixiangmu').find((i) => !player.getStorage('Europa_chaojixiangmu_finished').includes(i));
                    let result;
                    if (!xiangmu) result = { index: 1 };
                    else if (!cards.length) result = { index: 0 };
                    else
                        result = await player
                            .chooseControl()
                            .set('choiceList', ['令' + get.translation(xiangmu) + '进度-1轮', '获得' + cards])
                            .set('ai', () => 1)
                            .forResult();
                    if (result.index === 0) await lib.skill[xiangmu].contentx(player, xiangmu, 1);
                    else await player.gain(cards, 'gain2');
                },
            },
        },
    },
    Europa_diercichangdaozhiye: {
        nobracket: true,
        enable: 'phaseUse',
        filter(event, player) {
            return player.maxHp > 10;
        },
        enable: 'phaseUse',
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            lib.config.background_music = 'music_custom';
            lib.config.background_music_src = ui.backgroundMusic.src = `extension/欧陆风云/audio/effect/长刀之夜.mp3`;
            await game.me.chooseControl('ok').set('dialog', ui.create.dialog('第二次长刀之夜晚', '<img style=width:238px src=extension/欧陆风云/image/icon/' + event.name + '.png>'));
            await player.loseMaxHp(10);
            await player.drawTo(player.maxHp);
            await player.recoverTo(player.maxHp);
            player.addSkill('Europa_diercichangdaozhiye_effect');
        },
        ai: {
            order: 1,
            result: { player: 1 },
        },
        subSkill: {
            effect: {
                charlotte: true,
                init(player) {
                    if (player.hasSkill('Europa_paixi_保守派')) {
                        const limit = lib.skill.Europa_paixi.getList.length;
                        if (player.countMark('Europa_paixi_保守派') < limit) {
                            const num = limit - player.countMark('Europa_paixi_保守派');
                            player.addMark('Europa_paixi_保守派', num, false);
                            game.log('保守派', '#g忠诚度+' + num);
                        }
                    }
                },
                mark: true,
                intro: { content: '保守派亲密度始终为最高,且无法通过<大日耳曼帝国>机制获得【起义】' },
            },
        },
    },
    Europa_qiannianyongyuan: {
        nobracket: true,
        zhuSkill: true,
        trigger: { global: 'die' },
        filter(event, player) {
            return event.player.hasClan('团结协定');
        },
        forced: true,
        logTarget: 'player',
        async content(event, trigger, player) {
            await player.gain(
                Array.from({ length: 3 }).map(() => {
                    return game.createCard('Europa_qiyi', lib.suit.randomGet(), get.rand(1, 13));
                }),
                'gain2'
            );
            const target = trigger.player;
            if (target.countCards('he')) await player.gain(target.getCards('he'), target, 'giveAuto');
            if (target.maxHp > 0) await player.gainMaxHp(target.maxHp);
        },
    },
    Europa_sirenxiaozu: {
        nobracket: true,
        trigger: { global: 'roundStart' },
        filter(event, player) {
            if (!player.hasSkill('Europa_paixi_改革派')) return false;
            const list = lib.skill.Europa_paixi.getList;
            return player.countMark('Europa_paixi_改革派') === list.indexOf('俯首帖耳') + 1 && !player.hasSkill('Europa_quanmiannuli') && !player.getStorage('Europa_guojiajuqi').length;
        },
        forced: true,
        content() {
            player.changeSkills(['Europa_ouluobazhimeng'], [event.name]);
        },
        derivation: 'Europa_ouluobazhimeng',
        group: ['Europa_sirenxiaozu_open', 'Europa_sirenxiaozu_loseHp'],
        subSkill: {
            open: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    return event.name !== 'phase' || game.phaseNumber === 0;
                },
                forced: true,
                async content(event, trigger, player) {
                    await player.Europa_openGroReich();
                },
            },
            loseHp: {
                trigger: { player: ['Europa_guojiajuqiAfter', 'phaseJieshuBegin'] },
                filter(event, player) {
                    if (event.name === 'Europa_guojiajuqi') return (event._destroy = true);
                    if (event.name === 'Europa_quanmiannuli') return ['遣返奴隶', '禁用奴隶栏目'].includes(event.control);
                    return !game.getAllGlobalHistory('everything', (evt) => {
                        if (evt.player !== player) return false;
                        if (evt.name === 'Europa_guojiajuqi') return (evt._destroy = true);
                        if (evt.name === 'Europa_quanmiannuli') return ['遣返奴隶', '禁用奴隶栏目'].includes(evt.control);
                        return false;
                    }).length;
                },
                forced: true,
                content() {
                    switch (trigger.name) {
                        case 'Europa_guojiajuqi':
                            player.loseMaxHp(2);
                            break;
                        case 'Europa_quanmiannuli':
                            player[trigger.control === '禁用奴隶栏目' ? 'loseMaxHp' : 'loseHp'](trigger.control === '禁用奴隶栏目' ? 6 : 1);
                            break;
                        default:
                            player.loseHp(4);
                            break;
                    }
                },
            },
        },
    },
    Europa_guanshuitongmeng: {
        nobracket: true,
        enable: 'phaseUse',
        filterTarget: true,
        usable: 1,
        async content(event, trigger, player) {
            const { target } = event;
            const resultx = await target.chooseBool('是否获得<关税同盟>标记？').forResult();
            if (resultx.bool) {
                target.addMark(event.name, 1);
                await player.chooseToGive(target, 2, 'he', true);
            } else {
                const names = lib.inpile.filter((name) => {
                    const card = { name };
                    return get.tag(card, 'damage') > 0.5 && get.type(card) === 'trick';
                });
                const result = await player
                    .chooseButton(['是否选择两张伤害类锦囊牌对' + get.translation(target) + '使用？', '<div class="text center">若均对其造成伤害,其获得<关税同盟>标记,你获得其一张牌</div>', [names, 'vcard']], 2)
                    .set('target', target)
                    .set('ai', (button) => {
                        const player = get.player(),
                            target = get.event().target;
                        return player.canUse(lib.element.VCard({ name: button.link[2] }), target, false);
                    })
                    .forResult();
                if (result.links?.length) {
                    const names = result.links.map((i) => i[2]);
                    for (const name of names) {
                        await player.useCard({ name }, target, false);
                    }
                    if (names.every((name) => target.hasHistory('damage', (evt) => evt.getParent(event.name) === event && evt.card?.name === name))) {
                        target.addMark(event.name, 1);
                        await player.gainPlayerCard(target, 'he', true);
                    }
                }
            }
        },
        marktext: '税',
        intro: { content: 'mark' },
        ai: {
            order: 7,
            result: {
                target(player, target) {
                    return target.hasMark('Europa_guanshuitongmeng') ? 0 : -5;
                },
            },
        },
        group: 'Europa_guanshuitongmeng_gain',
        subSkill: {
            gain: {
                trigger: { player: 'phaseJieshuBegin' },
                filter(event, player) {
                    return game.hasPlayer((target) => target.hasMark('Europa_guanshuitongmeng') && target.countCards('he'));
                },
                logTarget(event, player) {
                    return game.filterPlayer((target) => target.hasMark('Europa_guanshuitongmeng') && target.countCards('he')).sortBySeat();
                },
                prompt2(event, player) {
                    const targets = game.filterPlayer((target) => target.hasMark('Europa_guanshuitongmeng') && target.countCards('he')).sortBySeat();
                    return '令' + get.translation(targets) + '交给你一张牌';
                },
                async content(event, trigger, player) {
                    for (const target of event.targets) await target.chooseToGive(player, 'he');
                },
            },
        },
    },
    Europa_deguoxinshuguang: {
        zhuSkill: true,
        trigger: { global: 'damageEnd' },
        filter(event, player) {
            if (event.player === player || !event.player.isIn() || !player.countCards('h')) return false;
            return event.player.hasClan('团结协定');
        },
        popup: false,
        async cost(event, trigger, player) {
            const target = trigger.player,
                list = ['Europa_deguoxinshuguang', target];
            event.result = await player
                .chooseToGive(target, get.prompt2(...list), [1, player.hasSkill('Europa_ouluobazhimeng') ? Infinity : 1])
                .set('ai', (card) => {
                    const player = get.player(),
                        target = get.event().getTrigger().player;
                    return get.attitude(player, target) * (1 / (get.value(card) || 0.5));
                })
                .forResult();
        },
        async content(event, trigger, player) {
            await target.chooseToUse((card) => {
                return lib.filter.cardEnabled(card, _status.event.player, _status.event);
            }, '是否使用一张牌？');
        },
    },
    Europa_ouluobazhimeng: {
        nobracket: true,
        trigger: {
            player: 'Europa_xiangmuFinish',
            global: ['gainAfter', 'loseAsyncAfter'],
        },
        filter(event, player, name) {
            return name === 'Europa_xiangmuFinish' || event.giver === player;
        },
        check(event, player) {
            return player.maxHp > 1 && player.maxHp < 20;
        },
        async content(event, trigger, player) {
            await player.loseMaxHp();
            await player.draw(20 - player.maxHp);
        },
    },
    Europa_hangyunshuniu: {
        nobracket: true,
        trigger: { player: 'useCard' },
        filter(event, player) {
            if (player.countCards('h') >= player.getHandcardLimit()) return false;
            return event.card && event.card.name === 'Europa_shangyemaoyi';
        },
        forced: true,
        content() {
            player.drawTo(player.getHandcardLimit());
        },
        group: 'Europa_hangyunshuniu_view',
        subSkill: {
            view: {
                enable: 'phaseUse',
                viewAs: { name: 'Europa_shangyemaoyi' },
                filter(event, player) {
                    return player.hasCard({ type: 'equip' }, 'hes');
                },
                usable: 1,
                position: 'hes',
                filterCard: { type: 'equip' },
                check: (card) => 7 - get.value(card),
                prompt: '将一张装备牌当作【商业贸易】使用',
            },
        },
    },
    Europa_shuaiqiaozhuzhuanghua: {
        nobracket: true,
        trigger: { player: 'phaseJieshuBegin' },
        filter(event, player) {
            return player.countCards('h') && player.hasHistory('lose', (evt) => evt.getParent('phaseDiscard', true) && evt.hs.length);
        },
        forced: true,
        async content(event, trigger, player) {
            const cards = player.getDiscardableCards(player, 'h');
            if (cards.length) {
                await player.discard(cards);
                const maoyi = new lib.element.VCard({ name: 'Europa_shangyemaoyi' });
                if (cards.length >= 2 && player.hasUseTarget(maoyi)) await player.chooseUseTarget(maoyi, true, false);
            }
        },
    },
    Europa_weideguofuwudejingji: {
        nobracket: true,
        trigger: { global: 'phaseBegin' },
        filter(event, player) {
            return player.isDamaged() && event.player.hasSkill('Europa_ouzhouzhizhu');
        },
        async cost(event, trigger, player) {
            const target = trigger.player;
            const draws = Array.from({ length: player.getDamagedHp() }).map((_, i) => get.cnNumber(i + 1) + '点');
            event.result = await target
                .chooseControl(draws, 'cancel2')
                .set('prompt', get.prompt2('Europa_weideguofuwudejingji', player))
                .set('ai', () => {
                    const player = get.player(),
                        target = get.event().parent.player;
                    if (get.attitude(player, target) > 0) return target.getDamagedHp() - 1;
                    return 'cancel2';
                })
                .forResult();
            event.result.bool = event.result.control !== 'cancel2';
            event.result.cost_data = draws.indexOf(event.result.control) + 1;
        },
        async content(event, trigger, player) {
            const target = trigger.player,
                num = event.cost_data;
            target.line(player);
            await player.recover(num);
            const result = target.choosePlayerCard(player, num, 'h', true).forResult();
            if (result?.bool && result.cards?.length) {
                target.addTempSkill('Europa_weideguofuwudejingji_effect');
                target.markAuto('Europa_weideguofuwudejingji_effect', result.cards);
                player.directgains(
                    result.cards.map((card) => {
                        const cardx = ui.create.card();
                        cardx.init(get.cardInfo(card));
                        cardx._cardid = card.cardid;
                        return cardx;
                    }),
                    null,
                    'Europa_weideguofuwudejingji_effect'
                );
            }
        },
        subSkill: {
            effect: {
                charlotte: true,
                trigger: {
                    global: ['loseEnd', 'equipEnd', 'addJudgeEnd', 'gainEnd', 'loseAsyncEnd', 'addToExpansionEnd', 'dieEnd'],
                },
                filter(event, player) {
                    const storage = player.getStorage('Europa_weideguofuwudejingji_effect');
                    if (event.name === 'die') {
                        const target = event.player,
                            evt = target.getHistory('lose', (evtx) => evtx.getParent(2) === event)[0];
                        return evt?.hs?.some((card) => storage.includes(card));
                    }
                    return game.hasPlayer((target) => {
                        const evt = event.getl(target);
                        return evt?.hs?.some((card) => storage.includes(card));
                    });
                },
                forced: true,
                popup: false,
                firstDo: true,
                content() {
                    lib.skill[event.name].onremove(player, event.name, false);
                    if (trigger.name === 'die') {
                        const target = trigger.player,
                            evt = target.getHistory('lose', (evtx) => evtx.getParent(2) === trigger)[0];
                        player.unmarkAuto(
                            event.name,
                            evt.hs.filter((card) => storage.includes(card))
                        );
                    } else {
                        for (const target of game.player) {
                            const evt = trigger.getl(target);
                            if (evt?.hs?.some((card) => storage.includes(card))) {
                                player.unmarkAuto(
                                    event.name,
                                    evt.hs.filter((card) => storage.includes(card))
                                );
                            }
                        }
                    }
                    const cards = player.getStorage(event.name).slice();
                    if (cards.length) {
                        player.directgains(
                            cards.map((card) => {
                                const cardx = ui.create.card();
                                cardx.init(get.cardInfo(card));
                                cardx._cardid = card.cardid;
                                return cardx;
                            }),
                            null,
                            event.name
                        );
                    }
                },
                onremove(player, skill, clear) {
                    if (clear !== false) delete player.storage[skill];
                    const cards2 = player.getCards('s', (card) => card.hasGaintag(skill));
                    if (!cards2.length) return;
                    if (player.isOnline2()) {
                        player.send(
                            (cards, player) => {
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
                group: 'Europa_weideguofuwudejingji_use',
            },
            use: {
                charlotte: true,
                trigger: { player: ['useCardBefore', 'respondBefore'] },
                filter(event, player) {
                    const cards = player.getCards('s', (card) => card.hasGaintag('Europa_weideguofuwudejingji_effect') && card._cardid);
                    return event.cards?.some((card) => cards.includes(card));
                },
                forced: true,
                popup: false,
                firstDo: true,
                content() {
                    const cards = player.getStorage('Europa_weideguofuwudejingji_effect');
                    let cards2 = [];
                    for (const card of trigger.cards) {
                        const cardx = cards.find((cardx) => cardx.cardid == card._cardid);
                        if (cardx) cards2.push(cardx);
                    }
                    const cards3 = trigger.cards.slice();
                    trigger.cards = cards2;
                    trigger.card.cards = cards2;
                    if (player.isOnline2()) {
                        player.send(
                            (cards, player) => {
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
        },
    },
    Europa_binlingbengkuidebujixian: {
        nobracket: true,
        trigger: { player: ['phaseJieshuBegin', 'turnOverAfter'] },
        filter(event, player) {
            return event.name === 'turnOver' || player.countCards('h') < player.getHandcardLimit();
        },
        forced: true,
        content() {
            if (trigger.name === 'turnOver') player.draw(2);
            else player.turnOver();
        },
    },
    Europa_dejunjingruizhujun: {
        nobracket: true,
        enable: 'chooseToUse',
        filter(event, player) {
            if (player.hasCard((card) => get.tag(card, 'damage') > 0.5, 'h') || player.countCards('h') <= player.getHp()) return false;
            return [['sha', 'fire'], ['huogong']].some((info) => event.filterCard({ name: info[0], nature: info[1] }, player, event));
        },
        chooseButton: {
            dialog(event, player) {
                const list = get
                    .inpileVCardList((info) => {
                        return info[2] === 'huogong' || info[3] === 'fire';
                    })
                    .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                return ui.create.dialog('德军精锐驻军', [list, 'vcard']);
            },
            filter(button, player) {
                const event = _status.event.parent;
                return event.filterCard({ name: button.link[2], nature: button.link[3] }, player, event);
            },
            check(button) {
                const event = _status.event.parent;
                if (event.type != 'phase') return 1;
                return get.player().getUseValue({ name: button.link[2], nature: button.link[3] });
            },
            backup(links, player) {
                return {
                    filterCard: () => false,
                    selectCard: -1,
                    viewAs: { name: links[0][2], nature: links[0][3] },
                    precontent() {
                        player.showHandcards();
                        player.chooseToDiscard(player.countCards('h') - player.getHp(), 'h', true);
                    },
                };
            },
            prompt(links, player) {
                return '展示手牌,将手牌数弃置至体力值,视为使用' + (get.translation(links[0][3]) || '') + '【' + get.translation(links[0][2]) + '】';
            },
        },
        hiddenCard(player, name) {
            if ((_status.connectMode && player.hasCard((card) => get.tag(card, 'damage') > 0.5, 'h')) || player.countCards('h') <= player.getHp()) return false;
            return name === 'sha' || name === 'huogong';
        },
        ai: {
            fireAttack: true,
            respondSha: true,
            skillTagFilter(player, tag, arg) {
                if (arg == 'respond') return false;
                if ((_status.connectMode && player.hasCard((card) => get.tag(card, 'damage') > 0.5, 'h')) || player.countCards('h') <= player.getHp()) return false;
            },
            order(item, player) {
                if (player && _status.event.type == 'phase') {
                    let max = 0,
                        names = [['sha', 'fire'], ['huogong']];
                    names = names.map((namex) => {
                        return { name: namex[0], nature: namex[1] };
                    });
                    names.forEach((card) => {
                        if (player.getUseValue(card) > 0) {
                            let temp = get.order(card);
                            if (temp > max) max = temp;
                        }
                    });
                    if (max > 0) max += 0.5;
                    return max;
                }
                return 0.5;
            },
            result: { player: 1 },
        },
        group: 'Europa_dejunjingruizhujun_fire',
        subSkill: {
            backup: {},
            used: { charlotte: true },
            fire: {
                trigger: { source: 'damageBegin1' },
                filter(event, player) {
                    if (player.hasSkill('Europa_dejunjingruizhujun_used')) return false;
                    return player.isPhaseUsing() && event.hasNature('fire') && player.getHp() <= player.countCards('h');
                },
                forced: true,
                logTarget: 'player',
                content() {
                    player.addTempSkill('Europa_dejunjingruizhujun_used', 'phaseUseAfter');
                    trigger.num++;
                },
            },
        },
    },
    Europa_dangweijuntujibuduilijian: {
        nobracket: true,
        mod: { maxHandcardFinal: () => 2 },
        trigger: {
            player: 'useCard',
            global: 'phaseEnd',
        },
        filter(event, player) {
            if (event.name === 'phase') return player.countCards('h') !== 2;
            return player.isPhaseUsing() && get.tag(event.card, 'damage') > 0.5 && game.hasPlayer((t) => t != player);
        },
        forced: true,
        content() {
            if (trigger.name === 'phase') {
                if (player.countCards('h') < 2) player.drawTo(2);
                else player.chooseToDiscard(player.countCards('h') - 2, 'h', true);
            } else {
                const targets = game.filterPlayer((t) => t !== player);
                player.line(targets);
                trigger.directHit.addArray(targets);
                trigger.baseDamage = 1 + (trigger.baseDamage || 1);
            }
        },
        ai: {
            noh: true,
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
                if (tag === 'noh') return true;
                return player.isPhaseUsing() && arg.card && get.tag(arg.card, 'damage') > 0.5 && player !== arg.target;
            },
        },
    },
    Europa_yanjuanyuanshouzhizheng: {
        nobracket: true,
        trigger: { player: 'phaseBegin' },
        check(event, player) {
            return !player.hasCard((card) => player.hasValueTarget(card), 'hs');
        },
        content() {
            player.addTempSkill('zishou2');
            player.tempBanSkill('Europa_dangweijuntujibuduilijian', 'forever');
            player
                .when({ player: 'phaseEnd' }, false)
                .filter((evt) => {
                    return evt !== trigger.getParent('phase');
                })
                .assign({ firstDo: true })
                .then(() => {
                    delete player.storage[`temp_ban_Europa_dangweijuntujibuduilijian`];
                })
                .finish();
        },
        ai: { combo: 'Europa_dangweijuntujibuduilijian' },
    },
    Europa_haohaoguorizi: {
        nobracket: true,
        enable: 'phaseUse',
        filter(event, player) {
            return player.isTempBanned('Europa_dangweijuntujibuduilijian') && player.countCards('h');
        },
        usable: 1,
        content() {
            player.addGaintag(player.getCards('h'), 'Europa_haohaoguorizi_rizi');
        },
        ai: {
            order: 10,
            result: { player: 1 },
            combo: 'Europa_dangweijuntujibuduilijian',
        },
        group: 'Europa_haohaoguorizi_rizi',
        subSkill: {
            rizi: {
                mod: {
                    cardEnabled2(card, player) {
                        if (_status._Europa_haohaoguorizi || _status.event.skill === 'Europa_haohaoguorizi_rizi_backup') return;
                        if (get.itemtype(card) === 'card' && card.hasGaintag('Europa_haohaoguorizi_rizi')) return false;
                        else if (card.cards?.some((cardx) => cardx.hasGaintag('Europa_haohaoguorizi_rizi'))) return false;
                    },
                },
                nobracket: true,
                enable: 'chooseToUse',
                hiddenCard(player, name) {
                    if (!player.hasCard((card) => _status.connectMode || card.hasGaintag('Europa_haohaoguorizi_rizi'), 'h')) return false;
                    return name === 'tao' || name === 'jiu';
                }, //QQQ
                filter(event, player) {
                    return ['tao', 'jiu'].some((name) => {
                        return player.hasCard((card) => {
                            if (!card.hasGaintag('Europa_haohaoguorizi_rizi')) return false;
                            _status._Europa_haohaoguorizi = true;
                            const bool = event.filterCard({ name, cards: [card] }, player, event);
                            delete _status._Europa_haohaoguorizi;
                            return bool;
                        }, 'h');
                    });
                },
                chooseButton: {
                    dialog(event, player) {
                        const list = get
                            .inpileVCardList((info) => {
                                return info[2] === 'tao' || info[2] === 'jiu';
                            })
                            .filter((info) => {
                                const name = info[2];
                                return player.hasCard((card) => {
                                    if (!card.hasGaintag('Europa_haohaoguorizi_rizi')) return false;
                                    _status._Europa_haohaoguorizi = true;
                                    const bool = event.filterCard({ name, cards: [card] }, player, event);
                                    delete _status._Europa_haohaoguorizi;
                                    return bool;
                                }, 'h');
                            });
                        return ui.create.dialog('好好过日子', [list, 'vcard']);
                    },
                    filter(button, player) {
                        const event = _status.event.parent;
                        _status._Europa_haohaoguorizi = true;
                        const bool = event.filterCard({ name: button.link[2] }, player, event);
                        delete _status._Europa_haohaoguorizi;
                        return bool;
                    },
                    check(button) {
                        const event = _status.event.parent;
                        if (event.type !== 'phase') return 1;
                        _status._Europa_haohaoguorizi = true;
                        const player = get.player(),
                            value = player.getUseValue({ name: button.link[2] });
                        delete _status._Europa_haohaoguorizi;
                        return value;
                    },
                    backup(links) {
                        return {
                            filterCard(card) {
                                return card.hasGaintag('Europa_haohaoguorizi_rizi');
                            },
                            popname: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            position: 'h',
                            viewAs: { name: links[0][2] },
                        };
                    },
                    prompt(links) {
                        return '将一张标记的牌当作' + (get.translation(links[0][3]) || '') + '【' + get.translation(links[0][2]) + '】使用';
                    },
                },
                ai: {
                    order: 1,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
            },
            rizi_backup: {},
        },
    },
    Europa_AfricaViceroy_xitele: {
        global: 'Europa_AfricaViceroy_xitele_global',
        getRidesLimit: 7,
        init(player) {
            if (!_status.Europa_AfricaViceroy_player) _status.Europa_AfricaViceroy_player = [];
            if (!_status.Europa_AfricaViceroy_build) _status.Europa_AfricaViceroy_build = [0, 2, 6];
            player.addMark('Europa_AfricaViceroy_xitele_tuzhu', 6);
            player.addMark('Europa_AfricaViceroy_xitele_nuli', 6);
            player.addMark('Europa_AfricaViceroy_xitele_jundui', 6);
        },
        mark: true,
        intro: {
            content(storage, player) {
                var str = '';
                str += '土著:' + player.countMark('Europa_AfricaViceroy_xitele_tuzhu');
                str += '奴隶:' + player.countMark('Europa_AfricaViceroy_xitele_nuli');
                str += '军队:' + player.countMark('Europa_AfricaViceroy_xitele_jundui');
                return str;
            },
        },
        async contentRides1(event, trigger, player) {
            player.recover(player.hasHistory('custom', (evt) => evt.Europa_longxiazhanzheng_baxi) ? 2 : 1);
        },
        async contentRides2(event, trigger, player) {
            if (
                player.hasCard(function (card) {
                    return lib.filter.cardDiscardable(card, player, 'Europa_AfricaViceroy_xitele');
                })
            ) {
                player.chooseToDiscard('hes', true);
                player.skip('phaseDiscard');
            }
        },
        async contentRides3(event, trigger, player) {
            const judgeEvent = player.judge((card) => {
                if (card.suit == 'heart') return 2;
                return -0.5;
            });
            judgeEvent.judge2 = (result) => result.bool;
            const { bool } = await judgeEvent.forResult();
            if (bool) {
                player.draw(2);
            }
        },
        async contentRides4(event, trigger, player) {
            const judgeEvent = player.judge((card) => {
                if (player.hasHistory('custom', (evt) => evt.Europa_AfricaViceroy_xitele_shoulieyuanqu_daxiang)) {
                    if (get.color(card) == 'black') return 2;
                } else {
                    if (card.suit == 'heart') return 2;
                }
                return -0.5;
            });
            judgeEvent.judge2 = (result) => result.bool;
            const { bool } = await judgeEvent.forResult();
            if (bool) {
                player.addSkill('Europa_AfricaViceroy_xitele_shoulieyuanqu_daxiang_zhanxiang');
                player.addTempSkill('Europa_AfricaViceroy_xitele_shoulieyuanqu_daxiang_distance', { player: 'phaseBegin' });
            }
            if (!player.hasHistory('custom', (evt) => evt.Europa_AfricaViceroy_xitele_shoulieyuanqu_daxiang)) {
                const mule_targets = game.filterPlayer(function (current) {
                    return ['name', 'name1', 'name2'].some((info) => current[info] && current[info] == 'Europa_tno_xigefulide_mule');
                });
                if (mule_targets.length) {
                    const result = await player.chooseCardTarget({
                        position: 'he',
                        filterCard: true,
                        mule: mule_targets,
                        filterTarget(card, player, target) {
                            return target != player && get.event('mule').includes(target);
                        },
                        selectCard: 2,
                        prompt: get.prompt('Europa_AfricaViceroy_xitele'),
                        prompt2: '你可以交给穆勒两张牌,移除其两枚土著和一枚军队,将♠️️改为黑色.',
                        ai1(card) {
                            if (card.name == 'du') return 20;
                            var val = get.value(card);
                            var player = _status.event.player;
                            if (get.position(card) == 'e') {
                                if (val <= 0) return 10;
                                return 10 / val;
                            }
                            return 6 - val;
                        },
                        ai2(target) {
                            var player = _status.event.player;
                            var att = get.attitude(player, target);
                            if (ui.selected.cards[0].name == 'du') return -2 * att;
                            if (att > 0) return 1.5 * att;
                            var num = get.select(_status.event.selectCard)[1];
                            if (att < 0 && num == 1) return -0.7 * att;
                            return att;
                        },
                    }).forResult();
                    if (result.targets?.length) {
                        await player.give(result.cards, result.targets[0]);
                        player.getHistory('custom').push({ Europa_AfricaViceroy_xitele_shoulieyuanqu_daxiang: true });
                    }
                }
            }
        },
        async contentRides5(event, trigger, player) {
            const judgeEvent = player.judge((card) => {
                if (player.hasHistory('custom', (evt) => evt.Europa_AfricaViceroy_xitele_shoulieyuanqu_heixingxing)) {
                    if (get.color(card) == 'black') return 2;
                } else {
                    if (card.suit == 'club') return 2;
                }
                return -0.5;
            });
            judgeEvent.judge2 = (result) => result.bool;
            const { bool } = await judgeEvent.forResult();
            if (bool) {
                player.addSkill('Europa_AfricaViceroy_xitele_shoulieyuanqu_heixingxing_add');
                player.addTempSkill('Europa_AfricaViceroy_xitele_shoulieyuanqu_heixingxing_remove', { player: 'phaseBegin' });
            }
            if (!player.hasHistory('custom', (evt) => evt.Europa_AfricaViceroy_xitele_shoulieyuanqu_heixingxing)) {
                const mule_targets = game.filterPlayer(function (current) {
                    return ['name', 'name1', 'name2'].some((info) => current[info] && current[info] == 'Europa_tno_xigefulide_mule');
                });
                if (mule_targets.length) {
                    const result = await player.chooseCardTarget({
                        position: 'he',
                        filterCard: true,
                        mule: mule_targets,
                        filterTarget(card, player, target) {
                            return target != player && get.event('mule').includes(target);
                        },
                        selectCard: 2,
                        prompt: get.prompt('Europa_AfricaViceroy_xitele'),
                        prompt2: '你可以交给穆勒两张牌,移除其两枚土著和一枚军队,将♣️️改为黑色.',
                        ai1(card) {
                            if (card.name == 'du') return 20;
                            var val = get.value(card);
                            var player = _status.event.player;
                            if (get.position(card) == 'e') {
                                if (val <= 0) return 10;
                                return 10 / val;
                            }
                            return 6 - val;
                        },
                        ai2(target) {
                            var player = _status.event.player;
                            var att = get.attitude(player, target);
                            if (ui.selected.cards[0].name == 'du') return -2 * att;
                            if (att > 0) return 1.5 * att;
                            return att;
                        },
                    }).forResult();
                    if (result.targets?.length) {
                        await player.give(result.cards, result.targets[0]);
                        player.getHistory('custom').push({ Europa_AfricaViceroy_xitele_shoulieyuanqu_heixingxing: true });
                    }
                }
            }
        },
        async contentRides6(event, trigger, player) {
            const judgeEvent = player.judge((card) => {
                if (player.hasHistory('custom', (evt) => evt.Europa_AfricaViceroy_xitele_shoulieyuanqu_lingyang)) {
                    if (get.color(card) == 'red') return 2;
                } else {
                    if (card.suit == 'diamond') return 2;
                }
                return -0.5;
            });
            judgeEvent.judge2 = (result) => result.bool;
            const { bool } = await judgeEvent.forResult();
            if (bool) {
                player.addSkill('Europa_AfricaViceroy_xitele_shoulieyuanqu_lingyang_effect');
                if (
                    game.hasPlayer(function (current) {
                        return current.inRange(player) && current.countDiscardableCards(player, 'he');
                    })
                ) {
                    const { bool, targets } = await player
                        .chooseTarget()
                        .set('selectTarget', [1, 2])
                        .set('filterTarget', (card, player, target) => {
                            return target.inRange(player) && target.countDiscardableCards(player, 'he');
                        })
                        .set('ai', (target) => {
                            const player = _status.event.player;
                            return get.effect(target, { name: 'guohe_copy2' }, player, player);
                        })
                        .forResult();
                    if (bool) {
                        player.line(targets);
                        for (const target of targets) {
                            await player.discardPlayerCard(target, 'he');
                        }
                    }
                }
            }
            if (!player.hasHistory('custom', (evt) => evt.Europa_AfricaViceroy_xitele_shoulieyuanqu_lingyang)) {
                const mule_targets = game.filterPlayer(function (current) {
                    return ['name', 'name1', 'name2'].some((info) => current[info] && current[info] == 'Europa_tno_xigefulide_mule');
                });
                if (mule_targets.length) {
                    const result = await player.chooseCardTarget({
                        position: 'he',
                        filterCard: true,
                        mule: mule_targets,
                        filterTarget(card, player, target) {
                            return target != player && get.event('mule').includes(target);
                        },
                        selectCard: 2,
                        prompt: get.prompt('Europa_AfricaViceroy_xitele'),
                        prompt2: '你可以交给穆勒两张牌,移除其两枚土著和一枚军队,将♦️️改为红色.',
                        ai1(card) {
                            if (card.name == 'du') return 20;
                            var val = get.value(card);
                            var player = _status.event.player;
                            if (get.position(card) == 'e') {
                                if (val <= 0) return 10;
                                return 10 / val;
                            }
                            return 6 - val;
                        },
                        ai2(target) {
                            var player = _status.event.player;
                            var att = get.attitude(player, target);
                            if (ui.selected.cards[0].name == 'du') return -2 * att;
                            if (att > 0) return 1.5 * att;
                            var num = get.select(_status.event.selectCard)[1];
                            if (att < 0 && num == 1) return -0.7 * att;
                            return att;
                        },
                    }).forResult();
                    if (result.targets?.length) {
                        await player.give(result.cards, result.targets[0]);
                        player.getHistory('custom').push({ Europa_AfricaViceroy_xitele_shoulieyuanqu_lingyang: true });
                    }
                }
            }
        },
        async contentRides7(event, trigger, player) {
            const list = [];
            list.push('选项一');
            list.push('选项二');
            const { control } = await player
                .chooseControl(list)
                .set('choiceList', [`从牌堆或弃牌堆随机获得一张【坦克底盘】并使用之`, `从牌堆中随机获得两张不计入出牌阶段使用次数的【杀】`])
                .set('ai', () => {
                    const player = get.player();
                    return '选项一';
                })
                .forResult();
            if (control == '选项一') {
                var card = get.cardPile(function (cardx) {
                    return cardx.name == 'Europa_tankChassis';
                });
                if (card) player.gain(card, 'gain2');
                await player.chooseUseTarget(card, player, 'nothrow', 'nopopup', true);
            } else {
                const cards = [];
                for (var i = 0; i < 2; i++) {
                    var card = get.cardPile2(function (cardx) {
                        return cardx.name == 'sha' && !cards.includes(cardx);
                    });
                    if (card) cards.add(card);
                }
                if (cards.length) await player.gain(cards, 'gain2');
                player.addSkill('Europa_AfricaViceroy_xitele_baifangmanshitanyin_tag');
                player.addGaintag(cards, 'Europa_AfricaViceroy_xitele_baifangmanshitanyin_tag');
            }
        },
        group: ['Europa_AfricaViceroy_xitele_youlesheshi', 'Europa_AfricaViceroy_xitele_end'],
        subSkill: {
            global: {
                trigger: {
                    player: 'phaseBegin',
                },
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return game.hasPlayer(function (target) {
                        return target != player && target.hasSkill('Europa_AfricaViceroy_xitele');
                    });
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseCardTarget({
                            position: 'he',
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return target != player && target.hasSkill('Europa_AfricaViceroy_xitele');
                            },
                            selectCard: 2,
                            prompt: get.prompt('Europa_AfricaViceroy_xitele'),
                            prompt2: '将两张牌交给一名其他角色,若如此做,你跳过本回合的出牌阶段前来度假.',
                            ai1(card) {
                                if (card.name == 'du') return 20;
                                var val = get.value(card);
                                var player = _status.event.player;
                                if (get.position(card) == 'e') {
                                    if (val <= 0) return 10;
                                    return 10 / val;
                                }
                                return 6 - val;
                            },
                            ai2(target) {
                                var player = get.player();
                                if (['shoulieyuanqu_daxiang_zhanxiang', 'shoulieyuanqu_daxiang_distance', 'shoulieyuanqu_heixingxing_add', 'shoulieyuanqu_heixingxing_remove', 'shoulieyuanqu_lingyang_effect', 'baifangmanshitanyin_tag'].some((skill) => player.hasSkill(skill))) {
                                    return 0;
                                }
                                var att = get.attitude(player, target);
                                if (ui.selected.cards[0].name == 'du') return -2 * att;
                                if (att > 0) return 1.5 * att;
                                var num = get.select(_status.event.selectCard)[1];
                                if (att < 0 && num == 1) return -0.7 * att;
                                return att;
                            },
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    game.log(player, '前来度假');
                    const cards = event.cards,
                        target = event.targets[0];
                    await player.give(cards, target);
                    player.skip('phaseUse');
                    if (!_status.Europa_AfricaViceroy_player) {
                        _status.Europa_AfricaViceroy_player = [];
                    }
                    _status.Europa_AfricaViceroy_player.add(player);
                },
            },
            youlesheshi: {
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    const choiceList = [`刚果湖湖畔餐厅:回复1点体力,若你在与巴西的龙虾战争中胜出,则额外回复1点体力.`, `湖畔旅社(待修建,需要弃置两个奴隶):弃一张牌,跳过弃牌阶段.`, `钓鱼乐:进行一次判定,若为♥️️,摸两张牌.`, `狩猎园区·大象(待修建,弃置三个奴隶):进行一次判定,若为♠️️,本局剩余时间内,若你的防御马区域中没有牌,你视为装备【战象】.直到你的下回合开始,你与其他角色计算距离+1.选择本项目后,你可以交给穆勒两张牌,移除其两枚土著和一枚军队,将人改为黑色.`, `狩猎园区·黑猩猩(待修建,弃置三个奴隶):进行一次判定,若为♣️️,本局剩余时间内,你出牌阶段第一张【杀】伤害+1.直到你的下回合开始,当你成为黑色杀的目标时,取消之.选择本项目后,你可以交给穆勒两张牌,移除其两枚土著和一枚军队,将♣️️改为黑色.`, `狩猎园区·羚羊(待修建,弃置三个奴隶):进行次判定,若为◆,本局剩余时间内,你使用牌无距离限制.你可以弃置攻击范围内包含你的至多两名其他角色各一张牌.选择本项目后,你可以交给穆勒两张牌,移除其两枚土著和一枚军队,将◆改为红色.`, `拜访曼施坦因元帅(第三轮前来度假的角色可选):你可以选择一项:1.从牌堆或弃牌堆随机获得一张【坦克底盘】并使用之;2.从牌堆中随机获得两张不计入出牌阶段使用次数的【杀】.`].map((info, item) => [item, info]);
                    if (_status.Europa_AfricaViceroy_build.length < get.info('Europa_AfricaViceroy_xitele').getRidesLimit) {
                        const { bool, links } = await player
                            .chooseButton([`${'<img style=height:50px src="extension/欧陆风云/image/icon/icon.jpg">'}游乐设施:每轮开始时,你可以修建一项游乐设施`, [choiceList, 'textbutton']])
                            .set('filterButton', (button) => {
                                switch (button.link) {
                                    case 1:
                                        {
                                            if (player.countMark('Europa_AfricaViceroy_xitele_nuli') < 2) return false;
                                        }
                                        break;
                                    case 3:
                                    case 4:
                                    case 5:
                                        {
                                            if (player.countMark('Europa_AfricaViceroy_xitele_nuli') < 3) return false;
                                        }
                                        break;
                                    case 6: {
                                        if (game.roundNumber != 3) return false;
                                    }
                                }
                                return !_status.Europa_AfricaViceroy_build.includes(button.link);
                            })
                            .set('ai', (button) => {
                                return 1 + Math.random();
                            })
                            .forResult();
                        if (bool) {
                            _status.Europa_AfricaViceroy_build.add(links[0]);
                            switch (links[0]) {
                                case 1:
                                    {
                                        player.removeMark('Europa_AfricaViceroy_xitele_nuli', 2);
                                    }
                                    break;
                                case 3:
                                case 4:
                                case 5:
                                    {
                                        player.removeMark('Europa_AfricaViceroy_xitele_nuli', 3);
                                    }
                                    break;
                            }
                            game.log(player, '修建了', '#g' + get.translation(`Europa_AfricaViceroy_xitele${links[0] + 1}`), '游乐设施');
                        }
                    }
                    const targets = _status.Europa_AfricaViceroy_player;
                    if (targets?.length) {
                        for (const target of targets) {
                            const { bool, links } = await target
                                .chooseButton(['游乐设施:你可以选择任意三个项目', [choiceList, 'textbutton']])
                                .set('selectButton', [1, 3])
                                .set('filterButton', (button) => {
                                    switch (button.link) {
                                        case 6: {
                                            if (game.roundNumber != 3) return false;
                                        }
                                    }
                                    return _status.Europa_AfricaViceroy_build.includes(button.link);
                                })
                                .set('ai', (button) => {
                                    return 1 + Math.random();
                                })
                                .forResult();
                            if (bool) {
                                game.log(target, '选择游玩', links.length, '个项目');
                                for (var info of links) {
                                    var next = game.createEvent('Europa_AfricaViceroy_xitele_youwan');
                                    next.player = target;
                                    next.setContent(get.info('Europa_AfricaViceroy_xitele')[`contentRides${info + 1}`]);
                                    await next;
                                }
                                var next = game.createEvent('Europa_AfricaViceroy_xitele_youwanjieshu');
                                next.player = player;
                                next.setContent('emptyEvent');
                                await next;
                            }
                        }
                    }
                },
            },
            end: {
                trigger: {
                    global: 'Europa_AfricaViceroy_xitele_youwanjieshu',
                },
                popup: false,
                charlotte: true,
                async cost(event, trigger, player) {
                    event.result = await player.chooseToDiscard('h', [1, Infinity]).set('prompt', `你可以弃置任意张牌获得等量的一种标记`).forResult();
                },
                async content(event, trigger, player) {
                    await player.discard(event.cards);
                    const list = ['土著', '奴隶', '军队'];
                    const { control } = await player
                        .chooseControl(list)
                        .set('prompt', '你可以获得一种标记')
                        .set('ai', () => {
                            const player = get.event('player');
                            let controls = get.event('controls').slice();
                            if (get.effect(player, trigger.card, trigger.player, player) < 0 && controls.includes('无效')) return '无效';
                            return controls.randomGet();
                        })
                        .forResult();
                    switch (control) {
                        case '土著':
                            {
                                player.addMark('Europa_AfricaViceroy_xitele_tuzhu', event.cards.length);
                            }
                            break;
                        case '奴隶':
                            {
                                player.addMark('Europa_AfricaViceroy_xitele_nuli', event.cards.length);
                            }
                            break;
                        case '军队':
                            {
                                player.addMark('Europa_AfricaViceroy_xitele_jundui', event.cards.length);
                            }
                            break;
                    }
                    if (player.countMark('Europa_AfricaViceroy_xitele_nuli') > player.countMark('Europa_AfricaViceroy_xitele_jundui') && !player.hasSkill('Europa_diercichangdaozhiye_effect')) {
                        player.gain(game.createCard('Europa_qiyi', lib.suit.randomGet(), get.rand(1, 13)));
                    }
                },
            },
            tuzhu: {
                mark: true,
            },
            nuli: {
                mark: true,
            },
            jundui: {
                mark: true,
            },
            shoulieyuanqu_daxiang_zhanxiang: {
                equipSkill: true,
                inherit: 'zhanxiang',
                filter(event, player) {
                    if (!lib.skill.zhanxiang.filter(event, player)) return false;
                    if (!player.hasEmptySlot(3)) return false;
                    return true;
                },
                ai: {
                    refuseGifts: true,
                    skillTagFilter(player, tag, arg) {
                        if (!player.hasEmptySlot(3)) return false;
                    },
                },
                mod: {
                    globalTo(from, to, distance) {
                        if (!to.hasEmptySlot(3)) return;
                        return distance + 1;
                    },
                },
            },
            shoulieyuanqu_daxiang_distance: {
                charlotte: true,
                mod: {
                    globalFrom(from, to, distance) {
                        return distance + 1;
                    },
                },
            },
            shoulieyuanqu_heixingxing_add: {
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return (
                        event.card.name == 'sha' &&
                        player
                            .getHistory('useCard', function (evt) {
                                return evt.card.name == 'sha';
                            })
                            .indexOf(event) == 0
                    );
                },
                async content(event, trigger, player) {
                    trigger.baseDamage += 1;
                },
            },
            shoulieyuanqu_heixingxing_remove: {
                trigger: {
                    target: 'useCardToTarget',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && get.color(event.card) == 'black';
                },
                async content(event, trigger, player) {
                    trigger.parent.targets.remove(player);
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (card.name == 'sha' && get.color(card) == 'black') return 'zeroplayertarget';
                        },
                    },
                },
            },
            shoulieyuanqu_lingyang_effect: {
                charlotte: true,
                mod: {
                    targetInRange: () => true,
                },
            },
            baifangmanshitanyin_tag: {
                charlotte: true,
                mod: {
                    cardUsable(card, player) {
                        if (!card.cards) return;
                        for (var i of card.cards) {
                            if (i.hasGaintag('Europa_AfricaViceroy_xitele_baifangmanshitanyin_tag')) return Infinity;
                        }
                    },
                },
            },
        },
    },
    Europa_tno_junshihuapeigei: {
        nobracket: true,
        trigger: {
            player: 'phaseDrawBegin1',
        },
        forced: true,
        filter(event, player) {
            return !event.numFixed;
        },
        async content(event, trigger, player) {
            trigger.changeToZero();
            const types = ['basic', 'trick', 'equip'],
                cards = [];
            for (const type of types) {
                const card = get.cardPile(function (cardx) {
                    return get.type2(cardx) == type;
                });
                if (card) cards.push(card);
            }
            if (cards.length) player.gain(cards, 'draw');
        },
        mod: {
            cardEnabled(card, player) {
                if (!player.isPhaseUsing()) return;
                if (
                    player.hasHistory('useCard', (evt) => {
                        return evt.isPhaseUsing() && get.type2(evt.card) == get.type2(card);
                    })
                )
                    return false;
            },
            cardSavable(card, player) {
                if (!player.isPhaseUsing()) return;
                if (
                    player.hasHistory('useCard', (evt) => {
                        return evt.isPhaseUsing() && get.type2(evt.card) == get.type2(card);
                    })
                )
                    return false;
            },
        },
    },
    Europa_tno_guijinshuchukou: {
        nobracket: true,
        trigger: {
            player: 'phaseJieshuBegin',
        },
        forced: true,
        popup: false,
        locked(skill, player) {
            if (!player || !player.storage.Europa_tno_guijinshuchukou) return true;
            return false;
        },
        async content(event, trigger, player) {
            if (!player.storage[event.name]) {
                event.result = { bool: true };
            } else {
                event.result = await player
                    .chooseBool(`${get.prompt2(event.name)}`)
                    .set('ai', () => {
                        const player = get.player();
                        return player.hp <= player.getHandcardLimit();
                    })
                    .forResult();
            }
            if (event.result.bool) {
                player.addSkill('Europa_tno_guijinshuchukou_max');
                player.addMark('Europa_tno_guijinshuchukou_max', 1, false);
                const num = player.hp - player.getHandcardLimit();
                if (num > 0) player.draw(num);
            }
        },
        subSkill: {
            max: {
                charlotte: true,
                mod: {
                    maxHandcard(player, num) {
                        return (num -= player.countMark('Europa_tno_guijinshuchukou_max'));
                    },
                },
            },
        },
    },
    Europa_tno_falanxigongheguozhihun: {
        derivation: 'Europa_tno_weileziyou',
        nobracket: true,
        trigger: {
            player: 'phaseBegin',
        },
        forced: true,
        juexingji: true,
        filter(event, player) {
            return player.getHandcardLimit() <= 0;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            player.setStorage('Europa_tno_guijinshuchukou', true);
            await player.addSkills('Europa_tno_weileziyou');
            await player.gainMaxHp();
            await player.recover();
            player.removeSkill('Europa_tno_guijinshuchukou_max');
        },
    },
    Europa_tno_weileziyou: {
        nobracket: true,
        trigger: {
            player: 'useCard',
        },
        popup: false,
        filter(event, player) {
            if (!player.isPhaseUsing()) return false;
            return ['sha', 'juedou'].includes(event.card.name);
        },
        async cost(event, trigger, player) {
            const list = [],
                num = player.getHandcardLimit();
            if (
                game.hasPlayer(function (current) {
                    return !trigger.targets.includes(current) && current != player && lib.filter.targetEnabled2(trigger.card, player, current) && lib.filter.targetInRange(trigger.card, player, current);
                })
            )
                list.push('选项一');
            list.push('选项二');
            const { control } = await player
                .chooseControl(list, 'cancel2')
                .set('choiceList', [`令此牌额外指定${num}名其他角色`, `令此牌基础伤害值+${num}`])
                .set('prompt', get.translation(event.name.slice(0, -5)))
                .set('ai', () => {
                    return '选项二';
                })
                .forResult();
            if (control != 'cancel2') event.result = { bool: true, cost_data: { control, num } };
        },
        async content(event, trigger, player) {
            const control = event.cost_data.control,
                num = event.cost_data.num;
            if (control == '选项一') {
                if (num > 0) {
                    const { bool, targets } = await player
                        .chooseTarget()
                        .set('prompt', get.prompt(event.name))
                        .set('prompt2', `你可以为${get.translation(trigger.card)}额外指定角色`)
                        .set('filterTarget', function (card, player, target) {
                            const trigger = _status.event.getTrigger();
                            if (target == player) return false;
                            if (get.distance(player, target, 'pure') > 1) return false;
                            return !trigger.targets.includes(target) && target != trigger.target && lib.filter.targetEnabled2(trigger.card, player, target) && lib.filter.targetInRange(trigger.card, player, target);
                        })
                        .set('selectTarget', player.getHandcardLimit())
                        .set('complexTarget', true)
                        .set('ai', (target) => {
                            const player = get.player(),
                                trigger = get.event().getTrigger();
                            return get.effect(target, trigger.card, player, player) + 0.01;
                        })
                        .forResult();
                    if (bool) {
                        player.line(targets);
                        trigger.targets.addArray(targets);
                    }
                }
            } else if (num > 0) {
                trigger.baseDamage += player.getHandcardLimit();
            }
            if (player.getHandcardLimit() <= 3) trigger.directHit.addArray(game.filterPlayer());
        },
    },
    tnoshizhengxin_skill1: {
        trigger: {
            player: 'phaseUseBegin',
        },
        async cost(event, trigger, player) {
            let groups = game
                .filterPlayer((target) => {
                    const group = target.group;
                    return group !== 'unknown'; //QQQ
                })
                .map((target) => target.group)
                .toUniqued();
            groups.sort(function (a, b) {
                return lib.group.indexOf(a) - lib.group.indexOf(b);
            });
            const { bool, links } = await player
                .chooseButton(true, [get.prompt2(event.name.slice(0, -5)), [groups.map((info) => [info, get.translation(info + 2)]), 'tdnodes']])
                .set('groups', groups)
                .set('selectButton', () => {
                    const otherGroups = game.dead
                        .filter((target) => {
                            const group = target.group;
                            return group !== 'unknown';
                        })
                        .map((target) => target.group)
                        .toUniqued()
                        .removeArray(get.event('groups'));
                    if (!otherGroups.length) return 1;
                    return [1, otherGroups.length + 1];
                })
                .set('ai', (button) => {
                    const player = get.player();
                    return game.countPlayer(function (current) {
                        return current != player && current.group == button.link && get.attitude(current, player) < 0;
                    });
                })
                .forResult();
            event.result = { bool, cost_data: { links } };
        },
        async content(event, trigger, player) {
            const groups = event.cost_data.links;
            player.addTempSkill('tnoshizhengxin_skill1_effect');
            player.markAuto('tnoshizhengxin_skill1_effect', groups);
        },
        subSkill: {
            effect: {
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return player.getStorage('tnoshizhengxin_skill1_effect').includes(event.player.group);
                },
                async content(event, trigger, player) {
                    trigger.num++;
                },
                mark: true,
                intro: {
                    content: '对$势力角色造成的伤害+1',
                },
            },
        },
    },
    tnoshizhengxin_skill2: {
        trigger: {
            player: 'phaseZhunbeiBegin',
        },
        forced: true,
        async content(event, trigger, player) {
            if (player.countCards('he')) await player.discard(player.getCards('he'));
            await player.draw(4);
            player.addTempSkill('tnoshizhengxin_skill2_effect');
        },
        ai: {
            nokepp: true,
        },
        subSkill: {
            effect: {
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return event.player.countGainableCards(player, 'he');
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    player.gainPlayerCard(trigger.player, 'he', true);
                },
            },
        },
    },
    Europa_tno_weihuquanwei: {
        global: 'Europa_tno_weihuquanwei_global',
        nobracket: true,
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        popup: false,
        filter(event, player) {
            return game.hasPlayer((current) => current != player) && (event.name != 'phase' || game.phaseNumber == 0);
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(`###${get.translation(event.name.slice(0, -5))}###你选择一名其他角色,当该角色于回合外成为普通锦囊牌或【杀】的目标后,你可以弃置一张手牌,视为其使用或打出【无懈可击】或【闪】.当其受到伤害后,你受到等量伤害`, true, function (card, player, target) {
                    return target != player;
                })
                .set('ai', function (target) {
                    let att = get.attitude(_status.event.player, target);
                    if (att > 0) return att + 1;
                    if (att == 0) return Math.random();
                    return att;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            player.setStorage(event.name, target);
            player.markSkill(event.nam);
            player.addSkill('Europa_tno_weihuquanwei_use');
            player.addSkill('Europa_tno_weihuquanwei_damage');
        },
        mark: true,
        intro: {
            content: '$',
        },
        subSkill: {
            global: {
                hiddenCard(player, name) {
                    if (_status.currentPhase == player) return false;
                    if (
                        !game.hasPlayer((current) => {
                            if (!current.storage.Europa_tno_weihuquanwei || current.storage.Europa_tno_weihuquanwei != player) return false;
                            return current.hasSkill('Europa_tno_weihuquanwei_use') && current.countCards('he');
                        })
                    )
                        return false;
                    if (['shan', 'wuxie'].includes(name)) return true;
                },
            },
            use: {
                trigger: {
                    global: ['chooseToUseBegin', 'chooseToRespondBegin'],
                },
                popup: false,
                filter(event, player) {
                    if (!player.countCards('he')) return false;
                    if (event.player == _status.currentPhase) return false;
                    if (!player.storage.Europa_tno_weihuquanwei || event.player != player.storage.Europa_tno_weihuquanwei) return false;
                    for (var name of ['shan', 'wuxie']) {
                        var card = { name: name };
                        if (name == 'wuxie') {
                            let info = event.info_map;
                            if (!info || get.type(info.card) != 'trick' || info.target != event.player) return false;
                        }
                        if (event.filterCard && event.filterCard(card, event.player, event)) return true;
                    }
                    return false;
                },
                async cost(event, trigger, player) {
                    var list = [];
                    for (var name of ['shan', 'wuxie']) {
                        var card = { name: name };
                        if (trigger.filterCard(card, trigger.player, trigger)) list.push(name);
                    }
                    var evt = trigger.parent;
                    var names = '';
                    for (var i = 0; i < list.length; i++) {
                        names += '【' + get.translation(list[i]) + '】';
                        names += i < list.length - 2 ? '、' : '或';
                    }
                    names = names.slice(0, names.length - 1);
                    var reason = trigger.name == 'chooseToUse' ? '使用' : '打出';
                    var str = get.translation(trigger.player) + (evt.card ? '因' + get.translation(evt.card) : '') + '需要' + reason + '一张' + names + ',是否弃置一张牌视为其' + reason + '之';
                    const { bool, cards } = await player
                        .chooseToDiscard(str, 'hes')
                        .set('ai', (card) => {
                            const player = get.player(),
                                trigger = get.event().getTrigger();
                            if (get.attitude(player, trigger.player) <= 0) return 0;
                            return 6 - get.value(card);
                        })
                        .set('chooseonly', true)
                        .forResult();
                    event.result = { bool, cost_data: { cards, list } };
                },
                async content(event, trigger, player) {
                    await player.discard(event.cost_data.cards);
                    trigger.result = {
                        bool: true,
                        card: {
                            name: event.cost_data.list[0],
                        },
                    };
                    trigger.responded = true;
                    trigger.animate = false;
                },
            },
            damage: {
                trigger: {
                    global: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    if (event.player.isDead() || !player.storage.Europa_tno_weihuquanwei || !player.storage.Europa_tno_weihuquanwei != event.player || event.num <= 0) return false;
                    return true;
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    player[trigger.name](trigger.num, 'nosource');
                },
            },
        },
    },
    Europa_tno_yiyuanshouzhiming: {
        nobracket: true,
        trigger: {
            source: 'damageBegin',
        },
        filter(event, player) {
            const target = player.storage.Europa_tno_weihuquanwei;
            if (!target || !target.isIn()) return false;
            if (player.getStat().skill.Europa_tno_yiyuanshouzhiming >= target.hp) return false;
            if (!player.isPhaseUsing()) return false;
            return event.card && event.card.name == 'sha';
        },
        async content(event, trigger, player) {
            const target = player.storage.Europa_tno_weihuquanwei;
            trigger.source = target;
            game.log(target, '成为了伤害来源');
            await game.asyncDraw([player, target]);
        },
    },
    Europa_tno_zhengjunbeifang: {
        nobracket: true,
        trigger: {
            player: 'phaseJieshuBegin',
        },
        filter(event, player) {
            if (!lib.skill._Europa_FuelMechanism) return false;
            if (!lib.config.extension_欧陆风云_Europa_FuelMechanism) return false;
            return !player.hasHistory('sourceDamage', (evt) => evt.isPhaseUsing()) || player.getHistory('skipped').includes('phaseUse');
        },
        async content(event, trigger, player) {
            get.info('_Europa_FuelMechanism').addFuel(player, 5);
            await player.draw(2);
            const { bool, cards } = await player.chooseToDiscard('hes', [1, Infinity], `你可以弃置任意张牌,每弃置一张基本牌,你获得1个弹药,每弃置一张非基本牌,你获得2个弹药.`).forResult();
            if (bool) {
                const num = cards.map((info) => get.type(info)).reduce((p, c) => p + (c == 'basic' ? 1 : 2), 0);
                player.addMark('_Europa_AmmunitionMechanism', num);
            }
            if (player.countCards('h', { name: 'Europa_tankChassis' })) {
                const cards = player.getCards('h', { name: 'Europa_tankChassis' });
                if (cards[0]) player.chooseUseTarget(cards[0], player, 'nothrow', 'nopopup', true);
            }
        },
    },
    Europa_tno_feizhouzhixin: {
        nobracket: true,
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async content(event, trigger, player) {
            player.addSkill('Europa_AfricaViceroy_xitele');
        },
        group: ['Europa_tno_feizhouzhixin_counter', 'Europa_tno_feizhouzhixin_tuanjie', 'Europa_tno_feizhouzhixin_kaizao'],
        subSkill: {
            counter: {
                trigger: {
                    global: 'Europa_AfricaViceroy_xitele_youwan',
                },
                forced: true,
                charlotte: true,
                popup: false,
                firstDo: true,
                async content(event, trigger, player) {
                    player.addMark('Europa_tno_feizhouzhixin_counter', 1, false);
                    if (player.countMark('Europa_tno_feizhouzhixin_counter') >= 7) trigger._Europa_tno_feizhouzhixin = true;
                },
            },
            tuanjie: {
                trigger: {
                    global: 'Europa_AfricaViceroy_xitele_youwan',
                },
                forced: true,
                filter(event, player) {
                    return event._Europa_tno_feizhouzhixin;
                },
                async content(event, trigger, player) {
                    var card = get.cardPile(function (card) {
                        return card.name == 'Europa_tuanjiexiedingyuanzhu';
                    });
                    if (card) player.gain(card, 'gain2');
                },
            },
            kaizao: {
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                filter(event, player) {
                    return (
                        event.card.name == 'Europa_kaizaokuangwu' &&
                        player
                            .getHistory('useCard', (evt) => {
                                return evt.card.name == 'Europa_kaizaokuangwu';
                            })
                            .indexOf(event) == 0
                    );
                },
                async content(event, trigger, player) {
                    const card = game.createCard('Europa_kaizaokuangwu');
                    if (card) {
                        player.gain(card, 'gain2');
                        player.addSkill('Europa_tno_feizhouzhixin_clear');
                        player.markAuto('Europa_tno_feizhouzhixin_clear', [card]);
                    }
                },
            },
            clear: {
                trigger: {
                    player: 'phaseEnd',
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    const cards = player.getStorage(event.name);
                    await game.cardsGotoSpecial(cards);
                    player.removeSkill(event.name);
                    game.log(cards, '被销毁了');
                    player.directgain(player.getCards('h'), false);
                },
            },
        },
    },
    Europa_tno_shuaishoushiguanli: {
        nobracket: true,
        trigger: {
            player: 'phaseZhunbeiBegin',
        },
        popup: false,
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)))
                .set('filterTarget', (card, player, target) => {
                    return target != player;
                })
                .set('ai', (target) => {
                    const player = get.player();
                    return get.attitude(player, target);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            player.addTempSkill('Europa_tno_shuaishoushiguanli_effect');
            player.addTempSkill('Europa_tno_shuaishoushiguanli_jieshu');
            player.setStorage('Europa_tno_shuaishoushiguanli_jieshu', target);
        },
        subSkill: {
            effect: {
                charlotte: true,
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                popup: false,
                filter(event, player) {
                    return player.isPhaseUsing();
                },
                async content(event, trigger, player) {
                    trigger.num++;
                },
                mod: {
                    cardUsable(card, player, num) {
                        if (!player.isPhaseUsing()) return;
                        if (card.name == 'sha') return (num += 1);
                    },
                },
            },
            jieshu: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                charlotte: true,
                popup: false,
                filter(event, player) {
                    return player.hasHistory('sourceDamage');
                },
                async content(event, trigger, player) {
                    const target = player.storage[event.name];
                    const num = Math.min(
                        player.countCards('he'),
                        player.getHistory('sourceDamage').reduce((p, c) => p + c.num, 0)
                    );
                    if (num > 0 && target.isIn()) {
                        player.chooseToGive(target, 'he', true, num);
                    }
                },
            },
        },
    },
    Europa_tno_yongbingweizhu: {
        nobracket: true,
        enable: 'phaseUse',
        usable: 1,
        filterCard: true,
        check(card) {
            return 6 - get.value(card);
        },
        selectCard: [1, 3],
        async content(event, trigger, player) {
            let num = event.cards.length,
                cards = [];
            while (num > 0) {
                num--;
                var card = get.cardPile(function (cardx) {
                    return get.tag(cardx, 'damage') && !cards.includes(cardx);
                });
                if (card) cards.add(card);
            }
            if (cards.length) {
                player.gain(cards, 'gain2').gaintag.add('Europa_tno_yongbingweizhu_tag');
                cards.forEach((card) => {
                    card._Europa_tno_yongbingweizhu = cards.length;
                });
            }
        },
        group: 'Europa_tno_yongbingweizhu_use',
        subSkill: {
            tag: {},
            use: {
                trigger: {
                    source: 'dieAfter',
                },
                filter(event, player) {
                    return (
                        event.getParent(2).name == 'damage' &&
                        event.getParent(2).card &&
                        player.hasHistory('lose', function (evt) {
                            return evt.parent == event.getParent(4) && Object.values(evt.gaintag_map).some((value) => value.includes('Europa_tno_yongbingweizhu_tag'));
                        })
                    );
                },
                async content(event, trigger, player) {
                    const list = trigger
                        .getParent(2)
                        .cards.filterInD()
                        .filter((card) => card._Europa_tno_yongbingweizhu);
                    let cards = [],
                        num = Math.max(...list.map((card) => card._Europa_tno_yongbingweizhu));
                    while (num > 0) {
                        num--;
                        var card = get.cardPile(function (cardx) {
                            return !get.tag(cardx, 'damage') && !cards.includes(cardx);
                        });
                        if (card) cards.add(card);
                    }
                    if (cards.length) {
                        player.gain(cards, 'gain2');
                    }
                },
            },
        },
    },
    Europa_kaizaokuangwu_sha: {
        equipSkill: true,
        trigger: {
            player: 'useCard',
        },
        forced: true,
        charlotte: true,
        filter(event, player) {
            return event.card && event.card.name == 'sha';
        },
        async content(event, trigger, player) {
            trigger.baseDamage += player.countMark(event.name);
            player.removeSkill(event.name);
        },
    },
    Europa_tuanjiexiedingyuanzhu_destroy: {
        trigger: {
            global: ['loseEnd', 'equipEnd', 'addJudgeEnd', 'gainEnd', 'loseAsyncEnd', 'addToExpansionEnd'],
        },
        forced: true,
        charlotte: true,
        filter(event, player) {
            return game.hasPlayer((current) => {
                var evt = event.getl(current);
                if (evt && evt.es) return evt.es.some((i) => ['Europa_tankChassis_tuanjiexieding', 'Europa_guofangjunzaiqianjin'].includes(i.name));
                return false;
            });
        },
        async content(event, trigger, player) {
            var cards = [];
            game.countPlayer((current) => {
                var evt = trigger.getl(current);
                if (evt && evt.es) return cards.addArray(evt.es.filter((i) => ['Europa_tankChassis_tuanjiexieding', 'Europa_guofangjunzaiqianjin'].includes(i.name)));
            });
            game.cardsGotoSpecial(cards);
            game.log(cards, '被销毁了');
        },
    },
};
if (lib.config.extension_欧陆风云_Europa_FuelMechanism) {
    Object.assign(skills, {
        _Europa_FuelMechanism: {
            charlotte: true,
            ruleSkill: true,
            countFuel(player) {
                return player.storage._Europa_FuelMechanism || 0;
            },
            payFuel(player) {
                let fuel = player
                    .getEquips(1)
                    .filter((card) => card.storage && card.storage.Europa_fuelConsumption)
                    .reduce((p, c) => p + c.storage.Europa_fuelConsumption, 0),
                    removeFuelLimit = Math.max(0, game.checkMod(player, 0, 'removeFuelLimit', player));
                fuel -= removeFuelLimit;
                if (fuel < 0) fuel = 0;
                return fuel;
            },
            addFuel(player, num) {
                if (typeof num != 'number' || !num) num = 1;
                if (typeof player.storage._Europa_FuelMechanism != 'number') player.storage._Europa_FuelMechanism = 0;
                player.storage._Europa_FuelMechanism += num;
                game.log(player, '获得了', num, '点', '#g燃油');
                player.markSkill('_Europa_FuelMechanism');
            },
            removeFuel(player, num) {
                if (typeof num != 'number' || !num) num = 1;
                if (typeof player.storage._Europa_FuelMechanism != 'number' || !player.storage._Europa_FuelMechanism) return;
                if (num > player.storage._Europa_FuelMechanism) num = player.storage._Europa_FuelMechanism;
                player.storage._Europa_FuelMechanism -= num;
                game.log(player, '消耗了', num, '点', '#g燃油');
            },
            gainPlayerFuel(player, target, num) {
                if (typeof num != 'number' || !num) num = 1;
                const fuel = get.info('_Europa_FuelMechanism').countFuel(target);
                if (!fuel) return;
                num = Math.min(num, fuel);
                target.storage._Europa_FuelMechanism -= num;
                player.storage._Europa_FuelMechanism += num;
                game.log(player, '获得了', target, '的', num, '点', '#g燃料');
            },
            mark: true,
            markimage: 'extension/欧陆风云/image/mark/燃油.jpg',
            intro: {
                name: '燃油',
                name2: '燃油',
                markcount(storage, player) {
                    return player.storage._Europa_FuelMechanism || 0;
                },
                content(storage, player) {
                    return `${player.storage._Europa_FuelMechanism || 0}`;
                },
            },
            subSkill: {
                round: {
                    trigger: {
                        global: 'roundStart',
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    async content(event, trigger, player) {
                        get.info('_Europa_FuelMechanism').addFuel(player, 2);
                    },
                },
                damage: {
                    trigger: {
                        source: 'damageSource',
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    async content(event, trigger, player) {
                        get.info('_Europa_FuelMechanism').gainPlayerFuel(player, trigger.player, 1);
                    },
                },
                die: {
                    trigger: {
                        source: 'die',
                    },
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        return get.info('_Europa_FuelMechanism').countFuel(event.player);
                    },
                    async content(event, trigger, player) {
                        const fuel = get.info('_Europa_FuelMechanism').countFuel(trigger.player);
                        get.info('_Europa_FuelMechanism').gainPlayerFuel(player, trigger.player, fuel);
                    },
                },
                begin: {
                    trigger: {
                        player: 'phaseBegin',
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filter(event, player) {
                        return player.hasAllHistory('useSkill', (evt) => evt.skill == '_Europa_FuelMechanism_die');
                    },
                    async content(event, trigger, player) {
                        const num = player.getAllHistory('useSkill', (evt) => evt.skill == '_Europa_FuelMechanism_die').length;
                        get.info('_Europa_FuelMechanism').addFuel(player, num);
                    },
                },
            },
        },
        _Europa_AmmunitionMechanism: {
            charlotte: true,
            ruleSkill: true,
            countAmmunition(player) {
                return player.storage._Europa_AmmunitionMechanism || 0;
            },
            payAmmunition(player) {
                let ammunition = player
                    .getEquips(1)
                    .filter((card) => card.storage && card.storage.Europa_ammunitionConsumption)
                    .reduce((p, c) => p + c.storage.Europa_ammunitionConsumption, 0),
                    removeAmmunitionLimit = Math.max(0, game.checkMod(player, 0, 'removeAmmunitionLimit', player));
                ammunition -= removeAmmunitionLimit;
                if (ammunition < 0) ammunition = 0;
                return ammunition;
            },
            addAmmunition(player, num) {
                if (typeof num != 'number' || !num) num = 1;
                if (typeof player.storage._Europa_AmmunitionMechanism != 'number') player.storage._Europa_AmmunitionMechanism = 0;
                player.storage._Europa_AmmunitionMechanism += num;
                game.log(player, '获得了', num, '点', '#g弹药');
                player.markSkill('_Europa_AmmunitionMechanism');
            },
            removeAmmunition(player, num) {
                if (typeof num != 'number' || !num) num = 1;
                if (typeof player.storage._Europa_AmmunitionMechanism != 'number' || !player.storage._Europa_AmmunitionMechanism) return;
                if (num > player.storage._Europa_AmmunitionMechanism) num = player.storage._Europa_AmmunitionMechanism;
                player.storage._Europa_AmmunitionMechanism -= num;
                game.log(player, '消耗了', num, '点', '#g弹药');
            },
            gainPlayerAmmunition(player, target, num) {
                if (typeof num != 'number' || !num) num = 1;
                const ammunition = get.info('_Europa_AmmunitionMechanism').countAmmunition(target);
                if (!ammunition) return;
                num = Math.min(num, ammunition);
                target.storage._Europa_AmmunitionMechanism -= num;
                player.storage._Europa_AmmunitionMechanism += num;
                game.log(player, '获得了', target, '的', num, '点', '#g弹药');
            },
            mark: true,
            markimage: 'extension/欧陆风云/image/mark/弹药.jpg',
            intro: {
                name: '弹药',
                name2: '弹药',
                markcount(storage, player) {
                    return player.storage._Europa_AmmunitionMechanism || 0;
                },
                content(storage, player) {
                    return `${player.storage._Europa_AmmunitionMechanism || 0}`;
                },
            },
            subSkill: {
                round: {
                    trigger: {
                        global: 'roundStart',
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    async content(event, trigger, player) {
                        get.info('_Europa_AmmunitionMechanism').addAmmunition(player, 1);
                    },
                },
                damage: {
                    trigger: {
                        source: 'damageSource',
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    async content(event, trigger, player) {
                        get.info('_Europa_AmmunitionMechanism').gainPlayerAmmunition(player, trigger.player, 1);
                    },
                },
                die: {
                    trigger: {
                        source: 'die',
                    },
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        return get.info('_Europa_AmmunitionMechanism').countAmmunition(event.player); //QQQ
                    },
                    async content(event, trigger, player) {
                        const ammunition = get.info('_Europa_AmmunitionMechanism').countAmmunition(trigger.player);
                        get.info('_Europa_AmmunitionMechanism').gainPlayerAmmunition(player, trigger.player, ammunition);
                    },
                },
                begin: {
                    trigger: {
                        player: 'phaseBegin',
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filter(event, player) {
                        return player.hasAllHistory('useSkill', (evt) => evt.skill == '_Europa_AmmunitionMechanism_die');
                    },
                    async content(event, trigger, player) {
                        const num = player.getAllHistory('useSkill', (evt) => evt.skill == '_Europa_AmmunitionMechanism_die').length;
                        get.info('_Europa_AmmunitionMechanism').addAmmunition(player, num);
                    },
                },
            },
        },
        _Europa_ArmoredTanks: {
            trigger: {
                player: 'equipEnd',
            },
            forced: true,
            charlotte: true,
            filter(event, player) {
                return event.card && event.card.name.startsWith('Europa_tankChassis');
            },
            video() {
                game.broadcastAll(() => {
                    const list = lib.skill._Europa_ArmoredTanks.armoredTanksList,
                        vlist = lib.skill._Europa_ArmoredTanks.assembleTanksList,
                        cardName = lib.skill._Europa_ArmoredTanks.armoredName.flat(),
                        cardTranslate = lib.skill._Europa_ArmoredTanks.armoredTranslate.flat();
                    for (var i of cardName) {
                        const namex = 'Europa_ArmoredTanks_' + i;
                        if (!lib.card[namex]) {
                            lib.card[namex] = {
                                fullskin: true,
                                image: `ext:欧陆风云/image/card/Europa_ArmoredTanks_${i}.jpg`,
                                noEffect: true,
                            };
                            lib.translate[namex] = i;
                            lib.translate[namex + '_info'] = cardTranslate[cardName.indexOf(i)];
                        }
                    }
                    const subassemblySkills = Object.keys(lib.skill.Europa_ArmoredTanks_subassembly.subSkill);
                    for (const subassembly of subassemblySkills) {
                        if (!lib.translate[`Europa_ArmoredTanks_subassembly_${subassembly}`]) lib.translate[`Europa_ArmoredTanks_subassembly_${subassembly}`] = subassembly;
                        if (!lib.translate[`Europa_ArmoredTanks_subassembly_${subassembly}_info`]) lib.translate[`Europa_ArmoredTanks_subassembly_${subassembly}_info`] = lib.skill[`Europa_ArmoredTanks_subassembly_${subassembly}`].description;
                    }
                    const artillerySkills = Object.keys(lib.skill.Europa_ArmoredTanks_artillery.subSkill);
                    for (const artillery of artillerySkills) {
                        if (!lib.translate[`Europa_ArmoredTanks_artillery_${artillery}`]) lib.translate[`Europa_ArmoredTanks_artillery_${artillery}`] = artillery;
                        if (!lib.translate[`Europa_ArmoredTanks_artillery_${artillery}_info`]) lib.translate[`Europa_ArmoredTanks_artillery_${artillery}_info`] = lib.skill[`Europa_ArmoredTanks_artillery_${artillery}`].description;
                    }
                });
            },
            armoredTanksList: ['lunshizhuangjiache', 'zhuangjiazhanche', 'zhuzhantanke', 'zhongxingtanke'],
            assembleTanksList: ['impetus', 'armor', 'artillery', 'subassembly'],
            armoredName: [
                ['轮式装甲车动力', '装甲战车动力', '主战坦克动力', '重型坦克动力', '轻型坦克动力', 'p-1000坦克动力', '球形坦克动力'],
                ['轻装甲', '中型装甲', '重型装甲', '超重型装甲', 'p-1000装甲'],
                ['主战坦克炮', '机炮', '榴弹炮', '重型火炮', '超重型火炮', '速射炮', 'p-1000双门巨炮', '火箭发射器'],
                ['无线电', '倾斜装甲', '主动防御设施', '加装机枪', '额外油箱', '灭火器', '自动装弹机', '烟雾发生器', '火焰喷射器', '反坦克导弹'],
            ],

            armoredTranslate: [
                ['消耗燃油1点,最多支持轻型装甲,距离-3/+1,组件1个.', '消耗燃油2点,最多支持中型装甲,距离-1/+1,组件2个.', '消耗燃油3点,只支持中型装甲距离-2/+2,组件3个.', '消耗燃油4点,只支持重型装甲和超重型装甲,距离-1/+1,组件4个.', '消耗燃油2点,最多支持轻型装甲,距离-2/+1,组件2个.', '(德国专属,超重型坦克类别),耗油5点,只支持超重型装甲和p-1000装甲,组件6个.', '(德国专属,超重型坦克类别),耗油3点,距离-3/+4,组件0个.'],
                ['你从牌堆中获得一张【闪】并获得1点护甲.', '额外耗油+1,普通【杀】对你无效.', '外耗油+2,【杀】对你无效.', '额外耗油+3,获得3点护甲,【杀】和决斗】对你无效,若使用则失去-1/+1.', '(德国专属):额外耗油+5,获得5点护甲值,当你成为伤害类牌的目标时,取消之,若你没有足够燃油,此效果失效.'],
                ['(装甲至少需要中型装甲)攻击范围+4,当你使用【杀】时须弃置三枚弹药,扣除目标所有护甲值,令此【杀】无法被响应.', '攻击范围+2,出牌阶段,当你使用【杀】后,你可以弃置两枚弹药,令此【杀】不计入使用次数.', '(至少需要中型装甲)攻击范围+3,当你使用【杀】时须弃置三枚弹药,此【杀】转变为火【杀】造成伤害后,对目标相邻角色各造成1点火焰伤害.', '(至少需要重型装甲)攻击范围+5,无视防具,当你使用【杀】时须弃置五枚弹药,造成伤害时,你须令伤害+2,且转变为火属性伤害.若目标角色有护甲,则造成伤害翻倍.', '(至少需要超重型装甲)攻击范围+8,当你使用【杀】时,弃置八枚弹药,并进行判定,若为♠️️,则此【杀】无效,你受到1点无来源伤害.否则你令此【杀】伤害+4,目标角色须要用两张【闪】才能抵消,当你使用【杀】击杀目标角色后,对其座次最近的四名角色造成1点伤害.', '(只轻型装甲可装备):攻击范围+3,当你使用【杀】时须弃置3枚弹药,此【杀】额外触发一次.', '(德国专属,p-1000可装备):攻击范围无限,当你使用【杀】时须弃置20枚弹药,此【杀】无法被响应,受到伤害的角色立刻死亡,座次相邻角色须弃置一张【闪】,否则各受到3点伤害.', '(轻型和重型):当你使用【杀】时须弃置8枚弹药,此【杀】额外指定所有其他角色为目标.'],
                ['锁定技,当你获得无线电时,你选择一名其他角色,你们互相可见对方手牌.', '锁定技,你受到的无属性伤害-1.', '当你成为【顺手牵羊】和【过河拆桥】的目标时,你可以弃置一张牌,令此牌对你失效.', '出牌阶段限一次,你可以选择一名与你距离为1的其他角色进行判定,若为♣️️,则你对其造成1点伤害.', '锁定技,减少1点燃油消耗.', '锁定技,当你受到属性伤害时,此伤害转变为无属性伤害.', '出牌阶段开始时,你获得一枚弹药标记.', '锁定技,当你受到一次伤害后,你进入隐匿状态.', '出牌阶段限一次,你可以消耗1点燃油,对一名角色造成1点火焰伤害.', '(团结协定标准底盘可选)当你对一名有防具或装备坦克的角色使用【杀】时,你可以对其造成1点伤害.'],
            ],

            async content(event, trigger, player) {
                if (!_status._Europa_ArmoredTanks) {
                    _status._Europa_ArmoredTanks = true;
                    lib.skill[event.name].video();
                }
                const dialog = ui.create.dialog('组建装配'),
                    tank = lib.skill._Europa_ArmoredTanks.armoredTanksList,
                    armoredName = lib.skill._Europa_ArmoredTanks.armoredName,
                    armoredTranslate = lib.skill._Europa_ArmoredTanks.armoredTranslate;
                dialog.add('请选择动力');
                const impetus = armoredName[0].map((info) => 'Europa_ArmoredTanks_' + info);
                dialog.add([impetus, 'vcard']);
                dialog.add('请选择装甲');
                const armor = armoredName[1].map((info) => 'Europa_ArmoredTanks_' + info);
                dialog.add([armor, 'vcard']);
                dialog.add('请选择火炮');
                const artillery = armoredName[2].map((info) => 'Europa_ArmoredTanks_' + info);
                dialog.add([artillery, 'vcard']);
                dialog.add('请选择组件');
                const subassembly = armoredName[3].map((info) => 'Europa_ArmoredTanks_' + info);
                dialog.add([subassembly, 'vcard']);
                const { bool, links } = await player
                    .chooseButton(dialog)
                    .set('selectButton', () => {
                        let num = 3;
                        if (ui.selected.buttons.length) {
                            const buttonx = ui.selected.buttons[0].link[2].slice('Europa_ArmoredTanks_'.length);
                            switch (armoredName[0].indexOf(buttonx)) {
                                case 4:
                                    num += 2;
                                    break;
                                case 5:
                                    num += 6;
                                    break;
                                case 6:
                                    num += 0;
                                    break;
                                default:
                                    num += armoredName[0].indexOf(buttonx) + 1;
                                    break;
                            }
                        }
                        return num;
                    })
                    .set('filterButton', (button) => {
                        const player = get.player(),
                            trigger = get.event().getTrigger(),
                            buttons = ui.selected.buttons.length,
                            armoredName = lib.skill._Europa_ArmoredTanks.armoredName;
                        switch (buttons) {
                            case 0:
                                {
                                    const buttonx = button.link[2].slice('Europa_ArmoredTanks_'.length);
                                    switch (armoredName[0].indexOf(buttonx)) {
                                        case 4:
                                            {
                                                if (get.info('_Europa_FuelMechanism').countFuel(player) <= 2) return false;
                                            }
                                            break;
                                        case 5:
                                            {
                                                if (trigger.card.name != 'Europa_tankChassis_tuanjiexieding') return false;
                                                if (get.info('_Europa_FuelMechanism').countFuel(player) <= 5) return false;
                                            }
                                            break;
                                        case 6:
                                            {
                                                if (trigger.card.name != 'Europa_tankChassis_tuanjiexieding') return false;
                                                if (get.info('_Europa_FuelMechanism').countFuel(player) <= 3) return false;
                                            }
                                            break;
                                        default:
                                            {
                                                if (get.info('_Europa_FuelMechanism').countFuel(player) <= armoredName[0].indexOf(buttonx)) return false;
                                            }
                                            break;
                                    }
                                    return armoredName[0].some((info) => info.endsWith(buttonx));
                                }
                                break;
                            case 1:
                                {
                                    const buttonx = ui.selected.buttons[0].link[2].slice('Europa_ArmoredTanks_'.length),
                                        buttony = button.link[2].slice('Europa_ArmoredTanks_'.length);
                                    switch (buttonx) {
                                        case armoredName[0][0]:
                                            {
                                                if (!armoredName[1].slice(0, 1).includes(buttony)) return false;
                                            }
                                            break;
                                        case armoredName[0][1]:
                                            {
                                                if (!armoredName[1].slice(0, 2).includes(buttony)) return false;
                                            }
                                            break;
                                        case armoredName[0][2]:
                                            {
                                                if (!armoredName[1].slice(1, 2).includes(buttony)) return false;
                                            }
                                            break;
                                        case armoredName[0][3]:
                                            {
                                                if (!armoredName[1].slice(2, 4).includes(buttony)) return false;
                                            }
                                            break;
                                        case armoredName[0][4]:
                                            {
                                                if (!armoredName[1].slice(0, 1).includes(buttony)) return false;
                                            }
                                            break;
                                        case armoredName[0][5]:
                                            {
                                                if (trigger.card.name != 'Europa_tankChassis_tuanjiexieding') return false;
                                                if (!armoredName[1].slice(3, 5).includes(buttony)) return false;
                                            }
                                            break;
                                    }
                                    return armoredName[1].some((info) => info.endsWith(button.link[2].slice('Europa_ArmoredTanks_'.length)));
                                }
                                break;
                            case 2:
                                {
                                    const buttonx = ui.selected.buttons[1].link[2].slice('Europa_ArmoredTanks_'.length),
                                        buttony = button.link[2].slice('Europa_ArmoredTanks_'.length);
                                    if (new Array(armoredName[2][0], armoredName[2][2]).includes(buttony) && !armoredName[1].slice(1, 4).includes(buttonx)) return false;
                                    if (new Array(armoredName[2][3]).includes(buttony) && !armoredName[1].slice(2, 4).includes(buttonx)) return false;
                                    if (new Array(armoredName[2][4]).includes(buttony) && !armoredName[1].slice(3, 4).includes(buttonx)) return false;
                                    if (new Array(armoredName[2][5]).includes(buttony) && !armoredName[1].slice(0, 1).includes(buttonx)) return false;
                                    if (new Array(armoredName[2][6]).includes(buttony)) {
                                        if (trigger.card.name != 'Europa_tankChassis_tuanjiexieding' || !armoredName[1].slice(4, 5).includes(buttonx)) return false;
                                    }
                                    if (new Array(armoredName[2][7]).includes(buttony) && !new Array(armoredName[1][0], armoredName[1][2]).includes(buttonx)) return false;
                                    return armoredName[2].some((info) => info.endsWith(button.link[2].slice('Europa_ArmoredTanks_'.length)));
                                }
                                break;
                            default:
                                {
                                    if (button.link[2].endsWith('反坦克导弹') && trigger.card.name != 'Europa_tankChassis_tuanjiexieding') {
                                        return false;
                                    }
                                    return armoredName[3].some((info) => info.endsWith(button.link[2].slice('Europa_ArmoredTanks_'.length)));
                                }
                                break;
                        }
                        return false;
                    })
                    .set('ai', (button) => {
                        return 1 + Math.random();
                    })
                    .forResult();
                if (bool) {
                    const tankAssemble = links.map((info) => info[2].slice('Europa_ArmoredTanks_'.length)).flat(),
                        tankCardName = tankAssemble.join('_');
                    let fuelConsumption = 0,
                        attackDistance = 0,
                        defenseDistance = 0,
                        subassembly,
                        skills = ['Europa_ArmoredTanks_payFuel'],
                        translate = '此牌不因交换装备或移动至其他装备区而离开你的装备区后,转变为【坦克底盘】.<br>';
                    switch (tankAssemble[0]) {
                        case armoredName[0][0]:
                            {
                                fuelConsumption = 1;
                                attackDistance = 3;
                                defenseDistance = 1;
                                subassembly = 1;
                            }
                            break;
                        case armoredName[0][1]:
                            {
                                fuelConsumption = 2;
                                attackDistance = 1;
                                defenseDistance = 1;
                                subassembly = 2;
                            }
                            break;
                        case armoredName[0][2]:
                            {
                                fuelConsumption = 3;
                                attackDistance = 2;
                                defenseDistance = 2;
                                subassembly = 3;
                            }
                            break;
                        case armoredName[0][3]:
                            {
                                fuelConsumption = 4;
                                attackDistance = 1;
                                defenseDistance = 1;
                                subassembly = 4;
                            }
                            break;
                        case armoredName[0][4]:
                            {
                                fuelConsumption = 2;
                                attackDistance = 2;
                                defenseDistance = 1;
                                subassembly = 2;
                            }
                            break;
                        case armoredName[0][5]:
                            {
                                fuelConsumption = 5;
                                subassembly = 6;
                            }
                            break;
                        case armoredName[0][6]:
                            {
                                fuelConsumption = 3;
                                attackDistance = 3;
                                defenseDistance = 4;
                                subassembly = 0;
                            }
                            break;
                    }
                    switch (tankAssemble[1]) {
                        case armoredName[1][0]:
                            {
                                var card = get.cardPile(function (cardx) {
                                    return cardx.name == 'shan';
                                });
                                if (card) await player.gain(card, 'gain2');
                                await player.changeHujia(1, null, true);
                            }
                            break;
                        case armoredName[1][1]:
                            {
                                fuelConsumption += 1;
                                skills.add('Europa_ArmoredTanks_armor_中型装甲');
                            }
                            break;
                        case armoredName[1][2]:
                            {
                                fuelConsumption += 2;
                                skills.add('Europa_ArmoredTanks_armor_重型装甲');
                            }
                            break;
                        case armoredName[1][3]:
                            {
                                fuelConsumption += 3;
                                await player.changeHujia(3, null, true);
                                skills.add('Europa_ArmoredTanks_armor_超重型装甲');
                            }
                            break;
                        case armoredName[1][4]:
                            {
                                fuelConsumption += 5;
                                await player.changeHujia(3, null, true);
                                skills.add('Europa_ArmoredTanks_armor_p-1000装甲');
                            }
                            break;
                    }
                    translate += tankAssemble[0] + ':' + armoredTranslate[0][armoredName[0].indexOf(tankAssemble[0])] + '<br>';
                    translate += tankAssemble[1] + ':' + armoredTranslate[1][armoredName[1].indexOf(tankAssemble[1])] + '<br>';
                    translate += tankAssemble[2] + ':' + armoredTranslate[2][armoredName[2].indexOf(tankAssemble[2])] + '<br>';
                    const artillerySkills = Object.keys(lib.skill.Europa_ArmoredTanks_artillery.subSkill);
                    skills.add('Europa_ArmoredTanks_artillery_' + artillerySkills[armoredName[2].indexOf(tankAssemble[2])]);
                    const subassemblySkills = Object.keys(lib.skill.Europa_ArmoredTanks_subassembly.subSkill);
                    for (var i of tankAssemble.slice(3)) {
                        skills.add(`Europa_ArmoredTanks_subassembly_${subassemblySkills[armoredName[3].indexOf(i)]}`);
                        translate += get.info('_Europa_ArmoredTanks').armoredTranslate[3][armoredName[3].indexOf(i)] + '<br>';
                    }
                    if (!lib.card[tankCardName]) {
                        var info = lib.card[trigger.card.name];
                        info.ai.basic.equipValue = 10;
                        info.skills = skills;
                        info.onLose = function () {
                            var list = [];
                            for (var i = 2; i < 6; i++) {
                                for (var j = 0; j < player.countDisabledSlot(i); j++) {
                                    list.push(i);
                                }
                            }
                            player.enableEquip(list);
                            if ((!event.getParent(2) || event.getParent(2).name != 'swapEquip') && (event.parent.type != 'equip' || event.parent.swapEquip)) {
                                cards[0].init([cards[0].suit, cards[0].number, 'Europa_tankChassis']);
                            }
                        };
                        game.broadcastAll(
                            function (info, tankCard, translate, tankAssemble) {
                                lib.card[tankCard] = info;
                                lib.translate[tankCard] = tankAssemble[0].slice(0, -2);
                                lib.translate[tankCard + '_info'] = translate;
                            },
                            info,
                            tankCardName,
                            translate,
                            tankAssemble
                        );
                        game.broadcastAll(
                            function (card, tankCard) {
                                card.init([card.suit, card.number, tankCard]);
                            },
                            trigger.cards[0],
                            tankCardName
                        );
                    }
                    var info = get.info(trigger.card);
                    if (info.skills) {
                        for (var i = 0; i < info.skills.length; i++) {
                            player.addSkillTrigger(info.skills[i]);
                        }
                    }
                    if (!trigger.cards[0].storage) trigger.cards[0].storage = {};
                    trigger.cards[0].storage.Europa_attackDistance = attackDistance;
                    trigger.cards[0].storage.Europa_defenseDistance = defenseDistance;
                    trigger.cards[0].storage.Europa_fuelConsumption = fuelConsumption;
                    var list = [];
                    for (var i = 2; i < 6; i++) {
                        for (var j = 0; j < player.countEnabledSlot(i); j++) {
                            list.push(i);
                        }
                    }
                    await player.disableEquip(list);
                }
            },
        },
        Europa_ArmoredTanks_payFuel: {
            trigger: {
                player: 'phaseBegin',
            },
            forced: true,
            popup: false,
            equipSkill: true,
            async content(event, trigger, player) {
                const fuel = get.info('_Europa_FuelMechanism').payFuel(player);
                if (get.info('_Europa_FuelMechanism').countFuel(player) >= fuel) {
                    get.info('_Europa_FuelMechanism').removeFuel(player, fuel);
                    player.removeSkill('Europa_ArmoredTanks_payFuel_blocker');
                } else {
                    game.log(player, '无法支付足够的燃油');
                    player.addSkill('Europa_ArmoredTanks_payFuel_blocker');
                }
            },
            mod: {
                globalFrom(from, to, distance) {
                    if (from.hasSkill('Europa_ArmoredTanks_payFuel_blocker')) return;
                    return (
                        distance -
                        from
                            .getEquips(1)
                            .filter((card) => card.storage && card.storage.Europa_attackDistance)
                            .reduce((p, c) => p + c.storage.Europa_attackDistance, 0)
                    );
                },
                globalTo(from, to, distance) {
                    if (to.hasSkill('Europa_ArmoredTanks_payFuel_blocker')) return;
                    return (
                        distance +
                        to
                            .getEquips(1)
                            .filter((card) => card.storage && card.storage.Europa_defenseDistance)
                            .reduce((p, c) => p + c.storage.Europa_defenseDistance, 0)
                    );
                },
            },
            subSkill: {
                blocker: {
                    charlotte: true,
                    mod: {
                        cardEnabled(card, player) {
                            if (card.name == 'sha') return false;
                        },
                    },
                },
            },
        },
        Europa_ArmoredTanks_armor: {
            subSkill: {
                轻装甲: {
                    charlotte: true,
                },
                中型装甲: {
                    trigger: {
                        target: 'useCardToBefore',
                    },
                    forced: true,
                    _priority: 15,
                    charlotte: true,
                    filter(event, player) {
                        return event.card && event.card.name == 'sha' && !game.hasNature(event.card);
                    },
                    async content(event, trigger, player) {
                        trigger.cancel();
                    },
                    ai: {
                        effect: {
                            target(card, player, target) {
                                if (card.name == 'sha' && !game.hasNature(card)) return 'zeroplayertarget';
                            },
                        },
                    },
                },
                重型装甲: {
                    trigger: {
                        target: 'useCardToBefore',
                    },
                    forced: true,
                    _priority: 15,
                    charlotte: true,
                    filter(event, player) {
                        return event.card && event.card.name == 'sha';
                    },
                    async content(event, trigger, player) {
                        trigger.cancel();
                    },
                    ai: {
                        effect: {
                            target(card, player, target) {
                                if (card.name == 'sha') return 'zeroplayertarget';
                            },
                        },
                    },
                },
                超重型装甲: {
                    trigger: {
                        target: 'useCardToBefore',
                    },
                    forced: true,
                    _priority: 15,
                    charlotte: true,
                    filter(event, player) {
                        return (event.card && event.card.name == 'sha') || event.card.name == 'juedou';
                    },
                    async content(event, trigger, player) {
                        trigger.cancel();
                    },
                    ai: {
                        effect: {
                            target(card, player, target) {
                                if (card.name == 'sha' || card.name == 'juedou') return 'zeroplayertarget';
                            },
                        },
                    },
                },
                'p-1000装甲': {
                    trigger: {
                        target: 'useCardToBefore',
                    },
                    forced: true,
                    _priority: 15,
                    charlotte: true,
                    filter(event, player) {
                        if (player.hasSkill('Europa_ArmoredTanks_payFuel_blocker')) return false;
                        return get.tag(event.card, 'damage');
                    },
                    async content(event, trigger, player) {
                        trigger.cancel();
                    },
                    ai: {
                        effect: {
                            target(card, player, target) {
                                if (player.hasSkill('Europa_ArmoredTanks_payFuel_blocker')) return;
                                if (get.tag(card, 'damage')) return 'zeroplayertarget';
                            },
                        },
                    },
                },
            },
        },
        Europa_ArmoredTanks_artillery: {
            charlotte: true,
            subSkill: {
                主战坦克炮: {
                    description: '当你使用【杀】时须弃置三枚弹药,扣除目标所有护甲值,令此【杀】无法被响应.',
                    trigger: {
                        player: 'useCard',
                    },
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        if (player.countMark('_Europa_AmmunitionMechanism') < 3) return false;
                        return event.card && event.card.name == 'sha';
                    },
                    async content(event, trigger, player) {
                        player.removeMark('_Europa_AmmunitionMechanism', 3);
                        for (const target of trigger.targets) {
                            if (target.hujia) await target.changeHujia(-target.hujia);
                        }
                        trigger.directHit.addArray(game.filterPlayer());
                    },
                    mod: {
                        attackRange: (player, num) => num + 4,
                    },
                },
                机炮: {
                    description: '出牌阶段,当你使用【杀】后,你可以弃置两枚弹药,令此【杀】不计入使用次数.',
                    trigger: {
                        player: 'useCardAfter',
                    },
                    charlotte: true,
                    filter(event, player) {
                        if (player.countMark('_Europa_AmmunitionMechanism') < 2) return false;
                        if (!player.isPhaseUsing()) return false;
                        return event.card && event.card.name == 'sha';
                    },
                    check(event, player) {
                        return event.parent.addCount !== false && player.hasSha();
                    },
                    async content(event, trigger, player) {
                        player.removeMark('_Europa_AmmunitionMechanism', 2);
                        if (trigger.parent.addCount !== false) {
                            trigger.parent.addCount = false;
                            player.getStat().card.sha--;
                        }
                    },
                    mod: {
                        attackRange: (player, num) => num + 2,
                    },
                },
                榴弹炮: {
                    description: '当你使用【杀】时须弃置三枚弹药,此【杀】转变为火【杀】造成伤害后,对目标相邻角色各造成1点火焰伤害.',
                    trigger: {
                        player: 'useCard1',
                    },
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        if (player.countMark('_Europa_AmmunitionMechanism') < 3) return false;
                        if (!player.isPhaseUsing()) return false;
                        return event.card && event.card.name == 'sha';
                    },
                    async content(event, trigger, player) {
                        player.removeMark('_Europa_AmmunitionMechanism', 3);
                        game.setNature(trigger.card, 'fire');
                        trigger.card._Europa_liudanpao = true;
                        player.addTempSkill('Europa_ArmoredTanks_artillery_effect_liudanpao');
                    },
                    mod: {
                        attackRange: (player, num) => num + 3,
                    },
                },
                重型火炮: {
                    description: '当你使用【杀】时须弃置五枚弹药,造成伤害时,你须令伤害+2,且转变为火属性伤害.若目标角色有护甲,则造成伤害翻倍.',
                    trigger: {
                        player: 'useCard',
                    },
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        if (player.countMark('_Europa_AmmunitionMechanism') < 5) return false;
                        return event.card && event.card.name == 'sha';
                    },
                    async content(event, trigger, player) {
                        player.removeMark('_Europa_AmmunitionMechanism', 5);
                        trigger.card._Europa_zhongxinghuopao = true;
                        player.addTempSkill('Europa_ArmoredTanks_artillery_effect_zhongxinghuopao');
                    },
                    ai: {
                        unequip: true,
                        unequip: true,
                        skillTagFilter(player, tag, arg) {
                            if (arg && arg.name == 'sha') return true;
                            return false;
                        },
                    },
                    mod: {
                        attackRange: (player, num) => num + 5,
                    },
                },
                超重型火炮: {
                    description: '当你使用【杀】时,弃置八枚弹药,并进行判定,若为♠️️,则此【杀】无效,你受到1点无来源伤害.否则你令此【杀】伤害+4,目标角色须要用两张【闪】才能抵消,当你使用【杀】击杀目标角色后,对其座次最近的四名角色造成1点伤害.',
                    trigger: {
                        source: 'die',
                        player: 'useCard',
                    },
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        if (event.name == 'die') return event.parent;
                        return event.card && event.card.name == 'sha' && player.countMark('_Europa_AmmunitionMechanism') >= 8;
                    },
                    async content(event, trigger, player) {
                        if (trigger.name == 'useCard') {
                            player.removeMark('_Europa_AmmunitionMechanism', 8);
                            const judgeEvent = player.judge((card) => {
                                if (card.suit != 'club') return 2;
                                return -1;
                            });
                            judgeEvent.judge2 = (result) => result.bool;
                            const { bool } = await judgeEvent.forResult();
                            if (bool) {
                                trigger.targets.length = 0;
                                trigger.all_excluded = true;
                                game.log(trigger.card, '被无效了');
                                await player.damage('nosource');
                            } else {
                                trigger.baseDamage += 4;
                                for (const target of trigger.targets) {
                                    const id = target.playerid;
                                    const map = trigger.parent.customArgs;
                                    if (!map[id]) map[id] = {};
                                    if (typeof map[id].shanRequired == 'number') {
                                        map[id].shanRequired++;
                                    } else {
                                        map[id].shanRequired = 2;
                                    }
                                }
                            }
                        } else {
                            const targets = game
                                .filterPlayer()
                                .sort((a, b) => get.distance(a, trigger.player) - get.distance(b, trigger.player))
                                .sortBySeat(trigger.player)
                                .slice(0, 4);
                            for (const target of targets) {
                                await target.damage();
                            }
                        }
                    },
                    mod: {
                        attackRange: (player, num) => num + 8,
                    },
                },
                速射炮: {
                    description: '当你使用【杀】时须弃置3枚弹药,此【杀】额外触发一次.',
                    trigger: {
                        player: 'useCard',
                    },
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        return event.card && event.card.name == 'sha' && player.countMark('_Europa_AmmunitionMechanism') >= 3;
                    },
                    async content(event, trigger, player) {
                        player.removeMark('_Europa_AmmunitionMechanism', 3);
                        trigger.effectCount++;
                    },
                    mod: {
                        attackRange: (player, num) => num + 3,
                    },
                },
                'p-1000双门巨炮': {
                    description: '攻击范围无限,当你使用【杀】时须弃置20枚弹药,此【杀】无法被响应,受到伤害的角色立刻死亡,座次相邻角色须弃置一张【闪】,否则各受到3点伤害.',
                    trigger: {
                        player: 'useCard',
                    },
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        return event.card && event.card.name == 'sha' && player.countMark('_Europa_AmmunitionMechanism') >= 20;
                    },
                    async content(event, trigger, player) {
                        player.removeMark('_Europa_AmmunitionMechanism', 20);
                        trigger.directHit.addArray(game.filterPlayer());
                        trigger.card._Europa_ArmoredTanks_p1000 = true;
                        player.addTempSkill('Europa_ArmoredTanks_artillery_effect_p1000');
                    },
                    mod: {
                        attackRangeBase() {
                            return Infinity;
                        },
                    },
                },
                火箭发生器: {
                    description: '当你使用【杀】时须弃置8枚弹药,此【杀】额外指定所有其他角色为目标.',
                    trigger: {
                        player: 'useCardToPlayered',
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filter(event, player) {
                        if (event.card.name != 'sha') return false;
                        if (player.countMark('_Europa_AmmunitionMechanism') < 8) return false;
                        return game.hasPlayer(function (current) {
                            return !event.targets.includes(current) && current != event.target && lib.filter.targetEnabled2(event.card, player, current);
                        });
                    },
                    async content(event, trigger, player) {
                        player.removeMark('_Europa_AmmunitionMechanism', 8);
                        const targets = game.filterPlayer((target) => {
                            return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target);
                        });
                        if (targets.length) {
                            trigger.parent.targets.addArray(targets);
                        }
                    },
                },
            },
        },
        Europa_ArmoredTanks_artillery_effect: {
            subSkill: {
                liudanpao: {
                    trigger: {
                        source: 'damageSource',
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filter(event, player) {
                        return event.card && event.card._Europa_liudanpao;
                    },
                    async content(event, trigger, player) {
                        const targets = game
                            .filterPlayer((current) => {
                                return get.distance(trigger.player, current, 'pure') <= 1;
                            })
                            .toUniqued();
                        for (const target of targets) {
                            await target.damage('fire');
                        }
                    },
                },
                zhongxinghuopao: {
                    trigger: {
                        source: 'damageBegin1',
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filter(event, player) {
                        return event.card && event.card._Europa_zhongxinghuopao;
                    },
                    async content(event, trigger, player) {
                        trigger.num += 2;
                        game.setNature(trigger, 'fire');
                        if (trigger.player.hujia) trigger.num *= 2;
                    },
                },
                p1000: {
                    trigger: {
                        global: 'damageEnd',
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filter(event, player) {
                        return event.card && event.card._Europa_ArmoredTanks_p1000;
                    },
                    async content(event, trigger, player) {
                        const targets = game.filterPlayer((target) => {
                            return get.distance(trigger.player, target, 'pure') <= 1;
                        });
                        trigger.player.die();
                        for (const target of targets) {
                            const { bool } = await target
                                .chooseToDiscard(`请弃置一张【闪】,否则你受到3点伤害`, { name: 'shan' })
                                .set('ai', (card) => {
                                    const player = get.player();
                                    return 8 - get.value(card);
                                })
                                .forResult();
                            if (!bool) {
                                await target.damage(3);
                            }
                        }
                    },
                },
            },
        },
        Europa_ArmoredTanks_subassembly: {
            yinni(player) {
                var name = player.name || player.name1;
                if (name && lib.character[name]) {
                    player.storage.rawHp = player.getHp();
                    player.storage.rawMaxHp = player.maxHp;
                    player.hp = 0;
                    player.maxHp = 0;
                    player.update();
                    var skills = lib.character[name][3];
                    if (player.name2) {
                        for (var i of lib.character[player.name2][3]) {
                            skills.add(i);
                        }
                    }
                    for (var i = 0; i < skills.length; i++) {
                        if (!lib.translate[skills[i] + '_info']) {
                            skills.splice(i--, 1);
                        }
                    }
                    for (var i of skills) {
                        player.removeSkill(i);
                    }
                    if (!player.hiddenSkills) player.hiddenSkills = [];
                    player.hiddenSkills.addArray(skills);
                    player.classList.add();
                    if (player.name2) player.classList.add('unseen2');
                    player.name = 'unknown';
                    if (!player.node.name_seat && !_status.video) {
                        player.node.name_seat = ui.create.div('.name.name_seat', get.verticalStr(get.translation(player.name)), player);
                        player.node.name_seat.dataset.nature = get.groupnature(player.group);
                    }
                    player.sex = 'male';
                    player.storage.nohp = true;
                    player.node.hp.hide();
                    player.addSkill('g_hidden_ai');
                    player.update();
                    player.hp = 1;
                    player.maxHp = 1;
                }
            },
            charlotte: true,
            subSkill: {
                无线电: {
                    description: '锁定技,当你获得无线电时,你选择一名其他角色,你们互相可见对方手牌.',
                    init(player, skill) {
                        var next = game.createEvent('Europa_ArmoredTanks_subassembly_wuxiandian_init');
                        next.player = player;
                        next.setContent(async (event, trigger, player) => {
                            const { bool, targets } = await player
                                .chooseTarget(`请选择一名其他角色,你们互相可见对方手牌`)
                                .set('filterTarget', (card, player, target) => {
                                    return target != player;
                                })
                                .set('ai', (target) => {
                                    const player = get.player();
                                    return -get.attitude(player, target);
                                })
                                .forResult();
                            if (bool) {
                                targets.add(player);
                                for (const current of targets) {
                                    current.addSkill('Europa_ArmoredTanks_subassembly_effect_wuxiandian');
                                    current.markAuto('Europa_ArmoredTanks_subassembly_effect_wuxiandian', targets[current == player ? 0 : 1]);
                                }
                            }
                        });
                    },
                    charlotte: true,
                },
                倾斜装甲: {
                    description: '锁定技,你受到的无属性伤害-1.',
                    charlotte: true,
                    trigger: {
                        player: 'damageBegin3',
                    },
                    forced: true,
                    filter(event, player) {
                        return !event.hasNature();
                    },
                    async content(event, trigger, player) {
                        trigger.num--;
                    },
                },
                主动防御设施: {
                    description: '当你成为【顺手牵羊】和【过河拆桥】的目标时,你可以弃置一张牌,令此牌对你失效.',
                    charlotte: true,
                    trigger: {
                        target: 'useCardToTarget',
                    },
                    popup: false,
                    filter(event, player) {
                        return ['shunshou', 'guohe'].includes(event.card.name);
                    },
                    async cost(event, trigger, player) {
                        event.result = await player
                            .chooseToDiscard(get.prompt2(event.name.slice(0, -5)))
                            .set('chooseonly', true)
                            .forResult();
                    },
                    async content(event, trigger, player) {
                        await player.discard(event.cards);
                        trigger.parent.excluded.add(player);
                        game.log(trigger.card, '对', player, '无效');
                    },
                },
                加装机枪: {
                    description: '出牌阶段限一次,你可以选择一名与你距离为1的其他角色进行判定,若为♣️️,则你对其造成1点伤害.',
                    charlotte: true,
                    enable: 'phaseUse',
                    usable: 1,
                    filterTarget(card, player, target) {
                        return get.distance(player, target) == 1;
                    },
                    prompt: '出牌阶段限一次,你可以选择一名与你距离为1的其他角色进行判定,若为♣️️,则你对其造成1点伤害.',
                    async content(event, trigger, player) {
                        const target = event.targets[0];
                        const judgeEvent = player.judge((card) => {
                            if (card.suit == 'club') return 2;
                            return -1;
                        });
                        judgeEvent.judge2 = (result) => result.bool;
                        const { bool } = await judgeEvent.forResult();
                        if (bool) {
                            target.damage();
                        }
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
                额外油箱: {
                    description: '锁定技,减少1点燃油消耗.',
                    charlotte: true,
                    mod: {
                        removeFuelLimit(player, num) {
                            return (num += 1);
                        },
                    },
                },
                灭火器: {
                    description: '锁定技,当你受到属性伤害时,此伤害转变为无属性伤害.',
                    charlotte: true,
                    trigger: {
                        player: 'damageBegin4',
                    },
                    forced: true,
                    filter(event, player) {
                        return event.hasNature();
                    },
                    async content(event, trigger, player) {
                        game.setNature(trigger, null);
                    },
                },
                自动装弹机: {
                    description: '出牌阶段开始时,你获得一枚弹药标记.',
                    charlotte: true,
                    trigger: {
                        player: 'phaseUseBegin',
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        player.addMark('_Europa_AmmunitionMechanism');
                    },
                },
                烟雾发生器: {
                    description: '锁定技,当你受到一次伤害后,你进入隐匿状态.',
                    charlotte: true,
                    trigger: {
                        player: 'damageEnd',
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        get.info('Europa_ArmoredTanks_subassembly').yinni(player);
                    },
                },
                火焰喷射器: {
                    description: '出牌阶段限一次,你可以消耗1点燃油,对一名角色造成1点火焰伤害.',
                    charlotte: true,
                    enable: 'phaseUse',
                    usable: 1,
                    filterTarget: true,
                    filter(event, player) {
                        return get.info('_Europa_FuelMechanism').countFuel(player);
                    },
                    prompt: '出牌阶段限一次,你可以消耗1点燃油,对一名角色造成1点火焰伤害.',
                    async content(event, trigger, player) {
                        get.info('_Europa_FuelMechanism').removeFuel(player, 1);
                        event.targets[0].damage('fire');
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
                反坦克导弹: {
                    description: '当你对一名有防具或装备坦克的角色使用【杀】时,你可以对其造成1点伤害.',
                    charlotte: true,
                    trigger: {
                        player: 'useCardToTarget',
                    },
                    filter(event, player) {
                        return (event.card.name == 'sha' && event.target.getEquips(2).length) || event.target.getEquips().some((card) => cardx.name.startsWith('Europa_tankChassis'));
                    },
                    logTarget: 'target',
                    check(event, player) {
                        return get.damageEffect(event.target, player, player) > 0;
                    },
                    async content(event, trigger, player) {
                        trigger.target.damage();
                    },
                    ai: {
                        damage: true,
                    },
                },
            },
        },
        Europa_ArmoredTanks_subassembly_effect: {
            charlotte: true,
            subSkill: {
                wuxiandian: {
                    charlotte: true,
                    ai: {
                        viewHandcard: true,
                        skillTagFilter(player, tag, arg) {
                            if (player == arg || !player.getStorage('Europa_ArmoredTanks_subassembly_effect_wuxiandian').includes(arg)) return false;
                        },
                    },
                },
            },
        },
    });
}
export default skills;

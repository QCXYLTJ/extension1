import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
export async function precontent() {
    await import('../character/index.js');
    await import('../tnocharacter/index.js');
    //css载入
    lib.init.css('extension/欧陆风云', 'extension');
    //欧陆势力——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
    game.addGroup('Europa_Spain', '西', '西班牙', { color: '#DAA520' });
    game.addGroup('Europa_Portugal', '葡', '葡萄牙', { color: '#008080' });
    game.addGroup('Europa_Türkiye', '土', '土耳其', { color: '#008000' });
    game.addGroup('Europa_Ming', '明', '明朝', { color: '#FFFF00' });
    game.addGroup('Europa_Azi', '兹', '阿兹特克', { color: '#228B22' });
    game.addGroup('Europa_Indian', '印', '印第安', { color: '#7B68EE' });
    game.addGroup('Europa_Maori', '毛', '毛利', { color: '#B22222' });
    game.addGroup('Europa_Inca', '印', '印加', { color: '#CD853F' });
    game.addGroup('Europa_France', '法', '法国', { color: '#0000FF' });
    game.addGroup('Europa_Hungary', '匈', '匈牙利', { color: '#ac5f4d' });
    game.addGroup('Europa_Wei', '威', '威尼斯', { color: '#48D1CC' });
    game.addGroup('Europa_Roman', '罗', '罗马', { color: '#FF0000' });
    game.addGroup('Europa_Jin', '金', '金帐', { color: '#8c4182' });
    game.addGroup('Europa_Poli', '波', '波立', { color: '#DC143C' });
    game.addGroup('Europa_Germany', '德', '德国', { color: '#696969' });
    game.addGroup('Europa_Jiao', '教', '教宗国', { color: '#D3D3D3' });
    game.addGroup('Europa_Britain', '英', '英国', { color: '#8B0000' });
    game.addGroup('Europa_Mapp', '马', '马普切', { color: '#6495ED' });
    game.addGroup('Europa_Korea', '朝', '朝鲜', { color: '#6495ED' });
    game.addGroup('Europa_India', '印', '印度', { color: '#FFA500' });
    game.addGroup('Europa_Austria', '奥', '奥地利', { color: '#696969' });
    game.addGroup('Europa_Mali', '马', '马里', { color: '#d0c477' });
    game.addGroup('Europa_Zulu', '祖', '祖鲁', { color: '#aca77f' });
    game.addGroup('Europa_Egypt', '埃', '埃及', { color: '#c0793b' });
    game.addGroup('Europa_Congo', '刚', '刚果', { color: '#4e8400' });
    game.addGroup('Europa_Byzantine', '拜', '拜占廷', { color: '#FF00FF' });
    game.addGroup('Europa_Indonesia', '印', '印尼', { color: '#CD853F' });
    game.addGroup('Europa_Scotland', '苏', '苏格兰', { color: '#CD853F' });
    lib.Europa_bananaOrdinary = [];
    lib.Europa_bananaSpecial = [];
    lib.Europa_ColonialExplorationList = ['Europa_America', 'Europa_Africa', 'Europa_Asia'];
    lib.tradeGoodsCardList = ['Europa_gem', 'Europa_gold', 'Europa_silk'];
    lib.Europa_ExplorationEvent = ['好战部落', '水果岛', '海盗来袭', '雷暴巨浪', '到达印度', '哨站', '船翻了', '瘟疫', '巨型海怪', '补给点', '友好部落'];
    lib.EuropaReligion = ['基督教', '天主教', '新教', '东正教', '穆斯林', '逊尼派', '什叶派', '儒教', '腾格里', '印度教', '佛教', '神道教', '无神论'];
    //总督殖民地
    const Player = lib.element.player,
        Content = lib.element.content,
        Get = lib.get;
    Get.Europa_bananas = function (check) {
        const list = ['Europa_smallBanana', 'Europa_rottenBanana', 'Europa_blameBanana', 'Europa_bigBanana', 'Europa_splitBanana'];
        if (check == 'ordinary') return list.slice(0, 3);
        if (check == 'special') return list.slice(3, 5);
        return list;
    };
    Get.Europa_animals = function (check) {
        const list = ['Europa_piglet', 'Europa_calf', 'Europa_lamb', 'Europa_rat', 'Europa_mukeladedabiaoge'];
        return list;
    };
    Player.getEuropaViceroy = function (unseen) {
        const list = [];
        if (unseen || !this.isUnseen(0)) {
            let info = lib.character[this.name1];
            if (info && info.trashBin) list.addArray(info.trashBin);
        }
        if (this.name2 && (unseen || !this.isUnseen(1))) {
            let info = lib.character[this.name2];
            if (info && info.trashBin) list.addArray(info.trashBin);
        }
        return list.filter((info) => typeof info === 'string' && info.startsWith('EuropaViceroy:')).map((info) => info.slice(14));
    };
    //宗教
    lib.noChangeEuropaReligionCharacters = ['Europa_pishamen', 'Europa_tiduoluocha', 'Europa_piliubocha', 'Europa_piliufujia'];
    Player.getEuropaReligion = function () {
        return lib.EuropaReligion.filter((religion) => this.hasClan(religion));
    };
    Player.hasEuropaReligion = function (religion) {
        switch (religion) {
            case '基督教': {
                return ['基督教', '天主教', '新教', '东正教'].some((clan) => this.hasClan(clan));
            }
            case '穆斯林': {
                return ['穆斯林', '逊尼派', '什叶派'].some((clan) => this.hasClan(clan));
            }
            default:
                return this.hasClan(religion);
        }
    };
    Player.canChangeEuropaReligion = function () {
        if (this.hasSkillTag('noChangeEuropaReligion')) return false;
        if (
            get.nameList(this).some((name) => {
                return lib.character[name]?.group == 'shen';
            })
        )
            return false;
        return true;
    };
    Player.changeEuropaReligion = function (religion) {
        if (this.hasSkillTag('noChangeEuropaReligion')) return;
        const next = game.createEvent('changeEuropaReligion');
        next.player = this;
        next.religion = religion;
        next.setContent('changeEuropaReligion');
        return next;
    };
    Content.changeEuropaReligion = async (event, trigger, player) => {
        const religion = event.religion;
        const religions = player.getEuropaReligion().slice();
        religions.removeArray(['基督教']);
        if (religions.includes('儒教')) religion.add('儒教');
        game.broadcastAll(
            function (player, religions, religion) {
                if (player.name1) {
                    lib.character[player.name1].clans.removeArray(religions);
                    lib.character[player.name1].clans.add(religion);
                    const initfilter = lib.character[player.name1].clans.filter((clan) => lib.EuropaReligion.includes(clan)).join('，');
                    if (!lib.InitFilter[initfilter]) lib.InitFilter[initfilter] = initfilter;
                    lib.character[player.name1].initFilters = [initfilter];
                }
                if (player.name2) {
                    lib.character[player.name2].clans.removeArray(religions);
                    lib.character[player.name2].clans.add(religion);
                    const initfilter = lib.character[player.name2].clans.filter((clan) => lib.EuropaReligion.includes(clan)).join('，');
                    if (!lib.InitFilter[initfilter]) lib.InitFilter[initfilter] = initfilter;
                    lib.character[player.name2].initFilters = [initfilter];
                }
            },
            player,
            religions,
            religion
        );
        game.log(player, '成为了', '#g' + religion, '势力');
    };
    //殖民探险机制
    Player.chooseColonialExploration = function () {
        const next = game.createEvent('chooseColonialExploration');
        next.player = this;
        if (!next.cardlist) next.cardlist = lib.Europa_ColonialExplorationList;
        next.setContent('chooseColonialExploration');
        return next;
    };
    Content.chooseColonialExploration = function () {
        'step 0';
        player
            .chooseButton(
                [
                    '殖民探险',
                    [
                        [
                            ['宝石', '5', 'Europa_America'],
                            ['黄金', '4', 'Europa_Africa'],
                            ['丝绸', '6', 'Europa_Asia'],
                        ],

                        'vcard',
                    ],
                ],

                true
            )
            .set('ai', (button) => {
                const player = get.player();
                let eff = 1;
                let skills = player.getSkills().slice(0).addArray(lib.skill.global);
                game.expandSkills(skills);
                eff += skills
                    .filter((skill) => lib.skill[skill] && lib.skill[skill].ai && lib.skill[skill].ai[button.link[2]])
                    .map((skill) => lib.skill[skill].ai[button.link[2]])
                    .reduce((p, c) => p + c, 0);
                switch (button.link[2]) {
                    case 'Europa_America':
                        {
                            eff += get.recoverEffect(player, player, player);
                            if (player.getExpansions('Europa_gem').length) eff -= player.getExpansions('Europa_gem').length;
                        }
                        break;
                    case 'Europa_Africa':
                        {
                            eff += get.effect(player, { name: 'draw' }, player, player) * (1 + player.getExpansions('colonialExploration').length) * 0.1;
                        }
                        break;
                    case 'Europa_Asia':
                        {
                            if (!player.hasEmptySlot(2)) eff -= 0.5;
                            if (player.getExpansions('Europa_silk').length) eff -= player.getExpansions('Europa_silk').length / 2;
                        }
                        break;
                }
                return eff;
            });
        ('step 1');
        game.log(player, '选择前往', '#g' + result.links[0][2]);
        event.result = result;
        event.exploration = result.links[0][2];
        event.num = parseInt(result.links[0][1]);
        player.getHistory('custom').push({ Europa_exploration: event.exploration });
        ('step 2');
        event.trigger('chooseColonialExplorationBegin1');
        ('step 3');
        event.trigger('chooseColonialExplorationBegin2');
        ('step 4');
        event.trigger('chooseColonialExplorationBegin3');
        ('step 5');
        event.trigger('chooseColonialExplorationBegin4');
        ('step 6');
        var result = event.result || result;
        event.result = result;
        event.result.exploration = event.exploration;
        event.result.num = event.num;
    };
    Player.explorationContingency = function () {
        const next = game.createEvent('explorationContingency', false);
        next.player = this;
        next.setContent('explorationContingency');
        return next;
    };
    Content.explorationContingency = async (event, trigger, player) => {
        if (!player.storage.colonialExploration_sailing) {
            player.removeSkill('colonialExploration_sailing');
            player.removeTip('colonialExploration_sailing');
            return;
        }
        event.exploration = player.storage.colonialExploration_sailing.name;
        event.num = Array.from({ length: 11 })
            .map((_, i) => i + 2)
            .randomGet();
        await event.trigger('explorationContingencyBegin');
        event.draw = 0;
        if (!event.skipContingency) {
            const config = lib.config.Europa_colonialExploration;
            if (config != '0') {
                const dialog = ui.create.dialog();
                dialog.classList.add('fullwidth');
                dialog.classList.add('fullheight');
                dialog.classList.add('noupdate');
                dialog.style.backgroundImage = `url(extension/欧陆风云/image/exploration/${event.num}.jpg)`;
                dialog.style.backgroundSize = `100% 100%`;
                if (config == '2') {
                    await player.chooseControl('ok').set('dialog', dialog);
                } else {
                    dialog.close();
                }
            }
            const next = game.createEvent(`explorationContingency_${event.num}`);
            next.player = player;
            next.draw = event.draw;
            next.effect = event.num;
            next.setContent(lib.Europa_explorationContingency.get(event.num).content);
            await next;
        }
        player.storage.colonialExploration_sailing.history.push(event.num);
        if (player.storage.colonialExploration_sailing.num) player.storage.colonialExploration_sailing.num--;
        player.addTip('colonialExploration_sailing', `航行${get.translation(event.exploration)}` + player.storage.colonialExploration_sailing.num);
        if (!event.directContingency) {
            if (player.storage.colonialExploration_sailing.num > 0) return;
        }
        await event.trigger('explorationContingencyAccomplishBegin');
        await event.trigger('explorationContingencyAccomplishEnd');
        await event.trigger('explorationContingencyExchange');
        if (player.storage.colonialExploration_sailing.num > 0) player.storage.colonialExploration_sailing.num = 0;
        let cards = [],
            num = player.getExpansions('colonialExploration').length;
        let index = lib.Europa_ColonialExplorationList.indexOf(player.storage.colonialExploration_sailing.name);
        let skill = lib.tradeGoodsCardList[index];
        let exchangeTradeGoods = get.cards(num);
        await game.cardsGotoOrdering(exchangeTradeGoods);
        await player.loseToDiscardpile(player.getExpansions('colonialExploration'));
        player.addSkill(`g_${skill}`);
        await player.addToExpansion(exchangeTradeGoods, player, 'giveAuto').set('gaintag', [skill]);
        event.exchangeTradeGoods = exchangeTradeGoods;
        await event.trigger('explorationContingencyExchangeEnd');
        await event.trigger('explorationContingencyFinally1');
        await event.trigger('explorationContingencyFinally2');
        await event.trigger('explorationContingencyFinally3');
        await event.trigger('explorationContingencyFinallyEnd');
        player.getHistory('custom').push({ explorationContingencyFinallyEnd: true });
        player.removeSkill('colonialExploration_sailing');
        player.removeTip('colonialExploration_sailing');
    };
    lib.Europa_explorationContingency = new Map([
        [
            2,
            {
                event: '好战部落',
                type: 'negative',
                async content(event, trigger, player) {
                    game.log('#g意外：', '好战部落');
                    await player.damage('nosource');
                },
            },
        ],

        [
            3,
            {
                event: '水果岛',
                type: 'positive',
                async content(event, trigger, player) {
                    game.log('#g意外：', '水果岛');
                    await player.recover();
                },
            },
        ],

        [
            4,
            {
                event: '海盗来袭',
                type: 'negative',
                async content(event, trigger, player) {
                    //QQQ
                    game.log('#g意外：', '海盗来袭');
                    const cards = player.getExpansions('colonialExploration');
                    if (!cards.length) {
                        player.damage('nosource');
                    } else {
                        const { links } = await player
                            .chooseButton(['弃置一张“财”，或受到1点无来源伤害', cards])
                            .set('ai', (button) => {
                                const player = get.player();
                                if (get.damageEffect(player, player, player) > 0) return 0;
                                return 1 + Math.random();
                            })
                            .forResult();
                        if (links?.length) {
                            await player.loseToDiscardpile(links);
                        } else {
                            await player.damage('nosource');
                        }
                    }
                },
            },
        ],

        [
            5,
            {
                event: '雷暴巨浪',
                type: 'negative',
                async content(event, trigger, player) {
                    game.log('#g意外：', '雷暴巨浪');
                    const executeDelayCardEffect = player.executeDelayCardEffect('shandian');
                    player
                        .when('judgeEnd')
                        .filter((event) => event.parent == executeDelayCardEffect)
                        .then(() => {
                            if (trigger.result.suit == 'spade' && trigger.result.number >= 2 && trigger.result.number <= 9) {
                                player.loseToDiscardpile(player.getExpansions('colonialExploration'));
                            }
                        });
                    await executeDelayCardEffect;
                },
            },
        ],

        [
            6,
            {
                event: '到达“印度”？',
                type: 'positive',
                async content(event, trigger, player) {
                    game.log('#g意外：', '到达“印度”？');
                    player.addToExpansion(get.cards(2), 'giveAuto').gaintag.add('Europa_gold');
                },
            },
        ],

        [
            7,
            {
                event: '哨站',
                type: 'positive',
                async content(event, trigger, player) {
                    game.log('#g意外：', '哨站');
                    await player.changeHujia(1, null, true);
                    await player.draw();
                },
            },
        ],

        [
            8,
            {
                event: '船翻了',
                type: 'negative',
                async content(event, trigger, player) {
                    game.log('#g意外：', '船翻了');
                    const cards = player.getExpansions('colonialExploration');
                    if (!cards.length) return;
                    const { bool, links } = await player.chooseButton(['弃置两张“财”', cards], Math.min(2, cards.length), true).forResult();
                    if (bool) {
                        await player.loseToDiscardpile(links);
                    }
                },
            },
        ],

        [
            9,
            {
                event: '瘟疫',
                type: 'negative',
                async content(event, trigger, player) {
                    game.log('#g意外：', '瘟疫');
                    await player.loseHp();
                },
            },
        ],

        [
            10,
            {
                event: '巨型海怪',
                type: 'negative',
                async content(event, trigger, player) {
                    game.log('#g意外：', '巨型海怪');
                    if (player.countCards('he')) {
                        //QQQ
                        await player.chooseToDiscard('he', 2, true);
                    }
                },
            },
        ],

        [
            11,
            {
                event: '补给点',
                type: 'positive',
                async content(event, trigger, player) {
                    game.log('#g意外：', '补给点');
                    const cards = player.getExpansions('colonialExploration');
                    if (cards.length >= 4) return;
                    player.addToExpansion(get.cards(4 - cards.length), 'giveAuto').gaintag.add('colonialExploration');
                },
            },
        ],

        [
            12,
            {
                event: '友好部落',
                type: 'positive',
                async content(event, trigger, player) {
                    game.log('#g意外：', '友好部落');
                    await player.draw(2 + event.draw);
                    if (player.countCards('h')) {
                        const { bool, cards } = await player
                            .chooseCard('h', `你可以将任意张手牌置于武将牌上，称为“财”`)
                            .set('ai', function (card) {
                                return 6 - get.value(card);
                            })
                            .set('selectCard', [1, Infinity])
                            .set('complexCard', true)
                            .forResult();
                        if (bool) {
                            player.addToExpansion(cards, player, 'giveAuto').gaintag.add('colonialExploration');
                        }
                    }
                },
            },
        ],
    ]);
    //神圣罗马帝国组件
    lib.element.player.Europa_setShenLuoKindom = function (targets) {
        const next = game.createEvent('Europa_setShenLuoKindom');
        next.player = this;
        next.targets = targets;
        next.filterStop = function () {
            if (!this.targets?.length && !game.hasPlayer((t) => t !== this.player)) {
                delete this.filterStop;
                this.finish();
                this._triggered = null;
                return true;
            }
        };
        next.setContent('Europa_setShenLuoKindom');
    };
    lib.element.content.Europa_setShenLuoKindom = async function (event, trigger, player) {
        game.addGlobalSkill('Europa_shenluodiguo');
        let targets =
            event.targets ||
            game.filterPlayer((target) => {
                return [player.next, player.previous, player.next.next, player.previous.previous].includes(target);
            });
        if (!Array.isArray(targets)) targets = [targets];
        player.line(targets);
        game.log(player, '成为了新的', '#g凯撒');
        player.addSkill('Europa_shenluodiguo_king');
        player.markAuto('Europa_shenluodiguo_king', targets);
        const result =
            targets.length > 2
                ? await player
                    .chooseTarget(
                        '令其中两名角色成为“选帝侯”',
                        (c, p, t) => {
                            return get.event().targets.includes(t);
                        },
                        2,
                        true
                    )
                    .set('targets', targets)
                    .set('ai', (target) => {
                        const player = get.player();
                        return get.attitude(player, target);
                    })
                    .forResult()
                : { bool: true, targets: targets };
        if (result.bool) {
            const targetx = result.targets.sortBySeat();
            player.line(targetx);
            player.addSkill('Europa_shenluodiguo_WatingForKing');
            player.markAuto('Europa_shenluodiguo_WatingForKing', targetx);
        }
    };
    //神圣罗马帝国易主
    lib.element.player.Europa_changeShenLuoKindom = function (source) {
        const next = game.createEvent('Europa_changeShenLuoKindom');
        next.player = this;
        next.source = source;
        next.filterStop = function () {
            if (!this.source) {
                delete this.filterStop;
                this.finish();
                this._triggered = null;
                return true;
            }
        };
        next.setContent('Europa_changeShenLuoKindom');
    };
    lib.element.content.Europa_changeShenLuoKindom = async function (event, trigger, player) {
        const source = event.source;
        const members = [source].concat(source.getStorage('Europa_shenluodiguo_king')).filter((i) => i !== player && i.isIn());
        const kings = [source].concat(source.getStorage('Europa_shenluodiguo_WatingForKing')).filter((i) => i !== player && i.isIn());
        player.addTempSkill('Europa_shenluodiguo_used', 'roundStart');
        player.markAuto('Europa_shenluodiguo_used', source.getStorage('Europa_shenluodiguo_used'));
        player.addSkill('Europa_shenluodiguo_block');
        player.markAuto('Europa_shenluodiguo_block', source.getStorage('Europa_shenluodiguo_block'));
        source.removeSkill('Europa_shenluodiguo_king');
        game.log(player, '成为了新的', '#g凯撒');
        player.addSkill('Europa_shenluodiguo_king');
        if (members.length) player.markAuto('Europa_shenluodiguo_king', members);
        if (kings.length) player.markAuto('Europa_shenluodiguo_WatingForKing', kings);
    };
    //大日耳曼帝国
    lib.element.player.Europa_openGroReich = function () {
        const next = game.createEvent('Europa_openGroReich');
        next.player = this;
        next.setContent('Europa_openGroReich');
    };
    lib.element.content.Europa_openGroReich = async function (event, trigger, player) {
        ['ouzhouzhizhu', 'paixi', 'guojiajuqi', 'quanmiannuli', 'chaojixiangmu'].forEach((skill) => player.addSkill('Europa_' + skill));
        player.$fullscreenpop('大日耳曼帝国', 'fire');
        game.log(player, '启用了', '#y大日耳曼帝国', '机制');
    };
    //德意志的面包篮
    lib.element.player.Europa_openBreadLand = function () {
        const next = game.createEvent('Europa_openBreadLand');
        next.player = this;
        next.setContent('Europa_openBreadLand');
    };
    lib.element.content.Europa_openBreadLand = async function (event, trigger, player) {
        ['deguoliangshixuqiu', 'dongfangjieduan', 'wukelanweiyuan', 'wukelanfankang', 'diqufazhan', 'youjiduihuodong', 'zhilifangzhen'].forEach((skill) => player.addSkill('Europa_' + skill));
        player.$fullscreenpop('德意志的面包篮', 'wood');
        game.log(player, '启用了', '#g德意志的面包篮', '机制');
    };
    lib.arenaReady.push(() => {
        if (lib.config.extension_欧陆风云_Europa_The_king_of_animals != '关闭') {
            game.addGlobalSkill('Europa_The_king_of_animals');
        }
        game.addGlobalSkill('Europa_gem');
        game.addGlobalSkill('Europa_gold');
        game.addGlobalSkill('g_Europa_gem');
        game.addGlobalSkill('g_Europa_gold');
        game.addGlobalSkill('Europa_silk');
        game.addGlobalSkill('colonialExploration');
        game.addNature('Europazhen', '鸩', {
            linked: true,
            order: 26,
            lineColor: '#9659b4',
            color: '#9659b4',
            background: '',
        });
        lib.nature.set('Europazhen', 26);
        lib.linked.add('Europazhen');
        lib.card.sha.nature.add('Europazhen');
        lib.translate._dustsha_skill = '鸩杀';
        lib.translate._dustsha_skill_info = '当你对目标角色造成鸩毒伤害时，你可以防止此伤害并令其从牌堆或弃牌堆中获得一张【毒】。';
    });
}

'use strict';
qyhcCL.guanduWuJiang = {
    clgd_caoren: ['male', 'wei', 4, ['clgd_weikui', 'lizhan'], ['character:sb_caoren', 'die:die/sb_caoren']],
    clgd_caohong: ['male', 'wei', 4, ['clgd_yuanhu', 'cljg_zhenwei'], ['character:tw_re_caohong', 'die:ext:群英荟萃乀摧林/jiange/guandu/caohong']],
    clgd_xuyou: ['male', 'qun', 3, ['clgd_shicai', 'clgd_chenggong'], ['character:sp_xuyou', 'die:die/sp_xuyou']],
    clgd_xiahouyuan: ['male', 'wei', 4, ['clgd_hubu'], ['ext:群英荟萃乀摧林/jiange/image/cljg_juechenmiaocai.jpg', 'die:ext:群英荟萃乀摧林/jiange/die/cljg_juechenmiaocai']],
    clgd_zhuling: ['male', 'wei', 4, ['cljg_leili', 'cljg_fengxing'], ['character:ol_zhuling', 'die:die/dc_zhuling']],
    clgd_zhangliao: ['male', 'wei', 4, ['cljg_jiaoxie', 'olduorui'], ['character:sp_zhangliao', 'die:die/sp_zhangliao']],
    clgd_guojia: ['male', 'wei', 3, ['xianfu', 'new_reyiji'], ['ext:群英荟萃乀摧林/jiange/guandu/clgd_guojia.jpg', 'die:die/re_guojia']],
    clgd_hanhaoshihuan: ["male", "wei", 4, ['reyonglve', "clgd_yonglve"], ['character:re_hanhaoshihuan', 'die:die/re_hanhaoshihuan']],
    clgd_zangba: ["male", "wei", 4, ['clgd_hengjiang', "clgd_hanyu"], ['character:zangba', 'die:die/zangba']],
    clgd_yujin: ["male", "wei", 4, ['decadezhenjun', "sbjieyue"], ['character:yujin_yujin', 'die:die/yujin_yujin']],
    clgd_litong: ["male", "wei", 4, ['clgd_tuifeng'], ['character:litong', 'die:die/litong']],
    clgd_liupi: ["male", "qun", 4, ['clgd_juying'], ['character:liupi', 'die:die/liupi']],
    clgd_yuejin: ["male", "wei", 4, ['clgd_xianchen'], ['ext:群英荟萃乀摧林/jiange/guandu/clgd_yuejin.jpg', 'die:ext:群英荟萃乀摧林/jiange/guandu/clgd_yuejin']],
    //clgd_guotu:["male","qun",3,['rejigong','shifei'],['ext:群英荟萃乀摧林/jiange/guandu/clgd_guotu.jpg','die:die/clgd_guotu']],
    clgd_tadun: ["male", "qun", 4, ['clgd_luanzhan'], ['character:tadun', 'die:die/tadun']],
    qyhc_hanmeng: ["male", "qun", 4, ['clgd_jieliang', 'clgd_quanjiu'], ['character:hanmeng', 'die:die/hanmeng']]
}
qyhcCL.arenaReady.push((lib, game, ui, get, ai, _status, config) => {
    qyhcCL.guandu_eventMap = {
        huoshaowuchao: {
            trigger: { player: 'damageBefore' },
            ruleSkill: true,
            forced: true,
            filter(event, player) {
                return !event.hasNature();
            },
            content() {
                game.setNature(trigger, 'fire');
            }
        },
        liangcaokuifa: {
            trigger: { player: ['useCardAfter', 'phaseDrawBegin'] },
            ruleSkill: true,
            forced: true,
            filter(event, player) {
                if (event.name == 'phaseDraw') return true;
                return player.getHistory('sourceDamage', function (evt) {
                    return evt.card == event.card;
                }).length > 0;
            },
            content() {
                if (trigger.name == 'phaseDraw') trigger.num--;
                else player.draw();
            }
        },
        zhanyanliangzhuwenchou: {
            trigger: { player: 'phaseBegin' },
            ruleSkill: true,
            forced: true,
            content() {
                'step 0'
                player.chooseUseTarget({
                    name: 'juedou',
                }, true, '【斩诛颜文】请选择一名角色,视为对其使用【决斗】')
            }
        },
        shishengshibai: {
            mod: {
                aiOrder(player, card, num) {
                    if (_status.shishengshibai && _status.shishengshibai % 10 == 9) {
                        if (['sha', 'tao', 'guohe', 'shunshou', 'tunliang', 'wuzhong', 'juedou', 'yuanjun'].includes(card.name)) return num + 15;
                    }
                    if (_status.shishengshibai && _status.shishengshibai % 10 == 8) {
                        if (['equip', 'delay'].includes(card.name)) return num + 7;
                    }
                }
            },
            trigger: {
                player: 'useCard1'
            },
            forced: true,
            ruleSkill: true,
            content() {
                if (!_status.shishengshibai) _status.shishengshibai = 0;
                _status.shishengshibai++;
                _status.shishengshibai %= 10;
                game.broadcastAll(function (num) {
                    if (num == 9) num = '<span class=firetext>' + num + '</span>';
                    if (ui.guanduInfo2) ui.guanduInfo2.innerHTML = '当前事件:十胜十败(' + num + ')';
                    if (ui.guanduInfo) ui.guanduInfo.innerHTML = '十胜十败(' + num + ')';
                }, _status.shishengshibai);
                if (_status.shishengshibai % 10 == 0 && trigger.targets && trigger.targets.length > 0 && !['delay', 'equip'].includes(get.type(trigger.card))) {
                    trigger.effectCount++;
                }
            },
            ai: {
                result: {
                    player(card, player, target) {
                        if (_status.shishengshibai && _status.shishengshibai % 10 == 9 && card.name == 'tiesuo') return 'zerotarget';
                    }
                }
            }
        },
        jianshoudaizhan: {
            enable: ['chooseToRespond', 'chooseToUse'],
            filterCard(card, player) {
                return card.name == 'sha';
            },
            ruleSkill: true,
            position: 'hes',
            viewAs: { name: 'shan' },
            viewAsFilter(player) {
                if (!player.countCards('hes', { name: 'sha' })) return false;
            },
            prompt: '将一张【杀】当【闪】使用或打出',
            check(card) {
                var val = get.value(card);
                if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
                return 6 - val;
            },
            precontent() {
                if (player.storage.clgd_jianshoudaizhan != game.roundNumber) {
                    player.storage.clgd_jianshoudaizhan = game.roundNumber;
                    player.qyhc_moveMaxhand('clgd_jianshoudaizhan', -1, [{ player: 'phaseAfter' }, '直到其回合结束']);
                }
            },
            ai: {
                skillTagFilter(player) {
                    if (!player.countCards('hes', { name: 'sha' })) return false;
                },
                respondSha: true
            }
        },
        liangjunxiangchi: {
            mod: {
                maxHandcard(player, num) {
                    return num + (game.roundNumber <= 4 ? game.roundNumber : 0);
                }
            },
            trigger: { player: 'useCard' },
            forced: true,
            filter(event, player) {
                if (event.card.name != 'sha' || game.roundNumber <= 4) return false;
                if (!player.beOn()) return false;
                var index = player.getHistory('useCard', function (evtx) {
                    return evtx.card.name == 'sha';
                }).indexOf(event);
                return index == 0;
            },
            content() {
                game.log(trigger.card, '伤害基数+1');
                if (typeof trigger.baseDamage != 'number') trigger.baseDamage = 1;
                trigger.baseDamage++;
            }
        },
        xutuhuanjin: {
            trigger: {
                player: ['phaseEnd', 'phaseDrawBegin2']
            },
            ruleSkill: true,
            forced: true,
            filter(event, player, name) {
                if (name == 'phaseDrawBegin2') return player.storage.clgd_xutuhuanjin && !event.numFixed;
                return player.getHistory('useCard', (evt) => (evt.card.name == 'sha')).length == 0;
            },
            content() {
                if (event.triggername == 'phaseDrawBegin2') {
                    player.storage.clgd_xutuhuanjin = 0;
                    player.unmarkSkill('clgd_xutuhuanjin_draw');
                    trigger.num++;
                } else {
                    player.qyhc_firstGain(0, 'storage', 'clgd_xutuhuanjin');
                    player.storage.clgd_xutuhuanjin++;
                    player.markSkill('clgd_xutuhuanjin_draw');
                }
            },
            subSkill: {
                draw: {
                    intro: {
                        markcount(s, player) {
                            return player.storage.clgd_xutuhuanjin;
                        },
                        content(s, player) {
                            return '<center>下个摸牌阶段摸牌基数+' + player.storage.clgd_xutuhuanjin + '</center>';
                        }
                    }
                }
            }
        },
        shichongerjiao: {
            trigger: { player: 'phaseEnd' },
            ruleSkill: true,
            forced: true,
            filter(event, player) {
                return player.isMaxHandcard() || (player.isMaxHp(true) && player.countDiscardableCards(player, 'he'));
            },
            content() {
                'step 0'
                if (player.isMaxHp(true)) player.chooseToDiscard(1, '〖恃宠而骄〗请弃置一张牌', true, 'he');
                'step 1'
                if (player.isMaxHandcard()) player.loseHp();
            }
        },
        yiruoshengqiang: {
            trigger: { source: 'damageBegin1' },
            ruleSkill: true,
            forced: true,
            filter(event, player) {
                return event.player && event.player.isIn() && event.player.hp > player.hp;
            },
            content() {
                trigger.num++;
            }
        }
    };
    qyhcCL.guandu_eventTrans = {
        huoshaowuchao: '火烧乌巢',
        liangcaokuifa: '粮草匮乏',
        zhanyanliangzhuwenchou: '斩诛颜文',
        shishengshibai: '十胜十败',
        jianshoudaizhan: '坚守待战',
        xutuhuanjin: '徐图缓进',
        liangjunxiangchi: '两军相持',
        shichongerjiao: '恃宠而骄',
        yiruoshengqiang: '以弱胜强'
    };
    qyhcCL.guandu_event = function (evt) {
        if (evt == 'NONE') return;
        game.addGlobalSkill('clgd_' + evt);
        _status.guandu_event = evt;
        game.broadcastAll(function (evt) {
            var info = get.translation('clgd_' + evt);
            if (get.is.phoneLayout()) {
                ui.guanduInfo2 = ui.create.div('.touchinfo.left', ui.window);
                ui.guanduInfo2.innerHTML = '本局事件:' + info;
            }
            ui.guanduInfo = ui.create.system(info, () => {
                qyhcCL.$guandu_event(_status.guandu_event);
            }, true);
            lib.setPopped(ui.guanduInfo, function () {
                var uiintro = ui.create.dialog('hidden');
                uiintro.listen(function (e) {
                    e.stopPropagation();
                });
                uiintro.addText(get.translation('clgd_' + _status.guandu_event + '_info'));
                return uiintro;
            }, 230);
        }, evt);
    }
    qyhcCL.$guandu_event = function (evt, bool) {
        game.playAudio('../extension/群英荟萃乀摧林/jiange/guandu', evt);
        if (!bool) {
            var map = {
                huoshaowuchao: 'chunyuqiong',
                liangcaokuifa: 'sp_xuyou',
                zhanyanliangzhuwenchou: 'dc_jsp_guanyu',
                shishengshibai: 'clgd_guojia',
                jianshoudaizhan: 'tianfeng',
                xutuhuanjin: 're_jushou',
                liangjunxiangchi: 'qyhc_jushou',
                shichongerjiao: 'xuyou',
                yiruoshengqiang: 'sb_caocao'
            }
            var map2 = {
                huoshaowuchao: true,
                liangcaokuifa: true,
                zhanyanliangzhuwenchou: false,
                shishengshibai: false,
                jianshoudaizhan: true,
                xutuhuanjin: true,
                liangjunxiangchi: true,
                shichongerjiao: true,
                yiruoshengqiang: false
            }
            game[map2[evt] + 'Zhu'].node.avatar.setBackground(map[evt], 'character');
            game[map2[evt] + 'Zhu'].$skill(get.translation('clgd_' + evt));
            game[map2[evt] + 'Zhu'].node.avatar.setBackground(game[map2[evt] + 'Zhu'].name, 'character');
        }
    }
    qyhcCL.guandutemp = lib.mode.versus.config.update;
    lib.mode.versus.config.update = function (config, map) {
        qyhcCL.guandutemp(config, map);
        map.change_choice[config.versus_mode == 'guandu' ? 'hide' : 'show']();
        for (var i of ['spkj', 'xjsx', 'shili', 'event']) map['guandu_' + i][config.versus_mode == 'guandu' ? 'show' : 'hide']();
    }
    lib.mode.versus.config.guandu_event = {
        name: '游戏事件',
        init: 'NONE',
        intro: '设置游戏事件(未完善)',
        item: {
            RAN: '随机',
            ...qyhcCL.guandu_eventTrans,
            NONE: "无"
        }
    }
    for (var i in qyhcCL.guandu_eventTrans) lib.translate['clgd_' + i] = qyhcCL.guandu_eventTrans[i];
    for (var i in qyhcCL.guandu_eventMap) lib.skill['clgd_' + i] = qyhcCL.guandu_eventMap[i];
    lib.mode.versus.config.guandu_spkj = {
        name: '队内手牌互相可见',
        intro: '可在牌局内右键单击队友武将牌查看其手牌',
        init: false
    }
    lib.mode.versus.config.guandu_xjsx = {
        name: '选将框数',
        intro: '设置备选武将数',
        init: '4',
        item: {
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            all: '全部'
        }
    }
    lib.mode.versus.config.guandu_shili = {
        name: '主视角身份',
        intro: '设置您游玩的身份',
        init: 'ran',
        item: {
            ran: '随机',
            wei: '魏军',
            qun: '袁军',
            wei1zhong: '曹军忠臣',
            qun1zhong: '袁军忠臣',
            zhu: '主公',
            zhong: '忠臣',
            wei1zhu: '曹操',
            qun1zhu: '袁绍'
        }
    }
    qyhcCL.guanduSkills = {
        clgd_hubu: {
            trigger: {
                global: "roundStart"
            },
            derivation: ['zlhuji', 'benxi', 'shensu'],
            audio: "cljg_leili",
            audioname2: { clgd_xiahouyuan: 'cljg_leili' },
            forced: true,
            filter(event, player) {
                return player.getFriends(true).length;
            },
            logTarget: (event, player) => (player.getFriends(true)),
            content() {
                "step 0"
                var playerlist = qyhcCL.getLogTargets(event);
                event.list = playerlist;
                "step 1"
                event.list.sortBySeat(_status.currentPhase);
                var current = event.list.shift();
                var skill = ['shensu', 'zlhuji', 'benxi'][game.roundNumber % 3]
                if (!current.hasSkill(skill)) {
                    var skill2 = skill;
                    if (skill == 'shensu') skill2 += ['1', '2'].randomGet();
                    lib.qyhc_firstGain({}, 'skill', skill2, 'audioname2');
                    lib.skill[skill2].audioname2[current.name1] = 'cljg_fengxing';
                    current.addTempSkill(skill, 'roundFinish');
                }
                "step 2"
                if (event.list && (event.list.length > 0)) event.goto(1);
            }
        },
        clgd_weikui: {
            audio: 'sbjiewei',
            creatTrigger: true,
            enable: 'phaseUse',
            usable: 1,
            filterTarget: true,
            prompt: '对一名角色造成1点伤害,其观看另一名其他角色手牌并获得其中一张',
            content() {
                'step 0'
                target.damage();
                'step 1'
                if (target.isIn()) target.chooseTarget(get.translation(player) + '对你发动了〖解围〗<br><span class=text>请选择另一名其他角色,你观看其手牌并获得其中一张</span>', true, function (event, player, target) {
                    return player != target && _status.event.getParent('clgd_weikui').player != target && target.countCards('h');
                }).set('ai', function (target) {
                    var player = _status.event.player;
                    if (get.attitude(player, target) > 0) return -114514;
                    if (target.hasCard('tao', 'hes')) return 13;
                    if (target.hasCard('jiu', 'hes')) return 3;
                    return target.getCards('h').map(i => get.value(i)).sort((a, b) => (b - a))[0] - 6;
                });
                'step 2'
                if (result.targets?.length) {
                    target.line(result.targets);
                    target.gainPlayerCard(result.targets[0], 'visible', true, 'h').set('ai', function (button) {
                        if (button.link.name == 'tao') return 14;
                        return get.value(button.link, _status.event.target);
                    });
                }
            },
            ai: {
                order: 8,
                threaten: 2,
                result: {
                    target(player, target) {
                        var value = -3, eff = get.damageEffect(target, player, target);
                        for (var i of game.filterPlayer()) {
                            if (i == player || i == target || get.attitude(target, i) > 0 || !i.hasCard()) continue;
                            if (target.hasCard('tao', 'hes')) value = Math.max(value, 5);
                            else if (target.hasCard('jiu', 'hes')) value = Math.max(value, 1);
                            else value = Math.max(value, target.getCards('h').map(i => get.value(i)).sort((a, b) => (b - a))[0] - eff);
                        }
                        if (target.isHealthy() && target.hp > 1) return value + 1 + target.hp / 3;
                        if (target.hp > 1 || target.hasCard('tao', 'hes') || target.hasCard('jiu', 'hes')) return value - 1.5;
                        if (!player.getFriends().length) return -9;
                        return -1;
                    }
                }
            }
        },
        clgd_yuanhu: {
            trigger: {
                player: 'phaseJieshuBegin'
            },
            forced: true,
            audio: 'huyuan',
            content() {
                'step 0'
                player.chooseTarget('〖援护〗你可以选择一名角色', '<center>其随机使用一张装备牌,若其体力不大于你,其回复1点体力</center>').set('ai', function (target) {
                    var player = _status.event.player;
                    if (get.attitude(player, target) <= 0) return -3;
                    var num = 0.01;
                    if (target.hp <= player.hp) num += get.recoverEffect(target, player, player);
                    num += target.countEnabledSlot() - target.countCards('e');
                    return num;
                });
                'step 1'
                if (result.targets?.length) {
                    var target = result.targets[0];
                    event.target = target;
                } else event.finish();
                'step 2'
                var equip = get.cardPile(function (card) {
                    return get.type(card) == 'equip' && target.hasUseTarget(card);
                });
                if (equip) target.chooseUseTarget(equip, 'nothrow', 'nopopup', true);
                'step 3'
                game.updateRoundNumber();
                if (target.hp <= player.hp) target.recover();
            },
            ai: {
                expose: 0.2
            }
        },
        clgd_shicai: {
            audio: 'spshicai',
            trigger: { player: 'chooseToUseBegin' },
            hiddenCard(player, name) {
                if (lib.card[name] && lib.inpile.includes(name)) return !(lib.card[name].type == 'trick' && lib.card[name].notarget);
            },
            forced: true,
            filter(event, player) {
                if (event.responded) return false;
                for (var i of lib.inpile) {
                    if (lib.card[i] && event.filterCard({ name: i }, player, event)) return !(lib.card[i].type == 'trick' && lib.card[i].notarget);
                }
                return false;
            },
            delay: false,
            content() {
                'step 0'
                var cards = get.cards(1 + player.getStorage('clgd_shicai').length, true);
                for (var i of cards) i.classList.add('glow');
                player.storage.clgd_shicai_cards = cards;
                player.loseToSpecial(cards, 'clgd_shicai').untrigger();
                player.addTempSkill('clgd_shicai_discard', ['phaseBefore', 'phaseAfter']);
                player.tempSkills.clgd_shicai_discard = function (event, player, name) {
                    if (event.player != player) return false;
                    if (event.name == 'useSkill' || event.name == 'logSkill') if ((lib.skill[event.sourceSkill || event.skill] || {}).enable); else return false;
                    else if (name == 'useCardBefore' || name == 'chooseToUseEnd'); else return false;
                    if (player.countCards('s', function (card) {
                        if (card.hasGaintag('clgd_shicai')) return true;
                    })) {
                        if (qyhcCL.skillid.clgd_shicai) {
                            delete qyhcCL.skillid.clgd_shicai;
                            lib.config.compatiblemode = false;
                        }
                        player.tempSkills.clgd_shicai_discard = ['phaseBefore', 'phaseAfter'];
                        event.trigger('clgd_shicaiDiscard');
                    }
                    return false;
                }
                if (!lib.config.compatiblemode) {
                    lib.config.compatiblemode = true;
                    qyhcCL.skillid.clgd_shicai = true;
                }
            },
            ai: {
                effect: {
                    target(card, player, target, effect) {
                        if (get.tag(card, 'respondShan')) return 0.7;
                        if (get.tag(card, 'respondSha')) return 0.7;
                    }
                },
                order: 12,
                respondShan: true,
                respondSha: true,
                result: {
                    player(player) {
                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                        return 1;
                    }
                }
            },
            intro: {
                markcount(storage, player) {
                    if (!storage || !storage.length) return;
                    if (storage.length == 1) return get.translation(storage)[0];
                    if (storage.length == 2) return get.translation(storage[0])[0] + get.translation(storage[1])[0];
                    return 3;
                },
                content: '<center>已以此法使用过$牌</center>'
            },
            mod: {
                cardEnabled(cardx, player) {
                    if (_status.event.name == 'chooseToUse' && !_status.event.skill) return;
                    for (var card of (cardx.cards || [])) if (get.position(card) == 's' && card.hasGaintag('clgd_shicai')) return false;
                },
                cardRespondable(cardx, player) {
                    for (var card of (cardx.cards || [])) if (get.position(card) == 's' && card.hasGaintag('clgd_shicai')) return false;
                },
                cardSavable(cardx, player) {
                    if (_status.event.name == 'chooseToUse' && !_status.event.skill) return;
                    for (var card of (cardx.cards || [])) if (get.position(card) == 's' && card.hasGaintag('clgd_shicai')) return false;
                }
            },
            subSkill: {
                discard: {
                    trigger: { player: ['clgd_shicaiDiscard', 'chooseToUseAfter', 'useCardBegin'] },
                    forced: true,
                    charlotte: true,
                    filter(event, player, name) {
                        if (name == 'chooseToUseAfter') return event.clgd_shicai;
                        if (name == 'useCardBegin') return (event.card.cards || []).some(i => ((player.storage.clgd_shicai_cards || []).includes(i)));
                        return player.countCards('s', function (card) {
                            if (card.hasGaintag('clgd_shicai')) return true;
                        });
                    },
                    content() {
                        'step 0'
                        if (event.triggername == 'useCardBegin') {
                            player.markAuto('clgd_shicai', [get.type2(trigger.card, false)]);
                            trigger.getParent('chooseToUse').clgd_shicai = true;
                            event.finish();
                        } else if (event.triggername != 'chooseToUseAfter') {
                            var cards = player.getCards('s', function (card) {
                                if (card.hasGaintag('clgd_shicai')) return true;
                            });
                            //player.$gainLog('throwtop',cards);
                            player.lose(cards, ui.cardPile, 'insert').untrigger();
                            event.finish();
                        } else {
                            event.maxNum = Math.min(3, player.getStorage('clgd_shicai').length);
                            event.num = 0;
                        }
                        'step 1'
                        var pos = ('jeh')[event.num], hs = player.countCards(pos);
                        if (hs > 0) player.chooseToDiscard(hs, pos, true);
                        event.num++;
                        if (event.num < event.maxNum) event.redo();
                    }
                }
            }
        },
        clgd_chenggong: {
            audio: 'chenggong',
            prompt2: '<center>令其摸一张牌</center>',
            trigger: { global: 'useCardToPlayered' },
            filter(event, player) {
                return event.isFirstTarget && event.targets && event.targets.length > 1 && event.player.isIn();
            },
            check(event, player) {
                return get.drawEffect(event.player, 1, player) > 0;
            },
            logTarget: 'player',
            content() {
                'step 0'
                trigger.player.draw();
                'step 1'
                trigger.player.addSkill('clgd_chenggong_update');
            },
            subSkill: {
                update: {
                    charlotte: true,
                    mod: {
                        cardUsable: () => Infinity,
                        targetInRange: () => true
                    },
                    trigger: { player: 'useCard1' },
                    forced: true,
                    popup: false,
                    silent: true,
                    firstDo: true,
                    content() {
                        player.removeSkill('clgd_chenggong_update')
                        var card = trigger.card;
                        if (!card.storage) card.storage = {};
                        card.storage.oltuishi = true;
                        if (trigger.addCount !== false) {
                            trigger.addCount = false;
                            player.getStat('card')[card.name]--;
                        }
                    },
                    mark: true,
                    intro: { content: '<center>使用的下一张牌无视距离次数限制</center>' }
                }
            }
        },
        clgd_yonglve: {
            audio: 'clgd2',
            trigger: { global: 'useCard' },
            check(trigger, player) {
                var d1 = true;
                if (trigger.player.hasSkill('jueqing') || trigger.player.hasSkill('gangzhi')) d1 = false;
                for (var target of trigger.targets) {
                    if ((trigger.directHit || []).includes(target) || !target.mayHaveShan() || trigger.player.hasSkillTag('directHit_ai', true, {
                        target: target,
                        card: trigger.card
                    }, true)) {
                        if (!target.hasSkill('gangzhi')) d1 = false;
                        if (!target.hasSkillTag('filterDamage', null, {
                            player: trigger.player,
                            card: trigger.card
                        }) && get.attitude(player, target) < 0) return target.hp == 1;
                    }
                }
                if (d1) return get.damageEffect(trigger.player, player, player) > 0;
                return false;
            },
            logTarget: 'player',
            prompt2: (event, player) => ('<center>令其使用的' + get.colorful(event) + '伤害基数+1,此【杀】结算结束后,若之:未造成伤害,你摸一张牌并对其造成1点伤害;否则你失去1点体力</center>'),
            filter(event, player) {
                return event.card.name == 'sha' && event.player.isEnemiesOf(player);
            },
            content() {
                'step 0'
                if (typeof trigger.baseDamage != 'number') trigger.baseDamage = 1;
                trigger.baseDamage++;
                player.addSkill('clgd_yonglve_damage');
                player.markAuto('clgd_yonglve_damage', [trigger.card]);
                if (!player.storage.clgd_yonglve_map) player.storage.clgd_yonglve_map = {};
                player.storage.clgd_yonglve_map[trigger.card.cardid] = trigger.targets.slice();
            },
            subSkill: {
                damage: {
                    trigger: {
                        global: ['useCardAfter']
                    },
                    forced: true,
                    charlotte: true,
                    audio: 'clgd_yonglve',
                    filter(event, player, name) {
                        if (!event.card) return false;
                        var cards = player.getStorage('clgd_yonglve_damage');
                        if (!cards.includes(event.card)) return false;
                        return true;
                    },
                    content() {
                        'step 0'
                        var card = trigger.card;
                        var cards = player.getStorage('clgd_yonglve_damage');
                        cards = cards.remove(card);
                        if (!cards.length) {
                            player.removeSkill('clgd_yonglve_damage');
                            delete player.storage.clgd_yonglve_map;
                        }
                        else delete player.storage.clgd_yonglve_map[card.cardid];
                        'step 1'
                        if (trigger.player.getHistory('sourceDamage', function (evt) {
                            return evt.card == trigger.card;
                        }).length > 0) player.loseHp();
                        else {
                            player.draw();
                            player.line(trigger.player);
                            trigger.player.damage();
                        }
                    }
                }
            }
        },
        clgd_hengjiang: {
            trigger: {
                player: 'damageEnd',
                source: 'damageSource'
            },
            filter(event, player, name) {
                if (name == 'damageSource') return event.player && player != event.player && event.player.isIn();
                return event.source && player != event.source && event.source.isIn();
            },
            audio: 'clgd2',
            prompt2: '<center>令其选择一项:1.你摸一张牌;2.其手牌上限-1直到其弃牌阶段结束</center>',
            logTarget(event, player) {
                if (event.player == player) return event.source;
                return event.player;
            },
            content() {
                'step 0'
                var target = qyhcCL.getLogTargets(event)[0];
                event.target = target;
                if (target && target.isIn()) {
                    target.chooseControl('其摸一张牌', '你手牌上限-1').set('prompt', get.translation(player) + '对你发动了〖横江〗,请选择一项:').set('choiceList', [get.translation(player) + "摸一张牌", '你手牌上限-1直到弃牌阶段结束']).set('choice', function () {
                        if (get.drawEffect(player, 1, target) >= 0) return 0;
                        var limit = target.getHandcardLimit();
                        if (limit == 0 || limit >= target.countCards('h')) return 1;
                        return [0, 1, 1, 1].randomGet();
                    }());
                } else event.finish();
                'step 1'
                if (result.index) {
                    target.qyhc_moveMaxhand('clgd_hengjiang', -1, [{ player: 'phaseDiscardAfter' }, '直到其弃牌阶段结束']);
                } else player.draw();
            },
            ai: {
                threaten: 0.6
            }
        },
        clgd_hanyu: {
            audio: 'clgd2',
            trigger: {
                global: 'loseCardAfter'
            },
            forced: true,
            filter(event, player) {
                if (!event.loser || event.loser.beOn('phaseUse')) return false;
                var num = event.getl(event.loser).cards2.length;
                return num > 1;
            },
            content() {
                'step 0'
                player.chooseTarget('〖捍御〗你可以令你' + (player != trigger.loser ? '或' + get.translation(trigger.loser) : '') + '摸一张牌', function (card, player, target) {
                    return target == player || target == _status.event.getParent('clgd_hanyu').getTrigger().loser;
                }).set('ai', function (target) {
                    return get.drawEffect(target, 1, player);
                });
                'step 1'
                if (result.targets?.length) {
                    result.targets[0].draw();
                }
            }
        },
        clgd_tuifeng: {
            audio: 'clgd2',
            trigger: { global: 'damageEnd' },
            logTarget: 'player',
            forced: true,
            filter(event, player) {
                return event.player.isFriendsOf(player);
            },
            content() {
                var card = get.cardPile(function (card) {
                    return card.name == 'sha';
                });
                if (card) {
                    var target = trigger.player;
                    target.addSkill('clgd_tuifeng_use');
                    target.gain(card, 'draw').gaintag = ['clgd_tuifeng'];
                }
            },
            subSkill: {
                use: {
                    mod: {
                        targetInRange(card, player, target) {
                            if (!card.cards) return;
                            for (var i of card.cards) {
                                if (i.hasGaintag('clgd_tuifeng')) return true;
                            }
                        },
                        cardUsable(card, player, target) {
                            if (!card.cards) return;
                            for (var i of card.cards) {
                                if (i.hasGaintag('clgd_tuifeng')) return Infinity;
                            }
                        }
                    },
                    trigger: {
                        player: 'useCard1'
                    },
                    audio: 'clgd_tuifeng',
                    firstDo: true,
                    charlotte: true,
                    forced: true,
                    filter(event, player) {
                        return event.addCount !== false && player.getHistory('lose', function (evt) {
                            if (evt.parent != event) return false;
                            for (var i in evt.gaintag_map) {
                                if (evt.gaintag_map[i].includes('clgd_tuifeng')) return true;
                            }
                            return false;
                        }).length > 0;
                    },
                    content() {
                        trigger.NotAddCount();
                    }
                }
            }
        },
        clgd_juying: {
            audio: 'dcjuying',
            //everyOnce:1,
            usable: 1,
            enable: 'phaseUse',
            filter(event, player) {
                return game.hasPlayer((current) => (lib.skill.clgd_juying.filterTarget(event, player, current)));
            },
            filterTarget(event, player, target) {
                return target.isDamaged();//&&player.getEveryOnce('clgd_juying',target)
            },
            content() {
                'step 0'
                player.addCountNum('clgd_juying', target);
                target.recover();
                'step 1'
                target.qyhc_moveMaxhand('clgd_juying', 2);
                'step 2'
                target.draw(3);
            },
            ai: {
                order: 10,
                result: {
                    target(player, target) {
                        return (((a) => (a > 0 ? a : 0.1))(get.threaten(target, player, true)));
                    }
                }
            }
        },
        clgd_xianchen: {
            audio: 'clgd2',
            trigger: { global: 'damageSource' },
            logTarget: 'source',
            forced: true,
            creatTrigger: true,
            usable: 1,
            filter(event, player) {
                return event.source && event.source.isIn() && event.source.isFriendsOf(player);
            },
            content() {
                'step 0'
                trigger.source.draw();
                trigger.source.addTempSkill('clgd_xianchen_use');
                'step 1'
                trigger.source.storage.clgd_xianchen_use++;
                trigger.source.update();
            },
            subSkill: {
                use: {
                    mod: {
                        cardUsable(card, player, num) {
                            if (card.name == 'sha') return num + player.storage.clgd_xianchen_use;
                        }
                    },
                    init(player, skill) {
                        if (!player.storage[skill]) player.storage[skill] = 0;
                        player.markSkill(skill);
                    },
                    intro: {
                        content: '<center>本回合使用【杀】的次数限制+#</center>'
                    },
                    charlotte: true,
                    forced: true
                }
            }
        },
        clgd_luanzhan: {
            inherit: 'reluanzhan',
            group: ['clgd_luanzhan_add', 'clgd_luanzhan_remove'],
            subSkill: {
                add: {
                    trigger: { player: 'useCard2' },
                    forced: true,
                    filter(event, player) {
                        if (get.type(event.card) != 'basic' && get.type(event.card) != 'trick' || !player.countMark('reluanzhan')) return false;
                        var info = get.info(event.card);
                        if (info.allowMultiple == false) return false;
                        if (event.targets && !info.multitarget) {
                            if (game.hasPlayer(function (current) {
                                return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
                            })) return true;
                        }
                        return false;
                    },
                    content() {
                        'step 0'
                        var num = player.countMark('reluanzhan');
                        var prompt2 = '<center>为' + get.translation(trigger.card) + '增加至多' + get.cnNumber(num) + '个目标</center>'
                        player.chooseTarget(get.prompt('reluanzhan'), function (card, player, target) {
                            if (_status.event.targets.includes(target)) return false;
                            var player = _status.event.player;
                            return lib.filter.targetEnabled2(_status.event.card, player, target);
                        }, [1, num]).set('prompt2', prompt2).set('ai', function (target) {
                            var trigger = _status.event.getTrigger();
                            var player = _status.event.player;
                            return get.effect(target, trigger.card, player, player);
                        }).set('card', trigger.card).set('targets', trigger.targets);
                        'step 1'
                        if (result.bool) {
                            if (!event.isMine() && !event.isOnline()) game.delayx();
                            event.targets = result.targets;
                        } else event.finish();
                        'step 2'
                        if (event.targets) {
                            trigger.targets.addArray(event.targets);
                        }
                    },
                },
                remove: {
                    inherit: 'reluanzhan_remove',
                    filter(event, player) {
                        if (!event.isFirstTarget || (get.type(event.card) != 'trick' && get.type(event.card) != 'basic') || !player.countMark('reluanzhan')) return false;
                        var info = get.info(event.card);
                        if (info.allowMultiple == false || info.multitarget) return false;
                        return event.targets.length < player.countMark('reluanzhan');
                    },
                    content() {
                        player.removeMark('reluanzhan', Math.ceil(player.countMark('reluanzhan') / 2));
                        player.draw();
                    }
                }
            }
        },
        clgd_jieliang: {
            audio: 'jieliang',
            trigger: {
                global: 'phaseDiscardEnd'
            },
            forced: true,
            filter(event, player) {
                if (event.player.isFriendsOf(player)) return false;
                return true;
            },
            content() {
                'step 0'
                var cards = [];
                game.checkGlobalHistory('cardMove', evt => {
                    if (evt.name == 'lose' && evt.position == ui.discardPile || evt.name == 'cardsDiscard') {
                        cards.addArray(evt.cards.filterInD('d'));
                    }
                });
                if (!cards.length) return event.finish();
                player.chooseButton(['〖截粮〗你可以获得其中一张牌' + (trigger.player.countCards('h') ? '<br><span class=text>若如此做,' + get.translation(trigger.player) + '将一张手牌当【杀】对你使用</span>' : ''), cards.filterInD('d')]).set('ai', function (button) {
                    var player = _status.event.player, name = button.link.name;
                    if (_status.currentPhase.countCards('h') == 0) return get.value(button.link, player);
                    if (name == 'shan') return 1;
                    if (name == 'sha' && _status.guandu_event == 'jianshoudaizhan') return 0.1;
                    if (name == 'xujiu') return 0.9;
                    if (name == 'tao') return 1.2;
                    if (player.hasShan() || player.hp - _status.currentPhase.countCards('h') > 1) return get.value(button.link, player);
                    if (player.hp == 1) return -0.2;
                    return Math.random() - 0.9;
                });
                'step 1'
                if (result.links?.length) {
                    player.gain(result.links, 'gain2');
                } else event.finish();
                'step 2'
                if (((player, target) => {
                    var cards = player.getCards('hs');
                    for (var i of cards) {
                        if (lib.filter.cardEnabled(i, player, 'forceEnable')) if (player.canUse({ name: 'sha', cards: [i] }, target, false)) return true;
                    }
                })(trigger.player, player)) trigger.player.chooseToUse(true, function (card, player) {
                    if (card.name != 'sha') return false;
                    return lib.filter.cardEnabled(card, player, 'forceEnable');
                }, (event, player, target) => (target == _status.event.getParent('clgd_jieliang').player && lib.filter.targetEnabledx(event, player, target))).set('addCount', false).set('openskilldialog', get.translation(player) + '对你发动了〖截粮〗,请将一张手牌当【杀】对其使用</span>')
                    .set('norestore', true).set('_backupevent', 'clgd_jieliangx')
                    .set('custom', {
                        add: {},
                        replace: { window() { } }
                    }).set('ai1', function (card) {
                        return 20 - get.value(card) - get.useful(card);
                    }).set('ai2', function (target) {
                        if (target) {
                            return get.effect_use(target) + 0.01;
                        }
                    }).set('selectTarget', [-1, -1]).backup('clgd_jieliangx');
            }
        },
        clgd_jieliangx: {
            viewAs: { name: 'sha' },
            filterCard(card, player) {
                return get.itemtype(card) == 'card';
            },
            position: 'hs',
            selectCard: 1,
            check(card) { return -get.value(card) }
        },
        clgd_quanjiu: {
            audio: 'quanjiu',
            mod: {
                cardname(card, player, name) {
                    if (card.name == 'xujiu') return 'shan';
                }
            },
            trigger: { target: ['useCardToBefore'] },
            forced: true,
            filter(event, player) {
                if (event.card.name == 'xujiu') return true;
                return false;
            },
            content() {
                trigger.cancel();
            },
            ai: {
                effect: {
                    target(card, player, target, current) {
                        if ('xujiu' == card.name) return 'zerotarget';
                    }
                }
            },
            group: ['clgd_quanjiu_audio'],
            subSkill: {
                audio: {
                    delay: false,
                    forced: true,
                    silent: true,
                    forced: true,
                    priority: 2010,
                    trigger: {
                        player: ['useCard1', 'respond']
                    },
                    filter(event, player) {
                        return event.card.name == 'shan' && event.cards && event.cards.length == 1 && event.cards[0].name == 'xujiu';
                    },
                    content() {
                        player.logSkill_qyhccl('clgd_quanjiu');
                    }
                }
            }
        }
    };
    for (var i in qyhcCL.guanduSkills) {
        if (qyhcCL.guanduSkills[i].audio == 'clgd') qyhcCL.guanduSkills[i].audio = 'ext:群英荟萃乀摧林/jiange/guandu:true';
        if (qyhcCL.guanduSkills[i].audio == 'clgd2') qyhcCL.guanduSkills[i].audio = 'ext:群英荟萃乀摧林/jiange/guandu:2';
    }
    lib.qyhc_firstGain({}, 'skill', 'lizhan', 'audioname2');
    lib.skill.lizhan.audioname2.clgd_caoren = 'sbjushou';
    lib.qyhc_firstGain({}, 'skill', 'olduorui', 'audioname2');
    lib.skill.olduorui.audioname2.clgd_zhangliao = 'jsrgtuwei';
    lib.qyhc_firstGain({}, 'skill', 'canmou', 'audioname2');
    lib.skill.canmou.audioname2.xinpi = 'yinju';
    lib.qyhc_firstGain({}, 'skill', 'reyaowu', 'audioname2');
    lib.skill.reyaowu.audioname2.lvkuanglvxiang = 'liehou';
    lib.qyhc_firstGain({}, 'skill', 'shizhan', 'audioname2');
    lib.skill.shizhan.audioname2.lvkuanglvxiang = 'qigong';
    qyhcCL.guanduTrans = {
        CLGD: '摧林官渡',
        clgd_huoshaowuchao_info: '锁定技,本局游戏内造成的普通伤害均视为火焰伤害.',
        clgd_liangcaokuifa_info: '锁定技,所有角色摸牌阶段少摸一张牌;当一名角色使用牌后,若其因此牌造成了伤害,则其摸一张牌.',
        clgd_zhanyanliangzhuwenchou_info: '锁定技,一名角色的回合开始时,其视为使用一张【决斗】.',
        clgd_shishengshibai_info: '锁定技,一名角色使用牌时,若此牌是整局游戏使用的第整十张牌且此牌不为延时锦囊牌或装备牌,则此牌额外结算一次.',
        clgd_shichongerjiao_info: '锁定技,一名角色的结束阶段,若其:体力为全场唯一最高,其弃置一张牌;手牌为全场最多,其失去1点体力.',
        clgd_yiruoshengqiang_info: '锁定技,当一名角色造成伤害时,若伤者体力大于其,此伤害+1.',
        clgd_jianshoudaizhan_info: '所有角色可以将【杀】当【闪】使用或打出,若如此做,每名角色每轮限一次,其手牌上限-1直到其回合结束.',
        clgd_xutuhuanjin_info: '一名角色的回合结束时,若其本回合未使用过【杀】,其下个摸牌阶段摸牌基数+1.',
        clgd_liangjunxiangchi_info: '若X不大于4,所有角色手牌上限+X(X为轮数);否则所有角色于其回合内首次使用的【杀】伤害基数+1.',
        clgd_caoren: '曹仁',
        clgd_weikui: '伪溃',
        clgd_weikui_info: '出牌阶段限一次,你可以对一名角色造成1点伤害,其观看另一名其他角色手牌并获得其中一张.',
        clgd_caohong: '曹洪',
        clgd_yuanhu: '援护',
        clgd_yuanhu_info: '结束阶段,你可以令一名角色随机使用一张装备牌,若其体力不大于你,其回复1点体力.',
        clgd_xuyou: '许攸',
        clgd_shicai: '恃才',
        clgd_shicai_info: '当你需要使用基本牌或有目标普通锦囊牌时,你可以将牌堆顶X+1张牌置于仓廪并可以使用其中的牌直到你发动主动技、即将使用牌或结束需要使用牌事件.你的需要使用牌事件结束后,若你于此事件中以此法使用过牌,你依次弃置以下前X个区域中的所有牌:1.判定区;2.装备区;3.手牌区(X为你因此技能使用过的牌中包含的类型数).',
        clgd_chenggong: '逞功',
        clgd_chenggong_info: '当一名角色使用目标不唯一的牌确定目标后,你可以令其摸一张牌且使用的下一张牌无视距离和次数限制.',
        clgd_guojia: '郭嘉',
        clgd_xiahouyuan: '夏侯渊',
        clgd_hubu: '虎步',
        clgd_hubu_info: '锁定技,每轮开始时,若当前轮数除以3的余数为:1,所有己方角色本轮获得〖虎骑〗;2,所有己方角色本轮获得〖奔袭〗;否则所有己方角色本轮获得〖神速〗.',
        clgd_zhangliao: '张辽',
        clgd_hanhaoshihuan: "韩浩史涣",
        clgd_yonglve: "胆谋",
        clgd_yonglve_info: "敌方角色使用【杀】时,你可以令此【杀】伤害基数+1,此【杀】结算结束后,若之:未造成伤害,你摸一张牌并对其造成1点伤害;否则你失去1点体力.",
        clgd_zangba: "臧霸",
        clgd_hengjiang: '横江',
        clgd_hanyu: '捍御',
        clgd_hengjiang_info: "当你对其他角色造成伤害后,或当你受到其他角色造成的伤害后,你可以令其选择一项:1.你摸一张牌;2.其手牌上限-1直到其弃牌阶段结束.",
        clgd_hanyu_info: "当一名角色于其出牌阶段外失去牌后,若不少于2张,你可以令你或其摸一张牌.",
        clgd_yujin: '于禁',
        clgd_litong: '李通',
        clgd_tuifeng: '推锋',
        clgd_tuifeng_info: "己方角色受到伤害后,你可以令其获得一张无视距离和次数限制的【杀】.",
        clgd_liupi: '刘辟',
        clgd_juying: '踞营',
        clgd_juying_info: "出牌阶段限一次,你可以令一名已受伤的角色回复1点体力、手牌上限+2并摸三张牌.",
        clgd_yuejin: '乐进',
        clgd_xianchen: '陷陈',
        clgd_xianchen_info: '每回合限一次,己方角色造成伤害后,其摸一张牌且本回合使用【杀】的次数限制+1.',
        clgd_zhuling: '朱灵',
        clgd_tadun: '蹋顿',
        clgd_luanzhan: '乱战',
        clgd_luanzhan_info: '当你受到或造成伤害后,你获得1枚「乱」.当你使用基本牌或普通锦囊牌选择目标后,你可以无距离限制地为此牌增加至多X个目标(X为你「乱」数).当你使用基本牌或普通锦囊牌确定目标后,若此牌目标数小于X,则你摸一张牌并移去半数「乱」(向上取整).',
        clgd_guotu: '郭图',
        qyhc_hanmeng: '韩猛',
        clgd_jieliang: '截粮',
        clgd_jieliangx: '截粮',
        clgd_jieliang_info: '敌方角色的弃牌阶段结束时,你可以获得一张弃牌堆内本回合置入的牌,其将一张手牌当【杀】对你使用.',
        clgd_quanjiu: '劝酒',
        clgd_quanjiu_info: '锁定技,你的【酗酒】手牌视为【闪】;【酗酒】对你无效.',
    };
    for (var i in qyhcCL.guanduSkills) lib.skill[i] = qyhcCL.guanduSkills[i];
    for (var i in qyhcCL.guanduTrans) lib.translate[i] = qyhcCL.guanduTrans[i];
    if (config.boss_init) {
        lib.characterSort.qyhc_boss.CLGD = Object.keys(qyhcCL.guanduWuJiang);
        lib.characterPack.qyhc_boss = {
            ...lib.characterPack.qyhc_boss,
            ...qyhcCL.guanduWuJiang
        }
        if (lib.config.characters.includes('qyhc_boss')) {
            for (var i in qyhcCL.guanduWuJiang) {
                if (lib.config.forbidai_user && lib.config.forbidai_user.includes(i)) lib.config.forbidai.add(i);
                lib.character[i] = qyhcCL.guanduWuJiang[i].slice(0);
            }
        }
    }
    game.chooseCharacterGuandu = function () {
        var next = game.createEvent('chooseCharacter');
        next.setContent(function () {
            'step 0'
            var config = lib.config.extension_群英荟萃乀摧林_clwt_mizhi_card;
            if (qyhcCL.cardsMap[config]) lib.card.list = get.copy(qyhcCL[qyhcCL.cardsMap[config]]);
            lib.init.onfree();
            _status.isGuandu = true;
            ui.arena.classList.add('choose-character');
            game.falseZhu.init('re_caocao');
            game.trueZhu.init('ol_yuanshao');
            game.trueZhu.hp++;
            game.trueZhu.maxHp++;
            game.falseZhu.hp++;
            game.falseZhu.maxHp++;
            game.trueZhu.update();
            game.falseZhu.update();
            var evt = get.config('guandu_event');
            var shili = get.config('guandu_shili');
            if (evt == 'RAN') evt = Object.keys(qyhcCL.guandu_eventMap).randomGet();
            lib.character.shenpei = ["male", "qun", 3, ["shouye", "liezhi"], []];
            lib.character.xinpi = ['male', 'wei', 3, ['xpchijie', 'canmou']];
            lib.character.sp_zhanghe = ["male", "qun", 4, ["yuanlve", "cljg_jixian"], []];
            lib.character.gaogan = ["male", "qun", 4, ["juguan", "feiying"], []];
            lib.character.lvkuanglvxiang = ["male", "qun", 6, ["reyaowu", "shizhan"], []];
            lib.translate.cljg_leili = '战意';
            lib.translate.cljg_fengxing = '急陷';
            lib.translate.qyhc_yongdi = '进蓄';
            lib.translate.qyhc_yongdi_info = '限定技,准备阶段,你可以令一名己方角色增加1点体力上限、回复1点体力,你与其各摸两张牌.';
            /*lib.translate.sbluoshen_info='准备阶段,你可以令所有敌方角色依次:展示一张手牌,若之为黑色,你获得之且此牌不计入本回合手牌上限;否则其弃置之.';
            lib.skill.sbluoshen={
                audio:2,
                trigger:{player:'phaseZhunbeiBegin'},
                frequent:true,
                logTarget:function(event,player){
                    return player.getEnemies();
                },
                filter:function(event,player){
                    return player.getEnemies((current)=>(current.countCards('h'))).length;
                },
                content:function(){
                    'step 0'
                    player.addTempSkill('sbluoshen_add');
                    event.targets=qyhcCL.getLogTargets(event);
                    'step 1'
                    event.targets.sortBySeat(_status.currentPhase);
                    var target=event.targets.shift();
                    event.target=target;
                    player.line(target);
                    if(!target.countCards('h')) event._result={bool:false};
                    else target.chooseCard('展示一张手牌',true).set('ai',card=>{
                        var val=_status.event.goon?15:5;
                        if(get.color(card)=='black') return val-get.value(card);
                        return 7-get.value(card);
                    }).set('goon',get.attitude(target,player)>0);
                    'step 2'
                    if(result.bool){
                        var card=result.cards[0];
                        target.showCards(card,get.translation(target)+'【洛神】展示');
                        if(get.color(card)=='black') player.gain(card).gaintag.add('sbluoshen');
                        else if(get.color(card)=='red') target.discard(card);
                    }
                    'step 3'
                    if(targets.length) event.goto(1);
                },
                subSkill:{
                    add:{
                        mod:{
                            ignoredHandcard:function(card,player){
                                if(card.hasGaintag('sbluoshen')){
                                    return true;
                                }
                            },
                            cardDiscardable:function(card,player,name){
                                if(name=='phaseDiscard'&&card.hasGaintag('sbluoshen')){
                                    return false;
                                }
                            }
                        },
                        onremove:function(player){
                            player.removeGaintag('sbluoshen');
                        }
                    }
                }
            }*/
            if (shili != 'ran') {
                var obj = {
                    wei: (player) => (player.side == false),
                    qun: (player) => (player.side == true),
                    wei1zhong: (player) => (player.side == false && player.identity == 'zhong'),
                    qun1zhong: (player) => (player.side == true && player.identity == 'zhong'),
                    zhu: (player) => (player.identity == 'zhu'),
                    zhong: (player) => (player.identity == 'zhong'),
                    wei1zhu: (player == game.falseZhu),
                    qun1zhu: (player == game.trueZhu)
                }
                var player = game.filterPlayer(obj[shili]).randomGet();
                if (player) game.swapPlayer(player);
            }
            qyhcCL.guandu_event(evt);
            'step 1'
            event.falseList = ['ol_xunyu', 'clan_xunyou', 'clgd_guojia', 'clgd_zhangliao', 'sb_xuhuang', 'clgd_yujin', 'clgd_caohong', 'jsrg_guanyu', 'liuye', 'clgd_litong', 'clgd_zangba', 're_manchong', 'clgd_hanhaoshihuan', 'chengyu', 'clgd_caoren', 'zhangxiu', 'qyhc_jiaxu', 'clgd_xiahouyuan', 'clgd_yuejin', 're_caopi', 're_lidian', 'dc_zhaoyǎn', 'clgd_zhuling', 're_zhongyao'].filter(function (name) {
                if (!Array.isArray(lib.character[name])) return false;
                lib.character[name][1] = 'wei';
                return true;
            });
            event.trueList = ['qyhc_xunchen', 'sp_gaolan', 'sp_zhanghe', 'clgd_xuyou', 'qyhc_chenlin', 'jsrg_liubei', 'qyhc_jushou', 'shenpei', 'qyhc_tianfeng', 'yuantanyuanshang', 'lvkuanglvxiang', 'xinpi', 're_guotufengji', 'chunyuqiong', 'qyhc_hanmeng', 'xinping', 'ol_yanwen', 'gaogan', 'ol_qianzhao', 'yanrou', 'clgd_tadun', 'sb_zhenji', 'tw_huchuquan', 'clgd_liupi'].filter(function (name) {
                if (!Array.isArray(lib.character[name])) return false;
                lib.character[name][1] = 'qun';
                return true;
            });
            'step 2'
            if (game.me.identity != 'zhu') {
                setTimeout(() => {
                    qyhcCL.$guandu_event(_status.guandu_event);
                }, 4000);
                event.choose_me = true;
                var xjsx = get.config('guandu_xjsx');
                if (xjsx != 'all') game.me.chooseButton(['请选择你的武将牌', [event[game.me.side + 'List'].randomRemove(+xjsx), 'character']], true);
                else game.me.chooseButton(['请选择你的武将牌', [event[game.me.side + 'List'], 'character']], true);
            }
            'step 3'
            if (event.choose_me) {
                game.me.init(result.links[0]);
                event[game.me.side + 'List'].remove(result.links[0]);
            }
            game.countPlayer(function (current) {
                if (current != game.me && current.identity == 'zhong') current.init(event[current.side + 'List'].randomRemove(2)[0]);
            });
            setTimeout(function () {
                ui.arena.classList.remove('choose-character');
            }, 500);
            if (get.config('guandu_spkj')) game.addGlobalSkill('versus_viewHandcard');
        });
    }
    return [lib, game, ui, get, ai, _status];
});
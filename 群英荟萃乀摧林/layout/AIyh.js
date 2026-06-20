'use strict';
qyhcCL.arenaReady.push((lib, game, ui, get, ai, _status) => {
    lib.skill._chongzhu.ai = {
        basic: {
            order: 14
        },
        result: {
            player(player) {
                return get.drawEffect(player) - 0.5;
            }
        }
    };
    lib.card.tiesuo.ai.result.target = function (player, target, card) {
        var f = target.hasSkillTag('nofire');
        var t = target.hasSkillTag('nothunder');
        var n = target.hasSkillTag('nonature');
        if (target.isLinked()) {
            if (target.hasSkillTag('link')) return 0;
            if (n || (f && t)) return 0;
            if (f || t) return 0.2;
            return 2;
        }
        if (target.hasSkillTag('nolink')) return 0;
        var eff = -0.9;
        if (f || t) eff = -0.2;
        if (n || (f && t)) eff = -0.01;
        if (get.attitude(player, target) >= 0) return eff;
        if (ui.selected.targets.length) return eff;
        if (
            game.hasPlayer(function (current) {
                return get.attitude(player, current) <= -1 && current != target && !current.isLinked() && player.canUse(card, current) && !current.hasSkillTag('nolink') && !current.hasSkill('nonature');
            }) ||
            player.hasCard('huoshaolianying', 'hes')
        )
            return eff;
        return 0;
    };
    lib.skill.hujia.check = function (event, player) {
        if (get.damageEffect(player, event.player, player) > 0) return false;
        if (game.hasPlayer(current => current.hasCard('bagua', 'e') && current.group == 'wei')) return true;
        var evt = event.getParent('useCard');
        if (evt && evt.card) if (evt.baseDamage > 1 || evt.extraDamage) return true;
        if (player.hasSkill('xujiu2')) return true;
        if (get.damageEffect(player, event.player, player) >= -3 || player.hasShan()) return false;
        return true;
    };
    lib.skill.shifei.checkx = function (player) {
        if (get.attitude(player, _status.currentPhase) > 0) return true;
        var nh = _status.currentPhase.countCards('h');
        var players = game.filterPlayer();
        for (var i = 0; i < players.length; i++) {
            if (players[i].countCards('h') > nh) {
                if (!player.countCards('h', 'shan') || get.attitude(player, players[i]) <= 0) return true;
            }
        }
        return false;
    };
    lib.skill._qyhc_newAI = {
        ai: {
            effect: {
                player(card, player, target) {
                    if (!card || !player || !target) return;
                    var cheng = 1,
                        add = 0;
                    player.qyhc_firstGain([], 'qyhcAI', 'tempSkills');
                    if (!player.qyhcAI.tempSkills[game.phaseNumber]) player.qyhcAI.tempSkills[game.phaseNumber] = player.getSkillObj(true);
                    var obj = player.qyhcAI.tempSkills[game.phaseNumber];
                    var name = card.name;
                    //var color=get.color(card);
                    var att = get.attitude(player, target);
                    var type = get.type(card);
                    if (name == 'juedou' && player.hp > 2 && player.hasSkillTag('maixue')) (cheng *= 1.1), (add += 0.2);
                    if (name == 'tao') if (obj.zhungangshuo || obj.zhanjue || obj.rezhanjue || obj.qice || obj.reqice || player.hasCard('jiwangkailai', 'hes')) (cheng *= 1.1), (add += 0.2);
                    if (att < 0 && name == 'tao') return 'zeroplayer';
                    var Eskills = player.qyhcAI.qyhc_Eskills;
                    var Fskills = player.qyhcAI.qyhc_Fskills;
                    if (Eskills) {
                        if (Eskills.clyl_fudu) {
                            if (name == 'tao') (cheng = 0.2), (add -= 2.5);
                        }
                        if (Eskills.clyl_mozu) {
                            if (type == 'delay') add -= 2.3;
                        }
                        if (Eskills.cljg_jingmiao && (name == 'wuxie' || name == 'jinchan' || name == 'kanpo')) add += get.losehpEffect(player);
                    }
                    return [cheng, add];
                },
                target(card, player, target) {
                    var cheng = 1,
                        add = 0;
                    target.qyhc_firstGain([], 'qyhcAI', 'tempSkills');
                    if (!target.qyhcAI.tempSkills[game.phaseNumber]) target.qyhcAI.tempSkills[game.phaseNumber] = target.getSkillObj(true);
                    var obj = target.qyhcAI.tempSkills[game.phaseNumber];
                    var name = card.name;
                    var nature = get.nature(card);
                    var type = get.type(card);
                    var color = get.color(card);
                    var att = get.attitude(player, target);
                    var Eskills = target.qyhcAI.qyhc_Eskills;
                    var Fskills = target.qyhcAI.qyhc_Fskills;
                    var cardisdamage = get.tag(card, 'damage');
                    if (Eskills) {
                        if (Eskills.clyl_bufo) {
                            if (name == 'tengjia') (cheng = 0), add--;
                            if (name == 'bagua') cheng *= 0.1;
                        }
                        if (Eskills.clyl_shiyu || Eskills.cljg_yanliao) if (name == 'tengjia') (cheng = 0), add--;
                        if (Eskills.clyl_dayuan) {
                            if (name == 'sha' && obj.bagua_skill) cheng *= 2;
                            if ((name == 'sha' || (type == 'trick' && color == 'black') || (type == 'delay' && color == 'black')) && obj.linglongshimandai_skill) cheng *= 4 / 3;
                            if (type == 'delay' && !get.tag(card, 'nodelay')) cheng *= 2;
                        }
                    }
                    if (Fskills) {
                        if (
                            Fskills.qyhc_shangshen &&
                            !game.getGlobalHistory('custom', function (evt) {
                                return evt.qyhc_shangshen == true;
                            }).length
                        )
                            if ((nature || get.tag(card, 'thunderDamage')) && target.hp > 1.5 + Math.random() && !target.getEquip('baiyin')) add += get.drawEffect(target, 4 - target.countCards('h')) / 2;
                        if (Fskills.clyl_dayuan) {
                            if (name == 'sha' && obj.bagua_skill) cheng = 0.5;
                            if (obj.linglongshimandai_skill && !qyhcCL.oncheck) if (name == 'sha' || (type == 'trick' && color == 'black') || (type == 'delay' && color == 'black')) cheng = 0;
                            if (type == 'delay' && !get.tag(card, 'nodelay')) (cheng = 0), (add = 0.1);
                            if (name === 'bagua') cheng *= 3;
                        } else if (obj.clanfenchai && player.storage.clanfenchai) {
                            if (player.storage.clanfenchai.filter(i => i.isIn()).length > 0) {
                                if (name == 'sha' && obj.bagua_skill) cheng = 0;
                                if (obj.linglongshimandai_skill) if (name == 'sha' || (type == 'trick' && color == 'black') || (type == 'delay' && color == 'black')) cheng = 0;
                                if (name == 'lebu') cheng = 0;
                                if (name == 'fulei') add = 2;
                                if (name == 'gubuzifeng') add = 4 / 3;
                                if (name == 'shandian') add = 1;
                                if (name == 'bingliang') cheng *= 4 / 3;
                            } else {
                                if (name == 'sha' && obj.bagua_skill) cheng *= 2;
                                if (obj.linglongshimandai_skill) if (name == 'sha' || (type == 'trick' && color == 'black') || (type == 'delay' && color == 'black')) cheng *= 4 / 3;
                                if (name == 'lebu') cheng *= 4 / 3;
                                if (name == 'fulei') add = -20;
                                if (name == 'gubuzifeng') add = 4 / 3;
                                if (name == 'shandian') add = -20;
                                if (name == 'bingliang') cheng *= 4 / 3;
                            }
                        }
                        if (Fskills.cljg_yibei && type == 'delay' && player.seatNum > target.seatNum && !_status.event.getParent('useCard', true) && !_status.event.getParent('_wuxie', true)) (cheng = 0), (add = 0.1);
                        if (Fskills.cljg_shameng) {
                            if (cardisdamage && player.isFriendsOf(target)) return 'zerotarget';
                        }
                        if (
                            Fskills.cljg_qizhen &&
                            get.tag(card, 'respondShan') &&
                            !player.hasSkillTag(
                                'directHit_ai',
                                true,
                                {
                                    target: target,
                                    card: card
                                },
                                true
                            )
                        )
                            cheng *= 0.5;
                        if (Fskills.cljg_xuankai && name == 'sha' && (target.hp == 1 || !target.hasCard())) return 'zerotarget';
                        if (Fskills.cljg_beijiang && cardisdamage && target.hp > 1 && target.countCards('he') == 0) return player.needsToDiscard() ? 0.01 : 'zerotarget';
                    }
                    if ((name == 'shandian' || name == 'fulei') && player.hasCard('zengbin', 'hs')) add += 2;
                    if (type == 'delay' && target.isTurnedOver()) cheng *= 0.4;
                    if (nature && obj.baiyin_skill) {
                        if (att < 0) cheng *= 0.9;
                        else if (target.isLinked()) cheng = 0;
                    }
                    if (nature && obj.clyl_dengjie_luanmei) {
                        if (att < 0) cheng *= 0.9;
                        else (cheng = 0), add--;
                    }
                    if (target.hp > 1 && att > 0 && obj.yuce && cardisdamage && get.attitude(target, player) > 0) cheng = 0;
                    return [cheng, add];
                }
            }
        },
        mod: {
            aiValue(player, card, num) {
                var N = num * 1;
                var name = card.name;
                var nature = get.nature(card);
                var type = get.type(card);
                if (name == 'tao' && (_status.qyhc_ddz_mode || _status.qyhcjiange_firstAct || _status.isGuandu) && player.identity == 'fan') num += 2 + 1.5 * Math.random();
                var suit = card.suit;
                var equiptype = get.equiptype(card, player);
                if (lib.config.extension_群英荟萃乀摧林_clwt_mizhi_card === 'guanwei') {
                    if (suit == 'heart' || suit == 'diamond') num += 0.04;
                    if (suit == 'heart') num += 0.02;
                    if (suit == 'club') num += 0.01;
                } else if (lib.config.extension_群英荟萃乀摧林_clwt_mizhi_card === 'zhengdu') {
                    if (nature == 'thunder') num -= 0.03;
                    if (suit == 'club') num += 0.04;
                    if (suit == 'heart') num += 0.02;
                    if (suit == 'diamond') num += 0.01;
                } else {
                    if (suit == 'heart' || suit == 'diamond') num += 0.04;
                    if (suit == 'heart') num += 0.02;
                    if (suit == 'spade') num += 0.01;
                }
                num += (card.number - 3) / 1000;
                if (nature)
                    switch (nature) {
                        case 'fire':
                            num += 0.07;
                        case 'thunder':
                            num += 0.03;
                        default:
                            num += 0.09;
                    }
                if (name == 'shan') if (player.hp > 4 || (player.hp == 4 && player.hasCard({ subtype: 'equip2' }, 'e'))) num -= Math.random() * 2;
                if (card.hasGaintag && card.hasGaintag('qyhc_yuxu')) num /= 8;
                if (card.hasGaintag && card.hasGaintag('yidu')) num /= 8;
                if (lib.config.mode == 'doudizhu' && player.identity == 'zhu') {
                    if (name == 'shan') num -= Math.min(2 + Math.random() - game.roundNumber, 0);
                    if (name == 'sha') num++;
                }
                var Eskills = player.qyhcAI.qyhc_Eskills;
                var Fskills = player.qyhcAI.qyhc_Fskills;
                if (Eskills) {
                    if (Eskills.clyl_dayuan) {
                        if (type == 'delay' && !get.tag(card, 'nodelay')) num -= N;
                    }
                    if (Eskills.clyl_bufo) {
                        if (name == 'tengjia') num -= 4;
                        if (name == 'bagua') num -= 3;
                        if (equiptype == 4) num += 4;
                        if (equiptype == 3) {
                            var next = player.next;
                            var previous = player.previous;
                            if (next.hasSkill('clyl_diting') || previous.hasSkill('clyl_diting')) num -= 1;
                            else num += 2;
                        }
                        if (equiptype == 2) num -= 1.3;
                        if (equiptype == 1) {
                            var info = get.info(card);
                            if (info && info.distance && info.distance.attackFrom) var range = -info.distance.attackFrom;
                            if (range > 1) num += 3;
                            num -= 1;
                        }
                    }
                    if (Eskills.clyl_fudu) {
                        if (name == 'tao') num = num - N + 1;
                    }
                    if (Eskills.clyl_tianjia) {
                        if (['ruyijingubang_cl', 'fengchizijinguan', 'suozihuangjinjia', 'ousibuyunlv1', 'ousibuyunlv2'].includes(name)) num = 0.2;
                    }
                    if (Eskills.cljg_yibei && type == 'delay') num /= 3;
                    if (Eskills.cljg_jingmiao) if (name == 'wuxie' || name == 'jinchan' || name == 'kanpo') num /= 3;
                }
                if (Fskills) {
                    if (Fskills.clyl_bufo) {
                        if (name == 'tengjia') num = 0;
                        if (name == 'bagua') num /= 10;
                    }
                    if (Fskills.clyl_dayuan) {
                        if (name == 'fulei') num += 10;
                        if (name == 'shandian') num += 5;
                        if (name == 'delay' && !get.tag(card, 'nodelay')) num += 2;
                        if (name == 'bagua') num += 6;
                    }
                    if (Fskills.cljg_nailuo && type == 'equip' && _status.currentPhase && _status.currentPhase.hasSkill('cljg_nailuo')) return 0.01;
                }
                return num;
            },
            aiOrder(player, card, num) {
                var name = card.name;
                var nature = get.nature(card);
                var type = get.type(card);
                var info = lib.card[name];
                if (!info) info = {};
                var equiptype = get.equiptype(card, player);
                var N = num * 1;
                if (name == 'sha' && player.hasJudge('mantian')) {
                    var t = player.qyhcAI.qyhc_lastsha;
                    if (t && t.length) {
                        var len = t.length - 1;
                        if (t[len].stage == _status.currentStage) var currenting = true;
                    }
                    if (!currenting && player.countCards('hs', 'sha') < 0.5 + Math.random() && game.countPlayer(current => player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0) < 2 && game.hasPlayer(current => player.canUse('juedou', current) && get.effect(current, { name: 'juedou' }, player, player) > 0)) return -1;
                }
                if (name == 'baiyin' || name == 'changandajian_equip2' || name == 'changandajian_equip1') if (player.hasCard('yiyi', 'hs')) num += 9;
                if (name == 'tao')
                    if (player.hasCard('tongzhougongji', 'hs')) {
                        if (game.hasPlayer(current => player.canUse('tongzhougongji', current) && current != player && current.hp == player.hp)) num += 9;
                    }
                if ((name == 'shandian' || name == 'fulei') && player.hasCard('zengbin', 'hs')) num = num + 8;
                if ((name == 'liannu' || name == 'zhuge') && player.hasUseTarget('sha', true, true)) num = 0;
                if (get.color(card) == 'red') num -= 0.01;
                if (card.suit == 'heart') num -= 0.01;
                if (equiptype == 2) num = Math.max(2, num / 3);
                if (equiptype == 3) num = Math.max(2, num / 3);
                if (nature && player.getUseValue(card) == player.getUseValue({ ...card, nature: false })) num -= 0.01;
                if (card.hasGaintag && card.hasGaintag('qyhc_yuxu')) {
                    if (card.name != 'sha') num += 10;
                    else num++;
                }
                if (card.hasGaintag && card.hasGaintag('yidu')) {
                    if (card.name != 'sha') num += 10;
                    else num++;
                }
                if (get.tag(card, 'draw') && get.info(card).toself) num += 4;
                var Eskills = player.qyhcAI.qyhc_Eskills;
                var Fskills = player.qyhcAI.qyhc_Fskills;
                if (Eskills) {
                    if (Eskills.clyl_wangxiang) {
                        if (type == 'equip' && player.countCards('e') == 0) num = num + 5;
                        if (type == 'equip') num = Math.max(num - 3, 0.1);
                        if (name == 'tao') num = num + 8;
                    }
                    if (Eskills.clyl_bingyi) {
                        if (equiptype == 1) num = 1;
                    }
                    if (Eskills.clyl_yinsha) {
                        if (get.tag(card, 'damage') && !get.tag(card, 'nosource')) num = Math.max(N - 4, 1);
                    }
                    if (Eskills.olfuyuan) {
                        var t = qyhcCL.qyhc_firstGain([], 'qyhc_lastfinish');
                        var len = t.length;
                        if (len && t[len - 1].phaseNumber == game.phaseNumber);
                        else if (info.toself) num *= 2;
                    }
                }
                if (Fskills) {
                    if (Fskills.cljg_tianjiang && player.getHistory('useCard').length == 0 && get.tag(card, 'damage') && !get.tag(card, 'nosource')) num += 10;
                }
                return num;
            },
            aiUseful(player, card, num) {
                var name = card.name;
                var nature = get.nature(card);
                var suit = card.suit;
                if (get.color(card) == 'red') num += 0.04;
                if (suit == 'heart') num += 0.02;
                if (suit == 'spade') num += 0.01;
                num += (card.number - 3) / 1000;
                if (nature)
                    switch (nature) {
                        case 'fire':
                            num += 0.07;
                        case 'thunder':
                            num += 0.03;
                        default:
                            num += 0.09;
                    }
                if (name == 'tao' && (_status.qyhc_ddz_mode || _status.qyhcjiange_firstAct || _status.isGuandu) && player.identity == 'fan') num += 2 + 1.5 * Math.random();
                if (name == 'shan') if (player.hp > 4 || (player.hp == 4 && player.hasCard({ subtype: 'equip2' }, 'e'))) num -= Math.random() * 2;
                var Eskills = player.qyhcAI.qyhc_Eskills;
                var Fskills = player.qyhcAI.qyhc_Fskills;
                var name = card.name;
                if (card.hasGaintag && card.hasGaintag('qyhc_yuxu')) return 0.1;
                if (card.hasGaintag && card.hasGaintag('yidu')) return 0.1;
                if (Eskills && Eskills.cljg_jingmiao) if (name == 'wuxie' || name == 'jinchan' || name == 'kanpo') return 0;
                return num;
            }
        },
        charlotte: true,
        forced: true,
        silent: true,
        forced: true,
        trigger: {
            player: ['chooseTargetBegin', 'chooseControlBegin', 'chooseBoolBegin', 'chooseCardBegin', 'chooseToDiscardBegin', 'chooseToMoveBegin']
        },
        filter(event, player, name) {
            var evt = event.parent;
            if (!evt || !evt.name) return false;
            switch (name) {
                case 'chooseCardBegin':
                    if (evt.name == 'clanbolong' && evt.canGive !== undefined) {
                        event.ai = card => {
                            var fromer = _status.event.parent.player;
                            if (_status.event.att > 2 && fromer == game.me) return fromer.getUseValue(card) + get.value(card) + 114;
                            if (_status.event.canGive) return 5 + Math.max(0, 3 - _status.event.player.hp) / 1.5 - get.value(card);
                            return 0;
                        };
                        event.att = get.attitude(event.player, evt.player);
                    }
                    break;
                case 'chooseBoolBegin':
                    if (evt.name == 'olguangao') {
                        event.bool = (function () {
                            var trigger = evt.getTrigger();
                            var player = evt.player;
                            var att = get.attitude(trigger.player, player);
                            var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
                            if (player.countCards('h') % 2 == 0) return att > 0;
                            if (eff > 0) return true;
                            return false;
                        })();
                        event.att = get.attitude(event.player, evt.player);
                    }
                    break;
                case 'chooseToDiscardBegin':
                    if (evt.name == 'clanxieshu' && event.logSkill == 'clanxieshu') {
                        event.ai = function (card) {
                            var player = _status.event.player;
                            var num = _status.event.num;
                            var num2 = player.getDamagedHp();
                            if (num2 > num) return 11 - get.value(card);
                            if (num == num2) return lib.skill.zhiheng.check(card);
                            return 0;
                        };
                    }
                    break;
                case 'chooseTargetBegin':
                    if (event.prompt == get.prompt('zhenge') && evt.name == 'zhenge')
                        event.ai = function (target) {
                            var player = _status.event.player,
                                att = get.attitude(player, target);
                            if (player == target) return 2;
                            if (att > 0) {
                                if (!target.hasMark('zhenge_effect')) att *= 1.5;
                                if (
                                    !game.hasPlayer(function (current) {
                                        return get.distance(target, current, 'attack') > 2;
                                    })
                                ) {
                                    var usf = Math.max.apply(Math, function (current) {
                                        if (target.canUse('sha', current, false)) return get.effect(current, { name: 'sha' }, target, player);
                                        return 0;
                                    });
                                    return att + usf;
                                }
                                return att;
                            }
                            return 0;
                        };
                    if (evt.name == 'xianfu' && event.animate == false) {
                        event.ai = function (target) {
                            var att = get.attitude(_status.event.player, target);
                            if (att > 0) {
                                if (target.hasSkillTag('maixie')) return 0.1;
                                return (att + 1) * (a => (a > 0 ? a : 0.1))(get.threaten(target, _status.event.player));
                            }
                            if (att == 0) return Math.random();
                            return att;
                        };
                    }
                    if (evt.name == 'sbjieyue') {
                        event.ai = function (target) {
                            var att = get.attitude(_status.event.player, target);
                            return att * (a => (a > 0 ? a : 0.1))(get.threaten(target, _status.event.player, true));
                        };
                    }
                    break;
                case 'chooseControlBegin':
                    if (event.choiceList && event.choiceList.length == 3 && evt.name == 'yachai')
                        event.ai = function () {
                            var heyan = _status.event.parent.player,
                                me = _status.event.player;
                            if (get.attitude(me, heyan) >= 0) return 0;
                            var th = me.getCards('h');
                            if (th.length < 3) return 2;
                            var obj = {},
                                suit,
                                list = [],
                                i;
                            for (i of th) (suit = i.suit), (obj[suit] = obj[suit] || 0 + get.value(i));
                            for (i in obj) list.push(obj[i]);
                            list.sort((a, b) => a - b);
                            if (list[0] < Math.ceil(th / 2) * 5) return 1;
                            return 2;
                        };
                    break;
                case 'chooseToMoveBegin':
                    if (evt.name == 'dcsushou' && evt.step == 3 && typeof event.processAI == 'function')
                        event.processAI = function (list) {
                            var player = _status.event.player;
                            if (get.attitude(player, _status.event.parent.target) > 0) return [list[0][1], list[1][1]];
                            var cards1 = list[0][1].slice(),
                                cards2 = list[1][1].slice(),
                                map1 = [],
                                map2 = [];
                            var num = Math.min(player.getDamagedHp(), cards1.length, cards2.length);
                            cards1.sort((a, b) => get.value(b) - get.value(a));
                            cards2.sort((a, b) => get.value(a) - get.value(b));
                            for (var i = 0; i < num; i++) {
                                if (get.value(cards1[0]) <= get.value(cards2[0])) break;
                                map1.push(cards1.shift());
                                map2.push(cards2.shift());
                            }
                            return [cards1.concat(map2), cards2.concat(map1)];
                        };
                    break;
            }
        },
        content() { }
    };
    lib.skill._chongzhu.check = function (card) {
        if (card.hasGaintag('dczhaowen_tag')) return 0;
        if (card.name == 'zhibi') return 1;
        if (card.name == 'suijiyingbian') return 0;
        return 1.1 - _status.event.player.getUseValue(card);
    }; //重铸牌AI优化
    lib.skill.zhangba_skill.check = function (card) {
        var event = _status.event.getParent('useCard');
        var player = _status.event.player;
        var name = card.name;
        if (event.name == 'nanman') {
            if (name == 'tao' || name == 'jiu') return 0;
            if (name == 'shan' && player.hp > 1) return 0;
            if (player.hp > 3) return 0;
        }
        if (player.hasSkillTag('nokeep') && card.name == 'shan') return 1;
        for (var i of player.getCards('h')) if (i.name == 'sha') return 0;
        var value = player.getUseValue({ name: 'sha' });
        if (value > 55) return 10;
        if (value < 30) return 5 - get.value(card);
        return 5 + (value - 30) * 0.3 - get.value(card);
    }; //丈八优化
    lib.skill.guanshi_skill.content = function () {
        'step 0';
        var next = player.chooseToDiscard(get.prompt('guanshi'), 2, 'he', function (card) {
            return _status.event.player.getEquip('guanshi') != card;
        });
        var evt = _status.event.getTrigger();
        next.set('evt', evt);
        next.set('eff', get.effect(evt.target, evt.card, evt.player, evt.player));
        next.set('nokeep', evt.player.hasSkillTag('nokeep'));
        next.set('att', get.attitude(evt.player, evt.target));
        var ans = 0;
        for (var i of evt.player.getSkills()) if (typeof get.info(i) == 'object' && get.info(i).shaRelated) ans += 1 + Math.random();
        next.set('ans', ans);
        next.set('ai', function (card) {
            var ans = 5 - get.value(card);
            var evt = _status.event.evt;
            var eff = _status.event.eff;
            var att = _status.event.att;
            var nokeep = _status.event.nokeep;
            var name = card.name;
            if (name == 'shan' && nokeep) ans += 4;
            if (name == 'shan') ans++;
            if (nokeep) ans += 2;
            if (att < 0 && eff > 0) {
                if (evt.baseDamage + evt.extraDamage >= Math.min(2, evt.target.hp)) ans += 3;
                ans += _status.event.ans + eff * 0.01;
                return ans;
            }
            return -1;
        });
        ('step 1');
        if (result.bool) {
            if (event.triggername == 'shaMiss') {
                trigger.untrigger();
                trigger.trigger('shaHit');
                trigger._result.bool = false;
                trigger._result.result = null;
            } else {
                trigger.unneutralize();
            }
        }
    }; //贯石
    //杨艳
    if (lib.skill.xinxuanbei) {
        lib.skill.xinxuanbei.ai.order = 8;
        lib.skill.xinxuanbei.ai.result.player = function (player, target) {
            var eff = get.effect(target, { name: 'guohe_copy' }, player, player) + get.effect(player, { name: 'sha' }, target, player);
            if (
                !player.isLinked() &&
                player.hasSkill('xianwan') &&
                !target.hasSkillTag(
                    'directHit_ai',
                    true,
                    {
                        target: target,
                        card: { name: 'sha' }
                    },
                    true
                )
            )
                eff += 10;
            return eff;
        };
        lib.skill.xianwan.ai.order = function (item, player) {
            if (player.getCardUsable('sha') > 1) return 9;
            return 3.4;
        };
    }
    //何晏
    if (lib.skill.yachai) {
        lib.skill.yachai.check = function (event, player) {
            if (get.attitude(player, event.source) <= 0) return true;
            if (event.source.countCards('h') >= event.source.hp) return false;
            if (
                event.source.countCards('h', function (card) {
                    return event.source.getCardUsable(card) > 0 && game.hasPlayer(current => event.source.canUse(card, current) && get.effect(current, card, event.source, event.source) > 0);
                }).length == 0
            )
                return true;
        };
        lib.skill.qingtan.ai.result = {
            player: 1,
            target: -0.6
        };
    }
    //是仪
    if (lib.skill.dccuichuan)
        lib.skill.dccuichuan.ai.result = {
            target(player, target) {
                if (target.countCards('e') == 3) return get.attitude(player, target) >= 0 ? 1 : 100;
                return 8;
            },
            player(player, target) {
                if (target.countCards('e') == 3) return 0.2;
                return get.drawEffect(player, target.countCards('e') + 1);
            }
        };
    //李异谢旌
    if (lib.skill.dcdouzhen) {
        lib.skill.dcdouzhen.ai.effect.player = function (card, player, target) {
            if (card.name != 'juedou') return;
            if (!target.countCards('he')) return;
            if (
                player.hasSkillTag(
                    'directHit_ai',
                    true,
                    {
                        target: target,
                        card: card
                    },
                    true
                )
            ) {
                return [1, 1];
            }
            var hs1 = target.getCards('h', 'sha');
            var hs2 = player.getCards('h', card => (get.color(card) == 'red' && get.type(card) == 'basic') || card.name == 'sha');
            var hsx = target.getCards('h');
            if (hs1.length > hs2.length + 1 || (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) || (hsx.length > 3 && hs2.length == 0) || (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number))) {
                return [1, 0.5];
            }
            return [1, 2];
        };
        lib.skill.dcdouzhen.mod.aiOrder = function (player, card, num) {
            if (get.type(card, null, false) != 'basic' || player != _status.currentPhase) return;
            if (player.countMark('dcdouzhen') % 2 && get.color(card) == 'red') return num + 3;
        };
        lib.skill.dcdouzhen.mod.cardnature = function (card, player) {
            if (get.type(card, null, false) != 'basic' || player != _status.currentPhase) return;
            if (player.countMark('dcdouzhen') % 2) {
                if (get.color(card) == 'red') return false;
            } else {
                if (get.color(card) == 'black') return false;
            }
        };
    }
    //星黄忠
    if (lib.skill.spqishe) {
        lib.skill.spqishe.check = function (card) {
            var player = _status.event.player;
            if (player.hp < 1 && !player.hasCard('jiu', 'hs') && !player.hasCard('tao', 'hs')) return 30 / (get.value(card) || 0.1);
            return 5 - get.value(card);
        };
    }
    //鲁芝
    if (lib.skill.qingzhongx) {
        lib.skill.qingzhongx.subSkill.give.ai = {
            nokeep: true,
            skillTagFilter(player, tag, arg) {
                if (tag == 'nokeep') {
                    var flP = game.filterPlayer(function (current) {
                        return current.isMinHandcard();
                    });
                    for (var i of flP) if (get.attitude(player, i) > 0) return false;
                    return true;
                }
            }
        };
    }
    //冯方
    if (lib.skill.dcditing)
        lib.skill.dcditing.check = function (event, player) {
            var target = event.player;
            if (get.attitude(player, target) < 0) return true;
            if (Math.min(player.hp, target.countCards('h')) > 2) return true;
            return false;
        };
    //张华
    if (lib.skill.olbihun)
        lib.skill.olbihun.ai.effect = {
            player(card, player, target) {
                if ((!card.isCard || !card.cards) && get.itemtype(card) != 'card') return;
                var cards = card.cards || [];
                if (target && player != target && player.countCards('h', cardx => !cards.includes(cardx)) > player.getHandcardLimit()) return [0, 0, 0, 0.5];
            }
        };
    return [lib, game, ui, get, ai, _status];
});

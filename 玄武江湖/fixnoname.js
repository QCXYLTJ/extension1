'use strict';
window.xwImport(function (lib, game, ui, get, ai, _status) {
    if (!lib.config.xuanwujianghu_only2) {
        return;
    }
    get.xwNoThreatenEffect = function (target, card, player, player2, isLink) {
        var event = _status.event;
        var eventskill = null;
        if (player == undefined) player = _status.event.player;
        if (typeof card != 'string' && (typeof card != 'object' || !card.name)) {
            var skillinfo = get.info(event.skill);
            if (event.skill && skillinfo.viewAs == undefined) card = _status.event.skill;
            else {
                card = get.card();
                if (skillinfo && skillinfo.viewAs && card.name === skillinfo.viewAs.name) {
                    eventskill = event.skill;
                }
            }
        }
        var result = get.result(card, eventskill);
        var result1 = result.player, result2 = result.target;
        if (typeof result1 == 'function') result1 = result1(player, target, card, isLink);
        if (typeof result2 == 'function') result2 = result2(player, target, card, isLink);
        if (typeof result1 != 'number') result1 = 0;
        if (typeof result2 != 'number') result2 = 0;
        var temp1, temp2, temp3, temp01 = 0, temp02 = 0, threaten = 1;
        var skills1 = player.getSkills().concat(lib.skill.global);
        game.expandSkills(skills1);
        var zerotarget = false, zeroplayer = false;
        for (var i = 0; i < skills1.length; i++) {
            temp1 = get.info(skills1[i]).ai;
            if (temp1 && typeof temp1.effect == 'object' && typeof temp1.effect.player == 'function') {
                temp1 = temp1.effect.player(card, player, target, result1, isLink);
            }
            else temp1 = undefined;
            if (typeof temp1 == 'object') {
                if (temp1.length == 2 || temp1.length == 4) {
                    result1 *= temp1[0];
                    temp01 += temp1[1];
                }
                if (temp1.length == 4) {
                    result2 *= temp1[2];
                    temp02 += temp1[3];
                }
            }
            else if (typeof temp1 == 'number') {
                result1 *= temp1;
            }
            else if (temp1 == 'zeroplayer') {
                zeroplayer = true;
            }
            else if (temp1 == 'zerotarget') {
                zerotarget = true;
            }
            else if (temp1 == 'zeroplayertarget') {
                zeroplayer = true;
                zerotarget = true;
            }
        }
        if (target) {
            var skills2 = target.getSkills().concat(lib.skill.global);
            game.expandSkills(skills2);
            for (var i = 0; i < skills2.length; i++) {
                temp2 = get.info(skills2[i]).ai;
                if (temp2 && temp2.threaten) temp3 = temp2.threaten;
                else temp3 = undefined;
                if (temp2 && typeof temp2.effect == 'function') {
                    if (!player.hasSkillTag('ignoreSkill', true, {
                        card: card,
                        target: target,
                        skill: skills2[i],
                        isLink: isLink,
                    })) temp2 = temp2.effect(card, player, target, result2, isLink);
                    else temp2 = undefined;
                }
                else if (temp2 && typeof temp2.effect == 'object' && typeof temp2.effect.target == 'function') {
                    if (!player.hasSkillTag('ignoreSkill', true, {
                        card: card,
                        target: target,
                        skill: skills2[i],
                        isLink: isLink,
                    })) temp2 = temp2.effect.target(card, player, target, result2, isLink);
                    else temp2 = undefined;
                }
                else temp2 = undefined;
                if (typeof temp2 == 'object') {
                    if (temp2.length == 2 || temp2.length == 4) {
                        result2 *= temp2[0];
                        temp02 += temp2[1];
                    }
                    if (temp2.length == 4) {
                        result1 *= temp2[2];
                        temp01 += temp2[3];
                    }
                }
                else if (typeof temp2 == 'number') {
                    result2 *= temp2;
                }
                else if (temp2 == 'zeroplayer') {
                    zeroplayer = true;
                }
                else if (temp2 == 'zerotarget') {
                    zerotarget = true;
                }
                else if (temp2 == 'zeroplayertarget') {
                    zeroplayer = true;
                    zerotarget = true;
                }
                if (typeof temp3 == 'function' && temp3(player, target) != undefined) {
                    threaten *= temp3(player, target);
                }
                else if (typeof temp3 == 'object') {
                    if (typeof temp3.target == 'number') {
                        threaten *= temp3;
                    }
                    else if (typeof temp3.target == 'function' && temp3(player, target) != undefined) {
                        threaten *= temp3(player, target);
                    }
                }
                else if (typeof temp3 == 'number') {
                    threaten *= temp3;
                }
            }
            result2 += temp02;
            result1 += temp01;
            /*
            if(get.attitude(player,target)<0){
                result2*=Math.sqrt(threaten);
            }
            else{
                result2*=Math.sqrt(Math.sqrt(threaten));
            }*/
            // *** continue here ***
            if (target.hp == 1) result2 *= 2.5;
            if (target.hp == 2) result2 *= 1.8;
            if (target.countCards('h') == 0) {
                if (get.tag(card, 'respondSha') || get.tag(card, 'respondShan')) {
                    result2 *= 1.7;
                }
                else {
                    result2 *= 1.5;
                }
            }
            if (target.countCards('h') == 1) result2 *= 1.3;
            if (target.countCards('h') == 2) result2 *= 1.1;
            if (target.countCards('h') > 3) result2 *= 0.5;
            if (target.hp == 4) result2 *= 0.9;
            if (target.hp == 5) result2 *= 0.8;
            if (target.hp > 5) result2 *= 0.6;
        }
        else {
            result2 += temp02;
            result1 += temp01;
        }
        if (zeroplayer) result1 = 0;
        if (zerotarget) result2 = 0;
        var final = 0;
        if (player2) {
            final = (result1 * get.attitude(player2, player) + (target ? result2 * get.attitude(player2, target) : 0));
        }
        else final = (result1 * get.attitude(player, player) + (target ? result2 * get.attitude(player, target) : 0));
        if (!isLink && get.tag(card, 'natureDamage') && !zerotarget) {
            var info = get.info(card);
            if (!info || !info.ai || !info.ai.canLink) {
                if (target.isLinked()) game.countPlayer(function (current) {
                    if (current != target && current.isLinked()) final += get.effect(current, card, player, player2, true);
                });
            }
            else if (info.ai.canLink(player, target, card)) {
                game.countPlayer(function (current) {
                    if (current != target && current.isLinked()) final += get.effect(current, card, player, player2, true);
                });
            }
        }
        return final;
    };
    get.xwNoThreatenEffectUse = function (target, card, player, player2, isLink) {
        var event = _status.event;
        var eventskill = null;
        if (player == undefined) player = _status.event.player;
        if (typeof card != 'string' && (typeof card != 'object' || !card.name)) {
            var skillinfo = get.info(event.skill);
            if (event.skill && skillinfo.viewAs == undefined) card = _status.event.skill;
            else {
                card = get.card();
                if (skillinfo && skillinfo.viewAs && card.name === skillinfo.viewAs.name) {
                    eventskill = event.skill;
                }
            }
        }
        var info = get.info(card);
        if (typeof card == 'object' && info && info.changeTarget) {
            var targets = [target];
            info.changeTarget(player, targets);
            var eff = 0;
            for (var i of targets) {
                eff += get.effect(i, card, player, player2, isLink);
            }
            return eff;
        }
        var result = get.result(card, eventskill);
        var result1 = result.player_use || result.player, result2 = result.target_use || result.target;
        if (typeof result1 == 'function') result1 = result1(player, target, card, isLink);
        if (typeof result2 == 'function') result2 = result2(player, target, card, isLink);
        if (typeof result1 != 'number') result1 = 0;
        if (typeof result2 != 'number') result2 = 0;
        var temp1, temp2, temp3, temp01 = 0, temp02 = 0, threaten = 1;
        var skills1 = player.getSkills().concat(lib.skill.global);
        game.expandSkills(skills1);
        var zerotarget = false, zeroplayer = false;
        for (var i = 0; i < skills1.length; i++) {
            temp1 = get.info(skills1[i]).ai;
            if (temp1 && typeof temp1.effect == 'object' && typeof temp1.effect.player_use == 'function') {
                temp1 = temp1.effect.player_use(card, player, target, result1, isLink);
            }
            else if (temp1 && typeof temp1.effect == 'object' && typeof temp1.effect.player == 'function') {
                temp1 = temp1.effect.player(card, player, target, result1, isLink);
            }
            else temp1 = undefined;
            if (typeof temp1 == 'object') {
                if (temp1.length == 2 || temp1.length == 4) {
                    result1 *= temp1[0];
                    temp01 += temp1[1];
                }
                if (temp1.length == 4) {
                    result2 *= temp1[2];
                    temp02 += temp1[3];
                }
            }
            else if (typeof temp1 == 'number') {
                result1 *= temp1;
            }
            else if (temp1 == 'zeroplayer') {
                zeroplayer = true;
            }
            else if (temp1 == 'zerotarget') {
                zerotarget = true;
            }
            else if (temp1 == 'zeroplayertarget') {
                zeroplayer = true;
                zerotarget = true;
            }
        }
        if (target) {
            var skills2 = target.getSkills().concat(lib.skill.global);
            game.expandSkills(skills2);
            for (var i = 0; i < skills2.length; i++) {
                temp2 = get.info(skills2[i]).ai;
                if (temp2 && temp2.threaten) temp3 = temp2.threaten;
                else temp3 = undefined;
                if (temp2 && typeof temp2.effect == 'function') {
                    if (!player.hasSkillTag('ignoreSkill', true, {
                        card: card,
                        target: target,
                        skill: skills2[i],
                        isLink: isLink,
                    })) temp2 = temp2.effect(card, player, target, result2, isLink);
                    else temp2 = undefined;
                }
                else if (temp2 && typeof temp2.effect == 'object' && typeof temp2.effect.target_use == 'function') {
                    if (!player.hasSkillTag('ignoreSkill', true, {
                        card: card,
                        target: target,
                        skill: skills2[i],
                        isLink: isLink,
                    })) temp2 = temp2.effect.target_use(card, player, target, result2, isLink);
                    else temp2 = undefined;
                }
                else if (temp2 && typeof temp2.effect == 'object' && typeof temp2.effect.target == 'function') {
                    if (!player.hasSkillTag('ignoreSkill', true, {
                        card: card,
                        target: target,
                        skill: skills2[i],
                        isLink: isLink,
                    })) temp2 = temp2.effect.target(card, player, target, result2, isLink);
                    else temp2 = undefined;
                }
                else temp2 = undefined;
                if (typeof temp2 == 'object') {
                    if (temp2.length == 2 || temp2.length == 4) {
                        result2 *= temp2[0];
                        temp02 += temp2[1];
                    }
                    if (temp2.length == 4) {
                        result1 *= temp2[2];
                        temp01 += temp2[3];
                    }
                }
                else if (typeof temp2 == 'number') {
                    result2 *= temp2;
                }
                else if (temp2 == 'zeroplayer') {
                    zeroplayer = true;
                }
                else if (temp2 == 'zerotarget') {
                    zerotarget = true;
                }
                else if (temp2 == 'zeroplayertarget') {
                    zeroplayer = true;
                    zerotarget = true;
                }
                if (typeof temp3 == 'function' && temp3(player, target) != undefined) {
                    threaten *= temp3(player, target);
                }
                else if (typeof temp3 == 'object') {
                    if (typeof temp3.target == 'number') {
                        threaten *= temp3;
                    }
                    else if (typeof temp3.target == 'function' && temp3(player, target) != undefined) {
                        threaten *= temp3(player, target);
                    }
                }
                else if (typeof temp3 == 'number') {
                    threaten *= temp3;
                }
            }
            result2 += temp02;
            result1 += temp01;
            /*
            if(get.attitude(player,target)<0){
                result2*=Math.sqrt(threaten);
            }
            else{
                result2*=Math.sqrt(Math.sqrt(threaten));
            }*/
            if (target.hp == 1) result2 *= 2.5;
            if (target.hp == 2) result2 *= 1.8;
            if (target.countCards('h') == 0) {
                if (get.tag(card, 'respondSha') || get.tag(card, 'respondShan')) {
                    result2 *= 1.7;
                }
                else {
                    result2 *= 1.5;
                }
            }
            if (target.countCards('h') == 1) result2 *= 1.3;
            if (target.countCards('h') == 2) result2 *= 1.1;
            if (target.countCards('h') > 3) result2 *= 0.5;
            if (target.hp == 4) result2 *= 0.9;
            if (target.hp == 5) result2 *= 0.8;
            if (target.hp > 5) result2 *= 0.6;
        }
        else {
            result2 += temp02;
            result1 += temp01;
        }
        if (zeroplayer) result1 = 0;
        if (zerotarget) result2 = 0;
        var final = 0;
        if (player2) {
            final = (result1 * get.attitude(player2, player) + (target ? result2 * get.attitude(player2, target) : 0));
        }
        else final = (result1 * get.attitude(player, player) + (target ? result2 * get.attitude(player, target) : 0));
        if (!isLink && get.tag(card, 'natureDamage') && !zerotarget) {
            var info = get.info(card);
            if (!info || !info.ai || !info.ai.canLink) {
                if (target.isLinked()) game.countPlayer(function (current) {
                    if (current != target && current.isLinked()) final += get.effect(current, card, player, player2, true);
                });
            }
            else if (info.ai.canLink(player, target, card)) {
                game.countPlayer(function (current) {
                    if (current != target && current.isLinked()) final += get.effect(current, card, player, player2, true);
                });
            }
        }
        return final;
    };
    lib.skill._lianhuan = {
        trigger: { player: 'damageAfter' },
        filter(event, player) {
            return event.lianhuanable == true;
        },
        forced: true,
        popup: false,
        logv: false,
        forceDie: true,
        //priority:-5,
        content() {
            "step 0"
            event.logvid = trigger.getLogv();
            "step 1"
            event.targets = game.filterPlayer(function (current) {
                return current != event.player && current.isLinked();
            });
            lib.tempSortSeat = _status.currentPhase || player;
            event.targets.sort(lib.sort.seat);
            delete lib.tempSortSeat;
            event._args = [trigger.num, trigger.nature, trigger.cards, trigger.card];
            if (trigger.source) event._args.push(trigger.source);
            else event._args.push("nosource");
            "step 2"
            if (event.targets.length) {
                var target = event.targets.shift();
                event.targets.sortBySeat();
                if (target.isLinked()) {
                    target.damage.apply(target, event._args.slice(0));
                }
                event.redo();
            }
        },
    };
});
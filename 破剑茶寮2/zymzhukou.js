//"出牌阶段开始时,你可以与一名其他角色拼点.若你赢,其所有牌移出游戏且非锁定技失效至回合结束;若你没赢,本回合你不能对其使用牌
zymzhukou = {
    trigger: { player: "phaseUseBegin" },
    forced: true,
    async content(event, trigger, player) {//QQQ
        const result = await player.chooseTarget(get.prompt2('zymzhukou'), (card, player, target) => player.canCompare(target))
            .set('ai', (target) => {
                var num = 0;
                target.countCards('h', (Q) => { if (Q.number > num) num = Q.number });
                return get.player().attitudeTo(target) < 0 && player.countCards('h', (Q) => Q.number > num);
            }).forResult();
        if (result.targets?.length) {
            const result1 = await player.chooseToCompare(result.targets[0], (card) => card.number).forResult();
            if (result1.bool) {
                var cards = result.targets[0].getCards('he');
                result.targets[0].addTempSkill('zymzhukou_db');
                if (cards.length) {
                    result.targets[0].addToExpansion(cards, 'giveAuto', result.targets[0]).gaintag.add('zymzhukou_db');
                };
                player.line(result.targets[0]);
                game.log(result.targets, "获得了", 'zymzhukou');
                result.targets[0].addSkill('zymzhukou_db');
            }
            else {
                result.targets[0].addTempSkill('zymzhukou_target');
            };
        };
    },
    ai: {
        expose: 0.3,
    },
    subSkill: {
        target: {
            charlotte: true,
            mod: {
                targetEnabled(card, player, target, now) {
                    if (player == _status.currentPhase && player != target) {
                        return false;
                    }
                },
            },
        },
    },
};
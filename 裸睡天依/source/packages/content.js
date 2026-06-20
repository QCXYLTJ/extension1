import { lib, game, ui, get, ai, _status } from '../../../../noname.js'
export async function content(config, pack) {
    lib.skill.ls_undiscard = {
        mod: {
            canBeDiscarded(card) {
                if (get.position(card) == 'e' && (card.name == 'ls_yanbaa' || card.name == 'ls_yanbab' || card.name == 'ls_yanbac' || card.name == 'ls_yanbad' || card.name == 'ls_yanbae')) return false;
            },
        },
    }
    lib.element.player.hasYanba = function () {
        if (this.countCards('e') == 0) return false;
        for (var i of this.getCards('e')) {
            if (i.name == 'ls_yanbaa' || i.name == 'ls_yanbab' || i.name == 'ls_yanbac' || i.name == 'ls_yanbad' || i.name == 'ls_yanbae') return true;
        }
        return false;
    }
    lib.skill._vcardanimate = {
        silent: true,
        forced: true,
        lastDo: true,
        trigger: {
            player: ['useCard1', 'respond'],
        },
        filter(event, player) {
            return lib.config['extension_裸睡天依_vCardAnimate'] && event.card && !event.cards.length;
        },
        content() {
            var card = ui.create.card(ui.special, 'noclick', true);
            card.init(['虚拟', null, trigger.card.name, trigger.card.nature]);
            player.$throw(card, 1000);
            card.fix();
            card.remove();
            card.destroyed = true;
        },
    };
    game.text_hasExtension = function (str) {
        return lib.config.extensions && lib.config.extensions.includes(str) && lib.config['extension_' + str + '_enable'];
    };
    game.setTextTip = (skill, skillInfo) => {
        skillInfo = get.skillInfoTranslation(skill) || skillInfo || '无说明';
        skill = skill;
        return `
		<span style="text-decoration: underline; color: yellow; cursor: pointer;" onclick="game.toggleTooltip(this)" >
		${skill}
		</span>
		<div style="overflow: visible; display: none; position: absolute; z-index: 10; left: 0; margin-top:2px;
		color: purple; background-color: white; border: 1px solid black; padding: 5px; text-align: left;" class="tooltip"
		data-skill-info="${skillInfo}"></div>
		`;
    };
    game.toggleTooltip = function (element) {
        event.stopPropagation();
        var tooltip = element.parentNode.querySelector('.tooltip');
        if (tooltip.style.display === 'none') {
            tooltip.innerHTML = tooltip.getAttribute('data-skill-info');
            tooltip.style.display = 'block';
        } else {
            tooltip.style.display = 'none';
        }
    };
    lib.arenaReady.push(() => {
        lib.translate["ls_lingdong_info"] = "锁定技,①你使用具有指定标签的牌时,视为发动对应攻击:<造成伤害>,重攻击;<指定其他角色为目标>,轻攻击;其他,闪避.②你以" + game.setTextTip('指定攻击顺序', 'A轻 B重 C闪<br>【扰动】AAAAA:使最后一张牌额外结算一次<br>【震颤】AAAAB<br>【冲击】AB:空中发动则打落所有目标<br>【迭影】AAABB:最后一张牌额外造成一次伤害,空中发动打落所有目标<br>【反吹】AAAB:空中发动使最后一张牌不可被抵消<br>【荡涤】BBB:第一张牌使与其他角色的距离-1,第二张令攻击范围+1,第三张牌目标改为攻击范围内的所有角色并移除前置效果<br>【磁阱】AABBB:最后一张牌未造成伤害则额外使用一次(至多两次),造成伤害后对目标相邻角色造成1点伤害<br>【震荡】AB:击飞所有目标<br>【激发】CA:击飞目标并进入空中<br>【凝滞】CB:击飞目标,若目标已被击飞则改为令目标击飞效果增加一次<br>【流场】:以A结尾完成技能时,消耗所有能量,使最后一张牌额外结算等量次并击飞所有目标,空中发动时额外对目标角色造成1点伤害并打落<br>【溯源】:于其他角色回合内发动<闪避>时,有75%的概率对其使用一次重攻击<br>【虚像】:使用攻击牌时有25%的概率额外结算一次<br>【耦合】:击杀敌人后,回复1点体力并获得2点能量') + "使用牌后,触发对应技能.③你使用<闪避>时,打断正在发动的技能.④若你使用的牌与上一张攻击类型:相同,不受次数限制;不同,摸一张牌.";
    });
}
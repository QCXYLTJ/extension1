'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqh_huhan_skill: {
				forced: true,
				trigger: {
					player: 'damageEnd',
				},
				filter(trigger, player) {
					if (!trigger.hasNature('ice')) return false;
					return trigger.player.countCards('h');
				},
				content() {
					var skillname = 'scqh_huhan_mark';
					player.addTempSkill(skillname, 'scqh_huhan_removeAfter');
					var cards = trigger.player.getCards('h', function (card) {
						return !card.hasGaintag(skillname);
					});
					var card = cards.randomGet() || false;
					if (card) trigger.player.addGaintag(card, skillname);
				},
			},
			scqh_huhan_mark: {
				charlotte: true,
				mod: {
					cardDiscardable(card, player) {
						if (card.hasGaintag('scqh_huhan_mark')) return false;
					},
					cardEnabled2(card, player) {
						if (get.itemtype(card) == 'card' && card.hasGaintag('scqh_huhan_mark')) return false;
					},
				},
				onremove(player) {
					player.removeGaintag('scqh_huhan_mark');
				},
				forced: true,
				forceDie: true,
			},
			scqh_huhan_remove: {
				charlotte: true,
				forced: true,
				forceDie: true,
				trigger: {
					player: ['die', 'phaseBeginStart'],
					global: 'useCardToBegin',
				},
				filter(trigger, player) {
					if (trigger.parent.name === 'useCard') {
						if (get.type(trigger.card) !== 'land') return false;
						if (trigger.card.name !== 'scqh_huhan') return false;
					}
					return true;
				},
				content() {
					game.scqh.snowStop();
					player.removeSkill(event.name);
				},
			},
		},
		translate: {
			scqh_huhan_skill: '沍寒',
			scqh_huhan_skill_info: '地图效果:当你受到冰属性伤害后,随机封印一张手牌(不能使用、打出、弃置).',
			scqh_huhan_mark: '❄️',
		},
	};
	for (const i in list.skill) {
		const info = list.skill[i];
		const priority = function (infox) {
			if (typeof infox._priority !== 'number') {
				infox._priority = Math.random();
			}
		};
		const audio = function (infox) {
			var number = 1;
			if (typeof infox.audio === 'number') number = infox.audio;
			if (!infox.audio || typeof infox.audio === 'number') {
			}
		};
		priority(info);
		audio(info);
		if (info.subSkill) {
			for (const j in info.subSkill) {
				const infoj = info.subSkill[j];
				priority(infoj);
				audio(infoj);
			}
		}
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info'], list.translate[i + '_append']);
	}
	for (const i in list.translate) {
		lib.translate[i] = list.translate[i];
	}
};

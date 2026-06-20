'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			_scqh_shanxian_global: {
				forced: true,
				_priority: 6,
				trigger: {
					target: 'useCardToBegin',
				},
				filter(trigger, player) {
					if (trigger.directHit) return false;
					if (trigger.player === trigger.target) return false;
					if (get.type(trigger.card) === 'basic') return false;
					return player.hasUsableCard('scqh_shanxian');
				},
				content() {
					var next = player.chooseToUse();
					var prompt = get.translation(trigger.player);
					prompt += '使用了';
					prompt += get.translation(trigger.card);
					prompt += ',是否使用【闪现】响应？';
					next.set('prompt', prompt);
					next.set('filterCard', function (card, player) {
						if (card.name != 'scqh_shanxian') return false;
						return lib.filter.cardEnabled(card, player, 'forceEnable');
					});
					next.set('respondTo', [trigger.player, trigger.card]);
					next.set('goon', -get.effect(player, trigger.card, trigger.player, player));
					next.set('ai1', function (card) {
						return _status.event.goon;
					});
				},
			},
			scqh_shanxian_skill: {
				charlotte: true,
				markimage: 'extension/' + lib.scqhExtension + '/skin/mark/scqh_shanxian.png',
				intro: {
					name: '与原位置的距离',
					content(storage, player, skill) {
						let x = player.countMark('scqh_shanxian_skill_上');
						let y = player.countMark('scqh_shanxian_skill_下');
						let num = x - y;
						let str = '';
						if (num > 0) str += '进';
						else str += '退';
						if (num && typeof num === 'number') {
							str += get.cnNumber(Math.abs(num));
							str += '码';
						}
						return str;
					},
					markcount(storage, player) {
						let x = player.countMark('scqh_shanxian_skill_上');
						let y = player.countMark('scqh_shanxian_skill_下');
						let num = x - y;
						if (num && typeof num === 'number') {
							let str = num > 0 ? '-' : '+';
							str += Math.abs(num);
							return str;
						}
						return 0;
					},
				},
				mod: {
					cardname(card, player) {
						return;
						const evt = _status.event;
						if (card.name !== 'scqh_shanxian') return;
						if (evt.name === 'chooseToUse' || evt.name === 'chooseToRespond') {
							if (evt.filterCard && evt.filterCard({ name: 'shan' }, player, evt)) return 'shan';
						}
					},
				},
				subSkill: {
					上: {
						charlotte: true,
						onremove(player, name) {
							player.removeMark(name, player.countMark(name), false);
							player.unmarkSkill('scqh_shanxian_skill');
						},
						mod: {
							globalFrom(from, to, distance) {
								const x = from.countMark('scqh_shanxian_skill_上');
								return distance - x;
							},
							globalTo(from, to, distance) {
								const x = to.countMark('scqh_shanxian_skill_上');
								return distance - x;
							},
						},
					},
					下: {
						charlotte: true,
						onremove(player, name) {
							player.removeMark(name, player.countMark(name), false);
							player.unmarkSkill('scqh_shanxian_skill');
						},
						mod: {
							globalFrom(from, to, distance) {
								const y = from.countMark('scqh_shanxian_skill_下');
								return distance + y;
							},
							globalTo(from, to, distance) {
								const y = to.countMark('scqh_shanxian_skill_下');
								return distance + y;
							},
						},
					},
				},
			},
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
			scqh_shanxian_skill: '闪现',
			_scqh_shanxian_global: '闪现',
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
				infox.audio = 'ext:' + lib.scqhExtension + '/audio/card:' + number;
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

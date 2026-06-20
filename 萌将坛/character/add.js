'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqhAdd_shenfen: {
				audio: 'ext:自制武将:2',
				mark: true,
				limited: true,
				enable: 'phaseUse',
				filter(event, player) {
					return true;
				},
				filterTarget(card, player, target) {
					return player != target;
				},
				selectTarget: [1, 100],
				multitarget: true,
				multiline: true,
				content() {
					'step 0';
					player.awakenSkill(event.name);
					player.loseHp(2);
					event.delay = false;
					event.targets = targets.sort(lib.sort.seat);
					event.targets1 = event.targets.slice(0);
					event.targets2 = event.targets.slice(0);
					event.targets3 = event.targets.slice(0);
					('step 1');
					if (event.targets1.length) {
						event.targets1.shift().damage('nocard');
						event.redo();
					}
					('step 2');
					if (event.targets2.length) {
						var current = event.targets2.shift();
						var es = current.getCards('e');
						if (es.length) {
							current.discard(es).delay = false;
						}
						event.redo();
					}
					('step 3');
					if (event.targets3.length) {
						var current = event.targets3.shift();
						var hs = current.getCards('h');
						if (hs.length) {
							current.discard(hs).delay = false;
						}
						event.redo();
					}
				},
				ai: {
					order: 10,
					result: {
						player(player) {
							if (player.hp < 4 || player.hasUnknown()) return 0;
							return game.countPlayer(function (current) {
								if (current === player) return false;
								return get.sgn(get.damageEffect(current, player, player));
							});
						},
					},
				},
				intro: {
					content: 'limited',
				},
				_priority: 0,
			},
			scqhAdd_wushuang: {
				audio: 'wushuang',
				superCharlotte: true,
				charlotte: true,
				fixed: true,
				enable: 'chooseToUse',
				vcards(trigger, player) {
					const list = [];
					const history = player.getHistory('useCard', function (evt) {
						return evt.card && evt.card.scqhAdd_wushuang && get.type(evt.card) === 'trick';
					});
					for (const name of lib.inpile) {
						const card = {
							name: name,
							scqhAdd_wushuang: true,
						};
						const type = get.type(card);
						if (type === 'trick' && history.length >= 2) continue;
						if (type !== 'trick' && type !== 'basic') continue;
						if (trigger && trigger.filterCard) {
							if (!trigger.filterCard(card, player, trigger)) continue;
						}
						list.push([type, '', name]);
						if (name !== 'sha') continue;
						for (const nature of lib.inpile_nature) {
							card.nature = nature;
							if (trigger && trigger.filterCard) {
								if (!trigger.filterCard(card, player, trigger)) continue;
							}
							list.push([type, '', name, nature]);
						}
					}
					return list;
				},
				filter(trigger, player) {
					const num = Math.min(2, 1 + player.maxHp - player.hp);
					if (player.countCards('hes') < num) return false;
					const list = lib.skill.scqhAdd_wushuang.vcards(trigger, player);
					return list.length;
				},
				hiddenCard(player, name) {
					const list = lib.skill.scqhAdd_wushuang.vcards(false, player);
					for (const link of list) {
						if (link[2] === name) return true;
					}
					return false;
				},
				chooseButton: {
					dialog(trigger, player) {
						const list = lib.skill.scqhAdd_wushuang.vcards(trigger, player);
						return ui.create.dialog('无双', [list, 'vcard']);
					},
					filter(button, player) {
						const evt = _status.event.parent;
						return evt.filterCard(
							{
								name: button.link[2],
							},
							player,
							evt
						);
					},
					check: function (button) {
						var player = _status.event.player;
						var effect = player.getUseValue(button.link[2]);
						if (button.link[2] == 'shunshou') effect * 1.5;
						if (button.link[2] == 'wuzhong') effect = 30;
						if (button.link[2] == 'juedou') effect * 10;
						if (button.link[2] == 'jiu') effect = 10;
						if (button.link[2] == 'sha') effect * 5;
						if (button.link[2] == 'tiesuo') effect = 1;
						if (get.type(button.link[2]) == 'basic') effect * 2;
						if (get.type(button.link[2]) == 'trick') effect * 0.8;
						if (effect > 0) return effect;
						return 0;
					},
					backup: function (links, player) {
						return {
							audio: 'wushuang',
							popname: true,
							check(card) {
								return 6 - get.value(card);
							},
							position: 'hes',
							filterCard: true,
							selectCard() {
								const player = _status.event.player;
								const dhp = 1 + player.maxHp - player.hp;
								if (dhp > 2) return [2, dhp];
								return [dhp, 2];
							},
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
								scqhAdd_wushuang: true,
							},
							onuse(result, player) { },
						};
					},
					prompt(links, player) {
						var str = '将2~';
						const dhp = 1 + player.maxHp - player.hp;
						str += dhp;
						str += '张牌当做';
						str += get.translation(links[0][3]) || '';
						str += get.translation(links[0][2]) || '';
						str += '使用或打出';
						return str;
					},
				},
				mod: {
					selectTarget(card, player, range) {
						if (card.scqhAdd_wushuang && range[1] !== -1) range[1] = ui.selected.cards.length;
					},
					targetInRange(card, player, target, now) {
						if (card.scqhAdd_wushuang) return true;
					},
				},
				group: ['scqhAdd_wushuang_use', 'scqhAdd_wushuang_draw'],
				subSkill: {
					use: {
						superCharlotte: true,
						charlotte: true,
						fixed: true,
						forced: true,
						trigger: {
							player: 'useCard',
						},
						filter: function (trigger, player) {
							const cards = trigger.cards || [];
							const targets = trigger.targets || [];
							if (targets.length) {
								const num = cards.length - targets.length;
								return num > 0 && trigger.card.scqhAdd_wushuang;
							}
							return false;
						},
						content: function () {
							const cards = trigger.cards || [];
							const targets = trigger.targets || [];
							const num = cards.length - targets.length;
							trigger.effectCount += num;
						},
						ai: {
							unequip: true,
							skillTagFilter(player, tag, arg) {
								if (!tag || !arg || !arg.card) return;
								if (tag === 'unequip') {
									if (arg.card.scqhAdd_wushuang) return true;
								}
								return false;
							},
						},
						sub: true,
					},
					draw: {
						superCharlotte: true,
						charlotte: true,
						fixed: true,
						forced: true,
						trigger: {
							global: 'phaseUseBegin',
						},
						filter: function (trigger, player) {
							const dhp = player.maxHp - player.hp;
							return dhp > 0;
						},
						content() {
							const dhp = player.maxHp - player.hp;
							player.draw(dhp * 2);
						},
						sub: true,
					},
				},
			},
			scqhAdd_addSkill: {
				enable: 'phaseUse',
				content: async function (event, trigger, player) {
					const list = [];
					const map = {};
					for (const skill in lib.skill) {
						if (player.hasSkill(skill)) continue;
						if (lib.skill[skill].sourceSkill) continue;
						if (skill.indexOf('scqhAdd_') === 0) {
							const translate = lib.translate[skill] || lib.translate[skill.slice(8)] || false;
							if (translate) {
								map[skill] = translate;
								list.add(translate);
							} else list.add(skill);
						}
					}
					if (list.length) {
						const result = await player.chooseControl(list).forResult();
						if (result.control) {
							var name = false;
							for (const skill in map) {
								if (result.control === skill) {
									name = skill;
									break;
								}
								if (result.control === map[skill]) {
									name = skill;
									break;
								}
							}
							if (name && lib.skill[name]) {
								await player.addSkill(name);
							}
						}
					}
				},
				ai: {
					result: {
						player() {
							return 0;
						},
					},
				},
			},
		},
		translate: {
			scqhAdd_addSkill: '添加测试技能',
		},
	};
	for (var i in list.skill) {
		if (typeof list.skill[i]._priority != 'number') {
			list.skill[i]._priority = Math.random();
		}
		if (list.skill[i].subSkill) {
			for (var j in list.skill[i].subSkill) {
				if (typeof list.skill[i].subSkill[j]._priority != 'number') {
					list.skill[i].subSkill[j]._priority = Math.random();
				}
			}
		}
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info'], list.translate[i + '_append']);
	}
	for (var i in list.translate) {
		lib.translate[i] = list.translate[i];
	}
};

'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqhDiy_guxin: {
				trigger: {
					target: 'useCardToTargeted',
				},
				check(trigger, player) {
					const source = trigger.player;
					const eff = get.effect(player, trigger.card, source, player);
					const dis = get.distance(player, source);
					if (eff >= 1) {
						if (dis <= 1) return 0;
					}
					return 1;
				},
				filter(trigger, player) {
					if (get.tag(trigger.card, 'damage')) return false;
					if (trigger.player === player) return false;
					return true;
				},
				content() {
					'step 0';
					player.draw();
					('step 1');
					if (get.distance(player, trigger.player) <= 1) {
						trigger.player.draw();
						trigger.parent.excluded.add(player);
					}
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (player === target) return;
							if (get.tag(card, 'damage')) return;
							if (get.distance(target, player) <= 1) return 'zeroplayertarget';
							return [1, 0.6];
						},
					},
				},
				_priority: 0,
			},
			scqhDiy_tongxiao: {
				trigger: {
					global: 'drawEnd',
				},
				logTarget: 'player',
				filter(trigger, player) {
					if (trigger.player === player) return false;
					var current = _status.currentPhase;
					return current && current === player;
				},
				check() {
					return 1;
				},
				content() {
					var target = trigger.player;
					var storage = player.storage.scqhDiy_tongxiao || {};
					var id = storage[target.playerid] || 0;
					id++;
					storage[target.playerid] = id;
					player.storage.scqhDiy_tongxiao = storage;
					var cards = trigger.result || [];
					var hs = target.getCards('h', function (card) {
						return cards.includes(card);
					});
					if (hs.length) {
						var next = player.chooseControl('OK');
						next.set('dialog', [get.translation(target) + '的手牌', hs]);
					}
					player.draw();
				},
				mod: {
					globalFrom(from, to, distance) {
						const storage = from.storage.scqhDiy_tongxiao || {};
						const id = storage[to.playerid] || 0;
						if (id > 0) return distance - id;
					},
				},
				_priority: 0,
			},
			scqhDiy_chongjing: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					if (target === player) return false;
					if (target.hp < target.maxHp) return true;
					if (!player.countCards('h')) return false;
					if (!target.countCards('h')) return false;
					return true;
				},
				content() {
					'step 0';
					player.loseHp();
					target.recover();
					('step 1');
					event.ps = [];
					event.ts = [];
					var cards1 = player.getCards('h');
					var cards2 = target.getCards('h');
					if (cards1.length && cards2.length) {
						var list = ['你的手牌', cards1, get.translation(target.name) + '的手牌', [cards2, 'blank']];
						var chooseButton = player.chooseButton([2, Infinity], list);
						chooseButton.set('target', target);
						chooseButton.set('ai', function (button) {
							return 0;
							const player = _status.event.player;
							const target = _status.event.target;
							const att = get.attitude(player, target);
							const card = button.link;
							const pval = get.value(card, player) || 1;
							const tval = get.value(card, target) || 1;
							const owner = get.owner(card);
							if (att > 1) {
								if (owner === target) {
									if (tval > 1) return 0;
								}
							}
							return tval;
						});
						chooseButton.set('filterButton', function (button) {
							const player = _status.event.player;
							const target = _status.event.target;
							const ps = [];
							const ts = [];
							const buttons = ui.selected.buttons || [];
							for (const subbutton of buttons) {
								const card = subbutton.link;
								if (target.getCards('h').includes(card)) ts.push(card);
								else ps.push(card);
							}
							const card = button.link;
							const owner = get.owner(card);
							if (ps.length > ts.length) {
								if (owner === player) return false;
							}
							if (ts.length > ps.length) {
								if (owner === target) return false;
							}
							if (ts.length >= target.countCards('h')) {
								if (ps.length >= ts.length) return false;
							}
							if (ps.length >= player.countCards('h')) {
								if (ts.length >= ps.length) return false;
							}
							return true;
						});
					} else event.finish();
					('step 2');
					if (result.links?.length) {
						for (var link of result.links) {
							var owner = get.owner(link);
							if (owner === player) event.ps.push(link);
							else event.ts.push(link);
						}
						player.swapHandcards(target, event.ps, event.ts);
					}
				},
				ai: {
					order: 13,
					result: {
						player(player, target) {
							if (player.hp <= 1) return 0;
							if (target.hp >= target.maxHp) return 0;
							const att = get.attitude(player, target);
							return att;
						},
					},
				},
				_priority: 0,
			},
			scqhDiy_guxing: {
				mod: {
					globalTo(from, to, distance) {
						return distance + 1;
					},
				},
				forced: true,
				trigger: {
					player: 'useCardToPlayered',
				},
				filter(trigger, player) {
					const storage = player.storage.scqhDiy_guxing_use || [];
					return !storage.includes(trigger.target);
				},
				content() {
					player.addTempSkill('scqhDiy_guxing_use');
					player.markAuto('scqhDiy_guxing_use', trigger.targets);
				},
				subSkill: {
					use: {
						audio: 'scqhDiy_guxing',
						mod: {
							targetInRange(card, player, target) {
								if (!player.hasSkill('scqhDiy_guxing')) return;
								const storage = player.storage.scqhDiy_guxing_use || [];
								if (card.name === 'sha' && storage.includes(target)) return true;
							},
							cardUsableTarget(card, player, target) {
								if (!player.hasSkill('scqhDiy_guxing')) return;
								const storage = player.storage.scqhDiy_guxing_use || [];
								if (card.name === 'sha' && storage.includes(target)) return true;
							},
						},
						intro: {
							content: '对$使用【杀】没有距离和次数限制',
						},
						charlotte: true,
						forced: true,
						trigger: {
							player: 'useCardBegin',
						},
						filter(trigger, player) {
							if (!player.hasSkill('scqhDiy_guxing')) return false;
							if (trigger.card.name !== 'sha') return false;
							const targets = trigger.targets || [];
							const storage = player.storage.scqhDiy_guxing_use || [];
							for (const target of targets) {
								if (storage.includes(target)) return true;
							}
							return false;
						},
						content() { },
					},
				},
				_priority: 0,
			},
			scqhDiy_eyu: {
				forced: true,
				trigger: {
					global: 'phaseZhunbei',
				},
				filter(trigger, player) {
					if (trigger.player === player) return false;
					return player.countCards('he');
				},
				content() {
					'step 0';
					var next = player.chooseCard('he', get.prompt2(event.name));
					next.set('ai', function (card) {
						return 1;
					});
					('step 1');
					if (result.bool) {
						player.addTempSkill('scqhDiy_eyu_suit');
						var cards = result.cards || [];
						player.showCards(cards);
						var suits = [];
						for (var card of cards) {
							suits.add(card.suit);
						}
						player.markAuto('scqhDiy_eyu_suit', suits);
					} else event.finish();
				},
				subSkill: {
					suit: {
						intro: {
							content: '$',
						},
						forced: true,
						charlotte: true,
						trigger: {
							global: ['useCard', 'respond'],
						},
						filter(trigger, player) {
							if (!player.hasSkill('scqhDiy_eyu')) return false;
							var current = _status.currentPhase;
							if (!current || current !== trigger.player) return false;
							var storage = player.storage.scqhDiy_eyu_suit || [];
							return storage.includes(trigger.card.suit);
						},
						content() {
							player.draw();
						},
						_priority: 0,
					},
				},
				_priority: 0,
			},
			scqhDiy_shanyao: {
				forced: true,
				trigger: {
					player: 'changeHp',
				},
				content() {
					player.changeHujia(1, null, true);
				},
				_priority: 0,
			},
			scqhDiy_jiwang: {
				enable: 'phaseUse',
				usable: 1,
				isJiwang(target) {
					let history = target.getAllHistory('useCard', function (evt) {
						let list = ['trick', 'basic'];
						return list.includes(get.type(evt.card));
					});
					if (!history.length) return false;
					let cardx = history.slice(0).reverse()[0].card;
					let card = {};
					card.name = cardx.name;
					card.nature = cardx.nature;
					card.isCard = true;
					let gamers = game.filterPlayer((current) => {
						return target.canUse(card, current);
					});
					if (gamers.length) return card;
					return false;
				},
				filter(trigger, player) {
					let skill = 'scqhDiy_jiwang';
					let gamers = game.filterPlayer((current) => {
						if (current == player) return false;
						let string = lib.skill[skill].isJiwang(current);
						return string;
					});
					return gamers.length;
				},
				filterTarget(card, player, target) {
					if (target == player) return false;
					let skill = 'scqhDiy_jiwang';
					let cardx = lib.skill[skill].isJiwang(target);
					if (!cardx) return false;
					let str = '<font color=#90EE90>';
					str += get.translation(cardx.nature) || '';
					str += get.translation(cardx.name) || '';
					str += '</font>';
					target.prompt(str);
					return true;
				},
				content() {
					'step 0';
					var cardx = lib.skill[event.name].isJiwang(target);
					target.chooseUseTarget(true, cardx);
					('step 1');
					var list = [];
					var evt = event.getParent(2);
					for (let name of lib.inpile) {
						if (
							target.hasHistory('useCard', function (evt) {
								return name == evt.card.name;
							})
						)
							continue;
						let card = {
							name: name,
						};
						if (evt.filterCard(card, evt.player, evt)) {
							list.add(['', '', name]);
						}
						if (name != 'sha') continue;
						for (let nature of lib.inpile_nature) {
							card.nature = nature;
							if (evt.filterCard(card, evt.player, evt)) {
								list.add(['', '', name, nature]);
							}
						}
					}
					if (list.length) {
						var str = '是否视为使用一张基本牌或普通锦囊牌？';
						var next = player.chooseButton(true, [str, [list, 'vcard']]);
						next.set('ai', function (button) {
							let player = _status.event.player;
							let card = {
								name: button.link[2],
								nature: button.link[3],
							};
							return player.getUseValue(card);
						});
					} else event.finish();
					('step 2');
					var links = result.links || [];
					if (links.length) {
						var card = {};
						card.name = links[0][2];
						card.nature = links[0][3];
						card.isCard = true;
						player.chooseUseTarget(card);
					}
				},
				check(card) {
					return 1;
				},
				ai: {
					order(item, player) {
						return 1;
					},
					result: {
						target(player, target) {
							return get.attitude(player, target) > 1;
						},
						player(player, target) {
							return get.attitude(player, target) > 1;
						},
					},
				},
			},
			scqhDiy_qifeng: {
				forced: true,
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				filter(event, player, name) {
					return true;
				},
				content() {
					'step 0';
					var next = player.chooseTarget([1, Infinity]);
					next.set('prompt', get.prompt(event.name));
					next.set('prompt2', get.translation(event.name + '_info'));
					next.set('ai', function (target) {
						if (target == player) return -1;
						return get.attitude(target, player) < 1;
					});
					('step 1');
					var map = {};
					map.targets = result.targets || [];
					if (map.targets.length) {
						map.num = 0;
						map.one = [];
						map.two = [];
					} else event.finish();
					event.map = map;
					('step 2');
					var map = event.map;
					var giver = map.targets[map.num] || false;
					var taker = map.targets[map.num + 1] || false;
					event.giver = giver;
					event.taker = taker;
					if (giver && giver.isIn()) {
						if (taker && taker.isIn() && giver.countCards('he')) {
							var str = get.translation(event.name);
							str += ':请交给';
							str += get.translation(taker);
							str += '一张牌,否则你失去一点体力并摸一张牌';
							var next = giver.chooseCard('he', str);
							next.set('ai', function (card) {
								return 7 - get.value(card);
							});
						}
					}
					('step 3');
					var map = event.map;
					var giver = event.giver;
					var taker = event.taker;
					var cards = result.cards || [];
					if (giver && giver.isIn()) {
						if (taker && taker.isIn() && cards.length) {
							map.one.add(giver);
							giver.give(cards, taker);
						} else {
							map.two.add(giver);
							giver.loseHp();
							giver.draw();
						}
					}
					('step 4');
					var map = event.map;
					map.num++;
					if (map.num < map.targets.length) {
						event.goto(2);
					}
					('step 5');
					var map = event.map;
					var list = [];
					if (map.one.length) list.push('选项一');
					if (map.two.length) list.push('选项二');
					if (list.length) {
						var next = player.chooseControl(list, 'cancel2');
						next.set('choiceList', ['令 ' + get.translation(map.one) + ' 使用一张基本牌', '令 ' + get.translation(map.two) + ' 使用一张基本牌']);
						next.set('map', map);
						next.set('ai', function () {
							let player = _status.event.player;
							let map = _status.event.map;
							let att1 = 0;
							let att2 = 0;
							for (let current of game.filterPlayer()) {
								if (!current.isIn()) continue;
								let hs = current.getCards('hs', function (card) {
									let names = ['sha'];
									if (!names.includes(card.name)) return false;
									return true;
								});
								if (!hs.length) continue;
								let att = get.attitude(player, current);
								if (map.one.includes(current)) att1 += att;
								if (map.two.includes(current)) att2 += att;
							}
							if (att1 > att2 && att1 > 0) return '选项一';
							if (att2 > att1 && att2 > 0) return '选项二';
							return 'cancel2';
						});
					} else event.finish();
					('step 6');
					var control = result.control || 'cancel2';
					var map = event.map;
					var targetx = [];
					if (control == '选项一') targetx = map.one;
					if (control == '选项二') targetx = map.two;
					event.targetx = targetx;
					event.num = 0;
					if (!targetx.length) event.finish();
					('step 7');
					var target = event.targetx[event.num] || false;
					if (target && target.isIn()) {
						let next = target.chooseToUse('使用一张基本牌', function (card) {
							if (get.type(card) != 'basic') return false;
							return lib.filter.filterCard.apply(this, arguments);
						});
						next.set('ai2', function () {
							let eff = get.effect_use.apply(this, arguments);
							return eff + 0.01;
						});
						next.set('addCount', false);
					}
					('step 8');
					var target = event.targetx[event.num] || false;
					if (target && target.isIn() && !result.bool) {
						target.popup('放弃');
					}
					event.num++;
					if (event.num < event.targetx.length) {
						event.goto(7);
					}
				},
				_priority: 0,
			},
		},
		translate: {
			scqhDiy_jiwang: '既往',
			scqhDiy_jiwang_info: '出牌阶段限一次,你可以令一名其他角色视为使用其使用过的上一张基本牌或普通锦囊牌,你可以视为使用其本回合未使用过的一张基本牌或普通锦囊牌.',
			scqhDiy_qifeng: '起风',
			scqhDiy_qifeng_info: '准备阶段,你可以选择任意名角色,令每名目标角色依次选择并执行一项:①将一张牌交给下一名目标角色;②失去一点体力并摸一张牌.结算完成后,你可以令选择某一项的所有角色依次使用一张基本牌.',
			scqhDiy_guxing: '孤星',
			scqhDiy_guxing_info: '锁定技,其他角色计算与你的距离时+1;当你使用牌指定目标后,你于本回合内再对其使用【杀】没有距离和次数限制.',
			scqhDiy_eyu: '俄语',
			scqhDiy_eyu_info: '其他角色的准备阶段,你可以展示一张牌;若如此做,当前回合角色于本回合内使用或打出与之类型相同的牌时,你摸一张牌.',
			scqhDiy_shanyao: '闪耀',
			scqhDiy_shanyao_info: '锁定技,当你的体力值发生变化时,你获得一点护甲.',
			scqhDiy_guxin: '孤心',
			scqhDiy_guxin_info: '当你成为其他角色使用非伤害牌的目标后,你可以摸一张牌,若你计算与其的距离为１,则其摸一张牌并且令此牌对你无效.',
			scqhDiy_tongxiao: '通晓',
			scqhDiy_tongxiao_info: '其他角色于你的回合内摸牌后,你可以摸一张牌并观看其手中摸到的牌,你计算与其的距离时-1.',
			scqhDiy_chongjing: '憧憬',
			scqhDiy_chongjing_info: '出牌阶段限一次,你可以失去一点体力,令一名其他角色回复一点体力,你可以与其交换任意张相同数量的手牌.',
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
			var number = 2;
			if (typeof infox.audio === 'number') number = infox.audio;
			if (!infox.audio || typeof infox.audio === 'number') {
				infox.audio = 'ext:' + lib.scqhExtension + '/audio:' + number;
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

'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqhAcg_guishen: {
				zhuanhuanji: true,
				mark: true,
				marktext: '☯',
				intro: {
					content(storage, player, skill) {
						if (!storage) return '阳';
						else return '阴';
					},
				},
				frequent(trigger, player) {
					var storage = player.storage.scqhAcg_guishen || false;
					return !storage;
				},
				trigger: {
					player: 'useCardToPlayered',
					target: 'useCardToTargeted',
				},
				filter(trigger, player, name) {
					if (trigger.name == 'useCardToTargeted') {
						if (trigger.player == trigger.target) return false;
					}
					var storage = player.storage.scqhAcg_guishen || false;
					if (storage) {
						var evtlist = trigger.parent.excluded || [];
						if (!evtlist.includes(trigger.target)) return true;
						var current = trigger.player == player ? trigger.target : trigger.player;
						if (current != player && current.countGainableCards(player, 'h')) return true;
						return false;
					}
					return true;
				},
				check(trigger, player) {
					var storage = player.storage.scqhAcg_guishen || false;
					var eff = get.effect(trigger.target, trigger.card, trigger.player, player);
					var att = get.attitude(player, trigger.target);
					if (!storage) return true;
					if (eff <= 0) return true;
					if (get.tag(trigger.card, 'damage')) {
						if (trigger.target != player) {
							if (eff > 0 && att <= 0) return false;
						}
					}
					var current = trigger.player == player ? trigger.target : trigger.player;
					if (current != player) {
						var eff2 = get.effect(current, { name: 'shunshou' }, player, player);
						if (eff2 > eff) return true;
					}
					return false;
				},
				promptList(trigger, player) {
					var storage = player.storage.scqhAcg_guishen || false;
					var map = {
						prompt: '',
						prompt2: '',
					};
					if (!storage) {
						map.prompt += '是否发动【鬼神·阳】？';
						map.prompt2 += '你摸一张牌';
					} else {
						map.prompt += '是否对';
						map.prompt += get.translation(trigger.target) || '';
						map.prompt2 += '防止';
						map.prompt2 += get.translation(trigger.card) || '';
						map.prompt2 += '对';
						map.prompt2 += get.translation(trigger.target) || '';
						if (trigger.target == player) {
							map.prompt += '(你)';
							map.prompt2 += '(你)';
						}
						map.prompt += '发动【鬼神·阴】？';
						map.prompt2 += '生效';
						var current = trigger.player == player ? trigger.target : trigger.player;
						if (current != player) {
							map.prompt2 += ',获得';
							map.prompt2 += get.translation(current) || '';
							map.prompt2 += '的一张手牌';
						}
					}
					return map;
				},
				prompt(trigger, player) {
					var map = lib.skill.scqhAcg_guishen.promptList(trigger, player) || {};
					return map.prompt;
				},
				prompt2(trigger, player) {
					var map = lib.skill.scqhAcg_guishen.promptList(trigger, player) || {};
					return map.prompt2;
				},
				content() {
					const storage = player.storage.scqhAcg_guishen || false;
					player.changeZhuanhuanji('scqhAcg_guishen');
					if (!storage) {
						player.draw();
					} else {
						trigger.parent.excluded.add(trigger.target);
						game.log(trigger.card, '对', trigger.target, '无效');
						var current = trigger.player == player ? trigger.target : trigger.player;
						if (current != player && current.countGainableCards(player, 'h')) {
							player.line(current, 'green');
							player.gainPlayerCard(current, 'h', true);
						}
					}
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							var att = get.attitude(player, target);
							var storage = player.storage.scqhAcg_guishen || false;
							if (storage) return [1, 0, 1, -0.5];
						},
						player(card, player, target, current) {
							var storage = player.storage.scqhAcg_guishen || false;
							if (!storage) return;
							if (target == player) return 1;
						},
					},
				},
			},
			scqhAcg_jianmie: {
				audio: 2,
				enable: 'phaseUse',
				filter(trigger, player) {
					var usable = player.getStat('skill').scqhAcg_jianmie || 0;
					usable++;
					if (player.countCards('he')) return true;
					if (usable <= player.hp) return true;
					return false;
				},
				filterCard: true,
				position: 'he',
				selectCard() {
					var player = _status.event.player;
					var usable = player.getStat('skill').scqhAcg_jianmie || 0;
					usable++;
					return [0, usable];
				},
				filterOk() {
					var player = _status.event.player;
					var usable = player.getStat('skill').scqhAcg_jianmie || 0;
					usable++;
					var uic = ui.selected.cards || [];
					var a = usable;
					var c = uic.length;
					var b = a - c;
					if (b >= player.hp) return false;
					return true;
				},
				check(card) {
					return 7 - get.value(card);
				},
				prompt() {
					var player = _status.event.player;
					var usable = player.getStat('skill').scqhAcg_jianmie || 0;
					usable++;
					var prompt = '弃置至多';
					prompt += get.cnNumber(usable);
					prompt += '张牌、流失「';
					prompt += usable;
					prompt += '-弃牌数」点体力';
					return prompt;
				},
				content() {
					'step 0';
					event.a = player.getStat('skill').scqhAcg_jianmie || 1;
					event.c = cards.length || 0;
					event.b = event.a - event.c;
					if (event.b > 0) player.loseHp(event.b);
					var next = player.chooseUseTarget({ name: 'sha' }, false, 'nodistance');
					next.set('prompt', '视为使用一张没有次数和距离限制的【杀】');
					var prompt = '';
					if (event.c > 0) {
						prompt += '●目标角色需要额外使用';
						prompt += get.cnNumber(event.c);
						prompt += '张【闪】才能抵消';
					}
					if (event.c > 0 && event.b > 0) {
						prompt += '<br/>';
					}
					if (event.b > 0) {
						prompt += '●伤害+';
						prompt += event.b;
					}
				},
				ai: {
					order(item, player) {
						return get.order({ name: 'sha' }, player) + 1;
					},
					result: {
						player(player) {
							var players = game.filterPlayer((current) => {
								var cardx = { name: 'sha' };
								var eff = get.effect(current, cardx, player, player);
								if (eff <= 0) return false;
								if (!player.canUse(cardx, current, false)) return false;
								return true;
							});
							if (!ui.selected.cards.length) return 0;
							return players.length;
						},
					},
				},
			},
			scqhAcg_yinmo: {
				chargeSkill: true,
				forced: true,
				trigger: {
					target: 'useCardToTarget',
				},
				filter(trigger, player) {
					var number = trigger.card.number;
					if (!number || typeof number !== 'number') return false;
					var num = Math.min(number, 9999 - player.countMark('charge'));
					return num > 0;
				},
				content() {
					var number = trigger.card.number;
					var num = Math.min(number, 9999 - player.countMark('charge'));
					player.addMark('charge', num, false);
				},
				group: ['scqhAcg_yinmo_changeHp'],
				subSkill: {
					changeHp: {
						forced: true,
						trigger: {
							player: 'changeHpBegin',
						},
						filter(trigger, player) {
							if (trigger.num >= 0) return false;
							var abs = Math.abs(trigger.num) * 10;
							if (abs > player.countMark('charge')) return false;
							return true;
						},
						content() {
							var abs = Math.abs(trigger.num) * 10;
							trigger.num = 0;
							player.removeMark('charge', abs, false);
						},
					},
				},
			},
			scqhAcg_霜妖: {},
			scqhAcg_雪女: {},
			scqhAcg_moxue: {
				zhuanhuanji: true,
				mark: false,
				intro: false,
				enable: 'phaseUse',
				filter(event, player) {
					var suits = player.storage.scqhAcg_moxue_suit || [];
					var list = [];
					for (var suit of suits) {
						if (list.includes(suit)) return false;
						list.push(suit);
					}
					return true;
				},
				content() {
					'step 0';
					event.skill = 'scqhAcg_moxue_suit';
					event.suits = player.storage[event.skill] || [];
					event.bool = player.storage[event.name];
					player.changeZhuanhuanji(event.name);
					var num = event.bool ? 2 : 1;
					player.draw(num);
					('step 1');
					var num = event.bool ? 1 : 2;
					var next = player.chooseToDiscard('h', num, true);
					next.set('ai', function (card) {
						if (event.suits.includes(card.suit)) return 8 - get.value(card);
						return 20 - get.value(card);
					});
					('step 2');
					if (result && result.bool && result.cards && result.cards.length) {
						player.addTempSkill(event.skill);
						var num = 0;
						for (var card of result.cards) {
							var suit = card.suit;
							if (event.suits.includes(suit) && !num) {
								event.suits.push(suit);
							}
							num++;
							event.suits.add(suit);
						}
						player.storage[event.skill] = event.suits;
						player.markSkill(event.skill);
					}
				},
				ai: {
					order: 2.7,
					result: {
						player(player) {
							if (!player.storage.scqhAcg_moxue && player.countCards('h') < 3) return 0;
							return 1;
						},
					},
				},
				subSkill: {
					suit: {
						mark: true,
						marktext: '❄️',
						intro: {
							content(storage, player, skill) {
								return get.translation(storage) || '🃏';
							},
						},
					},
				},
			},
			scqhAcg_tunke: {
				forced: true,
				trigger: {
					player: 'drawBegin',
				},
				content() {
					trigger.bottom = true;
				},
			},
			scqhAcg_xiongsha: {
				trigger: {
					global: ['useCardAfter'],
				},
				filter(trigger, player) {
					if (trigger.player != player) {
						let targets = trigger.targets || [];
						if (!targets.includes(player)) return false;
					}
					let cards = trigger.cards || [];
					if (!cards.length) return false;
					if (!cards.filterInD().length) return false;
					let history = player.getHistory('useCard', (evt) => {
						if (evt.card == trigger.card) return false;
						return get.type2(evt.card) == get.type2(trigger.card);
					});
					return !history.length;
				},
				prompt2(trigger, player) {
					var cards = trigger.cards.filterInD();
					return '你可以将' + get.translation(cards) + (cards.length > 1 ? '以任意顺序' : '') + '置于牌堆顶,摸一张牌';
				},
				check(trigger, player) {
					return 1;
				},
				content() {
					'step 0';
					var cards = trigger.cards.filterInD();
					if (cards.length == 1) {
						event._result = {
							bool: true,
							moved: [cards],
						};
					} else {
						var next = player.chooseToMove('胸刹:将牌按顺序置于牌堆顶', true);
						next.set('list', [['牌堆顶', cards]]);
						next.set('reverse', _status.currentPhase && _status.currentPhase.next ? get.attitude(player, _status.currentPhase.next) > 0 : false);
						next.set('processAI', function (list) {
							var cards = list[0][1].slice(0);
							cards.sort(function (a, b) {
								return (_status.event.reverse ? 1 : -1) * (get.value(b) - get.value(a));
							});
							return [cards];
						});
					}
					('step 1');
					if (result.bool) {
						var cards = result.moved[0];
						cards.reverse();
						game.cardsGotoPile(cards, 'insert');
						game.log(player, '将', cards, '置于了牌堆顶');
					}
					player.draw();
				},
				ai: {
					reverseOrder: true,
					skillTagFilter(player) {
						var tory = player.getHistory('useCard', function (evt) {
							return get.type(evt.card) == 'equip';
						});
						if (tory.length) return false;
					},
					effect: {
						target(card, player, target) {
							var tory = player.getHistory('useCard', function (evt) {
								return get.type(evt.card) == 'equip';
							});
							if (player == target && get.type(card) == 'equip' && !tory.length) return [1, 3];
						},
					},
				},
			},
			scqhAcg_kuangchan: {
				vcards(trigger, player) {
					const list = ['sha', 'shan', 'jiu', 'wuxie'];
					return list.filter((name) => {
						const card = {
							name: name,
							scqhAcg_kuangchan: true,
						};
						return trigger.filterCard(card, player, trigger);
					});
				},
				enable: 'chooseToUse',
				filter(trigger, player) {
					const list = lib.skill.scqhAcg_kuangchan.vcards(trigger, player);
					return list.length && player.countCards('hes') > 1;
				},
				chooseButton: {
					dialog(trigger, player) {
						const list = lib.skill.scqhAcg_kuangchan.vcards(trigger, player);
						const dialog = ui.create.dialog('狂禅', [list, 'vcard'], 'hidden');
						dialog.direct = true;
						return dialog;
					},
					check(button) {
						const player = _status.event.player;
						return player.getUseValue({
							name: button.link[2],
							nature: button.link[3],
						});
					},
					backup(links, player) {
						return {
							popname: true,
							filterCard(card, player, event) {
								const cards = ui.selected.cards || [];
								const color2 = get.color(card);
								if (cards.length) {
									const color1 = get.color(cards[0]);
									if (color1 === color2) return false;
								}
								return true;
							},
							selectCard() {
								return 2;
							},
							position: 'hes',
							check(card) {
								return 7 - get.value(card);
							},
							viewAs: {
								name: links[0][2],
								scqhAcg_kuangchan: true,
							},
							precontent() {
								player.addMark('scqhAcg_kuangchan', 1, false);
							},
						};
					},
					prompt(links, player) {
						var str = '你可以两张颜色不同的牌当【' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '】使用';
						return str;
					},
				},
				hiddenCard(player, name) {
					if (name === 'wuxie') return player.countCards('hes') > 1;
					return false;
				},
				ai: {
					respondSha: true,
					respondShan: true,
					save: true,
					order(item, player) {
						return 1;
					},
					result: {
						player: 1,
					},
				},
				mod: {
					cardUsable(card, player, num) {
						if (card.scqhAcg_kuangchan) return Infinity;
					},
				},
				intro: {
					content: '下次摸牌,多摸#张牌',
				},
				group: ['scqhAcg_kuangchan_draw'],
				subSkill: {
					draw: {
						forced: true,
						trigger: {
							player: 'drawBegin',
						},
						filter(trigger, player) {
							const num = player.countMark('scqhAcg_kuangchan');
							return num && typeof trigger.num === 'number';
						},
						content() {
							const num = player.countMark('scqhAcg_kuangchan');
							trigger.num += num;
							player.removeMark('scqhAcg_kuangchan', num, false);
						},
					},
				},
			},
			scqhAcg_dashou: {
				trigger: {
					player: 'damageBegin3',
				},
				filter(trigger, player) {
					if (trigger.source && trigger.source === player) return false;
					if (!player.countCards('he')) return false;
					return true;
				},
				check(trigger, player) {
					return 1;
				},
				content() {
					'step 0';
					event.cards = get.cards(trigger.num);
					game.cardsGotoOrdering(event.cards);
					player.showCards(event.cards, '牌堆顶');
					event.types = [];
					for (const card of event.cards) event.types.add(get.type2(card));
					('step 1');
					var next = player.chooseToDiscard('he', trigger.num, function (card) {
						const types = _status.event.types;
						return !types.includes(get.type2(card));
					});
					next.set('types', event.types);
					next.set('dialog', ['请弃置' + get.cnNumber(trigger.num) + '张非' + get.translation(event.types) + '牌,防止此次伤害', [event.cards, 'vcard']]);
					next.set('ai', function (card) {
						return 7 - get.value(card);
					});
					('step 2');
					if (result.bool) trigger.cancel();
				},
			},
			scqhAcg_juejing: {
				forced: true,
				trigger: {
					player: ['dying', 'dyingAfter'],
				},
				content() {
					player.draw();
				},
				mod: {
					maxHandcard(player, num) {
						return 2 + num;
					},
					aiOrder(player, card, num) {
						const evt = _status.event;
						if (num > 0 && evt && evt.type == 'phase' && get.tag(card, 'recover')) {
							if (player.needsToDiscard()) return num / 3;
							return 0;
						}
					},
				},
			},
			scqhAcg_jiwang: {
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
					let skill = 'scqhAcg_jiwang';
					let gamers = game.filterPlayer((current) => {
						if (current == player) return false;
						let string = lib.skill[skill].isJiwang(current);
						return string;
					});
					return gamers.length;
				},
				filterTarget(card, player, target) {
					if (target == player) return false;
					let skill = 'scqhAcg_jiwang';
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
						if (evt.filterCard && evt.filterCard(card, evt.player, evt)) {
							list.add(['', '', name]);
						}
						if (name != 'sha') continue;
						for (let nature of lib.inpile_nature) {
							card.nature = nature;
							if (evt.filterCard && evt.filterCard(card, evt.player, evt)) {
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
			scqhAcg_qifeng: {
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
			},
			scqhAcg_sixue: {
				trigger: {
					source: 'damageSource',
				},
				logTarget: 'player',
				filter(trigger, player) {
					let target = trigger.player;
					if (!target.isIn()) return false;
					if (target == player) return false;
					let target2 = player.storage.scqhAcg_sixue || false;
					if (!target2 || target2 != target) return true;
					if (target.countCards('he')) return true;
					return false;
				},
				check(trigger, player) {
					return true;
					let att = get.attitude(player, trigger.player);
					return -att;
				},
				content() {
					'step 0';
					var target = trigger.player;
					if (target.countCards('he')) {
						var next = player.choosePlayerCard(target, 'he', get.prompt(event.name, target));
						next.set('ai', function (button) {
							let card = button.link;
							let value = get.value(card);
							let player = _status.event.player;
							let target = _status.event.target;
							let att = get.attitude(player, target);
							if (att > 0) return 1 - value;
							else return value;
						});
						next.set('prompt', get.translation(event.name) + ':将' + get.translation(target) + '的一张牌置于你的武将牌上');
						next.set('target', target);
						next.set('forceAuto', true);
					} else {
					}
					('step 1');
					var target = trigger.player;
					var cards = result.cards || [];
					if (cards.length) {
						var next = player.addToExpansion('giveAuto', cards, target);
						next.gaintag.add(event.name);
					} else {
					}
					('step 2');
					var target = trigger.player;
					var target2 = player.storage[event.name] || false;
					if (target.isIn() && (!target2 || target2 != target)) {
						var next = player.chooseBool();
						next.set('ai', function () {
							let player = _status.event.player;
							let target = _status.event.target;
							let att = get.attitude(player, target);
							return 1 - att;
						});
						next.set('prompt', get.translation(event.name) + ':将' + get.translation(target) + '当做献给邪神的祭品');
						next.set('target', target);
					} else event.finish();
					('step 3');
					if (result.bool) {
						player.line(trigger.player, 'green');
						player.storage[event.name] = trigger.player;
					}
				},
				marktext: '司血',
				intro: {
					markcount: 'expansion',
					mark(dialog, storage, player) {
						let skill = 'scqhAcg_sixue';
						let xs = player.getExpansions(skill);
						let target = player.storage[skill] || false;
						if (target) dialog.addText(get.translation(target));
						if (xs.length) dialog.addAuto(xs);
					},
				},
			},
			scqhAcg_tongming: {
				forced: true,
				trigger: {
					player: 'damageEnd',
				},
				logTarget(trigger, player) {
					let target = player.storage.scqhAcg_sixue || false;
					if (target && target.isIn() && target != player) {
						return target;
					}
					return false;
				},
				filter(trigger, player) {
					let target = lib.skill.scqhAcg_tongming.logTarget(trigger, player);
					return target;
				},
				content() {
					'step 0';
					var judge = player.judge(function (card) {
						let skill = 'scqhAcg_sixue';
						let xs = player.getExpansions(skill);
						for (let x of xs) {
							if (x.number == card.number) {
								return -2;
							}
						}
						return 2;
					});
					judge.judge2 = function (result) {
						return result.bool;
					};
					('step 1');
					var target = lib.skill.scqhAcg_tongming.logTarget(trigger, player);
					if (result.judge > 0 && target) {
						var source = trigger.source || 'nosource';
						target.damage(trigger.num, trigger.nature, source);
					}
				},
				ai: {
					maixie: true,
					maixie_defend: true,
					effect: {
						target(card, player, target) {
							if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
							let targetx = lib.skill.scqhAcg_tongming.logTarget(null, target);
							let xs = target.getExpansions('scqhAcg_sixue');
							let list = [];
							for (let x of xs) list.add(x.number);
							if (!targetx || list.length >= 13) return;
							let eff = get.damageEffect(targetx, player, player);
							if (get.tag(card, 'damage') && eff > 0) return 1;
							return 0.8;
						},
					},
				},
			},
			scqhAcg_xietu: {
				forced: true,
				trigger: {
					player: 'dying',
				},
				filter(trigger, player) {
					return true;
				},
				content() {
					'step 0';
					player.recover(player.getDamagedHp());
					('step 1');
					var judge = player.judge(function (card) {
						let skill = 'scqhAcg_sixue';
						let xs = player.getExpansions(skill);
						for (let x of xs) {
							if (x.number == card.number) {
								return 2;
							}
						}
						return -2;
					});
					judge.judge2 = function (result) {
						return result.bool;
					};
					('step 2');
					if (result.judge > 0) player.loseMaxHp();
				},
				mod: {
					targetEnabled(card, player, target, now) {
						if (target == player && card.name == 'sha') {
							return true;
						}
					},
					targetInRange(card, player, target, now) {
						if (target == player && card.name == 'sha') {
							return true;
						}
					},
					cardUsableTarget(card, player, target) {
						if (target == player && card.name == 'sha') {
							return true;
						}
					},
				},
				group: ['scqhAcg_xietu_die'],
				subSkill: {
					die: {
						forced: true,
						trigger: {
							source: 'dieAfter',
						},
						filter(trigger, player) {
							if (trigger.player.isIn()) return false;
							return true;
						},
						content() {
							player.turnOver();
						},
					},
				},
			},
			scqhAcg_anliu: {
				hiddenSkill: true,
				group: ['scqhAcg_anliu_show', 'scqhAcg_anliu_hide'],
				subSkill: {
					show: {
						forced: true,
						trigger: {
							player: 'showCharacterAfter',
						},
						content() {
							var card = { name: 'sha', nature: 'stab' };
							var next = player.chooseUseTarget(false, card);
							next.prompt = get.prompt(event.name);
							next.prompt2 = '视为使用一张【刺杀】';
						},
					},
					hide: {
						trigger: {
							global: 'phaseAfter',
						},
						filter(trigger, player) {
							var source = player.getHistory('sourceDamage');
							var damage = player.getHistory('damage');
							var es = player.getCards('e');
							if (!es.length || source.length || damage.length) return false;
							return true;
						},
						check(trigger, player) {
							return true;
						},
						content() {
							var es = player.getCards('e');
							if (es.length) player.discard(es);
							player.scqh_hidePlayer();
						},
					},
				},
			},
			scqhAcg_xuedao: {
				audio: 'hanbing_skill',
				enable: 'chooseToUse',
				map(trigger, player) {
					let list = ['sha', 'jiu'];
					let map = {};
					map.hidden = [];
					map.vcards = [];
					for (let name of list) {
						let card = {};
						card.name = name;
						card.nature = 'ice';
						let suit = name == 'sha' ? 'club' : 'spade';
						let hs = player.getCards('hes', { suit: suit });
						if (!hs.length) continue;
						map.hidden.add(name);
						if (!trigger || !trigger.filterCard) continue;
						if (!trigger.filterCard(card, player, trigger)) continue;
						map.vcards.add(['', '', card.name, card.nature]);
					}
					return map;
				},
				hiddenCard(player, name) {
					let map = lib.skill.scqhAcg_xuedao.map(false, player);
					return map && map.hidden.includes(name);
				},
				filter(trigger, player) {
					let map = lib.skill.scqhAcg_xuedao.map(trigger, player);
					return map && map.vcards.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						let map = lib.skill.scqhAcg_xuedao.map(trigger, player);
						let dialog = ui.create.dialog('雪盗');
						dialog.add([map.vcards, 'vcard']);
						dialog.direct = true;
						return dialog;
					},
					filter(button, player) {
						let evt = _status.event.parent;
						let card = {};
						card.name = button.link[2];
						card.nature = button.link[3];
						return evt.filterCard(card, player, evt);
					},
					check(button) {
						let evt = _status.event;
						let card = {};
						card.name = button.link[2];
						card.nature = button.link[3];
						if (evt.parent.type != 'phase') return 1;
						return evt.player.getUseValue(card);
					},
					backup(links, player) {
						let name = links[0][2];
						let suit = name == 'sha' ? 'club' : 'spade';
						let bool = {
							audio: 'hanbing_skill',
							check(card) {
								return 10 - get.value(card);
							},
							position: 'hes',
							filterCard: {
								suit: suit,
							},
							viewAs: {
								name: name,
								nature: 'ice',
								scqhAcg_xuedao: true,
							},
							precontent() {
							},
						};
						return bool;
					},
					prompt(links, player) {
						let name = links[0][2];
						let nature = links[0][3];
						let suit = name == 'sha' ? 'club' : 'spade';
						let prompt = '';
						prompt += '将一张';
						prompt += get.translation(suit);
						prompt += '当做【';
						prompt += get.translation(nature) || '';
						prompt += get.translation(name) || '';
						prompt += '】使用';
						return prompt;
					},
				},
				ai: {
					respondSha: true,
					save: true,
					skillTagFilter(player, tag, arg) {
						return;
					},
					order(item, player) {
						return 1;
					},
					result: {
						player: 1,
					},
				},
				group: ['scqhAcg_xuedao_ice'],
				subSkill: {
					ice: {
						audio: 'hanbing_skill',
						forceDie: true,
						trigger: {
							player: 'useCardToPlayered',
						},
						filter(trigger, player) {
							return game.hasNature(trigger.card, 'ice');
						},
						logTarget: 'target',
						check(trigger, player) {
							let target = trigger.target;
							let att = get.attitude(player, target);
							let count = target.countDiscardableCards(player, 'he');
							let turned = target.isTurnedOver();
							let dhp = player.maxHp - player.hp;
							let hs = player.countCards('h');
							if (att > 0) {
								if (player == target && player.hasSkill('scqhAcg_shuangshi')) {
									if (hs && hs <= dhp) {
										if (player.hp > 2 && turned) return 3;
										else if (turned) return 2;
										else return 1;
									}
								} else if (turned) return 2;
							} else if (count && !turned && player.hp > 1) return 3;
							else if (!turned) return 2;
							else if (count) return 1;
							return 0;
						},
						content() {
							'step 0';
							var list2 = ['令' + get.translation(trigger.target) + '摸两张牌并翻面', '弃置' + get.translation(trigger.target) + '的一张牌', '背水!失去一点体力,全部执行'];
							var list = [];
							if (trigger.target.countDiscardableCards(player, 'he')) {
								list.push('选项一');
							}
							list.push('选项二');
							if (list.length >= 2) list.push('背水!');
							if (list.length > 1) {
								var next = player.chooseControl(list);
								next.set('choiceList', list2);
								next.set('target', trigger.target);
								next.set('xuanze', list);
								var check = lib.skill[event.name].check(trigger, player) || 0;
								next.set('check', check);
								next.set('ai', function () {
									let check = _status.event.check;
									if (check == 1) return '选项一';
									else if (check == 2) return '选项二';
									else if (check == 3) return '背水!';
									return '选项二';
								});
							} else if (list.length) {
								event._result = {};
								event._result.control = list[0];
							} else event.finish();
							('step 1');
							event.control = result.control;
							if (event.control == '背水!') {
								game.log(player, '选择了', '#g背水一战!');
								player.popup('背水一战');
								player.loseHp();
							}
							('step 2');
							if (event.control == '选项一' || event.control == '背水!') {
								trigger.target.draw(2);
								trigger.target.turnOver();
							}
							('step 3');
							if (event.control == '选项二' || event.control == '背水!') {
								if (trigger.target.countDiscardableCards(player, 'he')) {
									player.line(trigger.target);
									player.discardPlayerCard('he', trigger.target, true);
								}
							}
						},
					},
				},
			},
			scqhAcg_shuangshi: {
				audio: 'hanbing_skill',
				forced: true,
				trigger: {
					player: ['loseEnd', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(trigger, player) {
					let dhp = player.getDamagedHp();
					let hs = player.countCards('h');
					return hs < dhp;
				},
				content() {
					let dhp = player.getDamagedHp();
					player.drawTo(dhp);
				},
				ai: {
					noh: true,
					skillTagFilter(player, tag) {
						if (tag == 'noh' && player.maxHp - player.hp < player.countCards('h')) {
							return false;
						}
					},
				},
				group: ['scqhAcg_shuangshi_ice'],
				subSkill: {
					ice: {
						audio: 'hanbing_skill',
						forced: true,
						trigger: {
							player: 'damageBefore',
						},
						filter(trigger, player) {
							return !trigger.hasNature();
						},
						content() {
							game.setNature(trigger, 'ice');
						},
					},
				},
			},
			scqhAcg_qingnang: {
				enable: 'phaseUse',
				filterCard: {
					color: 'red',
				},
				check(card) {
					return 9 - get.value(card);
				},
				filterTarget(card, player, target) {
					if (target.hp >= target.maxHp) return false;
					return true;
				},
				async content(event, trigger, player) {
					event.target.recover();
				},
				ai: {
					order: 9,
					result: {
						target(player, target) {
							if (target.hp == 1) return 5;
							if (player == target && player.countCards('h') > player.hp) return 5;
							return 2;
						},
					},
					threaten: 2,
				},
			},
		},
		translate: {
			scqhAcg_guishen: '鬼神',
			scqhAcg_guishen_info: '转换技,当你使用牌指定一个目标后,或成为其他角色使用牌的目标后,阳:你可以摸一张牌;阴:你可以防止此牌对该目标角色生效,获得对方的一张手牌.',
			scqhAcg_jianmie: '歼灭',
			scqhAcg_jianmie_info: [
				'出牌阶段,你可以弃置至多Ａ张牌、流失Ｂ点体力,你可以视为使用一张无距离和次数限制的【杀】.',
				'●Ａ为你于本回合内发动过此技能的次数+1',
				'●Ｂ为Ａ-Ｃ',
				'●Ｃ为本次弃牌数',
			].join('</br>'),
			scqhAcg_yinmo: '淫魔',
			scqhAcg_yinmo_info: '锁定技,蓄力技(０／９９９９９),当你成为牌的目标后,你获得与此牌点数相等的蓄力值.当你的体力值减少时,你消耗Ｘ点蓄力值,抵消之(Ｘ为即将减少的体力值的十倍).',
			scqhAcg_moxue: '摸雪',
			scqhAcg_moxue_info: '转换技,出牌阶段,若你每次以此法弃置的牌之中,不包含你本回合内以此法弃置的其余牌的花色,阴:你可以摸一张牌,弃置两张手牌.阳:你可以摸两张牌,弃置一张手牌.',
			visible_scqhAcg_moxue: '摸雪',
			scqhAcg_tunke: '臀刻',
			scqhAcg_tunke_info: '锁定技,当你摸牌时,改为从牌堆底摸牌.',
			scqhAcg_xiongsha: '胸刹',
			scqhAcg_xiongsha_info: '当你使用一张牌结算结束后,或其他角色使用的目标中包含你的牌结算结束后,若此牌与你本回合使用的牌类型均不同且位于弃牌堆中,则你可以将此牌置于牌堆顶,摸一张牌.',
			scqhAcg_kuangchan: '狂禅',
			scqhAcg_kuangchan_info: '你可以将两张颜色不同的牌当【杀】／【闪】／【酒】／【无懈可击】使用且不受次数限制;若如此做,当你下次摸牌时,额外摸一张牌.',
			scqhAcg_juejing: '绝境',
			scqhAcg_juejing_info: '锁定技,当你进入或脱离濒死状态时,你摸一张牌;你的手牌上限+2.',
			scqhAcg_dashou: '大受',
			scqhAcg_dashou_info: '当你受到来源不为你的伤害时,你可以亮出牌堆顶的Ｘ张牌,你可以弃置Ｘ张花色与之不同的牌(Ｘ为此次伤害值);若如此做,防止此次伤害.',
			scqhAcg_jiwang: '既往',
			scqhAcg_jiwang_info: '出牌阶段限一次,你可以令一名其他角色视为使用其使用过的上一张基本牌或普通锦囊牌,你可以视为使用其本回合未使用过的一张基本牌或普通锦囊牌.',
			scqhAcg_qifeng: '起风',
			scqhAcg_qifeng_info: '准备阶段,你可以选择任意名角色,令每名目标角色依次选择并执行一项:①将一张牌交给下一名目标角色;②失去一点体力并摸一张牌.结算完成后,你可以令选择某一项的所有角色依次使用一张基本牌.',
			scqhAcg_sixue: '司血',
			scqhAcg_sixue_info: '当你对一名其他角色造成伤害后,你可以将其一张牌置于你的武将牌上(无牌则跳过此步骤),你可以标记该角色(你只能标记一名角色,新覆盖旧).',
			scqhAcg_tongming: '同命',
			scqhAcg_tongming_info: '锁定技,当你受到伤害后,你进行判定.若你没有与判定结果的点数相同的司血牌,则你用〖司血〗标记的角色受到相同属性的等额伤害.',
			scqhAcg_xietu: '邪徒',
			scqhAcg_xietu_info: '锁定技,你对自己使用【杀】合法且不受次数限制.当你处于濒死状态时,你回复体力至体力上限,你进行判定:若你有与判定结果的点数相同的司血牌,则你减１点体力上限.当你击杀一名角色后,你翻面.',
			scqhAcg_anliu: '暗流',
			scqhAcg_anliu_info: '隐匿技.①当你登场后,你可以视为使用一张刺【杀】.②你未造成过伤害且未受到过伤害的回合结束时,你可以弃置装备区内的所有牌,进入隐匿状态.',
			scqhAcg_xuedao: '雪盗',
			scqhAcg_xuedao_info: '你可以将♣️️牌当做冰【杀】、♠️️牌当做冰【酒】使用.当你使用冰属性牌指定一个目标时,你可以选择一项:⒈令其摸两张牌并翻面;⒉弃置其一张牌;⒊背水!失去一点体力.',
			scqhAcg_shuangshi: '霜逝',
			scqhAcg_shuangshi_info: '锁定技,当你的手牌数小于Ｘ时,你摸牌至Ｘ张手牌(Ｘ为你已损失的体力值).你即将受到的无属性伤害均视作冰属性.',
			scqhAcg_qingnang: '青囊',
			scqhAcg_qingnang_info: '出牌阶段,你可以弃置一张红色牌并令一名角色回复一点体力值.',
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

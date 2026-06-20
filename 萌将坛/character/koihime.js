'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqhKoihime_kuanggu: {
				inherit: 'xinkuanggu',
			},
			scqhKoihime_aosi: {
				trigger: {
					player: 'useCard',
				},
				filter(trigger, player) {
					const players = game.filterPlayer((current) => {
						if (current === player) return false;
						return current.countDiscardableCards(player, 'he');
					});
					if (!players.length) return false;
					if (get.type(trigger.card) === 'trick') return true;
					if (trigger.card.name === 'sha') return true;
					return false;
				},
				cost: async function (event, trigger, player) {
					const skillname = 'scqhKoihime_aosi';
					event.result = player
						.chooseTarget(function (card, player, current) {
							if (current === player) return false;
							return current.countDiscardableCards(player, 'he');
						})
						.set('prompt', get.prompt2(skillname))
						.set('triggerx', trigger)
						.set('ai', function (target) {
							const player = _status.event.player;
							const trigger = _status.event.triggerx;
							const list = ['guohe', 'shunshou', 'zhujinqiyuan'];
							var eff = get.effect(target, { name: 'guohe' }, player, player);
							if (!player.countCards('hs', { name: 'tao' })) eff -= 5;
							if (list.includes(trigger.card.name)) {
								const targets = trigger.targets || [];
								if (targets.includes(target) && target.countCards('he') === 1) return 0;
							}
							if (player.hp === 1) {
								if (!player.countCards('hs', { name: 'jiu' })) return 0;
							}
							return eff;
						})
						.forResult();
				},
				content: async function (event, trigger, player) {
					player.discardPlayerCard(event.targets[0], get.translation(event.name), true, 'he');
					player
						.when('useCardAfter')
						.filter((evtx) => {
							const damaged = player.hasHistory('sourceDamage', function (evt) {
								const card = evt.card;
								const evt2 = evt.getParent('useCard');
								if (!card || !evt2 || !evt2.card) return false;
								return evt2.card === card && evt2 === trigger;
							});
							return evtx === trigger && !damaged;
						})
						.then(() => {
							player.loseHp();
						});
				},
			},
			scqhKoihime_wangxi: {
				trigger: {
					player: 'damageEnd',
					source: 'damageSource',
				},
				filter(trigger, player) {
					if (!trigger.source || !trigger.player) return false;
					if (!trigger.source.isIn() || !trigger.player.isIn()) return false;
					if (trigger.source === trigger.player) return false;
					return true;
				},
				getIndex(event, player, triggername) {
					return Math.min(event.num, 9) || 1;
				},
				check(trigger, player) {
					if (player.isPhaseUsing()) return true;
					if (trigger.player == player) return get.attitude(player, trigger.source) > -5;
					return get.attitude(player, trigger.player) > -5;
				},
				line: false,
				logTarget(trigger, player) {
					if (trigger.player == player) return trigger.source;
					return trigger.player;
				},
				preHidden: true,
				async content(event, trigger, player) {
					await player.draw(2);
					if (player.countCards('he')) {
						const target = lib.skill[event.name].logTarget(trigger, player);
						const next = player.chooseCard('he', function (card) {
							return true;
						});
						var prompt = '忘隙:交给';
						prompt += get.translation(target);
						prompt += '一张牌';
						if (target.hp < target.maxHp) {
							prompt += '或令其回复一点体力';
						} else {
							next.set('forced', true);
						}
						next.set('prompt', prompt);
						const result = (await next).result;
						const cards = result.cards || [];
						if (cards.length) {
							await player.give(cards, target);
						} else {
							player.line(target);
							await target.recover();
						}
					}
				},
				ai: {
					maixie: true,
					maixie_hp: true,
				},
			},
			scqhKoihime_xunxun: {
				audio: 2,
				trigger: { player: 'phaseDrawBegin1' },
				preHidden: true,
				content() {
					'step 0';
					var cards = get.cards(4);
					game.cardsGotoOrdering(cards);
					var next = player.chooseToMove('恂恂：将两张牌置于牌堆顶', true);
					next.set('list', [['牌堆顶', cards], ['牌堆底']]);
					next.set('filterMove', function (from, to, moved) {
						if (to == 1 && moved[1].length >= 2) return false;
						return true;
					});
					next.set('filterOk', function (moved) {
						return moved[1].length == 2;
					});
					next.set('processAI', function (list) {
						var cards = list[0][1].slice(0).sort(function (a, b) {
							return get.value(b) - get.value(a);
						});
						return [cards, cards.splice(2)];
					});
					('step 1');
					var top = result.moved[0];
					var bottom = result.moved[1];
					top.reverse();
					for (var i = 0; i < top.length; i++) {
						ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
					}
					for (i = 0; i < bottom.length; i++) {
						ui.cardPile.appendChild(bottom[i]);
					}
					game.updateRoundNumber();
				},
			},
			scqhKoihime_zhenggu: {
				forced: true,
				trigger: {
					global: 'drawBegin',
				},
				logTarget: 'player',
				filter(trigger, player) {
					if (trigger.player == player) return false;
					if (!trigger.player.countCards('he')) return false;
					var evt = trigger.getParent('phaseDraw');
					if (evt && evt.name == 'phaseDraw') return false;
					return true;
				},
				content() {
					var next = trigger.player.chooseToDiscard('he', true);
					next.prompt = get.translation(event.name);
					next.prompt += '(';
					next.prompt += trigger.player == player ? '你' : get.translation(player);
					next.prompt += ')';
					next.prompt += ':请弃置一张牌';
				},
			},
			scqhKoihime_lijian: {
				getCards(event) {
					var cards = [];
					game.countPlayer2(function (current) {
						current.checkHistory('lose', function (evt) {
							if (evt.position == ui.discardPile && evt.getParent('phaseDiscard') == event) {
								cards.addArray(evt.cards);
							}
						});
					});
					game.checkGlobalHistory('cardMove', function (evt) {
						if (evt.name == 'cardsDiscard' && evt.getParent('phaseDiscard') == event) {
							cards.addArray(evt.cards);
						}
					});
					return cards.filterInD('d');
				},
				trigger: {
					global: 'phaseDiscardEnd',
				},
				filter(trigger, player) {
					if (trigger.player == player || !trigger.player.isIn()) return false;
					var cards = lib.skill.scqhKoihime_lijian.getCards(trigger) || [];
					return cards.length;
				},
				prompt2() {
					return '选择任意张本阶段进入弃牌堆的牌令其获得,你获得剩余的牌,若其获得的牌数大于你,你可以对其造成1点伤害';
				},
				logTarget: 'player',
				content() {
					'step 0';
					var cards = lib.skill.scqhKoihime_lijian.getCards(trigger) || [];
					var target = trigger.player;
					event.cards = cards;
					event.target = target;
					var next = player.chooseToMove('力荐:请分配' + get.translation(target) + '和你获得的牌', true);
					next.set('cards', cards);
					next.set('list', [[get.translation(target) + '获得的牌', cards], ['你获得的牌']]);
					next.set('processAI', function (list) {
						var player = _status.event.player;
						var target = _status.event.getTrigger().player;
						var att = get.attitude(player, target);
						var cards = _status.event.cards;
						var cardx = cards.filter((card) => card.name == 'du');
						var cardy = cards.removeArray(cardx);
						switch (get.sgn(att)) {
							case 1: {
								return [cards, []];
							}
							case 0: {
								return [cardx, cardy];
							}
							case -1: {
								var num = Math.ceil(cards.length / 2) + (cards.length % 2 == 0 ? 1 : 0);
								var deff = get.damageEffect(target, player, player);
								if (deff <= 0 || num > 2 || cardx.length > cardy.length) {
									return [cardx, cardy];
								}
								var num2 = cardy.length - cardx.length;
								num2 = Math.ceil(num2 / 2) + (num2 % 2 == 0 ? 1 : 0);
								cardy.sort((a, b) => get.value(b) - get.value(a));
								cardx.addArray(cardy.slice(num, cardy.length));
								return [cardx, cardy.slice(0, num)];
							}
						}
					});
					('step 1');
					if (result.bool) {
						var card0 = result.moved[0] || [];
						var card1 = result.moved[1] || [];
						if (card0.length) target.gain(card0, 'gain2');
						if (card1.length) player.gain(card1, 'gain2');
						if (card0.length > card1.length) {
							var next = player.chooseBool(get.translation(event.name) + ':是否对' + get.translation(target) + '造成1点伤害？');
							next.set('choice', get.damageEffect(target, player, player) > 0);
						} else event.finish();
					} else event.finish();
					('step 2');
					if (result.bool) {
						player.line(target);
						target.damage();
					}
				},
			},
			scqhKoihime_kaizeng: {
				forced: true,
				trigger: {
					player: 'phaseDrawBegin2',
				},
				filter(trigger, player) {
					return !trigger.numFixed;
				},
				check(trigger, player) {
					return 1;
				},
				content() {
					trigger.num += 1;
					var count = player.countMark('scqhKoihime_kaizeng');
					if (count) {
						trigger.num += count;
						player.removeMark('scqhKoihime_kaizeng', count, false);
					}
				},
				global: ['scqhKoihime_kaizeng_want'],
				kaizeng(player) {
					var targets = game.filterPlayer((current) => {
						if (current == player) return false;
						if (!current.countCards('he')) return false;
						if (!current.hasSkill('scqhKoihime_kaizeng')) return false;
						return true;
					});
					return targets;
				},
				subSkill: {
					want: {
						popup: false,
						log: false,
						charlotte: true,
						limited: true,
						enable: 'phaseUse',
						usable: 1,
						filter(trigger, player) {
							var targets = lib.skill.scqhKoihime_kaizeng.kaizeng(player);
							return targets.length;
						},
						filterTarget(card, player, target) {
							var targets = lib.skill.scqhKoihime_kaizeng.kaizeng(player);
							return targets.includes(target);
						},
						selectTarget() {
							var player = _status.event.player;
							var targets = lib.skill.scqhKoihime_kaizeng.kaizeng(player);
							return targets.length == 1 ? [-1, -1] : [1, 1];
						},
						prompt(trigger, player) {
							var str = '声明一种牌的类型并且令';
							var targets = lib.skill.scqhKoihime_kaizeng.kaizeng(player);
							str += get.translation(targets);
							if (targets.length > 1) str += '中的一名角色';
							str += '交给你任意张牌';
							return str;
						},
						content() {
							'step 0';
							game.log(player, '请求', target, '发动', '#g【慨赠】');
							player.popup('慨赠');
							var list = ['basic', 'trick', 'equip'];
							for (let i of list) {
								if (!lib.card[i]) lib.card[i] = {};
								if (!lib.card[i].type) lib.card[i].type = i;
								if (!lib.card[i].image) lib.card[i].image = 'ext:' + lib.scqhExtension + '/skin/card/cardback_' + i + '.png';
							}
							var str = '声明一种类型';
							var next = player.chooseButton([str, [list, 'vcard']], [1, 1]);
							next.set('forced', true);
							next.set('target', target);
							next.set('ai', function (button) {
								let player = _status.event.player;
								let target = _status.event.target;
								let cards = target.getCards('h');
								if (!cards.length) return 0;
								for (let card of cards) {
									if (get.type2(card) == button.link[2]) return 1;
								}
								return 0;
							});
							('step 1');
							var types = (result.links || []).map((card) => card[2]) || [];
							var type = types[0] || false;
							event.type = type;
							if (type) {
								var str = '我需要';
								str += get.translation(type);
								str += '牌';
								player.chat(str);
								var next = target.chooseCard('he', [1, Infinity]);
								next.prompt = '慨赠:你可以交给';
								next.prompt += get.translation(player);
								next.prompt += '任意张牌,若这些牌中包含';
								next.prompt += get.translation(type);
								next.prompt += '牌,则下个摸牌阶段,你多摸一张牌.';
								next.type = type;
								next.target = player;
								next.goon = get.attitude(target, player) > 0;
								next.set('ai', (card) => {
									var goon = _status.event.goon || 0;
									var value = get.value(card);
									if (goon <= 0) return -value;
									var player = _status.event.player;
									var target = _status.event.target;
									var uic = ui.selected.cards || [];
									if (uic.length > player.countCards('h') / 2 && uic.length >= 2) {
										return 0;
									}
									var type = _status.event.type;
									if (type == get.type2(card, false)) return value;
									return 0;
								});
							} else event.finish();
							('step 2');
							var cards = result.cards || [];
							if (cards.length) {
								target.give(cards, player);
								var cardx = cards.filter((card) => {
									return get.type2(card) == event.type;
								});
								if (cardx.length) target.addMark('scqhKoihime_kaizeng', 1, false);
							} else {
								var list = ['不给', '拒绝'];
								if (get.attitude(target, player) < 0) list.push('没门');
								target.chat(list.randomGet());
							}
						},
						ai: {
							order: 10,
							result: {
								player(player, target) {
									var att = get.attitude(player, target);
									return att > 0;
								},
							},
						},
					},
				},
				ai: {
					threaten: 3,
				},
			},
			scqhKoihime_dimeng: {
				enable: 'phaseUse',
				usable: 11,
				filterCard(card, player) {
					var targets = ui.selected.targets || [];
					var uic = ui.selected.cards || [];
					if (targets.length != 2) return false;
					var cardOne = targets[0].countCards('h');
					var cardTwo = targets[1].countCards('h');
					var abs = Math.abs(cardOne - cardTwo);
					if (abs <= uic.length) return false;
					return true;
				},
				filterOk() {
					var player = _status.event.player;
					var targets = ui.selected.targets || [];
					var uic = ui.selected.cards || [];
					if (targets.length != 2) return false;
					var cardOne = targets[0].countCards('h');
					var cardTwo = targets[1].countCards('h');
					var abs = Math.abs(cardOne - cardTwo);
					return abs == uic.length;
				},
				position: 'he',
				selectCard: [0, Infinity],
				complexCard: true,
				selectTarget: 2,
				filterTarget(card, player, target) {
					var uit = ui.selected.targets || [];
					var hehs = target.countCards('h');
					var mehs = player.countCards('h');
					if (uit.length) {
						var hsx = uit[0].countCards('h');
						if (uit[0] == player) {
							if (mehs < hehs) return false;
						} else if (target == player) {
							if (mehs < hsx) return false;
						}
					}
					return true;
				},
				multitarget: true,
				multiline: true,
				content() {
					targets[0].swapHandcards(targets[1]);
				},
				inherit: 'dimeng',
			},
			scqhKoihime_dengfeng: {
				trigger: {
					player: 'phaseZhunbei',
				},
				list() {
					const list = [];
					const players = game.filterPlayer((target) => target.countCards('e'));
					if (players.length) list.add('将一名角色装备区里的至多两张牌置于牌堆顶');
					const card = get.discardPile((card) => card.name == 'sha');
					if (card) list.add('将弃牌堆里的一张【杀】置于牌堆顶');
					if (list.length > 1) list.add('背水');
					return list;
				},
				filter(trigger, player) {
					const list = lib.skill.scqhKoihime_dengfeng.list();
					return list.length;
				},
				check() {
					return 1;
				},
				content: async function (event, trigger, player) {
					const list = lib.skill.scqhKoihime_dengfeng.list();
					const players = game.filterPlayer((target) => {
						const att = get.attitude(player, target);
						const eff = get.effect(target, { name: 'guohe' }, player, player);
						if (eff <= 0) return false;
						return target.countCards('e');
					});
					const result = await player
						.chooseControl(list)
						.set('players', players)
						.set('list', list)
						.set('prompt', '选择一项')
						.set('ai', () => {
							var players = _status.event.players;
							var list = _status.event.list;
							if (list.length > 1) {
								if (!players.length) return 1;
							}
							return 0;
						})
						.forResult();
					const string = result.control || '';
					if (string.includes('背水')) await player.loseHp();
					if (string.includes('背水') || string.includes('装备区')) {
						const result2 = await player
							.chooseTarget(true, function (card, player, target) {
								return target.countCards('e');
							})
							.set('prompt', '选择一名装备区里有牌的角色')
							.set('ai', function (target) {
								const player = _status.event.player;
								const att = get.attitude(player, target);
								return att <= 0;
							})
							.forResult();
						const targets = result2.targets || [];
						if (targets.length) {
							const target = targets[0];
							const result3 = await player
								.choosePlayerCard([1, 2], true, target, 'e')
								.set('prompt', '登峰')
								.set('ai', function (button) {
									let target = _status.event.target;
									let card = button.link;
									let val = get.value(card, target);
									if (card == target.getEquip(2)) return 2 * (val + 3);
									return val;
								})
								.forResult();
							const cards = result3.cards || [];
							if (cards.length) {
								game.log(player, '将', cards, '置于了牌堆顶');
								await target.lose(cards, ui.cardPile, 'insert');
								await target.draw(cards.length);
							}
						}
					}
					if (string.includes('背水') || string.includes('弃牌堆')) {
						const card = get.discardPile((card) => card.name == 'sha');
						if (card) {
							game.log(player, '将', card, '置于了牌堆顶');
							await game.cardsGotoPile([card], 'insert');
							await player.draw();
						}
					}
				},
			},
			scqhKoihime_tuxi: {
				forced: true,
				preHidden: true,
				trigger: {
					player: 'drawAfter',
				},
				filter(trigger, player) {
					if (!trigger.num || trigger.num <= 0) return false;
					if (!player.countCards('he')) return false;
					const players = game.filterPlayer((target) => {
						return target != player && target.countCards('h');
					});
					return players.length;
				},
				content() {
					'step 0';
					var players = game.filterPlayer((target) => {
						return target != player && target.countCards('h');
					});
					var num = Math.min(trigger.num, players.length);
					player.chooseCardTarget({
						complexSelect: true,
						prompt: get.prompt2(event.name),
						filterCard: true,
						position: 'he',
						filterTarget(card, player, target) {
							if (!target.countCards('h')) return false;
							return target != player;
						},
						selectCard: [1, num],
						selectTarget() {
							const cards = ui.selected.cards || [];
							return [cards.length, cards.length];
						},
						ai1(card) {
							const player = _status.event.player;
							return 7 - get.value(card);
						},
						ai2(target) {
							const player = _status.event.player;
							const att = get.attitude(player, target);
							return att <= 0;
						},
					});
					('step 1');
					if (result.bool) {
						var targets = result.targets || [];
						var cards = result.cards || [];
						if (cards.length) {
							player.loseToDiscardpile(cards);
						}
						if (targets.length) {
							targets.sortBySeat();
							player.gainMultiple(targets, 'he');
						}
					}
				},
				ai: {
					threaten: 1.6,
					expose: 0.2,
				},
			},
			scqhKoihime_zhengbing: {
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					return player.countCards('he');
				},
				filterCard(card, player) {
					var uic = ui.selected.cards || [];
					var type = get.type2(card);
					if (uic.length) {
						if (type != get.type2(uic[0])) return false;
					}
					return player.canRecast(card);
				},
				position: 'he',
				discard: false,
				lose: false,
				delay: false,
				selectCard: [1, Infinity],
				check(card) {
					let player = _status.event.player;
					return 7 - get.value(card);
				},
				content() {
					player.recast(cards);
				},
				ai: {
					order: 7,
					result: {
						player: 1,
					},
				},
			},
			scqhKoihime_zhichi: {
				forced: true,
				trigger: {
					player: 'changeHp',
				},
				filter(trigger, player) {
					var current = _status.currentPhase;
					if (current && current == player) return false;
					if (player.hasSkill('scqhKoihime_zhichi_noTarget')) return false;
					return true;
				},
				content() {
					player.addTempSkill('scqhKoihime_zhichi_noTarget', ['phaseAfter', 'phaseBefore']);
				},
				subSkill: {
					noTarget: {
						forced: true,
						charlotte: true,
						trigger: {
							target: 'useCardToBefore',
						},
						filter(trigger, player) {
							if (!player.hasSkill('scqhKoihime_zhichi')) return false;
							return get.type(trigger.card) == 'trick' || trigger.card.name == 'sha';
						},
						content() {
							game.log(player, '发动了智迟,', trigger.card, '对', trigger.target, '失效');
							trigger.cancel();
						},
						mark: true,
						intro: {
							content: '杀或普通锦囊牌对你无效',
						},
						ai: {
							effect: {
								target(card, player, target, current) {
									if (get.type(card) == 'trick' || card.name == 'sha') return 'zeroplayertarget';
								},
							},
						},
					},
				},
			},
			scqhKoihime_mingce: {
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					var gamers = game.filterPlayer((current) => {
						return player != current;
					});
					return gamers.length >= 2 && player.countCards('he');
				},
				filterCard: true,
				position: 'he',
				check(card) {
					var value = get.value(card);
					return 8 - value;
				},
				filterTarget(card, player, target) {
					if (player == target) return false;
					var uit = ui.selected.targets || [];
					if (uit.length && uit[0] == target) return false;
					return true;
				},
				selectTarget: 2,
				targetprompt: ['得到牌', '被杀目标'],
				multitarget: true,
				discard: false,
				lose: false,
				delay: false,
				content() {
					'step 0';
					player.give(cards, targets[0], 'visible');
					('step 1');
					var source = targets[0];
					var targetx = targets[1];
					if (!source.canUse({ name: 'sha' }, targetx, false)) {
						event._result = { control: '选项二' };
					} else {
						var next = source.chooseControl();
						next.set('ai', function () {
							var source = _status.event.player;
							var targetx = _status.event.targetx;
							var eff = get.effect(targetx, { name: 'sha' }, source, source);
							return eff > 0 ? 0 : 1;
						});
						next.set('choiceList', ['视为对' + get.translation(targetx) + '使用一张【杀】', '你与' + get.translation(player) + '各摸一张牌']);
						next.set('targetx', targetx);
						next.set('prompt', '对' + get.translation(targetx) + '使用一张杀,或摸一张牌');
					}
					('step 2');
					var control = result.control;
					if (control == '选项二') {
						game.asyncDraw([player, targets[0]]);
						event.finish();
					} else {
						targets[0].useCard({ name: 'sha' }, targets[1]);
					}
				},
				ai: {
					result: {
						player(player) {
							var players = game.filterPlayer();
							for (const i of players) {
								var att1 = get.attitude(player, i);
								var att2 = get.attitude(i, player);
								if (i != player && att1 > 1 && att2 > 1) {
									return 1;
								}
							}
							return 0;
						},
						target(player, target) {
							var uit = ui.selected.targets || [];
							if (uit.length) return -0.1;
							return 1;
						},
					},
					order: 8.5,
					expose: 0.2,
				},
			},
			scqhKoihime_feita: {
				forced: true,
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				content() {
					var next = player.chooseUseTarget({ name: 'sha' }, false, 'nodistance');
					next.prompt = get.prompt(event.name);
					next.prompt2 = '视为使用一张没有距离限制的【杀】';
				},
				ai: {
					threaten(player, target) {
						return 1.6;
					},
				},
				group: ['scqhKoihime_feita_damage'],
				subSkill: {
					damage: {
						log: false,
						popup: false,
						trigger: {
							source: 'damageBegin1',
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							if (!trigger.player.countCards('he')) return false;
							if (!trigger.card || trigger.card.name != 'sha') return false;
							var evt = trigger.getParent('scqhKoihime_feita');
							return evt && evt.name == 'scqhKoihime_feita';
						},
						check(trigger, player) {
							var deff = get.damageEffect(trigger.player, player, player);
							var noe = trigger.player.hasSkillTag('noe');
							var has = trigger.player.hasCard(function (card) {
								return get.value(card) > 6;
							}, 'he');
							return deff < 0 || (!noe && has);
						},
						prompt(trigger, player) {
							var str = '飞踏:是否获得';
							str += get.translation(trigger.player);
							str += '的一张牌,令此伤害-1？';
							return str;
						},
						content() {
							player.popup('飞踏');
							trigger.num--;
							player.gainPlayerCard(trigger.player, 'he', true);
						},
					},
				},
			},
			scqhKoihime_zuishu: {
				audio: 2,
				forced: true,
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(trigger, player) {
					if (player.countCards('h')) return false;
					var evt = trigger.getl(player);
					return evt && evt.hs && evt.hs.length;
				},
				content() {
					player.draw();
				},
				xcontent() {
					'step 0';
					var num = trigger.getl(player).hs.length;
					player.chooseTarget(get.prompt(event.name), '令至多' + get.cnNumber(num) + '名角色各摸一张牌', [1, num]).ai = function (target) {
						var player = _status.event.player;
						if (player == target) return get.attitude(player, target) + 10;
						return get.attitude(player, target);
					};
					('step 1');
					if (result.bool) {
						game.asyncDraw(result.targets);
					} else event.finish();
					('step 2');
				},
				ai: {
					threaten: 0.8,
					effect: {
						target(card) {
							if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
						},
					},
					noh: true,
				},
			},
			scqhKoihime_dushi: {
				audio: 1,
				enable: 'phaseUse',
				viewAs: {
					name: 'yiyi',
				},
				usable: 4,
				filterCard: {
					color: 'red',
				},
				position: 'hes',
				filter(trigger, player) {
					var hs = player.getCards('hes', (card) => {
						return get.color(card) == 'red';
					});
					var hasUse = player.getCards('h', (card) => {
						return player.hasUseTarget(card, true, true);
					});
					return !hasUse.length && hs.length;
				},
				check(card) {
					return 5 - get.value(card);
				},
			},
			scqhKoihime_qianxun: {
				trigger: {
					target: 'useCardToBegin',
					player: 'judgeBefore',
				},
				usable: 1,
				filter(trigger, player) {
					var hs = player.getCards('h');
					if (!hs.length) return false;
					if (!trigger.card) return false;
					if (trigger.parent.name == 'phaseJudge') {
						return get.type(trigger.card) == 'delay';
					} else {
						return get.type(trigger.card) == 'trick';
					}
					return false;
				},
				check(trigger, player) {
					var list = [
						['juedou', 'sha'],
						['nanman', 'sha'],
						['wanjian', 'shan'],
					];
					for (var listt of list) {
						if (trigger.card.name != listt[0]) continue;
						var hasCard = player.hasCard((card) => {
							if (card.name != listt[1]) return false;
							var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
							var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
							if (mod2 != 'unchanged') return mod2;
							if (mod != 'unchanged') return mod;
							return true;
						});
						if (hasCard) return 0;
					}
					var hasUse = player.hasCard((card) => {
						return player.hasUseTarget(card, true, true);
					});
					if (player.isPhaseUsing() && hasUse) return 0;
					var current = _status.currentPhase;
					if (current && current == player) {
						if (trigger.card.name == 'lebu') return 1;
						if (player.skipList.includes('phaseUse')) return 1;
						if (!hasUse) return 1;
						return 0;
					}
					return 1;
				},
				content() {
					var hs = player.getCards('h');
					var next = player.addToExpansion(hs, 'giveAuto', player);
					next.gaintag.add('scqhKoihime_qianxun');
				},
				intro: {
					mark(dialog, storage, player) {
						var cards = player.getExpansions('scqhKoihime_qianxun');
						if (player.isUnderControl(true)) dialog.addAuto(cards);
						else return '共有' + get.cnNumber(cards.length) + '张牌';
					},
					markcount: 'expansion',
				},
				onremove(player, skill) {
					var cards = player.getExpansions('scqhKoihime_qianxun');
					if (cards.length) player.loseToDiscardpile(cards);
				},
				inherit: 'reqianxun',
				group: ['scqhKoihime_qianxun_gain'],
				subSkill: {
					gain: {
						forced: true,
						trigger: {
							global: 'phaseEnd',
						},
						filter(trigger, player) {
							var cards = player.getExpansions('scqhKoihime_qianxun');
							return cards.length;
						},
						content() {
							'step 0';
							var cards = player.getExpansions('scqhKoihime_qianxun');
							var next = player.chooseTarget(true);
							next.prompt = get.translation(event.name);
							next.prompt += ':将';
							next.prompt += get.cnNumber(cards.length);
							next.prompt += '张牌交给一名角色';
							next.set('cards', cards);
							next.set('ai', function (target) {
								var player = _status.event.player;
								var cards = _status.event.cards;
								var val = 0;
								var att = get.attitude(player, target);
								for (var card of cards) {
									var value = get.value(card, target);
									val += value;
								}
								if (att <= 0) return 1 - value;
								val += att;
								return val;
							});
							('step 1');
							var targets = result.targets || [];
							var target = targets[0] || false;
							var cards = player.getExpansions('scqhKoihime_qianxun');
							if (target && cards.length) {
								player.give(cards, target, 'giveAuto');
							}
						},
					},
				},
			},
			scqhKoihime_zhaobing: {
				forced: true,
				trigger: {
					player: 'phaseJieshuBegin',
				},
				logTarget(trigger, player) {
					var targets = game.filterPlayer((current) => current != player);
					return targets;
				},
				filter(trigger, player) {
					var targets = game.filterPlayer((current) => current != player);
					return targets.length;
				},
				check() {
					return 1;
				},
				content() {
					'step 0';
					var hs = player.getCards('h');
					var count = [1, Math.max(1, hs.length)];
					var next = player.chooseTarget(count, function (card, player, target) {
						return player != target;
					});
					next.set('prompt', get.prompt2(event.name));
					next.set('ai', function (target) {
						var player = _status.event.player;
						var att = get.attitude(player, target);
						return 1 - att;
					});
					('step 1');
					var targets = result.targets || [];
					if (targets.length) {
						var hs = player.getCards('h');
						if (hs.length) player.showCards(hs);
						for (var target of targets) {
							var next = game.createEvent(event.name);
							next.target = target;
							next.player = player;
							next.setContent(lib.skill[event.name].zhaobing);
						}
					}
				},
				zhaobing() {
					'step 0';
					var next = target.chooseCard('he', (card) => {
						return card.name == 'sha';
					});
					next.prompt = get.translation(event.name);
					next.prompt += ':交给';
					next.prompt += get.translation(player);
					next.prompt += '一张【杀】,或点击流失一点体力';
					var att = get.attitude(target, player);
					var eff = get.effect(target, { name: 'losehp' }, target, target);
					next.set('goon', eff);
					next.set('ai', (card) => {
						if (_status.event.goon >= 0) return 0;
						return 7 - get.value(card);
					});
					('step 1');
					var cards = result.cards || [];
					if (cards.length) {
						target.give(cards, player, true);
						var suit = cards[0].suit;
						var skill = 'scqhKoihime_zhaobing_suit';
						if (!player.hasSkill(skill)) player.addTempSkill(skill, 'roundStart');
						player.markAuto(skill, [suit]);
					} else {
						target.loseHp();
					}
				},
				subSkill: {
					suit: {
						charlotte: true,
						mod: {
							cardname(card, player, name) {
								var skill = 'scqhKoihime_zhaobing_suit';
								var suits = player.storage[skill] || [];
								var suit = card.suit;
								if (suits.length && suits.includes(suit)) return 'sha';
							},
						},
						intro: {
							content: '$',
						},
					},
				},
			},
			scqhKoihime_mouzhu: {
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					return player.countCards('he', { name: 'sha' });
				},
				filterCard: {
					name: 'sha',
				},
				selectCard() {
					return [1, Infinity];
					var player = _status.event.player;
					var targets = game.filterPlayer((current) => current != player);
					var count = [1, Math.max(1, targets.length)];
					return count;
				},
				filterTarget(card, player, target) {
					return player != target;
				},
				selectTarget() {
					return [1, 1];
				},
				content() {
					'step 0';
					var next = target.chooseToDiscard('he', cards.length);
					next.prompt = get.translation(event.name);
					next.prompt += ':弃置';
					next.prompt += get.cnNumber(cards.length);
					next.prompt += '张牌并流失一点体力,或点击取消让';
					next.prompt += get.translation(player);
					next.prompt += '摸';
					next.prompt += get.cnNumber(cards.length);
					next.prompt += '张牌并回复一点体力';
					next.set('goon', target.hp <= 2 || get.attitude(target, player) >= 0 || player.isHealthy());
					next.set('ai', (card) => {
						if (_status.event.goon) return 0;
						return 6 - get.value(card);
					});
					('step 1');
					if (result.bool) target.loseHp();
					else {
						player.draw(cards.length);
						player.recover();
					}
				},
				ai: {
					order: 7,
					result: {
						target: -1.2,
						player(player, target) {
							if (ui.selected.targets.length) return 0;
							if (get.damageEffect(target, player, player, player) > 0) return 1;
							if (player.getDamagedHp() && get.attitude(target, player) >= 0) return 1;
							return 0;
						},
					},
				},
			},
			scqhKoihime_yanhuo: {
				forced: true,
				forceDie: true,
				trigger: {
					player: 'die',
				},
				content() {
					player.line(game.players, 'green');
				},
				group: ['scqhKoihime_yanhuo_damage'],
				subSkill: {
					damage: {
						forced: true,
						forceDie: true,
						trigger: {
							global: 'useCard',
						},
						filter(trigger, player) {
							return player.isDead() && trigger.card.name == 'sha';
						},
						content() {
							trigger.baseDamage += 1;
						},
					},
				},
			},
			scqhKoihime_nidang: {
				trigger: {
					player: 'phaseBegin',
				},
				prompt: '是否发动【逆党】逆转本回合的阶段执行顺序？',
				prompt2: false,
				check(trigger, player) {
					var hs = player.countCards('h');
					var dis = player.needsToDiscard();
					if (hs <= 2 || dis >= 2) return 0;
					return 1;
				},
				content() {
					trigger.phaseList.reverse();
				},
			},
			scqhKoihime_shanjia: {
				audio: 'dcmiyi',
				enable: 'phaseUse',
				usable: 1,
				filterCard(card, player) {
					var uic = ui.selected.cards || [];
					var hs = player.getCards('he');
					if (hs.length < 3) return false;
					return lib.filter.cardDiscardable(card, player);
				},
				discard: false,
				lose: false,
				delay: false,
				position: 'he',
				complexCard: true,
				complexSelect: true,
				selectCard() {
					var player = _status.event.player;
					var uic = ui.selected.cards || [];
					var hs = player.getCards('he');
					if (hs.length < 3) return 0;
					if (uic.length) return 3;
					return [0, 3];
				},
				check(card) {
					var player = _status.event.player;
					var value = get.value(card, player);
					var type = get.type2(card, player);
					var eff = get.effect(player, { name: 'tao' }, player, player);
					var nobasic = player.getCards('he', (cardx) => {
						return get.type2(cardx, player) != 'basic';
					});
					if (eff > 0 && nobasic.length < 3) return 0;
					if (eff > 0 && type != 'basic') return 15 - value;
					return 7 - value;
				},
				content() {
					'step 0';
					var draw = 3;
					if (cards && cards.length) {
						var equip = cards.filter((card) => {
							var type = get.type2(card, player);
							var position = get.position(card, true);
							return type == 'equip' || position == 'e';
						});
						if (equip.length) draw += equip.length;
						player.discard(cards);
					}
					player.draw(draw);
					('step 1');
					event._result = {};
					if (!cards.length) {
						var next = player.chooseCard(true, 'he', 3, function (card) {
							return lib.filter.cardDiscardable(card, player);
						});
						next.prompt = '缮甲:请弃置三张牌';
						next.set('ai', function (card) {
							var player = _status.event.player;
							var value = get.value(card, player);
							var eff = get.effect(player, { name: 'tao' }, player, player);
							var type = get.type2(card, player);
							if (eff > 0 && type != 'basic') return 15 - value;
							return 7 - value;
						});
						next.ai = get.disvalue;
					} else
						event._result = {
							bool: true,
							cards: cards,
						};
					('step 2');
					var cardx = result.cards || [];
					if (cardx.length && !cards.length) player.discard(cardx);
					var basic = cardx.filter((card) => get.type2(card) == 'basic');
					var trick = cardx.filter((card) => get.type2(card) == 'trick');
					var equip = cardx.filter((card) => {
						var type = get.type2(card, player);
						var position = get.position(card, true);
						return type == 'equip' || position == 'e';
					});
					if (!basic.length) {
						player.chooseUseTarget(true, { name: 'tao' }, false);
					}
					if (!trick.length) {
						player.chooseUseTarget(true, { name: 'jiu' }, false);
					}
					if (!equip.length) {
						player.chooseUseTarget({ name: 'sha' }, '缮甲:是否视为使用一张不计次数的【杀】？', false);
					}
				},
				mod: {
					aiValue(player, card, num) {
						if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) {
							return num / player.hp;
						}
					},
				},
				ai: {
					threaten: 3,
					order() {
						let sha = get.order({ name: 'sha' });
						return 1;
					},
					result: {
						player: 1,
					},
				},
			},
			scqhKoihime_yanjun: {
				audio: 'dcyinjun',
				trigger: {
					player: 'useCardAfter',
				},
				logTarget: 'targets',
				filter(trigger, player) {
					if (player.hasSkill('scqhKoihime_yanjun_nouse')) return false;
					if (!trigger.card.isCard || !trigger.cards.length) return false;
					var targets = trigger.targets || [];
					var target = targets[0] || false;
					var type = get.type(trigger.card);
					var name = trigger.card.name;
					if (targets.length != 1 || !target || !target.isIn()) return false;
					if (!player.canUse({ name: name }, target, false)) return false;
					return name == 'sha' || type == 'trick';
				},
				check(trigger, player) {
					if (player.hp <= 1) return 0;
					var targets = trigger.targets || [];
					var target = targets[0] || false;
					var name = trigger.card.name;
					var eff = get.effect(target, { name: name }, player, player);
					var effhp = get.effect(player, { name: 'losehp' }, player, player);
					if (eff > 0 || effhp > 0) return eff + effhp > 0;
					return 0;
				},
				prompt(trigger, player) {
					var targets = trigger.targets || [];
					var target = targets[0] || false;
					var name = trigger.card.name;
					var str = '是否对';
					str += get.translation(target);
					if (target == player) str += '(你)';
					str += '发动【寅君】(';
					str += get.translation(name);
					str += ')？';
					return str;
				},
				content() {
					player.loseHp();
					var target = targets[0] || false;
					var name = trigger.card.name;
					player.useCard({ name: name }, target, false).forceDie = true;
				},
				group: ['scqhKoihime_yanjun_damage'],
				subSkill: {
					damage: {
						forced: true,
						trigger: {
							source: 'damageSource',
						},
						filter(trigger, player) {
							if (!trigger.card) return false;
							if (player.hasSkill('scqhKoihime_yanjun_nouse')) return false;
							var evt = trigger.getParent('scqhKoihime_yanjun');
							return evt && evt.name == 'scqhKoihime_yanjun';
						},
						content() {
							player.addTempSkill('scqhKoihime_yanjun_nouse');
						},
					},
					nouse: {
						charlotte: true,
						mark: true,
						marktext: '<span style="text-decoration: line-through;">寅君</span>',
						intro: {
							content: '当前回合内失效',
						},
					},
				},
			},
			scqhKoihime_pinchun: {
				enable: 'chooseToUse',
				usable: 1,
				filterCard() {
					return false;
				},
				selectCard: -1,
				filter(trigger, player) {
					if (trigger.type == 'phase') return true;
					if (trigger.type == 'dying') {
						if (trigger.dying && trigger.dying.hp <= 0) return true;
					}
					return false;
				},
				filterTarget(card, player, target) {
					return player.canUse({ name: 'tuixinzhifu' }, target);
				},
				clearTime: true,
				delay: false,
				content() {
					var evt = event.getParent(2);
					if (evt.type == 'dying') event.type = 'dying';
					player.useCard({ name: 'tuixinzhifu' }, target);
				},
				ai: {
					order: 6,
					skillTagFilter(player) {
						return true;
					},
					save: true,
					result: {
						target: 3,
					},
					threaten: 1.6,
				},
				group: ['scqhKoihime_pinchun_gain'],
				subSkill: {
					gain: {
						forced: true,
						trigger: {
							player: 'gainAfter',
							global: 'loseAsyncAfter',
						},
						pinchun(getg, getl) {
							var pinchun = [];
							for (var pos in getl) {
								var cardx = getl[pos] || [];
								if (cardx.length) pinchun.addArray(cardx);
							}
							var cards2 = getg.filter((card) => {
								return pinchun.includes(card);
							});
							return cards2.length;
						},
						logTarget(trigger, player) {
							var getg = trigger.getg(player);
							return game.filterPlayer((current) => {
								var phs = player.countCards('h');
								var ths = current.countCards('h');
								if (phs == ths) return false;
								if (current == player) return false;
								var getl = trigger.getl(current);
								var pinchun = lib.skill.scqhKoihime_pinchun_gain.pinchun(getg, getl);
								return pinchun;
							});
						},
						filter(trigger, player) {
							var targets = lib.skill.scqhKoihime_pinchun_gain.logTarget(trigger, player);
							return targets.length;
						},
						content() {
							'step 0';
							var targets = lib.skill.scqhKoihime_pinchun_gain.logTarget(trigger, player);
							var evt = event.getParent('scqhKoihime_pinchun');
							for (var current of targets) {
								var phs = player.countCards('h');
								var ths = current.countCards('h');
								if (phs > ths) {
									var next = player.chooseUseTarget(true, { name: 'jiu' }, false, 'nodistance');
									next.set('prompt', get.translation(event.name) + ':是否视为使用一张无次数限制的【酒】？');
								} else {
									var count = ths - phs;
									current.chooseToDiscard(true, 'h', count);
								}
							}
						},
					},
				},
			},
			scqhKoihime_yuancong: {
				trigger: {
					global: 'phaseUseEnd',
				},
				filter(trigger, player) {
					if (trigger.player == player) return false;
					if (!trigger.player.countCards('he')) return false;
					var history = trigger.player.getHistory('sourceDamage', (evt) => {
						return evt.getParent('phaseUse') == trigger;
					});
					return !history.length;
				},
				check() {
					return 1;
				},
				content() {
					'step 0';
					var next = trigger.player.chooseCard(true, 'he', function (card) {
						return true;
					});
					next.set('prompt', get.translation(event.name) + ':请交给' + get.translation(player) + '一张牌');
					next.set('att', get.attitude(trigger.player, player));
					next.set('source', source);
					next.set('ai', function (card) {
						var att = _status.event.att;
						var source = _status.event.source;
						var value = get.value(card, source);
						if (att > 0) return value;
						return 1 - value;
					});
					('step 1');
					var cards = result.cards || [];
					if (cards.length) {
						trigger.player.give(cards, player, true);
						var next = player.chooseToUse();
						next.set('prompt', get.translation(event.name) + ':是否使用一张牌？');
					}
				},
			},
			scqhKoihime_qiangxi: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player.inRange(target);
				},
				xfilterOk() {
					var player = _status.event.player;
					var uic = ui.selected.cards || [];
					var uit = ui.selected.targets || [];
					var target = uit[0] || false;
					if (!target) return false;
					if (!uic.length) {
						if (!target.countCards('he')) return false;
					}
					return true;
				},
				content() {
					'step 0';
					var list = [];
					var ds = player.getDiscardableCards(player, 'he', function (card) {
						return get.type(card, false) == 'equip';
					});
					if (ds.length) list.add('弃置装备牌');
					list.add('流失体力');
					if (list.length >= 2) list.add('背水!增加伤害');
					if (list.length > 1) {
						var next = player.chooseControl(list);
						next.set('target', target);
						next.set('ai', function () {
							var target = _status.event.target;
							if (target.countCards('e', 'baiyin')) return 0;
							return 2;
						});
					} else
						event._result = {
							control: list[0],
						};
					('step 1');
					var str = result.control || '';
					var damage = 1;
					if (str.includes('背水')) damage++;
					if (str.includes('背水') || str.includes('装备')) {
						var next = player.chooseToDiscard(true, 'he', function (card) {
							return get.type(card) == 'equip';
						});
						next.set('prompt', '强袭:弃置一张装备牌');
					}
					if (str.includes('背水') || str.includes('体力')) {
						player.loseHp();
					}
					target.damage(damage);
				},
				ai: {
					damage: true,
					order: 8,
					result: {
						player(player, target) {
							if (ui.selected.cards.length) return 0;
							if (player.hp >= target.hp) return -0.9;
							if (player.hp <= 2) return -10;
							return -2;
						},
						target(player, target) {
							if (!ui.selected.cards.length) {
								if (player.hp < 2) return 0;
								if (player.hp == 2 && target.hp >= 2) return 0;
								if (target.hp > player.hp) return 0;
							}
							return get.damageEffect(target, player);
						},
					},
					threaten: 1.3,
				},
			},
			scqhKoihime_ninge: {
				forced: true,
				trigger: {
					player: 'loseHpBefore',
				},
				content() {
					trigger.cancel();
					var source = _status.currentPhase || 'nosource';
					player.damage(trigger.num, source);
				},
				group: ['scqhKoihime_ninge_two'],
				subSkill: {
					two: {
						forced: true,
						trigger: {
							player: 'damageEnd',
						},
						filter(trigger, player) {
							if (!trigger.source || !trigger.source.isIn()) return false;
							if (player.countCards('h') >= trigger.source.hp) return false;
							return true;
						},
						content() {
							var count = ui.cardPile.childElementCount || 1;
							player.drawTo(Math.min(count, trigger.source.hp));
						},
					},
				},
			},
			scqhKoihime_jvzhan: {
				forced: true,
				trigger: {
					player: 'useCardToPlayered',
					target: 'useCardToTargeted',
				},
				logTarget(trigger, player) {
					if (trigger.name == 'useCardToPlayered') {
						return trigger.targets[0];
					}
					return trigger.player;
				},
				filter(trigger, player) {
					if (trigger.card.name != 'sha') return false;
					if (trigger.name == 'useCardToPlayered') {
						var targets = trigger.targets || [];
						if (targets.length != 1) return false;
					}
					var current = lib.skill.scqhKoihime_jvzhan.logTarget(trigger, player) || false;
					if (current && current == player) return false;
					return true;
				},
				check(trigger, player) {
					return 1;
				},
				content() {
					'step 0';
					var target = lib.skill.scqhKoihime_jvzhan.logTarget(trigger, player) || false;
					event.target = target;
					var list = [];
					var starget = get.translation(target) || '';
					list.add('与' + starget + '各摸一张牌');
					if (target && target.countGainableCards(player, 'he')) {
						list.add('获得' + starget + '的一张牌');
					}
					list.add('cancel2');
					var next = player.chooseControl(list);
					next.set('prompt', get.prompt(event.name, target));
					next.set('count', list.length);
					next.set('target', target);
					next.set('ai', function () {
						var count = _status.event.count;
						var target = _status.event.target;
						var att = get.attitude(player, target);
						if (count == 3) {
							if (att <= 0) return 1;
						}
						return 0;
					});
					('step 1');
					var str = result.control || '';
					if (str != 'cancel2') {
						var target = event.target;
						trigger.player.addTempSkill('scqhKoihime_jvzhan_noTarget');
						trigger.player.markAuto('scqhKoihime_jvzhan_noTarget', trigger.targets);
						if (str.includes('摸')) {
							game.asyncDraw([player, target]);
						} else {
							player.gainPlayerCard(target, 'he', true);
						}
					}
				},
				subSkill: {
					noTarget: {
						mark: true,
						intro: {
							content: '不能对$使用牌',
						},
						charlotte: true,
						mod: {
							playerEnabled(card, player, target) {
								var targets = player.storage.scqhKoihime_jvzhan_noTarget || [];
								if (!targets.includes(target)) return;
								if (player.hasSkill('scqhKoihime_jvzhan') || target.hasSkill('scqhKoihime_jvzhan')) return false;
							},
						},
					},
				},
			},
			scqhKoihime_jiuhao: {
				enable: 'chooseToUse',
				usable: 1,
				hiddenCard(player, name) {
					return name == 'jiu';
				},
				viewAsFilter(player) {
					var storage = player.storage.scqhKoihime_jiuhao || false;
					if (!storage && !player.isLinked()) return true;
					if (storage && player.isLinked()) return true;
					return false;
				},
				filterCard() {
					return false;
				},
				selectCard: -1,
				viewAs: {
					name: 'jiu',
				},
				precontent() {
					player.changeZhuanhuanji('scqhKoihime_jiuhao');
					player.link();
				},
				mark: true,
				zhuanhuanji: true,
				marktext: '☯',
				intro: {
					content(storage, player) {
						if (!storage) return '需横置武将牌';
						return '需重置武将牌';
					},
				},
				group: ['scqhKoihime_jiuhao_damage'],
				subfrequent: ['damage'],
				subSkill: {
					damage: {
						frequent(trigger, player) {
							var check = lib.skill.scqhKoihime_jiuhao_damage.check(trigger, player);
							var filter = check || (typeof check == 'number' && check > 0);
							return !filter;
						},
						trigger: {
							player: 'damageEnd',
						},
						filter(trigger, player) {
							return !trigger.hasNature();
						},
						prompt(trigger, player) {
							var prompt = '酒豪:是否';
							prompt += player.isLinked() ? '重' : '横';
							prompt += '置武将牌？';
							return prompt;
						},
						check(trigger, player) {
							var check = lib.skill.scqhKoihime_jiuhao.viewAsFilter(player);
							return check;
						},
						content() {
							player.link();
						},
					},
				},
				ai: {
					basic: {
						useful(card, i) {
							if (_status.event.player.hp > 1) {
								if (i === 0) return 4;
								return 1;
							}
							if (i === 0) return 7.3;
							return 3;
						},
						value(card, player, i) {
							if (player.hp > 1) {
								if (i === 0) return 5;
								return 1;
							}
							if (i === 0) return 7.3;
							return 3;
						},
					},
					order() {
						if (_status.event.dying) return 9;
						let sha = get.order({ name: 'sha' });
						if (sha > 0) return sha + 0.2;
						return 0;
					},
					result: {
						target(player, target, card) {
							if (target && target.isLinked()) return 2;
							if (target && target.isDying()) return 2;
							if (!target || target._jiu_temp || !target.isPhaseUsing()) return 0;
							let usable = target.getCardUsable('sha');
							if (!usable || (lib.config.mode === 'stone' && !player.isMin() && player.getActCount() + 1 >= player.actcount) || !target.mayHaveSha(player, 'use', card)) return 0;
							let effs = { order: 0 },
								temp;
							target.getCards('hs', (i) => {
								if (i.name !== 'sha' || ui.selected.cards.includes(i)) return false;
								temp = get.order(i, target);
								if (temp < effs.order) return false;
								if (temp > effs.order) effs = { order: temp };
								effs[i.cardid] = {
									card: i,
									target: null,
									eff: 0,
								};
							});
							delete effs.order;
							for (let i in effs) {
								if (!lib.filter.filterCard(effs[i].card, target)) continue;
								game.filterPlayer((current) => {
									if (
										get.attitude(target, current) >= 0 ||
										!target.canUse(effs[i].card, current, null, true) ||
										current.hasSkillTag('filterDamage', null, {
											player: target,
											card: effs[i].card,
											jiu: true,
										})
									)
										return false;
									temp = get.effect(current, effs[i].card, target, player);
									if (temp <= effs[i].eff) return false;
									effs[i].target = current;
									effs[i].eff = temp;
									return false;
								});
								if (!effs[i].target) continue;
								if (
									target.hasSkillTag(
										'directHit_ai',
										true,
										{
											target: effs[i].target,
											card: i,
										},
										true
									) ||
									(usable === 1 &&
										(target.needsToDiscard() > Math.max(0, 3 - target.hp) ||
											!effs[i].target.mayHaveShan(
												player,
												'use',
												effs[i].target.getCards((i) => {
													return i.hasGaintag('sha_notshan');
												})
											)))
								) {
									delete target._jiu_temp;
									return 1;
								}
							}
							delete target._jiu_temp;
							return 0;
						},
					},
					tag: {
						save: 1,
						recover: 0.1,
					},
				},
			},
			scqhKoihime_yicong: {
				mod: {
					globalFrom(from, to, current) {
						return current - Math.max(0, from.hp);
					},
					globalTo(from, to, current) {
						return current + Math.max(0, to.getDamagedHp());
					},
				},
				ai: {
					threaten: 0.8,
				},
			},
			scqhKoihime_jiaomeng: {
				trigger: {
					player: 'useCardToPlayered',
				},
				logTarget: 'target',
				filter(trigger, player) {
					if (!trigger.target.countDiscardableCards(player, 'he')) return false;
					if (trigger.target == player) return false;
					if (trigger.card.name == 'sha') return true;
					if (get.color(trigger.card) == 'black' && get.type2(trigger.card) == 'trick') return true;
					return false;
				},
				check(trigger, player) {
					return get.effect(trigger.target, { name: 'guohe_copy2' }, player, player);
				},
				content() {
					'step 0';
					player.discardPlayerCard(trigger.target, true, 'he');
					('step 1');
					var card = false;
					if (result) card = (result.cards || [])[0] || false;
					if (card) {
						var type = get.type2(card, false);
						if (type == 'basic') player.draw();
						if (type == 'equip') trigger.directHit.add(trigger.target);
						if (type == 'trick' && get.tag(trigger.card, 'damage')) {
							var id = trigger.target.playerid;
							var map = trigger.parent.customArgs;
							if (!map[id]) map[id] = {};
							if (typeof map[id].extraDamage != 'number') map[id].extraDamage = 0;
							map[id].extraDamage++;
						}
					}
				},
			},
			scqhKoihime_tianming: {
				audio: 'shouxi',
				trigger: {
					target: 'useCardToTargeted',
				},
				filter(trigger, player) {
					return get.type2(trigger.card) == 'basic';
				},
				check(trigger, player) {
					var cards = player.getCards('h');
					if (cards.length <= 2) {
						if (Array.isArray(cards))
							for (const i of cards) {
								if (i.name == 'shan' || i.name == 'tao') return false;
							}
					}
					return true;
				},
				content() {
					'step 0';
					player.chooseToDiscard(2, true, 'he');
					player.draw(2);
					('step 1');
					var players = game.filterPlayer((current) => current.isMaxHp(true));
					if (players.length == 1) {
						event.target = players[0];
						event.target.chooseBool(get.prompt2(event.name));
					} else event.finish();
					('step 2');
					if (result.bool) {
						event.target.chooseToDiscard(2, true, 'he');
						event.target.draw(2);
					}
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (card.name == 'sha') return [1, 0.5];
						},
					},
				},
			},
			scqhKoihime_shouxi: {
				audio: 'shouxi',
				trigger: {
					target: 'useCardToTargeted',
				},
				logTarget: 'player',
				shouxi(player) {
					let storage = player.storage.scqhKoihime_shouxi || [];
					let list = lib.inpile.filter(function (name) {
						if (storage.includes(name)) return false;
						let type = get.type2(name);
						if (type == 'basic' || type == 'trick') return true;
						return false;
					});
					for (let i = 0; i < list.length; i++) {
						list[i] = [get.type(list[i]), '', list[i]];
					}
					return list;
				},
				filter(trigger, player) {
					let list = lib.skill.scqhKoihime_shouxi.shouxi(player);
					if (!list.length) return false;
					if (trigger.player == player) return false;
					return get.type2(trigger.card) == 'trick';
				},
				check(trigger, player) {
					let eff = get.effect(player, trigger.card, trigger.player, player);
					return eff <= 0;
				},
				content() {
					'step 0';
					var list = lib.skill.scqhKoihime_shouxi.shouxi(player);
					var next = player.chooseButton([[list, 'vcard']]);
					next.set('forced', true);
					next.set('target', trigger.player);
					next.set('ai', function (button) {
						return Math.random();
					});
					('step 1');
					if (result.bool) {
						var name = result.links[0][2];
						event.vcard = result.links;
						event.cardname = name;
						var storage = player.storage.scqhKoihime_shouxi || [];
						storage.add(name);
						player.storage.scqhKoihime_shouxi = storage;
						player.popup(name);
						game.log(player, '声明了', '#y' + get.translation(name));
					} else event.finish();
					('step 2');
					var name = event.cardname;
					var next = trigger.player.chooseToDiscard(function (card) {
						return card.name == _status.event.cardname;
					});
					next.set('att', get.attitude(trigger.player, trigger.target));
					next.set('cardname', name);
					next.set('dialog', ['守玺:请弃置一张【' + get.translation(name) + '】,否则' + get.translation(trigger.card) + '对' + get.translation(player) + '无效', [event.vcard, 'vcard']]);
					next.set('ai', function (card) {
						if (_status.event.att < 0) {
							return 10 - get.value(card);
						}
						return 0;
					});
					('step 3');
					if (!result.bool) {
						trigger.excluded.push(player);
					} else {
						player.chooseToDiscard(true, 'he');
					}
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							let att = get.attitude(player, target);
							if (get.type2(card) == 'trick' && att <= 0) return 0.3;
						},
					},
				},
			},
			scqhKoihime_mizhao: {
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					return player.countCards('h');
				},
				filterTarget(card, player, target) {
					return player != target;
				},
				filterCard: true,
				selectCard: -1,
				discard: false,
				lose: false,
				delay: false,
				content() {
					'step 0';
					event.target1 = targets[0];
					var target1 = event.target1;
					player.give(cards, target1, 'giveAuto');
					('step 1');
					var target1 = event.target1;
					var players = game.filterPlayer((current) => {
						if (current == player) return false;
						if (current == target1) return false;
						return target1.canCompare(current);
					});
					if (players.length) {
						var next = player.chooseTarget(function (card, player, target2) {
							var players = _status.event.players;
							return players.includes(target2);
						});
						next.set('prompt', '密诏:选择' + get.translation(target1) + '的拼点目标');
						next.set('target1', target1);
						next.set('players', players);
						next.set('ai', function (target2) {
							var player = _status.event.player;
							var target1 = _status.event.target1;
							var eff = get.effect(target2, { name: 'sha' }, target1, player);
							var att = get.attitude(player, target2);
							if (att > 0) return eff - 10;
							return eff;
						});
						next.set('forceDie', true);
					} else event.finish();
					('step 2');
					var target1 = event.target1;
					var target2 = (result.targets || [])[0] || false;
					event.target2 = target2;
					if (target2 && target1.canCompare(target2)) {
						target1.line(target2);
						target1.chooseToCompare(target2);
					} else event.finish();
					('step 3');
					if (!result.tie) {
						var targetx = [event.target1, event.target2];
						if (!result.bool) targetx = targetx.reverse();
						var cardx = { name: 'sha' };
						if (targetx[0].canUse(cardx, targetx[1], false)) {
							targetx[0].useCard(cardx, targetx[1], false);
						}
					}
				},
				ai: {
					order: 1,
					result: {
						player: 0,
						target(player, target) {
							if (target.hasSkillTag('nogain')) return 0;
							if (player.countCards('h') > 1) return 1;
							var players = game.filterPlayer();
							for (const i of players) {
								if (i.countCards('h') && i != target && i != player && get.attitude(player, i) < 0) {
									break;
								}
							}
							if (i == players.length) return 1;
							return -2 / (target.countCards('h') + 1);
						},
					},
				},
			},
			scqhKoihime_chiyan: {
				intro: {
					markcount: 'expansion',
					mark(dialog, storage, player) {
						var xs = player.getExpansions('scqhKoihime_chiyan');
						if (player.isUnderControl(true)) dialog.addAuto(xs);
						else return '共有' + get.cnNumber(xs.length) + '张牌';
					},
				},
				trigger: {
					player: 'useCardToPlayered',
				},
				logTarget: 'target',
				filter(trigger, player) {
					var type = get.type2(trigger.card);
					if (!['trick', 'basic'].includes(type)) return false;
					return trigger.target.countCards('he');
				},
				check(trigger, player) {
					let att = get.attitude(player, trigger.target);
					return att <= 0;
				},
				content() {
					'step 0';
					var next = player.choosePlayerCard(true, trigger.target, 'he');
					next.set('prompt', '鸱咽');
					next.set('ai', function (button) {
						let target = _status.event.target;
						let card = button.link;
						let val = get.value(card, target);
						if (card == target.getEquip(2)) return 2 * (val + 3);
						return val;
					});
					('step 1');
					if (result.bool) {
						var target = trigger.target;
						player.addToExpansion('giveAuto', result.cards, target).gaintag.add('scqhKoihime_chiyan');
						if (player.countCards('h') >= target.countCards('h') && player.countCards('e') >= target.countCards('e')) {
							if (get.tag(trigger.card, 'damage')) {
								var id = target.playerid;
								var map = trigger.parent.customArgs;
								if (!map[id]) map[id] = {};
								if (typeof map[id].extraDamage != 'number') map[id].extraDamage = 0;
								map[id].extraDamage++;
							}
						}
					}
				},
				ai: {
					unequip: true,
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						let att = get.attitude(player, arg.target);
						if (att > 0) return false;
						if (tag == 'directHit_ai') return arg.target.countCards('h') <= 1;
						if (arg && get.type2(arg) == 'trick' && arg.target.getEquip(2)) return true;
						return false;
					},
				},
				group: ['scqhKoihime_chiyan_gain'],
				subSkill: {
					gain: {
						forced: true,
						trigger: {
							global: 'phaseEnd',
						},
						filter(trigger, player) {
							var xs = player.getExpansions('scqhKoihime_chiyan');
							return xs.length;
						},
						content() {
							var xs = player.getExpansions('scqhKoihime_chiyan');
							player.gain(xs, 'draw');
							game.log(player, '获得了' + get.cnNumber(xs.length) + '张牌');
						},
					},
				},
			},
			scqhKoihime_huangkong: {
				forced: true,
				trigger: {
					target: 'useCardToTargeted',
				},
				filter(trigger, player) {
					if (player.countCards('h')) return false;
					return true;
				},
				content() {
					player.draw(2);
				},
			},
			scqhKoihime_yangzhong: {
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					return !player.isLinked();
				},
				content() {
					player.link();
				},
				ai: {
					order: 1,
					result: {
						player: 10,
					},
				},
				group: ['scqhKoihime_yangzhong_link'],
				subSkill: {
					link: {
						forced: true,
						trigger: {
							player: 'linkEnd',
						},
						filter(trigger, player) {
							return player.isLinked();
						},
						content() {
							var card = {
								name: 'tiesuo',
							};
							var next = player.chooseUseTarget(card, false, 'nodistance');
							next.set('prompt', get.prompt(event.name));
							next.set('prompt2', '视为对其他角色使用一张' + get.translation(card));
							next.set('cardx', card);
							next.set('filterTarget', function (card, player, target) {
								var cardx = {
									name: 'tiesuo',
								};
								return player != target && player.canUse(cardx, target, false);
							});
						},
					},
				},
			},
			scqhKoihime_congzhu: {
				group: ['scqhKoihime_congzhu_yinghun', 'scqhKoihime_congzhu_jiang', 'scqhKoihime_congzhu_zhiheng'],
				subSkill: {
					yinghun: {
						inherit: 'yinghun',
						filter(trigger, player) {
							var dhp = player.getDamagedHp();
							if (dhp < 1) return false;
							return true;
						},
					},
					jiang: {
						inherit: 'jiang',
						filter(trigger, player) {
							var dhp = player.getDamagedHp();
							if (dhp < 2) return false;
							return lib.skill.jiang.filter(trigger, player);
						},
					},
					zhiheng: {
						inherit: 'zhiheng',
						prompt() {
							return get.translation('zhiheng_info');
						},
						filter(trigger, player) {
							var dhp = player.getDamagedHp();
							if (dhp < 3) return false;
							return player.countCards('he');
						},
					},
				},
			},
			scqhKoihime_kurou: {
				enable: 'phaseUse',
				content() {
					player.addTempSkill('scqhKoihime_kurou_discard');
					player.loseHp();
				},
				ai: {
					basic: {
						order: 1,
					},
					result: {
						player(player) {
							if (player.hp <= 1) {
								var hs = player.getCards('hs', (card) => {
									if (card.name != 'tao' && card.name != 'jiu') return false;
									return player.canUse(card, player, false, false);
								});
								if (!hs.length) return -1;
							}
							var storage = player.storage.scqhKoihime_zhaxiang_dhp || [];
							var filterOk = player.hasSkill('scqhKoihime_zhaxiang') && !storage.includes(player.hp);
							if (!filterOk && !player.hasSkill('zhaxiang')) return -1;
							return 1;
						},
					},
				},
				subSkill: {
					discard: {
						charlotte: true,
						forced: true,
						trigger: {
							player: 'phaseDiscardEnd',
						},
						filter(trigger, player) {
							if (!player.hasSkill('scqhKoihime_kurou')) return false;
							var count = Math.floor(trigger.cards.length / 2);
							return count > 0;
						},
						content() {
							var count = Math.floor(trigger.cards.length / 2);
							player.changeHujia(count, null, true);
						},
					},
				},
			},
			scqhKoihime_zhaxiang: {
				forced: true,
				trigger: {
					player: 'changeHp',
				},
				filter(trigger, player) {
					var storage = player.storage.scqhKoihime_zhaxiang_dhp || [];
					if (storage.includes(player.hp)) return false;
					var dhp = player.getDamagedHp();
					if (dhp < 1) return false;
					var evt = trigger.parent;
					return evt && evt.name == 'loseHp';
				},
				content() {
					player.addTempSkill('scqhKoihime_zhaxiang_dhp');
					player.markAuto('scqhKoihime_zhaxiang_dhp', [player.hp]);
					player.addTempSkill('scqhKoihime_zhaxiang_sha');
					player.addMark('scqhKoihime_zhaxiang_sha', 1, false);
					var dhp = player.getDamagedHp();
					player.draw(dhp);
				},
				ai: {
					maihp: true,
					effect: {
						target(card, player, target) {
							return lib.skill.zhaxiang.ai.effect.target(card, player, target);
						},
					},
				},
				subSkill: {
					dhp: {
						charlotte: true,
					},
					sha: {
						mod: {
							targetInRange(card, player, target, now) { },
							cardUsable(card, player, num) {
								if (!player.hasSkill('scqhKoihime_zhaxiang')) return;
								if (card.name == 'sha') return num + player.countMark('scqhKoihime_zhaxiang_sha');
							},
						},
						charlotte: true,
						forced: true,
						trigger: {
							player: 'useCardToPlayered',
						},
						logTarget: 'target',
						filter(trigger, player) {
							if (!player.hasSkill('scqhKoihime_zhaxiang')) return false;
							return trigger.card && trigger.card.name == 'sha' && get.color(trigger.card) == 'red';
						},
						content() {
							var id = trigger.target.playerid;
							var map = trigger.parent.customArgs;
							if (!map[id]) map[id] = {};
							if (typeof map[id].shanRequired != 'number') {
								map[id].shanRequired = 1;
							}
							var mark = player.countMark('scqhKoihime_zhaxiang_sha') || 1;
							map[id].shanRequired += mark;
							trigger.parent.customArgs = map;
						},
						mark: true,
						intro: {
							content: '#层',
						},
						ai: {
							directHit_ai: true,
							skillTagFilter(player, tag, arg) {
								if (arg && arg.card.name == 'sha' && get.color(arg.card) == 'red') {
									if (arg && arg.target.countCards('h', 'shan') > 1) return false;
									return true;
								}
								return false;
							},
						},
					},
				},
			},
			scqhKoihime_zhenlue: {
				forced: true,
				trigger: {
					player: ['useCard', 'damageBegin4'],
				},
				filter(trigger, player) {
					if (trigger.name == 'useCard') {
						return get.type(trigger.card) == 'trick';
					} else {
						return _status.currentPhase && player == _status.currentPhase;
					}
				},
				content() {
					if (trigger.name == 'useCard') {
						trigger.nowuxie = true;
					} else {
						trigger.cancel();
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (_status.currentPhase && target == _status.currentPhase && get.tag(card, 'damage')) return [0, 1];
						},
					},
				},
				mod: {
					targetEnabled(card, player, target) {
						if (get.type2(card) == 'trick' && get.color(card) == 'black') {
							return false;
						}
					},
				},
			},
			scqhKoihime_jianshu: {
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					return player.countCards('he');
				},
				filterCard: true,
				position: 'he',
				discard: false,
				lose: false,
				delay: false,
				check(card) {
					if (_status.event.player.hp == 1) return 8 - get.value(card);
					return 6 - get.value(card);
				},
				filterTarget(card, player, target) {
					if (target == player) return false;
					let uit = ui.selected.targets || [];
					if (uit.length) {
						if (uit[0] == target) return false;
						if (uit[0].hasSkillTag('noCompareSource')) return false;
						if (target.hasSkillTag('noCompareTarget')) return false;
						if (!target.countCards('h')) return false;
					}
					return true;
				},
				selectTarget: 2,
				multitarget: true,
				targetprompt: ['发起者', '拼点目标'],
				content() {
					'step 0';
					player.give(cards, targets[0], 'give');
					('step 1');
					if (targets[0].canCompare(targets[1])) {
						targets[0].chooseToCompare(targets[1]);
					} else event.finish();
					('step 2');
					if (result.bool) {
						targets[0].chooseToDiscard('he', 1, true);
						targets[1].loseHp();
					} else if (result.tie) {
						targets[0].loseHp();
						targets[1].loseHp();
					} else {
						targets[1].chooseToDiscard('he', 1, true);
						targets[0].loseHp();
					}
				},
				ai: {
					expose: 0.4,
					order: 4,
					result: {
						target(player, target) {
							if (player.hasUnknown()) return 0;
							if (ui.selected.targets.length) return -1;
							return -0.5;
						},
					},
				},
			},
			scqhKoihime_luanwu: {
				limited: true,
				enable: 'phaseUse',
				filter(trigger, player) {
					let players = game.filterPlayer((target) => target != player);
					return players.length;
				},
				filterTarget(card, player, target) {
					return target != player;
				},
				selectTarget: -1,
				multiline: true,
				contentBefore() {
					player.awakenSkill('scqhKoihime_luanwu');
				},
				content() {
					'step 0';
					var next = target.chooseToUse(
						'乱武:除非你使用一张【杀】,否则流失一点体力',
						function (card) {
							if (card.name != 'sha') return false;
							return lib.filter.filterCard.apply(this, arguments);
						},
						function (card, player, target) {
							if (player == target) return false;
							var dist = get.distance(player, target);
							if (dist > 1) {
								var hasp = game.hasPlayer(function (current) {
									return current != player && get.distance(player, current) < dist;
								});
								if (hasp) return false;
							}
							return lib.filter.filterTarget.apply(this, arguments);
						}
					);
					next.set('ai2', function () {
						return get.effect_use.apply(this, arguments) - _status.event.effect;
					});
					next.set('effect', get.effect(target, { name: 'losehp' }, target, target));
					('step 1');
					if (!result.bool) target.loseHp();
				},
				contentAfter() {
					player.chooseUseTarget('sha', '乱武:是否视为使用一张【杀】？', false, 'nodistance');
				},
				ai: {
					order: 1,
					result: {
						player(player) {
							if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
								if (game.zhu.hp == 1 && game.zhu.countCards('h') <= 2) return 1;
							}
							var num = 0;
							var players = game.filterPlayer();
							for (const i of players) {
								var att = get.attitude(player, i);
								if (att > 0) att = 1;
								if (att < 0) att = -1;
								if (i != player && i.hp <= 3) {
									if (i.countCards('h') == 0) num += att / i.hp;
									else if (i.countCards('h') == 1) num += att / 2 / i.hp;
									else if (i.countCards('h') == 2) num += att / 4 / i.hp;
								}
								if (i.hp == 1) num += att * 1.5;
							}
							if (player.hp == 1) {
								return -num;
							}
							if (player.hp == 2) {
								return -game.players.length / 4 - num;
							}
							return -game.players.length / 3 - num;
						},
					},
				},
				mark: true,
				intro: {
					content: 'limited',
				},
			},
			scqhKoihime_chaozhen: {
				trigger: {
					player: 'dying',
				},
				usable: 1,
				getTargets() {
					var players = game.filterPlayer((target) => {
						var je = target.getCards('ej', (card) => {
							return card.number == 1;
						});
						return je.length;
					});
					return players;
				},
				filter(trigger, player) {
					var players = lib.skill.scqhKoihime_chaozhen.getTargets();
					var card = get.cardPile2(function (card) {
						return card.number == 1;
					});
					return players.length || card;
				},
				content() {
					'step 0';
					var list = [];
					var players = lib.skill.scqhKoihime_chaozhen.getTargets();
					var card = get.cardPile2(function (card) {
						return card.number == 1;
					});
					if (players.length) list.add('获得场上的牌');
					if (card) list.add('获得牌堆里的牌');
					if (list.length > 1) {
						var next = player.chooseControl(list);
						next.set('ai', function () {
							return 0;
						});
					} else if (list.length) {
						event._result = {
							control: list[0],
						};
					} else event.finish();
					('step 1');
					var str = result.control || false;
					if (str && str.includes('牌堆')) {
						var card = get.cardPile2(function (card) {
							return card.number == 1;
						});
						if (card) {
							player.gain(card, 'gain2');
							player.recover();
						}
						event.finish();
					} else if (str) {
						var players = lib.skill.scqhKoihime_chaozhen.getTargets();
						if (players.length > 1) {
							var next = player.chooseTarget(true, function (card, player, target) {
								var je = target.countCards('ej', (cardx) => {
									return cardx.number == 1;
								});
								return je;
							});
							next.set('prompt', '请选择【' + get.translation(event.name) + '】的目标');
							next.set('prompt2', '获得其区域里的一张点数为A的牌,回复一点体力');
							next.set('ai', function (target) {
								var player = _status.event.player;
								var att = get.attitude(player, target);
								return 3 - att;
							});
						} else if (players.length) {
							event._result = {
								targets: players,
							};
						} else event.finish();
					} else event.finish();
					('step 2');
					var targets = result.targets || [];
					var target = targets[0] || false;
					if (target) {
						var next = player.gainPlayerCard(true, target, 'ej', 'visibleMove');
						next.set('filterCard', function (button) {
							var cardx = button.link;
							return cardx.number == 1;
						});
						next.set('ai', function (button) {
							return get.value(button.link);
						});
						player.recover();
					}
				},
			},
			scqhKoihime_guanhuo: {
				enable: 'phaseUse',
				filterCard() {
					return false;
				},
				selectCard: -1,
				check(card) {
					return 1;
				},
				viewAs: {
					name: 'huogong',
				},
				prompt: '视为使用一张【火攻】',
				group: ['scqhKoihime_guanhuo_after'],
				subSkill: {
					nouse: {
						charlotte: true,
						mod: {
							cardEnabled(card, player) {
								if (!player.hasSkill('scqhKoihime_guanhuo')) return;
								if (card.name == 'huogong') return false;
							},
						},
					},
					after: {
						forced: true,
						trigger: {
							global: 'useCardAfter',
						},
						targets(trigger, player) {
							const targets = trigger.targets || [];
							return targets.filter((target) => player.canCompare(target));
						},
						filter(trigger, player) {
							if (trigger.card.name !== 'huogong') return false;
							const targets = lib.skill.scqhKoihime_guanhuo_after.targets(trigger, player);
							if (!targets.length) return false;
							const damaged = player.getHistory('damage', (evt) => {
								const card = evt.card;
								if (!card || card.name !== 'huogong') return false;
								const evtx = evt.getParent('useCard');
								if (!evtx || !evtx.card || evtx.card !== card) return false;
								return evtx === trigger;
							});
							const damages = player.getHistory('sourceDamage', (evt) => {
								const card = evt.card;
								if (!card || card.name !== 'huogong') return false;
								const evtx = evt.getParent('useCard');
								if (!evtx || !evtx.card || evtx.card !== card) return false;
								return evtx === trigger;
							});
							if (damaged.length || damages.length) return false;
							return true;
						},
						content() {
							'step 0';
							player.addTempSkill('scqhKoihime_guanhuo_nouse');
							event.targets = lib.skill[event.name].targets(trigger, player);
							var targets = event.targets;
							var str = '观火:是否向';
							str += get.translation(targets);
							str += '发起拼点？';
							var next = player.chooseBool();
							next.set('prompt', str);
							next.set('ai', function () {
								return 1;
							});
							('step 1');
							if (result.bool) {
								var targets = event.targets;
								var next = player.chooseToCompare(targets);
								next.set('small', true);
								next.callback = lib.skill[event.name].callback;
							}
						},
						callback() {
							var winner = event.winner || false;
							if (winner && winner === target && target !== player) {
								winner.damage(player);
							}
						},
					},
				},
			},
			scqhKoihime_jvxia: {
				forced: true,
				trigger: {
					player: 'compare',
					target: 'compare',
				},
				filter(trigger, player) {
					var he = trigger.player;
					if (trigger.player == player) {
						he = trigger.target;
						if (trigger.iwhile) return false;
					}
					if (player.hp < he.hp) return true;
					if (player.countCards('h') < he.countCards('h')) return true;
					return false;
				},
				content() {
					if (player == trigger.player) {
						trigger.num1 = 1;
					} else {
						trigger.num2 = 1;
					}
					game.log(player, '将自己的拼点牌点数改为Ａ');
				},
			},
			scqhKoihime_suizheng: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					var storage = player.storage.scqhKoihime_suizheng || false;
					if (storage) return storage != target;
					return true;
				},
				content() {
					player.storage.scqhKoihime_suizheng = target;
					player.markSkill('scqhKoihime_suizheng');
				},
				intro: {
					content: '$',
				},
				mod: {
					targetInRange(card, player, target, now) {
						var storage = player.storage.scqhKoihime_suizheng || false;
						if (storage && storage.isIn() && storage.inRange(target)) return true;
						if (player.inRange(target)) return true;
					},
				},
				global: ['scqhKoihime_suizheng_global'],
				group: ['scqhKoihime_suizheng_draw', 'scqhKoihime_suizheng_discard'],
				subSkill: {
					global: {
						mod: {
							targetInRange(card, player, target, now) {
								for (let current of game.filterPlayer()) {
									var storage = current.storage.scqhKoihime_suizheng || false;
									if (current.hasSkill('scqhKoihime_suizheng') && storage && storage.isIn() && storage == player) {
										if (current.inRange(target)) return true;
									}
								}
							},
						},
					},
					draw: {
						trigger: {
							global: 'damageSource',
						},
						prompt: '随征:是否摸一张牌？',
						check() {
							return 1;
						},
						filter(trigger, player) {
							var storage = player.storage.scqhKoihime_suizheng || false;
							return storage && storage.isIn() && trigger.source && storage == trigger.source;
						},
						content() {
							player.draw();
						},
					},
					discard: {
						trigger: {
							global: 'damageEnd',
						},
						prompt(trigger, player) {
							var prompt = '随征:是否弃置两张牌,令';
							prompt += get.translation(trigger.player);
							prompt += '回复一点体力？';
							return prompt;
						},
						check(trigger, player) {
							var att = get.attitude(player, trigger.player);
							if (att < 1) return 0;
							var cards = player.getDiscardableCards(player, 'he');
							if (cards.length == 2) {
								for (let card of cards) {
									var pos = get.position(card, true);
									if (pos == 'h' && card.name == 'tao') return 0;
									if (pos == 'h' && card.name == 'jiu') return 0;
								}
							}
							return 1;
						},
						filter(trigger, player) {
							if (player.countDiscardableCards(player, 'he') < 2) return false;
							var storage = player.storage.scqhKoihime_suizheng || false;
							return storage && storage.isIn() && trigger.player && storage == trigger.player;
						},
						content() {
							player.chooseToDiscard('he', 2, true);
							trigger.player.recover();
						},
					},
				},
				ai: {
					order(name, player) {
						return get.order({ name: 'sha' }) - 1;
					},
					result: {
						player(player) {
							return 1;
						},
						target(player, target) {
							var att = get.attitude(player, target);
							return att;
						},
					},
					threaten: 1.3,
				},
			},
			scqhKoihime_zhuyan: {
				audio: 'olzhuyan',
				zhuanhuanji: true,
				mark: true,
				marktext: '☯',
				intro: {
					content(storage) {
						return storage ? '阴' : '阳';
					},
				},
				forced: true,
				trigger: {
					player: ['useCardAfter', 'respondAfter'],
					target: ['useCardToTarget'],
				},
				filter(trigger, player) {
					var storage = player.storage.scqhKoihime_zhuyan || false;
					if (trigger.name == 'useCardToTarget') {
						var type = get.type(trigger.card);
						if (type != 'basic' && type != 'trick') return false;
						if (!player.countCards('he')) return false;
						return storage;
					}
					return !storage;
				},
				content() {
					var storage = player.storage.scqhKoihime_zhuyan || false;
					var zhuyan = storage ? 'toDiscard' : 'toTarget';
					var skill = lib.skill.scqhKoihime_zhuyan || {};
					if (skill[zhuyan]) {
						var next = game.createEvent('scqhKoihime_zhuyan');
						next.player = player;
						next.setContent(skill[zhuyan]);
					}
				},
				toDiscard() {
					'step 0';
					var next = player.chooseToDiscard('he');
					next.set('prompt', '是否发动【驻颜】弃置一张牌？');
					next.set('ai', function (card) {
						return 8 - get.value(card);
					});
					('step 1');
					if (result.bool) {
						player.changeZhuanhuanji('scqhKoihime_zhuyan');
					}
				},
				toTarget() {
					'step 0';
					var next = player.chooseTarget(true, function (card, player, target) {
						var inline = _status.event.inline || [];
						return inline.includes(target);
					});
					next.set('inline', lib.skill.scqhKoihime_yaoyi.inline(player));
					next.set('prompt', '是否发动【驻颜】让一名角色摸两张牌？');
					next.set('ai', function (target) {
						return get.attitude(_status.event.player, target);
					});
					('step 1');
					var targets = result.targets || [];
					var target = targets[0] || false;
					if (target) {
						player.changeZhuanhuanji('scqhKoihime_zhuyan');
						target.draw(2);
					}
				},
			},
			scqhKoihime_yaoyi: {
				audio: 'dcyaoyi',
				shuaxinMark(player) {
					var white = 'scqhKoihime_yaoyi_white';
					var black = 'scqhKoihime_yaoyi_black';
					player.unmarkSkill(white);
					player.unmarkSkill(black);
					var storage = player.storage.scqhKoihime_yaoyi || false;
					var id = storage ? white : black;
					player.markSkill(id);
				},
				init(player) {
					game.filterPlayer(function (current) {
						lib.skill.scqhKoihime_yaoyi.shuaxinMark(current);
					});
				},
				onremove(player) {
					var bool = game.hasPlayer(function (current) {
						if (current == player) return false;
						return current.hasSkill('scqhKoihime_yaoyi');
					});
					if (!bool) {
						game.filterPlayer(function (current) {
							current.unmarkSkill('scqhKoihime_yaoyi_white');
							current.unmarkSkill('scqhKoihime_yaoyi_black');
						});
					}
				},
				weigong(player) {
					var next = player.next;
					var previous = player.previous;
					var storage = player.storage.scqhKoihime_yaoyi || false;
					var nextStorage = next.storage.scqhKoihime_yaoyi || false;
					var previousStorage = previous.storage.scqhKoihime_yaoyi || false;
					var list = [];
					if (next && previous && next != previous) {
						if (nextStorage != storage && previousStorage != storage) {
							list.add(next);
							list.add(previous);
						}
					}
					return list;
				},
				inline(player) {
					var next = player;
					var previous = player;
					var list = [];
					var storage = player.storage.scqhKoihime_yaoyi || false;
					for (var i = 0; next || previous; i++) {
						if (next) {
							next = next.next;
							var nextStorage = next.storage.scqhKoihime_yaoyi || false;
							if (next == player || storage != nextStorage) {
								next = null;
							} else {
								list.add(next);
							}
						}
						if (previous) {
							previous = previous.previous;
							var previousStorage = previous.storage.scqhKoihime_yaoyi || false;
							if (previous == player || storage != previousStorage) {
								previous = null;
							} else {
								list.add(previous);
							}
						}
					}
					list.add(player);
					return list;
				},
				forced: true,
				trigger: {
					global: 'useCardToPlayered',
				},
				filter(trigger, player) {
					if (trigger.card.name != 'sha') return false;
					var list = lib.skill.scqhKoihime_yaoyi.weigong(trigger.target);
					return list.includes(trigger.player);
				},
				content() {
					trigger.player.line(trigger.target, 'green');
					trigger.player.popup('围攻');
					trigger.target.popup('被围攻');
					game.log(trigger.player, '对', trigger.target, '发动了', '#g【围攻】');
					trigger.target.chooseToDiscard('h', true);
				},
				derivation: ['scqhKoihime_yaoyi_shoutan'],
				global: ['scqhKoihime_yaoyi_mark', 'scqhKoihime_yaoyi_unmark', 'scqhKoihime_yaoyi_shoutan'],
				subSkill: {
					mark: {
						forced: true,
						trigger: {
							global: 'gameDrawAfter',
						},
						content() {
							lib.skill.scqhKoihime_yaoyi.shuaxinMark(player);
						},
					},
					unmark: {
						forced: true,
						trigger: {
							global: 'die',
						},
						content() {
							lib.skill.scqhKoihime_yaoyi.onremove(trigger.player);
						},
					},
					white: {
						marktext: '<font color=#FFFFFF>●</font>',
						intro: {
							name: '<font color=#FFFFFF>●</font>',
							content: '执白子',
						},
					},
					black: {
						marktext: '<font color=#545454>●</font>',
						intro: {
							name: '<font color=#545454>●</font>',
							content: '执黑子',
						},
					},
					shoutan: {
						audio: 'dcshoutan',
						zhuanhuanji: true,
						charlotte: true,
						mod: {
							targetEnabled(card, player, target) {
								if (
									player == target ||
									!game.hasPlayer(function (current) {
										return current.hasSkill('scqhKoihime_yaoyi');
									})
								)
									return;
								var me = player.storage.scqhKoihime_yaoyi || false;
								var he = target.storage.scqhKoihime_yaoyi || false;
								if (me == he) return false;
							},
							cardSavable(card, player, target) {
								if (
									player == target ||
									!game.hasPlayer(function (current) {
										return current.hasSkill('scqhKoihime_yaoyi');
									})
								)
									return;
								var me = player.storage.scqhKoihime_yaoyi || false;
								var he = target.storage.scqhKoihime_yaoyi || false;
								if (me == he) return false;
							},
						},
						enable: 'phaseUse',
						usable: 1,
						filter(trigger, player) {
							var bool = game.hasPlayer(function (current) {
								return current.hasSkill('scqhKoihime_yaoyi');
							});
							if (!bool) return false;
							var storage = player.storage.scqhKoihime_yaoyi || false;
							return player.countCards('he', function (card) {
								var color = get.color(card);
								if (!storage) return color == 'black';
								return color != 'black';
							});
						},
						position: 'he',
						filterCard(card, player) {
							var color = get.color(card, player);
							var storage = player.storage.scqhKoihime_yaoyi || false;
							if (!storage) return color == 'black';
							return color != 'black';
						},
						prompt() {
							var player = _status.event.player;
							var prompt = '弃置一张';
							var storage = player.storage.scqhKoihime_yaoyi || false;
							if (storage) prompt += '非';
							prompt += '黑色牌,你可以视为对一名';
							if (!player.hasSkill('scqhKoihime_yaoyi')) {
								prompt += '被你围攻的';
							}
							prompt += '角色使用一张【杀】';
							return prompt;
						},
						check(card) {
							return 9 - get.value(card);
						},
						content() {
							'step 0';
							player.storage.scqhKoihime_yaoyi = !player.storage.scqhKoihime_yaoyi;
							lib.skill.scqhKoihime_yaoyi.shuaxinMark(player);
							('step 1');
							var players = game.filterPlayer((target) => {
								var card = {
									name: 'sha',
								};
								if (!player.hasSkill('scqhKoihime_yaoyi')) {
									var list = lib.skill.scqhKoihime_yaoyi.weigong(target);
									if (!list.includes(player)) return false;
								}
								return player.canUse(card, target, false);
							});
							if (players.length) {
								var next = player.chooseTarget(function (card, player, target) {
									var players = _status.event.players || [];
									return players.includes(target);
								});
								var prompt = '视为对一名';
								if (!player.hasSkill('scqhKoihime_yaoyi')) {
									prompt += '被你围攻的';
								}
								prompt += '角色使用一张【杀】';
								next.set('prompt', prompt);
								next.set('players', players);
								next.set('ai', function (target) {
									var player = _status.event.player;
									var att = get.attitude(player, target);
									var eff = get.effect(target, { name: 'sha' }, player, player);
									return eff;
								});
							} else event.finish();
							('step 2');
							var targets = result.targets || [];
							if (targets.length) {
								var bool = player.hasSkill('scqhKoihime_yaoyi');
								player.useCard({ name: 'sha' }, targets, !bool);
							}
						},
						ai: {
							order: 0.1,
							result: {
								player(player) {
									var base = 0;
									var uic = ui.selected.cards || [];
									if (uic.length) base = get.value(uic[0]);
									var status = player.storage.scqhKoihime_yaoyi;
									var cards = player.getCards('hs', function (card) {
										return !uic.includes(card);
									});
									for (var card of cards) {
										var val1 = player.getUseValue(card, null, true);
										player.storage.scqhKoihime_yaoyi = !status;
										var val2 = 0;
										try {
											val2 = player.getUseValue(card, null, true);
										} catch (e) {
											player.storage.scqhKoihime_yaoyi = status;
										}
										player.storage.scqhKoihime_yaoyi = status;
										if (val2 > val1) base -= val2 - val1;
									}
									if (base < 0) return 1;
									return 0;
								},
								target(player, target) {
									var deff = get.damageEffect(target, player, player);
									return deff;
								},
							},
						},
					},
				},
			},
			scqhKoihime_hanzhan: {
				trigger: {
					global: 'chooseToCompareBegin',
				},
				filter(trigger, player) {
					if (player == trigger.player) return true;
					if (trigger.targets) return trigger.targets.includes(player);
					return player == trigger.target;
				},
				logTarget(trigger, player) {
					if (player != trigger.player) return trigger.player;
					return trigger.targets || trigger.target;
				},
				prompt2(trigger, player) {
					var targets = player == trigger.player ? (trigger.targets ? trigger.targets.slice(0) : [trigger.target]) : [trigger.player];
					var tran = get.translation(targets);
					var prompt = '令';
					prompt += tran;
					prompt += '使用随机的手牌进行拼点,你可以使用任意一张牌进行拼点.';
					if (targets.length == 1) {
						prompt += '若你赢,你可以获得';
						prompt += tran;
						prompt += '区域里的一张牌';
					}
					return prompt;
				},
				check(trigger, player) {
					var num = 0;
					var targets = player == trigger.player ? (trigger.targets ? trigger.targets.slice(0) : [trigger.target]) : [trigger.player];
					while (targets.length) {
						var target = targets.shift();
						if (target.getCards('h').length > 1) num -= get.attitude(player, target);
					}
					return num > 0;
				},
				content() {
					'step 0';
					if (!trigger.scqhKoihime_hanzhan) trigger.scqhKoihime_hanzhan = {};
					trigger.scqhKoihime_hanzhan[player.playerid] = true;
					if (!trigger.fixedResult) trigger.fixedResult = {};
					var targets = player == trigger.player ? (trigger.targets ? trigger.targets.slice(0) : [trigger.target]) : [trigger.player];
					while (targets.length) {
						var target = targets.shift();
						var hs = target.getCards('h');
						if (hs.length) trigger.fixedResult[target.playerid] = hs.randomGet();
					}
					if (player.countCards('e')) {
						var next = player.chooseCard('he', true, function (card) {
							return true;
						});
						next.set('prompt', '请选择一张牌拼点');
						next.set('ai', function (card) {
							return Math.min(13, card.number) / Math.pow(Math.min(1, get.value(card)), 0.25);
						});
					} else event.finish();
					('step 1');
					if (result) {
						var card = (result.cards || [])[0] || false;
						if (card) trigger.fixedResult[player.playerid] = card;
					}
				},
				group: ['scqhKoihime_hanzhan_after'],
				subSkill: {
					after: {
						trigger: {
							global: 'chooseToCompareAfter',
						},
						skillTarget(trigger, player) {
							var target = false;
							if (trigger.target) {
								if (player == trigger.target) target = trigger.player;
								else if (player == trigger.player) target = trigger.target;
							} else if (trigger.targets) {
								if (trigger.targets.includes(player)) {
									target = trigger.player;
								}
							}
							return target;
						},
						filter(trigger, player) {
							if (trigger.preserve) return false;
							if (!trigger.scqhKoihime_hanzhan) trigger.scqhKoihime_hanzhan = {};
							if (!trigger.scqhKoihime_hanzhan[player.playerid]) return false;
							var target = lib.skill.scqhKoihime_hanzhan_after.skillTarget(trigger, player) || false;
							if (!target) return false;
							if (!target.countGainableCards(player, 'hej')) return false;
							if (player == trigger.player) {
								if (trigger.num1 > trigger.num2) return true;
							} else {
								if (trigger.num1 < trigger.num2) return true;
							}
							return false;
						},
						prompt(trigger, player) {
							var prompt = '酣战:是否获得';
							var target = lib.skill.scqhKoihime_hanzhan_after.skillTarget(trigger, player) || '';
							prompt += get.translation(target);
							prompt += '区域里的一张牌';
							return prompt;
						},
						content() {
							var target = lib.skill.scqhKoihime_hanzhan_after.skillTarget(trigger, player) || false;
							if (target) player.gainPlayerCard(target, 'hej', true);
						},
					},
				},
			},
			scqhKoihime_yaodou: {
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					return true;
				},
				filterTarget(card, player, target) {
					return target != player;
				},
				content() {
					'step 0';
					if (player.canCompare(target)) {
						player.chooseToCompare(target);
					} else
						event._result = {
							bool: true,
							yaodou: true,
						};
					('step 1');
					var juedouer = [player, target];
					if (!result.tie) {
						if (result.bool) {
							if (!result.yaodou) {
								var card = get.discardPile((card) => card.name == 'sha');
								if (card) player.gain(card, 'gain2');
							}
						} else juedouer.reverse();
						var juedou = {
							name: 'juedou',
						};
						if (juedouer[0].canUse(juedou, juedouer[1])) {
							juedouer[0].useCard(juedou, juedouer[1]);
						}
					}
				},
				ai: {
					order(name, player) {
						var cards = player.getCards('h');
						if (!player.countCards('h', 'sha')) return 1;
						for (var card of cards) {
							if (card.name == 'sha') continue;
							if (card.number > 11 && get.value(card) < 7) return 9;
						}
						return get.order({ name: 'sha' }) - 1;
					},
					result: {
						player(player) {
							return 1;
						},
						target(player, target) {
							var shaMe = player.countCards('h', 'sha');
							var shaHe = target.countCards('h', 'sha');
							var eff = get.effect(target, { name: 'juedou' }, player, player);
							if (eff > 0 && shaMe >= shaHe) return 1;
							return -0.5;
						},
					},
					threaten: 1.3,
				},
			},
			scqhKoihime_xiandeng: {
				audio: 'scqhKoihime_xiaoguo',
				forced: true,
				trigger: {
					global: 'roundStart',
				},
				content() {
					var card = get.discardPile((card) => card.name == 'sha');
					if (card) player.gain(card, 'gain2');
					game.updateRoundNumber();
					var next = player.phaseUse();
					event.next.remove(next);
					trigger.next.push(next);
				},
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha') return num + 1;
					},
					targetInRange(card, player) {
						if (card.name == 'sha' && player.countUsed('sha', true) == 0) return true;
					},
				},
			},
			scqhKoihime_xiaoguo: {
				audio: 3,
				forced: true,
				trigger: {
					global: 'phaseZhunbeiBegin',
				},
				filter(trigger, player) {
					if (trigger.player == player) return false;
					return player.countCards('he');
				},
				content() {
					'step 0';
					var next = player.chooseToDiscard('he', [1, Infinity]);
					next.set('prompt', get.prompt2(event.name, trigger.player));
					next.set('target', trigger.player);
					next.set('ai', function (card) {
						var player = _status.event.player;
						var target = _status.event.target;
						var count = 0;
						if (target.hasSkillTag('noe')) {
							count = get.attitude(player, target);
						} else count = get.damageEffect(target, player, player);
						return count - get.useful(card);
					});
					('step 1');
					var cards = result.cards || [];
					if (cards.length) {
						event.draw = cards.length;
						var types = [];
						for (var card of cards) types.add(get.type2(card));
						var next = trigger.player.chooseToDiscard(cards.length, 'he', function (card) {
							var types = _status.event.types || [];
							var type = get.type2(card);
							return !types.includes(type);
						});
						next.types = types;
						next.prompt = get.translation(event.name);
						next.prompt += ':请弃置';
						next.prompt += get.cnNumber(cards.length);
						next.prompt += '张不为';
						next.prompt += get.translation(types);
						next.prompt += '类型的牌,否则';
						next.prompt += get.translation(player);
						next.prompt += '对你造成一点伤害';
						next.set('damage', get.damageEffect(trigger.player, player, player));
						next.set('noe', trigger.player.hasSkillTag('noe'));
						next.set('source', player);
						next.set('ai', function (card) {
							var player = _status.event.source;
							var value = get.value(card);
							if (_status.event.damage > 0) return 0;
							if (_status.event.noe) return 12 - value;
							return 2 * _status.event.damage - value;
						});
					} else event.finish();
					('step 2');
					var cards = result.cards || [];
					if (!cards.length) {
						player.draw(event.draw);
						trigger.player.damage();
					}
				},
			},
			scqhKoihime_jvjia: {
				forced: true,
				trigger: {
					global: 'gameDrawBegin',
				},
				content() {
					var me = player;
					var numx = trigger.num;
					trigger.num =
						typeof numx == 'function'
							? function (player) {
								if (player == me) {
									var fhp = Math.min(5, Math.max(0, player.hp));
									return fhp + numx(player);
								}
								return numx(player);
							}
							: function (player) {
								if (player == me) {
									var fhp = Math.min(5, Math.max(0, player.hp));
									return fhp + numx;
								}
								return numx;
							};
				},
				mod: {
					attackRange: (player, num) => num + Math.min(5, Math.max(0, player.hp)),
					maxHandcard: (player, num) => num + Math.min(5, Math.max(0, player.hp)),
				},
			},
			scqhKoihime_ziyuan: {
				enable: 'phaseUse',
				usable: 1,
				filterCard(card, player) {
					return true;
				},
				complexCard: true,
				selectCard() {
					return [1, 100];
				},
				discard: false,
				lose: false,
				delay: false,
				filterTarget(card, player, target) {
					return player != target;
				},
				check(card) {
					return 8.5 - get.value(card);
				},
				content() {
					player.give(cards, target, 'give');
					if (cards.length % 2 == 1) player.draw();
					else player.recover();
				},
				ai: {
					order(skill, player) {
						if (
							game.hasPlayer(function (current) {
								return current.hp < current.maxHp && current != player && get.recoverEffect(current, player, player) > 0;
							})
						) {
							return 10;
						}
						return 1;
					},
					result: {
						player(player, target) {
							var att = get.attitude(player, target);
							if (att < 0) return -1;
							if (player.needsToDiscard()) return 1;
							return 0;
						},
					},
					threaten: 1.3,
				},
			},
			scqhKoihime_yongjue: {
				trigger: {
					global: 'useCardAfter',
				},
				check(trigger, player) {
					return trigger.player.isFriendsOf(player);
				},
				logTarget: 'player',
				filter(trigger, player) {
					if (player.group != trigger.player.group) return false;
					if (trigger != trigger.player.getHistory('useCard')[0]) return false;
					if (trigger.card.name != 'sha') return false;
					var cards = trigger.cards.filter((card) => {
						var pos = get.position(card, true);
						return pos == 'o' || pos == 'd';
					});
					return cards.length;
				},
				content() {
					var cards = trigger.cards.filter((card) => {
						var pos = get.position(card, true);
						return pos == 'o' || pos == 'd';
					});
					trigger.player.gain(cards, 'gain2');
				},
				global: 'scqhKoihime_yongjue_ai',
				subSkill: {
					ai: {
						ai: {
							presha: true,
							skillTagFilter(player) {
								if (
									!game.hasPlayer(function (current) {
										if (current.group != player.group) return false;
										return current.isFriendsOf(player) && current.hasSkill('scqhKoihime_yongjue');
									})
								) {
									return false;
								}
							},
						},
					},
				},
			},
			scqhKoihime_fengshi: {
				trigger: {
					player: 'useCardToPlayered',
				},
				filter(trigger, player) {
					var type = get.type(trigger.card);
					if (!['basic', 'trick'].includes(type)) return false;
					if (!trigger.isFirstTarget) return false;
					if (trigger.targets.length != 1) return false;
					var target = trigger.targets[0];
					if (player.countCards('h') <= target.countCards('h')) return false;
					return player.hasCard((card) => {
						return lib.filter.cardDiscardable(card, player, 'fengshi');
					}, 'he');
				},
				logTarget: 'target',
				check(trigger, player) {
					var target = trigger.targets[0];
					return get.effect(target, { name: 'guohe_copy2' }, player, player);
				},//QQQ
				content() {
					player.chooseToDiscard('he', true);
					var target = trigger.targets[0];
					player.discardPlayerCard(target, 'he', true);
					if (get.tag(trigger.card, 'damage')) {
						var id = target.playerid;
						var map = trigger.parent.customArgs;
						if (!map[id]) map[id] = {};
						if (typeof map[id].extraDamage != 'number') map[id].extraDamage = 0;
						map[id].extraDamage++;
					}
				},
			},
			scqhKoihime_qianya: {
				forced: true,
				trigger: {
					target: 'useCardToTargeted',
				},
				filter(trigger, player) {
					var type = get.type(trigger.card, 'trick');
					if (!player.countCards('he')) return false;
					return type == 'trick' || type == 'basic';
				},
				content() {
					'step 0';
					var nh = player.countCards('he');
					player.chooseCardTarget({
						filterCard: true,
						position: 'he',
						filterTarget(card, player, target) {
							return target != player;
						},
						selectCard: [1, nh],
						ai1(card) {
							var player = _status.event.player;
							var cardname = _status.event.cardname;
							if (_status.event.du) return -get.value(card, player, 'raw');
							else if (_status.event.shuimeng) {
								if (cardname == 'wuzhong') {
									if (
										player.needsToDiscard(2, (i, player) => {
											return !ui.selected.cards.includes(i) && !player.canIgnoreHandcard(i);
										})
									)
										return 10 - get.value(card, player, 'raw');
								} else if (cardname == 'guohe') {
									if (
										player.needsToDiscard(-1, (i, player) => {
											return !ui.selected.cards.includes(i) && !player.canIgnoreHandcard(i);
										})
									)
										return 10 - get.value(card, player, 'raw');
								}
								return 0;
							} else if (cardname == 'lebu') {
								if (
									player.needsToDiscard(1, (i, player) => {
										return !ui.selected.cards.includes(i) && !player.canIgnoreHandcard(i);
									})
								) {
									return 8 - get.value(card, player, 'raw');
								} else {
									if (!ui.selected.cards.length) {
										return 6 - get.value(card, player, 'raw');
									}
									return 0;
								}
							} else if (cardname == 'shunshou') {
								if (_status.event.nh <= 2) return get.value(card, player, 'raw');
							} else if (cardname == 'huogong') {
								if (player.hp == 1) return get.value(card, player, 'raw');
							}
							if (ui.selected.cards.length) return 0;
							return 7 - get.value(card, player, 'raw');
						},
						ai2(target) {
							var att = get.attitude(_status.event.player, target);
							var nh2 = target.countCards('h');
							var num = Math.sqrt(1 + nh2);
							var cardname = _status.event.cardname;
							if (_status.event.du) return 0.5 - att;
							else if (_status.event.shuimeng) {
								return att / num;
							} else if (cardname == 'lebu') {
								return att / num;
							} else if (cardname == 'shunshou') {
								if (_status.event.nh <= 2) return att / num;
							} else if (cardname == 'huogong') {
								if (_status.event.player.hp == 1) return att / num;
							}
							if (_status.event.nh > nh2 + 1) {
								return att / num;
							}
							return 0;
						},
						du: player.hasCard(function (card) {
							return get.value(card, player, 'raw') < 0;
						}),
						shuimeng: trigger.getParent(2).name == 'shuimeng',
						nh: nh,
						cardname: trigger.card.name,
						prompt: get.prompt2(event.name),
					});
					('step 1');
					if (result.bool) {
						var targets = result.targets || [];
						var cards = result.cards || [];
						var map = {};
						for (let card of cards) {
							let position = get.position(card);
							let ip = map[position] || [];
							ip.add(card);
							map[position] = ip;
						}
						var temp = false;
						for (let position in map) {
							let ip = map[position] || [];
							if (!ip.length) continue;
							let hs = player.getCards(position, (card) => {
								return !cards.includes(card);
							});
							if (!hs.length) temp = true;
						}
						if (!temp) event.finish();
						player.give(cards, targets[0]);
					} else event.finish();
					('step 2');
					var targets = trigger.parent.targets || [];
					var addtarget = game.filterPlayer(function (target) {
						let canTarget = lib.filter.targetEnabled2(trigger.card, trigger.player, target);
						if (!canTarget) return false;
						return !targets.includes(target);
					});
					var removetarget = game.filterPlayer(function (target) {
						return targets.includes(target);
					});
					if (addtarget.length || removetarget.length) {
						var next = player.chooseTarget(function (card, player, target) {
							let uit = ui.selected.targets || [];
							let addtarget = _status.event.addtarget;
							let removetarget = _status.event.removetarget;
							if (addtarget.includes(target)) {
								target.prompt('增加目标');
								return true;
							}
							if (removetarget.includes(target)) {
								target.prompt('移除目标');
								return true;
							}
							return false;
						});
						next.set('addtarget', addtarget);
						next.set('removetarget', removetarget);
						next.set('prompt', '请选择【' + get.translation(event.name) + '】的目标');
						next.set('prompt2', '是否增加或减少【' + get.translation(trigger.card) + '】的一个目标？');
						next.set('ai', function (target) {
							var trigger = _status.event.getTrigger();
							if (trigger.targets.includes(target)) {
								return -get.effect(target, trigger.card, trigger.player, _status.event.player);
							} else {
								return get.effect(target, trigger.card, _status.event.player, _status.event.player);
							}
							return false;
						});
					} else event.finish();
					('step 3');
					var targets = result.targets || [];
					var target = targets[0] || false;
					if (target) {
						if (trigger.parent.targets.includes(target)) {
							trigger.parent.targets.removeArray(targets);
							game.log(get.translation(targets), '被移出了【', get.translation(trigger.card), '】的目标');
						} else {
							trigger.parent.targets.addArray(targets);
							game.log(get.translation(targets), '成为了【', get.translation(trigger.card), '】的目标');
						}
					}
				},
			},
			scqhKoihime_shidao: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player.canCompare(target);
				},
				content() {
					'step 0';
					player.chooseToCompare(target);
					('step 1');
					if (!result.bool) {
						player.addTempSkill('scqhKoihime_shidao_respond', 'roundStart');
						player.markAuto('scqhKoihime_shidao_respond', [target]);
						event.finish();
					} else {
						var vcards = [];
						for (var name of lib.inpile) {
							if (get.type(name) != 'trick') continue;
							var card = {
								name: name,
							};
							var currents = game.filterPlayer((current) => player.canUse(card, current));
							if (currents.length) vcards.push(['锦囊', '', name]);
						}
						if (vcards.length) {
							var list = ['是否视为使用一张普通锦囊牌？', [vcards, 'vcard']];
							var next = player.chooseButton(list);
							next.set('ai', function (button) {
								var player = _status.event.player;
								var card = {};
								card.name = button.link[2];
								card.isCard = true;
								return player.getUseValue(card);
							});
						} else event.finish();
					}
					('step 2');
					if (result) {
						var links = result.links || [];
						if (links.length) {
							var card = {
								name: links[0][2],
							};
							var next = player.chooseUseTarget(card);
							next.addCount = false;
							next.forced = true;
						}
					}
				},
				ai: {
					order(obj, player) {
						var num1 = get.order({ name: 'sha' }, player);
						return num1 - 1;
					},
					result: {
						player(player, target) {
							let att = get.attitude(player, target);
							return -att;
						},
						target(player, target) {
							return;
						},
					},
				},
				global: ['scqhKoihime_shidao_aiShan'],
				subSkill: {
					aiShan: {
						charlotte: true,
						ai: {
							respondSha: true,
							respondShan: true,
						},
					},
					respond: {
						marktext: '侍',
						intro: {
							content: '$',
						},
						charlotte: true,
						forced: true,
						trigger: {
							global: ['chooseToUseBegin', 'chooseToRespondBegin'],
						},
						filter(trigger, player) {
							var storage = player.storage.scqhKoihime_shidao_respond || [];
							if (!storage.includes(trigger.player)) return false;
							if (!player.hasSkill('scqhKoihime_shidao')) return false;
							var evt = trigger.parent;
							if (!evt || !evt.card || !lib.card[evt.name]) return false;
							if (trigger.scqhKoihime_shidao) return false;
							if (trigger.player == player) return false;
							if (trigger.responded) return false;
							var list = lib.skill.scqhKoihime_shidao_respond.shidao(trigger, player) || [];
							return list.length;
						},
						shidao(trigger, player) {
							var list = ['sha', 'shan'].filter((name) => {
								var cardx = {
									name: name,
								};
								if (trigger.name == 'chooseToRespond') {
									if (!lib.filter.cardRespondable(cardx, player, trigger)) return false;
								}
								if (!trigger.filterCard) return false;
								if (!trigger.filterCard(cardx, player, trigger)) return false;
								return true;
							});
							return list;
						},
						content() {
							'step 0';
							var list = lib.skill.scqhKoihime_shidao_respond.shidao(trigger, player) || [];
							var card = {
								name: list[0],
							};
							var next = player.chooseToRespond(card);
							next.prompt = '是否发动【侍道】替';
							next.prompt += get.translation(trigger.player);
							next.prompt += '打出一张';
							next.prompt += get.translation(card);
							next.prompt += '？';
							next.set('scqhKoihime_shidao', true);
							next.set('source', trigger.player);
							next.set(
								'checkx',
								trigger.player.countCards('hs', (cardx) => {
									if (cardx.name != card.name) return false;
									if (trigger.name == 'chooseToRespond') {
										if (!lib.filter.cardRespondable(cardx, player, trigger)) return false;
									}
									if (!trigger.filterCard) return false;
									if (!trigger.filterCard(cardx, player, trigger)) return false;
									return true;
								})
							);
							next.set('ai', () => {
								var player = _status.event.player;
								var source = _status.event.source;
								var checkx = _status.event.checkx;
								var att = get.attitude(player, source);
								if (checkx) return -1;
								return att - 2;
							});
							next.set('skillwarn', '替' + get.translation(trigger.player) + '打出一张' + get.translation(card));
							next.autochoose = lib.filter.autoRespondShan;
							('step 1');
							if (result.bool) {
								trigger.responded = true;
								trigger.untrigger();
								trigger.result = {
									bool: true,
									card: result.card,
								};
								trigger.animate = false;
								if (typeof player.ai.shown == 'number' && player.ai.shown < 0.95) {
									player.ai.shown += 0.3;
									if (player.ai.shown > 0.95) player.ai.shown = 0.95;
								}
							}
						},
						ai: {
							respondSha: true,
							respondShan: true,
							skillTagFilter(player) {
								if (!player.hasSkill('scqhKoihime_shidao')) return false;
							},
						},
					},
				},
			},
			scqhKoihime_zhendu: {
				forced: true,
				preHidden: true,
				trigger: {
					global: 'phaseUseBegin',
				},
				filter(trigger, player) {
					if (!player.countCards('he')) return false;
					if (!trigger.player.isIn()) return false;
					return trigger.player.hasUseTarget({ name: 'jiu' }, null, true);
				},
				content() {
					'step 0';
					var nono = Math.abs(get.attitude(player, trigger.player)) < 3;
					var deff = get.damageEffect(trigger.player, player, player);
					var hasuse = trigger.player.hasUseTarget({ name: 'jiu' }, null, true);
					if (trigger.player.hp > 2 || player == trigger.player || deff <= 0 || !hasuse) {
						nono = true;
					} else if (trigger.player.hp > 1 && player.countCards('h') < 3 && trigger.player.canUse('sha', player) && !player.countCards('h', 'shan') && trigger.player.countCards('h') >= 3) {
						nono = true;
					}
					var next = player.chooseToDiscard('he', get.prompt2(event.name, trigger.player));
					next.set('ai', function (card) {
						if (_status.event.nono) return -1;
						return 7 - get.useful(card);
					});
					next.set('nono', nono);
					next.setHiddenSkill(event.name);
					('step 1');
					if (result.bool) {
						trigger.player.chooseUseTarget({ name: 'jiu' }, true, 'noTargetDelay', 'nodelayx');
					} else event.finish();
					('step 2');
					if (result.bool && trigger.player != player) trigger.player.damage();
				},
				ai: {
					threaten: 2,
					expose: 0.3,
				},
				group: ['scqhKoihime_zhendu_dying'],
				subSkill: {
					dying: {
						forced: true,
						trigger: {
							global: 'dying',
						},
						filter(trigger, player) {
							let parent = trigger.getParent('scqhKoihime_zhendu');
							return parent && parent.name == 'scqhKoihime_zhendu';
						},
						content() {
							trigger.player.addTempSkill('scqhKoihime_zhendu_notao');
						},
					},
					notao: {
						charlotte: true,
						mod: {
							targetEnabled(card, player, target, now) {
								if (card.name == 'tao') return false;
							},
						},
						mark: true,
						marktext: '<span style="text-decoration: line-through;">桃</span>',
						intro: {
							content: '不能成为【桃】的目标',
						},
					},
				},
			},
			scqhKoihime_qiluan: {
				forced: true,
				preHidden: true,
				trigger: {
					global: 'phaseJieshuBegin',
				},
				filter(trigger, player) {
					var history = player.getHistory('sourceDamage');
					return history.length;
				},
				content() {
					var count = 1;
					var history = trigger.player.getHistory('sourceDamage');
					if (history.length) count++;
					if (player.getStat('kill')) count++;
					player.draw(count);
				},
			},
			scqhKoihime_tuntian: {
				mod: {
					maxHandcard(player, num) {
						let xs = player.getExpansions('scqhKoihime_tuntian');
						if (xs.length) return num + xs.length;
					},
				},
				forced: true,
				marktext: '田',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(trigger, player) {
					if (trigger.name == 'gain' && trigger.player == player) return false;
					let evt = trigger.getl(player);
					if (!evt || !evt.cards2 || !evt.cards2.length) return false;
					let cut = _status.currentPhase;
					if (cut && cut == player) {
						if (trigger.parent.name === 'useCard') return false;
						let ds = evt.cards2.filter(function (card) {
							return card.name === 'sha';
						});
						if (ds.length) return true;
						return false;
					}
					return true;
				},
				content() {
					var skillname = 'scqhKoihime_tuntian';
					var cards = get.cards();
					if (cards.length) player.addToExpansion(cards, 'gain2').gaintag.add(skillname);
				},
				onremove(player, skill) {
					var xs = player.getExpansions(skill);
					if (xs.length) player.loseToDiscardpile(xs);
				},
			},
			scqhKoihime_ziliang: {
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					const xs = player.getExpansions('scqhKoihime_tuntian');
					return xs.length > 1;
				},
				chooseButton: {
					dialog(trigger, player) {
						const xs = player.getExpansions('scqhKoihime_tuntian');
						return ui.create.dialog('资粮', xs, 'hidden');
					},
					backup(links, player) {
						var info = {
							audio: 'scqhKoihime_ziliang',
							filterCard() {
								return false;
							},
							selectCard: -1,
							card: links[0],
							delay: false,
							content() {
								var skill = lib.skill.scqhKoihime_ziliang_backup || {};
								var card = skill.card || false;
								if (card) player.loseToDiscardpile(card);
								var skillname = 'scqhKoihime_ziliang';
								var next = game.createEvent(skillname);
								next.player = player;
								next.setContent(lib.skill[skillname].contentx);
							},
							ai: {
								order: 10,
								result: {
									player: 1,
								},
							},
						};
						return info;
					},
					prompt() {
						return '是否移去一张「田」';
					},
				},
				ai: {
					order: 1,
					combo: 'scqhKoihime_tuntian',
					result: {
						player(player) {
							const xs = player.getExpansions('scqhKoihime_tuntian');
							const count = xs.length - 1;
							return count > 1;
						},
					},
				},
				contentx() {
					'step 0';
					var list = [];
					var xs = player.getExpansions('scqhKoihime_tuntian');
					var wugu = game.filterPlayer((current) => {
						return player.canUse('wugu', current);
					});
					if (xs.length) {
						list.add('令一名角色摸' + xs.length + '张牌');
					}
					if (wugu.length && xs.length) {
						list.add('视为对至多' + xs.length + '名角色使用【五谷丰登】');
					}
					if (list.length > 1) {
						var next = player.chooseControl(list);
						next.set('ai', function () {
							return 0;
						});
					} else if (list.length) {
						event._result = {
							control: list[0],
						};
					} else event.finish();
					('step 1');
					var str = result.control || '';
					var xs = player.getExpansions('scqhKoihime_tuntian');
					var next = player.chooseTarget(true, str, function (card, player, target) {
						var wugu = _status.event.wugu;
						if (wugu) return player.canUse('wugu', target);
						return true;
					});
					next.set('ai', (target) => {
						let player = _status.event.player;
						let att = get.attitude(player, target);
						return att;
					});
					if (str.includes('五谷丰登')) {
						next.set('selectTarget', [1, xs.length]);
						next.set('wugu', true);
						event.wugu = true;
					}
					('step 2');
					var targets = result.targets || [];
					if (targets.length) {
						if (event.wugu) {
							var card = {
								name: 'wugu',
							};
							player.useCard(card, targets);
						} else {
							var xs = player.getExpansions('scqhKoihime_tuntian');
							targets[0].draw(xs.length);
						}
					}
				},
				group: ['scqhKoihime_ziliang_damage'],
				subSkill: {
					backup: {},
					damage: {
						audio: 'scqhKoihime_ziliang',
						trigger: {
							player: 'damageEnd',
						},
						filter(trigger, player) {
							const xs = player.getExpansions('scqhKoihime_tuntian');
							return xs.length > 1;
						},
						async cost(event, trigger, player) {
							const xs = player.getExpansions('scqhKoihime_tuntian');
							const result = await player
								.chooseButton([get.prompt('scqhKoihime_ziliang'), xs])
								.set('bool', xs.length >= 3)
								.set('ai', (button) => {
									const bool = _status.event.bool;
									return bool;
								})
								.forResult();
							event.result = {
								bool: result.bool,
								cards: result.links,
							};
						},
						async content(event, trigger, player) {
							const cards = event.cards || [];
							if (cards.length) player.loseToDiscardpile(cards);
							const skillname = 'scqhKoihime_ziliang';
							const next = game.createEvent(skillname);
							next.player = player;
							next.setContent(lib.skill[skillname].contentx);
						},
					},
				},
			},
			scqhKoihime_luoyu: {
				forced: true,
				preHidden: true,
				trigger: {
					target: 'useCardToTargeted',
				},
				filter(trigger, player) {
					if (trigger.card.name != 'tiesuo') return false;
					let targets = trigger.parent.targets || [];
					if (targets.includes(trigger.player)) return false;
					return lib.filter.targetEnabled2(trigger.card, trigger.player, trigger.player);
				},
				content() {
					'step 0';
					game.log(trigger.player, '成为了', trigger.card, '的额外目标');
					trigger.parent.targets.push(trigger.player);
				},
				mod: {
					targetEnabled(card, player, target, now) {
						if (get.color(card) == 'black' && get.type2(card) == 'trick') return false;
					},
				},
			},
			scqhKoihime_sijian: {
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					return true;
				},
				content() {
					'step 0';
					player.draw(2);
					('step 1');
					if (player.countCards('he')) {
						player.chooseCardTarget({
							filterCard: true,
							position: 'he',
							filterTarget: lib.filter.notMe,
							selectCard() {
								let player = _status.event.player;
								return 2;
							},
							prompt: '死谏:将两张牌交给一名其他角色',
							ai1(card) {
								if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return -1;
								if (get.tag(card, 'damage')) return 1;
								if (get.type(card) == 'equip') return 1;
								return 0;
							},
							ai2(target) {
								var player = _status.event.player;
								return get.attitude(player, target);
							},
						});
					} else event.finish();
					('step 2');
					var cards = result.cards || [];
					var targets = result.targets || [];
					var target = targets[0] || false;
					if (cards.length && target) {
						var skill = 'scqhKoihime_sijian';
						var id = skill + '_' + player.playerid;
						game.broadcastAll(lib.skill[skill].createGainTag, id, player.name);
						game.addVideo('skill', player, [skill, [id, player.name]]);
						lib.skill[id] = lib.skill[skill + '_lose'];
						var storage = target.storage[id] || {};
						if (!storage.cards) storage.cards = [];
						storage.cards.addArray(cards);
						storage.source = player;
						target.storage[id] = storage;
						target.addTempSkill(id, { player: 'phaseUseEnd' });
						player.give(cards, target).gaintag.add(id);
					}
				},
				createGainTag(skill, name) {
					if (!lib.skill[skill]) {
						lib.skill[skill] = {
							charlotte: true,
						};
					}
					lib.translate[skill] = '死谏·' + get.translation(name);
					let sourceSkill = 'scqhKoihime_sijian';
					if (!_status.postReconnect[sourceSkill]) {
						_status.postReconnect[sourceSkill] = [lib.skill[sourceSkill].createGainTag, [], []];
					}
					_status.postReconnect[sourceSkill][1].add(skill);
					_status.postReconnect[sourceSkill][2].add(name);
				},
				ai: {
					threaten: 1.1,
					order(obj, player) {
						return 10;
					},
					result: {
						player(player) {
							return 10;
						},
					},
				},
				subSkill: {
					lose: {
						onremove(player, skill) {
							var storage = player.storage[skill] || {};
							var source = storage.source || false;
							if (source && source.isIn()) {
								var card = {
									name: 'tiesuo',
								};
								if (source.hasSkill('scqhKoihime_sijian') && player.canUse(card, source)) {
									player.popup('死谏');
									player.line(source, 'green');
									game.log(source, '触发了', '#g【死谏】', '的惩罚');
									player.useCard(card, source);
								}
							}
							player.storage[skill] = {};
							player.removeGaintag(skill);
						},
						charlotte: true,
						forced: true,
						popup: false,
						trigger: {
							player: 'useCard',
						},
						filter(trigger, player) {
							if (!trigger.cards || !trigger.cards.length) return false;
							return true;
						},
						content() {
							var skill = event.name;
							var storage = player.storage[skill] || {};
							var cards = storage.cards || [];
							var cardx = trigger.cards.filter((card) => {
								return cards.includes(card);
							});
							if (cardx.length) {
								player.storage[skill] = {};
								player.removeGaintag(skill);
								player.removeSkill(skill);
							}
						},
					},
				},
			},
			scqhKoihime_suishi: {
				preHidden: true,
				forced: true,
				trigger: {
					global: 'dying',
				},
				filter(trigger, player) {
					if (trigger.player == player) return false;
					if (trigger.parent.name != 'damage') return false;
					if (!trigger.parent.source) return false;
					if (!trigger.parent.source.isLinked()) return false;
					return true;
				},
				content() {
					player.draw();
				},
				group: ['scqhKoihime_suishi_before', 'scqhKoihime_suishi_begin'],
				subSkill: {
					before: {
						forced: true,
						trigger: {
							global: 'dieBegin',
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							return trigger.player.isLinked();
						},
						content() {
							trigger.scqhKoihime_suishi = true;
						},
					},
					begin: {
						forced: true,
						trigger: {
							global: 'die',
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							return trigger.scqhKoihime_suishi;
						},
						content() {
							player.loseHp();
						},
					},
				},
			},
			scqhKoihime_zhiyan: {
				derivation: ['scqhKoihime_guayan'],
				audio: 4,
				enable: 'phaseUse',
				zhiyan(player) {
					const hs = player.getCards('h');
					const list = [];
					if (!player.hasSkill('scqhKoihime_zhiyan_draw')) {
						if (hs.length < player.maxHp) {
							list.add('draw');
						}
					}
					if (!player.hasSkill('scqhKoihime_zhiyan_give')) {
						if (hs.length > player.hp) {
							list.add('give');
						}
					}
					return list;
				},
				filter(trigger, player) {
					const list = lib.skill.scqhKoihime_zhiyan.zhiyan(player);
					return list.length;
				},
				filterCard: true,
				filterTarget(card, player, target) {
					return player != target;
				},
				position: 'he',
				selectCard() {
					const player = _status.event.player;
					const hs = player.getCards('h');
					const cards = ui.selected.cards || [];
					const num = Math.max(0, hs.length - player.hp);
					const list = lib.skill.scqhKoihime_zhiyan.zhiyan(player);
					if (cards.length) return [num, num];
					if (list.length === 1) {
						if (list[0] === 'draw') return 0;
						return [num, num];
					}
					return [0, num];
				},
				selectTarget() {
					const cards = ui.selected.cards || [];
					if (cards.length) return [1, 1];
					return [0, 0];
				},
				check(card) {
					const player = _status.event.player;
					const checkx = function (cardx, player) {
						const has = game.hasPlayer(function (current) {
							if (current == player) return false;
							if (get.value(cardx, current) <= 0) return false;
							if (get.attitude(player, current) <= 0) return false;
							return true;
						});
						const value = player.getUseValue(cardx, null, true);
						if (value <= 0 && has) return 2;
						return 1;
					};
					const count = player.countCards('h', (cardx) => checkx(cardx, player) > 0);
					if (count < player.countCards('h') - player.hp) return 0;
					return checkx(card, player);
				},
				filterOk() {
					const player = _status.event.player;
					const hs = player.getCards('h');
					const cards = ui.selected.cards || [];
					const targets = ui.selected.targets || [];
					if (targets.length) return cards.length;
					if (cards.length) return targets.length;
					if (!targets.length || !cards.length) return hs.length < player.maxHp;
					return false;
				},
				delay: false,
				discard: false,
				lose: false,
				content() {
					if (cards && cards.length && target) {
						player.addTempSkill('scqhKoihime_zhiyan_give', 'phaseUseEnd');
						player.give(cards, target);
					} else {
						player.addTempSkill('scqhKoihime_guayan', { player: 'phaseBegin' });
						player.addTempSkill('scqhKoihime_zhiyan_draw', 'phaseUseEnd');
						player.drawTo(player.maxHp);
					}
				},
				ai: {
					order(obj, player) {
						if (player.countCards('h') > player.hp) return 10;
						return 0.5;
					},
					result: {
						player(player, target) {
							const cards = ui.selected.cards || [];
							if (!cards.length && player.countCards('h') < player.maxHp) return 1;
							return 0;
						},
						target: 1,
					},
				},
				subSkill: {
					give: {
						charlotte: true,
					},
					draw: {
						charlotte: true,
					},
				},
			},
			scqhKoihime_shipo: {
				audio: 'scqhKoihime_zhiyan',
				forced: true,
				trigger: {
					player: 'phaseJieshuBegin',
				},
				filter(trigger, player) {
					let hasTarget = game.hasPlayer((current) => {
						return current !== player;
					});
					return hasTarget;
				},
				content() {
					'step 0';
					var next = player.chooseTarget(function (card, player, target) {
						return target !== player;
					});
					next.set('prompt', get.prompt2(event.name));
					next.set('ai', (target) => {
						let player = _status.event.player;
						let att = get.attitude(player, target);
						return 1 - att;
					});
					('step 1');
					var targets = result.targets || [];
					var target = targets[0] || false;
					event.target = target;
					if (target) {
						var next = player.chooseToDuiben(target);
						next.set('title', '谋弈');
						next.set('namelist', ['固守城池', '突出重围', '围城断粮', '擂鼓进军']);
						next.set('ai', (button) => {
							var source = _status.event.parent.player;
							var target = _status.event.parent.target;
							var eff = get.effect(target, { name: 'juedou' }, source, source);
							if (eff >= 10 && button.link[2] == 'db_def2' && Math.random() < 0.5) {
								return 10;
							}
							return 1 + Math.random();
						});
					} else event.finish();
					('step 2');
					var target = event.target;
					if (result.bool && target && target.isIn()) {
						if (result.player == 'db_def1') {
							if (target.hasJudge('bingliang')) {
							} else {
								var canfilter = player.canUse({ name: 'bingliang' }, target, false);
								if (canfilter && ui.cardPile.childNodes.length) {
									player.useCard({ name: 'bingliang' }, target, get.cards());
								}
							}
						} else {
							var card = { name: 'juedou' };
							if (player.canUse(card, target)) player.useCard(card, target);
						}
					}
				},
			},
			scqhKoihime_guayan: {
				audio: 'scqhKoihime_zhiyan',
				forced: true,
				trigger: {
					target: 'useCardToBefore',
					player: 'useCardToBefore',
				},
				filter(trigger, player) {
					if (get.type(trigger.card) !== 'trick') return false;
					if (trigger.card.name === 'juedou') return false;
					if (!trigger.target) return false;
					if (trigger.player == player && trigger.target == player) return false;
					return true;
				},
				content() {
					trigger.cancel();
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (get.type(card) == 'trick' && player != target) return 'zeroplayertarget';
						},
						player(card, player, target, current) {
							if (get.type(card) == 'trick' && player != target) return 'zeroplayertarget';
						},
					},
				},
			},
			scqhKoihime_yiyi: {
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					return player.countCards('he');
				},
				filterCard: true,
				position: 'he',
				check(card) {
					return 10 - get.value(card);
				},
				discard: false,
				lose: false,
				delay: false,
				prompt: '请扣置一张牌当做【异议】.其他角色于你的回合外使用类型相同的牌时,你可以移去此牌,无效之.',
				content() {
					var next = player.addToExpansion(cards, player, 'give');
					next.gaintag.add('scqhKoihime_yiyi');
				},
				marktext: '异议',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
					onunmark(storage, player) {
						let xs = player.getExpansions('scqhKoihime_yiyi');
						if (xs.length) {
							game.log(xs, '进入了弃牌堆');
							player.lose(xs, ui.discardPile);
							player.$throw(xs, xs.length);
						}
					},
				},
				group: ['scqhKoihime_yiyi_discard', 'scqhKoihime_yiyi_useCard'],
				subSkill: {
					discard: {
						forced: true,
						trigger: {
							player: 'damageEnd',
						},
						filter(trigger, player) {
							return player.countCards('he');
						},
						content() {
							'step 0';
							var next = player.chooseCard('he');
							next.prompt = get.translation(event.name);
							next.prompt2 = lib.skill.scqhKoihime_yiyi.prompt;
							('step 1');
							var cards = result.cards || [];
							if (cards.length) {
								var parentSkill = 'scqhKoihime_yiyi';
								var next = player.addToExpansion(cards, player, 'give');
								next.gaintag.add(parentSkill);
							}
						},
					},
					useCard: {
						popup: false,
						log: false,
						line: false,
						trigger: {
							global: 'useCard',
						},
						logTarget: 'player',
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let current = _status.currentPhase;
							if (current && current == player) return false;
							let xss = player.getExpansions('scqhKoihime_yiyi').filter((card) => {
								return get.type2(card) == get.type2(trigger.card);
							});
							return xss.length;
						},
						prompt2(trigger) {
							let str = '你可以移去一张异议牌(';
							str += get.translation(get.type2(trigger.card));
							str += '牌),无效【';
							str += get.translation(trigger.player);
							str += '】使用的';
							str += get.translation(trigger.card);
							return str;
						},
						check(trigger, player) {
							let att = get.attitude(player, trigger.player);
							if (att < 0) return 1;
							return 0;
						},
						content() {
							'step 0';
							var parentSkill = 'scqhKoihime_yiyi';
							var xss = player.getExpansions('scqhKoihime_yiyi').filter((card) => {
								return get.type2(card) == get.type2(trigger.card);
							});
							if (xss.length == 1) {
								event._result = {
									bool: true,
									links: xss,
								};
							} else {
								var next = player.chooseButton(['移去一张异议牌', xss], true);
								next.set('ai', get.buttonValue);
							}
							('step 1');
							var links = result.links || [];
							if (links.length) {
								player.chat('<img style=width:105px src=extension/' + lib.scqhExtension + '/ui/fengyiyi.png>');
								player.loseToDiscardpile(links);
								trigger.cancel();
							}
						},
					},
				},
			},
			scqhKoihime_danshou: {
				forced: true,
				trigger: {
					global: 'phaseJieshuBegin',
				},
				filter(trigger, player) {
					if (player == trigger.player) return false;
					var num = trigger.player.getHistory('useCard', function (evt) {
						return evt.targets && evt.targets.includes(player);
					}).length;
					return num == 0 || (trigger.player.isIn() && num <= player.countCards('he'));
				},
				content() {
					'step 0';
					var num = trigger.player.getHistory('useCard', function (evt) {
						return evt.targets && evt.targets.includes(player);
					}).length;
					event.num = num;
					if (num == 0) {
						var next = player.chooseBool('是否发动【胆守】摸一张牌？');
						next.ai = function () {
							return 1;
						};
					} else event.goto(2);
					('step 1');
					if (result.bool) {
						player.draw();
					}
					event.finish();
					('step 2');
					var num = event.num;
					var str = '是否发动【胆守】弃置';
					str += get.translation(num);
					str += '张牌并对';
					str += get.translation(trigger.player);
					str += '造成一点伤害';
					var next = player.chooseToDiscard(num, str, 'he');
					next.set('ai', function (card) {
						if (!_status.event.goon) return 0;
						var num = _status.event.parent.num;
						var value = get.value(card);
						if (num == 1) return 8 - value;
						if (num == 2) return 6.5 - value;
						return 5 - value;
					});
					next.set('goon', get.damageEffect(trigger.player, player, player) > 0);
					('step 3');
					if (result.bool) {
						player.addExpose(0.2);
						trigger.player.damage();
					}
				},
			},
			scqhKoihime_yizhong: {
				audio: 2,
				forced: true,
				trigger: {
					target: 'shaBefore',
				},
				filter(trigger, player) {
					return trigger.card && trigger.card.name === 'sha' && get.color(trigger.card) === 'red';
				},
				content() {
					var shanRe = trigger.shanRequired;
					if (typeof shanRe !== 'number' || !shanRe || shanRe < 0) {
						trigger.shanRequired = 1;
					}
					trigger.shanRequired++;
				},
				group: ['scqhKoihime_yizhong_renwang'],
				subSkill: {
					renwang: {
						audio: 'renwang_skill',
						forced: true,
						trigger: {
							target: 'shaBefore',
						},
						filter(trigger, player) {
							return trigger.card && trigger.card.name === 'sha' && get.color(trigger.card) === 'black';
						},
						content() {
							trigger.cancel();
						},
						ai: {
							effect: {
								target(card, player, target) {
									if (card.name === 'sha' && get.color(card) === 'black') return 'zeroplayertarget';
								},
							},
						},
					},
				},
			},
			scqhKoihime_zhenjun: {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					return player.countCards('he');
				},
				discard: false,
				lose: false,
				delay: false,
				filterCard: true,
				position: 'he',
				filterTarget(card, player, target) {
					if (target === player) return false;
					return true;
				},
				check(card) {
					const player = _status.event.player;
					if (card.name == 'du') return 20;
					const ip = get.position(card);
					const value = get.value(card);
					if (ip === 'e' && value <= 0) return 14;
					if (
						ip === 'h' &&
						game.hasPlayer(function (current) {
							if (current === player) return false;
							if (get.attitude(player, current) <= 0) return false;
							return current.getUseValue(card) > player.getUseValue(card);
						})
					) {
						return 12;
					}
					if (
						game.hasPlayer(function (current) {
							if (current === player) return false;
							if (get.attitude(player, current) <= 0) return false;
							return true;
						})
					) {
						if (card.name == 'wuxie') return 11;
						if (card.name == 'shan' && player.countCards('h', 'shan') > 1) return 9;
					}
					return 6 / Math.max(1, get.value(card));
				},
				content() {
					'step 0';
					if (cards && cards.length && target) {
						player.give(cards, target);
					} else event.finish();
					('step 1');
					var hs = target.countCards('h');
					var es = target.countCards('e');
					if (target.isIn() && (hs > 1 || es > 1)) {
						var num = 0;
						if (hs) num++;
						if (es) num++;
						var next = target.chooseCard(true, 'he', num, '选择保留每个区域的各一张牌,弃置其余的牌', function (card) {
							var uic = ui.selected.cards || [];
							for (var x of uic) {
								if (get.position(x) === get.position(card)) return false;
							}
							return true;
						});
						next.set('complexCard', true);
						next.set('maxNum', num);
						next.set('ai', function (card) {
							return get.value(card);
						});
					} else event.finish();
					('step 2');
					if (result.bool) {
						var hes = target.getCards('he');
						hes.removeArray(result.cards);
						if (hes.length) target.discard(hes);
					}
				},
				ai: {
					order: 10,
					expose: 0.2,
					result: {
						player(player, target) {
							const att = get.attitude(player, target);
							const check = (-att * Math.min(4, target.countCards('he'))) / 4;
							const hs = target.countCards('h');
							const es = target.countCards('e');
							if (att <= 0) {
								if (hs > 1 || es > 1) return check;
							}
							return 0;
						},
						target(player, target) {
							const att = get.attitude(player, target);
							const check = (-att * Math.min(4, target.countCards('he'))) / 4;
							const hs = target.countCards('h');
							const es = target.countCards('e');
							if (att <= 0) {
								if (hs > 1 || es > 1) return check;
							}
							return 0;
						},
					},
				},
			},
			scqhKoihime_meizhuang: {
				audio: 1,
				trigger: {
					player: 'phaseJieshu',
				},
				filter(trigger, player) {
					return player.canMoveCard();
				},
				check(trigger, player) {
					return player.canMoveCard(true);
				},
				content() {
					player.moveCard(true);
				},
			},
			scqhKoihime_lifeng: {
				enable: ['chooseToUse', 'chooseToRespond'],
				vcards(trigger, player) {
					let vcards = [];
					let basic = player.countCards('he', function (card) {
						if (trigger && trigger.filterCard) {
							let cardx = {
								name: 'wuxie',
								cards: [card],
								scqhKoihime_lifeng: true,
							};
							if (!trigger.filterCard(cardx, player, trigger)) return false;
						}
						return get.type(card) == 'basic';
					});
					if (basic) vcards.add('wuxie');
					let nobasic = player.countCards('he', function (card) {
						if (trigger && trigger.filterCard) {
							let cardx = {
								name: 'sha',
								cards: [card],
								scqhKoihime_lifeng: true,
							};
							if (!trigger.filterCard(cardx, player, trigger)) return false;
						}
						return get.type2(card) == 'trick';
					});
					if (nobasic) vcards.add('sha');
					return vcards;
				},
				hiddenCard(player, name) {
					let vcards = lib.skill.scqhKoihime_lifeng.vcards(false, player);
					return vcards.includes(name);
				},
				filter(trigger, player) {
					let vcards = lib.skill.scqhKoihime_lifeng.vcards(trigger, player);
					return vcards.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						let vcards = lib.skill.scqhKoihime_lifeng.vcards(trigger, player);
						let dialog = ui.create.dialog('砺锋', 'hidden');
						dialog.add([vcards, 'vcard']);
						dialog.direct = true;
						return dialog;
					},
					check(button) {
						let player = _status.event.player;
						return 1;
					},
					backup(links, player) {
						let list = {
							position: 'he',
							selectCard() {
								return 1;
							},
							viewAs: {
								name: links[0][2],
								scqhKoihime_lifeng: true,
							},
							precontent() { },
						};
						if (list.viewAs.name == 'sha') {
							list.filterCard = function (card, player) {
								return get.type2(card) == 'trick';
							};
						} else {
							list.filterCard = function (card, player) {
								return get.type2(card) == 'basic';
							};
						}
						return list;
					},
					prompt(links, player) {
						let str = '将一张牌当做';
						str += get.translation(links[0][2]) || '';
						str += _status.event.name == 'chooseToUse' ? '使用' : '打出';
						return str;
					},
				},
				ai: {
					respondSha: true,
					respondShan: true,
					save: true,
					skillTagFilter(player) {
						return;
					},
					order: 100,
					result: {
						player(player) {
							if (_status.event.type == 'respondShan') return 1;
							return 1;
						},
					},
				},
				group: ['scqhKoihime_lifeng_after'],
				subSkill: {
					after: {
						forced: true,
						trigger: {
							player: ['useCardAfter', 'respondAfter'],
						},
						filter(trigger, player) {
							let card = (trigger.cards || [])[0] || false;
							if (!card) return false;
							if (get.type(card) != 'basic' && get.type(card) != 'trick') return false;
							return trigger.card.scqhKoihime_lifeng;
						},
						content() {
							var card = {
								name: trigger.cards[0].name,
							};
							var next = player.chooseUseTarget(card, false);
							next.set('prompt', '是否发动【砺锋】视为使用一张【' + get.translation(card.name) + '】？');
						},
					},
				},
			},
			scqhKoihime_sujun: {
				audio: 'scqhKoihime_lifeng',
				forced: true,
				trigger: {
					player: ['useCard', 'respond'],
				},
				filter(trigger, player) {
					return player.countCards('h', { type: 'basic' }) * 2 == player.countCards('h');
				},
				content() {
					if (player.countCards('h')) player.showHandcards();
					player.draw();
				},
				mod: {
					aiOrder(player, card, num) {
						var num = player.countCards('h') - 2 * player.countCards('h', { type: 'basic' });
						if (Math.abs(num) != 1) return;
						if (num == 1 && get.type(card) != 'basic') return num + 10;
						if (num == -1 && get.type(card) == 'basic') return num + 10;
					},
				},
			},
			scqhKoihime_jijin: {
				forced: true,
				mod: {
					attackRange(player, num) {
						var mark = player.countMark('scqhKoihime_jijin');
						if (mark) return num + mark;
					},
				},
				trigger: {
					player: 'useCardAfter',
				},
				check() {
					return 1;
				},
				content() {
					'step 0';
					event.target1 = game.filterPlayer((current) => {
						if (current == player) return false;
						return player.inRange(current);
					});
					('step 1');
					player.addMark('scqhKoihime_jijin', 1, false);
					('step 2');
					var target1 = event.target1 || [];
					var target2 = game.filterPlayer((current) => {
						if (current == player) return false;
						if (!player.inRange(current)) return false;
						if (!player.canUse({ name: 'sha' }, current, false)) return false;
						if (target1.includes(current)) return false;
						return true;
					});
					if (target2.length) {
						var filterCard = function (card) {
							if (card.name != 'sha') return false;
							return lib.filter.filterCard.apply(this, arguments);
						};
						var filterTarget = function (card, player, target) {
							if (!target2.includes(target)) return false;
							return lib.filter.filterTarget.apply(this, arguments);
						};
						var prompt = get.translation(event.name);
						prompt += ':是否视为对';
						prompt += get.translation(target2);
						if (target2.length > 1) prompt += '中的一人';
						prompt += '使用一张【杀】？';
						var next = player.chooseToUse(prompt, filterCard, filterTarget);
						next.set('ai2', function () {
							return get.effect_use.apply(this, arguments);
						});
					}
				},
			},
			scqhKoihime_jingbei: {
				mod: {
					attackRange(player, num) {
						var mark = player.countMark('scqhKoihime_jingbei');
						if (mark) return num - mark;
					},
				},
				enable: 'phaseUse',
				filter(trigger, player) {
					if (player.getAttackRange() <= 0) return false;
					var target1 = game.filterPlayer((current) => current != player);
					var target2 = game.filterPlayer((current) => current != player && player.inRange(current));
					return target2.length >= target1.length;
				},
				content() {
					'step 0';
					player.draw(player.getAttackRange());
					('step 1');
					player.addMark('scqhKoihime_jingbei', player.getAttackRange(), false);
				},
				ai: {
					result: {
						player: 1,
					},
				},
			},
			scqhKoihime_fuchou: {
				forced: true,
				trigger: {
					player: 'damageEnd',
				},
				filter(trigger, player) {
					var storage = player.storage.scqhKoihime_fuchou_from || [];
					return trigger.source && trigger.source != player && !storage.includes(trigger.source);
				},
				content() {
					player.addTempSkill('scqhKoihime_fuchou_end');
					player.markAuto('scqhKoihime_fuchou_end', [trigger.source]);
					player.addTempSkill('scqhKoihime_fuchou_from', { player: 'phaseAfter' });
					player.markAuto('scqhKoihime_fuchou_from', [trigger.source]);
				},
				subSkill: {
					from: {
						charlotte: true,
						intro: {
							content: '与$的距离视为1',
						},
						mod: {
							globalFrom(from, to, distance) {
								var storage = from.storage.scqhKoihime_fuchou_from || [];
								if (from.hasSkill('scqhKoihime_fuchou') && storage.includes(to)) return -Infinity;
							},
						},
					},
					end: {
						charlotte: true,
						forced: true,
						trigger: {
							global: 'phaseEnd',
						},
						filter(trigger, player) {
							if (!player.hasSkill('scqhKoihime_fuchou')) return false;
							var storage = player.storage.scqhKoihime_fuchou_end || [];
							if (!storage.length) return false;
							return player.countCards('hes');
						},
						content() {
							'step 0';
							var next = player.chooseToUse(-1);
							var storage = player.storage.scqhKoihime_fuchou_end || [];
							next.set('openskilldialog', '负仇:是否将一张牌当【杀】对' + get.translation(storage) + '使用？');
							var filterTarget = function (card, player, target) {
								if (!storage.includes(target)) return false;
								return lib.filter.filterTarget.apply(this, arguments);
							};
							next.set('filterTarget', filterTarget);
							next.set('norestore', true);
							next.set('_backupevent', 'scqhKoihime_fuchou_view');
							next.set('custom', {
								add: {},
								replace: { window() { } },
							});
							next.backup('scqhKoihime_fuchou_view');
							next.set('targetRequired', true);
							next.set('complexSelect', true);
							next.set('addCount', false);
						},
					},
				},
			},
			scqhKoihime_fuchou_view: {
				viewAs: {
					name: 'sha',
				},
				filterCard: true,
				position: 'hes',
				selectCard: 1,
				popupname: false,
				check(card) {
					return 5 - get.value(card);
				},
			},
			scqhKoihime_tieqi: {
				inherit: 'retieji',
				forced: true,
				content() {
					'step 0';
					var next = player.chooseControl(lib.suit.slice(0), 'cancel2');
					var target = trigger.target;
					next.set('target', target);
					next.set('prompt', get.prompt2(event.name, target));
					next.set('ai', (event) => {
						let target = _status.event.target;
						let att = get.attitude(player, target);
						if (att && att > 0) return 'cancel2';
						for (let suit of lib.suit) {
							let hs = target.getCards('h', { suit: suit });
							if (!hs.length) return suit;
						}
						return lib.suit.randomGet();
					});
					next.forResultControl();
					('step 1');
					var suit = result.control || 'cancel2';
					if (suit == 'cancel2') event.finish();
					else {
						var target = trigger.target;
						if (!target.hasSkill('fengyin')) target.addTempSkill('fengyin');
						player.chat('我选' + get.translation(suit));
						game.log(player, '选择了' + get.translation(suit));
						var num = target.countCards('h', 'shan');
						var next = target.chooseCard('he', function (card) {
							return card.suit == _status.event.suit;
						});
						next.set('num', num);
						next.set('suit', suit);
						next.set('prompt', '铁骑:请交给' + get.translation(player) + '一张' + get.translation(suit) + '牌,否则不能响应' + get.translation(trigger.card));
						next.set('ai', function (card) {
							var num = _status.event.num;
							if (num == 0) return 0;
							if (card.name == 'shan') return num > 1 ? 2 : 0;
							return 8 - get.value(card);
						});
					}
					('step 2');
					var cards = result.cards || [];
					if (cards.length) {
						trigger.target.give(cards, player, true);
					} else {
						trigger.parent.directHit.add(trigger.target);
					}
				},
			},
			scqhKoihime_qianxi: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player != target;
				},
				content() {
					'step 0';
					event.color = [];
					event.suit = [];
					player.draw();
					('step 1');
					var next = target.chooseToDiscard('he', true);
					next.set('prompt', '潜袭:请弃置一张牌');
					('step 2');
					var cards = result.cards || [];
					var card = cards[0] || false;
					if (card) {
						event.color.add(get.color(card, card.original == 'h' ? player : false));
						event.suit.add(card.suit);
					}
					('step 3');
					var next = player.chooseToDiscard('he');
					next.set('prompt', '潜袭:请弃置一张牌');
					('step 4');
					var cards = result.cards || [];
					var card = cards[0] || false;
					if (card) {
						event.color.add(get.color(card, card.original == 'h' ? player : false));
						event.suit.add(card.suit);
					}
					('step 5');
					var temp = 'scqhKoihime_qianxi_color';
					target.addTempSkill(temp);
					target.markAuto(temp, event.color);
				},
				ai: {
					order(item, player) {
						return 10;
					},
					result: {
						player(player, target) {
							return 1;
						},
						target(player, target) {
							let att = get.attitude(player, target);
							return att <= 0;
						},
					},
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						var temp = 'scqhKoihime_qianxi_color';
						if (tag !== 'directHit_ai') return false;
						if (!arg.target || !arg.target.hasSkill(temp)) return false;
						if (arg && arg.card.name == 'sha') {
							var storage = arg.target.storage[temp] || [];
							if (!storage.includes('red')) return false;
						}
					},
				},
				subSkill: {
					color: {
						charlotte: true,
						mod: {
							cardEnabled2(card, player) {
								var temp = 'scqhKoihime_qianxi_color';
								var storage = player.storage[temp] || [];
								if (storage.includes(get.color(card))) {
									if (get.position(card) == 'h') return false;
								}
							},
						},
						marktext: '※',
						intro: {
							content(color) {
								return '不能使用或打出' + get.translation(color) + '的手牌';
							},
						},
					},
					colorMe: {
						charlotte: true,
						mod: {
							cardname(card, player, name) {
								var temp = 'scqhKoihime_qianxi_colorMe';
								var storage = player.storage[temp] || [];
								if (storage.includes(card.suit)) return 'sha';
							},
							cardnature(card, player, name) {
								var temp = 'scqhKoihime_qianxi_colorMe';
								var storage = player.storage[temp] || [];
								if (storage.includes(card.suit)) {
									if (get.position(card) == 'h') return 'stab';
								}
							},
						},
					},
				},
			},
			scqhKoihime_追命: {
				inherit: 'retieji',
				content() {
					'step 0';
					var target = trigger.target;
					event.target = target;
					if (!target.hasSkill('fengyin')) target.addTempSkill('fengyin');
					var next = player.chooseToDuiben(target);
					next.set('title', '谋弈');
					next.set('namelist', ['出阵迎战', '拱卫中军', '直取敌营', '扰阵疲敌']);
					next.set('sourcex', player);
					next.set('targetx', target);
					next.set('ai', (button) => {
						let source = _status.event.parent.player;
						let target = _status.event.parent.target;
						let num = target.countCards('h', 'shan');
						if (num == 0) return 10;
						if (!target.countCards('he')) {
							let att = get.attitude(target, source);
							if (button.link[2] == 'db_def2') return 10;
							if (button.link[2] == 'db_atk1' && att <= 0) return 10;
						}
						return 1 + Math.random();
					});
					('step 1');
					if (result.bool) {
						if (result.player == 'db_def1') {
							player.gainPlayerCard(trigger.target, 'he', true);
						} else {
							player.draw();
							player.addTempSkill('scqhKoihime_追命_temp');
							player.addMark('scqhKoihime_追命_temp', 1, false);
							event.finish();
						}
					}
					('step 2');
					var suit = trigger.card.suit;
					var target = trigger.target;
					var num = target.countCards('h', 'shan');
					var next = target.chooseToDiscard('he', function (card) {
						return card.suit == _status.event.suit;
					});
					next.set('prompt2', '请弃置一张' + get.translation(suit) + '牌,否则不能使用闪抵消' + get.translation(trigger.card));
					next.set('ai', function (card) {
						var num = _status.event.num;
						if (num == 0) return 0;
						if (card.name == 'shan') return num > 1 ? 2 : 0;
						return 8 - get.value(card);
					});
					next.set('num', num);
					next.set('suit', suit);
					('step 3');
					if (!result.bool) {
						trigger.parent.directHit.add(trigger.target);
					}
				},
				subSkill: {
					temp: {
						charlotte: true,
						mod: {
							cardUsable(card, player, num) {
								if (card.name == 'sha' && player.hasSkill('scqhKoihime_追命')) return num + player.countMark('scqhKoihime_追命_temp');
							},
						},
					},
				},
			},
			scqhKoihime_tiandu: {
				forced: true,
				trigger: {
					player: 'judgeEnd',
				},
				filter(trigger, player) {
					return ['o', 'd'].includes(get.position(trigger.result.card, true));
				},
				content() {
					player.gain(trigger.result.card, 'gain2');
				},
				group: ['scqhKoihime_tiandu_shandian'],
				subSkill: {
					shandian: {
						audio: 'scqhKoihime_tiandu',
						forced: true,
						trigger: {
							player: 'phaseZhunbeiBegin',
						},
						content() {
							player.executeDelayCardEffect('shandian');
						},
					},
				},
			},
			scqhKoihime_guicai: {
				forced: true,
				trigger: {
					global: 'judge',
				},
				filter(event, player) {
					return player.countCards('hes');
				},
				content() {
					'step 0';
					var str = get.translation(trigger.player);
					str += '的';
					str += trigger.judgestr || '';
					str += '判定为';
					str += get.translation(trigger.player.judging[0]);
					str += ',';
					str += get.prompt(event.name);
					var next = player.chooseCard(str, 'hes', function (card) {
						var player = _status.event.player;
						var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
						if (mod2 != 'unchanged') return mod2;
						var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
						if (mod != 'unchanged') return mod;
						return true;
					});
					next.set('ai', function (card) {
						var trigger = _status.event.getTrigger();
						var player = _status.event.player;
						var judging = _status.event.judging;
						var result = trigger.judge(card) - trigger.judge(judging);
						var attitude = get.attitude(player, trigger.player);
						if (attitude == 0 || result == 0) return 0;
						if (attitude > 0) return result;
						else return -result;
					});
					next.set('judging', trigger.player.judging[0]);
					('step 1');
					if (result.bool) {
						player.respond(result.cards, 'highlight', event.name, 'noOrdering')._triggered = null;
					} else event.finish();
					('step 2');
					if (result.bool) {
						if (trigger.player.judging[0].clone) {
							trigger.player.judging[0].clone.classList.remove('thrownhighlight');
							game.broadcast(function (card) {
								if (card.clone) {
									card.clone.classList.remove('thrownhighlight');
								}
							}, trigger.player.judging[0]);
							game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
						}
						game.cardsDiscard(trigger.player.judging[0]);
						trigger.player.judging[0] = result.cards[0];
						trigger.orderingCards.addArray(result.cards);
						game.log(trigger.player, '的判定牌改为', result.cards[0]);
					}
				},
				ai: {
					rejudge: true,
					tag: {
						rejudge: 1,
					},
				},
			},
			scqhKoihime_chouce: {
				trigger: {
					player: 'damageEnd',
				},
				check() {
					return 1;
				},
				content() {
					'step 0';
					player.judge();
					('step 1');
					var color = result.color || 'none';
					var content = lib.skill.scqhKoihime_chouce[color];
					if (content) {
						var next = game.createEvent(event.name);
						next.player = player;
						next.setContent(content);
					}
				},
				black() {
					'step 0';
					var bool = game.hasPlayer(function (current) {
						return current.countDiscardableCards(player, 'hej');
					});
					if (bool) {
						var next = player.chooseTarget('筹策:弃置一名角色区域内的一张牌', function (card, player, target) {
							return target.countDiscardableCards(player, 'hej');
						});
						next.set('ai', function (target) {
							var player = _status.event.player;
							var att = get.attitude(player, target);
							if (att < 0) {
								att = -Math.sqrt(-att);
							} else {
								att = Math.sqrt(att);
							}
							return att * lib.card.guohe.ai.result.target(player, target);
						});
					} else event.finish();
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, 'green');
						player.discardPlayerCard(target, 'hej', true);
					}
				},
				red() {
					'step 0';
					player.draw(2);
					('step 1');
					if (player.countCards('he')) {
						if (_status.connectMode) {
							game.broadcastAll(function () {
								_status.noclearcountdown = true;
							});
						}
						event.given_map = {};
						event.num = 2;
					} else event.finish();
					('step 2');
					player.chooseCardTarget({
						filterCard(card, player) {
							return get.itemtype(card) == 'card' && !card.hasGaintag('reyiji_tag');
						},
						position: 'he',
						filterTarget: lib.filter.notMe,
						selectCard: [1, event.num],
						prompt: '请选择【筹策】要分配的卡牌和目标',
						ai1(card) {
							if (!ui.selected.cards.length) return 1;
							return 0;
						},
						ai2(target) {
							var player = _status.event.player;
							var card = ui.selected.cards[0];
							var val = target.getUseValue(card);
							if (val > 0) return val * get.attitude(player, target) * 2;
							return get.value(card, target) * get.attitude(player, target);
						},
					});
					('step 3');
					if (result.bool) {
						var cards = result.cards || [];
						var target = result.targets[0].playerid;
						player.addGaintag(cards, 'reyiji_tag');
						event.num -= cards.length;
						var mapid = event.given_map[target] || [];
						mapid.addArray(cards);
						event.given_map[target] = mapid;
						if (event.num > 0) event.goto(2);
					} else if (event.num == 2) {
						if (_status.connectMode) {
							game.broadcastAll(function () {
								delete _status.noclearcountdown;
								game.stopCountChoose();
							});
						}
					}
					('step 4');
					if (_status.connectMode) {
						game.broadcastAll(function () {
							delete _status.noclearcountdown;
							game.stopCountChoose();
						});
					}
					var map = [];
					var cards = [];
					for (var i in event.given_map) {
						var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
						player.line(source, 'green');
						map.push([source, event.given_map[i]]);
						cards.addArray(event.given_map[i]);
					}
					game.loseAsync({
						gain_list: map,
						player: player,
						cards: cards,
						giver: player,
						animate: 'giveAuto',
					}).setContent('gaincardMultiple');
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) {
								if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
								if (!target.hasFriend()) return;
								if (target.hp >= 4) return [1, get.tag(card, 'damage') * 1.5];
								if (target.hp == 3) return [1, get.tag(card, 'damage') * 1];
								if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
							}
						},
					},
				},
			},
			scqhKoihime_ganglie: {
				audio: 2,
				preHidden: true,
				trigger: {
					player: 'damageEnd',
				},
				logTarget: 'source',
				filter(trigger, player) {
					return true;
				},
				check(trigger, player) {
					var source = trigger.source;
					if (source) {
						var att = get.attitude(player, trigger.source);
						return att <= 0;
					}
					return 1;
				},
				content() {
					'step 0';
					player.judge(function (card) {
						if (get.color(card) == 'red') return 1;
						return 0;
					});
					('step 1');
					var source = trigger.source;
					if (source && source.isIn()) {
						if (result.color == 'black') {
							player.discardPlayerCard(source, 'he', true);
						} else source.damage();
					}
					var cards = (trigger.cards || []).filterInD() || [];
					if (result.suit == 'heart' && cards.length) {
						var card = {
							name: 'tao',
							cards: cards,
						};
						player.chooseUseTarget(card, true);
					}
				},
				ai: {
					expose: 0.4,
					maixie: true,
					maixie_hp: true,
					maixie_defend: true,
					effect: {
						target(card, player, target) {
							if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
							if (get.tag(card, 'damage') && player != target) {
								var cards = card.cards;
								var evt = _status.event;
								if (evt.player == target && card.name == 'damage' && evt.parent.type == 'card') {
									cards = evt.parent.cards.filterInD();
								}
								if (target.hp <= 1) return;
								if (get.itemtype(cards) != 'cards') return;
								for (const i of cards) {
									if (i.name == 'tao') return [1, 5];
								}
								if (get.value(cards, target) >= 7 + target.getDamagedHp()) return [1, 3];
								return [1, 0.6];
							}
						},
					},
				},
			},
			scqhKoihime_xuehen: {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player.canCompare(target);
				},
				content() {
					'step 0';
					player.chooseToCompare(target);
					('step 1');
					if (result.bool) {
						var card = {
							name: 'sha',
						};
						if (player.canUse(card, target, false)) {
							player.useCard(card, target, 'noai', false);
						}
					} else {
						target.line(player);
						player.markAuto('scqhKoihime_xuehen', [target]);
						var storage = player.storage.scqhKoihime_xuehen_damage || {};
						var count = storage[target.playerid] || 0;
						count += 1;
						storage[target.playerid] = count;
						player.storage.scqhKoihime_xuehen_damage = storage;
						player.damage(target);
					}
				},
				intro: {
					content: '$',
				},
				ai: {
					order: 6.5,
					result: {
						target(player, target) {
							var hs = player.getCards('h').sort(function (a, b) {
								return b.number - a.number;
							});
							var ts = target.getCards('h').sort(function (a, b) {
								return b.number - a.number;
							});
							if (!hs.length || !ts.length) return 0;
							if (hs[0].number > ts[0].number || hs[0].number - ts.length >= 9 + Math.min(2, player.hp / 2)) return get.sgnAttitude(player, target) * get.effect(target, { name: 'shunshou_copy2' }, player, player);
							return 0;
						},
					},
				},
				group: ['scqhKoihime_xuehen_damage'],
				subSkill: {
					damage: {
						audio: 'scqhKoihime_xuehen',
						forced: true,
						trigger: {
							source: 'damageBegin1',
						},
						logTarget: 'player',
						filter(trigger, player) {
							var storage = player.storage.scqhKoihime_xuehen || [];
							return storage.includes(trigger.player);
						},
						content() {
							var target = trigger.player;
							var storage = player.storage.scqhKoihime_xuehen_damage || {};
							var count = storage[target.playerid] || 1;
							trigger.num += count;
							player.storage.scqhKoihime_xuehen_damage[target.playerid] = 0;
							player.unmarkAuto('scqhKoihime_xuehen', [target]);
						},
					},
				},
			},
			scqhKoihime_nishi: {
				forced: true,
				trigger: {
					player: 'useCard',
				},
				filter(trigger, player) {
					let targets = trigger.targets || [];
					if (targets.length != 1) return false;
					if (!targets.includes(player)) return false;
					return true;
				},
				content() {
					trigger.effectCount += 1;
					game.log(trigger.card, '额外结算一次');
					player.turnOver();
				},
			},
			scqhKoihime_shuzheng: {
				trigger: {
					player: 'phaseDrawEnd',
				},
				filter(trigger, player) {
					return true;
				},
				check(trigger, player) {
					if (player.isTurnedOver()) return 1;
					let players = game.filterPlayer((current) => {
						if (player == current) return false;
						let att = get.attitude(player, current);
						return att > 0;
					});
					return players.length;
				},
				content() {
					'step 0';
					player.turnOver();
					('step 1');
					var str = get.translation(event.name);
					str += ':指定一名角色,令其获得一个额外回合';
					var next = player.chooseTarget(function (card, player, target) {
						return target != player;
					});
					next.set('prompt', str);
					next.set('ai', (target) => {
						let player = _status.event.player;
						let att = get.attitude(player, target);
						return att;
					});
					('step 2');
					var targets = result.targets || [];
					var target = targets[0] || false;
					if (target) {
						player.line(target, 'green');
						target.phase('nodelay');
					}
				},
			},
			scqhKoihime_mengbi: {
				intro: {
					content: '翻面后,失去#点体力',
				},
				forced: true,
				trigger: {
					player: ['damageEnd', 'turnOverAfter'],
				},
				filter(trigger, player) {
					if (trigger.name == 'damage') return player.isTurnedOver();
					return player.countMark('scqhKoihime_mengbi');
				},
				content() {
					if (trigger.name == 'damage') {
						player.addMark('scqhKoihime_mengbi', trigger.num, false);
						player.recover(trigger.num);
					} else {
						var count = player.countMark('scqhKoihime_mengbi');
						player.removeMark('scqhKoihime_mengbi', count, false);
						player.loseHp(count);
					}
				},
			},
			scqhKoihime_kanpo: {
				audio: 'kongcheng1',
				enable: 'chooseToUse',
				filterCard(card, player) {
					return true;
				},
				viewAsFilter(player) {
					return player.countCards('hes');
				},
				viewAs: {
					name: 'wuxie',
				},
				position: 'hes',
				check(card) {
					const tri = _status.event.getTrigger();
					if (tri && tri.card && tri.card.name == 'chiling') return -1;
					return 8 - get.value(card);
				},
				threaten: 1.2,
				ai: {
					basic: {
						useful: [6, 4, 3],
						value: [6, 4, 3],
					},
					result: {
						player: 1,
					},
					expose: 0.2,
				},
				group: [],
				subSkill: {},
			},
			scqhKoihime_miaoji: {
				audio: 'kongcheng1',
				forced: true,
				trigger: {
					player: 'useCard',
				},
				filter(trigger, player) {
					return get.type2(trigger.card) == 'trick';
				},
				content() {
					var storage = player.storage.scqhKoihime_miaoji || false;
					if (!storage) player.draw();
					else trigger.nowuxie = true;
					player.changeZhuanhuanji('scqhKoihime_miaoji');
				},
				mark: true,
				zhuanhuanji: true,
				marktext: '☯',
				intro: {
					name: false,
					content(storage, player, skill) {
						if (!storage) return '阳';
						return '阴';
					},
				},
			},
			scqhKoihime_cangzhuo: {
				mod: {
					ignoredHandcard(card, player) {
						if (get.type2(card, player) != 'trick') return;
						var history = player.getHistory('useCard', function (evt) {
							return get.type(evt.card, 'trick') == 'trick';
						});
						if (!history.length) return true;
					},
					cardDiscardable(card, player, name) {
						if (get.type2(card, player) != 'trick') return;
						var history = player.getHistory('useCard', function (evt) {
							return get.type(evt.card, 'trick') == 'trick';
						});
						if (!history.length && name == 'phaseDiscard') return false;
					},
				},
				forced: true,
				trigger: {
					player: 'phaseJieshuBegin',
				},
				filter(trigger, player) {
					var history = player.getHistory('useCard', function (evt) {
						return get.type(evt.card, 'trick') == 'trick';
					});
					return !history.length;
				},
				content() {
					player.draw();
				},
			},
			scqhKoihime_kongcheng: {
				audio: 'kongcheng1',
				usable: 1,
				trigger: {
					target: 'useCardToTargeted',
				},
				filter(trigger, player) {
					return trigger.card.name == 'sha';
				},
				content() {
					player.showHandcards();
					trigger.parent.excluded.add(player);
					var evt = trigger.parent.scqhKoihime_kongcheng || [];
					evt.add(player);
					trigger.parent.scqhKoihime_kongcheng = evt;
				},
				group: ['scqhKoihime_kongcheng_end', 'kongcheng', 'kongcheng1'],
				subSkill: {
					end: {
						forced: true,
						trigger: {
							global: 'useCardAfter',
						},
						filter(trigger, player) {
							var card = {
								name: 'binglinchengxiax',
							};
							if (!trigger.player.canUse(card, player, false)) return false;
							var evt = trigger.scqhKoihime_kongcheng || [];
							return evt.includes(player);
						},
						content() {
							var card = {
								name: 'binglinchengxiax',
							};
							trigger.player.useCard(card, player, false);
						},
					},
				},
			},
			scqhKoihime_bugua: {
				forced: true,
				trigger: {
					global: 'phaseBefore',
					player: 'enterGame',
				},
				filter(trigger, player) {
					return trigger.name != 'phase' || game.phaseNumber == 0;
				},
				content() {
					'step 0';
					player.chooseToGuanxing(7);
					('step 1');
					player.addToExpansion(get.cards(7), 'draw').gaintag.add(event.name);
				},
				marktext: '星',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
					onunmark(storage, player) {
						var xs = player.getExpansions('scqhKoihime_bugua');
						if (xs.length) game.cardsDiscard(xs);
					},
				},
				group: ['scqhKoihime_bugua_zhunbei'],
				subSkill: {
					zhunbei: {
						trigger: {
							player: 'phaseZhunbeiBegin',
						},
						filter(trigger, player) {
							var xs = player.getExpansions('scqhKoihime_bugua');
							return xs.length;
						},
						prompt(trigger) {
							let player = _status.event.player;
							let xs = player.getExpansions('scqhKoihime_bugua');
							let str = '是否发动【卜卦】进行卜算';
							str += xs.length;
							str += '？';
							return str;
						},
						check(trigger, player) {
							return 1;
						},
						content() {
							var xs = player.getExpansions('scqhKoihime_bugua');
							player.chooseToGuanxing(xs.length);
						},
					},
				},
			},
			scqhKoihime_kangkai: {
				trigger: {
					global: 'useCardToTargeted',
				},
				logTarget: 'target',
				check(trigger, player) {
					var att = get.attitude(player, trigger.target);
					if (att > 0) return 1;
					if (player.hasSkill('scqhKoihime_jvzi')) return 1;
					return 0;
				},
				filter(trigger, player) {
					if (trigger.card.name != 'sha') return false;
					if (!trigger.target.isIn()) return false;
					return get.distance(player, trigger.target) <= 1;
				},
				content() {
					'step 0';
					player.draw();
					('step 1');
					if (trigger.target != player && player.countCards('he')) {
						var next = player.chooseCard(true, 'he', event.count);
						next.prompt = get.translation(event.name);
						next.prompt += ':交给';
						next.prompt += get.translation(trigger.target);
						next.prompt += '一张牌并展示之,若是装备牌,该角色可以使用此牌,将此【杀】转移给你';
						next.ai = function (card) {
							return get.value(card);
						};
					} else event.finish();
					('step 2');
					if (result && result.bool) {
						var cards = result.cards || [];
						if (cards.length) {
							player.showCards(cards);
							player.give(cards, trigger.target, 'give');
							event.card = cards[0];
						} else event.finish();
					} else event.finish();
					('step 3');
					var target = trigger.target;
					var hs = target.getCards('h');
					var card = event.card;
					if (hs.includes(card) && get.type(card, false) == 'equip') {
						target.chooseUseTarget(card);
					} else event.finish();
					('step 4');
					if (result && result.bool) {
						var target = trigger.target;
						var source = trigger.player;
						var evt = trigger.parent;
						if (source != player && lib.filter.targetEnabled(trigger.card, source, player)) {
							evt.triggeredTargets2.remove(target);
							evt.targets.remove(target);
							evt.targets.push(player);
						}
					}
				},
			},
			scqhKoihime_jvzi: {
				audio: 1,
				forced: true,
				trigger: {
					global: 'gainBefore',
				},
				filter(trigger, player) {
					if (!trigger.giver || trigger.giver != player) return false;
					if (!trigger.source || trigger.source != player) return false;
					return true;
				},
				content() {
					'step 0';
					var next = player.chooseControl('翻面', '流失体力', 'cancel');
					var val = 0;
					for (var card of trigger.cards) {
						var value = get.value(card, player);
						val += value;
					}
					var att = get.attitude(player, trigger.player);
					var check = 'cancel';
					if (att <= 0 && val > 0) {
						var eff = get.effect(player, { name: 'losehp' }, player, player);
						if (player.hasSkillTag('noturn') || player.isTurnedOver()) {
							check = '翻面';
						} else if (eff > 0) {
							check = '流失体力';
						} else check = '翻面';
					}
					next.set('check', check);
					next.set('prompt', get.prompt2(event.name));
					next.set('ai', function () {
						var check = _status.event.check;
						return check;
					});
					('step 1');
					var control = result.control || 'cancel';
					if (control != 'cancel') {
						trigger.cancel();
						if (control.includes('翻面')) {
							player.turnOver();
						} else player.loseHp();
					}
				},
			},
			scqhKoihime_xiaozhang: {
				audio: 1,
				trigger: {
					global: ['loseAfter', 'equipAfter', 'gainAfter', 'addJudgeAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(trigger, player) {
					if (trigger.parent.name == 'useCard') return false;
					var players = game.filterPlayer((current) => {
						var evt = trigger.getl(current);
						if (evt && evt.es && evt.es.length) return true;
						if (evt && evt.cards2 && evt.cards2.filter((card) => get.type(card, false) == 'equip').length) return true;
						return false;
					});
					return players.length;
				},
				check(trigger, player) {
					var att = get.attitude(player, trigger.player);
					if (att > 0) return 1;
					if (player.hasSkill('scqhKoihime_jvzi')) return 1;
					return 0;
				},
				content() {
					player.addTempSkill('scqhKoihime_xiaozhang_jieshu');
					player.draw();
				},
				global: ['scqhKoihime_xiaozhang_global'],
				subSkill: {
					global: {
						forced: true,
						trigger: {
							global: 'phaseBefore',
							player: 'loseEnd',
						},
						filter(trigger, player) {
							return true;
						},
						content() {
							var players = game.filterPlayer((current) => {
								return current.hasSkill('scqhKoihime_xiaozhang');
							});
							var current = _status.currentPhase;
							var count = 0;
							if (players.length && current && current == player) {
								player.getHistory('lose', (evt) => {
									if (evt.parent.name == 'useCard') return false;
									evt.cards.filter((card) => {
										if (get.type(card, false) == 'equip') count++;
									});
								});
							}
							player.storage[event.name] = count;
							if (count) {
								player.markSkill(event.name);
							} else player.unmarkSkill(event.name);
						},
						marktext: '账',
						intro: {
							content: '#',
						},
					},
					jieshu: {
						forced: true,
						charlotte: true,
						trigger: {
							global: 'phaseJieshuBegin',
						},
						logTarget: 'player',
						xiaozhang(current) {
							var count = 0;
							current.getHistory('lose', (evt) => {
								if (evt.parent.name == 'useCard') return false;
								evt.cards.filter((card) => {
									if (get.type(card, false) == 'equip') count++;
								});
							});
							return count;
						},
						filter(trigger, player) {
							if (!player.hasSkill('scqhKoihime_xiaozhang')) return false;
							if (!player.countCards('he')) return false;
							var current = _status.currentPhase;
							if (!current || !current.isIn() || current == player) return false;
							var count = lib.skill.scqhKoihime_xiaozhang_jieshu.xiaozhang(current) || 0;
							return count > 0;
						},
						content() {
							'step 0';
							var current = _status.currentPhase;
							var count = lib.skill.scqhKoihime_xiaozhang_jieshu.xiaozhang(current) || 0;
							var next = player.chooseCard(true, 'he', count);
							next.prompt = get.translation(event.name);
							next.prompt += ':展示';
							next.prompt += get.cnNumber(count);
							next.prompt += '张牌并且交给';
							next.prompt += get.translation(current);
							next.att = get.attitude(player, current);
							next.ai = function (card) {
								var att = _status.event.att;
								var val = get.value(card);
								if (att < 0) return 1 - val;
								return val;
							};
							('step 1');
							var cards = result.cards || [];
							var current = _status.currentPhase;
							if (cards.length) {
								player.showCards(cards);
								player.give(cards, current, 'give');
							}
						},
					},
				},
			},
			scqhKoihime_wuwang: {
				mod: {
					suit(card, suit) {
						if (suit == 'heart') return 'spade';
					},
				},
				global: ['scqhKoihime_wuwang_global'],
				subSkill: {
					global: {
						preHidden: true,
						forced: true,
						trigger: {
							player: 'useCard',
						},
						filter(trigger, player) {
							var players = game.filterPlayer((current) => {
								if (current == player) return false;
								return current.hasSkill('scqhKoihime_wuwang');
							});
							if (!players.length) return false;
							if (trigger.card.name != 'sha') return false;
							if (!player.countCards('he')) return false;
							return true;
						},
						content() {
							'step 0';
							var players = game.filterPlayer((current) => {
								if (current == player) return false;
								return current.hasSkill('scqhKoihime_wuwang');
							});
							var prompt = '是否对';
							var prompt2 = '将一张黑色牌交给';
							prompt += get.translation(players);
							prompt2 += get.translation(players);
							if (players.length > 1) {
								prompt += '中的一人';
								prompt2 += '中的一人';
							}
							prompt += '发动【';
							prompt += get.translation('scqhKoihime_wuwang');
							prompt += '】？';
							prompt2 += ',令其代替你成为「';
							prompt2 += get.translation(trigger.card);
							prompt2 += '」的伤害来源';
							player
								.chooseCardTarget({
									prompt: prompt,
									prompt2: prompt2,
									filterCard(card, player) {
										return get.color(card) == 'black';
									},
									selectCard: [1, 1],
									position: 'he',
									filterTarget(card, player, current) {
										if (current == player) return false;
										return current.hasSkill('scqhKoihime_wuwang');
									},
									ai1(card) {
										let value = get.value(card);
										let color = get.color(card);
										if (color == 'black') return 10 - value;
										return 7 - value;
									},
									ai2(target) {
										let player = _status.event.player;
										let att = get.attitude(player, target);
										return -att;
									},
								})
								.setHiddenSkill(event.name);
							('step 1');
							var cards = result.cards || [];
							var card = cards[0] || false;
							var targets = result.targets || [];
							var target = targets[0] || false;
							if (card && target) {
								player.give(cards, target, 'give');
								var color = get.color(card, target);
								trigger.customArgs.default.customSource = target;
							}
						},
					},
				},
			},
			scqhKoihime_xiahui: {
				inherit: 'xiehui',
				xiahui(trigger, player, current) {
					var cards = [];
					var cardx = trigger.getg(current) || false;
					var evt = trigger.getl(player) || false;
					var hs = current.getCards('h');
					if (!evt || !cardx) return [];
					if (evt.hs && evt.hs.length) cards.addArray(evt.hs);
					if (evt.es && evt.es.length) cards.addArray(evt.es);
					if (evt.js && evt.js.length) cards.addArray(evt.js);
					var xiahui =
						cardx.filter(function (card) {
							if (!hs.includes(card)) return false;
							if (!cards.includes(card)) return false;
							if (get.color(card, player) != 'black') return false;
							return true;
						}) || [];
					return xiahui;
				},
				filter(trigger, player) {
					if (trigger.name == 'loseAsync') {
						if (trigger.type != 'gain') return false;
					} else {
						if (trigger.player == player) return false;
					}
					return game.hasPlayer(function (current) {
						if (current == player) return false;
						var cards = lib.skill.scqhKoihime_xiahui.xiahui(trigger, player, current) || [];
						return cards && cards.length;
					});
				},
				content() {
					game.hasPlayer(function (current) {
						if (current == player) return false;
						var cards = lib.skill.scqhKoihime_xiahui.xiahui(trigger, player, current) || [];
						if (cards && cards.length) {
							current.addSkill('xiehui2');
							current.addGaintag(cards, 'xiehui');
						}
					});
				},
			},
			scqhKoihime_lianzhu: {
				enable: 'phaseUse',
				usable: 1,
				filterCard: true,
				position: 'he',
				filterTarget(card, player, target) {
					return target != player;
				},
				check(card) {
					var player = _status.event.player;
					var color = get.color(card, player);
					var num = get.value(card, player);
					if (color == 'black') {
						if (num >= 6) return 0;
						return 20 - num;
					} else {
						if (player.needsToDiscard()) return 7 - num;
					}
					return 0;
				},
				discard: false,
				lose: false,
				delay: false,
				content() {
					'step 0';
					player.give(cards, target);
					if (get.color(cards[0], player) == 'black') {
						var next = target.chooseToDiscard(2, 'he');
						next.set('prompt', '除非弃置两张牌,否则' + get.translation(player) + '摸两张牌');
						next.set('ai', function (card) {
							if (_status.event.goon) return 7 - get.value(card);
							return 0;
						});
						next.set('goon', get.attitude(target, player) < 0);
					} else event.finish();
					('step 1');
					if (!result.bool) player.draw(2);
				},
				ai: {
					order: 8,
					expose: 0.2,
					result: {
						target(player, target) {
							var uic = ui.selected.cards || [];
							if (uic.length && get.color(uic[0]) == 'red') {
								if (target.countCards('h') < player.countCards('h')) return 1;
								return 0.5;
							}
							return -1;
						},
					},
				},
			},
			scqhKoihime_yingzi: {
				forced: true,
				preHidden: true,
				trigger: {
					player: 'drawBegin',
				},
				filter(trigger, player) {
					const evt = trigger.getParent('phaseDraw');
					if (!evt || evt.name != 'phaseDraw') return false;
					if (trigger.bottom) return false;
					return true;
				},
				content() {
					trigger.num++;
				},
				mod: {
					maxHandcardBase(player, num) {
						return player.maxHp;
					},
				},
				_priority: -100,
			},
			scqhKoihime_liangfen: {
				audio: 2,
				init() {
					lib.translate.visible_scqhKoihime_liangfen_top = '两分·牌堆顶';
					lib.translate.visible_scqhKoihime_liangfen_buttom = '两分·牌堆底';
				},
				forced: true,
				trigger: {
					player: 'drawEnd',
				},
				filter(trigger, player) {
					if (get.itemtype(trigger.result) !== 'cards') return false;
					const cards = trigger.result.filter((card) => {
						const hs = player.getCards('h');
						return hs.includes(card);
					});
					if (cards.length) {
						trigger.set('scqh_liangfen', cards);
						return true;
					}
					return false;
				},
				content() {
					var tagname = 'visible_scqhKoihime_liangfen_';
					if (trigger.bottom) {
						tagname += 'buttom';
					} else tagname += 'top';
					const cards = trigger.scqh_liangfen;
					player.showCards(cards);
					player.addShownCards(cards, tagname);
				},
				subfrequent: ['top', 'buttom'],
				group: ['scqhKoihime_liangfen_top', 'scqhKoihime_liangfen_buttom'],
				isliangfen(trigger, player, skillname) {
					const evt = trigger.getl(player);
					if (!evt || !evt.hs || !evt.hs.length) return false;
					const cards = player.getCards('h', function (card) {
						return card.hasGaintag(skillname);
					});
					const hastag = function (evt, skillname) {
						for (const i in evt.gaintag_map) {
							if (evt.gaintag_map[i].includes(skillname)) return true;
						}
						return false;
					};
					return hastag(evt, skillname) && !cards.length;
				},
				subSkill: {
					top: {
						forced: true,
						trigger: {
							player: 'loseAfter',
							global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
						},
						filter(trigger, player) {
							const skillname = 'visible_scqhKoihime_liangfen_top';
							const filter = lib.skill.scqhKoihime_liangfen.isliangfen(trigger, player, skillname);
							return filter;
						},
						prompt: '是否发动【两分】从牌堆底摸一张牌？',
						content() {
							player.draw('bottom');
						},
					},
					buttom: {
						forced: true,
						trigger: {
							player: 'loseAfter',
							global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
						},
						filter(trigger, player) {
							const skillname = 'visible_scqhKoihime_liangfen_buttom';
							const filter = lib.skill.scqhKoihime_liangfen.isliangfen(trigger, player, skillname);
							return filter;
						},
						prompt: '是否发动【两分】从牌堆顶摸一张牌？',
						content() {
							player.draw();
						},
					},
				},
				ai: {
					threaten: 0.8,
				},
			},
			scqhKoihime_lingren: {
				audio: 'xinfu_lingren',
				trigger: {
					player: 'useCardToPlayered',
				},
				logTarget(trigger, player) {
					let targets = (trigger.targets || []).filter((target) => {
						return target != player;
					});
					return targets;
				},
				filter(trigger, player) {
					if (trigger.parent.triggeredTargets3.length > 1) return false;
					let targets = lib.skill.scqhKoihime_lingren.logTarget(trigger, player);
					return targets.length;
				},
				check(trigger, player) {
					let targets = lib.skill.scqhKoihime_lingren.logTarget(trigger, player);
					for (let target of targets) {
						let att = get.attitude(player, target);
						if (att <= 0) return 1;
					}
					return 0;
				},
				prompt(trigger, player) {
					let targets = lib.skill.scqhKoihime_lingren.logTarget(trigger, player);
					let prompt = '是否对';
					prompt += get.translation(targets);
					if (targets.length > 1) {
						prompt += '中的一人';
					}
					prompt += '发动【凌人】？';
					return prompt;
				},
				content() {
					'step 0';
					var targets = lib.skill.scqhKoihime_lingren.logTarget(trigger, player);
					if (targets.length > 1) {
						var next = player.chooseTarget(true, function (card, player, target) {
							return _status.event.targets.includes(target);
						});
						next.set('ai', function (target) {
							return 2 - get.attitude(_status.event.player, target);
						});
						next.set('targets', targets);
						next.set('prompt', '请选择【' + get.translation(event.name) + '】的目标');
					} else
						event._result = {
							targets: targets,
						};
					('step 1');
					var target = (result.targets || [])[0] || false;
					if (target && target.isIn()) event.target = target;
					else event.finish();
					('step 2');
					var target = event.target;
					var list = ['basic', 'trick', 'equip'];
					for (let i of list) {
						if (!lib.card[i]) lib.card[i] = {};
						if (!lib.card[i].type) lib.card[i].type = i;
						if (!lib.card[i].image) lib.card[i].image = 'ext:' + lib.scqhExtension + '/skin/card/cardback_' + i + '.png';
					}
					var str = '凌人:猜测' + get.translation(target) + '的手牌构成';
					var next1 = player.chooseButton([str, [list, 'vcard']], [0, 3]);
					next1.set('target', target);
					next1.set('ai', function (button) {
						let player = _status.event.player;
						let target = _status.event.target;
						let cards = target.getCards('h');
						if (!cards.length) return 0;
						for (let card of cards) {
							if (get.type2(card) == button.link[2]) return 1;
						}
						return 0;
					});
					('step 3');
					var types = (result.links || []).map((card) => card[2]) || [];
					var target = event.target;
					var count = 0;
					var list = ['basic', 'trick', 'equip'];
					var str1 = '猜测';
					str1 += get.translation(target);
					str1 += '的手中';
					for (let i = 0; i < list.length; i++) {
						let type = list[i];
						let hasCard = target.countCards('h', (cardx) => get.type2(cardx) == type);
						if (types.includes(type)) {
							str1 += '有';
							if (hasCard) count++;
						} else {
							str1 += '无';
							if (!hasCard) count++;
						}
						str1 += get.translation(type);
						str1 += '牌';
						if (i < list.length - 1) str1 += '、';
					}
					game.log(player, str1, ',猜对了', count, '项');
					if (target.countCards('h')) target.showHandcards();
					event.count = count;
					('step 4');
					var target = event.target;
					var count = event.count;
					if (count >= 1 && target.countCards('he')) {
						var chooseNum = Math.min(count, target.countCards('he'));
						var next2 = player.choosePlayerCard(target, 'he', [1, chooseNum], '是否将' + get.translation(target) + '的至多' + chooseNum + '张牌扣置于其武将牌上？');
						next2.set('ai', function (button) {
							if (!_status.event.goon) return 0;
							let val = get.value(button.link);
							if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
							return val;
						});
						next2.set('goon', get.attitude(player, target) <= 0);
						next2.set('forceAuto', true);
					}
					('step 5');
					var target = event.target;
					var count = event.count;
					var cards = result.cards || [];
					if (count >= 1 && cards.length) {
						target.addSkill('scqhKoihime_lingren_end');
						target.addToExpansion('giveAuto', cards, target).gaintag.add('scqhKoihime_lingren_end');
					}
					('step 6');
					var target = event.target;
					var count = event.count;
					if (count >= 2 && get.tag(trigger.card, 'damage')) {
						var id = target.playerid;
						var map = trigger.parent.customArgs;
						if (!map[id]) map[id] = {};
						if (typeof map[id].extraDamage != 'number') map[id].extraDamage = 0;
						map[id].extraDamage++;
					}
					('step 7');
					var target = event.target;
					var count = event.count;
					var xs = target.getExpansions('scqhKoihime_lingren_end');
					if (count >= 3 && xs.length) {
						var str = '获得' + get.translation(target) + '的一张【凌人】牌';
						var next = player.chooseButton([str, [xs, 'blank']]);
						next.set('ai', function (button) {
							let player = _status.event.player;
							let card = button.link;
							return player.getUseValue(card);
						});
					}
					('step 8');
					var target = event.target;
					var count = event.count;
					var cards3 = result.links || [];
					if (count >= 3 && cards3.length) {
						target.$throw(cards3);
						player.gain(cards3, 'draw');
					}
				},
				ai: {
					threaten: 2.4,
				},
				subSkill: {
					end: {
						forced: true,
						popup: false,
						charlotte: true,
						trigger: {
							global: 'phaseEnd',
						},
						filter(trigger, player) {
							var xs = player.getExpansions('scqhKoihime_lingren_end');
							return xs.length;
						},
						content() {
							'step 0';
							var xs = player.getExpansions('scqhKoihime_lingren_end');
							player.gain(xs, 'draw');
							game.log(player, '收回了' + get.cnNumber(xs.length) + '张牌');
							('step 1');
							player.removeSkill(event.name);
						},
						intro: {
							markcount: 'expansion',
							mark(dialog, storage, player) {
								var xs = player.getExpansions('scqhKoihime_lingren_end');
								if (player.isUnderControl(true)) dialog.addAuto(xs);
								else return '共有' + get.cnNumber(xs.length) + '张牌';
							},
						},
					},
				},
			},
			scqhKoihime_choubing: {
				dutySkill: true,
				enable: ['chooseToUse', 'chooseToRespond'],
				vcards(trigger, player) {
					var storage = player.storage.scqhKoihime_choubing_usable || [];
					var xs = player.getExpansions('scqhKoihime_choubing');
					if (!xs.length) return [];
					var list = [];
					for (var name of lib.inpile) {
						if (storage.includes(name)) continue;
						var type = get.type2(name);
						if (type != 'basic') continue;
						var auto = { name: name };
						if (trigger && trigger.filterCard) {
							if (!trigger.filterCard(auto, player, trigger)) continue;
						}
						list.add(name);
					}
					return list;
				},
				filter(trigger, player) {
					var list = lib.skill.scqhKoihime_choubing.vcards(trigger, player) || [];
					return list.length;
				},
				hiddenCard(player, name) {
					var list = lib.skill.scqhKoihime_choubing.vcards(false, player) || [];
					return list.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						var dialog = ui.create.dialog('筹兵', 'hidden');
						var list = lib.skill.scqhKoihime_choubing.vcards(trigger, player) || [];
						dialog._chooseButton = 2;
						dialog.add([
							list.map((name) => {
								return [name, get.translation(name)];
							}),
							'tdnodes',
						]);
						dialog.add(player.getExpansions('scqhKoihime_choubing'));
						return dialog;
					},
					filter(button) {
						var evt = _status.event;
						var player = _status.event.player;
						if (evt.dialog) {
							if (!evt.dialog._chooseButton) {
								var evt2 = _status.event.parent;
								return evt2.filterCard({ name: evt.dialog._cardName }, player, evt2);
							}
							if (ui.selected.buttons.length) {
								var str = ui.selected.buttons[0].link;
								if (typeof str != 'string' || typeof button.link == 'string') return false;
								var evt2 = _status.event.parent;
								return evt2.filterCard({ name: str }, player, evt2);
							}
							return typeof button.link == 'string';
						}
						return false;
					},
					select() {
						return _status.event.dialog ? _status.event.dialog._chooseButton || 1 : 1;
					},
					check(button) {
						return 1;
					},
					backup(links, player) {
						var name = links[0];
						var card = links[1];
						return {
							audio: 'scqhKoihime_choubing',
							filterCard(card, player) {
								return card == lib.skill.scqhKoihime_choubing_backup.card;
							},
							selectCard: -1,
							position: 'x',
							viewAs: {
								name: name,
							},
							card: card,
							precontent() {
								player.addTempSkill('scqhKoihime_choubing_usable');
								player.markAuto('scqhKoihime_choubing_usable', [event.result.card.name]);
							},
						};
					},
					prompt(links, player) {
						var card, name;
						if (links.length == 2) {
							name = links[0];
							card = links[1];
						} else {
							card = links[0];
							var event = _status.event;
							name = event.filterCard({ name: 'sha' }, player, event) ? 'sha' : 'shan';
						}
						var prompt = '将';
						prompt += get.translation(card) || '';
						prompt += '当做【';
						prompt += get.translation(name) || '';
						prompt += '】';
						prompt += _status.event.name == 'chooseToUse' ? '使用' : '打出';
						return prompt;
					},
				},
				ai: {
					respondSha: true,
					respondShan: true,
					save: true,
					skillTagFilter(player, tag, arg) {
						var xs = player.getExpansions('scqhKoihime_choubing');
						if (!xs.length) return false;
					},
					order(item, player) {
						return 1;
					},
					result: {
						player(player) {
							var dying = _status.event.dying;
							if (dying) return get.attitude(player, dying);
							if (_status.event.type == 'respondShan') return 1;
							return 1;
						},
					},
				},
				marktext: '方',
				intro: {
					markcount(storage, player, skill) {
						var xs = player.getExpansions('scqhKoihime_choubing');
						var xsd = player.storage.scqhKoihime_choubing_jieshu || [];
						var count = xs.length + '/' + xsd.length;
						return count;
					},
					content: 'expansion',
					onunmark(storage, player) {
						var xs = player.getExpansions('scqhKoihime_choubing');
						if (xs.length) {
							player.lose(xs, ui.discardPile);
							player.$throw(xs, 1000);
							game.log(xs, '进入了弃牌堆');
						}
					},
				},
				group: ['scqhKoihime_choubing_useCard', 'scqhKoihime_choubing_judge', 'scqhKoihime_choubing_achieve', 'scqhKoihime_choubing_fail', 'scqhKoihime_choubing_jieshu'],
				subSkill: {
					usable: {
						charlotte: true,
					},
					useCard: {
						audio: 'scqhKoihime_choubing',
						forced: true,
						trigger: {
							global: 'useCardAfter',
						},
						check() {
							return 1;
						},
						prompt: '是否发动【筹兵】进行判定？',
						filter(trigger, player) {
							var targets = trigger.targets || [];
							return targets.includes(player);
						},
						content() {
							player.judge();
						},
					},
					judge: {
						audio: 'scqhKoihime_choubing',
						forced: true,
						trigger: {
							player: 'judgeEnd',
						},
						filter(trigger, player) {
							return trigger.result.number && trigger.result.number > 0;
						},
						content() {
							var count = Math.min(trigger.result.number, 36 - player.countMark('charge'));
							if (count > 0) player.addMark('charge', count, false);
						},
					},
					achieve: {
						audio: 'scqhKoihime_choubing',
						forced: true,
						trigger: {
							player: 'phaseJieshuBegin',
						},
						filter(trigger, player) {
							var storage = player.storage.scqhKoihime_choubing_jieshu || [];
							return storage.length >= 36;
						},
						content() {
							game.log(player, '的', '#g【筹兵】', '使命成功');
							player.popup('使命成功');
							player.awakenSkill('scqhKoihime_choubing');
							var winners = player.getFriends();
							game.over(player == game.me || winners.includes(game.me));
						},
					},
					fail: {
						audio: 'scqhKoihime_choubing',
						forced: true,
						trigger: {
							player: 'dying',
						},
						content() {
							game.log(player, '的', '#g【筹兵】', '使命失败');
							player.popup('使命失败');
							player.awakenSkill('scqhKoihime_choubing');
						},
					},
					jieshu: {
						audio: 'scqhKoihime_choubing',
						forced: true,
						trigger: {
							global: 'phaseJieshuBegin',
						},
						filter(trigger, player) {
							var ds = Array.from(ui.discardPile.childNodes);
							var storage = player.storage.scqhKoihime_choubing_jieshu || [];
							var dsx = ds.filter((card) => !storage.includes(card));
							return dsx.length && player.countMark('charge') >= 36;
						},
						content() {
							'step 0';
							var ds = Array.from(ui.discardPile.childNodes);
							var storage = player.storage.scqhKoihime_choubing_jieshu || [];
							var dsx = ds.filter((card) => !storage.includes(card));
							var info = [get.prompt(event.name), dsx];
							var next = player.chooseButton();
							next.set('createDialog', info);
							next.set('selectButton', function () {
								var num = 0;
								var buttons = ui.selected.buttons;
								for (var i = 0; i < buttons.length; i++) {
									num += buttons[i].number;
								}
								if (num == 36) return buttons.length;
								return buttons.length + 2;
							});
							next.set('filterButton', function (button) {
								var player = _status.event.player;
								var buttons = ui.selected.buttons;
								var num = 0;
								for (var i = 0; i < buttons.length; i++) {
									num += buttons[i].number;
								}
								return button.link.number + num <= 36;
							});
							next.set('complexSelect', true);
							next.set('ai', get.buttonValue);
							('step 1');
							if (result.bool) {
								player.removeMark('charge', 36, false);
								var cards = result.links || [];
								player.markAuto('scqhKoihime_choubing_jieshu', cards);
								player.$gain2(cards);
								var next = player.addToExpansion('giveAuto', cards);
								next.gaintag.add('scqhKoihime_choubing');
								game.log(player, '将', get.cnNumber(cards.length), '张牌置于武将牌上');
							} else event.finish();
						},
					},
				},
			},
			scqhKoihime_binghuo: {
				trigger: {
					global: 'phaseJieshuBegin',
				},
				check(trigger, player) {
					return 1;
				},
				filter(trigger, player) {
					var hisOne = player.hasHistory('useCard', function (evt) {
						return evt.card && get.type(evt.card) == 'basic';
					});
					var hisTwo = player.hasHistory('respond', function (evt) {
						return evt.card && get.type(evt.card) == 'basic';
					});
					return hisOne || hisTwo;
				},
				content() {
					'step 0';
					var next = player.judge(function (card) {
						if (get.color(card) == 'black') return 2;
						return -2;
					});
					next.judge2 = function (result) {
						return result.bool === true ? true : false;
					};
					('step 1');
					var players = game.filterPlayer((current) => current != player);
					if (result.bool && players.length) {
						var next = player.chooseTarget('对一名其他角色造成１点雷电伤害', function (card, player, target) {
							return target != player;
						});
						next.set('ai', function (target) {
							return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
						});
					} else event.finish();
					('step 2');
					var targets = result.targets || [];
					var target = targets[0];
					if (target && target.isIn()) {
						player.line(target, 'thunder');
						target.damage(1, 'thunder');
					}
				},
				ai: {
					expose: 0.2,
				},
			},
			scqhKoihime_guhuo: {
				trigger: {
					global: 'judge',
				},
				check(trigger, player) {
					var att = get.attitude(player, trigger.player);
					var judge = trigger.judge(trigger.player.judging[0]);
					if (att > 0) return judge < 0;
					return judge >= 0;
				},
				prompt(trigger, player) {
					var str = get.translation(trigger.player);
					str += '的';
					str += trigger.judgestr || '';
					str += '判定为';
					str += get.translation(trigger.player.judging[0]);
					str += ',';
					str += get.prompt('scqhKoihime_guhuo');
					return str;
				},
				prompt2: '',
				async content(event, trigger, player) {
					var judging = trigger.player.judging[0];
					var card = get.cards()[0];
					game.cardsGotoOrdering(card).relatedEvent = trigger;
					player.$throw(card);
					if (trigger.player.judging[0].clone) {
						trigger.player.judging[0].clone.classList.remove('thrownhighlight');
						game.broadcast(function (card) {
							if (card.clone) {
								card.clone.classList.remove('thrownhighlight');
							}
						}, trigger.player.judging[0]);
						game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
					}
					game.cardsDiscard(trigger.player.judging[0]);
					trigger.player.judging[0] = card;
					trigger.orderingCards.add(card);
					game.log(trigger.player, '的判定牌(', judging, ')改为', trigger.player.judging[0]);
					if (get.color(card) == 'black') {
						player.$gain2(judging);
						await player.gain(judging);
					}
				},
				ai: {
					rejudge: true,
					tag: {
						rejudge: 1,
					},
				},
			},
			scqhKoihime_ezhao: {
				enable: 'phaseUse',
				usable: 1,
				content() {
					player.judge();
				},
				ai: {
					order: 1,
					result: {
						player: 1,
					},
				},
				group: ['scqhKoihime_ezhao_judge'],
				subSkill: {
					judge: {
						forced: true,
						trigger: {
							player: 'judgeEnd',
						},
						filter(trigger, player) {
							return ['o', 'd'].includes(get.position(trigger.result.card, true));
						},
						content() {
							'step 0';
							var card = {
								suit: trigger.result.suit || 'none',
								cards: [trigger.result.card],
							};
							if (card.suit == 'club') card.name = 'hongshui';
							if (card.suit == 'heart') card.name = 'huoshan';
							if (card.suit == 'spade') card.name = 'shandian';
							var players = [];
							if (card.name) {
								players = game.filterPlayer((current) => {
									if (current == player) return false;
									if (current.hasJudge(card.name)) return false;
									return current.canAddJudge(get.autoViewAs(card, card.cards));
								});
							}
							if (players.length) {
								event.card = card;
								var next = player.chooseTarget(function (card, player, target) {
									var players = _status.event.players;
									return players.includes(target);
								});
								next.set('prompt', get.prompt(event.name));
								next.set('prompt2', '将' + get.translation(card.cards) + '当做【' + get.translation(card.name) + '】置入一名其他角色的判定区');
								next.set('players', players);
								next.set('ai', function (target) {
									var player = _status.event.player;
									var att = get.attitude(player, target);
									return att <= 0;
								});
							} else event.finish();
							('step 1');
							var targets = result.targets || [];
							if (targets.length) {
								var target = targets[0];
								var card = event.card;
								player.$give(card.cards, target, false);
								target.addJudge(card, card.cards);
							}
						},
					},
				},
			},
			scqhKoihime_zhoufu: {
				trigger: {
					global: 'useCardToTargeted',
				},
				logTarget: 'target',
				filter(trigger, player) {
					if (trigger.card.name != 'sha') return false;
					if (trigger.target == player) return false;
					return true;
				},
				check(trigger, player) {
					return 1;
				},
				content() {
					'step 0';
					var next = player.judge(function (card) {
						if (get.color(card) == 'black') return 1.5;
						return -1.5;
					});
					next.judge2 = function (result) {
						return result.bool;
					};
					('step 1');
					var judge = result.judge || 0;
					if (judge > 0) {
						if (!trigger.target.isLinked()) trigger.target.link();
					}
				},
				noUse(card, player) {
					if (
						!game.hasPlayer((current) => {
							if (current == player) return false;
							return current.hasSkill('scqhKoihime_zhoufu');
						})
					)
						return false;
					if (get.position(card) != 'h') return false;
					var suits = [];
					var js = player.getCards('j');
					for (var cardx of js) suits.add(cardx.suit);
					return suits.includes(card.suit);
				},
				global: ['scqhKoihime_zhoufu_noUse'],
				subSkill: {
					noUse: {
						forced: true,
						charlotte: true,
						mod: {
							cardEnabled2(card, player) {
								var bool = lib.skill.scqhKoihime_zhoufu.noUse(card, player);
								if (bool) return false;
							},
							cardEnabled(card, player) {
								var bool = lib.skill.scqhKoihime_zhoufu.noUse(card, player);
								if (bool) return false;
							},
							cardRespondable(card, player) {
								var bool = lib.skill.scqhKoihime_zhoufu.noUse(card, player);
								if (bool) return false;
							},
							cardSavable(card, player) {
								var bool = lib.skill.scqhKoihime_zhoufu.noUse(card, player);
								if (bool) return false;
							},
						},
					},
				},
			},
			scqhKoihime_shengge: {
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					var players = game.filterPlayer((current) => current != player);
					return players.length;
				},
				filterTarget(card, player, target) {
					return target != player;
				},
				selectTarget: -1,
				content() {
					'step 0';
					var next = target.chooseCard('he', function (card) {
						return card.name == 'shan';
					});
					next.set('prompt', '交给' + get.translation(player) + '一张【闪】,否则其摸一张牌');
					next.set('ai', (card) => {
						return -1;
					});
					('step 1');
					var cards = result.cards || [];
					if (cards.length) target.give(cards, player, 'give');
					else player.draw();
				},
				ai: {
					order: 10,
					result: {
						target: 1,
					},
				},
			},
			scqhKoihime_tianlai: {
				forced: true,
				trigger: {
					player: ['useCard', 'respond'],
				},
				check() {
					return 1;
				},
				filter(trigger, player) {
					if (game.hasNature(trigger.card, 'thunder')) return false;
					var cardname = trigger.card.name;
					if (cardname == 'sha') return true;
					for (var name of ['闪', '电', '雷']) {
						if (get.translation(cardname).includes(name)) return true;
					}
					return false;
				},
				prompt2(trigger, player) {
					return '赋予' + get.translation(trigger.card) + '雷属性';
				},
				content() {
					game.setNature(trigger.card, 'thunder');
				},
				group: ['scqhKoihime_tianlai_judge'],
				subSkill: {
					judge: {
						popup: false,
						log: false,
						trigger: {
							global: 'judge',
						},
						filter(trigger, player) {
							var list = lib.skill.scqhKoihime_tianlai_judge.guhuo(player);
							return list.length;
						},
						prompt(trigger, player) {
							var str = get.translation(trigger.player);
							if (trigger.player == player) {
								str += '(你)';
							}
							str += '的';
							str += trigger.judgestr || '';
							str += '判定为';
							str += get.translation(trigger.player.judging[0]);
							str += ',';
							str += get.prompt('scqhKoihime_tianlai');
							return str;
						},
						prompt2: '',
						guhuo(player) {
							var list = [];
							var hs = player.getCards('h');
							var es = player.getCards('e');
							var ss = player.getCards('s');
							var ps = Array.from(ui.cardPile.childNodes);
							if (ps.length) list.addArray(['牌堆顶', [[ps[0]], 'blank']]);
							if (hs.length) list.addArray(['手牌区', hs]);
							if (es.length) list.addArray(['装备区', es]);
							if (ss.length) list.addArray(['如手牌区', ss]);
							return list;
						},
						async content(event, trigger, player) {
							const judging = trigger.player.judging[0];
							const list = lib.skill.scqhKoihime_tianlai_judge.guhuo(player);
							const next = player.chooseButton(list, true);
							next.set('ai', function (button) {
								const card = button.link;
								const trigger = _status.event.getTrigger();
								const player = _status.event.player;
								const judging = _status.event.judging;
								const result = trigger.judge(card) - trigger.judge(judging);
								const attitude = get.attitude(player, trigger.player);
								if (attitude == 0 || result == 0) return 0;
								if (attitude > 0) return result;
								else return -result;
							});
							next.set('judging', trigger.player.judging[0]);
							const result = (await next).result;
							if (result.bool) {
								event.highlight = true;
								event.noOrdering = true;
								const cards = result.links;
								await player.lose(cards, ui.discardPile);
								player.$throw(cards, 1000);
								if (trigger.player.judging[0].clone) {
									trigger.player.judging[0].clone.classList.remove('thrownhighlight');
									game.broadcast(function (card) {
										if (card.clone) {
											card.clone.classList.remove('thrownhighlight');
										}
									}, trigger.player.judging[0]);
									game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
								}
								game.cardsDiscard(trigger.player.judging[0]);
								trigger.player.judging[0] = cards[0];
								trigger.orderingCards.addArray(cards);
								game.log(trigger.player, '的判定牌(', judging, ')改为', cards[0]);
							}
						},
					},
				},
			},
			scqhKoihime_dianmou: {
				forced: true,
				trigger: {
					player: ['useCardAfter', 'respondAfter'],
				},
				check() {
					return 1;
				},
				filter(trigger, player) {
					return game.hasNature(trigger.card, 'thunder');
				},
				content() {
					var next = player.judge(function (card) {
						var list = ['spade', 'heart'];
						return list.includes(card.suit);
					});
					next.judge2 = function (result) {
						return result.bool;
					};
				},
				group: ['scqhKoihime_dianmou_judge'],
				subSkill: {
					judge: {
						forced: true,
						trigger: {
							player: 'judgeEnd',
						},
						filter(trigger, player) {
							var players = game.filterPlayer((current) => current != player);
							if (trigger.result.suit == 'spade' && players.length) return true;
							if (trigger.result.suit == 'heart') {
								var players2 = game.filterPlayer((current) => {
									return current != player && current.countCards('he');
								});
								return players2.length;
							}
							return false;
						},
						content() {
							'step 0';
							var prompt = '你可以';
							if (trigger.result.suit == 'spade') {
								prompt += '对一名其他角色造成一点雷属性伤害';
							} else {
								prompt += '让一名其他角色交给你一张牌';
							}
							var next = player.chooseTarget(function (card, player, target) {
								return target != player;
							});
							next.set('prompt', get.prompt(event.name));
							next.set('prompt2', prompt);
							next.set('ai', (target) => {
								var player = _status.event.player;
								return get.damageEffect(target, player, player, 'thunder');
							});
							('step 1');
							var targets = result.targets || [];
							var target = targets[0];
							event.target = target;
							if (target) {
								if (trigger.result.suit == 'spade') {
									target.damage('thunder');
									event.finish();
								} else if (target.countCards('he')) {
									var next = target.chooseCard(true, '交给' + get.translation(player) + '一张牌');
									next.set('att', get.attitude(target, player));
									next.set('ai', function (card) {
										var att = _status.event.att;
										var val = get.value(card);
										if (att > 0) return val;
										return -val;
									});
								} else event.finish();
							} else event.finish();
							('step 2');
							var cards = result.cards || [];
							var target = event.target;
							if (cards.length) target.give(cards, player, 'give');
						},
					},
				},
			},
			scqhKoihime_manchong: {
				forced: true,
				trigger: {
					player: 'damageEnd',
				},
				filter(trigger, player) {
					return true;
				},
				content() {
					'step 0';
					player.draw();
					('step 1');
					var hs = player.getCards('h');
					if (!trigger.source || !trigger.source.isIn() || !hs.length) {
						event.finish();
					} else if (hs.length > 1) {
						var next = player.chooseCard(true, get.prompt2(event.name, trigger.source));
						next.set('ai', function (card) {
							if (get.type(card) == 'basic') return 1;
							return Math.abs(get.value(card)) + 1;
						});
					} else
						event._result = {
							bool: true,
							cards: hs,
						};
					('step 2');
					var cards = result.cards || [];
					if (cards.length) {
						player.line(trigger.source, 'green');
						player.showCards(cards);
						var type = get.type(cards[0], 'trick');
						var str = '弃置一张非' + get.translation(type) + '牌,或点取消令' + get.translation(player) + '回复一点体力';
						var next = trigger.source.chooseToDiscard(str, function (card) {
							return get.type(card, 'trick') != _status.event.type;
						});
						next.set('type', type);
						next.set('source', player);
						next.set('ai', function (card) {
							let source = _status.event.source;
							let player = _status.event.player;
							let eff = get.recoverEffect(source, player, player);
							if (eff < 0) return 7 - get.value(card);
							return 0;
						});
					} else event.finish();
					('step 3');
					if (!result || !result.bool) player.recover();
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) return 0.8;
						},
					},
				},
			},
			scqhKoihime_miyi: {
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					return player.countCards('he');
				},
				chooseButton: {
					dialog(trigger, player) {
						let str = '令你即将选择角色各回复一点体力或受到一点伤害';
						let dialog = ui.create.dialog(str);
						return dialog;
					},
					chooseControl(trigger, player) {
						return ['回复体力', '受到伤害'];
					},
					check(trigger, player) {
						var damage = 0;
						var recover = 0;
						game.countPlayer((current) => {
							let eff = get.damageEffect(current, player, player);
							let att = get.attitude(player, current);
							let hp = current.getHp(true);
							if (current.hasSkillTag('maixie')) {
								if (att > 0) {
									if (current.isDamaged()) recover += att;
									else damage += att;
								}
							} else if (eff > 0 && att <= 0) {
								if (current.isDamaged()) damage += eff;
								else recover += eff;
							}
						});
						if (recover > damage) return 0;
						return 1;
					},
					backup(result, player) {
						var control = result.control;
						var map = {
							filterCard: true,
							filterTarget: true,
							selectTarget: [1, Infinity],
							check(card) {
								var value = get.value(card);
								return 10 - value;
							},
							ai: {
								order: 10,
								result: {
									player: 1,
								},
							},
						};
						if (control.includes('回复')) {
							map.precontent = function () {
								player.addTempSkill('scqhKoihime_miyi_damage');
								player.markAuto('scqhKoihime_miyi_damage', event.result.targets);
							};
							map.content = function () {
								target.recover(player);
							};
							map.ai.result.target = function (player, target) {
								let eff = get.damageEffect(target, player, player);
								let att = get.attitude(player, target);
								if (target.hasSkillTag('maixie')) {
									if (att > 0 && target.isDamaged()) return 1;
								} else {
									if (att < 0 && !target.isDamaged() && eff > 0) return 1;
								}
								return 0;
							};
						} else {
							map.precontent = function () {
								player.addTempSkill('scqhKoihime_miyi_recover');
								player.markAuto('scqhKoihime_miyi_recover', event.result.targets);
							};
							map.content = function () {
								target.damage(player);
							};
							map.ai.result.target = function (player, target) {
								let eff = get.damageEffect(target, player, player);
								let att = get.attitude(player, target);
								let hp = target.getHp(true);
								if (target.hasSkillTag('maixie')) {
									if (att > 0 && hp > 1) return 1;
									if (att < 0 && eff > 0 && target.isDamaged()) return 1;
								} else {
									if (att < 0 && eff > 0) return 1;
								}
								return 0;
							};
						}
						return map;
					},
					prompt(result, player) {
						var control = result.control;
						var str = get.prompt('scqhKoihime_miyi');
						return str;
					},
				},
				ai: {
					order(item, player) {
						return 20;
					},
					result: {
						player: 1,
					},
				},
				subSkill: {
					backup: {},
					damage: {
						charlotte: true,
						forced: true,
						trigger: {
							global: 'phaseJieshuBegin',
						},
						filter(trigger, player) {
							var targets = (player.storage.scqhKoihime_miyi_damage || []).filter((target) => {
								return target.isIn();
							});
							if (!player.hasSkill('scqhKoihime_miyi')) return false;
							return targets.length;
						},
						content() {
							var targets = (player.storage.scqhKoihime_miyi_damage || []).filter((target) => {
								return target.isIn();
							});
							for (var target of targets) target.damage(player);
						},
					},
					recover: {
						charlotte: true,
						forced: true,
						trigger: {
							global: 'phaseJieshuBegin',
						},
						filter(trigger, player) {
							var targets = (player.storage.scqhKoihime_miyi_recover || []).filter((target) => {
								return target.isIn();
							});
							if (!player.hasSkill('scqhKoihime_miyi')) return false;
							return targets.length;
						},
						content() {
							var targets = (player.storage.scqhKoihime_miyi_recover || []).filter((target) => {
								return target.isIn();
							});
							for (var target of targets) target.recover(player);
						},
					},
				},
			},
			scqhKoihime_jiaoheng: {
				enable: 'phaseUse',
				usable: 1,
				filterCard: true,
				position: 'he',
				selectCard: [1, Infinity],
				filter(trigger, player) {
					return player.countCards('he');
				},
				check(card) {
					if (ui.selected.cards.length) return -1;
					return 6 - get.value(card);
				},
				filterTarget(card, player, target) {
					return player != target;
				},
				content() {
					'step 0';
					var str = get.translation(event.name);
					str += ':弃置';
					str += get.cnNumber(cards.length);
					str += '张牌并流失一点体力,或点取消将武将牌翻面并摸';
					str += get.cnNumber(cards.length);
					str += '张牌';
					var next = target.chooseToDiscard('he', cards.length, str);
					next.set('ai', function (card) {
						if (cards.length > 3 || target.hasSkillTag('noturn') || target.isTurnedOver() || ((card.name == 'tao' || card.name == 'jiu') && lib.filter.cardSavable(card, target, target))) return -1;
						if (target.hp <= 1) {
							if (
								cards.length < target.getEnemies().length &&
								target.hasCard((cardx) => {
									return (cardx.name == 'tao' || cardx.name == 'jiu') && lib.filter.cardSavable(cardx, target, target);
								}, 'hs')
							)
								return 7 - get.value(card);
							return -1;
						}
						return 24 - 5 * cards.length - 2 * Math.min(4, target.hp) - get.value(card);
					});
					('step 1');
					if (result.bool) {
						target.loseHp();
					} else {
						target.turnOver();
						target.draw(cards.length);
					}
				},
				ai: {
					order: 2,
					threaten: 1.8,
					result: {
						target(player, target) {
							if (target.hasSkillTag('noturn')) return 0;
							if (target.isTurnedOver()) return 2;
							return -1 / (target.countCards('h') + 1);
						},
					},
				},
			},
			xx: {
				forced: true,
				trigger: {
					player: ['phaseDrawBegin2', 'phaseDiscardBegin'],
				},
				filter(event, player) {
					if (event.name == 'phaseDraw') return !event.numFixed;
					return player.countDiscardableCards(player, 'h');
				},
				content() {
					if (trigger.name == 'phaseDraw') {
						trigger.num += game.countGroup();
					} else {
						player.chooseToDiscard(game.countGroup(), 'h', true);
					}
				},
				mod: {
					maxHandcard(player, num) {
						return num + game.countGroup();
					},
					cardUsable(card, player, num) { },
				},
			},
			scqhKoihime_luanji: {
				enable: 'phaseUse',
				position: 'hes',
				viewAs: {
					name: 'wanjian',
					scqhKoihime_luanji: true,
				},
				viewAsFilter(player) {
					return player.countCards('hes') > 1;
				},
				canSuit(card, player) {
					let suit = card.suit;
					let hs = player.getCards('hes', { suit: suit });
					let storage = player.getStorage('scqhKoihime_luanji_suit') || [];
					if (ui && ui.selected) {
						let uic = ui.selected.cards || [];
						if (uic[0] && uic[0].suit != suit) return false;
					}
					if (hs.length < 2 || storage.includes(suit)) return false;
					return true;
				},
				filterCard(card, player) {
					let canSuit = lib.skill.scqhKoihime_luanji.canSuit;
					if (!canSuit || !canSuit.apply(this, arguments)) return false;
					return true;
				},
				selectCard: 2,
				complexCard: true,
				precontent() {
					var cards = event.result.cards || [];
					var suit = false;
					if (cards.length) suit = cards[0].suit;
					var name = 'scqhKoihime_luanji_suit';
					if (!player.hasSkill(name)) player.addTempSkill(name);
					if (suit) player.markAuto(name, suit);
				},
				check(card) {
					let player = _status.event.player;
					let targets = game.filterPlayer(function (current) {
						return player.canUse('wanjian', current);
					});
					let num = 0;
					for (let target of targets) {
						let eff = get.sgn(get.effect(target, { name: 'wanjian' }, player, player));
						if (target.hp == 1) eff *= 1.5;
						num += eff;
					}
					if (!player.needsToDiscard(-1)) {
						if (targets.length >= 7) {
							if (num < 2) return 0;
						} else if (targets.length >= 5) {
							if (num < 1.5) return 0;
						}
					}
					return 6 - get.value(card);
				},
				ai: {
					basic: {
						order: 8.5,
						useful: 1,
						value: 5,
					},
					wuxie(target, card, player, viewer) {
						if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
							if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
						}
					},
					result: {
						target_use(player, target) {
							if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
							let nh = target.countCards('h');
							if (get.mode() == 'identity') {
								if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
							}
							if (nh == 0) return -2;
							if (nh == 1) return -1.7;
							return -1.5;
						},
						target(player, target) {
							let nh = target.countCards('h');
							if (get.mode() == 'identity') {
								if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
							}
							if (nh == 0) return -2;
							if (nh == 1) return -1.7;
							return -1.5;
						},
					},
					tag: {
						respond: 1,
						respondShan: 1,
						damage: 1,
						multitarget: 1,
						multineg: 1,
					},
				},
				global: ['scqhKoihime_luanji_shan'],
				subSkill: {
					suit: {
						charlotte: true,
					},
					shan: {
						mod: {
							cardname(card, player) {
								let evt = _status.event;
								let evt2 = evt.parent;
								let evtfilter = evt.filterCard;
								if (evt.name != 'chooseToRespond') return;
								if (evt2.name != 'wanjian') return;
								if (!evt2.card || !evt2.card.scqhKoihime_luanji) return;
								if (evtfilter && evtfilter({ name: 'shan' }, player, evt)) return 'shan';
							},
						},
					},
				},
			},
			scqhKoihime_tushe: {
				forced: true,
				trigger: {
					player: 'useCard',
				},
				filter(trigger, player) {
					let targets = trigger.targets || [];
					if (!targets.length) return false;
					if (player.countCards('h', { type: 'basic' })) return false;
					return true;
				},
				content() {
					if (player.countCards('h')) player.showHandcards();
					player.draw(trigger.targets.length);
				},
				ai: {
					presha: true,
					pretao: true,
					threaten: 1.8,
					effect: {
						target(card, player, target) {
							if (target != player && card && get.type(card) != 'equip' && !player.countCards('h', { type: 'basic' })) {
								return [1, 0.3];
							}
						},
					},
				},
			},
			scqhKoihime_shensu: {
				marktext: '速',
				intro: {
					content: '已经跳过#次阶段',
				},
				trigger: {
					player: ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore', 'phaseJieshuBefore'],
				},
				filter(trigger, player) {
					if (trigger.name === 'phaseJudge') {
						const ds = player.getDiscardableCards(player, 'h');
						if (!ds.length) return false;
					} else if (trigger.name === 'phaseDiscard') {
						const ds = player.getDiscardableCards(player, 'he', function (card) {
							return get.type(card, false) == 'equip';
						});
						if (!ds.length) return false;
					}
					return true;
				},
				popup: false,
				log: false,
				cost: async function (event, trigger, player) {
					const skillname = 'scqhKoihime_shensu';
					const players = game.filterPlayer((current) => {
						const card = { name: 'sha' };
						const eff = get.effect(current, card, player, player);
						return eff > 0 && player.canUse(card, current, false);
					});
					let prompt = '跳过' + get.translation(trigger.name);
					if (trigger.name === 'phaseJudge' || trigger.name === 'phaseDiscard') {
						event.result = await player
							.chooseToDiscard()
							.set('prompt', get.prompt(skillname))
							.set('prompt2', '弃置一张' + (trigger.name === 'phaseJudge' ? '' : '装备') + '牌并' + prompt)
							.set('position', trigger.name === 'phaseJudge' ? 'h' : 'he')
							.set('triggername', trigger.name)
							.set('players', players)
							.set('filterCard', function (card) {
								const triggername = _status.event.triggername;
								if (triggername && triggername === 'phaseDiscard') {
									return get.type(card) === 'equip';
								}
								return true;
							})
							.set('ai', function (card) {
								const player = _status.event.player;
								const triggername = _status.event.triggername;
								if (triggername === 'phaseDiscard') {
									if (player.needsToDiscard() <= 0) return 0;
								} else if (triggername === 'phaseJudge') {
									const players = _status.event.players;
									if (!players.length && !player.countCards('j')) return 0;
								}
								return 7 - get.value(card);
							})
							.forResult();
					} else {
						const string = trigger.name === 'phaseZhunbei' || trigger.name === 'phaseJieshu' ? 'frequentSkill' : 'skillname';
						event.result = await player
							.chooseBool()
							.set('prompt', get.prompt(skillname))
							.set('prompt2', prompt)
							.set(string, skillname)
							.set('players', players)
							.set('triggername', trigger.name)
							.set('ai', function () {
								const player = _status.event.player;
								const triggername = _status.event.triggername;
								if (triggername === 'phaseDraw' || triggername === 'phaseUse') {
									const players = _status.event.players;
									if (!players.length) return 0;
								}
								return 1;
							})
							.forResult();
					}
				},
				content: async function (event, trigger, player) {
					game.log(player, '跳过了', get.translation(trigger.name));
					trigger.cancel();
				},
				group: ['scqhKoihime_shensu_sha'],
				subSkill: {
					sha: {
						forced: true,
						trigger: {
							player: ['phaseZhunbeiSkipped', 'phaseJudgeSkipped', 'phaseDrawSkipped', 'phaseUseSkipped', 'phaseDiscardSkipped', 'phaseJieshuSkipped', 'phaseZhunbeiCancelled', 'phaseJudgeCancelled', 'phaseDrawCancelled', 'phaseUseCancelled', 'phaseDiscardCancelled', 'phaseJieshuCancelled'],
						},
						content() {
							'step 0';
							player.addMark('scqhKoihime_shensu', 1, false);
							('step 1');
							if (player.countMark('scqhKoihime_shensu') >= 2) {
								player.removeMark('scqhKoihime_shensu', 2, false);
								var card = {
									name: 'sha',
								};
								var next = player.chooseUseTarget(card, false, 'nodistance');
								next.prompt = get.translation(event.name);
								next.prompt += ':是否视为使用一张【杀】？';
							}
						},
					},
				},
			},
			scqhKoihime_qingxi: {
				trigger: {
					global: 'phaseAfter',
				},
				filter(trigger, player) {
					if (player.isTurnedOver()) return false;
					return player.hasEnabledSlot();
				},
				check(trigger, player) {
					const players = game.filterPlayer();
					if (players.length <= 3) {
						if (trigger.player !== player) return 0;
					}
					if (trigger.player.next === player) return 0;
					return 1;
				},
				content() {
					'step 0';
					var next = player.chooseToDisable();
					next.set('ai', function (event, player, list) {
						var list = [3, 5, 4, 1, 2];
						for (const i of list) {
							if (player.hasEnabledSlot(i)) {
								var card = player.getEquip(i);
								if (!card || player.hasEmptySlot(i)) return 'equip' + i;
								if (get.value(card, player) <= 0) return 'equip' + i;
							}
						}
						return list.randomGet();
					});
					('step 1');
					if (result && result.control) {
						player.phase('nodelay');
					}
				},
				group: ['scqhKoihime_qingxi_phase'],
				subSkill: {
					phase: {
						forced: true,
						trigger: {
							player: 'phaseBegin',
						},
						filter(trigger, player) {
							return trigger.skill && trigger.skill == 'scqhKoihime_qingxi';
						},
						content() {
							player.turnOver();
						},
					},
				},
			},
			scqhKoihime_jieyi: {
				inherit: 'rejieyin',
				audio: 'rejieyin',
				filterCard(card, player, event) {
					return true;
				},
				filterTarget(card, player, target) {
					return target != player;
				},
				content() {
					'step 0';
					player.give(cards, target, 'give');
					player.chooseDrawRecover(true);
					target.chooseDrawRecover(true);
					('step 1');
					var card = cards[0];
					if (target.getCards('h').includes(card) && get.type(card) == 'equip') {
						target.chooseUseTarget(card);
					}
				},
			},
			scqhKoihime_xiaoji: {
				forced: true,
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(trigger, player) {
					var evt = trigger.getl(player);
					return evt && evt.player == player && evt.es && evt.es.length;
				},
				content() {
					'step 0';
					var evt = trigger.getl(player);
					event.count = evt.es.length;
					('step 1');
					var vcards = [];
					var evt = event.getParent('chooseToUse');
					for (let name of ['wuzhong', 'guohe']) {
						let card = {
							name: name,
						};
						let gamers = game.filterPlayer((current) => {
							return player.canUse(card, current, false);
						});
						if (gamers.length) vcards.push(name);
					}
					if (vcards.length) {
						var next = player.chooseButton(true, ['视为使用一张牌', [vcards, 'vcard']]);
						next.set('ai', function (button) {
							let player = _status.event.player;
							let card = {
								name: button.link[2],
								nature: button.link[3],
							};
							return player.getUseValue(card);
						});
					} else event.finish();//QQQ
					('step 2');
					var links = result.links || [];
					if (links.length) {
						var card = {
							name: links[0][2],
							nature: links[0][3],
						};
						player
							.chooseUseTarget(card, false, 'nodistance')
							.set('prompt', get.prompt(event.name))
							.set('prompt2', '视为使用一张' + get.translation(card))
					} else
						event._result = {
							bool: true,
						};
					('step 3');
					if (!result.bool) event.finish();
					else {
						event.count--;
						if (event.count > 0) event.goto(1);
					}
				},
			},
			scqhKoihime_banhu: {
				mod: {
					globalFrom(from, to) {
						var skill = 'scqhKoihime_banhu_from';
						var storage = to.storage[skill] || [];
						if (storage.includes(from)) return -Infinity;
					},
				},
				ai: {
					noe: true,
					reverseEquip: true,
					effect: {
						target(card, player, target, current) {
							if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
						},
					},
				},
				global: ['scqhKoihime_banhu_global'],
				subSkill: {
					global: {
						name: '伴虎',
						enable: 'phaseUse',
						usable: 1,
						hasTarget(player) {
							let currents = game.filterPlayer((current) => {
								if (current == player) return false;
								if (!current.hasSkill('scqhKoihime_banhu')) return false;
								return true;
							});
							return currents;
						},
						filter(trigger, player) {
							let hs = player.getCards('he', { type: 'equip' });
							let gamers = lib.skill.scqhKoihime_banhu_global.hasTarget(player);
							return hs.length && gamers.length;
						},
						discard: false,
						lose: false,
						filterCard(card, player) {
							return get.type(card) == 'equip';
						},
						position: 'he',
						filterTarget(card, player, target) {
							let gamers = lib.skill.scqhKoihime_banhu_global.hasTarget(player);
							if (!gamers.includes(target)) return false;
							let uic = ui.selected.cards || [];
							return uic[0] && target.canEquip(uic[0], true);
						},
						selectTarget() {
							let player = _status.event.player;
							let gamers = lib.skill.scqhKoihime_banhu_global.hasTarget(player);
							if (gamers.length == 1) return -1;
							return 1;
						},
						check(card) {
							let player = get.player();
							if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
								return 11 - get.equipValue(card);
							}
							return 6 - get.value(card);
						},
						prompt() {
							let player = _status.event.player;
							let gamers = lib.skill.scqhKoihime_banhu_global.hasTarget(player);
							let str = '将一张装备牌置于';
							str += get.translation(gamers);
							if (gamers.length > 1) str += '中的一人';
							str += '的装备区';
							return str;
						},
						prepare(cards, player, targets) { },
						content() {
							var skill = 'scqhKoihime_banhu';
							game.log(player, '发动了', target, '的【' + skill + '】');
							player.popup(skill);
							player.line(target, 'green');
							player.addTempSkill(skill + '_from', { player: 'phaseUseBegin' });
							player.markAuto(skill + '_from', [target]);
							player.$give(cards, target, false);
							target.equip(cards[0]);
						},
						ai: {
							order: 10,
							result: {
								target(player, target) {
									let card = ui.selected.cards[0];
									if (card) return get.effect(target, card, target, target);
									return 0;
								},
							},
						},
					},
					from: {
						charlotte: true,
						intro: {
							content: '你与$互相计算至彼此的距离为１',
						},
						mod: {
							globalFrom(from, to) {
								var skill = 'scqhKoihime_banhu_from';
								var storage = from.storage[skill] || [];
								if (storage.includes(to)) return -Infinity;
							},
						},
					},
				},
			},
			scqhKoihime_manjuan: {
				vcards(trigger, player) {
					let vcards = [];
					game.checkGlobalHistory('cardMove', (evt) => {
						if ((evt.name == 'lose' && evt.position == ui.discardPile) || evt.name == 'cardsDiscard') {
							let ind = evt.cards.filterInD('d').filter((card) => {
								let storage = player.storage.scqhKoihime_manjuan_used || [];
								let suit = card.suit;
								let number = card.number;
								let hs = player.getCards('h', { suit: suit });
								if (suit && hs.length) return false;
								if (suit && storage.includes(suit)) return false;
								if (trigger && !trigger.filterCard(card, player, trigger)) return false;
								return true;
							});
							if (ind.length) vcards.addArray(ind);
						}
					});
					return vcards;
				},
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(trigger, player) {
					let vcards = lib.skill.scqhKoihime_manjuan.vcards(trigger, player);
					return vcards.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						let vcards = lib.skill.scqhKoihime_manjuan.vcards(trigger, player);
						let dialog = ui.create.dialog('漫卷', 'hidden');
						dialog.add([vcards, 'vcard']);
						return dialog;
					},
					check(button) {
						let player = _status.event.player;
						return player.getUseValue({
							name: button.link.name,
							nature: button.link.nature,
						});
					},
					backup(links, player) {
						let link = links[0];
						return {
							card: link,
							position: 'h',
							selectCard() {
								return -1;
							},
							filterCard(card, player) {
								return false;
							},
							viewAs: link,
							precontent() {
								var card = lib.skill.scqhKoihime_manjuan_backup.card || false;
								var cards = [card];
								event.result.cards = cards;
								event.result.card.cards = cards;
								var subName = 'scqhKoihime_manjuan_used';
								if (!player.hasSkill(subName)) player.addTempSkill(subName);
								var suit = card.suit;
								if (suit) player.markAuto(subName, [suit]);
							},
						};
					},
					prompt(links, player) {
						let link = links[0];
						let str = _status.event.name == 'chooseToUse' ? '使用' : '打出';
						str += '弃牌堆中的';
						str += get.translation(link);
						return str;
					},
				},
				hiddenCard(player, name) {
					let vcards = lib.skill.scqhKoihime_manjuan.vcards(false, player);
					if (vcards.length)
						for (let card of vcards) {
							if (card.name == name) return true;
						}
					return false;
				},
				ai: {
					respondSha: true,
					respondShan: true,
					save: true,
					skillTagFilter(player) {
						return;
					},
					order: 100,
					result: {
						player(player) {
							if (_status.event.dying) return get.attitude(player, _status.event.dying);
							if (_status.event.type == 'respondShan') return 1;
							return 1;
						},
					},
				},
				subSkill: {
					used: {
						charlotte: true,
						marktext: '漫卷',
						intro: {
							content: '$',
						},
					},
				},
			},
			scqhKoihime_yangming: {
				inherit: 'jsrgyangming',
			},
			scqhKoihime_zhanji: {
				forced: true,
				preHidden: true,
				trigger: {
					player: 'drawBegin',
				},
				filter(trigger, player) {
					return true;
				},
				content() {
					trigger.num++;
				},
			},
			scqhKoihime_xizhan: {
				map(player) {
					let map = {};
					let storage = player.getStorage('scqhKoihime_xizhan_suit') || [];
					let evt = _status.event;
					for (let suit of lib.suit) {
						if (storage.includes(suit)) continue;
						let hs = player.getCards('h', { suit: suit });
						let card = {
							cards: hs,
						};
						if (suit == 'spade') card.name = 'nanman';
						if (suit == 'club') card.name = 'tiesuo';
						if (suit == 'heart') card.name = 'taoyuan';
						if (suit == 'diamond') {
							card.name = 'sha';
							card.nature = 'fire';
						}
						if (!card.name || !hs.length) continue;
						if (!evt || !evt.filterCard || !evt.filterCard(card, player, evt)) continue;
						let map2 = {};
						let bool = true;
						let info = get.info(card);
						let select = get.select(info.selectTarget);
						select = game.checkMod(card, player, select, 'selectTarget', player);
						let players = game.filterPlayer(function (current) {
							return player.canUse(card, current);
						});
						if (select[1] == -1) {
							if (players.length > hs.length) bool = false;
						} else {
							if (hs.length > select[1]) map2.nouse = true;
							select[1] = Math.min(select[1], hs.length);
						}
						if (bool) {
							map2.card = card;
							map2.select = select;
							map2.targets = players;
							map[suit] = map2;
						}
					}
					return map;
				},
				enable: 'phaseUse',
				filter(trigger, player) {
					let map = lib.skill.scqhKoihime_xizhan.map(player);
					for (let suit in map) {
						if (map[suit]) return true;
					}
					return false;
				},
				chooseButton: {
					dialog(trigger, player) {
						let prompt = get.prompt('scqhKoihime_xizhan');
						let dialog = ui.create.dialog(prompt);
						return dialog;
					},
					chooseControl(trigger, player) {
						let list = [];
						let map = lib.skill.scqhKoihime_xizhan.map(player);
						for (let suit in map) list.add(suit);
						return list;
					},
					check(trigger, player) {
						let map = lib.skill.scqhKoihime_xizhan.map(player);
						for (let suit in map) {
							let map2 = map[suit];
							if (map2.nouse) return false;
						}
						return 0;
					},
					backup(result, player) {
						var control = result.control;
						var map = lib.skill.scqhKoihime_xizhan.map(player);
						var map2 = map[control];
						var bool = {
							xizhan: {
								suit: control,
								card: map2.card,
							},
							position: 'h',
							selectCard: -1,
							filterCard: {
								suit: control,
							},
							selectTarget: map2.select,
							filterTarget(card, player, target) {
								return map2.targets.includes(target);
							},
							viewAs: map2.card,
							precontent() {
								var cards = event.result.card.cards || event.result.cards || [];
								var card = cards[0];
								if (card) {
									var name = 'scqhKoihime_xizhan_suit';
									var storage = player.getStorage(name) || [];
									if (!player.hasSkill(name)) player.addTempSkill(name);
									player.markAuto(name, card.suit);
								}
							},
							ai: {
								result: {
									player(player, target) {
										let eff = get.effect(target, map2.card, player, player);
										return eff;
									},
								},
							},
						};
						return bool;
					},
					prompt(result, player) {
						var str = '【嬉战】:将所有';
						var xizhan = lib.skill.scqhKoihime_xizhan_backup.xizhan || {};
						str += get.translation(xizhan.suit) || '';
						str += '手牌当做【';
						str += get.translation(xizhan.card) || '';
						str += '】使用(';
						str += get.translation(xizhan.card.cards) || '';
						str += ')';
						return str;
					},
				},
				ai: {
					order(item, player) {
						return get.order({ name: 'sha' }, player) - 1;
					},
					result: {
						player: 1,
					},
				},
				subSkill: {
					suit: {
						charlotte: true,
						intro: {
							content: '$',
						},
					},
				},
			},
			scqhKoihime_miaobian: {
				group: ['scqh_manyi', 'scqhKoihime_miaobian_jili'],
				subSkill: {
					jili: {
						inherit: 'gzjili',
					},
				},
			},
			scqhKoihime_qvhu: {
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					return true;
				},
				filterTarget(card, player, target) {
					return player.canCompare(target);
				},
				content() {
					'step 0';
					player.chooseToCompare(target);
					('step 1');
					if (result.bool) {
						var players = game.filterPlayer(function (current) {
							return current != target && target.inRange(current);
						});
						if (players.length) {
							var next = player.chooseTarget(function (card, player, targetx) {
								var target = _status.event.target;
								return target != targetx && targetx.inRange(target);
							});
							next.set('prompt', '请选择【驱虎】的一个目标');
							next.set('target', target);
							next.set('ai', function (targetx) {
								return get.damageEffect(target, targetx, player);
							});
						} else event.finish();
					} else {
						player.damage(target);
						event.finish();
					}
					('step 2');
					if (result) {
						var targets = result.targets || [];
						var targetx = targets[0];
						if (targetx) {
							target.line(targetx, 'green');
							targetx.damage(target);
						}
					}
				},
				ai: {
					order: 0.5,
					result: {
						target(player, target) {
							let att = get.attitude(player, target);
							let oc = target.countCards('h') == 1;
							if (att > 0 && oc) return 0;
							for (let current of game.filterPlayer()) {
								if (current != target && current != player && target.inRange(current)) {
									if (get.damageEffect(current, target, player) > 0) {
										return att > 0 ? att / 2 : att - (oc ? 5 : 0);
									}
								}
							}
							return 0;
						},
						player(player, target) {
							if (target.hasSkillTag('jueqing', false, target)) return -10;
							let mn = 1;
							let hs = player.getCards('h');
							for (let i of hs) {
								mn = Math.max(mn, i.number);
							}
							if (mn <= 11 && player.hp < 2) return -20;
							let max = player.maxHp - hs.length;
							for (let current of game.filterPlayer()) {
								if (get.attitude(player, current) > 2) {
									max = Math.max(Math.min(5, current.hp) - current.countCards('h'), max);
								}
							}
							switch (max) {
								case 0:
									return mn == 13 ? 0 : -20;
								case 1:
									return mn >= 12 ? 0 : -15;
								case 2:
									return 0;
								case 3:
									return 1;
								default:
									return max;
							}
						},
					},
					expose: 0.2,
				},
			},
			scqhKoihime_jieming: {
				forced: true,
				forceDie: true,
				trigger: {
					player: 'damageEnd',
				},
				filter(trigger, player) {
					return true;
				},
				content() {
					'step 0';
					var next = player.chooseTarget(get.prompt2(event.name), function (card, player, target) {
						return true;
					});
					next.set('ai', function (target) {
						let player = _status.event.player;
						let att = get.attitude(player, target);
						if (target.hasSkillTag('nogain')) att /= 6;
						if (att > 2) return true;
						return att / 3;
					});
					('step 1');
					var targets = result.targets || [];
					if (targets.length) {
						var target = targets[0];
						var maxHp = Math.min(target.maxHp, 5);
						event.target = target;
						event.maxHp = maxHp;
						target.draw(event.maxHp);
					} else event.finish();
					('step 2');
					var target = event.target;
					var num = target.countCards('h') - event.maxHp;
					if (num > 0) target.chooseToDiscard('h', true, num);
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					effect: {
						target(card, player, target, current) {
							if (get.tag(card, 'damage') && target.hp > 1) {
								if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
								var max = 0;
								for (var current of game.filterPlayer()) {
									if (get.attitude(target, current) > 0) {
										max = Math.max(Math.min(5, current.hp) - current.countCards('h'), max);
									}
								}
								switch (max) {
									case 0:
										return 2;
									case 1:
										return 1.5;
									case 2:
										return [1, 2];
									default:
										return [0, max];
								}
							}
							if ((card.name == 'tao' || card.name == 'caoyao') && target.hp > 1 && target.countCards('h') <= target.hp) return [0, 0];
						},
					},
				},
			},
			scqhKoihime_xianfu: {
				limited: true,
				forced: true,
				trigger: {
					global: 'roundStart',
				},
				filter(trigger, player) {
					return game.hasPlayer((current) => {
						if (current == player) return false;
						var storage = player.storage.scqhKoihime_xianfu_damage || [];
						return !storage.includes(current);
					});
				},
				content() {
					'step 0';
					var next = player.chooseTarget(function (card, player, current) {
						if (current == player) return false;
						var storage = player.storage.scqhKoihime_xianfu_damage || [];
						return !storage.includes(current);
					});
					next.set('prompt', get.prompt2(event.name));
					next.set('ai', function (target) {
						var player = _status.event.player;
						var att = get.attitude(player, target);
						if (att > 0) return att + 1;
						if (att == 0) return Math.random();
						return att;
					});
					next.set('animate', false);
					('step 1');
					var targets = result.targets || [];
					if (targets.length) {
						player.awakenSkill(event.name);
						player.markAuto('scqhKoihime_xianfu_damage', targets);
						player.addSkill('scqhKoihime_xianfu_damage');
					}
				},
				subSkill: {
					damage: {
						charlotte: true,
						forced: true,
						trigger: {
							global: ['damageEnd', 'recoverEnd'],
						},
						filter(trigger, player) {
							var storage = player.storage.scqhKoihime_xianfu_damage || [];
							return storage.includes(trigger.player);
						},
						logTarget: 'player',
						content() {
							player[trigger.name](trigger.num, 'nosource');
						},
					},
				},
			},
			scqhKoihime_xieling: {
				enable: ['chooseToUse', 'chooseToRespond'],
				usable: 1,
				hiddenCard(player, name) {
					if (!player.countCards('hes')) return false;
					if (!player.isMaxHandcard(true)) return false;
					if (player.getStat().skill.scqhKoihime_xieling) return false;
					return lib.inpile.includes(name);
				},
				vcard(trigger, player) {
					var list = [];
					for (var name of lib.inpile) {
						var type = get.type2(name);
						if (type != 'basic' && type != 'trick') continue;
						if (!trigger || !trigger.filterCard) continue;
						var card = {
							name: name,
						};
						if (trigger.filterCard(card, player, trigger)) {
							list.push([type, '', name]);
						}
						if (name != 'sha') continue;
						for (var nature of lib.inpile_nature) {
							card.nature = nature;
							if (trigger.filterCard(card, player, trigger)) {
								list.push([type, '', name, nature]);
							}
						}
					}
					return list;
				},
				filter(trigger, player) {
					if (!player.countCards('hes')) return false;
					if (!player.isMaxHandcard(true)) return false;
					var list = lib.skill.scqhKoihime_xieling.vcard(trigger, player) || [];
					return list.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						var list = lib.skill.scqhKoihime_xieling.vcard(trigger, player) || [];
						return ui.create.dialog('奉天子以令不臣', [list, 'vcard']);
					},
					filter(button, player) {
						var evt = _status.event.parent;
						return evt.filterCard({ name: button.link[2], nature: button.link[3] }, player, evt);
					},
					check(button) {
						var player = _status.event.player;
						var enemyNum = game.countPlayer(function (current) {
							if (current == player) return false;
							var att = (get.realAttitude || get.attitude)(current, player);
							return att < 0;
						});
						var card = { name: button.link[2], nature: button.link[3] };
						var val = _status.event.parent.type == 'phase' ? player.getUseValue(card) : 1;
						if (val <= 0) return 0;
						if (enemyNum) {
							var hasCard = player.hasCard(function (cardx) {
								if (card.name == cardx.name) {
									if (card.name != 'sha') return true;
									return get.is.sameNature(card, cardx);
								}
								return false;
							}, 'hs');
							if (!hasCard) {
								if (get.value(card, player, 'raw') < 6) {
									return Math.sqrt(val) * (0.25 + Math.random() / 1.5);
								}
								if (enemyNum <= 2) return Math.sqrt(val) / 1.5;
								return 0;
							}
							return 3 * val;
						}
						return val;
					},
					backup(links, player) {
						return {
							filterCard: true,
							selectCard: 1,
							position: 'hes',
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
							},
							ai1(card) {
								var player = _status.event.player;
								return 7 - get.value(card);
							},
							precontent() {
								var cards = event.result.cards || [];
							},
						};
					},
					prompt(links, player) {
						var str = '将一张牌当做';
						str += get.translation(links[0][3]) || '';
						str += get.translation(links[0][2]) || '';
						str += _status.event.name == 'chooseToRespond' ? '打出' : '使用';
						return str;
					},
				},
				ai: {
					save: true,
					respondSha: true,
					respondShan: true,
					fireAttack: true,
					skillTagFilter(player) {
						if (!player.countCards('hes')) return false;
						if (!player.isMaxHandcard(true)) return false;
					},
					threaten: 1.2,
					order: 20,
					result: {
						player: 1,
					},
				},
			},
			scqhKoihime_shanyu: {
				forced: true,
				trigger: {
					source: 'damageSource',
					player: 'damageEnd',
				},
				shanyu(trigger, player) {
					var list = ['guixin', 'zhiheng', 'rende'];
					var storage = player.storage.scqhKoihime_shanyu_cancel || [];
					return list.filter((name) => {
						if (storage.includes(name)) return false;
						var skill = 'scqhKoihime_shanyu_' + name;
						if (!lib.skill[skill] || !lib.skill[skill].content) return false;
						if (lib.skill[skill].filter && !lib.skill[skill].filter(trigger, player)) return false;
						return true;
					});
				},
				filter(trigger, player) {
					var shanyu = lib.skill.scqhKoihime_shanyu.shanyu(trigger, player) || [];
					return shanyu.length;
				},
				content() {
					'step 0';
					if (!event.noChoose) event.noChoose = [];
					if (!player.hasSkill('scqhKoihime_shanyu_cancel')) player.addTempSkill('scqhKoihime_shanyu_cancel');
					var shanyu = lib.skill.scqhKoihime_shanyu.shanyu(trigger, player) || [];
					var list = [];
					list.addArray(shanyu);
					list.add('cancel');
					if (event.noChoose.length) list.removeArray(event.noChoose);
					if (list.length > 1) {
						var next = player.chooseControl(list);
						var check = 0;
						if (list.includes('guixin')) {
							var checkx = lib.skill.scqhKoihime_shanyu_guixin.check(trigger, player);
							if (checkx > 0) check = 'guixin';
						}
						if (list.includes('zhiheng') && !check) {
							check = 'zhiheng';
						}
						next.set('check', check);
						next.set('ai', function () {
							var check = _status.event.check || 0;
							return check;
						});
						next.set('prompt', get.prompt2(event.name));
					} else
						event._result = {
							control: list[0],
						};
					('step 1');
					if (result) {
						var control = result.control || 'cancel';
						if (control != 'cancel') {
							var skill = 'scqhKoihime_shanyu_' + control;
							var next = game.createEvent(skill);
							next.player = player;
							next.evt = trigger;
							next.setContent(lib.skill[skill].content);
						}
					}
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					threaten(player, target) {
						if (target.hp == 1) return 2.5;
						return 0.5;
					},
					effect: {
						target(card, player, target) {
							var storage = target.storage.scqhKoihime_shanyu_cancel || [];
							var eff = 0;
							if (!eff && !storage.includes('guixin')) {
								eff = lib.skill.guixin.ai.effect.target(card, player, target);
							}
							if (!eff && !storage.includes('fangzhu')) {
							}
							if (eff) return eff;
						},
					},
				},
				subSkill: {
					cancel: {
						charlotte: true,
					},
					guixin: {
						popup: false,
						log: false,
						charlotte: true,
						check(trigger, player) {
							if (player.isTurnedOver()) return true;
							var num = game.countPlayer(function (current) {
								if (current == player) return false;
								var att = get.attitude(player, current);
								if (att > 0) {
									return current.countCards('ej', function (card) {
										return get.value(card, current) <= 0;
									});
								}
								return current.countCards('hej', function (card) {
									return get.value(card, current) > 0 && get.value(card, player) > 0;
								});
							});
							if (num >= 2) return true;
							var count = player.countCards('h');
							count += num;
							return game.players.every((current) => {
								if (current.isOut() || current == player) return true;
								return current.countCards('h') < count;
							});
						},
						filter(trigger, player) {
							var targets = game.filterPlayer((current) => {
								return current != player && current.countCards('hej');
							});
							return targets.length || player.isMaxHandcard(true);
						},
						content() {
							'step 0';
							player.markAuto('scqhKoihime_shanyu_cancel', ['guixin']);
							var targets = game.filterPlayer((current) => current != player).sortBySeat();
							if (targets.length) {
								player.line(targets);
								player.gainMultiple(targets, 'hej');
							}
							('step 1');
							if (player.isMaxHandcard(true)) player.turnOver();
						},
					},
					zhiheng: {
						popup: false,
						log: false,
						charlotte: true,
						filter(trigger, player) {
							return player.countCards('he', (card) => {
								return lib.filter.cardDiscardable(card, player);
							});
						},
						content() {
							'step 0';
							var next = player.chooseCard('he', [1, Infinity], function (card) {
								return lib.filter.cardDiscardable(card, player);
							});
							next.set('prompt', get.prompt2(event.name));
							next.set('ai', (card) => {
								var player = _status.event.player;
								if (card.name == 'du') return 0;
								return 7 - get.value(card);
							});
							('step 1');
							var cards = result.cards || [];
							var num = cards.length;
							if (num > 0) {
								var map = {};
								for (var card of cards) {
									var ip = get.position(card);
									map[ip] = true;
								}
								for (var ip in map) {
									var cs = player.getCards(ip, (card) => !cards.includes(card));
									if (!cs.length) {
										num += 1;
										break;
									}
								}
								player.markAuto('scqhKoihime_shanyu_cancel', ['zhiheng']);
								player.discard(cards);
								player.draw(num);
							} else {
								var evt = event.getParent('scqhKoihime_shanyu');
								if (!evt.noChoose) evt.noChoose = [];
								evt.noChoose.add('zhiheng');
								evt.goto(0);
							}
						},
					},
					rende: {
						popup: false,
						log: false,
						charlotte: true,
						filter(trigger, player) {
							return player.countCards('he') && game.hasPlayer((current) => current != player);
						},
						content() {
							'step 0';
							var next = player.chooseCardTarget({
								filterCard: true,
								selectCard: [1, Infinity],
								position: 'he',
								filterTarget(card, player, target) {
									return target != player;
								},
								ai1(card) {
									var player = get.owner(card);
									var value = get.value(card);
									var hs = player.countCards('h');
									var uic = ui.selected.cards || [];
									if (!uic.length && uic[0].name == 'du') return 20;
									if (uic.length && uic[0].name == 'du') {
										if (card.name == 'du') return 20;
									}
									return 6 - value;
								},
								ai2(target) {
									var player = _status.event.player;
									var uic = ui.selected.cards || [];
									var att = get.attitude(player, target);
									if (target.hasSkillTag('nogain')) return 0;
									if (target.hasJudge('lebu')) return 0;
									if (uic.length && uic[0].name == 'du') {
										if (target.hasSkillTag('nodu')) return 0;
										if (att <= 0) return 10;
										return -10;
									}
									return att;
								},
								check: 0,
							});
							next.set('prompt', get.prompt2(event.name));
							('step 1');
							var cards = result.cards || [];
							var target = (result.targets || [])[0] || false;
							if (target && cards.length) {
								var num = 0;
								var evt2 = event.getParent(3);
								player.getHistory('lose', (evt) => {
									if (evt.getParent(2).name == event.name && evt.getParent(5) == evt2) {
										num += evt.cards.length;
									}
								});
								if (num < 2 && num + cards.length >= 2) {
								} else event.finish();
								player.markAuto('scqhKoihime_shanyu_cancel', ['rende']);
								player.give(cards, target);
							} else {
								event.finish();
								var evt = event.getParent('scqhKoihime_shanyu');
								if (!evt.noChoose) evt.noChoose = [];
								evt.noChoose.add('rende');
								evt.goto(0);
							}
							('step 2');
							var vcards = [];
							for (var name of ['sha', 'tao', 'jiu']) {
								var card = {
									name: name,
								};
								var currents = game.filterPlayer((current) => player.canUse(card, current));
								if (currents.length) vcards.push(['基本', '', name]);
								if (name != 'sha') continue;
								for (var nature of lib.inpile_nature) {
									card.nature = nature;
									let currents = game.filterPlayer((current) => player.canUse(card, current));
									if (currents.length) vcards.push(['基本', '', name, nature]);
								}
							}
							if (vcards.length) {
								var list = ['是否视为使用一张基本牌？', [vcards, 'vcard']];
								var next = player.chooseButton(list);
								next.set('ai', function (button) {
									var player = _status.event.player;
									var card = {};
									card.name = button.link[2];
									card.nature = button.link[3];
									card.isCard = true;
									if (card.name == 'tao') {
										if (player.hp == 1 || (player.hp == 2 && !player.hasShan()) || player.needsToDiscard()) {
											return 5;
										}
										return 1;
									}
									if (card.name == 'sha') {
										var currents = game.filterPlayer((current) => {
											return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
										});
										if (currents.length) {
											if (card.nature == 'fire') return 2.95;
											if (card.nature == 'thunder' || card.nature == 'ice') return 2.92;
											return 2.9;
										}
										return 0;
									}
									if (card.name == 'jiu') return 0.5;
									return 0;
								});
							} else event.finish();
							('step 3');
							if (result) {
								var links = result.links || [];
								if (links.length) {
									var card = {
										name: links[0][2],
										nature: links[0][3],
									};
									var next = player.chooseUseTarget(card);
									next.addCount = false;
									if (card.name != 'sha') next.forced = true;
								}
							}
						},
					},
					fangzhu: {
						popup: false,
						log: false,
						charlotte: true,
						filter(trigger, player) {
							return game.hasPlayer((current) => current != player);
						},
						content() {
							'step 0';
							var draw = player.getDamagedHp();
							var next = player.chooseTarget(get.prompt(event.name), '令一名其他角色翻面' + (draw > 0 ? '并摸' + get.cnNumber(draw) + '张牌' : ''), function (card, player, target) {
								return player != target;
							});
							next.setHiddenSkill(event.name);
							next.set('ai', (target) => {
								if (target.hasSkillTag('noturn')) return 0;
								var player = _status.event.player;
								var current = _status.currentPhase;
								var dis = current ? get.distance(current, target, 'absolute') : 1;
								var draw = player.getDamagedHp();
								var att = get.attitude(player, target);
								if (att == 0) {
									return target.hasJudge('lebu') ? Math.random() / 3 : Math.sqrt(get.threaten(target)) / 5 + Math.random() / 2;
								}
								if (att > 0) {
									if (target.isTurnedOver()) return att + draw;
									if (draw < 4) return -1;
									if (current && target.seatNum > current.seatNum) {
										return att + draw / 3;
									}
									return (10 * Math.sqrt(Math.max(0.01, get.threaten(target)))) / (3.5 - draw) + dis / (2 * game.countPlayer());
								} else {
									if (target.isTurnedOver()) return att - draw;
									if (draw >= 5) return -1;
									if (current && target.seatNum <= current.seatNum) return -att + draw / 3;
									return (4.25 - draw) * 10 * Math.sqrt(Math.max(0.01, get.threaten(target))) + (2 * game.countPlayer()) / dis;
								}
							});
							('step 1');
							if (result.bool) {
								player.markAuto('scqhKoihime_shanyu_cancel', ['fangzhu']);
								var target = result.targets[0];
								var draw = player.getDamagedHp();
								if (draw > 0) target.draw(draw);
								target.turnOver();
							} else {
								var evt = event.getParent('scqhKoihime_shanyu');
								if (!evt.noChoose) evt.noChoose = [];
								evt.noChoose.add('fangzhu');
								evt.goto(0);
							}
						},
					},
				},
			},
			scqhKoihime_jiaozi: {
				inherit: 'jiaozi',
			},
			scqhKoihime_zhiheng: {
				audio: 2,
				enable: 'phaseUse',
				usable: Infinity,
				position: 'he',
				discard: false,
				lose: false,
				delay: false,
				filterCard: lib.filter.cardDiscardable,
				selectCard: [1, Infinity],
				prompt(trigger) {
					let player = _status.event.player;
					let skill = _status.event.skill;
					let usable = player.getStat('skill')[skill] || 0;
					let str = get.translation(skill + '_info');
					if (usable) str += '<br/><b><u>◆:预计少摸' + get.cnNumber(usable) + '张牌</u></b>.';
					return str;
				},
				check(card) {
					let player = _status.event.player;
					let skill = 'scqhKoihime_zhiheng';
					let usable = player.getStat('skill')[skill] || 0;
					if (usable >= 2 && usable >= player.needsToDiscard()) return -1;
					return 7 - get.value(card);
				},
				content() {
					var usable = (player.getStat('skill')[event.name] || 0) - 1;
					var hs = player.getCards('h');
					var map = {};
					for (let card of cards) {
						let position = get.position(card);
						let ip = map[position] || [];
						ip.add(card);
						map[position] = ip;
					}
					var temp = 0;
					for (let position in map) {
						let ip = map[position] || [];
						if (!ip.length) continue;
						let hs = player.getCards(position, (card) => {
							return !cards.includes(card);
						});
						if (!hs.length) temp = 1;
					}
					temp += cards.length;
					if (usable > 0) temp -= usable;
					player.discard(cards);
					if (temp > 0) player.draw(temp);
					return;
					var next = player.recast(cards);
					next.recastingGain = function () {
						if (temp > 0) {
							var next = player.draw(temp);
						}
					};
				},
				ai: {
					order(item, player) {
						return 1;
					},
					result: {
						player(player) {
							let skill = 'scqhKoihime_zhiheng';
							let usable = player.getStat('skill')[skill] || 0;
							if (usable >= 2 && usable >= player.needsToDiscard()) return -1;
							return 1;
						},
					},
					threaten: 1.55,
				},
			},
			scqhKoihime_bingxin: {
				audio: 2,
				enable: ['chooseToUse', 'chooseToRespond'],
				bingxin(player) {
					const hs = player.getCards('h');
					const hp = Math.max(0, player.hp);
					if (hs.length !== hp) return false;
					if (hs.length > 1) {
						const color = get.color(hs[0], player);
						for (const card of hs) {
							if (get.color(card, player) !== color) return false;
						}
					}
					return true;
				},
				vcards(trigger, player) {
					if (!trigger || !trigger.filterCard) return [];
					const storage = player.storage.scqhKoihime_bingxin_count || [];
					const vcards = [];
					for (const name of lib.inpile) {
						if (get.type(name) !== 'basic') continue;
						if (storage && storage.includes(name)) continue;
						const card = {
							name: name,
						};
						if (trigger.filterCard(card, player, trigger)) {
							vcards.push(['基本', '', name]);
						}
						if (name === 'sha') {
							for (const nature of lib.inpile_nature) {
								card.nature = nature;
								if (trigger.filterCard(card, player, trigger)) {
									vcards.push(['基本', '', name, nature]);
								}
							}
						}
					}
					return vcards;
				},
				hiddenCard(player, name) {
					const storage = player.storage.scqhKoihime_bingxin_count || [];
					if (get.type(name) == 'basic' && lib.inpile.includes(name) && !storage.includes(name)) return true;
				},
				filter(trigger, player) {
					if (trigger.type === 'wuxie') return false;
					const vcards = lib.skill.scqhKoihime_bingxin.vcards(trigger, player);
					const bingxin = lib.skill.scqhKoihime_bingxin.bingxin(player);
					return bingxin && vcards && vcards.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						const vcards = lib.skill.scqhKoihime_bingxin.vcards(trigger, player);
						const dialog = ui.create.dialog('冰心', 'hidden');
						dialog.add([vcards, 'vcard']);
						dialog.direct = true;
						return dialog;
					},
					check(button) {
						const name = button.link[2];
						const nature = button.link[3];
						if (name === 'shan') return 3;
						const player = _status.event.player;
						if (name === 'jiu') {
							if (player.getUseValue({ name: 'jiu' }) <= 0) return 0;
							if (player.countCards('h', 'sha')) return player.getUseValue({ name: 'jiu' });
							return 0;
						}
						return (
							player.getUseValue({
								name: name,
								nature: nature,
							}) / 4
						);
					},
					backup(links, player) {
						return {
							selectCard: -1,
							filterCard: () => false,
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
							},
							precontent() {
								player.draw();
								const name = event.result.card.name;
								const skillname = 'scqhKoihime_bingxin_count';
								player.addTempSkill(skillname);
								player.markAuto(skillname, [name]);
							},
						};
					},
					prompt(links, player) {
						var name = links[0][2];
						var nature = links[0][3];
						return '摸一张并视为使用或打出' + (get.translation(nature) || '') + get.translation(name);
					},
				},
				ai: {
					order: 10,
					respondShan: true,
					respondSha: true,
					save: true,
					result: {
						player(player) {
							const dying = _status.event.dying;
							if (dying) return get.attitude(player, dying);
							return 1;
						},
					},
				},
				subSkill: {
					count: {
						charlotte: true,
					},
				},
			},
			scqhKoihime_chengye: {
				audio: 1,
				forceDie: true,
				zhuSkill: true,
				trigger: {
					global: 'die',
				},
				logTarget: 'player',
				filter(trigger, player) {
					if (trigger.player === player) return false;
					if (trigger.player.group !== 'wu') return false;
					if (!player.hasZhuSkill('scqhKoihime_chengye')) return false;
					return true;
				},
				check() {
					return 1;
				},
				content: async function (event, trigger, player) {
					const list = [];
					const hs = trigger.player.getCards('he');
					const pname = get.translation(player);
					let check = 0;
					if (hs.length) {
						const att = get.attitude(trigger.player, player);
						list.add('所有牌交给' + pname);
						if (att <= 0 && hs.length > 2) check = 1;
						if (att > 0 && hs.length < 2) check = 1;
					}
					list.add(pname + '摸两张牌');
					if (player.hp < player.maxHp) {
						list.add(pname + '回复一点体力');
					}
					const result = {};
					if (list.length > 1) {
						const next = trigger.player.chooseControl(list);
						next.set('ai', function () {
							const check = _status.event.check || 0;
							return check;
						});
						next.set('check', check);
						next.set('prompt', '请选择一项');
						result.control = (await next).result.control;
					} else {
						result.control = list[0];
					}
					const string = result.control || '';
					if (string.includes('交')) {
						await player.gain(hs, trigger.player, 'giveAuto', 'bySelf');
					} else if (string.includes('摸')) {
						await player.draw(2);
					} else {
						await player.recover();
					}
				},
			},
			scqhKoihime_limou: {
				mod: {
					targetInRange(card, player, target) {
						if (card.name != 'sha') return;
						if (get.distance(player, target) > 1) return false;
					},
				},
				forced: true,
			},
			scqhKoihime_qinxue: {
				map(player) {
					let map = {};
					let storage = player.storage.scqhKoihime_qinxue || false;
					let used = player.storage.scqhKoihime_qinxue_used || [];
					map.hs = player.getCards('he', (card) => {
						if (used.includes(card)) return false;
						if (!storage) return get.type2(card) == 'basic';
						else return get.type2(card) == 'trick';
					});
					map.ds = Array.from(ui.discardPile.childNodes).filter((card) => {
						if (used.includes(card)) return false;
						if (!storage) return get.type2(card) == 'trick';
						else return card.name == 'sha';
					});
					return map;
				},
				enable: 'phaseUse',
				filter(trigger, player) {
					let map = lib.skill.scqhKoihime_qinxue.map(player);
					return map.hs.length && map.ds.length;
				},
				position: 'he',
				filterCard(card, player) {
					let map = lib.skill.scqhKoihime_qinxue.map(player);
					return map.hs.includes(card);
				},
				check(card) {
					return 7 - get.value(card);
				},
				content() {
					'step 0';
					var map = lib.skill.scqhKoihime_qinxue.map(player);
					var str = get.translation(event.name);
					str += ':获得弃牌堆中的一张牌';
					var next = player.chooseButton([str, map.ds], true);
					next.set('ai', get.buttonValue);
					('step 1');
					var used = player.storage[event.name + '_used'] || [];
					var links = result.links || [];
					if (links.length) {
						var cards2 =
							cards.concat(links).filter((card) => {
								return get.type2(card) == 'trick';
							}) || [];
						if (cards2.length) used.addArray(cards2);
						player.storage[event.name + '_used'] = used;
						player.changeZhuanhuanji(event.name);
						player.gain(links, 'gain2');
					}
				},
				mark: true,
				zhuanhuanji: true,
				marktext: '☯',
				intro: {
					mark(dialog, storage, player) {
						let map = lib.skill.scqhKoihime_qinxue.map(player);
						if (map.hs.length && player.isUnderControl(true)) {
							dialog.addText('符合条件的手牌');
							dialog.addAuto(map.hs);
						}
						dialog.addText('弃牌堆中符合条件的牌');
						if (map.ds.length) dialog.addAuto(map.ds);
					},
				},
				onremove(player, skill) {
					delete player.storage[skill];
					delete player.storage[skill + '_used'];
				},
				ai: {
					order: 2,
					result: {
						player: 1,
					},
				},
			},
			scqhKoihime_botu: {
				mod: {
					maxHandcard(player, num) {
						player.update();
					},
				},
				forced: true,
				trigger: {
					global: 'phaseAfter',
				},
				filter(trigger, player) {
					const suits = lib.skill.scqhKoihime_botu.botu(player) || [];
					return suits.length >= 4;
				},
				content() {
					player.phase('nodelay');
				},
				mark: true,
				marktext: '📚️',
				intro: {
					content(storage, player, skill) {
						const suits = lib.skill.scqhKoihime_botu.botu(player) || [];
						if (suits.length) return get.translation(suits);
						return '';
					},
					markcount(storage, player, skill) {
						const suits = lib.skill.scqhKoihime_botu.botu(player) || [];
						return suits.length;
					},
				},
				rebotu() {
					let suits = [];
					game.getGlobalHistory('cardMove', function (evt) {
						if (suits.length >= 4) return;
						if (evt.name == 'lose') {
							if (evt.position == ui.discardPile) {
								for (let card of evt.cards) suits.add(card.suit);
							}
						} else if (evt.name == 'cardsDiscard') {
							for (let card of evt.cards) suits.add(card.suit);
						}
					});
					return suits;
				},
				botu(player) {
					let history = player.getHistory('useCard').concat(player.getHistory('respond'));
					let suits = [];
					for (let evt of history) {
						let suit = evt.card.suit;
						if (suit && evt.isPhaseUsing()) suits.add(suit);
					}
					return suits;
				},
			},
			scqhKoihime_yaowu: {
				forced: true,
				suits(player) {
					let map = {};
					let suits = [];
					for (let suit of lib.suit) {
						let hs = player.getCards('h', { suit: suit });
						if (hs.length) map[suit] = hs;
					}
					for (let suit in map) {
						let hs = map[suit];
						let max = true;
						for (let suit2 in map) {
							let hs2 = map[suit2];
							if (hs2.length > hs.length) max = false;
						}
						if (max) suits.add(suit);
					}
					return suits;
				},
				trigger: {
					player: 'phaseUseBegin',
				},
				filter(trigger, player) {
					let suits = lib.skill.scqhKoihime_yaowu.suits(player);
					return suits.length;
				},
				content() {
					'step 0';
					var suits = lib.skill.scqhKoihime_yaowu.suits(player);
					if (suits.length > 1) {
						var next = trigger.player.chooseControl(suits);
						next.set('ai', function () {
							return 0;
						});
					} else
						event._result = {
							control: suits[0],
						};
					('step 1');
					var suit = result.control;
					var hs = player.getCards('h', { suit: suit });
					if (hs.length) {
						player.addShownCards(hs, 'visible_scqhKoihime_yaowu');
						player.showCards(hs);
					}
				},
				mod: {
					cardname(card, player) {
						if (get.is.shownCard(card) && card.hasGaintag('visible_scqhKoihime_yaowu')) {
							return 'sha';
						}
					},
				},
			},
			scqhKoihime_yangwei: {
				inherit: 'shizhan',
				group: ['scqhKoihime_yangwei_turn'],
				subSkill: {
					turn: {
						forced: true,
						trigger: {
							player: 'juedouAfter',
							target: 'juedouAfter',
						},
						filter(trigger, player) {
							let turn = trigger.turn;
							return turn && turn != player;
						},
						logTarget(trigger, player) {
							return player == trigger.player ? trigger.target : trigger.player;
						},
						content() {
							var target = lib.skill[event.name].logTarget(trigger, player);
							player.discardPlayerCard(target, true, 'h');
						},
					},
				},
			},
			scqhKoihime_shuangrui: {
				mod: {
					playerEnabled(card, player, target) {
						if (card.name != 'sha') return;
						var trigger = _status.event;
						if (trigger.skill && trigger.skill == 'scqhKoihime_shuangrui') {
							var map = trigger.scqhKoihime_shuangrui || {};
							var uic = ui.selected.cards || [];
							var juli = Math.max(1, get.distance(player, target));
							var str = '<font color=#D3A4FF>距离';
							str += juli;
							str += '</font>';
							target.prompt(str);
							var storage = player.storage.scqhKoihime_shuangrui || false;
							if (!storage) {
								if (player.inRange(target)) return false;
							} else {
								if (!player.inRange(target)) return false;
							}
							if (uic.length != juli) return false;
						}
					},
					targetInRange(card, player, target) {
						let number = card.number || 0;
						if (card.name != 'sha') return;
						var trigger = _status.event;
						if (trigger.skill && trigger.skill == 'scqhKoihime_shuangrui') {
							var storage = player.storage.scqhKoihime_shuangrui || false;
							if (!storage) {
								if (!player.inRange(target)) return true;
							} else {
								if (player.inRange(target)) return true;
							}
						}
					},
				},
				enable: ['chooseToUse', 'chooseToRespond'],
				usable: 1,
				filter(trigger, player) {
					var filter = trigger.filterCard;
					var hs = player.getCards('hes');
					if (hs.length < 1) return false;
					if (filter({ name: 'shan' }, player, trigger)) {
						player.storage.scqhKoihime_shuangrui_card = 'shan';
						return true;
					}
					if (filter({ name: 'sha' }, player, trigger)) {
						player.storage.scqhKoihime_shuangrui_card = 'sha';
						if (trigger.name == 'chooseToRespond') return true;
						var storage = player.storage.scqhKoihime_shuangrui || false;
						var players = [];
						if (!storage) {
							players = game.filterPlayer((current) => {
								if (!player.canUse({ name: 'sha' }, current, false)) return false;
								var juli = Math.max(1, get.distance(player, current));
								if (hs.length < juli) return false;
								return !player.inRange(current);
							});
						} else {
							players = game.filterPlayer((current) => {
								if (!player.canUse({ name: 'sha' }, current, false)) return false;
								var juli = Math.max(1, get.distance(player, current));
								if (hs.length < juli) return false;
								return player.inRange(current);
							});
						}
						if (players.length) return true;
					}
					return false;
				},
				filterCard(card, player, trigger) {
					trigger = trigger || _status.event;
					var current = false;
					var uic = ui.selected.cards || [];
					var uit = ui.selected.targets || [];
					if (trigger.respondTo && trigger.respondTo[0]) current = trigger.respondTo[0];
					else if (trigger.source) current = trigger.source;
					else if (uit.length) current = uit[0];
					if (current) {
						var map = trigger.scqhKoihime_shuangrui || {};
						map.current = current;
						map.juli = Math.max(1, get.distance(player, current));
						trigger.scqhKoihime_shuangrui = map;
						if (uic.length >= map.juli) return false;
					}
					var maxjuli = 0;
					game.filterPlayer((targetx) => {
						var julix = Math.max(1, get.distance(player, targetx));
						if (julix > maxjuli) maxjuli = julix;
					});
					if (uic.length >= maxjuli) return false;
					return true;
				},
				selectCard() {
					var trigger = _status.event;
					var map = trigger.scqhKoihime_shuangrui || {};
					if (map.juli) return [map.juli, map.juli];
					return [1, Infinity];
				},
				complexCard: true,
				complexSelect: true,
				position: 'hes',
				check(card) {
					var player = _status.event.player;
					var value = get.value(card, player);
					return 10 - value;
				},
				viewAs(cards, player) {
					var name = player.storage.scqhKoihime_shuangrui_card;
					if (name)
						return {
							name: name,
						};
					return null;
				},
				precontent() {
					player.changeZhuanhuanji('scqhKoihime_shuangrui');
				},
				hiddenCard(player, name) {
					if (!player.countCards('hes')) return false;
					return name == 'sha' || name == 'shan';
				},
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter(player, tag) {
						if (!player.countCards('hes')) return false;
					},
					order: 1,
					result: {
						player: 1,
					},
				},
				mark: true,
				zhuanhuanji: true,
				marktext: '☯',
				intro: {
					name: false,
					content(storage, player, skill) {
						if (!storage) return '攻击范围外的目标出杀';
						return '攻击范围内的目标出杀';
					},
				},
			},
			scqhKoihime_lueying: {
				audio: 'splveying',
				forced: true,
				chargeSkill: true,
				trigger: {
					player: 'useCardAfter',
				},
				filter(trigger, player) {
					if (player.countMark('charge') < 2) return false;
					return get.type2(trigger.card) == 'basic';
				},
				check(trigger, player) {
					return 1;
				},
				content() {
					player.removeMark('charge', 2);
					player.draw();
					var next = player.chooseUseTarget('guohe');
					next.prompt = get.translation(event.name);
					next.prompt += ':是否视为使用一张【过河拆桥】？';
					next.addCount = false;
				},
				group: 'scqhKoihime_lueying_mark',
				subSkill: {
					mark: {
						forced: true,
						trigger: {
							player: 'useCard',
						},
						usable: 2,
						filter(trigger, player) {
							if (player.countMark('charge') >= 2) return false;
							return get.type2(trigger.card) == 'basic';
						},
						content() {
							game.trySkillAudio('scqhKoihime_shuangrui', player, true);
							player.addMark('charge', 1, false);
						},
					},
				},
			},
			scqhKoihime_yingwu: {
				audio: 'spyingwu',
				forced: true,
				chargeSkill: true,
				trigger: {
					player: 'useCardAfter',
				},
				filter(trigger, player) {
					let damage = player.getHistory('sourceDamage', (evt) => {
						let card = evt.card;
						return evt.card && evt.card == trigger.card;
					});
					if (damage.length) return false;
					if (player.countMark('charge') < 2) return false;
					return get.type2(trigger.card) == 'trick';
				},
				check(event, player) {
					return 1;
				},
				content() {
					player.removeMark('charge', 2);
					player.draw();
					var next = player.chooseUseTarget('sha');
					next.prompt = get.translation(event.name);
					next.prompt += ':是否视为使用一张不计次数的【杀】？';
					next.addCount = false;
				},
				group: 'scqhKoihime_yingwu_mark',
				subSkill: {
					mark: {
						forced: true,
						trigger: {
							player: 'useCard',
						},
						usable: 2,
						filter(trigger, player) {
							if (player.countMark('charge') >= 2) return false;
							return get.type2(trigger.card) == 'trick';
						},
						content() {
							game.trySkillAudio('scqhKoihime_shuangrui', player, true);
							player.addMark('charge', 1, false);
						},
					},
				},
			},
			scqhKoihime_hupo: {
				forced: true,
				preHidden: true,
				trigger: {
					player: 'changeHp',
				},
				filter(trigger, player) {
					return true;
				},
				content() {
					'step 0';
					var next = player.chooseTarget(get.prompt2(event.name));
					next.set('ai', function (target) {
						var player = _status.event.player;
						var dhp = player.getDamagedHp();
						var att = get.attitude(player, target);
						if (att > 0) return att;
						else if (dhp == 1 && !target.countCards('he')) return 0;
						return 1;
					});
					next.setHiddenSkill(event.name);
					('step 1');
					var targets = result.targets || [];
					if (targets.length) {
						event.target = targets[0];
					} else event.finish();
					('step 2');
					var dhp = player.getDamagedHp();
					var list = [];
					if (dhp > 0) {
						list.add('摸' + get.cnNumber(dhp, true) + '弃一');
						list.add('摸一弃' + get.cnNumber(dhp, true));
					} else {
						list.add('弃一');
						list.add('摸一');
					}
					if (list.length == 2) {
						var next = player.chooseControl(list);
						next.set('prompt', '令' + get.translation(event.target) + list[0] + '或' + list[1]);
						next.set('target', event.target);
						next.set('ai', function () {
							var player = _status.event.player;
							var target = _status.event.target;
							var dhp = player.getDamagedHp();
							var att = get.attitude(player, target);
							if (att > 0 && dhp > 0) return 0;
							return 1;
						});
					} else
						event._result = {
							index: 0,
						};
					('step 3');
					var target = event.target;
					var dhp = player.getDamagedHp();
					if (result.index == 0) {
						if (dhp > 0) target.draw(dhp);
						target.chooseToDiscard(true, 'he');
					} else {
						target.draw();
						if (dhp > 0) target.chooseToDiscard(dhp, true, 'he');
					}
				},
				ai: {
					threaten(player, target) {
						if (target.hp == target.maxHp) return 0.5;
						if (target.hp == 1) return 2;
						if (target.hp == 2) return 1.5;
						return 0.5;
					},
					maixie: true,
				},
			},
			scqhKoihime_yingsa: {
				forced: true,
				preHidden: true,
				trigger: {
					player: 'damageEnd',
				},
				logTarget: 'source',
				filter(trigger, player) {
					return trigger.source && trigger.source.inRange(player);
				},
				content() {
					'step 0';
					var next = trigger.source.chooseCard('h');
					next.prompt = get.translation(event.name);
					next.prompt += ':请交给';
					next.prompt += get.translation(player);
					next.prompt += '一张手牌,否则';
					next.prompt += get.translation(player);
					next.prompt += '回复一点体力';
					next.target = player;
					next.set('ai', (card) => {
						var player = _status.event.player;
						var target = _status.event.target;
						var att = get.attitude(player, target);
						if (att > 0) return 0;
						return 10 - get.value(card);
					});
					('step 1');
					var cards = result.cards || [];
					if (cards.length) trigger.source.give(cards, player);
					else player.recover();
				},
			},
			scqhKoihime_pojun: {
				shaRelated: true,
				trigger: {
					player: 'useCardToPlayered',
					target: 'useCardToTargeted',
				},
				logTarget(trigger, player) {
					return trigger.player == player ? trigger.target : trigger.player;
				},
				filter(trigger, player) {
					if (trigger.card.name != 'sha') return false;
					var target = lib.skill.scqhKoihime_pojun.logTarget(trigger, player) || false;
					return target && target.isIn() && target != player;
				},
				check(trigger, player) {
					var target = lib.skill.scqhKoihime_pojun.logTarget(trigger, player) || false;
					var att = get.attitude(player, target);
					return att <= 0;
				},
				content() {
					'step 0';
					var target = lib.skill.scqhKoihime_pojun.logTarget(trigger, player) || false;
					event.target = target;
					if (target.hp > 0 && target.countCards('he')) {
						var next = player.choosePlayerCard(target, 'he', [1, Math.min(target.hp, target.countCards('he'))], '破军:是否扣置' + get.translation(target) + '的牌？');
						next.set('ai', function (button) {
							if (!_status.event.goon) return 0;
							var val = get.value(button.link);
							if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
							return val;
						});
						next.set('goon', get.attitude(player, target) <= 0);
						next.set('forceAuto', true);
					}
					('step 1');
					var cards = [];
					if (result) cards = result.cards || [];
					if (cards.length) {
						var target = event.target;
						target.addSkill('repojun2');
						target.addToExpansion('giveAuto', cards, target).gaintag.add('repojun2');
					}
					('step 2');
					var hs = trigger.player.countCards('h') >= trigger.target.countCards('h');
					var es = trigger.player.countCards('e') >= trigger.target.countCards('e');
					if (hs && es) {
						var id = trigger.target.playerid;
						var map = trigger.parent.customArgs;
						if (!map[id]) map[id] = {};
						if (typeof map[id].extraDamage != 'number') map[id].extraDamage = 0;
						map[id].extraDamage++;
					}
				},
				ai: {
					unequip: true,
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						if (get.attitude(player, arg.target) > 0) return false;
						if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
						if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
						return false;
					},
				},
			},
			scqhKoihime_rende: {
				enable: ['chooseToUse', 'chooseToRespond'],
				hiddenCard(player, name) {
					if (get.type(name) != 'basic') return false;
					return player.countCards('he') >= 2;
				},
				rende(trigger, player) {
					var list = [];
					for (var name of lib.inpile) {
						var card = {
							name: name,
							cards: [],
						};
						var type = get.type2(card);
						if (type != 'basic') continue;
						var nameList = ['jiu', 'tao', 'sha'];
						var players = game.filterPlayer((current) => {
							if (player.canUse(card, current)) return true;
							if (lib.filter.targetEnabled2(card, player, current)) return true;
							return false;
						});
						if (nameList.includes(name) && !players.length) continue;
						if (trigger.filterCard(card, player, trigger)) {
							list.push([type, '', name]);
						}
						if (name != 'sha') continue;
						for (var nature of lib.inpile_nature) {
							card.nature = nature;
							if (trigger.filterCard(card, player, trigger)) {
								list.push([type, '', name, nature]);
							}
						}
					}
					return list;
				},
				filter(trigger, player) {
					if (trigger.responded || trigger.scqhRende) return false;
					if (player.countCards('hes') < 2) return false;
					var list = lib.skill.scqhKoihime_rende.rende(trigger, player);
					return list && list.length;
				},
				filterTarget(card, player, target) {
					return player != target;
				},
				selectTarget() {
					let player = _status.event.player;
					let players = game.filterPlayer((current) => current != player);
					if (players.length == 1) return [-1, -1];
					return [1, 1];
				},
				filterCard: true,
				selectCard: [2, 100],
				position: 'he',
				discard: false,
				lose: false,
				delay: false,
				check(card) {
					var evt = _status.event;
					var player = evt.player;
					var value = get.value(card, player);
					var pos = get.position(card);
					var list = lib.skill.scqhKoihime_rende.rende(evt, player);
					if (list.length > 1) {
						if (ui.selected.cards.length >= 2) return 0;
					}
					if (pos == 'e' && value <= 0) return 10;
					return 7 - value;
				},
				content() {
					'step 0';
					var evt = event.getParent(2);
					evt.set('scqhRende', true);
					player.give(cards, target, 'giveAuto');
					var list = lib.skill.scqhKoihime_rende.rende(evt, player);
					if (list.length > 1) {
						var next = player.chooseButton([get.translation(event.name), [list, 'vcard']]);
						next.set('forced', true);
						next.set(
							'hasSha',
							list.some((link) => link[2] == 'sha')
						);
						next.set('evtx', evt);
						next.set('ai', function (button) {
							let evtx = _status.event.evtx;
							let player = _status.event.player;
							let hasSha = _status.event.hasSha;
							let card = { name: button.link[2], nature: button.link[3] };
							let players = game.hasPlayer(function (current) {
								let eff = get.effect(current, card, player, player);
								return eff > 0 && player.canUse(card, current);
							});
							if (evtx.type != 'phase' || players) {
								switch (button.link[2]) {
									case 'tao': {
										return 5;
									}
									case 'shan': {
										return 5;
									}
									case 'jiu': {
										var he = player.countCards('he');
										if ((he >= 3 && player.countCards('hs', { name: 'sha' })) || (he >= 4 && hasSha)) {
											return 3;
										}
									}
									case 'sha': {
										if (button.link[3] == 'fire') return 2.95;
										else if (button.link[3] == 'thunder' || button.link[3] == 'ice') {
											return 2.92;
										} else return 2.9;
									}
								}
							}
							return 0;
						});
					} else if (list.length) {
						event._result = {
							bool: true,
							links: list,
						};
					} else {
						event.finish();
						evt.goto(0);
					}
					('step 1');
					var evt = event.getParent(2);
					if (result.bool) {
						var name = result.links[0][2] || '';
						var nature = result.links[0][3] || '';
						if (evt.name == 'chooseToUse') {
							game.broadcastAll(
								function (name, nature) {
									lib.skill.scqhKoihime_rende_backup.viewAs = {
										name: name,
										nature: nature,
										cards: [],
									};
									lib.skill.scqhKoihime_rende_backup.filterCard = function () {
										return false;
									};
									lib.skill.scqhKoihime_rende_backup.selectCard = -1;
								},
								name,
								nature
							);
							evt.set('_backupevent', 'scqhKoihime_rende_backup');
							evt.set('openskilldialog', '请选择【' + get.translation(nature) + get.translation(name) + '】的目标');
							evt.backup('scqhKoihime_rende_backup');
						} else {
							delete evt.result.skill;
							delete evt.result.used;
							evt.result.card = { name, nature, };
							evt.result.cards = [];
							evt.redo();
							return;
						}
					}
					evt.goto(0);
				},
				ai: {
					effect: {
						target(card, player, target, effect) {
							if (get.tag(card, 'respondShan')) return 0.7;
							if (get.tag(card, 'respondSha')) return 0.7;
						},
					},
					order: 11,
					respondShan: true,
					respondSha: true,
					save: true,
					result: {
						player(player, target) {
							var att = get.attitude(player, target);
							if (att <= 0) return 0;
							var dying = _status.event.dying;
							if (dying) {
								if (get.attitude(player, dying) <= 0) return 0;
							}
							return att;
						},
					},
				},
				subSkill: {
					backup: {},
				},
			},
			scqhKoihime_jishan: {
				trigger: {
					global: 'damageBegin4',
				},
				logTarget: 'player',
				filter(trigger, player) {
					return player.inRange(trigger.player);
				},
				prompt2: '防止此伤害并与其各摸一张牌,你流失１点体力',
				check(trigger, player) {
					let deff = get.damageEffect(trigger.player, trigger.source, player, trigger.nature);
					let eff_lose = get.effect(player, { name: 'losehp' }, player, player);
					let eff_draw = get.effect(player, { name: 'draw' }, player, player);
					let eff_draw2 = get.effect(trigger.player, { name: 'draw' }, player, player);
					return deff * trigger.num < eff_lose + eff_draw + eff_draw2 / 2;
				},
				content() {
					trigger.cancel();
					player.draw();
					trigger.player.draw();
					player.loseHp();
				},
				group: ['scqhKoihime_jishan_after'],
				subSkill: {
					after: {
						audio: 'scqhKoihime_jishan',
						forced: true,
						trigger: {
							source: 'damageSource',
						},
						players(trigger, player) {
							return game.filterPlayer((current) => {
								if (current == trigger.player) return false;
								if (!player.inRange(current)) return false;
								const card = {
									name: 'tao',
								};
								return current.hasUseTarget(card, null, true);
							});
						},
						filter(trigger, player) {
							const players = lib.skill.scqhKoihime_jishan_after.players(trigger, player);
							return players.length;
						},
						content() {
							'step 0';
							var next = player.chooseTarget(function (card, player, target) {
								const players = _status.event.players;
								return players.includes(target);
							});
							next.set('ai', function (target) {
								const player = _status.event.player;
								const att = get.attitude(player, target);
								return att > 0;
							});
							var players = lib.skill.scqhKoihime_jishan_after.players(trigger, player);
							next.set('players', players);
							next.set('prompt', get.prompt(event.name));
							next.set('prompt2', '让目标视为使用一张【桃】');
							('step 1');
							var target = (result.targets || [])[0] || false;
							if (target) {
								var card = {
									name: 'tao',
								};
								target.chooseUseTarget(card, true, 'noTargetDelay', 'nodelayx');
							}
						},
					},
					recover: {
						forced: true,
						trigger: {
							player: 'recoverAfter',
						},
						filter(trigger, player) {
							let players = game.filterPlayer((current) => {
								return current.getDiscardableCards(player, 'he');
							});
							return players.length;
						},
						content() {
							'step 0';
							var next = player.chooseTarget(function (card, player, target) {
								return target.getDiscardableCards(player, 'he').length;
							});
							next.set('ai', function (target) {
								return 2 - get.attitude(_status.event.player, target);
							});
							next.set('prompt', get.prompt(event.name));
							next.set('prompt2', '弃置其他角色的一张牌');
							('step 1');
							var target = (result.targets || [])[0] || false;
							if (target) {
								player.discardPlayerCard(target, 'he', true);
							}
						},
					},
				},
			},
			scqhKoihime_gudan: {
				audio: 2,
				vcards(trigger, player) {
					const hs = player.getCards('hes', { type: 'basic' });
					if (!hs.length) return [];
					const list = ['sha', 'shan', 'tao', 'jiu'];
					const vcards = [];
					for (const name of list) {
						const card = {
							name: name,
						};
						const subhs = player.getCards('hes', (cardx) => {
							if (cardx.name === name) return false;
							return get.type(cardx) === 'basic';
						});
						if (!subhs.length) continue;
						if (trigger && trigger.filterCard) {
							if (!trigger.filterCard(card, player, trigger)) continue;
						}
						vcards.add(name);
					}
					return vcards;
				},
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(trigger, player) {
					const vcards = lib.skill.scqhKoihime_gudan.vcards(trigger, player);
					return vcards && vcards.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						const vcards = lib.skill.scqhKoihime_gudan.vcards(trigger, player);
						const dialog = ui.create.dialog('孤胆', 'hidden');
						dialog.add('选择基本牌转化');
						dialog.add([vcards, 'vcard']);
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
						const link = links[0];
						return {
							position: 'hes',
							selectCard() {
								return 1;
							},
							filterCard(card, player) {
								let type = get.type(card);
								if (type != 'basic') return false;
								if (card.name == link[2]) return false;
								return true;
							},
							check(card) {
								return 7 - get.value(card);
							},
							viewAs: {
								name: link[2],
								nature: link[3],
								scqhKoihime_gudan: true,
							},
							precontent() { },
						};
					},
					prompt(links, player) {
						let link = links[0];
						let str = '将任意一张基本牌当做';
						str += get.translation(link[3]) || '';
						str += get.translation(link[2]) || '';
						str += _status.event.name == 'chooseToUse' ? '使用' : '打出';
						return str;
					},
				},
				hiddenCard(player, name) {
					const vcards = lib.skill.scqhKoihime_gudan.vcards(false, player);
					return vcards && vcards.includes(name);
				},
				ai: {
					respondSha: true,
					respondShan: true,
					save: true,
					skillTagFilter(player) {
						return;
					},
					order: 100,
					result: {
						player(player) {
							if (_status.event.dying) return get.attitude(player, _status.event.dying);
							if (_status.event.type == 'respondShan') return 1;
							return 1;
						},
					},
				},
				group: ['scqhKoihime_gudan_chongzhen'],
				subfrequent: ['chongzhen'],
				subSkill: {
					backup: {},
					chongzhen: {
						audio: 'scqhKoihime_gudan',
						forced: true,
						logTarget(trigger, player) {
							let current = [];
							let source = trigger.source || false;
							let respondTo = trigger.respondTo || [];
							let targets = trigger.targets || [];
							if (trigger.name == 'respond' && source) current.add(source);
							else if (respondTo.length) current.add(respondTo[0]);
							else if (targets.length) current.addArray(targets);
							if (current.length && current.includes(player)) current.remove(player);
							current = current.filter((target) => {
								return target.isIn() && target.countGainableCards(player, 'h');
							});
							return current;
						},
						trigger: {
							player: ['useCard', 'respond'],
						},
						filter(trigger, player) {
							if (!trigger.card.scqhKoihime_gudan) return false;
							let targets = lib.skill.scqhKoihime_gudan_chongzhen.logTarget(trigger, player) || [];
							return targets.length;
						},
						check(trigger, player) {
							return true;
						},
						prompt(trigger) {
							let player = _status.event.player;
							let targets = lib.skill.scqhKoihime_gudan_chongzhen.logTarget(trigger, player) || [];
							let str = '是否对';
							str += get.translation(targets);
							str += '发动【孤胆】立即获得其一张手牌？';
							return str;
						},
						content() {
							var targets = lib.skill.scqhKoihime_gudan_chongzhen.logTarget(trigger, player) || [];
							for (let target of targets) {
								player.gainPlayerCard(target, 'h', true);
							}
						},
						ai: {
							mingzhi: false,
							effect: {
								target(card, player, target, current) {
									if (get.tag(card, 'respondShan') || get.tag(card, 'respondSha')) {
										if (get.attitude(target, player) <= 0) {
											if (current > 0) return;
											if (target.countCards('h') == 0) return 1.6;
											if (target.countCards('h') == 1) return 1.2;
											if (target.countCards('h') == 2) return [0.8, 0.2, 0, -0.2];
											return [0.4, 0.7, 0, -0.7];
										}
									}
								},
							},
						},
					},
				},
			},
			scqhKoihime_longyou: {
				audio: 2,
				forced: true,
				trigger: {
					global: 'useCardToPlayered',
				},
				filter(trigger, player) {
					if (trigger.player === player) return false;
					if (trigger.card.name !== 'sha') return false;
					return trigger.isFirstTarget;
				},
				content() {
					'step 0';
					var str = '是否对';
					str += get.translation(trigger.targets);
					str += '发动【';
					str += get.translation(event.name);
					str += '】并打出一张【闪】？';
					var next = player.chooseToRespond({ name: 'shan' });
					next.set('targets', trigger.targets);
					next.set('source', trigger.player);
					next.set('cardx', trigger.card);
					next.set('prompt', str);
					next.set('prompt2', get.translation(event.name + '_info'));
					next.set('ai', function () {
						let targets = _status.event.targets;
						let source = _status.event.source;
						let player = _status.event.player;
						let cardx = _status.event.cardx;
						for (let target of targets) {
							let eff = get.effect(target, cardx, source, player);
							if (eff < 0) return true;
						}
						return false;
					});
					next.noOrdering = true;
					next.autochoose = lib.filter.autoRespondShan;
					('step 1');
					if (result.bool) {
						trigger.excluded.addArray(trigger.targets);
						var cardx = {
							name: 'juedou',
						};
						if (trigger.player.canUse(cardx, player)) {
							var eff = get.effect(player, cardx, trigger.player, trigger.player);
							var str = '是否视为对' + get.translation(player) + '使用一张【决斗】？';
							var next = trigger.player.chooseBool(str);
							next.set('choice', eff >= 0);
						} else event.finish();
					} else event.finish();
					('step 2');
					if (result.bool) {
						var cardx = {
							name: 'juedou',
						};
						trigger.player.useCard(cardx, player);
					}
				},
			},
			scqhKoihime_zhuizhan: {
				audio: 'qinglong_skill',
				forced: true,
				trigger: {
					global: 'useCardAfter',
				},
				filter(trigger, player) {
					if (trigger.card.name != 'sha') return false;
					let targets = lib.skill.scqhKoihime_zhuizhan.logTarget(trigger, player);
					if (!targets.length) return false;
					return player.hasSha() || (_status.connectMode && player.countCards('hs'));
				},
				logTarget(trigger, player) {
					let targets = (trigger.targets || []).filter((target) => {
						if (!target.isIn()) return false;
						if (!player.canUse(trigger.card.name, target, false)) return false;
						return true;
					});
					return targets;
				},
				content() {
					'step 0';
					var targets = lib.skill[event.name].logTarget(trigger, player);
					var str = get.translation(event.name);
					str += ':是否对' + get.translation(targets);
					str += targets.length > 1 ? '中的一人' : '';
					str += '使用一张【杀】？';
					var next = player.chooseToUse();
					next.set('prompt', str);
					next.set('filterCard', function (card, player, event) {
						if (card.name != 'sha') return false;
						return lib.filter.filterCard.apply(this, arguments);
					});
					next.set('filterTarget', function (card, player, target) {
						return targets.includes(target);
					});
					next.set('selectTarget', targets.length > 1 ? 1 : -1);
					next.set('addCount', false);
					('step 1');
					if (result.card && get.color(result.card) == 'red') {
						player.draw();
					}
				},
				mod: {
					aiOrder(player, card, num) {
						let name = card.name;
						let color = get.color(card, player);
						let xnum = 1;
						if (_status.event.name == 'chooseToUse') {
							if (name == 'sha' && color == 'red') return num + 5;
						}
					},
				},
				subSkill: {
					draw: {
						forced: true,
						trigger: {
							player: 'useCard',
						},
						filter(trigger, player) {
							if (get.color(trigger.card) != 'red') return false;
							return trigger.getParent(2).name == 'scqhKoihime_zhuizhan';
						},
						content() {
							player.draw();
						},
					},
				},
			},
			scqhKoihime_qingwu: {
				map(trigger, player) {
					let map = {};
					map.vcards = [];
					map.hiddenCard = [];
					for (let name of ['sha', 'shan']) {
						if (name == 'sha') {
							if (!player.countCards('hes', { color: 'red' })) continue;
						}
						if (name == 'shan') {
							if (!player.countCards('hes', { color: 'black' })) continue;
						}
						let card = { name: name };
						map.hiddenCard.push(name);
						if (trigger && trigger.filterCard(card, player, trigger)) {
							map.vcards.push(name);
						}
					}
					return map;
				},
				hiddenCard(player, name) {
					let map = lib.skill.scqhKoihime_qingwu.map(false, player);
					return map.hiddenCard.includes(name);
				},
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(trigger, player) {
					let map = lib.skill.scqhKoihime_qingwu.map(trigger, player);
					return map.vcards.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						let map = lib.skill.scqhKoihime_qingwu.map(trigger, player);
						let dialog = ui.create.dialog('倾武', [map.vcards, 'vcard']);
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
						var evt = _status.event;
						var list = ['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'];
						var card = {};
						card.name = button.link[2];
						card.nature = button.link[3];
						if (evt.parent.type != 'phase') return 1;
						if (card.name == 'jiu') return 0;
						if (list.includes(card.name)) return 0;
						return evt.player.getUseValue(card);
					},
					backup(links, player) {
						let name = links[0][2];
						let color = name == 'sha' ? 'red' : 'black';
						let list = {
							filterCard: {
								color: color,
							},
							position: 'hes',
							precontent() {
								let skill = 'scqhKoihime_qingwu';
							},
							viewAs: {
								name: name,
								storage: {
									scqhKoihime_qingwu: true,
								},
							},
							check(card) {
								let value = get.value(card);
								return 8 - value;
							},
						};
						return list;
					},
					prompt(links, player) {
						let name = links[0][2];
						let color = name == 'sha' ? 'red' : 'black';
						let prompt = '将一张';
						prompt += get.translation(color) || '';
						prompt += '牌当做【';
						prompt += get.translation(name) || '';
						prompt += '】使用或打出';
						return prompt;
					},
				},
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter(player) {
						if (!player.countCards('hes')) return false;
					},
					order: 5,
					result: {
						player(player) {
							return 1;
						},
					},
				},
				group: ['scqhKoihime_qingwu_use'],
				subSkill: {
					use: {
						logTarget(trigger, player) {
							let current = [];
							let source = trigger.source || false;
							let respondTo = trigger.respondTo || [];
							let targets = trigger.targets || [];
							if (trigger.name == 'respond' && source) current.add(source);
							else if (respondTo.length) current.add(respondTo[0]);
							else if (targets.length) current.addArray(targets);
							if (current.length && current.includes(player)) current.remove(player);
							return current;
						},
						forced: true,
						trigger: {
							player: ['useCard', 'respond'],
						},
						filter(trigger, player) {
							let storage = trigger.card.storage || {};
							if (!storage.scqhKoihime_qingwu) return false;
							let targets = lib.skill.scqhKoihime_qingwu_use.logTarget(trigger, player) || [];
							return targets.length;
						},
						content() {
							var targets = lib.skill.scqhKoihime_qingwu_use.logTarget(trigger, player) || [];
							var suit = trigger.card.suit;
							for (let target of targets) {
								target.addTempSkill('scqhKoihime_qingwu_ban');
								target.markAuto('scqhKoihime_qingwu_ban', [suit]);
							}
						},
					},
					ban: {
						charlotte: true,
						mod: {
							cardEnabled(card, player) {
								let storage = player.getStorage('scqhKoihime_qingwu_ban');
								if (storage.includes(card.suit) && get.position(card) == 'h') return false;
							},
							cardEnabled2(card, player) {
								let storage = player.getStorage('scqhKoihime_qingwu_ban');
								if (storage.includes(card.suit) && get.position(card) == 'h') return false;
							},
							cardRespondable(card, player) {
								let storage = player.getStorage('scqhKoihime_qingwu_ban');
								if (storage.includes(card.suit) && get.position(card) == 'h') return false;
							},
							cardSavable(card, player) {
								let storage = player.getStorage('scqhKoihime_qingwu_ban');
								if (storage.includes(card.suit) && get.position(card) == 'h') return false;
							},
						},
						mark: true,
						marktext: '倾',
						intro: {
							content: '本回合内不能使用或打出的手牌:$',
						},
					},
				},
			},
			scqhKoihime_jiang: {
				forced: true,
				trigger: {
					player: 'useCardToTargeted',
					target: 'useCardToTargeted',
				},
				filter(trigger, player) {
					if (trigger.player == trigger.target) return false;
					if (trigger.card.name == 'juedou') return true;
					if (trigger.card.name == 'sha' && get.color(trigger.card) == 'red') return true;
					return false;
				},
				content() {
					'step 0';
					player.draw();
					('step 1');
					event.target = trigger.player == player ? trigger.target : trigger.player;
					if (player.canCompare(event.target)) {
						var next = player.chooseBool();
						next.prompt = get.translation(event.name);
						next.prompt += ':是否与';
						next.prompt += get.translation(event.target);
						next.prompt += '进行拼点？';
						next.target = event.target;
						next.ai = function () {
							let target = _status.event.target;
							let player = _status.event.player;
							return 1;
						};
					} else event.finish();
					('step 2');
					if (result.bool && player.canCompare(event.target)) {
						player.chooseToCompare(event.target);
					} else event.finish();
					('step 3');
					var target = trigger.target;
					var hit = false;
					if (result.bool && trigger.player == player) hit = true;
					if (!result.bool && trigger.player != player) hit = true;
					if (hit) {
						trigger.parent.directHit.add(target);
						game.log(trigger.card, '不能被', target, '响应');
					} else {
						trigger.parent.excluded.add(target);
						game.log(trigger.card, '对', target, '无效');
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							let name = card.name;
							let type = get.type(card);
							let bool = false;
							if (target.hasSkill('scqhKoihime_zhiba')) {
								if (type == 'trick') bool = true;
							}
							if (name == 'juedou' || bool) {
								let num1 = player.countCards('h', 'sha');
								let num2 = target.countCards('h', function (card2) {
									if (card2.name == 'sha') return true;
									if (bool) return get.color(card2) == 'red';
									return false;
								});
								if (num2 == 0) return 1.6;
								if (num1 <= num2) return [0.4, 0.7, 0, -0.7];
							}
						},
						player(card, player, target) {
							if (card.name == 'sha' && get.color(card) == 'red') {
								return 1.5;
							}
							if (card.name == 'juedou') {
								var num1 = player.countCards('h');
								var num2 = target.countCards('h', 'sha');
								if (num2 == 0) return 1.6;
								if (num1 <= num2) return [0.4, 0.7, 0, -0.7];
							}
						},
					},
				},
				mod: {
					cardname(card, player) {
						return;
						let evt = _status.event;
						let evt2 = evt.parent;
						if (evt.name == 'chooseToRespond' && evt2 && evt2.name == 'juedou' && get.color(card) == 'red') return 'sha';
					},
				},
			},
			scqhKoihime_yingyang: {
				forced: true,
				preHidden: true,
				trigger: {
					player: 'compare',
					target: 'compare',
				},
				filter(trigger) {
					return !trigger.iwhile;
				},
				content() {
					'step 0';
					var list = [];
					list.addArray(['你+3', '你-3']);
					list.addArray(['对家+3', '对家-3']);
					list.add('cancel2');
					var next = player.chooseControl(list);
					next.set('prompt', get.prompt2(event.name));
					next.set('ai', function () {
						var small = _status.event.small || false;
						if (small) return 2;
						return 3;
					});
					next.set('small', trigger.small);
					('step 1');
					if (result.index != 4) {
						var target = trigger.player == player ? trigger.target : trigger.player;
						if (result.index == 0) {
							game.log(player, '拼点牌点数+3');
							if (player == trigger.player) {
								trigger.num1 += 3;
								if (trigger.num1 > 13) trigger.num1 = 13;
							} else {
								trigger.num2 += 3;
								if (trigger.num2 > 13) trigger.num2 = 13;
							}
						} else if (result.index == 1) {
							game.log(player, '拼点牌点数-3');
							if (player == trigger.player) {
								trigger.num1 -= 3;
								if (trigger.num1 < 1) trigger.num1 = 1;
							} else {
								trigger.num2 -= 3;
								if (trigger.num2 < 1) trigger.num2 = 1;
							}
						} else if (result.index == 2) {
							game.log(target, '拼点牌点数+3');
							if (target == trigger.player) {
								trigger.num1 += 3;
								if (trigger.num1 > 13) trigger.num1 = 13;
							} else {
								trigger.num2 += 3;
								if (trigger.num2 > 13) trigger.num2 = 13;
							}
						} else if (result.index == 3) {
							game.log(target, '拼点牌点数-3');
							if (target == trigger.player) {
								trigger.num1 -= 3;
								if (trigger.num1 < 1) trigger.num1 = 1;
							} else {
								trigger.num2 -= 3;
								if (trigger.num2 < 1) trigger.num2 = 1;
							}
						}
					}
				},
			},
			scqhKoihime_zhiba: {
				audio: 1,
				trigger: {
					player: 'useCardToTargeted',
					target: 'useCardToTargeted',
				},
				logTarget(trigger, player) {
					return trigger.player == player ? trigger.target : trigger.player;
				},
				filter(trigger, player) {
					if (trigger.player == trigger.target) return false;
					if (trigger.card.name == 'juedou') return false;
					if (get.type(trigger.card) != 'trick') return false;
					var list = trigger.parent.excluded || [];
					var target = lib.skill.scqhKoihime_zhiba.logTarget(trigger, player) || false;
					return target && !list.includes(target);
				},
				check(trigger, player) {
					var target = lib.skill.scqhKoihime_zhiba.logTarget(trigger, player) || false;
					if (!target) return 0;
					var att = get.attitude(target, player);
					var tagd = get.tag(trigger.card, 'damage');
					if (att > 0 && !tagd) return 0;
					return 1;
				},
				content() {
					trigger.parent.excluded.add(trigger.target);
					var subname = 'scqhKoihime_zhiba_after';
					var onin = false;
					for (var evt of trigger.parent.after) {
						if (evt.name == subname && evt.source == trigger.player) {
							evt.targets.add(trigger.target);
							onin = true;
						}
					}
					if (!onin) {
						var next = game.createEvent(subname);
						event.next.remove(next);
						trigger.parent.after.push(next);
						next.source = trigger.player;
						next.targets = [trigger.target];
						next.setContent(function () {
							var card = {
								name: 'juedou',
							};
							var source = event.source;
							var targets = event.targets.filter((target) => {
								return target.isIn() && source.canUse(card, target);
							});
							if (source.isIn() && targets.length) {
								source.useCard(card, targets);
							}
						});
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.type(card) == 'trick') {
								var num1 = player.countCards('h', 'sha');
								var num2 = target.countCards('h', 'sha');
								if (num2 == 0) return 1.6;
								if (num1 <= num2) return [0.4, 0.7, 0, -0.7];
							}
						},
					},
				},
			},
			scqhKoihime_paoxiao: {
				map(player) {
					let map = {};
					let usable = player.getStat('skill').scqhKoihime_paoxiao || 0;
					usable += 1;
					let number = get.cnNumber(usable);
					let list = [];
					let hs = player.getCards('he');
					if (hs.length >= usable) list.add('弃置' + number + '张牌');
					if (player.hp > usable) list.add('流失' + number + '点体力');
					map.usable = usable;
					map.list = list;
					return map;
				},
				enable: 'phaseUse',
				filter(trigger, player) {
					let map = lib.skill.scqhKoihime_paoxiao.map(player);
					return map.list.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						let prompt = get.prompt('scqhKoihime_paoxiao');
						let dialog = ui.create.dialog(prompt);
						return dialog;
					},
					chooseControl(trigger, player) {
						let map = lib.skill.scqhKoihime_paoxiao.map(player);
						return map.list;
					},
					check(trigger, player) {
						return 0;
					},
					backup(result, player) {
						var bool = {};
						var control = result.control;
						var map = lib.skill.scqhKoihime_paoxiao.map(player);
						bool.name = '咆哮';
						bool.paoxiao = {
							number: map.usable,
							prompt: result.control,
						};
						bool.filterTarget = function (card, player, target) {
							if (player == target) return false;
							if (!player.canUse('sha', target)) return false;
							return true;
						};
						if (control.includes('弃置')) {
							bool.paoxiao.type = 'discard';
							bool.filterCard = true;
							bool.selectCard = map.usable;
							bool.position = 'he';
							bool.check = function (card) {
								return 7 - get.value(card);
							};
						}
						if (control.includes('体力')) {
							bool.paoxiao.type = 'loseHp';
						}
						bool.content = function () {
							var paoxiao = lib.skill.scqhKoihime_paoxiao_backup.paoxiao || {};
							var type = paoxiao.type || '';
							var number = paoxiao.number || 0;
							if (type == 'loseHp' && number > 0) player.loseHp(number);
							var cardx = {
								name: 'sha',
							};
							player.useCard(cardx, targets, false);
						};
						bool.ai = {
							result: {
								player(player, target) {
									return get.effect(target, { name: 'sha' }, player, player);
								},
							},
						};
						return bool;
					},
					prompt(result, player) {
						var str = '【咆哮】:';
						var paoxiao = lib.skill.scqhKoihime_paoxiao_backup.paoxiao || {};
						str += paoxiao.prompt || '';
						str += '并视为对一名其他角色使用一张【杀】';
						return str;
					},
				},
				ai: {
					order(item, player) {
						return get.order({ name: 'sha' }, player) - 1;
					},
					result: {
						player: 1,
					},
				},
				subSkill: {
					backup: {},
				},
			},
			scqhKoihime_lihu: {
				forced: true,
				trigger: {
					player: 'useCardToPlayered',
					target: 'useCardToTargeted',
				},
				filter(trigger, player) {
					if (trigger.card.name != 'sha') return false;
					let tie1 = trigger.player.hp == trigger.target.hp;
					let tie2 = trigger.player.countCards('h') == trigger.target.countCards('h');
					return tie1 || tie2;
				},
				content() {
					player.draw();
				},
				ai: {
					effect: {
						target(card, player, target) {
							let tie1 = player.hp == target.hp;
							let tie2 = player.countCards('h') == target.countCards('h');
							let tie = tie1 || tie2;
							if (card && card.name == 'sha' && tie) return [1, 0.3];
						},
						player(card, player, target) {
							let evt = _status.event;
							if (evt.name == 'chooseToUse' && evt.player == player && evt.skill == 'scqhKoihime_paoxiao') {
								let hp = player.hp;
								if (!ui.selected.cards.length) {
									let map = lib.skill.scqhKoihime_paoxiao.map(player);
									hp -= map.usable;
								}
								let tie = false;
								if (target) {
									if (hp == target.hp || player.countCards('h') == target.countCards('h')) {
										tie = true;
									}
								}
								if (card && card.name == 'sha' && tie) return [1, 0.3];
							}
						},
					},
				},
			},
			scqhKoihime_baguan: {
				trigger: {
					global: 'phaseAfter',
				},
				filter(trigger, player) {
					if (!player.hasEnabledSlot()) return false;
					if (trigger.player == player) return false;
					return true;
					return player.countCards('he', function (card) {
						return get.type(card) == 'equip' || get.position(card) == 'e';
					});
				},
				check() {
					return 1;
				},
				content() {
					'step 0';
					var next = player.chooseToDisable();
					next.set('ai', function (event, player, list) {
						var list = [3, 5, 4, 1, 2];
						for (const i of list) {
							if (player.hasEnabledSlot(i)) {
								var card = player.getEquip(i);
								if (!card || player.hasEmptySlot(i)) return 'equip' + i;
								if (get.value(card, player) <= 0) return 'equip' + i;
							}
						}
						return list.randomGet();
					});
					('step 1');
					if (result && result.control) {
						player.phase('nodelay');
					}
				},
				xcontent() {
					'step 0';
					var next = player.chooseToDiscard('he', function (card) {
						return get.type(card) == 'equip' || get.position(card) == 'e';
					});
					next.set('prompt', get.prompt2(event.name));
					next.set('ai', (card) => {
						if (player.hasSkill('scqhKoihime_jidao')) {
							if (card.name.includes('scqhKoihime_jidao')) return 10;
						}
						return 7 - get.value(card);
					});
					('step 1');
					if (result && result.bool) {
						player.phase('nodelay');
					}
				},
			},
			scqhKoihime_liyu: {
				trigger: {
					player: 'useCardToPlayered',
				},
				logTarget: 'target',
				filter(trigger, player) {
					let list = ['sha', 'juedou'];
					if (!list.includes(trigger.card.name)) return false;
					if (!trigger.target.countGainableCards(player, 'hej')) return false;
					return true;
				},
				check(trigger, player) {
					return true;
				},
				content() {
					'step 0';
					var next = player.gainPlayerCard(true, trigger.target, 'hej', 'visibleMove');
					next.set('ai', function (button) {
						return get.value(button.link);
					});
					('step 1');
					var cards = result.cards || [];
					if (cards.length) {
						if (get.type(cards[0]) !== 'equip') {
							trigger.target.draw();
							event.finish();
						} else {
							var players = game.filterPlayer((current) => {
								const tx = trigger.parent.targets || [];
								if (tx.includes(current)) return false;
								if (current === player) return false;
								if (current === trigger.target) return false;
								return lib.filter.targetEnabled2(trigger.card, player, current);
							});
							if (players.length) {
								var next = trigger.target.chooseTarget(true, function (card, player, target) {
									var players = _status.event.players;
									return players.includes(target);
								});
								next.set('prompt', '请选择【利驭】的目标');
								next.set('players', players);
								next.set('source', player);
								next.set('cardx', trigger.card);
								next.set('ai', function (target) {
									var cardx = _status.event.cardx;
									var source = _status.event.source;
									var player = _status.event.player;
									return get.effect(target, cardx, source, player);
								});
							} else event.finish();
						}
					} else event.finish();
					('step 2');
					if (result && result.bool) {
						var targets = result.targets || [];
						if (targets.length) {
							game.log(targets, '成为了', trigger.card, '的额外目标');
							trigger.parent.targets.addArray(targets);
						}
					}
				},
				ai: {
					halfneg: true,
				},
			},
			scqhKoihime_jidao: {
				charlotte: true,
				marktext: '怒',
				intro: {
					content: '(ꐦ ಠ 皿 ಠ) #',
				},
				map(player) {
					var map = {
						equips: [],
						vcards: [],
					};
					var equips = [
						[1, 0],
						[2, 20],
						[3, 40],
						[4, 60],
						[5, 80],
					];
					var mark = player.countMark('scqhKoihime_jidao');
					for (var list of equips) {
						if (!player.hasEnabledSlot(list[0])) continue;
						if (mark >= list[1]) map.equips.push([list[0], get.translation('equip' + list[0])]);
					}
					var vcards = ['scqhKoihime_jidao_wushuang', 'scqhKoihime_jidao_wuchang', 'scqhKoihime_jidao_wuyan', 'scqhKoihime_jidao_wumou', 'scqhKoihime_jidao_wuqian', 'scqhKoihime_jidao_shenfen'];
					var storage = player.storage.scqhKoihime_jidao_usable || [];
					for (var name of vcards) {
						var es = player.getCards('e', { name: name });
						if (es.length) continue;
						if (storage.includes(name)) continue;
						if (name == 'scqhKoihime_jidao_shenfen') {
							if (mark < 99) continue;
						}
						var tupian = player.name || player.name1 || player.name2;
						var card = {
							type: 'scqhKoihime_jidao',
							effect() { },
							content: lib.element.content.equipCard,
							skills: [name],
							global: [],
							ai: {
								basic: {
									equipValue: 10,
									order: 10,
									useful: 10,
									value: 10,
								},
							},
							fullborder: 'gold',
							image: 'character:' + tupian,
						};
						var group = lib.skill[name].group || [];
						if (group.length) card.skills.addArray(group);
						lib.card[name] = card;
						map.vcards.add(name);
					}
					return map;
				},
				enable: 'phaseUse',
				usable: 100,
				filter(trigger, player) {
					var map = lib.skill.scqhKoihime_jidao.map(player);
					return map.vcards.length && map.equips.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						var dialog = ui.create.dialog('极道', 'hidden');
						var map = lib.skill.scqhKoihime_jidao.map(player);
						dialog.add([map.equips, 'tdnodes']);
						dialog.add([map.vcards, 'vcard']);
						return dialog;
					},
					filter(button) {
						var player = _status.event.player;
						var buttons = ui.selected.buttons || [];
						if (buttons.length) {
							if (typeof button.link == typeof buttons[0].link) return false;
						}
						return true;
					},
					select: 2,
					check(button) {
						var player = _status.event.player;
						if (typeof button.link == 'number') {
							var card = player.getEquip(button.link);
							if (card) {
								if (card.name.includes('scqhKoihime_jidao')) return 0;
								var val = get.value(card);
								return 8 - val;
							}
						}
						return 1;
					},
					backup(links, player) {
						if (typeof links[1] == 'number') links.reverse();
						var equip = links[0];
						var name = links[1][2];
						var info = {
							log: false,
							popup: false,
							jidao: {
								equip: equip,
								name: name,
							},
							content() {
								player.addTempSkill('scqhKoihime_jidao_usable', ['phaseUseBefore', 'phaseUseAfter']);
								var jidao = lib.skill.scqhKoihime_jidao_backup.jidao;
								lib.card[jidao.name].type = 'equip';
								lib.card[jidao.name].subtype = 'equip' + jidao.equip;
								var card = game.createCard({
									name: jidao.name,
									suit: 'none',
									number: 1,
								});
								if (player.canEquip(card, true)) {
									player.markAuto('scqhKoihime_jidao_usable', [card.name]);
									player.equip(card);
								}
							},
						};
						return info;
					},
					prompt(links, player) {
						if (typeof links[1] == 'number') links.reverse();
						var equip = 'equip' + links[0];
						var name = links[1][2];
						var str = '是否将';
						str += '【';
						str += get.translation(name) || '';
						str += '】制作成【';
						str += get.translation(equip);
						str += '】置入装备区';
						var card = player.getEquip(links[0]);
						if (card) {
							str += '(替换';
							str += get.translation(card.name);
							str += ')';
						}
						return str;
					},
				},
				ai: {
					order(item, player) {
						var num1 = get.order({ name: 'sha' }, player);
						var num2 = get.order({ name: 'juedou' }, player);
						var num = num1 >= num2 ? num1 : num2;
						return num + 5;
					},
					result: {
						player(player) {
							return 1;
						},
					},
				},
				suijiAudio(player) {
					const list = [];
					list.add('scqhKoihime_jidao');
					list.add('scqhKoihime_baguan');
					list.add('scqhKoihime_liyu');
					const name = list.randomGet();
					game.trySkillAudio(name, player, true);
				},
				group: ['scqhKoihime_jidao_damage'],
				subSkill: {
					usable: {
						charlotte: true,
					},
					damage: {
						audio: 'scqhKoihime_jidao',
						forced: true,
						charlotte: true,
						trigger: {
							source: 'damageSource',
							player: 'damageEnd',
						},
						content() {
							var skill = 'scqhKoihime_jidao';
							var count = Math.min(10 * trigger.num, 99 - player.countMark(skill));
							if (count > 0) player.addMark(skill, count, false);
						},
					},
					wushuang: {
						forced: true,
						trigger: {
							player: 'useCardToPlayered',
							target: 'useCardToTargeted',
						},
						filter(trigger, player) {
							let list = ['sha', 'juedou'];
							if (!list.includes(trigger.card.name)) return false;
							if (trigger.player == trigger.target) return false;
							if (trigger.target == player) {
								if (trigger.card.name == 'sha') return false;
							}
							return true;
						},
						logTarget(trigger, player) {
							return player == trigger.player ? trigger.target : trigger.player;
						},
						content() {
							lib.skill.scqhKoihime_jidao.suijiAudio(player);
							if (trigger.card.name == 'juedou') {
								var id = (player == trigger.player ? trigger.target : trigger.player).playerid;
								var idt = trigger.target.playerid;
								var map = trigger.parent.customArgs;
								if (!map[idt]) map[idt] = {};
								if (!map[idt].shaReq) map[idt].shaReq = {};
								if (typeof map[idt].shaReq[id] != 'number') {
									map[idt].shaReq[id] = 1;
								}
								map[idt].shaReq[id] += 1;
							} else {
								var id = trigger.target.playerid;
								var map = trigger.parent.customArgs;
								if (!map[id]) map[id] = {};
								if (typeof map[id].shanRequired != 'number') {
									map[id].shanRequired = 1;
								}
								map[id].shanRequired += 1;
							}
						},
						ai: {
							directHit_ai: true,
							skillTagFilter(player, tag, arg) {
								if (arg && arg.card.name == 'sha') {
									if (arg && arg.target.countCards('h', 'shan') > 1) return false;
								}
								if (arg && arg.card.name == 'juedou') {
									if (Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
								}
							},
						},
					},
					wuyan: {
						forced: true,
						trigger: {
							source: 'damageBegin2',
							player: 'damageBegin4',
						},
						filter(trigger, player) {
							if (!trigger.card) return false;
							if (trigger.card.name == 'juedou') return false;
							if (get.type2(trigger.card) != 'trick') return false;
							return true;
						},
						content() {
							lib.skill.scqhKoihime_jidao.suijiAudio(player);
							trigger.cancel();
						},
						ai: {
							notrick: true,
							notricksource: true,
							effect: {
								target(card, player, target, current) {
									if (card.name != 'juedou' && get.type(card) == 'trick' && get.tag(card, 'damage')) {
										return 'zeroplayertarget';
									}
								},
								player(card, player, target, current) {
									if (card.name != 'juedou' && get.type(card) == 'trick' && get.tag(card, 'damage')) {
										return 'zeroplayertarget';
									}
								},
							},
						},
					},
					wumou: {
						forced: true,
						trigger: {
							player: 'useCard',
						},
						filter(trigger, player) {
							if (trigger.card.name === 'juedou') return false;
							return get.type(trigger.card) === 'trick';
						},
						content() {
							'step 0';
							lib.skill.scqhKoihime_jidao.suijiAudio(player);
							var card = { name: 'juedou' };
							var targets = trigger.targets || [];
							targets = targets.filter((target) => {
								return player.canUse(card, target);
							});
							event.targets = targets;
							var list = [];
							list.add('受到一点无来源的伤害');
							if (targets.length) list.add('视为对' + get.translation(targets) + '使用一张【决斗】');
							if (list.length > 1) {
								var next = player.chooseControlList(list, true);
								var att = 0;
								for (var target of targets) {
									var eff = get.effect(target, card, player, player);
									att += eff;
								}
								next.set('att', att);
								next.set('ai', function (event, player) {
									var att = _status.event.att;
									if (att > 0) return 1;
									return 0;
								});
							} else
								event._result = {
									index: 0,
									control: list[0],
								};
							('step 1');
							if (!result.index) {
								player.damage('nosource');
							} else {
								trigger.cancel();
								var targets = event.targets || [];
								if (targets.length) {
									player.useCard({ name: 'juedou' }, targets, false);
								}
							}
						},
						ai: {
							effect: {
								player(card, player, target, current) {
									const att = get.attitude(player, target);
									const cardx = { name: 'juedou' };
									const canuse = player.canUse(cardx, target);
									if (canuse && get.type(card) === 'trick' && att <= 0) return [10, 10];
								},
							},
							neg: true,
						},
					},
					wuqian: {
						forced: true,
						trigger: {
							player: 'useCard2',
						},
						filter(trigger, player) {
							return true;
						},
						content() {
							lib.skill.scqhKoihime_jidao.suijiAudio(player);
						},
						mod: {
							globalFrom(from, to, distance) {
								return distance - from.countUsed();
							},
						},
						ai: {
							unequip: true,
							skillTagFilter(player) {
								var bool = game.hasPlayer(function (current) {
									return get.distance(player, current) > 1;
								});
								if (bool) return false;
							},
						},
					},
					wuchang: {
						forced: true,
						trigger: {
							player: 'gainAfter',
							global: 'loseAsyncAfter',
						},
						filter(trigger, player) {
							let cards = trigger.getg(player);
							if (!cards.length) return false;
							let gamers = game.filterPlayer((current) => {
								if (current == player) return false;
								if (current.group == player.group) return false;
								let evt = trigger.getl(current);
								return evt && evt.cards2 && evt.cards2.length;
							});
							return gamers.length;
						},
						content() {
							'step 0';
							lib.skill.scqhKoihime_jidao.suijiAudio(player);
							var gamers = game.filterPlayer((current) => {
								if (current == player) return false;
								if (current.group == player.group) return false;
								let evt = trigger.getl(current);
								return evt && evt.cards2 && evt.cards2.length;
							});
							if (gamers.length > 1) {
								player
									.chooseTarget(true, function (card, player, target) {
										let gamers = _status.event.gamers;
										return gamers.includes(target);
									})
									.set('gamers', gamers)
									.set('prompt', '请选择【' + get.translation(event.name) + '】的目标')
									.set('prompt2', lib.translate[event.name + '_info'])
									.set('ai', function (target) {
										return 1;
									}).animate = false;
							} else {
								event._result = {
									targets: gamers,
								};
							}
							('step 1');
							var targets = result.targets || [];
							var target = targets[0] || false;
							if (target) {
								var group = target.group;
								player.changeGroup(group);
								player.popup(group + '2', get.groupnature(group, 'raw'));
							}
						},
						group: ['scqhKoihime_jidao_wuchang2'],
					},
					wuchang2: {
						name: '无常',
						forced: true,
						trigger: {
							source: 'damageBegin1',
						},
						filter(trigger, player) {
							if (trigger.player.group != player.group) return false;
							let list = ['sha', 'juedou'];
							return trigger.card && list.includes(trigger.card.name);
						},
						content() {
							lib.skill.scqhKoihime_jidao.suijiAudio(player);
							trigger.num++;
							var group = 'qun';
							player.changeGroup(group);
							player.popup(group + '2', get.groupnature(group, 'raw'));
						},
					},
					shenfen: {
						audio: 'scqhKoihime_baguan',
						limited: true,
						enable: 'phaseUse',
						usable: 1,
						filter(trigger, player) {
							var players = game.filterPlayer((current) => current != player);
							if (!players.length) return false;
							return player.countMark('scqhKoihime_jidao') >= 99;
						},
						filterTarget(card, player, target) {
							return player != target;
						},
						selectTarget: -1,
						contentBefore() {
							player.$fullscreenpop('天下无双', 'metal');
							player.removeMark('scqhKoihime_jidao', 99, false);
							for (var i = 0; i < 5; i++) {
								if (player.hasDisabledSlot(i)) player.enableEquip(i);
							}
						},
						content() {
							var cards = target.getCards('he');
							if (cards.length) target.discard(cards);
							target.damage();
						},
						contentAfter() {
							game.addGlobalSkill('scqhKoihime_jidao_tianxiawushuang');
							const filter = function (card) {
								var number = card.number || 0;
								if (number == 0) return false;
								return number % 2 != 1;
							};
							const cards = ['cardPile', 'discardPile'].map((pos) => Array.from(ui[pos].childNodes)).flat();
							const cardx = cards.filter(filter);
							if (cardx.length) {
								game.cardsGotoSpecial(cardx);
								game.log(cardx, '被移出了游戏');
							}
							for (const target of game.filterPlayer()) {
								const sishis = target.getCards('hej', filter);
								if (sishis.length) target.lose(sishis);
							}
						},
						ai: {
							order: 10,
							result: {
								player(player) {
									return game.countPlayer(function (current) {
										if (current == player) return false;
										return get.sgn(get.damageEffect(current, player, player));
									});
								},
							},
						},
					},
					tianxiawushuang: {
						name: '天下无双',
						forced: true,
						silent: true,
						firstDo: true,
						popup: false,
						trigger: {
							global: ['loseAfter', 'equipAfter', 'loseAsyncAfter', 'cardsDiscardAfter'],
						},
						filter(trigger, player) {
							const filter = function (card) {
								var number = card.number || 0;
								if (number == 0) return false;
								return number % 2 != 1;
							};
							return trigger.getd().some((card) => {
								return filter(card) && get.position(card, true) === 'd';
							});
						},
						async content(event, trigger, player) {
							const filter = function (card) {
								var number = card.number || 0;
								if (number == 0) return false;
								return number % 2 != 1;
							};
							const cards = trigger.getd().filter((card) => {
								return filter(card) && get.position(card, true) === 'd';
							});
							await game.cardsGotoSpecial(cards);
							game.log(cards, '被移出了游戏');
						},
					},
				},
			},
			scqhKoihime_buqv: {
				forced: true,
				trigger: {
					player: 'damageEnd',
				},
				filter(trigger, player) {
					return true;
				},
				content() {
					var show = get.cards()[0];
					player.showCards(show, get.translation(event.name));
					var xs = player.getExpansions(event.name).filter((card) => {
						return card.number == show.number;
					});
					if (!xs.length) {
						let next = player.addToExpansion(show, 'gain2');
						next.gaintag.add(event.name);
						let recover = Math.max(1, player.maxHp - player.hp);
						player.recover();
					}
				},
				ai: {
					save: true,
					mingzhi: true,
					skillTagFilter(player, tag, target) {
						if (player != target) return false;
					},
				},
				marktext: '创',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
					onunmark(storage, player) {
						let name = 'scqhKoihime_buqv';
						let xs = player.getExpansions(name);
						if (xs.length) {
							game.log(xs, '进入了弃牌堆');
							player.lose(xs, ui.discardPile);
							player.$throw(xs, 1000);
						}
					},
				},
			},
			scqhKoihime_youzhu: {
				trigger: {
					global: 'useCardToTargeted',
				},
				filter(trigger, player) {
					if (trigger.target == player) return false;
					if (get.distance(player, trigger.target) > 1) return false;
					let list = ['sha', 'wanjian'];
					if (!list.includes(trigger.card.name)) return false;
					let xs =
						player.getExpansions('scqhKoihime_buqv').filter((card) => {
							return card.number == trigger.card.number;
						}) || [];
					if (xs.length) return false;
					return true;
				},
				check(trigger, player) {
					return get.attitude(player, trigger.target) >= 0;
				},
				logTarget: 'target',
				content() {
					var evt = trigger.parent;
					evt.triggeredTargets2.remove(trigger.target);
					evt.targets.remove(trigger.target);
					evt.targets.push(player);
				},
				ai: {
					threaten: 1.1,
				},
			},
		},
		translate: {
			scqhKoihime_wuwang: '诬枉',
			scqhKoihime_wuwang_info: '你的♥️️牌视为♠️️牌;其他角色使用【杀】指定目标后,其可以交给你一张黑色牌,令你代替其成为此牌的伤害来源.',
			scqhKoihime_xiahui: '黠慧',
			scqhKoihime_xiahui_info: '锁定技,你的黑色牌不占用手牌上限;其他角色获得你区域内的黑色牌后,其不能使用、打出或弃置这些牌,直到其体力值减少为止.',
			scqhKoihime_lianzhu: '连诛',
			scqhKoihime_lianzhu_info: '出牌阶段限一次,你可以交给其他角色一张牌,若此牌在你的手牌区内是黑色牌,除非其弃置两张牌,否则你摸两张牌.',
			scqhKoihime_choubing: '筹兵',
			scqhKoihime_choubing_info: ['使命技,蓄力技(０／３６).', '●一名角色对你使用的牌结算完毕后,你进行判定.', '●当你的判定牌生效后,你获得与之点数相等的蓄力值.', '●你可以将一张【方】当做无属性的任意基本牌使用或打出(每种基本牌每回合各限一次).', '●一名角色的结束阶段,你可以消耗３６点蓄力值,把弃牌堆里的总点数之和等于３６且未以此法得到过的若干张牌置于武将牌上,称为【方】.', '○成功:准备阶段,若你得到过至少３６张【方】,则你赢.', '○失败:进入濒死状态.'].join('</br>'),
			scqhKoihime_binghuo: '兵祸',
			scqhKoihime_binghuo_info: '一名角色的结束阶段,若你于本回合内使用或打出过基本牌,你可以进行判定.若判定结果为黑色,你可以对一名其他角色造成一点雷属性伤害.',
			scqhKoihime_guhuo: '鼓惑',
			scqhKoihime_guhuo_info: '一名角色的判定牌生效前,你可以亮出牌堆顶的一张牌代替之,若是黑色,则你获得被代替的牌.',
			scqhKoihime_ezhao: '恶兆',
			scqhKoihime_ezhao_info: ['出牌阶段限一次,你可以进行判定.当你的判定牌生效后,根据判定结果,你可以将判定牌当做符合下述规则的牌置入一名其他角色的判定区.', '●♣️️——【洪水】', '●♥️️——【火山】', '●♠️️——【闪电】'].join('</br>'),
			scqhKoihime_zhoufu: '咒缚',
			scqhKoihime_zhoufu_info: '当一名其他角色成为【杀】的目标后,你可以进行判定,若结果为黑色,则横置其武将牌.所有横置的其他角色不能使用或打出与其判定区里的牌花色相同的手牌.',
			scqhKoihime_shengge: '笙歌',
			scqhKoihime_shengge_info: '出牌阶段限一次,你可以让所有其他角色选择一项:①交给你一张【闪】.②让你摸一张牌.',
			scqhKoihime_tianlai: '天籁',
			scqhKoihime_tianlai_info: '当你使用或打出一张【杀】或名字中带有「闪／电／雷」字样的牌时,你可以赋予此牌雷属性.当你的判定牌生效前,你可以用牌堆顶或你的一张牌代替之.',
			scqhKoihime_dianmou: '电眸',
			scqhKoihime_dianmou_info: ['当你使用或打出的雷属性牌结算完毕后,你可以进行判定.当你的判定牌生效后,若判定结果是:', '♥️️:你可以让一名其他角色交给你一张牌.', '♠️️:你可以对一名其他角色造成一点雷属性伤害.'].join('</br>'),
			scqhKoihime_nishi: '溺食',
			scqhKoihime_nishi_info: '锁定技,当你使用仅以自己为目标的牌时,令此牌额外结算一次,你翻面.',
			scqhKoihime_mengbi: '蒙蔽',
			scqhKoihime_mengbi_info: '锁定技,当你受到伤害后,若你的武将牌背面朝上,你回复Ｘ点体力.若如此做,当你翻面后,你失去Ｘ点体力(Ｘ为本次受到的伤害值).',
			scqhKoihime_shuzheng: '疏政',
			scqhKoihime_shuzheng_info: '摸牌阶段结束,你可以翻面,你可以指定一名其他角色,令其获得一个额外回合.',
			scqhKoihime_manchong: '蛮宠',
			scqhKoihime_manchong_info: '当你受到伤害后,你可以摸一张牌,展示一张手牌,除非伤害来源弃置一张与此牌类型不同的手牌,否则你回复一点体力.',
			scqhKoihime_jiaoheng: '骄横',
			scqhKoihime_jiaoheng_info: '出牌阶段限一次,你可以弃置任意张牌并选择一名其他角色,该角色除非弃置等量的牌并流失一点体力,否则该角色翻面并摸等量的牌.',
			scqhKoihime_miyi: '蜜饴',
			scqhKoihime_miyi_info: ['出牌阶段限一次,你可以选择下述一项,弃置一张牌,让任意个角色执行该项,并且于本回合的结束阶段执行另一项.', '●回复１点体力', '○受到１点伤害'].join('</br>'),
			scqhKoihime_luanji: '乱击',
			scqhKoihime_luanji_info: '出牌阶段每种花色限一次,你可以将两张相同花色的牌当做【万箭齐发】使用.当一名角色因响应此牌而需要打出【闪】时,其所有手牌均视为【闪】.',
			scqhKoihime_tushe: '图射',
			scqhKoihime_tushe_info: '当你使用牌时,若你手中没有基本牌,你可以展示所有手牌,摸Ｘ张牌(Ｘ为此牌的目标数).',
			scqhKoihime_jidao: '极道',
			scqhKoihime_jidao_info: ['曹髦技(０／９９),出牌阶段各限一次,你可以根据怒气值将下述一项技能制作成装备牌置入装备区.当你造成或受到一点伤害后,你获得十点怒气值.', '</br>●≥0点——武器｜', '<font color = #b0d0e2>scqhKoihime_jidao_wushuang※</font>', '、<font color = #b0d0e2>scqhKoihime_jidao_wuchang※</font>', '、<font color = #b0d0e2>scqhKoihime_jidao_wuyan※</font>', '、<font color = #b0d0e2>scqhKoihime_jidao_wumou※</font>', '、<font color = #b0d0e2>scqhKoihime_jidao_wuqian※</font>', '</br>●≥20点——防具', '</br>●≥40点——防御马', '</br>●≥60点——进攻马', '</br>●≥80点——宝物', '</br>●≥99点——<font color = #b0d0e2>scqhKoihime_jidao_shenfen※</font>'].join(''),
			scqhKoihime_jidao_wushuang: '无双',
			scqhKoihime_jidao_wushuang_info: '锁定技,你使用的【杀】需要额外使用一张【闪】才能抵消;与你进行【决斗】的角色每次需要额外打出一张【杀】.',
			scqhKoihime_jidao_wuyan: '无言',
			scqhKoihime_jidao_wuyan_info: '锁定技,当你因锦囊牌而造成或受到伤害时(不包括决斗),防止之.',
			scqhKoihime_jidao_wumou: '无谋',
			scqhKoihime_jidao_wumou_info: '锁定技,当你使用普通锦囊牌时(不包括决斗),选择一项:●受到一点无来源伤害;●取消之,视为相同的目标使用一张【决斗】.',
			scqhKoihime_jidao_wuqian: '无前',
			scqhKoihime_jidao_wuqian_info: '锁定技,你计算与其他角色的距离减Ｘ(Ｘ为你于本回合内使用过的牌数);若你与所有角色的距离均为１,则你无视其他角色的防具.',
			scqhKoihime_jidao_wuchang: '无常',
			scqhKoihime_jidao_wuchang_info: '锁定技,当你获得其他角色的牌后,你变更势力与其相同.当你因执行【杀】或【决斗】的效果而对一名与你势力相同的角色造成伤害时,此伤害+1,变更势力为群.',
			scqhKoihime_jidao_shenfen: '神愤',
			scqhKoihime_jidao_shenfen_info: '出牌阶段限一次,你可以消耗９９点怒气值并回复所有已被废除的装备栏,接着所有其他角色依次弃置所有牌并受到一点伤害,开启【天下无双】光环效果(将牌堆、弃牌堆、场上、所有角色的点数为偶数的牌移出游戏).',
			scqhKoihime_baguan: '霸关',
			scqhKoihime_baguan_info: '其他角色的回合结束后,你可以废除一种装备栏,获得一个额外的回合.',
			scqhKoihime_liyu: '利驭',
			scqhKoihime_liyu_info: '当你使用【杀】或【决斗】指定一个目标时,你可以获得对方角色区域里的一张牌,若是装备牌,则令其选择另一名其他角色成为此牌的额外目标.若不是装备牌,则其摸一张牌.',
			scqhKoihime_yaowu: '耀武',
			scqhKoihime_yaowu_info: '锁定技,出牌阶段开始时,你明置手牌中数量最多的一种花色的所有牌.你以此法明置的牌均视为【杀】.',
			visible_scqhKoihime_yaowu: '耀武',
			scqhKoihime_yangwei: '扬威',
			scqhKoihime_yangwei_info: '出牌阶段限两次,你可以令一名其他角色视为对你使用一张【决斗】.若你赢,你可以弃置对方的一张手牌.',
			scqhKoihime_xizhan: '嬉战',
			scqhKoihime_xizhan_info: '每种花色每回合各限一次,你可以将一种花色的所有手牌按下列规则使用,且你不能以此法使用目标数大于Ｘ的牌(Ｘ为符合下列规则的手牌数量):<br/>①♠️️当【南蛮入侵】<br/>②♣️️当【铁索连环】<br/>③♥️️当【桃园结义】<br/>④♦️️当火【杀】',
			scqhKoihime_miaobian: '喵变',
			scqhKoihime_miaobian_info: '锁定技.①你视为拥有<蛮裔※>.②当你于一回合内使用或打出第Ｘ张牌时,你摸Ｘ张牌时(Ｘ为你的攻击范围).',
			scqhKoihime_rende: '仁德',
			scqhKoihime_rende_info: '你可以将两张牌或更多的牌交给一名其他角色,你可以视为使用或打出一张基本牌.',
			scqhKoihime_jishan: '积善',
			scqhKoihime_jishan_info: '当处于你攻击范围内的角色受到伤害时,你可以防止此伤害并与其各摸一张牌,你流失一点体力;当你造成伤害后,你可以令攻击范围内的另一名角色视为使用一张【桃】.',
			scqhKoihime_gudan: '孤胆',
			scqhKoihime_gudan_info: '你可以将任意一张基本牌当做另一种基本牌使用或打出,并且你可以立即获得对方的一张手牌.',
			scqhKoihime_longyou: '龙佑',
			scqhKoihime_longyou_info: '其他角色使用【杀】指定目标后,你可以打出一张【闪】并且令此【杀】对所有目标角色无效,此【杀】的使用者可以视为对你使用一张【决斗】.',
			scqhKoihime_zhuizhan: '追斩',
			scqhKoihime_zhuizhan_info: '当一名角色使用的【杀】结算结束后,你可以对此【杀】的其中一个目标角色使用一张不计次数限制且无距离限制的【杀】,若为红色,则此流程结束后,你摸一张牌.',
			scqhKoihime_qingwu: '倾武',
			scqhKoihime_qingwu_info: '你可以将红牌当【杀】、黑牌当【闪】使用或打出,并且令对方角色于此回合内不能使用或打出与此牌花色相同的手牌.',
			scqhKoihime_paoxiao: '咆哮',
			scqhKoihime_paoxiao_info: '出牌阶段,你可以弃置Ｘ张牌或流失Ｘ点体力,并且视为对一名其他角色使用一张不计入且没有次数限制的【杀】(Ｘ为你本回合内使用过本技能的次数+1).',
			scqhKoihime_lihu: '莉虎',
			scqhKoihime_lihu_info: '当你使用【杀】指定目标后,或成为【杀】的目标后,若使用者和目标的体力值或手牌数相等,你可以摸一张牌.',
			scqhKoihime_lueying: '掠影',
			scqhKoihime_lueying_info: '蓄力技(０／２),当你使用基本牌时,你获得１点蓄力值,每回合限两次.当你使用的基本牌结算结束后,你可以消耗２点蓄力值并摸一张牌,可以视为使用一张【过河拆桥】.',
			scqhKoihime_yingwu: '莺舞',
			scqhKoihime_yingwu_info: '蓄力技(０／２),当你使用锦囊牌时,你获得１点蓄力值,每回合限两次.当你使用的未造成伤害的锦囊牌结算结束后,你可以消耗２点蓄力值并摸一张牌,可以视为使用一张不计次数的【杀】.',
			scqhKoihime_shuangrui: '双锐',
			scqhKoihime_shuangrui_info: ['转换技,一回合限一次,你可以将Ｘ张牌当做【杀】或【闪】使用或打出(Ｘ为你计算与对方的距离).', '●阳:此杀只能对攻击范围外的角色使用.', '○阴:此杀只能对攻击范围内的角色使用.'].join('</br>'),
			scqhKoihime_manjuan: '漫卷',
			scqhKoihime_manjuan_info: '每种花色的牌每回合限一次,你可以使用或打出本回合进入弃牌堆且花色为Ｘ的牌(Ｘ为你手中没有的花色).',
			scqhKoihime_yangming: '养名',
			scqhKoihime_yangming_info: '出牌阶段限一次.你可以与一名角色拼点,若其:没赢,你可以与其重复此流程;赢,其摸Ｘ张牌,你回复１点体力(Ｘ为其于此期间内没赢的次数).',
			scqhKoihime_zhanji: '展骥',
			scqhKoihime_zhanji_info: '锁定技,你的摸牌数+1.',
			scqhKoihime_kanpo: '看破',
			scqhKoihime_kanpo_info: '你可以将一张牌当做【无懈可击】使用.',
			scqhKoihime_miaoji: '妙计',
			scqhKoihime_miaoji_info: '锁定技,转换技,当你使用锦囊牌时,阳:你摸一张牌;阴:此牌不可被【无懈可击】响应.',
			scqhKoihime_cangzhuo: '藏拙',
			scqhKoihime_cangzhuo_info: '锁定技,一名角色的回合内,若你未使用过锦囊牌,则你的锦囊牌不计入手牌上限,且你于本回合的结束阶段摸一张牌.',
			scqhKoihime_kongcheng: '空城',
			scqhKoihime_kongcheng_info: '锁定技,当你成为【杀】或【决斗】的目标时,若你没有手牌,则无效之.',
			scqhKoihime_bugua: '卜卦',
			scqhKoihime_bugua_info: '游戏开始时,你卜算７,将牌堆顶的７张牌置于你的武将牌上,称为<星>.准备阶段,你可以卜算Ｘ(Ｘ为你的<星>数).',
			scqhKoihime_fuchou: '负仇',
			scqhKoihime_fuchou_info: '当你受到其他角色的伤害后,你计算与其的距离视为１直到你的回合结束,并且当前回合结束时,你可以将一张牌当做无距离限制的【杀】对其使用.',
			scqhKoihime_tieqi: '铁骑',
			scqhKoihime_tieqi_info: '当你使用【杀】指定一个目标后,你可以令该角色的非锁定技于本回合内失效并声明一种花色,除非该角色交给你一张与本次声明的花色相同的牌,否则不能响应此【杀】.',
			scqhKoihime_qianxi: '潜袭',
			scqhKoihime_qianxi_info: '出牌阶段限一次,你可以摸一张牌并选择一名其他角色,其弃置一张牌,接着你可以弃置一张牌.该角色于本回合内不能使用或打出与本次弃置牌的颜色相同的手牌.',
			scqhKoihime_jijin: '疾进',
			scqhKoihime_jijin_info: '当你使用的牌结算结束后,你增加１点攻击范围,你可以对一名在此法发动期间进入你的攻击范围的角色使用一张无次数限制的【杀】.',
			scqhKoihime_jingbei: '精备',
			scqhKoihime_jingbei_info: '出牌阶段,若你的攻击范围内包含所有其他角色,你可以摸Ｘ张牌(Ｘ为你的攻击范围),并且将攻击范围减少至０.',
			scqhKoihime_yingzi: '英姿',
			scqhKoihime_yingzi_info: '锁定技,当你于摸牌阶段从牌堆顶摸牌时,你多摸一张牌.你的手牌上限等于体力上限.',
			scqhKoihime_liangfen: '两分',
			scqhKoihime_liangfen_info: '当你摸牌后,明置摸到的牌;当你失去以此法明置的从牌堆顶／底摸到的所有牌后,你可以从牌堆底／顶摸一张牌.',
			scqhKoihime_lingren: '凌人',
			scqhKoihime_lingren_info: '当你使用牌指定其他角色为目标后,你可以猜测其中一个目标的手牌是否包含装备牌、基本牌或锦囊牌.若如此做,其展示所有手牌,并将你猜对的项目数记作Ｘ.若Ｘ≥１,你可以将其至多Ｘ张牌扣置于其武将牌上,直到当前回合结束.若Ｘ≥２,此牌对其造成的伤害加１.若Ｘ≥３,你可以获得其武将牌上以此法扣置的一张牌.',
			scqhKoihime_fenjin: '焚烬',
			scqhKoihime_fenjin_info: '当你对一名角色造成伤害后,你可以交给其一张红色牌,你可以对其距离为１的另一名角色造成１点伤害.',
			scqhKoihime_hupo: '琥珀',
			scqhKoihime_hupo_info: '你的体力值变化后,你可以让一名角色摸Ｘ弃一或摸一弃Ｘ(Ｘ为你已损失的体力值).',
			scqhKoihime_yingsa: '英飒',
			scqhKoihime_yingsa_info: '锁定技,攻击范围内含有你的角色对你造成伤害后,其需要交给你一张手牌,否则你回复一点体力.',
			scqhKoihime_pojun: '破军',
			scqhKoihime_pojun_info: '当你使用【杀】指定目标时,或成为【杀】的目标时,你可以将对方的至多Ｘ张牌置于其武将牌上(Ｘ为其体力值),直到回合结束.若其手牌数和装备数均不大(小)于你,则此【杀】对其(你)造成的伤害+1.',
			scqhKoihime_jiang: '激昂',
			scqhKoihime_jiang_info: ['<font color = #70DB93>你对其他角色</font>', '／', '<font color = #FF7F00>其他角色对你</font>', '使用【决斗】或红色【杀】时,你可以摸一张牌,接着可以与其拼点.若你赢,', '<font color = #70DB93>其不能响应</font>', '／', '<font color = #FF7F00>对你无效</font>', '.若你没赢,', '<font color = #70DB93>对其无效</font>', '／', '<font color = #FF7F00>你不能响应</font>', '.'].join(''),
			scqhKoihime_yingyang: '鹰扬',
			scqhKoihime_yingyang_info: '当你的拼点牌亮出后,你可以令一张拼点牌的点数±3(最大为K,最小为1).',
			scqhKoihime_zhiba: '制霸',
			scqhKoihime_zhiba_info: '你对其他角色、其他角色对你使用名字不为【决斗】的普通锦囊牌时,你可以无效之,此牌结算结束后,原使用者视为对因此法而无效的目标角色使用一张【决斗】.',
			scqhKoihime_zhiheng: '制衡',
			scqhKoihime_zhiheng_info: '出牌阶段,你可以弃置任意张牌,摸等量的牌;若你弃置了任意区域内的所有牌,则多摸一张牌;当前回合内,你每发动一次【制衡】,则少摸一张牌.',
			scqhKoihime_bingxin: '冰心',
			scqhKoihime_bingxin_info: '当你需要使用或打出一张本回合未以此法用过的基本牌时,若手牌的数量等于体力值且颜色均相同,你可以摸一张牌并且视为使用或打出之.',
			scqhKoihime_chengye: '承业',
			scqhKoihime_chengye_info: '主公技,其他吴势力角色死亡后,你可以令其选择一项:●将所有牌交给你;●令你摸两张牌;●令你回复一点体力.',
			scqhKoihime_jieyi: '结谊',
			scqhKoihime_jieyi_info: '出牌阶段限一次,你可以交给其他角色一张牌,你与其各回复一点体力或摸一张牌.若为装备牌,该角色可以使用之.',
			scqhKoihime_xiaoji: '枭姬',
			scqhKoihime_xiaoji_info: '当你失去装备区里的一张牌后,你可以视为使用一张【无中生有】或【过河拆桥】.',
			scqhKoihime_banhu: '伴虎',
			scqhKoihime_banhu_info: '其他角色的出牌阶段限一次,其可以将一张装备牌置入你的装备区(可以顶替装备),直到其的下个出牌阶段,你与其计算至彼此的距离均为１.',
			scqhKoihime_qinxue: '勤学',
			scqhKoihime_qinxue_info: '转换技,出牌阶段,阳:你可以弃置一张基本牌,获得弃牌堆中的一张锦囊牌.阴:你可以弃置一张锦囊牌,获得弃牌堆中的一张【杀】.(每张锦囊牌限弃置或获得一次)',
			scqhKoihime_botu: '博图',
			scqhKoihime_botu_info: '一名角色的回合结束后,若你于本回合的出牌阶段内使用或打出过四种花色的牌,则你可以获得一个额外回合.',
			scqhKoihime_limou: '戾眸',
			scqhKoihime_limou_info: '锁定技,你的【杀】只能指定距离１以内的角色为目标.',
			scqhKoihime_buqv: '不屈',
			scqhKoihime_buqv_info: '锁定技,当你受到伤害后,你亮出牌堆顶的一张牌,若你没有与此牌点数相同的<创>,则置于你的武将牌上并回复一点体力.',
			scqhKoihime_youzhu: '佑主',
			scqhKoihime_youzhu_info: '当你距离１以内的一名其他角色成为【杀】或【万箭齐发】的目标后,若你没有与此牌点数相同的<创>,你可以代替其成为此牌的目标.',
			scqhKoihime_xieling: '挟令',
			scqhKoihime_xieling_info: '一回合限一次,若你的手牌数是全场唯一最多,你可以将一张牌当做任意一种基本牌或锦囊牌使用或打出.',
			scqhKoihime_jiaozi: '骄恣',
			scqhKoihime_shanyu: '擅驭',
			scqhKoihime_shanyu_info: ['当你造成或受到伤害后,你可以使用下述一个技能(每回合各限一次).', '</br>', '<font color = #b0d0e2>●scqhKoihime_shanyu_guixin※</font>', '、<font color = #b0d0e2>●scqhKoihime_shanyu_zhiheng※</font>', '、<font color = #b0d0e2>●scqhKoihime_shanyu_rende※</font>'].join(''),
			scqhKoihime_shanyu_guixin: '归心',
			scqhKoihime_shanyu_guixin_info: '你可以获得每名其他角色区域里的一张牌.若你的手牌数是全场唯一最多,则你翻面.',
			scqhKoihime_shanyu_zhiheng: '制衡',
			scqhKoihime_shanyu_zhiheng_info: '你可以弃置任意张牌,摸等量的牌.若你以此法弃置了手牌区或装备区内的所有牌,则多摸一张牌.',
			scqhKoihime_shanyu_rende: '仁德',
			scqhKoihime_shanyu_rende_info: '你可以将任意张牌交给一名其他角色.若你以此法给出的牌于本回合内首次达到两张,你可以视为使用一张基本牌.',
			scqhKoihime_shanyu_fangzhu: '放逐',
			scqhKoihime_shanyu_fangzhu_info: '你可以让一名其他角色摸Ｘ张牌(Ｘ为你已损失的体力值),该角色翻面.',
			scqhKoihime_shanjia: '缮甲',
			scqhKoihime_shanjia_info: ['出牌阶段限一次,你可以摸３弃３(亦可先弃后摸,每弃一张装备牌,则多摸一张牌).若你未弃置:', '●基本牌:视为使用一张【桃】.', '●锦囊牌:视为使用一张不计次数的【酒】.', '●装备牌:可以视为使用一张不计次数的【杀】.'].join('</br>'),
			scqhKoihime_yanjun: '寅君',
			scqhKoihime_yanjun_info: '当你对唯一目标使用的非虚拟非转化的【杀】或普通锦囊牌结算结束后,你可以流失一点体力,视为对该角色使用一张相同名字的牌.若造成了伤害,则此技能于本回合内失效.',
			scqhKoihime_qvhu: '驱虎',
			scqhKoihime_qvhu_info: '出牌阶段限一次,你可以与一名角色拼点.若你赢,你可以令该角色对其攻击范围内另一名由你指定的角色造成一点伤害.若你没赢,该角色对你造成一点伤害.',
			scqhKoihime_jieming: '节命',
			scqhKoihime_jieming_info: '遗言技,当你受到伤害后,你可以令一名角色摸Ｘ张牌,其将手牌弃至Ｘ张(Ｘ为其体力上限且至多为５).',
			scqhKoihime_xianfu: '先辅',
			scqhKoihime_xianfu_info: '限定技,每轮开始时,你可以选择一名其他角色;当其受到伤害后,你受到等量的无来源伤害;当其回复体力后,你回复等量的体力.',
			scqhKoihime_shensu: '神速',
			scqhKoihime_shensu_info: ['你可以跳过任意阶段.每当你跳过两个阶段后,你可以视为使用一张没有距离限制的【杀】.', '●跳过判定,需弃置一张手牌', '●跳过弃牌,需弃置一张装备牌'].join('</br>'),
			scqhKoihime_qingxi: '轻袭',
			scqhKoihime_qingxi_info: '一名角色的回合结束后,若你的武将牌正面朝上,你可以废除一个装备栏,进行一个额外的回合并翻面.',
			scqhKoihime_kangkai: '慷忾',
			scqhKoihime_kangkai_info: '与你距离为１的角色成为【杀】的目标后,你可以摸一张牌.若如此做,你须交给其一张牌并展示之.若是装备牌,该角色可以使用此牌,将此【杀】转移给你.',
			scqhKoihime_jvzi: '拒资',
			scqhKoihime_jvzi_info: '当你即将把牌交给其他角色时,你可以防止之,把武将牌翻面或流失一点体力.',
			scqhKoihime_xiaozhang: '销账',
			scqhKoihime_xiaozhang_info: '一名角色不因使用而失去装备牌后,你可以摸一张牌,此回合的结束阶段,你须展示Ｘ张牌并交给<font color = #b0d0e2>执行当前回合的角色</font>(Ｘ为<font color = #b0d0e2>其</font>于此回合内不因使用而失去过的装备数).',
			scqhKoihime_ganglie: '刚烈',
			scqhKoihime_ganglie_info: '当你受到伤害后,你可以进行判定.若结果是:红色,对伤害来源造成一点伤害;黑色,弃置伤害来源的一张牌;♥️️,把造成此次伤害且处于弃牌堆中的牌当做【桃】使用.',
			scqhKoihime_xuehen: '雪恨',
			scqhKoihime_xuehen_info: '出牌阶段限一次,你可以与一名角色拼点.若你赢,你视为对其使用一张【杀】.若你没赢,其对你造成一点伤害,且你下次对其造成的伤害加一.',
			scqhKoihime_tiandu: '天妒',
			scqhKoihime_tiandu_info: '锁定技,准备阶段,你进行【闪电】判定;当你的判定牌生效后,你获得此牌.',
			scqhKoihime_guicai: '鬼才',
			scqhKoihime_guicai_info: '一名角色的判定牌生效前,你可以用一张牌代替之.',
			scqhKoihime_chouce: '筹策',
			scqhKoihime_chouce_info: '当你受到伤害后,你可以进行判定,结果为:①黑色,你可以弃置一名角色区域里的一张牌;②红色,你摸两张牌,你可以将至多两张牌分配给其他角色.',
			scqhKoihime_lifeng: '砺锋',
			scqhKoihime_lifeng_info: '你可以将基本牌当做【无懈可击】、锦囊牌当做普通【杀】使用或打出.此牌结算结束后,你可以视为使用一张与此牌的实体牌的名字相同的基本牌或普通锦囊牌(无次数限制).',
			scqhKoihime_sujun: '肃军',
			scqhKoihime_sujun_info: '当你使用或打出一张牌时,若你手中的基本牌和非基本牌的数量相同,你可以展示所有手牌并摸一张牌.',
			scqhKoihime_zhenjun: '镇军',
			scqhKoihime_zhenjun_info: '出牌阶段限一次,你可以将一张牌交给一名其他角色,令其保留一张手牌和一张装备区内的牌并弃置其余的牌.',
			scqhKoihime_yizhong: '毅重',
			scqhKoihime_yizhong_info: '锁定技,黑色【杀】对你无效;红色【杀】需要额外使用一张【闪】才能抵消.',
			scqhKoihime_meizhuang: '美妆',
			scqhKoihime_meizhuang_info: '结束阶段,你可以移动场上的一张牌.',
			scqhKoihime_yiyi: '异议',
			scqhKoihime_yiyi_info: '出牌阶段(限一次)或当你受到伤害后,你可以扣置一张牌于武将牌上.其他角色于你的回合外使用牌时,你可以移去一张以此法扣置的同类型牌,无效之.',
			scqhKoihime_danshou: '胆守',
			scqhKoihime_danshou_info: '其他角色的结束阶段,若Ｘ＝０,你可以摸一张牌;≠０,你可以弃置Ｘ张牌并对该角色造成一点伤害(Ｘ为你于本回合内成为该角色使用牌的目标次数).',
			scqhKoihime_zhiyan: '治严',
			scqhKoihime_zhiyan_info: '出牌阶段每项各限一次,●若你的手牌数大于体力值,你可以将Ｘ张牌交给一名其他角色(Ｘ为手牌数与体力值之差);●你可以将手牌摸至体力上限并且获得【寡言】直到你的下回合开始.',
			scqhKoihime_shipo: '势迫',
			scqhKoihime_shipo_info: '结束阶段,你可以与一名其他角色进行谋弈:●围城断粮:将牌堆顶的一张牌当做【兵粮寸断】对其使用.●擂鼓进军:你视为对其使用一张【决斗】.',
			scqhKoihime_guayan: '寡言',
			scqhKoihime_guayan_info: '锁定技,你使用的普通锦囊牌对其他角色无效;其他角色使用的普通锦囊牌对你无效(除了【决斗】).',
			scqhKoihime_sijian: '死谏',
			scqhKoihime_sijian_info: '出牌阶段限一次,你可以摸两张牌,你可以将两张牌交给一名其他角色.若如此做,直到其出牌阶段结束前,若其未使用过其中任意一张牌,则视为对你使用一张【铁索连环】.',
			scqhKoihime_luoyu: '落狱',
			scqhKoihime_luoyu_info: '锁定技,当你成为【铁索连环】的目标时,令【铁索连环】的使用者成为【铁索连环】的额外目标;若你处于连环状态,则你不能成为黑色锦囊牌的目标.',
			scqhKoihime_suishi: '随势',
			scqhKoihime_suishi_info: '锁定技,当其他角色濒死时,若伤害来源处于连环状态,则你摸一张牌;当其他角色死亡时,若其在死亡前处于连环状态,则你流失一点体力.',
			scqhKoihime_tuntian: '屯田',
			scqhKoihime_tuntian_info: '当你于回合外失去牌后,或不因使用而失去【杀】后,你可以将牌堆顶的一张牌置于武将牌上,称为「田」.你的手牌上限加Ｘ(Ｘ为田数).',
			scqhKoihime_ziliang: '资粮',
			scqhKoihime_ziliang_info: '出牌阶段限一次,或当你受到伤害后,你可以将一张「田」置入弃牌堆,令一名角色摸Ｘ张牌,或视为对至多Ｘ名角色使用一张【五谷丰登】(Ｘ为田数).',
			scqhKoihime_zhendu: '鸩毒',
			scqhKoihime_zhendu_info: '一名角色的出牌阶段开始时,你可以弃置一张牌,令其视为使用一张【酒】.若目标不是你,则对其造成一点伤害,若其进入了濒死状态,则其于本回合内不能成为【桃】的目标.',
			scqhKoihime_qiluan: '戚乱',
			scqhKoihime_qiluan_info: '一名角色的结束阶段,若你于此回合内造成过伤害,你可以摸一张牌.若你于此回合内击杀过角色,则额外摸一张牌.若该角色于此回合内造成过伤害,则额外摸一张牌.',
			scqhKoihime_qianya: '谦雅',
			scqhKoihime_qianya_info: '当你成为基本牌或锦囊牌的目标后,你可以将任意张牌交给一名其他角色,若你交出了装备区或手牌区里的所有牌,你可以给此牌增加或减少一个目标.',
			scqhKoihime_shidao: '侍道',
			scqhKoihime_shidao_info: '出牌阶段限一次,你可以与一名角色拼点.若你赢,你可以视为使用一张任意普通锦囊牌.若你没赢,你于本轮内可以代替其在响应牌时使用或打出【闪】和【杀】.',
			scqhKoihime_fengshi: '锋势',
			scqhKoihime_fengshi_info: '当你使用基本牌或普通锦囊牌指定唯一目标后,若目标的手牌数小于你,你可以弃置一张牌,弃置其一张牌,此牌对其造成的伤害+1.',
			scqhKoihime_yongjue: '勇决',
			scqhKoihime_yongjue_info: '当与你势力相同的一名角色于一回合内使用的第一张牌结算结束后,若此牌是【杀】,你可以令其获得此【杀】的实体牌.',
			scqhKoihime_jvjia: '巨贾',
			scqhKoihime_jvjia_info: '锁定技,你的攻击范围、手牌上限、初始手牌数加Ｘ(Ｘ为你的体力值且至多为５).',
			scqhKoihime_ziyuan: '资援',
			scqhKoihime_ziyuan_info: '出牌阶段限一次,你可以将任意张牌交给一名其他角色,若你交出的牌数为:奇数,你摸一张牌;偶数,你回复一点体力.',
			scqhKoihime_xiaoguo: '骁果',
			scqhKoihime_xiaoguo_info: '其他角色的准备阶段,你可以弃置任意张牌,除非该角色弃置相同数量且类型与之均不同的牌,否则你摸等量的牌并对其造成一点伤害.',
			scqhKoihime_xiandeng: '先登',
			scqhKoihime_xiandeng_info: '锁定技,每轮开始时,你执行一个额外的出牌阶段并从弃牌堆顶拿一张【杀】.你于出牌阶段内使用的第一张【杀】不计入次数且无距离限制.',
			scqhKoihime_yaodou: '邀斗',
			scqhKoihime_yaodou_info: '出牌阶段限一次,你可以选择一名其他角色,与其拼点.若你赢,则获得弃牌堆顶的一张【杀】.无论结果,赢的角色视为对没赢的角色使用一张【决斗】(若你无法与该角色拼点,则你视作赢的角色).',
			scqhKoihime_hanzhan: '酣战',
			scqhKoihime_hanzhan_info: '当你参与拼点时,你可以令对方使用随机的手牌拼点,你可以使用任意一张牌拼点.若你赢(仅限单人拼点),你可以立即获得对方区域里的一张牌.',
			scqhKoihime_zhuyan: '驻颜',
			scqhKoihime_zhuyan_info: '转换技,阳:当你使用或打出的牌结算结束后,你可以让一名与你处于同一队列的角色摸两张牌;阴:当你成为基本牌或普通锦囊牌的目标时,你可以弃置一张牌.',
			scqhKoihime_yaoyi: '邀弈',
			scqhKoihime_yaoyi_info: '锁定技.①所有角色视为拥有【手谈】且不能使用牌指定阴阳状态与自己相同的其余角色为目标.②一名角色使用【杀】指定被其围攻的角色为目标时,该目标角色需弃置一张手牌.',
			scqhKoihime_yaoyi_shoutan: '手谈',
			scqhKoihime_yaoyi_shoutan_info: '转换技,出牌阶段限一次,阳:你可以弃置一张黑色牌;阴:你可以弃置一张非黑色牌.若如此做,你可以视为对一名被你围攻的角色使用一张【杀】(若你拥有【邀弈】,此【杀】无距离和次数限制且可以选择未被围攻的角色).',
			scqhKoihime_suizheng: '随征',
			scqhKoihime_suizheng_info: ['出牌阶段限一次,你可以选择一名角色,直到你用此技能选择另一名角色前,你与该角色对位于你们的攻击范围内的角色使用牌无距离限制,并且你获得下述效果:', '⒈该角色造成伤害后,你可以摸一张牌.', '⒉该角色受到伤害后,你可以弃置两张牌,令其回复一点体力.'].join('</br>'),
			scqhKoihime_guanhuo: '观火',
			scqhKoihime_guanhuo_info: '出牌阶段,你可以视为使用一张【火攻】.当一名角色使用【火攻】结算完毕后,若你未因这张牌的效果造成或受到伤害,则你于本回合内不能使用【火攻】,你可以与此牌的所有目标同时拼点,并对赢的其他角色各造成一点伤害.',
			scqhKoihime_jvxia: '居下',
			scqhKoihime_jvxia_info: '锁定技,当你的拼点牌亮出后,若你的体力值、手牌数之中有一项小于对方,则此牌的点数视为Ａ.',
			scqhKoihime_chaozhen: '朝镇',
			scqhKoihime_chaozhen_info: '每回合限一次,当你进入濒死状态时,你可以从场上或牌堆中获得一张点数为Ａ的牌,回复一点体力.',
			scqhKoihime_zhenlue: '缜略',
			scqhKoihime_zhenlue_info: '锁定技,你使用的普通锦囊牌不能被【无懈可击】响应;你不能成为黑色锦囊牌的目标;当你于回合内受到伤害时,防止之.',
			scqhKoihime_jianshu: '间书',
			scqhKoihime_jianshu_info: '出牌阶段限一次,你可以将一张牌交给一名其他角色,并且令其与另一名其他角色拼点.赢的角色弃置一张牌.没赢的角色流失一点体力.',
			scqhKoihime_luanwu: '乱武',
			scqhKoihime_luanwu_info: '限定技,出牌阶段,你可以令所有其他角色依次选择一条可以执行的选项:⒈对距离最近或之一的角色使用一张【杀】;⒉流失一点体力.所有角色选择完毕后,你可以视为使用一张无距离限制的【杀】.',
			scqhKoihime_congzhu: '从主',
			scqhKoihime_congzhu_info: '锁定技,若你的已损失体力值不小于１／２／３,则你视为拥有下述技能的效果:【英魂】／【激昂】／【制衡】.',
			scqhKoihime_kurou: '苦肉',
			scqhKoihime_kurou_info: '出牌阶段,你可以流失一点体力.若如此做,弃牌阶段,你每弃置两张手牌,则获得一点护甲.',
			scqhKoihime_zhaxiang: '诈降',
			scqhKoihime_zhaxiang_info: '锁定技,你的体力值因流血而变化后,若你于本回合内未在当前血量使用过此法,则立即摸Ｘ张牌(Ｘ为你的已损失体力值),你于本回合内可以额外使用一张【杀】且红色【杀】须额外使用一张【闪】才能抵消.',
			scqhKoihime_chiyan: '鸱咽',
			scqhKoihime_chiyan_info: '当你使用基本牌或锦囊牌指定一个目标后,你可以将其一张牌扣置于你的武将牌上,你于当前回合结束时获得这些牌.若其手牌数与装备数均不大于你,则此牌对其造成的伤害+1.',
			scqhKoihime_huangkong: '惶恐',
			scqhKoihime_huangkong_info: '锁定技,当你成为牌的目标后,若你没有手牌,则你摸两张牌.',
			scqhKoihime_yangzhong: '殃众',
			scqhKoihime_yangzhong_info: '出牌阶段限一次,你可以横置武将牌.当你横置武将牌后,你可以视为对其他角色使用一张【铁索连环】.',
			scqhKoihime_shouxi: '守玺',
			scqhKoihime_shouxi_info: '当你成为其他角色使用锦囊牌的目标后,你可以声明一种未以此法声明过的基本牌或锦囊牌,其可以弃置一张你声明的牌.若其这般做,则你弃置一张牌,否则此牌对你无效.',
			scqhKoihime_tianming: '天命',
			scqhKoihime_tianming_info: '当你成为基本牌的目标后,你可以弃置两张牌(不足则全弃,无牌则不弃)并摸两张牌,体力值是全场唯一最大的角色也可以如此做.',
			scqhKoihime_mizhao: '密诏',
			scqhKoihime_mizhao_info: '出牌阶段限一次,你可以将所有手牌交给一名其他角色,你可以令该角色与你选择的另一名其他角色拼点,拼点赢的角色视为对拼点没赢的角色使用一张【杀】.',
			scqhKoihime_yicong: '义从',
			scqhKoihime_yicong_info: '锁定技,你计算与其他角色的距离时减你的体力数;其他角色计算与你距离时加你的已损失体力数.',
			scqhKoihime_jiaomeng: '骄猛',
			scqhKoihime_jiaomeng_info: '当你使用【杀】或黑色锦囊牌指定其他角色为目标后,你可以弃置其一张牌,若是基本牌,则你摸一张牌;装备牌,则此牌不可被其响应;锦囊牌,则此牌对其造成的伤害+1.',
			scqhKoihime_jvzhan: '拒战',
			scqhKoihime_jvzhan_info: '当你成为【杀】的目标后,或使用【杀】指定唯一目标后,你可以选择一项:⒈与对方各摸一张牌;⒉获得对方的一张牌.若如此做,使用者于本回合内不能再对本次目标使用牌.',
			scqhKoihime_jiuhao: '酒豪',
			scqhKoihime_jiuhao_info: '转换技,每回合限一次,阴:你可以横置武将牌;阳:你可以重置武将牌.若如此做,你视为使用了一张【酒】.当你受到非属性伤害后,你可以横置或重置武将牌.',
			scqhKoihime_qiangxi: '强袭',
			scqhKoihime_qiangxi_info: '出牌阶段限一次,你可以对攻击范围内的一名角色造成一点伤害并选择一项:⒈弃置一张装备牌;⒉流失一点体力;背水!额外造成一点伤害.',
			scqhKoihime_ninge: '狞恶',
			scqhKoihime_ninge_info: '锁定技,你即将流失的体力均视为受到伤害(伤害来源是执行当前回合的角色).当你受到伤害后,你将手牌摸至Ｘ张(Ｘ为伤害来源的体力值).',
			scqhKoihime_pinchun: '品醇',
			scqhKoihime_pinchun_info: '一回合限一次,出牌阶段或当你处于濒死状态时,你可以视为使用一张【推心置腹】.当你获得其他角色区域里的牌后,若你的手牌数大于该角色,便视为使用一张无次数限制的【酒】,否则令该角色弃置Ｘ张手牌(Ｘ为你们的手牌数之差).',
			scqhKoihime_yuancong: '元从',
			scqhKoihime_yuancong_info: '其他角色的出牌阶段结束时,若其未于此阶段内造成过伤害,你可以令其交给你一张牌,你可以使用一张牌.',
			scqhKoihime_zhaobing: '诏兵',
			scqhKoihime_zhaobing_info: '结束阶段,你可以展示所有手牌,让至多Ｘ名其他角色依次选择一项(Ｘ为手牌数且至少为一):⒈交给你一张【杀】;⒉流失一点体力.若你以此法获得了牌,则你的所有与之花色相同的手牌均视为【杀】,直到本轮结束.',
			scqhKoihime_mouzhu: '谋诛',
			scqhKoihime_mouzhu_info: '出牌阶段限一次,你可以弃置任意张【杀】,让一名其他角色选择一项:⒈弃置等量的牌并流失一点体力;⒉让你摸等量的牌并回复一点体力.',
			scqhKoihime_yanhuo: '延祸',
			scqhKoihime_yanhuo_info: '锁定技,若你已死亡,则所有角色使用【杀】造成的伤害+1.',
			scqhKoihime_nidang: '逆党',
			scqhKoihime_nidang_info: '回合开始时,你可以逆转本回合的阶段执行顺序.',
			scqhKoihime_zuishu: '醉书',
			scqhKoihime_zuishu_info: '锁定技,当你失去最后的手牌时,你立即摸一张牌.',
			scqhKoihime_dushi: '度势',
			scqhKoihime_dushi_info: '出牌阶段限四次,若你没有可以使用的手牌,你可以将一张红色牌当做【以逸待劳】使用.',
			scqhKoihime_qianxun: '谦逊',
			scqhKoihime_qianxun_info: '一回合限一次,当一张锦囊牌对你生效时,你可以将所有手牌扣置于武将上,此回合结束时,你将这些牌交给一名角色.',
			scqhKoihime_zhichi: '智迟',
			scqhKoihime_zhichi_info: '锁定技,你的体力值于回合外变化后,所有【杀】或普通锦囊牌对你无效,直到回合结束.',
			scqhKoihime_mingce: '明策',
			scqhKoihime_mingce_info: '出牌阶段限一次,你可以交给其他角色一张牌,其选择一项:⒈视为对你选择的另一名其他角色使用一张【杀】;⒉你与其各摸一张牌.',
			scqhKoihime_feita: '飞踏',
			scqhKoihime_feita_info: '准备阶段,你可以视为使用一张无距离限制的【杀】,若对其他角色造成伤害,你可以获得其一张牌,令此伤害-1.',
			scqhKoihime_tuxi: '突袭',
			scqhKoihime_tuxi_info: '摸牌后,你可以将至多Ｘ张牌置入弃牌堆(Ｘ为摸牌数),获得等量的其他角色的各一张手牌.',
			scqhKoihime_dengfeng: '登峰',
			scqhKoihime_dengfeng_info: '准备阶段,你可以选择一项:●将一名角色装备区里的至多两张牌置于牌堆顶,其摸等量的牌;●将弃牌堆里的一张【杀】置于牌堆顶,你摸一张牌;●背水:流失一点体力.',
			scqhKoihime_zhengbing: '整兵',
			scqhKoihime_zhengbing_info: '出牌阶段限一次,你可以重铸任意张相同类型的牌.',
			scqhKoihime_kaizeng: '慨赠',
			scqhKoihime_kaizeng_info: '摸牌阶段,你多摸一张牌.其他角色的出牌阶段限一次,该角色可以声明一种牌的类型并且让你交给其任意张牌,若这些牌中包含其声明的类型,则下个摸牌阶段,你多摸一张牌.',
			scqhKoihime_dimeng: '缔盟',
			scqhKoihime_dimeng_info: '出牌阶段限一次,你可以弃置Ｘ张牌,交换两名角色的手牌(Ｘ为这两名角色的手牌数之差,若其中一名角色是你,则另一名角色不能是手牌数大于你的角色).',
			scqhKoihime_zhenggu: '诤骨',
			scqhKoihime_zhenggu_info: '锁定技,其他角色不在摸牌阶段摸牌时,令其弃置一张牌.',
			scqhKoihime_lijian: '力谏',
			scqhKoihime_lijian_info: '其他角色的弃牌阶段结束时,你可以令该角色获得本阶段内进入弃牌堆里的任意张牌,你获得其余的牌.若其得到的牌数大于你,你可以对其造成1点伤害.',
			scqhKoihime_wangxi: '忘隙',
			scqhKoihime_wangxi_info: '你对其他角色(或其他角色对你)造成１点伤害后,你可以摸两张牌,交给其一张牌,或令其回复一点体力.',
			scqhKoihime_xunxun: '恂恂',
			scqhKoihime_xunxun_info: '摸牌前,你可以观看牌堆顶的四张牌,将其中的两张牌置于牌堆顶,并将其余的牌以任意顺序置于牌堆底.',
			scqhKoihime_kuanggu: '狂骨',
			scqhKoihime_kuanggu_info: '当你对距离在１以内的角色造成１点伤害后,你可以回复一点体力或摸一张牌.',
			scqhKoihime_aosi: '骜肆',
			scqhKoihime_aosi_info: '当你使用【杀】或普通锦囊牌时,你可以弃置一名其他角色的一张牌;若如此做,此牌结算完毕后,若你未因执行此牌的效果而造成过伤害,则你流失一点体力.',
		},
	};
	for (const i in list.skill) {
		const info = list.skill[i];
		const audiopriority = function (infox) {
			if (typeof infox._priority !== 'number') {
				infox._priority = Math.random();
			}
			var number = 2;
			if (typeof infox.audio === 'number') number = infox.audio;
			if (!infox.audio || typeof infox.audio === 'number') {
				infox.audio = 'ext:' + lib.scqhExtension + '/audio:' + number;
			}
		};
		audiopriority(info);
		if (info.subSkill) {
			for (const j in info.subSkill) {
				const infoj = info.subSkill[j];
				audiopriority(infoj);
			}
		}
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info'], list.translate[i + '_append']);
	}
	for (const i in list.translate) {
		lib.translate[i] = list.translate[i];
	}
};

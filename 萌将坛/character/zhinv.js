'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqhZhinv_qinzheng: {
				audio: 'qinzheng',
				forced: true,
				trigger: {
					player: ['useCard', 'respond'],
				},
				filter(trigger, player) {
					const num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
					return num % 3 === 0 || num % 5 === 0 || num % 8 === 0;
				},
				check() {
					return 1;
				},
				content() {
					'step 0';
					var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
					var list = [];
					if (num % 3 === 0) list.add('basic');
					if (num % 5 === 0) list.add('equip');
					if (num % 8 === 0) list.add('trick');
					event.list = list;
					('step 1');
					var storage = player.storage.scqhZhinv_qinzheng || {};
					var storageCards = storage.cards || [];
					var cards = Array.from(ui.discardPile.childNodes)
						.filter((card) => {
							if (storageCards.includes(card)) return false;
							return event.list.includes(get.type2(card));
						})
						.sort((a, b) => get.value(b) - get.value(a));
					if (cards.length) {
						if (cards.length === 1) {
							event._result = {
								bool: true,
								links: cards,
							};
						} else {
							player.chooseButton(['获得弃牌堆里一张牌', cards], true).set('ai', get.buttonValue);
						}
					} else {
						player.draw(event.list.length);
						event.finish();
					}
					('step 2');
					if (result.links?.length) {
						var card = result.links[0];
						event.list.remove(get.type2(card));
						var storage = player.storage.scqhZhinv_qinzheng || {};
						var storageCards = storage.cards || [];
						storageCards.add(card);
						storage.cards = storageCards;
						player.storage.scqhZhinv_qinzheng = storage;
						player.gain(card, 'gain2');
						if (event.list.length) event.goto(1);
					}
				},
				intro: {
					content(storage, player, skill) {
						if (!storage) storage = {};
						var num = storage.count || 0;
						var cards = storage.cards || [];
						var str = '<li>总次数:';
						str += num;
						str += '<br><li>基本牌:';
						str += num % 3;
						str += '/3<br><li>装备牌:';
						str += num % 5;
						str += '/5<br><li>锦囊牌:';
						str += num % 8;
						str += '/8';
						str += '<br><li>记录过的牌数:';
						str += cards.length || 0;
						str += '/';
						str += Array.from(ui.discardPile.childNodes).length || 0;
						return str;
					},
					markcount(storage, player) {
						if (!storage) storage = {};
						var num = storage.count || 0;
						return num;
					},
				},
				group: ['scqhZhinv_qinzheng_count'],
				subSkill: {
					count: {
						forced: true,
						popup: false,
						silent: true,
						firstDo: true,
						noHidden: true,
						trigger: {
							player: ['useCard1', 'respond'],
						},
						content() {
							var storage = player.storage.scqhZhinv_qinzheng || {};
							var num = storage.count || 0;
							num++;
							storage.count = num;
							player.storage.scqhZhinv_qinzheng = storage;
							player.markSkill('scqhZhinv_qinzheng');
						},
						_priority: 1,
					},
				},
			},
			scqhZhinv_yanyu: {
				audio: 'reyanyu',
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					return player.countCards('he');
				},
				check(card) {
					return 6 - get.value(card);
				},
				position: 'he',
				selectCard: [1, Infinity],
				filterCard: true,
				mod: {
					aiOrder(player, card, num) {
						if (num <= 0 || get.itemtype(card) !== 'card' || get.type(card) !== 'equip') {
							return num;
						}
						let eq = player.getEquip(get.subtype(card));
						if (eq && get.equipValue(card) - get.equipValue(eq) < Math.max(1.2, 6 - player.hp)) {
							return 0;
						}
					},
				},
				content() {
					player.draw(cards.length);
				},
				ai: {
					order: 10,
					result: {
						player: 1,
					},
				},
				group: ['scqhZhinv_yanyu_draw'],
				subSkill: {
					draw: {
						forced: true,
						trigger: {
							player: 'phaseJieshuEnd',
						},
						filter(trigger, player) {
							let count = 0;
							player.getHistory('lose', (evt) => {
								let evtx = evt.getParent(2);
								if (evtx && evtx.skill && evtx.skill == 'scqhZhinv_yanyu') {
									let evtz = evt.getl(player);
									if (evtz && evtz.cards2 && evtz.cards2.length) {
										for (let card of evtz.cards2) {
											if (card.name == 'sha') count++;
										}
									}
								}
							});
							return count;
						},
						content() {
							'step 0';
							event.num = lib.skill[event.name].filter(trigger, player);
							var next = player.chooseTarget();
							next.set('prompt', get.prompt(event.name));
							next.set('prompt2', '令一名角色摸' + get.cnNumber(event.num) + '张牌');
							next.set('ai', function (target) {
								return get.attitude(_status.event.player, target);
							});
							('step 1');
							var target = (result.targets || [])[0] || false;
							if (target) {
								target.draw(event.num);
							}
						},
					},
				},
			},
			scqhZhinv_qiaoshi: {
				audio: 'reqiaoshi',
				trigger: {
					player: 'damageEnd',
				},
				usable: 1,
				forced: true,
				filter(trigger, player) {
					return trigger.source && trigger.source != player && trigger.source.isIn();
				},
				content() {
					'step 0';
					var next = trigger.source.chooseBool();
					next.set('prompt', '樵拾:是否令' + get.translation(player) + '回复' + trigger.num + '点体力？');
					next.set('source', trigger.source);
					next.set('ai', () => {
						let source = _status.event.source;
						let player = _status.event.player;
						let reff = get.recoverEffect(player, source, source);
						let eff = get.effect(source, { name: 'draw' }, source);
						return reff + 2 * eff > 5;
					});
					('step 1');
					if (result.bool) {
						player.addTempSkill('scqhZhinv_qiaoshi_temp');
						player.markAuto('scqhZhinv_qiaoshi_temp', [trigger.source]);
						trigger.source.line(player, 'green');
						player.recover(trigger.num);
					} else player.getStat('triggerSkill')[event.name]--;
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) {
								if (get.attitude(target, player) <= 0 || target == player) return;
								if (target.getStat('triggerSkill').scqhZhinv_qiaoshi) return;
								if (target.hp <= 1 && !player.canSave(target)) return;
								return [0, 0.5, 0, 0.5];
							}
						},
					},
				},
				subSkill: {
					temp: {
						audio: 'reqiaoshi',
						charlotte: true,
						forced: true,
						trigger: {
							player: 'recoverAfter',
						},
						filter(event, player) {
							if (!player.hasSkill('scqhZhinv_qiaoshi')) return false;
							let storage = (player.storage.scqhZhinv_qiaoshi_temp || []).filter((source) => source.isIn());
							return storage.length;
						},
						content() {
							'step 0';
							var storage = (player.storage.scqhZhinv_qiaoshi_temp || []).filter((source) => source.isIn());
							if (storage.length > 1) {
								var next = player.chooseTarget(true, function (card, player, target) {
									let storage = _status.event.storage;
									return storage.includes(target);
								});
								next.set('storage', storage);
								next.set('prompt', '请选择【樵拾】的目标');
								next.set('ai', function (target) {
									return get.attitude(_status.event.player, target);
								});
							} else {
								event._result = {
									bool: true,
									targets: storage,
								};
							}
							('step 1');
							var target = (result.targets || [])[0] || false;
							event.target = target;
							if (target) {
								var list = [];
								list.add('与' + get.translation(target) + '各摸一张牌');
								list.add('令' + get.translation(target) + '摸两张牌');
								var next = player.chooseControl(list, function () {
									let att = _status.event.att;
									let list = _status.event.scqhList;
									if (att > 0) return list[1];
									return list[0];
								});
								next.set('att', get.attitude(player, target));
								next.set('scqhList', list);
							} else event.finish();
							('step 2');
							var str = result.control || '';
							if (str.includes('摸一张牌')) {
								player.draw();
								event.target.draw();
							} else {
								event.target.draw(2);
							}
						},
						ai: {
							expose: 0.1,
						},
					},
				},
			},
			scqhZhinv_wenji: {
				audio: 'spwenji',
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player != target;
				},
				content() {
					'step 0';
					var temp = 'scqhZhinv_wenji_temp';
					player.addTempSkill(temp);
					var storage = player.storage[temp] || {};
					if (!storage.targets) storage.targets = [];
					if (!storage.type) storage.type = [];
					storage.targets.add(target);
					player.storage[temp] = storage;
					('step 1');
					var hs = target.getCards('he');
					if (hs.length) {
						target.chooseCard('he', true, '问计:将一张牌交给' + get.translation(player));
					} else {
						target.loseHp();
						event.finish();
					}
					('step 2');
					var cards = result.cards || [];
					var card = cards[0] || false;
					if (card) {
						var temp = 'scqhZhinv_wenji_temp';
						var storage = player.storage[temp] || {};
						storage.type.add(get.type2(card, target));
						player.storage[temp] = storage;
						target.give(card, player, true);
					}
				},
				ai: {
					order: 10,
					result: {
						target(player, target) {
							var att = get.attitude(player, target);
							if (att > 0) return Math.sqrt(att) / 10;
							return 5 - att;
						},
					},
				},
				subSkill: {
					temp: {
						audio: 'spwenji',
						forced: true,
						charlotte: true,
						mod: {
							globalFrom(from, to) {
								let storage = from.storage.scqhZhinv_wenji_temp || {};
								let targets = storage.targets || [];
								if (targets.includes(to)) return -Infinity;
							},
						},
						trigger: {
							player: 'useCard',
						},
						filter(trigger, player) {
							let type = get.type2(trigger.card);
							let storage = player.storage.scqhZhinv_wenji_temp || {};
							let list = storage.type || [];
							return list.includes(type);
						},
						content() {
							trigger.directHit.addArray(game.filterPlayer());
						},
						ai: {
							directHit_ai: true,
							skillTagFilter(player, tag, arg) {
								let type = get.type2(arg.card);
								let storage = player.storage.scqhZhinv_wenji_temp || {};
								let list = storage.type || [];
								return list.includes(type);
							},
						},
					},
				},
			},
			scqhZhinv_tunjiang: {
				audio: 'sptunjiang',
				inherit: 'sptunjiang',
			},
			scqhZhinv_quanji: {
				audio: 'xinquanji',
				forced: true,
				trigger: {
					player: 'damageEnd',
					source: 'damageSource',
					global: ['gainAfter', 'loseAfter', 'loseAsyncAfter'],
				},
				filter(trigger, player) {
					if (trigger.name == 'damage') {
						return true;
					} else {
						let evt = trigger.getl(player);
						if (!evt || !evt.cards2 || !evt.cards2.length) return false;
						let cards = evt.cards2;
						if (trigger.name == 'lose') {
							if (trigger.type != 'discard') return false;
							if ((trigger.discarder || trigger.getParent(2).player) == player) return false;
							return true;
						} else if (trigger.name == 'gain') {
							if (player == trigger.player) return false;
							if (trigger.giver || trigger.parent.name == 'gift') return false;
							return true;
						} else if (trigger.name == 'loseAsync') {
							if (trigger.type != 'gain' || trigger.giver) return false;
							return game.hasPlayer(function (current) {
								if (current == player) return false;
								let cardsx = trigger.getg(current) || [];
								for (let card of cardsx) {
									if (cards.includes(card)) return true;
								}
								return false;
							});
						}
					}
					return false;
				},
				content() {
					'step 0';
					player.draw();
					('step 1');
					var hs = player.getCards('he');
					if (hs.length > 1) {
						player.chooseCard('he', true, 1, '选择一张牌作为「权」');
					} else if (hs.length) {
						event._result = {
							bool: true,
							cards: hs,
						};
					} else event.finish();
					('step 2');
					var cards = result.cards || [];
					if (cards.length) {
						var next = player.addToExpansion(cards, player, 'give');
						next.gaintag.add(event.name);
					} else event.finish();
				},
				marktext: '权',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				onremove(player, skill) {
					var xs = player.getExpansions(skill);
					if (xs.length) player.loseToDiscardpile(xs);
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					threaten: 0.8,
				},
				mod: {
					maxHandcard(player, num) {
						let xs = player.getExpansions('scqhZhinv_quanji');
						let hand = Math.min(xs.length, game.countGroup());
						return num + hand;
					},
				},
			},
			scqhZhinv_paiyi: {
				audio: 'xinpaiyi',
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					let xs = player.getExpansions('scqhZhinv_quanji');
					return xs.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						let xs = player.getExpansions('scqhZhinv_quanji');
						return ui.create.dialog('排异', xs, 'hidden');
					},
					backup(links, player) {
						return {
							audio: 'paiyi',
							filterTarget: true,
							filterCard() {
								return false;
							},
							selectCard: -1,
							card: links[0],
							delay: false,
							content() {
								'step 0';
								var skill = lib.skill.scqhZhinv_paiyi_backup || {};
								var card = skill.card || false;
								if (card) player.loseToDiscardpile(card);
								('step 1');
								var xs = player.getExpansions('scqhZhinv_quanji');
								var draw = Math.min(7, xs.length);
								if (xs.length) target.draw(xs.length);
								('step 2');
								if (target.countCards('h') > player.countCards('h')) {
									target.damage();
								}
							},
							ai: {
								order: 10,
								result: {
									target(player, target) {
										let xs = player.getExpansions('scqhZhinv_quanji');
										let att = get.attitude(player, target);
										let hss = target.getCards('h');
										let hs = player.getCards('h');
										let count = xs.length - 1;
										if (count > 3) {
											if (player == target) return 1;
										} else if (count < 2) {
											if (hss.length + count > hs.length) {
												if (att < 0) return 1;
											}
										}
										return 0;
									},
								},
							},
						};
					},
					prompt() {
						return '请选择【排异】的目标';
					},
				},
				ai: {
					order: 1,
					combo: 'scqhZhinv_quanji',
					result: {
						player(player) {
							let xs = player.getExpansions('scqhZhinv_quanji');
							let count = xs.length - 1;
							let gamers = game.filterPlayer((current) => {
								let att = get.attitude(player, current);
								if (att >= 0) return false;
								let hss = current.getCards('h');
								let hs = player.getCards('h');
								return hss.length + count > hs.length;
							});
							if (count > 3) return 1;
							else if (count < 2) {
								if (gamers.length) return 1;
							}
							return 0;
						},
					},
				},
				subSkill: {
					backup: {},
				},
			},
			scqhZhinv_hongyan: {
				inherit: 'hongyan',
			},
			scqhZhinv_huimou: {
				group: ['scqhZhinv_huimou_lose', 'scqhZhinv_huimou_turn'],
				subSkill: {
					lose: {
						trigger: {
							player: 'loseAfter',
							global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
						},
						check() {
							return 1;
						},
						prompt: '是否发动【回眸】令武将牌翻面？',
						filter(trigger, player) {
							let evt = trigger.getl(player);
							if (!evt || !evt.cards2 || !evt.cards2.length) return false;
							let lose = evt.cards2.filter(function (card) {
								let suit = card.suit;
								return suit == 'heart';
							});
							if (lose.length) return true;
							return false;
						},
						content() {
							player.turnOver();
						},
					},
					turn: {
						forced: true,
						trigger: {
							player: 'turnOverAfter',
						},
						filter(trigger, player) {
							let gamers = game.filterPlayer((current) => {
								return current.countCards('h');
							});
							return gamers.length;
						},
						content() {
							'step 0';
							var next = player.chooseTarget(function (card, player, target) {
								return target.countCards('h');
							});
							next.set('prompt', '请选择【回眸】的目标');
							next.set('prompt2', '令目标展示一张手牌');
							next.set('ai', function (target) {
								let att = get.attitude(player, target);
								let hs = target.countCards('h', { color: 'red' });
								if (att > 0 && hs.length && target.hp < target.maxHp) {
									return 3 + att;
								}
								return -att;
							});
							('step 1');
							var target = (result.targets || [])[0] || false;
							event.target = target;
							if (target) {
								var next = target.chooseCard(true, 'h');
								next.set('source', player);
								next.set('ai', function (card) {
									let target = _status.event.player;
									let player = _status.event.source;
									let att = get.attitude(player, target);
									let color = get.color(card);
									let value = get.value(card);
									if (color == 'red' && target.hp < target.maxHp) {
										if (att > 0) return 3 + value;
										if (target.hp <= 2) return 3 + value;
									}
									return 7 - value;
								});
							} else event.finish();
							('step 2');
							var card = (result.cards || [])[0] || false;
							var target = event.target;
							if (card) {
								target.showCards(card);
								var color = get.color(card);
								if (color == 'black') {
									target.discard(card);
									target.loseHp();
									event.finish();
								} else if (color == 'red') {
									player.gain(card, target, 'give', 'bySelf');
									if (target.hp < target.maxHp) {
										var prompt = '是否让';
										prompt += get.translation(target);
										prompt += '回复一点体力';
										var next = player.chooseBool(prompt);
										next.target = target;
										next.ai = function (event, player) {
											let target = _status.event.target;
											let reff = get.recoverEffect(target, player, player);
											return reff > 0;
										};
									}
								} else event.finish();
							} else event.finish();
							('step 3');
							if (result.bool) event.target.recover();
						},
					},
				},
			},
			scqhZhinv_wusheng: {
				mod: {
					targetInRange(card) {
						var suit = card.suit;
						if (suit == 'diamond') return true;
					},
					cardUsable(card, player, num) {
						var suit = card.suit;
						if (suit == 'heart') return Infinity;
					},
				},
				audio: 'wusheng',
				hiddenCard(player, name) {
					if (name == 'jiu') return player.countCards('hes', { color: 'black' });
					return false;
				},
				enable: ['chooseToUse', 'chooseToRespond'],
				position: 'hes',
				filter(trigger, player) {
					var filter = trigger.filterCard;
					if (player.countCards('hes', { color: 'red' })) {
						if (filter({ name: 'sha' }, player, trigger)) return true;
						if (filter({ name: 'sha', color: 'red' }, player, trigger)) return true;
						if (filter({ name: 'sha', suit: 'heart' }, player, trigger)) return true;
						if (filter({ name: 'sha', suit: 'diamond' }, player, trigger)) return true;
					}
					if (player.countCards('hes', { color: 'black' })) {
						if (filter({ name: 'jiu' }, player, trigger)) return true;
						if (filter({ name: 'jiu', suit: 'club' }, player, trigger)) return true;
						if (filter({ name: 'jiu', suit: 'spade' }, player, trigger)) return true;
						if (filter({ name: 'jiu', color: 'black' }, player, trigger)) return true;
					}
					return false;
				},
				filterCard(card, player, trigger) {
					trigger = trigger || _status.event;
					var filter = trigger._backup.filterCard;
					var color = get.color(card);
					if (color == 'red') {
						if (filter({ name: 'sha', cards: [card] }, player, trigger)) return true;
					}
					if (color == 'black') {
						if (filter({ name: 'jiu', cards: [card] }, player, trigger)) return true;
					}
					return false;
				},
				viewAs(cards, player) {
					var name = false;
					switch (get.color(cards[0])) {
						case 'red': {
							name = 'sha';
							break;
						}
						case 'black': {
							name = 'jiu';
							break;
						}
					}
					if (name) return { name: name };
					return null;
				},
				check(card) {
					var player = _status.event.player;
					var value = get.value(card, player);
					return 8 - value;
				},
				ai: {
					respondSha: true,
					respondShan: true,
					result: {
						player: 1,
					},
				},
			},
			scqhZhinv_guanjue: {
				audio: 'jsrgguanjue',
				forced: true,
				trigger: {
					player: ['useCard', 'respond'],
				},
				filter(trigger, player) {
					return lib.suit.includes(trigger.card.suit);
				},
				content() {
					'step 0';
					var targets = game.filterPlayer((current) => current != player);
					var suit = trigger.card.suit;
					for (var target of targets) {
						target.addTempSkill('scqhZhinv_guanjue_ban');
						target.markAuto('scqhZhinv_guanjue_ban', [suit]);
					}
				},
				subSkill: {
					ban: {
						charlotte: true,
						mod: {
							cardEnabled2(card, player) {
								let storage = player.getStorage('scqhZhinv_guanjue_ban');
								if (storage.includes(card.suit) && get.position(card) == 'h') return false;
							},
							cardEnabled(card, player) {
								let storage = player.getStorage('scqhZhinv_guanjue_ban');
								if (storage.includes(card.suit) && get.position(card) == 'h') return false;
							},
							cardRespondable(card, player) {
								let storage = player.getStorage('scqhZhinv_guanjue_ban');
								if (storage.includes(card.suit) && get.position(card) == 'h') return false;
							},
							cardSavable(card, player) {
								let storage = player.getStorage('scqhZhinv_guanjue_ban');
								if (storage.includes(card.suit) && get.position(card) == 'h') return false;
							},
						},
						mark: true,
						marktext: '绝',
						intro: {
							content: '本回合内不能使用或打出$的牌',
						},
						parentskill: 'scqhZhinv_guanjue',
					},
				},
			},
			scqhZhinv_zhuihun: {
				audio: 'wuhun2',
				limited: true,
				forceDie: true,
				trigger: {
					player: 'die',
				},
				logTarget: 'source',
				filter(trigger, player) {
					return trigger.source && trigger.source.isIn() && trigger.source != player;
				},
				check(trigger, player) {
					let att = get.attitude(player, trigger.source);
					return -att;
				},
				content() {
					player.awakenSkill(event.name);
					var id = event.name + '_temp';
					var storage = trigger.source.storage[id] || [];
					storage.add(player);
					trigger.source.storage[id] = storage;
					trigger.source.addSkill(id);
				},
				subSkill: {
					temp: {
						forced: true,
						trigger: {
							player: 'phaseZhunbeiBegin',
						},
						content() {
							'step 0';
							event.source = player.storage[event.name] || [];
							event.count = 0;
							('step 1');
							var next = player.judge(function (card) {
								var name = card.name;
								if (name == 'tao' || name == 'taoyuan') return -25;
								return 15;
							});
							next.judge2 = function (result) {
								return result.bool;
							};
							('step 2');
							if (result.bool) {
								player.die();
							}
							('step 3');
							event.count++;
							if (player.isIn() && event.source[event.count]) event.goto(1);
						},
						charlotte: true,
						mark: true,
						marktext: '魇',
						intro: {
							name: '追魂者',
							content: '$',
							markcount(storage, player) {
								if (storage && storage.length >= 2) return storage.length;
								return 0;
							},
						},
					},
				},
			},
			scqhZhinv_qiangzhi: {
				audio: 'qiangzhi',
				forced: true,
				subfrequent: ['draw'],
				trigger: {
					player: 'phaseUseBegin',
				},
				filter(trigger, player) {
					var players = game.filterPlayer((current) => {
						return current.countCards('h');
					});
					return players.length;
				},
				content() {
					'step 0';
					var next = player.chooseTarget(get.prompt2(event.name), function (card, player, target) {
						return target.countCards('h');
					});
					next.set('ai', function () {
						return Math.random();
					});
					('step 1');
					var targets = result.targets || [];
					if (targets.length) {
						var target = targets[0];
						event.target = target;
						player.choosePlayerCard('visible', target, 'h', true);
					} else event.finish();
					('step 2');
					var cards = result.cards || [];
					if (cards.length) {
						var card = cards[0];
						target.showCards(card, get.translation(event.target) + '因【强识】展示');
						var skill = 'scqhZhinv_qiangzhi_draw';
						var storage = player.storage[skill] || [];
						storage.add(get.type(card, 'trick'));
						player.storage[skill] = storage;
						game.addVideo('storage', player, [skill, storage]);
						player.addTempSkill(skill, { player: 'phaseBegin' });
					}
				},
				subSkill: {
					draw: {
						forced: true,
						popup: false,
						charlotte: true,
						trigger: {
							player: ['useCard', 'respond'],
						},
						prompt: '是否执行【强识】的效果摸一张牌？',
						filter(trigger, player) {
							var storage = player.storage.scqhZhinv_qiangzhi_draw || [];
							return storage.includes(get.type(trigger.card, 'trick'));
						},
						content() {
							player.draw();
						},
					},
				},
			},
			scqhZhinv_xiantu: {
				audio: 'xiantu1',
				group: 'xiantu2',
				trigger: {
					global: 'phaseUseBegin',
				},
				filter(trigger, player) {
					return trigger.player != player;
				},
				logTarget: 'player',
				check(trigger, player) {
					if (get.attitude(player, trigger.player) < 5) return false;
					if (player.maxHp - player.hp >= 2) return false;
					if (player.hp == 1) return false;
					if (player.hp == 2 && player.countCards('h') < 2) return false;
					if (trigger.player.countCards('h') >= trigger.player.hp) return false;
					return true;
				},
				content() {
					'step 0';
					if (get.mode() !== 'identity' || player.identity !== 'nei') player.addExpose(0.2);
					player.draw(2);
					('step 1');
					var next = player.chooseCard(2, 'he', true, '交给' + get.translation(trigger.player) + '两张牌');
					next.set('ai', function (card) {
						if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return -1;
						if (get.tag(card, 'damage')) return 1;
						if (get.type(card) == 'equip') return 1;
						return 0;
					});
					('step 2');
					var cards = result.cards || [];
					if (cards.length) {
						var id = 'scqhZhinv_xiantu_' + player.playerid;
						game.broadcastAll(lib.skill[event.name].createGainTag, id, player.name);
						game.addVideo('skill', player, [event.name, [id, player.name]]);
						player.give(cards, trigger.player).gaintag.add(id);
						lib.skill[id] = lib.skill.scqhZhinv_xiantu_lose;
						trigger.player.storage[id] = player;
						trigger.player.addTempSkill(id, { player: 'phaseUseEnd' });
					}
				},
				createGainTag(skill, name) {
					if (!lib.skill[skill]) {
						lib.skill[skill] = {
							charlotte: true,
						};
						lib.translate[skill] = '献图·' + get.translation(name);
					}
					let sourceSkill = 'scqhZhinv_xiantu';
					if (!_status.postReconnect[sourceSkill]) {
						_status.postReconnect[sourceSkill] = [lib.skill[sourceSkill].createGainTag, [], []];
					}
					_status.postReconnect[sourceSkill][1].add(skill);
					_status.postReconnect[sourceSkill][2].add(name);
				},
				ai: {
					threaten: 1.1,
				},
				subSkill: {
					lose: {
						charlotte: true,
						forced: true,
						popup: false,
						onremove(player, skill) {
							player.removeGaintag(skill);
							var target = player.storage[skill] || false;
							var kill = player.getStat('kill');
							var lose = player.getHistory('lose', (evt) => {
								let evtx = evt.getl(player);
								if (!evtx || !evtx.hs || !evtx.hs.length) return false;
								for (let i in evtx.gaintag_map) {
									let tag = evtx.gaintag_map[i];
									if (tag.includes(skill)) return true;
								}
								return false;
							});
							if (target && target.isIn() && kill <= 0 && lose.length) {
								target.loseHp();
							}
						},
					},
				},
			},
			scqhZhinv_qixi: {
				audio: 'drlt_poxi',
				enable: 'chooseToUse',
				position: 'hes',
				filterCard: {
					color: 'black',
				},
				check(card) {
					let color = get.color(card);
					let value = get.value(card);
					let check = 7;
					return check - value;
				},
				viewAsFilter(player) {
					let hs = player.getCards('hes', { color: 'black' });
					if (!hs.length) return false;
					if (player.hasSkill('scqhZhinv_qixi_ban')) return false;
				},
				viewAs: {
					name: 'guohe',
				},
				precontent() { },
				onuse(links, player) { },
				group: ['scqhZhinv_qixi_before', 'scqhZhinv_qixi_after'],
				subSkill: {
					before: {
						forced: true,
						trigger: {
							player: 'useCard1',
						},
						filter(trigger, player) {
							return trigger.skill && trigger.skill == 'scqhZhinv_qixi';
						},
						content() {
							'step 0';
							var list = ['basic', 'trick', 'equip'];
							for (let i of list) {
								if (!lib.card[i]) lib.card[i] = {};
								if (!lib.card[i].type) lib.card[i].type = i;
								if (!lib.card[i].image) lib.card[i].image = 'ext:' + lib.scqhExtension + '/skin/card/cardback_' + i + '.png';
							}
							var str = '声明一种类型';
							var next = player.chooseButton([str, [list, 'vcard']], [1, 1]);
							next.set('forced', true);
							next.set('targets', trigger.targets || []);
							next.set('ai', function (button) {
								let player = _status.event.player;
								let targets = _status.event.targets;
								let target = targets[0];
								if (target) {
									let cards = target.getCards('he');
									if (!cards.length) return 0;
									for (let card of cards) {
										if (get.type2(card) == button.link[2]) return 1;
									}
								}
								return 0;
							});
							('step 1');
							var types = (result.links || []).map((card) => card[2]) || [];
							var type = types[0] || false;
							if (type) {
								player.chat(get.translation(type));
								player.storage.scqhZhinv_qixi = {
									card: trigger.card,
									type: type,
								};
							}
						},
					},
					after: {
						forced: true,
						trigger: {
							global: 'discardAfter',
						},
						filter(trigger, player) {
							if (!trigger.player.isIn()) return false;
							if (!trigger.cards || !trigger.cards.length) return false;
							var evt = trigger.getParent('useCard');
							if (!evt || evt.name != 'useCard' || evt.player != player) return false;
							if (!evt.skill || evt.skill != 'scqhZhinv_qixi') return false;
							if (!evt.card || evt.card.name != 'guohe') return false;
							var storage = player.storage.scqhZhinv_qixi || {};
							if (!storage.type || !storage.card || storage.card != evt.card) return false;
							return true;
						},
						content() {
							var storage = player.storage.scqhZhinv_qixi || {};
							var cards = trigger.cards.filter((card) => get.type2(card) == storage.type);
							if (cards.length) {
								if (player.canUse({ name: 'sha' }, trigger.player, false)) {
									player.useCard({ name: 'sha' }, trigger.player, false);
								}
							} else player.addTempSkill('scqhZhinv_qixi_ban');
						},
					},
					ban: {
						charlotte: true,
						mark: true,
						marktext: '<span style="text-decoration: line-through;">奇袭</span>',
						intro: {
							name: '～夜袭失败～',
							content: '大聪明～你暴露了!!',
						},
						init(player) {
						},
						onremove(player) {
						},
					},
				},
			},
			scqhZhinv_jieying: {
				audio: 'drlt_jieying',
				forced: true,
				marktext: '劫',
				intro: {
					content: '$',
				},
				trigger: {
					global: 'phaseJieshuBegin',
				},
				filter(trigger, player) {
					if (trigger.player == player) {
						var players = game.filterPlayer((current) => current != player);
						return players.length;
					} else {
						var storage = player.storage.scqhZhinv_jieying || [];
						return storage.includes(trigger.player);
					}
					return false;
				},
				async content(event, trigger, player) {
					if (trigger.player == player) {
						var result = {};
						var players = game.filterPlayer((current) => current != player);
						if (players.length > 1) {
							var chooseTarget = player.chooseTarget(true, function (card, player, target) {
								return target != player;
							});
							chooseTarget.set('prompt', '请选择【劫营】的目标');
							chooseTarget.set('prompt2', get.translation(event.name + '_info'));
							chooseTarget.set('ai', function (target) {
								var att = get.attitude(player, target);
								return -att;
							});
							chooseTarget.setHiddenSkill(event.name);
							result = (await chooseTarget).result || {};
						} else {
							result = {
								bool: true,
								targets: players,
							};
						}
						var target = (result.targets || [])[0] || false;
						if (target) {
							var biaoji = false;
							var hsMe = player.getCards('h');
							var hsHe = target.getCards('h');
							var list = [];
							if (hsHe.length) {
								list.push(get.translation(target.name) + '的手牌');
								list.push(hsHe);
							}
							var suitList = [];
							for (var card of hsMe) suitList.add(card.suit);
							if (suitList.length >= 4 || (hsHe.length && hsMe.length)) {
								list.push('你的手牌');
								list.push(hsMe);
							}
							if (list.length) {
								var chooseButton = player.chooseButton(4, list);
								chooseButton.set('target', target);
								chooseButton.set('ai', function (button) {
									var player = _status.event.player;
									var target = _status.event.target;
									var ps = [];
									var ts = [];
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										var card = ui.selected.buttons[i].link;
										if (target.getCards('h').includes(card)) ts.push(card);
										else ps.push(card);
									}
									var card = button.link;
									var owner = get.owner(card);
									var val = get.value(card) || 1;
									if (owner == target) {
										if (ts.length > 1) return 0;
										if (ts.length == 0) return val;
										return 2 * val;
									}
									return 7 - val;
								});
								chooseButton.set('filterButton', function (button) {
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										if (button.link.suit == ui.selected.buttons[i].link.suit) return false;
									}
									return true;
								});
								var result = (await chooseButton).result || {};
								var cards = result.links || [];
								if (result.bool && cards.length) {
									var discard1 = [];
									var discard2 = [];
									for (var card of cards) {
										var owner = get.owner(card);
										if (owner == player) discard1.push(card);
										else discard2.push(card);
									}
									var loseList = [];
									if (discard1.length && discard2.length) {
										game.loseAsync({
											lose_list: [
												[player, discard1],
												[target, discard2],
											],
											discarder: player,
										}).setContent('discardMultiple');
									} else if (discard1.length) {
										player.discard(discard1);
									} else target.discard(discard2);
								} else biaoji = true;
							} else biaoji = true;
							if (biaoji) player.markAuto(event.name, [target]);
						}
					} else {
						var target = trigger.player;
						player.unmarkAuto(event.name, [target]);
						var list = [];
						var hs = target.getCards('h');
						var es = target.getCards('e');
						if (hs.length) list.add('手牌');
						if (es.length) list.add('装备');
						var result = {};
						if (list.length > 1) {
							var chooseControl = player.chooseControl(list);
							chooseControl.set('ai', function () {
								return 0;
							});
							result.control = (await chooseControl).result.control;
						} else if (list.length) {
							result.control = list[0];
						}
						var control = result.control || '';
						if (control.includes('手牌')) {
							target.give(hs, player);
						} else if (control.includes('装备')) {
							target.give(es, player);
						}
					}
				},
			},
			scqhZhinv_jinfan: {
				audio: 'gnjinfan',
				preHidden: true,
				trigger: {
					player: 'phaseEnd',
				},
				jinfan() {
					var cards = [];
					game.getGlobalHistory('cardMove', function (evt) {
						if (evt.name != 'lose' || evt.type != 'discard') return false;
						var ds = evt.cards.filter((card) => get.position(card, true) == 'd');
						if (ds.length) cards.addArray(ds);
					});
					return cards;
				},
				filter(trigger, player) {
					var ds = lib.skill.scqhZhinv_jinfan.jinfan() || [];
					return ds.length;
				},
				check() {
					return 1;
				},
				content() {
					'step 0';
					var cards = [];
					var ds = lib.skill.scqhZhinv_jinfan.jinfan() || [];
					var ss = player.getCards('s', (card) => card.hasGaintag('scqhZhinv_jinfan'));
					if (ds.length) cards.addArray(ds);
					if (ss.length) cards.addArray(ss);
					event.cards = cards;
					var map = {};
					var choose = false;
					for (var card of cards) {
						var suit = card.suit || 'none';
						var tempList = map[suit] || [];
						tempList.add(card);
						map[suit] = tempList;
						if (tempList.length > 1) choose = true;
					}
					event.one = [];
					var suitList = [];
					var list = ['每种花色各选一张,仅有一张的花色默认选择'];
					var num = 0;
					for (var suit in map) {
						var tempList = map[suit];
						list.add(tempList);
						if (tempList.length == 1) {
							suitList.add(suit);
							event.one.addArray(tempList);
						} else num += 1;
					}
					if (!choose || num == 0) {
						event._result = {
							bool: true,
							links: cards,
						};
					} else {
						var chooseButton = player.chooseButton(true, num, list);
						chooseButton.set('ai', function (button) {
							var player = _status.event.player;
							var card = button.link;
							var val = get.value(card);
							return val;
						});
						chooseButton.set('suitList', suitList);
						chooseButton.set('filterButton', function (button) {
							var card = button.link;
							var uib = ui.selected.buttons || [];
							var suitList = _status.event.suitList || [];
							var suit = card.suit;
							if (suitList.includes(suit)) return false;
							for (var i = 0; i < uib.length; i++) {
								var cardx = uib[i].link;
								var suitx = cardx.suit;
								if (suit == suitx) return false;
							}
							return true;
						});
					}
					('step 1');
					var cardx = result.links || [];
					var cards = event.cards || [];
					var one = event.one || [];
					if (one.length) cardx.addArray(one);
					if (result.bool && cardx.length) {
						var ss = player.getCards('s', (card) => card.hasGaintag('scqhZhinv_jinfan'));
						var loseList = cards.filter((card) => {
							return ss.includes(card) && !cardx.includes(card);
						});
						var gainList = cards.filter((card) => {
							return !ss.includes(card) && cardx.includes(card);
						});
						if (gainList.length) {
							player.$gain2(gainList, false);
							player.loseToSpecial(gainList, 'scqhZhinv_jinfan').visible = true;
							game.log(player, '将', gainList, '放在了武将牌上');
						}
						if (loseList.length) {
							player.$throw(loseList, 1000);
							player.lose(loseList, ui.discardPile);
							game.log(loseList, '进入了弃牌堆');
						}
					}
					('step 2');
					var ss = player.getCards('s', (card) => card.hasGaintag('scqhZhinv_jinfan'));
					if (ss.length) player.markSkill('scqhZhinv_jinfan');
					else player.unmarkSkill('scqhZhinv_jinfan');
				},
				ai: {
					threaten: 1.3,
					expose: 0.2,
				},
				marktext: '铃',
				intro: {
					mark(dialog, storage, player) {
						var temp = player.storage.scqhZhinv_jinfan_temp || [];
						if (temp.length) dialog.addText(get.translation(temp));
						var ss = player.getCards('s', (card) => card.hasGaintag('scqhZhinv_jinfan'));
						if (ss.length) dialog.addAuto(ss);
						else return '共有〇张牌';
					},
					markcount(storage, player) {
						var ss = player.getCards('s', (card) => card.hasGaintag('scqhZhinv_jinfan'));
						if (ss.length) return ss.length;
						else player.unmarkSkill('scqhZhinv_jinfan');
					},
					onunmark(storage, player) {
						var ss = player.getCards('s', (card) => card.hasGaintag('scqhZhinv_jinfan'));
						if (ss.length) {
							player.lose(ss, ui.discardPile);
							player.$throw(ss, 1000);
							game.log(ss, '进入了弃牌堆');
						}
					},
				},
				mod: {
					aiOrder(player, card, num) {
						if (get.itemtype(card) == 'card' && card.hasGaintag('scqhZhinv_jinfan')) return num + 0.5;
					},
				},
			},
			scqhZhinv_kangkai: {
				audio: 'kaikang',
				trigger: {
					global: 'useCardToTargeted',
				},
				filter(trigger, player) {
					if (trigger.card.name != 'sha') return false;
					if (!trigger.target.isIn()) return false;
					return get.distance(player, trigger.target) <= 1;
				},
				check(trigger, player) {
					return get.attitude(player, trigger.target) >= 0;
				},
				logTarget: 'target',
				content() {
					'step 0';
					player.draw();
					if (trigger.target == player) event.finish();
					('step 1');
					var hs = player.getCards('he');
					if (hs.length) {
						var next = player.chooseCard('he');
						var canTarget = lib.filter.targetEnabled(trigger.card, trigger.player, player);
						var str = '';
						if (!canTarget) {
							next.set('forced', true);
							str += '你不能成为';
							str += get.translation(trigger.player);
							str += '使用【杀】的目标,请交给';
							str += get.translation(trigger.target);
							str += '一张牌';
						} else {
							str += '除非交给';
							str += get.translation(trigger.target);
							str += '一张牌,否则你代替其成为此【杀】的目标';
						}
						next.set('prompt', str);
						next.set('ai', function (card) {
							if (get.position(card) == 'e') return -1;
							if (card.name == 'shan') return 1;
							if (get.type(card) == 'equip') return 0.5;
							return 0;
						});
					} else event.finish();
					('step 2');
					var cards = result.cards || [];
					if (cards.length) {
						player.give(cards, trigger.target, 'give');
						event.card = cards[0];
					} else {
						if (!trigger.target.hasSkill('feiying')) {
							trigger.target.addTempSkill('feiying');
						}
						var evt = trigger.parent;
						evt.triggeredTargets2.remove(trigger.target);
						evt.targets.remove(trigger.target);
						evt.targets.push(player);
						event.finish();
					}
					('step 3');
					var card = event.card || false;
					var hs = trigger.target.getCards('h');
					if (card && get.type(card) == 'equip' && hs.includes(card)) {
						trigger.target.chooseUseTarget(card);
					}
				},
				ai: {
					threaten: 1.1,
				},
				subSkill: {
					ban: {
						charlotte: true,
						init(player) {
							player.awakenSkill('mashu');
						},
						onremove(player) {
							player.restoreSkill('mashu');
						},
					},
				},
			},
			scqhZhinv_tanbei: {
				number(player, num) {
					if (!num || typeof num != 'number') num = 0;
					let history = player.getAllHistory('useCard');
					let number = 0;
					let evt = history[history.length - num - 1];
					if (evt && evt.card) {
						let numc = evt.card.number;
						if (numc && typeof numc == 'number') {
							number = numc;
						}
					}
					return number;
				},
				mod: {
					aiOrder(player, card, num) {
						if (typeof card == 'object') {
							let numz = lib.skill.scqhZhinv_tanbei.number(player);
							if (!numz) return;
							let numc = card.number;
							if (!numc || typeof numc != 'number') return;
							if (numc % 3 != 0) return;
							if (numc > numz) return num + 10;
						}
					},
					maxHandcard(player, num) {
						let skill = 'scqhZhinv_tanbei_mark';
						player.removeGaintag(skill);
						let numz = lib.skill.scqhZhinv_tanbei.number(player);
						if (!numz) return;
						lib.translate[skill] = numz;
						player.getCards('h', function (card) {
							let numc = card.number;
							if (!numc || typeof numc != 'number') return false;
							if (numc % 3 != 0) return false;
							if (numc > numz) player.addGaintag(card, skill);
						});
					},
				},
				forced: true,
				trigger: {
					player: ['useCardAfter'],
				},
				filter(trigger, player) {
					let numz = lib.skill.scqhZhinv_tanbei.number(player, 1);
					if (!numz) return false;
					let numc = trigger.card.number;
					if (!numc || typeof numc != 'number') return false;
					if (numc % 3 != 0) return false;
					if (numc > numz) return true;
					return false;
				},
				async content(event, trigger, player) {
					player.draw();
				},
				ai: {
					threaten: 3,
				},
			},
			scqhZhinv_zuijiu: {
				inherit: 'jiuchi',
				filterCard(card, player) {
					let numc = card.number;
					if (!numc || typeof numc != 'number') return false;
					if (numc % 3 != 0) return false;
					return true;
				},
				viewAs: {
					name: 'jiu',
					scqhZhinv_zuijiu: true,
				},
				viewAsFilter(player) {
					let cards = player.getCards('hs', function (card) {
						let numc = card.number;
						if (!numc || typeof numc != 'number') return false;
						if (numc % 3 != 0) return false;
						return true;
					});
					return cards.length;
				},
				mod: {
					cardname(card, player) {
						let numc = card.number;
						if (player.hasSkill('jiu') && card.name != 'jiu') return 'sha';
					},
					cardUsable(card, player, num) {
						let numc = card.number;
						if (card.name == 'jiu' && card.scqhZhinv_zuijiu) return Infinity;
						if (card.name == 'sha' && player.hasSkill('jiu')) return Infinity;
					},
				},
			},
			scqhZhinv_xueji: {
				audio: 'xueji',
				targetprompt: ['首恶', '连坐'],
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					return player.countCards('he', { color: 'red' });
				},
				filterTarget(card, player, target) {
					if (target.isLinked()) return false;
					return player != target;
				},
				selectTarget() {
					var player = _status.event.player;
					return [1, Math.max(1, player.getDamagedHp())];
				},
				position: 'he',
				filterCard: {
					color: 'red',
				},
				selectCard: 1,
				check(card) {
					return 8 - get.value(card);
				},
				multitarget: true,
				multiline: true,
				line: 'fire',
				content() {
					'step 0';
					for (var current of targets) {
						if (current.isIn() && !current.isLinked()) {
							current.link(true);
						}
					}
					('step 1');
					('step 2');
					var current = targets[0];
					if (current && current.isIn()) current.damage('fire', 'nocard');
				},
				ai: {
					damage: true,
					fireAttack: true,
					threaten: 1.5,
					order: 7,
					result: {
						target(player, target) {
							var eff = get.damageEffect(target, player, target, 'fire');
							if (target.isLinked()) return eff / 10;
							return eff;
						},
					},
				},
			},
			scqhZhinv_wuji: {
				audio: 'huxiao',
				dutySkill: true,
				forced: true,
				trigger: {
					source: 'damageSource',
				},
				filter(trigger, player) {
					return true;
				},
				logTarget: 'player',
				content() {
					var temp = 'scqhZhinv_wuji_temp';
					player.addTempSkill(temp);
					player.markAuto(temp, [trigger.player]);
					if (trigger.hasNature('fire')) {
						player.draw();
						trigger.player.draw();
					}
				},
				group: ['scqhZhinv_wuji_achieve'],
				subSkill: {
					temp: {
						charlotte: true,
						mark: true,
						intro: {
							content: 'players',
						},
						mod: {
							cardUsableTarget(card, player, target) {
								var storage = player.storage.scqhZhinv_wuji_temp || [];
								if (storage.includes(target)) return true;
							},
						},
						stand() {
							var list = [];
							for (var name in lib.character) {
								var tran = get.translation(name);
								if (tran.includes('关羽')) list.add(name);
							}
							return list.randomGet();
						},
						forced: true,
						trigger: {
							player: 'chooseToUseAfter',
						},
						content() {
							var stand = lib.skill[event.name].stand();
							if (stand) player.flashAvatar(false, stand);
						},
					},
					achieve: {
						audio: 'wuji',
						forced: true,
						trigger: {
							player: 'phaseJieshuBegin',
						},
						filter(event, player) {
							return player.getStat('damage') >= 2;
						},
						content() {
							player.awakenSkill('scqhZhinv_wuji');
							player.recover();
							player.addSkill('fuhun');
							player.addSkill('xinfu_fuyin');
						},
					},
				},
				derivation: ['fuhun', 'xinfu_fuyin'],
			},
			scqhZhinv_leijie: {
				trigger: {
					player: ['useCardAfter', 'respondAfter'],
				},
				check() {
					return 1;
				},
				filter(trigger, player) {
					return trigger.card.name == 'shan';
				},
				content() {
					var next = player.judge(function (card) {
						return card.suit == 'spade';
					});
					next.judge2 = function (result) {
						return result.bool;
					};
				},
				group: 'scqhZhinv_leijie_judge',
				subSkill: {
					judge: {
						forced: true,
						trigger: {
							player: 'judgeEnd',
						},
						filter(trigger, player) {
							if (trigger.result.suit != 'spade') return false;
							var players = game.filterPlayer((current) => current != player);
							return players.length;
						},
						content() {
							'step 0';
							var next = player.chooseTarget(function (card, player, target) {
								return target != player;
							});
							next.set('prompt', get.prompt(event.name));
							next.set('prompt2', '对一名其他角色造成一点雷属性伤害');
							next.set('ai', (target) => {
								var player = _status.event.player;
								return get.damageEffect(target, player, player, 'thunder');
							});
							('step 1');
							var targets = result.targets || [];
							var target = targets[0];
							if (target) {
								target.damage('thunder');
							}
						},
					},
				},
			},
			scqhZhinv_guidao: {
				forced: true,
				trigger: {
					global: 'judge',
				},
				filter(event, player) {
					return player.countCards('hes', { color: 'black' });
				},
				content() {
					'step 0';
					var pname = get.translation(trigger.player);
					var str = pname;
					str += '的' + (trigger.judgestr || '') + '判定为';
					str += get.translation(trigger.player.judging[0]);
					str += ',' + get.prompt(event.name);
					str += '<br/>若如此做,改判的花色为:';
					str += '♠️️,你下次造成的雷电伤害+1;';
					str += '♣️️,你下次造成雷电伤害后,回复一点体力或摸一张牌.';
					var next = player.chooseCard(str, 'hes', function (card) {
						if (get.color(card) != 'black') return false;
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
					next.setHiddenSkill(event.name);
					('step 1');
					if (result.cards?.length) {
						player.respond(result.cards, 'highlight', event.name, 'noOrdering')._triggered = null;
					} else event.finish();
					('step 2');
					if (result.bool) {
						var judging = trigger.player.judging[0];
						player.$gain2(judging);
						player.gain(judging);
						var cards = result.cards;
						trigger.player.judging[0] = cards[0];
						trigger.orderingCards.addArray(cards);
						game.log(trigger.player, '的判定牌改为', cards[0]);
						var suit = cards[0].suit;
						if (['spade', 'club'].includes(suit)) {
							var subName = 'scqhZhinv_guidao_' + suit;
							player.addMark(subName, 1, false);
							player.addSkill(subName);
						}
					}
					('step 3');
				},
				ai: {
					rejudge: true,
					tag: {
						rejudge: 1,
					},
				},
				onremove: ['scqhZhinv_guidao_spade', 'scqhZhinv_guidao_club'],
				group: ['scqhZhinv_guidao_spade', 'scqhZhinv_guidao_club'],
				subSkill: {
					spade: {
						marktext: '♠️️',
						intro: {
							content: '造成雷电伤害+#',
						},
						forced: true,
						trigger: {
							source: 'damageBegin2',
						},
						filter(event, player) {
							if (!player.countMark('scqhZhinv_guidao_spade')) return false;
							return event.hasNature('thunder');
						},
						content() {
							var count = player.countMark('scqhZhinv_guidao_spade');
							player.removeMark('scqhZhinv_guidao_spade', count, false);
							trigger.num += count;
						},
					},
					club: {
						marktext: '♣️️',
						intro: {
							content: '造成雷电伤害后,摸#张牌或回复#点体力',
						},
						forced: true,
						trigger: {
							source: 'damageSource',
						},
						filter(event, player) {
							if (!player.countMark('scqhZhinv_guidao_club')) return false;
							return event.hasNature('thunder');
						},
						content() {
							var count = player.countMark('scqhZhinv_guidao_club');
							player.removeMark('scqhZhinv_guidao_club', count, false);
							player.chooseDrawRecover(count, count, true);
						},
					},
				},
			},
			scqhZhinv_fubing: {
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(event, player) {
					var xs = player.getExpansions('scqhZhinv_fubing');
					if (!xs.length) return false;
					if (event.filterCard && event.filterCard({ name: 'sha', nature: 'thunder' }, player, event)) return true;
					if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) return true;
				},
				chooseButton: {
					dialog(event, player) {
						var dialog = ui.create.dialog('集兵', 'hidden');
						var list = [];
						if (event.filterCard && event.filterCard({ name: 'sha', nature: 'thunder' }, player, event)) {
							list.add('sha');
						}
						if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) {
							list.add('shan');
						}
						if (list.length == 2) {
							dialog._chooseButton = list.length;
							dialog.add([
								list.map((i) => {
									return [i, get.translation(i)];
								}),
								'tdnodes',
							]);
						} else dialog._cardName = list[0];
						dialog.add(player.getExpansions('scqhZhinv_fubing'));
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
					backup(links, player) {
						var card, name, nature;
						if (links.length == 2) {
							name = links[0];
							card = links[1];
						} else {
							card = links[0];
							var event = _status.event;
							name = event.filterCard({ name: 'shan' }, player, event) ? 'shan' : 'sha';
						}
						if (name == 'sha') nature = 'thunder';
						return {
							audio: 'scqhZhinv_fubing',
							filterCard(card, player) {
								return card == lib.skill.scqhZhinv_fubing_backup.card;
							},
							selectCard: -1,
							position: 'x',
							viewAs: {
								name: name,
								nature: nature,
							},
							card: card,
						};
					},
					prompt(links, player) {
						return '请选择目标';
					},
				},
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter(player, tag, arg) {
						var xs = player.getExpansions('scqhZhinv_fubing');
						if (!xs.length) return false;
					},
					order(item, player) {
						return 1;
					},
					result: {
						player: 1,
					},
				},
				group: 'scqhZhinv_fubing_place',
				subSkill: {
					place: {
						audio: 'scqhZhinv_fubing',
						trigger: {
							player: 'phaseDrawBegin2',
						},
						prompt2: '摸牌阶段,你可以少摸一张牌,将牌堆顶的一张牌置于你的武将牌上,称为「兵」.',
						filter(event, player) {
							return !event.numFixed;
						},
						content() {
							trigger.num--;
							var cards = get.cards();
							player.addToExpansion(cards, 'gain2').gaintag.add('scqhZhinv_fubing');
						},
						sourceSkill: 'scqhZhinv_fubing',
					},
					backup: {
						audio: 'scqhZhinv_fubing',
						sourceSkill: 'scqhZhinv_fubing',
					},
				},
				marktext: '兵',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				onremove(player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
			},
			scqhZhinv_lianpo: {
				audio: 'lianpo',
				trigger: {
					global: 'phaseAfter',
				},
				filter(event, player) {
					return player.getStat('kill') > 0;
				},
				check(event, player) {
					return true;
				},
				content() {
					player.phase('nodelay');
				},
			},
			scqhZhinv_renjie: {
				audio: 'renjie2',
				chargeSkill: true,
				trigger: {
					target: 'useCardToTargeted',
				},
				filter(trigger, player) {
					if (trigger.player == player) return false;
					return true;
				},
				check(trigger, player) {
					let hit = trigger.parent.directHit || [];
					if (hit.includes(player)) return 1;
					if (!get.tag(trigger.card, 'damage')) return 1;
					let card = trigger.card.name;
					let name = false;
					if (card == 'sha') name = 'shan';
					if (card == 'juedou') name = 'sha';
					if (card == 'nanman') name = 'sha';
					if (card == 'wanjian') name = 'shan';
					if (name) {
						const hs = player.getCards('hs', { name: name });
						if (hs.length) return 0;
					}
					return 1;
				},
				prompt(trigger, player) {
					let prompt = '是否发动【忍戒】？';
					let hit = trigger.parent.directHit || [];
					if (hit.includes(player)) {
						prompt += '(你已经不能响应此牌)';
					}
					return prompt;
				},
				content() {
					trigger.parent.directHit.add(player);
					player.addMark('charge', 1, false);
					trigger.parent.card['scqhZhinv_renjie_' + player.playerid] = trigger.player;
				},
				mod: {
					maxHandcard(player, num) {
						return num + player.countMark('charge');
					},
				},
				group: ['scqhZhinv_renjie_damage'],
				subSkill: {
					damage: {
						forced: true,
						trigger: {
							player: 'damageEnd',
						},
						filter(trigger, player) {
							let card = trigger.parent.card;
							if (card) {
								let source = card['scqhZhinv_renjie_' + player.playerid];
								if (get.itemtype(source) != 'player') return false;
								if (!source.isIn()) return false;
								if (!source.countCards(source != player ? 'he' : 'e')) return false;
								return true;
							}
							return false;
						},
						content() {
							'step 0';
							var source = trigger.parent.card['scqhZhinv_renjie_' + player.playerid];
							event.source = source;
							var next = source.chooseCard(source != player ? 'he' : 'e');
							next.prompt = '选择一张牌交给' + get.translation(player);
							next.forced = true;
							next.set('ai', function (card) {
								return 11 - get.value(card);
							});
							('step 1');
							var cards = result.cards || [];
							var source = event.source;
							if (cards.length) source.give(cards, player);
						},
					},
				},
			},
			scqhZhinv_baiyin: {
				derivation: ['scqhZhinv_jilue'],
				audio: 'sbaiyin',
				juexingji: true,
				forced: true,
				trigger: {
					global: 'phaseJieshuBegin',
				},
				filter(trigger, player) {
					var mark = player.countMark('charge');
					return mark >= game.countGroup();
				},
				content() {
					player.awakenSkill(event.name);
					player.addSkills('scqhZhinv_jilue');
					player.phase('nodelay');
				},
			},
			scqhZhinv_jilue: {
				audio: 2,
				enable: 'phaseUse',
				filter(trigger, player) {
					if (!player.countMark('charge')) return false;
					let list = lib.skill.scqhZhinv_jilue.chooseButton.chooseControl(trigger, player);
					return list.length;
				},
				string(name) {
					if (name === '制衡') return 'rezhiheng';
					if (name === '集智') return 'jizhi';
					if (name === '完杀') return 'wansha';
					if (name === '鬼才') return 'guicai';
					if (name === '放逐') return 'fangzhu';
					if (name === 'zhiheng') return '制衡';
					if (name === 'jizhi') return '集智';
					if (name === 'wansha') return '完杀';
					if (name === 'guicai') return '鬼才';
					if (name === 'fangzhu') return '放逐';
					return '';
				},
				chooseButton: {
					dialog(trigger, player) {
						let prompt = '是否支付１蓄力点发动【极略】？';
						let dialog = ui.create.dialog(prompt);
						return dialog;
					},
					chooseControl(trigger, player) {
						const list = [];
						if (player.countCards('he')) list.add('制衡');
						for (const name of ['集智', '放逐', '完杀', '鬼才']) {
							const skill = lib.skill.scqhZhinv_jilue.string(name);
							if (skill && !player.hasSkill('scqhZhinv_jilue_' + skill)) {
								list.add(name);
							}
						}
						return list;
					},
					check(trigger, player) {
						return 0;
					},
					backup(result, player) {
						var info = {};
						if (result.control === '制衡') {
							info = lib.skill.rezhiheng;
						} else {
							info.content = function () {
								var name = lib.skill.scqhZhinv_jilue_backup.jilue || '';
								var skill = lib.skill.scqhZhinv_jilue.string(name);
								var skillname = 'scqhZhinv_jilue_';
								if (skill) {
									skillname += skill;
									if (lib.skill[skillname]) {
										player.addTempSkill(skillname, { player: 'phaseBegin' });
									}
								}
							};
						}
						info.audio = 'scqhZhinv_jilue';
						info.jilue = result.control;
						info.precontent = function () {
							player.removeMark('charge', 1, false);
						};
						return info;
					},
					prompt(result, player) {
						var name = lib.skill.scqhZhinv_jilue_backup.jilue || '';
						if (name === '制衡') return get.prompt2('rezhiheng');
						return '是否获得【' + name + '】直到你的下个回合开始？';
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
				mod: {
					maxHandcard(player, num) {
						return;
						let hand = 0;
						let skill = 'scqhZhinv_jilue';
						let list = lib.skill[skill].subSkill || {};
						let group = lib.skill[skill].group || [];
						for (let name in list) {
							let subSkill = skill + '_' + name;
							if (group.includes(subSkill)) continue;
							if (player.hasSkill(subSkill)) hand++;
						}
						if (hand > 0) return num - hand;
					},
				},
				group: ['scqhZhinv_jilue_add'],
				subSkill: {
					backup: {},
					add: {
						map(trigger, player) {
							let map = {};
							map.ai = false;
							if (trigger.name == 'useCard') {
								map.name = 'jizhi';
								var current = _status.currentPhase;
								map.ai = current && current == player;
							}
							if (trigger.name == 'damage') {
								map.name = 'fangzhu';
								var targets = game.filterPlayer((target) => {
									if (target == player) return false;
									if (target.hasSkillTag('noturn')) return false;
									var current = _status.currentPhase;
									var dis = current ? get.distance(current, target, 'absolute') : 1;
									var draw = player.getDamagedHp();
									var att = get.attitude(player, target);
									if (att == 0) {
										return (target.hasJudge('lebu') ? Math.random() / 3 : Math.sqrt(get.threaten(target)) / 5 + Math.random() / 2) > 0;
									}
									if (att > 0) {
										if (target.isTurnedOver()) return att + draw > 0;
										if (draw < 4) return false;
										if (current && target.seatNum > current.seatNum) return att + draw / 3 > 0;
										return (10 * Math.sqrt(Math.max(0.01, get.threaten(target)))) / (3.5 - draw) + dis / (2 * game.countPlayer()) > 0;
									} else {
										if (target.isTurnedOver()) return att - draw > 0;
										if (draw >= 5) return false;
										if (current && target.seatNum <= current.seatNum) return -att + draw / 3 > 0;
										return (4.25 - draw) * 10 * Math.sqrt(Math.max(0.01, get.threaten(target))) + (2 * game.countPlayer()) / dis > 0;
									}
								});
								map.ai = targets.length;
							}
							if (trigger.name == 'dying') {
								map.name = 'wansha';
								map.ai = false;
							}
							if (trigger.name == 'judge') {
								map.name = 'guicai';
								var cards = player.getCards('hes', (card) => {
									var evt = trigger;
									var judge = evt.player.judging;
									var result = 0;
									if (judge && judge[0]) {
										result = evt.judge(card) - evt.judge(judge[0]);
									}
									var att = get.attitude(player, evt.player);
									var value = get.value(card, player);
									if (!att || !result) return false;
									value = result - value / 2;
									if (att > 0) return value > 0;
									else return -value > 0;
								});
								map.ai = cards.length;
							}
							if (map.name) map.skill = 'scqhZhinv_jilue_' + map.name;
							if (map.skill && lib.skill[map.skill] && !player.hasSkill(map.skill)) {
								map.filter = lib.skill[map.skill].filter;
								if (!map.filter || map.filter(trigger, player)) {
									map.bool = true;
								}
							}
							return map;
						},
						forced: true,
						trigger: {
							player: ['useCard', 'damageEnd'],
							global: ['dying', 'judge'],
						},
						filter(trigger, player) {
							if (!player.countMark('charge')) return false;
							var map = lib.skill.scqhZhinv_jilue_add.map(trigger, player);
							return map.bool;
						},
						async content(event, trigger, player) {
							const map = lib.skill.scqhZhinv_jilue_add.map(trigger, player);
							const result = await player
								.chooseBool()
								.set('map', map)
								.set('prompt', '是否获得【' + get.translation(map.name) + '】？')
								.set('prompt2', get.translation(map.skill + '_info'))
								.set('ai', function () {
									let map = _status.event.map;
									if (map && map.ai) return 1;
									return 0;
								}).forResult();
							if (result.bool) {
								player.removeMark('charge', 1, false);
								player.addTempSkill(map.skill, { player: 'phaseBegin' });
							}
						},
					},
					jizhi: {
						audio: 2,
						name: '集智',
						inherit: 'jizhi',
					},
					wansha: {
						audio: 1,
						name: '完杀',
						inherit: 'wansha',
					},
					fangzhu: {
						audio: 2,
						name: '放逐',
						inherit: 'fangzhu',
					},
					guicai: {
						audio: 2,
						name: '鬼才',
						inherit: 'reguicai',
					},
				},
			},
			scqhZhinv_xianghai: {
				audio: 'xianghai',
				mod: {
					cardname(card) {
						let type = get.type(card, null, false);
						if (type == 'equip') return 'sha';
					},
				},
				global: 'scqhZhinv_xianghai_global',
				subSkill: {
					global: {
						mod: {
							maxHandcard(player, num) {
								let count = game.countPlayer(function (current) {
									if (current == player) return false;
									return current.hasSkill('scqhZhinv_xianghai') && current.inRange(player);
								});
								return num - count;
							},
						},
					},
				},
			},
			scqhZhinv_chuhai: {
				audio: 'chuhai',
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					return true;
				},
				filterTarget(card, player, target) {
					var cardx = {
						name: 'juedou',
					};
					var can = player.canUse(cardx, target, false);
					return can;
				},
				selectTarget: [1, 1],
				content() {
					'step 0';
					var cardx = {
						name: 'juedou',
					};
					player.useCard(cardx, target, false);
					('step 1');
					if (target.countDiscardableCards(player, 'he')) {
						player.discardPlayerCard(target, 'he', true, 'visible');
					}
					('step 2');
					var history = player.getHistory('sourceDamage', function (evt) {
						var card = evt.card;
						if (!card || card.name != 'juedou') return false;
						var evtx = evt.getParent('useCard');
						return evtx.card == card && evtx.parent == event;
					});
					var gamers = game.filterPlayer((current) => {
						if (target == current) return false;
						let cardx = {
							name: 'juedou',
						};
						return player.canUse(cardx, current, false);
					});
					if (!history.length || !gamers.length) event.finish();
					('step 3');
					player
						.chooseTarget(function (card, player, target) {
							let notarget = _status.event.notarget;
							if (notarget && target == notarget) return false;
							let cardx = {
								name: 'juedou',
							};
							return player.canUse(cardx, target, false);
						})
						.set('notarget', target)
						.set('prompt', '请选择【除害】的目标')
						.set('prompt2', '视为对另一名角色使用一张决斗')
						.set('ai', function (target) {
							let cardx = {
								name: 'juedou',
							};
							let player = _status.event.player;
							return get.effect(target, cardx, player);
						})
						.setHiddenSkill(event.name);
					('step 4');
					var targets = result.targets || [];
					if (targets.length) {
						var cardx = {
							name: 'juedou',
						};
						player.useCard(cardx, targets, false);
					}
				},
				ai: {
					order: 9,
					result: {
						player: 1,
						target(player, target) {
							var cardx = {
								name: 'juedou',
							};
							var eff = get.effect(target, cardx, player, player);
							var hs = player.countCards('hs', 'sha');
							var hs2 = target.countCards('hs', 'sha');
							if (hs <= hs2 || eff <= 0) return -1;
							return 1;
						},
					},
				},
			},
			scqhZhinv_pojun: {
				audio: 'repojun',
				shaRelated: true,
				trigger: {
					player: 'useCardToPlayered',
				},
				filter(trigger, player) {
					if (!trigger.card) return false;
					if (trigger.card.name != 'sha') return false;
					if (trigger.target.hp <= 0) return false;
					if (trigger.target.countCards('he') <= 0) return false;
					return true;
				},
				check(trigger, player) {
					var att = get.attitude(player, trigger.target);
					return att <= 0;
				},
				logTarget: 'target',
				popup: false,
				log: false,
				content() {
					'step 0';
					var target = trigger.target;
					if (target.hp > 0 && target.countCards('he')) {
						var next = player.choosePlayerCard(target, 'he', [1, Math.min(target.hp, target.countCards('he'))], get.prompt(event.name, target));
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
					if (result && result.bool) {
						var target = trigger.target;
						var cards = result.cards || [];
						if (cards.length) {
							target.addSkill('repojun2');
							target.addToExpansion('giveAuto', cards, target).gaintag.add('repojun2');
						}
					}
					('step 2');
					var target = trigger.target;
					var hs = player.countCards('h') >= target.countCards('h');
					var es = player.countCards('e') >= target.countCards('e');
					if (hs && es) {
						var id = target.playerid;
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
			scqhZhinv_yicheng: {
				trigger: {
					global: 'useCardToTargeted',
				},
				filter(trigger, player) {
					if (trigger.card.name != 'sha') return false;
					if (!trigger.target.isIn()) return false;
					return trigger.target.group == player.group;
				},
				check(trigger, player) {
					return get.attitude(player, trigger.target) >= 0;
				},
				logTarget: 'target',
				content() {
					'step 0';
					trigger.target.draw(2);
					('step 1');
					var hs = trigger.target.getCards('he');
					if (hs.length > 1) {
						var next = trigger.target.chooseToDiscard(2, 'he', '除非弃置两张牌,否则你翻面');
						next.set('ai', function (card) {
							return -get.value(card);
						});
					} else
						event._result = {
							bool: false,
						};
					('step 2');
					if (!result.bool) trigger.target.turnOver();
				},
			},
			scqhZhinv_huiwanxusheng: {
				forced: true,
				trigger: {
					player: 'phaseUseBegin',
				},
				content() {
					var list = ['tiesuo', 'guding', 'jiu', 'sha'];
					var temp = 'scqhZhinv_huiwanxusheng_temp';
					player.storage[temp] = list.sort(function (a, b) {
						return Math.random() - 0.5;
					});
					player.addTempSkill(temp);
				},
				subfrequent: ['temp'],
				subSkill: {
					temp: {
						mark: true,
						marktext: '会玩',
						intro: {
							content(storage, player, skill) {
								if (storage) return get.translation(storage);
								else return '';
							},
						},
						forced: true,
						trigger: {
							player: 'useCardAfter',
						},
						huiwan(trigger, player) {
							let storage = player.storage.scqhZhinv_huiwanxusheng_temp || [];
							let name = false;
							for (var i = 0; i < storage.length; i++) {
								let subname = storage[i + 1];
								if (subname && storage[i] == trigger.card.name) {
									name = subname;
									break;
								}
							}
							if (name) {
								let card = get.cardPile(function (card) {
									return card.name == name;
								});
								if (card) return card;
							}
							return false;
						},
						filter(trigger, player) {
							var skill = lib.skill.scqhZhinv_huiwanxusheng_temp || {};
							if (skill.huiwan && skill.huiwan(trigger, player)) return true;
							return false;
						},
						content() {
							var skill = lib.skill.scqhZhinv_huiwanxusheng_temp || {};
							var card = skill.huiwan(trigger, player);
							if (card) player.gain(card, 'gain2');
						},
					},
				},
			},
			scqhZhinv_jiaoniang: {
				audio: 'xinfu_wuniang',
				popup: false,
				log: false,
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(trigger, player) {
					var gamers = game.filterPlayer((current) => current != player);
					var hs = player.getCards('he', { color: 'red' });
					if (!gamers.length || !hs.length) return false;
					var filter = trigger.filterCard;
					if (filter({ name: 'sha' }, player, trigger)) {
						player.storage.scqhZhinv_jiaoniang = 'sha';
						return true;
					}
					if (filter({ name: 'shan' }, player, trigger)) {
						player.storage.scqhZhinv_jiaoniang = 'shan';
						return true;
					}
					return false;
				},
				filterCard: {
					color: 'red',
				},
				selectCard: 1,
				position: 'he',
				viewAs(cards, player) {
					var storage = player.storage.scqhZhinv_jiaoniang || false;
					if (storage)
						return {
							name: storage,
							suit: 'none',
							number: undefined,
							cards: [],
							storage: {
								scqhZhinv_jiaoniang: true,
							},
						};
					return null;
				},
				check(card) {
					var player = _status.event.player;
					var value = get.value(card, player);
					return 8 - value;
				},
				precontent() {
					'step 0';
					event.show = event.result.cards || [];
					event.result.cards = [];
					event.result.card.cards = [];
					event.result.card.number = undefined;
					var gamers = game.filterPlayer((current) => current != player);
					if (gamers.length > 1) {
						var next = player.chooseTarget(true, function (card, player, target) {
							if (player == target) return false;
							return true;
						});
						next.set('prompt', '请选择【娇娘】的目标,将' + get.translation(event.show) + '交给该角色');
						next.set('cards', event.show);
						next.set('ai', function (target) {
							let cards = _status.event.cards;
							let player = _status.event.player;
							let att = get.attitude(player, target);
							if (cards.length) {
								if (cards[0].name == 'du') return att <= 0;
							}
							return att >= 1;
						});
					} else
						event._result = {
							bool: true,
							targets: gamers,
						};
					('step 1');
					var target = (result.targets || [])[0] || false;
					var cards = event.show || [];
					if (target && cards.length) {
						player.showCards(cards);
						player.give(cards, target, 'give');
					}
				},
				ai: {
					order() {
						return 3;
					},
					respondSha: true,
					respondShan: true,
				},
			},
			scqhZhinv_xushen: {
				audio: 'xinfu_xushen',
				limited: true,
				forced: true,
				trigger: {
					player: 'recoverBegin',
				},
				filter(trigger, player) {
					if (!trigger.source) return false;
					if (!player.isDying()) return false;
					return true;
				},
				content() {
					trigger[event.name] = true;
					var next = game.createEvent(event.name);
					next.player = player;
					next.source = trigger.source;
					next.setContent(lib.skill[event.name].xushenAfter);
					event.next.remove(next);
					trigger.after.push(next);
				},
				xushenAfter() {
					'step 0';
					if (!event.source) event.source = player;
					if (player.isDying()) event.finish();
					('step 1');
					var next = player.chooseBool(get.prompt2(event.name, event.source));
					next.att = get.attitude(player, event.source);
					next.source = event.source;
					next.ai = function () {
						let att = _status.event.att;
						return att > 0;
					};
					('step 2');
					if (result.bool) {
						player.awakenSkill(event.name);
						var next = game.createEvent(event.name);
						next.player = player;
						next.setContent(function () {
							player.gainMaxHp();
							player.addSkill('scqhZhinv_shuyong');
						});
						event.next.remove(next);
						event.after.push(next);
					} else event.finish();
					('step 3');
					var source = event.source;
					var bool = true;
					var name = '';
					var list = [];
					if (source.name1) {
						var sex1 = lib.character[source.name1][0];
						if (sex1 == 'male') list.add(source.name1);
						name = get.translation(source.name1) || '';
						if (name.includes('关索')) bool = false;
					}
					if (source.name2) {
						var sex2 = lib.character[source.name2][0];
						if (sex2 == 'male') list.add(source.name2);
						name = get.translation(source.name2) || '';
						if (name.includes('关索')) bool = false;
					}
					if (bool) {
						if (!source.name2) {
							var map = {
								hp: source.hp,
								maxHp: source.maxHp,
								hujia: source.hujia,
							};
							source.init(source.name, 'guansuo');
							source.maxHp = map.maxHp;
							source.hp = map.hp;
							source.hujia = map.hujia;
							source.update();
							event.finish();
						} else if (list.length > 1) {
							var next = source.chooseControl(list);
							next.set('prompt', '请选择要更换成【关索】的武将牌');
						} else if (list.length == 1) {
							event._result = { control: list[0] };
						} else event.finish();
					} else event.finish();
					('step 4');
					if (result.control) {
						var source = event.source;
						source.reinitCharacter(result.control, 'guansuo');
					}
				},
			},
			scqhZhinv_shuyong: {
				audio: 'xinfu_wuniang',
				trigger: {
					player: ['useCard', 'respond'],
				},
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
				filter(trigger, player) {
					if (trigger.card.name != 'sha') return false;
					let targets = lib.skill.scqhZhinv_shuyong.logTarget(trigger, player) || [];
					return targets.length;
				},
				check(trigger, player) {
					return true;
				},
				content() {
					var targets = lib.skill.scqhZhinv_shuyong.logTarget(trigger, player) || [];
					for (let target of targets) {
						player.gainPlayerCard(target, 'he', true);
						target.draw();
					}
					if (trigger.name == 'useCard') {
						var next = game.createEvent(event.name);
						next.player = player;
						next._trigger = trigger;
						next.setContent(lib.skill[event.name].shuyongAfter);
						event.next.remove(next);
						trigger.after.push(next);
					}
				},
				shuyongAfter() {
					'step 0';
					var targets = (trigger.targets || []).filter((target) => {
						return target.canUse('juedou', player);
					});
					if (targets.length) {
						var next = player.chooseTarget(function (card, player, target) {
							let targets = _status.event.targets;
							return targets.includes(target);
						});
						next.set('prompt', '请选择【姝勇】的目标,令其视为对你使用一张【决斗】');
						next.set('targets', targets);
						next.set('ai', function (target) {
							let player = _status.event.player;
							let att = get.attitude(player, target);
							let eff = get.effect(target, { name: 'juedou' }, player);
							return att <= 0 && eff > 0;
						});
					} else event.finish();
					('step 1');
					var target = (result.targets || [])[0] || false;
					if (target) {
						target.useCard({ name: 'juedou' }, player);
					}
				},
			},
			scqhZhinv_狂禅: {
				audio: 'dangxian',
				init(player) {
					if (!player.isZhu) {
						player.maxHp++;
						player.hp = player.maxHp;
						player.update();
					}
				},
				mod: {
					ignoredHandcard(card, player) {
						if (!player.isZhu && ['sha', 'jiu', 'tao'].includes(card.name)) return true;
					},
					cardDiscardable(card, player, name) {
						if (!player.isZhu && ['sha', 'jiu', 'tao'].includes(card.name)) {
							if (name == 'phaseDiscard') return false;
						}
					},
				},
				forced: true,
				trigger: {
				},
				filter(event, player) {
					return !player.isZhu;
				},
				content() {
					trigger.cancel();
				},
				ai: {
					neg: true,
				},
			},
			scqhZhinv_底力: {
				forced: true,
				mod: {
					maxHandcard(player, num) {
					},
					cardUsable(card, player, num) {
						if (['sha', 'jiu'].includes(card.name)) return num + player.getDamagedHp();
					},
				},
				trigger: {
					player: 'phaseDrawBegin2',
				},
				filter(event, player, name) {
					return player.getDamagedHp() && player.getDamagedHp() != Infinity;
				},
				content() {
					trigger.num += player.getDamagedHp();
				},
				ai: {
					maixie: true,
				},
			},
			scqhZhinv_budao: {
				forced: true,
				trigger: {
					player: ['drawBegin'],
				},
				filter(trigger, player) {
					return true;
				},
				content() {
					trigger.num++;
					var next = player.when('drawAfter');
					next.filter((evt, player) => {
						return trigger == evt && player.countCards('h');
					});
					next.then(() => {
						var next = game.createEvent('scqhZhinv_budao');
						next.player = player;
						next.setContent(lib.skill.scqhZhinv_budao.contentx);
					});
				},
				contentx() {
					'step 0';
					player.chooseCardTarget({
						prompt: get.prompt(event.name),
						prompt2: '将任意一张手牌交给一名其他角色',
						position: 'h',
						selectCard: 1,
						filterCard: true,
						filterTarget(card, player, target) {
							return target != player;
						},
						ai1(card) {
							var player = _status.event.player;
							if (ui.selected.cards.length) return -1;
							if (card.name == 'du') return 20;
							return player.countCards('h') - player.hp;
						},
						ai2(target) {
							var player = _status.event.player;
							var cards = ui.selected.cards || [];
							var att = get.attitude(player, target);
							if (cards.length && cards[0].name == 'du') {
								return 1 - att;
							}
							return att - 4;
						},
					});
					('step 1');
					var targets = result.targets || [];
					var cards = result.cards || [];
					if (result && result.bool && targets.length && cards.length) {
						player.line(targets, 'green');
						player.give(cards, targets[0], 'give');
					} else event.finish();
					('step 2');
					var target = result.targets[0];
					var card = result.cards[0];
					if (target && card && target.isIn() && target.getCards('h').includes(card) && get.type(card) == 'equip') {
						target.chooseUseTarget(card);
					}
				},
			},
			scqhZhinv_taiji: {
				zhuanhuanji: true,
				map(player, trigger) {
					let map = {};
					map.storage = player.storage.scqhZhinv_taiji || false;
					map.names = ['sha', 'shan'];
					map.type = 'basic';
					if (map.storage) {
						map.names = ['wuxie', 'wangmeizhike'];
						map.type = 'trick';
					}
					map.cards = player.getCards('hes', function (card) {
						return get.type2(card) != map.type;
					});
					map.list = [];
					if (trigger) {
						for (var name of map.names) {
							let card = { name: name };
							let filter = trigger.filterCard(card, player, trigger);
							if (filter) map.list.push([get.type2(name), '', name]);
						}
					}
					return map;
				},
				enable: 'chooseToUse',
				filter(trigger, player) {
					let map = lib.skill.scqhZhinv_taiji.map(player, trigger);
					if (!map || !map.cards || !map.cards.length) return false;
					if (!map.list || !map.list.length) return false;
					return true;
				},
				chooseButton: {
					dialog(trigger, player) {
						let map = lib.skill.scqhZhinv_taiji.map(player, trigger);
						let dialog = ui.create.dialog('太极', [map.list, 'vcard']);
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
						return {
							popname: true,
							filterCard(card, player) {
								let storage = player.storage.scqhZhinv_taiji || false;
								let type = 'trick';
								if (!storage) type = 'basic';
								return get.type2(card) != type;
							},
							selectCard() {
								return 1;
							},
							position: 'hes',
							check(card) {
								return 20 - get.value(card);
							},
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
								scqhZhinv_taiji: true,
							},
							precontent() {
								player.changeZhuanhuanji('scqhZhinv_taiji');
							},
						};
					},
					prompt(links, player) {
						return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出';
					},
				},
				hiddenCard(player, name) {
					let map = lib.skill.scqhZhinv_taiji.map(player);
					if (!map || !map.cards || !map.cards.length) return false;
					return map.names && map.names.includes(name);
				},
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter(player, tag, arg) {
						return player.countCards('hes');
					},
					order(item, player) {
						return 1;
					},
					result: {
						player: 1,
					},
				},
			},
			scqhZhinv_qizhi: {
				forced: true,
				trigger: {
					player: 'useCard',
				},
				filter(trigger, player) {
					if (!trigger.targets) return false;
					let current = _status.currentPhase;
					if (!current || current != player) return false;
					let type = get.type(trigger.card, 'trick');
					if (type != 'basic' && type != 'trick') return false;
					return game.hasPlayer(function (target) {
						return !trigger.targets.includes(target);
					});
				},
				content() {
					'step 0';
					var next = player.chooseTarget(function (card, player, target) {
						return !_status.event.targets.includes(target);
					});
					next.set('prompt', get.prompt(event.name));
					next.set('prompt2', '弃置一名角色的一张牌,其摸一张牌');
					next.set('targets', trigger.targets);
					next.set('ai', function (target) {
						let player = _status.event.player;
						if (target == player) return 2;
						let att = get.attitude(player, target);
						if (att <= 0) {
							if (!target.countCards('he')) return 0;
						} else {
							return 1;
						}
						return 0.5;
					});
					('step 1');
					var targets = result.targets || [];
					var target = targets[0] || false;
					if (target) {
						player.discardPlayerCard(target, true, 'he');
						target.draw();
					}
				},
			},
			scqhZhinv_tuntian: {
				forced: true,
				audio: 'tuntian',
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(trigger, player, name) {
					if (player.hasSkill('scqhZhinv_zaoxian_temp')) return false;
					let evt = trigger.getl(player);
					let cut = _status.currentPhase;
					if (!evt || !evt.cards2 || !evt.cards2.length) return false;
					if (cut && cut == player) {
						if (trigger.type != 'discard') return false;
						let ds = evt.cards2.filter(function (card) {
							return get.name(card, evt.hs.includes(card) ? player : false) == 'sha';
						});
						if (!ds.length) return false;
					}
					if (trigger.name == 'gain' && trigger.player == player) return false;
					return true;
				},
				content() {
					var next = player.judge(function (card) {
						if (card.suit == 'heart') return -1;
						return 1;
					});
					next.judge2 = function (result) {
						return result.bool;
					};
					next.callback = lib.skill[event.name].callback;
				},
				callback() {
					'step 0';
					if (event.judgeResult.suit == 'heart') {
						player.gain(card, 'gain2');
					} else player.addToExpansion(card, 'gain2').gaintag.add('scqhZhinv_tuntian');
				},
				marktext: '田',
				intro: {
					name: '屯田',
					content: 'expansion',
					markcount: 'expansion',
				},
				onremove(player, skill) {
					var xs = player.getExpansions(skill);
					if (xs.length) player.loseToDiscardpile(xs);
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (!target.hasFriend() && !player.hasUnknown()) return;
							if (_status.currentPhase == target) return;
							if (card.name != 'shuiyanqijunx' && get.tag(card, 'loseCard') && target.countCards('he')) {
								return [0.5, Math.max(2, target.countCards('h'))];
							}
							if (target.isUnderControl(true, player)) {
								if ((get.tag(card, 'respondSha') && target.countCards('h', 'sha')) || (get.tag(card, 'respondShan') && target.countCards('h', 'shan'))) {
									if (target.hasSkill('ziliang')) return 0.7;
									return [0.5, 1];
								}
							} else if (get.tag(card, 'respondSha') || get.tag(card, 'respondShan')) {
								if (get.attitude(player, target) > 0 && card.name == 'juedou') return;
								if (get.tag(card, 'damage') && target.hasSkillTag('maixie')) return;
								if (target.countCards('h') == 0) return 2;
								return [0.5, Math.max(target.countCards('h') / 4, target.countCards('h', 'sha') + target.countCards('h', 'shan'))];
							}
						},
					},
					threaten(player, target) {
						if (target.countCards('h') == 0) return 2;
						return 0.5;
					},
				},
			},
			scqhZhinv_zaoxian: {
				trigger: {
					global: 'phaseZhunbeiBegin',
				},
				filter(trigger, player) {
					var xs = player.getExpansions('scqhZhinv_tuntian');
					return xs.length >= 3;
				},
				check() {
					return 1;
				},
				content() {
					player.addTempSkill('scqhZhinv_jixi', { player: 'phaseUseAfter' });
					player.addTempSkill('scqhZhinv_zaoxian_temp', { player: 'phaseUseAfter' });
					game.updateRoundNumber();
					const next5 = player.phaseUse();
					event.next.remove(next5);
					trigger.after.push(next5);
				},
				subSkill: {
					temp: {
						charlotte: true,
					},
				},
			},
			scqhZhinv_jixi: {
				mod: {
					globalFrom(from, to, distance) {
						let xs = from.getExpansions('scqhZhinv_tuntian');
						var num = distance - xs.length;
						if (_status.event.skill == 'scqhZhinv_jixi_backup') num++;
						return num;
					},
				},
				audio: 'jixi',
				enable: 'phaseUse',
				filter(trigger, player) {
					let xs = player.getExpansions('scqhZhinv_tuntian');
					let card = { name: 'shunshou' };
					let gamers = game.filterPlayer(function (current) {
						return player.canUse(card, current);
					});
					if (!xs.length || !gamers.length) return false;
					return trigger.filterCard(card, player, trigger);
				},
				chooseButton: {
					dialog(trigger, player) {
						let xs = player.getExpansions('scqhZhinv_tuntian');
						return ui.create.dialog('急袭', xs, 'hidden');
					},
					filter(button, player) {
						var card = button.link;
						if (!game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return false;
						var evt = _status.event.parent;
						return evt.filterCard({ name: 'shunshou' }, player, evt);
					},
					backup(links, player) {
						var skill = _status.event.buttoned;
						return {
							audio: 'jixi',
							selectCard: -1,
							position: 'x',
							filterCard: skill == 'scqhZhinv_jixi' ? (card) => card == lib.skill.scqhZhinv_jixi_backup.card : (card) => card == lib.skill.scqhZhinv_jixi_backup.card,
							viewAs: {
								name: 'shunshou',
								scqhZhinv_jixi: true,
							},
							card: links[0],
							precontent() { },
						};
					},
					prompt(links, player) {
						return '选择 顺手牵羊(' + get.translation(links[0]) + ')的目标';
					},
				},
				ai: {
					order: 10,
					result: {
						player(player) {
							let xs = player.getExpansions('scqhZhinv_tuntian');
							return xs.length;
						},
					},
				},
			},
			scqhZhinv_qiyi: {
				audio: 2,
				onremove(player, skill) {
					player.removeGaintag(skill);
				},
				enable: 'chooseToUse',
				prompt: '锦囊牌当【无懈可击】、基本牌当【桃】、装备牌当【杀】使用.',
				isBool(trigger, player, filter, card) {
					let skill = 'scqhZhinv_qiyi';
					let map = {
						tao: 'basic',
						sha: 'equip',
						wuxie: 'trick',
					};
					for (let name in map) {
						let cardx = {};
						cardx.name = name;
						if (card) cardx.cards = [card];
						if (!card.hasGaintag(skill)) continue;
						if (!filter(cardx, player, trigger)) continue;
						if (get.type2(card) != map[name]) continue;
						return true;
					}
					return false;
				},
				filter(trigger, player) {
					let skill = 'scqhZhinv_qiyi';
					let hs = player.getCards('h', function (card) {
						let filter = trigger.filterCard;
						let bool = lib.skill[skill].isBool(trigger, player, filter, card);
						return bool;
					});
					return hs.length;
				},
				position: 'h',
				filterCard(card, player, trigger) {
					trigger = trigger || _status.event;
					let filter = trigger._backup.filterCard;
					let skill = 'scqhZhinv_qiyi';
					let bool = lib.skill[skill].isBool(trigger, player, filter, card);
					return bool;
				},
				viewAs(cards, player) {
					let map = {};
					map.name = false;
					switch (get.type2(cards[0], player)) {
						case 'equip': {
							map.name = 'sha';
							break;
						}
						case 'basic': {
							map.name = 'tao';
							break;
						}
						case 'trick': {
							map.name = 'wuxie';
							break;
						}
					}
					if (map.name) return map;
					return null;
				},
				check(card) {
					return 8 - get.value(card);
				},
				hiddenCard(player, name) {
					if (name == 'wuxie')
						return player.countCards('hes', function (card) {
							return card.hasGaintag('scqhZhinv_qiyi') && get.type2(card) == 'trick';
						});
					return false;
				},
				ai: {
					respondSha: true,
					save: true,
					fireAttack: true,
					order() {
						return 3.0;
					},
					result: {
						player: 1,
					},
				},
				group: ['scqhZhinv_qiyi_gain'],
				subSkill: {
					gain: {
						forced: true,
						trigger: {
							player: ['drawBegin', 'damageBegin3'],
						},
						filter(trigger, player) {
							let currents = game.filterPlayer((current) => {
								if (player == current) return false;
								return current.countGainableCards(player, 'he');
							});
							return currents.length;
						},
						content() {
							'step 0';
							var prompt = '';
							prompt += '你可以获得至多';
							prompt += get.cnNumber(trigger.num);
							prompt += '名其他角色的各一张牌,';
							if (trigger.name == 'draw') {
								prompt += '少摸一张牌';
							} else {
								prompt += '增加一点伤害';
							}
							var next = player.chooseTarget(function (card, player, target) {
								if (player == target) return false;
								return target.countGainableCards(player, 'he');
							});
							next.set('prompt', get.prompt(event.name));
							next.set('prompt2', prompt);
							next.set('selectTarget', [1, trigger.num]);
							next.set('ai', function (target) {
								var player = _status.event.player;
								var att = get.attitude(player, target);
								if (target.hasSkill('tuntian')) return att / 10;
								return 1 - att;
							});
							('step 1');
							var targets = result.targets || [];
							if (targets.length) {
								for (let target of targets) {
									let next = game.createEvent(event.name);
									next.target = target;
									next.player = player;
									next.setContent(lib.skill[event.name].gain);
								}
								if (trigger.name == 'draw') {
									trigger.num--;
								} else {
									trigger.num++;
								}
							}
						},
						gain() {
							'step 0';
							if (target.isIn() && target.countGainableCards(player, 'he')) {
								var next = player.gainPlayerCard(target, 'he', true);
								next.set('ai', function (button) {
									var card = button.link;
									var player = _status.event.player;
									return get.value(card);
								});
							} else event.finish();
							('step 1');
							var cards = result.cards || [];
							if (cards.length) {
								player.addGaintag(cards, 'scqhZhinv_qiyi');
							}
						},
						ai: {
							threaten: 1.6,
							expose: 0.2,
						},
					},
				},
			},
			scqhZhinv_longnu: {
				audio: 'nzry_longnu',
				mark: true,
				zhuanhuanji: true,
				marktext: '☯',
				intro: {
					content(storage, player, skill) {
						return '';
					},
				},
				forced: true,
				trigger: {
					player: 'phaseUseBegin',
				},
				content() {
					player.changeZhuanhuanji(event.name);
					var storage = player.storage[event.name] || false;
					var skill = event.name + '_' + storage;
					player.addTempSkill(skill);
					if (storage) {
						player.recover();
					} else {
						player.loseMaxHp();
					}
				},
				ai: {
					fireAttack: true,
					halfneg: true,
					threaten: 1.05,
				},
				subSkill: {
					true: {
						charlotte: true,
						mod: {
							cardname(card, player) {
								if (get.color(card) == 'red') return 'sha';
							},
							cardnature(card, player) {
								if (get.color(card) == 'red') return 'fire';
							},
							targetInRange(card) {
								if (get.color(card) == 'red') return true;
							},
						},
						ai: {
							effect: {
								target(card, player, target, current) {
									if (get.tag(card, 'respondSha') && current < 0) return 0.6;
								},
							},
							respondSha: true,
						},
					},
					false: {
						charlotte: true,
						mod: {
							cardname(card, player) {
								if (['trick', 'delay'].includes(lib.card[card.name].type)) return 'sha';
							},
							cardnature(card, player) {
								if (['trick', 'delay'].includes(lib.card[card.name].type)) return 'thunder';
							},
							cardUsable(card, player) {
								if (card.name == 'sha') return Infinity;
							},
						},
						ai: {
							effect: {
								target(card, player, target, current) {
									if (get.tag(card, 'respondSha') && current < 0) return 0.6;
								},
							},
							respondSha: true,
						},
					},
				},
			},
			scqhZhinv_jieyingliubei: {
				audio: 'nzry_jieying',
				ai: {
					effect: {
						target(card) {
							if (card.name == 'tiesuo') return 'zeroplayertarget';
						},
					},
				},
				global: 'scqhZhinv_jieyingliubei_global',
				group: ['scqhZhinv_jieyingliubei_link', 'scqhZhinv_jieyingliubei_draw', 'scqhZhinv_jieyingliubei_jieshu'],
				subSkill: {
					link: {
						audio: 'nzry_jieying',
						forced: true,
						preHidden: true,
						trigger: {
							player: ['linkBefore', 'showCharacterAfter'],
							global: 'phaseBefore',
						},
						filter(trigger, player) {
							if (trigger.name == 'link') return player.isLinked();
							else return !player.isLinked();
						},
						content() {
							if (trigger.name == 'link') trigger.cancel();
							else player.link(true);
						},
					},
					draw: {
						audio: 'nzry_jieying',
						forced: true,
						preHidden: true,
						trigger: {
							player: 'phaseDrawBegin2',
						},
						filter(trigger, player) {
							if (trigger.numFixed) return false;
							var players = game.filterPlayer((current) => current.isLinked());
							return players.length;
						},
						content() {
							var players = game.filterPlayer((current) => {
								return current.isLinked();
							});
							trigger.num += players.length;
						},
					},
					jieshu: {
						audio: 'nzry_jieying',
						forced: true,
						preHidden: true,
						trigger: {
							player: 'phaseJieshuBegin',
						},
						filter(trigger, player) {
							return game.hasPlayer(function (current) {
								return current != player && !current.isLinked();
							});
						},
						content() {
							'step 0';
							var next = player.chooseTarget(true, '请选择【结营】的目标', function (card, player, target) {
								return target != player && !target.isLinked();
							});
							next.ai = function (target) {
								return 1 + Math.random();
							};
							('step 1');
							var targets = result.targets || [];
							if (targets.length) {
								player.line(result.targets);
								targets[0].link(true);
							}
						},
					},
					global: {
						mod: {
							maxHandcard(player, num) {
								var players = game.filterPlayer((current) => {
									return current.hasSkill('scqhZhinv_jieyingliubei');
								});
								var players2 = game.filterPlayer((current) => {
									return current.isLinked();
								});
								if (players.length && players2.length && player.isLinked()) return num + players2.length;
							},
						},
					},
				},
			},
		},
		translate: {
			scqhZhinv_longnu: '龙怒',
			scqhZhinv_longnu_info: ['<font color = #b0d0e2>阴</font>', '<font color = #ffddb9>阳</font>', '技,锁定技,出牌阶段开始时,你「', '<font color = #ffddb9>回复一点体力</font>', '／', '<font color = #b0d0e2>扣一点体力上限</font>', '」,你于本回合内使用【杀】无「', '<font color = #ffddb9>距离</font>', '／', '<font color = #b0d0e2>次数</font>', '」限制且「', '<font color = #ffddb9>红色</font>', '／', '<font color = #b0d0e2>锦囊</font>', '」牌均视为「', '<font color = #ffddb9>火</font>', '／', '<font color = #b0d0e2>雷</font>', '」【杀】.'].join(''),
			scqhZhinv_longnu_nuzhan: '怒斩',
			scqhZhinv_longnu_nuzhan_info: '锁定技,你使用的由锦囊牌转化的【杀】不计入次数限制;你使用的由装备牌转化的【杀】伤害基数加一.',
			scqhZhinv_longnu_liyong: '厉勇',
			scqhZhinv_longnu_liyong_info: '锁定技,当你使用的【杀】被【闪】抵消时,你获得如下效果:你使用的下一张【杀】不可被响应且伤害基数加一.',
			scqhZhinv_jieyingliubei: '结营',
			scqhZhinv_jieyingliubei_info: '锁定技.①你始终处于连环状态.②处于连环状态的角色的手牌上限加Ｘ.③摸牌阶段,你多摸Ｘ张牌.④结束阶段,你令一名其他角色进入连环状态.(Ｘ为场上处于连环状态的角色数)',
			scqhZhinv_kangkai: '慷忾',
			scqhZhinv_kangkai_info: '当一名角色成为【杀】的目标后,若你与其距离在１以内,你可以摸一张牌,选择一项:⒈交给其一张牌,若为装备牌,其可以使用之;⒉代替其成为此【杀】的目标,并且令其获得〖飞影〗直到回合结束.',
			scqhZhinv_xueji: '血祭',
			scqhZhinv_xueji_info: '出牌阶段限一次,你可以弃置一张红色牌,让至多Ｘ名其他角色进入连环状态,对首选的目标角色造成一点火焰伤害(Ｘ为你已损失的体力值且至少为１).',
			scqhZhinv_wuji: '武继',
			scqhZhinv_wuji_info: ['使命技,锁定技,当你对一名角色造成伤害后,你于此回合内对其使用牌无次数限制,若此次伤害为火属性,你摸一张牌,其摸一张牌.', '<font color = #70DB93>◆成功:结束阶段,若你于本回合内造成了至少３点伤害,你回复１点体力并获得【父魂※】和【父荫※】.</font>', '<font color = #FF7F00>◆失败:……</font>'].join('</br>'),
			scqhZhinv_fuhun: '父魂',
			scqhZhinv_fuhun_info: '你可以将两张手牌当做【杀】使用或打出;若包含♦️️牌,则无距离限制;若包含♥️️牌,则你摸一张牌.',
			scqhZhinv_fuyin: '父荫',
			scqhZhinv_fuyin_info: '锁定技,你每回合第一次成为【杀】或【决斗】的目标后,若你的手牌数小于等于该角色,此牌对你无效.',
			scqhZhinv_leijie: '雷劫',
			scqhZhinv_leijie_info: '每当你使用或打出的【闪】结算完毕后,你可以进行判定.每当你的判定牌生效后,若判定结果是♠️️,你可以对一名其他角色造成一点雷属性伤害.',
			scqhZhinv_guidao: '鬼道',
			scqhZhinv_guidao_info: '一名角色的判定牌生效前,你可以用一张黑色牌替换之.若如此做,改判的花色为:♣️️,你下次造成雷属性伤害后,回复一点体力或摸一张牌;♠️️,你下次造成雷属性伤害+1.',
			scqhZhinv_fubing: '符兵',
			scqhZhinv_fubing_info: '摸牌阶段,你可以少摸一张牌,将牌堆顶的一张牌置于武将牌上,称为「兵」.你可以将一张「兵」当做【闪】或雷【杀】使用或打出.',
			scqhZhinv_renjie: '忍戒',
			scqhZhinv_renjie_info: '蓄力技(０／∞).当你成为其他角色使用牌的目标后,你可以令自己不能响应此牌并获得１点蓄力值.若如此做,当你因此牌受到伤害后,其需要交给你一张牌.你的手牌上限加Ｘ(Ｘ为你的蓄力值).',
			scqhZhinv_baiyin: '拜印',
			scqhZhinv_baiyin_info: '觉醒技,一名角色的结束阶段,若你的蓄力值不小于场上的势力数,则你获得技能【极略】并获得一个额外的回合.',
			scqhZhinv_lianpo: '连破',
			scqhZhinv_lianpo_info: '一名角色的回合结束时,若你本回合内击杀过角色,则你可以获得一个额外的回合.',
			scqhZhinv_jilue: '极略',
			scqhZhinv_jilue_info: '出牌阶段或恰当的时机,你可以消耗１点蓄力值,选择恰当的一项:⒈发动【制衡】;⒉获得【集智】;⒊获得【放逐】;⒋获得【完杀】;⒌获得【鬼才】,直到你的下个回合开始.',
			scqhZhinv_xianghai: '乡害',
			scqhZhinv_xianghai_info: '锁定技.①你手牌中的所有装备牌均视为【杀】.②处于你的攻击范围内的其他角色的手牌上限-1.',
			scqhZhinv_chuhai: '除害',
			scqhZhinv_chuhai_info: '出牌阶段限一次,你可以视为对一名角色使用一张【决斗】.若你造成了伤害,则观看其手牌并弃置其一张牌,你可以视为对另一名角色使用一张【决斗】.',
			scqhZhinv_jiaoniang: '娇娘',
			scqhZhinv_jiaoniang_info: '当你需要使用或打出一张【杀】或【闪】时,你可以展示一张红色牌并交给一名其他角色,你视为使用或打出了一张此刻需要使用或打出的牌.',
			scqhZhinv_xushen: '许身',
			scqhZhinv_xushen_info: '限定技,当一名角色帮你脱离濒死状态后,你可以令其将一张男性武将牌替换为【关索】(若其没有副将,则将【关索】添加至其副将),你增加一点体力上限并获得<姝勇※>.',
			scqhZhinv_shuyong: '姝勇',
			scqhZhinv_shuyong_info: '当你使用或打出【杀】时,你可以获得对方的一张牌,其摸一张牌.若如此做,此牌结算结束后,你可以令此牌的一个目标角色视为对你使用一张【决斗】.',
			scqhZhinv_qizhi: '奇制',
			scqhZhinv_qizhi_info: '当你于回合内使用基本牌或锦囊牌时,你可以选择此牌目标之外的一名角色,弃置其一张牌,其摸一张牌.',
			scqhZhinv_tuntian: '屯田',
			scqhZhinv_tuntian_info: '当你于回合外失去牌后,或于你的回合内弃置【杀】后,你可以进行判定,若结果为:♥️️,则你获得此判定牌;非♥️️,则将判定牌置于你的武将牌上,称为田.',
			scqhZhinv_zaoxian: '凿险',
			scqhZhinv_zaoxian_info: '每名角色的准备阶段,若田的数量不小于３,你可以获得一个额外的出牌阶段,你于此阶段内不能发动【屯田】且视为拥有【急袭】.',
			scqhZhinv_jixi: '急袭',
			scqhZhinv_jixi_info: '出牌阶段,你可以将一张<田>当做【顺手牵羊】使用.你计算与其他角色的距离减Ｙ(Ｙ为田的数量).',
			scqhZhinv_qiyi: '起义',
			scqhZhinv_qiyi_info: '当你摸牌时／受到伤害时,你可以获得至多Ｘ名其他角色的各一张牌,Ｘ－１(Ｘ为摸牌数)／＋１(Ｘ为伤害值).你可以将手中以此法获得的锦囊牌当做【无懈可击】、基本牌当做【桃】、装备牌当做【杀】使用.',
			scqhZhinv_tanbei: '贪杯',
			scqhZhinv_tanbei_info: '锁定技,当你使用一张牌后,若此牌的点数是３的倍数,而且比你使用的上一张牌的点数更大,则你摸一张牌.',
			scqhZhinv_zuijiu: '醉酒',
			scqhZhinv_zuijiu_info: '你可以将一张点数是３的倍数的手牌当做无次数限制的【酒】使用.若你处于【酒】状态,你的牌名不为【酒】的手牌均视为无次数限制的【杀】.',
			scqhZhinv_budao: '布道',
			scqhZhinv_budao_info: '摸牌时,你可以多摸一张牌,你可以将一张手牌交给一名其他角色.若为装备牌,其可以使用之.',
			scqhZhinv_taiji: '太极',
			scqhZhinv_taiji_info: '转换技.阳:你可以将非基本牌当做【杀／闪】使用.阴:你可以将非锦囊牌当做【无懈可击／望梅止渴】使用.',
			scqhZhinv_huiwanxusheng: '会玩',
			scqhZhinv_huiwanxusheng_info: ['出牌阶段开始时,随机排序<会玩>的顺序,此阶段内,当你使用一张<会玩>牌结算结束后,你可以从牌堆或弃牌堆中按顺序获得下一张<会玩>牌.', '<font color = #70DB93>◆会玩:<u>【酒】／【杀】／【古锭刀】／【铁索连环】</u>.</font>'].join('</br>'),
			scqhZhinv_pojun: '破军',
			scqhZhinv_pojun_info: '当你使用【杀】指定目标后,你可以发动.将目标的至多Ｘ张牌置于其武将牌上(Ｘ为其体力值),直到回合结束.若其手牌数和装备区内的牌数均不大于你,则此牌对其造成的伤害+1.',
			scqhZhinv_yicheng: '疑城',
			scqhZhinv_yicheng_info: '当一名势力与你相同的角色成为【杀】的目标后,你可以令其摸两张牌.若如此做,其需要弃置两张牌,否则其翻面.',
			scqhZhinv_qixi: '奇袭',
			scqhZhinv_qixi_info: '你可以声明一种类型并将一张黑色牌当【过河拆桥】使用.若你以此法弃置的牌与你声明的类型一致,则视为对当前目标角色使用一张【杀】,否则你于本回合内不能再使用此技能.',
			scqhZhinv_jieying: '劫营',
			scqhZhinv_jieying_info: '锁定技,结束阶段,你观看一名其他角色的手牌,你可以弃置你与其手牌中四张花色不同的牌.若你没这般做,则该角色的下个结束阶段,你获得其手牌区或装备区里的所有牌.',
			scqhZhinv_jinfan: '锦帆',
			scqhZhinv_jinfan_info: '回合结束时,你可以从【铃】与本回合因弃置而置入弃牌堆的牌中选择不同花色的牌各一张置于武将牌上,称为【铃】(可以如手牌般使用或打出),将其余的牌置入弃牌堆.',
			scqhZhinv_qiangzhi: '强识',
			scqhZhinv_qiangzhi_info: '出牌阶段开始时,你可以观看一名角色的手牌,展示其中一张牌,直到你的下个回合开始,当你使用或打出与展示的牌类别相同的牌时,你可以摸一张牌.',
			scqhZhinv_xiantu: '献图',
			scqhZhinv_xiantu_info: '其他角色的出牌阶段开始时,你可以摸两张牌,将两张牌交给该角色,若其于本回合内失去了其中任意一张牌,且未于本回合内击杀过角色,则此回合结束时,你失去一点体力.',
			scqhZhinv_wusheng: '武圣',
			scqhZhinv_wusheng_info: '你可以将红牌当【杀】、黑牌当【酒】使用或打出.你使用♦️️牌无距离限制、♥️️牌无次数限制.',
			scqhZhinv_guanjue: '冠绝',
			scqhZhinv_guanjue_info: '锁定技,当你使用或打出一张牌时,令场上的所有其他角色于此回合内不能使用或打出与此牌花色相同的手牌.',
			scqhZhinv_zhuihun: '追魂',
			scqhZhinv_zhuihun_info: '限定技,遗言技,你可以对击杀你的角色发动.该角色的每个准备阶段,其进行一次判定,若不为【桃】或【桃园结义】,则其死亡.',
			scqhZhinv_hongyan: '红颜',
			scqhZhinv_hongyan_info: '锁定技,你区域内的♠️️牌和♠️️判定牌均视为♥️️.',
			scqhZhinv_huimou: '回眸',
			scqhZhinv_huimou_info: '当你失去了♥️️牌时,你可以翻面.当你翻面后,你可以令一名角色展示一张手牌,若此牌为:红色,你获得此牌并且你可以令其回复一点体力;黑色,其弃置此牌并且流失一点体力.',
			scqhZhinv_quanji: '权计',
			scqhZhinv_quanji_info: '当你受到或造成伤害后,或你的牌被其他角色获得或弃置后,你可以摸一张牌,将一张牌置于武将牌上,称为「权」.你的手牌上限加Ｘ(Ｘ为你的「权」数,至多为场上势力数).',
			scqhZhinv_paiyi: '排异',
			scqhZhinv_paiyi_info: '出牌阶段限一次,你可以将一张「权」置入弃牌堆,令一名角色摸Ｘ张牌(Ｘ为你的「权」数).若其手牌数大于你,则对其造成一点伤害.',
			scqhZhinv_wenji: '问计',
			scqhZhinv_wenji_info: '出牌阶段限一次,你可以选择一名其他角色,你于本回合内计算与其的距离视为１.若其有牌,则其必须交给你一张牌,且你于本回合内使用与之同类型的牌不能被响应.若其没有牌,则其流失一点体力.',
			scqhZhinv_tunjiang: '屯江',
			scqhZhinv_yanyu: '燕语',
			scqhZhinv_yanyu_info: '出牌阶段限一次,你可以弃置任意张牌,摸等量的牌.结束阶段,你可以令一名角色摸Ｘ张牌(Ｘ为你于本回合内以此法弃置的【杀】的数目).',
			scqhZhinv_qiaoshi: '樵拾',
			scqhZhinv_qiaoshi_info: '一回合限一次,当你受到其他角色为来源的伤害后,其可以令你回复等同于此次伤害值的体力.若如此做,你于本回合内回复体力后,你须选择一项:⒈你与其各摸一张牌;⒉其摸两张牌.',
			scqhZhinv_qinzheng: '勤政',
			scqhZhinv_qinzheng_info: '每当你使用或打出〖３／５／８〗张牌时,你可以从弃牌堆里获得一张未以此法选择过的〖基本／装备／锦囊〗牌;若弃牌堆里没有符合条件的牌,则改为摸一张牌.',
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

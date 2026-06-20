'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqhLOL_kaiyinkuanggu: {
				audio: 2,
				inherit: 'xinkuanggu',
			},
			scqhLOL_zhiyi: {
				audio: 2,
				forced: true,
				trigger: {
					player: ['useCardAfter', 'respondAfter'],
				},
				filter(trigger, player) {
					const storage = player.storage.scqhLOL_zhiyi || {};
					const red = storage.red || 0;
					const black = storage.black || 0;
					const none = storage.none || 0;
					if (red + black + none >= 99) return false;
					const number = trigger.card.number;
					return number && typeof number === 'number';
				},
				content() {
					'step 0';
					var storage = player.storage.scqhLOL_zhiyi || {};
					var color = get.color(trigger.card);
					var number = trigger.card.number;
					if (!storage[color]) storage[color] = 0;
					var red = storage.red || 0;
					var black = storage.black || 0;
					var none = storage.none || 0;
					var count = red + black + none;
					if (color !== 'red' && color !== 'black') color = 'none';
					storage[color] += Math.min(99 - count, number);
					player.storage.scqhLOL_zhiyi = storage;
					('step 1');
					player.markSkill('scqhLOL_zhiyi');
				},
				intro: {
					content(storage, player, skill) {
						if (!storage) storage = {};
						var prompt = '';
						var red = storage.red || 0;
						var black = storage.black || 0;
						var none = storage.none || 0;
						prompt += '总进度:';
						prompt += red + black;
						prompt += '/99';
						prompt += '</br>●<font color = #ffddb9>暗裔杀手</font>:';
						prompt += red;
						prompt += '</br>●<font color = #b0d0e2>影流刺客</font>:';
						prompt += black;
						prompt += '</br>●其他:';
						prompt += none;
						return prompt;
					},
					markcount(storage, player) {
						if (!storage) storage = {};
						var red = storage.red || 0;
						var black = storage.black || 0;
						var none = storage.none || 0;
						return red + black + none;
					},
				},
				group: ['scqhLOL_zhiyi_juexing'],
				subSkill: {
					red: {
						audio: 1,
						content() { },
					},
					black: {
						audio: 1,
						content() { },
					},
					juexing: {
						forced: true,
						trigger: {
							player: 'phaseBegin',
						},
						filter(trigger, player) {
							const storage = player.storage.scqhLOL_zhiyi || {};
							const red = storage.red || 0;
							const black = storage.black || 0;
							const none = storage.none || 0;
							return red + black + none >= 99;
						},
						content: async function (event, trigger, player) {
							const storage = player.storage.scqhLOL_zhiyi || {};
							const red = storage.red || 0;
							const black = storage.black || 0;
							var color = 'none';
							if (red > black) color = 'red';
							if (black > red) color = 'black';
							var name = false;
							const list = [];
							if (color === 'none') {
								list.add('scqhLOL_kaiyinred');
								list.add('scqhLOL_kaiyinblack');
							} else list.add('scqhLOL_kaiyin' + color);
							if (list.length > 1) {
								const result = await player
									.chooseButton()
									.set('forced', true)
									.set('ai', function (button) {
										return true;
									})
									.set('createDialog', ['变身', [list, 'character']])
									.forResult();
								name = result.links[0];
							} else {
								name = list[0];
							}
							if (name && typeof name === 'string') {
								if (name.includes('red')) {
									await player.chat('死亡的使者,剥夺生命之物,若是显诚,拉亚斯特在此!', 1);
								} else {
									await player.chat('拉亚斯特,身死之后为我所用!', 1);
								}
								if (player.name2 && get.character(player.name2)[3].includes('scqhLOL_zhiyi')) {
									await player.reinitCharacter(player.name2, name);
								} else {
									await player.reinitCharacter(player.name1, name);
								}
							}
							await player.link(false);
							await player.turnOver(false);
							await player.draw(3);
							if (player.hp < 3) {
								await player.recover(3 - player.hp);
							}
						},
					},
				},
			},
			scqhLOL_lueying: {
				audio: 2,
				audioname: ['scqhLOL_kaiyinred'],
				forced: true,
				trigger: {
					player: ['useCard', 'respond'],
				},
				usable: 2,
				filter(trigger, player) {
					const numx = player.getAllHistory('useCard', (evt) => {
						return get.type(evt.card) === 'basic';
					}).length;
					const numy = player.getAllHistory('respond', (evt) => {
						return get.type(evt.card) === 'basic';
					}).length;
					if (get.type(trigger.card) !== 'basic') return false;
					return (numx + numy) % 2 === 0;
				},
				content: async function (event, trigger, player) {
					const card = {
						name: 'guohe',
						number: trigger.card.number,
					};
					await player.draw();
					await player.chooseUseTarget(card);
				},
			},
			scqhLOL_sheying: {
				init(player) {
					const cardname = 'scqhLOL_sheying' + player.playerid;
					lib.card[cardname] = {
						type: 'delay',
						wuxieable: false,
						effect() { },
						ai: {
							result: {
								target() {
									return 0;
								},
							},
						},
					};
					lib.translate[cardname] = '影';
				},
				audio: 2,
				sunbenSkill: true,
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(trigger, player) {
					if (player.hasSkill('scqhLOL_sheying_sunben')) return false;
					if (!player.scqh_Shanjiji(trigger)) return false;
					if (!player.countCards('he', 'sha')) return false;
					return true;
				},
				discard: false,
				lose: false,
				delay: false,
				position: 'he',
				filterCard(card, player) {
					return card.name === 'sha';
				},
				filterTarget(card, player, target) {
					const history = target.getHistory('damage', function (evt) {
						return evt.source && evt.source === player;
					});
					if (!history.length) return false;
					const cardname = 'scqhLOL_sheying' + player.playerid;
					if (player === target) return false;
					if (target.isDisabledJudge()) return false;
					if (target.hasJudge(cardname)) return false;
					if (!target.canAddJudge({ name: cardname, cards: [card] })) return false;
					const info = {
						juli: get.distance(player, target),
						num: 1,
						bool: false,
					};
					const name = 'scqhLOL_kaiyinblack';
					if ((player.name1 && player.name1 === name) || (player.name2 && player.name2 === name)) {
						info.num++;
					}
					return info.juli <= info.num;
				},
				content: async function (event, trigger, player) {
					await player.addSkill('scqhLOL_sheying_sunben');
					const evt = event.getParent(2);
					if (evt.type !== 'phase') evt.result = { bool: false };
					const cardname = 'scqhLOL_sheying' + player.playerid;
					lib.translate[cardname + '_info'] = '来自' + get.translation(player);
					const target = event.targets[0];
					const cards = event.cards;
					await player.$give(cards, target, false);
					await target.addJudge(cardname, cards);
					await player.out('scqhLOL_sheying_fanhui');
				},
				ai: {
					order: 1,
					damage: true,
					result: {
						player(player, target) {
							const att = get.attitude(player, target);
							const deff = get.damageEffect(target, player, player);
							if (att < 0 && deff > 0) return 1;
							return 0;
						},
					},
				},
				global: ['scqhLOL_sheying_fanhui'],
				subSkill: {
					fanhui: {
						marktext: '影',
						charlotte: true,
						forceDie: true,
						forced: true,
						trigger: {
							player: 'loseAfter',
							global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
						},
						filter(trigger, player) {
							const evt = trigger.getl(player);
							const nameList = [];
							if (!evt || !evt.js || !evt.js.length || evt.player !== player) return false;
							for (const card of evt.js) {
								if (!card.viewAs) continue;
								if (!card.viewAs.startsWith('scqhLOL_sheying')) continue;
								const playerid = card.viewAs.slice(15);
								if (playerid) nameList.add(playerid);
							}
							trigger.scqhLOL_sheying_fanhui = nameList;
							return nameList.length;
						},
						content: async function (event, trigger, player) {
							const nameList = trigger.scqhLOL_sheying_fanhui || [];
							const name = 'scqhLOL_kaiyinblack';
							for (const source of game.players) {
								if (!nameList.includes(source.playerid)) continue;
								await source.in('scqhLOL_sheying_fanhui');
								var num = 1;
								if ((source.name1 && source.name1 === name) || (source.name2 && source.name2 === name)) {
									num++;
								}
								if (player.isIn()) await player.damage(num, source);
							}
						},
					},
					sunben: {
						charlotte: true,
						mark: true,
						marktext: '<span style="text-decoration: line-through;">舍影</span>',
						intro: {
							content: '未完成任务:0/1',
						},
						forced: true,
						popup: false,
						forced: true,
						trigger: {
							global: 'roundStart',
							source: 'die',
						},
						filter(trigger, player) {
							return true;
						},
						content() {
							game.log(player, '回复了技能', '#g【' + get.translation(event.name) + '】');
							player.removeSkill(event.name);
							player.popup(event.name);
						},
					},
				},
			},
			scqhLOL_shoulie: {
				audio: 2,
				mod: {
					targetInRange(card, player, target) {
						if (card.name !== 'sha') return;
						if (!card.scqhLOL_xuanren) return;
						const juli = get.distance(player, target);
						var cardx = card.cards[0];
						var num = 1;
						var info = get.info(cardx, false);
						if (info && info.distance && typeof info.distance.attackFrom == 'number') num -= info.distance.attackFrom;
						if (juli <= num) return true;
					},
				},
				enable: 'chooseToUse',
				prompt(trigger) {
					var player = _status.event.player;
					var str = '将武器牌当做【杀】';
					if (!player.hasSkill('scqhLOL_shoulie_nowuxie')) {
						str += '、非武器牌当做【无懈可击】';
					}
					str += '使用';
					return str;
				},
				viewAs(cards, player) {
					var type = get.subtype(cards[0], player);
					var name = type === 'equip1' ? 'sha' : 'wuxie';
					var nature = null;
					if (name)
						return {
							name: name,
							nature: nature,
							scqhLOL_xuanren: true,
						};
					return null;
				},
				check(card) {
					var player = _status.event.player;
					return 10 - get.value(card);
				},
				position: 'hes',
				filterCard(card, player, event) {
					event = event || _status.event;
					var filter = event._backup.filterCard;
					var type = get.subtype(card, player);
					if (type === 'equip1') {
						if (filter({ name: 'sha', cards: [card] }, player, event)) return true;
					} else {
						if (player.hasSkill('scqhLOL_shoulie_nowuxie')) return false;
						if (filter({ name: 'wuxie', cards: [card] }, player, event)) return true;
					}
					return false;
				},
				filter(event, player) {
					const filter = event.filterCard;
					if (filter({ name: 'sha' }, player, event)) {
						if (
							player.countCards('hes', function (card) {
								return get.subtype(card, player) === 'equip1';
							})
						)
							return true;
					}
					if (filter({ name: 'wuxie' }, player, event)) {
						if (player.hasSkill('scqhLOL_shoulie_nowuxie')) return false;
						if (
							player.countCards('hes', function (card) {
								return get.subtype(card, player) !== 'equip1';
							})
						)
							return true;
					}
					return false;
				},
				ai: {
					respondSha: true,
					skillTagFilter(player, tag) {
						if (
							!player.countCards('hes', function (card) {
								return get.subtype(card, player) === 'equip1';
							})
						)
							return false;
					},
					order(item, player) {
						if (player && _status.event.type == 'phase') {
							return 1;
						}
						return 2;
					},
				},
				hiddenCard(player, name) {
					if (name === 'wuxie' && !player.hasSkill('scqhLOL_shoulie_nowuxie')) {
						return player.countCards('hes', function (card) {
							return get.subtype(card, player) !== 'equip1';
						});
					}
				},
				group: ['scqhLOL_shoulie_draw'],
				subSkill: {
					draw: {
						forced: true,
						trigger: {
							player: 'useCard',
						},
						filter(trigger, player) {
							if (trigger.card.name !== 'wuxie') return false;
							return trigger.skill && trigger.skill === 'scqhLOL_shoulie';
						},
						content() {
							player.addSkill('scqhLOL_shoulie_nowuxie');
							player.drawTo(player.maxHp);
						},
					},
					nowuxie: {
						charlotte: true,
						mark: true,
						marktext: '<span style="text-decoration: line-through;">狩猎</span>',
						intro: {
							content: '不能通过【狩猎】使用【无懈可击】',
						},
						forced: true,
						popup: false,
						forced: true,
						trigger: {
							source: 'damageSource',
						},
						filter(trigger, player) {
							return true;
						},
						content() {
							player.removeSkill(event.name);
							player.popup(event.name);
							game.log(player, '回复了技能', '#g【' + get.translation(event.name) + '】');
						},
					},
				},
			},
			scqhLOL_xuanren: {
				audio: 2,
				trigger: {
					player: 'useCard',
				},
				filter(trigger, player) {
					if (trigger.card.name !== 'sha') return false;
					return player.countCards('he', { suit: trigger.card.suit });
				},
				popup: false,
				log: false,
				cost: async function (event, trigger, player) {
					const skillname = 'scqhLOL_xuanren';
					event.result = await player
						.chooseToDiscard('he', function (card) {
							return card.suit === _status.event.suit;
						})
						.set('suit', trigger.card.suit)
						.set('prompt', get.prompt2(skillname))
						.set('ai', function (card) {
							const player = _status.event.player;
							return 8 - get.value(card);
						})
						.forResult();
				},
				content: async function (event, trigger, player) {
					trigger.effectCount++;
					trigger.set('scqhLOL_xuanren_gain', true);
					player.addSkill('scqhLOL_xuanren_gain');
				},
				subSkill: {
					gain: {
						charlotte: true,
						forced: true,
						trigger: {
							player: ['useCardAfter', 'useCardCancelled'],
						},
						filter(trigger, player) {
							if (!trigger.scqhLOL_xuanren_gain) return false;
							const cards = trigger.cards.filter((card) => {
								return ['o', 'd'].includes(get.position(card));
							});
							if (cards.length) {
								trigger.set('scqhLOL_xuanren_cards', cards);
								return true;
							}
							return false;
						},
						content() {
							const cards = trigger.scqhLOL_xuanren_cards;
							player.gain(cards, 'gain2');
						},
						xcontent: async function (event, trigger, player) {
							const card = trigger.scqhLOL_xuanren;
							var bool = true;
							if (player.getEquips(1).length) {
								var str = '是否将装备区里的武器牌替换成';
								str += get.translation(card);
								str += '？';
								const result = await player.chooseBool(str).set('ai', function () {
									return 1;
								}).forResult();
								bool = result.bool;
							}
							if (bool) {
								await player.equip(card);
							}
						},
					},
				},
			},
			scqhLOL_tanshe: {
				audio: 2,
				trigger: {
					player: 'useCardToPlayer',
				},
				usable: 3,
				filter(trigger, player) {
					const players = game.filterPlayer((current) => {
						if (current === player || current === trigger.target) return false;
						if (trigger.parent.targets.includes(current)) return false;
						if (!player.canUse(trigger.card, current, false)) return false;
						const juli = get.distance(trigger.target, current);
						return juli <= 1;
					});
					if (players.length && trigger.card.name === 'sha') {
						trigger.set('scqhLOL_tanshePlayers', players);
						return true;
					}
					return false;
				},
				check(trigger, player) {
					return 1;
				},
				prompt(trigger, player) {
					const players = trigger.scqhLOL_tanshePlayers;
					var prompt = '是否对';
					prompt += get.translation(players);
					if (players.length > 1) prompt += '中的一人';
					prompt += '发动【弹射】？';
					return prompt;
				},
				content: async function (event, trigger, player) {
					var bool = false;
					const hs = trigger.target.getCards('h');
					if (hs.length) {
						const card = hs.randomGet();
						bool = card.name === 'shan';
						trigger.target.showCards(card);
					}
					if (!bool) {
						const result = {};
						const players = trigger.scqhLOL_tanshePlayers;
						if (players.length === 1) {
							result.targets = players;
							result.bool = true;
						} else {
							const chooseTarget = await player
								.chooseTarget(function (card, player, target) {
									const players = _status.event.players;
									return players.includes(target);
								})
								.set('players', players)
								.set('cardx', trigger.card)
								.set('prompt', '请选择【弹射】的目标')
								.set('ai', function (target) {
									const player = _status.event.player;
									const cardx = _status.event.cardx;
									const eff = get.effect(player, cardx, target, target);
									return eff;
								})
								.forResult();
							result.targets = chooseTarget.targets;
							result.bool = chooseTarget.bool;
						}
						const targets = result.targets || [];
						if (targets.length) {
							trigger.parent.targets.addArray(targets);
							trigger.target.line(targets, 'green');
						}
					}
				},
			},
			scqhLOL_rongyao: {
				audio: 2,
				marktext: '崇拜',
				intro: {
					content: '#层',
				},
				forced: true,
				trigger: {
					player: 'useCard1',
				},
				filter(trigger, player) {
					return trigger.card.name === 'sha';
				},
				content() {
					player.addMark('scqhLOL_rongyao', 1, false);
				},
				group: ['scqhLOL_rongyao_die'],
				subSkill: {
					die: {
						audio: 'scqhLOL_rongyao',
						forced: true,
						trigger: {
							source: 'die',
						},
						filter(trigger, player) {
							return player.countMark('scqhLOL_rongyao');
						},
						content() {
							var count = player.countMark('scqhLOL_rongyao');
							player.removeMark('scqhLOL_rongyao', count, false);
							player.draw(count);
						},
					},
				},
				mod: {
					maxHandcardBase(player, num) {
						const count = player.countMark('scqhLOL_rongyao');
						if (num < count) return count;
					},
				},
			},
			scqhLOL_huiren: {
				audio: 2,
				trigger: {
					player: 'useCardAfter',
				},
				filter(trigger, player) {
					if (trigger.card.name !== 'sha') return false;
					return player.countCards('he', { suit: trigger.card.suit });
				},
				popup: false,
				log: false,
				cost: async function (event, trigger, player) {
					const skillname = 'scqhLOL_huiren';
					const cards = trigger.cards.filter((card) => {
						return ['o', 'd'].includes(get.position(card));
					});
					let val = 0;
					val += cards.length;
					if (!cards.length) {
						if (player.countCards('hs', { name: 'sha' })) val += 1;
					}
					event.result = await player
						.chooseToDiscard('he', function (card) {
							return card.suit === _status.event.suit;
						})
						.set('val', val)
						.set('suit', trigger.card.suit)
						.set('prompt', get.prompt2(skillname))
						.set('ai', function (card) {
							const player = _status.event.player;
							const val = _status.event.val;
							return val + 6 - get.value(card);
						})
						.forResult();
				},
				content: async function (event, trigger, player) {
					const cards = trigger.cards.filter((card) => {
						return ['o', 'd'].includes(get.position(card));
					});
					if (cards.length) player.gain(cards, 'gain2');
					player.addTempSkill('scqhLOL_huiren_sha');
					player.addMark('scqhLOL_huiren_sha', 1, false);
				},
				subSkill: {
					sha: {
						charlotte: true,
						mod: {
							cardUsable(card, player, num) {
								if (card.name === 'sha' && player.hasSkill('scqhLOL_huiren')) {
									return num + player.countMark('scqhLOL_huiren_sha');
								}
							},
						},
					},
				},
			},
			scqhLOL_kaidao: {
				audio: 4,
				enable: 'chooseToUse',
				filterCard(card, player) {
					return get.subtype(card) === 'equip1';
				},
				check(card) {
					return 10 - get.value(card);
				},
				position: 'hes',
				viewAs: {
					name: 'sha',
				},
				viewAsFilter(player) {
					if (!player.countCards('hes', { subtype: 'equip1' })) return false;
				},
				precontent() { },
				ai: {
					order(item, player) {
						return get.order({ name: 'sha' }) + 1;
					},
					result: {
						target(player, target, card, isLink) {
							const info = lib.skill.wusheng.ai.result.target;
							if (info) return info(player, target, card, isLink);
							return 0;
						},
					},
				},
				group: ['scqhLOL_kaidao_useto'],
				subSkill: {
					useto: {
						audio: 'scqhLOL_kaidao',
						trigger: {
							player: 'useCardToPlayered',
						},
						logTarget: 'target',
						filter(trigger, player) {
							if (trigger.card.name !== 'sha') return false;
							return trigger.skill && trigger.skill === 'scqhLOL_kaidao';
						},
						check() {
							return 1;
						},
						prompt(trigger) {
							var prompt = '开道:是否弃置';
							prompt += get.translation(trigger.target);
							prompt += '的一张牌？';
							return prompt;
						},
						content() {
							'step 0';
							player.discardPlayerCard(trigger.target, 'he', true);
							('step 1');
							var target = trigger.target;
							if (get.tag(trigger.card, 'damage') && !target.countCards('h')) {
								var id = target.playerid;
								var map = trigger.parent.customArgs;
								if (!map[id]) map[id] = {};
								if (typeof map[id].extraDamage != 'number') map[id].extraDamage = 0;
								map[id].extraDamage++;
							}
						},
					},
				},
			},
			scqhLOL_xinyan: {
				audio: 3,
				forced: true,
				trigger: {
					player: 'useCardToPlayered',
				},
				logTarget: 'target',
				filter(trigger, player) {
					if (trigger.player === trigger.target) return false;
					const suit = trigger.card.suit;
					const skill = 'scqhLOL_xinyan_' + suit;
					return trigger.target.countMark(skill);
				},
				content() {
					player.chooseDrawRecover(true);
					const suit = trigger.card.suit;
					const skill = 'scqhLOL_xinyan_' + suit;
					const logtarget = trigger.target;
					logtarget.removeMark(skill, logtarget.countMark(skill), false);
					const suitlist = lib.suit.filter((suitx) => {
						const skillx = 'scqhLOL_xinyan_' + suitx;
						if (!lib.skill[skillx]) return false;
						return !logtarget.hasSkill(skillx);
					});
					if (suitlist.length) {
						const suity = suitlist.randomGet();
						const skilly = 'scqhLOL_xinyan_' + suity;
						logtarget.addTempSkill(skilly, 'roundStart');
					}
				},
				ai: {
					effect: {
						target_use(card, player, target) {
							if (!card || !player || !target) return;
							if (player === target) return;
							const current = player;
							const suit = card.suit;
							const skill = 'scqhLOL_xinyan_' + suit;
							if (current.countMark(skill)) return [1, 0.6];
						},
						player_use(card, player, target) {
							if (!card || !player || !target) return;
							if (player === target) return;
							const current = target;
							const suit = card.suit;
							const skill = 'scqhLOL_xinyan_' + suit;
							if (current.countMark(skill)) return [1, 1];
						},
					},
				},
				global: ['scqhLOL_xinyan_pozhan'],
				subSkill: {
					nouse: {
						charlotte: true,
						mark: true,
						marktext: '禁',
						intro: {
							markcount: () => 0,
							content: '不能使用或打出的手牌:$',
						},
						mod: {
							cardEnabled2(card, player) {
								const storage = player.storage.scqhLOL_xinyan_nouse || [];
								if (!storage.includes(card.suit)) return;
								if (get.position(card) === 'h') return false;
							},
							cardSavable(card, player) {
								const storage = player.storage.scqhLOL_xinyan_nouse || [];
								if (!storage.includes(card.suit)) return;
								if (get.position(card) === 'h') return false;
							},
						},
					},
					pozhan: {
						forced: true,
						popup: false,
						log: false,
						trigger: {
							global: 'roundStart',
						},
						filter(trigger, player) {
							const sources = game.filterPlayer((current) => {
								if (current === player) return false;
								return current.hasSkill('scqhLOL_xinyan');
							});
							return sources.length;
						},
						content() {
							'step 0';
							for (const suit of lib.suit) {
								const skill = 'scqhLOL_xinyan_' + suit;
								player.removeSkill(skill);
							}
							('step 1');
							const suit = lib.suit.randomGet();
							const skill = 'scqhLOL_xinyan_' + suit;
							if (lib.skill[skill]) player.addTempSkill(skill, 'roundStart');
						},
					},
					heart: {
						charlotte: true,
						init(player, skill) {
							player.addMark(skill, 1, false);
						},
						marktext: '♥️️',
						intro: {
							markcount: () => 0,
							content: '♥️️',
						},
					},
					diamond: {
						charlotte: true,
						init(player, skill) {
							player.addMark(skill, 1, false);
						},
						marktext: '♦️️',
						intro: {
							markcount: () => 0,
							content: '♦️️',
						},
					},
					spade: {
						charlotte: true,
						init(player, skill) {
							player.addMark(skill, 1, false);
						},
						marktext: '♠️️',
						intro: {
							markcount: () => 0,
							content: '♠️️',
						},
					},
					club: {
						charlotte: true,
						init(player, skill) {
							player.addMark(skill, 1, false);
						},
						marktext: '♣️️',
						intro: {
							markcount: () => 0,
							content: '♣️️',
						},
					},
				},
			},
			scqhLOL_pokong: {
				derivation: [
				],
				audio: 3,
				enable: 'chooseToUse',
				usable: 1,
				filterCard: true,
				position: 'hes',
				check(card) {
					return 7 - get.value(card);
				},
				viewAsFilter(player) {
					if (!player.countCards('hes')) return false;
					return true;
				},
				viewAs: {
					name: 'scqh_shanxian',
					scqhLOL_pokong: true,
				},
				hiddenCard(player, name) {
					return name === 'scqh_shanxian';
				},
				group: ['scqhLOL_pokong_sha'],
				subSkill: {
					sha: {
						forced: true,
						trigger: {
							player: 'scqh_shanxianAfter',
						},
						filter(trigger, player) {
							const players = game.filterPlayer((target) => {
								const jvli = get.distance(player, target);
								if (jvli > 1 || target === player) return false;
								return player.canUse('sha', target);
							});
							if (!players.length) return false;
							const evt = trigger.parent;
							if (evt.skill && evt.skill === 'scqhLOL_pokong') return true;
							if (evt.card && evt.card.scqhLOL_pokong) return true;
							return false;
						},
						content() {
							'step 0';
							var players = game.filterPlayer((target) => {
								const jvli = get.distance(player, target);
								if (jvli > 1 || target === player) return false;
								return player.canUse('sha', target);
							});
							if (players.length === 1) {
								event._result = {
									bool: true,
									targets: players,
								};
							} else {
								var next = player.chooseTarget(true, function (card, player, target) {
									var players = _status.event.players;
									return players.includes(target);
								});
								next.set('players', players);
								next.set('prompt', '视为使用一张【杀】');
								next.set('ai', function (target) {
									const player = _status.event.player;
									const att = get.attitude(player, target);
									const card = { name: 'sha' };
									const eff = get.effect(target, card, player, player);
									return eff - att;
								});
							}
							('step 1');
							var targets = result.targets || [];
							if (targets.length) {
								var card = { name: 'sha' };
								player.useCard(card, targets, false);
							}
							('step 2');
							if (
								player.hasHistory('sourceDamage', function (evt) {
									var card = evt.card;
									if (!card || card.name !== 'sha') return false;
									var evtx = evt.getParent('useCard');
									return evtx.card === card && evtx.parent === event;
								})
							)
								player.draw();
						},
					},
				},
			},
			scqhLOL_jianwu: {
				audio: 2,
				sunbenSkill: true,
				trigger: {
					player: 'phaseBegin',
				},
				filter(trigger, player) {
					if (player.hasSkill('scqhLOL_jianwu_sunben')) return false;
					return true;
				},
				cost: async function (event, trigger, player) {
					const skillname = 'scqhLOL_jianwu';
					event.result = await player
						.chooseTarget(function (card, player, target) {
							if (target === player) return false;
							return true;
						})
						.set('prompt', get.prompt2(skillname))
						.set('ai', function (target) {
							const player = _status.event.player;
							const att = get.attitude(player, target);
							if (!player.countCards('hes')) return false;
							if (!player.hasSkill('scqhLOL_xinyan')) return false;
							return 1 - att;
						})
						.forResult();
				},
				content: async function (event, trigger, player) {
					trigger.phaseList.splice(trigger.num, 0, 'phaseUse|xindangxian');
					player.addSkill(event.name + '_sunben');
					player.addTempSkill('scqhLOL_jianwu_after');
					player.markAuto('scqhLOL_jianwu_after', event.targets);
					var target = event.targets[0];
					for (const suit of lib.suit) {
						const skill = 'scqhLOL_xinyan_' + suit;
						if (lib.skill[skill]) {
							target.addTempSkill(skill, 'roundStart');
							target.addMark(skill, 1, false);
						}
					}
				},
				subSkill: {
					after: {
						charlotte: true,
						trigger: {
							player: 'useCardAfter',
						},
						filter(trigger, player) {
							if (!player.hasSkill('scqhLOL_jianwu')) return false;
							if (!trigger.targets || trigger.targets.length) return false;
							const storage = player.storage.scqhLOL_jianwu_after || [];
							for (const target of trigger.targets) {
								if (!storage.includes(target)) continue;
								if (target.isDead()) return true;
								for (const suit of lib.suit) {
									if (player.hasSkill('scqhLOL_xinyan_' + suit)) return false;
								}
								return true;
							}
							return false;
						},
						content() {
							player.hp = player.maxHp;
							player.drawTo(player.maxHp);
						},
					},
					sunben: {
						charlotte: true,
						mark: true,
						marktext: '<span style="text-decoration: line-through;">剑舞</span>',
						intro: {
							content(storage, player, skill) {
								var prompt = '任务进度:' + player.countMark(skill) + '/1';
								var storagex = player.storage.scqhLOL_jianwu_after || [];
								if (storagex.length) {
									prompt += '</br>目标:';
									prompt += get.translation(storagex);
								}
								return prompt;
							},
						},
						forced: true,
						popup: false,
						firstDo: true,
						trigger: {
							player: 'changeHujiaEnd',
						},
						filter(trigger, player) {
							return false;
							return trigger.num > 0;
						},
						content() {
							'step 0';
							player.addMark(event.name, trigger.num, false);
							('step 1');
							if (player.countMark(event.name) >= 3) {
								player.removeSkill(event.name);
								player.popup(event.name);
								game.log(player, '回复了技能', '#g【', event.name, '】');
							}
						},
					},
				},
			},
			scqhLOL_fuyan: {
				forced: true,
				trigger: {
					player: ['changeHujiaEnd', 'phaseJieshuBegin'],
				},
				filter(trigger, player) {
					if (trigger.name == 'changeHujia') {
						if (trigger.num == 0) return false;
					} else {
						var damage = player.getHistory('damage');
						if (damage.length) return false;
					}
					return true;
				},
				content() {
					if (trigger.name == 'changeHujia') {
						var num = Math.abs(trigger.num);
						if (trigger.num > 0) player.gainMaxHp(num);
						else player.loseMaxHp(num);
					} else player.changeHujia(1, null, true);
				},
			},
			scqhLOL_dizhen: {
				changeSeat: true,
				sunbenSkill: true,
				audio: 2,
				enable: 'chooseToUse',
				derivation: ['scqh_shanxian'],
				audio: 2,
				enable: 'chooseToUse',
				filterCard: true,
				position: 'hes',
				check(card) {
					return 7 - get.value(card);
				},
				viewAsFilter(player) {
					if (player.hasSkill('scqhLOL_dizhen_sunben')) return false;
					if (!player.countCards('hes')) return false;
					return true;
				},
				viewAs: {
					name: 'scqh_shanxian',
					scqhLOL_dizhen: true,
				},
				precontent() {
					player.addSkill('scqhLOL_dizhen_sunben');
				},
				ai: {
					order: 1,
					result: {
						player(player, target) {
							let val = 0;
							const deff = get.damageEffect(target, player, player);//QQQ
							const current = _status.currentPhase;
							if (deff > 0) {
								val += deff;
								if (current && current === target) val += 5;
							}
							return val;
						},
					},
				},
				group: ['scqhLOL_dizhen_used'],
				subSkill: {
					used: {
						forced: true,
						trigger: {
							player: 'useCardAfter',
						},
						filter(trigger, player) {
							return trigger.card.scqhLOL_dizhen;
						},
						content() {
							var players = game.filterPlayer((current) => {
								if (player === current) return false;
								const jvli = get.distance(player, current);
								return jvli <= 1;
							});
							var next = function () {
								var num = 1 + player.hujia;
								for (const target of targets) target.damage(num);
							};
							if (players.length) {
								player.scqh_jifei(players, next);
							}
						},
					},
					sunben: {
						charlotte: true,
						mark: true,
						marktext: '<span style="text-decoration: line-through;">地震</span>',
						intro: {
							content(storage, player, skill) {
								return '任务进度:' + player.countMark(skill) + '/3';
							},
						},
						forced: true,
						popup: false,
						firstDo: true,
						trigger: {
							player: 'changeHujiaEnd',
						},
						filter(trigger, player) {
							return trigger.num > 0;
						},
						content() {
							'step 0';
							player.addMark(event.name, trigger.num, false);
							('step 1');
							if (player.countMark(event.name) >= 3) {
								player.removeSkill(event.name);
								player.popup(event.name);
								game.log(player, '回复了技能', '#g【', event.name, '】');
							}
						},
					},
				},
			},
			scqhLOL_zhanfeng: {
				audio: 2,
				enable: 'chooseToUse',
				filterCard: true,
				position: 'hes',
				viewAs: {
					name: 'sha',
					scqhLOL_zhanfeng: true,
				},
				viewAsFilter(player) {
					if (!player.scqh_lianjiji('filter', 'scqhLOL_zhanfeng')) return false;
					if (!player.countCards('hes')) return false;
				},
				check(card) {
					return 7 - get.value(card);
				},
				scqh_lianjiji: [1, 3],
				intro: {
					name: false,
					content: '当前等级:#/3',
				},
				init(player) {
					player.scqh_lianjiji('init', 'scqhLOL_zhanfeng');
				},
				precontent() {
					event.result.card.scqhLOL_zhanfeng_lianjiji = player.countMark('scqhLOL_zhanfeng');
					player.scqh_lianjiji('content', 'scqhLOL_zhanfeng');
				},
				group: ['scqhLOL_zhanfeng_two', 'scqhLOL_zhanfeng_three'],
				subSkill: {
					two: {
						forced: true,
						trigger: {
							player: 'useCard1',
						},
						filter(trigger, player) {
							const countmark = trigger.card.scqhLOL_zhanfeng_lianjiji;
							if (countmark !== 1 && countmark !== 2) return false;
							return trigger.skill && trigger.skill === 'scqhLOL_zhanfeng';
						},
						content() {
							player.draw();
						},
					},
					three: {
						mod: {
							targetInRange(card, player, target, now) {
								if (card.scqhLOL_zhanfeng !== true) return;
								if (player.countMark('scqhLOL_zhanfeng') !== 3) return;
								if (card.name == 'sha') return true;
							},
						},
						forced: true,
						trigger: {
							player: 'useCardAfter',
						},
						filter(trigger, player) {
							const countmark = trigger.card.scqhLOL_zhanfeng_lianjiji;
							if (countmark !== 3) return false;
							const targets = lib.skill.scqhLOL_zhanfeng_three.logTarget(trigger, player);
							if (!targets.length) return false;
							return trigger.skill && trigger.skill === 'scqhLOL_zhanfeng';
						},
						logTarget(trigger, player) {
							return (trigger.targets || []).filter((target) => {
								return target.getHistory('damage', (evt) => {
									return evt.card && evt.card === trigger.card;
								}).length;
							});
						},
						content() {
							const targets = lib.skill.scqhLOL_zhanfeng_three.logTarget(trigger, player);
							player.scqh_jifei(targets);
						},
					},
					lianjijionremove: {
						charlotte: true,
						onremove(player) {
							player.scqh_lianjiji('onremove', 'scqhLOL_zhanfeng');
						},
					},
				},
			},
			scqhLOL_tafeng: {
				derivation: ['scqh_shanxian'],
				audio: 2,
				enable: 'chooseToUse',
				filterCard: true,
				position: 'hes',
				check(card) {
					return 7 - get.value(card);
				},
				viewAsFilter(player) {
					if (!player.countCards('hes')) return false;
					return true;
				},
				viewAs: {
					name: 'scqh_shanxian',
					scqhLOL_tafeng: true,
				},
				precontent() {
					const targets = event.result.targets || [];
					if (targets.length) {
						player.addTempSkill('scqhLOL_tafeng_round');
						player.markAuto('scqhLOL_tafeng_round', targets);
					}
				},
				hiddenCard(player, name) {
					return name === 'scqh_shanxian';
				},
				mod: {
					playerEnabled(card, player, target) {
						if (card.name !== 'scqh_shanxian') return;
						if (card.scqhLOL_tafeng !== true) return;
						const storage = player.storage.scqhLOL_tafeng_round || [];
						if (player === target) return false;
						if (storage.includes(target)) return false;
					},
				},
				ai: {
					order: 1,
					respondShan: true,
					result: {
						player(player, target) {
							let val = 1;
							const current = _status.currentPhase;
							if (current && current === target) val += 5;
							const players = game.filterPlayer((targetx) => {
								const card = { name: 'sha' };
								const jvli = get.distance(target, targetx);
								const eff = get.effect(targetx, card, player, player);
								if (targetx === player) return false;
								if (jvli > 1 || eff <= 0) return false;
								return player.canUse(card, targetx, false);
							});
							val += players.length;
							if (_status.event.type === 'phase') {
								if (player.needsToDiscard() <= 0) {
									if (!players.length) return 0;
								}
							}
							return val;
						},
					},
				},
				group: ['scqhLOL_tafeng_sha'],
				subSkill: {
					sha: {
						forced: true,
						trigger: {
							player: 'scqh_shanxianAfter',
						},
						filter(trigger, player) {
							const players = game.filterPlayer((target) => {
								const jvli = get.distance(player, target);
								if (jvli > 1 || target === player) return false;
								return player.canUse('sha', target);
							});
							if (!players.length) return false;
							const evt = trigger.parent;
							if (evt.skill && evt.skill === 'scqhLOL_tafeng') return true;
							if (evt.card && evt.card.scqhLOL_tafeng) return true;
							return false;
						},
						content() {
							const prompt = '踏风:是否使用一张杀？';
							player
								.chooseToUse(
									function (card, player, event) {
										if (card.scqhLOL_zhanfeng !== true) return false;
										if (card.name !== 'sha') return false;
										return lib.filter.filterCard.apply(this, arguments);
									},
									prompt,
									-1
								)
								.set('targetRequired', true)
								.set('complexSelect', true)
								.set('filterTarget', function (card, player, target) {
									const jvli = get.distance(player, target);
									if (jvli > 1 || target === player) return false;
									return lib.filter.filterTarget.apply(this, arguments);
								});
						},
					},
					round: {
						charlotte: true,
					},
				},
			},
			scqhLOL_juexi: {
				audio: 2,
				trigger: {
					global: 'scqh_jifei',
				},
				usable: 1,
				filter(trigger, player, name) {
					const targets = trigger.targets || [];
					for (const target of targets) {
						if (target === player) continue;
						if (player.canUse('scqh_shanxian', target, false)) return true;
					}
					return false;
				},
				cost: async function (event, trigger, player) {
					const skillname = 'scqhLOL_juexi';
					event.result = await player
						.chooseTarget(function (card, player, target) {
							if (target === player) return false;
							if (!player.canUse('scqh_shanxian', target, false)) return false;
							return trigger.targets.includes(target);
						})
						.set('prompt', get.prompt2(skillname))
						.set('ai', function (target) {
							const player = _status.event.player;
							const att = get.attitude(player, target);
							return 1 - att;
						})
						.forResult();
				},
				content: async function (event, trigger, player) {
					player.scqh_lianjiji('onremove', 'scqhLOL_zhanfeng');
					const card = {
						name: 'scqh_shanxian',
					};
					const target = event.targets[0];
					await player.useCard(card, target, false).set('audio', false);
					const cardx = {
						name: 'sha',
					};
					const players = game.filterPlayer((current) => {
						if (player === current) return false;
						if (!current.hasSkill('scqhBuff_jifei')) return false;
						if (!player.canUse(cardx, current, false)) return false;
						return get.distance(target, current) <= 1 || get.distance(player, current) <= 1;
					});
					if (players.length) {
						await player.useCard(cardx, players, false);
					}
				},
			},
			scqhLOL_haoqing: {
				audio: 2,
				mark: true,
				zhuanhuanji: true,
				marktext: '☯',
				intro: {
					content(storage, player, skill) {
						if (!storage) return '阳';
						else return '阴';
					},
				},
				forced: true,
				trigger: {
					player: 'useCard1',
				},
				filter(trigger, player) {
					if (trigger.card.name !== 'sha') return false;
					return true;
				},
				content() {
					const storage = player.storage[event.name] || false;
					if (!storage) {
						trigger.addCount = false;
						trigger.player.getStat().card.sha--;
					} else {
						trigger.effectCount++;
						game.log(trigger.card, '额外结算一次');
					}
					player.changeZhuanhuanji(event.name);
				},
			},
			scqhLOL_lielu: {
				audio: 'scqhLOL_haoqing',
				trigger: {
					player: 'useCard',
				},
				usable: 1,
				lieluTarget(player, ai) {
					const card = {
						name: 'tiesuo',
					};
					const players = game.filterPlayer((current) => {
						if (ai === true) {
							const eff = get.effect(current, card, player, player);
							if (eff <= 0) return false;
						}
						const jvli = get.distance(player, current);
						if (jvli > 1) return false;
						if (current === player) return false;
						return player.canUse(card, current, false);
					});
					return players;
				},
				filter(trigger, player) {
					if (get.type(trigger.card) !== 'basic') return false;
					const players = lib.skill.scqhLOL_lielu.lieluTarget(player);
					return players.length;
				},
				cost: async function (event, trigger, player) {
					const skillname = 'scqhLOL_lielu';
					const players = lib.skill.scqhLOL_lielu.lieluTarget(player);
					const playersAi = lib.skill.scqhLOL_lielu.lieluTarget(player, true);
					event.result = await player
						.chooseTarget([1, 2], function (card, player, target) {
							const players = _status.event.players;
							return players.includes(target);
						})
						.set('players', players)
						.set('playersAi', playersAi)
						.set('prompt', get.prompt2(skillname))
						.set('ai', function (target) {
							const players = _status.event.playersAi;
							return players.includes(target);
						})
						.forResult();
				},
				content: async function (event, trigger, player) {
					const targets = event.targets || [];
					const card = {
						name: 'tiesuo',
					};
					await player.useCard(card, targets, false);
					if (targets.length > 1) {
						let next = false;
						let previous = false;
						for (const current of targets) {
							if (current === player.next) next = true;
							if (current === player.previous) previous = true;
						}
						if (next && previous) {
							for (const current of targets) {
								current.addTempSkill('scqhLOL_lielu_nouse');
							}
						}
					}
				},
				subSkill: {
					nouse: {
						charlotte: true,
						mark: true,
						marktext: '禁',
						intro: {
							markcount: () => 0,
							content() {
								return '不能使用或打出手牌';
							},
						},
						mod: {
							cardEnabled2(card, player) {
								if (get.position(card) === 'h') return false;
							},
							cardSavable(card, player) {
								if (get.position(card) === 'h') return false;
							},
						},
					},
				},
			},
			scqhLOL_hongquan: {
				audio: 2,
				chargeSkill: true,
				enable: ['chooseToUse', 'chooseToRespond'],
				usable: 1,
				filter(trigger, player) {
					if (!player.countMark('charge')) return false;
					if (!player.scqh_Shanjiji(trigger)) return false;
					return true;
				},
				content() {
					'step 0';
					const evt = event.getParent(2);
					if (evt.type !== 'phase') evt.result = { bool: false };
					('step 1');
					const countmark = player.countMark('charge');
					player.removeMark('charge', countmark, false);
					for (let i = 0; i < countmark; i++) {
						const card = { name: 'scqh_hudun' };
						if (player.canAddJudge(card, true)) {
							player.addJudge(game.createCard(card));
						}
					}
					const players = game.filterPlayer((current) => {
						const jvli = get.distance(player, current);
						return current !== player && jvli <= countmark;
					});
					if (players.length) {
						player.line(players, 'green');
						for (let current of players) {
							current.damage(countmark, 'nocard');
						}
					}
				},
				ai: {
					order: 1,
					respondShan: true,
					respondSha: true,
					result: {
						player(player) {
							const countmark = player.countMark('charge');
							const players = game.filterPlayer((current) => {
								const deff = get.damageEffect(current, player, player);
								const att = get.attitude(player, current);//QQQ
								if (deff <= 0 || att > 0) return false;
								const jvli = get.distance(player, current);
								return current !== player && jvli <= countmark;
							});
							if (!players.length) {
								const evt = _status.event.getParent('chooseToUse');
								if (evt && evt.name === 'chooseToUse' && evt.type === 'phase') return 0;
								if (player.hp > 2) return 0;
							}
							return 1;
						},
					},
				},
				group: ['scqhLOL_hongquan_xuli'],
				subSkill: {
					xuli: {
						name: '蓄意',
						forced: true,
						trigger: {
							player: 'damageEnd',
						},
						filter(trigger, player) {
							return true;
						},
						content() {
							const maxnum = Math.floor(player.maxHp / 2);
							const countmark = player.countMark('charge');
							const number = Math.min(trigger.num, maxnum - countmark);
							if (number >= 1) player.addMark('charge', number, false);
						},
					},
				},
			},
			scqhLOL_zhican: {
				audio: 3,
				derivation: ['scqhLOL_chuxue', 'scqhLOL_xuenu'],
				forced: true,
				trigger: {
					source: 'damageSource',
				},
				logTarget: 'player',
				filter(trigger, player) {
					if (trigger.player.countMark('scqhLOL_chuxue') >= 5) return false;
					return trigger.player !== player;
				},
				content() {
					trigger.player.addSkill('scqhLOL_chuxue');
					trigger.player.addMark('scqhLOL_chuxue', 1, false);
				},
				group: ['scqhLOL_zhican_five'],
				subSkill: {
					five: {
						audio: 'scqhLOL_zhican',
						forced: true,
						trigger: {
							global: ['damageEnd', 'useCardToTargeted'],
						},
						usable: 1,
						logTarget(trigger, player) {
							if (trigger.name === 'damage') {
								if (trigger.source && trigger.source === player) return trigger.player;
							} else if (trigger.target && trigger.player === player) {
								if (trigger.card && trigger.card.name === 'sha') return trigger.target;
							}
							return false;
						},
						filter(trigger, player) {
							const target = lib.skill.scqhLOL_zhican_five.logTarget(trigger, player);
							return target && target.countMark('scqhLOL_chuxue') >= 5;
						},
						content() {
							player.draw(5);
							player.addTempSkill('scqhLOL_xuenu');
						},
					},
				},
			},
			scqhLOL_chuxue: {
				charlotte: true,
				markimage: 'extension/' + lib.scqhExtension + '/skin/mark/scqhLOL_chuxue.png',
				intro: {
					content: '#层',
				},
				forced: true,
				trigger: {
					player: 'phaseJieshu',
				},
				filter(trigger, player) {
					const countmark = player.countMark('scqhLOL_chuxue');
					return countmark;
				},
				content: async function (event, trigger, player) {
					const countmark = player.countMark('scqhLOL_chuxue');
					const result = await player
						.chooseToDiscard([1, countmark], 'h')
						.set('prompt', '请弃置' + get.cnNumber(countmark) + '张牌,若弃牌数不足,则流失不足数量的体力')
						.set('ai', function (card) {
							return 8 - get.value(card);
						})
						.forResult();
					const discard = result.cards?.length || 0;
					const losehp = countmark - discard;
					if (losehp > 0) {
						await player.loseHp(losehp);
						player.removeMark('scqhLOL_chuxue', losehp, false);
					}
				},
			},
			scqhLOL_xuenu: {
				audio: 3,
				init(player, skill) {
					player.popup(skill);
					game.broadcastAll(
						function (player, skill) {
							if (!player.node[skill]) {
								player.node[skill] = ui.create.div('.playerjiu', player.node.avatar);
								player.node[skill + '2'] = ui.create.div('.playerjiu', player.node.avatar2);
							}
						},
						player,
						skill
					);
				},
				onremove(player, skill) {
					game.broadcastAll(
						function (player, skill) {
							if (player.node[skill]) {
								player.node[skill].delete();
								player.node[skill + '2'].delete();
								delete player.node[skill];
								delete player.node[skill + '2'];
							}
						},
						player,
						skill
					);
				},
				charlotte: true,
				forced: true,
				trigger: {
					source: 'damageBegin1',
				},
				filter(trigger, player) {
					return trigger.player !== player;
				},
				content() {
					trigger.num++;
					const countmark = trigger.player.countMark('scqhLOL_chuxue');
					const damage = Math.min(5, 5 - countmark);
					if (damage > 0) {
						trigger.player.addSkill('scqhLOL_chuxue');
						trigger.player.addMark('scqhLOL_chuxue', damage, false);
					}
				},
			},
			scqhLOL_chongwu: {
				audio: 3,
				trigger: {
					player: 'useCardToPlayered',
				},
				filter(trigger, player) {
					if (trigger.card.name !== 'sha') return false;
					if (trigger.parent.triggeredTargets3.length > 1) return false;
					const hs = player.getCards('he');
					return hs.length;
				},
				popup: false,
				log: false,
				cost: async function (event, trigger, player) {
					const skillname = 'scqhLOL_chongwu';
					const players = game.filterPlayer((current) => {
						if (player === current) return false;
						if (trigger.parent.targets.includes(current)) return false;
						if (!player.inRange(current)) return false;
						if (!player.canUse(trigger.card, current, false)) return false;
						const eff = get.effect(current, trigger.card, player, player);
						return eff > 0;
					});
					event.result = await player
						.chooseToDiscard()
						.set('prompt', get.prompt2(skillname))
						.set('position', 'he')
						.set('players', players)
						.set('ai', function (card) {
							const player = _status.event.player;
							const players = _status.event.players;
							if (!players.length && player.hp === player.maxHp) return 0;
							return 7 - get.value(card);
						})
						.forResult();
				},
				content: async function (event, trigger, player) {
					trigger.parent.card.scqhLOL_chongwu = true;
					const players = game.filterPlayer((current) => {
						if (player === current) return false;
						if (trigger.parent.targets.includes(current)) return false;
						if (!player.inRange(current)) return false;
						if (!player.canUse(trigger.card, current, false)) return false;
						return true;
					});
					if (players.length) {
						player.line(players, 'green');
						game.log(players, '成为了', trigger.card, '的额外目标');
						trigger.parent.targets.addArray(players);
					}
					const map = trigger.parent.customArgs;
					for (const current of trigger.parent.targets) {
						if (current.hp > player.hp) continue;
						const id = current.playerid;
						if (!map[id]) map[id] = {};
						const shanR = map[id].shanRequired;
						if (!shanR || typeof shanR !== 'number' || shanR < 1) {
							map[id].shanRequired = 1;
						}
						map[id].shanRequired++;
					}
					trigger.parent.customArgs = map;
				},
				group: ['scqhLOL_chongwu_after'],
				subSkill: {
					after: {
						forced: true,
						trigger: {
							player: 'useCardAfter',
						},
						recoverNum(trigger, player) {
							const damage = player.getHistory('sourceDamage', (evt) => {
								if (evt.player === player) return false;
								return evt.card && evt.card === trigger.card;
							});
							return damage.length;
						},
						filter(trigger, player) {
							if (!trigger.card.scqhLOL_chongwu) return false;
							const num = lib.skill.scqhLOL_chongwu_after.recoverNum(trigger, player);
							return num > 0 && player.hp < player.maxHp;
						},
						content() {
							const num = lib.skill.scqhLOL_chongwu_after.recoverNum(trigger, player);
							player.recover(num);
						},
					},
				},
			},
			scqhLOL_chuwang: {
				audio: 2,
				sunbenSkill: true,
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(trigger, player) {
					if (player.hasSkill('scqhLOL_chuwang_sunben')) return false;
					if (!player.scqh_Shanjiji(trigger)) return false;
					return true;
				},
				filterCard() {
					return false;
				},
				selectCard: -1,
				filterTarget(card, player, target) {
					if (player === target) return false;
					return player.inRange(target);
				},
				content() {
					const evt = event.getParent(2);
					if (evt.type !== 'phase') evt.result = { bool: false };
					player.addSkill('scqhLOL_chuwang_sunben');
					const countmark = target.countMark('scqhLOL_chuxue') + 1;
					target.damage('nocard', countmark);
				},
				ai: {
					order: 1,
					damage: true,
					result: {
						player(player, target) {
							const att = get.attitude(player, target);
							const deff = get.damageEffect(target, player, player);
							const countmark = target.countMark('scqhLOL_chuxue') + 1;
							if (att < 0 && deff > 0) {
								if (target.getEquip('baiyin')) {
									if (target.hp > 1) return 0;
									if (
										target.countCards('hs', function (card) {
											return card.name === 'tao' || card.name === 'jiu';
										})
									)
										return 0;
								}
								if (countmark >= target.hp) return 1;
							}
							return 0;
						},
					},
				},
				subSkill: {
					sunben: {
						charlotte: true,
						mark: true,
						marktext: '<span style="text-decoration: line-through;">除王</span>',
						intro: {
							content: '未完成任务:0/1',
						},
						forced: true,
						popup: false,
						forced: true,
						trigger: {
							global: 'roundStart',
							source: 'die',
						},
						filter(trigger, player) {
							return true;
						},
						content() {
							game.log(player, '回复了技能', '#g【', event.name, '】');
							player.removeSkill(event.name);
							player.popup(event.name);
						},
					},
				},
			},
			scqhLOL_cisi: {
				audio: 2,
				scqh_lianjiji: [1, 3],
				init(player) {
					const skillname = 'scqhLOL_cisi';
					player.scqh_lianjiji('init', skillname);
				},
				intro: {
					name: false,
					content: '当前等级:#/3',
				},
				map(player) {
					const mark = player.countMark('scqhLOL_cisi');
					const map = {};
					map.x = 0;
					map.y = 0;
					if (mark == 1) {
						map.x = 1;
						map.y = 3;
					}
					if (mark == 2) {
						map.x = 2;
						map.y = 2;
					}
					if (mark == 3) {
						map.x = 3;
						map.y = 1;
					}
					return map;
				},
				cisifilter(player) {
					const funcard = function (number) {
						if (number === 3) return 1;
						if (number === 2) return 2;
						if (number === 1) return 3;
					};
					const functarget = function (player, mapy) {
						const targetx = game.filterPlayer((current) => {
							const card = { name: 'sha', nature: 'fire' };
							const cardx = { name: 'tiesuo' };
							const jvli = get.distance(player, current);
							const att = get.attitude(player, current);
							const eff = get.effect(current, card, player, player);
							if (jvli !== mapy) return false;
							if (att > 0 || eff <= 0) return false;
							if (!current.isLinked()) {
								if (!player.canUse(cardx, current, false)) return false;
							}
							if (!player.canUse(card, current, false)) return false;
							return true;
						});
						return targetx;
					};
					const map = lib.skill.scqhLOL_cisi.map(player) || {};
					const list = [3, 2, 1];
					const hascard = player.countCards('he');
					let discard = 0;
					for (const mapy of list) {
						if (map.y < mapy) continue;
						discard += funcard(mapy);
						if (hascard < discard) return false;
						const targetx = functarget(player, mapy);
						if (targetx.length) return true;
					}
					return false;
				},
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(trigger, player) {
					const skillname = 'scqhLOL_cisi';
					if (!player.scqh_lianjiji('filter', skillname)) return false;
					if (!player.scqh_Shanjiji(trigger)) return false;
					const map = lib.skill.scqhLOL_cisi.map(player) || {};
					const hs = player.getCards('he');
					if (hs.length < map.x) return false;
					return true;
				},
				filterCard: true,
				position: 'he',
				selectCard() {
					const player = _status.event.player;
					const map = lib.skill.scqhLOL_cisi.map(player);
					return map.x;
				},
				complexSelect: true,
				complexCard: true,
				check(card) {
					const player = _status.event.player;
					const cisifilter = lib.skill.scqhLOL_cisi.cisifilter(player) || false;
					const value = get.value(card);
					if (!cisifilter) return -value;
					return 7 - value;
				},
				filterTarget(card, player, target) {
					if (player == target) return false;
					if (!player.canUse('tiesuo', target, false)) return false;
					const map = lib.skill.scqhLOL_cisi.map(player);
					const jvli = get.distance(player, target);
					if (jvli === map.y) target.prompt('<font color=#ffddb9>可赐死</font>');
					else target.prompt('距离' + jvli);
					if (jvli <= map.y) return true;
					return false;
				},
				selectTarget() {
					const player = _status.event.player;
					const map = lib.skill.scqhLOL_cisi.map(player);
					return [0, map.x];
				},
				delay: false,
				multitarget: true,
				multiline: true,
				content() {
					'step 0';
					const evt = event.getParent(2);
					if (evt.type !== 'phase') evt.result = { bool: false };
					('step 1');
					const map = lib.skill.scqhLOL_cisi.map(player) || {};
					event.mapy = map.y;
					('step 2');
					const skillname = 'scqhLOL_cisi';
					player.scqh_lianjiji('content', skillname);
					('step 3');
					if (targets.length) player.useCard({ name: 'tiesuo' }, targets, false);
					('step 4');
					const card = { name: 'sha', nature: 'fire' };
					const targetx = game.filterPlayer((target) => {
						const jvli = get.distance(player, target);
						if (!target.isLinked()) return false;
						if (!player.canUse(card, target, false)) return false;
						return jvli === event.mapy;
					});
					if (targetx.length) player.useCard(card, targetx, false);
				},
				ai: {
					order: 1,
					respondSha: true,
					respondShan: true,
					result: {
						player(player, target) {
							const att = get.attitude(player, target);
							if (att > 0) {
								if (!target.isLinked()) return 0;
							} else {
								if (target.isLinked()) return 0;
							}
							const map = lib.skill.scqhLOL_cisi.map(player);
							const jvli = get.distance(player, target);
							let num = 1;
							if (jvli === map.y) num += 1;
							return num;
						},
					},
				},
				subSkill: {
					lianjijionremove: {
						charlotte: true,
						onremove(player) {
							const skillname = 'scqhLOL_cisi';
							player.scqh_lianjiji('onremove', skillname);
						},
					},
				},
			},
			scqhLOL_chongjue: {
				audio: 2,
				derivation: ['scqh_shanxian'],
				forced: true,
				trigger: {
					player: 'useCardAfter',
				},
				usable: 1,
				filter(trigger, player) {
					const type = get.type(trigger.card);
					return type === 'trick';
				},
				content() {
					'step 0';
					player.chooseUseTarget(get.prompt2(event.name), { name: 'scqh_shanxian' }, false);
					('step 1');
					if (!result.bool) {
						if (player.getStat('triggerSkill')[event.name]) {
							player.getStat('triggerSkill')[event.name] -= 1;
						}
					}
				},
				group: ['scqhLOL_chongjue_ying'],
				subSkill: {
					ying: {
						audio: 'scqhLOL_chongjue',
						forced: true,
						trigger: {
							source: 'damageSource',
						},
						filter(trigger, player) {
							return true;
						},
						content() {
							var count = trigger.num;
							player.gain(lib.card.ying.getYing(count), 'gain2');
						},
					},
				},
			},
			scqhLOL_damie: {
				audio: 1,
				sunbenSkill: true,
				trigger: {
					global: 'phaseBegin',
				},
				filter(trigger, player) {
					return !player.hasSkill('scqhLOL_damie_sunben');
				},
				check(trigger, player) {
					return 1;
				},
				content() {
					'step 0';
					player.addSkill('scqhLOL_damie_sunben');
					var card = get.discardPile(function (card) {
						return card.name == 'sha';
					});
					if (card) player.gain(card, 'gain2');
					('step 1');
					var targets = game.filterPlayer((target) => {
						if (target === player) return false;
						var juli = get.distance(player, target);
						return juli <= 1;
					});
					for (var target of targets) {
						var hs = target.getCards('h');
						if (hs.length) {
							target.addToExpansion(hs, 'giveAuto', target).gaintag.add('scqhLOL_damie_pojun');
							target.addSkill('scqhLOL_damie_pojun');
						}
					}
					('step 2');
					game.updateRoundNumber();
					var next = player.phaseUse();
					event.next.remove(next);
					trigger.next.push(next);
				},
				subSkill: {
					pojun: {
						charlotte: true,
						forced: true,
						popup: false,
						log: false,
						trigger: {
							global: 'phaseUseEnd',
						},
						content() {
							var xs = player.getExpansions('scqhLOL_damie_pojun');
							if (xs.length) {
								player.gain(xs, 'draw');
								game.log(player, '收回了' + get.cnNumber(xs.length) + '张牌');
							}
							player.removeSkill(event.name);
						},
						intro: {
							markcount: 'expansion',
							mark(dialog, storage, player) {
								var xs = player.getExpansions('scqhLOL_damie_pojun');
								if (player.isUnderControl(true)) dialog.addAuto(xs);
								else return '共有' + get.cnNumber(xs.length) + '张牌';
							},
						},
					},
					sunben: {
						charlotte: true,
						mark: true,
						marktext: '<span style="text-decoration: line-through;">大灭</span>',
						intro: {
							content: '未完成任务:0/1',
						},
						forced: true,
						popup: false,
						forced: true,
						trigger: {
							global: 'roundStart',
							source: 'die',
						},
						content() {
							player.removeSkill(event.name);
							player.popup(event.name);
							game.log(player, '回复了技能', '#g【', event.name, '】');
						},
					},
				},
			},
			scqhLOL_qianlong: {
				audio: 1,
				derivation: ['kuwu'],
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
					var disables = [];
					for (var i = 2; i <= 5; i++) {
						for (var j = 0; j < player.countEnabledSlot(i); j++) {
							disables.push(i);
						}
					}
					if (disables.length) {
						for (const i of disables) player.expandEquip(1);
						player.disableEquip(disables);
					}
					('step 1');
					for (var j = 0; j < player.countEnabledSlot(1); j++) {
						var card = game.createCard('kuwu');
						if (player.canEquip(card)) player.equip(card);
					}
				},
			},
			scqhLOL_hanying: {
				audio: 2,
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(trigger, player) {
					const evt = trigger.getl(player);
					if (!evt || !evt.es || !evt.es.length || evt.player !== player) return false;
					const card = {
						name: 'sha',
						cards: evt.es,
					};
					const players = game.filterPlayer((current) => {
						if (player === current) return false;
						return player.canUse(card, current);
					});
					return players.length;
				},
				cost: async function (event, trigger, player) {
					const skillname = 'scqhLOL_hanying';
					const evt = trigger.getl(player);
					const card = {
						name: 'sha',
						cards: evt.es,
					};
					event.result = await player
						.chooseTarget([1, 5], function (card, player, target) {
							if (player === target) return false;
							card = _status.event.card;
							const targets = ui.selected.targets || [];
							if (!targets.length) return player.canUse(card, target);
							if (!player.canUse(card, target, false)) return false;
							for (const current of targets) {
								const list = [current.previous, current.next];
								if (list.includes(target)) return true;
							}
							return false;
						})
						.set('complexSelect', true)
						.set('complexTarget', true)
						.set('card', card)
						.set('prompt', get.prompt(skillname))
						.set('prompt2', '将' + get.translation(evt.es) + '当做【杀】对一至五名其他角色使用')
						.set('ai', function (target) {
							const player = _status.event.player;
							const card = _status.event.card;
							const att = get.attitude(player, target);
							const eff = get.effect(target, card, player, player);
							return att <= 0 && eff > 0;
						})
						.forResult();
				},
				content: async function (event, trigger, player) {
					const targets = event.targets || [];
					const evt = trigger.getl(player);
					const card = {
						name: 'sha',
						cards: evt.es,
					};
					if (targets.length) {
						player.useCard(card, evt.es, targets.sortBySeat(player), false);
					}
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (get.type(card) === 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
						},
					},
				},
			},
			scqhLOL_xiazhen: {
				audio: 2,
				popup: false,
				log: false,
				trigger: {
					target: 'useCardToTargeted',
				},
				usable: 1,
				filter(trigger, player) {
					const hs = player.getCards('he', (card) => get.type(card) === 'equip');
					const list = ['sha', 'juedou'];
					return hs.length && list.includes(trigger.card.name);
				},
				cost: async function (event, trigger, player) {
					const skillname = 'scqhLOL_xiazhen';
					event.result = await player
						.chooseToDiscard('he', get.prompt2(skillname), function (card) {
							return get.type(card) === 'equip';
						})
						.set('ai', function (card) {
							let num = 7;
							const position = get.position(card);
							if (position === 'h') num += 5;
							return num - get.value(card);
						})
						.forResult();
				},
				content: async function (event, trigger, player) {
					trigger.parent.card.scqhLOL_xiazhen = player.playerid;
					player.draw(2);
				},
				group: ['scqhLOL_xiazhen_after'],
				subSkill: {
					after: {
						forced: true,
						trigger: {
							global: 'useCardAfter',
						},
						filter(trigger, player) {
							const id = trigger.card.scqhLOL_xiazhen;
							const damage = player.getHistory('damage', (evt) => {
								return evt.card && evt.card === trigger.card;
							});
							return id && id === player.playerid && !damage.length;
						},
						content() {
							player.scqh_hidePlayer();
						},
					},
				},
			},
			scqhLOL_sunwu: {
				derivation: ['shoulijian', 'scqh_shanxian'],
				audio: 2,
				scqh_lianjiji: [1, 2],
				init(player) {
					player.scqh_lianjiji('init', 'scqhLOL_sunwu');
				},
				intro: {
					name: false,
					content: '当前等级:#/2',
				},
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(trigger, player) {
					if (!player.scqh_lianjiji('filter', 'scqhLOL_sunwu')) return false;
					if (!player.scqh_Shanjiji(trigger)) return false;
					const hs = player.getCards('he');
					return hs.length;
				},
				filterCard: true,
				position: 'he',
				selectCard: 1,
				check(card) {
					const player = _status.event.player;
					const value = get.value(card);
					return 7 - value;
				},
				filterTarget(card, player, target) {
					const countmark = player.countMark('scqhLOL_sunwu');
					if (countmark === 1) {
						if (target === player.next) return true;
						if (target === player.previous) return true;
					} else if (countmark === 2) {
						const storage = player.storage.scqhLOL_sunwu_target || false;
						if (storage && storage === target) {
							const cardx = {
								name: 'scqh_shanxian',
							};
							if (player.canUse(cardx, target, false)) return true;
						}
					}
					return false;
				},
				content() {
					'step 0';
					event.countmark = player.countMark('scqhLOL_sunwu');
					event.current = target === player.next ? player.previous : player.next;
					('step 1');
					player.scqh_lianjiji('content', 'scqhLOL_sunwu');
					('step 2');
					const countmark = event.countmark;
					const current = event.current;
					if (countmark === 1) {
						game.broadcastAll(
							function (target1, target2) {
								game.swapSeat(target1, target2);
							},
							player,
							target
						);
						const card = {
							name: 'shoulijian',
						};
						if (current && current !== target && player.canUse(card, current, false)) {
							player.useCard(card, current, false);
							player.storage.scqhLOL_sunwu_target = current;
						}
					} else {
						const card = {
							name: 'scqh_shanxian',
						};
						player.useCard(card, target, false);
						player.storage.scqhLOL_sunwu_target = false;
					}
					('step 3');
					const evt = event.getParent(2);
					if (evt.type !== 'phase' && evt._result !== 'shaned') evt.result = { bool: false };
				},
				ai: {
					order: 1,
					respondSha: true,
					respondShan: true,
					result: {
						player(player, target) {
							const countmark = player.countMark('scqhLOL_sunwu');
							if (countmark === 1) {
								const current = target === player.next ? player.previous : player.next;
								if (!current || current === target) return 0;
								const card = {
									name: 'shoulijian',
								};
								if (!player.canUse(card, current, false)) return 0;
								const eff = get.effect(current, card, player, player);
								if (eff <= 0) return 0;
								return 1;
							} else {
								const att = get.attitude(player, target);
								const current = _status.currentPhase;
								const seatfunc = function (player, target) {
									const seat = {
										next: 0,
										previous: 0,
									};
									for (const fangxiang in seat) {
										let targetx = player[fangxiang];
										while (targetx !== target && targetx[fangxiang]) {
											targetx = targetx[fangxiang];
											seat[fangxiang] += 1;
										}
									}
									return seat;
								};
								if (current && current === target) {
									const seat = seatfunc(player, target);
									if (seat.previous > seat.next) return 1;
								} else if (current && current === player) {
									const seat = seatfunc(player, target);
									if (att > 0) {
										if (seat.next > seat.previous) return 1;
									} else {
										if (seat.previous > seat.next) return 1;
									}
								} else if (current && current !== player && current !== target) {
									const seat = seatfunc(player, current);
									const seat2 = seatfunc(target, current);
									if (att <= 0) {
										if (seat.previous > seat.next && seat.previous > seat2.previous) return 1;
									}
								}
								return 0;
							}
							return 0;
						},
					},
				},
				subSkill: {
					lianjijionremove: {
						charlotte: true,
						onremove(player) {
							player.storage.scqhLOL_sunwu_target = false;
							player.scqh_lianjiji('onremove', 'scqhLOL_sunwu');
						},
					},
				},
			},
			scqhLOL_guyong: {
				audio: 2,
				forced: true,
				trigger: {
					global: 'phaseJieshu',
				},
				filter(trigger, player) {
					if (player.hp >= player.maxHp) return false;
					const players = game.filterPlayer((current) => {
						if (current === player) return false;
						const usable = current.getHistory('useCard', function (evt) {
							return evt.targets && evt.targets.includes(player);
						});
						return usable.length;
					});
					return !players.length;
				},
				content() {
					player.recover();
				},
			},
			scqhLOL_wuwei: {
				audio: 3,
				forced: true,
				trigger: {
					player: 'useCard',
				},
				filter(trigger, player) {
					return trigger.card.name === 'sha';
				},
				content() {
					'step 0';
					player.link(false);
					('step 1');
					player.turnOver(false);
				},
				group: ['scqhLOL_wuwei_audio', 'scqhLOL_wuwei_fengyin'],
				subSkill: {
					audio: {
						forced: true,
						trigger: {
							player: 'useCardBegin',
						},
						filter(trigger, player) {
							return trigger.card.name === 'sha';
						},
						content() {
							trigger.audio = false;
						},
					},
					fengyin: {
						forced: true,
						trigger: {
							player: 'shaHit',
						},
						filter(trigger, player) {
							return trigger.target && trigger.target !== player && !trigger.target.hasSkill('fengyin');
						},
						content() {
							trigger.target.addTempSkill('fengyin');
						},
					},
				},
			},
			scqhLOL_shenpan: {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				content: async function (event, trigger, player) {
					let usable = 0;
					let hasSha = true;
					while (hasSha && usable < 3) {
						usable++;
						const cards = get.cards(3);
						await game.cardsGotoOrdering(cards);
						await player.showCards(cards);
						const sha = cards.filter((card) => card.name === 'sha');
						if (!sha.length) hasSha = false;
						for (const card of sha) {
							const prompt = '是否立即使用' + get.translation(card) + '？';
							const result = await player.chooseUseTarget(prompt, card, false).forResult();
							if (!result || !result.bool) break;
						}//QQQ
					}
				},
				ai: {
					order: 1,
					result: {
						player: 1,
					},
				},
			},
			scqhLOL_caijue: {
				audio: 2,
				sunbenSkill: true,
				enable: 'phaseUse',
				filter(trigger, player) {
					if (player.hasSkill('scqhLOL_caijue_sunben')) return false;
					return true;
				},
				filterTarget(card, player, target) {
					if (player === target) return false;
					return player.inRange(target);
				},
				content() {
					player.addSkill('scqhLOL_caijue_sunben');
					const num = target.getDamagedHp() + 1;
					target.damage('nocard', num);
				},
				ai: {
					order: 1,
					damage: true,
					result: {
						player(player, target) {
							const att = get.attitude(player, target);
							const deff = get.damageEffect(target, player, player);
							const countmark = target.countMark('scqhLOL_chuxue') + 1;
							if (att < 0 && deff > 0) return 1;
							return 0;
						},
					},
				},
				subSkill: {
					sunben: {
						charlotte: true,
						mark: true,
						marktext: '<span style="text-decoration: line-through;">裁决</span>',
						intro: {
							content: '未完成任务:0/1',
						},
						forced: true,
						popup: false,
						forced: true,
						trigger: {
							global: 'roundStart',
						},
						filter(trigger, player) {
							return true;
						},
						content() {
							game.log(player, '回复了技能', '#g【', event.name, '】');
							player.removeSkill(event.name);
							player.popup(event.name);
						},
					},
				},
			},
		},
		translate: {
			scqhLOL_cisi: '赐死',
			scqhLOL_cisi_info: ['闪击技,连击技(１／３),你可以弃置Ｘ张牌,视为对距离Ｙ以内的〇至Ｘ名其他角色使用一张【铁索连环】,视为对所有处于连环状态且距离为Ｙ的角色使用一张火【杀】.', '◆一级:Ｘ＝１、Ｙ＝３', '◆二级:Ｘ＝２、Ｙ＝２', '◆三级:Ｘ＝３、Ｙ＝１'].join('</br>'),
			scqhLOL_chongjue: '冲决',
			scqhLOL_chongjue_info: '每回合限一次,当你使用的普通锦囊牌结算完毕后,你可以视为使用一张【闪现】.当你对一名角色造成伤害后,你获得数量与伤害相等的【影】.',
			scqhLOL_damie: '大灭',
			scqhLOL_damie_info: ['昂扬技,一名角色的回合开始时,你可以进行一个额外的出牌阶段并从弃牌堆中获得一张【杀】,将距离１以内的所有其他角色的手牌依次置于其武将牌上,直到此阶段结束.', '<font color = #ffddb9>◆激昂:一轮结束或击杀一名角色</font>'].join('</br>'),
			scqhLOL_qianlong: '潜龙',
			scqhLOL_qianlong_info: '游戏开始时,你废除武器栏之外的所有装备栏,获得等量的额外武器栏,并从场外获得【苦无】塞满你的装备区.',
			scqhLOL_hanying: '寒影',
			scqhLOL_hanying_info: '当你失去装备区里的牌后,你可以将这些牌当做【杀】对一至五名其他角色使用(从第二个目标开始,选择目标将不受距离限制且只能选择与这些角色座位相邻的角色).',
			scqhLOL_xiazhen: '霞阵',
			scqhLOL_xiazhen_info: '每回合限一次,当你成为【杀】或【决斗】的目标后,你可以弃置一张装备牌,摸两张牌;此牌结算完毕后,若未对你造成过伤害,你进入隐匿状态.',
			scqhLOL_sunwu: '隼舞',
			scqhLOL_sunwu_info: ['闪击技,连击技(１／２),你可以弃置一张牌:', '◆一级:与一名邻座角色交换座位,视为对另一名邻座角色使用一张【手里剑】并标记该角色,直到回合结束.', '◆二级:视为对标记角色使用一张【闪现】.'].join('</br>'),
			scqhLOL_guyong: '孤勇',
			scqhLOL_guyong_info: '锁定技,一名角色的结束阶段,若你于本回合内未成为过其他角色使用牌的目标,则回复一点体力.',
			scqhLOL_wuwei: '无畏',
			scqhLOL_wuwei_info: '锁定技,当你使用【杀】时,复原你的武将牌;当你的【杀】命中目标时,令该角色的非锁定技失效直到回合结束.',
			scqhLOL_shenpan: '审判',
			scqhLOL_shenpan_info: '出牌阶段限一次,你可以亮出牌堆顶的三张牌,若有【杀】,你可以使用之并重复此步骤(最多重复两次).',
			scqhLOL_caijue: '裁决',
			scqhLOL_caijue_info: ['昂扬技,出牌阶段,你可以对攻击范围内的一名其他角色造成Ｘ点伤害(Ｘ为其已损失的体力值+1).', '<font color = #ffddb9>◆激昂:一轮结束</font>'].join('</br>'),
			scqhLOL_fuyan: '覆岩',
			scqhLOL_fuyan_info: '锁定技.每当你的获得或失去护甲时,你的体力上限也随之增加或减少.每回合的结束阶段,若你于本回合内未受到过伤害,则你获得１点护甲.',
			scqhLOL_dizhen: '地震',
			scqhLOL_dizhen_info: ['昂扬技,你可以将一张牌当做【闪现】使用,击飞你距离１以内的所有其他角色并且各造成Ｘ点伤害(Ｘ为你的护甲值+1).', '<font color = #70DB93>◆激昂:你累计获得了３点护甲</font>'].join('</br>'),
			scqhLOL_zhican: '致残',
			scqhLOL_zhican_info: '锁定技,当你对其他角色造成伤害后,其获得一层【出血】,至多五层.拥有五层【出血】的角色受到来自你的伤害后,或成为你使用【杀】的目标后,你摸五张牌并获得【血怒】,直到回合结束(每回合限一次).',
			scqhLOL_chuxue: '出血',
			scqhLOL_chuxue_info: '锁定技,结束阶段,你弃置〇至Ｘ张手牌,流失Ｙ点体力并移去Ｙ层【出血】(Ｘ为你拥有的【出血】层数;Ｙ为Ｘ减去你的弃牌数).',
			scqhLOL_xuenu: '血怒',
			scqhLOL_xuenu_info: '锁定技,当你对其他角色造成伤害时,其获得【出血】直至五层,并且令此伤害+1.',
			scqhLOL_chongwu: '崇武',
			scqhLOL_chongwu_info: '当你使用【杀】指定目标后,你可以弃置一张牌,将攻击范围内的所有其他角色视作额外目标,且体力值不大于你的目标角色需要额外使用一张【闪】才能抵消此牌;此牌结算完毕后,你回复Ｘ点体力(Ｘ为因此牌受到伤害的其他角色数).',
			scqhLOL_chuwang: '除王',
			scqhLOL_chuwang_info: ['昂扬技,闪击技,你可以对攻击范围内一名其他角色造成Ｘ点伤害(Ｘ为该角色的【出血】层数+1).', '<font color = #ffddb9>◆激昂:一轮结束或击杀一名角色</font>'].join('</br>'),
			scqhLOL_haoqing: '豪情',
			scqhLOL_haoqing_info: '锁定技,转换技,当你声明使用一张【杀】时:阳,令此牌不计入次数限制;阴:令此牌额外结算一次.',
			scqhLOL_lielu: '裂颅',
			scqhLOL_lielu_info: '每回合限一次,当你使用一张基本牌时,你可以视为对距离为１的至多两名其他角色使用一张【铁索连环】;若选择的角色数大于１且包括你的上家和下家,则令这些角色不能使用或打出手牌,直到回合结束.',
			scqhLOL_hongquan: '轰拳',
			scqhLOL_hongquan_info: ['蓄力技(０／体力上限的一半且向下取整),闪击技,每回合限一次,你可以消耗所有蓄力值,将Ｘ张【护盾】置入你的判定区并对距离在Ｘ以内的所有其他角色依次造成Ｘ点伤害(Ｘ为你消耗的蓄力值).', '<font color = #ffddb9>◆蓄力:受到一点伤害</font>'].join('</br>'),
			scqhLOL_zhanfeng: '斩风',
			scqhLOL_zhanfeng_info: ['连击技(１／３),你可以将一张牌当做【杀】使用.', '◆一级:摸一张牌.', '◆二级:摸一张牌.', '◆三级:此牌没有距离限制,且结算完毕后,击飞因此受到过伤害的目标角色.'].join('</br>'),
			scqhLOL_tafeng: '踏风',
			scqhLOL_tafeng_info: '你可以将一张牌当做【闪现】使用(不能选择自己以及本回合已选择过的角色为目标);若如此做,你可以通过【斩风】对距离为１的所有其他角色使用一张【杀】.',
			scqhLOL_juexi: '绝息',
			scqhLOL_juexi_info: '每回合限一次,其他角色被击飞时,你可以重置【斩风】并视为对其中一名角色使用一张【闪现】,视为对你与其距离１以内的所有处于浮空状态的其他角色使用一张【杀】.',
			scqhLOL_xinyan: '心眼',
			scqhLOL_xinyan_info: '锁定技,每轮开始时,每名其他角色依次清除所有【破绽】并从♥️️♦️️♠️️♣️️中随机选择一个花色当【破绽】;当你使用牌指定其他角色为目标后,若此牌的花色与该角色的【破绽】相同,则你摸一张牌或回复一点体力,刷新该角色的【破绽】(每名角色每种花色每轮各限一次).',
			scqhLOL_pokong: '破空',
			scqhLOL_pokong_info: '每回合限一次,你可以将一张牌当做【scqh_shanxian※】使用,视为对距离为１的一名其他角色使用一张【杀】,若造成了伤害,则你摸一张牌.',
			scqhLOL_jianwu: '剑舞',
			scqhLOL_jianwu_info: ['昂扬技,回合开始时,你可以获得一个额外的出牌阶段并且令一名其他角色获得全部四种【破绽】;当你于本回合内对该角色使用的牌结算完毕后,若其没有任何【破绽】或已死亡,则你将体力回复至体力上限数、将手牌摸至体力上限数.', '<font color = #ffe14c>◆激昂:一轮结束</font>'].join('</br>'),
			scqhLOL_rongyao: '荣耀',
			scqhLOL_rongyao_info: '锁定技,当你使用一张【杀】时,你获得一层【崇拜】;当你击杀一名其他角色时,你失去所有【崇拜】层数并摸等量的牌;你的手牌上限基数不小于【崇拜】层数.',
			scqhLOL_huiren: '回刃',
			scqhLOL_huiren_info: '当你使用一张【杀】结算完毕后,你可以弃置一张与之相同花色的牌,获得这张【杀】的实体牌,且你于本回合内可以额外使用一张【杀】.',
			scqhLOL_kaidao: '开道',
			scqhLOL_kaidao_info: '你可以将一张武器牌当做【杀】使用;当你以此法使用【杀】指定目标后,你可以弃置其一张牌,若其没有手牌,则令此【杀】对其造成的伤害+1.',
			scqhLOL_xuanren: '回刃',
			scqhLOL_xuanren_info: '当你使用一张【杀】时,你可以弃置一张与之相同花色的牌,令此牌额外结算一次;若如此做,此牌结算完毕后,你获得此牌的实体牌.',
			scqhLOL_tanshe: '弹射',
			scqhLOL_tanshe_info: '每回合限三次,当你使用【杀】指定一个目标时,你可以令其随机展示一张手牌,若其没有手牌或未展示【闪】,则将其距离１以内的另一名其他角色指定为此【杀】的额外目标.',
			scqhLOL_shoulie: '狩猎',
			scqhLOL_shoulie_info: '你的武器牌可以当做【杀】使用,且可以选择距离在Ｘ以内的角色为目标(Ｘ为此牌的攻击范围);你的非武器牌可以当做【无懈可击】使用,将手牌补充至体力上限(直到你下次造成伤害前,你不能再以此法使用【无懈可击】).',
			scqhLOL_zhiyi: '峙弈',
			scqhLOL_zhiyi_info: '锁定技,当你使用或打出牌后,你获得Ｘ枚峙弈点数(Ｘ为牌面点数;至多９９);回合开始时,若你的峙弈点数为９９,则重置武将牌、摸三张牌、将体力回复至三点,因红色牌而获得的峙弈点数较多,则将武将牌替换成【暗裔杀手】,因黑色牌而获得的峙弈点数较多,则将武将牌替换成【影流刺客】.',
			scqhLOL_lueying: '掠影',
			scqhLOL_lueying_info: '锁定技,每回合限两次,每当你使用或打出两张基本牌时,你摸一张牌,可以视为使用一张【过河拆桥】(点数与此次使用或打出的基本牌相同).',
			scqhLOL_sheying: '舍影',
			scqhLOL_sheying_info: ['闪击技,每轮限一次,你可以将一张【杀】置入一名你于本回合内造成过伤害且距离在<font color = #b0d0e2>１</font>以内的其他角色的判定区,离开游戏;若如此做,当该角色失去你以此法置入其判定区里的牌后,你返回游戏,对其造成<font color = #b0d0e2>１</font>点伤害.', '<font color = #b0d0e2>●影流刺客:数字+1</font>'].join('</br>'),
			scqhLOL_zongrenred: '纵刃',
			scqhLOL_zongrenred_info: '出牌阶段,你可以将一张牌当做【杀】使用.',
			scqhLOL_zongrenblack: '纵刃',
			scqhLOL_zongrenblack_info: '出牌阶段,你可以将一张牌当做【杀】使用;当你造成伤害后,你可以选择一项:.',
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

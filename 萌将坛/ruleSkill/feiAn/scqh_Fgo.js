'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqh_fgo_xx: {
				enable: 'phaseUse',
				content() {
					player.scqh_NobleArms();
				},
				group: 'scqh_fgo_xx',
			},
			scqh_fgo_仰慕: {
				derivation: 'scqh_fgo_叛袭',
				forced: true,
				trigger: {
					player: 'phaseUseBegin',
				},
				filter(event, player) {
					return player.getCards('h').length;
				},
				content() {
					'step 0';
					player.chooseCardTarget({
						prompt: get.prompt(event.name),
						prompt2: get.translation(event.name + '_info'),
						position: 'h',
						filterCard(card, player, event) {
							return true;
						},
						filterTarget(card, player, target) {
							return target != player;
						},
						ai1(card) {
							if (card.name == 'du') return 20;
							return 7 - get.value(card);
						},
						ai2(target) {
							var player = _status.event.player;
							var att = get.attitude(player, target);
							return att <= 0;
						},
					});
					('step 1');
					if (result && result.bool) {
						event.cards = result.cards;
						event.target = result.targets[0];
						player.showCards(event.cards);
						var next = event.target.chooseControl('拒绝', '同意');
						next.set('prompt', '请选择接受或拒绝' + get.translation(event.cards));
						next.set('ai', function () {
							var yes = '同意';
							var no = '拒绝';
							var player = _status.event.player;
							var source = _status.event.source;
							if (event.cards[0].name == 'du') return no;
							if (!player.countGainableCards(player, 'he')) return yes;
							if (get.attitude(player, source) >= 1) return yes;
							return ['拒绝', '同意'].randomGet();
						});
						next.set('source', player);
					} else event.finish();
					('step 2');
					if (result.control) {
						var store = player.storage[event.name] || {};
						if (!store.no || !store.no.length) store.no = [];
						if (!store.yes || !store.yes.length) store.yes = [];
						if (result.control == '拒绝') {
							store.no.add(event.target);
							player.storage[event.name] = store;
							player.addTempSkill('scqh_fgo_叛袭', { player: 'phaseBegin' });
							event.finish();
						} else {
							store.yes.add(event.target);
							player.storage[event.name] = store;
							player.give(event.cards, event.target);
						}
					} else event.finish();
					('step 3');
					var he = event.target.getGainableCards(player, 'he', (card) => !event.cards.includes(card));
					if (he.length) {
						var next = player.gainPlayerCard(event.target, 'he', true, 'visible');
						next.set('complexCard', true);
						next.set('filterButton', function (button) {
							if (event.cards.includes(button.link)) return false;
							var usb = ui.selected.buttons;
							if (usb.length) {
								if (usb.length >= 2) return false;
								if (get.position(usb[0].link, true) == get.position(button.link, true)) {
									return false;
								}
							}
							return true;
						});
						next.set('selectButton', function () {
							let num = 0;
							let player = _status.event.player;
							for (const i of ['h', 'e']) {
								if (
									event.target.countGainableCards(player, i, function (card) {
										return !event.cards.includes(card);
									})
								)
									num++;
							}
							return num;
						});
					} else event.finish();
					('step 4');
					if (result && result.bool) {
						var one = get.color(event.cards[0]);
						var two = get.color(result.cards[0]);
					}
				},
			},
			scqh_fgo_叛袭: {
				map(event, player) {
					var map = {
						bool: true,
						cards: [],
						targets: [],
					};
					player.getHistory('lose', function (evt) {
						if (!map.bool || evt.getParent(event.name) != event) return false;
						for (const i of evt.cards2) {
							if (get.position(i, true) == 'd') {
								map.cards.add(i);
								if (!game.checkMod(i, player, 'unchanged', 'cardEnabled2', player)) map.bool = false;
							}
						}
					});
					var store = player.storage.scqh_fgo_仰慕 || {};
					for (const i of store.no) {
						var cards = { name: 'chuqibuyi', cards: map.cards };
						if (player.canUse(cards, i)) map.targets.add(i);
					}
					return map;
				},
				mark: true,
				intro: {
					mark(dialog, storage, player) {
						var evt = _status.event;
						var phase = evt.getParent('phaseUse') || evt.getParent('phaseDiscard');
						var store = storage || [];
						if (store.length) dialog.addSmall(store);
						var map = lib.skill.scqh_fgo_叛袭.map(phase, player);
						if (map.cards.length) dialog.addSmall(map.cards);
					},
				},
				forced: true,
				trigger: {
					global: ['phaseUseEnd', 'phaseDiscardEnd'],
				},
				filter(event, player) {
					var map = lib.skill.scqh_fgo_叛袭.map(event, player);
					return map.targets.length && map.cards.length;
				},
				content() {
					'step 0';
					var map = lib.skill[event.name].map(trigger, player);
					var next = player.chooseTarget(function (card, player, target) {
						return map.targets.includes(target);
					});
					var str = '是否将' + get.translation(map.cards) + '(共计';
					str += get.cnNumber(map.cards.length) + '张牌)当做【出其不意】对';
					str += get.translation(map.targets);
					str += map.targets.length > 1 ? '中的一人' : '';
					str += '使用';
					next.set('prompt2', str);
					next.set('ai', function (target) {
						var player = _status.event.player;
						return get.attitude(player, target) < 0;
					});
					('step 1');
					if (result && result.bool) {
						var map = lib.skill[event.name].map(trigger, player);
						var card = { name: 'chuqibuyi' };
						player.useCard(card, map.cards, result.targets[0]);
					}
				},
			},
			scqh_fgo_忤逆: {
				global: 'g_chenhuodajie',
				cards(player) {
					var store = player.getStorage('scqh_fgo_仰慕') || {
						yes: [],
						no: [],
					};
					var cards = [];
					for (var target of store.yes) {
						if (!target.isAlive()) continue;
						var es = target.getCards('e');
						if (!es.length) continue;
						for (var card of es) cards.add(card);
					}
					return cards;
				},
				hiddenCard(player, name) {
					var names = ['sha', 'shan', 'chenhuodajie'];
					var cards = lib.skill.scqh_fgo_忤逆.cards(player) || [];
					if (names.includes(name)) return cards.length;
				},
				enable: ['chooseToUse'],
				filter(event, player) {
					var cards = lib.skill.scqh_fgo_忤逆.cards(player) || [];
					if (!cards.length) return false;
					var names = ['sha', 'shan', 'chenhuodajie'];
					for (var name of names) {
						if (event.filterCard && event.filterCard({ name: name }, player, event)) {
							return true;
						}
					}
					return false;
				},
				chooseButton: {
					dialog(event, player) {
						var names = ['sha', 'shan', 'chenhuodajie'];
						var bool = 'sha';
						for (var name of names) {
							if (event.filterCard && event.filterCard({ name: name }, player, event)) {
								bool = name;
								break;
							}
						}
						var vcards = [];
						var cards = lib.skill.scqh_fgo_忤逆.cards(player) || [];
						for (var card of cards) {
							vcards.push([get.owner(card), '', card.name, get.nature(card), card, bool]);
						}
						var dialog = ui.create.dialog('忤逆', [vcards, 'vcard'], 'hidden');
						dialog.direct = true;
						return dialog;
					},
					filter(button, player) {
						return true;
						var evt = _status.event.parent;
						return evt.filterCard(button.link[5], player, evt);
					},
					check(button) {
						return true;
						var player = _status.event.player;
						var evt = _status.event.parent;
						if (evt.dying) return get.attitude(player, evt.dying);
						return player.getUseValue({ name: button.link[5] });
					},
					backup(links, player) {
						return {
							popname: true,
							viewAs: {
								name: links[0][5],
								scqh_fgo_忤逆: true,
							},
							card: links[0][4],
							filterCard: () => false,
							selectCard: -1,
							precontent() {
								var sn = 'scqh_fgo_忤逆';
								var card = lib.skill[sn + '_backup'].card;
								var target = get.owner(card);
								player.showCards(card, '忤逆');
								target.draw();
								event.result.cards = [card];
							},
						};
					},
					prompt(links, player) {
						var str = '将';
						str += get.translation(links[0][0]);
						str += '装备区里的';
						str += get.translation(links[0][4]) || '';
						str += '当做【';
						str += get.translation(links[0][5]);
						str += '】使用';
						return str;
					},
				},
				ai: {
					respondSha: true,
					respondShan: true,
					order(item, player) {
						return 5;
					},
					result: {
						player: 1,
					},
				},
			},
			scqh_fgo_幻奏: {
				enable: 'phaseUse',
				content() {
					player.scqh_NobleArms();
				},
			},
			scqh_fgo_痛汲: {},
			scqh_fgo_武炼: {
				enable: ['chooseToUse'],
				filter(event, player) {
					if (player.isDying()) return false;
					for (var name of ['sha', 'shan', 'jiu']) {
						if (event.filterCard && event.filterCard({ name: name }, player, event)) {
							return true;
						}
					}
					return false;
				},
				chooseButton: {
					dialog(event, player) {
						var vcards = [];
						for (var name of ['sha', 'shan', 'jiu']) {
							if (event.filterCard && event.filterCard({ name: name }, player, event)) {
								vcards.push(['基本', '', name]);
							}
						}
						var dialog = ui.create.dialog('武炼', [vcards, 'vcard'], 'hidden');
						dialog.direct = true;
						return dialog;
					},
					check(button) {
						var player = _status.event.player;
						return player.getUseValue({
							name: button.link[2],
							nature: button.link[3],
						});
					},
					backup(links, player) {
						return {
							popname: true,
							filterCard(card, player, event) {
								return false;
							},
							selectCard: -1,
							position: 'hes',
							check(card) {
								return true;
							},
							viewAs: {
								name: links[0][2],
								scqh_fgo_武炼: true,
							},
							precontent() {
								var ccc = get.cards();
								player.showCards(ccc);
								event.result.cards = ccc;
								if (get.type2(event.result.cards[0]) != get.type2(event.result.card)) {
									player.loseHp();
									var sn = 'scqh_fgo_武炼_sha';
									if (!player.storage[sn]) player.storage[sn] = 0;
									player.storage[sn]++;
									player.addTempSkill(sn);
								}
							},
						};
					},
					prompt(links, player) {
						var card = (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
						return '将牌堆顶的一张牌当做【' + card + '】使用.';
					},
				},
				ai: {
					respondSha: true,
					respondShan: true,
					save: true,
					order(item, player) {
						return 5;
					},
					result: {
						player: 1,
					},
				},
				subSkill: {
					sha: {
						mod: {
							cardUsable(card, player, num) {
								if (card.name == 'sha') return num + (player.storage.scqh_fgo_武炼_sha || 0);
							},
						},
					},
				},
			},
			scqh_fgo_夺锋: {
				trigger: {
					source: 'damageSource',
				},
				usable: 2,
				filter(event, player) {
					if (event.player == player) return false;
					if (get.distance(player, event.player) > 1) return false;
					return event.player.countGainableCards(player, 'hej');
				},
				content() {
					'step 0';
					var next = player.choosePlayerCard(true, trigger.player, 'hej', get.prompt(event.name));
					next.set('ai', function (button) {
						if (!_status.event.goon) return 0;
						var val = get.value(button.link);
						if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
						return val;
					});
					next.set('goon', get.attitude(player, trigger.player) <= 0);
					next.set('forceAuto', true);
					('step 1');
					if (result && result.bool && result.cards && result.cards.length) {
						var card = result.cards[0];
						event.card = card;
						event.position = get.position(card);
						player.gain(card, trigger.player, 'give');
					} else event.finish();
					('step 2');
					if (event.position == 'e' && player.getCards('hes').includes(event.card)) {
						player.chooseBool('【夺锋】:是否弃置' + get.translation(card) + '并拓印一张【圣剑】相关的牌');
					} else event.finish();
					('step 3');
					if (result && result.bool) {
						player.discard(event.card);
						player.scqh_NobleArms('all');
					}
				},
			},
			scqh_fgo_忤逆x: {
				init(player, skill) {
					if (player.storage[skill] == undefined) {
						player.storage[skill] = [];
					}
					if (player.storage[skill + 'head'] == undefined) {
						var list = [player.name1, player.name2];
						var strt = list[0];
						for (const i of list) {
							var info = lib.character[i];
							if (i && info && info[3] && info[3].includes(skill)) {
								strt = i;
								break;
							}
						}
					} else var strt = player.storage[skill + 'head'];
					var info = lib.character[strt];
					var str = {
						name: strt,
						hp: player.hp,
						maxHp: player.maxHp,
						hs: player.getCards('h'),
						es: player.getCards('e'),
						alive: true,
					};
					var pushs = false;
					for (var i = 0; i < player.storage[skill].length; i++) {
						if (player.storage[skill][i].name == str.name) {
							player.storage[skill][i] = str;
							pushs = true;
							break;
						}
					}
					if (pushs != true) player.storage[skill].push(str);
					return str;
				},
				fixed: true,
				troopSkill: true,
				enable: 'phaseUse',
				filter(event, player, name) {
					var skn = 'scqh_fgo_忤逆';
					if (player.hasSkill(skn + '_init') && player.hasSkill(skn + '_dis')) return false;
					return true;
				},
				content() {
					'step 0';
					var list = [];
					for (var i in lib.character) {
						if (i.includes('圣骑士')) list.push(i);
					}
					var listinit = [];
					var storage = player.storage[event.name];
					for (var i = 0; i < storage.length; i++) {
						if (list.includes(storage[i].name)) list.remove(storage[i].name);
						if (storage[i].alive == true) listinit.push(storage[i].name);
					}
					var deads = game.players.concat(game.dead);
					for (var i = 0; i < deads.length; i++) {
						list.remove(deads[i].name);
						list.remove(deads[i].name1);
						list.remove(deads[i].name2);
					}
					var alives = game.players;
					for (var i = 0; i < alives.length; i++) {
						list.remove(alives[i].name);
						list.remove(alives[i].name1);
						list.remove(alives[i].name2);
						listinit.remove(alives[i].name);
						listinit.remove(alives[i].name1);
						listinit.remove(alives[i].name2);
					}
					if (list.length || listinit.length) {
						var next = player.chooseButton(true);
						next.set('ai', function (button) {
							return get.rank(button.link, true) - lib.character[button.link][2];
						});
						var str = [];
						if (!player.hasSkill(event.name + '_dis') && list.length) {
							str.push('选择一名「圣骑士」加入军团', [list, 'character']);
						}
						if (!player.hasSkill(event.name + '_init') && listinit.length) {
							str.push('选择一名「圣骑士」进入战场', [listinit, 'character']);
						}
						next.set('createDialog', str);
					} else {
						player.addTempSkill(event.name + '_init');
						player.addTempSkill(event.name + '_dis');
						event.finish();
					}
					('step 1');
					if (result.bool) {
						var info = lib.skill[event.name].init(player, event.name);
						var initing = false;
						var str = [];
						for (const i of player.storage[event.name]) {
							if (i.name == result.links[0]) {
								str = i;
								initing = true;
								break;
							}
						}
						if (initing == true) {
							player.lose(player.getCards('he'), ui.special)._triggered = null;
							if (str.hs && str.hs.length) player.directgain(str.hs);
							if (str.es && str.es.length) {
								for (const i of str.es) {
									player.equip(i);
								}
							}
							player.reinit(info.name, str.name, [str.hp, str.maxHp]);
							player.addTempSkill(event.name + '_init');
							player.storage[event.name + 'head'] = str.name;
						} else {
							info = lib.character[result.links[0]];
							var str = {
								name: result.links[0],
								hp: get.infoHp(info[2]),
								maxHp: get.infoMaxHp(info[2]),
								hs: get.cards(4),
								alive: true,
							};
							player.storage[event.name].push(str);
							player.discardPlayerCard(player, 'e', true);
							player.addTempSkill(event.name + '_dis');
						}
					}
				},
				ai: {
					order(item, player) {
						return 1;
					},
					result: {
						player(player, target) {
							return 1;
						},
					},
				},
				group: ['scqh_fgo_忤逆_die', 'scqh_fgo_忤逆2'],
				subSkill: {
					init: {
						charlotte: true,
					},
					dis: {
						charlotte: true,
					},
					die: {
						forced: true,
						forceDie: true,
						trigger: {
							player: 'dieBefore',
						},
						filter(event, player, name) {
							return player.storage.scqh_fgo_忤逆 != undefined;
						},
						content() {
							'step 0';
							var list = [];
							event.skn = 'scqh_fgo_忤逆';
							var info = lib.skill[event.skn].init(player, event.skn);
							var st = player.storage[event.skn];
							for (var i = 0; i < st.length; i++) {
								if (st[i].name == info.name) {
									player.storage[event.skn][i].alive = false;
								}
								if (st[i].alive == true) list.push(st[i].name);
							}
							var deads = game.players.concat(game.dead);
							for (var i = 0; i < deads.length; i++) {
								list.remove(deads[i].name);
								list.remove(deads[i].name1);
								list.remove(deads[i].name2);
							}
							var alives = game.players;
							for (var i = 0; i < alives.length; i++) {
								list.remove(alives[i].name);
								list.remove(alives[i].name1);
								list.remove(alives[i].name2);
							}
							if (list.length) {
								var next = player.chooseButton(true);
								next.set('ai', function (button) {
									return get.rank(button.link, true) - lib.character[button.link][2];
								});
								var str = [];
								str.push('选择一名「圣骑士」进入战场', [list, 'character']);
								next.set('createDialog', str);
							} else event.finish();
							('step 1');
							if (result.bool) {
								var st = player.storage[event.skn];
								for (var i = 0; i < st.length; i++) {
									if (st[i].name == result.links[0]) {
										var str = st[i];
										break;
									}
								}
								var info = lib.skill[event.skn].init(player, event.skn);
								player.lose(player.getCards('he'), ui.special)._triggered = null;
								if (str.hs && str.hs.length) player.directgain(str.hs);
								if (str.es && str.es.length) {
									for (const i of str.es) {
										player.equip(i);
									}
								}
								player.reinit(info.name, str.name, [str.hp, str.maxHp]);
								player.storage[event.skn + 'head'] = str.name;
								trigger.cancel();
							}
						},
					},
				},
			},
			scqh_fgo_叛袭x: {
				forced: true,
				hiddenSkill: true,
				trigger: {
					player: 'showCharacterAfter',
				},
				filter(event, player) {
					var strt = _status.currentPhase;
					return strt && strt != player && strt.isAlive() && strt.countCards('he');
				},
				content() {
					'step 0';
					event.strt = _status.currentPhase;
					var next = player.chooseBool();
					next.set('prompt', get.prompt(event.name, event.strt));
					next.set('prompt2', get.translation(event.name + '_info'));
					next.set('ai', function () {
						var player = _status.event.player;
						if (!player.isTurnedOver() && event.strt.next == player) {
							return true;
						}
						return false;
					});
					('step 1');
					if (result.bool) {
						var position = '';
						var num = 0;
						if (event.strt.countCards('h')) {
							position += 'h';
							num++;
						}
						if (event.strt.countCards('e')) {
							position += 'e';
							num++;
						}
						var str = '选择一张手牌区和装备区内的牌,未选择的牌将被当做【出其不意】对你使用';
						var next = event.strt.chooseCard(
							str,
							position,
							num,
							function (card) {
								if (ui.selected.cards.length) return get.position(card) != get.position(ui.selected.cards[0]);
								return true;
							},
							true
						);
						next.set('complexCard', true);
						next.set('ai', function (card) {
							return get.value(card);
						});
					} else event.finish();
					('step 2');
					if (result.bool) {
						var pos = [];
						event.strc = event.strt.getCards('he', function (card) {
							for (const i of result.cards) {
								if (card == i) {
									if (get.position(card) == 'h') {
										pos.push(i);
									}
									return false;
								}
							}
							return true;
						});
						var list = ['club', 'heart', 'spade', 'diamond'];
						var next = player.chooseControl(list);
						next.set('ai', function () {
							var suit = pos[0].suit;
							if (suit && list.includes(suit)) list.remove(suit);
							if (list.length >= 2) return list.randomGet();
							return 0;
						});
					} else event.finish();
					('step 3');
					if (result.control && player.canUse('chuqibuyi', event.strt)) {
						event.strt.lose(event.strc, ui.discardPile)._triggered = null;
						var cards = { name: 'chuqibuyi', suit: result.control };
						player.useCard(cards, event.strc, event.strt);
					}
				},
				group: 'scqh_fgo_叛袭_hidden',
				subSkill: {
					hidden: {
						charlotte: true,
						forced: true,
						trigger: {
							global: 'phaseEnd',
						},
						filter(event, player, name) {
							return !player.getStat('damage');
						},
						content() {
							player.sew_hidePlayer();
						},
					},
				},
			},
			scqh_fgo_圣刻: {
				mod: {
					aiValue(player, card, val) {
						var num = card.number;
						if (num % 3 == 0) return val * 2.1;
					},
					aiUseful(player, card, val) {
						var num = card.number;
						if (num % 3 == 0) return val * 2.1;
					},
					aiOrder(player, card, order) {
						var store = player.storage.scqh_fgo_圣刻 || [];
						var num = card.number;
						var num2 = num + player.countMark('charge');
						var num3 = num - player.countMark('charge');
						var list = [num, num2, num3];
						switch (store.length) {
							case 0: {
								if (list.includes(9)) order += 9;
								break;
							}
							case 1: {
								if (list.includes(12)) order += 9;
								break;
							}
							case 2: {
								if (list.includes(3)) order += 9;
								break;
							}
							case 3: {
								if (list.includes(6)) order += 9;
								break;
							}
						}
						for (const i of list) {
							if (i % 3 == 0) order += 3;
						}
						return order;
					},
				},
				forced: true,
				marktext: '🔅',
				mark: true,
				intro: {
					content(storage, player, skill) {
						var num = lib.skill.scqh_fgo_圣刻.intro.markcount(storage, player);
						return '使用或打出点数为' + num + '的牌可以拓印一张圣剑';
					},
					markcount(storage, player) {
						if (storage.length == 0) return 9;
						if (storage.length == 1) return 12;
						if (storage.length == 2) return 3;
						if (storage.length == 3) return 6;
						return 9;
					},
				},
				init(player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [];
				},
				trigger: {
					player: ['useCardAfter', 'respondAfter'],
				},
				usable: Infinity,
				filter(event, player, name) {
					var num = event.card.number;
					if (!num || typeof num != 'number' || num % 3 != 0) return false;
					return true;
				},
				content() {
					'step 0';
					player.draw();
					('step 1');
					var num = trigger.card.number;
					var store = player.storage[event.name] || [];
					if (store.length >= 4) store = [];
					var tayin = false;
					switch (store.length) {
						case 0: {
							if (num == 9) tayin = true;
							break;
						}
						case 1: {
							if (num == 12) tayin = true;
							break;
						}
						case 2: {
							if (num == 3) tayin = true;
							break;
						}
						case 3: {
							if (num == 6) tayin = true;
							break;
						}
					}
					if (tayin) store.push(num);
					else store = [];
					player.storage[event.name] = store;
					var skn = 'scqh_fgo_圣刻_' + num;
					if (lib.skill[skn] && !player.hasSkill(skn)) {
						player.addTempSkill(skn);
					} else tayin = false;
					if (tayin) {
						var next = player.chooseBool('【圣刻】:是否拓印一张『圣剑』？');
						next.set('ai', () => true);
					} else {
						player.update();
						event.finish();
					}
					('step 2');
					if (result.bool) player.scqh_NobleArms();
					player.update();
				},
				group: 'scqh_fgo_圣刻_round',
				subSkill: {
					round: {
						forced: true,
						trigger: {
							global: 'roundStart',
						},
						filter(event, player, name) {
							return player.storage.scqh_fgo_圣刻;
						},
						content() {
							player.storage.scqh_fgo_圣刻 = [];
						},
					},
					3: {
						name: '3',
						charlotte: true,
					},
					6: {
						name: '6',
						charlotte: true,
					},
					9: {
						name: '9',
						charlotte: true,
					},
					12: {
						name: '12',
						charlotte: true,
					},
				},
			},
			scqh_fgo_不夜: {
				mod: {
					number(card, number) { },
					maxHandcard(player, num) {
						var skn = 'scqh_fgo_圣刻';
						var store = player.storage[skn] || [];
						player.removeGaintag(skn + '_3');
						player.removeGaintag(skn + '_6');
						player.removeGaintag(skn + '_9');
						player.removeGaintag(skn + '_12');
						var mark = player.countMark('charge');
						if (!mark) return;
						player.countCards('h', function (card) {
							var num = card.number || 0;
							if (typeof num != 'number') num = 0;
							var num1 = num + mark;
							var num2 = num - mark;
							if (store.length == 0 && [num1, num2].includes(9)) {
								player.addGaintag(card, skn + '_9');
							}
							if (store.length == 1 && [num1, num2].includes(12)) {
								player.addGaintag(card, skn + '_12');
							}
							if (store.length == 2 && [num1, num2].includes(3)) {
								player.addGaintag(card, skn + '_3');
							}
							if (store.length == 3 && [num1, num2].includes(6)) {
								player.addGaintag(card, skn + '_6');
							}
						});
					},
				},
				chargeSkill: true,
				enable: 'phaseUse',
				prompt(event) {
					var player = _status.event.player;
					var skn = _status.event.skill;
					var str = get.translation(skn + '_info');
					str += '<br/>◇目前的蓄力点数:<b><u>';
					str += player.countMark('charge');
					str += '</u></b>';
					return str;
				},
				filter(event, player, name) {
					return player.countDiscardableCards(player, 'he');
				},
				position: 'he',
				filterCard(card, player, target) {
					return lib.filter.cardDiscardable;
				},
				selectCard: [1, Infinity],
				check(card) {
					var player = _status.event.player;
					var ccc = player.getCards('hs');
					if (!ccc.length || ui.selected.cards.length) return false;
					if (!player.needsToDiscard()) return false;
					return 7 - get.value(card);
				},
				content() {
					var mark = player.countMark('charge');
					if (mark < 9) {
						var num = Math.min(cards.length, 9 - mark);
						player.addMark('charge', num, false);
					}
				},
				ai: {
					order(item, player) {
						var ccc = player.getCards('hs');
						var store = player.storage.scqh_fgo_圣刻 || [];
						for (var card of ccc) {
							if (!player.hasUseTarget(card)) continue;
							var num = card.number;
							var num2 = num + player.countMark('charge');
							var num3 = num - player.countMark('charge');
							var list = [num, num2, num3];
							var order = get.order(card, player);
							switch (store.length) {
								case 0: {
									if (list.includes(9)) order -= 3;
									break;
								}
								case 1: {
									if (list.includes(12)) order -= 3;
									break;
								}
								case 2: {
									if (list.includes(3)) order -= 3;
									break;
								}
								case 3: {
									if (list.includes(6)) order -= 3;
									break;
								}
							}
							return order;
						}
						return 1;
					},
					result: {
						player: 1,
					},
				},
				group: 'scqh_fgo_不夜_use',
				subSkill: {
					use: {
						forced: true,
						trigger: {
							player: ['useCardBefore', 'respondBefore'],
						},
						filter(event, player, name) {
							var mark = player.countMark('charge');
							if (!mark) return false;
							var num = event.card.number || 0;
							if (typeof num != 'number') num = 0;
							var num1 = num + mark;
							var num2 = num - mark;
							var store = player.storage.scqh_fgo_圣刻 || [];
							if (store.length == 0) return [num1, num2].includes(9);
							if (store.length == 1) return [num1, num2].includes(12);
							if (store.length == 2) return [num1, num2].includes(3);
							if (store.length == 3) return [num1, num2].includes(6);
							return false;
						},
						content() {
							'step 0';
							var store = player.storage.scqh_fgo_圣刻 || [];
							if (store.length == 0) trigger.card.number = 9;
							if (store.length == 1) trigger.card.number = 12;
							if (store.length == 2) trigger.card.number = 3;
							if (store.length == 3) trigger.card.number = 6;
							player.removeMark('charge', player.countMark('charge'), false);
						},
					},
				},
			},
			scqh_fgo_同胞: {
				forced: true,
				hiddenSkill: true,
				mod: {
					cardEnabled(card, player) {
						if (player.countCards('e', (card) => card.name.includes('圣剑')) < 3) {
							if (card.name == 'sha') return false;
						}
					},
				},
				trigger: {
					player: 'showCharacterAfter',
				},
				filter(event, player) {
					return true;
				},
				content() {
					'step 0';
					event.list = [];
					event.count = true;
					('step 1');
					var str = '';
					str += get.translation(event.name);
					str += '(' + event.count + '):';
					str += get.translation(event.name + '_info');
					player.chooseToUse({
						prompt: '',
						prompt2: str,
					});
					('step 2');
					if (result.bool) {
						event.list.push(get.type(result.card));
					} else event.count = false;
					if (event.count != false) {
						event.count = false;
						event.goto(1);
					}
					('step 3');
					if (event.list.length) {
						player.storage[event.name + '_1'] = [];
						player.addTempSkill(event.name + '_1');
						player.storage[event.name + '_1'] = event.list;
					}
				},
				group: ['scqh_fgo_同胞_2'],
				subSkill: {
					1: {
						charlotte: true,
						init(player, skill) {
							if (player.storage[skill] == undefined) {
								player.storage[skill] = [];
							}
						},
						mod: {
							cardEnabled(card, player) {
								var storage = player.storage['scqh_fgo_同胞_1'];
								if (storage != undefined && storage.length) {
									if (!storage.includes(get.type(card))) return false;
								}
							},
						},
					},
					2: {
						enable: 'phaseUse',
						usable: 1,
						prompt(event) {
							var player = _status.event.player;
							var str = '';
							str += '出牌阶段限一次,你可以将弃牌堆的至多三张牌放回牌堆洗切,你摸一张牌.';
							return str;
						},
						filter(event, player) {
							return ui.discardPile.childNodes.length;
						},
						chooseButton: {
							dialog(event, player) {
								var list = ui.discardPile.childNodes;
								return ui.create.dialog('同胞', [list, 'vcard']);
							},
							select: [1, 3],
							filter(button, player) {
								return true;
							},
							check(button) {
								return get.value(button.link);
							},
							backup(links, player) {
								return {
									popup: false,
									log: false,
									forced: true,
									card: links,
									content() {
										'step 0';
										var cards = lib.skill[event.name].card;
										if (Array.isArray(cards)) for (const i of cards) {
											ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
										}
										game.updateRoundNumber();
										('step 1');
										player.draw();
									},
								};
							},
							prompt(links, player) {
								var str = '';
								str += '是否将';
								for (const i of links) {
									str += '【';
									str += get.translation(i);
									str += '】';
								}
								str += '置于牌堆顶,摸一张牌';
								return str;
							},
						},
					},
				},
			},
			scqh_fgo_崩毁: {
				enable: 'phaseUse',
				usable: 1,
				filterCard: true,
				position: 'e',
				targetprompt: ['目标'],
				filterTarget(card, player, target) {
					return target != player && !target.isTurnedOver();
				},
				content() {
					'step 0';
					if (cards[0].name.includes('圣剑')) {
						target.loseMaxHp();
					} else target.damage();
					('step 1');
					player.draw();
					player.addTempSkill(event.name + '_sha');
				},
				group: 'scqh_fgo_崩毁_damage',
				subSkill: {
					sha: {
						charlotte: true,
						mark: true,
						marktext: '崩',
						intro: {
							content: '本回合内你不能使用【杀】',
						},
						mod: {
							cardEnabled(card) {
								if (card.name == 'sha') return false;
							},
						},
					},
					damage: {
						forced: true,
						trigger: {
							source: 'damageEnd',
						},
						filter(event, player, name) {
							if (event.parent.name != 'scqh_fgo_崩毁') return false;
							return event.player.countCards('e');
						},
						content() {
							var cards = trigger.player.getCards('e');
							trigger.player.loseToDiscardpile(cards);
						},
					},
				},
			},
			scqh_fgo_悲歌: {
				audio: 'beige',
				trigger: {
					global: 'damageEnd',
				},
				logTarget: 'player',
				filter(event, player) {
					return event.player.isIn();
				},
				check(event, player) {
					var skn = 'scqh_fgo_悲歌';
					var tars = event.player;
					return get.attitude(player, tars) > 0 && get.attitude(tars, player) > 0;
				},
				content() {
					'step 0';
					trigger.player.judge();
					if (!player.countDiscardableCards(player, 'hej')) event.finish();
					('step 1');
					event.judgeResult = get.copy(result);
					var str = '是否弃置一张牌？';
					str += '若弃置花色是【' + get.translation(result.suit) + '】的牌,则你将此牌置于你的判定区';
					if (get.position(result.card, true) == 'd') {
						str += ';若弃置名字是【' + get.translation(result.name) + '】的牌,则将' + get.translation(result.card) + '置于你的判定区';
					}
					var strt = get.translation(trigger.player);
					if (trigger.source) var strs = get.translation(trigger.source);
					var goon = 0;
					switch (result.suit) {
						case 'heart':
							if (trigger.player.isIn() && trigger.player.isDamaged()) {
								str += '.令' + strt + '回复１点体力';
								goon = get.recoverEffect(trigger.player, player, player);
							}
							break;
						case 'diamond':
							if (trigger.player.isIn()) {
								str += '.令' + strt + '摸两张牌';
								goon = get.effect(trigger.player, { name: 'wuzhong' }, player, player);
							}
							break;
						case 'spade':
							if (trigger.source && trigger.source.isIn()) {
								str += '.令' + strs + '翻' + (trigger.source.isTurnedOver() ? '回正' : '') + '面';
								goon = get.attitude(player, trigger.source) * (trigger.source.isTurnedOver() ? 2 : -2);
							}
							break;
						case 'club':
							if (trigger.source && trigger.source.isIn()) {
								str += '.令' + strs + '弃置两张牌';
								var cards = trigger.source
									.getCards('he')
									.sort(function (a, b) {
										return get.value(a, trigger.source) - get.value(b, trigger.source);
									})
									.slice(0, 2);
								for (const i of cards) goon += get.value(i, trigger.source);
								goon *= -get.sgn(get.attitude(player, trigger.source));
							}
							break;
					}
					var next = player.discardPlayerCard(player, 'hej');
					next.set('prompt', '判定结果:' + get.translation(result.card));
					next.set('prompt2', str);
					next.set('goon', goon);
					next.set('ai', function (card) {
						var goon = _status.event.goon;
						var player = _status.event.player;
						var result = _status.event.parent.judgeResult;
						var eff = Math.min(7, goon);
						if (eff <= 0) return 0;
						if (card.suit == result.suit) {
							eff += get.value(result.card, player);
						}
						if (card.name == result.name) return eff;
						return eff - get.value(card);
					});
					('step 2');
					if (result.bool) {
						var skn = 'scqh_fgo_悲歌_card';
						lib.card[skn] = { effect: true };
						lib.translate[skn] = '歌';
						var cards = result.cards[0];
						event.gains = [];
						if (get.position(event.judgeResult.card, true) == 'd' && cards.suit == event.judgeResult.suit) {
							player.addJudge(skn, cards).set('log', false);
							event.gains.push(cards);
						}
						if (get.position(cards, true) == 'd' && cards.name == event.judgeResult.name) {
							player.addJudge(skn, event.judgeResult.card).set('log', false);
							event.gains.push(event.judgeResult.card);
						}
					} else event.finish();
					('step 3');
					var skn = 'scqh_fgo_悲歌_card';
					delete lib.card[skn];
					for (const i of event.gains) {
						if (i.viewAs == skn) delete i.viewAs;
					}
					switch (event.judgeResult.suit) {
						case 'heart':
							if (trigger.player.isIn() && trigger.player.isDamaged()) {
								trigger.player.recover();
							}
							break;
						case 'diamond':
							if (trigger.player.isIn()) trigger.player.draw(2);
							break;
						case 'spade':
							if (trigger.source && trigger.source.isIn()) {
								trigger.source.turnOver();
							}
							player.addExpose(0.1);
							break;
						case 'club':
							if (trigger.source && trigger.source.isIn() && trigger.source.countCards('he')) {
								trigger.source.chooseToDiscard(2, 'he', true);
							}
							player.addExpose(0.1);
							break;
					}
				},
			},
			scqh_fgo_陈情: {
				audio: 'chenqing',
				limited: true,
				forced: true,
				trigger: {
					player: 'dying',
				},
				filter(event, player) {
					return true;
				},
				content() {
					'step 0';
					player
						.chooseTarget(get.prompt2(event.name), function (card, player, target) {
							return target != player && target != _status.event.getTrigger().player;
						})
						.set('ai', function (target) {
							var player = _status.event.player;
							var trigger = _status.event.getTrigger();
							if (get.attitude(player, trigger.player) > 0) {
								var att1 = get.attitude(target, player);
								var att2 = get.attitude(target, trigger.player);
								var att3 = get.attitude(player, target);
								if (att3 < 0) return 0;
								return att1 / 2 + att2 + att3;
							} else return 0;
						});
					('step 1');
					if (result.bool) {
						player.awakenSkill(event.name);
						event.target = result.targets[0];
						event.target.draw(4);
					} else event.finish();
					('step 2');
					var target = event.target;
					var tosave = trigger.player;
					var att = get.attitude(target, tosave);
					var hastao = target.countCards('h', 'tao');
					var next = target.chooseToDiscard(4, true, 'he');
					next.set('ai', function (card) {
						if (get.color(card) != 'red') return -1;
						return -get.value(card);
					});
					('step 3');
					if (result.cards && result.cards.length == 4) {
						var colors = true;
						for (const i of result.cards) {
							if (get.color(i) != 'red') colors = false;
						}
						if (colors != false && game.checkMod({ name: 'tao' }, player, trigger.player, 'unchanged', 'cardSavable', player)) {
							event.target.useCard({ name: 'tao' }, trigger.player);
						}
					}
				},
				ai: {
					expose: 0.2,
					threaten: 1.5,
				},
			},
			scqh_fgo_默识: {
				forced: true,
				trigger: {
					player: 'addJudgeAfter',
				},
				usable: 1,
				filter(event, player, name) {
					return game.countPlayer(function (current) {
						return !current.isTurnedOver();
					});
				},
				content() {
					'step 0';
					var next = player.chooseTarget(true, function (card, player, target) {
						return !target.isTurnedOver();
					});
					next.set(prompt, get.prompt(event.name));
					next.set('prompt2', get.translation(event.name + '_info'));
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						if (target.countDiscardableCards(target, 'hej') >= 2) {
							var next = target.discardPlayerCard(2, target, 'hej');
							next.set('prompt', '弃置你区域内的两张牌,否则失去一点体力');
							next.set('ai', function (card) {
								return true;
							});
						} else event._result = { bool: false };
					} else event.finish();
					('step 2');
					if (!result.bool && event.target) {
						event.target.loseHp();
					}
				},
				global: 'scqh_fgo_默识_global',
				group: 'scqh_fgo_默识_cancel',
				subSkill: {
					cancel: {
						forced: true,
						trigger: {
							player: 'phaseJudgeBefore',
						},
						filter(event, player, name) {
							return true;
						},
						content() {
							trigger.cancel();
						},
					},
					global: {
						mod: {
							targetEnabled(card, player, target) {
								var skn = 'scqh_fgo_默识';
								var has = game.filterPlayer(function (current) {
									return current.hasSkill(skn) && current.getCards('j').length;
								});
								if (has.length && player != target) {
									var cards = has[0].getCards('j', function (card2) {
										if (card2.number == null) return false;
										if (card2.number == undefined) return false;
										if (typeof card2.number != 'number') return false;
										return true;
									});
									for (const i of cards) {
										if (i.number == card.number) {
											return false;
										}
									}
								}
							},
						},
					},
				},
			},
			scqh_fgo_黑帆: {
				limited: true,
				enable: 'phaseUse',
				targetprompt: ['目标'],
				filterTarget(card, player, target) {
					return target != player && target.sex == 'female' && target.canUse('fgo_唯一一次谎言', target);
				},
				content() {
					'step 0';
					player.awakenSkill(event.name);
					var card = game.found('fgo_唯一一次谎言', null, null, null);
					target.useCard(card, target);
				},
			},
			scqh_fgo_圣王: {
				forced: true,
				enable: 'phaseUse',
				filterTarget: true,
				content() {
					'step 0';
					var num = player.pathBetween(target, get.prompt(event.name), '你至' + get.translation(target) + '之间可以成为【杀】的目标的角色', function (player, current) {
						return player.canUse('sha', current);
					});
					if (num > 0) game.log(num);
				},
			},
			scqh_fgo_圣骑士阿托利斯00: {
				derivation: ['scqh_fgo_圣剑_加拉廷', 'scqh_fgo_圣剑_石中剑', 'scqh_fgo_圣剑_克拉伦特', 'scqh_fgo_圣剑_阿隆戴特', 'scqh_fgo_圣剑_天命之圣剑', 'scqh_fgo_圣剑_桂妮薇儿', 'scqh_fgo_圣剑_丹内尔'],
				nobracket: true,
				trigger: {
					player: ['equipBegin'],
				},
				prompt2(event, player) {
					var str = '当你装备<圣剑>以外的牌时,你可以防止之并摸一张牌,从游戏外随机获得一张<圣剑>并使用.';
					return str;
				},
				filter(event, player, name) {
					return !event.card.name.includes('scqh_fgo_圣剑');
				},
				content() {
					'step 0';
					trigger.cancel();
					player.draw();
					('step 1');
					var list = get.libCard(function (info, name) {
						return name.includes('scqh_fgo_圣剑');
					});
					game.found = function (name, suit, number, nature) {
						var card = ui.create.card(ui.special);
						card.storage.vanish = true;
						return card.init([suit, number, name, nature]);
					};
					event.card = game.found(list.randomGet(), null, null, null);
					player.gain(event.card);
					('step 2');
					if (player.getCards('h').includes(event.card)) {
						player.chooseUseTarget(event.card, true);
					}
				},
				global: ['scqh_fgo_圣骑士阿托利斯00_银', 'scqh_fgo_圣骑士阿托利斯00_金'],
				group: ['scqh_fgo_圣骑士阿托利斯00_hujia'],
				subSkill: {
					hujia: {
						forced: true,
						trigger: {
							player: ['equipAfter'],
						},
						filter(event, player, name) {
							return event.card && event.card.name.includes('scqh_fgo_圣剑');
						},
						content() {
							'step 0';
							player.changeHujia();
							if (trigger.card.name.includes('石中剑')) player.addMark('scqh_fgo_圣骑士阿托利斯00_银', 1, false);
							if (trigger.card.name.includes('断钢剑')) player.addMark('scqh_fgo_圣骑士阿托利斯00_金', 1, false);
						},
					},
					银: {
						name: '圣剑的指引·银',
						enable: 'phaseUse',
						usable: 1,
						prompt(event, player) {
							var str = '出牌阶段限一次,你可以弃置一枚<银币>,弃置任意名角色的合计Ｘ张牌(Ｘ为你装备区内的<圣剑>牌数). ';
							return str;
						},
						filter(event, player) {
							return player.countMark('scqh_fgo_圣骑士阿托利斯00_银') && player.countCards('e', (card) => card.name.includes('scqh_fgo_圣剑'));
						},
						content() {
							'step 0';
							player.removeMark('scqh_fgo_圣骑士阿托利斯00_银', 1, false);
							var num = player.countCards('e', (card) => card.name.includes('scqh_fgo_圣剑'));
							if (num > 0) {
								event.count = num;
							} else event.finish();
							('step 1');
							var str = '你可以弃置任意名角色的合计 ' + event.count + ' 张牌';
							player
								.chooseTarget(get.prompt('圣骑士王'), str, function (card, player, target) {
									return target.countDiscardableCards(player, 'he');
								})
								.set('ai', function (target) {
									return -get.attitude(_status.event.player, target);
								});
							('step 2');
							if (result.bool) {
								player.line(result.targets[0], 'green');
								player.discardPlayerCard(result.targets[0], 'he', true);
								event.count--;
							} else event.finish();
							('step 3');
							if (event.count > 0) {
								event.goto(1);
							}
						},
					},
					金: {
						name: '圣剑的指引·金',
						enable: 'phaseUse',
						usable: 1,
						prompt(event, player) {
							var str = '出牌阶段限一次,你可以弃置一枚<金币>,你可以选择一名其他角色,目标角色失去一点体力并弃置装备区和判定区里的所有牌. ';
							return str;
						},
						filter(event, player) {
							return player.countMark('scqh_fgo_圣骑士阿托利斯00_金');
						},
						filterTarget(card, player, target) {
							return target != player;
						},
						content() {
							'step 0';
							player.removeMark('scqh_fgo_圣骑士阿托利斯00_金', 1, false);
							target.losrHp();
							target.discard(event.target.getCards('ej'));
						},
					},
				},
			},
			scqh_fgo_圣骑士贝德维尔00: {
				derivation: ['scqh_fgo_圣剑_加拉廷', 'scqh_fgo_圣剑_石中剑', 'scqh_fgo_圣剑_克拉伦特', 'scqh_fgo_圣剑_阿隆戴特', 'scqh_fgo_圣剑_天命之圣剑', 'scqh_fgo_圣剑_桂妮薇儿', 'scqh_fgo_圣剑_丹内尔'],
				nobracket: true,
				dutySkill: true,
				forced: true,
				mark: true,
				marktext: '幕',
				intro: {
					content: 'expansion',
					markcount(storage, player) {
						var storage = player.storage.scqh_fgo_贝德维尔使命;
						if (!storage) storage = 0;
						return storage;
					},
				},
				init(player, skill) {
					player.storage.scqh_fgo_贝德维尔使命 = 0;
					player.storage.scqh_fgo_种族 = '战士族';
					player.storage.scqh_fgo_属性 = '光';
					var atk = 1600;
					var def = 1500;
					if (!player.storage.scqh_fgo_atk || player.storage.scqh_fgo_atk < atk) {
						player.storage.scqh_fgo_atk = atk;
					}
					if (!player.storage.scqh_fgo_def || player.storage.scqh_fgo_def < def) {
						player.storage.scqh_fgo_def = def;
					}
				},
				trigger: {
					global: 'gameDrawAfter',
					player: 'phaseZhunbeiBegin',
				},
				filter(event, player, name) {
					return true;
				},
				content() {
					'step 0';
					var list = get.libCard(function (info, name) {
						return name.includes('scqh_fgo_圣剑');
					});
					if (list.length) {
						player.chooseVCardButton(list, true, 'notype', get.translation(event.name)).ai = function () {
							return Math.random();
						};
					}
					('step 1');
					event.card = game.found(result.links[0][2], null, null, null);
					player.addToExpansion(event.name, event.card).gaintag.add(event.name);
				},
				group: ['scqh_fgo_圣骑士贝德维尔00_use', 'scqh_fgo_圣骑士贝德维尔00_shiming', 'scqh_fgo_圣骑士贝德维尔00_shibai'],
				subSkill: {
					use: {
						enable: 'phaseUse',
						trigger: {
							global: 'useCardToTargeted',
						},
						prompt(event, player) {
							if (event.name == 'useCardToTargeted') return '';
							var str = '<b><font color = white>';
							str += '每回合限一次,出牌阶段或当一名角色成为【杀】的目标后,你可以移动场上的一张【圣剑】,或将你武将牌旁的一张【圣剑】置于一名角色的装备区.';
							str += '</font></b>';
							return str;
						},
						prompt2(event, player) {
							var str = '<b><font color = white>';
							str += '每回合限一次,出牌阶段或当一名角色成为【杀】的目标后,你可以移动场上的一张【圣剑】,或将你武将牌旁的一张【圣剑】置于一名角色的装备区.';
							str += '</font></b>';
							return str;
						},
						filter(event, player, name) {
							var mark = player.getExpansions('scqh_fgo_圣骑士贝德维尔00');
							var move = game.countPlayer(function (current) {
								return current.countCards('e', (card) => card.name.includes('scqh_fgo_圣剑'));
							});
							if (player.hasSkill('scqh_fgo_圣骑士贝德维尔00_used')) return false;
							if (!mark.length && !move) return false;
							if (name == 'useCardToTargeted') return event.card && event.card.name == 'sha';
							return true;
						},
						content() {
							'step 0';
							var list = [];
							var move = game.countPlayer(function (current) {
								return current.countCards('e', (card) => card.name.includes('scqh_fgo_圣剑'));
							});
							if (move) list.push('选项一');
							var mark = player.getExpansions('scqh_fgo_圣骑士贝德维尔00');
							if (mark.length) list.push('选项二');
							list.push('cancel');
							player.chooseControl(list).set('choiceList', ['移动场上的一张【圣剑】', '将你武将牌旁的一张【圣剑】置于一名角色的装备区']);
							('step 1');
							if (result.control == '选项一') {
								player.addTempSkill(event.name + 'd');
								var next = player.moveShengjian();
								next.forced = true;
								next.set('prompt', ' ');
								var str = '<b><font color = white>';
								str += '移动场上的一张【圣剑】';
								str += '</font></b>';
								next.set('prompt2', str);
								event.finish();
							} else if (result.control == '选项二') {
								player.addTempSkill(event.name + 'd');
								var mark = player.getExpansions('scqh_fgo_圣骑士贝德维尔00');
								player.chooseButton(true, [get.translation(event.name), mark]);
							} else event.finish();
							('step 2');
							if (result.bool) {
								event.ccc = result.links[0];
								var str = '<b><font color = white>';
								str += '将你武将牌旁的一张【' + get.translation(event.ccc) + '】置于一名角色的装备区';
								str += '</font></b>';
								player.chooseTarget(true, get.prompt(event.name), str);
							}
							('step 3');
							if (result.bool) {
								event.ttt = result.targets[0];
								event.ttt.equip(event.ccc);
							}
						},
					},
					used: {
						charlotte: true,
					},
					shiming: {
						forced: true,
						trigger: {
							player: ['addToExpansionAfter'],
						},
						filter(event, player, name) {
							if (event.getParent(2).skill != 'scqh_fgo_圣骑士贝德维尔00') return false;
							if (event.parent.card.name != 'scqh_fgo_圣剑_断钢剑') return false;
							player.storage.scqh_fgo_贝德维尔使命++;
							return player.storage.scqh_fgo_贝德维尔使命 >= 3;
						},
						content() {
							'step 0';
							player.awakenSkill('scqh_fgo_圣骑士贝德维尔00');
							player.$fullscreenpop('圣骑士传说的终幕', 'thunder');
							player.popup('使命成功');
							game.log(event.name, '使命成功');
							('step 1');
							game.over('平局');
						},
					},
					shibai: {
						forced: true,
						trigger: {
							global: 'die',
						},
						filter(event, player, name) {
							var king = 'scqh_fgo_圣骑士阿托利斯';
							return event.player.name1 == king || event.player.name2 == king;
						},
						content() {
							player.awakenSkill('scqh_fgo_圣骑士贝德维尔00');
							player.popup('使命失败');
							game.log(event.name, '使命失败');
						},
					},
				},
			},
			scqh_fgo_圣骑士珀西瓦尔00: {
				nobracket: true,
				silent: true,
				forced: true,
				init(player, skill) {
					player.storage.scqh_fgo_圣骑士光暗 = '光';
					player.storage.scqh_fgo_种族 = '战士族';
					player.storage.scqh_fgo_属性 = '光';
					var atk = 1900;
					var def = 300;
					if (!player.storage.scqh_fgo_atk || player.storage.scqh_fgo_atk < atk) {
						player.storage.scqh_fgo_atk = atk;
					}
					if (!player.storage.scqh_fgo_def || player.storage.scqh_fgo_def < def) {
						player.storage.scqh_fgo_def = def;
					}
				},
				trigger: {
					player: 'damageEnd',
				},
				filter(event, player, name) {
					var ccc = player.getCards('e', function (card) {
						return card.name.includes('scqh_fgo_') && card.name.includes('圣剑') && get.subtype(card) == 'scqh_fgo_装备魔法';
					});
					return ccc.length;
				},
				content() {
					'step 0';
					event.count = Math.min(trigger.num, 9);
					('step 1');
					event.count--;
					event.ccc = player.getCards('x', function (card) {
						return card.hasGaintag('_scqh_fgo_墓地') && card.name.includes('scqh_fgo_') && card.name.includes('圣剑') && get.subtype(card) == 'scqh_fgo_装备魔法';
					});
					var list = [];
					if (event.ccc.length) list.push('选项一');
					list.push('选项二');
					list.push('cancel');
					player.chooseControl(list).set('choiceList', ['获得墓地里的一张【圣剑】', '获得弃牌堆中的每种类型的牌各一张']);
					('step 2');
					if (result.control == '选项一') {
						player.chooseButton(true, [get.translation(event.name), event.ccc]);
					} else if (result.control == '选项二') {
						var list = [];
						var bet = ['basic', 'equip', 'trick'];
						for (const i of bet) {
							var card = get.discardPile(function (card) {
								return get.type(card) == i;
							});
							if (card) list.push(card);
						}
						if (list.length) player.gain(list, 'gain2');
					}
					('step 3');
					if (result.bool) player.gain(result.links[0]);
					if (event.count > 0) event.goto(1);
				},
			},
			scqh_fgo_禁手: {
				nobracket: true,
				firstDo: true,
				forced: true,
				fixed: true,
				charlotte: true,
				superCharlotte: true,
				init(player) {
					player.恋姬无双ShunfajiInit('scqh_fgo_禁手');
				},
				clickable(player) {
					player.useSkill('scqh_fgo_禁手_禁手');
				},
				clickableFilter(player) {
					return true;
				},
				subSkill: {
					禁手: {
						content() {
							'step 0';
							var str = '封印一名角色的手牌区';
							player.chooseTarget(str, function (card, player, target) {
								return target != player && !target.hasSkill('scqh_fgo_禁手_mod');
							});
							('step 1');
							if (result.bool) {
								targed = result.targets[0];
								targed.addSkill('scqh_fgo_禁手_mod');
							}
						},
					},
					mod: {
						silent: true,
						forced: true,
						fixed: true,
						charlotte: true,
						superCharlotte: true,
						firstDo: true,
						mark: true,
						marktext: '封印',
						intro: {
							content: '①你跳过出牌阶段;<br/>②你的手牌上限为0;<br/>③你不能使用或打出手牌;<br/>④当你获得牌时,取消之.',
						},
						trigger: {
							player: ['gainBefore', 'drawBefore', 'phaseUseBefore'],
						},
						content() {
							trigger.cancel();
						},
						mod: {
							cardEnabled2(card) {
								if (get.itemtype(card) == 'card') return false;
							},
							maxHandcardBase(player, num) {
								return 0;
							},
						},
					},
				},
			},
			scqh_fgo_玩家武藤游戏00: {
				nobracket: true,
				superCharlotte: true,
				charlotte: true,
				fixed: true,
				multitarget: true,
				multiline: true,
				enable: 'chooseToUse',
				prompt: '选择任意名角色(若无目标,则默认所有其他角色为目标),对他们执行【挪牌】【翻面】【治疗】【伤害】【流失】【摸牌】【弃牌】【调整体力上限】中的任意一条效果.',
				filterTarget: true,
				selectTarget: [0, Infinity],
				content() {
					'step 0';
					var list = [];
					if (!targets.length && player.canMoveCard()) {
						list.push('挪牌');
					}
					list.push('死亡');
					list.push('翻面');
					list.push('治疗');
					list.push('伤害');
					list.push('流失');
					list.push('摸牌');
					list.push('弃牌');
					list.push('体力上限');
					list.push('取消');
					player.chooseControl(list);
					('step 1');
					if (result.control) event.选项 = result.control;
					if (event.选项 == '取消') event.finish();
					else if (event.选项 == '翻面' || event.选项 == '挪牌' || event.选项 == '死亡') {
					} else if (event.选项 == '弃牌') {
						player.chooseControl(['h', 'e', 'j', 's', 'x']);
					} else {
						var list = [1, 2, 3, 4, 5, 6, 7, 8];
						if (event.选项 == '治疗' || event.选项 == '体力上限') {
							list.push(Infinity);
						}
						player.chooseControl(list);
					}
					('step 2');
					if (result.control) event.num = result.control;
					if (!targets.length) {
						var targets = game.filterPlayer(function (current) {
							return current != player;
						});
						if (event.选项 == '挪牌') player.moveCard();
					}
					for (var i = 0; i < targets.length; i++) {
						if (event.选项 == '死亡') targets[i].die();
						else if (event.选项 == '翻面') targets[i].turnOver();
						else if (event.选项 == '治疗') targets[i].recover(event.num);
						else if (event.选项 == '伤害') targets[i].damage(event.num);
						else if (event.选项 == '流失') targets[i].loseHp(event.num);
						else if (event.选项 == '摸牌') targets[i].draw(event.num);
						else if (event.选项 == '体力上限') targets[i].maxHp = event.num;
						else targets[i].discard(targets[i].getCards(event.num));
						targets[i].update();
					}
				},
				group: ['scqh_fgo_禁手', 'scqh_fgo_玩家武藤游戏00_先攻', 'scqh_fgo_玩家武藤游戏00_注定一抽', 'scqh_fgo_玩家武藤游戏00_闪现'],
				subSkill: {
					先攻: {
						name: '先攻',
						trigger: {
							global: 'phaseBegin',
						},
						prompt: '其他角色的回合开始时,你可以立即执行一个额外的回合',
						filter(event, player, name) {
							return event.player != player && player.isUnderControl(true);
						},
						content() {
							trigger.cancel();
							player.phase('nodelay');
							trigger.player.phase('nodelay');
						},
						check(event, player, card) {
							return -300;
						},
					},
					注定一抽: {
						name: '注定一抽',
						enable: 'phaseUse',
						prompt: '是否将一张魔法牌或陷阱牌加入决斗手牌？',
						content() {
							'step 0';
							var list = get.libCard(function (info) {
								return info.type == 'scqh_fgo_魔法' || info.type == 'scqh_fgo_陷阱' || info.subtype == 'scqh_fgo_装备魔法' || info.type == 'delay';
							});
							if (list.length) {
								player.chooseVCardButton(list, true, 'notype').ai = function () {
									return Math.random();
								};
							}
							('step 1');
							if (result.bool) {
								player.gain(game.found(result.links[0][2], null, null, null), 'draw');
								var card = get.cardPile(function (card) {
									return card.name == 'juedou';
								});
								if (card) player.gain(card, 'draw');
								var card1 = get.discardPile(function (card) {
									return card.name == 'juedou';
								});
								if (card1) player.gain(card1, 'gain2');
							}
						},
					},
					闪现: {
						name: '闪现',
						changeSeat: true,
						enable: 'phaseUse',
						prompt: '是否目标交换座位,或成为目标的下家,或成为目标上家？',
						filterTarget(card, player, target) {
							return player != target;
						},
						filter(event, player, name) {
							return true;
						},
						content() {
							'step 0';
							var list = [];
							event.opt1 = '与目标交换座位';
							event.opt2 = '成为目标的下家';
							event.opt3 = '成为目标的上家';
							list.push(event.opt1);
							list.push(event.opt2);
							list.push(event.opt3);
							list.push('取消');
							player.chooseControl(list);
							('step 1');
							if (result.control) event.选项 = result.control;
							if (event.选项 == '取消') event.finish();
							('step 2');
							var ttt;
							if (event.选项 == event.opt1) ttt = target;
							else if (event.选项 == event.opt2) ttt = player.next;
							else if (event.选项 == event.opt3) ttt = player.previous;
							else ttt = _status.currentPhase.next;
							game.broadcastAll(
								function (target1, target2) {
									game.swapSeat(target1, target2);
								},
								ttt,
								player
							);
							if (ttt != targets[0]) {
								event.goto(2);
							}
						},
					},
					时间女神的恶作剧: {
						name: '时间女神的恶作剧',
						enable: 'phaseUse',
						prompt: '是否结束出牌阶段,在一个「完整的回合」结束时,执行一个额外回合？',
						content() {
							var evt = _status.event.getParent('phaseUse');
							if (evt && evt.name == 'phaseUse') {
								evt.skipped = true;
							}
							player.phase('nodelay');
						},
					},
				},
			},
		},
		translate: {
			_scqh_fgo_怪兽信息: '怪兽信息',
			scqh_fgo_武炼: '武炼',
			scqh_fgo_武炼_info: '当你不处于濒死状态时,你可以展示牌堆顶的一张牌,当做【杀】／【闪】／【酒】使用,若展示牌的类型不同于你使用的牌,则你失去一点体力且此回合使用【杀】的次数上限+1.',
			scqh_fgo_夺锋: '夺锋',
			scqh_fgo_夺锋_info: '每回合限两次,当你对距离为一的角色造成伤害后,你可以获得其区域里的一张牌,若来自于装备区,你可以弃置该牌,拓印一张【圣剑】相关的牌加入决斗手牌.',
			scqh_fgo_圣刻: '圣刻',
			scqh_fgo_圣刻_info: '当你使用或打出一张点数为３的倍数的牌后,你摸一张牌.若按照<u>９、１２、３、６</u>的顺序触发〖圣刻〗,你可以拓印一张【圣剑】加入决斗手牌,反之重置进度(每轮开始时重置进度;每种数字每回合限一次).',
			scqh_fgo_不夜: '不夜',
			scqh_fgo_不夜_info: '蓄力技(０／９).出牌阶段,你可以弃置任意张牌,获得等量的蓄力点.当你使用或打出一张牌时,若此牌的点数在增减Ｘ之后可以推进〖圣刻〗的进度,则你移去全部蓄力点将此牌的点数调整至可以推进〖圣刻〗进度的数字(Ｘ为全部蓄力点数).',
			scqh_fgo_幻奏: '幻奏',
			scqh_fgo_幻奏_info: '当你失去牌后,若此牌来自于其他角色,则该角色失去一点体力.',
			scqh_fgo_痛汲: '痛汲',
			scqh_fgo_痛汲_info: '当你对距离为一的角色造成伤害后,你可以获得其一张手牌,若花色为♥️️,则你回复一点体力.',
			scqh_fgo_仰慕: '仰慕',
			scqh_fgo_仰慕_info: '出牌阶段开始时,你可以展示一张手牌并赠予一名其他角色,该角色可以拒绝或接受此牌.若其接受,你观看其手牌并获得其手牌区与装备区内非本次赠予的牌各一张.若其拒绝,你视为拥有技能〖叛袭〗直到下回合开始.',
			scqh_fgo_叛袭: '叛袭',
			scqh_fgo_叛袭_info: '每名角色的出牌阶段(弃牌阶段)结束时,你可以将你于本阶段内失去且位于弃牌堆的所有牌当做一张【出其不意】对发动〖仰慕〗时拒绝过你的一名角色使用.当你使用伤害牌时,你可以将发动〖仰慕〗时拒绝过你的一名角色指定为额外目标.',
			scqh_fgo_忤逆: '忤逆',
			scqh_fgo_忤逆_info: '你可以将发动〖仰慕〗时接受过你的一名角色装备区里的一张牌当做【杀】／【闪】／【趁火打劫】使用,令其摸一张牌.',
			scqh_fgo_同胞: '同胞',
			scqh_fgo_同胞_info: '隐匿技,当你登场时,你可以使用至多两张手牌,若如此做,直到此回合结束之前,你不能使用其他类型的牌.只要你的装备区里名字含有「<b><u>圣剑</u></b>」的卡牌少于三张,你不能使用【杀】.出牌阶段限一次,你可以将弃牌堆的至多三张牌放回牌堆顶,你摸一张牌.',
			scqh_fgo_崩毁: '崩毁',
			scqh_fgo_崩毁_info: '出牌阶段限一次,你可以弃置装备区里的一张牌并对一名未翻面的其他角色造成一点伤害,你摸一张牌,且不能使用【杀】,直到回合结束.当你以此法造成伤害后,受伤角色将其装备区里的所有牌置入弃牌堆中.',
			scqh_fgo_悲歌: '悲歌',
			scqh_fgo_悲歌_info: '当有角色受到伤害后,你可以令其进行判定,你可以弃置你区域里的一张牌,若此牌与判定结果:花色相同,则将此牌置于你的判定区;牌名相同,则将判定牌置于你的判定区.最后根据判定结果执行以下的一个选项:<br/>♥️️其回复１点体力<br/>♦️️其摸两张牌<br/>♣️️伤害来源弃置两张牌<br/>♠️️伤害来源翻面<br/>',
			scqh_fgo_陈情: '陈情',
			scqh_fgo_陈情_info: '限定技,当你处于濒死状态时,你可以让另一名其他角色摸四张牌,其弃置四张牌.若其以此法弃置的四张牌均为红色,则视为该角色对你使用一张【桃】.',
			scqh_fgo_默识: '默识',
			scqh_fgo_默识_info: '锁定技,你没有判定阶段;所有角色不能成为其他角色使用点数为Ｘ的牌的目标(Ｘ为你的判定区内任何一张牌的点数).每回合限一次,当有牌进入你的判定区后,你需要选择一名正面朝上的角色,令其弃置其区域内的两张牌或失去一点体力.',
			scqh_fgo_黑帆: '黑帆',
			scqh_fgo_黑帆_info: '限定技,出牌阶段,你可以创造一张【唯一一次谎言】,让一名其他女性角色使用之.',
			scqh_fgo_圣骑士阿托利斯00: '骑士王',
			scqh_fgo_圣骑士阿托利斯00_info: '使命技,你的手牌数不小于你的体力时,你可以将一张牌当做【杀】、【闪】、【决斗】、【无懈可击】使用或打出,你随机获得一张【圣剑】并使用.每个牌名每回合限一次.<br/>❶ 第一条使命:当你以此法使用【圣剑 石中剑】时,你将体力回复至体力上限,你获得技能<集结>.<br/>❷ 第二条使命:当你以此法使用【决斗】造成伤害时,若你的手牌数和体力均大于对方,你需要将你的装备区里的【圣剑 石中剑】置入弃牌堆,且你本局内不能再使用【圣剑 石中剑】.<br/>❸ 第三条使命:',
			scqh_fgo_圣骑士贝德维尔00: '终幕骑士',
			scqh_fgo_圣骑士贝德维尔00_info: '使命技,游戏开始时或准备阶段,你可以将卡组中的一张【圣剑】送去墓地.<br/>①:每回合限一次,出牌阶段或当一名角色成为【杀】的目标后,你可以移动场上的一张【圣剑】,或将墓地里的一张【圣剑】置于一名角色的装备区.<br/>②:使命:当你的墓地中有三张【圣剑 断钢湖中剑】后,本局游戏平局.<br/>③:失败:当<圣骑士阿托利斯>死亡时,使命失败.',
			scqh_fgo_圣骑士珀西瓦尔00: '神圣骑士',
			scqh_fgo_圣骑士珀西瓦尔00_info: '①:锁定技,若【圣剑】在你的装备区里,你的体力上限增加一点并变成暗属性.<br/>②:每当你受到一点伤害后,若【圣剑】在你的装备区里,你可以获得墓地里的一张【圣剑】或从弃牌堆中获得每种类型的牌各一张.',
			scqh_fgo_禁手: '禁手',
			scqh_fgo_玩家武藤游戏00: '魔术专家',
			scqh_fgo_玩家武藤游戏00_info: '<br>「<font color=red>魔术专家</font>」<br><li>出牌阶段,选择任意名角色(若无目标,则默认所有其他角色为目标),对他们执行【挪牌】【翻面】【治疗】【伤害】【流失】【摸牌】【弃牌】【调整体力上限】中的任意一条效果,数值为１～５和无限大.<br><br>「<font color=red>先攻</font>」<br><li>其他角色的回合开始时,你可以立即执行一个额外的回合.<br><br>「<font color=red>闪现</font>」<br><li>出牌阶段,你可以与目标交换座位,或成为目标的下家,或成为目标上家.<br><br>「<font color=red>注定一抽</font>」<br><li>出牌阶段,你可以将一张魔法牌或陷阱牌加入决斗手牌.<br><br>「<font color=red>禁手</font>」<br><li>瞬发技,废除一名角色的手牌区.',
			scqh_fgo_抽卡: '抽卡',
			scqh_fgo_抽卡_info: '开启「自动发动」后,摸牌阶段,你可以放弃摸牌,改为从卡组中随机获得一张牌',
		},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

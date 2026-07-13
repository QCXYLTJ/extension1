window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			千鹤fgo_忤逆2: {
				init(player, skill) {
					player.storage.fgoType = '通常';
				},
				silent: true,
				forced: true,
				mod: {
					maxHandcard(player, num) {
						if (player.countCards('e', (card) => card.name.includes('圣剑'))) {
							player.storage.fgoNature = '暗';
							player.storage.fgoType = '效果';
							return num + 1;
						} else {
							player.storage.fgoType = '通常';
							var list = [player.name1, player.name2];
							for (var mm of list) {
								var info = lib.character[mm];
								if (info && info[4]) {
									for (var kk of info[4]) {
										if (kk.indexOf('fgoNature:') == 0) {
											player.storage.fgoNature = kk.slice(11);
										}
									}
								}
							}
						}
					},
				},
			},
			千鹤fgo_裁决: {
				enable: 'phaseUse',
				prompt2(event, player) {
					return get.translation(_status.event.skill + '_info');
				},//QQQ
				complexCard: true,
				complexSelect: true,
				selectCard: [0, 1],
				position: 'he',
				filterCard(card, player, target) {
					if (ui.selected.targets.length) return false;
					return lib.filter.cardDiscardable;
				},
				targetprompt: ['目标'],
				filterTarget(card, player, target) {
					if (target.sew_EquipExcalibur()) {
						if (ui.selected.cards.length) return target != player;
						return target == player;
					}
					return false;
				},
				content() {
					'step 0';
					target.damage();
					('step 1');
					var carding = [];
					var list = get
						.libCard(function (info, name) {
							return name.includes('圣剑');
						})
						.sort();
					if (list.length) {
						for (var i = 0; i < list.length; i++) {
							carding.push(game.found(list[i], null, null, null));
						}
					}
					if (carding.length) player.chooseButton(true, [get.translation(event.name), carding]);
					('step 2');
					if (result.links?.length) {
						player.gain(result.links[0]);
					}
				},
			},
			千鹤fgo_高昂: {
				forced: true,
				trigger: {
					global: 'phaseUseEnd',
				},
				filter(event, player, name) {
					return player.hasHistory('sourceDamage', function (evt) {
						return evt.getParent('phaseUse') == event;
					});
				},
				content() {
					'step 0';
					var carding = [];
					var list = get
						.libCard(function (info, name) {
							return name.includes('圣剑') || name.includes('圣骑士');
						})
						.sort();
					if (list.length) {
						for (var i = 0; i < list.length; i++) {
							carding.push(game.found(list[i], null, null, null));
						}
					}
					if (carding.length) player.chooseButton(true, [get.translation(event.name), carding]);
					('step 1');
					if (result.links?.length) {
						player.gain(result.links[0]);
					}
				},
			},
			千鹤fgo_忤逆: {
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
					var skn = '千鹤fgo_忤逆';
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
				group: ['千鹤fgo_忤逆_die', '千鹤fgo_忤逆2'],
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
							return player.storage.千鹤fgo_忤逆 != undefined;
						},
						content() {
							'step 0';
							var list = [];
							event.skn = '千鹤fgo_忤逆';
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
			千鹤fgo_叛袭: {
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
				group: '千鹤fgo_叛袭_hidden',
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
			千鹤fgo_圣刻: {
				forced: true,
				marktext: '🔅',
				mark: true,
				intro: {
					content: '',
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
					player: ['useCard', 'respond'],
				},
				filter(event, player, name) {
					var card1 = event.card.number;
					if (!card1 || typeof card1 != 'number' || card1 == null || card1 == undefined) {
						return false;
					}
					return card1 % 3 == 0;
				},
				content() {
					'step 0';
					player.draw();
					('step 1');
					var num = trigger.card.number;
					var storage = player.storage[event.name];
					if (storage.length >= 4) storage = [];
					var skip = true;
					if (storage.length == 0 && !player.hasSkill(event.name + '_9')) {
						skip = false;
					}
					if (storage.length == 1 && !player.hasSkill(event.name + '_12')) {
						skip = false;
					}
					if (storage.length == 2 && !player.hasSkill(event.name + '_3')) {
						skip = false;
					}
					if (storage.length == 3 && !player.hasSkill(event.name + '_6')) {
						skip = false;
					}
					if (skip == false) {
						storage.push(num);
						for (var i = 0; i < storage.length; i++) {
							if (i == 0 && storage[i]) {
								if (storage[i] != 9) {
									storage = [];
									break;
								} else player.addTempSkill(event.name + '_9');
							}
							if (i == 1 && storage[i]) {
								if (storage[i] != 12) {
									storage = [];
									break;
								} else player.addTempSkill(event.name + '_12');
							}
							if (i == 2 && storage[i]) {
								if (storage[i] != 3) {
									storage = [];
									break;
								} else player.addTempSkill(event.name + '_3');
							}
							if (i == 3 && storage[i]) {
								if (storage[i] != 6) {
									storage = [];
									break;
								} else player.addTempSkill(event.name + '_6');
							}
						}
						player.storage[event.name] = storage;
						player.markSkill(event.name);
						if (storage.length) {
							var carding = [];
							var list = get
								.libCard(function (info, name) {
									return name.includes('圣剑');
								})
								.sort();
							if (list.length) {
								for (var i = 0; i < list.length; i++) {
									if (get.subtype(list[i]) == 'fgoSpell_equip') {
										if (player.canUse(list[i], player)) {
											carding.push(game.found(list[i], null, null, null));
										}
									}
								}
							}
							if (carding.length) {
								var next = player.chooseButton(true, [get.translation(event.name), carding]);
								next.set('ai', function (button) {
									return 1;
								});
							} else event.finish();
						} else event.finish();
					} else event.finish();
					('step 2');
					if (result.bool) player.useCard(result.links[0], player);
				},
				group: '千鹤fgo_圣刻_round',
				subSkill: {
					round: {
						forced: true,
						trigger: {
							global: 'roundStart',
						},
						filter(event, player, name) {
							return player.storage.千鹤fgo_圣刻;
						},
						content() {
							'step 0';
							player.storage.千鹤fgo_圣刻 = [];
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
			千鹤fgo_不夜: {
				mod: {
					number(card, number) { },
					maxHandcard(player, num) {
						var skn = '千鹤fgo_不夜';
						var skn2 = '千鹤fgo_圣刻';
						var storage = player.storage[skn];
						var storage2 = player.storage[skn2];
						player.removeGaintag(skn2 + '_3');
						player.removeGaintag(skn2 + '_6');
						player.removeGaintag(skn2 + '_9');
						player.removeGaintag(skn2 + '_12');
						if (typeof storage == 'number' && storage != null && storage != undefined) {
							var car = player.countCards('h', function (card) {
								var card1 = card.number;
								if (typeof card1 == 'number' && card1 != null && card1 != undefined) {
									var numjia = card1 + storage;
									var numjian = card1 - storage;
									if (storage2.length == 0 && (numjia == 9 || numjian == 9)) {
										player.addGaintag(card, skn2 + '_9');
									}
									if (storage2.length == 1 && (numjia == 12 || numjian == 12)) {
										player.addGaintag(card, skn2 + '_12');
									}
									if (storage2.length == 2 && (numjia == 3 || numjian == 3)) {
										player.addGaintag(card, skn2 + '_3');
									}
									if (storage2.length == 3 && (numjia == 6 || numjian == 6)) {
										player.addGaintag(card, skn2 + '_6');
									}
								}
							});
						}
					},
				},
				init(player, skill) {
					if (!player.storage[skill]) player.storage[skill] = 0;
				},
				enable: 'phaseUse',
				prompt(event, player) {
					var player = _status.event.player;
					var skn = _status.event.skill;
					var str = '';
					str += get.translation(skn + '_info');
					str += '<br/>◇目前Ｘ为:<b><u>';
					str += player.storage[skn];
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
				content() {
					'step 0';
					player.storage[event.name] += cards.length;
				},
				group: '千鹤fgo_不夜_use',
				subSkill: {
					use: {
						forced: true,
						trigger: {
							player: ['useCardBefore', 'respondBefore'],
						},
						filter(event, player, name) {
							var card1 = event.card.number;
							var storage1 = player.storage.千鹤fgo_不夜;
							if (card1 == undefined || typeof card1 != 'number') return false;
							if (storage1 == undefined || typeof storage1 != 'number' || storage1 <= 0) return false;
							var numjia = card1 + storage1;
							var numjian = card1 - storage1;
							var storage2 = player.storage.千鹤fgo_圣刻;
							if (storage2.length == 0 && (numjia == 9 || numjian == 9)) {
								return true;
							}
							if (storage2.length == 1 && (numjia == 12 || numjian == 12)) {
								return true;
							}
							if (storage2.length == 2 && (numjia == 3 || numjian == 3)) {
								return true;
							}
							if (storage2.length == 3 && (numjia == 6 || numjian == 6)) {
								return true;
							}
							return false;
						},
						content() {
							'step 0';
							var storage2 = player.storage.千鹤fgo_圣刻;
							if (storage2.length == 0) trigger.card.number = 9;
							if (storage2.length == 1) trigger.card.number = 12;
							if (storage2.length == 2) trigger.card.number = 3;
							if (storage2.length == 3) trigger.card.number = 6;
							player.storage.千鹤fgo_不夜 = 0;
						},
					},
				},
			},
			千鹤fgo_同胞: {
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
				group: ['千鹤fgo_同胞_2'],
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
								var storage = player.storage['千鹤fgo_同胞_1'];
								if (storage != undefined && storage.length) {
									if (!storage.includes(get.type(card))) return false;
								}
							},
						},
					},
					2: {
						enable: 'phaseUse',
						usable: 1,
						prompt(event, player) {
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
			千鹤fgo_崩毁: {
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
				group: '千鹤fgo_崩毁_damage',
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
							if (event.parent.name != '千鹤fgo_崩毁') return false;
							return event.player.countCards('e');
						},
						content() {
							var cards = trigger.player.getCards('e');
							trigger.player.loseToDiscardpile(cards);
						},
					},
				},
			},
			千鹤fgo_悲歌: {
				audio: 'beige',
				trigger: {
					global: 'damageEnd',
				},
				logTarget: 'player',
				filter(event, player) {
					return event.player.isIn();
				},
				check(event, player) {
					var skn = '千鹤fgo_悲歌';
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
						var skn = '千鹤fgo_悲歌_card';
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
					var skn = '千鹤fgo_悲歌_card';
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
			千鹤fgo_陈情: {
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
			千鹤fgo_默识: {
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
					if (result.targets?.length) {
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
				global: '千鹤fgo_默识_global',
				group: '千鹤fgo_默识_cancel',
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
								var skn = '千鹤fgo_默识';
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
			千鹤fgo_黑帆: {
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
			千鹤fgo_圣王: {
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
			千鹤fgo_圣骑士阿托利斯00: {
				derivation: ['千鹤fgo_圣剑_加拉廷', '千鹤fgo_圣剑_石中剑', '千鹤fgo_圣剑_克拉伦特', '千鹤fgo_圣剑_阿隆戴特', '千鹤fgo_圣剑_天命之圣剑', '千鹤fgo_圣剑_桂妮薇儿', '千鹤fgo_圣剑_丹内尔'],
				nobracket: true,
				trigger: {
					player: ['equipBegin'],
				},
				prompt2(event, player) {
					var str = '当你装备<圣剑>以外的牌时,你可以防止之并摸一张牌,从游戏外随机获得一张<圣剑>并使用.';
					return str;
				},
				filter(event, player, name) {
					return !event.card.name.includes('千鹤fgo_圣剑');
				},
				content() {
					'step 0';
					trigger.cancel();
					player.draw();
					('step 1');
					var list = get.libCard(function (info, name) {
						return name.includes('千鹤fgo_圣剑');
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
				global: ['千鹤fgo_圣骑士阿托利斯00_银', '千鹤fgo_圣骑士阿托利斯00_金'],
				group: ['千鹤fgo_圣骑士阿托利斯00_hujia'],
				subSkill: {
					hujia: {
						forced: true,
						trigger: {
							player: ['equipAfter'],
						},
						filter(event, player, name) {
							return event.card && event.card.name.includes('千鹤fgo_圣剑');
						},
						content() {
							'step 0';
							player.changeHujia();
							if (trigger.card.name.includes('石中剑')) player.addMark('千鹤fgo_圣骑士阿托利斯00_银', 1, false);
							if (trigger.card.name.includes('断钢剑')) player.addMark('千鹤fgo_圣骑士阿托利斯00_金', 1, false);
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
							return player.countMark('千鹤fgo_圣骑士阿托利斯00_银') && player.countCards('e', (card) => card.name.includes('千鹤fgo_圣剑'));
						},
						content() {
							'step 0';
							player.removeMark('千鹤fgo_圣骑士阿托利斯00_银', 1, false);
							var num = player.countCards('e', (card) => card.name.includes('千鹤fgo_圣剑'));
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
							if (result.targets?.length) {
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
							return player.countMark('千鹤fgo_圣骑士阿托利斯00_金');
						},
						filterTarget(card, player, target) {
							return target != player;
						},
						content() {
							'step 0';
							player.removeMark('千鹤fgo_圣骑士阿托利斯00_金', 1, false);
							target.losrHp();
							target.discard(event.target.getCards('ej'));
						},
					},
				},
			},
			千鹤fgo_圣骑士贝德维尔00: {
				derivation: ['千鹤fgo_圣剑_加拉廷', '千鹤fgo_圣剑_石中剑', '千鹤fgo_圣剑_克拉伦特', '千鹤fgo_圣剑_阿隆戴特', '千鹤fgo_圣剑_天命之圣剑', '千鹤fgo_圣剑_桂妮薇儿', '千鹤fgo_圣剑_丹内尔'],
				nobracket: true,
				dutySkill: true,
				forced: true,
				mark: true,
				marktext: '幕',
				intro: {
					content: 'expansion',
					markcount(storage, player) {
						var storage = player.storage.千鹤fgo_贝德维尔使命;
						if (!storage) storage = 0;
						return storage;
					},
				},
				init(player, skill) {
					player.storage.千鹤fgo_贝德维尔使命 = 0;
					player.storage.千鹤fgo_种族 = '战士族';
					player.storage.千鹤fgo_属性 = '光';
					var atk = 1600;
					var def = 1500;
					if (!player.storage.千鹤fgo_atk || player.storage.千鹤fgo_atk < atk) {
						player.storage.千鹤fgo_atk = atk;
					}
					if (!player.storage.千鹤fgo_def || player.storage.千鹤fgo_def < def) {
						player.storage.千鹤fgo_def = def;
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
						return name.includes('千鹤fgo_圣剑');
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
				group: ['千鹤fgo_圣骑士贝德维尔00_use', '千鹤fgo_圣骑士贝德维尔00_shiming', '千鹤fgo_圣骑士贝德维尔00_shibai'],
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
							var mark = player.getExpansions('千鹤fgo_圣骑士贝德维尔00');
							var move = game.countPlayer(function (current) {
								return current.countCards('e', (card) => card.name.includes('千鹤fgo_圣剑'));
							});
							if (player.hasSkill('千鹤fgo_圣骑士贝德维尔00_used')) return false;
							if (!mark.length && !move) return false;
							if (name == 'useCardToTargeted') return event.card && event.card.name == 'sha';
							return true;
						},
						content() {
							'step 0';
							var list = [];
							var move = game.countPlayer(function (current) {
								return current.countCards('e', (card) => card.name.includes('千鹤fgo_圣剑'));
							});
							if (move) list.push('选项一');
							var mark = player.getExpansions('千鹤fgo_圣骑士贝德维尔00');
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
								var mark = player.getExpansions('千鹤fgo_圣骑士贝德维尔00');
								player.chooseButton(true, [get.translation(event.name), mark]);
							} else event.finish();
							('step 2');
							if (result.links?.length) {
								event.ccc = result.links[0];
								var str = '<b><font color = white>';
								str += '将你武将牌旁的一张【' + get.translation(event.ccc) + '】置于一名角色的装备区';
								str += '</font></b>';
								player.chooseTarget(true, get.prompt(event.name), str);
							}
							('step 3');
							if (result.targets?.length) {
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
							if (event.getParent(2).skill != '千鹤fgo_圣骑士贝德维尔00') return false;
							if (event.parent.card.name != '千鹤fgo_圣剑_断钢剑') return false;
							player.storage.千鹤fgo_贝德维尔使命++;
							return player.storage.千鹤fgo_贝德维尔使命 >= 3;
						},
						content() {
							'step 0';
							player.awakenSkill('千鹤fgo_圣骑士贝德维尔00');
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
							var king = '千鹤fgo_圣骑士阿托利斯';
							return event.player.name1 == king || event.player.name2 == king;
						},
						content() {
							player.awakenSkill('千鹤fgo_圣骑士贝德维尔00');
							player.popup('使命失败');
							game.log(event.name, '使命失败');
						},
					},
				},
			},
			千鹤fgo_圣骑士珀西瓦尔00: {
				nobracket: true,
				silent: true,
				forced: true,
				init(player, skill) {
					player.storage.千鹤fgo_圣骑士光暗 = '光';
					player.storage.千鹤fgo_种族 = '战士族';
					player.storage.千鹤fgo_属性 = '光';
					var atk = 1900;
					var def = 300;
					if (!player.storage.千鹤fgo_atk || player.storage.千鹤fgo_atk < atk) {
						player.storage.千鹤fgo_atk = atk;
					}
					if (!player.storage.千鹤fgo_def || player.storage.千鹤fgo_def < def) {
						player.storage.千鹤fgo_def = def;
					}
				},
				trigger: {
					player: 'damageEnd',
				},
				filter(event, player, name) {
					var ccc = player.getCards('e', function (card) {
						return card.name.includes('千鹤fgo_') && card.name.includes('圣剑') && get.subtype(card) == '千鹤fgo_装备魔法';
					});
					return ccc.length;
				},
				content() {
					'step 0';
					event.count = Math.min(trigger.num, 9);
					('step 1');
					event.count--;
					event.ccc = player.getCards('x', function (card) {
						return card.hasGaintag('_千鹤fgo_墓地') && card.name.includes('千鹤fgo_') && card.name.includes('圣剑') && get.subtype(card) == '千鹤fgo_装备魔法';
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
			千鹤fgo_禁手: {
				nobracket: true,
				firstDo: true,
				forced: true,
				fixed: true,
				charlotte: true,
				superCharlotte: true,
				init(player) {
					player.恋姬无双ShunfajiInit('千鹤fgo_禁手');
				},
				clickable(player) {
					player.useSkill('千鹤fgo_禁手_禁手');
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
								return target != player && !target.hasSkill('千鹤fgo_禁手_mod');
							});
							('step 1');
							if (result.targets?.length) {
								targed = result.targets[0];
								targed.addSkill('千鹤fgo_禁手_mod');
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
			千鹤fgo_玩家武藤游戏00: {
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
				group: ['千鹤fgo_禁手', '千鹤fgo_玩家武藤游戏00_先攻', '千鹤fgo_玩家武藤游戏00_注定一抽', '千鹤fgo_玩家武藤游戏00_闪现'],
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
						prompt: '是否将一张魔法牌或陷阱牌加入手牌？',
						content() {
							'step 0';
							var list = get.libCard(function (info) {
								return info.type == '千鹤fgo_魔法' || info.type == '千鹤fgo_陷阱' || info.subtype == '千鹤fgo_装备魔法' || info.type == 'delay';
							});
							if (list.length) {
								player.chooseVCardButton(list, true, 'notype').ai = function () {
									return Math.random();
								};
							}
							('step 1');
							if (result.links?.length) {
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
			_千鹤fgo_怪兽信息: '怪兽信息',
			千鹤fgo_忤逆: '忤逆',
			千鹤fgo_忤逆_info: '锁定技,若你的装备区里有「<b><u>圣剑</u></b>」,你视作效果怪兽、暗属性,且手牌上限加１.',
			千鹤fgo_裁决: '裁决',
			千鹤fgo_裁决_info: '限定技,出牌阶段,你可以对一名角色造成一点伤害(若目标是其他角色,则你需要弃置一张牌;若是圣骑士,则此法结算结束时,目标可以复原一个限定技),你从游戏之外获得一张名字含有「<b><u>圣剑</u></b>」的卡牌.',
			千鹤fgo_高昂: '高昂',
			千鹤fgo_高昂_info: '当你造成过伤害的出牌阶段结束时,你可以从游戏之外获得一张名字含有「<b><u>圣骑士</u></b>」或者「<b><u>圣剑</u></b>」的卡牌.',
			千鹤fgo_忤逆: '忤逆',
			千鹤fgo_忤逆_info: '<b><u>军团技</u></b>,出牌阶段各限一次:⒈你可以在未登场的「<b><u>圣骑士</u></b>」中选择一张武将牌加入「<b><u>军团</u></b>」(初始手牌４),你弃置自己装备区里的一张牌;⒉你可以将「<b><u>军团元首</u></b>」替换成「<b><u>军团</u></b>」中的任意一张未阵亡过的武将牌.',
			千鹤fgo_叛袭: '叛袭',
			千鹤fgo_叛袭_info: '隐匿技,当你于其他角色的回合内登场后,你可以让该角色选择手牌区和装备区内的各一张牌,将该角色未选择的牌当做一张任意花色的【出其不意】对其使用.每回合结束时,若你此回合内未造成过伤害,则你进入隐匿状态.',
			千鹤fgo_圣刻: '圣刻',
			千鹤fgo_圣刻_info: '锁定技,当你使用或打出点数是３的倍数的一张牌时,你摸一张牌.若你是按照９、１２、３、６的顺序触发〖圣刻〗,则你从游戏之外将一张「<b><u>圣剑</u></b>」置入你的装备区,否则重新统计(每轮开始时重新统计,每个数字每回合各限一次).',
			千鹤fgo_不夜: '不夜',
			千鹤fgo_不夜_info: '出牌阶段,你可以弃置任意张牌.当你使用或打出一张牌前,若此牌的点数在加Ｘ或者减Ｘ之后可以增加〖圣刻〗的进度,则你将此牌的点数更改为〖圣刻〗当前进度所需的数字,重新储存Ｘ的信息(Ｘ为你以此法弃置过的牌数).',
			千鹤fgo_同胞: '同胞',
			千鹤fgo_同胞_info: '隐匿技,当你登场时,你可以使用至多两张手牌,若如此做,直到此回合结束之前,你不能使用其他类型的牌.只要你的装备区里名字含有「<b><u>圣剑</u></b>」的卡牌少于三张,你不能使用【杀】.出牌阶段限一次,你可以将弃牌堆的至多三张牌放回牌堆顶,你摸一张牌.',
			千鹤fgo_崩毁: '崩毁',
			千鹤fgo_崩毁_info: '出牌阶段限一次,你可以弃置装备区里的一张牌并对一名未翻面的其他角色造成一点伤害,你摸一张牌,且不能使用【杀】,直到回合结束.当你以此法造成伤害后,受伤角色将其装备区里的所有牌置入弃牌堆中.',
			千鹤fgo_悲歌: '悲歌',
			千鹤fgo_悲歌_info: '当有角色受到伤害后,你可以令其进行判定,你可以弃置你区域里的一张牌,若此牌与判定结果:花色相同,则将此牌置于你的判定区;牌名相同,则将判定牌置于你的判定区.最后根据判定结果执行以下的一个选项:<br/>♥️️其回复１点体力<br/>♦️️其摸两张牌<br/>♣️️伤害来源弃置两张牌<br/>♠️️伤害来源翻面<br/>',
			千鹤fgo_陈情: '陈情',
			千鹤fgo_陈情_info: '限定技,当你处于濒死状态时,你可以让另一名其他角色摸四张牌,其弃置四张牌.若其以此法弃置的四张牌均为红色,则视为该角色对你使用一张【桃】.',
			千鹤fgo_默识: '默识',
			千鹤fgo_默识_info: '锁定技,你没有判定阶段;所有角色不能成为其他角色使用点数为Ｘ的牌的目标(Ｘ为你的判定区内任何一张牌的点数).每回合限一次,当有牌进入你的判定区后,你需要选择一名正面朝上的角色,令其弃置其区域内的两张牌或失去一点体力.',
			千鹤fgo_黑帆: '黑帆',
			千鹤fgo_黑帆_info: '限定技,出牌阶段,你可以创造一张【唯一一次谎言】,让一名其他女性角色使用之.',
			千鹤fgo_圣骑士阿托利斯00: '骑士王',
			千鹤fgo_圣骑士阿托利斯00_info: '使命技,你的手牌数不小于你的体力时,你可以将一张牌当做【杀】、【闪】、【决斗】、【无懈可击】使用或打出,你随机获得一张【圣剑】并使用.每个牌名每回合限一次.<br/>❶ 第一条使命:当你以此法使用【圣剑 石中剑】时,你将体力回复至体力上限,你获得技能<集结>.<br/>❷ 第二条使命:当你以此法使用【决斗】造成伤害时,若你的手牌数和体力均大于对方,你需要将你的装备区里的【圣剑 石中剑】置入弃牌堆,且你本局内不能再使用【圣剑 石中剑】.<br/>❸ 第三条使命:',
			千鹤fgo_圣骑士贝德维尔00: '终幕骑士',
			千鹤fgo_圣骑士贝德维尔00_info: '使命技,游戏开始时或准备阶段,你可以将卡组中的一张【圣剑】送去墓地.<br/>①:每回合限一次,出牌阶段或当一名角色成为【杀】的目标后,你可以移动场上的一张【圣剑】,或将墓地里的一张【圣剑】置于一名角色的装备区.<br/>②:使命:当你的墓地中有三张【圣剑 断钢湖中剑】后,本局游戏平局.<br/>③:失败:当<圣骑士阿托利斯>死亡时,使命失败.',
			千鹤fgo_圣骑士珀西瓦尔00: '神圣骑士',
			千鹤fgo_圣骑士珀西瓦尔00_info: '①:锁定技,若【圣剑】在你的装备区里,你的体力上限增加一点并变成暗属性.<br/>②:每当你受到一点伤害后,若【圣剑】在你的装备区里,你可以获得墓地里的一张【圣剑】或从弃牌堆中获得每种类型的牌各一张.',
			千鹤fgo_禁手: '禁手',
			千鹤fgo_玩家武藤游戏00: '魔术专家',
			千鹤fgo_玩家武藤游戏00_info: '<br>「<font color=red>魔术专家</font>」<br><li>出牌阶段,选择任意名角色(若无目标,则默认所有其他角色为目标),对他们执行【挪牌】【翻面】【治疗】【伤害】【流失】【摸牌】【弃牌】【调整体力上限】中的任意一条效果,数值为１～５和无限大.<br><br>「<font color=red>先攻</font>」<br><li>其他角色的回合开始时,你可以立即执行一个额外的回合.<br><br>「<font color=red>闪现</font>」<br><li>出牌阶段,你可以与目标交换座位,或成为目标的下家,或成为目标上家.<br><br>「<font color=red>注定一抽</font>」<br><li>出牌阶段,你可以将一张魔法牌或陷阱牌加入手牌.<br><br>「<font color=red>禁手</font>」<br><li>瞬发技,废除一名角色的手牌区.',
			千鹤fgo_抽卡: '抽卡',
			千鹤fgo_抽卡_info: '开启「自动发动」后,摸牌阶段,你可以放弃摸牌,改为从卡组中随机获得一张牌',
		},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

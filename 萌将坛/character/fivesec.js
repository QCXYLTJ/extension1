'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqhFivesec_xinzhan: {
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(trigger, player) {
					let type = trigger.type || 'xinzhan';
					if (type == 'wuxie') return false;
					if (!trigger.filterCard && type != 'phase') return false;
					let map = lib.skill.scqhFivesec_xinzhan.map(trigger, player);
					if (map.owner.length || map.str.length) return true;
					return false;
				},
				map(trigger, player) {
					let map = {};
					map.str = [];
					map.owner = [];
					if (!player.hasSkill('scqhFivesec_xinzhan_temp')) {
						for (let target of game.filterPlayer()) {
							let hs1 = target.getCards('h');
							if (!hs1.length) continue;
							if (player == target) continue;
							if (!player.inRange(target)) continue;
							let list = {};
							list.owner = target;
							list.cards = hs1;
							map.owner.add(list);
						}
					}
					let storage = player.storage.scqhFivesec_xinzhan || false;
					if (storage && trigger && trigger.filterCard(storage, player, trigger)) {
						let hs = player.getCards('he');
						let types = ['trick', 'basic'];
						let used = player.storage.scqhFivesec_xinzhan_used || [];
						if (hs.length && types.includes(get.type2(storage)) && !used.includes(storage.name)) {
							let xxx = '将一张牌当做';
							xxx += get.translation(storage.nature) || '';
							xxx += get.translation(storage.name) || '';
							xxx += '使用或打出';
							map.str.add(xxx);
						}
					}
					return map;
				},
				chooseButton: {
					dialog(trigger, player) {
						let prompt = '是否发动【心战】？';
						let dialog = ui.create.dialog(prompt, 'hidden');
						let map = lib.skill.scqhFivesec_xinzhan.map(trigger, player);
						if (map.str.length) {
							dialog.add([map.str, 'tdnodes']);
						}
						for (let sub of map.owner) {
							if (sub.owner.name1) dialog.add(get.translation(sub.owner.name1));
							else if (sub.owner.name2) dialog.add(get.translation(sub.owner.name2));
							else dialog.add('未知武将');
							dialog.add(sub.cards);
						}
						dialog.direct = true;
						return dialog;
					},
					check(button) {
						let xinzhan = button.link;
						if (typeof xinzhan == 'string') {
							return 1;
						} else {
							let player = _status.event.player;
							return player.getUseValue(xinzhan);
						}
						return 1;
					},
					backup(links, player) {
						var storage = player.storage.scqhFivesec_xinzhan || false;
						var bool = {};
						bool.xinzhan = links[0];
						bool.audio = false;
						bool.popname = true;
						if (typeof bool.xinzhan == 'string' && storage) {
							bool.viewAs = {
								name: storage.name,
								nature: storage.nature,
							};
							bool.filterCard = true;
							bool.selectCard = 1;
							bool.position = 'hes';
							bool.check = function (card) {
								return 7 - get.value(card);
							};
							bool.precontent = function () {
								player.addTempSkill('scqhFivesec_xinzhan_used');
								player.markAuto('scqhFivesec_xinzhan_used', [event.result.card.name]);
							};
						} else if (get.itemtype(bool.xinzhan) == 'card') {
							bool.content = function () {
								var xinzhan = lib.skill.scqhFivesec_xinzhan_backup.xinzhan || false;
								player.storage.scqhFivesec_xinzhan = xinzhan;
								var card = game.createCard(xinzhan);
								player.gain(card, 'draw');
								player.addTempSkill('scqhFivesec_xinzhan_temp');
								var evt = event.getParent('chooseToUse') || event.getParent('chooseToRespond');
								if (evt && evt.name) evt.goto(0);
							};
						} else
							bool.content = function () {
								alert('无事发生');
							};
						return bool;
					},
					prompt(links, player) {
						let xinzhan = links[0];
						let str = '';
						if (typeof xinzhan == 'string') {
							str += xinzhan;
						} else {
							let owner = get.owner(xinzhan);
							str += '复制';
							str += get.translation(owner);
							str += '手中的';
							str += get.translation(xinzhan);
						}
						return str;
					},
				},
				hiddenCard(player, name) {
					return true;
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
					temp: {
						charlotte: true,
					},
					used: {
						charlotte: true,
					},
				},
			},
			scqhFivesec_renran: {
				forced: true,
				trigger: {
					player: ['turnOverAfter'],
				},
				filter(trigger, player) {
					return !player.isTurnedOver();
				},
				content() {
					'step 0';
					var next = player.chooseTarget(get.prompt2(event.name), function (card, player, target) {
						return target != player;
					});
					next.set('ai', function (target) {
						let player = _status.event.player;
						let att = get.attitude(player, target);
						return -att;
					});
					('step 1');
					var targets = result.targets || [];
					if (targets.length) {
						for (let target of targets) {
							target.loseMaxHp(1000);
						}
					}
				},
				ai: {
					noturn: true,
				},
			},
			scqhFivesec_xifa: {
				enable: ['chooseToUse', 'chooseToRespond'],
				map(trigger, player) {
					let storage = player.storage.scqhFivesec_xifa_temp || {};
					if (!storage.hand) storage.hand = [];
					if (!storage.used) storage.used = [];
					let used = [];
					used.addArray(storage.hand);
					used.addArray(storage.used);
					player.getHistory('useCard', (evt) => {
					});
					let map = {};
					map.hidden = [];
					map.vcards = [];
					map.hand = player.getCards('hes', (card) => {
						if (used.includes(card.name)) return false;
						return true;
					});
					if (!map.hand.length) return map;
					for (let name of lib.inpile) {
						let type = get.type2(name);
						let types = ['basic', 'trick'];
						let card = {};
						card.name = name;
						card.scqhFivesec_xifa = true;
						if (used.includes(name)) continue;
						if (!types.includes(type)) continue;
						map.hidden.add(name);
						if (!trigger || !trigger.filterCard) continue;
						if (!trigger.filterCard(card, player, trigger)) continue;
						map.vcards.add([type, '', name]);
						if (name != 'sha') continue;
						for (let nature of lib.inpile_nature) {
							card.nature = nature;
							if (!trigger.filterCard(card, player, trigger)) continue;
							map.vcards.add([type, '', name, nature]);
						}
					}
					return map;
				},
				hiddenCard(player, name) {
					let map = lib.skill.scqhFivesec_xifa.map(false, player);
					if (!map || !map.hidden || !map.hidden.length) return false;
					return map.hidden.includes(name);
				},
				filter(trigger, player) {
					let map = lib.skill.scqhFivesec_xifa.map(trigger, player);
					if (!map || !map.vcards || !map.vcards.length) return false;
					return true;
				},
				chooseButton: {
					dialog(trigger, player) {
						let skill = 'scqhFivesec_xifa';
						let prompt = get.prompt(skill);
						let map = lib.skill[skill].map(trigger, player);
						let dialog = ui.create.dialog(prompt, 'hidden');
						dialog.add([map.vcards, 'vcard']);
						dialog.direct = true;
						return dialog;
					},
					check(button) {
						let player = _status.event.player;
						let card = {
							name: button.link[2],
							nature: button.link[3],
						};
						return player.getUseValue(card);
					},
					backup(links, player) {
						return {
							popname: true,
							filterCard(card, player) {
								let map = lib.skill.scqhFivesec_xifa.map(false, player);
								if (!map || !map.hand || !map.hand.length) return false;
								if (!map.hand.includes(card)) return false;
								return true;
							},
							selectCard() {
								return 1;
							},
							position: 'hes',
							check(card) {
								return 7 - get.value(card);
							},
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
								scqhFivesec_xifa: true,
							},
							precontent() {
								player.addTempSkill('scqhFivesec_xifa_temp');
								var card = event.result.card;
								var cards = event.result.cards;
								var storage = player.storage.scqhFivesec_xifa_temp || {};
								if (!storage.hand) storage.hand = [];
								if (!storage.used) storage.used = [];
								storage.hand.add(cards[0].name);
								storage.used.add(card.name);
								player.storage.scqhFivesec_xifa_temp = storage;
							},
						};
					},
					prompt(links, player) {
						let prompt = '';
						prompt += '将任意一张牌当做【';
						prompt += get.translation(links[0][3]) || '';
						prompt += get.translation(links[0][2]) || '';
						prompt += '】使用或打出';
						return prompt;
					},
				},
				ai: {
					respondSha: true,
					respondShan: true,
					save: true,
					order: 10,
					result: {
						player(player) {
							return 1;
						},
					},
				},
				mod: {
					targetInRange(card, player, target, now) {
						if (card.scqhFivesec_xifa) return true;
					},
					cardUsable(card, player, num) {
						if (card.scqhFivesec_xifa) return Infinity;
					},
				},
				subSkill: {
					temp: {
						charlotte: true,
						mark: true,
						marktext: '🃏',
						intro: {
							mark(dialog, storage, player) {
								var storage = player.storage.scqhFivesec_xifa_temp || {};
								if (!storage.hand) storage.hand = [];
								if (!storage.used) storage.used = [];
								if (storage.hand.length) {
									dialog.addText('选择过的牌');
									dialog.addSmall([storage.hand, 'vcard']);
								} else dialog.addText('〇');
								if (storage.used.length) {
									dialog.addText('使用过的牌');
									dialog.addSmall([storage.used, 'vcard']);
								} else dialog.addText('〇');
							},
							markcount(storage, player) {
								var storage = player.storage.scqhFivesec_xifa_temp || {};
								if (!storage.hand) storage.hand = [];
								if (!storage.used) storage.used = [];
								var prompt = '';
								prompt += storage.hand.length;
								prompt += '/';
								prompt += storage.used.length;
								return prompt;
							},
						},
						trigger: {
							player: ['useCardAfter', 'respondAfter'],
						},
						forced: true,
						popup: false,
						filter(trigger, player) {
							return trigger.skill == 'scqhFivesec_xifa_backup';
						},
						content() {
							player.draw();
						},
					},
				},
			},
			scqhFivesec_jingang: {
				init(player, skill) {
					player.scqh_InitShunfaji(skill);
				},
				clickable(player) {
					player.scqh_UseShunfaji();
				},
				clickableFilter(player) {
					return !player.hasSkill('scqhFivesec_jingang_off') && !player.countMark('scqhFivesec_jingang');
				},
				clickableContent() {
					var sn = 'scqhFivesec_jingang';
					var off = sn + '_off';
					player.addTempSkill(off);
					player.addMark(sn, 2, false);
					player.addMark(off, 2, false);
				},
				forced: true,
				trigger: {
					global: 'phaseBegin',
				},
				filter(event, player) {
					return player.countMark('scqhFivesec_jingang');
				},
				content() {
					player.removeMark(event.name, 1, false);
				},
				group: ['scqhFivesec_jingang_ai'],
				subSkill: {
					off: {
						intro: {
							content: '#',
						},
						charlotte: true,
						forced: true,
						trigger: {
							player: ['damageBefore', 'loseHpBefore', 'loseMaxHpBefore'],
							target: 'useCardToBefore',
						},
						filter(event, player, name) {
							if (name == 'useCardToBefore' && event.card && !get.tag(event.card, 'damage')) return false;
							return player.countMark('scqhFivesec_jingang_off');
						},
						content() {
							player.removeMark('scqhFivesec_jingang_off', 1, false);
							trigger.cancel();
						},
					},
					ai: {
						forced: true,
						trigger: {
							player: ['damageBefore', 'loseHpBefore', 'loseMaxHpBefore'],
							target: 'useCardToBefore',
						},
						filter(trigger, player, name) {
							if (name == 'useCardToBefore' && trigger.card && !get.tag(trigger.card, 'damage')) return false;
							let info = lib.skill.scqhFivesec_jingang || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var skill = 'scqhFivesec_jingang';
							var next = game.createEvent(skill);
							next.player = player;
							next.setContent(lib.skill[skill].clickableContent);
						},
					},
				},
			},
			scqhFivesec_zhanjue: {
				enable: 'phaseUse',
				usable: 2,
				filterCard: true,
				selectCard: -1,
				position: 'h',
				filter(event, player) {
					var hs = player.getCards('h');
					if (!hs.length) return false;
					for (var card of hs) {
						var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
						if (mod2 === false) return false;
					}
					return true;
				},
				viewAs: {
					name: 'juedou',
				},
				ai: {
					damage: true,
					order: 1,
					effect: {
						player(card, player, target) {
							if (_status.event.skill == 'scqhFivesec_zhanjue') {
								if (
									player.hasSkillTag(
										'directHit_ai',
										true,
										{
											target: target,
											card: card,
										},
										true
									)
								)
									return;
								if (player.countCards('h') >= 3 || target.countCards('h') >= 3) return 'zeroplayertarget';
								if (player.countCards('h', 'tao')) return 'zeroplayertarget';
								if (target.countCards('h', 'sha') > 1) return 'zeroplayertarget';
							}
						},
					},
					nokeep: true,
					skillTagFilter(player, tag, arg) {
						if (tag === 'nokeep') return (!arg || (arg.card && arg.card.name === 'tao')) && player.isPhaseUsing() && player.hasCard((card) => card.name != 'tao', 'h');
					},
					wuxie(target, card, player, viewer) {
						if (player == game.me && get.attitude(viewer, player) > 0) {
							return 0;
						}
					},
					basic: {
						order: 5,
						useful: 1,
						value: 5.5,
					},
					result: {
						target: -1.5,
						player(player, target, card) {
							if (
								player.hasSkillTag(
									'directHit_ai',
									true,
									{
										target: target,
										card: card,
									},
									true
								)
							) {
								return 0;
							}
							if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
								return 0;
							}
							var hs1 = target.getCards('h', 'sha');
							var hs2 = player.getCards('h', 'sha');
							if (hs1.length > hs2.length + 1) {
								return -2;
							}
							var hsx = target.getCards('h');
							if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
								return -2;
							}
							if (hsx.length > 3 && hs2.length == 0) {
								return -2;
							}
							if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
								return -2;
							}
							return -0.5;
						},
					},
					tag: {
						respond: 2,
						respondSha: 2,
						damage: 1,
					},
				},
				group: ['scqhFivesec_zhanjue2', 'scqhFivesec_zhanjue3'],
			},
			scqhFivesec_zhanjue2: {
				forced: true,
				popup: false,
				trigger: {
					player: 'useCardAfter',
				},
				filter(event, player) {
					return event.skill == 'scqhFivesec_zhanjue';
				},
				content() {
					'step 0';
					player.draw('nodelay');
					var list = game.filterPlayer(function (current) {
						return (
							current.getHistory('damage', function (evt) {
								return evt.card == trigger.card;
							}).length
						);
					});
					if (list.length) {
						list.sortBySeat();
						game.asyncDraw(list);
					}
					('step 1');
				},
			},
			scqhFivesec_zhanjue3: {
				forced: true,
				trigger: {
					source: 'damageBegin2',
				},
				filter(event, player) {
					return true;
				},
				content() {
					'step 0';
					var next = player.chooseControl('baonue_hp', 'baonue_maxHp', 'cancel2', function (event, player) {
						if (_status.event.target == player) return 'cancel2';
						if (player.hp == player.maxHp) return 'baonue_hp';
						if (player.hp < player.maxHp - 1 || player.hp <= 2) return 'baonue_maxHp';
						return 'baonue_hp';
					});
					var str = '战绝:失去１点体力或减１点体力上限,对' + get.translation(trigger.player) + '造成的伤害+1';
					next.set('prompt', str);
					next.set('target', trigger.player);
					('step 1');
					var rc = result.control;
					if (rc && rc != 'cancel2') {
						trigger.num++;
						if (rc == 'baonue_hp') player.loseHp();
						else player.loseMaxHp(true);
					}
				},
				ai: {
					threaten: 0.5,
					neg: true,
				},
			},
			scqhFivesec_jiyi: {
				forced: true,
				trigger: {
					player: 'dieBefore',
				},
				filter(event, player) {
					for (const i of game.players) {
						if (i.hasSkill('scqhFivesec_jiyi')) continue;
						if (i.isAlive() && get.distance(player, i) <= 1 && player.canCompare(i)) {
							return true;
						}
					}
					return false;
				},
				content() {
					'step 0';
					var next = player.chooseTarget(get.prompt2(event.name), function (card, player, target) {
						if (target.hasSkill('scqhFivesec_jiyi')) return false;
						return target.isAlive() && get.distance(player, target) <= 1 && player.canCompare(target);
					});
					next.set('ai', function (target) {
						return get.attitude(_status.event.player, target);
					});
					('step 1');
					if (result.targets?.length) {
						event.target = result.targets[0];
						player.chooseToCompare(event.target);
					} else event.finish();
					('step 2');
					if (result.bool) {
						var cards = player.getCards('he');
						player.give(cards, event.target);
						player.removeSkill(event.name);
						event.target.addSkill(event.name);
						event.target._trueMe = player;
						game.addGlobalSkill('autoswap');
						if (event.target == game.me) {
							game.notMe = true;
							if (!_status.auto) ui.click.auto();
						}
					}
				},
			},
			scqhFivesec_feiqi: {
				enable: ['chooseToUse', 'chooseToRespond'],
				map(trigger, player) {
					let map = {};
					map.vcards = [];
					map.hidden = ['sha'];
					for (let name of map.hidden) {
						let card = {};
						card.name = name;
						if (!trigger || !trigger.filterCard) continue;
						if (!trigger.filterCard(card, player, trigger)) continue;
						map.vcards.add(name);
					}
					for (let name of lib.inpile) {
						let hs = player.getCards('hes', (card) => {
							return get.scqh_wuxing(card, 'water');
						});
						if (!hs.length) continue;
						let card = {};
						card.name = name;
						if (get.subtype(card) != 'equip1') continue;
						if (!trigger.type || trigger.type != 'phase') continue;
						if (!player.canEquip(card, true)) continue;
						map.vcards.add(name);
					}
					return map;
				},
				hiddenCard(player, name) {
					let map = lib.skill.scqhFivesec_feiqi.map(false, player);
					return map && map.hidden.includes(name);
				},
				filter(trigger, player) {
					let map = lib.skill.scqhFivesec_feiqi.map(trigger, player);
					return map && map.vcards.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						let prompt = '是否发动【绯器】？';
						let dialog = ui.create.dialog(prompt, 'hidden');
						let map = lib.skill.scqhFivesec_feiqi.map(trigger, player);
						dialog.add([map.vcards, 'vcard']);
						dialog.direct = true;
						return dialog;
					},
					check(button) {
						let card = {
							name: button.link[2],
						};
						let player = _status.event.player;
						return player.getUseValue(card);
					},
					backup(links, player) {
						var name = links[0][2];
						var bool = {
							scqhFivesec_feiqi: name,
							popup: false,
							log: false,
							position: 'hes',
							check(card) {
								return 8 - get.value(card);
							},
						};
						if (name == 'sha') {
							bool.selectCard = [0, 1];
							bool.filterCard = function (card, player) {
								if (!lib.filter.cardDiscardable(card, player)) return false;
								if (get.subtype(card) != 'equip1') return false;
								return true;
							};
							bool.viewAs = {
								name: name,
							};
							bool.precontent = function () {
								'step 0';
								var cards = event.result.cards || event.result.card.cards || [];
								event.result.card.suit = 'none';
								event.result.card.number = null;
								if (!cards.length) {
									event.result.card.isCard = true;
									player.loseHp();
								} else {
									event.result.card.isCard = false;
									event.result.card.cards = [];
									event.result.cards = [];
									player.discard(cards);
								}
								event.forceDie = true;
								('step 1');
								if (player.isDead()) {
									player.useResult(event.result, event.parent).forceDie = true;
								}
							};
						} else {
							bool.selectCard = [1, 1];
							bool.filterCard = function (card, player) {
								return get.scqh_wuxing(card, 'water');
							};
							bool.content = function () {
								var equip = lib.skill.scqhFivesec_feiqi_backup.scqhFivesec_feiqi || false;
								var card = cards[0];
								if (equip) {
									var cardx = game.createCard(equip, card.suit, card.number);
									if (player.canEquip(cardx, true)) {
										player.$gain2(cardx);
										player.equip(cardx);
									}
								}
							};
						}
						return bool;
					},
					prompt(links, player) {
						var name = links[0][2];
						var str = '';
						if (name == 'sha') {
							str += '弃置一张武器牌或流失一点体力,视为使用或打出一张【杀】';
						} else {
							str += '弃置一张水五行牌,将【';
							str += get.translation(name) || '';
							str += '】置入你的装备区内';
						}
						return str;
					},
				},
				ai: {
					order(item, player) {
						return 10;
					},
					result: {
						player: 1,
					},
				},
				subSkill: {
					backup: {},
				},
			},
			scqhFivesec_jieshan: {
				limited: true,
				trigger: {
					player: 'phaseUseBegin',
				},
				filter(trigger, player) {
					return true;
				},
				check(trigger, player) {
					return true;
				},
				content() {
					player.awakenSkill(event.name);
					var disables = [];
					for (var i = 2; i <= 5; i++) {
						for (var j = 0; j < player.countEnabledSlot(i); j++) {
							disables.push(i);
						}
					}
					if (disables.length) {
						for (const i of disables) player.expandEquip(1);
						player.disableEquip(disables);
						player.draw(disables.length);
					}
				},
			},
			scqhFivesec_yingwang: {
				forced: true,
				trigger: {
					global: 'useCard',
				},
				filter(event, player) {
					if (!event.card) return false;
					if (_status.dying.length) return false;
					if (event.player == player) return false;
					if (!event.card.number) return false;
					var store = player.storage.scqhFivesec_yingwang_round || [];
					if (store.includes(event.card.name)) return false;
					if (!['basic', 'trick'].includes(get.type(event.card))) return false;
					if (event.getParent('scqhFivesec_yingwang').name == 'scqhFivesec_yingwang') return false;
					var ccc = player.getCards('hs', (card) => card.number > event.card.number);
					return ccc.length && player.isAlive() && event.player.isAlive();
				},
				content() {
					'step 0';
					event.start = false;
					event.using = [player, trigger.player];
					event.card = trigger.card;
					event.gains = [];
					('step 1');
					var next = event.using[0].chooseToRespond('hs');
					next.set('complexSelect', true);
					next.set('prompt', function () {
						var str = '【蝇王】:';
						if (!event.start) {
							str += get.translation(trigger.player);
							str += '使用了';
							str += get.translation(trigger.card);
							str += ',';
						}
						str += '是否打出一张大于';
						str += event.card.number || 0;
						str += '点(';
						str += get.translation(event.card);
						str += ')的手牌';
						str += '？';
						return str;
					});
					next.set('filterCard', function (card) {
						var one = event.card.number || 0;
						var two = card.number || 0;
						return two > one;
					});
					next.set('selectCard', function (card) {
						return 1;
					});
					next.set('ai', function (card) {
						var att = get.attitude(event.using[0], event.using[1]);
						if (att >= 1) return -10;
						if (card.hasGaintag && card.hasGaintag('scqhFivesec_yingwang')) {
							return 20 - get.value(card);
						}
						return 8 - get.value(card);
					});
					('step 2');
					if (result && result.bool && result.cards && result.cards.length) {
						if (!event.start) {
							player.addTempSkill(event.name + '_round', 'roundStart');
							event.start = true;
							var store = player.storage[event.name + '_round'] || [];
							store.add(trigger.card.name);
							player.storage[event.name + '_round'] = store;
						}
						event.card = result.cards[0];
						for (const i of result.cards) event.gains.add(i);
						if (event.using[0].canUse(result.cards[0], event.using[1])) {
						}
					} else if (!event.start) event.finish();
					else {
						event.using[0].popup('要不起');
						event.using = event.using.reverse();
						event.goto(4);
					}
					('step 3');
					if (_status.dying.length) return;
					if (event.using[1].isAlive()) {
						event.using = event.using.reverse();
						event.goto(1);
					}
					('step 4');
					if (event.using[0].isAlive()) event.using[0].popup('胜利');
					if (event.using[1].isAlive()) event.using[1].popup('失败');
					game.log(event.using[0], '胜利');
					game.cardsGotoOrdering(event.gains);
					var list = [];
					for (var card of event.gains) {
						if (['d', 'o'].includes(get.position(card, true))) {
							list.add(card);
						}
					}
					if (list.length && event.using[0].isAlive()) event.using[0].gain(list, 'gain2').gaintag.add(event.name);
					('step 5');
					if (event.using[0] == player) {
						trigger.targets.length = 0;
						trigger.all_excluded = true;
						game.log(trigger.player, '使用的', trigger.card, '被取消了');
					}
				},
				group: ['scqhFivesec_yingwang_kanpo', 'scqhFivesec_yingwang_wuxie'],
				global: 'scqhFivesec_yingwang_global',
				subSkill: {
					round: {
						charlotte: true,
						mark: true,
						intro: {
							content(storage, player, skill) {
								return get.translation(storage);
							},
						},
					},
					global: {
						mod: {
							cardEnabled2(card, player) {
								var has = game.hasPlayer((current) => current.hasSkill('scqhFivesec_yingwang'));
								if (has && card.hasGaintag && card.hasGaintag('scqhFivesec_yingwang')) {
									var scp = _status.currentPhase;
									if (scp && scp == player) return false;
								}
							},
							ignoredHandcard(card, player) {
								var has = game.hasPlayer((current) => current.hasSkill('scqhFivesec_yingwang'));
								if (has && card.hasGaintag && card.hasGaintag('scqhFivesec_yingwang')) {
									return true;
								}
							},
							cardDiscardable(card, player, name) {
								var has = game.hasPlayer((current) => current.hasSkill('scqhFivesec_yingwang'));
								if (has && card.hasGaintag && card.hasGaintag('scqhFivesec_yingwang')) {
									return false;
								}
							},
						},
					},
					kanpo: {
						forced: true,
						trigger: {
							player: 'useCard',
						},
						filter(event, player) {
							return event.card && event.card.name == 'wuxie' && event.skill == 'scqhFivesec_yingwang_wuxie';
						},
						content() {
							trigger.directHit.addArray(game.players);
						},
					},
					wuxie: {
						enable: 'chooseToUse',
						filterCard(card, player, event) {
							var one = card.number;
							var cards = player.getCards('hs', function (i) {
								return one == i.number;
							});
							if (cards.length < 4) return false;
							var uis = ui.selected.cards;
							if (uis.length) {
								if (one != uis[0].number) {
									return false;
								}
							}
							return true;
						},
						selectCard(card) {
							var uis = ui.selected.cards;
							if (uis.length) return -1;
							return 4;
						},
						complexCard: true,
						complexSelect: true,
						viewAs: {
							name: 'wuxie',
						},
						position: 'hs',
						prompt: '将四张相同点的牌当【无懈可击】使用',
						check(card) {
							var tri = _status.event.getTrigger();
							if (tri && tri.card && tri.card.name == 'chiling') return -1;
							return 8 - get.value(card);
						},
					},
				},
			},
			scqhFivesec_shenyi: {
				trigger: {
					global: 'damageEnd',
				},
				logTarget: 'player',
				filter(trigger, player) {
					var history = trigger.player.getHistory('damage', (evt) => {
						if (evt == trigger) return false;
						if (!evt.source || evt.source == evt.player) return false;
						return true;
					});
					if (history.length) return false;
					if (!player.inRange(trigger.player)) return false;
					if (!trigger.source || trigger.source == trigger.player) return false;
					return true;
				},
				check(trigger, player) {
					var att = get.attitude(player, trigger.player);
					var deff = get.damageEffect(trigger.player, trigger.source, player, trigger.nature);
					return deff;
				},
				content() {
					'step 0';
					trigger.player.recover();
					('step 1');
					if (!trigger.player.isIn() || !player.countCards('h')) event.finish();
					('step 2');
					var prompt = '';
					prompt += '交给';
					prompt += get.translation(trigger.player);
					prompt += '任意张手牌,且其不能对你使用与之同名的牌,直到其失去这些牌';
					player
						.chooseCard('h', [1, Infinity])
						.set('prompt', prompt)
						.set('target', trigger.player)
						.set('ai', function (card) {
							let player = _status.event.player;
							let target = _status.event.target;
							let att = get.attitude(player, target);
							let value = get.value(card);
							if (att <= 0) return -value;
							else if (value <= 0) return 0;
							return 8 - value;
						});
					('step 3');
					var cards = result.cards || [];
					if (cards.length) {
						var skill = event.name + '_' + player.playerid;
						game.broadcastAll(lib.skill[event.name].createGainTag, skill, player.name);
						game.addVideo('skill', player, [event.name, [skill, player.name]]);
						player.give(cards, trigger.player, 'give').gaintag.add(skill);
					}
				},
				createGainTag(skill, name) {
					if (!lib.skill[skill]) {
						lib.skill[skill] = {
							charlotte: true,
						};
						lib.translate[skill] = '义·' + get.translation(name);
					}
					let sourceSkill = 'scqhFivesec_shenyi';
					if (!_status.postReconnect[sourceSkill]) {
						_status.postReconnect[sourceSkill] = [lib.skill[sourceSkill].createGainTag, [], []];
					}
					_status.postReconnect[sourceSkill][1].add(skill);
					_status.postReconnect[sourceSkill][2].add(name);
				},
				global: ['scqhFivesec_shenyi_global'],
				group: [
				],
				subSkill: {
					global: {
						mod: {
							playerEnabled(card, player, target) {
								var hs = player.getCards('h');
								for (var cardx of hs) {
									if (cardx.name != card.name) continue;
									var list = cardx.gaintag || [];
									for (var tag of list) {
										if (!tag.includes('scqhFivesec_shenyi_')) continue;
										if (!tag.includes(target.playerid)) continue;
										var info = get.info(card);
										if (!info || !info.singleCard || !ui.selected.targets.length) return false;
									}
								}
							},
						},
					},
					damage: {
						trigger: {
							global: 'damageEnd',
						},
						logTarget: 'player',
						filter(trigger, player) {
							var history = trigger.player.getHistory('damage', (evt) => {
								if (evt == trigger) return false;
								if (!evt.source || evt.source == evt.player) return false;
								return true;
							});
							if (history.length) return false;
							if (!player.inRange(trigger.player)) return false;
							if (!trigger.source || trigger.source == trigger.player) return false;
							return true;
						},
						check(trigger, player) {
							var att = get.attitude(player, trigger.player);
							var deff = get.damageEffect(trigger.player, trigger.source, player, trigger.nature);
							return deff;
						},
						content() {
							trigger.player.recover();
						},
					},
					discard: {
						trigger: {
							global: 'loseAfter',
						},
						logTarget: 'player',
						discardFilter(evt) {
							var evt2 = evt.getParent(2);
							if (!evt2 || evt2.player == evt.player) return false;
							if (!evt.type || evt.type != 'discard') return false;
							if (evt.discarder && evt.discarder == evt.player) return false;
							var evtx = evt.getl(evt.player);
							return evtx && evtx.cards2 && evtx.cards2.length;
						},
						filter(trigger, player) {
							var bool = lib.skill.scqhFivesec_shenyi_discard.discardFilter;
							var history = trigger.player.getHistory('lose', (evt) => {
								if (evt == trigger) return false;
								return bool && bool(evt);
							});
							if (history.length) return false;
							if (!player.inRange(trigger.player)) return false;
							if (!player.countGainableCards(trigger.player, 'h')) return false;
							return bool && bool(trigger);
						},
						check(trigger, player) {
							var att = get.attitude(player, trigger.player);
							return att;
						},
						content() {
							trigger.player.gainPlayerCard(player, 'h', true);
						},
					},
				},
			},
			scqhFivesec_jiedai: {
				enable: ['chooseToUse', 'chooseToRespond'],
				map(player) {
					var storage = player.storage.scqhFivesec_jiedai || {};
					var map = {};
					map.hidden = [];
					map.vcards = [];
					for (let id in storage) {
						let info = storage[id] || {};
						if (!info.player || !info.player.isIn()) continue;
						if (info.player == player) continue;
						let hs = info.player.getCards('h');
						if (!info.count || !hs.length) continue;
						map.hidden.addArray(hs);
						map.vcards.push([get.translation(info.player) || '未知武将', hs]);
					}
					return map;
				},
				hiddenCard(player, name) {
					var map = lib.skill.scqhFivesec_jiedai.map(player);
					for (let card of map.hidden) {
						if (card.name == name) return true;
					}
					return false;
				},
				filter(trigger, player) {
					var map = lib.skill.scqhFivesec_jiedai.map(player);
					if (!map || !map.hidden.length) return false;
					if (trigger.type && trigger.type == 'phase') return true;
					for (let card of map.hidden) {
						let filter = trigger.filterCard;
						if (filter && filter(card, player, trigger)) return true;
					}
					return false;
				},
				chooseButton: {
					dialog(trigger, player) {
						var dialog = ui.create.dialog('借贷用户', 'hidden');
						var map = lib.skill.scqhFivesec_jiedai.map(player);
						for (let list of map.vcards) {
							dialog.add(list[0]);
							dialog.add(list[1]);
						}
						dialog.direct = true;
						return dialog;
					},
					filter(button, player) {
						var evt = _status.event.parent;
						var card = button.link;
						return evt.filterCard(card, player, evt);
					},
					check(button) {
						var player = _status.event.player;
						var evt = _status.event.parent;
						if (evt.dying) return get.attitude(player, evt.dying);
						var card = button.link;
						return player.getUseValue(card);
					},
					backup(links, player) {
						var card = links[0];
						return {
							popup: false,
							log: false,
							viewAs: card,
							card: card,
							filterCard: () => false,
							selectCard: -1,
							precontent() {
								var card = lib.skill.scqhFivesec_jiedai_backup.card;
								if (card) {
									var target = get.owner(card);
									if (target) {
										var storage = player.storage.scqhFivesec_jiedai || {};
										var targetid = storage[target.playerid] || {};
										var count = targetid.count || 0;
										if (count > 0) count -= 1;
										targetid.count = count;
										storage[target.playerid] = targetid;
										player.storage.scqhFivesec_jiedai = storage;
									}
									player.showCards(card);
									event.result.cards = [card];
									event.result.card.cards = [card];
								}
							},
						};
					},
					prompt(links, player) {
						var card = links[0];
						var target = get.owner(card);
						var str = '';
						str += get.translation(target) || '未知武将';
						str += '代替你使用或打出';
						str += get.translation(card) || '未知卡牌';
						return str;
					},
				},
				ai: {
					respondSha: true,
					respondShan: true,
					save: true,
					order: 8,
					result: {
						player: 1,
					},
				},
				group: ['scqhFivesec_jiedai_add'],
				subSkill: {
					add: {
						forced: true,
						trigger: {
							global: ['gainEnd', 'recoverEnd'],
							player: 'damageEnd',
						},
						filter(trigger, player) {
							if (trigger.name == 'gain') {
								if (!trigger.player.isAlive()) return false;
								if (trigger.player == player) return false;
								var evt = trigger.getl(player);
								return evt && evt.cards2 && evt.cards2.length;
							} else if (trigger.name == 'recover') {
								if (!trigger.player.isAlive()) return false;
								if (trigger.player == player) return false;
								if (!trigger.source || trigger.source != player) return false;
								return true;
							} else if (trigger.name == 'damage') {
								if (!trigger.source || trigger.source == player) return false;
								if (!trigger.source.isAlive()) return false;
								return true;
							}
							return false;
						},
						content() {
							var current = false;
							var count = 0;
							if (trigger.name == 'gain') {
								current = trigger.player;
								var evt = trigger.getl(player);
								count += evt.cards2.length;
							} else if (trigger.name == 'recover') {
								current = trigger.player;
								count += trigger.num;
							} else if (trigger.name == 'damage') {
								current = trigger.source;
								count += trigger.num;
							}
							if (current && count > 0) {
								var id = current.playerid;
								var skill = 'scqhFivesec_jiedai';
								var storage = player.storage[skill] || {};
								var sub = storage[id] || {};
								if (!sub.player) sub.player = current;
								if (!sub.count) sub.count = 0;
								sub.count += count;
								storage[id] = sub;
								player.storage[skill] = storage;
								player.markSkill(skill);
							}
						},
					},
				},
				marktext: '债',
				intro: {
					content(storage, player, skill) {
						let map = player.storage.scqhFivesec_jiedai || {};
						let str = '';
						for (let id in map) {
							let info = map[id] || {};
							if (!info.player || !info.player.isIn()) continue;
							if (info.player == player) continue;
							if (!info.count) continue;
							str += get.translation(info.player) || '未知武将';
							str += '的欠款:';
							str += info.count || 0;
							str += '<br/>';
						}
						return str;
					},
					markcount(storage, player) {
						let map = player.storage.scqhFivesec_jiedai || {};
						let count = 0;
						for (let id in map) {
							let info = map[id] || {};
							if (!info.player || !info.player.isIn()) continue;
							if (info.player == player) continue;
							if (info.count) count += 1;
						}
						if (count > 0) return count;
						else player.unmarkSkill('scqhFivesec_jiedai');
					},
				},
			},
			scqhFivesec_bihu: {
				forced: true,
				preHidden: true,
				trigger: {
					player: 'judgeEnd',
				},
				filter(trigger, player) {
					if (get.owner(trigger.result.card)) return false;
					if (trigger.nogain && trigger.nogain(trigger.result.card)) return false;
					return true;
				},
				content() {
					player.gain(trigger.result.card, 'gain2');
					var target = _status.currentPhase;
					if (target) {
						var temp = 'scqhFivesec_bihu_eff';
						target.addTempSkill(temp);
						target.addMark(temp);
					}
				},
				subSkill: {
					eff: {
						mod: {
							cardUsable(card, player, num) {
								var mark = player.countMark('scqhFivesec_bihu_eff');
								if (card.name == 'sha' && mark) return num + mark;
							},
						},
						charlotte: true,
						intro: {
							content(storage) {
								if (storage) return '使用【杀】的次数上限+' + storage;
								else return '';
							},
						},
					},
				},
			},
			scqhFivesec_tiebi: {
				forced: true,
				preHidden: true,
				trigger: {
					player: 'damageBegin3',
				},
				filter(event, player) {
					return event.num > 0;
				},
				content() {
					'step 0';
					var check = {};
					check.red = player.getCards('he', { color: 'red' });
					check.black = player.getCards('he', { color: 'black' });
					check.bool = check.red.length > 1 || check.black.length > 1;
					if (check.bool) {
						var next = player.chooseToDiscard('he', 2, function (card, player) {
							var uic = ui.selected.cards || [];
							var color = get.color(card);
							if (uic.length) {
								if (color != get.color(uic[0])) return false;
							}
							return true;
						});
						next.set('complexCard', true);
						next.set('prompt', get.prompt(event.name));
						next.set('prompt2', '弃置两张颜色相同的牌,令此伤害-1');
						next.set('check', check);
						next.set('ai', function (card) {
							var player = _status.event.player;
							var check = _status.event.check;
							var value = get.value(card, player);
							if (player.hp == 1) {
								var count = player.countCards('h', function (card) {
									return get.tag(card, 'save');
								});
								if (!count && !player.hasSkillTag('save', true)) return 10 - value;
								return 7 - value;
							}
							return 6 - value;
						});
					}
					('step 1');
					var cards = result.cards || [];
					if (cards.length) trigger.num -= 1;
					player.judge(function (card) {
						if (get.color(card) == 'red') return 1;
						return 0;
					});
					('step 2');
					if (result.judge) player.draw();
				},
			},
			scqhFivesec_guibian: {
				enable: ['chooseToUse', 'chooseToRespond'],
				vcards(trigger, player) {
					const vcards = [];
					const hs = player.getCards('hes');
					const players = game.filterPlayer((current) => current != player);
					const storage = player.getStorage('scqhFivesec_guibian_used');
					if (!hs.length || !players.length) return [];
					for (const name of lib.inpile) {
						if (storage.includes(name)) continue;
						const card = { name: name };
						const type = get.type2(name);
						const types = ['basic', 'trick'];
						if (!types.includes(type)) continue;
						let auto = get.autoViewAs(card, 'unsure');
						if (trigger && trigger.filterCard) {
							if (!trigger.filterCard(auto, player, trigger)) continue;
						}
						vcards.add([type, '', name]);
						if (name !== 'sha') continue;
						for (const nature of lib.inpile_nature) {
							card.nature = nature;
							auto = get.autoViewAs(card, 'unsure');
							if (trigger && trigger.filterCard) {
								if (!trigger.filterCard(auto, player, trigger)) continue;
							}
							vcards.add([type, '', name, nature]);
						}
					}
					return vcards;
				},
				hiddenCard(player, name) {
					const vcards = lib.skill.scqhFivesec_guibian.vcards(false, player);
					if (vcards && vcards.length) {
						for (const vcard of vcards) {
							if (vcard[2] && vcard[2] === name) return true;
						}
					}
					return false;
				},
				filter(trigger, player) {
					const vcards = lib.skill.scqhFivesec_guibian.vcards(trigger, player);
					return vcards && vcards.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						const vcards = lib.skill.scqhFivesec_guibian.vcards(trigger, player);
						const dialog = ui.create.dialog('诡辩', 'hidden');
						dialog.add([vcards, 'vcard']);
						dialog.direct = true;
						return dialog;
					},
					filter(button, player) {
						const evt = _status.event.parent;
						const card = {
							name: button.link[2],
							nature: button.link[3],
						};
						return evt.filterCard(card, player, evt);
					},
					check(button) {
						if (_status.event.parent.type !== 'phase') return 1;
						const player = _status.event.player;
						const card = {
							name: button.link[2],
							nature: button.link[3],
						};
						const value = player.getUseValue(card);
						return value;
					},
					backup(links, player) {
						const info = {
							filterCard(card, player, target) {
								let result = true;
								let suit = card.suit;
								let number = card.number;
								card.suit = 'none';
								card.number = null;
								let mod = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
								if (mod != 'unchanged') result = mod;
								card.suit = suit;
								card.number = number;
								return result;
							},
							selectCard: 1,
							position: 'hes',
							ignoreMod: true,
							aiUse: Math.random(),
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
								suit: 'none',
								number: null,
								scqhFivesec_guibian: true,
							},
							ai1(card) {
								const player = _status.event.player;
								return 7 - get.value(card, player);
							},
							precontent() {
								const card = event.result.cards[0];
								event.result.card.suit = card.suit;
								event.result.card.number = card.number;
								player.addTempSkill('scqhFivesec_guibian_used');
								player.markAuto('scqhFivesec_guibian_used', [event.result.card.name]);
							},
						};
						return info;
					},
					prompt(links, player) {
						var link = links[0];
						var str = '扣置一张牌当做【';
						str += get.translation(link[3]) || '';
						str += get.translation(link[2]) || '';
						str += '】';
						str += _status.event.name == 'chooseToUse' ? '使用' : '打出';
						return str;
					},
				},
				ai: {
					fireAttack: true,
					respondShan: true,
					respondSha: true,
					save: true,
					skillTagFilter(player) {
						if (!player.countCards('hes')) return false;
					},
					order: 10,
					result: {
						player: 1,
					},
					threaten: 1.3,
				},
				group: 'scqhFivesec_guibian_guess',
				subSkill: {
					used: {
						mark: true,
						marktext: '诡辩',
						intro: {
							name: '诡辩已声明过:',
							content: '$',
						},
						charlotte: true,
					},
					guess: {
						forced: true,
						trigger: {
							player: ['useCardBefore', 'respondBefore'],
						},
						filter(trigger, player) {
							var players = game.filterPlayer((current) => current != player);
							if (!players.length) return false;
							return trigger.skill && trigger.skill.indexOf('scqhFivesec_guibian_') == 0;
						},
						content: async function (event, trigger, player) {
							const evt = trigger.parent;
							const vcards = [];
							const canuse = [];
							const players = game.filterPlayer((current) => current != player);
							const targets = trigger.targets || [];
							const cards = trigger.cards || [];
							if (cards.length) {
								(await player.lose(cards, ui.ordering)).relatedEvent = trigger;
							}
							let prompt = '';
							prompt += get.translation(player);
							prompt += '声明';
							if (trigger.name === 'useCard') {
								if (targets.length) {
									prompt += '对';
									prompt += get.translation(targets);
								}
								prompt += '使用';
							} else {
								prompt += '打出';
							}
							prompt += get.translation(trigger.card) || '';
							prompt += ',是否质疑？';
							const newtarget = function (card, player, targets) {
								return targets.filter(function (target) {
									return player.canUse(card, target, false);
								});
							};
							const filterCard = function (card, player, targets, evt, newtarget) {
								const filter = evt.filterCard;
								if (filter && filter(card, player, evt)) {
									const targetx = newtarget(card, player, targets);
									if (targets.length && !targetx.length) return false;
									return true;
								}
								return false;
							};
							const storage = player.getStorage('scqhFivesec_guibian_used');
							for (const name of lib.inpile) {
								if (storage.includes(name) && trigger.card.name !== name) continue;
								const type = get.type2(name);
								const types = ['basic', 'trick'];
								const card = {
									name: trigger.card.name,
									nature: trigger.card.nature,
									cards: trigger.card.cards,
								};
								if (!types.includes(type)) continue;
								card.name = name;
								if (filterCard(card, player, targets, evt, newtarget)) {
									vcards.add([type, '', name]);
								}
								if (name != 'sha') continue;
								for (const nature of lib.inpile_nature) {
									card.nature = nature;
									if (filterCard(card, player, targets, evt, newtarget)) {
										vcards.add([type, '', name, nature]);
									}
								}
							}
							if (vcards.length > 1) {
								for (const current of players) {
									const chooseButton = await current
										.chooseButton([prompt, [vcards, 'vcard']])
										.set('triggercard', trigger.card)
										.set('triggername', trigger.name)
										.set('forced', true)
										.set('source', player)
										.set('targets', targets)
										.set('card', trigger.card)
										.set('att', get.attitude(current, player))
										.set('ai', function (button) {
											const targets = _status.event.targets;
											const source = _status.event.source;
											const current = _status.event.player;
											const card = _status.event.card;
											const att = _status.event.att;
											const triggername = _status.event.triggername;
											const triggercard = _status.event.triggercard;
											const cardx = {
												name: button.link[2],
												nature: button.link[3],
											};
											if (att && att > 0) {
												let eff = 0;
												if (triggercard.name === cardx.name) eff += 15;
												if (triggername === 'useCard' && targets.length) {
													for (const target of targets) {
														if (!source.canUse(cardx, target, false)) continue;
														eff += get.effect(target, cardx, source, source);
													}
													return eff;
												}
												return source.getUseValue(cardx);
											} else {
												if (targets.includes(current)) return get.effect(current, cardx, source, current);
											}
											return Math.random();
										})
										.forResult();
									const links = (chooseButton.links || [])[0] || false;
									if (links) {
										canuse.add([get.translation(current), '', links[2], links[3]]);
									}
								}
							} else if (vcards.length) {
								canuse.addArray(vcards);
							} else return;
							if (canuse.length) {
								const chooseButton = await player
									.chooseButton(['令【诡辩】继续结算或将此牌作废', [canuse, 'vcard']])
									.set('triggername', trigger.name)
									.set('targets', targets)
									.set('ai', function (button) {
										const triggername = _status.event.triggername;
										const player = _status.event.player;
										const targets = _status.event.targets;
										const cardx = {
											name: button.link[2],
											nature: button.link[3],
										};
										var eff = 0;
										if (triggername === 'useCard') {
											for (const target of targets) {
												if (player.canUse(cardx, target, false)) {
													eff += get.effect(target, cardx, player, player);
												}
											}
											return eff;
										}
										return 1;
									})
									.forResult();
								const links = (chooseButton.links || [])[0] || false;
								if (links) {
									trigger.card.name = links[2];
									trigger.card.nature = links[3];
									trigger.targets = newtarget(trigger.card, player, targets);
									game.log(player, '将声明的牌当做了', '#y【' + get.translation(trigger.card) + '】', '继续结算');
									player.addTempSkill('scqhFivesec_guibian_used');
									player.markAuto('scqhFivesec_guibian_used', [trigger.card.name]);
								} else {
									player.popup('作废');
									game.log(player, '声明的', '#y【' + get.translation(trigger.card) + '】', '作废了');
									trigger.cancel();
									if (evt.type && evt.type == 'phase') {
										evt.goto(0);
									}
								}
							}
						},
					},
				},
			},
			scqhFivesec_qicai: {
				enable: 'phaseUse',
				usable: 1,
				filterCard: true,
				position: 'he',
				check(card) {
					const player = _status.event.player;
					const type = get.type2(card, player);
					const ds = Array.from(ui.discardPile.childNodes).filter((card) => {
						return get.type2(card) !== type;
					});
					if (!ds.length) return 0;
					return 7 - get.value(card);
				},
				discard: false,
				lose: false,
				delay: false,
				filterTarget(card, player, target) {
					return player !== target;
				},
				content: async function (event, trigger, player) {
					await player.give(event.cards, event.target, 'giveAuto');
					const type = get.type2(event.cards[0], player);
					let prompt = '';
					prompt += '请交给';
					prompt += get.translation(player);
					prompt += '两张非';
					prompt += get.translation(type);
					prompt += '牌,否则';
					prompt += get.translation(player);
					prompt += '从弃牌堆中获得一至两张非';
					prompt += get.translation(type);
					prompt += '牌';
					const chooseCard = await event.target
						.chooseCard(2, 'he', function (card) {
							const type = _status.event.type;
							return get.type2(card) !== type;
						})
						.set('type', type)
						.set('prompt', prompt)
						.set('ai', function (card) {
							const player = _status.event.player;
							const value = get.value(card);
							return 3 - value;
						})
						.forResult();
					if (chooseCard.bool) {
						const cards = chooseCard.cards || [];
						if (cards.length) await event.target.give(cards, player, 'giveAuto');
					} else {
						const ds = Array.from(ui.discardPile.childNodes).filter((card) => {
							return get.type2(card) !== type;
						});
						const result = {};
						if (ds.length > 1) {
							const chooseButton = await player
								.chooseButton(true, [1, 2], [get.translation(event.name), ds])
								.set('ai', (button) => {
									const player = _status.event.player;
									const card = button.link;
									return player.getUseValue(card);
								})
								.forResult();
							result.bool = chooseButton.bool;
							result.cards = chooseButton.links;
						} else if (ds.length) {
							result.bool = true;
							result.cards = ds;
						} else result.bool = false;
						if (result.bool) {
							const cards = result.cards || [];
							if (cards.length) await player.gain(cards, 'gain2');
						}
					}
					player.addTempSkill('scqhFivesec_qicai_qicai');
					player.markAuto('scqhFivesec_qicai_qicai', [type]);
				},
				ai: {
					order: 1,
					result: {
						player: 1,
						target: 1,
					},
				},
				subSkill: {
					qicai: {
						charlotte: true,
						mod: {
							targetInRange(card, player, target, now) {
								if (!player.hasSkill('scqhFivesec_qicai')) return;
								const storage = player.storage.scqhFivesec_qicai_qicai || [];
								if (!storage.includes(get.type2(card))) return true;
							},
							cardUsable(card, player, num) {
								if (!player.hasSkill('scqhFivesec_qicai')) return;
								const storage = player.storage.scqhFivesec_qicai_qicai || [];
								if (!storage.includes(get.type2(card))) return Infinity;
							},
						},
					},
				},
			},
			scqhFivesec_zhuren: {
				enable: ['chooseToUse', 'chooseToRespond'],
				map(trigger, player) {
					let map = {};
					map.vcards = [];
					map.hidden = ['sha', 'guohe', 'scqh_zhenjian'];
					let hs = player.getCards('hes', (card) => {
						return get.scqh_wuxing(card, 'wood');
					});
					if (!hs.length) return false;
					for (let name of map.hidden) {
						let card = {};
						card.name = name;
						if (name == 'scqh_zhenjian') {
							let equip = lib.card.scqh_zhenjian || false;
							if (!equip || !trigger || !trigger.type) continue;
							if (trigger.type != 'phase') continue;
							if (!player.canEquip(card, true)) continue;
						} else {
							if (!trigger || !trigger.filterCard) continue;
							if (!trigger.filterCard(card, player, trigger)) continue;
						}
						map.vcards.add(name);
					}
					return map;
				},
				hiddenCard(player, name) {
					let map = lib.skill.scqhFivesec_zhuren.map(false, player);
					return map && map.hidden.includes(name);
				},
				filter(trigger, player) {
					let map = lib.skill.scqhFivesec_zhuren.map(trigger, player);
					return map && map.vcards.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						let prompt = '是否发动【铸刃】？';
						let dialog = ui.create.dialog(prompt, 'hidden');
						let map = lib.skill.scqhFivesec_zhuren.map(trigger, player);
						dialog.add([map.vcards, 'vcard']);
						dialog.direct = true;
						return dialog;
					},
					check(button) {
						let card = {
							name: button.link[2],
						};
						let player = _status.event.player;
						return player.getUseValue(card);
					},
					backup(links, player) {
						var name = links[0][2];
						var bool = {
							popup: false,
							log: false,
							filterCard(card, player) {
								return get.scqh_wuxing(card, 'wood');
								if (get.type2(card) == 'basic') return true;
								if (card.wunature && card.wunature == 'wood') return true;
								return false;
							},
							selectCard: 1,
							position: 'hes',
							check(card) {
								return 8 - get.value(card);
							},
						};
						if (name != 'scqh_zhenjian') {
							bool.viewAs = {
								name: name,
							};
							bool.precontent = function () {
								var equip = lib.card.scqh_zhenjian || false;
								var card = event.result.card;
								if (equip) {
									var cardx = game.createCard('scqh_zhenjian', card.suit, card.number);
									var es = player.getCards('e', { name: 'scqh_zhenjian' });
									if (!es.length && player.canEquip(cardx, true)) {
										player.$gain2(cardx);
										player.equip(cardx);
									}
								}
							};
						} else {
							bool.content = function () {
								var equip = lib.card.scqh_zhenjian || false;
								var card = cards[0];
								if (equip) {
									var cardx = game.createCard('scqh_zhenjian', card.suit, card.number);
									if (player.canEquip(cardx, true)) {
										player.$gain2(cardx);
										player.equip(cardx);
									}
								}
							};
						}
						return bool;
					},
					prompt(links, player) {
						var name = links[0][2];
						var str = '';
						if (name != 'scqh_zhenjian') {
							str += '将任意一张牌当做【';
							str += get.translation(name) || '';
							str += '】使用或打出';
						} else {
							str += '弃置任意一张牌,将一张【';
							str += get.translation(name) || '';
							str += '】置入你的装备区内';
						}
						return str;
					},
				},
				ai: {
					order(item, player) {
						return 10;
					},
					result: {
						player: 1,
					},
				},
				subSkill: {
					backup: {},
				},
			},
			scqhFivesec_dengli: {
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
							if (evt.name == 'chooseToUse' && evt.player == player && evt.skill == 'scqhKoihime_咆哮') {
								let hp = player.hp;
								if (!ui.selected.cards.length) {
									let map = lib.skill.scqhKoihime_咆哮.map(player);
									hp -= map.usable;
								}
								let tie1 = hp == target.hp;
								let tie2 = player.countCards('h') == target.countCards('h');
								let tie = tie1 || tie2;
								if (card && card.name == 'sha' && tie) return [1, 0.3];
							}
						},
					},
				},
			},
			scqhFivesec_wubei: {
				init(player, skill) {
					player.scqh_InitShunfaji(skill);
				},
				clickable(player) {
					player.scqh_UseShunfaji();
				},
				clickableFilter(player) {
					return !player.hasSkill('scqhFivesec_wubei_eff');
				},
				clickableContent() {
					player.addTempSkill('scqhFivesec_wubei_eff');
				},
				group: ['scqhFivesec_wubei_ai'],
				subSkill: {
					ai: {
						forced: true,
						trigger: {
							global: 'phaseBegin',
							player: 'damageBefore',
						},
						filter(trigger, player) {
							let info = lib.skill.scqhFivesec_wubei || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var skill = 'scqhFivesec_wubei';
							var next = game.createEvent(skill);
							next.player = player;
							next.setContent(lib.skill[skill].clickableContent);
						},
					},
					eff: {
						charlotte: true,
						init(player, skill) {
							player.maxHp = Math.max(1, Math.ceil(player.maxHp * 5));
							player.hp = Math.max(1, Math.floor(player.hp * 5));
							player.update();
							var num = player.countCards('h');
							if (num > 0) player.drawTo(Math.min(player.hp, num * 5));
						},
						onremove(player, skill) {
							player.maxHp = Math.max(1, Math.ceil(player.maxHp / 5));
							player.hp = Math.max(1, Math.floor(player.hp / 5));
							player.update();
							var num = player.countCards('h');
							num = Math.ceil((num / 5) * 4);
							if (num > 0) player.chooseToDiscard('h', num, true);
						},
						mod: {
							cardUsable(card, player, num) {
								if (card.name == 'sha') return num * 5;
								if (card.name == 'jiu') return num * 5;
							},
						},
						group: ['scqhFivesec_wubei_recover', 'scqhFivesec_wubei_wushuang1', 'scqhFivesec_wubei_wushuang2', 'scqhFivesec_wubei_compare'],
					},
					recover: {
						forced: true,
						trigger: {
							player: 'recoverBegin',
						},
						content() {
							trigger.num *= 5;
						},
					},
					wushuang1: {
						forced: true,
						trigger: {
							player: 'shaBegin',
						},
						logTarget(trigger, player) {
							return player == trigger.player ? trigger.target : trigger.player;
						},
						content() {
							var shan = trigger.shanRequired;
							if (typeof shan != 'number' || !shan || shan < 0) {
								trigger.shanRequired = 1;
							}
							trigger.shanRequired *= 5;
						},
						ai: {
							directHit_ai: true,
							skillTagFilter(player, tag, arg) {
								if (arg && arg.card.name == 'sha') {
									if (arg && arg.target.countCards('h', 'shan') > 1) return false;
								}
							},
						},
					},
					wushuang2: {
						forced: true,
						trigger: {
							player: 'juedouBegin',
							target: 'juedouBegin',
						},
						logTarget(trigger, player) {
							return player == trigger.player ? trigger.target : trigger.player;
						},
						content() {
							if (!trigger.shaReq) trigger.shaReq = {};
							var target = player == trigger.player ? trigger.target : trigger.player;
							if (typeof trigger.shaReq[target.playerid] != 'number') trigger.shaReq[target.playerid] = 1;
							trigger.shaReq[target.playerid] *= 5;
						},
						ai: {
							directHit_ai: true,
							skillTagFilter(player, tag, arg) {
								if ((arg.card.name = 'juedou')) {
									if (Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
								}
							},
						},
					},
					compare: {
						forced: true,
						trigger: {
							player: 'compare',
							target: 'compare',
						},
						content() {
							if (player == trigger.player) {
								trigger.num1 *= 5;
							} else trigger.num5 *= 5;
						},
					},
				},
			},
		},
		translate: {
			scqhFivesec_xinzhan: '心战',
			scqhFivesec_xinzhan_info: '每回合限一次,当你需要使用或打出一张牌时,你可以观看在你攻击范围内的所有角色的手牌,复制其中一张牌.直到你复制下一张牌前,你可以将任意一张牌当做此牌(必须是基本牌或普通锦囊牌,每种牌名每回合限一次)使用或打出.',
			scqhFivesec_renran: '荏苒',
			scqhFivesec_renran_info: '当你翻面后,若你的武将牌正面朝上,你可以令一名其他角色减少一千点体力上限.',
			scqhFivesec_xifa: '戏法',
			scqhFivesec_xifa_info: '你可以将本回合未以此法使用过或选择过的一张牌当做本回合未以此法使用过或选择过的一种基本牌或锦囊牌使用或打出,摸一张牌(你以此法使用牌无距离和次数限制).',
			scqhFivesec_jingang: '金刚',
			scqhFivesec_jingang_info: '瞬发技,每两回合限一次,令本回合内接下来两次对你产生的效果无效(包括成为伤害牌的目标、受到伤害、失去体力、减少体力上限).',
			scqhFivesec_zhanjue: '战绝',
			scqhFivesec_zhanjue_info: '出牌阶段限两次,你可以将所有手牌当作一张【决斗】使用,此牌结算后,你与以此法受到伤害的角色各摸一张牌.当你造成伤害时,你可以失去一点体力或减一点体力上限,令此伤害+1.',
			scqhFivesec_wubei: '五倍',
			scqhFivesec_wubei_info: ['瞬发技,令Ａ～Ｚ的数值变成五倍,直到回合结束.', '◆Ａ＝体力上限,向上取整', '◆Ｂ＝体力值,向下取整', '◆Ｃ＝手牌数,向下取整,不能大于Ｂ', '◆Ｄ＝回复体力时的回复量', '◆Ｅ＝使用【杀】的次数上限', '◆Ｆ＝使用【酒】的次数上限', '◆Ｇ＝【杀】的无双倍率', '◆Ｈ＝【决斗】的无双倍率', '◆Ｉ＝拼点时的点数'].join('</br>'),
			scqhFivesec_zhuren: '铸刃',
			scqhFivesec_zhuren_info: '你可以将一张木五行牌:●弃置并从场外将一张【真剑师之剑】置入你的装备区;●当做【杀】或【过河拆桥】使用或打出,若你的装备区内没有【真剑师之剑】,则从场外将一张【真剑师之剑】置入你的装备区.',
			scqhFivesec_dengli: '等力',
			scqhFivesec_dengli_info: '当你使用【杀】指定目标后,或成为【杀】的目标后,若使用者和目标的体力值或手牌数相等,你可以摸一张牌.',
			scqhFivesec_guibian: '诡辩',
			scqhFivesec_guibian_info: '每种牌名每回合限一次,你可以扣置一张牌当做任意一种基本牌或锦囊牌使用或打出;其他角色依次声明一种你能合法使用或打出的牌名;你将这张牌当做一名角色声明的牌继续结算,或将此牌作废.',
			scqhFivesec_guibian_append: '没有队友就寄˘ᗜ˘',
			scqhFivesec_qicai: '奇才',
			scqhFivesec_qicai_info: ['出牌阶段限一次,你可以将一张', '<font color = #ffddb9>牌</font>', '交给一名其他角色,该角色除非交给你两张类型与此', '<font color = #ffddb9>牌</font>', '不同的牌,否则你从弃牌堆中获得一至两张类型与此', '<font color = #ffddb9>牌</font>', '不同的牌;若如此做,你于此回合内使用类型与此', '<font color = #ffddb9>牌</font>', '不同的牌的次数上限+X(Ｘ为你于本回合内使用与此', '<font color = #ffddb9>牌</font>', '类型相同的牌的次数).'].join(''),
			scqhFivesec_jiyi: '寄依',
			scqhFivesec_jiyi_info: '当你死亡时,你可以与距离为１且没有〖寄依〗技能的一名角色拼点.若你赢,你将所有牌与〖寄依〗交给该角色,获得该角色的控制权.',
			scqhFivesec_shenji: '沈寄',
			scqhFivesec_shenji_info: '当你死亡时,你可以与距离为１且没有〖寄依〗技能的一名角色拼点.若你赢,你将所有牌与〖寄依〗交给该角色,获得该角色的控制权.',
			scqhFivesec_tiebi: '铁壁',
			scqhFivesec_tiebi_info: '当你受到伤害时,依次执行下列选项:①你可以弃置两张颜色相同的牌,令此伤害减１;②你进行一次判定,若结果为红色,你摸一张牌.',
			scqhFivesec_bihu: '壁虎',
			scqhFivesec_bihu_info: '当你的判定牌生效后,你可以获得之,令当前回合角色于本回合内可以额外使用一张【杀】.',
			scqhFivesec_shenyi: '伸义',
			scqhFivesec_shenyi_info: '在你攻击范围内的一名角色于一回合内首次受到另一名角色造成的伤害后,你可以令其回复一点体力.若如此做,你可以交给其任意张手牌,且其不能对你使用与这些牌同名的牌,直到其失去这些牌.',
			scqhFivesec_jiedai: '借贷',
			scqhFivesec_jiedai_info: ['你可以观看你的所有欠债角色的手牌,你可以使用或打出其中一张目前需要使用或打出的牌.若如此做,其减少１点债.', '<font color = #D3A4FF>◆欠债的方式:①其他角色获得你的１张牌;②其他角色对你造成１点伤害;③你令其他角色回复１点体力.</font>'].join('</br>'),
			scqhFivesec_yingwang: '蝇王',
			scqhFivesec_yingwang_info: '',
			scqhFivesec_feiqi: '绯器',
			scqhFivesec_feiqi_info: ['你可以做出如下选择:①弃置一张武器牌或流失一点体力,视为使用或打出一张【杀】;②弃置一张水五行牌,将一张花色和点数均与之相同的武器牌置入你的装备区内.'].join('</br>'),
			scqhFivesec_jieshan: '解衫',
			scqhFivesec_jieshan_info: '限定技,出牌阶段开始时,你可以废除武器栏之外的所有装备栏,获得等量的额外的武器栏并摸等量的牌.',
		},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info'], list.translate[i + '_append']);
	}
};

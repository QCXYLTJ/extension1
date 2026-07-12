'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			_scqhJojo_tishen: {
				scqhJojoStatus: {
					power: 0,
					speed: 0,
					range: 0,
					growth: 0,
					accuracy: 0,
					usable: 0,
				},
				forced: true,
				scqhStand: true,
				trigger: {
					player: ['useCardBefore', 'respondBefore'],
				},
				filter(trigger, player) {
					if (!trigger.card) return false;
					if (trigger.name == 'useCard') {
						if (!get.tag(trigger.card, 'damage')) return false;
					}
					var stands = player.scqhJojo_getStand('usable') || [];
					for (var name of stands) {
						var info = player.scqhJojo_lookStatus(name);
						var num = info.usable;
						if (num && typeof num === 'number' && num > 0) return true;
					}
					return false;
				},
				content() {
					'step 0';
					player.scqhJojo_chooseStand(true, 'usable');
					('step 1');
					if (result.bool) {
						var stand = result.links[0];
						trigger.card.scqhJojo_chooseStand = stand;
					}
				},
			},
			_scqhJojo_tishen_usable: {
				log: false,
				popup: false,
				charlotte: true,
				mark: true,
				marktext: '替身',
				intro: {
					name: '替身的疲劳度',
					content(storage, player) {
						let stands = player.scqhJojo_getStand() || [];
						let prompt = '';
						for (let stand of stands) {
							let info = player.scqhJojo_lookStatus(stand, true);
							prompt += get.translation(stand);
							prompt += ':';
							let mark = player.storage[stand + '_usable'];
							prompt += mark || 0;
							prompt += '/';
							prompt += info.usable || 0;
							prompt += '<br/>';
						}
						return prompt;
					},
				},
				addUsable(player, stand) {
					let mark = player.storage[stand + '_usable'];
					if (!mark || typeof mark !== 'number' || mark <= 0) mark = 0;
					mark += 1;
					player.storage[stand + '_usable'] = mark;
					player.markSkill('_scqhJojo_tishen_usable');
				},
				forced: true,
				trigger: {
					player: 'recoverAfter',
				},
				filter(trigger, player) {
					let stands = player.scqhJojo_getStand() || [];
					for (let stand of stands) {
						let mark = player.storage[stand + '_usable'];
						if (mark && typeof mark === 'number' && mark > 0) return true;
					}
					return false;
				},
				content() {
					let num = trigger.num || 1;
					let stands = player.scqhJojo_getStand() || [];
					let prompt = false;
					for (let stand of stands) {
						let mark = player.storage[stand + '_usable'];
						if (mark && typeof mark === 'number' && mark > 0) {
							mark -= num;
							player.storage[stand + '_usable'] = mark;
							if (mark && typeof mark === 'number' && mark > 0) {
								prompt = true;
							}
						}
					}
					if (!prompt) player.unmarkSkill('_scqhJojo_tishen_usable');
				},
			},
			_scqhJojo_qianggong: {
				popup: false,
				log: false,
				trigger: {
					player: 'useCardToPlayered',
				},
				check(trigger, player) {
					return get.attitude(player, trigger.target) <= 0;
				},
				filter(trigger, player) {
					if (!trigger.target || !trigger.target.isIn()) return false;
					if (!trigger.card || trigger.card.name != 'sha') return false;
					const targets = trigger.targets || [];
					if (targets.length !== 1) return false;
					const stand = trigger.card.scqhJojo_chooseStand;
					if (!stand || typeof stand !== 'string') return false;
					const list = [];
					list.add('power');
					list.add('speed');
					list.add('range');
					list.add('usable');
					const info = player.scqhJojo_lookStatus(stand);
					const juli = get.distance(player, trigger.target);
					for (const type of list) {
						const num = info[type];
						if (!num || typeof num !== 'number' || num <= 0) return false;
						if (type === 'range' && juli > num) return false;
					}
					return true;
				},
				logTarget: 'target',
				audioPopup(player) {
					let prompt = '连击';
					let func = function (player, name) {
						return (player.name1 && player.name1 === name) || (player.name2 && player.name2 === name);
					};
					if (func(player, 'scqhJojo_kongtiaochengtailang')) {
						prompt = '噢啦';
						game.playAudio('../extension', lib.scqhExtension, 'audio', 'jojo', 'qianggong', 'scqhJojo_qianggong_kongtiaochengtailang');
					}
					if (func(player, 'scqhJojo_dio')) {
						prompt = '无駄';
						game.playAudio('../extension', lib.scqhExtension, 'audio', 'jojo', 'qianggong', 'scqhJojo_qianggong_dio');
					}
					game.log(player, ' ', prompt, '!');
					player.popup(prompt);
				},
				content() {
					'step 0';
					var stand = trigger.card.scqhJojo_chooseStand;
					var info = player.scqhJojo_lookStatus(stand);
					event.info = info;
					event.cards = [];
					player.storage.scqhJojo_qianggong = true;
					lib.skill._scqhJojo_tishen_usable.addUsable(player, stand);
					var speed = info.speed;
					if (!speed || typeof speed !== 'number' || speed <= 0) speed = 1;
					var time = 1000 * speed;
					setTimeout(function () {
						player.storage.scqhJojo_qianggong = false;
					}, time);
					('step 1');
					var cards = event.cards || [];
					if (player.isUnderControl(true) && !_status.auto) {
						var prompt = '确定';
						if (cards.length) prompt += cards.length;
						var next = player.chooseControl(prompt, 'cancel');
						next.set('prompt', '点击【确定】发动【强攻】');
						next.set('ai', function () {
							return 0;
						});
					} else {
						var count = 20 - cards.length;
						if (count > 0) {
							var xinCards = get.cards(count);
							event.cards.addArray(xinCards);
						}
						event._result = {
							control: 'cancel',
						};
						event.goto(3);
					}
					('step 2');
					if (result && result.control && result.control !== 'cancel') {
						lib.skill[event.name].audioPopup(player);
						var next = game.createEvent(event.name);
						next.player = player;
						next.setContent(lib.skill[event.name].show);
					}
					('step 3');
					var cards = event.cards || [];
					if (cards?.length) {
						player.storage.scqhJojo_qianggong = false;
						game.log(player, '对', trigger.target, '发动了', '#g【强攻】(' + cards.length + ')');
						player.popup('强攻');
						player.showCards(cards, get.translation(player));
						game.cardsGotoOrdering(cards);
						var count = 0;
						for (var card of cards) {
							if (card.suit === trigger.card.suit) {
								count++;
							}
						}
						var max = event.info.power;
						if (max && typeof max === 'number' && count > max) count = max;
						if (count > 0) {
							trigger.parent.effectCount += count;
							game.log(player, '使用的', trigger.card, '将额外结算', get.cnNumber(count), '次');
						}
					}
				},
				show() {
					'step 0';
					var cards = get.cards();
					game.cardsGotoOrdering(cards);
					if (!event.parent.cards) event.parent.cards = [];
					event.parent.cards.addArray(cards);
					event.str = get.translation(player.name) + '展示的牌';
					event.dialog = ui.create.dialog(event.str, cards);
					event.dialogid = lib.status.videoId++;
					event.dialog.videoId = event.dialogid;
					game.broadcast(
						function (str, cards, cards2, id) {
							var dialog = ui.create.dialog(str, cards);
							dialog.forcebutton = true;
							dialog.videoId = id;
						},
						event.str,
						cards,
						event.hiddencards,
						event.dialogid
					);
					game.addVideo('showCards', player, [event.str, get.cardsInfo(cards)]);
					('step 1');
					game.broadcast('closeDialog', event.dialogid);
					event.dialog.close();
					('step 2');
					if (player.storage.scqhJojo_qianggong) event.parent.goto(1);
				},
				_priority: 0,
			},
			_scqhJojo_zhuandui: {
				trigger: {
					target: 'useCardToTargeted',
				},
				filter(trigger, player) {
					if (!trigger.card || trigger.card.name != 'sha') return false;
					const stands = player.scqhJojo_getStand() || [];
					for (const stand of stands) {
						const info = player.scqhJojo_lookStatus(stand);
						const speed = info.speed;
						if (!speed || typeof speed != 'number' || speed <= 0) return false;
						const usable = info.usable;
						if (!usable || typeof usable != 'number' || usable <= 0) return false;
						return true;
					}
					return false;
				},
				check(trigger, player) {
					if (!player.hasSha()) return false;
					return get.effect(player, trigger.card, trigger.player, player) < 0;
				},
				logTarget(trigger, player) {
					return player == trigger.target ? trigger.player : trigger.target;
				},
				content: function () {
					'step 0';
					var target = lib.skill[event.name].logTarget(trigger, player);
					event.target = target;
					event.turn = player;
					event.start = true;
					event.shaReq = {};
					event.shaReq[player.playerid] = 1;
					event.shaReq[target.playerid] = 1;
					event.shaUsed = {};
					event.shaUsed[player.playerid] = 0;
					event.shaUsed[target.playerid] = 0;
					event.stand = {};
					event.stand[player.playerid] = {};
					event.stand[target.playerid] = {};
					var stand = trigger.card.scqhJojo_chooseStand;
					if (stand) {
						event.stand[target.playerid] = target.scqhJojo_lookStatus(stand);
						var speed = event.stand[target.playerid].speed;
						if (speed && typeof speed === 'number' && speed > 0) {
							event.shaUsed[target.playerid] = speed;
						}
					}
					var list = ['speed', 'usable'];
					player.scqhJojo_chooseStand(true, list);
					('step 1');
					if (result.bool) {
						var stand = result.links[0];
						event.myStand = stand;
						event.stand[player.playerid] = player.scqhJojo_lookStatus(stand);
						var speed = event.stand[player.playerid].speed;
						if (speed && typeof speed === 'number' && speed > 0) {
							event.shaUsed[player.playerid] = speed;
						}
					}
					var power1 = event.stand[player.playerid].power || 0;
					var power2 = event.stand[event.target.playerid].power || 0;
					if (power1 > power2) {
						event.shaReq[event.target.playerid] += power1 - power2;
					}
					if (power2 > power1) {
						event.shaReq[player.playerid] += power2 - power1;
					}
					('step 2');
					event.shaRequired = event.shaReq[event.turn.playerid];
					('step 3');
					if (event.shaUsed[event.turn.playerid] > 1) {
						var sha = { name: 'sha' };
						var next = event.turn.chooseToRespond(sha);
						if (event.shaRequired > 1) {
							next.set('prompt2', '共需打出' + event.shaRequired + '张【杀】');
						}
						next.set('ai', function (card) {
							let event = _status.event;
							let player = event.splayer;
							let target = event.starget;
							let source = event.source;
							let turn = event.turn;
							let basic = ['tao', 'jiu'];
							if (basic.includes(card.name)) return 0;
							if (turn.countCards('h', 'sha') <= source.countCards('h', 'sha')) return 0;
							if (player.hasSkillTag('notricksource') || target.hasSkillTag('notrick')) return 0;
							if (event.shaRequired > 1 && player.countCards('h', 'sha') < event.shaRequired) return 0;
							if (event.player === target) {
								if (_status.event.tdamage >= 0 || player.hasSkill('naman')) return -1;
								if (get.attitude(target, player) <= 0 || (event.player.hp <= 1 && _status.event.tdamage < _status.event.pdamage)) {
									return get.order(card);
								}
								return -1;
							} else {
								if (_status.event.pdamage >= 0 || target.hasSkill('naman')) return -1;
								if (get.attitude(player, target) <= 0 || (event.player.hp <= 1 && _status.event.tdamage > _status.event.pdamage)) {
									return get.order(card);
								}
								return -1;
							}
						});
						next.set('splayer', player);
						next.set('starget', event.target);
						next.set('pdamage', get.damageEffect(player, event.target, event.turn));
						next.set('tdamage', get.damageEffect(event.target, player, event.turn));
						next.set('shaRequired', event.shaRequired);
						next.autochoose = lib.filter.autoRespondSha;
						next.set('turn', event.turn);
						next.set('source', event.turn === event.target ? player : event.target);
					} else
						event._result = {
							bool: false,
						};
					('step 4');
					if (result.bool) {
						if (event.start) {
							event.start = false;
							var stand = event.myStand;
							if (stand) lib.skill._scqhJojo_tishen_usable.addUsable(player, stand);
						}
						event.shaRequired--;
						if (event.shaRequired > 0) {
							event.goto(3);
						} else {
							event.shaUsed[event.turn.playerid]--;
							if (event.turn === event.target) {
								event.turn = player;
							} else event.turn = event.target;
							event.goto(2);
						}
					} else {
						event.winner = event.turn === event.target ? player : event.target;
						event.winner.popup('赢');
						event.turn.popup('输');
						if (event.winner === player) {
							var effect = trigger.parent.effectCount;
							if (effect && typeof effect === 'number' && effect > 1) {
								trigger.parent.effectCount--;
								event.turn = player;
								event.goto(2);
							} else {
								trigger.parent.excluded.add(player);
								game.log(event.winner, '赢了');
							}
						}
					}
				},
				_priority: 0,
			},
			scqh_timeStopBlocker: {
				mod: {
					cardEnabled(card, player) {
						if (!_status.scqh_whoTime) return;
						if (!player.scqh_HasSkillTag('scqh_timeStop')) return false;
					},
					cardRespondable(card, player) {
						if (!_status.scqh_whoTime) return;
						if (!player.scqh_HasSkillTag('scqh_timeStop')) return false;
					},
					cardSavable(card, player) {
						if (!_status.scqh_whoTime) return;
						if (!player.scqh_HasSkillTag('scqh_timeStop')) return false;
					},
					cardUsableTarget(card, player, target) {
						if (!_status.scqh_whoTime) return;
						if (!player.scqh_HasSkillTag('scqh_timeStop')) return;
						if (target.scqh_HasSkillTag('scqh_timeStop')) return;
						if (player.inRange(target)) return true;
					},
					targetInRange(card, player, target) {
						if (!_status.scqh_whoTime) return;
						if (!player.scqh_HasSkillTag('scqh_timeStop')) return;
						if (target.scqh_HasSkillTag('scqh_timeStop')) return;
						if (player.inRange(target)) return true;
					},
					aiOrder(player, card, num) {
						if (!_status.scqh_whoTime) return;
						if (!player.scqh_HasSkillTag('scqh_timeStop')) return;
						var name = card.name;
						if (name == 'tao') return num + 7 + Math.pow(player.getDamagedHp(), 2);
						if (name == 'sha') return num + 6;
						if (get.subtype(card) == 'equip2') return num + get.value(card) / 3;
					},
				},
				charlotte: true,
				forced: true,
				trigger: {
					player: ['damageBefore', 'loseHpBefore'],
				},
				filter(trigger, player) {
					if (player.scqh_HasSkillTag('scqh_timeStop')) return false;
					if (!_status.scqh_whoTime) return false;
					return true;
				},
				content() {
					trigger.cancel();
					trigger.player.$scqh_timeStopDamage(trigger.num);
				},
			},
			scqh_timeStopBlocker2: {
				init(player, skill) {
					player.addSkillBlocker(skill);
				},
				onremove(player, skill) {
					player.removeSkillBlocker(skill);
				},
				skillBlocker(skill, player) {
					if (player.scqh_HasSkillTag('scqh_timeStop')) return false;
					return !lib.skill[skill].charlotte;
				},
				mark: true,
				marktext: '✖️',
				intro: {
					name: '静域',
					content(storage, player, skill) {
						var str = '';
						var skills = player.getSkills(null, false, false).filter(function (name) {
							return lib.skill[skill].skillBlocker(name, player);
						});
						if (!player.scqh_HasSkillTag('scqh_timeStop') && _status.scqh_whoTime) {
							str += '你不能使用或打出任何牌,期间你受到的伤害将在离开时间静止的世界时结算';
							if (skills.length) str += '<br/><br/>';
						}
						if (skills.length) str += '☆失效技能:' + get.translation(skills);
						return str;
					},
					onunmark(storage, player) { },
				},
			},
			scqhJojo_shijie: {
				audioname: ['scqhJojo_dio', 'scqhJojo_kongtiaochengtailang'],
				scqhJojoStatus: {
					power: 5,
					speed: 5,
					range: 3,
					usable: 5,
					accuracy: 4,
					growth: 4,
				},
				scqh_timeStop: true,
				init(player, skill) {
					player.scqh_InitShunfaji(skill);
				},
				onremove(player, skill) {
					var storage = player.storage.scqh_InitShunfaji || [];
					if (storage.includes(skill)) {
						player.storage.scqh_InitShunfaji.remove(skill);
					}
				},
				clickable(player) {
					player.scqh_UseShunfaji();
				},
				clickableFilter(player) {
					if (_status.scqh_whoTime) return false;
					if (player.hasSkill('scqhJojo_shijie_begin')) return false;
					if (player.hasSkill('scqhJojo_shijie_cd')) return false;
					return true;
				},
				clickableContent() {
					player.addSkill('scqhJojo_shijie_begin');
					player.scqh_timeStop();
				},
				group: ['scqhJojo_shijie_ai'],
				subSkill: {
					ai: {
						charlotte: true,
						forced: true,
						trigger: {
							global: ['phaseDrawAfter', 'phaseUseAfter'],
							player: 'damageEnd',
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let info = lib.skill.scqhJojo_shijie || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var skill = 'scqhJojo_shijie';
							var next = game.createEvent(skill);
							next.player = player;
							next.setContent(lib.skill[skill].clickableContent);
						},
					},
					begin: {
						charlotte: true,
						forced: true,
						trigger: {
							player: 'phaseUseBegin',
						},
						filter(trigger, player) {
							return trigger.parent.name == 'scqh_timeStop';
						},
						content() {
							game.broadcastAll(function (player) {
								var count = Math.max(1, player.maxHp);
								player.forceCountChoose = { phaseUse: count };
							}, player);
							player.addSkill('scqhJojo_shijie_end');
							player.addSkill('scqhJojo_shijie_useCard');
						},
					},
					end: {
						audioname: ['scqhJojo_dio', 'scqhJojo_kongtiaochengtailang'],
						charlotte: true,
						forced: true,
						trigger: {
							player: 'phaseUseEnd',
						},
						filter(trigger, player) {
							return trigger.parent.name == 'scqh_timeStop';
						},
						content() {
							game.broadcastAll(function (player) {
								delete player.forceCountChoose;
							}, player);
							player.removeSkill('scqhJojo_shijie_begin');
							player.removeSkill('scqhJojo_shijie_end');
							player.removeSkill('scqhJojo_shijie_useCard');
							player.addSkill('scqhJojo_shijie_cd');
						},
					},
					useCard: {
						audio: 'scqhJojo_kuanggu',
						charlotte: true,
						forced: true,
						trigger: {
							player: 'useCard',
						},
						filter(trigger, player) {
							if (!player.forceCountChoose || !player.forceCountChoose.phaseUse) return false;
							var evt = trigger.getParent('phaseUse');
							return evt && evt.parent && evt.parent.name == 'scqh_timeStop';
						},
						content() {
							player.draw();
							if (player.forceCountChoose.phaseUse == 1) {
								var evt = event.getParent('phaseUse');
								if (evt && evt.parent && evt.parent.name == 'scqh_timeStop') {
									evt.skipped = true;
								}
							} else
								game.broadcastAll(function (player) {
									player.forceCountChoose.phaseUse--;
								}, player);
						},
					},
					cd: {
						init(player) {
							lib.skill.scqhJojo_shijie_cd.used(player);
						},
						used(player) {
							if (player.countMark('scqhJojo_shijie_cd') >= 60) {
								player.removeSkill('scqhJojo_shijie_cd');
								return;
							}
							setTimeout(function () {
								player.addMark('scqhJojo_shijie_cd', 1, false);
								lib.skill.scqhJojo_shijie_cd.used(player, 'scqhJojo_shijie_cd');
							}, 1000);
						},
						mark: true,
						marktext: '世界',
						intro: {
							name: false,
							content: '冷却时间:#/60',
						},
						charlotte: true,
					},
				},
			},
			scqhJojo_kuanggu: {
				audio: 3,
				inherit: 'xinkuanggu',
			},
			scqhJojo_baijinzhixing: {
				audio: 3,
				scqhJojoStatus: {
					power: 5,
					speed: 5,
					range: 2,
					usable: 5,
					accuracy: 5,
					growth: 5,
				},
				scqh_timeStop: true,
				init(player, skill) {
					var info = lib.skill[skill] || {};
					if (info.clickable) player.scqh_InitShunfaji(skill);
				},
				onremove(player, skill) {
					var storage = player.storage.scqh_InitShunfaji || [];
					if (storage.includes(skill)) {
						player.storage.scqh_InitShunfaji.remove(skill);
					}
				},
				group: ['scqhJojo_baijinzhixing_respond', 'scqhJojo_baijinzhixing_juexing', 'scqhJojo_baijinzhixing_ai'],
				subSkill: {
					respond: {
						audio: 'scqhJojo_baijinzhixing',
						trigger: {
							player: 'chooseToRespondBegin',
						},
						filter(trigger, player) {
							if (trigger.responded) return false;
							if (!trigger.filterCard) return false;
							var list = ['sha', 'shan'];
							for (var name of list) {
								if (trigger.filterCard({ name: name }, player, trigger)) {
									if (lib.filter.cardRespondable({ name: name }, player, trigger)) {
										return true;
									}
								}
							}
							return false;
						},
						check(trigger, player) {
							return 1;
						},
						prompt2: '视为打出一张【杀】或【闪】',
						content() {
							'step 0';
							var listx = [];
							var list = ['sha', 'shan'];
							for (var name of list) {
								if (trigger.filterCard({ name: name }, player, trigger)) {
									if (lib.filter.cardRespondable({ name: name }, player, trigger)) {
										listx.add(name);
									}
								}
							}
							if (listx.length > 1) {
								var next = player.chooseControl(listx);
								next.set('ai', function () {
									return 0;
								});
							} else
								event._result = {
									control: listx[0],
								};
							('step 1');
							var name = result.control || 'sha';
							if (name) {
								trigger.untrigger();
								trigger.set('responded', true);
								trigger.result = {
									bool: true,
									card: {
										name: name,
									},
								};
							}
						},
						ai: {
							respondSha: true,
							respondShan: true,
							freeShan: true,
						},
						_priority: 0,
					},
					juexing: {
						audio: 'scqhJojo_baijinzhixing',
						forced: true,
						trigger: {
							player: 'dying',
						},
						filter(trigger, player) {
							var info = lib.skill.scqhJojo_baijinzhixing || {};
							if (info.clickable) return false;
							if (player.storage.scqhJojo_baijinzhixing) return false;
							return true;
						},
						content() {
							player.storage.scqhJojo_baijinzhixing = true;
							var count = 3 - player.hp;
							if (count > 0) player.recover(count);
							player.draw(3);
							player.addSkill('scqhJojo_shijie_ai');
							lib.skill.scqhJojo_baijinzhixing.clickable = lib.skill.scqhJojo_shijie.clickable;
							lib.skill.scqhJojo_baijinzhixing.clickableFilter = lib.skill.scqhJojo_shijie.clickableFilter;
							lib.skill.scqhJojo_baijinzhixing.clickableContent = lib.skill.scqhJojo_shijie.clickableContent;
							player.scqh_InitShunfaji('scqhJojo_baijinzhixing');
						},
						_priority: 0,
					},
					ai: {
						charlotte: true,
						forced: true,
						trigger: {
							global: ['phaseDrawAfter', 'phaseUseAfter'],
							player: 'damageEnd',
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let info = lib.skill.scqhJojo_baijinzhixing || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var skill = 'scqhJojo_baijinzhixing';
							var next = game.createEvent(skill);
							next.player = player;
							next.setContent(lib.skill[skill].clickableContent);
						},
					},
				},
				_priority: 0,
			},
			scqhJojo_shashouhuanghou: {
				scqhJojoStatus: {
					power: 5,
					speed: 4,
					range: 2,
					usable: 4,
					accuracy: 4,
					growth: 5,
				},
				mark: true,
				marktext: '第一炸弹',
				intro: {
					name: '第一炸弹',
					content(storage, player) {
						let skill = 'scqhJojo_shashouhuanghou';
						let map = lib.skill[skill].map(player);
						let prompt = '';
						if (map.cardPile && map.cardPile.length) {
							prompt += '牌堆:';
							prompt += get.translation(map.cardPile);
							prompt += '<br/>';
						}
						return prompt;
					},
					markcount() {
						return 0;
					},
					onunmark(storage, player) {
						player.storage.scqhJojo_shashouhuanghou = false;
					},
				},
				map(player, target) {
					let skill = 'scqhJojo_shashouhuanghou';
					let map = {};
					if (player) {
						let storage = player.storage[skill] || [];
						map.hs = player.getCards('hes', (card) => !storage.includes(card));
						map.cardPile = Array.from(ui.cardPile.childNodes).filter((card) => {
							return card[skill + player.playerid];
						});
						if (!map.hs.length) map.cannot = true;
					}
					map.prompt = {};
					let str = '令';
					str += target ? get.translation(target) : '获得此牌的角色';
					map.prompt.A = str;
					map.prompt.A += '受到两点无来源的火焰伤害';
					map.prompt.B = str;
					map.prompt.B += '弃置本次获得的牌与其装备区内的所有牌';
					return map;
				},
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					var skill = 'scqhJojo_shashouhuanghou';
					let map = lib.skill[skill].map(player);
					if (map.cannot) return false;
					return true;
				},
				chooseButton: {
					dialog(trigger, player) {
						let prompt = '是否发动【第一炸弹】？';
						prompt += '<br/>';
						prompt += '<br/>';
						let map = lib.skill.scqhJojo_shashouhuanghou.map(player);
						prompt += '形式A:引爆后,' + map.prompt.A;
						prompt += '<br/>';
						prompt += '形式B:引爆后,' + map.prompt.B;
						return ui.create.dialog(prompt);
					},
					chooseControl(trigger, player) {
						return ['引爆形式A', '引爆形式B'];
					},
					check(trigger, player) {
						return 1;
					},
					backup(result, player) {
						var bool = {
							zhadan: result.control,
							log: false,
							popup: false,
							position: 'hes',
							filterCard(card, player) {
								let storage = player.storage.scqhJojo_shashouhuanghou || [];
								if (storage.includes(card)) return false;
								return true;
							},
							check(card) {
								let player = _status.event.player;
								let value = get.value(card, player);
								return 9 - value;
							},
							content() {
								var skill = 'scqhJojo_shashouhuanghou';
								var card = cards[0];
								card[skill + player.playerid] = lib.skill[skill + '_backup'].zhadan;
								var ip = get.position(card, true);
								if (ip == 'o' || ip == 'd') {
									var number = card.number || 1;
									var cards2 = get.cards(number);
									cards2.addArray(cards);
									cards2.reverse();
									game.cardsGotoPile(cards2, 'insert');
									game.log(player, '将', cards, '置于了牌堆顶');
								}
							},
							ai: {
								result: {
									player: 1,
								},
							},
						};
						return bool;
					},
					prompt(result, player) {
						let prompt = '将一张牌当做【炸弹】置于牌堆顶的第Ｘ张牌下(Ｘ为此牌的点数)';
						prompt += '<br/>';
						prompt += '<br/>(';
						let map = lib.skill.scqhJojo_shashouhuanghou.map(player);
						if (result.control.includes('A')) {
							let map = lib.skill.scqhJojo_shashouhuanghou.map(player);
							prompt += '形式A:引爆后,' + map.prompt.A;
						} else {
							prompt += '形式B:引爆后,' + map.prompt.B;
						}
						prompt += ')';
						return prompt;
					},
				},
				ai: {
					fireAttack: true,
					order: 7,
					result: {
						player: 1,
					},
				},
				group: ['scqhJojo_shashouhuanghou_gain'],
				subSkill: {
					gain: {
						name: '第一炸弹',
						trigger: {
							global: 'gainAfter',
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let skill = 'scqhJojo_shashouhuanghou' + player.playerid;
							let cards = trigger.getg(trigger.player).filter((card) => card[skill]);
							if (!cards || !cards.length) return false;
							let info = {};
							for (let card of cards) {
								let info2 = info[card[skill]] || [];
								info2.add(card);
								info[card[skill]] = info2;
							}
							trigger[skill] = info;
							return true;
						},
						logTarget: 'player',
						check(trigger, player) {
							return get.attitude(player, trigger.player) <= 0;
						},
						prompt2(trigger, player) {
							let skill = 'scqhJojo_shashouhuanghou' + player.playerid;
							let info = trigger[skill];
							let prompt = '你可以引爆:';
							for (let type in info) {
								prompt += '</br>——';
								prompt += get.translation(info[type]) || '';
								let map = lib.skill.scqhJojo_shashouhuanghou.map(player, trigger.player);
								prompt += ',';
								if (type.includes('A')) prompt += map.prompt.A;
								if (type.includes('B')) prompt += map.prompt.B;
							}
							return prompt;
						},
						content() {
							var skill = 'scqhJojo_shashouhuanghou' + player.playerid;
							var info = trigger[skill];
							for (let type in info) {
								let cards = info[type];
								for (let card of cards) card[skill] = false;
								if (type.includes('A')) {
									trigger.player.damage(2, 'fire', 'nosource');
								} else {
									let cards2 = trigger.getg(trigger.player);
									let es = trigger.player.getCards('e');
									if (es.length) cards2.addArray(es);
									if (cards2.length) trigger.player.discard(cards2);
								}
							}
						},
					},
				},
				_priority: 0,
			},
			scqhJojo_kuweichuanxin: {
				enable: 'phaseUse',
				filter(trigger, player) {
					if (!player.countCards('hes')) return false;
					return true;
				},
				filterCard(card, player) {
					return true;
				},
				position: 'hes',
				check(card) {
					return 6 - get.value(card);
				},
				filterTarget(card, player, target) {
					return target != player && target.canAddJudge(card);
				},
				selectTarget: 1,
				viewAs: {
					name: 'shandian',
				},
				prompt: '将一张牌当做【闪电】对一名其他角色使用',
				precontent() {
					player.removeSkill('scqhJojo_kuweichuanxin');
					player.addSkill('scqhJojo_kuweichuanxin_niepan');
				},
				subSkill: {
					niepan: {
						charlotte: true,
						forced: true,
						trigger: {
							player: 'addJudgeBefore',
						},
						filter(trigger, player) {
							return trigger.card && trigger.card.name === 'shandian';
						},
						content() {
							trigger.cancel();
							var owner = get.owner(trigger.card);
							if (owner && owner.getCards('hej').includes(trigger.card)) owner.lose(trigger.card, ui.discardPile);
							else game.cardsDiscard(trigger.card);
							game.log(trigger.card, '进入了弃牌堆');
							player.addSkill('scqhJojo_kuweichuanxin');
							player.removeSkill(event.name);
							player.draw();
						},
						_priority: 0,
					},
				},
				_priority: 0,
			},
			scqhJojo_shashouhuanghou_juexing: {
				forced: true,
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(trigger, player) {
					var cp = _status.currentPhase;
					if (player.countCards('h')) return false;
					var evt = trigger.getl(player);
					return evt && evt.player == player && evt.hs && evt.hs.length;
				},
				content() {
					'step 0';
					player.awakenSkill(event.name);
					('step 1');
					player.link(false);
					('step 2');
					player.turnOver(false);
					('step 3');
					player.recover(player.maxHp - player.hp);
					('step 4');
					player.drawTo(Math.min(5, player.maxHp));
					('step 5');
					if (lib.skill.scqhJojo_baijinzhixing.scqh_Shunfaji) return false;
					var name = 'scqhJojo_baijinzhixing';
					var world = 'scqhJojo_shijie';
					lib.skill[name].scqh_Shunfaji = '世界';
					lib.skill[name].init = lib.skill[world].init;
					lib.skill[name].clickable = lib.skill[world].clickable;
					lib.skill[name].clickableFilter = lib.skill[world].clickableFilter;
					lib.skill[name].group.addArray(lib.skill[world].group);
					player.removeSkill(name);
					player.addSkill(name);
				},
				ai: {
					threaten: 0.8,
					effect: {
						target(card) {
							if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
						},
					},
					noh: true,
					skillTagFilter: function (player, tag) {
						if (tag == 'noh') {
							if (player.countCards('h') != 1) return false;
						}
					},
				},
			},
			scqhJojo_baizheshichen: {},
		},
		translate: {
			scqh_timeStopBlocker: '静域',
			scqhJojo_tishen: '替身',
			_scqhJojo_tishen: '替身',
			_scqhJojo_qianggong: '强攻',
			_scqhJojo_qianggong_info: '当你使用【杀】选择一名距离在替身射程内的角色为唯一目标后,你可以在Ｓ秒内连续点击【确定】(Ｓ为替身的面板速度);每点击一次,则亮出牌堆顶的一张牌,若与【杀】的花色相同,则令【杀】额外结算一次(至多Ｐ次,Ｐ为替身的面板力量).',
			_scqhJojo_zhuandui: '专对',
			_scqhJojo_zhuandui_info: ['当你成为【杀】的目标后,可以由你开始,你与使用【杀】的角色轮流打出一张【杀】,直到一方未打出足够数量的【杀】为止;若其未打出【杀】,且此牌的结算次数:●等于１,则对你无效;●大于１,此牌的结算次数减１,并且你可以重复此流程.', '<br/>▶每名角色在此期间最多响应Ｓ次;Ｓ为其替身的面板速度', '<br/>▶替身的面板力量较低的一方每次需要额外打出Ｐ张【杀】;Ｐ为双方替身的面板力量之差'].join(''),
			scqhJojo_shijie: '世界',
			scqhJojo_shijie_info: ['替身,时停对策,瞬发技,每分钟限一次,你可以开启时间静止的领域,此期间你有Ｘ(你的体力上限)秒主动出牌时间,且每使用一张牌,则摸一张牌、主动出牌时间减少１秒.', '★力量Ａ', '★速度Ａ', '★射程Ｃ', '★耐力Ａ', '★精密性Ｂ', '★成长性Ｂ'].join('</br>'),
			scqhJojo_kuanggu: '狂骨',
			scqhJojo_kuanggu_info: '当你对距离１以内的一名角色造成１点伤害后,你可以回复１点体力或摸１张牌.',
			scqhJojo_baijinzhixing: '白金之星',
			scqhJojo_baijinzhixing_info: ['替身,时停对策,当你需要打出一张【杀】或【闪】时,你可以视为打出之.', '★破坏性Ａ', '★速度Ａ', '★射程Ｄ', '★持久性Ａ', '★精密性Ａ', '★成长性Ａ', '●觉醒:当你进入濒死状态时,你回复体力至三点,摸三张牌,获得<白金之星·scqhJojo_shijie※>.'].join('</br>'),
			scqhJojo_shashouhuanghou: '杀手皇后',
			scqhJojo_shashouhuanghou_info: ['替身.出牌阶段限一次,你可以选择一种引爆形式并将一张未引爆过的牌置于牌堆顶的第Ｘ张牌下(Ｘ为此牌的点数),当一名其他角色获得此牌后,若你未引爆过此牌,则你可以引爆之.', '</br>◆引爆形式Ａ:令获得此牌的角色受到两点无来源的火焰伤害', '◆引爆形式Ｂ:令获得此牌的角色弃置本次获得的牌与其装备区内的所有牌', '</br>★破坏性Ａ', '★速度Ｂ', '★射程Ｄ', '★持久性Ｂ', '★精密性Ｂ', '★成长性Ａ'].join('</br>'),
			scqhJojo_kuweichuanxin: '枯萎穿心',
			scqhJojo_kuweichuanxin_info: ['出牌阶段,你可以将一张牌当做【闪电】对一名角色使用并失去此技能.若如此做,当一张【闪电】进入你的判定区时,你回复此技能并取消之,摸一张牌.'].join('</br>'),
			scqhJojo_baizheshichen: '败者食尘',
			scqhJojo_baizheshichen_info: ['昂扬技,当你于回合外失去最后的手牌时,你可以令一名其他角色观看你的手牌,你复原武将牌,体力回复至体力上限,手牌摸至体力上限(至多为五).', '★昂扬:当你...', '▶出牌阶段,若场上没有【枯萎穿心攻击】,则你可以将一张牌当做【枯萎穿心攻击】置入距离为１的一名其他角色的判定区.其他角色的判定阶段,其进行判定:若结果为♠️️２～９,则你对其造成３点雷电伤害,否则将此牌移动到其下家的判定区内(跳过你).', '【觉醒】', '▶当你于回合外失去最后的手牌时,若你的体力值小于已损失的体力值,你获得特殊能力〖败者食尘〗.'].join('</br>'),
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

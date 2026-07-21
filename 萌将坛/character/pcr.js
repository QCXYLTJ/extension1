'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			_scqhPcr_mode: {
				charlotte: true,
				silent: true,
				forced: true,
				trigger: {
					source: 'dieEnd',
					player: ['phaseEnd', 'useCard1', 'respond', 'damageEnd', 'loseHpEnd'],
				},
				filter(trigger, player) {
					let skills = player.getSkills().filter(function (skill) {
						var info = get.info(skill);
						return info && info.scqh_UB;
					});
					return skills.length;
				},
				content() {
					var count = 90;
					var name = event.triggername;
					var list = [];
					list.add('damage');
					list.add('loseHp');
					if (list.includes(trigger.name)) {
						count = (trigger.num / player.maxHp) * 500;
					} else if (trigger.name == 'die') {
						count = 200;
					}
					if (player.hasSkill('scqhPcr_mode2')) {
						var list = ['useCard', 'respond'];
						if (list.includes(trigger.name)) count = -100;
					}
					player.scqh_changeStatus('tp', count);
				},
			},
			scqhPcr_mode2: {
				charlotte: true,
				silent: true,
				forced: true,
				trigger: {
					player: 'scqh_changeStatusAfter',
				},
				filter(trigger, player) {
					return !player.scqh_LookStatus().tp;
				},
				content() {
					player.removeSkill(event.name);
				},
			},
			scqhPcr_mihun: {
				audio: 4,
				init(player, skill) {
					player.scqh_InitShunfaji(skill);
					player.scqh_InitStatus();
				},
				onremove(player, skill) {
					var storage = player.storage.scqh_InitShunfaji || [];
					if (storage.includes(skill)) {
						player.storage.scqh_InitShunfaji.remove(skill);
					}
				},
				scqh_UB: true,
				forced: true,
				clickable(player) {
					player.scqh_UseShunfaji();
				},
				clickableFilter(player) {
					var players = game.filterPlayer((target) => {
						return target !== player && !target._trueMe;
					});
					if (!players.length) return false;
					if (player.hasSkill('scqhPcr_mode2')) return false;
					return player.scqh_LookStatus().tp >= 1000;
				},
				clickableContent() {
					'step 0';
					var next = player.chooseTarget(function (card, player, target) {
						return target !== player && !target._trueMe;
					});
					next.set('prompt', '请选择【' + get.translation(event.name) + '】的目标');
					next.set('prompt2', get.translation(event.name + '_info'));
					next.set('ai', function (target) {
						let player = _status.event.player;
						let att = get.attitude(player, target);
						return -att;
					});
					('step 1');
					var targets = result?.targets || [];
					if (targets.length) {
						player.scqh_changeStatus('tp', -1000);
						player.scqh_ubAnimation(event.name);
						var target = targets[0];
						target.phase('scqhPcr_mihun_' + player.playerid);
					}
				},
				group: ['scqhPcr_mihun_ai', 'scqhPcr_mihun_kongzhi1'],
				subSkill: {
					ai: {
						forced: true,
						trigger: {
							global: ['useCardAfter', 'phaseUseAfter'],
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let info = lib.skill.scqhPcr_mihun || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var next = game.createEvent('scqhPcr_mihun');
							next.player = player;
							next.setContent(lib.skill.scqhPcr_mihun.clickableContent);
						},
					},
					kongzhi1: {
						forceDie: true,
						forced: true,
						trigger: {
							global: 'phaseBeginStart',
						},
						filter(trigger, player) {
							if (trigger.player._trueMe) return false;
							if (player === trigger.player) return false;
							const storage = trigger.skill || false;
							return storage === 'scqhPcr_mihun_' + player.playerid;
						},
						content() {
							const target = trigger.player;
							target._trueMe = player;
							game.addGlobalSkill('autoswap');
							if (target === game.me) {
								game.notMe = true;
								if (!_status.auto) ui.click.auto();
							}
							target.addSkill('scqhPcr_mihun_kongzhi2');
							target.markAuto('scqhPcr_mihun_kongzhi2', [player]);
						},
					},
					kongzhi2: {
						mark: true,
						marktext: '迷魂',
						intro: {
							content: '被$控制',
							markcount: () => 0,
						},
						mod: {
							playerEnabled(card, player, target) {
								const storage = player.storage['scqhPcr_mihun_kongzhi2'] || [];
								if (storage.includes(target)) return false;
							},
						},
						lastDo: true,
						charlotte: true,
						forceDie: true,
						forced: true,
						silent: true,
						popup: false,
						trigger: {
							player: ['phaseAfter', 'dieAfter'],
							global: 'phaseBeforeStart',
						},
						content() {
							player.removeSkill(event.name);
						},
						onremove(player, skill) {
							if (player == game.me) {
								if (!game.notMe) game.swapPlayerAuto(player._trueMe);
								else delete game.notMe;
								if (_status.auto) ui.click.auto();
							}
							delete player._trueMe;
						},
						_priority: 1,
					},
				},
			},
			scqhPcr_xuanmu: {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				vcards(trigger, player) {
					const vcards = [];
					if (!trigger || !trigger.filterCard) return [];
					for (const name of lib.inpile) {
						const type = get.type(name);
						const card = { name: name };
						if (type === 'trick' && trigger.filterCard(card, player, trigger)) {
							vcards.add(name);
						}
					}
					return vcards;
				},
				filter(trigger, player) {
					if (ui.cardPile.childElementCount <= 0) return false;
					const vcards = lib.skill.scqhPcr_xuanmu.vcards(trigger, player);
					return vcards.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						const vcards = lib.skill.scqhPcr_xuanmu.vcards(trigger, player);
						return ui.create.dialog('眩目', [vcards, 'vcard']);
					},
					filter(button, player) {
						const evt = _status.event.parent;
						return evt.filterCard({ name: button.link[2], nature: button.link[3] }, player, evt);
					},
					check(button) {
						const player = _status.event.player;
						const card = { name: button.link[2], nature: button.link[3] };
						return player.getUseValue(card);
					},
					backup(links, player) {
						return {
							filterCard() {
								return false;
							},
							selectCard: -1,
							ignoreMod: true,
							aiUse: Math.random(),
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
								suit: 'none',
								number: null,
							},
							ai1(card) {
								return 1;
							},
							async precontent(event, trigger, player) {
								const [card] = get.cards();
								event.result.cards = [card];
								event.result.card.cards = [card];
								event.result.card.suit = card.suit;
								event.result.card.number = card.number;
							},
						};
					},
					prompt(links, player) {
						return '扣置牌堆顶的一张牌当做' + get.translation(links[0][2]) + '使用';
					},
				},
				ai: {
					threaten: 1.2,
					order: 8.1,
					result: {
						player: 1,
					},
				},
				group: ['scqhPcr_xuanmu_guess'],
				subSkill: {
					guess: {
						popup: false,
						log: false,
						firstDo: true,
						forced: true,
						trigger: {
							player: 'useCardBefore',
						},
						filter(trigger, player) {
							return trigger.skill && trigger.skill.indexOf('scqhPcr_xuanmu_') === 0;
						},
						content: async function (event, trigger, player) {
							event.fake = false;
							const chooser = {
								qiquan: [],
								dui: [],
								cuo: [],
							};
							const card = trigger.cards[0];
							player.popup(trigger.card.name, 'metal');
							let prompt = get.translation(player);
							prompt += '声明';
							if (trigger.targets && trigger.targets.length) {
								prompt += '对';
								prompt += get.translation(trigger.targets);
							}
							prompt += '使用一张【';
							prompt += get.translation(trigger.card.name);
							prompt += '】,是否猜测花色？';
							const targets = game
								.filterPlayer(function (current) {
									return current != player;
								})
								.sortBySeat(_status.currentPhase);
							if (!targets.length) return;
							for (const target of targets) {
								const button = await target
									.chooseControl(lib.suit, 'cancel')
									.set('prompt', prompt)
									.set('ai', function () {
										const suit = _status.event.suit || '';
										return suit;
									})
									.set('suit', lib.suit.randomGet())
									.forResult();
								const suit = button.control || 'cancel';
								if (suit !== 'cancel') {
									game.log(target, suit);
									target.popup(suit);
									if (card.suit === suit) {
										chooser.dui.add(target);
									} else chooser.cuo.add(target);
								}
							}
							await player.showCards(trigger.cards);
							for (const target of chooser.dui) {
								game.log(target, '猜对了');
								target.popup('正确');
								await target.draw();
							}
							for (const target of chooser.cuo) {
								game.log(target, '猜错了');
								target.popup('错误');
								target.addTempSkill('scqhPcr_xuanmu_nouse', { player: 'phaseEnd' });
							}
						},
						_priority: 1,
					},
					nouse: {
						charlotte: true,
						mark: true,
						marktext: '禁',
						intro: {
							markcount: () => 0,
							content() {
								return '不能使用基本牌';
							},
						},
						mod: {
							cardEnabled(card, player) {
								const type = get.type(card);
								if (type === 'basic') return false;
							},
							cardSavable(card, player) {
								const type = get.type(card);
								if (type === 'basic') return false;
							},
						},
					},
				},
			},
			scqhPcr_qiaozhuang: {
				audio: 2,
				popup: false,
				log: false,
				trigger: {
					target: 'useCardToTargeted',
				},
				filter(trigger, player) {
					if (!player.countCards('he', { type: 'equip' })) return false;
					if (trigger.card.name !== 'sha' && get.type(trigger.card) !== 'trick') return false;
					return trigger.player !== player;
				},
				cost: async function (event, trigger, player) {
					const skillname = 'scqhPcr_qiaozhuang';
					event.result = await player
						.chooseToDiscard('he', get.prompt2(skillname), function (card, player) {
							return get.type(card) == 'equip';
						})
						.set('eff', get.effect(trigger.target, trigger.card, trigger.player, player))
						.set('ai', function (card) {
							const player = _status.event.player;
							const eff = _status.event.eff;
							if (eff <= 0) return 9 - get.value(card);
							return 0;
						})
						.forResult();
				},
				content: async function (event, trigger, player) {
					await player.draw(2);
					if (player.canCompare(trigger.player)) {
						const compare = await player.chooseToCompare(trigger.player).forResult();
						const bool = compare.tie || compare.bool ? true : false;
						if (bool === true) {
							player.chat('看来是我更大一点～');
							trigger.parent.excluded.add(player);
							game.log(trigger.card, '对', player, '无效');
						}
						game.trySkillAudio(event.name + '_' + bool, player, true);
					}
				},
				subSkill: {
					true: {
						audio: 1,
					},
					false: {
						audio: 1,
					},
				},
			},
			scqhPcr_rimian: {
				audio: 3,
				init(player, skill) {
					player.scqh_InitShunfaji(skill);
					player.scqh_InitStatus();
				},
				onremove(player, skill) {
					var storage = player.storage.scqh_InitShunfaji || [];
					if (storage.includes(skill)) {
						player.storage.scqh_InitShunfaji.remove(skill);
					}
				},
				scqh_UB: true,
				clickable(player) {
					player.scqh_UseShunfaji();
				},
				clickableFilter(player) {
					var players = game.filterPlayer((target) => {
						var card = {
							name: 'wanjian',
						};
						return player.canUse(card, target, false);
					});
					if (!players.length) return false;
					if (player.hasSkill('scqhPcr_mode2')) return false;
					return player.scqh_LookStatus().tp >= 1000;
				},
				clickableContent() {
					'step 0';
					player.scqh_changeStatus('tp', -1000);
					player.scqh_ubAnimation(event.name);
					('step 1');
					var card = {
						name: 'wanjian',
						scqhPcr_rimian: true,
					};
					var players = game.filterPlayer((target) => {
						var card = {
							name: 'wanjian',
						};
						return player.canUse(card, target, false);
					});
					var next = player.useCard(card, players, false);
					next.audio = false;
					game.trySkillAudio('scqhPcr_rimian_use', player, true);
				},
				group: ['scqhPcr_rimian_ai', 'scqhPcr_rimian_respond'],
				subSkill: {
					use: {
						audio: 2,
					},
					ai: {
						forced: true,
						trigger: {
							global: ['useCardAfter', 'phaseUseAfter'],
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let info = lib.skill.scqhPcr_rimian || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var next = game.createEvent('scqhPcr_rimian');
							next.player = player;
							next.setContent(lib.skill.scqhPcr_rimian.clickableContent);
						},
					},
					respond: {
						forced: true,
						trigger: {
							global: 'respond',
						},
						filter(trigger, player) {
							var evt = trigger.getParent(2);
							if (!evt || evt.name !== 'wanjian') return false;
							var evtx = evt.parent;
							if (!evtx || evtx.player !== player) return false;
							return evtx.card && evtx.card.scqhPcr_rimian;
						},
						content() {
							player.draw();
						},
					},
				},
			},
			scqhPcr_huixin: {
				audio: 2,
				trigger: {
					player: 'useCard',
				},
				usable: 1,
				filter(trigger, player) {
					const targets = trigger.targets || [];
					if (targets.length <= 1) return false;
					const list = ['basic', 'trick'];
					if (!list.includes(get.type(trigger.card))) return false;
					if (!player.countCards('he')) return false;
					return true;
				},
				async cost(event, trigger, player) {
					const players = trigger.targets || [];
					const effs = players.filter((target) => {
						const eff = get.effect(target, trigger.card, player, player);
						return eff < 0;
					});
					event.result = await player
						.chooseCardTarget({
							filterCard(card, player, event) {
								event = event || _status.event;
								if (typeof event != 'string') event = event.parent.name;
								const mod = game.checkMod(card, player, event, 'unchanged', 'cardDiscardable', player);
								if (mod != 'unchanged') return mod;
								return true;
							},
							position: 'he',
							filterTarget(card, player, target) {
								const players = _status.event.players;
								return players.includes(target);
							},
							complexSelect: true,
							selectCard: [1, players.length - 1],
							selectTarget() {
								const uic = ui.selected.cards || [];
								if (uic.length) return uic.length;
								return [1, 1];
							},
							prompt: get.prompt('scqhPcr_huixin'),
							prompt2: '弃置任意张牌并将等量的角色移出目标',
							players: players,
							effs: effs,
							ai1(card) {
								const uic = ui.selected.cards || [];
								const effs = _status.event.effs;
								if (uic.length === effs.length) return 0;
								const val = get.value(card);
								return 7 - val;
							},
							ai2(target) {
								const effs = _status.event.effs;
								return effs.includes(target);
							},
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const cards = event.cards || [];
					const targets = event.targets || [];
					await player.discard(cards);
					trigger.targets.removeArray(targets);
					game.log(player, '将', targets, '移出了', trigger.card, '的目标');
					player.addExpose(0.2);
					const num = cards.length || targets.length;
					if (num > 0) {
						trigger.effectCount += num;
						game.log(trigger.card, '额外结算', num, '次');
					}
				},
			},
			scqhPcr_wencai: {
				audio: 3,
				intro: {
					name: '成语天才',
					content: '$',
				},
				enable: 'chooseToUse',
				vcards(trigger, player) {
					const vcards = [];
					const storage = player.storage.scqhPcr_wencai || [];
					const hs = player.getCards('hes', function (card) {
						const str = get.translation(card.name);
						return str && typeof str === 'string' && str.length === 4;
					});
					if (!storage.length || !hs.length) return [];
					for (const name of storage) {
						if (trigger && trigger.filterCard) {
							const card = {
								name: name,
							};
							if (!trigger.filterCard(card, player, trigger)) continue;
						}
						vcards.add(name);
					}
					return vcards;
				},
				hiddenCard(player, name) {
					const vcards = lib.skill.scqhPcr_wencai.vcards(false, player);
					return vcards.includes(name);
				},
				filter(trigger, player) {
					const vcards = lib.skill.scqhPcr_wencai.vcards(trigger, player);
					return vcards.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						const vcards = lib.skill.scqhPcr_wencai.vcards(trigger, player);
						const dialog = ui.create.dialog('成语天才', 'hidden');
						dialog.add([vcards, 'vcard']);
						dialog.direct = true;
						return dialog;
					},
					check(button) {
						const type = _status.event.parent.type;
						if (type !== 'phase') return 1;
						const player = _status.event.player;
						const value = player.getUseValue({
							name: button.link[2],
							nature: button.link[3],
						});
						return value;
					},
					backup(links, player) {
						const info = {
							popname: true,
							audio: 'scqhPcr_wencai',
							position: 'hes',
							filterCard(card, player) {
								const str = get.translation(card.name);
								return str && typeof str === 'string' && str.length === 4;
							},
							selectCard() {
								return 1;
							},
							check(card) {
								return 8 - get.value(card);
							},
							viewAs: {
								name: links[0][2],
							},
							precontent() {
								const name = event.result.card.name;
								player.unmarkAuto('scqhPcr_wencai', [name]);
							},
						};
						return info;
					},
					prompt(links, player) {
						let str = '将一张牌当做【';
						str += get.translation(links[0][2]) || '';
						str += '】使用';
						return str;
					},
				},
				ai: {
					save: true,
					skillTagFilter(player) {
						return;
					},
					order: 1,
					result: {
						player(player) {
							return 1;
						},
					},
				},
				group: ['scqhPcr_wencai_mark'],
				subSkill: {
					backup: {},
					mark: {
						audio: 4,
						forced: true,
						trigger: {
							global: 'useCard',
						},
						filter(trigger, player) {
							if (get.type2(trigger.card) !== 'trick') return false;
							if (trigger.player === player) return false;
							var str = get.translation(trigger.card.name);
							return str && typeof str === 'string' && str.length === 4;
						},
						content() {
							player.markAuto('scqhPcr_wencai', [trigger.card.name]);
							player.draw();
						},
					},
				},
			},
			scqhPcr_wuzhan: {
				audio: 4,
				init(player, skill) {
					player.scqh_InitShunfaji(skill);
					player.scqh_InitStatus();
				},
				onremove(player, skill) {
					var storage = player.storage.scqh_InitShunfaji || [];
					if (storage.includes(skill)) {
						player.storage.scqh_InitShunfaji.remove(skill);
					}
				},
				scqh_UB: true,
				forced: true,
				clickable(player) {
					player.scqh_UseShunfaji();
				},
				clickableFilter(player) {
					var players = game.filterPlayer((target) => {
						var card = {
							name: 'sha',
							nature: 'ice',
						};
						if (!player.canUse(card, target, false)) return false;
						return player.scqh_inCurrentTarget(target);
					});
					if (!players.length) return false;
					if (player.hasSkill('scqhPcr_mode2')) return false;
					return player.scqh_LookStatus().tp >= 1000;
				},
				clickableContent() {
					'step 0';
					var next = player.chooseTarget(function (card, player, target) {
						var card = {
							name: 'sha',
							nature: 'ice',
						};
						if (!player.canUse(card, target, false)) return false;
						return player.scqh_inCurrentTarget(target);
					});
					next.set('prompt', '请选择【舞斩】的目标');
					next.set('prompt2', get.translation(event.name + '_info'));
					next.set('ai', function (target) {
						let player = _status.event.player;
						let att = get.attitude(player, target);
						return -att;
					});
					('step 1');
					var targets = result?.targets || [];
					if (targets.length) {
						player.addSkill('scqhPcr_mode2');
						player.tempBanSkill('scqhPcr_eryu', { player: 'scqhPcr_mode2After' });
						player.scqh_ubAnimation(event.name);
						event.targets = targets;
						var card = {
							name: 'sha',
							nature: 'ice',
						};
						var next = player.useCard(card, targets, false);
						next.audio = false;
					} else event.finish();
				},
				group: ['scqhPcr_wuzhan_ai'],
				subSkill: {
					ai: {
						forced: true,
						trigger: {
							global: ['useCardAfter', 'phaseUseAfter'],
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let info = lib.skill.scqhPcr_wuzhan || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var next = game.createEvent('scqhPcr_wuzhan');
							next.player = player;
							next.setContent(lib.skill.scqhPcr_wuzhan.clickableContent);
						},
					},
				},
			},
			scqhPcr_tabing: {
				audio: 2,
				enable: ['chooseToUse', 'chooseToRespond'],
				prompt: '将♠️️牌当做冰【杀】、♣️️牌当做冰【闪】使用或打出',
				viewAs(cards, player) {
					var name;
					var suit = cards[0].suit;
					switch (suit) {
						case 'club': {
							name = 'shan';
							break;
						}
						case 'spade': {
							name = 'sha';
							break;
						}
					}
					if (name)
						return {
							name: name,
							nature: 'ice',
						};
					return null;
				},
				check(card) {
					var player = _status.event.player;
					var value = get.value(card, player);
					return 7 - value;
				},
				position: 'hes',
				filterCard(card, player, event) {
					event = event || _status.event;
					var filter = event._backup.filterCard;
					var name = card.suit;
					if (name == 'club' && filter({ name: 'shan', nature: 'ice', cards: [card] }, player, event)) return true;
					if (name == 'spade' && filter({ name: 'sha', nature: 'ice', cards: [card] }, player, event)) return true;
					return false;
				},
				filter(trigger, player) {
					var filter = trigger.filterCard;
					if (filter({ name: 'shan', nature: 'ice' }, player, trigger) && player.countCards('hes', { suit: 'club' })) return true;
					if (filter({ name: 'sha', nature: 'ice' }, player, trigger) && player.countCards('hes', { suit: 'spade' })) return true;
					return false;
				},
				ai: {
					respondSha: true,
					respondShan: true,
					order(item, player) {
						return 2;
					},
				},
				group: ['scqhPcr_tabing_chongzhen'],
				subSkill: {
					chongzhen: {
						trigger: {
							player: ['useCard', 'respond'],
						},
						logTarget(trigger, player) {
							var current = [];
							if (trigger.name == 'respond') {
								if (trigger.source) current.add(trigger.source);
							} else if (trigger.card.name == 'shan') {
								if (trigger.respondTo && trigger.respondTo[0]) {
									current.add(trigger.respondTo[0]);
								}
							} else {
								var targets = trigger.targets || [];
								if (targets.length) current.addArray(targets);
							}
							return current.filter((target) => {
								if (target == player) return false;
								return target.countDiscardableCards(player, 'he');
							});
						},
						filter(trigger, player) {
							var targets = lib.skill.scqhPcr_tabing_chongzhen.logTarget(trigger, player);
							if (!targets.length) return false;
							return game.hasNature(trigger.card, 'ice');
						},
						check(trigger, player) {
							var targets = lib.skill.scqhPcr_tabing_chongzhen.logTarget(trigger, player);
							for (var target of targets) {
								var att = get.attitude(player, target);
								if (att < 0) return 1;
							}
							return 0;
						},
						content() {
							if (trigger.skill && trigger.skill.indexOf('scqhPcr_tabing') == 0) {
							} else game.trySkillAudio('scqhPcr_tabing', player, true);
							var targets = lib.skill.scqhPcr_tabing_chongzhen.logTarget(trigger, player);
							for (var target of targets) {
								player.discardPlayerCard('he', target, true);
							}
						},
					},
				},
			},
			scqhPcr_juebing: {
				audio: 2,
				derivation: ['scqh_huhan'],
				forced: true,
				trigger: {
					player: 'phaseZhunbei',
				},
				content() {
					'step 0';
					var card = {
						name: 'scqh_huhan',
					};
					player.chooseUseTarget('###是否发动【绝冰】？###视为使用一张【沍寒】', card, false, 'nodistance');
					('step 1');
					if (result.bool) {
						var skillname = 'scqhPcr_juebing';
						var num = Math.min(4, 10 - player.countMark(skillname));
						if (num > 0) player.addMark(skillname, num, false);
					}
				},
				marktext: '❄️',
				intro: {
					content: '#',
				},
				group: ['scqhPcr_juebing_use'],
				subSkill: {
					use: {
						audio: 'scqhPcr_juebing',
						trigger: {
							player: ['useCard1', 'respond'],
						},
						filter(trigger, player) {
							if (!player.countMark('scqhPcr_juebing')) return false;
							if (!ui.land || ui.land.name !== 'scqh_huhan') return false;
							const type = get.type(trigger.card);
							return type === 'trick' || type === 'basic';
						},
						async cost(event, trigger, player) {
							const list = [];
							const usable = lib.card[trigger.card.name].usable || false;
							const targets = trigger.targets || [];
							const players = game.filterPlayer((current) => {
								if (targets.includes(current)) return false;
								return lib.filter.targetEnabled2(trigger.card, player, current);
							});
							const info = trigger.scqhPcr_juebing || {};
							info.nature = trigger.card.nature || [];
							info.players = players || [];
							trigger.scqhPcr_juebing = info;
							const hits = trigger.directHit || [];
							if (!game.hasNature(trigger.card, 'ice')) {
								list.add('赋予冰属性');
							}
							if (trigger.name === 'useCard') {
								const basicList = ['shan', 'tao', 'jiu', 'du'];
								if (!basicList.includes(trigger.card.name) && hits.length < game.countPlayer()) {
									list.add('不可被响应');
								}
								if (typeof usable === 'number') {
									list.add('不计入使用次数');
								}
								if (players.length) {
									list.add('额外选择一个目标');
								}
							}
							if (list.length) {
								const { control } = await player
									.chooseControl(list, '取消')
									.set('prompt', get.prompt2('scqhPcr_juebing'))
									.set('ai', () => {
										return 0;
									})
									.forResult();
								event.result = {
									bool: control !== '取消',
									cost_data: control,
								};
							} else {
								event.result = {
									bool: false,
								};
							}
						},
						async content(event, trigger, player) {
							player.removeMark('scqhPcr_juebing', 1, false);
							const str = event.cost_data || '';
							const info = trigger.scqhPcr_juebing || {};
							if (str.includes('冰')) {
								game.setNature(trigger.card, 'ice');
								if (get.itemtype(trigger.card) === 'card') {
									const next = game.createEvent(event.name);
									next.card = trigger.card;
									event.next.remove(next);
									trigger.after.push(next);
									next.setContent(function () {
										game.setNature(trigger.card, info.nature);
									});
								}
							}
							if (str.includes('响应')) {
								trigger.directHit.addArray(game.filterPlayer());
							}
							if (str.includes('计入')) {
								if (trigger.addCount !== false) {
									trigger.addCount = false;
									trigger.player.getStat().card[trigger.card.name]--;
								}
							}
							if (str.includes('目标')) {
								const chooseTarget = await player
									.chooseTarget('请选择一个额外目标', function (card, player, target) {
										const players = _status.event.players;
										return players.includes(target);
									})
									.set('cardx', trigger.card)
									.set('players', info.players)
									.set('ai', function (target) {
										const cardx = _status.event.cardx;
										const eff = get.effect(target, cardx, player, player);
										return eff > 0;
									});
								const targets = chooseTarget.result?.targets || [];
								if (targets.length) {
									if (!trigger.targets) trigger.targets = [];
									trigger.targets.addArray(targets);
									trigger.player.line(targets, 'green');
								}
							}
						},
						_priority: 25,
					},
				},
			},
			scqhPcr_eryu: {
				audio: 3,
				forced: true,
				trigger: {
					global: 'damageBegin4',
				},
				filter(trigger, player) {
					if (!trigger.source) return false;
					if (trigger.source === trigger.player) return false;
					if (!trigger.source.isIn() || !trigger.player.isIn()) return false;
					return trigger.source === player || trigger.player === player;
				},
				async content(event, trigger, player) {
					if (trigger.source === player) {
						const next = await trigger.player
							.chooseBool()
							.set('ai', function () {
								return 1;
							})
							.set('prompt', '是否让' + get.translation(trigger.source) + '摸一张牌,防止此伤害');
						if (next.result.bool) {
							await trigger.source.draw();
							await trigger.cancel();
						}
					} else {
						const next = await trigger.source
							.chooseToDiscard('he')
							.set('ai', function (card) {
								return 7 - get.value(card);
							})
							.set('prompt', '是否弃置一张牌,否则防止' + get.translation(trigger.player) + '受到伤害');
						if (!next.result.bool) {
							await trigger.cancel();
						}
					}
				},
				group: ['scqhPcr_eryu_use'],
				global: ['scqhPcr_eryu_ai'],
				subSkill: {
					use: {
						forced: true,
						trigger: {
							player: 'useCard',
						},
						filter(trigger, player) {
							var dtag = get.tag(trigger.card, 'damage');
							return dtag;
						},
						content() {
							trigger.card.scqhPcr_eryu = true;
						},
					},
					ai: {
						nofire: true,
						nodamage: true,
						nothunder: true,
						notrick: true,
						ai: {
							skillTagFilter(player, tag, arg) {
								if (arg && arg.card && arg.card.scqhPcr_eryu) return true;
								return false;
							},
							effect: {
								target(card, player, target) {
									var cardx = _status.event.card;
									if (cardx && cardx.scqhPcr_eryu) return [0, 0];
								},
							},
						},
					},
				},
			},
			scqhPcr_yongxi: {
				audio: 3,
				init(player, skill) {
					player.scqh_InitShunfaji(skill);
					player.scqh_InitStatus();
				},
				onremove(player, skill) {
					var storage = player.storage.scqh_InitShunfaji || [];
					if (storage.includes(skill)) {
						player.storage.scqh_InitShunfaji.remove(skill);
					}
				},
				scqh_UB: true,
				forced: true,
				clickable(player) {
					player.scqh_UseShunfaji();
				},
				clickableFilter(player) {
					var players = game.filterPlayer((target) => {
						if (!player.canUse('sha', target, false)) return false;
						return player.scqh_inCurrentTarget(target);
					});
					if (!players.length) return false;
					if (player.hasSkill('scqhPcr_mode2')) return false;
					return player.scqh_LookStatus().tp >= 1000;
				},
				clickableContent() {
					'step 0';
					var next = player.chooseTarget(function (card, player, target) {
						if (!player.canUse('sha', target, false)) return false;
						return player.scqh_inCurrentTarget(target);
					});
					next.set('prompt', '请选择【勇袭】的目标');
					next.set('prompt2', get.translation(event.name + '_info'));
					next.set('ai', function (target) {
						let player = _status.event.player;
						let att = get.attitude(player, target);
						return -att;
					});
					('step 1');
					var targets = result?.targets || [];
					if (targets.length) {
						player.scqh_changeStatus('tp', -1000);
						player.scqh_ubAnimation(event.name);
						event.targets = targets;
					} else event.finish();
					('step 2');
					var card = {
						name: 'sha',
					};
					var targets = event.targets;
					var skillname = 'scqhPcr_yongxi_';
					var next = player.useCard(card, targets, false);
					next.audio = false;
					if (player.isMaxHp()) {
						next.baseDamage = 2;
						skillname += 'max';
					} else {
						player.addSkill('scqhPcr_yongxi_niepan');
						skillname += 'nomax';
					}
					game.trySkillAudio(skillname, player, true);
				},
				derivation: ['scqhPcr_yongxi_niepan'],
				group: ['scqhPcr_yongxi_ai'],
				subSkill: {
					max: {
						audio: 2,
					},
					nomax: {
						audio: 2,
					},
					ai: {
						forced: true,
						trigger: {
							global: ['useCardAfter', 'phaseUseAfter'],
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let info = lib.skill.scqhPcr_yongxi || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var next = game.createEvent('scqhPcr_yongxi');
							next.player = player;
							next.setContent(lib.skill.scqhPcr_yongxi.clickableContent);
						},
					},
					niepan: {
						audio: 2,
						charlotte: true,
						forced: true,
						trigger: {
							player: 'dying',
						},
						async content(event, trigger, player) {
							player.removeSkill(event.name);
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
			scqhPcr_shengyan: {
				audio: 2,
				enable: 'chooseToUse',
				vcards(trigger, player) {
					var list = [];
					var types = [];
					for (var name of lib.inpile) {
						var card = {
							name: name,
						};
						var type = get.type2(card);
						if (type !== 'basic') continue;
						if (trigger && trigger.filterCard(card, player, trigger)) {
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
					for (var name in lib.card) {
						var card = {
							name: name,
						};
						var type = get.type2(card);
						if (type !== 'food') continue;
						if (trigger && trigger.filterCard(card, player, trigger)) {
							list.push([type, '', name]);
						}
					}
					return list;
				},
				hiddenCard(player, name) {
					if (!player.countCards('hes')) return;
					return get.type(name) === 'basic';
				},
				filter(trigger, player) {
					if (!player.countCards('hes')) return false;
					const vcards = lib.skill.scqhPcr_shengyan.vcards(trigger, player);
					return vcards.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						const vcards = lib.skill.scqhPcr_shengyan.vcards(trigger, player);
						const dialog = ui.create.dialog('盛宴', 'hidden');
						dialog.add([vcards, 'vcard']);
						dialog.direct = true;
						return dialog;
					},
					check(button) {
						let player = _status.event.player;
						return 1;
					},
					backup(links, player) {
						let info = {
							filterCard: true,
							position: 'hes',
							selectCard() {
								return [1, Infinity];
							},
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
							},
							precontent() {
							},
							ai1(card) {
								var cards = ui.selected.cards || [];
								if (cards.length) return 0;
								return 7 - get.value(card);
							},
						};
						return info;
					},
					prompt(links, player) {
						let str = '将任意张牌当做';
						str += get.translation(links[0][3]) || '';
						str += '【';
						str += get.translation(links[0][2]) || '';
						str += '】使用';
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
				group: ['scqhPcr_shengyan_choose'],
				subSkill: {
					choose: {
						forced: true,
						trigger: {
							player: 'useCard1',
						},
						filter(trigger, player) {
							var cards = trigger.cards || [];
							var targets = trigger.targets || [];
							var players = game.filterPlayer((current) => {
								if (targets.includes(current)) return false;
								let bool = lib.filter.targetEnabled2(trigger.card, trigger.player, current);
								return bool;
							});
							if (!cards.length || !players.length) return false;
							return trigger.skill && trigger.skill.indexOf('scqhPcr_shengyan') == 0;
						},
						content() {
							'step 0';
							var targets = trigger.targets || [];
							var players = game.filterPlayer((current) => {
								if (targets.includes(current)) return false;
								let bool = lib.filter.targetEnabled2(trigger.card, trigger.player, current);
								return bool;
							});
							var count = trigger.cards.length;
							var next = player.chooseTarget([1, count], function (card, player, target) {
								var players = _status.event.players;
								return players.includes(target);
							});
							next.set('prompt', '选择【' + get.translation(trigger.card) + '】的额外目标');
							next.set('cardx', trigger.card);
							next.set('players', players);
							next.set('ai', function (target) {
								var cardx = _status.event.cardx;
								var player = _status.event.player;
								var att = get.attitude(player, target);
								var eff = get.effect(target, cardx, player, player);
								return eff;
							});
							('step 1');
							var targets = result?.targets || [];
							if (targets.length) {
								player.line(targets);
								if (!trigger.targets) trigger.targets = [];
								trigger.targets.addArray(targets);
								game.log(targets, '成为了', trigger.card, '的额外目标');
							}
						},
					},
				},
			},
			scqhPcr_kongfu: {
				audio: 3,
				forced: true,
				trigger: {
					player: 'phaseDrawBegin2',
				},
				filter(trigger, player) {
					if (trigger.numFixed) return false;
					return true;
				},
				content() {
					'step 0';
					if (trigger.num && typeof trigger.num === 'number') {
						trigger.num -= 1;
					}
					var players = game.filterPlayer((current) => {
						if (!current.countCards('hej')) return false;
						return player.scqh_inCurrentTarget(current);
					});
					if (players.length) {
						var next = player.chooseTarget(
							[1, players.length],
							'获得眼前的任意名角色区域里的各一张牌',
							function (card, player, target) {
								var players = _status.event.players;
								return players.includes(target);
							},
							function (target) {
								var player = _status.event.player;
								var card = {
									name: 'shunshou',
								};
								var eff = get.effect(target, card, player, player);
								return eff;
							}
						);
						next.set('players', players);
					} else event.finish();
					('step 1');
					var targets = result?.targets || [];
					if (targets.length) {
						player.gainMultiple(targets.sortBySeat(), 'hej');
					}
				},
				ai: {
					threaten: 1.6,
					expose: 0.2,
				},
				tao(trigger, player) {
					const cards = [];
					game.getGlobalHistory('cardMove', function (evt) {
						const moves = evt.cards?.filterInD('d') || [];
						if (evt.getParent('phaseDiscard') !== trigger) return;
						if (evt.name == 'lose') {
							if (evt.type !== 'discard' || evt.position !== ui.discardPile) return;
						}
						if (moves.length) cards.addArray(moves);
					});
					return cards;
				},
				group: ['scqhPcr_kongfu_discard'],
				subSkill: {
					discard: {
						forced: true,
						trigger: {
							player: 'phaseDiscardAfter',
						},
						filter(trigger, player) {
							var cards = lib.skill.scqhPcr_kongfu.tao(trigger, player) || [];
							return cards.length;
						},
						content() {
							var cards = lib.skill.scqhPcr_kongfu.tao(trigger, player) || [];
							var card = {
								name: 'tao',
								cards: cards,
							};
							var prompt = '###是否将';
							prompt += get.cnNumber(cards.length);
							prompt += '张牌当做一张【桃】使用？###';
							var next = player.chooseUseTarget(prompt, card, cards, false, 'nodistance');
						},
					},
				},
			},
			scqhPcr_juesheng: {
				audio: 5,
				init(player, skill) {
					player.scqh_InitShunfaji(skill);
					player.scqh_InitStatus();
				},
				onremove(player, skill) {
					var storage = player.storage.scqh_InitShunfaji || [];
					if (storage.includes(skill)) {
						player.storage.scqh_InitShunfaji.remove(skill);
					}
				},
				scqh_UB: true,
				forced: true,
				clickable(player) {
					player.scqh_UseShunfaji();
				},
				clickableFilter(player) {
					var players = game.filterPlayer((target) => {
						if (target == player) return false;
						var card = {
							name: 'sha',
							nature: 'stab',
						};
						return player.canUse(card, target, false);
					});
					if (!players.length) return false;
					if (player.hasSkill('scqhPcr_mode2')) return false;
					return player.scqh_LookStatus().tp >= 1000;
				},
				clickableContent() {
					'step 0';
					var next = player.chooseTarget(function (card, player, target) {
						if (target == player) return false;
						var card = {
							name: 'sha',
							nature: 'stab',
						};
						return player.canUse(card, target, false);
					});
					next.set('prompt', '请选择【决胜】的目标');
					next.set('prompt2', get.translation(event.name + '_info'));
					next.set('ai', function (target) {
						let player = _status.event.player;
						let att = get.attitude(player, target);
						return -att;
					});
					('step 1');
					var target = (result.targets || [])[0] || false;
					event.target = target;
					if (target) {
						player.scqh_changeStatus('tp', -1000);
						player.scqh_ubAnimation(event.name);
						if (target.isMaxHandcard() && target.countGainableCards(player, 'he')) {
							player.gainPlayerCard(target, 'he', true);
						}
						var card = {
							name: 'sha',
							nature: 'stab',
						};
						var next = player.useCard(card, target, false);
						next.skill = event.name;
					}
				},
				group: ['scqhPcr_juesheng_ai'],
				subSkill: {
					ai: {
						forced: true,
						trigger: {
							global: ['useCardAfter', 'phaseUseAfter'],
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let info = lib.skill.scqhPcr_juesheng || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var next = game.createEvent('scqhPcr_juesheng');
							next.player = player;
							next.setContent(lib.skill.scqhPcr_juesheng.clickableContent);
						},
					},
				},
			},
			scqhPcr_jipin: {
				audio: 2,
				enable: 'chooseToUse',
				filterCard(card, player) {
					return card.suit == 'club';
				},
				position: 'hes',
				viewAs: {
					name: 'shunshou',
				},
				viewAsFilter(player) {
					if (!player.countCards('hes', { suit: 'club' })) return false;
				},
				prompt: '将一张♣️️牌当【顺手牵羊】使用,你可以将一张牌交给一名手牌数最少的其他角色',
				check(card) {
					return 4 - get.value(card);
				},
				targets(trigger, player) {
					var targets = trigger.targets || [];
					var players = game.filterPlayer((current) => {
						if (current == player) return false;
						if (targets.includes(current)) return false;
						return current.isMinHandcard();
					});
					return players;
				},
				group: ['scqhPcr_jipin_give'],
				subSkill: {
					give: {
						forced: true,
						trigger: {
							player: 'useCardAfter',
						},
						filter(trigger, player) {
							if (!player.countCards('he')) return false;
							var players = lib.skill.scqhPcr_jipin.targets(trigger, player) || [];
							if (!players.length) return false;
							return trigger.skill && trigger.skill.indexOf('scqhPcr_jipin') == 0;
						},
						content() {
							'step 0';
							var players = lib.skill.scqhPcr_jipin.targets(trigger, player) || [];
							player.chooseCardTarget({
								filterCard: true,
								position: 'he',
								filterTarget(card, player, target) {
									var players = _status.event.players;
									return players.includes(target);
								},
								prompt: '将一张牌交给一名手牌数最少的其他角色',
								players: players,
								ai1(card) {
									var cards = ui.selected.cards || [];
									var val = get.value(card);
									if (!cards.length) return 6 - val;
									return 0;
								},
								ai2(target) {
									var player = _status.event.player;
									var cards = ui.selected.cards || [];
									var card = cards[0];
									if (card) {
										var val = target.getUseValue(card);
										if (val > 0) return val * get.attitude(player, target) * 2;
										return get.value(card, target) * get.attitude(player, target);
									}
									return 0;
								},
							});
							('step 1');
							if (result.cards?.length) {
								var cards = result.cards || [];
								var targets = result.targets || [];
								var target = targets[0];
								player.line(target);
								player.addExpose(0.2);
								player.give(cards, target);
							}
						},
					},
				},
			},
			scqhPcr_lueying: {
				mod: {
					targetInRange(card, player, target, now) {
						var color = get.color(card);
						var damage = get.tag(card, 'damage');
						if (!damage && color === 'black') return true;
					},
					targetEnabled(card, player, target) {
						if (player == target) return;
						var color = get.color(card);
						var damage = get.tag(card, 'damage');
						if (!damage && color === 'black') return false;
					},
				},
				forced: true,
				trigger: {
					player: 'useCard1',
				},
				filter(trigger, player) {
					var color = get.color(trigger.card);
					var damage = get.tag(trigger.card, 'damage');
					return !damage && color === 'black';
				},
				content() {
				},
			},
			scqhPcr_shahu: {
				audio: 5,
				init(player, skill) {
					player.scqh_InitShunfaji(skill);
					player.scqh_InitStatus();
				},
				onremove(player, skill) {
					var storage = player.storage.scqh_InitShunfaji || [];
					if (storage.includes(skill)) {
						player.storage.scqh_InitShunfaji.remove(skill);
					}
				},
				scqh_UB: true,
				clickable(player) {
					player.scqh_UseShunfaji();
				},
				clickableFilter(player) {
					var players = game.filterPlayer((current) => {
						var storage = player.storage.scqhPcr_shahu_cancel || [];
						if (storage.includes(current)) return false;
						return true;
					});
					if (!players.length) return false;
					if (player.hasSkill('scqhPcr_mode2')) return false;
					return player.scqh_LookStatus().tp >= 1000;
				},
				clickableContent() {
					'step 0';
					var players = game.filterPlayer((current) => {
						if (current == player) return false;
						var storage = player.storage.scqhPcr_shahu_cancel || [];
						if (storage.includes(current)) return false;
						return true;
					});
					if (players.length) {
						var next = player.chooseTarget([1, Infinity], function (card, player, target) {
							return players.includes(target);
						});
						next.set('prompt', '请选择【纱护】的额外目标');
						next.set('ai', function (target) {
							let player = _status.event.player;
							let att = get.attitude(player, target);
							return att > 0;
						});
					}
					('step 1');
					player.scqh_changeStatus('tp', -1000);
					player.scqh_ubAnimation(event.name);
					var targets = [player];
					if (result.targets?.length) targets.addArray(result.targets);
					player.addTempSkill('scqhPcr_shahu_cancel');
					player.markAuto('scqhPcr_shahu_cancel', targets);
				},
				group: ['scqhPcr_shahu_ai'],
				subSkill: {
					cancel: {
						marktext: '纱护',
						intro: {
							name: '被守护者',
							content: '$',
						},
						charlotte: true,
						onremove(player) {
							var storage = player.storage.scqhPcr_shahu_cancel || [];
							for (var current of storage) current.recover();
							player.unmarkAuto('scqhPcr_shahu_cancel', storage);
						},
						forced: true,
						trigger: {
							global: 'changeHpBefore',
						},
						filter(trigger, player) {
							var evt = trigger.parent;
							if (evt.name === 'damage') {
								if (evt.card && evt.card.name === 'sha') return false;
							}
							if (!player.hasSkill('scqhPcr_shahu')) return false;
							var storage = player.storage.scqhPcr_shahu_cancel || [];
							if (storage.includes(trigger.player)) return true;
							return false;
						},
						content() {
							trigger.cancel();
						},
					},
					ai: {
						forced: true,
						trigger: {
							global: 'useCardToTargeted',
						},
						filter(trigger, player) {
							let att = get.attitude(player, trigger.target);
							if (att <= 0) return false;
							let info = lib.skill.scqhPcr_shahu || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var next = game.createEvent('scqhPcr_shahu');
							next.player = player;
							next.setContent(lib.skill.scqhPcr_shahu.clickableContent);
						},
					},
				},
			},
			scqhPcr_duzhuo: {
				audio: 2,
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
					global: 'useCardBefore',
				},
				usable: 1,
				filter(trigger, player) {
					const map = lib.skill.scqhPcr_duzhuo.map() || {};
					const list = map[trigger.card.name] || [];
					if (!list || !list.length || !list.includes(player)) return false;
					const info = trigger.scqhPcr_duzhuo || {};
					if (info.bool) return false;
					return trigger.skill && trigger.skill.indexOf('scqhPcr_duzhuo_') == 0;
				},
				content() {
					'step 0';
					if (trigger.player != player) {
						var next = player.chooseBool();
						next.set('prompt', get.prompt(event.name, trigger.player));
						var prompt = get.translation(trigger.player);
						prompt += '需要使用一张【';
						prompt += get.translation(trigger.card.name);
						prompt += '】,你可以令其视为使用之';
						next.set('prompt2', prompt);
						next.set('target', trigger.player);
						next.set('ai', function () {
							var player = _status.event.player;
							var target = _status.event.target;
							var att = get.attitude(player, target);
							return att > 0;
						});
					} else {
						event._result = {
							bool: true,
						};
					}
					('step 1');
					var skillname = 'scqhPcr_duzhuo';
					var info = trigger[skillname] || {};
					if (!info.targeted) info.targeted = [];
					info.targeted.add(player);
					if (result && result.bool) {
						player.changeZhuanhuanji(skillname);
						info.bool = true;
					} else {
						if (player.getStat('triggerSkill')[skillname]) {
							player.getStat('triggerSkill')[skillname] -= 1;
						}
						var map = lib.skill[skillname].map() || {};
						var list = (map[trigger.card.name] || []).filter((current) => {
							if (info.targeted.includes(current)) return false;
							return true;
						});
						if (!list.length) {
							trigger.cancel();
							trigger.player.addTempSkill('scqhPcr_duzhuo_ban', ['useCardAfter', 'phaseAfter']);
						}//QQQ
					}
					trigger[skillname] = info;
				},
				map() {
					const map = {
						jiu: [],
						wuzhong: [],
					};
					for (const name in map) {
						var bool = name === 'jiu' ? false : true;
						const players = game.filterPlayer((current) => {
							const skillname = 'scqhPcr_duzhuo';
							if (!current.hasSkill(skillname)) return false;
							if (current.getStat('triggerSkill')[skillname]) return false;
							const storage = current.storage[skillname] || false;
							return storage === bool;
						});
						map[name] = players;
					}
					return map;
				},
				vcards(trigger, player) {
					const list = [];
					const map = lib.skill.scqhPcr_duzhuo.map() || {};
					for (const name in map) {
						const card = {
							name: name,
						};
						const players = map[name] || [];
						if (trigger && trigger.filterCard && trigger.filterCard(card, player, trigger)) {
							if (players.length) list.add(name);
						}
					}
					return list;
				},
				global: ['scqhPcr_duzhuo_use'],
				subSkill: {
					use: {
						name: '独酌',
						enable: 'chooseToUse',
						usable: 1,
						hiddenCard(player, name) {
							const map = lib.skill.scqhPcr_duzhuo.map() || {};
							const list = map[name] || [];
							return list && list.length;
						},
						filter(trigger, player) {
							if (player.hasSkill('scqhPcr_duzhuo_ban')) return false;
							const vcards = lib.skill.scqhPcr_duzhuo.vcards(trigger, player) || [];
							return vcards && vcards.length;
						},
						chooseButton: {
							dialog(trigger, player) {
								const vcards = lib.skill.scqhPcr_duzhuo.vcards(trigger, player) || [];
								const dialog = ui.create.dialog('独酌', 'hidden');
								dialog.add([vcards, 'vcard']);
								dialog.direct = true;
								return dialog;
							},
							check(button) {
								return 1;
							},
							backup(links, player) {
								const info = {
									filterCard() {
										return false;
									},
									selectCard: -1,
									viewAs: {
										name: links[0][2],
									},
								};
								return info;
							},
							prompt(links, player) {
								let str = '视为使用一张【';
								str += get.translation(links[0][2]) || '';
								str += '】';
								return str;
							},
						},
						ai: {
							save: true,
							skillTagFilter(player) {
								return;
							},
							order: 10,
							result: {
								player(player) {
									return 1;
								},
							},
						},
					},
					ban: {
						silent: true,
						charlotte: true,
					},
				},
			},
			scqhPcr_jili: {
				audio: 2,
				autodelay: true,
				trigger: {
					global: 'useCardToTarget',
				},
				check(trigger, player) {
					var eff = get.effect(player, trigger.card, trigger.player, player);
					return eff > 0;
				},
				filter(trigger, player) {
					if (get.color(trigger.card) == 'black') return false;
					if (!trigger.targets) return false;
					if (trigger.player == player) return false;
					if (trigger.targets.includes(player)) return false;
					if (get.info(trigger.card).multitarget) return false;
					var type = get.type(trigger.card);
					if (type != 'basic' && type != 'trick') return false;
					if (lib.filter.targetEnabled2(trigger.card, trigger.player, player)) {
						for (var i = 0; i < trigger.targets.length; i++) {
							if (get.distance(trigger.targets[i], player) <= 1) return true;
						}
					}
					return false;
				},
				content() {
					trigger.parent.targets.add(player);
					trigger.player.line(player, 'green');
				},
			},
			scqhPcr_jifeng: {
				audio: 3,
				init(player, skill) {
					player.scqh_InitShunfaji(skill);
					player.scqh_InitStatus();
				},
				onremove(player, skill) {
					var storage = player.storage.scqh_InitShunfaji || [];
					if (storage.includes(skill)) storage.remove(skill);
					player.storage.scqh_InitShunfaji = storage;
				},
				scqh_UB: true,
				forced: true,
				clickable(player) {
					player.scqh_UseShunfaji();
				},
				clickableFilter(player) {
					var players = game.filterPlayer((target) => {
						if (!player.canUse('sha', target, false)) return false;
						return player.scqh_inCurrentTarget(target);
					});
					if (!players.length) return false;
					if (player.hasSkill('scqhPcr_mode2')) return false;
					return player.scqh_LookStatus().tp >= 1000;
				},
				clickableContent() {
					'step 0';
					var next = player.chooseTarget(function (card, player, target) {
						if (!player.canUse('sha', target, false)) return false;
						return player.scqh_inCurrentTarget(target);
					});
					next.set('prompt', '请选择【疾风】的目标');
					next.set('prompt2', get.translation(event.name + '_info'));
					next.set('ai', function (target) {
						let player = _status.event.player;
						let att = get.attitude(player, target);
						return -att;
					});
					('step 1');
					var target = (result.targets || [])[0] || false;
					event.target = target;
					if (target) {
						player.scqh_changeStatus('tp', -1000);
						player.scqh_ubAnimation(event.name);
						var card = {
							name: 'sha',
						};
						var next = player.useCard(card, target, false);
					}
				},
				group: ['scqhPcr_jifeng_ai'],
				subSkill: {
					ai: {
						forced: true,
						trigger: {
							global: ['useCardAfter', 'phaseUseAfter'],
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let info = lib.skill.scqhPcr_jifeng || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var next = game.createEvent('scqhPcr_jifeng');
							next.player = player;
							next.setContent(lib.skill.scqhPcr_jifeng.clickableContent);
						},
					},
				},
			},
			scqhPcr_jianyi: {
				audio: 2,
				forced: true,
				trigger: {
					player: ['respond', 'useCard'],
				},
				content() {
					player.scqh_changeStatus('tp', 150);
					var number = trigger.card.number;
					if (number && number % 3 == 0) player.draw();
				},
			},
			scqhPcr_qiling: {
				audio: 3,
				derivation: ['scqhPcr_xinghe', 'scqhPcr_yaoguang', 'scqhPcr_dielang'],
				limited: true,
				enable: 'phaseUse',
				filter(trigger, player) {
					var history = player.actionHistory || [];
					var list = player.storage.scqhPcr_qiling || [];
					if (list.length < 4) return false;
					if (player.name1 && player.name1 == 'scqhPcr_jitasix') return false;
					if (player.name2 && player.name2 == 'scqhPcr_jitasix') return false;
					if (player.name1 && player.name1 == 'scqhPcr_jita') return true;
					if (player.name2 && player.name2 == 'scqhPcr_jita') return true;
					return false;
				},
				content() {
					player.awakenSkill(event.name);
					player.reinitCharacter('scqhPcr_jita', 'scqhPcr_jitasix');
				},
				mark: false,
				intro: {
					content: '$',
				},
				ai: {
					order: 10,
					result: {
						player: 1,
					},
				},
				global: ['scqhPcr_qiling_suit'],
				subSkill: {
					suit: {
						forced: true,
						trigger: {
							player: ['respond', 'useCard'],
						},
						filter(trigger, player) {
							return player.hasSkill('scqhPcr_qiling');
						},
						content() {
							var suit = trigger.card.suit;
							player.markAuto('scqhPcr_qiling', [suit]);
						},
					},
				},
			},
			scqhPcr_xinghe: {
				audio: 3,
				init(player, skill) {
					player.scqh_InitShunfaji(skill);
					player.scqh_InitStatus();
				},
				onremove(player, skill) {
					var storage = player.storage.scqh_InitShunfaji || [];
					if (storage.includes(skill)) {
						player.storage.scqh_InitShunfaji.remove(skill);
					}
				},
				scqh_UB: true,
				forced: true,
				clickable(player) {
					player.scqh_UseShunfaji();
				},
				clickableFilter(player) {
					var players = game.filterPlayer((target) => {
						if (!player.canUse('sha', target, false)) return false;
						return player.scqh_inCurrentTarget(target);
					});
					if (!players.length) return false;
					if (player.hasSkill('scqhPcr_mode2')) return false;
					return player.scqh_LookStatus().tp >= 1000;
				},
				clickableContent() {
					'step 0';
					var next = player.chooseTarget(function (card, player, target) {
						if (!player.canUse('sha', target, false)) return false;
						return player.scqh_inCurrentTarget(target);
					});
					next.set('prompt', '请选择【星河】的目标');
					next.set('prompt2', get.translation(event.name + '_info'));
					next.set('ai', function (target) {
						let player = _status.event.player;
						let att = get.attitude(player, target);
						return -att;
					});
					('step 1');
					var target = (result.targets || [])[0] || false;
					event.target = target;
					if (target) {
						player.scqh_changeStatus('tp', -1000);
						player.scqh_ubAnimation(event.name);
						var card = {
							name: 'sha',
						};
						var next = player.useCard(card, target, false);
						var count = Math.min(5, player.maxHp);
						player.drawTo(count);
					}
				},
				group: ['scqhPcr_xinghe_ai'],
				subSkill: {
					ai: {
						forced: true,
						trigger: {
							global: ['useCardAfter', 'phaseUseAfter'],
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let info = lib.skill.scqhPcr_xinghe || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var next = game.createEvent('scqhPcr_xinghe');
							next.player = player;
							next.setContent(lib.skill.scqhPcr_xinghe.clickableContent);
						},
					},
				},
			},
			scqhPcr_yaoguang: {
				audio: 2,
				enable: 'chooseToUse',
				viewAs: {
					name: 'sha',
					scqhPcr_yaoguang: true,
				},
				filterCard: true,
				position: 'hes',
				filterTarget(card, player, target) {
					if (!player.canUse(card, target, false)) return false;
					return player.scqh_inCurrentTarget(target);
				},
				group: ['scqhPcr_yaoguang_useCard'],
				subSkill: {
					useCard: {
						forced: true,
						trigger: {
							player: 'useCard1',
						},
						filter(trigger, player) {
							return trigger.card.scqhPcr_yaoguang;
						},
						content() {
							'step 0';
							player.scqh_changeStatus('tp', 200);
							var players = game.filterPlayer((current) => get.distance(player, current) <= 1);
							if (players.length) {
								var next = player.chooseTarget([1, players.length], function (card, player, target) {
									var players = _status.event.players;
									return players.includes(target);
								});
								next.set('players', players);
								next.set('prompt', '目标角色回复100点技能值');
								next.set('ai', function (target) {
									let player = _status.event.player;
									let att = get.attitude(player, target);
									return att;
								});
							} else event.finish();
							('step 1');
							if (result) {
								var targets = result.targets || [];
								player.line(targets, 'green');
								for (var target of targets) {
									target.scqh_changeStatus('tp', 100);
								}
							}
						},
					},
				},
			},
			scqhPcr_dielang: {
				audio: 3,
				forced: true,
				trigger: {
					player: ['respond', 'useCard'],
				},
				content() {
					player.scqh_changeStatus('tp', 150);
					var number = trigger.card.number;
					if (number && number % 3 == 0) player.draw();
					if (trigger.card.name == 'sha' && trigger.name == 'useCard') {
						var targets = (trigger.targets || []).filter((target) => {
							return player.scqh_inCurrentTarget(target);
						});
						if (targets.length) {
							trigger.effectCount += 1;
							game.log(trigger.card, '额外结算一次');
						}
					}
				},
			},
			scqhPcr_shuyu: {
				audio: 3,
				marktext: '避',
				intro: {
					content: '剩余次数:#',
				},
				init(player, skill) {
					player.scqh_InitShunfaji(skill);
					player.scqh_InitStatus();
				},
				onremove(player, skill) {
					var storage = player.storage.scqh_InitShunfaji || [];
					if (storage.includes(skill)) {
						player.storage.scqh_InitShunfaji.remove(skill);
					}
				},
				scqh_UB: true,
				clickable(player) {
					player.scqh_UseShunfaji();
				},
				clickableFilter(player) {
					if (player.hasSkill('scqhPcr_mode2')) return false;
					return player.scqh_LookStatus().tp >= 1000;
				},
				clickableContent() {
					'step 0';
					player.scqh_changeStatus('tp', -1000);
					var count = 3 - player.countMark('scqhPcr_shuyu');
					if (count >= 1) player.addMark('scqhPcr_shuyu', count, false);
					player.scqh_ubAnimation(event.name);
					var card = {
						name: 'sha',
					};
					var players = game.filterPlayer((current) => {
						if (!player.canUse(card, current, false)) return false;
						return player.scqh_inCurrentTarget(current);
					});
					if (players.length) {
						var next = player.chooseTarget(function (card, player, target) {
							var players = _status.event.players;
							return players.includes(target);
						});
						next.set('players', players);
						next.set('prompt', '视为使用一张【杀】');
						next.set('ai', function (target) {
							let player = _status.event.player;
							let att = get.attitude(player, target);
							return -att;
						});
					} else event.finish();
					('step 1');
					if (result.targets?.length) {
						var target = (result.targets || [])[0] || false;
						if (target) {
							var card = {
								name: 'sha',
							};
							var next = player.useCard(card, target, false);
							next.directHit = game.filterPlayer();
							next.baseDamage = 2;
						}
					}
				},
				group: ['scqhPcr_shuyu_cancel', 'scqhPcr_shuyu_ai'],
				subSkill: {
					cancel: {
						charlotte: true,
						intro: {
							name: '乱数圣域',
							content: '剩余次数:#',
						},
						trigger: {
							target: 'useCardToBegin',
						},
						filter(trigger, player) {
							if (!player.countMark('scqhPcr_shuyu')) return false;
							if (trigger.player == player) return false;
							return true;
						},
						prompt(trigger, player) {
							var prompt = '';
							prompt += '是否防止';
							prompt += get.translation(trigger.card);
							if (trigger.directHit) {
								prompt += '(你不能响应)';
							}
							prompt += '对你生效？';
							return prompt;
						},
						prompt2(trigger, player) {
							var prompt = '【乱数圣域】剩余层数:';
							prompt += player.countMark('scqhPcr_shuyu');
							return prompt;
						},
						check(trigger, player) {
							let eff = get.effect(trigger.player, trigger.card, player, player);
							if (eff > 0) return 0;
							if (trigger.directHit) return 1;
							let check = 0;
							if (trigger.card.name == 'nanman') {
								check = player.countCards('h', (card) => {
									if (card.name != 'sha') return false;
									return lib.filter.cardRespondable(card, player);
								});
							}
							if (trigger.card.name == 'wanjian') {
								check = player.countCards('h', (card) => {
									if (card.name != 'shan') return false;
									return lib.filter.cardRespondable(card, player);
								});
							}
							if (trigger.card.name == 'sha') {
								var shanCount = trigger.shanRequired;
								if (typeof trigger.shanRequired != 'number' || !trigger.shanRequired || trigger.shanRequired < 0) {
									shanCount = 1;
								}
								check = player.countCards('h', (card) => {
									if (card.name != 'shan') return false;
									return lib.filter.cardEnabled(card, player);
								});
								if (check < shanCount) return 0;
							}
							if (trigger.card.name == 'juedou') {
								check = 1;
							}
							return check;
						},
						content() {
							player.removeMark('scqhPcr_shuyu', 1, false);
							trigger.cancel();
						},
					},
					ai: {
						forced: true,
						trigger: {
							global: ['useCardAfter', 'phaseUseAfter'],
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let info = lib.skill.scqhPcr_shuyu || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var next = game.createEvent('scqhPcr_shuyu');
							next.player = player;
							next.setContent(lib.skill.scqhPcr_shuyu.clickableContent);
						},
					},
				},
			},
			scqhPcr_shuanggou: {
				zhuanhuanji: true,
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					return true;
				},
				content() {
					'step 0';
					event.bool = player.storage[event.name] || false;
					var num = event.bool ? 2 : 1;
					player.changeZhuanhuanji(event.name);
					player.draw(num);
					('step 1');
					var num = event.bool ? 1 : 2;
					var next = player.chooseToDiscard('he', num, true);
					next.set('ai', function (card) {
						return 7 - get.value(card);
					});
					('step 2');
					if (result) {
						var cards = result.cards || [];
						var cnum = cards.length;
						if (cnum > 0) {
							player.scqh_changeStatus('tpup', 15 * cnum);
							setTimeout(function () {
								player.scqh_changeStatus('tpup', -15 * cnum);
							}, 15000);
							player.scqh_changeStatus('tp', 150 * cnum);
						}
					}
				},
				ai: {
					order: 2.7,
					result: {
						player(player) {
							return 1;
						},
					},
				},
				subSkill: {
					yin: {
						charlotte: true,
					},
					yang: {
						charlotte: true,
					},
				},
			},
			scqhPcr_qinghai: {
				trigger: {
					player: 'useCardToPlayered',
				},
				logTarget: 'target',
				filter(trigger, player) {
					if (!trigger.target.countCards('he')) return false;
					if (!player.scqh_inCurrentTarget(trigger.target)) return false;
					return true;
				},
				check(trigger, player) {
					let att = get.attitude(player, trigger.target);
					return att <= 0;
				},
				content() {
					'step 0';
					var target = trigger.target;
					var next = player.choosePlayerCard(true, target, 'he', [1, 1], get.prompt(event.name, target));
					next.set('ai', function (button) {
						if (!_status.event.goon) return 0;
						let target = _status.event.target;
						let card = button.link;
						let val = get.value(card);
						if (card == target.getEquip(2)) return 2 * (val + 3);
						return val;
					});
					next.set('goon', get.attitude(player, target) <= 0);
					next.set('forceAuto', true);
					('step 1');
					var cards = result.cards || [];
					if (cards.length) {
						var target = trigger.target;
						var storage = player.storage.scqhPcr_qinghai_give || {};
						var list = storage[target.playerid] || [];
						list.addArray(cards);
						storage[target.playerid] = list;
						player.storage.scqhPcr_qinghai_give = storage;
						player.addToExpansion(cards, 'giveAuto', target).gaintag.add('scqhPcr_qinghai');
					}
				},
				marktext: '侵',
				intro: {
					markcount: 'expansion',
					mark(dialog, storage, player) {
						let xs = player.getExpansions('scqhPcr_qinghai');
						if (player.isUnderControl(true)) dialog.addAuto(xs);
						else return '共有' + get.cnNumber(xs.length) + '张牌';
					},
				},
				onremove(player, skill) {
					player.storage.scqhPcr_qinghai_give = {};
					let xs = player.getExpansions('scqhPcr_qinghai');
					if (xs.length) player.loseToDiscardpile(xs);
				},
				group: ['scqhPcr_qinghai_give'],
				subSkill: {
					give: {
						forced: true,
						trigger: {
							global: 'phaseEnd',
						},
						filter(trigger, player) {
							var xs = player.getExpansions('scqhPcr_qinghai');
							return xs.length;
						},
						content() {
							'step 0';
							var xs = player.getExpansions('scqhPcr_qinghai');
							var storage = player.storage.scqhPcr_qinghai_give || {};
							var players = game.filterPlayer();
							for (var target of players) {
								var cardx = storage[target.playerid] || [];
								var cards = cardx.filter((card) => xs.includes(card));
								if (cards.length) {
									target.gain(cards, 'draw');
									game.log(target, '收回了' + get.cnNumber(cards.length) + '张牌');
								}
							}
							('step 1');
							var xs = player.getExpansions('scqhPcr_qinghai');
							if (xs.length) {
								player.gain(xs, 'draw');
								game.log(player, '获得了' + get.cnNumber(xs.length) + '张牌');
							}
							player.storage.scqhPcr_qinghai_give = {};
						},
					},
				},
			},
			scqhPcr_chuanxin: {
				audio: 2,
				init(player, skill) {
					player.scqh_InitShunfaji(skill);
					player.scqh_InitStatus();
				},
				onremove(player, skill) {
					var storage = player.storage.scqh_InitShunfaji || [];
					if (storage.includes(skill)) {
						player.storage.scqh_InitShunfaji.remove(skill);
					}
				},
				scqh_UB: true,
				forced: true,
				clickable(player) {
					player.scqh_UseShunfaji();
				},
				clickableFilter(player) {
					var players = game.filterPlayer((target) => {
						if (!player.canUse('sha', target, false)) return false;
						return player.scqh_inCurrentTarget(target);
					});
					if (!players.length) return false;
					if (player.hasSkill('scqhPcr_mode2')) return false;
					return player.scqh_LookStatus().tp >= 1000;
				},
				clickableContent() {
					'step 0';
					var next = player.chooseTarget(function (card, player, target) {
						if (!player.canUse('sha', target, false)) return false;
						return player.scqh_inCurrentTarget(target);
					});
					next.set('prompt', '请选择【一箭穿心】的目标');
					next.set('prompt2', get.translation(event.name + '_info'));
					next.set('ai', function (target) {
						let player = _status.event.player;
						let att = get.attitude(player, target);
						return -att;
					});
					('step 1');
					var target = (result.targets || [])[0] || false;
					event.target = target;
					if (target) {
						player.scqh_changeStatus('tp', -1000);
						player.scqh_ubAnimation(event.name);
						var card = {
							name: 'sha',
							scqhPcr_chuanxin: true,
						};
						var next = player.useCard(card, target, false);
						next.directHit = game.filterPlayer();
						next.baseDamage = 2;
					}
				},
				trigger: {
				},
				filter(trigger, player) {
					if (!trigger.card) return false;
					if (!trigger.card.scqhPcr_chuanxin) return false;
					if (trigger.card.name != 'sha') return false;
					if (trigger.player == player) return false;
					if (trigger.num < 2) return false;
					return true;
				},
				check(trigger, player) {
					let target = trigger.player;
					let att = get.attitude(player, target);
					if (att > 0) return 0;
					if (target.countDiscardableCards(target, 'e')) return 1;
					if (target.countEnabledSlot()) return 1;
					return 0;
				},
				logTarget: 'player',
				prompt2(trigger, player) {
					return '当你以此【杀】对其他角色造成伤害时,你可以防止此伤害,每有一点伤害,则令其选择一项:⒈弃置装备区内的一张牌;⒉废除一个装备栏.';
				},
				async content(event, trigger, player) {
					trigger.cancel();
					let count = trigger.num;
					let target = trigger.player;
					let chooseList = function (target) {
						let list = [];
						if (target.countDiscardableCards(target, 'e')) list.push('弃置装备区内的一张牌');
						if (target.countEnabledSlot()) list.push('废除一个装备栏');
						return list;
					};
					let evt = trigger.getParent('scqhPcr_chuanxin');
					while (count >= 2) {
						count -= 2;
						let result = {};
						let list = chooseList(target);
						if (list.length > 1) {
							let next = target.chooseControl(list);
							next.ai = function () {
								return 0;
							};
							result.control = (await next).result.control;
						} else if (list.length) {
							result.control = list[0];
						} else break;
						let str = result.control || '';
						if (str.includes('弃置')) {
							await target.chooseToDiscard('e', true);
						} else if (str.includes('废除')) {
							target.chooseToDisable().ai = function (event, player, list) {
								if (list.includes('equip5')) return 'equip5';
								return list.randomGet();
							};
						}
					}
				},
				group: ['scqhPcr_chuanxin_ai'],
				subSkill: {
					ai: {
						forced: true,
						trigger: {
							global: ['useCardAfter', 'phaseUseAfter'],
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let info = lib.skill.scqhPcr_chuanxin || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var next = game.createEvent('scqhPcr_chuanxin');
							next.player = player;
							next.setContent(lib.skill.scqhPcr_chuanxin.clickableContent);
						},
					},
				},
			},
			scqhPcr_shuchi: {
				forced: true,
				trigger: {
					player: 'chooseToCompareBefore',
					target: 'chooseToCompareBefore',
				},
				filter(trigger, player) {
					return true;
				},
				content() {
					var card = get.cards()[0];
					if (card) {
						game.cardsGotoOrdering(card);
						if (!trigger.fixedResult) trigger.fixedResult = {};
						trigger.fixedResult[player.playerid] = card;
					}
				},
			},
			scqhPcr_liegong: {
				audio: 2,
				trigger: {
					player: 'useCardToPlayered',
				},
				canCompare(trigger, player) {
					let bool = player.hasSkill('scqhPcr_shuchi');
					let targets = (trigger.targets || []).filter((target) => {
						return player.canCompare(target);
					});
					return targets || [];
				},
				prompt(trigger, player) {
					let prompt = '是否发动【烈弓】';
					let targets = lib.skill.scqhPcr_liegong.canCompare(trigger, player);
					if (targets.length) {
						prompt += '并与';
						prompt += get.translation(targets);
						prompt += '拼点';
					}
					prompt += '？';
					return prompt;
				},
				filter(trigger, player) {
					if (trigger.card.name != 'sha') return false;
					if (trigger.parent.triggeredTargets3.length > 1) return false;
					return true;
				},
				check(trigger, player) {
					return true;
				},
				content() {
					trigger.parent.effectCount += 2;
					game.log(trigger.card, '额外结算两次');
					var targets = lib.skill.scqhPcr_liegong.canCompare(trigger, player);
					if (targets?.length) {
						var next = player.chooseToCompare(targets);
						next.callback = lib.skill[event.name].callback;
					}
				},
				callback() {
					if (event.num1 <= event.num2) {
						let evt = event.getParent('useCard');
						if (evt && evt.name == 'useCard') {
							let liegong = evt.scqhPcr_liegong || [];
							liegong.add(target);
							evt.scqhPcr_liegong = liegong;
						}
					}
				},
				group: ['scqhPcr_liegong_two'],
				subSkill: {
					two: {
						forced: true,
						trigger: {
							player: 'useCardToBefore',
						},
						filter(trigger, player) {
							let evt = trigger.parent;
							if (evt.effectedCount <= 1) return false;
							let liegong = evt.scqhPcr_liegong || [];
							return trigger.target && liegong.includes(trigger.target);
						},
						content() {
							trigger.cancel();
						},
					},
				},
			},
			scqhPcr_biyu: {
				audio: 2,
				init(player, skill) {
					player.scqh_InitShunfaji(skill);
					player.scqh_InitStatus();
				},
				onremove(player, skill) {
					var storage = player.storage.scqh_InitShunfaji || [];
					if (storage.includes(skill)) {
						player.storage.scqh_InitShunfaji.remove(skill);
					}
				},
				scqh_UB: true,
				clickable(player) {
					player.scqh_UseShunfaji();
				},
				clickableFilter(player) {
					var players = game.filterPlayer((current) => {
						return player.scqh_inCurrentTarget(current);
					});
					if (!players.length) return false;
					if (player.hasSkill('scqhPcr_mode2')) return false;
					return player.scqh_LookStatus().tp >= 1000;
				},
				clickableContent() {
					'step 0';
					player.scqh_changeStatus('tp', -1000);
					player.scqh_ubAnimation(event.name);
					player.addSkill('scqhPcr_biyu_tianxiang');
					player.addSkill('scqhPcr_biyu_tianxiang3');
					var players = game.filterPlayer((current) => {
						return player.scqh_inCurrentTarget(current);
					});
					var count = players.length;
					if (count > 0) player.changeHujia(count, null, true);
				},
				group: ['scqhPcr_biyu_ai'],
				subSkill: {
					tianxiang: {
						mark: true,
						marktext: '盾',
						intro: {
							content: '嘲讽状态',
						},
						charlotte: true,
						trigger: {
							global: 'damageBegin3',
						},
						logTarget: 'player',
						filter(trigger, player) {
							if (!player.hasSkill('scqhPcr_biyu')) return false;
							if (trigger.num <= 0) return false;
							return player.scqh_inCurrentTarget(trigger.player);
						},
						prompt2(trigger, player) {
							var prompt = '你可以将';
							prompt += get.cnNumber(trigger.num);
							prompt += '点伤害转移给自己';
							return prompt;
						},
						check(trigger, player) {
							var att = get.attitude(player, trigger.player);
							return att > 1;
						},
						content() {
							trigger.scqhPcr_biyu = trigger.player;
							trigger.player = player;
							player.addSkill('scqhPcr_biyu_tianxiang2');
						},
					},
					tianxiang2: {
						forced: true,
						charlotte: true,
						trigger: {
							player: ['damageAfter', 'damageCancelled', 'damageZero'],
						},
						content() {
							var target = trigger.scqhPcr_biyu;
							if (target) {
								var dhp = target.getDamagedHp();
								if (dhp) player.draw(dhp);
							}
							player.removeSkill(event.name);
						},
					},
					tianxiang3: {
						forced: true,
						charlotte: true,
						trigger: {
							player: 'changeHujiaEnd',
						},
						filter(trigger, player) {
							return player.hujia <= 0;
						},
						content() {
							player.removeSkill('scqhPcr_biyu_tianxiang');
							player.removeSkill('scqhPcr_biyu_tianxiang3');
						},
					},
					ai: {
						forced: true,
						trigger: {
							global: ['useCardAfter', 'phaseUseAfter'],
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let info = lib.skill.scqhPcr_biyu || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var next = game.createEvent('scqhPcr_biyu');
							next.player = player;
							next.setContent(lib.skill.scqhPcr_biyu.clickableContent);
						},
					},
				},
			},
			scqhPcr_qiyu: {
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
					global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				logTarget(trigger, player) {
					var targets = game.filterPlayer((current) => {
						if (current == player || player.scqh_inCurrentTarget(current)) {
							var evt = trigger.getl(current);
							if (!evt) return false;
							if (evt.es && evt.es.length) return true;
							if (!evt.cards2 || !evt.cards2.length) return false;
							var equips = evt.cards2.filter((card) => {
								return get.type(card) === 'equip';
							});
							if (equips.length) return true;
							return false;
						}
						return false;
					});
					return targets;
				},
				filter(trigger, player) {
					var evt = trigger.parent;
					if (evt && evt.name === 'useCard') return false;
					var targets = lib.skill.scqhPcr_qiyu.logTarget(trigger, player);
					return targets.length;
				},
				content() {
					var targets = lib.skill.scqhPcr_qiyu.logTarget(trigger, player);
					for (var current of targets) {
						var next = game.createEvent('scqhPcr_qiyu');
						next.player = player;
						next.target = current;
						next.setContent(lib.skill.scqhPcr_qiyu.qiyu);
					}
				},
				qiyu() {
					'step 0';
					var next = player.chooseBool();
					next.set('prompt', get.prompt2(event.name, target));
					next.set('target', target);
					next.set('ai', function () {
						var player = _status.event.player;
						var target = _status.event.target;
						var att = get.attitude(player, target);
						return att > 0;
					});
					('step 1');
					if (result.bool) player.changeZhuanhuanji('scqhPcr_qiyu');
					else event.finish();
					('step 2');
					var list = [];
					if (target.hp < target.maxHp) list.add('回复一点体力');
					list.add('摸两张牌');
					if (list.length > 1) {
						var next = target.chooseControl(list);
						next.set('ai', function () {
							return 0;
						});
					} else
						event._result = {
							control: list[0],
						};
					('step 3');
					var str = result.control || '';
					if (str.includes('回复')) target.recover();
					else target.draw(2);
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
				group: ['scqhPcr_qiyu_renwang', 'scqhPcr_qiyu_baiyin'],
				subSkill: {
					renwang: {
						name: '仁王盾',
						audio: 'renwang_skill',
						inherit: 'renwang_skill',
						filter(trigger, player) {
							if (!lib.skill.renwang_skill.filter(trigger, player)) return false;
							var storage = player.storage.scqhPcr_qiyu || false;
							return !storage;
						},
						ai: {
							effect: {
								target(card, player, target) {
									var storage = player.storage.scqhPcr_qiyu || false;
									if (storage) return;
									return lib.skill.renwang_skill.ai.effect.target(card, player, target);
								},
							},
						},
					},
					baiyin: {
						name: '白银狮子',
						audio: 'baiyin_skill',
						inherit: 'baiyin_skill',
						filter(trigger, player) {
							if (!lib.skill.baiyin_skill.filter(trigger, player)) return false;
							var storage = player.storage.scqhPcr_qiyu || false;
							return storage;
						},
						ai: {
							filterDamage: true,
							skillTagFilter(player, tag, arg) {
								var storage = player.storage.scqhPcr_qiyu || false;
								if (!storage) return;
								return lib.skill.baiyin_skill.ai.skillTagFilter(player, tag, arg);
							},
						},
					},
				},
			},
			scqhPcr_kuijia: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					if (!player.scqh_inCurrentTarget(target)) return false;
					if (!target.countCards('he')) {
						var card = {
							name: 'sha',
							scqhPcr_kuijia: true,
						};
						if (!player.canUse(card, target, false)) return false;
					}
					return true;
				},
				content() {
					'step 0';
					var count = target.countCards('e', (card) => get.type(card) == 'equip') || 1;
					event.count = count;
					var next = target.chooseToDiscard(count, 'he', function (card) {
						return get.type(card) == 'equip';
					});
					var prompt = '请弃置';
					prompt += get.cnNumber(count);
					prompt += '张装备牌,否则';
					prompt += get.translation(player);
					prompt += '视为对你使用';
					prompt += get.cnNumber(count);
					prompt += '张无视防具的【杀】';
					next.set('prompt', prompt);
					next.set('ai', function (card) {
						var player = _status.event.player;
						var value = get.value(card, player);
						return 7 - value;
					});
					('step 1');
					if (!result.bool) {
						for (var i = 0; i < event.count; i++) {
							var card = {
								name: 'sha',
								scqhPcr_kuijia: true,
							};
							if (player.canUse(card, target, false)) {
								player.useCard(card, target, false);
							}
						}
					}
				},
				ai: {
					unequip: true,
					skillTagFilter(player, tag, arg) {
						if (!tag || !arg || !arg.card) return;
						if (tag === 'unequip' && arg.card.name === 'sha') {
							if (arg && arg.card.scqhPcr_kuijia) return true;
						}
						return false;
					},
					order(item, player) {
						return get.order({ name: 'sha' }, player) + 1;
					},
					result: {
						target(player, target) {
							let card = {
								name: 'sha',
								scqhPcr_kuijia: true,
							};
							let att = get.attitude(player, target);
							let eff = get.effect(target, card, player, player);
							return -att;
						},
					},
				},
			},
			scqhPcr_gouyue: {
				audio: 4,
				init(player, skill) {
					player.scqh_InitShunfaji(skill);
					player.scqh_InitStatus();
				},
				scqh_Shunfaji: true,
				scqh_UB: true,
				forced: true,
				clickable(player) {
					player.scqh_UseShunfaji();
				},
				clickableFilter(player) {
					if (player.hasSkill('scqhPcr_mode2')) return false;
					return player.scqh_LookStatus().tp >= 1000;
				},
				clickableContent() {
					'step 0';
					var next = player.chooseTarget(function (card, player, target) {
						if (target == player) return false;
						let dist = get.distance(player, target);
						if (dist > 1) {
							var hasTarget = game.hasPlayer(function (current) {
								return current != player && get.distance(player, current) < dist;
							});
							if (hasTarget) return false;
						}
						return true;
					});
					next.set('prompt', '请选择【' + get.translation(event.name) + '】的目标');
					next.set('prompt2', get.translation(event.name + '_info'));
					next.set('ai', function (target) {
						let player = _status.event.player;
						let att = get.attitude(player, target);
						return -att;
					});
					('step 1');
					var target = (result.targets || [])[0] || false;
					if (target) {
						var targets = game.filterPlayer((current) => {
							if (current == player) return false;
							if (target == current) return true;
							return target.scqh_inCurrentTarget(current);
						});
						event.targets = targets;
						player.scqh_changeStatus('tp', -1000);
						player.scqh_ubAnimation(event.name);
					} else event.finish();
					('step 2');
					var targets = event.targets;
					var card = {
						name: 'sha',
					};
					var shaTarget = targets.filter((current) => {
						return player.canUse(card, current, false);
					});
					if (shaTarget.length) {
						var juexing = player.storage.scqhPcr_youtai || false;
						var skillname = 'scqhPcr_gouyue_' + juexing;
						game.trySkillAudio(skillname, player, true);
						var next = player.useCard(card, shaTarget, false);
						next.audio = false;
					}
					if (targets.length) player.recover(targets.length);
				},
				group: ['scqhPcr_gouyue_ai'],
				subSkill: {
					false: {
						audio: 1,
					},
					true: {
						audio: 1,
					},
					ai: {
						forced: true,
						trigger: {
							global: ['useCardAfter', 'phaseUseAfter'],
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let info = lib.skill.scqhPcr_gouyue || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var next = game.createEvent('scqhPcr_gouyue');
							next.player = player;
							next.setContent(lib.skill.scqhPcr_gouyue.clickableContent);
						},
					},
				},
			},
			scqhPcr_hongxing: {
				audio: 2,
				zhuanhuanji: true,
				mark: true,
				marktext: '☯',
				intro: {
					content: '转换技',
				},
				enable: 'chooseToUse',
				usable: 2,
				viewAs: {
					name: 'juedou',
					scqhPcr_hongxing: true,
				},
				filterCard: () => false,
				selectCard: -1,
				log: false,
				mod: {
					playerEnabled(card, player, target) {
						if (card.name !== 'juedou') return;
						if (!card.scqhPcr_hongxing) return;
						if (!player.scqh_inCurrentTarget(target)) return false;
					},
					selectTarget(card, player, range) {
						if (card.name !== 'juedou') return;
						if (!card.scqhPcr_hongxing) return;
						var storage = player.storage.scqhPcr_hongxing || false;
						if (storage) range[1] = -1;
					},
				},
				precontent() {
					'step 0';
					player.changeZhuanhuanji('scqhPcr_hongxing');
					player.loseHp();
					event.forceDie = true;
					('step 1');
					if (player.isDead()) {
						player.useResult(event.result, event.parent).forceDie = true;
					}
				},
				group: ['scqhPcr_hongxing_self'],
				subSkill: {
					self: {
						forced: true,
						trigger: {
							player: 'changeHpBefore',
						},
						filter(trigger, player) {
							if (trigger.num >= 0) return false;
							if (trigger.parent.name !== 'damage') return false;
							var evt = trigger.getParent(2);
							return evt.skill && evt.skill === 'scqhPcr_hongxing' && evt.player === player;
						},
						content() {
							trigger.cancel();
							player.tempBanSkill('scqhPcr_hongxing', { global: 'phaseEnd' });
						},
					},
				},
			},
			scqhPcr_xueshi: {
				derivation: ['scqhPcr_xueshisub'],
				audio: 2,
				clanSkill: true,
				forced: true,
				trigger: {
					source: 'damageSource',
				},
				logTarget: 'player',
				filter(trigger, player) {
					if (get.distance(trigger.source, trigger.player) > 1) return false;
					return trigger.source.hasClan('血族') && !trigger.player.hasClan('血族');
				},
				content() {
					'step 0';
					var choice = false;
					if (
						player.isDamaged() &&
						get.recoverEffect(player) > 0 &&
						player.countCards('hs', function (card) {
							return card.name == 'sha' && player.hasValueTarget(card);
						}) >= player.getCardUsable('sha')
					) {
						choice = 'recover_hp';
					} else {
						choice = 'draw_card';
					}
					var list = [];
					var prompt = '你可以摸一张牌';
					list.add('draw_card');
					if (player.isDamaged()) {
						list.add('recover_hp');
						prompt += '或回复一点体力';
					}
					list.add('cancel2');
					var next = player.chooseControl(list);
					next.set('prompt', get.prompt(event.name));
					next.set('prompt2', prompt);
					next.set('choice', choice);
					next.set('ai', function () {
						return _status.event.choice;
					});
					next.setHiddenSkill(event.name);
					('step 1');
					var control = result.control || 'cancel2';
					if (control === 'cancel2') {
						event.finish();
						return;
					} else {
						if (control === 'draw_card') player.draw();
						else player.recover();
					}
					var bool = true;
					var storage = trigger.player.storage.scqhPcr_xueshisub || false;
					if (storage && storage.isIn()) bool = false;
					if (trigger.num <= 1) bool = false;
					if (trigger.player.isIn() && bool) {
						var next = player.chooseBool();
						next.set('prompt', '是否让' + get.translation(trigger.player) + '成为【血侍】？');
						next.set('ai', function () {
							return _status.event.choice;
						});
					} else event.finish();
					('step 2');
					if (result && result.bool) {
						player.line(trigger.player);
						var skillname = 'scqhPcr_xueshi_juexing';
						game.trySkillAudio(skillname, player, true);
						trigger.player.say('啊————————!');
						game.broadcastAll(
							function (target, player) {
								var skill = 'scqhPcr_xueshisub';
								if (!target.hasSkill(skill)) target.addSkill(skill);
								target.storage[skill] = player;
								if (!target.node[skill]) {
									var nodejiu = ui.create.div('.playerjiu', target.node.avatar);
									nodejiu.style.background = 'rgba(225, 165, 0, 0.2)';
									target.node[skill] = nodejiu;
								}
								var fj = document.createElement('img');
								fj.src = 'extension/' + lib.scqhExtension + '/skin/mark/xueshouyin.png';
								fj.style.cssText = 'pointer-events:none';
								fj.style.display = 'block';
								fj.style.position = 'absolute';
								fj.classList.add('血族血手印');
								fj.style.top = '0px';
								fj.style.left = '-20px';
								fj.style.height = '180px';
								fj.style.width = '150px';
								fj.style.zIndex = '98';
								target.appendChild(fj);
								setTimeout(function () {
									var list = [];
									list.addArray(game.players);
									list.addArray(game.dead);
									for (var current of list) {
										var fk = current.getElementsByClassName('血族血手印');
										if (fk[0]) {
											fk[0].parentNode.removeChild(fk[0]);
										}
									}
								}, 2000);
							},
							trigger.player,
							player
						);
					}
				},
				subSkill: {
					juexing: {
						audio: 1,
					},
				},
			},
			scqhPcr_xueshisub: {
				forced: true,
				onremove(player, skill) {
					if (player.node[skill]) {
						player.node[skill].delete();
						delete player.node[skill];
					}
					delete player.storage[skill];
				},
				group: ['scqhPcr_xueshisub_yingzi'],
				subSkill: {
					yingzi: {
						name: '英姿',
						inherit: 'reyingzi',
					},
				},
				trigger: {
					player: 'useCardToPlayered',
				},
				filter(trigger, player) {
					var list = ['sha', 'juedou'];
					if (!list.includes(trigger.card.name)) return false;
					var storage = trigger.player.storage.scqhPcr_xueshisub || false;
					return storage && storage === trigger.target;
				},
				async content(event, trigger, player) {
					const eff = get.effect(trigger.target, trigger.card, trigger.player, trigger.player);
					const next = trigger.player.chooseToDiscard('he', function (card) {
						return get.type(card) == 'basic';
					});
					next.set('eff', eff);
					next.set('ai', function (card) {
						const eff = _status.event.eff;
						if (eff > 0) {
							return 10 - get.value(card);
						}
						return 0;
					});
					next.set('prompt', '血侍:弃置一张基本牌并流失一点体力,否则' + get.translation(trigger.card) + '对' + get.translation(trigger.target) + '无效');
					const result = await next.forResult();
					if (result.bool) {
						trigger.player.loseHp();
					} else {
						trigger.parent.excluded.add(trigger.target);
					}
				},
				ai: {
					effect: {
						player(card, player, target) {
							var list = ['sha', 'juedou'];
							if (!list.includes(card.name)) return;
							var storage = player.storage.scqhPcr_xueshisub || false;
							if (storage && storage === target) {
								var hs = player.getCards('he', function (cardx) {
									if (get.type(cardx) !== 'basic') return false;
									return lib.filter.cardDiscardable(cardx, player);
								});
								if (!hs.length || player.hp <= 1) return 'zerotarget';
							}
						},
					},
				},
			},
			scqhPcr_youtai: {
				audio: 3,
				derivation: ['scqhPcr_tongye'],
				juexingji: true,
				forced: true,
				trigger: {
					player: 'changeHp',
				},
				filter(trigger, player) {
					if (trigger.num <= 0) return false;
					if (player.hp < player.maxHp) return false;
					if (player.countCards('h') < player.maxHp) return false;
					if (player.name1 && player.name1 == 'scqhPcr_yiliya2') return false;
					if (player.name2 && player.name2 == 'scqhPcr_yiliya2') return false;
					if (player.name1 && player.name1 == 'scqhPcr_yiliya') return true;
					if (player.name2 && player.name2 == 'scqhPcr_yiliya') return true;
					return false;
				},
				content() {
					'step 0';
					player.awakenSkill(event.name);
					player.storage.scqhPcr_youtai = true;
					('step 1');
					player.reinitCharacter('scqhPcr_yiliya', 'scqhPcr_yiliya2');
				},
			},
			scqhPcr_tongye: {
				audio: 2,
				chargeSkill: true,
				group: ['scqhPcr_tongye_charge', 'scqhPcr_tongye_damage', 'scqhPcr_tongye_source'],
				subSkill: {
					charge: {
						audio: 'scqhPcr_tongye',
						forced: true,
						trigger: {
							player: 'recoverAfter',
						},
						filter(trigger, player) {
							return player.countMark('charge') < 4;
						},
						content() {
							var num = Math.max(1, Math.min(trigger.num, 4 - player.countMark('charge')));
							player.addMark('charge', num, false);
						},
					},
					damage: {
						audio: 'scqhPcr_tongye',
						forced: true,
						trigger: {
							player: 'changeHpBegin',
						},
						filter(trigger, player) {
							if (trigger.num >= 0) return false;
							if (!player.countMark('charge')) return false;
							if (trigger.parent.name !== 'damage') return false;
							var num = trigger.parent.num || 1;
							var hp = player.hp;
							if (!player.hasSkillTag('nohujia') && player.hujia > 0) hp += player.hujia;
							return num >= hp || num > 1;
						},
						prompt2(trigger, player) {
							return '是否消耗一点蓄力值抵消一点变化';
						},
						check() {
							return 1;
						},
						content() {
							trigger.num++;
							player.removeMark('charge', 1, false);
						},
					},
					source: {
						audio: 4,
						trigger: {
							source: 'damageBegin1',
						},
						logTarget: 'player',
						filter(trigger, player) {
							if (!player.countMark('charge')) return false;
							return trigger.player !== player;
						},
						prompt2(trigger, player) {
							return '是否消耗一点蓄力值增加一点伤害';
						},
						check() {
							return 1;
						},
						content() {
							trigger.num++;
							player.removeMark('charge', 1, false);
						},
					},
				},
			},
			scqhPcr_mieguang: {
				audio: 3,
				init(player, skill) {
					player.scqh_InitShunfaji(skill);
					player.scqh_InitStatus();
				},
				scqh_UB: true,
				forced: true,
				clickable(player) {
					player.scqh_UseShunfaji();
				},
				clickableFilter(player) {
					var targets = game.filterPlayer((current) => current != player);
					if (!targets.length) return false;
					if (player.hasSkill('scqhPcr_mode2')) return false;
					return player.scqh_LookStatus().tp >= 1000;
				},
				clickableContent() {
					'step 0';
					var cardx = {
						name: 'sha',
					};
					var next = player.chooseTarget([0, Infinity], function (card, player, target) {
						if (player === target) return false;
						var cardx = _status.event.cardx;
						return player.canUse(cardx, target, false);
					});
					next.set('prompt', get.prompt2(event.name));
					next.set('cardx', cardx);
					next.set('ai', function (target) {
						var cardx = _status.event.cardx;
						var player = _status.event.player;
						var att = get.attitude(player, target);
						var eff = get.effect(target, cardx, player, player);
						return att < 0 && eff > 0;
					});
					('step 1');
					if (result && result.bool) {
						var players = game.filterPlayer((current) => current != player);
						player.$skill('霸曈天星', 'legend', 'metal');
						player.scqh_changeStatus('tp', -1000);
						if (lib.skill.scqhPcr_mieguang_fengyin) {
							for (var target of players) {
								target.addTempSkill('scqhPcr_mieguang_fengyin');
							}
						}
						var cardx = {
							name: 'sha',
						};
						var targets = result.targets || [];
						if (targets.length) player.useCard(cardx, targets, false).audio = false;
					}
				},
				group: ['scqhPcr_mieguang_ai'],
				subSkill: {
					fengyin: {
						charlotte: true,
						mod: {
							cardname(card, player) {
								if (lib.card.ying) return 'ying';
							},
						},
						init(player, skill) {
							player.addSkillBlocker(skill);
						},
						onremove(player, skill) {
							player.removeSkillBlocker(skill);
						},
						skillBlocker(skill, player) {
							return !lib.skill[skill].persevereSkill && !lib.skill[skill].charlotte && !get.is.locked(skill, player);
						},
						mark: true,
						intro: {
							content(storage, player, skill) {
								var list = player.getSkills(null, false, false).filter(function (i) {
									return lib.skill.scqhPcr_mieguang_fengyin.skillBlocker(i, player);
								});
								var prompt = '';
								prompt += '●护甲失效';
								prompt += '<br/>●所有手牌视为【影】';
								prompt += '<br/>●失效技能:';
								prompt += list.length ? get.translation(list) : '无';
								return prompt;
							},
						},
						ai: {
							nohujia: true,
						},
					},
					ai: {
						forced: true,
						trigger: {
							global: ['useCardAfter', 'phaseUseAfter'],
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let info = lib.skill.scqhPcr_mieguang || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var next = game.createEvent('scqhPcr_mieguang');
							next.player = player;
							next.setContent(lib.skill.scqhPcr_mieguang.clickableContent);
						},
					},
				},
			},
			scqhPcr_weixiang: {
				audio: 3,
				zhuanhuanji: true,
				mark: true,
				marktext: '☯',
				intro: {
					content(storage) {
						return storage ? '阴' : '阳';
					},
				},
				enable: ['chooseToRespond', 'chooseToUse'],
				filterCard: true,
				position: 'hes',
				viewAs: {
					name: 'sha',
					scqhPcr_weixiang: true,
				},
				precontent() {
					player.changeZhuanhuanji('scqhPcr_weixiang');
				},
				mod: {
					cardUsable(card, player, num) {
						var storage = player.storage.scqhPcr_weixiang || false;
						if (!storage) return Infinity;
					},
					attackRange(player, num) {
						var storage = player.storage.scqhPcr_weixiang || false;
						if (storage) return Infinity;
					},
					targetInRange(card, player, target) {
						var storage = player.storage.scqhPcr_weixiang || false;
						if (card.name != 'sha') return;
						if (!storage || card.scqhPcr_weixiang) {
							if (player.scqh_inCurrentTarget(target)) return true;
						}
					},
					selectTarget(card, player, range) {
						var storage = player.storage.scqhPcr_weixiang || false;
						if (card.name != 'sha') return;
						if (!storage || card.scqhPcr_weixiang) {
							range[1] = -1;
							range[0] = -1;
						}
					},
				},
				group: ['scqhPcr_weixiang_chongzhen', 'scqhPcr_weixiang_audio'],
				subSkill: {
					audio: {
						forced: true,
						trigger: {
							player: 'useCard1',
						},
						filter(trigger, player) {
							if (player.countUsed('sha', true) <= 1) return false;
							if (trigger.audioed) return false;
							if (trigger.card.name != 'sha') return false;
							if (trigger.parent.type !== 'phase') return false;
							if (trigger.skill && trigger.skill === 'scqhPcr_weixiang') return false;
							var storage = player.storage.scqhPcr_weixiang || false;
							return !storage;
						},
						content() {
							trigger.audioed = true;
						},
					},
					chongzhen: {
						forced: true,
						trigger: {
							player: ['useCard', 'respond'],
						},
						filter(trigger, player) {
							var targets = lib.skill.scqhPcr_weixiang_chongzhen.logTarget(trigger, player);
							if (!targets.length) return false;
							return trigger.skill && trigger.skill === 'scqhPcr_weixiang';
						},
						logTarget(trigger, player) {
							var current = [];
							if (trigger.name == 'respond') {
								if (trigger.source) current.add(trigger.source);
							} else if (trigger.card.name == 'sha') {
								var targets = trigger.targets || [];
								if (targets.length) current.addArray(targets);
							} else if (trigger.respondTo && trigger.respondTo[0]) {
								current.add(trigger.respondTo[0]);
							}
							return current.filter((target) => {
								return target.countGainableCards(player, 'h');
							});
						},
						content() {
							var targets = lib.skill.scqhPcr_weixiang_chongzhen.logTarget(trigger, player);
							for (var target of targets) {
								player.gainPlayerCard(target, 'h', true);
							}
						},
					},
				},
			},
			scqhPcr_jianzang: {
				audio: 2,
				forced: true,
				trigger: {
					global: ['useCardToPlayered', 'useCardToTargeted'],
				},
				filter(trigger, player) {
					if (!player.countCards('he')) return false;
					if (!trigger.card || trigger.card.name !== 'sha') return false;
					var current = false;
					if (trigger.name === 'useCardToPlayered') current = trigger.player;
					if (trigger.name === 'useCardToTargeted') current = trigger.target;
					return current && player.scqh_inCurrentTarget(current);
				},
				content() {
					'step 0';
					var prompt = '';
					prompt += get.translation(trigger.player);
					if (trigger.player == player) prompt += '(你)';
					prompt += '对';
					prompt += get.translation(trigger.target);
					if (trigger.target == player) prompt += '(你)';
					prompt += '使用了';
					prompt += get.translation(trigger.card);
					prompt += ',你可以弃置一张:';
					prompt += '<br/>';
					prompt += '●红色牌,令';
					prompt += get.translation(trigger.target);
					if (trigger.target == player) prompt += '(你)';
					prompt += '需要额外使用一张【闪】才能抵消此牌';
					prompt += '<br/>';
					prompt += '●黑色牌,防止此牌对';
					prompt += get.translation(trigger.target);
					if (trigger.target == player) prompt += '(你)';
					prompt += '生效';
					var bool = trigger.parent.excluded.includes(trigger.target);
					if (bool) prompt += '(已经在白名单中,不需要保护)';
					var next = player.chooseToDiscard('he', function (card) {
						return true;
					});
					next.set('prompt', get.prompt(event.name));
					next.set('prompt2', prompt);
					next.set('eff', get.effect(trigger.target, trigger.card, trigger.player, player));
					next.set('bool', bool);
					next.set('ai', function (card) {
						var eff = _status.event.eff;
						var bool = _status.event.bool;
						var player = _status.event.player;
						var color = get.color(card, player);
						var value = get.value(card, player);
						if (eff < 0 && color === 'black') {
							if (!bool) return 7 - value;
						}
						if (eff > 0 && color === 'red') {
							if (value < 1) return 7 - value;
						}
						return 0;
					});
					('step 1');
					if (result.cards?.length) {
						var card = result.cards[0];
						var color = get.color(card);
						if (color === 'red') {
							var id = trigger.target.playerid;
							var map = trigger.parent.customArgs;
							if (!map[id]) map[id] = {};
							if (typeof map[id].shanRequired != 'number') {
								map[id].shanRequired = 1;
							}
							map[id].shanRequired += 1;
							trigger.parent.customArgs = map;
						}
						if (color === 'black') {
							trigger.parent.excluded.add(trigger.target);
						}
					}
				},
			},
			scqhPcr_huangcai: {
				audio: 2,
				forced: true,
				trigger: {
					source: 'damageBegin1',
				},
				filter(trigger, player) {
					if (player === trigger.player) return false;
					if (trigger.num >= trigger.player.hujia + trigger.player.hp) return false;
					return true;
				},
				logTarget: 'player',
				content() {
					trigger.num += 1;
					trigger.scqhPcr_huangcai = player.playerid;
				},
				ai: {
					damageBonus: true,
				},
				group: ['scqhPcr_huangcai_dying'],
				subSkill: {
					dying: {
						audio: 2,
						forced: true,
						trigger: {
							global: 'dying',
						},
						filter(trigger, player) {
							var evt = trigger.getParent('damage');
							if (!evt || evt.name != 'damage') return false;
							var id = evt.scqhPcr_huangcai;
							return id && id === player.playerid;
						},
						content() {
							'step 0';
							var next = trigger.player.chooseBool();
							var prompt = '是否回复一点体力,并且令';
							prompt += get.translation(player);
							prompt += '摸一张牌？';
							next.set('prompt', prompt);
							next.set('ai', function () {
								var player = _status.event.player;
								return 1;
							});
							('step 1');
							if (result.bool) {
								trigger.player.recover();
								player.draw();
							}
						},
					},
				},
			},
			scqhPcr_chixin: {
				audio: 3,
				init(player, skill) {
					player.scqh_InitShunfaji(skill);
					player.scqh_InitStatus();
				},
				onremove(player, skill) {
					var storage = player.storage.scqh_InitShunfaji || [];
					if (storage.includes(skill)) {
						player.storage.scqh_InitShunfaji.remove(skill);
					}
				},
				scqh_UB: true,
				forced: true,
				clickable(player) {
					player.scqh_UseShunfaji();
				},
				clickableFilter(player) {
					var players = game.filterPlayer((current) => {
						return player.scqh_inCurrentTarget(current);
					});
					if (!players.length) return false;
					if (player.hasSkill('scqhPcr_mode2')) return false;
					return player.scqh_LookStatus().tp >= 1000;
				},
				clickableContent() {
					'step 0';
					var cardx = {
						name: 'sha',
						nature: 'fire',
					};
					var players = game.filterPlayer((current) => {
						if (!player.canUse(cardx, current, false)) return false;
						return player.scqh_inCurrentTarget(current);
					});
					if (players.length) {
						var next = player.chooseTarget(function (card, player, target) {
							var players = _status.event.players;
							return players.includes(target);
						});
						next.set('prompt', get.prompt2(event.name));
						next.set('players', players);
						next.set('cardx', cardx);
						next.set('ai', function (target) {
							let player = _status.event.player;
							let cardx = _status.event.cardx;
							let att = get.attitude(player, target);
							let eff = get.effect(target, cardx, player, player);
							return att < 0 && eff > 0;
						});
					} else {
						var next = player.chooseBool();
						next.set('prompt', get.prompt2(event.name));
						next.set('ai', function () {
							return 1;
						});
					}
					('step 1');
					if (result && result.bool) {
						player.scqh_changeStatus('tp', -1000);
						player.scqh_ubAnimation(event.name);
						player.addTempSkill('scqhPcr_chixin_end');
						var players = game.filterPlayer((current) => {
							return player.scqh_inCurrentTarget(current);
						});
						if (players.length) player.changeHujia(players.length, null, true);
						var targets = result.targets || [];
						var cardx = {
							name: 'sha',
							nature: 'fire',
						};
						if (targets.length) player.useCard(cardx, targets, false);
					}
				},
				group: ['scqhPcr_chixin_ai'],
				subSkill: {
					end: {
						audio: 2,
						mark: true,
						marktext: '炽',
						intro: {
							content: '回合结束后,你眼前的所有角色受到１点无来源的火焰伤害',
						},
						charlotte: true,
						forced: true,
						forceDie: true,
						trigger: {
							global: 'phaseEnd',
						},
						filter(trigger, player) {
							return true;
						},
						content() {
							player.removeSkill(event.name);
							var players = game.filterPlayer((current) => {
								return player.scqh_inCurrentTarget(current);
							});
							for (var current of players) current.damage('fire', 'nosource');
						},
					},
					ai: {
						forced: true,
						trigger: {
							global: ['useCardAfter', 'phaseUseAfter'],
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let info = lib.skill.scqhPcr_chixin || {};
							if (!info || !info.clickableContent) return false;
							if (info.clickableFilter && !info.clickableFilter(player)) return false;
							return _status.auto || !player.isUnderControl(true);
						},
						content() {
							var next = game.createEvent('scqhPcr_chixin');
							next.player = player;
							next.setContent(lib.skill.scqhPcr_chixin.clickableContent);
						},
					},
				},
			},
			scqhPcr_qianjin: {
				audio: 2,
				mark: true,
				marktext: '金',
				intro: {
					name: false,
					markcount(storage, player) {
						let list = lib.skill.scqhPcr_qianjin.getJinMark(player);
						return list.length;
					},
					content(storage, player) {
						let list = lib.skill.scqhPcr_qianjin.getJinMark(player);
						let prompt = '';
						for (let mark of list) {
							prompt += get.translation(mark);
							prompt += ':';
							prompt += player.countMark(mark);
							prompt += '<br/>';
						}
						return prompt;
					},
				},
				init(player, skill) {
					let list = lib.skill.scqhPcr_qianjin.derivation || [];
					for (let mark of list) {
						player.addMark(mark, 1, false);
						player.unmarkSkill(mark);
					}
				},
				getJinMark(player) {
					let list = lib.skill.scqhPcr_qianjin.derivation || [];
					return list.filter((mark) => player.hasMark(mark));
				},
				getJinSkill(player) {
					let list = lib.skill.scqhPcr_qianjin.derivation || [];
					return list.filter((mark) => player.hasSkill(mark));
				},
				getTargets(player) {
					return game.filterPlayer((current) => {
						let list = lib.skill.scqhPcr_qianjin.derivation || [];
						for (let mark of list) {
							if (player.countMark(mark)) {
								if (!current.hasSkill(mark)) return true;
							}
						}
						return false;
					});
				},
				derivation: ['scqhPcr_qianjin_wushi', 'scqhPcr_qianjin_jinmi', 'scqhPcr_qianjin_guxiong', 'scqhPcr_qianjin_tongshen', 'scqhPcr_qianjin_yongbi', 'scqhPcr_qianjin_houren'],
				forced: true,
				trigger: {
					player: ['phaseZhunbeiBegin'],
				},
				filter(trigger, player) {
					let gamers = lib.skill.scqhPcr_qianjin.getTargets(player);
					return gamers.length;
				},
				content() {
					'step 0';
					var gamers = lib.skill.scqhPcr_qianjin.getTargets(player);
					if (gamers.length) {
						var next = player.chooseTarget(true, function (card, player, target) {
							let gamers = _status.event.gamers;
							return gamers.includes(target);
						});
						next.set('prompt', '请选择【' + get.translation(event.name) + '】的目标');
						next.set('gamers', gamers);
						next.set('ai', (target) => {
							let player = _status.event.player;
							let canAtt = function (player, target, mark) {
								return player.hasMark(mark) && !target.hasSkill(mark);
							};
							let att = get.attitude(player, target);
							if (att > 0) {
								if (canAtt(player, target, 'scqhPcr_qianjin_wushi')) return att + 10;
								if (canAtt(player, target, 'scqhPcr_qianjin_tongshen')) return att + 6;
								if (canAtt(player, target, 'scqhPcr_qianjin_houren')) {
									if (target.hp < target.maxHp) return att + 8;
								}
								return 0;
							} else {
								if (canAtt(player, target, 'scqhPcr_qianjin_jinmi')) return -1 * att + 9;
								if (canAtt(player, target, 'scqhPcr_qianjin_guxiong')) return -1 * att + 7;
								if (canAtt(player, target, 'scqhPcr_qianjin_yongbi')) return -1 * att + 5;
								return 0;
							}
							return 0;
						});
					} else {
						event._result = {
							bool: true,
							targets: gamers,
						};
					}
					('step 1');
					var target = (result.targets || [])[0] || false;
					event.target = target;
					if (target) {
						var list = lib.skill.scqhPcr_qianjin.getJinMark(player);
						var choiceList = list.map((mark) => {
							return '<div class="skill">【' + get.translation(mark) + '】</div><div>' + get.skillInfoTranslation(mark, player) + '</div>';
						});
						var next = player.chooseControl(list);
						next.set('choiceList', choiceList);
						next.set('displayIndex', false);
						next.set('prompt', '选择令' + get.translation(target) + '获得的「金」');
						next.set('target', target);
						next.set('ai', () => {
							let controls = _status.event.controls;
							let player = _status.event.player;
							let target = _status.event.target;
							let att = get.attitude(player, target);
							if (att > 0) {
								if (controls.includes('scqhPcr_qianjin_wushi')) return att + 10;
								if (controls.includes('scqhPcr_qianjin_tongshen')) return att + 6;
								if (controls.includes('scqhPcr_qianjin_houren')) {
									if (target.hp < target.maxHp) return att + 8;
								}
							} else {
								if (controls.includes('scqhPcr_qianjin_jinmi')) return -1 * att + 9;
								if (controls.includes('scqhPcr_qianjin_guxiong')) return -1 * att + 7;
								if (controls.includes('scqhPcr_qianjin_yongbi')) return -1 * att + 5;
							}
							return controls.randomGet();
						});
					} else event.finish();
					('step 2');
					var kane = result.control || false;
					if (kane) {
						player.popup(kane, 'metal');
						player.removeMark(kane, 1, false);
						event.target.addTempSkill(kane, { player: 'phaseAfter' });
						if (player != event.target) player.unmarkSkill(kane);
					}
				},
				group: ['scqhPcr_qianjin_gain'],
				subSkill: {
					gain: {
						forced: true,
						trigger: {
							player: 'drawAfter',
						},
						filter(trigger, player) {
							var evt = trigger.getParent('phaseDraw');
							return !evt || evt.name != 'phaseDraw';
						},
						content() {
							let list = lib.skill.scqhPcr_qianjin.derivation || [];
							if (list.length) {
								let mark = list.randomGet();
								player.addMark(mark, 1, false);
								player.unmarkSkill(mark);
							}
						},
					},
					wushi: {
						charlotte: true,
						forced: true,
						trigger: {
							player: 'phaseDrawBegin2',
						},
						content() {
							trigger.num += 4;
						},
						mod: {
							cardUsable(card, player, num) {
								if (card.name == 'sha') return num + 1;
							},
						},
						mark: true,
						intro: {
							name: '金(膴仕)',
							name2: '金(膴仕)',
							content(storage, player, skill) {
								return get.translation(skill + '_info');
							},
							markcount() {
								return 0;
							},
						},
					},
					jinmi: {
						charlotte: true,
						forced: true,
						trigger: {
							player: ['phaseUseBefore', 'phaseDiscardBefore'],
						},
						content() {
							trigger.cancel();
						},
						mark: true,
						intro: {
							name: '金(金迷)',
							name2: '金(金迷)',
							content(storage, player, skill) {
								return get.translation(skill + '_info');
							},
							markcount() {
								return 0;
							},
						},
					},
					guxiong: {
						charlotte: true,
						forced: true,
						trigger: {
							player: 'phaseUseBegin',
						},
						content() {
							player.loseHp();
						},
						mod: {
							maxHandcard(player, num) {
								return num - 3;
							},
						},
						mark: true,
						intro: {
							name: '金(贾凶)',
							name2: '金(贾凶)',
							content(storage, player, skill) {
								return get.translation(skill + '_info');
							},
							markcount() {
								return 0;
							},
						},
					},
					tongshen: {
						charlotte: true,
						forced: true,
						trigger: {
							player: 'damageBegin4',
						},
						filter(event, player) {
							return !event.hasNature('thunder');
						},
						content() {
							trigger.cancel();
						},
						mark: true,
						intro: {
							name: '金(通神)',
							name2: '金(通神)',
							content(storage, player, skill) {
								return get.translation(skill + '_info');
							},
							markcount() {
								return 0;
							},
						},
						ai: {
							nofire: true,
							nodamage: true,
							effect: {
								target(card, player, target, current) {
									if (get.tag(card, 'damage') && !get.tag(card, 'thunderDamage')) return [0, 0];
								},
							},
						},
					},
					yongbi: {
						charlotte: true,
						forced: true,
						trigger: {
							player: 'phaseDrawBefore',
						},
						content() {
							trigger.cancel();
						},
						mark: true,
						intro: {
							name: '金(拥蔽)',
							name2: '金(拥蔽)',
							content(storage, player, skill) {
								return get.translation(skill + '_info');
							},
							markcount() {
								return 0;
							},
						},
					},
					houren: {
						charlotte: true,
						forced: true,
						trigger: {
							player: 'phaseEnd',
						},
						content() {
							player.recover(3);
						},
						mark: true,
						intro: {
							name: '金(厚任)',
							name2: '金(厚任)',
							content(storage, player, skill) {
								return get.translation(skill + '_info');
							},
							markcount() {
								return 0;
							},
						},
					},
				},
			},
			scqhPcr_xuanxiao: {
				audio: 2,
				forced: true,
				trigger: {
					player: ['useCard', 'respond'],
				},
				filter(trigger, player) {
					return true;
				},
				content() {
					var storage = player.storage[event.name] || false;
					if (storage) {
						if (storage == trigger.card.name) {
							player.draw();
							event.trigger('scqhPcr_xuanxiao');
						} else {
							player.addTempSkill('scqhPcr_xuanxiao_sha');
							player.addMark('scqhPcr_xuanxiao_sha', 1, false);
						}
					}
					player.storage[event.name] = trigger.card.name;
				},
				mod: {
					maxHandcard(player, num) {
						var storage = player.storage.scqhPcr_xuanxiao || false;
						if (!storage) return;
						player.getCards('h', (card) => {
							if (card.name == storage) card.addGaintag('scqhPcr_xuanxiao');
							else card.removeGaintag('scqhPcr_xuanxiao');
						});
					},
				},
				subSkill: {
					sha: {
						charlotte: true,
						mod: {
							cardUsable(card, player, num) {
								if (card.name == 'sha' && player.hasSkill('scqhPcr_xuanxiao')) {
									return num + player.countMark('scqhPcr_xuanxiao_sha');
								}
							},
						},
					},
				},
			},
		},
		translate: {
			scqhPcr_shuyu: '数域',
			scqhPcr_shuyu_info: '联结技,你可以开启３层「乱数圣域」(可以防止其他角色对你使用的牌生效),你可以视为对一名在你眼前的角色使用一张【杀】(不可响应、伤害+1).',
			scqhPcr_shuanggou: '双构',
			scqhPcr_shuanggou_info: '转换技,出牌阶段限一次,阴:你可以摸一张牌,弃置两张牌;阳:你可以摸两张牌,弃置一张牌;每失去一张牌,便获得１５点技能提速持续１５秒、回复１５０点技能值.',
			scqhPcr_qinghai: '侵骇',
			scqhPcr_qinghai_info: '当你使用牌指定眼前的角色为目标后,你可以将其一张牌扣置于你的武将牌上.任何角色的回合结束后,将以此法扣置的牌交还给原主,若其不在游戏内,则你获得之.',
			scqhPcr_chuanxin: '穿心',
			scqhPcr_chuanxin_info: '联结技,你可以视为对一名在你眼前的角色使用一张【杀】(不可响应、伤害+1).',
			scqhPcr_shuchi: '数痴',
			scqhPcr_shuchi_info: '锁定技,你只能使用牌堆顶的牌进行拼点.',
			scqhPcr_liegong: '烈弓',
			scqhPcr_liegong_info: '当你使用【杀】指定目标后,你可以令此牌额外结算两次.若如此做,你依次与每个目标进行拼点.当此牌对此次拼点赢的角色额外结算时,防止之.',
			scqhPcr_biyu: '壁狱',
			scqhPcr_biyu_info: '联结技,你可以获得Ｘ点护甲(Ｘ为你眼前的角色数),并且直到你失去所有护甲为止,你眼前的角色受到伤害时,你可以将伤害转移给你,你摸Ｙ张牌(Ｙ为其已损失的体力值).',
			scqhPcr_qiyu: '炁愈',
			scqhPcr_qiyu_info: '转换技,你或者你眼前的角色不因使用而失去装备后,你可以令该角色选择一项:●回复一点体力;●摸两张牌.阳:你视为装备着【仁王盾】;阴:你视为装备着【白银狮子】.',
			scqhPcr_kuijia: '溃甲',
			scqhPcr_kuijia_info: '出牌阶段限一次,你可以选择一名眼前的角色,该角色除非弃置Ｘ张装备牌,否则你视为对其依次使用Ｘ张无距离和次数限制且无视防具的【杀】(Ｘ为其装备区里的牌数且至少为一).',
			scqhPcr_gouyue: '钩月',
			scqhPcr_gouyue_info: '联结技,你可以选择一名距离最近的其他角色,视为对其以及其眼前的所有角色使用一张【杀】,你回复Ｘ点体力(Ｘ为这些角色数).',
			scqhPcr_hongxing: '红星',
			scqhPcr_hongxing_info: '转换技,每回合限两次,你可以流失一点体力,阳:视为对眼前的一名角色使用一张【决斗】;阴:视为对眼前的所有角色使用一张【决斗】.当你因此【决斗】而减少体力时,防止之并令此技能于本回合内失效.',
			scqhPcr_xueshi: '血誓',
			scqhPcr_xueshi_info: '宗族技(血族),当你对一名非血族的角色造成伤害后,若你与其的距离为１,你可以回复一点体力或摸一张牌,若此次伤害大于１点,你可以令其获得技能【血侍】并成为其「主」.',
			scqhPcr_xueshisub: '血侍',
			scqhPcr_xueshisub_info: '锁定技,你视为拥有【英姿】;当你使用【杀】或【决斗】指定「主」为目标时,除非你弃置一张基本牌并流失一点体力,否则此牌对其无效.',
			scqhPcr_youtai: '幼态',
			scqhPcr_youtai_info: '觉醒技,当你的体力值变多后,若你的体力值等于体力上限、手牌数不小于体力上限,则把武将牌【伊莉雅·幼】替换成【伊莉亚·御】.',
			scqhPcr_tongye: '统夜',
			scqhPcr_tongye_info: ['蓄力技(０／４),当你因致命伤害或大于１点的伤害而减少体力时,你可以消耗一点蓄力值抵消一点变化;当你对其他角色造成伤害时,你可以消耗一点蓄力值增加一点伤害.', '●蓄力:当你回复体力后,获得等量的蓄力值.'].join('</br>'),
			scqhPcr_mieguang: '灭光',
			scqhPcr_mieguang_info: '联结技,你可以让所有其他角色的非锁定技和护甲失效且所有手牌视为【影】,直到回合结束;并且你可以视为对任意数量的目标角色使用一张无距离和次数限制的【杀】.',
			scqhPcr_weixiang: '伪翔',
			scqhPcr_weixiang_info: ['转换技,你可以将一张牌当做【杀】使用或打出,并且获得对方的一张手牌.你眼前的所有角色均为:', '●<font color=#ffddb9>阳:使用【杀】的目标;你使用牌没有次数限制.</font>', '●<font color=#b0d0e2>阴:以此法使用【杀】的目标;你的攻击范围无限大.</font>'].join('</br>'),
			scqhPcr_jianzang: '减葬',
			scqhPcr_jianzang_info: '当一名在你眼前的角色使用【杀】指定目标后,或成为【杀】的目标后,你可以弃置一张:●红色牌,令该目标角色需要额外使用一张【闪】才能抵消此【杀】;●黑色牌,防止此【杀】对该目标角色生效.',
			scqhPcr_huangcai: '煌裁',
			scqhPcr_huangcai_info: '锁定技,当你对其他角色造成不致命的伤害时,你对其额外造成一点伤害;当该角色因此次伤害而处于濒死状态时,其可以回复一点体力,你摸一张牌.',
			scqhPcr_chixin: '炽心',
			scqhPcr_chixin_info: '联结技,你可以获得Ｘ点护甲(Ｘ为你眼前的角色数),并且视为对眼前的一名角色使用一张火【杀】;当前回合结束后,你眼前的所有角色受到一点无来源的火焰伤害.',
			scqhPcr_xuanxiao: '喧笑',
			scqhPcr_xuanxiao_info: '锁定技,当你使用或打出牌时,若其牌名与你使用或打出的上一张牌:相同,则你摸一张牌;不同,则你本回合可以额外使用一张【杀】.',
			scqhPcr_qianjin: '千金',
			scqhPcr_qianjin_info: '锁定技,你拥有６枚不同效果的「金」.准备阶段,你需移去一枚「金」并让一名角色获得该效果,直到其回合结束.当你于摸牌阶段之外摸牌后,你随机获得一枚「金」.',
			scqhPcr_qianjin_wushi: '膴仕',
			scqhPcr_qianjin_wushi_info: '摸牌阶段多摸四张牌,且出牌阶段可以多使用一张【杀】',
			scqhPcr_qianjin_jinmi: '金迷',
			scqhPcr_qianjin_jinmi_info: '跳过出牌阶段和弃牌阶段',
			scqhPcr_qianjin_guxiong: '贾凶',
			scqhPcr_qianjin_guxiong_info: '出牌阶段开始时,流失１点体力.手牌上限减３',
			scqhPcr_qianjin_tongshen: '通神',
			scqhPcr_qianjin_tongshen_info: '防止受到雷属性以外的伤害',
			scqhPcr_qianjin_yongbi: '拥蔽',
			scqhPcr_qianjin_yongbi_info: '跳过摸牌阶段',
			scqhPcr_qianjin_houren: '厚任',
			scqhPcr_qianjin_houren_info: '回合结束后,回复３点体力',
			scqhPcr_jifeng: '疾风',
			scqhPcr_jifeng_info: '联结技,你可以视为对一名在你眼前的角色使用一张【杀】.',
			scqhPcr_jianyi: '剑意',
			scqhPcr_jianyi_info: '锁定技,当你使用或打出一张牌时,回复１５０点技能值,若此牌的点数是３的倍数,你摸一张牌.',
			scqhPcr_qiling: '启灵',
			scqhPcr_qiling_info: '限定技,出牌阶段,若你使用或打出过至少四种花色的牌,你可以将武将牌「姬塔」替换成「姬塔SIX」.',
			scqhPcr_xinghe: '星河',
			scqhPcr_xinghe_info: '联结技,你可以视为对一名在你眼前的角色使用一张【杀】,将手牌数补充至体力上限(至多为５).',
			scqhPcr_yaoguang: '耀光',
			scqhPcr_yaoguang_info: '你可以将一张牌当做【杀】对一名在你眼前的角色使用,并且回复２００点技能值、令距离１以内的任意名角色回复１００点技能值.',
			scqhPcr_dielang: '叠浪',
			scqhPcr_dielang_info: '锁定技,当你使用或打出一张牌时,回复１５０点技能值;若此牌的点数是３的倍数,你摸一张牌;若你此刻是对眼前的一名角色使用【杀】,则额外结算一次.',
			scqhPcr_shahu: '纱护',
			scqhPcr_shahu_info: '联结技,你可以让包括你在内的任意名角色不会被【杀】以外的方式减少体力,直到回合结束,且当前回合结束后,这些角色依次回复一点体力.',
			scqhPcr_duzhuo: '独酌',
			scqhPcr_duzhuo_info: '转换技,每回合限一次,阳:当一名角色需要使用【酒】时,你可以令其视为使用一张【酒】;阴:当一名角色需要使用【无中生有】时,你可以令其视为使用一张【无中生有】.',
			scqhPcr_jili: '寄篱',
			scqhPcr_jili_info: '当一名其他角色成为其他角色使用非黑色的基本牌或普通锦囊牌的目标时,若其与你的距离为１,你可以也成为此牌的目标.',
			scqhPcr_juesheng: '决胜',
			scqhPcr_juesheng_info: '联结技,你可以视为对一名其他角色使用一张无距离和次数限制的刺【杀】,若其是手牌数最多的角色,你先获得其一张牌.',
			scqhPcr_jipin: '济贫',
			scqhPcr_jipin_info: '你可以将一张♣️️牌当做【顺手牵羊】使用,你可以将一张牌交给手牌数最少的一名其他角色.',
			scqhPcr_lueying: '掠影',
			scqhPcr_lueying_info: '锁定技,你使用非伤害类的黑色牌无距离限制;你不能成为其他角色使用非伤害类的黑色牌的目标.',
			scqhPcr_yongxi: '勇袭',
			scqhPcr_yongxi_info: '联结技,你可以视为对眼前的一名角色使用一张【杀】,若你的体力值是全场:●最高,此牌的伤害基数为２;●非最高,你获得状态技能【涅槃】.',
			scqhPcr_yongxi_niepan: '涅槃',
			scqhPcr_yongxi_niepan_info: '锁定技,当你进入濒死状态时,你失去此技能并复原你的武将牌,摸３张牌并回复体力至３点.',
			scqhPcr_shengyan: '盛宴',
			scqhPcr_shengyan_info: '你可以将任意张牌当做任意基本牌或食物牌使用,并且可以额外选择至多Ｘ名角色为目标(Ｘ为实体牌的数量).',
			scqhPcr_kongfu: '空腹',
			scqhPcr_kongfu_info: '摸牌阶段,你少摸一张牌,你可以获得眼前的任意名角色的区域里的各一张牌;弃牌阶段结束后,你可以将本阶段内进入弃牌堆的所有牌当做一张【桃】使用.',
			scqhPcr_eryu: '儿语',
			scqhPcr_eryu_info: '其他角色受到来自你的伤害时,其可以让你摸一张牌,防止此伤害;当你受到来自其他角色的伤害时,其需要弃置一张牌,若不然防止此伤害.',
			scqhPcr_wuzhan: '舞斩',
			scqhPcr_wuzhan_info: '联结技,你可以视为对眼前的一名角色使用一张冰【杀】,并于技能值耗尽前使用行动模式②,且【儿语】失效.',
			scqhPcr_wuzhan_dongyao: '冻咬',
			scqhPcr_wuzhan_dongyao_info: '锁定技,当你声明使用或打出一张无属性的非红色牌时,为此牌赋予冰属性.',
			scqhPcr_tabing: '踏冰',
			scqhPcr_tabing_info: '你可以将♠️️牌当冰【杀】、♣️️牌当冰【闪】使用或打出;当你使用或打出冰属性牌时,你可以弃置对方的一张牌.',
			scqhPcr_juebing: '绝冰',
			scqhPcr_juebing_info: ['准备阶段,你可以视为使用一张【沍寒】(地图牌),获得四枚【雪花】(最多十枚);在沍寒环境下,当你声明使用或打出一张基本牌或普通锦囊牌时,你可以移去一枚【雪花】并选择一项:', '●赋予此牌冰属性', '●令此牌不可被响应', '●令此牌不计入使用次数', '●令此牌额外指定一个目标'].join('</br>'),
			scqhPcr_rimian: '日冕',
			scqhPcr_rimian_info: '联结技,你可以视为使用一张【万箭齐发】;当其他角色因响应此牌而打出牌时,你摸一张牌.',
			scqhPcr_huixin: '汇心',
			scqhPcr_huixin_info: '每回合限一次,当你使用一张目标数大于１的基本牌或普通锦囊牌时,你可以弃置至多Ｘ张牌并将等量的角色移出目标,令此牌额外结算等量次(Ｘ为目标数-1).',
			scqhPcr_wencai: '文才',
			scqhPcr_wencai_info: '当其他角色使用名字是四个字的锦囊牌时,你摸一张牌并记录此牌名.你可以将一张名字是四个字的牌当做记录过的任何一种锦囊牌使用,并且移除该记录.',
			scqhPcr_mihun: '迷魂',
			scqhPcr_mihun_info: '联结技,你可以让一名其他角色获得一个额外的回合,该角色于此回合内不能对你使用牌并且由你操控.',
			scqhPcr_xuanmu: '眩目',
			scqhPcr_xuanmu_info: '出牌阶段限一次,你可以扣置牌堆顶的一张牌当做任意一种普通锦囊牌使用;其他角色依次选择是否猜测此牌的花色,你展示此牌;猜测正确的角色各摸一张牌;猜测错误的角色不能使用基本牌,直到其回合结束.',
			scqhPcr_qiaozhuang: '乔装',
			scqhPcr_qiaozhuang_info: '当你成为其他角色使用【杀】或普通锦囊牌的目标后,你可以弃置一张装备牌并摸两张牌,与其拼点;若其没赢,则此牌对你无效.',
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
			var number = 1;
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

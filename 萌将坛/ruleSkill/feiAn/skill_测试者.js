'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			千鹤ceshi_ceshi: {
				inherit: 'zhenxiang',
				group: 'shuohui',
			},
			zhenxiang: {
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				forced: true,
				filter(event, player) {
					var evt = event.getl(player);
					return evt && evt.player == player && evt.hs && evt.hs.length;
				},
				content() {
					'step 0';
					if (
						player.hasCard(function (card) {
							return !get.is.shownCard(card);
						}, 'h')
					) {
						player
							.chooseCard('h', '【眼与真相】:是否明置一张手牌？', function (card) {
								return !get.is.shownCard(card);
							})
							.set('ai', function (card) {
								return Math.random();
							});
					}
					('step 1');
					if (result.bool && result.cards && result.cards.length) {
						var cards = result.cards[0];
						player.addShownCards(cards, 'visible_zhenxiang');
					}
					('step 2');
					var num = 0;
					var evt = trigger.getl(player);
					if (!evt.gaintag_map) {
						event.finish();
						return;
					}
					for (var i in evt.gaintag_map) {
						if (evt.gaintag_map[i].some((tag) => tag.indexOf('visible_') == 0)) {
							num++;
						}
					}
					if (num < 2) {
						event.finish();
						return;
					}
					player.chooseBool('【眼与真相】:是否摸一张牌？').set('ai', function () {
						return 1;
					});
					('step 3');
					if (result.bool) {
						player.draw();
					}
				},
			},
			visible_zhenxiang: {},
			shuohui: {
				limited: true,
				forced: true,
				trigger: {
					global: 'dieBegin',
				},
				filter(event, player) {
					if (event.source && event.source == player) return false;
					if (event.player == player) return false;
					return event.player.countCards('hej');
				},
				content() {
					'step 0';
					var target = player;
					trigger.player.chooseBool('【烁辉】:是否将所有牌交给' + get.translation(player) + '？').set('ai', function () {
						return get.attitude(trigger.player, target) > 0;
					});
					('step 1');
					if (result.bool) {
						player.awakenSkill(event.name);
						var cards = trigger.player.getCards('hej');
						player.gain(cards, 'gain2');
					}
				},
			},
			ceshi_xian: {
				enable: 'phaseUse',
				filterTarget(card, player, target) {
					return true;
				},
				content() {
					'step 0';
					player.scqh_EnterTheWorld(target);
				},
				group: 'ceshi_xian_ccc',
				subSkill: {
					ccc: {
						trigger: {
							global: 'scqh_EnterTheWorldBegin1',
						},
						content() {
							game.log(trigger.name);
							game.log(trigger.parent.name);
							trigger.cancel();
						},
					},
				},
			},
			ceshi_xianzhen: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return true;
					return target != player && target.countCards('hs');
				},
				content() {
					'step 0';
					target.addTempSkill(event.name + '_fengyin');
					target.update();
					('step 1');
					var cards = target.getCards('hs');
					for (const i of cards) {
						if (get.tag(i, 'damage') && target.canUse(i, player)) {
							target.useCard(i, player);
						}
					}
				},
				subSkill: {
					fengyin: {
						init(player, skill) {
							lib.skill[skill].shixiao(player);
							setTimeout(function () {
								if (player.hasSkill(skill)) {
									lib.skill[skill].init(player, skill);
								}
							}, 1000);
						},
						onremove(player, skill) {
							var list = player.awakenedSkills;
							if (!list.length) return;
							for (var i = 0; i < list.length; i++) {
								var sn = list[i];
								if (lib.skill[list[i]].equipSkill) {
									player.restoreSkill(sn);
								}
							}
						},
						charlotte: true,
						shixiao(player) {
							var list = [];
							var cards = player.getCards('e', { type: 'equip' });
							for (const i of cards) {
								var cn = lib.card[i.name];
								if (cn && cn.skills && cn.skills.length) {
									for (var j of cn.skills) {
										if (lib.skill[j].equipSkill && !lib.skill[j].charlotte) {
											list.push(j);
											player.awakenSkill(j);
										}
									}
								}
							}
							return list;
						},
						mark: true,
						marktext: '封印',
						intro: {
							content(storage, player, skill) {
								var list = lib.skill[skill].shixiao(player);
								if (list.length) return '失效技能:' + get.translation(list);
								return '无失效技能';
							},
						},
						ai: {
							unequip: true,
							skillTagFilter(player, tag, arg) {
								return true;
							},
						},
					},
				},
			},
			xxdcxunjie: {
				audio: 2,
				trigger: { global: 'phaseEnd' },
				filter(event, player) {
					if (player.hasSkill('dcxunjie_handcard') && player.hasSkill('dcxunjie_hp')) return false;
					return player.hasHistory('gain', (evt) => {
						return !evt.getParent('phaseDraw', true);
					});
				},
				forced: true,
				content() {
					'step 0';
					var choices = [];
					var choiceList = ['令一名角色将手牌数摸或弃置至与其体力值相同', '令一名角色将体力回复或失去至与其手牌数相同'];
					if (!player.hasSkill(event.name + '_handcard')) {
						choices.push('选项一');
					} else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '(已被选择过)</span>';
					if (!player.hasSkill(event.name + '_hp')) {
						choices.push('选项二');
					} else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '(已被选择过)</span>';
					if (choices.length) {
						if (choices.length == 1) event._result.control = choices[0];
						else if (choices.length > 1) {
							var next = player.chooseControl(choices, 'cancel2');
							next.set('choiceList', choiceList);
							next.set('prompt', get.prompt('dcxunjie'));
							next.set('ai', function () {
								return _status.event.choice;
							});
							next.set(
								'choice',
								(() => {
									const getValue = (index, target) => {
										let att = get.attitude(player, target);
										att = Math.sign(att) * Math.sqrt(Math.abs(att));
										let delt = target.hp - target.countCards('h');
										if (index == 1 && delt < 0) delt = 0;
										return (1 - 3 * index) * att * delt;
									};
									const list = game
										.filterPlayer()
										.map((current) => {
											const val0 = getValue(0, current),
												val1 = getValue(1, current);
											return [val0, val1, Math.max(val0, val1)];
										})
										.sort((a, b) => {
											return b[2] - a[2];
										});
									const toChoose = list[0];
									if (toChoose[2] <= 0) return 'cancel2';
									return toChoose[0] > toChoose[1] ? 0 : 1;
								})()
							);
						} else event.finish();
					} else event.finish();
					('step 1');
					if (result.control && result.control != 'cancel2') {
						var choice = result.control;
						event.choice = choice;
						var next = player.chooseTarget(true, function (card, player, target) {
							return target.countCards('h') != target.hp;
						});
						if (result.control == '选项一') {
							next.set('prompt', '选择一名角色,令其将手牌数摸或弃置至与其体力值相同');
						} else if (result.control == '选项二') {
							next.set('prompt', '选择一名角色,令其将体力回复或失去至与其手牌数相同');
						}
						next.set('ai', function (target) {
							var player = _status.event.player;
							var att = get.attitude(player, target) + get.attitude(target, player);
							var num = target.countCards('h') - target.hp;
							if (event.choice == '选项一') {
								if (att <= 0 && num > 0) return Math.abs(num);
								if (att <= 0 && num < 0) return 0;
								if (att >= 1 && num > 0) return 0;
								if (att >= 1 && num < 0) return Math.abs(num);
							} else {
								if (att <= 0 && num > 0) return 0;
								if (att <= 0 && num < 0) return Math.abs(num);
								if (att >= 1 && num > 0) return Math.abs(num);
								if (att >= 1 && num < 0) return 0;
							}
							return 0;
						});
					} else event.finish();
					('step 2');
					if (result && result.bool && result.targets && result.targets.length && event.choice) {
						var target = result.targets[0];
						var num = target.countCards('h') - target.hp;
						var num2 = Math.abs(num);
						if (event.choice == '选项一') {
							player.addTempSkill(event.name + '_handcard', 'roundStart');
							if (num > 0) target.chooseToDiscard(num2, true);
							else target.draw(num2);
						} else {
							player.addTempSkill(event.name + '_hp', 'roundStart');
							if (num > 0) target.recover(num2);
							else target.loseHp(num2);
						}
					}
				},
				subSkill: {
					handcard: {
						charlotte: true,
					},
					hp: {
						charlotte: true,
					},
				},
			},
			benti_dcxunjie: {
				audio: 2,
				trigger: { global: 'phaseEnd' },
				filter(event, player) {
					return player.hasHistory('gain', (evt) => {
						return !evt.getParent('phaseDraw', true);
					});
				},
				forced: true,
				async content(event, map) {
					const player = map.player;
					const choices = [];
					const choiceList = ['令一名角色将手牌数摸或弃置至与其体力值相同', '令一名角色将体力回复或失去至与其手牌数相同'];
					choices.push('选项一');
					choices.push('选项二');
					let result;
					if (_status.connectMode)
						game.broadcastAll(() => {
							_status.noclearcountdown = true;
						});
					if (choices.length == 1) result = { control: choices[0] };
					else
						result = await player
							.chooseControl(choices, 'cancel2')
							.set('choiceList', choiceList)
							.set('prompt', get.prompt('dcxunjie'))
							.set('ai', () => {
								return get.event('choice');
							})
							.set(
								'choice',
								(() => {
									const getValue = (index, target) => {
										let att = get.attitude(player, target);
										att = Math.sign(att) * Math.sqrt(Math.abs(att));
										let delt = target.getHp(true) - target.countCards('h');
										if (index == 1 && delt < 0) delt = 0;
										return (1 - 3 * index) * att * delt;
									};
									const list = game
										.filterPlayer()
										.map((current) => {
											const val0 = getValue(0, current),
												val1 = getValue(1, current);
											return [val0, val1, Math.max(val0, val1)];
										})
										.sort((a, b) => {
											return b[2] - a[2];
										});
									const toChoose = list[0];
									if (toChoose[2] <= 0) return 'cancel2';
									return toChoose[0] > toChoose[1] ? 0 : 1;
								})()
							);
					if (result.control == 'cancel2') {
						if (_status.connectMode) {
							game.broadcastAll(() => {
								delete _status.noclearcountdown;
								game.stopCountChoose();
							});
						}
						return event.finish();
					}
					let prompt = '';
					const choice = result.control,
						index = choice == '选项一' ? 0 : 1;
					if (choices.length == 1) {
						prompt = `###${get.prompt('dcxunjie')}###<div class="text center">${choiceList[index]}</div>`;
					} else prompt = `###殉节:请选择一名角色###<div class="text center">${choiceList[index].replace('一名', '该')}</div>`;
					result = await player
						.chooseTarget(prompt)
						.set('ai', (target) => {
							const player = get.player(),
								index = get.event('index');
							let att = get.attitude(player, target);
							att = Math.sign(att) * Math.sqrt(Math.abs(att));
							let delt = target.getHp(true) - target.countCards('h');
							if (index == 1 && delt < 0) delt = 0;
							return (1 - 2 * index) * att * delt;
						})
						.set('index', index);
					if (_status.connectMode) {
						game.broadcastAll(() => {
							delete _status.noclearcountdown;
							game.stopCountChoose();
						});
					}
					if (!result.bool) return event.finish();
					const target = result.targets[0];
					const delt = (target.getHp(true) - target.countCards('h')) * (1 - 2 * index);
					if (delt == 0) event.finish();
					else if (index == 0) target[delt > 0 ? 'draw' : 'chooseToDiscard'](Math.abs(delt), true);
					else target[delt > 0 ? 'recover' : 'loseHp'](Math.abs(delt));
				},
			},
			ceshi_huange: {
				enable: 'phaseUse',
				usable: 1,
				content() {
					'step 0';
					player.judge();
					('step 1');
					if (result && result.card) {
						var suited = result.card.suit;
						event.suited = suited;
						var str;
						switch (suited) {
							case 'heart': {
								var curs = game.filterPlayer(function (current) {
									return current.getDamagedHp();
								});
								if (curs.length) {
									var next = player.chooseTarget(true, function (card, player, target) {
										return target.getDamagedHp();
									});
									next.set('prompt', '选择一名角色回复一点体力');
									next.set('ai', function (target) {
										var player = _status.event.player;
										var att = get.attitude(player, target);
										return att >= 1;
									});
								} else {
									event.finish();
									return;
								}
								break;
							}
							case 'diamond': {
								var next = player.chooseTarget(true, function (card, player, target) {
									return true;
								});
								next.set('prompt', '选择一名角色于其回合内造成的伤害+1');
								next.set('ai', function (target) {
									var player = _status.event.player;
									var att = get.attitude(player, target);
									return att >= 1;
								});
								break;
							}
							case 'spade': {
								var curs = game.filterPlayer(function (current) {
									return current.countCards('h');
								});
								if (curs.length) {
									var next = player.chooseTarget(true, function (card, player, target) {
										return target.countCards('h') && target != player;
									});
									next.set('prompt', '观看一名角色的两张手牌并获得其中一张');
									next.set('ai', function (target) {
										var player = _status.event.player;
										var att = get.attitude(player, target);
										return att <= 0;
									});
								} else {
									event.finish();
									return;
								}
								break;
							}
							case 'club': {
								str = '你本回合使用牌无距离和次数限制';
								player.addTempSkill(event.name + '_club');
								event.finish();
								break;
							}
						}
					} else event.finish();
					('step 2');
					if (result && result.bool && result.targets && result.targets.length && event.suited) {
						var target = result.targets[0];
						event.target = target;
						switch (event.suited) {
							case 'heart': {
								target.recover();
								break;
							}
							case 'diamond': {
								if (!target.storage[event.name + '_diamond']) {
									target.storage[event.name + '_diamond'] = 0;
								}
								target.storage[event.name + '_diamond']++;
								target.addTempSkill(event.name + '_diamond', { player: 'phaseAfter' });
								break;
							}
						}
					}
					if (event.suited == 'spade') {
						var cards = target.getCards('h');
						player.choosePlayerCard(target, 'h', 2, true);
					} else event.finish();
					('step 3');
					if (result && result.bool && result.cards && result.cards.length) {
						player.chooseButton(['选择获得一张牌', result.cards], true);
					}
					('step 4');
					if (result.bool && result.links) {
						var card = result.links[0];
						if (lib.filter.canBeGained(card, player, event.target)) player.gain(card, event.target, 'giveAuto', 'bySelf');
					}
				},
				ai: {
					order: 2,
					result: {
						player: 1,
						target: 1,
					},
				},
				subSkill: {
					club: {
						charlotte: true,
						marktext: '欢',
						mark: true,
						intro: {
							name: '欢',
							content: '本回合使用牌无距离和次数限制',
						},
						mod: {
							cardUsable: () => Infinity,
							targetInRange: () => true,
						},
					},
					diamond: {
						charlotte: true,
						marktext: '欢',
						mark: true,
						intro: {
							name: '欢',
							content: '其回合内造成的伤害+#',
						},
						forced: true,
						trigger: {
							source: 'damageBegin2',
						},
						content() {
							'step 0';
							var store = player.storage[event.name] || 1;
							trigger.num += store;
						},
					},
				},
			},
			ceshi_tianlai: {
				limited: true,
				enable: 'phaseUse',
				filterTarget(card, player, target) {
					return target != player;
				},
				content() {
					'step 0';
					player.awakenSkill(event.name);
					player.storage.ceshi_tianlai_die = target;
					('step 1');
					var list = [];
					var skills = target.getOriginalSkills();
					for (var i = 0; i < skills.length; i++) {
						if (lib.skill[skills[i]].limited && target.awakenedSkills.includes(skills[i])) {
							list.push(skills[i]);
						}
					}
					event.list = list;
					event.str1 = '下回合可以使用一次【欢歌】且使用牌可额外结算一次';
					event.str2 = '回复武将牌上的一个限定技';
					if (list.length) {
						var next = target.chooseControl(event.str1, event.str2);
						next.set('ai', function () {
							return 0;
						});
					} else event._result.control = event.str1;
					('step 2');
					if (result.control) {
						if (result.control == event.str1) {
							target.addTempSkill(event.name + '_huange', { player: 'phaseAfter' });
							target.addTempSkill(event.name + '_jiesuan', { player: 'phaseAfter' });
						} else {
							if (event.list.length == 1) {
								target.restoreSkill(event.list[0]);
								event.finish();
								return;
							} else if (event.list.length > 1) {
								next = target.chooseControl(event.list);
								next.set('prompt', '重置一个限定技');
								next.set('ai', function () {
									return 0;
								});
							} else event.finish();
						}
					} else event.finish();
					('step 3');
					target.restoreSkill(result.control);
				},
				ai: {
					order: 1,
					result: {
						player(player, target) {
							var num = get.attitude(player, target) + get.attitude(target, player);
							if (num <= 0) return 0;
							return num;
						},
						target(player, target) {
							var num = get.attitude(player, target) + get.attitude(target, player);
							if (num <= 0) return 0;
							return num;
						},
					},
				},
				group: 'ceshi_tianlai_die',
				subSkill: {
					die: {
						forced: true,
						trigger: {
							global: 'dieAfter',
						},
						filter(event, player) {
							if (!player.storage.ceshi_tianlai_die) return false;
							return event.source && _status.currentPhase && _status.currentPhase == event.source && event.source == player.storage.ceshi_tianlai_die;
						},
						content() {
							player.restoreSkill('ceshi_tianlai');
						},
					},
					jiesuan: {
						charlotte: true,
						forced: true,
						trigger: {
							player: 'useCard',
						},
						content() {
							trigger.effectCount++;
						},
					},
					huange: {
						name: '欢歌',
						charlotte: true,
						enable: 'phaseUse',
						prompt2() {
							return get.translation('ceshi_huange_info');
						},
						content() {
							'step 0';
							player.useSkill('ceshi_huange');
							('step 1');
							player.removeSkill(event.name);
						},
						ai: {
							order: 2,
							result: {
								player: 1,
							},
						},
					},
				},
			},
			song: {
				trigger: {
					global: 'phaseUseBegin',
				},
				enable: 'phaseUse',
				filterTarget(card, player, target) {
					return true;
				},
				content() {
					'step 0';
					if (!target) var target = _status.currentPhase;
					if (target) {
						target.addTempSkill(event.name + '_1', { player: 'useCardEnd' });
					}
				},
				ai: {},
				subSkill: {
					1: {
						name: '送',
						marktext: '送',
						mark: true,
						intro: {
							name: '送',
							content: '送',
						},
					},
				},
			},
			rushi: {
				audio: 2,
				enable: 'chooseToUse',
				usable: 10,
				init(player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [['sha', 'shan', 'tao', 'jiu', 'wuxie'], 0];
				},
				hiddenCard(player, name) {
					if (player.storage.rushi && player.storage.rushi[0].includes(name)) return true;
					return false;
				},
				marktext: '席',
				mark: true,
				intro: {
					markcount(storage) {
						return storage[1];
					},
					content(storage, player) {
						if (!storage) return;
						var str = '<li>';
						if (!storage[0].length) {
							str += '已无可用牌';
						} else {
							str += '剩余可用牌:';
							str += get.translation(storage[0]);
						}
						str += '<br><li><席>标记数量:';
						str += storage[1];
						return str;
					},
				},
				filter(event, player) {
					var storage = player.storage.rushi;
					if (!storage || !storage[0].length) return false;
					for (const i of storage[0]) {
						var card = { name: i };
						if (event.filterCard && event.filterCard(card, player, event)) return true;
					}
					return false;
				},
				chooseButton: {
					dialog(event, player) {
						var list = [];
						var storage = player.storage.rushi;
						for (const i of storage[0]) list.push(['遁世', '', i]);
						return ui.create.dialog('遁世', [list, 'vcard'], 'hidden');
					},
					filter(button, player) {
						var evt = _status.event.parent;
						return evt.filterCard({ name: button.link[2] }, player, evt);
					},
					check(button) {
						var card = { name: button.link[2] },
							player = _status.event.player;
						if (_status.event.parent.type != 'phase') return 1;
						if (card.name == 'jiu') return 0;
						if (card.name == 'sha' && player.hasSkill('jiu')) return 0;
						return player.getUseValue(card, null, true);
					},
					backup(links, player) {
						return {
							audio: 'dunshi',
							filterCard() {
								return false;
							},
							popname: true,
							viewAs: {
								name: links[0][2],
							},
							selectCard: -1,
							precontent() {
								player.addTempSkill('rushi_damage');
								player.storage.rushi_damage = event.result.card.name;
							},
						};
					},
					prompt(links, player) {
						return '选择【' + get.translation(links[0][2]) + '】的目标';
					},
				},
				ai: {
					respondSha: true,
					respondShan: true,
					skillTagFilter(player, tag, arg) {
						var storage = player.storage.rushi;
						if (!storage || !storage[0].length) return false;
						switch (tag) {
							case 'respondSha':
								return (_status.event.type != 'phase' || player == game.me || player.isUnderControl() || player.isOnline()) && storage[0].includes('sha');
							case 'respondShan':
								return storage[0].includes('shan');
							case 'save':
								if (arg == player && storage[0].includes('jiu')) return true;
								return storage[0].includes('tao');
						}
					},
					order: 2,
					result: {
						player(player) {
							if (_status.event.type == 'dying') {
								return get.attitude(player, _status.event.dying);
							}
							return 1;
						},
					},
				},
				initList() {
					var list,
						skills = [];
					var banned = ['xunyi'];
					if (get.mode() == 'guozhan') {
						list = [];
						for (var i in lib.characterPack.mode_guozhan) list.push(i);
					} else if (_status.connectMode) list = get.charactersOL();
					else {
						list = [];
						for (var i in lib.character) {
							if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
							list.push(i);
						}
					}
					for (const i of list) {
						if (i.indexOf('gz_jun') == 0) continue;
						for (var j of lib.character[i][3]) {
							var skill = lib.skill[j];
							if (!skill || skill.zhuSkill || banned.includes(j)) continue;
							if (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg)) continue;
							var info = get.translation(j);
							for (var ix = 0; ix < info.length; ix++) {
								if (/仁|义|礼|智|信/.test(info[ix]) == true) {
									skills.add(j);
									break;
								}
							}
						}
					}
					_status.rushi_list = skills;
				},
				group: 'rushi_dachu',
				subSkill: {
					dachu: {
						audio: 'dunshi',
						trigger: {
							player: 'chooseToRespondBegin',
						},
						forced: true,
						filter(event, player) {
							if (event.responded) return false;
							if (event.rushied) return false;
							if (!event.filterCard) return false;
							var list = player.storage.rushi;
							if (list && list[0] && list[0].length) {
								for (const i of list[0]) {
									if (
										event.filterCard(
											{
												name: i,
											},
											player,
											event
										)
									)
										return true;
								}
							}
							return false;
						},
						content() {
							'step 0';
							var list = player.storage.rushi[0];
							var listed = [];
							for (const i of list) {
								if (
									trigger.filterCard(
										{
											name: i,
										},
										player,
										trigger
									)
								)
									listed.push(i);
							}
							var next = player.chooseButton(['是否视为使用一张遁世牌？', [list, 'vcard']]);
							next.set('filterButton', function (button) {
								return _status.event.listed.includes(button.link[2]);
							});
							next.set('ai', function (button) {
								return true;
							});
							next.set('listed', listed);
							('step 1');
							if (result && result.bool && result.links[0]) {
								trigger.rushied = true;
								var card = { name: result.links[0][2], nature: result.links[0][3] };
								player.addTempSkill('rushi_damage');
								player.storage.rushi_damage = card.name;
								trigger.untrigger();
								trigger.set('responded', true);
								trigger.result = {
									bool: true,
									card: {
										name: card.name,
										nature: card.nature,
									},
								};
							}
						},
					},
					backup: {
						audio: 'dunshi',
					},
					damage: {
						audio: 'dunshi',
						trigger: {
							global: 'damageBegin2',
						},
						forced: true,
						charlotte: true,
						filter(event, player) {
							return event.source == _status.currentPhase;
						},
						logTarget: 'source',
						content() {
							'step 0';
							event.cardname = player.storage.rushi_damage;
							player.removeSkill('rushi_damage');
							event.target = trigger.source;
							event.videoId = lib.status.videoId++;
							var func = function (card, id, card2, card3) {
								var list = ['防止即将对' + card3 + '造成的伤害,并令' + card + '获得一个技能名中包含<仁/义/礼/智/信>的技能', '从〖遁世〗中删除【' + card2 + '】并获得一枚<席>', '减1点体力上限,摸等同于<席>数的牌'];
								var choiceList = ui.create.dialog('遁世:请选择两项');
								choiceList.videoId = id;
								for (var i = 0; i < list.length; i++) {
									var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
									str += list[i];
									str += '</div>';
									var next = choiceList.add(str);
									next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
									next.firstChild.link = i;
									Object.setPrototypeOf(next, lib.element.Button.prototype);//QQQ
									choiceList.buttons.add(next.firstChild);
								}
								return choiceList;
							};
							if (player.isOnline2()) {
								player.send(func, get.translation(trigger.source), event.videoId, get.translation(event.cardname), get.translation(trigger.player));
							}
							event.dialog = func(get.translation(trigger.source), event.videoId, get.translation(event.cardname), get.translation(trigger.player));
							if (player != game.me || _status.auto) {
								event.dialog.style.display = 'none';
							}
							var next = player.chooseButton();
							next.set('dialog', event.videoId);
							next.set('forced', true);
							next.set('selectButton', 2);
							next.set('ai', function (button) {
								var player = _status.event.player;
								switch (button.link) {
									case 0:
										if (get.attitude(player, _status.currentPhase) > 0) return 3;
										return 0;
									case 1:
										return 1;
									case 2:
										var num = player.storage.rushi[1];
										for (const i of ui.selected.buttons) {
											if (i.link == 1) num++;
										}
										if (num > 0 && player.isDamaged()) return 2;
										return 0;
								}
							});
							('step 1');
							if (player.isOnline2()) {
								player.send('closeDialog', event.videoId);
							}
							event.dialog.close();
							event.links = result.links.sort();
							for (const i of event.links) {
								game.log(player, '选择了', '#g【遁世】', '的', '#y选项' + get.cnNumber(i + 1, true));
							}
							if (event.links.includes(0)) {
								trigger.cancel();
								if (!_status.rushi_list) lib.skill.rushi.initList();
								var list = _status.rushi_list
									.filter(function (i) {
										return !target.hasSkill(i, null, null, false);
									})
									.randomGets(3);
								if (list.length == 0) event.goto(3);
								else {
									event.videoId = lib.status.videoId++;
									var func = function (skills, id, target) {
										var dialog = ui.create.dialog('forcebutton');
										dialog.videoId = id;
										dialog.add('令' + get.translation(target) + '获得一个技能');
										for (var i = 0; i < skills.length; i++) {
											dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
										}
										dialog.addText(' <br> ');
									};
									if (player.isOnline()) player.send(func, list, event.videoId, target);
									else if (player == game.me) func(list, event.videoId, target);
									player.chooseControl(list).set('ai', function () {
										var controls = _status.event.controls;
										if (controls.includes('cslilu')) return 'cslilu';
										return controls[0];
									});
								}
							} else event.goto(3);
							('step 2');
							game.broadcastAll('closeDialog', event.videoId);
							target.addSkillLog(result.control);
							('step 3');
							var storage = player.storage.rushi;
							if (event.links.includes(1)) {
								storage[0].remove(event.cardname);
								storage[1]++;
								player.markSkill('rushi');
							}
							if (event.links.includes(2)) {
								player.loseMaxHp();
								if (storage[1] > 0) player.draw(storage[1]);
							}
						},
					},
				},
			},
			sew_miewu: {
				audio: 2,
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(event, player) {
					for (const i of lib.inpile) {
						var type = get.type2(i);
						if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) return true;
					}
					return false;
				},
				chooseButton: {
					dialog(event, player) {
						var list = [];
						for (var i = 0; i < lib.inpile.length; i++) {
							var name = lib.inpile[i];
							if (name == 'sha') {
								if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
								for (var j of lib.inpile_nature) {
									if (
										event.filterCard(
											{
												name: name,
												nature: j,
											},
											player,
											event
										)
									)
										list.push(['基本', '', 'sha', j]);
								}
							} else if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
							else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
						}
						return ui.create.dialog('灭吴', [list, 'vcard']);
					},
					filter(button, player) {
						return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
					},
					check(button) {
						if (_status.event.parent.type != 'phase') return 1;
						var player = _status.event.player;
						if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
						return player.getUseValue({
							name: button.link[2],
							nature: button.link[3],
						});
					},
					backup(links, player) {
						return {
							filterCard() {
								return false;
							},
							selectCard: -1,
							audio: 'spmiewu',
							popname: true,
							check(card) {
								return 8 - get.value(card);
							},
							position: 'hes',
							viewAs: { name: links[0][2], nature: links[0][3] },
							precontent() {
								player.addTempSkill('spmiewu2');
							},
						};
					},
					prompt(links, player) {
						return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
					},
				},
				hiddenCard(player, name) {
					if (!lib.inpile.includes(name)) return false;
					var type = get.type2(name);
					return type == 'basic' || type == 'trick';
				},
				ai: {
					combo: 'spwuku',
					fireAttack: true,
					respondSha: true,
					respondShan: true,
					skillTagFilter(player) {
						return true;
					},
					order: 1,
					result: {
						player(player) {
							if (_status.event.dying) return get.attitude(player, _status.event.dying);
							return 1;
						},
					},
				},
			},
			gai_duliang: {
				trigger: {
					global: 'phaseZhunbeiBegin',
				},
				filter(event, player, name) {
					return player.isFriendsOf(event.player);
				},
				check() {
					return true;
				},
				logTarget: 'player',
				content() {
					'step 0';
					player.draw();
					('step 1');
					var next = player.chooseCard('he', [0, Infinity]);
					var str = '交给' + get.translation(trigger.player) + '任意张牌(可以为零),其本回合的摸牌阶段移至弃牌阶段后执行.';
					next.set('prompt', str);
					next.set('ai', function (card) {
						return 7 - get.value(card);
					});
					('step 2');
					if (result.bool && result.cards) {
						player.give(result.cards, trigger.player);
					}
					('step 3');
					trigger.player.addTempSkill('gai_duliang_jump');
				},
				subSkill: {
					jump: {
						forced: true,
						charlotte: true,
						trigger: {
							player: ['phaseDrawBefore'],
						},
						filter(event, player) {
							if (player.skipList && player.skipList.includes('phaseDraw')) return false;
							return true;
						},
						content() {
							trigger.cancel();
							trigger.player.addTempSkill('gai_duliang_delay');
							player.removeSkill(event.name);
						},
					},
					delay: {
						forced: true,
						charlotte: true,
						trigger: {
							player: ['phaseDiscardAfter', 'phaseDiscardSkipped', 'phaseDiscardCancelled'],
						},
						filter(event, player) {
							return true;
						},
						content() {
							player.removeSkill(event.name);
							var next = player.phaseDraw();
							event.next.remove(next);
							trigger.next.push(next);
						},
					},
				},
			},
			gai_duliangXXX: {
				forced: true,
				trigger: {
				},
				filter(event, player, name) {
					return player.isFriendsOf(event.player);
				},
				content() {
					trigger.setContent(lib.skill[event.name].newPhase);
				},
				newPhase() {
					'step 0';
					player.phaseZhunbei();
					('step 1');
					player.phaseJudge();
					('step 2');
					if (!event.jump) {
						player.phaseDraw();
					}
					if (event.jumpGoto) {
						delete event.jumpGoto;
						event.goto(5);
					}
					('step 3');
					player.phaseUse();
					('step 4');
					game.broadcastAll(function () {
						if (ui.tempnowuxie) {
							ui.tempnowuxie.close();
							delete ui.tempnowuxie;
						}
					});
					player.phaseDiscard();
					delete player._noSkill;
					if (event.jumpGoto && event.jumpGoto >= 0) {
						event.goto(2);
					}
					('step 5');
					if (event.jump) {
						delete event.jump;
						event.jumpGoto = true;
						event.goto(2);
					} else player.phaseJieshu();
				},
				group: 'gai_duliang_jump',
				subSkill: {
					jump: {
						trigger: {
							global: 'phaseZhunbeiBegin',
						},
						filter(event, player, name) {
							return player.isFriendsOf(event.player);
						},
						check() {
							return true;
						},
						logTarget: 'player',
						content() {
							'step 0';
							game.log(trigger.name);
							game.log(trigger.parent.name);
							game.log(trigger.getParent(2).name);
							game.log(trigger.getParent(3).name);
							game.log(trigger.getParent(4).name);
							game.log(event.name);
							game.log(event.parent.name);
							game.log(event.getParent(2).name);
							game.log(event.getParent(3).name);
							game.log(event.getParent(4).name);
							game.log(event.getParent(5).name);
							game.log(event.getParent(6).name);
							if (trigger.parent.name == 'phase') {
								trigger.parent.jump = true;
							}
							player.draw();
							('step 1');
							var next = player.chooseCard('he', [0, Infinity]);
							var str = '交给' + get.translation(trigger.player) + '任意张牌(可以为零),其本回合的摸牌阶段移至弃牌阶段后执行.';
							next.set('prompt', str);
							next.set('ai', function (card) {
								return 7 - get.value(card);
							});
							('step 2');
							if (result.bool && result.cards) {
								player.give(result.cards, trigger.player);
							}
						},
					},
				},
			},
			gai_bianzhen: {
				enable: 'phaseUse',
				usable: 1,
				filterCard(card, player, target) {
					return true;
				},
				selectCard() {
					var list = ui.selected.cards;
					if (list && list.length) return 2;
					return [0, 2];
				},
				position: 'he',
				check(card) {
					return 8 - get.value(card);
				},
				content() {
					'step 0';
					player.addTempSkill(event.name + '_delay');
					('step 1');
					if (!cards.length) player.loseHp();
				},
				ai: {
					order: 1,
					result: {
						player: 1,
					},
				},
				subSkill: {
					delay: {
						forced: true,
						charlotte: true,
						trigger: {
							player: 'phaseEnd',
						},
						filter(event, player, name) {
							return true;
						},
						content() {
							'step 0';
							var str = '选择一名角色和一个阶段,令其获得一个仅有该阶段的额外回合';
							var next = player.chooseTarget(true, str);
							next.set('ai', function (target) {
								var att = get.attitude(_status.event.player, target);
								return att >= 2;
							});
							('step 1');
							if (result.bool && result.targets) {
								event.target = result.targets[0];
							}
							var list = [];
							list.push('准备阶段');
							list.push('判定阶段');
							list.push('摸牌阶段');
							list.push('出牌阶段');
							list.push('弃牌阶段');
							list.push('结束阶段');
							if (!list.length || !event.target) {
								event.finish();
								return;
							}
							var next = player.chooseControl(list);
							next.set('prompt', '令' + get.translation(event.target) + '执行一个额外的阶段');
							next.set('ai', function () {
								return 2;
							});
							('step 2');
							if (result.control) {
								var phase = false;
								switch (result.control) {
									case '准备阶段':
										phase = 'phaseZhunbei';
										break;
									case '判定阶段':
										phase = 'phaseJudge';
										break;
									case '摸牌阶段':
										phase = 'phaseDraw';
										break;
									case '出牌阶段':
										phase = 'phaseUse';
										break;
									case '弃牌阶段':
										phase = 'phaseDiscard';
										break;
									case '结束阶段':
										phase = 'phaseJieshu';
										break;
								}
								if (phase) {
									var next = event.target.phase('nodelay');
									next._noTurnOver = true;
									next.phaseName = phase;
									next.setContent(lib.skill.gai_bianzhen_delay.phase);
								}
							}
						},
						phase() {
							'step 0';
							var name = event.phaseName;
							if (name) player[name]();
							('step 1');
							game.broadcastAll(function () {
								if (ui.tempnowuxie) {
									ui.tempnowuxie.close();
									delete ui.tempnowuxie;
								}
							});
						},
					},
				},
			},
			四糸乃_skill: {
				init(player, skill) {
					lib.skill.icesha_skill.frequent = function (event, player) {
						return event.source && event.source.hasSkill(skill);
					};
				},
				forced: true,
				trigger: {
					player: ['icesha_skillBefore'],
				},
				filter(event, player, name) {
					return true;
				},
				content() {
					'step 0';
					var list = [];
					list.push('选项一');
					list.push('选项二');
					list.push('背水!');
					var next = player.chooseControl(list);
					next.set('choiceList', ['弃牌', '造成伤害', '背水!弃牌并造成伤害']);
					('step 1');
					if (result.control == '选项一') {
						event.finish();
					} else if (result.control == '选项二') {
						trigger.cancel();
						event.finish();
					} else {
						trigger.cancel();
					}
				},
				prompt2(event, player) {
					var str = '为冰杀增加背水选项';
					return str;
				},
				group: '四糸乃_skill_damage',
				subSkill: {
					damage: {
						forced: true,
						silent: true,
						trigger: {
							global: ['damageBefore'],
						},
						filter(event, player, name) {
							return true;
						},
						content() {
							trigger.nature = 'ice';
						},
					},
				},
			},
			sew_zadishu: {
				enable: 'phaseUse',
				filterCard() {
					if (ui.selected.targets.length) return false;
					return true;
				},
				position: 'he',
				selectCard: [1, Infinity],
				complexSelect: true,
				complexCard: true,
				filterTarget(card, player, target) {
					if (ui.selected.cards.length == 1) {
						return target != player && target.hp > 0 && player.inRange(target) && target.getDamagedHp() <= 1;
					}
					return target != player && target.hp > 0 && player.inRange(target) && ui.selected.cards.length == target.getDamagedHp();
				},
				check(card) {
					var player = _status.event.player;
					if (
						game.hasPlayer(function (current) {
							return current != player && current.hp > 0 && player.inRange(current) && (ui.selected.cards.length == current.getDamagedHp() || ui.selected.cards.length == 1) && get.damageEffect(current, player, player) > 0;
						})
					)
						return 0;
					switch (ui.selected.cards.length) {
						case 0:
							return 30 - get.value(card);
						case 1:
							return 100 - get.value(card);
						case 2:
							return 100 - get.value(card);
						case 3:
							return 100 - get.value(card);
						default:
							return 0;
					}
				},
				content() {
					'step 0';
					var target = this.target;
					var player = this.player;
					event.num = 0;
					event.number = 0;
					('step 1');
					event.number++;
					var img = document.createElement('img');
					img.src = '/storage/emulated/0/Android/data/com.noname.shijian/extension/萌将坛/ui/click.gif';
					img.style.position = 'absolute';
					img.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
					img.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
					img.style.transform = 'translate(-50%, -50%)';
					img.style.width = '311px';
					img.style.height = '240px';
					ui.window.appendChild(img);
					img.style.zIndex = '999';
					ui.window.appendChild(img);
					setTimeout(function () {
						if (img && img.parentNode) img.parentNode.removeChild(img);
					}, 1000);
					img.addEventListener('click', function () {
						img.parentNode.removeChild(img);
						event.num++;
					});
					if (event.number <= 5) event.goto(1);
					('step 2');
					player.draw(event.num);
					target.damage(event.num, 'nocard');
				},
				ai: {
					damage: true,
					order: 99,
					result: {
						target(player, target) {
							return get.damageEffect(target, player);
						},
					},
					threaten: 1.5,
					expose: 0.3,
				},
			},
			sew_xuni: {
				enable: 'chooseToUse',
				filter(event, player) {
					for (var i = 0; i < arguments.length; i++) {
					}
					var filter = event.filterCard;
					for (var name of lib.inpile) {
						var type = get.type(name);
						var card = { name: name };
						if (type != 'basic' && type != 'trick') continue;
						if (!filter({ name: name }, player, event)) continue;
						var cur = game.filterPlayer(function (target) {
							var man = target.sex == 'male' && get.tag(card, 'damage');
							var woman = target.sex == 'female' && !get.tag(card, 'damage');
							if (player.canUse(card, target, false) && (man || woman)) return true;
							if (man && name == 'sha') {
								for (var j of lib.inpile_nature) {
									if (player.canUse({ name: name, nature: j }, target, false)) {
										return true;
									}
								}
							}
							if (woman && name == 'tao' && target.isDying()) {
								return true;
							}
							return false;
						});
						if (cur.length) return true;
					}
					return false;
				},
				filterTarget(card, player, target) {
					var skn = 'sew_xuni';
					if (target.hasSkill(skn + '_ed')) return false;
					if (!target.getCards('he').length) return false;
					var tars = game.filterPlayer(function (current) {
						return current.isDying();
					});
					if (tars.length) return target.isDying() && target.sex == 'female';
					for (var name of lib.inpile) {
						var type = get.type(name);
						if (type != 'basic' && type != 'trick') continue;
						var card = { name: name };
						if (player.canUse(card, target, false)) {
							var man = target.sex == 'male' && get.tag(card, 'damage');
							var woman = target.sex == 'female' && !get.tag(card, 'damage');
							if (man || woman) return true;
						}
					}
					return false;
				},
				content() {
					'step 0';
					player.choosePlayerCard(targets[0], 'he', true);
					('step 1');
					event.cardstep1 = result.links[0];
					('step 2');
					var filter = event.getParent(2).filterCard;
					var list = [];
					for (var name of lib.inpile) {
						var type = get.type(name);
						var card = { name: name };
						if (type != 'basic' && type != 'trick') continue;
						if (!filter({ name: name }, player, event.getParent(2))) continue;
						var man = target.sex == 'male' && get.tag(card, 'damage');
						var woman = target.sex == 'female' && !get.tag(card, 'damage');
						if (player.canUse(card, target, false) && (man || woman)) {
							list.push([type, '', name]);
						}
						if (man && name == 'sha') {
							for (var j of lib.inpile_nature) {
								if (player.canUse({ name: name, nature: j }, target, false)) {
									list.push([type, '', 'sha', j]);
								}
							}
						}
						if (woman && name == 'tao' && target.isDying()) {
							list.push([type, '', 'tao']);
						}
					}
					if (list.length) {
						var str = '';
						str += '将' + get.translation(target) + '的一张牌当做';
						if (target.sex == 'male') str += '「伤害牌」';
						if (target.sex == 'female') str += '「非伤害牌」';
						str += '使用';
						var next = player.chooseButton([str, [list, 'vcard']]);
						next.set('ai', function (button) {
							return 1;
						});
					} else {
						event.finish();
						if (player.getStat('skill')[event.name]) {
							player.getStat('skill')[event.name]--;
						}
					}
					('step 3');
					if (result && result.bool && result.links && result.links.length) {
						var cars = { name: result.links[0][2], nature: result.links[0][3] };
						event.cardstep3 = cars;
						var str = '请选择【' + get.translation(cars) + '】的目标';
						var libselect = lib.card[result.links[0][2]].selectTarget;
						var cur = game.filterPlayer(function (current) {
							return player.canUse(cars, current);
						});
						var nowselect = libselect;
						if (cur.length == 1 && libselect == -1) {
							nowselect = 1;
						}
						var next = player.chooseTarget(nowselect, str, function (card, player, target2) {
							if (target.isDying() && result.links[0][2] == 'tao') return target2 == target;
							if (!player.canUse(cars, target2, false)) return false;
							if (nowselect == 1) return target2 == target;
							if (nowselect == -1) return true;
							if (!ui.selected.targets.length) return target2 == target;
							if (ui.selected.targets.length && !ui.selected.targets.includes(target)) {
								return target2 == target;
							}
							return true;
						});
						next.ai = function (target2) {
							return 1;
						};
					} else {
						event.finish();
						if (player.getStat('skill')[event.name]) {
							player.getStat('skill')[event.name]--;
						}
					}
					('step 4');
					if (result && result.bool) {
						target.lose(event.cardstep1, ui.discardPile);
						target.$throw(event.cardstep1, 1000);
						target.addTempSkill(event.name + '_ed');
						player.useCard(event.cardstep3, [event.cardstep1], result.targets, false);
					} else {
						event.finish();
						if (player.getStat('skill')[event.name]) {
							player.getStat('skill')[event.name]--;
						}
					}
				},
				hiddenCard(player, name) {
					return true;
				},
				ai: {
					respondSha: true,
					respondShan: true,
					save: true,
				},
				subSkill: {
					ed: {
						charlotte: true,
						mark: true,
						marktext: 'ED',
						intro: {
							content: '已经成为过目标',
						},
					},
				},
			},
			修改: {
				enable: 'chooseTarget',
				filterTarget(card, player, target) {
					return true;
				},
				content() {
					lib.skill.本子.content = function () {
						player.draw(2);
					};
				},
			},
			本子: {
				enable: 'phaseUse',
				content() {
					player.draw(3);
				},
			},
			千鹤测试_炸金花: {
				multitarget: true,
				multiline: true,
				enable: 'phaseUse',
				content() {
					player.changeHujia();
					if (player.hujia <= player.maxHujia) {
						player.changeHujia();
					}
				},
				group: '千鹤测试_炸金花_win',
				subSkill: {
					win: {
						trigger: {
						},
						filter(event, player, name) {
							if (event.cards) game.log('【event.cards】', event.cards);
							if (event.win) game.log('【event.win】', event.win);
							if (event.name) game.log('【event.name】', event.name);
							if (event.parent) game.log('【event.parent.name】', event.parent.name);
							if (event.getParent(2)) game.log('【event.getParent(2).name】', event.getParent(2).name);
							if (event.getParent(3)) game.log('【event.getParent(3).name】', event.getParent(3).name);
							if (event.getParent(4)) game.log('【event.getParent(4).name】', event.getParent(4).name);
							if (event.getParent(5)) game.log('【event.getParent(5).name】', event.getParent(5).name);
							if (event.getParent(6)) game.log('【event.getParent(6).name】', event.getParent(6).name);
							if (event.getParent(7)) game.log('【event.getParent(7).name】', event.getParent(7).name);
							if (event.getParent(8)) game.log('【event.getParent(8).name】', event.getParent(8).name);
							if (event.getParent(9)) game.log('【event.getParent(9).name】', event.getParent(9).name);
							if (event.parent && event.parent.name == '千鹤测试_炸金花') {
								if (event.cards && event.cards.length) {
									if (event.win) return true;
								}
							}
							return false;
						},
						content() {
							'step 0';
							game.log(trigger.cards);
							player.gain(trigger.cards);
						},
					},
				},
			},
			千鹤测试_炸花: {
				multitarget: true,
				multiline: true,
				filterTarget: true,
				selectTarget: -1,
				content() {
					'step 0';
					event.skn = '千鹤sew_炸金花';
					if (!targets.length) {
						event.targets = game.filterPlayer();
					}
					targets.remove(player);
					targets.sort(lib.sort.seat);
					for (var i = 0; i < targets.length; i++) {
						var cards = get.cards(3);
						cards.sort(function (a, b) {
							return b.number - a.number;
						});
						targets[i].addToExpansion(cards, 'draw').gaintag.add(event.skn);
						targets[i].markSkill(event.skn);
					}
					('step 1');
					event.list = [];
					event.豹子 = [];
					event.同顺 = [];
					event.同花 = [];
					event.顺子 = [];
					event.对子 = [];
					event.单牌 = [];
					for (var i = 0; i < targets.length; i++) {
						var named = targets[i];
						var name = get.translation(targets[i].name);
						var cards = targets[i].getCards('x', function (card) {
							return card.hasGaintag(event.skn);
						});
						if (cards.length) {
							cards.sort(function (a, b) {
								return b.number - a.number;
							});
							var str = name + ' 的牌型是';
							if (cards[0].number == cards[1].number && cards[0].number == cards[2].number && cards[1].number == cards[2].number) {
								str += '【豹子】';
								game.log(str);
								event.豹子.push(named, cards);
							} else if (cards[0].suit == cards[1].suit && cards[0].suit == cards[2].suit && cards[1].suit == cards[2].suit && cards[0].number - cards[1].number == 1 && cards[1].number - cards[2].number == 1) {
								str += '【同花顺】';
								game.log(str);
								event.同顺.push(named, cards);
							} else if (cards[0].suit == cards[1].suit && cards[0].suit == cards[2].suit && cards[1].suit == cards[2].suit) {
								str += '【同花】';
								game.log(str);
								event.同花.push(named, cards);
							} else if (cards[0].number - cards[1].number == 1 && cards[1].number - cards[2].number == 1) {
								str += '【顺子】';
								game.log(str);
								event.顺子.push(named, cards);
							} else if (cards[0].number == cards[1].number || cards[0].number == cards[2].number || cards[1].number == cards[2].number) {
								str += '【对子】';
								game.log(str);
								event.对子.push(named, cards);
							} else {
								str += '【单牌】';
								game.log(str);
								event.单牌.push(named, cards);
							}
							event.list.push(str, cards);
						}
					}
					('step 2');
					var abb = false;
					if (event.豹子.length) {
						if (event.豹子.length == 2) event.win = event.豹子[0];
						else abb = event.豹子;
					} else if (event.同顺.length) {
						if (event.同顺.length == 2) event.win = event.同顺[0];
						else abb = event.同顺;
					} else if (event.同花.length) {
						if (event.同花.length == 2) event.win = event.同花[0];
						else abb = event.同花;
					} else if (event.顺子.length) {
						if (event.顺子.length == 2) event.win = event.顺子[0];
						else abb = event.顺子;
					} else if (event.对子.length) {
						if (event.对子.length == 2) event.win = event.对子[0];
						else abb = event.对子;
					} else if (event.单牌.length) abb = event.单牌;
					if (abb && !event.win) {
						for (var i = 0; i <= abb.length - 3; i += 2) {
							if (abb[i + 1] && abb[i + 3]) {
								if (abb[i + 1][0].number > abb[i + 3][0].number) {
									event.win = abb[i];
								} else if (abb[i + 3][0].number > abb[i + 1][0].number) {
									event.win = abb[i + 2];
								}
							}
						}
						if (!event.win) {
							game.log('第一张牌无胜利者');
							for (var i = 0; i <= abb.length - 3; i += 2) {
								if (abb[i + 1] && abb[i + 3]) {
									if (abb[i + 1][1].number > abb[i + 3][1].number) {
										event.win = abb[i];
									} else if (abb[i + 3][1].number > abb[i + 1][1].number) {
										event.win = abb[i + 2];
									}
								}
							}
							if (!event.win) {
								game.log('第二张牌无胜利者');
								for (var i = 0; i <= abb.length - 3; i += 2) {
									if (abb[i + 1] && abb[i + 3]) {
										if (abb[i + 1][2].number > abb[i + 3][2].number) {
											event.win = abb[i];
										} else if (abb[i + 3][2].number > abb[i + 1][2].number) {
											event.win = abb[i + 2];
										}
									}
								}
								if (!event.win) game.log('第三张牌无胜利者');
							}
						}
					}
					('step 3');
					if (event.list.length) {
						var next = player.chooseButton(true, 0, event.list);
						next.set('ai', function (button) {
							return 1;
						});
					}
					('step 4');
					for (var i = 0; i < targets.length; i++) {
						var cards = targets[i].getCards('x', function (card) {
							return card.hasGaintag(event.skn);
						});
						if (cards.length) {
							cards.sort(function (a, b) {
								return b.number - a.number;
							});
							targets[i].loseToDiscardpile(cards);
							targets[i].unmarkSkill(event.skn);
							if (event.win) {
								event.win.addToExpansion(cards, 'gain2').gaintag.add(event.skn + '_win');
								event.win.markSkill(event.skn + '_win');
							}
						}
					}
					if (event.win) {
						game.log(event.win, '赢得了此次【炸金花】游戏的胜利');
						event.trigger('sew_炸金花');
					} else {
						game.log('无人获胜,重新发牌');
						event.goto(0);
					}
					('step 5');
					for (var i = 0; i < targets.length; i++) {
						var cards = targets[i].getCards('x', function (card) {
							return card.hasGaintag(event.skn + '_win');
						});
						if (cards.length) {
							targets[i].loseToDiscardpile(cards);
							targets[i].unmarkSkill(event.skn + '_win');
						}
					}
				},
			},
			千鹤测试_UB: {
				superCharlotte: true,
				charlotte: true,
				fixed: true,
				multitarget: true,
				multiline: true,
				pcrub: true,
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(event, player, name) {
					var fig = lib.config.autoskilllist.includes('千鹤测试_日志');
					if (!fig) return player.hasSkill('千鹤测试_日志');
					return false;
				},
				targetprompt: ['攻击目标'],
				selectTarget: [0, Infinity],
				filterTarget(card, player, target) {
					for (var i in target.storage) {
						if (i.indexOf('pcrub_') == 0 && target.storage[i].includes(skill)) return true;
					}
					return false;
				},
				precontent() {
					if (event.getParent(4) && event.getParent(4).card) {
						event.getParent(4).cancel();
						game.log(event.getParent(4));
					}
					if (event.getParent(2) && event.getParent(2).card) {
						event.getParent(2).cancel();
						game.log(event.getParent(2));
					}
				},
				content() {
					'step 0';
					event.finish();
					('step 1');
					var list = [];
					list.push('物理');
					list.push('魔法');
					player.chooseControl(list);
					('step 2');
					if (result.control) event.属性 = result.control;
					('step 3');
					var next = player.pcr_攻击(player);
					next.set('属性', event.属性);
				},
				ai: {
					respondShan: true,
					respondSha: true,
				},
				hiddenCard(player, name) {
					var sss = [];
					var list = player.getSkills('仲村由理', '天下第一').filter(function (skill) {
						return get.info(skill);
					});
					for (var j of list) {
						if (j.indexOf('千鹤pcr_ub_') >= 0) sss.push(j);
					}
					if (name == 'wuxie') return true;
					return false;
				},
			},
			千鹤测试_印牌: {
				mod: {
					targetEnabled(card, player, target, now) {
					},
					targetInRange(card, player, target, now) {
					},
				},
				enable: 'phaseUse',
				filter(event, player) {
					return true;
				},
				chooseButton: {
					dialog(player) {
						var list = [];
						for (var i = 0; i < lib.inpile.length; i++) {
							if (get.type(lib.inpile[i]) == 'trick') list.push(['锦囊', '', lib.inpile[i]]);
						}
						return ui.create.dialog(get.translation('qice'), [list, 'vcard']);
					},
					filter(button, player) {
						return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
					},
					backup(links, player) {
						return {
							filterCard: false,
							selectCard: 0,
							position: 'h',
							popname: true,
							viewAs: { name: links[0][2] },
						};
					},
					prompt(links, player) {
						return '将虚空手牌当作' + get.translation(links[0][2]) + '使用';
					},
				},
				ai: {
					order: 1,
					result: {
						player(player) {
							return false;
							var num = 0;
							var cards = player.getCards('h');
							if (cards.length >= 3 && player.hp >= 3) return 0;
							if (Array.isArray(cards)) for (const i of cards) {
								num += Math.max(0, get.value(i, player, 'raw'));
							}
							num /= cards.length;
							num *= Math.min(cards.length, player.hp);
							return 12 - num;
						},
					},
					threaten: 1.6,
				},
			},
			千鹤测试_日志: {
				nobracket: true,
				forced: true,
				superCharlotte: true,
				charlotte: true,
				fixed: true,
				derivation: ['千鹤测试_受击'],
				group: ['千鹤测试_受击', '千鹤测试_印牌', '千鹤测试_炸金花'],
			},
			千鹤测试_受击: {
				forced: true,
				silent: true,
				trigger: {
					global: 'damageBegin4',
				},
				filter(event, player, name) {
					var fig = lib.config.autoskilllist.includes('千鹤测试_受击');
					if (!fig) return true;
					return false;
				},
				content() {
					'step 0';
					var list = [];
					list.push('event');
					list.push('trigger');
					player.chooseControl(list);
					('step 1');
					if (result.control == 'event') {
						if (event.source) game.log('【event.source】', event.source);
						if (event.name) game.log('【event.name】', event.name);
						if (event.parent) game.log('【event.parent.name】', event.parent.name);
						if (event.getParent(2)) game.log('【event.getParent(2).name】', event.getParent(2).name);
						if (event.getParent(3)) game.log('【event.getParent(3).name】', event.getParent(3).name);
						if (event.getParent(4)) game.log('【event.getParent(4).name】', event.getParent(4).name);
						if (event.getParent(5)) game.log('【event.getParent(5).name】', event.getParent(5).name);
						if (event.getParent(6)) game.log('【event.getParent(6).name】', event.getParent(6).name);
						if (event.getParent(7)) game.log('【event.getParent(7).name】', event.getParent(7).name);
						if (event.getParent(8)) game.log('【event.getParent(8).name】', event.getParent(8).name);
						if (event.getParent(9)) game.log('【event.getParent(9).name】', event.getParent(9).name);
					} else {
						if (trigger.source) game.log('【trigger.source】', trigger.source);
						if (trigger.name) game.log('【trigger.name】', trigger.name);
						if (trigger.parent) game.log('【trigger.parent.name】', trigger.parent.name);
						if (trigger.getParent(2)) game.log('【trigger.getParent(2).name】', trigger.getParent(2).name);
						if (trigger.getParent(3)) game.log('【trigger.getParent(3).name】', trigger.getParent(3).name);
						if (trigger.getParent(4)) game.log('【trigger.getParent(4).name】', trigger.getParent(4).name);
						if (trigger.getParent(5)) game.log('【trigger.getParent(5).name】', trigger.getParent(5).name);
						if (trigger.getParent(6)) game.log('【trigger.getParent(6).name】', trigger.getParent(6).name);
						if (trigger.getParent(7)) game.log('【trigger.getParent(7).name】', trigger.getParent(7).name);
						if (trigger.getParent(8)) game.log('【trigger.getParent(8).name】', trigger.getParent(8).name);
						if (trigger.getParent(9)) game.log('【trigger.getParent(9).name】', trigger.getParent(9).name);
					}
				},
			},
			千鹤_tiaojiao: {},
			千鹤_xingyu: {},
		},
		translate: {
			zhenxiang: '眼与真相',
			zhenxiang_info: '眼与真相',
			visible_zhenxiang: '眼与真相',
			shuohui: '烁辉',
			ceshi_xianzhen: '陷阵',
			ceshi_xianzhen_info: '陷阵',
			dcxunjie: '殉节',
			dcxunjie_info: '每轮每项限一次.一名角色的回合结束时,若你本回合于摸牌阶段外得到过牌,你可以选择一项:1.令一名角色将手牌数摸或弃置至与其体力值相同;2.令一名角色将体力回复或失去至与其手牌数相同.',
			ceshi_huange: '欢歌',
			ceshi_tianlai: '天籁',
			gai_duliang: '督粮',
			gai_duliang_info: '一名角色准备阶段开始时,你可以摸一张牌并交给其任意张牌(可以为0).若如此做,其本回合的摸牌阶段移至弃牌阶段后执行.',
			gai_bianzhen: '变阵',
			gai_bianzhen_info: '出牌阶段限一次,你可以失去1点体力或弃置2张牌.若如此做,此回合结束时你选择一名角色和一个阶段,令该角色获得一个仅包含该阶段的额外的回合.(准备,判定,摸牌,出牌,弃牌,结束)',
			千鹤_tiaojiao: '星怒',
			千鹤_tiaojiao_info: '锁定技,当你受到伤害后,①你记录此伤害的产生原因(非角色),回复一点体力.②若你的记录里有此次伤害的产生原因,则伤害来源失去一点体力并摸两张牌.',
			千鹤_xingyu: '星遇',
			千鹤_xingyu_info: '每回合限一次,当你距离１以内的其他角色成为牌的目标后,此牌的使用者可以将此牌转移给你.',
			千鹤ceshi_ceshi: '试员',
			千鹤测试_炸金花: '金花',
			千鹤测试_炸金花_info: '金花',
			千鹤测试_印牌: '印牌',
			千鹤测试_日志: 'GM日志',
			千鹤测试_日志_info: 'GM日志',
			千鹤测试_UB: 'UB',
			千鹤测试_UB_info: '对一名角色发起一次普通攻击',
			千鹤测试_受击: '受击',
			千鹤测试_受击_info: '需开启「自动发动」,受到伤害时,追溯游戏日志',
			千鹤测试_用牌: '用牌',
			千鹤测试_用牌_info: '需开启「自动发动」,使用或打出牌时,追溯游戏日志',
			sew_xuni: '虚拟',
			sew_xuni_info: '每回合限两次,每回合对每名角色限一次.你可以将一名男性／女性角色的一张牌作为伤害／非伤害的基本或普通锦囊使用,此牌的目标必需包含该角色',
		},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

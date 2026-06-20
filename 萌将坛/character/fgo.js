'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqhFgo_zouku: {
				forced: true,
				trigger: {
					player: 'phaseUseBegin',
				},
				filter(trigger, player) {
					var players = game.filterPlayer((target) => {
						var hs = target.getCards('h', (cardx) => {
							var id = 'scqhFgo_zouku_' + player.playerid;
							return !cardx.hasGaintag(id);
						});
						if (!hs.length) return false;
						return true;
					});
					return players.length;
				},
				content() {
					'step 0';
					var next = player.chooseTarget(function (card, player, target) {
						var hs = target.getCards('h', (cardx) => {
							var id = 'scqhFgo_zouku_' + player.playerid;
							return !cardx.hasGaintag(id);
						});
						if (!hs.length) return false;
						return true;
					});
					next.set('prompt', '请选择【奏哭】的目标');
					next.set('prompt2', get.translation(event.name + '_info'));
					next.set('ai', function (target) {
						var player = _status.event.player;
						var att = get.attitude(player, target);
						return 1;
					});
					('step 1');
					var target = (result.targets || [])[0] || false;
					if (target) {
						var hs = target.getCards('h');
						var id = event.name + '_' + player.playerid;
						game.broadcastAll(lib.skill[event.name].createGainTag, id, player.name);
						game.addVideo('skill', player, [event.name, [id, player.name]]);
						if (hs.length) target.addGaintag(hs, id);
					}
				},
				createGainTag(skill, name) {
					if (!lib.skill[skill]) {
						lib.skill[skill] = {
							charlotte: true,
						};
						lib.translate[skill] = '' + get.translation(name);
					}
					let sourceSkill = 'scqhFgo_zouku';
					if (!_status.postReconnect[sourceSkill]) {
						_status.postReconnect[sourceSkill] = [lib.skill[sourceSkill].createGainTag, [], []];
					}
					_status.postReconnect[sourceSkill][1].add(skill);
					_status.postReconnect[sourceSkill][2].add(name);
				},
				group: ['scqhFgo_zouku_draw'],
				subSkill: {
					draw: {
						charlotte: true,
						forced: true,
						trigger: {
							global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
						},
						filter(trigger, player) {
							var id = 'scqhFgo_zouku_' + player.playerid;
							var gamers = game.filterPlayer((target) => {
								var evt = trigger.getl(target);
								if (!evt || !evt.hs || !evt.hs.length) return false;
								for (let i in evt.gaintag_map) {
									if (evt.gaintag_map[i].includes(id)) return true;
								}
								return false;
							});
							return gamers.length;
						},
						content() {
							var num = 0;
							var id = 'scqhFgo_zouku_' + player.playerid;
							var gamers = game.filterPlayer((target) => {
								var evt = trigger.getl(target);
								var numx = 0;
								if (!evt || !evt.hs || !evt.hs.length) return false;
								for (let i in evt.gaintag_map) {
									if (evt.gaintag_map[i].includes(id)) numx++;
								}
								if (numx > 0) return (num += numx);
								return false;
							});
							if (num > 0) {
								player.draw(num);
							}
						},
					},
				},
			},
			scqhFgo_huantong: {
				forced: true,
				trigger: {
					global: 'damageBegin4',
				},
				filter(trigger, player) {
					if (trigger.unreal) return false;
					return true;
				},
				content() {
					trigger.unreal = true;
					var name = event.name + '_after';
					var evt = trigger.getParent('phase');
					if (evt && evt.after) {
						var bool = evt.after.filter((evt2) => {
							return evt2.name == name;
						});
						if (!bool.length) {
							var next = game.createEvent(name);
							next.player = trigger.player;
							next._trigger = evt;
							next.setContent(lib.skill[event.name].scqhContent);
							event.next.remove(next);
							evt.after.add(next);
						}
					}
				},
				scqhContent() {
					'step 0';
					var history = player.getHistory('damage');
					var count = history.length || 0;
					event.count = count;
					if (!count) event.finish();
					else if (player.countCards('h')) {
						var next = player.chooseToDiscard('h', count, function (card, player) {
							let uic = ui.selected.cards || [];
							let suit = card.suit;
							for (let cardx of uic) {
								if (cardx.suit == suit) return false;
							}
							return true;
						});
						next.set('ai', function (card) {
							return 7 - get.value(card);
						});
						next.set('complexCard', true);
						next.set('prompt', '幻痛:弃置' + count + '张不同花色的牌,否则流失' + count + '点体力');
					} else
						event._result = {
							cards: [],
							bool: false,
						};
					('step 1');
					var cards = result.cards || [];
					if (!cards.length) {
						player.loseHp(event.count);
					}
				},
			},
			scqhFgo_qiangyun: {
				trigger: {
					player: 'judge',
				},
				filter(trigger, player) {
					if (trigger.fixedResult && trigger.fixedResult.suit) {
						if (trigger.fixedResult.suit == 'club') return false;
						if (trigger.fixedResult.suit == 'heart') return false;
					}
					if (trigger.player.judging && trigger.player.judging[0]) {
						let suit = trigger.player.judging[0].suit;
						if (suit == 'club') return false;
						if (suit == 'heart') return false;
					}
					return true;
				},
				prompt(trigger, player) {
					let prompt = get.translation(trigger.player);
					if (trigger.player == player) prompt += '(你)';
					prompt += '的';
					prompt += trigger.judgestr || '「未知信息」';
					prompt += '判定为';
					prompt += get.translation(trigger.player.judging[0]);
					prompt += ',是否发动【强运】？';
					return prompt;
				},
				prompt2: '',
				check(trigger, player) {
					if (trigger.judgestr) {
						if (trigger.judgestr == '乐不思蜀') return false;
						if (trigger.judgestr == '洪水') return false;
						if (trigger.judgestr == '雷击') {
							if (trigger.fixedResult && trigger.fixedResult.suit) {
								if (trigger.fixedResult.suit == 'spade') return false;
							}
						}
					}
					return true;
				},
				content() {
					player.addExpose(0.25);
					let suit = get.translation('club2');
					player.popup(suit);
					game.log(player, '将判定结果改为了', '#y' + suit);
					if (!trigger.fixedResult) trigger.fixedResult = {};
					trigger.fixedResult.suit = 'club';
					trigger.fixedResult.color = get.color({ suit: 'club' });
				},
				ai: {
					rejudge: true,
					tag: {
						rejudge: 0.4,
					},
					expose: 0.5,
				},
				subfrequent: ['tiandu'],
				group: ['scqhFgo_qiangyun_tiandu'],
				subSkill: {
					tiandu: {
						inherit: 'tiandu',
					},
				},
			},
			scqhFgo_shiyue: {
				vcards(player, trigger) {
					let vcards = {};
					vcards.delay = [];
					vcards.basic = [];
					if (!player.countCards('hes')) return vcards;
					let storage = player.storage.scqhFgo_shiyue_temp || [];
					for (let name of lib.inpile) {
						let card = { name: name };
						let type = get.type(card);
						if (type == 'delay') {
							if (player.canAddJudge(card)) vcards.delay.add(name);
						} else if (type == 'basic' || type == 'trick') {
							if (storage.includes(name)) continue;
							if (trigger) {
								if (!trigger.filterCard) continue;
								if (!trigger.filterCard(card, player, trigger)) continue;
							}
							vcards.basic.add(name);
						}
					}
					return vcards;
				},
				hiddenCard(player, name) {
					let vcards = lib.skill.scqhFgo_shiyue.vcards(player, false) || {};
					return vcards.basic.includes(name) && vcards.delay.length;
				},
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(trigger, player) {
					let vcards = lib.skill.scqhFgo_shiyue.vcards(player, trigger) || {};
					return vcards.basic.length && vcards.delay.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						let dialog = ui.create.dialog('誓约', 'hidden');
						let vcards = lib.skill.scqhFgo_shiyue.vcards(player, trigger) || {};
						dialog.add('判定牌');
						dialog.add([vcards.delay, 'vcard']);
						dialog.add('誓约牌');
						dialog.add([vcards.basic, 'vcard']);
						return dialog;
					},
					filter(button, player) {
						let uib = ui.selected.buttons;
						if (uib && uib.length) {
							if (get.type(button.link[2]) == get.type(uib[0].link[2])) return false;
						}
						return true;
					},
					select: 2,
					check(button) {
						let evt = _status.event;
						let card = {
							name: button.link[2],
						};
						if (get.type(card) == 'delay') return 100;
						if (card.name == 'shan') return 10;
						return evt.player.getUseValue(card) || 0;
					},
					backup(links, player) {
						if (get.type(links[0][2]) == 'delay') links.reverse();
						return {
							popname: true,
							filterCard: true,
							selectCard: 1,
							position: 'hes',
							check(card) {
								return 7 - get.value(card);
							},
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
								suit: 'none',
								number: false,
								cards: [],
							},
							delayCard: links[1][2],
							precontent() {
								var temp = 'scqhFgo_shiyue_temp';
								player.addTempSkill(temp);
								player.markAuto(temp, [event.result.card.name]);
								var cards = event.result.cards || event.result.card.cards;
								var delay = {
									name: lib.skill.scqhFgo_shiyue_backup.delayCard,
									scqhFgo_shiyue: true,
								};
								player.addJudge(delay, cards);
								player.$gain2(cards);
								event.result.cards = [];
								event.result.card.cards = [];
								event.result.card.number = false;
							},
						};
					},
					prompt(links, player) {
						if (get.type(links[0][2]) == 'delay') links.reverse();
						let str = '将一张牌当做【';
						str += get.translation(links[1][2]);
						str += '】置入你的判定区,视为使用或打出一张【';
						str += get.translation(links[0][3]) || '';
						str += get.translation(links[0][2]) || '';
						str += '】';
						return str;
					},
				},
				ai: {
					save: true,
					respondSha: true,
					respondShan: true,
					order(item, player) {
						return 5;
					},
					result: {
						player(player, target) {
							let evt = _status.event;
							if (evt.type && evt.type == 'wuxie') {
								let evtx = evt.getParent('phaseJudge');
								if (evtx && evtx.name == 'phaseJudge') {
									if (evtx.player && evtx.player == player) return 0;
								}
							}
							return 1;
						},
					},
				},
				group: ['scqhFgo_shiyue_noNext'],
				subSkill: {
					temp: {
						charlotte: true,
						intro: {
							content: '$',
						},
					},
					noNext: {
						forced: true,
						trigger: {
							global: 'addJudgeBefore',
						},
						filter(trigger, player) {
							if (!trigger.card) return false;
							if (trigger.player == player) return false;
							let evt = {
								player: trigger.parent.player || false,
								parent: trigger.parent.name || false,
								parent2: trigger.getParent(2).name || false,
							};
							if (!evt.player || evt.player != player) return false;
							let list = [trigger.card.name, trigger.card.name + 'Cancel'];
							if (!evt.parent || !list.includes(evt.parent)) return false;
							if (!evt.parent2 || evt.parent2 != 'phaseJudge') return false;
							return true;
						},
						content() {
							trigger.player = player;
						},
					},
				},
			},
			scqhFgo_wangdao: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				check(trigger, player) {
					return true;
				},
				filter(trigger, player) {
					let es = player.getCards('hej');
					if (!es.length) return false;
					return true;
				},
				async content(event, trigger, player) {
					const cards = player.getCards('hej');
					const result = {};
					if (cards.length > 1) {
						const hs = player.getCards('h');
						const es = player.getCards('e');
						const js = player.getCards('j');
						const list = [];
						list.add('王道:展示一张牌');
						if (hs.length) {
							list.add('手牌区');
							list.add(hs);
						}
						if (es.length) {
							list.add('装备区');
							list.add(es);
						}
						if (js.length) {
							list.add('判定区');
							list.add(js);
						}
						const next = player.chooseButton(list, true);
						next.set('ai', get.buttonValue);
						result.cards = (await next).result.links || [];
					} else result.cards = cards;
					const targets = [];
					const color = {};
					if (result.cards.length) {
						player.showCards(result.cards);
						color.show = get.color(result.cards[0]);
						const gamers = game.filterPlayer((current) => current != player);
						for (const target of gamers) {
							if (!target.countCards('h')) continue;
							let zhu = false;
							switch (get.mode()) {
								case 'identity': {
									zhu = target.isZhu;
									break;
								}
								case 'guozhan': {
									zhu = get.is.jun(target);
									break;
								}
								case 'versus': {
									zhu = target.identity == 'zhu';
									break;
								}
								case 'doudizhu': {
									zhu = target == game.zhu;
								}
							}
							if (zhu) {
								targets.add(target);
								game.log('强制参与议事:', target);
							} else if (targets.length < 2) {
								let str2 = '王道:是否参与议事';
								let next2 = target.chooseBool(str2);
								let result2 = (await next2).result;
								if (result2.bool) {
									targets.add(target);
									target.popup('同意');
									game.log('参与议事:', target);
								} else {
									target.popup('拒绝');
									game.log('拒绝议事:', target);
								}
							}
						}
					}
					if (targets.length) {
						player.line(targets, 'green');
						const next3 = player.chooseToDebate(targets);
						const result3 = (await next3).result;
						color.debate = result3 && result3.opinion ? result3.opinion : false;
						if (color.show && color.debate && color.show == color.debate) {
							game.log(player, '的王道得到认可');
							for (const target of game.filterPlayer()) {
								let position = target == player ? 'ej' : 'hej';
								if (target.countGainableCards(player, position)) {
									let next4 = player.gainPlayerCard(target);
									next4.set('position', position);
									next4.set('delay', true);
									next4.set('boolline', false);
								}
							}
						} else {
							game.log(player, '的王道未被认可');
							const card = get.discardPile((card) => card.name == 'sha');
							if (card) player.gain(card, 'gain2');
							game.updateRoundNumber();
							const next5 = player.phaseUse();
							event.next.remove(next5);
							trigger.next.push(next5);
						}
					}
				},
			},
			scqhFgo_yangmu: {
				forced: true,
				trigger: {
					player: 'phaseUseBegin',
				},
				filter(trigger, player) {
					return player.countCards('he');
				},
				async content(event, trigger, player) {
					const next1 = player.chooseCardTarget({
						prompt: get.prompt(event.name),
						prompt2: get.translation(event.name + '_info'),
						position: 'he',
						filterCard(card, player) {
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
							let player = _status.event.player;
							let att = get.attitude(player, target);
							return Math.abs(att) + target.countCards('h');
						},
					});
					const result1 = (await next1).result;
					const cards = result1.cards || [];
					const target = (result1.targets || [])[0] || false;
					if (cards.length && target) {
						player.give(cards, target, 'give');
						const list = ['流失一点体力', '弃置' + get.translation(cards) + ',且本回合内' + get.translation(target) + '的红色手牌均视为【杀】且对你使用牌不受距离和次数限制'];
						const next2 = target.chooseControlList(true, list, function (event, player) {
							var source = _status.event.source;
							var player = _status.event.player;
							var att = get.attitude(player, source);
							var hss = source.countCards('h', (card) => {
								if (get.color(card) == 'red') return true;
								if (card.name == 'sha') return true;
								return false;
							});
							var hsp = player.countCards('h', { name: 'shan' });
							hss -= hsp;
							if (hss > player.hp || hss > 1) return 0;
							if (player.hasSkillTag('maihp')) return 1;
							return 1;
						});
						next2.set('source', player);
						const result2 = (await next2).result;
						if (result2.index == 0) {
							target.loseHp();
						} else {
							const hst = target.getCards('he', (card) => cards.includes(card));
							if (hst.length) target.discard(hst);
							var skill = event.name + '_used';
							player.addTempSkill(skill);
							var storage = player.storage[skill] || [];
							storage.add(target);
							player.storage[skill] = storage;
						}
					}
				},
				subSkill: {
					used: {
						charlotte: true,
						mod: {
							cardname(card, player, name) {
								if (get.color(card) == 'red') return 'sha';
							},
							cardUsableTarget(card, player, target) {
								var storage = player.storage.scqhFgo_yangmu_used || [];
								if (storage.includes(target)) return true;
							},
							targetInRange(card, player, target) {
								var storage = player.storage.scqhFgo_yangmu_used || [];
								if (storage.includes(target)) return true;
							},
							selectTarget(card, player, range) {
								game.filterPlayer((target) => {
									var storage = player.storage.scqhFgo_yangmu_used || [];
									if (storage.includes(target)) target.prompt('<font color=red>仰慕</font>');
								});
							},
						},
					},
				},
			},
			scqhFgo_panxi: {
				global: 'g_chenhuodajie',
				vcards(player, trigger) {
					if (!player.countCards('hes')) return false;
					let storage = player.storage.scqhFgo_panxi_used || [];
					let vcards = [];
					vcards.push('chenhuodajie');
					vcards.push('chenghuodajie');
					vcards.push('chuqibuyi');
					if (storage.length) vcards.removeArray(storage);
					return (
						vcards.filter((name) => {
							let card = { name: name };
							if (trigger) {
								return trigger.filterCard(card, player, trigger);
							}
							return true;
						}) || []
					);
				},
				hiddenCard(player, name) {
					let vcards = lib.skill.scqhFgo_panxi.vcards(player, false) || [];
					return vcards.includes(name);
				},
				enable: 'chooseToUse',
				filter(trigger, player) {
					let vcards = lib.skill.scqhFgo_panxi.vcards(player, trigger) || [];
					return vcards.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						let vcards = lib.skill.scqhFgo_panxi.vcards(player, trigger) || [];
						let dialog = ui.create.dialog('叛袭', [vcards, 'vcard']);
						dialog.direct = true;
						return dialog;
					},
					filter(button, player) {
						return true;
					},
					check(button) {
						let evt = _status.event;
						let card = {
							name: button.link[2],
						};
						if (evt.parent.type != 'phase') return 1;
						return evt.player.getUseValue(card);
					},
					backup(links, player) {
						return {
							popname: true,
							filterCard: true,
							selectCard: 1,
							position: 'hes',
							check(card) {
								return 8 - get.value(card);
							},
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
							},
							precontent() {
								var skill = 'scqhFgo_panxi_used';
								player.addTempSkill(skill);
								var card = event.result.card;
								var storage = player.storage[skill] || [];
								storage.add(card.name);
								player.storage[skill] = storage;
							},
						};
					},
					prompt(links, player) {
						return '将一张牌当做【' + get.translation(links[0][2]) + '】使用或打出';
					},
				},
				ai: {
					order(item, player) {
						return 1;
					},
					result: {
						player: 1,
					},
				},
				subSkill: {
					used: {
						charlotte: true,
						mark: true,
						marktext: '叛',
						intro: {
							content: '$',
						},
					},
				},
			},
			scqhFgo_shengke: {
				init(player, skill) {
					let list = [];
					for (let i = 1; i <= 12; i++) list.push(i);
					player.storage[skill] = {
						round: list,
						miao: 0,
					};
				},
				mark: true,
				marktext: '🔅',
				intro: {
					name: '圣者的数字',
					mark(dialog, storage, player) {
						dialog.content.style['overflow-x'] = 'visible';
						if (!storage)
							storage = {
								round: [],
								miao: 0,
							};
						if (!storage.round.length) return '太阳落山了';
						let core = document.createElement('div');
						core.style.width = '0';
						let centerX = -15;
						let centerY = 80;
						let radius = 80;
						let radian = (Math.PI * 2) / storage.round.length;
						let fulllist = ['１', '２', '３', '４', '５', '６', '７', '８', '９', '10', '11', '12'];
						for (let i = 0; i < storage.round.length; i++) {
							let td = document.createElement('div');
							let color = '';
							if (storage.miao == storage.round[i]) color = '#FFD700';
							td.innerHTML = '<font color=' + color + '>[' + fulllist[storage.round[i] - 1] + ']</font>';
							td.style.position = 'absolute';
							core.appendChild(td);
							td.style.left = centerX + radius * Math.sin(radian * i) + 'px';
							td.style.top = centerY - radius * Math.cos(radian * i) + 'px';
						}
						dialog.content.appendChild(core);
					},
					markcount(storage, player) {
						if (!storage) storage = {};
						if (!storage.miao) storage.miao = 0;
						return storage.miao;
					},
				},
				forced: true,
				trigger: {
					global: ['useCard', 'respond'],
				},
				filter(trigger, player) {
					let number = trigger.card.number;
					return number;
				},
				content() {
					'step 0';
					var number = trigger.card.number;
					var map = lib.skill[event.name].isMiao(player, number);
					if (map.shengke) {
						var next = game.createEvent(event.name);
						next.player = player;
						next.setContent(lib.skill[event.name].vcards);
						event.next.remove(next);
						trigger.after.push(next);
					}
					player.storage[event.name] = map;
					player.markSkill(event.name);
					if (trigger.player == player && number % 3 == 0) {
						var next = player.chooseBool(get.prompt2(event.name));
						next.set('frequentSkill', event.name);
						next.ai = lib.filter.all;
					} else event.finish();
					('step 1');
					if (result.bool) player.draw();
				},
				vcards() {
					'step 0';
					var vcards = [];
					var names = ['sha', 'tao', 'jiu'];
					for (let name of names) {
						let card = { name: name };
						let type = get.type(card);
						let currents = game.filterPlayer((current) => player.canUse(card, current));
						if (currents.length) vcards.push([type, '', name]);
						if (name != 'sha') continue;
						for (let nature of lib.inpile_nature) {
							card.nature = nature;
							let currents = game.filterPlayer((current) => player.canUse(card, current));
							if (currents.length) vcards.push([type, '', name, nature]);
						}
					}
					if (vcards.length) {
						var list = ['是否视为使用一张基本牌？', [vcards, 'vcard']];
						var next = player.chooseButton(list);
						next.set('ai', function (button) {
							let player = _status.event.player;
							let card = {};
							card.name = button.link[2];
							card.nature = button.link[3];
							card.isCard = true;
							return player.getUseValue(card);
						});
					} else event.finish();
					('step 1');
					var links = result.links || [];
					if (links.length) {
						var card = {
							name: result.links[0][2],
							nature: result.links[0][3],
						};
						var next = player.chooseUseTarget(card);
						next.addCount = false;
						if (card.name != 'sha') next.forced = true;
					}
				},
				isMiao(player, number) {
					if (!number) number = 0;
					let storage = player.getStorage('scqhFgo_shengke') || {};
					let shengke = [3, 4, 5, 6, 9, 10, 11, 12];
					let map = {
						round: storage.round,
						miao: storage.miao,
						shengke: false,
					};
					if (!map.round) map.round = [];
					if (!map.miao) {
						if (map.round.includes(number)) {
							map.miao = number;
						}
					} else map.miao += 1;
					if (map.miao && map.miao >= 13) map.miao -= 12;
					map.shengke = map.miao && map.miao == number && shengke.includes(map.miao);
					map.list = shengke;
					return map;
				},
				mod: {
					aiValue(player, card, val) {
						let number = card.number;
						let map = lib.skill.scqhFgo_shengke.isMiao(player, number);
						if (map.shengke || number % 3 == 0) return val * 2.1;
					},
					aiUseful(player, card, val) {
						let number = card.number;
						let map = lib.skill.scqhFgo_shengke.isMiao(player, number);
						if (map.shengke || number % 3 == 0) return val * 2.1;
					},
					aiOrder(player, card, order) {
						let number = card.number;
						let map = lib.skill.scqhFgo_shengke.isMiao(player, number);
						if (map.shengke || number % 3 == 0) return order + 9;
					},
					maxHandcard(player, num) {
						let name = 'scqhFgo_shengke';
						let tagname = name + '_tag';
						let xxx = '';
						let storage = player.storage[name] || {};
						let hs = player.getCards('h', (card) => {
							card.removeGaintag(tagname);
							let number = card.number;
							let map = lib.skill[name].isMiao(player, number);
							if (map.shengke && map.miao) {
								xxx = map.miao;
								if (xxx == 11) xxx = 'J';
								if (xxx == 12) xxx = 'Q';
								lib.translate[tagname] = get.translation(name) + xxx;
								card.addGaintag(tagname);
							} else if (!storage.miao && map.list.includes(number)) {
								lib.translate[tagname] = get.translation(name) + xxx;
								card.addGaintag(tagname);
							}
							return false;
						});
					},
				},
				isMiaoTwo(player, number) { },
			},
			scqhFgo_buye: {
				enable: 'phaseUse',
				filter(trigger, player) {
					return player.countDiscardableCards(player, 'he');
				},
				position: 'he',
				filterCard: true,
				selectCard: [1, Infinity],
				check(card) {
					let player = _status.event.player;
					if (!player.hasSkill('scqhFgo_shengke')) return 0;
					if (!player.needsToDiscard()) return 0;
					let uic = ui.selected.cards || [];
					if (uic.length) return 0;
					return 7 - get.value(card);
				},
				content() {
					var storage = player.storage.scqhFgo_shengke || {};
					if (!storage.miao) storage.miao = 0;
					storage.miao += cards.length;
					if (storage.miao > 12) storage.miao -= 12;
					if (storage.miao < 0) storage.miao = 0;
					player.storage.scqhFgo_shengke = storage;
					player.markSkill('scqhFgo_shengke');
				},
				ai: {
					order(item, player) {
						return 1;
					},
					result: {
						player: 1,
					},
				},
			},
			scqhFgo_shengke: {
				init(player, skill) {
					let list = [12];
					for (let i = 1; i <= 11; i++) list.push(i);
					player.storage[skill] = {
						round: list,
					};
				},
				mark: true,
				marktext: '🔅',
				intro: {
					name: '圣者的数字',
					mark(dialog, storage, player) {
						dialog.content.style['overflow-x'] = 'visible';
						if (!storage) storage = {};
						let round = storage.round || [];
						let sun = storage.sun || [];
						let anchor = storage.anchor || 0;
						if (!round.length) return '太阳落山了';
						let core = document.createElement('div');
						core.style.width = '0';
						let centerX = -15;
						let centerY = 80;
						let radius = 80;
						let radian = (Math.PI * 2) / round.length;
						let fulllist = ['１', '２', '３', '４', '５', '６', '７', '８', '９', '10', '11', '12'];
						for (let i = 0; i < round.length; i++) {
							let td = document.createElement('div');
							let color = '';
							if (anchor == round[i]) color = '#FFD700';
							td.innerHTML = '<font color=' + color + '>[' + fulllist[round[i] - 1] + ']</font>';
							td.style.position = 'absolute';
							core.appendChild(td);
							td.style.left = centerX + radius * Math.sin(radian * i) + 'px';
							td.style.top = centerY - radius * Math.cos(radian * i) + 'px';
						}
						dialog.content.appendChild(core);
					},
					markcount(storage, player) {
						if (!storage) storage = {};
						if (!storage.anchor) storage.anchor = 0;
						return storage.anchor;
					},
				},
				isAnchor(player, num, will) {
					if (!num) num = 0;
					let storage = player.getStorage('scqhFgo_shengke') || {};
					let nums = [9, 10, 11, 12, 3, 4, 5, 6];
					let map = {};
					map.anchor = 0;
					if (!will) {
						let anchor = storage.anchor || num;
						map.bool = num == anchor && nums.includes(anchor);
					} else {
						let list = [];
						list.push(num);
						let mark = player.countMark('charge');
						if (mark && player.hasSkill('scqhFgo_buye')) {
							list.push(num + mark);
							list.push(num - mark);
						}
						for (let number of list) {
							let anchor = storage.anchor || number;
							map.bool = number == anchor && nums.includes(anchor);
							if (map.bool) {
								map.anchor = number;
								break;
							}
						}
					}
					return map;
				},
				forced: true,
				trigger: {
					global: ['useCard', 'respond'],
				},
				filter(trigger, player) {
					let num = trigger.card.number || 0;
					return num;
				},
				content() {
					'step 0';
					var num = trigger.card.number || 0;
					var map = lib.skill[event.name].isAnchor(player, num);
					if (map.bool) {
						var next = game.createEvent(event.name);
						next.player = player;
						next.setContent(lib.skill[event.name].vcards);
						event.next.remove(next);
						trigger.after.push(next);
					}
					var storage = player.storage[event.name] || {};
					if (!storage.anchor) storage.anchor = num;
					else storage.anchor++;
					if (storage.anchor >= 13) storage.anchor -= 12;
					player.storage[event.name] = storage;
					player.markSkill(event.name);
					if (trigger.player == player && num % 3 == 0) {
						var next = player.chooseBool(get.prompt2(event.name));
						next.set('frequentSkill', event.name);
						next.ai = lib.filter.all;
					} else event.finish();
					('step 1');
					if (result.bool) player.draw();
				},
				vcards() {
					'step 0';
					var vcards = [];
					var names = ['sha', 'tao', 'jiu'];
					for (let name of names) {
						let card = { name: name };
						let type = get.type(card);
						let currents = game.filterPlayer((current) => player.canUse(card, current));
						if (currents.length) vcards.push([type, '', name]);
						if (name != 'sha') continue;
						for (let nature of lib.inpile_nature) {
							card.nature = nature;
							let currents = game.filterPlayer((current) => player.canUse(card, current));
							if (currents.length) vcards.push([type, '', name, nature]);
						}
					}
					if (vcards.length) {
						var list = ['是否视为使用一张基本牌？', [vcards, 'vcard']];
						var next = player.chooseButton(list);
						next.set('ai', function (button) {
							let player = _status.event.player;
							let card = {};
							card.name = button.link[2];
							card.nature = button.link[3];
							card.isCard = true;
							return player.getUseValue(card);
						});
					} else event.finish();
					('step 1');
					var links = result.links || [];
					if (links.length) {
						var card = {
							name: result.links[0][2],
							nature: result.links[0][3],
						};
						var next = player.chooseUseTarget(card);
						next.addCount = false;
						if (card.name != 'sha') next.forced = true;
					}
				},
				mod: {
					aiValue(player, card, val) {
						let num = card.number;
						let map = lib.skill.scqhFgo_shengke.isAnchor(player, num);
						if (map.bool || num % 3 == 0) return val * 2.1;
					},
					aiUseful(player, card, val) {
						let num = card.number;
						let map = lib.skill.scqhFgo_shengke.isAnchor(player, num);
						if (map.bool || num % 3 == 0) return val * 2.1;
					},
					aiOrder(player, card, order) {
						let num = card.number;
						let map = lib.skill.scqhFgo_shengke.isAnchor(player, num);
						let mapWill = lib.skill.scqhFgo_shengke.isAnchor(player, num, true);
						if (map.bool || mapWill.bool || num % 3 == 0) return order + 9;
					},
				},
			},
			scqhFgo_buye: {
				scqh_chargeSkill: true,
				chargeSkill: true,
				enable: 'phaseUse',
				filter(trigger, player) {
					return player.countDiscardableCards(player, 'he');
				},
				position: 'he',
				filterCard: true,
				selectCard: [1, Infinity],
				check(card) {
					let player = _status.event.player;
					if (!player.hasSkill('scqhFgo_shengke')) return 0;
					if (!player.needsToDiscard()) return 0;
					let uic = ui.selected.cards || [];
					if (uic.length) return 0;
					return 0;
					return 7 - get.value(card);
				},
				content() {
					var num = cards.length;
					player.scqh_charge(num);
				},
				ai: {
					order(item, player) {
						return 1;
					},
					result: {
						player: 1,
					},
				},
				mod: {
					maxHandcard(player, num) {
						return;
						let skill = 'scqhFgo_shengke';
						let storage = player.storage[skill] || {};
						let round = storage.round || [];
						for (let sub of round) {
							player.removeGaintag(skill + '_' + sub);
						}
						let mark = player.countMark('charge');
						let hs = player.getCards('hs');
						if (!hs.length) return;
						for (let card of hs) {
							let number = card.number;
							let mapWill = lib.skill[skill].isAnchor(player, number, true);
							if (!mapWill.bool) continue;
							let named = skill + '_' + mapWill.anchor;
							lib.translate[named] = mapWill.anchor;
							player.addGaintag(card, named);
						}
					},
				},
				group: ['scqhFgo_buye_use'],
				subSkill: {
					use: {
						forced: true,
						trigger: {
							player: ['useCardBegin', 'respondBegin'],
						},
						filter(trigger, player) {
							let num = trigger.card.number || 0;
							let mapWill = lib.skill.scqhFgo_shengke.isAnchor(player, num, true);
							return mapWill.bool;
						},
						content() {
							let num = trigger.card.number || 0;
							let mapWill = lib.skill.scqhFgo_shengke.isAnchor(player, num, true);
							player.removeMark('charge', player.countMark('charge'), false);
							trigger.card.number = mapWill.anchor;
						},
					},
				},
			},
			scqhFgo_wulian: {
				vcards(trigger, player) {
					let uid = ui.cardPile.childNodes || [];
					if (!uid.length) return [];
					let vcards = [];
					let skill = 'scqhFgo_wulian_nouse';
					let storage = player.storage[skill] || {};
					let nouse = storage.nouse || [];
					for (let name of lib.inpile) {
						if (nouse.includes(name)) continue;
						let card = {};
						card.name = name;
						if (get.type(card) != 'basic') continue;
						if (trigger && !trigger.filterCard(card, player, trigger)) continue;
						vcards.push(name);
					}
					return vcards;
				},
				enable: 'chooseToUse',
				filter(trigger, player) {
					let skill = 'scqhFgo_wulian';
					let vcards = lib.skill[skill].vcards(trigger, player);
					return vcards.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						let skill = 'scqhFgo_wulian';
						let vcards = lib.skill[skill].vcards(trigger, player);
						let str = get.translation(skill);
						str += ':使用一张牌';
						let dialog = ui.create.dialog(str, [vcards, 'vcard'], 'hidden');
						dialog.direct = true;
						return dialog;
					},
					check(button) {
						let player = _status.event.player;
						let card = {
							name: button.link[2],
							nature: button.link[3],
						};
						if (card.name == 'shan') return 50;
						return player.getUseValue(card);
					},
					backup(links, player) {
						return {
							popname: true,
							filterCard(card, player) {
								return false;
							},
							selectCard: -1,
							position: 'h',
							check(card) {
								return true;
							},
							viewAs: {
								name: links[0][2],
								scqhFgo_wulian: true,
							},
							precontent() {
								var cards = get.cards();
								player.showCards(cards);
								event.result.cards = cards;
								event.result.card.cards = cards;
								if (cards[0].name != event.result.card.name) {
									var skill = 'scqhFgo_wulian_nouse';
									if (!player.hasSkill(skill)) player.addSkill(skill);
									var storage = player.storage[skill] || {};
									if (!storage.nouse) storage.nouse = [];
									storage.nouse.add(event.result.card.name);
									player.storage[skill] = storage;
									player.markSkill(skill);
								} else {
								}
							},
						};
					},
					prompt(links, player) {
						let str = '将牌堆顶的一张牌当做';
						str += get.translation(links[0][3]) || '';
						str += get.translation(links[0][2]) || '';
						str += '使用';
						return str;
					},
				},
				hiddenCard(player, name) {
					let skill = 'scqhFgo_wulian';
					let vcards = lib.skill[skill].vcards(null, player);
					return vcards.includes(name);
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
					nouse: {
						forced: true,
						charlotte: true,
						mark: true,
						marktext: '武',
						intro: {
							content(storage, player, skill) {
								if (!storage) storage = {};
								let nouse = storage.nouse || [];
								return get.translation(nouse);
							},
							markcount(storage, player) {
								if (!storage) storage = {};
								let nouse = storage.nouse || [];
								let damage = storage.damage || 0;
								let num = nouse.length + 1;
								return damage + '/' + num;
							},
						},
						trigger: {
							player: 'damageEnd',
							source: 'damageEnd',
						},
						filter(trigger, player) {
							return true;
						},
						content() {
							var storage = player.storage[event.name] || {};
							if (!storage.nouse) storage.nouse = [];
							if (!storage.damage) storage.damage = 0;
							storage.damage += Math.max(1, trigger.num);
							if (storage.damage > storage.nouse.length) {
								player.removeSkill(event.name);
							} else {
								player.storage[event.name] = storage;
								player.markSkill(event.name);
							}
						},
					},
				},
			},
			scqhFgo_duofeng: {
				trigger: {
					source: 'damageSource',
				},
				logTarget(trigger, player) {
					let source = trigger.source || false;
					let current = trigger.player || false;
					if (!source || !current) return false;
					if (source == current) return false;
					let target = false;
					if (player == source) target = current;
					if (player == current) target = source;
					return target;
				},
				isDuofeng(player, target) {
					let list = [];
					let skills = target.getSkills(null, false, false);
					for (let skill of skills) {
						if (!get.translation(skill + '_info')) continue;
						if (list.includes(skill)) continue;
						if (get.is.locked(skill, player)) continue;
						if (player.getSkills().includes(skill)) continue;
						let info = get.info(skill);
						if (!info || info.charlotte || info.hiddenSkill || info.zhuSkill || info.juexingji || info.limited || info.dutySkill || info.unique || info.sub) continue;
						list.push(skill);
					}
					let dis = target.disabledSkills || {};
					for (let skill in dis) {
						if (!dis[skill].length) continue;
						if (list.includes(skill)) list.remove(skill);
					}
					return list;
				},
				filter(trigger, player) {
					let skill = 'scqhFgo_duofeng';
					let target = lib.skill[skill].logTarget(trigger, player) || false;
					if (!target) return false;
					if (get.distance(player, target) > 1) return false;
					let skills = lib.skill[skill].isDuofeng(player, target) || [];
					let cards = target.getGainableCards(player, 'e');
					return skills.length || cards.length;
				},
				check(trigger, player) {
					return true;
				},
				content() {
					'step 0';
					var target = lib.skill[event.name].logTarget(trigger, player);
					event.target = target;
					var skills = lib.skill[event.name].isDuofeng(player, target) || [];
					var cards = target.getGainableCards(player, 'e');
					var str = get.translation(event.name);
					var dialog = ui.create.dialog(str, 'hidden');
					var list = [];
					for (let skill of skills) {
						list.push([skill, get.translation(skill)]);
					}
					if (list.length) dialog.add([list, 'tdnodes']);
					if (cards.length) dialog.add([cards, 'vcard']);
					var next = player.chooseButton(1, dialog);
					next.set('filterButton', function (button) {
						let player = _status.event.player;
						return true;
					});
					next.set('ai', function (button) {
						let player = _status.event.player;
						return 1;
					});
					('step 1');
					var links = result.links || [];
					var target = event.target;
					if (links.length) {
						var link = links[0];
						if (get.itemtype(link) == 'card') {
							player.gain(link, target);
						} else if (typeof link == 'string') {
							var next = lib.skill[event.name].isEquip;
							next(player, target, link);
						}
					}
				},
				isEquip(player, target, skill) {
					game.log(player, '选择了', target, '的技能', '#g【' + get.translation(skill) + '】');
					var cname = 'scqhFgo_duofeng_' + skill;
					var mapSkill = lib.skill[skill] || {};
					var mapEquip = lib.card[cname] || {
						fullimage: true,
						type: 'equip',
						subtype: 'equip1',
						enable: true,
						selectTarget: -1,
						filterCard(card, player, target) {
							if (player != target) return false;
							return target.canEquip(card, true);
						},
						modTarget: true,
						allowMultiple: false,
						distance: {
							attackFrom: -1,
						},
						content: lib.element.content.equipCard,
						toself: true,
						onLose() {
							if (!card) return;
							let storage = card.storage[card.name] || false;
							if (storage) {
								storage.enableSkill(card.name);
								storage.unmarkSkill('scqhFgo_duofeng');
							}
						},
						ai: {},
					};
					var num = ['1', '2', '3'].randomGet();
					mapEquip.image = 'ext:' + lib.scqhExtension + '/skin/card/scqhFgo_lansiluote_equip' + num + '.png';
					mapEquip.skills = [skill];
					mapEquip.global = [];
					if (mapSkill.group && Array.isArray(mapSkill.group)) {
						mapEquip.skills.addArray(mapSkill.group);
					}
					if (mapSkill.global && Array.isArray(mapSkill.global)) {
						mapEquip.global.addArray(mapSkill.global);
					}
					lib.card[cname] = mapEquip;
					lib.translate[cname] = get.translation(skill);
					lib.translate[cname + '_info'] = get.translation(skill + '_info');
					var card = game.createCard(cname);
					card.storage[cname] = target;
					if (player.canEquip(card, true)) {
						player.$gain2(card);
						player.equip(card);
					}
					target.disableSkill(cname, skill);
				},
			},
			scqh_fgo_yangmu: {
				derivation: 'scqh_fgo_panxi',
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
							player.addTempSkill('scqh_fgo_panxi', { player: 'phaseBegin' });
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
			scqh_fgo_panxi: {
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
					var store = player.storage.scqh_fgo_yangmu || {};
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
						var map = lib.skill.scqh_fgo_panxi.map(phase, player);
						if (map.cards.length) dialog.addSmall(map.cards);
					},
				},
				forced: true,
				trigger: {
					global: ['phaseUseEnd', 'phaseDiscardEnd'],
				},
				filter(event, player) {
					var map = lib.skill.scqh_fgo_panxi.map(event, player);
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
			scqh_fgo_wuni: {
				global: 'g_chenhuodajie',
				cards(player) {
					var store = player.getStorage('scqh_fgo_yangmu') || {
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
					var cards = lib.skill.scqh_fgo_wuni.cards(player) || [];
					if (names.includes(name)) return cards.length;
				},
				enable: ['chooseToUse'],
				filter(event, player) {
					var cards = lib.skill.scqh_fgo_wuni.cards(player) || [];
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
						var cards = lib.skill.scqh_fgo_wuni.cards(player) || [];
						for (var card of cards) {
							vcards.push([get.owner(card), '', card.name, get.nature(card), card, bool]);
						}
						var dialog = ui.create.dialog('wuni', [vcards, 'vcard'], 'hidden');
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
								scqh_fgo_wuni: true,
							},
							card: links[0][4],
							filterCard: () => false,
							selectCard: -1,
							precontent() {
								var sn = 'scqh_fgo_wuni';
								var card = lib.skill[sn + '_backup'].card;
								var target = get.owner(card);
								player.showCards(card, 'wuni');
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
			scqh_fgo_wulian: {
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
						var dialog = ui.create.dialog('wulian', [vcards, 'vcard'], 'hidden');
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
								scqh_fgo_wulian: true,
							},
							precontent() {
								var ccc = get.cards();
								player.showCards(ccc);
								event.result.cards = ccc;
								if (get.type2(event.result.cards[0]) != get.type2(event.result.card)) {
									player.loseHp();
									var sn = 'scqh_fgo_wulian_sha';
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
								if (card.name == 'sha') return num + (player.storage.scqh_fgo_wulian_sha || 0);
							},
						},
					},
				},
			},
			scqh_fgo_duofeng: {
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
						player.chooseBool('【duofeng】:是否弃置' + get.translation(card) + '并拓印一张【圣剑】相关的牌');
					} else event.finish();
					('step 3');
					if (result && result.bool) {
						player.discard(event.card);
						player.scqh_NobleArms('all');
					}
				},
			},
			scqh_fgo_wunix: {
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
					var skn = 'scqh_fgo_wuni';
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
				group: ['scqh_fgo_wuni_die', 'scqh_fgo_wuni2'],
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
							return player.storage.scqh_fgo_wuni != undefined;
						},
						content() {
							'step 0';
							var list = [];
							event.skn = 'scqh_fgo_wuni';
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
			scqh_fgo_panxix: {
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
				group: 'scqh_fgo_panxi_hidden',
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
			scqh_fgo_shengke: {
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
						var store = player.storage.scqh_fgo_shengke || [];
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
						var num = lib.skill.scqh_fgo_shengke.intro.markcount(storage, player);
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
					var skn = 'scqh_fgo_shengke_' + num;
					if (lib.skill[skn] && !player.hasSkill(skn)) {
						player.addTempSkill(skn);
					} else tayin = false;
					if (tayin) {
						var next = player.chooseBool('【shengke】:是否拓印一张『圣剑』？');
						next.set('ai', () => true);
					} else {
						player.update();
						event.finish();
					}
					('step 2');
					if (result.bool) player.scqh_NobleArms();
					player.update();
				},
				group: 'scqh_fgo_shengke_round',
				subSkill: {
					round: {
						forced: true,
						trigger: {
							global: 'roundStart',
						},
						filter(event, player, name) {
							return player.storage.scqh_fgo_shengke;
						},
						content() {
							player.storage.scqh_fgo_shengke = [];
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
			scqh_fgo_buye: {
				mod: {
					number(card, number) { },
					maxHandcard(player, num) {
						var skn = 'scqh_fgo_shengke';
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
						var store = player.storage.scqh_fgo_shengke || [];
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
				group: 'scqh_fgo_buye_use',
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
							var store = player.storage.scqh_fgo_shengke || [];
							if (store.length == 0) return [num1, num2].includes(9);
							if (store.length == 1) return [num1, num2].includes(12);
							if (store.length == 2) return [num1, num2].includes(3);
							if (store.length == 3) return [num1, num2].includes(6);
							return false;
						},
						content() {
							'step 0';
							var store = player.storage.scqh_fgo_shengke || [];
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
		},
		translate: {
			scqhFgo_qiangyun: '强运',
			scqhFgo_qiangyun_info: '当你的判定结果生效前,若判定结果不为♥️️或♣️️,你可以将其改为♣️️.当你的判定牌生效后,你可以获得之.',
			scqhFgo_shiyue: '誓约',
			scqhFgo_shiyue_info: '每种牌每回合限一次,当你需要使用或打出一张基本牌或普通锦囊牌时,你可以将一张牌当做任意一种延时锦囊牌置入你的判定区,你视为使用或打出了一张此刻需要的牌.你判定区里的牌不会因执行自身的效果而移动到其他角色的判定区里.',
			scqhFgo_wangdao: '王道',
			scqhFgo_wangdao_info: ['准备阶段,你可以展示你区域内的一张牌,依次询问其他角色是否参与议事(身份为主公／主帅／君主／地主的角色必须参与议事).若议事结果与你展示牌的颜色:', '◆相同,则你可以获得每名角色区域里的一张牌.', '◆不同(无结果),则你从弃牌堆中获得一张【杀】并获得一个额外的出牌阶段.'].join('</br>'),
			scqhFgo_yangmu: '仰慕',
			scqhFgo_yangmu_info: '出牌阶段开始时,你可以将一张牌交给一名其他角色,其选择一项:⒈流失一点体力;⒉弃置此牌,且本回合内你的红色手牌均视为【杀】且对其使用牌不受距离和次数限制.',
			scqhFgo_panxi: '叛袭',
			scqhFgo_panxi_info: '每回合各限一次,你可以将一张牌当做【出其不意】或【趁火打劫】使用.',
			scqhFgo_shengke: '圣刻',
			scqhFgo_shengke_info: '当你使用或打出点数为３的倍数的牌时,你可以摸一张牌.当一名角色使用或打出牌时,若此牌的点数是圣者的数字,则此牌结算结束后,你可以视为使用一张不计入次数限制的基本牌.',
			scqhFgo_buye: '不夜',
			scqhFgo_buye_info: '出牌阶段,你可以弃置任意张牌,推进Ｘ次<圣刻※>的锚点进度(Ｘ为本次弃牌数).',
			scqhFgo_wulian: '武炼',
			scqhFgo_wulian_info: '你可以亮出牌堆顶的一张牌并当做任意一张基本牌使用.若你使用的牌与你亮出的牌不同名,则你不能再以此法使用该牌,直到你造成或受到了Ｘ点伤害(Ｘ为此法不能使用的牌名数+1).',
			scqhFgo_duofeng: '夺锋',
			scqhFgo_duofeng_info: ['当你对距离为１的角色造成伤害后,你可以获得其装备区里的一张牌,或将其拥有的一项技能转化为武器牌(攻击距离２)置入你的装备区内.直到此牌离开你的装备区前,你以此法选择的技能失效.', '<font color = #c3f9ff>◆例外:锁定技、限定技、觉醒技、隐匿技、使命技、主公技.</font>'].join('</br>'),
			scqhFgo_huantong: '幻痛',
			scqhFgo_huantong_info: '锁定技,当一名角色受到伤害时,令此伤害视为已造成过.若如此做,本回合结束时,其需要弃置Ｘ张不同花色的手牌,否则其失去Ｘ点体力(Ｘ为其本回合内受到伤害的次数).',
			scqhFgo_zouku: '奏哭',
			scqhFgo_zouku_info: '出牌阶段开始时,你可以指定一名有手牌的角色.每当其失去这些手牌中的一张牌时,你摸一张牌.',
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
			scqh_fgo_抽卡: '抽卡',
			scqh_fgo_抽卡_info: '开启「自动发动」后,摸牌阶段,你可以放弃摸牌,改为从卡组中随机获得一张牌',
		},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

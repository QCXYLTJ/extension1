'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqhMiao_miaowuPhaseUse: {
				enable: 'phaseUse',
				filterTarget: true,
				content() {
					var cards = target.getCards('h');
					lib.skill.scqhMiao_miaowu.addCards(target, cards);
				},
			},
			scqhMiao_miaowu: {
				charlotte: true,
				audiolength: 1,
				marktext: '🐱',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
					onunmark(storage, player) {
						let name = 'scqhMiao_miaowu';
						lib.skill[name].removeHand(player);
						let xs = player.getExpansions(name);
						if (xs.length) player.loseToDiscardpile(xs);
					},
				},
				addCards(player, cards, source) {
					if (!cards) return;
					if (!Array.isArray(cards)) cards = [cards];
					if (!cards.length) return;
					var skill = 'scqhMiao_miaowu';
					game.trySkillAudio(skill, player);
					var hs = cards.filter((card) => {
						let hs = player.getCards('hes');
						return !hs.includes(card);
					});
					if (hs.length) player.$gain2(hs, false);
					var next = player.addToExpansion(cards, 'give');
					if (source) next.source = source;
					next.gaintag.add(skill);
				},
				addHand(player) {
					var name = 'scqhMiao_miaowu';
					var xs = player.getExpansions(name);
					var ss = player.getCards('s', function (card) {
						return card._cardid && card.hasGaintag(name);
					});
					if (ss.length) {
						var cards2 = [];
						for (var card of ss) {
							var cardx = xs.find((cardx) => cardx.cardid == card._cardid);
							if (cardx) cards2.push(cardx);
						}
						if (cards2.length) xs = xs.filter((card) => !cards2.includes(card));
					}
					var cards = xs.map((card) => {
						var cardx = ui.create.card();
						cardx.init(get.cardInfo(card));
						cardx._cardid = card.cardid;
						cardx.fix();
						cardx.remove();
						cardx.destroyed = true;
						return cardx;
					});
					if (cards.length) player.directgains(cards, null, name);
				},
				removeHand(player) {
					var ss = player.getCards('s', function (card) {
						return card.hasGaintag('scqhMiao_miaowu');
					});
					if (player.isOnline2()) {
						player.send(
							function (cards, player) {
								cards.forEach((card) => card.delete());
								if (player == game.me) ui.updatehl();
							},
							ss,
							player
						);
					}
					ss.forEach((card) => card.delete());
					if (player == game.me) ui.updatehl();
				},
				_priority: 0,
			},
			scqhMiao_miaowu_in: {
				charlotte: true,
				silent: true,
				forced: true,
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(trigger, player) {
					let miao = 'scqhMiao_miaowu';
					let tag = trigger.gaintag || [];
					if (tag.includes(miao)) return true;
					let evt = trigger.getl;
					if (evt && evt.name) evt = trigger.getl(player);
					else return false;
					if (!evt || !evt.xs || !evt.xs.length || !evt.gaintag_map) return false;
					for (let cardid in evt.gaintag_map) {
						let list = evt.gaintag_map[cardid];
						if (list.includes(miao)) return true;
					}
					return false;
				},
				content() {
					var name = 'scqhMiao_miaowu';
					lib.skill[name].removeHand(player);
					lib.skill[name].addHand(player);
				},
				init(player, skill) {
					let name = 'scqhMiao_miaowu';
					let name2 = 'scqhMiao_miaowu_in';
					if (!player.storage[name]) player.storage[name] = [];
					if (skill != name && skill != name2) {
						player.storage[name].add(skill);
					}
					lib.skill[name].addHand(player);
				},
				onremove(player, skill) {
					let name = 'scqhMiao_miaowu';
					let storage = player.storage[name] || [];
					if (storage.includes(skill)) storage.remove(skill);
					if (!storage.length) {
						lib.skill[name].removeHand(player);
					}
				},
				_priority: 100,
			},
			scqhMiao_miaowu_use: {
				charlotte: true,
				forced: true,
				popup: false,
				firstDo: true,
				trigger: {
					player: ['useCardBefore', 'respondBefore'],
				},
				filter(trigger, player) {
					var ss = player.getCards('s', function (card) {
						return card._cardid && card.hasGaintag('scqhMiao_miaowu');
					});
					return (
						trigger.cards &&
						trigger.cards.some((card) => {
							return ss.includes(card);
						})
					);
				},
				content() {
					var xs = player.getExpansions('scqhMiao_miaowu');
					var ss = player.getCards('s', function (card) {
						return card._cardid && card.hasGaintag('scqhMiao_miaowu');
					});
					var cards2 = [];
					for (var card of trigger.cards) {
						var cardx = xs.find((cardx) => cardx.cardid == card._cardid);
						if (cardx) cards2.push(cardx);
					}
					var cards3 = trigger.cards.slice();
					trigger.cards = cards2;
					trigger.card.cards = cards2;
					if (player.isOnline2()) {
						player.send(
							function (cards, player) {
								cards.forEach((card) => card.delete());
								if (player == game.me) ui.updatehl();
							},
							cards3,
							player
						);
					}
					cards3.forEach((card) => card.delete());
					if (player == game.me) ui.updatehl();
				},
				_priority: 100,
			},
			scqhMiao_guojue: {
				forced: true,
				trigger: {
					global: 'loseAfter',
				},
				filter(trigger, player) {
					if (trigger.player == player) return false;
					if (trigger.type != 'discard' || trigger.getParent(2).player != player) return false;
					if (trigger.cards2) {
						let ds = trigger.cards2.filter((card) => get.position(card) == 'd');
						return ds.length;
					}
					return false;
				},
				content() {
					'step 0';
					var ds = trigger.cards2.filter((card) => get.position(card) == 'd');
					var str = '将';
					str += get.translation(ds);
					if (ds.length > 1) str += '中的一张牌';
					str += '置于你的武将牌上,称为🐱';
					if (ds.length > 1) {
						var next = player.chooseCardButton(str, ds, true);
						next.set('target', trigger.player);
						next.set('ai', function (button) {
							let card = button.link;
							let val = get.value(card);
							let uic = ui.selected.buttons || [];
							let player = _status.event.player;
							let target = _status.event.target;
							let att = get.attitude(player, target);
							let eff = get.effect(target, card, player, player);
							return 1;
						});
					} else if (ds.length) {
						event._result = {
							links: ds,
							bool: true,
						};
					} else event.finish();
					('step 1');
					var links = result.links || [];
					if (links.length) {
						lib.skill.scqhMiao_miaowu.addCards(player, links);
					}
				},
				_priority: 0,
			},
			scqhMiao_mozhi: {
				forced: true,
				audio: 'mozhi',
				trigger: {
					player: 'phaseJieshuBegin',
				},
				isMozhi(player) {
					return player.getHistory('useCard', function (evt) {
						let types = ['basic', 'trick'];
						if (!evt.isPhaseUsing()) return false;
						return types.includes(get.type(evt.card));
					});
				},
				filter(trigger, player) {
					let xs = player.getExpansions('scqhMiao_miaowu');
					let hs = player.getCards('hs');
					if (!xs.length && !hs.length) return false;
					let history = lib.skill.scqhMiao_mozhi.isMozhi(player) || [];
					return history.length;
				},
				content() {
					'step 0';
					event.history = lib.skill.scqhMiao_mozhi.isMozhi(player) || [];
					('step 1');
					var xs = player.getExpansions('scqhMiao_miaowu');
					var hs = player.getCards('hs');
					event._result = {};
					if (event.history.length && (xs.length || hs.length)) {
						var card = event.history.shift().card;
						card = {
							name: card.name,
							nature: card.nature,
						};
						var gamers = game.filterPlayer(function (current) {
							return player.canUse(card, current);
						});
						if (lib.filter.cardEnabled(card) && gamers.length) {
							lib.skill.scqhMiao_mozhi.viewAs = card;
							var next = player.chooseToUse();
							next.set('openskilldialog', '默识:将一张手牌当' + get.translation(card) + '使用');
							next.set('norestore', true);
							next.set('scqhMiao_mozhi', true);
							next.set('_backupevent', 'scqhMiao_mozhi');
							next.set('custom', {
								add: {},
								replace: {
									window() { },
								},
							});
							next.backup('scqhMiao_mozhi');//QQQ
						}
					}
					('step 2');
					if (result && result.bool) event.goto(1);
				},
				onremove(player, skill) {
					player.removeSkill('scqhMiao_mozhi_in');
					player.removeSkill('scqhMiao_mozhi_use');
				},
				group: 'scqhMiao_mozhi_xs',
				subSkill: {
					xs: {
						forced: true,
						trigger: {
							player: ['chooseToUseBegin', 'chooseToUseEnd', 'useCardBegin'],
						},
						filter(trigger, player) {
							let skill = 'scqhMiao_mozhi';
							return trigger[skill] || trigger.parent[skill];
						},
						content() {
							let name1 = 'scqhMiao_mozhi_in';
							let name2 = 'scqhMiao_mozhi_use';
							let xs = player.getExpansions('scqhMiao_miaowu');
							if (event.triggername == 'chooseToUseBegin') {
								if (xs.length) {
									player.addTempSkill(name1);
									player.addTempSkill(name2);
								}
							} else {
								player.removeSkill(name1);
								player.removeSkill(name2);
							}
						},
					},
					in: {
						inherit: 'scqhMiao_miaowu_in',
					},
					use: {
						inherit: 'scqhMiao_miaowu_use',
					},
				},
				_priority: 0,
			},
			scqhMiao_beige: {
				audio: 'beige',
				forced: true,
				trigger: {
					global: 'damageEnd',
				},
				filter(trigger, player) {
					return trigger.player.isIn() && player.countCards('he');
				},
				preHidden: true,
				content() {
					'step 0';
					var next = player.chooseCard('he', [1, 1], function (card) {
						return true;
					});
					var check = function (trigger, player) {
						let att1 = get.attitude(player, trigger.player);
						let att2 = 0;
						if (trigger.source) att2 = get.attitude(player, trigger.source);
						return att1 > 0 && att2 <= 0;
					};
					next.set('goon', check);
					next.set('prompt', get.prompt2(event.name, trigger.player));
					next.set('ai', (card) => {
						let player = _status.event.player;
						if (_status.event.goon) return 8 - get.value(card);
						return 0;
					});
					next.setHiddenSkill(event.name);
					('step 1');
					var cards = result.cards || [];
					if (cards.length) {
						lib.skill.scqhMiao_miaowu.addCards(player, cards);
						trigger.player.judge();
					} else event.finish();
					('step 2');
					let card = {};
					var target = trigger.player || false;
					var targetTrue = target && target.isIn();
					var source = trigger.source || false;
					var sourceTrue = source && source.isIn();
					switch (result.suit) {
						case 'heart': {
							card.name = 'tao';
							if (targetTrue) target.chooseUseTarget(card, true);
							break;
						}
						case 'diamond': {
							card.name = 'wuzhong';
							if (targetTrue) target.chooseUseTarget(card, true);
							break;
						}
						case 'club': {
							if (sourceTrue) source.chooseToDiscard('he', 2, true);
							break;
						}
						case 'spade': {
							if (sourceTrue) source.turnOver();
							break;
						}
					}
				},
				ai: {
					expose: 0.3,
				},
				_priority: 0,
			},
			scqhMiao_shenxian: {
				forced: true,
				trigger: {
					global: 'loseAfter',
				},
				filter(trigger, player) {
					if (trigger.type != 'discard') return false;
					if (trigger.cards2) {
						let ds = trigger.cards2.filter((card) => get.type2(card) == 'basic');
						return ds.length;
					}
					return false;
				},
				content() {
					'step 0';
					var cards = get.cards();
					lib.skill.scqhMiao_miaowu.addCards(player, cards);
				},
				_priority: 0,
			},
			scqhMiao_qiangwu: {
				enable: 'phaseUse',
				viewAs: {
					name: 'sha',
				},
				filter(trigger, player) {
					let xs = player.getExpansions('scqhMiao_miaowu');
					let storage = player.storage.scqhMiao_qiangwu_buff || 0;
					let num = storage ? 2 : 1;
					return xs.length >= num;
				},
				selectCard: -1,
				filterCard() {
					return false;
				},
				prompt(trigger) {
					let player = _status.event.player;
					let storage = player.storage.scqhMiao_qiangwu_buff || 0;
					let num = storage ? 2 : 1;
					let str = '移去';
					str += get.cnNumber(num);
					str += '张🐱视为使用一张【杀】';
					if (!storage) str += '.若如此做,直到回合结束前,你使用点数小于此🐱的点数的【杀】无次数限制.';
					return str;
				},
				precontent() {
					'step 0';
					var xs = player.getExpansions('scqhMiao_miaowu');
					var storage = player.storage.scqhMiao_qiangwu_buff || 0;
					var num = storage ? 2 : 1;
					if (xs.length > num) {
						var str = '移去' + get.cnNumber(num) + '张🐱';
						player.chooseCardButton(str, num, xs, true);
					} else
						event._result = {
							links: xs,
						};
					('step 1');
					var cards = result.links || [];
					if (cards.length) {
						player.loseToDiscardpile(cards);
						var buff = 'scqhMiao_qiangwu_buff';
						if (!player.hasSkill(buff)) {
							player.addTempSkill(buff);
							player.storage[buff] = cards[0].number;
						}
					}
				},
				subSkill: {
					buff: {
						charlotte: true,
						mod: {
							targetInRange(card, player) {
								let number = card.number;
								let storage = player.storage.scqhMiao_qiangwu_buff || 0;
								if (card.name != 'sha') return;
							},
							cardUsable(card, player) {
								let number = card.number;
								let storage = player.storage.scqhMiao_qiangwu_buff || 1;
								if (card.name != 'sha') return;
								if (number < storage) return Infinity;
							},
						},
						_priority: 0,
					},
				},
				_priority: 0,
			},
			scqhMiao_jueqing: {
				audio: 'jueqing',
				forced: true,
				ai: {
					jueqing: true,
				},
				group: ['scqhMiao_jueqing_guojue', 'scqhMiao_jueqing_ice'],
				subSkill: {
					guojue: {
						audio: 'jueqing',
						inherit: 'scqhMiao_guojue',
						parentSkill: 'scqhMiao_jueqing',
					},
					lose: {
						audio: 'jueqing',
						forced: true,
						trigger: {
							source: 'damageBefore',
						},
						content() {
							trigger.cancel();
							trigger.player.loseHp(trigger.num);
						},
						parentSkill: 'scqhMiao_jueqing',
					},
					ice: {
						audio: 'jueqing',
						forced: true,
						trigger: {
							source: 'damageBefore',
							player: 'damageBefore',
						},
						content() {
							game.setNature(trigger, 'ice');
						},
						parentSkill: 'scqhMiao_jueqing',
					},
				},
				_priority: 0,
			},
			scqhMiao_shangshi: {
				audio: 'shangshi',
				forced: true,
				trigger: {
					player: ['loseEnd', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(trigger, player) {
					let dhp = player.getDamagedHp();
					let xs = player.getExpansions('scqhMiao_miaowu');
					let max = Math.min(xs.length, dhp);
					let hs = player.countCards('h');
					return hs < dhp;
				},
				prompt(trigger, player) {
					let dhp = player.getDamagedHp();
					let xs = player.getExpansions('scqhMiao_miaowu');
					let max = Math.min(xs.length, dhp);
					return '是否发动【伤逝】将手牌摸至' + get.cnNumber(dhp) + '张？';
				},
				prompt2: false,
				content() {
					let dhp = player.getDamagedHp();
					let xs = player.getExpansions('scqhMiao_miaowu');
					let max = Math.min(xs.length, dhp);
					player.drawTo(dhp);
				},
				ai: {
					noh: true,
					skillTagFilter(player, tag) {
						if (tag == 'noh' && player.maxHp - player.hp < player.countCards('h')) {
							return false;
						}
					},
				},
				group: ['scqhMiao_shangshi_damage'],
				subSkill: {
					damage: {
						audio: 'shangshi',
						trigger: {
							player: 'damageBegin',
						},
						filter(trigger, player) {
							if (!trigger.card || trigger.card.name != 'sha') return false;
							if (!trigger.source || trigger.source == player) return false;
							let xs = player.getExpansions('scqhMiao_miaowu');
							let dhp = 1;
							if (xs.length == 0 || dhp == 0) return false;
							if (xs.length < dhp) return false;
							return true;
						},
						check(trigger, player) {
							return player.hp < player.maxHp;
						},
						content() {
							'step 0';
							var xs = player.getExpansions('scqhMiao_miaowu');
							var dhp = player.getDamagedHp();
							var count = 1;
							var prompt = '';
							prompt += '弃置';
							prompt += get.cnNumber(count);
							prompt += '张🐱,代替';
							prompt += get.translation(trigger.source);
							prompt += '成为伤害来源';
							if (xs.length > count) {
								var next = player.chooseCardButton(true, prompt, xs, [count, count]);
								next.set('ai', function (button) {
									return -get.value(button.link);
								});
							} else
								event._result = {
									bool: true,
									links: xs,
								};
							('step 1');
							var cards = result.links || [];
							if (cards.length) {
								player.discard(cards);
								trigger.source = player;
							} else event.finish();
						},
						_priority: 0,
					},
				},
				_priority: 0,
			},
			scqhMiao_jizhi: {
				audio: 'sbjizhi',
				forced: true,
				trigger: {
					player: 'useCard',
				},
				filter(trigger, player) {
					let card = trigger.card;
					let type = get.type2(card, 'trick');
					if (type != 'trick') return false;
					return true;
				},
				content() {
					player.draw();
				},
				subfrequent: ['auto'],
				group: ['scqhMiao_jizhi_auto'],
				subSkill: {
					auto: {
						audio: 'sbjizhi',
						forced: true,
						trigger: {
							global: 'useCardAfter',
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let card = trigger.card;
							let type = get.type2(card, 'trick');
							if (type != 'trick') return false;
							let storage = player.storage.scqhMiao_jizhi_mark || [];
							if (storage.includes(card.name)) return false;
							let cards = trigger.cards.filter((card) => {
								return get.position(card, true) == 'o';
							});
							if (!cards.length) return false;
							return true;
						},
						content() {
							var skill = 'scqhMiao_jizhi_mark';
							player.addTempSkill(skill);
							player.markAuto(skill, trigger.card.name);
							var cards = trigger.cards.filter((card) => {
								return get.position(card, true) == 'o';
							});
							lib.skill.scqhMiao_miaowu.addCards(player, cards);
						},
						_priority: 0,
					},
					mark: {
						charlotte: true,
						marktext: '智',
						intro: {
							content: '$',
						},
					},
				},
				contentx() {
					'step 0';
					var skill = 'scqhMiao_jizhi_mark';
					player.addTempSkill(skill);
					player.markAuto(skill, trigger.card.name);
					player.draw();
					var cards = trigger.cards || [];
					if (trigger.player != player && cards.length) {
						let next = game.createEvent(event.name);
						next.player = player;
						next.cards = cards;
						event.next.remove(next);
						trigger.after.push(next);
						next.setContent(function () {
							var cards = event.cards.filter((card) => {
								return get.position(card, true) == 'o';
							});
							if (player.isIn() && cards.length) {
								lib.skill.scqhMiao_miaowu.addCards(player, cards);
							}
						});
					}
				},
				_priority: 0,
			},
			scqhMiao_qicai: {
				audio: 'sbqicai',
				mod: {
					maxHandcard(player, num) {
						let name1 = 'scqhMiao_qicai_in';
						let name2 = 'scqhMiao_qicai_use';
						if (!player.hasEmptySlot(5)) {
							player.removeSkill(name1);
							player.removeSkill(name2);
						} else {
							player.addSkill(name1);
							player.addSkill(name2);
						}
					},
					targetInRange(card, player, target, now) {
						if (get.type(card, 'trick') == 'trick') return true;
					},
				},
				onremove(player, skill) {
					player.removeSkill('scqhMiao_qicai_in');
					player.removeSkill('scqhMiao_qicai_use');
				},
				ai: {
					effect: {
						target(card, player, target) {
							let list = ['equip1', 'equip2', 'equip5'];
							if (player == target && list.includes(get.subtype(card))) {
								if (get.equipValue(card) <= 7.5) return 0;
							}
						},
					},
				},
				group: ['scqhMiao_qicai_equip2', 'scqhMiao_qicai_equip1'],
				subSkill: {
					in: {
						charlotte: true,
						inherit: 'scqhMiao_miaowu_in',
					},
					use: {
						charlotte: true,
						inherit: 'scqhMiao_miaowu_use',
					},
					equip2: {
						audio: 'bagua_skill',
						inherit: 'bagua_skill',
						filter(trigger, player) {
							if (!lib.skill.bagua_skill.filter(trigger, player)) return false;
							if (!player.hasEmptySlot(2)) return false;
							return true;
						},
						ai: {
							respondShan: true,
							effect: {
								target(card, player, target) {
									if (target.getEquip(2)) return;
									return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
								},
							},
						},
					},
					equip1: {
						name: '奇才',
						forced: true,
						trigger: {
							global: 'judge',
						},
						filter(trigger, player) {
							if (!player.countCards('hes', { color: 'red' })) return false;
							if (!player.hasEmptySlot(1)) return false;
							return true;
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
								if (get.color(card) != 'red') return false;
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
							if (result.cards?.length) {
								player.respond(result.cards, 'highlight', 'scqhMiao_qicai', 'noOrdering');
							} else event.finish();
							('step 2');
							if (result.bool) {
								player.$gain2(trigger.player.judging[0]);
								player.gain(trigger.player.judging[0]);
								trigger.player.judging[0] = result.cards[0];
								trigger.orderingCards.addArray(result.cards);
								game.log(trigger.player, '的判定牌改为', result.cards[0]);
							}
							('step 3');
						},
						ai: {
							rejudge: true,
							tag: {
								rejudge: 1,
							},
						},
						_priority: 0,
					},
				},
			},
			scqhMiao_lijian: {
				audio: 'lijian',
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					let gamers = game.filterPlayer();
					return gamers.length >= 2;
				},
				selectTarget() {
					return [2, 2];
				},
				filterTarget(card, player, target) {
					let uit = ui.selected.targets || [];
					let cardx = {
						name: 'juedou',
					};
					if (uit.length) {
						return uit[0].canUse(cardx, target, false);
					}
					return target != player;
				},
				targetprompt: ['决斗发起者', '决斗目标'],
				multitarget: true,
				content() {
					var temp = 'scqhMiao_lijian';
					var storage = player.storage[temp] || {};
					var id = targets[1].playerid;
					var list = storage[id] || [];
					list.add(targets[0]);
					storage[id] = list;
					player.storage[temp] = storage;
					player.markSkill(temp);
					var cardx = {
						name: 'juedou',
					};
					targets[0].useCard(cardx, targets[1], false);
				},
				ai: {
					order(item, player) {
						return 8;
					},
					result: {
						player(player, target) {
							return 1;
						},
						target(player, target) {
							let uit = ui.selected.targets || [];
							if (uit.length) {
								let cardx = {
									name: 'juedou',
								};
								let eff = get.effect(target, cardx, uit[0], target);
								return eff;
							}
							let att = get.attitude(player, target);
							return -att;
						},
					},
				},
				marktext: '离',
				intro: {
					content(storage, player, skill) {
						storage = storage || {};
						let prompt = '';
						for (let current of game.filterPlayer()) {
							let id = current.playerid;
							let list = storage[id] || [];
							if (list.length) {
								prompt += '出杀:';
								prompt += get.translation(current);
								prompt += '／被杀:';
								prompt += get.translation(list);
								prompt += '<br/>';
							}
						}
						return prompt;
					},
				},
				group: ['scqhMiao_lijian_temp'],
				subSkill: {
					temp: {
						audio: 'lijian',
						charlotte: true,
						forced: true,
						trigger: {
							global: 'phaseUseBegin',
						},
						filter(trigger, player) {
							let storage = player.storage.scqhMiao_lijian || {};
							let list = (storage[trigger.player.playerid] || []).filter((target) => target.isIn());
							return list.length;
						},
						content() {
							'step 0';
							var storage = player.storage.scqhMiao_lijian || {};
							var list = (storage[trigger.player.playerid] || []).filter((target) => target.isIn());
							event.targets = list.filter((target) => trigger.player.canUse({ name: 'sha' }, target, false));
							player.storage.scqhMiao_lijian[trigger.player.playerid] = [];
							var bool = true;
							for (let id in storage) {
								let listwo = storage[id] || [];
								if (listwo.length) bool = false;
							}
							if (bool) player.unmarkSkill('scqhMiao_lijian');
							var next = player.chooseCard('he', [1, 1], function (card) {
								return true;
							});
							var str = '离间:交给';
							str += get.translation(trigger.player);
							str += '一张牌,令其视为对';
							str += get.translation(list);
							str += '使用一张【杀】';
							next.set('prompt', str);
							next.set('ai', (card) => {
								let player = _status.event.player;
								let value = get.value(card);
								if (card.name == 'du') return 20;
								return 8 - get.value(card);
							});
							('step 1');
							var cards = result.cards || [];
							if (cards.length) {
								player.give(cards, trigger.player);
								if (event.targets.length) {
									trigger.player.useCard({ name: 'sha' }, event.targets, false);
								}
							}
						},
						_priority: 0,
					},
				},
				_priority: 0,
			},
			scqhMiao_biyue: {
				audio: 'rebiyue',
				forced: true,
				trigger: {
					global: 'phaseJieshuBegin',
				},
				filter(trigger, player) {
					return true;
				},
				content() {
					'step 0';
					player.draw();
					('step 1');
					if (trigger.player != player && player.isMaxHandcard(true)) {
						var next = player.phase('nodelay');
						next.phaseList = ['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'].reverse();
					}
				},
			},
			scqhMiao_luoshen: {
				audio: 'luoshen',
				forced: true,
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				filter(event, player, name) {
					return true;
				},
				check(event, player) {
					return true;
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
						var str = get.translation(event.name);
						str += ':是否再次进行判定？';
						var next = player.chooseBool(str);
						next.set('frequentSkill', event.name);
					} else event.finish();
					('step 2');
					if (result.bool) event.goto(0);
				},
				init(player, skill) {
					lib.skill.scqhMiao_miaowu_in.init(player, skill);
				},
				onremove(player, skill) {
					lib.skill.scqhMiao_miaowu_in.onremove(player, skill);
				},
				subfrequent: ['judge'],
				group: ['scqhMiao_luoshen_judge', 'scqhMiao_miaowu_in', 'scqhMiao_miaowu_use'],
				subSkill: {
					in: {
						inherit: 'scqhMiao_miaowu_in',
					},
					use: {
						inherit: 'scqhMiao_miaowu_use',
					},
					judge: {
						audio: 'luoshen',
						forced: true,
						trigger: {
							player: 'judgeEnd',
						},
						filter(trigger, player) {
							let card = trigger.result.card;
							let color = trigger.result.color;
							let position = get.position(card, true);
							return position == 'o';
						},
						check(trigger) {
							return true;
						},
						prompt(trigger) {
							let card = trigger.result.card;
							let str = '洛神:是否';
							let color = trigger.result.color;
							if (color == 'black') {
								str += '将' + get.translation(card) + '置于你的武将牌上？';
							} else str += '获得' + get.translation(card) + '？';
							return str;
						},
						content() {
							'step 0';
							var name = 'scqhMiao_luoshen';
							var evt = trigger.parent;
							var card = trigger.result.card;
							var color = trigger.result.color;
							if (color == 'black') {
								lib.skill.scqhMiao_miaowu.addCards(player, card);
							} else player.gain(card, 'gain2');
							('step 1');
							return;
							var name = 'scqhMiao_luoshen';
							player.markSkill(name);
							var ss = player.getCards('s', (card) => {
								return card.hasGaintag(name);
							});
							var max = 7;
							max = Math.max(0, max);
							if (ss.length && ss.length > max) {
								var cards = ss.splice(0, ss.length - max);
								var next = player.gain(cards);
								next._triggered = null;
							}
						},
						_priority: 0,
					},
				},
				_priority: 0,
			},
			scqhMiao_qingguo: {
				audio: 'qingguo',
				inherit: 'reqingguo',
				mod: {
					suit(card, suit) {
					},
					aiUseful() {
						return lib.skill.reqingguo.mod.aiValue.apply(this, arguments);
					},
				},
			},
			scqhMiao_zhenlie: {
				inherit: 'zhenlie',
				prompt(trigger) {
					let str = '是否对';
					str += get.translation(trigger.player);
					if (trigger.card) {
						str += '(';
						str += get.translation(trigger.card);
						str += ')';
					}
					str += '发动【贞烈】？';
					return str;
				},
				group: ['scqhMiao_zhenlie_guojue'],
				subSkill: {
					guojue: {
						inherit: 'scqhMiao_guojue',
						parentSkill: 'scqhMiao_zhenlie',
					},
				},
				_priority: 0,
			},
			scqhMiao_miji: {
				tricks: [
					'guohe',
					'juedou',
					'nanman',
					'shunshou',
					'taoyuan',
					'wanjian',
					'wugu',
					'wuzhong',
					'jiedao',
				],
				filterTrick(player, card) {
					let xs = player.getExpansions('scqhMiao_miaowu');
					if (!xs.length) return false;
					if (typeof card == 'string') card = { name: card };
					let storage = player.storage.scqhMiao_miji || {};
					let list = [];
					for (let i in storage) {
						if (storage[i] && typeof storage[i] == 'number') {
							list.push(storage[i]);
						}
					}
					let num = storage[card.name];
					if (!num || typeof num != 'number') {
						let xs2 = xs.filter((cardx) => {
							return !list.includes(cardx.number);
						});
						if (xs2.length) return xs2;
					}
					if (num && typeof num == 'number') {
						let xs2 = xs.filter((cardx) => {
							return cardx.number == num;
						});
						if (xs2.length) return xs2;
					}
					return false;
				},
				enable: 'phaseUse',
				filter(trigger, player) {
					let skill = 'scqhMiao_miji';
					let tricks = lib.skill[skill].tricks || [];
					for (let name of tricks) {
						let card = { name: name };
						let map = lib.skill[skill].filterTrick(player, card) || [];
						if (map.length && trigger.filterCard(card, player, trigger)) return true;
					}
					return false;
				},
				chooseButton: {
					dialog(trigger, player) {
						let skill = 'scqhMiao_miji';
						let list = [];
						let tricks = lib.skill[skill].tricks || [];
						let storage = player.storage[skill] || {};
						for (let name of tricks) {
							let num = storage[name] || '';
							list.push([num, '', name]);
						}
						let dialog = ui.create.dialog(get.translation(skill), [list, 'vcard']);
						return dialog;
					},
					filter(button, player) {
						let skill = 'scqhMiao_miji';
						let evt = _status.event.parent;
						let card = { name: button.link[2] };
						let map = lib.skill[skill].filterTrick(player, card) || [];
						return map.length && evt.filterCard(card, player, evt);
					},
					check(button) {
						let evt = _status.event;
						let card = {
							name: button.link[2],
							nature: button.link[3],
						};
						if (evt.parent.type != 'phase') return 1;
						return evt.player.getUseValue(card);
					},
					backup(links, player) {
						let list = {
							forced: true,
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAs: {
								name: links[0][2],
							},
							precontent() {
								'step 0';
								var card = event.result.card;
								var skill = 'scqhMiao_miji';
								var map = lib.skill[skill].filterTrick(player, card) || [];
								if (map.length > 1) {
									var next = player.chooseCardButton('移去一张🐱', map, true);
									next.set('ai', function (button) {
										let card = button.link;
										let val = get.value(card);
										return 1;
									});
								} else if (map.length) {
									event._result.links = map;
								} else event.finish();
								('step 1');
								var links = result.links || [];
								if (links.length) {
									var card = event.result.card;
									var skill = 'scqhMiao_miji';
									var storage = player.storage[skill] || {};
									if (!storage[card.name]) storage[card.name] = links[0].number;
									player.storage[skill] = storage;
									player.loseToDiscardpile(links);
								} else event.finish();
								('step 2');
								player.markSkill('scqhMiao_miji');
							},
						};
						return list;
					},
					prompt(links, player) {
						return '移去一张🐱,视为使用一张' + get.translation(links[0][2]);
					},
				},
				hiddenCard(player, name) {
					if (name == 'wuxie') {
						var skill = 'scqhMiao_miji';
						var map = lib.skill[skill].filterTrick(player, name) || [];
						if (map.length) return true;
					}
					return false;
				},
				marktext: '秘',
				intro: {
					content(storage, player, skill) {
						let list = [];
						if (storage)
							for (let name in storage) {
								let str = get.translation(name);
								str += ':';
								let num = storage[name];
								if (num == 1) num = 'A';
								if (num == 11) num = 'J';
								if (num == 12) num = 'Q';
								if (num == 13) num = 'K';
								str += num;
								list.push(str);
							}
						return list.join('</br>');
					},
					markcount(storage, player) {
						let list = 0;
						if (storage)
							for (let name in storage) {
								if (storage[name]) list++;
							}
						return list;
					},
				},
				ai: {
					order: 1,
					result: {
						player(player) {
							return 1;
						},
					},
					threaten: 1.6,
				},
				group: 'scqhMiao_miji_jieshu',
				subSkill: {
					jieshu: {
						mod: {
							aiOrder(player, card, num) {
								let evt = _status.event;
								if (evt && _status.event.type === 'phase') {
									if (num > 0 && get.tag(card, 'recover')) {
										if (player.needsToDiscard()) return num / 3;
										return 0;
									}
								}
							},
						},
						trigger: {
							player: 'phaseJieshuBegin',
						},
						prompt2() {
							let player = _status.event.player;
							let str = '结束阶段,你可以摸';
							str += player.getDamagedHp();
							str += '张牌,你可以将至多';
							str += player.getDamagedHp();
							str += '张牌交给一名其他角色';
							return str;
						},
						filter(event, player) {
							return player.hp < player.maxHp;
						},
						content() {
							'step 0';
							event.num = player.getDamagedHp();
							player.draw(event.num);
							('step 1');
							var check = player.countCards('h') - event.num;
							var next = player.chooseCardTarget({
								selectCard: [1, event.num],
								position: 'he',
								filterTarget(card, player, target) {
									return player != target;
								},
								ai1(card) {
									var player = _status.event.player;
									if (player.maxHp - player.hp == 1 && card.name == 'du') return 30;
									var check = _status.event.check;
									if (check < 1) return 0;
									if (player.hp > 1 && check < 2) return 0;
									return get.unuseful(card) + 9;
								},
								ai2(target) {
									var att = get.attitude(_status.event.player, target);
									if (ui.selected.cards.length == 1 && ui.selected.cards[0].name == 'du') return 1 - att;
									return att - 2;
								},
								prompt: '将至多' + get.cnNumber(event.num) + '张手牌交给一名其他角色',
							});
							next.set('check', check);
							('step 2');
							if (result.targets?.length) {
								player.give(result.cards, result.targets[0]);
								player.line(result.targets, 'green');
							}
						},
						ai: {
							threaten(player, target) {
								return 0.6 + 0.7 * target.getDamagedHp();
							},
							effect: {
								target(card, player, target) {
									if (target.hp <= 2 && get.tag(card, 'damage')) {
										var num = 1;
										if (
											get.itemtype(player) == 'player' &&
											player.hasSkillTag('damageBonus', false, {
												target: target,
												card: card,
											}) &&
											!target.hasSkillTag('filterDamage', null, {
												player: player,
												card: card,
											})
										)
											num = 2;
										if (target.hp > num) return [1, 1];
									}
								},
							},
						},
						_priority: 0,
					},
				},
				_priority: 0,
			},
			scqhMiao_jvxiang: {
				forced: true,
				trigger: {
					global: 'respond',
				},
				filter(trigger, player) {
					let cards = trigger.cards.filterInD('od') || [];
					if (!cards.length) return false;
					if (trigger.card.name != 'sha') return false;
					let storage = player.getStorage('scqhMiao_jvxiang_temp') || [];
					if (trigger.player == player) return false;
					if (storage.includes(trigger.player)) return false;
					let respond = trigger.respondTo || [];
					if (!respond.length || !respond[0] || !respond[1]) return false;
					if (respond[0] != player) return false;
					return true;
				},
				logTarget: 'player',
				content() {
					var subname = 'scqhMiao_jvxiang_temp';
					if (!player.hasSkill(subname)) player.addTempSkill(subname);
					player.markAuto(subname, trigger.player);
					var cards = trigger.cards.filterInD('od') || [];
					lib.skill.scqhMiao_miaowu.addCards(player, cards);
				},
				group: ['scqh_manyi'],
				subSkill: {
					temp: {
						charlotte: true,
					},
				},
				_priority: 0,
			},
			scqhMiao_lieren: {
				trigger: {
					player: 'useCardToPlayered',
				},
				filter(trigger, player) {
					var list = ['sha', 'juedou'];
					if (!list.includes(trigger.card.name)) return false;
					var xs = player.getExpansions('scqhMiao_miaowu');
					if (xs.length) {
						if (player.canCompare(trigger.target, true)) return true;
					} else if (player.canCompare(trigger.target)) return true;
					return false;
				},
				logTarget: 'target',
				check(trigger, player) {
					return get.attitude(player, trigger.target) < 0;
				},
				content() {
					'step 0';
					player.chooseToCompare(trigger.target);
					('step 1');
					var target = trigger.target;
					if (result.bool) {
						var list = trigger.card.scqhMiao_lieren || [];
						list.add(target);
						trigger.card.scqhMiao_lieren = list;
						player.popup('无双');
						game.log(player, '对', target, '发动了', '#g【无双】');
						var next = game.createEvent('wushuang');
						var count = trigger.card.name == 'sha' ? '1' : '2';
						next._trigger = trigger;
						next.player = player;
						next.setContent(lib.skill['wushuang' + count].content);
					}
				},
				group: ['scqhMiao_lieren_pindian', 'scqhMiao_lieren_damage'],
				subSkill: {
					damage: {
						forced: true,
						trigger: {
							source: 'damageSource',
						},
						filter(trigger, player) {
							let card = trigger.card || {};
							let list = card.scqhMiao_lieren || [];
							if (!list.includes(trigger.player)) return false;
							if (!trigger.player.countGainableCards(player, 'he')) return false;
							return true;
						},
						content() {
							var next = player.gainPlayerCard(true, trigger.player, 'he', 'visibleMove');
							next.set('target', trigger.player);
							next.set('ai', function (button) {
								return get.value(button.link);
							});
						},
					},
					pindian: {
						frequent(trigger, player) {
							var xs = player.getExpansions('scqhMiao_miaowu');
							var hs = player.getCards('h');
							if (xs.length && hs.length) return false;
							return true;
						},
						trigger: {
							global: 'chooseToCompareBegin',
						},
						filter(trigger, player) {
							var xs = player.getExpansions('scqhMiao_miaowu');
							if (!xs.length) return false;
							if (player == trigger.player) return true;
							if (trigger.targets) return trigger.targets.includes(player);
							if (player == trigger.target) return true;
							return false;
						},
						prompt(trigger, player) {
							var str = '烈刃:是否使用一张🐱与';
							var targets = false;
							if (player != trigger.player) targets = trigger.player;
							else targets = trigger.targets || trigger.target;
							if (targets) str += get.translation(targets);
							str += '进行拼点？';
							return str;
						},
						check(trigger, player) {
							return true;
						},
						content() {
							'step 0';
							var xs = player.getExpansions('scqhMiao_miaowu');
							if (xs.length > 1) {
								var str = '烈刃:选择一张牌进行拼点';
								player.chooseCardButton(str, xs, true);
							} else
								event._result = {
									links: xs,
								};
							('step 1');
							var cards = result.links || [];
							var card = cards[0] || false;
							if (card) {
								if (!trigger.fixedResult) trigger.fixedResult = {};
								trigger.fixedResult[player.playerid] = card;
							}
						},
						_priority: 0,
					},
				},
				_priority: 0,
			},
			scqhMiao_changbiao: {
				audio: 'changbiao',
				mod: {
					targetInRange(card, player, target) {
						if (card.scqhMiao_changbiao) return true;
					},
				},
				map(trigger, player) {
					let list = ['sha', 'juedou'];
					let map = {};
					map.vcards = [];
					let hs = player.getCards('hes');
					let xs = player.getExpansions('scqhMiao_miaowu');
					for (let name of list) {
						if (!hs.length && !xs.length) break;
						let card = {
							name: name,
						};
						let gamers = game.filterPlayer((current) => {
							return player.canUse(card, current, false);
						});
						if (gamers.length) map.vcards.add(name);
					}
					return map;
				},
				enable: 'phaseUse',
				usable: 1,
				filter(trigger, player) {
					let map = lib.skill.scqhMiao_changbiao.map.apply(this, arguments);
					return map.vcards.length;
				},
				chooseButton: {
					dialog(trigger, player) {
						let map = lib.skill.scqhMiao_changbiao.map.apply(this, arguments);
						let dialog = ui.create.dialog('长标', 'hidden');
						dialog.add([map.vcards, 'vcard']);
						dialog.direct = true;
						return dialog;
					},
					check(button) {
						let evt = _status.event;
						let card = {
							name: button.link[2],
							nature: button.link[3],
						};
						return evt.player.getUseValue(card);
					},
					backup(links, player) {
						let map = {
							changbiao: {
								name: links[0][2],
							},
							position: 'hes',
							selectCard: [1, Infinity],
							filterCard: true,
							filterTarget(card, player, target) {
								var changbiao = lib.skill.scqhMiao_changbiao_backup.changbiao || false;
								if (!changbiao) return false;
								if (!player.canUse(changbiao, target, false)) return false;
								return true;
							},
							content() {
								'step 0';
								var changbiao = lib.skill.scqhMiao_changbiao_backup.changbiao || false;
								if (changbiao) {
									player.useCard(changbiao, target, 'nowuxie');
								} else event.finish();
								('step 1');
								var history = player.getHistory('sourceDamage', function (evt) {
									var card = evt.card;
									if (!card) return false;
									var evtx = evt.getParent('useCard');
									return evtx && evtx.card == card && evtx.parent == event;
								});
								if (history.length && cards.length) player.draw(cards.length);
							},
							ai: {
								result: {
									target(player, target) {
										let uic = ui.selected.cards;
										let changbiao = lib.skill.scqhMiao_changbiao_backup.changbiao || false;
										if (changbiao) {
											let eff = get.effect(target, changbiao, player, player);
											return eff;
										}
										return -1;
									},
								},
							},
						};
						return map;
					},
					prompt(links, player) {
						let str = '长标:弃置任意张牌,并且视为对一名其他角色使用一张【';
						str += get.translation(links[0][2]) || '';
						str += '】';
						return str;
					},
				},
				ai: {
					order(item, player) {
						return get.order({ name: 'sha' }, player) + 1;
					},
					result: {
						player() {
							return 1;
						},
					},
				},
				subSkill: {
					backup: {},
				},
			},
		},
		translate: {
			scqhMiao_miaowu: '🐱',
			scqhMiao_guojue: '果决',
			scqhMiao_guojue_info: '锁定技,当你弃置一名其他角色的牌后,将其中一张牌置于你的武将牌上,称为🐱.',
			scqhMiao_mozhi: '默识',
			scqhMiao_mozhi_info: '结束阶段,你可以将一张手牌或🐱当作你本回合的出牌阶段内使用的第Ｘ张基本牌或普通锦囊牌使用.若如此做,你可以重复此流程并且令此流程中的Ｘ+1(Ｘ初始为1).',
			scqhMiao_beige: '悲歌',
			scqhMiao_beige_info: '当一名角色受到伤害后,你可以将一张牌置于你的武将牌上,称为🐱,令其进行一次判定.若判定结果为:♥️️其视为使用一张【桃】;♦️️其视为使用一张【无中生有】;♣️️伤害来源弃置两张牌;♠️️伤害来源翻面.',
			scqhMiao_duanchang: '断肠',
			scqhMiao_duanchang_info: '限定技,锁定技,当你死亡时,令击杀你的角色失去所有技能.',
			scqhMiao_shenxian: '甚贤',
			scqhMiao_shenxian_info: '当一名角色因弃置而失去基本牌后,你可以将牌堆顶的一张牌置于武将牌上,称为🐱.',
			scqhMiao_qiangwu: '枪舞',
			scqhMiao_qiangwu_info: '出牌阶段,你可以移去Ｈ张🐱,视为使用一张【杀】(Ｈ默认为１).若如此做,直到回合结束前,此技能的Ｈ默认为２,且你使用点数小于Ｘ的【杀】无次数限制(Ｘ为你本回合用此技能移去的第一张🐱的点数).',
			scqhMiao_jueqing: '绝情',
			scqhMiao_jueqing_info: '锁定技.①你视为拥有<scqhMiao_guojue※>.②你即将造成的伤害或即将受到的伤害均视为冰冻伤害.',
			scqhMiao_shangshi: '伤逝',
			scqhMiao_shangshi_info: '当你的手牌数小于Ｘ时,你可以摸至Ｘ张手牌(Ｘ为你已损失的体力值).当一名其他角色使用【杀】对你造成伤害时,你可以弃置一张🐱,代替其成为本次的伤害来源.',
			scqhMiao_jvxiang: '巨象',
			scqhMiao_jvxiang_info: '锁定技.①你视为拥有<蛮裔※>.②每回合对每名角色各限一次,其他角色打出【杀】响应你使用的牌时,将其打出的牌置于你的武将牌上,称为🐱.',
			scqhMiao_lieren: '烈刃',
			scqhMiao_lieren_info: ['当你使用【杀】或【决斗】指定一个目标后,你可以与目标角色拼点.若你赢,你发动<无双>,并且当你因执行此牌的效果而对其造成伤害后,你获得其一张牌.', '<font color = #FFB6C1>◆注:你可以使用🐱进行拼点.', '</font>'].join('</br>'),
			scqhMiao_changbiao: '长标',
			scqhMiao_changbiao_info: '出牌阶段限一次,你可以弃置任意张牌,并且视为对一名其他角色使用一张【杀】(无距离限制)或【决斗】(不能被无懈可击抵消).若此牌对其他角色造成了伤害,你摸等量的牌.',
			scqhMiao_zhenlie: '贞烈',
			scqhMiao_zhenlie_info: '锁定技.①你视为拥有<scqhMiao_guojue※>.②当你成为其他角色使用的普通锦囊牌或【杀】的目标后,你可以失去一点体力,令此牌对你无效,弃置对方的一张牌.',
			scqhMiao_miji: '秘计',
			scqhMiao_miji_info: ['结束阶段,你可以摸Ｘ张牌,你可以将至多Ｘ张牌交给一名其他角色(Ｘ为你已损失的体力值).', '<font color = #c3f9ff>★九秘:出牌阶段,你可以移去一张🐱,视为使用标包里的一张普通锦囊牌.若如此做,本局游戏内,你以此法使用此牌时只能移去与本次移去的牌点数相同的🐱.</font>'].join('</br>'),
			scqhMiao_lijian: '离间',
			scqhMiao_lijian_info: '出牌阶段限一次,你可以令一名其他角色视为对另一名角色使用一张【决斗】.若如此做,后者的下个出牌阶段开始时,你可以交给其一张牌,令其视为对前者使用一张【杀】.',
			scqhMiao_biyue: '闭月',
			scqhMiao_biyue_info: '锁定技,每名角色的结束阶段,你摸一张牌,若你的手牌数为全场唯一最多且该角色不为你,则你执行一个倒序的额外回合.',
			scqhMiao_luoshen: '洛神',
			scqhMiao_luoshen_info: ['准备阶段,你可以进行判定,若判定结果为黑色,你可以重复此流程.当你的判定牌生效后,若判定结果为黑色,你可以将此牌置于你的武将牌上,称为🐱,否则你可以获得此牌.', '<font color = #c3f9ff>★注:你可以如手牌般使用或打出🐱.</font>'].join('</br>'),
			scqhMiao_qingguo: '倾国',
			scqhMiao_qingguo_info: '你可以将一张黑色牌当【闪】使用或打出.',
			scqhMiao_jizhi: '集智',
			scqhMiao_jizhi_info: '当你使用一张锦囊牌时,你可以摸一张牌.每回合每种牌名限一次,其他角色使用的锦囊牌结算完成后,你可以将之置于你的武将牌上,称为🐱.',
			scqhMiao_qicai: '奇才',
			scqhMiao_qicai_info: ['锁定技,你使用锦囊牌没有距离限制.若你装备区里的ＸＸ栏没有牌且没有被废除,则你获得下列对应的效果:', '<font color = #FFB6C1>◆武器:一名角色的判定牌生效前,你可以打出一张红色牌作为判定牌并获得原判定牌.', '◆防具:你视为拥有【八卦阵】.', '◆宝物:你可以如手牌般使用或打出🐱.', '</font>'].join('</br>'),
		},
	};
	for (var i in list.skill) {
		if (!list.skill[i].audio) {
			let num = list.skill[i].audiolength || 2;
			list.skill[i].audio = 'ext:' + lib.scqhExtension + '/audio:' + num;
		}
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info'], list.translate[i + '_append']);
	}
	for (var i in list.translate) {
		lib.translate[i] = list.translate[i];
	}
};

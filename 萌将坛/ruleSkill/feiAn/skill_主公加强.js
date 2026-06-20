'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			_koi_enhance_zhu: {
				forced: true,
				trigger: {
				},
				filter(event, player) {
					return player == game.zhu || player.isZhu;
				},
				content() {
					'step 0';
					event.num = 1;
					var config = game.koi_enhance_zhu;
					if (config == 'two') event.num = 2;
					if (config == 'four') event.num = 4;
					var list = [];
					list.push('激将');
					list.push('护驾');
					list.push('制霸');
					list.push('祸首');
					list.push('飞扬');
					list.push('跋扈');
					list.push('天命');
					event.list = list;
					('step 1');
					var clist = [];
					for (const i of event.list) {
						var skillname = '千鹤zhu_' + i;
						if (player.hasSkill(skillname)) {
							event.list.remove(i);
						} else {
							var cont = '【' + i + '】' + get.translation(skillname + '_info');
							clist.push(cont);
						}
					}
					if (!event.list.length) {
						event.finish();
						return;
					}
					var next = player.chooseControl(event.list);
					var str = '请选择一项主公技(可选' + get.cnNumber(event.num) + '次)';
					next.set('prompt', str);
					next.set('choiceList', clist);
					next.set('displayIndex', false);
					next.set('ai', function () {
						var player = _status.event.player;
						var choices = _status.event.controls.slice(0);
						return event.list.randomGet();
					});
					('step 2');
					var canAdd = result.control;
					if (canAdd) {
						event.num--;
						event.list.remove(canAdd);
						player.addSkillLog('千鹤zhu_' + canAdd);
						if (event.num >= 1) event.goto(1);
					}
				},
			},
			千鹤zhu_蛮裔: {
				forced: true,
				trigger: {
					target: 'useCardToBefore',
					player: 'showCharacterAfter',
				},
				filter(event, player, name) {
					if (name == 'useCardToBefore') return event.card && event.card.name == 'nanman';
					return true;
				},
				content() {
					if (event.triggername == 'useCardToBefore') {
						trigger.cancel();
					} else {
						var str = '###是否发动【' + get.translation(event.name) + '】？###视为使用一张【南蛮入侵】';
						player.chooseUseTarget(
							str,
							{
								name: 'nanman',
							},
							false,
							'nodistance'
						);
					}
				},
			},
			千鹤zhu_天命: {
				forced: true,
			},
			千鹤zhu_飞扬: {
				forced: true,
				trigger: {
					player: 'phaseJudgeBegin',
				},
				filter(event, player) {
					return player.countCards('j') && player.countCards('h');
				},
				content() {
					'step 0';
					var next = player.chooseToDiscard('h', 2, '是否发动【飞扬】,弃置两张手牌并弃置自己判定区的一张牌？');
					next.ai = function (card) {
						return 6 - get.value(card);
					};
					('step 1');
					if (result.bool) {
						player.discardPlayerCard(player, 'j', true);
					}
				},
			},
			千鹤zhu_跋扈: {
				forced: true,
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				content() {
					player.draw();
				},
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha') return num + 1;
					},
				},
			},
			千鹤zhu_祸首: {
				forced: true,
				silent: true,
				preHidden: true,
				audio: 'huoshou1',
				trigger: {
					source: 'damageSource',
					target: 'useCardToBefore',
					global: 'useCard',
				},
				filter(event, player, name) {
					if (!player.hasZhuSkill('千鹤zhu_祸首')) return false;
					if (!event.card) return false;
					if (event.card.name != 'nanman') return false;
					if (name == 'damageSource') {
						return event.getParent(2) && event.getParent(2).player != event.source;
					}
					if (name == 'useCardToBefore') return true;
					if (name == 'useCard') return event.player != player;
					return false;
				},
				content() {
					'step 0';
					var name = event.triggername;
					if (name == 'damageSource') {
						var str = '祸首:是否令 ' + get.translation(trigger.source) + ' 摸一张牌？';
						trigger.getParent(2).player.chooseBool(str).ai = function () {
							return get.attitude(trigger.getParent(2).player, trigger.source) > 0;
						};
					} else event.finish();
					if (name == 'useCardToBefore') {
						trigger.cancel();
					}
					if (name == 'useCard') {
						trigger.customArgs.default.customSource = player;
					}
					('step 1');
					if (result.bool) {
						trigger.source.draw();
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (card.name == 'nanman') return 0;
						},
					},
				},
			},
			千鹤zhu_激将: {
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(event, player) {
					if (!player.hasZhuSkill('千鹤zhu_激将')) return false;
					return (
						game.hasPlayer(function (current) {
							return current != player && get.distance(current, player) <= 1;
						}) &&
						!event.千鹤zhu_激将 &&
						(event.type != 'phase' || !player.hasSkill('千鹤zhu_激将_3'))
					);
				},
				viewAs: {
					name: 'sha',
				},
				filterCard() {
					return false;
				},
				selectCard: -1,
				check(card) {
					var player = _status.event.player;
					var players = game.filterPlayer(function (current) {
						return current != player && get.distance(current, player) <= 1 && current.hasSha() && get.attitude(current, player) > 0;
					});
					return players.length;
				},
				ai: {
					order() {
						return get.order({ name: 'sha' }) + 0.3;
					},
					respondSha: true,
					skillTagFilter(player) {
						if (
							!game.hasPlayer(function (current) {
								return current != player && get.distance(current, player) <= 1;
							})
						)
							return false;
					},
				},
				group: '千鹤zhu_激将_1',
				subSkill: {
					1: {
						forced: true,
						trigger: {
							player: ['useCardBegin', 'respondBegin'],
						},
						logTarget: 'targets',
						filter(event, player) {
							return event.skill == '千鹤zhu_激将';
						},
						content() {
							'step 0';
							delete trigger.skill;
							trigger.parent.set('千鹤zhu_激将', true);
							('step 1');
							var name = event.triggername;
							if (event.current == undefined) event.current = player.next;
							if (event.current == player) {
								player.addTempSkill('千鹤zhu_激将_3');
								event.finish();
								trigger.cancel();
								trigger.parent.goto(0);
							} else if (get.distance(event.current, player) <= 1) {
								var next = event.current.chooseToRespond('是否替' + get.translation(player) + '打出一张杀？', { name: 'sha' });
								next.set('ai', function () {
									var event = _status.event;
									if (name == 'useCardBegin' && trigger.targets.length != 0) {
										if (event.player == trigger.targets[0]) return false;
										if (event.source == trigger.targets[0]) return false;
									}
									return get.attitude(event.player, event.source) - 2;
								});
								next.set('source', player);
								next.set('千鹤zhu_激将', true);
								next.set('skillwarn', '替' + get.translation(player) + '打出一张杀');
								next.noOrdering = true;
								next.autochoose = lib.filter.autoRespondSha;
							} else {
								event.current = event.current.next;
								event.redo();
							}
							('step 2');
							if (result.bool) {
								trigger.card = result.card;
								trigger.cards = result.cards;
								trigger.card.cards = trigger.cards;
								trigger.throw = false;
							} else {
								event.current = event.current.next;
								event.goto(1);
							}
						},
					},
					3: {
						silent: true,
						charlotte: true,
						trigger: {
							global: ['useCardAfter', 'useSkillAfter', 'phaseAfter'],
						},
						filter(event, player) {
							return event.skill != '千鹤zhu_激将';
						},
						content() {
							player.removeSkill(event.name);
						},
					},
				},
			},
			千鹤zhu_护驾: {
				audio: 'hujia',
				trigger: {
					player: ['chooseToRespondBefore', 'chooseToUseBefore'],
				},
				filter(event, player) {
					if (!player.hasZhuSkill('千鹤zhu_护驾')) return false;
					if (event.responded) return false;
					if (player.storage.千鹤zhu_护驾) return false;
					if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
					return game.hasPlayer(function (current) {
						return current != player && get.distance(current, player) <= 1;
					});
				},
				check(event, player) {
					return true;
				},
				content() {
					'step 0';
					if (event.current == undefined) event.current = player.next;
					if (get.distance(event.current, player) <= 1 && event.current.countCards('he', { type: 'equip' })) {
						player.storage.千鹤zhu_护驾 = true;
						game.log(get.translation(event.current) + '在考虑是否护驾');
						var str = '是否摸一张牌并交给' + get.translation(player) + '一张装备牌？';
						var next = event.current.chooseCard('he', str, { type: 'equip' });
						next.set('ai', function (card) {
							if (get.attitude(event.current, player) > 0) {
								if (get.position(card) == 'h') return 8 - get.value(card);
								if (get.position(card) == 'e') return 8 - get.value(card);
							}
							return 0;
						});
					}
					('step 1');
					player.storage.千鹤zhu_护驾 = false;
					if (result.bool) {
						event.current.draw();
						event.current.give(result.cards, player, 'give');
						trigger.untrigger();
						trigger.result = {
							bool: true,
							card: {
								name: 'shan',
							},
						};
						trigger.responded = true;
						event.finish();
					} else {
						event.current = event.current.next;
						if (event.current != player) event.goto(0);
					}
					('step 2');
					var str = '是否弃置一张装备牌,视为使用或打出了一张【闪】？';
					var next = player.chooseToDiscard(str, 'hes', { type: 'equip' });
					next.set('ai', function (card) {
						var player = _status.event.player;
						if (player.hp <= player.maxHp && get.position(card) == 'e' && card.name == 'baiyin') return 7 - get.value(card);
						if (get.position(card) != 'e') return 7 - get.value(card);
						if (player.hp <= player.maxHp && get.position(card) == 'e') return 7 - get.value(card);
						return 7 - get.value(card);
					});
					('step 3');
					if (result.bool) {
						trigger.untrigger();
						trigger.result = {
							bool: true,
							card: {
								name: 'shan',
							},
						};
						trigger.responded = true;
					}
				},
				ai: {
					respondShan: true,
					skillTagFilter(player) {
						if (player.storage.千鹤zhu_护驾) return false;
						return game.hasPlayer(function (current) {
							return current != player && get.distance(current, player) <= 1;
						});
					},
				},
			},
			千鹤zhu_制霸: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return target != player && player.canCompare(target);
				},
				content() {
					'step 0';
					player.chooseToCompare(target);
					('step 1');
					if (!result.tie) {
						var win = player;
						var fail = target;
						if (!result.bool) {
							win = target;
							fail = player;
						}
						if (win.canUse({ name: 'juedou' }, fail, false)) {
							win.useCard({ name: 'juedou' }, 'nowuxie', fail);
						}
					}
				},
				ai: {
					order: 10,
					result: {
						player(player, target) {
							return 1;
						},
						target(player, target) {
							return get.effect(target, { name: 'juedou' }, player);
						},
					},
				},
				global: '千鹤zhu_制霸_global',
			},
			千鹤zhu_制霸_global: {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					var targets = game.filterPlayer(function (current) {
						return current != player && current.hasZhuSkill('千鹤zhu_制霸', player) && player.canCompare(current);
					});
					return targets.length;
				},
				filterTarget(card, player, target) {
					return target != player && target.hasZhuSkill('千鹤zhu_制霸', player) && player.canCompare(target);
				},
				selectTarget() {
					var player = _status.event.player;
					var targets = game.filterPlayer(function (current) {
						return current != player && target.hasZhuSkill('千鹤zhu_制霸', player);
					});
					return targets.length > 1 ? [1, 1] : [-1, -1];
				},
				prompt() {
					var player = _status.event.player;
					var targets = game.filterPlayer(function (current) {
						return current != player && current.hasZhuSkill('千鹤zhu_制霸', player);
					});
					return '和' + get.translation(targets) + (targets.length > 1 ? '中的一人' : '') + '拼点,赢的角色视作对输的角色使用一张【决斗】';
				},
				content() {
					'step 0';
					player.chooseToCompare(target);
					('step 1');
					if (!result.tie) {
						var win = player;
						var fail = target;
						if (!result.bool) {
							win = target;
							fail = player;
						}
						if (win.canUse({ name: 'juedou' }, fail, false)) {
							win.useCard({ name: 'juedou' }, 'nowuxie', fail);
						}
					}
				},
				ai: {
					order: 10,
					result: {
						player(player, target) {
							return 1;
						},
						target(player, target) {
							return get.effect(target, { name: 'juedou' }, player);
						},
					},
				},
			},
			千鹤zhu_制霸2: {
				prepare(cards, player, targets) {
				},
				ai: {
					basic: {
						order: 1,
					},
					expose: 0.2,
					result: {
						player(player, target) {
							if (player.countCards('h', 'sha') < target.countCards('h', 'sha')) {
								return -10;
							}
							var cards1 = player.getCards('h');
							var cards2 = target.getCards('h');
							var num1 = 0;
							for (var i = 0; i < cards1.length; i++) {
								if (cards1[i].number >= num1) num1 = cards1[i].number;
							}
							var num2 = 0;
							for (var j = 0; j < cards2.length; j++) {
								if (cards2[j].number >= num2) num2 = cards2[j].number;
							}
							var num3 = Math.min(13, num2 + 3);
							if (num1 >= num3) return 1;
							return -10;
						},
					},
				},
			},
		},
		translate: {
			千鹤zhu_激将: '激将',
			千鹤zhu_激将_info: '主公技,当你需要使用或打出【杀】时,你可以令计算与你的距离为１的其他角色依次选择是否打出一张【杀】.若有角色响应,则你视为使用或打出了此【杀】.',
			千鹤zhu_护驾: '护驾',
			千鹤zhu_护驾_info: '主公技,当你需要使用或打出一张【闪】时,你可以令计算与你的距离为１的其他角色选择是否摸一张牌并交给你一张装备牌.若有角色如此做,则你视为使用或打出了一张【闪】.若无人选是,你可以弃置一张装备牌,视为使用或打出了一张【闪】.',
			千鹤zhu_制霸: '制霸',
			千鹤zhu_制霸_info: '主公技,出牌阶段限一次,你可以与一名其他角色拼点.其他角色的出牌阶段限一次,其可以与你拼点.若如此做,赢的角色视作对输的角色使用一张不可被【无懈可击】响应的【决斗】.',
			千鹤zhu_制霸2: '制霸',
			千鹤zhu_祸首: '祸首',
			千鹤zhu_祸首_info: '主公技,锁定技,【南蛮入侵】对你无效;你视为所有【南蛮入侵】的伤害来源;当你因其他角色使用的【南蛮入侵】而造成伤害时,该角色可以令你摸一张牌.',
			千鹤zhu_飞扬: '飞扬',
			千鹤zhu_飞扬_info: '主公技,判定阶段开始时,你可以弃置两张牌,并弃置自己判定区内的一张牌.',
			千鹤zhu_跋扈: '跋扈',
			千鹤zhu_跋扈_info: '主公技,锁定技,准备阶段,你摸一张牌.出牌阶段,你使用【杀】的次数上限加１.',
			千鹤zhu_天命: '天命',
			千鹤zhu_天命_info: '主公技,当你成为【杀】或【决斗】的目标后,你可以弃置两张牌(不足则全弃),摸两张牌.若如此做,全场体力值最多的角色(数量为一且不是你)也可以如此做.',
			千鹤zhu_蛮裔: '蛮裔',
			千鹤zhu_蛮裔_info: '锁定技,【南蛮入侵】对你无效;当你登场时,你可以视为使用一张【南蛮入侵】.',
		},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

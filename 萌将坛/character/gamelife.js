'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqhGameLife_kongbai: {
				nobracket: true,
				forced: true,
				targetname(player) {
					if (!player) return false;
					let list = [];
					let map = {};
					map.空 = false;
					map.白 = false;
					let names = ['name', 'name1', 'name2'];
					for (let blank in map) {
						let strx = 'scqhGameLife_' + blank;
						for (let name of names) {
							let he = player[name];
							if (he && he == strx) map[blank] = true;
						}
						if (!map[blank]) list.add(strx);
					}
					if (list.length == 1) return list[0];
					return false;
				},
				whoname(current, str) {
					if (!current || !str) return false;
					let names = ['name', 'name1', 'name2'];
					for (let name of names) {
						let he = current[name];
						if (he && he == str) return true;
					}
					return false;
				},
				allwhoname(str, dead) {
					let skill = lib.skill.scqhGameLife_kongbai || {};
					let whoname = skill.whoname;
					if (!whoname) return false;
					let players = [];
					if (dead) {
						players = game.players.concat(game.dead).filter((current) => {
							return whoname(current, str);
						});
					} else {
						players = game.filterPlayer((current) => {
							return whoname(current, str);
						});
					}
					return players;
				},
				group: ['scqhGameLife_kongbai_die', 'scqhGameLife_kongbai_damage', 'scqhGameLife_kongbai_use', 'scqhGameLife_kongbai_show', 'scqhGameLife_kongbai_over'],
				subSkill: {
					die: {
						forced: true,
						trigger: {
							global: 'dieAfter',
						},
						filter(trigger, player) {
							let skill = lib.skill.scqhGameLife_kongbai || {};
							let targetname = skill.targetname(player);
							if (!targetname) return false;
							let whoname = skill.whoname(trigger.player, targetname);
							if (!whoname) return false;
							let allwhoname = skill.allwhoname(targetname);
							if (allwhoname && allwhoname.length) return false;
							return true;
						},
						content() {
							player.die();
						},
					},
					damage: {
						forced: true,
						trigger: {
							source: 'damageBefore',
						},
						filter(trigger, player) {
							let skill = lib.skill.scqhGameLife_kongbai || {};
							let targetname = skill.targetname(player);
							if (!targetname) return false;
							let whoname = skill.whoname(trigger.player, targetname);
							if (!whoname) return false;
							return true;
						},
						content() {
							trigger.cancel();
							trigger.player.recover();
						},
					},
					use: {
						forced: true,
						trigger: {
							target: 'useCardToTargeted',
						},
						filter(trigger, player) {
							if (trigger.player == player) return false;
							let skill = lib.skill.scqhGameLife_kongbai || {};
							let targetname = skill.targetname(player);
							if (!targetname) return false;
							let allwhoname = skill.allwhoname(targetname);
							if (allwhoname && allwhoname.length) {
								let seat = allwhoname[0];
								if (seat) return player.scqh_charm(seat, true);
							}
							return false;
						},
						content() {
							let skill = lib.skill.scqhGameLife_kongbai || {};
							let targetname = skill.targetname(player);
							let allwhoname = skill.allwhoname(targetname);
							if (allwhoname && allwhoname.length) {
								let seat = allwhoname[0];
								if (seat) player.scqh_charm(seat);
							}
						},
					},
					show: {
						forced: true,
						trigger: {
							player: 'showCharacterAfter',
						},
						filter(event, player) {
							let skill = lib.skill.scqhGameLife_kongbai || {};
							let targetname = skill.targetname(player);
							if (!targetname) return false;
							let allwhoname = skill.allwhoname(targetname, true);
							if (allwhoname && allwhoname.length) return false;
							return true;
						},
						content() {
							var skill = lib.skill.scqhGameLife_kongbai || {};
							var targetname = skill.targetname(player);
							var next = game.addPlayer(-1, targetname);
							next.getId();
							next.identity = player.identity;
							next.node.identity.dataset.color = player.identity;
							next.setIdentity(player.identity);
							next.identityShown = true;
							next.directgain(get.cards(4));
							next.update();
							next._trueMe = player;
							game.addGlobalSkill('autoswap');
							if (next == game.me) {
								game.notMe = true;
								if (!_status.auto) ui.click.auto();
							}
						},
					},
					over: {
						forced: true,
						trigger: {
							global: 'dieAfter',
						},
						filter(event, player) {
							return false;
						},
						content() {
							'step 0';
							var over = lib.skill.scqhGameLife_kong.over(trigger.player) || false;
							if (over == 'die') {
								player.die();
								event.finish();
							}
							('step 1');
							event.target = game.players[1];
							var next = player.chooseControl('同意', '不同意');
							next.set('prompt', '是否让' + get.translation(event.target) + '游戏胜利');
							next.set('ai', function () {
								return 0;
							});
							('step 2');
							if (result.control && result.control == '同意') {
								event.target.useSkill('scqhGameLife_over');
							}
						},
					},
				},
			},
			scqhGameLife_kong: {
				inherit: 'scqhGameLife_kongbai',
			},
			scqhGameLife_bai: {
				inherit: 'scqhGameLife_kongbai',
			},
			scqhGameLife_over: {
				content() {
					game.over(true);
				},
			},
			scqhGameLife_shekong: {
				hiddenSkill: true,
				mod: {
					maxHandcard(player, num) {
						var players =
							game.countPlayer(function (current) {
								if (current == player) return false;
								return get.distance(current, player) <= 1;
							}) || 0;
						if (players) return num - players;
					},
				},
				forced: true,
				trigger: {
					player: 'phaseDrawBegin2',
				},
				filter(event, player) {
					if (event.numFixed) return false;
					var players =
						game.countPlayer(function (current) {
							if (current == player) return false;
							return get.distance(current, player) <= 1;
						}) || 0;
					return players;
				},
				content() {
					var players =
						game.countPlayer(function (current) {
							if (current == player) return false;
							return get.distance(current, player) <= 1;
						}) || 0;
					trigger.num += players;
				},
			},
			scqhGameLife_aizhidan: {
				nobracket: true,
				enable: 'phaseUse',
				filter(event, player) {
					return player.countCards('hs');
				},
				check(card) {
					return 8 - get.value(card);
				},
				filterCard(card, player) {
					let list = ['heart', 'spade', 'club', 'diamond'];
					let storage = player.storage.scqhGameLife_aizhidan_temp || [];
					let suit = card.suit;
					if (storage.includes(suit)) return false;
					return true;
				},
				position: 'hes',
				viewAs(card, player) {
					var nature = null;
					switch (card.suit) {
						case 'heart': {
							nature = 'thunder';
							break;
						}
						case 'spade': {
							nature = 'stab';
							break;
						}
						case 'club': {
							nature = 'ice';
							break;
						}
						case 'diamond': {
							nature = 'fire';
							break;
						}
					}
					return {
						name: 'sha',
						nature: nature,
						scqhGameLife_aizhidan: true,
					};
				},
				precontent() {
					var suit = event.result.card.suit;
					player.addTempSkill('scqhGameLife_aizhidan_temp');
					player.markAuto('scqhGameLife_aizhidan_temp', suit);
				},
				mod: {
					targetInRange(card, player, target) {
						if (!card.scqhGameLife_aizhidan) return;
						if (card.name != 'sha') return;
						if (typeof card.number != 'number') return;
					},
					cardUsable(card) {
						if (card.name != 'sha') return;
						if (card.scqhGameLife_aizhidan) return Infinity;
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
				group: ['scqhGameLife_aizhidan_hit', 'scqhGameLife_aizhidan_miss'],
				subSkill: {
					temp: {
						charlotte: true,
					},
					hit: {
						forced: true,
						changeSeat: true,
						trigger: {
							player: 'shaHit',
						},
						filter(trigger, player) {
							var skill = 'scqhGameLife_aizhidan';
							if (!trigger.card || !trigger.card[skill]) return false;
							if (!trigger.target || !trigger.target.isIn()) return false;
							if (!player.scqh_charm(trigger.target, true)) return false;
							return true;
						},
						content() {
							player.scqh_charm(trigger.target);
						},
					},
					miss: {
						popup: false,
						log: false,
						trigger: {
							player: 'shaMiss',
						},
						logTarget(trigger, player) {
							let evt = trigger.getParent('useCard');
							if (!evt || evt.name != 'useCard') return [];
							if (!evt.targets || !evt.targets.length) return [];
							let targets = [];
							let list = ['nextSeat', 'previousSeat'];
							for (let seat of list) {
								let current = trigger.target[seat];
								if (current == player) continue;
								if (evt.targets.includes(current)) continue;
								if (!player.canUse(evt.card, current, false)) continue;
								targets.add(current);
							}
							return targets;
						},
						prompt(trigger, player) {
							let targets = lib.skill.scqhGameLife_aizhidan_miss.logTarget(trigger, player);
							let prompt = '是否对';
							prompt += get.translation(targets);
							if (targets.length > 1) prompt += '中的一人';
							prompt += '发动【爱の弹】？';
							return prompt;
						},
						filter(trigger, player) {
							let skill = 'scqhGameLife_aizhidan';
							if (!trigger.card || !trigger.card[skill]) return false;
							if (!trigger.target || !trigger.target.isIn()) return false;
							let targets = lib.skill.scqhGameLife_aizhidan_miss.logTarget(trigger, player);
							if (!targets.length) return false;
							return true;
						},
						check(trigger, player) {
							return 1;
						},
						content() {
							'step 0';
							var targets = lib.skill[event.name].logTarget(trigger, player);
							if (targets.length > 1) {
								player
									.chooseTarget(true, function (card, player, target) {
										let targets = _status.event.targets;
										return targets.includes(target);
									})
									.set('targets', targets)
									.set('prompt', '请选择【爱の弹】的目标')
									.set('ai', function (target) {
										let player = _status.event.player;
										let att = get.attitude(player, target);
										return -att;
									});
							} else
								event._result = {
									bool: true,
									targets: targets,
								};
							('step 1');
							var target = (result.targets || [])[0] || false;
							if (target) {
								var evt = trigger.getParent('useCard');
								evt.targets.add(target);
							}
						},
					},
				},
			},
			scqhGameLife_shimeng: {
				trigger: {
					global: 'useCardToPlayered',
				},
				filter(trigger, player) {
					if (!trigger.card || trigger.card.name != 'sha') return false;
					if (trigger.parent.triggeredTargets3.length > 1) return false;
					if (!player.canCompare(trigger.player, true)) return false;
					return true;
				},
				check(trigger, player) {
					var targets = trigger.targets || [];
					for (var target of targets) {
						var att = get.attitude(player, target);
						if (att > 0) return 1;
					}
					return 0;
				},
				content() {
					'step 0';
					player.draw();
					('step 1');
					if (player.canCompare(trigger.player)) {
						player.chooseToCompare(trigger.player);
					} else event.finish();
					('step 2');
					event.bool = result.bool;
					var targets = trigger.targets || [];
					if (targets.length > 1) {
						player
							.chooseTarget(true, function (card, player, target) {
								let targets = _status.event.targets;
								return targets.includes(target);
							})
							.set('targets', targets)
							.set('prompt', '请选择【誓盟】的目标')
							.set('ai', function (target) {
								let player = _status.event.player;
								let att = get.attitude(player, target);
								return att;
							});
					} else if (targets.length) {
						event._result = {
							bool: true,
							targets: targets,
						};
					} else event.finish();
					('step 3');
					var target = (result.targets || [])[0] || false;
					if (target) {
						player.line(target);
						if (event.bool) {
							target.changeHujia(1, null, true);
						} else {
							game.log(player, '代替', target, '成为', trigger.card, '的目标');
							trigger.parent.targets.remove(target);
							trigger.parent.targets.add(player);
						}
					}
				},
			},
		},
		translate: {
			scqhGameLife_kongbai: '空白',
			scqhGameLife_bai: '白',
			scqhGameLife_bai_info: ['锁定技,不为白的角色不可用.', '◆Ａ:空死亡后,白死亡.', '◆Ｂ:白即将对空造成的伤害视为回复体力.', '◆Ｃ:白成为其他角色使用牌的目标时,魅惑空.', '◆Ｄ:白登场后,在随机位置召唤空(身份相同且由白控制).', '◆Ｅ:一名角色死亡后,若存活角色只有空与白,则进行交涉,令其中一方获得游戏胜利.'].join('<br/>'),
			scqhGameLife_kong: '空',
			scqhGameLife_kong_info: ['锁定技,不为空的角色不可用.', '◆Ａ:白死亡后,空死亡.', '◆Ｂ:空即将对白造成的伤害视为回复体力.', '◆Ｃ:空成为其他角色使用牌的目标时,魅惑白.', '◆Ｄ:空登场后,在随机位置召唤白(身份相同且由空控制).', '◆Ｅ:一名角色死亡后,若存活角色只有空与白,则进行交涉,令其中一方获得游戏胜利.'].join('<br/>'),
			scqhGameLife_shekong: '社恐',
			scqhGameLife_shekong_info: '隐匿技,锁定技.①你的手牌上限减Ｘ.②摸牌阶段,你多摸Ｘ张牌(Ｘ为你距离１以内的其他角色数).',
			scqhGameLife_shimeng: '誓盟',
			scqhGameLife_shimeng_info: '当一名角色使用【杀】指定目标后,你可以摸一张牌,与其拼点.若你赢,则令其中一个目标获得一点护甲.若你没赢,则你代替其中一个目标成为此牌的目标.',
			scqhGameLife_aizhidan: '爱の弹',
			scqhGameLife_aizhidan_info: '出牌阶段各限一次,你可以将一张<u>♥️️／♠️️／♣️️／♦️️</u>牌当做不受次数限制的<u>雷／刺／冰／火</u>【杀】使用.爱の弹命中时,魅惑目标.爱の弹被闪避时,你可以令目标的上家或下家成为爱の弹的额外目标.',
		},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

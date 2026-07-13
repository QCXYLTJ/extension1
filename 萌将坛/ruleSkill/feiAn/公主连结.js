'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqh_pcr_ubfilter: {
				filter(event, player, name) {
					return true;
					player.storage.scqh_pcr_ubfilter = 'nowuxie';
					if (player.pcr_tp < 1000) return false;
					if (event.type == 'dying') return false;
					var filter = event.filterCard;
					if (filter({ name: 'caochuan' }, player, event)) return false;
					if (filter({ name: 'wuxie' }, player, event) && event.parent.target) {
						if (event.parent.target != player) return false;
						player.storage.scqh_pcr_ubfilter = 'wuxie';
					}
					return true;
				},
				filterTarget(card, player, target) {
					if (target == player) return false;
					if (player.inRange(target)) return true;
					if (get.distance(player, target) <= 1) return true;
					var players = game.filterPlayer();
					for (const i of players) {
						if (i == player) continue;
						if (get.distance(player, i) < get.distance(player, target)) return false;
					}
					return true;
				},
				filterTarget1(card, player, target) {
					if (target == player) return false;
					if (get.distance(target, player) <= 1) return true;
					var players = game.filterPlayer();
					for (const i of players) {
						if (i == player) continue;
						if (get.distance(i, player) < get.distance(target, player)) return false;
					}
					return true;
				},
				filterTarget2(card, player, target) {
					if (target == player) return false;
					var skn = 'scqh_pcr_filterTarget2';
					if (!player.storage[skn + '_player']) player.storage[skn + '_player'] = player;
					var played = player.storage[skn + '_player'];
					if (!player.storage[skn]) player.storage[skn] = 0;
					if (ui.selected.targets.length < player.storage[skn]) {
						while (ui.selected.targets.length) {
							var cur = ui.selected.targets.shift();
							if (cur.instance) cur.instance.classList.remove('selected');
							cur.classList.remove('selected');
							ui.selected.targets.remove(cur);
						}
					}
					player.storage[skn] = ui.selected.targets.length;
					if (ui.selected.targets.length == 0) {
						return target == played.next || target == played.previous;
					}
					if (ui.selected.targets.length == 1) {
						if (ui.selected.targets[0] == played.next) {
							return target == ui.selected.targets[0].next;
						}
						return target == ui.selected.targets[0].previous;
					}
					if (ui.selected.targets.length == ui.selected.targets.length) {
						var num1 = ui.selected.targets.length - 1;
						var num2 = ui.selected.targets.length - 2;
						if (ui.selected.targets[num1] == ui.selected.targets[num2].next) {
							return target == ui.selected.targets[num1].next;
						}
						return target == ui.selected.targets[num1].previous;
					}
					return false;
				},
				hiddenCard(player, name) {
					var sss = [];
					var list = player.getSkills('仲村由理', '天下第一').filter(function (skill) {
						return get.info(skill);
					});
					for (var j of list) {
						if (j.indexOf('scqh_pcr_ub_') >= 0) sss.push(j);
					}
					if (name == 'wuxie') return player.pcr_tp >= 1000 && sss.length;
					return false;
				},
				hiddenCard2(player, name) {
					return lib.skill.scqh_pcr_ubfilter.hiddenCard(player, name);
				},
			},
			scqh_pcr_行动记录: {
				silent: true,
				forced: true,
				trigger: {
					player: ['useCard1', 'respond'],
				},
				filter(event, player, name) {
					var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
					player.storage.scqh_pcr_行动记录 = num;
					return false;
				},
				marktext: '行动',
				intro: {
					name: '行动记录',
					content(num) {
						return '' + Math.floor(num);
					},
					markcount(num) {
						return Math.floor(num);
					},
				},
			},
			_scqh_pcr_行动技_超速: {
				silent: true,
				forced: true,
				trigger: {
				},
				filter(event, player, name) {
					var sss = [];
					var list = player.getSkills('仲村由理', '天下第一').filter(function (skill) {
						return get.info(skill);
					});
					for (var j of list) {
						if (j.indexOf('scqh_pcr_') >= 0) sss.push(j);
					}
					if (!sss.length) return false;
					var speed = 'scqh_pcr_行动速度';
					var length = 1;
					if (player.storage[speed + '_加速']) {
						length += player.storage[speed + '_加速'];
					}
					if (player.storage[speed + '_减速']) {
						length -= player.storage[speed + '_减速'];
					}
					if (length > 1) return true;
					return false;
				},
				content() {
					var speed = 'scqh_pcr_行动速度';
					var length = 1;
					if (player.storage[speed + '_加速']) {
						length += player.storage[speed + '_加速'];
					}
					if (player.storage[speed + '_减速']) {
						length -= player.storage[speed + '_减速'];
					}
					if (length > 1) length--;
					player.storage[speed + '_超速'] += length;
					if (player.storage[speed + '_超速'] >= 1) {
						player.storage[speed + '_超速']--;
						player.storage.scqh_pcr_超速回合++;
					}
				},
			},
			_scqh_pcr_超速回合: {
				silent: true,
				forced: true,
				lastDo: true,
				trigger: {
					global: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
				},
				filter(event, player, name) {
					return player.storage.scqh_pcr_超速回合;
				},
				content() {
					'step 0';
					player.storage.scqh_pcr_超速回合--;
					('step 1');
					var next = player.phaseUse();
					event.next.remove(next);
					trigger.next.push(next);
				},
			},
			scqh_pcr_晕眩: {
				silent: true,
				forced: true,
				charlotte: true,
				mark: true,
				marktext: '晕眩',
				intro: {
					content(storage, player) {
						var str = '你不能使用或打出卡牌';
						str += '<br/><br/>';
						str += '剩余持续回合:' + player.storage.scqh_pcr_晕眩;
						return str;
					},
				},
				trigger: {
					global: 'phaseAfter',
				},
				filter(event, player, name) {
					var skn = 'scqh_pcr_晕眩';
					if (!player.storage[skn]) player.storage[skn] = 0;
					return player.storage[skn];
				},
				content() {
					var skn = event.name;
					if (player.storage[skn]) player.storage[skn]--;
					if (!player.storage[skn]) player.removeSkill(skn);
				},
				mod: {
					cardEnabled() {
						return false;
					},
					cardRespondable() {
						return false;
					},
					cardSavable() {
						return false;
					},
				},
				_priority: 1968,
			},
			scqh_pcr_反击: {
				silent: true,
				forced: true,
				charlotte: true,
				mark: true,
				marktext: '反击',
				intro: {
					content(storage, player) {
						var str = '当你受到伤害后,你可以弃置一张【杀】,对一名距离最近的其他角色发起一次物理攻击';
						str += '<br/><br/>';
						str += '剩余持续回合:' + player.storage.scqh_pcr_反击;
						return str;
					},
				},
				trigger: {
					global: 'phaseAfter',
				},
				filter(event, player, name) {
					var skn = 'scqh_pcr_反击';
					if (!player.storage[skn]) player.storage[skn] = 0;
					return player.storage[skn];
				},
				content() {
					if (player.storage[event.name]) player.storage[event.name]--;
					if (!player.storage[event.name]) player.removeSkill(event.name);
				},
				_priority: 1968,
				group: 'scqh_pcr_反击_反击',
				subSkill: {
					反击: {
						silent: true,
						forced: true,
						trigger: {
							player: 'damageEnd',
						},
						filter(event, player, name) {
							var skn = 'scqh_pcr_反击';
							if (!player.storage[skn]) player.storage[skn] = 0;
							return player.storage[skn];
						},
						content() {
							'step 0';
							var str = '当你受到伤害后,你可以弃置一张【杀】,对一名距离最近的其他角色发起一次物理攻击.';
							player.chooseCardTarget({
								prompt: get.prompt(event.name),
								prompt2: str,
								position: 'hs',
								filterCard(card, player, target) {
									return card.name == 'sha';
								},
								filterTarget(card, player, target) {
									return lib.skill.scqh_pcr_ubfilter.filterTarget(card, player, target);
								},
								targetprompt: '施法目标',
								ai1(card) {
									return 1;
								},
								ai2(target) {
									return get.effect(target, { name: 'sha' }, player, player);
								},
							});
							('step 1');
							if (result.targets?.length) {
								event.targed = result.targets[0];
								player.discard(result.cards);
								player.pcr_攻击(event.targed);
							}
						},
					},
				},
			},
			scqh_pcr_挑衅: {
				logTarget: 'player',
				trigger: {
					global: 'useCardToTarget',
				},
				prompt2(event, player) {
					var player = _status.event.player;
					var str = '你可以移去一层<挑衅>标记,将此【杀】从 ' + get.translation(event.target) + ' 处转移给你.';
					return str;
				},
				filter(event, player, name) {
					if (event.player == player || event.targets.includes(player)) return false;
					if (!player.hasMark('_scqh_pcr_挑衅') || event.target.hasMark('_scqh_pcr_挑衅')) return false;
					return event.card && event.card.name == 'sha' && event.targets.length == 1 && event.player.inRange(player);
				},
				content() {
					'step 0';
					player.removeMark(event.name, 1, false);
					var evt = trigger.parent;
					evt.triggeredTargets2.remove(trigger.target);
					evt.targets.remove(trigger.target);
					evt.targets.push(player);
				},
				marktext: '衅',
				intro: {
					name: '挑衅',
					content(storage, player) {
						var str = '一名角色成为【杀】的唯一目标时,若你不是此【杀】的使用者或目标,且此【杀】使用者的攻击范围内包含你、目标不处于挑衅状态,你可以移去一层<挑衅>标记,将此【杀】转移给你.';
						return str;
					},
				},
			},
			scqh_pcr_mark: {
				marktext: '公主',
				intro: {
					name: '公主连结·行动数据',
					mark(dialog, content, player) {
						var str = '';
						if (player.pcr_TP上升) {
							str += '技能值上升:' + player.pcr_TP上升 + '<br/><br/>';
						}
						if (player.pcr_TP减轻) {
							str += '技能值消耗降低:' + player.pcr_TP减轻 + '<br/><br/>';
						}
						if (player.storage.scqh_pcr_行动速度_加速) {
							str += '行动速度(加速):<br/>';
							str += '加速值(' + player.storage.scqh_pcr_行动速度_加速 + ')<br/>';
							str += '续航值(' + player.storage.scqh_pcr_行动速度_加速_续航 + ')<br/><br/>';
						}
						if (player.storage.scqh_pcr_行动速度_减速) {
							str += '行动速度(减速):<br/>';
							str += '减速值(' + player.storage.scqh_pcr_行动速度_减速 + ')<br/>';
							str += '续航值(' + player.storage.scqh_pcr_行动速度_减速_续航 + ')<br/><br/>';
						}
						if (player.storage.scqh_pcr_行动速度_超速) {
							str += '行动速度(超速):<br/>';
							str += '回合数(' + player.storage.scqh_pcr_超速回合 + ')<br/>';
							str += '超速值(' + player.storage.scqh_pcr_行动速度_超速 + ')<br/><br/>';
						}
						if (player.storage.scqh_pcr_物理无效) {
							str += '物理无效屏障:<br/>';
							str += '护盾值(' + player.storage.scqh_pcr_物理无效 + ')<br/>';
							str += '续航值(' + player.storage.scqh_pcr_物理无效_续航 + ')<br/><br/>';
						}
						if (player.storage.scqh_pcr_物理吸收) {
							str += '物理吸收屏障:<br/>';
							str += '护盾值(' + player.storage.scqh_pcr_物理吸收 + ')<br/>';
							str += '续航值(' + player.storage.scqh_pcr_物理吸收_续航 + ')<br/><br/>';
						}
						if (player.storage.scqh_pcr_魔法无效) {
							str += '魔法无效屏障:<br/>';
							str += '护盾值(' + player.storage.scqh_pcr_魔法无效 + ')<br/>';
							str += '续航值(' + player.storage.scqh_pcr_魔法无效_续航 + ')<br/><br/>';
						}
						if (player.storage.scqh_pcr_魔法吸收) {
							str += '魔法吸收屏障:<br/>';
							str += '护盾值(' + player.storage.scqh_pcr_魔法吸收 + ')<br/>';
							str += '续航值(' + player.storage.scqh_pcr_魔法吸收_续航 + ')<br/><br/>';
						}
						if (player.storage.scqh_pcr_双盾无效) {
							str += '物理魔法无效屏障:<br/>';
							str += '护盾值(' + player.storage.scqh_pcr_双盾无效 + ')<br/>';
							str += '续航值(' + player.storage.scqh_pcr_双盾无效_续航 + ')<br/><br/>';
						}
						if (player.storage.scqh_pcr_双盾吸收) {
							str += '物理魔法吸收屏障:<br/>';
							str += '护盾值(' + player.storage.scqh_pcr_双盾吸收 + ')<br/>';
							str += '续航值(' + player.storage.scqh_pcr_双盾吸收_续航 + ')<br/><br/>';
						}
						dialog.addText(str);
					},
				},
			},
			_scqh_pcr_mark2: {
				trigger: {
					player: ['pcr_changeTpAfter', 'pcr_varyTpAfter', 'pcr_hudunAfter', 'pcr_speedAfter'],
				},
				filter(event, player, name) {
					if (player.pcr_TP上升 || player.pcr_TP减轻 || player.storage.scqh_pcr_物理无效 || player.storage.scqh_pcr_物理吸收 || player.storage.scqh_pcr_魔法无效 || player.storage.scqh_pcr_魔法吸收 || player.storage.scqh_pcr_双盾无效 || player.storage.scqh_pcr_双盾吸收 || player.storage.scqh_pcr_行动速度_加速 || player.storage.scqh_pcr_行动速度_减速 || player.storage.scqh_pcr_行动速度_超速) {
					} else player.unmarkSkill('scqh_pcr_mark');
					return false;
				},
			},
			_pcr_changeTp: {
				silent: true,
				forced: true,
				trigger: {
					source: 'dieEnd',
					player: ['phaseEnd', 'useCardBefore', 'respondBefore', 'changeHp'],
				},
				filter(event, player, name) {
					return player.storage.pcr_addTplist == true;
				},
				content() {
					'step 0';
					var num = 90;
					var name = event.triggername;
					if (name == 'dieEnd') num = 200;
					if (name == 'changeHp') {
						if (trigger.num < 0) {
							num = trigger.num * num;
						}
					}
					player.pcr_changeTp(Math.abs(num));
				},
			},
			_scqh_pcr_护盾: {
				silent: true,
				forced: true,
				trigger: {
					player: 'damageBegin4',
				},
				filter(event, player, name) {
					if (!event.num) return false;
					var dabao = event.parent && event.parent.name == 'pcr_攻击' && event.parent.属性;
					if (player.storage.scqh_pcr_双盾吸收 || player.storage.scqh_pcr_双盾无效) {
						return true;
					} else if (event.card || (dabao && event.parent.属性 == '物理')) {
						if (player.storage.scqh_pcr_物理无效 || player.storage.scqh_pcr_物理吸收) {
							return true;
						}
					} else if (!event.card || (dabao && event.parent.属性 == '魔法')) {
						if (player.storage.scqh_pcr_魔法无效 || player.storage.scqh_pcr_魔法吸收) {
							return true;
						}
					}
					return false;
				},
				content() {
					'step 0';
					var dabao = trigger.parent && trigger.parent.name == 'pcr_攻击' && trigger.parent.属性;
					var 属性;
					var 类型;
					if (player.storage.scqh_pcr_双盾吸收) {
						属性 = '双盾';
						类型 = '吸收';
					} else if (player.storage.scqh_pcr_双盾无效) {
						属性 = '双盾';
						类型 = '无效';
					} else if (trigger.card || (dabao && trigger.parent.属性 == '物理')) {
						if (player.storage.scqh_pcr_物理吸收) {
							属性 = '物理';
							类型 = '吸收';
						} else if (player.storage.scqh_pcr_物理无效) {
							属性 = '物理';
							类型 = '无效';
						}
					} else if (!trigger.card || (dabao && trigger.parent.属性 == '魔法')) {
						if (player.storage.scqh_pcr_魔法吸收) {
							属性 = '魔法';
							类型 = '吸收';
						} else if (player.storage.scqh_pcr_物理无效) {
							属性 = '魔法';
							类型 = '无效';
						}
					}
					var sto = 'scqh_pcr_' + 属性 + 类型;
					var num = Math.min(player.storage[sto], trigger.num);
					var nonum = -1 * num;
					player.pcr_hudun(nonum, 属性, 类型);
					trigger.num -= num;
					player.pcr_changeTp(num * 100);
					if (类型 == '吸收') player.recover(num);
				},
			},
			_scqh_pcr_续航: {
				silent: true,
				forced: true,
				trigger: {
					global: ['useCard1', 'respond', 'phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDrawBegin', 'phaseUseBegin', 'phaseDiscardBegin', 'phaseJieshuBegin'],
				},
				filter(event, player, name) {
					return true;
				},
				content() {
					var str1 = 'scqh_pcr_双盾无效';
					if (player.storage[str1 + '_续航']) {
						player.storage[str1 + '_续航']--;
					}
					if (!player.storage[str1 + '_续航']) {
						player.storage[str1 + '_续航'] = 0;
						player.storage[str1] = 0;
					}
					var str2 = 'scqh_pcr_双盾吸收';
					if (player.storage[str2 + '_续航']) {
						player.storage[str2 + '_续航']--;
					}
					if (!player.storage[str2 + '_续航']) {
						player.storage[str2 + '_续航'] = 0;
						player.storage[str2] = 0;
					}
					var str3 = 'scqh_pcr_物理无效';
					if (player.storage[str3 + '_续航']) {
						player.storage[str3 + '_续航']--;
					}
					if (!player.storage[str3 + '_续航']) {
						player.storage[str3 + '_续航'] = 0;
						player.storage[str3] = 0;
					}
					var str4 = 'scqh_pcr_物理吸收';
					if (player.storage[str4 + '_续航']) {
						player.storage[str4 + '_续航']--;
					}
					if (!player.storage[str4 + '_续航']) {
						player.storage[str4 + '_续航'] = 0;
						player.storage[str4] = 0;
					}
					var str5 = 'scqh_pcr_魔法无效';
					if (player.storage[str5 + '_续航']) {
						player.storage[str5 + '_续航']--;
					}
					if (!player.storage[str5 + '_续航']) {
						player.storage[str5 + '_续航'] = 0;
						player.storage[str5] = 0;
					}
					var str6 = 'scqh_pcr_魔法吸收';
					if (player.storage[str6 + '_续航']) {
						player.storage[str6 + '_续航']--;
					}
					if (!player.storage[str6 + '_续航']) {
						player.storage[str6 + '_续航'] = 0;
						player.storage[str6] = 0;
					}
					var speed1 = 'scqh_pcr_行动速度_加速';
					if (player.storage[speed1 + '_续航']) {
						player.storage[speed1 + '_续航']--;
					}
					if (!player.storage[speed1 + '_续航']) {
						player.storage[speed1 + '_续航'] = 0;
						player.storage[speed1] = 0;
					}
					var speed2 = 'scqh_pcr_行动速度_减速';
					if (player.storage[speed2 + '_续航']) {
						player.storage[speed2 + '_续航']--;
					}
					if (!player.storage[speed2 + '_续航']) {
						player.storage[speed2 + '_续航'] = 0;
						player.storage[speed2] = 0;
					}
				},
			},
			scqh_pcr_连段技: {
				silent: true,
				forced: true,
				trigger: {
				},
				filter(event, player, name) {
					var history = player.hasHistory('sourceDamage', function (evt) {
						return evt.card == event.card;
					});
					var storage = player.storage.scqh_pcr_连段技;
					if (!storage || storage <= 1) return false;
					if (!event.targets.length) return false;
					if (!player.countDiscardableCards(player, 'he')) return false;
					if (event.card.storage && (event.card.storage.skill == 'pcr_连段技' || event.card.storage.pcr_连段技 == true)) {
						if (history) player.storage.scqh_pcr_连段技 = 0;
						else return true;
					}
					return false;
				},
				content() {
					'step 0';
					var storage = player.storage.scqh_pcr_连段技 - 1;
					var str = '连段(剩余次数:' + storage + '):';
					str += '是否弃置一张牌,对 ' + get.translation(trigger.targets) + ' 再结算一次【' + get.translation(trigger.card) + '】？';
					var next = player.chooseToDiscard('he', 1, str);
					next.set('ai', function (card) {
						return 5 - get.value(card);
					});
					('step 1');
					if (result.bool) {
						player.useCard(
							{
								name: trigger.card.name,
								suit: trigger.card.suit,
								number: trigger.card.number,
								nature: trigger.card.nature,
							},
							trigger.targets
						)._triggered = null;
						player.actionHistory[player.actionHistory.length - 1].useCard.pop();
						player.storage.scqh_pcr_连段技--;
					} else {
						player.storage.scqh_pcr_连段技 = 0;
						event.finish();
					}
					('step 2');
					var history = player.hasHistory('sourceDamage', function (evt) {
						var card = evt.card;
						var evtx = evt.getParent('useCard');
						return evtx.card == card && evtx.parent == event;
					});
					var storage = player.storage.scqh_pcr_连段技 - 1;
					var count = player.countDiscardableCards(player, 'he');
					if (storage && count && !history) event.goto(0);
				},
			},
			scqh_pcr_乱数圣域: {
				audio: 'ext:萌将坛/audio/公主连结/克莉丝提娜:3',
				nobracket: true,
				UB: true,
				init(player, skill) {
					player.pcr_addTplist();
					player.storage.scqh_pcr_ub_乱数圣域 = 0;
				},
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(event, player, name) {
					return player.pcrTp >= 1000;
				},
				prompt(event, player) {
					var skn = _status.event.skill;
					return get.translation(skn + '_info');
				},
				targetprompt: ['攻击目标'],
				selectTarget: 1,
				filterTarget(card, player, target) {
					return lib.skill.scqh_pcr_ubfilter.filterTarget(card, player, target);
				},
				check(event, player) {
					return true;
				},
				precontent() { },
				content() {
					'step 0';
					player.pcr_changeTp('ub');
					event.getParent(2).goto(0);
					('step 1');
					if (target.countCards('he') && target.hp > 0) {
						var next = player.choosePlayerCard(target, 'he', [1, Math.min(target.hp, target.countCards('he'))], get.prompt('破军', target));
						next.set('ai', function (button) {
							if (!_status.event.goon) return 0;
							var val = get.value(button.link);
							if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
							return val;
						});
						next.set('goon', get.attitude(player, target) <= 0);
						next.set('forceAuto', true);
					}
					('step 2');
					if (result.bool) {
						target.addSkill('repojun2');
						target.addToExpansion('giveAuto', result.cards, target).gaintag.add('repojun2');
					}
					player.storage[event.name] = 3;
					('step 3');
					player.markSkill(event.name);
					var next = player.pcr_攻击(target);
					next.set('必中', true);
					next.set('必暴', true);
				},
				marktext: '隆',
				intro: {
					content: '',
				},
				hiddenCard(player, name) {
					return player.pcrTp >= 1000;
				},
				ai: {
					unequip: true,
					directHit_ai: true,
					result: {
						target: -1,
						player: 1,
					},
					basic: {
						order: 9,
						useful: 5,
						value: 5,
					},
				},
				group: ['scqh_pcr_乱数圣域_buff2', 'scqh_pcr_乱数圣域_buff3'],
				subSkill: {
					buff2: {
						trigger: {
							global: 'chooseTargetAfter',
						},
						usable: Infinity,
						filter(event, player, name) {
							return event.result.targets && event.result.targets.includes(player);
						},
						content() {
							game.log(trigger.result.targets);
							trigger.result.targets.remove(player);
						},
					},
					buff3: {
						enable: ['chooseToUse', 'chooseToRespond'],
						usable: Infinity,
						filter(event, player, name) {
							return true;
						},
						content() {
							'step 0';
							player.chooseTarget();
							('step 1');
							if (result.targets?.length) {
								result.targets[0].draw();
							}
						},
					},
					buff: {
						name: '阿瓦隆',
						forced: true,
						trigger: {
							player: ['chooseToUseBegin', 'chooseToRespondBegin'],
							target: ['shaHit'],
						},
						usable: Infinity,
						filter(event, player, name) {
							if (!player.storage.scqh_pcr_ub_乱数圣域) return false;
							if (name == 'shaHit') {
								if (!event.card && event.属性) return event.属性 == '物理';
								return event.target.isAlive();
							} else {
								if (event.responded) return false;
								if (event.respondTo) {
									if (event.respondTo[1].name == 'sha') return false;
									if (event.respondTo[1] == '普通攻击') return false;
								}
								return event.filterCard({ name: 'shan' }, player, event);
							}
							return false;
						},
						content() {
							game.log(player, '发动了', event.name);
							player.popup('Miss');
							var name = event.triggername;
							if (name == 'shaHit') {
								var usable = player.getStat('triggerSkill');
								if (usable && usable.scqh_pcr_绝对闪避 >= 5) {
									trigger.cancel();
								} else {
									trigger.untrigger();
									trigger.trigger('shaMiss');
									trigger.responded = trigger._result;
									trigger._result.bool = true;
									trigger._result.result = 'shaned';
								}
							} else {
								trigger.untrigger();
								trigger.responded = true;
								trigger.result = {
									bool: true,
									card: {
										name: 'shan',
									},
								};
							}
						},
						ai: {
							noShan: true,
							effect: {
								target(card, player, target, current) {
									if (target.storage.scqh_pcr_ub_乱数圣域) {
										if (get.tag(card, 'respondShan')) {
											return 0;
										}
									}
								},
							},
						},
					},
					绝对命中: {
						name: '绝对命中',
						silent: true,
						forced: true,
						charlotte: true,
						trigger: {
							player: 'shaMiss',
						},
						filter(event, player, name) {
							if (!player.storage.scqh_pcr_ub_乱数圣域) return false;
							if (event.target == player || event.target.hasSkill('scqh_pcr_绝对闪避')) return false;
							if (!event.card && event.属性) return event.属性 == '物理';
							return event.target.isAlive();
						},
						content() {
							game.log(player, '发动了', event.name);
							player.popup('Hit');
							trigger.untrigger();
							trigger.trigger('shaHit');
							trigger._result.bool = false;
							trigger._result.result = null;
						},
						ai: {
							directHit_ai: true,
						},
					},
				},
			},
			scqh_pcr_覆盖指令: {
				audio: 'ext:萌将坛/audio/公主连结/克莉丝提娜:1',
				nobracket: true,
				silent: true,
				forced: true,
				init(player) {
					var skn = 'scqh_pcr_覆盖指令';
					player.storage[skn + '_层数'] = 0;
					player.storage[skn + '_续航'] = 0;
				},
				onremove(player) {
					var skn = 'scqh_pcr_覆盖指令';
					player.storage[skn + '_层数'] = 0;
					player.storage[skn + '_续航'] = 0;
				},
				trigger: {
				},
				filter(event, player, name) {
					var skn = 'scqh_pcr_覆盖指令';
					return player.storage[skn + '_层数'];
				},
				content() {
					var skn = 'scqh_pcr_覆盖指令';
					player.storage[skn + '_续航']++;
					if (player.storage[skn + '_续航'] >= 15) {
						var num = -1 * 30 * player.storage[skn + '_层数'];
						if (num > 0) player.pcr_varyTp(num, 'TP上升');
						player.storage[skn + '_续航'] = 0;
						player.storage[skn + '_层数'] = 0;
					}
				},
				_priority: 1071,
				subSkill: {
					phaseUse: {
						charlotte: true,
						log: false,
						popup: false,
						frequent(event, player) {
							return event.name != 'phaseUse' || (event.name == 'phaseUse' && event._triggered && event._triggered == 4);
						},
						enable: 'phaseUse',
						trigger: {
							global: 'gameDrawAfter',
							player: ['useCard1', 'respond', 'phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
						},
						prompt(event, player) {
							var skn = '覆盖指令';
							var skn2 = get.translation('scqh_pcr_' + skn);
							var str = '' + get.prompt2('scqh_pcr_' + skn);
							str = str.replace('###是否发动【' + skn2 + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_覆盖指令')) return false;
							var num = Math.floor(player.storage.scqh_pcr_行动技_克莉丝提娜);
							if (name == 'gameDrawAfter') return num == 0;
							return num == 3 || num == 8;
							if (name == 'useCardAfter') {
								if (!event.cards.length) return false;
							}
						},
						content() {
							'step 0';
							event.skn = 'scqh_pcr_覆盖指令';
							if (event.triggername) {
								var str = '' + get.prompt2(event.skn);
								str = str.replace('###是否发动【' + get.translation(event.skn) + '】？###', '');
								var next = player.chooseBool();
								next.set('prompt', get.prompt(event.skn));
								next.set('prompt2', str);
								next.set('ai', function (player) {
									return 1;
								});
							}
							('step 1');
							if (event.triggername) {
								if (!result.bool) event.finish();
							}
							('step 2');
							player.useSkill('scqh_pcr_行动技_克莉丝提娜');
							player.storage[event.skn + '_层数']++;
							player.storage[event.skn + '_续航'] = 0;
							player.pcr_varyTp(30, 'TP上升');
							player.pcr_changeTp(150);
							player.draw();
						},
						ai: {
							threaten: 1.3,
						},
					},
				},
			},
			scqh_pcr_代码骇入: {
				audio: 'ext:萌将坛/audio/公主连结/克莉丝提娜:1',
				nobracket: true,
				subSkill: {
					phaseUse: {
						charlotte: true,
						log: false,
						popup: false,
						frequent(event, player) {
							return event.name != 'phaseUse' || (event.name == 'phaseUse' && event._triggered && event._triggered == 4);
						},
						enable: 'phaseUse',
						trigger: {
							global: 'gameDrawAfter',
							player: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
						},
						prompt(event, player) {
							var skn = '代码骇入';
							var skn2 = get.translation('scqh_pcr_' + skn);
							var str = '' + get.prompt2('scqh_pcr_' + skn);
							str = str.replace('###是否发动【' + skn2 + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_代码骇入')) return false;
							if (!player.countCards('hs', 'sha')) return false;
							var num = Math.floor(player.storage.scqh_pcr_行动技_克莉丝提娜);
							if (name == 'gameDrawAfter') return num == 0;
							return num == 1 || num == 4 || num == 7 || num == 10;
						},
						targetprompt: ['施法目标'],
						filterTarget(card, player, target) {
							return lib.skill.scqh_pcr_ubfilter.filterTarget(card, player, target);
						},
						position: 'hs',
						filterCard(card, player, target) {
							return card.name == 'sha';
						},
						content() {
							'step 0';
							event.skn = 'scqh_pcr_代码骇入';
							if (event.triggername) {
								var str = '' + get.prompt2(event.skn);
								str = str.replace('###是否发动【' + get.translation(event.skn) + '】？###', '');
								player.chooseCardTarget({
									prompt: get.prompt(event.skn),
									prompt2: str,
									position: 'hs',
									filterCard(card, player, target) {
										return lib.skill[event.name].filterCard(card, player, target);
									},
									filterTarget(card, player, target) {
										return lib.skill[event.name].filterTarget(card, player, target);
									},
									targetprompt: '施法目标',
									ai1(card) {
										if (player.storage.scqh_pcr_行动技_克莉丝提娜 == 7) return false;
										return 1;
									},
									ai2(target) {
										return get.effect(target, { name: 'sha' }, player, player);
									},
								});
							}
							('step 1');
							if (event.triggername) {
								if (result.targets?.length) {
									event.targed = result.targets[0];
									player.discard(result.cards);
								} else event.finish();
							} else event.targed = target;
							('step 2');
							player.useSkill('scqh_pcr_行动技_克莉丝提娜');
							player.pcr_攻击(event.targed);
							('step 3');
							var history = player.hasHistory('sourceDamage', function (evt) {
								var evtx = evt.parent;
								if (evtx.name != 'pcr_攻击') return false;
								return evtx.parent == event;
							});
							if (!history && event.targed.countDiscardableCards(player, 'he')) {
								var next = player.discardPlayerCard(event.targed, 'he', true);
								var str = '弃置' + get.translation(event.targed) + '的一张牌';
								next.set('prompt', str);
							}
						},
						check(event, player) {
							return get.attitude(player, event.target) <= 0;
						},
						ai: {
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_行动技_克莉丝提娜: {
				nobracket: true,
				silent: true,
				forced: true,
				init(player) {
					player.storage.scqh_pcr_行动技_克莉丝提娜 = 0;
				},
				trigger: {
					player: ['useCard1', 'respond', 'phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDrawBegin', 'phaseUseBegin', 'phaseDiscardBegin', 'phaseJieshuBegin'],
				},
				filter(event, player, name) {
					return true;
				},
				content() {
					var num = 10;
					if (!player.storage[event.name]) {
						player.storage[event.name] = 0;
					}
					if (player.storage[event.name] < num) {
						var speed = 'scqh_pcr_行动速度';
						var length = 1;
						if (player.storage[speed + '_加速']) {
							length += player.storage[speed + '_加速'];
						}
						if (player.storage[speed + '_减速']) {
							length -= player.storage[speed + '_减速'];
						}
						if (length <= 0) length = 0;
						if (length >= 1) length = 1;
						player.storage[event.name] += length;
						player.markSkill(event.name);
					} else {
						player.storage[event.name] -= num;
						player.unmarkSkill(event.name);
					}
				},
				_priority: 1071,
				marktext: '行动',
				intro: {
					name: '行动值(克莉丝提娜)',
					content(num) {
						return '' + Math.floor(num);
					},
					markcount(num) {
						return Math.floor(num);
					},
				},
			},
			scqh_pcr_克莉丝提娜03: {
				name: 'IGNITE EXE',
				nobracket: true,
				forced: true,
				init(player, skill) {
					player.storage.scqh_pcr_克莉丝提娜03 = 0;
				},
				trigger: {
					global: ['phaseUseBefore', 'phaseUseAfter'],
					player: ['useCardAfter', 'respondAfter', 'scqh_pcr_克莉丝提娜00_阴阳After'],
				},
				filter(event, player, name) {
					var num = player.storage.scqh_pcr_克莉丝提娜03;
					if ((name == 'phaseUseBefore' || name == 'phaseUseAfter') && num) return true;
					if (num >= 6) return false;
					var evt = event.getParent('phaseUse');
					if (evt && evt.name == 'phaseUse') {
						if (name == 'scqh_pcr_克莉丝提娜00_阴阳After') return true;
						if ((name == 'useCardAfter' || name == 'respondAfter') && event.skill == 'scqh_pcr_克莉丝提娜00_ub') return true;
					}
					return false;
				},
				content() {
					'step 0';
					var name = event.triggername;
					if (name == 'phaseUseBefore' || name == 'phaseUseAfter') {
						player.storage.scqh_pcr_克莉丝提娜03 = 0;
						event.finish();
					} else {
						player.storage.scqh_pcr_克莉丝提娜03++;
					}
					('step 1');
					var num = player.storage.scqh_pcr_克莉丝提娜03;
					game.log('〖<font color=#D3A4FF>IGNITE EXE</font>〗当前层数:', num);
					if (num > 5) {
						var evt = trigger.getParent('phaseUse');
						game.log(player, '令〖', evt.player, '〗结束出牌阶段');
						player.$fullscreenpop('IGNITE EXE', 'metal');
						if (evt && evt.name == 'phaseUse') {
							evt.skipped = true;
						}
					}
				},
				_priority: 1071,
				group: ['scqh_pcr_克莉丝提娜03_args'],
				subSkill: {
					args: {
						name: 'IGNITE EXE',
						mod: {
							cardEnabled: (..._args) => 'unchanged',
							cardSavable: (..._args) => 'unchanged',
							cardEnabled2: (..._args) => 'unchanged',
							cardDiscardable: (..._args) => 'unchanged',
							cardRespondable: (..._args) => 'unchanged',
						},
						forced: true,
						lastDo: true,
						trigger: {
							target: ['shaBegin', 'useCardToTarget', 'useCardToTargeted'],
						},
						filter(event, player) {
							return event.directHit == true || event.parent.directHit.includes(player) || event.parent.nowuxie;
						},
						content() {
							'step 0';
							var evt = trigger.parent;
							if (trigger.directHit == true) {
								trigger.directHit = false;
							} else if (evt.nowuxie) {
								delete evt.nowuxie;
								evt.directHit.addArray(game.filterPlayer((current) => current != player));
							} else {
								var directHit = [];
								for (let i = 0; i < evt.directHit.length; i++) {
									if (evt.directHit[i] != player) directHit[i] == evt.directHit[i];
								}
								evt.directHit = directHit;
								evt.directHit.addArray(game.filterPlayer((current) => current != player));
							}
							game.log(player, '解除了［不可响应］的负面状态');
						},
					},
				},
			},
			scqh_pcr_ub_一箭穿心: {
				audio: 'ext:萌将坛/audio/公主连结/铃奈:2',
				global: 'scqh_pcr_ub_一箭穿心_ub',
				nobracket: true,
				forced: true,
				silent: true,
				hiddenCard(player, name) {
					return lib.skill.scqh_pcr_ubfilter.hiddenCard(player, name);
				},
				_priority: 1016,
				subSkill: {
					ub: {
						name: 'UB·一箭穿心',
						charlotte: true,
						log: false,
						enable: ['chooseToUse', 'chooseToRespond'],
						prompt(event, player) {
							var skn = '一箭穿心';
							var str = '' + get.prompt2('scqh_pcr_ub_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_ub_一箭穿心')) return false;
							return lib.skill.scqh_pcr_ubfilter.filter(event, player, name);
						},
						targetprompt: ['施法目标'],
						selectTarget: 1,
						filterTarget(card, player, target) {
							return lib.skill.scqh_pcr_ubfilter.filterTarget(card, player, target);
						},
						precontent() {
							player.pcr_changeTp('ub');
							if (player.storage.scqh_pcr_ubfilter && player.storage.scqh_pcr_ubfilter == 'nowuxie') {
								if (event.getParent(2) && event.getParent(2).card) {
									event.getParent(2).cancel();
								}
							} else if (event.getParent(4) && event.getParent(4).card) {
								event.getParent(4).cancel();
							}
						},
						content() {
							'step 0';
							var next = player.pcr_攻击(target);
							next.set('必中', true);
							next.set('必暴', true);
						},
						check(event, player) {
							return get.attitude(player, event.target) <= 0;
						},
						ai: {
							respondShan: true,
							respondSha: true,
							directHit_ai: true,
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_愤怒之镖: {
				audio: 'ext:萌将坛/audio/公主连结/铃奈:1',
				global: 'scqh_pcr_愤怒之镖_phaseUse',
				group: 'scqh_pcr_行动技_铃奈',
				nobracket: true,
				subSkill: {
					phaseUse: {
						charlotte: true,
						log: false,
						popup: false,
						frequent(event, player) {
							return event.name != 'phaseUse' || (event.name == 'phaseUse' && event._triggered && event._triggered == 4);
						},
						enable: 'phaseUse',
						trigger: {
							global: 'gameDrawAfter',
							player: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
						},
						prompt(event, player) {
							var skn = '愤怒之镖';
							var str = '' + get.prompt2('scqh_pcr_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (player.storage.scqh_pcr_愤怒之镖_usable) {
								if (player.storage.scqh_pcr_愤怒之镖_usable >= 3) return false;
							}
							if (!player.hasSkill('scqh_pcr_愤怒之镖')) return false;
							if (!player.countCards('hs', 'sha')) return false;
							var num = Math.floor(player.storage.scqh_pcr_行动技_铃奈);
							if (name == 'gameDrawAfter') return num == 0;
							return num == 4;
						},
						targetprompt: ['施法目标'],
						filterTarget(card, player, target) {
							return lib.skill.scqh_pcr_ubfilter.filterTarget(card, player, target);
						},
						position: 'hs',
						filterCard(card, player, target) {
							return card.name == 'sha';
						},
						content() {
							'step 0';
							event.skn = 'scqh_pcr_愤怒之镖';
							if (event.triggername) {
								var str = '' + get.prompt2(event.skn);
								str = str.replace('###是否发动【' + get.translation(event.skn) + '】？###', '');
								player.chooseCardTarget({
									prompt: get.prompt(event.skn),
									prompt2: str,
									position: 'hs',
									filterCard(card, player, target) {
										return lib.skill[event.name].filterCard(card, player, target);
									},
									filterTarget(card, player, target) {
										return lib.skill[event.name].filterTarget(card, player, target);
									},
									targetprompt: '施法目标',
									ai1(card) {
										return 1;
									},
									ai2(target) {
										return get.effect(target, { name: 'sha' }, player, player);
									},
								});
							}
							('step 1');
							if (event.triggername) {
								if (result.targets?.length) {
									event.targed = result.targets[0];
									player.discard(result.cards);
								} else event.finish();
							} else event.targed = target;
							('step 2');
							player.addTempSkill(event.skn + '_usable');
							player.storage[event.skn + '_usable']++;
							player.useSkill('scqh_pcr_行动技_铃奈');
							var next = player.pcr_攻击(event.targed);
							next.set('必暴', true);
						},
						check(event, player) {
							return get.attitude(player, event.target) <= 0;
						},
						ai: {
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
					usable: {
						charlotte: true,
						silent: true,
						forced: true,
					},
				},
			},
			scqh_pcr_行动技_铃奈: {
				nobracket: true,
				silent: true,
				forced: true,
				init(player) {
					player.storage.scqh_pcr_行动技_铃奈 = 0;
				},
				trigger: {
					player: ['useCard1', 'respond', 'phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDrawBegin', 'phaseUseBegin', 'phaseDiscardBegin', 'phaseJieshuBegin'],
				},
				filter(event, player, name) {
					return true;
				},
				content() {
					var num = 4;
					if (!player.storage[event.name]) {
						player.storage[event.name] = 0;
					}
					if (player.storage[event.name] < num) {
						var speed = 'scqh_pcr_行动速度';
						var length = 1;
						if (player.storage[speed + '_加速']) {
							length += player.storage[speed + '_加速'];
						}
						if (player.storage[speed + '_减速']) {
							length -= player.storage[speed + '_减速'];
						}
						if (length <= 0) length = 0;
						if (length >= 1) length = 1;
						player.storage[event.name] += length;
						player.markSkill(event.name);
					} else {
						player.storage[event.name] -= num;
						player.unmarkSkill(event.name);
					}
				},
				_priority: 1016,
				marktext: '行动',
				intro: {
					name: '行动值(铃奈)',
					content(num) {
						return '' + Math.floor(num);
					},
					markcount(num) {
						return Math.floor(num);
					},
				},
			},
			scqh_pcr_魅力全开: {
				audio: 'ext:萌将坛/audio/公主连结/铃奈:1',
				nobracket: true,
				intro: {
					content: '已记录花色:$',
				},
				trigger: {
					player: 'phaseUseBegin',
				},
				check(event, player) {
					return 1;
				},
				filter(event, player, name) {
					return player.countCards('h');
				},
				content() {
					'step 0';
					var hs = player.getCards('h');
					player.showCards(hs, get.translation(player) + '发动了【魅力全开】');
					player.addGaintag(hs, event.name);
				},
				group: 'scqh_pcr_魅力全开_draw',
				subSkill: {
					draw: {
						forced: true,
						trigger: {
							global: 'phaseBefore',
							player: ['useCard', 'respond'],
						},
						filter(event, player, name) {
							var skn = 'scqh_pcr_魅力全开';
							if (name == 'phaseBefore') {
								player.storage[skn] = [];
								player.unmarkSkill(skn);
								return false;
							}
							if (player.storage[skn].includes(event.card.suit)) return false;
							return player.hasHistory('lose', function (evt) {
								if (evt.parent != event) return false;
								for (var i in evt.gaintag_map) {
									if (evt.hs && evt.hs.length && evt.gaintag_map[i].includes(skn)) return true;
								}
								return false;
							});
						},
						content() {
							'step 0';
							var skn = 'scqh_pcr_魅力全开';
							player.draw();
							var suit = trigger.card.suit;
							player.storage[skn].push(suit);
							player.markSkill(skn);
						},
					},
				},
			},
			scqh_pcr_可爱感觉: {
				audio: 'ext:萌将坛/audio/公主连结/铃奈:1',
				nobracket: true,
				forced: true,
				trigger: {
					global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter', 'phaseBegin', 'phaseUseBegin', 'phaseAfter'],
				},
				filter(event, player, name) {
					if (player == _status.currentPhase) return false;
					var hearts = player.countCards('h', { suit: 'heart' });
					var diamonds = player.countCards('h', { suit: 'diamond' });
					var clubs = player.countCards('h', { suit: 'club' });
					var spades = player.countCards('h', { suit: 'spade' });
					if (hearts == 1 && diamonds == 1 && clubs == 1 && spades == 1) return false;
					if (name == 'gainAfter') return event.parent.name != 'scqh_pcr_可爱感觉';
					return name != 'gainAfter';
				},
				content() {
					'step 0';
					var hearts = player.countCards('h', { suit: 'heart' });
					var diamonds = player.countCards('h', { suit: 'diamond' });
					var clubs = player.countCards('h', { suit: 'club' });
					var spades = player.countCards('h', { suit: 'spade' });
					if (hearts < 1) {
						var thata = get.cardPile2(function (card) {
							return card.suit == 'heart';
						});
						player.gain(thata, 'draw');
					}
					if (diamonds < 1) {
						var thatb = get.cardPile2(function (card) {
							return card.suit == 'diamond';
						});
						player.gain(thatb, 'draw');
					}
					if (clubs < 1) {
						var thatc = get.cardPile2(function (card) {
							return card.suit == 'club';
						});
						player.gain(thatc, 'draw');
					}
					if (spades < 1) {
						var thatd = get.cardPile2(function (card) {
							return card.suit == 'spade';
						});
						player.gain(thatd, 'draw');
					}
					('step 1');
					var cou = player.countCards('h');
					if (cou > 4 && cou < 8) {
						event.num = 1;
						var mum = cou - 4;
						player.chooseCard(true, 'h', mum, get.prompt('时尚穿搭'), '将每种花色的手牌弃置至一张.', function (card, player, target) {
							return (
								player.getCards('h', function (card2) {
									return card2.suit == card.suit && !ui.selected.cards.includes(card2);
								}).length > 1
							);
						});
					} else if (cou >= 8) {
						event.num = 2;
						player.chooseCard(true, 'h', 4, get.prompt('时尚穿搭'), '选择四张不同花色的手牌,弃置其他所有手牌.', function (card, player, target) {
							var suit = card.suit;
							if (Array.isArray(ui.selected.cards)) for (const i of ui.selected.cards) {
								if (i.suit == suit) return false;
							}
							return true;
						});
					}
					('step 2');
					if (result.bool) {
						if (event.num == 1) {
							var cards = result.cards;
						} else if (event.num == 2) {
							var cards = player.getCards('h', function (card) {
								return !result.cards.includes(card);
							});
						}
						player.discard(cards);
					}
				},
			},
			scqh_pcr_铃奈02: {
				audio: 'ext:萌将坛/audio/公主连结/铃奈:1',
				global: ['scqh_pcr_铃奈02_end'],
				nobracket: true,
				forced: true,
				trigger: {
					target: ['useCardToTargeted'],
				},
				filter(event, player) {
					if (!event.targets) return false;
					if (event.player == player) return false;
					if (player.countCards('h') == 0) return false;
					if (event.targets && event.targets.length > 1) return false;
					return !event.player.getExpansions('scqh_pcr_铃奈02_end').length;
				},
				content() {
					'step 0';
					player.chooseCard(get.prompt('夜魅口红', trigger.player), '当其他角色使用牌指定你为唯一目标后,若该角色的武将牌上没有<<font color=red>夜魅口红</font>>,则你可以将一张<font color=red>♥️️</font>手牌置于该角色的武将牌上,此回合结束时,该角色获得其武将牌上的所有<<font color=red>夜魅口红</font>>并<font color=cyan>翻面</font>.', function (card, player, target) {
						return card.suit == 'heart';
					});
					('step 1');
					if (result.bool) {
						var targed = trigger.player;
						targed.addToExpansion(result.cards, targed, 'giveAuto').gaintag.add('scqh_pcr_铃奈02_end');
					}
				},
				subSkill: {
					end: {
						name: '夜魅口红',
						charlotte: true,
						forced: true,
						trigger: {
							global: 'phaseEnd',
						},
						filter(event, player) {
							return player.getExpansions('scqh_pcr_铃奈02_end').length;
						},
						content() {
							var cards = player.getExpansions('scqh_pcr_铃奈02_end');
							if (cards.length) player.gain(cards, 'draw');
							player.turnOver();
						},
						marktext: '夜魅口红',
						intro: {
							content: 'expansion',
							markcount: 'expansion',
						},
					},
				},
			},
			scqh_pcr_ub_朱色之噬: {
				audio: 'ext:萌将坛/audio/公主连结/伊莉亚:3',
				global: 'scqh_pcr_ub_朱色之噬_ub',
				nobracket: true,
				forced: true,
				trigger: {
					player: ['damageBegin4', 'loseHpBegin'],
				},
				filter(event, player, name) {
					if (event.num <= 1) return false;
					return player.hasMark('scqh_pcr_ub_朱色之噬');
				},
				content() {
					trigger.num = 1;
					player.removeMark(event.name, 1, false);
				},
				marktext: '夜',
				intro: {
					name: '永夜之加护',
					content: '锁定技,当你受到大于１点的伤害,或当你失去大于１点的体力时,你消耗一层「永夜之加护」,将效果的数值削减至１点.',
				},
				hiddenCard(player, name) {
					return lib.skill.scqh_pcr_ubfilter.hiddenCard(player, name);
				},
				subSkill: {
					ub: {
						name: 'UB·朱色之噬',
						charlotte: true,
						log: false,
						enable: ['chooseToUse', 'chooseToRespond'],
						prompt(event, player) {
							var str = '' + get.prompt2('scqh_pcr_ub_朱色之噬');
							str = str.replace('###是否发动【朱色之噬】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_ub_朱色之噬')) return false;
							return lib.skill.scqh_pcr_ubfilter.filter(event, player, name);
						},
						targetprompt: ['施法目标'],
						selectTarget: 1,
						filterTarget(card, player, target) {
							return lib.skill.scqh_pcr_ubfilter.filterTarget(card, player, target);
						},
						precontent() {
							player.pcr_changeTp('ub');
							if (player.storage.scqh_pcr_ubfilter && player.storage.scqh_pcr_ubfilter == 'nowuxie') {
								if (event.getParent(2) && event.getParent(2).card) {
									event.getParent(2).cancel();
								}
							} else if (event.getParent(4) && event.getParent(4).card) {
								event.getParent(4).cancel();
							}
						},
						content() {
							'step 0';
							var targed = game.filterPlayer(function (current) {
								return current != player && get.distance(target, current) <= 2;
							});
							if (targed.length) player.recover(targed.length);
							if (player.countMark('scqh_pcr_ub_朱色之噬') < 4) {
								player.addMark('scqh_pcr_ub_朱色之噬', 1, false);
							}
							var next = player.pcr_攻击(targed);
							next.set('属性', '魔法');
						},
						check(event, player) {
							return get.attitude(player, target) <= 0;
						},
						ai: {
							respondShan: true,
							respondSha: true,
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_腥红之月: {
				audio: 'ext:萌将坛/audio/公主连结/伊莉亚:3',
				nobracket: true,
				mark: true,
				marktext: '☪',
				intro: {
					content(storage, player) {
						var str = '';
						var mark = player.countMark('scqh_pcr_腥红之月');
						if (mark == 1) str += '新月·血腥爆破';
						if (mark == 2) str += '上弦月·血腥之矛';
						if (mark == 3) str += '满月·血腥荆棘';
						if (mark == 4) str += '下弦月月·血腥侍从';
						return str;
					},
				},
				init(player) {
					player.storage.scqh_pcr_腥红之月 = 1;
				},
				_priority: 1117,
				group: ['scqh_pcr_腥红之月_新月', 'scqh_pcr_腥红之月_上弦月', 'scqh_pcr_腥红之月_满月', 'scqh_pcr_腥红之月_下弦月'],
				subSkill: {
					新月: {
						name: '新月',
						forced: true,
						trigger: {
							global: 'judgeAfter',
						},
						filter(event, player, name) {
							var mark = player.countMark('scqh_pcr_腥红之月');
							return mark == 1;
						},
						content() {
							'step 0';
							var str = '一名角色判定结束后,你可以视为对该角色距离最近的一名其他角色使用一张【决斗】,最后你流失１点体力.';
							var next = player.chooseTarget(1, get.prompt(event.name), str, function (card, player, target) {
								if (!player.canUse('juedou', target, false)) return false;
								if (target == player) return false;
								if (get.distance(trigger.player, target) <= 1) return true;
								var players = game.filterPlayer();
								for (const i of players) {
									if (i == trigger.player) continue;
									if (get.distance(trigger.player, i) < get.distance(trigger.player, target)) return false;
								}
								return true;
							});
							next.set('ai', function (target) {
								return get.attitude(player, target) <= 0;
							});
							('step 1');
							if (result.targets?.length) {
								var targed = result.targets;
								player.addMark('scqh_pcr_腥红之月', 1, false);
								player.useCard(
									{
										name: 'juedou',
									},
									targed,
									false
								);
							} else event.finish();
							('step 2');
							player.loseHp();
						},
					},
					上弦月: {
						name: '上弦月',
						forced: true,
						trigger: {
							global: 'drawAfter',
						},
						filter(event, player, name) {
							var mark = player.countMark('scqh_pcr_腥红之月');
							return mark == 2;
						},
						content() {
							'step 0';
							var num1 = 0;
							if (trigger.player == player) num1 = 1;
							var num2 = trigger.num;
							var str = '一名角色摸牌结束后,你可以选择该角色的上方或下方至多Ｘ名其他角色,视为对该角色(不能是你)以及你选择的角色使用一张【决斗】,最后你流失１点体力.(Ｘ为摸牌数)';
							var next = player.chooseTarget([num1, num2], get.prompt(event.name), str, function (card, player, target) {
								if (!player.canUse('juedou', target, false)) return false;
								if (target == player) return false;
								if (!player.storage.scqh_pcr_腥红之月_上弦月) player.storage.scqh_pcr_scqh_pcr_腥红之月_上弦月 = 0;
								if (ui.selected.targets.length < player.storage.scqh_pcr_腥红之月_上弦月) {
									while (ui.selected.targets.length) {
										var cur = ui.selected.targets.shift();
										if (cur.instance) cur.instance.classList.remove('selected');
										cur.classList.remove('selected');
										ui.selected.targets.remove(cur);
									}
								}
								player.storage.scqh_pcr_腥红之月_上弦月 = ui.selected.targets.length;
								if (ui.selected.targets.length == 0) {
									return target == trigger.player.next || target == trigger.player.previous;
								}
								if (ui.selected.targets.length == 1) {
									if (ui.selected.targets[0] == trigger.player.next) {
										return target == ui.selected.targets[0].next;
									}
									return target == ui.selected.targets[0].previous;
								}
								if (ui.selected.targets.length == ui.selected.targets.length) {
									var num1 = ui.selected.targets.length - 1;
									var num2 = ui.selected.targets.length - 2;
									if (ui.selected.targets[num1] == ui.selected.targets[num2].next) {
										return target == ui.selected.targets[num1].next;
									}
									return target == ui.selected.targets[num1].previous;
								}
								return false;
							});
							next.set('ai', function (target) {
								return get.attitude(player, target) <= 0;
							});
							('step 1');
							if (result.targets?.length) {
								var targed = result.targets;
								if (trigger.player != player && player.canUse('juedou', trigger.player, false)) {
									targed.push(trigger.player);
								}
								player.addMark('scqh_pcr_腥红之月', 1, false);
								player.useCard(
									{
										name: 'juedou',
									},
									targed,
									false
								);
							} else event.finish();
							('step 2');
							player.loseHp();
						},
					},
					满月: {
						name: '满月',
						forced: true,
						trigger: {
							global: 'phaseUseEnd',
						},
						filter(event, player, name) {
							var mark = player.countMark('scqh_pcr_腥红之月');
							return mark == 3;
						},
						content() {
							'step 0';
							var str = '一名角色的出牌阶段结束时,你可以视为对该角色距离１以内的一名其他角色使用一张【决斗】并摸Ｘ张牌,最后你流失１点体力.(X为你已损失的体力值)';
							var next = player.chooseTarget(1, get.prompt(event.name), str, function (card, player, target) {
								if (!player.canUse('juedou', target, false)) return false;
								if (target == player) return false;
								if (get.distance(trigger.player, target) <= 1) return true;
								return false;
							});
							next.set('ai', function (target) {
								return get.attitude(player, target) <= 0;
							});
							('step 1');
							if (result.targets?.length) {
								var targed = result.targets;
								player.addMark('scqh_pcr_腥红之月', 1, false);
								player.useCard(
									{
										name: 'juedou',
									},
									targed,
									false
								);
								var num = player.maxHp - player.hp;
								player.draw(num);
							} else event.finish();
							('step 2');
							player.loseHp();
						},
					},
					下弦月: {
						name: '下弦月',
						forced: true,
						trigger: {
							global: 'discardAfter',
						},
						filter(event, player, name) {
							var mark = player.countMark('scqh_pcr_腥红之月');
							return mark == 4;
						},
						content() {
							'step 0';
							var str = '一名角色弃牌结束后,你可以视为对其距离最近的一名其他角色使用一张【决斗】,并削减对方50点TP值,你回复１点体力,最后你流失１点体力.';
							var next = player.chooseTarget(1, get.prompt(event.name), str, function (card, player, target) {
								if (!player.canUse('juedou', target, false)) return false;
								if (target == player) return false;
								if (get.distance(trigger.player, target) <= 1) return true;
								var players = game.filterPlayer();
								for (const i of players) {
									if (i == trigger.player) continue;
									if (get.distance(trigger.player, i) < get.distance(trigger.player, target)) return false;
								}
								return true;
							});
							next.set('ai', function (target) {
								return get.attitude(player, target) <= 0;
							});
							('step 1');
							if (result.targets?.length) {
								var targed = result.targets;
								var num = player.countMark('scqh_pcr_腥红之月') - 1;
								player.removeMark('scqh_pcr_腥红之月', num, false);
								player.useCard(
									{
										name: 'juedou',
									},
									targed,
									false
								);
								targed[0].pcr_changeTp(-50);
								player.recover();
							} else event.finish();
							('step 2');
							player.loseHp();
						},
					},
				},
			},
			scqh_pcr_ub_高贵红炎: {
				audio: 'ext:萌将坛/audio/公主连结/秋乃:3',
				global: 'scqh_pcr_ub_高贵红炎_ub',
				nobracket: true,
				forced: true,
				silent: true,
				onremove(player) {
					var targed = game.filterPlayer(function (current) {
						return current.hasMark(mark);
					});
					var mark = 'scqh_pcr_ub_高贵红炎';
					for (var i = 0; i < targed.length; i++) {
						var num = targed[i].countMark(mark);
						targed[i].removeMark(mark, num, false);
					}
				},
				trigger: {
					global: 'phaseEnd',
				},
				filter(event, player, name) {
					var mark = 'scqh_pcr_ub_高贵红炎';
					var targed = game.filterPlayer(function (current) {
						return current.hasMark(mark);
					});
					return targed.length;
				},
				content() {
					'step 0';
					var mark = 'scqh_pcr_ub_高贵红炎';
					var targed = game.filterPlayer(function (current) {
						return current.hasMark(mark);
					});
					for (var i = 0; i < targed.length; i++) {
						var num = targed[i].countMark(mark);
						targed[i].damage(num, 'fire', 'nocard');
						targed[i].removeMark(mark, num, false);
					}
				},
				marktext: '贵',
				intro: {
					content(storage, player) {
						var targed = game.filterPlayer(function (current) {
							return get.distance(player, current) <= 1 && !current.hasSkill('scqh_pcr_ub_高贵红炎');
						});
						var str = '爆炸范围';
						return str;
					},
				},
				hiddenCard(player, name) {
					return lib.skill.scqh_pcr_ubfilter.hiddenCard(player, name);
				},
				subSkill: {
					ub: {
						name: 'UB·高贵红炎',
						charlotte: true,
						log: false,
						enable: ['chooseToUse', 'chooseToRespond'],
						prompt(event, player) {
							var skn = '高贵红炎';
							var str = '' + get.prompt2('scqh_pcr_ub_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_ub_高贵红炎')) return false;
							return lib.skill.scqh_pcr_ubfilter.filter(event, player, name);
						},
						targetprompt: ['施法目标'],
						selectTarget: 1,
						filterTarget(card, player, target) {
							return lib.skill.scqh_pcr_ubfilter.filterTarget(card, player, target);
						},
						precontent() {
							player.pcr_changeTp('ub');
							if (player.storage.scqh_pcr_ubfilter && player.storage.scqh_pcr_ubfilter == 'nowuxie') {
								if (event.getParent(2) && event.getParent(2).card) {
									event.getParent(2).cancel();
								}
							} else if (event.getParent(4) && event.getParent(4).card) {
								event.getParent(4).cancel();
							}
						},
						content() {
							'step 0';
							player.pcr_hudun(40, '双盾', '吸收', 18);
							('step 1');
							var next = player.pcr_攻击(target);
							next.set('无双', 4);
							('step 2');
							var targed = game.filterPlayer(function (current) {
								return current != player && get.distance(target, current) <= 1;
							});
							for (var i = 0; i < targed.length; i++) {
								targed[i].addMark('scqh_pcr_ub_高贵红炎', 1, false);
							}
						},
						check(event, player) {
							return get.attitude(player, event.target) <= 0;
						},
						ai: {
							respondShan: true,
							respondSha: true,
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_荣耀斩击: {
				audio: 'ext:萌将坛/audio/公主连结/秋乃:1',
				global: 'scqh_pcr_荣耀斩击_phaseUse',
				group: ['scqh_pcr_行动技_秋乃', 'scqh_pcr_荣耀斩击_层数'],
				nobracket: true,
				subSkill: {
					phaseUse: {
						charlotte: true,
						log: false,
						popup: false,
						frequent(event, player) {
							return event.name != 'phaseUse' || (event.name == 'phaseUse' && event._triggered && event._triggered == 4);
						},
						enable: 'phaseUse',
						trigger: {
							global: 'gameDrawAfter',
							player: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
						},
						prompt(event, player) {
							var skn = '荣耀斩击';
							var str = '' + get.prompt2('scqh_pcr_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_荣耀斩击')) return false;
							if (!player.countCards('hs', 'sha')) return false;
							var num = Math.floor(player.storage.scqh_pcr_行动技_秋乃);
							if (name == 'gameDrawAfter') return num == 0;
							return num == 2;
						},
						targetprompt: ['施法目标'],
						filterTarget(card, player, target) {
							return lib.skill.scqh_pcr_ubfilter.filterTarget(card, player, target);
						},
						position: 'hs',
						filterCard(card, player, target) {
							return card.name == 'sha';
						},
						content() {
							'step 0';
							event.skn = 'scqh_pcr_荣耀斩击';
							if (event.triggername) {
								var str = '' + get.prompt2(event.skn);
								str = str.replace('###是否发动【' + get.translation(event.skn) + '】？###', '');
								player.chooseCardTarget({
									prompt: get.prompt(event.skn),
									prompt2: str,
									position: 'hs',
									filterCard(card, player, target) {
										return lib.skill[event.name].filterCard(card, player, target);
									},
									filterTarget(card, player, target) {
										return lib.skill[event.name].filterTarget(card, player, target);
									},
									targetprompt: '施法目标',
									ai1(card) {
										return 1;
									},
									ai2(target) {
										return get.effect(target, { name: 'sha' }, player, player);
									},
								});
							}
							('step 1');
							if (event.triggername) {
								if (result.targets?.length) {
									event.targed = result.targets[0];
									player.discard(result.cards);
								} else event.finish();
							} else event.targed = target;
							('step 2');
							player.useSkill('scqh_pcr_行动技_秋乃');
							var next = player.pcr_攻击(event.targed);
							('step 3');
							player.draw();
							player.storage[event.skn + '_层数']++;
							player.storage[event.skn + '_续航'] = 0;
							player.pcr_varyTp(15, 'TP上升');
							player.addTempSkill('scqh_pcr_反击');
							player.storage.scqh_pcr_反击 = 2;
						},
						check(event, player) {
							return get.attitude(player, event.target) <= 0;
						},
						ai: {
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
					层数: {
						silent: true,
						forced: true,
						init(player) {
							var skn = 'scqh_pcr_荣耀斩击';
							player.storage[skn + '_层数'] = 0;
							player.storage[skn + '_续航'] = 0;
						},
						onremove(player) {
							var skn = 'scqh_pcr_荣耀斩击';
							player.storage[skn + '_层数'] = 0;
							player.storage[skn + '_续航'] = 0;
						},
						trigger: {
							global: ['useCard1', 'respond'],
						},
						filter(event, player, name) {
							var skn = 'scqh_pcr_荣耀斩击';
							return player.storage[skn + '_层数'];
						},
						content() {
							var skn = 'scqh_pcr_荣耀斩击';
							player.storage[skn + '_续航']++;
							if (player.storage[skn + '_续航'] >= 12) {
								var num = -1 * 30 * player.storage[skn + '_层数'];
								if (num > 0) player.pcr_varyTp(num, 'TP上升');
								player.storage[skn + '_续航'] = 0;
								player.storage[skn + '_层数'] = 0;
							}
						},
						_priority: 1032,
					},
				},
			},
			scqh_pcr_治愈宝石: {
				audio: 'ext:萌将坛/audio/公主连结/秋乃:1',
				global: 'scqh_pcr_治愈宝石_phaseUse',
				group: 'scqh_pcr_行动技_秋乃',
				nobracket: true,
				subSkill: {
					phaseUse: {
						charlotte: true,
						log: false,
						popup: false,
						multitarget: true,
						multiline: true,
						frequent(event, player) {
							return event.name != 'phaseUse' || (event.name == 'phaseUse' && event._triggered && event._triggered == 4);
						},
						enable: 'phaseUse',
						trigger: {
							global: 'gameDrawAfter',
							player: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
						},
						prompt(event, player) {
							var skn = '治愈宝石';
							var str = '' + get.prompt2('scqh_pcr_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_治愈宝石')) return false;
							var targed = game.filterPlayer(function (current) {
								return current.isDamaged() && get.distance(current, player) <= 1;
							});
							var num = Math.floor(player.storage.scqh_pcr_行动技_秋乃);
							if (name == 'gameDrawAfter') return num == 0;
							return num == 4 && targed.length;
						},
						targetprompt: ['施法目标'],
						filterTarget(card, player, target) {
							return target.isDamaged() && get.distance(target, player) <= 1;
						},
						selectTarget(card, player, target) {
							return -1;
						},
						content() {
							'step 0';
							event.skn = 'scqh_pcr_治愈宝石';
							if (event.triggername) {
								var str = '' + get.prompt2(event.skn);
								str = str.replace('###是否发动【' + get.translation(event.skn) + '】？###', '');
								var next = player.chooseBool();
								next.set('prompt', get.prompt(event.skn));
								next.set('prompt2', str);
								next.set('ai', function (player) {
									if (player.isDamaged()) return 1;
									return -1;
								});
							}
							('step 1');
							if (event.triggername) {
								if (!result.bool) event.finish();
							}
							('step 2');
							var targed = game.filterPlayer(function (current) {
								return current.isDamaged() && get.distance(current, player) <= 1;
							});
							player.useSkill('scqh_pcr_行动技_秋乃');
							for (var i = 0; i < targed.length; i++) {
								targed[i].recover();
							}
						},
						check(event, player) {
							return get.attitude(player, event.target) >= 0;
						},
						ai: {
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_行动技_秋乃: {
				nobracket: true,
				silent: true,
				forced: true,
				init(player) {
					player.storage.scqh_pcr_行动技_秋乃 = 0;
				},
				trigger: {
					player: ['useCard1', 'respond', 'phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDrawBegin', 'phaseUseBegin', 'phaseDiscardBegin', 'phaseJieshuBegin'],
				},
				filter(event, player, name) {
					return true;
				},
				content() {
					var num = 4;
					if (!player.storage[event.name]) {
						player.storage[event.name] = 0;
					}
					if (player.storage[event.name] < num) {
						var speed = 'scqh_pcr_行动速度';
						var length = 1;
						if (player.storage[speed + '_加速']) {
							length += player.storage[speed + '_加速'];
						}
						if (player.storage[speed + '_减速']) {
							length -= player.storage[speed + '_减速'];
						}
						if (length <= 0) length = 0;
						if (length >= 1) length = 1;
						player.storage[event.name] += length;
						player.markSkill(event.name);
					} else {
						player.storage[event.name] -= num;
						player.unmarkSkill(event.name);
					}
				},
				_priority: 1032,
				marktext: '行动',
				intro: {
					name: '行动值(秋乃)',
					content(num) {
						return '' + Math.floor(num);
					},
					markcount(num) {
						return Math.floor(num);
					},
				},
			},
			scqh_pcr_ub_七重纱护: {
				audio: 'ext:萌将坛/audio/公主连结/由加莉:2',
				global: 'scqh_pcr_ub_七重纱护_ub',
				nobracket: true,
				forced: true,
				silent: true,
				hiddenCard(player, name) {
					return lib.skill.scqh_pcr_ubfilter.hiddenCard(player, name);
				},
				_priority: 1034,
				subSkill: {
					ub: {
						name: 'UB·七重纱护',
						charlotte: true,
						log: false,
						multitarget: true,
						multiline: true,
						enable: ['chooseToUse', 'chooseToRespond'],
						prompt(event, player) {
							var skn = '七重纱护';
							var str = '' + get.prompt2('scqh_pcr_ub_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_ub_七重纱护')) return false;
							return lib.skill.scqh_pcr_ubfilter.filter(event, player, name);
						},
						targetprompt: ['施法目标'],
						selectTarget: -1,
						filterTarget(card, player, target) {
							return get.distance(target, player) <= 1;
						},
						precontent() {
							player.pcr_changeTp('ub');
							if (player.storage.scqh_pcr_ubfilter && player.storage.scqh_pcr_ubfilter == 'nowuxie') {
								if (event.getParent(2) && event.getParent(2).card) {
									event.getParent(2).cancel();
								}
							} else if (event.getParent(4) && event.getParent(4).card) {
								event.getParent(4).cancel();
							}
						},
						content() {
							'step 0';
							for (var i = 0; i < targets.length; i++) {
								targets[i].pcr_hudun(36, '魔法', '无效', 18);
								targets[i].draw(2);
								targets[i].recover();
							}
						},
						check(event, player) {
							return get.attitude(player, event.target) >= 0;
						},
						ai: {
							respondShan: true,
							respondSha: true,
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_生命之水: {
				audio: 'ext:萌将坛/audio/公主连结/由加莉:1',
				global: 'scqh_pcr_生命之水_phaseUse',
				group: 'scqh_pcr_行动技_由加莉',
				nobracket: true,
				subSkill: {
					phaseUse: {
						charlotte: true,
						log: false,
						popup: false,
						frequent(event, player) {
							return event.name != 'phaseUse' || (event.name == 'phaseUse' && event._triggered && event._triggered == 4);
						},
						enable: 'phaseUse',
						trigger: {
							global: ['gameDrawAfter', 'dying'],
							player: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
						},
						prompt(event, player) {
							var skn = '生命之水';
							var str = '' + get.prompt2('scqh_pcr_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_生命之水')) return false;
							var num = Math.floor(player.storage.scqh_pcr_行动技_由加莉);
							if (name == 'gameDrawAfter') return num == 0;
							return num == 2;
						},
						targetprompt: ['施法目标'],
						filterTarget(card, player, target) {
							return target.isMinHp();
						},
						content() {
							'step 0';
							event.skn = 'scqh_pcr_生命之水';
							if (event.triggername) {
								var str = '' + get.prompt2(event.skn);
								str = str.replace('###是否发动【' + get.translation(event.skn) + '】？###', '');
								player.chooseCardTarget({
									prompt: get.prompt(event.skn),
									prompt2: str,
									position: 'hes',
									selectCard: -1,
									filterCard: false,
									filterTarget(card, player, target) {
										return lib.skill[event.name].filterTarget(card, player, target);
									},
									targetprompt: '施法目标',
									ai1(card) {
										return 1;
									},
									ai2(target) {
										return get.attitude(player, target) >= 0;
									},
								});
							}
							('step 1');
							if (event.triggername) {
								if (result.bool) event.targed = result.targets[0];
								else event.finish();
							} else event.targed = target;
							('step 2');
							player.useSkill('scqh_pcr_行动技_由加莉');
							event.targed.recover(2);
							('step 3');
							player.useCard(
								{
									name: 'jiu',
								},
								event.targed
							);
						},
						check(event, player) {
							return get.attitude(player, event.target) >= 0;
						},
						ai: {
							result: {
								target: 1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_月下独酌: {
				audio: 'ext:萌将坛/audio/公主连结/由加莉:1',
				global: 'scqh_pcr_月下独酌_phaseUse',
				group: 'scqh_pcr_行动技_由加莉',
				nobracket: true,
				subSkill: {
					phaseUse: {
						charlotte: true,
						log: false,
						popup: false,
						frequent(event, player) {
							return event.name != 'phaseUse' || (event.name == 'phaseUse' && event._triggered && event._triggered == 4);
						},
						enable: 'phaseUse',
						trigger: {
							global: 'gameDrawAfter',
							player: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
						},
						prompt(event, player) {
							var skn = '月下独酌';
							var str = '' + get.prompt2('scqh_pcr_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_月下独酌')) return false;
							var num = Math.floor(player.storage.scqh_pcr_行动技_由加莉);
							if (name == 'gameDrawAfter') return num == 0;
							return num == 4;
						},
						targetprompt: ['施法目标'],
						filterTarget(card, player, target) {
							return target.isMinHandcard();
						},
						content() {
							'step 0';
							event.skn = 'scqh_pcr_月下独酌';
							if (event.triggername) {
								var str = '' + get.prompt2(event.skn);
								str = str.replace('###是否发动【' + get.translation(event.skn) + '】？###', '');
								player.chooseCardTarget({
									prompt: get.prompt(event.skn),
									prompt2: str,
									position: 'hes',
									selectCard: -1,
									filterCard: false,
									filterTarget(card, player, target) {
										return lib.skill[event.name].filterTarget(card, player, target);
									},
									targetprompt: '施法目标',
									ai1(card) {
										return 1;
									},
									ai2(target) {
										return get.attitude(player, target) >= 0;
									},
								});
							}
							('step 1');
							if (event.triggername) {
								if (result.bool) event.targed = result.targets[0];
								else event.finish();
							} else event.targed = target;
							('step 2');
							player.useSkill('scqh_pcr_行动技_由加莉');
							event.targed.pcr_changeTp(75);
							event.targed.draw();
						},
						check(event, player) {
							return get.attitude(player, event.target) >= 0;
						},
						ai: {
							result: {
								target: 1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_行动技_由加莉: {
				nobracket: true,
				silent: true,
				forced: true,
				init(player) {
					player.storage.scqh_pcr_行动技_由加莉 = 0;
				},
				trigger: {
					player: ['useCard1', 'respond', 'phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDrawBegin', 'phaseUseBegin', 'phaseDiscardBegin', 'phaseJieshuBegin'],
				},
				filter(event, player, name) {
					return true;
				},
				content() {
					var num = 4;
					if (!player.storage[event.name]) {
						player.storage[event.name] = 0;
					}
					if (player.storage[event.name] < num) {
						var speed = 'scqh_pcr_行动速度';
						var length = 1;
						if (player.storage[speed + '_加速']) {
							length += player.storage[speed + '_加速'];
						}
						if (player.storage[speed + '_减速']) {
							length -= player.storage[speed + '_减速'];
						}
						if (length <= 0) length = 0;
						if (length >= 1) length = 1;
						player.storage[event.name] += length;
						player.markSkill(event.name);
					} else {
						player.storage[event.name] -= num;
						player.unmarkSkill(event.name);
					}
				},
				_priority: 1034,
				marktext: '行动',
				intro: {
					name: '行动值(由加莉)',
					content(num) {
						return '' + Math.floor(num);
					},
					markcount(num) {
						return Math.floor(num);
					},
				},
			},
			scqh_pcr_ub_炼狱火海壁垒: {
				audio: 'ext:萌将坛/audio/公主连结/纯:2',
				global: 'scqh_pcr_ub_炼狱火海壁垒_ub',
				nobracket: true,
				forced: true,
				silent: true,
				hiddenCard(player, name) {
					return lib.skill.scqh_pcr_ubfilter.hiddenCard(player, name);
				},
				subSkill: {
					ub: {
						name: 'UB·炼狱火海壁垒',
						charlotte: true,
						log: false,
						enable: ['chooseToUse', 'chooseToRespond'],
						prompt(event, player) {
							var skn = '炼狱火海壁垒';
							var str = '' + get.prompt2('scqh_pcr_ub_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_ub_炼狱火海壁垒')) return false;
							return lib.skill.scqh_pcr_ubfilter.filter(event, player, name);
						},
						precontent() {
							player.pcr_changeTp('ub');
							if (player.storage.scqh_pcr_ubfilter && player.storage.scqh_pcr_ubfilter == 'nowuxie') {
								if (event.getParent(2) && event.getParent(2).card) {
									event.getParent(2).cancel();
								}
							} else if (event.getParent(4) && event.getParent(4).card) {
								event.getParent(4).cancel();
							}
						},
						content() {
							'step 0';
							player.pcr_hudun(72, '双盾', '吸收', 18);
							var players = game.filterPlayer(function (current) {
								return get.distance(player, current) <= 1;
							});
							for (const i of players) {
								i.pcr_speed(0.55, '加速', 18);
							}
						},
						check(event, player) {
							return 1;
						},
						ai: {
							respondShan: true,
							respondSha: true,
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_勇气治愈: {
				audio: 'ext:萌将坛/audio/公主连结/纯:1',
				global: 'scqh_pcr_勇气治愈_phaseUse',
				group: 'scqh_pcr_行动技_纯',
				nobracket: true,
				subSkill: {
					phaseUse: {
						charlotte: true,
						log: false,
						popup: false,
						frequent(event, player) {
							return event.name != 'phaseUse' || (event.name == 'phaseUse' && event._triggered && event._triggered == 4);
						},
						enable: 'phaseUse',
						trigger: {
							global: 'gameDrawAfter',
							player: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
						},
						prompt(event, player) {
							var skn = '勇气治愈';
							var str = '' + get.prompt2('scqh_pcr_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_勇气治愈')) return false;
							var num = Math.floor(player.storage.scqh_pcr_行动技_纯);
							if (name == 'gameDrawAfter') return num == 0;
							return num == 4;
						},
						targetprompt: ['施法目标'],
						filterTarget(card, player, target) {
							if (get.distance(player, target) > 1) return false;
							var players = game.filterPlayer(function (current) {
								return get.distance(player, current) <= 1;
							});
							for (const i of players) {
								if (target.hp > i.hp) return false;
							}
							return true;
						},
						content() {
							'step 0';
							event.skn = 'scqh_pcr_勇气治愈';
							if (event.triggername) {
								var str = '' + get.prompt2(event.skn);
								str = str.replace('###是否发动【' + get.translation(event.skn) + '】？###', '');
								player.chooseCardTarget({
									prompt: get.prompt(event.skn),
									prompt2: str,
									position: 'hs',
									selectCard: -1,
									filterCard: false,
									filterTarget(card, player, target) {
										return lib.skill[event.name].filterTarget(card, player, target);
									},
									targetprompt: '施法目标',
									ai1(card) {
										return 1;
									},
									ai2(target) {
										return get.attitude(player, target) >= 0;
									},
								});
							}
							('step 1');
							if (event.triggername) {
								if (result.bool) event.targed = result.targets[0];
								else event.finish();
							} else event.targed = target;
							('step 2');
							player.useSkill('scqh_pcr_行动技_纯');
							event.targed.recover();
							event.targed.draw();
							('step 3');
							event.targed.pcr_speed(0.2, '加速', 18);
						},
						check(event, player) {
							return get.attitude(player, event.target) >= 0;
						},
						ai: {
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_护甲破坏: {
				audio: 'ext:萌将坛/audio/公主连结/纯:1',
				global: 'scqh_pcr_护甲破坏_phaseUse',
				group: 'scqh_pcr_行动技_纯',
				nobracket: true,
				subSkill: {
					phaseUse: {
						charlotte: true,
						log: false,
						popup: false,
						frequent(event, player) {
							return event.name != 'phaseUse' || (event.name == 'phaseUse' && event._triggered && event._triggered == 4);
						},
						enable: 'phaseUse',
						trigger: {
							global: 'gameDrawAfter',
							player: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
						},
						prompt(event, player) {
							var skn = '护甲破坏';
							var str = '' + get.prompt2('scqh_pcr_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_护甲破坏')) return false;
							if (!player.countCards('hs', 'sha')) return false;
							var num = Math.floor(player.storage.scqh_pcr_行动技_纯);
							if (name == 'gameDrawAfter') return num == 0;
							return num == 2;
						},
						targetprompt: ['施法目标'],
						filterTarget(card, player, target) {
							return lib.skill.scqh_pcr_ubfilter.filterTarget(card, player, target);
						},
						position: 'hs',
						filterCard(card, player, target) {
							return card.name == 'sha';
						},
						content() {
							'step 0';
							event.skn = 'scqh_pcr_护甲破坏';
							if (event.triggername) {
								var str = '' + get.prompt2(event.skn);
								str = str.replace('###是否发动【' + get.translation(event.skn) + '】？###', '');
								player.chooseCardTarget({
									prompt: get.prompt(event.skn),
									prompt2: str,
									position: 'hs',
									filterCard(card, player, target) {
										return lib.skill[event.name].filterCard(card, player, target);
									},
									filterTarget(card, player, target) {
										return lib.skill[event.name].filterTarget(card, player, target);
									},
									targetprompt: '施法目标',
									ai1(card) {
										return 1;
									},
									ai2(target) {
										return get.effect(target, { name: 'sha' }, player, player);
									},
								});
							}
							('step 1');
							if (event.triggername) {
								if (result.targets?.length) {
									event.targed = result.targets[0];
									player.discard(result.cards);
								} else event.finish();
							} else event.targed = target;
							('step 2');
							player.useSkill('scqh_pcr_行动技_纯');
							player.pcr_攻击(event.targed);
							('step 3');
							var history = player.hasHistory('sourceDamage', function (evt) {
								var evtx = evt.parent;
								if (evtx.name != 'pcr_攻击') return false;
								return evtx.parent == event;
							});
							if (!history && event.targed.countDiscardableCards(player, 'he')) {
								var next = player.discardPlayerCard(event.targed, 'he', true);
								var str = '弃置' + get.translation(event.targed) + '的一张牌';
								next.set('prompt', str);
							}
						},
						check(event, player) {
							return get.attitude(player, event.target) <= 0;
						},
						ai: {
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_行动技_纯: {
				nobracket: true,
				silent: true,
				forced: true,
				init(player) {
					player.storage.scqh_pcr_行动技_纯 = 0;
				},
				trigger: {
					player: ['useCard1', 'respond', 'phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDrawBegin', 'phaseUseBegin', 'phaseDiscardBegin', 'phaseJieshuBegin'],
				},
				filter(event, player, name) {
					return true;
				},
				content() {
					var num = 4;
					if (!player.storage[event.name]) {
						player.storage[event.name] = 0;
					}
					if (player.storage[event.name] < num) {
						var speed = 'scqh_pcr_行动速度';
						var length = 1;
						if (player.storage[speed + '_加速']) {
							length += player.storage[speed + '_加速'];
						}
						if (player.storage[speed + '_减速']) {
							length -= player.storage[speed + '_减速'];
						}
						if (length <= 0) length = 0;
						if (length >= 1) length = 1;
						player.storage[event.name] += length;
						player.markSkill(event.name);
					} else {
						player.storage[event.name] -= num;
						player.unmarkSkill(event.name);
					}
				},
				_priority: 1047,
				marktext: '行动',
				intro: {
					name: '行动值(纯)',
					content(num) {
						return '' + Math.floor(num);
					},
					markcount(num) {
						return Math.floor(num);
					},
				},
			},
			scqh_pcr_ub_凤凰终焉: {
				audio: 'ext:萌将坛/audio/公主连结/咲恋:3',
				global: 'scqh_pcr_ub_凤凰终焉_ub',
				nobracket: true,
				forced: true,
				silent: true,
				hiddenCard(player, name) {
					return lib.skill.scqh_pcr_ubfilter.hiddenCard(player, name);
				},
				_priority: 1028,
				subSkill: {
					ub: {
						name: 'UB·凤凰终焉',
						charlotte: true,
						log: false,
						multitarget: true,
						multiline: true,
						enable: ['chooseToUse', 'chooseToRespond'],
						prompt(event, player) {
							var skn = '凤凰终焉';
							var str = '' + get.prompt2('scqh_pcr_ub_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_ub_凤凰终焉')) return false;
							return lib.skill.scqh_pcr_ubfilter.filter(event, player, name);
						},
						selectTarget: [1, 2],
						filterTarget(card, player, target) {
							return lib.skill.scqh_pcr_ubfilter.filterTarget2(card, player, target);
						},
						precontent() {
							player.pcr_changeTp('ub');
							if (player.storage.scqh_pcr_ubfilter && player.storage.scqh_pcr_ubfilter == 'nowuxie') {
								if (event.getParent(2) && event.getParent(2).card) {
									event.getParent(2).cancel();
								}
							} else if (event.getParent(4) && event.getParent(4).card) {
								event.getParent(4).cancel();
							}
						},
						content() {
							'step 0';
							var next = player.pcr_攻击(targets);
							var num = Math.floor((player.maxHp - player.hp) / 2);
							next.set('额外伤害', num);
							player.draw(1 + num);
						},
						check(event, player) {
							return get.attitude(player, event.target) <= 0;
						},
						ai: {
							respondShan: true,
							respondSha: true,
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_烈焰斩击: {
				audio: 'ext:萌将坛/audio/公主连结/咲恋:1',
				global: 'scqh_pcr_烈焰斩击_phaseUse',
				group: 'scqh_pcr_行动技_咲恋',
				nobracket: true,
				subSkill: {
					phaseUse: {
						charlotte: true,
						log: false,
						popup: false,
						multitarget: true,
						multiline: true,
						frequent(event, player) {
							return event.name != 'phaseUse' || (event.name == 'phaseUse' && event._triggered && event._triggered == 4);
						},
						enable: 'phaseUse',
						trigger: {
							global: 'gameDrawAfter',
							player: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
						},
						prompt(event, player) {
							var skn = '烈焰斩击';
							var str = '' + get.prompt2('scqh_pcr_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_烈焰斩击')) return false;
							if (!player.countCards('hs', 'sha')) return false;
							var num = Math.floor(player.storage.scqh_pcr_行动技_咲恋);
							if (name == 'gameDrawAfter') return num == 0;
							return num == 2;
						},
						position: 'hs',
						filterCard(card, player, target) {
							return card.name == 'sha';
						},
						selectTarget(card, player, target) {
							return [1, 2];
						},
						filterTarget(card, player, target) {
							return lib.skill.scqh_pcr_ubfilter.filterTarget2(card, player, target);
						},
						content() {
							'step 0';
							event.skn = 'scqh_pcr_烈焰斩击';
							if (event.triggername) {
								var str = '' + get.prompt2(event.skn);
								str = str.replace('###是否发动【' + get.translation(event.skn) + '】？###', '');
								player.chooseCardTarget({
									prompt: get.prompt(event.skn),
									prompt2: str,
									position: 'hs',
									filterCard(card, player, target) {
										return lib.skill[event.name].filterCard(card, player, target);
									},
									filterTarget(card, player, target) {
										return lib.skill[event.name].filterTarget(card, player, target);
									},
									selectTarget(card, player, target) {
										return lib.skill[event.name].selectTarget(card, player, target);
									},
									targetprompt: '施法目标',
									ai1(card) {
										return 1;
									},
									ai2(target) {
										return get.effect(target, { name: 'sha' }, player, player);
									},
								});
							}
							('step 1');
							if (event.triggername) {
								if (result.targets?.length) {
									event.targed = result.targets;
									player.discard(result.cards);
								} else event.finish();
							} else event.targed = targets;
							('step 2');
							player.useSkill('scqh_pcr_行动技_咲恋');
							var next = player.pcr_攻击(event.targed);
							var num = Math.floor((player.maxHp - player.hp) / 2);
							next.set('额外伤害', num);
						},
						check(event, player) {
							return get.attitude(player, event.target) <= 0;
						},
						ai: {
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_优雅声援: {
				audio: 'ext:萌将坛/audio/公主连结/咲恋:1',
				global: 'scqh_pcr_优雅声援_phaseUse',
				group: 'scqh_pcr_行动技_咲恋',
				nobracket: true,
				subSkill: {
					phaseUse: {
						charlotte: true,
						log: false,
						popup: false,
						frequent(event, player) {
							return event.name != 'phaseUse' || (event.name == 'phaseUse' && event._triggered && event._triggered == 4);
						},
						enable: 'phaseUse',
						trigger: {
							global: 'gameDrawAfter',
							player: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
						},
						prompt(event, player) {
							var skn = '优雅声援';
							var str = '' + get.prompt2('scqh_pcr_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_优雅声援')) return false;
							var num = Math.floor(player.storage.scqh_pcr_行动技_咲恋);
							if (name == 'gameDrawAfter') return num == 0;
							return num == 4;
						},
						targetprompt: ['施法目标'],
						filterTarget(card, player, target) {
							return lib.skill.scqh_pcr_ubfilter.filterTarget1(card, player, target);
						},
						content() {
							'step 0';
							event.skn = 'scqh_pcr_优雅声援';
							if (event.triggername) {
								var str = '' + get.prompt2(event.skn);
								str = str.replace('###是否发动【' + get.translation(event.skn) + '】？###', '');
								player.chooseCardTarget({
									prompt: get.prompt(event.skn),
									prompt2: str,
									position: 'hs',
									selectCard: -1,
									filterCard: false,
									filterTarget(card, player, target) {
										return lib.skill[event.name].filterTarget(card, player, target);
									},
									targetprompt: '施法目标',
									ai1(card) {
										return 1;
									},
									ai2(target) {
										return get.attitude(player, target) >= 0;
									},
								});
							}
							('step 1');
							if (event.triggername) {
								if (result.bool) event.targed = result.targets[0];
								else event.finish();
							} else event.targed = target;
							('step 2');
							player.useSkill('scqh_pcr_行动技_咲恋');
							event.targed.pcr_changeTp(75);
							event.targed.draw();
						},
						check(event, player) {
							return get.attitude(player, event.target) >= 0;
						},
						ai: {
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_行动技_咲恋: {
				nobracket: true,
				silent: true,
				forced: true,
				init(player) {
					player.storage.scqh_pcr_行动技_咲恋 = 0;
				},
				trigger: {
					player: ['useCard1', 'respond', 'phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDrawBegin', 'phaseUseBegin', 'phaseDiscardBegin', 'phaseJieshuBegin'],
				},
				filter(event, player, name) {
					return true;
				},
				content() {
					var num = 4;
					if (!player.storage[event.name]) {
						player.storage[event.name] = 0;
					}
					if (player.storage[event.name] < num) {
						var speed = 'scqh_pcr_行动速度';
						var length = 1;
						if (player.storage[speed + '_加速']) {
							length += player.storage[speed + '_加速'];
						}
						if (player.storage[speed + '_减速']) {
							length -= player.storage[speed + '_减速'];
						}
						if (length <= 0) length = 0;
						if (length >= 1) length = 1;
						player.storage[event.name] += length;
						player.markSkill(event.name);
					} else {
						player.storage[event.name] -= num;
						player.unmarkSkill(event.name);
					}
				},
				_priority: 1028,
				marktext: '行动',
				intro: {
					name: '行动值(咲恋)',
					content(num) {
						return '' + Math.floor(num);
					},
					markcount(num) {
						return Math.floor(num);
					},
				},
			},
			scqh_pcr_ub_疾风剑雨: {
				audio: 'ext:萌将坛/audio/公主连结/姬塔:3',
				global: 'scqh_pcr_ub_疾风剑雨_ub',
				nobracket: true,
				forced: true,
				silent: true,
				hiddenCard(player, name) {
					return lib.skill.scqh_pcr_ubfilter.hiddenCard(player, name);
				},
				subSkill: {
					ub: {
						name: 'UB·疾风剑雨',
						charlotte: true,
						log: false,
						enable: ['chooseToUse', 'chooseToRespond'],
						prompt(event, player) {
							var skn = '疾风剑雨';
							var str = '' + get.prompt2('scqh_pcr_ub_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_ub_疾风剑雨')) return false;
							return lib.skill.scqh_pcr_ubfilter.filter(event, player, name);
						},
						targetprompt: ['施法目标'],
						selectTarget: 1,
						filterTarget(card, player, target) {
							return lib.skill.scqh_pcr_ubfilter.filterTarget(card, player, target);
						},
						precontent() {
							player.pcr_changeTp('ub');
							if (player.storage.scqh_pcr_ubfilter && player.storage.scqh_pcr_ubfilter == 'nowuxie') {
								if (event.getParent(2) && event.getParent(2).card) {
									event.getParent(2).cancel();
								}
							} else if (event.getParent(4) && event.getParent(4).card) {
								event.getParent(4).cancel();
							}
						},
						content() {
							'step 0';
							var next = player.pcr_攻击(target);
							next.set('无双', 4);
						},
						check(event, player) {
							return get.attitude(player, event.target) <= 0;
						},
						ai: {
							respondShan: true,
							respondSha: true,
							unequip: true,
							directHit_ai: true,
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_行动技_姬塔: {
				nobracket: true,
				silent: true,
				forced: true,
				init(player) {
					player.storage.scqh_pcr_行动技_姬塔 = 0;
				},
				trigger: {
					player: ['useCard1', 'respond', 'phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDrawBegin', 'phaseUseBegin', 'phaseDiscardBegin', 'phaseJieshuBegin'],
				},
				filter(event, player, name) {
					return true;
				},
				content() {
					var num = 4;
					if (!player.storage[event.name]) {
						player.storage[event.name] = 0;
					}
					if (player.storage[event.name] < num) {
						var speed = 'scqh_pcr_行动速度';
						var length = 1;
						if (player.storage[speed + '_加速']) {
							length += player.storage[speed + '_加速'];
						}
						if (player.storage[speed + '_减速']) {
							length -= player.storage[speed + '_减速'];
						}
						if (length <= 0) length = 0;
						if (length >= 1) length = 1;
						player.storage[event.name] += length;
						player.markSkill(event.name);
					} else {
						player.storage[event.name] -= num;
						player.unmarkSkill(event.name);
					}
				},
				_priority: 1028,
				marktext: '行动',
				intro: {
					name: '行动值(姬塔)',
					content(num) {
						return '' + Math.floor(num);
					},
					markcount(num) {
						return Math.floor(num);
					},
				},
			},
			scqh_pcr_广域斩击: {
				audio: 'ext:萌将坛/audio/公主连结/姬塔:1',
				global: 'scqh_pcr_广域斩击_phaseUse',
				group: 'scqh_pcr_行动技_姬塔',
				nobracket: true,
				subSkill: {
					phaseUse: {
						charlotte: true,
						log: false,
						popup: false,
						multitarget: true,
						multiline: true,
						frequent(event, player) {
							return event.name != 'phaseUse' || (event.name == 'phaseUse' && event._triggered && event._triggered == 4);
						},
						enable: 'phaseUse',
						trigger: {
							global: 'gameDrawAfter',
							player: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
						},
						prompt(event, player) {
							var skn = '广域斩击';
							var str = '' + get.prompt2('scqh_pcr_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_广域斩击')) return false;
							if (!player.countCards('hs', 'sha')) return false;
							var num = Math.floor(player.storage.scqh_pcr_行动技_姬塔);
							if (name == 'gameDrawAfter') return num == 0;
							return num == 2;
						},
						position: 'hs',
						filterCard(card, player, target) {
							return card.name == 'sha';
						},
						selectTarget(card, player, target) {
							return 1;
						},
						filterTarget(card, player, target) {
							return lib.skill.scqh_pcr_ubfilter.filterTarget2(card, player, target);
						},
						content() {
							'step 0';
							event.skn = 'scqh_pcr_广域斩击';
							if (event.triggername) {
								var str = '' + get.prompt2(event.skn);
								str = str.replace('###是否发动【' + get.translation(event.skn) + '】？###', '');
								player.chooseCardTarget({
									prompt: get.prompt(event.skn),
									prompt2: str,
									position: 'hs',
									filterCard(card, player, target) {
										return lib.skill[event.name].filterCard(card, player, target);
									},
									filterTarget(card, player, target) {
										return lib.skill[event.name].filterTarget(card, player, target);
									},
									selectTarget(card, player, target) {
										return lib.skill[event.name].selectTarget(card, player, target);
									},
									targetprompt: '施法目标',
									ai1(card) {
										return 1;
									},
									ai2(target) {
										return get.effect(target, { name: 'sha' }, player, player);
									},
								});
							}
							('step 1');
							if (event.triggername) {
								if (result.bool) {
									event.targed = result.target;
									player.discard(result.cards);
								} else event.finish();
							} else event.targed = target;
							('step 2');
							player.useSkill('scqh_pcr_行动技_姬塔');
							player.pcr_攻击(event.targed);
						},
						check(event, player) {
							return get.attitude(player, event.target) <= 0;
						},
						ai: {
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_剑意迸发: {
				audio: 'ext:萌将坛/audio/公主连结/姬塔:1',
				global: 'scqh_pcr_覆盖指令_phaseUse',
				group: 'scqh_pcr_行动技_姬塔',
				nobracket: true,
				subSkill: {
					phaseUse: {
						charlotte: true,
						log: false,
						popup: false,
						frequent(event, player) {
							return event.name != 'phaseUse' || (event.name == 'phaseUse' && event._triggered && event._triggered == 4);
						},
						enable: 'phaseUse',
						trigger: {
							global: 'gameDrawAfter',
							player: ['useCard1', 'respond', 'phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
						},
						prompt(event, player) {
							var skn = '覆盖指令';
							var skn2 = get.translation('scqh_pcr_' + skn);
							var str = '' + get.prompt2('scqh_pcr_' + skn);
							str = str.replace('###是否发动【' + skn2 + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_覆盖指令')) return false;
							var num = Math.floor(player.storage.scqh_pcr_行动技_姬塔);
							if (name == 'gameDrawAfter') return num == 0;
							return num == 3 || num == 8;
							if (name == 'useCardAfter') {
								if (!event.cards.length) return false;
							}
						},
						content() {
							'step 0';
							event.skn = 'scqh_pcr_覆盖指令';
							if (event.triggername) {
								var str = '' + get.prompt2(event.skn);
								str = str.replace('###是否发动【' + get.translation(event.skn) + '】？###', '');
								var next = player.chooseBool();
								next.set('prompt', get.prompt(event.skn));
								next.set('prompt2', str);
								next.set('ai', function (player) {
									return 1;
								});
							}
							('step 1');
							if (event.triggername) {
								if (!result.bool) event.finish();
							}
							('step 2');
							player.useSkill('scqh_pcr_行动技_姬塔');
							player.pcr_changeTp(150);
						},
						ai: {
							threaten: 1.3,
						},
					},
				},
			},
			scqh_pcr_姬塔01: {
				name: '剑意迸发',
				nobracket: true,
				forced: true,
				trigger: {
					player: ['phaseZhunbeiBegin', 'useCard', 'respond'],
				},
				filter(event, player, name) {
					if (name == 'phaseZhunbeiBegin') return true;
					return player.hasHistory('lose', function (evt) {
						if (evt.parent != event) return false;
						for (var i in evt.gaintag_map) {
							if (evt.ss && evt.ss.length && evt.gaintag_map[i].includes('scqh_pcr_姬塔01')) return true;
						}
						return false;
					});
				},
				content() {
					'step 0';
					var name = event.triggername;
					if (name == 'phaseZhunbeiBegin') {
						player.loseToSpecial(get.cards(2), 'scqh_pcr_姬塔01');
						event.finish();
					} else player.draw(2);
					('step 1');
					var str = '你可以让任意名其他角色摸一张牌';
					player.chooseTarget([1, Infinity], get.prompt('scqh_pcr_姬塔01'), str, function (card, player, target) {
						return target != player;
					});
					('step 2');
					if (result.targets?.length) {
						var targed = result.targets;
						for (var i = 0; i < targed.length; i++) {
							targed[i].draw();
						}
					}
				},
				mark: true,
				intro: {
					mark(dialog, storage, player) {
						var num = player.getCards('s', function (card) {
							return card.hasGaintag('scqh_pcr_姬塔01');
						}).length;
						if (!num) return '共有〇张牌';
						if (player.isUnderControl(true)) {
							dialog.addAuto(
								player.getCards('s', function (card) {
									return card.hasGaintag('scqh_pcr_姬塔01');
								})
							);
						} else {
							return '共有' + get.cnNumber(num) + '张牌';
						}
					},
					markcount(storage, player) {
						return player.getCards('s', function (card) {
							return card.hasGaintag('scqh_pcr_姬塔01');
						}).length;
					},
				},
				mod: {
					aiOrder(player, card, num) {
						if (get.itemtype(card) == 'card' && card.hasGaintag('scqh_pcr_姬塔01')) return num + 0.5;
					},
				},
			},
			scqh_pcr_姬塔02: {
				name: '剑圣的赋性',
				nobracket: true,
				juexingji: true,
				forced: true,
				trigger: {
					player: ['loseAsyncAfter'],
				},
				filter(event, player, name) {
					var num = player.getCards('s', function (card) {
						return card.hasGaintag('scqh_pcr_姬塔01');
					}).length;
					return num >= 5;
				},
				content() {
					'step 0';
					player.addSkill('scqh_pcr_姬塔00');
					player.addSkill('scqh_pcr_姬塔01b');
					player.addSkill('scqh_pcr_姬塔02b');
					player.awakenSkill('scqh_pcr_姬塔02');
				},
				derivation: ['scqh_pcr_姬塔00', 'scqh_pcr_姬塔01b', 'scqh_pcr_姬塔02b'],
			},
			scqh_pcr_姬塔01b: {
				name: '黄金光辉',
				nobracket: true,
				forced: true,
				trigger: {
					source: 'damageEnd',
				},
				filter(event, player, name) {
					var num = player.getCards('s', function (card) {
						return card.hasGaintag('scqh_pcr_姬塔01');
					}).length;
					return num && event.player != player;
				},
				content() {
					'step 0';
					var str = get.translation('scqh_pcr_姬塔01b') + ':你可以重铸任意张<剑意>牌';
					player
						.chooseCard('s', str, [1, Infinity], function (card) {
							return card.hasGaintag('scqh_pcr_姬塔01');
						})
						.set('ai', function (card) {
							return 5 - get.value(card);
						});
					('step 1');
					if (result.cards?.length) {
						var cardz = result.cards;
						player.loseToDiscardpile(cardz);
						player.draw(cardz.length);
					}
				},
			},
			scqh_pcr_姬塔02b: {
				name: '三重斩击',
				nobracket: true,
				forced: true,
				trigger: {
					player: ['useCardAfter'],
				},
				filter(event, player, name) {
					if (event.getParent(3).skill == 'scqh_pcr_姬塔02b') return false;
					var targed = game.hasPlayer(function (current) {
						return event.targets.includes(current) && current.isAlive();
					});
					return event.card && event.card.name == 'sha' && targed;
				},
				content() {
					'step 0';
					event.count = 2;
					('step 1');
					var str = '你可以对 ' + get.translation(trigger.targets) + ' 再使用至多' + get.cnNumber(event.count) + '张【杀】.';
					player.chooseToUse({
						prompt: get.prompt('三重斩击'),
						prompt2: str,
						filterCard(card, player) {
							return card.name == 'sha';
						},
						filterTarget(card, player, target) {
							return trigger.targets.includes(target);
						},
						selectTarget: -1,
					});
					('step 2');
					event.count--;
					var targed = game.hasPlayer(function (current) {
						return trigger.targets.includes(current) && current.isAlive();
					});
					if (result.bool && event.count && targed) event.goto(1);
				},
			},
			scqh_pcr_姬塔00: {
				name: '星河满天',
				nobracket: true,
			},
			scqh_pcr_ub_猫猫决胜爪: {
				audio: 'ext:萌将坛/audio/公主连结/珠希:1',
				global: 'scqh_pcr_ub_猫猫决胜爪_ub',
				nobracket: true,
				forced: true,
				silent: true,
				hiddenCard(player, name) {
					return lib.skill.scqh_pcr_ubfilter.hiddenCard(player, name);
				},
				_priority: 1071,
				subSkill: {
					ub: {
						name: 'UB·猫猫决胜爪',
						charlotte: true,
						log: false,
						enable: ['chooseToUse', 'chooseToRespond'],
						prompt(event, player) {
							var skn = '猫猫决胜爪';
							var str = '' + get.prompt2('scqh_pcr_ub_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_ub_猫猫决胜爪')) return false;
							return lib.skill.scqh_pcr_ubfilter.filter(event, player, name);
						},
						targetprompt: ['施法目标'],
						selectTarget: 1,
						filterTarget(card, player, target) {
							if (target == player) return false;
							var players = game.filterPlayer();
							for (const i of players) {
								if (i == player) continue;
								if (target.pcr_tp < players.pcr_tp) return false;
							}
							return true;
						},
						precontent() {
							player.pcr_changeTp('ub');
							if (player.storage.scqh_pcr_ubfilter && player.storage.scqh_pcr_ubfilter == 'nowuxie') {
								if (event.getParent(2) && event.getParent(2).card) {
									event.getParent(2).cancel();
								}
							} else if (event.getParent(4) && event.getParent(4).card) {
								event.getParent(4).cancel();
							}
						},
						content() {
							'step 0';
							event.off = true;
							var players = game.filterPlayer();
							for (const i of players) {
								if (i == player) continue;
								if (target.hp < i.hp) event.off = false;
							}
							('step 1');
							var next = player.pcr_攻击(target);
							next.set('无双', 8);
							('step 2');
							var next = player.pcr_攻击(target);
							next.set('无双', 8);
						},
						check(event, player) {
							return get.attitude(player, event.target) <= 0;
						},
						ai: {
							respondShan: true,
							respondSha: true,
							directHit_ai: true,
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_猫猫投掷: {
				audio: 'ext:萌将坛/audio/公主连结/珠希:1',
				global: 'scqh_pcr_猫猫投掷_phaseUse',
				group: 'scqh_pcr_行动技_珠希',
				nobracket: true,
				subSkill: {
					phaseUse: {
						charlotte: true,
						log: false,
						popup: false,
						frequent(event, player) {
							return event.name != 'phaseUse' || (event.name == 'phaseUse' && event._triggered && event._triggered == 4);
						},
						enable: 'phaseUse',
						trigger: {
							global: 'gameDrawAfter',
							player: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
						},
						prompt(event, player) {
							var skn = '猫猫投掷';
							var str = '' + get.prompt2('scqh_pcr_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_猫猫投掷')) return false;
							if (!player.countCards('hs', 'sha')) return false;
							var num = Math.floor(player.storage.scqh_pcr_行动技_珠希);
							if (name == 'gameDrawAfter') return num == 0;
							return num == 2;
						},
						targetprompt: ['施法目标'],
						filterTarget(card, player, target) {
							if (target == player) return false;
							var players = game.filterPlayer();
							for (const i of players) {
								if (i == player) continue;
								if (target.pcr_tp < players.pcr_tp) return false;
							}
							return true;
						},
						position: 'hs',
						filterCard(card, player, target) {
							return card.name == 'sha';
						},
						content() {
							'step 0';
							event.skn = 'scqh_pcr_猫猫投掷';
							if (event.triggername) {
								var str = '' + get.prompt2(event.skn);
								str = str.replace('###是否发动【' + get.translation(event.skn) + '】？###', '');
								player.chooseCardTarget({
									prompt: get.prompt(event.skn),
									prompt2: str,
									position: 'hs',
									filterCard(card, player, target) {
										return card.name == 'sha';
									},
									filterTarget(card, player, target) {
										return lib.skill[event.name].filterTarget(card, player, target);
									},
									targetprompt: '施法目标',
									ai1(card) {
										return 1;
									},
									ai2(target) {
										return get.effect(target, { name: 'sha' }, player, player);
									},
								});
							}
							('step 1');
							if (event.triggername) {
								if (result.targets?.length) {
									event.targed = result.targets[0];
									player.discard(result.cards);
								} else event.finish();
							} else event.targed = target;
							('step 2');
							player.useSkill('scqh_pcr_行动技_珠希');
							player.pcr_攻击(event.targed);
							('step 3');
							if (event.targed.countDiscardableCards(player, 'he')) {
								var next = player.discardPlayerCard(event.targed, 'he', true);
								var str = '弃置' + get.translation(event.targed) + '的一张牌';
								next.set('prompt', str);
							}
							event.targed.addSkill('scqh_pcr_晕眩');
							event.targed.storage.scqh_pcr_晕眩 = 1;
						},
						check(event, player) {
							return get.attitude(player, event.target) <= 0;
						},
						ai: {
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_猫猫的随心所欲: {
				audio: 'ext:萌将坛/audio/公主连结/珠希:1',
				global: 'scqh_pcr_猫猫的随心所欲_phaseUse',
				group: 'scqh_pcr_行动技_珠希',
				nobracket: true,
				subSkill: {
					phaseUse: {
						charlotte: true,
						log: false,
						popup: false,
						discard: false,
						delay: false,
						lose: false,
						frequent(event, player) {
							return event.name != 'phaseUse' || (event.name == 'phaseUse' && event._triggered && event._triggered == 4);
						},
						enable: 'phaseUse',
						trigger: {
							global: 'gameDrawAfter',
							player: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
						},
						prompt(event, player) {
							var skn = '猫猫的随心所欲';
							var str = '' + get.prompt2('scqh_pcr_' + skn);
							str = str.replace('###是否发动【' + skn + '】？###', '');
							return str;
						},
						filter(event, player, name) {
							if (!player.hasSkill('scqh_pcr_猫猫的随心所欲')) return false;
							var num = Math.floor(player.storage.scqh_pcr_行动技_珠希);
							if (name == 'gameDrawAfter') return num == 0;
							return num == 4;
						},
						targetprompt: ['施法目标'],
						filterTarget(card, player, target) {
							if (target == player) return false;
							var players = game.filterPlayer();
							for (const i of players) {
								if (i == player) continue;
								if (target.pcr_tp < players.pcr_tp) return false;
							}
							if (!player.canUse('shunshou', target, false)) {
								if (ui.selected.cards.length) return false;
							}
							return true;
						},
						position: 'hes',
						selectCard(card, player, target) {
							return [0, 1];
						},
						filterCard(card, player, target) {
							if (ui.selected.targets.length) {
								if (!player.canUse('shunshou', ui.selected.targets[0], false)) {
									return false;
								}
							}
							return card.suit == 'club';
						},
						content() {
							'step 0';
							event.skn = 'scqh_pcr_猫猫的随心所欲';
							if (event.triggername) {
								var str = '' + get.prompt2(event.skn);
								str = str.replace('###是否发动【' + get.translation(event.skn) + '】？###', '');
								player.chooseCardTarget({
									prompt: get.prompt(event.skn),
									prompt2: str,
									position: 'hes',
									selectCard(card, player, target) {
										return lib.skill[event.name].selectCard(card, player, target);
									},
									filterCard(card, player, target) {
										return lib.skill[event.name].filterCard(card, player, target);
									},
									filterTarget(card, player, target) {
										return lib.skill[event.name].filterTarget(card, player, target);
									},
									targetprompt: '施法目标',
									ai1(card) {
										return 7 - get.value(card);
									},
									ai2(target) {
										return get.effect(target, { name: 'sha' }, player, player);
									},
								});
							}
							('step 1');
							if (event.triggername) {
								if (result.targets?.length) {
									event.targed = result.targets[0];
									if (result.cards.length) event.cardd = result.cards;
								} else event.finish();
							} else {
								event.targed = target;
								if (cards.length) event.cardd = cards;
							}
							('step 2');
							player.useSkill('scqh_pcr_行动技_珠希');
							if (event.cardd) {
								player.useCard(
									{
										name: 'shunshou',
									},
									event.cardd,
									event.targed
								);
							}
							('step 3');
							var next = player.pcr_changeTp(40);
							next.set('vary', '偷取');
							next.set('target', event.targed);
						},
						check(event, player) {
							return get.attitude(player, event.target) <= 0;
						},
						ai: {
							result: {
								target: -1,
								player: 1,
							},
							basic: {
								order: 9,
								useful: 5,
								value: 5,
							},
						},
					},
				},
			},
			scqh_pcr_行动技_珠希: {
				nobracket: true,
				silent: true,
				forced: true,
				init(player) {
					player.storage.scqh_pcr_行动技_珠希 = 0;
				},
				trigger: {
					player: ['useCard1', 'respond', 'phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDrawBegin', 'phaseUseBegin', 'phaseDiscardBegin', 'phaseJieshuBegin'],
				},
				filter(event, player, name) {
					return true;
				},
				content() {
					var num = 4;
					if (!player.storage[event.name]) {
						player.storage[event.name] = 0;
					}
					if (player.storage[event.name] < num) {
						var speed = 'scqh_pcr_行动速度';
						var length = 1;
						if (player.storage[speed + '_加速']) {
							length += player.storage[speed + '_加速'];
						}
						if (player.storage[speed + '_减速']) {
							length -= player.storage[speed + '_减速'];
						}
						if (length <= 0) length = 0;
						if (length >= 1) length = 1;
						player.storage[event.name] += length;
						player.markSkill(event.name);
					} else {
						player.storage[event.name] -= num;
						player.unmarkSkill(event.name);
					}
				},
				_priority: 1046,
				marktext: '行动',
				intro: {
					name: '行动值(珠希)',
					content(num) {
						return '' + Math.floor(num);
					},
					markcount(num) {
						return Math.floor(num);
					},
				},
			},
			scqh_pcr_ub_霸瞳天星: {},
			scqh_pcr_天丛云剑: {},
			scqh_pcr_八尺琼勾玉: {},
			scqh_pcr_八尺镜: {},
		},
		translate: {
			scqh_pcr_mark: '公主连结·数据',
			_scqh_pcr_护盾: '公主连结·护盾',
			_scqh_pcr_行动技_超速: '行动技·超速',
			_scqh_pcr_连段技: '公主连结·连段技',
			_scqh_pcr_行动速度: '公主行动·加速',
			_scqh_pcr_changeTp: '公主连结·技能值',
			scqh_pcr_行动记录: '公主行动·记录',
			scqh_pcr_晕眩: '晕眩',
			scqh_pcr_反击: '反击',
			scqh_pcr_挑衅: '挑衅',
			scqh_pcr_绝对闪避: '绝对闪避',
			scqh_pcr_绝对命中: '绝对命中',
			scqh_pcr_乱数圣域: '乱数圣域',
			scqh_pcr_乱数圣域_info: '连结爆发,你可以对眼前的一名角色发动〖<b><u>破军</u></b>〗并发起物理攻击,刷新三层「<b><u>数据跃迁</u></b>」状态.此攻击必定命中,且会造成暴击.',
			scqh_pcr_覆盖指令: '数据跃迁',
			scqh_pcr_覆盖指令_info: '行动技⁽³⁾ₘₐₓ₍₄₎,你增加一层「<b><u>数据跃迁</u></b>」状态,提升30点TP上升⁽¹⁵⁾,回复150点TP值.',
			scqh_pcr_代码骇入: '结构分解',
			scqh_pcr_代码骇入_info: '行动技⁽¹⁾ₘₐₓ₍₄₎,出牌阶段,你可以销毁一张手牌并选择一名你使用此牌可以指定为目标的角色,对目标执行此牌的效果.',
			scqh_pcr_ub_七重纱护: '七重纱护',
			scqh_pcr_ub_七重纱护_info: '［连结爆发黄］,你可以使所有计算与你的距离为１的角色展开36点魔法无效屏障⁽¹⁸⁾,摸两张牌,回复１点体力.',
			scqh_pcr_生命之水: '生命之水',
			scqh_pcr_生命之水_info: '行动技⁽²⁾ ᵐᵃˣ⁴,出牌阶段／一名角色处于濒死状态时,你可以选择一名体力最低(或之一)的角色,使其回复２点体力并视为使用一张【酒】.',
			scqh_pcr_月下独酌: '月下独酌',
			scqh_pcr_月下独酌_info: '行动技⁽⁴⁾ ᵐᵃˣ⁴,出牌阶段,你可以选择一名手牌数最少(或之一)的角色,使其回复75点TP值并摸一张牌.',
			scqh_pcr_ub_一箭穿心: '一箭穿心',
			scqh_pcr_ub_一箭穿心_info: '［连结爆发粉］,你可以选择一名距离最近的其他角色,对该角色发起一次物理攻击.此技能必定命中、暴击.',
			scqh_pcr_愤怒之镖: '愤怒之镖',
			scqh_pcr_愤怒之镖_info: '行动技⁽⁴⁾ ᵐᵃˣ⁴,每回合限三次,出牌阶段,你可以弃置一张【杀】,对一名距离最近的其他角色发起一次物理攻击.此技能必定暴击.',
			scqh_pcr_魅力全开: '魅力全开',
			scqh_pcr_魅力全开_info: '出牌阶段开始时,你可以展示全部手牌,当你使用或打出你展示过的手牌时,你摸一张牌(每回合每种花色各限一次).',
			scqh_pcr_ub_炼狱火海壁垒: '炼狱火海壁垒',
			scqh_pcr_ub_炼狱火海壁垒_info: '［连结爆发褐］,你可以展开72点双吸收屏障⁽¹⁸⁾,使距离３以内的所有角色提高55%行动速度⁽¹⁸⁾.',
			scqh_pcr_勇气治愈: '勇气治愈',
			scqh_pcr_勇气治愈_info: '行动技⁽⁴⁾ ᵐᵃˣ⁴,出牌阶段,你可以选择一名距离１以内的体力最低(或之一)的角色,使该角色回复１点体力,摸一张牌,行动速度⁽¹²⁾提升至1.2倍.',
			scqh_pcr_护甲破坏: '护甲破坏',
			scqh_pcr_护甲破坏_info: '行动技⁽²⁾ ᵐᵃˣ⁴,出牌阶段,你可以弃置一张【杀】,对一名距离最近的其他角色发起一次物理攻击,若你未因此造成过伤害,你弃置该角色的一张牌.',
			scqh_pcr_ub_高贵红炎: '高贵红炎',
			scqh_pcr_ub_高贵红炎_info: '［连结爆发红］,你可以选择一名距离最近的其他角色,对该角色发起一次物理攻击⁽⁴⁾并展开40点双吸收屏障⁽¹⁸⁾,于此回合结束时,你对该角色距离１以内的所有其他角色造成Ｘ点火焰伤害(Ｘ为对方身上的<贵>标记数).',
			scqh_pcr_荣耀斩击: '荣耀斩击',
			scqh_pcr_荣耀斩击_info: '行动技⁽²⁾ ᵐᵃˣ⁴,出牌阶段,你可以弃置一张【杀】,对一名距离最近的其他角色发起一次物理攻击,摸一张牌,提高15点TP上升⁽¹²⁾,进入<buff_反击>状态,持续两个回合.',
			scqh_pcr_治愈宝石: '治愈宝石',
			scqh_pcr_治愈宝石_info: '行动技⁽⁴⁾ ᵐᵃˣ⁴,出牌阶段,你可以使所有计算与你的距离为１的角色回复１点体力.',
			scqh_pcr_ub_朱色之噬: '朱色之噬',
			scqh_pcr_ub_朱色之噬_info: '［连结爆发红］,你可以选择一名距离最近的其他角色,视为对其距离２以内的所有其他角色使用一张【南蛮入侵】,并回复等同于目标数的体力,给予自身１层「永夜之加护⁽⁴⁾」.',
			scqh_pcr_腥红之月: '腥红之月',
			scqh_pcr_腥红之月_info: '月相技.<br/>❶ 【新月·血腥爆破】<br/>一名角色判定结束后,你可以视为对该角色距离最近的一名其他角色使用一张【决斗】,最后你流失１点体力.<br/>❷ 【上弦月·血腥之矛】<br/>一名角色摸牌结束后,你可以选择该角色的上方或下方至多Ｘ名其他角色,视为对该角色(不能是你)以及你选择的角色使用一张【决斗】,最后你流失１点体力.(Ｘ为摸牌数)<br/>❸ 【满月·血腥荆棘】<br/>一名角色的出牌阶段结束时,你可以视为对该角色距离１以内的一名其他角色使用一张【决斗】并摸Ｘ张牌,最后你流失１点体力.(X为你已损失的体力值)<br/>❹ 【下弦月·血腥侍从】<br/>一名角色弃牌结束后,你可以视为对其距离最近的一名其他角色使用一张【决斗】,并削减对方50点TP值,你回复１点体力,最后你流失１点体力.',
			scqh_pcr_ub_凤凰终焉: '凤凰终焉',
			scqh_pcr_ub_凤凰终焉_info: '［连结爆发黄］,你可以对前方或后方的一名角色以及该角色身后的另一名角色发起一次物理攻击,你摸一张牌(你每损失两点体力,此伤害+1,且多摸一张牌).',
			scqh_pcr_烈焰斩击: '烈焰斩击',
			scqh_pcr_烈焰斩击_info: '行动技⁽²⁾ ᵐᵃˣ⁴,出牌阶段,你可以弃置一张【杀】,对前方或后方的一名角色以及该角色身后的另一名角色发起一次物理攻击(你每损失两点体力,此伤害+1).',
			scqh_pcr_优雅声援: '优雅声援',
			scqh_pcr_优雅声援_info: '行动技⁽⁴⁾ ᵐᵃˣ⁴,出牌阶段,你可以选择一名计算与你的距离最近的其他角色,使该角色回复75点TP值并摸一张牌.',
			scqh_pcr_ub_疾风剑雨: '疾风剑雨',
			scqh_pcr_ub_疾风剑雨_info: '［连结爆发黄］,你可以对一名距离最近的其他角色发起一次物理攻击.',
			scqh_pcr_广域斩击: '广域斩击',
			scqh_pcr_广域斩击_info: '行动技⁽²⁾ ᵐᵃˣ⁴,出牌阶段,你可以弃置一张【杀】,对一名距离最近的其他角色发起一次物理攻击,并回复200点TP值,让任意名其他角色回复100点TP值.',
			scqh_pcr_剑意迸发: '剑意迸发',
			scqh_pcr_剑意迸发_info: '行动技⁽⁴⁾ ᵐᵃˣ⁴,出牌阶段／当你使用或打出一张牌时,你可以回复150点TP值.',
			scqh_pcr_龙卷的攻刃: '龙卷的攻刃',
			scqh_pcr_龙卷的攻刃_info: '觉醒技,当你于一回合内发动Ｘ次〖疾风剑雨〗后,你将武将牌替换成【姬塔(六星)】.',
			scqh_pcr_姬塔01: '剑意迸发',
			scqh_pcr_姬塔01_info: '准备阶段开始时,你可以将你的所有牌置于你的武将牌上,称为<剑意>.你可以如手牌般使用或打出<剑意>.当你使用或打出<剑意>时,你可以摸两张牌,让任意名其他角色摸一张牌.',
			scqh_pcr_姬塔02: '剑圣的赋性',
			scqh_pcr_姬塔02_info: '觉醒技,当你的武将牌上的<剑意>增加至五张时,你获得技能<黄金光辉>、<三重斩击>和<星河满天>.',
			scqh_pcr_姬塔01b: '黄金光辉',
			scqh_pcr_姬塔01b_info: '当你对其他角色造成伤害后,你可以重铸任意张<剑意>.',
			scqh_pcr_姬塔02b: '三重斩击',
			scqh_pcr_姬塔02b_info: '当你不因此法使用的【杀】结算后,你可以对相同的目标使用至多两张【杀】.',
			scqh_pcr_姬塔00: '星河满天',
			scqh_pcr_姬塔00_info: 'pcr_黄ub,每轮限一次,',
			scqh_pcr_ub_猫猫决胜爪: '猫猫决胜爪',
			scqh_pcr_ub_猫猫决胜爪_info: '［连结爆发亮紫］,你可以选择一名TP值最多(或之一)的其他角色,对该角色发起一次物理攻击⁽⁸⁾和一次<幻影斩击>.',
			scqh_pcr_猫猫投掷: '猫猫投掷',
			scqh_pcr_猫猫投掷_info: '行动技⁽²⁾ ᵐᵃˣ⁴,出牌阶段,你可以弃置一张【杀】,对一名TP值最多(或之一)的其他角色发起一次物理攻击,弃置目标角色的一张牌,并使其<buff_晕眩>一个回合.',
			scqh_pcr_猫猫的随心所欲: '猫猫的随心所欲',
			scqh_pcr_猫猫的随心所欲_info: '行动技⁽⁴⁾ ᵐᵃˣ⁴,出牌阶段,你可以选择一名TP值最多(或之一)的其他角色(同时你可以将一张♣️️牌当做【顺手牵羊】对目标角色使用),偷取目标角色的40点TP值.',
			scqh_pcr_ub_霸瞳天星: '霸瞳天星·灭星',
			scqh_pcr_ub_霸瞳天星_info: '［连结爆发亮紫］,你可以解除至少一名其他角色的护盾、护甲与增益效果以及所有标记,对这些角色发起一次物理攻击⁽³⁾.',
			scqh_pcr_天丛云剑: '天丛云剑·伪翔/草薙',
			scqh_pcr_天丛云剑_info: '行动技⁽¹⁾⁽⁴⁾⁽⁷⁾⁽¹⁰⁾ ᵐᵃˣ¹⁰,出牌阶段.',
			scqh_pcr_八尺琼勾玉: '八尺琼勾玉·减葬',
			scqh_pcr_八尺琼勾玉_info: '行动技⁽³⁾⁽⁸⁾ ᵐᵃˣ¹⁰,出牌阶段.',
			scqh_pcr_八尺镜: '八尺镜·煌裁',
			scqh_pcr_八尺镜_info: '行动技⁽⁴⁾ ᵐᵃˣ⁴,出牌阶段.',
		},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

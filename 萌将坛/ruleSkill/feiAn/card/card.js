'use strict';
game.import('card', function (lib, game, ui, get, ai, _status) {
	var list = {
		name: 'scqh',
		connect: true,
		card: {
			scqhCard_trident: {
				enable: true,
				type: 'equip',
				subtype: 'equip1',
				distance: {
					attackFrom: -2,
				},
				filterTarget(card, player, target) {
					return target == player;
				},
				selectTarget: -1,
				modTarget: true,
				toself: true,
				content: lib.element.content.equipCard,
				skills: [],
				onEquip() {
					'step 0';
					var list = ['引雷', '激流'];
					var next = player.chooseControl(list, 'cancel2');
					next.set('choiceList', ['【引雷】:' + get.translation('scqhCard_trident_loyalty_info'), '【激流】:' + get.translation('scqhCard_trident_riptide_info')]);
					next.set('ai', 0);
					('step 1');
					if (result.control && result.control != 'cancel2') {
						var book = 'riptide';
						if (result.control == '引雷') book = 'loyalty';
						player.addSkill('scqhCard_trident_' + book);
					}
				},
				onLose() {
					player.removeSkill('scqhCard_trident_loyalty');
					player.removeSkill('scqhCard_trident_riptide');
				},
				ai: {
					basic: {
						equipValue: 7,
					},
				},
				fullimage: true,
			},
			scqhCard_圣剑加拉廷: {
				scqh_Graveyard: true,
				scqh_NobleArms: true,
				type: 'scqh_spell',
				subtype: 'scqh_spellEquip',
				skills: ['scqhCard_圣剑加拉廷_skill'],
				enable: true,
				fullimage: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					if (target != player) return false;
					if (target.countCards('e', card.name)) return false;
					return target.scqh_isNobleKnight();
				},
				content: lib.element.content.equipCard,
				onEquip() {
					player.scqh_changeStatus('ATK', 1000);
				},
				onLose() {
					player.scqh_changeStatus('ATK', -1000);
				},
				scqh_Destroyed: true,
				scqh_filter(player, card) {
					return player.scqh_ReviveNobleArms(card);
				},
				scqh_content(player, card) {
					var his = player.getHistory('custom');
					his.push({ [card.name]: true });
					player.equip(card);
				},
				ai: {
					order() {
						return 9;
					},
					equipValue(card, player) {
						if (player.countCards('h') > 6) return 2;
						return 0;
					},
					basic: {
						equipValue: 3,
						order: 4,
						useful: 2,
						value: 4,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			scqhCard_圣剑石中剑: {
				scqh_Graveyard: true,
				scqh_NobleArms: true,
				type: 'scqh_spell',
				subtype: 'scqh_spellEquip',
				skills: ['scqhCard_圣剑石中剑_skill'],
				enable: true,
				fullimage: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					if (target != player) return false;
					if (target.countCards('e', card.name)) return false;
					return target.scqh_isNobleKnight();
				},
				content: lib.element.content.equipCard,
				onEquip() {
					player.scqh_skillUsable(card.name + '_skill');
					player.scqh_changeStatus('ATK', 500);
				},
				onLose() {
					player.scqh_changeStatus('ATK', -500);
				},
				scqh_Destroyed: true,
				scqh_filter(player, card) {
					return player.scqh_ReviveNobleArms(card);
				},
				scqh_content(player, card) {
					var his = player.getHistory('custom');
					his.push({ [card.name]: true });
					player.equip(card);
				},
				ai: {
					order() {
						return 9;
					},
					equipValue(card, player) {
						if (player.countCards('h') > 6) return 2;
						return 0;
					},
					basic: {
						equipValue: 3,
						order: 4,
						useful: 2,
						value: 4,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			scqhCard_圣剑阿隆戴特: {
				scqh_Graveyard: true,
				scqh_NobleArms: true,
				type: 'scqh_spell',
				subtype: 'scqh_spellEquip',
				skills: ['scqhCard_圣剑阿隆戴特_skill'],
				enable: true,
				fullimage: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					if (target != player) return false;
					if (target.countCards('e', card.name)) return false;
					return target.scqh_isNobleKnight();
				},
				content: lib.element.content.equipCard,
				onEquip() {
					player.scqh_skillUsable(card.name + '_skill');
				},
				scqh_Destroyed: true,
				scqh_filter(player, card) {
					return player.scqh_ReviveNobleArms(card);
				},
				scqh_content(player, card) {
					var his = player.getHistory('custom');
					his.push({ [card.name]: true });
					player.equip(card);
				},
				ai: {
					order() {
						return 9;
					},
					equipValue(card, player) {
						if (player.countCards('h') > 6) return 2;
						return 0;
					},
					basic: {
						equipValue: 3,
						order: 4,
						useful: 2,
						value: 4,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			scqhCard_圣剑克拉伦特: {
				scqh_Graveyard: true,
				scqh_NobleArms: true,
				type: 'scqh_spell',
				subtype: 'scqh_spellEquip',
				skills: ['scqhCard_圣剑克拉伦特_skill'],
				enable: true,
				fullimage: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					if (target != player) return false;
					if (target.countCards('e', card.name)) return false;
					return target.scqh_isNobleKnight();
				},
				content: lib.element.content.equipCard,
				onEquip() {
					player.scqh_skillUsable(card.name + '_skill');
				},
				scqh_Destroyed: true,
				scqh_filter(player, card) {
					return player.scqh_ReviveNobleArms(card);
				},
				scqh_content(player, card) {
					var his = player.getHistory('custom');
					his.push({ [card.name]: true });
					player.equip(card);
				},
				ai: {
					order() {
						return 9;
					},
					equipValue(card, player) {
						if (player.countCards('h') > 6) return 2;
						return 0;
					},
					basic: {
						equipValue: 3,
						order: 4,
						useful: 2,
						value: 4,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			scqhCard_天命之圣剑: {
				scqh_Graveyard: true,
				scqh_NobleArms: true,
				type: 'scqh_spell',
				subtype: 'scqh_spellEquip',
				skills: ['scqhCard_天命之圣剑_skill'],
				enable: true,
				fullimage: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					if (target != player) return false;
					if (target.countCards('e', card.name)) return false;
					return target.scqh_isNobleKnight();
				},
				content: lib.element.content.equipCard,
				onEquip() {
					player.scqh_skillUsable(card.name + '_skill');
				},
				scqh_Destroyed: true,
				scqh_filter(player, card) {
					return player.scqh_ReviveNobleArms(card);
				},
				scqh_content(player, card) {
					var his = player.getHistory('custom');
					his.push({ [card.name]: true });
					player.equip(card);
				},
				ai: {
					order() {
						return 9;
					},
					equipValue(card, player) {
						if (player.countCards('h') > 6) return 2;
						return 0;
					},
					basic: {
						equipValue: 3,
						order: 4,
						useful: 2,
						value: 4,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			scqhCard_圣剑断钢湖中剑: {
				scqh_Graveyard: true,
				scqh_NobleArms: true,
				type: 'scqh_spell',
				subtype: 'scqh_spellEquip',
				skills: ['scqhCard_圣剑断钢湖中剑_skill'],
				enable: true,
				fullimage: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					if (target != player) return false;
					if (target.countCards('e', card.name)) return false;
					return target.scqh_isNobleKnight();
				},
				content: lib.element.content.equipCard,
				ai: {
					order() {
						return 9;
					},
					equipValue(card, player) {
						if (player.countCards('h') > 6) return 2;
						return 0;
					},
					basic: {
						equipValue: 3,
						order: 4,
						useful: 2,
						value: 4,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			scqhCard_桂妮薇儿: {
				scqh_Graveyard: true,
				scqh_NobleArms: true,
				type: 'scqh_monster',
				subtype: 'scqh_spellEquip',
				skills: ['scqhCard_桂妮薇儿_skill'],
				enable: true,
				fullimage: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					if (target != player) return false;
					return target.scqh_isNobleKnight();
				},
				content: lib.element.content.equipCard,
				onEquip() {
					player.scqh_changeStatus('ATK', 300);
					player.scqh_skillUsable(card.name + '_skill');
				},
				onLose() {
					player.scqh_changeStatus('ATK', -300);
				},
				scqh_Destroyed: true,
				scqh_filter(player, card) {
					return player.scqh_ReviveNobleArms(card);
				},
				scqh_content(player, card) {
					var his = player.getHistory('custom');
					his.push({ [card.name]: true });
					player.equip(card);
				},
				ai: {
					order() {
						return 9;
					},
					equipValue(card, player) {
						if (player.countCards('h') > 6) return 2;
						return 0;
					},
					basic: {
						equipValue: 3,
						order: 4,
						useful: 2,
						value: 4,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
		},
		skill: {
			_scqhCard_noEquip: {
				mod: {
					targetEnabled(card, player, target, now) {
						var types = ['scqh_spell', 'scqh_trap', 'scqh_monster'];
						var cards = target.getCards('e', (c) => types.includes(get.type(c)));
						if (cards.length >= 5 && types.includes(get.type(card))) {
							return false;
						}
					},
				},
			},
			scqhCard_圣剑加拉廷_skill: {
				equipSkill: true,
				forced: true,
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				filter(event, player) {
					return player.scqh_Status().ATK;
				},
				content() {
					player.scqh_changeStatus('ATK', -200);
				},
			},
			scqhCard_圣剑石中剑_skill: {
				equipSkill: true,
				enable: 'phaseUse',
				usable: 1,
				content() {
					player.scqh_changeStatus('LP', 500);
				},
				ai: {
					result: {
						player: 1,
					},
				},
			},
			scqhCard_圣剑阿隆戴特_skill: {
				equipSkill: true,
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.scqh_Status().ATK >= 500;
				},
				filterTarget(card, player, target) {
					return target != player && target.countDiscardableCards(player, 'h');
				},
				content() {
					player.scqh_changeStatus('ATK', -500);
					player.discardPlayerCard('h', target, true);
				},
				ai: {
					result: {
						player: 1,
					},
				},
			},
			scqhCard_圣剑克拉伦特_skill: {
				equipSkill: true,
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.scqh_Status().LP >= 500;
				},
				content() {
					player.scqh_changeStatus('LP', -500);
					player.addTempSkill(event.name + '2');
				},
				ai: {
					result: {
						player: 1,
					},
				},
			},
			scqhCard_圣剑克拉伦特_skill2: {
				charlotte: true,
				ai: {
					scqh_DirectAttack: true,
				},
			},
			scqhCard_天命之圣剑_skill: {
				equipSkill: true,
				forced: true,
				trigger: {
					player: 'scqh_changeStatusBegin',
				},
				usable: 1,
				filter(event, player) {
					if (!event.type || !event.num) return false;
					return event.type == 'LP' && event.num < 0;
				},
				content() {
					trigger.cancel();
				},
			},
			scqhCard_圣剑断钢湖中剑_skill: {
				equipSkill: true,
				mod: {
					targetEnabled(card, player, target) {
						if (get.type(card) == 'trick' && player != target) return false;
					},
				},
			},
			scqhCard_桂妮薇儿_skill: {
				equipSkill: true,
				trigger: {
					player: 'scqh_changeStatusBegin',
				},
				filter(event, player) {
					if (event.type != 'LP' || event.num > 0) return false;
					var evt = event.getParent('damage');
					var card = evt.parent.card;
					if (!evt || !card) return false;
					var store = player.storage.scqhCard_桂妮薇儿_skill;
					if (store) return get.type(card) == 'basic';
					if (!store) return get.type(card) == 'trick';
					return false;
				},
				content() {
					trigger.cancel();
				},
				subSkill: {
					光: {
						name: '圣剑之女王 桂妮薇儿',
						trigger: {
							player: ['loseHpBegin', 'loseMaxHpBegin', 'damageBegin4'],
						},
						prompt2(event, player) {
							var str = '<b><font color = white>【' + get.translation(_status.event.skill) + '】';
							str += '<br/><br/><li>施法对象:你';
							str += '<br/><br/>光属性技,当你失去体力时、减体力上限时、受到非基本牌造成的伤害时,你可以防止之,你弃置装备区里的一张【怀抱圣剑的王后】.';
							str += '</font></b>';
							return str;
						},
						filter(event, player, name) {
							if (player.storage.ygo_属性 != '光') return false;
							if (name == 'damageBegin4') return get.type(event.card) != 'basic';
							if (name != 'damageBegin4') return true;
							return false;
						},
						content() {
							'step 0';
							trigger.cancel();
							('step 1');
							var ccc = player.getCards('e', 'ygo_NobleArmsOfQueen');
							if (ccc.length > 1) {
								player.discardPlayerCard(player, 'e', true).set('filterButton', function (button) {
									return button.link.name == 'ygo_NobleArmsOfQueen';
								});
							} else if (ccc.length == 1) player.discard(ccc);
						},
					},
					暗: {
						name: '圣剑之女王 桂妮薇儿',
						trigger: {
							player: 'shaHit',
							target: 'shaHit',
						},
						prompt2(event, player) {
							var player = _status.event.player;
							var str = '<b><font color = white>【' + get.translation(_status.event.skill) + '】';
							str += '<br/><br/><li>施法对象:';
							if (event.player == player) str += get.translation(event.target);
							else if (event.target == player) str += get.translation(event.player);
							str += '<br/><br/>暗属性技,当你使用的【杀】命中时,或被其他角色使用的【杀】命中时,你可以防止之,弃置对方的一张牌或令其失去一点体力,你弃置装备区里的一张【怀抱圣剑的王后】.';
							str += '</font></b>';
							return str;
						},
						filter(event, player, name) {
							if (player.storage.ygo_属性 != '暗') return false;
							return true;
						},
						content() {
							'step 0';
							trigger.cancel();
							if (player == trigger.player) event.ttt = trigger.target;
							else if (player == trigger.target) event.ttt = trigger.player;
							('step 1');
							var list = [];
							if (event.ttt.countDiscardableCards(player, 'he')) {
								list.push('弃置对方的一张牌');
							}
							list.push('令对方失去一点血');
							player.chooseControl(list);
							('step 2');
							if (result.control == '弃置对方的一张牌') {
								player.discardPlayerCard(event.ttt, 'he', true);
							}
							if (result.control == '令对方失去一点血') {
								event.ttt.loseHp();
							}
							('step 3');
							var ccc = player.getCards('e', 'ygo_NobleArmsOfQueen');
							if (ccc.length > 1) {
								player.discardPlayerCard(player, 'e', true).set('filterButton', function (button) {
									return button.link.name == 'ygo_NobleArmsOfQueen';
								});
							} else if (ccc.length == 1) player.discard(ccc);
						},
					},
				},
			},
			scqhCard_trident_loyalty: {
				mod: {
					targetInRange(card) {
						if (card.name == 'sha') return true;
					},
				},
				charlotte: true,
				trigger: {
					player: 'useCardBegin',
				},
				filter(event, player, name) {
					if (event.card.name != 'sha') return false;
					return player.countCards('e', 'scqhCard_trident');
				},
				content() {
					trigger.cards = player.getCards('e', 'scqhCard_trident');
					trigger.card.isCard = false;
					player.addTempSkill('scqhCard_trident_loyalty2');
					var next = game.createEvent(event.name);
					next.player = player;
					next.card = trigger.card;
					next.suit = trigger.cards[0].suit;
					next.number = trigger.cards[0].number;
					event.next.remove(next);
					trigger.after.push(next);
					next.setContent(function () {
						var card = game.createCard('scqhCard_trident', event.suit, event.number);
						player.$gain2(card);
						player.equip(card);
					});
				},
			},
			scqhCard_trident_loyalty2: {
				firstDo: true,
				charlotte: true,
				_priority: 12,
				forced: true,
				trigger: {
					player: 'shaHit',
				},
				filter(event, player) {
					if (!event.target.isAlive()) return false;
					if (event.card && event.cards && event.cards.length) {
						for (const i of event.cards) {
							if (i.name == 'scqhCard_trident') return true;
						}
					}
					return false;
				},
				content() {
					'step 0';
					var next = trigger.target.judge(function (card) {
						if (card.suit == 'spade') return -4;
						return 0;
					});
					next.judge2 = function (result) {
						return result.bool == false ? true : false;
					};
					('step 1');
					if (!result.bool) {
						trigger.target.damage(2, 'thunder');
					}
				},
			},
			scqhCard_trident_riptide: {
				charlotte: true,
				forced: true,
				changeSeat: true,
				trigger: {
					player: 'useCardAfter',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha' && event.targets.length && event.targets[0].isAlive();
				},
				content() {
					'step 0';
					var history = player.hasHistory('sourceDamage', function (evt) {
						return evt.card == trigger.card;
					});
					if (history) event.seat = 'nextSeat';
					else event.seat = 'previousSeat';
					('step 1');
					if (trigger.targets[0] != player[event.seat]) {
						game.broadcastAll(
							function (target1, target2) {
								game.swapSeat(target1, target2);
							},
							player,
							player[event.seat]
						);
						event.goto(1);
					}
				},
			},
		},
		translate: {
			scqhLOL_护盾: '护盾',
			scqhLOL_护盾_info: '判定阶段,你弃置判定区内的此牌.当你的体力减少时,移去Ｘ张【护盾】,抵消Ｘ点掉血效果(Ｘ为你即将减少的体力值).',
			scqhCard_trident: '三叉戟',
			scqhCard_trident_info: '当此牌进入你的装备区后,你可以获得「引雷」／「激流」中的一项附魔能力,直到你失去装备区内的此牌.',
			scqhCard_trident_loyalty: '引雷',
			scqhCard_trident_loyalty2: '引雷',
			scqhCard_trident_loyalty_info: '你使用【杀】不受距离限制.当你使用【杀】时,你可以用装备区内的【三叉戟】当做此【杀】的实体牌.若命中,则对目标角色发动〖雷击〗.此【杀】结算结束后,将【三叉戟】置入你的装备区.',
			scqhCard_trident_riptide: '激流',
			scqhCard_trident_riptide_info: '锁定技,当你使用的【杀】结算结束后,若此【杀】造成了伤害,则你成为首个目标角色的上家.若此【杀】未造成伤害,你成为首个目标角色的下家.',
			scqhCard_圣剑加拉廷: '圣剑加拉廷',
			scqhCard_圣剑加拉廷_skill: '加拉廷',
			scqhCard_圣剑加拉廷_bg: '懈',
			scqhCard_圣剑加拉廷_info: '①你的装备区里只能有一张【圣剑加拉廷】.②装备者的ATK值上升1000,准备阶段下降200.③每回合限一次,当你装备区里的这张牌被送去墓地时,如果你是圣骑士,可以把这张牌置入你的装备区.',
			scqhCard_圣剑石中剑: '圣剑石中剑',
			scqhCard_圣剑石中剑_skill: '石中剑',
			scqhCard_圣剑石中剑_info: '①你的装备区里只能有一张【圣剑石中剑】.②装备者的ATK值上升500.③出牌阶段限一次,你可以回复500点LP值(进场时重置次数).④每回合限一次,当你装备区里的这张牌被送去墓地时,如果你是圣骑士,可以把这张牌置入你的装备区.',
			scqhCard_圣剑阿隆戴特: '圣剑阿隆戴特',
			scqhCard_圣剑阿隆戴特_skill: '阿隆戴特',
			scqhCard_圣剑阿隆戴特_info: '①你的装备区里只能有一张【圣剑阿隆戴特】.②出牌阶段限一次,你可以支付500点ATK值,弃置其他角色的一张手牌(进场时重置次数).③每回合限一次,当你装备区里的这张牌被送去墓地时,如果你是圣骑士,可以把这张牌置入你的装备区.',
			scqhCard_圣剑克拉伦特: '圣剑克拉伦特',
			scqhCard_圣剑克拉伦特_skill: '克拉伦特',
			scqhCard_圣剑克拉伦特_info: '①你的装备区里只能有一张【圣剑克拉伦特】.②出牌阶段限一次,你可以支付500点LP值,令你本回合可以无视目标角色的DEF属性(进场时重置次数).③每回合限一次,当你装备区里的这张牌被送去墓地时,如果你是圣骑士,可以把这张牌置入你的装备区.',
			scqhCard_天命之圣剑: '天命之圣剑',
			scqhCard_天命之圣剑_skill: '天命之圣剑',
			scqhCard_天命之圣剑_info: '①你的装备区里只能有一张【天命之圣剑】.②每回合限一次,防止你的LP值减少(进场时重置次数).③每回合限一次,当你装备区里的这张牌被送去墓地时,如果你是圣骑士,可以把这张牌置入你的装备区.',
			scqhCard_圣剑断钢湖中剑: '圣剑断钢湖中剑',
			scqhCard_圣剑断钢湖中剑_skill: '断钢湖中剑',
			scqhCard_圣剑断钢湖中剑_info: '①你的装备区里只能有一张【圣剑断钢湖中剑】.②你不能成为其他角色使用普通锦囊牌的目标.',
			scqhCard_桂妮薇儿: '桂妮薇儿',
			scqhCard_桂妮薇儿_skill: '桂妮薇儿',
			scqhCard_桂妮薇儿_info: '①装备者的ATK值上升300.②每回合限一次,如果你是圣骑士,你可以把手牌或墓地中的这张牌置入你的装备区.③转换技,阳:当你因锦囊牌而减少LP时,你可以弃置装备区内的此牌,防止之.阴:当你因基本牌而减少LP时,你可以弃置装备区内的此牌,防止之.',
		},
		list: [],
	};
	for (var i in list.card) {
		if (typeof list.card[i].image != 'string') {
			list.card[i].image = 'ext:' + lib.scqhExtension + '/card/' + i + '.png';
			var tags = [];
			tags.push('scqh_NobleArms');
			for (var n in tags) {
				if (list.card[i][tags[n]]) {
					list.card[i].image = 'ext:' + lib.scqhExtension + '/card/' + tags[n] + '/' + i + '.png';
					break;
				}
			}
		}
	}
	lib.config.all.cards.add('scqh');
	lib.config.cards.add('scqh');
	lib.translate.scqh_card_config = lib.scqhExtension;
	return list;
});

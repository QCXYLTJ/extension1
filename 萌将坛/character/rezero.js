'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqhReZero_guibian: {
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
						if (event.color && get.color(card) != event.color) {
							return -1;
						}
						return 1;
					});
					next.judge2 = function (result) {
						return result.bool;
					};
					('step 1');
					var skill = event.name + '_temp';
					player.addTempSkill(skill);
					player.storage[skill] = result.color;
					if (result.card) player.gain(result.card, 'gain2');
					if (!event.color) event.color = result.color;
					else if (event.color != result.color) event.finish();
					('step 2');
					var str = get.translation(event.name);
					str += ':是否再次进行判定？';
					var next = player.chooseBool(str);
					next.set('frequentSkill', event.name);
					('step 3');
					if (result.bool) event.goto(0);
				},
				subSkill: {
					temp: {
						charlotte: true,
						enable: 'chooseToUse',
						position: 'hes',
						filterCard(card, player) {
							let color = player.storage.scqhReZero_guibian_temp;
							if (!color) return false;
							if (get.color(card) != color) return false;
							return true;
						},
						check(card) {
							let value = get.value(card);
							return 10 - value;
						},
						viewAsFilter(player) {
							let color = player.storage.scqhReZero_guibian_temp;
							if (!color) return false;
							let hs = player.getCards('hes', { color: color });
							if (!hs.length) return false;
							return true;
						},
						viewAs: {
							name: 'juedou',
						},
						ai: {
							order: 7,
							result: {
								player: 1,
							},
						},
					},
				},
			},
			scqhReZero_jifeng: {},
			scqhReZero_xiamu: {
				enable: ['chooseToUse', 'chooseToRespond'],
				hiddenCard(player, name) {
					if (!player.countCards('he')) return false;
					var cards = ui.cardPile.childNodes || [];
					var num = 2;
					for (var i = 1; i <= num; i++) {
						var card = cards[cards.length - i];
						if (card && card.name == name) return true;
					}
					return false;
				},
				filter(trigger, player) {
					var cards = ui.cardPile.childNodes || [];
					return cards.length && player.countCards('he');
				},
				chooseButton: {
					dialog(trigger, player) {
						var dialog = ui.create.dialog('遐目', 'hidden');
						var cards = ui.cardPile.childNodes || [];
						var num = 2;
						var list = [];
						for (var i = 1; i <= num; i++) {
							var card = cards[cards.length - i];
							if (card) list.add(card);
						}
						dialog.add(list);
						return dialog;
					},
					filter(button, player) {
						var evt = _status.event.parent;
						var card = button.link;
						return evt.filterCard(card, player, evt);
					},
					check(button) {
						return 1;
					},
					backup(links, player) {
						var card = links[0];
						return {
							link: card,
							filterCard(card) {
								return true;
							},
							selectCard: 1,
							position: 'he',
							viewAs: card,
							check(card) {
								return 10 - get.value(card);
							},
							precontent() {
								var cards = event.result.cards || [];
								if (cards.length) {
									game.log(player, '将', cards, '置于了牌堆顶');
									player.loseToDiscardpile(cards, ui.cardPile, 'visible', 'insert').log = false;
								}
								var card = lib.skill.scqhReZero_xiamu_backup.link;
								if (card) {
									event.result.card.cards = [card];
									event.result.cards = [card];
								}
							},
						};
					},
					prompt(links, player) {
						let card = lib.skill.scqhReZero_xiamu_backup.link;
						let prompt = '将一张牌置于牌堆顶,';
						prompt += _status.event.name == 'chooseToUse' ? '使用' : '打出';
						prompt += '牌堆底的';
						prompt += get.translation(card) || '';
						return prompt;
					},
				},
				ai: {
					respondSha: true,
					respondShan: true,
					save: true,
					skillTagFilter(player, tag, arg) {
						return player.countCards('he');
					},
					order(item, player) {
						return 5;
					},
					result: {
						player: 5,
					},
				},
			},
			scqhReZero_weifeng: {
				trigger: {
					source: 'damageSource',
					player: 'damageEnd',
				},
				usable: 2,
				logTarget(trigger, player) {
					let target = trigger.player;
					if (trigger.source && trigger.source != player) {
						target = trigger.source;
					}
					return target;
				},
				filter(trigger, player) {
					let target = lib.skill.scqhReZero_weifeng.logTarget(trigger, player);
					if (!target || !target.isAlive()) return false;
					let hs = player.getCards('h');
					let hss = target.getCards('h');
					let draw = Math.min(hss.length, 5);
					return draw > hs.length;
				},
				check(trigger, player) {
					return 1;
				},
				content() {
					var target = lib.skill.scqhReZero_weifeng.logTarget(trigger, player);
					var hss = target.getCards('h');
					var draw = Math.min(hss.length, 5);
					player.drawTo(draw);
				},
			},
			scqhReZero_guibian2: {
				inherit: 'scqhReZero_guibian',
				subSkill: {
					temp: {
						charlotte: true,
						enable: ['chooseToUse', 'chooseToRespond'],
						filter(trigger, player) {
							let color = player.storage['scqhReZero_guibian2_temp'];
							if (!color) return false;
							let list = ['juedou', 'sha'];
							for (let name of list) {
								let cardx = {};
								cardx.name = name;
								if (trigger && trigger.filterCard(cardx, player, trigger)) {
									if (name == 'juedou') {
										if (player.countCards('hes', (cardy) => get.color(cardy) == color)) return true;
									} else if (player.countCards('hes', (cardy) => get.color(cardy) == color)) return true;
								}
							}
							return false;
						},
						prompt(trigger) {
							let player = _status.event.player;
							let color = player.storage['scqhReZero_guibian2_temp'];
							let prompt = '';
							prompt += '将';
							prompt += get.translation(color) || '';
							prompt += '牌当做【决斗】、非';
							prompt += get.translation(color) || '';
							prompt += '牌当做【杀】使用或打出';
							return prompt;
						},
						position: 'hes',
						filterCard(card, player, trigger) {
							trigger = trigger || _status.event;
							let filter = trigger._backup.filterCard;
							let color = player.storage['scqhReZero_guibian2_temp'];
							if (!color) return false;
							let list = ['juedou', 'sha'];
							for (let name of list) {
								let cardx = {};
								cardx.name = name;
								card.cards = [card];
								if (filter(cardx, player, trigger)) {
									if (name == 'juedou') {
										if (get.color(card) == color) return true;
									} else if (get.color(card) != color) return true;
								}
							}
							return false;
						},
						check(card) {
							return 8 - get.value(card);
						},
						viewAs(card, player) {
							let color = player.storage['scqhReZero_guibian2_temp'];
							let name = color && get.color(card) == color ? 'juedou' : 'sha';
							if (name) return { name: name };
							return null;
						},
						ai: {
							order: 7,
							result: {
								player: 1,
							},
						},
					},
				},
			},
		},
		translate: {
			scqhReZero_guibian: '鬼变',
			scqhReZero_guibian_info: '准备阶段,你可以判定并获得判定牌,且你可以重复此流程,直到出现不同颜色的结果为止.若如此做,此回合内,你可以将与最后一次判定结果的颜色相同的牌当做【决斗】使用.',
			scqhReZero_jifeng: '棘锋',
			scqhReZero_jifeng_info: '.',
			scqhReZero_xiamu: '遐目',
			scqhReZero_xiamu_info: '当你需要使用或打出一张牌时,你可以观看牌堆底的两张牌,若其中有此牌,你可以将一张牌置于牌堆顶,使用或打出之.',
			scqhReZero_weifeng: '威风',
			scqhReZero_weifeng_info: '每回合限两次,当你造成或受到伤害后,你可以将手牌摸至Ｘ张(Ｘ为对方的手牌数,至多为５).',
			scqhReZero_guibian2: '鬼变',
			scqhReZero_guibian2_info: '准备阶段,你可以判定并获得判定牌,且你可以重复此流程,直到出现不同颜色的结果为止.若如此做,此回合内,你可以将与最后一次判定结果的颜色相同的牌当做【决斗】、颜色不同的牌当做【杀】使用或打出.',
		},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

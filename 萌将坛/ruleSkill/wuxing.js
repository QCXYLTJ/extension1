'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			_scqh_wuxing: {
				forced: true,
				trigger: {
					global: 'gameDrawBegin',
				},
				filter(event, player) {
					return ui.cardPile.childElementCount;
				},
				content() {
					'step 0';
					var config = lib.config['extension_' + lib.scqhExtension + '_wuxing'];
					var list = ['metal', 'wood', 'water', 'fire', 'soil'];
					for (var current of game.players) {
						if (current.node.wuxing) {
							current.node.wuxing.remove();
						}
						if (current.wunature) return;
						if (_status.video || _status.connectMode) return;
						var node = ui.create.div('.wunature', current);
						var nature = list.randomGet();
						current.wunature = nature;
						node.dataset.nature = nature;
						node.innerHTML = get.translation(nature);
						node.style.zIndex = '999';
						current.node.wuxing = node;
						game.log(current, '五行属', current.wunature);
						var skn = 'sew_nature_' + current.wunature;
					}
					('step 1');
					var config = lib.config['extension_' + lib.scqhExtension + '_wuxing'];
					var list = ['metal', 'wood', 'water', 'fire', 'soil'];
					get.cardPile2(function (card) {
						if (card.wunature) return;
						if (_status.video || _status.connectMode) return;
						if (Math.random() > (parseFloat(config) || 0)) return;
						var node = ui.create.div('.wunature', card);
						if (card.nature && list.includes(card.nature)) {
							var nature = card.nature;
						} else var nature = list.randomGet();
						card.wunature = nature;
						node.dataset.nature = nature;
						node.innerHTML = get.translation(nature);
						card.node.wuxing = node;
						if (!card.suit || !card.number) {
							card.node.wuxing.style.display = 'none';
						}
					});
				},
			},
			_scqh_wuxingshengke: {
				forced: true,
				popup: false,
				trigger: {
					target: 'useCardToBegin',
				},
				filter(event, player) {
					if (_status.connectMode) return false;
					return event.card && event.card.wunature && player.wunature;
				},
				content() {
					switch (trigger.card.wunature) {
						case 'metal': {
							switch (player.wunature) {
								case 'wood': {
									if (player.countCards('he')) {
										game.log(player, '被' + get.translation(trigger.card.wunature) + '属性的卡牌克制');
										var next = player.chooseToDiscard('你被金属性卡牌克制,需弃置一张牌', true, 'he');
										next.ai = get.disvalue;
										player.popup('金克木');
									}
									return;
								}
								case 'water': {
									game.log(player, '得到' + get.translation(trigger.card.wunature) + '属性卡牌的加成');
									player.draw();
									player.popup('金生水');
									return;
								}
							}
							return;
						}
						case 'wood': {
							switch (player.wunature) {
								case 'soil': {
									if (player.countCards('he')) {
										game.log(player, '被' + get.translation(trigger.card.wunature) + '属性的卡牌克制');
										var next = player.chooseToDiscard('你被木属性卡牌克制,需弃置一张牌', true, 'he');
										next.ai = get.disvalue;
										player.popup('木克土');
									}
									return;
								}
								case 'fire': {
									game.log(player, '得到' + get.translation(trigger.card.wunature) + '属性卡牌的加成');
									player.draw();
									player.popup('木生火');
									return;
								}
							}
							return;
						}
						case 'water': {
							switch (player.wunature) {
								case 'fire': {
									if (player.countCards('he')) {
										game.log(player, '被' + get.translation(trigger.card.wunature) + '属性的卡牌克制');
										var next = player.chooseToDiscard('你被水属性卡牌克制,需弃置一张牌', true, 'he');
										next.ai = get.disvalue;
										player.popup('水克火');
									}
									return;
								}
								case 'wood': {
									game.log(player, '得到' + get.translation(trigger.card.wunature) + '属性卡牌的加成');
									player.draw();
									player.popup('水生木');
									return;
								}
							}
							return;
						}
						case 'fire': {
							switch (player.wunature) {
								case 'metal': {
									if (player.countCards('he')) {
										game.log(player, '被' + get.translation(trigger.card.wunature) + '属性的卡牌克制');
										var next = player.chooseToDiscard('你被火属性卡牌克制,需弃置一张牌', true, 'he');
										next.ai = get.disvalue;
										player.popup('火克金');
									}
									return;
								}
								case 'soil': {
									game.log(player, '得到' + get.translation(trigger.card.wunature) + '属性卡牌的加成');
									player.draw();
									player.popup('火生土');
									return;
								}
							}
							return;
						}
						case 'soil': {
							switch (player.wunature) {
								case 'water': {
									if (player.countCards('he')) {
										game.log(player, '被' + get.translation(trigger.card.wunature) + '属性的卡牌克制');
										var next = player.chooseToDiscard('你被土属性卡牌克制,需弃置一张牌', true, 'he');
										next.ai = get.disvalue;
										player.popup('土克水');
									}
									return;
								}
								case 'metal': {
									game.log(player, '得到' + get.translation(trigger.card.wunature) + '属性卡牌的加成');
									player.draw();
									player.popup('土生金');
									return;
								}
							}
							return;
						}
					}
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							switch (card.wunature) {
								case 'metal':
									switch (target.wunature) {
										case 'wood':
											if (current != 0) return [1, -0.3];
											return;
										case 'water':
											if (current != 0) return [1, 0.3];
											return;
									}
									return;
								case 'wood':
									switch (target.wunature) {
										case 'soil':
											if (current != 0) return [1, -0.3];
											return;
										case 'fire':
											if (current != 0) return [1, 0.3];
											return;
									}
									return;
								case 'water':
									switch (target.wunature) {
										case 'fire':
											if (current != 0) return [1, -0.3];
											return;
										case 'wood':
											if (current != 0) return [1, 0.3];
											return;
									}
									return;
								case 'fire':
									switch (target.wunature) {
										case 'metal':
											if (current != 0) return [1, -0.3];
											return;
										case 'soil':
											if (current != 0) return [1, 0.3];
											return;
									}
									return;
								case 'soil':
									switch (target.wunature) {
										case 'water':
											if (current != 0) return [1, -0.3];
											return;
										case 'metal':
											if (current != 0) return [1, 0.3];
											return;
									}
									return;
							}
						},
					},
				},
			},
		},
		translate: {
			_scqh_wuxing: '五行生克',
			_scqh_wuxingshengke: '五行生克',
			_scqh_wuxingshengke_info: '<ul>金克木 金生水<br>木克土 木生火<br>水克火 水生木<br>火克金 火生土<br>土克水 土生金',
		},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

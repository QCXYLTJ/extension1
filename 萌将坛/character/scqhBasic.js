'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqhBasic_mihuo: {
				charlotte: true,
				forced: true,
				trigger: {
					global: ['gainAfter', 'loseAfter', 'phaseBegin'],
				},
				filter(trigger, player) {
					var cards = player.getCards('h');
					var suits = [];
					if (!cards.length) return false;
					for (var card of cards) suits.add(card.suit);
					return suits.length >= 5;
				},
				content() {
					game.over(player == game.me || winners.includes(game.me));
				},
				_priority: 0,
			},
			scqhBasic_huanbian: {
				charlotte: true,
				init(player, skill) {
					player.removeSkill(skill);
				},
			},
			scqhBasic_fenyin: {
				audio: 'fenyin_wufan',
				map(card, player) {
					var color = {};
					color.old = player.storage.scqhBasic_fenyin || 'none';
					color.now = (card ? get.color(card) : false) || 'none';
					color.draw = true;
					var list = [color.old, color.now];
					if (list.includes('none')) color.draw = false;
					if (color.old == color.now) color.draw = false;
					return color;
				},
				mod: {
					aiOrder(player, card, num) {
						if (typeof card == 'object') {
							var map = lib.skill.scqhBasic_fenyin.map(card, player);
							if (map.draw) return num + 10;
						}
					},
					maxHandcard(player, num) {
						var name = 'scqhBasic_fenyin';
						lib.translate[name + '_red'] = '奋音红';
						lib.translate[name + '_black'] = '奋音黑';
						player.removeGaintag(name + '_red');
						player.removeGaintag(name + '_black');
						player.getCards('h', function (card) {
							var map = lib.skill.scqhBasic_fenyin.map(card, player);
							if (map.draw) player.addGaintag(card, name + '_' + map.now);
						});
					},
				},
				global: 'scqhBasic_fenyin_global',
				subSkill: {
					global: {
						forced: true,
						trigger: {
							player: ['useCard', 'respond'],
						},
						filter(trigger, player) {
							if (!player.hasSkill('scqhBasic_fenyin')) return false;
							return true;
						},
						content() {
							var map = lib.skill.scqhBasic_fenyin.map(trigger.card, player);
							player.storage.scqhBasic_fenyin = map.now;
							if (map.draw) {
								player.draw();
							}
						},
						_priority: 0,
					},
				},
				_priority: 0,
			},
			scqhBasic_luanjiao: {
				enable: 'phaseUse',
				filter(trigger, player) {
					if (player.hasSkill('scqhBasic_luanjiao_ban')) return false;
					return game.hasPlayer((current) => {
						return player.canCompare(current);
					});
				},
				filterTarget(card, player, target) {
					return player.canCompare(target);
				},
				selectTarget() {
					return [1, Infinity];
				},
				multitarget: true,
				multiline: true,
				prompt() {
					return '与任意名角色依次拼点';
				},
				content() {
					var next = player.chooseToCompare(targets);
					next.callback = function () {
						var cardx = event.card2;
						var ip = get.position(cardx);
						if (['d', 'o'].includes(ip)) {
							var next = player.addToExpansion(cardx, 'gain2', player);
							next.gaintag.add('scqhBasic_luanjiao');
						}
						if (event.winner !== player) {
							player.chat('⸝⸝ ᷇࿀ ᷆⸝⸝被灌满了');
							player.addTempSkill('scqhBasic_luanjiao_ban');
						} else {
							player.chat('٩(๑ᵒ̴̶̷͈᷄ᗨᵒ̴̶̷͈᷅)و杂鱼杂鱼');
						}
					};
				},
				marktext: '癸',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				onremove(player) {
					var xs = player.getExpansions('scqhBasic_luanjiao');
					if (xs.length) {
						game.log(xs, '进入了弃牌堆');
						player.lose(xs, ui.discardPile);
						player.$throw(xs, xs.length);
					}
				},
				ai: {
					order: 1,
					result: {
						player(player, target) {
							var att = get.attitude(player, target);
							return att <= 0;
						},
					},
				},
				group: ['scqhBasic_luanjiao_draw'],
				subSkill: {
					draw: {
						forced: true,
						trigger: {
							player: 'drawBefore',
						},
						filter(trigger, player) {
							if (player.hasSkill('scqhBasic_luanjiao_ban')) return false;
							if (!trigger.num || trigger.num <= 0) return false;
							var xs = player.getExpansions('scqhBasic_luanjiao');
							return xs.length && xs.length >= trigger.num;
						},
						content() {
							'step 0';
							trigger.cancel();
							var xs = player.getExpansions('scqhBasic_luanjiao');
							if (xs.length > trigger.num) {
								var list = ['选' + get.cnNumber(trigger.num) + '张牌', xs];
								var next = player.chooseButton(trigger.num, list, true);
								next.set('ai', function (button) {
									var card = button.link;
									return get.value(card);
								});
							} else
								event._result = {
									bool: true,
									links: xs,
								};
							('step 1');
							var cards = result.links || [];
							if (cards.length) {
								player.gain(cards, 'draw');
							}
						},
						_priority: 0,
					},
					ban: {
						charlotte: true,
						init(player) {
							player.unmarkSkill('scqhBasic_luanjiao');
						},
						onremove: function (player) {
							player.unmarkSkill('scqhBasic_luanjiao_ban');
							var xs = player.getExpansions('scqhBasic_luanjiao');
							if (xs.length) player.markSkill('scqhBasic_luanjiao');
						},
						mark: true,
						marktext: '<span style="text-decoration: line-through;">癸</span>',
						intro: {
							mark(dialog, storage, player) {
								var xs = player.getExpansions('scqhBasic_luanjiao');
								if (xs.length) dialog.addAuto(xs);
								return '禁止涩涩!!';
							},
							markcount(storage, player) {
								var xs = player.getExpansions('scqhBasic_luanjiao');
								return xs.length;
							},
						},
						forced: true,
						trigger: {
							player: 'addToExpansionEnd',
						},
						filter(trigger, player) {
							var tag = trigger.gaintag || [];
							return tag.includes('scqhBasic_luanjiao');
						},
						content() {
							player.unmarkSkill('scqhBasic_luanjiao');
							player.markSkill('scqhBasic_luanjiao_ban');
						},
						_priority: 0,
					},
				},
				_priority: 0,
			},
			scqhBasic_zhajing: {
				forced: true,
				trigger: {
					global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				logTarget(trigger, player) {
					var gamers = game.filterPlayer((current) => {
						if (current == player) return false;
						if (current.countCards('h')) return false;
						var evt = trigger.getl(current);
						return evt && evt.hs && evt.hs.length;
					});
					return gamers;
				},
				filter(trigger, player) {
					var gamers = lib.skill.scqhBasic_zhajing.logTarget(trigger, player) || [];
					return gamers.length;
				},
				content: function () {
					var gamers = lib.skill.scqhBasic_zhajing.logTarget(trigger, player) || [];
					for (var current of gamers) {
						current.loseHp();
						player.recover();
					}
				},
				ai: {
					threaten: 0.8,
				},
				_priority: 0,
			},
		},
		translate: {
			scqhBasic_mihuo: '迷惑',
			scqhBasic_mihuo_info: '当你凑齐五种不同花色的手牌时,你所在的阵营获得游戏胜利.',
			scqhBasic_huanbian: '幻变',
			scqhBasic_huanbian_info: ['每次启动游戏后,随机更换武将原画.'].join('</br>'),
			scqhBasic_luanjiao: '乱交',
			scqhBasic_luanjiao_info: '出牌阶段,你可以与任意名角色同时拼点,将对方的拼点牌置于你的武将牌上,称为「癸」;若你没赢,则此技能于本回合内失效.你每次摸牌改为获得相同数量的「癸」.',
			scqhBasic_fenyin: '奋音',
			scqhBasic_fenyin_info: '锁定技,当你使用或打出一张牌时,此牌的颜色若与你使用或打出的上一张牌的颜色不同,你摸一张牌.',
			scqhBasic_zhajing: '榨精',
			scqhBasic_zhajing_info: '锁定技,其他角色于你的回合内失去最后的手牌后,令其流失一点体力,你回复一点体力.',
		},
	};
	for (var i in list.skill) {
		if (typeof list.skill[i]._priority != 'number') {
			list.skill[i]._priority = Math.random();
		}
		if (list.skill[i].subSkill) {
			for (var j in list.skill[i].subSkill) {
				if (typeof list.skill[i].subSkill[j]._priority != 'number') {
					list.skill[i].subSkill[j]._priority = Math.random();
				}
			}
		}
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info'], list.translate[i + '_append']);
	}
	for (var i in list.translate) {
		lib.translate[i] = list.translate[i];
	}
};

'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			_scqh_dieAudio: {
				forced: true,
				forceDie: true,
				popup: false,
				charlotte: true,
				silent: true,
				trigger: {
					player: 'dieBegin',
				},
				filter(event, player) {
					if (!player.name) return false;
					for (var i in lib.characterPack.scqh) {
						if (player.name == i) return true;
					}
					return false;
				},
				content() {
					var name = player.name + '_die.mp3';
					game.playAudio('../extension/萌将坛/audio/die', name);
				},
			},
			_scqh_Hand: {
				hand(player) {
					var hand = player.scqh_Status().hand || 0;
					var cards = player.getCards('s', (card) => card.hasGaintag('scqh_Hand'));
					var num = cards.length - hand;
					return num > 0 ? num : 0;
				},
				forced: true,
				trigger: {
					player: 'phaseAfter',
				},
				filter(event, player) {
					var num = lib.skill._scqh_Hand.hand(player) || 0;
					return num > 0;
				},
				content() {
					'step 0';
					var num = lib.skill._scqh_Hand.hand(player) || 0;
					if (num > 0) {
						var next = player.chooseToDiscard('s', [1, num]);
						next.set('filterCard', function (card) {
							return card.hasGaintag('scqh_Hand');
						});
					} else event.finish();
					('step 1');
					event.goto(0);
				},
			},
			_scqh_loseSp2: {
				sp(event, player) {
					var list = [];
					for (const i of event.cards) {
						if (get.position(i, true) == 'd') {
							if (i.storage && i.storage.scqh_print) {
								list.add(i);
							}
						}
					}
					return list;
				},
				forced: true,
				trigger: {
					player: 'loseAfter',
				},
				filter(event, player) {
					if (!event.cards.length) return false;
					var list = lib.skill['_scqh_loseSp2'].sp(event, player) || [];
					return list.length;
				},
				content() {
					var list = lib.skill[event.name].sp(trigger, player) || [];
					if (list.length) game.cardsGotoSpecial(list);
				},
			},
			_scqh_Graveyard: {
				GY(event, player) {
					var list = [];
					for (const i of event.cards) {
						if (get.position(i, true) == 'd') {
							if (lib.card[i.name].scqh_Graveyard) {
								list.add(i);
							}
						}
					}
					return list;
				},
				forced: true,
				trigger: {
					player: 'loseEnd',
				},
				filter(event, player) {
					if (!event.cards.length) return false;
					var list = lib.skill._scqh_Graveyard.GY(event, player) || [];
					return list.length;
				},
				content() {
					var list = lib.skill[event.name].GY(trigger, player) || [];
					if (list.length) player.scqh_sendTo('GY', list);
				},
			},
			_scqh_Destroyed: {
				yes(player, cards) {
					var list = [];
					for (const i of cards) {
						let xs = player.getCards('x');
						if (!xs.includes(i)) continue;
						let card = lib.card[i.name];
						if (!card) continue;
						if (!card.scqh_filter) continue;
						if (!card.scqh_content) continue;
						if (!card.scqh_Destroyed) continue;
						if (!card.scqh_filter(player, i)) continue;
						list.add(i);
					}
					return list;
				},
				forced: true,
				trigger: {
					player: 'addToExpansionAfter',
				},
				filter(event, player) {
					if (event.gaintag != 'scqh_Graveyard') return false;
					var list = lib.skill._scqh_Destroyed.yes(player, event.cards) || [];
					return list.length;
				},
				content() {
					'step 0';
					event.list = lib.skill[event.name].yes(player, trigger.cards) || [];
					('step 1');
					var list = lib.skill[event.name].yes(player, event.list) || [];
					if (!list.length) return;
					var next = player.chooseButton(['选择一张卡牌', list]);
					next.set('ai', function (button) {
						var player = _status.event.player;
						return 1;
					});
					('step 2');
					if (result.links?.length) {
						var card = result.links[0];
						event.list.remove(card);
						var next = game.createEvent(card.name);
						next.player = player;
						next.card = card;
						next.setContent(lib.card[card.name].scqh_content);
					} else event.finish();
					('step 3');
					if (event.list.length) event.goto(1);
				},
			},
			scqh_蓄意技: {},
			_scqhRule_伐谋: {
				limited: true,
				log: false,
				popup: false,
				enable: 'phaseUse',
				filter(event, player) {
					var currents = game.filterPlayer(function (current) {
						var skills = current.getSkills(null, false, false).filter(function (skill) {
							var info = get.info(skill);
							return info && info.scqh_chargeSkill;
						});
						return skills.length;
					});
					if (!currents.length) return false;
					if (player.countMark('charge') >= 7) return true;
					if (player.countMark('charge') == 4) {
						var targets = game.filterPlayer(function (current) {
							return current.countDiscardableCards(player, 'ej');
						});
						if (targets.length) return true;
					}
					return false;
				},
				content() {
					'step 0';
					var list = [];
					if (player.countMark('charge') >= 4) {
						var currents = game.filterPlayer(function (current) {
							return current.countDiscardableCards(player, 'ej');
						});
						if (currents.length) list.push('4');
					}
					if (player.countMark('charge') >= 7) {
						list.push('7');
					}
					if (player.countMark('charge') >= 10) {
						list.push('10');
					}
					list.push('取消');
					var next = player.chooseControl(list);
					next.set('ai', function () {
						return 0;
					});
					('step 1');
					if (result.control == '4') {
						event.num = 4;
						var str = '是否扣去4点蓄力值,弃置一名角色场上的一张牌？';
						var next = player.chooseTarget(str, function (card, player, target) {
							return target.countDiscardableCards(player, 'ej');
						});
						next.set('ai', (target) => {
							var player = _status.event.player;
							return get.effect(target, { name: 'guohe' }, player, player);
						});
					} else if (result.control == '10') {
						event.num = 10;
						var str = '是否扣去10点蓄力值,对一名角色造成一点伤害？';
						var next = player.chooseTarget(str);
						next.set('ai', (target) => {
							return get.damageEffect(target, _status.event.player);
						});
					} else if (result.control == '7') {
						player.removeMark('charge', 7);
						player.draw();
						event.finish();
					} else event.finish();
					('step 2');
					if (result.targets?.length) {
						var target = result.targets[0];
						player.removeMark('charge', event.num);
						if (event.num == 4) player.discardPlayerCard(target, 'ej', true);
						if (event.num == 10) target.damage(player);
					}
				},
			},
		},
		translate: {
			scqh_蓄意技: '蓄意技',
			_scqhRule_伐谋: '伐谋',
			_scqhRule_伐谋_info: '只要场上存在拥有蓄意技的角色,出牌阶段,你可以扣去:①四点蓄力值,弃置一名角色场上的一张牌;②七点蓄力值,摸一张牌;③十点蓄力值,对一名角色造成一点伤害.',
		},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

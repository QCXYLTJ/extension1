'use strict';
window.Sacredimport(function (lib, game, ui, gecaai, _status) {
	game.import('card', function () {
		var CCcard = {
			name: 'CCcard',
			connect: true,
			//------------------------------------------------------阶级♟--------------------------------------------------------//
			card: {
				SaberChess: {
					fullimage: true,
					image: "ext:命运·冠位指定/chess/SaberChess.jpg",
					type: 'classchess',
					enable: true,
					selectTarget: -1,
					cardcolor: 'red',
					toself: true,
					filterTarget(card, player, target) {
						return target == player;
					},
					modTarget: true,
					content() {
						if (player.storage.Saber && player.storage.Saber < 3) {
							player.storage.Saber++;
							for (var i = 0; i < player.node.marks.childNodes.length; i++) {
								if (player.node.marks.childNodes[i].name == 'Saber') {
									player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Saber_' + (player.storage.Saber - 1) + '.png');
									player.node.marks.childNodes[i].innerHTML = '';
								}
							}
						} else target.draw(2);
					},
					ai: {
						basic: {
							order: 7.2,
							useful: 4.5,
							value: 9.2
						},
						result: {
							target: 2,
						},
						tag: {
							draw: 2
						}
					}
				},
				ArcherChess: {
					fullimage: true,
					image: "ext:命运·冠位指定/chess/ArcherChess.jpg",
					type: 'classchess',
					enable: true,
					selectTarget: -1,
					cardcolor: 'red',
					toself: true,
					filterTarget(card, player, target) {
						return target == player;
					},
					modTarget: true,
					content() {
						if (player.storage.Archer && player.storage.Archer < 3) {
							player.storage.Archer++;
							for (var i = 0; i < player.node.marks.childNodes.length; i++) {
								if (player.node.marks.childNodes[i].name == 'Archer') {
									player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Archer_' + (player.storage.Archer - 1) + '.png');
									player.node.marks.childNodes[i].innerHTML = '';
								}
							}
						} else target.draw(2);
					},
					ai: {
						basic: {
							order: 7.2,
							useful: 4.5,
							value: 9.2
						},
						result: {
							target: 2,
						},
						tag: {
							draw: 2
						}
					}
				},
				LancerChess: {
					fullimage: true,
					image: "ext:命运·冠位指定/chess/LancerChess.jpg",
					type: 'classchess',
					enable: true,
					selectTarget: -1,
					cardcolor: 'red',
					toself: true,
					filterTarget(card, player, target) {
						return target == player;
					},
					modTarget: true,
					content() {
						if (player.storage.Lancer && player.storage.Lancer < 3) {
							player.storage.Lancer++;
							for (var i = 0; i < player.node.marks.childNodes.length; i++) {
								if (player.node.marks.childNodes[i].name == 'Lancer') {
									player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Lancer_' + (player.storage.Lancer - 1) + '.png');
									player.node.marks.childNodes[i].innerHTML = '';
								}
							}
						} else target.draw(2);
					},
					ai: {
						basic: {
							order: 7.2,
							useful: 4.5,
							value: 9.2
						},
						result: {
							target: 2,
						},
						tag: {
							draw: 2
						}
					}
				},
				CasterChess: {
					fullimage: true,
					image: "ext:命运·冠位指定/chess/CasterChess.jpg",
					type: 'classchess',
					enable: true,
					selectTarget: -1,
					cardcolor: 'red',
					toself: true,
					filterTarget(card, player, target) {
						return target == player;
					},
					modTarget: true,
					content() {
						if (player.storage.Caster && player.storage.Caster < 3) {
							player.storage.Caster++;
							for (var i = 0; i < player.node.marks.childNodes.length; i++) {
								if (player.node.marks.childNodes[i].name == 'Caster') {
									player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Caster_' + (player.storage.Caster - 1) + '.png');
									player.node.marks.childNodes[i].innerHTML = '';
								}
							}
						} else target.draw(2);
					},
					ai: {
						basic: {
							order: 7.2,
							useful: 4.5,
							value: 9.2
						},
						result: {
							target: 2,
						},
						tag: {
							draw: 2
						}
					}
				},
				RiderChess: {
					fullimage: true,
					image: "ext:命运·冠位指定/chess/RiderChess.jpg",
					type: 'classchess',
					enable: true,
					selectTarget: -1,
					cardcolor: 'red',
					toself: true,
					filterTarget(card, player, target) {
						return target == player;
					},
					modTarget: true,
					content() {
						if (player.storage.Rider && player.storage.Rider < 3) {
							player.storage.Rider++;
							for (var i = 0; i < player.node.marks.childNodes.length; i++) {
								if (player.node.marks.childNodes[i].name == 'Rider') {
									player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Rider_' + (player.storage.Rider - 1) + '.png');
									player.node.marks.childNodes[i].innerHTML = '';
								}
							}
						} else target.draw(2);
					},
					ai: {
						basic: {
							order: 7.2,
							useful: 4.5,
							value: 9.2
						},
						result: {
							target: 2,
						},
						tag: {
							draw: 2
						}
					}
				},
				AssassinChess: {
					fullimage: true,
					image: "ext:命运·冠位指定/chess/AssassinChess.jpg",
					type: 'classchess',
					enable: true,
					selectTarget: -1,
					cardcolor: 'red',
					toself: true,
					filterTarget(card, player, target) {
						return target == player;
					},
					modTarget: true,
					content() {
						if (player.storage.Assassin && player.storage.Assassin < 3) {
							player.storage.Assassin++;
							for (var i = 0; i < player.node.marks.childNodes.length; i++) {
								if (player.node.marks.childNodes[i].name == 'Assassin') {
									player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Assassin_' + (player.storage.Assassin - 1) + '.png');
									player.node.marks.childNodes[i].innerHTML = '';
								}
							}
						} else target.draw(2);
					},
					ai: {
						basic: {
							order: 7.2,
							useful: 4.5,
							value: 9.2
						},
						result: {
							target: 2,
						},
						tag: {
							draw: 2
						}
					}
				},
				BerserkerChess: {
					fullimage: true,
					image: "ext:命运·冠位指定/chess/BerserkerChess.jpg",
					type: 'classchess',
					enable: true,
					selectTarget: -1,
					cardcolor: 'red',
					toself: true,
					filterTarget(card, player, target) {
						return target == player;
					},
					modTarget: true,
					content() {
						if (player.storage.Berserker && player.storage.Berserker < 3) {
							player.storage.Berserker++;
							for (var i = 0; i < player.node.marks.childNodes.length; i++) {
								if (player.node.marks.childNodes[i].name == 'Berserker') {
									player.node.marks.childNodes[i].setBackgroundImage('extension/命运·冠位指定/grade/Berserker_' + (player.storage.Berserker - 1) + '.png');
									player.node.marks.childNodes[i].innerHTML = '';
								}
							}
						} else target.draw(2);
					},
					ai: {
						basic: {
							order: 7.2,
							useful: 4.5,
							value: 9.2
						},
						result: {
							target: 2,
						},
						tag: {
							draw: 2
						}
					}
				},
			},
			skill: {
				_chessgain: {
					trigger: {
						player: "die",
					},
					forced: true,
					forceDie: true,
					filter(event, player) {
						return event.source != undefined && ['Saber', 'Archer', 'Lancer', 'Caster', 'Rider', 'Assassin', 'Berserker'].includes(player.storage.FClass);
					},
					forced: true,
					silent: true,
					content() {
						var classchess = player.storage.FClass + 'Chess';
						var card = game.createCard2(classchess);
						trigger.source.$gain2(card);
						trigger.source.gain(card);
					},
				}
			},
			translate: {
				classchess: "西洋棋子",
				'SaberChess': "剑阶棋子",
				'SaberChess_info': "对应阶级升一阶,否则摸两张牌",
				'ArcherChess': "弓阶棋子",
				'ArcherChess_info': "对应阶级升一阶,否则摸两张牌",
				'LancerChess': "枪阶棋子",
				'LancerChess_info': "对应阶级升一阶,否则摸两张牌",
				'CasterChess': "术阶棋子",
				'CasterChess_info': "对应阶级升一阶,否则摸两张牌",
				'RiderChess': "骑阶棋子",
				'RiderChess_info': "对应阶级升一阶,否则摸两张牌",
				'AssassinChess': "杀阶棋子",
				'AssassinChess_info': "对应阶级升一阶,否则摸两张牌",
				'BerserkerChess': "狂阶棋子",
				'BerserkerChess_info': "对应阶级升一阶,否则摸两张牌",
			},
		};
		lib.translate['CCcard_card_config'] = '阶级棋子';
		lib.config.all.cards.add('CCcard');
		lib.config.cards.add('CCcard');
		return CCcard;
	});
});
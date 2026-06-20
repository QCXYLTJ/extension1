'use strict';
game.import('card', function (lib, game, ui, get, ai, _status) {
	var list = {
		name: 'scqhLOL',
		connect: true,
		card: {
			scqhCard_护盾: {
				type: 'delay',
				filterTarget: true,
				judge(card) {
					return 0;
				},
				effect() { },
				ai: {
					basic: {
						order: 1,
						useful: 1,
						value: 4,
					},
					result: {
						target: 1,
					},
				},
				selectTarget: 1,
				enable: true,
				content() {
					target.addJudge(card, cards);
				},
				allowMultiple: false,
				fullskin: true,
			},
		},
		skill: {
			_scqhCard_护盾_skill: {
				forced: true,
				trigger: {
					player: ['phaseJudgeBegin', 'changeHpBefore'],
				},
				filter(trigger, player) {
					var js = player.getCards('j', 'scqhCard_护盾');
					if (!js.length) return false;
					if (trigger.name == 'changeHp') {
						if (trigger.num >= 0) return false;
					}
					return true;
				},
				content() {
					'step 0';
					var cards = [];
					var js = player.getCards('j', 'scqhCard_护盾');
					if (trigger.name == 'changeHp') {
						for (var card of js) {
							if (trigger.num >= 0) break;
							cards.add(card);
							trigger.num++;
						}
					} else cards = js;
					if (cards.length) player.discard(cards);
				},
			},
		},
		translate: {
			_scqhCard_护盾_skill: '护盾',
			scqhCard_护盾: '护盾',
			scqhCard_护盾_info: '判定阶段,你弃置判定区内的此牌.当你的体力减少时,移去等量的【护盾】,抵消等量的掉血效果.',
		},
		list: [],
	};
	for (var i in list.card) {
		if (typeof list.card[i].image != 'string') {
			list.card[i].image = 'ext:' + lib.scqhExtension + '/card/' + i + '.png';
		}
	}
	lib.config.all.cards.add('scqhLOL');
	lib.config.cards.add('scqhLOL');
	lib.translate.scqhLOL_card_config = lib.scqhExtension;
	return list;
});

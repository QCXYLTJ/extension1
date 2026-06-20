'use strict';
game.import('card', function (lib, game, ui, get, ai, _status) {
	var list = {
		name: 'scqhAcg',
		connect: true,
		card: {
			scqhCard_eye: {
				type: 'equip',
				subtype: 'equip5',
				enable: true,
				filterTarget: true,
				selectTarget: 1,
				content() { },
				allowMultiple: false,
				fullskin: true,
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
			},
		},
		skill: {
			scqhCard_eye_skill: {
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
				ai: {
					nohujia: true,
				},
			},
		},
		translate: {
			scqhCard_eye: '塞巴斯蒂安之瞳',
			scqhCard_eye_info: '锁定技,你的护甲失效.当一名角色获得牌后,你获得Ｘ点护甲(Ｘ为这些牌的点数之和).',
			scqhCard_eye_skill: '塞巴斯蒂安之瞳',
		},
		list: [],
	};
	for (var i in list.card) {
		if (typeof list.card[i].image != 'string') {
			list.card[i].image = 'ext:' + lib.scqhExtension + '/card/' + i + '.png';
		}
	}
	lib.config.all.cards.add('scqhAcg');
	lib.config.cards.add('scqhAcg');
	lib.translate.scqhAcg_card_config = lib.scqhExtension;
	return list;
});

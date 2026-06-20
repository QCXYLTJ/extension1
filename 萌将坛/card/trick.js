'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			_scqh_hudun_skill: {
				forced: true,
				trigger: {
					player: 'damageBegin4',
				},
				filter(trigger, player) {
					var js = player.getCards('j', 'scqh_hudun');
					if (!js.length) return false;
					if (trigger.num <= 0) return false;
					return true;
				},
				content() {
					var cards = [];
					var js = player.getCards('j', 'scqh_hudun');
					for (let card of js) {
						trigger.num -= 1;
						cards.add(card);
						if (trigger.num <= 0) break;
					}
					if (cards.length) player.discard(cards);
				},
			},
		},
		translate: {
			_scqh_hudun_skill: '护盾',
		},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

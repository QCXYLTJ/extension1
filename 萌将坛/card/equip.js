'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqh_zhenjian_skill: {
				audio: 'qinggang_skill',
				forced: true,
				charlotte: true,
				equipSkill: true,
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(trigger, player) {
					var evt = trigger.getl(player);
					return evt && evt.es && evt.es.some((card) => card.name == 'scqh_zhenjian');
				},
				content() {
					var evt = trigger.getl(player);
					evt.es.forEach((card) => {
						if (card.name == 'scqh_zhenjian') {
							player.useSkill('yingjian');
						}
					});
				},
			},
		},
		translate: {
			scqh_zhenjian_skill: '真剑师之剑',
		},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

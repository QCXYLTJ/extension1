'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			_scqhYgo_init: {
				forced: true,
				trigger: {
					global: 'phaseBefore',
					player: 'enterGame',
				},
				filter(trigger, player) {
					let enable = lib.config['extension_' + lib.scqhExtension + '_ygo'];
					return enable && (trigger.name != 'phase' || game.phaseNumber == 0);
				},
				content() {
					player.scqh_changeStatus('hp', 4000);
				},
			},
		},
		translate: {},
	};
	for (var i in list.skill) {
		if (!list.skill[i]._priority) list.skill[i]._priority = Math.random();
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

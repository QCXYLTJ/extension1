'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			_scqh_time: {
				_priority: -500,
				forced: true,
				trigger: {
					player: 'phaseUseBegin',
				},
				filter(trigger, player) {
					if (player.forceCountChoose && player.forceCountChoose.phaseUse) return false;
					let time = lib.config['extension_' + lib.scqhExtension + '_time'];
					return time && time != 'Infinity';
				},
				content() {
					game.broadcastAll(function (player) {
						let time = lib.config['extension_' + lib.scqhExtension + '_time'];
						let num = Number(time);
						player.storage.scqh_time = num;
						player.forceCountChoose = { phaseUse: num };
					}, player);
					trigger.scqh_time = true;
				},
			},
			_scqh_time2: {
				forced: true,
				trigger: {
					player: 'phaseUseEnd',
				},
				filter(trigger, player, name) {
					return trigger.scqh_time && player.storage.scqh_time;
				},
				content() {
					game.broadcastAll(function (player) {
						delete player.storage.scqh_time;
						delete player.forceCountChoose;
					}, player);
				},
			},
			_scqh_time3: {
				forced: true,
				trigger: {
					player: 'useCard',
				},
				filter(trigger, player, name) {
					let evt = trigger.getParent('phaseUse');
					return evt && evt.scqh_time && player.storage.scqh_time;
				},
				content() {
					if (player.forceCountChoose.phaseUse == 1) {
						let evt = trigger.getParent('phaseUse');
						if (evt && evt.name) evt.skipped = true;
					} else
						game.broadcastAll(function (player) {
							player.storage.scqh_time -= 1;
							player.forceCountChoose.phaseUse = player.storage.scqh_time;
						}, player);
				},
			},
		},
		translate: {},
	};
	for (var i in list.skill) {
		if (typeof list.skill[i]._priority != 'number') {
			list.skill[i]._priority = Math.random();
		}
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

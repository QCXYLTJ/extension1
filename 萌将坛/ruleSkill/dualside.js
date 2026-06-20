'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqhDualside: {
				marktext: '双面',
			},
			_scqh_dualside_init: {
				charlotte: true,
				silent: true,
				forced: true,
				popup: false,
				trigger: {
					global: 'phaseBefore',
				},
				isDualside(player) {
					let list = [];
					if (player.name) list.add(player.name);
					if (player.name1) list.add(player.name1);
					if (player.name2) list.add(player.name2);
					return list.filter((name) => {
						if (!name || !name.includes('scqh')) return false;
						let info = lib.character[name];
						if (!info || !info[4] || !Array.isArray(info[4])) return false;
						for (let str of info[4]) {
							if (!str.startsWith('dualside:')) continue;
							let name2 = str.slice(9);
							let info2 = lib.character[name2];
							if (!info2) continue;
							return true;
						}
						return false;
					});
				},
				filter(trigger, player) {
					if (game.phaseNumber != 0) return false;
					let map = lib.skill._scqh_dualside_init || {};
					let list = map.isDualside(player) || [];
					return map && list && list.length;
				},
				content() {
					let map = lib.skill._scqh_dualside_init || {};
					let nameList = map.isDualside(player) || [];
					player.storage.scqhDualside = {};
					let cfg = player.storage.scqhDualside;
					for (let name of nameList) {
						let info = lib.character[name];
						if (!cfg.name1) cfg.name1 = name;
						else cfg.name2 = name;
						cfg.hp = player.hp;
						cfg.maxHp = player.maxHp;
						for (let str of info[4]) {
							if (!str.startsWith('dualside:')) continue;
							let name2 = str.slice(9);
							let info2 = lib.character[name2];
							if (!info2) continue;
							if (!cfg.name1_turn) cfg.name1_turn = name2;
							else cfg.name2_turn = name2;
							if (!cfg.hp2) cfg.hp2 = get.infoHp(info2[2]);
							if (!cfg.maxHp2) cfg.maxHp2 = get.infoMaxHp(info2[2]);
						}
					}
					if (get.mode() == 'guozhan') {
						if (player.name1 == cfg.name1) {
							player.showCharacter(0);
						} else {
							player.showCharacter(1);
						}
					}
					map.markSkillCharacter(player, false);
				},
				markSkillCharacter(player, turned) {
					let cfg = player.storage.scqhDualside;
					let map = {};
					map.a = '正面';
					map.turn = '';
					map.hp = '';
					if (!turned) {
						map.a = '背面';
						map.turn = '_turn';
						map.hp = '2';
					}
					let string = '主将:';
					string += get.translation(cfg['name1' + map.turn]);
					if (cfg['name2' + map.turn]) {
						string += '<br/>副将:';
						string += get.translation(cfg['name2' + map.turn]);
					}
					string += '<br/>当前体力:';
					string += cfg['hp' + map.hp];
					string += '/';
					string += cfg['maxHp' + map.hp];
					player.markSkillCharacter('scqhDualside', player, map.a, string);
				},
				_priority: 1,
			},
			_scqh_dualside_turn: {
				charlotte: true,
				silent: true,
				forced: true,
				popup: false,
				trigger: {
					player: ['turnOverAfter', 'dieBefore'],
				},
				filter(trigger, player) {
					let cfg = player.storage.scqhDualside;
					if (!cfg || cfg.over) return false;
					return true;
				},
				content() {
					var cfg = player.storage.scqhDualside;
					var bool = player.isTurnedOver();
					if (trigger.name == 'die') {
						bool = !bool;
					}
					if (bool) {
						cfg.hp = player.hp;
						cfg.maxHp = player.maxHp;
						player.reinit(cfg.name1, cfg.name1_turn, [cfg.hp2, cfg.maxHp2]);
						if (cfg.name2) {
							player.reinit(cfg.name2, cfg.name2_turn, [cfg.hp2, cfg.maxHp2]);
						}
					} else {
						cfg.hp2 = player.hp;
						cfg.maxHp2 = player.maxHp;
						player.reinit(cfg.name1_turn, cfg.name1, [cfg.hp, cfg.maxHp]);
						if (cfg.name2) {
							player.reinit(cfg.name2_turn, cfg.name2, [cfg.hp, cfg.maxHp]);
						}
					}
					player.unmarkSkill('scqhDualside');
					let map = lib.skill._scqh_dualside_init || {};
					map.markSkillCharacter(player, bool);
					if (trigger.name == 'die') {
						trigger.cancel();
						cfg.over = true;
						player.unmarkSkill('scqhDualside');
					}
				},
				_priority: 1,
			},
		},
		translate: {
			_scqh_dualside_init: '双面',
			_scqh_dualside_turn: '双面',
		},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

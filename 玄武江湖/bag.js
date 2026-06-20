'use strict';
window.xwImport(function (lib, game, ui, get, ai, _status) {
	lib.xwThings = {
		'changecard': {
			name: '换牌卡',
			usable: false,
			countable: true,
		}
	};
	if (!lib.config.xwbag) {
		lib.config.xwbag = {};
	}
	game.xwbag = {
		listThings() {
			if (lib.config.xwbag) {
				return Object.keys(lib.config.xwbag);
			}
			return [];
		},
		thingCountable(name) {
			var thing = lib.xwThings[name];
			return thing && thing.countable;
		},
		syncConfig() {
			if (lib.config.xwbag) {
				game.saveConfig('xwbag', lib.config.xwbag);
			} else {
				game.saveConfig('xwbag', {});
			}
		},
		thingLimit(name) {
			if (!game.xwbag.thingCountable(name)) {
				return 1;
			}
			var thing = lib.xwThings[name];
			if (thing.max) {
				if (typeof thing.max == 'function') {
					return thing.max();
				}
				return thing.max;
			}
			return Infinity;
		},
		countThing(name) {
			var count = lib.config.xwbag[name];
			if (!count) return 0;
			return count;
		},
		hasThing(name) {
			return game.xwbag.countThing(name) > 0;
		},
		addThing(name, num, banner) {
			if (num === 0) return;
			if (num == undefined) {
				num = 1;
			}
			if (num < 0) return;
			if (lib.xwThings[name]) {
				var limit = game.xwbag.thingLimit(name);
				var count = game.xwbag.countThing(name);
				if (count + num > limit) {
					num = limit - count;
				}
				if (num <= 0) return;
				lib.config.xwbag[name] = count + num;
				game.xwbag.syncConfig();
				if (banner) {
					window.xwShowBanner("获得" + lib.xwThings[name].name + "x" + num);
				}
			}
		},
		removeThing(name, num, banner) {
			if (num === 0) return;
			if (num == undefined) {
				num = game.xwbag.countThing(name);
			}
			if (num <= 0) return;
			if (lib.xwThings[name]) {
				var count = game.xwbag.countThing(name);
				if (count - num < 0) {
					num = count;
				}
				lib.config.xwbag[name] = count - num;
				if (lib.config.xwbag[name] == 0) {
					delete lib.config.xwbag[name];
				}
				if (banner) {
					window.xwShowBanner("失去" + lib.xwThings[name].name + "x" + num);
				}
				game.xwbag.syncConfig();
			}
		},
	};
});
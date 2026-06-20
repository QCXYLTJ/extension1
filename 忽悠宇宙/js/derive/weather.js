'use strict';
console.log('载入derive/weather.js')
//—————————————————————————————————————————天气系统———————————————————————————————————————————//
window.hyyzImport(function (lib, game, ui, get, ai, _status) {
	//库
	lib.weather = [
		'hyyz_fine',
		'hyyz_rain',
		'hyyz_fog',
		'hyyz_sun',
		'hyyz_windy',
		'hyyz_thunder',
	]
	//事件,改变天气=(目标天气)
	game.changeWeather = function (to) {
		if (game.weather != undefined) {
			var str0 = '由' + '<span class=\'yellowtext\'>' + lib.translate[game.weather] + '</span>';
		} else {
			var str0 = '';
		}
		if (!to || to == undefined) {
			to = lib.weather.randomGet();//总类别
		}
		game.weather = to;
		game.broadcastAll() + ui.background.setBackgroundImage("extension/忽悠宇宙/image/background/" + to.slice(5) + ".jpg");
		game.log('#g天气', str0, '切换为了', '#y' + lib.translate[to]);
	};
	//每轮自动切换
	lib.skill._weather = {
		forced: true,
		priority: Infinity,
		popup: false,
		trigger: {
			global: "roundStart",
		},
		filter(event, player) {
			if (player.seatNum != 1) return false;
			return game.weather != undefined;
		},
		content() {
			game.changeWeather();
		},
	};
	lib.translate.hyyz_fine = "晴天";
	lib.translate._hyyz_sun = "烈日";
	lib.translate.hyyz_sun = "烈日";
	lib.skill._hyyz_sun = {
		name: '烈日',
		description: "准备阶段,除非弃置一张红色手牌,否则受到1点火焰伤害.",
		forced: true,
		priority: Infinity,
		popup: false,
		trigger: {
			player: 'phaseZhunbeiBegin'
		},
		filter(event, player) {
			return game.weather && game.weather == 'hyyz_sun';
		},
		content() {
			'step 0'
			game.log('#y======烈日======')
			player.chooseToDiscard('烈日:弃置一张红色手牌,否则受到1点火焰伤害', 'h', { color: "red" }).set('ai', card => 8 - get.value(card));
			'step 1'
			if (!result.bool) {
				player.damage('fire', 'nosource').storage = {
					weather: 'hyyz_sun',
				}
			}
		},
	};
	lib.translate._hyyz_fog = "大雾";
	lib.translate.hyyz_fog = "大雾";
	lib.skill._hyyz_fog = {
		name: '大雾',
		description: "计算与其他角色的距离+1.",
		forced: true,
		priority: Infinity,
		popup: false,
		mod: {
			globalFrom(from, to, distance) {
				if (game.weather && game.weather == 'hyyz_fog') return distance + 2;
			},
		}
	};
	lib.translate._hyyz_rain = "雷雨";
	lib.translate.hyyz_rain = "雷雨";
	lib.skill._hyyz_rain = {
		name: '雷雨',
		description: "使用或打出基本牌时,须弃置一张手牌.",
		forced: true,
		priority: Infinity,
		popup: false,
		trigger: {
			player: ['useCard1', 'respond']
		},
		filter(event, player) {
			if (player.hasSkill('mengshuilong')) return false;
			return game.weather && game.weather == 'hyyz_rain' && get.type(event.card) == 'basic';
		},
		content() {
			game.log('#y======雷雨======')
			player.chooseToDiscard('雷雨:弃置一张手牌', 'he', true).set('ai', card => 8 - get.value(card));
		}
	};
	lib.skill._hyyz_windy = "狂风";
	lib.translate.hyyz_windy = "狂风";
	lib.skill._hyyz_windy = {
		name: '狂风',
		description: "准备阶段,随机弃置当前角色场上的一张牌.",
		forced: true,
		priority: Infinity,
		popup: false,
		trigger: {
			player: 'phaseZhunbeiBegin'
		},
		filter(event, player) {
			return game.weather && game.weather == 'hyyz_windy' && player.countCards('ej');
		},
		content() {
			game.log('#y======狂风======')
			player.discard(player.getCards('ej').randomGet());
		},
	};
	lib.skill._hyyz_thunder = "雷暴";
	lib.translate.hyyz_thunder = "雷暴";
	lib.skill._hyyz_thunder = {
		name: '雷暴',
		description: "准备阶段,弃置一张装备牌,否则横置.",
		forced: true,
		priority: Infinity,
		popup: false,
		trigger: {
			player: 'phaseZhunbeiBegin'
		},
		filter(event, player) {
			return game.weather && game.weather == 'hyyz_thunder';
		},
		content() {
			'step 0'
			game.log('#y======雷暴======')
			player.chooseToDiscard('雷暴:弃置一张装备牌,否则横置', 'he', { type: "equip" }).set('ai', card => 8 - get.value(card));
			'step 1'
			if (!result.bool) {
				player.link(true);
			}
		},
	};
});
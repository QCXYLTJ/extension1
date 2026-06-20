'use strict';
console.log('载入derive/mingtu.js')
//——————————————————————————————————————————命途系统——————————————————————————————————————————//
window.hyyzImport(function (lib, game, ui, get, ai, _status) {
	lib.mingtu = ['xthuimie', 'xtcunhu']//翻译在开拓者的技能里
	lib.translate.nomingtu = "无命途";
	//事件,选择命途的操作
	lib.element.player.chooseMingtu = function () {
		var next = game.createEvent('chooseMingtu', false);
		next.player = this;
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == 'boolean') {
				next.forced = arguments[i];
			}
			else if (typeof arguments[i] == 'string') {
				next.prompt = arguments[i];
			}
			else if (typeof arguments[i] == 'function') {
				next.ai = arguments[i];
			}
		}
		next.forced = true;//默认锁定技
		next.setContent('chooseMingtu');
		return next;
	};
	//步骤,选择命途的执行
	lib.element.content.chooseMingtu = function () {
		'step 0'
		var controls = lib.mingtu.slice(0);
		if (!event.forced) controls.push('cancel2');//默认锁定技
		var prompt = event.prompt;
		if (!prompt) prompt = '请选择你要践行的命途';
		var next = player.chooseControl(controls);
		next.set('prompt', prompt);
		if (event.hsskill) next.setHiddenSkill(event.hsskill);
		if (event.ai) {
			next.set('ai', event.ai);
		}
		else {
			var choice;
			if (controls.includes('cancel2')) choice = controls.slice(0, controls.length - 2).randomGet();
			else choice = controls.randomGet();
			next.set('choice', choice);
			next.set('ai', function () {
				return _status.event.choice;
			});
		}
		'step 1'
		if (result.control != 'cancel2') {
			const old = get.mingtu(player)
			if (event.logSkill) {
				if (typeof event.logSkill == 'string') {
				}
				else if (Array.isArray(event.logSkill)) {
					player.logSkill.apply(player, event.logSkill);
				}
			}
			const mingtu = result.control;
			game.broadcastAll(function (player, mingtu) {
				if (lib.character[player.name][5]) delete lib.character[player.name][5];
				lib.character[player.name][5] = mingtu;
			}, player, mingtu);
			game.log(player, old != 'nomingtu' ? '舍弃<span class="yellowtext">' + get.translation(old) + '</span>命途,' : '', '加入<span class="yellowtext">' + get.translation(mingtu) + '</span>命途');
			if (player.hasSkill('xtkaituo')) {
				if (mingtu == 'xthuimie') {
					player.addAdditionalSkill('xtkaituo', ['xthuimie', 'xtsheming']);
				}
				if (mingtu == 'xtcunhu') {
					player.addAdditionalSkill('xtkaituo', ['xtcunhu', 'xtzhongwang']);
				}
			} else {
			}
		}
		event.result = result;
	};
	//字符串,获取命途,返回nomingtu或关键词
	get.mingtu = function (player) {
		if (player.name2 != undefined) {
			if (lib.character[player.name1][5]) return lib.character[player.name1][5]
		} else {
			if (lib.character[player.name][5]) return lib.character[player.name][5]
		}
		return 'nomingtu';
	};
	//字符串,获取命途且翻译
	get.mingtu2 = function (player) {
		return get.translation(get.mingtu(player));
	};
	//开局提示
	lib.skill._mingtu_init = {
		trigger: {
			global: ["phaseBefore"],
			player: "enterGame",
		},
		forced: true,
		firstDo: true,
		filter(event, player) {
			if (!player || !player.name || player.name == 'unknown') return false;
			return (event.name != 'phase' || game.phaseNumber == 0);
		},
		async content(event, trigger, player) {
			game.log(player, '的默认命途为', '#y' + get.mingtu2(player));
			//player.chooseMingtu(true);
		}
	};
	//毁灭:
});
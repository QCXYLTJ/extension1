'use strict';
//——————————————————————————————————————————命途系统——————————————————————————————————————————//
window.tgtt_import(function (lib, game, ui, get, ai, _status) {
	lib.tgttmingtu = ['tgtt_mtnnkhuimie', 'tgtt_mtlxunlie', 'tgtt_mtbszzhishi', 'tgtt_mtysfengrao', 'tgtt_mttyzylsfanyu', 'tgtt_mtfljiyi', 'tgtt_mtklbcunhu', 'tgtt_mtahhuanyu', 'tgtt_mtixxuwu']//翻译在开拓者的技能里
	lib.translate.notgttmingtu = "无命途";
	//事件,选择命途的操作
	lib.element.player.chooseTgttMingtu = function () {
		var next = game.createEvent('chooseTgttMingtu', false);
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
		next.setContent('chooseTgttMingtu');
		return next;
	};
	//步骤,选择命途的执行
	lib.element.content.chooseTgttMingtu = function () {
		'step 0'
		var controls = lib.tgttmingtu.slice(0);
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
			const old = get.tgttmingtu(player)
			if (event.logSkill) {
				if (typeof event.logSkill == 'string') {
				}
				else if (Array.isArray(event.logSkill)) {
					player.logSkill.apply(player, event.logSkill);
				}
			}
			const tgttmingtu = result.control;
			game.broadcastAll(function (player, tgttmingtu) {
				if (lib.character[player.name][5]) delete lib.character[player.name][5];
				lib.character[player.name][5] = tgttmingtu;
			}, player, tgttmingtu);
			game.log(player, old != 'notgttmingtu' ? '舍弃<span class="yellowtext">' + get.translation(old) + '</span>命途,' : '', '加入<span class="yellowtext">' + get.translation(tgttmingtu) + '</span>命途');
			if (player.hasSkill('tgtt_mtxuanze')) {
				if (tgttmingtu == 'tgtt_mtnnkhuimie') {
					player.addAdditionalSkill('tgtt_mtxuanze', ['tgtt_mtnnkhuimie']);
				}
				if (tgttmingtu == 'tgtt_mtlxunlie') {
					player.addAdditionalSkill('tgtt_mtxuanze', ['tgtt_mtlxunlie']);
				}
				if (tgttmingtu == 'tgtt_mtbszzhishi') {
					player.addAdditionalSkill('tgtt_mtxuanze', ['tgtt_mtbszzhishi']);
				}
				if (tgttmingtu == 'tgtt_mtysfengrao') {
					player.addAdditionalSkill('tgtt_mtxuanze', ['tgtt_mtysfengrao']);
				}
				if (tgttmingtu == 'tgtt_mttyzylsfanyu') {
					player.addAdditionalSkill('tgtt_mtxuanze', ['tgtt_mttyzylsfanyu']);
				}
				if (tgttmingtu == 'tgtt_mtfljiyi') {
					player.addAdditionalSkill('tgtt_mtxuanze', ['tgtt_mtfljiyi']);
				}
				if (tgttmingtu == 'tgtt_mtklbcunhu') {
					player.addAdditionalSkill('tgtt_mtxuanze', ['tgtt_mtklbcunhu']);
				}
				if (tgttmingtu == 'tgtt_mtahhuanyu') {
					player.addAdditionalSkill('tgtt_mtxuanze', ['tgtt_mtahhuanyu']);
				}
				if (tgttmingtu == 'tgtt_mtixxuwu') {
					player.addAdditionalSkill('tgtt_mtxuanze', ['tgtt_mtixxuwu']);
				}
			} else {
			}
		}
		event.result = result;
	};
	//字符串,获取命途,返回notgttmingtu或关键词
	get.tgttmingtu = function (player) {
		if (player.name2 != undefined) {
			if (lib.character[player.name1][5]) return lib.character[player.name1][5]
		} else {
			if (lib.character[player.name][5]) return lib.character[player.name][5]
		}
		return 'notgttmingtu';
	};
	//字符串,获取命途且翻译
	get.tgttmingtu2 = function (player) {
		return get.translation(get.tgttmingtu(player));
	};
	//开局提示
	lib.skill._tgttmingtu_init = {
		trigger: {
			global: ["phaseBefore"],
			player: "enterGame",
		},
		forced: true,
		firstDo: true,
		superCharlotte: true,
		charlotte: true,
		forceunique: true,
		TaiguSkill: true,
		filter(event, player) {
			if (!player || !player.name || player.name == 'unknown') return false;
			return (event.name != 'phase' || game.phaseNumber == 0);
		},
		async content(event, trigger, player) {
			game.log(player, '的默认命途为', '#y' + get.tgttmingtu2(player));
			//player.chooseTgttMingtu(true);
		}
	};
	//毁灭:
});
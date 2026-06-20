
'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	lib.element.player.scqh_getShunfaji = function () {
		let player = this;
		let blocker = player.storage.skill_blocker || [];
		let awaken = player.awakenedSkills || [];
		let skills = [];
		skills.addArray(blocker);
		skills.addArray(awaken);
		skills.addArray(player.getSkills());
		return (
			skills.filter(function (skill) {
				let storage = player.storage.scqh_Shunfaji || [];
				let info = get.info(skill);
				if (!info) return false;
				if (info.clickable && info.scqh_Shunfaji) {
					if (storage.includes(skill)) return true;
				}
				let subSkill = info.subSkill || {};
				for (let ss in subSkill) {
					let skill2 = skill + '_' + ss;
					let info2 = subSkill[ss] || {};
					if (info2 && info2.clickable && info2.scqh_Shunfaji) {
						if (storage.includes(skill2)) return true;
					}
				}
				return false;
			}) || []
		);
	};
	lib.element.player.scqh_InitShunfaji = function (skillname) {
		if (!skillname || typeof skillname != 'string') return;
		var player = this;
		var info = lib.skill[skillname] || {};
		if (!info || !info.clickable) return;
		if (!player.isUnderControl(true)) return;
		var storage = player.storage.scqh_InitShunfaji || [];
		storage.add(skillname);
		player.storage.scqh_InitShunfaji = storage;
		var list = storage.filter((name) => player.hasSkill(name));
		var button = ui.create.div('.scqh_Shunfaji', player);
		if (list.length > 1) {
			button.innerHTML = '瞬发技';
		} else if (list.length) {
			button.innerHTML = get.translation(list[0]) || '瞬发技';
		} else {
			button.delete();
			return;
		}
		button.listen(function () {
			info.clickable(player);
		});
	};
	lib.element.player.scqh_UseShunfaji = function () {
		var player = this;
		var evt = _status.event;
		var filter = function (trigger) {
			if (!trigger || !trigger.name) return false;
			if (trigger.name == 'chooseToUse') return true;
			if (trigger.name.includes('choose')) return false;
			if (trigger.name.includes('useCardTo')) return false;
			return true;
		};
		while (!filter(evt) && evt.parent) evt = evt.parent;
		if (evt && evt.name) {
			var next = game.createEvent('scqh_Shunfaji');
			_status.event.next.remove(next);
			evt.after.add(next);
			next.player = player;
			next.setContent(function () {
				'step 0';
				var storage = player.storage.scqh_InitShunfaji || [];
				var list = storage.filter((skill) => {
					var info = lib.skill[skill];
					return info && info.clickableContent;
				});
				var skills = list.filter((skill) => {
					var info = lib.skill[skill];
					if (info.clickableFilter && !info.clickableFilter(player)) return false;
					return player.hasSkill(skill);
				});
				if (skills.length > 1) {
					var next = player.chooseControl(skills);
					next.set('ai', function () {
						return 0;
					});
				} else if (skills.length) {
					event._result = {
						control: skills[0],
					};
				} else {
					var usable = event.parent.scqh_shunfajiCount;
					if (!usable || typeof usable !== 'number') event.parent.scqh_shunfajiCount = 0;
					event.parent.scqh_shunfajiCount += 1;
					if (event.parent.scqh_shunfajiCount === 1) {
						var prompt = '瞬发技:';
						if (list.length) prompt += get.translation(list);
						else prompt += '无';
						prompt += '\r\r没有符合使用条件的技能!';
						alert(prompt);
					}
					event.finish();
				}
				('step 1');
				event.control = result.control;
				if (event.control) {
					var info = lib.skill[event.control] || {};
					if (info && info.clickableContent) {
						if (!info.direct) {
							var next = player.chooseBool();
							var prompt = false;
							if (info.prompt) {
								if (typeof info.prompt === 'function') {
									prompt = info.prompt(false, player);
								} else if (typeof info.prompt === 'string') {
									prompt = info.prompt;
								}
							}
							if (prompt) {
								next.set('prompt', prompt);
							} else {
								next.set('prompt', get.prompt(event.control));
							}
							var prompt2 = false;
							if (info.prompt2) {
								if (typeof info.prompt2 === 'function') {
									prompt2 = info.prompt2(false, player);
								} else if (typeof info.prompt2 === 'string') {
									prompt2 = info.prompt2;
								}
							}
							if (prompt2) {
								next.set('prompt2', prompt2);
							} else {
								prompt2 = lib.translate[event.control + '_info'];
								if (prompt2) next.set('prompt2', prompt2);
							}
							next.set('ai', function () {
								return 1;
							});
						} else
							event._result = {
								bool: true,
							};
					} else event.finish();
				} else event.finish();
				('step 2');
				if (result.bool) {
					var info = lib.skill[event.control] || {};
					var next = game.createEvent(event.control);
					next.player = player;
					next.setContent(info.clickableContent);
				}
			});
		}
	};
	lib.element.player.scqh_lianjiji = function (type, skillname) {
		if (!skillname || !lib.skill[skillname]) return false;
		const player = this;
		const start = lib.skill[skillname].scqh_lianjiji || [];
		const countmark = player.countMark(skillname);
		if (type === 'filter') {
			if (!countmark) return false;
			if (start[1] && countmark > start[1]) return false;
			return true;
		} else if (type === 'init') {
			if (countmark) player.removeMark(skillname, countmark, false);
			if (start[0]) player.addMark(skillname, start[0], false);
		} else if (type === 'content') {
			const tempname = skillname + '_lianjijionremove';
			const tempskill = lib.skill[tempname];
			if (tempskill) player.addTempSkill(tempname);
			if (start[1] && countmark >= start[1]) {
				player.removeMark(skillname, countmark, false);
			} else player.addMark(skillname, 1, false);
		} else if (type === 'onremove') {
			if (countmark) player.removeMark(skillname, countmark, false);
			player.addMark(skillname, 1, false);
		}
	};
	lib.element.player.scqh_charge = function (num) {
		var player = this;
		var numx = num;
		if (!numx || typeof numx != 'number' || numx <= 1) {
			numx = 1;
		}
		numx = Math.min(numx, 12 - player.countMark('charge'));
		if (numx >= 1) {
			player.addMark('charge', numx, false);
			game.log(player, '通过【蓄意】获得了', get.cnNumber(numx), '点【蓄力值】');
		}
	};
	lib.element.player.scqh_Shanjiji = function (trigger) {
		if (!trigger) return false;
		if (trigger.type === 'wuxie') return false;
		if (trigger.type === 'phase') return true;
		const player = this;
		const map = {};
		map.target = false;
		map.card = false;
		map.evt = trigger.getParent('useCard');
		const resp = trigger.respondTo || [];
		if (resp.length) {
			map.target = resp[0];
			map.card = resp[1];
		} else if (trigger.source) {
			map.target = trigger.source;
			let evt = trigger.parent;
			if (evt && evt.card) map.card = evt.card;
		}
		if (!map.target || !map.card || !map.evt) return false;
		if (map.target == player) return false;
		return map;
	};
	lib.element.player.scqh_jifei = function (...args) {
		const next = game.createEvent('scqh_jifei');
		next.player = this;
		for (const argument of args) {
			if (get.itemtype(argument) == 'players') {
				next.targets = argument;
			} else if (get.itemtype(argument) == 'player') {
				next.targets = [argument];
			} else if (typeof argument === 'function') {
				next.subcontent = argument;
			}
		}
		if (!next.targets) next.targets = [];
		next.setContent(function () {
			'step 0';
			const doudong = function (player) {
				var zoom1 = 0.9;
				var zoom2 = 0.95;
				if (get.is.mobileMe(player)) {
					if (player.classList.contains('linked')) {
						player.node.avatar.style.transform = 'scale(' + zoom1 + ') rotate(-90deg)';
						player.node.avatar2.style.transform = 'scale(' + zoom1 + ') rotate(-90deg)';
					} else {
						player.node.avatar.style.transform = 'scale(' + zoom1 + ')';
						player.node.avatar2.style.transform = 'scale(' + zoom1 + ')';
					}
				} else if (player.classList.contains('linked') && get.is.newLayout()) {
					player.style.transform = 'scale(' + zoom2 + ') rotate(-90deg)';
				} else if (game.chess && player._chesstransform) {
					player.style.transform = 'translate(' + player._chesstransform[0] + 'px,' + player._chesstransform[1] + 'px) scale(' + zoom2 + ')';
				} else {
					player.style.transform = 'scale(' + zoom2 + ')';
				}
				player.queue();
			};
			for (const target of targets) {
				doudong(target);
				target.addTempSkill('scqhBuff_jifei');
			}
			('step 1');
			if (event.subcontent) {
				const next = game.createEvent('scqh_jifei_subcontent');
				next.player = player;
				next.targets = targets;
				next.setContent(event.subcontent);
			}
			('step 2');
			game.log(targets, '被击飞了');
			event.trigger('scqh_jifei');
			('step 3');
			for (const target of targets) target.removeSkill('scqhBuff_jifei');
		});
		return next;
	};
};

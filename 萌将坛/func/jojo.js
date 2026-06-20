'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	lib.element.player.scqhJojo_lookStatus = function (stand, bool) {
		const player = this;
		const status = {};
		const typelist = [];
		typelist.add('power');
		typelist.add('speed');
		typelist.add('range');
		typelist.add('growth');
		typelist.add('accuracy');
		typelist.add('usable');
		for (const name of typelist) status[name] = 0;
		if (stand && typeof stand === 'string') {
			const info = get.info(stand);
			if (info && info.scqhJojoStatus && typeof info.scqhJojoStatus === 'object') {
				const infox = info.scqhJojoStatus;
				for (const name of typelist) {
					var num = infox[name];
					if (!num || typeof num !== 'number' || num <= 0) {
						num = 0;
					}
					if (bool === true) {
					} else {
						var mark = player.storage[stand + '_' + name];
						if (!mark || typeof mark !== 'number' || mark <= 0) {
							mark = 0;
						}
						num -= mark;
						if (!num || typeof num !== 'number' || num <= 0) {
							num = 0;
						}
					}
					status[name] = num;
				}
			}
		}
		return status;
	};
	lib.element.player.scqhJojo_getStand = function (...args) {
		const player = this;
		const types = [];
		types.add('power');
		types.add('speed');
		types.add('range');
		types.add('growth');
		types.add('accuracy');
		types.add('usable');
		const typelist = [];
		var addMod = true;
		for (const argument of args) {
			if (typeof argument === 'boolean') {
				addMod = argument;
			} else if (typeof argument === 'string') {
				if (types.includes(argument)) {
					typelist.add(argument);
				}
			} else if (Array.isArray(argument)) {
				for (const name of argument) {
					if (typeof name === 'string') {
						if (types.includes(argument)) {
							typelist.add(name);
						}
					}
				}
			}
		}
		const skills = player.getSkills(null, false, false);
		const stands = skills.filter(function (stand) {
			if (!lib.character[stand]) return false;
			const info = get.info(stand);
			if (!info || !info.scqhJojoStatus || typeof info.scqhJojoStatus !== 'object') return false;
			const infox = info.scqhJojoStatus;
			for (const name of typelist) {
				var num = infox[name];
				if (!num || typeof num !== 'number' || num <= 0) {
					num = 0;
				}
				if (addMod !== false) {
					var mark = player.storage[stand + '_' + name];
					if (!mark || typeof mark !== 'number' || mark <= 0) {
						mark = 0;
					}
					num -= mark;
				}
				if (!num || typeof num !== 'number' || num <= 0) {
					return false;
				}
			}
			return true;
		});
		return stands;
	};
	lib.element.player.scqhJojo_chooseStand = function (...args) {
		const next = game.createEvent('scqhJojo_chooseStand');
		next.player = this;
		next.addMod = true;
		next.selectCard = [1, 1];
		next.typelist = [];
		for (const argument of args) {
			if (argument === true) {
				next.forced = true;
			} else if (argument === false) {
				next.addMod = false;
			} else if (typeof argument === 'number') {
				next.selectCard = [argument, argument];
			} else if (get.itemtype(argument) === 'select') {
				next.selectCard = argument;
			} else if (typeof argument === 'function') {
				next.filterButton = argument;
			} else if (typeof argument === 'string') {
				next.typelist.add(argument);
			} else if (Array.isArray(argument)) {
				for (const name of argument) {
					if (typeof name === 'string') next.typelist.add(name);
				}
			}
		}
		next.setContent('scqhJojo_chooseStand');
		next._args = args;
		return next;
	};
	lib.element.content.scqhJojo_chooseStand = function () {
		'step 0';
		var stands = player.scqhJojo_getStand(event.typelist, event.addMod);
		var num = Math.max(1, Math.max(event.selectCard[0], event.selectCard[1]));
		if (stands.length <= num && event.forced === true) {
			event._result = {
				bool: true,
				links: stands,
			};
		} else if (stands.length) {
			var next = player.chooseButton();
			next.set('selectButton', event.selectCard);
			if (event.forced === true) next.set('forced', true);
			if (event.filterButton) next.set('ai', event.filterButton);
			else {
				next.set('ai', function (button) {
					return true;
				});
			}
			var prompt = '请选择';
			if (event.selectCard[0] != event.selectCard[1]) {
				prompt += get.cnNumber(event.selectCard[0]);
				prompt += '至';
				prompt += get.cnNumber(event.selectCard[1]);
			} else {
				prompt += get.cnNumber(event.selectCard[0]);
			}
			prompt += '个替身';
			next.set('createDialog', [prompt, [stands.sort(), 'character']]);
		} else
			event._result = {
				bool: false,
				links: [],
			};
		('step 1');
		event.result = result;
		var stands = result.links || [];
		if (stands.length) {
			for (var name of stands) {
				player.flashAvatar(false, name);
			}
		}
	};
	lib.element.player.scqh_HasSkillTag = function (tag) {
		if (typeof tag !== 'string') return false;
		var player = this;
		var skills = player.getSkills(null, false, false).filter(function (skill) {
			var info = get.info(skill);
			return info && info[tag];
		});
		if (skills.length) return true;
		if (!player.isUnseen(0)) {
			var info = lib.character[player.name1];
			if (info && info[4]) {
				for (const i of info[4]) {
					if (typeof i == 'string' && i.includes(tag)) return true;
				}
			}
		}
		if (player.name2 && !player.isUnseen(1)) {
			var info = lib.character[player.name2];
			if (info && info[4]) {
				for (const i of info[4]) {
					if (typeof i == 'string' && i.includes(tag)) return true;
				}
			}
		}
		return false;
	};
	lib.element.player.scqhJojo_StandFilter = function (name) {
		var player = this;
		if (Array.isArray(name)) {
			for (var name2 of name) {
				if (!player.scqhJojo_StandFilter(name2)) return false;
			}
		} else {
			var status = player.scqhJojo_Status();
			if (!status || !status[name]) return false;
			if (!player.scqh_HasSkillTag('scqhStand')) return false;
			if (player.countMark('scqhJojo_持续') >= status.持续) return false;
		}
		return true;
	};
	lib.element.player.scqhJojo_Status = function (stand) {
		let player = this;
		let map = {};
		let typeList = ['破坏', '速度', '射程', '持续', '精密', '成长'];
		for (let type of typeList) {
			if (!map[type]) map[type] = 0;
		}
		if (stand) {
			let info = lib.character[stand];
			if (!info || !info[4] || !info[4].length) return map;
			for (let str of info[4]) {
				if (typeof str != 'string') continue;
				for (let type of typeList) {
					if (!str.includes('scqhJojo_') || !str.includes(type)) continue;
					let num = str.slice(12) - 0;
					if (typeof num == 'number' && num > map[type]) {
						map[type] = num;
					}
				}
			}
		} else {
			let skills = player.getSkills(null, false, false).filter(function (skill) {
				let info = get.info(skill);
				return info && info.scqhStand;
			});
			if (!skills.length) return map;
			for (let name of skills) {
				var status = player.scqhJojo_Status(name);
				for (let type of typeList) {
					if (status && status[type] && status[type] > map[type]) {
						map[type] = status[type];
					}
				}
			}
		}
		return map;
	};
	lib.element.player.$scqh_timeStop = function () {
		var player = this;
		ui.backgroundMusic.pause();
		game.playAudio('../extension', lib.scqhExtension, 'audio', 'jojo', 'TheWorldEnter');
		player.$fullscreenpop('', 'fire', true, true);
		player.$skill('THE WORLD', 'legend', 'metal');
		var imagePath = '/extension/' + lib.scqhExtension + '/skin/mark/timeStop.gif';
		var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		var duration = 4000;
		var img = document.createElement('img');
		img.src = imagePath;
		img.style.position = 'absolute';
		img.style.left = '50%';
		img.style.top = '50%';
		img.style.transform = 'translate(-50%, -50%)';
		img.style.zIndex = '999';
		img.style.opacity = 0.5;
		document.body.appendChild(img);
		img.style.transition = 'opacity 1s ease-out';
		setTimeout(function () {
			img.style.opacity = 0;
			setTimeout(function () {
				img.parentNode.removeChild(img);
			}, 1000);
		}, duration);
		document.documentElement.style.transform = 'scale(1.2)';
		document.body.style.filter = 'invert(100%)';
		setTimeout(function () {
			document.body.style.filter = 'none';
			document.documentElement.style.transform = 'scale(1)';
			document.documentElement.style.position = 'fixed';
			document.documentElement.style.top = '0';
			document.documentElement.style.left = '0';
		}, 2000);
		document.documentElement.style.filter = 'invert(100%)';
		setTimeout(function () {
			document.documentElement.style.filter = 'none';
			document.documentElement.style.filter = 'grayscale(70%)';
		}, 3000);
	};
	lib.element.player.scqh_timeStop = function () {
		if (_status.scqh_whoTime) return;
		let next = game.createEvent('scqh_timeStop');
		next.player = this;
		next.setContent('scqh_timeStop');
		next._args = Array.from(arguments);
		return next;
	};
	lib.element.content.scqh_timeStop = function () {
		'step 0';
		game.broadcastAll(function (player) {
			_status.scqh_whoTime = player;
		}, player);
		player.$scqh_timeStop();
		game.log(player, '开启了', '#g时间静止的领域');
		game.addGlobalSkill('scqh_timeStopBlocker');
		game.filterPlayer((current) => {
			if (current.scqh_HasSkillTag('scqh_timeStop')) return false;
			if (_status.scqh_whoTime == current) return false;
			current.addTempSkill('scqh_timeStopBlocker2', event.name + 'End');
		});
		('step 1');
		player.phaseUse();
		('step 2');
		var next = player.chooseBool(true);
		next.set('prompt', '时间即将回复流动');
		next.set('ai', function () {
			return 1;
		});
		('step 3');
		game.removeGlobalSkill('scqh_timeStopBlocker');
		document.documentElement.style.filter = 'none';
		game.playAudio('../extension', lib.scqhExtension, 'audio/jojo/TheWorldExit');//QQQ
		('step 4');
		for (var current of game.players) {
			var numx = 0;
			var parentElement = current.node.avatar;
			var children = parentElement.childNodes;
			for (var t = children.length - 1; t >= 0; t--) {
				var child = children[t];
				if (child.nodeName === 'IMG' && child.src.endsWith('timeStopDamage.png')) {
					parentElement.removeChild(child);
					numx++;
				}
			}
			if (numx != 0 && current.isIn()) current.damage(numx, 'nosource');
		}
		('step 5');
		game.broadcastAll(function (player) {
			delete _status.scqh_whoTime;
		}, player);
	};
	lib.element.player.$scqh_timeStopDamage = function (num) {
		if (!_status.scqh_whoTime) return;
		var randomNumber = Math.floor(Math.random() * 6) + 1;
		for (var i = 0; i < num; i++) {
			var imgElement = document.createElement('img');
			imgElement.src = '/extension/' + lib.scqhExtension + '/skin/mark/timeStopDamage.png';
			imgElement.style.width = '180px';
			imgElement.style.height = '180px';
			imgElement.style.position = 'absolute';
			imgElement.style.top = Math.floor(Math.random() * 70) - 50 + '%';
			imgElement.style.left = Math.floor(Math.random() * 70) - 50 + '%';
			imgElement.style.zIndex = '999';
			imgElement.style.filter = 'brightness(180%)';
			this.node.avatar.appendChild(imgElement);
		}
	};
	lib.element.player.$scqhJojo_Hit = function () {
		var next = game.createEvent('$scqhJojo_Hit');
		next.player = this;
		next.setContent('$scqhJojo_Hit');
		return next;
	};
	lib.element.content.$scqhJojo_Hit = function () {
		'step 0';
		var status = player.scqhJojo_Status();
		if (!status || !status.速度 || status.速度 <= 0) {
			event.finish();
			return;
		}
		event.num = 0;
		event.hit = Math.min(5, status.速度);
		var time = 1000 * event.hit;
		_status.scqhJojo_Hit = false;
		setTimeout(function () {
			_status.scqhJojo_Hit = true;
		}, time);
		('step 1');
		if (_status.scqhJojo_Hit) return;
		var img = document.createElement('img');
		var name = 'scqhJojo_Hit';
		img.src = 'extension/' + lib.scqhExtension + '/ui/' + name + '.gif';
		img.style.position = 'absolute';
		img.style.transform = 'translate(-50%, -50%)';
		img.style.zIndex = '999';
		img.style.left = Math.random() * 100 + '%';
		img.style.top = Math.random() * 100 + '%';
		img.style.width = '500px';
		img.style.height = '500px';
		ui.window.appendChild(img);
		setTimeout(function () {
			if (img && img.parentNode) img.parentNode.removeChild(img);
		}, 1000);
		var str = '连击';
		if (player.hasSkill('scqhJojo_白金之星')) str = '噢啦';
		else if (player.hasSkill('scqhJojo_世界')) str = '无駄';
		if (player.isUnderControl(true)) {
			if (!_status.scqhJojo_Hit) {
				img.addEventListener('click', function () {
					if (str != '连击') game.playAudio('../extension', lib.scqhExtension, 'audio', 'scqhJojo', '强攻', 'scqhJojo_' + str);
					event.num++;
					player.popup(str);
					game.log(player, ' ', str, '!');
					if (img && img.parentNode) img.parentNode.removeChild(img);
				});
			}
		} else {
			_status.scqhJojo_Hit = true;
			for (var i = 0; i < event.hit; i++) {
				event.num++;
				player.popup(str);
				game.log(player, ' ', str, '!');
			}
		}
		('step 2');
		if (!_status.scqhJojo_Hit) event.goto(1);
		('step 3');
		event.result = {
			bool: true,
			num: event.num,
		};
	};
};

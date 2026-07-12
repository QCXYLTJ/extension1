'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	lib.element.player.scqh_hidePlayer = function () {
		var next = game.createEvent('scqh_hidePlayer');
		next.player = this;
		next.setContent('scqh_hidePlayer');
		return next;
	};
	lib.element.content.scqh_hidePlayer = function () {
		player.storage.rawHp = player.hp;
		player.storage.rawMaxHp = player.maxHp;
		if (player.skills.length) {
			if (!player.hiddenSkills) {
				player.hiddenSkills = [];
			}
			for (const i of player.skills.slice()) {
				player.removeSkill(i);
				player.hiddenSkills.add(i);
			}
		}
		player.classList.add('unseen');
		player.name = 'unknown';
		player.sex = 'male';
		player.storage.nohp = true;
		player.node.hp.hide();
		player.addSkill('g_hidden_ai');
		player.hp = 1;
		player.maxHp = 1;
		player.update();
	};
	get.scqh_wuxing = function (...args) {
		let map = {};
		for (let argument of args) {
			if (typeof argument == 'string') {
				map.nature = argument;
			} else if (get.itemtype(argument) == 'cards') {
				map.card = argument[0];
			} else if (get.itemtype(argument) == 'card') {
				map.card = argument;
			}
		}
		if (map.card && map.nature) {
			map.cardname = lib.translate[map.card.name];
			if (map.card.wunature && map.card.wunature == map.nature) {
				return true;
			} else if (game.hasNature(map.card, map.nature)) {
				return true;
			} else if (map.nature == 'metal') {
				if (/金|钅/.test(map.cardname)) return true;
			} else if (map.nature == 'wood') {
				if (/木|艹|叶/.test(map.cardname)) return true;
			} else if (map.nature == 'water') {
				if (map.card.name == 'jiu') return true;
				if (/冫|氵|灬|雨|水/.test(map.cardname)) return true;
			}
		}
		return false;
	};
	lib.element.player.scqh_yidong = function (num, type) {
		let next = game.createEvent('scqh_yidong');
		next.player = this;
		for (let i = 0; i < arguments.length; i++) {
			let arg = arguments[i];
			if (typeof arg == 'number') {
				next.num = arg;
			} else if (typeof arg == 'string') {
				next.type = arg;
			}
		}
		if (!next.num) next.num = 1;
		if (next.num < 0) {
			if (!next.type) next.type = '退';
			next.num = Math.abs(next.num);
		}
		next.num = Math.ceil(next.num);
		next.setContent('scqh_yidong');
		return next;
	};
	lib.element.content.scqh_yidong = function () {
		'step 0';
		var num = event.num || 0;
		if (!event.type) {
			var list = [];
			var numStr = get.cnNumber(num);
			list.add('进' + numStr + '格');
			list.add('退' + numStr + '格');
			var next = player.chooseControl(list);
			next.set('ai', function () {
				return 0;
			});
		} else
			event._result = {
				control: event.type,
			};
		('step 1');
		var control = result.control || '';
		var str = false;
		var num = event.num || 0;
		if (control.includes('进')) str = '进';
		if (control.includes('退')) str = '退';
		if (str && num) {
			var numStr = get.cnNumber(num);
			game.log(player, str, '了', numStr, '格');
			player.scqh_addBuff('scqh_移动距离_' + str, num, false);
			player.markSkill('_scqh_移动距离');
			game.playAudio('../extension', lib.scqhExtension, 'audio', 'mark', 'scqh_shanxian');
		} else {
			var string = '';
			if (!str) string += '迷失方向';
			if (!str && !num) string += '以及';
			if (!num) string += '原地踏步';
			game.log(player, '因', string, ',移动失败');
		}
	};
	lib.element.player.scqh_addBuff = function (name, num, log) {
		let player = this;
		let skill = lib.skill[name];
		if (skill && !player.hasSkill(name)) {
			player.addSkill(name);
		}
		let storage = player.storage.scqhBuff || {};
		let subStorage = storage[name] || 0;
		let number = Math.max(0, Math.ceil(Math.abs(num || 1)));
		subStorage += number;
		if (subStorage <= 0) subStorage = 0;
		storage[name] = subStorage;
		player.storage.scqhBuff = storage;
		if (log != false) game.log(player, '获得了', get.cnNumber(number), '层', '#g', get.translation(name), '效果');
		if (subStorage > 0) {
			player.markSkill(name);
		}
	};
	lib.element.player.scqh_removeBuff = function (name, num, log) {
		let player = this;
		let skill = lib.skill[name];
		let storage = player.storage.scqhBuff || {};
		let subStorage = storage[name] || 0;
		let number = Math.max(0, Math.ceil(Math.abs(num || 1)));
		subStorage -= number;
		if (subStorage <= 0) subStorage = 0;
		storage[name] = subStorage;
		player.storage.scqhBuff = storage;
		if (log != false) game.log(player, '移去了', get.cnNumber(number), '层', '#g', get.translation(name), '效果');
		if (subStorage <= 0) {
			player.unmarkSkill(name);
			if (skill && player.hasSkill(name)) {
				player.removeSkill(name);
			}
		}
	};
	lib.element.player.scqh_getBuff = function (name) {
		let player = this;
		let storage = player.storage.scqhBuff || {};
		let subStorage = storage[name] || 0;
		let number = 0;
		number += subStorage;
		return number;
	};
	lib.element.player.scqh_libCard = function (name) {
		if (!Array.isArray(name)) name = [name];
		for (let i of name) {
			if (!lib.card[i]) lib.card[i] = {};
			if (!lib.card[i].type) lib.card[i].type = i;
			if (!lib.card[i].image) lib.card[i].image = 'ext:' + lib.scqhExtension + '/skin/cards/' + i + '.png';
		}
	};
	lib.element.player.scqh_juedou = function () {
		let next = game.createEvent('juedou');
		next.player = this;
		for (let i = 0; i < arguments.length; i++) {
			if (get.itemtype(arguments[i]) == 'players') {
				next.target = arguments[i][0];
			} else if (get.itemtype(arguments[i]) == 'player') {
				next.target = arguments[i];
			}
		}
		next.setContent('scqh_juedou');
		return next;
	};
	lib.element.content.scqh_juedou = function () {
		'step 0';
		if (target == player) {
			alert('决斗的目标不能是决斗的发起者');
			event.finish();
			return;
		}
		if (event.one == undefined) event.one = true;
		if (event.turn == undefined) event.turn = target;
		if (!event.shaReq) event.shaReq = {};
		if (typeof event.shaReq[player.playerid] != 'number') event.shaReq[player.playerid] = 1;
		if (typeof event.shaReq[target.playerid] != 'number') event.shaReq[target.playerid] = 1;
		event.playerCards = [];
		event.targetCards = [];
		('step 1');
		event.trigger('juedou');
		event.shaRequired = event.shaReq[event.turn.playerid];
		('step 2');
		var next = event.turn.chooseToRespond();
		var cardx = {};
		if (!event.one) {
			cardx.name = 'sha';
			next = event.turn.chooseToRespond(cardx);
		}
		if (event.shaRequired > 1) {
			var strx = '牌';
			if (cardx.name) strx = get.translation(cardx);
			next.set('prompt2', '共需打出' + event.shaRequired + '张' + strx);
		}
		next.set('ai', function (card) {
			let event = _status.event;
			let player = event.splayer;
			let target = event.starget;
			let source = event.source;
			let turn = event.turn;
			let basic = ['tao', 'jiu'];
			if (basic.includes(card.name)) return 0;
			if (player.hasSkillTag('notricksource') || target.hasSkillTag('notrick')) return 0;
			if (event.shaRequired > 1 && player.countCards('h', 'sha') < event.shaRequired) return 0;
			if (event.player === target) {
				if (_status.event.tdamage >= 0 || player.hasSkill('naman')) return -1;
				if (get.attitude(target, player) <= 0 || (event.player.hp <= 1 && _status.event.tdamage < _status.event.pdamage)) {
					return get.order(card);
				}
				return -1;
			} else {
				if (_status.event.pdamage >= 0 || target.hasSkill('naman')) return -1;
				if (get.attitude(player, target) <= 0 || (event.player.hp <= 1 && _status.event.tdamage > _status.event.pdamage)) {
					return get.order(card);
				}
				return -1;
			}
		});
		next.set('splayer', player);
		next.set('starget', target);
		next.set('pdamage', get.damageEffect(player, target, event.turn));
		next.set('tdamage', get.damageEffect(target, player, event.turn));
		next.set('shaRequired', event.shaRequired);
		next.autochoose = lib.filter.autoRespondSha;
		next.set('turn', event.turn);
		if (event.turn == target) next.source = player;
		else next.source = target;
		('step 3');
		if (result.bool) {
			event.shaRequired--;
			if (event.turn == target) {
				if (result.cards) event.targetCards.addArray(result.cards);
				if (event.shaRequired > 0) event.goto(2);
				else {
					event.one = false;
					event.turn = player;
					event.goto(1);
				}
			} else {
				if (result.cards) event.playerCards.addArray(result.cards);
				if (event.shaRequired > 0) event.goto(2);
				else {
					event.one = false;
					event.turn = target;
					event.goto(1);
				}
			}
		} else {
			let bool = event.turn == target;
			if (bool) event.winner = player;
			else event.winner = target;
			event.result = {
				bool: bool,
				turn: event.turn,
				winner: event.winner,
				playerCards: event.playerCards,
				targetCards: event.targetCards,
			};
			event.result.winner.popup('赢');
			event.result.turn.popup('输');
			game.log(player, '对', target, '发起的决斗,', event.result.winner, '赢了');
		}
	};
	lib.element.player.scqh_AddJudge = function () {
		var next = {};
		next.player = this;
		for (var i = 0; i < arguments.length; i++) {
			if (get.itemtype(arguments[i]) == 'players') {
				next.target = arguments[i][0];
			} else if (get.itemtype(arguments[i]) == 'player') {
				next.target = arguments[i];
			} else if (get.itemtype(arguments[i]) == 'cards') {
				next.cards = arguments[i].slice(0);
			} else if (get.itemtype(arguments[i]) == 'card') {
				next.cards = [arguments[i]];
			} else if (typeof arguments[i] == 'string') {
				next.card = arguments[i];
			}
		}
		if (!next.target) next.target = next.player;
		if (!next.target.isIn() || !next.card) return;
		if (!lib.card[next.card]) return;
		if (!next.cards || !next.cards.length) {
			next.target.addJudge(game.createCard(next.card));
		} else next.target.addJudge(next.card, next.cards);
	};
	lib.element.player.scqh_skillUsable = function (name, num) {
		var num = num || 1;
		if (this.getStat('triggerSkill')[name]) {
			this.getStat('triggerSkill')[name] -= num;
		}
		if (this.getStat('skill')[name]) {
			this.getStat('skill')[name] -= num;
		}
	};
	lib.element.player.scqh_Status = function () {
		var list = this.scqh || {};
		var types = ['TP', 'LP', 'ATK', 'DEF', 'hand'];
		for (const i of types) {
			if (!list[i] || list[i] < 0) list[i] = 0;
		}
		if (!list.init) {
			list.init = true;
			list.hand += 6;
			this.scqh_initStatus();
			var name = [this.name1, this.name2];
			for (var n of name) {
				let info = lib.character[n];
				if (n && info && info[4]) {
					for (var k of info[4]) {
						if (k.indexOf('scqh_ATK:') == 0) {
							list.ATK += k.slice(9) - 0;
						}
						if (k.indexOf('scqh_DEF:') == 0) {
							list.DEF += k.slice(9) - 0;
						}
					}
				}
			}
		}
		this.scqh = list;
		return this.scqh;
	};
	lib.element.player.scqh_changexStatus = function () {
		var next = game.createEvent('scqh_changeStatus');
		next.player = this;
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == 'number') {
				next.num = Math.floor(arguments[i]);
			} else if (typeof arguments[i] == 'string') {
				next.type = arguments[i];
			}
		}
		var types = ['TP', 'LP', 'ATK', 'DEF', 'hand'];
		if (!next.num) next.num = 0;
		if (!next.type || !types.includes(next.type)) {
			next.type = 'LP';
		}
		next.setContent('scqh_changeStatus');
		return next;
	};
	lib.element.content.scqh_changexStatus = function () {
		var list = player.scqh_Status() || {};
		var type = event.type;
		var num = event.num;
		if (!num) return;
		if (!list[type] || list[type] < 0) {
			list[type] = 0;
		}
		list[type] += num;
		if (!list[type] || list[type] < 0) {
			list[type] = 0;
		}
		var str = num > 0 ? '增加' : '扣去';
		game.log(player, str, '了', Math.abs(num), '点', type, '值');
		player.scqh = list;
	};
	lib.element.player.scqh_deleStatus = function () {
		var dele = true;
		var types = ['TP', 'LP', 'ATK', 'DEF'];
		for (const i of types) {
			if (this.scqh_Status()[i]) dele = false;
		}
		return dele;
	};
	lib.element.player.scqh_AddStatus = function () {
		var player = this;
	};
	lib.element.player.scqh_initStatus = function () {
		var player = this;
		game.broadcastAll(function (player) {
			_status.ui_scqhStatus = {};
			var LP = ui.create.div('');
			setInterval(function () {
				var num = player.scqh_deleStatus() ? 0 : 9;
				LP.style.width = 'calc(' + num + '%)';
			}, 900);
			LP.style.height = 'calc(58%)';
			LP.style.left = 'calc(45%)';
			LP.style.top = 'calc(-35%)';
			LP.style.borderRadius = '3px';
			LP.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))';
			LP.style.transform = 'rotate(-90deg)';
			player.appendChild(LP);
			_status.ui_scqhStatus.LP = LP;
			var LP1 = ui.create.div('');
			setInterval(function () {
				var LP = player.scqh_Status().LP;
				if (LP < 0) LP = 0;
				LP = Math.max(5, LP < 4000 ? LP / 40 : 100);
				LP1.style.height = 'calc(' + LP + '%)';
			}, 900);
			LP1.style.width = 'calc(100%)';
			LP1.style.left = '0px';
			LP1.style.top = '0px';
			LP1.style.borderRadius = '3px';
			LP1.style.backgroundSize = '100% 80px';
			LP1.setBackgroundImage('extension/' + lib.scqhExtension + '/ui/scqh_LP.png');
			LP.appendChild(LP1);
			_status.ui_scqhStatus.LP1 = LP1;
			var LP2 = ui.create.div('');
			LP2.style.width = 'calc(0%)';
			LP2.style.height = 'calc(18.5%)';
			LP2.style.left = 'calc(0%)';
			LP2.style.top = 'calc(3%)';
			LP2.style['white-space'] = 'nowrap';
			LP2.style['font-size'] = '10px';
			LP2.style['text-align'] = 'center';
			LP2.style['font-family'] = 'xinwei';
			LP2.style.transform = 'rotate(90deg)';
			LP2.style.borderRadius = '3px';
			setInterval(function () {
				var num = player.scqh_deleStatus() ? '' : 'LP ' + player.scqh_Status().LP;
				LP2.innerHTML = num;
			}, 900);
			LP.appendChild(LP2);
			_status.ui_scqhStatus.LP2 = LP2;
			var TP = ui.create.div('');
			TP.style.height = 'calc(100%)';
			TP.style.width = 'calc(100%)';
			TP.style.left = 'calc(120%)';
			TP.style.top = 'calc(0%)';
			TP.style.borderRadius = '3px';
			TP.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))';
			LP.appendChild(TP);
			_status.ui_scqhStatus.TP = TP;
			var TP1 = ui.create.div('');
			setInterval(function () {
				var TP = player.scqh_Status().TP;
				if (TP <= 0) TP = 0;
				if (TP >= 1000) TP = 1000;
				TP = Math.max(5, TP < 1000 ? TP / 10 : 100);
				TP1.style.height = 'calc(' + TP + '%)';
			}, 900);
			TP1.style.width = 'calc(100%)';
			TP1.style.left = 'calc(120%)';
			TP1.style.top = 'calc(0%)';
			TP1.style.borderRadius = '3px';
			TP1.style.backgroundSize = '100% 80px';
			TP1.setBackgroundImage('extension/' + lib.scqhExtension + '/ui/scqh_TP.png');
			LP.appendChild(TP1);
			_status.ui_scqhStatus.TP1 = TP1;
			var TP2 = ui.create.div('');
			TP2.style.width = 'calc(0%)';
			TP2.style.height = 'calc(18.5%)';
			TP2.style.left = 'calc(130%)';
			TP2.style.top = 'calc(3%)';
			TP2.style['white-space'] = 'nowrap';
			TP2.style['font-size'] = '10px';
			TP2.style['text-align'] = 'center';
			TP2.style['font-family'] = 'xinwei';
			TP2.style.transform = 'rotate(90deg)';
			TP2.style.borderRadius = '3px';
			setInterval(function () {
				var num = player.scqh_deleStatus() ? '' : 'TP ' + player.scqh_Status().TP;
				TP2.innerHTML = num;
			}, 900);
			LP.appendChild(TP2);
			_status.ui_scqhStatus.TP2 = TP2;
			var ATK = ui.create.div('');
			setInterval(function () {
				var num = 0;
				if (player.scqh_Status().ATK || player.scqh_Status().DEF) num = 100;
				ATK.style.height = 'calc(' + num + '%)';
			}, 900);
			ATK.style.width = 'calc(100%)';
			ATK.style.left = 'calc(245%)';
			ATK.style.top = 'calc(0%)';
			ATK.style.borderRadius = '3px';
			ATK.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0))';
			LP.appendChild(ATK);
			_status.ui_scqhStatus.ATK = ATK;
			var ATK2 = ui.create.div('');
			ATK2.style.width = 'calc(0%)';
			ATK2.style.height = 'calc(18.5%)';
			ATK2.style.left = 'calc(255%)';
			ATK2.style.top = 'calc(3%)';
			ATK2.style['white-space'] = 'nowrap';
			ATK2.style['font-size'] = '10px';
			ATK2.style['text-align'] = 'center';
			ATK2.style['font-family'] = 'xinwei';
			ATK2.style.transform = 'rotate(90deg)';
			ATK2.style.borderRadius = '3px';
			setInterval(function () {
				var or = player.scqh_Status().ATK || player.scqh_Status().DEF;
				var num = or ? 'ATK ' + player.scqh_Status().ATK : '';
				ATK2.innerHTML = num;
			}, 900);
			LP.appendChild(ATK2);
			_status.ui_scqhStatus.ATK2 = ATK2;
			var DEF = ui.create.div('');
			setInterval(function () {
				var num = 0;
				if (player.scqh_Status().ATK || player.scqh_Status().DEF) num = 100;
				DEF.style.height = 'calc(' + num + '%)';
			}, 900);
			DEF.style.width = 'calc(100%)';
			DEF.style.left = 'calc(370%)';
			DEF.style.top = 'calc(0%)';
			DEF.style.borderRadius = '3px';
			DEF.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0))';
			LP.appendChild(DEF);
			_status.ui_scqhStatus.DEF = DEF;
			var DEF2 = ui.create.div('');
			DEF2.style.width = 'calc(0%)';
			DEF2.style.height = 'calc(18.5%)';
			DEF2.style.left = 'calc(375%)';
			DEF2.style.top = 'calc(3%)';
			DEF2.style['white-space'] = 'nowrap';
			DEF2.style['font-size'] = '10px';
			DEF2.style['text-align'] = 'center';
			DEF2.style['font-family'] = 'xinwei';
			DEF2.style.transform = 'rotate(90deg)';
			DEF2.style.borderRadius = '3px';
			setInterval(function () {
				var or = player.scqh_Status().ATK || player.scqh_Status().DEF;
				var num = or ? 'DEF ' + player.scqh_Status().DEF : '';
				DEF2.innerHTML = num;
			}, 900);
			LP.appendChild(DEF2);
			_status.ui_scqhStatus.DEF2 = DEF2;
		}, player);
	};
	lib.element.player.scqh_print = function (name, suit, number, nature) {
		var card = game.createCard(name, suit, number, nature);
		card.storage.scqh_print = true;
		card.storage.vanish = true;
		return card;
	};
	lib.element.player.scqh_sendTo = function () {
		var next = game.createEvent('scqh_sendTo');
		next.player = this;
		for (var i = 0; i < arguments.length; i++) {
			if (get.itemtype(arguments[i]) == 'cards') {
				next.cards = arguments[i].slice(0);
			} else if (get.itemtype(arguments[i]) == 'card') {
				next.cards = [arguments[i]];
			} else if (typeof arguments[i] == 'string') {
				next.type = arguments[i];
			}
		}
		if (next.type == undefined) next.type = 'GY';
		next.setContent('scqh_sendTo');
		return next;
	};
	lib.element.content.scqh_sendTo = function () {
		'step 0';
		var type = event.type;
		var cards = event.cards;
		if (type == 'GY') {
			var send = player.addToExpansion(cards, player, false);
			send.gaintag.add('scqh_Graveyard');
			game.log(player, '将', get.cnNumber(cards.length), '张牌送去了墓地');
		} else if (type == 'b') {
			var send = player.addToExpansion(cards, player, false);
			send.gaintag.add('scqh_Banished');
			game.log(player, '将', get.cnNumber(cards.length), '张牌除外');
		} else if (type == 'h') {
			var next = player.loseToSpecial(cards, 'scqh_Hand');
			next.visible = true;
			game.log(player, '将', get.cnNumber(cards.length), '张牌加入决斗手牌');
		}
		('step 1');
	};
	lib.element.player.scqh_NobleArms = function () {
		var next = game.createEvent('scqh_NobleArms');
		next.player = this;
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == 'string') {
				if (arguments[i] == 'h') next.gain = true;
				if (arguments[i] == 'e') next.equip = true;
				if (arguments[i] == 'all') next.all = true;
			}
		}
		if (!next.gain && !next.equip) next.gain = true;
		next.setContent('scqh_NobleArms');
		return next;
	};
	lib.element.content.scqh_NobleArms = function () {
		'step 0';
		var vcards = [];
		var list = get
			.libCard(function (info, name) {
				if (!info.scqh_NobleArms) return false;
				if (event.all) return true;
				return info.subtype && info.subtype == 'scqh_spellEquip';
			})
			.sort();
		for (var name of list) {
			if (event.equip && !player.canEquip({ name: name })) continue;
			vcards.push([get.type(name), '', name]);
		}
		var next = player.chooseButton(true, ['拓印一张圣剑', [vcards, 'vcard']]);
		next.set('ai', function (button) {
			var player = _status.event.player;
			if (player.countCards('hes', button.link[2])) return -10;
			return 1;
		});
		('step 1');
		if (result.links?.length) {
			var card = player.scqh_print(result.links[0][2]);
			if (event.equip && player.canEquip(card)) {
				player.equip(card);
			} else if (event.gain) {
				var next = player.loseToSpecial([card], 'scqh_Hand');
				next.visible = true;
			}
		}
	};
	lib.element.player.scqh_isNobleKnight = function () {
		var list = ['name', 'name1', 'name2'];
		for (var name of list) {
			var info = lib.character[this[name]];
			if (this[name] && info && info[4]) {
				for (var nk of info[4]) {
					if (nk == 'NobleKnight' || nk.indexOf('NobleKnight') == 0) {
						return true;
					}
				}
			}
		}
		return false;
	};
	lib.element.player.scqh_ReviveNobleArms = function (card) {
		if (!this.scqh_isNobleKnight()) return false;
		if (!this.canEquip(card)) return false;
		var custom = this.getHistory('custom', function (evt) {
			return evt[card.name] == true;
		});
		var lose = this.getHistory('lose', function (evt) {
			return evt.es && evt.es.length && evt.es.includes(card);
		});
		return !custom.length && lose.length;
	};
	lib.element.player.moveShengjian = function () {
		var next = game.createEvent('moveShengjian');
		next.player = this;
		for (var i = 0; i < arguments.length; i++) { }
		next._args = Array.from(arguments);
		next.setContent('moveShengjian');
		return next;
	};
	lib.element.content.moveShengjian = function () {
		'step 0';
		var next = player.chooseTarget(2, function (card, player, target) {
			if (ui.selected.targets.length) {
				var from = ui.selected.targets[0];
				if (target.isMin()) return false;
				var es = from.getCards('e', (card) => card.name.includes('千鹤ygo_圣剑'));
				for (var i = 0; i < es.length; i++) {
					return true;
				}
				return false;
			} else {
				return target.countCards('e', (card) => card.name.includes('千鹤ygo_圣剑'));
			}
		});
		next.set('multitarget', true);
		next.set('targetprompt', _status.event.targetprompt || ['被移走', '移动目标']);
		next.set('prompt', event.prompt || '移动场上的一张牌');
		if (event.prompt2) next.set('prompt2', event.prompt2);
		if (event.forced) next.set('forced', true);
		('step 1');
		event.result = result;
		if (result.bool) {
			player.line2(result.targets, 'green');
			event.targets = result.targets;
		} else event.finish();
		('step 2');
		('step 3');
		if (targets.length == 2) {
			player.choosePlayerCard('e', true, targets[0]).set('filterButton', function (button) {
				return button.link.name.includes('千鹤ygo_圣剑');
			});
		} else {
			event.finish();
		}
		('step 4');
		if (result.bool && result.links.length) {
			var link = result.links[0];
			if (get.position(link) == 'e') {
				event.targets[1].equip(link);
			}
			event.targets[0].$give(link, event.targets[1], false);
			game.log(event.targets[0], '的', link, '被移动给了', event.targets[1]);
			event.result.card = link;
			event.result.position = get.position(link);
		}
	};
	lib.element.player.scqh_charm = function (target, bool) {
		var list = [this, this.nextSeat, this.previousSeat];
		var current;
		if (get.itemtype(target) == 'players') current = target[0];
		else if (get.itemtype(target) == 'player') current = target;
		if (!current || !current.isAlive() || !this.isAlive() || list.includes(current)) return;
		if (bool == true) return true;
		var next = game.createEvent('scqh_charm');
		next.player = this;
		next.target = current;
		next.setContent('scqh_charm');
		return next;
	};
	lib.element.content.scqh_charm = function () {
		'step 0';
		event.nextNum = 0;
		event.prevNum = 0;
		event.next = player.nextSeat;
		event.prev = player.previousSeat;
		('step 1');
		if (event.next != target) {
			event.next = event.next.nextSeat;
			event.nextNum++;
			event.goto(1);
		}
		('step 2');
		if (event.prev != target) {
			event.prev = event.prev.previousSeat;
			event.prevNum++;
			event.goto(2);
		}
		('step 3');
		var num = event.nextNum - event.prevNum;
		var seat = 'nextSeat';
		if (num <= 0) seat = 'previousSeat';
		game.broadcastAll(
			function (target1, target2) {
				game.swapSeat(target1, target2);
			},
			target,
			target[seat]
		);
	};
	lib.element.player.pathBetween = function (target, prompt, prompt2, filter) {
		var next = game.createEvent('pathBetween');
		next.player = this;
		next.target = target || false;
		next.prompt = prompt || false;
		next.prompt2 = prompt2 || false;
		next.filter = filter || false;
		next.setContent('pathBetween');
		return next;
	};
	lib.element.content.pathBetween = function () {
		'step 0';
		if (!target) event.finish();
		('step 1');
		var choices = [];
		let left = [], right = [];
		let left2 = player.previous, right2 = player.next;
		while (left2 && ![target, player].includes(left2) && right2 && ![target, player].includes(right2)) {
			left.push(left2);
			right.push(right2);
			left2 = left2.previous;
			right2 = right2.next;
		}
		if (target == left2) {
			for (const i of left) {
				if (!event.filter || event.filter(player, i)) {
					choices.push('↖顺时针');
					break;
				}
			}
		}
		if (target == right2) {
			for (const i of right) {
				if (!event.filter || event.filter(player, i)) {
					choices.push('逆时针↗');
					break;
				}
			}
		}
		choices.push('cancel2');
		var next = player.chooseControl(choices);
		if (event.prompt) next.set('prompt', event.prompt);
		if (event.prompt2) next.set('prompt2', event.prompt2);
		next.set('choices', choices);
		next.set('ai', function () {
			return 0;
		});
		('step 2');
		if (result.control != 'cancel2') {
			var targets = [];
			if (result.control == '↖顺时针') {
				var current = player.previous;
				while (current != target) {
					if (!event.filter || event.filter(player, current)) {
						targets.push(current);
					}
					current = current.previous;
				}
			} else {
				var current = player.next;
				while (current != target) {
					if (!event.filter || event.filter(player, current)) {
						targets.push(current);
					}
					current = current.next;
				}
			}
			event.result = {
				bool: true,
				targets: targets,
			};
		}
	};
	lib.element.player.scqh_dualside = function () {
		var next = game.createEvent('scqh_dualside');
		next.player = this;
		next.setContent('scqh_dualside');
		return next;
	};
	lib.element.content.scqh_dualside = function () {
		var skn = 'scqh_dualside';
		var cfg = player.storage[skn];
		if (!cfg) {
			cfg = ['背面', [player.hp, player.maxHp], []];
			var hp2 = 0;
			var maxhp2 = 0;
			var back1 = false;
			var back2 = false;
			var info = lib.character[player.name1];
			if (info && info[4]) {
				for (var j = 0; j < info[4].length; j++) {
					if (info[4][j].indexOf('dualside:') == 0) {
						cfg[1].push(player.name1);
						back1 = info[4][j].slice(9);
						var xx = lib.character[back1];
						hp2 += get.infoHp(xx[2]);
						maxhp2 += get.infoMaxHp(xx[2]);
					}
				}
			}
			if (player.name2) {
				var info2 = lib.character[player.name2];
				if (info2 && info2[4]) {
					for (var j = 0; j < info2[4].length; j++) {
						if (info2[4][j].indexOf('dualside:') == 0) {
							cfg[1].push(player.name2);
							back2 = info2[4][j].slice(9);
							var yy = lib.character[back2];
							hp2 += get.infoHp(yy[2]);
							maxhp2 += get.infoMaxHp(yy[2]);
						}
					}
				}
			}
			cfg[2].push(hp2);
			cfg[2].push(maxhp2);
			if (back1) cfg[2].push(back1);
			if (back2) cfg[2].push(back2);
			if (back1 || back2) {
				player.storage[skn] = cfg;
				if (cfg[0] == '背面') {
					player.markSkill(skn + '_b');
				} else player.markSkill(skn + '_a');
			}
		}
	};
	lib.element.player.sew_skillUsable = function (name, num) {
		var next = game.createEvent('sew_skillUsable');
		next.player = this;
		next.name = name;
		next.num = num;
		next.setContent('sew_skillUsable');
		return next;
	};
	lib.element.content.sew_skillUsable = function () {
		if (player.getStat('triggerSkill')[event.name]) {
			player.getStat('triggerSkill')[event.name] += num;
		}
		if (player.getStat('skill')[event.name]) {
			player.getStat('skill')[event.name] += num;
		}
	};
	lib.element.player.sew_addTroop = function (skill, troop) {
		var next = game.createEvent('sew_addTroop');
		next.player = this;
		next.skill = skill || false;
		next.troop = troop || 'zhu';
		next.setContent('sew_addTroop');
		return next;
	};
	lib.element.content.sew_addTroop = function () {
		'step 0';
		if (event.skill == false) event.finish();
		('step 1');
		if (player.storage[event.skill] == undefined) {
			player.storage[event.skill] = [];
		}
		('step 2');
		if (event.troop == 'zhu') {
			var isZhu = true;
			for (const i of player.storage[event.skill]) {
				if (i && i[4] && i[4] == 'isZhu') {
					isZhu = false;
					break;
				}
			}
			if (isZhu == true) {
				var zhu = player.name;
				if (lib.character[player.name][3].includes(event.skill)) {
					zhu = player.name;
				} else if (player.name2 && lib.character[player.name2][3].includes(event.skill)) {
					zhu = player.name2;
				}
				var info = lib.character[zhu];
				var hp = get.infoHp(info[2]);
				var maxHp = get.infoMaxHp(info[2]);
				var str = [zhu, hp, maxHp, 'isAlive', 'isZhu'];
				player.storage[event.skill].push(str);
			}
		} else {
			var info = lib.character[event.troop];
			var hp = get.infoHp(info[2]);
			var maxHp = get.infoMaxHp(info[2]);
			var str = [event.troop, hp, maxHp, 'isAlive', 'isTroop'];
			player.storage[event.skill].push(str);
		}
	};
	lib.element.player.pcr_addTplist = function () {
		var next = game.createEvent('pcr_addTplist');
		next.player = this;
		next.setContent('pcr_addTplist');
		return next;
	};
	lib.element.content.pcr_addTplist = function () {
		'step 0';
		player.storage.pcr_addTplist = true;
		if (!player.pcrTp) player.pcrTp = 0;
		if (!player.pcrTp_up) player.pcrTp_up = 0;
		if (!player.pcrTp_down) player.pcrTp_down = 0;
		if (!player.pcrCrit) player.pcrCrit = 0;
		if (!player.pcrShield_MIX) player.pcrShield_MIX = 0;
		if (!player.pcrShield_AD) player.pcrShield_AD = 0;
		if (!player.pcrShield_AP) player.pcrShield_AP = 0;
		if (!player.pcrShield_MIX_recover) player.pcrShield_MIX_recover = 0;
		if (!player.pcrShield_AD_recover) player.pcrShield_AD_recover = 0;
		if (!player.pcrShield_AP_recover) player.pcrShield_AP_recover = 0;
		('step 1');
		game.broadcastAll(function (player) {
			_status.ui_pcrTp = {};
			var np = ui.create.div('');
			np.style.width = 'calc(5%)';
			np.style.height = 'calc(42.5%)';
			np.style.left = 'calc(35%)';
			np.style.top = 'calc(-25%)';
			np.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))';
			np.style['box-shadow'] = 'rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			np.style.borderRadius = '8px';
			np.style.transform = 'rotate(-90deg)';
			player.appendChild(np);
			_status.ui_pcrTp.np = np;
			var np1 = ui.create.div('');
			np1.style.width = 'calc(100%)';
			setInterval(function () {
				if (player.pcrTp > 1000) {
					player.pcrTp = 1000;
				}
				var p = player.pcrTp;
				np1.style.height = 'calc(' + p / 10 + '%)';
			}, 600);
			np1.style.left = '0px';
			np1.style.top = '0px';
			np1.style.borderRadius = '8px';
			setInterval(function () {
				np1.setBackgroundImage('extension/' + lib.scqhExtension + '/ui/ui_pcrTp.jpg');
			}, 600);
			np1.style.backgroundSize = '100% 80px';
			np.appendChild(np1);
			_status.ui_pcrTp.np1 = np1;
			var np2 = ui.create.div('');
			np2.style.width = 'calc(100%)';
			np2.style.height = '8px';
			np2.style.left = '0px';
			np2.style.top = 'calc(50% - 4px)';
			np2.style['white-space'] = 'nowrap';
			np2.style['font-size'] = '10px';
			np2.style['text-align'] = 'center';
			np2.style['font-family'] = 'xinwei';
			np2.style.transform = 'rotate(90deg)';
			np2.style.borderRadius = '8px';
			np.appendChild(np2);
			setInterval(function () {
				np2.innerHTML = player.pcrTp;
			}, 100);
			_status.ui_pcrTp.np2 = np2;
		}, player);
	};
	lib.element.player.pcr_changeTp = function () {
		var next = game.createEvent('pcr_changeTp');
		next.player = this;
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == 'number') {
				next.num = arguments[i];
			} else if (get.itemtype(arguments[i]) == 'player') {
				next.target = arguments[i];
			} else if (typeof arguments[i] == 'boolean') {
				next.bool = arguments[i];
			}
		}
		if (next.num == undefined) next.num = 'ub';
		if (next.bool == undefined) next.bool = false;
		if (next.target == undefined) next.target = false;
		next.setContent('pcr_changeTp');
		return next;
	};
	lib.element.content.pcr_changeTp = function () {
		if (event.bool != false && target != false) {
			if (target.pcrTp) {
				target.pcrTp -= Math.abs(num);
				if (target.pcrTp < 0) target.pcrTp = 0;
			}
			game.log(target, '被', player, '偷取了' + Math.abs(num) + '点TP值');
		}
		if (!player.pcrTp || player.pcrTp < 0) player.pcrTp = 0;
		var length;
		if (num == 'ub') {
			length = -1000 * (1 - player.pcrTp_down / 100);
		} else if (num > 0) {
			length = num * (1 + player.pcrTp_up / 100);
		} else if (num < 0) {
			length = num;
		}
		player.pcrTp += Math.floor(length);
		if (player.pcrTp > 1000) player.pcrTp = 1000;
		if (player.pcrTp < 0) player.pcrTp = 0;
		game.log(player, (Math.floor(length) > 0 ? '回复' : '扣掉') + '了' + Math.abs(Math.floor(length)) + '点TP值');
	};
	lib.element.player.pcr_varyTp = function (num, vary, target) {
		var next = game.createEvent('pcr_varyTp');
		next.player = this;
		next.target = target;
		next.num = num || 1;
		next.vary = vary;
		next.setContent('pcr_varyTp');
		return next;
	};
	lib.element.content.pcr_varyTp = function () {
		if (event.vary == 'TP上升') {
			player.pcr_TP上升 += num;
			if (player.pcr_TP上升 < 0) player.pcr_TP上升 = 0;
			if (player.pcr_TP上升 > 0) player.markSkill('scqh_pcr_mark');
		}
		if (event.vary == 'TP减轻') {
			player.pcr_TP减轻 += num;
			if (player.pcr_TP减轻 > 100) player.pcr_TP减轻 = 100;
			if (player.pcr_TP减轻 < 0) player.pcr_TP减轻 = 0;
			if (player.pcr_TP减轻 > 0) player.markSkill('scqh_pcr_mark');
		}
	};
	lib.element.player.pcr_hudun = function (num, 属性, 类型, 续航, 破盾, target) {
		var next = game.createEvent('pcr_hudun');
		next.player = this;
		next.num = num || 1;
		next.属性 = 属性 || '物理';
		next.类型 = 类型 || '无效';
		next.续航 = 续航 || 0;
		next.破盾 = 破盾 || false;
		next.target = target;
		next.setContent('pcr_hudun');
		return next;
	};
	lib.element.content.pcr_hudun = function () {
		var str = 'scqh_pcr_' + event.属性;
		var str2 = str + event.类型;
		if (num > 0) {
			if (event.类型 == '吸收') {
				player.storage[str + '无效'] = 0;
				player.storage[str + '无效_续航'] = 0;
			}
			player.storage[str2] = num;
			player.storage[str2 + '_续航'] = event.续航;
		} else if (num < 0) {
			player.storage[str2] -= Math.abs(num);
			player.storage[str2] -= player.storage[str2 + '_续航'];
			game.log(player, '的护盾抵消了', Math.abs(num), '点伤害');
		}
		if (player.storage[str2] < 0 || player.storage[str2 + '_续航'] < 0) {
			player.storage[str2] = 0;
			player.storage[str2 + '_续航'] = 0;
		}
		player.markSkill('scqh_pcr_mark');
		if (event.破盾 && target) {
			target.hujia = 0;
			target.pcr_TP减轻 = 0;
			target.pcr_TP上升 = 0;
			target.storage.scqh_pcr_双盾无效 = 0;
			target.storage.scqh_pcr_双盾吸收 = 0;
			target.storage.scqh_pcr_物理无效 = 0;
			target.storage.scqh_pcr_物理吸收 = 0;
			target.storage.scqh_pcr_魔法无效 = 0;
			target.storage.scqh_pcr_魔法吸收 = 0;
			target.storage.scqh_pcr_双盾无效_续航 = 0;
			target.storage.scqh_pcr_双盾吸收_续航 = 0;
			target.storage.scqh_pcr_物理无效_续航 = 0;
			target.storage.scqh_pcr_物理吸收_续航 = 0;
			target.storage.scqh_pcr_魔法无效_续航 = 0;
			target.storage.scqh_pcr_魔法吸收_续航 = 0;
			target.markSkill('scqh_pcr_mark');
		}
	};
	lib.element.player.pcr_speed = function (num, 类型, 续航) {
		var next = game.createEvent('pcr_speed');
		next.player = this;
		next.num = num || 1;
		next.类型 = 类型 || '加速';
		next.续航 = 续航 || 0;
		next.setContent('pcr_speed');
		return next;
	};
	lib.element.content.pcr_speed = function () {
		var str = 'scqh_pcr_行动速度_' + event.类型;
		if (num >= player.storage[str]) {
			player.storage[str] = num;
			player.storage[str + '_续航'] = event.续航;
			player.markSkill('scqh_pcr_mark');
		}
	};
	lib.element.player.pcr_攻击 = function (target, 属性, 无双, 必中, 必暴, 暴击伤害, 额外伤害) {
		var next = game.createEvent('pcr_攻击');
		next.player = this;
		next.target = target;
		next.属性 = 属性 || '物理';
		next.无双 = 无双 || 1;
		next.必中 = 必中 || false;
		next.必暴 = 必暴 || false;
		next.暴击伤害 = 暴击伤害 || 2;
		next.额外伤害 = 额外伤害 || 0;
		next.setContent('pcr_攻击');
		return next;
	};
	lib.element.content.pcr_攻击 = function () {
		'step 0';
		if (!target || (Array.isArray(target) && !target.length)) {
			event.finish();
		}
		('step 1');
		event.num = 0;
		if (Array.isArray(target)) event.tar = target.sortBySeat();
		else event.tar = target;
		('step 2');
		if (Array.isArray(event.tar)) var targed = event.tar[event.num];
		else var targed = event.tar;
		if (!targed.isAlive()) event.goto(5);
		else {
			if (event.必中) {
				event._result = { bool: false };
			} else if (event.skipShan) {
				event._result = { bool: true, result: 'shaned' };
			} else {
				var next = targed.chooseToUse('请使用一张闪响应');
				next.set('type', 'respondShan');
				next.set('filterCard', function (card, player) {
					if (card.name != 'shan') return false;
					return lib.filter.cardEnabled(card, player, 'forceEnable');
				});
				if (event.无双 > 1) {
					next.set('prompt2', '(共需使用' + event.无双 + '张闪)');
				}
				next.set('ai1', function (card) {
					var target = _status.event.player;
					var evt = _status.event.parent;
					var bool = true;
					if (_status.event.无双 > 1 && target.countCards('h', 'shan') < _status.event.无双) {
						bool = false;
					} else if (target.hasSkillTag('useShan')) {
						bool = true;
					} else if (target.hasSkillTag('noShan')) {
						bool = false;
					}
					if (bool) {
						return get.order(card);
					}
					return 0;
				});
				next.set('无双', event.无双);
				next.set('respondTo', [player, '普通攻击', event.属性]);
			}
		}
		('step 3');
		if (!result || !result.bool || !result.result || result.result != 'shaned') {
			event.trigger('shaHit');
		} else {
			event.无双--;
			if (event.无双 > 0) event.goto(2);
			else {
				event.trigger('shaMiss');
				event.responded = result;
			}
		}
		('step 4');
		if (Array.isArray(event.tar)) var targed = event.tar[event.num];
		else var targed = event.tar;
		if ((!result || !result.bool || !result.result || result.result != 'shaned') && !event.unhurt) {
			var damage = 1 + event.额外伤害;
			if (event.必暴 || (player.storage.scqh_pcr_暴击率 && Math.random() <= player.storage.scqh_pcr_暴击率)) {
				damage = damage * event.暴击伤害;
			}
			targed.damage(damage);
			event.result = { bool: true };
			event.trigger('shaDamage');
		} else {
			event.result = { bool: false };
			event.trigger('shaUnhirt');
		}
		('step 5');
		if (Array.isArray(event.tar)) {
			event.num++;
			if (event.num < event.tar.length) {
				event.goto(2);
			}
		}
	};
	lib.element.player.sew_炸金花 = function (targets) {
		var next = game.createEvent('sew_炸金花');
		next.player = this;
		next.targets = targets;
		next.setContent('sew_炸金花');
		return next;
	};
	lib.element.content.sew_炸金花 = function () {
		'step 0';
		if (targets.length) {
			event.skn = 'scqh_zhinv_炸金花';
			targets.sort(lib.sort.seat);
			for (var i = 0; i < targets.length; i++) {
				var cards = get.cards(3);
				cards.sort(function (a, b) {
					return b.number - a.number;
				});
				targets[i].addToExpansion(cards, 'draw').gaintag.add(event.skn);
				targets[i].markSkill(event.skn);
			}
		} else event.finish();
		('step 1');
		event.list = [];
		event.豹子 = [];
		event.同顺 = [];
		event.同花 = [];
		event.顺子 = [];
		event.对子 = [];
		event.单牌 = [];
		for (var i = 0; i < targets.length; i++) {
			var named = targets[i];
			var name = get.translation(targets[i].name);
			var cards = targets[i].getCards('x', function (card) {
				return card.hasGaintag(event.skn);
			});
			if (cards.length) {
				cards.sort(function (a, b) {
					return b.number - a.number;
				});
				var str = name + ' 的牌型是';
				if (cards[0].number == cards[1].number && cards[0].number == cards[2].number && cards[1].number == cards[2].number) {
					str += '【豹子】';
					game.log(str);
					event.豹子.push(named, cards);
				} else if (cards[0].suit == cards[1].suit && cards[0].suit == cards[2].suit && cards[1].suit == cards[2].suit && cards[0].number - cards[1].number == 1 && cards[1].number - cards[2].number == 1) {
					str += '【同花顺】';
					game.log(str);
					event.同顺.push(named, cards);
				} else if (cards[0].suit == cards[1].suit && cards[0].suit == cards[2].suit && cards[1].suit == cards[2].suit) {
					str += '【同花】';
					game.log(str);
					event.同花.push(named, cards);
				} else if (cards[0].number - cards[1].number == 1 && cards[1].number - cards[2].number == 1) {
					str += '【顺子】';
					game.log(str);
					event.顺子.push(named, cards);
				} else if (cards[0].number == cards[1].number || cards[0].number == cards[2].number || cards[1].number == cards[2].number) {
					str += '【对子】';
					game.log(str);
					event.对子.push(named, cards);
				} else {
					str += '【单牌】';
					game.log(str);
					event.单牌.push(named, cards);
				}
				event.list.push(str, cards);
			}
		}
		('step 2');
		var abb = false;
		if (event.豹子.length) {
			if (event.豹子.length == 2) event.win = event.豹子[0];
			else abb = event.豹子;
		} else if (event.同顺.length) {
			if (event.同顺.length == 2) event.win = event.同顺[0];
			else abb = event.同顺;
		} else if (event.同花.length) {
			if (event.同花.length == 2) event.win = event.同花[0];
			else abb = event.同花;
		} else if (event.顺子.length) {
			if (event.顺子.length == 2) event.win = event.顺子[0];
			else abb = event.顺子;
		} else if (event.对子.length) {
			if (event.对子.length == 2) event.win = event.对子[0];
			else abb = event.对子;
		} else if (event.单牌.length) {
			if (event.单牌.length == 2) event.win = event.单牌[0];
			else abb = event.单牌;
		}
		if (abb && !event.win) {
			for (var i = 0; i <= abb.length - 3; i += 2) {
				if (abb[i + 1] && abb[i + 3]) {
					if (abb[i + 1][0].number > abb[i + 3][0].number) {
						event.win = abb[i];
					} else if (abb[i + 3][0].number > abb[i + 1][0].number) {
						event.win = abb[i + 2];
					}
				}
			}
			if (!event.win) {
				game.log('第一张牌无胜利者');
				for (var i = 0; i <= abb.length - 3; i += 2) {
					if (abb[i + 1] && abb[i + 3]) {
						if (abb[i + 1][1].number > abb[i + 3][1].number) {
							event.win = abb[i];
						} else if (abb[i + 3][1].number > abb[i + 1][1].number) {
							event.win = abb[i + 2];
						}
					}
				}
				if (!event.win) {
					game.log('第二张牌无胜利者');
					for (var i = 0; i <= abb.length - 3; i += 2) {
						if (abb[i + 1] && abb[i + 3]) {
							if (abb[i + 1][2].number > abb[i + 3][2].number) {
								event.win = abb[i];
							} else if (abb[i + 3][2].number > abb[i + 1][2].number) {
								event.win = abb[i + 2];
							}
						}
					}
					if (!event.win) game.log('第三张牌无胜利者');
				}
			}
		}
		('step 3');
		if (event.list.length) {
			var next = player.chooseButton(true, -1, event.list);
			next.set('ai', function (button) {
				return 1;
			});
		}
		('step 4');
		if (result.bool && event.win) {
			event.cards = result.links;
			game.log(event.win, '赢得了此次【炸金花】游戏的胜利');
			for (var i = 0; i < targets.length; i++) {
				var cards = targets[i].getCards('x', function (card) {
					return card.hasGaintag(event.skn);
				});
				if (cards.length) {
					targets[i].lose(cards, ui.discardPile);
					targets[i].$throw(cards, 1000);
				}
			}
			event.trigger('sew_炸金花_win');
		} else {
			game.log('无人获胜,重新发牌');
			event.goto(0);
		}
		('step 5');
		for (var i = 0; i < targets.length; i++) {
			var cards = targets[i].getCards('x', function (card) {
				return card.hasGaintag(event.skn);
			});
			if (cards.length) {
				targets[i].lose(cards, ui.discardPile);
				targets[i].$throw(cards, 1000);
			}
			targets[i].unmarkSkill(event.skn);
		}
	};
	lib.element.player.sew_JunlingFor = function (targets, length) {
		var next = game.createEvent('sew_JunlingFor');
		next.player = this;
		next.targets = targets;
		next.length = length || 2;
		next.setContent('sew_JunlingFor');
		return next;
	};
	lib.element.content.sew_JunlingFor = function () {
		'step 0';
		if (!targets.length) event.finish();
		('step 1');
		event.no = 0;
		event.yes = 0;
		event.num = 0;
		('step 2');
		var list = ['junling1', 'junling2', 'junling3', 'junling4', 'junling5', 'junling6'];
		list = list.randomGets(event.length).sort();
		for (var i = 0; i < list.length; i++) {
			list[i] = ['军令', '', list[i]];
		}
		var prompt = event.prompt || '选择一张军令牌';
		prompt += ',令' + get.translation(targets) + '选择是否执行';
		var next = player.chooseButton([prompt, [list, 'vcard']], true);
		next.set('ai', function (button) {
			return get.junlingEffect(_status.event.player, button.link[2], _status.event.parent.target, [], _status.event.player);
		});
		('step 3');
		event.junling = result.links[0][2];
		event.targets2 = [];
		if (result.links[0][2] == 'junling1') {
			var next = player.chooseTarget('选择一名角色,做为若该军令被执行,受到伤害的角色', true);
			next.set('ai', function (_target) {
				return get.damageEffect(_target, target, player);
			});
		} else event.goto(5);
		('step 4');
		if (result.targets.length) {
			player.line(result.targets, 'green');
			event.targets2 = result.targets;
		}
		('step 5');
		var dialog = [];
		var prompt2 = get.translation(player) + '选择的军令为';
		dialog.add(prompt2);
		dialog.add([[event.junling], 'vcard']);
		var controls = [];
		if (event.choiceList) {
			for (var i = 0; i < event.choiceList.length; i++) {
				dialog.add('选项' + get.cnNumber(i + 1, true) + ':' + event.choiceList[i]);
				controls.push('选项' + get.cnNumber(i + 1, true));
			}
		} else if (event.controls) controls = event.controls;
		else controls = ['执行该军令', '不执行该军令'];
		if (!event.ai) {
			event.ai = function () {
				return Math.floor(controls.length * Math.random());
			};
		}
		var next = targets[event.num].chooseControl(controls);
		next.set('dialog', dialog);
		next.set('ai', event.ai);
		('step 6');
		if (result.index == 0) {
			event.yes++;
			targets[event.num].sew_carryOutJunling(true, player, event.junling, event.targets2);
		} else {
			event.no++;
			targets[event.num].sew_carryOutJunling(false, player, event.junling, event.targets2);
		}
		('step 7');
		event.num++;
		if (event.num < targets.length) {
			event.goto(5);
		}
		('step 8');
		event.result = {
			yes: event.yes,
			no: event.no,
		};
	};
	lib.element.player.sew_carryOutJunling = function (carryout, source, junling, targets) {
		var next = game.createEvent('sew_carryOutJunling');
		next.player = this;
		next.carryout = carryout || false;
		next.source = source;
		next.junling = junling;
		next.targets = targets;
		next.setContent('sew_carryOutJunling');
		return next;
	};
	lib.element.content.sew_carryOutJunling = function () {
		'step 0';
		if (event.carryout == false) event.finish();
		('step 1');
		switch (event.junling) {
			case 'junling1': {
				if (targets[0].isAlive()) {
					player.line(targets[0], 'green');
					targets[0].damage(player);
				}
				break;
			}
			case 'junling2': {
				player.draw();
				break;
			}
			case 'junling3': {
				player.loseHp();
				break;
			}
			case 'junling4': {
				player.addTempSkill('junling4_eff');
				player.addTempSkill('fengyin_vice');
				player.addTempSkill('fengyin_main');
				break;
			}
			case 'junling5': {
				player.turnOver();
				player.addTempSkill('junling5_eff');
				break;
			}
		}
		('step 2');
		if (event.junling == 'junling2' && source != player && player.countCards('he')) {
			var str = '交给' + get.translation(source) + '两张牌';
			player.chooseCard(str, 2, 'he', true);
		}
		if (event.junling == 'junling6') {
			var position = '';
			var num = 0;
			if (player.countCards('h')) {
				position += 'h';
				num++;
			}
			if (player.countCards('e')) {
				position += 'e';
				num++;
			}
			var str = '选择一张手牌和一张装备区内牌(若有),弃置其余的牌';
			var next = player.chooseCard(
				str,
				position,
				num,
				function (card) {
					if (ui.selected.cards.length) return get.position(card) != get.position(ui.selected.cards[0]);
					return true;
				},
				true
			);
			next.set('complexCard', true);
			next.set('ai', function (card) {
				return get.value(card);
			});
		}
		('step 3');
		if (event.junling == 'junling2' && source != player && result.cards.length) {
			player.give(result.cards, source);
		}
		if (event.junling == 'junling6') {
			var car = player.getCards('he');
			if (Array.isArray(result.cards)) for (const i of result.cards) {
				car.remove(i);
			}
			player.discard(car);
		}
	};
};

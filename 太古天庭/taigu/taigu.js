import {
	initGouzhu
} from './gouzhu.js';
import {
	initGalgame
} from './galgame.js';
export let tgtt_version = 4;
export function TaiguPack(lib, game, ui, get, ai, _status, datasrc) {
	if (!lib.tgtt_custom) lib.tgtt_custom = {};
	if (!lib.tgtt_custom.cards) lib.tgtt_custom.cards = [];
	if (!lib.tgtt_custom.ep) lib.tgtt_custom.ep = [];
	if (!lib.tgtt_custom.triggerUp) lib.tgtt_custom.triggerUp = [];
	if (!lib.element.player.inits) {
		lib.element.player.inits = [];
	}
	if (!lib.element.card.inits) {
		lib.element.card.inits = [];
	}
	if (!lib.tgtt_version) {
		lib.arenaReady.push(function () {
			game.tgtt_loadData();
		});
	}
	if (lib.tgtt_version && lib.tgtt_version >= tgtt_version) return;
	lib.tgtt_version = tgtt_version;
	game.tgtt_loadData = function () {
		initGouzhu(lib, game, ui, get, ai, _status, datasrc);
		initGalgame(lib, game, ui, get, ai, _status, datasrc);
		//置于武将牌上直至回合结束
		lib.element.player.tgtt_gainExpansions = function (cards) {
			this.addTempSkill('tgtt_gainExpansions');
			this.addToExpansion('giveAuto', cards, this).gaintag.add('tgtt_gainExpansions');
		}
		lib.skill.tgtt_gainExpansions = {
			charlotte: true,
			intro: {
				markcount: "expansion",
				mark(dialog, storage, player) {
					var cards = player.getExpansions('tgtt_gainExpansions');
					if (player.isUnderControl(true)) dialog.addAuto(cards);
					else return '共有' + get.cnNumber(cards.length) + '张牌';
				},
				onunmark(storage, player) {
					var cards = player.getExpansions('tgtt_gainExpansions');
					player.gain(cards, 'draw');
					game.log(player, '收回了' + get.cnNumber(cards.length) + '张牌');
				},
			},
			mark: true,
		}
		lib.translate.tgtt_gainExpansions = '盖牌';
		//环境牌
		lib.skill.tgtt_map = {
			trigger: {
				global: 'phaseBefore',
				player: ['roundStart', 'enterGame'],
			},
			forced: true,
			priority: 100,
			popup: false,
			firstDo: true,
			filter(event, player, name) {
				if (name == 'roundStart') return ui.tgtt_map && ui.tgtt_map.roundNumber;
				return event.name != 'phase' || game.phaseNumber == 0;
			},
			content() {
				if (event.triggername == 'roundStart') {
					ui.tgtt_map.roundNumber--;
					if (ui.tgtt_map.roundNumber == 0) ui.tgtt_map.destroy();
				} else {
					var skills = player.getSkills();
					for (var i of skills) {
						var name = get.info(i).tgtt_map;
						if (name) game.tgtt_changeMap(name).roundNumber = 3;
					}
				}
			},
		}
		game.addGlobalSkill('tgtt_map');
		game.tgtt_changeMap = function (name) {
			if (!name) return;
			if (ui.tgtt_map && ui.tgtt_map.name == name) return;
			var node = ui.create.div('.background.upper.land');
			node.setBackgroundImage('extension/太古天庭/image/' + name + '.jpg');
			node.destroy = function () {
				game.removeGlobalSkill(this.name);
				if (this.system) {
					this.system.remove();
				}
				var info = lib.skill[this.name];
				if (info.subSkill) {
					for (var i in info.subSkill) {
						game.removeGlobalSkill(this.name + '_' + i);
					}
				}
				if (info.over) {
					var next = game.createEvent(this.name + 'Over');
					next.setContent(info.over);
				}
				this.classList.add('hidden');
				var node = this;
				setTimeout(function () {
					node.remove();
				}, 3000);
				if (ui.tgtt_map == this) {
					ui.tgtt_map = null;
				}
			}
			if (ui.tgtt_map) {
				document.body.insertBefore(node, ui.tgtt_map);
				ui.tgtt_map.destroy();
			} else {
				node.classList.add('hidden');
				document.body.insertBefore(node, ui.window);
				ui.refresh(node);
				node.classList.remove('hidden');
			}
			ui.tgtt_map = node;
			node.name = name;
			node.system = ui.create.system(lib.translate[name], null, true, true);
			lib.setPopped(node.system, function () {
				var uiintro = ui.create.dialog('hidden');
				var str = '环境';
				if (node.roundNumber) {
					str = '剩余轮数:' + node.roundNumber;
				}
				var caption = uiintro.addText(str);
				caption.style.margin = '0';
				uiintro._place_text = uiintro.add('<div class="text">' + lib.translate[name + '_info'] + '</div>');
				uiintro.add(ui.create.div('.placeholder.slim'));
				return uiintro;
			}, 200);
			game.addGlobalSkill(name);
			var info = lib.skill[name];
			if (info.subSkill) {
				for (var i in info.subSkill) {
					game.addGlobalSkill(name + '_' + i);
				}
			}
			if (info.start) {
				var next = game.createEvent(name + 'Start');
				next.setContent(info.start);
			}
			return node;
		}
		//无效某一项技能
		lib.skill.tgtt_awakenSkill = {
			init(player, skill) {
				player.addSkillBlocker(skill);
			},
			onremove(player, skill) {
				player.removeSkillBlocker(skill);
			},
			charlotte: true,
			skillBlocker(skill, player) {
				return player.storage.tgtt_awakenSkill.includes(skill);
			},
			mark: true,
			intro: {
				content(storage, player, skill) {
					var list = player.getSkills(null, false, false).filter(function (i) {
						return lib.skill.tgtt_awakenSkill.skillBlocker(i, player);
					});
					if (list.length) return '失效技能:' + get.translation(list);
					return '无失效技能';
				}
			}
		}
		lib.element.player.tgtt_awakenSkill = function (skill) {
			if (!this.storage.tgtt_awakenSkill) this.storage.tgtt_awakenSkill = [];
			this.storage.tgtt_awakenSkill.add(skill);
			this.addSkill('tgtt_awakenSkill');
			return this;
		}
		lib.element.player.tgtt_restoreSkill = function (skill) {
			if (!this.storage.tgtt_awakenSkill) this.storage.tgtt_awakenSkill = [];
			this.storage.tgtt_awakenSkill.remove(skill);
			if (this.storage.tgtt_awakenSkill.length == 0) this.removeSkill('tgtt_awakenSkill');
			return this;
		}
		//指定事件结束后仅一次执行某些效果
		lib.element.player.tgtt_eventAfter = function (id, func, event) {
			if (!event) {
				event = _status.event.getParent('phase');
				if (!event || event.name != 'phase') return {};
			}
			var id = id + '_' + this.playerid;
			if (!event.tgtt_eventAfter) event.tgtt_eventAfter = {};
			if (!event.tgtt_eventAfter[id]) {
				var next = game.createEvent('tgtt_eventAfter', false);
				next.player = this;
				next.setContent(func);
				_status.event.next.remove(next);
				event.after.push(next);
				event.tgtt_eventAfter[id] = next;
			}
			return event.tgtt_eventAfter[id];
		}
		//发动某某场合描述的技能
		lib.element.player.tgtt_delay = function (skill) {
			if (!lib.skill[skill] || !lib.skill[skill].tgtt_delay) return;
			var parent = _status.event.parent;
			while (parent.getParent(2).name != 'phaseLoop') {
				parent = parent.parent;
			}
			if (!parent.tgtt_delay || !parent.next.includes(parent.tgtt_delay)) {
				var next = game.createEvent('tgtt_delay', false, parent);
				next.setContent('tgtt_delay');
				parent.tgtt_delay = next;
			}
			if (!parent.tgtt_delay.tgtt_delayList) parent.tgtt_delay.tgtt_delayList = {};
			var list = parent.tgtt_delay.tgtt_delayList;
			if (!list[this.playerid]) list[this.playerid] = {};
			if (!list[this.playerid][skill]) list[this.playerid][skill] = 0;
			list[this.playerid][skill]++;
			return parent.tgtt_delay;
		}
		lib.element.content.tgtt_delay = function () {
			'step 0'
			event.targets = game.filterPlayer(function (current) {
				return event.tgtt_delayList[current.playerid];
			});
			event.targets.sort(lib.sort.seat);
			'step 1'
			if (event.targets.length) {
				event.current = event.targets.shift();
			} else {
				event.finish();
			}
			'step 2'
			event.list = [];
			for (var skill in event.tgtt_delayList[event.current.playerid]) {
				if (!lib.skill[skill].tgtt_delay.filter || lib.skill[skill].tgtt_delay.filter(event.current, event)) {
					event.list.push(skill);
				}
			}
			'step 3'
			if (!event.list || event.list.length == 0) {
				event.goto(1);
				return;
			}
			if (event.list.length == 1) {
				event._result = {
					bool: true,
					links: event.list,
				}
			} else {
				var dialog = ui.create.dialog('hidden');
				dialog.forcebutton = true;
				for (var i = 0; i < event.list.length; i++) {
					var node = ui.create.caption('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(event.list[i]) + '】</div><div>' + lib.translate[event.list[i] + '_info'] + '</div></div>', dialog.content);
					dialog.buttons.add(node);
					var click = lib.config.touchscreen ? 'touchend' : 'click';
					node.addEventListener(click, ui.click.button);
					node.style.width = 'calc(100% - 30px)';
					node.style.position = 'unset';
					node.link = event.list[i];
				}
				event.current.chooseButton(dialog, '选择以下一个技能发动').set('forceDie', true).set('includeOut', true);
			}
			'step 4'
			if (result.links?.length) {
				var skill = result.links[0];
				var next = game.createEvent(skill);
				next.player = event.current;
				next.num = event.tgtt_delayList[event.current.playerid][skill];
				next.setContent(lib.skill[skill].tgtt_delay.content);
				delete event.tgtt_delayList[event.current.playerid][skill];
				event.goto(2);
			}
		}
		//阵法技
		game.tgtt_zhenfa = function (player, target) {
			if (!player.storage.tgtt_zhenfa || !target.storage.tgtt_zhenfa) return false;
			if (!player.isAlive() || !target.isAlive()) return false;
			return player.storage.tgtt_zhenfa == target.storage.tgtt_zhenfa;
		}
		lib.skill.tgtt_zhenfa = {
			intro: {
				content: "你位于$的阵法队列中",
			},
		};
		lib.translate.tgtt_zhenfa = "阵法";
		//武装技
		lib.skill.tgtt_wuzhuang = {
			enable: "phaseUse",
			filter(event, player) {
				var list = [],
					info;
				var storage = player.storage.tgtt_wuzhuang;
				var skills = player.getSkills(false, false);
				for (var i = 0; i < skills.length; i++) {
					info = get.info(skills[i]);
					if (storage && storage.includes(skills[i])) continue;
					if (info.zhuSkill && !player.hasZhuSkill(skills[i])) continue;
					if (info.tgtt_wuzhuang) return true;
				}
				return false;
			},
			chooseButton: {
				dialog(event, player) {
					var list = [],
						info;
					var storage = player.storage.tgtt_wuzhuang;
					var skills = player.getSkills(false, false);
					for (var i = 0; i < skills.length; i++) {
						info = get.info(skills[i]);
						if (storage && storage.includes(skills[i])) continue;
						if (info.zhuSkill && !player.hasZhuSkill(skills[i])) continue;
						if (info.tgtt_wuzhuang) {
							if (Array.isArray(info.tgtt_wuzhuang)) {
								for (var j = 0; j < info.tgtt_wuzhuang.length; j++) {
									list.push([skills[i], '', info.tgtt_wuzhuang[j].name]);
								}
							} else {
								list.push([skills[i], '', info.tgtt_wuzhuang.name]);
							}
						}
					}
					return ui.create.dialog('选择一项技能武装化', [list, 'vcard']);
				},
				check(button) {
					return 1;
				},
				backup(links, player) {
					return {
						card: links[0],
						delay: false,
						filterCard() {
							return false
						},
						selectCard: -1,
						viewAs: {
							name: links[0][2]
						},
						precontent() {
							var result = event.result;
							event.parent.finish();
							var skill = lib.skill.tgtt_wuzhuang_backup.card[0];
							var card = lib.skill.tgtt_wuzhuang_backup.card[2];
							player.tgtt_wuzhuang(skill, result.targets[0], card);
							var evt = _status.event.getParent('phaseUse');
							if (evt && evt.name == 'phaseUse' && !evt.tgtt_wuzhuang) {
								evt.tgtt_wuzhuang = true;
								var next = game.createEvent('tgtt_wuzhuang_clear');
								_status.event.next.remove(next);
								evt.after.push(next);
								next.player = player;
								next.setContent(function () {
									delete player.storage.tgtt_wuzhuang;
								});
							}
							if (!player.storage.tgtt_wuzhuang) {
								player.storage.tgtt_wuzhuang = [];
							}
							player.storage.tgtt_wuzhuang.push(skill);
						},
					}
				},
			},
			ai: {
				order: 1,
				result: {
					player: 1,
				},
				threaten: 1.5,
			},
		};
		lib.translate.tgtt_wuzhuang = "武装";
		lib.translate.tgtt_wuzhuang_backup = "武装";
		lib.element.player.tgtt_wuzhuang = function (skill, target, direct) {
			var player = this;
			if (!player.hasSkill(skill)) return;
			var card = get.info(skill);
			if (Array.isArray(card.tgtt_wuzhuang)) {
				if (direct) {
					for (var i = 0; i < card.tgtt_wuzhuang.length; i++) {
						if (card.tgtt_wuzhuang[i].name == direct) {
							card = game.createCard(card.tgtt_wuzhuang[i]);
							break;
						}
					}
				}
				if (get.itemtype(card) != 'card') {
					card = game.createCard(card.tgtt_wuzhuang[0]);
				}
			} else {
				card = game.createCard(card.tgtt_wuzhuang);
			}
			card.storage.tgtt_wuzhuang = {
				player: player,
				skill: skill
			};
			card.tgtt_yansheng = true;
			if (!target) target = player;
			target.equip(card);
			player.disableSkill('tgtt_wuzhuang' + skill, skill);
		}
		game.addGlobalSkill('tgtt_wuzhuang');
		//清理衍生卡
		lib.skill.tgtt_discard = {
			trigger: {
				global: ["cardsDiscardAfter", "loseAfter"],
			},
			firstDo: true,
			forced: true,
			filter(event, player) {
				for (var i = 0; i < event.cards.length; i++) {
					if (!event.cards[i].tgtt_yansheng) continue;
					if (get.position(event.cards[i], true) == 'd') return true;
				}
				return false;
			},
			content() {
				for (var i = 0; i < trigger.cards.length; i++) {
					if (!trigger.cards[i].tgtt_yansheng) continue;
					if (get.position(trigger.cards[i], true) != 'd') continue;
					trigger.cards[i].delete();
					var storage = trigger.cards[i].storage.tgtt_wuzhuang
					if (!storage || storage.player != player) continue;
					player.enableSkill('tgtt_wuzhuang' + storage.skill);
				}
			},
		}
		game.addGlobalSkill('tgtt_discard');
		//侍从技
		lib.skill.tgtt_shicong = {
			trigger: {
				player: "damageBefore"
			},
			priority: 100,
			firstDo: true,
			filter(event, player) {
				if (!player.storage.tgtt_shicong) return false;
				var list = player.storage.tgtt_shicong;
				var bool = player.hasSkill('subplayer');
				for (var skill in list) {
					if (bool && list[skill].includes(player.storage.subplayer.name2)) return true;
					if (!player.hasSkill(skill, false, false)) continue;
					for (var subPlayer of list[skill]) {
						if (player.hasSkill(subPlayer)) return true;
					}
				}
				return false;
			},
			forced: true,
			content() {
				'step 0'
				if (player.hasSkill('subplayer')) {
					player.chooseBool('即将受到伤害是否切换回本体？');
				} else {
					event.goto(2);
				}
				'step 1'
				if (result.bool) {
					player.exitSubPlayer();
				}
				event.finish();
				'step 2'
				var skills = [];
				var list = player.storage.tgtt_shicong;
				for (var skill in list) {
					if (!player.hasSkill(skill, false, false)) continue;
					for (var subPlayer of list[skill]) {
						if (player.hasSkill(subPlayer)) skills.push(subPlayer);
					}
				}
				var dialog = ui.create.dialog('即将受到伤害,是否调遣一名随从？', 'hidden');
				dialog.add([skills, 'character']);
				player.chooseButton(dialog);
				'step 3'
				if (result.links?.length) {
					player.callSubPlayer(result.links[0]);
				}
			},
		}
		lib.translate.tgtt_shicong = "侍从";
		game.addGlobalSkill('tgtt_shicong');
		lib.element.player.tgtt_shicong = function (skill) {
			if (!skill) return;
			var next = game.createEvent('tgtt_shicong', false);
			next.player = this;
			next.link = skill;
			next.setContent('tgtt_shicong');
			return next;
		}
		lib.element.content.tgtt_shicong = function () {
			var skill = event.link;
			if (!player.hasSkill(skill)) return;
			var info = get.info(skill).tgtt_shicong;
			if (!info) return;
			if (!player.storage.tgtt_shicong) player.storage.tgtt_shicong = {};
			for (var i in player.storage.tgtt_shicong) {
				if (i == skill) return;
			}
			var hp = get.infoHp(info.hp);
			var maxHp = get.infoMaxHp(info.hp);
			var subPlayer = player.addSubPlayer({
				name: info.name,
				skills: info.skills,
				hp: hp,
				maxHp: maxHp,
				hs: get.cards(4),
				skill: skill,
				sex: info.sex || 'male',
				group: info.group || 'qun',
				intro: '此随从与你的【' + get.translation(skill) + '】共存亡.',
				intro2: '此随从与你的【' + get.translation(skill) + '】共存亡.',
				onremove(player) {
					player.storage.tgtt_shicong[skill].remove(subPlayer);
					if (player.storage.tgtt_shicong[skill].length == 0) player.disableSkill('tgtt_shicong' + skill, skill);
				}
			});
			var nameinfo = lib.character[info.name];
			var subinfo = lib.character[subPlayer];
			for (var i = 0; i < nameinfo[4].length; i++) {
				if (nameinfo[4][i].indexOf('ext:') == 0) {
					subinfo[4].length = 0;
					subinfo[4].add(nameinfo[4][i]);
					player.marks[subPlayer].setBackground(subPlayer, 'character');
				}
			}
			if (!player.storage.tgtt_shicong[skill]) player.storage.tgtt_shicong[skill] = [];
			player.storage.tgtt_shicong[skill].push(subPlayer);
		}
		//条件技
		lib.element.player.tgtt_cost = function () {
			var next = game.createEvent('tgtt_cost', false);
			next.player = this;
			next.cost = [];
			next.inital = {};
			for (var i = 0; i < arguments.length; i++) {
				if (Array.isArray(arguments[i])) {
					next.cost = next.cost.concat(arguments[i]);
				} else if (typeof arguments[i] == 'string') {
					next.link = arguments[i];
				} else {
					next.cost.push(arguments[i]);
				}
			}
			next.setContent('tgtt_cost');
			return next;
		}
		lib.element.content.tgtt_cost = function () {
			if (!event.link || event.cost.length == 0) return;
			var info = get.info(event.link);
			for (var i of event.cost) {
				if (i._triggered == 5) {
					player.tgtt_notIncluded(event.link);
					return;
				}
				if (info.filterCost && !info.filterCost(i, player, event.inital)) {
					player.tgtt_notIncluded(event.link);
					return;
				}
			}
			var next = game.createEvent(event.link, false);
			next.player = player;
			next.cost = event.cost;
			next.inital = event.inital;
			next.setContent(info.contentCost);
		}
		lib.element.player.tgtt_notIncluded = function (skill) {
			var counttrigger = this.getStat('triggerSkill');
			if (counttrigger && counttrigger[skill]) {
				counttrigger[skill]--;
			}
			var stat = this.getStat().skill;
			if (stat && stat[skill]) {
				stat[skill]--
			}
			this.popup('发动失败', 'fire');
			game.log(this, '想要发动', '【' + get.skillTranslation(skill, this) + '】', ',但是失败了!');
		}
		//处理展示类卡牌的效果
		lib.skill.tgtt_showCard = {
			trigger: {
				player: "loseBefore"
			},
			forced: true,
			priority: 100,
			popup: false,
			firstDo: true,
			filter(event) {
				return get.type(event.cards[0]) == 'science' && event.type == 'use';
			},//QQQ
			content() {
				player.showCards(trigger.cards);
				trigger.cancel();
			}
		}
		game.addGlobalSkill('tgtt_showCard');
		//数字选择器
		lib.element.player.chooseCount = function () {
			var next = game.createEvent('chooseCount');
			for (var i = 0; i < arguments.length; i++) {
				if (typeof arguments[i] == 'number') {
					next.num = arguments[i];
				} else if (typeof arguments[i] == 'string') {
					next.str = arguments[i];
				} else if (typeof arguments[i] == 'object') {
					next.arr = arguments[i];
				} else if (typeof arguments[i] == 'function') {
					next.ai = arguments[i];
				}
			}
			next.player = this;
			next.setContent('chooseCount');
			return next;
		}
		lib.element.content.chooseCount = function () {
			'step 0'
			event.result = false;
			if (event.isMine()) {
				if (!event.arr) event.arr = [0, 99];
				if (!event.num) event.num = event.arr[0];
				if (!event.str) event.str = '请选择一个数字';
				event.dialog = ui.create.dialog(event.str);
				event.count = ui.create.control('-', event.num, '+');
				var newcount = event.count.cloneNode(true);
				var list = newcount.childNodes;
				list[0].style.width = '20px';
				list[0].onclick = function () {
					event.num--;
					if (event.num < event.arr[0]) event.num = event.arr[1];
					list[1].innerHTML = event.num;
				}
				list[1].style.width = '60px';
				list[1].onclick = function () {
					newcount.parentNode.removeChild(newcount);
					event.dialog.parentNode.removeChild(event.dialog);
					game.resume();
				}
				list[2].style.width = '20px';
				list[2].onclick = function () {
					event.num++;
					if (event.num > event.arr[1]) event.num = event.arr[0];
					list[1].innerHTML = event.num;
				}
				event.count.parentNode.replaceChild(newcount, event.count);
				ui.updatec();
				game.pause();
			} else {
				event.result = 'ai';
			}
			'step 1'
			if (event.result == 'ai') {
				if (event.ai) {
					event.num = event.ai(event.parent, player);
				} else {
					event.num = 0;
				}
				if (event.num == false) {
					event.num = 0;
				}
				if (event.num == true) {
					event.num = event.arr[1];
				}
				if (event.arr[0] > event.num) {
					event.num = event.arr[0];
				} else if (event.arr[1] < event.num) {
					event.num = event.arr[1];
				}
			}
			ui.updatec();
			event.result = {
				num: event.num,
			}
		}
		//竞速模式
		lib.element.content.tgtt_phaseLoop = function () {
			"step 0"
			var num = 1,
				current = player;
			while (current.seatNum == 0) {
				current.seatNum = num;
				current = current.next;
				num++;
			}
			event.goto(2);
			"step 1"
			for (var i = 0; i < lib.onphase.length; i++) {
				lib.onphase[i]();
			}
			player.phase();
			player.tgtt_changeSpeed(-100);
			"step 2"
			var target;
			var list = get.players(lib.sort.seat);
			var minTimer = Infinity;
			for (var current of list) {
				var time = (100 - current.tgtt_speed) / get.tgtt_speed(current);
				if (time < minTimer) minTimer = time;
			}
			for (var current of list) {
				current.tgtt_changeSpeed(get.tgtt_speed(current) * minTimer);
				if (event.player.tgtt_speed != 100 && current.tgtt_speed == 100) event.player = current;
			}
			event.goto(1);
		}
		if (game.tgtt_speed) {
			lib.element.content.phaseLoop = lib.element.content.tgtt_phaseLoop;
		}
		lib.element.player.tgtt_changeSpeed = function (num) {
			if (!game.tgtt_speed) return;
			if (!num) num = 0;
			var player = this;
			player.tgtt_speed += num;
			var div = player.node.tgtt_speed;
			if (player.tgtt_speed > 100) {
				player.tgtt_speed = 100;
			} else if (player.tgtt_speed < 0) {
				player.tgtt_speed = 0;
			}
			div.style.width = player.tgtt_speed + '%';
		}
		get.tgtt_speed = function (player) {
			if (!game.tgtt_speed) return 0;
			var num = get.tgtt_nature(player.name).magic;
			var storage = player.storage.tgtt_lianjie;
			if (storage) {
				for (var i = 0; i < storage.length; i++) {
					num += get.tgtt_nature(storage[i]).magic;
				}
				num = num / (storage.length + 1);
			}
			num = (game.checkMod(player, num, 'tgtt_magic', player) / 10) + 10;
			if ((player.hp / player.maxHp) > 0.7) {
				num *= 1.25;
			}
			if ((player.hp / player.maxHp) < 0.4) {
				num *= 0.75;
			}
			var count = Math.floor(player.countCards('he') / player.maxHp);
			if (count == 0) {
				num++;
			} else if (count > 5) {
				num -= 5;
			} else {
				num -= count;
			}
			num = game.checkMod(player, num, 'tgtt_speed', player);
			if (num < 3) {
				num = 3;
			}
			if (num > 30) {
				num = 30;
			}
			if (isNaN(num)) return 3;
			return num;
		}
		if (!lib.element.player.inits) {
			lib.element.player.inits = [];
		}
		lib.element.player.inits.add(function (player) {
			//明置技
			var list = player.hiddenSkills;
			if (list) {
				for (var i = 0; i < list.length; i++) {
					var info = get.info(list[i]);
					if (info.tgtt_mingzhi) {
						if (info.init) info.init(player, list[i]);
						if (info.global) {
							if (typeof info.global == 'string') {
								game.addGlobalSkill(info.global);
							} else {
								for (var j = 0; j < info.global.length; j++) {
									game.addGlobalSkill(info.global[j]);
								}
							}
						}
					}
				}
			}
			//初始化速度
			if (game.tgtt_speed && !player.node.speed) {
				var timer = ui.create.div('.tgtt_speed', player);
				player.node.tgtt_timer = timer;
				var div = ui.create.div(timer);
				player.node.tgtt_speed = ui.create.div(div);
				ui.refresh(player.node.tgtt_speed);
				player.tgtt_speed = 0;
			}
		});
		//体力吸取
		lib.element.player.vampire = function () {
			var target, num;
			for (var i = 0; i < arguments.length; i++) {
				if (typeof arguments[i] == 'number') {
					num = arguments[i];
				} else if (get.itemtype(arguments[i]) == 'player') {
					target = arguments[i];
				}
			}
			var next = target.loseHp(num);
			var next2 = game.createEvent('vampire', false);
			_status.event.next.remove(next2);
			next.after.push(next2);
			next2.player = this;
			next2.target = target;
			next2.cause = next;
			next2.setContent(function () {
				var num = event.cause.num;
				if (event.cause._triggered != 5) {
					game.log(player, '吸取了', target, get.cnNumber(num) + '点体力');
					player.recover(num);
				};
			});
			return next;
		};
		//交换判定区
		lib.element.player.swapJudge = function (target) {
			var next = game.createEvent('swapJudge');
			next.player = this;
			next.target = target;
			next.setContent('swapJudge');
			return next;
		};
		lib.element.content.swapJudge = function () {
			'step 0'
			game.log(player, '和', target, '交换了判定区中的牌');
			event.cards = [player.getCards('j'), target.getCards('j')];
			player.lose(event.cards[0], ui.ordering, 'visible');
			target.lose(event.cards[1], ui.ordering, 'visible');
			if (event.cards[0].length) player.$give(event.cards[0], target, false);
			if (event.cards[1].length) target.$give(event.cards[1], player, false);
			'step 1'
			var card;
			for (var i = 0; i < event.cards[1].length; i++) {
				card = event.cards[1][i];
				if (card.viewAs) {
					player.addJudge({
						name: card.viewAs
					}, [card]);
				} else {
					player.addJudge(card);
				}
			}
			for (var i = 0; i < event.cards[0].length; i++) {
				card = event.cards[0][i];
				if (card.viewAs) {
					target.addJudge({
						name: card.viewAs
					}, [card]);
				} else {
					target.addJudge(card);
				}
			}
		}
		//效果改变
		lib.skill.tgtt_cardContent = {
			trigger: {
				player: 'useCardToBefore'
			},
			forced: true,
			filter(event, player) {
				var obj = event.card.huanxiang;
				if (!obj) return false;
				if (typeof obj == 'string') return true;
				if (typeof obj == 'object' && obj.players.includes(event.target)) return true;
				return false;
			},
			priority: 50,
			silent: true,
			content() {
				var obj = trigger.card.huanxiang;
				var name;
				if (typeof obj == 'string') {
					var name = lib.card[obj].content;
				} else {
					var name = lib.card[obj.name].content;
				}
				trigger.content = lib.init.parsex(name);
			},
			forced: true,
			popup: false,
		}
		game.addGlobalSkill('tgtt_cardContent');
		//退场机制
		lib.element.player.tgtt_retreat = function () {
			var next = game.createEvent('tgtt_retreat');
			next.player = this;
			next.setContent('tgtt_retreat');
			return next;
		}
		lib.element.content.tgtt_retreat = function () {
			'step 0'
			event._notrigger.addArray(game.players.concat(game.dead).remove(player));
			event.trigger('dieBefore');
			'step 1'
			event.trigger('dieBegin');
			'step 2'
			event.trigger('die');
			'step 3'
			event.trigger('dieEnd');
			'step 4'
			event.trigger('dieAfter');
		}
		//抛硬币
		game.tgtt_throwCoin = function (bool) {
			if (bool !== true && bool !== false) {
				bool = Math.random() < 0.5 ? true : false;
			}
			_status.event._result = {
				bool: bool
			}
			var pause;
			if (!_status.paused) {
				game.pause();
				pause = true;
			}
			game.broadcastAll(function (bool) {
				var coinContainer = ui.create.div('.fullsize.dice-container', ui.window);
				ui.window.classList.add('dicepaused');
				var coin = ui.create.div('.kp_coin', coinContainer);
				var z = 20;
				var node;
				for (var i = 0; i <= z; i++) {
					node = ui.create.div(coin);
					node.style.transform = 'translateZ(' + i + 'px)';
					if (i == z) {
						node.innerHTML = '童话';
					}
				}
				coinContainer.appendChild(coin);
				if (bool === true) {
					coin.classList.add('kp_coin_true');
				} else {
					coin.classList.add('kp_coin_false');
				}
				coin.addEventListener('webkitAnimationEnd', function () {
					setTimeout(function () {
						coinContainer.delete();
						ui.window.classList.remove('dicepaused');
					}, 300);
					if (pause) setTimeout(game.resume, 800);
				});
			}, bool);
		}
	}
};

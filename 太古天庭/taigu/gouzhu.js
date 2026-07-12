export function initGouzhu(lib, game, ui, get, ai, _status, datasrc) {
	lib.init.css('extension/' + datasrc + '/taigu', 'gouzhu');
	//触发卡牌系统
	lib.skill.tgtt_triggerCard = {
		trigger: {},
		cards: {},
		forced: true,
		priority: 9,
		filter(event, player, name) {
			var cards = lib.skill.tgtt_triggerCard.cards;
			if (!cards[name]) return false;
			_status.tgtt_triggerCard = event;
			for (var i of cards[name]) {
				if (!player.hasUsableCard(i)) continue;
				if (lib.card[i].filter && !lib.card[i].filter(event, player, name)) continue;
				if (!game.hasPlayer(function (current) {
					return lib.filter.targetEnabled({
						name: i
					}, player, current)
				})) continue;
				for (var j in lib.card[i].trigger) {
					if (event[j] != player && j != 'global') continue;
					var trigger = lib.card[i].trigger[j];
					if (trigger == name || (Array.isArray(trigger) && trigger.includes(name))) {
						return true;
					}
				}
			}
			delete _status.tgtt_triggerCard;
			return false;
		},
		content() {
			'step 0'
			var cards = lib.skill.tgtt_triggerCard.cards;
			var next = player.chooseToUse(function (card, player) {
				var name = card.name;
				if (!cards[event.triggername].includes(name)) return false;
				if (!player.hasUsableCard(name)) return false;
				if (lib.card[name].filter && !lib.card[name].filter(trigger, player, event.triggername)) return false;
				for (var i in lib.card[name].trigger) {
					if (trigger[i] != player && i != 'global') continue;
					var tig = lib.card[name].trigger[i];
					if (tig == event.triggername || (Array.isArray(tig) && tig.includes(event.triggername))) {
						return lib.filter.cardEnabled(card, player, 'forceEnable');
					}
				}
				return false;
			});
			next.onresult = function (result) {
				result._apptgtt_args = {
					_trigger: trigger,
				}
			}
			'step 1'
			if (result.bool && lib.skill.tgtt_triggerCard.filter(trigger, player, event.triggername)) {
				event.goto(0);
			}
		},
	};
	lib.translate.tgtt_triggerCard = "卡牌";
	if (!lib.tgtt_gouzhuList) lib.tgtt_gouzhuList = [];
	game.tgtt_triggerUp = function (pack) {
		game.removeGlobalSkill('tgtt_triggerCard');
		var info = lib.skill.tgtt_triggerCard;
		var trigger, card;
		for (var name of lib.cardPack[pack]) {
			card = lib.card[name];
			if (card.tgtt_material) lib.tgtt_gouzhuList.add(name);
			for (var i in card.trigger) {
				if (!info.trigger[i]) info.trigger[i] = [];
				if (Array.isArray(card.trigger[i])) {
					for (var j of card.trigger[i]) {
						trigger = card.trigger[i][j];
						info.trigger[i].add(trigger);
						if (!info.cards[trigger]) info.cards[trigger] = [];
						info.cards[trigger].add(name);
					}
				} else {
					trigger = card.trigger[i];
					info.trigger[i].add(trigger);
					if (!info.cards[trigger]) info.cards[trigger] = [];
					info.cards[trigger].add(name);
				}
			}
		}
		game.addGlobalSkill('tgtt_triggerCard');
	};
	for (var pack of lib.tgtt_custom.triggerUp) {
		game.tgtt_triggerUp(pack);
	}
	lib.element.card.inits.push(function (card) {
		if (!card.name) return;
		var info = lib.card[card.name];
		if (!info.tgtt_material) return;
		if (!card.node.tgtt_ep) card.node.tgtt_ep = ui.create.div('.tgtt_cardep', card);
		card.node.tgtt_ep.innerHTML = '★' + get.tgtt_ep(card, false);
	});
	//设置阶段泛用修改,提高兼容性.
	lib.skill.tgtt_changePhase = {
		trigger: {
			player: "phaseBefore",
		},
		priority: 75,
		firstDo: true,
		forced: true,
		silent: true,
		content() {
			trigger.phaseList = lib.phaseName.slice(0);
		}
	};
	game.addGlobalSkill('tgtt_changePhase');
	//狩猎阶段
	if (lib.config.extension_太古天庭_extTgtt_Cunzaili) {
		lib.phaseName.splice(1, 0, 'phaseHunt');
		lib.element.player.phaseHunt = function () {
			var next = game.createEvent('phaseHunt');
			next.player = this;
			next.num = Math.ceil(this.tgtt_ep / 10);
			next.setContent('phaseHunt');
			return next;
		}
		lib.element.content.phaseHunt = function () {
			"step 0"
			if (event.num <= 0) {
				event.finish();
			} else {
				game.broadcastAll(function (player) {
					if (lib.config.show_phase_prompt) {
						player.popup('狩猎阶段', null, false);
					}
				}, player);
			}
			event.trigger("phaseHuntBegin1");
			game.log(player, '<font color=red>进入了狩猎阶段!</font>');
			"step 1"
			event.link = player.tgtt_changeEp(-event.num);
			"step 2"
			event.trigger("phaseHuntEnd1");
			"step 3"
			event.num = event.link.num;
		}
		//配套存在力
		lib.translate.tgtt_magic = '存在力';
		lib.translate.tgtt_ep = '能力';
		//存在力的回复
		lib.skill._tgttRecoverEp = {
			trigger: {
				source: "damageSource",
			},
			firstDo: true,
			forced: true,
			priority: null,
			popup: false,
			TaiguSkill: true,
			charlotte: true,
			filter(event, player, name) {
				return event.num > 0;
			},
			content() {
				player.tgtt_changeEp(trigger.num);
			},
		}
		lib.skill._tgttGainEp = {
			trigger: {
				global: ["recoverEnd", "gainMaxHpEnd"],
			},
			firstDo: true,
			forced: true,
			priority: null,
			popup: false,
			TaiguSkill: true,
			charlotte: true,
			filter(event, player, name) {
				return event.num > 0 && event.player == player;
			},
			content() {
				player.tgtt_changeEp(trigger.num);
			},
		}
		//存在力的失去
		lib.skill._tgttLoseEp = {
			trigger: {
				global: ["damageEnd", "loseHpEnd", "loseMaxHpEnd"],
			},
			firstDo: true,
			forced: true,
			priority: null,
			popup: false,
			TaiguSkill: true,
			charlotte: true,
			filter(event, player, name) {
				return event.num > 0 && event.player == player;
			},
			content() {
				player.tgtt_changeEp(-trigger.num);
			},
		}
		//存在力为0时死亡
		lib.skill._tgttdelete = {
			trigger: {
				global: ["tgtt_changeEpAfter"],
			},
			firstDo: true,
			forced: true,
			priority: null,
			popup: false,
			TaiguSkill: true,
			charlotte: true,
			filter(event, player, name) {
				return event.player == player && player.tgtt_ep <= 0;
			},
			content() {
				game.log(player, '<font color=red>存在力消逝殆尽,已被吸收!</font>');
				const next = game.createEvent('diex', false);
				next.source = player;
				next.player = player;
				next._triggered = null;
				next.restMap = { type: null, count: null, audio: null };
				next.excludeMark = [];
				next.setContent('die');
				player.delete();
				player.remove();
			},
		}
		lib.element.player.inits.add(function (player) {
			//初始化EP
			if (!player.node.tgtt_ep) {
				var ep = ui.create.div('.tgtt_ep', player);
				var div = ui.create.div(ep);
				player.node.tgtt_ep = ui.create.div(div);
				player.node.tgtt_textEp = document.createElement('span');
				div.appendChild(player.node.tgtt_textEp);
				ui.refresh(player.node.tgtt_ep);
			}
			var result;
			for (var func of lib.tgtt_custom.ep) {
				result = func(player);
			}
			if (result) {
				for (var i in result) {
					player.node.tgtt_ep[i] = result[i];
				}
			}
			if (!player.node.tgtt_ep.type) player.node.tgtt_ep.type = 'tgtt_magic';
			var info = lib.character[player.name1];
			if (info && info[4]) {
				for (var i of info[4]) {
					if (i.indexOf('tgtt_ep:') == 0) {
						var ep = i.slice(6).split('/');
						player.tgtt_ep = parseInt(ep[0]);
						player.tgtt_maxEp = parseInt(ep[1] || ep[0]);
						break;
					}
				}
			}
			if (typeof player.tgtt_ep != 'number') {
				player.tgtt_ep = get.infoHp(lib.tgtt_initEp || 0);
			}
			if (typeof player.tgtt_maxEp != 'number') {
				player.tgtt_maxEp = get.infoMaxHp(lib.tgtt_initEp || 0);
			}
			player.tgtt_update();
		});
		//获取存在力类型,如果给type值就是判断是否为该类型的存在力,不给定则直接告知该角色的存在力类型.
		get.tgtt_typeEp = function (player, type) {
			if (type) {
				if (player.node.tgtt_ep.type == type) return true;
				return false;
			}
			return player.node.tgtt_ep.type;
		}
		//切换能力条
		//实例:player.tgtt_replaceEp({name:'nuqi',color:'linear-gradient(#ff5500, #ff0000)',color2:'linear-gradient(#ffff00, #b4b400)',tgtt_ep:10,tgtt_maxEp:20});
		lib.element.player.tgtt_replaceEp = function (result) {
			this.node.tgtt_ep.type = result.type;
			this.node.tgtt_ep.color = result.color;
			this.node.tgtt_ep.color2 = result.color2;
			this.tgtt_ep = result.tgtt_ep;
			this.tgtt_maxEp = result.tgtt_maxEp;
			this.tgtt_update();
		}
		//更新样式,没实际作用但别动.
		lib.element.player.tgtt_update = function () {
			var num;
			if (this.tgtt_maxEp == 0) {
				if (this.tgtt_ep > 0) {
					num = 101;
				} else {
					num = 100;
				}
			} else {
				num = (this.tgtt_ep / this.tgtt_maxEp) * 100;
			}
			this.node.tgtt_textEp.innerHTML = this.tgtt_ep + '/' + this.tgtt_maxEp;
			if (num > 100) {
				num = 100;
				this.node.tgtt_ep.style.background = (this.node.tgtt_ep.color2 || 'linear-gradient(#ff5500, #ff0000)');
			} else {
				this.node.tgtt_ep.style.background = (this.node.tgtt_ep.color || '');
			}
			this.node.tgtt_ep.style.width = num + '%';
			if (this.tgtt_maxEp == 0 && this.tgtt_ep == 0) {
				this.node.tgtt_ep.parentNode.hide();
			} else {
				this.node.tgtt_ep.parentNode.show();
			}
		};
		//存在力值发生改变,如果传入字符串作为type则只会对对应的能力值进行调整,否则为无差别调整.
		lib.element.player.tgtt_changeEp = function () {
			var next = game.createEvent('tgtt_changeEp');
			next.player = this;
			for (var i = 0; i < arguments.length; i++) {
				if (typeof arguments[i] == 'string') {
					next.type = arguments[i];
				} else if (typeof arguments[i] == 'number') {
					next.num = arguments[i];
				}
			}
			if (!next.num) next.num = 1;
			if (get.tgtt_typeEp(this, next.type) === false) _status.event.next.remove(next);
			next.setContent('tgtt_changeEp');
			return next;
		};
		lib.element.content.tgtt_changeEp = function () {
			var maxEp = game.checkMod(player, player.tgtt_maxEp, 'tgtt_maxEp', player);
			if (num > maxEp - player.tgtt_ep) {
				num = maxEp - player.tgtt_ep;
				if (num < 0) num = 0;
				event.num = num;
			}
			if (num < 0 && -num > player.tgtt_ep) {
				num = -player.tgtt_ep;
				event.num = num;
			}
			if (num == 0) return;
			player.$damagepop(num, player.node.tgtt_ep.pop || 'ep');
			game.log(player, (num > 0 ? '回复' : '失去') + '了' + get.cnNumber(Math.abs(num)) + '点' + get.translation(player.node.tgtt_ep.type || 'tgtt_ep'));
			player.tgtt_ep += num;
			player.tgtt_update();
		};
		//存在力上限发生改变,如果传入字符串作为type则只会对对应的能力值进行调整,否则为无差别调整.
		lib.element.player.tgtt_changeMaxEp = function (num) {
			if (num == 0) return;
			var next = game.createEvent('tgtt_changeMaxEp');
			next.player = this;
			for (var i = 0; i < arguments.length; i++) {
				if (typeof arguments[i] == 'string') {
					next.type = arguments[i];
				} else if (typeof arguments[i] == 'number') {
					next.num = arguments[i];
				}
			}
			if (!next.num) next.num = 1;
			if (get.tgtt_typeEp(this, next.type) === false) _status.event.next.remove(next);
			next.setContent('tgtt_changeMaxEp');
			return next;
		};
		lib.element.content.tgtt_changeMaxEp = function () {
			game.log(player, (num > 0 ? '增加' : '减少') + '了' + get.cnNumber(Math.abs(num)) + '点' + get.translation(player.node.tgtt_ep.type || 'tgtt_ep') + '上限');
			if (num < 0 && -num > player.tgtt_maxEp) {
				num = -player.tgtt_maxEp;
				event.num = num;
			}
			if (num == 0) return;
			player.tgtt_maxEp += num;
			player.tgtt_update();
		};
		//存在力值是否为全场最大,传入equal则判定是否为唯一最大.
		lib.element.player.tgtt_isMaxEp = function (equal) {
			for (var i of game.players) {
				if (i.isOut() || i == this) continue;
				if (equal) {
					if (i.tgtt_ep >= this.tgtt_ep) return false;
				} else {
					if (i.tgtt_ep > this.tgtt_ep) return false;
				}
			}
			return true;
		};
		//存在力上限是否为全场最大,传入equal则判定是否为唯一最大.
		lib.element.player.tgtt_isMinEp = function (equal) {
			for (var i of game.players) {
				if (i.isOut() || i == this) continue;
				if (equal) {
					if (i.tgtt_ep <= this.tgtt_ep) return false;
				} else {
					if (i.tgtt_ep < this.tgtt_ep) return false;
				}
			}
			return true;
		};
		//查询构筑的历史,all的值为true的话,则查询所有构筑历史;
		lib.element.player.getGouzhuHistory = function (filter, all) {
			if (all) {
				return player.getAllHistory('custom', function (event) {
					if (event.name != 'tgtt_gouzhu') return false;
					return filter(event);
				});
			}
			return player.getHistory('custom', function (event) {
				if (event.name != 'tgtt_gouzhu') return false;
				return filter(event);
			});
		}
	}
	//进行非常规构筑
	lib.element.player.tgtt_useGouzhu = function () {
		var next = game.createEvent('tgtt_useGouzhu');
		next.player = this;
		next.setContent('tgtt_useGouzhu');
		return next;
	}
	lib.element.content.tgtt_useGouzhu = function () {
		"step 0"
		var info = lib.skill.tgtt_gouzhu;
		var dialog = info.chooseButton.dialog(event, player);
		var next = player.chooseButton(dialog);
		next.set('selectButton', info.chooseButton.select);
		next.set('filterButton', info.chooseButton.filter);
		next.set('ai', info.chooseButton.check);
		next.set('filterOk', info.chooseButton.filterOk);
		"step 1"
		if (result.bool) {
			var info = lib.skill.tgtt_gouzhu.chooseButton;
			lib.skill.tgtt_gouzhu_backup = info.backup(result.links, player);
			lib.skill.tgtt_gouzhu_backup.sourceSkill = 'tgtt_gouzhu';
		} else {
			event.finish();
		}
		"step 2"
		var info = lib.skill.tgtt_gouzhu_backup;
		var dialog = info.chooseButton.dialog(event, player);
		var next = player.chooseButton(dialog);
		next.set('selectButton', info.chooseButton.select);
		next.set('filterButton', info.chooseButton.filter);
		next.set('ai', info.chooseButton.check);
		next.set('filterOk', info.chooseButton.filterOk);
		"step 3"
		if (result.bool) {
			var info = lib.skill.tgtt_gouzhu_backup.chooseButton;
			lib.skill.tgtt_gouzhu_backup_backup = info.backup(result.links, player);
			lib.skill.tgtt_gouzhu_backup_backup.sourceSkill = 'tgtt_gouzhu_backup';
			var next = game.createEvent('tgtt_gouzhu_backup');
			next.player = player;
			next.setContent(lib.skill.tgtt_gouzhu.contentx);
		}
	}
	//获取本回合进行构筑的次数,若key值为字符串,则获取指定卡名的构筑次数,若key值为true,则获取常规构筑的次数
	lib.element.player.getGouzhuCount = function (key) {
		var stat = player.getStat().tgtt_gouzhu;
		if (!stat) return 0;
		var num = stat.num;
		if (key === true) {
			num = stat.num2;
		}
		if (typeof key == 'string') {
			num = stat[key];
		}
		if (typeof num) return num;
		return 0;
	}
	//构筑系统
	lib.element.player.tgtt_gouzhu = function (names, cards, ep) {
		var next = game.createEvent('lyGouzhu');
		next.player = this;
		if (Array.isArray(names)) {
			next.names = names.slice(0);
		} else if (typeof names == 'string') {
			next.names = [names];
		} else {
			next.names = ['sha'];
		}
		if (Array.isArray(cards)) {
			next.cards = cards.slice(0);
		} else if (get.itemtype(arguments[i]) == 'card') {
			next.cards = [cards];
		} else {
			next.cards = [];
		}
		next.ep = ep;
		next.setContent('tgtt_gouzhu');
		return next;
	}
	lib.element.content.tgtt_gouzhu = function () {
		'step 0'
		if (!event.ep) {
			event.ep = 0;
			for (var i of event.names) {
				var ep = get.tgtt_ep(i, player);
				if (ep < 0) ep = 0;
				event.ep += ep;
			}
		}
		player.tgtt_changeEp(-event.ep);
		player.lose(event.cards, ui.discardPile, 'visible').type = 'tgtt_gouzhu';
		game.log(player, '将', event.cards, '置入了弃牌堆');
		player.getHistory('custom').push(event);
		'step 1'
		event.resultCards = [];
		var stat = player.getStat().tgtt_gouzhu;
		if (!stat) {
			stat = {
				num: 0,
				num2: 0,
			};
		}
		stat.num++;
		if (!event.sp) stat.num2++;
		for (var i of event.names) {
			var card = game.createCard(i);
			event.resultCards.push(card);
			card.storage.tgtt_gouzhu = event.cards.slice(0);
			if (!stat[i]) stat[i] = 0;
			stat[i]++;
		}
		if (game.me == player) player.$tgtt_gainCard(event.resultCards, event.cards);
		player.gain(event.resultCards);
		event.num = 0;
		'step 2'
		var name = event.resultCards[event.num].name;
		if (lib.card[name].tgtt_gouzhuAfter) {
			var next = game.createEvent('tgtt_gouzhuAfter', false);
			next.setContent(lib.card[name].tgtt_gouzhuAfter);
			next.resultCards = event.resultCards;
			next.player = player;
			next.card = event.resultCards[event.num];
			next.cards = event.cards;
		}
		event.num++;
		if (event.num < event.resultCards.length) {
			event.redo();
		}
	}
	//获取素材限制
	get.tgtt_material = function (card, player) {
		if (typeof card == 'string') {
			card = {
				name: card
			};
		}
		if (get.itemtype(player) == 'player' || (player !== false && get.position(card) == 'h')) {
			var owner = player || get.owner(card);
		}
		var material = lib.card[card.name].tgtt_material.slice();
		if (!Array.isArray(material)) return [];
		if (owner) {
			game.checkMod(owner, material, 'tgtt_filterGouzhu', owner);
		}
		return material;
	}
	//获取动态消耗
	get.tgtt_ep = function (card, player) {
		if (typeof card == 'string') {
			card = {
				name: card
			};
		}
		if (get.itemtype(player) == 'player' || (player !== false && get.position(card) == 'h')) {
			var owner = player || get.owner(card);
		}
		var ep = lib.card[card.name].tgtt_ep;
		if (typeof ep == 'function') ep = ep(card, owner);
		if (typeof ep != 'number' || isNaN(ep)) ep = 0;
		if (owner) {
			ep = game.checkMod(owner, card, ep, 'tgtt_gouzhuEp', owner);
		}
		if (ep < 0) ep = 0;
		return ep;
	}
	//获取该角色允许被使用的构筑牌
	get.tgtt_gouzhuList = function (player) {
		var list = [];
		for (var func of lib.tgtt_custom.cards) {
			func(player, list);
		}
		return game.checkMod(player, list, 'tgtt_gouzhuList', player);
	}
	//从数组中提取符合条件的牌,与player.getCards()类似.
	get.countCards = function (list, filter) {
		var cards = list.slice(0);
		for (var i = 0; i < cards.length; i++) {
			if (!filter(cards[i])) {
				cards.splice(i--, 1);
			}
		}
		return cards.length;
	}
	//获取用于作为构筑素材的卡牌.
	get.tgtt_gouzhuCards = function (player) {
		return game.checkMod(player, player.getCards('hes'), 'tgtt_gouzhuCards', player);
	}
	//开始构筑吧
	lib.skill.tgtt_gouzhu = {
		enable: "phaseUse",
		filter(event, player) {
			return get.tgtt_gouzhuList(player).length;
		},
		chooseButton: {
			dialog(event, player) {
				var list = get.tgtt_gouzhuList(player);
				for (var i = 0; i < list.length; i++) {
					var name = list[i];
					list[i] = [get.translation(lib.card[name].type), '', name];
				}
				if (list.length == 0) {
					return ui.create.dialog('无可用牌库');
				}
				return ui.create.dialog('请选择需要构筑的卡牌', [list, 'vcard']);
			},
			select() {
				var player = _status.event.player;
				return game.checkMod(player, [1, 1], 'tgtt_selectGouzhu', player);
			},
			filter(button, player) {
				var filter = lib.card[button.link[2]].tgtt_banGouzhu;
				if (filter && filter(player, _status.event)) return false;
				var ep = get.tgtt_ep(button.link[2], player);
				for (var card of ui.selected.buttons) {
					ep += get.tgtt_ep(button.link[2], player);
				}
				if (player.tgtt_ep < ep) return false;
				var cards = get.tgtt_gouzhuCards(player);
				for (var cost of get.tgtt_material(button.link[2], player)) {
					if (get.countCards(cards, function (card) {
						return cost.filter(card, player, true);
					}) < get.select(cost.num)[0]) return false;
				}
				return true;
			},
			check(button) {
				var info = lib.card[button.link[2]];
				var player = _status.event.player;
				if (player.countCards('h', button.link[2]) > 0) return 0;
				var effect = player.getUseValue(button.link[2]);
				if (info.notarget) effect = info.ai.useful;
				if (effect > 0) return effect;
				return 0;
			},
			backup(links, player) {
				var cost = [];
				for (var i of links) {
					cost.addArray(get.tgtt_material(i[2], player));
				}
				var cards = get.tgtt_gouzhuCards(player);
				return {
					chooseButton: {
						dialog(event, player) {
							return ui.create.dialog('请选择用于构筑的素材', [cards, 'vcard']);
						},
						filterOk() {
							for (var i of cost) {
								var num = 0;
								var select = get.select(i.num);
								for (var j of ui.selected.buttons) {
									if (i.filter(j.link, _status.event.player)) num++;
								}
								if (select[0] == -1) {
									if (get.countCards(cards, function (card) {
										return i.filter(card, _status.event.player);
									}) != num) return false;
								} else {
									if (select[0] > num) return false;
								}
							}
							return true;
						},
						select() {
							for (var i of cost) {
								if (get.select(i.num)[0] > 0) {
									return [1, Infinity];
								}
							}
							return [-1, -1];
						},
						filter(button, player) {
							for (var i of cost) {
								var num = 0;
								for (var j of ui.selected.buttons) {
									if (i.filter(j.link, player)) num++;
								}
								var select = get.select(i.num)[1];
								if (select == -1) select = Infinity;
								if (select > num && i.filter(button.link, player)) return true;
							}
							return false;
						},
						check(button) {
							return 11 - get.value(button.link);
						},
						backup(cards, player) {
							return {
								lose: false,
								links: links,
								cards: cards,
								delay: false,
								content: lib.skill.tgtt_gouzhu.contentx,
							}
						},
					}
				}
			},
		},
		contentx() {
			var names = [];
			var info = lib.skill.tgtt_gouzhu_backup_backup;
			for (var card of info.links) {
				names.push(card[2]);
			}
			var next = player.tgtt_gouzhu(names, info.cards);
			if (event.getParent(2) != 'chooseToUse') next.sp = true;
		},
		ai: {
			order: 5,
			result: {
				player: 2,
			},
			threaten: 1.9,
		},
	};
	lib.translate.tgtt_gouzhu = "构筑";
	lib.translate.tgtt_gouzhu_backup = "构筑";
	lib.translate.tgtt_gouzhu_backup_backup = "构筑";
	game.addGlobalSkill('tgtt_gouzhu');
	//构筑特效
	lib.element.card.originalMoveDelete = function (player) {
		this.fixed = true;
		if (!this._listeningEnd || this._transitionEnded) {
			var dx, dy;
			if (this.classList.contains('center')) {
				var nx = [50, -52];
				var ny = [50, -52];
				nx = nx[0] * ui.arena.offsetWidth / 100 + nx[1];
				ny = ny[0] * ui.arena.offsetHeight / 100 + ny[1];
				dx = player.getLeft() + player.offsetWidth / 2 - 52 - nx;
				dy = player.getTop() + player.offsetHeight / 2 - 52 - ny;
			} else {
				this.style.left = this.offsetLeft + 'px';
				this.style.top = this.offsetTop + 'px';
				dx = player.getLeft() + player.offsetWidth / 2 - 52 - this.offsetLeft;
				dy = player.getTop() + player.offsetHeight / 2 - 52 - this.offsetTop;
			}
			if (get.is.mobileMe(player)) {
				dx += get.cardOffset();
				if (ui.arena.classList.contains('oblongcard')) {
					dy -= 16;
				}
			}
			if (this.style.transform && this.style.transform != 'none' && this.style.transform.indexOf('translate') == -1) {
				this.style.transform += ' translate(' + dx + 'px,' + dy + 'px)';
			} else {
				this.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
			}
			var that = this;
			setTimeout(function () {
				that.delete();
			}, 200);
		} else {
			this._onEndMoveDelete = player;
		}
	}
	lib.element.player.$tgtt_gainCard = function (card, cards) {
		game.pause();
		var card = card.slice(0);
		var cards = cards.slice(0);
		ui.arena.classList.add('playerfocus');
		var page = ui.create.div('.tgtt_gouzhu', ui.window);
		var cardNode = ui.create.div('.tgtt_fazhen');
		for (var i of Object.keys(lib.element.player)) {
			cardNode[i] = lib.element.player[i];
		}
		ui.arena.appendChild(cardNode);
		var player = this;
		var boolCard = function () {
			var node = card.shift().copy('thrown', false);
			node.classList.add('playerfocus');
			node.style.transform = 'scale(0) rotateX(180deg)';
			node.style.left = 'calc(50% - 52px)';
			node.style.top = 'calc(50% - 52px)';
			setTimeout(function () {
				ui.arena.appendChild(node);
				ui.refresh(node);
				node.show();
				node.style.transform = '';
				setTimeout(function () {
					node.moveDelete(player);
				}, 600);
				if (card.length == 0) {
					setTimeout(function () {
						page.remove();
						cardNode.remove();
						game.resume();
						ui.arena.classList.remove('playerfocus');
					}, 600);
				} else {
					boolCard();
				}
			}, 500);
		}
		var bool = function () {
			if (cardNode.over) return;
			cardNode.over = true;
			boolCard();
		}
		if (!_status.connectMode) {
			var event = _status.event;
			event.forceMine = true;
			event.custom.replace.window = function () {
				if (!cardNode.over) {
					delete event.forceMine;
					bool();
					cardNode.over = true;
					game.resume();
				}
			}
		}
		var moveCard = function (node, num) {
			if (cardNode.over) return;
			var node;
			node = node.copy('thrown', false);
			node.classList.add('playerfocus');
			node.fixed = true;
			var top, left;
			switch (num % 4) {
				case 1:
					left = '100%';
					top = Math.random() * 100 + '%';
					break;
				case 2:
					left = '-10%';
					top = Math.random() * 100 + '%';
					break;
				case 3:
					left = Math.random() * 100 + '%';
					top = '100%';
					break;
				case 0:
					left = Math.random() * 100 + '%';
					top = '-10%';
					break;
			}
			node.style.left = left;
			node.style.top = top;
			node.style.transform = 'scale(0)';
			node.hide();
			ui.arena.appendChild(node);
			ui.refresh(node);
			node.show();
			node.style.transform = '';
			lib.listenEnd(node);
			setTimeout(function () {
				lib.element.card.originalMoveDelete.apply(node, [cardNode]);
				if (cards.length) {
					moveCard(cards.shift(), num + 1);
				} else {
					bool();
				}
			}, 500);
		}
		if (cards?.length) {
			setTimeout(function () {
				moveCard(cards.shift(), 1);
			}, 300)
		} else {
			bool();
		}
	}
}

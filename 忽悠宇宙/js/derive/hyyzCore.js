'use strict';
console.log('载入derive/hyyzCore.js')
window.hyyzImport(function (lib, game, ui, get, ai, _status) {
	//——————————————————————————————————————————前置标签——————————————————————————————————————————//
	if (lib.namePrefix) {
		lib.namePrefix.set('梦', {
			color: '#ee9ac7',
			nature: 'firemm',
		});
		lib.namePrefix.set('SP', {
			color: '#BBFFFF',
			nature: 'watermm',
		});
		lib.namePrefix.set('梦界', {
			getSpan: (prefix, name) => `${get.prefixSpan('梦')}${get.prefixSpan('界')}`,
		});
		lib.namePrefix.set('梦SP', {
			getSpan: (prefix, name) => `${get.prefixSpan('梦')}${get.prefixSpan('SP')}`,
		});
		lib.namePrefix.set('梦神', {
			getSpan: (prefix, name) => `${get.prefixSpan('梦')}${get.prefixSpan('神')}`,
		});
		lib.namePrefix.set('梦谋', {
			getSpan: (prefix, name) => `${get.prefixSpan('梦')}${get.prefixSpan('谋')}`,
		});
		lib.namePrefix.set('梦武', {
			getSpan: (prefix, name) => `${get.prefixSpan('梦')}${get.prefixSpan('武')}`,
		});
	}
	//——————————————————————————————————————————势力添加——————————————————————————————————————————//
	//因为十周年兼容问题,此处删除<span style="text-shadow: 1px 1px 2px #ea059e,0 0 8px #ea059e;color: white"></span>
	if (game.addGroup) {
		game.addGroup('hyyz_ys', '<span style="text-shadow: 1px 1px 2px #ea059e,0 0 8px #ea059e;color: white">原神</span>', '原神', {
			color: 'water',
			image: 'ext:忽悠宇宙/image/group/hyyz_ys.png'
		});
		game.addGroup('hyyz_xt', `<span style="text-shadow: 1px 1px 2px #ea059e,0 0 8px #ea059e;color: white">星铁</span>`, '星铁', {
			color: 'black',//'#28e3ce',
			image: 'ext:忽悠宇宙/image/group/hyyz_xt.png'
		});
		game.addGroup('hyyz_b3', '<span style="text-shadow: 1px 1px 2px #ea059e,0 0 8px #ea059e;color: white">崩三</span>', '崩三', {
			color: 'thunder',
			image: 'ext:忽悠宇宙/image/group/hyyz_b3.png'
		});
		game.addGroup('hyyz_other', '<span style="text-shadow: 1px 1px 2px #ea059e,0 0 8px #ea059e;color: white">忽悠</span>', '忽悠', {
			color: '#ee9ac7',
			image: 'ext:忽悠宇宙/image/group/hyyz_other.png'
		});
	}
	//game.groupnature['hyyz_other'] ='#ee9ac7'
	//——————————————————————————————————————————新属性*3——————————————————————————————————————————//
	if (game.addNature) {
		game.addNature('hyyz_wind', '风蚀', {
			audio: undefined,
			linked: true,
			order: 63,
			background: 'extension/忽悠宇宙/image/card/hyyz_wind.png',
			lineColor: '#0aba0a',//绿净化
			color: 'green',
		});
		lib.skill._hyyz_wind = {
			trigger: {
				player: "damageBegin4"
			},
			forced: true,
			priority: -Infinity,
			popup: false,
			filter(event, player) {
				return player.countCards('he') > 0 && event.hasNature('hyyz_wind');
			},
			async content(event, trigger, player) {
				const { cards } = await player.chooseToDiscard(`风蚀`, `弃置至少一张牌;每多弃置一张,防止1点伤害`, 'he', [1, trigger.num + 1], true).set('ai', function (card) {
					var num = _status.event.numx;
					if (num >= 0) return true;
					if (player.hp < 2) return true;
					return 10 - get.value(card);
				}).set('numx', trigger.num - player.hp).forResult();
				if (cards) {
					var count = cards.length;
					if (count - 1 > 0) {
						game.log('#g⌈风蚀⌋', player, '减少了', (count - 1), '点风蚀伤害');
						trigger.num -= count - 1;
					}
				}
			}
		};
		game.addNature('hyyz_quantum', '量子', {
			audio: undefined,
			linked: true,
			order: 62,
			background: 'extension/忽悠宇宙/image/card/hyyz_quantum.png',
			lineColor: '#07a6f0',
			color: 'blue',
		});
		lib.skill._hyyz_quantum = {
			trigger: {
				player: "useCardToPlayered"
			},
			forced: true,
			priority: -Infinity,
			popup: false,
			filter(event, player) {
				return player.countCards('he', (card) => player.canRecast(card)) && event.card.name == 'sha' && game.hasNature(event.card, 'hyyz_quantum');
			},
			async content(event, trigger, player) {
				const { cards } = await player.chooseCard(`纠缠`, `你可以重铸一张牌,${get.translation(trigger.target)}将随机重铸一张同类型的牌`, 'he', function (card) {
					return _status.event.player.canRecast(card);
				}).set('ai', (card) => 8 - get.value(card)).forResult();
				if (cards) {
					player.recast(cards);
					const loses = trigger.target.getCards('he', card => {
						return get.type2(card) == get.type2(cards[0]) && _status.event.player.canRecast(card);
					});
					if (loses.length) {
						trigger.target.recast(loses.randomGet());
						game.log('#g⌈量子⌋', trigger.target, '被', player, '纠缠了');
					} else {
						game.log('#g⌈量子⌋', player, '自我纠缠ing');
					}
				};
			},
		};
		game.addNature('hyyz_imaginary', '虚数', {
			audio: undefined,
			linked: true,
			order: 61,
			background: 'extension/忽悠宇宙/image/card/hyyz_imaginary.png',
			lineColor: '#ffee00',
			color: 'yellow',
		});
		lib.skill._hyyz_imaginary = {
			trigger: {
				player: "damageBegin4"
			},
			forced: true,
			priority: -Infinity,
			popup: false,
			filter(event, player) {
				return event.hasNature('hyyz_imaginary');
			},
			async content(event, trigger, player) {
				player.addTempSkill('hyyz_imaginary_buff');
				game.log('#g⌈虚数⌋', player, '本回合护甲和防具失效');
			},
		};
		lib.skill.hyyz_imaginary_buff = {
			charlotte: true,
			mark: true,
			marktext: '※',
			intro: {
				name: '虚数',
				content: '本回合防具和护甲失效'
			},
			ai: {
				nohujia: true,
				"unequip2": true,
			},
		};
	}
	//——————————————————————————————————————————阵亡与配音——————————————————————————————————————————//
	lib.skill._hyyzCardAudio = {
		trigger: {
			player: 'useCard1'
		},
		forced: true,
		priority: Infinity,
		popup: false,
		filter(event, player) {
			return ['xt_', 'b3_'].includes(event.card.name.substring(0, 3)) ||
				event.card.name.substring(0, 5) == 'hyyz_';
		},
		content() {
			if (trigger.card.name == 'xt_lingfu') game.playAudio('../extension/忽悠宇宙/audio/card/xt_lingfu' + [1, 2].randomGet());
			else game.playAudio('../extension/忽悠宇宙/audio/card', trigger.card.name);
		}
	};
	// 落幕 + mvp_名字
	lib.skill._hyyz_die = {
		trigger: {
			player: 'dieBegin',
		},
		forceDie: true,
		priority: Infinity,
		forced: true,
		popup: false,
		firstDo: true,
		filter(event, player) {
			return player.name && ['xt_', 'b3_', 'hyyz_', 'meng_', 'Ym_', 'JLP_'].some(i => player.name.indexOf(i) == 0);
		},
		async content(event, trigger, player) {
			//英桀bgm
			if (['b3_hua', 'b3_kaiwen', 'b3_jizi'].includes(player.name)) {
				player.node.avatar.setBackgroundImage('extension/忽悠宇宙/image/character/' + player.name + '_die.jpg');
				game.saveConfig('hyyz_backgroundmusic', player.name + '_die');
				game.hyyzBgm();
			};
			//双阵亡语音
			if (player.name == 'meng_lalalala') {
				game.playAudio('../extension/忽悠宇宙/audio/skill/meng_lalalala' + [1, 2].randomGet());
			};
			//击杀最后一名敌人
			if (!player.getFriends().length && trigger.source && trigger.source.isAlive() &&
				['meng_menghalishang', 'meng_lalalala', 'meng_pink'].includes(trigger.source.name)) {
				game.playAudio('../extension/忽悠宇宙/audio/skill/mvp_' + trigger.source.name);
			}
		},
	};
	// 持明族复活
	lib.hyyz_chimin = ['xt_bailu', 'xt_danhengyinyue', 'meng_wodanheng', 'meng_danhengbailu'];
	lib.skill._chimin = {
		trigger: {
			global: "washCard",
		},
		forceDie: true,
		forced: true,
		popup: false,
		firstDo: true,
		filter(event, player) {
			return game.dead.length > 0 && game.dead.some(current => lib.hyyz_chimin.includes(current.name) && current.maxHp > 1);
		},
		content() {
			game.dead.map(current => {
				if (lib.hyyz_chimin.includes(current.name) && current.maxHp > 1) {
					game.log(current, '的持明卵孵化,', current, '重生了');
					current.revive(current.maxHp);
					current.loseMaxHp();
					current.draw(4);
				}
			})
		}
	};
	//——————————————————————————————————————————特殊机制——————————————————————————————————————————//
	lib.translate._hyyz_fireCard = '🔥';
	lib.skill._hyyz_fireCard = {
		trigger: {
			global: 'phaseEnd'
		},
		forced: true,
		priority: -Infinity,
		popup: false,
		content() {
			game.countPlayer(current => {
				if (current.getStorage('_hyyz_fireCard') && current.getStorage('_hyyz_fireCard').length) {
					const cards = current.getCards('hej').filter(card => current.getStorage('_hyyz_fireCard').includes(card));
					if (cards.length) {
						game.log(current, '被', '#r[点燃]', '了');
						current.discard(cards);
					}
				}
			})
		},
		mod: {
			targetInRange(card, player, target) {
				if (!player.storage._hyyz_fireCard || !player.getStorage('_hyyz_fireCard').length) return;
				if (!card.cards) return;
				for (var i of card.cards) {
					if (player.getStorage('_hyyz_fireCard').includes(i)) return true;
				}
			},
			cardUsable(card, player, target) {
				if (!player.storage._hyyz_fireCard || !player.getStorage('_hyyz_fireCard').length) return;
				if (!card.cards) return;
				for (var i of card.cards) {
					if (player.getStorage('_hyyz_fireCard').includes(i)) return true;
				}
			},
			aiOrder(player, card, num) {
				if (!player.storage._hyyz_fireCard || !player.getStorage('_hyyz_fireCard').length) return;
				if (get.itemtype(card) == 'card' && player.getStorage('_hyyz_fireCard').includes(card)) return num + 3;
			},
		},
	};
	/**检测两张牌是否可以相互响应
	 * @param {Array|[object,string]} cards 
	 * @returns boolean
	 */
	game.canToRespend = function (cards) {
		if (cards.length != 2) {
			game.log('请检测两张牌');
			return;
		}
		if (typeof cards[0] == 'string') cards[0] = { name: cards[0] };
		if (typeof cards[1] == 'string') cards[1] = { name: cards[1] };
		if (cards.some(floor => get.type(floor) == 'trick' && cards.find(next => next != floor).name == 'wuxie')) return true;
		if (cards.some(floor => get.tag(floor, 'respondSha') && cards.find(next => next != floor).name == 'sha')) return true;
		if (cards.some(floor => get.tag(floor, 'respondShan') && cards.find(next => next != floor).name == 'shan')) return true;
		return false;
	};
	// 获得一张随机点数,根据花色决定类型的生命牌
	get.LifeCard = function () {
		var suit = ['heart', 'diamond', 'club', 'spade'].randomGet();
		var number = Math.floor(Math.random() * 13) + 1;
		var name;
		switch (suit) {
			case 'heart': name = 'meng_taohuasu'; break;
			case 'club': name = 'meng_meihuagao'; break;
			case 'diamond': name = 'meng_caomeibing'; break;
			default: name = 'meng_chashaobao'; break;
		};
		return ui.create.card().init([suit, number, name]);
	};
	// 中央区的牌
	get.centralCards = function () {
		var cardx = [];
		game.countPlayer2(function (current) {
			current.getHistory('lose', function (evt) {
				for (let i of evt.cards) {
					if (get.position(i) == 'd' && !cardx.includes(i)) cardx.push(i);
				}
			})
		});
		game.getGlobalHistory('cardMove', function (evt) {
			for (let i of evt.cards) {
				if (get.position(i) == 'd' && !cardx.includes(i)) cardx.push(i);
			};
		})
		return cardx;
	};
	/**获取若干有花色有点数的影
	 * @param {number} count 数量
	 * @returns array
	 */
	get.hyyzYing = function (count) {
		var cards = [];
		if (typeof count != 'number') count = 1;
		while (count--) {
			let card = game.createCard('ying', ['spade', 'heart', 'club', 'diamond'].randomGet(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet());
			cards.push(card);
		}
		return cards;
	};
	//中央区技能,获得观看中央区的牌的标记
	lib.skill._centralCards = {
		init: (player, skill) => player.markSkill(skill),
		onremove: (player, skill) => player.ummarkSkill(skill),
		mark: true,
		marktext: '⨀',
		intro: {
			name: '中央区',
			mark(dialog) {
				if (get.centralCards().length) {
					dialog.addText('中央区的牌:');
					dialog.addSmall([get.centralCards(), 'vcard']);
				} else {
					dialog.addText('中央区没有牌');
				}
			},
			content() {
				if (get.centralCards().length) {
					var str = '中央区的牌:</br>';
					get.centralCards().forEach((card) => {
						str += get.translation(card);
					})
					return str;
				} else {
					return '中央区没有牌'
				}
			}
		},
	};
	//对牌堆发起拼点(残缺)//不稳定
	lib.element.player.pileCompare = function (check) {
		var next = game.createEvent("pileCompare");
		next.player = this;
		if (check) next.ai = check;
		else next.ai = function (card) {
			if (typeof card == "string" && lib.skill[card]) {
				var ais = lib.skill[card].check || function () { return 0 };
				return ais();
			}
			var player = get.owner(card);
			var getn = function (card) {
				if (player.hasSkill("tianbian") && card.suit == "heart") return 13;
				return card.number;
			};
			var event = _status.event.parent;
			var addi = get.value(card) >= 8 && get.type(card) != "equip" ? -6 : 0;
			if (card.name == "du") addi -= 5;
			return getn(card) - get.value(card) / 5 + addi;
		};
		next.setContent("pileCompare");
		return next;
	};
	lib.element.content.pileCompare = function () {
		"step 0";
		if ((!event.fixedResult || !event.fixedResult[player.playerid]) && player.countCards("h") == 0) {
			event.result = { cancelled: true, bool: false };
			event.finish();
			return;
		}
		game.log(player, "对", "#b牌堆", "发起拼点");
		"step 1";
		if (event.fixedResult && event.fixedResult[player.playerid]) {
			event.card1 = event.fixedResult[player.playerid];
			event.goto(3)
		} else {
			player.chooseCard("请选择拼点牌", true).set("type", "compare").set("glow_result", true).ai = event.ai;
		}
		event.card2 = get.cards()[0];
		"step 2";
		if (result.skill && lib.skill[result.skill] && lib.skill[result.skill].onCompare) {
			result.cards = lib.skill[result.skill].onCompare(player);
		}
		event.card1 = result.cards[0];
		"step 3";
		player.loseToDiscardpile(event.card1).set('log', false).set('animate', false);
		game.cardsDiscard(event.card2)
		"step 4";
		event.trigger("compareCardShowBefore");
		"step 5";
		game.broadcast(function () {
			ui.arena.classList.add("thrownhighlight");
		});
		ui.arena.classList.add("thrownhighlight");
		game.addVideo("thrownhighlight1");
		player.$compare(event.card1, player, event.card2);
		game.log(player, "的拼点牌为", event.card1);
		game.log('#b牌堆', "的拼点牌为", event.card2);
		event.num1 = event.card1.number;
		event.num2 = event.card2.number;
		event.trigger("compare"); "step 6";
		event.result = {
			player: event.card1,
			target: event.card2,
			num1: event.num1,
			num2: event.num2,
		};
		var str;
		if (event.num1 > event.num2) {
			event.result.bool = true;
			event.result.winner = player;
			str = get.translation(player) + "拼点成功";
			player.popup("胜");
		} else {
			event.result.bool = false;
			str = get.translation(player) + "拼点失败";
			if (event.result.winner) delete event.result.winner;
			if (event.num1 == event.num2) {
				event.result.tie = true;
				player.popup("平");
			} else {
				player.popup("负");
			}
		}
		game.broadcastAll(function (str) {
			var dialog = ui.create.dialog(str);
			dialog.classList.add("center");
			setTimeout(function () {
				dialog.close();
			}, 1000);
		}, str); "step 7";
		game.broadcastAll(function () {
			ui.arena.classList.remove("thrownhighlight");
		});
		game.addVideo("thrownhighlight2");
		if (event.clear !== false) {
			game.broadcastAll(ui.clear);
		}
		if (typeof event.preserve == "function") {
			event.preserve = event.preserve(event.result);
		} else if (event.preserve == "win") {
			event.preserve = event.result.bool;
		} else if (event.preserve == "lose") {
			event.preserve = !event.result.bool;
		}
	};
	//——————————————————————————————————————————装备与装备栏——————————————————————————————————————————//
	// 黑渊白花
	lib.skill._hyyz_heiyuanbaihua = {
		trigger: {
			player: ["loseEnd", "discardAfter"],
		},
		filter(event, player) {
			if (!player.equiping) return false;
			let list = ['b3_baihua', 'b3_heiyuan'];
			list.remove(event.getParent(2).name);
			if (event.name == 'lose' && event.parent.name != 'equip') return false;
			for (var i of event.cards) {
				if (get.type(i) != 'equip' || get.subtype(i) != 'equip1') return false;
				if (i.original == 'e') {
					list.remove(i.name);
					return list.length == 0 && !lib.inpile.includes('b3_heiyuanbaihua');
				}
			}
			return false;
		},
		forced: true,
		priority: Infinity,
		popup: false,
		silent: true,
		content() {
			let card1;
			for (var i of trigger.cards) if (get.type(i) == 'equip' && get.subtype(i) == 'equip1' && i.original == 'e') card1 = i;
			card1.fix();
			card1.remove();
			card1.destroyed = true;
			lib.inpile.remove(card1.name);
			let card2 = trigger.getParent(2).cards[0];
			card2.fix();
			card2.remove();
			card2.destroyed = true;
			lib.inpile.remove(card2.name);
			let card = game.createCard2('b3_heiyuanbaihua', 'club', 12);
			lib.inpile.push('b3_heiyuanbaihua');
			player.equip(card);
			game.log(card1, '和', card2, '合为', card);
		}
	};
	//虚空万藏
	lib.element.player.zhiku_shown = function (x) {
		let player = this;
		if (!x) x = 1;
		player.addSkill('b3_zhiku_use');
		const copy = function () {
			let cards = Array.from(ui.cardPile.childNodes).slice(0, x);
			let cardsx = cards.map((card) => {
				let cardx = ui.create.card();
				cardx.init(get.cardInfo(card));
				cardx._cardid = card.cardid;
				return cardx;
			});
			player.directgains(cardsx, null, "b3_zhiku");
			return cardsx;
		}
		if (!player.countCards('s', card => card.hasGaintag('b3_zhiku'))) copy();
		const observer = new MutationObserver((mutList, observer) => {
			for (let i of mutList) {
				if (i.type === 'childList') {
					let cardsx = copy();
					player.getCards('s', card => card.hasGaintag('b3_zhiku')).filter(i => !cardsx.includes(i)).forEach(i => i.delete());
					if (player == game.me) ui.updatehl();
				}
			}
		});
		return observer;
	};
	lib.skill.b3_zhiku_use = {
		mod: {
			cardEnabled2(card) {
				if (card.hasGaintag('b3_zhiku')) return false;
			},
		},
	};
	//失去虚空万藏
	//Object.values(lib.cardPile).reduce((a, b) => a + b.length, 0)
	lib.skill._xukongwanzang = {
		trigger: {
			player: "loseEnd",
		},
		forced: true,
		charlotte: true,
		forced: true,
		filter(event, player) {
			for (var i = 0; i < event.cards.length; i++) {
				if (event.cards[i].original == 'e' && event.cards[i].name.startsWith('b3_xukong')) return true;
			}
			return false;
		},
		content() {
			if (player.storage.zhiku_shown) {
				player.storage.zhiku_shown.disconnect(ui.cardPile, { childList: true, subtree: true });
				delete player.storage.zhiku_shown;
			}
			player.getCards('s', card => card.hasGaintag('b3_zhiku')).forEach(i => i.delete());
		},
	}
	lib.translate['b3_zhiku'] = '智库';
	// 返回扩展栏数
	lib.element.player.countExpandedSlots = function (slot) {
		var all = 0, storage = this.expandedSlots;
		if (!storage) return 0;
		if (slot) {
			if (storage[slot]) return storage[slot];
			if (storage['equip' + slot]) return storage['equip' + slot];
		} else {
			for (var key in storage) {
				var num = storage[key];
				if (typeof num == 'number' && num > 0) {
					all += num;
				}
			}
		}
		return all;
	};
	// 返回拥有的扩展栏对象{equip:1}
	lib.element.player.getExpandedSlots = function () {
		const storage = this.expandedSlots;
		if (!storage) return {};
		const keys = Object.keys(storage).sort(), combined = get.is.mountCombined();
		let map = {}, bool = false;
		for (const key of keys) {//遍历每个部位
			const num = storage[key];//该位置的扩展数
			if (typeof num == 'number' && num > 0) {
				map[key] = num;//不写storage[key],是因为可能是0或者别的什么东西,必须确保为正数
				bool = true;
			}
		}
		if (bool) return map;
		return {};
	};
	// 扩展栏的标记
	lib.element.player.getExpandedSlots2 = function () {
		const storage = this.expandedSlots;
		if (!storage) return '当前没有扩展装备栏';
		const keys = Object.keys(storage).sort(), combined = get.is.mountCombined();
		let str = '';
		for (const key of keys) {
			const num = storage[key];
			if (typeof num == 'number' && num > 0) {
				let trans = get.translation(key);
				if (combined && key == 'equip3') trans = '坐骑';
				str += '<li>' + trans + '栏:' + num + '个<br>';
			}
		}
		if (str.length) return str.slice(0, str.length - 4);//去掉最后的<br>
		return '当前没有扩展装备栏';
	};
	// 删除指定位置的扩展栏
	lib.element.player.deleteEquip = function () {
		var next = game.createEvent('deleteEquip');
		next.player = this;
		next.slots = [];
		for (var i = 0; i < arguments.length; i++) {
			if (get.itemtype(arguments[i]) == 'player') {
				next.source = arguments[i];
			}
			else if (Array.isArray(arguments[i])) {
				for (var arg of arguments[i]) {
					if (typeof arg == 'string') {
						if (arg.startsWith('equip') && parseInt(arg.slice(5)) > 0) next.slots.push(arg);
					}
					else if (typeof arg == 'number') {
						next.slots.push('equip' + arg);
					}
				}
			}
			else if (typeof arguments[i] == 'string') {
				if (arguments[i].startsWith('equip') && parseInt(arguments[i].slice(5)) > 0) next.slots.push(arguments[i]);
			}
			else if (typeof arguments[i] == 'number') {
				next.slots.push('equip' + arguments[i]);
			}
		}
		if (!next.source) next.source = _status.event.player;
		if (!next.slots.length) {
			_status.event.next.remove(next);
		}
		next.setContent('deleteEquip');
		return next;
	};
	lib.element.content.deleteEquip = function () {//source/player/slotsx=['equip1','equip3']
		'step 0';
		event.cards = [];//要弃的牌
		event.num = 0;
		event.slotsx = [];//合并['equip1','equip3_4']
		if (get.is.mountCombined()) {// 坐骑是否合并
			event.slots.forEach(type => {
				if (type == 'equip3' || type == 'equip4') event.slotsx.add('equip3_4');
				else event.slotsx.add(type);
			});
		}
		else {
			event.slotsx.addArray(event.slots);
		}
		event.slotsx.sort();//合并组['equip1','equip3_4']
		if (!event.slots.length) event.finish();//普通['equip1','equip3']
		'step 1';
		var slot = event.slotsx[event.num];//从第一个位置开始equip1
		var slot_key = slot;//二次存equip1
		var left = player.expandedSlots[slot], lose;//left = 扩展装备栏数    要删的数量
		if (slot == 'equip3_4') {//合并位置
			lose = Math.min(left, Math.max(get.numOf(event.slots, 'equip3'), get.numOf(event.slots, 'equip4')));//相当于,废3则连带4一起废
			slot_key = 'equip3';//按3计算
		}
		else lose = Math.min(left, get.numOf(event.slots, slot));//超出全废除,少于则少//
		if (lose <= 0) event.goto(3);
		else {
			game.log(player, '移除了' + get.cnNumber(lose) + '个', '#g扩展' + get.translation(slot) + '栏');
			if (!player.expandedSlots) player.expandedSlots = {};//初始化扩展栏
			player.expandedSlots[slot_key] -= lose;//字面废除
			if (player.expandedSlots[slot_key] <= 0) delete player.expandedSlots[slot_key];//这行和上一行和废除原代码交换了,主要是扩展为删除,废除为增加
			var cards = player.getEquips(slot).filter(card => !event.cards.includes(card));//该位置牌(除了已弃置的)
			if (cards.length > 0) {//有牌
				var enable = player.countEnabledSlot(slot);//剩余装备栏数
				//要删的大于等于
				if (!enable) {//删除的栏数大于存在的栏数,全部丢掉
					event._result = { bool: true, links: cards };
				}
				else if (cards.length > enable) {//还没弃置的
					var source = event.source, num = (cards.length - enable);
					if (!source || !source.isIn()) source = player;
					source.chooseButton([
						'选择' + (player == source ? '你' : get.translation(player)) + '的' + get.cnNumber(num) + '张' + get.translation(slot) + '牌置入弃牌堆',
						cards,
					], true, [1, num]).set('filterOk', function () {
						var evt = _status.event;
						return ui.selected.buttons.reduce(function (num, button) {
							if (evt.slot == 'equip3_4') return num + Math.max(get.numOf(get.subtypes(button.link, false), 'equip3'), get.numOf(get.subtypes(button.link, false), 'equip4'));
							return num + get.numOf(get.subtypes(button.link, false), evt.slot);
						}, 0) == evt.required;
					}).set('required', num).set('slot', slot);
				}
				else event.goto(3);
			}
			else event.goto(3);
		}
		'step 2';
		if (result.bool) event.cards.addArray(result.links);
		'step 3';
		event.num++;
		if (event.num < event.slotsx.length) event.goto(1);//继续循环
		else {
			player.$syncExpand();
			if (!player.countExpandedSlots()) player.unmarkSkill('expandedSlots');
			if (cards.length > 0) player.loseToDiscardpile(cards);
		}
	};
	// 返回空装备栏对象{equip:1}
	lib.element.player.hyyz_getEmptySlot = function () {
		let map = {};
		for (let i = 1; i < 7; i++) {
			let sub = 'equip' + i;
			if (this.hasEmptySlot(sub)) map[sub] = this.countEmptySlot(sub);
		}
		return map;
	};
	// 返回空装备栏数量(不同类别合并)
	lib.element.player.hyyz_countEmptySlot = function () {
		let num = 0;
		for (let i = 1; i < 7; i++) {
			let sub = 'equip' + i;
			if (this.hasEmptySlot(sub)) num += this.countEmptySlot(sub);
		}
		return num;
	};
	//——————————————————————————————————————————其他函数——————————————————————————————————————————//
	/**播放background下的文件
	 * game.saveConfig('hyyz_backgroundmusic', 文件名称);
	 * 
	 */
	//事件,
	game.hyyzBgm = function () {
		var bgm = lib.config.hyyz_backgroundmusic;
		if (bgm && bgm != 'origin') {
			ui.backgroundMusic.src = 'extension/忽悠宇宙/audio/background/' + bgm + '.mp3';
			ui.backgroundMusic.addEventListener('ended', game.hyyzBgm);
		} else {
			game.playBackgroundMusic();
			ui.backgroundMusic.addEventListener('ended', game.playBackgroundMusic);
		}
	};
	/**文字变色动画
	 * style = ' animation: name 0.5s infinite; -webkit-animation: name 0.5s infinite; '
	 * @param {rainbow} type1 彩虹色
	 * @param {hyyz_meng} type2 白色-粉色<梦>
	 * <span style=" text-shadow: 1px 1px 2px #f40cf0, 0 0 8px #ea059e; color: white">御用粉色外发光
	 * #f40cf0 御用粉色
	 * #ea059e 
	 * #07a6f0 御用浅蓝色
	 * #008cff
	 */
	let type1 = document.createElement("style");
	type1.type = "text/css";
	type1.innerHTML = `@keyframes rainbow{
        0% { color: #ff0026; }
        14.29% { color: #ff6600; }
        28.57% { color: #ffd900; }
        42.86% { color: #5eff00; }
        57.14% { color: #00ffaa; }
        71.43% { color: #0400ff; }
        85.71% { color: #9900ff; }
        100% { color: #ff0080; }
    }`;
	document.head.appendChild(type1);
	let type2 = document.createElement("style");
	type2.type = "text/css";
	type2.innerHTML = `@keyframes hyyz_meng { 0% { color: #ffffff; } 50% { color: #f40cf0; } 100% { color: #ffffff; } }`;
	document.head.appendChild(type2);
})
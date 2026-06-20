import { lib, game, ui, get, ai, _status } from '../../../noname.js';
export async function precontent() {
	//—————————————————————————————————————————————————————————————————————————————解构魔改本体函数
	const mogai = function () {
		lib.element.player.dyingResult = async function () {
			const player1 = this;
			game.log(player1, '濒死');
			_status.dying.unshift(player1);
			for (const i of game.players) {
				const { result } = await i.chooseToUse({
					filterCard(card, player, event) {
						return lib.filter.cardSavable(card, player, player1);
					},
					filterTarget(card, player, target) {
						if (!card || target != player1) {
							return false;
						}
						const info = get.info(card);
						if (!info.singleCard || ui.selected.targets.length == 0) {
							const mod1 = game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player);
							if (mod1 == false) {
								return false;
							}
							const mod2 = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
							if (mod2 != 'unchanged') {
								return mod2;
							}
						}
						return true;
					},
					prompt: get.translation(player1) + '濒死,是否帮助？',
					ai1() {
						return 1;
					},
					ai2() {
						return get.attitude(player1, i);
					},
					type: 'dying',
					targetRequired: true,
					dying: player1,
				});
				if (result?.bool) {
					_status.dying.remove(player1);
					break;
				}
			}
			if (_status.dying.includes(player1)) {
				await player1.die();
			}
			return player1;
		}; //濒死结算
		lib.element.player.yinni = function () {
			const player = this;
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
			return player;
		}; //隐匿函数
		lib.element.player.qreinit = function (name) {
			const player = this;
			const info = lib.character[name];
			player.name1 = name;
			player.name = name;
			player.sex = info.sex;
			player.changeGroup(info.group, false);
			for (const i of info.skills) {
				player.addSkill(i);
			}
			player.maxHp = get.infoMaxHp(info.maxHp);
			player.hp = player.maxHp;
			game.addVideo('reinit3', player, {
				name: name,
				hp: player.maxHp,
				avatar2: player.name2 == name,
			});
			player.smoothAvatar(false);
			player.node.avatar.setBackground(name, 'character');
			player.node.name.innerHTML = get.translation(name);
			player.update();
			return player;
		}; //变身
		lib.element.player.quseCard = async function (card, targets, cards) {
			const player = this;
			if (typeof card == 'string') {
				card = { name: card };
			}
			const name = card.name;
			const info = lib.card[name];
			if (!cards) {
				cards = [card];
			}
			const skill = _status.event.skill;
			if (info.contentBefore) {
				const next = game.createEvent(name + 'ContentBefore', false);
				if (next.parent) {
					next.parent.stocktargets = targets;
				}
				next.targets = targets;
				next.card = card;
				next.cards = cards;
				next.player = player;
				next.skill = skill;
				next.type = 'precard';
				next.forceDie = true;
				await next.setContent(info.contentBefore);
			}
			if (!info.multitarget) {
				for (const target of targets) {
					if (target && target.isDead()) return;
					if (info.notarget) return;
					const next = game.createEvent(name, false);
					if (next.parent) {
						next.parent.directHit = [];
					}
					next.targets = targets;
					next.target = target;
					next.card = card;
					if (info.type == 'delay') {
						next.card = {
							name: name,
							cards: cards,
						};
					}
					next.cards = cards;
					next.player = player;
					next.type = 'card';
					next.skill = skill;
					next.baseDamage = Math.max(numberq1(info.baseDamage));
					next.forceDie = true;
					next.directHit = true;
					await next.setContent(info.content);
				}
			} else {
				if (info.notarget) return;
				const next = game.createEvent(name, false);
				if (next.parent) {
					next.parent.directHit = [];
				}
				next.targets = targets;
				next.target = targets[0];
				next.card = card;
				if (info.type == 'delay') {
					next.card = {
						name: name,
						cards: cards,
					};
				}
				next.cards = cards;
				next.player = player;
				next.type = 'card';
				next.skill = skill;
				next.baseDamage = Math.max(numberq1(info.baseDamage));
				next.forceDie = true;
				next.directHit = true;
				await next.setContent(info.content);
			}
			if (info.contentAfter) {
				const next = game.createEvent(name + 'ContentAfter', false);
				next.targets = targets;
				next.card = card;
				next.cards = cards;
				next.player = player;
				next.skill = skill;
				next.type = 'postcard';
				next.forceDie = true;
				await next.setContent(info.contentAfter);
			}
			return player;
		}; //解构用牌
		lib.element.player.qrevive = function () {
			const player = this;
			if (player.parentNode != ui.arena) {
				ui.arena.appendChild(player);
			} //防止被移除节点
			player.classList.remove('removing', 'hidden', 'dead');
			game.log(player, '复活');
			player.maxHp = Math.max(lib.character[player.name]?.maxHp || 0, player.maxHp || 0);
			player.hp = player.maxHp;
			game.addVideo('revive', player);
			player.removeAttribute('style');
			player.node.avatar.style.transform = '';
			player.node.avatar2.style.transform = '';
			player.node.hp.show();
			player.node.equips.show();
			player.node.count.show();
			player.update();
			game.players.add(player);
			game.dead.remove(player);
			player.draw(Math.min(player.maxHp, 20));
			return player;
		}; //复活函数
		lib.element.player.zhenshang = function (num, source, nature) {
			const player = this;
			let str = '受到了';
			if (source) {
				str += `来自<span class='bluetext'>${source == player ? '自己' : get.translation(source)}</span>的`;
			}
			str += get.cnNumber(num) + '点';
			if (nature) {
				str += get.translation(nature) + '属性';
			}
			str += '伤害';
			game.log(player, str);
			const stat = player.stat;
			const statx = stat[stat.length - 1];
			if (!statx.damaged) {
				statx.damaged = num;
			} else {
				statx.damaged += num;
			}
			if (source) {
				const stat = source.stat;
				const statx = stat[stat.length - 1];
				if (!statx.damage) {
					statx.damage = num;
				} else {
					statx.damage += num;
				}
			}
			player.hp -= num;
			player.update();
			player.$damage(source);
			var natures = (nature || '').split(lib.natureSeparator);
			game.broadcastAll(
				function (natures, player) {
					if (lib.config.animation && !lib.config.low_performance) {
						if (natures.includes('fire')) {
							player.$fire();
						}
						if (natures.includes('thunder')) {
							player.$thunder();
						}
					}
				},
				natures,
				player
			);
			var numx = player.hasSkillTag('nohujia') ? num : Math.max(0, num - player.hujia);
			player.$damagepop(-numx, natures[0]);
			if (player.hp <= 0 && player.isAlive()) {
				player.dying({ source: source });
			}
			return player;
		}; //真实伤害
		lib.element.player.qequip = function (card) {
			const player = this;
			if (Array.isArray(card)) {
				for (const i of card) {
					player.qequip(i);
				}
			} else if (card) {
				if (card[card.cardSymbol]) {
					const owner = get.owner(card);
					const vcard = card[card.cardSymbol];
					if (owner) {
						owner.vcardsMap?.equips.remove(vcard);
					}
					player.vcardsMap?.equips.add(vcard);
				} else {
					const vcard = new lib.element.VCard(card);
					const cardSymbol = Symbol('card');
					card.cardSymbol = cardSymbol;
					card[cardSymbol] = vcard;
					player.vcardsMap?.equips.push(vcard);
				}
				player.node.equips.appendChild(card);
				card.style.transform = '';
				card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
				const info = lib.card[card.name];
				if (info && info.skills) {
					for (const i of info.skills) {
						player.addSkillTrigger(i);
					}
				}
			}
			return player;
		};
		lib.element.player.qdie = function (source) {
			const player = this;
			player.qdie1(source);
			player.qdie2(source);
			player.qdie3(source);
			return player;
		}; //可以触发死亡相关时机,但是死亡无法避免//直接正常堆叠事件即可.如果await每个qdie123事件,那么外部就必须await qdie了,否则就卡掉
		lib.element.player.qdie1 = function (source) {
			const player = this;
			const next = game.createEvent('diex1', false);
			next.source = source;
			next.player = player;
			next._triggered = null;
			next.setContent(async function (event, trigger, player) {
				await event.trigger('dieBefore');
				await event.trigger('dieBegin');
			});
			return next;
		}; //触发死亡前相关时机//不能用async,不然会卡掉后续事件,不能await那个setcontent
		lib.element.player.qdie2 = function (source) {
			const player = this;
			const next = game.createEvent('diex2', false);
			next.source = source;
			next.player = player;
			next._triggered = null;
			next.restMap = { type: null, count: null, audio: null };
			next.excludeMark = [];
			next.setContent('die');
			return next;
		}; //斩杀
		lib.element.player.qdie3 = function (source) {
			const player = this;
			const next = game.createEvent('diex3', false);
			next.source = source;
			next.player = player;
			next._triggered = null;
			next.setContent(async function (event, trigger, player) {
				await event.trigger('dieEnd');
				await event.trigger('dieAfter');
			});
			return next;
		}; //触发死亡后相关时机
	}; //解构魔改本体函数
	mogai();
	lib.translate.mode_extension_BLEACH_character_config = '<img style=width:100px src=extension/BLEACH/BLEACH.png>';
	game.addGroup('bleach_xian', '现', '现世', {
		color: [255, 128, 0, 1],
	});
	game.addGroup('bleach_shi', '尸', '尸魂界', {
		color: [0, 0, 0, 1],
	});
	game.addGroup('bleach_xu', '虚', '虚圈', {
		color: [255, 255, 255, 1],
	});
	game.addGroup('bleach_wu', '无', '无形帝国', {
		color: [0, 191, 255, 1],
	});
	game.addGroup('bleach_yu', '狱', '地狱', {
		color: [255, 215, 0, 1],
	});
	lib.namePrefix.set('鬼', {
		color: '#f3c5ff',
		nature: 'blackmm',
	});
	lib.namePrefix.set('机', {
		color: '#fdd559',
		nature: 'soilmm',
	});
	lib.namePrefix.set('魂', {
		color: '#f2f2f2',
		nature: 'black',
	});
	lib.namePrefix.set('崩', {
		color: '#4b0082',
		nature: 'thundermm',
	});
	lib.namePrefix.set('可', {
		color: '#cef6f5',
		nature: 'whitemm',
	});
	lib.namePrefix.set('泳', {
		color: '#4f42b5',
		nature: 'white',
	});
	lib.element.player.bleachAwaken = function (character, num, bgm) {
		if (!character || typeof num != 'number') {
			console.warn('error: no sourceCharacter or num to bleachAwaken', get.translation(this));
			return;
		}
		for (var i of ['name', 'name1', 'name2']) {
			if (i == 'name1' && this.name === this.name1) continue;
			if (this[i] && this[i] == character) {
				const name = i == 'name2' ? 'name2' : 'name';
				if (bgm) game.switchBleachBgm(bgm);
				if (num > 0) character = character + '_awaken' + num;
				game.broadcastAll(
					(player, name, character) => {
						const goon = !lib.character[character];
						if (goon) lib.character[character] = ['', '', 0, [], ['ext:BLEACH/awaken/' + character + '.jpg']];
						player.smoothAvatar(name == 'name2');
						player.node['avatar' + name.slice(4)].setBackground(character, 'character');
						player.node['avatar' + name.slice(4)].show();
						if (goon) delete lib.character[character];
					},
					this,
					name,
					character
				);
			}
		}
	};
	lib.element.player.bleachIs = function (str) {
		if (Array.isArray(str)) {
			for (var i = 0; i < str.length; i++) {
				if (this.bleachIs(str[i])) {
					return true;
				}
			}
			return false;
		}
		return this.name == str || this.name1 == str || this.name2 == str;
	};
	get.bleachIs = {
		races(player) {
			const list = [];
			for (var i of ['name', 'name1', 'name2']) {
				if (i == 'name1' && player.name === player.name1) continue;
				const key = get.bleachIs.race(player[i]);
				if (player[i] && key) {
					list.addArray(get.bleachIs.race(player[i]));
				}
			}
			return list;
		},
		race(name) {
			const list = [];
			if (!lib.character[name] || (!lib.character[name][4] && !lib.character[name].races)) return list;
			if (lib.character[name].races) return lib.character[name].races;
			for (var i of lib.character[name][4]) {
				if (i.indexOf('race:') == 0) {
					list.addArray(i.split(':').slice(1));
				}
			}
			return list;
		},
		canShikai(player) {
			const names = [];
			if (player.name) names.add(player.name);
			if (player.name1) names.add(player.name1);
			if (player.name2) names.add(player.name2);
			if (names.some((name) => lib.character[name].zanpakuto)) return true;
			if (names.length) {
				for (let name of names) {
					if (lib.character[name][4].some((tag) => /^zanpakuto:.+$/.test(tag))) return true;
				}
			}
			return false;
		},
		shikai(player) {
			if (!player || !player.getEquips(1).length) return;
			if (player.getEquips(1).some((card) => get.bleachIs.zanpakuto(player, card))) return true;
			return false;
		},
		zanpakuto(player, card) {
			if (!card) return;
			const names = [player.name, player.name1, player.name2];
			for (let name of names) {
				if (!name) continue;
				if (lib.character[name].zanpakuto) {
					let path = `zanpakuto_${lib.character[name].zanpakuto}`;
					if (card.name == path) return true;
				} else if (lib.character[name][4].some((tag) => /^zanpakuto:.+$/.test(tag))) {
					for (let tag of lib.character[name][4]) {
						if (tag.includes('zanpakuto:')) {
							if (card.name == `zanpakuto_${tag.slice(10)}`) return true;
						}
					}
				}
			}
			return false;
		},
	};
	lib.element.player.getRaces = function () {
		const list = [];
		list.addArray(get.bleachIs.races(this));
		return list;
	};
	lib.element.player.isNingen = function () {
		const list = [];
		list.addArray(get.bleachIs.races(this));
		return list.includes('ningen');
	};
	lib.element.player.isShinigami = function () {
		const list = [];
		list.addArray(get.bleachIs.races(this));
		return list.includes('shinigami');
	};
	lib.element.player.isModifiedsoul = function () {
		const list = [];
		list.addArray(get.bleachIs.races(this));
		return list.includes('modifiedsoul');
	};
	lib.element.player.isQuincy = function () {
		const list = [];
		list.addArray(get.bleachIs.races(this));
		return list.includes('quincy');
	};
	lib.element.player.isZanpakuto = function () {
		const list = [];
		list.addArray(get.bleachIs.races(this));
		return list.includes('zanpakuto');
	};
	lib.element.player.isArrancar = function () {
		const list = [];
		list.addArray(get.bleachIs.races(this));
		return list.includes('arrancar');
	};
	lib.element.player.isKamen = function () {
		const list = [];
		list.addArray(get.bleachIs.races(this));
		return list.includes('kamen');
	};
	lib.element.player.isKami = function () {
		const list = [];
		list.addArray(get.bleachIs.races(this));
		return list.includes('kami');
	};
	lib.element.player.isZainin = function () {
		const list = [];
		list.addArray(get.bleachIs.races(this));
		return list.includes('zainin');
	};
	lib.element.player.isYoukai = function () {
		const list = [];
		list.addArray(get.bleachIs.races(this));
		return list.includes('youkai');
	};
	get.strRace = function (player) {
		let str, race;
		const races = get.bleachIs.races(player);
		switch (races.length) {
			case 1:
			case 2:
				race = races[0];
				break;
			case 3:
			case 4:
				race = races[1];
				break;
			default:
				race = 'ningen';
		}
		switch (race) {
			case 'ningen':
				str = '人类';
				break;
			case 'shinigami':
				str = '死神';
				break;
			case 'modifiedsoul':
				str = '改造魂魄';
				break;
			case 'quincy':
				str = '灭却师';
				break;
			case 'zanpakuto':
				str = '斩魄刀';
				break;
			case 'arrancar':
				str = '破面';
				break;
			case 'kamen':
				str = '假面';
				break;
			case 'kami':
				str = '神';
				break;
			case 'zainin':
				str = '䓘人';
				break;
			case 'youkai':
				str = '妖魔';
				break;
		}
		return str;
	};
	lib.element.player.canShiKai = function () {
		return get.bleachIs.canShikai(this);
	};
	lib.element.player.isShiKai = function () {
		return get.bleachIs.shikai(this);
	};
	lib.element.player.shikai = function () {
		var next = game.createEvent('shikai');
		next.player = this;
		for (var i = 0; i < arguments.length; i++) {
			if (get.itemtype(arguments[i]) == 'cards') {
				next.cards = arguments[i].slice(0);
			} else if (get.itemtype(arguments[i]) == 'card') {
				next.card = arguments[i];
			}
		}
		next.setContent('shikai');
		next._args = Array.from(arguments);
		return next;
	};
	lib.element.content.shikai = function () {
		'step 0';
		event.trigger('shikaiBegin1');
		('step 1');
		event.map = {};
		const names = [];
		const name = player.name || player.name1,
			name2 = player.name2;
		if (lib.character[name].zanpakuto) {
			let path = lib.character[name].zanpakuto;
			names.push(name);
			event.map[name] = `zanpakuto_${path}`;
		} else if (lib.character[name][4].some((tag) => /^zanpakuto:.+$/.test(tag))) {
			let tag = lib.character[name][4].find((tag) => /^zanpakuto:.+$/.test(tag));
			let match = tag.match(/^zanpakuto:(.+)$/);
			if (match) {
				names.push(name);
				let path = match[0];
				path = path.replace(':', '_');
				event.map[name] = path;
			}
		}
		if (name2 && lib.character[name2][4].some((tag) => /^zanpakuto:.+$/.test(tag))) {
			tag = lib.character[name2][4].find((tag) => /^zanpakuto:.+$/.test(tag));
			match = tag.match(/^zanpakuto:(.+)$/);
			if (match) {
				names.push(name2);
				path = match[0];
				path = path.replace(':', '_');
				event.map[name2] = path;
			}
		}
		if (names.length > 1) {
			player
				.chooseControl(names, () => {
					return names.randomGet();
				})
				.set('prompt', '请选择始解的武将');
		} else event._result = { control: names[0] };
		('step 2');
		if (player.isIn() && (card || cards)) {
			const name = result.control;
			let str = '始解!';
			let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet();
			switch (name) {
				case 'bleach_abarai':
					str = '咆哮吧 蛇尾丸!';
					num = 6;
					break;
				case 'bleach_bocun':
					str = '轰鸣吧 天谴!';
					num = 7;
					break;
				case 'bleach_jiliang':
					str = '抬起头来 侘助!';
					num = 3;
					break;
				case 'bleach_chusentao':
					str = '绽放吧 飞梅!';
					num = 5;
					break;
				case 'bleach_banmu':
				case 'bleach_re_banmu':
					str = '伸长吧 鬼灯丸!';
					num = 11;
					break;
				case 'bleach_xiumubaizai':
				case 'bleach_5th_xiumubaizai':
					str = '散落吧 千本樱!';
					num = 6;
					break;
				case 'bleach_shiwanyin':
					str = '射杀他 神枪!';
					num = 3;
					break;
				case 'bleach_niejianli':
					str = '张开你的爪子吧 疋杀地藏!';
					num = 12;
					break;
				case 'bleach_puyuanxizhu':
					str = '鸣叫吧 红姬!';
					num = 12;
					break;
				case 'bleach_songben':
					str = '低鸣吧 灰猫!';
					num = 10;
					break;
				case 'bleach_lanran':
				case 'bleach_hougyoku_lanran':
				case 'bleach_sp_lanran':
				case 'bleach_re_lanran':
				case 'bleach_sb_lanran':
					str = '碎裂吧 镜花水月!';
					num = 5;
					break;
				case 'bleach_suifeng':
					str = '尽敌哲杀吧 雀蜂!';
					num = 2;
					break;
				case 'bleach_fuzhu':
					str = '悉数流波皆化吾盾悉数雷光皆化吾刃 双鱼理!';
					num = 13;
					break;
				case 'bleach_daqiantian':
					str = '击碎他 五形头!';
					num = 2;
					break;
				case 'bleach_jingle':
					str = '花风絮乱花神鸣啼天风絮乱天魔嗤笑 花天狂骨!';
					num = 8;
					break;
				case 'bleach_hisaki':
					str = '割除吧 风死!';
					num = 9;
					break;
				case 'bleach_shanben':
				case 'bleach_tybw_shanben':
					str = '森罗万象皆化为灰烬 流刃若火!';
					num = 1;
					break;
				case 'bleach_dongxian':
				case 'bleach_re_dongxian':
					str = '鸣叫吧 清虫!';
					num = 9;
					break;
				case 'bleach_zhibohaiyan':
				case 'bleach_yaluoniluo':
					str = '让水天逆卷吧 捩花!';
					num = 13;
					break;
				case 'bleach_dongshilang':
				case 'bleach_us_dongshilang':
					str = '端坐于霜天吧 冰轮丸!';
					num = 10;
					break;
				case 'bleach_zombie_dongshilang':
					str = '端坐于霜天吧 冰轮丸!';
					break;
				case 'bleach_caoguan':
					str = '端坐于霜天吧 冰轮丸!';
					break;
				case 'bleach_maozhihualie':
				case 'bleach_maozhihuabaqianliu':
					str = '肉雫霎!';
					num = 4;
					break;
				case 'bleach_pingzi':
				case 'bleach_tybw_pingzi':
					str = '倒下吧 逆抚!';
					break;
				case 'bleach_heiqiyixin':
					str = '燃烧吧 剡月!';
					break;
				case 'bleach_zhiboyixin':
					str = '燃烧吧 剡月!';
					num = 10;
					break;
				case 'bleach_xiumuluqiya':
				case 'bleach_re_xiumuluqiya':
					str = '凌舞吧 袖白雪!';
					num = 13;
					break;
				case 'bleach_gengmu':
					str = '能告诉我你的名字吗？';
					num = 11;
					break;
				case 'bleach_aichuanluowu':
					str = '打碎它 天狗丸!';
					break;
				case 'bleach_fengqiao':
					str = '弹奏吧 金沙罗!';
					break;
				case 'bleach_xina':
					str = '诱落夜幕吧 弥勒丸!';
					break;
				case 'bleach_tybw_quebu':
					str = '贯穿他 严灵丸!';
					break;
				case 'bleach_liuche':
				case 'bleach_tybw_liuche':
					str = '狂卷吧 断地风!';
					break;
				case 'bleach_caolubaqianliu':
					str = '出来吧 三步剑兽!';
					break;
				case 'bleach_tybw_gengmu':
					str = '吞噬吧 野晒!';
					break;
				default:
					break;
			}
			player.chat(str);
			let audio = name;
			switch (audio) {
				case 'bleach_re_banmu':
					audio = 'bleach_banmu';
					break;
				case 'bleach_hougyoku_lanran':
				case 'bleach_sp_lanran':
				case 'bleach_re_lanran':
				case 'bleach_sb_lanran':
					audio = 'bleach_lanran';
					break;
				case 'bleach_us_dongshilang':
					audio = 'bleach_dongshilang';
					break;
				case 'bleach_re_xiumuluqiya':
					audio = 'bleach_xiumuluqiya';
					break;
				case 'bleach_tybw_liuche':
					audio = 'bleach_liuche';
					break;
				default:
					break;
			}
			game.playShiKai(audio);
			if (event.map[name] == 'zanpakuto_sakanade') game.switchBleachBgm('EverythingILost');
			if (!card) card = cards[0];
			player.removeEquipTrigger(card);
			game.broadcastAll(
				(card, num, name) => {
					card.init([card.suit, num, name]);
				},
				card,
				num,
				event.map[name]
			);
			let info = get.info(card);
			if (info.skills) {
				for (var i = 0; i < info.skills.length; i++) {
					player.addSkillTrigger(info.skills[i]);
				}
				player.addAdditionalSkill('shikai', info.skills);
			}
			player
				.when({
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				})
				.filter((evt) => {
					const evtx = evt.getl(player);
					return evtx?.cards2?.some((cardx) => cardx == card);
				})
				.then(() => {
					player.removeAdditionalSkill('shikai');
				})
				.vars({ card: card });
		}
	};
	lib.element.player.getInitMaxHp = function () {
		if (this.storage._maxHp) return this.storage._maxHp;
		return null;
	};
	lib.skill._bleachInitMaxHp = {
		trigger: {
			global: 'gameDrawAfter',
		},
		forced: true,
		silent: true,
		_priority: 25,
		content() {
			player.storage._maxHp = player.maxHp;
		},
	};
	lib.element.player.setImmuneDeath = function () {
		if (this.hp <= 0) {
			this.hp = 1;
			this.update();
		}
		this.addSkill('immuneDeath');
		if (game.hasExtension('十周年UI')) return;
		var id = ui.create.div('.ImmuneDeath');
		id.style.left = '30px';
		id.style.top = '0px';
		id.style.color = 'white';
		id.style.background = 'rgba(0,0,0,0.4)';
		id.style['font-size'] = '15px';
		id.style['font-family'] = 'xinwei';
		id.dataset.nature = 'water';
		id.innerHTML = '免疫死亡';
		this.node.immuneDeath = id;
		if (id) this.appendChild(this.node.immuneDeath);
		game.broadcast(
			(player, node) => {
				player.appendChild(node);
			},
			this,
			this.node.nmmuneDeath
		);
	};
	lib.element.player.clearImmuneDeath = function () {
		this.removeSkill('immuneDeath');
		if (game.hasExtension('十周年UI')) return;
		game.broadcastAll((player) => {
			player.node.immuneDeath.hide();
		}, this);
	};
	lib.element.player.getAttacks = function () {
		var num = 0;
		var ret = game.checkMod(this, num, 'attacks', this);
		if (typeof ret != 'number') {
			return 0;
		}
		if (ret <= 0) {
			return 0;
		}
		if (ret >= 4) {
			return 4;
		}
		return ret;
	};
	lib.element.player.getDefense = function () {
		var num = 12;
		var ret = game.checkMod(this, num, 'defense', this);
		if (typeof ret != 'number') {
			return 0;
		}
		if (ret <= 1) {
			return 1;
		}
		return ret;
	};
	lib.element.player.getFocus = function () {
		var num = 7;
		var ret = game.checkMod(this, num, 'focus', this);
		if (typeof ret != 'number') {
			return 0;
		}
		if (ret <= 0) {
			return 0;
		}
		return ret;
	};
	lib.element.player.getAddFocus = function () {
		var num = 2;
		var ret = game.checkMod(this, num, 'addFocus', this);
		if (typeof ret != 'number') {
			return 0;
		}
		if (ret <= 0) {
			return 0;
		}
		return ret;
	};
	lib.element.player.getSpiriualPressure = function () {
		var num = 0;
		var ret = game.checkMod(this, num, 'spiriualpressure', this);
		if (typeof ret != 'number') {
			return 0;
		}
		if (ret <= 0) {
			return 0;
		}
		return ret;
	};
	lib.element.player.getStamina = function () {
		var num = 0;
		var ret = game.checkMod(this, num, 'stamina', this);
		if (typeof ret != 'number') {
			return 0;
		}
		if (ret <= 0) {
			return 0;
		}
		if (ret >= 5) {
			return 5;
		}
		return ret;
	};
	lib.element.player.getBleachSoulTrees = function () {
		var num = 1;
		var ret = game.checkMod(this, num, 'bleachSoulTrees', this);
		if (typeof ret != 'number') {
			return 0;
		}
		if (ret <= 0) {
			return 0;
		}
		return ret;
	};
	game.addNature('bleach_ice', '冰冻', {
		order: 70,
		lineColor: [157, 203, 255, 1],
		color: [157, 203, 255, 1],
	});
	game.addNature('bleach_break', '破防', {
		linked: false,
		color: [255, 255, 0, 1],
	});
	lib.element.player.bleachDamageKill = function () {
		var num = 1,
			num2 = Math.floor(this.getDamagedHp() / 2),
			nature,
			source,
			nosource = false;
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == 'number') {
				num = arguments[i];
			} else if (get.itemtype(arguments[i]) == 'player') {
				source = arguments[i];
			} else if (arguments[i] == 'nosource') {
				nosource = true;
			} else if (get.itemtype(arguments[i]) == 'nature' && arguments[i] != 'stab') {
				nature = arguments[i];
			}
		}
		if (source == undefined && !nosource) source = _status.event.player;
		if (num2 > 0) this.popup('斩杀', 'orange');
		this.damage(nature, num + num2, 'nocard');
	};
	lib.element.player.instaKill = function (crit, source, boolean, num) {
		if (Math.abs(Math.floor(Math.random() * 100) - Math.ceil(Math.random() * 100)) <= crit) {
			this.qdie(source);
			game.log(this, '触发了', '#y即死');
		} else {
			if (typeof boolean != 'undefined') {
				this[boolean ? 'damage' : 'loseHp'](boolean ? source : null, num || 1);
			} else {
				game.log(this, '无事发生');
			}
		}
	};
	get.isBleachBuff = function (buff) {
		var info = get.info(buff);
		return info && info.bleachBuff;
	};
	game.clearBleachBuff = function (player, totrigger) {
		if (totrigger) {
			var buffObj = get.bleachBuffNums(player);
			game.removeBleachBuff(player, buffObj);
		} else {
			var buffs = get.bleachBuffs(player);
			for (var buff of buffs) {
				if (get.bleachBuffCanAdd(buff)) {
					player.removeMark(buff, player.countMark(buff));
				} else {
					player.removeSkill(buff);
				}
			}
		}
	};
	get.bleachBuffs = function (player, positive) {
		var skills = player.getSkills(false, false);
		var ret = [];
		for (var i = 0; i < skills.length; i++) {
			var s = skills[i];
			var info = get.info(s);
			if (info && info.bleachBuff) {
				if (positive === true && info.bleachPositiveBuff) {
					ret.add(s);
				} else if (positive === false && !info.bleachPositiveBuff) {
					ret.add(s);
				} else if (positive === undefined) {
					ret.add(s);
				}
			}
		}
		var marks = player.marks;
		for (var s in marks) {
			var info = get.info(s);
			if (info && info.bleachBuff) {
				if (positive === true && info.bleachPositiveBuff) {
					ret.add(s);
				} else if (positive === false && !info.bleachPositiveBuff) {
					ret.add(s);
				} else if (positive === undefined) {
					ret.add(s);
				}
			}
		}
		return ret;
	};
	get.hasBleachBuff = function (player, buff) {
		return get.bleachBuffs(player).includes(buff);
	};
	get.canAddBleachBuffTo = function (player, buff) {
		if (get.isBleachBuff(buff)) {
			var buffs = get.bleachBuffs(player);
			if (buffs.includes(buff)) {
				return get.bleachBuffCanAdd(buff);
			} else {
				return true;
			}
		}
		return false;
	};
	get.bleachBuffCanAdd = function (buff) {
		var info = get.info(buff);
		return info && info.bleachBuffCanAdd;
	};
	get.bleachBuffIsPositive = function (buff) {
		var info = get.info(buff);
		if (!info || !info.bleachBuff) return false;
		return info.bleachPositiveBuff;
	};
	get.bleachBuffIsNegetive = function (buff) {
		var info = get.info(buff);
		if (!info || !info.bleachBuff) return false;
		return !info.bleachPositiveBuff;
	};
	get.bleachBuffNums = function (player, positive) {
		var buffs = get.bleachBuffs(player, positive);
		var obj = {};
		for (var buff of buffs) {
			if (get.bleachBuffCanAdd(buff)) {
				obj[buff] = player.countMark(buff);
			} else {
				obj[buff] = 1;
			}
		}
		return obj;
	};
	get.bleachBuffEffect = function (player, buff, num) {
		if (!num) {
			num = 1;
		}
		var info = get.info(buff);
		var ret = -2;
		if (info && info.bleachPositiveBuff) {
			ret = 2;
		}
		if (info && info.bleachBuffEffect) {
			if (typeof info.bleachBuffEffect == 'function') {
				var count = 1;
				if (info.bleachBuffCanAdd) {
					count = player.countMark(buff);
					ret = info.bleachBuffEffect(player, count) * num;
				}
				ret = info.bleachBuffEffect(player, count);
			} else if (typeof info.bleachBuffEffect == 'number') {
				ret = info.bleachBuffEffect * num;
			}
		}
		var setToZero = {
			zeroplayer: false,
		};
		var ret2 = game.checkMod(player, buff, num, ret, setToZero, 'bleachModBuffEffect', player);
		if (setToZero && setToZero.zeroplayer) {
			return 0;
		}
		if (typeof ret2 == 'number') {
			ret = ret2;
		}
		return ret;
	};
	lib.element.player.addBleachBuff = function (...args) {
		var next = game.createEvent('addBleachBuff');
		next.player = this;
		var noCard, noSource;
		var event = _status.event;
		for (var argument of args) {
			if (get.itemtype(argument) == 'cards') next.cards = argument.slice();
			else if (get.itemtype(argument) == 'card') next.card = argument;
			else if (get.itemtype(argument) == 'player') next.source = argument;
			else if (argument && (typeof argument == 'string' || typeof argument == 'object')) {
				if (typeof argument == 'string') {
					var m = {};
					var num = 1;
					for (var j of args) {
						if (typeof j == 'number') num = j;
					}
					m[argument] = num;
					argument = m;
				}
				for (var i in argument) {
					var info = get.info(i);
					if (info && info.bleachAddEffectFilter && !info.bleachAddEffectFilter(this)) {
						delete argument[i];
						game.log(this, '不能获得', i, '状态.');
						continue;
					}
					if (get.isBleachBuff(i)) {
						if (!get.bleachBuffCanAdd(i)) {
							if (this.hasSkill(i)) {
								delete argument[i];
							} else {
								argument[i] = 1;
							}
						} else {
							if (argument[i] <= 0) {
								delete argument[i];
							}
						}
					} else {
						delete argument[i];
					}
				}
				next.buff = argument;
			} else if (argument == 'nocard') noCard = true;
			else if (argument == 'nosource') noSource = true;
		}
		if (!next.card && !noCard) next.card = event.card;
		if (!next.cards && !noCard) next.cards = event.cards;
		if (!next.source && !noSource) {
			var source = event.customSource || event.player;
			if (source && !source.isDead()) next.source = source;
		}
		next.setContent('addBleachBuff');
		return next;
	};
	lib.element.player.removeBleachBuff = function (...args) {
		var next = game.createEvent('removeBleachBuff');
		next.player = this;
		var noCard, noSource;
		var event = _status.event;
		for (var argument of args) {
			if (get.itemtype(argument) == 'cards') next.cards = argument.slice();
			else if (get.itemtype(argument) == 'card') next.card = argument;
			else if (get.itemtype(argument) == 'player') next.source = argument;
			else if (argument && (typeof argument == 'string' || typeof argument == 'object')) {
				if (typeof argument == 'string') {
					var m = {};
					var num = 1;
					for (var j of args) {
						if (typeof j == 'number') num = j;
					}
					m[argument] = num;
					argument = m;
				}
				for (var i in argument) {
					if (get.isBleachBuff(i)) {
						if (!get.bleachBuffCanAdd(i)) {
							if (!this.hasSkill(i)) delete argument[i];
							else argument[i] = 1;
						} else {
							argument[i] = Math.min(argument[i], this.countMark(i));
							if (argument[i] <= 0) delete argument[i];//QQQ
						}
					} else {
						delete argument[i];
					}
				}
				next.buff = argument;
			} else if (argument == 'nocard') noCard = true;
			else if (argument == 'nosource') noSource = true;
		}
		if (!next.card && !noCard) next.card = event.card;
		if (!next.cards && !noCard) next.cards = event.cards;
		if (!next.source && !noSource) {
			var source = event.customSource || event.player;
			if (source && !source.isDead()) next.source = source;
		}
		next.setContent('removeBleachBuff');
		return next;
	};
	lib.element.player.hasBleachBuff = function (buffname) {
		return get.hasBleachBuff(this, buffname);
	};
	lib.element.content.addBleachBuff = function () {
		'step 0';
		event.trigger('addBleachBuffBegin1');
		('step 1');
		event.trigger('addBleachBuffBegin2');
		('step 2');
		event.trigger('addBleachBuffBegin');
		('step 3');
		const buff = event.buff;
		for (var i in buff) {
			const info = get.info(i);
			if (info && info.bleachAddEffectFilter && !info.bleachAddEffectFilter(player)) {
				delete buff[i];
				game.log(player, '不能获得', i, '状态');
				continue;
			}
			if (get.isBleachBuff(i)) {
				if (get.bleachBuffCanAdd(i)) {
					const num = buff[i];
					player.addMark(i, num, false);
					game.log(player, '获得了', get.cnNumber(num), '层', '#g【' + get.translation(i) + '】');
				} else {
					if (!player.hasSkill(i)) {
						game.log(player, '附加了效果【', i, '】');
						player.addSkill(i);
					} else {
						delete buff[i];
					}
				}
			}
		}
		('step 4');
		event.trigger('addBleachBuffEnd1');
	};
	lib.element.content.removeBleachBuff = function () {
		'step 0';
		event.trigger('removeBleachBuffBegin1');
		('step 1');
		event.trigger('removeBleachBuffBegin2');
		('step 2');
		event.trigger('removeBleachBuffBegin');
		('step 3');
		const buff = event.buff;
		for (var i in buff) {
			if (get.isBleachBuff(i)) {
				if (get.bleachBuffCanAdd(i)) {
					const num = Math.min(buff[i], player.countMark(i));
					if (num > 0) {
						player.removeMark(i, num, false);
						game.log(player, '移去了', get.cnNumber(num), '层', '#g【' + get.translation(i) + '】');
					}
				} else {
					if (player.hasSkill(i)) {
						game.log(player, '移除了状态【', i, '】');
						player.removeSkill(i);
					} else {
						delete buff[i];
					}
				}
			}
		}
		('step 4');
		event.trigger('removeBleachBuffEnd1');
	};
	lib.skill._bleachEffect_Exert = {
		trigger: {
			player: 'damageEnd',
		},
		filter(event, player) {
			const card = event.card;
			if (!card || !card.storage) return false;
			const keys = Object.keys(card.storage);
			return keys.some((key) => lib.skill[key] && get.isBleachBuff(key));//QQQ
		},
		forced: true,
		_priority: Infinity,
		content() {
			let map = {};
			const storage = trigger.card.storage;
			const keys = Object.keys(storage);
			for (var i of keys) {
				const info = get.info(i);
				if (info && get.isBleachBuff(i)) {
					if (get.bleachBuffCanAdd(i)) {
						map[i] = storage[i];
					} else {
						map[i] = 1;
					}
				}
			}
			player.addBleachBuff(map, trigger.source || null);
		},
	};
	lib.translate._bleachArena_up = '灵溢';
	lib.skill._bleachArena_up = {
		trigger: {
			player: 'phaseDrawBegin2',
		},
		filter(event, player) {
			return !event.numFixed && (player.countMark('bleachMark_up') > 0 || player.hasSkillTag('bleachMarkUpVirtual'));
		},
		forced: true,
		_priority: Infinity,
		content() {
			'step 0';
			trigger.num += player.countMark('bleachMark_up') + (player.hasSkillTag('bleachMarkUpVirtual') ? 1 : 0);
			('step 1');
			if (!player.storage.bleachMark_uod_limit) return;
			let limit = player.storage.bleachMark_uod_limit[0];
			if (limit.length && !player.hasSkillTag('bleachMarkUpForever')) {
				for (var i in limit) limit[i]--;
				const lose = limit.filter((i) => i == 0);
				if (lose.length) {
					limit.removeArray(lose);
					player.removeBleachBuff('bleachMark_up', lose.length);
				}
			}
		},
		ai: {
			bleachMarkUpForever: true,
			skillTagFilter(player) {
				if (!player.storage.bleachMarkUpForever) return false;
			},
		},
	};
	lib.translate._bleachArena_down = '灵衰';
	lib.skill._bleachArena_down = {
		trigger: {
			player: 'phaseDrawBegin2',
		},
		filter(event, player) {
			return !event.numFixed && player.countMark('bleachMark_down') > 0;
		},
		forced: true,
		_priority: Infinity,
		content() {
			'step 0';
			trigger.num -= player.countMark('bleachMark_down');
			('step 1');
			if (!player.storage.bleachMark_uod_limit) return;
			let limit = player.storage.bleachMark_uod_limit[1];
			for (var i in limit) limit[i]--;
			const lose = limit.filter((i) => i == 0);
			if (lose.length) {
				limit.removeArray(lose);
				player.removeBleachBuff('bleachMark_down', lose.length);
			}
		},
	};
	lib.skill._bleachArena_upAndDown = {
		trigger: {
			player: ['addBleachBuffBegin1', 'addBleachBuffEnd', 'removeBleachBuffEnd'],
		},
		filter(event, player, name) {
			const buffs = event.buff,
				list = player.getStorage('bleachMark_uod_limit'),
				add = ['bleachMark_up', 'bleachMark_down'];
			if (!add.some((i) => i in buffs)) return false;
			if (name == 'removeBleachBuffEnd') return list[0].length != player.countMark(add[0]) || list[1].length != player.countMark(add[1]);
			if (name == 'addBleachBuffBegin1') return (add[0] in buffs && player.hasMark(add[1])) || (add[1] in buffs && player.hasMark(add[0]));
			return true;
		},
		_priority: Infinity,
		forced: true,
		async content(event, trigger, player) {
			if (!player.storage.bleachMark_uod_limit) player.storage.bleachMark_uod_limit = [[], []];
			let list = player.storage.bleachMark_uod_limit;
			const add = ['bleachMark_up', 'bleachMark_down'],
				buffs = trigger.buff,
				name = event.triggername;
			if (name == 'addBleachBuffBegin1') {
				for (var i in buffs) {
					if (!add.includes(i) || (add.includes(i) && !player.hasMark(add[0 + (i === add[0])]))) continue;
					let num = 0,
						num2 = 10 * buffs[i],
						limit = list[0 + (i === add[0])];
					for (let j = 0; j < limit.length; j++) {
						const buffnum = Math.min(limit[j], num2);
						limit[j] -= buffnum;
						num2 -= buffnum;
						if (limit[j] == 0) num++;
						if (num2 == 0) {
							buffs[i] -= Math.max(1, num);
							if (buffs[i] == 0) delete buffs[i];
							break;
						}
					}
					if (num2 > 0) trigger.buffNums = num2;
					if (num > 0) {
						const lose = limit.slice(0, num);
						limit.removeArray(lose);
						player.removeMark(add[0 + (i === add[0])], num);
					}
				}
			} else if (name == 'addBleachBuffEnd') {
				for (var i in buffs) {
					if (!add.includes(i)) continue;
					let count = buffs[i];
					while (count-- > 0) {
						list[0 + (i === add[1])].push(trigger.buffNums || 10);
					}
				}
			} else {
				for (var i of add) {
					const down = list[0 + (i === 'bleachMark_down')];
					if (down.length != player.countMark(i)) {
						const lose = down.slice(0, Math.abs(player.countMark(i) - down.length));
						down.removeArray(lose);
					}
				}
			}
		},
	};
	lib.translate._bleachArena_ice = '冻伤';
	lib.skill._bleachArena_ice = {
		trigger: {
			player: ['damageEnd', 'addBleachBuffAfter'],
		},
		popup: false,
		filter(event, player) {
			if (event.name == 'addBleachBuff') return 'bleachMark_ice' in event.buff;
			return event.hasNature('bleach_ice') || (event.hasNature('fire') && player.hasMark('bleachMark_ice'));
		},
		_priority: Infinity,
		forced: true,
		content() {
			'step 0';
			if (trigger.name != 'addBleachBuff') {
				player.popup('冻伤');
				player[`${trigger.hasNature('bleach_ice') ? 'add' : 'remove'}BleachBuff`]('bleachMark_ice', 1, trigger.source || null);
			}
			('step 1');
			lib.skill.bleachMark_ice.addIce(player);
		},
		mod: {
			globalTo(from, to, current) {
				if (to.hasMark('bleachEffect_ice')) return current - Infinity;
				return current - to.countMark('bleachMark_ice');
			},
		},
	};
	lib.translate._bleachArena_weak = '虚弱';
	lib.skill._bleachArena_weak = {
		trigger: {
			player: 'damageBegin3',
			source: 'damageBegin2',
			global: 'phaseEnd',
		},
		forced: true,
		_priority: Infinity,
		popup: false,
		filter(event, player, name) {
			return player.hasMark('bleachMark_weak');
		},
		content() {
			player.popup('虚弱', 'thunder');
			player.removeBleachBuff('bleachMark_weak', 1);
			if (trigger.name == 'damage') event.triggername == 'damageBegin3' ? trigger.num++ : trigger.num--;
		},
	};
	lib.translate._bleachArena_fire = '烧伤';
	lib.skill._bleachArena_fire = {
		trigger: {
			global: 'phaseAfter',
		},
		forced: true,
		_priority: Infinity,
		popup: false,
		filter(event, player) {
			if (player.hasSkillTag('zanjitsu_gokui')) return false;
			return player.hasMark('bleachMark_fire');
		},
		content() {
			'step 0';
			player.popup('烧伤', 'fire');
			player.removeBleachBuff('bleachMark_fire');
			('step 1');
			let damage = true;
			if (player.countCards('he') > 0) {
				const card = player.getCards('he').randomGet();
				player.discard(card);
				if (get.color(card) != 'red') damage = false;
			}
			if (damage) player.damage('fire', 'nocard', 'nosource');
		},
	};
	lib.translate._bleachArena_shield = '护盾';
	lib.skill._bleachArena_shield = {
		trigger: {
			player: 'damageBegin3',
			source: 'damageBegin1',
		},
		filter(event, player, name) {
			return (name == 'damageBegin1' && !event.player.hasSkillTag('bleachNoShield') && event.player.countMark('bleachMark_shield') > 0) || (!event.source && player.countMark('bleachMark_shield') > 0);
		},
		_priority: Infinity,
		forced: true,
		popup: false,
		content() {
			'step 0';
			var playerx = event.triggername == 'damageBegin1' ? trigger.player : player;
			playerx.popup('护盾', 'gray');
			var num = Math.min(trigger.num, playerx.countMark('bleachMark_shield'));
			if (
				trigger.nature != 'bleach_break' &&
				(!trigger.source ||
					(trigger.source &&
						!trigger.source.hasSkillTag('bleachGuardBreak', false, {
							name: trigger.card ? trigger.card.name : null,
							target: playerx,
							card: trigger.card,
						})))
			) {
				trigger.num -= num;
				game.log(playerx, '的护盾抵挡了', get.cnNumber(num), '点伤害');
			} else {
				trigger.source.popup('破防', 'orange');
				game.log(trigger.source, '击破了', playerx, '的护盾.');
			}
			playerx.removeBleachBuff('bleachMark_shield', num);
		},
		mod: {
			maxHandcard(player, num) {
				if (player.hasMark('bleachMark_shield')) return num + 1;
			},
		},
		ai: {
			effect: {
				target(card, player, target, current) {
					if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
					if (
						player.hasSkillTag('bleachGuardBreak', false, {
							name: card ? card.name : null,
							target: target,
							card: card,
						})
					)
						return [1, -2];
					let ts = target.countMark('bleachMark_shield') + target.hp;
					if (ts >= 4 && target.hp >= 3) return [1, 0.95];
				},
			},
		},
	};
	lib.skill._bleachArena_guardbreak = {
		trigger: {
			player: 'damageBefore',
		},
		forced: true,
		_priority: Infinity,
		popup: false,
		filter(event, player) {
			return event.hasNature('bleach_break');
		},
		content() {
			player.addTempSkill('bleach_off_unequip', ['useCardAfter', 'changeHp']);
		},
	};
	lib.translate._bleachArena_du = '中毒';
	lib.skill._bleachArena_du = {
		trigger: {
			player: ['loseAfter', 'recoverAfter'],
			global: 'loseAsyncAfter',
		},
		forced: true,
		_priority: Infinity,
		popup: false,
		filter(event, player) {
			if (!player.hasMark('bleachMark_du')) return false;
			if (event.name == 'recover') return true;
			if (!event.visible) return false;
			const evt = event.getl(player);
			return evt?.cards2?.some((card) => card.suit == 'spade');
		},
		content() {
			'step 0';
			player.removeBleachBuff('bleachMark_du');
			('step 1');
			if (trigger.name != 'recover') {
				player.popup('中毒', 'thunder');
				player.loseHp();
			}
		},
	};
	lib.translate._bleachArena_lieshang = '裂伤';
	lib.skill._bleachArena_lieshang = {
		trigger: {
			player: ['phaseEnd', 'useCard'],
		},
		forced: true,
		_priority: Infinity,
		popup: false,
		filter(event, player) {
			return player.hasMark('bleachMark_lieshang') && (event.name != 'useCard' || get.tag(event.card, 'damage'));
		},
		content() {
			'step 0';
			player.removeBleachBuff('bleachMark_lieshang');
			('step 1');
			if (trigger.name == 'useCard') {
				player.popup('裂伤', 'fire');
				player.loseHp();
			}
		},
		ai: {
			effect: {
				player(card, player, target) {
					if (player.countMark('bleachMark_lieshang') <= 0) return;
					if (!card) return;
					if (get.tag(card, 'damage')) {
						let hp =
							player.hp +
							player.countCards('h', (cardx) => {
								if (!get.tag(cardx, 'recover') || !player.canUse(cardx, player)) return 0;
								if (cardx.name == 'jiu' && player.hp > 1) return 0;
								return 1;
							}),
							num = player.hasSkillTag('maihp') ? 0.5 : 1;
						if (hp >= 4) return [1, -num * 0.5];
						if (hp <= 2) return [1, -num * 2];
						return [1, -num];
					}
				},
			},
		},
	};
	lib.translate._bleachArena_zhongshang = '重伤';
	lib.skill._bleachArena_zhongshang = {
		trigger: {
			player: 'recoverBegin',
		},
		forced: true,
		_priority: Infinity,
		popup: false,
		filter(event, player) {
			return player.hasMark('bleachMark_zhongshang');
		},
		content() {
			'step 0';
			player.popup('重伤', 'metal');
			event.num = Math.min(trigger.num, player.countMark('bleachMark_zhongshang'));
			('step 1');
			player.removeBleachBuff('bleachMark_zhongshang', event.num);
			trigger.num -= event.num;
			game.log(player, '因', '#g【重伤】', '使回复值降低至', trigger.num, ',共减少', event.num, '点回复值');
		},
	};
	lib.translate._bleachArena_leizhe = '雷蛰';
	lib.skill._bleachArena_leizhe = {
		trigger: {
			player: ['damageEnd', 'damageBegin3'],
		},
		popup: false,
		filter(event, player, name) {
			if (name == 'damageBegin3') return player.countMark('bleachMark_leizhe') > 2;
			return event.hasNature('thunder') && player.countMark('bleachMark_leizhe') < 3;
		},
		_priority: Infinity,
		forced: true,
		content() {
			if (event.triggername == 'damageEnd') {
				player.addBleachBuff('bleachMark_leizhe', Math.min(trigger.num, 3 - player.countMark('bleachMark_leizhe')), trigger.source || null);
			} else {
				player.popup('雷蛰', 'metal');
				player.clearMark('bleachMark_leizhe');
				trigger.num++;
			}
		},
	};
	lib.translate._bleachArena_huofen = '火焚';
	lib.skill._bleachArena_huofen = {
		trigger: {
			player: ['damageEnd', 'addBleachBuffBegin1'],
		},
		popup: false,
		filter(event, player, name) {
			if (event.name == 'addBleachBuff') return 'bleachMark_fire' in event.buff && player.hasMark('bleachMark_huofen');
			if (event.hasNature('bleach_ice')) return player.hasMark('bleachMark_huofen');
			return event.hasNature('fire') && player.countMark('bleachMark_huofen') < 4;
		},
		_priority: Infinity,
		forced: true,
		content() {
			'step 0';
			if (trigger.name == 'damage') player[`${trigger.hasNature('fire') ? 'add' : 'remove'}BleachBuff`]('bleachMark_huofen', Math.min(trigger.num, 4 - player.countMark('bleachMark_leizhe')), trigger.source || null);
			else {
				const num = player.countMark('bleachMark_huofen');
				player.removeMark('bleachMark_huofen', num, false);
				for (var i in trigger.buff) {
					if (i == 'bleachMark_fire') trigger.buff[i] += Math.floor(num / 2);
				}
				game.log(player, '的', '#y火焚', '已被点燃');
			}
			('step 1');
			if (player.countMark('bleachMark_huofen') == 4) {
				player.popup('火焚', 'fire');
				player.clearMark('bleachMark_huofen');
				player.addMark('bleachMark_fire', 2, false);
				game.log(player, '因', '#y火焚', '获得2层', '#r烧伤');
			}
		},
	};
	lib.skill._bleachArena_qinshiRecover = {
		trigger: {
			source: 'addBleachBuffAfter',
		},
		forced: true,
		_priority: Infinity,
		popup: false,
		filter(event, player) {
			return 'bleachEffect_qinshi' in event.buff && player.isDamaged();
		},
		content() {
			trigger.player.popup('侵食', 'gray');
			player.recover();
		},
	};
	lib.abnormal = ['bleachEffect_hunluan', 'bleachEffect_ice', 'bleachEffect_mabi', 'bleachEffect_qinshi', 'bleachMark_down', 'bleachMark_fire', 'bleachMark_du', 'bleachMark_ice', 'bleachMark_leizhe', 'bleachMark_lieshang', 'bleachMark_weak', 'bleachMark_zhongshang', 'bleachMark_huofen'];
	lib.element.player.hasDanku = function () {
		if (this.countCards('hs', 'bleach_danku')) return true;
		var skills = this.getSkills('invisible').concat(lib.skill.global);
		game.expandSkills(skills);
		for (var i = 0; i < skills.length; i++) {
			var ifo = get.info(skills[i]);
			if (ifo.viewAs && typeof ifo.viewAs != 'function' && ifo.viewAs.name == 'bleach_danku') {
				if (!ifo.viewAsFilter || ifo.viewAsFilter(this)) {
					return true;
				}
			} else {
				var hiddenCard = ifo.hiddenCard;
				if (typeof hiddenCard == 'function' && hiddenCard(this, 'bleach_danku')) {
					return true;
				}
			}
		}
		return false;
	};
	lib.skill._bleachDanku = {
		trigger: { player: 'useCardToBegin' },
		_priority: 5,
		popup: false,
		forced: true,
		filter(event, player) {
			if (event.card.storage && event.card.storage.nowuxie) return false;
			var card = event.card;
			var info = get.info(card);
			if (info.wuxieable === false) return false;
			if (event.parent.nowuxie) return false;
			if (!event.target) {
				if (info.wuxieable) return true;
				return false;
			}
			if (event.player.hasSkillTag('playernowuxie', false, event.card)) return false;
			if (!info.wuxieable && get.type(event.card) != 'bleach_kido') return false;
			return true;
		},
		forceLoad: true,
		content() {
			'step 0';
			delete event.wuxieresult;
			delete event.wuxieresult2;
			var map = {};
			event._info_map = map;
			var card = trigger.card;
			map.player = trigger.player;
			if (trigger.multitarget) map.multitargets = true;
			map.target = trigger.target;
			map.targets = trigger.targets;
			map.tempnowuxie = trigger.targets && trigger.targets.length > 1 && !trigger.multitarget;
			map.noai = Boolean(trigger.parent.noai);
			map.card = card;
			map.id2 = trigger.parent.id;
			event._global_waiting = true;
			event.send = function (player, map, skillState) {
				if (skillState) {
					player.applySkills(skillState);
				}
				var prompt = '',
					evtmap = map;
				if (map._source) evtmap = map._source;
				prompt += get.translation(evtmap.player);
				if (evtmap.multitarget) {
					if (evtmap.targets.length) {
						prompt += '对';
						prompt += get.translation(evtmap.targets);
					}
				} else if (evtmap.target) {
					prompt += '对';
					prompt += evtmap.target == evtmap.player ? '自己' : get.translation(evtmap.target);
				}
				prompt += '使用的' + get.translation(evtmap.card) + '即将生效.';
				prompt += '是否使用【断空】？';
				if (player.isUnderControl(true) && !_status.auto && !ui.tempnowuxie && map.tempnowuxie) {
					var translation = get.translation(map.card.name);
					if (translation.length >= 4) {
						translation = lib.translate[map.card.name + '_ab'] || translation.slice(0, 2);
					}
					ui.tempnowuxie = ui.create.control('不断空' + translation, ui.click.tempnowuxie, 'stayleft');
					ui.tempnowuxie._origin = map.id2;
				}
				var next = player.chooseToUse({
					filterCard(card, player) {
						if (card.name != 'bleach_danku') return false;
						return lib.filter.cardEnabled(card, player, 'forceEnable');
					},
					prompt: prompt,
					type: 'wuxie',
					_global_waiting: true,
					ai1() {
						if (evtmap.target) {
							var triggerevent = _status.event.getTrigger();
							if (triggerevent && triggerevent.parent && triggerevent.parent.postAi && triggerevent.player.isUnknown(_status.event.player)) {
								return 0;
							}
							var card = evtmap.card,
								target = evtmap.target,
								source = evtmap.player;
							var info = get.info(card);
							if (info.ai && info.ai.wuxie) {
								var aiii = info.ai.wuxie(target, card, source, _status.event.player);
								if (typeof aiii == 'number') return aiii;
							}
							if (info.multitarget && targets) {
								var eff = 0;
								for (var i = 0; i < targets.length; i++) {
									eff += get.effect(targets[i], card, source, _status.event.player);
								}
								return -eff;
							}
							if (Math.abs(get.attitude(_status.event.player, target)) < 3) return 0;
							return -get.effect(target, card, source, _status.event.player);
						} else {
							var triggerevent = _status.event.getTrigger();
							if (triggerevent && triggerevent.parent && triggerevent.parent.postAi && triggerevent.player.isUnknown(_status.event.player)) {
								return 0;
							}
							var card = evtmap.card,
								source = evtmap.player;
							var info = get.info(card);
							if (info.ai && info.ai.wuxie) {
								var aiii = info.ai.wuxie(target, card, source, _status.event.player);
								if (typeof aiii == 'number') return aiii;
							}
							if (Math.abs(get.attitude(_status.event.player, source)) < 3) return 0;
							return -get.attitude(_status.event.player, source);
						}
					},
					source: evtmap.target,
					source2: evtmap.targets,
					id: map.id,
					id2: map.id2,
					info_map: map,
				});
				if (map.card && map.player) next.respondTo = [map.player, map.card];
				if (game.online) {
					_status.event._resultid = map.id;
					game.resume();
				} else {
					next.nouse = true;
				}
			};
			('step 1');
			var map = event._info_map;
			var list = game.filterPlayer(function (current) {
				if (trigger.parent.directHit.includes(current)) return false;
				if (game.checkMod(map.card, map.player, map.target, current, 'unchanged', 'wuxieEnabled', current) == false) return false;
				if (game.checkMod(map.card, map.player, map.target, current, 'unchanged', 'wuxieRespondable', map.player) == false) return false;
				return current.hasDanku(map);
			});
			event.list = list;
			event.id = get.id();
			map.id = event.id;
			list.sortBySeat(_status.currentPhase);
			('step 2');
			if (event.list.length == 0) {
				event.finish();
			} else if (_status.connectMode && (event.list[0].isOnline() || event.list[0] == game.me)) {
				event.goto(4);
			} else {
				event.current = event.list.shift();
				event.send(event.current, event._info_map);
			}
			('step 3');
			if (result.bool) {
				event.wuxieresult = event.current;
				event.wuxieresult2 = result;
				event.goto(8);
			} else {
				event.goto(2);
			}
			('step 4');
			var id = event.id;
			var sendback = function (result, player) {
				if (result && result.id == id && !event.wuxieresult && result.bool) {
					event.wuxieresult = player;
					event.wuxieresult2 = result;
					game.broadcast('cancel', id);
					return function () {
						if (_status.event.id == id && _status.event.name == 'chooseToUse' && _status.paused) event.resultOL = _status.event.resultOL;
						if (_status.event._parent_id == id) {
							ui.click.cancel();
						}
						if (_status.event.id == id) {
							if (_status.event._backup) ui.click.cancel();
							ui.click.cancel();
							if (ui.confirm) {
								ui.confirm.close();
							}
							if (_status.event.result) {
								_status.event.result.id = id;
							}
						}
					};
				} else {
					if (_status.event.id == id && _status.event.name == 'chooseToUse' && _status.paused) {
						return function () {
							event.resultOL = _status.event.resultOL;
						};
					}
				}
			};
			var withme = false;
			var withol = false;
			var list = event.list;
			for (var i = 0; i < list.length; i++) {
				if (list[i].isOnline()) {
					withol = true;
					list[i].wait(sendback);
					list[i].send(event.send, list[i], event._info_map, get.skillState(list[i]));
					list.splice(i--, 1);
				} else if (list[i] == game.me) {
					withme = true;
					event.send(list[i], event._info_map);
					list.splice(i--, 1);
				}
			}
			if (!withme) {
				event.goto(6);
			}
			if (_status.connectMode) {
				if (withme || withol) {
					for (var i of game.players) {
						i.showTimer();
					}
				}
			}
			event.withol = withol;
			('step 5');
			if (result && result.bool && !event.wuxieresult) {
				game.broadcast('cancel', event.id);
				event.wuxieresult = game.me;
				event.wuxieresult2 = result;
			}
			('step 6');
			if (event.withol && !event.resultOL) {
				game.pause();
			}
			('step 7');
			for (var i of game.players) {
				i.hideTimer();
			}
			('step 8');
			if (event.wuxieresult2 && event.wuxieresult2._sendskill) lib.skill[event.wuxieresult2._sendskill[0]] = event.wuxieresult2._sendskill[1];
			if (event.wuxieresult && event.wuxieresult2 && event.wuxieresult2.skill) {
				var info = get.info(event.wuxieresult2.skill);
				if (info && info.precontent && !game.online) {
					var next = game.createEvent('pre_' + event.wuxieresult2);
					next.setContent(info.precontent);
					next.set('result', event.wuxieresult2);
					next.set('player', event.wuxieresult);
				}
			}
			('step 9');
			if (event.wuxieresult) {
				var next = event.wuxieresult.useResult(event.wuxieresult2);
				next.respondTo = [trigger.player, trigger.card];
			}
		},
	};
	lib.bleach_kido = ['bleach_sai', 'bleach_rikujokoro', 'bleach_danku', 'bleach_fushibi', 'bleach_shakkaho'];
	lib.silverSoul = ['tuidilichang', 'duoluoshengdun', 'lingqiao', 'dali', 'soulziyu', 'yisun', 'huixinfangshou', 'taifeng', 'tianyinbao', 'zengyixiongdi', 'zhiyeshashou', 'equwei', 'huolihuanfa', 'soulbaoshi', 'soulqinshi', 'soulbingfeng', 'youling', 'lingyabaofa', 'binghan', 'dianliangtamen', 'reshendongzuo', 'haiyanglonghun', 'xueqiaozhanshu', 'caijueshi', 'mingdaosiming', 'qiangyuzhihu', 'jingjiyi', 'zhuanshenti', 'tuisheng', 'liziqiu', 'xiangsiersheng', 'wuxiuhuifu', 'soulshouhu', 'soulwanmei', 'jiankang', 'huiwan', 'jinghuashuiyue', 'chaoyuesiwang', 'kexue', 'fuchoutianshi', 'weikuaibupo', 'soulsiyi', 'xieduzhe', 'fushiji', 'xuriren', 'faze', 'jiuzhulingren', 'naijiu', 'lianyulonghun', 'shunshen', 'shizuizhe', 'zhongjishou', 'shanmailonghun', 'zhipaimoshu', 'ziwohuimie', 'shoumingyutian', 'lianjinlonghun', 'jifenglonghun', 'fuchouzhexunzhang'];
	lib.goldenSoul = ['bengyuyizhi', 'gushijialiang', 'moguizhiwu', 'xiangong', 'linghunranshao', 'wangdezhizi', 'soulkuwei', 'jurendeyoubi', 'emodezuobi', 'huoshangjiaoyou', 'shengdongjixi', 'souljianren', 'linghunhongxi', 'guanjianhuixin', 'roubaodan', 'soulfuchou', 'ziwogongku', 'haoling', 'soulcanren', 'chaofanxiee', 'chaoyuezhe', 'soulxisheng', 'chilieliming', 'jianjue', 'tianfa', 'wangjian', 'chaozhongliwang', 'jingjier', 'yonggandelinghun', 'chongfenghao', 'shouhutianshi', 'soulgongshoujianbei', 'jianduanfamingjia', 'shushangkaihua', 'shenshengzhijian', 'yigongdaishou', 'shenghuo', 'toujizhe', 'jieerliansan', 'huixinzhiliao', 'chuanzhenyinxian', 'mofafeidan', 'shenshefashi', 'xingyedoupeng', 'anganglizhua', 'shandiandaji', 'heiyueshengqi', 'jishengguanxi', 'huoliquankai', 'siwangzhiren', 'jujishou', 'pojing', 'duanjinzhe', 'quanxinweini', 'shijieliefeng', 'siwangchumo', 'heranliaobang', 'shuruiyadezhange', 'bingdonghudun', 'shengqishihudun', 'heiyaoshihudun', 'yingxionghudun', 'haikesilonghun', 'xueqinxiongdi'];
	lib.cyanSoul = ['huangliang', 'shengjizhanfang', 'burucandao', 'ganshouranshao', 'fashusuxing', 'lingwangdeyoushou', 'mandun', 'soulqiji', 'zhipeizhemianju', 'ganjueburujiequan', 'chaoyueciyuan', 'zhuguanghushou', 'yongqi', 'weizhideshouduan', 'duankaishengyi', 'lingyaniansuijike', 'quannenglonghun', 'niqujidianleba', 'huhuanjunzhiming', 'jingjisan', 'soulganlu', 'jisubeizhan', 'zhongzhuangshangzhen', 'iamtheedge', 'kuangwang', 'qiezeishoutao', 'liansuoshandian', 'taowa', 'fengbaokuangyong', 'yibingshizhe', 'moriyuyanzhe', 'jianruopanshi', 'soulfentian', 'linghunjiban', 'rongshizhidun', 'tiandihuijin', 'beishuiyizhan', 'tianyaruobilin', 'lianhedikang', 'souljuejing', 'bawangxuejia', 'fangshouyibo', 'mowangzhimian', 'longxin', 'shangzhili', 'feishenghufu', 'yuehuazhouren', 'canriyuyi'];
	lib.legendarySoul = ['yajiapopo', 'jiuchuwodesuoai', 'wanjiebufu', 'zhaohuilingxianwang'];
	game.playBleach = function (fn, dir, sex) {
		if (typeof fn == 'string') {
			const audio = fn.split(':');
			if (fn.startsWith('bgm:')) game.playAudio('../extension/BLEACH/bgm', `${audio[1]}.${audio[2] || 'mp3'}`);
			if (lib.config.background_speak) {
				if (dir && sex) game.playAudio(dir, sex, fn);
				else if (dir) game.playAudio(dir, fn);
				else game.playAudio('../extension/BLEACH/skill', `${audio[0]}.${audio[1] || 'mp3'}`);
			}
		}
		game.broadcast(
			function (fn, dir, sex) {
				game.playBleach(fn, dir, sex);
			},
			fn,
			dir,
			sex
		);
	};
	game.playShiKai = function (fn, dir, sex) {
		if (typeof fn == 'string') {
			const audio = fn.split(':');
			if (lib.config.background_speak) {
				if (dir && sex) game.playAudio(dir, sex, fn);
				else if (dir) game.playAudio(dir, fn);
				else game.playAudio('../extension/BLEACH/files/shikai', `${audio[0]}.${audio[1] || 'mp3'}`);
			}
		}
		game.broadcast(
			function (fn, dir, sex) {
				game.playShiKai(fn, dir, sex);
			},
			fn,
			dir,
			sex
		);
	};
	game.switchBleachBgm = function (name) {
		if (name && typeof name == 'string') {
			const audio = name.split(':');
			var path = 'extension/BLEACH/bgm/' + `${audio[0]}.${audio[1] || 'mp3'}`;
			ui.backgroundMusic.src = path;
			ui.backgroundMusic.addEventListener('ended', game.playBackgroundMusic);
		}
		game.broadcast(function (name) {
			game.switchBleachBgm(name);
		}, name);
	};
	lib.skill._bleachbgm_appear = {
		trigger: {
			global: 'gameDrawAfter',
		},
		forced: true,
		nobracket: true,
		_priority: 2,
		charlotte: true,
		filter(event, player) {
			if (player != game.me) return false;
			if (!_status.bgmStart) _status.bgmStart = [];
			if (game.countPlayer((current) => current.bleachIs(['burnthewitch_nini', 'burnthewitch_xinqiao', 'burnthewitch_bruno'])) >= 2) {
				_status.bgmStart.addArray(['OrdinaryDay', 'WorkingTime']);
			}
			if (game.hasPlayer((target) => target.bleachIs(['burnthewitch_nini'])) && game.hasPlayer((target) => target.bleachIs(['burnthewitch_xinqiao']))) {
				_status.bgmStart.addArray(['Blowing', 'Prove']);
			}
			if (game.countPlayer((current) => current.group == 'bleach_wu') >= Math.floor(game.players.length / 2) && game.players.length >= 4) {
				_status.bgmStart.add('Wandenreich');
			}
			if (game.hasPlayer((target) => target.bleachIs(['bleach_5th_heiqiyihu'])) && game.hasPlayer((target) => target.bleachIs(['bleach_5th_xiumubaizai']))) {
				_status.bgmStart.addArray(['Arousal_5thAnni', 'Never_5thAnni']);
			}
			if (game.hasPlayer((target) => target.bleachIs(['bleach_7th_heiqiyihu'])) && game.hasPlayer((target) => target.bleachIs(['bleach_7th_shitianyulong']))) {
				_status.bgmStart.add('ResoudingPride');
			}
			if (game.hasPlayer((target) => target.bleachIs(['bleach_2022_chad'])) && game.hasPlayer((target) => target.bleachIs(['bleach_2022_shitianyulong']))) {
				_status.bgmStart.add('NumberOne_Bankai');
			}
			if (game.countPlayer((current) => current.isKamen()) >= Math.floor(game.players.length / 2) && game.players.length >= 4) {
				_status.bgmStart.add('Escalon');
			}
			if (_status.bgmStart.length == 0) {
				delete _status.bgmStart;
			}
			return _status.bgmStart || (game.hasPlayer((target) => target.bleachIs('bleach_heiqiyihu')) && game.hasPlayer((target) => target.bleachIs('bleach_baiyihu')));
		},
		content() {
			if (_status.bgmStart) {
				const bgm = _status.bgmStart.randomGet();
				if (['OrdinaryDay', 'WorkingTime', 'Blowing', 'Prove'].includes(bgm)) {
					let background = ['burnthewitch_city', 'burnthewitch_bridge', 'burnthewitch_night', 'burnthewitch_loong', 'burnthewitch_fairytale', 'burnthewitch_keepout'].randomGet();
					if (bgm == 'Blowing' || bgm == 'Prove') background = ['burnthewitch', 'burnthewitch0.8'].randomGet();
					game.switchBleachBackground(background);
				}
				game.switchBleachBgm(bgm);
				delete _status.bgmStart;
			}
			if (game.hasPlayer((current) => current.bleachIs('bleach_heiqiyihu')) && game.hasPlayer((current) => current.bleachIs('bleach_baiyihu'))) {
				const ichigo = game.findPlayer((current) => current.bleachIs(['bleach_heiqiyihu'])),
					current = game.findPlayer((current) => current.bleachIs(['bleach_baiyihu']));
				ichigo.bleachAwaken('bleach_heiqiyihu', 4);
				ichigo.addSkill('bleach_bankai_monitor');
				game.switchBleachBackground('Innerworld');
				current.chat('好久不见了,王!');
				setTimeout(() => {
					current.chat('怎么了 一副愁眉苦脸的样子');
				}, 2500);
				setTimeout(() => {
					ichigo.chat('斩月大叔...在哪里？');
					setTimeout(() => {
						current.chat('你问我斩月在哪里是吧,我来告诉你好了!我就是...斩月!');
					}, 2500);
				}, 3000);
			}
		},
	};
	lib.skill._bleach_roydDie = {
		trigger: {
			player: 'dieBefore',
		},
		charlotte: true,
		forced: true,
		_priority: 25,
		filter(event, player) {
			return player.bleachIs(['bleach_royd']);
		},
		content() {
			player.chat('力...力所不及吗...');
			setTimeout(() => {
				player.chat('非常抱歉...我没能完成你所交付的使命...');
			}, 4000);
			setTimeout(() => {
				player.chat('友哈巴赫大人...');
				player.bleachAwaken('bleach_royd', 1);
			}, 8000);
		},
	};
	game.switchBleachBackground = function (name) {
		if (name) {
			ui.background.setBackgroundImage('extension/BLEACH/files/background/' + name + '.jpg');
			ui.background.style.backgroundSize = 'cover';
			ui.background.style.backgroundPosition = '50% 50%';
		}
		game.broadcast((name) => {
			game.switchBleachBackground(name);
		}, name);
	};
	game.mp417 = async function (Q) {
		return new Promise((resolve) => {
			const video = document.createElement('video');
			video.src = `extension/BLEACH/mp4/${Q}.mp4`;
			video.style.cssText = 'z-index: 999; height: 100%; width: 100%; position: fixed; object-fit: cover; left: 0; right: 0; pointer-events: none;';
			video.autoplay = true;
			video.loop = false;
			const backButton = document.createElement('div');
			backButton.innerHTML = '返回游戏'; //文字内容
			backButton.style.cssText = 'z-index: 999; position: absolute; bottom: 10px; right: 10px; color: red; font-size: 16px; padding: 5px 10px; background: rgba(0, 0, 0, 0.3);';
			backButton.onclick = function () {
				backButton.remove();
				video.remove();
				resolve();
			}; //设置返回按钮的点击事件
			document.body.appendChild(video);
			document.body.appendChild(backButton);
			video.addEventListener('error', function () {
				backButton.remove();
				video.remove();
				resolve();
			});
			video.addEventListener('ended', function () {
				backButton.remove();
				video.remove();
				resolve();
			});
		});
	}; //播放mp4
	let url = 'extension/BLEACH';
	lib.init.css(url, 'extension');
	window.bleachIntroduceBuff = function (buffname) {
		let title = '状态介绍:' + get.translation(buffname);
		let content = '';
		if (get.bleachBuffIsPositive(buffname)) {
			content = content + '增益效果 ';
		} else {
			content = content + '异常效果 ';
		}
		if (get.bleachBuffCanAdd(buffname)) {
			content = content + '可叠加';
		} else {
			content = content + '不可叠加';
		}
		content = content + '<br><br>';
		content += get.translation(buffname + '_info');
		let imageUrl = buffname.replace('bleach_mark_', '');
		imageUrl = imageUrl.replace('bleach_effect_', '');
		imageUrl = 'extension/BLEACH/abnormal/' + imageUrl + '.jpg';
		window.bleachOpenDialog(title, imageUrl, content);
	};
	let introduce = {
		bleachIce: {
			name: '冰冻属性',
			info: '受到本属性伤害的角色获得1层冻伤.',
		},
		bleachThunder: {
			name: '雷蛰',
			info: '受到雷电伤害后获得等量层(至多为3),积满状态时受到伤害,消耗之令伤害值+1.',
		},
		damagekill: {
			name: '斩杀',
			info: '目标角色每损失两点体力值,此伤害值+1.',
		},
	};
	window.bleachIntroduce = function (name) {
		window.bleachOpenDialog('术语介绍:' + introduce[name].name, null, introduce[name].info);
	};
	window.bleachOpenDialog = function (title, icon, content) {
		if (!title) title = '';
		if (!content) content = '';
		if (!window.bleachCurrentDialogs) {
			window.bleachCurrentDialogs = [];
		}
		let dialog = ui.create.div('.bleach-dialog', document.body);
		window.bleachCurrentDialogs.push(dialog);
		let icondiv = ui.create.div('.bleach-dialog-icon', dialog);
		if (icon) {
			icondiv.setBackgroundImage(icon);
		} else {
			icondiv.hide();
		}
		let text = ui.create.div('.bleach-dialog-text', dialog);
		text.innerHTML = content;
		if (lib.config.touchscreen) {
			lib.setScroll(text);
		}
		let titlediv = ui.create.div('.bleach-dialog-title', dialog);
		titlediv.innerHTML = title;
		let close = ui.create.div('.bleach-dialog-close', dialog);
		close.addEventListener('click', function () {
			window.bleachCurrentDialogs.remove(dialog);
			dialog.delete();
		});
		return dialog;
	};
	window.bleachOpenLoading = function () {
		var dialog = ui.create.div('.bleach-loading', document.body);
		var text = ui.create.div('.bleach-loading-text', dialog);
		dialog.subViews = { text };
		return dialog;
	};
	window.bleachImport = function (func) {
		func(lib, game, ui, get, ai, _status);
	};
	if (lib.config.bleachSoulTreeSwitch || lib.config.bleachSoulTreeSwitch === undefined) {
		lib.skill._bleachSoulTreeChoose = {
			trigger: {
				global: 'phaseBefore',
				player: 'enterGame',
			},
			forced: true,
			_priority: 715,
			filter(event, player) {
				if (['versus', 'doudizhu'].includes(get.mode()) && lib.config.bleachSoulDuelSwitch) return false;
				return (event.name != 'phase' || game.phaseNumber == 0) && !_status.SoulTreeChoose;
			},
			content() {
				'step 0';
				_status.SoulTreeChoose = true;
				if (_status.connectMode) {
					event.targets = game.filterPlayer().sortBySeat();
					var list = event.targets.map((target) => {
						var list = ['Stamina', 'Attack', 'Defense', 'Focus', 'SpiriualPressure'].filter((i) => !target.hasSkill(`SoulTree_${i}`));
						return [target, ['选择一种 *灵魂本质*', [list, 'vcard']], true];
					});
					player
						.chooseButtonOL(list)
						.set('switchToAuto', () => {
							_status.event.result = 'ai';
						})
						.set('processAI', () => {
							var choice = Math.random() > 0.7 ? ['Attack', 'Defense', 'Focus'].randomGet() : ['Stamina', 'SpiriualPressure'].randomGet();
							var player = _status.event.player;
							if (player.getBleachSoulTrees() == 2) {
								var list = ['Stamina', 'SpiriualPressure', 'Attack', 'Defense', 'Focus'];
								list.remove(choice);
								choice2 = list.randomGet();
								return {
									bool: true,
									links: [
										['', '', choice],
										['', '', choice2],
									],
								};
							}
							return {
								bool: true,
								links: [['', '', choice]],
							};
						});
				} else {
					const list = ['Stamina', 'Attack', 'Defense', 'Focus', 'SpiriualPressure'].filter((i) => !game.me.hasSkill(`SoulTree_${i}`));
					game.me.chooseButton(['选择一种 *灵魂本质*', [list, 'vcard']], true).set('ai', (button) => {
						const player = get.player();
						if (button.link[2] == 'Stamina') {
							return 0.7 + Math.random();
						} else if (button.link[2] == 'Attack') {
							return 0.8 + Math.random();
						} else if (button.link[2] == 'Defens') {
							return 1.0 + Math.random();
						} else if (button.link[2] == 'Focus') {
							return 0.9 + Math.random();
						} else if (button.link[2] == 'SpiriualPressure') {
							return 0.9 + Math.random();
						}
					});
				}
				('step 1');
				if (_status.connectMode) {
					for (var i in result) {
						for (var j in result[i].links) {
							lib.playerOL[i].addSkill('SoulTree_' + result[i].links[j][2]);
						}
					}
				} else {
					game.me.addSkill('SoulTree_' + result.links[0][2]);
					game.countPlayer((current) => {
						var list = ['Stamina', 'Attack', 'Defense', 'Focus', 'SpiriualPressure'];
						for (var i = 0; i < list.length; i++) {
							list[i] = 'SoulTree_' + list[i];
						}
						if (current != game.me) {
							var skill = list.randomGet();
							list.remove(skill);
							current.addSkill(skill);
						}
					});
				}
			},
		};
	}
	if (lib.config.bleachSoulDuelSwitch || lib.config.bleachSoulDuelSwitch === undefined) {
		lib.skill._bleachSoulDuel = {
			trigger: {
				global: 'roundStart',
			},
			forced: true,
			_priority: 715,
			charlotte: true,
			filter(event, player) {
				if (get.mode() != 'versus' && get.mode() != 'doudizhu') return false;
				let evt = _status.event.getParent('phase');
				let hasGain = function (player) {
					if (game.roundNumber % 2 == 0 && !player.hasSkill('jisubeizhan')) return false;
					return _status.soul_skills[player.playerid] < 8;
				};
				return (!_status.soul_skills || game.players.some((i) => hasGain(i))) && !evt.gainSoul;
			},
			async content(event, trigger, player) {
				let evt = _status.event.getParent('phase');
				if (evt && !evt.gainSoul) evt.gainSoul = true;
				const souls = [];
				souls.addArray([lib.silverSoul, lib.goldenSoul, lib.cyanSoul].randomGet());
				if ([1, 5, 6, 14, 15].includes(game.roundNumber)) souls.addArray(lib.legendarySoul);
				const skills = souls.randomSort();
				if (!_status.soul_skills) {
					_status.soul_skills = {};
					game.players.forEach((i) => {
						i.storage.soul_update = 2;
						_status.soul_skills[i.playerid] = 0;
					});
				}
				let hasGain = function (player) {
					if (game.roundNumber % 2 == 0 && !player.hasSkill('jisubeizhan')) return false;
					return _status.soul_skills[player.playerid] < 8;
				};
				const players = game.players.filter((value) => hasGain(value) && (value.isOut() || value.isIn())).sortBySeat();
				for (let current of players) {
					if (current.awakenedSkills.includes('beishuiyizhan')) current.storage.soul_update += 2;
					const list = skills.slice(0),
						listx = [];
					for (var i of lib.legendarySoul) {
						if (game.players.concat(game.dead).some((i) => i.hasSkill(i))) listx.push(i);
					}
					for (var i of list) {
						if ((i == 'jingjier' && !current.hasSkill('jingjiyi')) || (i == 'jingjisan' && !current.hasSkill('jingjier'))) listx.push(i);
						if (current.hasSkill(i, null, false, false) || current.awakenedSkills.includes(i)) listx.push(i);
					}
					if (current.isUnseen(0) || current.isUnseen(1)) {
						listx.addArray(lib.legendarySoul);
					}
					if (!current.hasFriend()) {
						listx.addArray(['tianyinbao', 'fuchoutianshi', 'liziqiu', 'shizuizhe', 'roubaodan', 'shengdongjixi', 'haoling', 'soulxisheng', 'chilieliming', 'jishengguanxi', 'quanxinweini', 'linghunjiban', 'lianhedikang', 'tianyaruobilin']);
					}
					const skills1 = current.getSkills(null, false, false),
						skills2 = current.getStockSkills(true, true);
					if (!skills1.some((i) => get.info(i) && get.info(i).abnormal)) {
						listx.addArray(['equwei', 'heranliaobang', 'yongqi', 'shangzhili']);
					}
					if (
						!skills1.some((i) => {
							const info = lib.skill[i];
							return info && info.juexingji && !current.awakenedSkills.includes(i);
						})
					) {
						listx.push('zhuanshenti');
					}
					if (
						!skills2.some((i) => {
							if (current.hasSkill(i)) return false;
							const info = get.info(i);
							return info && info.zhuSkill;
						})
					) {
						listx.push('shoumingyutian');
					}
					const names = ['bleach_fuzhu', 'bleach_bocun', 'bleach_sazayelaporro'],
						spSkills = ['lingwangdeyoushou', 'duankaishengyi', 'xueqinxiongdi'];
					for (let name of names) {
						if (!get.nameList(current).includes(name)) {
							const num = names.indexOf(name);
							listx.push(spSkills[num]);
						}
					}
					list.removeArray(listx);
					let func = function (list, num, id) {
						let dialog = ui.create.dialog('选择获得一个灵魂' + (num > 0 ? '(可刷新' + get.translation(num) + '次)' : ''), 'forcebutton');
						for (var i = 0; i < list.length; i++) {
							dialog.add('<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(list[i]) + '】</div>&nbsp;&nbsp;&nbsp;<div>' + lib.translate[list[i] + '_info'] + '</div></div>');
						}
					};
					while (true) {
						const chosen = list.randomGets(3),
							count = current.storage.soul_update;
						if (current == game.me) event.dialog = func(chosen, count, event.videoId);
						else if (current.isOnline()) current.send(func, chosen, count, event.videoId);
						if (count > 0) chosen.push('刷新');
						const { control } = await current
							.chooseControl(chosen)
							.set('includeOut', true)
							.set('ai', () => {
								const list = get.event('controls').slice(0);
								list.removeArray(['zhipeizhemianju']);
								return list.sort((a, b) => {
									return get.skillRank(b, 'in') - get.skillRank(a, 'in');
								})[0];
							}).forResult();
						game.broadcastAll('closeDialog', event.videoId);
						if (control == '刷新') {
							current.storage.soul_update--;
							list.remove(chosen.filter((i) => i != '刷新').randomGet());
						} else {
							if (['jingjier', 'jingjisan'].includes(control)) {
								switch (control) {
									case 'jingjier':
										current.removeSkill('jingjiyi');
										break;
									case 'jingjisan':
										current.removeSkill('jingjier');
										break;
								}
							} else {
								_status.soul_skills[current.playerid]++;
							}
							current.addSkillLog(control);
							break;
						}
					}
				}
				event.trigger('gainSoulEnd');
			},
		};
		lib.skill._bleachSoulDuel_kill = {
			trigger: {
				source: 'dieAfter',
			},
			silent: true,
			_priority: 715,
			charlotte: true,
			filter(event, player) {
				return get.mode() == 'versus' && player.storage.soul_update && event.player.isEnemiesOf(player);
			},
			content() {
				player.storage.soul_update++;
			},
		};
	}
}

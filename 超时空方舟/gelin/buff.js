export function initBuff(lib, game, ui, get, ai, _status) {
	//将技能转变为BUFF
	game.gl_loadBuff = function (skill, name) {
		if (typeof skill != 'object') return;
		if (!name) {
			for (var i in skill) {
				game.gl_loadBuff(skill[i], i);
			}
		} else {
			//没有BUFF信息的BUFF，只能使用预设信息处理一下了
			if (!skill.buffInfo) {
				skill.buffInfo = {
					name: lib.translate[name] || name,
					max: 1,
					recover: true,
					content: lib.translate[name + '_info'] || '',
				};
			}
			var info = skill.buffInfo;
			var str = '<li>持续时效：<span class="firetext">';
			if (info.recover === false) {
				str += '永久';
			} else if (info.recover === true) {
				str += '短效';
			} else {
				str += '长效';
			}
			if (info.loss) str += '（触发损耗）';
			str += '</span></br> <li>叠加层数：<span class="firetext">';
			if (info.max > 1) {
				str += '#/' + info.max;
			} else {
				str += '不可叠加';
			}
			skill.intro = {
				content: '<li>效果：<span class="bluetext">' + info.content + '</span></br>' + str + '</span>',
			};
			skill.mark = true;
			skill.charlotte = true;
			game.addSkill(name, skill, info.name, '');
		}
	};
	var list = {
		gl_jianshang: {
			trigger: {
				player: 'damageBegin4',
			},
			forced: true,
			content: function () {
				player.changeHujia();
			},
			buffInfo: {
				name: '减伤',
				max: 5,
				loss: true,
				content: '当你受到伤害时，你获得1点护甲。',
			},
		},
		gl_jinliao: {
			trigger: {
				player: 'recoverBefore',
			},
			forced: true,
			debuff: true,
			content: function () {
				trigger.cancel();
			},
			buffInfo: {
				name: '禁疗',
				max: 5,
				loss: true,
				content: '当你回复体力时，取消之。',
			},
		},
		gl_jiang: {
			trigger: {
				player: 'drawBegin',
			},
			forced: true,
			content: function () {
				trigger.num++;
			},
			buffInfo: {
				name: '激昂',
				max: 4,
				loss: true,
				content: '当你摸牌时，此次摸牌数+1。',
			},
		},
		gl_liliang: {
			mod: {
				gl_power: function (player, num) {
					return num + player.storage.gl_liliang * 10;
				},
			},
			buffInfo: {
				name: '力量上升',
				max: 5,
				content: '你的力量+10',
			},
		},
		gl_jianren: {
			mod: {
				gl_defense: function (player, num) {
					return num + player.storage.gl_jianren * 10;
				},
			},
			buffInfo: {
				name: '坚韧上升',
				max: 5,
				content: '你的坚韧+10',
			},
		},
		gl_zhufu: {
			mod: {
				gl_recover: function (player, num) {
					return num + player.storage.gl_zhufu * 10;
				},
			},
			buffInfo: {
				name: '祝福上升',
				max: 5,
				content: '你的祝福+10',
			},
		},
		gl_moxing: {
			mod: {
				gl_magic: function (player, num) {
					return num + player.storage.gl_moxing * 10;
				},
			},
			buffInfo: {
				name: '魔性上升',
				max: 5,
				content: '你的魔性+10',
			},
		},
		gl_zengsu: {
			mod: {
				gl_speed: function (player, num) {
					return num + player.storage.gl_zengsu;
				},
			},
			buffInfo: {
				name: '增速',
				max: 5,
				content: '你的速度+1',
			},
			debuff: true,
		},
		gl_zhie: {
			trigger: {
				source: 'damageSource',
			},
			buffInfo: {
				name: '止恶',
				max: 1,
				content: '当你造成伤害时，你失去等量的体力。',
			},
			debuff: true,
			filter: function (event, player) {
				return event.num > 0;
			},
			forced: true,
			popup: false,
			content: function () {
				player.loseHp(trigger.num);
			},
		},
		gl_kuangbao: {
			mod: {
				cardEnabled: function (card, player) {
					if (!get.tag(card, 'damage')) return false;
				},
				cardUsable: function (card, player, num) {
					return Infinity;
				},
			},
			buffInfo: {
				name: '狂暴',
				max: 1,
				content: '你使用牌没有次数限制且不能使用非伤害牌。',
			},
			debuff: true,
		},
		gl_ri: {
			mark: true,
			debuff: true,
			intro: {
				content() {
					var str = '<div style="width:100%;text-align: center;">你可以额外使用2张【杀】;你的防具无效';
					str += '</br><span class=firetext>日盛月衰,离火灭世</span>';
					str += '</br>你受到1点火焰伤害,场上拥有<明泉>的角色需交给你1张牌';
					str += '</br><span class=greentext>日月调和,生生不息</span>';
					str += '</br>你回复1点体力,场上拥有<日泉>的角色摸2张牌';
					str += '</div>';
					return str;
				},
			},
			init(player) {
				if (player.hasSkill('gl_yue') && !_status.event.gl_yue) {
					var next = game.createEvent('gl_yue', false);
					_status.event.gl_yue = true;
					next.setContent(lib.skill.gl_yue.contentx);
				}
				if (player.hasSkill('gl_ming') && !_status.event.gl_ri) {
					var next = game.createEvent('gl_ri', false);
					_status.event.gl_ri = true;
					next.setContent(lib.skill.gl_ri.contentx);
				}
			},
			mod: {
				cardUsable(card, player, num) {
					if (card.name == 'sha') return num + 2;
				},
			},
			ai: {
				unequip2: true,
			},
			charlotte: true,
			contentx() {
				'step 0';
				event.players = game.filterPlayer(function (current) {
					if (!current.hasSkill('gl_ming')) return false;
					if (!current.hasSkill('gl_ri')) return false;
					current.removeSkill('gl_ri');
					current.removeSkill('gl_ming');
					return true;
				});
				('step 1');
				if (event.players.length) {
					event.current = event.players.shift();
					event.current.damage('fire');
				} else {
					event.finish();
				}
				('step 2');
				var targets = game.filterPlayer(function (current) {
					return current.hasSkill('gl_ming');
				});
				if (targets.length) {
					lib.tempSortSeat = event.current;
					targets.sort(lib.sort.seat);
					delete lib.tempSortSeat;
					event.targets = targets;
					event.current.line(targets, 'fire');
				} else {
					event.goto(1);
				}
				('step 3');
				if (event.targets.length) {
					event.target = event.targets.shift();
					event.target.chooseCard('he', '交给' + get.translation(event.current) + '一张牌', true);
				} else {
					event.goto(1);
				}
				('step 4');
				if (result.bool) {
					event.target.give(result.cards, event.current, true);
				}
				event.goto(3);
			},
			trigger: {
				player: 'useCardToPlayered',
			},
			forced: true,
			filter(event, player) {
				if (!event.targets) return false;
				if (!event.isFirstTarget) return false;
				return true;
			},
			content() {
				for (let i = 0; i < trigger.targets.length; i++) {
					trigger.targets[i].addSkill(event.name);
				}
			},
		},
		gl_ming: {
			mark: true,
			debuff: true,
			intro: {
				content() {
					var str = '<div style="width:100%;text-align: center;">你的手牌上限+3;你的攻击距离-1';
					str += '</br><span class=firetext>日盛月衰,离火灭世</span>';
					str += '</br>你受到1点火焰伤害,场上拥有<明泉>的角色需交给你1张牌';
					str += '</br><span class=thundertext>月盛日衰,折胶堕指</span>';
					str += '</br>你弃置2张牌,场上拥有<月泉>的角色失去1点体力';
					str += '</div>';
					return str;
				},
			},
			init(player) {
				if (player.hasSkill('gl_yue') && !_status.event.gl_ming) {
					var next = game.createEvent('gl_ming', false);
					_status.event.gl_ming = true;
					next.setContent(lib.skill.gl_ming.contentx);
				}
				if (player.hasSkill('gl_ri') && !_status.event.gl_ri) {
					var next = game.createEvent('gl_ri', false);
					_status.event.gl_ri = true;
					next.setContent(lib.skill.gl_ri.contentx);
				}
			},
			mod: {
				maxHandcard(player, num) {
					return num + 3;
				},
				globalFrom(from, to, distance) {
					return distance + 1;
				},
			},
			charlotte: true,
			contentx() {
				'step 0';
				event.players = game.filterPlayer(function (current) {
					if (!current.hasSkill('gl_ming')) return false;
					if (!current.hasSkill('gl_yue')) return false;
					current.removeSkill('gl_ming');
					current.removeSkill('gl_yue');
					return true;
				});
				('step 1');
				if (event.players.length) {
					event.current = event.players.shift();
					event.current.chooseToDiscard('he', 2, true);
				} else {
					event.finish();
				}
				('step 2');
				var targets = game.filterPlayer(function (current) {
					return current.hasSkill('gl_yue');
				});
				if (targets.length) {
					lib.tempSortSeat = event.current;
					targets.sort(lib.sort.seat);
					delete lib.tempSortSeat;
					event.targets = targets;
					event.current.line(targets, 'thunder');
				} else {
					event.goto(1);
				}
				('step 3');
				if (event.targets.length) {
					event.target = event.targets.shift();
					event.target.loseHp();
				} else {
					event.goto(1);
				}
				('step 4');
				event.goto(3);
			},
			trigger: {
				player: 'useCardToPlayered',
			},
			forced: true,
			filter(event, player) {
				if (!event.targets) return false;
				if (!event.isFirstTarget) return false;
				return true;
			},
			content() {
				for (let i = 0; i < trigger.targets.length; i++) {
					trigger.targets[i].addSkill(event.name);
				}
			},
		},
		gl_yue: {
			mark: true,
			debuff: true,
			intro: {
				content() {
					var str = '<div style="width:100%;text-align: center;">你不是【杀】的合法目标;你不能使用【杀】';
					str += '</br><span class=thundertext>月盛日衰,折胶堕指</span>';
					str += '</br>你弃置2张牌,场上拥有<月泉>的角色失去1点体力';
					str += '</br><span class=greentext>日月调和,生生不息</span>';
					str += '</br>你回复1点体力,场上拥有<日泉>的角色摸2张牌';
					str += '</div>';
					return str;
				},
			},
			init(player) {
				if (player.hasSkill('gl_ri') && !_status.event.gl_yue) {
					var next = game.createEvent('gl_yue', false);
					_status.event.gl_yue = true;
					next.setContent(lib.skill.gl_yue.contentx);
				}
				if (player.hasSkill('gl_ming') && !_status.event.gl_ming) {
					var next = game.createEvent('gl_ming', false);
					_status.event.gl_ming = true;
					next.setContent(lib.skill.gl_ming.contentx);
				}
			},
			mod: {
				targetEnabled(card, player, target, now) {
					if (card.name == 'sha') return false;
				},
				cardEnabled(card) {
					if (card.name == 'sha') return false;
				},
			},
			charlotte: true,
			contentx() {
				'step 0';
				event.players = game.filterPlayer(function (current) {
					if (!current.hasSkill('gl_yue')) return false;
					if (!current.hasSkill('gl_ri')) return false;
					current.removeSkill('gl_ri');
					current.removeSkill('gl_yue');
					return true;
				});
				('step 1');
				if (event.players.length) {
					event.current = event.players.shift();
					event.current.recover();
				} else {
					event.finish();
				}
				('step 2');
				var targets = game.filterPlayer(function (current) {
					return current.hasSkill('gl_ri');
				});
				if (targets.length) {
					lib.tempSortSeat = event.current;
					targets.sort(lib.sort.seat);
					delete lib.tempSortSeat;
					event.targets = targets;
					event.current.line(targets, 'green');
				} else {
					event.goto(1);
				}
				('step 3');
				if (event.targets.length) {
					event.target = event.targets.shift();
					event.target.draw(2);
				} else {
					event.goto(1);
				}
				('step 4');
				event.goto(3);
			},
			trigger: {
				player: 'useCardToPlayered',
			},
			forced: true,
			filter(event, player) {
				if (!event.targets) return false;
				if (!event.isFirstTarget) return false;
				return true;
			},
			content() {
				for (let i = 0; i < trigger.targets.length; i++) {
					trigger.targets[i].addSkill(event.name);
				}
			},
		},
	};
	game.gl_loadBuff(list);
	//获取buff层数
	lib.element.player.gl_getBuff = function (key) {
		if (!this.storage[key]) return 0;
		return this.storage[key];
	};
	//获取buff时效
	lib.element.player.gl_getBuffTimer = function (key) {
		if (!this.storage.gl_buff) this.storage.gl_buff = {};
		if (!this.storage.gl_buff[key]) return 0;
		return this.storage.gl_buff[key];
	};
	//净化
	lib.element.player.gl_purge = function () {
		var skill = this.getSkills();
		for (var i = 0; i < skill.length; i++) {
			var info = lib.skill[skill[i]];
			if (info.debuff) this.gl_changeBuff(skill[i], true);
		}
	};
	//是否能获得buff
	lib.element.player.gl_canGainBuff = function (name) {
		if (Array.isArray(name)) {
			for (var i of name) {
				if (this.gl_canGainBuff(i)) return true;
			}
		} else {
			if (lib.skill[name].buffInfo.max > (this.storage[name] || 0)) {
				return true;
			} else {
				return false;
			}
		}
	};
	//是否能失去Buff
	lib.element.player.gl_canLoseBuff = function (name) {
		if (Array.isArray(name)) {
			for (var i of name) {
				if (this.gl_canLoseBuff(i)) return true;
			}
		} else {
			if ((this.storage[name] || 0) > 0) {
				return true;
			} else {
				return false;
			}
		}
	};
	lib.translate.gl_loseBuff = '自然治愈';
	lib.skill.gl_loseBuff = {
		trigger: {
			global: 'phaseAfter',
			player: ['logSkill', 'useSkillAfter'],
		},
		filter: function (event, player) {
			if (event.name == 'phase') return true;
			if (event.type != 'player') return false;
			var skill = event.sourceSkill || event.skill;
			return lib.skill[skill].buffInfo && lib.skill[skill].buffInfo.loss;
		},
		forced: true,
		popup: false,
		lastDo: true,
		priority: -Infinity,
		content: function () {
			if (trigger.name == 'phase') {
				var skills = player.getSkills();
				for (var skill of skills) {
					if (lib.skill[skill].buffInfo && lib.skill[skill].buffInfo.recover !== false) {
						if (lib.skill[skill].buffInfo.recover === true) {
							player.gl_changeBuff(skill, true);
						} else {
							player.storage.gl_buff[skill]++;
							if (player.gl_getBuffTimer(skill) / game.players.length > 1) player.gl_changeBuff(skill, true);
						}
					}
				}
			} else {
				var skill = trigger.sourceSkill || trigger.skill;
				player.gl_changeBuff(skill, -1);
			}
		},
	};
	game.addGlobalSkill('gl_loseBuff');
	//获得与失去Buff
	lib.element.player.gl_changeBuff = function () {
		var next = game.createEvent('gl_changeBuff');
		next.player = this;
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == 'number') {
				next.num = arguments[i];
			} else if (typeof arguments[i] == 'string') {
				next.buff = arguments[i];
			} else if (typeof arguments[i] == 'boolean') {
				next.forced = arguments[i];
			}
		}
		if (typeof next.num != 'number') next.num = 1;
		if ((next.num > 0 && !this.gl_canGainBuff(next.buff)) || (next.num < 0 && !this.gl_canLoseBuff(next.buff))) _status.event.next.remove(next);
		next.setContent('gl_changeBuff');
		return next;
	};
	lib.element.content.gl_changeBuff = function () {
		'step 0';
		if (!player.hasSkill(event.buff)) player.storage[event.buff] = 0;
		if (event.forced) {
			player.storage[event.buff] = -1;
		} else {
			if (event.num > lib.skill[event.buff].buffInfo.max - player.gl_getBuff(event.buff)) {
				event.num = lib.skill[event.buff].buffInfo.max - player.gl_getBuff(event.buff);
			}
			player.storage[event.buff] += event.num;
		}
		if (event.num > 0) {
			if (!player.storage.gl_buff) player.storage.gl_buff = {};
			player.storage.gl_buff[event.buff] = 0;
		}
		('step 1');
		if (player.gl_getBuff(event.buff) > 0) {
			if (!player.hasSkill(event.buff)) {
				event.trigger('gl_gainBuff');
			}
			player.addSkill(event.buff);
		} else {
			if (player.hasSkill(event.buff)) {
				event.trigger('gl_loseBuff');
			}
			player.removeSkill(event.buff);
		}
	};
}

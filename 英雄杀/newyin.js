"use strict";
window.reTHK_import(function (lib, game, ui, get, ai, _status) {
	var skill = {
		zgldd: {
			trigger: {
				player: "phaseBegin",
			},
			forced: true,
			audio: 2,
			group: "zgldd2",
			content() {
				"step 0"
				for (var i = 0; i < game.players.length; i++) {
					if (game.players[i].hasSkill('zgldd_zhu')) {
						game.players[i].removeSkill('zgldd_zhu');
						game.players[i].popup('zgldd_zhu');
					}
					if (game.players[i].hasSkill('zgldd_fu')) {
						game.players[i].removeSkill('zgldd_fu');
						game.players[i].popup('zgldd_fu');
					}
				}
				player.judge(function (card) {
					var color = get.color(card);
					if (color == 'black') return 1;
					if (color == 'red') return 0;
					return -1;
				});
				"step 1"
				var targets = [],
					players = player.getEnemies().sortBySeat();
				if (result.color == 'red') {
					game.trySkillAudio('zgldd_zhu');
					for (var i = 0; i < players.length; i++) {
						players[i].addSkill('zgldd_zhu');
						players[i].popup('zgldd_zhu');
						targets.push(players[i]);
					}
				} else if (result.color == 'black') {
					game.trySkillAudio('zgldd_fu');
					for (var i = 0; i < players.length; i++) {
						players[i].addSkill('zgldd_fu');
						players[i].popup('zgldd_fu');
						targets.push(players[i]);
					}
				}
			},
			ai: {
				threaten: 1.6,
			},
		},
		zgldd2: {
			audio: 2,
			trigger: {
				player: 'dieBegin'
			},
			forced: true,
			popup: false,
			content() {
				for (var i = 0; i < game.players.length; i++) {
					if (game.players[i].hasSkill('zgldd_zhu')) {
						game.players[i].removeSkill('zgldd_zhu');
						game.players[i].popup('zgldd_zhu');
					}
					if (game.players[i].hasSkill('zgldd_fu')) {
						game.players[i].removeSkill('zgldd_fu');
						game.players[i].popup('zgldd_fu');
					}
				}
			}
		},
		zgldd_zhu: {
			init(player, skill) {
				player.addSkillBlocker(skill);
			},
			onremove(player, skill) {
				player.removeSkillBlocker(skill);
			},
			charlotte: true,
			skillBlocker(skill, player) {
				if (lib.config.rethk_yinshou[player.name] == undefined) return false;
				return !lib.skill[skill].charlotte && (lib.config.rethk_yinshou[player.name]['z1'] == skill || lib.config.rethk_yinshou[player.name]['z2'] == skill);
			},
			mark: true,
			intro: {
				content(storage, player, skill) {
					var list = player.getSkills(null, false, false).filter(function (i) {
						return lib.skill.zgldd_zhu.skillBlocker(i, player);
					});
					if (list.length) return '失效技能:' + get.translation(list);
					return '无失效技能';
				}
			}
		},
		zgldd_fu: {
			init(player, skill) {
				player.addSkillBlocker(skill);
			},
			onremove(player, skill) {
				player.removeSkillBlocker(skill);
			},
			charlotte: true,
			skillBlocker(skill, player) {
				if (lib.config.rethk_yinshou[player.name] == undefined) return false;
				return !lib.skill[skill].charlotte && (lib.config.rethk_yinshou[player.name]['f1'] == skill || lib.config.rethk_yinshou[player.name]['f2'] == skill);
			},
			mark: true,
			intro: {
				content(storage, player, skill) {
					var list = player.getSkills(null, false, false).filter(function (i) {
						return lib.skill.zgldd_fu.skillBlocker(i, player);
					});
					if (list.length) return '失效技能:' + get.translation(list);
					return '无失效技能';
				}
			}
		},
		ydanji: {
			forced: true,
			mod: {
				globalFrom(from, to, distance) {
					return distance - 1;
				},
			},
		},
		//酒神
		yjiushen: {
			audio: 'jiuchi',
			enable: "chooseToUse",
			filterCard(card) {
				return get.color(card) == 'black';
			},
			viewAs: {
				name: "jiu",
			},
			viewAsFilter(player) {
				if (!player.countCards('hs', { color: 'black' })) return false;
				return true;
			},
			prompt: "将一张黑色手牌当酒使用",
			check(card) {
				if (_status.event.type == 'dying') return 1 / Math.max(0.1, get.value(card));
				return 4 - get.value(card);
			},
			ai: {
				threaten: 1.5,
				basic: {
					useful(card, i) {
						if (_status.event.player.hp > 1) {
							if (i == 0) return 4;
							return 1;
						}
						if (i == 0) return 7.3;
						return 3;
					},
					value(card, player, i) {
						if (player.hp > 1) {
							if (i == 0) return 5;
							return 1;
						}
						if (i == 0) return 7.3;
						return 3;
					},
				},
				order() {
					return get.order({ name: 'sha' }) + 0.2;
				},
				result: {
					target(player, target) {
						if (target && target.isDying()) return 2;
						if (target && !target.isPhaseUsing()) return 0;
						if (lib.config.mode == 'stone' && !player.isMin()) {
							if (player.getActCount() + 1 >= player.actcount) return 0;
						}
						var shas = player.getCards('h', 'sha');
						if (shas.length > 1 && (player.getCardUsable('sha') > 1 || player.countCards('h', 'zhuge'))) {
							return 0;
						}
						shas.sort(function (a, b) {
							return get.order(b) - get.order(a);
						})
						var card;
						if (shas.length) {
							for (var i = 0; i < shas.length; i++) {
								if (lib.filter.filterCard(shas[i], target)) {
									card = shas[i]; break;
								}
							}
						}
						else if (player.hasSha() && player.needsToDiscard()) {
							if (player.countCards('h', 'hufu') != 1) {
								card = { name: 'sha' };
							}
						}
						if (card) {
							if (game.hasPlayer(function (current) {
								return (get.attitude(target, current) < 0 &&
									target.canUse(card, current, null, true) &&
									!current.hasSkillTag('filterDamage', null, {
										player: player,
										card: card,
										jiu: true,
									}) &&
									get.effect(current, card, target) > 0);
							})) {
								return 1;
							}
						}
						return 0;
					},
				},
				tag: {
					save: 1,
					recover: 0.1,
				},
			},
		},
		ychuanqi_fengyan: {
			trigger: {
				player: "useCardBegin",
			},
			forced: true,
			filter(event, player) {
				/*
					if (event.card && (event.card.name == 'nanman' || event.card.name == 'wanjian' || event
							.card.name == 'wugu' || event.card.name == 'taoyuan')) return true;
					if (event.card && get.type(event.card) == 'trick' && event.targets && event.targets
						.length > 1) return true;
					return false;
					*/
				return lib.skill.xunshi.isXunshi(event.card);
			},
			content() {
				"step 0"
				event.list = player.getEnemies().sortBySeat();
				'step 1'
				if (event.list.length) {
					var target = event.list.shift();
					player.line(target, 'green');
					target.damage('fire', player);
					event.redo();
				}
			},
		},
		ychuanqi_xuanming: {
			trigger: {
				global: "gainEnd",
			},
			filter(event, player) {
				if (event.player.isFriendsOf(player)) return false;
				return event.player != player && event.player.isAlive() && _status.currentPhase != event
					.player;
			},
			forced: true,
			logTarget: "player",
			content() {
				var num = trigger.cards.length;
				trigger.player.damage(num, player);
			},
		},
		//重甲
		yzhongjia: {
			trigger: {
				player: 'damageBegin4'
			},
			forced: true,
			filter(event) {
				return (event.num > 0)
			},
			content() {
				trigger.num = 1
				//player.loseHp();
			},
			ai: {
				noDirectDamage: true,
			}
		},
		nmbi: {
			audio: 1,
			trigger: {
				player: "shaBegin",
			},
			forced: true,
			filter(event) {
				return event.target.countCards('he') > 0;
			},
			content() {
				var hs = trigger.target.getCards('h');
				if (hs.length) {
					trigger.target.discard(hs.randomGet());
				}
			},
		},
		yzhanshen: {
			audio: 2,
			enable: ['chooseToRespond', 'chooseToUse'],
			filterCard(card, player) {
				return get.color(card) == 'black';
			},
			position: 'hes',
			viewAs: { name: 'sha' },
			viewAsFilter(player) {
				if (!player.countCards('hes', { color: 'black' })) return false;
			},
			prompt: '将一张黑色牌当杀使用或打出',
			check(card) { return 4.5 - get.value(card) },
			ai: {
				skillTagFilter(player) {
					if (!player.countCards('hes', { color: 'black' })) return false;
				},
				respondSha: true,
			}
		},
		yqingdian: {
			audio: 1,
			enable: ['chooseToRespond', 'chooseToUse'],
			filterCard(card, player) {
				return card.suit == 'spade';
			},
			viewAs: {
				name: 'shandian'
			},
			viewAsFilter(player) {
				if (!player.countCards('h', {
					suit: 'spade'
				})) return false;
			},
		},
		yshinian: {
		},
		//神射
		yshenshe: {
			mod: {
				targetInRange(card) {
					if (card.name == 'sha') return true;
				}
			},
		},
		//冲锋
		ychongfeng: {
			mod: {
				selectTarget(card, player, range) {
					if (card.name == 'sha' && range[1] != -1) range[1]++;
				},
			}
		},
		//觉醒
		cqjuexing: {
			audio: 2,
			trigger: {
				player: "phaseAfter",
			},
			filter(event, player) {
				return player.isDamaged();
			},
			forced: true,
			content() {
				player.recover();
			},
			ai: {
				threaten: 1.5,
			},
		},
		//五星身强,血量上限+5
		yshenqiang: {
			trigger: {
				global: "gameStart",
			},
			forced: true,
			filter(event, player) {
				if (!player.shenqiang) {
					return true;
				}
			},
			content() {
				player.hp = player.maxHp + 5;
				player.maxHp = player.maxHp + 5;
				player.shenqiang = true
			}
		},
		yshenqiang_l1: {},
		yshenqiang_l2: {},
		yshenqiang_l3: {},
		yshenqiang_l4: {},
		yshenqiang_l5: {},
		//五星运筹,手牌上限+5
		yyunchou: {
			mod: {
				maxHandcard(player, num) {
					return player.hp + 5;
				}
			},
		},
		yyunchou_l1: {
			mod: {
				maxHandcard(player, num) {
					return player.hp + 1;
				}
			},
		},
		yyunchou_l2: {
			mod: {
				maxHandcard(player, num) {
					return player.hp + 2;
				}
			},
		},
		yyunchou_l3: {
			mod: {
				maxHandcard(player, num) {
					return player.hp + 3;
				}
			},
		},
		yyunchou_l4: {
			mod: {
				maxHandcard(player, num) {
					return player.hp + 4;
				}
			},
		},
		yyunchou_l5: {
			mod: {
				maxHandcard(player, num) {
					return player.hp + 5;
				}
			},
		},
		//五星穿杨,攻击距离+5
		ychuanyang: {
			mod: {
				attackFrom(from, to, distance) {
					return distance - 3;
				},
			}
		},
		ychuanyang_l1: {
			mod: {
				globalFrom(from, to, distance) {
					return distance - 1;
				},
			}
		},
		ychuanyang_l2: {
			mod: {
				globalFrom(from, to, distance) {
					return distance - 2;
				},
			}
		},
		ychuanyang_l3: {
			mod: {
				globalFrom(from, to, distance) {
					return distance - 3;
				},
			}
		},
		ychuanyang_l4: {
			mod: {
				globalFrom(from, to, distance) {
					return distance - 4;
				},
			}
		},
		ychuanyang_l5: {
			mod: {
				attackFrom(from, to, distance) {
					return distance - 5;
				},
			}
		},
		////////////fuyinqu///////////////
		//杀之贪
		shazhitanf: {
			trigger: {
				source: 'damageBegin2'
			},
			forced: true,
			priority: 89,
			lv: 0,
			filter(event, player, name) {
				let chance = lib.config.rethkfuyin[this.lv]
				console.log('chance', chance)
				if (event.card && (event.card.name == 'sha') && event.source.isAlive()) {
					if (Math.ceil(Math.random() * 65) <= chance) {
						return true;
					}
				}
				return false;
			},
			content() {
				player.draw()
			}
		},
		shazhitanf_l1: {
			inherit: 'shazhitanf',
			lv: 1,
		},
		shazhitanf_l2: {
			inherit: 'shazhitanf',
			lv: 2,
		},
		shazhitanf_l3: {
			inherit: 'shazhitanf',
			lv: 3,
		},
		shazhitanf_l4: {
			inherit: 'shazhitanf',
			lv: 4,
		},
		shazhitanf_l5: {
			inherit: 'shazhitanf',
			lv: 5,
		},
		//贪之手
		tanzhishouf: {
			trigger: {
				player: 'phaseDrawBegin2'
			},
			lv: 0,
			//frequent:true,
			priority: 1,
			forced: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (Math.ceil(Math.random() * 100) <= chance) {
					return true
				}
			},
			content() {
				trigger.num++;
			},
			ai: {
				threaten: 1.3
			}
		},
		tanzhishouf_l1: {
			inherit: 'tanzhishouf',
			lv: 1,
		},
		tanzhishouf_l2: {
			inherit: 'tanzhishouf',
			lv: 2,
		},
		tanzhishouf_l3: {
			inherit: 'tanzhishouf',
			lv: 3,
		},
		tanzhishouf_l4: {
			inherit: 'tanzhishouf',
			lv: 4,
		},
		tanzhishouf_l5: {
			inherit: 'tanzhishouf',
			lv: 5,
		},
		//破咒
		pozhouf: {
			trigger: {
				source: "damageBefore",
			},
			lv: 0,
			forced: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (Math.ceil(Math.random() * 65) <= chance) {
					if (event.player.hasSkill('yluoyan')) return false;
					return event.card && (event.card.name == 'sha');
				}
				return false;
			},
			content() {
				trigger.player.addTempSkill('chuanqi_huying_fu', 'shaAfter');
			},
		},
		pozhouf_l1: {
			inherit: 'pozhouf',
			lv: 1,
		},
		pozhouf_l2: {
			inherit: 'pozhouf',
			lv: 2,
		},
		pozhouf_l3: {
			inherit: 'pozhouf',
			lv: 3,
		},
		pozhouf_l4: {
			inherit: 'pozhouf',
			lv: 4,
		},
		pozhouf_l5: {
			inherit: 'pozhouf',
			lv: 5,
		},
		//饕餮
		taotief: {
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (Math.ceil(Math.random() * 100) <= chance) {
					return true;
				}
				return false;
			},
			forced: true,
			lv: 0,
			mod: {
				maxHandcard(player, num) {
					return 20;
				},
			},
		},
		taotief_l1: {
			inherit: 'taotief',
			lv: 1,
		},
		taotief_l2: {
			inherit: 'taotief',
			lv: 2,
		},
		taotief_l3: {
			inherit: 'taotief',
			lv: 3,
		},
		taotief_l4: {
			inherit: 'taotief',
			lv: 4,
		},
		taotief_l5: {
			inherit: 'taotief',
			lv: 5,
		},
		//强化
		qianghuaf: {
			trigger: {
				source: 'damageBegin'
			},
			lv: 0,
			forced: true,
			priority: 99,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (event.card && (event.card.name == 'sha')) {
					if (Math.ceil(Math.random() * 100) <= chance) {
						return true;
					}
				}
				return false;
			},
			content() {
				trigger.num++;
			}
		},
		qianghuaf_l1: {
			inherit: 'qianghuaf',
			lv: 1,
		},
		qianghuaf_l2: {
			inherit: 'qianghuaf',
			lv: 2,
		},
		qianghuaf_l3: {
			inherit: 'qianghuaf',
			lv: 3,
		},
		qianghuaf_l4: {
			inherit: 'qianghuaf',
			lv: 4,
		},
		qianghuaf_l5: {
			inherit: 'qianghuaf',
			lv: 5,
		},
		//摸牌
		mopaif: {
			priority: 130,
			forced: true,
			trigger: {
				player: "phaseDrawBefore",
			},
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (Math.ceil(Math.random() * 100) <= chance) {
					player.storage.mopaif = 1
				} else {
					player.storage.mopaif = 2
				}
				return true;
			},
			content() {
				if (player.storage.mopaif == 1) {
					player.draw(10)
				}
				if (player.storage.mopaif == 2) {
					//trigger.cancel();
					//let playerHandCards = player.countCards('h');
					player.chooseToDiscard(3, true, 'h');
				}
				player.storage.mopaif = undefined
			},
		},
		//爆能
		baonengf: {
			priority: 131,
			forced: true,
			trigger: {
				player: "phaseDrawBefore",
			},
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (Math.ceil(Math.random() * 100) <= chance) {
					player.storage.baonengf = 1
				} else {
					player.storage.baonengf = 2
				}
				return true;
			},
			content() {
				if (player.storage.baonengf == 1) {
					player.hp += 3
				}
				if (player.storage.baonengf == 2) {
					player.loseHp(1);
				}
				player.storage.baonengf = undefined
			}
		},
		//医仙
		yixianf: {
			trigger: {
				player: ['respond', 'useCard']
			},
			lv: 0,
			forced: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (event.card && event.card.name == 'tao' || event.card.name == 'jiu') {
					if (Math.ceil(Math.random() * 100) <= chance) {
						return true;
					}
				}
				return false;
			},
			content() {
				player.draw();
			},
			ai: {
				mingzhi: false,
				effect: {
					target(card, player, target) {
						if (get.tag(card, 'respondShan')) {
							return 0.8;
						}
					}
				},
			}
		},
		//伤之贪
		shangzhitanf: {
			trigger: {
				player: 'damageBegin3'
			},
			lv: 0,
			priority: 88,
			forced: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (event.card && (event.card.name == 'sha')) {
					if (Math.ceil(Math.random() * 100) <= chance) {
						return true;
					}
				}
				return false;
			},
			content() {
				player.draw()
			}
		},
		shangzhitanf_l1: {
			inherit: 'shangzhitanf',
			lv: 1,
		},
		shangzhitanf_l2: {
			inherit: 'shangzhitanf',
			lv: 2,
		},
		shangzhitanf_l3: {
			inherit: 'shangzhitanf',
			lv: 3,
		},
		shangzhitanf_l4: {
			inherit: 'shangzhitanf',
			lv: 4,
		},
		shangzhitanf_l5: {
			inherit: 'shangzhitanf',
			lv: 5,
		},
		//精准
		jingzhunf: {
			trigger: {
				player: 'shaBegin'
			},
			lv: 0,
			priority: 7,
			forced: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (event.target.hasSkill('yluoyan')) return false;
				if (Math.ceil(Math.random() * 65) <= chance) {
					return event.card;
				}
			},
			content() {
				trigger.directHit = true;
				trigger.podun = true
			}
		},
		jingzhunf_l1: {
			inherit: 'jingzhunf',
			lv: 1,
		},
		jingzhunf_l2: {
			inherit: 'jingzhunf',
			lv: 2,
		},
		jingzhunf_l3: {
			inherit: 'jingzhunf',
			lv: 3,
		},
		jingzhunf_l4: {
			inherit: 'jingzhunf',
			lv: 4,
		},
		jingzhunf_l5: {
			inherit: 'jingzhunf',
			lv: 5,
		},
		//吸血
		xixuef: {
			audio: 0,
			trigger: {
				source: "damageBegin1",
			},
			forced: true,
			lv: 0,
			priority: 2,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (event.card && event.card.name == 'sha') {
					if (Math.ceil(Math.random() * 100) <= chance) {
						return true;
					}
				}
				return false;
			},
			content() {
				player.recover()
			}
		},
		xixuef_l1: {
			inherit: 'xixuef',
			lv: 1,
		},
		xixuef_l2: {
			inherit: 'xixuef',
			lv: 2,
		},
		xixuef_l3: {
			inherit: 'xixuef',
			lv: 3,
		},
		xixuef_l4: {
			inherit: 'xixuef',
			lv: 4,
		},
		xixuef_l5: {
			inherit: 'xixuef',
			lv: 5,
		},
		qinglingf: {
			trigger: {
				player: ['respond', 'useCard']
			},
			lv: 0,
			forced: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (event.card && event.card.name == 'shan') {
					if (Math.ceil(Math.random() * 100) <= chance) {
						return true;
					}
				}
				return false;
			},
			content() {
				player.draw();
			},
			ai: {
				mingzhi: false,
				effect: {
					target(card, player, target) {
						if (get.tag(card, 'respondShan')) {
							return 0.8;
						}
					}
				},
			}
		},
		qinglingf_l1: {
			inherit: 'qinglingf',
			lv: 1,
		},
		qinglingf_l2: {
			inherit: 'qinglingf',
			lv: 2,
		},
		qinglingf_l3: {
			inherit: 'qinglingf',
			lv: 3,
		},
		qinglingf_l4: {
			inherit: 'qinglingf',
			lv: 4,
		},
		qinglingf_l5: {
			inherit: 'qinglingf',
			lv: 5,
		},
		//黑杀盾
		heishadunf: {
			trigger: {
				target: 'shaBegin'
			},
			forced: true,
			priority: 6,
			lv: 0,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (event.directHit && event.directHit == true) return false;
				if (event.podun && event.podun == true) return false;
				if (Math.ceil(Math.random() * 100) <= chance) {
					return (event.card.name == 'sha' && get.color(event.card) == 'black' && !event
						.player.hasSkill('ybaotou') &&
						!event
							.player.hasSkill('jingzhunf') && !event
								.player.hasSkill('yhanbei') &&
						!event.player.hasSkill('ycike'))
				}
				return false;
			},
			content() {
				trigger.cancel();
			},
		},
		heishadunf_l1: {
			inherit: 'heishadunf',
			lv: 1,
		},
		heishadunf_l2: {
			inherit: 'heishadunf',
			lv: 2,
		},
		heishadunf_l3: {
			inherit: 'heishadunf',
			lv: 3,
		},
		heishadunf_l4: {
			inherit: 'heishadunf',
			lv: 4,
		},
		heishadunf_l5: {
			inherit: 'heishadunf',
			lv: 5,
		},
		//伤之削
		shangzhixiaof: {
			trigger: {
				player: 'damageAfter'
			},
			lv: 0,
			priority: 59,
			forced: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (event.card && (event.card.name == 'sha')) {
					if (Math.ceil(Math.random() * 100) <= chance) {
						return true;
					}
				}
				return false;
			},
			content() {
				player.discardPlayerCard(trigger.source, 'h', false);
			}
		},
		shangzhixiaof_l1: {
			inherit: 'shangzhixiaof',
			lv: 1,
		},
		shangzhixiaof_l2: {
			inherit: 'shangzhixiaof',
			lv: 2,
		},
		shangzhixiaof_l3: {
			inherit: 'shangzhixiaof',
			lv: 3,
		},
		shangzhixiaof_l4: {
			inherit: 'shangzhixiaof',
			lv: 4,
		},
		shangzhixiaof_l5: {
			inherit: 'shangzhixiaof',
			lv: 5,
		},
		//杀之卸
		shazhixief: {
			trigger: {
				source: 'damageEnd'
			},
			lv: 0,
			forced: true,
			priority: 50,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (event.card && (event.card.name == 'sha')) {
					if (Math.ceil(Math.random() * 100) <= chance) {
						return true;
					}
				}
				return false;
			},
			content() {
				player.discardPlayerCard(trigger.source, 'e', false)
			}
		},
		shazhixief_l1: {
			inherit: 'shazhixief',
			lv: 1,
		},
		shazhixief_l2: {
			inherit: 'shazhixief',
			lv: 2,
		},
		shazhixief_l3: {
			inherit: 'shazhixief',
			lv: 3,
		},
		shazhixief_l4: {
			inherit: 'shazhixief',
			lv: 4,
		},
		shazhixief_l5: {
			inherit: 'shazhixief',
			lv: 5,
		},
		//伤之卸
		shangzhixief: {
			trigger: {
				player: 'damageAfter'
			},
			lv: 0,
			priority: 56,
			forced: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (event.card && (event.card.name == 'sha')) {
					if (Math.ceil(Math.random() * 100) <= chance) {
						return true;
					}
				}
				return false;
			},
			content() {
				player.discardPlayerCard(trigger.source, 'e', false);
			}
		},
		shangzhixief_l1: {
			inherit: 'shangzhixief',
			lv: 1,
		},
		shangzhixief_l2: {
			inherit: 'shangzhixief',
			lv: 2,
		},
		shangzhixief_l3: {
			inherit: 'shangzhixief',
			lv: 3,
		},
		shangzhixief_l4: {
			inherit: 'shangzhixief',
			lv: 4,
		},
		shangzhixief_l5: {
			inherit: 'shangzhixief',
			lv: 5,
		},
		//伤之仇
		shangzhichouf: {
			trigger: {
				player: 'damageBegin4'
			},
			lv: 0,
			priority: 60,
			forced: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (event.card && (event.card.name == 'sha') && player != event.source) {
					if (Math.ceil(Math.random() * 100) <= chance) {
						return true;
					}
				}
				return false;
			},
			content() {
				trigger.source.damage();
			}
		},
		shangzhichouf_l1: {
			inherit: 'shangzhichouf',
			lv: 1,
		},
		shangzhichouf_l2: {
			inherit: 'shangzhichouf',
			lv: 2,
		},
		shangzhichouf_l3: {
			inherit: 'shangzhichouf',
			lv: 3,
		},
		shangzhichouf_l4: {
			inherit: 'shangzhichouf',
			lv: 4,
		},
		shangzhichouf_l5: {
			inherit: 'shangzhichouf',
			lv: 5,
		},
		//生有,额外摸2张牌
		shengyouf: {
			lv: 0,
			/* trigger: {
				player: "useCardAfter",
			},
			forced: true,
			filter(event, player) {
				return event.card.name == 'wuzhong';
			},
			logTarget: "target",
			content() {
				player.draw(2)
			}, */
		},
		shengyouf_l1: { lv: 1 },
		shengyouf_l2: { lv: 2 },
		shengyouf_l3: { lv: 3 },
		shengyouf_l4: { lv: 4 },
		shengyouf_l5: { lv: 5 },
		//探囊
		tannangf: {
			lv: 0,
			/* trigger: {
				player: "shunshouAfter9",
			},
			forced: true,
			check(event, player) {
				return get.attitude(player, event.target) <= 0;
			},
			filter(event, player) {
				return event.card.name == 'shunshou';
			},
			logTarget: "target",
			content() {
				player.gainPlayerCard(trigger.target, get.prompt('探囊', trigger.target));
			}, */
		},
		tannangf_1: { lv: 1 },
		tannangf_2: { lv: 2 },
		tannangf_3: { lv: 3 },
		tannangf_4: { lv: 4 },
		tannangf_5: { lv: 5 },
		//万箭
		wanjianf: {
			trigger: {
				player: "useCard1",
			},
			forced: true,
			firstDo: true,
			//silent: true,
			lv: 0,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (event.card && (event.card.name == 'wanjian')) {
					if (Math.ceil(Math.random() * 100) <= chance) {
						return true;
					}
				}
				return false;
			},
			content() {
				trigger.baseDamage++;
				game.log('触发了万箭,万箭齐发的伤害+1');
			},
		},
		wanjianf_l1: {
			inherit: 'wanjianf',
			lv: 1,
		},
		wanjianf_l2: {
			inherit: 'wanjianf',
			lv: 2,
		},
		wanjianf_l3: {
			inherit: 'wanjianf',
			lv: 3,
		},
		wanjianf_l4: {
			inherit: 'wanjianf',
			lv: 4,
		},
		wanjianf_l5: {
			inherit: 'wanjianf',
			lv: 5,
		},
		//狼烟
		langyanf: {
			trigger: {
				player: "useCard1",
			},
			forced: true,
			lv: 0,
			firstDo: true,
			//silent: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (event.card && (event.card.name == 'nanman')) {
					if (Math.ceil(Math.random() * 100) <= chance) {
						return true;
					}
				}
				return false;
			},
			content() {
				trigger.baseDamage++;
				game.log('触发了狼烟,烽火狼烟的伤害+1');
			},
		},
		langyanf_l1: {
			inherit: 'langyanf',
			lv: 1,
		},
		langyanf_l2: {
			inherit: 'langyanf',
			lv: 2,
		},
		langyanf_l3: {
			inherit: 'langyanf',
			lv: 3,
		},
		langyanf_l4: {
			inherit: 'langyanf',
			lv: 4,
		},
		langyanf_l5: {
			inherit: 'langyanf',
			lv: 5,
		},
		//医心
		yixinf: {
			shaRelated: true,
			forced: true,
			group: ["yixinf1", "yixinf2"],
		},
		yixinf1: {
			trigger: {
				player: "taoBegin",
			},
			forced: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (Math.ceil(Math.random() * 100) <= chance) {
					return true;
				}
				return false;
			},
			lv: 0,
			forced: true,
			content() {
				trigger.baseDamage++;
			},
		},
		yixinf2: {
			trigger: {
				player: "jiuBegin",
			},
			forced: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (Math.ceil(Math.random() * 100) <= chance) {
					return true;
				}
				return false;
			},
			lv: 0,
			forced: true,
			content() {
				trigger.baseDamage++;
			},
		},
		yixinf_l1: {
			inherit: 'yixinf',
			lv: 1,
		},
		yixinf_l2: {
			inherit: 'yixinf',
			lv: 2,
		},
		yixinf_l3: {
			inherit: 'yixinf',
			lv: 3,
		},
		yixinf_l4: {
			inherit: 'yixinf',
			lv: 4,
		},
		yixinf_l5: {
			inherit: 'yixinf',
			lv: 5,
		},
		//红杀盾
		hongshadunf: {
			trigger: {
				target: 'shaBegin'
			},
			lv: 0,
			forced: true,
			priority: 6,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (event.directHit && event.directHit == true) return false;
				if (event.podun && event.podun == true) return false;
				if (Math.ceil(Math.random() * 100) <= chance) {
					return (event.card.name == 'sha' && get.color(event.card) == 'red' && !event
						.player.hasSkill('ybaotou') &&
						!event
							.player.hasSkill('yxs_fanji2') &&
						!event
							.player.hasSkill('yhanbei') &&
						!event.player.hasSkill('ycike'))
				}
				return false;
			},
			content() {
				trigger.cancel();
			},
		},
		hongshadunf_l1: {
			inherit: 'hongshadunf',
			lv: 1,
		},
		hongshadunf_l2: {
			inherit: 'hongshadunf',
			lv: 2,
		},
		hongshadunf_l3: {
			inherit: 'hongshadunf',
			lv: 3,
		},
		hongshadunf_l4: {
			inherit: 'hongshadunf',
			lv: 4,
		},
		hongshadunf_l5: {
			inherit: 'hongshadunf',
			lv: 5,
		},
		shihuaf: {
			trigger: {
				player: "damageEnd",
			},
			forced: true,
			lv: 0,
			forced: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (Math.ceil(Math.random() * 100) <= chance && _status.currentPhase != player) {
					return event.card && (event.card.name == 'sha')
				}
			},
			content() {
				var evt = _status.event.getParent('phaseUse');
				if (evt && evt.name == 'phaseUse') {
					evt.skipped = true;
				}
			},
		},
		shihuaf_l1: {
			inherit: 'shihuaf',
			lv: 1,
		},
		shihuaf_l2: {
			inherit: 'shihuaf',
			lv: 2,
		},
		shihuaf_l3: {
			inherit: 'shihuaf',
			lv: 3,
		},
		shihuaf_l4: {
			inherit: 'shihuaf',
			lv: 4,
		},
		shihuaf_l5: {
			inherit: 'shihuaf',
			lv: 5,
		},
		//红御守
		hongyushouf: {
			trigger: {
				target: "shaBegin",
			},
			lv: 0,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (event.card.name == 'sha' && get.color(event.card) == 'red') {
					if (Math.ceil(Math.random() * 100) <= chance) {
						return true;
					}
				}
				return false;
			},
			forced: true,
			content() {
				player.draw(1);
			},
		},
		hongyushouf_l1: {
			inherit: 'hongyushouf',
			lv: 1,
		},
		hongyushouf_l2: {
			inherit: 'hongyushouf',
			lv: 2,
		},
		hongyushouf_l3: {
			inherit: 'hongyushouf',
			lv: 3,
		},
		hongyushouf_l4: {
			inherit: 'hongyushouf',
			lv: 4,
		},
		hongyushouf_l5: {
			inherit: 'hongyushouf',
			lv: 5,
		},
		//黑御守
		heiyushouf: {
			trigger: {
				target: "shaBegin",
			},
			lv: 0,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (event.card.name == 'sha' && get.color(event.card) == 'black') {
					if (Math.ceil(Math.random() * 100) <= chance) {
						return true;
					}
				}
				return false;
			},
			forced: true,
			content() {
				player.draw(1);
			},
		},
		heiyushouf_l1: {
			inherit: 'heiyushouf',
			lv: 1,
		},
		heiyushouf_l2: {
			inherit: 'heiyushouf',
			lv: 2,
		},
		heiyushouf_l3: {
			inherit: 'heiyushouf',
			lv: 3,
		},
		heiyushouf_l4: {
			inherit: 'heiyushouf',
			lv: 4,
		},
		heiyushouf_l5: {
			inherit: 'heiyushouf',
			lv: 5,
		},
		//卸甲
		xiejiaf: {
			trigger: {
				player: "damageEnd",
			},
			lv: 0,
			forced: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (Math.ceil(Math.random() * 100) <= chance) {
					return event.card && event.card.name == 'sha' && event.source.countCards('e');
				}
				return false;
			},
			content() {
				player.gainPlayerCard(get.prompt('xiejiaf', trigger.source), trigger.source, get
					.buttonValue, 'e')
			},
		},
		xiejiaf_l1: {
			inherit: 'xiejiaf',
			lv: 1,
		},
		xiejiaf_l2: {
			inherit: 'xiejiaf',
			lv: 2,
		},
		xiejiaf_l3: {
			inherit: 'xiejiaf',
			lv: 3,
		},
		xiejiaf_l4: {
			inherit: 'xiejiaf',
			lv: 4,
		},
		xiejiaf_l5: {
			inherit: 'xiejiaf',
			lv: 5,
		},
		//护盾
		hudunf: {
			trigger: {
				global: "gameStart",
			},
			forced: true,
			content() {
				player.changeHujia(5);
			},
		},
		hudunf_l1: {
			trigger: {
				global: "gameStart",
			},
			forced: true,
			content() {
				player.changeHujia(1);
			},
		},
		hudunf_l2: {
			trigger: {
				global: "gameStart",
			},
			forced: true,
			content() {
				player.changeHujia(2);
			},
		},
		hudunf_l3: {
			trigger: {
				global: "gameStart",
			},
			forced: true,
			content() {
				player.changeHujia(3);
			},
		},
		hudunf_l4: {
			trigger: {
				global: "gameStart",
			},
			forced: true,
			content() {
				player.changeHujia(4);
			},
		},
		hudunf_l5: {
			trigger: {
				global: "gameStart",
			},
			forced: true,
			content() {
				player.changeHujia(5);
			},
		},
		//无懈
		hongwuxief: {
			trigger: {
				player: "useCardAfter",
			},
			forced: true,
			lv: 0,
			forced: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (Math.ceil(Math.random() * 100) <= chance) {
					if (event.card.name == 'wuxie') {
						return true;
					}
				}
				return false;
			},
			content() {
				player.draw(1);
			},
		},
		//斗罗
		juedouf: {
			trigger: {
				player: "useCardAfter",
			},
			lv: 0,
			forced: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (Math.ceil(Math.random() * 100) <= chance) {
					if (event.card.name == 'juedou') {
						return true;
					}
				}
				return false;
			},
			content() {
				player.draw(1);
			},
		},
		anjianf: {
			trigger: {
				source: "damageBegin",
			},
			forced: true,
			lv: 0,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (Math.ceil(Math.random() * 100) <= chance) {
					if (event.card && event.card.name == 'juedou') {
						return true;
					}
				}
				return false;
			},
			content() {
				trigger.num++;
			},
		},
		anjianf_l1: {
			inherit: 'anjianf',
			lv: 1,
		},
		anjianf_l2: {
			inherit: 'anjianf',
			lv: 2,
		},
		anjianf_l3: {
			inherit: 'anjianf',
			lv: 3,
		},
		anjianf_l4: {
			inherit: 'anjianf',
			lv: 4,
		},
		anjianf_l5: {
			inherit: 'anjianf',
			lv: 5,
		},
		//抽薪
		chouxinf: {
			trigger: {
				player: "useCardToPlayered",
			},
			forced: true,
			lv: 0,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (Math.ceil(Math.random() * 100) <= chance) {
					if (event.card.name == 'guohe') {
						return true;
					}
				}
				return false;
			},
			logTarget: "target",
			content() {
				player.discardPlayerCard(trigger.target, get.prompt('抽薪', trigger.target));
			},
		},
		chouxinf_l1: { lv: 1 },
		chouxinf_l2: { lv: 2 },
		chouxinf_l3: { lv: 3 },
		chouxinf_l4: { lv: 4 },
		chouxinf_l5: { lv: 5 },
		//固守
		gushouf: {
			trigger: {
				player: "phaseAfter",
			},
			lv: 0,
			forced: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (player.getHistory('skipped').includes('phaseUse')) return true;
				var history = player.getHistory('useCard').concat(player.getHistory('respond'));
				for (var i = 0; i < history.length; i++) {
					if (history[i].isPhaseUsing()) return false;
				}
				return true;
			},
			content() {
				player.draw(2);
			},
		},
		//破盾
		podunf: {
			trigger: {
				player: "useCardToPlayered",
			},
			lv: 0,
			forced: true,
			check(event, player) {
				if (event.target.hasSkill('yluoyan')) return false;
				return get.attitude(player, event.target) <= 0;
			},
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (Math.ceil(Math.random() * 100) <= chance) {
					if (event.card.name == 'sha') {
						return true;
					}
				}
				return false;
			},
			logTarget: "target",
			content() {
				if (!trigger.target.hasSkill('podunf')) {
					trigger.target.addTempSkill('fengyin', 'shaBegin');
				}
			},
		},
		xushif: {
			trigger: {
				player: "useCard",
			},
			lv: 0,
			forced: true,
			filter(event, player) {
				let chance = lib.config.rethkfuyin[this.lv]
				if (event.card && (event.card.name == 'nanman' || event.card.name == 'wanjian' || event
					.card.name == 'wugu' | event.card.name == 'taoyuan')) {
					if (Math.ceil(Math.random() * 100) <= chance) {
						return true;
					}
					return false;
				}
				return false;
			},
			content() {
				player.draw('nodelay');
			},
		},
	};
	for (var i in skill) {
		lib.skill[i] = skill[i];
	};
	var translate = {
		tannangf: '探囊',
		tannangf_info: '打出【探囊取物】生效后,有79%的几率可额外再获取目标一张牌.',
		tannangf_l1: '探囊',
		tannangf_l1_info: '打出【探囊取物】生效后,有19%的几率可额外再获取目标一张牌.',
		tannangf_l2: '探囊',
		tannangf_l2_info: '打出【探囊取物】生效后,有29%的几率可额外再获取目标一张牌.',
		tannangf_l3: '探囊',
		tannangf_l3_info: '打出【探囊取物】生效后,有49%的几率可额外再获取目标一张牌.',
		tannangf_l4: '探囊',
		tannangf_l4_info: '打出【探囊取物】生效后,有69%的几率可额外再获取目标一张牌.',
		tannangf_l5: '探囊',
		tannangf_l5_info: '打出【探囊取物】生效后,有79%的几率可额外再获取目标一张牌.',
		wanjianf: '万箭',
		wanjianf_info: '打出【万箭齐发】时,有79%的几率威力+1(打出【万箭齐发】时进行判定,若生效则威力+1,但并不影响其他玩家打出【闪】来躲避伤害).',
		wanjianf_l1: '万箭',
		wanjianf_l1_info: '打出【万箭齐发】时,有19%的几率威力+1(打出【万箭齐发】时进行判定,若生效则威力+1,但并不影响其他玩家打出【闪】来躲避伤害).',
		wanjianf_l2: '万箭',
		wanjianf_l2_info: '打出【万箭齐发】时,有29%的几率威力+1(打出【万箭齐发】时进行判定,若生效则威力+1,但并不影响其他玩家打出【闪】来躲避伤害).',
		wanjianf_l3: '万箭',
		wanjianf_l3_info: '打出【万箭齐发】时,有49%的几率威力+1(打出【万箭齐发】时进行判定,若生效则威力+1,但并不影响其他玩家打出【闪】来躲避伤害).',
		wanjianf_l4: '万箭',
		wanjianf_l4_info: '打出【万箭齐发】时,有69%的几率威力+1(打出【万箭齐发】时进行判定,若生效则威力+1,但并不影响其他玩家打出【闪】来躲避伤害).',
		wanjianf_l5: '万箭',
		wanjianf_l5_info: '打出【万箭齐发】时,有79%的几率威力+1(打出【万箭齐发】时进行判定,若生效则威力+1,但并不影响其他玩家打出【闪】来躲避伤害).',
		langyanf: '狼烟',
		langyanf_info: '打出【烽火狼烟】时,有79%的几率威力+1(打出【烽火狼烟】时进行判定,若生效则威力+1,但并不影响其他玩家打出【杀】来躲避伤害).',
		langyanf_l1: '狼烟',
		langyanf_l1_info: '打出【烽火狼烟】时,有19%的几率威力+1(打出【烽火狼烟】时进行判定,若生效则威力+1,但并不影响其他玩家打出【杀】来躲避伤害).',
		langyanf_l2: '狼烟',
		langyanf_l2_info: '打出【烽火狼烟】时,有29%的几率威力+1(打出【烽火狼烟】时进行判定,若生效则威力+1,但并不影响其他玩家打出【杀】来躲避伤害).',
		langyanf_l3: '狼烟',
		langyanf_l3_info: '打出【烽火狼烟】时,有49%的几率威力+1(打出【烽火狼烟】时进行判定,若生效则威力+1,但并不影响其他玩家打出【杀】来躲避伤害).',
		langyanf_l4: '狼烟',
		langyanf_l4_info: '打出【烽火狼烟】时,有69%的几率威力+1(打出【烽火狼烟】时进行判定,若生效则威力+1,但并不影响其他玩家打出【杀】来躲避伤害).',
		langyanf_l5: '狼烟',
		langyanf_l5_info: '打出【烽火狼烟】时,有79%的几率威力+1(打出【烽火狼烟】时进行判定,若生效则威力+1,但并不影响其他玩家打出【杀】来躲避伤害).',
		tanzhishouf: '贪手',
		tanzhishouf_info: '摸牌阶段进行判定,有79%的几率可以从牌堆中额外摸取1张牌.',
		tanzhishouf_l1: '贪手',
		tanzhishouf_l1_info: '摸牌阶段进行判定,有19%的几率可以从牌堆中额外摸取1张牌.',
		tanzhishouf_l2: '贪手',
		tanzhishouf_l2_info: '摸牌阶段进行判定,有29%的几率可以从牌堆中额外摸取1张牌.',
		tanzhishouf_l3: '贪手',
		tanzhishouf_l3_info: '摸牌阶段进行判定,有49%的几率可以从牌堆中额外摸取1张牌.',
		tanzhishouf_l4: '贪手',
		tanzhishouf_l4_info: '摸牌阶段进行判定,有69%的几率可以从牌堆中额外摸取1张牌.',
		tanzhishouf_l5: '贪手',
		tanzhishouf_l5_info: '摸牌阶段进行判定,有79%的几率可以从牌堆中额外摸取1张牌.',
		shangzhitanf: '伤贪',
		shangzhitanf_info: '被【杀】掉血后,有79%的几率从牌堆抽取1张牌.',
		shangzhitanf_l1: '伤贪',
		shangzhitanf_l1_info: '被【杀】掉血后,有19%的几率从牌堆抽取1张牌.',
		shangzhitanf_l2: '伤贪',
		shangzhitanf_l2_info: '被【杀】掉血后,有29%的几率从牌堆抽取1张牌.',
		shangzhitanf_l3: '伤贪',
		shangzhitanf_l3_info: '被【杀】掉血后,有49%的几率从牌堆抽取1张牌.',
		shangzhitanf_l4: '伤贪',
		shangzhitanf_l4_info: '被【杀】掉血后,有69%的几率从牌堆抽取1张牌.',
		shangzhitanf_l5: '伤贪',
		shangzhitanf_l5_info: '被【杀】掉血后,有79%的几率从牌堆抽取1张牌.',
		jingzhunf: '精准',
		jingzhunf_info: '每打出1张【杀】且指定目标后,有100%的几率让目标无法使用【闪】躲避(仅仅是无法使用【闪】躲避,其他躲避方式不受影响)',
		jingzhunf_l1: '精准',
		jingzhunf_l1_info: '每打出1张【杀】且指定目标后,有19%的几率让目标无法使用【闪】躲避(仅仅是无法使用【闪】躲避,其他躲避方式不受影响)',
		jingzhunf_l2: '精准',
		jingzhunf_l2_info: '每打出1张【杀】且指定目标后,有29%的几率让目标无法使用【闪】躲避(仅仅是无法使用【闪】躲避,其他躲避方式不受影响)',
		jingzhunf_l3: '精准',
		jingzhunf_l3_info: '每打出1张【杀】且指定目标后,有49%的几率让目标无法使用【闪】躲避(仅仅是无法使用【闪】躲避,其他躲避方式不受影响)',
		jingzhunf_l4: '精准',
		jingzhunf_l4_info: '每打出1张【杀】且指定目标后,有69%的几率让目标无法使用【闪】躲避(仅仅是无法使用【闪】躲避,其他躲避方式不受影响)',
		jingzhunf_l5: '精准',
		jingzhunf_l5_info: '每打出1张【杀】且指定目标后,有79%的几率让目标无法使用【闪】躲避(仅仅是无法使用【闪】躲避,其他躲避方式不受影响)',
		yixinf: '医心',
		yixinf1: '医心',
		yixinf2: '医心',
		yixinf_info: '打出【药】或【酒】回复体力时,有79%的几率额外回复一点体力.',
		yixinf_l1: '医心',
		yixinf_l1_info: '打出【药】或【酒】回复体力时,有19%的几率额外回复一点体力.',
		yixinf_l2: '医心',
		yixinf_l2_info: '打出【药】或【酒】回复体力时,有29%的几率额外回复一点体力.',
		yixinf_l3: '医心',
		yixinf_l3_info: '打出【药】或【酒】回复体力时,有49%的几率额外回复一点体力.',
		yixinf_l4: '医心',
		yixinf_l4_info: '打出【药】或【酒】回复体力时,有69%的几率额外回复一点体力.',
		yixinf_l5: '医心',
		yixinf_l5_info: '打出【药】或【酒】回复体力时,有79%的几率额外回复一点体力.',
		hongshadunf: '红盾',
		hongshadunf_info: '当成为红色【杀】的目标时,有79%的几率免疫该【杀】.',
		hongshadunf_l1: '红盾',
		hongshadunf_l1_info: '当成为红色【杀】的目标时,有19%的几率免疫该【杀】.',
		hongshadunf_l2: '红盾',
		hongshadunf_l2_info: '当成为红色【杀】的目标时,有29%的几率免疫该【杀】.',
		hongshadunf_l3: '红盾',
		hongshadunf_l3_info: '当成为红色【杀】的目标时,有49%的几率免疫该【杀】.',
		hongshadunf_l4: '红盾',
		hongshadunf_l4_info: '当成为红色【杀】的目标时,有69%的几率免疫该【杀】.',
		hongshadunf_l5: '红盾',
		hongshadunf_l5_info: '当成为红色【杀】的目标时,有79%的几率免疫该【杀】.',
		heishadunf: '黑盾',
		heishadunf_info: '当成为黑色【杀】的目标时,有79%的几率免疫该【杀】.',
		heishadunf_l1: '黑盾',
		heishadunf_l1_info: '当成为黑色【杀】的目标时,有19%的几率免疫该【杀】.',
		heishadunf_l2: '黑盾',
		heishadunf_l2_info: '当成为黑色【杀】的目标时,有29%的几率免疫该【杀】.',
		heishadunf_l3: '黑盾',
		heishadunf_l3_info: '当成为黑色【杀】的目标时,有49%的几率免疫该【杀】.',
		heishadunf_l4: '黑盾',
		heishadunf_l4_info: '当成为黑色【杀】的目标时,有69%的几率免疫该【杀】.',
		heishadunf_l5: '黑盾',
		heishadunf_l5_info: '当成为黑色【杀】的目标时,有79%的几率免疫该【杀】.',
		shazhitanf: "杀贪",
		shazhitanf_info: "打出【杀】使目标掉血后,有100%的几率从牌堆抽取1张牌.",
		shazhitanf_l1: "杀贪",
		shazhitanf_l1_info: "打出【杀】使目标掉血后,有19%的几率从牌堆抽取1张牌.",
		shazhitanf_l2: "杀贪",
		shazhitanf_l2_info: "打出【杀】使目标掉血后,有29%的几率从牌堆抽取1张牌.",
		shazhitanf_l3: "杀贪",
		shazhitanf_l3_info: "打出【杀】使目标掉血后,有49%的几率从牌堆抽取1张牌.",
		shazhitanf_l4: "杀贪",
		shazhitanf_l4_info: "打出【杀】使目标掉血后,有69%的几率从牌堆抽取1张牌.",
		shazhitanf_l5: "杀贪",
		shazhitanf_l5_info: "打出【杀】使目标掉血后,有79%的几率从牌堆抽取1张牌.",
		qianghuaf: '强化',
		qianghuaf_info: '打出【杀】使目标掉血后,有79%的几率给目标追加1点血的伤害.',
		qianghuaf_l1: '强化',
		qianghuaf_l1_info: '打出【杀】使目标掉血后,有19%的几率给目标追加1点血的伤害.',
		qianghuaf_l2: '强化',
		qianghuaf_l2_info: '打出【杀】使目标掉血后,有29%的几率给目标追加1点血的伤害.',
		qianghuaf_l3: '强化',
		qianghuaf_l3_info: '打出【杀】使目标掉血后,有49%的几率给目标追加1点血的伤害.',
		qianghuaf_l4: '强化',
		qianghuaf_l4_info: '打出【杀】使目标掉血后,有69%的几率给目标追加1点血的伤害.',
		qianghuaf_l5: '强化',
		qianghuaf_l5_info: '打出【杀】使目标掉血后,有79%的几率给目标追加1点血的伤害.',
		qinglingf: '轻灵',
		qinglingf_info: '打出【闪】后,有79%的几率额外摸一张牌.',
		qinglingf_l1: '轻灵',
		qinglingf_l1_info: '打出【闪】后,有79%的几率额外摸一张牌.',
		qinglingf_l2: '轻灵',
		qinglingf_l2_info: '打出【闪】后,有79%的几率额外摸一张牌.',
		qinglingf_l3: '轻灵',
		qinglingf_l3_info: '打出【闪】后,有79%的几率额外摸一张牌.',
		qinglingf_l4: '轻灵',
		qinglingf_l4_info: '打出【闪】后,有79%的几率额外摸一张牌.',
		qinglingf_l5: '轻灵',
		qinglingf_l5_info: '打出【闪】后,有79%的几率额外摸一张牌.',
		xixuef: '吸血',
		xixuef_info: '打出【杀】使目标掉血后,有79%的几率回复1点血(满血则回血效果无效)',
		xixuef_l1: '吸血',
		xixuef_l1_info: '打出【杀】使目标掉血后,有19%的几率回复1点血(满血则回血效果无效)',
		xixuef_l2: '吸血',
		xixuef_l2_info: '打出【杀】使目标掉血后,有29%的几率回复1点血(满血则回血效果无效)',
		xixuef_l3: '吸血',
		xixuef_l3_info: '打出【杀】使目标掉血后,有49%的几率回复1点血(满血则回血效果无效)',
		xixuef_l4: '吸血',
		xixuef_l4_info: '打出【杀】使目标掉血后,有69%的几率回复1点血(满血则回血效果无效)',
		xixuef_l5: '吸血',
		xixuef_l5_info: '打出【杀】使目标掉血后,有79%的几率回复1点血(满血则回血效果无效)',
		yqingdian: '庆典',
		yqingdian_info: '出牌阶段,你可以将一张♠️️手牌当作手捧雷打出.',
		yshinian: '十年',
		yshinian_info: '庆祝英雄杀十周年庆典,没有技能-但很萌!',
		shazhixief: '杀卸',
		shazhixief_info: '使用【杀】命中后,有79%的概率卸掉对方一张装备牌.',
		shazhixief_l1: '杀卸',
		shazhixief_l1_info: '使用【杀】命中后,有19%的概率卸掉对方一张装备牌.',
		shazhixief_l2: '杀卸',
		shazhixief_l2_info: '使用【杀】命中后,有29%的概率卸掉对方一张装备牌.',
		shazhixief_l3: '杀卸',
		shazhixief_l3_info: '使用【杀】命中后,有49%的概率卸掉对方一张装备牌.',
		shazhixief_l4: '杀卸',
		shazhixief_l4_info: '使用【杀】命中后,有69%的概率卸掉对方一张装备牌.',
		shazhixief_l5: '杀卸',
		shazhixief_l5_info: '使用【杀】命中后,有79%的概率卸掉对方一张装备牌.',
		shangzhixief: '伤卸',
		shangzhixief_info: '被【杀】命中后,有79%的概率卸掉对方一张装备牌.',
		shangzhixief_l1: '伤卸',
		shangzhixief_l1_info: '被【杀】命中后,有19%的概率卸掉对方一张装备牌.',
		shangzhixief_l2: '伤卸',
		shangzhixief_l2_info: '被【杀】命中后,有29%的概率卸掉对方一张装备牌.',
		shangzhixief_l3: '伤卸',
		shangzhixief_l3_info: '被【杀】命中后,有49%的概率卸掉对方一张装备牌.',
		shangzhixief_l4: '伤卸',
		shangzhixief_l4_info: '被【杀】命中后,有69%的概率卸掉对方一张装备牌.',
		shangzhixief_l5: '伤卸',
		shangzhixief_l5_info: '被【杀】命中后,有79%的概率卸掉对方一张装备牌.',
		yshenqiang: '身强',
		yshenqiang_info: '体力上限+5.',
		yshenqiang_l1: '身强',
		yshenqiang_l1_info: '体力上限+1.',
		yshenqiang_l2: '身强',
		yshenqiang_l2_info: '体力上限+2.',
		yshenqiang_l3: '身强',
		yshenqiang_l3_info: '体力上限+3.',
		yshenqiang_l4: '身强',
		yshenqiang_l4_info: '体力上限+4.',
		yshenqiang_l5: '身强',
		yshenqiang_l5_info: '体力上限+5.',
		yyunchou: '运筹',
		yyunchou_info: '手牌上限+5.',
		yyunchou_l1: '运筹',
		yyunchou_l1_info: '手牌上限+1.',
		yyunchou_l2: '运筹',
		yyunchou_l2_info: '手牌上限+2.',
		yyunchou_l3: '运筹',
		yyunchou_l3_info: '手牌上限+3.',
		yyunchou_l4: '运筹',
		yyunchou_l4_info: '手牌上限+4.',
		yyunchou_l5: '运筹',
		yyunchou_l5_info: '手牌上限+5.',
		ychuanyang: '穿扬',
		ychuanyang_info: '攻击距离+5',
		ychuanyang_l1: '穿扬',
		ychuanyang_l1_info: '攻击距离+1',
		ychuanyang_l2: '穿扬',
		ychuanyang_l2_info: '攻击距离+2',
		ychuanyang_l3: '穿扬',
		ychuanyang_l3_info: '攻击距离+3',
		ychuanyang_l4: '穿扬',
		ychuanyang_l4_info: '攻击距离+3',
		ychuanyang_l5: '穿扬',
		ychuanyang_l5_info: '攻击距离+5',
		shangzhixiaof: '伤削',
		shangzhixiaof_info: '被【杀】命中后,有79%的概率卸掉对方一张手牌.',
		shangzhixiaof_l1: '伤削',
		shangzhixiaof_l1_info: '被【杀】命中后,有19%的概率卸掉对方一张手牌.',
		shangzhixiaof_l2: '伤削',
		shangzhixiaof_l2_info: '被【杀】命中后,有29%的概率卸掉对方一张手牌.',
		shangzhixiaof_l3: '伤削',
		shangzhixiaof_l3_info: '被【杀】命中后,有49%的概率卸掉对方一张手牌.',
		shangzhixiaof_l4: '伤削',
		shangzhixiaof_l4_info: '被【杀】命中后,有69%的概率卸掉对方一张手牌.',
		shangzhixiaof_l5: '伤削',
		shangzhixiaof_l5_info: '被【杀】命中后,有79%的概率卸掉对方一张手牌.',
		shihuaf: '石化',
		shihuaf_info: '被[杀]掉血后,有79%的几率让对方结束出牌阶段.',
		shihuaf_l1: '石化',
		shihuaf_l1_info: '被[杀]掉血后,有19%的几率让对方结束出牌阶段.',
		shihuaf_l2: '石化',
		shihuaf_l2_info: '被[杀]掉血后,有29%的几率让对方结束出牌阶段.',
		shihuaf_l3: '石化',
		shihuaf_l3_info: '被[杀]掉血后,有49%的几率让对方结束出牌阶段.',
		shihuaf_l4: '石化',
		shihuaf_l4_info: '被[杀]掉血后,有69%的几率让对方结束出牌阶段.',
		shihuaf_l5: '石化',
		shihuaf_l5_info: '被[杀]掉血后,有79%的几率让对方结束出牌阶段.',
		shengyouf: '生有',
		shengyouf_info: '打出[无中生有]后,有79%的几率额外摸两张牌.',
		shengyouf_l1: '生有',
		shengyouf_l1_info: '打出[无中生有]后,有19%的几率额外摸两张牌.',
		shengyouf_l2: '生有',
		shengyouf_l2_info: '打出[无中生有]后,有29%的几率额外摸两张牌.',
		shengyouf_l3: '生有',
		shengyouf_l3_info: '打出[无中生有]后,有49%的几率额外摸两张牌.',
		shengyouf_l4: '生有',
		shengyouf_l4_info: '打出[无中生有]后,有69%的几率额外摸两张牌.',
		shengyouf_l5: '生有',
		shengyouf_l5_info: '打出[无中生有]后,有79%的几率额外摸两张牌.',
		hongyushouf: '红御守',
		hongyushouf_info: '当你成为其他角色红色的【杀】指定目标后,有79%的几率摸一张牌.',
		hongyushouf_l1: '红御守',
		hongyushouf_l1_info: '当你成为其他角色红色的【杀】指定目标后,有19%的几率摸一张牌.',
		hongyushouf_l2: '红御守',
		hongyushouf_l2_info: '当你成为其他角色红色的【杀】指定目标后,有29%的几率摸一张牌.',
		hongyushouf_l3: '红御守',
		hongyushouf_l3_info: '当你成为其他角色红色的【杀】指定目标后,有49%的几率摸一张牌.',
		hongyushouf_l4: '红御守',
		hongyushouf_l4_info: '当你成为其他角色红色的【杀】指定目标后,有69%的几率摸一张牌.',
		hongyushouf_l5: '红御守',
		hongyushouf_l5_info: '当你成为其他角色红色的【杀】指定目标后,有79%的几率摸一张牌.',
		heiyushouf: '黑御守',
		heiyushouf_info: '当你成为其他角色黑色的【杀】指定目标后,有79%的几率摸一张牌.',
		heiyushouf_l1: '黑御守',
		heiyushouf_l1_info: '当你成为其他角色黑色的【杀】指定目标后,有19%的几率摸一张牌.',
		heiyushouf_l2: '黑御守',
		heiyushouf_l2_info: '当你成为其他角色黑色的【杀】指定目标后,有29%的几率摸一张牌.',
		heiyushouf_l3: '黑御守',
		heiyushouf_l3_info: '当你成为其他角色黑色的【杀】指定目标后,有49%的几率摸一张牌.',
		heiyushouf_l4: '黑御守',
		heiyushouf_l4_info: '当你成为其他角色黑色的【杀】指定目标后,有69%的几率摸一张牌.',
		heiyushouf_l5: '黑御守',
		heiyushouf_l5_info: '当你成为其他角色黑色的【杀】指定目标后,有79%的几率摸一张牌.',
		shangzhichouf: '伤之仇',
		shangzhichouf_info: '当你被其他角色杀掉血后,伤害来源有79%几率受到1点伤害.',
		shangzhichouf_l1: '伤之仇',
		shangzhichouf_l1_info: '当你被其他角色杀掉血后,伤害来源有19%几率受到1点伤害.',
		shangzhichouf_l2: '伤之仇',
		shangzhichouf_l2_info: '当你被其他角色杀掉血后,伤害来源有29%几率受到1点伤害.',
		shangzhichouf_l3: '伤之仇',
		shangzhichouf_l3_info: '当你被其他角色杀掉血后,伤害来源有49%几率受到1点伤害.',
		shangzhichouf_l4: '伤之仇',
		shangzhichouf_l4_info: '当你被其他角色杀掉血后,伤害来源有69%几率受到1点伤害.',
		shangzhichouf_l5: '伤之仇',
		shangzhichouf_l5_info: '当你被其他角色杀掉血后,伤害来源有79%几率受到1点伤害.',
		taotief: '饕餮',
		taotief_info: '你有100%的几率,手牌上限视为20.',
		taotief_l1: '饕餮',
		taotief_l1_info: '你有19%的几率,手牌上限视为20.',
		taotief_l2: '饕餮',
		taotief_l2_info: '你有29%的几率,手牌上限视为20.',
		taotief_l3: '饕餮',
		taotief_l3_info: '你有49%的几率,手牌上限视为20.',
		taotief_l4: '饕餮',
		taotief_l4_info: '你有69%的几率,手牌上限视为20.',
		taotief_l5: '饕餮',
		taotief_l5_info: '你有79%的几率,手牌上限视为20.',
		zgldd: '虎影',
		zgldd2: '虎影',
		zgldd_fu: '辅印失效',
		zgldd_zhu: '主印失效',
		zgldd_info: '锁定技,回合开始时,你进行判定,若判定结果为红色,你令所有敌方角色主印失效直到你的下个回合开始.若判定结果为黑色,你令所有敌方角色辅印失效直到你的下个回合开始.',
		xushif: '虚实',
		xushif_info: '你打出【烽火狼烟】、【万箭齐发】、【休养生息】、【五谷丰登】时,有79%几率摸一张牌.',
		xiejiaf: '卸甲',
		xiejiaf_info: '当你被其他角色杀掉血后,你有79%几率获得伤害来源手牌区以外一张牌(无牌则不生效).',
		xiejiaf_l1: '卸甲',
		xiejiaf_l1_info: '当你被其他角色杀掉血后,你有19%几率获得伤害来源手牌区以外一张牌(无牌则不生效).',
		xiejiaf_l2: '卸甲',
		xiejiaf_l2_info: '当你被其他角色杀掉血后,你有29%几率获得伤害来源手牌区以外一张牌(无牌则不生效).',
		xiejiaf_l3: '卸甲',
		xiejiaf_l3_info: '当你被其他角色杀掉血后,你有49%几率获得伤害来源手牌区以外一张牌(无牌则不生效).',
		xiejiaf_l4: '卸甲',
		xiejiaf_l4_info: '当你被其他角色杀掉血后,你有69%几率获得伤害来源手牌区以外一张牌(无牌则不生效).',
		xiejiaf_l5: '卸甲',
		xiejiaf_l5_info: '当你被其他角色杀掉血后,你有79%几率获得伤害来源手牌区以外一张牌(无牌则不生效).',
		hudunf: '护盾',
		hudunf_info: '游戏开始时,你获得一个护盾,该护盾可以抵消5点伤害.',
		hudunf_l1: '护盾',
		hudunf_l1_info: '游戏开始时,你获得一个护盾,该护盾可以抵消1点伤害.',
		hudunf_l2: '护盾',
		hudunf_l2_info: '游戏开始时,你获得一个护盾,该护盾可以抵消2点伤害.',
		hudunf_l3: '护盾',
		hudunf_l3_info: '游戏开始时,你获得一个护盾,该护盾可以抵消3点伤害.',
		hudunf_l4: '护盾',
		hudunf_l4_info: '游戏开始时,你获得一个护盾,该护盾可以抵消4点伤害.',
		hudunf_l5: '护盾',
		hudunf_l5_info: '游戏开始时,你获得一个护盾,该护盾可以抵消5点伤害.',
		hongwuxief: '无懈',
		hongwuxief_info: '你使用或打出【无懈可击】时,摸1张牌.',
		juedouf: '斗罗',
		juedouf_info: '当你打出一张【决斗】后,摸1张牌.',
		anjianf: '暗箭',
		anjianf_info: '你打出的【决斗】伤害+1(不影响其他角色以其他方式躲避伤害),79%概率',
		anjianf_l1: '暗箭',
		anjianf_l1_info: '你打出的【决斗】伤害+1(不影响其他角色以其他方式躲避伤害),19%概率',
		anjianf_l2: '暗箭',
		anjianf_l2_info: '你打出的【决斗】伤害+1(不影响其他角色以其他方式躲避伤害),29%概率',
		anjianf_l3: '暗箭',
		anjianf_l3_info: '你打出的【决斗】伤害+1(不影响其他角色以其他方式躲避伤害),49%概率',
		anjianf_l4: '暗箭',
		anjianf_l4_info: '你打出的【决斗】伤害+1(不影响其他角色以其他方式躲避伤害),69%概率',
		anjianf_l5: '暗箭',
		anjianf_l5_info: '你打出的【决斗】伤害+1(不影响其他角色以其他方式躲避伤害),79%概率',
		chouxinf: '抽薪',
		chouxinf_info: '你对其他角色使用【釜底抽薪】时,有79%几率额外弃掉目标1张牌.',
		gushouf: '固守',
		gushouf_info: '若出牌阶段你没有打出任意一张牌,则回合结束时你摸2张牌.',
		podunf: '破盾',
		podunf_info: '你对其他角色打出【杀】后,有79%几率使对方红黑盾无效.',
		yzhanbu: '占卜',
		yzhanbu_info: '准备阶段,你可以观看牌堆顶的x张牌,并将其以任意顺序置于牌堆项或牌堆底,x为存活角色个数且不超过5',
		mopaif: '天赐',
		mopaif_info: '在摸牌阶段有10%的几率获得10张牌,否则弃3张手牌.',
		baonengf: '爆能',
		baonengf_info: '回合开始有10%的几率回复3点血量,否则流失1点血量.',
		yixianf: '医仙',
		yixianf_info: '打出【药】或【酒】时,有79%几率从牌堆摸一张牌.',
		pozhouf: '破咒',
		pozhouf_info: '你打出【杀】时使目标掉血后,有100%几率让对方辅印无法生效.',
		pozhouf_l1: '破咒',
		pozhouf_l1_info: '你打出【杀】时使目标掉血后,有19%几率让对方辅印无法生效.',
		pozhouf_l2: '破咒',
		pozhouf_l2_info: '你打出【杀】时使目标掉血后,有29%几率让对方辅印无法生效.',
		pozhouf_l3: '破咒',
		pozhouf_l3_info: '你打出【杀】时使目标掉血后,有49%几率让对方辅印无法生效.',
		pozhouf_l4: '破咒',
		pozhouf_l4_info: '你打出【杀】时使目标掉血后,有69%几率让对方辅印无法生效.',
		pozhouf_l5: '破咒',
		pozhouf_l5_info: '你打出【杀】时使目标掉血后,有79%几率让对方辅印无法生效.',
		ychuanqi_fengyan: "凤炎",
		ychuanqi_fengyan_info: "被动技,每当你打出群体锦囊时,结算前先令敌方角色受到一点伤害.",
		ychuanqi_xuanming: "玄冥",
		ychuanqi_xuanming_info: "被动技,回合外,敌方角色每获得一张牌就受到一点伤害.",
		yshenshe: '神射',
		yshenshe_info: '锁定技,你使用【杀】无距离限制.',
		ychongfeng: '冲锋',
		ychongfeng_info: '锁定技,你使用【杀】可额外指定一个目标(需在攻击范围内).',
		cqjuexing: '觉醒',
		cqjuexing_info: '己方回合结束可回复一点血量',
		yzhanshen: '战神',
		yzhanshen_info: '你可以将一张黑色花色的牌(手牌或装备区的牌)当作[杀]使用或打出',
		nmbi: '龙怒',
		nmbi_info: '你使用【杀】指定目标后,目标角色在结算前先随机弃掉一张手牌.',
		yzhongjia: '重甲',
		yzhongjia_info: '你受到伤害仅损失1点血量.',
		yjiushen: '酒神',
		yjiushen_info: '你可以将黑色手牌当作【酒】使用.',
		ydanji: '单骑',
		ydanji_info: '默认装备进攻马.',
	};
	for (var i in translate) {
		lib.translate[i] = translate[i];
	};
})
'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqhMagia_qiyuan: {
				audio: 3,
				dutySkill: true,
				mark: true,
				marktext: '圆',
				intro: {
					name: '圆环之理',
					mark(dialog, storage, player) {
						dialog.content.style['overflow-x'] = 'visible';
						if (!storage) storage = {};
						let round = storage.round || [];
						let list = storage.homura || [];
						if (!round.length) return '(圆环之理尚不存在)';
						let core = document.createElement('div');
						core.style.width = '0';
						let centerX = -15;
						let centerY = 80;
						let radius = 80;
						let radian = (Math.PI * 2) / round.length;
						let fulllist = ['Ａ', '２', '３', '４', '５', '６', '７', '８', '９', '10', 'Ｊ', 'Ｑ', 'Ｋ'];
						let drawed = player.storage.scqhMagia_qiyuan_draw || [];
						for (let i = 0; i < round.length; i++) {
							let td = document.createElement('div');
							let color = '';
							if (list[0] == round[i]) {
								color = 'red';
							} else if (drawed.includes(round[i])) {
								color = '#FFD700';
							} else if (list.includes(round[i])) {
								color = '#70DB93';
							}
							td.innerHTML = '<font color=' + color + '>[' + fulllist[round[i] - 1] + ']</font>';
							td.style.position = 'absolute';
							core.appendChild(td);
							td.style.left = centerX + radius * Math.sin(radian * i) + 'px';
							td.style.top = centerY - radius * Math.cos(radian * i) + 'px';
						}
						dialog.content.appendChild(core);
					},
					markcount(storage, player) {
						if (!storage) storage = {};
						let list = storage.homura || [];
						return list.length + '/13';
					},
				},
				init(player, skill) {
					let list = [];
					for (let i = 1; i <= 13; i++) list.push(i);
					list.randomSort();
					player.storage[skill] = {
						round: list,
					};
					let str = '#y';
					for (let i = 0; i < 13; i++) {
						str += get.strNumber(list[i]);
						if (i != 12) str += ',';
					}
					game.log(player, '将', '#y「圆环之理」', '赋值为', str);
				},
				filterNumber(player, num) {
					let skill = 'scqhMagia_qiyuan';
					let storage = player.storage[skill] || {};
					let list1 = storage.round || [];
					let list2 = storage.homura || [];
					if (!list1.includes(num)) return false;
					if (!list2.length) return true;
					if (list2.includes(num)) return false;
					let madoka = list1.indexOf(num);
					for (let i of list2) {
						let homura = list1.indexOf(i);
						let dist = Math.abs(madoka - homura);
						if (dist == 1 || dist == list1.length - 1) return true;
					}
					return false;
				},
				map(player, number) {
					let map = {};
					map.nohas = false;
					map.draw = false;
					let skill = 'scqhMagia_qiyuan';
					let skill2 = skill + '_draw';
					let storage = player.storage[skill] || {};
					let storageSub = storage.homura || [];
					let storageDraw = player.storage[skill2] || [];
					let filterNumber = lib.skill[skill].filterNumber(player, number);
					if (filterNumber) map.nohas = true;
					if (map.nohas || storageSub.includes(number)) {
						if (!storageDraw.includes(number)) {
							map.draw = true;
						}
					}
					return map;
				},
				forced: true,
				trigger: {
					global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter', 'equipAfter'],
				},
				filter(trigger, player) {
					let skill = 'scqhMagia_qiyuan';
					let cards = trigger.getd() || [];
					for (let card of cards) {
						let number = card.number;
						let map = lib.skill[skill].map(player, number);
						if (map.nohas || map.draw) return true;
					}
					return false;
				},
				content: function () {
					'step 0';
					let list = {};
					list.nohas = [];
					list.draw = [];
					let skill = 'scqhMagia_qiyuan';
					let skill2 = skill + '_draw';
					player.addTempSkill(skill2, 'roundStart');
					let storage = player.storage[skill] || {};
					if (!storage.round) storage.round = [];
					if (!storage.homura) storage.homura = [];
					let storageDraw = player.storage[skill2] || [];
					let cards = trigger.getd() || [];
					for (let card of cards) {
						let number = card.number;
						let map = lib.skill[skill].map(player, number);
						if (map.nohas) {
							list.nohas.add(number);
							storage.homura.add(number);
							player.storage[skill] = storage;
						}
						if (map.draw) {
							list.draw.add(number);
							storageDraw.add(number);
							player.storage[skill2] = storageDraw;
						}
					}
					if (list.nohas.length) {
						game.log(player, '将', '#y' + list.nohas, '记录为', '#g圆环之弧');
						player.gainMaxHp(list.nohas.length);
						player.recover(list.nohas.length);
						player.markSkill(event.name);
					}
					if (list.draw.length) {
						player.draw(list.draw.length);
					}
					event.numOne = storage.homura.length || 0;
					event.numTwo = storage.round.length || 0;
					('step 1');
					if (event.numOne && event.numTwo && event.numOne == event.numTwo) {
						player.awakenSkill('scqhMagia_qiyuan');
						player.popup('使命成功');
						game.log(player, '的', '#g【祈愿】', '使命成功');
					} else event.finish();
					('step 2');
					var winners = player.getFriends();
					game.over(player == game.me || winners.includes(game.me));
				},
				mod: {
					maxHandcard(player, num) {
						let skill = 'scqhMagia_qiyuan';
						let skill2 = skill + '_draw';
						let storage = player.storage[skill] || {};
						let storageDraw = player.storage[skill2] || [];
						let storageSub = storage.homura || [];
						let round = storage.round || [];
						let list = [];
						for (let i = 0; i < round.length; i++) {
							if (!storageSub.includes(round[i])) continue;
							list.add(round[i]);
							if (round[i - 1]) list.add(round[i - 1]);
							if (round[i + 1]) list.add(round[i + 1]);
							let num = round.length - 1;
							if (i == 0) list.add(round[num]);
							if (i == num) list.add(round[0]);
						}
						list.removeArray(storageDraw);
						player.removeGaintag(skill);
						player.getCards('h', function (card) {
							let numc = card.number;
							if (list.includes(numc)) player.addGaintag(card, skill);
						});
					},
				},
				group: [
					'scqhMagia_qiyuan_fail',
				],
				subSkill: {
					draw: {
						forced: true,
						charlotte: true,
					},
					achieve: {
						forced: true,
						charlotte: true,
						content() {
							let music = `extension/萌将坛/audio/acg/鹿目圆/またあした.mp3`;
							if (ui.backgroundMusic.src != music) {
								lib.config.background_music = 'music_custom';
								lib.config.background_music_src = ui.backgroundMusic.src = music;
							}
							let storage = player.storage.scqhMagia_qiyuan || {};
							let homura = storage.homura || [];
							let round = storage.round || [];
							if (homura.length == round.length) {
							}
						},
					},
					fail: {
						forced: true,
						trigger: {
							player: 'dying',
						},
						content() {
							game.log(player, '的', '#g【祈愿】', '使命失败');
							player.popup('使命失败');
							player.awakenSkill('scqhMagia_qiyuan');
						},
						_priority: 0,
					},
				},
				_priority: 0,
			},
			scqhMagia_huakai: {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				position: 'h',
				filterCard: true,
				selectCard: -1,
				check(card) {
					return 6 - get.value(card);
				},
				content() {
					player.draw(cards.length);
					player.addTempSkill('scqhMagia_huakai_dist');
					player.addMark('scqhMagia_huakai_dist', cards.length, false);
				},
				subSkill: {
					dist: {
						charlotte: true,
						mod: {
							attackRange(player, num) {
								var mark = player.countMark('scqhMagia_huakai_dist');
								if (mark && player.hasSkill('scqhMagia_huakai')) return num + mark;
							},
						},
						intro: {
							content: '#层',
						},
						forced: true,
						trigger: {
							player: 'useCard',
						},
						filter(trigger, player) {
							var mark = player.countMark('scqhMagia_huakai_dist');
							if (!mark || !player.hasSkill('scqhMagia_huakai')) return false;
							var info = get.info(trigger.card, false);
							if (info.allowMultiple == false) return false;
							if (trigger.card.name != 'sha' && info.type != 'trick') return false;
							if (trigger.targets && !info.multitarget) {
								var has = game.hasPlayer(function (current) {
									if (trigger.targets.includes(current)) return false;
									if (!lib.filter.targetInRange(trigger.card, player, current)) return false;
									if (!lib.filter.targetEnabled2(trigger.card, player, current)) return false;
									return true;
								});
								if (has) return true;
							}
							return false;
						},
						content() {
							'step 0';
							var has = game.filterPlayer(function (current) {
								if (trigger.targets.includes(current)) return false;
								if (!lib.filter.targetInRange(trigger.card, player, current)) return false;
								if (!lib.filter.targetEnabled2(trigger.card, player, current)) return false;
								return true;
							});
							var next = player.chooseTarget(function (card, player, target) {
								var targets = _status.event.targets || [];
								return targets.includes(target);
							});
							next.set('prompt', '花开:是否为' + get.translation(trigger.card) + '增加一个目标？');
							next.set('targets', has);
							next.set('ai', function (target) {
								var player = _status.event.player;
								var card = _status.event.getTrigger().card;
								return get.effect(target, card, player, player);
							});
							('step 1');
							if (result.bool) {
								var targets = result.targets.sortBySeat();
								player.removeMark('scqhMagia_huakai_dist', 1, false);
								trigger.targets.addArray(targets);
							} else event.finish();
						},
						_priority: 0,
					},
				},
				ai: {
					result: {
						player: 1,
					},
					order: 7,
				},
				_priority: 0,
			},
			scqhMagia_救济: {
				forced: true,
				limited: true,
				trigger: {
					player: 'dieBegin',
				},
				content() {
					'step 0';
					player.awakenSkill(event.name);
					trigger.cancel();
					player.gainMaxHp(Infinity);
					var num = Math.max(1, 1 - player.hp);
					player.recover(num);
					('step 1');
					if (player.getStorage('scqhMagia_qiyuan_homura').length < 13) {
						var info = player.name;
						if (lib.character[player.name] != undefined && lib.character[player.name][3] != undefined && lib.character[player.name][3].includes(event.name)) {
							info = player.name;
						} else if (player.name2 && lib.character[player.name2] != undefined && lib.character[player.name2][3] != undefined && lib.character[player.name2][3].includes(event.name)) {
							info = player.name2;
						}
						player.reinit(info, 'scqhMagia_鹿目圆2', [Infinity, Infinity]);
					}
				},
			},
		},
		translate: {
			scqhMagia_qiyuan: '祈愿',
			scqhMagia_qiyuan_info: ['使命技,锁定技,当有牌置入弃牌堆后,若此牌的点数在:圆环之弧两侧,你记录之并增加一点体力上限、回复一点体力;圆环之理内部,你摸一张牌(每轮每种点数各限一次).', '●成功:若你完成了圆环之理,则你所在的阵营游戏胜利.', '○失败:进入濒死状态.'].join('</br>'),
			scqhMagia_huakai: '花开',
			scqhMagia_huakai_info: '出牌阶段限一次,你可以弃置所有手牌,摸Ｘ张牌,并且本回合内增加Ｘ点攻击范围、使用【杀】或普通锦囊牌可以额外指定一个目标(Ｘ为你的弃牌数).',
		},
	};
	for (const i in list.skill) {
		const info = list.skill[i];
		const priority = function (infox) {
			if (typeof infox._priority !== 'number') {
				infox._priority = Math.random();
			}
		};
		const audio = function (infox) {
			var number = 2;
			if (typeof infox.audio === 'number') number = infox.audio;
			if (!infox.audio || typeof infox.audio === 'number') {
				infox.audio = 'ext:' + lib.scqhExtension + '/audio:' + number;
			}
		};
		priority(info);
		audio(info);
		if (info.subSkill) {
			for (const j in info.subSkill) {
				const infoj = info.subSkill[j];
				priority(infoj);
				audio(infoj);
			}
		}
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info'], list.translate[i + '_append']);
	}
	for (const i in list.translate) {
		lib.translate[i] = list.translate[i];
	}
};

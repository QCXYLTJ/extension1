import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '概念武将',
		content(config) {
			lib.arenaReady.push(function () {
				lib.zyileReadContentLoaded.load = true;
				while (lib.zyileReadContentLoaded.length) lib.zyileReadContentLoaded.shift()();
			});
			if (get.mode() != 'boss' && lib.config.extension_概念武将_enable_boss) {
				for (var i in lib.character) {
					if ((i.indexOf('zyile_') == 0 || i.indexOf('dongman_') == 0) && lib.character[i][4] && lib.character[i][4].includes('boss')) {
						lib.character[i][4].push('bossallowed');
					}
				}
			}
			var style = document.createElement('style');
			style.innerHTML = '@keyframes zyile_character_config{';
			for (var i = 1; i <= 20; i++) {
				var rand1 = Math.floor(Math.random() * 255),
					rand2 = Math.floor(Math.random() * 255),
					rand3 = Math.floor(Math.random() * 255),
					rand4 = Math.random();
				style.innerHTML += i * 5 + '%{text-shadow: black 0 0 1px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 2px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 5px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 20px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 0.6) 0 0 20px}';
			}
			style.innerHTML += '}';
			document.head.appendChild(style);
			lib.zyileReadContentLoaded.push(function () {
				var ua = window.navigator.userAgent;
				var href = window.location.href;
				var config = ['iPad', 'Android', 'iPhone', 'iPod'];
				var isPc = true;
				for (var i = 0; i < config.length; i++) {
					if (ua.indexOf(config[i]) !== -1) {
						isPc = false;
						break;
					}
				}
				if (isPc == false) {
					lib.onmobile = {};
				}
			});
			game.findCardInCardPile = function (name) {
				var card;
				for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
					card = ui.cardPile.childNodes[i];
					if (typeof name == 'string') {
						if (card.name == name) {
							return card;
						}
					} else if (typeof name == 'function') {
						if (name(card)) {
							return card;
						}
					}
				}
				return null;
			};
			lib.group.push('shen');
			lib.group.push('zyile_mo');
			lib.groupnature.zyile_mo = 'zyile_mo';
			lib.translate.shenColor = '#FFFF00';
			lib.translate.zyile_moColor = '#4C1354';
			lib.translate.zyile_mo = '魔';
			lib.translate.shen = '神';
			lib.translate.madx = '堕落';
			lib.translate.madx_bg = '魔';
			lib.skill.madx = {
				mark: true,
				intro: {
					content: '已堕落',
					name: '堕落',
					onunmark(storage, player) {
						game.log(player, '清醒!');
					},
				},
			};
			lib.element.player.noDelay = function () {
				if (this.judgemin) return true;
				return false;
			};
			lib.element.player.recoverx = function () {
				'step 0';
				if (lib.config.background_audio) {
					game.playAudio('effect/loseHp');
				}
				game.broadcast(function () {
					if (lib.config.background_audio) {
						game.playAudio('effect/loseHp');
					}
				});
				game.log(player, '失去了' + get.cnNumber(num) + '点体力');
				player.changeHp(-num);
				('step 1');
				if (player.hp <= 0) {
					player.dying(event);
				}
			};
			lib.skill._noDelay = {
				mod: {
					targetEnabled(card, player, target) {
						if (get.type(card) == 'delay' && target.noDelay()) {
							return false;
						}
					},
				},
			};
			lib.skill._checks = {
				trigger: {
					global: ['chooseToUseBefore', 'gameStart', 'chooseButtonBefore', 'chooseControlBefore'],
				},
				forced: true,
				popup: false,
				_priority: Infinity,
				silent: true,
				filter(event, player) {
					if (!player.name && !player.name1 && !player.name2) return false;
					if (player.name) {
						if (!lib.character[player.name]) return false;
						if (!lib.character[player.name][4]) return false;
						if (lib.character[player.name][4].includes('checkSkill')) return true;
					}
					if (player.name1) {
						if (!lib.character[player.name1]) return false;
						if (!lib.character[player.name1][4]) return false;
						if (lib.character[player.name1][4].includes('checkSkill')) return true;
					}
					if (player.name2) {
						if (!lib.character[player.name2]) return false;
						if (!lib.character[player.name2][4]) return false;
						if (lib.character[player.name2][4].includes('checkSkill')) return true;
					}
					return false;
				},
				content() {
					'step 0';
					var skills = [];
					if (player.name && lib.character[player.name]) skills = skills.concat(lib.character[player.name][3]);
					if (player.name1 && lib.character[player.name1]) skills = skills.concat(lib.character[player.name1][3]);
					if (player.name2 && lib.character[player.name2]) skills = skills.concat(lib.character[player.name2][3]);
					for (var i = 0; i < skills.length; i++) {
						var info = lib.skill[skills[i]];
						if (!info) continue;
						if (info.noDisabled && info.noDisabled == true) {
							if (player.disabledSkills[skills[i]]) delete player.disabledSkills[skills[i]];
						}
						if (info.noRemove && info.noRemove == true && !player.hasSkill(skills[i])) player.addSkill(skills[i]);
						if (info.noAdd && info.noAdd == true) {
							var players = game.players.concat(game.dead);
							for (var j = 0; j < players.length; j++) {
								if (players[j].hasSkill(skills[i]) && players[j].name != player.name) players[j].removeSkill(skills[i]);
							}
						}
					}
				},
			};
			lib.skill._moyijudge = {
				mod: {
					judge(player, result) {
						var player2 = game.findPlayer(function (player) {
							return player.hasSkill('zyile_moyi');
						});
						if (!player2) return;
						if (player.hasSkill('zyile_moyi')) return;
						result.judge = -1;
						result.bool = false;
					},
				},
			};
			lib.skill._choince = {
				trigger: { global: ['gameDrawAfter', 'phaseBegin'] },
				forced: true,
				popup: false,
				silent: true,
				filter(event, player) {
					return player.group && player.group == 'shen' && config.shen_group;
				},
				content() {
					'step 0';
					var controls = [];
					for (var i in lib.character) {
						if (!controls.includes(lib.character[i][1]) && lib.character[i][1] != 'shen') {
							controls.push(lib.character[i][1]);
						}
					}
					var str = '请选择一个势力';
					player.chooseControl(controls, ui.create.dialog(str, 'hidden')).ai = function () {
						return Math.floor(Math.random() * controls.length);
					};
					('step 1');
					if (result.control) {
						player.group = result.control;
						if (get.mode() == 'guozhan') {
							player.identity = result.control;
							player._group = result.control;
							player.node.identity.firstChild.innerHTML = get.translation(result.control);
							player.node.identity.dataset.color = player.identity;
							if (player.name) lib.character[player.name][1] = result.control;
							if (player.name1) lib.character[player.name1][1] = result.control;
							if (player.name2) lib.character[player.name2][1] = result.control;
						} else {
							if (player.name) lib.character[player.name][1] = result.control;
							if (player.name1) lib.character[player.name1][1] = result.control;
							if (player.name2) lib.character[player.name2][1] = result.control;
						}
					}
					('step 2');
					var nods = player.node.name,
						rand1 = Math.floor(Math.random() * 255),
						rand2 = Math.floor(Math.random() * 255),
						rand3 = Math.floor(Math.random() * 255),
						rand4 = Math.floor(Math.random() * 1);
					switch (player.group) {
						case 'wei':
							player.node.name.dataset.nature = 'watermm';
							break;
						case 'shu':
							player.node.name.dataset.nature = 'soilmm';
							break;
						case 'wu':
							player.node.name.dataset.nature = 'woodmm';
							break;
						case 'qun':
							player.node.name.dataset.nature = 'metalmm';
							break;
						default:
							nods.style.color = 'rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', ' + rand4 + ')';
							break;
					}
				},
			};
			get.is.shenqi = function (card) {
				if (!card.name) return false;
				if (card.name.includes('shenqi_')) return true;
				var shenqi = ['donghuangzhong', 'fuxiqin', 'kunlunjingc', 'xuanyuanjian', 'pangufu', 'shennongding', 'lianyaohu', 'haotianta', 'nvwashi', 'kongdongyin', 'shenqi_zhuxian', 'shenqi_zaohua', 'shenqi_taixushengjia'];
			};
			get.goodTag = function (card) {
				if (get.tag(card, 'recover') || get.tag(card, 'draw') || get.tag(card, 'rejudge') || get.tag(card, 'save') || get.tag(card, 'gain')) return true;
				return false;
			};
			lib.ondisabled = [];
			game.removedPlayers = [];
			get.badTag = function (card) {
				if (get.tag(card, 'damage') || get.tag(card, 'discard') || get.tag(card, 'loseCard') || get.tag(card, 'loseHp')) return true;
				return false;
			};
			game.animationofgif = function (str, time) {
				var div = document.createElement('div');
				div.style['background-image'] = 'url(' + str + '?range=' + Math.random() + ')';
				div.style['background-size'] = '100% 100%';
				div.style.height = '100%';
				div.style.width = '100%';
				div.style['pointer-events'] = 'none';
				div.style.top = 0;
				div.style.left = 0;
				div.style['z-index'] = -1;
				ui.window.appendChild(div);
				game.pause();
				setTimeout(function () {
					ui.window.style.transition = '';
					ui.window.removeChild(div);
					game.resume();
				}, time);
			};
			game.playeranimaudio = function (str, spg) {
				if (_status.skillaudio.includes(str)) return;
				_status.skillaudio.add(str);
				game.addVideo('playAudio', null, str);
				setTimeout(function () {
					_status.skillaudio.remove(str);
				}, 1000);
				var audio = document.createElement('audio');
				audio.autoplay = true;
				audio.volume = lib.config.volumn_audio / 8;
				audio.src = spg;
				audio.addEventListener('ended', function () {
					this.remove();
				});
				audio.onerror = function () {
					if (this._changed) {
						this.remove();
						if (onerror) {
							onerror();
						}
					} else {
						this.src = spg;
						this._changed = true;
					}
				};
				ui.window.appendChild(audio);
				return audio;
			};
			if (!Object.hasOwn(config, 'shenqi_equip')) config.shenqi_equip = true;
			if (!Object.hasOwn(config, 'moshu_enable')) config.moshu_enable = true;
			if (config.shenqi_equip) {
				game.addCardPack(
					{
						card: {
							shenqi_zaohua: {
								fullskin: true,
								type: 'equip',
								subtype: 'equip5',
								nomod: true,
								nopower: true,
								skills: ['shenqi_zaohua'],
								ai: {
									equipValue: 7,
								},
							},
							shenqi_zhuxian: {
								fullskin: true,
								type: 'equip',
								subtype: 'equip1',
								nomod: true,
								nopower: true,
								distance: { attackFrom: -3 },
								skills: ['shenqi_zhuxian', 'shenqi_zhuxian2'],
								ai: {
									equipValue: 9,
								},
							},
							shenqi_taixushengjia: {
								fullskin: true,
								type: 'equip',
								subtype: 'equip2',
								nomod: true,
								nopower: true,
								skills: ['shenqi_taixushengjia'],
								ai: {
									equipValue: 7,
								},
							},
						},
						skill: {
							shenqi_zaohua: {
								enable: 'phaseUse',
								usable: 1,
								filterTarget: true,
								selectTarget: -1,
								multitarget: true,
								multiline: true,
								content() {
									'step 0';
									event.num = targets.length;
									('step 1');
									if (targets.length) {
										event.target = targets.shift();
									} else {
										event.goto(4);
									}
									('step 2');
									event.target.draw();
									('step 3');
									event.goto(1);
									('step 4');
									event.cards = get.cards(event.num);
									player.chooseCardButton(true, event.cards, '造化玉碟:选择一张牌加入手牌').set('ai', function (button) {
										return get.value(button.link);
									});
									('step 5');
									if (result.links?.length) {
										event.cards.remove(result.links[0]);
										player.gain(result.links, 'gain2');
										if (Array.isArray(event.cards)) for (var i of event.cards) {
											i.fix();
											ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
										}
									} else {
										if (Array.isArray(event.cards)) for (var i of event.cards) {
											i.fix();
											ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
										}
										event.finish();
									}
								},
								ai: {
									order: 6,
									result: {
										player: 1.1,
										target(player, target) {
											var attive = 0,
												fasle = 0;
											for (var i of game.players) {
												if (get.attitude(player, i) >= 0) attive++;
											}
											for (var i of game.players) {
												if (get.attitude(player, i) < 0) fasle++;
											}
											if (attive > 0) return 1;
											if (fasle < 0) return -1;
											return 0;
										},
									},
								},
							},
							shenqi_zhuxian: {
								trigger: { player: 'phaseBegin' },
								forced: true,
								filter(event, player) {
									for (var i of game.players) {
										if (i == player) continue;
										if (player.canUse({ name: 'sha' }, i)) return true;
									}
									return false;
								},
								content() {
									'step 0';
									player
										.chooseTarget(
											'是否发动【诛仙剑】？',
											function (card, player, target) {
												if (player == target) return false;
												return player.canUse({ name: 'sha' }, target);
											},
											[1, 3]
										)
										.set('ai', function (target) {
											return ai.get.effect(target, { name: 'sha' }, _status.event.player);
										});
									('step 1');
									if (result.targets?.length) {
										player.useCard({ name: 'sha' }, result.targets, false);
									}
								},
							},
							shenqi_zhuxian2: {
								trigger: { player: 'shaHit' },
								forced: true,
								filter(event, player) {
									return event.target.getCards('he');
								},
								content() {
									player.discardPlayerCard(trigger.target, 'he');
								},
							},
							shenqi_taixushengjia: {
								trigger: { target: ['useCardToTarget'] },
								forced: true,
								_priority: 20,
								filter(event, player) {
									return event.card && event.card.name == 'sha' && event.player.getCards('e', { subtype: 'equip1' }).length;
								},
								content() {
									for (var i of trigger.player.getCards('e', { subtype: 'equip1' })) {
										trigger.player.removeEquipTrigger(i);
									}
								},
								ai: {
									threaten: 0.6,
								},
							},
						},
						translate: {
							shenqi_zhuxian: '诛仙剑',
							shenqi_zaohua: '造化玉碟',
							shenqi_taixushengjia: '太虚甲',
							shenqi_zaohua_info: '出牌阶段限一次,你可以令所有角色摸一张牌,你观看牌堆顶等同于场上角色数量的牌,并选择其中一张牌获得之.',
							shenqi_zhuxian_info: '回合开始阶段,你可以对至多三名角色视为对他们使用了一张不计入使用限制的有距离的【杀】.你使用【杀】命中目标时,你可弃置目标一张牌.',
							shenqi_taixushengjia_info: '锁定技,当你成为杀的目标时若其有武器牌,令其武器牌失效.',
						},
						list: [
							['spade', 13, 'shenqi_zhuxian'],
							['heart', 12, 'shenqi_zaohua'],
							['diamond', 11, 'shenqi_taixushengjia'],
						],
					},
					'神器'
				);
				lib.translate.神器_card_config = `神器`;
			}
			if (config.moshu_enable) {
				game.addCardPack(
					{
						card: {
							moshu_mofazhishu: {
								fullskin: true,
								type: 'basic',
								modTarget(card, player, target) {
									return target.hp < target.maxHp;
								},
								selectTarget() {
									return [1, 1];
								},
								enable: true,
								filterTarget(card, player, target) {
									return true;
								},
								nopower: true,
								content() {
									'step 0';
									if (player.hp < 1) return player.recover(1);
									event.target = target;
									var list = ['回复一点体力', '受到一点伤害', '摸一张牌', '弃置一张牌'];
									var next = player.chooseControl(list);
									next.ai = function () {
										var rand2 = Math.random() < 0.5;
										var target = event.target;
										if (get.attitude(player, target) >= 0) {
											if (target.isDamaged()) return '回复一点体力';
											return '摸一张牌';
										}
										if (get.attitude(player, target) < 0) {
											if (target.hp == 1) return '受到一点伤害';
											if (target.getCards('e', [2, 4, 5, 6]).length) {
												return '弃置一张牌';
											}
											if (target.getCards('e', [2, 3, 4, 5, 6]).length && rand2) {
												return '弃置一张牌';
											}
											return '受到一点伤害';
										}
										return list.randomGet();
									};
									('step 1');
									switch (result.control) {
										case '回复一点体力':
											event.target.recover(1);
											break;
										case '受到一点伤害':
											event.target.damage('nosource');
											break;
										case '摸一张牌':
											event.target.draw(1);
											break;
										case '弃置一张牌':
											player.discardPlayerCard('he', event.target, true).set('ai', function (button) {
												if (['equip2', 'equip3', 'equip4', 'equip5', 'equip6'].includes(get.subtype(button.link))) return get.equipValue(button.link);
												var val = get.buttonValue(button);
												if (get.attitude(_status.event.player, event.target) > 0) return -val;
												return val;
											});
											break;
									}
								},
								ai: {
									order: 4,
									result: {
										target(player, target, card, isLink) {
											if (get.attitude(player, target) < 0 && target.hp == 1) return -10;
											if (get.attitude(player, target) > 0) {
												if (target.isDamaged()) return ai.get.recoverEffect(target, player);
											}
											if (get.attitude(player, target) < 0) {
												if (target.countCards('e') > 0) return -8;
												return get.attitude(player, target);
											}
										},
									},
									value: 7,
									useful: 7,
									tag: {
										recover: 1,
										damage: 1,
										loseCard: 1,
										discard: 1,
										draw: 1,
									},
								},
							},
						},
						skill: {},
						translate: {
							moshu_mofazhishu: '魔法之书',
							moshu_mofazhishu_info: '出牌阶段限,对任意一名武将使用,令其执行以下效果之一回复一点体力、受到一点伤害(无伤害来源)、摸一张牌、弃置一张牌(手牌,装备),离开手牌区时自动销毁',
						},
						list: [],
					},
					'魔法之书'
				);
				lib.translate.魔法之书_card_config = `魔法之书`;
			}
			window.zyile_content.load = true;
			while (window.zyile_content.length) window.zyile_content.shift()(lib, game, ui, get, ai, _status, config);
		},
		precontent(config) {
			game.sort = function () {
				const players = game.players.filter(Boolean);
				const deads = game.dead.filter(Boolean);
				const allPlayers = deads.concat(players);//先移除players后面玩家会前移,再添加入dead需要同排序取前
				const bool = lib.config.dieremove;
				const playerx = bool ? players : allPlayers;
				ui.arena.setNumber(playerx.length);
				if (bool) {
					deads.forEach((player) => {
						player.classList.add('removing', 'hidden');
						if (!player.deadposition) {
							const num = Number(player.dataset.position);
							player.deadposition = num;
							player.dataset.position = num - 1;
						}
					});
				}//隐藏死亡角色
				playerx.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
				if (playerx.includes(game.me) && playerx[0] != game.me) {
					while (playerx[0] != game.me) {
						const start = playerx.shift();
						playerx.push(start);
					}
				}//将玩家排至数组首位
				playerx.forEach((player, index, array) => {
					player.dataset.position = index;
					const zhu = _status.roundStart || game.zhu || game.boss || array.find((p) => p.seatNum == 1) || array[0];
					const zhuPos = Number(zhu.dataset.position);
					const num = index - zhuPos + 1;
					if (index < zhuPos) {
						player.seatNum = players.length - num;
					} else {
						player.seatNum = num;
					}
				});//修改dataset.position与seatNum
				players.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
				players.forEach((player, index, array) => {
					if (bool) {
						player.classList.remove('removing', 'hidden');
					}
					if (index == 0) {
						if (ui.handcards1Container && ui.handcards1Container.firstChild != player.node.handcards1) {
							while (ui.handcards1Container.firstChild) {
								ui.handcards1Container.firstChild.remove();
							}
							ui.handcards1Container.appendChild(player.node.handcards1.addTempClass('start').fix());
						}
						if (game.me != player) {
							ui.updatehl();
						}
					}
					player.previous = array[index === 0 ? array.length - 1 : index - 1];
					player.next = array[index === array.length - 1 ? 0 : index + 1];
				});//展示零号位手牌/修改previous/显示元素
				allPlayers.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
				allPlayers.forEach((player, index, array) => {
					player.previousSeat = array[index === 0 ? array.length - 1 : index - 1];
					player.nextSeat = array[index === array.length - 1 ? 0 : index + 1];
				});//修改previousSeat
				game.players.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
				return true;
			};
			//—————————————————————————————————————————————————————————————————————————————数据操作相关自定义函数
			const numfunc = function () {
				if (!lib.number) {
					lib.number = [];
					for (var i = 1; i < 14; i++) {
						lib.number.add(i);
					}
				} //添加lib.number
				window.sgn = function (bool) {
					if (bool) return 1;
					return -1;
				};//true转为1,false转为-1
				window.numberq0 = function (num) {
					if (isNaN(Number(num))) return 0;
					return Math.abs(Number(num));
				};//始终返回正数(取绝对值)
				window.numberq1 = function (num) {
					if (isNaN(Number(num))) return 1;
					return Math.max(Math.abs(Number(num)), 1);
				};//始终返回正数且至少为1(取绝对值)
				window.number0 = function (num) {
					if (isNaN(Number(num))) return 0;
					return Math.max(Number(num), 0);
				};//始终返回正数
				window.number1 = function (num) {
					if (isNaN(Number(num))) return 1;
					return Math.max(Number(num), 1);
				};//始终返回正数且至少为1
				window.deepClone = function (obj, visited = new WeakMap()) {
					if (obj === null || typeof obj !== 'object' || obj instanceof window.Element) {
						return obj;
					}
					if (visited.has(obj)) {
						return visited.get(obj);
					}
					if (Array.isArray(obj)) {
						return obj.map((item) => deepClone(item, visited));
					}
					const clonedObj = {};
					visited.set(obj, clonedObj);
					for (let key in obj) {
						if (Object.hasOwn(obj, key)) {
							clonedObj[key] = deepClone(obj[key], visited);
						}
					}
					return clonedObj;
				}; //深拷贝对象
				window.factorial = function (num) {
					num = Math.round(num);
					if (num < 0) {
						return 0;
					}
					if (num < 2) {
						return 1;
					}
					let result = 1;
					for (let i = 2; i <= num; i++) {
						result *= i;
					}
					return result;
				}; //阶乘
				window.isPrime = function (num) {
					if (num === 2 || num === 3) return true;
					if (num < 2 || num % 2 === 0 || num % 3 === 0) return false;
					for (let i = 5; i * i <= num; i += 6) {
						if (num % i === 0 || num % (i + 2) === 0) return false;
					}
					return true;
				}; // 质数
			};
			numfunc();
			//—————————————————————————————————————————————————————————————————————————————视为转化虚拟牌相关自创函数
			const shiwei = function () {
				lib.element.player.filterCardx = function (card, filter) {
					if (typeof card == 'string') {
						card = { name: card };
					}
					const player = this, info = get.info(card);
					if (!lib.filter.cardEnabled(card, player)) return false; //卡牌使用限制
					if (info.notarget) return true;
					if (!info.filterTarget) return true;
					if (!info.enable) return true;
					return game.hasPlayer(function (current) {
						if (info.multicheck && !info.multicheck(card, player)) return false;
						if (filter) {
							if (!lib.filter.targetInRange(card, player, current)) return false; //距离限制
							return lib.filter.targetEnabledx(card, player, current);
						}
						return lib.filter.targetEnabled(card, player, current); //目标限制
					});
				}; //适用于choosetouse的filtercard
				lib.element.player.filterCard = function (card, filter) {
					if (typeof card == 'string') {
						card = { name: card };
					}
					const player = this, info = get.info(card), event = _status.event;
					const evt = event.name.startsWith('chooseTo') ? event : event.getParent((q) => q.name.startsWith('chooseTo'));
					if (evt.filterCard2) {
						return evt._backup.filterCard(card, player, evt);
					}//viewAs的技能会修改chooseToUse事件的filterCard
					else if (evt.filterCard && evt.filterCard != lib.filter.filterCard) {
						return evt.filterCard(card, player, evt);//这里也有次数限制
					}
					else {
						if (!lib.filter.cardEnabled(card, player)) return false;//卡牌使用限制
						if (info.notarget) return true;
						if (!info.filterTarget) return true;
						if (!info.enable) return true;
						if (evt.name == 'chooseToRespond') return true;//chooseToRespond无次数距离目标限制
						if (filter) {
							if (!lib.filter.cardUsable(card, player, evt)) return false;//次数限制
						}
						if (evt.filterTarget && evt.filterTarget != lib.filter.filterTarget) {
							return game.hasPlayer(function (current) {
								return evt.filterTarget(card, player, current);
							});
						}
						return game.hasPlayer(function (current) {
							if (info.multicheck && !info.multicheck(card, player)) return false;
							if (filter) {
								if (!lib.filter.targetInRange(card, player, current)) return false;//距离限制
								return lib.filter.targetEnabledx(card, player, current);
							}
							return lib.filter.targetEnabled(card, player, current);//目标限制
						});
					}
				};//删除次数限制//filter决定有无次数距离限制//viewAs的技能会修改chooseToUse事件的filterCard
				lib.element.player.qcard = function (type, filter, range) {
					const list = [];
					for (const i in lib.card) {
						const info = lib.card[i];
						if (info.mode && !info.mode.includes(lib.config.mode)) {
							continue;
						}
						if (!info.content) {
							continue;
						}
						if (['delay', 'equip'].includes(info.type)) {
							continue;
						}
						if (type && info.type != type) {
							continue;
						}
						if (filter !== false) {
							const player = this;
							if (range !== false) {
								range = true;
							}
							if (!player.filterCard(i, range)) {
								continue;
							}
						}
						list.push([lib.suits.randomGet(), lib.number.randomGet(), i]); //花色/点数/牌名/属性/应变
						if (i == 'sha') {
							for (const j of Array.from(lib.nature.keys())) {
								list.push([lib.suits.randomGet(), lib.number.randomGet(), 'sha', j]);
							}
						}
					}
					return list;
				}; //可以转化为的牌//filter控制player.filterCard//range控制是否计算次数与距离限制
			};
			shiwei();
			if (!config.enable) return undefined;
			game.saveConfig('概念武将_version', '6.2');
			lib.config.概念武将_version = '6.2';
			game.saveConfig('max_loadtime', 6e4);
			localStorage.setItem(lib.configprefix + 'loadtime', 6e4);
			if (!lib.characterMethod) lib.characterMethod = {};
			if (!lib.config.characterMethod) game.saveConfig('characterMethod', {});
			get.characterMethod = function (name) {
				if (lib.config.characterMethod[name]) return lib.config.characterMethod[name];
				var tags = get.character(name, 4);
				if (tags) {
					for (var i = 0; i < tags.length; i++) {
						if (tags[i].indexOf('method:') == 0) {
							return tags[i].slice(7);
						}
					}
				}
				if (name.indexOf('gz_') == 0) {
					name = name.slice(3);
					if (lib.characterMethod[name]) return lib.characterMethod[name];
				}
				if (name.includes('_')) {
					name = name.slice(name.indexOf('_') + 1);
				}
				if (lib.characterMethod[name]) return lib.characterMethod[name];
				return '暂无攻略';
			};
			if (!lib.SkillActorSLines) lib.SkillActorSLines = {};
			if (!lib.config.SkillActorSLines) game.saveConfig('SkillActorSLines', {});
			get.ActorSLines = function (skill) {
				if (lib.config.SkillActorSLines[skill]) return lib.config.characterMethod[name];
				if (lib.SkillActorSLines[skill]) return lib.SkillActorSLines[name];
				return '暂无台词';
			};
			game.import('character', function (lib, game, ui, get, ai, _status) {
				var zyile_characterPack = {
					name: 'zyile',
					connect: true,
					character: {
						zyile_yezi: ['female', 'shen', 4, ['zyile_bihu', 'zyile_juanyue', 'zyile_moshu'], ['boss', 'checkSkill'], 'zhu'],
						zyile_xianhua: ['female', 'shen', 3, ['zyile_fangxiang', 'zyile_zhanfang']],
						zyile_xuanyuanyi: ['female', 'shen', 4, ['zyile_xianyi', 'zyile_huangshi', 'zyile_tianyun'], ['boss', 'zhu']],
						zyile_longji: ['female', 'shen', 5, ['zyile_longyu']],
						zyile_mudi: ['female', 'shen', 3, ['AM_siguan', 'AM_maigu']],
						zyile_guize: ['female', 'shen', 3, ['AM_guizhi', 'AM_nongxu']],
						zyile_yaohu: ['female', 'shen', 3, ['AM_xinmei', 'AM_qingwu']],
						zyile_mofa: ['female', 'shen', 3, ['AM_bolan', 'AM_xiangwen']],
						zyile_huimie: ['female', 'shen', 4, ['AM_zhongyan', 'AM_jueyu']],
						ran_lengjing: ['female', 'shen', 3, ['AM_bujing', 'AM_yuxi']],
						ran_siwang: ['female', 'zyile_mo', 3, ['AM_wangzhou', 'AM_huangquan']],
						ran_haiyang: ['female', 'shen', 4, ['AM_chaoxi']],
						ran_xiee: ['female', 'zyile_mo', 4, ['AM_duoluo']],
						zyile_tongyao: ['female', 'shen', 4, ['zyile_yanxu', 'zyile_chuandi']],
						ran_jibian: ['female', 'shen', 4, ['AM_jiyu']],
						ran_zhihui: ['female', 'shen', 4, ['AM_huoxue']],
						ran_quanli: ['female', 'shen', 3, ['AM_zaoshi', 'AM_zhuanquan']],
						ran_gongping: ['female', 'shen', 3, ['AM_caijue', 'AM_fushen']],
						ran_mingyun: ['female', 'shen', 3, ['AM_jiyun', 'AM_zhuanyun']],
						ran_zhengyi: ['female', 'shen', 4, ['AM_shengzhan', 'AM_xueren']],
						ran_shengji: ['female', 'shen', 4, ['AM_ziyang', 'AM_yunyu']],
						ran_shijian: ['female', 'shen', 3, ['AM_shunxi', 'AM_yueqian']],
						ran_shalu: ['female', 'shen', 4, ['AM_shachang', 'AM_chanyuan']],
						ran_zhizhuo: ['female', 'shen', 3, ['AM_zhinian', 'AM_zhuixin']],
						ran_xiwang: ['female', 'shen', 4, ['AM_shengguang', 'AM_shenyuan']],
						ran_jijing: ['female', 'shen', 3, ['AM_chenji', 'AM_jingbian']],
						ran_yongheng: ['female', 'shen', 4, ['AM_shijin', 'AM_yongmian']],
						ran_chengshi: ['female', 'shen', 3, ['AM_zhenyan', 'AM_wuhuo']],
						zyile_duniang: ['female', 'shen', 8, ['zyile_shouji', 'zyile_zhangkong', 'zyile_qiangze', 'zyile_tiance'], ['boss', 'zhu']],
						zyile_yuyan: ['female', 'shen', 3, ['zyile_xionghuo', 'zyile_fuyi']],
						zyile_tiankong: ['female', 'shen', 3, ['zyile_henhe', 'zyile_xianyu']],
						zyile_yunxiang: ['female', 'zyile_mo', 4, ['zyile_xiaoling', 'zyile_', 'zyile_wuxiang', 'zyile_moyi'], ['boss']],
						zyile_congmei: ['female', 'zyile_mo', 4, ['zyile_youshi', 'zyile_maisha', 'zyile_xianluo'], ['boss', 'checkSkill']],
						zyile_xishou: ['female', 'zyile_mo', 4, ['zyile_jubao', 'zyile_weihuo', 'zyile_luanxing', 'zyile_shiling'], ['boss']],
						zyile_xukong: ['female', 'shen', 4, ['zyile_danhua', 'zyile_kuoshan', 'zyile_changan', 'zyile_chizhu'], ['boss', 'zhu']],
						zyile_eshi: ['female', 'zyile_mo', 4, ['zyile_eshis', 'zyile_baoji', 'zyile_xiongyi'], ['boss']],
						zyile_jingzi: ['female', 'shen', 8, ['RE_huanqian', 'zyile_yinzhao'], ['boss', 'zhu']],
						zyile_Aisha: ['female', 'shen', 4, ['RE_fuyuan', 'zyile_xuwu', 'zyile_lunhui'], ['boss', 'zhu']],
						zyile_Rlyeh_text: ['female', 'zyile_mo', 4, ['zyile_weizhi'], ['boss']],
						zyile_mingshen: ['female', 'zyile_mo', 4, ['zyile_xianshen', 'zyile_luxin', 'zyile_xiangtian', 'zyile_shenxing'], ['boss', 'checkSkill']],
						zyile_mengbai: ['female', 'shen', 4, ['zyile_menghua', 'zyile_quanshe', 'zyile_guansu', 'zyile_baike'], ['boss', 'checkSkill'], 'zhu'],
						zyile_Alice: ['female', 'shen', 4, ['zyile_pukemosu', 'zyile_xianjing', 'zyile_shiji'], ['boss', 'checkSkill'], 'nei'],
						dongman_Kaguya: ['female', 'shen', 6, ['SE_yongheng', 'SE_xuyu', 'SE_nanti', 'SE_longjing', 'SE_foyu'], ['boss', 'checkSkill'], 'nei'],
					},
					characterTitle: {
						dongman_Kaguya: '<div class="text center" style="color: #FF0000">永远与须臾の罪人',
					},
					characterSort: {
						zyile: {
							zyile_boss: ['zyile_yezi', 'zyile_xuanyuanyi', 'zyile_duniang', 'zyile_yunxiang', 'zyile_congmei', 'zyile_xishou', 'zyile_xukong', 'zyile_eshi', 'zyile_jingzi', 'zyile_Aisha', 'zyile_Rlyeh_text', 'zyile_mingshen', 'zyile_mengbai', 'zyile_Alice', 'dongman_Kaguya'],
							zyile_basic: ['zyile_xianhua', 'zyile_longji', 'zyile_mudi', 'zyile_guize', 'zyile_yaohu', 'zyile_mofa', 'zyile_huimie', 'ran_lengjing', 'ran_siwang', 'ran_haiyang', 'ran_xiee', 'zyile_tongyao', 'ran_jibian', 'ran_zhihui', 'ran_quanli', 'ran_gongping', 'ran_mingyun', 'ran_zhengyi', 'ran_shengji', 'ran_shijian', 'ran_shalu', 'ran_zhizhuo', 'ran_xiwang', 'ran_jijing', 'ran_yongheng', 'ran_chengshi', 'zyile_yuyan', 'zyile_tiankong'],
						},
					},
					skill: {
						zyile_zhanfang: {
							enable: 'phaseUse',
							limited: true,
							filter(event, player) {
								return !player.storage.zyile_zhanfang;
							},
							init(player) {
								player.storage.zyile_zhanfang = false;
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							mark: true,
							content() {
								'step 0';
								target.addSkill('zyile_fangxiang');
								('step 1');
								player.storage.zyile_zhanfang = true;
								player.awakenSkill('zyile_zhanfang');
								const evt = _status.event.getParent('phase');
								if (evt && evt.name) {
									evt.finish();
								}
							},
							intro: {
								content: 'limited',
							},
							ai: {
								order: 1,
								result: {
									target: 2,
								},
							},
						},
						zyile_fangxiang: {
							trigger: { global: 'phaseUseBegin' },
							check(event, player) {
								var active = 0;
								for (var i of game.players) {
									if (!i.isOut()) {
										if (get.attitude(player, i) > 0) {
											if (get.distance(event.player, i, 'attack') <= 1) {
												active++;
												if (i.hp <= 1) active += 2;
											}
										} else if (get.attitude(player, i) < 0) {
											if (get.distance(event.player, i, 'attack') <= 1) {
												active--;
											}
										}
									}
								}
								if (get.attitude(player, event.player) > 0) {
									active++;
								} else {
									active--;
								}
								if (active > 0) return 1;
								return 0;
							},
							logTarget: 'player',
							content() {
								var targets = [];
								for (var i of game.players) {
									if (!i.isOut()) {
										if (get.distance(trigger.player, i, 'attack') <= 1) {
											targets.push(i);
										}
									}
								}
								for (var i = 0; i < targets.length; i++) {
									if (targets[i].isDamaged()) {
										targets[i].recover();
										targets[i].addTempSkill('zyile_fangxiang_debuff', 'phaseEnd');
									}
								}
								game.asyncDraw(targets);
							},
							mod: {
								targetEnabled(card, player, target) {
									if (target.hasSkill('zyile_fangxiang') && player.hasSkill('zyile_fangxiang_debuff')) return false;
								},
							},
							subSkill: {
								debuff: {
									mark: true,
									intro: {
										content(storage, player) {
											var player2 = [];
											for (var i of game.players) {
												if (i.hasSkill('zyile_fangxiang')) player2.push(i);
											}
											var str = '不能对';
											for (var i = 0; i < player2.length; i++) {
												str += get.translation(player2[i]) + '、';
											}
											str += '使用卡牌';
											return str;
										},
									},
								},
							},
						},
						SE_yuzhi: {
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target && target.countCards('he') > 0;
							},
							prompt: '请选择1名角色',
							content() {
								'step 0';
								player.chooseControl('basic', 'equip', 'trick', 'delay').set('ai', function (event) {
									switch (Math.floor(Math.random() * 6)) {
										case 0:
											return 'equip';
										case 1:
										case 4:
										case 5:
										case 6:
											return 'basic';
										case 2:
											return 'trick';
										case 3:
											return 'delay';
									}
								});
								('step 1');
								game.log(player, '选择了' + get.translation(result.control));
								event.choice = result.control;
								player.popup(event.choice);
								event.cards = target.getCards('he').randomGet();
								target.showCards(event.cards);
								('step 2');
								if (get.type(event.cards) == event.choice) {
									const next = game.createEvent('diex', false);
									next.source = player;
									next.player = target;
									next._triggered = null;
									next.restMap = { type: null, count: null, audio: null };
									next.excludeMark = [];
									next.setContent('die');
								}
								('step 3');
								if (target.dieAfter) target.dieAfter(player);
							},
							ai: {
								order: 5,
								result: {
									target(player, target) {
										var att = get.attitude(player, target);
										if (att < 0) return att;
									},
								},
								expose: 0.2,
							},
							group: ['SE_yuzhi_one'],
							subSkill: {
								one: {
									trigger: { player: 'dying' },
									forced: true,
									filter(event, player) {
										return player.maxHp > 0;
									},
									content() {
										'step 0';
										player.chooseControl('basic', 'equip', 'trick', 'delay').set('ai', function (event) {
											switch (Math.floor(Math.random() * 6)) {
												case 0:
													return 'equip';
												case 1:
												case 4:
												case 5:
													return 'basic';
												case 2:
													return 'trick';
												case 3:
													return 'delay';
											}
										});
										('step 1');
										game.log(player, '选择了' + get.translation(result.control));
										event.choice = result.control;
										player.popup(event.choice);
										event.cards = get.cards(7);
										player.showCards(event.cards);
										('step 2');
										var num = 0;
										if (Array.isArray(event.cards)) for (var i of event.cards) {
											if (get.type(i) == event.choice) {
												num += 1;
											}
										}
										if (num > 0) {
											player.recover(num);
										} else {
											event.finish();
										}
									},
								},
							},
						},
						SE_yanzi: {
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target;
							},
							prompt: '请选择1名角色',
							content() {
								'step 0';
								target.chooseControl('2', '4', '6', '8', '10', '13').set('ai', function (event) {
									switch (Math.floor(Math.random() * 6)) {
										case 0:
											return '2';
										case 1:
											return '4';
										case 4:
											return '6';
										case 5:
											return '8';
										case 2:
											return '10';
										case 3:
											return '13';
									}
								});
								('step 1');
								game.log(target, '选择了' + get.translation(result.control));
								event.choice = result.control;
								target.popup(event.choice);
								event.cards = get.cards(2);
								player.showCards(event.cards);
								('step 2');
								var num = 0;
								if (Array.isArray(event.cards)) for (var i of event.cards) {
									num += i.number;
								}
								if (num <= event.choice) {
									target.hp = 1;
									target.update();
									target.discard(target.getCards('h'));
								} else {
									target.damage();
									player.draw();
								}
							},
							ai: {
								order: 10,
								result: {
									target(player, target) {
										var att = get.attitude(player, target);
										if (att < 0) return att;
									},
								},
								expose: 0.2,
							},
						},
						SE_huoshu: {
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target;
							},
							prompt: '请选择1名角色',
							content() {
								'step 0';
								target.chooseControl('heart2', 'diamond2', 'club2', 'spade2').set('ai', function (event) {
									switch (Math.floor(Math.random() * 6)) {
										case 0:
											return 'heart2';
										case 1:
										case 4:
										case 5:
											return 'diamond2';
										case 2:
											return 'club2';
										case 3:
											return 'spade2';
									}
								});
								('step 1');
								game.log(target, '选择了' + get.translation(result.control));
								event.choice = result.control;
								target.popup(event.choice);
								event.cards = get.cards(1);
								player.showCards(event.cards);
								('step 2');
								if (event.cards.suit + '2' != event.choice) {
									var num = Math.abs(target.hp - player.hp);
									if (num > 0) {
										target.damage(num);
									}
									target.chooseToDiscard(2, true);
								}
							},
							ai: {
								order: 7,
								result: {
									target(player, target) {
										var att = get.attitude(player, target);
										if (att < 0) return att;
									},
								},
								expose: 0.2,
							},
						},
						SE_foyu: {
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target;
							},
							filter(event, player) {
								for (var i of game.players) {
									return i.countCards('hej') > 0;
								}
							},
							prompt: '请选择1名角色',
							content() {
								'step 0';
								target.chooseControl('basic', 'equip', 'trick', 'delay').set('ai', function (event) {
									switch (Math.floor(Math.random() * 6)) {
										case 0:
											return 'equip';
										case 1:
										case 4:
										case 5:
											return 'basic';
										case 2:
											return 'trick';
										case 3:
											return 'delay';
									}
								});
								('step 1');
								game.log(target, '选择了' + get.translation(result.control));
								event.choice = result.control;
								target.popup(event.choice);
								var players = [];
								for (var i of game.players) {
									if (i != player && i.countCards('hej')) {
										players.push(i);
									}
								}
								if (!players.length) {
									event.finish();
									return;
								}
								var target1 = players.randomGet();
								event.card = target.getCards('hej').randomGet();
								target1.showCards(event.card);
								('step 2');
								if (get.type(event.card) != event.choice) {
									target.loseMaxHp();
									if (player.hp < player.maxHp) {
										player.recover();
									} else {
										event.finish();
									}
								}
							},
							ai: {
								order: 8,
								result: {
									target(player, target) {
										var att = get.attitude(player, target);
										if (att < 0) return att;
									},
								},
								expose: 0.2,
							},
						},
						SE_longjing: {
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target;
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							prompt: '请选择1名角色',
							content() {
								'step 0';
								target.chooseControl('red', 'black').set('ai', function (event) {
									if (Math.random() < 0.5) return 'red';
									return 'black';
								});
								('step 1');
								game.log(target, '选择了' + get.translation(result.control));
								event.choice = result.control;
								target.popup(event.choice);
								event.card = player.getCards('h').randomGet();
								player.showCards(event.card);
								('step 2');
								if (get.color(event.card) != event.choice) {
									target.damage();
								}
							},
							ai: {
								order: 9,
								result: {
									target(player, target) {
										var att = get.attitude(player, target);
										if (att < 0) return att;
									},
								},
							},
							expose: 0.4,
						},
						SE_nanti: {
							trigger: { global: 'useCardAfter', player: 'changeHp' },
							forced: true,
							_priority: 100,
							filter(event, player) {
								if (player.skills.includes('SE_huoshu') || player.skills.includes('SE_yanzi')) {
									return false;
								}
								if (player.hp > 4) {
									return false;
								}
								return true;
							},
							content() {
								player.loseMaxHp();
								player.addSkill('SE_huoshu');
								player.addSkill('SE_yanzi');
							},
							group: ['SE_nanti_one'],
							subSkill: {
								one: {
									trigger: { global: 'useCardAfter', player: 'changeHp' },
									forced: true,
									_priority: 100,
									filter(event, player) {
										if (player.skills.includes('SE_yuzhi')) {
											return false;
										}
										if (player.hp > 2) {
											return false;
										}
										return true;
									},
									content() {
										player.loseMaxHp();
										player.addSkill('SE_yuzhi');
									},
								},
							},
						},
						SE_xuyu: {
							trigger: { global: 'phaseBegin' },
							_priority: 10,
							logTarget: 'player',
							filter(event, player) {
								if (event.parent.name == 'SE_xuyu') return false;
								return event.player != player && event.player.countCards('h') > player.hp;
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							content() {
								const evt = _status.event.getParent('phase');
								if (evt && evt.name) {
									evt.finish();
								}
							},
						},
						SE_yongheng: {
							trigger: { player: ['loseEnd', 'useCardAfter', 'respond'] },
							_priority: 10,
							check(event, player) {
								if (event.card.name == 'tao' && player.hp <= 2) return true;
								if (player.countCards('h') < player.maxHp - 1) return false;
								return get.value(event.card) >= 9;
							},
							filter(event, player) {
								if (get.type(event.card) == 'trick' || get.type(event.card) == 'basic') return true;
								return false;
							},
							content() {
								if (player.countCards('h') > 0) player.chooseToDiscard(true);
								player.gain(trigger.cards);
								player.$gain2(trigger.cards);
							},
							group: ['SE_yongheng_one', 'SE_yongheng_two'],
							subSkill: {
								one: {
									trigger: { player: 'gainEnd' },
									_priority: 10,
									forced: true,
									filter(event, player) {
										return player.countCards('h') > player.maxHp;
									},
									content() {
										var num = player.countCards('h') - player.maxHp;
										player.chooseToDiscard(num, true);
										player.damage();
									},
								},
								two: {
									trigger: { player: 'phaseDiscardBefore' },
									_priority: 10,
									forced: true,
									content() {
										trigger.untrigger();
										trigger.finish();
									},
								},
							},
						},
						zyile_shiji: {
							trigger: { global: 'gameDrawAfter' },
							forced: true,
							_priority: 333,
							popup: false,
							silent: true,
							filter(event, player, name) {
								return !player.storage.zyile_shijix;
							},
							content() {
								var handcards1, handcards2, judges, equips, viewAs, i, j;
								player.storage.zyile_shijix = [];
								player.storage.zyile_shijix2 = false;
								var table = document.createElement('table');
								var tr, td, str, st;
								var players = game.players.concat(game.dead);
								for (var i of players) {
									player.storage.zyile_shijix5.push(i.name);
								}
								for (var i of game.players) {
									viewAs = [];
									handcards1 = [];
									handcards2 = [];
									judges = [];
									equips = [];
									for (j = 0; j < i.node.handcards1.childNodes.length; j++) handcards1.push(i.node.handcards1.childNodes[j]);
									for (j = 0; j < i.node.handcards2.childNodes.length; j++) handcards2.push(i.node.handcards2.childNodes[j]);
									for (j = 0; j < i.node.judges.childNodes.length; j++) {
										viewAs.push(i.node.judges.childNodes[j].viewAs);
										judges.push(i.node.judges.childNodes[j]);
									}
									for (j = 0; j < i.node.equips.childNodes.length; j++) equips.push(i.node.equips.childNodes[j]);
									tr = document.createElement('tr');
									tr.style.verticalAlign = 'top';
									table.appendChild(tr);
									td = document.createElement('td');
									td.innerHTML = get.translation(i);
									tr.appendChild(td);
									td = document.createElement('td');
									td.innerHTML = handcards1.length + handcards2.length;
									tr.appendChild(td);
									str = '';
									if (equips.length + judges.length) {
										if (equips.length) {
											str += get.translation(equips);
											if (judges.length) {
												str += '、';
											}
										}
										if (judges.length) {
											str += get.translation(judges, 'viewAs');
										}
									} else {
										str = '';
									}
									td = document.createElement('td');
									td.innerHTML = str;
									tr.appendChild(td);
									/**
									 * 深拷贝
									 * @param target 你要深拷贝的目标
									 * @param map 缓存
									 * @returns {{}|any}
									 */
									function deepClone4(target, map) {
										if (!map) map = new Map();
										if (target !== null && typeof target === 'object') {
											let cloneTarget = map.get(target);
											if (cloneTarget) {
												return cloneTarget;
											}
											if (target instanceof Array) {
												cloneTarget = [];
												map.set(target, cloneTarget);
												target.forEach((item, index) => {
													cloneTarget[index] = deepClone4(item, map);
												});
											} else {
												cloneTarget = {};
												map.set(target, cloneTarget);
												Object.keys(target).forEach((key) => {
													cloneTarget[key] = deepClone4(target[key], map);
												});
											}
											return cloneTarget;
										}
										return target;
									}
									player.storage.zyile_shijix.push({
										player: i,
										handcards1: handcards1,
										handcards2: handcards2,
										current: deepClone4(i),
										judges: judges,
										equips: equips,
										viewAs: viewAs,
										value: handcards1.length + handcards2.length + equips.length - judges.length,
									});
								}
								table.firstChild.firstChild.style.width = '452x';
								table.firstChild.childNodes[1].style.width = '48px';
								player.storage.zyile_shijix3 = '未发动';
							},
							group: ['zyile_shijix'],
						},
						zyile_shijix: {
							intro: {
								content(storage, player) {
									if (true) {
										return player.storage.zyile_shijix3;
									}
								},
							},
							audio: true,
							trigger: { player: 'dieBegin' },
							_priority: -222,
							filter(event, player) {
								if (player.storage.zyile_shijix2) return false;
								if (player.storage.zyile_shijix) return true;
								return false;
							},
							check(event, player) {
								player.hp <= 0;
							},
							init(player) {
								player.storage.zyile_shijix5 = [];
							},
							content() {
								'step 0';
								trigger.untrigger();
								trigger.finish();
								('step 1');
								if (game.dead.length) {
									while (game.dead.length) {
										game.dead[0].revive();
									}
								}
								for (var i of game.players) {
									if (i == player) continue;
									if (i.hp < i.maxHp) i.hp = i.maxHp;
									for (var skill of i.skills) {
										i.restoreSkill(skill);
									}
									i.update();
								}
								('step 2');
								('step 3');
								ui.window.style.transition = 'all 0.5s';
								ui.window.classList.add('zoomout3');
								ui.window.delete();
								ui.window.hide();
								game.addVideo('skill', event.player, 'zyile_shijix');
								('step 4');
								var storage = event.player.storage.zyile_shijix;
								var storage2 = event.player.storage.zyile_shijix5;
								var player, frag;
								var i,
									j,
									players = [],
									num = 0,
									players2 = game.players.concat(game.dead);
								for (var i = 0; i < storage2.length; i++) {
									players.push(storage2[i]);
								}
								while (num < players2.length) {
									var player = players.shift();
									players2[num].init(player.name, player.name2);
									players2[num].update();
									num++;
								}
								for (var i = 0; i < storage.length; i++) {
									if (game.players.includes(storage[i].player)) {
										player = storage[i].player;
										for (const current in storage[i].current) {
											player[i] = current[i];
										}
										while (player.node.handcards1.childNodes.length) ui.discardPile.appendChild(player.node.handcards1.firstChild);
										while (player.node.handcards2.childNodes.length) ui.discardPile.appendChild(player.node.handcards2.firstChild);
										while (player.node.judges.childNodes.length) ui.discardPile.appendChild(player.node.judges.firstChild);
										while (player.node.equips.childNodes.length) ui.discardPile.appendChild(player.node.equips.firstChild);
									}
								}
								for (var i = 0; i < storage.length; i++) {
									if (game.players.includes(storage[i].player)) {
										player = storage[i].player;
										game.arrangePlayers();
										for (j = 0; j < storage[i].handcards1.length; j++) {
											if (storage[i].handcards1[j].parentNode == ui.discardPile || storage[i].handcards1[j].parentNode == ui.cardPile) player.node.handcards1.appendChild(storage[i].handcards1[j]);
										}
										for (j = 0; j < storage[i].handcards2.length; j++) {
											if (storage[i].handcards2[j].parentNode == ui.discardPile || storage[i].handcards2[j].parentNode == ui.cardPile) player.node.handcards2.appendChild(storage[i].handcards2[j]);
										}
										for (j = 0; j < storage[i].equips.length; j++) {
											if (storage[i].equips[j].parentNode == ui.discardPile || storage[i].equips[j].parentNode == ui.cardPile) player.node.equips.appendChild(storage[i].equips[j]);
										}
										for (j = 0; j < storage[i].judges.length; j++) {
											if (storage[i].judges[j].parentNode == ui.discardPile || storage[i].judges[j].parentNode == ui.cardPile) {
												storage[i].judges[j].viewAs = storage[i].viewAs[j];
												player.node.judges.appendChild(storage[i].judges[j]);
											}
										}
										player.update();
									}
								}
								ui.window.classList.remove('zoomout3');
								ui.window.classList.add('zoomin3');
								document.body.appendChild(ui.window);
								var data = {};
								for (var i of game.players) {
									data[i.dataset.position] = {
										h: get.cardsInfo(i.getCards('h')),
										e: get.cardsInfo(i.getCards('e')),
										j: get.cardsInfo(i.getCards('j')),
									};
								}
								game.addVideo('skill', event.player, ['zyile_shijix', data]);
								ui.updatehl();
								player.update();
								('step 5');
								ui.window.show();
								ui.window.classList.remove('zoomin3');
								setTimeout(function () {
									ui.window.style.transition = '';
									game.resume();
								}, 500);
								event.player.storage.zyile_shijix2 = true;
								event.player.storage.zyile_shijix3 = '已发动';
								game.pause();
								('step 6');
								var player = event.player;
								if (player.hp < player.maxHp) player.hp = player.maxHp;
								player.update();
								var cards = [];
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									cards.push(ui.discardPile.childNodes[i]);
								}
								ui.discardPile.innerHTML = '';
								if (Array.isArray(cards)) for (var i of cards) {
									ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
								}
								game.phaseNumber = 1;
								game.roundNumber = 1;
								_status.event.trigger('gameStart');
								('step 7');
								game.gameDraw(player, 0);
							},
						},
						zyile_xianjing: {
							trigger: { player: 'phaseDrawBegin' },
							check(event, player) {
								if (player.countCards('h') < 6) return 1;
								return 0;
							},
							content() {
								'step 0';
								trigger.untrigger();
								trigger.finish();
								event.cards = [];
								event.types = [];
								for (var i in lib.card) {
									if (!lib.translate[i + '_info']) continue;
									if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
									if (lib.config.hiddenCardPack.indexOf(i) == 0) continue;
									var info = lib.card[i];
									if (info.type == 'basic' || info.type == 'equip' || info.type == 'trick' || info.type == 'delay') continue;
									if (info.type && !event.types.includes(info.type)) event.types.push(info.type);
								}
								event.num = event.types.length - 1;
								('step 1');
								while (event.num >= 0) {
									var list = [];
									for (var i in lib.card) {
										if (!lib.translate[i + '_info']) continue;
										if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
										if (lib.config.hiddenCardPack.indexOf(i) == 0) continue;
										if (lib.card[i].type == event.types[event.num]) list.push(i);
									}
									var card = game.createCard(list.randomGet());
									if (card) {
										event.cards.push(card);
									}
									event.num--;
								}
								('step 2');
								if (event.cards.length) player.gain(event.cards, 'draw');
							},
							ai: {
								threaten: 5,
							},
						},
						zyile_pukemosu: {
							enable: 'phaseUse',
							usable: 1,
							prompt: '扑克魔术',
							precreate1(event, player) {
								'step 0';
								event.cards = [];
								event.types = [];
								for (var i in lib.card) {
									if (!lib.translate[i + '_info']) continue;
									if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
									if (lib.config.hiddenCardPack.includes(i)) continue;
									var info = lib.card[i];
									if (info.type && !event.types.includes(info.type)) event.types.push(info.type);
								}
								event.num = event.types.length - 1;
								('step 1');
								while (event.num >= 0) {
									var list = [];
									for (var i in lib.card) {
										if (!lib.translate[i + '_info']) continue;
										if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
										if (lib.config.hiddenCardPack.includes(i)) continue;
										if (lib.card[i].type == event.types[event.num]) list.push(i);
									}
									var card = game.createCard(list.randomGet());
									if (card) {
										event.cards.push(card);
									}
									event.num--;
								}
								('step 2');
								if (event.cards.length) player.gain(event.cards, 'draw');
							},
							precreate2(player) {
								var players = game.filterPlayer();
								players.remove(player);
								for (var i of players) {
									var nature = ['fire', 'thunder', 'poison', ''].randomGet();
									var num = [1, 2, 3].randomGet();
									i.damage(num, nature);
								}
							},
							precreate3(event, player) {
								'step 0';
								event.num = 6;
								var list = [];
								event.list = list;
								for (var i = 0; i < lib.inpile.length; i++) {
									if (lib.filter.filterCard({ name: lib.inpile[i] }, player)) {
										var info = lib.card[lib.inpile[i]];
										if (info.type == 'trick' && !info.multitarget && !info.notarget) {
											if (Array.isArray(info.selectTarget)) {
												if (info.selectTarget[0] > 0 && info.selectTarget[1] >= info.selectTarget[0]) {
													list.push(lib.inpile[i]);
												}
											} else if (typeof info.selectTarget == 'number') {
												list.push(lib.inpile[i]);
											}
										}
									}
								}
								('step 1');
								var list = event.list;
								while (list.length && event.num-- > 0) {
									var card = { name: list.randomRemove() };
									var info = get.info(card);
									var targets = game.filterPlayer(function (current) {
										return lib.filter.filterTarget(card, player, current);
									});
									if (targets.length) {
										targets.sort(lib.sort.seat);
										if (info.selectTarget == -1) {
											player.useCard(card, targets, 'noai');
										} else {
											var num = info.selectTarget;
											if (Array.isArray(num)) {
												if (targets.length < num[0]) continue;
												num = num[0] + Math.floor(Math.random() * (num[1] - num[0] + 1));
											} else {
												if (targets.length < num) continue;
											}
											player.useCard(card, targets.randomGets(num), 'noai');
										}
									}
								}
							},
							precreate4(player) {
								var list = [];
								for (var i in lib.character) {
									if (lib.character[i].mode && lib.character[i].mode.includes(lib.config.mode) == false) continue;
									if (i != 'list') list.push(i);
								}
								var skills2 = [];
								for (var i = 0; i < list.length; i++) {
									var info = lib.character[list[i]];
									if (info) {
										var skills = info[3];
										for (var j = 0; j < skills.length; j++) {
											skills2.push(skills[j]);
										}
									}
								}
								var skills3 = skills2.randomGets(3);
								for (var i = 0; i < skills3.length; i++) {
									player.addSkill(skills3[i]);
								}
							},
							precreate5(player) {
								var num = player.maxHp - player.hp + 2;
								player.draw(num);
								player.gainMaxHp(num);
								player.recover(num);
							},
							precreate6(player) {
								var players = game.filterPlayer();
								players.remove(player);
								for (var i of players) {
									if (!i.isLinked()) i.link();
									if (!i.isTurnedOver()) i.turnOver();
								}
							},
							precreate7(player) {
								var players = game.filterPlayer();
								players.remove(player);
								for (var i of players) {
									i.discard(i.getCards('hej'));
									i.loseHp(Math.floor(i.countCards('hej') / 4));
								}
							},
							precreate8(player) {
								var players = game.filterPlayer();
								players.remove(player);
								var list = [];
								for (var i in lib.card) {
									if (!lib.translate[i + '_info']) continue;
									if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
									if (lib.config.hiddenCardPack.indexOf(i) == 0) continue;
									if (lib.card[i].type == 'delay') list.push(i);
								}
								for (var i of players) {
									var cards = list.randomGets(Math.floor(player.hp / 2) + 1);
									for (var j = 0; j < cards.length; j++) {
										i.addJudge(game.createCard(cards[j]));
									}
								}
							},
							precreate9(player) {
								var players = game.filterPlayer();
								players.remove(player);
								var player2 = players.randomGet();
								if (!player2.isMad()) player2.addSkill('mad');
							},
							precreate10(event, player) {
								'step 0';
								event.cards = [];
								event.types = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									var name = lib.inpile[i];
									var info = lib.card[name];
									if (info.type && !event.types.includes(info.type)) event.types.push(info.type);
								}
								event.num = event.types.length - 1;
								('step 1');
								while (event.num >= 0) {
									var card = game.findCardInCardPile(function (card) {
										return get.type(card, 'trick') == event.types[event.num];
									});
									if (card) {
										event.cards.push(card);
									}
									event.num--;
								}
								('step 2');
								if (event.cards.length) player.gain(event.cards, 'draw');
							},
							content() {
								'step 0';
								if (event.isMine()) {
									event.mosu = ui.create.control('一', '一', '一', '一', function () {
										event.mosu.status--;
									});
									event.mosu.status = 4;
									for (var i = 0; i < event.mosu.childNodes.length; i++) {
										event.mosu.childNodes[i].num = 0;
									}
									event.timer = setInterval(function () {
										if (event.mosu.status <= 0) {
											clearInterval(event.timer);
											game.resume();
											event.mosu.close();
											return;
										}
										event.count(0);
										if (event.mosu.status > 1) event.count(1);
										if (event.mosu.status > 2) event.count(2);
										if (event.mosu.status > 3) event.count(3);
									}, 200);
									event.count = function (num) {
										event.mosu.childNodes[num].num = (event.mosu.childNodes[num].num + 1) % 10;
										if (event.mosu.childNodes[num].num == 2) event.mosu.childNodes[num].innerHTML = '二';
										else if (event.mosu.childNodes[num].num == 0) event.mosu.childNodes[num].innerHTML = '一';
										else event.mosu.childNodes[num].innerHTML = get.cnNumber(event.mosu.childNodes[num].num);
									};
									game.pause();
								} else {
									event.finish();
									var x = Math.random();
									if (x < 0.1) lib.skill.zyile_pukemosu.precreate1(event, player);
									if (x > 0.1 && x < 0.2) lib.skill.zyile_pukemosu.precreate2(player);
									if (x > 0.2 && x < 0.3) lib.skill.zyile_pukemosu.precreate3(event, player);
									if (x > 0.3 && x < 0.4) lib.skill.zyile_pukemosu.precreate4(player);
									if (x > 0.4 && x < 0.5) lib.skill.zyile_pukemosu.precreate5(player);
									if (x > 0.5 && x < 0.6) lib.skill.zyile_pukemosu.precreate6(player);
									if (x > 0.6 && x < 0.7) lib.skill.zyile_pukemosu.precreate7(player);
									if (x > 0.7 && x < 0.8) lib.skill.zyile_pukemosu.precreate8(player);
									if (x > 0.8 && x < 0.9) lib.skill.zyile_pukemosu.precreate9(player);
									if (x > 0.9) lib.skill.zyile_pukemosu.precreate10(event, player);
								}
								('step 1');
								var str = '';
								for (var i = 0; i < event.mosu.childNodes.length; i++) {
									str += event.mosu.childNodes[i].innerHTML;
								}
								player.$skill(str);
								switch (str) {
									case '一一一一':
										lib.skill.zyile_pukemosu.precreate1(event, player);
										break;
									case '二二二二':
										lib.skill.zyile_pukemosu.precreate2(player);
										break;
									case '三三三三':
										lib.skill.zyile_pukemosu.precreate3(event, player);
										break;
									case '四四四四':
										lib.skill.zyile_pukemosu.precreate4(player);
										break;
									case '五五五五':
										lib.skill.zyile_pukemosu.precreate5(player);
										break;
									case '六六六六':
										lib.skill.zyile_pukemosu.precreate6(player);
										break;
									case '七七七七':
										lib.skill.zyile_pukemosu.precreate7(player);
										break;
									case '八八八八':
										lib.skill.zyile_pukemosu.precreate8(player);
										break;
									case '九九九九':
										lib.skill.zyile_pukemosu.precreate9(player);
										break;
									default:
										player.recover();
										lib.skill.zyile_pukemosu.precreate10(event, player);
										break;
								}
								player.draw();
							},
							ai: {
								order: 10,
								result: {
									player(player) {
										return 1;
									},
								},
								threaten: 5,
							},
						},
						zyile_baike: {
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								if (player == target) return false;
								return target.storage.zyile_menghua;
							},
							selectTarget: 1,
							filter(event, player) {
								for (var i of game.players) {
									if (i == player) continue;
									if (i.storage.zyile_menghua) return true;
								}
								return false;
							},
							content() {
								'step 0';
								target.reinit(target.name, target.storage.zyile_menghua);
								('step 1');
								delete target.storage.zyile_menghua;
								if (target.storage['zyile_menghua2']) {
									target.unmark(target.name + '_charactermark');
									delete target.storage['zyile_menghua2'];
								}
								('step 2');
								var skills = lib.character[target.name][3];
								for (var j = 0; j < skills.length; j++) {
									player.addSkill(skills[j]);
								}
								target.finished = true;
							},
							ai: {
								expose: 0.3,
								threaten: 2,
								order: 1,
								result: {
									player(player) {
										var num = 0;
										for (var i of game.players) {
											if (i == player) continue;
											if (i.storage.zyile_menghua) num++;
										}
										if (num > 1) return 0;
										return -1.5;
									},
									target(player, target) {
										if (target.finished) return 0;
										return -1;
									},
								},
							},
						},
						_zyileguansu: {
							trigger: { global: 'gameStart' },
							forced: true,
							silent: true,
							filter(event, player) {
								return game.boss && game.bossinfo && game.bossinfo.chongzheng && game.boss.hasSkill('zyile_guansu');
							},
							content() {
								game.bossinfo.chongzheng = 999;
								if (game.boss == player) player.directgain(get.cards(4));
							},
							mod: {
								playerEnabled(card, player, target) {
									for (var i of game.players) {
										if (i.hasSkill('zyile_guansu')) {
											if (player.hasSkill('zyile_guansu')) return;
											if (!player.storage.zyile_menghua && target.hp < player.hp) return false;
										}
									}
								},
							},
						},
						zyile_guansu: {
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return event.player && event.source && event.player.isAlive() && event.source.isAlive() && event.player.storage.zyile_menghua;
							},
							forced: true,
							content() {
								'step 0';
								trigger.source
									.chooseBool()
									.set('createDialog', [get.prompt('zyile_guansu'), 'hidden'])
									.set('dialogselectx', true)
									.set('ai', function () {
										return get.attitude(trigger.source, trigger.player);
									});
								('step 1');
								if (result.bool) {
									event.num = trigger.player.maxHp - trigger.player.hp;
									trigger.player.loseMaxHp(event.num, true);
								} else {
									event.finish();
								}
							},
						},
						zyile_quanshe: {
							trigger: { player: 'phaseBegin' },
							forced: true,
							filter(event, player) {
								for (var i of game.players) {
									if (i == player) continue;
									if (i.storage.zyile_menghua) return true;
								}
								return false;
							},
							content() {
								'step 0';
								event.cards = [];
								event.types = [];
								for (var i in lib.card) {
									if (!lib.translate[i + '_info']) continue;
									if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
									if (lib.config.hiddenCardPack.indexOf(i) == 0) continue;
									var info = lib.card[i];
									if (info.type && !event.types.includes(info.type)) event.types.push(info.type);
								}
								event.num = event.types.length - 1;
								('step 1');
								while (event.num >= 0) {
									var list = [];
									for (var i in lib.card) {
										if (!lib.translate[i + '_info']) continue;
										if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
										if (lib.config.hiddenCardPack.indexOf(i) == 0) continue;
										if (lib.card[i].type == event.types[event.num]) list.push(i);
									}
									var card = game.createCard(list.randomGet());
									if (card) {
										event.cards.push(card);
									}
									event.num--;
								}
								('step 2');
								if (event.cards.length) player.gain(event.cards, 'draw');
							},
							ai: {
								threaten: 4,
							},
						},
						zyile_menghua: {
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								if (player == target) return false;
								return !target.storage.zyile_menghua;
							},
							selectTarget: 1,
							filter(event, player) {
								for (var i of game.players) {
									if (i == player) continue;
									if (!i.storage.zyile_menghua) return true;
								}
								return false;
							},
							content() {
								'step 0';
								var list;
								if (target.sex == 'male') {
									if (_status.connectMode) {
										list = get.charactersOL(function (i) {
											return lib.character[i][0] != 'female';
										});
									} else {
										list = get.gainableCharacters(function (info) {
											return info[0] == 'female';
										});
									}
								} else {
									if (_status.connectMode) {
										list = get.charactersOL(function (i) {
											return lib.character[i][0] != 'male';
										});
									} else {
										list = get.gainableCharacters(function (info) {
											return info[0] == 'male';
										});
									}
								}
								var players = game.players.concat(game.dead);
								for (var i of players) {
									list.remove(i.name);
									list.remove(i.name1);
									list.remove(i.name2);
								}
								var dialog = ui.create.dialog('将武将牌替换为一名角色', 'hidden');
								dialog.add([list, 'character']);
								player.chooseButton(dialog, true).set('ai', function (button) {
									return -get.rank(button.link, true) - lib.character[button.link][2];
								});
								('step 1');
								target.storage.zyile_menghua = target.name;
								target.storage['zyile_menghua2'] = target.markCharacter(target, {
									name: '萌化',
									content: get.translation(target) + '已萌化',
								});
								game.addVideo('markCharacter', target, {
									name: '萌化',
									content: get.translation(target) + '已萌化',
									id: 'zyile_menghua2',
									target: target.dataset.position,
								});
								target.reinit(target.name, result.links[0]);
							},
							ai: {
								expose: 0.3,
								threaten: 2,
								order: 9,
								result: {
									target(player, target, card) {
										if (target.finished) return 0;
										return -1;
									},
								},
							},
						},
						_checkshenxing: {
							trigger: { global: 'phaseEnd' },
							forced: true,
							silent: true,
							filter(event, player, name) {
								game.sort();
							},
							content() { },
						},
						zyile_shenxing: {
							trigger: { player: 'phaseEnd' },
							forced: true,
							filter(event, player) {
								for (var i of game.players) {
									if (i == player) continue;
									i.enableSkill('zyile_shenxing_disableSkill');
									i.removeSkill('zyile_shenxing_responds');
								}
								var num = game.phaseNumber;
								return num % 2 != 0;
							},
							content() {
								'step 0';
								game.phaseNumber++;
								game.players.remove(player);
								game.removedPlayers.push(player);
							},
							group: ['zyile_shenxing_disableSkill', 'zyile_shenxing_checkshenxing'],
							subSkill: {
								disableSkill: {
									trigger: { player: 'phaseBegin' },
									forced: true,
									filter(event, player) {
										var num = game.phaseNumber;
										return num % 2 == 0;
									},
									content() {
										game.phaseNumber--;
										for (var i of game.players) {
											if (i == player) continue;
											i.disableSkill('zyile_shenxing_disableSkill', i.getSkills(true, true, false), true);
											i.addSkill('zyile_shenxing_responds');
										}
									},
								},
								responds: {
									mod: {
										cardEnabled() {
											return false;
										},
										cardUsable() {
											return false;
										},
										cardRespondable() {
											return false;
										},
										cardSavable() {
											return false;
										},
									},
								},
								checkshenxing: {
									trigger: { global: 'phaseAfter' },
									forced: true,
									silent: true,
									_priority: -100,
									filter(event, player, name) {
										if (event.player.next == player) {
											game.players.add(player);
											game.removedPlayers.remove(player);
										}
									},
									content() { },
								},
							},
						},
						zyile_xiangtian: {
							trigger: { player: 'drawBegin' },
							forced: true,
							content() {
								'step 0';
								trigger.untrigger();
								trigger.finish();
								event.cards = [];
								event.types = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									var name = lib.inpile[i];
									var info = lib.card[name];
									if (info.type && !event.types.includes(info.type)) event.types.push(info.type);
								}
								event.num = event.types.length - 1;
								('step 1');
								while (event.num >= 0) {
									var card = game.findCardInCardPile(function (card) {
										return get.type(card, 'trick') == event.types[event.num];
									});
									if (card) {
										event.cards.push(card);
									}
									event.num--;
								}
								('step 2');
								if (event.cards.length) player.gain(event.cards, 'draw');
							},
							group: ['zyile_xiangtian_discard'],
							subSkill: {
								discard: {
									trigger: { player: 'discardAfter' },
									forced: true,
									filter(event, player) {
										return event.cards && event.cards.length;
									},
									content() {
										player.gain(trigger.cards, 'gain2');
									},
								},
							},
						},
						zyile_luxin: {
							trigger: { source: 'damageAfter', global: 'phaseEnd' },
							forced: true,
							filter(event, player) {
								return event.player != player && event.player.isAlive();
							},
							content() {
								'step 0';
								player
									.chooseTarget('你可以指定一名角色并令' + get.translation(trigger.player) + '对其使用【杀】,若其不使用则' + get.translation(trigger.player) + '失去一点体力并且所指定的角色弃置所有牌.', function (card, player, target) {
										return player != target;
									})
									.set('ai', function (target) {
										return get.effect(target, { name: 'sha' }, _status.event.player);
									});
								('step 1');
								if (result.targets?.length) {
									event.target = result.targets[0];
									trigger.player
										.chooseToUse({ name: 'sha' }, event.target, -1, '戮心:对' + get.translation(result.targets[0]) + '使用一张杀,否则你失去一点体力并且' + get.translation(result.targets[0]) + '弃置所有牌.')
										.set('targetRequired', true)
										.set('ai', function (target) {
											if (event.target.countCards('h') == 0) return -1;
											return 1;
										});
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									event.finish();
								} else {
									trigger.player.loseHp();
									event.target.discard(event.target.getCards('hej'));
								}
							},
						},
						zyile_xianshen: {
							trigger: { global: 'phaseDiscardBegin' },
							forced: true,
							filter(event, player) {
								return event.player != player && event.player.isAlive();
							},
							content() {
								'step 0';
								if (trigger.player.getStat('damage') > 0) {
									player.chooseBool('是否要令' + get.translation(trigger.player) + '跳过下个摸牌阶段？').set('choice', get.attitude(player, trigger.player) <= 0);
								} else {
									trigger.player.$give(Math.floor(trigger.player.countCards('h') / 2), player);
									player.gain(trigger.player.getCards('h').randomGets(Math.floor(trigger.player.countCards('h') / 2)));
									event.finish();
								}
								('step 1');
								if (result.bool) {
									trigger.player.skip('phaseDraw');
								}
							},
						},
						zyile_longyu: {
							enable: 'phaseUse',
							filter(event, player) {
								return player.getCards('he').length && player.getHandcardLimit() > 0;
							},
							chooseButton: {
								dialog() {
									var list = [],
										list2 = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										var info = lib.card[name];
										if (info.autoViewAs) continue;
										if (info.type != 'trick') continue;
										list.push([get.translation(lib.card[name].type), '', name]);
									}
									list.sort(lib.sort.name);
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										var info = lib.card[name];
										if (info.autoViewAs) continue;
										if (info.type != 'delay') continue;
										list2.push([get.translation(lib.card[name].type), '', name]);
									}
									list2.sort(lib.sort.name);
									var dialog = ui.create.dialog('龙域:请选择想要使用的锦囊牌');
									dialog.addText('普通锦囊牌');
									dialog.add([list, 'vcard']);
									dialog.addText('延时锦囊牌');
									dialog.add([list2, 'vcard']);
									return dialog;
								},
								filter(button, player) {
									return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button, player) {
									var player = _status.event.player;
									var recover = 0,
										lose = 1;
									for (var i of game.players) {
										if (!i.isOut()) {
											if (i.hp < i.maxHp) {
												if (get.attitude(player, i) > 0) {
													if (i.hp < 2) {
														lose--;
														recover += 0.5;
													}
													lose--;
													recover++;
												} else if (get.attitude(player, i) < 0) {
													if (i.hp < 2) {
														lose++;
														recover -= 0.5;
													}
													lose++;
													recover--;
												}
											} else {
												if (get.attitude(player, i) > 0) {
													lose--;
												} else if (get.attitude(player, i) < 0) {
													lose++;
												}
											}
										}
									}
									if (lose > recover && lose > 0) return button.link[2] == 'wanjian' ? 1 : -1;
									if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
									if (game.players.length < 4) return button.link[2] == 'shunshou' ? 1 : -1;
									return button.link[2] == 'wuzhong' ? 1 : -1;
								},
								backup(links, player) {
									return {
										filterCard: true,
										position: 'he',
										selectCard: 1,
										popname: true,
										ai1(card) {
											return 9 - get.value(card);
										},
										viewAs: { name: links[0][2] },
									};
								},
								prompt(links, player) {
									return '将一张手牌当做' + get.translation(links[0][2]) + '使用.';
								},
							},
							ai: {
								order: 10,
								result: {
									player(player) {
										var cards = player.getCards('he');
										if (Array.isArray(cards)) for (var i of cards) {
											if (get.value(i) < 9) return 1;
										}
										return -1;
									},
								},
								threaten: 1.5,
							},
							group: ['zyile_longyu_active', 'zyile_longyu_end', 'zyile_longyu_wuxie'],
							subSkill: {
								active: {
									trigger: { player: ['useCard', 'respond'] },
									forced: true,
									popup: false,
									silent: false,
									filter(event, player) {
										return event.card;
									},
									content() {
										if (!player.storage.zyile_longyu) {
											player.storage.zyile_longyu = 1;
										} else {
											player.storage.zyile_longyu++;
										}
									},
									mod: {
										maxHandcard(player, current) {
											if (player.storage.zyile_longyu && typeof player.storage.zyile_longyu == 'number') return current - player.storage.zyile_longyu;
										},
									},
								},
								end: {
									trigger: { player: ['phaseEnd'] },
									forced: true,
									popup: false,
									silent: false,
									content() {
										player.storage.zyile_longyu = 0;
										delete player.storage.zyile_longyu;
									},
								},
								wuxie: {
									enable: 'chooseToUse',
									filter(event, player) {
										return player.getCards('he').length && player.getHandcardLimit() > 0;
									},
									filterCard: true,
									selectCard: 1,
									position: 'he',
									popname: true,
									viewAs: { name: 'wuxie' },
									viewAsFilter(player) {
										return player.getCards('he').length && player.getHandcardLimit() > 0;
									},
								},
							},
						},
						zyile_tianyun: {
							trigger: { player: ['phaseUseEnd'] },
							forced: true,
							filter(event, player) {
								return event.parent.name != 'zyile_tianyun';
							},
							content() {
								player.getStat().card = {};
								player.getStat().skill = {};
								player.phaseUse();
							},
							group: ['zyile_tianyun_draw', 'zyile_tianyun_begin', 'zyile_tianyun_end', 'zyile_tianyun_judge', 'zyile_tianyun_discard'],
							subSkill: {
								judge: {
									trigger: { player: ['phaseJudgeBefore'] },
									forced: true,
									silent: true,
									popup: false,
									filter(event, player) {
										return player.isTianyun && event.parent.name != 'zyile_tianyun_discard';
									},
									content() {
										'step 0';
										trigger.untrigger();
										trigger.finish();
										('step 1');
										player.phaseDiscard();
									},
								},
								discard: {
									trigger: { player: ['phaseDiscardBefore'] },
									forced: true,
									silent: true,
									popup: false,
									filter(event, player) {
										return player.isTianyun && event.parent.name != 'zyile_tianyun_judge';
									},
									content() {
										'step 0';
										trigger.untrigger();
										trigger.finish();
										('step 1');
										player.phaseJudge();
									},
								},
								begin: {
									trigger: { player: ['phaseBegin'] },
									forced: true,
									popup: false,
									prompt(event, player) {
										return '发动【天运】调换判定阶段和弃牌阶段的顺序？';
									},
									content() {
										player.isTianyun = true;
									},
								},
								end: {
									trigger: { player: ['phaseEnd'] },
									forced: true,
									silent: true,
									popup: false,
									content() {
										player.isTianyun = false;
									},
								},
								draw: {
									trigger: { player: ['drawBegin'] },
									forced: true,
									filter(event, player) {
										return player.countCards('h') > 0;
									},
									content() {
										trigger.num += Math.min(player.countCards('h'), 4);
									},
								},
							},
						},
						zyile_huangshi: {
							group: ['xuanyuanjian', 'xuanyuanjian2', 'xuanyuanjian3', 'zyile_huangshi_Start', 'xuanyuan'],
							subSkill: {
								Start: {
									init() {
										var shenqi = ['donghuangzhong', 'fuxiqin', 'kunlunjingc', 'xuanyuanjian', 'pangufu', 'shennongding', 'lianyaohu', 'haotianta', 'nvwashi', 'kongdongyin', 'shenqi_zhuxian', 'shenqi_zaohua', 'shenqi_taixushengjia'];
										if (!lib.cardPile.swd) {
											for (var j of shenqi.randomGets(shenqi / 2)) {
												var card = game.createCard(j, null, null, null);
												ui.cardPile.appendChild(card);
											}
										}
										var DNTvCO = [],
											UBfkYd;
										for (UBfkYd = 0; UBfkYd < lib.onwash.length; UBfkYd++) {
											lib.onwash[UBfkYd]();
										}
										for (UBfkYd = 0; UBfkYd < ui.cardPile.childNodes.length; UBfkYd++) {
											if (get.info(ui.cardPile.childNodes[UBfkYd]).vanish) continue;
											DNTvCO.push(ui.cardPile.childNodes[UBfkYd]);
										}
										for (UBfkYd = 0; UBfkYd < ui.discardPile.childNodes.length; UBfkYd++) {
											if (get.info(ui.discardPile.childNodes[UBfkYd]).vanish) continue;
											DNTvCO.push(ui.discardPile.childNodes[UBfkYd]);
										}
										ui.cardPile.innerHTML = '';
										ui.discardPile.innerHTML = '';
										DNTvCO.randomSort();
										for (var UBfkYd = 0; UBfkYd < DNTvCO.length; UBfkYd++) {
											ui.cardPile.appendChild(DNTvCO[UBfkYd]);
										}
									},
								},
							},
							trigger: { player: ['phaseBegin'] },
							forced: true,
							prompt(event, player) {
								return '发动【皇室】装备场上或牌堆里的一件神器？';
							},
							check(event, player) {
								return 1;
							},
							content() {
								var cards = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									var card = ui.cardPile.childNodes[i];
									if (get.is.shenqi(card)) {
										cards.push(card);
									}
								}
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									var card = ui.discardPile.childNodes[i];
									if (get.is.shenqi(card)) {
										cards.push(card);
									}
								}
								for (var i of game.players) {
									if (i == player) continue;
									var cardsx = i.getCards('e');
									for (var j = 0; j < cardsx.length; j++) {
										if (get.is.shenqi(cardsx[j])) {
											cards.push(cardsx[j]);
										}
									}
								}
								if (cards.length) player.equip(cards.randomGet());
							},
						},
						zyile_xianyi: {
							mod: {
								maxHandcard() {
									return Infinity;
								},
							},
							init(player) {
								player.removeSkill = function (skill) {
									if (!skill) return;
									for (var i of game.players) {
										if (i == player) continue;
										i.loseHp();
									}
									if (Array.isArray(skill)) {
										for (var i = 0; i < skill.length; i++) {
											this.removeSkill(skill[i]);
										}
									} else {
										this.unmarkSkill(skill);
										game.broadcastAll(
											function (player, skill) {
												player.skills.remove(skill);
												player.hiddenSkills.remove(skill);
											},
											this,
											skill
										);
										this.checkConflict(skill);
										delete this.tempSkills[skill];
										var info = lib.skill[skill];
										if (info) {
											if (info.onremove) {
												if (typeof info.onremove == 'function') {
													info.onremove(this, skill);
												} else if (typeof info.onremove == 'string') {
													if (info.onremove == 'storage') {
														delete this.storage[skill];
													} else {
														var cards = this.storage[skill];
														if (get.itemtype(cards) == 'card') {
															cards = [cards];
														}
														if (get.itemtype(cards) == 'cards') {
															if (this.onremove == 'discard') {
																this.$throw(cards);
															}
															if (this.onremove == 'discard' || this.onremove == 'lose') {
																if (Array.isArray(cards)) for (var i of cards) {
																	ui.discardPile.appendChild(i);
																}
																delete this.storage[skill];
															}
														}
													}
												} else if (Array.isArray(info.onremove)) {
													for (var i = 0; i < info.onremove.length; i++) {
														delete this.storage[info.onremove[i]];
													}
												} else if (info.onremove === true) {
													delete this.storage[skill];
												}
											}
											this.removeSkillTrigger(skill);
											if (!info.keepSkill) {
												this.removeAdditionalSkill(skill);
											}
										}
										this.enableSkill(skill + '_awake');
									}
									return skill;
								};
							},
							trigger: { player: ['equipEnd'] },
							forced: true,
							filter(event, player) {
								if (get.is.shenqi(event.card)) return true;
								return false;
							},
							content() {
								for (var i of game.players) {
									if (i == player) continue;
									i.loseHp();
								}
							},
							group: ['zyile_xianyi_equip', 'zyile_xianyi_loseHp', 'zyile_xianyi_loseEquip'],
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip') return [1, 3];
									},
								},
							},
							subSkill: {
								equip: {
									trigger: { player: 'equipBegin' },
									filter(event, player) {
										var types = get.subtype(event.card);
										return player.countCards('e', { subtype: types });
									},
									popup: false,
									forced: true,
									async content(event, trigger, player) {
										trigger.cancel();
										const card = trigger.cards[0];
										if (card) {
											const vcard = new lib.element.VCard(card);
											const cardSymbol = Symbol('card');
											card.cardSymbol = cardSymbol;
											card[cardSymbol] = vcard;
											player.vcardsMap?.equips.push(vcard);
											player.node.equips.appendChild(card);
											card.style.transform = '';
											card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
										}
										const info = get.info(card, false);
										if (info.skills) {
											for (const i of info.skills) {
												player.addSkillTrigger(i);
											}
										}
									},
								},
								loseHp: {
									trigger: { player: 'loseHpBefore' },
									forced: true,
									content() {
										trigger.untrigger();
										trigger.finish();
									},
								},
								loseEquip: {
									trigger: { player: 'loseEnd' },
									forced: true,
									filter(event, player) {
										if (player.equiping) return false;
										if (Array.isArray(event.cards)) for (var i of event.cards) {
											if (i.original == 'e') return player.isDamaged();
										}
										return false;
									},
									content() {
										player.recover();
									},
								},
							},
						},
						nohujia: {
							ai: {
								nohujia: true,
							},
						},
						zyile_lunhui: {
							nobracket: true,
							_priority: Infinity,
							init(player) {
								lib.onover.push(function () {
									var tB1 = 0;
									for (var HFDVs2 = 0; HFDVs2 < game.players.length; HFDVs2++) {
										tB1 += game.players[HFDVs2].hp;
									}
									var mhJgoyCAR3 = game.players.concat(game.dead);
									for (var HFDVs2 = 0; HFDVs2 < mhJgoyCAR3.length; HFDVs2++) {
										if (mhJgoyCAR3[HFDVs2].storage.zyile_xuwu && mhJgoyCAR3[HFDVs2].storage.zyile_xuwu >= tB1) {
											_status.over = false;
										}
									}
									if (_status.over) return;
									if (_status.skillaudio.includes('zyile_lunhui')) return;
									_status.skillaudio.add('zyile_lunhui');
									const evt = _status.event.getParent('phase');
									if (evt && evt.name) {
										evt.finish();
									}
									game.addVideo('playAudio', null, 'zyile_lunhui');
									setTimeout(function () {
										_status.skillaudio.remove('zyile_lunhui');
									}, 1000);
									var IhS5 = document.createElement('audio');
									IhS5.autoplay = true;
									IhS5.volume = lib.config.volumn_audio / 8;
									if (lib.onmobile) {
										IhS5.src = 'extension/概念武将/audio/zyile_lunhui.mp3';
									} else {
										IhS5.src = 'extension/概念武将/audio/zyile_lunhui.mp3';
									}
									IhS5.addEventListener('ended', function () {
										this.remove();
									});
									IhS5.onerror = function () {
										if (this._changed) {
											this.remove();
											if (onerror) {
												onerror();
											}
										} else {
											if (lib.onmobile) {
												IhS5.src = 'extension/概念武将/audio/zyile_lunhui.mp3';
											} else {
												IhS5.src = 'extension/概念武将/audio/zyile_lunhui.mp3';
											}
											this._changed = true;
										}
									};
									ui.window.appendChild(IhS5);
									game.pause();
									ui.window.removeChild(ui.backgroundMusic);
									var JHH_ZgLp7 = setInterval(function () {
										ui.arena.hide();
									}, 130);
									var my8 = setInterval(function () {
										ui.arena.show();
									}, 260);
									var my28 = setInterval(function () {
										if (lib.onmobile) {
											ui.background.setBackgroundImage('extension/概念武将/image/1.jpg');
										} else {
											ui.background.setBackgroundImage('extension/概念武将/image/1.jpg');
										}
									}, 200);
									var my38 = setInterval(function () {
										if (lib.onmobile) {
											ui.background.setBackgroundImage('extension/概念武将/image/2.jpg');
										} else {
											ui.background.setBackgroundImage('extension/概念武将/image/2.jpg');
										}
									}, 400);
									var my48 = setInterval(function () {
										if (lib.onmobile) {
											ui.background.setBackgroundImage('extension/概念武将/image/3.jpg');
										} else {
											ui.background.setBackgroundImage('extension/概念武将/image/3.jpg');
										}
									}, 600);
									var my58 = setInterval(function () {
										if (lib.onmobile) {
											ui.background.setBackgroundImage('extension/概念武将/image/4.jpg');
										} else {
											ui.background.setBackgroundImage('extension/概念武将/image/4.jpg');
										}
									}, 800);
									var my68 = setInterval(function () {
										if (lib.onmobile) {
											ui.background.setBackgroundImage('extension/概念武将/image/5.jpg');
										} else {
											ui.background.setBackgroundImage('extension/概念武将/image/5.jpg');
										}
									}, 1000);
									var my88 = setTimeout(function () {
										clearInterval(JHH_ZgLp7);
										clearInterval(my8);
										ui.arena.hide();
									}, 8000);
									setTimeout(function () {
										ui.window.style.transition = '';
										clearInterval(my28);
										clearInterval(my38);
										clearInterval(my48);
										clearInterval(my58);
										clearInterval(my68);
										ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
										ui.arena.show();
										ui.window.appendChild(ui.backgroundMusic);
										game.resume();
									}, 10000);
									var TJOHiey10 = [],
										HFDVs2;
									for (var HFDVs2 = 0; HFDVs2 < lib.onwash.length; HFDVs2++) {
										lib.onwash[HFDVs2]();
									}
									for (HFDVs2 = 0; HFDVs2 < ui.cardPile.childNodes.length; HFDVs2++) {
										if (get.info(ui.cardPile.childNodes[HFDVs2]).vanish) continue;
										TJOHiey10.push(ui.cardPile.childNodes[HFDVs2]);
									}
									for (HFDVs2 = 0; HFDVs2 < ui.discardPile.childNodes.length; HFDVs2++) {
										if (get.info(ui.discardPile.childNodes[HFDVs2]).vanish) continue;
										TJOHiey10.push(ui.discardPile.childNodes[HFDVs2]);
									}
									ui.cardPile.innerHTML = '';
									ui.discardPile.innerHTML = '';
									TJOHiey10.randomSort();
									for (var HFDVs2 = 0; HFDVs2 < TJOHiey10.length; HFDVs2++) {
										ui.cardPile.appendChild(TJOHiey10[HFDVs2]);
									}
									while (ui.controls.length) {
										ui.controls[0].close();
									}
									while (ui.dialogs.length) {
										ui.dialogs[0].close();
									}
									while (game.dead.length) {
										game.dead[0].revive();
									}
									for (var HFDVs2 = 0; HFDVs2 < game.players.length; HFDVs2++) {
										game.players[HFDVs2].stat = [{ skill: {}, card: {} }];
										game.players[HFDVs2].hp = game.players[HFDVs2].maxHp;
										game.players[HFDVs2].update();
										game.players[HFDVs2].clearSkills(true);
										game.players[HFDVs2].lose(game.players[HFDVs2].getCards('hej'))._triggered = null;
										game.players[HFDVs2].draw(4)._triggered = null;
										for (var skill of game.players[HFDVs2].skills) {
											game.players[HFDVs2].restoreSkill(skill);
										}
										game.broadcastAll(function () {
											ui.clear();
										});
									}
									game.addGlobalSkill('zyile_xuwu_fuyuan');
									game.arrangePlayers();
									var arr = document.querySelectorAll('.player');
									arr = Array.from(arr);
									arr.sort(lib.sort.position);
									window.setTimeout(function () {
										ui.arena.classList.remove('choose-character');
										ui.me.show();
										ui.mebg.show();
										ui.auto.classList.remove('hidden');
										ui.autonode.show();
										if (lib.config.radius_size == 'off') {
											if (ui.historybar) ui.historybar.style.borderRadius = '';
										}
										_status.event.trigger('zyile_xuwu_fuyuan');
									}, 8000);
								});
							},
						},
						zyile_xuwu_fuyuan: {
							trigger: {
								global: ['phaseBeginStart', 'useCardBefore', 'zyile_xuwu_fuyuan'],
							},
							_priority: 999999,
							forced: true,
							content() {
								window.setTimeout(() => {
									for (var i of game.players) {
										var info = lib.character[i.name];
										if (!info || !info[3]) continue;
										i.addSkill(info[3]);
									}
									game.removeGlobalSkill('zyile_xuwu_fuyuan');
								}, 100);
							},
						},
						zyile_xuwu: {
							nobracket: true,
							audio: 'ext:概念武将/audio:5',
							trigger: { player: ['damageEnd', 'loseHpEnd'] },
							_priority: 99,
							forced: true,
							marktext: '时',
							init(player) {
								player.storage.zyile_xuwu = 0;
							},
							intro: {
								content: 'mark',
							},
							content() {
								if (lib.onmobile) {
									game.playeranimaudio('zyile_xuwuanime2', 'extension/概念武将/audio/zyile_xuwuanime2.mp3');
									game.animationofgif('extension/概念武将/zyile_xuwuanime2.gif', 1000);
								} else {
									game.playeranimaudio('zyile_xuwuanime2', 'extension/概念武将/audio/zyile_xuwuanime2.mp3');
									game.animationofgif('extension/概念武将/zyile_xuwuanime2.gif', 1000);
								}
								if (player.storage.zyile_xuwu < 4) player.storage.zyile_xuwu++;
								player.markSkill('zyile_xuwu');
								for (var i = 0; i < player.node.marks.childNodes.length; i++) {
									if (player.node.marks.childNodes[i].name == 'zyile_xuwu') {
										player.node.marks.childNodes[i].setBackground(player.name, 'character');
										player.node.marks.childNodes[i].innerHTML = '';
									}
								}
							},
							group: ['zyile_xuwu_mark00', 'zyile_xuwu_mark0', 'zyile_xuwu_mark1', 'zyile_xuwu_mark2', 'zyile_xuwu_mark3', 'zyile_xuwu_mark4'],
							subSkill: {
								mark00: {
									forced: true,
									popup: false,
									silent: true,
									trigger: { player: 'phaseDiscardBefore' },
									content() {
										trigger.untrigger();
										trigger.finish();
									},
								},
								mark0: {
									forced: true,
									popup: false,
									silent: true,
									trigger: { player: 'phaseDrawBegin' },
									content() {
										trigger.num = Math.min(4, player.hp);
									},
									ai: {
										threaten(player, target) {
											if (target.hp == target.maxHp) return 2;
										},
									},
								},
								mark1: {
									audio: 'ext:概念武将/audio:true',
									trigger: { player: ['phaseBegin'] },
									forced: true,
									filter(event, player) {
										return player.storage.zyile_xuwu && player.storage.zyile_xuwu >= 1;
									},
									content() {
										'step 0';
										player
											.chooseTarget('是否发动对一名角色造成一点虚无伤害？', function (card, player, target) {
												if (player == target) return false;
												return true;
											})
											.set('ai', function (target) {
												return get.damageEffect(target, player, player);
											});
										('step 1');
										if (result.targets?.length) {
											player.line(result.targets[0], 'watermm');
											event.targets = result.targets[0];
											event.targets.addSkill('nohujia');
											event.targets.style.left = 'calc(50% - 120px)';
											event.targets.style.top = 'calc(50% - 60px)';
											event.targets.hide();
											var my88 = setTimeout(function () {
												event.targets.removeAttribute('style');
												event.targets.show();
											}, 3000);
										} else {
											event.finish();
										}
										('step 2');
										if (lib.onmobile) {
											game.playeranimaudio('zyile_xuwuanime', 'extension/概念武将/audio/zyile_xuwuanime.mp3');
											game.animationofgif('extension/概念武将/zyile_xuwu.gif', 3000);
										} else {
											game.playeranimaudio('zyile_xuwuanime', 'extension/概念武将/audio/zyile_xuwuanime.mp3');
											game.animationofgif('extension/概念武将/zyile_xuwu.gif', 3000);
										}
										event.targets.damage('notrigger', 'nosource')._triggered = null;
										('step 3');
										event.targets.removeSkill('nohujia');
									},
								},
								mark2: {
									audio: 'ext:概念武将/audio:true',
									trigger: { global: 'phaseBegin' },
									prompt(event, player) {
										var str = '';
										str += '是否发动【虚无存在】观看' + get.translation(event.player) + '的手牌？';
										return str;
									},
									check(event, player) {
										return 1;
									},
									filter(event, player) {
										if (event.player == player) return false;
										return event.player.countCards('h') && player.storage.zyile_xuwu && player.storage.zyile_xuwu >= 2;
									},
									content() {
										'step 0';
										if (lib.onmobile) {
											game.playeranimaudio('zyile_xuwugif', 'extension/概念武将/audio/zyile_xuwugif.mp3');
											game.animationofgif('extension/概念武将/zyile_xuwugif.gif', 2000);
										} else {
											game.playeranimaudio('zyile_xuwugif', 'extension/概念武将/audio/zyile_xuwugif.mp3');
											game.animationofgif('extension/概念武将/zyile_xuwugif.gif', 2000);
										}
										if (player.countCards('he')) {
											var str = '';
											str += '是否替换' + get.translation(trigger.player) + '的一张手牌？';
											player.chooseCardButton(str, trigger.player.getCards('h')).set('ai', function (button) {
												return get.value(button.link);
											});
										} else {
											player.viewCards('虚无存在', trigger.player.getCards('h'));
											event.finish();
										}
										('step 1');
										if (result.links?.length) {
											event.cards1 = result.links[0];
											player.chooseCard('请选择一张牌替换' + get.translation(event.cards1) + '这张牌', 'he', true).set('ai', function (card) {
												return -get.value(card);
											});
										} else {
											event.finish();
										}
										('step 2');
										if (result.cards?.length) {
											event.cards2 = result.cards[0];
											player.gain(event.cards1, trigger.player);
											trigger.player.$give(1, player);
											if (get.position(event.cards2) == 'h') player.$give(1, trigger.player);
											else player.$give(event.cards2, trigger.player);
											trigger.player.gain(event.cards2, player);
										}
									},
									ai: {
										expose: 0.2,
									},
								},
								mark3: {
									audio: 'ext:概念武将/audio:true',
									enable: 'phaseUse',
									usable: 1,
									filter(event, player) {
										return player.storage.zyile_xuwu && player.storage.zyile_xuwu >= 3;
									},
									content() {
										'step 0';
										if (lib.onmobile) {
											game.playeranimaudio('zyile_xuwugif4', 'extension/概念武将/audio/zyile_xuwugif4.mp3');
											game.animationofgif('extension/概念武将/zyile_xuwugif4.gif', 2000);
										} else {
											game.playeranimaudio('zyile_xuwugif4', 'extension/概念武将/audio/zyile_xuwugif4.mp3');
											game.animationofgif('extension/概念武将/zyile_xuwugif4.gif', 2000);
										}
										player.storage.zyile_xuwu--;
										player.markSkill('zyile_xuwu');
										for (var i = 0; i < player.node.marks.childNodes.length; i++) {
											if (player.node.marks.childNodes[i].name == 'zyile_xuwu') {
												player.node.marks.childNodes[i].setBackground(player.name, 'character');
												player.node.marks.childNodes[i].innerHTML = '';
											}
										}
										('step 1');
										for (var i of game.players) {
											if (i == player) continue;
											i.skip('phaseDraw');
											i.skip('phaseUse');
										}
									},
									ai: {
										order: 8,
										result: {
											player(player) {
												return 0.8;
											},
										},
									},
								},
								mark4: {
									trigger: { global: 'phaseBegin' },
									forced: true,
									popup: false,
									silent: true,
									content() {
										for (var i of game.players) {
											if (i == player) continue;
											i.enableSkill('zyile_xuwu');
										}
										if (player.storage.zyile_xuwu && player.storage.zyile_xuwu >= 4) {
											for (var i of game.players) {
												if (i == player) continue;
												if (i == _status.currentPhase) continue;
												var skills = i.getSkills(false, false);
												i.disableSkill('zyile_xuwu', skills);
											}
										}
									},
								},
							},
						},
						RE_fuyuan: {
							nobracket: true,
							audio: 'ext:概念武将/audio:3',
							ai: {
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'recover') && !target.hasSkill('RE_fuyuan')) return -10;
									},
								},
							},
							trigger: { global: ['drawBegin'] },
							_priority: 99,
							forced: true,
							filter(event, player) {
								return event.player != player && event.parent.name != 'phaseDraw';
							},
							logTarget: 'player',
							content() {
								'step 0';
								trigger.untrigger();
								trigger.finish();
								('step 1');
								trigger.player.chooseToDiscard(trigger.num, 'he', true);
							},
							group: ['RE_fuyuan_begin', 'RE_fuyuan_lose'],
							subSkill: {
								begin: {
									audio: 'ext:概念武将/audio:true',
									trigger: { global: ['useCard', 'respond'] },
									forced: true,
									logTarget: 'player',
									filter(event, player) {
										return event.player != player && event.cards[0] != event.card;
									},
									content() {
										'step 0';
										if (trigger.name == 'respond') {
											if (trigger.parent.result) {
												trigger.parent.result.bool = false;
											}
										} else {
											trigger.untrigger();
											trigger.finish();
										}
										('step 1');
										player.draw(2);
									},
								},
								lose: {
									audio: 'ext:概念武将/audio:true',
									trigger: { global: ['gameDrawAfter'] },
									forced: true,
									content() {
										for (var i of game.players) {
											if (i == player) continue;
											Reflect.defineProperty(i, 'recover', {
												get() {
													return function (num) {
														var next = game.createEvent('loseHp');
														next.num = num;
														next.player = this;
														if (next.num == undefined) next.num = 1;
														next.setContent('loseHp');
														return next;
													};
												},
											});
										}
									},
								},
							},
						},
						zyile_xianluo: {
							trigger: { global: ['useCard', 'respondEnd'] },
							_priority: 99,
							forced: true,
							filter(event, player) {
								return event.player != player;
							},
							logTarget: 'player',
							content() {
								'step 0';
								trigger.player.showCards(ui.cardPile.firstChild);
								('step 1');
								if (get.color(ui.cardPile.firstChild) != get.color(trigger.card) && Math.random() < 0.5) {
									if (trigger.name == 'respond') {
										if (trigger.parent.result) {
											trigger.parent.result.bool = false;
										}
										game.log(trigger.player, '打出的', trigger.card, '无效');
									} else {
										trigger.untrigger();
										trigger.finish();
										game.log(trigger.player, '使用的', trigger.card, '无效');
									}
								}
							},
						},
						zyile_maisha: {
							trigger: { global: 'dieAfter' },
							forced: true,
							popup: false,
							silent: true,
							filter(event, player) {
								return event.player.isDead();
							},
							content() {
								trigger.player.storage.zyile_maisha = true;
								var skills = [];
								for (var i = 0; i < game.dead.length; i++) {
									var skill = game.dead[i].getCards('s').randomGet();
									skills.push(skill);
								}
								player.addAdditionalSkill('zyile_maisha', skills);
							},
							group: ['zyile_maisha_begin'],
							subSkill: {
								begin: {
									trigger: { player: 'phaseBegin' },
									forced: true,
									filter(event, player) {
										return game.dead.length;
									},
									content() {
										var skills = [];
										for (var i = 0; i < game.dead.length; i++) {
											var skill = game.dead[i].getCards('s').randomGet();
											skills.push(skill);
											game.dead[i].storage.zyile_maisha = true;
										}
										player.addAdditionalSkill('zyile_maisha', skills);
									},
								},
							},
						},
						zyile_youshi: {
							trigger: { player: 'phaseEnd' },
							check(event, player) {
								return 1;
							},
							init(player) {
								player.storage.zyile_youshi = [];
							},
							intro: {
								onunmark(content, player) {
									player.storage.zyile_youshi.length = 0;
									player.storage.zyile_youshi = [];
								},
								mark(dialog, content, player) {
									dialog.add('<div class="text center">最近的诱饵牌</div>');
									var cards = [];
									for (var i = 0; i < content.length; i++) {
										cards.push(content[i]);
									}
									if (cards.length) {
										if (player.isUnderControl(true)) {
											dialog.add(cards);
										} else {
											dialog.add([cards, 'blank']);
										}
									} else {
										dialog.add('(无)');
									}
								},
							},
							marktext: '饵',
							forced: true,
							filter(event, player) {
								return ui.cardPile.childNodes.length;
							},
							content() {
								'step 0';
								var num = Math.min(ui.cardPile.childNodes.length, player.maxHp - player.hp);
								event.num = Math.max(1, game.players.length, num);
								('step 1');
								event.cards = get.cards(event.num);
								player.viewCards('牌堆顶的牌', event.cards);
								('step 2');
								if (!player.storage.zyile_youshi) player.storage.zyile_youshi = [];
								player.storage.zyile_youshi = player.storage.zyile_youshi.concat(event.cards);
								player.markSkill('zyile_youshi');
								for (var i = 0; i < player.node.marks.childNodes.length; i++) {
									if (player.node.marks.childNodes[i].name == 'zyile_youshi') {
										player.node.marks.childNodes[i].setBackground(player.name, 'character');
										player.node.marks.childNodes[i].innerHTML = '';
									}
								}
							},
							ai: {
								effect: {
									target(card, player, target) {
										var num = get.tag(card, 'damage');
										if (target.hasSkill('zyile_maisha')) {
											if (player.storage.zyile_youshi2 && player.storage.zyile_youshi2 > target.hp) return -100;
										}
									},
								},
							},
							group: ['zyile_youshi_begin', 'zyile_youshi_end', 'zyile_youshi_lowh'],
							subSkill: {
								begin: {
									trigger: { player: 'phaseBegin' },
									forced: true,
									filter(event, player) {
										return player.storage.zyile_youshi && player.storage.zyile_youshi.length;
									},
									content() {
										var cards = [];
										while (player.storage.zyile_youshi.length) {
											cards = cards.concat(player.storage.zyile_youshi.shift());
										}
										game.log(player, '获得了', cards);
										player.gain(cards, 'gain2');
										if (!player.storage.zyile_youshi.length) {
											player.unmarkSkill('zyile_youshi');
										}
									},
								},
								end: {
									trigger: { global: 'phaseEnd' },
									forced: true,
									popup: false,
									silent: true,
									filter(event, player) {
										return event.player != player;
									},
									content() {
										trigger.player.storage.zyile_youshi2 = 0;
									},
								},
								nohujia: {
									ai: {
										nohujia: true,
									},
								},
								lowh: {
									trigger: { target: 'useCardToBegin' },
									filter(event, player) {
										if (event.cards) {
											if (Array.isArray(event.cards)) for (var i of event.cards) {
												for (var j = 0; j < player.storage.zyile_youshi.length; j++) {
													if (i.suit == player.storage.zyile_youshi[j].suit) return event.player != player;
												}
											}
										}
										return false;
									},
									logTarget: 'player',
									content() {
										'step 0';
										if (!trigger.player.storage.zyile_youshi2) trigger.player.storage.zyile_youshi2 = 0;
										trigger.player.storage.zyile_youshi2++;
										event.cards = [];
										if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
											for (var j = 0; j < player.storage.zyile_youshi.length; j++) {
												if (i.suit == player.storage.zyile_youshi[j].suit) event.cards.push(player.storage.zyile_youshi[j]);
											}
										}
										player.showCards('诱饵牌', event.cards);
										('step 1');
										trigger.untrigger();
										trigger.finish();
										('step 2');
										player.discard(event.cards);
										if (Array.isArray(event.cards)) for (var i of event.cards) {
											player.storage.zyile_youshi.remove(i);
										}
										game.log(player, '获得了', trigger.cards);
										player.gain(trigger.cards, 'gain2');
										trigger.player.addSkill('zyile_youshi_nohujia');
										trigger.player.damage()._triggered = null;
										trigger.player.removeSkill('zyile_youshi_nohujia');
										if ((trigger.player.storage.zyile_maisha || (trigger.player.storage.zyile_youshi2 && trigger.player.storage.zyile_youshi2 > player.hp)) && trigger.player.isAlive() && player.hasSkill('zyile_maisha')) {
											const next = game.createEvent('diex', false);
											next.source = player;
											next.player = trigger.player;
											next._triggered = null;
											next.restMap = { type: null, count: null, audio: null };
											next.excludeMark = [];
											next.setContent('die');
											event.diePlayer = trigger.player;
										}
										('step 3');
										if (event.diePlayer && event.diePlayer.dieAfter) event.diePlayer.dieAfter(player);
										var cards = get.cards(event.cards.length);
										player.storage.zyile_youshi = player.storage.zyile_youshi.concat(cards);
										player.markSkill('zyile_youshi');
										for (var i = 0; i < player.node.marks.childNodes.length; i++) {
											if (player.node.marks.childNodes[i].name == 'zyile_youshi') {
												player.node.marks.childNodes[i].setBackground(player.name, 'character');
												player.node.marks.childNodes[i].innerHTML = '';
											}
										}
									},
								},
							},
						},
						AM_siguan: {
							trigger: { global: 'gameDrawAfter' },
							forced: true,
							content() {
								player.forcemin = true;
								player.judgemin = true;
								player.node.judges.hide();
								player.node.equips.hide();
							},
							group: ['AM_siguan_buff', 'AM_siguan_buff2', 'AM_siguan_launch'],
							subSkill: {
								buff: {
									trigger: { player: ['addJudgeBefore', 'equipEnd'], global: ['chooseToUseBegin', 'chooseToRespondBegin'] },
									forced: true,
									popup: false,
									silent: true,
									content() {
										if (player.noDelay()) {
											if (event.triggername == 'addJudgeBefore') {
												trigger.untrigger();
												trigger.finish();
											} else {
												if (player.countCards('ej')) player.discard(player.getCards('ej'))._triggered = null;
											}
										}
									},
								},
								buff2: {
									trigger: { player: 'phaseBegin' },
									forced: true,
									content() {
										var card = game.findCardInCardPile(function (card) {
											return get.type(card, 'trick') == 'equip';
										});
										player.discard(card);
										card && ui.discardPile.appendChild(card);
									},
								},
								launch: {
									trigger: { global: ['loseEnd', 'judgeAfter'] },
									usable: 1,
									check(event, player) {
										return Math.random() < 0.5 ? true : false;
									},
									filter(event, player, name) {
										if (event.parent.name == 'useCard') return false;
										if (name == 'judgeAfter') {
											if (event.result.card.parentNode && event.result.card.parentNode.id != 'discardPile') return false;
											var info = get.info(event.result.card);
											if (get.type(event.result.card, 'trick') == 'equip' && info.skills && info.skills.length) return true;
										} else {
											if (event.cards) {
												if (Array.isArray(event.cards)) for (var i of event.cards) {
													var info = get.info(i);
													if (get.type(i, 'trick') == 'equip' && get.position(i) == 'd' && info.skills && info.skills.length) return true;
												}
											}
										}
										return false;
									},
									content() {
										'step 0';
										if (event.triggername == 'judgeAfter') {
											event.card = trigger.result.card;
											player.popup(event.card.name);
											var info = get.info(event.card);
											if (info.skills) player.addAdditionalSkill('AM_siguan', info.skills);
											event.finish();
											return;
										} else {
											event.goto(1);
										}
										('step 1');
										event.cardsType = [];
										if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
											var info = get.info(i);
											if (get.type(i, 'trick') == 'equip' && !event.cardsType.includes(i.name) && info.skills && info.skills.length) event.cardsType.push(i.name);
										}
										if (event.cardsType.length == 1) {
											if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
												if (i.name == event.cardsType[0]) {
													event.card = i;
													break;
												}
											}
											player.popup(event.card.name);
											var info = get.info(event.card);
											if (info.skills) player.addAdditionalSkill('AM_siguan', info.skills);
											event.finish();
											return;
										} else {
											player
												.chooseControl(event.cardsType)
												.set('ai', function () {
													return Math.floor(Math.random() * event.cardsType.length);
												})
												.set('prompt', '选择一个装备获得其特效');
										}
										('step 2');
										if (result.control) {
											player.popup(result.control);
											if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
												if (i.name == result.control) {
													result.control = i;
													break;
												}
											}
											var info = get.info(result.control);
											if (info.skills) player.addAdditionalSkill('AM_siguan', info.skills);
										}
									},
								},
							},
						},
						AM_maigu: {
							mod: {
								globalFrom(from, to, distance) {
									if (ui.discardPile.childNodes.length) {
										var num = 0;
										for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
											if (get.subtype(ui.discardPile.childNodes[i], 'trick') == 'equip1') num++;
										}
										return distance - num;
									}
								},
								globalTo(from, to, distance) {
									if (ui.discardPile.childNodes.length) {
										var num = 0;
										for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
											if (get.subtype(ui.discardPile.childNodes[i], 'trick') == 'equip2') num++;
										}
										return distance + num;
									}
								},
								maxHandcard(player, current) {
									if (ui.discardPile.childNodes.length) {
										var num = 0;
										for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
											if (get.subtype(ui.discardPile.childNodes[i], 'trick') == 'equip4') num++;
										}
										return current + num;
									}
								},
							},
							trigger: { player: 'phaseDrawBegin' },
							forced: true,
							filter(event, player) {
								var num = 0;
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									if (get.subtype(ui.discardPile.childNodes[i], 'trick') == 'equip3') num++;
								}
								return ui.discardPile.childNodes.length && num > 0;
							},
							content() {
								var num = 0;
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									if (get.subtype(ui.discardPile.childNodes[i], 'trick') == 'equip3') num++;
								}
								trigger.num += num;
							},
							group: ['AM_maigu_buff'],
							subSkill: {
								buff: {
									trigger: { target: 'useCardToBegin' },
									filter(event, player) {
										var num = 0;
										for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
											if (get.subtype(ui.discardPile.childNodes[i], 'trick') == 'equip5') num++;
										}
										return event.player != player && ui.discardPile.childNodes.length && num > 0;
									},
									logTarget: 'player',
									forced: true,
									content() {
										var num = 0;
										for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
											if (get.subtype(ui.discardPile.childNodes[i], 'trick') == 'equip5') num++;
										}
										player.discardPlayerCard(trigger.player, [1, num], 'he').ai = ai.get.buttonValue;
									},
								},
							},
							ai: {
								threaten: 1.5,
							},
						},
						AM_qingwu: {
							trigger: { global: ['linkEnd', 'turnOverEnd'] },
							forced: true,
							content() {
								if (player.storage.AM_qingwu) {
									player.storage.AM_qingwu = false;
									player.discardPlayerCard(player, 'hej', true).set('ai', function (button) {
										if (get.position(button.link) == 'j') return 20 - get.value(button.link);
									});
								} else {
									player.draw();
									player.storage.AM_qingwu = true;
								}
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'delay' && target.countCards('j') == 0) return 0.4;
									},
								},
							},
						},
						AM_xinmei: {
							trigger: { player: 'phaseBegin' },
							forced: true,
							filter(event, player) {
								if (player.hp == player.maxHp) return false;
								return true;
							},
							content() {
								'step 0';
								var num = Math.min(player.maxHp - player.hp, 2);
								player
									.chooseTarget(get.prompt('AM_xinmei'), [1, num], function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										if (target.isTurnedOver()) return get.attitude(_status.event.player, target);
										return -get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									player.turnOver();
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 2');
								if (event.targets && event.targets.length) {
									var target = event.targets.shift();
									target.turnOver();
									event.redo();
								}
							},
							group: ['AM_xinmei_buff', 'AM_xinmei_buff2'],
							subSkill: {
								buff: {
									trigger: { player: 'addJudgeBefore' },
									forced: true,
									popup: false,
									silent: true,
									filter(event, player) {
										return player.isTurnedOver();
									},
									content() {
										trigger.untrigger();
										trigger.finish();
									},
								},
								buff2: {
									trigger: { player: 'damageBefore' },
									forced: true,
									filter(event, player) {
										return player.isTurnedOver() && event.num > 0;
									},
									content() {
										trigger.num--;
									},
								},
							},
							mod: {
								targetEnabled(card, player, target, now) {
									if (target.isTurnedOver()) {
										if (get.type(card, 'trick') == 'trick') return false;
									}
								},
							},
							ai: {
								expose: 0.2,
							},
						},
						AM_jueyu: {
							global: 'AM_jueyu_disable',
							mod: {
								targetInRange(card, player, target) {
									if (target.countCards('h') < target.hp) return true;
								},
								globalFrom(from, to, distance) {
									if (to.countCards('h') < to.hp) return distance - Infinity;
								},
							},
							gainnable: true,
							subSkill: {
								disable: {
									mod: {
										cardEnabled(card, player, target) {
											if (
												game.hasPlayer(function (current) {
													return current.hasSkill('AM_jueyu');
												})
											) {
												if (card.name == 'tao' || card.name == 'jiu') {
													if (_status.event.dying && _status.event.dying != player) return;
													if (player.countCards('h') < player.hp) return false;
												}
											}
										},
										cardSavable(card, player, target) {
											if (
												game.hasPlayer(function (current) {
													return current.hasSkill('AM_jueyu');
												})
											) {
												if (card.name == 'tao' || card.name == 'jiu') {
													if (_status.event.dying && _status.event.dying != player) return;
													if (player.countCards('h') < player.hp) return false;
												}
											}
										},
										cardRespondable(card, player) {
											if (
												game.hasPlayer(function (current) {
													return current.hasSkill('AM_jueyu');
												})
											) {
												if (player.countCards('h') < player.hp) return false;
											}
										},
									},
								},
							},
						},
						AM_zhongyan: {
							trigger: { global: ['useCard', 'respondEnd'] },
							_priority: 15,
							filter(event, player) {
								if (_status.currentPhase != event.player) return false;
								if (event.player == player) return false;
								return event.card.suit != undefined;
							},
							forced: true,
							content() {
								'step 0';
								if (!player.storage.AM_zhongyan) player.storage.AM_zhongyan = [];
								('step 1');
								if (!player.storage.AM_zhongyan.includes(trigger.card.suit)) {
									player.storage.AM_zhongyan.add(trigger.card.suit);
								}
							},
							group: ['AM_zhongyan_clear', 'AM_zhongyan_launch'],
							subSkill: {
								clear: {
									trigger: { global: 'phaseBegin' },
									forced: true,
									content() {
										player.storage.AM_zhongyan = [];
									},
								},
								launch: {
									trigger: { global: 'phaseDiscardBegin' },
									logTarget: 'player',
									check(event, player) {
										return get.attitude(player, event.player) < 0;
									},
									filter(event, player) {
										return player.storage.AM_zhongyan && player.storage.AM_zhongyan.length >= 3;
									},
									content() {
										var cards = trigger.player.getCards('h');
										var suits = player.storage.AM_zhongyan;
										var cardsx = [];
										if (Array.isArray(cards)) for (var i of cards) {
											if (suits.includes(i.suit)) cardsx.push(i);
										}
										if (cardsx.length) trigger.player.discard(cardsx);
										trigger.player.loseHp();
									},
									ai: {
										expose: 0.2,
									},
								},
							},
						},
						AM_zhongyan_old: {
							trigger: { player: 'dying' },
							forced: true,
							_priority: Infinity,
							filter(event, player) {
								for (var i of game.players) {
									if (i.isOut()) continue;
									if (i == player) continue;
									if (i.hp > player.hp) return true;
								}
								return false;
							},
							content() {
								trigger.untrigger();
								trigger.finish();
							},
							subSkill: {
								buff1: {
									trigger: { player: 'phaseBegin' },
									forced: true,
									popup: false,
									_priority: 22,
									content() {
										player.skip('phaseJudge');
									},
								},
								buff2: {
									trigger: { player: 'phaseDrawBefore' },
									forced: true,
									popup: false,
									_priority: 22,
									content() {
										'step 0';
										player.phaseDiscard();
										('step 1');
										player.skip('phaseDiscard');
										trigger.num = Math.max(2, player.countCards('h'));
										if (!player.storage.SE_jueyi) player.storage.SE_jueyi = 0;
										player.storage.SE_jueyi += trigger.num;
									},
								},
								buff3: {
									trigger: { player: 'phaseUseAfter' },
									forced: true,
									popup: false,
									_priority: 22,
									content() {
										'step 0';
										player.phaseJudge();
										('step 1');
										player.skipList = [];
										('step 2');
										player.skip('phaseDiscard');
									},
								},
								buff4: {
									trigger: { player: 'phaseEnd' },
									forced: true,
									filter(event, player) {
										if (player.storage.SE_jueyi) return get.cardCount(true, player) <= player.storage.SE_jueyi && player.isDamaged();
										return false;
									},
									content() {
										'step 0';
										player.recover();
										('step 1');
										delete player.storage.SE_jueyi;
										player.skipList = [];
									},
								},
								buff5: {
									trigger: { source: 'damageBefore' },
									forced: true,
									filter(event, player) {
										return event.notLink();
									},
									content() {
										trigger.num++;
									},
								},
							},
							ai: {
								threaten(player, target) {
									for (var i of game.players) {
										if (i.isOut()) continue;
										if (i == target) continue;
										if (i.hp > target.hp) return 0.1;
									}
									return 3;
								},
							},
						},
						//当你使用一张非转化牌后,你可以将一张牌当作一张与之同类型的牌使用
						AM_xiangwen: {
							trigger: { player: 'useCardAfter' },
							forced: true,
							_priority: 60,
							filter: (event, player) => event.cards?.length && !event.cards.some((q) => q.name != event.card.name) && player.qcard(get.type(event.card), true, false).length,
							async content(event, trigger, player) {//QQQ
								const type = get.type(trigger.card);
								const list = player.qcard(type, true, false);
								if (list.length) {
									const { result: { cards } } = await player.chooseCard('he', '将一张牌当作一张与之同类型的牌使用')
										.set('ai', (c) => 8 - get.value(c));
									if (cards?.length) {
										const { result: { links } } = await player.chooseButton(['视为使用或打出同类型的牌', [list, 'vcard']])
											.set('ai', (button) => {
												return (player.getUseValue({
													name: button.link[2],
													nature: button.link[3]
												}, null, true) || 0) / 2 + 10;
											});
										if (links?.length) {
											await player.chooseUseTarget({
												name: links[0][2],
												nature: links[0][3],
												cards: cards
											}, cards, true, false, 'nodistance');//无距离次数限制
										}
									}
								}
							},
							ai: {
								threaten: 1.2,
							},
						},
						AM_xiangwen2: {
							position: 'he',
							filterCard: true,
							selectCard: 1,
							popname: true,
							onuse(result, player) {
							},
						},
						AM_bolan: {
							trigger: { player: 'phaseDrawBegin' },
							forced: true,
							content() {
								'step 0';
								trigger.untrigger();
								trigger.finish();
								event.cards = [];
								event.types = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									var name = lib.inpile[i];
									var info = lib.card[name];
									if (info.type && !event.types.includes(info.type)) event.types.push(info.type);
								}
								event.num = event.types.length - 1;
								('step 1');
								while (event.num >= 0) {
									var card = game.findCardInCardPile(function (card) {
										return get.type(card, 'trick') == event.types[event.num];
									});
									if (card) {
										event.cards.push(card);
									}
									event.num--;
								}
								('step 2');
								if (event.cards.length) player.gain(event.cards, 'draw');
							},
						},
						AM_xuanzhou_old: {
							enable: 'phaseUse',
							filter(event, player) {
								return player.hp > 0;
							},
							content() {
								'step 0';
								var skills = [];
								for (var i in lib.character) {
									for (var j = 0; j < lib.character[i][3].length; j++) {
										var info = lib.skill[lib.character[i][3][j]];
										if (info && info.enable && lib.character[i][3][j] != 'AM_xuanzhou') {
											skills.add(lib.character[i][3][j]);
										}
									}
								}
								event.skill = skills.randomGet();
								var info = lib.skill[event.skill];
								var str = get.translation(event.skill) + ':';
								str += lib.translate[event.skill + '_info'];
								var next = player.chooseToUse('<div class="text center">' + str + '</div>');
								next.set('norestore', true);
								next.set('_backupevent', event.skill);
								next.backup(event.skill);
								('step 1');
								var next = player.chooseToDiscard('he', '<div class="text center">【绚咒】:弃置一张牌或失去一点体力.</div>');
								next.set('ai', function (card) {
									if (player.hp < 2) return 10 - get.value(card);
									return 7 - get.value(card);
								});
								('step 2');
								if (!result.bool) {
									player.loseHp();
								} else {
									event.finish();
								}
							},
							ai: {
								order: 5,
								result: {
									player(player) {
										var hs = player.getCards('h');
										if (hs.length < 3) return 0;
										var bool = false;
										for (var i = 0; i < hs.length; i++) {
											if (get.value(hs[i]) < 7) {
												bool = true;
												break;
											}
										}
										if (bool) return 0.5;
										if (player.hp < 2) return -1;
										return 0;
									},
								},
							},
						},
						AM_xiangwen_old: {
							trigger: { player: 'phaseBegin' },
							_priority: 2,
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							check(event, player) {
								return 1;
							},
							forced: true,
							content() {
								'step 0';
								var str = '【镶文】:你可以弃置任意张牌从牌堆或弃牌堆随机获得等量张能够带来负收益的卡牌.';
								var next = player.chooseCard('he', '<div class="text center">' + str + '</div>', [1, Infinity]);
								next.set('ai', function (card) {
									return 6 - get.value(card);
								});
								('step 1');
								if (result.cards?.length) {
									event.num = result.cards.length;
									event.cards = result.cards;
									player.discard(result.cards);
								} else {
									event.finish();
								}
								('step 2');
								var cards = [];
								while (event.num > 0) {
									event.num--;
									if (Array.isArray(event.cards)) for (var i of event.cards) {
										var card = get.cardPile(function (card) {
											return get.badTag(card) && !cards.includes(card) && get.value(card) >= get.value(i);
										});
									}
									cards.push(card);
								}
								if (cards.length) {
									player.gain(cards, 'gain2');
									game.log(player, '从牌堆获得了', cards);
								}
							},
							group: ['AM_xiangwen_phaseend'],
							subSkill: {
								phaseend: {
									trigger: { player: 'phaseEnd' },
									_priority: 2,
									filter(event, player) {
										return player.countCards('he') > 0;
									},
									check(event, player) {
										return 1;
									},
									forced: true,
									content() {
										'step 0';
										var str = '【镶文】:你可以弃置任意张牌从牌堆或弃牌堆随机获得等量张能够带来正收益的卡牌.';
										var next = player.chooseCard('he', '<div class="text center">' + str + '</div>', [1, Infinity]);
										next.set('ai', function (card) {
											return 6 - get.value(card);
										});
										('step 1');
										if (result.cards?.length) {
											event.num = result.cards.length;
											event.cards = result.cards;
											player.discard(result.cards);
										} else {
											event.finish();
										}
										('step 2');
										var cards = [];
										while (event.num > 0) {
											event.num--;
											if (Array.isArray(event.cards)) for (var i of event.cards) {
												var card = get.cardPile(function (card) {
													return get.goodTag(card) && !cards.includes(card) && get.value(card) >= get.value(i);
												});
											}
											cards.push(card);
										}
										if (cards.length) {
											player.gain(cards, 'gain2');
											game.log(player, '从牌堆获得了', cards);
										}
									},
								},
							},
						},
						zyile_chizhu: {
							trigger: { player: 'phaseEnd' },
							forced: true,
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							content() {
								'step 0';
								player
									.chooseTarget('是否展示一名角色的手牌？', function (card, player, target) {
										return player != target;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.targets?.length) {
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								event.target.showCards(event.target.getCards('h'));
								var num1 = event.target.countCards('h', { color: 'black' });
								var num2 = event.target.countCards('h', { color: 'red' });
								event.num = Math.abs(num1 - num2);
								('step 3');
								if (player.countCards('he') >= event.num && event.num != 0) {
									player.chooseToDiscard('斥逐:是否弃置' + get.cnNumber(event.num) + '张牌令' + get.translation(event.target) + '直到你的回合开始不计入距离计算且不成为卡牌目标并跳过其下个回合？', [event.num, event.num], 'he').set('ai', function (card) {
										if (player.countCards('he') > event.num) return 11 - get.value(card);
										return 8 - get.value(card);
									});
								} else {
									event.finish();
								}
								('step 4');
								if (result.bool) {
									event.target.addSkill('zyile_chizhu_debuff');
									player.storage.zyile_chizhu = event.target;
								}
							},
							group: ['zyile_chizhu_phasebegin'],
							subSkill: {
								phasebegin: {
									trigger: { player: 'phaseBegin' },
									forced: true,
									filter(event, player) {
										for (var i of game.players) {
											if (i.hasSkill('zyile_chizhu_debuff')) return true;
										}
										return false;
									},
									content() {
										'step 0';
										for (var i of game.players) {
											if (i.hasSkill('zyile_chizhu_debuff')) i.removeSkill('zyile_chizhu_debuff');
										}
										if (player.storage.zyile_chizhu) {
											event.target = player.storage.zyile_chizhu;
											var num1 = event.target.countCards('h', { color: 'black' });
											var num2 = event.target.countCards('h', { color: 'red' });
											event.num = Math.abs(num1 - num2);
											player.line(event.target, 'water');
										} else {
											event.finish();
										}
										('step 1');
										event.target.draw(event.num);
										event.target.loseHp(event.num);
										('step 2');
										delete player.storage.zyile_chizhu;
									},
								},
								debuff: {
									mod: {
										targetEnabled() {
											return false;
										},
									},
									trigger: { player: 'phaseBefore' },
									forced: true,
									_priority: 30,
									popup: false,
									content() {
										trigger.untrigger();
										trigger.finish();
										player.phaseSkipped = true;
									},
									mark: true,
									intro: {
										content: '不计入距离的计算且不是牌的合法目标且跳过下个回合',
									},
									group: 'undist',
								},
							},
						},
						zyile_changan: {
							trigger: { global: ['recoverBegin', 'damageBegin'] },
							forced: true,
							_priority: 100,
							logTarget: 'player',
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								var eff = trigger.player.hp <= 1;
								if (event.triggername == 'recoverBegin') var str = '常暗:请弃置一张牌否则回复基数-1!';
								else var str = '常暗:请弃置一张牌否则伤害基数+1!';
								trigger.player
									.chooseToDiscard(str, 'he')
									.set('ai', function (card) {
										if (trigger.player == player && event.triggername != 'recoverBegin') {
											for (var i of game.players) {
												if (i.isOut()) continue;
												if (i == player) continue;
												if (i.hp >= player.hp) {
													for (var j = 0; j < game.players.length; j++) {
														if (game.players[j].isOut()) continue;
														if (game.players[j] == player) continue;
														if (game.players[j].hp <= player.hp) {
															return 0;
														}
													}
												}
											}
											return 11 - get.value(card);
										} else if (_status.event.eff > 0) {
											return 11 - get.value(card);
										}
										return 7 - get.value(card);
									})
									.set('eff', eff);
								('step 1');
								if (result.bool == false) {
									if (event.triggername == 'recoverBegin') trigger.num--;
									else trigger.num++;
								}
							},
						},
						zyile_kuoshan: {
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return event.target == player && event.targets.length == 1 && event.player != player;
							},
							check(event, player) {
								var active = 0;
								for (var i of game.players) {
									if (i == player) continue;
									if (!i.isOut()) {
										if (get.attitude(player, i) <= 0 && event.player.canUse(event.card, i)) {
											active++;
										}
									}
								}
								if (active > 0) return 1;
								return 0;
							},
							content() {
								var targets = [];
								for (var i of game.players) {
									if (i == player) continue;
									if (trigger.player.canUse(trigger.card, i)) {
										targets.push(i);
									}
								}
								if (targets.length) game.log(targets, '成为了额外目标');
								for (var i = 0; i < targets.length; i++) {
									trigger.targets.push(targets[i]);
								}
							},
						},
						zyile_danhua: {
							trigger: { player: ['changeHp'] },
							forced: true,
							_priority: 100,
							filter(event, player) {
								var num0 = player.hp;
								num0 += -event.num;
								for (var i of game.players) {
									if (i.isOut()) continue;
									if (i == player) continue;
									if (i.hp >= num0) {
										for (var j = 0; j < game.players.length; j++) {
											if (game.players[j].isOut()) continue;
											if (game.players[j] == player) continue;
											if (game.players[j].hp <= num0) {
												return true;
											}
										}
									}
								}
								return false;
							},
							content() {
								'step 0';
								event.num = Math.abs(trigger.num);
								('step 1');
								player.hp += -trigger.num;
								if (player.hp > player.maxHp) player.hp = player.maxHp;
								player.update();
								('step 2');
								player.draw(event.num);
							},
							ai: {
								threaten: 0.8,
								nodamage: true,
								effect: {
									target(card, player, target, current) {
										if (!target.hasFriend()) return;
										for (var i of game.players) {
											if (i.isOut()) continue;
											if (i == player) continue;
											if (i.hp >= player.hp) {
												for (var j = 0; j < game.players.length; j++) {
													if (game.players[j].isOut()) continue;
													if (game.players[j] == player) continue;
													if (game.players[j].hp <= player.hp) {
														if (get.tag(card, 'damage') && !get.tag(card, 'Damage')) return [0, 1];
													}
												}
											}
										}
									},
								},
								skillTagFilter(player, tag) {
									if (tag == 'nodamage') {
										if (!player.hasFriend()) return false;
										for (var i of game.players) {
											if (i.isOut()) continue;
											if (i == player) continue;
											if (i.hp >= player.hp) {
												for (var j = 0; j < game.players.length; j++) {
													if (game.players[j].isOut()) continue;
													if (game.players[j] == player) continue;
													if (game.players[j].hp <= player.hp) {
														return true;
													}
												}
											}
										}
										return false;
									}
								},
							},
							group: 'zyile_danhua_max',
							subSkill: {
								max: {
									trigger: { player: ['loseMaxHpBefore', 'gainMaxHpBefore'] },
									forced: true,
									_priority: 100,
									filter(event, player) {
										for (var i of game.players) {
											if (i.isOut()) continue;
											if (i == player) continue;
											if (i.hp >= player.hp) {
												for (var j = 0; j < game.players.length; j++) {
													if (game.players[j].isOut()) continue;
													if (game.players[j] == player) continue;
													if (game.players[j].hp <= player.hp) {
														return true;
													}
												}
											}
										}
										return false;
									},
									content() {
										'step 0';
										event.num = Math.abs(trigger.num);
										('step 1');
										trigger.untrigger();
										trigger.finish();
										('step 2');
										player.draw(event.num);
									},
								},
							},
						},
						zyile_qiangze: {
							trigger: { player: ['phaseBegin'] },
							filter(event, player) {
								if (!player.skipList.includes('phaseJudge') || !player.skipList.includes('phaseUse') || !player.skipList.includes('phaseDiscard') || !player.skipList.includes('phaseDraw')) return true;
								return false;
							},
							content() {
								'step 0';
								var controls = ['判定阶段', '摸牌阶段', '出牌阶段', '弃牌阶段'];
								player
									.chooseControl(controls)
									.set('ai', function () {
										if (player.countCards('j') > 1) return '判定阶段';
										if (player.countCards('h') >= 3) {
											for (var i of game.players) {
												if (i == player) continue;
												if (i.countCards('h') <= 3) return '摸牌阶段';
											}
										}
										if (player.countCards('h') > player.hp + 3) return '弃牌阶段';
										return '弃牌阶段';
									})
									.set('prompt', '强则:你可选择一个阶段跳过,下回合其他所有角色跳过此阶段');
								('step 1');
								player.popup(result.control);
								switch (result.control) {
									case '判定阶段':
										player.skip('phaseJudge');
										for (var i of game.players) {
											if (i == player) continue;
											i.skip('phaseJudge');
										}
										break;
									case '摸牌阶段':
										player.skip('phaseDraw');
										for (var i of game.players) {
											if (i == player) continue;
											i.skip('phaseDraw');
										}
										break;
									case '出牌阶段':
										player.skip('phaseUse');
										for (var i of game.players) {
											if (i == player) continue;
											i.skip('phaseUse');
										}
										break;
									case '弃牌阶段':
										player.skip('phaseDiscard');
										for (var i of game.players) {
											if (i == player) continue;
											i.skip('phaseDiscard');
										}
										break;
								}
							},
						},
						AM_nongxu: {
							trigger: { player: ['phaseBegin', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseAfter'] },
							check(event, player) {
								switch (event.triggername) {
									case 'phaseBegin':
										return 1;
										break;
									case 'phaseJudgeAfter':
										return 0;
										break;
									case 'phaseDrawAfter':
										return 0;
										break;
									case 'phaseUseAfter':
										return 1;
										break;
								}
								return false;
							},
							filter(event, player) {
								var list = [],
									skills = [];
								for (var i of game.players) {
									for (var j in i.disabledSkills) {
										list.push(j);
									}
								}
								if (list.length == player.countCards('h')) return true;
								return false;
							},
							content() {
								'step 0';
								switch (event.triggername) {
									case 'phaseBegin':
										player.skip('phaseJudge');
										break;
									case 'phaseJudgeAfter':
										player.skip('phaseDraw');
										break;
									case 'phaseDrawAfter':
										player.skip('phaseUse');
										break;
									case 'phaseUseAfter':
										player.skip('phaseDiscard');
										break;
								}
								player
									.chooseControl('判定阶段', '摸牌阶段', '出牌阶段', '弃牌阶段')
									.set('ai', function () {
										if (player.countCards('h') > 2) return '出牌阶段';
										return '摸牌阶段';
									})
									.set('prompt', '弄序:你可选择一个阶段执行');
								('step 1');
								switch (result.control) {
									case '判定阶段':
										player.phaseJudge();
										break;
									case '摸牌阶段':
										player.phaseDraw();
										break;
									case '出牌阶段':
										player.phaseUse();
										break;
									case '弃牌阶段':
										player.phaseDiscard();
										break;
								}
							},
						},
						AM_guizeyuesu: {
							init(player, skill) {
								var skills = player.getCards('s', true, false);
								for (var i = 0; i < skills.length; i++) {
									if (!lib.ondisabled.includes(skills[i])) {
										skills.splice(i--, 1);
									}
								}
								player.disableSkill(skill, skills);
							},
							mark: true,
							intro: {
								content(storage, player, skill) {
									let list = Object.keys(player.disabledSkills);
									if (list.length) {
										var str = '失效技能:';
										for (var i = 0; i < list.length; i++) {
											if (lib.translate[list[i] + '_info']) {
												str += get.translation(list[i]) + '、';
											}
										}
										return str.slice(0, str.length - 1);
									}
								},
							},
						},
						AM_guizhi: {
							trigger: { player: ['useCard', 'respond'] },
							forced: true,
							filter(event, player) {
								if (_status.currentPhase != player) return false;
								return true;
							},
							content() {
								'step 0';
								player.addTempSkill('AM_guizhi_clear', 'phaseBegin');
								player
									.chooseTarget(
										'规制:请选择1名角色',
										function (card, player, target) {
											return !target.storage.AM_guizhiok;
										},
										true
									)
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.targets?.length) {
									event.target = result.targets[0];
									if (event.target.hasSkill('AM_guizeyuesu')) event.target.removeSkill('AM_guizeyuesu');
									var skills = result.targets[0].getCards('s', true, false);
									for (var i = 0; i < skills.length; i++) {
										if (!lib.translate[skills[i] + '_info']) skills.splice(i--, 1);
									}
									if (skills.length == 1) {
										lib.ondisabled.push(skills[0]);
										event.target.storage.AM_guizhiok = true;
										event.target.addSkill('AM_guizeyuesu');
										event.finish();
										return;
									}
									player
										.chooseControl(skills)
										.set('ai', function () {
											return Math.floor(Math.random() * skills.length);
										})
										.set('prompt', '规制:选择一个技能令其失效');
								} else {
									event.finish();
								}
								('step 2');
								if (result.control) {
									lib.ondisabled.push(result.control);
									event.target.addSkill('AM_guizeyuesu');
								} else {
									event.finish();
								}
							},
							subSkill: {
								clear: {
									trigger: { player: 'phaseAfter' },
									forced: true,
									popup: false,
									silent: true,
									content() {
										for (var i of game.players) {
											i.removeSkill('AM_guizeyuesu');
											lib.ondisabled = [];
											i.storage.AM_guizhiok = false;
											i.enableSkill('AM_guizeyuesu');
										}
									},
								},
							},
						},
						zyile_yinzhao: {
							trigger: { global: 'equipEnd' },
							forced: true,
							logTarget: 'player',
							filter(event, player) {
								var info = get.info(event.card);
								if (!info || info.clearLose) return false;
								if (info.skills && event.player != player) {
									if (player.additionalSkills.zyile_yinzhao) {
										for (var i = 0; i < info.skills.length; i++) {
											if (!player.additionalSkills.zyile_yinzhao.includes(info.skills[i])) return true;
										}
									}
									return true;
								}
								return false;
							},
							content() {
								var info = get.info(trigger.card);
								if (info.skills) {
									player.addAdditionalSkill('zyile_yinzhao', info.skills, true);
								}
							},
							group: ['zyile_yinzhao_clear', 'zyile_yinzhao_useCard'],
							subSkill: {
								clear: {
									trigger: { player: 'equipEnd' },
									forced: true,
									filter(event, player) {
										return player.additionalSkills.zyile_yinzhao;
									},
									content() {
										player.removeAdditionalSkill('zyile_yinzhao');
									},
								},
								useCard: {
									trigger: { global: 'useCardAfter' },
									forced: true,
									filter(event, player) {
										if (!event.card) return false;
										if (event.player == player) return false;
										if (event.cards) {
											if (Array.isArray(event.cards)) for (var i of event.cards) {
												if (get.position(i) == 'd') return true;
											}
										}
										return false;
									},
									content() {
										var card = { name: trigger.card.name, nature: trigger.card.nature };
										var info = get.info(card);
										var targets = [];
										var range = get.select(get.info(card).selectTarget);
										for (var i of game.players) {
											if (lib.filter.filterTarget(card, player, i)) {
												targets.push(i);
											}
										}
										if (targets.length && !info.multitarget && !info.notarget && !info.effect && !info.subtype) {
											targets.sort(lib.sort.seat);
											if (range[0] == -1) {
												player.useCard(card, targets);
											} else {
												if (Array.isArray(range)) {
													if (targets.length < range[0]) event.finish();
													range = range[0] + Math.floor(Math.random() * (Array.isArray(range) && range[1] - range[0] + 1));
												} else {
													if (targets.length < range) event.finish();
												}
												player.useCard(card, targets.randomGets(range), 'noai');
											}
										}
									},
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip') return 0.1;
									},
								},
							},
						},
						RE_huanqian: {
							init(player) {
								if (!player.storage.RE_huanqian) {
									player.storage.RE_huanqian = {
										list: [],
										owned: {},
										player: player,
										zhuSkill: [],
										juexing: [],
										limited: [],
										locked: [],
									};
								}
							},
							update(player) {
								player.storage.RE_huanqiantao = false;
								player.storage.RE_huanqianwuxie = false;
								player.storage.RE_huanqianshan = false;
								player.storage.RE_huanqiansha = false;
								player.storage.RE_huanqian.limited = [];
								player.storage.RE_huanqian.locked = [];
								player.storage.RE_huanqian.juexing = [];
								player.storage.RE_huanqian.zhuSkill = [];
								var slist = player.storage.RE_huanqian.owned;
								var list = [];
								var skills2 = [];
								for (var i in slist) {
									list.push(i);
								}
								for (var i of list) {
									var skills = lib.character[i][3].slice(0);
									var update = function (str, info, skill, currrentSkill) {
										currrentSkill = currrentSkill || skill;
										str = str.replace(/<\/?.+?\/?>/g, '');
										if (info.juexing || str.indexOf('觉醒技') == 0 || str.indexOf('限定技') == 0 || info.zhuSkill || info.limited || (info.intro && info.intro.content == 'limited') || get.is.locked(currrentSkill)) {
											if (info.limited || str.indexOf('限定技') == 0 || (info.intro && info.intro.content == 'limited')) {
												player.storage.RE_huanqiantao = true;
												player.storage.RE_huanqian.limited.add(i);
											}
											if (str.indexOf('觉醒技') == 0 || info.juexing) {
												player.storage.RE_huanqianwuxie = true;
												player.storage.RE_huanqian.juexing.add(i);
											}
											if (get.is.locked(currrentSkill)) {
												player.storage.RE_huanqianshan = true;
												player.storage.RE_huanqian.locked.add(i);
											}
											if (info.zhuSkill || str.indexOf('主公技') == 0) {
												player.storage.RE_huanqiansha = true;
												player.storage.RE_huanqian.zhuSkill.add(i);
											}
											skills.remove(skill);
										}
										info.group && groupSkill(info.group, skill);
									};
									var groupSkill = function (skill, skillx) {
										if (Array.isArray(skill)) {
											for (var i of skill) {
												var str = lib.translate[i + '_info'];
												var info = lib.skill[i];
												if (!str) str = '';
												if (!info) {
													skills.remove(skillx);
													continue;
												}
												if (player.skills.includes(i)) {
													skills.remove(skillx);
													continue;
												}
												update(str, info, skillx, i);
											}
										} else {
											var info = lib.skill[skill];
											if (!info) return false;
											var str = lib.translate[skill + '_info'];
											if (!str) str = '';
											update(str, info, skillx);
										}
									};
									for (var j of skills.slice(0)) {
										var info = lib.skill[j];
										var str = lib.translate[j + '_info'];
										if (!info || !str) {
											skills.remove(j);
											continue;
										}
										update(str, info, j);
									}
									skills2 = skills2.concat(skills);
								}
								player.addAdditionalSkill('RE_huanqian', skills2);
							},
							get(player, num) {
								var skills2 = [];
								if (typeof num != 'number') num = 1;
								while (num-- > 0) {
									var name = player.storage.RE_huanqian.list.randomRemove();
									var skills = lib.character[name][3].slice(0);
									var update = function (str, info, skill, currrentSkill) {
										currrentSkill = currrentSkill || skill;
										str = str.replace(/<\/?.+?\/?>/g, '');
										if (info.juexing || str.indexOf('觉醒技') == 0 || str.indexOf('限定技') == 0 || info.zhuSkill || info.limited || (info.intro && info.intro.content == 'limited') || get.is.locked(currrentSkill)) {
											if (info.limited || str.indexOf('限定技') == 0 || (info.intro && info.intro.content == 'limited')) {
												player.storage.RE_huanqiantao = true;
												player.storage.RE_huanqian.limited.add(name);
											}
											if (str.indexOf('觉醒技') == 0 || info.juexing) {
												player.storage.RE_huanqianwuxie = true;
												player.storage.RE_huanqian.juexing.add(name);
											}
											if (get.is.locked(currrentSkill)) {
												player.storage.RE_huanqianshan = true;
												player.storage.RE_huanqian.locked.add(name);
											}
											if (info.zhuSkill || str.indexOf('主公技') == 0) {
												player.storage.RE_huanqiansha = true;
												player.storage.RE_huanqian.zhuSkill.add(name);
											}
											skills.remove(skill);
										}
										info.group && groupSkill(info.group, skill);
									};
									var groupSkill = function (skill, skillx) {
										if (Array.isArray(skill)) {
											for (var i of skill) {
												var str = lib.translate[i + '_info'];
												var info = lib.skill[i];
												if (!str) str = '';
												if (!info) {
													skills.remove(skillx);
													continue;
												}
												if (player.skills.includes(i)) {
													skills.remove(skillx);
													continue;
												}
												update(str, info, skillx, i);
											}
										} else {
											var info = lib.skill[skill];
											if (!info) return false;
											var str = lib.translate[skill + '_info'];
											if (!str) str = '';
											update(str, info, skillx);
										}
									};
									for (var j of skills.slice(0)) {
										var info = lib.skill[j];
										var str = lib.translate[j + '_info'];
										if (!info || !str) {
											skills.remove(j);
											continue;
										}
										update(str, info, j);
									}
									skills2 = skills2.concat(skills);
									player.storage.RE_huanqian.owned[name] = skills;
									player.popup(name);
									game.log(player, '获得一张武将牌');
								}
								var keep = true;
								var mark = player.marks.RE_huanqian;
								if (mark.firstChild) {
									mark.firstChild.remove();
								}
								mark.setBackground(player.name, 'character');
								player.addAdditionalSkill('RE_huanqian', skills2, keep);
							},
							pretao() {
								'step 0';
								var slist = player.storage.RE_huanqian.owned;
								var list = [],
									listx = [];
								for (var i in slist) {
									list.push(i);
								}
								for (var i = 0; i < list.length; i++) {
									var skills = lib.character[list[i]][3].slice(0);
									for (var j = 0; j < skills.length; j++) {
										var info = lib.skill[skills[j]];
										if (!lib.translate[skills[j] + '_info']) skills.splice(j--, 1);
										if (player.skills.includes(skills[j])) skills.splice(j--, 1);
										if (lib.translate[skills[j] + '_info']) {
											if (info.limited || (info.intro && info.intro.content == 'limited' && !listx.includes(list[i]))) listx.push(list[i]);
										}
									}
								}
								var str = '';
								str += '将拥有限定技的武将牌当做【桃】使用或打出';
								event.dialog = ui.create.dialog(str, [listx, 'character']);
								var next = player.chooseButton(event.dialog, true, function (button) {
									return 1;
								});
								('step 1');
								if (result.bool) {
									if (player.storage.RE_huanqian.owned[result.buttons[0].link]) delete player.storage.RE_huanqian.owned[result.buttons[0].link];
									lib.skill.RE_huanqian.update(player);
								} else {
									event.finish();
								}
							},
							presha() {
								'step 0';
								var slist = player.storage.RE_huanqian.owned;
								var list = [],
									listx = [];
								for (var i in slist) {
									list.push(i);
								}
								for (var i = 0; i < list.length; i++) {
									var skills = lib.character[list[i]][3].slice(0);
									for (var j = 0; j < skills.length; j++) {
										var info = lib.skill[skills[j]];
										if (!lib.translate[skills[j] + '_info']) skills.splice(j--, 1);
										if (player.skills.includes(skills[j])) skills.splice(j--, 1);
										if (lib.translate[skills[j] + '_info']) {
											var str = lib.translate[skills[j] + '_info'];
											if ((info.zhuSkill || str.indexOf('主公技') == 0) && !listx.includes(list[i])) listx.push(list[i]);
										}
									}
								}
								var str = '';
								str += '将拥有主公技的武将牌当做【杀】使用或打出';
								event.dialog = ui.create.dialog(str, [listx, 'character']);
								var next = player.chooseButton(event.dialog, true, function (button) {
									return 1;
								});
								('step 1');
								if (result.bool) {
									if (player.storage.RE_huanqian.owned[result.buttons[0].link]) delete player.storage.RE_huanqian.owned[result.buttons[0].link];
									lib.skill.RE_huanqian.update(player);
								} else {
									event.finish();
								}
							},
							prewuxie() {
								'step 0';
								var slist = player.storage.RE_huanqian.owned;
								var list = [],
									listx = [];
								for (var i in slist) {
									list.push(i);
								}
								for (var i = 0; i < list.length; i++) {
									var skills = lib.character[list[i]][3].slice(0);
									for (var j = 0; j < skills.length; j++) {
										var info = lib.skill[skills[j]];
										if (!lib.translate[skills[j] + '_info']) skills.splice(j--, 1);
										if (player.skills.includes(skills[j])) skills.splice(j--, 1);
										var info = lib.skill[skills[j]];
										if (lib.translate[skills[j] + '_info']) {
											var str = lib.translate[skills[j] + '_info'];
											if (str.indexOf('觉醒技') == 0 && !listx.includes(list[i])) listx.push(list[i]);
										}
									}
								}
								var str = '';
								str += '将拥有觉醒技的武将牌当做【无懈可击】使用或打出';
								event.dialog = ui.create.dialog(str, [listx, 'character']);
								var next = player.chooseButton(event.dialog, true, function (button) {
									return 1;
								});
								('step 1');
								if (result.bool) {
									if (player.storage.RE_huanqian.owned[result.buttons[0].link]) delete player.storage.RE_huanqian.owned[result.buttons[0].link];
									lib.skill.RE_huanqian.update(player);
								} else {
									event.finish();
								}
							},
							preshan() {
								'step 0';
								var slist = player.storage.RE_huanqian.owned;
								var list = [],
									listx = [];
								for (var i in slist) {
									list.push(i);
								}
								for (var i = 0; i < list.length; i++) {
									var skills = lib.character[list[i]][3].slice(0);
									for (var j = 0; j < skills.length; j++) {
										var info = lib.skill[skills[j]];
										if (!lib.translate[skills[j] + '_info']) skills.splice(j--, 1);
										if (player.skills.includes(skills[j])) skills.splice(j--, 1);
										var info = lib.skill[skills[j]];
										if (lib.translate[skills[j] + '_info']) {
											if (get.is.locked(skills[j]) && !listx.includes(list[i])) listx.push(list[i]);
										}
									}
								}
								var str = '';
								str += '将拥有锁定技的武将牌当做【闪】使用或打出';
								event.dialog = ui.create.dialog(str, [listx, 'character']);
								var next = player.chooseButton(event.dialog, true, function (button) {
									return 1;
								});
								('step 1');
								if (result.bool) {
									if (player.storage.RE_huanqian.owned[result.buttons[0].link]) delete player.storage.RE_huanqian.owned[result.buttons[0].link];
									lib.skill.RE_huanqian.update(player);
								} else {
									event.finish();
								}
							},
							ai: {
								skillTagFilter(player, tag) {
									switch (tag) {
										case 'respondSha': {
											if (!player.storage.RE_huanqiansha) return false;
											break;
										}
										case 'respondShan': {
											if (!player.storage.RE_huanqianshan) return false;
											break;
										}
										case 'save': {
											if (!player.storage.RE_huanqiantao) return false;
											break;
										}
									}
								},
								save: true,
								respondSha: true,
								respondShan: true,
								threaten: 3,
							},
							group: ['RE_huanqian1', 'RE_huanqian2', 'RE_huanqian3', 'RE_huanqian4', 'RE_huanqian5', 'RE_huanqian6'],
							intro: {
								content(storage, player) {
									var str = '';
									var slist = storage.owned;
									var list = [];
									for (var i in slist) {
										list.push(i);
									}
									if (list.length) {
										str += get.translation(list[0]);
										for (var i = 1; i < list.length; i++) {
											str += '、' + get.translation(list[i]);
										}
									}
									var skills = player.additionalSkills.RE_huanqian;
									if (skills.length) {
										str += '<p>当前技能:' + get.translation(skills[0]);
										for (var i = 1; i < skills.length; i++) {
											str += '、' + get.translation(skills[i]);
										}
									}
									return str;
								},
								mark(dialog, content, player) {
									var slist = content.owned;
									var list = [];
									for (var i in slist) {
										list.push(i);
									}
									if (list.length) {
										dialog.addAuto([list, 'character']);
										if (content.locked.length) {
											dialog.addText('拥有锁定技的武将(闪)');
											dialog.add([content.locked, 'character']);
										}
										if (content.limited.length) {
											dialog.addText('拥有限定技的武将(桃)');
											dialog.add([content.limited, 'character']);
										}
										if (content.juexing.length) {
											dialog.addText('拥有觉醒技的武将(无懈)');
											dialog.add([content.juexing, 'character']);
										}
										if (content.zhuSkill.length) {
											dialog.addText('拥有主公技的武将(杀)');
											dialog.add([content.zhuSkill, 'character']);
										}
									}
								},
							},
							mark: true,
						},
						RE_huanqian1: {
							trigger: { global: ['gameStart', 'phaseBefore'] },
							forced: true,
							_priority: 10,
							filter(event, player) {
								return !player.storage.RE_huanqianinited;
							},
							content() {
								for (var i in lib.character) {
									if (lib.filter.characterDisabled2(i)) continue;
									player.storage.RE_huanqian.list.add(i);
								}
								for (var i of game.players) {
									player.storage.RE_huanqian.list.remove([i.name]);
									player.storage.RE_huanqian.list.remove([i.name1]);
									player.storage.RE_huanqian.list.remove([i.name2]);
								}
								lib.skill.RE_huanqian.get(player, 2);
								player.storage.RE_huanqianinited = true;
							},
						},
						RE_huanqian2: {
							trigger: { player: ['phaseBegin', 'damageEnd'] },
							forced: true,
							_priority: 10,
							filter(event, player) {
								return player.storage.RE_huanqian && player.storage.RE_huanqian.list && player.storage.RE_huanqian.list.length;
							},
							content() {
								lib.skill.RE_huanqian.get(player);
							},
							ai: {
								maixie: true,
							},
						},
						RE_huanqian3: {
							enable: ['chooseToUse', 'chooseToRespond'],
							prompt: '拥有限定技的武将牌当做【桃】使用或打出',
							filter(event, player) {
								return player.storage.RE_huanqiantao;
							},
							popname: true,
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAs: { name: 'tao' },
							onuse(result, player) {
								var next = game.createEvent('RE_huanqianCards');
								next.player = player;
								next.setContent(lib.skill.RE_huanqian.pretao);
							},
							onrespond(result, player) {
								var next = game.createEvent('RE_huanqianCards');
								next.player = player;
								next.setContent(lib.skill.RE_huanqian.pretao);
							},
						},
						RE_huanqian4: {
							enable: ['chooseToUse', 'chooseToRespond'],
							prompt: '将拥有主公技的武将牌当做普通【杀】使用或打出',
							filter(event, player) {
								return player.storage.RE_huanqiansha;
							},
							popname: true,
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAs: { name: 'sha' },
							onuse(result, player) {
								var next = game.createEvent('RE_huanqianCards');
								next.player = player;
								next.setContent(lib.skill.RE_huanqian.presha);
							},
							onrespond(result, player) {
								var next = game.createEvent('RE_huanqianCards');
								next.player = player;
								next.setContent(lib.skill.RE_huanqian.presha);
							},
						},
						RE_huanqian5: {
							enable: ['chooseToUse', 'chooseToRespond'],
							prompt: '将拥有锁定技的武将牌当做【闪】使用或打出',
							filter(event, player) {
								return player.storage.RE_huanqianshan;
							},
							popname: true,
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAs: { name: 'shan' },
							onuse(result, player) {
								var next = game.createEvent('RE_huanqianCards');
								next.player = player;
								next.setContent(lib.skill.RE_huanqian.preshan);
							},
							onrespond(result, player) {
								var next = game.createEvent('RE_huanqianCards');
								next.player = player;
								next.setContent(lib.skill.RE_huanqian.preshan);
							},
						},
						RE_huanqian6: {
							enable: ['chooseToUse', 'chooseToRespond'],
							prompt: '将拥有觉醒技的武将牌当做【无懈可击】使用或打出',
							viewAsFilter(player) {
								if (!player.storage.RE_huanqianwuxie) return false;
								return true;
							},
							popname: true,
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAs: { name: 'wuxie' },
							onuse(result, player) {
								var next = game.createEvent('RE_huanqianCards');
								next.player = player;
								next.setContent(lib.skill.RE_huanqian.prewuxie);
							},
							onrespond(result, player) {
								var next = game.createEvent('RE_huanqianCards');
								next.player = player;
								next.setContent(lib.skill.RE_huanqian.prewuxie);
							},
						},
						zyile_yanzao: {
							trigger: { global: 'useSkillBefore' },
							_priority: Infinity,
							filter(event, player) {
								if (event.parent.name == 'zyile_yanzao') return false;
								if (event.player == player) return false;
								if (player.hasSkill(event.skill)) return false;
								return true;
							},
							prompt(event, player) {
								var str = '';
								str += '是否获得' + get.translation(event.player) + '的' + get.translation(event.skill) + '？';
								return str;
							},
							content() {
								player.addAdditionalSkill('zyile_yanzao', trigger.skill, true);
							},
							group: ['zyile_yanzao_begin'],
							subSkill: {
								begin: {
									trigger: { global: 'triggerBefore' },
									forced: true,
									silent: true,
									_priority: Infinity,
									filter(event, player) {
										if (event.parent.name == 'zyile_yanzao_begin') return false;
										if (event.player == player) return false;
										var list = [];
										for (var i in lib.character) {
											if (lib.character[i].mode && lib.character[i].mode.includes(lib.config.mode) == false) continue;
											if (i != 'list') list.push(i);
										}
										var skills2 = [];
										for (var i = 0; i < list.length; i++) {
											var info = lib.character[list[i]];
											if (info) {
												var skills = info[3];
												for (var j = 0; j < skills.length; j++) {
													skills2.push(skills[j]);
												}
											}
										}
										if (!skills2.includes(event.skill) && !player.hasSkill(event.skill)) return false;
										return true;
									},
									content() {
										'step 0';
										var str = trigger.skill + 'After';
										player.storage.zyile_yanzao = trigger.skill;
										if (player.hasSkill('zyile_yanzao_end')) player.removeSkill('zyile_yanzao_end');
										lib.skill.zyile_yanzao_end.trigger = { global: str };
										('step 1');
										player.addSkill('zyile_yanzao_end');
									},
								},
								end: {
									filter(event, player) {
										if (event.player == player) return false;
										if (player.hasSkill(player.storage.zyile_yanzao)) return false;
										return true;
									},
									prompt(event, player) {
										var str = '';
										str += '是否获得' + get.translation(event.player) + '的' + get.translation(player.storage.zyile_yanzao) + '？';
										return str;
									},
									content() {
										event.triggername = event.triggername.replace('After', '');
										player.addAdditionalSkill('zyile_yanzao', event.triggername, true);
										delete player.storage.zyile_yanzao;
									},
								},
							},
						},
						zyile_weizhi: {
							trigger: { global: ['gameStart', 'phaseBegin'] },
							forced: true,
							_priority: 50,
							content() {
								var num = Math.floor(Math.random() * 100);
								if (num < 4) num = 4;
								if (num > 99) num = 99;
								player.maxHp = num;
								if (Math.random() < 0.5) player.recover();
								player.update();
							},
							group: ['zyile_weizhi_begin', 'zyile_weizhi_end'],
							subSkill: {
								begin: {
									trigger: { player: 'phaseBegin' },
									forced: true,
									content() {
										var skillsx = [],
											skills = [];
										for (var i in lib.characterPack) {
											for (var j in lib.characterPack[i]) {
												var info = lib.characterPack[i][j];
												if (!info[3]) continue;
												skillsx.push(info[3]);
											}
										}
										while (skills.length < 10 && skillsx.length) {
											if (Math.random() < 0.45 && skills.length > 3) break;
											var list = skillsx.randomRemove();
											var num2 = skills.length + list.length;
											if (num2 > 10) continue;
											skills.addArray(list);
										}
										if (skills.length) {
											for (var j of skills) {
												player.addTempSkill(j, { player: 'phaseBegin' });
											}
										}
									},
								},
								end: {
									trigger: { player: 'judgeBefore' },
									forced: true,
									content() {
										trigger.untrigger();
										trigger.finish();
									},
								},
							},
						},
						zyile_xiongyi: {
							trigger: { target: 'useCardToBegin', player: ['changeHp', 'gainMaxHpEnd', 'loseMaxHpEnd'] },
							forced: true,
							_priority: 30,
							filter(event, player, name) {
								if (name == 'useCardToBegin') {
									if (event.player == player) return false;
									if (_status.currentPhase != event.player) return false;
									if (event.player.hasSkill('zyile_xiongyi_debuff')) return false;
								}
								var target = _status.currentPhase;
								if (target && target.hasSkill('zyile_xiongyi_debuff')) return false;
								return true;
							},//QQQ
							init(player) {
								player.storage.zyile_xiongyi = 0;
							},
							content() {
								'step 0';
								if (!player.storage.zyile_xiongyi) player.storage.zyile_xiongyi = 0;
								if (event.triggername == 'useCardToBegin') player.storage.zyile_xiongyi++;
								('step 1');
								var target = _status.currentPhase;
								if (player.storage.zyile_xiongyi >= player.hp && target.hp > player.hp) {
									target.addTempSkill('zyile_xiongyi_debuff', 'phaseAfter');
								}
							},
							group: ['zyile_xiongyi_end', 'zyile_xiongyi_clear', 'zyile_xiongyi_begin'],
							subSkill: {
								clear: {
									trigger: { global: 'phaseEnd' },
									forced: true,
									popup: false,
									content() {
										player.storage.zyile_xiongyi = 0;
										delete player.storage.zyile_xiongyi;
									},
								},
								begin: {
									trigger: { player: 'phaseBefore' },
									forced: true,
									_priority: 100,
									filter(event, player) {
										return player.isLinked() || player.isTurnedOver();
									},
									content() {
										'step 0';
										if (player.isLinked()) player.link();
										('step 1');
										if (player.isTurnedOver()) player.turnOver();
									},
								},
								end: {
									trigger: { target: 'useCardToBegin' },
									forced: true,
									_priority: 30,
									logTarget: 'player',
									filter(event, player) {
										if (event.player == player) return false;
										if (_status.currentPhase != event.player) return false;
										return event.player.hp < player.hp;
									},
									content() {
										trigger.player.chooseToDiscard('he', true)._triggered = null;
									},
								},
								debuff: {
									mod: {
										playerEnabled(card, player, target) {
											if (target.hasSkill('zyile_xiongyi')) return false;
										},
									},
									mark: true,
									intro: {
										content(storage, player) {
											var str = '不能对';
											var target = game.findPlayer(function (player) {
												return player.hasSkill('zyile_xiongyi');
											});
											str += get.translation(target) + '使用牌';
											return str;
										},
									},
								},
							},
						},
						zyile_baoji: {
							trigger: { player: ['changeHp', 'gainMaxHpEnd', 'loseMaxHpEnd'] },
							forced: true,
							_priority: 30,
							filter(event, player) {
								return player.hp >= game.players.length * 2;
							},
							content() {
								if (player.hasSkill('zyile_eshis')) {
									player.removeSkill('zyile_eshis');
								}
								if (!player.hasSkill('zyile_mengxingx')) player.addSkill('zyile_mengxingx');
								if (!player.hasSkill('zyile_ezuo')) player.addSkill('zyile_ezuo');
							},
							group: ['zyile_baoji_end', 'zyile_baoji_begin'],
							subSkill: {
								end: {
									trigger: { player: ['changeHp', 'gainMaxHpEnd', 'loseMaxHpEnd'] },
									forced: true,
									_priority: 30,
									filter(event, player) {
										return !game.hasPlayer(function (target) {
											return target.hp < player.hp;
										});
									},
									content() {
										if (player.hasSkill('zyile_mengxingx') || player.hasSkill('zyile_ezuo')) {
											player.removeSkill('zyile_mengxingx');
											player.removeSkill('zyile_ezuo');
										}
										if (!player.hasSkill('zyile_eshis')) player.addSkill('zyile_eshis');
									},
								},
								begin: {
									trigger: { player: 'phaseBefore' },
									forced: true,
									content() {
										player.discard(player.getCards('j'));
									},
									filter(event, player) {
										return player.countCards('j') > 0;
									},
									ai: {
										effect: {
											target(card, player, target, current) {
												if (get.type(card) == 'delay') return 0;
											},
										},
									},
								},
							},
						},
						zyile_ezuo: {
							trigger: { global: ['recoverEnd', 'damageEnd', 'dying'] },
							forced: true,
							filter(event, player, name) {
								if (event.player == player) return false;
								return true;
							},
							content() {
								'step 0';
								if (event.triggername == 'recoverEnd') event.goto(3);
								('step 1');
								var controls = [];
								var skills = trigger.player.getCards('s');
								for (var i = 0; i < skills.length; i++) {
									var info = lib.skill[skills[i]];
									if (!info) continue;
									if (!lib.translate[skills[i]]) continue;
									if (!lib.translate[skills[i] + '_info']) continue;
									if (player.hasSkill(skills[i])) continue;
									if (!controls.includes(skills[i])) {
										controls.push(skills[i]);
									}
								}
								if (!controls.length) event.finish();
								else if (controls.length == 1) {
									player.popup(controls[0]);
									player.addAdditionalSkill('zyile_ezuo', [controls[0]], true);
									game.log(player, '获得技能', '【' + get.translation(controls[0]) + '】');
									event.finish();
								} else {
									player
										.chooseControl(controls)
										.set('ai', function () {
											return Math.floor(Math.random() * controls.length);
										})
										.set('prompt', '恶作:选择获得' + get.translation(trigger.player) + '的一项技能');
								}
								('step 2');
								if (result.control) {
									player.popup(result.control);
									player.addAdditionalSkill('zyile_ezuo', [result.control], true);
									game.log(player, '获得技能', '【' + get.translation(result.control) + '】');
									event.finish();
								} else {
									event.finish();
								}
								('step 3');
								player
									.chooseControl('失去一点体力上限', '随机失去一个技能')
									.set('ai', function () {
										var skills = player.getCards('s');
										if (player.maxHp > 3) return '失去一点体力上限';
										if (skills.length <= 3) return '失去一点体力上限';
										return '随机失去一个技能';
									})
									.set('prompt', '恶作:选择一项');
								('step 4');
								if (result.control == '失去一点体力上限') {
									player.loseMaxHp(true);
								} else {
									var skills = player.getCards('s');
									skills.remove('zyile_ezuo');
									var skill = skills.randomGet();
									player.popup(skill);
									player.removeSkill(skill);
									for (var i in player.additionalSkills) {
										if (Array.isArray(player.additionalSkills[i])) {
											for (j = 0; j < player.additionalSkills[i].length; j++) {
												if (player.additionalSkills[i][j]) {
													if (skill == player.additionalSkills[i][j]) delete player.additionalSkills[i][j];
												}
											}
										} else if (player.additionalSkills[i] && typeof player.additionalSkills[i] == 'string') {
											if (skill == player.additionalSkills[i][j]) delete player.additionalSkills[i][j];
										}
									}
									event.finish();
								}
							},
						},
						zyile_mengxingx: {
							trigger: { global: ['phaseEnd', 'phaseBegin'] },
							_priority: 2,
							logTarget: 'player',
							filter(event, player, name) {
								if (event.player == player) return false;
								if (name == 'phaseBegin') {
									return event.player.hp < player.hp;
								}
								if (name == 'phaseEnd') {
									return event.player.hp > player.hp;
								}
							},
							check(event, player) {
								if (get.attitude(player, event.player) <= 0) return 1;
								return 0;
							},
							content() {
								trigger.player.damage();
								player.gainPlayerCard(trigger.player, true, 'he');
							},
						},
						zyile_eshis: {
							mod: {
								cardEnabled(card, player) {
									if (card.name != 'tao' && card.suit == 'heart' && _status.event.skill != 'zyile_eshis') return false;
								},
								cardUsable(card, player) {
									if (card.name != 'tao' && card.suit == 'heart' && _status.event.skill != 'zyile_eshis') return false;
								},
								cardRespondable(card, player) {
									if (card.name != 'tao' && card.suit == 'heart' && _status.event.skill != 'zyile_eshis') return false;
								},
								cardSavable(card, player) {
									if (card.name != 'tao' && card.suit == 'heart' && _status.event.skill != 'zyile_eshis') return false;
								},
							},
							enable: ['chooseToUse', 'chooseToRespond'],
							filterCard: { suit: 'heart' },
							popname: true,
							viewAs: { name: 'tao' },
							filter(event, player) {
								return player.countCards('h', { suit: 'heart' }) > 0;
							},
							check() {
								return 1;
							},
							ai: {
								skillTagFilter(player) {
									return player.countCards('h', { suit: 'heart' }) > 0;
								},
								save: true,
								order: 4,
								useful: -1,
								value: -1,
							},
							group: ['zyile_eshis2', 'zyile_eshis_end', 'zyile_eshis_heart'],
						},
						zyile_eshis_end: {
							trigger: { player: ['phaseEnd', 'phaseBegin'] },
							forced: true,
							_priority: 5,
							filter(event, player) {
								return player.isAlive();
							},
							content() {
								player.gainMaxHp(true);
								player.recover();
								player.draw(2);
							},
							ai: {
								threaten: 4,
							},
						},
						zyile_eshis_heart: {
							trigger: { global: ['useCardAfter', 'respondAfter'] },
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								if (event.cards) {
									if (Array.isArray(event.cards)) for (var i of event.cards) {
										if (i.suit == 'heart') return true;
									}
								}
								return false;
							},
							content() {
								player.gain(trigger.cards, 'gain2');
								game.log(player, '获得了', trigger.cards);
							},
						},
						zyile_eshis2: {
							mod: {
								cardEnabled(card, player) {
									if (card.name != 'jiu' && card.suit == 'spade' && _status.event.skill != 'zyile_eshis2') return false;
								},
								cardUsable(card, player) {
									if (card.name != 'jiu' && card.suit == 'spade' && _status.event.skill != 'zyile_eshis2') return false;
								},
								cardRespondable(card, player) {
									if (card.name != 'jiu' && card.suit == 'spade' && _status.event.skill != 'zyile_eshis2') return false;
								},
								cardSavable(card, player) {
									if (card.name != 'jiu' && card.suit == 'spade' && _status.event.skill != 'zyile_eshis2') return false;
								},
							},
							popname: true,
							enable: ['chooseToUse', 'chooseToRespond'],
							filterCard: { suit: 'spade' },
							viewAs: { name: 'jiu' },
							filter(event, player) {
								return player.countCards('h', { suit: 'spade' });
							},
							check() {
								return 1;
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'save') && current < 0) return 0.6;
									},
								},
								order() {
									return lib.card.sha.ai.order + 0.2;
								},
								useful: -1,
								value: -1,
							},
						},
						zyile_henhe: {
							mod: {
								globalFrom(from, to, distance) {
									if (from.hp > to.hp) return distance - from.hp;
								},
								globalTo(from, to, distance) {
									if (from.hp > to.hp) return distance + from.hp;
								},
							},
							ai: {
								threaten: 0.8,
							},
						},
						zyile_xianyu: {
							trigger: { player: 'phaseDrawBegin' },
							_priority: -1,
							filter(event, player) {
								var attack = 0,
									def = 0;
								for (var i of game.players) {
									if (i == player) continue;
									if (get.distance(i, player, 'attack') > 1) {
										def++;
									}
									if (get.distance(player, i, 'attack') <= 1) {
										attack++;
									}
								}
								if (def >= Math.floor(game.players.length / 2)) return true;
								if (attack >= Math.floor(game.players.length / 2)) return true;
								return false;
							},
							check(event, player) {
								var attack = 0,
									def = 0;
								for (var i of game.players) {
									if (i == player) continue;
									if (get.distance(i, player, 'attack') > 1) {
										def++;
									}
									if (get.distance(player, i, 'attack') <= 1) {
										attack++;
									}
								}
								if (def >= Math.floor(game.players.length / 2)) return 1;
								if (attack >= Math.floor(game.players.length / 2) && attack > 3 && player.hp > 1) return 1;
								return 0;
							},
							content() {
								'step 0';
								trigger.untrigger();
								trigger.finish();
								('step 1');
								var attack = 0,
									def = 0;
								for (var i of game.players) {
									if (i == player) continue;
									if (get.distance(i, player, 'attack') > 1) {
										def++;
									}
									if (get.distance(player, i, 'attack') <= 1) {
										attack++;
									}
								}
								event.controls = [];
								if (def >= Math.floor(game.players.length / 2)) event.controls.push('选项一');
								if (attack >= Math.floor(game.players.length / 2)) event.controls.push('选项二');
								player
									.chooseControl(event.controls)
									.set('prompt', '衔域<br><br><div class="text">选项一:跳过摸牌阶段并回复一点体力摸三张牌.</div><br><div class="text">选项二:跳过摸牌阶段并获得他们各一张牌失去一点体力.</div></br>')
									.set('ai', function (event, player) {
										var attack = 0,
											def = 0;
										for (var i of game.players) {
											if (i == player) continue;
											if (get.distance(i, player, 'attack') > 1) {
												def++;
											}
											if (get.distance(player, i, 'attack') <= 1) {
												attack++;
											}
										}
										if (def >= Math.floor(game.players.length / 2)) return '选项一';
										if (attack >= Math.floor(game.players.length / 2) && attack > 3 && player.hp > 1) return '选项二';
									});
								('step 2');
								if (result.control == '选项一') {
									player.recover();
									player.draw(3);
								} else {
									var players = get.players(player);
									players.remove(player);
									for (var i of game.players) {
										if (get.distance(player, i, 'attack') > 1) {
											players.remove(i);
										}
									}
									event.players = players;
									event.bool = true;
								}
								('step 3');
								if (event.players && event.players.length) {
									var current = event.players.shift();
									var hs = current.getCards('hej');
									if (hs.length) {
										player.gainPlayerCard('hej', current, true);
									}
									event.redo();
								}
								('step 4');
								if (event.bool) player.loseHp();
							},
							ai: {
								threaten: 1.3,
							},
						},
						//锁定技,每当有一名角色死亡,你选择一项:1、你将手牌数和体力补至体力上限.2、你获得这名角色的一个技能
						zyile_shiling: {
							trigger: { global: 'dieAfter' },
							logTarget: 'player',
							forced: true,
							async content(event, trigger, player) {//QQQ
								const skills = trigger.player.skills.filter((q) => !player.hasSkill(q));
								if (skills.length) {
									const { result: { control } } = await player.chooseControl('将手牌数和体力补至体力上限', '获得这名角色的一个技能')
										.set('ai', function (event, player) {
											if (player.hp < 2 || player.countCards('h') < 2) return '将手牌数和体力补至体力上限';
											return '获得这名角色的一个技能';
										});
									if (control == '将手牌数和体力补至体力上限') {
										player.hp = player.maxHp;
										player.drawTo(player.maxHp);
									}
									else {
										const { result: { links } } = await player.chooseButton(['获得这名角色的一个技能', [skills, 'tdnodes']], true);
										if (links?.length) {
											player.popup(links[0]);
											player.addAdditionalSkill('zyile_shiling', links, true);
										}
									}
								}
								else {
									player.hp = player.maxHp;
									player.drawTo(player.maxHp);
								}
							},
							ai: {
								threaten: 1.2,
							},
						},
						zyile_luanxing: {
							trigger: { global: 'phaseEnd' },
							filter(event, player) {
								return event.player != player && event.player.isAlive();
							},
							logTarget: 'player',
							forced: true,
							content() {
								'step 0';
								var hs = trigger.player.getCards('he');
								if (hs.length) {
									player.gain(hs.randomGet(), trigger.player);
									trigger.player.$give(1, player);
								}
								('step 1');
								trigger.player.chooseToUse('乱形:请使用一张锦囊牌,否则受到一点伤害')
									.set('filterCard', function (card, player) {
										return get.type(card, 'trick') == 'trick' && player.filterCardx(card);
									});
								('step 2');
								if (!result.bool) {
									trigger.player.damage();
								}
							},
						},
						zyile_weihuo: {
							trigger: { player: 'phaseEnd' },
							forced: true,
							filter(event, player) {
								return player.countCards('he') > 0 && player.isAlive();
							},
							content() {
								'step 0';
								var next = player.chooseToDiscard('he', '为祸:是否弃置一张牌？');
								next.set('ai', function (card) {
									return 10 - get.value(card);
								});
								('step 1');
								if (result.cards?.length) {
									player.storage.zyile_weihuo = get.color(result.cards[0]);
									player.storage.zyile_weihuo2 = result.cards[0];
									player.addTempSkill('zyile_weihuo_countGeneral', { player: 'phaseBegin' });
								} else {
									event.finish();
								}
							},
							ai: {
								effect: {
									player(card, player, target) {
										for (var i of game.players) {
											if (i.storage.zyile_weihuo && i.hasSkill('zyile_weihuo_countGeneral')) {
												if (get.color(card) == i.storage.zyile_weihuo) return [1, 0, 0, -1];
											}
										}
									},
									target(card, player, target) {
										for (var i of game.players) {
											if (i.storage.zyile_weihuo && i.hasSkill('zyile_weihuo_countGeneral')) {
												if (get.color(card) == i.storage.zyile_weihuo) return [1, 0, 0, -1];
											}
										}
									},
								},
							},
							subSkill: {
								countGeneral: {
									trigger: { global: ['useCard', 'respond'] },
									forced: true,
									logTarget: 'player',
									mark: true,
									intro: {
										content(storage, player) {
											var str = '';
											if (player.storage.zyile_weihuo == 'red') {
												str += '<span class="bluetext" style="color:	#FF0000">红色</span>';
											} else {
												str += '<span class="bluetext" style="color:	#000000">黑色</span>';
											}
											return '当前为祸卡牌是<span class="yellowtext">' + get.translation(player.storage.zyile_weihuo2) + '</span>,颜色为' + str;
										},
									},
									filter(event, player) {
										if (!player.storage.zyile_weihuo) return false;
										if (event.player == player) return false;
										return event.cards[0] && get.color(event.cards[0]) == player.storage.zyile_weihuo;
									},
									content() {
										if (get.type(trigger.cards[0]) == 'equip' || get.type(trigger.cards[0]) == 'delay') {
											trigger.player.loseHp();
										} else {
											player.recover();
											player.draw();
										}
									},
								},
							},
						},
						zyile_jubao: {
							trigger: { player: 'phaseBegin' },
							forced: true,
							filter(event, player) {
								return !player.getEquips(5);
							},
							content() {
								'step 0';
								event.skills = [];
								for (var i in lib.card) {
									if (!lib.translate[i + '_info']) continue;
									if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
									if (lib.config.hiddenCardPack.indexOf(i) == 0) continue;
									if (lib.card[i].subtype == 'equip5') {
										var skill = lib.card[{ name: i }.name].skills;
										if (skill) event.skills = event.skills.concat(skill);
									}
								}
								for (var i = 0; i < event.skills.length; i++) {
									if (!lib.translate[event.skills[i] + '_info']) event.skills.splice(i--, 1);
								}
								('step 1');
								if (event.skills.length <= 6) {
									var dialog = ui.create.dialog();
									dialog.add('请选择一项宝物效果<br><br>');
									for (var i = 0; i < event.skills.length; i++) {
										if (lib.translate[event.skills[i] + '_info']) {
											var translation = get.translation(event.skills[i]);
											translation = translation.slice(0, 2);
											dialog.add('<div><div class="skill">【' + translation + '】</div><div>' + lib.translate[event.skills[i] + '_info'] + '</div></div>');
										}
									}
									event.skills.push('再不选没了!');
									player
										.chooseControl(event.skills)
										.set('ai', function () {
											if (Math.random() > 0.7) return 'kongdongyin';
											return Math.floor(Math.random() * event.skills.length);
										})
										.set('dialog', dialog);
								} else {
									var skillx = event.skills.randomRemove(6);
									skillx.push('不要这些!');
									var dialog = ui.create.dialog();
									dialog.add('请选择一项宝物效果<br><br>');
									for (var i = 0; i < skillx.length; i++) {
										if (lib.translate[skillx[i] + '_info']) {
											var translation = get.translation(skillx[i]);
											translation = translation.slice(0, 2);
											dialog.add('<div><div class="skill">【' + translation + '】</div><div>' + lib.translate[skillx[i] + '_info'] + '</div></div>');
										}
									}
									player
										.chooseControl(skillx)
										.set('ai', function () {
											if (Math.random() > 0.7) return 'kongdongyin';
											return Math.floor(Math.random() * skillx.length);
										})
										.set('dialog', dialog);
								}
								('step 2');
								if (result.control == '不要这些!') {
									event.goto(1);
								} else if (result.control == '再不选没了!') {
									event.finish();
								} else {
									player.popup(result.control);
									player.addTempSkill(result.control, { player: 'phaseBegin' });
								}
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.subtype(card) == 'equip5') return 0;
									},
								},
							},
						},
						AM_yuxi: {
							trigger: { global: ['useCardAfter', 'respondAfter', 'discardAfter'] },
							filter(event, player) {
								if (player != _status.currentPhase) return false;
								if (event.player == player) return false;
								if (!player.storage.AM_yuxi) return false;
								if (event.cards) {
									if (Array.isArray(event.cards)) for (var i of event.cards) {
										if (i.position != 'd' && player.storage.AM_yuxi.includes(i.suit)) return true;
									}
								}
								return false;
							},
							content() {
								var cards = [];
								if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
									if (get.position(i) == 'd') {
										cards.push(i);
									}
								}
								player.gain(cards, 'gain2');
								game.log(player, '获得了', cards);
							},
							group: ['AM_yuxi_xreturn', 'AM_yuxi_xdelete'],
							subSkill: {
								xreturn: {
									trigger: { player: ['useCard', 'respond'] },
									forced: true,
									popup: false,
									silent: true,
									filter(event, player) {
										return event.cards && event.cards.length;
									},
									content() {
										if (!player.storage.AM_yuxi) player.storage.AM_yuxi = [];
										if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
											var suit = i.suit;
											if (!player.storage.AM_yuxi.includes(suit)) {
												player.storage.AM_yuxi.push(suit);
											}
										}
									},
								},
								xdelete: {
									trigger: { global: 'phaseEnd' },
									forced: true,
									popup: false,
									silent: true,
									content() {
										if (player.storage.AM_yuxi) {
											player.storage.AM_yuxi = [];
											delete player.storage.AM_yuxi;
										}
									},
								},
							},
						},
						AM_bujing: {
							trigger: { player: ['useCard', 'respond'] },
							forced: true,
							filter(event, player) {
								return !player.storage.AM_bujing && event.cards && _status.currentPhase != player;
							},
							content() {
								player.storage.AM_bujing = trigger.cards[0];
							},
							group: ['AM_bujing_xreturn', 'AM_bujing_xdelete'],
							subSkill: {
								xreturn: {
									trigger: { player: ['useCardAfter', 'respondAfter'] },
									filter(event, player) {
										return player.storage.AM_bujing && event.cards && event.cards[0] == player.storage.AM_bujing;
									},
									prompt(event, player) {
										var str = '';
										str += '发动【不惊】获得' + get.translation(event.cards[0]) + '？';
										return str;
									},
									content() {
										player.gain(trigger.cards, 'gain2');
										game.log(player, '获得了', trigger.cards);
									},
								},
								xdelete: {
									trigger: { global: 'phaseEnd' },
									forced: true,
									popup: false,
									silent: true,
									content() {
										if (player.storage.AM_bujing) {
											if (player.getCards('h').includes(player.storage.AM_bujing)) player.discard(player.storage.AM_bujing);
											delete player.storage.AM_bujing;
										}
									},
								},
							},
						},
						zyile_chuandi: {
							enable: 'phaseUse',
							filterCard: true,
							selectCard: 1,
							discard: false,
							filterTarget(card, player, target) {
								if (player == target) return false;
								return get.distance(player, target, 'attack') <= 1;
							},
							filter(event, player) {
								return get.skillCount('zyile_chuandi', player) < player.hp;
							},
							prepare(cards, player, targets) {
								player.$give(cards.length, targets[0]);
							},
							content() {
								'step 0';
								target.gain(cards, player);
								event.current = target;
								('step 1');
								if (event.current.countCards('h') > 0) {
									event.current.chooseCard('选择一张牌交给后一位角色', true).set('ai', function (card) {
										if (get.attitude(event.current, event.current.next) > 0) return -ai.get.disvalue(card);
										return ai.get.disvalue(card);
									});
								}
								('step 2');
								if (result.bool) {
									var targets = event.current.next;
									event.current.$give(1, targets);
									targets.gain(result.cards[0], event.current);
									if (targets == player) {
										if (get.color(cards[0]) == get.color(result.cards[0])) {
											var targetsx = [];
											for (var i of game.players) {
												if (player.canUse('wugu', i)) {
													targetsx.push(i);
												}
											}
											player.useCard({ name: 'wugu' }, targetsx);
										}
									}
								}
								if (event.current.next != player) {
									event.current = event.current.next;
									event.goto(1);
								}
							},
							check(card) {
								return 6 - get.value(card);
							},
							position: 'h',
							ai: {
								order: 1,
								result: {
									target(player, target) {
										if (get.attitude(player, target) > 0) return 1;
										return 0;
									},
								},
							},
						},
						zyile_yanxu: {
							trigger: { player: 'phaseBegin' },
							forced: true,
							filter(event, player) {
								return !player.storage.zyile_yanxu2;
							},
							init(player) {
								player.storage.zyile_yanxu = 0;
							},
							intro: {
								content: 'turn',
							},
							content() {
								'step 0';
								var num = 0;
								for (var i of game.players) {
									if (num < i.hp) num = i.hp;
								}
								player
									.judge(function (card) {
										return card.number > _status.event.num ? 1 : 0;
									})
									.set('num', num);
								('step 1');
								if (result.card) player.gain(result.card, 'gain2');
								if (result.bool) {
									player.storage.zyile_yanxu2 = true;
									player.storage.zyile_yanxu = 0;
									player.storage.zyile_yanxu += result.card.number;
									player.markSkill('zyile_yanxu');
								}
							},
							group: ['zyile_yanxu_turn'],
							subSkill: {
								turn: {
									trigger: { player: 'phaseBegin' },
									forced: true,
									popup: false,
									silent: true,
									filter(event, player) {
										return player.storage.zyile_yanxu > 0;
									},
									content() {
										player.storage.zyile_yanxu--;
										player.markSkill('zyile_yanxu');
										if (player.storage.zyile_yanxu <= 0) {
											player.unmarkSkill('zyile_yanxu');
											player.storage.zyile_yanxu2 = false;
											player.maxHp = 4;
											player.hp = player.maxHp;
											player.update();
										}
									},
								},
							},
						},
						zyile_fuyi: {
							trigger: { player: 'gainBefore' },
							forced: true,
							popup: false,
							filter(event, player) {
								if (event.cards) {
									if (Array.isArray(event.cards)) for (var i of event.cards) {
										if (i.original != 'h' && i.original != 'e' && i.original != 'j') {
											if (get.position(i) != 's' && event.parent.name != 'zyile_fuyi' && !get.owner(i)) return true;
										}
									}
								}
								return false;
							},
							content() {
								'step 0';
								trigger.finish();
								trigger.untrigger();
								event.basic = 0;
								(event.equip = 0), (event.trick = 0), (event.num = trigger.cards.length);
								('step 1');
								var cards = player.getCards('h');
								if (Array.isArray(cards)) for (var i of cards) {
									if (get.type(i, 'trick') == 'basic') {
										event.basic++;
									}
									if (get.type(i, 'trick') == 'equip') {
										event.equip++;
									}
									if (get.type(i, 'trick') == 'trick') {
										event.trick++;
									}
								}
								event.bool = Math.min(event.basic, event.equip, event.trick);
								('step 2');
								var cards = [],
									cardPile = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									cardPile.push(ui.cardPile.childNodes[i]);
								}
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									cardPile.push(ui.discardPile.childNodes[i]);
								}
								cardPile.randomSort();
								switch (event.bool) {
									case event.basic:
										while (event.num > 0) {
											event.num--;
											for (var i = 0; i < cardPile.length; i++) {
												if (get.type(cardPile[i], 'trick') == 'basic' && !cards.includes(cardPile[i])) {
													var card = cardPile[i];
													break;
												}
											}
											if (card) cards.push(card);
										}
										break;
									case event.trick:
										while (event.num > 0) {
											event.num--;
											for (var i = 0; i < cardPile.length; i++) {
												if (get.type(cardPile[i], 'trick') == 'trick' && !cards.includes(cardPile[i])) {
													var card = cardPile[i];
													break;
												}
											}
											if (card) cards.push(card);
										}
										break;
									case event.equip:
										while (event.num > 0) {
											event.num--;
											for (var i = 0; i < cardPile.length; i++) {
												if (get.type(cardPile[i], 'trick') == 'equip' && !cards.includes(cardPile[i])) {
													var card = cardPile[i];
													break;
												}
											}
											if (card) cards.push(card);
										}
										break;
								}
								if (cards.length) player.gain(cards, 'draw');
							},
						},
						zyile_xionghuo: {
							trigger: { global: 'gainBegin' },
							forced: true,
							logTarget: 'player',
							filter(event, player) {
								if (event.cards && event.player != player) {
									return event.player.countCards('h') > player.countCards('h');
								}
								return false;
							},
							content() {
								'step 0';
								event.videoId = lib.status.videoId++;
								var cards = trigger.player.getCards('h');
								if (player.isOnline2()) {
									player.send(
										function (cards, id) {
											ui.create.dialog('凶祸', cards).videoId = id;
										},
										cards,
										event.videoId
									);
								}
								event.dialog = ui.create.dialog('凶祸', cards);
								event.dialog.videoId = event.videoId;
								if (!event.isMine()) {
									event.dialog.style.display = 'none';
								}
								player
									.chooseButton()
									.set('dialog', event.videoId)
									.set('ai', function (button) {
										if (get.attitude(_status.event.player, trigger.player) > 0) return 0;
										return 1;
									});
								('step 1');
								if (result.links?.length) {
									event.card = result.links[0];
									var func = function (card, id) {
										var dialog = get.idDialog(id);
										if (dialog) {
											for (var i = 0; i < dialog.buttons.length; i++) {
												if (dialog.buttons[i].link == card) {
													dialog.buttons[i].classList.add('selectedx');
												} else {
													dialog.buttons[i].classList.add('unselectable');
												}
											}
										}
									};
									if (player.isOnline2()) {
										player.send(func, event.card, event.videoId);
									} else if (event.isMine()) {
										func(event.card, event.videoId);
									}
									player.chooseControl('弃置', '牌堆顶');
								} else {
									if (player.isOnline2()) {
										player.send('closeDialog', event.videoId);
									}
									event.dialog.close();
									event.finish();
								}
								('step 2');
								if (player.isOnline2()) {
									player.send('closeDialog', event.videoId);
								}
								event.dialog.close();
								var card = event.card;
								if (result.control == '牌堆顶') {
									trigger.player.lose(card);
									player.showCards(card, '置于牌堆顶');
								} else {
									trigger.player.discard(card);
									event.finish();
								}
								('step 3');
								event.card.fix();
								ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
								game.log(player, '将', event.card, '置于牌堆顶');
							},
						},
						zyile_moyi: {
							trigger: { player: ['turnOverBefore', 'linkBefore'] },
							_priority: 20,
							forced: true,
							filter(event, player, name) {
								if (name == 'turnOverBefore') return !player.isTurnedOver();
								return !player.isLinked();
							},
							content() {
								if (event.triggername == 'turnOverBefore') {
									trigger.cancel();
									game.log(player, '取消了翻面');
								} else {
									trigger.cancel();
									game.log(player, '取消了横置');
								}
							},
							ai: {
								noturn: true,
								effect: {
									target(card, player, target) {
										if (get.type(card) == 'delay') return 0.5;
									},
								},
							},
						},
						zyile_wuxiang: {
							mod: {
								suit(card, suit) {
									return 'none';
								},
							},
							trigger: { player: 'useCard' },
							filter(event, player) {
								return event.targets && event.targets.length && event.card && get.type(event.card) == 'delay';
							},
							silent: true,
							forced: true,
							content() {
								'step 0';
								trigger.untrigger();
								trigger.finish();
								('step 1');
								event.card = ui.create.card();
								event.card.init([trigger.card.suit, trigger.card.number, trigger.card.name]);
								trigger.targets[0].popup(event.card.viewAs || event.card.name, 'thunder');
								('step 2');
								if (!trigger.cancelled) trigger.targets[0].judge(event.card);
								('step 3');
								event.card.expired = true;
								var name = event.card.viewAs || event.card.name;
								if (trigger.cancelled && !trigger.direct) {
									if (lib.card[name].cancel) {
										var next = game.createEvent(name + 'Cancelled');
										next.setContent(lib.card[name].cancel);
										next.card = event.card;
										next.player = trigger.targets[0];
									}
								} else {
									var next = game.createEvent(name);
									next.setContent(lib.card[name].effect);
									next._result = result;
									next.card = event.card;
									next.player = trigger.targets[0];
								}
								ui.clear();
								('step 4');
								if (event.card) event.card.delete();
							},
							group: ['zyile_wuxiang_judge'],
							subSkill: {
								judge: {
									trigger: { global: 'phaseBegin' },
									forced: true,
									filter(event, player) {
										return event.player.isAlive() && event.player != player;
									},
									logTarget: 'player',
									check(event, player) {
										if (get.attitude(player, event.player) <= 0) return 1;
										return 0;
									},
									content() {
										'step 0';
										var list = { basic: [], equip: [], trick: [], delay: [] };
										for (var i = 0; i < lib.inpile.length; i++) {
											var name = lib.inpile[i];
											var info = lib.card[name];
											if (info.autoViewAs) continue;
											if (!list[info.type]) {
												list[info.type] = [];
											}
											list[info.type].push(lib.inpile[i]);
										}
										list.delay.sort(lib.sort.name);
										event.card = game.createCard(list.delay.randomGet());
										('step 1');
										trigger.player.popup(event.card.name, 'thunder');
										('step 2');
										if (!event.cancelled) trigger.player.judge(event.card);
										('step 3');
										event.card.expired = true;
										var name = event.card.name;
										if (trigger.cancelled && !trigger.direct) {
											if (lib.card[name].cancel) {
												var next = game.createEvent(name + 'Cancelled');
												next.setContent(lib.card[name].cancel);
												next.card = event.card;
												next.player = trigger.player;
											}
										} else {
											var next = game.createEvent(name);
											next.setContent(lib.card[name].effect);
											next._result = result;
											next.card = event.card;
											next.player = trigger.player;
										}
										ui.clear();
										('step 4');
										if (event.card) event.card.delete();
									},
								},
							},
						},
						zyile_: {
							trigger: { global: 'phaseBegin' },
							filter(event, player) {
								return !event.player.hasSkill('zyile_2') && event.player.isAlive() && event.player != player && (event.player.hp == 1 || event.player.hp == player.hp || event.player.countCards('h') == player.countCards('h'));
							},
							logTarget: 'player',
							check(event, player) {
								if (get.attitude(player, event.player) <= 0) return 1;
								return 0;
							},
							content() {
								'step 0';
								trigger.player.recover();
								trigger.player.draw(3);
								if (player.isEnemiesOf(trigger.player)) trigger.player.addSkill('zyile_2'), trigger.player.markSkill('zyile_2');
								for (var i = 0; i < trigger.player.node.marks.childNodes.length; i++) {
									if (trigger.player.node.marks.childNodes[i].name == 'zyile_2') {
										trigger.player.node.marks.childNodes[i].setBackground(player.name, 'character');
										trigger.player.node.marks.childNodes[i].innerHTML = '';
									}
								}
								('step 1');
								if (trigger.player.isLinked()) trigger.player.link();
								('step 2');
								if (trigger.player.isTurnedOver()) trigger.player.turnOver();
							},
							ai: {
								effect: {
									player(card, player, target) {
										if (get.badTag(card)) {
											if (target.isMad()) return [1, 4];
										}
									},
								},
							},
						},
						zyile_2: {
							intro: {
								content(storage, player) {
									if (typeof player.storage['zyile_2'] == 'number') return '剩余回合数为' + player.storage['zyile_2'];
								},
							},
							init(player) {
								player.addSkill('madx');
								game.log(player, '堕落!');
								player.storage['zyile_2'] = 5;
							},
							trigger: { player: 'phaseEnd' },
							forced: true,
							popup: false,
							silent: true,
							filter(event, player) {
								return player.storage['zyile_2'] > 0;
							},
							content() {
								'step 0';
								player.storage['zyile_2']--;
								('step 1');
								if (player.storage['zyile_2'] <= 0) {
									player.unmarkSkill('zyile_2');
									player.removeSkill('zyile_2');
									player.removeSkill('madx');
								}
							},
						},
						zyile_xiaoling: {
							enable: 'phaseUse',
							delay: 0,
							filter(event, player) {
								var num = Math.max(1, player.maxHp - player.hp);
								return get.skillCount('zyile_xiaoling', player) < num;
							},
							preDelay() {
								'step 0';
								var next = player.chooseCard('选择一张手牌重铸视为使用了一张延时锦囊牌', 'h').set('ai', function (card) {
									return 9 - get.value(card);
								});
								('step 1');
								if (result.cards?.length) {
									player.discard(result.cards);
									player.draw();
								} else {
									var evt = _status.event;
									for (var i = 0; i < 10; i++) {
										if (evt && evt.getParent) {
											evt = evt.parent;
										}
										if (evt.name == 'chooseToUse') {
											evt.finish();
											evt.untrigger(true);
											break;
										}
									}
									player.getStat('skill').zyile_xiaoling--;
									event.finish();
								}
								('step 2');
								var trigger = _status.event.getParent(3);
								var list = { basic: [], equip: [], trick: [], delay: [] };
								for (var i = 0; i < lib.inpile.length; i++) {
									var name = lib.inpile[i];
									var info = lib.card[name];
									if (info.autoViewAs) continue;
									if (!list[info.type]) {
										list[info.type] = [];
									}
									list[info.type].push([get.translation(lib.card[name].type), '', name]);
								}
								list.delay.sort(lib.sort.name);
								var dialog = ui.create.dialog('嚣灵:选择一张想要当做的延时锦囊牌', [list.delay, 'vcard']);
								player
									.chooseButton(dialog, true, function (button) {
										if (button.link[2] == 'lebu') {
											return 1;
										}
										if (button.link[2] == 'guiyoujie') {
											return 0.5;
										}
										var i = Math.floor(Math.random() * list.length);
										return list[i];
									})
									.set('filterButton', function (button) {
										if (!lib.filter.cardEnabled({ name: button.link[2] }, player, trigger)) return false;
										if (!lib.filter.cardUsable({ name: button.link[2] }, player, trigger)) return false;
										return true;
									});
								('step 3');
								event.Q = result.links[0][2];
								if (result.links[0][3]) event.nature = result.links[0][3];
								lib.skill.zyile_xiaoling2.viewAs = { name: event.Q, nature: event.nature };
								event.parent.parent.parent.backup('zyile_xiaoling2');
								event.parent.parent.parent.step = 0;
								if (event.isMine()) {
									event.parent.parent.parent.openskilldialog = '选择' + get.translation(event.Q) + '的目标';
								}
							},
							preTrick() {
								'step 0';
								var next = player.chooseCard('选择一张手牌弃置视为使用了一张锦囊牌', 'h').set('ai', function (card) {
									return 9 - get.value(card);
								});
								('step 1');
								if (result.cards?.length) {
									player.discard(result.cards);
								} else {
									var evt = _status.event;
									for (var i = 0; i < 10; i++) {
										if (evt && evt.getParent) {
											evt = evt.parent;
										}
										if (evt.name == 'chooseToUse') {
											evt.finish();
											evt.untrigger(true);
											break;
										}
									}
									player.getStat('skill').zyile_xiaoling--;
									event.finish();
								}
								('step 2');
								var trigger = _status.event.getParent(3);
								var list = { basic: [], equip: [], trick: [], delay: [] };
								for (var i = 0; i < lib.inpile.length; i++) {
									var name = lib.inpile[i];
									var info = lib.card[name];
									if (info.autoViewAs) continue;
									if (!list[info.type]) {
										list[info.type] = [];
									}
									list[info.type].push([get.translation(lib.card[name].type), '', name]);
								}
								list.trick.sort(lib.sort.name);
								var dialog = ui.create.dialog('嚣灵:选择一张想要使用的锦囊牌', [list.trick, 'vcard']);
								player
									.chooseButton(dialog, true, function (button) {
										var player = _status.event.player;
										var recover = 0,
											lose = 1,
											mad = 0;
										for (var i of game.players) {
											if (!i.isOut()) {
												if (i.isMad()) mad++;
												if (i.hp < i.maxHp) {
													if (get.attitude(player, i) > 0 && !i.isMad()) {
														if (i.hp < 2) {
															lose--;
															recover += 0.5;
														}
														lose--;
														recover++;
													} else if (get.attitude(player, i) < 0 || i.isMad()) {
														if (i.hp < 2) {
															lose++;
															recover -= 0.5;
														}
														lose++;
														recover--;
													}
												} else {
													if (get.attitude(player, i) > 0 && !i.isMad()) {
														lose--;
													} else if (get.attitude(player, i) < 0 || i.isMad()) {
														lose++;
													}
												}
											}
										}
										if (lose > recover && lose > 0) return button.link[2] == 'nanman' ? 1 : -1;
										if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
										return button.link[2] == 'wuzhong' ? 1 : -1;
									})
									.set('filterButton', function (button) {
										if (!lib.filter.cardEnabled({ name: button.link[2] }, player, trigger)) return false;
										if (!lib.filter.cardUsable({ name: button.link[2] }, player, trigger)) return false;
										return true;
									});
								('step 3');
								event.Q = result.links[0][2];
								if (result.links[0][3]) event.nature = result.links[0][3];
								lib.skill.zyile_xiaoling2.viewAs = { name: event.Q, nature: event.nature };
								event.parent.parent.parent.backup('zyile_xiaoling2');
								event.parent.parent.parent.step = 0;
								if (event.isMine()) {
									event.parent.parent.parent.openskilldialog = '选择' + get.translation(event.Q) + '的目标';
								}
							},
							preEquip() {
								'step 0';
								player.draw();
								('step 1');
								var card = get.cardPile(function (card) {
									return get.type(card) == 'equip';
								});
								player.equip(card);
							},
							preBasic() {
								'step 0';
								if (!player.countCards('h')) {
									var evt = _status.event;
									for (var i = 0; i < 10; i++) {
										if (evt && evt.getParent) {
											evt = evt.parent;
										}
										if (evt.name == 'chooseToUse') {
											evt.finish();
											evt.untrigger(true);
											break;
										}
									}
									player.getStat('skill').zyile_xiaoling--;
									event.finish();
								} else {
									player.showCards(player.getCards('h'));
								}
								('step 1');
								var trigger = _status.event.getParent(3);
								var list = { basic: [], equip: [], trick: [], delay: [] };
								for (var i = 0; i < lib.inpile.length; i++) {
									var name = lib.inpile[i];
									var info = lib.card[name];
									if (info.autoViewAs) continue;
									if (!list[info.type]) {
										list[info.type] = [];
									}
									list[info.type].push([get.translation(lib.card[name].type), '', name]);
								}
								list.basic.sort(lib.sort.name);
								var dialog = ui.create.dialog('嚣灵:选择一张想要使用的基本牌', [list.basic, 'vcard']);
								player
									.chooseButton(dialog, true, function (button) {
										var player = _status.event.player;
										if (player.isDamaged()) return button.link[2] == 'tao' ? 1 : 0;
										var target = game.filterPlayer(function (target1) {
											return player.canUse('sha', target1) && ai.get.effect(target1, { name: 'sha' }, player) > 0;
										});
										target.sort(function (a, b) {
											return ai.get.effect(a, { name: 'sha' }, player) < ai.get.effect(a, { name: 'sha' }, player);
										});
										var shaTarget = target[0];
										if (shaTarget && !player.countCards('h', 'sha')) return button.link[2] == 'sha' ? 1 : 0;
										if (shaTarget && player.countCards('h', 'sha')) return button.link[2] == 'jiu' ? 1 : 0;
										return button.link[2] == 'sha' && button.link[3] == 'fire' ? 1 : 0;
									})
									.set('filterButton', function (button) {
										if (!lib.filter.cardEnabled({ name: button.link[2] }, player, trigger)) return false;
										if (!lib.filter.cardUsable({ name: button.link[2] }, player, trigger)) return false;
										return true;
									});
								('step 2');
								event.Q = result.links[0][2];
								if (result.links[0][3]) event.nature = result.links[0][3];
								lib.skill.zyile_xiaoling2.viewAs = { name: event.Q, nature: event.nature };
								event.parent.parent.parent.backup('zyile_xiaoling2');
								event.parent.parent.parent.step = 0;
								if (event.isMine()) {
									event.parent.parent.parent.openskilldialog = '选择' + get.translation(event.Q) + '的目标';
								}
							},
							forced: true,
							content() {
								'step 0';
								var controls = ['重铸', '弃置', '摸牌', '展示', '取消'];
								player
									.chooseControl(controls)
									.set('ai', function (event) {
										if (player.hp <= 2) return '展示';
										if (player.countCards('e') < 2 || player.countCards('h') < 2) return '摸牌';
										if (player.countCards('h') > 2) return '弃置';
										return '重铸';
									})
									.set('prompt', '选择想要一项');
								('step 1');
								if (result.control) {
									if (result.control == '取消') {
										player.getStat('skill').zyile_xiaoling--;
										event.finish();
									} else {
										switch (result.control) {
											case '重铸':
												var next = game.createEvent('zyile_xiaolingCards');
												next.player = player;
												next.setContent(lib.skill.zyile_xiaoling.preDelay);
												break;
											case '弃置':
												var next = game.createEvent('zyile_xiaolingCards');
												next.player = player;
												next.setContent(lib.skill.zyile_xiaoling.preTrick);
												break;
											case '摸牌':
												var next = game.createEvent('zyile_xiaolingCards');
												next.player = player;
												next.setContent(lib.skill.zyile_xiaoling.preEquip);
												break;
											case '展示':
												var next = game.createEvent('zyile_xiaolingCards');
												next.player = player;
												next.setContent(lib.skill.zyile_xiaoling.preBasic);
												break;
										}
									}
								} else {
									player.getStat('skill').zyile_xiaoling--;
									event.finish();
								}
							},
							ai: {
								threaten: 6,
								order: 4,
								result: {
									player: 1,
								},
							},
						},
						zyile_xiaoling2: {
							filterCard() {
								return false;
							},
							popname: true,
							selectCard: -1,
						},
						AM_wuhuo: {
							mod: {
								suit(card, suit) {
									if (_status.event.player && _status.event.player.storage.AM_wuhuosuit) return _status.event.player.storage.AM_wuhuosuit;
								},
								number(card, number) {
									if (_status.event.player && _status.event.player.storage.AM_wuhuonumber) return _status.event.player.storage.AM_wuhuonumber;
								},
							},
							trigger: { player: 'phaseBegin' },
							logTarget: 'player',
							forced: true,
							content() {
								'step 0';
								var suits = ['heart2', 'spade2', 'diamond2', 'club2'];
								player
									.chooseControl(suits)
									.set('ai', function (event) {
										switch (Math.floor(Math.random() * 6)) {
											case 0:
												return 'club2';
											case 1:
												return 'diamond2';
											case 2:
												return 'spade2';
											case 3:
											case 4:
											case 5:
											case 6:
												return 'heart2';
										}
									})
									.set('prompt', '选择想要视为的一种花色');
								('step 1');
								if (result.control) {
									var suit;
									switch (result.control) {
										case 'heart2':
											suit = 'heart';
											break;
										case 'spade2':
											suit = 'spade';
											break;
										case 'diamond2':
											suit = 'diamond';
											break;
										case 'club2':
											suit = 'club';
											break;
									}
									player.popup(result.control);
									player.storage.AM_wuhuosuit = suit;
								} else {
									event.finish();
								}
								('step 2');
								var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
								player
									.chooseControl(list, function () {
										return 13;
									})
									.set('prompt', '选择想要视为的一个点数');
								('step 3');
								if (result.control) {
									player.popup(result.control);
									player.storage.AM_wuhuonumber = result.control;
								} else {
									event.finish();
								}
							},
							group: ['AM_wuhuo2'],
						},
						AM_wuhuo2: {
							trigger: { player: 'phaseEnd' },
							forced: true,
							silent: true,
							content() {
								if (player.storage.AM_wuhuosuit) delete trigger.player.storage.AM_wuhuosuit;
								if (player.storage.AM_wuhuonumber) delete trigger.player.storage.AM_wuhuonumber;
							},
						},
						AM_zhenyan: {
							trigger: { global: 'phaseBegin' },
							filter(event, player) {
								return event.player.isAlive() && event.player != player;
							},
							logTarget: 'player',
							check(event, player) {
								if (get.attitude(player, event.player) <= 0) return 1;
								return 0;
							},
							content() {
								'step 0';
								trigger.player
									.chooseControl('basic', 'equip', 'trick', 'delay')
									.set('ai', function (event) {
										switch (Math.floor(Math.random() * 6)) {
											case 0:
												return 'equip';
											case 1:
												return 'basic';
											case 2:
												return 'trick';
											case 3:
											case 4:
											case 5:
											case 6:
												return 'delay';
										}
									})
									.set('prompt', '请选择你不会使用的一种卡牌类别');
								('step 1');
								game.log(trigger.player, '选择了' + get.translation(result.control));
								trigger.player.popup(result.control);
								trigger.player.storage.AM_zhenyan = result.control;
							},
							ai: {
								expose: 0.2,
							},
							group: ['AM_zhenyan2', 'AM_zhenyan3'],
						},
						AM_zhenyan2: {
							trigger: { global: ['respond', 'useCardAfter'] },
							filter(event, player) {
								if (_status.currentPhase != event.player) return false;
								if (!event.player.storage.AM_zhenyan) return false;
								if (event.cards) {
									if (Array.isArray(event.cards)) for (var i of event.cards) {
										if (get.type(i) == event.player.storage.AM_zhenyan) return true;
									}
								}
								return false;
							},
							silent: true,
							forced: true,
							content() {
								trigger.player.storage.AM_zhenyan2 = true;
							},
						},
						AM_zhenyan3: {
							trigger: { global: 'phaseEnd' },
							forced: true,
							silent: true,
							content() {
								'step 0';
								if (trigger.player.storage.AM_zhenyan2) {
									player.line(trigger.player, 'green');
									trigger.player.loseHp();
								}
								('step 1');
								if (trigger.player.storage.AM_zhenyan2) trigger.player.storage.AM_zhenyan2 = false;
								if (trigger.player.storage.AM_zhenyan) delete trigger.player.storage.AM_zhenyan;
							},
						},
						AM_wangzhou: {
							trigger: { global: 'dyingAfter' },
							_priority: 10,
							filter(event, player) {
								return event.player.isAlive();
							},
							logTarget: 'player',
							forced: true,
							content() {
								player.useCard({ name: 'sha' }, trigger.player, false, false);
							},
							ai: {
								threaten: 1.2,
							},
						},
						AM_huangquan: {
							trigger: { source: 'damageBefore' },
							forced: true,
							filter(event, player) {
								return event.player == player && player.countCards('he', { suit: 'spade' }) > 0;
							},
							content() {
								'step 0';
								player.chooseCardTarget({
									position: 'he',
									filterTarget(card, player, target) {
										return target.isDamaged();
									},
									selectCard: 1,
									selectTarget: 1,
									filterCard: { suit: 'spade' },
									ai1(card) {
										return 9 - get.value(card);
									},
									ai2(target) {
										return ai.get.recoverEffect(target, player, player);
									},
									prompt: '是否发动【黄泉】？',
								});
								('step 1');
								if (result.cards?.length) {
									player.discard(result.cards);
									trigger.untrigger();
									trigger.finish();
									var num = result.targets[0].maxHp - result.targets[0].hp;
									result.targets[0].recover(num);
								} else {
									event.finish();
								}
							},
							ai: {
								expose: 0.2,
								effect(card, player, target) {
									if (get.tag(card, 'damage')) {
										if (target.isDamaged() && target.countCards('he', { suit: 'spade' }) && player == target) {
											return [1, 0, 1, 2];
										}
									}
								},
							},
						},
						AM_chaoxi: {
							trigger: { player: 'phaseBegin' },
							filter(event, player) {
								return player.isAlive();
							},
							check(event, player) {
								var active = 0,
									cfalse = 0;
								for (var i of game.players) {
									if (i == player) continue;
									if (!i.isOut()) {
										if (get.attitude(player, i) > 0) {
											if (i.countCards('h') >= player.countCards('h')) {
												active--;
												cfalse += 0.5;
											} else if (i.countCards('h') < player.countCards('h')) {
												active++;
											}
										} else if (get.attitude(player, i) < 0) {
											if (i.countCards('h') > player.countCards('h')) {
												active++;
												cfalse -= 0.5;
											} else if (i.countCards('h') < player.countCards('h')) {
												active--;
											}
										}
									}
								}
								if (active > cfalse && active > 0) return 1;
								if (active < cfalse && cfalse > 0) return -1;
								return 0;
							},
							content() {
								player.storage.AM_chaoxi = true;
								for (var i of game.players) {
									if (i == player) continue;
									if (i.countCards('h') < player.countCards('h')) {
										var num = Math.abs(player.countCards('h') - i.countCards('h'));
										i.draw(num);
									}
								}
							},
							group: ['AM_chaoxi2'],
						},
						AM_chaoxi2: {
							trigger: { player: 'phaseEnd' },
							filter(event, player) {
								return player.storage.AM_chaoxi;
							},
							forced: true,
							content() {
								player.storage.AM_chaoxi = false;
								for (var i of game.players) {
									if (i == player) continue;
									if (i.countCards('h') > player.countCards('h')) {
										var num = Math.abs(player.countCards('h') - i.countCards('h'));
										i.chooseToDiscard(num, true);
									}
								}
							},
							ai: {
								threaten: 1.5,
								expose: 0.2,
							},
						},
						AM_duoluo: {
							trigger: { player: 'phaseUseBegin' },
							forced: true,
							filter(event, player) {
								return player.isAlive();
							},
							content() {
								'step 0';
								player
									.chooseTarget('选择一名角色发动【堕落】？', function (card, player, target) {
										return target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										if (target.hasSkill('AM_duoluo2') && get.attitude(player, target) > 0) return 0;
										if (get.attitude(target, player) > 0 && target.countCards('he') > 4) return 1;
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.targets?.length) {
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								event.target.chooseCard('选择一张手牌展示并交给' + get.translation(player), 'he', true).set('ai', function (card) {
									return -get.value(card);
								});
								('step 3');
								if (result.cards?.length) {
									event.card = result.cards[0];
									event.suit = event.card.suit;
									event.target.showCards(result.cards[0]);
								} else {
									event.finish();
								}
								('step 4');
								if (event.card) {
									player.gain(event.card, event.target);
									event.target.$give(event.card, player);
									event.target.storage.suitdis = event.suit;
									var target = event.target;
									target.addTempSkill('AM_duoluo_suitjiu', { player: 'phaseAfter' });
								}
							},
							subSkill: {
								suitjiu: {
									mod: {
										cardname(card, player, name) {
											if (card.suit == player.storage.suitdis) return 'jiu';
										},
									},
									mark: true,
									intro: {
										content(storage, player) {
											var suit = player.storage.suitdis;
											if (suit) return '所有' + get.translation(suit) + '牌视为【酒】';
										},
									},
								},
							},
							ai: {
								threaten: 1.5,
								expose: 0.2,
							},
						},
						AM_jiyu: {
							enable: 'phaseUse',
							delay: 0,
							forced: true,
							filter(event, player) {
								if (player.countCards('h') > player.hp) return false;
								var cards = player.getCards('he');
								if (Array.isArray(cards)) for (var i of cards) {
									if (get.type(i) != 'basic') return true;
								}
								return false;
							},
							content() {
								'step 0';
								const evt = event.getParent(2)
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.type(lib.inpile[i]) == 'basic') {
										list.push([get.type(lib.inpile[i]), '', lib.inpile[i]]);
									}
								}
								list.push([get.translation('basic'), '', 'sha', 'ice']);
								list.push([get.translation('basic'), '', 'sha', 'fire']);
								list.push([get.translation('basic'), '', 'sha', 'thunder']);
								list.sort(lib.sort.name);
								player
									.chooseButton(['机变', [list, 'vcard']])
									.set('ai', function (button) {
										var player = _status.event.player;
										if (player.isDamaged()) return button.link[2] == 'tao' ? 10 : -10;
										if (player.hasSkill('jiu')) return button.link[2] == 'sha' ? 10 : -10;
										if (Math.random() > 0.5) return get.value({ name: button.link[2] });
										return ai.get.useful({ name: button.link[2] });
									})
									.set('filterButton', function (button) {
										return lib.filter.filterCard({ name: button.link[2] }, player, evt);//QQQ
									});
								('step 1');
								if (result.links?.length) {
									lib.skill.AM_jiyuviewas.viewAs = { name: result.links[0][2], nature: result.links[0][3] };
									var next = player.chooseToUse('【机变】:将一张非基本牌当做' + get.translation(result.links[0][2]) + '使用').set('ai', function (card) {
										return 1;
									});
									next.set('openskilldialog', '选择' + get.translation(result.links[0][2]) + '的目标');
									next.set('norestore', true);
									next.set('_backupevent', 'AM_jiyuviewas');
									next.set('ai1', function (card) {
										return 8 - get.value(card);
									});
									next.backup('AM_jiyuviewas');
								} else {
									event.finish();
								}
								('step 2');
								if (ui.confirm) ui.confirm.close();
							},
							group: ['AM_jiyusha', 'AM_jiyushan', 'AM_jiyutao'],
							ai: {
								threaten: 2,
								basic: {
									order: 1,
								},
								result: {
									player(player) {
										var cards = player.getCards('he');
										for (var j of cards) {
											if (get.type(j) != 'basic') {
												return 4 - ai.get.unuseful3(j);
											}
										}
										return -100;
									},
								},
							},
						},
						AM_jiyuviewas: {
							filterCard(card, player) {
								return get.type(card) != 'basic';
							},
							position: 'he',
							selectCard: 1,
							popname: true,
							check(card) {
								return 7 - get.value(card);
							},
							onuse(result, player) {
							},
						},
						AM_jiyusha: {
							prompt: '将一张非基本牌当做【杀】使用',
							enable: ['chooseToUse', 'chooseToRespond'],
							filterCard(card, player) {
								return get.type(card) != 'basic';
							},
							check(card) {
								return 6 - get.value(card);
							},
							selectCard: 1,
							popname: true,
							position: 'he',
							viewAs: { name: 'sha' },
							filter(event, player) {
								if (event.parent.name == 'phaseUse') return false;
								return player.countCards('h') <= player.hp;
							},
							viewAsFilter(player) {
								return player.countCards('h') <= player.hp;
							},
							ai: {
								skillTagFilter(player) {
									return player.countCards('h') <= player.hp;
								},
								respondSha: true,
							},
						},
						AM_jiyushan: {
							prompt: '将一张非基本牌当做【闪】打出',
							enable: ['chooseToUse', 'chooseToRespond'],
							filterCard(card, player) {
								return get.type(card) != 'basic';
							},
							check(card) {
								return 8 - get.value(card);
							},
							position: 'he',
							selectCard: 1,
							popname: true,
							viewAs: { name: 'shan' },
							filter(event, player) {
								if (event.parent.name == 'phaseUse') return false;
								return player.countCards('h') <= player.hp;
							},
							viewAsFilter(player) {
								return player.countCards('h') <= player.hp;
							},
							ai: {
								skillTagFilter(player) {
									return player.countCards('h') <= player.hp;
								},
								respondShan: true,
							},
						},
						AM_jiyutao: {
							prompt: '将一张非基本牌当做【桃】使用',
							enable: ['chooseToUse', 'chooseToRespond'],
							filterCard(card, player) {
								return get.type(card) != 'basic';
							},
							check(card) {
								return 10 - get.value(card);
							},
							selectCard: 1,
							popname: true,
							position: 'he',
							viewAs: { name: 'tao' },
							filter(event, player) {
								if (event.parent.name == 'phaseUse') return false;
								return player.countCards('h') <= player.hp;
							},
							viewAsFilter(player) {
								return player.countCards('h') <= player.hp;
							},
							ai: {
								skillTagFilter(player) {
									return player.countCards('h') <= player.hp;
								},
								save: true,
							},
						},
						AM_huoxue: {
							trigger: { global: 'useCardAfter' },
							forced: true,
							_priority: 60,
							filter(event, player) {
								if (!player.countCards('h')) return false;
								if (event.player == player) return false;
								if (_status.currentPhase == player) return false;
								if (event.targets) {
									for (var i = 0; i < event.targets.length; i++) {
										if (get.distance(event.player, event.targets[i]) <= 1) {
											return get.type(event.cards[0]) == 'trick' && event.cards[0];
										}
									}
								}
								return false;
							},
							content() {
								'step 0';
								lib.skill.AM_huoxue2.viewAs = { name: trigger.card.name };
								var next = player.chooseToUse('是否发动【活学】将一张手牌当做' + get.translation(trigger.card.name) + '使用？').set('ai', function (card) {
									return 7 - get.value(card);
								});
								next.set('openskilldialog', '选择' + get.translation(trigger.card.name) + '的目标');
								next.set('norestore', true);
								next.set('_backupevent', 'AM_huoxue2');
								next.backup('AM_huoxue2');
								('step 1');
								if (ui.confirm) ui.confirm.close();
								if (!player.countCards('h')) player.draw();
							},
							ai: {
								threaten: 3,
							},
						},
						AM_huoxue2: {
							filterCard: true,
							selectCard: 1,
							popname: true,
						},
						AM_zaoshi: {
							trigger: { player: 'phaseDrawBefore' },
							filter(event, player) {
								return player.isAlive();
							},
							check(event, player) {
								var active = 0;
								for (var i of game.players) {
									if (i == player) continue;
									if (!i.isOut()) {
										if (get.attitude(player, i) > 0) {
											active++;
										} else if (get.attitude(player, i) < 0) {
											active--;
										}
									}
								}
								if (active > 0) return 1;
								if (Math.random() < 0.4) return 1;
								return 0;
							},
							content() {
								'step 0';
								trigger.finish();
								trigger.untrigger();
								event.current = player.next;
								('step 1');
								event.current
									.chooseControl('自己摸牌', '令其摸牌')
									.set('ai', function () {
										if (event.current.countCards('h') < 3 && event.current.hp > 1) return '自己摸牌';
										if (get.attitude(event.current, player) > 0) return '令其摸牌';
										if (get.attitude(event.current, player) <= 0 && event.current.hp > 1) return '自己摸牌';
										return '令其摸牌';
									})
									.set('prompt', '造势:请选择一项');
								('step 2');
								if (result.control == '自己摸牌') {
									event.current.draw();
								} else {
									event.current.line(player, 'green');
									player.draw();
								}
								if (event.current.next != player) {
									event.current = event.current.next;
									event.goto(1);
								}
							},
						},
						AM_zhuanquan: {
							trigger: { player: 'phaseDiscardEnd' },
							filter(event, player) {
								if (event.player.classList.contains('dead') == false && event.cards && event.cards.length) {
									return false;
								}
								if (event.player.classList.contains('dead') == false) return true;
							},
							check(event, player) {
								var active = 0;
								for (var i of game.players) {
									if (i == player) continue;
									if (!i.isOut()) {
										if (get.attitude(player, i) > 0) {
											if (i.countCards('h') > player.countCards('h')) {
												active--;
												if (i.hp > 1) active += 0.5;
											}
										} else if (get.attitude(player, i) < 0) {
											if (i.countCards('h') > player.countCards('h')) {
												active++;
												if (i.hp <= 1) active += 0.5;
											}
										}
									}
								}
								if (active > 0) return 1;
								return 0;
							},
							content() {
								for (var i of game.players) {
									if (i == player) continue;
									if (i.countCards('h') > player.countCards('h')) {
										i.loseHp();
									}
								}
							},
						},
						AM_caijue: {
							trigger: { global: 'damageBegin' },
							limited: true,
							_priority: -7,
							filter(event, player) {
								if (!event.source || event.cards == undefined) return false;
								if (event.player == player || event.source == player) return false;
								if (player.countCards('he') == 0) return false;
								if (player.hasSkill('AM_caijue2')) return false;
								if (player.storage.AM_caijue) return false;
								return true;
							},
							logTarget: 'source',
							check(event, player) {
								var go = get.attitude(player, event.player) > 0 && get.attitude(player, event.source) < 0 && get.damageEffect(event.player, event.source, player) < get.damageEffect(event.source, event.player, player);
								if (go && Math.random() < 0.7) return 1;
								return 0;
							},
							init(player) {
								player.storage.AM_caijue = false;
								player.markSkill('AM_caijue');
								for (var i = 0; i < player.node.marks.childNodes.length; i++) {
									if (player.node.marks.childNodes[i].name == 'AM_caijue') {
										player.node.marks.childNodes[i].setBackground(player.name, 'character');
										player.node.marks.childNodes[i].innerHTML = '';
									}
								}
							},
							intro: {
								content: 'limited',
							},
							prompt(event, player) {
								var str = '是否将伤害来源(' + get.translation(event.source) + ')和目标(' + get.translation(event.player) + ')对调？';
								return str;
							},
							content() {
								player.storage.AM_caijue = true;
								player.line(trigger.player, 'green');
								trigger.player.gain(trigger.cards, 'gain2');
								game.log(trigger.player, '获得了', trigger.cards);
								trigger.player.line(trigger.source, 'green');
								var target = trigger.player;
								trigger.player = trigger.source;
								trigger.source = target;
								trigger.trigger('damageBefore');
								player.addTempSkill('AM_caijue2', ['damageAfter', 'damageCancelled']);
								player.awakenSkill('AM_caijue');
							},
							ai: {
								threaten(player, target) {
									if (!target.storage.AM_caijue) return 3;
								},
								expose: 0.5,
								effect: {
									target(card, player, target) {
										if (!get.tag(card, 'damage')) return;
										if (target.storage.AM_caijue) return;
										if (target.hasSkill('AM_caijue2')) return;
										var source = null;
										for (var i of game.players) {
											if (i.hasSkill('AM_caijue')) {
												source = i;
												break;
											}
										}
										if (source && !source.storage.AM_caijue) {
											if (get.attitude(source, player) < 0 && get.attitude(source, target) > 0) {
												return [0, 0, 0, -1];
											}
										}
									},
								},
							},
						},
						AM_caijue2: {},
						AM_fushen: {
							group: ['AM_fushen_begin', 'AM_fushen_draw', 'AM_fushen_use', 'AM_fushen_discard', 'AM_fushen_judge', 'AM_fushen_end'],
							subSkill: {
								begin: {
									trigger: { global: 'phaseBegin' },
									forced: true,
									filter(event, player) {
										return player.countCards('h') > 0;
									},
									content() {
										'step 0';
										player.chooseCard('是否发动【复审】将一张手牌置于牌堆顶并令' + get.translation(trigger.player) + '将所有手牌移出游戏？', 'h').set('ai', function (card) {
											if (trigger.player.skipList.includes('phaseUse') || trigger.player.skipList.includes('phaseJudge') || trigger.player.skipList.includes('phaseDiscard') || trigger.player.skipList.includes('phaseDraw')) {
												if (player.storage.AM_caijue) return 8 - get.value(card);
											}
											if (trigger.player.countCards('j', 'lebu') || trigger.player.countCards('j', 'bingliang')) {
												if (player.storage.AM_caijue) return 8 - get.value(card);
											}
											if (get.attitude(player, trigger.player) < 0 && trigger.player.countCards('h') > 3 && player.countCards('h') > 1) return 8 - get.value(card);
											return -1;
										});
										('step 1');
										if (result.bool) {
											if (!trigger.player.storage.AM_fushen) trigger.player.storage.AM_fushen = [];
											trigger.player.storage.AM_fushen = trigger.player.storage.AM_fushen.concat(trigger.player.getCards('h'));
											game.addVideo('storage', trigger.player, ['AM_fushen', get.cardsInfo(trigger.player.storage.AM_fushen), 'cards']);
											trigger.player.lose(trigger.player.getCards('h'), ui.special);
											event.card = result.cards[0];
											player.lose(result.cards, ui.special);
											var cardx = ui.create.card();
											cardx.classList.add('infohidden');
											cardx.classList.add('infoflip');
											player.$throw(cardx, 1000);
										} else {
											event.finish();
										}
										('step 2');
										('step 3');
										if (event.card) {
											event.card.fix();
											ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
											trigger.player.storage.AM_fushen_draw = true;
											trigger.player.storage.AM_fushen_use = true;
											player.storage.AM_fushen2 = true;
											trigger.player.storage.AM_fushen_discard = true;
											trigger.player.storage.AM_fushen_judge = true;
										}
									},
								},
								judge: {
									trigger: { global: 'phaseJudgeBegin' },
									forced: true,
									popup: false,
									silent: true,
									filter(event, player) {
										return player.storage.AM_fushen2;
									},
									content() {
										trigger.player.storage.AM_fushen_judge = false;
									},
								},
								draw: {
									trigger: { global: 'phaseDrawBegin' },
									forced: true,
									popup: false,
									silent: true,
									filter(event, player) {
										return player.storage.AM_fushen2;
									},
									content() {
										trigger.player.storage.AM_fushen_draw = false;
									},
								},
								use: {
									trigger: { global: 'phaseUseBegin' },
									forced: true,
									popup: false,
									silent: true,
									filter(event, player) {
										return player.storage.AM_fushen2;
									},
									content() {
										trigger.player.storage.AM_fushen_use = false;
									},
								},
								discard: {
									trigger: { global: 'phaseDiscardBegin' },
									forced: true,
									popup: false,
									silent: true,
									filter(event, player) {
										return player.storage.AM_fushen2;
									},
									content() {
										trigger.player.storage.AM_fushen_discard = false;
									},
								},
								end: {
									trigger: { global: 'phaseEnd' },
									forced: true,
									filter(event, player) {
										return player.storage.AM_fushen2;
									},
									content() {
										player.storage.AM_fushen2 = false;
										if (trigger.player.storage.AM_fushen && trigger.player.storage.AM_fushen.length) {
											trigger.player.gain(trigger.player.storage.AM_fushen);
											trigger.player.storage.AM_fushen = [];
											game.addVideo('storage', trigger.player, ['AM_fushen', get.cardsInfo(trigger.player.storage.AM_fushen), 'cards']);
										}
										if (trigger.player.storage.AM_fushen_draw || trigger.player.storage.AM_fushen_use || trigger.player.storage.AM_fushen_judge || trigger.player.storage.AM_fushen_discard) {
											var storage = player.storage;
											for (var i in storage) {
												if (get.info(i) && get.info(i).intro) {
													var intro = get.info(i).intro;
													if (storage[i] == true) storage[i] = false;
												}
											}
											for (var i = 0; i < player.skills.length; i++) {
												var info = lib.skill[player.skills[i]];
												if (lib.translate[player.skills[i] + '_info']) {
													var str = lib.translate[player.skills[i] + '_info'];
													if (str.indexOf('限定技') == 0) {
														player.markSkill(player.skills[i]);
													}
													if (info.intro && info.intro.content == 'limited') {
														player.markSkill(player.skills[i]);
													}
												}
											}
											for (var i in player.awakenedSkills) {
												player.enableSkill(player.awakenedSkills[i] + '_awake', player.awakenedSkills[i]);
												player.awakenedSkills.remove(player.awakenedSkills[i]);
											}
										}
										trigger.player.storage.AM_fushen_draw = false;
										trigger.player.storage.AM_fushen_use = false;
										trigger.player.storage.AM_fushen_discard = false;
										trigger.player.storage.AM_fushen_judge = false;
									},
								},
							},
						},
						AM_jiyun: {
							trigger: { player: ['useCard', 'respond', 'phaseAfter'] },
							forced: true,
							filter(event, player, name) {
								if (name == 'phaseAfter') return true;
								return event.card && get.color(event.card) == 'red';
							},
							init(player) {
								player.storage.AM_jiyun = 0;
							},
							content() {
								if (event.triggername == 'phaseAfter') {
									player.storage.AM_jiyun = 0;
								} else {
									player.addTempSkill('AM_jiyun_maxHandcard', { player: 'phaseAfter' });
									player.storage.AM_jiyun++;
								}
							},
							ai: {
								threaten: 0.8,
								effect: {
									player(card, player, target, effect) {
										if (get.color(card) == 'red') return [1, 3];
									},
								},
							},
							subSkill: {
								maxHandcard: {
									mod: {
										maxHandcard(player, current) {
											if (player.storage.AM_jiyun && typeof player.storage.AM_jiyun == 'number') return current + player.storage.AM_jiyun;
										},
									},
								},
							},
						},
						//结束阶段开始时,若其他角色手牌上限均小于你,你可弃置所有牌,将手牌数补至手牌上限
						AM_zhuanyun: {
							trigger: { player: 'phaseEnd' },
							filter(event, player, name) {
								for (var i of game.players) {
									if (i.getHandcardLimit() >= player.getHandcardLimit()) {
										return false;
									}
								}
								return true;
							},
							check(event, player) {
								if (player.getHandcardLimit() > player.countCards('he')) return 1;
								return 0;
							},
							content() {
								player.discard(player.getCards('hej'));
								player.draw(player.getHandcardLimit());
							},
						},//QQQ
						AM_shengzhan: {
							trigger: { player: 'phaseDrawBegin' },
							check(event, player) {
								var num = player.storage.AM_shengzhan.length;
								if (num > 2) return 1;
								return 0;
							},
							init(player) {
								player.storage.AM_shengzhan = [];
								player.markSkill('AM_shengzhan');
							},
							intro: {
								content(storage, player) {
									var num = player.storage.AM_shengzhan.length;
									return '共有' + num + '个角色已对你造成伤害';
								},
							},
							filter(event, player, name) {
								return player.isDamaged();
							},
							content() {
								var num = player.storage.AM_shengzhan.length;
								trigger.num = num;
							},
							ai: {
								threaten: 1.4,
							},
							group: ['AM_shengzhan2'],
						},
						AM_shengzhan2: {
							trigger: { player: 'damageEnd' },
							_priority: 10,
							forced: true,
							popup: false,
							silent: true,
							filter(event, player, name) {
								return event.source && !player.storage.AM_shengzhan.includes(event.source);
							},
							content() {
								if (!player.storage.AM_shengzhan.includes(trigger.source)) player.storage.AM_shengzhan.add(trigger.source);
							},
						},
						AM_xueren: {
							trigger: { player: 'damageEnd' },
							_priority: 10,
							forced: true,
							content() {
								'step 0';
								var card = get.cardPile(function (card) {
									return get.type(card) == 'equip';
								});
								event.card = card;
								('step 1');
								if (event.card) {
									player.equip(event.card);
								}
							},
						},
						AM_ziyang: {
							trigger: { player: 'gainEnd' },
							filter(event, player, name) {
								if (event.cards) {
									if (Array.isArray(event.cards)) for (var i of event.cards) {
										if (i.number <= player.hp && player.isDamaged()) return true;
									}
									return false;
								}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseCard(function (card) {
										if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
											if (card == i && i.number <= player.hp) return true;
										}
										return false;
									}, '是否发动【滋养】？')
									.set('ai', function (card) {
										if (player.hp == 1) return 13 - get.value(card);
										if (player.isDamaged()) return 9 - get.value(card);
										return -1;
									});
								('step 1');
								if (result.cards?.length) {
									event.card = result.cards[0];
									player.showCards('滋养', event.card);
									player.lose(result.cards, ui.special);
									var cardx = ui.create.card();
									cardx.classList.add('infohidden');
									cardx.classList.add('infoflip');
									player.$throw(cardx, 1000);
								} else {
									event.finish();
								}
								('step 2');
								if (event.card) {
									event.card.fix();
									ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
									player.recover();
								}
							},
						},
						AM_yunyu: {
							trigger: { player: 'dieBegin' },
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(function (card, player, target) {
									return player != target;
								}).ai = function (target) {
									return get.attitude(player, target);
								};
								('step 1');
								if (result.targets?.length) {
									result.targets[0].addSkill('AM_ziyang');
								}
							},
						},
						AM_shunxi: {
							trigger: { source: 'damageBegin' },
							forced: true,
							_priority: -10,
							filter(event, player) {
								return event.player && event.player.isAlive();
							},
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								if (trigger.player.isTurnedOver()) {
									trigger.player.loseHp();
								} else {
									player.chooseToDiscard('he', true);
									trigger.player.turnOver();
								}
								('step 2');
								event.num--;
								('step 3');
								if (event.num > 0) event.goto(1);
								('step 4');
								const evt = _status.event.getParent('phase');
								if (evt && evt.name) {
									evt.finish();
								}
							},
							ai: {
								effect: {
									player(card, player, target) {
										if (player.hasSkill('jueqing')) return;
										if (get.tag(card, 'damage')) {
											if (target.isTurnedOver()) return [1, 1];
										}
									},
								},
							},
						},
						AM_yueqian: {
							trigger: { global: 'turnOverEnd' },
							forced: true,
							_priority: -10,
							filter(event, player) {
								return !event.player.isTurnedOver() && event.player.isAlive();
							},
							content() {
								'step 0';
								trigger.player
									.judge(function (card) {
										if (get.color(card) == 'red' && get.attitude(_status.event.target, trigger.player) > 0) return 1;
										if (get.color(card) == 'black') return -1;
										return 0;
									})
									.set('target', player);
								('step 1');
								if (get.color(result.card) == 'red') {
									player
										.chooseBool('是否令' + get.translation(trigger.player) + '摸一张牌？')
										.set('ai', function () {
											var att = get.attitude(player, _status.event.target);
											if (att > 0) return true;
											return false;
										})
										.set('target', trigger.player);
								} else if (get.color(result.card) == 'black') {
									trigger.player.loseHp();
									event.finish();
								}
								('step 2');
								if (result.bool) {
									trigger.player.draw();
								} else {
									event.finish();
								}
							},
							ai: {
								threaten: 1.2,
							},
						},
						zyile_shouji: {
							usable: 1,
							audio: 1,
							enable: 'phaseUse',
							filterCard: true,
							position: 'he',
							delay: 0,
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							discard: false,
							lose: false,
							check(card) {
								return 8 - get.value(card);
							},
							content() {
								'step 0';
								event.card = cards[0];
								player.lose(event.card, ui.special);
								var cardx = ui.create.card();
								cardx.classList.add('infohidden');
								cardx.classList.add('infoflip');
								player.$throw(cardx, 1000);
								('step 1');
								('step 2');
								if (event.card) {
									event.card.fix();
									ui.cardPile.appendChild(event.card);
								}
								('step 3');
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									var name = lib.inpile[i];
									list.push([get.translation(lib.card[name].type), '', name]);
								}
								list.sort(function (a, b) {
									var aa = a,
										bb = b;
									if (a.includes('_')) {
										a = a.slice(a.indexOf('_') + 1);
									}
									if (b.includes('_')) {
										b = b.slice(b.indexOf('_') + 1);
									}
									if (a != b) {
										return a > b ? 1 : -1;
									}
									return aa > bb ? 1 : -1;
								});
								var dialog = ui.create.cardDialog('搜集:选择要声明的卡牌名称', [list, 'vcard']);
								player
									.chooseButton(
										dialog,
										function (button) {
											var player = _status.event.player;
											var recover = 0,
												lose = 1;
											for (var i of game.players) {
												if (!i.isOut()) {
													if (i.hp < i.maxHp) {
														if (get.attitude(player, i) > 0) {
															if (i.hp < 2) {
																lose--;
																recover += 0.5;
															}
															lose--;
															recover++;
														} else if (get.attitude(player, i) < 0) {
															if (i.hp < 2) {
																lose++;
																recover -= 0.5;
															}
															lose++;
															recover--;
														}
													} else {
														if (get.attitude(player, i) > 0) {
															lose--;
														} else if (get.attitude(player, i) < 0) {
															lose++;
														}
													}
												}
											}
											if (player.isDamaged()) return button.link[2] == 'tao' ? 1 : -1;
											if (player.countCards('h', 'sha')) return button.link[2] == 'jiu' ? 1 : -1;
											if (!player.countCards('h', 'sha')) return button.link[2] == 'sha' ? 1 : -1;
											if (player.countCards('h') < 3) return button.link[2] == 'wuzhong' ? 1 : -1;
											if (lose > recover && lose > 0) return button.link[2] == 'nanman' ? 1 : -1;
											if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
											return Math.ceil(Math.random()) + get.value(button.link[2]);
										},
										true
									)
									.set('card', event.card);
								('step 4');
								player.popup(result.links[0][2]);
								event.Q = result.links[0][2];
								var card = game.findCardInCardPile(function (card) {
									return card.name == event.Q;
								});
								if (card) {
									player.gain(card, 'draw');
									var cards = [],
										i;
									for (var i = 0; i < lib.onwash.length; i++) {
										lib.onwash[i]();
									}
									for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
										if (get.info(ui.cardPile.childNodes[i]).vanish) continue;
										cards.push(ui.cardPile.childNodes[i]);
									}
									ui.cardPile.innerHTML = '';
									cards.randomSort();
									if (Array.isArray(cards)) for (var i of cards) {
										ui.cardPile.appendChild(i);
									}
								} else {
									event.finish();
								}
							},
							ai: {
								threaten: 1.5,
								result: {
									player: 1,
								},
								order: 9,
							},
						},
						zyile_zhangkong: {
							enable: 'phaseUse',
							delay: 0,
							forced: true,
							content() {
								'step 0';
								var dialog = ui.create.dialog('掌控');
								for (var i of game.players) {
									if (i == player) continue;
									if (i.countCards('h')) {
										dialog.add(get.translation(i) + '的手牌');
										var hs = i.getCards('h');
										dialog.add(hs);
									}
								}
								event.dialog = dialog;
								if (player == game.me) {
									if (event.isMine()) {
										game.pause();
										ui.create.confirm('o');
										game.countChoose();
										event.choosing = true;
									} else {
										event.finish();
										event.result = 'viewed';
										setTimeout(function () {
											event.dialog.close();
										}, 2 * lib.config.duration);
									}
								} else {
									event.finish();
								}
								('step 1');
								event.result = 'viewed';
								_status.imchoosing = false;
								event.choosing = false;
								if (event.dialog) event.dialog.close();
							},
							group: ['zyile_zhangkong_launch'],
							subSkill: {
								launch: {
									trigger: { player: 'damageEnd' },
									forced: true,
									filter(event, player) {
										for (var i of game.players) {
											if (i.isOut()) continue;
											if (i == player) continue;
											var cards = i.getCards('h');
											for (var j = 0; j < cards.length; j++) {
												if (player.getCards('h').includes(cards[j])) cards.splice(j--, 1);
											}
											if (cards.length) return true;
										}
										return false;
									},
									content() {
										'step 0';
										player
											.chooseTarget('【掌控】:你可以获得一名角色的所有手牌', function (card, player, target) {
												return player != target && target.countCards('h');
											})
											.set('ai', function (target) {
												var num = target.getCards('h');
												return -get.attitude(player, target) + num;
											});
										('step 1');
										if (result.targets?.length) {
											player.line(result.targets, 'green');
											var cards = result.targets[0].getCards('h');
											for (var j = 0; j < cards.length; j++) {
												if (player.getCards('h').includes(cards[j])) cards.splice(j--, 1);
											}
											player.gain(cards, result.targets[0]);
											if (cards.length) result.targets[0].$give(cards.length, player);
										} else {
											event.finish();
										}
									},
									ai: {
										maixie: true,
										effect: {
											target(card, player, target) {
												if (get.tag(card, 'damage')) {
													if (!target.hasFriend()) return;
													if (target.hp >= 4 && player.countCards('h') > target.countCards('h')) return [1, get.tag(card, 'damage') * 2];
													if (target.hp == 3 && player.countCards('h') > target.countCards('h')) return [1, get.tag(card, 'damage') * 1.5];
													if (target.hp == 2 && player.countCards('h') > target.countCards('h')) return [1, get.tag(card, 'damage') * 0.5];
												}
											},
										},
									},
								},
							},
						},
						zyile_tiance2: {
							filterCard() {
								return false;
							},
							selectCard: 0,
							popname: true,
							onuse(result, player) {
								if (player.storage.zyile_tiance2) result.cards = player.storage.zyile_tiance2;
								delete player.storage.zyile_tiance2;
							},
						},
						//每当一名角色失去最后一张手牌时,你可以令其摸两张牌,若如此做你可以视为使用了与其失去的牌类型相同的一张牌,若该名角色不为你.其下次使用牌指定目标时,交换卡牌使用者和卡牌目标
						zyile_tiance: {
							trigger: { global: 'loseEnd' },
							forced: true,
							usable: 1,
							_priority: 100,
							filter(event, player) {
								if (event.player.countCards('h')) return false;
								if (Array.isArray(event.cards)) for (var i of event.cards) {
									if (i.original == 'h') return true;
								}
								return false;
							},
							content() {
								'step 0';
								trigger.player.draw(2);
								if (!trigger.player.hasSkill('zyile_tiance_launch') && trigger.player != player) trigger.player.addSkill('zyile_tiance_launch');
								var types = [];
								if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
									var type = get.type(i);
									if (!types.includes(type)) types.push(type);
								}
								var type2 = types.randomGet();
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									var name = lib.inpile[i];
									var info = lib.card[name];
									if (info.autoViewAs) continue;
									if (lib.card[name].type != type2) continue;
									list.push([get.translation(lib.card[name].type), '', name]);
								}
								if (list.length) {
									if (type2 == 'basic') {
										list.push([get.translation('basic'), '', 'sha', 'ice']);
										list.push([get.translation('basic'), '', 'sha', 'fire']);
										list.push([get.translation('basic'), '', 'sha', 'thunder']);
									}
									list.sort(lib.sort.name);
									var rand1 = Math.random() < 1 / 3;
									var rand2 = Math.random() < 0.5;
									var rand3 = Math.random() < 1 / 3;
									var rand4 = Math.random() < 1 / 3;
									var dialog = ui.create.dialog('天策', [list, 'vcard']);
									player
										.chooseButton(dialog)
										.set('ai', function (button, card) {
											var card = game.createCard(button.link[2]);
											var name = button.link[2];
											if (get.type(card) == 'trick') {
												if (player.hp <= 1) {
													switch (name) {
														case 'zhiliaobo':
															return 1;
														case 'dunpaigedang':
															return 0.8;
														case 'nanman':
															return 0.5;
														default:
															return 0;
													}
												}
												if (rand4 && player.countCards('h') <= 1) {
													switch (name) {
														case 'zengbin':
															return 1;
														case 'wuzhong':
															return 0.8;
														default:
															return 0;
													}
												}
												if (player.hasSkill('qinglonglingzhu')) {
													if (rand2) return name == 'chiyuxi' ? 0.8 : 0;
													return name == 'jingleishan' ? 0.8 : 0;
												}
												if (rand2) return name == 'wanjian' ? 0.8 : 0;
												return name == 'nanman' ? 0.8 : 0;
											}
											if (get.type(card) == 'basic') {
												if (player.hp <= 2) return name == 'tao' ? 1 : 0;
												if (player.maxHp - player.hp < 4 && name == 'sha') {
													for (var p of game.filterPlayer((current) => {
														return current != player;
													})) {
														return ai.get.effect(p, { name: name, nature: button.link[3] }, player);
													}
												}
												var cardx = card;
												if (lib.card.bxyr_zhan) {
													cardx = { name: 'bxyr_zhan' };
												}
												var target = game.filterPlayer(function (target1) {
													return player.canUse(cardx, target1) && ai.get.effect(target1, cardx, player) > 0;
												});
												target.sort(function (a, b) {
													return ai.get.effect(a, cardx, player) < ai.get.effect(a, cardx, player);
												});
												if (target[0] && rand3) return ai.get.effect(target[0], cardx, player);
											}
											var i = Math.floor(Math.random() * list.length);
											if (rand2) return list[i];
											if (rand1) return get.value(card);
											return ai.get.useful(card);
										})
										.set('filterButton', function (button) {
											return player.hasUseTarget({ name: button.link[2] }, true, true);
										});
								} else {
									event.finish();
								}
								('step 1');
								if (result.links?.length) {
									lib.skill.zyile_tiance2.viewAs = { name: result.links[0][2], nature: result.links[0][3] };
									player.storage.zyile_tiance2 = game.createCard(result.links[0][2], ['heart', 'diamond', 'club', 'spade'].randomGet(), Math.ceil(Math.random() * 13), result.links[0][3]);
									var next = player.chooseToUse();
									next.set('openskilldialog', '选择' + get.translation(result.links[0][2]) + '的目标');
									next.set('_backupevent', 'zyile_tiance2');
									next.backup('zyile_tiance2');
								} else {
									event.finish();
								}
							},
							subSkill: {
								launch: {
									trigger: { player: 'useCardToBegin' },
									filter(event, player) {
										return event.targets && event.targets.length && event.target != player;
									},
									forced: true,
									content() {
										'step 0';
										trigger.player = trigger.targets.randomGet();
										trigger.target = player;
										trigger.targets = [player];
										game.log(trigger.card, '使用者为', trigger.player);
										game.log(trigger.card, '的目标为', trigger.targets);
										('step 1');
										player.removeSkill('zyile_tiance_launch');
									},
								},
							},
						},
						zyile_bihu: {
							trigger: {
								global: ['showCards'],
							},
							onAdd: true,
							_priority: Infinity,
							forced: true,
							filter(event, player, name) {
								return event.player != player;
							},
							group: ['zyile_bihu_gain', 'zyile_bihu_Before', 'zyile_bihu_After', 'zyile_bihu_node'],
							content() {
								trigger.hiddencards = player.getCards();
							},
							mod: {
								targetEnabled(card, player, target) {
									if (player.storage.phase % 2 == 0 && target != player) return false;
								},
							},
							subSkill: {
								gain: {
									trigger: {
										global: 'gainBefore',
									},
									_priority: Infinity,
									forced: true,
									filter(event, player) {
										if (event.player == player) return false;
										if (!event.cards) return false;
										if (player.getCards('he').length == 0) return false;
										for (var i of player.getCards('he')) {
											if (event.cards.includes(i)) return true;
										}
										return false;
									},
									content() {
										trigger.cards.remove(player.getCards('he'));
									},
								},
								Before: {
									trigger: {
										player: 'phaseBefore',
									},
									init(player) {
										player.storage.phase = 0;
									},
									popup: false,
									forced: true,
									filter: lib.filter.all,
									content() {
										player.storage.phase++;
										if (player.storage.phase % 2 != 0) {
											game.players.add(player);
											game.removedPlayers.remove(player);
										}
									},
								},
								After: {
									trigger: {
										player: 'phaseAfter',
									},
									popup: false,
									forced: true,
									filter(event, player) {
										return arguments[1].storage.phase % 2 == 0;
									},
									content() {
										game.players.remove(player);
										game.removedPlayers.add(player);
									},
								},
								node: {
									trigger: {
										global: 'gameStart',
										player: 'enterGame',
									},
									popup: 'zyile_bihu',
									forced: true,
									content() {
										if (game.boss && game.bossinfo && game.bossinfo.chongzheng) {
											game.bossinfo.chongzheng = 999;
											if (game.boss == player) player.directgain(get.cards(4));
										}
										if (game.me != player) {
											player.node.equips.hide();
											player.node.count.hide();
											player.node.hp.hide();
										} else {
											player.node.equips.show();
											player.node.count.show();
											player.node.hp.show();
										}
									},
								},
							},
							ai: {
								threaten: 2.2,
							},
						},
						zyile_moshu: {
							trigger: {
								player: ['changeHp', 'phaseBegin'],
							},
							forced: true,
							filter: lib.filter.all,
							content() {
								var card = game.createCard('moshu_mofazhishu');
								card._destroy = true;
								player.gain(card, 'gain2');
							},
						},
						zyile_juanyue: {
							enable: 'phaseUse',
							group: 'zyile_juanyue2',
							filterCard(card, player) {
								if (get.type(card) === 'equip') return false;
								if (card.name === 'moshu_mofazhishu') return false;
								return true;
							},
							selectCard: 1,
							position: 'he',
							lose: false,
							discard: false,
							check(card) {
								var player = _status.event.player;
								if (get.type(card) == 'basic') {
									if (player.hp <= 2) return 6 - get.value(card);
									if (player.isDamaged()) return 5 - get.value(card);
								}
								if (get.type(card) == 'trick') return 3 + ai.get.unuseful2(card);
								return 6 - ai.get.unuseful2(card);
							},
							filter(event, player) {
								if (player.getCards('h').length < 0) return false;
								for (var i of player.getCards('h')) {
									if (get.type(i, 'trick') != 'equip') return true;
								}
								return false;
							},
							content() {
								'step 0';
								if (cards?.length) {
									player.storage.zyile_juanyue_result = cards[0];
									var type = get.type(cards[0]);
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										var info = lib.card[name];
										if (info.autoViewAs) continue;
										if (lib.card[name].type != type) continue;
										list.push([get.translation(lib.card[name].type), '', name]);
									}
									if (list.length) {
										if (type == 'basic') {
											list.push([get.translation('basic'), '', 'sha', 'ice']);
											list.push([get.translation('basic'), '', 'sha', 'fire']);
											list.push([get.translation('basic'), '', 'sha', 'thunder']);
										}
										list.sort(lib.sort.name);
										var rand1 = Math.random() < 1 / 3;
										var rand2 = Math.random() < 0.5;
										var rand3 = Math.random() < 1 / 3;
										var rand4 = Math.random() < 1 / 3;
										var dialog = ui.create.dialog('卷阅', [list, 'vcard']);
										player
											.chooseButton(dialog)
											.set('ai', function (button, card) {
												var card = game.createCard(button.link[2]);
												var name = button.link[2];
												if (get.type(card) == 'trick') {
													if (player.hp <= 1) {
														switch (name) {
															case 'zhiliaobo':
																return 1;
															case 'dunpaigedang':
																return 0.8;
															case 'nanman':
																return 0.5;
															default:
																return 0;
														}
													}
													if (rand4 && player.countCards('h') <= 1) {
														switch (name) {
															case 'zengbin':
																return 1;
															case 'wuzhong':
																return 0.8;
															default:
																return 0;
														}
													}
													if (player.hasSkill('qinglonglingzhu')) {
														if (rand2) return name == 'chiyuxi' ? 0.8 : 0;
														return name == 'jingleishan' ? 0.8 : 0;
													}
													if (rand2) return name == 'wanjian' ? 0.8 : 0;
													return name == 'nanman' ? 0.8 : 0;
												}
												if (get.type(card) == 'basic') {
													if (player.storage.zyile_juanyue_result && player.storage.zyile_juanyue_result.name == 'du') return name == 'tao' ? 9 : 0;
													if (player.hp <= 2) return name == 'tao' ? 1 : 0;
													if (player.hasSkill('jiu')) return name == 'sha' ? 1 : 0;
													if (player.getCards('h', 'sha').length) return name == 'jiu' ? 1 : 0;
													var cardx = card;
													if (lib.card.bxyr_zhan) {
														cardx = { name: 'bxyr_zhan' };
													}
													var target = game.filterPlayer(function (target1) {
														return player.canUse(cardx, target1) && ai.get.effect(target1, cardx, player) > 0;
													});
													target.sort(function (a, b) {
														return ai.get.effect(a, cardx, player) < ai.get.effect(a, cardx, player);
													});
													if (target[0] && rand3) return ai.get.effect(target[0], cardx, player);
												}
												var i = Math.floor(Math.random() * list.length);
												if (rand2) return list[i];
												if (rand1) return get.value(card);
												return ai.get.useful(card);
											})
											.set('filterButton', function (button) {
												return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.getParent('chooseToUse'));
											});
									}
								} else event.finish();
								('step 1');
								if (result.links?.length) {
									lib.skill.zyile_juanyue2.viewAs = { name: result.links[0][2], nature: result.links[0][3] };
									player.storage.zyile_juanyue2 = game.createCard(result.links[0][2], ['heart', 'diamond', 'club', 'spade'].randomGet(), Math.ceil(Math.random() * 13), result.links[0][3]);
									var next = player.chooseToUse();
									next.set('openskilldialog', '选择' + get.translation(result.links[0][2]) + '的目标');
									next.set('norestore', true);
									next.set('_backupevent', 'zyile_juanyue2');
									next.backup('zyile_juanyue2');
								} else {
									event.finish();
								}
							},
							mod: {
								aiOrder(player, card, num) {
									if (card.name == 'moshu_mofazhishu') return 15;
								},
							},
							ai: {
								order: 5.2,
								result: {
									player(player) {
										var cards = player.getCards('h');
										if (Array.isArray(cards)) for (var i of cards) {
											if (i.name == 'moshu_mofazhishu') continue;
											if (get.type(i) == 'basic' && player.hp <= 2) return 2 + ai.get.unuseful(i);
											if (get.value(i) < 6 && get.type(i) == 'trick') return 3 + ai.get.unuseful2(i);
											if (get.type(i == 'delay')) return ai.get.unuseful3(i);
										}
										return -10;
									},
								},
								threaten: 1.5,
							},
						},
						zyile_juanyue2: {
							filterCard() {
								return false;
							},
							selectCard: 0,
							popname: true,
							onuse(result, player) {
								if (player.storage.zyile_juanyue2) result.cards = player.storage.zyile_juanyue2;
								if (player.storage.zyile_juanyue_result) player.lose(player.storage.zyile_juanyue_result)._triggered = 99;
								delete player.storage.zyile_juanyue2;
								delete player.storage.zyile_juanyue_result;
							},
						},
						AM_shachang: {
							audio: true,
							trigger: { player: 'phaseUseBegin' },
							filter(event, player) {
								return player.countCards('h');
							},
							forced: true,
							content() {
								'step 0';
								if (!player.storage.AM_chanyuan2) {
									player
										.chooseCard('是否发动【沙场】选择任意张手牌以任意顺序置于牌堆顶置于牌堆顶?(先选择的在上)', [1, player.countCards('h')])
										.set('ai', function (card) {
											if (ui.selected.cards.length < player.countCards('h', 'sha')) {
												if (get.attitude(player, player.next) > 0 && player.countCards('h', 'sha') > 0 && card.name != 'sha') return 8 - get.value(card);
												if (player.countCards('h', 'sha') > 0 && card.name != 'sha' && get.attitude(player, player.next) < 0) return 5 - get.value(card);
												return 0;
											}
											return 0;
										})
										.set('complexCard', true);
								} else {
									player.chooseCardTarget({
										prompt: '是否发动【沙场】选择任意张手牌交给一名角色？',
										filterCard: true,
										position: 'h',
										selectCard: [1, player.countCards('h')],
										complexCard: true,
										filterTarget(card, player, target) {
											if (player == target) return false;
											return true;
										},
										ai1(card) {
											if (ui.selected.cards.length > _status.event.player.countCards('h', 'sha')) return 0;
											return 5 - get.value(card);
										},
										ai2(target) {
											return get.attitude(_status.event.player, target);
										},
									});
								}
								('step 1');
								if (result.bool) {
									player.addTempSkill('AM_shachang_shacount', 'phaseUseAfter');
									if (!player.storage.AM_shachang) player.storage.AM_shachang = 0;
									player.storage.AM_shachang = 0;
									player.storage.AM_shachang += result.cards.length;
									if (!player.storage.AM_chanyuan2) {
										player.$throw(result.cards);
										for (var i of result.cards) {
											ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
										}
										ui.updatehl();
										player.update();
										ui.clear();
										event.finish();
									} else {
										player.showCards(result.cards);
										player.$give(result.cards.length, result.targets[0]);
										result.targets[0].gain(result.cards, target);
									}
								} else {
									event.finish();
								}
							},
							subSkill: {
								shacount: {
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha' && typeof player.storage.AM_shachang == 'number') return num + player.storage.AM_shachang;
										},
									},
									trigger: { player: 'shaBefore' },
									forced: true,
									content() {
										player.draw();
									},
								},
							},
						},
						AM_chanyuan: {
							trigger: { player: 'phaseEnd', global: 'phaseBegin' },
							forced: true,
							mark: true,
							audio: 'ext:概念武将/audio:2',
							filter(event, player) {
								return !player.storage.AM_chanyuan2;
							},
							init(player) {
								player.storage.AM_chanyuan = 0;
								player.storage.AM_chanyuan2 = false;
							},
							intro: {
								content(storage, player) {
									if (!player.storage.AM_chanyuan2) {
										return '未觉醒';
									} else {
										return '已觉醒';
									}
								},
							},
							content() {
								'step 0';
								if (event.triggername == 'phaseEnd' && !player.storage.AM_chanyuan3) player.storage.AM_chanyuan++;
								if (player.storage.AM_chanyuan3) {
									player.storage.AM_chanyuan = 0;
									player.storage.AM_chanyuan3 = false;
								}
								('step 1');
								if (player.storage.AM_chanyuan >= 3 && event.triggername == 'phaseEnd') {
									player.loseMaxHp(true);
									player.storage.AM_chanyuan2 = true;
									lib.translate.AM_shachang_info = '出牌阶段开始时,你可将任意X张手牌展示并交给一名角色,此阶段内:1、你使用【杀】次数上限+X;2、你每使用一张【杀】,摸一张牌';
								}
							},
							group: ['AM_chanyuan2'],
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip' && !player.storage.AM_chanyuan2) return -1;
									},
								},
							},
						},
						AM_chanyuan2: {
							trigger: { player: 'equipEnd' },
							forced: true,
							silent: true,
							content() {
								player.storage.AM_chanyuan3 = true;
							},
						},
						AM_zhinian: {
							trigger: { player: 'useCardAfter', global: 'phaseEnd' },
							forced: true,
							init(player) {
								player.storage.AM_zhinian = 0;
							},
							filter(event, player, name) {
								if (name == 'phaseEnd') return true;
								return event.cards && get.type(event.cards[0]) == 'trick' && get.position(event.cards[0]) == 'd' && get.itemtype(event.cards[0]) == 'card';
							},
							content() {
								'step 0';
								if (event.triggername == 'phaseEnd') {
									player.storage.AM_zhinian = 0;
									event.finish();
								}
								('step 1');
								player.storage.AM_zhinian++;
								('step 2');
								var num = player.storage.AM_zhinian;
								var val = get.value(trigger.cards[0]);
								var next = player.chooseToDiscard('是否弃置' + num + '张牌将<font color=red>' + get.translation(trigger.cards[0]) + '</font>收回？', 'he', num);
								next.set('numx', num);
								next.set('ai', function (card) {
									if (_status.event.numx > 2) return 0;
									if (trigger.cards.length > 1) return 1;
									return val - get.value(card);
								});
								('step 3');
								if (result.bool) {
									player.gain(trigger.cards[0], 'gain2');
								} else {
									event.finish();
								}
							},
						},
						AM_zhuixin: {
							audio: 'ext:概念武将/audio:2',
							mark: true,
							enable: 'phaseUse',
							complexCard: true,
							filterCard(card, player) {
								if (ui.selected.cards.length) {
									return card.suit == ui.selected.cards[0].suit;
								}
								var cards = player.getCards('h');
								if (Array.isArray(cards)) for (var i of cards) {
									if (card != i) {
										if (card.suit == i.suit) return true;
									}
								}
								return false;
							},
							selectTarget(card) {
								if (ui.selected.targets.length > ui.selected.cards.length) {
									game.uncheck('target');
								}
								return ui.selected.cards.length;
							},
							filterTarget(card, player, target) {
								return target.isDamaged();
							},
							filter(event, player) {
								return !player.storage.AM_zhuixin;
							},
							intro: {
								content: 'limited',
							},
							check(card) {
								return 8 - get.value(card);
							},
							prepare(cards, player, targets) {
								player.line(targets);
							},
							init(player) {
								player.storage.AM_zhuixin = false;
								player.markSkill('AM_zhuixin');
								for (var i = 0; i < player.node.marks.childNodes.length; i++) {
									if (player.node.marks.childNodes[i].name == 'AM_zhuixin') {
										player.node.marks.childNodes[i].setBackground(player.name, 'character');
										player.node.marks.childNodes[i].innerHTML = '';
									}
								}
							},
							multitarget: true,
							multiline: true,
							limited: true,
							selectCard: [1, Infinity],
							content() {
								'step 0';
								player.storage.AM_zhuixin = true;
								event.targets = targets.slice(0);
								event.num = event.targets.length;
								event.targets.sort(lib.sort.seat);
								('step 1');
								if (event.targets.length) {
									var target = event.targets.shift();
									target.recover(event.num);
									event.redo();
								}
							},
							ai: {
								expose: 0.4,
								order: 1,
								result: {
									target(player, target) {
										if (player.hp > 2) {
											if (game.phaseNumber < game.players.length * 2) return 0;
										}
										for (var i of game.players) {
											if (lib.config.mode == 'identity') {
												if (i.ai.shown <= 0.2) return 0;
											} else if (lib.config.mode == 'guozhan') {
												if (i.identity == 'unknown') return 0;
											}
										}
										var num = 0;
										for (var i of game.players) {
											if (i.isDamaged() && get.attitude(player, i) > 2) {
												num++;
											}
										}
										if (num < 2) return 0;
										var eff = ai.get.recoverEffect(target, player, target);
										return eff;
									},
								},
							},
						},
						AM_shengguang: {
							audio: true,
							trigger: { target: 'useCardToBefore' },
							filter(event, player) {
								if (event.player == player) return false;
								if (event.getParent(2).player && event.getParent(2).player == player) return false;
								return player.hp == 1;
							},
							forced: true,
							content() {
								'step 0';
								player.draw();
								('step 1');
								player.chooseToUse();
							},
						},
						AM_shenyuan: {
							trigger: { global: 'damageBefore' },
							logTarget: 'player',
							filter(event, player) {
								if (event.player == player) return false;
								return event.num >= event.player.hp;
							},
							prompt(event, player) {
								var str = '';
								str += '是否发动【神援】失去一点体力防止' + get.translation(event.player) + '受到的伤害？';
								return str;
							},
							check(event, player) {
								if (player.hp > 1) return get.attitude(player, event.player) > 1;
								return 0;
							},
							content() {
								'step 0';
								player.loseHp();
								('step 1');
								trigger.untrigger();
								trigger.finish();
							},
							ai: {
								threaten: 4,
								expose: 0.2,
							},
						},
						AM_chenji: {
							trigger: { player: ['phaseUseEnd', 'useCardAfter'] },
							forced: true,
							filter(event, player, name) {
								if (name == 'phaseUseEnd') return true;
								if (name == 'useCardAfter') return _status.currentPhase == player && get.itemtype(event.cards[0]) == 'card';
								return false;
							},
							init(player) {
								player.storage.AM_chenji = [];
							},
							content() {
								'step 0';
								if (event.triggername == 'useCardAfter') {
									var type = get.type(trigger.card, 'trick');
									if (!player.storage.AM_chenji.includes(type)) player.storage.AM_chenji.push(type);
								} else {
									player
										.chooseTarget('是否选择一名角色令其下回合不能使用或打出你此阶段内未使用过的类别的牌？', function (card, player, target) {
											return player != target;
										})
										.set('ai', function (target) {
											return -get.attitude(player, target);
										});
								}
								('step 1');
								if (result.targets?.length) {
									result.targets[0].addSkill('AM_chenji_unuseable');
									result.targets[0].storage.AM_chenji_unuseable = [];
									for (var i = 0; i < player.storage.AM_chenji.length; i++) {
										result.targets[0].storage.AM_chenji_unuseable.push(player.storage.AM_chenji[i]);
									}
									player.storage.AM_chenji = [];
								} else {
									event.finish();
								}
							},
							subSkill: {
								unuseable: {
									trigger: { player: 'phaseUseEnd' },
									forced: true,
									popup: false,
									content() {
										player.storage.AM_chenji_unuseable = [];
										player.removeSkill('AM_chenji_unuseable');
									},
									mark: true,
									intro: {
										content(storage, player) {
											var storage = player.storage.AM_chenji_unuseable;
											if (storage && storage.length) {
												var str = '只能使用或打出的牌:';
												for (var i = 0; i < storage.length; i++) {
													str += get.translation(storage[i]) + '、';
												}
												return str.slice(0, str.length - 1);
											} else {
												return '不能使用或打出牌';
											}
										},
									},
									mod: {
										cardEnabled(card, player, target) {
											if (player.storage.AM_chenji_unuseable && player.storage.AM_chenji_unuseable.length) {
												var storage = player.storage.AM_chenji_unuseable;
												for (var i = 0; i < storage.length; i++) {
													if (get.type(card) == storage[i]) return true;
												}
												return undefined;
											}
											if (!player.storage.AM_chenji_unuseable.length) return undefined;
										},
										cardRespondable(card, player, target) {
											if (player.storage.AM_chenji_unuseable && player.storage.AM_chenji_unuseable.length) {
												var storage = player.storage.AM_chenji_unuseable;
												for (var i = 0; i < storage.length; i++) {
													if (get.type(card) == storage[i]) return true;
												}
												return undefined;
											}
											if (!player.storage.AM_chenji_unuseable.length) return undefined;
										},
										cardSavable(card, player, target) {
											if (player.storage.AM_chenji_unuseable && player.storage.AM_chenji_unuseable.length) {
												var storage = player.storage.AM_chenji_unuseable;
												for (var i = 0; i < storage.length; i++) {
													if (get.type(card) == storage[i]) return true;
												}
												return undefined;
											}
											if (!player.storage.AM_chenji_unuseable.length) return undefined;
										},
									},
								},
							},
							ai: {
								threaten: 8,
								expose: 0.2,
							},
						},
						AM_jingbian: {
							trigger: { global: 'phaseEnd' },
							prompt(event, player) {
								var str = '';
								str += '是否发动【静变】观看' + get.translation(event.player) + '的手牌？';
								return str;
							},
							check(event, player) {
								return 1;
							},
							filter(event, player) {
								if (event.player == player) return false;
								return !event.player.getStat('damage') && event.player.countCards('h');
							},
							content() {
								'step 0';
								if (player.countCards('he')) {
									var str = '';
									str += '是否替换' + get.translation(trigger.player) + '的一张手牌？';
									player.chooseCardButton(str, trigger.player.getCards('h')).set('ai', function (button) {
										return get.value(button.link);
									});
								} else {
									player.viewCards('静变', trigger.player.getCards('h'));
									event.finish();
								}
								('step 1');
								if (result.links?.length) {
									event.cards1 = result.links[0];
									player.chooseCard('请选择一张牌替换' + get.translation(event.cards1) + '这张牌', 'he', true).set('ai', function (card) {
										return -get.value(card);
									});
								} else {
									event.finish();
								}
								('step 2');
								if (result.cards?.length) {
									event.cards2 = result.cards[0];
									player.gain(event.cards1, trigger.player);
									trigger.player.$give(1, player);
									if (get.position(event.cards2) == 'h') player.$give(1, trigger.player);
									else player.$give(event.cards2, trigger.player);
									trigger.player.gain(event.cards2, player);
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						AM_shijin: {
							trigger: { global: ['useCard', 'phaseEnd', 'respond'] },
							forced: true,
							filter(event, player, name) {
								if (name == 'phaseEnd') return true;
								if (_status.currentPhase != event.player) return false;
								return get.cardCount(true, event.player) > 1 && get.itemtype(event.card) == 'card';
							},
							init(player) {
								player.storage.AM_shijin = [];
							},
							content() {
								'step 0';
								if (event.triggername == 'phaseEnd') {
									player.storage.AM_shijin = [];
									event.finish();
								}
								('step 1');
								var storage = player.storage.AM_shijin;
								if (storage.length) {
									for (var i = 0; i < storage.length; i++) {
										if (storage[i].number > trigger.card.number) {
											event.bool = true;
											break;
										}
									}
									if (!event.bool) {
										player.chooseBool('是否发动【时尽】令' + get.translation(trigger.player) + '弃置一张牌？').set('ai', function () {
											return get.attitude(player, trigger.player) <= 0;
										});
									}
								}
								('step 2');
								player.storage.AM_shijin = player.storage.AM_shijin.concat(trigger.card);
								('step 3');
								if (result.bool) {
									trigger.player.chooseToDiscard('he', true);
								} else {
									event.finish();
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						AM_yongmian: {
							trigger: { player: 'discardAfter' },
							filter(event, player) {
								if (Array.isArray(event.cards)) for (var i of event.cards) {
									if (get.position(i) == 'd') {
										return true;
									}
								}
								return false;
							},
							check(event, player) {
								return 1;
							},
							init(player) {
								player.storage.AM_yongmian = [];
							},
							content() {
								if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
									if (get.position(i) == 'd') {
										player.storage.AM_yongmian = player.storage.AM_yongmian.concat(i);
									}
								}
								player.directgain(trigger.cards);
								player.lose(trigger.cards, ui.special)._triggered = null;
								player.$gain2(trigger.cards);
								player.markSkill('AM_yongmian');
							},
							intro: {
								content(storage, player) {
									var str = '';
									if (player.storage.AM_yongmian && player.storage.AM_yongmian.length) {
										str += get.translation(player.storage.AM_yongmian[0]);
										for (var i = 1; i < player.storage.AM_yongmian.length; i++) {
											str += '、' + get.translation(player.storage.AM_yongmian[i]);
										}
									}
									return str;
								},
								mark(dialog, content, player) {
									var cards = [];
									if (player.storage.AM_yongmian && player.storage.AM_yongmian.length) {
										for (var i = 0; i < player.storage.AM_yongmian.length; i++) {
											cards.push(player.storage.AM_yongmian[i]);
										}
									}
									if (cards.length) {
										dialog.add('<div class="text center">永眠移出的牌</div>');
										dialog.add(cards);
									} else {
										dialog.add('无');
									}
								},
							},
							group: ['AM_yongmian2'],
						},
						AM_yongmian2: {
							trigger: { player: 'dieBegin' },
							forced: true,
							filter(event, player) {
								return player.storage.AM_yongmian && player.storage.AM_yongmian.length;
							},
							content() {
								'step 0';
								var num = player.storage.AM_yongmian.length;
								player.chooseCardButton('永眠:请选择置入牌堆顶,先选择的在上', num, player.storage.AM_yongmian, true);
								('step 1');
								for (var i of result.links) {
									player.storage.AM_yongmian.remove(i);
									ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
								}
							},
							ai: {
								threaten: 2,
							},
						},
					},
					characterIntro: {
						zyile_yezi: '作者:未知</br>来源于纸上的魔法使.',
						zyile_tianyi: '作者:未知</br>来源于百度搜图.</br>职业:虚拟歌姬</br>性別:女</br>年龄:15岁 </br>身高:156cm </br>生日:2012年7月12日</br></br>   洛天依是以Yamaha公司的VOCALOID3语音合成引擎为基础制作的全世界第一款VOCALOID中文声库和虚拟形象. 洛天依的声库于2012年7月12日在第八届中国国际动漫游戏博览会(CCG EXPO)上正式推出.  洛天依的音源是国内配音演员山新,形象由<MOTH>初稿设计,经ideolo改编整合后完成.',
						zyile_miku: '作者:未知</br>来源于百度搜图.</br>职业:虚拟歌姬</br>性別:女</br>年龄:16岁 </br>身高:158cm </br>体重:42kg</br>生日:2007年8月31日</br>     初音未来(初音ミク/Hatsune Miku),是2007年8月31日由CRYPTON FUTURE MEDIA以Yamaha的VOCALOID系列语音合成程序为基础开发的音源库,音源数据资料采样于日本声优藤田咲.',
						zyile_mengbai: '作者:白祈QSR</br>来源萌娘百科:版头列表.</br>',
						zyile_yunxiang: '作者:ASK</br>P站ID:42265652</br>種族:魔族</br>性別:女</br>年齢:未知</br>身長:163ｃｍ</br>体重:47ｋｇ</br>離れ離れの姉を探して妹と一緒に旅をする</br>秘密結社「インダルジェンス_ティーパーティー」の参加者のうわさがある.',
						zyile_jingzi: '作者:未知</br>来源于百度搜图.</br>',
						zyile_Alice: '作者:未知</br>来源于百度搜图.</br>童话故事<爱丽丝梦游仙境>的女主角.</br>',
						zyile_xukong: '作者:未知</br>来源于百度搜图.</br>',
						zyile_xianhua: '作者:未知</br>来源于百度搜图.</br>',
						zyile_tiankong: '作者:未知</br>来源于百度搜图.</br>',
						zyile_xuanyuanyi: '作者:未知</br>来源于百度搜图.</br>轩辕氏最后一人.</br>',
						zyile_tongyao: '作者:未知</br>来源于百度搜图.</br>',
						zyile_yuyan: '作者:未知</br>来源于百度搜图.</br>',
						zyile_yaohu: '作者:未知</br>来源于百度搜图.</br>',
						zyile_duniang: '作者:未知</br>来源于百度搜图.</br>',
						zyile_mofa: '作者:未知</br>来源于百度搜图.</br>',
						zyile_mudi: '作者:Dhiea</br>新约.</br>',
						zyile_eshi: '作者:未知</br>来源于百度搜图.</br>',
						zyile_Rlyeh_text: '作者:未知</br>来源于百度搜图.</br>',
						zyile_mingshen: '作者:未知</br>来源于百度搜图.</br>',
						zyile_congmei: '作者:未知</br>来源于百度搜图.</br>游戏王卡片系列之一.卡包JOTL(805)推出的新系列卡组.「虫惑魔」怪兽统一是地属性·昆虫族或植物族的怪兽,其效果跟名字带有「洞」或者「落穴」的通常陷阱卡相关.',
						zyile_huimie: '作者:ASK</br>P站ID:60224597</br>',
						zyile_xishou: '作者:RAN</br>P站ID:57372795.</br>',
						ran_shijian: '作者:RAN</br>P站ID:45026210.</br>',
						ran_haiyang: '作者:RAN</br>P站ID:40835756.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						ran_lengjing: '作者:RAN</br>P站ID:57372795.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						ran_chengshi: '作者:RAN</br>P站ID:57372795.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						ran_yongheng: '作者:RAN</br>P站ID:46094470.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						ran_jijing: '作者:RAN</br>P站ID:46861577.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						ran_xiwang: '作者:RAN</br>P站ID:48578640.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						ran_zhizhuo: '作者:RAN</br>P站ID:50563656.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						ran_shalu: '作者:RAN</br>P站ID:50563656.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						ran_shengji: '作者:RAN</br>P站ID:50563656.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						ran_zhengyi: '作者:RAN</br>P站ID:53163217.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						ran_mingyun: '作者:RAN</br>P站ID:50563656.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						ran_gongping: '作者:RAN</br>P站ID:50563656.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						ran_zhihui: '作者:RAN</br>P站ID:50563656.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						ran_jibian: '作者:RAN</br>P站ID:50563656.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						ran_quanli: '作者:RAN</br>P站ID:53163217.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						ran_xiee: '作者:RAN</br>P站ID:53163217.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						ran_siwang: '作者:RAN</br>P站ID:53163217.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						zyile_guize: '作者:ももこ</br>P站ID:60905449.</br>设计者</br>贴吧ID:阿米拉嗪.</br>',
						zyile_Aisha: '虚无公主是网络游戏<艾尔之光>中角色爱莎的二转职业名称,其前身为暗黑术士(十五级可转职).虚无公主的转职要求在等级达到35级时且游戏角色职业为暗黑术士时可在NPC阿莉尔处领取二转的相关任务,完成一系列转职任务后即可成为虚无公主(或者商城直接购买二转虚无公主转职证明).',
					},
					translate: {
						zyile_mengbai: '萌百娘',
						zyile_mingshen: '冥神',
						zyile_yezi: '纸上魔法',
						zyile_congmei: '虫惑魅魔',
						zyile_jingzi: '虚妄之镜',
						zyile_xukong: '虚空深渊',
						zyile_yaohu: '妖狐',
						zyile_tiankong: '天空',
						zyile_xishou: '夕兽',
						ran_lengjing: '冷静',
						zyile_tongyao: '童谣',
						zyile_yuyan: '预言',
						zyile_yunxiang: '云想琉璃',
						zyile_guize: '规则',
						ran_chengshi: '诚实',
						ran_yongheng: '永恒',
						ran_jijing: '寂静',
						ran_xiwang: '希望',
						ran_zhizhuo: '执着',
						ran_shalu: '勇气',
						zyile_duniang: '度娘',
						ran_shijian: '时间',
						ran_shengji: '生机',
						ran_zhengyi: '正义',
						ran_mingyun: '命运',
						ran_gongping: '公平',
						ran_quanli: '权利',
						ran_zhihui: '智慧',
						ran_jibian: '机遇',
						ran_xiee: '邪恶',
						ran_haiyang: '海洋',
						ran_siwang: '死亡',
						zyile_eshi: '饿食',
						zyile_Rlyeh_text: '拉莱耶',
						zyile_mofa: '魔法',
						zyile_huimie: '毁灭',
						zyile_mudi: '墓地',
						zyile_xianhua: '鲜花',
						zyile_Aisha: '虚无公主',
						zyile_xuanyuanyi: '轩辕依',
						zyile_longji: '龙姬',
						zyile_Alice: '爱丽丝',
						dongman_Kaguya: '永夜公主',
						zyile_fangxiang: '芳香',
						zyile_zhanfang: '绽放',
						SE_yongheng: '永恒',
						SE_xuyu: '须臾',
						SE_nanti: '难题',
						SE_yuzhi: '蓬莱玉枝',
						SE_yanzi: '燕子安贝',
						SE_huoshu: '火鼠之裘',
						SE_foyu: '佛御石钵',
						SE_longjing: '龙颈之玉',
						zyile_juanyue: '卷阅',
						zyile_bihu: '闭户',
						zyile_moshu: '魔书',
						RE_fuyuan: '负之起源',
						zyile_xuwu: '虚无存在',
						zyile_lunhui: '无限轮回',
						zyile_youshi: '诱食',
						zyile_maisha: '埋杀',
						zyile_xianluo: '陷落',
						AM_siguan: '死棺',
						AM_maigu: '埋骨',
						AM_xinmei: '心魅',
						AM_qingwu: '倾舞',
						RE_zuiqiang: '最强妄想',
						AM_zhongyan: '终焉',
						AM_jueyu: '绝域',
						AM_zhongyan_old: '终焉',
						AM_bolan: '博览',
						AM_xiangwen: '镶文',
						AM_xiangwen_old: '镶文',
						AM_xuanzhou_old: '绚咒',
						zyile_tiance: '天策',
						zyile_qiangze: '强则',
						zyile_danhua: '淡化',
						zyile_kuoshan: '扩散',
						zyile_changan: '常暗',
						zyile_chizhu: '斥逐',
						AM_guizhi: '规制',
						AM_nongxu: '弄序',
						AM_guizeyuesu: '规封',
						zyile_yinzhao: '印照',
						RE_huanqian: '幻千',
						RE_huanqian1: '幻千',
						RE_huanqian2: '幻千',
						RE_huanqian3: '幻千•桃',
						RE_huanqian4: '幻千•杀',
						RE_huanqian5: '幻千•闪',
						RE_huanqian6: '幻千•无懈',
						zyile_yanzao: '赝造',
						zyile_weizhi: '未知',
						zyile_yuanshu: '源数',
						zyile_ezuo: '恶作',
						zyile_xiongyi: '凶裔',
						zyile_mengxingx: '朦行',
						zyile_baoji: '饱饥',
						zyile_eshis_end: '饿食',
						zyile_eshis_heart: '饿食',
						zyile_eshis: '饿食•桃',
						zyile_eshis2: '饿食•酒',
						zyile_mengxing2: '',
						zyile_henhe: '横壑',
						zyile_xianyu: '衔域',
						zyile_jubao: '聚宝',
						zyile_weihuo: '为祸',
						zyile_luanxing: '乱形',
						zyile_shiling: '噬灵',
						zyile_chuandi: '传递',
						zyile_yanxu: '延续',
						zyile_xionghuo: '凶祸',
						zyile_fuyi: '福依',
						zyile_xiaoling: '嚣灵',
						zyile_: '诱堕',
						zyile_2: '诱堕',
						zyile_wuxiang: '无象',
						zyile_moyi: '魔裔',
						AM_zhenyan: '真言',
						AM_wuhuo: '无惑',
						AM_shunxi: '瞬息',
						AM_jiyun: '积运',
						AM_zhuanyun: '转运',
						AM_wangzhou: '亡咒',
						AM_huangquan: '黄泉',
						AM_chaoxi: '潮汐',
						AM_chaoxi2: '潮汐',
						AM_duoluo: '堕落',
						AM_jiyusha: '机变',
						AM_jiyushan: '机变',
						AM_jiyutao: '机变',
						AM_jiyu: '机变',
						AM_huoxue: '活学',
						AM_huoxue2: '活学',
						AM_zaoshi: '造势',
						AM_zhuanquan: '专权',
						AM_caijue: '裁决',
						AM_fushen: '复审',
						AM_shengzhan: '圣战',
						AM_xueren: '血刃',
						AM_ziyang: '滋养',
						AM_yunyu: '蕴育',
						AM_yueqian: '跃迁',
						zyile_shouji: '搜集',
						zyile_zhangkong2: '掌控',
						zyile_zhangkong: '掌控',
						AM_shachang: '沙场',
						AM_chanyuan: '残援',
						AM_zhinian: '执念',
						AM_zhuixin: '追心',
						AM_shengguang: '圣光',
						AM_shenyuan: '神援',
						AM_chenji: '沉寂',
						AM_jingbian: '静变',
						AM_chenji_unuseable: '沉寂',
						AM_shijin: '时尽',
						AM_yongmian: '永眠',
						AM_yongmian2: '永眠',
						AM_bujing: '不惊',
						AM_yuxi: '预析',
						zyile_xianyi: '仙裔',
						zyile_huangshi: '皇室',
						zyile_tianyun: '天运',
						zyile_longyu: '龙域',
						zyile_xianshen: '羡神',
						zyile_luxin: '戮心',
						zyile_xiangtian: '相天',
						zyile_shenxing: '神狱',
						zyile_menghua: '萌化',
						zyile_quanshe: '全涉',
						zyile_guansu: '管束',
						zyile_baike: '百科',
						zyile_pukemosu: '魔术',
						zyile_xianjing: '仙境',
						zyile_shiji: '溯时',
						zyile_shijix: '溯时',
						zyile_leiqiu: '魔球',
						zyile_qianren: '暗魔千刃',
						zyile_heiyan: '暗黑之炎',
						zyile_molei: '暗魔闪雷',
						zyile_leiqiu_info: '<span class="bluetext">锁定技</span>,每当你使用一张黑色牌后将此牌置于你武将牌上称之为‘炎’.你可以弃置一张炎对除你以外的武将造成一点<span style="color: #4C1354">暗</span>属性伤害.',
						zyile_qianren_info: '羽翼化作无数刀刃	不可能防御的对人杀伤魔术,曾经用于对付圣灵骑士团',
						zyile_heiyan_info: '能将影子都燃烧殆尽的黑炎	暗属性的高位魔术,能瞬间将树林燃烧殆尽.',
						zyile_molei_info: '将灵魂燃烧殆尽的黑雷.暗属性最强级别的精灵魔术,大范围杀伤技能,中等级别的精灵碰到也会瞬间灰飞烟灭.在实战中一瞬间扫清了大量的魔精灵',
						zyile_fangxiang_info: '一名角色的出牌阶段开始时,你可以令其和在其攻击范围内的所有角色各回复一点体力并摸1张牌,因此而回复体力的角色,不能选择你作为卡牌的目标直到回合结束.',
						zyile_zhanfang_info: '<span style="color: #FF0000">限定技</span>,出牌阶段,你可以指定一名角色获得【芳香】,你结束出牌阶段.',
						SE_yongheng_info: '你使用的基本牌或者非延时锦囊在结算完毕后,若不是你的最后1张牌(最后1张直接获得),你可以选择弃置1张手牌重新获得它,任何时候当你的手牌大于你的体力上限时,你须弃置到等同于你的体力上限的张数,并且受到1点伤害,你跳过你的弃牌阶段.',
						SE_xuyu_info: '除你以外的角色回合开始时,若其手牌大于你的体力,你可以让该名角色直接进入弃牌阶段.',
						SE_nanti_info: '游戏开始,你拥有【</span><span class="bluetext" style="color:	#FFFFE0">龙颈之玉</span>】、【</span><span class="bluetext" style="color:	#AFEEEE">佛御石钵</span>】,当你体力值降到4或者更低时,你减少1点体力上限获得【</span><span class="bluetext" style="color:	#8B4513">火鼠之裘</span>】、【</span><span class="bluetext" style="color:   #00FF7F">燕子安贝</span>】,当你体力值降到2或者更低时,你减少1点体力上限获得【</span><span class="bluetext" style="color:  #EE82EE">蓬莱玉枝</span>】.',
						SE_yuzhi_info: '</span><span class="bluetext" style="color:	#DC143C">出牌阶段限一次</span>,你指定1名目标你选择1种卡牌种类,从目标手牌中展示1张牌,若种类和你声明的一致,目标立即死亡(对应此次死亡的技能不触发),当你进入濒死状态时,你宣言1种卡牌种类,从牌堆里亮出7张牌,每有1张和声明的同种类卡牌可以使你回复1点体力.',
						SE_yanzi_info: '</span><span class="bluetext" style="color:	#DC143C">出牌阶段限一次</span>,你指定1名目标你从牌堆亮出2张牌之前中让其猜测卡牌的点数,若总点数小于等于选择的点数(2、4、6、8、10、13),令其体力减至1点并弃置所有手牌,若大于选择的点数令其受到1点伤害,你摸1张牌.',
						SE_huoshu_info: '</span><span class="bluetext" style="color:	#DC143C">出牌阶段限一次</span>,你指定1名目标从牌堆顶亮出1张牌之前让其猜测花色,猜不中的场合,你对其造成你和目标体力之差的伤害并让其选择两张手牌弃置.',
						SE_foyu_info: '</span><span class="bluetext" style="color:	#DC143C">出牌阶段限一次</span>,你指定1名目标从1名随机角色的手牌中随机选择1张卡牌让其猜测种类,猜不中的场合,目标失去1点体力上限你回复1点体力.',
						SE_longjing_info: '</span><span class="bluetext" style="color:	#DC143C">出牌阶段限一次</span>,你指定1名目标从你手牌中随机选择1张卡牌让其猜测颜色,猜不中的场合,对其造成1点伤害.',
						zyile_pukemosu_info: '<span class="bluetext" style="color:	 #B0E0E6">扑克魔术:</span><span class="bluetext" style="color:	#DC143C">出牌阶段限一次</span>,根据你摇出的4个数字获得不同的效果.',
						zyile_xianjing_info: '你可以放弃<span class="bluetext" style="color:	 	#4682B4">摸牌阶段</span>改为获得不是<span class="bluetext" style="color:	  	#FF00FF">基本</span>、<span class="bluetext" style="color:	 #DA70D6">装备</span>、<span class="bluetext" style="color:	 #DB7093">锦囊</span>的牌每一类型各一张.',
						zyile_shiji_info: '当你<span class="bluetext" style="color:	 #B0E0E6">第一次</span>即将要结算死亡时,你可以令场上的一起退回到<span class="bluetext" style="color:	 #DC143C">游戏刚开始</span>.',
						zyile_shijix_info: '当你<span class="bluetext" style="color:	 #B0E0E6">第一次</span>即将要结算死亡时,你可以令场上的一起退回到<span class="bluetext" style="color:	 #DC143C">游戏刚开始</span>.',
						zyile_yuehun_info: '<span class="bluetext">锁定技</span>,你的<span class="bluetext" style="color:	#DC143C">非基本牌</span>在你的回合内只能使用X张(X为你的当前体力);每次你的<span class="bluetext" style="color:	#4682B4">回合开始</span>时,你可以<span class="bluetext" style="color:	  #DC143C">弃置</span>一张牌并对场上其他角色造成1~2点的随机属性伤害.',
						zyile_jiyu_info: '其他角色<span class="bluetext" style="color:	 	#4682B4">摸牌</span>时,你可以令此次<span class="bluetext" style="color:	 	#4682B4">摸牌</span>数量翻倍,你摸三张牌;其他角色选择<span class="bluetext" style="color:	  #DC143C">弃置</span>牌时,你可以令此次弃牌数量减半(向上取整),你<span class="bluetext" style="color:	   	#00FF7F">回复</span>一点体力并摸一张牌.',
						zyile_yinxuan_info: '<span class="bluetext" style="color:	#DC143C">出牌阶段X次</span>(X为你的当前体力),你可以视为<span class="bluetext" style="color:	 	#00FFFF">使用</span>任意一张牌,你失去一点体力并令场上所有角色摸一张牌.',
						zyile_xuni_info: '<span class="bluetext">锁定技</span>,你的武将牌不能被<span class="bluetext" style="color:	   	#00FF7F">选择、翻面、横置</span>.',
						zyile_lvdong_info: '<span class="bluetext" style="color:	#DC143C">出牌阶段X次</span>(X为你当前体力),你可以将任意张手牌置回牌堆,进行X次牌的名称的声明,你从牌库获得等量与声明的名称相对应的牌(X为你置回牌堆的牌的数量).',
						zyile_shuaicong_info: '每次其他角色<span class="bluetext" style="color:	   	 	#E1FFFF">回合开始</span>时,你可以令其<span class="bluetext" style="color:	   	#00FF7F">回复</span>一点体力并摸一张牌,你摸三张牌.',
						zyile_huisheng_info: '你受到<span class="bluetext" style="color:	   	 	 	#DC143C">伤害</span>后可以与<span class="bluetext" style="color:	   	 	 	 	#EE82EE">伤害来源</span>各摸一张牌你<span class="bluetext" style="color:	   	#00FF7F">回复</span>一点体力.',
						zyile_menghua_info: '<span class="bluetext" style="color:	#DC143C">出牌阶段限一次</span>,你可以指定一名未<span class="bluetext" style="color:	  #FFB6C1">【萌化】</span>的男性目标将其武将牌替换成女性武将;或指定定一名未<span class="bluetext" style="color:	  #FFB6C1">【萌化】</span>的女性武将将其武将牌替换成男性武将.',
						zyile_quanshe_info: '<span class="bluetext">锁定技</span>,你的回合开始时,若场上角色有<span class="bluetext" style="color:	  #FFB6C1">【萌化】</span>,则你随机获得牌库中所有种类的各1张牌.',
						zyile_guansu_info: '<span class="bluetext">锁定技</span>,未<span class="bluetext" style="color:	  #FFB6C1">【萌化】</span>的角色不能对比其体力值小的角色使用卡牌,一名角色对<span class="bluetext" style="color:	  #FFB6C1">【萌化】</span>的角色造成伤害时,可以将其体力上限调整为该角色的体力值.',
						zyile_baike_info: '<span class="bluetext" style="color:	#DC143C">出牌阶段限一次</span>,你可以解除一名角色的<span class="bluetext" style="color:	  #FFB6C1">【萌化】</span>,你获得其所有未<span class="bluetext" style="color:	  #FFB6C1">【萌化】</span>之前的技能.',
						zyile_shenxing_info: '<span class="bluetext">锁定技</span>,你的<span class="bluetext" style="color: #8B008B">回合结束</span>时,若游戏回合为<span class="bluetext" style="color: #1E90FF">奇数</span>,则直到下回合开始,你不能成为其他角色的卡牌、技能目标,你令游戏回合数+1;你的<span class="bluetext" style="color: #9400D3">回合开始</span>时,若游戏回合为<span class="bluetext" style="color: #00FFFF">偶数</span>,其他角色的技能失效且不能使用或打出手牌,你令游戏回合数-1.',
						zyile_xiangtian_info: '<span class="bluetext">锁定技</span>,你摸牌时可以取消之并改为从牌堆获取种类不相同的各一张牌;你可以立即获得你弃置的牌.',
						zyile_luxin_info: '你对其他角色造成伤害后或其他角色回合结束时,可以令其对一名除你以外的你指定的角色使用一张<span class="bluetext" style="color:	 #808080">【杀】</span>,否则其失去一点体力并弃置所选角色的所有牌. ',
						zyile_xianshen_info: '其他角色<span class="bluetext" style="color:	#DC143C">弃牌阶段</span>开始时,若其本回合未造成过伤害,则你可获得其一半的手牌,否则你可令其跳过下回合的<span class="bluetext" style="color:	#DC143C">摸牌阶段</span>. ',
						zyile_juanyue_info: '你的手牌可以当做对应其卡牌种类的任意一张卡牌使用(<span class="bluetext" style="color:	#DC143C">魔法之书</span>、装备牌除外). ',
						zyile_bihu_info: '<span class="bluetext">锁定技</span>,其他角色不能展示·获得你的手牌;你的装备区和手牌数量、剩余体力对其他角色不可见.你的回合数为偶数时,其他角色不能选择你为卡牌·技能目标.',
						zyile_moshu_info: '回合开始或你每次体力变动时,你可以获得一本【<span class="bluetext" style="color:	#DC143C">魔法之书</span>】.',
						zyile_longyu_info: '若你的手牌上限大于零,你可以将任意一张牌当做任意一张锦囊牌使用;每次你使用转化的牌时,你的手牌上限减一,直到回合结束.',
						zyile_xianyi_info: '<span class="bluetext">锁定技</span>,你防止任何体力流失,你的所有区域牌的数量没有限制,你失去技能或装备一件神器时,其他所有角色失去一点体力,你失去装备区内的牌时,你回复一点体力.',
						zyile_huangshi_info: '<span class="bluetext">锁定技</span>,你拥有技能【<span class="bluetext" style="color:	#DC143C">轩辕</span>】,你视为装备着【<span class="bluetext" style="color:	#FFD700">轩辕剑</span>】,回合开始时,你可以装备牌堆或场上的一件神器.',
						zyile_tianyun_info: '回合开始时,你可以将判定阶段和弃牌阶段调换.你每次摸牌可以多摸x张牌,你的出牌阶段可以进行额外进行一次(x为你的手牌数量且至多为4).',
						RE_fuyuan_info: '<span class="bluetext">锁定技</span>,其他角色回复体力效果改为失去等量体力;摸牌阶段外从牌堆获得牌的效果改为弃置等量张牌;使用转化卡牌的效果改为你摸两张牌.',
						zyile_xuwu_info: '<span class="bluetext" style="color:	#DC143C">虚无技</span>,每次你受到伤害或失去体力后,你获得一个「时」标记,根据「时」标记数量你获得以下效果:〇、摸牌阶段你的摸牌数等于你的体力值(至多为4),你始终跳过弃牌阶段.①、回合开始时,你可以对一名角色造成一点虚无伤害;②、每名角色回合开始时,你可以与其交换一张手牌;③、将一个「时」标记去除发动,下回合其他所有角色跳过摸牌和出牌阶段;④、其他角色于回合外技能失效.',
						zyile_lunhui_info: '<span class="bluetext" style="color:	#DC143C">虚无技</span>,游戏结束后,若你「时」标记数量大于场上所有角色的体力值,则复活所有角色,将所有角色手牌弃置并各摸四张牌,重新洗切牌堆,将战局重新开始.',
						zyile_youshi_info: '回合结束阶段,你可以观看牌堆顶x张牌并背面置于武将牌上称为<饵>.回合开始阶段,你将<饵>加入手牌.每次其他角色对你使用一张与<饵>同花色的牌时,你展示与那张牌同花色的<饵>并置入弃牌堆,终止那张牌的结算,让你获得那张牌并对该名角色造成一点强制伤害.你将牌堆顶等量张牌加入<饵>(x为你已损失体力值和场上存活角色之间的最大值且至少为1).',
						zyile_maisha_info: '<span class="bluetext">锁定技</span>,场上所有复活的角色触发【诱食】后或一名角色一个回合内触发【诱食】超过你的体力值,令其立即强制死亡,你拥有场上已死亡角色的各一个随机技能(回合开始时替换).',
						zyile_xianluo_info: '<span class="bluetext">锁定技</span>,每次其他角色使用或打出一张牌时,展示牌堆顶一张牌,若此牌颜色和其使用或打出的牌颜色不同,则其使用或打出的牌有一半的几率失效.',
						AM_siguan_info: '<span class="bluetext">锁定技</span>,你没有判定·装备区.回合开始时,你将牌堆一张装备牌置入弃牌堆.一回合一次,每当有装备牌进入弃牌堆时,你可以获得这张装备牌的特效(若你获得的特效大于1,你须选择一个特效替换).',
						AM_maigu_info: '<span class="bluetext">锁定技</span>,你与其他角色距离-x(x为弃牌堆内武器牌数量);其他角色与你距离+y(y为弃牌堆内防具牌数量);你摸牌阶段摸牌数量+z(z为弃牌堆内+1马数量);弃牌阶段你少弃置s张牌(s为弃牌堆内-1马数量);你被其他角色指定为卡牌目标时,弃置使用者d张牌(d为弃牌堆内宝物牌数量).',
						AM_xinmei_info: '<span class="bluetext" style="color:	#DC143C">准备阶段</span>,若你已受伤,则你可以选择至多x名角色,你与他们依次将武将牌翻面.锁定技,若你的武将牌背面朝上,则你不能成为锦囊牌的目标且受到的伤害-1(x为你已损失体力值且至多为2).',
						AM_qingwu_info: '<span class="bluetext">锁定技</span>,一名角色武将牌状态发生变化时,若你奇数次触发此技能则摸一张牌,偶数次触发此技能须弃置你区域内的一张牌.',
						RE_zuiqiang_info: '出牌阶段,你可以执行你输入的代码.',
						AM_zhongyan_info: '其他角色弃牌阶段开始时,若其于此回合内使用或打出了至少三种花色的牌,其将与之对应花色的手牌全部弃置并失去一点体力.',
						AM_jueyu_info: '<span class="bluetext">锁定技</span>,手牌数小于其体力值的角色你计算与其的距离始终为一,且其不能响应其他角色使用的卡牌也不能对自己使用【桃】或【酒】.',
						AM_zhongyan_old_info: '<span class="bluetext">锁定技</span>,每当你即将造成一次伤害,你令此伤害加一.只要场上有比你体力值大的角色,则你跳过濒死阶段;你的弃牌阶段始终先于摸牌阶段,你的判定阶段始终在出牌阶段后,摸牌阶段你摸等同于手牌数量的牌(至少为2),出牌阶段若你使用牌的数量不大于摸牌阶段摸牌数量的牌,回合结束你回复一点体力.',
						AM_bolan_info: '<span class="bluetext">锁定技</span>,你跳过摸牌阶段改为从牌堆获得不同类型的各一张牌.',
						AM_xiangwen_info: '每次你于回合内使用一张非转化非装备牌后,你可以将一张牌当作一张与之同类型的牌使用,你须弃置一张牌或失去一点体力.',
						AM_xiangwen_old_info: '<span class="bluetext">准备阶段</span>,你可以弃置任意张牌从牌堆或弃牌堆随机获得等量张能够带来负收益的卡牌;<span class="bluetext">结束阶段</span>,你可以弃置任意张牌从牌堆或弃牌堆随机获得等量张能够带来正收益的卡牌.',
						AM_xuanzhou_old_info: '<span class="bluetext" style="color: #DC143C">出牌阶段</span>,你可以视为使用一个随机主动技能,你须弃置一张牌或失去一点体力.',
						zyile_tiance_info: '每当一名角色失去最后一张手牌时,你可以令其摸两张牌,若如此做你可以视为使用了与其失去的牌类型相同的一张牌,若该名角色不为你.其下次使用牌指定目标时,交换卡牌使用者和卡牌目标.',
						zyile_qiangze_info: '准备阶段,你可以选择跳过一个阶段,若如此做,则其他所有角色下回合跳过此阶段(回合开始阶段、回合结束阶段除外).',
						zyile_danhua_info: '<span class="bluetext">锁定技</span>,每当你体力发动变动时,若你体力值不为全场最大也不为全场最小,则防止之并摸与此次变化数值等量的牌.',
						zyile_kuoshan_info: '其他角色使用牌指定你为唯一目标时,你可以令场上其他所有合法角色也成为此牌目标.',
						zyile_changan_info: '<span class="bluetext">锁定技</span>,每次有角色回复体力时,其须额外弃置一张牌,否则此次回复基数-1;每次有角色受到伤害时,其须额外弃置一张牌,否则此次伤害基数+1.',
						zyile_chizhu_info: '回合结束阶段,你可以展示一名角色的手牌,你可以弃置其中红色与黑色牌差值的牌,则直到下次你的回合开始,该名角色不计入距离计算也不成为卡牌目标并跳过下个回合,你的回合开始时,其摸x张牌并失去x点体力(x为其手牌红色与黑色牌的差值).',
						AM_nongxu_info: '你的任意阶段结束时,若场上<span class="bluetext" style="color: #DC143C">已失效</span>的技能数等于你的手牌数,你可跳过本回合的下一个阶段,额外执行一个任意的阶段(<span class="bluetext" style="color: #C0C0C0">准备、结束阶段除外</span>).',
						AM_guizhi_info: '<span class="bluetext">锁定技</span>,当你于回合内使用或打出牌时,你须指定场上一个<span class="bluetext" style="color: #DC143C">未失效</span>的其他技能,该技能失效直到此回合结束.',
						zyile_yinzhao_info: '锁定技,每当一名其他角色使用的一张牌进入弃牌堆后,你随机对任意名角色视为使用一张同名牌;其他角色使用装备牌时,你获得该装备拥有的特效,你下次使用装备牌时,将获得的所有装备特效清除.',
						RE_huanqian_info: '锁定技,游戏开始时,你从武将牌堆中随机获得两张武将牌,你视为拥有武将牌上的武将技能(锁定技、限定技、觉醒技、主公技除外).每到你的回合开始时或你受到一次伤害后,你随机获得一张武将牌.你可以将拥有锁定技的武将牌当做【闪】使用或打出;将拥有主公技的武将牌当做普通【杀】使用或打出;将拥有限定技的武将牌当做【桃】使用或打出;将拥有觉醒技的武将牌当做【无懈可击】使用或打出.',
						zyile_yanzao_info: '',
						zyile_weizhi_info: '锁定技,你的体力上限始终发生变动(范围为4~99);你的技能始终发生变动(范围为3~10).',
						zyile_xiongyi_info: '锁定技,1、体力值比你多的角色回合内对你使用牌的数量至多为你体力值.2、体力值比你少的角色回合内使用牌指定你为目标时须额外弃置一张牌.3、回合开始前,你将武将牌状态重置.',
						zyile_ezuo_info: '锁定技,其他角色受到伤害、进入濒死状态时,你获得其一个技能,其他角色回复体力时,你须选择:1、减少一点体力上限.2、随机失去一个【恶作】以外的技能.',
						zyile_mengxingx_info: '1、其他角色回合开始阶段,若其体力值小于你,可对其造成一点伤害并获得其一张牌.2、其他角色回合结束阶段,若其体力值大于你,可对其造成一点伤害并获得其一张牌.',
						zyile_eshis_info: '锁定技,1、你获得其他角色使用或打出的♥️️牌.2、你的♥️️牌均视为【桃】,你的♠️️牌均视为【酒】.3、回合开始或回合结束阶段,你增加一点体力上限并回复一点体力摸两张牌.',
						zyile_baoji_info: '锁定技,1、若你体力值达到场上存活角色数的2×或以上,你须失去【饿食】获得【朦行】、【恶作】.2、若你体力值为全场最少或之一时,你须失去【朦行】、【恶作】获得【饿食】.3、回合开始前,你将判定区内所有判定牌弃置.',
						zyile_mengxing2_info: '',
						zyile_henhe_info: '锁定技,体力值比你大的角色,其计算与你的距离始终+x(x为其体力值);体力值比你小的角色,你计算与其的距离始终-x(x为你体力值).',
						zyile_xianyu_info: '摸牌阶段,若攻击范围内不包括你的角色数达到存活人数的一半或以上,你可以跳过并回复一点体力摸三张牌;若你攻击范围内的角色数达到存活人数的一半或以上,你可以跳过并获得他们各一张牌失去一点体力.',
						zyile_jubao_info: '锁定技,若你装备区内没有宝物牌,准备阶段,你从牌库中选择一个宝物效果获得之直到你下回合开始.',
						zyile_weihuo_info: '回合结束阶段,你可弃置一张牌,直到你下回合开始,若其他角色使用或打出同颜色的牌时,若此牌为装备或延时锦囊牌你令其失去一点体力,否则你回复一点体力摸一张牌.',
						zyile_luanxing_info: '其他角色回合结束阶段须交给你一张牌,使用一张锦囊牌,或受到一点伤害.',
						zyile_shiling_info: '锁定技,每当有一名角色死亡,你选择一项:1、你将手牌数和体力补至体力上限.2、你获得这名角色的一个技能.',
						AM_bujing_info: '每当你的牌于其他角色出牌阶段进入弃牌堆后,若此牌与你此阶段使用或打出的第一张牌相同,你可将其置回手牌,此回合结束时你弃置之.',
						AM_yuxi_info: '每当其他角色的牌于你的回合内进入弃牌堆后,若你此回合使用过与此牌花色相同的牌,你可获得之.',
						zyile_chuandi_info: '出牌阶段限X次,你可以将一张手牌交给你攻击范围内的一名角色,从该名角色开始,须将一张手牌交给后一名角色直到你以此法获得一张牌为止.若这张牌颜色和最初那张牌颜色相同,视为你使用了一张【五谷丰登】(X为你体力值).',
						zyile_yanxu_info: '锁定技,回合开始时,你进行一次判定并获得判定牌,若此牌点数大于场上所有角色的体力,你获得一枚标记.X个回合开始时,你弃置这枚标记并将体力和体力上限回复至4(X为这张牌点数).',
						zyile_xionghuo_info: '锁定技,其他角色即将获得牌时,若其手牌大于你,你可以观看其手牌,并可以展示其中一张牌,将其弃置或置于牌堆顶.',
						zyile_fuyi_info: '锁定技,你从牌堆中获得牌改为从牌堆中随机获得等量你手牌中种类最少的一类牌.',
						zyile_xiaoling_info: '出牌阶段X次,你可以<span class="bluetext" style="color:	#DC143C">展示</span>手牌视为你使用了任意一张基本牌;你可以<span class="bluetext" style="color: #228B22">重铸</span>一张手牌视为你使用了任意一张延时锦囊牌;你可以<span class="bluetext" style="color: #FFFF33">弃置</span>一张手牌视为使用了一张普通锦囊牌;你可以<span class="bluetext" style="color: #C0C0C0">摸一张牌</span>将牌堆中的一张装备牌置入你的装备区(X为你已损失体力值且至少为1).',
						zyile_info: '一名其他角色回合开始时,若该角色满足:1、其体力值为1;2、其体力值等于你;3、其手牌数等于你.任意一个条件,你可以将其武将牌回复至游戏初始状态,令其摸三张牌并回复一点体力,以该角色回合计算的第二个回合结束为止,其加入你的阵营.',
						zyile_wuxiang_info: '<span class="bluetext" style="color: #800080">锁定技</span>,你不会进入混乱状态,你的所有牌花色均视为🃏;你使用的延时锦囊牌不进入目标判定区,而是令目标立即进行判定;其他角色回合开始时,须随机进行一次延时锦囊牌的判定.',
						zyile_moyi_info: '<span class="bluetext" style="color: #800080">锁定技</span>,你的武将牌不能<span class="bluetext" style="color: #708090">翻面</span>、<span class="bluetext" style="color: #708090">横置</span>,其他角色的判定始终判定为<span class="bluetext" style="color: #708090">负面</span>.',
						AM_zhenyan_info: '其他角色回合开始时,你可询问该角色在此回合内是否使用某种类别的牌,此回合结束时,若该角色言行不一,其失去一点体力.',
						AM_wuhuo_info: '锁定技,回合开始时,你须声明一种花色和一个点数.此回合内你的牌均视为此花色和点数.',
						AM_shijin_info: '每当一名角色于其回合内(非第一张)使用牌时,若其此回合内未使用过点数大于此牌的牌,你可令其弃置一张牌.',
						AM_yongmian_info: '每当你隐弃置失去牌时,你可以将这些牌移出游戏;当你死亡时,你将以此法移出游戏的牌以任意顺序置于牌堆顶.',
						AM_chenji_info: '出牌阶段结束时,你可令一名其他角色在其下个出牌阶段不能使用或打出你于此阶段内未使用过的类别的牌.',
						AM_jingbian_info: '其他角色回合结束时,若其此回合内未造成过伤害,你可观看其手牌,你可以用一张牌替换其一张手牌.',
						AM_shengguang_info: '每当你于出牌阶段外成为其他角色使用牌的目标后,若你的体力值为1,你可以立即摸一张牌并可使用一张牌.',
						AM_shenyuan_info: '每当其他角色受到不小于其体力值的伤害时,你可以失去一点体力,防止此伤害.',
						AM_zhinian_info: '每当你于一名角色回合使用的第X张非延时锦囊牌结算完进入弃牌堆后,你可弃置X张牌,将此牌置回你的手牌.',
						AM_zhuixin_info: '限定技,出牌阶段,你可弃置X张花色相同的牌,令X名角色各回复X点体力值.',
						AM_shachang_info: '出牌阶段开始时,你可将任意X张手牌(以任意顺序)置于牌堆顶,此阶段内:1、你使用【杀】次数上限+X;2、你每使用一张【杀】,摸一张牌.',
						AM_chanyuan_info: '觉醒技,若你已经连续三个回合没有使用装备牌,回合结束时你减少一点体力上限,将【沙场】中的<置于牌堆顶>描述改为<展示并交给一名角色.',
						zyile_shouji_info: '你的<span class="bluetext" style="color:	#DC143C">出牌阶段限一次</span>,你可以声明一张卡牌名称并将一张手牌置于牌堆底,若牌堆里有和你声明的同名称卡牌,你随机获得一张将牌堆重新洗切.',
						zyile_zhangkong_info: '<span class="bluetext">锁定技</span>,你的回合内,其他角色的手牌对你可见;每当你受到伤害时,你可以获得一名其他角色的所有手牌.',
						AM_yueqian_info: '锁定技,任意角色将武将牌翻回正面时须进行一次判定,若结果为红色你可以令其摸一张牌,黑色则令其失去一点体力.',
						AM_shunxi_info: '锁定技,每当你造成一点伤害时,防止该伤害,你须弃置一张牌,令该名角色翻面;若其已翻面则令其失去一点体力.',
						AM_ziyang_info: '每当你获得一张点数不大于你体力值的牌,你可以展示之并将其置入牌堆顶,回复一点体力.',
						AM_yunyu_info: '当你死亡时,你可以令一名其他角色获得【滋养】.',
						AM_shengzhan_info: '摸牌阶段,若你已受伤,你可以将摸牌数改为x(x为对你造成过伤害的角色数).',
						AM_xueren_info: '每当你受到伤害后,随机将一张装备牌从牌堆置入你的装备区.',
						AM_jiyun_info: '锁定技,每当你使用或打出一张红色牌,你的手牌上限便+1,直到你的回合结束.',
						AM_zhuanyun_info: '结束阶段开始时,若其他角色手牌上限均小于你,你可弃置所有牌,将手牌数补至手牌上限.',
						AM_caijue_info: '限定技,当其他角色受到卡牌造成的伤害时,你可令该角色获得此牌,你可令此次伤害转移至来源.',
						AM_fushen_info: '一名角色回合开始时,你可以将一张手牌置于牌堆顶并将该角色所有手牌移出游戏直到其回合结束.若其于此回合内跳过了任意阶段,则你的所有限定技重置.',
						AM_zaoshi_info: '你可以跳过摸牌阶段,令所有角色选择一项:1、摸一张牌;2、令你摸一张牌.',
						AM_zhuanquan_info: '弃牌阶段阶结束时,若你未于此阶段弃置手牌,你可令所有手牌数大于你的角色失去一点体力.',
						AM_huoxue_info: '回合外每当一名角色使用的非延时锦囊结算后,若此牌目标至少有一个与其距离为一,你可立即将一张手牌当成此牌使用.若你没有手牌,你摸一张牌.',
						AM_jiyu_info: '若你的手牌数不大于你的体力值,你可以将一张非基本牌当成任意基本牌使用或打出.',
						AM_duoluo_info: '出牌阶段开始时,你可令一名角色展示并交给你一张牌,该角色所有此花色的牌均视为【酒】直到其回合结束.',
						AM_chaoxi_info: '准备阶段开始时,你可令所有手牌数小于你的角色将手牌补至与你相等.若如此做,结束阶段开始时,所有手牌数大于你的角色将手牌弃置至与你相等.',
						AM_wangzhou_info: '锁定技,每当一名角色濒死结算完毕后,若其存活,视为你对其使用一张【杀】.',
						AM_huangquan_info: '每当你对自己造成伤害时.你可弃置一张♠️️牌防止此伤害,若如此做,你令一名角色回复所有体力.',
						zyile_boss: '挑战BOSS',
						zyile_basic: '基本',
					},
				};
				for (var i in zyile_characterPack.character) {
					if (!zyile_characterPack.character[i][4]) {
						zyile_characterPack.character[i][4] = [];
					}
					zyile_characterPack.character[i][4].push('ext:概念武将/image/' + i + '.jpg');
				}
				lib.arenaReady.push(function () {
					for (var i of zyile_characterPack.characterSort.zyile.zyile_boss) lib.rank.rarity.legend.push(i);
					for (var i of zyile_characterPack.characterSort.zyile.zyile_basic) lib.rank.rarity.epic.push(i);
				});
				lib.config.all.characters.add('zyile');
				lib.config.characters.add('zyile');
				lib.translate.zyile_character_config = '<span style="-webkit-animation:zyile_character_config 20s infinite;animation:zyile_character_config 20s infinite;">概念武将</span>';
				return zyile_characterPack;
			});
			lib.zyileReadContentLoaded = [];
			let push = [].push;
			lib.zyileReadContentLoaded.push = function (items) {
				if (this.load) {
					items();
				} else {
					push.call(this, items);
				}
			};
			/**
			 * ajax请求
			 */
			(function (w) {
				/**
				 * 封装普通的xhr请求
				 * @param params
				 * @returns {Promise<unknown>}
				 */
				var json = function json(params) {
					return new Promise((resolve, reject) => {
						params.type = (params.type || 'GET').toUpperCase();
						params.data = formatParams(params.data);
						var xhr = null;
						xhr = new XMLHttpRequest();
						params.type = params.type ? params.type.toLocaleUpperCase() : 'GET';
						if (params.type == 'POST') {
							xhr.open(params.type, params.url, true);
							xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
							xhr.send(params.data);
						} else {
							xhr.open(params.type, params.url + '?' + params.data, params.async || true);
							xhr.send(null);
						}
						if ('object' === typeof params.RequestHeaders) {
							for (var i in params.RequestHeaders) {
								xhr.setRequestHeader(i, params.RequestHeaders[i]);
							}
						}
						if ('string' === typeof params.ReponseType) {
							xhr.responseType = params.ReponseType;
						}
						xhr.onreadystatechange = function () {
							if (xhr.readyState == 4) {
								var status = xhr.status;
								if (status >= 200 && status < 300) {
									var response = { data: '', type: '' };
									var type = xhr.getResponseHeader('Content-type');
									if (type === null) response = { data: xhr.response, type: null };
									else if (type.indexOf('xml') !== -1 && xhr.responseXML) {
										response.data = xhr.responseXML;
										response.type = 'xml';
									} else if (type === 'application/json') {
										response.data = JSON.parse(xhr.responseText);
										response.type = 'json';
									} else {
										try {
											response.type = 'text';
											response.data = xhr.responseText;
										} catch (e) {
											response = { data: xhr.response, type: xhr.responseType };
										}
									}
									params.success && params.success(response.data, response, xhr);
									resolve(response.data);
								} else if (status === 0 && xhr.response) {
									params.success && params.success(xhr.response, xhr);
									resolve(xhr.response);
								} else {
									params.error && params.error(status);
									reject({ status: status });
								}
							}
						};
						if (typeof params.timeout === 'number') {
							xhr.timeout = params.timeout;
						}
					});
				};
				/**
				 * 封装jsonp请求
				 * @param params
				 * @returns {Promise<unknown>}
				 */
				var jsonp = function jsonp(params) {
					return new Promise((resolve, reject) => {
						var callbackName = params.jsonp;
						var head = document.getElementsByTagName('head')[0];
						params.data.callback = callbackName;
						var data = formatParams(params.data);
						var script = document.createElement('script');
						head.appendChild(script);
						window[callbackName] = function (json) {
							head.removeChild(script);
							script.timer && clearTimeout(script.timer);
							window[callbackName] = null;
							params.success && params.success(json);
							resolve(json);
						};
						script.src = params.url + '?' + data;
						if (params.time) {
							script.timer = setTimeout(function () {
								window[callbackName] = null;
								head.removeChild(script);
								params.error &&
									params.error({
										message: '超时',
									});
								throw '超时';
							}, time);
						}
					});
				};
				var formatParams = function formatParams(data) {
					var arr = [];
					data = data || {};
					for (var name in data) {
						arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
					}
					arr.push('v=' + random());
					return arr.join('&');
				};
				function random() {
					return Math.floor(Math.random() * 10000 + 500);
				}
				w.xhr = function xhr(params) {
					params = params || {};
					if (typeof params === 'string') params = { url: params };
					params.data = params.data || {};
					return params.jsonp ? jsonp(params) : json(params);
				};
			})(window);
			lib.zyile_common = {
				isEmpty(value) {
					if (value == null || this.trim(value) === '') {
						return true;
					}
					return false;
				},
				isNotEmpty(value) {
					return !lib.zyile_common.isEmpty(value);
				},
				nullToStr(value) {
					if (lib.zyile_common.isEmpty(value)) {
						return '-';
					}
					return value;
				},
				visible(value) {
					if (lib.zyile_common.isEmpty(value) || value === true) {
						return true;
					}
					return false;
				},
				trim(value) {
					if (value == null || value == undefined) {
						return '';
					}
					return value.toString().replace(/(^\s*)|(\s*$)|\r|\n/g, '');
				},
				equals(str, that) {
					return str === that;
				},
				equalsIgnoreCase(str, that) {
					return String(str).toUpperCase() === String(that).toUpperCase();
				},
				split(str, sep, maxLen) {
					if (lib.zyile_common.isEmpty(str)) {
						return null;
					}
					var value = String(str).split(sep);
					return maxLen ? value.slice(0, maxLen - 1) : value;
				},
				sprintf(str) {
					var args = arguments,
						flag = true,
						i = 1;
					str = str.replace(/%s/g, function () {
						var arg = args[i++];
						if (typeof arg === 'undefined') {
							flag = false;
							return '';
						}
						return arg;
					});
					return flag ? str : '';
				},
				getItemField(item, field) {
					var value = item;
					if (typeof field !== 'string' || Object.hasOwn(item, field)) {
						return item[field];
					}
					var props = field.split('.');
					for (var p in props) {
						value = value && value[props[p]];
					}
					return value;
				},
				random(min, max) {
					return Math.floor(Math.random() * max + min);
				},
				startWith(value, start) {
					var reg = new RegExp('^' + start);
					return reg.test(value);
				},
				endWith(value, end) {
					var reg = new RegExp(end + '$');
					return reg.test(value);
				},
				uniqueFn(array) {
					var result = [];
					var hashObj = {};
					for (var i = 0; i < array.length; i++) {
						if (!hashObj[array[i]]) {
							hashObj[array[i]] = true;
							result.push(array[i]);
						}
					}
					return result;
				},
				join(array, separator) {
					if (lib.zyile_common.isEmpty(array)) {
						return null;
					}
					return array.join(separator);
				},
				getLength(obj) {
					return Object.keys(obj).length;
				},
				isMobile() {
					return navigator.userAgent.match(/(Android|iPhone|SymbianOS|Windows Phone|iPad|iPod)/i);
				},
				htValid(text) {
					var patten = new RegExp(/<[^>]+>/g);
					return patten.test(text);
				},
				numValid(text) {
					var patten = new RegExp(/^[0-9]+$/);
					return patten.test(text);
				},
				enValid(text) {
					var patten = new RegExp(/^[a-zA-Z]+$/);
					return patten.test(text);
				},
				enNumValid(text) {
					var patten = new RegExp(/^(?=.*[a-zA-Z]+)(?=.*[0-9]+)[a-zA-Z0-9]+$/);
					return patten.test(text);
				},
				charValid(text) {
					var patten = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[-_])[A-Za-z\d-_]{6,}$/);
					return patten.test(text);
				},
			};
			get.is.node = function (obj) {
				var str = Object.prototype.toString.call(obj);
				if (str && str.indexOf('[object HTML') === 0) return true;
				return false;
			};
			ui.create.zyile_node = function () {
				var tagName, str, innerHTML, position, position2, style, divposition, listen;
				for (var i = 0; i < arguments.length; i++) {
					if (typeof arguments[i] == 'string') {
						if (typeof tagName == 'string') {
							innerHTML = arguments[i];
						} else {
							tagName = arguments[i];
						}
					} else if (get.is.node(arguments[i])) position = arguments[i];
					else if (typeof arguments[i] == 'number') position2 = arguments[i];
					else if (get.itemtype(arguments[i]) == 'divposition') divposition = arguments[i];
					else if (typeof arguments[i] == 'object') style = arguments[i];
					else if (typeof arguments[i] == 'function') listen = arguments[i];
				}
				if (tagName == undefined) {
					tagName = 'div';
				} else {
					var i1 = tagName.indexOf('.');
					var i2 = tagName.indexOf('#');
					if (i1 != -1 || i2 != -1) {
						if (i2 != -1 && i2 < i1) {
							i1 = i2;
						}
						str = tagName.slice(i1);
						tagName = tagName.slice(0, i1);
					}
				}
				var node = document.createElement(tagName);
				if (str) {
					for (var i = 0; i < str.length; i++) {
						if (str[i] == '.') {
							if (node.className.length != 0) {
								node.className += ' ';
							}
							while (str[i + 1] != '.' && str[i + 1] != '#' && i + 1 < str.length) {
								node.className += str[i + 1];
								i++;
							}
						} else if (str[i] == '#') {
							while (str[i + 1] != '.' && str[i + 1] != '#' && i + 1 < str.length) {
								node.id += str[i + 1];
								i++;
							}
						}
					}
				}
				if (position) {
					if (typeof position2 == 'number' && position.childNodes.length > position2) {
						position.insertBefore(node, position.childNodes[position2]);
					} else {
						position.appendChild(node);
					}
				}
				if (style) HTMLDivElement.prototype.css.call(node, style);
				if (divposition) n(node, divposition);
				if (innerHTML) node.innerHTML = innerHTML;
				if (listen) node.addEventListener('click', listen);
				return node;
			};
			HTMLDivElement.prototype.inits = true;
			if (!Array.isArray(lib.element.player.inits)) lib.element.player.inits = [];
			if (!Array.isArray(lib.element.card.inits)) lib.element.card.inits = [];
			window.zyile_content = [];
			window.zyile_content.push = function (items) {
				if (this.load) {
					items(lib, game, ui, get, ai, _status, config);
				} else {
					push.call(this, items);
				}
			};
			window.zyile_extension_Menu = {};
			(function (w) {
				/**
				 * 封装普通的xhr请求
				 * @param params
				 * @returns {Promise<unknown>}
				 */
				var json = function json(params) {
					return new Promise((resolve, reject) => {
						params.type = (params.type || 'GET').toUpperCase();
						params.data = formatParams(params.data);
						var xhr = null;
						xhr = new XMLHttpRequest();
						params.type = params.type ? params.type.toLocaleUpperCase() : 'GET';
						if (params.type == 'POST') {
							xhr.open(params.type, params.url, true);
							xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
							xhr.send(params.data);
						} else {
							xhr.open(params.type, params.url + '?' + params.data, true);
							xhr.send(null);
						}
						if ('object' === typeof params.RequestHeaders) {
							for (var i in params.RequestHeaders) {
								xhr.setRequestHeader(i, params.RequestHeaders[i]);
							}
						}
						if ('string' === typeof params.ReponseType) {
							xhr.responseType = params.ReponseType;
						}
						xhr.onreadystatechange = function () {
							if (xhr.readyState == 4) {
								var status = xhr.status;
								if (status >= 200 && status < 300) {
									var response = { data: '', type: '' };
									var type = xhr.getResponseHeader('Content-type');
									if (type === null) response = { data: xhr.response, type: null };
									else if (type.indexOf('xml') !== -1 && xhr.responseXML) {
										response.data = xhr.responseXML;
										response.type = 'xml';
									} else if (type === 'application/json') {
										response.data = JSON.parse(xhr.responseText);
										response.type = 'json';
									} else {
										try {
											response.type = 'text';
											response.data = xhr.responseText;
										} catch (e) {
											response = { data: xhr.response, type: xhr.responseType };
										}
									}
									params.success && params.success(response.data, response, xhr);
									resolve(response.data);
								} else if (status === 0 && xhr.response) {
									params.success && params.success(xhr.response, xhr);
									resolve(xhr.response);
								} else {
									params.error && params.error(status);
									reject({ status: status });
								}
							}
						};
						if (typeof params.timeout === 'number') {
							xhr.timeout = params.timeout;
						}
					});
				};
				/**
				 * 封装jsonp请求
				 * @param params
				 * @returns {Promise<unknown>}
				 */
				var jsonp = function jsonp(params) {
					return new Promise((resolve, reject) => {
						var callbackName = params.jsonp;
						var head = document.getElementsByTagName('head')[0];
						params.data.callback = callbackName;
						var data = formatParams(params.data);
						var script = document.createElement('script');
						head.appendChild(script);
						window[callbackName] = function (json) {
							head.removeChild(script);
							script.timer && clearTimeout(script.timer);
							window[callbackName] = null;
							params.success && params.success(json);
							resolve(json);
						};
						script.src = params.url + '?' + data;
						if (params.time) {
							script.timer = setTimeout(function () {
								window[callbackName] = null;
								head.removeChild(script);
								params.error &&
									params.error({
										message: '超时',
									});
								throw '超时';
							}, time);
						}
					});
				};
				var formatParams = function formatParams(data) {
					var arr = [];
					data = data || {};
					for (var name in data) {
						arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
					}
					arr.push('v=' + random());
					return arr.join('&');
				};
				function random() {
					return Math.floor(Math.random() * 10000 + 500);
				}
				w.xhr = function xhr(params) {
					params = params || {};
					if (typeof params === 'string') params = { url: params };
					params.data = params.data || {};
					return params.jsonp ? jsonp(params) : json(params);
				};
			})(window);
			/**
			 * 防止未联网加载时出现错误alert导致阻塞线程从而可能会发生游戏未正常载入情况
			 * @param func
			 */
			var asyncAlert = (func) => {
				if (lib.arenaReady) {
					lib.arenaReady.push(func);
				} else {
					func();
				}
			};
			window
				.xhr('https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/update.js')
				.then((rejson) => {
					window.eval(rejson);
					if (window.概念武将_version * 10 > lib.config.概念武将_version * 10) {
						asyncAlert(function () {
							ui.create.system(
								'概念武将已更新',
								function () {
									this.delete();
								},
								true
							);
						});
						lib.extensionMenu.extension_概念武将.download_extension.name = "<span style='text-decoration: underline'>更新概念武将</span>";
						lib.extensionMenu.extension_概念武将.download_extension.onclick = function () {
							if (this.updates) return window.alert('请等待更新');
							if (this.updates == false) return undefined;
							this.firstChild.innerHTML = '正在更新...';
							this.updates = true;
							window
								.xhr('https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/update.js')
								.then((response) => {
									return new Promise((onResolved, onRejectd) => {
										game.download(
											'https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/extension.js',
											'extension/概念武将/extension.js',
											() => {
												this.firstChild.innerHTML = '';
												ui.create.zyile_node('a', '更新完毕,点击重启', this.firstChild, (event) => game.reload());
												this.updates = false;
											},
											(error) => onRejectd(error)
										);
									});
								})
								.catch((error) => {
									asyncAlert(function () {
										window.alert(error);
									});
									console.warn('概念武将:更新extension文件时出错:', error);
									this.firstChild.innerHTML = '<a href="#" onclick=' + this.onclick + '>下载失败,点击重新下载</a>';
									delete this.updates;
								});
						};
					}
				})
				.catch((error) => {
					console.warn(error);
					lib.extensionMenu.extension_概念武将.download_extension.name = '连接失败';
				});
			if (game.getFileList) {
				game.getFileList('extension/概念武将', function (a, b) {
					for (var j of b) {
						var str = j.toString();
						if (str != 'extension.js' && /\.js$/.test(str)) {
							var script = document.createElement('script');
							script.src = 'extension/概念武将/' + str;
							script.setAttribute('async', 'async');
							document.head.appendChild(script);
							script.addEventListener('error', function () {
								script.remove();
							});
							script.addEventListener('load', function () {
								window.zyile_import && window.zyile_import(lib, game, ui, get, ai, _status, config);
								delete window.zyile_import;
							});
						}
						if (/\.css$/.test(str)) {
							var style = document.createElement('link');
							style.rel = 'stylesheet';
							style.href = 'extension/概念武将/' + str;
							document.head.appendChild(style);
						}
					}
				});
			}
		},
		config: {
			死亡移除: {
				name: '<span class="Qmenu">死亡移除</span>',
				intro: '死亡后移出游戏',
				init: true,
				onclick(result) {
					game.saveConfig('dieremove', result);
				},
			},
			intro: {
				clear: true,
				nopointer: true,
				name: `<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>`,
			},
			enable_boss: {
				name: '非挑战模式使用挑战boss',
				init: false,
			},
			shenqi_equip: {
				name: '神器',
				init: true,
			},
			moshu_enable: {
				name: '魔法之书',
				init: true,
				intro: '关闭后会引发纸上魔法的魔术弹窗bug,不能获取魔书',
			},
			tenMan: {
				name: '十人场身份',
				init: '1',
				item: {
					1: '5反1内',
					2: '4反2内',
				},
			},
			tenZoom_automatic: {
				name: '十人身份自动缩放',
				init: 'false',
				intro: '目前不建议开启.',
				item: {
					0.5: '50%',
					0.6: '60%',
					0.7: '70%',
					0.8: '80%',
					0.9: '90%',
					false: '关闭',
				},
			},
			shen_group: {
				name: '神武将选择势力',
				init: false,
			},
			download_plug_in_unit: {
				name: "<span style='text-decoration: underline'>下载插件</span>",
				onclick() {
					if (typeof window.xhr !== 'function') return alert('请开启该扩展重启后重试');
					if (this.updates) return alert('请等待更新', { icon: 7 });
					if (this.updates == false) return undefined;
					game.multiDownload2 = function (list, onsuccess, onerror, onfinish, process, dev) {
						list = list.slice(0);
						var download = function () {
							if (list.length) {
								var current = list.shift();
								var current2;
								if (typeof process == 'function') {
									current2 = process(current);
								} else {
									current2 = current;
								}
								if (current.indexOf('theme') == 0) {
									game.print(current.slice(6));
								} else if (current.indexOf('image/skin') == 0) {
									game.print(current.slice(11));
								} else {
									game.print(current.slice(current.lastIndexOf('/') + 1));
								}
								game.download(
									current,
									current2,
									function () {
										if (onsuccess) onsuccess(list.length, current, current2);
										download();
									},
									function () {
										if (onerror) onerror(list.length, current, current2);
										download();
									},
									dev
								);
							} else {
								if (onfinish) onfinish();
							}
						};
						download();
					};
					var ReDownloadFile = [];
					var download = (DownloadFile) => {
						this.updates = true;
						this.firstChild.innerHTML = DownloadFile[0];
						var updates = DownloadFile.map((value) => {
							return 'https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/' + value;
						});
						game.multiDownload(
							updates,
							/**下载成功执行的回调函数*/
							(length, fileName, fileLocation) => {
								fileName = fileName.replace('https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/', '');
								this.firstChild.innerHTML = fileName;
								xhr('extension/概念武将/' + fileName).then((value) => {
									if (value == 'Too Many Requests') ReDownloadFile.add(fileName);
								});
							} /**下载失败执行的回调函数*/,
							function onerror(length, fileName, fileLocation) {
								fileName = fileName.replace('https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/', '');
								ReDownloadFile.add(fileName);
							} /**下载完毕执的回调函数*/,
							() => {
								if (ReDownloadFile.length) {
									download(ReDownloadFile.slice(0));
									ReDownloadFile = [];
									return;
								}
								setTimeout(() => {
									this.firstChild.innerHTML = '';
									lib.config.zyile_extension_Menu_version = window.zyile_extension_Menu_version;
									ui.create.zyile_node('span', this.firstChild, '下载完毕,点击重启', function () {
										game.reload();
									});
									this.updates = false;
								}, 500);
								delete window.概念武将_updates;
							} /**更改下载到本地的地址*/,
							(current) => {
								return current.replace('https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/', 'extension/概念武将/');
							}
						);
					};
					if (window.概念武将_updates && window.概念武将_updates.length) {
						download(window.概念武将_updates);
					} else {
						window
							.xhr('https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/update.js')
							.then((value) => {
								eval(value);
								if (window.概念武将_updates.length) download(window.概念武将_updates);
							})
							.catch((reason) => {
								delete this.updates;
								window.alert('连接失败');
								this.firstChild.innerHTML = '';
								ui.create.zyile_node('span', this.firstChild, '下载插件', function () {
									this.onclick();
								});
								console.warn(reason);
							});
					}
				},
				clear: true,
			},
			download_plug_in_unit_material: {
				name: "<span style='text-decoration: underline'>下载插件素材</span>",
				onclick() {
					if (typeof window.xhr !== 'function') return alert('请开启该扩展重启后重试');
					window
						.xhr('https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/image/material_update.js')
						.then((value) => {
							window.eval(value);
							var num_material = 0,
								list_material = [],
								list = window.概念武将_皮肤_素材,
								func = () => {
									var url_search = 'extension/概念武将/' + list[num_material];
									this.innerHTML = "<span style='text-decoration: underline'>检索中:0/" + list_material.length + '</span><br>(' + url_search.slice(15, url_search.length) + ')';
									game.readFile(
										url_search,
										() => {
											if (num_material < list.length - 1) {
												num_material++;
												func();
											} else {
												func_down();
											}
										},
										() => {
											list_material.push(list[num_material]);
											if (num_material < list.length - 1) {
												num_material++;
												func();
											} else {
												func_down();
											}
										}
									);
								},
								func_down = () => {
									if (list_material.length == 0) {
										window.alert('素材已是最新');
										this.innerHTML = "<span style='text-decoration: underline'>下载素材</span>";
									} else {
										var num = 0;
										var num1 = list_material.length;
										this.innerHTML = "<span style='text-decoration: underline'>正在下载:" + num + '/' + num1 + '</span><br>(' + list_material[0] + ')';
										var download = () => {
											game.download(
												'https://zyile.coding.net/p/noname/d/noname/git/raw/master/concept/image/' + list_material[0],
												'extension/概念武将/' + list_material[0],
												() => {
													num++;
													list_material.remove(list_material[0]);
													if (list_material.length) {
														this.innerHTML = "<span style='text-decoration: underline'>正在下载:" + num + '/' + num1 + '</span><br>(' + list_material[0] + ')';
														download();
													} else {
														this.innerHTML = "<span style='text-decoration: underline'>下载完成</span>";
													}
												},
												() => {
													alert('下载失败(' + list_material[0] + ')');
													game.print('下载失败(' + list_material[0] + ')');
													this.innerHTML = "<span style='text-decoration: underline'>重新下载</span>";
												}
											);
										};
										download();
									}
								};
							func();
						})
						.catch((error) => {
							console.warn(error);
							alert(error);
							this.innerHTML = "<span style='text-decoration: underline'>重新下载</span>";
						});
				},
				clear: true,
			},
			download_extension: {
				name: '暂无更新',
				onclick() { },
				clear: true,
			},
		},
	};
});

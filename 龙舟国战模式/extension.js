game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '龙舟国战模式',
		content(config, pack) { },
		precontent() {
			lib.skill.jinshilichoince = {
				trigger: { player: ['gameDrawAfter', 'phaseBegin'] },
				forced: true,

				popup: false,
				silent: true,
				filter(event, player) {
					return player.group;
				},
				content() {
					'step 0';
					const controls = ['wei', 'jinshili'];
					const str = '请选择一个势力';
					player.chooseControl(controls, ui.create.dialog(str, 'hidden')).ai = function () {
						return Math.floor(Math.random() * controls.length);
					};
					('step 1');
					if (result.control) {
						player.group = result.control;
						if (get.mode() == 'guozhan' || get.mode() == 'longzhouguozhan' || get.mode() == 'guozhanpaiweipw' || get.mode() == 'guozhanpaiweizx') {
							player.identity = result.control;
							player._group = result.control;
							player.node.identity.firstChild.innerHTML = get.translation(result.control);
							player.node.identity.dataset.color = player.identity;
							if (player.name) {
								lib.character[player.name][1] = result.control;
							}
							if (player.name1) {
								lib.character[player.name1][1] = result.control;
							}
							if (player.name2) {
								lib.character[player.name2][1] = result.control;
							}
						} else {
							if (player.name) {
								lib.character[player.name][1] = result.control;
							}
							if (player.name1) {
								lib.character[player.name1][1] = result.control;
							}
							if (player.name2) {
								lib.character[player.name2][1] = result.control;
							}
						}
					}
					('step 2');
					switch (player.group) {
						case 'wei':
							if (player.node.name) {
								player.node.name.style.color = 'blue';
							}
							if (player.node.name2) {
								player.node.name2.style.color = 'blue';
							}
							break;
						case 'shu':
							if (player.node.name) {
								player.node.name.style.color = 'red';
							}
							if (player.node.name2) {
								player.node.name2.style.color = 'red';
							}
							break;
						case 'wu':
							if (player.node.name) {
								player.node.name.style.color = 'green';
							}
							if (player.node.name2) {
								player.node.name2.style.color = 'green';
							}
							break;
						case 'qun':
							if (player.node.name) {
								player.node.name.style.color = 'white';
							}
							if (player.node.name2) {
								player.node.name2.style.color = 'white';
							}
							break;
						case 'jinshili':
							if (player.node.name) {
								player.node.name.style.color = '#4B0082';
							}
							if (player.node.name2) {
								player.node.name2.style.color = '#4B0082';
							}
							break;
						default:
							if (player.node.name) {
								player.node.name.dataset.nature = 'fire';
							}
					}
				},
			};

			game.addMode(
				'longzhouguozhan',
				{
					startBefore() {
						lib.skill._siguolongzhouguozhan = {
							trigger: { global: 'gameDrawEnd' },
							silent: true,
							content() {
								game.players.map((i) => {
									i.setIdentity(`<img src="${lib.assetURL}extension/龙舟国战模式/${i.group}shilishiijing.png" width="25" height="25">`);
									const slmap = { wei: { skill: '魏舡', prefix: 'weiguolongchuan', name: '魏国龙船' }, shu: { skill: '蜀舡', prefix: 'shuguolongchuan', name: '蜀国龙船' }, wu: { skill: '吴舡', prefix: 'wuguolongchuan', name: '吴国龙船' }, qun: { skill: '群舡', prefix: 'qunxionglongchuan', name: '群雄龙船' } };
									const m = slmap[i.group];
									if (m) {
										i.addSkill(m.skill);
										i.markSkillCharacter(m.skill, m.prefix + m.name, '势力龙船获得技能');
									}
								});
							},
						};

						lib.element.content.gameDraw = function () {
							'step 0';
							if (_status.brawl && _status.brawl.noGameDraw) {
								event.finish();
								return;
							}
							const end = player;
							let numx = num;
							do {
								if (typeof num == 'function') {
									numx = num(player);
								}
								player.directgain(get.cards(numx));
								if (player.singleHp === true && get.mode() != 'guozhan' && get.mode() != 'longzhouguozhan') {
									player.doubleDraw();
								}
								player = player.next;
							} while (player != end);
							event.changeCard = get.config('change_card');
							if (lib.config.mode != 'identity' && lib.config.mode != 'guozhan') {
								event.changeCard = 'disabled';
							}
							('step 1');
							if (event.changeCard != 'disabled' && !_status.auto) {
								event.dialog = ui.create.dialog('是否使用手气卡？');
								ui.create.confirm('oc');
								event.custom.replace.confirm = function (bool) {
									_status.event.bool = bool;
									game.resume();
								};
							} else {
								event.finish();
							}
							('step 2');
							if (event.changeCard == 'once') {
								event.changeCard = 'disabled';
							} else if (event.changeCard == 'twice') {
								event.changeCard = 'once';
							} else if (event.changeCard == 'disabled') {
								event.bool = false;
								return;
							}
							_status.imchoosing = true;
							game.pause();
							('step 3');
							_status.imchoosing = false;
							if (event.bool) {
								if (game.changeCoin) {
									game.changeCoin(-3);
								}
								const hs = game.me.getCards('h');
								game.addVideo('lose', game.me, [get.cardsInfo(hs), [], []]);

								for (const i of hs) {
									i.discard(false);
								}

								game.me.directgain(get.cards(hs.length));
								event.goto(2);
							} else {
								event.dialog.close();
								ui.confirm.close();
								event.finish();
							}
						};
						const playback = localStorage.getItem(lib.configprefix + 'playback');
						for (const i in lib.characterPack.mode_guozhan) {
							if (!get.config('onlyguozhan') && !playback) {
								if (lib.character[i.slice(3)]) {
									continue;
								}
							}
							lib.character[i] = lib.characterPack.mode_guozhan[i];
							if (!lib.character[i][4]) {
								lib.character[i][4] = [];
							}
							if (!lib.translate[i]) {
								lib.translate[i] = lib.translate[i.slice(3)];
							}
						}
						for (const i in lib.character) {
							if (lib.character[i][1] == 'shen') {
								if (lib.character[i][4] && lib.group.includes(lib.character[i][4][0])) {
									lib.character[i][1] = lib.character[i][4][0];
								} else {
									lib.character[i][1] = 'qun';
								}
							}
						}
					},
					onreinit() {
						const pack = lib.characterPack.mode_guozhan;
						for (const i in pack) {
							if (!lib.configOL.onlyguozhan) {
								if (lib.character[i.slice(3)]) {
									continue;
								}
							}
							lib.character[i] = pack[i];
							if (!lib.character[i][4]) {
								lib.character[i][4] = [];
							}
							if (!lib.translate[i]) {
								lib.translate[i] = lib.translate[i.slice(3)];
							}
						}
					},
					start() {
						'step 0';
						const playback = localStorage.getItem(lib.configprefix + 'playback');
						if (playback) {
							ui.create.me();
							ui.arena.style.display = 'none';
							ui.system.style.display = 'none';
							_status.playback = playback;
							localStorage.removeItem(lib.configprefix + 'playback');
							const store = lib.db.transaction(['video'], 'readwrite').objectStore('video');
							store.get(parseInt(playback)).onsuccess = function (e) {
								if (e.target.result) {
									game.playVideoContent(e.target.result.video);
								} else {
									alert('播放失败:找不到录像');
									game.reload();
								}
							};
							event.finish();
						} else if (_status.connectMode) {
							game.waitForPlayer();
						} else {
							if (get.config('guozhanpile')) {
								lib.card.list = lib.guozhanPile.slice(0);
								game.fixedPile = true;
							}
							game.prepareArena();

							game.showChangeLog();
						}
						if (!_status.connectMode) {
							_status.mode = get.config('guozhan_mode');
							if (_status.brawl && _status.brawl.submode) {
								_status.mode = _status.brawl.submode;
							}
						}
						('step 1');
						if (_status.connectMode) {
							if (lib.configOL.guozhanpile) {
								lib.card.list = lib.guozhanPile.slice(0);
								game.fixedPile = true;
							}
							game.broadcastAll(function (pack) {
								for (const i of game.players) {
									i.node.name.hide();
									i.node.name2.hide();
								}

								lib.characterPack.mode_guozhan = pack;
								for (const i in pack) {
									if (!lib.configOL.onlyguozhan) {
										if (lib.character[i.slice(3)]) {
											continue;
										}
									}
									lib.character[i] = pack[i];
									if (!lib.character[i][4]) {
										lib.character[i][4] = [];
									}
									if (!lib.translate[i]) {
										lib.translate[i] = lib.translate[i.slice(3)];
									}
								}
							}, lib.characterPack.mode_guozhan);
							game.randomMapOL();
						} else {
							for (const i of game.players) {
								i.node.name.hide();
								i.node.name2.hide();
								i.getId();
							}

							if (_status.brawl && _status.brawl.chooseCharacterBefore) {
								_status.brawl.chooseCharacterBefore();
							}
							game.chooseCharacter();
						}
						('step 2');
						if (ui.coin) {
							_status.coinCoeff = get.coinCoeff([game.me.name1, game.me.name2]);
						}
						let player;
						if (_status.cheat_seat) {
							const seat = _status.cheat_seat.link;
							if (seat == 0) {
								player = game.me;
							} else {
								player = game.players[game.players.length - seat];
							}
							if (!player) {
								player = game.me;
							}
							delete _status.cheat_seat;
						} else {
							player = game.players[Math.floor(Math.random() * game.players.length)];
						}
						event.trigger('gameStart');

						game.gameDraw(player);
						game.broadcastAll(function (player) {
							for (const i of game.players) {
								i.name = 'unknown' + get.distance(player, i, 'absolute');
								i.node.name_seat = ui.create.div('.name.name_seat', get.verticalStr(lib.translate[i.name]), i);
							}
						}, player);

						const players = get.players(lib.sort.position);
						const info = [];
						for (let i = 0; i < players.length; i++) {
							info.push({
								name: game.players[i].name,
								translate: lib.translate[game.players[i].name],
								name1: players[i].name1,
								name2: players[i].name2,
							});
						}
						((_status.videoInited = true), game.addVideo('init', null, info));
						game.showIdentity(true);
						game.phaseLoop(player);
					},
					skill: {
						gzsuishi: {
							audio: 'suishi',
							trigger: { global: 'dying' },
							forced: true,
							_priority: 6.5,
							check() {
								return false;
							},
							filter(event, player) {
								return event.player != player && event.parent.name == 'damage' && event.parent.source && event.parent.source.isFriendsOf(player);
							},
							content() {
								player.draw();
							},
							group: 'gzsuishi2',
						},
						gzsuishi2: {
							audio: 'suishi',
							trigger: { global: 'dieAfter' },
							forced: true,
							filter(event, player) {
								return event.player.isFriendsOf(player);
							},
							content() {
								player.loseHp();
							},
						},
						_hongfa2: {
							trigger: { player: 'chooseToRespondBegin' },
							forced: true,
							filter(event, player) {
								if (event.responded) {
									return false;
								}
								if (!event.filterCard({ name: 'sha' })) {
									return false;
								}
								const zhu = get.zhu(player, 'hongfa');
								if (zhu && zhu.storage.huangjintianbingfu && zhu.storage.huangjintianbingfu.length) {
									return true;
								}
								return false;
							},
							content() {
								'step 0';
								var zhu = get.zhu(player, 'hongfa');
								player
									.chooseCardButton(get.prompt('huangjintianbingfu'), zhu.storage.huangjintianbingfu)
									.set('ai', function () {
										if (_status.event.goon) {
											return 1;
										}
										return 0;
									})
									.set('goon', player.countCards('h', 'sha') == 0);
								('step 1');
								if (result.bool) {
									const card = result.links[0];
									trigger.untrigger();
									trigger.responded = true;
									trigger.result = { bool: true, card: { name: 'sha' }, cards: [card] };
									var zhu = get.zhu(player, 'hongfa');
									zhu.storage.huangjintianbingfu.remove(card);
								}
							},
						},
						_hongfa: {
							enable: 'chooseToUse',
							filter(event, player) {
								if (!event.filterCard({ name: 'sha' }, player)) {
									return false;
								}
								const zhu = get.zhu(player, 'hongfa');
								if (zhu && zhu.storage.huangjintianbingfu && zhu.storage.huangjintianbingfu.length) {
									return true;
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									const zhu = get.zhu(player, 'hongfa');
									return ui.create.dialog('黄巾天兵符', zhu.storage.huangjintianbingfu, 'hidden');
								},
								backup(links, player) {
									return {
										filterCard() {
											return false;
										},
										selectCard: -1,
										viewAs: { name: 'sha' },
										cards: links,
										onuse(result, player) {
											result.cards = lib.skill[result.skill].cards;
											const card = result.cards[0];
											const zhu = get.zhu(player, 'hongfa');
											zhu.storage.huangjintianbingfu.remove(card);
										},
									};
								},
								prompt(links, player) {
									return '选择杀的目标';
								},
							},
							ai: {
								respondSha: true,
								skillTagFilter(player) {
									const zhu = get.zhu(player, 'hongfa');
									if (zhu && zhu.storage.huangjintianbingfu && zhu.storage.huangjintianbingfu.length) {
										return true;
									}
									return false;
								},
								order() {
									return get.order({ name: 'sha' }) - 0.1;
								},
								result: {
									player(player) {
										if (player.countCards('h', 'sha')) {
											return 0;
										}
										return 1;
									},
								},
							},
						},
						hongfa: {
							init(player) {
								player.storage.huangjintianbingfu = [];
							},
							derivation: 'huangjintianbingfu',

							trigger: { player: 'phaseBegin' },
							forced: true,
							filter(event, player) {
								return player.storage.huangjintianbingfu.length == 0;
							},
							content() {
								player.storage.huangjintianbingfu.addArray(get.cards(get.population('qun')));
							},
							ai: {
								threaten: 2,
							},
							group: 'hongfa_hp',
							subSkill: {
								hp: {
									trigger: { player: 'loseHpBefore' },
									filter(event, player) {
										return player.storage.huangjintianbingfu.length;
									},
									forced: true,
									content() {
										'step 0';
										player.chooseCardButton(get.prompt('hongfa'), player.storage.huangjintianbingfu).set('ai', function () {
											return 1;
										});
										('step 1');
										if (result.bool) {
											const card = result.links[0];
											card.discard();
											player.storage.huangjintianbingfu.remove(card);
											player.$throw(card, 1000);

											trigger.cancel();
										}
									},
								},
							},
						},
						wendao: {
							enable: 'phaseUse',
							filterCard: { color: 'red' },
							position: 'he',
							check(card) {
								return 6 - get.value(card);
							},
							filter(event, player) {
								for (let i = 0; i < ui.discardPile.childElementCount; i++) {
									if (ui.discardPile.childNodes[i].name == 'taipingyaoshu') {
										return true;
									}
								}
								return game.hasPlayer(function (current) {
									return current != player && current.countCards('ej', 'taipingyaoshu');
								});
							},
							content() {
								const list = [];
								for (let i = 0; i < ui.discardPile.childElementCount; i++) {
									if (ui.discardPile.childNodes[i].name == 'taipingyaoshu') {
										list.add(ui.discardPile.childNodes[i]);
									}
								}
								game.countPlayer(function (current) {
									if (current != player) {
										const ej = current.getCards('ej', 'taipingyaoshu');
										if (ej.length) {
											list.addArray(ej);
										}
									}
								});
								if (list.length) {
									const card = list.randomGet();
									const owner = get.owner(card);
									if (owner) {
										player.gain(card, owner);
										owner.$give(card, player);
										player.line(owner, 'green');
									} else {
										player.gain(card, 'log');
										player.$draw(card);
									}
								}
							},
							ai: {
								order: 8.5,
								result: {
									player: 1,
								},
							},
						},
						huangjintianbingfu: {
							nopop: true,
							mark: true,
							intro: {
								content: 'cards',
								mark(dialog, content, player) {
									if (content && content.length) {
										dialog.addSmall(content);
									}
									dialog.addText('<ul style="margin-top:5px;padding-left:22px;"><li>当你计算群势力角色数时,每一张<天兵>均可视为一名群势力角色.<li>每当你失去体力时,你可改为将一张<天兵>置入弃牌堆.<li>与你势力相同的角色可将一张<天兵>当【杀】使用或打出', false);
								},
							},
						},
						wuxin: {
							audio: ['wuxinjun', 2],

							trigger: { player: 'phaseDrawBegin' },

							content() {
								'step 0';
								let num = get.population('qun');
								if (player.hasSkill('huangjintianbingfu')) {
									num += player.storage.huangjintianbingfu.length;
								}
								player.chooseCardButton(num, true, get.cards(num), '按顺将卡牌置于牌堆顶(先选择的在上)').set('ai', function (button) {
									return get.value(button.link);
								});
								('step 1');
								if (result.bool) {
									const list = result.links.slice(0);
									while (list.length) {
										ui.cardPile.insertBefore(list.pop(), ui.cardPile.firstChild);
									}
								}
							},
						},
						zhangwu: {
							ai: {
								threaten: 2,
							},
							group: ['zhangwu_gain', 'zhangwu_clear', 'zhangwu_count1', 'zhangwu_count2', 'zhangwu_count3'],
							subSkill: {
								gain: {
									trigger: { global: ['discardAfter', 'respondAfter', 'useCardAfter', 'equipAfter', 'judgeAfter', 'useSkillAfter', 'phaseDrawBegin', 'phaseAfter'] },
									forced: true,
									filter(event, player) {
										if (player.storage.zhangwu) {
											for (const i of player.storage.zhangwu) {
												if (get.owner(i) == player) {
													continue;
												}
												const position = get.position(i);
												if (position && position != 's' && position != 'c') {
													return true;
												}
											}
										}
										if (
											game.hasPlayer(function (current) {
												return current != player && current.getEquip('feilongduofeng');
											})
										) {
											return true;
										}
										if (['discard', 'respond', 'useCard'].includes(event.name) && event.cards) {
											for (const i of event.cards) {
												if (i.name == 'feilongduofeng' && get.position(i) == 'd') {
													return true;
												}
											}
										}
										for (let i = 0; i < ui.discardPile.childElementCount; i++) {
											if (ui.discardPile.childNodes[i].name == 'feilongduofeng') {
												return true;
											}
										}
										return false;
									},
									content() {
										'step 0';
										if (trigger.name == 'equip' || trigger.name == 'respond' || trigger.delay == false) {
										}
										('step 1');
										const list = [];
										game.countPlayer(function (current) {
											if (current != player) {
												const es = current.getEquip('feilongduofeng');
												if (es) {
													list.add(es);
												}
											}
										});
										if (['discard', 'respond', 'useCard'].includes(trigger.name) && trigger.cards) {
											for (const i of trigger.cards) {
												if (i.name == 'feilongduofeng' && get.position(i) == 'd') {
													i.fix();
													list.add(i);
													ui.special.appendChild(i);
												}
											}
										}
										for (let i = 0; i < ui.discardPile.childElementCount; i++) {
											if (ui.discardPile.childNodes[i].name == 'feilongduofeng') {
												list.add(ui.discardPile.childNodes[i]);
												ui.special.appendChild(ui.discardPile.childNodes[i]);
											}
										}
										const list2 = [];
										if (player.storage.zhangwu) {
											for (let i = 0; i < list.length; i++) {
												if (player.storage.zhangwu.includes(list[i])) {
													player.storage.zhangwu.remove(list[i]);
													list2.add(list[i]);
													list.splice(i--, 1);
												}
											}

											for (const i of player.storage.zhangwu) {
												if (get.owner(i) == player) {
													continue;
												}
												const position = get.position(i);
												if (position && position != 's' && position != 'c') {
													list2.add(i);
												}
											}
										}
										if (list.length) {
											player.gain(list);
											var owner = get.owner(list[0]);
											if (trigger.name != 'respond' && owner) {
												player.line(owner, 'green');
												owner.$give(list, player);
											} else {
												player.$gain2(list, true);
											}
											event.delay = true;
										}
										if (list2.length) {
											player.showCards(get.translation(player) + '发动了【章武】', list2);

											for (const i of list2) {
												var owner = get.owner(i);
												if (owner) {
													owner.lose(i, ui.special);
													event.delay = true;
												}
											}

											event.list2 = list2;
										}
										('step 2');
										if (event.delay) {
										}
										('step 3');
										if (event.list2 && event.list2.length) {
											for (const i of event.list2) {
												i.fix();
												ui.cardPile.appendChild(i);
											}

											game.log(player, '将', event.list2, '置于牌堆底');
											player.draw(2);
										}
									},
								},
								count1: {
									trigger: { player: 'loseAfter' },
									silent: true,
									filter(event, player) {
										if (event.type != 'gain' && event.type != 'equip') {
											return true;
										}
										if (event.parent.player == player) {
											return true;
										}
										return false;
									},
									content() {
										if (!player.storage.zhangwu) {
											player.storage.zhangwu = [];
										}

										for (const i of trigger.stockcards) {
											if (i.name == 'feilongduofeng') {
												player.storage.zhangwu.add(i);
											}
										}
									},
								},
								count2: {
									trigger: { player: 'loseAfter' },
									forced: true,
									filter(event, player) {
										if (lib.skill.zhangwu_count1.filter(event, player)) {
											return false;
										}

										for (const i of event.stockcards) {
											if (i.name == 'feilongduofeng') {
												return true;
											}
										}
									},
									content() {
										'step 0';
										const list = [];

										for (const i of trigger.stockcards) {
											if (i.name == 'feilongduofeng') {
												list.add(i);
											}
										}

										if (list.length) {
											if (trigger.type == 'gain') {
												for (const i of list) {
													trigger.parent.cards.remove(i);
												}
											} else if (trigger.type == 'equip') {
												trigger.parent.cancelled = true;
											}
											player.showCards(get.translation(player) + '发动了【章武】', list);
											event.list = list;
										} else {
											event.finish();
										}
										('step 1');

										for (const i of event.list) {
											i.fix();
											ui.cardPile.appendChild(i);
										}

										game.log(player, '将', event.list, '置于牌堆底');
										player.draw(2);
									},
								},
								count3: {
									trigger: { global: 'equipBefore' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'feilongduofeng' && event.player != player && player.storage.zhangwu && player.storage.zhangwu.includes(event.card);
									},
									content() {
										'step 0';
										trigger.cancel();
										trigger.card.fix();
										player.showCards(get.translation(player) + '发动了【章武】', [trigger.card]);
										const owner = get.owner(trigger.card);
										if (owner) {
											owner.lose(trigger.card, ui.special);
										}
										player.storage.zhangwu.remove(trigger.card);
										('step 1');
										trigger.card.fix();
										ui.cardPile.appendChild(trigger.card);
										game.log(player, '将', trigger.card, '置于牌堆底');
										player.draw(2);
									},
								},
								clear: {
									trigger: { global: 'phaseAfter' },
									silent: true,
									content() {
										delete player.storage.zhangwu;
									},
								},
							},
						},
						shouyue: {
							group: 'wuhujiangdaqi',
							derivation: 'wuhujiangdaqi',
							mark: true,
						},
						wuhujiangdaqi: {
							nopop: true,
							mark: true,
							intro: {
								content: '@<div style="margin-top:-5px"><div class="skill">【武圣】</div><div>将<红色牌>改为<任意牌></div><div class="skill">【咆哮】</div><div>增加描述<你使用的【杀】无视其他角色的防具></div><div class="skill">【龙胆】</div><div>增加描述<你每发动一次‘龙胆’便摸一张牌></div><div class="skill">【烈弓】</div><div>增加描述<你的攻击范围+1></div><div class="skill">【铁骑】</div><div>将<若结果为红色>改为<若结果不为♠️️️️></div></div>',
							},
						},
						jizhao: {
							derivation: 'gzrende',

							enable: 'chooseToUse',
							mark: true,

							init(player) {
								player.storage.jizhao = false;
							},
							filter(event, player) {
								if (player.storage.jizhao) {
									return false;
								}
								if (event.type == 'dying') {
									if (player != event.dying) {
										return false;
									}
									return true;
								}
								return false;
							},
							content() {
								'step 0';
								player.awakenSkill('jizhao');
								player.storage.jizhao = true;
								const num = player.maxHp - player.countCards('h');
								if (num > 0) {
									player.draw(num);
								}
								('step 1');
								if (player.hp < 2) {
									player.recover(2 - player.hp);
								}
								('step 2');
								player.removeSkill('shouyue');
								player.removeSkill('wuhujiangdaqi');
								player.addSkill('gzrende');
							},
							ai: {
								order: 1,
								skillTagFilter(player) {
									if (player.storage.jizhao) {
										return false;
									}
									if (player.hp > 0) {
										return false;
									}
								},
								save: true,
								result: {
									player: 10,
								},
							},
							intro: {
								content: 'limited',
							},
						},
						gzshoucheng: {
							inherit: 'shoucheng',
							filter(event, player) {
								if (event.player.countCards('h')) {
									return false;
								}
								if (event.player.isEnemiesOf(player)) {
									return false;
								}
								if (_status.currentPhase == event.player) {
									return false;
								}

								for (const i of event.cards) {
									if (i.original == 'h') {
										return true;
									}
								}

								return false;
							},
						},
						yicheng: {
							trigger: { global: 'shaBegin' },
							filter(event, player) {
								return event.target.isFriendsOf(player);
							},
							logTarget: 'target',
							content() {
								'step 0';
								trigger.target.draw();
								('step 1');
								trigger.target.chooseToDiscard('he', true);
							},
						},
						gzjixi: {
							inherit: 'jixi',
							init(player) {
								if (player.checkMainSkill('gzjixi')) {
									player.removeMaxHp();
								}
							},
						},
						ziliang: {
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return event.player.isIn() && event.player.isFriendsOf(player) && player.storage.tuntian && player.storage.tuntian.length;
							},
							init(player) {
								player.checkViceSkill('ziliang');
							},
							forced: true,
							content() {
								'step 0';
								player.chooseCardButton(get.prompt('ziliang', trigger.player), player.storage.tuntian).set('ai', function (button) {
									return get.value(button.link);
								});
								('step 1');
								if (result.bool) {
									const card = result.links[0];

									player.storage.tuntian.remove(card);

									if (!player.storage.tuntian.length) {
										player.unmarkSkill('tuntian');
									} else {
									}
									trigger.player.gain(card);
									if (trigger.player == player) {
										player.$draw(card, true);
									} else {
										player.$give(card, trigger.player);
									}
								}
							},
						},
						huyuan: {
							audio: 'yuanhu',
							trigger: { player: 'phaseEnd' },
							forced: true,
							filter(event, player) {
								return player.countCards('he', { type: 'equip' }) > 0;
							},
							content() {
								'step 0';
								player.chooseCardTarget({
									filterCard(card, player) {
										return get.type(card) == 'equip';
									},
									position: 'he',
									filterTarget(card, player, target) {
										return !target.getEquip(card);
									},
									ai1(card) {
										return 6 - get.value(card);
									},
									ai2(target) {
										return get.attitude(_status.event.player, target) - 3;
									},
									prompt: get.prompt('yuanhu'),
								});
								('step 1');
								if (result.bool) {
									const target = result.targets[0];

									event.current = target;
									target.equip(result.cards[0]);
									if (target != player) {
										player.$give(result.cards, target);
									}

									player
										.chooseTarget('弃置一名角色的一张牌', function (card, player, target) {
											const source = _status.event.source;
											return get.distance(source, target) <= 1 && source != target && target.countCards('he');
										})
										.set('ai', function (target) {
											return -get.attitude(_status.event.player, target);
										})
										.set('source', target);
								} else {
									event.finish();
								}
								('step 2');
								if (result.targets?.length) {
									event.current.line(result.targets, 'green');
									player.discardPlayerCard(true, result.targets[0], 'he');
								}
							},
						},
						heyi: {
							zhenfa: 'inline',
						},
						_heyi: {
							mod: {
								globalTo(from, to, distance) {
									if (
										game.hasPlayer(function (current) {
											return current.hasSkill('heyi') && current.inline(to) && current != to;
										})
									) {
										return distance + 1;
									}
								},
							},
						},
						tianfu: {
							init(player) {
								player.checkMainSkill('tianfu');
							},
							inherit: 'kanpo',
							zhenfa: 'inline',
							viewAsFilter(player) {
								return _status.currentPhase.inline(player) && !player.hasSkill('kanpo') && player.countCards('h', { color: 'black' }) > 0;
							},
						},
						yizhi: {
							init(player) {
								if (player.checkViceSkill('yizhi')) {
									player.removeMaxHp();
								}
							},
							inherit: 'guanxing',
							filter(event, player) {
								return !player.hasSkill('guanxing');
							},
						},
						gzshangyi: {
							audio: 'shangyi',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(card, player, target) {
								return player != target && (target.countCards('h') || target.isUnseen(2));
							},
							content() {
								'step 0';
								target.viewHandcards(player);
								('step 1');
								if (!target.countCards('h')) {
									event._result = { index: 1 };
								} else if (!target.isUnseen(2)) {
									event._result = { index: 0 };
								} else {
									player.chooseControl().set('choiceList', ['观看' + get.translation(target) + '的手牌并可以弃置其中的一张黑色牌', '观看' + get.translation(target) + '的所有暗置的武将牌']);
								}
								('step 2');
								if (result.index == 0) {
									player
										.discardPlayerCard(target, 'h')
										.set('filterButton', function (button) {
											return get.color(button.link) == 'black';
										})
										.set('visible', true);
								} else {
									player.viewCharacter(target, 2);
								}
							},
							ai: {
								order: 11,
								result: {
									target(player, target) {
										return -target.countCards('h');
									},
								},
								threaten: 1.1,
							},
						},
						niaoxiang: {
							zhenfa: 'siege',
						},
						_niaoxiang: {
							trigger: { player: 'shaBegin' },
							filter(event, player) {
								if (game.countPlayer() < 4) {
									return false;
								}
								return (
									player.siege(event.target) &&
									game.hasPlayer(function (current) {
										return current.hasSkill('niaoxiang') && current.siege(event.target);
									})
								);
							},
							forced: true,
							logTarget: 'target',
							content() {
								if (typeof trigger.shanRequired == 'number') {
									trigger.shanRequired++;
								} else {
									trigger.shanRequired = 2;
								}
							},
						},
						fengshi: {
							zhenfa: 'siege',
						},
						_fengshi: {
							trigger: { player: 'shaBegin' },
							filter(event, player) {
								if (game.countPlayer() < 4) {
									return false;
								}
								return (
									player.siege(event.target) &&
									game.hasPlayer(function (current) {
										return current.hasSkill('fengshi') && current.siege(event.target);
									}) &&
									event.target.countCards('e')
								);
							},
							logTarget: 'target',
							content() {
								trigger.target.chooseToDiscard('e', true);
							},
						},
						gzguixiu: {
							init2(player) {
								player.draw(2);
							},
							onremove(player) {
								if (player.isDamaged()) {
									player.recover();
								}
							},
						},
						gzcunsi: {
							derivation: 'gzyongjue',
							enable: 'phaseUse',
							filter(event, player) {
								return player.checkMainSkill('gzcunsi', false) || player.checkViceSkill('gzcunsi', false);
							},

							filterTarget: true,

							content() {
								'step 0';
								if (player.checkMainSkill('gzcunsi', false)) {
									player.removeCharacter(0);
								} else {
									player.removeCharacter(1);
								}
								('step 1');
								target.addSkill('gzyongjue');
								if (target != player) {
									target.draw(2);
								}
							},
							ai: {
								order: 9,
								result: {
									player(player, target) {
										let num = 0;
										if (player.isDamaged() && target.isFriendsOf(player)) {
											num++;
											if (target.hasSkill('kanpo')) {
												num += 0.5;
											}
											if (target.hasSkill('liegong')) {
												num += 0.5;
											}
											if (target.hasSkill('tieji')) {
												num += 0.5;
											}
											if (target.hasSkill('gzrende')) {
												num += 1.2;
											}
											if (target.hasSkill('longdan')) {
												num += 1.2;
											}
											if (target.hasSkill('paoxiao')) {
												num += 1.2;
											}
											if (target.hasSkill('zhangwu')) {
												num += 1.5;
											}
											if (target != player) {
												num += 0.5;
											}
										}
										return num;
									},
								},
							},
						},
						gzyongjue: {
							trigger: { global: 'useCardAfter' },
							filter(event, player) {
								if (event.gzyongjue == player) {
									for (const i of event.cards) {
										if (get.position(i) == 'd') {
											return true;
										}
									}
								}
								return false;
							},
							mark: true,
							nopop: true,
							intro: {
								content: '若与你势力相同的一名角色于其回合内使用的第一张牌为【杀】,则该角色可以在此【杀】结算完成后获得之',
							},
							content() {
								const cards = [];

								for (const i of trigger.cards) {
									if (get.position(i) == 'd') {
										cards.push(i);
									}
								}

								player.gain(cards, 'gain2');
							},
							subSkill: {
								count: {
									trigger: { global: 'useCard' },
									filter(event, player) {
										return event.card && event.card.name == 'sha' && event.cards.length && event.player.isFriendsOf(player) && event.player.countUsed() == 1;
									},
									silent: true,
									content() {
										trigger.gzyongjue = player;
									},
								},
							},
							group: 'gzyongjue_count',
							global: 'gzyongjue_ai',
						},
						gzyongjue_ai: {
							ai: {
								presha: true,
								skillTagFilter(player) {
									if (
										!game.hasPlayer(function (current) {
											return current.isFriendsOf(player) && current.hasSkill('gzyongjue');
										})
									) {
										return false;
									}
								},
							},
						},
						baoling: {
							trigger: { player: 'phaseUseEnd' },
							init(player) {
								player.checkMainSkill('baoling');
							},
							forced: true,
							filter(event, player) {
								return player.hasViceCharacter();
							},
							content() {
								'step 0';
								player.removeCharacter(1);
								('step 1');
								player.awakenSkill('baoling');
								player.gainMaxHp(3, true);
								('step 2');
								player.recover(3);
								player.addSkill('benghuai');
							},
							derivation: 'benghuai',
						},
						gzmingshi: {
							trigger: { player: 'damageBegin' },
							forced: true,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.isUnseen(2);
							},
							content() {
								trigger.num--;
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) {
											return;
										}
										if (!player.isUnseen(2)) {
											return;
										}
										const num = get.tag(card, 'damage');
										if (num > 0) {
											if (num > 1) {
												return 0.5;
											}
											return 0;
										}
									},
								},
							},
						},
						hunshang: {
							init(player) {
								if (player.checkViceSkill('hunshang')) {
									player.removeMaxHp();
								}
							},
							group: ['hunshang_yingzi', 'hunshang_yinghun'],
						},
						hunshang_yingzi: {
							inherit: 'yingzi',
							filter(event, player) {
								return player.hp <= 1 && !player.hasSkill('yingzi');
							},
						},
						hunshang_yinghun: {
							inherit: 'gzyinghun',
							filter(event, player) {
								return player.hp <= 1 && player.isDamaged() && !player.hasSkill('gzyinghun');
							},
						},
						yingyang: {
							trigger: { player: 'compare', target: 'compare' },
							filter(event, player) {
								return !event.iwhile;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseControl('点数+3', '点数-3', 'cancel2')
									.set('prompt', get.prompt('yingyang'))
									.set('ai', function () {
										if (_status.event.small) {
											return 1;
										} else {
											return 0;
										}
									})
									.set('small', trigger.small);
								('step 1');
								if (result.index != 2) {
									if (result.index == 0) {
										game.log(player, '拼点牌点数+3');
										if (player == trigger.player) {
											trigger.num1 += 3;
										} else {
											trigger.num2 += 3;
										}
									} else {
										game.log(player, '拼点牌点数-3');
										if (player == trigger.player) {
											trigger.num1 -= 3;
										} else {
											trigger.num2 -= 3;
										}
									}
								}
							},
						},
						gzqianxi: {
							audio: 'qianxi',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.judge();
								('step 1');
								event.color = result.color;
								player
									.chooseTarget(function (card, player, target) {
										return player != target && get.distance(player, target) <= 1;
									}, true)
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 2');
								if (result.targets?.length) {
									result.targets[0].storage.qianxi2 = event.color;
									result.targets[0].addSkill('qianxi2');
									player.line(result.targets, 'green');
									game.addVideo('storage', result.targets[0], ['qianxi2', event.color]);
								}
							},
						},
						gzduanchang: {
							audio: 'duanchang',
							trigger: { player: 'dieBegin' },
							popup: true,
							silent: true,
							filter(event, player) {
								return event.source && event.source.isIn() && event.source != player && (event.source.hasMainCharacter() || event.source.hasViceCharacter());
							},
							content() {
								'step 0';
								if (!trigger.source.hasViceCharacter()) {
									event._result = { control: '主将' };
								} else if (!trigger.source.hasMainCharacter()) {
									event._result = { control: '副将' };
								} else {
									player
										.chooseControl('主将', '副将', function () {
											return Math.random() < 0.5 ? '主将' : '副将';
										})
										.set('prompt', '令' + get.translation(trigger.source) + '失去一张武将牌的所有技能');
								}
								('step 1');
								let skills;
								if (result.control == '主将') {
									trigger.source.showCharacter(0);
									game.broadcastAll(function (player) {
										player.node.avatar.classList.add('disabled');
									}, trigger.source);
									skills = lib.character[trigger.source.name][3];
									game.log(trigger.source, '失去了主将技能');
								} else {
									trigger.source.showCharacter(1);
									game.broadcastAll(function (player) {
										player.node.avatar2.classList.add('disabled');
									}, trigger.source);
									skills = lib.character[trigger.source.name2][3];
									game.log(trigger.source, '失去了副将技能');
								}
								const list = [];

								for (const i of skills) {
									list.add(i);
									const info = lib.skill[i];
									if (typeof info.derivation == 'string') {
										list.add(info.derivation);
									} else if (Array.isArray(info.derivation)) {
										list.addArray(info.derivation);
									}
								}

								trigger.source.disableSkill('gzduanchang_disable', list);
								trigger.source.syncSkills();
								player.line(trigger.source, 'green');
							},
							logTarget: 'source',
							ai: {
								threaten(player, target) {
									if (target.hp == 1) {
										return 0.2;
									}
									return 1.5;
								},
								effect: {
									target(card, player, target, current) {
										if (!target.hasFriend()) {
											return;
										}
										if (target.hp <= 1 && get.tag(card, 'damage')) {
											return [1, 0, 0, -2];
										}
									},
								},
							},
						},
						gzweimu: {
							audio: 'weimu',
							trigger: { target: 'useCardToBefore' },
							forced: true,
							_priority: 15,
							check(event, player) {
								return get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick' && get.color(event.card) == 'black';
							},
							content() {
								trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.type(card, 'trick') == 'trick' && get.color(card) == 'black') {
											return 'zeroplayertarget';
										}
									},
								},
							},
						},
						gzqianxun: {
							audio: 'qianxun',
							trigger: { target: 'useCardToBefore' },
							forced: true,
							_priority: 15,
							check(event, player) {
								return get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return (event.card && event.card.name == 'shunshou') || event.card.name == 'lebu';
							},
							content() {
								trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'shunshou' || card.name == 'lebu') {
											return 'zeroplayertarget';
										}
									},
								},
							},
						},
						gzkongcheng: {
							audio: 'kongcheng',
							trigger: { target: 'useCardToBefore' },
							forced: true,
							_priority: 15,
							check(event, player) {
								return get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return player.countCards('h') == 0 && (event.card.name == 'sha' || event.card.name == 'juedou');
							},
							content() {
								trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (target.countCards('h') == 0 && (card.name == 'sha' || card.name == 'juedou')) {
											return 'zeroplayertarget';
										}
									},
								},
							},
						},
						gzxiaoji: {
							inherit: 'xiaoji',
							content() {
								player.draw(2);
							},
						},
						gzrende: {
							audio: 'rende',
							group: ['gzrende1'],
							enable: 'phaseUse',
							filterCard: true,
							selectCard: [1, Infinity],
							discard: false,
							prepare: 'give',
							filterTarget(card, player, target) {
								return player != target;
							},
							check(card) {
								if (ui.selected.cards.length > 2) {
									return 0;
								}
								if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
									return 0;
								}
								if (!ui.selected.cards.length && card.name == 'du') {
									return 20;
								}
								const player = get.owner(card);
								if (player.hp == player.maxHp || player.storage.gzrende < 0 || player.countCards('h') + player.storage.gzrende <= 2) {
									if (ui.selected.cards.length) {
										return -1;
									}
									const players = game.filterPlayer();

									for (const i of players) {
										if (i.hasSkill('haoshi') && !i.isTurnedOver() && !i.hasJudge('lebu') && get.attitude(player, i) >= 3 && get.attitude(i, player) >= 3) {
											return 11 - get.value(card);
										}
									}

									if (player.countCards('h') > player.hp) {
										return 10 - get.value(card);
									}
									if (player.countCards('h') > 2) {
										return 6 - get.value(card);
									}
									return -1;
								}
								return 10 - get.value(card);
							},
							content() {
								target.gain(cards, player);
								if (typeof player.storage.gzrende != 'number') {
									player.storage.gzrende = 0;
								}
								if (player.storage.gzrende >= 0) {
									player.storage.gzrende += cards.length;
									if (player.storage.gzrende >= 3) {
										player.recover();
										player.storage.gzrende = -1;
									}
								}
							},
							ai: {
								order(skill, player) {
									if (player.hp == player.maxHp || player.storage.gzrende < 0 || player.countCards('h') + player.storage.gzrende <= 2) {
										return 1;
									}
									return 10;
								},
								result: {
									target(player, target) {
										if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
											return -10;
										}
										if (target.hasJudge('lebu')) {
											return 0;
										}
										const nh = target.countCards('h');
										const np = player.countCards('h');
										if (player.hp == player.maxHp || player.storage.gzrende < 0 || player.countCards('h') + player.storage.gzrende <= 2) {
											if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) {
												return 0;
											}
										}
										return Math.max(1, 5 - nh);
									},
								},
								effect: {
									target(card, player, target) {
										if (player == target && get.type(card) == 'equip') {
											if (player.countCards('e', { subtype: get.subtype(card) })) {
												const players = game.filterPlayer();

												for (const i of players) {
													if (i != player && get.attitude(player, i) > 0) {
														return 0;
													}
												}
											}
										}
									},
								},
								threaten: 0.8,
							},
						},
						gzrende1: {
							trigger: { player: 'phaseUseBegin' },
							silent: true,
							content() {
								player.storage.gzrende = 0;
							},
						},
						gzzhiheng: {
							inherit: 'zhiheng',
							selectCard() {
								return [1, _status.event.player.maxHp];
							},
							prompt: '出牌阶段限一次,你可以弃置至多X张牌(X为你的体力上限),然后摸等量的牌',
						},
						huoshui: {
							enable: 'phaseUse',

							filter(event, player) {
								if (player.name1 == 'gz_zoushi') {
									return player.isUnseen(0);
								}
								return player.isUnseen(1);
							},
							content() {
								if (player.name1 == 'gz_zoushi') {
									player.showCharacter(0);
								} else {
									player.showCharacter(1);
								}
							},
						},
						_huoshui: {
							ai: {
								nomingzhi: true,
								skillTagFilter(player) {
									if (_status.currentPhase && _status.currentPhase != player && _status.currentPhase.hasSkill('huoshui')) {
										return true;
									}
									return false;
								},
							},
						},
						qingcheng: {
							enable: 'phaseUse',
							filter(event, player) {
								return (
									player.countCards('he', { type: 'equip' }) &&
									game.hasPlayer(function (current) {
										return current != player && !current.isUnseen(2);
									})
								);
							},
							filterCard: { type: 'equip' },
							position: 'he',
							filterTarget(card, player, target) {
								return !target.isUnseen(2);
							},
							check(card) {
								return 6 - get.value(card, _status.event.player);
							},
							content() {
								'step 0';
								if (get.is.jun(target)) {
									event._result = { control: '副将' };
								} else {
									let choice = '主将';
									const skills = lib.character[target.name2][3];

									for (const i of skills) {
										const info = get.info(i);
										if (info && info.ai && info.ai.maixie) {
											choice = '副将';
											break;
										}
									}

									if (target.name == 'gz_zhoutai') {
										choice = '主将';
									} else if (target.name2 == 'gz_zhoutai') {
										choice = '副将';
									}
									player
										.chooseControl('主将', '副将', function () {
											return _status.event.choice;
										})
										.set('prompt', '暗置' + get.translation(target) + '的一张武将牌')
										.set('choice', choice);
								}
								('step 1');
								if (result.control == '主将') {
									target.hideCharacter(0);
								} else {
									target.hideCharacter(1);
								}
								target.addTempSkill('qingcheng_ai');
							},
							ai: {
								order: 8,
								result: {
									target(player, target) {
										if (target.hp <= 0) {
											return -5;
										}
										if (player.getStat().skill.qingcheng) {
											return 0;
										}
										if (!target.hasSkillTag('maixie')) {
											return 0;
										}
										if (get.attitude(player, target) >= 0) {
											return 0;
										}
										if (
											player.hasCard(function (card) {
												return get.tag(card, 'damage') && player.canUse(card, target, true, true);
											})
										) {
											if (target.maxHp > 3) {
												return -0.5;
											}
											return -1;
										}
										return 0;
									},
								},
							},
						},
						qingcheng_ai: {
							ai: {
								effect: {
									target(card) {
										if (get.tag(card, 'damage')) {
											return 2;
										}
									},
								},
							},
						},
						duoshi: {
							enable: 'chooseToUse',
							viewAs: { name: 'yiyi' },
							usable: 4,
							filterCard: { color: 'red' },
							viewAsFilter(player) {
								return player.countCards('h', { color: 'red' }) > 0;
							},
							check(card) {
								return 5 - get.value(card);
							},
						},
						gzxiaoguo: {
							inherit: 'xiaoguo',
							content() {
								'step 0';
								var nono = Math.abs(get.attitude(player, trigger.player)) < 3;
								if (get.damageEffect(trigger.player, player, player) <= 0) {
									nono = true;
								}
								const next = player.chooseToDiscard(get.prompt('gzxiaoguo', trigger.player), { type: 'basic' });
								next.set('ai', function (card) {
									if (_status.event.nono) {
										return 0;
									}
									return 8 - get.useful(card);
								});

								next.set('nono', nono);
								('step 1');
								if (result.bool) {
									var nono = get.damageEffect(trigger.player, player, trigger.player) >= 0;
									trigger.player
										.chooseToDiscard('he', { type: 'equip' })
										.set('ai', function (card) {
											if (_status.event.nono) {
												return 0;
											}
											if (_status.event.player.hp == 1) {
												return 10 - get.value(card);
											}
											return 9 - get.value(card);
										})
										.set('nono', nono);
								} else {
									event.finish();
								}
								('step 2');
								if (!result.bool) {
									trigger.player.damage();
								}
							},
						},
						_mingzhi1: {
							trigger: { player: 'phaseBegin' },
							_priority: 19,
							forced: true,
							popup: false,
							content() {
								'step 0';
								let choice = 1;

								for (const i of player.hiddenSkills) {
									if (lib.skill[i].ai) {
										const mingzhi = lib.skill[i].ai.mingzhi;
										if (mingzhi == false) {
											choice = 0;
											break;
										}
										if (typeof mingzhi == 'function' && mingzhi(trigger, player) == false) {
											choice = 0;
											break;
										}
									}
								}

								if (player.isUnseen()) {
									const group = lib.character[player.name1][1];
									player.chooseControl('bumingzhi', '明置' + get.translation(player.name1), '明置' + get.translation(player.name2), 'tongshimingzhi', true).ai = function (event, player) {
										const popu = get.population(lib.character[player.name1][1]);
										if (popu >= 2 || (popu == 1 && game.players.length <= 4)) {
											return Math.random() < 0.5 ? 3 : Math.random() < 0.5 ? 2 : 1;
										}
										if (choice == 0) {
											return 0;
										}
										if (get.population(group) > 0 && player.wontYe()) {
											return Math.random() < 0.2 ? (Math.random() < 0.5 ? 3 : Math.random() < 0.5 ? 2 : 1) : 0;
										}
										let nming = 0;

										for (const i of game.players) {
											if (i != player && i.identity != 'unknown') {
												nming++;
											}
										}

										if (nming == game.players.length - 1) {
											return Math.random() < 0.5 ? (Math.random() < 0.5 ? 3 : Math.random() < 0.5 ? 2 : 1) : 0;
										}
										return Math.random() < (0.1 * nming) / game.players.length ? (Math.random() < 0.5 ? 3 : Math.random() < 0.5 ? 2 : 1) : 0;
									};
								} else {
									if (Math.random() < 0.5) {
										choice = 0;
									}
									if (player.isUnseen(0)) {
										player.chooseControl('bumingzhi', '明置' + get.translation(player.name1), true).choice = choice;
									} else if (player.isUnseen(1)) {
										player.chooseControl('bumingzhi', '明置' + get.translation(player.name2), true).choice = choice;
									} else {
										event.finish();
									}
								}
								('step 1');
								switch (result.control) {
									case '明置' + get.translation(player.name1):
										player.showCharacter(0);
										break;
									case '明置' + get.translation(player.name2):
										player.showCharacter(1);
										break;
									case 'tongshimingzhi':
										player.showCharacter(2);
										break;
								}
							},
						},
						_mingzhi2: {
							trigger: { player: 'triggerHidden' },
							forced: true,
							popup: false,
							_priority: 10,
							content() {
								'step 0';
								if (get.info(trigger.skill).silent) {
									event.finish();
								} else {
									event.skillHidden = true;
									const bool1 = game.expandSkills(lib.character[player.name1][3]).includes(trigger.skill);
									const bool2 = game.expandSkills(lib.character[player.name2][3]).includes(trigger.skill);
									const nai = function () {
										const player = _status.event.player;
										if (!_status.event.yes) {
											return false;
										}
										if (player.identity != 'unknown') {
											return true;
										}
										if (Math.random() < 0.5) {
											return true;
										}
										const info = get.info(_status.event.skill);
										if (info && info.ai && info.ai.mingzhi == true) {
											return true;
										}
										if (info && info.ai && info.ai.maixie) {
											return true;
										}
										const group = lib.character[player.name1][1];
										const popu = get.population(lib.character[player.name1][1]);
										if (popu >= 2 || (popu == 1 && game.players.length <= 4)) {
											return true;
										}
										if (get.population(group) > 0 && player.wontYe()) {
											return Math.random() < 0.2 ? true : false;
										}
										let nming = 0;

										for (const i of game.players) {
											if (i != player && i.identity != 'unknown') {
												nming++;
											}
										}

										if (nming == game.players.length - 1) {
											return Math.random() < 0.5 ? true : false;
										}
										return Math.random() < (0.1 * nming) / game.players.length ? true : false;
									};
									if (bool1 && bool2) {
										event.name = player.name1;
										event.name2 = player.name2;
									} else {
										event.name = bool1 ? player.name1 : player.name2;
									}
									var info = get.info(trigger.skill);
									var next = player.chooseBool('是否明置' + get.translation(event.name) + '以发动【' + get.translation(trigger.skill) + '】？');
									next.yes = !info.check || info.check(trigger._trigger, player);
									next.skill = trigger.skill;
									next.ai = nai;
								}
								('step 1');
								if (result.bool) {
									if (event.name == player.name1) {
										player.showCharacter(0);
									} else {
										player.showCharacter(1);
									}
									trigger.revealed = true;
									event.finish();
								} else if (event.name2) {
									var info = get.info(trigger.skill);
									var next = player.chooseBool('是否明置' + get.translation(event.name2) + '以发动【' + get.translation(trigger.skill) + '】？');
									next.yes = !info.check || info.check(trigger._trigger, player);
									next.ai = function () {
										return _status.event.yes;
									};
								} else {
									event.finish();
									trigger.untrigger();
									trigger.cancelled = true;
								}
								('step 2');
								if (event.name2) {
									if (result.bool) {
										player.showCharacter(1);
										trigger.revealed = true;
									} else {
										trigger.untrigger();
										trigger.cancelled = true;
									}
								}
							},
						},
						_mingzhi3: {
							trigger: { player: 'phaseBegin' },
							_priority: 19.1,
							forced: true,
							popup: false,
							filter(event, player) {
								return player.isUnseen(0) && get.is.jun(player.name1);
							},
							content() {
								player.showCharacter(0);
							},
						},
						_zhenfazhaohuan: {
							enable: 'phaseUse',
							usable: 1,
							getConfig(player) {
								let n1, n2, p1, p2;
								const config = {
									inline: false,
									siege: false,
								};
								const config2 = {};
								n1 = player.next;
								p1 = player.previous;
								if (n1) {
									if (n1.isUnseen()) {
										config.inline = true;
									} else if (n1.identity != player.identity) {
										n2 = n1.next;
										if (n2 && n2.isUnseen()) {
											config.siege = true;
										}
									}
								}
								if (p1) {
									if (p1.isUnseen()) {
										config.inline = true;
									} else if (p1.identity != player.identity) {
										p2 = p1.previous;
										if (p2 && p2.isUnseen()) {
											config.siege = true;
										}
									}
								}
								if (config.inline || config.siege) {
									const skills = player.getSkills();

									for (const i of skills) {
										const info = get.info(i).zhenfa;
										if (info && config[info]) {
											config2[info] = true;
										}
									}
								}
								return config2;
							},
							filter(event, player) {
								if (game.countPlayer() < 4) {
									return false;
								}
								if (player.hasSkill('undist')) {
									return false;
								}
								const config = lib.skill._zhenfazhaohuan.getConfig(player);
								return config.inline || config.siege;
							},
							content() {
								'step 0';
								const config = lib.skill._zhenfazhaohuan.getConfig(player);
								if (config.siege) {
									event.siege = true;
								}
								if (!config.inline) {
									event.goto(3);
								}
								event.asked = [];
								event.current = player;
								event.dir = true;
								event.askPlayer = function () {
									event.directfalse = false;
									if (event.current && event.current.isUnseen() && !event.asked.includes(event.current)) {
										player.line(event.current, 'green');
										event.asked.push(event.current);
										if (lib.character[event.current.name1][1] == player.identity) {
											event.current
												.chooseControl(['明置' + get.translation(event.current.name1), '明置' + get.translation(event.current.name2), '不明置'], function () {
													return Math.floor(Math.random() * 3);
												})
												.set('prompt', get.translation(player) + '发了阵法召唤,你可以明置一个武将');
										} else {
											event.directfalse = true;
											if (_status.connectMode) {
												event.current.chooseControl('不明置').set('prompt', get.translation(player) + '发了阵法召唤(你与其势力不同,无法明置武将)');
											}
										}
									} else {
										event.directfalse = true;
									}
								};
								event.checkResult = function (result, num) {
									if (!event.directfalse && result.control != '不明置') {
										if (result.index == 0) {
											event.current.showCharacter(0);
										} else {
											event.current.showCharacter(1);
										}
										if (event.current.identity == 'ye' || num != 1) {
											if (event.dir) {
												event.dir = false;
												event.current = player;
												event.goto(num);
											}
										} else {
											event.goto(num);
										}
									} else if (event.dir) {
										event.dir = false;
										event.current = player;
										event.goto(num);
									}
								};
								('step 1');
								if (event.dir) {
									event.current = event.current.next;
								} else {
									event.current = event.current.previous;
								}
								event.askPlayer();
								('step 2');
								event.checkResult(result, 1);
								('step 3');
								if (!event.siege) {
									event.finish();
									return;
								}
								event.dir = true;
								('step 4');
								let str;
								if (event.dir) {
									str = 'getNext';
								} else {
									str = 'getPrevious';
								}
								event.current = player[str]();
								if (event.current && !event.current.isUnseen() && event.current.identity != player.identity) {
									event.current = event.current[str]();
								}
								event.askPlayer();
								('step 5');
								event.checkResult(result, 4);
							},
							ai: {
								order: 5,
								result: {
									player: 1,
								},
							},
						},
					},
					game: {
						getCharacterChoice(list, num) {
							const choice = list.splice(0, num);
							const map = { wei: [], shu: [], wu: [], qun: [] };

							for (const i of choice) {
								var group = lib.character[i][1];
								if (map[group]) {
									map[group].push(i);
								}
							}

							for (const i in map) {
								if (map[i].length < 2) {
									if (map[i].length == 1) {
										choice.remove(map[i][0]);
										list.push(map[i][0]);
									}
									delete map[i];
								}
							}
							if (choice.length == num - 1) {
								for (let i = 0; i < list.length; i++) {
									if (map[lib.character[list[i]][1]]) {
										choice.push(list[i]);
										list.splice(i--, 1);
										break;
									}
								}
							} else if (choice.length < num - 1) {
								var group = null;
								for (let i = 0; i < list.length; i++) {
									if (group) {
										if (lib.character[list[i]][1] == group) {
											choice.push(list[i]);
											list.splice(i--, 1);
											if (choice.length >= num) {
												break;
											}
										}
									} else {
										if (!map[lib.character[list[i]][1]]) {
											group = lib.character[list[i]][1];
											choice.push(list[i]);
											list.splice(i--, 1);
										}
									}
								}
							}
							return choice;
						},
						getState() {
							const state = {};
							for (const i in lib.playerOL) {
								const player = lib.playerOL[i];
								state[i] = {
									identity: player.identity,
									shown: player.ai.shown,
								};
							}
							return state;
						},
						updateState(state) {
							for (const i in state) {
								const player = lib.playerOL[i];
								if (player) {
									player.identity = state[i].identity;
									player.ai.shown = state[i].shown;
								}
							}
						},
						getRoomInfo(uiintro) {
							let num, last;
							if (lib.configOL.initshow_draw == '0') {
								num = '关闭';
							} else {
								num = get.cnNumber(parseInt(lib.configOL.initshow_draw)) + '张';
							}
							uiintro.add('<div class="text chat">首亮摸牌:' + num);
							uiintro.add('<div class="text chat">珠联璧合:' + (lib.configOL.zhulian ? '开启' : '关闭'));
							uiintro.add('<div class="text chat">出牌时限:' + lib.configOL.choose_timeout + '秒');
							uiintro.add('<div class="text chat">国战牌堆:' + (lib.configOL.guozhanpile ? '开启' : '关闭'));
							last = uiintro.add('<div class="text chat">国战武将:' + (lib.configOL.onlyguozhan ? '开启' : '关闭'));
							if (!lib.configOL.onlyguozhan) {
								uiintro.add('<div class="text chat">屏蔽弱将:' + (lib.configOL.ban_weak ? '开启' : '关闭'));
								last = uiintro.add('<div class="text chat">屏蔽强将:' + (lib.configOL.ban_strong ? '开启' : '关闭'));
								if (lib.configOL.banned.length) {
									last = uiintro.add('<div class="text chat">禁用武将:' + get.translation(lib.configOL.banned));
								}
								if (lib.configOL.bannedcards.length) {
									last = uiintro.add('<div class="text chat">禁用卡牌:' + get.translation(lib.configOL.bannedcards));
								}
							}
							last.style.paddingBottom = '8px';
						},
						addRecord(bool) {
							if (typeof bool == 'boolean') {
								const data = lib.config.gameRecord.guozhan.data;
								const identity = game.me.identity;
								if (!data[identity]) {
									data[identity] = [0, 0];
								}
								if (bool) {
									data[identity][0]++;
								} else {
									data[identity][1]++;
								}
								const list = ['wei', 'shu', 'wu', 'qun', 'ye'];
								let str = '';

								for (const i of list) {
									if (data[i]) {
										str += lib.translate[i + '2'] + ':' + data[i][0] + '胜 ' + data[i][1] + '负<br>';
									}
								}

								lib.config.gameRecord.guozhan.str = str;
								game.saveConfig('gameRecord', lib.config.gameRecord);
							}
						},
						getIdentityList(player) {
							if (!player.isUnseen()) {
								return;
							}
							if (player == game.me) {
								return;
							}
							const list = {
								wei: '魏',
								shu: '蜀',
								wu: '吴',
								qun: '群',
								ye: '野',
								unknown: '',
							};
							const num = Math.floor((game.players.length + game.dead.length) / 2);
							let noye = true;
							if (get.population('wei') >= num) {
								delete list.wei;
								noye = false;
							}
							if (get.population('shu') >= num) {
								delete list.shu;
								noye = false;
							}
							if (get.population('wu') >= num) {
								delete list.wu;
								noye = false;
							}
							if (get.population('qun') >= num) {
								delete list.qun;
								noye = false;
							}
							if (noye) {
								delete list.ye;
							}
							return list;
						},
						getIdentityList2(list) {
							for (const i in list) {
								switch (i) {
									case 'unknown':
										list[i] = '未知';
										break;
									case 'ye':
										list[i] = '野心家';
										break;
									case 'qun':
										list[i] += '雄';
										break;
									default:
										list[i] += '国';
								}
							}
						},
						getVideoName() {
							const str = get.translation(game.me.name1) + '/' + get.translation(game.me.name2);
							let str2 = get.cnNumber(parseInt(get.config('player_number'))) + '人' + get.translation(lib.config.mode);
							if (game.me.identity == 'ye') {
								str2 += ' - 野心家';
							}
							const name = [str, str2];
							return name;
						},
						showIdentity(started) {
							if (game.phaseNumber == 0 && !started) {
								return;
							}

							for (const i of game.players) {
								i.showCharacter(2, false);
							}
						},
						tryResult() {
							let hasunknown = false,
								check = true,
								unknown,
								giveup;
							const group = game.players[0]._group;

							for (const i of game.players) {
								if (i.identity == 'unknown') {
									hasunknown = true;
									if (unknown) {
										unknown = 'no';
									} else {
										unknown = i;
									}
								}
								if (i._group != group) {
									check = false;
									break;
								}
							}

							if (check) {
								if (get.population('ye')) {
									if (game.players.length > 1) {
										check = false;
									}
								} else {
									if (
										hasunknown &&
										!game.hasPlayer(function (current) {
											return get.is.jun(current);
										})
									) {
										const players = game.players.concat(game.dead);
										let num = 0;

										for (const i of players) {
											if (i._group == group) {
												num++;
											}
										}

										if (num > players.length / 2) {
											check = false;
										}
									}
								}
							}
							if (check) {
								game.checkResult();
							} else if (!hasunknown) {
								const ids = [];
								const idmap = {};
								const idp = {};

								for (const i of game.players) {
									const id = i.identity;
									ids.add(id);
									if (!idmap[id]) {
										idmap[id] = 1;
									} else {
										idmap[id]++;
									}
									idp[id] = i;
								}

								if (ids.length != 2) {
									return;
								}
								const id1 = ids[0],
									id2 = ids[1];
								if (idmap[id1] > 1 && idmap[id2] > 1) {
									return;
								}
								if (idmap[id1] > 1 && id1 == 'ye') {
									return;
								}
								if (idmap[id2] > 1 && id2 == 'ye') {
									return;
								}
								if (idmap[id1] == 1) {
									idp[id1].showGiveup();
								}
								if (idmap[id2] == 1) {
									idp[id2].showGiveup();
								}
							}
						},
						checkResult() {
							_status.overing = true;

							for (const i of game.players) {
								i.showCharacter(2);
							}

							if (game.me.identity == 'ye') {
								if (game.me.classList.contains('dead')) {
									game.over('战斗失败');
								} else {
									game.over('战斗胜利');
								}
							} else {
								if (get.population(game.me.identity) == 0) {
									game.over('战斗失败');
								} else {
									game.over('战斗胜利');
								}
							}
							game.showIdentity();
						},
						checkOnlineResult(player) {
							if (player.identity == 'ye') {
								return player.isAlive();
							}
							return get.population(player.identity) > 0;
						},
						chooseCharacter() {
							const shilisuiji = ['wei', 'wei', 'shu', 'shu', 'wu', 'wu', 'qun', 'qun'].randomSort();
							for (let i = 0; i < game.players.length; i++) {
								game.players[i].siguosl = shilisuiji[i];
							}
							const next = game.createEvent('chooseCharacter', false);
							next.showConfig = true;
							next.addPlayer = true;
							next.ai = function (player, list, back) {
								if (_status.brawl && _status.brawl.chooseCharacterAi) {
									if (_status.brawl.chooseCharacterAi(player, list, back) !== false) {
										return;
									}
								}
								for (let i = 0; i < list.length - 1; i++) {
									for (let j = i + 1; j < list.length; j++) {
										if (lib.character[list[i]][1] == lib.character[list[j]][1]) {
											player.init(list[i], list[j], true);
											if (back) {
												list.remove(player.name);
												list.remove(player.name2);

												for (const i of list) {
													back.push(i);
												}
											}
											return;
										}
									}
								}
							};
							next.setContent(function () {
								'step 0';
								ui.arena.classList.add('choose-character');
								const addSetting = function (dialog) {
									dialog.add('选择座位').classList.add('add-setting');
									const seats = document.createElement('table');
									seats.classList.add('add-setting');
									seats.style.margin = '0';
									seats.style.width = '100%';
									seats.style.position = 'relative';
									for (let i = 1; i <= game.players.length; i++) {
										const td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
										td.innerHTML = '<span>' + get.cnNumber(i, true) + '</span>';
										td.link = i - 1;
										seats.appendChild(td);
										td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
											if (_status.dragged) {
												return;
											}
											if (_status.justdragged) {
												return;
											}
											if (_status.cheat_seat) {
												_status.cheat_seat.classList.remove('bluebg');
												if (_status.cheat_seat == this) {
													delete _status.cheat_seat;
													return;
												}
											}
											this.classList.add('bluebg');
											_status.cheat_seat = this;
										});
									}
									dialog.content.appendChild(seats);
									if (game.me == game.zhu) {
										seats.previousSibling.style.display = 'none';
										seats.style.display = 'none';
									}

									dialog.add(ui.create.div('.placeholder.add-setting'));
									dialog.add(ui.create.div('.placeholder.add-setting'));
									if (get.is.phoneLayout()) {
										dialog.add(ui.create.div('.placeholder.add-setting'));
									}
								};
								const removeSetting = function () {
									const dialog = _status.event.dialog;
									if (dialog) {
										dialog.style.height = '';
										delete dialog._scrollset;
										const list = Array.from(dialog.querySelectorAll('.add-setting'));
										while (list.length) {
											list.shift().remove();
										}
										ui.update();
									}
								};
								event.addSetting = addSetting;
								event.removeSetting = removeSetting;

								const chosen = lib.config.continue_name || [];
								game.saveConfig('continue_name');
								event.chosen = chosen;

								var i;
								var list = {
									wei: [],
									shu: [],
									wu: [],
									qun: [],
								};
								for (const i in lib.character) {
									if (i.indexOf('gz_shibing') == 0) {
										continue;
									}
									if (chosen.includes(i)) {
										continue;
									}
									if (lib.filter.characterDisabled(i)) {
										continue;
									}
									if (list[lib.character[i][1]] && (lib.character[i][2] == 3 || lib.character[i][2] == 4 || lib.character[i][2] == 5)) {
										list[lib.character[i][1]].push(i);
									}
								}
								event.list = list[game.me.siguosl];
								event.zlist = list;
								_status.characterlist = event.list.slice(0);
								_status.yeidentity = [];
								if (_status.brawl && _status.brawl.chooseCharacterFilter) {
									event.list = _status.brawl.chooseCharacterFilter(event.list);
								}
								event.list.randomSort();
								var list;
								if (_status.brawl && _status.brawl.chooseCharacter) {
									list = _status.brawl.chooseCharacter(event.list, game.me);
								} else {
									list = game.getCharacterChoice(event.list, parseInt(get.config('choice_num')));
								}
								if (_status.auto) {
									event.ai(game.me, list);
									lib.init.onfree();
								} else if (chosen.length) {
									game.me.init(chosen[0], chosen[1], true);
									lib.init.onfree();
								} else {
									const dialog = ui.create.dialog('选择角色', 'hidden', [list, 'character']);
									if (!_status.brawl || !_status.brawl.noAddSetting) {
										if (get.config('change_identity')) {
											addSetting(dialog);
										}
									}
									const next = game.me.chooseButton(dialog, true, 2).set('onfree', true);
									next.filterButton = function (button) {
										if (ui.dialog.buttons.length <= 10) {
											for (const i of ui.dialog.buttons) {
												if (i != button) {
													if (
														lib.element.player.perfectPair.call({
															name1: button.link,
															name2: i.link,
														})
													) {
														button.classList.add('glow2');
													}
												}
											}
										}
										if (ui.selected.buttons.length == 0) {
											return true;
										}
										return lib.character[button.link][1] == lib.character[ui.selected.buttons[0].link][1];
									};
									next.switchToAuto = function () {
										event.ai(game.me, list);
										ui.arena.classList.remove('selecting');
									};
									const createCharacterDialog = function () {
										event.dialogxx = ui.create.characterDialog(
											'heightset',
											function (i) {
												if (i.indexOf('gz_shibing') == 0) {
													return true;
												}
												if (get.config('onlyguozhan')) {
													if (!lib.characterPack.mode_guozhan[i]) {
														return true;
													}
													if (get.config('junzhu')) {
														if (lib.junList.includes(i.slice(3))) {
															return true;
														}
													} else {
														if (get.is.jun(i)) {
															return true;
														}
													}
												}
											},
											get.config('onlyguozhanexpand') ? 'expandall' : undefined,
											get.config('onlyguozhan') ? 'onlypack:mode_guozhan' : undefined,
										);
										if (ui.cheat2) {
											ui.cheat2.addTempClass('controlpressdownx', 500);
											ui.cheat2.classList.remove('disabled');
										}
									};
									if (lib.onfree) {
										lib.onfree.push(createCharacterDialog);
									} else {
										createCharacterDialog();
									}
									ui.create.cheat2 = function () {
										ui.cheat2 = ui.create.control('自由选将', function () {
											if (this.dialog == _status.event.dialog) {
												if (game.changeCoin) {
													game.changeCoin(50);
												}
												this.dialog.close();
												_status.event.dialog = this.backup;
												this.backup.open();
												delete this.backup;
												game.uncheck();
												game.check();
												if (ui.cheat) {
													ui.cheat.addTempClass('controlpressdownx', 500);
													ui.cheat.classList.remove('disabled');
												}
											} else {
												if (game.changeCoin) {
													game.changeCoin(-10);
												}
												this.backup = _status.event.dialog;
												_status.event.dialog.close();
												_status.event.dialog = _status.event.parent.dialogxx;
												this.dialog = _status.event.dialog;
												this.dialog.open();
												game.uncheck();
												game.check();
												if (ui.cheat) {
													ui.cheat.classList.add('disabled');
												}
											}
										});
										if (lib.onfree) {
											ui.cheat2.classList.add('disabled');
										}
									};
									ui.create.cheat = function () {
										_status.createControl = ui.cheat2;
										ui.cheat = ui.create.control('更换', function () {
											if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
												return;
											}
											if (game.changeCoin) {
												game.changeCoin(-3);
											}
											event.list = event.list.concat(list);
											event.list.randomSort();

											list = game.getCharacterChoice(event.list, parseInt(get.config('choice_num')));
											const buttons = ui.create.div('.buttons');
											const node = _status.event.dialog.buttons[0].parentNode;
											_status.event.dialog.buttons = ui.create.buttons(list, 'character', buttons);
											_status.event.dialog.content.insertBefore(buttons, node);
											buttons.addTempClass('start');
											node.remove();
											game.uncheck();
											game.check();
										});
										delete _status.createControl;
									};
									if (!_status.brawl || !_status.brawl.chooseCharacterFixed) {
										if (!ui.cheat && get.config('change_choice')) {
											ui.create.cheat();
										}
										if (!ui.cheat2 && get.config('free_choose')) {
											ui.create.cheat2();
										}
									}
								}
								('step 1');
								if (ui.cheat) {
									ui.cheat.close();
									delete ui.cheat;
								}
								if (ui.cheat2) {
									ui.cheat2.close();
									delete ui.cheat2;
								}
								if (result.buttons) {
									game.me.init(result.buttons[0].link, result.buttons[1].link, true);
								}
								game.addRecentCharacter(game.me.name, game.me.name2);
								event.list.remove(game.me.name);
								event.list.remove(game.me.name2);

								for (const i of game.players) {
									if (i != game.me) {
										const isls = event.zlist[i.siguosl].randomSort();
										event.ai(i, isls.splice(0, parseInt(get.config('choice_num'))), isls);
									}
								}

								for (const i of game.players) {
									i.classList.add('unseen');
									i.classList.add('unseen2');
									_status.characterlist.remove(i.name);
									_status.characterlist.remove(i.name2);
									if (i != game.me) {
										i.node.identity.firstChild.innerHTML = '';
										i.node.identity.dataset.color = 'unknown';
										i.node.identity.classList.add('guessing');
									}
									i.hiddenSkills = lib.character[i.name][3].slice(0);
									const hiddenSkills2 = lib.character[i.name2][3];

									for (const j of hiddenSkills2) {
										i.hiddenSkills.add(j);
									}

									for (let j = 0; j < i.hiddenSkills.length; j++) {
										if (!lib.skill[i.hiddenSkills[j]]) {
											i.hiddenSkills.splice(j--, 1);
										}
									}
									i.group = 'unknown';
									i.sex = 'unknown';
									i.name1 = i.name;
									i.name = 'unknown';
									i.identity = 'unknown';
									i.node.name.show();
									i.node.name2.show();
									i._group = lib.character[i.name1][1];

									for (const j of i.hiddenSkills) {
										i.addSkillTrigger(j, true);
									}
								}

								setTimeout(function () {
									ui.arena.classList.remove('choose-character');
								}, 500);
							});
						},
					},
					ui: {
						click: {},
					},
					translate: {
						ye: '野',
						ye2: '野心家',
						wei2: '魏国',
						shu2: '蜀国',
						wu2: '吴国',
						qun2: '群雄',
						bumingzhi: '不明置',
						mingzhizhujiang: '明置主将',
						mingzhifujiang: '明置副将',
						tongshimingzhi: '同时明置',
						mode_guozhan_character_config: '国战武将',
						_zhenfazhaohuan: '阵法召唤',
						_zhenfazhaohuan_info: '由拥有阵法技的角色发起,满足此阵法技条件的未确定势力角色均可按逆时针顺序一次明置其一张武将牌(响应阵法召唤),以发挥阵法技的效果',

						gz_jun_liubei: '君刘备',
						gz_jun_zhangjiao: '君张角',

						wuxin: '悟心',
						wuxin_info: '摸牌阶段开始时,你可以观看牌堆顶的X张牌(X为群势力角色的数量),然后将这些牌以任意顺序置于牌堆顶',
						hongfa: '弘法',
						_hongfa: '天兵',
						_hongfa2: '天兵',
						hongfa_info: '君主技,锁定技,当此武将牌明置时,你获得<黄巾天兵符>;准备阶段开始时,若没有<天兵>,你将牌堆顶的X张牌置于<黄巾天兵符>上,称为<天兵>(X为群势力角色的数量)',
						wendao: '问道',
						wendao_info: '出牌阶段限一次,你可以弃置一张红色牌,获得弃牌堆里或场上的一张【太平要术】',
						huangjintianbingfu: '黄巾天兵符',
						huangjintianbingfu_bg: '符',
						huangjintianbingfu_info: '锁定技 :当你计算群势力角色数时,每一张<天兵>均可视为一名群势力角色.<br>每当你失去体力时,你可改为将一张<天兵>置入弃牌堆.<br>与你势力相同的角色可将一张<天兵>当【杀】使用或打出',
						wuhujiangdaqi: '五虎将大旗',
						wuhujiangdaqi_bg: '旗',
						wuhujiangdaqi_info: '存活的蜀势力角色的技能按以下规则改动:<br><strong>武圣</strong>:将<红色牌>改为<任意牌><br><strong>咆哮</strong>:增加描述<你使用的【杀】无视其他角色的防具><br><strong>龙胆</strong>:增加描述<你每发动一次‘龙胆’便摸一张牌><br><strong>烈弓</strong>:增加描述<你的攻击范围+1><br><strong>铁骑</strong>:将<若结果为红色>改为<若结果不为♠️️️️>',
						zhangwu: '章武',
						zhangwu_info: '锁定技.当【飞龙夺凤】进入弃牌堆或其他角色的装备区时,你获得之.当你失去【飞龙夺风】时,展示之,然后将此牌置于牌堆底并摸两张牌',
						shouyue: '授钺',
						shouyue_info: '君主技.只要此武将牌处于明置状态,你便拥有<五虎将大旗>',
						jizhao: '激诏',
						jizhao_bg: '诏',
						jizhao_info: '限定技.当你处于濒死状态时,你可以将手牌补至体力上限,体力回复至2点,失去技能<授钺>并获得技能<仁德>',
						gzshoucheng: '守成',
						gzshoucheng_info: '当与你势力相同的一名角色于其回合外失去最后手牌时,你可以令其摸一张牌',
						gzmingshi: '名士',
						gzmingshi_info: '锁定技,当你受到伤害时,若伤害来源有暗置的武将牌,此伤害-1',
						fengshi: '锋矢',
						_fengshi: '锋矢',
						fengshi_info: '阵法技,在同一个围攻关系中,若你是围攻角色,则你或另一名围攻角色使用【杀】指定被围攻角色为目标后,可令该角色弃置装备区里的一张牌',
						gzsuishi: '随势',
						gzsuishi_info: '锁定技,当其他角色进入濒死状态时,若伤害来源与你势力相同,你摸一张牌;当其他角色死亡时,若其与你势力相同,你失去1点体力',
						baoling: '暴凌',
						baoling_info: '主将技,锁定技,出牌阶段结束时,若你有副将,则你移除副将,然后加3点体力上限,回复3点体力,并获得<崩坏>',
						yingyang: '鹰扬',
						yingyang_info: '当你拼点的牌亮出后,你可以令此牌的点数+3或-3',
						hunshang: '魂殇',
						hunshang_info: '副将技,此武将牌减少半个阴阳鱼;准备阶段,若你的体力值不大于1,则你本回合获得<英姿>和<英魂>',
						gzguixiu: '闺秀',
						gzguixiu_info: '当你明置此武将牌时,你摸两张牌;当你失去此技能时,你回复1点体力',
						gzcunsi: '存嗣',
						gzcunsi_info: '出牌阶段,你可以移除此武将牌并选择一名角色,然后其获得技能<勇决>,若你没有获得<勇决>,则获得<勇决>的角色摸两张牌',
						gzyongjue: '勇决',
						gzyongjue_info: '若与你势力相同的一名角色于其回合内使用的第一张牌为【杀】,则该角色可以在此【杀】结算完成后获得之',
						gzqianxi: '潜袭',
						gzqianxi_info: '准备阶段开始时,你可以进行判定,然后你选择距离为1的一名角色,直到回合结束,该角色不能使用或打出与结果颜色相同的手牌',
						gzshangyi: '尚义',
						gzshangyi_info: '出牌阶段限一次,你可以令一名其他角色观看你的手牌.若如此做,你选择一项:1.观看其手牌并可以弃置其中的一张黑色牌;2.观看其所有暗置的武将牌',
						niaoxiang: '鸟翔',
						_niaoxiang: '鸟翔',
						niaoxiang_info: '阵法技,在同一个围攻关系中,若你是围攻角色,则你或另一名围攻角色使用【杀】指定被围攻角色为目标后,你令该角色需依次使用两张【闪】才能抵消',
						yicheng: '疑城',
						yicheng_info: '当与你势力相同的一名角色成为【杀】的目标后,你可以令该角色摸一张牌然后弃置一张牌',
						yizhi: '遗志',
						yizhi_info: '副将技,此武将牌上单独的阴阳鱼个数-1.若你的主将拥有技能<观星>,则将其描述中的X改为5;若你的主将没有技能<观星>,则你拥有技能<观星>',
						tianfu: '天覆',
						tianfu_info: '主将技,阵法技,若当前回合角色与你处于同一队列,你拥有技能<看破>',
						ziliang: '资粮',
						ziliang_info: '副将技,当与你势力相同的一名角色受到伤害后,你可以将一张<田>交给该角色',
						gzjixi: '急袭',
						gzjixi_info: '主将技,此武将牌减少半个阴阳鱼;你可以将一张<田>当【顺手牵羊】使用',
						huyuan: '护援',
						huyuan_info: '结束阶段开始时,你可以将一张装备牌置入一名角色的装备区,然后你可以弃置该角色距离为1的一名角色的一张牌',
						heyi: '鹤翼',
						heyi_info: '阵法技,与你处于同一队列的其他角色防御距离+1',
						gz_shibing1wei: '魏兵',
						gz_shibing2wei: '魏兵',
						gz_shibing1shu: '蜀兵',
						gz_shibing2shu: '蜀兵',
						gz_shibing1wu: '吴兵',
						gz_shibing2wu: '吴兵',
						gz_shibing1qun: '群兵',
						gz_shibing2qun: '群兵',
						gzduanchang: '断肠',
						gzduanchang_info: '锁定技,当你死亡时,你令击杀你的角色失去一张武将牌的所有技能',
						gzweimu: '帷幕',
						gzweimu_info: '锁定技,当你成为黑色锦囊牌的目标时,则取消之',
						gzqianxun: '谦逊',
						gzqianxun_info: '锁定技,当你成为顺手牵羊或乐不思蜀的目标时,则取消之',
						gzkongcheng: '空城',
						gzkongcheng_info: '锁定技,当你成为【杀】或【决斗】的目标时,若你没有手牌,则取消之',
						gzxiaoji: '枭姬',
						gzxiaoji_info: '当你失去装备区里的牌后,你可以摸两张牌',
						gzrende: '仁德',
						gzrende_info: '出牌阶段,你可以将任意张手牌交给其他角色,然后若你于此阶段内给出第三张<仁德>牌时,你回复1点体力',
						gzzhiheng: '制衡',
						gzzhiheng_info: '出牌阶段限一次,你可以弃置至多X张牌(X为你的体力上限),然后摸等量的牌',
						huoshui: '祸水',
						huoshui_info: '出牌阶段,你可以明置此武将牌;你的回合内,若此武将牌处于明置状态,其他角色不能明置其武将牌',
						qingcheng: '倾城',
						qingcheng_info: '出牌阶段,你可以弃置一张装备牌并选择一名两张武将牌均明置的其他角色,你暗置其一张武将牌',
						duoshi: '度势',
						duoshi_info: '出牌阶段限四次,你可以将一张红色手牌当【以逸待劳】使用',
						gzxiaoguo: '骁果',
						gzxiaoguo_info: '其他角色的结束阶段开始时,你可以弃置一张基本牌,令该角色选择一项:1.弃置一张装备牌;2.受到你对其造成的1点伤害',
						gzduanliang: '断粮',
						gzduanliang_info: '你可以将一张黑色基本牌或黑色装备牌当【兵粮寸断】使用;你可以对距离为2的角色使用【兵粮寸断】',
					},
					guozhanPile: [
						['spade', 7, 'sha'],
						['spade', 8, 'sha'],
						['spade', 8, 'sha'],
						['spade', 9, 'sha'],
						['spade', 9, 'sha'],
						['spade', 10, 'sha'],
						['spade', 10, 'sha'],
						['club', 2, 'sha'],
						['club', 3, 'sha'],
						['club', 4, 'sha'],
						['club', 5, 'sha'],
						['club', 6, 'sha'],
						['club', 7, 'sha'],
						['club', 8, 'sha'],
						['club', 8, 'sha'],
						['club', 9, 'sha'],
						['club', 9, 'sha'],
						['club', 10, 'sha'],
						['club', 10, 'sha'],
						['club', 11, 'sha'],
						['club', 11, 'sha'],
						['heart', 10, 'sha'],
						['heart', 10, 'sha'],
						['heart', 11, 'sha'],
						['diamond', 6, 'sha'],
						['diamond', 7, 'sha'],
						['diamond', 8, 'sha'],
						['diamond', 9, 'sha'],
						['diamond', 10, 'sha'],
						['diamond', 13, 'sha'],
						['heart', 2, 'shan'],
						['heart', 2, 'shan'],
						['heart', 13, 'shan'],
						['diamond', 2, 'shan'],
						['diamond', 2, 'shan'],
						['diamond', 3, 'shan'],
						['diamond', 4, 'shan'],
						['diamond', 5, 'shan'],
						['diamond', 6, 'shan'],
						['diamond', 7, 'shan'],
						['diamond', 8, 'shan'],
						['diamond', 9, 'shan'],
						['diamond', 10, 'shan'],
						['diamond', 11, 'shan'],
						['diamond', 11, 'shan'],
						['heart', 3, 'tao'],
						['heart', 4, 'tao'],
						['heart', 6, 'tao'],
						['heart', 7, 'tao'],
						['heart', 8, 'tao'],
						['heart', 9, 'tao'],
						['heart', 12, 'tao'],
						['diamond', 12, 'tao'],

						['spade', 2, 'bagua'],
						['club', 2, 'bagua'],
						['spade', 5, 'jueying'],
						['club', 5, 'dilu'],
						['heart', 13, 'zhuahuang'],
						['heart', 5, 'chitu'],
						['spade', 13, 'dawan'],
						['diamond', 13, 'zixin'],
						['club', 1, 'zhuge'],
						['diamond', 1, 'zhuge'],
						['spade', 2, 'feilongduofeng'],
						['spade', 6, 'qinggang'],
						['spade', 5, 'qinglong'],
						['spade', 12, 'zhangba'],
						['diamond', 5, 'guanshi'],
						['diamond', 12, 'fangtian'],
						['heart', 5, 'qilin'],

						['heart', 3, 'wugu'],
						['heart', 4, 'wugu'],
						['heart', 1, 'taoyuan'],
						['spade', 7, 'nanman'],
						['spade', 13, 'nanman'],
						['club', 7, 'nanman'],
						['heart', 1, 'wanjian'],
						['spade', 1, 'juedou'],
						['club', 1, 'juedou'],
						['diamond', 1, 'juedou'],
						['heart', 7, 'wuzhong'],
						['heart', 8, 'wuzhong'],
						['heart', 9, 'wuzhong'],
						['heart', 11, 'wuzhong'],
						['spade', 3, 'shunshou'],
						['spade', 4, 'shunshou'],
						['spade', 11, 'shunshou'],
						['diamond', 3, 'shunshou'],
						['diamond', 4, 'shunshou'],
						['spade', 3, 'guohe'],
						['spade', 4, 'guohe'],
						['spade', 12, 'guohe'],
						['club', 3, 'guohe'],
						['club', 4, 'guohe'],
						['heart', 12, 'guohe'],
						['club', 12, 'jiedao'],
						['club', 13, 'jiedao'],
						['spade', 11, 'wuxie'],
						['club', 12, 'wuxie'],
						['club', 13, 'wuxie'],
						['spade', 6, 'lebu'],
						['club', 6, 'lebu'],
						['heart', 6, 'lebu'],
						['spade', 1, 'shandian', 'thunder'],
						['spade', 2, 'hanbing'],
						['club', 2, 'renwang'],
						['heart', 12, 'shandian', 'thunder'],
						['diamond', 12, 'wuxie'],

						['heart', 4, 'sha', 'fire'],
						['heart', 7, 'sha', 'fire'],
						['heart', 10, 'sha', 'fire'],
						['diamond', 4, 'sha', 'fire'],
						['diamond', 5, 'sha', 'fire'],
						['spade', 4, 'sha', 'thunder'],
						['spade', 5, 'sha', 'thunder'],
						['spade', 6, 'sha', 'thunder'],
						['spade', 7, 'sha', 'thunder'],
						['spade', 8, 'sha', 'thunder'],
						['club', 5, 'sha', 'thunder'],
						['club', 6, 'sha', 'thunder'],
						['club', 7, 'sha', 'thunder'],
						['club', 8, 'sha', 'thunder'],
						['heart', 8, 'shan'],
						['heart', 9, 'shan'],
						['heart', 11, 'shan'],
						['heart', 12, 'shan'],
						['diamond', 6, 'shan'],
						['diamond', 7, 'shan'],
						['diamond', 8, 'shan'],
						['diamond', 10, 'shan'],
						['diamond', 11, 'shan'],
						['heart', 5, 'tao'],
						['heart', 6, 'tao'],
						['diamond', 2, 'tao'],
						['diamond', 3, 'tao'],
						['diamond', 9, 'jiu'],
						['spade', 3, 'jiu'],
						['spade', 9, 'jiu'],
						['club', 3, 'jiu'],
						['club', 9, 'jiu'],

						['diamond', 13, 'hualiu'],
						['club', 1, 'baiyin'],
						['spade', 2, 'tengjia', 'fire'],
						['club', 2, 'tengjia', 'fire'],
						['spade', 1, 'guding'],
						['diamond', 1, 'zhuque', 'fire'],

						['heart', 2, 'huogong', 'fire'],
						['heart', 3, 'huogong', 'fire'],
						['diamond', 12, 'huogong', 'fire'],
						['spade', 11, 'tiesuo'],
						['spade', 12, 'tiesuo'],
						['club', 10, 'tiesuo'],
						['club', 11, 'tiesuo'],
						['club', 12, 'tiesuo'],
						['club', 13, 'tiesuo'],
						['heart', 13, 'wuxie'],
						['heart', 13, 'wuxie'],
						['spade', 13, 'wuxie'],
						['spade', 10, 'bingliang'],
						['club', 4, 'bingliang'],

						['heart', 9, 'yuanjiao'],
						['club', 3, 'zhibi'],
						['club', 4, 'zhibi'],
						['diamond', 4, 'yiyi'],
						['heart', 11, 'yiyi'],
						['diamond', 6, 'wuliu'],
						['diamond', 12, 'sanjian'],
						['heart', 3, 'jingfanma'],
						['spade', 4, 'shunshou'],
						['spade', 12, 'guohe'],
						['spade', 11, 'wuxie'],
						['spade', 3, 'huoshaolianying', 'fire'],
						['club', 11, 'huoshaolianying', 'fire'],
						['heart', 12, 'huoshaolianying', 'fire'],
						['club', 2, 'huxinjing'],
						['heart', 2, 'diaohulishan'],
						['diamond', 10, 'diaohulishan'],
						['heart', 1, 'lianjunshengyan'],
						['club', 3, 'chiling'],
						['spade', 12, 'lulitongxin'],
						['club', 10, 'lulitongxin'],
						['club', 12, 'shuiyanqijunx'],
						['heart', 13, 'shuiyanqijunx'],
						['spade', 1, 'xietianzi'],
						['diamond', 1, 'xietianzi'],
						['diamond', 4, 'xietianzi'],
						['club', 1, 'yuxi'],
						['heart', 3, 'taipingyaoshu'],
					],
					element: {
						content: {
							zhulian() {
								player.popup('珠联璧合');
								game.log(player, '发动了【珠联璧合】');
								player.chooseDrawRecover(2, true, '珠联璧合:摸两张牌或回复一点体力');
							},
						},
						player: {
							getModeState() {
								return {
									unseen: this.isUnseen(0),
									unseen2: this.isUnseen(1),
								};
							},
							setModeState(info) {
								if (info.mode.unseen) {
									this.classList.add('unseen');
								}
								if (info.mode.unseen2) {
									this.classList.add('unseen2');
								}
								if (!info.name) {
									return;
								}

								this.init(info.name1, info.name2, false);
								this.name1 = info.name1;
								this.name = info.name;
								this.node.name_seat = ui.create.div('.name.name_seat', get.verticalStr(lib.translate[this.name].slice(0, 3)), this);
								if (info.identityShown) {
									this.setIdentity(info.identity);
									this.node.identity.classList.remove('guessing');
								} else if (this != game.me) {
									this.node.identity.firstChild.innerHTML = '';
									this.node.identity.dataset.color = 'unknown';
									this.node.identity.classList.add('guessing');
								}
							},
							dieAfter(source) {
								this.showCharacter(2);
								if (get.is.jun(this.name1)) {
									const yelist = [];

									for (const i of game.players) {
										if (i.identity == this.identity) {
											yelist.push(i);
										}
									}

									game.broadcastAll(function (list) {
										for (const i of list) {
											i.identity = 'ye';
											i.setIdentity();
										}
									}, yelist);
									_status.yeidentity.add(this.identity);
								}
								if (source && source.identity != 'unknown') {
									if (this.identity == 'ye') {
										source.draw(1);
									} else if (this.identity != source.identity) {
										source.draw(get.population(this.identity) + 1);
									} else {
										source.discard(source.getCards('he'));
									}
								}
								game.tryResult();
							},
							viewCharacter(target, num) {
								if (num != 0 && num != 1) {
									num = 2;
								}
								if (!target.isUnseen(num)) {
									return;
								}
								const next = game.createEvent('viewCharacter');
								next.player = this;
								next.target = target;
								next.num = num;
								next.setContent(function () {
									let content,
										str = get.translation(target) + '的';
									if (event.num == 0 || !target.isUnseen(1)) {
										content = [str + '主将', [[target.name1], 'character']];
										game.log(player, '观看了', target, '的主将');
									} else if (event.num == 1 || !target.isUnseen(0)) {
										content = [str + '副将', [[target.name2], 'character']];
										game.log(player, '观看了', target, '的副将');
									} else {
										content = [str + '主将和副将', [[target.name1, target.name2], 'character']];
										game.log(player, '观看了', target, '的主将和副将');
									}
									player.chooseControl('ok').set('dialog', content);
								});
							},
							checkViceSkill(skill, disable) {
								if (game.expandSkills(lib.character[this.name2][3].slice(0)).includes(skill)) {
									return true;
								} else {
									if (disable !== false) {
										this.awakenSkill(skill);
									}
									return false;
								}
							},
							checkMainSkill(skill, disable) {
								if (game.expandSkills(lib.character[this.name1][3].slice(0)).includes(skill)) {
									return true;
								} else {
									if (disable !== false) {
										this.awakenSkill(skill);
									}
									return false;
								}
							},
							removeMaxHp() {
								if (game.online) {
									return;
								}
								if (typeof this.singleHp == 'boolean') {
									if (this.singleHp) {
										this.singleHp = false;
									} else {
										this.singleHp = true;
										this.maxHp--;
									}
								} else {
									this.maxHp--;
								}
							},
							hideCharacter(num, log) {
								if (this.isUnseen(2)) {
									return;
								}
								game.addVideo('hideCharacter', this, num);
								let skills;
								switch (num) {
									case 0:
										if (log !== false) {
											game.log(this, '暗置了主将' + get.translation(this.name1));
										}
										skills = lib.character[this.name][3];
										this.name = this.name2;
										this.sex = lib.character[this.name2][0];
										this.classList.add('unseen');
										break;
									case 1:
										if (log !== false) {
											game.log(this, '暗置了副将' + get.translation(this.name2));
										}
										skills = lib.character[this.name2][3];
										this.classList.add('unseen2');
										break;
								}
								game.broadcast(
									function (player, name, sex, num, skills) {
										player.name = name;
										player.sex = sex;
										switch (num) {
											case 0:
												player.classList.add('unseen');
												break;
											case 1:
												player.classList.add('unseen2');
												break;
										}

										for (const i of skills) {
											if (!player.skills.includes(i)) {
												continue;
											}
											player.hiddenSkills.add(i);
											player.skills.remove(i);
										}
									},
									this,
									this.name,
									this.sex,
									num,
									skills,
								);

								for (const i of skills) {
									if (!this.skills.includes(i)) {
										continue;
									}
									this.hiddenSkills.add(i);
									const info = get.info(i);
									if (info.ondisable && info.onremove) {
										info.onremove(this);
									}
									this.skills.remove(i);
								}

								this.checkConflict();
							},
							removeCharacter(num) {
								const name = this['name' + (num + 1)];
								const info = lib.character[name];
								if (!info) {
									return;
								}
								const to = 'gz_shibing' + (info[0] == 'male' ? 1 : 2) + info[1];
								game.log(this, '移除了' + (num ? '副将' : '主将'), '#b' + name);
								this.reinit(name, to, false);
								this.showCharacter(num, false);
							},
							hasMainCharacter() {
								return this.name1.indexOf('gz_shibing') != 0;
							},
							hasViceCharacter() {
								return this.name2.indexOf('gz_shibing') != 0;
							},
							showCharacter(num, log) {
								if (num == 0 && !this.isUnseen(0)) {
									return;
								}
								if (num == 1 && !this.isUnseen(1)) {
									return;
								}
								if (!this.isUnseen(2)) {
									return;
								}
								game.addVideo('showCharacter', this, num);
								if (this.identity == 'unknown') {
									this.group = lib.character[this.name1][1];
									if (get.is.jun(this) && this.isAlive()) {
										this.identity = this.group;
										const yelist = [];

										for (const i of game.players) {
											if (i.identity == 'ye' && i._group == this.group) {
												yelist.push(i);
											}
										}

										game.broadcastAll(
											function (list, group) {
												for (const i of list) {
													i.identity = group;
													i.setIdentity();
												}
											},
											yelist,
											this.group,
										);
									} else if (this.wontYe()) {
										this.identity = this.group;
									} else {
										this.identity = 'ye';
									}
									this.setIdentity(this.identity);
									this.ai.shown = 1;
									this.node.identity.classList.remove('guessing');

									if (_status.clickingidentity && _status.clickingidentity[0] == this) {
										for (let i = 0; i < _status.clickingidentity[1].length; i++) {
											_status.clickingidentity[1][i].delete();
											_status.clickingidentity[1][i].style.transform = '';
										}
										delete _status.clickingidentity;
									}
									game.addVideo('setIdentity', this, this.identity);
								}
								let skills;
								switch (num) {
									case 0:
										if (log !== false) {
											game.log(this, '展示了主将', '#b' + this.name1);
										}
										this.name = this.name1;
										skills = lib.character[this.name][3];
										this.sex = lib.character[this.name][0];
										this.classList.remove('unseen');
										break;
									case 1:
										if (log !== false) {
											game.log(this, '展示了副将', '#b' + this.name2);
										}
										skills = lib.character[this.name2][3];
										if (this.sex == 'unknown') {
											this.sex = lib.character[this.name2][0];
										}
										if (this.name.indexOf('unknown') == 0) {
											this.name = this.name2;
										}
										this.classList.remove('unseen2');
										break;
									case 2:
										if (log !== false) {
											game.log(this, '展示了主将', '#b' + this.name1, '、副将', '#b' + this.name2);
										}
										this.name = this.name1;
										skills = lib.character[this.name][3].concat(lib.character[this.name2][3]);
										this.sex = lib.character[this.name][0];
										this.classList.remove('unseen');
										this.classList.remove('unseen2');
										break;
								}
								game.broadcast(
									function (player, name, sex, num, identity) {
										player.identityShown = true;
										player.name = name;
										player.sex = sex;
										player.node.identity.classList.remove('guessing');
										switch (num) {
											case 0:
												player.classList.remove('unseen');
												break;
											case 1:
												player.classList.remove('unseen2');
												break;
											case 2:
												player.classList.remove('unseen');
												player.classList.remove('unseen2');
												break;
										}
										player.ai.shown = 1;
										player.identity = identity;
										player.setIdentity(identity);
										if (_status.clickingidentity && _status.clickingidentity[0] == player) {
											for (let i = 0; i < _status.clickingidentity[1].length; i++) {
												_status.clickingidentity[1][i].delete();
												_status.clickingidentity[1][i].style.transform = '';
											}
											delete _status.clickingidentity;
										}
									},
									this,
									this.name,
									this.sex,
									num,
									this.identity,
								);
								this.identityShown = true;
								const initdraw = parseInt(get.config('initshow_draw'));
								if (!_status.initshown && !_status.overing && initdraw && this.isAlive() && _status.mode != 'mingjiang') {
									this.popup('首亮');
									game.log(this, '首先明置武将,得到奖励');
									game.log(this, '摸了' + get.cnNumber(initdraw) + '张牌');
									this.draw(initdraw).log = false;
									_status.initshown = true;
								}

								for (const i of skills) {
									this.hiddenSkills.remove(i);
									this.addSkill(i);
								}

								this.checkConflict();
								if (!this.isUnseen(2) && !this._mingzhied) {
									this._mingzhied = true;
									if (this.singleHp) {
										this.doubleDraw();
									}
									if (this.perfectPair()) {
										const next = game.createEvent('guozhanDraw');
										next.player = this;
										next.setContent('zhulian');
									}
								}
							},
							wontYe() {
								const group = lib.character[this.name1][1];
								if (_status.yeidentity && _status.yeidentity.includes(group)) {
									return false;
								}
								if (get.zhu(this, null, true)) {
									return true;
								}
								return get.totalPopulation(group) + 1 <= get.population() / 2;
							},
							perfectPair() {
								if (_status.connectMode) {
									if (!lib.configOL.zhulian) {
										return false;
									}
								} else {
									if (!get.config('zhulian')) {
										return false;
									}
								}
								let name1 = this.name1;
								let name2 = this.name2;
								if (name1.indexOf('gz_shibing') == 0) {
									return false;
								}
								if (name2.indexOf('gz_shibing') == 0) {
									return false;
								}
								if (lib.character[name1][1] != lib.character[name2][1]) {
									return false;
								}
								if (get.is.jun(this.name1)) {
									return true;
								}
								const list = ['re', 'diy', 'sp', 'jsp', 'shen', 'jg', 'xin', 'old', 'gz'];

								for (const i of list) {
									if (name1.indexOf(i + '_') == 0) {
										name1 = name1.slice(i.length + 1);
									}
									if (name2.indexOf(i + '_') == 0) {
										name2 = name2.slice(i.length + 1);
									}
								}

								if (lib.perfectPair[name1] && lib.perfectPair[name1].includes(name2)) {
									return true;
								}
								if (lib.perfectPair[name2] && lib.perfectPair[name2].includes(name1)) {
									return true;
								}
								return false;
							},
							siege(player) {
								if (this.identity == 'unknown' || this.identity == 'ye' || this.hasSkill('undist')) {
									return false;
								}
								if (!player) {
									const next = this.next;
									if (next && next.sieged()) {
										return true;
									}
									const previous = this.previous;
									if (previous && previous.sieged()) {
										return true;
									}
									return false;
								} else {
									return player.sieged() && (player.next == this || player.previous == this);
								}
							},
							sieged(player) {
								if (this.identity == 'unknown') {
									return false;
								}
								if (player) {
									return player.siege(this);
								} else {
									const next = this.next;
									const previous = this.previous;
									if (next && previous && next != previous) {
										if (next.identity == 'unknown' || next.identity == 'ye' || next.identity == this.identity) {
											return false;
										}
										return next.identity == previous.identity;
									}
									return false;
								}
							},
							inline() {
								if (this.identity == 'unknown' || this.identity == 'ye' || this.hasSkill('undist')) {
									return false;
								}
								let next = this,
									previous = this;
								const list = [];
								for (let i = 0; next || previous; i++) {
									if (next) {
										next = next.next;
										if (next.identity != this.identity || next == this) {
											next = null;
										} else {
											list.add(next);
										}
									}
									if (previous) {
										previous = previous.previous;
										if (previous.identity != this.identity || previous == this) {
											previous = null;
										} else {
											list.add(previous);
										}
									}
								}
								if (!list.length) {
									return false;
								}

								for (const i of arguments) {
									if (!list.includes(i) && i != this) {
										return false;
									}
								}

								return true;
							},
							isMajor() {
								if (!lib.group.includes(this.identity)) {
									return false;
								}
								const list = [];

								for (const i of game.players) {
									if (i.getEquip('yuxi')) {
										if (i.identity != 'ye' && i.identity != 'unknown') {
											list.add(i.identity);
										}
									}
								}

								if (list.length) {
									return list.includes(this.identity);
								}
								let max = 0;

								for (const i of lib.group) {
									max = Math.max(max, get.population(i));
								}

								if (max <= 1) {
									return false;
								}
								return get.population(this.identity) == max;
							},
							isNotMajor() {
								for (const i of game.players) {
									if (i.isMajor()) {
										return !this.isMajor();
									}
								}

								return false;
							},
							isMinor() {
								if (this.identity == 'unknown') {
									return false;
								}
								if (!lib.group.includes(this.identity)) {
									return true;
								}
								let min = game.players.length;
								if (
									game.hasPlayer(function (current) {
										return current.identity == 'ye';
									})
								) {
									min = 1;
								} else {
									for (const i of lib.group) {
										const num = get.population(i);
										if (num > 0) {
											min = Math.min(min, num);
										}
									}
								}
								return get.population(this.identity) == min;
							},
							logAi(targets, card) {
								if (this.ai.shown == 1 || this.isMad()) {
									return;
								}
								if (typeof targets == 'number') {
									this.ai.shown += targets;
								} else {
									let effect = 0,
										c,
										shown;
									const info = get.info(card);
									if (info.ai && info.ai.expose) {
										if (_status.event.name == '_wuxie') {
											if (_status.event.source && _status.event.source.ai.shown) {
												this.ai.shown += 0.2;
											}
										} else {
											this.ai.shown += info.ai.expose;
										}
									}
									if (targets.length) {
										for (const i of targets) {
											shown = Math.abs(i.ai.shown);
											if (shown < 0.2 || i.identity == 'nei') {
												c = 0;
											} else if (shown < 0.4) {
												c = 0.5;
											} else if (shown < 0.6) {
												c = 0.8;
											} else {
												c = 1;
											}
											effect += get.effect(i, card, this) * c;
										}
									}
									if (effect > 0) {
										if (effect < 1) {
											c = 0.5;
										} else {
											c = 1;
										}
										if (targets.length == 1 && targets[0] == this) {
										} else if (targets.length == 1) {
											this.ai.shown += 0.2 * c;
										} else {
											this.ai.shown += 0.1 * c;
										}
									}
								}
								if (this.ai.shown > 0.95) {
									this.ai.shown = 0.95;
								}
								if (this.ai.shown < -0.5) {
									this.ai.shown = -0.5;
								}
							},
						},
					},
					get: {
						realAttitude(from, toidentity, difficulty) {
							if (from.identity == toidentity && toidentity != 'ye') {
								return 4 + difficulty;
							}
							if (from.identity == 'unknown' && lib.character[from.name1][1] == toidentity) {
								if (from.wontYe()) {
									return 4 + difficulty;
								}
							}
							const groups = [];

							for (const i of lib.group) {
								groups.push(get.population(i));
							}

							const max = Math.max.apply(this, groups);
							if (max <= 1) {
								return -3;
							}
							let from_p = get.population(from.identity != 'unknown' ? from.identity : lib.character[from.name1][1]);
							let to_p = get.population(toidentity);
							if (from.identity == 'ye') {
								from_p = 1;
							}
							if (toidentity == 'ye') {
								to_p = 1;
							}

							if (to_p == max) {
								return -5;
							}
							if (from_p == max) {
								return -2 - get.population(toidentity);
							}
							if (max >= game.players.length / 2) {
								if (to_p <= from_p) {
									return 0.5;
								}
								return 0;
							}
							if (to_p < max - 1) {
								return 0;
							}
							return -0.5;
						},
						rawAttitude(from, to) {
							if (to.identity == 'unknown' && game.players.length == 2) {
								return -5;
							}
							if (_status.currentPhase == from && from.ai.tempIgnore && from.ai.tempIgnore.includes(to) && to.identity == 'unknown' && (!from.storage.zhibi || !from.storage.zhibi.includes(to))) {
								return 0;
							}
							let difficulty = 0;
							if (to == game.me) {
								difficulty = (2 - get.difficulty()) * 1.5;
							}
							if (from == to) {
								return 5 + difficulty;
							}
							if (from.identity == to.identity && from.identity != 'unknown' && from.identity != 'ye') {
								return 5 + difficulty;
							}
							if (from.identity == 'unknown' && lib.character[from.name1][1] == to.identity) {
								if (from.wontYe()) {
									return 4 + difficulty;
								}
							}
							let toidentity = to.identity;
							if (toidentity == 'unknown') {
								toidentity = lib.character[to.name1][1];
								if (get.population(toidentity) >= get.population() - 2) {
									toidentity = 'ye';
								}
							}
							const att = get.realAttitude(from, toidentity, difficulty);
							if (from.storage.zhibi && from.storage.zhibi.includes(to)) {
								return att;
							}
							if (to.ai.shown >= 0.5) {
								return att * to.ai.shown;
							}

							let nshown = 0;

							for (const i of game.players) {
								if (i != from && i.identity == 'unknown') {
									nshown++;
								}
							}

							if (to.ai.shown == 0) {
								if (nshown >= game.players.length / 2 && att >= 0) {
									return 0;
								}
								return Math.min(0, Math.random() - 0.5) + difficulty;
							}
							if (to.ai.shown >= 0.2) {
								if (att > 2) {
									return Math.max(0, Math.random() - 0.5) + difficulty;
								}
								if (att >= 0) {
									return 0;
								}
								return Math.min(0, Math.random() - 0.7) + difficulty;
							}
							if (att > 2) {
								return Math.max(0, Math.random() - 0.7) + difficulty;
							}
							if (att >= 0) {
								return Math.min(0, Math.random() - 0.3) + difficulty;
							}
							return Math.min(0, Math.random() - 0.5) + difficulty;
						},
					},
				},
				{
					translate: '龙舟国战',
					extension: '龙舟国战模式',
					connect: {
						connect_player_number: {
							name: '游戏人数',
							init: '8',
							item: {
								3: '三人',
								4: '四人',
								5: '五人',
								6: '六人',
								7: '七人',
								8: '八人',
							},
							forced: true,
							restart: true,
						},
						connect_initshow_draw: {
							name: '首亮摸牌',
							item: {
								0: '关闭',
								1: '一张',
								2: '两张',
								3: '三张',
							},
							init: '2',
							forced: true,
							intro: '第一个明置身份牌的角色可获得摸牌奖励',
						},
						connect_zhulian: {
							name: '珠联璧合',
							init: true,

							intro: '主将和副将都明置后,若为特定组合,可摸两张牌或回复一点体力',
						},
						connect_ban_weak: {
							name: '屏蔽弱将',
							init: false,
							restart: true,
						},
						connect_ban_strong: {
							name: '屏蔽强将',
							init: false,
							restart: true,
						},
					},
					config: {
						player_number: {
							name: '游戏人数',
							init: '8',
							item: {
								3: '三人',
								4: '四人',
								5: '五人',
								6: '六人',
								7: '七人',
								8: '八人',
							},
							forced: true,
							restart: true,
						},
						initshow_draw: {
							name: '首亮摸牌',
							item: {
								0: '关闭',
								1: '一张',
								2: '两张',
								3: '三张',
							},
							init: '2',
							forced: true,
							intro: '第一个明置身份牌的角色可获得摸牌奖励',
						},
						zhulian: {
							name: '珠联璧合',
							init: true,

							intro: '主将和副将都明置后,若为特定组合,可摸两张牌或回复一点体力',
						},
						double_hp: {
							name: '双将体力上限',
							init: 'pingjun',
							item: {
								hejiansan: '和减三',
								pingjun: '平均值',
								zuidazhi: '最大值',
								zuixiaozhi: '最小值',
								zonghe: '相加',
							},
							restart: true,
						},
						ban_weak: {
							name: '屏蔽弱将',
							init: true,
							restart: true,
						},
						ban_strong: {
							name: '屏蔽强将',
							init: false,
							restart: true,
						},
						free_choose: {
							name: '自由选将',
							init: true,
							onclick(bool) {
								game.saveConfig('free_choose', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								if (!ui.cheat2 && get.config('free_choose')) {
									ui.create.cheat2();
								} else if (ui.cheat2 && !get.config('free_choose')) {
									ui.cheat2.close();
									delete ui.cheat2;
								}
							},
						},
						onlyguozhanexpand: {
							name: '默认展开自由选将',
							init: false,
							restart: true,
							intro: '开启后自由选将对话框将默认显示全部武将',
						},
						change_identity: {
							name: '自由选择座位',
							init: true,
							onclick(bool) {
								game.saveConfig('change_identity', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								let dialog;
								if (ui.cheat2 && ui.cheat2.backup) {
									dialog = ui.cheat2.backup;
								} else {
									dialog = _status.event.dialog;
								}
								if (!_status.brawl || !_status.brawl.noAddSetting) {
									if (!dialog.querySelector('table') && get.config('change_identity')) {
										_status.event.parent.addSetting(dialog);
									} else {
										_status.event.parent.removeSetting(dialog);
									}
								}
								ui.update();
							},
						},
						change_choice: {
							name: '开启换将卡',
							init: true,
							onclick(bool) {
								game.saveConfig('change_choice', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								if (!ui.cheat && get.config('change_choice')) {
									ui.create.cheat();
								} else if (ui.cheat && !get.config('change_choice')) {
									ui.cheat.close();
									delete ui.cheat;
								}
							},
						},
						change_card: {
							name: '开启手气卡',
							init: 'disabled',
							item: {
								disabled: '禁用',
								once: '一次',
								twice: '两次',
								unlimited: '无限',
							},
						},
						continue_game: {
							name: '显示再战',
							init: true,
							intro: '游戏结束后可选择用相同的武将再进行一局游戏',
							onclick(bool) {
								game.saveConfig('continue_game', bool, this._link.config.mode);
								if (get.config('continue_game')) {
									if (!ui.continue_game && _status.over && !_status.brawl) {
										ui.continue_game = ui.create.control('再战', game.reloadCurrent);
									}
								} else if (ui.continue_game) {
									ui.continue_game.close();
									delete ui.continue_game;
								}
							},
						},
						dierestart: {
							name: '死亡后显示重来',
							init: true,
							onclick(bool) {
								game.saveConfig('dierestart', bool, this._link.config.mode);
								if (get.config('dierestart')) {
									if (!ui.restart && game.me.isDead() && !_status.connectMode) {
										ui.restart = ui.create.control('restart', game.reload);
									}
								} else if (ui.restart) {
									ui.restart.close();
									delete ui.restart;
								}
							},
						},
						revive: {
							name: '死亡后显示复活',
							init: false,
							onclick(bool) {
								game.saveConfig('revive', bool, this._link.config.mode);
								if (get.config('revive')) {
									if (!ui.revive && game.me.isDead()) {
										ui.revive = ui.create.control('revive', ui.click.dierevive);
									}
								} else if (ui.revive) {
									ui.revive.close();
									delete ui.revive;
								}
							},
						},
						difficulty: {
							name: 'AI对人类态度',
							init: 'normal',
							item: {
								easy: '友好',
								normal: '一般',
								hard: '仇视',
							},
						},
						choice_num: {
							name: '候选武将数',
							init: '7',
							restart: true,
							item: {
								5: '五',
								6: '六',
								7: '七',
								8: '八',
								9: '九',
								10: '十',
								16: '十六',
								20: '二十',
							},
						},
					},
				},
			);
			lib.mode.longzhouguozhan.splash = 'ext:龙舟国战模式/龙舟国战模式.jpg';

			lib.arenaReady.push(function () {
				if (lib.brawl) {
					lib.brawl.ssbx = {
						name: '杀上保下',
						mode: 'identity',
						intro: ['游戏人数:3人', '规则:击杀你的上家;保护你的下家'],
						showcase(init) {
							if (_status.kzol_ssbx_showcase != true) {
								_status.kzol_ssbx_showcase = true;

								this.parentNode.style['overflow-x'] = 'hidden';
								this.parentNode.style['overflow-y'] = 'scroll';
								this.parentNode.childNodes[0].style.position = 'fixed';

								const players = [];

								const player1 = ui.create.player(null, true).init('liubei');
								player1.node.count.style.display = 'none';
								player1.node.hp.style.display = 'none';
								this.appendChild(player1);
								player1.style.top = player1.offsetHeight + 100 + 'px';
								player1.style.left = 'calc(50% - ' + (player1.offsetWidth / 2 - 6) + 'px)';
								players.push(player1);
								const player2 = ui.create.player(null, true).init('sunquan');
								player2.node.count.style.display = 'none';
								player2.node.hp.style.display = 'none';
								this.appendChild(player2);
								player2.style.top = '0px';
								player2.style.left = '6px';
								players.push(player2);
								const player3 = ui.create.player(null, true).init('caocao');
								player3.node.count.style.display = 'none';
								player3.node.hp.style.display = 'none';
								this.appendChild(player3);
								player3.style.top = '0px';
								player3.style.left = 'calc(100% - ' + (player1.offsetWidth + 6) + 'px)';
								players.push(player3);

								player1.next = player3;
								player1.previous = player2;
								player2.next = player1;
								player2.previous = player3;
								player3.next = player2;
								player3.previous = player1;

								let player_cs = player1;
								const func = function () {
									for (const i of players) {
										const pl = i;
										pl.style['box-shadow'] = 'none';
										if (pl == player_cs.next) {
											pl.node.identity.firstChild.innerHTML = '保';
											pl.node.identity.dataset.color = 'zhong';
										}
										if (pl == player_cs.previous) {
											pl.node.identity.firstChild.innerHTML = '杀';
											pl.node.identity.dataset.color = 'fan';
										}
									}

									player_cs.node.identity.firstChild.innerHTML = '己';
									player_cs.node.identity.dataset.color = 'zhu';
									player_cs.style['box-shadow'] = 'rgba(0, 0, 0, 0.2) 0 0 0 1px,rgba(255, 0, 0, 0.4) 0 0 5px, rgba(255, 0, 0, 0.4) 0 0 12px, rgba(255, 0, 0, 0.8) 0 0 15px';
									player_cs = player_cs.next;
								};
								func();
								setInterval(func, 3000);
							}
						},
						content: {
							chooseCharacterBefore() {
								game.checkResult = function () {
									if (
										game.countPlayer(function (current) {
											return current.identity == 'kaol_bao';
										}) == 0 ||
										game.me.isDead()
									) {
										game.over(false);
									}
									if (
										game.countPlayer(function (current) {
											return current.identity == 'kaol_sha';
										}) == 0
									) {
										game.over(true);
									}
								};
								get.rawAttitude = function (from, to) {
									if (from == undefined || to == undefined) {
										return 0;
									}
									if (from == to || from.identity == to.identity) {
										return 3;
									}
									if (from == game.me && to.identity == 'kaol_bao') {
										return 5;
									}
									if (from == game.me && to.identity == 'kaol_sha') {
										return -5;
									}
									if (from.identity == 'kaol_bao' && to == game.me) {
										return -5;
									}
									if (from.identity == 'kaol_bao' && to.identity == 'kaol_sha') {
										return 5;
									}
									if (from.identity == 'kaol_sha' && to == game.me) {
										return 5;
									}
									if (from.identity == 'kaol_sha' && to.identity == 'kaol_bao') {
										return -5;
									}
									return 0;
								};
							},
							gameStart() {
								if (ui.playerids) {
									ui.playerids.style.display = 'none';
								}
								game.showIdentity();

								for (const i of game.players) {
									const pl = i;
									pl.identity = '';
									pl.node.identity.firstChild.innerHTML = '';
									if (pl == game.me.next) {
										pl.identity = 'kaol_bao';
										pl.node.identity.firstChild.innerHTML = '保';
										pl.node.identity.dataset.color = 'zhong';
									}
									if (pl == game.me.previous) {
										pl.identity = 'kaol_sha';
										pl.node.identity.firstChild.innerHTML = '杀';
										pl.node.identity.dataset.color = 'fan';
									}
								}

								const showIdentity = game.showIdentity;
								game.showIdentity = function (me) {
									showIdentity.apply(this, arguments);

									for (const i of game.players) {
										const pl = i;
										if (pl.identity == 'kaol_bao') {
											pl.node.identity.firstChild.innerHTML = '保';
											pl.node.identity.dataset.color = 'zhong';
										}
										if (pl.identity == 'kaol_sha') {
											pl.node.identity.firstChild.innerHTML = '杀';
											pl.node.identity.dataset.color = 'fan';
										}
									}
								};
							},
						},
						init() {
							game.identityVideoName = '杀上保下';
							lib.config.mode_config.identity.player_number = 3;
							lib.config.mode_config.identity.change_identity = false;
							lib.config.mode_config.identity.identity_mode = 'normal';

							lib.translate.kaol_bao = '保';
							lib.translate.kaol_sha = '杀';
							lib.translate.kaol_bao2 = '保护';
							lib.translate.kaol_sha2 = '击杀';
							const swapPlayer = game.swapPlayer;
							game.swapPlayer = function (player, player2) {
								swapPlayer.apply(this, arguments);

								for (const i of game.players) {
									const pl = i;
									pl.identity = '';
									pl.node.identity.firstChild.innerHTML = '';
									if (pl == game.me.next) {
										pl.identity = 'kaol_bao';
										pl.node.identity.firstChild.innerHTML = '保';
										pl.node.identity.dataset.color = 'zhong';
									}
									if (pl == game.me.previous) {
										pl.identity = 'kaol_sha';
										pl.node.identity.firstChild.innerHTML = '杀';
										pl.node.identity.dataset.color = 'fan';
									}
								}
							};
							const swapSeat = game.swapSeat;
							game.swapSeat = function (player1, player2, prompt, behind, noanimate) {
								swapSeat.apply(this, arguments);

								for (const i of game.players) {
									const pl = i;
									pl.identity = '';
									pl.node.identity.firstChild.innerHTML = '';
									if (pl == game.me.next) {
										pl.identity = 'kaol_bao';
										pl.node.identity.firstChild.innerHTML = '保';
										pl.node.identity.dataset.color = 'zhong';
									}
									if (pl == game.me.previous) {
										pl.identity = 'kaol_sha';
										pl.node.identity.firstChild.innerHTML = '杀';
										pl.node.identity.dataset.color = 'fan';
									}
								}
							};
						},
					};
					lib.brawl.gcms = {
						name: '攻城模式',
						mode: 'chess',
						intro: ['棋盘大小固定为15X15', '游戏开始时,创建两座城池,位置分别为[2,2]和[12,12],然后将玩家分布位置在己方城池附近', '回合内,距离大于5的角色视为在游戏外', '回合开始前,若玩家与己方城池距离小于或等于一,该玩家回复一点体力', '当城池体力将为零时,游戏结束'],
						content: {
							gameStart() {
								const cssRule = `
        #chess {
            background-image: url("${lib.assetURL}extension/龙舟国战/heiyaoshi.png") !important;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    `;

								const styleElement = document.createElement('style');

								styleElement.innerText = cssRule;

								document.head.appendChild(styleElement);
							},
						},
						init() {
							game.identityVideoName = '攻城模式';
							let zoom1 = lib.config.ui_zoom;
							switch (zoom1) {
								case 'esmall':
									zoom1 = 0.8;
									break;
								case 'vsmall':
									zoom1 = 0.9;
									break;
								case 'small':
									zoom1 = 0.93;
									break;
								case 'big':
									zoom1 = 1.05;
									break;
								case 'vbig':
									zoom1 = 1.1;
									break;
								case 'ebig':
									zoom1 = 1.2;
									break;
								default:
									zoom1 = 1;
							}
							game.documentZoom = game.deviceZoom * 0.8 * zoom1;
							const width = document.documentElement.offsetWidth;
							const height = document.documentElement.offsetHeight;
							const zoom = game.documentZoom;
							document.body.style.width = width / zoom + 'px';
							document.body.style.height = height / zoom + 'px';
							document.body.style.transform = 'scale(' + zoom + ')';
							document.body.style.position = 'absolute';
							document.body.style.top = '-48%';
							document.body.style.left = '-48%';
							Reflect.defineProperty(ui, 'chessheight', {
								get() {
									return chessheight;
								},
								set() {
									chessheight = 15;
								},
							});
							Reflect.defineProperty(ui, 'chesswidth', {
								get() {
									return chesswidth;
								},
								set() {
									chesswidth = 15;
								},
							});
							lib.config.mode_config.chess.chess_obstacle = '0';
							lib.config.mode_config.chess.single_control = false;
							lib.config.mode_config.chess.seat_order = '交替';
							lib.config.mode_config.chess.chess_mode = 'combat';
							const character = {
								蓝方城池: ['', '', 20, ['threatencfz'], ['ext:龙舟国战模式/城池1.jpg']],
								红方城池: ['', '', 20, ['threatencfz'], ['ext:龙舟国战模式/城池2.jpg']],
							};
							for (const i in character) {
								lib.character[i] = character[i];
							}

							const skill = {
								_addcheng: {
									trigger: {
										player: 'gameDrawAfter',
									},
									forced: true,
									filter(event, player) {
										return _status.hasAddcheng != true;
									},
									content() {
										_status.hasAddcheng = true;
										const chengFriend = game.addChessPlayer('红方城池', true, 0);
										chengFriend.moveTo(12, 12);

										chengFriend.phase = function () { };
										chengFriend.draw = function () { };
										chengFriend.recover = function () { };
										chengFriend.moveTo = function () { };
										const chengEnemy = game.addChessPlayer('蓝方城池', false, 0);
										chengEnemy.moveTo(2, 2);

										chengEnemy.phase = function () { };
										chengEnemy.draw = function () { };
										chengEnemy.recover = function () { };
										chengEnemy.moveTo = function () { };
										let e_num_x = 1;
										let e_num_y = 1;
										let e_num_count = 0;
										let f_num_x = 13;
										let f_num_y = 13;
										let f_num_count = 0;
										const list_players = [];

										for (const i of game.players) {
											list_players.push(i);
										}

										for (const i of list_players) {
											const bool = true;
											const pl = i;
											if (pl == chengFriend || chengEnemy == chengFriend) {
												continue;
											}
											if (pl.side == chengFriend.side) {
												pl.moveTo(f_num_x, f_num_y);
												f_num_count++;
												if (f_num_count == 1) {
													f_num_x--;
												} else if (f_num_count == 2) {
													f_num_x--;
												} else if (f_num_count == 3) {
													f_num_y--;
												} else if (f_num_count == 4) {
													f_num_y--;
												} else if (f_num_count == 5) {
													f_num_x++;
												} else if (f_num_count == 6) {
													f_num_x++;
												} else if (f_num_count == 7) {
													f_num_y++;
												}
											} else {
												pl.moveTo(e_num_x, e_num_y);
												e_num_count++;
												if (e_num_count == 1) {
													e_num_x++;
												} else if (e_num_count == 2) {
													e_num_x++;
												} else if (e_num_count == 3) {
													e_num_y++;
												} else if (e_num_count == 4) {
													e_num_y++;
												} else if (e_num_count == 5) {
													e_num_x--;
												} else if (e_num_count == 6) {
													e_num_x--;
												} else if (e_num_count == 7) {
													e_num_y--;
												}
											}
										}
									},
								},
								_cheng_die: {
									trigger: {
										player: 'dying',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return player.name == '蓝方城池' || player.name == '红方城池';
									},
									content() {
										if (game.me.side == player.side) {
											game.over(false);
										} else {
											game.over(true);
										}
									},
								},
								threatencfz: {
									ai: {
										threaten: 10,
									},
								},
								_chengBuff: {
									trigger: {
										player: 'phaseBefore',
									},
									forced: true,
									popup: false,
									content() {
										for (const i of game.players) {
											if (i.name == '蓝方城池' || i.name == '红方城池') {
												if (i !== player && get.distance(player, i) <= 1) {
													if (player.side == i.side) {
														player.recover();
													}
												}
											}
										}
									},
								},
								_cheng_out: {
									trigger: {
										player: 'phaseBefore',
									},
									forced: true,
									popup: false,
									_priority: Infinity,
									filter(event, player) {
										return player.name != '蓝方城池' && player.name != '红方城池';
									},
									content() {
										player.gcms_interval = setInterval(function () {
											const player = _status.currentPhase;

											for (const i of game.players) {
												if (i !== player && get.distance(player, i) > 5 && i.name != '蓝方城池' && i.name != '红方城池') {
													if (!i.classList.contains('out')) {
														i.classList.add('out');
													}
												}
												if (i !== player && get.distance(player, i) <= 5 && i.name != '蓝方城池' && i.name != '红方城池') {
													if (i.classList.contains('out')) {
														i.classList.remove('out');
													}
												}
											}
										}, 500);

										for (const i of game.players) {
											if (i !== player && get.distance(player, i) > 5 && i.name != '蓝方城池' && i.name != '红方城池') {
												i.classList.add('out');
											}
										}
									},
								},
								_cheng_out_delete: {
									trigger: {
										player: 'phaseAfter',
									},
									forced: true,
									popup: false,
									_priority: -Infinity,
									filter(event, player) {
										return player.name != '蓝方城池' && player.name != '红方城池';
									},
									content() {
										clearInterval(player.gcms_interval);
										delete player.gcms_interval;

										for (const i of game.players) {
											i.classList.remove('out');
										}
									},
								},
							};
							for (const i in skill) {
								lib.skill[i] = skill[i];
							}
							const translate = {
								蓝方城池: '城池',
								红方城池: '城池',
							};
							for (const i in translate) {
								lib.translate[i] = translate[i];
							}
						},
					};
				}
			});

			game.addMode(
				'tongjiangmoshi',
				{
					start() {
						'step 0';
						game.prepareArena(get.config('player_num'));
						game.showChangeLog();
						const list = [];
						for (const i in lib.character) {
							list.push(i);
						}
						const dialog = ui.create.characterDialog('请选择角色', [list, 'character']);
						game.me.chooseButton(dialog, true).selectButton = function () {
							return get.config('double_character') ? 2 : 1;
						};
						('step 1');
						const translate = {
							1: '壹',
							2: '贰',
							3: '叁',
							4: '肆',
							5: '伍',
							6: '陆',
							7: '柒',
							8: '捌',
						};
						const css =
							"\
                    .num-glow{display:inline-block;font-family:'chaozisheleishenbianjianfan',STXingkai,serif;font-weight:800;font-size:28px;line-height:1;position:relative;color:transparent;-webkit-background-clip:text;background-clip:text;background-image:linear-gradient(90deg,#000 0%,#2b0000 30%,#ff2a2a 60%,#ff9a9a 100%);text-shadow:0 4px 18px rgba(255,60,60,0.12),0 1px 2px rgba(0,0,0,0.6);}\
                    }\
                    @keyframes glowShift{0%{background-position:-80% 0}50%{background-position:80% 0}100%{background-position:260% 0}}\
                    .num-glow::after{content:attr(data-text);position:absolute;left:0;top:0;width:100%;height:100%;filter:blur(8px);opacity:0.28;mix-blend-mode:screen;background-image:linear-gradient(90deg,rgba(120,0,0,0.45),rgba(255,60,60,0.7),rgba(255,180,180,0.28));-webkit-background-clip:text;background-clip:text;color:transparent;animation:softPulse 2000ms ease-in-out infinite;}\
                    @keyframes softPulse{0%{opacity:0.18;transform:scale(1)}50%{opacity:0.32;transform:scale(1.02)}100%{opacity:0.18;transform:scale(1)}}";
						const style = document.createElement('style');
						style.id = '__num_glow_style';
						style.textContent = css;
						document.head.appendChild(style);
						for (const k in translate) {
							if (!translate.hasOwnProperty(k)) {
								continue;
							}
							const ch = translate[k];
							translate[k] = '<span class="num-glow" data-text="' + ch + '">' + ch + '</span>';
						}
						const container =
							document.getElementById('__translate_spans') ||
							(function () {
								const d = document.createElement('div');
								d.id = '__translate_spans';
								d.style.position = 'fixed';
								d.style.right = '18px';
								d.style.top = '18px';
								d.style.zIndex = 2147483650;
								d.style.pointerEvents = 'none';
								d.style.display = 'flex';
								d.style.flexDirection = 'column';
								d.style.gap = '8px';
								document.body.appendChild(d);
								return d;
							})();
						container.innerHTML = Object.keys(translate)
							.map(function (k) {
								return '<div style="pointer-events:none;margin:4px 0">' + translate[k] + '</div>';
							})
							.join('');

						for (const i of game.players) {
							i.getId();
							if (get.config('double_character')) {
								i.init(result.buttons[0].link, result.buttons[1].link);
							} else {
								i.init(result.buttons[0].link);
							}
						}

						event.trigger('gameStart');
						game.gameDraw();
						let player;
						if (_status.cheat_seat) {
							const seat = _status.cheat_seat.link;
							if (seat == 0) {
								player = game.me;
							} else {
								player = game.players[game.players.length - seat];
							}
							if (!player) {
								player = game.me;
							}
							delete _status.cheat_seat;
						} else {
							player = game.players[Math.floor(Math.random() * game.players.length)];
						}
						if (get.config('order') == 'first') {
							game.phaseLoop(game.me);
						} else {
							game.phaseLoop(player);
						}
						(function () {
							let idx = game.players.indexOf(player);
							if (idx === -1) {
								for (let i = 0; i < game.players.length; i++) {
									if (game.players[i] === player) {
										idx = i;
										break;
									}
								}
							}
							if (typeof idx === 'number' && idx > 0) {
								fzplayers = game.players.slice(idx).concat(game.players.slice(0, idx));
							}
						})();
						for (let i = 0; i < fzplayers.length; i++) {
							fzplayers[i].setIdentity(translate[i + 1]);
						}
						game.addRecentCharacter(game.me.name, game.me.name2);
					},
					translate: {},
					element: {
						player: {
							dieAfter(source) {
								if (source) {
									source.draw(3);
								}
								if (game.me.isDead() && game.players.length == 1) {
									game.over(false);
								}
								if (game.me.isAlive() && game.players.length == 1) {
									game.over(true);
								}
								if (game.me.isDead() && this == game.me) {
									ui.restart = ui.create.control('restart', game.reloadCurrent);
								}
							},
						},
					},
					get: {
						rawAttitude(from, to) {
							if (from == undefined || to == undefined) {
								return 0;
							}
							if (from == to) {
								return 5;
							} else {
								return -5;
							}
						},
					},
				},
				{
					translate: '同将模式',
					config: {
						order: {
							name: '先后手',
							init: 'random',
							item: {
								first: '先手',
								random: '随机',
							},
							forced: true,
							restart: true,
						},
						player_num: {
							name: '游戏人数',
							init: '8',
							item: {
								2: '两人',
								3: '三人',
								4: '四人',
								5: '五人',
								6: '六人',
								7: '七人',
								8: '八人',
							},
							forced: true,
							restart: true,
						},
						double_character: {
							name: '双将模式',
							init: false,
							forced: true,
							restart: true,
						},
						double_hp: {
							name: '双将体力上限',
							init: 'hejiansan',
							item: {
								hejiansan: '和减三',
								pingjun: '平均值',
								zuidazhi: '最大值',
								zuixiaozhi: '最小值',
								zonghe: '相加',
							},
							restart: true,
							forced: true,
						},
					},
				},
			);

			game.addMode(
				'sanrenchenghu',
				{
					start() {
						'step 0';
						lib.skill._sanrenchenghuwanfa = {
							trigger: { global: 'gameDrawEnd' },
							silent: true,
							content() {
								game.players.map((i) => {
									const slmap = { dizhu: { skill: '飞扈', prefix: 'huayizhushi', name: '华仪主侍' }, min: { skill: '揭竿', prefix: 'putongminnv', name: '普通民女' } };
									const m = slmap[i.identity];
									if (m) {
										i.addSkill(m.skill);
										i.markSkillCharacter(m.skill, m.prefix + m.name, '获得对应技能');
									}
								});
							},
						};
						if (get.config('choose_mode') == 'protectNextmode') {
							game.prepareArena(get.config('player_num'));
							game.showChangeLog();
							game.chooseCharacter();
							var players = get.players(lib.sort.position);

							for (const i of players) {
								i.getId();
							}

							game.me.next.setIdentity('保');
							game.me.previous.setIdentity('杀');
						} else {
							game.prepareArena(8);
							game.showChangeLog();
							event.goto(3);
						}
						('step 1');
						game.syncState();
						('step 2');
						var players = get.players(lib.sort.position);
						event.trigger('gameStart');
						game.gameDraw();
						if (get.config('order') == 'first') {
							game.phaseLoop(game.me);
						} else {
							game.phaseLoop(players[Math.floor(Math.random() * get.config('player_num'))]);
						}
						event.finish();
						('step 3');
						game.callLandlord();
						game.chooseCharacter();
						var players = get.players(lib.sort.position);

						for (const i of players) {
							i.getId();
							if (i.identity == 'dizhu') {
								game.dizhu = i;
							}
						}

						game.syncState();
						event.trigger('gameStart');
						game.gameDraw();
						game.phaseLoop(players.randomGet());
					},
					translate: {
						dizhu: `<img src="${lib.assetURL}extension/龙舟国战模式/dizhusftb.png" width="25" height="25">`,
						min: `<img src="${lib.assetURL}extension/龙舟国战模式/caominsftb.png" width="25" height="25">`,
					},
					game: {
						callLandlord() {
							const sfsuiji = ['dizhu', 'dizhu', 'dizhu', 'dizhu', 'min', 'min', 'min', 'min'].randomSort();

							game.players.map((current, y) => {
								current.identity = sfsuiji[y];
								current.setIdentity(sfsuiji[y]);
							});
						},
						chooseCharacter() {
							const next = game.createEvent('chooseCharacter', false);
							next.showConfig = true;

							next.ai = function (player, list, back) {
								if (_status.brawl && _status.brawl.chooseCharacterAi) {
									if (_status.brawl.chooseCharacterAi(player, list, null, back) !== false) {
										return;
									}
								}

								if (get.config('double_character')) {
									player.init(list[0], list[1] || list[0]);
								} else {
									player.init(list[0]);
								}

								if (back) {
									list.remove(player.name);
									list.remove(player.name2);
									back.push(...list);
								}
							};

							next.setContent(function () {
								'step 0';
								ui.arena.classList.add('choose-character');
								const chosen = lib.config.continue_name || [];
								game.saveConfig('continue_name');
								event.chosen = chosen;

								event.list = [];
								for (const i in lib.character) {
									if (chosen.includes(i)) {
										continue;
									}
									if (lib.filter.characterDisabled(i)) {
										continue;
									}
									event.list.push(i);
								}

								event.list.randomSort();

								if (_status.brawl && _status.brawl.chooseCharacterFilter) {
									_status.brawl.chooseCharacterFilter(event.list);
								}

								const num = parseInt(get.config('choice_num')) || 3;
								event.num = num;
								if (_status.brawl && _status.brawl.chooseCharacter) {
									var list = _status.brawl.chooseCharacter(event.list, num);
									if (list === false || list === 'nozhu') {
										list = event.list.slice(0, num);
									}
								} else {
									var list = event.list.slice(0, num);
								}

								let str = '选择角色';
								if (_status.brawl && _status.brawl.chooseCharacterStr) {
									str = _status.brawl.chooseCharacterStr;
								}
								const dialog = ui.create.dialog(str, 'hidden', [list, 'character']);

								if (!event.chosen.length) {
									game.me.chooseButton(dialog, true).set('onfree', true).selectButton = function () {
										return _status.brawl && _status.brawl.doubleCharacter ? 2 : get.config('double_character') ? 2 : 1;
									};
								} else {
									lib.init.onfree();
								}

								ui.create.cheat = function () {
									ui.cheat = ui.create.control('更换', function () {
										if (game.changeCoin) {
											game.changeCoin(-3);
										}

										event.list.randomSort();
										const newList = event.list.slice(0, num);

										const buttons = ui.create.div('.buttons');
										const node = _status.event.dialog.buttons[0].parentNode;
										_status.event.dialog.buttons = ui.create.buttons(newList, 'character', buttons);
										_status.event.dialog.content.insertBefore(buttons, node);
										buttons.addTempClass('start');
										node.remove();
										game.uncheck();
										game.check();
									});
								};

								ui.create.cheat2 = function () {
									ui.cheat2 = ui.create.control('自由选将', function () {
										if (this.dialog === _status.event.dialog) {
											if (game.changeCoin) {
												game.changeCoin(50);
											}
											this.dialog.close();
											_status.event.dialog = this.backup;
											this.backup.open();
											delete this.backup;
										} else {
											if (game.changeCoin) {
												game.changeCoin(-10);
											}
											this.backup = _status.event.dialog;
											_status.event.dialog.close();
											_status.event.dialog = _status.event.parent.dialogxx;
											this.dialog = _status.event.dialog;
											this.dialog.open();
										}
										game.uncheck();
										game.check();
										if (ui.cheat) {
											ui.cheat.classList.toggle('disabled', this.dialog !== _status.event.dialog.backup);
										}
									});
								};

								if (lib.onfree) {
									lib.onfree.push(function () {
										event.dialogxx = ui.create.characterDialog('heightset');
										if (ui.cheat2) {
											ui.cheat2.addTempClass('controlpressdownx', 500);
											ui.cheat2.classList.remove('disabled');
										}
									});
								} else {
									event.dialogxx = ui.create.characterDialog('heightset');
								}

								if (!_status.brawl || !_status.brawl.chooseCharacterFixed) {
									if (!ui.cheat && get.config('change_choice')) {
										ui.create.cheat();
									}
									if (!ui.cheat2 && get.config('free_choose')) {
										ui.create.cheat2();
									}
								}

								('step 1');

								if (ui.cheat) {
									ui.cheat.close();
									delete ui.cheat;
								}
								if (ui.cheat2) {
									ui.cheat2.close();
									delete ui.cheat2;
								}

								if (event.chosen.length) {
									game.me.init(event.chosen[0], event.chosen[1]);
								} else if (event.modchosen) {
									if (event.modchosen[0] === 'random') {
										event.modchosen[0] = result.buttons[0].link;
									} else {
										event.modchosen[1] = result.buttons[0].link;
									}
									game.me.init(event.modchosen[0], event.modchosen[1]);
								} else if (result.buttons.length === 2) {
									game.me.init(result.buttons[0].link, result.buttons[1].link);
								} else {
									game.me.init(result.buttons[0].link);
								}

								game.addRecentCharacter(game.me.name, game.me.name2);
								event.list.remove(game.me.name);
								event.list.remove(game.me.name2);

								for (const i of game.players) {
									if (i !== game.me) {
										event.ai(i, event.list.splice(0, event.num), event.list);
									}
								}

								setTimeout(function () {
									ui.arena.classList.remove('choose-character');
								}, 500);
							});
						},
					},
					element: {
						player: {
							dieAfter() {
								if (get.config('choose_mode') == 'protectNextmode') {
									if (game.me.isAlive() && this == game.me.previousSeat) {
										game.over(true);
									}
									if (game.me.isAlive() && this == game.me.nextSeat) {
										game.over(false);
									}
									if (game.me.isDead() && this == game.me) {
										game.over(false);
									}
								} else {
									const aliveLandlords = game.players.filter((player) => player.identity === 'dizhu' && player.isAlive());
									const aliveFarmers = game.players.filter((player) => player.identity !== 'dizhu' && player.isAlive());

									if (aliveFarmers.length === 0 && game.me.identity === 'dizhu') {
										game.over(true);
									} else if (aliveLandlords.length === 0 && game.me.identity === 'dizhu') {
										game.over(false);
									} else if (aliveLandlords.length === 0 && game.me.identity === 'min') {
										game.over(true);
									} else if (aliveFarmers.length === 0 && game.me.identity === 'min') {
										game.over(false);
									}
								}
							},
						},
					},
					ai: {
						get: {
							attitude(from, to) {
								if (get.config('choose_mode') == 'protectNextmode') {
									if (from == to) {
										return 5;
									}
									if (from.next == to) {
										return 10;
									}
									if (from.previous == to) {
										return -10;
									}
									return 0;
								} else {
									if (from == to) {
										return 5;
									}
									if (from.identity == to.identity) {
										return 5;
									}
									return -10;
								}
							},
						},
					},
				},
				{
					translate: '三人成虎',
					config: {
						update(config, map) {
							if (config.choose_mode == 'fightLandlord') {
								map.player_num.hide();
							} else {
								map.player_num.show();
							}
						},
						choose_mode: {
							name: '游戏模式',
							init: 'protectNextmode',
							item: {
								protectNextmode: '杀上保下',
								fightLandlord: '随机地主',
							},
							restart: true,
							forced: true,
						},
						order: {
							name: '先后手',
							init: 'random',
							item: {
								first: '先手',
								random: '随机',
							},
							forced: true,
							restart: true,
						},
						free_choose: {
							name: '自由选将',
							init: false,
							onclick(bool) {
								game.saveConfig('free_choose', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								if (!ui.cheat2 && get.config('free_choose')) {
									ui.create.cheat2();
								} else if (ui.cheat2 && !get.config('free_choose')) {
									ui.cheat2.close();
									delete ui.cheat2;
									if (ui.cheat2x) {
										ui.cheat2x.close();
										delete ui.cheat2;
									}
								}
							},
						},
						change_choice: {
							name: '开启换将卡',
							init: true,
							onclick(bool) {
								game.saveConfig('change_choice', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								if (!ui.cheat && get.config('change_choice')) {
									ui.create.cheat();
								} else if (ui.cheat && !get.config('change_choice')) {
									ui.cheat.close();
									delete ui.cheat;
								}
							},
							forced: true,
							restart: true,
						},
						continue_game: {
							name: '显示再战',
							init: false,
							onclick(bool) {
								game.saveConfig('continue_game', bool, this._link.config.mode);
								if (get.config('continue_game')) {
									if (!ui.continue_game && _status.over) {
										ui.continue_game = ui.create.control('再战', game.reloadCurrent);
									}
								} else if (ui.continue_game) {
									ui.continue_game.close();
									delete ui.continue_game;
								}
							},
						},
						double_character: {
							name: '双将模式',
							init: false,
							forced: true,
							restart: true,
						},
						double_hp: {
							name: '双将体力上限',
							init: 'hejiansan',
							item: {
								hejiansan: '和减三',
								pingjun: '平均值',
								zuidazhi: '最大值',
								zuixiaozhi: '最小值',
								zonghe: '相加',
							},
						},
						player_num: {
							name: '游戏人数',
							init: '3',
							item: {
								3: '三人',
								4: '四人',
								5: '五人',
								6: '六人',
								7: '七人',
								8: '八人',
							},
						},
						choice_num: {
							name: '候选武将数',
							init: '10',
							item: {
								3: '三',
								4: '四',
								5: '五',
								6: '六',
								7: '七',
								8: '八',
								9: '九',
								10: '十',
							},
						},
					},
				},
			);

			game.addMode(
				'guozhanpaiweipw',
				{
					startBefore() {
						lib.element.content.gameDraw = function () {
							'step 0';
							if (_status.brawl && _status.brawl.noGameDraw) {
								event.finish();
								return;
							}
							const end = player;
							let numx = num;
							do {
								if (typeof num == 'function') {
									numx = num(player);
								}
								player.directgain(get.cards(numx));
								if (player.singleHp === true && get.mode() != 'guozhan' && get.mode() != 'longzhouguozhan' && get.mode() != 'guozhanpaiweipw') {
									player.doubleDraw();
								}
								player = player.next;
							} while (player != end);
							event.changeCard = get.config('change_card');
							if (lib.config.mode != 'identity' && lib.config.mode != 'guozhan' && lib.config.mode != 'guozhanpaiweipw') {
								event.changeCard = 'disabled';
							}
							('step 1');
							if (event.changeCard != 'disabled' && !_status.auto) {
								event.dialog = ui.create.dialog('是否使用手气卡？');
								ui.create.confirm('oc');
								event.custom.replace.confirm = function (bool) {
									_status.event.bool = bool;
									game.resume();
								};
							} else {
								event.finish();
							}
							('step 2');
							if (event.changeCard == 'once') {
								event.changeCard = 'disabled';
							} else if (event.changeCard == 'twice') {
								event.changeCard = 'once';
							} else if (event.changeCard == 'disabled') {
								event.bool = false;
								return;
							}
							_status.imchoosing = true;
							game.pause();
							('step 3');
							_status.imchoosing = false;
							if (event.bool) {
								if (game.changeCoin) {
									game.changeCoin(-3);
								}
								const hs = game.me.getCards('h');
								game.addVideo('lose', game.me, [get.cardsInfo(hs), [], []]);

								for (const i of hs) {
									i.discard(false);
								}

								game.me.directgain(get.cards(hs.length));
								event.goto(2);
							} else {
								event.dialog.close();
								ui.confirm.close();
								event.finish();
							}
						};
						const playback = localStorage.getItem(lib.configprefix + 'playback');
						for (const i in lib.characterPack.mode_guozhan) {
							if (!get.config('onlyguozhan') && !playback) {
								if (lib.character[i.slice(3)]) {
									continue;
								}
							}
							lib.character[i] = lib.characterPack.mode_guozhan[i];
							if (!lib.character[i][4]) {
								lib.character[i][4] = [];
							}
							if (!lib.translate[i]) {
								lib.translate[i] = lib.translate[i.slice(3)];
							}
						}
						for (const i in lib.character) {
							if (lib.character[i][1] == 'shen') {
								if (lib.character[i][4] && lib.group.includes(lib.character[i][4][0])) {
									lib.character[i][1] = lib.character[i][4][0];
								} else {
									lib.character[i][1] = 'qun';
								}
							}
						}
					},
					onreinit() {
						const pack = lib.characterPack.mode_guozhan;
						for (const i in pack) {
							if (!lib.configOL.onlyguozhan) {
								if (lib.character[i.slice(3)]) {
									continue;
								}
							}
							lib.character[i] = pack[i];
							if (!lib.character[i][4]) {
								lib.character[i][4] = [];
							}
							if (!lib.translate[i]) {
								lib.translate[i] = lib.translate[i.slice(3)];
							}
						}
					},
					start() {
						'step 0';
						const playback = localStorage.getItem(lib.configprefix + 'playback');
						if (playback) {
							ui.create.me();
							ui.arena.style.display = 'none';
							ui.system.style.display = 'none';
							_status.playback = playback;
							localStorage.removeItem(lib.configprefix + 'playback');
							const store = lib.db.transaction(['video'], 'readwrite').objectStore('video');
							store.get(parseInt(playback)).onsuccess = function (e) {
								if (e.target.result) {
									game.playVideoContent(e.target.result.video);
								} else {
									alert('播放失败:找不到录像');
									game.reload();
								}
							};
							event.finish();
						} else if (_status.connectMode) {
							game.waitForPlayer();
						} else {
							if (get.config('guozhanpile')) {
								lib.card.list = lib.guozhanPile.slice(0);
								game.fixedPile = true;
							}
							game.prepareArena();

							game.showChangeLog();
						}
						if (!_status.connectMode) {
							_status.mode = get.config('guozhan_mode');
							if (_status.brawl && _status.brawl.submode) {
								_status.mode = _status.brawl.submode;
							}
						}
						('step 1');
						if (_status.connectMode) {
							if (lib.configOL.guozhanpile) {
								lib.card.list = lib.guozhanPile.slice(0);
								game.fixedPile = true;
							}
							game.broadcastAll(function (pack) {
								for (const i of game.players) {
									i.node.name.hide();
									i.node.name2.hide();
								}

								lib.characterPack.mode_guozhan = pack;
								for (const i in pack) {
									if (!lib.configOL.onlyguozhan) {
										if (lib.character[i.slice(3)]) {
											continue;
										}
									}
									lib.character[i] = pack[i];
									if (!lib.character[i][4]) {
										lib.character[i][4] = [];
									}
									if (!lib.translate[i]) {
										lib.translate[i] = lib.translate[i.slice(3)];
									}
								}
							}, lib.characterPack.mode_guozhan);
							game.randomMapOL();
						} else {
							for (const i of game.players) {
								i.node.name.hide();
								i.node.name2.hide();
								i.getId();
							}

							if (_status.brawl && _status.brawl.chooseCharacterBefore) {
								_status.brawl.chooseCharacterBefore();
							}
							game.chooseCharacter();
						}
						('step 2');
						if (ui.coin) {
							_status.coinCoeff = get.coinCoeff([game.me.name1, game.me.name2]);
						}
						let player;
						if (_status.cheat_seat) {
							const seat = _status.cheat_seat.link;
							if (seat == 0) {
								player = game.me;
							} else {
								player = game.players[game.players.length - seat];
							}
							if (!player) {
								player = game.me;
							}
							delete _status.cheat_seat;
						} else {
							player = game.players[Math.floor(Math.random() * game.players.length)];
						}
						event.trigger('gameStart');

						game.gameDraw(player);
						game.broadcastAll(function (player) {
							for (const i of game.players) {
								i.name = 'unknown' + get.distance(player, i, 'absolute');
								i.node.name_seat = ui.create.div('.name.name_seat', get.verticalStr(lib.translate[i.name]), i);
							}
						}, player);

						const players = get.players(lib.sort.position);
						const info = [];
						for (let i = 0; i < players.length; i++) {
							info.push({
								name: game.players[i].name,
								translate: lib.translate[game.players[i].name],
								name1: players[i].name1,
								name2: players[i].name2,
							});
						}
						((_status.videoInited = true), game.addVideo('init', null, info));
						if (_status.mode == 'mingjiang') {
							game.showIdentity(true);
						} else {
							for (const i of game.players) {
								i.ai.shown = 0;
							}
						}
						game.phaseLoop(player);
					},
					characterPack: {
						mode_guozhan: {
							gz_shibing1wei: ['male', 'wei', 0, [], ['unseen']],
							gz_shibing2wei: ['female', 'wei', 0, [], ['unseen']],
							gz_shibing1shu: ['male', 'shu', 0, [], ['unseen']],
							gz_shibing2shu: ['female', 'shu', 0, [], ['unseen']],
							gz_shibing1wu: ['male', 'wu', 0, [], ['unseen']],
							gz_shibing2wu: ['female', 'wu', 0, [], ['unseen']],
							gz_shibing1qun: ['male', 'qun', 0, [], ['unseen']],
							gz_shibing2qun: ['female', 'qun', 0, [], ['unseen']],

							gz_caocao: ['male', 'wei', 4, ['jianxiong']],
							gz_simayi: ['male', 'wei', 3, ['fankui', 'guicai']],
							gz_xiahoudun: ['male', 'wei', 4, ['ganglie']],
							gz_zhangliao: ['male', 'wei', 4, ['tuxi']],
							gz_xuchu: ['male', 'wei', 4, ['luoyi']],
							gz_guojia: ['male', 'wei', 3, ['tiandu', 'yiji']],
							gz_zhenji: ['female', 'wei', 3, ['luoshen', 'qingguo']],
							gz_xiahouyuan: ['male', 'wei', 4, ['shensu']],
							gz_zhanghe: ['male', 'wei', 4, ['qiaobian']],
							gz_xuhuang: ['male', 'wei', 4, ['gzduanliang']],
							gz_caoren: ['male', 'wei', 4, ['jushou']],
							gz_dianwei: ['male', 'wei', 4, ['qiangxi']],
							gz_xunyu: ['male', 'wei', 3, ['quhu', 'jieming']],
							gz_caopi: ['male', 'wei', 3, ['xingshang', 'fangzhu']],
							gz_yuejin: ['male', 'wei', 4, ['gzxiaoguo']],

							gz_liubei: ['male', 'shu', 4, ['gzrende']],
							gz_guanyu: ['male', 'shu', 5, ['wusheng']],
							gz_zhangfei: ['male', 'shu', 4, ['paoxiao']],
							gz_zhugeliang: ['male', 'shu', 3, ['guanxing', 'gzkongcheng']],
							gz_zhaoyun: ['male', 'shu', 4, ['longdan']],
							gz_machao: ['male', 'shu', 4, ['mashu', 'tieji']],
							gz_huangyueying: ['female', 'shu', 3, ['jizhi', 'qicai']],
							gz_huangzhong: ['male', 'shu', 4, ['liegong']],
							gz_weiyan: ['male', 'shu', 4, ['kuanggu']],
							gz_pangtong: ['male', 'shu', 3, ['lianhuan', 'oldniepan']],
							gz_sp_zhugeliang: ['male', 'shu', 3, ['huoji', 'bazhen', 'kanpo']],
							gz_liushan: ['male', 'shu', 3, ['xiangle', 'fangquan']],
							gz_menghuo: ['male', 'shu', 4, ['huoshou', 'zaiqi']],
							gz_zhurong: ['female', 'shu', 4, ['juxiang', 'lieren']],
							gz_ganfuren: ['female', 'shu', 3, ['shushen', 'shenzhi']],

							gz_sunquan: ['male', 'wu', 4, ['gzzhiheng']],
							gz_ganning: ['male', 'wu', 4, ['qixi']],
							gz_lvmeng: ['male', 'wu', 4, ['keji']],
							gz_huanggai: ['male', 'wu', 4, ['kurou']],
							gz_zhouyu: ['male', 'wu', 3, ['yingzi', 'fanjian']],
							gz_daqiao: ['female', 'wu', 3, ['guose', 'liuli']],
							gz_luxun: ['male', 'wu', 3, ['gzqianxun', 'duoshi']],
							gz_sunshangxiang: ['female', 'wu', 3, ['jieyin', 'gzxiaoji']],
							gz_sunjian: ['male', 'wu', 4, ['gzyinghun']],
							gz_xiaoqiao: ['female', 'wu', 3, ['tianxiang', 'hongyan']],
							gz_taishici: ['male', 'wu', 4, ['tianyi']],
							gz_zhoutai: ['male', 'wu', 4, ['gzbuqu']],
							gz_re_lusu: ['male', 'wu', 3, ['haoshi', 'dimeng']],
							gz_zhangzhang: ['male', 'wu', 3, ['zhijian', 'guzheng']],
							gz_dingfeng: ['male', 'wu', 4, ['fenxun', 'duanbing']],

							gz_huatuo: ['male', 'qun', 3, ['qingnang', 'jijiu']],
							gz_lvbu: ['male', 'qun', 5, ['wushuang']],
							gz_diaochan: ['female', 'qun', 3, ['lijian', 'biyue']],
							gz_re_yuanshao: ['male', 'qun', 4, ['luanji']],
							gz_yanwen: ['male', 'qun', 4, ['shuangxiong']],
							gz_jiaxu: ['male', 'qun', 3, ['wansha', 'luanwu', 'gzweimu']],
							gz_pangde: ['male', 'qun', 4, ['mashu', 'mengjin']],
							gz_zhangjiao: ['male', 'qun', 3, ['leiji', 'guidao']],
							gz_caiwenji: ['female', 'qun', 3, ['beige', 'gzduanchang']],
							gz_mateng: ['male', 'qun', 4, ['mashu', 'xiongyi']],
							gz_kongrong: ['male', 'qun', 3, ['gzmingshi', 'lirang']],
							gz_jiling: ['male', 'qun', 4, ['shuangren']],
							gz_tianfeng: ['male', 'qun', 3, ['sijian', 'gzsuishi']],
							gz_panfeng: ['male', 'qun', 4, ['kuangfu']],
							gz_zoushi: ['female', 'qun', 3, ['huoshui', 'qingcheng']],

							gz_dengai: ['male', 'wei', 4, ['tuntian', 'ziliang', 'gzjixi']],
							gz_caohong: ['male', 'wei', 4, ['huyuan', 'heyi']],
							gz_jiangfei: ['male', 'shu', 3, ['shengxi', 'gzshoucheng']],
							gz_jiangwei: ['male', 'shu', 4, ['tiaoxin', 'yizhi', 'tianfu']],
							gz_xusheng: ['male', 'wu', 4, ['yicheng']],
							gz_jiangqing: ['male', 'wu', 4, ['gzshangyi', 'niaoxiang']],
							gz_hetaihou: ['female', 'qun', 3, ['zhendu', 'qiluan']],

							gz_re_lidian: ['male', 'wei', 3, ['xunxun', 'wangxi']],
							gz_zangba: ['male', 'wei', 4, ['hengjiang']],
							gz_madai: ['male', 'shu', 4, ['mashu', 'gzqianxi']],
							gz_mifuren: ['female', 'shu', 3, ['gzguixiu', 'gzcunsi']],
							gz_sunce: ['male', 'wu', 4, ['jiang', 'yingyang', 'hunshang']],
							gz_chendong: ['male', 'wu', 4, ['duanxie', 'fenming']],
							gz_sp_dongzhuo: ['male', 'qun', 4, ['hengzheng', 'baoling']],
							gz_zhangren: ['male', 'qun', 4, ['chuanxin', 'fengshi']],

							gz_jun_liubei: ['male', 'shu', 4, ['zhangwu', 'jizhao', 'shouyue', 'wuhujiangdaqi']],
							gz_jun_zhangjiao: ['male', 'qun', 4, ['wuxin', 'hongfa', 'wendao', 'huangjintianbingfu']],
						},
					},
					skill: {
						gzsuishi: {
							audio: 'suishi',
							trigger: { global: 'dying' },
							forced: true,
							_priority: 6.5,
							check() {
								return false;
							},
							filter(event, player) {
								return event.player != player && event.parent.name == 'damage' && event.parent.source && event.parent.source.isFriendsOf(player);
							},
							content() {
								player.draw();
							},
							group: 'gzsuishi2',
						},
						gzsuishi2: {
							audio: 'suishi',
							trigger: { global: 'dieAfter' },
							forced: true,
							filter(event, player) {
								return event.player.isFriendsOf(player);
							},
							content() {
								player.loseHp();
							},
						},
						_hongfa2: {
							trigger: { player: 'chooseToRespondBegin' },
							forced: true,
							filter(event, player) {
								if (event.responded) {
									return false;
								}
								if (!event.filterCard({ name: 'sha' })) {
									return false;
								}
								const zhu = get.zhu(player, 'hongfa');
								if (zhu && zhu.storage.huangjintianbingfu && zhu.storage.huangjintianbingfu.length) {
									return true;
								}
								return false;
							},
							content() {
								'step 0';
								var zhu = get.zhu(player, 'hongfa');
								player
									.chooseCardButton(get.prompt('huangjintianbingfu'), zhu.storage.huangjintianbingfu)
									.set('ai', function () {
										if (_status.event.goon) {
											return 1;
										}
										return 0;
									})
									.set('goon', player.countCards('h', 'sha') == 0);
								('step 1');
								if (result.bool) {
									const card = result.links[0];
									trigger.untrigger();
									trigger.responded = true;
									trigger.result = { bool: true, card: { name: 'sha' }, cards: [card] };
									var zhu = get.zhu(player, 'hongfa');
									zhu.storage.huangjintianbingfu.remove(card);
								}
							},
						},
						_hongfa: {
							enable: 'chooseToUse',
							filter(event, player) {
								if (!event.filterCard({ name: 'sha' }, player)) {
									return false;
								}
								const zhu = get.zhu(player, 'hongfa');
								if (zhu && zhu.storage.huangjintianbingfu && zhu.storage.huangjintianbingfu.length) {
									return true;
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									const zhu = get.zhu(player, 'hongfa');
									return ui.create.dialog('黄巾天兵符', zhu.storage.huangjintianbingfu, 'hidden');
								},
								backup(links, player) {
									return {
										filterCard() {
											return false;
										},
										selectCard: -1,
										viewAs: { name: 'sha' },
										cards: links,
										onuse(result, player) {
											result.cards = lib.skill[result.skill].cards;
											const card = result.cards[0];
											const zhu = get.zhu(player, 'hongfa');
											zhu.storage.huangjintianbingfu.remove(card);
										},
									};
								},
								prompt(links, player) {
									return '选择杀的目标';
								},
							},
							ai: {
								respondSha: true,
								skillTagFilter(player) {
									const zhu = get.zhu(player, 'hongfa');
									if (zhu && zhu.storage.huangjintianbingfu && zhu.storage.huangjintianbingfu.length) {
										return true;
									}
									return false;
								},
								order() {
									return get.order({ name: 'sha' }) - 0.1;
								},
								result: {
									player(player) {
										if (player.countCards('h', 'sha')) {
											return 0;
										}
										return 1;
									},
								},
							},
						},
						hongfa: {
							init(player) {
								player.storage.huangjintianbingfu = [];
							},
							derivation: 'huangjintianbingfu',

							trigger: { player: 'phaseBegin' },
							forced: true,
							filter(event, player) {
								return player.storage.huangjintianbingfu.length == 0;
							},
							content() {
								player.storage.huangjintianbingfu.addArray(get.cards(get.population('qun')));
							},
							ai: {
								threaten: 2,
							},
							group: 'hongfa_hp',
							subSkill: {
								hp: {
									trigger: { player: 'loseHpBefore' },
									filter(event, player) {
										return player.storage.huangjintianbingfu.length;
									},
									forced: true,
									content() {
										'step 0';
										player.chooseCardButton(get.prompt('hongfa'), player.storage.huangjintianbingfu).set('ai', function () {
											return 1;
										});
										('step 1');
										if (result.bool) {
											const card = result.links[0];
											card.discard();
											player.storage.huangjintianbingfu.remove(card);
											player.$throw(card, 1000);

											trigger.cancel();
										}
									},
								},
							},
						},
						wendao: {
							enable: 'phaseUse',
							filterCard: { color: 'red' },
							position: 'he',
							check(card) {
								return 6 - get.value(card);
							},
							filter(event, player) {
								for (let i = 0; i < ui.discardPile.childElementCount; i++) {
									if (ui.discardPile.childNodes[i].name == 'taipingyaoshu') {
										return true;
									}
								}
								return game.hasPlayer(function (current) {
									return current != player && current.countCards('ej', 'taipingyaoshu');
								});
							},
							content() {
								const list = [];
								for (let i = 0; i < ui.discardPile.childElementCount; i++) {
									if (ui.discardPile.childNodes[i].name == 'taipingyaoshu') {
										list.add(ui.discardPile.childNodes[i]);
									}
								}
								game.countPlayer(function (current) {
									if (current != player) {
										const ej = current.getCards('ej', 'taipingyaoshu');
										if (ej.length) {
											list.addArray(ej);
										}
									}
								});
								if (list.length) {
									const card = list.randomGet();
									const owner = get.owner(card);
									if (owner) {
										player.gain(card, owner);
										owner.$give(card, player);
										player.line(owner, 'green');
									} else {
										player.gain(card, 'log');
										player.$draw(card);
									}
								}
							},
							ai: {
								order: 8.5,
								result: {
									player: 1,
								},
							},
						},
						huangjintianbingfu: {
							nopop: true,
							mark: true,
							intro: {
								content: 'cards',
								mark(dialog, content, player) {
									if (content && content.length) {
										dialog.addSmall(content);
									}
									dialog.addText('<ul style="margin-top:5px;padding-left:22px;"><li>当你计算群势力角色数时,每一张<天兵>均可视为一名群势力角色.<li>每当你失去体力时,你可改为将一张<天兵>置入弃牌堆.<li>与你势力相同的角色可将一张<天兵>当【杀】使用或打出', false);
								},
							},
						},
						wuxin: {
							audio: ['wuxinjun', 2],

							trigger: { player: 'phaseDrawBegin' },

							content() {
								'step 0';
								let num = get.population('qun');
								if (player.hasSkill('huangjintianbingfu')) {
									num += player.storage.huangjintianbingfu.length;
								}
								player.chooseCardButton(num, true, get.cards(num), '按顺将卡牌置于牌堆顶(先选择的在上)').set('ai', function (button) {
									return get.value(button.link);
								});
								('step 1');
								if (result.bool) {
									const list = result.links.slice(0);
									while (list.length) {
										ui.cardPile.insertBefore(list.pop(), ui.cardPile.firstChild);
									}
								}
							},
						},
						zhangwu: {
							ai: {
								threaten: 2,
							},
							group: ['zhangwu_gain', 'zhangwu_clear', 'zhangwu_count1', 'zhangwu_count2', 'zhangwu_count3'],
							subSkill: {
								gain: {
									trigger: { global: ['discardAfter', 'respondAfter', 'useCardAfter', 'equipAfter', 'judgeAfter', 'useSkillAfter', 'phaseDrawBegin', 'phaseAfter'] },
									forced: true,
									filter(event, player) {
										if (player.storage.zhangwu) {
											for (const i of player.storage.zhangwu) {
												if (get.owner(i) == player) {
													continue;
												}
												const position = get.position(i);
												if (position && position != 's' && position != 'c') {
													return true;
												}
											}
										}
										if (
											game.hasPlayer(function (current) {
												return current != player && current.getEquip('feilongduofeng');
											})
										) {
											return true;
										}
										if (['discard', 'respond', 'useCard'].includes(event.name) && event.cards) {
											for (const i of event.cards) {
												if (i.name == 'feilongduofeng' && get.position(i) == 'd') {
													return true;
												}
											}
										}
										for (let i = 0; i < ui.discardPile.childElementCount; i++) {
											if (ui.discardPile.childNodes[i].name == 'feilongduofeng') {
												return true;
											}
										}
										return false;
									},
									content() {
										'step 0';
										if (trigger.name == 'equip' || trigger.name == 'respond' || trigger.delay == false) {
										}
										('step 1');
										const list = [];
										game.countPlayer(function (current) {
											if (current != player) {
												const es = current.getEquip('feilongduofeng');
												if (es) {
													list.add(es);
												}
											}
										});
										if (['discard', 'respond', 'useCard'].includes(trigger.name) && trigger.cards) {
											for (const i of trigger.cards) {
												if (i.name == 'feilongduofeng' && get.position(i) == 'd') {
													i.fix();
													list.add(i);
													ui.special.appendChild(i);
												}
											}
										}
										for (let i = 0; i < ui.discardPile.childElementCount; i++) {
											if (ui.discardPile.childNodes[i].name == 'feilongduofeng') {
												list.add(ui.discardPile.childNodes[i]);
												ui.special.appendChild(ui.discardPile.childNodes[i]);
											}
										}
										const list2 = [];
										if (player.storage.zhangwu) {
											for (let i = 0; i < list.length; i++) {
												if (player.storage.zhangwu.includes(list[i])) {
													player.storage.zhangwu.remove(list[i]);
													list2.add(list[i]);
													list.splice(i--, 1);
												}
											}

											for (const i of player.storage.zhangwu) {
												if (get.owner(i) == player) {
													continue;
												}
												const position = get.position(i);
												if (position && position != 's' && position != 'c') {
													list2.add(i);
												}
											}
										}
										if (list.length) {
											player.gain(list);
											var owner = get.owner(list[0]);
											if (trigger.name != 'respond' && owner) {
												player.line(owner, 'green');
												owner.$give(list, player);
											} else {
												player.$gain2(list, true);
											}
											event.delay = true;
										}
										if (list2.length) {
											player.showCards(get.translation(player) + '发动了【章武】', list2);

											for (const i of list2) {
												var owner = get.owner(i);
												if (owner) {
													owner.lose(i, ui.special);
													event.delay = true;
												}
											}

											event.list2 = list2;
										}
										('step 2');
										if (event.delay) {
										}
										('step 3');
										if (event.list2 && event.list2.length) {
											for (const i of event.list2) {
												i.fix();
												ui.cardPile.appendChild(i);
											}

											game.log(player, '将', event.list2, '置于牌堆底');
											player.draw(2);
										}
									},
								},
								count1: {
									trigger: { player: 'loseAfter' },
									silent: true,
									filter(event, player) {
										if (event.type != 'gain' && event.type != 'equip') {
											return true;
										}
										if (event.parent.player == player) {
											return true;
										}
										return false;
									},
									content() {
										if (!player.storage.zhangwu) {
											player.storage.zhangwu = [];
										}

										for (const i of trigger.stockcards) {
											if (i.name == 'feilongduofeng') {
												player.storage.zhangwu.add(i);
											}
										}
									},
								},
								count2: {
									trigger: { player: 'loseAfter' },
									forced: true,
									filter(event, player) {
										if (lib.skill.zhangwu_count1.filter(event, player)) {
											return false;
										}

										for (const i of event.stockcards) {
											if (i.name == 'feilongduofeng') {
												return true;
											}
										}
									},
									content() {
										'step 0';
										const list = [];

										for (const i of trigger.stockcards) {
											if (i.name == 'feilongduofeng') {
												list.add(i);
											}
										}

										if (list.length) {
											if (trigger.type == 'gain') {
												for (const i of list) {
													trigger.parent.cards.remove(i);
												}
											} else if (trigger.type == 'equip') {
												trigger.parent.cancelled = true;
											}
											player.showCards(get.translation(player) + '发动了【章武】', list);
											event.list = list;
										} else {
											event.finish();
										}
										('step 1');

										for (const i of event.list) {
											i.fix();
											ui.cardPile.appendChild(i);
										}

										game.log(player, '将', event.list, '置于牌堆底');
										player.draw(2);
									},
								},
								count3: {
									trigger: { global: 'equipBefore' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'feilongduofeng' && event.player != player && player.storage.zhangwu && player.storage.zhangwu.includes(event.card);
									},
									content() {
										'step 0';
										trigger.cancel();
										trigger.card.fix();
										player.showCards(get.translation(player) + '发动了【章武】', [trigger.card]);
										const owner = get.owner(trigger.card);
										if (owner) {
											owner.lose(trigger.card, ui.special);
										}
										player.storage.zhangwu.remove(trigger.card);
										('step 1');
										trigger.card.fix();
										ui.cardPile.appendChild(trigger.card);
										game.log(player, '将', trigger.card, '置于牌堆底');
										player.draw(2);
									},
								},
								clear: {
									trigger: { global: 'phaseAfter' },
									silent: true,
									content() {
										delete player.storage.zhangwu;
									},
								},
							},
						},
						shouyue: {
							group: 'wuhujiangdaqi',
							derivation: 'wuhujiangdaqi',
							mark: true,
						},
						wuhujiangdaqi: {
							nopop: true,
							mark: true,
							intro: {
								content: '@<div style="margin-top:-5px"><div class="skill">【武圣】</div><div>将<红色牌>改为<任意牌></div><div class="skill">【咆哮】</div><div>增加描述<你使用的【杀】无视其他角色的防具></div><div class="skill">【龙胆】</div><div>增加描述<你每发动一次‘龙胆’便摸一张牌></div><div class="skill">【烈弓】</div><div>增加描述<你的攻击范围+1></div><div class="skill">【铁骑】</div><div>将<若结果为红色>改为<若结果不为♠️️️️></div></div>',
							},
						},
						jizhao: {
							derivation: 'gzrende',

							enable: 'chooseToUse',
							mark: true,

							init(player) {
								player.storage.jizhao = false;
							},
							filter(event, player) {
								if (player.storage.jizhao) {
									return false;
								}
								if (event.type == 'dying') {
									if (player != event.dying) {
										return false;
									}
									return true;
								}
								return false;
							},
							content() {
								'step 0';
								player.awakenSkill('jizhao');
								player.storage.jizhao = true;
								const num = player.maxHp - player.countCards('h');
								if (num > 0) {
									player.draw(num);
								}
								('step 1');
								if (player.hp < 2) {
									player.recover(2 - player.hp);
								}
								('step 2');
								player.removeSkill('shouyue');
								player.removeSkill('wuhujiangdaqi');
								player.addSkill('gzrende');
							},
							ai: {
								order: 1,
								skillTagFilter(player) {
									if (player.storage.jizhao) {
										return false;
									}
									if (player.hp > 0) {
										return false;
									}
								},
								save: true,
								result: {
									player: 10,
								},
							},
							intro: {
								content: 'limited',
							},
						},
						gzshoucheng: {
							inherit: 'shoucheng',
							filter(event, player) {
								if (event.player.countCards('h')) {
									return false;
								}
								if (event.player.isEnemiesOf(player)) {
									return false;
								}
								if (_status.currentPhase == event.player) {
									return false;
								}

								for (const i of event.cards) {
									if (i.original == 'h') {
										return true;
									}
								}

								return false;
							},
						},
						yicheng: {
							trigger: { global: 'shaBegin' },
							filter(event, player) {
								return event.target.isFriendsOf(player);
							},
							logTarget: 'target',
							content() {
								'step 0';
								trigger.target.draw();
								('step 1');
								trigger.target.chooseToDiscard('he', true);
							},
						},
						gzjixi: {
							inherit: 'jixi',
							init(player) {
								if (player.checkMainSkill('gzjixi')) {
									player.removeMaxHp();
								}
							},
						},
						ziliang: {
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return event.player.isIn() && event.player.isFriendsOf(player) && player.storage.tuntian && player.storage.tuntian.length;
							},
							init(player) {
								player.checkViceSkill('ziliang');
							},
							forced: true,
							content() {
								'step 0';
								player.chooseCardButton(get.prompt('ziliang', trigger.player), player.storage.tuntian).set('ai', function (button) {
									return get.value(button.link);
								});
								('step 1');
								if (result.bool) {
									const card = result.links[0];

									player.storage.tuntian.remove(card);

									if (!player.storage.tuntian.length) {
										player.unmarkSkill('tuntian');
									} else {
									}
									trigger.player.gain(card);
									if (trigger.player == player) {
										player.$draw(card, true);
									} else {
										player.$give(card, trigger.player);
									}
								}
							},
						},
						huyuan: {
							audio: 'yuanhu',
							trigger: { player: 'phaseEnd' },
							forced: true,
							filter(event, player) {
								return player.countCards('he', { type: 'equip' }) > 0;
							},
							content() {
								'step 0';
								player.chooseCardTarget({
									filterCard(card, player) {
										return get.type(card) == 'equip';
									},
									position: 'he',
									filterTarget(card, player, target) {
										return !target.getEquip(card);
									},
									ai1(card) {
										return 6 - get.value(card);
									},
									ai2(target) {
										return get.attitude(_status.event.player, target) - 3;
									},
									prompt: get.prompt('yuanhu'),
								});
								('step 1');
								if (result.bool) {
									const target = result.targets[0];

									event.current = target;
									target.equip(result.cards[0]);
									if (target != player) {
										player.$give(result.cards, target);
									}

									player
										.chooseTarget('弃置一名角色的一张牌', function (card, player, target) {
											const source = _status.event.source;
											return get.distance(source, target) <= 1 && source != target && target.countCards('he');
										})
										.set('ai', function (target) {
											return -get.attitude(_status.event.player, target);
										})
										.set('source', target);
								} else {
									event.finish();
								}
								('step 2');
								if (result.targets?.length) {
									event.current.line(result.targets, 'green');
									player.discardPlayerCard(true, result.targets[0], 'he');
								}
							},
						},
						heyi: {
							zhenfa: 'inline',
						},
						_heyi: {
							mod: {
								globalTo(from, to, distance) {
									if (
										game.hasPlayer(function (current) {
											return current.hasSkill('heyi') && current.inline(to) && current != to;
										})
									) {
										return distance + 1;
									}
								},
							},
						},
						tianfu: {
							init(player) {
								player.checkMainSkill('tianfu');
							},
							inherit: 'kanpo',
							zhenfa: 'inline',
							viewAsFilter(player) {
								return _status.currentPhase.inline(player) && !player.hasSkill('kanpo') && player.countCards('h', { color: 'black' }) > 0;
							},
						},
						yizhi: {
							init(player) {
								if (player.checkViceSkill('yizhi')) {
									player.removeMaxHp();
								}
							},
							inherit: 'guanxing',
							filter(event, player) {
								return !player.hasSkill('guanxing');
							},
						},
						gzshangyi: {
							audio: 'shangyi',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(card, player, target) {
								return player != target && (target.countCards('h') || target.isUnseen(2));
							},
							content() {
								'step 0';
								target.viewHandcards(player);
								('step 1');
								if (!target.countCards('h')) {
									event._result = { index: 1 };
								} else if (!target.isUnseen(2)) {
									event._result = { index: 0 };
								} else {
									player.chooseControl().set('choiceList', ['观看' + get.translation(target) + '的手牌并可以弃置其中的一张黑色牌', '观看' + get.translation(target) + '的所有暗置的武将牌']);
								}
								('step 2');
								if (result.index == 0) {
									player
										.discardPlayerCard(target, 'h')
										.set('filterButton', function (button) {
											return get.color(button.link) == 'black';
										})
										.set('visible', true);
								} else {
									player.viewCharacter(target, 2);
								}
							},
							ai: {
								order: 11,
								result: {
									target(player, target) {
										return -target.countCards('h');
									},
								},
								threaten: 1.1,
							},
						},
						niaoxiang: {
							zhenfa: 'siege',
						},
						_niaoxiang: {
							trigger: { player: 'shaBegin' },
							filter(event, player) {
								if (game.countPlayer() < 4) {
									return false;
								}
								return (
									player.siege(event.target) &&
									game.hasPlayer(function (current) {
										return current.hasSkill('niaoxiang') && current.siege(event.target);
									})
								);
							},
							forced: true,
							logTarget: 'target',
							content() {
								if (typeof trigger.shanRequired == 'number') {
									trigger.shanRequired++;
								} else {
									trigger.shanRequired = 2;
								}
							},
						},
						fengshi: {
							zhenfa: 'siege',
						},
						_fengshi: {
							trigger: { player: 'shaBegin' },
							filter(event, player) {
								if (game.countPlayer() < 4) {
									return false;
								}
								return (
									player.siege(event.target) &&
									game.hasPlayer(function (current) {
										return current.hasSkill('fengshi') && current.siege(event.target);
									}) &&
									event.target.countCards('e')
								);
							},
							logTarget: 'target',
							content() {
								trigger.target.chooseToDiscard('e', true);
							},
						},
						gzguixiu: {
							init2(player) {
								player.draw(2);
							},
							onremove(player) {
								if (player.isDamaged()) {
									player.recover();
								}
							},
						},
						gzcunsi: {
							derivation: 'gzyongjue',
							enable: 'phaseUse',
							filter(event, player) {
								return player.checkMainSkill('gzcunsi', false) || player.checkViceSkill('gzcunsi', false);
							},

							filterTarget: true,

							content() {
								'step 0';
								if (player.checkMainSkill('gzcunsi', false)) {
									player.removeCharacter(0);
								} else {
									player.removeCharacter(1);
								}
								('step 1');
								target.addSkill('gzyongjue');
								if (target != player) {
									target.draw(2);
								}
							},
							ai: {
								order: 9,
								result: {
									player(player, target) {
										let num = 0;
										if (player.isDamaged() && target.isFriendsOf(player)) {
											num++;
											if (target.hasSkill('kanpo')) {
												num += 0.5;
											}
											if (target.hasSkill('liegong')) {
												num += 0.5;
											}
											if (target.hasSkill('tieji')) {
												num += 0.5;
											}
											if (target.hasSkill('gzrende')) {
												num += 1.2;
											}
											if (target.hasSkill('longdan')) {
												num += 1.2;
											}
											if (target.hasSkill('paoxiao')) {
												num += 1.2;
											}
											if (target.hasSkill('zhangwu')) {
												num += 1.5;
											}
											if (target != player) {
												num += 0.5;
											}
										}
										return num;
									},
								},
							},
						},
						gzyongjue: {
							trigger: { global: 'useCardAfter' },
							filter(event, player) {
								if (event.gzyongjue == player) {
									for (const i of event.cards) {
										if (get.position(i) == 'd') {
											return true;
										}
									}
								}
								return false;
							},
							mark: true,
							nopop: true,
							intro: {
								content: '若与你势力相同的一名角色于其回合内使用的第一张牌为【杀】,则该角色可以在此【杀】结算完成后获得之',
							},
							content() {
								const cards = [];

								for (const i of trigger.cards) {
									if (get.position(i) == 'd') {
										cards.push(i);
									}
								}

								player.gain(cards, 'gain2');
							},
							subSkill: {
								count: {
									trigger: { global: 'useCard' },
									filter(event, player) {
										return event.card && event.card.name == 'sha' && event.cards.length && event.player.isFriendsOf(player) && event.player.countUsed() == 1;
									},
									silent: true,
									content() {
										trigger.gzyongjue = player;
									},
								},
							},
							group: 'gzyongjue_count',
							global: 'gzyongjue_ai',
						},
						gzyongjue_ai: {
							ai: {
								presha: true,
								skillTagFilter(player) {
									if (
										!game.hasPlayer(function (current) {
											return current.isFriendsOf(player) && current.hasSkill('gzyongjue');
										})
									) {
										return false;
									}
								},
							},
						},
						baoling: {
							trigger: { player: 'phaseUseEnd' },
							init(player) {
								player.checkMainSkill('baoling');
							},
							forced: true,
							filter(event, player) {
								return player.hasViceCharacter();
							},
							content() {
								'step 0';
								player.removeCharacter(1);
								('step 1');
								player.awakenSkill('baoling');
								player.gainMaxHp(3, true);
								('step 2');
								player.recover(3);
								player.addSkill('benghuai');
							},
							derivation: 'benghuai',
						},
						gzmingshi: {
							trigger: { player: 'damageBegin' },
							forced: true,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.isUnseen(2);
							},
							content() {
								trigger.num--;
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) {
											return;
										}
										if (!player.isUnseen(2)) {
											return;
										}
										const num = get.tag(card, 'damage');
										if (num > 0) {
											if (num > 1) {
												return 0.5;
											}
											return 0;
										}
									},
								},
							},
						},
						hunshang: {
							init(player) {
								if (player.checkViceSkill('hunshang')) {
									player.removeMaxHp();
								}
							},
							group: ['hunshang_yingzi', 'hunshang_yinghun'],
						},
						hunshang_yingzi: {
							inherit: 'yingzi',
							filter(event, player) {
								return player.hp <= 1 && !player.hasSkill('yingzi');
							},
						},
						hunshang_yinghun: {
							inherit: 'gzyinghun',
							filter(event, player) {
								return player.hp <= 1 && player.isDamaged() && !player.hasSkill('gzyinghun');
							},
						},
						yingyang: {
							trigger: { player: 'compare', target: 'compare' },
							filter(event, player) {
								return !event.iwhile;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseControl('点数+3', '点数-3', 'cancel2')
									.set('prompt', get.prompt('yingyang'))
									.set('ai', function () {
										if (_status.event.small) {
											return 1;
										} else {
											return 0;
										}
									})
									.set('small', trigger.small);
								('step 1');
								if (result.index != 2) {
									if (result.index == 0) {
										game.log(player, '拼点牌点数+3');
										if (player == trigger.player) {
											trigger.num1 += 3;
										} else {
											trigger.num2 += 3;
										}
									} else {
										game.log(player, '拼点牌点数-3');
										if (player == trigger.player) {
											trigger.num1 -= 3;
										} else {
											trigger.num2 -= 3;
										}
									}
								}
							},
						},
						gzqianxi: {
							audio: 'qianxi',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.judge();
								('step 1');
								event.color = result.color;
								player
									.chooseTarget(function (card, player, target) {
										return player != target && get.distance(player, target) <= 1;
									}, true)
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 2');
								if (result.targets?.length) {
									result.targets[0].storage.qianxi2 = event.color;
									result.targets[0].addSkill('qianxi2');
									player.line(result.targets, 'green');
									game.addVideo('storage', result.targets[0], ['qianxi2', event.color]);
								}
							},
						},
						gzduanchang: {
							audio: 'duanchang',
							trigger: { player: 'dieBegin' },
							popup: true,
							silent: true,
							filter(event, player) {
								return event.source && event.source.isIn() && event.source != player && (event.source.hasMainCharacter() || event.source.hasViceCharacter());
							},
							content() {
								'step 0';
								if (!trigger.source.hasViceCharacter()) {
									event._result = { control: '主将' };
								} else if (!trigger.source.hasMainCharacter()) {
									event._result = { control: '副将' };
								} else {
									player
										.chooseControl('主将', '副将', function () {
											return Math.random() < 0.5 ? '主将' : '副将';
										})
										.set('prompt', '令' + get.translation(trigger.source) + '失去一张武将牌的所有技能');
								}
								('step 1');
								let skills;
								if (result.control == '主将') {
									trigger.source.showCharacter(0);
									game.broadcastAll(function (player) {
										player.node.avatar.classList.add('disabled');
									}, trigger.source);
									skills = lib.character[trigger.source.name][3];
									game.log(trigger.source, '失去了主将技能');
								} else {
									trigger.source.showCharacter(1);
									game.broadcastAll(function (player) {
										player.node.avatar2.classList.add('disabled');
									}, trigger.source);
									skills = lib.character[trigger.source.name2][3];
									game.log(trigger.source, '失去了副将技能');
								}
								const list = [];

								for (const i of skills) {
									list.add(i);
									const info = lib.skill[i];
									if (typeof info.derivation == 'string') {
										list.add(info.derivation);
									} else if (Array.isArray(info.derivation)) {
										list.addArray(info.derivation);
									}
								}

								trigger.source.disableSkill('gzduanchang_disable', list);
								trigger.source.syncSkills();
								player.line(trigger.source, 'green');
							},
							logTarget: 'source',
							ai: {
								threaten(player, target) {
									if (target.hp == 1) {
										return 0.2;
									}
									return 1.5;
								},
								effect: {
									target(card, player, target, current) {
										if (!target.hasFriend()) {
											return;
										}
										if (target.hp <= 1 && get.tag(card, 'damage')) {
											return [1, 0, 0, -2];
										}
									},
								},
							},
						},
						gzweimu: {
							audio: 'weimu',
							trigger: { target: 'useCardToBefore' },
							forced: true,
							_priority: 15,
							check(event, player) {
								return get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick' && get.color(event.card) == 'black';
							},
							content() {
								trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.type(card, 'trick') == 'trick' && get.color(card) == 'black') {
											return 'zeroplayertarget';
										}
									},
								},
							},
						},
						gzqianxun: {
							audio: 'qianxun',
							trigger: { target: 'useCardToBefore' },
							forced: true,
							_priority: 15,
							check(event, player) {
								return get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return (event.card && event.card.name == 'shunshou') || event.card.name == 'lebu';
							},
							content() {
								trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'shunshou' || card.name == 'lebu') {
											return 'zeroplayertarget';
										}
									},
								},
							},
						},
						gzkongcheng: {
							audio: 'kongcheng',
							trigger: { target: 'useCardToBefore' },
							forced: true,
							_priority: 15,
							check(event, player) {
								return get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return player.countCards('h') == 0 && (event.card.name == 'sha' || event.card.name == 'juedou');
							},
							content() {
								trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (target.countCards('h') == 0 && (card.name == 'sha' || card.name == 'juedou')) {
											return 'zeroplayertarget';
										}
									},
								},
							},
						},
						gzxiaoji: {
							inherit: 'xiaoji',
							content() {
								player.draw(2);
							},
						},
						gzrende: {
							audio: 'rende',
							group: ['gzrende1'],
							enable: 'phaseUse',
							filterCard: true,
							selectCard: [1, Infinity],
							discard: false,
							prepare: 'give',
							filterTarget(card, player, target) {
								return player != target;
							},
							check(card) {
								if (ui.selected.cards.length > 2) {
									return 0;
								}
								if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
									return 0;
								}
								if (!ui.selected.cards.length && card.name == 'du') {
									return 20;
								}
								const player = get.owner(card);
								if (player.hp == player.maxHp || player.storage.gzrende < 0 || player.countCards('h') + player.storage.gzrende <= 2) {
									if (ui.selected.cards.length) {
										return -1;
									}
									const players = game.filterPlayer();

									for (const i of players) {
										if (i.hasSkill('haoshi') && !i.isTurnedOver() && !i.hasJudge('lebu') && get.attitude(player, i) >= 3 && get.attitude(i, player) >= 3) {
											return 11 - get.value(card);
										}
									}

									if (player.countCards('h') > player.hp) {
										return 10 - get.value(card);
									}
									if (player.countCards('h') > 2) {
										return 6 - get.value(card);
									}
									return -1;
								}
								return 10 - get.value(card);
							},
							content() {
								target.gain(cards, player);
								if (typeof player.storage.gzrende != 'number') {
									player.storage.gzrende = 0;
								}
								if (player.storage.gzrende >= 0) {
									player.storage.gzrende += cards.length;
									if (player.storage.gzrende >= 3) {
										player.recover();
										player.storage.gzrende = -1;
									}
								}
							},
							ai: {
								order(skill, player) {
									if (player.hp == player.maxHp || player.storage.gzrende < 0 || player.countCards('h') + player.storage.gzrende <= 2) {
										return 1;
									}
									return 10;
								},
								result: {
									target(player, target) {
										if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
											return -10;
										}
										if (target.hasJudge('lebu')) {
											return 0;
										}
										const nh = target.countCards('h');
										const np = player.countCards('h');
										if (player.hp == player.maxHp || player.storage.gzrende < 0 || player.countCards('h') + player.storage.gzrende <= 2) {
											if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) {
												return 0;
											}
										}
										return Math.max(1, 5 - nh);
									},
								},
								effect: {
									target(card, player, target) {
										if (player == target && get.type(card) == 'equip') {
											if (player.countCards('e', { subtype: get.subtype(card) })) {
												const players = game.filterPlayer();

												for (const i of players) {
													if (i != player && get.attitude(player, i) > 0) {
														return 0;
													}
												}
											}
										}
									},
								},
								threaten: 0.8,
							},
						},
						gzrende1: {
							trigger: { player: 'phaseUseBegin' },
							silent: true,
							content() {
								player.storage.gzrende = 0;
							},
						},
						gzzhiheng: {
							inherit: 'zhiheng',
							selectCard() {
								return [1, _status.event.player.maxHp];
							},
							prompt: '出牌阶段限一次,你可以弃置至多X张牌(X为你的体力上限),然后摸等量的牌',
						},
						huoshui: {
							enable: 'phaseUse',

							filter(event, player) {
								if (player.name1 == 'gz_zoushi') {
									return player.isUnseen(0);
								}
								return player.isUnseen(1);
							},
							content() {
								if (player.name1 == 'gz_zoushi') {
									player.showCharacter(0);
								} else {
									player.showCharacter(1);
								}
							},
						},
						_huoshui: {
							ai: {
								nomingzhi: true,
								skillTagFilter(player) {
									if (_status.currentPhase && _status.currentPhase != player && _status.currentPhase.hasSkill('huoshui')) {
										return true;
									}
									return false;
								},
							},
						},
						qingcheng: {
							enable: 'phaseUse',
							filter(event, player) {
								return (
									player.countCards('he', { type: 'equip' }) &&
									game.hasPlayer(function (current) {
										return current != player && !current.isUnseen(2);
									})
								);
							},
							filterCard: { type: 'equip' },
							position: 'he',
							filterTarget(card, player, target) {
								return !target.isUnseen(2);
							},
							check(card) {
								return 6 - get.value(card, _status.event.player);
							},
							content() {
								'step 0';
								if (get.is.jun(target)) {
									event._result = { control: '副将' };
								} else {
									let choice = '主将';
									const skills = lib.character[target.name2][3];

									for (const i of skills) {
										const info = get.info(i);
										if (info && info.ai && info.ai.maixie) {
											choice = '副将';
											break;
										}
									}

									if (target.name == 'gz_zhoutai') {
										choice = '主将';
									} else if (target.name2 == 'gz_zhoutai') {
										choice = '副将';
									}
									player
										.chooseControl('主将', '副将', function () {
											return _status.event.choice;
										})
										.set('prompt', '暗置' + get.translation(target) + '的一张武将牌')
										.set('choice', choice);
								}
								('step 1');
								if (result.control == '主将') {
									target.hideCharacter(0);
								} else {
									target.hideCharacter(1);
								}
								target.addTempSkill('qingcheng_ai');
							},
							ai: {
								order: 8,
								result: {
									target(player, target) {
										if (target.hp <= 0) {
											return -5;
										}
										if (player.getStat().skill.qingcheng) {
											return 0;
										}
										if (!target.hasSkillTag('maixie')) {
											return 0;
										}
										if (get.attitude(player, target) >= 0) {
											return 0;
										}
										if (
											player.hasCard(function (card) {
												return get.tag(card, 'damage') && player.canUse(card, target, true, true);
											})
										) {
											if (target.maxHp > 3) {
												return -0.5;
											}
											return -1;
										}
										return 0;
									},
								},
							},
						},
						qingcheng_ai: {
							ai: {
								effect: {
									target(card) {
										if (get.tag(card, 'damage')) {
											return 2;
										}
									},
								},
							},
						},
						duoshi: {
							enable: 'chooseToUse',
							viewAs: { name: 'yiyi' },
							usable: 4,
							filterCard: { color: 'red' },
							viewAsFilter(player) {
								return player.countCards('h', { color: 'red' }) > 0;
							},
							check(card) {
								return 5 - get.value(card);
							},
						},
						gzxiaoguo: {
							inherit: 'xiaoguo',
							content() {
								'step 0';
								var nono = Math.abs(get.attitude(player, trigger.player)) < 3;
								if (get.damageEffect(trigger.player, player, player) <= 0) {
									nono = true;
								}
								const next = player.chooseToDiscard(get.prompt('gzxiaoguo', trigger.player), { type: 'basic' });
								next.set('ai', function (card) {
									if (_status.event.nono) {
										return 0;
									}
									return 8 - get.useful(card);
								});

								next.set('nono', nono);
								('step 1');
								if (result.bool) {
									var nono = get.damageEffect(trigger.player, player, trigger.player) >= 0;
									trigger.player
										.chooseToDiscard('he', { type: 'equip' })
										.set('ai', function (card) {
											if (_status.event.nono) {
												return 0;
											}
											if (_status.event.player.hp == 1) {
												return 10 - get.value(card);
											}
											return 9 - get.value(card);
										})
										.set('nono', nono);
								} else {
									event.finish();
								}
								('step 2');
								if (!result.bool) {
									trigger.player.damage();
								}
							},
						},
						_mingzhi1: {
							trigger: { player: 'phaseBegin' },
							_priority: 19,
							forced: true,
							popup: false,
							content() {
								'step 0';
								let choice = 1;

								for (const i of player.hiddenSkills) {
									if (lib.skill[i].ai) {
										const mingzhi = lib.skill[i].ai.mingzhi;
										if (mingzhi == false) {
											choice = 0;
											break;
										}
										if (typeof mingzhi == 'function' && mingzhi(trigger, player) == false) {
											choice = 0;
											break;
										}
									}
								}

								if (player.isUnseen()) {
									const group = lib.character[player.name1][1];
									player.chooseControl('bumingzhi', '明置' + get.translation(player.name1), '明置' + get.translation(player.name2), 'tongshimingzhi', true).ai = function (event, player) {
										const popu = get.population(lib.character[player.name1][1]);
										if (popu >= 2 || (popu == 1 && game.players.length <= 4)) {
											return Math.random() < 0.5 ? 3 : Math.random() < 0.5 ? 2 : 1;
										}
										if (choice == 0) {
											return 0;
										}
										if (get.population(group) > 0 && player.wontYe()) {
											return Math.random() < 0.2 ? (Math.random() < 0.5 ? 3 : Math.random() < 0.5 ? 2 : 1) : 0;
										}
										let nming = 0;

										for (const i of game.players) {
											if (i != player && i.identity != 'unknown') {
												nming++;
											}
										}

										if (nming == game.players.length - 1) {
											return Math.random() < 0.5 ? (Math.random() < 0.5 ? 3 : Math.random() < 0.5 ? 2 : 1) : 0;
										}
										return Math.random() < (0.1 * nming) / game.players.length ? (Math.random() < 0.5 ? 3 : Math.random() < 0.5 ? 2 : 1) : 0;
									};
								} else {
									if (Math.random() < 0.5) {
										choice = 0;
									}
									if (player.isUnseen(0)) {
										player.chooseControl('bumingzhi', '明置' + get.translation(player.name1), true).choice = choice;
									} else if (player.isUnseen(1)) {
										player.chooseControl('bumingzhi', '明置' + get.translation(player.name2), true).choice = choice;
									} else {
										event.finish();
									}
								}
								('step 1');
								switch (result.control) {
									case '明置' + get.translation(player.name1):
										player.showCharacter(0);
										break;
									case '明置' + get.translation(player.name2):
										player.showCharacter(1);
										break;
									case 'tongshimingzhi':
										player.showCharacter(2);
										break;
								}
							},
						},
						_mingzhi2: {
							trigger: { player: 'triggerHidden' },
							forced: true,
							popup: false,
							_priority: 10,
							content() {
								'step 0';
								if (get.info(trigger.skill).silent) {
									event.finish();
								} else {
									event.skillHidden = true;
									const bool1 = game.expandSkills(lib.character[player.name1][3]).includes(trigger.skill);
									const bool2 = game.expandSkills(lib.character[player.name2][3]).includes(trigger.skill);
									const nai = function () {
										const player = _status.event.player;
										if (!_status.event.yes) {
											return false;
										}
										if (player.identity != 'unknown') {
											return true;
										}
										if (Math.random() < 0.5) {
											return true;
										}
										const info = get.info(_status.event.skill);
										if (info && info.ai && info.ai.mingzhi == true) {
											return true;
										}
										if (info && info.ai && info.ai.maixie) {
											return true;
										}
										const group = lib.character[player.name1][1];
										const popu = get.population(lib.character[player.name1][1]);
										if (popu >= 2 || (popu == 1 && game.players.length <= 4)) {
											return true;
										}
										if (get.population(group) > 0 && player.wontYe()) {
											return Math.random() < 0.2 ? true : false;
										}
										let nming = 0;

										for (const i of game.players) {
											if (i != player && i.identity != 'unknown') {
												nming++;
											}
										}

										if (nming == game.players.length - 1) {
											return Math.random() < 0.5 ? true : false;
										}
										return Math.random() < (0.1 * nming) / game.players.length ? true : false;
									};
									if (bool1 && bool2) {
										event.name = player.name1;
										event.name2 = player.name2;
									} else {
										event.name = bool1 ? player.name1 : player.name2;
									}
									var info = get.info(trigger.skill);
									var next = player.chooseBool('是否明置' + get.translation(event.name) + '以发动【' + get.translation(trigger.skill) + '】？');
									next.yes = !info.check || info.check(trigger._trigger, player);
									next.skill = trigger.skill;
									next.ai = nai;
								}
								('step 1');
								if (result.bool) {
									if (event.name == player.name1) {
										player.showCharacter(0);
									} else {
										player.showCharacter(1);
									}
									trigger.revealed = true;
									event.finish();
								} else if (event.name2) {
									var info = get.info(trigger.skill);
									var next = player.chooseBool('是否明置' + get.translation(event.name2) + '以发动【' + get.translation(trigger.skill) + '】？');
									next.yes = !info.check || info.check(trigger._trigger, player);
									next.ai = function () {
										return _status.event.yes;
									};
								} else {
									event.finish();
									trigger.untrigger();
									trigger.cancelled = true;
								}
								('step 2');
								if (event.name2) {
									if (result.bool) {
										player.showCharacter(1);
										trigger.revealed = true;
									} else {
										trigger.untrigger();
										trigger.cancelled = true;
									}
								}
							},
						},
						_mingzhi3: {
							trigger: { player: 'phaseBegin' },
							_priority: 19.1,
							forced: true,
							popup: false,
							filter(event, player) {
								return player.isUnseen(0) && get.is.jun(player.name1);
							},
							content() {
								player.showCharacter(0);
							},
						},
						_zhenfazhaohuan: {
							enable: 'phaseUse',
							usable: 1,
							getConfig(player) {
								let n1, n2, p1, p2;
								const config = {
									inline: false,
									siege: false,
								};
								const config2 = {};
								n1 = player.next;
								p1 = player.previous;
								if (n1) {
									if (n1.isUnseen()) {
										config.inline = true;
									} else if (n1.identity != player.identity) {
										n2 = n1.next;
										if (n2 && n2.isUnseen()) {
											config.siege = true;
										}
									}
								}
								if (p1) {
									if (p1.isUnseen()) {
										config.inline = true;
									} else if (p1.identity != player.identity) {
										p2 = p1.previous;
										if (p2 && p2.isUnseen()) {
											config.siege = true;
										}
									}
								}
								if (config.inline || config.siege) {
									const skills = player.getSkills();

									for (const i of skills) {
										const info = get.info(i).zhenfa;
										if (info && config[info]) {
											config2[info] = true;
										}
									}
								}
								return config2;
							},
							filter(event, player) {
								if (game.countPlayer() < 4) {
									return false;
								}
								if (player.hasSkill('undist')) {
									return false;
								}
								const config = lib.skill._zhenfazhaohuan.getConfig(player);
								return config.inline || config.siege;
							},
							content() {
								'step 0';
								const config = lib.skill._zhenfazhaohuan.getConfig(player);
								if (config.siege) {
									event.siege = true;
								}
								if (!config.inline) {
									event.goto(3);
								}
								event.asked = [];
								event.current = player;
								event.dir = true;
								event.askPlayer = function () {
									event.directfalse = false;
									if (event.current && event.current.isUnseen() && !event.asked.includes(event.current)) {
										player.line(event.current, 'green');
										event.asked.push(event.current);
										if (lib.character[event.current.name1][1] == player.identity) {
											event.current
												.chooseControl(['明置' + get.translation(event.current.name1), '明置' + get.translation(event.current.name2), '不明置'], function () {
													return Math.floor(Math.random() * 3);
												})
												.set('prompt', get.translation(player) + '发了阵法召唤,你可以明置一个武将');
										} else {
											event.directfalse = true;
											if (_status.connectMode) {
												event.current.chooseControl('不明置').set('prompt', get.translation(player) + '发了阵法召唤(你与其势力不同,无法明置武将)');
											}
										}
									} else {
										event.directfalse = true;
									}
								};
								event.checkResult = function (result, num) {
									if (!event.directfalse && result.control != '不明置') {
										if (result.index == 0) {
											event.current.showCharacter(0);
										} else {
											event.current.showCharacter(1);
										}
										if (event.current.identity == 'ye' || num != 1) {
											if (event.dir) {
												event.dir = false;
												event.current = player;
												event.goto(num);
											}
										} else {
											event.goto(num);
										}
									} else if (event.dir) {
										event.dir = false;
										event.current = player;
										event.goto(num);
									}
								};
								('step 1');
								if (event.dir) {
									event.current = event.current.next;
								} else {
									event.current = event.current.previous;
								}
								event.askPlayer();
								('step 2');
								event.checkResult(result, 1);
								('step 3');
								if (!event.siege) {
									event.finish();
									return;
								}
								event.dir = true;
								('step 4');
								let str;
								if (event.dir) {
									str = 'getNext';
								} else {
									str = 'getPrevious';
								}
								event.current = player[str]();
								if (event.current && !event.current.isUnseen() && event.current.identity != player.identity) {
									event.current = event.current[str]();
								}
								event.askPlayer();
								('step 5');
								event.checkResult(result, 4);
							},
							ai: {
								order: 5,
								result: {
									player: 1,
								},
							},
						},
					},
					game: {
						getCharacterChoice(list, num) {
							const choice = list.splice(0, num);
							const map = { wei: [], shu: [], wu: [], qun: [] };

							for (const i of choice) {
								var group = lib.character[i][1];
								if (map[group]) {
									map[group].push(i);
								}
							}

							for (const i in map) {
								if (map[i].length < 2) {
									if (map[i].length == 1) {
										choice.remove(map[i][0]);
										list.push(map[i][0]);
									}
									delete map[i];
								}
							}
							if (choice.length == num - 1) {
								for (let i = 0; i < list.length; i++) {
									if (map[lib.character[list[i]][1]]) {
										choice.push(list[i]);
										list.splice(i--, 1);
										break;
									}
								}
							} else if (choice.length < num - 1) {
								var group = null;
								for (let i = 0; i < list.length; i++) {
									if (group) {
										if (lib.character[list[i]][1] == group) {
											choice.push(list[i]);
											list.splice(i--, 1);
											if (choice.length >= num) {
												break;
											}
										}
									} else {
										if (!map[lib.character[list[i]][1]]) {
											group = lib.character[list[i]][1];
											choice.push(list[i]);
											list.splice(i--, 1);
										}
									}
								}
							}
							return choice;
						},
						getState() {
							const state = {};
							for (const i in lib.playerOL) {
								const player = lib.playerOL[i];
								state[i] = {
									identity: player.identity,
									shown: player.ai.shown,
								};
							}
							return state;
						},
						updateState(state) {
							for (const i in state) {
								const player = lib.playerOL[i];
								if (player) {
									player.identity = state[i].identity;
									player.ai.shown = state[i].shown;
								}
							}
						},
						getRoomInfo(uiintro) {
							let num, last;
							if (lib.configOL.initshow_draw == '0') {
								num = '关闭';
							} else {
								num = get.cnNumber(parseInt(lib.configOL.initshow_draw)) + '张';
							}
							uiintro.add('<div class="text chat">首亮摸牌:' + num);
							uiintro.add('<div class="text chat">珠联璧合:' + (lib.configOL.zhulian ? '开启' : '关闭'));
							uiintro.add('<div class="text chat">出牌时限:' + lib.configOL.choose_timeout + '秒');
							uiintro.add('<div class="text chat">国战牌堆:' + (lib.configOL.guozhanpile ? '开启' : '关闭'));
							last = uiintro.add('<div class="text chat">国战武将:' + (lib.configOL.onlyguozhan ? '开启' : '关闭'));
							if (!lib.configOL.onlyguozhan) {
								uiintro.add('<div class="text chat">屏蔽弱将:' + (lib.configOL.ban_weak ? '开启' : '关闭'));
								last = uiintro.add('<div class="text chat">屏蔽强将:' + (lib.configOL.ban_strong ? '开启' : '关闭'));
								if (lib.configOL.banned.length) {
									last = uiintro.add('<div class="text chat">禁用武将:' + get.translation(lib.configOL.banned));
								}
								if (lib.configOL.bannedcards.length) {
									last = uiintro.add('<div class="text chat">禁用卡牌:' + get.translation(lib.configOL.bannedcards));
								}
							}
							last.style.paddingBottom = '8px';
						},
						addRecord(bool) {
							if (typeof bool == 'boolean') {
								const data = lib.config.gameRecord.guozhan.data;
								const identity = game.me.identity;
								if (!data[identity]) {
									data[identity] = [0, 0];
								}
								if (bool) {
									data[identity][0]++;
								} else {
									data[identity][1]++;
								}
								const list = ['wei', 'shu', 'wu', 'qun', 'ye'];
								let str = '';

								for (const i of list) {
									if (data[i]) {
										str += lib.translate[i + '2'] + ':' + data[i][0] + '胜 ' + data[i][1] + '负<br>';
									}
								}

								lib.config.gameRecord.guozhan.str = str;
								game.saveConfig('gameRecord', lib.config.gameRecord);
							}
						},
						getIdentityList(player) {
							if (!player.isUnseen()) {
								return;
							}
							if (player == game.me) {
								return;
							}
							const list = {
								wei: '魏',
								shu: '蜀',
								wu: '吴',
								qun: '群',
								ye: '野',
								unknown: '',
							};
							const num = Math.floor((game.players.length + game.dead.length) / 2);
							let noye = true;
							if (get.population('wei') >= num) {
								delete list.wei;
								noye = false;
							}
							if (get.population('shu') >= num) {
								delete list.shu;
								noye = false;
							}
							if (get.population('wu') >= num) {
								delete list.wu;
								noye = false;
							}
							if (get.population('qun') >= num) {
								delete list.qun;
								noye = false;
							}
							if (noye) {
								delete list.ye;
							}
							return list;
						},
						getIdentityList2(list) {
							for (const i in list) {
								switch (i) {
									case 'unknown':
										list[i] = '未知';
										break;
									case 'ye':
										list[i] = '野心家';
										break;
									case 'qun':
										list[i] += '雄';
										break;
									default:
										list[i] += '国';
								}
							}
						},
						getVideoName() {
							const str = get.translation(game.me.name1) + '/' + get.translation(game.me.name2);
							let str2 = get.cnNumber(parseInt(get.config('player_number'))) + '人' + get.translation(lib.config.mode);
							if (game.me.identity == 'ye') {
								str2 += ' - 野心家';
							}
							const name = [str, str2];
							return name;
						},
						showIdentity(started) {
							if (game.phaseNumber == 0 && !started) {
								return;
							}

							for (const i of game.players) {
								i.showCharacter(2, false);
							}
						},
						tryResult() {
							let hasunknown = false,
								check = true,
								unknown,
								giveup;
							const group = game.players[0]._group;

							for (const i of game.players) {
								if (i.identity == 'unknown') {
									hasunknown = true;
									if (unknown) {
										unknown = 'no';
									} else {
										unknown = i;
									}
								}
								if (i._group != group) {
									check = false;
									break;
								}
							}

							if (check) {
								if (get.population('ye')) {
									if (game.players.length > 1) {
										check = false;
									}
								} else {
									if (
										hasunknown &&
										!game.hasPlayer(function (current) {
											return get.is.jun(current);
										})
									) {
										const players = game.players.concat(game.dead);
										let num = 0;

										for (const i of players) {
											if (i._group == group) {
												num++;
											}
										}

										if (num > players.length / 2) {
											check = false;
										}
									}
								}
							}
							if (check) {
								game.checkResult();
							} else if (!hasunknown) {
								const ids = [];
								const idmap = {};
								const idp = {};

								for (const i of game.players) {
									const id = i.identity;
									ids.add(id);
									if (!idmap[id]) {
										idmap[id] = 1;
									} else {
										idmap[id]++;
									}
									idp[id] = i;
								}

								if (ids.length != 2) {
									return;
								}
								const id1 = ids[0],
									id2 = ids[1];
								if (idmap[id1] > 1 && idmap[id2] > 1) {
									return;
								}
								if (idmap[id1] > 1 && id1 == 'ye') {
									return;
								}
								if (idmap[id2] > 1 && id2 == 'ye') {
									return;
								}
								if (idmap[id1] == 1) {
									idp[id1].showGiveup();
								}
								if (idmap[id2] == 1) {
									idp[id2].showGiveup();
								}
							}
						},
						checkResult() {
							_status.overing = true;

							for (const i of game.players) {
								i.showCharacter(2);
							}

							if (game.me.identity == 'ye') {
								if (game.me.classList.contains('dead')) {
									game.over('战斗失败');
								} else {
									game.over('战斗胜利');
								}
							} else {
								if (get.population(game.me.identity) == 0) {
									game.over('战斗失败');
								} else {
									game.over('战斗胜利');
								}
							}
							game.showIdentity();
						},
						checkOnlineResult(player) {
							if (player.identity == 'ye') {
								return player.isAlive();
							}
							return get.population(player.identity) > 0;
						},
						chooseCharacter() {
							const originalArr = ['wei', 'wei', 'shu', 'shu', 'wu', 'wu', 'qun', 'qun'];
							const selectedItems = originalArr.randomGets(2);
							const filledArr = [];
							selectedItems.forEach((item) => {
								filledArr.push(...Array(4).fill(item));
							});
							const shilisuiji = filledArr.randomSort();
							for (let i = 0; i < game.players.length; i++) {
								game.players[i].siguosl = shilisuiji[i];
							}
							const next = game.createEvent('chooseCharacter', false);
							next.showConfig = true;
							next.addPlayer = true;
							next.ai = function (player, list, back) {
								if (_status.brawl && _status.brawl.chooseCharacterAi) {
									if (_status.brawl.chooseCharacterAi(player, list, back) !== false) {
										return;
									}
								}
								for (let i = 0; i < list.length - 1; i++) {
									for (let j = i + 1; j < list.length; j++) {
										if (lib.character[list[i]][1] == lib.character[list[j]][1]) {
											player.init(list[i], list[j], true);
											if (back) {
												list.remove(player.name);
												list.remove(player.name2);

												for (const i of list) {
													back.push(i);
												}
											}
											return;
										}
									}
								}
							};
							next.setContent(function () {
								'step 0';
								ui.arena.classList.add('choose-character');
								const addSetting = function (dialog) {
									dialog.add('选择座位').classList.add('add-setting');
									const seats = document.createElement('table');
									seats.classList.add('add-setting');
									seats.style.margin = '0';
									seats.style.width = '100%';
									seats.style.position = 'relative';
									for (let i = 1; i <= game.players.length; i++) {
										const td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
										td.innerHTML = '<span>' + get.cnNumber(i, true) + '</span>';
										td.link = i - 1;
										seats.appendChild(td);
										td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
											if (_status.dragged) {
												return;
											}
											if (_status.justdragged) {
												return;
											}
											if (_status.cheat_seat) {
												_status.cheat_seat.classList.remove('bluebg');
												if (_status.cheat_seat == this) {
													delete _status.cheat_seat;
													return;
												}
											}
											this.classList.add('bluebg');
											_status.cheat_seat = this;
										});
									}
									dialog.content.appendChild(seats);
									if (game.me == game.zhu) {
										seats.previousSibling.style.display = 'none';
										seats.style.display = 'none';
									}

									dialog.add(ui.create.div('.placeholder.add-setting'));
									dialog.add(ui.create.div('.placeholder.add-setting'));
									if (get.is.phoneLayout()) {
										dialog.add(ui.create.div('.placeholder.add-setting'));
									}
								};
								const removeSetting = function () {
									const dialog = _status.event.dialog;
									if (dialog) {
										dialog.style.height = '';
										delete dialog._scrollset;
										const list = Array.from(dialog.querySelectorAll('.add-setting'));
										while (list.length) {
											list.shift().remove();
										}
										ui.update();
									}
								};
								event.addSetting = addSetting;
								event.removeSetting = removeSetting;

								const chosen = lib.config.continue_name || [];
								game.saveConfig('continue_name');
								event.chosen = chosen;

								var i;
								var list = {
									wei: [],
									shu: [],
									wu: [],
									qun: [],
								};
								for (const i in lib.character) {
									if (i.indexOf('gz_shibing') == 0) {
										continue;
									}
									if (chosen.includes(i)) {
										continue;
									}
									if (lib.filter.characterDisabled(i)) {
										continue;
									}
									if (list[lib.character[i][1]] && (lib.character[i][2] == 3 || lib.character[i][2] == 4 || lib.character[i][2] == 5)) {
										list[lib.character[i][1]].push(i);
									}
								}
								event.list = list[game.me.siguosl];
								event.zlist = list;
								_status.characterlist = event.list.slice(0);
								_status.yeidentity = [];
								if (_status.brawl && _status.brawl.chooseCharacterFilter) {
									event.list = _status.brawl.chooseCharacterFilter(event.list);
								}
								event.list.randomSort();
								var list;
								if (_status.brawl && _status.brawl.chooseCharacter) {
									list = _status.brawl.chooseCharacter(event.list, game.me);
								} else {
									list = game.getCharacterChoice(event.list, parseInt(get.config('choice_num')));
								}
								if (_status.auto) {
									event.ai(game.me, list);
									lib.init.onfree();
								} else if (chosen.length) {
									game.me.init(chosen[0], chosen[1], true);
									lib.init.onfree();
								} else {
									const dialog = ui.create.dialog('选择角色', 'hidden', [list, 'character']);
									if (!_status.brawl || !_status.brawl.noAddSetting) {
										if (get.config('change_identity')) {
											addSetting(dialog);
										}
									}
									const next = game.me.chooseButton(dialog, true, 2).set('onfree', true);
									next.filterButton = function (button) {
										if (ui.dialog.buttons.length <= 10) {
											for (const i of ui.dialog.buttons) {
												if (i != button) {
													if (
														lib.element.player.perfectPair.call({
															name1: button.link,
															name2: i.link,
														})
													) {
														button.classList.add('glow2');
													}
												}
											}
										}
										if (ui.selected.buttons.length == 0) {
											return true;
										}
										return lib.character[button.link][1] == lib.character[ui.selected.buttons[0].link][1];
									};
									next.switchToAuto = function () {
										event.ai(game.me, list);
										ui.arena.classList.remove('selecting');
									};
									const createCharacterDialog = function () {
										event.dialogxx = ui.create.characterDialog(
											'heightset',
											function (i) {
												if (i.indexOf('gz_shibing') == 0) {
													return true;
												}
												if (get.config('onlyguozhan')) {
													if (!lib.characterPack.mode_guozhan[i]) {
														return true;
													}
													if (get.config('junzhu')) {
														if (lib.junList.includes(i.slice(3))) {
															return true;
														}
													} else {
														if (get.is.jun(i)) {
															return true;
														}
													}
												}
											},
											get.config('onlyguozhanexpand') ? 'expandall' : undefined,
											get.config('onlyguozhan') ? 'onlypack:mode_guozhan' : undefined,
										);
										if (ui.cheat2) {
											ui.cheat2.addTempClass('controlpressdownx', 500);
											ui.cheat2.classList.remove('disabled');
										}
									};
									if (lib.onfree) {
										lib.onfree.push(createCharacterDialog);
									} else {
										createCharacterDialog();
									}
									ui.create.cheat2 = function () {
										ui.cheat2 = ui.create.control('自由选将', function () {
											if (this.dialog == _status.event.dialog) {
												if (game.changeCoin) {
													game.changeCoin(50);
												}
												this.dialog.close();
												_status.event.dialog = this.backup;
												this.backup.open();
												delete this.backup;
												game.uncheck();
												game.check();
												if (ui.cheat) {
													ui.cheat.addTempClass('controlpressdownx', 500);
													ui.cheat.classList.remove('disabled');
												}
											} else {
												if (game.changeCoin) {
													game.changeCoin(-10);
												}
												this.backup = _status.event.dialog;
												_status.event.dialog.close();
												_status.event.dialog = _status.event.parent.dialogxx;
												this.dialog = _status.event.dialog;
												this.dialog.open();
												game.uncheck();
												game.check();
												if (ui.cheat) {
													ui.cheat.classList.add('disabled');
												}
											}
										});
										if (lib.onfree) {
											ui.cheat2.classList.add('disabled');
										}
									};
									ui.create.cheat = function () {
										_status.createControl = ui.cheat2;
										ui.cheat = ui.create.control('更换', function () {
											if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
												return;
											}
											if (game.changeCoin) {
												game.changeCoin(-3);
											}
											event.list = event.list.concat(list);
											event.list.randomSort();

											list = game.getCharacterChoice(event.list, parseInt(get.config('choice_num')));
											const buttons = ui.create.div('.buttons');
											const node = _status.event.dialog.buttons[0].parentNode;
											_status.event.dialog.buttons = ui.create.buttons(list, 'character', buttons);
											_status.event.dialog.content.insertBefore(buttons, node);
											buttons.addTempClass('start');
											node.remove();
											game.uncheck();
											game.check();
										});
										delete _status.createControl;
									};
									if (!_status.brawl || !_status.brawl.chooseCharacterFixed) {
										if (!ui.cheat && get.config('change_choice')) {
											ui.create.cheat();
										}
										if (!ui.cheat2 && get.config('free_choose')) {
											ui.create.cheat2();
										}
									}
								}
								('step 1');
								if (ui.cheat) {
									ui.cheat.close();
									delete ui.cheat;
								}
								if (ui.cheat2) {
									ui.cheat2.close();
									delete ui.cheat2;
								}
								if (result.buttons) {
									game.me.init(result.buttons[0].link, result.buttons[1].link, true);
								}
								game.addRecentCharacter(game.me.name, game.me.name2);
								event.list.remove(game.me.name);
								event.list.remove(game.me.name2);

								for (const i of game.players) {
									if (i != game.me) {
										const isls = event.zlist[i.siguosl].randomSort();
										event.ai(i, isls.splice(0, parseInt(get.config('choice_num'))), isls);
									}
								}

								for (const i of game.players) {
									i.classList.add('unseen');
									i.classList.add('unseen2');
									_status.characterlist.remove(i.name);
									_status.characterlist.remove(i.name2);
									if (i != game.me) {
										i.node.identity.firstChild.innerHTML = '';
										i.node.identity.dataset.color = 'unknown';
										i.node.identity.classList.add('guessing');
									}
									i.hiddenSkills = lib.character[i.name][3].slice(0);
									const hiddenSkills2 = lib.character[i.name2][3];

									for (const j of hiddenSkills2) {
										i.hiddenSkills.add(j);
									}

									for (let j = 0; j < i.hiddenSkills.length; j++) {
										if (!lib.skill[i.hiddenSkills[j]]) {
											i.hiddenSkills.splice(j--, 1);
										}
									}
									i.group = 'unknown';
									i.sex = 'unknown';
									i.name1 = i.name;
									i.name = 'unknown';
									i.identity = 'unknown';
									i.node.name.show();
									i.node.name2.show();
									i._group = lib.character[i.name1][1];

									for (const j of i.hiddenSkills) {
										i.addSkillTrigger(j, true);
									}
								}

								setTimeout(function () {
									ui.arena.classList.remove('choose-character');
								}, 500);
							});
						},
						chooseCharacterOL() {
							const next = game.createEvent('chooseCharacter', false);
							next.setContent(function () {
								'step 0';
								game.broadcastAll(function () {
									ui.arena.classList.add('choose-character');
								});
								let list;
								if (lib.configOL.onlyguozhan) {
									list = [];
									for (const i in lib.characterPack.mode_guozhan) {
										if (i.indexOf('gz_shibing') == 0) {
											continue;
										}
										if (lib.configOL.junzhu) {
											if (lib.junList.includes(i.slice(3))) {
												continue;
											}
										} else {
											if (get.is.jun(i)) {
												continue;
											}
										}
										list.push(i);
									}
								} else {
									list = get.charactersOL();
								}
								_status.characterlist = list.slice(0);
								_status.yeidentity = [];
								event.list = list.slice(0);
								const list2 = [];
								let num;
								if (lib.configOL.number * 6 > list.length) {
									num = 5;
								} else if (lib.configOL.number * 7 > list.length) {
									num = 6;
								} else {
									num = 7;
								}
								const filterButton = function (button) {
									if (ui.dialog) {
										if (ui.dialog.buttons.length <= 10) {
											for (const i of ui.dialog.buttons) {
												if (i != button) {
													if (
														lib.element.player.perfectPair.call({
															name1: button.link,
															name2: i.link,
														})
													) {
														button.classList.add('glow2');
													}
												}
											}
										}
									}
									if (ui.selected.buttons.length == 0) {
										return true;
									}
									if (!lib.character[button.link]) {
										return false;
									}
									return lib.character[button.link][1] == lib.character[ui.selected.buttons[0].link][1];
								};
								list.randomSort();

								for (const i of game.players) {
									list2.push([
										i,
										['选择角色', [game.getCharacterChoice(list, num), 'character']],
										2,
										true,
										function () {
											return Math.random();
										},
										filterButton,
									]);
								}

								game.me
									.chooseButtonOL(list2, function (player, result) {
										if (game.online || player == game.me) {
											player.init(result.links[0], result.links[1], false);
										}
									})
									.set('switchToAuto', function () {
										_status.event.result = 'ai';
									})
									.set('processAI', function () {
										const buttons = _status.event.dialog.buttons;
										for (let i = 0; i < buttons.length - 1; i++) {
											for (let j = i + 1; j < buttons.length; j++) {
												if (lib.character[buttons[i].link][1] == lib.character[buttons[j].link][1]) {
													return {
														bool: true,
														links: [buttons[i].link, buttons[j].link],
													};
												}
											}
										}
									});
								('step 1');
								let sort = true;
								for (const i in result) {
									if (result[i] && result[i].links) {
										for (const j of result[i].links) {
											event.list.remove(j);
										}
									}
								}
								for (const i in result) {
									if (result[i] == 'ai' || !result[i].links || result[i].links.length < 1) {
										if (sort) {
											sort = false;
											event.list.randomSort();
										}
										result[i] = [event.list.shift()];
										const group = lib.character[result[i][0]][1];
										for (var j = 0; j < event.list.length; j++) {
											if (lib.character[event.list[j]][1] == group) {
												result[i].push(event.list[j]);
												event.list.splice(j--, 1);
												break;
											}
										}
									} else {
										result[i] = result[i].links;
									}
									if (!lib.playerOL[i].name) {
										lib.playerOL[i].init(result[i][0], result[i][1], false);
									}
								}

								for (const i of game.players) {
									_status.characterlist.remove(i.name);
									_status.characterlist.remove(i.name2);
									i.hiddenSkills = lib.character[i.name][3].slice(0);
									const hiddenSkills2 = lib.character[i.name2][3];

									for (const j of hiddenSkills2) {
										i.hiddenSkills.add(j);
									}

									for (var j = 0; j < i.hiddenSkills.length; j++) {
										if (!lib.skill[i.hiddenSkills[j]]) {
											i.hiddenSkills.splice(j--, 1);
										}
									}

									for (const j of i.hiddenSkills) {
										i.name1 = i.name;
										i.addSkillTrigger(j, true);
									}
								}

								game.broadcastAll(function (result) {
									for (const i in result) {
										if (!lib.playerOL[i].name) {
											lib.playerOL[i].init(result[i][0], result[i][1], false);
										}
									}

									for (const i of game.players) {
										i.classList.add('unseen');
										i.classList.add('unseen2');
										if (i != game.me) {
											i.node.identity.firstChild.innerHTML = '';
											i.node.identity.dataset.color = 'unknown';
											i.node.identity.classList.add('guessing');
										}
										i.group = 'unknown';
										i.sex = 'unknown';
										i.name1 = i.name;
										i.name = 'unknown';
										i.identity = 'unknown';
										i.node.name.show();
										i.node.name2.show();
										i._group = lib.character[i.name1][1];
									}

									setTimeout(function () {
										ui.arena.classList.remove('choose-character');
									}, 500);
								}, result);
							});
						},
					},
					ui: {
						click: {},
					},
					translate: {
						ye: '野',
						ye2: '野心家',
						wei2: '魏国',
						shu2: '蜀国',
						wu2: '吴国',
						qun2: '群雄',
						bumingzhi: '不明置',
						mingzhizhujiang: '明置主将',
						mingzhifujiang: '明置副将',
						tongshimingzhi: '同时明置',
						mode_guozhan_character_config: '国战武将',
						_zhenfazhaohuan: '阵法召唤',
						_zhenfazhaohuan_info: '由拥有阵法技的角色发起,满足此阵法技条件的未确定势力角色均可按逆时针顺序一次明置其一张武将牌(响应阵法召唤),以发挥阵法技的效果',

						gz_jun_liubei: '君刘备',
						gz_jun_zhangjiao: '君张角',

						wuxin: '悟心',
						wuxin_info: '摸牌阶段开始时,你可以观看牌堆顶的X张牌(X为群势力角色的数量),然后将这些牌以任意顺序置于牌堆顶',
						hongfa: '弘法',
						_hongfa: '天兵',
						_hongfa2: '天兵',
						hongfa_info: '君主技,锁定技,当此武将牌明置时,你获得<黄巾天兵符>;准备阶段开始时,若没有<天兵>,你将牌堆顶的X张牌置于<黄巾天兵符>上,称为<天兵>(X为群势力角色的数量)',
						wendao: '问道',
						wendao_info: '出牌阶段限一次,你可以弃置一张红色牌,获得弃牌堆里或场上的一张【太平要术】',
						huangjintianbingfu: '黄巾天兵符',
						huangjintianbingfu_bg: '符',
						huangjintianbingfu_info: '锁定技 :当你计算群势力角色数时,每一张<天兵>均可视为一名群势力角色.<br>每当你失去体力时,你可改为将一张<天兵>置入弃牌堆.<br>与你势力相同的角色可将一张<天兵>当【杀】使用或打出',
						wuhujiangdaqi: '五虎将大旗',
						wuhujiangdaqi_bg: '旗',
						wuhujiangdaqi_info: '存活的蜀势力角色的技能按以下规则改动:<br><strong>武圣</strong>:将<红色牌>改为<任意牌><br><strong>咆哮</strong>:增加描述<你使用的【杀】无视其他角色的防具><br><strong>龙胆</strong>:增加描述<你每发动一次‘龙胆’便摸一张牌><br><strong>烈弓</strong>:增加描述<你的攻击范围+1><br><strong>铁骑</strong>:将<若结果为红色>改为<若结果不为♠️️️️>',
						zhangwu: '章武',
						zhangwu_info: '锁定技.当【飞龙夺凤】进入弃牌堆或其他角色的装备区时,你获得之.当你失去【飞龙夺风】时,展示之,然后将此牌置于牌堆底并摸两张牌',
						shouyue: '授钺',
						shouyue_info: '君主技.只要此武将牌处于明置状态,你便拥有<五虎将大旗>',
						jizhao: '激诏',
						jizhao_bg: '诏',
						jizhao_info: '限定技.当你处于濒死状态时,你可以将手牌补至体力上限,体力回复至2点,失去技能<授钺>并获得技能<仁德>',
						gzshoucheng: '守成',
						gzshoucheng_info: '当与你势力相同的一名角色于其回合外失去最后手牌时,你可以令其摸一张牌',
						gzmingshi: '名士',
						gzmingshi_info: '锁定技,当你受到伤害时,若伤害来源有暗置的武将牌,此伤害-1',
						fengshi: '锋矢',
						_fengshi: '锋矢',
						fengshi_info: '阵法技,在同一个围攻关系中,若你是围攻角色,则你或另一名围攻角色使用【杀】指定被围攻角色为目标后,可令该角色弃置装备区里的一张牌',
						gzsuishi: '随势',
						gzsuishi_info: '锁定技,当其他角色进入濒死状态时,若伤害来源与你势力相同,你摸一张牌;当其他角色死亡时,若其与你势力相同,你失去1点体力',
						baoling: '暴凌',
						baoling_info: '主将技,锁定技,出牌阶段结束时,若你有副将,则你移除副将,然后加3点体力上限,回复3点体力,并获得<崩坏>',
						yingyang: '鹰扬',
						yingyang_info: '当你拼点的牌亮出后,你可以令此牌的点数+3或-3',
						hunshang: '魂殇',
						hunshang_info: '副将技,此武将牌减少半个阴阳鱼;准备阶段,若你的体力值不大于1,则你本回合获得<英姿>和<英魂>',
						gzguixiu: '闺秀',
						gzguixiu_info: '当你明置此武将牌时,你摸两张牌;当你失去此技能时,你回复1点体力',
						gzcunsi: '存嗣',
						gzcunsi_info: '出牌阶段,你可以移除此武将牌并选择一名角色,然后其获得技能<勇决>,若你没有获得<勇决>,则获得<勇决>的角色摸两张牌',
						gzyongjue: '勇决',
						gzyongjue_info: '若与你势力相同的一名角色于其回合内使用的第一张牌为【杀】,则该角色可以在此【杀】结算完成后获得之',
						gzqianxi: '潜袭',
						gzqianxi_info: '准备阶段开始时,你可以进行判定,然后你选择距离为1的一名角色,直到回合结束,该角色不能使用或打出与结果颜色相同的手牌',
						gzshangyi: '尚义',
						gzshangyi_info: '出牌阶段限一次,你可以令一名其他角色观看你的手牌.若如此做,你选择一项:1.观看其手牌并可以弃置其中的一张黑色牌;2.观看其所有暗置的武将牌',
						niaoxiang: '鸟翔',
						_niaoxiang: '鸟翔',
						niaoxiang_info: '阵法技,在同一个围攻关系中,若你是围攻角色,则你或另一名围攻角色使用【杀】指定被围攻角色为目标后,你令该角色需依次使用两张【闪】才能抵消',
						yicheng: '疑城',
						yicheng_info: '当与你势力相同的一名角色成为【杀】的目标后,你可以令该角色摸一张牌然后弃置一张牌',
						yizhi: '遗志',
						yizhi_info: '副将技,此武将牌上单独的阴阳鱼个数-1.若你的主将拥有技能<观星>,则将其描述中的X改为5;若你的主将没有技能<观星>,则你拥有技能<观星>',
						tianfu: '天覆',
						tianfu_info: '主将技,阵法技,若当前回合角色与你处于同一队列,你拥有技能<看破>',
						ziliang: '资粮',
						ziliang_info: '副将技,当与你势力相同的一名角色受到伤害后,你可以将一张<田>交给该角色',
						gzjixi: '急袭',
						gzjixi_info: '主将技,此武将牌减少半个阴阳鱼;你可以将一张<田>当【顺手牵羊】使用',
						huyuan: '护援',
						huyuan_info: '结束阶段开始时,你可以将一张装备牌置入一名角色的装备区,然后你可以弃置该角色距离为1的一名角色的一张牌',
						heyi: '鹤翼',
						heyi_info: '阵法技,与你处于同一队列的其他角色防御距离+1',
						gz_shibing1wei: '魏兵',
						gz_shibing2wei: '魏兵',
						gz_shibing1shu: '蜀兵',
						gz_shibing2shu: '蜀兵',
						gz_shibing1wu: '吴兵',
						gz_shibing2wu: '吴兵',
						gz_shibing1qun: '群兵',
						gz_shibing2qun: '群兵',
						gzduanchang: '断肠',
						gzduanchang_info: '锁定技,当你死亡时,你令击杀你的角色失去一张武将牌的所有技能',
						gzweimu: '帷幕',
						gzweimu_info: '锁定技,当你成为黑色锦囊牌的目标时,则取消之',
						gzqianxun: '谦逊',
						gzqianxun_info: '锁定技,当你成为顺手牵羊或乐不思蜀的目标时,则取消之',
						gzkongcheng: '空城',
						gzkongcheng_info: '锁定技,当你成为【杀】或【决斗】的目标时,若你没有手牌,则取消之',
						gzxiaoji: '枭姬',
						gzxiaoji_info: '当你失去装备区里的牌后,你可以摸两张牌',
						gzrende: '仁德',
						gzrende_info: '出牌阶段,你可以将任意张手牌交给其他角色,然后若你于此阶段内给出第三张<仁德>牌时,你回复1点体力',
						gzzhiheng: '制衡',
						gzzhiheng_info: '出牌阶段限一次,你可以弃置至多X张牌(X为你的体力上限),然后摸等量的牌',
						huoshui: '祸水',
						huoshui_info: '出牌阶段,你可以明置此武将牌;你的回合内,若此武将牌处于明置状态,其他角色不能明置其武将牌',
						qingcheng: '倾城',
						qingcheng_info: '出牌阶段,你可以弃置一张装备牌并选择一名两张武将牌均明置的其他角色,你暗置其一张武将牌',
						duoshi: '度势',
						duoshi_info: '出牌阶段限四次,你可以将一张红色手牌当【以逸待劳】使用',
						gzxiaoguo: '骁果',
						gzxiaoguo_info: '其他角色的结束阶段开始时,你可以弃置一张基本牌,令该角色选择一项:1.弃置一张装备牌;2.受到你对其造成的1点伤害',
						gzduanliang: '断粮',
						gzduanliang_info: '你可以将一张黑色基本牌或黑色装备牌当【兵粮寸断】使用;你可以对距离为2的角色使用【兵粮寸断】',
					},
					junList: ['liubei', 'zhangjiao'],
					guozhanPile: [
						['spade', 7, 'sha'],
						['spade', 8, 'sha'],
						['spade', 8, 'sha'],
						['spade', 9, 'sha'],
						['spade', 9, 'sha'],
						['spade', 10, 'sha'],
						['spade', 10, 'sha'],
						['club', 2, 'sha'],
						['club', 3, 'sha'],
						['club', 4, 'sha'],
						['club', 5, 'sha'],
						['club', 6, 'sha'],
						['club', 7, 'sha'],
						['club', 8, 'sha'],
						['club', 8, 'sha'],
						['club', 9, 'sha'],
						['club', 9, 'sha'],
						['club', 10, 'sha'],
						['club', 10, 'sha'],
						['club', 11, 'sha'],
						['club', 11, 'sha'],
						['heart', 10, 'sha'],
						['heart', 10, 'sha'],
						['heart', 11, 'sha'],
						['diamond', 6, 'sha'],
						['diamond', 7, 'sha'],
						['diamond', 8, 'sha'],
						['diamond', 9, 'sha'],
						['diamond', 10, 'sha'],
						['diamond', 13, 'sha'],
						['heart', 2, 'shan'],
						['heart', 2, 'shan'],
						['heart', 13, 'shan'],
						['diamond', 2, 'shan'],
						['diamond', 2, 'shan'],
						['diamond', 3, 'shan'],
						['diamond', 4, 'shan'],
						['diamond', 5, 'shan'],
						['diamond', 6, 'shan'],
						['diamond', 7, 'shan'],
						['diamond', 8, 'shan'],
						['diamond', 9, 'shan'],
						['diamond', 10, 'shan'],
						['diamond', 11, 'shan'],
						['diamond', 11, 'shan'],
						['heart', 3, 'tao'],
						['heart', 4, 'tao'],
						['heart', 6, 'tao'],
						['heart', 7, 'tao'],
						['heart', 8, 'tao'],
						['heart', 9, 'tao'],
						['heart', 12, 'tao'],
						['diamond', 12, 'tao'],

						['spade', 2, 'bagua'],
						['club', 2, 'bagua'],
						['spade', 5, 'jueying'],
						['club', 5, 'dilu'],
						['heart', 13, 'zhuahuang'],
						['heart', 5, 'chitu'],
						['spade', 13, 'dawan'],
						['diamond', 13, 'zixin'],
						['club', 1, 'zhuge'],
						['diamond', 1, 'zhuge'],
						['spade', 2, 'feilongduofeng'],
						['spade', 6, 'qinggang'],
						['spade', 5, 'qinglong'],
						['spade', 12, 'zhangba'],
						['diamond', 5, 'guanshi'],
						['diamond', 12, 'fangtian'],
						['heart', 5, 'qilin'],

						['heart', 3, 'wugu'],
						['heart', 4, 'wugu'],
						['heart', 1, 'taoyuan'],
						['spade', 7, 'nanman'],
						['spade', 13, 'nanman'],
						['club', 7, 'nanman'],
						['heart', 1, 'wanjian'],
						['spade', 1, 'juedou'],
						['club', 1, 'juedou'],
						['diamond', 1, 'juedou'],
						['heart', 7, 'wuzhong'],
						['heart', 8, 'wuzhong'],
						['heart', 9, 'wuzhong'],
						['heart', 11, 'wuzhong'],
						['spade', 3, 'shunshou'],
						['spade', 4, 'shunshou'],
						['spade', 11, 'shunshou'],
						['diamond', 3, 'shunshou'],
						['diamond', 4, 'shunshou'],
						['spade', 3, 'guohe'],
						['spade', 4, 'guohe'],
						['spade', 12, 'guohe'],
						['club', 3, 'guohe'],
						['club', 4, 'guohe'],
						['heart', 12, 'guohe'],
						['club', 12, 'jiedao'],
						['club', 13, 'jiedao'],
						['spade', 11, 'wuxie'],
						['club', 12, 'wuxie'],
						['club', 13, 'wuxie'],
						['spade', 6, 'lebu'],
						['club', 6, 'lebu'],
						['heart', 6, 'lebu'],
						['spade', 1, 'shandian', 'thunder'],
						['spade', 2, 'hanbing'],
						['club', 2, 'renwang'],
						['heart', 12, 'shandian', 'thunder'],
						['diamond', 12, 'wuxie'],

						['heart', 4, 'sha', 'fire'],
						['heart', 7, 'sha', 'fire'],
						['heart', 10, 'sha', 'fire'],
						['diamond', 4, 'sha', 'fire'],
						['diamond', 5, 'sha', 'fire'],
						['spade', 4, 'sha', 'thunder'],
						['spade', 5, 'sha', 'thunder'],
						['spade', 6, 'sha', 'thunder'],
						['spade', 7, 'sha', 'thunder'],
						['spade', 8, 'sha', 'thunder'],
						['club', 5, 'sha', 'thunder'],
						['club', 6, 'sha', 'thunder'],
						['club', 7, 'sha', 'thunder'],
						['club', 8, 'sha', 'thunder'],
						['heart', 8, 'shan'],
						['heart', 9, 'shan'],
						['heart', 11, 'shan'],
						['heart', 12, 'shan'],
						['diamond', 6, 'shan'],
						['diamond', 7, 'shan'],
						['diamond', 8, 'shan'],
						['diamond', 10, 'shan'],
						['diamond', 11, 'shan'],
						['heart', 5, 'tao'],
						['heart', 6, 'tao'],
						['diamond', 2, 'tao'],
						['diamond', 3, 'tao'],
						['diamond', 9, 'jiu'],
						['spade', 3, 'jiu'],
						['spade', 9, 'jiu'],
						['club', 3, 'jiu'],
						['club', 9, 'jiu'],

						['diamond', 13, 'hualiu'],
						['club', 1, 'baiyin'],
						['spade', 2, 'tengjia', 'fire'],
						['club', 2, 'tengjia', 'fire'],
						['spade', 1, 'guding'],
						['diamond', 1, 'zhuque', 'fire'],

						['heart', 2, 'huogong', 'fire'],
						['heart', 3, 'huogong', 'fire'],
						['diamond', 12, 'huogong', 'fire'],
						['spade', 11, 'tiesuo'],
						['spade', 12, 'tiesuo'],
						['club', 10, 'tiesuo'],
						['club', 11, 'tiesuo'],
						['club', 12, 'tiesuo'],
						['club', 13, 'tiesuo'],
						['heart', 13, 'wuxie'],
						['heart', 13, 'wuxie'],
						['spade', 13, 'wuxie'],
						['spade', 10, 'bingliang'],
						['club', 4, 'bingliang'],

						['heart', 9, 'yuanjiao'],
						['club', 3, 'zhibi'],
						['club', 4, 'zhibi'],
						['diamond', 4, 'yiyi'],
						['heart', 11, 'yiyi'],
						['diamond', 6, 'wuliu'],
						['diamond', 12, 'sanjian'],
						['heart', 3, 'jingfanma'],
						['spade', 4, 'shunshou'],
						['spade', 12, 'guohe'],
						['spade', 11, 'wuxie'],
						['spade', 3, 'huoshaolianying', 'fire'],
						['club', 11, 'huoshaolianying', 'fire'],
						['heart', 12, 'huoshaolianying', 'fire'],
						['club', 2, 'huxinjing'],
						['heart', 2, 'diaohulishan'],
						['diamond', 10, 'diaohulishan'],
						['heart', 1, 'lianjunshengyan'],
						['club', 3, 'chiling'],
						['spade', 12, 'lulitongxin'],
						['club', 10, 'lulitongxin'],
						['club', 12, 'shuiyanqijunx'],
						['heart', 13, 'shuiyanqijunx'],
						['spade', 1, 'xietianzi'],
						['diamond', 1, 'xietianzi'],
						['diamond', 4, 'xietianzi'],
						['club', 1, 'yuxi'],
						['heart', 3, 'taipingyaoshu'],
					],
					element: {
						content: {
							zhulian() {
								player.popup('珠联璧合');
								game.log(player, '发动了【珠联璧合】');
								player.chooseDrawRecover(2, true, '珠联璧合:摸两张牌或回复一点体力');
							},
						},
						player: {
							getModeState() {
								return {
									unseen: this.isUnseen(0),
									unseen2: this.isUnseen(1),
								};
							},
							setModeState(info) {
								if (info.mode.unseen) {
									this.classList.add('unseen');
								}
								if (info.mode.unseen2) {
									this.classList.add('unseen2');
								}
								if (!info.name) {
									return;
								}

								this.init(info.name1, info.name2, false);
								this.name1 = info.name1;
								this.name = info.name;
								this.node.name_seat = ui.create.div('.name.name_seat', get.verticalStr(lib.translate[this.name].slice(0, 3)), this);
								if (info.identityShown) {
									this.setIdentity(info.identity);
									this.node.identity.classList.remove('guessing');
								} else if (this != game.me) {
									this.node.identity.firstChild.innerHTML = '';
									this.node.identity.dataset.color = 'unknown';
									this.node.identity.classList.add('guessing');
								}
							},
							dieAfter(source) {
								this.showCharacter(2);
								if (get.is.jun(this.name1)) {
									const yelist = [];

									for (const i of game.players) {
										if (i.identity == this.identity) {
											yelist.push(i);
										}
									}

									game.broadcastAll(function (list) {
										for (const i of list) {
											i.identity = 'ye';
											i.setIdentity();
										}
									}, yelist);
									_status.yeidentity.add(this.identity);
								}
								if (source && source.identity != 'unknown') {
									if (this.identity == 'ye') {
										source.draw(1);
									} else if (this.identity != source.identity) {
										source.draw(get.population(this.identity) + 1);
									} else {
										source.discard(source.getCards('he'));
									}
								}
								game.tryResult();
							},
							viewCharacter(target, num) {
								if (num != 0 && num != 1) {
									num = 2;
								}
								if (!target.isUnseen(num)) {
									return;
								}
								const next = game.createEvent('viewCharacter');
								next.player = this;
								next.target = target;
								next.num = num;
								next.setContent(function () {
									let content,
										str = get.translation(target) + '的';
									if (event.num == 0 || !target.isUnseen(1)) {
										content = [str + '主将', [[target.name1], 'character']];
										game.log(player, '观看了', target, '的主将');
									} else if (event.num == 1 || !target.isUnseen(0)) {
										content = [str + '副将', [[target.name2], 'character']];
										game.log(player, '观看了', target, '的副将');
									} else {
										content = [str + '主将和副将', [[target.name1, target.name2], 'character']];
										game.log(player, '观看了', target, '的主将和副将');
									}
									player.chooseControl('ok').set('dialog', content);
								});
							},
							checkViceSkill(skill, disable) {
								if (game.expandSkills(lib.character[this.name2][3].slice(0)).includes(skill)) {
									return true;
								} else {
									if (disable !== false) {
										this.awakenSkill(skill);
									}
									return false;
								}
							},
							checkMainSkill(skill, disable) {
								if (game.expandSkills(lib.character[this.name1][3].slice(0)).includes(skill)) {
									return true;
								} else {
									if (disable !== false) {
										this.awakenSkill(skill);
									}
									return false;
								}
							},
							removeMaxHp() {
								if (game.online) {
									return;
								}
								if (typeof this.singleHp == 'boolean') {
									if (this.singleHp) {
										this.singleHp = false;
									} else {
										this.singleHp = true;
										this.maxHp--;
									}
								} else {
									this.maxHp--;
								}
							},
							hideCharacter(num, log) {
								if (this.isUnseen(2)) {
									return;
								}
								game.addVideo('hideCharacter', this, num);
								let skills;
								switch (num) {
									case 0:
										if (log !== false) {
											game.log(this, '暗置了主将' + get.translation(this.name1));
										}
										skills = lib.character[this.name][3];
										this.name = this.name2;
										this.sex = lib.character[this.name2][0];
										this.classList.add('unseen');
										break;
									case 1:
										if (log !== false) {
											game.log(this, '暗置了副将' + get.translation(this.name2));
										}
										skills = lib.character[this.name2][3];
										this.classList.add('unseen2');
										break;
								}
								game.broadcast(
									function (player, name, sex, num, skills) {
										player.name = name;
										player.sex = sex;
										switch (num) {
											case 0:
												player.classList.add('unseen');
												break;
											case 1:
												player.classList.add('unseen2');
												break;
										}

										for (const i of skills) {
											if (!player.skills.includes(i)) {
												continue;
											}
											player.hiddenSkills.add(i);
											player.skills.remove(i);
										}
									},
									this,
									this.name,
									this.sex,
									num,
									skills,
								);

								for (const i of skills) {
									if (!this.skills.includes(i)) {
										continue;
									}
									this.hiddenSkills.add(i);
									const info = get.info(i);
									if (info.ondisable && info.onremove) {
										info.onremove(this);
									}
									this.skills.remove(i);
								}

								this.checkConflict();
							},
							removeCharacter(num) {
								const name = this['name' + (num + 1)];
								const info = lib.character[name];
								if (!info) {
									return;
								}
								const to = 'gz_shibing' + (info[0] == 'male' ? 1 : 2) + info[1];
								game.log(this, '移除了' + (num ? '副将' : '主将'), '#b' + name);
								this.reinit(name, to, false);
								this.showCharacter(num, false);
							},
							hasMainCharacter() {
								return this.name1.indexOf('gz_shibing') != 0;
							},
							hasViceCharacter() {
								return this.name2.indexOf('gz_shibing') != 0;
							},
							showCharacter(num, log) {
								if (num == 0 && !this.isUnseen(0)) {
									return;
								}
								if (num == 1 && !this.isUnseen(1)) {
									return;
								}
								if (!this.isUnseen(2)) {
									return;
								}
								game.addVideo('showCharacter', this, num);
								if (this.identity == 'unknown') {
									this.group = lib.character[this.name1][1];
									if (get.is.jun(this) && this.isAlive()) {
										this.identity = this.group;
										const yelist = [];

										for (const i of game.players) {
											if (i.identity == 'ye' && i._group == this.group) {
												yelist.push(i);
											}
										}

										game.broadcastAll(
											function (list, group) {
												for (const i of list) {
													i.identity = group;
													i.setIdentity();
												}
											},
											yelist,
											this.group,
										);
									} else if (this.wontYe()) {
										this.identity = this.group;
									} else {
										this.identity = 'ye';
									}
									this.setIdentity(this.identity);
									this.ai.shown = 1;
									this.node.identity.classList.remove('guessing');

									if (_status.clickingidentity && _status.clickingidentity[0] == this) {
										for (let i = 0; i < _status.clickingidentity[1].length; i++) {
											_status.clickingidentity[1][i].delete();
											_status.clickingidentity[1][i].style.transform = '';
										}
										delete _status.clickingidentity;
									}
									game.addVideo('setIdentity', this, this.identity);
								}
								let skills;
								switch (num) {
									case 0:
										if (log !== false) {
											game.log(this, '展示了主将', '#b' + this.name1);
										}
										this.name = this.name1;
										skills = lib.character[this.name][3];
										this.sex = lib.character[this.name][0];
										this.classList.remove('unseen');
										break;
									case 1:
										if (log !== false) {
											game.log(this, '展示了副将', '#b' + this.name2);
										}
										skills = lib.character[this.name2][3];
										if (this.sex == 'unknown') {
											this.sex = lib.character[this.name2][0];
										}
										if (this.name.indexOf('unknown') == 0) {
											this.name = this.name2;
										}
										this.classList.remove('unseen2');
										break;
									case 2:
										if (log !== false) {
											game.log(this, '展示了主将', '#b' + this.name1, '、副将', '#b' + this.name2);
										}
										this.name = this.name1;
										skills = lib.character[this.name][3].concat(lib.character[this.name2][3]);
										this.sex = lib.character[this.name][0];
										this.classList.remove('unseen');
										this.classList.remove('unseen2');
										break;
								}
								game.broadcast(
									function (player, name, sex, num, identity) {
										player.identityShown = true;
										player.name = name;
										player.sex = sex;
										player.node.identity.classList.remove('guessing');
										switch (num) {
											case 0:
												player.classList.remove('unseen');
												break;
											case 1:
												player.classList.remove('unseen2');
												break;
											case 2:
												player.classList.remove('unseen');
												player.classList.remove('unseen2');
												break;
										}
										player.ai.shown = 1;
										player.identity = identity;
										player.setIdentity(identity);
										if (_status.clickingidentity && _status.clickingidentity[0] == player) {
											for (let i = 0; i < _status.clickingidentity[1].length; i++) {
												_status.clickingidentity[1][i].delete();
												_status.clickingidentity[1][i].style.transform = '';
											}
											delete _status.clickingidentity;
										}
									},
									this,
									this.name,
									this.sex,
									num,
									this.identity,
								);
								this.identityShown = true;
								const initdraw = parseInt(get.config('initshow_draw'));
								if (!_status.initshown && !_status.overing && initdraw && this.isAlive() && _status.mode != 'mingjiang') {
									this.popup('首亮');
									game.log(this, '首先明置武将,得到奖励');
									game.log(this, '摸了' + get.cnNumber(initdraw) + '张牌');
									this.draw(initdraw).log = false;
									_status.initshown = true;
								}

								for (const i of skills) {
									this.hiddenSkills.remove(i);
									this.addSkill(i);
								}

								this.checkConflict();
								if (!this.isUnseen(2) && !this._mingzhied) {
									this._mingzhied = true;
									if (this.singleHp) {
										this.doubleDraw();
									}
									if (this.perfectPair()) {
										const next = game.createEvent('guozhanDraw');
										next.player = this;
										next.setContent('zhulian');
									}
								}
							},
							wontYe() {
								const group = lib.character[this.name1][1];
								if (_status.yeidentity && _status.yeidentity.includes(group)) {
									return false;
								}
								if (get.zhu(this, null, true)) {
									return true;
								}
								return get.totalPopulation(group) + 1 <= get.population() / 2;
							},
							perfectPair() {
								if (_status.connectMode) {
									if (!lib.configOL.zhulian) {
										return false;
									}
								} else {
									if (!get.config('zhulian')) {
										return false;
									}
								}
								let name1 = this.name1;
								let name2 = this.name2;
								if (name1.indexOf('gz_shibing') == 0) {
									return false;
								}
								if (name2.indexOf('gz_shibing') == 0) {
									return false;
								}
								if (lib.character[name1][1] != lib.character[name2][1]) {
									return false;
								}
								if (get.is.jun(this.name1)) {
									return true;
								}
								const list = ['re', 'diy', 'sp', 'jsp', 'shen', 'jg', 'xin', 'old', 'gz'];

								for (const i of list) {
									if (name1.indexOf(i + '_') == 0) {
										name1 = name1.slice(i.length + 1);
									}
									if (name2.indexOf(i + '_') == 0) {
										name2 = name2.slice(i.length + 1);
									}
								}

								if (lib.perfectPair[name1] && lib.perfectPair[name1].includes(name2)) {
									return true;
								}
								if (lib.perfectPair[name2] && lib.perfectPair[name2].includes(name1)) {
									return true;
								}
								return false;
							},
							siege(player) {
								if (this.identity == 'unknown' || this.identity == 'ye' || this.hasSkill('undist')) {
									return false;
								}
								if (!player) {
									const next = this.next;
									if (next && next.sieged()) {
										return true;
									}
									const previous = this.previous;
									if (previous && previous.sieged()) {
										return true;
									}
									return false;
								} else {
									return player.sieged() && (player.next == this || player.previous == this);
								}
							},
							sieged(player) {
								if (this.identity == 'unknown') {
									return false;
								}
								if (player) {
									return player.siege(this);
								} else {
									const next = this.next;
									const previous = this.previous;
									if (next && previous && next != previous) {
										if (next.identity == 'unknown' || next.identity == 'ye' || next.identity == this.identity) {
											return false;
										}
										return next.identity == previous.identity;
									}
									return false;
								}
							},
							inline() {
								if (this.identity == 'unknown' || this.identity == 'ye' || this.hasSkill('undist')) {
									return false;
								}
								let next = this,
									previous = this;
								const list = [];
								for (let i = 0; next || previous; i++) {
									if (next) {
										next = next.next;
										if (next.identity != this.identity || next == this) {
											next = null;
										} else {
											list.add(next);
										}
									}
									if (previous) {
										previous = previous.previous;
										if (previous.identity != this.identity || previous == this) {
											previous = null;
										} else {
											list.add(previous);
										}
									}
								}
								if (!list.length) {
									return false;
								}

								for (const i of arguments) {
									if (!list.includes(i) && i != this) {
										return false;
									}
								}

								return true;
							},
							isMajor() {
								if (!lib.group.includes(this.identity)) {
									return false;
								}
								const list = [];

								for (const i of game.players) {
									if (i.getEquip('yuxi')) {
										if (i.identity != 'ye' && i.identity != 'unknown') {
											list.add(i.identity);
										}
									}
								}

								if (list.length) {
									return list.includes(this.identity);
								}
								let max = 0;

								for (const i of lib.group) {
									max = Math.max(max, get.population(i));
								}

								if (max <= 1) {
									return false;
								}
								return get.population(this.identity) == max;
							},
							isNotMajor() {
								for (const i of game.players) {
									if (i.isMajor()) {
										return !this.isMajor();
									}
								}

								return false;
							},
							isMinor() {
								if (this.identity == 'unknown') {
									return false;
								}
								if (!lib.group.includes(this.identity)) {
									return true;
								}
								let min = game.players.length;
								if (
									game.hasPlayer(function (current) {
										return current.identity == 'ye';
									})
								) {
									min = 1;
								} else {
									for (const i of lib.group) {
										const num = get.population(i);
										if (num > 0) {
											min = Math.min(min, num);
										}
									}
								}
								return get.population(this.identity) == min;
							},
							logAi(targets, card) {
								if (this.ai.shown == 1 || this.isMad()) {
									return;
								}
								if (typeof targets == 'number') {
									this.ai.shown += targets;
								} else {
									let effect = 0,
										c,
										shown;
									const info = get.info(card);
									if (info.ai && info.ai.expose) {
										if (_status.event.name == '_wuxie') {
											if (_status.event.source && _status.event.source.ai.shown) {
												this.ai.shown += 0.2;
											}
										} else {
											this.ai.shown += info.ai.expose;
										}
									}
									if (targets.length) {
										for (const i of targets) {
											shown = Math.abs(i.ai.shown);
											if (shown < 0.2 || i.identity == 'nei') {
												c = 0;
											} else if (shown < 0.4) {
												c = 0.5;
											} else if (shown < 0.6) {
												c = 0.8;
											} else {
												c = 1;
											}
											effect += get.effect(i, card, this) * c;
										}
									}
									if (effect > 0) {
										if (effect < 1) {
											c = 0.5;
										} else {
											c = 1;
										}
										if (targets.length == 1 && targets[0] == this) {
										} else if (targets.length == 1) {
											this.ai.shown += 0.2 * c;
										} else {
											this.ai.shown += 0.1 * c;
										}
									}
								}
								if (this.ai.shown > 0.95) {
									this.ai.shown = 0.95;
								}
								if (this.ai.shown < -0.5) {
									this.ai.shown = -0.5;
								}
							},
						},
					},
					get: {
						realAttitude(from, toidentity, difficulty) {
							if (from.identity == toidentity && toidentity != 'ye') {
								return 4 + difficulty;
							}
							if (from.identity == 'unknown' && lib.character[from.name1][1] == toidentity) {
								if (from.wontYe()) {
									return 4 + difficulty;
								}
							}
							const groups = [];

							for (const i of lib.group) {
								groups.push(get.population(i));
							}

							const max = Math.max.apply(this, groups);
							if (max <= 1) {
								return -3;
							}
							let from_p = get.population(from.identity != 'unknown' ? from.identity : lib.character[from.name1][1]);
							let to_p = get.population(toidentity);
							if (from.identity == 'ye') {
								from_p = 1;
							}
							if (toidentity == 'ye') {
								to_p = 1;
							}

							if (to_p == max) {
								return -5;
							}
							if (from_p == max) {
								return -2 - get.population(toidentity);
							}
							if (max >= game.players.length / 2) {
								if (to_p <= from_p) {
									return 0.5;
								}
								return 0;
							}
							if (to_p < max - 1) {
								return 0;
							}
							return -0.5;
						},
						rawAttitude(from, to) {
							if (to.identity == 'unknown' && game.players.length == 2) {
								return -5;
							}
							if (_status.currentPhase == from && from.ai.tempIgnore && from.ai.tempIgnore.includes(to) && to.identity == 'unknown' && (!from.storage.zhibi || !from.storage.zhibi.includes(to))) {
								return 0;
							}
							let difficulty = 0;
							if (to == game.me) {
								difficulty = (2 - get.difficulty()) * 1.5;
							}
							if (from == to) {
								return 5 + difficulty;
							}
							if (from.identity == to.identity && from.identity != 'unknown' && from.identity != 'ye') {
								return 5 + difficulty;
							}
							if (from.identity == 'unknown' && lib.character[from.name1][1] == to.identity) {
								if (from.wontYe()) {
									return 4 + difficulty;
								}
							}
							let toidentity = to.identity;
							if (toidentity == 'unknown') {
								toidentity = lib.character[to.name1][1];
								if (get.population(toidentity) >= get.population() - 2) {
									toidentity = 'ye';
								}
							}
							const att = get.realAttitude(from, toidentity, difficulty);
							if (from.storage.zhibi && from.storage.zhibi.includes(to)) {
								return att;
							}
							if (to.ai.shown >= 0.5) {
								return att * to.ai.shown;
							}

							let nshown = 0;

							for (const i of game.players) {
								if (i != from && i.identity == 'unknown') {
									nshown++;
								}
							}

							if (to.ai.shown == 0) {
								if (nshown >= game.players.length / 2 && att >= 0) {
									return 0;
								}
								return Math.min(0, Math.random() - 0.5) + difficulty;
							}
							if (to.ai.shown >= 0.2) {
								if (att > 2) {
									return Math.max(0, Math.random() - 0.5) + difficulty;
								}
								if (att >= 0) {
									return 0;
								}
								return Math.min(0, Math.random() - 0.7) + difficulty;
							}
							if (att > 2) {
								return Math.max(0, Math.random() - 0.7) + difficulty;
							}
							if (att >= 0) {
								return Math.min(0, Math.random() - 0.3) + difficulty;
							}
							return Math.min(0, Math.random() - 0.5) + difficulty;
						},
					},
				},
				{
					translate: '国战排位',
					extension: '龙舟国战模式',
					connect: {
						update(config, map) {
							if (config.connect_onlyguozhan) {
								map.connect_junzhu.show();
							} else {
								map.connect_junzhu.hide();
							}
						},
						connect_player_number: {
							name: '游戏人数',
							init: '8',
							item: {
								3: '三人',
								4: '四人',
								5: '五人',
								6: '六人',
								7: '七人',
								8: '八人',
							},
							forced: true,
							restart: true,
						},
						connect_initshow_draw: {
							name: '首亮摸牌',
							item: {
								0: '关闭',
								1: '一张',
								2: '两张',
								3: '三张',
							},
							init: '2',
							forced: true,
							intro: '第一个明置身份牌的角色可获得摸牌奖励',
						},
						connect_zhulian: {
							name: '珠联璧合',
							init: true,

							intro: '主将和副将都明置后,若为特定组合,可摸两张牌或回复一点体力',
						},
						connect_guozhanpile: {
							name: '使用国战牌堆',
							init: true,
							forced: true,
							restart: true,
						},
						connect_onlyguozhan: {
							name: '使用国战武将',
							init: true,
							forced: true,
							restart: true,
							intro: '开启武将技能将替换为国战版本并禁用非国战武将',
						},
						connect_junzhu: {
							name: '替换君主',
							init: true,

							restart: true,
							intro: '开启后将使用国战君主替换原武将牌',
						},
						connect_ban_weak: {
							name: '屏蔽弱将',
							init: false,
							restart: true,
						},
						connect_ban_strong: {
							name: '屏蔽强将',
							init: false,
							restart: true,
						},
					},
					config: {
						update(config, map) {
							if (config.onlyguozhan) {
								map.junzhu.show();
							} else {
								map.junzhu.hide();
							}
						},
						guozhan_mode: {
							name: '游戏模式',
							init: 'normal',
							item: {
								normal: '标准',
								mingjiang: '明将',
							},
							forced: true,
						},
						player_number: {
							name: '游戏人数',
							init: '8',
							item: {
								3: '三人',
								4: '四人',
								5: '五人',
								6: '六人',
								7: '七人',
								8: '八人',
							},
							forced: true,
							restart: true,
						},
						initshow_draw: {
							name: '首亮摸牌',
							item: {
								0: '关闭',
								1: '一张',
								2: '两张',
								3: '三张',
							},
							init: '2',
							forced: true,
							intro: '第一个明置身份牌的角色可获得摸牌奖励',
						},
						zhulian: {
							name: '珠联璧合',
							init: true,

							intro: '主将和副将都明置后,若为特定组合,可摸两张牌或回复一点体力',
						},
						guozhanpile: {
							name: '使用国战牌堆',
							init: true,
							forced: true,
							restart: true,
						},
						onlyguozhan: {
							name: '使用国战武将',
							init: true,
							forced: true,
							restart: true,
							intro: '开启武将技能将替换为国战版本并禁用非国战武将',
						},
						junzhu: {
							name: '替换君主',
							init: true,

							restart: true,
							intro: '开启后将使用国战君主替换原武将牌',
						},
						double_hp: {
							name: '双将体力上限',
							init: 'pingjun',
							item: {
								hejiansan: '和减三',
								pingjun: '平均值',
								zuidazhi: '最大值',
								zuixiaozhi: '最小值',
								zonghe: '相加',
							},
							restart: true,
						},
						ban_weak: {
							name: '屏蔽弱将',
							init: true,
							restart: true,
						},
						ban_strong: {
							name: '屏蔽强将',
							init: false,
							restart: true,
						},
						free_choose: {
							name: '自由选将',
							init: true,
							onclick(bool) {
								game.saveConfig('free_choose', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								if (!ui.cheat2 && get.config('free_choose')) {
									ui.create.cheat2();
								} else if (ui.cheat2 && !get.config('free_choose')) {
									ui.cheat2.close();
									delete ui.cheat2;
								}
							},
						},
						onlyguozhanexpand: {
							name: '默认展开自由选将',
							init: false,
							restart: true,
							intro: '开启后自由选将对话框将默认显示全部武将',
						},
						change_identity: {
							name: '自由选择座位',
							init: true,
							onclick(bool) {
								game.saveConfig('change_identity', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								let dialog;
								if (ui.cheat2 && ui.cheat2.backup) {
									dialog = ui.cheat2.backup;
								} else {
									dialog = _status.event.dialog;
								}
								if (!_status.brawl || !_status.brawl.noAddSetting) {
									if (!dialog.querySelector('table') && get.config('change_identity')) {
										_status.event.parent.addSetting(dialog);
									} else {
										_status.event.parent.removeSetting(dialog);
									}
								}
								ui.update();
							},
						},
						change_choice: {
							name: '开启换将卡',
							init: true,
							onclick(bool) {
								game.saveConfig('change_choice', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								if (!ui.cheat && get.config('change_choice')) {
									ui.create.cheat();
								} else if (ui.cheat && !get.config('change_choice')) {
									ui.cheat.close();
									delete ui.cheat;
								}
							},
						},
						change_card: {
							name: '开启手气卡',
							init: 'disabled',
							item: {
								disabled: '禁用',
								once: '一次',
								twice: '两次',
								unlimited: '无限',
							},
						},
						continue_game: {
							name: '显示再战',
							init: true,
							intro: '游戏结束后可选择用相同的武将再进行一局游戏',
							onclick(bool) {
								game.saveConfig('continue_game', bool, this._link.config.mode);
								if (get.config('continue_game')) {
									if (!ui.continue_game && _status.over && !_status.brawl) {
										ui.continue_game = ui.create.control('再战', game.reloadCurrent);
									}
								} else if (ui.continue_game) {
									ui.continue_game.close();
									delete ui.continue_game;
								}
							},
						},
						dierestart: {
							name: '死亡后显示重来',
							init: true,
							onclick(bool) {
								game.saveConfig('dierestart', bool, this._link.config.mode);
								if (get.config('dierestart')) {
									if (!ui.restart && game.me.isDead() && !_status.connectMode) {
										ui.restart = ui.create.control('restart', game.reload);
									}
								} else if (ui.restart) {
									ui.restart.close();
									delete ui.restart;
								}
							},
						},
						revive: {
							name: '死亡后显示复活',
							init: false,
							onclick(bool) {
								game.saveConfig('revive', bool, this._link.config.mode);
								if (get.config('revive')) {
									if (!ui.revive && game.me.isDead()) {
										ui.revive = ui.create.control('revive', ui.click.dierevive);
									}
								} else if (ui.revive) {
									ui.revive.close();
									delete ui.revive;
								}
							},
						},
						difficulty: {
							name: 'AI对人类态度',
							init: 'normal',
							item: {
								easy: '友好',
								normal: '一般',
								hard: '仇视',
							},
						},
						choice_num: {
							name: '候选武将数',
							init: '7',
							restart: true,
							item: {
								5: '五',
								6: '六',
								7: '七',
								8: '八',
								9: '九',
								10: '十',
								16: '十六',
								20: '二十',
							},
						},
					},
				},
			);

			game.addMode(
				'guozhanpaiweizx',
				{
					startBefore() {
						lib.element.content.gameDraw = function () {
							'step 0';
							if (_status.brawl && _status.brawl.noGameDraw) {
								event.finish();
								return;
							}
							const end = player;
							let numx = num;
							do {
								if (typeof num == 'function') {
									numx = num(player);
								}
								player.directgain(get.cards(numx));
								if (player.singleHp === true && get.mode() != 'guozhan' && get.mode() != 'longzhouguozhan' && get.mode() != 'guozhanpaiweipw' && lib.config.mode != 'guozhanpaiweizx') {
									player.doubleDraw();
								}
								player = player.next;
							} while (player != end);
							event.changeCard = get.config('change_card');
							if (lib.config.mode != 'identity' && lib.config.mode != 'guozhan' && lib.config.mode != 'guozhanpaiweipw' && lib.config.mode != 'guozhanpaiweizx') {
								event.changeCard = 'disabled';
							}
							('step 1');
							if (event.changeCard != 'disabled' && !_status.auto) {
								event.dialog = ui.create.dialog('是否使用手气卡？');
								ui.create.confirm('oc');
								event.custom.replace.confirm = function (bool) {
									_status.event.bool = bool;
									game.resume();
								};
							} else {
								event.finish();
							}
							('step 2');
							if (event.changeCard == 'once') {
								event.changeCard = 'disabled';
							} else if (event.changeCard == 'twice') {
								event.changeCard = 'once';
							} else if (event.changeCard == 'disabled') {
								event.bool = false;
								return;
							}
							_status.imchoosing = true;
							game.pause();
							('step 3');
							_status.imchoosing = false;
							if (event.bool) {
								if (game.changeCoin) {
									game.changeCoin(-3);
								}
								const hs = game.me.getCards('h');
								game.addVideo('lose', game.me, [get.cardsInfo(hs), [], []]);

								for (const i of hs) {
									i.discard(false);
								}

								game.me.directgain(get.cards(hs.length));
								event.goto(2);
							} else {
								event.dialog.close();
								ui.confirm.close();
								event.finish();
							}
						};
						lib.skill._guopaizixuanzhuanhuawenzi = {
							trigger: { global: 'gameDrawEnd' },
							silent: true,
							content() {
								lib.translate.wei = `<img src="${lib.assetURL}extension/龙舟国战模式/weilongkuang.png" width="30" height="30" ">`;
								lib.translate.shu = `<img src="${lib.assetURL}extension/龙舟国战模式/shulongkuang.png" width="30" height="30" ">`;
								lib.translate.wu = `<img src="${lib.assetURL}extension/龙舟国战模式/wulongkuang.png" width="30" height="30" ">`;
								lib.translate.qun = `<img src="${lib.assetURL}extension/龙舟国战模式/qunlongkuang.png" width="30" height="30" ">`;
							},
						};
						const playback = localStorage.getItem(lib.configprefix + 'playback');
						for (const i in lib.characterPack.mode_guozhan) {
							if (!get.config('onlyguozhan') && !playback) {
								if (lib.character[i.slice(3)]) {
									continue;
								}
							}
							lib.character[i] = lib.characterPack.mode_guozhan[i];
							if (!lib.character[i][4]) {
								lib.character[i][4] = [];
							}
							if (!lib.translate[i]) {
								lib.translate[i] = lib.translate[i.slice(3)];
							}
						}
						for (const i in lib.character) {
							if (lib.character[i][1] == 'shen') {
								if (lib.character[i][4] && lib.group.includes(lib.character[i][4][0])) {
									lib.character[i][1] = lib.character[i][4][0];
								} else {
									lib.character[i][1] = 'qun';
								}
							}
						}
					},
					onreinit() {
						const pack = lib.characterPack.mode_guozhan;
						for (const i in pack) {
							if (!lib.configOL.onlyguozhan) {
								if (lib.character[i.slice(3)]) {
									continue;
								}
							}
							lib.character[i] = pack[i];
							if (!lib.character[i][4]) {
								lib.character[i][4] = [];
							}
							if (!lib.translate[i]) {
								lib.translate[i] = lib.translate[i.slice(3)];
							}
						}
					},
					start() {
						'step 0';
						const playback = localStorage.getItem(lib.configprefix + 'playback');
						if (playback) {
							ui.create.me();
							ui.arena.style.display = 'none';
							ui.system.style.display = 'none';
							_status.playback = playback;
							localStorage.removeItem(lib.configprefix + 'playback');
							const store = lib.db.transaction(['video'], 'readwrite').objectStore('video');
							store.get(parseInt(playback)).onsuccess = function (e) {
								if (e.target.result) {
									game.playVideoContent(e.target.result.video);
								} else {
									alert('播放失败:找不到录像');
									game.reload();
								}
							};
							event.finish();
						} else if (_status.connectMode) {
							game.waitForPlayer();
						} else {
							if (get.config('guozhanpile')) {
								lib.card.list = lib.guozhanPile.slice(0);
								game.fixedPile = true;
							}
							game.prepareArena();

							game.showChangeLog();
						}
						if (!_status.connectMode) {
							_status.mode = get.config('guozhan_mode');
							if (_status.brawl && _status.brawl.submode) {
								_status.mode = _status.brawl.submode;
							}
						}
						('step 1');
						if (_status.connectMode) {
							if (lib.configOL.guozhanpile) {
								lib.card.list = lib.guozhanPile.slice(0);
								game.fixedPile = true;
							}
							game.broadcastAll(function (pack) {
								for (const i of game.players) {
									i.node.name.hide();
									i.node.name2.hide();
								}

								lib.characterPack.mode_guozhan = pack;
								for (const i in pack) {
									if (!lib.configOL.onlyguozhan) {
										if (lib.character[i.slice(3)]) {
											continue;
										}
									}
									lib.character[i] = pack[i];
									if (!lib.character[i][4]) {
										lib.character[i][4] = [];
									}
									if (!lib.translate[i]) {
										lib.translate[i] = lib.translate[i.slice(3)];
									}
								}
							}, lib.characterPack.mode_guozhan);
							game.randomMapOL();
						} else {
							for (const i of game.players) {
								i.node.name.hide();
								i.node.name2.hide();
								i.getId();
							}

							if (_status.brawl && _status.brawl.chooseCharacterBefore) {
								_status.brawl.chooseCharacterBefore();
							}
							game.chooseCharacter();
						}
						('step 2');
						if (ui.coin) {
							_status.coinCoeff = get.coinCoeff([game.me.name1, game.me.name2]);
						}
						let player;
						if (_status.cheat_seat) {
							const seat = _status.cheat_seat.link;
							if (seat == 0) {
								player = game.me;
							} else {
								player = game.players[game.players.length - seat];
							}
							if (!player) {
								player = game.me;
							}
							delete _status.cheat_seat;
						} else {
							player = game.players[Math.floor(Math.random() * game.players.length)];
						}
						event.trigger('gameStart');

						game.gameDraw(player);
						game.broadcastAll(function (player) {
							for (const i of game.players) {
								i.name = 'unknown' + get.distance(player, i, 'absolute');
								i.node.name_seat = ui.create.div('.name.name_seat', get.verticalStr(lib.translate[i.name]), i);
							}
						}, player);

						const players = get.players(lib.sort.position);
						const info = [];
						for (let i = 0; i < players.length; i++) {
							info.push({
								name: game.players[i].name,
								translate: lib.translate[game.players[i].name],
								name1: players[i].name1,
								name2: players[i].name2,
							});
						}
						((_status.videoInited = true), game.addVideo('init', null, info));
						if (_status.mode == 'mingjiang') {
							game.showIdentity(true);
						} else {
							for (const i of game.players) {
								i.ai.shown = 0;
							}
						}
						game.phaseLoop(player);
					},
					characterPack: {
						mode_guozhan: {
							gz_shibing1wei: ['male', 'wei', 0, [], ['unseen']],
							gz_shibing2wei: ['female', 'wei', 0, [], ['unseen']],
							gz_shibing1shu: ['male', 'shu', 0, [], ['unseen']],
							gz_shibing2shu: ['female', 'shu', 0, [], ['unseen']],
							gz_shibing1wu: ['male', 'wu', 0, [], ['unseen']],
							gz_shibing2wu: ['female', 'wu', 0, [], ['unseen']],
							gz_shibing1qun: ['male', 'qun', 0, [], ['unseen']],
							gz_shibing2qun: ['female', 'qun', 0, [], ['unseen']],

							gz_caocao: ['male', 'wei', 4, ['jianxiong']],
							gz_simayi: ['male', 'wei', 3, ['fankui', 'guicai']],
							gz_xiahoudun: ['male', 'wei', 4, ['ganglie']],
							gz_zhangliao: ['male', 'wei', 4, ['tuxi']],
							gz_xuchu: ['male', 'wei', 4, ['luoyi']],
							gz_guojia: ['male', 'wei', 3, ['tiandu', 'yiji']],
							gz_zhenji: ['female', 'wei', 3, ['luoshen', 'qingguo']],
							gz_xiahouyuan: ['male', 'wei', 4, ['shensu']],
							gz_zhanghe: ['male', 'wei', 4, ['qiaobian']],
							gz_xuhuang: ['male', 'wei', 4, ['gzduanliang']],
							gz_caoren: ['male', 'wei', 4, ['jushou']],
							gz_dianwei: ['male', 'wei', 4, ['qiangxi']],
							gz_xunyu: ['male', 'wei', 3, ['quhu', 'jieming']],
							gz_caopi: ['male', 'wei', 3, ['xingshang', 'fangzhu']],
							gz_yuejin: ['male', 'wei', 4, ['gzxiaoguo']],

							gz_liubei: ['male', 'shu', 4, ['gzrende']],
							gz_guanyu: ['male', 'shu', 5, ['wusheng']],
							gz_zhangfei: ['male', 'shu', 4, ['paoxiao']],
							gz_zhugeliang: ['male', 'shu', 3, ['guanxing', 'gzkongcheng']],
							gz_zhaoyun: ['male', 'shu', 4, ['longdan']],
							gz_machao: ['male', 'shu', 4, ['mashu', 'tieji']],
							gz_huangyueying: ['female', 'shu', 3, ['jizhi', 'qicai']],
							gz_huangzhong: ['male', 'shu', 4, ['liegong']],
							gz_weiyan: ['male', 'shu', 4, ['kuanggu']],
							gz_pangtong: ['male', 'shu', 3, ['lianhuan', 'oldniepan']],
							gz_sp_zhugeliang: ['male', 'shu', 3, ['huoji', 'bazhen', 'kanpo']],
							gz_liushan: ['male', 'shu', 3, ['xiangle', 'fangquan']],
							gz_menghuo: ['male', 'shu', 4, ['huoshou', 'zaiqi']],
							gz_zhurong: ['female', 'shu', 4, ['juxiang', 'lieren']],
							gz_ganfuren: ['female', 'shu', 3, ['shushen', 'shenzhi']],

							gz_sunquan: ['male', 'wu', 4, ['gzzhiheng']],
							gz_ganning: ['male', 'wu', 4, ['qixi']],
							gz_lvmeng: ['male', 'wu', 4, ['keji']],
							gz_huanggai: ['male', 'wu', 4, ['kurou']],
							gz_zhouyu: ['male', 'wu', 3, ['yingzi', 'fanjian']],
							gz_daqiao: ['female', 'wu', 3, ['guose', 'liuli']],
							gz_luxun: ['male', 'wu', 3, ['gzqianxun', 'duoshi']],
							gz_sunshangxiang: ['female', 'wu', 3, ['jieyin', 'gzxiaoji']],
							gz_sunjian: ['male', 'wu', 4, ['gzyinghun']],
							gz_xiaoqiao: ['female', 'wu', 3, ['tianxiang', 'hongyan']],
							gz_taishici: ['male', 'wu', 4, ['tianyi']],
							gz_zhoutai: ['male', 'wu', 4, ['gzbuqu']],
							gz_re_lusu: ['male', 'wu', 3, ['haoshi', 'dimeng']],
							gz_zhangzhang: ['male', 'wu', 3, ['zhijian', 'guzheng']],
							gz_dingfeng: ['male', 'wu', 4, ['fenxun', 'duanbing']],

							gz_huatuo: ['male', 'qun', 3, ['qingnang', 'jijiu']],
							gz_lvbu: ['male', 'qun', 5, ['wushuang']],
							gz_diaochan: ['female', 'qun', 3, ['lijian', 'biyue']],
							gz_re_yuanshao: ['male', 'qun', 4, ['luanji']],
							gz_yanwen: ['male', 'qun', 4, ['shuangxiong']],
							gz_jiaxu: ['male', 'qun', 3, ['wansha', 'luanwu', 'gzweimu']],
							gz_pangde: ['male', 'qun', 4, ['mashu', 'mengjin']],
							gz_zhangjiao: ['male', 'qun', 3, ['leiji', 'guidao']],
							gz_caiwenji: ['female', 'qun', 3, ['beige', 'gzduanchang']],
							gz_mateng: ['male', 'qun', 4, ['mashu', 'xiongyi']],
							gz_kongrong: ['male', 'qun', 3, ['gzmingshi', 'lirang']],
							gz_jiling: ['male', 'qun', 4, ['shuangren']],
							gz_tianfeng: ['male', 'qun', 3, ['sijian', 'gzsuishi']],
							gz_panfeng: ['male', 'qun', 4, ['kuangfu']],
							gz_zoushi: ['female', 'qun', 3, ['huoshui', 'qingcheng']],

							gz_dengai: ['male', 'wei', 4, ['tuntian', 'ziliang', 'gzjixi']],
							gz_caohong: ['male', 'wei', 4, ['huyuan', 'heyi']],
							gz_jiangfei: ['male', 'shu', 3, ['shengxi', 'gzshoucheng']],
							gz_jiangwei: ['male', 'shu', 4, ['tiaoxin', 'yizhi', 'tianfu']],
							gz_xusheng: ['male', 'wu', 4, ['yicheng']],
							gz_jiangqing: ['male', 'wu', 4, ['gzshangyi', 'niaoxiang']],
							gz_hetaihou: ['female', 'qun', 3, ['zhendu', 'qiluan']],

							gz_re_lidian: ['male', 'wei', 3, ['xunxun', 'wangxi']],
							gz_zangba: ['male', 'wei', 4, ['hengjiang']],
							gz_madai: ['male', 'shu', 4, ['mashu', 'gzqianxi']],
							gz_mifuren: ['female', 'shu', 3, ['gzguixiu', 'gzcunsi']],
							gz_sunce: ['male', 'wu', 4, ['jiang', 'yingyang', 'hunshang']],
							gz_chendong: ['male', 'wu', 4, ['duanxie', 'fenming']],
							gz_sp_dongzhuo: ['male', 'qun', 4, ['hengzheng', 'baoling']],
							gz_zhangren: ['male', 'qun', 4, ['chuanxin', 'fengshi']],

							gz_jun_liubei: ['male', 'shu', 4, ['zhangwu', 'jizhao', 'shouyue', 'wuhujiangdaqi']],
							gz_jun_zhangjiao: ['male', 'qun', 4, ['wuxin', 'hongfa', 'wendao', 'huangjintianbingfu']],
						},
					},
					skill: {
						gzsuishi: {
							audio: 'suishi',
							trigger: { global: 'dying' },
							forced: true,
							_priority: 6.5,
							check() {
								return false;
							},
							filter(event, player) {
								return event.player != player && event.parent.name == 'damage' && event.parent.source && event.parent.source.isFriendsOf(player);
							},
							content() {
								player.draw();
							},
							group: 'gzsuishi2',
						},
						gzsuishi2: {
							audio: 'suishi',
							trigger: { global: 'dieAfter' },
							forced: true,
							filter(event, player) {
								return event.player.isFriendsOf(player);
							},
							content() {
								player.loseHp();
							},
						},
						_hongfa2: {
							trigger: { player: 'chooseToRespondBegin' },
							forced: true,
							filter(event, player) {
								if (event.responded) {
									return false;
								}
								if (!event.filterCard({ name: 'sha' })) {
									return false;
								}
								const zhu = get.zhu(player, 'hongfa');
								if (zhu && zhu.storage.huangjintianbingfu && zhu.storage.huangjintianbingfu.length) {
									return true;
								}
								return false;
							},
							content() {
								'step 0';
								var zhu = get.zhu(player, 'hongfa');
								player
									.chooseCardButton(get.prompt('huangjintianbingfu'), zhu.storage.huangjintianbingfu)
									.set('ai', function () {
										if (_status.event.goon) {
											return 1;
										}
										return 0;
									})
									.set('goon', player.countCards('h', 'sha') == 0);
								('step 1');
								if (result.bool) {
									const card = result.links[0];
									trigger.untrigger();
									trigger.responded = true;
									trigger.result = { bool: true, card: { name: 'sha' }, cards: [card] };
									var zhu = get.zhu(player, 'hongfa');
									zhu.storage.huangjintianbingfu.remove(card);
								}
							},
						},
						_hongfa: {
							enable: 'chooseToUse',
							filter(event, player) {
								if (!event.filterCard({ name: 'sha' }, player)) {
									return false;
								}
								const zhu = get.zhu(player, 'hongfa');
								if (zhu && zhu.storage.huangjintianbingfu && zhu.storage.huangjintianbingfu.length) {
									return true;
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									const zhu = get.zhu(player, 'hongfa');
									return ui.create.dialog('黄巾天兵符', zhu.storage.huangjintianbingfu, 'hidden');
								},
								backup(links, player) {
									return {
										filterCard() {
											return false;
										},
										selectCard: -1,
										viewAs: { name: 'sha' },
										cards: links,
										onuse(result, player) {
											result.cards = lib.skill[result.skill].cards;
											const card = result.cards[0];
											const zhu = get.zhu(player, 'hongfa');
											zhu.storage.huangjintianbingfu.remove(card);
										},
									};
								},
								prompt(links, player) {
									return '选择杀的目标';
								},
							},
							ai: {
								respondSha: true,
								skillTagFilter(player) {
									const zhu = get.zhu(player, 'hongfa');
									if (zhu && zhu.storage.huangjintianbingfu && zhu.storage.huangjintianbingfu.length) {
										return true;
									}
									return false;
								},
								order() {
									return get.order({ name: 'sha' }) - 0.1;
								},
								result: {
									player(player) {
										if (player.countCards('h', 'sha')) {
											return 0;
										}
										return 1;
									},
								},
							},
						},
						hongfa: {
							init(player) {
								player.storage.huangjintianbingfu = [];
							},
							derivation: 'huangjintianbingfu',

							trigger: { player: 'phaseBegin' },
							forced: true,
							filter(event, player) {
								return player.storage.huangjintianbingfu.length == 0;
							},
							content() {
								player.storage.huangjintianbingfu.addArray(get.cards(get.population('qun')));
							},
							ai: {
								threaten: 2,
							},
							group: 'hongfa_hp',
							subSkill: {
								hp: {
									trigger: { player: 'loseHpBefore' },
									filter(event, player) {
										return player.storage.huangjintianbingfu.length;
									},
									forced: true,
									content() {
										'step 0';
										player.chooseCardButton(get.prompt('hongfa'), player.storage.huangjintianbingfu).set('ai', function () {
											return 1;
										});
										('step 1');
										if (result.bool) {
											const card = result.links[0];
											card.discard();
											player.storage.huangjintianbingfu.remove(card);
											player.$throw(card, 1000);

											trigger.cancel();
										}
									},
								},
							},
						},
						wendao: {
							enable: 'phaseUse',
							filterCard: { color: 'red' },
							position: 'he',
							check(card) {
								return 6 - get.value(card);
							},
							filter(event, player) {
								for (let i = 0; i < ui.discardPile.childElementCount; i++) {
									if (ui.discardPile.childNodes[i].name == 'taipingyaoshu') {
										return true;
									}
								}
								return game.hasPlayer(function (current) {
									return current != player && current.countCards('ej', 'taipingyaoshu');
								});
							},
							content() {
								const list = [];
								for (let i = 0; i < ui.discardPile.childElementCount; i++) {
									if (ui.discardPile.childNodes[i].name == 'taipingyaoshu') {
										list.add(ui.discardPile.childNodes[i]);
									}
								}
								game.countPlayer(function (current) {
									if (current != player) {
										const ej = current.getCards('ej', 'taipingyaoshu');
										if (ej.length) {
											list.addArray(ej);
										}
									}
								});
								if (list.length) {
									const card = list.randomGet();
									const owner = get.owner(card);
									if (owner) {
										player.gain(card, owner);
										owner.$give(card, player);
										player.line(owner, 'green');
									} else {
										player.gain(card, 'log');
										player.$draw(card);
									}
								}
							},
							ai: {
								order: 8.5,
								result: {
									player: 1,
								},
							},
						},
						huangjintianbingfu: {
							nopop: true,
							mark: true,
							intro: {
								content: 'cards',
								mark(dialog, content, player) {
									if (content && content.length) {
										dialog.addSmall(content);
									}
									dialog.addText('<ul style="margin-top:5px;padding-left:22px;"><li>当你计算群势力角色数时,每一张<天兵>均可视为一名群势力角色.<li>每当你失去体力时,你可改为将一张<天兵>置入弃牌堆.<li>与你势力相同的角色可将一张<天兵>当【杀】使用或打出', false);
								},
							},
						},
						wuxin: {
							audio: ['wuxinjun', 2],

							trigger: { player: 'phaseDrawBegin' },

							content() {
								'step 0';
								let num = get.population('qun');
								if (player.hasSkill('huangjintianbingfu')) {
									num += player.storage.huangjintianbingfu.length;
								}
								player.chooseCardButton(num, true, get.cards(num), '按顺将卡牌置于牌堆顶(先选择的在上)').set('ai', function (button) {
									return get.value(button.link);
								});
								('step 1');
								if (result.bool) {
									const list = result.links.slice(0);
									while (list.length) {
										ui.cardPile.insertBefore(list.pop(), ui.cardPile.firstChild);
									}
								}
							},
						},
						zhangwu: {
							ai: {
								threaten: 2,
							},
							group: ['zhangwu_gain', 'zhangwu_clear', 'zhangwu_count1', 'zhangwu_count2', 'zhangwu_count3'],
							subSkill: {
								gain: {
									trigger: { global: ['discardAfter', 'respondAfter', 'useCardAfter', 'equipAfter', 'judgeAfter', 'useSkillAfter', 'phaseDrawBegin', 'phaseAfter'] },
									forced: true,
									filter(event, player) {
										if (player.storage.zhangwu) {
											for (const i of player.storage.zhangwu) {
												if (get.owner(i) == player) {
													continue;
												}
												const position = get.position(i);
												if (position && position != 's' && position != 'c') {
													return true;
												}
											}
										}
										if (
											game.hasPlayer(function (current) {
												return current != player && current.getEquip('feilongduofeng');
											})
										) {
											return true;
										}
										if (['discard', 'respond', 'useCard'].includes(event.name) && event.cards) {
											for (const i of event.cards) {
												if (i.name == 'feilongduofeng' && get.position(i) == 'd') {
													return true;
												}
											}
										}
										for (let i = 0; i < ui.discardPile.childElementCount; i++) {
											if (ui.discardPile.childNodes[i].name == 'feilongduofeng') {
												return true;
											}
										}
										return false;
									},
									content() {
										'step 0';
										if (trigger.name == 'equip' || trigger.name == 'respond' || trigger.delay == false) {
										}
										('step 1');
										const list = [];
										game.countPlayer(function (current) {
											if (current != player) {
												const es = current.getEquip('feilongduofeng');
												if (es) {
													list.add(es);
												}
											}
										});
										if (['discard', 'respond', 'useCard'].includes(trigger.name) && trigger.cards) {
											for (const i of trigger.cards) {
												if (i.name == 'feilongduofeng' && get.position(i) == 'd') {
													i.fix();
													list.add(i);
													ui.special.appendChild(i);
												}
											}
										}
										for (let i = 0; i < ui.discardPile.childElementCount; i++) {
											if (ui.discardPile.childNodes[i].name == 'feilongduofeng') {
												list.add(ui.discardPile.childNodes[i]);
												ui.special.appendChild(ui.discardPile.childNodes[i]);
											}
										}
										const list2 = [];
										if (player.storage.zhangwu) {
											for (let i = 0; i < list.length; i++) {
												if (player.storage.zhangwu.includes(list[i])) {
													player.storage.zhangwu.remove(list[i]);
													list2.add(list[i]);
													list.splice(i--, 1);
												}
											}

											for (const i of player.storage.zhangwu) {
												if (get.owner(i) == player) {
													continue;
												}
												const position = get.position(i);
												if (position && position != 's' && position != 'c') {
													list2.add(i);
												}
											}
										}
										if (list.length) {
											player.gain(list);
											var owner = get.owner(list[0]);
											if (trigger.name != 'respond' && owner) {
												player.line(owner, 'green');
												owner.$give(list, player);
											} else {
												player.$gain2(list, true);
											}
											event.delay = true;
										}
										if (list2.length) {
											player.showCards(get.translation(player) + '发动了【章武】', list2);

											for (const i of list2) {
												var owner = get.owner(i);
												if (owner) {
													owner.lose(i, ui.special);
													event.delay = true;
												}
											}

											event.list2 = list2;
										}
										('step 2');
										if (event.delay) {
										}
										('step 3');
										if (event.list2 && event.list2.length) {
											for (const i of event.list2) {
												i.fix();
												ui.cardPile.appendChild(i);
											}

											game.log(player, '将', event.list2, '置于牌堆底');
											player.draw(2);
										}
									},
								},
								count1: {
									trigger: { player: 'loseAfter' },
									silent: true,
									filter(event, player) {
										if (event.type != 'gain' && event.type != 'equip') {
											return true;
										}
										if (event.parent.player == player) {
											return true;
										}
										return false;
									},
									content() {
										if (!player.storage.zhangwu) {
											player.storage.zhangwu = [];
										}

										for (const i of trigger.stockcards) {
											if (i.name == 'feilongduofeng') {
												player.storage.zhangwu.add(i);
											}
										}
									},
								},
								count2: {
									trigger: { player: 'loseAfter' },
									forced: true,
									filter(event, player) {
										if (lib.skill.zhangwu_count1.filter(event, player)) {
											return false;
										}

										for (const i of event.stockcards) {
											if (i.name == 'feilongduofeng') {
												return true;
											}
										}
									},
									content() {
										'step 0';
										const list = [];

										for (const i of trigger.stockcards) {
											if (i.name == 'feilongduofeng') {
												list.add(i);
											}
										}

										if (list.length) {
											if (trigger.type == 'gain') {
												for (const i of list) {
													trigger.parent.cards.remove(i);
												}
											} else if (trigger.type == 'equip') {
												trigger.parent.cancelled = true;
											}
											player.showCards(get.translation(player) + '发动了【章武】', list);
											event.list = list;
										} else {
											event.finish();
										}
										('step 1');

										for (const i of event.list) {
											i.fix();
											ui.cardPile.appendChild(i);
										}

										game.log(player, '将', event.list, '置于牌堆底');
										player.draw(2);
									},
								},
								count3: {
									trigger: { global: 'equipBefore' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'feilongduofeng' && event.player != player && player.storage.zhangwu && player.storage.zhangwu.includes(event.card);
									},
									content() {
										'step 0';
										trigger.cancel();
										trigger.card.fix();
										player.showCards(get.translation(player) + '发动了【章武】', [trigger.card]);
										const owner = get.owner(trigger.card);
										if (owner) {
											owner.lose(trigger.card, ui.special);
										}
										player.storage.zhangwu.remove(trigger.card);
										('step 1');
										trigger.card.fix();
										ui.cardPile.appendChild(trigger.card);
										game.log(player, '将', trigger.card, '置于牌堆底');
										player.draw(2);
									},
								},
								clear: {
									trigger: { global: 'phaseAfter' },
									silent: true,
									content() {
										delete player.storage.zhangwu;
									},
								},
							},
						},
						shouyue: {
							group: 'wuhujiangdaqi',
							derivation: 'wuhujiangdaqi',
							mark: true,
						},
						wuhujiangdaqi: {
							nopop: true,
							mark: true,
							intro: {
								content: '@<div style="margin-top:-5px"><div class="skill">【武圣】</div><div>将<红色牌>改为<任意牌></div><div class="skill">【咆哮】</div><div>增加描述<你使用的【杀】无视其他角色的防具></div><div class="skill">【龙胆】</div><div>增加描述<你每发动一次‘龙胆’便摸一张牌></div><div class="skill">【烈弓】</div><div>增加描述<你的攻击范围+1></div><div class="skill">【铁骑】</div><div>将<若结果为红色>改为<若结果不为♠️️️️></div></div>',
							},
						},
						jizhao: {
							derivation: 'gzrende',

							enable: 'chooseToUse',
							mark: true,

							init(player) {
								player.storage.jizhao = false;
							},
							filter(event, player) {
								if (player.storage.jizhao) {
									return false;
								}
								if (event.type == 'dying') {
									if (player != event.dying) {
										return false;
									}
									return true;
								}
								return false;
							},
							content() {
								'step 0';
								player.awakenSkill('jizhao');
								player.storage.jizhao = true;
								const num = player.maxHp - player.countCards('h');
								if (num > 0) {
									player.draw(num);
								}
								('step 1');
								if (player.hp < 2) {
									player.recover(2 - player.hp);
								}
								('step 2');
								player.removeSkill('shouyue');
								player.removeSkill('wuhujiangdaqi');
								player.addSkill('gzrende');
							},
							ai: {
								order: 1,
								skillTagFilter(player) {
									if (player.storage.jizhao) {
										return false;
									}
									if (player.hp > 0) {
										return false;
									}
								},
								save: true,
								result: {
									player: 10,
								},
							},
							intro: {
								content: 'limited',
							},
						},
						gzshoucheng: {
							inherit: 'shoucheng',
							filter(event, player) {
								if (event.player.countCards('h')) {
									return false;
								}
								if (event.player.isEnemiesOf(player)) {
									return false;
								}
								if (_status.currentPhase == event.player) {
									return false;
								}

								for (const i of event.cards) {
									if (i.original == 'h') {
										return true;
									}
								}

								return false;
							},
						},
						yicheng: {
							trigger: { global: 'shaBegin' },
							filter(event, player) {
								return event.target.isFriendsOf(player);
							},
							logTarget: 'target',
							content() {
								'step 0';
								trigger.target.draw();
								('step 1');
								trigger.target.chooseToDiscard('he', true);
							},
						},
						gzjixi: {
							inherit: 'jixi',
							init(player) {
								if (player.checkMainSkill('gzjixi')) {
									player.removeMaxHp();
								}
							},
						},
						ziliang: {
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return event.player.isIn() && event.player.isFriendsOf(player) && player.storage.tuntian && player.storage.tuntian.length;
							},
							init(player) {
								player.checkViceSkill('ziliang');
							},
							forced: true,
							content() {
								'step 0';
								player.chooseCardButton(get.prompt('ziliang', trigger.player), player.storage.tuntian).set('ai', function (button) {
									return get.value(button.link);
								});
								('step 1');
								if (result.bool) {
									const card = result.links[0];

									player.storage.tuntian.remove(card);

									if (!player.storage.tuntian.length) {
										player.unmarkSkill('tuntian');
									} else {
									}
									trigger.player.gain(card);
									if (trigger.player == player) {
										player.$draw(card, true);
									} else {
										player.$give(card, trigger.player);
									}
								}
							},
						},
						huyuan: {
							audio: 'yuanhu',
							trigger: { player: 'phaseEnd' },
							forced: true,
							filter(event, player) {
								return player.countCards('he', { type: 'equip' }) > 0;
							},
							content() {
								'step 0';
								player.chooseCardTarget({
									filterCard(card, player) {
										return get.type(card) == 'equip';
									},
									position: 'he',
									filterTarget(card, player, target) {
										return !target.getEquip(card);
									},
									ai1(card) {
										return 6 - get.value(card);
									},
									ai2(target) {
										return get.attitude(_status.event.player, target) - 3;
									},
									prompt: get.prompt('yuanhu'),
								});
								('step 1');
								if (result.bool) {
									const target = result.targets[0];

									event.current = target;
									target.equip(result.cards[0]);
									if (target != player) {
										player.$give(result.cards, target);
									}

									player
										.chooseTarget('弃置一名角色的一张牌', function (card, player, target) {
											const source = _status.event.source;
											return get.distance(source, target) <= 1 && source != target && target.countCards('he');
										})
										.set('ai', function (target) {
											return -get.attitude(_status.event.player, target);
										})
										.set('source', target);
								} else {
									event.finish();
								}
								('step 2');
								if (result.targets?.length) {
									event.current.line(result.targets, 'green');
									player.discardPlayerCard(true, result.targets[0], 'he');
								}
							},
						},
						heyi: {
							zhenfa: 'inline',
						},
						_heyi: {
							mod: {
								globalTo(from, to, distance) {
									if (
										game.hasPlayer(function (current) {
											return current.hasSkill('heyi') && current.inline(to) && current != to;
										})
									) {
										return distance + 1;
									}
								},
							},
						},
						tianfu: {
							init(player) {
								player.checkMainSkill('tianfu');
							},
							inherit: 'kanpo',
							zhenfa: 'inline',
							viewAsFilter(player) {
								return _status.currentPhase.inline(player) && !player.hasSkill('kanpo') && player.countCards('h', { color: 'black' }) > 0;
							},
						},
						yizhi: {
							init(player) {
								if (player.checkViceSkill('yizhi')) {
									player.removeMaxHp();
								}
							},
							inherit: 'guanxing',
							filter(event, player) {
								return !player.hasSkill('guanxing');
							},
						},
						gzshangyi: {
							audio: 'shangyi',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(card, player, target) {
								return player != target && (target.countCards('h') || target.isUnseen(2));
							},
							content() {
								'step 0';
								target.viewHandcards(player);
								('step 1');
								if (!target.countCards('h')) {
									event._result = { index: 1 };
								} else if (!target.isUnseen(2)) {
									event._result = { index: 0 };
								} else {
									player.chooseControl().set('choiceList', ['观看' + get.translation(target) + '的手牌并可以弃置其中的一张黑色牌', '观看' + get.translation(target) + '的所有暗置的武将牌']);
								}
								('step 2');
								if (result.index == 0) {
									player
										.discardPlayerCard(target, 'h')
										.set('filterButton', function (button) {
											return get.color(button.link) == 'black';
										})
										.set('visible', true);
								} else {
									player.viewCharacter(target, 2);
								}
							},
							ai: {
								order: 11,
								result: {
									target(player, target) {
										return -target.countCards('h');
									},
								},
								threaten: 1.1,
							},
						},
						niaoxiang: {
							zhenfa: 'siege',
						},
						_niaoxiang: {
							trigger: { player: 'shaBegin' },
							filter(event, player) {
								if (game.countPlayer() < 4) {
									return false;
								}
								return (
									player.siege(event.target) &&
									game.hasPlayer(function (current) {
										return current.hasSkill('niaoxiang') && current.siege(event.target);
									})
								);
							},
							forced: true,
							logTarget: 'target',
							content() {
								if (typeof trigger.shanRequired == 'number') {
									trigger.shanRequired++;
								} else {
									trigger.shanRequired = 2;
								}
							},
						},
						fengshi: {
							zhenfa: 'siege',
						},
						_fengshi: {
							trigger: { player: 'shaBegin' },
							filter(event, player) {
								if (game.countPlayer() < 4) {
									return false;
								}
								return (
									player.siege(event.target) &&
									game.hasPlayer(function (current) {
										return current.hasSkill('fengshi') && current.siege(event.target);
									}) &&
									event.target.countCards('e')
								);
							},
							logTarget: 'target',
							content() {
								trigger.target.chooseToDiscard('e', true);
							},
						},
						gzguixiu: {
							init2(player) {
								player.draw(2);
							},
							onremove(player) {
								if (player.isDamaged()) {
									player.recover();
								}
							},
						},
						gzcunsi: {
							derivation: 'gzyongjue',
							enable: 'phaseUse',
							filter(event, player) {
								return player.checkMainSkill('gzcunsi', false) || player.checkViceSkill('gzcunsi', false);
							},

							filterTarget: true,

							content() {
								'step 0';
								if (player.checkMainSkill('gzcunsi', false)) {
									player.removeCharacter(0);
								} else {
									player.removeCharacter(1);
								}
								('step 1');
								target.addSkill('gzyongjue');
								if (target != player) {
									target.draw(2);
								}
							},
							ai: {
								order: 9,
								result: {
									player(player, target) {
										let num = 0;
										if (player.isDamaged() && target.isFriendsOf(player)) {
											num++;
											if (target.hasSkill('kanpo')) {
												num += 0.5;
											}
											if (target.hasSkill('liegong')) {
												num += 0.5;
											}
											if (target.hasSkill('tieji')) {
												num += 0.5;
											}
											if (target.hasSkill('gzrende')) {
												num += 1.2;
											}
											if (target.hasSkill('longdan')) {
												num += 1.2;
											}
											if (target.hasSkill('paoxiao')) {
												num += 1.2;
											}
											if (target.hasSkill('zhangwu')) {
												num += 1.5;
											}
											if (target != player) {
												num += 0.5;
											}
										}
										return num;
									},
								},
							},
						},
						gzyongjue: {
							trigger: { global: 'useCardAfter' },
							filter(event, player) {
								if (event.gzyongjue == player) {
									for (const i of event.cards) {
										if (get.position(i) == 'd') {
											return true;
										}
									}
								}
								return false;
							},
							mark: true,
							nopop: true,
							intro: {
								content: '若与你势力相同的一名角色于其回合内使用的第一张牌为【杀】,则该角色可以在此【杀】结算完成后获得之',
							},
							content() {
								const cards = [];

								for (const i of trigger.cards) {
									if (get.position(i) == 'd') {
										cards.push(i);
									}
								}

								player.gain(cards, 'gain2');
							},
							subSkill: {
								count: {
									trigger: { global: 'useCard' },
									filter(event, player) {
										return event.card && event.card.name == 'sha' && event.cards.length && event.player.isFriendsOf(player) && event.player.countUsed() == 1;
									},
									silent: true,
									content() {
										trigger.gzyongjue = player;
									},
								},
							},
							group: 'gzyongjue_count',
							global: 'gzyongjue_ai',
						},
						gzyongjue_ai: {
							ai: {
								presha: true,
								skillTagFilter(player) {
									if (
										!game.hasPlayer(function (current) {
											return current.isFriendsOf(player) && current.hasSkill('gzyongjue');
										})
									) {
										return false;
									}
								},
							},
						},
						baoling: {
							trigger: { player: 'phaseUseEnd' },
							init(player) {
								player.checkMainSkill('baoling');
							},
							forced: true,
							filter(event, player) {
								return player.hasViceCharacter();
							},
							content() {
								'step 0';
								player.removeCharacter(1);
								('step 1');
								player.awakenSkill('baoling');
								player.gainMaxHp(3, true);
								('step 2');
								player.recover(3);
								player.addSkill('benghuai');
							},
							derivation: 'benghuai',
						},
						gzmingshi: {
							trigger: { player: 'damageBegin' },
							forced: true,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.isUnseen(2);
							},
							content() {
								trigger.num--;
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) {
											return;
										}
										if (!player.isUnseen(2)) {
											return;
										}
										const num = get.tag(card, 'damage');
										if (num > 0) {
											if (num > 1) {
												return 0.5;
											}
											return 0;
										}
									},
								},
							},
						},
						hunshang: {
							init(player) {
								if (player.checkViceSkill('hunshang')) {
									player.removeMaxHp();
								}
							},
							group: ['hunshang_yingzi', 'hunshang_yinghun'],
						},
						hunshang_yingzi: {
							inherit: 'yingzi',
							filter(event, player) {
								return player.hp <= 1 && !player.hasSkill('yingzi');
							},
						},
						hunshang_yinghun: {
							inherit: 'gzyinghun',
							filter(event, player) {
								return player.hp <= 1 && player.isDamaged() && !player.hasSkill('gzyinghun');
							},
						},
						yingyang: {
							trigger: { player: 'compare', target: 'compare' },
							filter(event, player) {
								return !event.iwhile;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseControl('点数+3', '点数-3', 'cancel2')
									.set('prompt', get.prompt('yingyang'))
									.set('ai', function () {
										if (_status.event.small) {
											return 1;
										} else {
											return 0;
										}
									})
									.set('small', trigger.small);
								('step 1');
								if (result.index != 2) {
									if (result.index == 0) {
										game.log(player, '拼点牌点数+3');
										if (player == trigger.player) {
											trigger.num1 += 3;
										} else {
											trigger.num2 += 3;
										}
									} else {
										game.log(player, '拼点牌点数-3');
										if (player == trigger.player) {
											trigger.num1 -= 3;
										} else {
											trigger.num2 -= 3;
										}
									}
								}
							},
						},
						gzqianxi: {
							audio: 'qianxi',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.judge();
								('step 1');
								event.color = result.color;
								player
									.chooseTarget(function (card, player, target) {
										return player != target && get.distance(player, target) <= 1;
									}, true)
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 2');
								if (result.targets?.length) {
									result.targets[0].storage.qianxi2 = event.color;
									result.targets[0].addSkill('qianxi2');
									player.line(result.targets, 'green');
									game.addVideo('storage', result.targets[0], ['qianxi2', event.color]);
								}
							},
						},
						gzduanchang: {
							audio: 'duanchang',
							trigger: { player: 'dieBegin' },
							popup: true,
							silent: true,
							filter(event, player) {
								return event.source && event.source.isIn() && event.source != player && (event.source.hasMainCharacter() || event.source.hasViceCharacter());
							},
							content() {
								'step 0';
								if (!trigger.source.hasViceCharacter()) {
									event._result = { control: '主将' };
								} else if (!trigger.source.hasMainCharacter()) {
									event._result = { control: '副将' };
								} else {
									player
										.chooseControl('主将', '副将', function () {
											return Math.random() < 0.5 ? '主将' : '副将';
										})
										.set('prompt', '令' + get.translation(trigger.source) + '失去一张武将牌的所有技能');
								}
								('step 1');
								let skills;
								if (result.control == '主将') {
									trigger.source.showCharacter(0);
									game.broadcastAll(function (player) {
										player.node.avatar.classList.add('disabled');
									}, trigger.source);
									skills = lib.character[trigger.source.name][3];
									game.log(trigger.source, '失去了主将技能');
								} else {
									trigger.source.showCharacter(1);
									game.broadcastAll(function (player) {
										player.node.avatar2.classList.add('disabled');
									}, trigger.source);
									skills = lib.character[trigger.source.name2][3];
									game.log(trigger.source, '失去了副将技能');
								}
								const list = [];

								for (const i of skills) {
									list.add(i);
									const info = lib.skill[i];
									if (typeof info.derivation == 'string') {
										list.add(info.derivation);
									} else if (Array.isArray(info.derivation)) {
										list.addArray(info.derivation);
									}
								}

								trigger.source.disableSkill('gzduanchang_disable', list);
								trigger.source.syncSkills();
								player.line(trigger.source, 'green');
							},
							logTarget: 'source',
							ai: {
								threaten(player, target) {
									if (target.hp == 1) {
										return 0.2;
									}
									return 1.5;
								},
								effect: {
									target(card, player, target, current) {
										if (!target.hasFriend()) {
											return;
										}
										if (target.hp <= 1 && get.tag(card, 'damage')) {
											return [1, 0, 0, -2];
										}
									},
								},
							},
						},
						gzweimu: {
							audio: 'weimu',
							trigger: { target: 'useCardToBefore' },
							forced: true,
							_priority: 15,
							check(event, player) {
								return get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick' && get.color(event.card) == 'black';
							},
							content() {
								trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.type(card, 'trick') == 'trick' && get.color(card) == 'black') {
											return 'zeroplayertarget';
										}
									},
								},
							},
						},
						gzqianxun: {
							audio: 'qianxun',
							trigger: { target: 'useCardToBefore' },
							forced: true,
							_priority: 15,
							check(event, player) {
								return get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return (event.card && event.card.name == 'shunshou') || event.card.name == 'lebu';
							},
							content() {
								trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'shunshou' || card.name == 'lebu') {
											return 'zeroplayertarget';
										}
									},
								},
							},
						},
						gzkongcheng: {
							audio: 'kongcheng',
							trigger: { target: 'useCardToBefore' },
							forced: true,
							_priority: 15,
							check(event, player) {
								return get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return player.countCards('h') == 0 && (event.card.name == 'sha' || event.card.name == 'juedou');
							},
							content() {
								trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (target.countCards('h') == 0 && (card.name == 'sha' || card.name == 'juedou')) {
											return 'zeroplayertarget';
										}
									},
								},
							},
						},
						gzxiaoji: {
							inherit: 'xiaoji',
							content() {
								player.draw(2);
							},
						},
						gzrende: {
							audio: 'rende',
							group: ['gzrende1'],
							enable: 'phaseUse',
							filterCard: true,
							selectCard: [1, Infinity],
							discard: false,
							prepare: 'give',
							filterTarget(card, player, target) {
								return player != target;
							},
							check(card) {
								if (ui.selected.cards.length > 2) {
									return 0;
								}
								if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
									return 0;
								}
								if (!ui.selected.cards.length && card.name == 'du') {
									return 20;
								}
								const player = get.owner(card);
								if (player.hp == player.maxHp || player.storage.gzrende < 0 || player.countCards('h') + player.storage.gzrende <= 2) {
									if (ui.selected.cards.length) {
										return -1;
									}
									const players = game.filterPlayer();

									for (const i of players) {
										if (i.hasSkill('haoshi') && !i.isTurnedOver() && !i.hasJudge('lebu') && get.attitude(player, i) >= 3 && get.attitude(i, player) >= 3) {
											return 11 - get.value(card);
										}
									}

									if (player.countCards('h') > player.hp) {
										return 10 - get.value(card);
									}
									if (player.countCards('h') > 2) {
										return 6 - get.value(card);
									}
									return -1;
								}
								return 10 - get.value(card);
							},
							content() {
								target.gain(cards, player);
								if (typeof player.storage.gzrende != 'number') {
									player.storage.gzrende = 0;
								}
								if (player.storage.gzrende >= 0) {
									player.storage.gzrende += cards.length;
									if (player.storage.gzrende >= 3) {
										player.recover();
										player.storage.gzrende = -1;
									}
								}
							},
							ai: {
								order(skill, player) {
									if (player.hp == player.maxHp || player.storage.gzrende < 0 || player.countCards('h') + player.storage.gzrende <= 2) {
										return 1;
									}
									return 10;
								},
								result: {
									target(player, target) {
										if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
											return -10;
										}
										if (target.hasJudge('lebu')) {
											return 0;
										}
										const nh = target.countCards('h');
										const np = player.countCards('h');
										if (player.hp == player.maxHp || player.storage.gzrende < 0 || player.countCards('h') + player.storage.gzrende <= 2) {
											if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) {
												return 0;
											}
										}
										return Math.max(1, 5 - nh);
									},
								},
								effect: {
									target(card, player, target) {
										if (player == target && get.type(card) == 'equip') {
											if (player.countCards('e', { subtype: get.subtype(card) })) {
												const players = game.filterPlayer();

												for (const i of players) {
													if (i != player && get.attitude(player, i) > 0) {
														return 0;
													}
												}
											}
										}
									},
								},
								threaten: 0.8,
							},
						},
						gzrende1: {
							trigger: { player: 'phaseUseBegin' },
							silent: true,
							content() {
								player.storage.gzrende = 0;
							},
						},
						gzzhiheng: {
							inherit: 'zhiheng',
							selectCard() {
								return [1, _status.event.player.maxHp];
							},
							prompt: '出牌阶段限一次,你可以弃置至多X张牌(X为你的体力上限),然后摸等量的牌',
						},
						huoshui: {
							enable: 'phaseUse',

							filter(event, player) {
								if (player.name1 == 'gz_zoushi') {
									return player.isUnseen(0);
								}
								return player.isUnseen(1);
							},
							content() {
								if (player.name1 == 'gz_zoushi') {
									player.showCharacter(0);
								} else {
									player.showCharacter(1);
								}
							},
						},
						_huoshui: {
							ai: {
								nomingzhi: true,
								skillTagFilter(player) {
									if (_status.currentPhase && _status.currentPhase != player && _status.currentPhase.hasSkill('huoshui')) {
										return true;
									}
									return false;
								},
							},
						},
						qingcheng: {
							enable: 'phaseUse',
							filter(event, player) {
								return (
									player.countCards('he', { type: 'equip' }) &&
									game.hasPlayer(function (current) {
										return current != player && !current.isUnseen(2);
									})
								);
							},
							filterCard: { type: 'equip' },
							position: 'he',
							filterTarget(card, player, target) {
								return !target.isUnseen(2);
							},
							check(card) {
								return 6 - get.value(card, _status.event.player);
							},
							content() {
								'step 0';
								if (get.is.jun(target)) {
									event._result = { control: '副将' };
								} else {
									let choice = '主将';
									const skills = lib.character[target.name2][3];

									for (const i of skills) {
										const info = get.info(i);
										if (info && info.ai && info.ai.maixie) {
											choice = '副将';
											break;
										}
									}

									if (target.name == 'gz_zhoutai') {
										choice = '主将';
									} else if (target.name2 == 'gz_zhoutai') {
										choice = '副将';
									}
									player
										.chooseControl('主将', '副将', function () {
											return _status.event.choice;
										})
										.set('prompt', '暗置' + get.translation(target) + '的一张武将牌')
										.set('choice', choice);
								}
								('step 1');
								if (result.control == '主将') {
									target.hideCharacter(0);
								} else {
									target.hideCharacter(1);
								}
								target.addTempSkill('qingcheng_ai');
							},
							ai: {
								order: 8,
								result: {
									target(player, target) {
										if (target.hp <= 0) {
											return -5;
										}
										if (player.getStat().skill.qingcheng) {
											return 0;
										}
										if (!target.hasSkillTag('maixie')) {
											return 0;
										}
										if (get.attitude(player, target) >= 0) {
											return 0;
										}
										if (
											player.hasCard(function (card) {
												return get.tag(card, 'damage') && player.canUse(card, target, true, true);
											})
										) {
											if (target.maxHp > 3) {
												return -0.5;
											}
											return -1;
										}
										return 0;
									},
								},
							},
						},
						qingcheng_ai: {
							ai: {
								effect: {
									target(card) {
										if (get.tag(card, 'damage')) {
											return 2;
										}
									},
								},
							},
						},
						duoshi: {
							enable: 'chooseToUse',
							viewAs: { name: 'yiyi' },
							usable: 4,
							filterCard: { color: 'red' },
							viewAsFilter(player) {
								return player.countCards('h', { color: 'red' }) > 0;
							},
							check(card) {
								return 5 - get.value(card);
							},
						},
						gzxiaoguo: {
							inherit: 'xiaoguo',
							content() {
								'step 0';
								var nono = Math.abs(get.attitude(player, trigger.player)) < 3;
								if (get.damageEffect(trigger.player, player, player) <= 0) {
									nono = true;
								}
								const next = player.chooseToDiscard(get.prompt('gzxiaoguo', trigger.player), { type: 'basic' });
								next.set('ai', function (card) {
									if (_status.event.nono) {
										return 0;
									}
									return 8 - get.useful(card);
								});

								next.set('nono', nono);
								('step 1');
								if (result.bool) {
									var nono = get.damageEffect(trigger.player, player, trigger.player) >= 0;
									trigger.player
										.chooseToDiscard('he', { type: 'equip' })
										.set('ai', function (card) {
											if (_status.event.nono) {
												return 0;
											}
											if (_status.event.player.hp == 1) {
												return 10 - get.value(card);
											}
											return 9 - get.value(card);
										})
										.set('nono', nono);
								} else {
									event.finish();
								}
								('step 2');
								if (!result.bool) {
									trigger.player.damage();
								}
							},
						},
						_mingzhi1: {
							trigger: { player: 'phaseBegin' },
							_priority: 19,
							forced: true,
							popup: false,
							content() {
								'step 0';
								let choice = 1;

								for (const i of player.hiddenSkills) {
									if (lib.skill[i].ai) {
										const mingzhi = lib.skill[i].ai.mingzhi;
										if (mingzhi == false) {
											choice = 0;
											break;
										}
										if (typeof mingzhi == 'function' && mingzhi(trigger, player) == false) {
											choice = 0;
											break;
										}
									}
								}

								if (player.isUnseen()) {
									const group = lib.character[player.name1][1];
									player.chooseControl('bumingzhi', '明置' + get.translation(player.name1), '明置' + get.translation(player.name2), 'tongshimingzhi', true).ai = function (event, player) {
										const popu = get.population(lib.character[player.name1][1]);
										if (popu >= 2 || (popu == 1 && game.players.length <= 4)) {
											return Math.random() < 0.5 ? 3 : Math.random() < 0.5 ? 2 : 1;
										}
										if (choice == 0) {
											return 0;
										}
										if (get.population(group) > 0 && player.wontYe()) {
											return Math.random() < 0.2 ? (Math.random() < 0.5 ? 3 : Math.random() < 0.5 ? 2 : 1) : 0;
										}
										let nming = 0;

										for (const i of game.players) {
											if (i != player && i.identity != 'unknown') {
												nming++;
											}
										}

										if (nming == game.players.length - 1) {
											return Math.random() < 0.5 ? (Math.random() < 0.5 ? 3 : Math.random() < 0.5 ? 2 : 1) : 0;
										}
										return Math.random() < (0.1 * nming) / game.players.length ? (Math.random() < 0.5 ? 3 : Math.random() < 0.5 ? 2 : 1) : 0;
									};
								} else {
									if (Math.random() < 0.5) {
										choice = 0;
									}
									if (player.isUnseen(0)) {
										player.chooseControl('bumingzhi', '明置' + get.translation(player.name1), true).choice = choice;
									} else if (player.isUnseen(1)) {
										player.chooseControl('bumingzhi', '明置' + get.translation(player.name2), true).choice = choice;
									} else {
										event.finish();
									}
								}
								('step 1');
								switch (result.control) {
									case '明置' + get.translation(player.name1):
										player.showCharacter(0);
										break;
									case '明置' + get.translation(player.name2):
										player.showCharacter(1);
										break;
									case 'tongshimingzhi':
										player.showCharacter(2);
										break;
								}
							},
						},
						_mingzhi2: {
							trigger: { player: 'triggerHidden' },
							forced: true,
							popup: false,
							_priority: 10,
							content() {
								'step 0';
								if (get.info(trigger.skill).silent) {
									event.finish();
								} else {
									event.skillHidden = true;
									const bool1 = game.expandSkills(lib.character[player.name1][3]).includes(trigger.skill);
									const bool2 = game.expandSkills(lib.character[player.name2][3]).includes(trigger.skill);
									const nai = function () {
										const player = _status.event.player;
										if (!_status.event.yes) {
											return false;
										}
										if (player.identity != 'unknown') {
											return true;
										}
										if (Math.random() < 0.5) {
											return true;
										}
										const info = get.info(_status.event.skill);
										if (info && info.ai && info.ai.mingzhi == true) {
											return true;
										}
										if (info && info.ai && info.ai.maixie) {
											return true;
										}
										const group = lib.character[player.name1][1];
										const popu = get.population(lib.character[player.name1][1]);
										if (popu >= 2 || (popu == 1 && game.players.length <= 4)) {
											return true;
										}
										if (get.population(group) > 0 && player.wontYe()) {
											return Math.random() < 0.2 ? true : false;
										}
										let nming = 0;

										for (const i of game.players) {
											if (i != player && i.identity != 'unknown') {
												nming++;
											}
										}

										if (nming == game.players.length - 1) {
											return Math.random() < 0.5 ? true : false;
										}
										return Math.random() < (0.1 * nming) / game.players.length ? true : false;
									};
									if (bool1 && bool2) {
										event.name = player.name1;
										event.name2 = player.name2;
									} else {
										event.name = bool1 ? player.name1 : player.name2;
									}
									var info = get.info(trigger.skill);
									var next = player.chooseBool('是否明置' + get.translation(event.name) + '以发动【' + get.translation(trigger.skill) + '】？');
									next.yes = !info.check || info.check(trigger._trigger, player);
									next.skill = trigger.skill;
									next.ai = nai;
								}
								('step 1');
								if (result.bool) {
									if (event.name == player.name1) {
										player.showCharacter(0);
									} else {
										player.showCharacter(1);
									}
									trigger.revealed = true;
									event.finish();
								} else if (event.name2) {
									var info = get.info(trigger.skill);
									var next = player.chooseBool('是否明置' + get.translation(event.name2) + '以发动【' + get.translation(trigger.skill) + '】？');
									next.yes = !info.check || info.check(trigger._trigger, player);
									next.ai = function () {
										return _status.event.yes;
									};
								} else {
									event.finish();
									trigger.untrigger();
									trigger.cancelled = true;
								}
								('step 2');
								if (event.name2) {
									if (result.bool) {
										player.showCharacter(1);
										trigger.revealed = true;
									} else {
										trigger.untrigger();
										trigger.cancelled = true;
									}
								}
							},
						},
						_mingzhi3: {
							trigger: { player: 'phaseBegin' },
							_priority: 19.1,
							forced: true,
							popup: false,
							filter(event, player) {
								return player.isUnseen(0) && get.is.jun(player.name1);
							},
							content() {
								player.showCharacter(0);
							},
						},
						_zhenfazhaohuan: {
							enable: 'phaseUse',
							usable: 1,
							getConfig(player) {
								let n1, n2, p1, p2;
								const config = {
									inline: false,
									siege: false,
								};
								const config2 = {};
								n1 = player.next;
								p1 = player.previous;
								if (n1) {
									if (n1.isUnseen()) {
										config.inline = true;
									} else if (n1.identity != player.identity) {
										n2 = n1.next;
										if (n2 && n2.isUnseen()) {
											config.siege = true;
										}
									}
								}
								if (p1) {
									if (p1.isUnseen()) {
										config.inline = true;
									} else if (p1.identity != player.identity) {
										p2 = p1.previous;
										if (p2 && p2.isUnseen()) {
											config.siege = true;
										}
									}
								}
								if (config.inline || config.siege) {
									const skills = player.getSkills();

									for (const i of skills) {
										const info = get.info(i).zhenfa;
										if (info && config[info]) {
											config2[info] = true;
										}
									}
								}
								return config2;
							},
							filter(event, player) {
								if (game.countPlayer() < 4) {
									return false;
								}
								if (player.hasSkill('undist')) {
									return false;
								}
								const config = lib.skill._zhenfazhaohuan.getConfig(player);
								return config.inline || config.siege;
							},
							content() {
								'step 0';
								const config = lib.skill._zhenfazhaohuan.getConfig(player);
								if (config.siege) {
									event.siege = true;
								}
								if (!config.inline) {
									event.goto(3);
								}
								event.asked = [];
								event.current = player;
								event.dir = true;
								event.askPlayer = function () {
									event.directfalse = false;
									if (event.current && event.current.isUnseen() && !event.asked.includes(event.current)) {
										player.line(event.current, 'green');
										event.asked.push(event.current);
										if (lib.character[event.current.name1][1] == player.identity) {
											event.current
												.chooseControl(['明置' + get.translation(event.current.name1), '明置' + get.translation(event.current.name2), '不明置'], function () {
													return Math.floor(Math.random() * 3);
												})
												.set('prompt', get.translation(player) + '发了阵法召唤,你可以明置一个武将');
										} else {
											event.directfalse = true;
											if (_status.connectMode) {
												event.current.chooseControl('不明置').set('prompt', get.translation(player) + '发了阵法召唤(你与其势力不同,无法明置武将)');
											}
										}
									} else {
										event.directfalse = true;
									}
								};
								event.checkResult = function (result, num) {
									if (!event.directfalse && result.control != '不明置') {
										if (result.index == 0) {
											event.current.showCharacter(0);
										} else {
											event.current.showCharacter(1);
										}
										if (event.current.identity == 'ye' || num != 1) {
											if (event.dir) {
												event.dir = false;
												event.current = player;
												event.goto(num);
											}
										} else {
											event.goto(num);
										}
									} else if (event.dir) {
										event.dir = false;
										event.current = player;
										event.goto(num);
									}
								};
								('step 1');
								if (event.dir) {
									event.current = event.current.next;
								} else {
									event.current = event.current.previous;
								}
								event.askPlayer();
								('step 2');
								event.checkResult(result, 1);
								('step 3');
								if (!event.siege) {
									event.finish();
									return;
								}
								event.dir = true;
								('step 4');
								let str;
								if (event.dir) {
									str = 'getNext';
								} else {
									str = 'getPrevious';
								}
								event.current = player[str]();
								if (event.current && !event.current.isUnseen() && event.current.identity != player.identity) {
									event.current = event.current[str]();
								}
								event.askPlayer();
								('step 5');
								event.checkResult(result, 4);
							},
							ai: {
								order: 5,
								result: {
									player: 1,
								},
							},
						},
					},
					game: {
						getCharacterChoice(list, num) {
							const choice = list.splice(0, num);
							const map = { wei: [], shu: [], wu: [], qun: [] };

							for (const i of choice) {
								var group = lib.character[i][1];
								if (map[group]) {
									map[group].push(i);
								}
							}

							for (const i in map) {
								if (map[i].length < 2) {
									if (map[i].length == 1) {
										choice.remove(map[i][0]);
										list.push(map[i][0]);
									}
									delete map[i];
								}
							}
							if (choice.length == num - 1) {
								for (let i = 0; i < list.length; i++) {
									if (map[lib.character[list[i]][1]]) {
										choice.push(list[i]);
										list.splice(i--, 1);
										break;
									}
								}
							} else if (choice.length < num - 1) {
								var group = null;
								for (let i = 0; i < list.length; i++) {
									if (group) {
										if (lib.character[list[i]][1] == group) {
											choice.push(list[i]);
											list.splice(i--, 1);
											if (choice.length >= num) {
												break;
											}
										}
									} else {
										if (!map[lib.character[list[i]][1]]) {
											group = lib.character[list[i]][1];
											choice.push(list[i]);
											list.splice(i--, 1);
										}
									}
								}
							}
							return choice;
						},
						getState() {
							const state = {};
							for (const i in lib.playerOL) {
								const player = lib.playerOL[i];
								state[i] = {
									identity: player.identity,
									shown: player.ai.shown,
								};
							}
							return state;
						},
						updateState(state) {
							for (const i in state) {
								const player = lib.playerOL[i];
								if (player) {
									player.identity = state[i].identity;
									player.ai.shown = state[i].shown;
								}
							}
						},
						getRoomInfo(uiintro) {
							let num, last;
							if (lib.configOL.initshow_draw == '0') {
								num = '关闭';
							} else {
								num = get.cnNumber(parseInt(lib.configOL.initshow_draw)) + '张';
							}
							uiintro.add('<div class="text chat">首亮摸牌:' + num);
							uiintro.add('<div class="text chat">珠联璧合:' + (lib.configOL.zhulian ? '开启' : '关闭'));
							uiintro.add('<div class="text chat">出牌时限:' + lib.configOL.choose_timeout + '秒');
							uiintro.add('<div class="text chat">国战牌堆:' + (lib.configOL.guozhanpile ? '开启' : '关闭'));
							last = uiintro.add('<div class="text chat">国战武将:' + (lib.configOL.onlyguozhan ? '开启' : '关闭'));
							if (!lib.configOL.onlyguozhan) {
								uiintro.add('<div class="text chat">屏蔽弱将:' + (lib.configOL.ban_weak ? '开启' : '关闭'));
								last = uiintro.add('<div class="text chat">屏蔽强将:' + (lib.configOL.ban_strong ? '开启' : '关闭'));
								if (lib.configOL.banned.length) {
									last = uiintro.add('<div class="text chat">禁用武将:' + get.translation(lib.configOL.banned));
								}
								if (lib.configOL.bannedcards.length) {
									last = uiintro.add('<div class="text chat">禁用卡牌:' + get.translation(lib.configOL.bannedcards));
								}
							}
							last.style.paddingBottom = '8px';
						},
						addRecord(bool) {
							if (typeof bool == 'boolean') {
								const data = lib.config.gameRecord.guozhan.data;
								const identity = game.me.identity;
								if (!data[identity]) {
									data[identity] = [0, 0];
								}
								if (bool) {
									data[identity][0]++;
								} else {
									data[identity][1]++;
								}
								const list = ['wei', 'shu', 'wu', 'qun', 'ye'];
								let str = '';

								for (const i of list) {
									if (data[i]) {
										str += lib.translate[i + '2'] + ':' + data[i][0] + '胜 ' + data[i][1] + '负<br>';
									}
								}

								lib.config.gameRecord.guozhan.str = str;
								game.saveConfig('gameRecord', lib.config.gameRecord);
							}
						},
						getIdentityList(player) {
							if (!player.isUnseen()) {
								return;
							}
							if (player == game.me) {
								return;
							}
							const list = {
								wei: '魏',
								shu: '蜀',
								wu: '吴',
								qun: '群',
								ye: '野',
								unknown: '',
							};
							const num = Math.floor((game.players.length + game.dead.length) / 2);
							let noye = true;
							if (get.population('wei') >= num) {
								delete list.wei;
								noye = false;
							}
							if (get.population('shu') >= num) {
								delete list.shu;
								noye = false;
							}
							if (get.population('wu') >= num) {
								delete list.wu;
								noye = false;
							}
							if (get.population('qun') >= num) {
								delete list.qun;
								noye = false;
							}
							if (noye) {
								delete list.ye;
							}
							return list;
						},
						getIdentityList2(list) {
							for (const i in list) {
								switch (i) {
									case 'unknown':
										list[i] = '未知';
										break;
									case 'ye':
										list[i] = '野心家';
										break;
									case 'qun':
										list[i] += '雄';
										break;
									default:
										list[i] += '国';
								}
							}
						},
						getVideoName() {
							const str = get.translation(game.me.name1) + '/' + get.translation(game.me.name2);
							let str2 = get.cnNumber(parseInt(get.config('player_number'))) + '人' + get.translation(lib.config.mode);
							if (game.me.identity == 'ye') {
								str2 += ' - 野心家';
							}
							const name = [str, str2];
							return name;
						},
						showIdentity(started) {
							if (game.phaseNumber == 0 && !started) {
								return;
							}

							for (const i of game.players) {
								i.showCharacter(2, false);
							}
						},
						tryResult() {
							let hasunknown = false,
								check = true,
								unknown,
								giveup;
							const group = game.players[0]._group;

							for (const i of game.players) {
								if (i.identity == 'unknown') {
									hasunknown = true;
									if (unknown) {
										unknown = 'no';
									} else {
										unknown = i;
									}
								}
								if (i._group != group) {
									check = false;
									break;
								}
							}

							if (check) {
								if (get.population('ye')) {
									if (game.players.length > 1) {
										check = false;
									}
								} else {
									if (
										hasunknown &&
										!game.hasPlayer(function (current) {
											return get.is.jun(current);
										})
									) {
										const players = game.players.concat(game.dead);
										let num = 0;

										for (const i of players) {
											if (i._group == group) {
												num++;
											}
										}

										if (num > players.length / 2) {
											check = false;
										}
									}
								}
							}
							if (check) {
								game.checkResult();
							} else if (!hasunknown) {
								const ids = [];
								const idmap = {};
								const idp = {};

								for (const i of game.players) {
									const id = i.identity;
									ids.add(id);
									if (!idmap[id]) {
										idmap[id] = 1;
									} else {
										idmap[id]++;
									}
									idp[id] = i;
								}

								if (ids.length != 2) {
									return;
								}
								const id1 = ids[0],
									id2 = ids[1];
								if (idmap[id1] > 1 && idmap[id2] > 1) {
									return;
								}
								if (idmap[id1] > 1 && id1 == 'ye') {
									return;
								}
								if (idmap[id2] > 1 && id2 == 'ye') {
									return;
								}
								if (idmap[id1] == 1) {
									idp[id1].showGiveup();
								}
								if (idmap[id2] == 1) {
									idp[id2].showGiveup();
								}
							}
						},
						checkResult() {
							_status.overing = true;

							for (const i of game.players) {
								i.showCharacter(2);
							}

							if (game.me.identity == 'ye') {
								if (game.me.classList.contains('dead')) {
									game.over('战斗失败');
								} else {
									game.over('战斗胜利');
								}
							} else {
								if (get.population(game.me.identity) == 0) {
									game.over('战斗失败');
								} else {
									game.over('战斗胜利');
								}
							}
							game.showIdentity();
						},
						checkOnlineResult(player) {
							if (player.identity == 'ye') {
								return player.isAlive();
							}
							return get.population(player.identity) > 0;
						},
						chooseCharacter() {
							const next = game.createEvent('chooseCharacter', false);
							next.showConfig = true;
							next.addPlayer = true;
							next.ai = function (player, list, back) {
								if (_status.brawl && _status.brawl.chooseCharacterAi) {
									if (_status.brawl.chooseCharacterAi(player, list, back) !== false) {
										return;
									}
								}
								for (let i = 0; i < list.length - 1; i++) {
									for (let j = i + 1; j < list.length; j++) {
										if (lib.character[list[i]][1] == lib.character[list[j]][1]) {
											player.init(list[i], list[j], true);
											if (back) {
												list.remove(player.name);
												list.remove(player.name2);

												for (const i of list) {
													back.push(i);
												}
											}
											return;
										}
									}
								}
							};
							next.setContent(function () {
								'step 0';
								const originalArr = ['wei', 'wei', 'shu', 'shu', 'wu', 'wu', 'qun', 'qun'];

								game.me.chooseControl(['wei0', 'shu0', 'wu0', 'qun0']).set('prompt', '<span style="font-family:chaozisheleishenbianjianfan;text-shadow: 0 0 3px #fff, 0 0 8px #00ffff, 0 0 13px #00ff00, 0 0 18px #ff0000; color: #ffffff; font-weight: bold;">请选择友方势力</span>');
								('step 1');
								event.control = result.control;

								game.me.chooseControl(['wei0', 'shu0', 'wu0', 'qun0']).set('prompt', '<span style="font-family:chaozisheleishenbianjianfan;text-shadow: 0 0 3px #fff, 0 0 8px #00ffff, 0 0 13px #ffff00, 0 0 18px #9900ff; color: #ffffff; font-weight: bold;">请选择敌方势力</span>');
								('step 2');
								function removeTrailingZero(str) {
									if (str.endsWith('0')) {
										return str.slice(0, -1);
									}
									return str;
								}
								game.me.siguosl = removeTrailingZero(event.control);

								const otherForces = [...Array(3).fill(removeTrailingZero(event.control)), ...Array(4).fill(removeTrailingZero(result.control))].randomSort();

								for (let i = 0, idx = 0; i < game.players.length; i++) {
									if (game.players[i] === game.me) {
										continue;
									}
									game.players[i].siguosl = otherForces[idx++];
								}
								ui.arena.classList.add('choose-character');
								const addSetting = function (dialog) {
									dialog.add('选择座位').classList.add('add-setting');
									const seats = document.createElement('table');
									seats.classList.add('add-setting');
									seats.style.margin = '0';
									seats.style.width = '100%';
									seats.style.position = 'relative';
									for (let i = 1; i <= game.players.length; i++) {
										const td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
										td.innerHTML = '<span>' + get.cnNumber(i, true) + '</span>';
										td.link = i - 1;
										seats.appendChild(td);
										td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
											if (_status.dragged) {
												return;
											}
											if (_status.justdragged) {
												return;
											}
											if (_status.cheat_seat) {
												_status.cheat_seat.classList.remove('bluebg');
												if (_status.cheat_seat == this) {
													delete _status.cheat_seat;
													return;
												}
											}
											this.classList.add('bluebg');
											_status.cheat_seat = this;
										});
									}
									dialog.content.appendChild(seats);
									if (game.me == game.zhu) {
										seats.previousSibling.style.display = 'none';
										seats.style.display = 'none';
									}

									dialog.add(ui.create.div('.placeholder.add-setting'));
									dialog.add(ui.create.div('.placeholder.add-setting'));
									if (get.is.phoneLayout()) {
										dialog.add(ui.create.div('.placeholder.add-setting'));
									}
								};
								const removeSetting = function () {
									const dialog = _status.event.dialog;
									if (dialog) {
										dialog.style.height = '';
										delete dialog._scrollset;
										const list = Array.from(dialog.querySelectorAll('.add-setting'));
										while (list.length) {
											list.shift().remove();
										}
										ui.update();
									}
								};
								event.addSetting = addSetting;
								event.removeSetting = removeSetting;

								const chosen = lib.config.continue_name || [];
								game.saveConfig('continue_name');
								event.chosen = chosen;

								var i;
								var list = {
									wei: [],
									shu: [],
									wu: [],
									qun: [],
								};
								for (const i in lib.character) {
									if (i.indexOf('gz_shibing') == 0) {
										continue;
									}
									if (chosen.includes(i)) {
										continue;
									}
									if (lib.filter.characterDisabled(i)) {
										continue;
									}
									if (list[lib.character[i][1]] && (lib.character[i][2] == 3 || lib.character[i][2] == 4 || lib.character[i][2] == 5)) {
										list[lib.character[i][1]].push(i);
									}
								}
								event.list = list[game.me.siguosl];
								event.zlist = list;
								_status.characterlist = event.list.slice(0);
								_status.yeidentity = [];
								if (_status.brawl && _status.brawl.chooseCharacterFilter) {
									event.list = _status.brawl.chooseCharacterFilter(event.list);
								}
								event.list.randomSort();
								var list;
								if (_status.brawl && _status.brawl.chooseCharacter) {
									list = _status.brawl.chooseCharacter(event.list, game.me);
								} else {
									list = game.getCharacterChoice(event.list, parseInt(get.config('choice_num')));
								}
								if (_status.auto) {
									event.ai(game.me, list);
									lib.init.onfree();
								} else if (chosen.length) {
									game.me.init(chosen[0], chosen[1], true);
									lib.init.onfree();
								} else {
									const dialog = ui.create.dialog('选择角色', 'hidden', [list, 'character']);
									if (!_status.brawl || !_status.brawl.noAddSetting) {
										if (get.config('change_identity')) {
											addSetting(dialog);
										}
									}
									const next = game.me.chooseButton(dialog, true, 2).set('onfree', true);
									next.filterButton = function (button) {
										if (ui.dialog.buttons.length <= 10) {
											for (const i of ui.dialog.buttons) {
												if (i != button) {
													if (
														lib.element.player.perfectPair.call({
															name1: button.link,
															name2: i.link,
														})
													) {
														button.classList.add('glow2');
													}
												}
											}
										}
										if (ui.selected.buttons.length == 0) {
											return true;
										}
										return lib.character[button.link][1] == lib.character[ui.selected.buttons[0].link][1];
									};
									next.switchToAuto = function () {
										event.ai(game.me, list);
										ui.arena.classList.remove('selecting');
									};
									const createCharacterDialog = function () {
										event.dialogxx = ui.create.characterDialog(
											'heightset',
											function (i) {
												if (i.indexOf('gz_shibing') == 0) {
													return true;
												}
												if (get.config('onlyguozhan')) {
													if (!lib.characterPack.mode_guozhan[i]) {
														return true;
													}
													if (get.config('junzhu')) {
														if (lib.junList.includes(i.slice(3))) {
															return true;
														}
													} else {
														if (get.is.jun(i)) {
															return true;
														}
													}
												}
											},
											get.config('onlyguozhanexpand') ? 'expandall' : undefined,
											get.config('onlyguozhan') ? 'onlypack:mode_guozhan' : undefined,
										);
										if (ui.cheat2) {
											ui.cheat2.addTempClass('controlpressdownx', 500);
											ui.cheat2.classList.remove('disabled');
										}
									};
									if (lib.onfree) {
										lib.onfree.push(createCharacterDialog);
									} else {
										createCharacterDialog();
									}
									ui.create.cheat2 = function () {
										ui.cheat2 = ui.create.control('自由选将', function () {
											if (this.dialog == _status.event.dialog) {
												if (game.changeCoin) {
													game.changeCoin(50);
												}
												this.dialog.close();
												_status.event.dialog = this.backup;
												this.backup.open();
												delete this.backup;
												game.uncheck();
												game.check();
												if (ui.cheat) {
													ui.cheat.addTempClass('controlpressdownx', 500);
													ui.cheat.classList.remove('disabled');
												}
											} else {
												if (game.changeCoin) {
													game.changeCoin(-10);
												}
												this.backup = _status.event.dialog;
												_status.event.dialog.close();
												_status.event.dialog = _status.event.parent.dialogxx;
												this.dialog = _status.event.dialog;
												this.dialog.open();
												game.uncheck();
												game.check();
												if (ui.cheat) {
													ui.cheat.classList.add('disabled');
												}
											}
										});
										if (lib.onfree) {
											ui.cheat2.classList.add('disabled');
										}
									};
									ui.create.cheat = function () {
										_status.createControl = ui.cheat2;
										ui.cheat = ui.create.control('更换', function () {
											if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
												return;
											}
											if (game.changeCoin) {
												game.changeCoin(-3);
											}
											event.list = event.list.concat(list);
											event.list.randomSort();

											list = game.getCharacterChoice(event.list, parseInt(get.config('choice_num')));
											const buttons = ui.create.div('.buttons');
											const node = _status.event.dialog.buttons[0].parentNode;
											_status.event.dialog.buttons = ui.create.buttons(list, 'character', buttons);
											_status.event.dialog.content.insertBefore(buttons, node);
											buttons.addTempClass('start');
											node.remove();
											game.uncheck();
											game.check();
										});
										delete _status.createControl;
									};
									if (!_status.brawl || !_status.brawl.chooseCharacterFixed) {
										if (!ui.cheat && get.config('change_choice')) {
											ui.create.cheat();
										}
										if (!ui.cheat2 && get.config('free_choose')) {
											ui.create.cheat2();
										}
									}
								}
								('step 3');
								if (ui.cheat) {
									ui.cheat.close();
									delete ui.cheat;
								}
								if (ui.cheat2) {
									ui.cheat2.close();
									delete ui.cheat2;
								}
								if (result.buttons) {
									game.me.init(result.buttons[0].link, result.buttons[1].link, true);
								}
								game.addRecentCharacter(game.me.name, game.me.name2);
								event.list.remove(game.me.name);
								event.list.remove(game.me.name2);

								for (const i of game.players) {
									if (i != game.me) {
										const isls = event.zlist[i.siguosl].randomSort();
										event.ai(i, isls.splice(0, parseInt(get.config('choice_num'))), isls);
									}
								}

								for (const i of game.players) {
									i.classList.add('unseen');
									i.classList.add('unseen2');
									_status.characterlist.remove(i.name);
									_status.characterlist.remove(i.name2);
									if (i != game.me) {
										i.node.identity.firstChild.innerHTML = '';
										i.node.identity.dataset.color = 'unknown';
										i.node.identity.classList.add('guessing');
									}
									i.hiddenSkills = lib.character[i.name][3].slice(0);
									const hiddenSkills2 = lib.character[i.name2][3];

									for (const j of hiddenSkills2) {
										i.hiddenSkills.add(j);
									}

									for (let j = 0; j < i.hiddenSkills.length; j++) {
										if (!lib.skill[i.hiddenSkills[j]]) {
											i.hiddenSkills.splice(j--, 1);
										}
									}
									i.group = 'unknown';
									i.sex = 'unknown';
									i.name1 = i.name;
									i.name = 'unknown';
									i.identity = 'unknown';
									i.node.name.show();
									i.node.name2.show();
									i._group = lib.character[i.name1][1];

									for (const j of i.hiddenSkills) {
										i.addSkillTrigger(j, true);
									}
								}

								setTimeout(function () {
									ui.arena.classList.remove('choose-character');
								}, 500);
							});
						},
						chooseCharacterOL() {
							const next = game.createEvent('chooseCharacter', false);
							next.setContent(function () {
								'step 0';
								game.broadcastAll(function () {
									ui.arena.classList.add('choose-character');
								});
								let list;
								if (lib.configOL.onlyguozhan) {
									list = [];
									for (const i in lib.characterPack.mode_guozhan) {
										if (i.indexOf('gz_shibing') == 0) {
											continue;
										}
										if (lib.configOL.junzhu) {
											if (lib.junList.includes(i.slice(3))) {
												continue;
											}
										} else {
											if (get.is.jun(i)) {
												continue;
											}
										}
										list.push(i);
									}
								} else {
									list = get.charactersOL();
								}
								_status.characterlist = list.slice(0);
								_status.yeidentity = [];
								event.list = list.slice(0);
								const list2 = [];
								let num;
								if (lib.configOL.number * 6 > list.length) {
									num = 5;
								} else if (lib.configOL.number * 7 > list.length) {
									num = 6;
								} else {
									num = 7;
								}
								const filterButton = function (button) {
									if (ui.dialog) {
										if (ui.dialog.buttons.length <= 10) {
											for (const i of ui.dialog.buttons) {
												if (i != button) {
													if (
														lib.element.player.perfectPair.call({
															name1: button.link,
															name2: i.link,
														})
													) {
														button.classList.add('glow2');
													}
												}
											}
										}
									}
									if (ui.selected.buttons.length == 0) {
										return true;
									}
									if (!lib.character[button.link]) {
										return false;
									}
									return lib.character[button.link][1] == lib.character[ui.selected.buttons[0].link][1];
								};
								list.randomSort();

								for (const i of game.players) {
									list2.push([
										i,
										['选择角色', [game.getCharacterChoice(list, num), 'character']],
										2,
										true,
										function () {
											return Math.random();
										},
										filterButton,
									]);
								}

								game.me
									.chooseButtonOL(list2, function (player, result) {
										if (game.online || player == game.me) {
											player.init(result.links[0], result.links[1], false);
										}
									})
									.set('switchToAuto', function () {
										_status.event.result = 'ai';
									})
									.set('processAI', function () {
										const buttons = _status.event.dialog.buttons;
										for (let i = 0; i < buttons.length - 1; i++) {
											for (let j = i + 1; j < buttons.length; j++) {
												if (lib.character[buttons[i].link][1] == lib.character[buttons[j].link][1]) {
													return {
														bool: true,
														links: [buttons[i].link, buttons[j].link],
													};
												}
											}
										}
									});
								('step 1');
								let sort = true;
								for (const i in result) {
									if (result[i] && result[i].links) {
										for (const j of result[i].links) {
											event.list.remove(j);
										}
									}
								}
								for (const i in result) {
									if (result[i] == 'ai' || !result[i].links || result[i].links.length < 1) {
										if (sort) {
											sort = false;
											event.list.randomSort();
										}
										result[i] = [event.list.shift()];
										const group = lib.character[result[i][0]][1];
										for (var j = 0; j < event.list.length; j++) {
											if (lib.character[event.list[j]][1] == group) {
												result[i].push(event.list[j]);
												event.list.splice(j--, 1);
												break;
											}
										}
									} else {
										result[i] = result[i].links;
									}
									if (!lib.playerOL[i].name) {
										lib.playerOL[i].init(result[i][0], result[i][1], false);
									}
								}

								for (const i of game.players) {
									_status.characterlist.remove(i.name);
									_status.characterlist.remove(i.name2);
									i.hiddenSkills = lib.character[i.name][3].slice(0);
									const hiddenSkills2 = lib.character[i.name2][3];

									for (const j of hiddenSkills2) {
										i.hiddenSkills.add(j);
									}

									for (var j = 0; j < i.hiddenSkills.length; j++) {
										if (!lib.skill[i.hiddenSkills[j]]) {
											i.hiddenSkills.splice(j--, 1);
										}
									}

									for (const j of i.hiddenSkills) {
										i.name1 = i.name;
										i.addSkillTrigger(j, true);
									}
								}

								game.broadcastAll(function (result) {
									for (const i in result) {
										if (!lib.playerOL[i].name) {
											lib.playerOL[i].init(result[i][0], result[i][1], false);
										}
									}

									for (const i of game.players) {
										i.classList.add('unseen');
										i.classList.add('unseen2');
										if (i != game.me) {
											i.node.identity.firstChild.innerHTML = '';
											i.node.identity.dataset.color = 'unknown';
											i.node.identity.classList.add('guessing');
										}
										i.group = 'unknown';
										i.sex = 'unknown';
										i.name1 = i.name;
										i.name = 'unknown';
										i.identity = 'unknown';
										i.node.name.show();
										i.node.name2.show();
										i._group = lib.character[i.name1][1];
									}

									setTimeout(function () {
										ui.arena.classList.remove('choose-character');
									}, 500);
								}, result);
							});
						},
					},
					ui: {
						click: {},
					},
					translate: {
						ye: '野',
						wei0: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-size:24px;font-weight:700;text-shadow:0 0 6px rgba(0,150,255,0.95),0 0 12px rgba(0,120,255,0.75),0 0 20px rgba(0,100,255,0.55),0 0 32px rgba(0,80,255,0.38);">魏</span>',
						shu0: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-size:24px;font-weight:700;text-shadow:0 0 6px rgba(255,80,80,0.95),0 0 12px rgba(220,40,40,0.78),0 0 20px rgba(200,30,30,0.56),0 0 30px rgba(160,20,20,0.36);">蜀</span>',
						wu0: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-size:24px;font-weight:700;text-shadow:0 0 6px rgba(80,220,120,0.95),0 0 12px rgba(60,200,100,0.75),0 0 20px rgba(40,170,80,0.56),0 0 30px rgba(20,140,60,0.36);">吴</span>',
						qun0: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-size:24px;font-weight:700;text-shadow:0 0 6px rgba(160,160,160,0.95),0 0 12px rgba(140,140,140,0.78),0 0 20px rgba(110,110,110,0.56),0 0 30px rgba(80,80,80,0.34);">群</span>',
						ye2: '野心家',
						wei2: '魏国',
						shu2: '蜀国',
						wu2: '吴国',
						qun2: '群雄',
						bumingzhi: '不明置',
						mingzhizhujiang: '明置主将',
						mingzhifujiang: '明置副将',
						tongshimingzhi: '同时明置',
						mode_guozhan_character_config: '国战武将',
						_zhenfazhaohuan: '阵法召唤',
						_zhenfazhaohuan_info: '由拥有阵法技的角色发起,满足此阵法技条件的未确定势力角色均可按逆时针顺序一次明置其一张武将牌(响应阵法召唤),以发挥阵法技的效果',

						gz_jun_liubei: '君刘备',
						gz_jun_zhangjiao: '君张角',

						wuxin: '悟心',
						wuxin_info: '摸牌阶段开始时,你可以观看牌堆顶的X张牌(X为群势力角色的数量),然后将这些牌以任意顺序置于牌堆顶',
						hongfa: '弘法',
						_hongfa: '天兵',
						_hongfa2: '天兵',
						hongfa_info: '君主技,锁定技,当此武将牌明置时,你获得<黄巾天兵符>;准备阶段开始时,若没有<天兵>,你将牌堆顶的X张牌置于<黄巾天兵符>上,称为<天兵>(X为群势力角色的数量)',
						wendao: '问道',
						wendao_info: '出牌阶段限一次,你可以弃置一张红色牌,获得弃牌堆里或场上的一张【太平要术】',
						huangjintianbingfu: '黄巾天兵符',
						huangjintianbingfu_bg: '符',
						huangjintianbingfu_info: '锁定技 :当你计算群势力角色数时,每一张<天兵>均可视为一名群势力角色.<br>每当你失去体力时,你可改为将一张<天兵>置入弃牌堆.<br>与你势力相同的角色可将一张<天兵>当【杀】使用或打出',
						wuhujiangdaqi: '五虎将大旗',
						wuhujiangdaqi_bg: '旗',
						wuhujiangdaqi_info: '存活的蜀势力角色的技能按以下规则改动:<br><strong>武圣</strong>:将<红色牌>改为<任意牌><br><strong>咆哮</strong>:增加描述<你使用的【杀】无视其他角色的防具><br><strong>龙胆</strong>:增加描述<你每发动一次‘龙胆’便摸一张牌><br><strong>烈弓</strong>:增加描述<你的攻击范围+1><br><strong>铁骑</strong>:将<若结果为红色>改为<若结果不为♠️️️️>',
						zhangwu: '章武',
						zhangwu_info: '锁定技.当【飞龙夺凤】进入弃牌堆或其他角色的装备区时,你获得之.当你失去【飞龙夺风】时,展示之,然后将此牌置于牌堆底并摸两张牌',
						shouyue: '授钺',
						shouyue_info: '君主技.只要此武将牌处于明置状态,你便拥有<五虎将大旗>',
						jizhao: '激诏',
						jizhao_bg: '诏',
						jizhao_info: '限定技.当你处于濒死状态时,你可以将手牌补至体力上限,体力回复至2点,失去技能<授钺>并获得技能<仁德>',
						gzshoucheng: '守成',
						gzshoucheng_info: '当与你势力相同的一名角色于其回合外失去最后手牌时,你可以令其摸一张牌',
						gzmingshi: '名士',
						gzmingshi_info: '锁定技,当你受到伤害时,若伤害来源有暗置的武将牌,此伤害-1',
						fengshi: '锋矢',
						_fengshi: '锋矢',
						fengshi_info: '阵法技,在同一个围攻关系中,若你是围攻角色,则你或另一名围攻角色使用【杀】指定被围攻角色为目标后,可令该角色弃置装备区里的一张牌',
						gzsuishi: '随势',
						gzsuishi_info: '锁定技,当其他角色进入濒死状态时,若伤害来源与你势力相同,你摸一张牌;当其他角色死亡时,若其与你势力相同,你失去1点体力',
						baoling: '暴凌',
						baoling_info: '主将技,锁定技,出牌阶段结束时,若你有副将,则你移除副将,然后加3点体力上限,回复3点体力,并获得<崩坏>',
						yingyang: '鹰扬',
						yingyang_info: '当你拼点的牌亮出后,你可以令此牌的点数+3或-3',
						hunshang: '魂殇',
						hunshang_info: '副将技,此武将牌减少半个阴阳鱼;准备阶段,若你的体力值不大于1,则你本回合获得<英姿>和<英魂>',
						gzguixiu: '闺秀',
						gzguixiu_info: '当你明置此武将牌时,你摸两张牌;当你失去此技能时,你回复1点体力',
						gzcunsi: '存嗣',
						gzcunsi_info: '出牌阶段,你可以移除此武将牌并选择一名角色,然后其获得技能<勇决>,若你没有获得<勇决>,则获得<勇决>的角色摸两张牌',
						gzyongjue: '勇决',
						gzyongjue_info: '若与你势力相同的一名角色于其回合内使用的第一张牌为【杀】,则该角色可以在此【杀】结算完成后获得之',
						gzqianxi: '潜袭',
						gzqianxi_info: '准备阶段开始时,你可以进行判定,然后你选择距离为1的一名角色,直到回合结束,该角色不能使用或打出与结果颜色相同的手牌',
						gzshangyi: '尚义',
						gzshangyi_info: '出牌阶段限一次,你可以令一名其他角色观看你的手牌.若如此做,你选择一项:1.观看其手牌并可以弃置其中的一张黑色牌;2.观看其所有暗置的武将牌',
						niaoxiang: '鸟翔',
						_niaoxiang: '鸟翔',
						niaoxiang_info: '阵法技,在同一个围攻关系中,若你是围攻角色,则你或另一名围攻角色使用【杀】指定被围攻角色为目标后,你令该角色需依次使用两张【闪】才能抵消',
						yicheng: '疑城',
						yicheng_info: '当与你势力相同的一名角色成为【杀】的目标后,你可以令该角色摸一张牌然后弃置一张牌',
						yizhi: '遗志',
						yizhi_info: '副将技,此武将牌上单独的阴阳鱼个数-1.若你的主将拥有技能<观星>,则将其描述中的X改为5;若你的主将没有技能<观星>,则你拥有技能<观星>',
						tianfu: '天覆',
						tianfu_info: '主将技,阵法技,若当前回合角色与你处于同一队列,你拥有技能<看破>',
						ziliang: '资粮',
						ziliang_info: '副将技,当与你势力相同的一名角色受到伤害后,你可以将一张<田>交给该角色',
						gzjixi: '急袭',
						gzjixi_info: '主将技,此武将牌减少半个阴阳鱼;你可以将一张<田>当【顺手牵羊】使用',
						huyuan: '护援',
						huyuan_info: '结束阶段开始时,你可以将一张装备牌置入一名角色的装备区,然后你可以弃置该角色距离为1的一名角色的一张牌',
						heyi: '鹤翼',
						heyi_info: '阵法技,与你处于同一队列的其他角色防御距离+1',
						gz_shibing1wei: '魏兵',
						gz_shibing2wei: '魏兵',
						gz_shibing1shu: '蜀兵',
						gz_shibing2shu: '蜀兵',
						gz_shibing1wu: '吴兵',
						gz_shibing2wu: '吴兵',
						gz_shibing1qun: '群兵',
						gz_shibing2qun: '群兵',
						gzduanchang: '断肠',
						gzduanchang_info: '锁定技,当你死亡时,你令击杀你的角色失去一张武将牌的所有技能',
						gzweimu: '帷幕',
						gzweimu_info: '锁定技,当你成为黑色锦囊牌的目标时,则取消之',
						gzqianxun: '谦逊',
						gzqianxun_info: '锁定技,当你成为顺手牵羊或乐不思蜀的目标时,则取消之',
						gzkongcheng: '空城',
						gzkongcheng_info: '锁定技,当你成为【杀】或【决斗】的目标时,若你没有手牌,则取消之',
						gzxiaoji: '枭姬',
						gzxiaoji_info: '当你失去装备区里的牌后,你可以摸两张牌',
						gzrende: '仁德',
						gzrende_info: '出牌阶段,你可以将任意张手牌交给其他角色,然后若你于此阶段内给出第三张<仁德>牌时,你回复1点体力',
						gzzhiheng: '制衡',
						gzzhiheng_info: '出牌阶段限一次,你可以弃置至多X张牌(X为你的体力上限),然后摸等量的牌',
						huoshui: '祸水',
						huoshui_info: '出牌阶段,你可以明置此武将牌;你的回合内,若此武将牌处于明置状态,其他角色不能明置其武将牌',
						qingcheng: '倾城',
						qingcheng_info: '出牌阶段,你可以弃置一张装备牌并选择一名两张武将牌均明置的其他角色,你暗置其一张武将牌',
						duoshi: '度势',
						duoshi_info: '出牌阶段限四次,你可以将一张红色手牌当【以逸待劳】使用',
						gzxiaoguo: '骁果',
						gzxiaoguo_info: '其他角色的结束阶段开始时,你可以弃置一张基本牌,令该角色选择一项:1.弃置一张装备牌;2.受到你对其造成的1点伤害',
						gzduanliang: '断粮',
						gzduanliang_info: '你可以将一张黑色基本牌或黑色装备牌当【兵粮寸断】使用;你可以对距离为2的角色使用【兵粮寸断】',
					},
					junList: ['liubei', 'zhangjiao'],
					guozhanPile: [
						['spade', 7, 'sha'],
						['spade', 8, 'sha'],
						['spade', 8, 'sha'],
						['spade', 9, 'sha'],
						['spade', 9, 'sha'],
						['spade', 10, 'sha'],
						['spade', 10, 'sha'],
						['club', 2, 'sha'],
						['club', 3, 'sha'],
						['club', 4, 'sha'],
						['club', 5, 'sha'],
						['club', 6, 'sha'],
						['club', 7, 'sha'],
						['club', 8, 'sha'],
						['club', 8, 'sha'],
						['club', 9, 'sha'],
						['club', 9, 'sha'],
						['club', 10, 'sha'],
						['club', 10, 'sha'],
						['club', 11, 'sha'],
						['club', 11, 'sha'],
						['heart', 10, 'sha'],
						['heart', 10, 'sha'],
						['heart', 11, 'sha'],
						['diamond', 6, 'sha'],
						['diamond', 7, 'sha'],
						['diamond', 8, 'sha'],
						['diamond', 9, 'sha'],
						['diamond', 10, 'sha'],
						['diamond', 13, 'sha'],
						['heart', 2, 'shan'],
						['heart', 2, 'shan'],
						['heart', 13, 'shan'],
						['diamond', 2, 'shan'],
						['diamond', 2, 'shan'],
						['diamond', 3, 'shan'],
						['diamond', 4, 'shan'],
						['diamond', 5, 'shan'],
						['diamond', 6, 'shan'],
						['diamond', 7, 'shan'],
						['diamond', 8, 'shan'],
						['diamond', 9, 'shan'],
						['diamond', 10, 'shan'],
						['diamond', 11, 'shan'],
						['diamond', 11, 'shan'],
						['heart', 3, 'tao'],
						['heart', 4, 'tao'],
						['heart', 6, 'tao'],
						['heart', 7, 'tao'],
						['heart', 8, 'tao'],
						['heart', 9, 'tao'],
						['heart', 12, 'tao'],
						['diamond', 12, 'tao'],

						['spade', 2, 'bagua'],
						['club', 2, 'bagua'],
						['spade', 5, 'jueying'],
						['club', 5, 'dilu'],
						['heart', 13, 'zhuahuang'],
						['heart', 5, 'chitu'],
						['spade', 13, 'dawan'],
						['diamond', 13, 'zixin'],
						['club', 1, 'zhuge'],
						['diamond', 1, 'zhuge'],
						['spade', 2, 'feilongduofeng'],
						['spade', 6, 'qinggang'],
						['spade', 5, 'qinglong'],
						['spade', 12, 'zhangba'],
						['diamond', 5, 'guanshi'],
						['diamond', 12, 'fangtian'],
						['heart', 5, 'qilin'],

						['heart', 3, 'wugu'],
						['heart', 4, 'wugu'],
						['heart', 1, 'taoyuan'],
						['spade', 7, 'nanman'],
						['spade', 13, 'nanman'],
						['club', 7, 'nanman'],
						['heart', 1, 'wanjian'],
						['spade', 1, 'juedou'],
						['club', 1, 'juedou'],
						['diamond', 1, 'juedou'],
						['heart', 7, 'wuzhong'],
						['heart', 8, 'wuzhong'],
						['heart', 9, 'wuzhong'],
						['heart', 11, 'wuzhong'],
						['spade', 3, 'shunshou'],
						['spade', 4, 'shunshou'],
						['spade', 11, 'shunshou'],
						['diamond', 3, 'shunshou'],
						['diamond', 4, 'shunshou'],
						['spade', 3, 'guohe'],
						['spade', 4, 'guohe'],
						['spade', 12, 'guohe'],
						['club', 3, 'guohe'],
						['club', 4, 'guohe'],
						['heart', 12, 'guohe'],
						['club', 12, 'jiedao'],
						['club', 13, 'jiedao'],
						['spade', 11, 'wuxie'],
						['club', 12, 'wuxie'],
						['club', 13, 'wuxie'],
						['spade', 6, 'lebu'],
						['club', 6, 'lebu'],
						['heart', 6, 'lebu'],
						['spade', 1, 'shandian', 'thunder'],
						['spade', 2, 'hanbing'],
						['club', 2, 'renwang'],
						['heart', 12, 'shandian', 'thunder'],
						['diamond', 12, 'wuxie'],

						['heart', 4, 'sha', 'fire'],
						['heart', 7, 'sha', 'fire'],
						['heart', 10, 'sha', 'fire'],
						['diamond', 4, 'sha', 'fire'],
						['diamond', 5, 'sha', 'fire'],
						['spade', 4, 'sha', 'thunder'],
						['spade', 5, 'sha', 'thunder'],
						['spade', 6, 'sha', 'thunder'],
						['spade', 7, 'sha', 'thunder'],
						['spade', 8, 'sha', 'thunder'],
						['club', 5, 'sha', 'thunder'],
						['club', 6, 'sha', 'thunder'],
						['club', 7, 'sha', 'thunder'],
						['club', 8, 'sha', 'thunder'],
						['heart', 8, 'shan'],
						['heart', 9, 'shan'],
						['heart', 11, 'shan'],
						['heart', 12, 'shan'],
						['diamond', 6, 'shan'],
						['diamond', 7, 'shan'],
						['diamond', 8, 'shan'],
						['diamond', 10, 'shan'],
						['diamond', 11, 'shan'],
						['heart', 5, 'tao'],
						['heart', 6, 'tao'],
						['diamond', 2, 'tao'],
						['diamond', 3, 'tao'],
						['diamond', 9, 'jiu'],
						['spade', 3, 'jiu'],
						['spade', 9, 'jiu'],
						['club', 3, 'jiu'],
						['club', 9, 'jiu'],

						['diamond', 13, 'hualiu'],
						['club', 1, 'baiyin'],
						['spade', 2, 'tengjia', 'fire'],
						['club', 2, 'tengjia', 'fire'],
						['spade', 1, 'guding'],
						['diamond', 1, 'zhuque', 'fire'],

						['heart', 2, 'huogong', 'fire'],
						['heart', 3, 'huogong', 'fire'],
						['diamond', 12, 'huogong', 'fire'],
						['spade', 11, 'tiesuo'],
						['spade', 12, 'tiesuo'],
						['club', 10, 'tiesuo'],
						['club', 11, 'tiesuo'],
						['club', 12, 'tiesuo'],
						['club', 13, 'tiesuo'],
						['heart', 13, 'wuxie'],
						['heart', 13, 'wuxie'],
						['spade', 13, 'wuxie'],
						['spade', 10, 'bingliang'],
						['club', 4, 'bingliang'],

						['heart', 9, 'yuanjiao'],
						['club', 3, 'zhibi'],
						['club', 4, 'zhibi'],
						['diamond', 4, 'yiyi'],
						['heart', 11, 'yiyi'],
						['diamond', 6, 'wuliu'],
						['diamond', 12, 'sanjian'],
						['heart', 3, 'jingfanma'],
						['spade', 4, 'shunshou'],
						['spade', 12, 'guohe'],
						['spade', 11, 'wuxie'],
						['spade', 3, 'huoshaolianying', 'fire'],
						['club', 11, 'huoshaolianying', 'fire'],
						['heart', 12, 'huoshaolianying', 'fire'],
						['club', 2, 'huxinjing'],
						['heart', 2, 'diaohulishan'],
						['diamond', 10, 'diaohulishan'],
						['heart', 1, 'lianjunshengyan'],
						['club', 3, 'chiling'],
						['spade', 12, 'lulitongxin'],
						['club', 10, 'lulitongxin'],
						['club', 12, 'shuiyanqijunx'],
						['heart', 13, 'shuiyanqijunx'],
						['spade', 1, 'xietianzi'],
						['diamond', 1, 'xietianzi'],
						['diamond', 4, 'xietianzi'],
						['club', 1, 'yuxi'],
						['heart', 3, 'taipingyaoshu'],
					],
					element: {
						content: {
							zhulian() {
								player.popup('珠联璧合');
								game.log(player, '发动了【珠联璧合】');
								player.chooseDrawRecover(2, true, '珠联璧合:摸两张牌或回复一点体力');
							},
						},
						player: {
							getModeState() {
								return {
									unseen: this.isUnseen(0),
									unseen2: this.isUnseen(1),
								};
							},
							setModeState(info) {
								if (info.mode.unseen) {
									this.classList.add('unseen');
								}
								if (info.mode.unseen2) {
									this.classList.add('unseen2');
								}
								if (!info.name) {
									return;
								}

								this.init(info.name1, info.name2, false);
								this.name1 = info.name1;
								this.name = info.name;
								this.node.name_seat = ui.create.div('.name.name_seat', get.verticalStr(lib.translate[this.name].slice(0, 3)), this);
								if (info.identityShown) {
									this.setIdentity(info.identity);
									this.node.identity.classList.remove('guessing');
								} else if (this != game.me) {
									this.node.identity.firstChild.innerHTML = '';
									this.node.identity.dataset.color = 'unknown';
									this.node.identity.classList.add('guessing');
								}
							},
							dieAfter(source) {
								this.showCharacter(2);
								if (get.is.jun(this.name1)) {
									const yelist = [];

									for (const i of game.players) {
										if (i.identity == this.identity) {
											yelist.push(i);
										}
									}

									game.broadcastAll(function (list) {
										for (const i of list) {
											i.identity = 'ye';
											i.setIdentity();
										}
									}, yelist);
									_status.yeidentity.add(this.identity);
								}
								if (source && source.identity != 'unknown') {
									if (this.identity == 'ye') {
										source.draw(1);
									} else if (this.identity != source.identity) {
										source.draw(get.population(this.identity) + 1);
									} else {
										source.discard(source.getCards('he'));
									}
								}
								game.tryResult();
							},
							viewCharacter(target, num) {
								if (num != 0 && num != 1) {
									num = 2;
								}
								if (!target.isUnseen(num)) {
									return;
								}
								const next = game.createEvent('viewCharacter');
								next.player = this;
								next.target = target;
								next.num = num;
								next.setContent(function () {
									let content,
										str = get.translation(target) + '的';
									if (event.num == 0 || !target.isUnseen(1)) {
										content = [str + '主将', [[target.name1], 'character']];
										game.log(player, '观看了', target, '的主将');
									} else if (event.num == 1 || !target.isUnseen(0)) {
										content = [str + '副将', [[target.name2], 'character']];
										game.log(player, '观看了', target, '的副将');
									} else {
										content = [str + '主将和副将', [[target.name1, target.name2], 'character']];
										game.log(player, '观看了', target, '的主将和副将');
									}
									player.chooseControl('ok').set('dialog', content);
								});
							},
							checkViceSkill(skill, disable) {
								if (game.expandSkills(lib.character[this.name2][3].slice(0)).includes(skill)) {
									return true;
								} else {
									if (disable !== false) {
										this.awakenSkill(skill);
									}
									return false;
								}
							},
							checkMainSkill(skill, disable) {
								if (game.expandSkills(lib.character[this.name1][3].slice(0)).includes(skill)) {
									return true;
								} else {
									if (disable !== false) {
										this.awakenSkill(skill);
									}
									return false;
								}
							},
							removeMaxHp() {
								if (game.online) {
									return;
								}
								if (typeof this.singleHp == 'boolean') {
									if (this.singleHp) {
										this.singleHp = false;
									} else {
										this.singleHp = true;
										this.maxHp--;
									}
								} else {
									this.maxHp--;
								}
							},
							hideCharacter(num, log) {
								if (this.isUnseen(2)) {
									return;
								}
								game.addVideo('hideCharacter', this, num);
								let skills;
								switch (num) {
									case 0:
										if (log !== false) {
											game.log(this, '暗置了主将' + get.translation(this.name1));
										}
										skills = lib.character[this.name][3];
										this.name = this.name2;
										this.sex = lib.character[this.name2][0];
										this.classList.add('unseen');
										break;
									case 1:
										if (log !== false) {
											game.log(this, '暗置了副将' + get.translation(this.name2));
										}
										skills = lib.character[this.name2][3];
										this.classList.add('unseen2');
										break;
								}
								game.broadcast(
									function (player, name, sex, num, skills) {
										player.name = name;
										player.sex = sex;
										switch (num) {
											case 0:
												player.classList.add('unseen');
												break;
											case 1:
												player.classList.add('unseen2');
												break;
										}

										for (const i of skills) {
											if (!player.skills.includes(i)) {
												continue;
											}
											player.hiddenSkills.add(i);
											player.skills.remove(i);
										}
									},
									this,
									this.name,
									this.sex,
									num,
									skills,
								);

								for (const i of skills) {
									if (!this.skills.includes(i)) {
										continue;
									}
									this.hiddenSkills.add(i);
									const info = get.info(i);
									if (info.ondisable && info.onremove) {
										info.onremove(this);
									}
									this.skills.remove(i);
								}

								this.checkConflict();
							},
							removeCharacter(num) {
								const name = this['name' + (num + 1)];
								const info = lib.character[name];
								if (!info) {
									return;
								}
								const to = 'gz_shibing' + (info[0] == 'male' ? 1 : 2) + info[1];
								game.log(this, '移除了' + (num ? '副将' : '主将'), '#b' + name);
								this.reinit(name, to, false);
								this.showCharacter(num, false);
							},
							hasMainCharacter() {
								return this.name1.indexOf('gz_shibing') != 0;
							},
							hasViceCharacter() {
								return this.name2.indexOf('gz_shibing') != 0;
							},
							showCharacter(num, log) {
								if (num == 0 && !this.isUnseen(0)) {
									return;
								}
								if (num == 1 && !this.isUnseen(1)) {
									return;
								}
								if (!this.isUnseen(2)) {
									return;
								}
								game.addVideo('showCharacter', this, num);
								if (this.identity == 'unknown') {
									this.group = lib.character[this.name1][1];
									if (get.is.jun(this) && this.isAlive()) {
										this.identity = this.group;
										const yelist = [];

										for (const i of game.players) {
											if (i.identity == 'ye' && i._group == this.group) {
												yelist.push(i);
											}
										}

										game.broadcastAll(
											function (list, group) {
												for (const i of list) {
													i.identity = group;
													i.setIdentity();
												}
											},
											yelist,
											this.group,
										);
									} else if (this.wontYe()) {
										this.identity = this.group;
									} else {
										this.identity = 'ye';
									}
									this.setIdentity(this.identity);
									this.ai.shown = 1;
									this.node.identity.classList.remove('guessing');

									if (_status.clickingidentity && _status.clickingidentity[0] == this) {
										for (let i = 0; i < _status.clickingidentity[1].length; i++) {
											_status.clickingidentity[1][i].delete();
											_status.clickingidentity[1][i].style.transform = '';
										}
										delete _status.clickingidentity;
									}
									game.addVideo('setIdentity', this, this.identity);
								}
								let skills;
								switch (num) {
									case 0:
										if (log !== false) {
											game.log(this, '展示了主将', '#b' + this.name1);
										}
										this.name = this.name1;
										skills = lib.character[this.name][3];
										this.sex = lib.character[this.name][0];
										this.classList.remove('unseen');
										break;
									case 1:
										if (log !== false) {
											game.log(this, '展示了副将', '#b' + this.name2);
										}
										skills = lib.character[this.name2][3];
										if (this.sex == 'unknown') {
											this.sex = lib.character[this.name2][0];
										}
										if (this.name.indexOf('unknown') == 0) {
											this.name = this.name2;
										}
										this.classList.remove('unseen2');
										break;
									case 2:
										if (log !== false) {
											game.log(this, '展示了主将', '#b' + this.name1, '、副将', '#b' + this.name2);
										}
										this.name = this.name1;
										skills = lib.character[this.name][3].concat(lib.character[this.name2][3]);
										this.sex = lib.character[this.name][0];
										this.classList.remove('unseen');
										this.classList.remove('unseen2');
										break;
								}
								game.broadcast(
									function (player, name, sex, num, identity) {
										player.identityShown = true;
										player.name = name;
										player.sex = sex;
										player.node.identity.classList.remove('guessing');
										switch (num) {
											case 0:
												player.classList.remove('unseen');
												break;
											case 1:
												player.classList.remove('unseen2');
												break;
											case 2:
												player.classList.remove('unseen');
												player.classList.remove('unseen2');
												break;
										}
										player.ai.shown = 1;
										player.identity = identity;
										player.setIdentity(identity);
										if (_status.clickingidentity && _status.clickingidentity[0] == player) {
											for (let i = 0; i < _status.clickingidentity[1].length; i++) {
												_status.clickingidentity[1][i].delete();
												_status.clickingidentity[1][i].style.transform = '';
											}
											delete _status.clickingidentity;
										}
									},
									this,
									this.name,
									this.sex,
									num,
									this.identity,
								);
								this.identityShown = true;
								const initdraw = parseInt(get.config('initshow_draw'));
								if (!_status.initshown && !_status.overing && initdraw && this.isAlive() && _status.mode != 'mingjiang') {
									this.popup('首亮');
									game.log(this, '首先明置武将,得到奖励');
									game.log(this, '摸了' + get.cnNumber(initdraw) + '张牌');
									this.draw(initdraw).log = false;
									_status.initshown = true;
								}

								for (const i of skills) {
									this.hiddenSkills.remove(i);
									this.addSkill(i);
								}

								this.checkConflict();
								if (!this.isUnseen(2) && !this._mingzhied) {
									this._mingzhied = true;
									if (this.singleHp) {
										this.doubleDraw();
									}
									if (this.perfectPair()) {
										const next = game.createEvent('guozhanDraw');
										next.player = this;
										next.setContent('zhulian');
									}
								}
							},
							wontYe() {
								const group = lib.character[this.name1][1];
								if (_status.yeidentity && _status.yeidentity.includes(group)) {
									return false;
								}
								if (get.zhu(this, null, true)) {
									return true;
								}
								return get.totalPopulation(group) + 1 <= get.population() / 2;
							},
							perfectPair() {
								if (_status.connectMode) {
									if (!lib.configOL.zhulian) {
										return false;
									}
								} else {
									if (!get.config('zhulian')) {
										return false;
									}
								}
								let name1 = this.name1;
								let name2 = this.name2;
								if (name1.indexOf('gz_shibing') == 0) {
									return false;
								}
								if (name2.indexOf('gz_shibing') == 0) {
									return false;
								}
								if (lib.character[name1][1] != lib.character[name2][1]) {
									return false;
								}
								if (get.is.jun(this.name1)) {
									return true;
								}
								const list = ['re', 'diy', 'sp', 'jsp', 'shen', 'jg', 'xin', 'old', 'gz'];

								for (const i of list) {
									if (name1.indexOf(i + '_') == 0) {
										name1 = name1.slice(i.length + 1);
									}
									if (name2.indexOf(i + '_') == 0) {
										name2 = name2.slice(i.length + 1);
									}
								}

								if (lib.perfectPair[name1] && lib.perfectPair[name1].includes(name2)) {
									return true;
								}
								if (lib.perfectPair[name2] && lib.perfectPair[name2].includes(name1)) {
									return true;
								}
								return false;
							},
							siege(player) {
								if (this.identity == 'unknown' || this.identity == 'ye' || this.hasSkill('undist')) {
									return false;
								}
								if (!player) {
									const next = this.next;
									if (next && next.sieged()) {
										return true;
									}
									const previous = this.previous;
									if (previous && previous.sieged()) {
										return true;
									}
									return false;
								} else {
									return player.sieged() && (player.next == this || player.previous == this);
								}
							},
							sieged(player) {
								if (this.identity == 'unknown') {
									return false;
								}
								if (player) {
									return player.siege(this);
								} else {
									const next = this.next;
									const previous = this.previous;
									if (next && previous && next != previous) {
										if (next.identity == 'unknown' || next.identity == 'ye' || next.identity == this.identity) {
											return false;
										}
										return next.identity == previous.identity;
									}
									return false;
								}
							},
							inline() {
								if (this.identity == 'unknown' || this.identity == 'ye' || this.hasSkill('undist')) {
									return false;
								}
								let next = this,
									previous = this;
								const list = [];
								for (let i = 0; next || previous; i++) {
									if (next) {
										next = next.next;
										if (next.identity != this.identity || next == this) {
											next = null;
										} else {
											list.add(next);
										}
									}
									if (previous) {
										previous = previous.previous;
										if (previous.identity != this.identity || previous == this) {
											previous = null;
										} else {
											list.add(previous);
										}
									}
								}
								if (!list.length) {
									return false;
								}

								for (const i of arguments) {
									if (!list.includes(i) && i != this) {
										return false;
									}
								}

								return true;
							},
							isMajor() {
								if (!lib.group.includes(this.identity)) {
									return false;
								}
								const list = [];

								for (const i of game.players) {
									if (i.getEquip('yuxi')) {
										if (i.identity != 'ye' && i.identity != 'unknown') {
											list.add(i.identity);
										}
									}
								}

								if (list.length) {
									return list.includes(this.identity);
								}
								let max = 0;

								for (const i of lib.group) {
									max = Math.max(max, get.population(i));
								}

								if (max <= 1) {
									return false;
								}
								return get.population(this.identity) == max;
							},
							isNotMajor() {
								for (const i of game.players) {
									if (i.isMajor()) {
										return !this.isMajor();
									}
								}

								return false;
							},
							isMinor() {
								if (this.identity == 'unknown') {
									return false;
								}
								if (!lib.group.includes(this.identity)) {
									return true;
								}
								let min = game.players.length;
								if (
									game.hasPlayer(function (current) {
										return current.identity == 'ye';
									})
								) {
									min = 1;
								} else {
									for (const i of lib.group) {
										const num = get.population(i);
										if (num > 0) {
											min = Math.min(min, num);
										}
									}
								}
								return get.population(this.identity) == min;
							},
							logAi(targets, card) {
								if (this.ai.shown == 1 || this.isMad()) {
									return;
								}
								if (typeof targets == 'number') {
									this.ai.shown += targets;
								} else {
									let effect = 0,
										c,
										shown;
									const info = get.info(card);
									if (info.ai && info.ai.expose) {
										if (_status.event.name == '_wuxie') {
											if (_status.event.source && _status.event.source.ai.shown) {
												this.ai.shown += 0.2;
											}
										} else {
											this.ai.shown += info.ai.expose;
										}
									}
									if (targets.length) {
										for (const i of targets) {
											shown = Math.abs(i.ai.shown);
											if (shown < 0.2 || i.identity == 'nei') {
												c = 0;
											} else if (shown < 0.4) {
												c = 0.5;
											} else if (shown < 0.6) {
												c = 0.8;
											} else {
												c = 1;
											}
											effect += get.effect(i, card, this) * c;
										}
									}
									if (effect > 0) {
										if (effect < 1) {
											c = 0.5;
										} else {
											c = 1;
										}
										if (targets.length == 1 && targets[0] == this) {
										} else if (targets.length == 1) {
											this.ai.shown += 0.2 * c;
										} else {
											this.ai.shown += 0.1 * c;
										}
									}
								}
								if (this.ai.shown > 0.95) {
									this.ai.shown = 0.95;
								}
								if (this.ai.shown < -0.5) {
									this.ai.shown = -0.5;
								}
							},
						},
					},
					get: {
						realAttitude(from, toidentity, difficulty) {
							if (from.identity == toidentity && toidentity != 'ye') {
								return 4 + difficulty;
							}
							if (from.identity == 'unknown' && lib.character[from.name1][1] == toidentity) {
								if (from.wontYe()) {
									return 4 + difficulty;
								}
							}
							const groups = [];

							for (const i of lib.group) {
								groups.push(get.population(i));
							}

							const max = Math.max.apply(this, groups);
							if (max <= 1) {
								return -3;
							}
							let from_p = get.population(from.identity != 'unknown' ? from.identity : lib.character[from.name1][1]);
							let to_p = get.population(toidentity);
							if (from.identity == 'ye') {
								from_p = 1;
							}
							if (toidentity == 'ye') {
								to_p = 1;
							}

							if (to_p == max) {
								return -5;
							}
							if (from_p == max) {
								return -2 - get.population(toidentity);
							}
							if (max >= game.players.length / 2) {
								if (to_p <= from_p) {
									return 0.5;
								}
								return 0;
							}
							if (to_p < max - 1) {
								return 0;
							}
							return -0.5;
						},
						rawAttitude(from, to) {
							if (to.identity == 'unknown' && game.players.length == 2) {
								return -5;
							}
							if (_status.currentPhase == from && from.ai.tempIgnore && from.ai.tempIgnore.includes(to) && to.identity == 'unknown' && (!from.storage.zhibi || !from.storage.zhibi.includes(to))) {
								return 0;
							}
							let difficulty = 0;
							if (to == game.me) {
								difficulty = (2 - get.difficulty()) * 1.5;
							}
							if (from == to) {
								return 5 + difficulty;
							}
							if (from.identity == to.identity && from.identity != 'unknown' && from.identity != 'ye') {
								return 5 + difficulty;
							}
							if (from.identity == 'unknown' && lib.character[from.name1][1] == to.identity) {
								if (from.wontYe()) {
									return 4 + difficulty;
								}
							}
							let toidentity = to.identity;
							if (toidentity == 'unknown') {
								toidentity = lib.character[to.name1][1];
								if (get.population(toidentity) >= get.population() - 2) {
									toidentity = 'ye';
								}
							}
							const att = get.realAttitude(from, toidentity, difficulty);
							if (from.storage.zhibi && from.storage.zhibi.includes(to)) {
								return att;
							}
							if (to.ai.shown >= 0.5) {
								return att * to.ai.shown;
							}

							let nshown = 0;

							for (const i of game.players) {
								if (i != from && i.identity == 'unknown') {
									nshown++;
								}
							}

							if (to.ai.shown == 0) {
								if (nshown >= game.players.length / 2 && att >= 0) {
									return 0;
								}
								return Math.min(0, Math.random() - 0.5) + difficulty;
							}
							if (to.ai.shown >= 0.2) {
								if (att > 2) {
									return Math.max(0, Math.random() - 0.5) + difficulty;
								}
								if (att >= 0) {
									return 0;
								}
								return Math.min(0, Math.random() - 0.7) + difficulty;
							}
							if (att > 2) {
								return Math.max(0, Math.random() - 0.7) + difficulty;
							}
							if (att >= 0) {
								return Math.min(0, Math.random() - 0.3) + difficulty;
							}
							return Math.min(0, Math.random() - 0.5) + difficulty;
						},
					},
				},
				{
					translate: '国排自选',
					extension: '龙舟国战模式',
					connect: {
						update(config, map) {
							if (config.connect_onlyguozhan) {
								map.connect_junzhu.show();
							} else {
								map.connect_junzhu.hide();
							}
						},
						connect_player_number: {
							name: '游戏人数',
							init: '8',
							item: {
								3: '三人',
								4: '四人',
								5: '五人',
								6: '六人',
								7: '七人',
								8: '八人',
							},
							forced: true,
							restart: true,
						},
						connect_initshow_draw: {
							name: '首亮摸牌',
							item: {
								0: '关闭',
								1: '一张',
								2: '两张',
								3: '三张',
							},
							init: '2',
							forced: true,
							intro: '第一个明置身份牌的角色可获得摸牌奖励',
						},
						connect_zhulian: {
							name: '珠联璧合',
							init: true,

							intro: '主将和副将都明置后,若为特定组合,可摸两张牌或回复一点体力',
						},
						connect_guozhanpile: {
							name: '使用国战牌堆',
							init: true,
							forced: true,
							restart: true,
						},
						connect_onlyguozhan: {
							name: '使用国战武将',
							init: true,
							forced: true,
							restart: true,
							intro: '开启武将技能将替换为国战版本并禁用非国战武将',
						},
						connect_junzhu: {
							name: '替换君主',
							init: true,

							restart: true,
							intro: '开启后将使用国战君主替换原武将牌',
						},
						connect_ban_weak: {
							name: '屏蔽弱将',
							init: false,
							restart: true,
						},
						connect_ban_strong: {
							name: '屏蔽强将',
							init: false,
							restart: true,
						},
					},
					config: {
						update(config, map) {
							if (config.onlyguozhan) {
								map.junzhu.show();
							} else {
								map.junzhu.hide();
							}
						},
						guozhan_mode: {
							name: '游戏模式',
							init: 'normal',
							item: {
								normal: '标准',
								mingjiang: '明将',
							},
							forced: true,
						},
						player_number: {
							name: '游戏人数',
							init: '8',
							item: {
								3: '三人',
								4: '四人',
								5: '五人',
								6: '六人',
								7: '七人',
								8: '八人',
							},
							forced: true,
							restart: true,
						},
						initshow_draw: {
							name: '首亮摸牌',
							item: {
								0: '关闭',
								1: '一张',
								2: '两张',
								3: '三张',
							},
							init: '2',
							forced: true,
							intro: '第一个明置身份牌的角色可获得摸牌奖励',
						},
						zhulian: {
							name: '珠联璧合',
							init: true,

							intro: '主将和副将都明置后,若为特定组合,可摸两张牌或回复一点体力',
						},
						guozhanpile: {
							name: '使用国战牌堆',
							init: true,
							forced: true,
							restart: true,
						},
						onlyguozhan: {
							name: '使用国战武将',
							init: true,
							forced: true,
							restart: true,
							intro: '开启武将技能将替换为国战版本并禁用非国战武将',
						},
						junzhu: {
							name: '替换君主',
							init: true,

							restart: true,
							intro: '开启后将使用国战君主替换原武将牌',
						},
						double_hp: {
							name: '双将体力上限',
							init: 'pingjun',
							item: {
								hejiansan: '和减三',
								pingjun: '平均值',
								zuidazhi: '最大值',
								zuixiaozhi: '最小值',
								zonghe: '相加',
							},
							restart: true,
						},
						ban_weak: {
							name: '屏蔽弱将',
							init: true,
							restart: true,
						},
						ban_strong: {
							name: '屏蔽强将',
							init: false,
							restart: true,
						},
						free_choose: {
							name: '自由选将',
							init: true,
							onclick(bool) {
								game.saveConfig('free_choose', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								if (!ui.cheat2 && get.config('free_choose')) {
									ui.create.cheat2();
								} else if (ui.cheat2 && !get.config('free_choose')) {
									ui.cheat2.close();
									delete ui.cheat2;
								}
							},
						},
						onlyguozhanexpand: {
							name: '默认展开自由选将',
							init: false,
							restart: true,
							intro: '开启后自由选将对话框将默认显示全部武将',
						},
						change_identity: {
							name: '自由选择座位',
							init: true,
							onclick(bool) {
								game.saveConfig('change_identity', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								let dialog;
								if (ui.cheat2 && ui.cheat2.backup) {
									dialog = ui.cheat2.backup;
								} else {
									dialog = _status.event.dialog;
								}
								if (!_status.brawl || !_status.brawl.noAddSetting) {
									if (!dialog.querySelector('table') && get.config('change_identity')) {
										_status.event.parent.addSetting(dialog);
									} else {
										_status.event.parent.removeSetting(dialog);
									}
								}
								ui.update();
							},
						},
						change_choice: {
							name: '开启换将卡',
							init: true,
							onclick(bool) {
								game.saveConfig('change_choice', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								if (!ui.cheat && get.config('change_choice')) {
									ui.create.cheat();
								} else if (ui.cheat && !get.config('change_choice')) {
									ui.cheat.close();
									delete ui.cheat;
								}
							},
						},
						change_card: {
							name: '开启手气卡',
							init: 'disabled',
							item: {
								disabled: '禁用',
								once: '一次',
								twice: '两次',
								unlimited: '无限',
							},
						},
						continue_game: {
							name: '显示再战',
							init: true,
							intro: '游戏结束后可选择用相同的武将再进行一局游戏',
							onclick(bool) {
								game.saveConfig('continue_game', bool, this._link.config.mode);
								if (get.config('continue_game')) {
									if (!ui.continue_game && _status.over && !_status.brawl) {
										ui.continue_game = ui.create.control('再战', game.reloadCurrent);
									}
								} else if (ui.continue_game) {
									ui.continue_game.close();
									delete ui.continue_game;
								}
							},
						},
						dierestart: {
							name: '死亡后显示重来',
							init: true,
							onclick(bool) {
								game.saveConfig('dierestart', bool, this._link.config.mode);
								if (get.config('dierestart')) {
									if (!ui.restart && game.me.isDead() && !_status.connectMode) {
										ui.restart = ui.create.control('restart', game.reload);
									}
								} else if (ui.restart) {
									ui.restart.close();
									delete ui.restart;
								}
							},
						},
						revive: {
							name: '死亡后显示复活',
							init: false,
							onclick(bool) {
								game.saveConfig('revive', bool, this._link.config.mode);
								if (get.config('revive')) {
									if (!ui.revive && game.me.isDead()) {
										ui.revive = ui.create.control('revive', ui.click.dierevive);
									}
								} else if (ui.revive) {
									ui.revive.close();
									delete ui.revive;
								}
							},
						},
						difficulty: {
							name: 'AI对人类态度',
							init: 'normal',
							item: {
								easy: '友好',
								normal: '一般',
								hard: '仇视',
							},
						},
						choice_num: {
							name: '候选武将数',
							init: '7',
							restart: true,
							item: {
								5: '五',
								6: '六',
								7: '七',
								8: '八',
								9: '九',
								10: '十',
								16: '十六',
								20: '二十',
							},
						},
					},
				},
			);

			game.addMode(
				'partner',
				{
					start() {
						'step 0';
						const cssStyle = function () {
							const style = document.createElement('style');
							style.innerHTML = "[data-number='10']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(95% - 75px);}";
							style.innerHTML += "[data-number='10']>.player[data-position='2']{top:calc(100% / 3 - 120px);left:calc(95% - 75px);}";
							style.innerHTML += "[data-number='10']>.player[data-position='3']{top:30px;left:calc(80% - 75px);}";
							style.innerHTML += "[data-number='10']>.player[data-position='4']{top:5px;left:calc(65% - 75px);}";
							style.innerHTML += "[data-number='10']>.player[data-position='5']{top:0;left:calc(50% - 75px);}";
							style.innerHTML += "[data-number='10']>.player[data-position='6']{top:5px;left:calc(35% - 75px);}";
							style.innerHTML += "[data-number='10']>.player[data-position='7']{top:30px;left:calc(20% - 75px);}";
							style.innerHTML += "[data-number='10']>.player[data-position='8']{top:calc(100% / 3 - 120px);left:calc(5% - 75px);}";
							style.innerHTML += "[data-number='10']>.player[data-position='9']{top:calc(200% / 3 - 145px);left:calc(5% - 75px);}";
							document.head.appendChild(style);
						};
						cssStyle();
						('step 1');
						_status.mode = get.config('mode');
						game.prepareArena(get.config('players'));

						const flashConfigs = [
							{ c1: '#ff3333', c2: '#e8daef', text: '壹' },
							{ c1: '#1f618d', c2: '#f1c40f', text: '贰' },
							{ c1: '#d98880', c2: '#283747', text: '叁' },
							{ c1: '#d4ac0d', c2: '#ff00ff', text: '肆' },
							{ c1: '#6c3483', c2: '#82e0aa', text: '伍' },
						];

						if (!document.querySelector('#flash-keyframes-style')) {
							const style = document.createElement('style');
							style.id = 'flash-keyframes-style';
							style.textContent = `@keyframes flashing-effect {0% {filter: drop-shadow(0 0 8px var(--color-1)) drop-shadow(0 0 16px var(--color-1));background-position: 0% 50%;transform: scale(1);}50% {filter: drop-shadow(0 0 12px var(--color-2)) drop-shadow(0 0 24px var(--color-2)) brightness(1.3);background-position: 100% 50%;transform: scale(1.05);}100% {filter: drop-shadow(0 0 8px var(--color-1)) drop-shadow(0 0 16px var(--color-1));background-position: 0% 50%;transform: scale(1);}}`;
							document.head.appendChild(style);
						}
						let num = 1;
						for (let i = 0; i < game.players.length; i++) {
							const pl = game.players[i];
							pl.getId();
							pl.style.backgroundSize = '100% 100%';
							pl.setBackgroundImage('extension/龙舟国战模式/' + num + '.jpg');

							const configIndex = (num - 1) % flashConfigs.length;
							const currentConfig = flashConfigs[configIndex];

							const identitySpan = `<span style="display: inline-block; font-family: 'chaozisheleishenbianjianfan', sans-serif; font-weight: 800; font-size: 28px; border-radius: 8px; color: #ffffff; --color-1: ${currentConfig.c1}; --color-2: ${currentConfig.c2}; cursor: default; user-select: none; transition: transform 0.3s; animation: flashing-effect 1.5s infinite ease-in-out;">${currentConfig.text}</span>`;
							pl.identity = get.cnNumber(num);
							pl.setIdentity(identitySpan);
							if ((i + 1) % 2 == 0) {
								num++;
							}
							if (get.config('players') > 8 && pl != game.me) {
								var node = pl;
								node.style.transform = 'scale(0.5)';
								Reflect.defineProperty(node.style, 'transform', {
									set(v) {
										node.style.setProperty('transform', 'scale(0.5)');
									},
									get() {
										return 'scale(0.5)';
									},
								});
								Reflect.defineProperty(node.style, 'webkitTransform', {
									set(v) {
										node.style.setProperty('webkitTransform', 'scale(0.5)');
									},
									get() {
										return 'scale(0.5)';
									},
								});
							}
						}
						('step 2');
						game.chooseCharacter();
						('step 3');
						event.trigger('gameStart');
						game.gameDraw();
						game.phaseLoop(game.players.randomGet());
					},
					game: {
						chooseCharacter() {
							const next = game.createEvent('chooseCharacter', false);
							next.showConfig = true;
							next.setContent(function () {
								'step 0';
								const num = get.config('chooseCharacterNumber');
								if (get.config('chooseCharacterPriority') == 'yes') {
									event.bool = true;
								} else if (get.config('chooseCharacterPriority') == 'no') {
									event.bool = false;
								} else {
									if (Math.random() <= 0.5) {
										event.bool = true;
									} else {
										event.bool = false;
									}
								}
								event.list1 = [];
								event.list2 = [];
								event.list3 = [];
								for (const i in lib.character) {
									if (lib.filter.characterDisabled(i)) {
										continue;
									}
									var sex = lib.character[i][0];
									if (sex == 'male') {
										event.list1.push(i);
									}
									if (sex == 'female') {
										event.list2.push(i);
									}
									event.list3.push(i);
								}
								if (event.bool == true) {
									for (const i of game.players) {
										var pl = i;
										if (pl != game.me && pl.identity == game.me.identity) {
											var character = event.list3.randomGet();
											event.player = pl;
											pl.init(character);
											var DY_sex = lib.character[character][0];
											if (DY_sex == 'male') {
												event.list1.remove(character);
											}
											if (DY_sex == 'female') {
												event.list2.remove(character);
											}
											event.list3.remove(character);
										}
									}
								}
								let list = [];
								if (get.config('chooseCharacterLimit') == 'yixing' && event.bool == true) {
									if (DY_sex == 'male') {
										list = event.list2.randomGets(num);
									}
									if (DY_sex == 'female') {
										list = event.list1.randomGets(num);
									}
								} else if (get.config('chooseCharacterLimit') == 'tongxing' && event.bool == true) {
									if (DY_sex == 'male') {
										list = event.list1.randomGets(num);
									}
									if (DY_sex == 'female') {
										list = event.list2.randomGets(num);
									}
								} else {
									list = event.list3.randomGets(num);
								}
								let str = '';
								let str1 = '';
								let list1 = '';
								if (event.bool == true && lib.perfectPair[character] != undefined) {
									const partner = lib.perfectPair[character];
									var list2 = [];

									for (const i of partner) {
										const pr = i;
										if (lib.character[pr] != undefined) {
											var sex = lib.character[pr][0];
											if (get.config('chooseCharacterLimit') == 'yixing') {
												if (sex != DY_sex) {
													list2.push(pr);
												}
											} else if (get.config('chooseCharacterLimit') == 'tongxing') {
												if (sex == DY_sex) {
													list2.push(pr);
												}
											} else {
												list2.push(pr);
											}
										}
									}
								}
								if (list2 != undefined && list2.length) {
									str = '随机武将';
									str1 = '与队友珠联璧合的武将';
									list1 = [list2, 'character'];
								}
								const dialog = ui.create.dialog('选择角色', 'hidden', str, [list, 'character'], str1, list1);
								dialog.setCaption('选择角色');
								game.me.chooseButton(dialog, true).set('onfree', true);
								if (lib.config.mode_config.partner.change_choice == true) {
									ui.create.cheat = function () {
										_status.createControl = ui.cheat2;
										ui.cheat = ui.create.control('更换', function () {
											if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
												return;
											}
											const buttons = ui.create.div('.buttons');
											const node = _status.event.dialog.buttons[0].parentNode;
											if (get.config('chooseCharacterLimit') == 'yixing' && event.bool == true) {
												if (DY_sex == 'male') {
													list = event.list2.randomGets(num);
												}
												if (DY_sex == 'female') {
													list = event.list1.randomGets(num);
												}
											} else if (get.config('chooseCharacterLimit') == 'tongxing' && event.bool == true) {
												if (DY_sex == 'male') {
													list = event.list1.randomGets(num);
												}
												if (DY_sex == 'female') {
													list = event.list2.randomGets(num);
												}
											} else {
												list = event.list3.randomGets(num);
											}
											_status.event.dialog.buttons = ui.create.buttons(list, 'character', buttons);
											_status.event.dialog.content.insertBefore(buttons, node);
											buttons.addTempClass('start');
											node.remove();
											game.uncheck();
											game.check();
										});
										delete _status.createControl;
									};
									ui.create.cheat();
								}
								if (lib.config.mode_config.partner.free_choose == true) {
									event.dialogxx = ui.create.characterDialog('heightset');
									ui.create.cheat2 = function () {
										ui.cheat2 = ui.create.control('自由选将', function () {
											if (this.dialog == _status.event.dialog) {
												this.dialog.close();
												_status.event.dialog = this.backup;
												this.backup.open();
												delete this.backup;
												game.uncheck();
												game.check();
											} else {
												this.backup = _status.event.dialog;
												_status.event.dialog.close();
												_status.event.dialog = _status.event.parent.dialogxx;
												this.dialog = _status.event.dialog;
												this.dialog.open();
												game.uncheck();
												game.check();
											}
										});
									};
									ui.create.cheat2();
								}
								('step 1');
								if (ui.cheat) {
									ui.cheat.close();
									delete ui.cheat;
								}
								if (ui.cheat2) {
									ui.cheat2.close();
									delete ui.cheat2;
								}
								const PL_character = result.buttons[0].link;
								game.me.init(PL_character);
								const PL_sex = lib.character[PL_character][0];
								if (PL_sex == 'male') {
									event.list1.remove(PL_character);
								}
								if (PL_sex == 'female') {
									event.list2.remove(PL_character);
								}
								event.list3.remove(PL_character);

								for (const i of game.players) {
									var pl = i;
									if (pl != game.me && pl != event.player) {
										if (get.config('chooseCharacterLimit') == 'yixing') {
											if (
												game.countPlayer(function (current) {
													return pl.identity == current.identity && current.sex == 'male';
												}) > 0
											) {
												var character = event.list2.randomGet();
											} else if (
												game.countPlayer(function (current) {
													return pl.identity == current.identity && current.sex == 'female';
												}) > 0
											) {
												var character = event.list1.randomGet();
											} else {
												var character = event.list3.randomGet();
											}
										} else if (get.config('chooseCharacterLimit') == 'tongxing') {
											if (
												game.countPlayer(function (current) {
													return pl.identity == current.identity && current.sex == 'male';
												}) > 0
											) {
												var character = event.list1.randomGet();
											} else if (
												game.countPlayer(function (current) {
													return pl.identity == current.identity && current.sex == 'female';
												}) > 0
											) {
												var character = event.list2.randomGet();
											} else {
												var character = event.list3.randomGet();
											}
										} else {
											var character = event.list3.randomGet();
										}
										pl.init(character);
										var sex = lib.character[character][0];
										if (sex == 'male') {
											event.list1.remove(character);
										}
										if (sex == 'female') {
											event.list2.remove(character);
										}
										event.list3.remove(character);
									}
								}

								setTimeout(function () {
									ui.arena.classList.remove('choose-character');
								}, 500);
							});
						},
					},
					element: {
						player: {
							dieAfter(source) {
								const list = [];

								for (const i of game.players) {
									var pl = i;
									if (list.includes(pl.identity)) {
										continue;
									}
									list.push(pl.identity);
								}

								if (
									game.countPlayer(function (current) {
										if (list.includes(current.identity)) {
											list.remove(current.identity);
											return true;
										}
									}) == 1
								) {
									if (game.me.isDead()) {
										game.over(false);
									} else {
										game.over(true);
									}
								}
								if (source && this.identity == source.identity) {
									source.discard(source.get('he'));
								}
								if (source && this.identity != source.identity) {
									source.draw(2);
								}
								if (_status.mode == 'gongsi') {
									for (const i of game.players) {
										var pl = i;
										if (pl.identity == this.identity) {
											pl.popup('同生共死');

											if (source) {
												source.line(pl);
											}
											const die = pl.die();
											if (source) {
												die.source = source;
											}
										}
									}
								}
							},
						},
						content: {
							gameDraw() {
								'step 0';
								if (_status.brawl && _status.brawl.noGameDraw) {
									event.finish();
									return;
								}
								const end = player;
								let numx = num;
								do {
									if (typeof num == 'function') {
										numx = num(player);
									}
									player.directgain(get.cards(numx));
									if (player.singleHp === true && get.mode() != 'guozhan') {
										player.doubleDraw();
									}
									player = player.next;
								} while (player != end);
								event.changeCard = get.config('change_card');
								('step 1');
								if (event.changeCard != 'disabled' && !_status.auto) {
									event.dialog = ui.create.dialog('是否使用手气卡？');
									ui.create.confirm('oc');
									event.custom.replace.confirm = function (bool) {
										_status.event.bool = bool;
										game.resume();
									};
								} else {
									event.finish();
								}
								('step 2');
								if (event.changeCard == 'once') {
									event.changeCard = 'disabled';
								} else if (event.changeCard == 'twice') {
									event.changeCard = 'once';
								} else if (event.changeCard == 'disabled') {
									event.bool = false;
									return;
								}
								_status.imchoosing = true;
								event.switchToAuto = function () {
									_status.event.bool = false;
									game.resume();
								};
								game.pause();
								('step 3');
								_status.imchoosing = false;
								if (event.bool) {
									if (game.changeCoin) {
										game.changeCoin(-3);
									}
									const hs = game.me.getCards('h');
									game.addVideo('lose', game.me, [get.cardsInfo(hs), [], []]);

									for (const i of hs) {
										i.discard(false);
									}

									game.me.directgain(get.cards(hs.length));
									event.goto(2);
								} else {
									if (event.dialog) {
										event.dialog.close();
									}
									if (ui.confirm) {
										ui.confirm.close();
									}
									event.finish();
								}
							},
						},
					},
					ai: {
						get: {
							rawAttitude(from, to) {
								if (from == undefined || to == undefined) {
									return 0;
								}
								if (from.identity == to.identity) {
									return 5;
								}
								return (
									-1 -
									game.countPlayer(function (current) {
										return to.identity == current.identity;
									}) *
									3
								);
							},
						},
					},
					help: {
						成对模式: '简介:<ul><li>两人组成一队进行混战,存活到最后的一队胜出<li>选择武将时,若你的队友先行选择,你的选将栏内会添加与其选择武将珠联璧合的武将</ul>击杀:<ul><li>奖励:<br>击杀其他队伍角色时触发,摸两张牌<li>惩罚:<br>击杀队友时触发,弃置所有手牌和装备区内的牌</ul>模式:<ul><li>结义:<br>所有玩家获得技能【结义】(出牌阶段限一次,你可以令你的队友将其所有手牌给予你,然后由你分配双方手牌(给予队友的牌不能小于X,X为分配时你手牌数的一半(向上取整)))<li>共死:<br>当一名角色死亡后,此角色的队友跟着死亡(造成死亡的来源与此角色相同)</ul>',
					},
				},
				{
					translate: '成对模式',
					extension: '龙舟国战模式',
					config: {
						mode: {
							name: '游戏模式',
							init: 'standard',
							item: {
								standard: '标准',
								jieyi: '结义',
								gongsi: '共死',
							},
							forced: true,
							restart: true,
						},
						players: {
							name: '游戏人数',
							init: 4,
							item: {
								4: '2对',
								6: '3对',
								8: '4对',
								10: '5对',
							},
							forced: true,
							restart: true,
						},
						chooseCharacterLimit: {
							name: '成对限制',
							init: 'no',
							item: {
								no: '无',
								tongxing: '同性',
								yixing: '异性',
								shuangjiang: '双将',
								shuangjiang_tongshili: '双将同势力',
								shuangjiang_tongshili_duiyou: '双将同势力且与队友同势力',
							},
							forced: true,
							restart: true,
						},
						chooseCharacter_priority: {
							name: '队友先选',
							init: 'random',
							item: {
								random: '随机',
								yes: '是',
								no: '否',
							},
							forced: true,
							restart: true,
						},

						chooseCharacterNumber: {
							name: '候选随机武将数',
							init: 3,
							item: {
								1: '1',
								2: '2',
								3: '3',
								4: '4',
								5: '5',
								6: '6',
								7: '7',
								8: '8',
								9: '9',
								10: '10',
							},
							forced: true,
							restart: true,
						},
						free_choose: {
							name: '自由选将',
							init: true,
							onclick(bool) {
								game.saveConfig('free_choose', bool, 'partner');
							},
						},
						change_choice: {
							name: '开启换将卡',
							init: true,
							onclick(bool) {
								game.saveConfig('change_choice', bool, 'partner');
								if (!ui.cheat && get.config('change_choice')) {
									ui.create.cheat();
								} else if (ui.cheat && !get.config('change_choice')) {
									ui.cheat.close();
									delete ui.cheat;
								}
							},
						},
						change_card: {
							name: '开启手气卡',
							init: 'disabled',
							item: {
								disabled: '禁用',
								once: '一次',
								twice: '两次',
								unlimited: '无限',
							},
						},
						kzol_weather: {
							name: '天气变化',
							init: false,
							restart: true,
							forced: true,
						},
					},
				},
			);

			game.addMode(
				'liangjunduilei',
				{
					start() {
						'step 0';
						const cssStyle = function () {
							const style = document.createElement('style');
							style.innerHTML = "[data-number='10']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(95% - 75px);}";
							style.innerHTML += "[data-number='10']>.player[data-position='2']{top:calc(100% / 3 - 120px);left:calc(95% - 75px);}";
							style.innerHTML += "[data-number='10']>.player[data-position='3']{top:30px;left:calc(80% - 75px);}";
							style.innerHTML += "[data-number='10']>.player[data-position='4']{top:5px;left:calc(65% - 75px);}";
							style.innerHTML += "[data-number='10']>.player[data-position='5']{top:0;left:calc(50% - 75px);}";
							style.innerHTML += "[data-number='10']>.player[data-position='6']{top:5px;left:calc(35% - 75px);}";
							style.innerHTML += "[data-number='10']>.player[data-position='7']{top:30px;left:calc(20% - 75px);}";
							style.innerHTML += "[data-number='10']>.player[data-position='8']{top:calc(100% / 3 - 120px);left:calc(5% - 75px);}";
							style.innerHTML += "[data-number='10']>.player[data-position='9']{top:calc(200% / 3 - 145px);left:calc(5% - 75px);}";
							document.head.appendChild(style);
						};
						cssStyle();
						('step 1');
						game.prepareArena(10);
						var sfsuiji = ['dijiangfangzhong', 'dijiangfangzhong', 'youjiangfangzhong', 'youjiangfangzhong', 'youjiangfangzhu', 'youjiangfangzhong', 'youjiangfangzhong', 'dijiangfangzhong', 'dijiangfangzhong', 'dijiangfangzhu'];

						function shuffleRing(arr) {
							const startIndex = Math.floor(Math.random() * arr.length);
							return arr.slice(startIndex).concat(arr.slice(0, startIndex));
						}

						sfsuiji = shuffleRing(sfsuiji);
						event.sfsuiji = sfsuiji;
						for (let i = 0; i < game.players.length; i++) {
							const pl = game.players[i];
							pl.getId();
							pl.style.backgroundSize = '100% 100%';
							if (sfsuiji[i].indexOf('youjiang') == 0) {
								pl.setBackgroundImage('extension/龙舟国战模式/youjiangback.jpg');
							} else {
								pl.setBackgroundImage('extension/龙舟国战模式/dijiangback.jpg');
							}
							pl.identity = sfsuiji[i];
							pl.setIdentity(sfsuiji[i]);
							if (game.players.length > 8 && pl != game.me) {
								var node = pl;
								node.style.transform = 'scale(0.75)';
								Reflect.defineProperty(node.style, 'transform', {
									set(v) {
										node.style.setProperty('transform', 'scale(0.75)');
									},
									get() {
										return 'scale(0.75)';
									},
								});
								Reflect.defineProperty(node.style, 'webkitTransform', {
									set(v) {
										node.style.setProperty('webkitTransform', 'scale(0.75)');
									},
									get() {
										return 'scale(0.75)';
									},
								});
							}
						}
						('step 2');
						game.chooseCharacter();
						('step 3');
						game.players.map((pl) => {
							if (pl.identity == 'dijiangfangzhu' || pl.identity == 'youjiangfangzhu') {
								pl.maxHp += 2;
								pl.hp += 2;
								pl.update();
							}
						});
						event.trigger('gameStart');
						game.gameDraw();
						var sfsuiji = event.sfsuiji;

						const firstType = Math.random() > 0.5 ? 'youjiangfangzhong' : 'dijiangfangzhong';
						const candidateIdx = [];
						sfsuiji.forEach((type, i) => {
							if (type === firstType) {
								candidateIdx.push(i);
							}
						});
						let firstIdx = -1;
						for (const i of candidateIdx) {
							const next1Idx = (i + 1) % sfsuiji.length;
							const next2Idx = (i + 2) % sfsuiji.length;
							const targetType = firstType === 'youjiangfangzhong' ? 'dijiangfangzhong' : 'youjiangfangzhong';
							if (sfsuiji[next1Idx] === targetType && sfsuiji[next2Idx] === targetType) {
								firstIdx = i;
								break;
							}
						}
						if (firstIdx === -1) {
							firstIdx = candidateIdx[0] || 0;
						}
						game.phaseLoop(game.players.filter((_, idx) => idx === firstIdx)[0].previous);
					},
					translate: {
						dijiangfangzhu: `<img src="${lib.assetURL}extension/龙舟国战模式/dijiangfangzhu.png" width="25" height="25">`,
						youjiangfangzhu: `<img src="${lib.assetURL}extension/龙舟国战模式/youjiangfangzhu.png" width="25" height="25">`,
						dijiangfangzhong: `<img src="${lib.assetURL}extension/龙舟国战模式/dijiangfangzhong.png" width="25" height="25">`,
						youjiangfangzhong: `<img src="${lib.assetURL}extension/龙舟国战模式/youjiangfangzhong.png" width="25" height="25">`,
					},
					game: {
						callLandlord() {
							const sfsuiji = ['dizhu', 'dizhu', 'dizhu', 'dizhu', 'min', 'min', 'min', 'min'].randomSort();

							game.players.map((current, y) => {
								current.identity = sfsuiji[y];
								current.setIdentity(sfsuiji[y]);
							});
						},
						chooseCharacter() {
							const next = game.createEvent('chooseCharacter', false);
							next.showConfig = true;
							next.setContent(function () {
								'step 0';
								const num = get.config('choice_num');
								var isDouble = get.config('double_character');
								var isDoubleSameForce = get.config('double_tongshili');
								var isDoubleSameForceAlly = get.config('double_tongshiliduiyou');
								event.weilist = [];
								event.shulist = [];
								event.wulist = [];
								event.qunlist = [];
								event.list = [];
								for (const i in lib.character) {
									if (lib.filter.characterDisabled(i)) {
										continue;
									}
									const group = lib.character[i][1];
									if (group == 'wei') {
										event.weilist.push(i);
									}
									if (group == 'shu') {
										event.shulist.push(i);
									}
									if (group == 'wu') {
										event.wulist.push(i);
									}
									if (group == 'qun') {
										event.qunlist.push(i);
									}
									event.list.push(i);
								}
								if (isDoubleSameForceAlly) {
									var selfCampPrefix = game.me.identity.includes('youjiang') ? 'youjiang' : 'dijiang';
									const allyLord = game.players.filter((p) => p.identity === `${selfCampPrefix}fangzhu`)[0];
								}
								let list = [];
								if (isDoubleSameForceAlly) {
									var DY_group = ['wei', 'shu', 'wu', 'qun'].randomGet();
									event.DY_group = DY_group;
									list = event[`${DY_group}list`].randomGets(num);
								} else {
									list = event.list.randomGets(num);
								}
								const dialog = ui.create.dialog('选择角色', 'hidden', [list, 'character']);
								dialog.setCaption('选择角色');
								let filterButton = (button) => {
									return true;
								};
								if (isDoubleSameForce) {
									filterButton = function (button) {
										return ui.selected.buttons.length < 1 || lib.character[button.link][1] == lib.character[ui.selected.buttons[0].link][1];
									};
								}
								game.me
									.chooseButton(dialog, isDouble || isDoubleSameForce ? 2 : 1, true)
									.set('onfree', true)
									.set('filterButton', filterButton);
								if (lib.config.mode_config.liangjunduilei.change_choice == true) {
									ui.create.cheat = function () {
										_status.createControl = ui.cheat2;
										ui.cheat = ui.create.control('更换', function () {
											if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
												return;
											}
											const buttons = ui.create.div('.buttons');
											const node = _status.event.dialog.buttons[0].parentNode;
											if (get.config('double_tongshili')) {
												list = event.list.randomGets(num);
											} else if (get.config('double_tongshiliduiyou')) {
												if (DY_group == 'wei') {
													list = event.weilist.randomGets(num);
												}
												if (DY_group == 'shu') {
													list = event.shulist.randomGets(num);
												}
												if (DY_group == 'wu') {
													list = event.wulist.randomGets(num);
												}
												if (DY_group == 'qun') {
													list = event.qunlist.randomGets(num);
												}
											} else {
												list = event.list.randomGets(num);
											}
											_status.event.dialog.buttons = ui.create.buttons(list, 'character', buttons);
											_status.event.dialog.content.insertBefore(buttons, node);
											buttons.addTempClass('start');
											node.remove();
											game.uncheck();
											game.check();
										});
										delete _status.createControl;
									};
									ui.create.cheat();
								}
								if (lib.config.mode_config.liangjunduilei.free_choose == true) {
									event.dialogxx = ui.create.characterDialog('heightset');
									ui.create.cheat2 = function () {
										ui.cheat2 = ui.create.control('自由选将', function () {
											if (this.dialog == _status.event.dialog) {
												this.dialog.close();
												_status.event.dialog = this.backup;
												this.backup.open();
												delete this.backup;
												game.uncheck();
												game.check();
											} else {
												this.backup = _status.event.dialog;
												_status.event.dialog.close();
												_status.event.dialog = _status.event.parent.dialogxx;
												this.dialog = _status.event.dialog;
												this.dialog.open();
												game.uncheck();
												game.check();
											}
										});
									};
									ui.create.cheat2();
								}
								('step 1');
								if (ui.cheat) {
									ui.cheat.close();
									delete ui.cheat;
								}
								if (ui.cheat2) {
									ui.cheat2.close();
									delete ui.cheat2;
								}
								var isDouble = get.config('double_character');
								let PL_characters = [];

								if (isDouble && result?.buttons?.length >= 2) {
									PL_characters = [result.buttons[0].link, result.buttons[1].link];
									game.me.init(PL_characters[0], PL_characters[1]);
								} else {
									PL_characters = [result.buttons[0].link];
									game.me.init(PL_characters[0]);
								}

								PL_characters.forEach((char) => {
									const PL_shili = lib.character[char][1];

									switch (PL_shili) {
										case 'wei':
											event.weilist.remove(char);
											break;
										case 'shu':
											event.shulist.remove(char);
											break;
										case 'wu':
											event.wulist.remove(char);
											break;
										case 'qun':
											event.qunlist.remove(char);
											break;
									}

									event.list.remove(char);
								});

								for (const i of game.players) {
									const pl = i;
									if (pl != game.me && pl != event.player) {
										var isDouble = get.config('double_character');
										var isDoubleSameForce = get.config('double_tongshili');
										var isDoubleSameForceAlly = get.config('double_tongshiliduiyou');
										var character,
											character2,
											characters = [];

										if (isDouble) {
											if (isDoubleSameForceAlly) {
												var selfCampPrefix = game.me.identity.includes('youjiang') ? 'youjiang' : 'dijiang';
												const isAlly = pl.identity.includes(selfCampPrefix);

												var targetForce;
												if (isAlly) {
													targetForce = event.DY_group;
												} else {
													targetForce = targetForce || ['wei', 'shu', 'wu', 'qun'].randomGet();
												}

												var forceList = event[`${targetForce}list`];
												characters = forceList.randomGets(2);
											} else if (isDoubleSameForce) {
												const randomForce = ['wei', 'shu', 'wu', 'qun'].randomGet();
												var forceList = event[`${randomForce}list`];
												characters = forceList.randomGets(2);
											} else {
												characters = event.list.randomGets(2);
											}

											pl.init(characters[0], characters[1]);
										} else {
											character = event.list.randomGet();
											pl.init(character);
											characters = [character];
										}

										characters.forEach((char) => {
											const selectshili = lib.character[char][1];
											switch (selectshili) {
												case 'wei':
													event.weilist.remove(char);
													break;
												case 'shu':
													event.shulist.remove(char);
													break;
												case 'wu':
													event.wulist.remove(char);
													break;
												case 'qun':
													event.qunlist.remove(char);
													break;
											}
											event.list.remove(char);
										});
									}
								}

								setTimeout(function () {
									ui.arena.classList.remove('choose-character');
								}, 500);
							});
						},
					},
					element: {
						player: {
							dieAfter() {
								if (this.identity.endsWith('fangzhu')) {
									const selfCampPrefix = game.me.identity.includes('youjiang') ? 'youjiang' : 'dijiang';

									const aliveAllyLord = game.players.some((player) => player.identity === `${selfCampPrefix}fangzhu` && player.isAlive());

									game.over(aliveAllyLord);
								}
							},
						},
					},
					ai: {
						get: {
							attitude(from, to) {
								if (from == to) {
									return 5;
								}

								if (from.identity.includes('youjiang') && to.identity.includes('youjiang')) {
									return to.identity === 'youjiangfangzhu' ? 10 : 5;
								} else if (from.identity.includes('dijiang') && to.identity.includes('dijiang')) {
									return to.identity === 'dijiangfangzhu' ? 10 : 5;
								}

								return to.identity.includes('fangzhu') ? -10 : -5;
							},
						},
					},
				},
				{
					translate: '两军对垒',
					config: {
						free_choose: {
							name: '自由选将',
							init: false,
							onclick(bool) {
								game.saveConfig('free_choose', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								if (!ui.cheat2 && get.config('free_choose')) {
									ui.create.cheat2();
								} else if (ui.cheat2 && !get.config('free_choose')) {
									ui.cheat2.close();
									delete ui.cheat2;
									if (ui.cheat2x) {
										ui.cheat2x.close();
										delete ui.cheat2;
									}
								}
							},
						},
						change_choice: {
							name: '开启换将卡',
							init: true,
							onclick(bool) {
								game.saveConfig('change_choice', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								if (!ui.cheat && get.config('change_choice')) {
									ui.create.cheat();
								} else if (ui.cheat && !get.config('change_choice')) {
									ui.cheat.close();
									delete ui.cheat;
								}
							},
							forced: true,
							restart: true,
						},
						continue_game: {
							name: '显示再战',
							init: false,
							onclick(bool) {
								game.saveConfig('continue_game', bool, this._link.config.mode);
								if (get.config('continue_game')) {
									if (!ui.continue_game && _status.over) {
										ui.continue_game = ui.create.control('再战', game.reloadCurrent);
									}
								} else if (ui.continue_game) {
									ui.continue_game.close();
									delete ui.continue_game;
								}
							},
						},
						double_character: {
							name: '双将模式',
							init: false,
							forced: true,
							restart: true,
						},
						double_tongshili: {
							name: '双将同势力模式',
							init: false,
							forced: true,
							restart: true,
						},
						double_tongshiliduiyou: {
							name: '双将且与队友同势力模式',
							init: false,
							forced: true,
							restart: true,
						},
						double_hp: {
							name: '双将体力上限',
							init: 'hejiansan',
							item: {
								hejiansan: '和减三',
								pingjun: '平均值',
								zuidazhi: '最大值',
								zuixiaozhi: '最小值',
								zonghe: '相加',
							},
						},
						choice_num: {
							name: '候选武将数',
							init: '10',
							item: {
								3: '三',
								4: '四',
								5: '五',
								6: '六',
								7: '七',
								8: '八',
								9: '九',
								10: '十',
							},
						},
					},
				},
			);

			game.addMode(
				'guandudazhan',
				{
					start() {
						'step 0';
						const cssStyle = function () {
							const style = document.createElement('style');
							const playerNumber = 40;
							let css = '';

							function generateFixedAreaLayout(num) {
								let layout = '';

								const cardW = 42,
									cardH = 63;
								const gap = 6;
								const scale = 0.3;

								const operateBox = {
									left: 50,
									top: 50,
									right: document.body.clientWidth - 50,
									bottom: document.body.clientHeight - 150,
								};
								const boxW = operateBox.right - operateBox.left;
								const boxH = operateBox.bottom - operateBox.top;
								const layers = [];
								let posIndex = 1;

								const topCount = 18;
								const topTotalWidth = topCount * cardW + (topCount - 1) * gap;
								const topStartX = operateBox.left + (boxW - topTotalWidth) / 2;
								const topY = operateBox.top - 20;
								for (let i = 0; i < topCount && posIndex <= num; i++) {
									layers.push({
										left: topStartX + i * (cardW + gap),
										top: topY,
										position: posIndex++,
									});
								}

								const bottomCount = 18;
								const bottomTotalWidth = bottomCount * cardW + (bottomCount - 1) * gap;
								const bottomStartX = operateBox.left + (boxW - bottomTotalWidth) / 2;
								const bottomY = operateBox.bottom - cardH;
								for (let i = 0; i < bottomCount && posIndex <= num; i++) {
									layers.push({
										left: bottomStartX + i * (cardW + gap),
										top: bottomY,
										position: posIndex++,
									});
								}

								const leftCount = 3;
								const leftX = operateBox.left;
								const leftTotalHeight = leftCount * cardH + (leftCount - 1) * gap;
								const leftStartY = operateBox.top + (boxH - leftTotalHeight) / 2;
								for (let i = 0; i < leftCount && posIndex <= num; i++) {
									layers.push({
										left: leftX,
										top: leftStartY + i * (cardH + gap),
										position: posIndex++,
									});
								}

								layers.forEach((item) => {
									const finalLeft = Math.min(Math.max(item.left, operateBox.left), operateBox.right - cardW) - 30;
									const finalTop = Math.min(Math.max(item.top, operateBox.top - 20), operateBox.bottom - cardH) - 60;
									layout += `
                            [data-number='${num}']>.player[data-position='${item.position}'] {
                                left: ${finalLeft}px;
                                top: ${finalTop}px;

                                transform: scale(${scale}) !important;
                            }
                        `;
								});

								layout += `
                        [data-number='${num}']::after {
                            content: '';
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -60%);
                            width: 200px;
                            height: 140px;
                            border-radius: 0;
                            border: 8px solid transparent;
                            background: linear-gradient(90deg, #ffffff 0%, #00b8ff 40%, #0066ff 50%, #00b8ff 60%, #ffffff 100%) border-box;
                            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
                            -webkit-mask-composite: xor;
                            mask-composite: exclude;
                            box-shadow: 0 0 15px #00ffff, 0 0 30px #0099ff, 0 0 45px #0066ff, inset 0 0 12px #ffffff;
                            animation: borderFlash 1.5s ease-in-out infinite;
                            z-index: 1;
                            max-width: calc(100% - 80px);
                            max-height: calc(100% - 80px);
                        }
                        @keyframes borderFlash {
                            0% { 
                                box-shadow: 0 0 15px #00ffff, 0 0 30px #0099ff, 0 0 45px #0066ff, inset 0 0 12px #ffffff;
                                border-width: 6px;
                            }
                            50% { 
                                box-shadow: 0 0 30px #ffffff, 0 0 60px #00ccff, 0 0 90px #0099ff, inset 0 0 20px #00ffff;
                                border-width: 10px;
                            }
                            100% { 
                                box-shadow: 0 0 15px #00ffff, 0 0 30px #0099ff, 0 0 45px #0066ff, inset 0 0 12px #ffffff;
                                border-width: 6px;
                            }
                        }

                        [data-number='${num}']::before {
                            content: '官渡大战';
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            width: 200px;
                            height: 200px;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            transform: translate(-50%, -60%) rotateY(-15deg);

                            font-family: chaozisheleishenbianjianfan;
                            font-size: 48px;
                            font-weight: 900;

                            text-shadow: 0 1px 0 #0051ff, 0 2px 0 #0077ff, 0 3px 0 #009dff, 0 4px 0 #00c3ff, 0 5px 0 #00e9ff, 0 6px 15px rgba(0,119,255,0.9), 0 0 20px rgba(0,200,255,0.8);

                            background: linear-gradient(90deg, #ffffff 0%, #00c2ff 25%, #0055ff 50%, #00c2ff 75%, #ffffff 100%);
                            background-size: 400% 100%;
                            -webkit-background-clip: text;
                            background-clip: text;
                            color: transparent;

                            animation: lightFlow 3s linear infinite, textGlow 2s ease-in-out infinite alternate;

                            z-index: 99;

                            overflow: visible;
                        }

                        @keyframes lightFlow {
                            0% { background-position: 0% 0%; }
                            100% { background-position: 400% 0%; }
                        }

                        @keyframes textGlow {
                            0% { 
                                text-shadow: 0 1px 0 #0051ff, 0 2px 0 #0077ff, 0 3px 0 #009dff, 0 4px 0 #00c3ff, 0 5px 0 #00e9ff, 0 6px 15px rgba(0,119,255,0.9), 0 0 20px rgba(0,200,255,0.8);
                            }
                            100% { 
                                text-shadow: 0 1px 0 #00e9ff, 0 2px 0 #00c3ff, 0 3px 0 #009dff, 0 4px 0 #0077ff, 0 5px 0 #0051ff, 0 6px 30px rgba(0,200,255,0.95), 0 0 40px rgba(255,255,255,0.9);
                            }
                        }
                    `;
								return layout;
							}

							if (playerNumber === 40) {
								css += generateFixedAreaLayout(40);
							}
							style.innerHTML = css.replace(/\s+/g, ' ').trim();
							document.head.appendChild(style);
						};
						cssStyle();

						function expandAndShuffleCards() {
							const originalList = [...lib.card.list];

							lib.card.list = [...originalList, ...originalList, ...originalList, ...originalList];

							for (let i = lib.card.list.length - 1; i > 0; i--) {
								const randomIndex = Math.floor(Math.random() * (i + 1));

								[lib.card.list[i], lib.card.list[randomIndex]] = [lib.card.list[randomIndex], lib.card.list[i]];
							}
						}

						expandAndShuffleCards();
						('step 1');
						game.prepareArena(40);
						var sfsuiji = ['caocaojunzhong', 'caocaojunzhong', 'caocaojunzhong', 'caocaojunzhong', 'caocaojunzhong', 'caocaojunzhong', 'caocaojunzhong', 'caocaojunzhong', 'caocaojunzhong', 'caocaojunzhong', 'yuanshaojunzhong', 'yuanshaojunzhong', 'yuanshaojunzhong', 'yuanshaojunzhong', 'yuanshaojunzhong', 'yuanshaojunzhong', 'yuanshaojunzhong', 'yuanshaojunzhong', 'yuanshaojunzhong', 'yuanshaojunzhong', 'yuanshaojunzhu', 'yuanshaojunzhong', 'yuanshaojunzhong', 'yuanshaojunzhong', 'yuanshaojunzhong', 'yuanshaojunzhong', 'yuanshaojunzhong', 'yuanshaojunzhong', 'yuanshaojunzhong', 'yuanshaojunzhong', 'caocaojunzhong', 'caocaojunzhong', 'caocaojunzhong', 'caocaojunzhong', 'caocaojunzhong', 'caocaojunzhong', 'caocaojunzhong', 'caocaojunzhong', 'caocaojunzhong', 'caocaojunzhu'];

						function shuffleRing(arr) {
							const startIndex = Math.floor(Math.random() * arr.length);
							return arr.slice(startIndex).concat(arr.slice(0, startIndex));
						}

						sfsuiji = shuffleRing(sfsuiji);
						event.sfsuiji = sfsuiji;
						for (let i = 0; i < game.players.length; i++) {
							const pl = game.players[i];
							pl.getId();
							pl.style.backgroundSize = '100% 100%';
							if (sfsuiji[i].indexOf('caocao') == 0) {
								pl.setBackgroundImage('extension/龙舟国战模式/caocaojunback.jpg');
							} else {
								pl.setBackgroundImage('extension/龙舟国战模式/yuanshaojunback.jpg');
							}
							pl.identity = sfsuiji[i];
							pl.setIdentity(sfsuiji[i]);
							if (game.players.length > 8 && pl != game.me) {
								var node = pl;
								node.style.transform = 'scale(0.75)';
								Reflect.defineProperty(node.style, 'transform', {
									set(v) {
										node.style.setProperty('transform', 'scale(0.75)');
									},
									get() {
										return 'scale(0.75)';
									},
								});
								Reflect.defineProperty(node.style, 'webkitTransform', {
									set(v) {
										node.style.setProperty('webkitTransform', 'scale(0.75)');
									},
									get() {
										return 'scale(0.75)';
									},
								});
							}
						}
						('step 2');
						game.chooseCharacter();
						('step 3');
						game.players.map((pl) => {
							if (pl.identity == 'yuanshaojunzhu' || pl.identity == 'caocaojunzhu') {
								pl.maxHp += 2;
								pl.hp += 2;
								pl.update();
							}
						});
						event.trigger('gameStart');
						game.gameDraw();
						var sfsuiji = event.sfsuiji;
						game.phaseLoop(
							game.players.filter((meigejuese, idx) => {
								const firstType = Math.random() > 0.5 ? 'yuanshaojunzhong' : 'caocaojunzhong';

								const candidateIdx = sfsuiji.reduce((acc, type, i) => {
									if (type === firstType) {
										acc.push(i);
									}
									return acc;
								}, []);

								let firstIdx = -1;
								for (const i of candidateIdx) {
									const next1Idx = (i + 1) % sfsuiji.length;
									const next2Idx = (i + 2) % sfsuiji.length;
									const targetType = firstType === 'yuanshaojunzhong' ? 'caocaojunzhong' : 'yuanshaojunzhong';

									if (sfsuiji[next1Idx] === targetType && sfsuiji[next2Idx] === targetType) {
										firstIdx = i;
										break;
									}
								}

								if (firstIdx === -1) {
									firstIdx = candidateIdx[0] || 0;
								}

								return idx === firstIdx;
							})[0].previous,
						);
					},
					translate: {
						caocaojunzhu: `<img src="${lib.assetURL}extension/龙舟国战模式/caocaojun.png" width="25" height="25">`,
						caocaojunzhong: `<img src="${lib.assetURL}extension/龙舟国战模式/caocaojun.png" width="25" height="25">`,
						yuanshaojunzhu: `<img src="${lib.assetURL}extension/龙舟国战模式/yuanshaojun.png" width="25" height="25">`,
						yuanshaojunzhong: `<img src="${lib.assetURL}extension/龙舟国战模式/yuanshaojun.png" width="25" height="25">`,
					},
					game: {
						chooseCharacter() {
							const next = game.createEvent('chooseCharacter', false);
							next.showConfig = true;
							next.setContent(function () {
								'step 0';
								let list;
								event.listyuanshaojun = ['new_yuanshao', 'nzry_xuyou', 'zhanghe星张郃', 'zm_gaolan', 'chenlin星陈琳', 'yanwen', 'yj_jushou', 'chunyuqiong', 'guotufengji', 'ns_shenpei', 'sgksk_yanliang', 'sgksk_wenchou', 'tianfeng', 'bingmou_xunchen', 'yuantanyuanshang', 'lvkuanglvxiang吕旷吕翔4', 'quyi', 'hanmeng', 'xinping辛评', 'gaogan高干'];
								event.listcaocaojun = ['re_caocao', 'xunyu', 'xunyou', 're_guojia', 'xuhuang', 'yujin', 're_zhangliao', 'jsp_guanyu', 'hanhaoshihuan勇往直前', 'caoren', 'caohong', 'chengyu', 'liuye', 'zangba', 'manchong', 'litong', 'zhangxiu星张绣', 'sp_jiaxu', 're_xiahouyuan', 're_xiahoudun'];
								switch (game.me.identity) {
									case 'caocaojunzhu':
										list = ['re_caocao'];
										break;
									case 'yuanshaojunzhu':
										list = ['new_yuanshao'];
										break;
									case 'caocaojunzhong':
										list = event.listcaocaojun.filter((general) => general !== 're_caocao');
										break;
									case 'yuanshaojunzhong':
										list = event.listyuanshaojun.filter((general) => general !== 'new_yuanshao');
										break;
								}
								const dialog = ui.create.dialog('选择角色', 'hidden', [list, 'character']);
								game.me.chooseButton(dialog, true).set('onfree', true);
								('step 1');
								game.me.init(result.buttons[0].link);
								switch (lib.character[result.buttons[0].link][1]) {
									case 'wei':
										event.listcaocaojun.remove(result.buttons[0].link);
										break;
									case 'qun':
										event.listyuanshaojun.remove(result.buttons[0].link);
										break;
								}

								for (const i of game.players) {
									const pl = i;
									if (pl != game.me && pl != event.player) {
										var character;
										switch (pl.identity) {
											case 'caocaojunzhu':
												character = 're_caocao';
												break;
											case 'yuanshaojunzhu':
												character = 'new_yuanshao';
												break;
											case 'caocaojunzhong':
												character = event.listcaocaojun.filter((general) => general !== 're_caocao').randomGet();
												break;
											case 'yuanshaojunzhong':
												character = event.listyuanshaojun.filter((general) => general !== 'new_yuanshao').randomGet();
												break;
										}
										pl.init(character);
										const selectshili = lib.character[character][1];
										switch (selectshili) {
											case 'wei':
												event.listcaocaojun.remove(character);
												break;
											case 'qun':
												event.listyuanshaojun.remove(character);
												break;
										}
									}
								}

								setTimeout(function () {
									ui.arena.classList.remove('choose-character');
								}, 500);
							});
						},
					},
					element: {
						player: {
							dieAfter() {
								if (this.identity.endsWith('junzhu')) {
									const selfCampPrefix = game.me.identity.includes('caocaojun') ? 'caocaojun' : 'yuanshaojun';

									const aliveAllyLord = game.players.some((player) => player.identity === `${selfCampPrefix}zhu` && player.isAlive());

									game.over(aliveAllyLord);
								}
							},
						},
					},
					ai: {
						get: {
							attitude(from, to) {
								if (from == to) {
									return 5;
								}

								if (from.identity.includes('caocaojun') && to.identity.includes('caocaojun')) {
									return to.identity === 'caocaojunzhu' ? 10 : 5;
								} else if (from.identity.includes('yuanshaojun') && to.identity.includes('yuanshaojun')) {
									return to.identity === 'yuanshaojunzhu' ? 10 : 5;
								}

								return to.identity.includes('junzhu') ? -10 : -5;
							},
						},
					},
				},
				{
					translate: `官渡大战`,
					config: {
						continue_game: {
							name: '显示再战',
							init: true,
							onclick(bool) {
								game.saveConfig('continue_game', bool, this._link.config.mode);
								if (get.config('continue_game')) {
									if (!ui.continue_game && _status.over) {
										ui.continue_game = ui.create.control('再战', game.reloadCurrent);
									}
								} else if (ui.continue_game) {
									ui.continue_game.close();
									delete ui.continue_game;
								}
							},
						},
					},
				},
			);

			game.addMode(
				'shijunzhizhan',
				{
					start() {
						'step 0';
						const cssStyle = function () {
							const style = document.createElement('style');
							style.innerHTML = "[data-number='12']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(80% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='2']{top:calc(200% / 3 - 175px);left:calc(95% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='3']{top:calc(200% / 3 - 330px);left:calc(95% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='4']{top:30px;left:calc(80% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='5']{top:5px;left:calc(65% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='6']{top:0;left:calc(50% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='7']{top:5px;left:calc(35% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='8']{top:30px;left:calc(20% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='9']{top:calc(200% / 3 - 330px);left:calc(5% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='10']{top:calc(200% / 3 - 175px);left:calc(5% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='11']{top:calc(200% / 3 - 145px);left:calc(20% - 75px);}";

							style.innerHTML += `
                            [data-number='12']::before {
                                content: '十军之战';
                                position: fixed;
                                left: 50%;
                                top: 50%;
                                transform: translate(-50%, -50%);
                                font-size: 200px;
                                font-family: chaozisheleishenbianjianfan;
                                font-weight: 900;
                                white-space: nowrap;
                                z-index: 999;
                                pointer-events: none;

                                background: linear-gradient(90deg, #fff, #00f0ff, #0076ff, #6633ff, #c200ff, #ff00b8, #ff8800, #ffee00, #00ff88, #00b8ff, #fff);
                                background-size: 1200% 100%;
                                -webkit-background-clip: text;
                                background-clip: text;
                                color: transparent;

                                text-shadow: 0 2px #009dff, 0 4px #0066ff, 0 6px #0033ff, 0 8px #2200ff, 0 10px 30px rgba(0, 70, 255, 0.9), 0 0 50px rgba(0, 190, 255, 0.8);

                                animation: yRotateAnti 8s linear infinite, tenColorFlow 8s linear infinite, glowBoost 3s ease-in-out infinite alternate;

                                transform-style: preserve-3d;
                                backface-visibility: hidden;
                            }

                            @keyframes yRotateAnti {
                              0% { transform: translate(-50%, -50%) rotateY(0deg); }
                              50% { transform: translate(-50%, -50%) rotateY(360deg); }
                              100% { transform: translate(-50%, -50%) rotateY(0deg); }
                            }

                            @keyframes tenColorFlow {
                                0% { background-position: 0% 0%; }
                                100% { background-position: 1200% 0%; }
                            }

                            @keyframes glowBoost {
                                0% {
                                    text-shadow: 0 2px #009dff, 0 4px #0066ff, 0 6px #0033ff, 0 8px #2200ff, 0 10px 30px rgba(0, 70, 255, 0.9), 0 0 50px rgba(0, 190, 255, 0.8);
                                }
                                100% {
                                    text-shadow: 0 2px #00ffff, 0 4px #00ccff, 0 6px #0099ff, 0 8px #0066ff, 0 10px 60px rgba(0, 120, 255, 1), 0 0 100px rgba(0, 240, 255, 0.95), 0 0 150px rgba(100, 255, 255, 0.8);
                                }
                            }
                        `;
							document.head.appendChild(style);
						};
						cssStyle();
						('step 1');
						game.prepareArena(12);
						let sfsuiji = ['shijunxiaozhu', 'shijunnijun1', 'shijunnijun2', 'shijunnijun3', 'shijunnijun4', 'shijunnijun5', 'shijunnijun6', 'shijunnijun7', 'shijunnijun8', 'shijunnijun9', 'shijunnijun10', 'shijunnijun11'];

						function shuffleRing(arr) {
							const startIndex = Math.floor(Math.random() * arr.length);
							return arr.slice(startIndex).concat(arr.slice(0, startIndex));
						}

						sfsuiji = shuffleRing(sfsuiji);
						event.sfsuiji = sfsuiji;
						event.jpgn = 0;
						for (let i = 0; i < game.players.length; i++) {
							const pl = game.players[i];
							pl.getId();
							pl.style.backgroundSize = '100% 100%';
							if (sfsuiji[i].includes('xiaozhu')) {
								pl.setBackgroundImage('extension/龙舟国战模式/xiaozhuback.jpg');
							} else {
								event.jpgn++;
								pl.setBackgroundImage('extension/龙舟国战模式/nijunback' + event.jpgn + '.jpg');
							}
							pl.identity = sfsuiji[i];
							pl.setIdentity(sfsuiji[i]);
							if (game.players.length > 8 && pl != game.me) {
								var node = pl;
								node.style.transform = 'scale(0.65)';
								Reflect.defineProperty(node.style, 'transform', {
									set(v) {
										node.style.setProperty('transform', 'scale(0.65)');
									},
									get() {
										return 'scale(0.65)';
									},
								});
								Reflect.defineProperty(node.style, 'webkitTransform', {
									set(v) {
										node.style.setProperty('webkitTransform', 'scale(0.65)');
									},
									get() {
										return 'scale(0.65)';
									},
								});
							}
						}
						('step 2');
						game.chooseCharacter();
						('step 3');
						game.players.map((pl) => {
							if (pl.identity == 'shijunxiaozhu') {
								pl.maxHp += 5;
								pl.hp += 5;
								pl.update();
							}
						});
						event.trigger('gameStart');
						game.gameDraw();
						game.phaseLoop(game.players.filter((pl) => pl.identity == 'shijunxiaozhu')[0]);
					},
					translate: {
						shijunxiaozhu: `<img src="${lib.assetURL}extension/龙舟国战模式/shijunxiaozhu.png" width="25" height="36">`,
						shijunnijun1: `<img src="${lib.assetURL}extension/龙舟国战模式/shijunnijun.png" width="25" height="36">`,
						shijunnijun2: `<img src="${lib.assetURL}extension/龙舟国战模式/shijunnijun.png" width="25" height="36">`,
						shijunnijun3: `<img src="${lib.assetURL}extension/龙舟国战模式/shijunnijun.png" width="25" height="36">`,
						shijunnijun4: `<img src="${lib.assetURL}extension/龙舟国战模式/shijunnijun.png" width="25" height="36">`,
						shijunnijun5: `<img src="${lib.assetURL}extension/龙舟国战模式/shijunnijun.png" width="25" height="36">`,
						shijunnijun6: `<img src="${lib.assetURL}extension/龙舟国战模式/shijunnijun.png" width="25" height="36">`,
						shijunnijun7: `<img src="${lib.assetURL}extension/龙舟国战模式/shijunnijun.png" width="25" height="36">`,
						shijunnijun8: `<img src="${lib.assetURL}extension/龙舟国战模式/shijunnijun.png" width="25" height="36">`,
						shijunnijun9: `<img src="${lib.assetURL}extension/龙舟国战模式/shijunnijun.png" width="25" height="36">`,
						shijunnijun10: `<img src="${lib.assetURL}extension/龙舟国战模式/shijunnijun.png" width="25" height="36">`,
						shijunnijun11: `<img src="${lib.assetURL}extension/龙舟国战模式/shijunnijun.png" width="25" height="36">`,
					},
					game: {
						chooseCharacter() {
							const next = game.createEvent('chooseCharacter', false);
							next.showConfig = true;
							next.setContent(function () {
								'step 0';
								const num = get.config('choice_num');
								var isDouble = get.config('double_character');
								var isDoubleYishi = get.config('double_yishili');
								var isDoubleNitong = get.config('double_nitong');
								event.weilist = [];
								event.shulist = [];
								event.wulist = [];
								event.qunlist = [];
								event.list = [];

								for (const i in lib.character) {
									if (lib.filter.characterDisabled(i)) {
										continue;
									}
									const group = lib.character[i][1];
									if (group == 'wei') {
										event.weilist.push(i);
									}
									if (group == 'shu') {
										event.shulist.push(i);
									}
									if (group == 'wu') {
										event.wulist.push(i);
									}
									if (group == 'qun') {
										event.qunlist.push(i);
									}
									event.list.push(i);
								}
								const isXiaoZhu = game.me.identity === 'shijunxiaozhu';
								const isNiJun = game.me.identity.startsWith('shijunnijun');
								const allForces = ['wei', 'shu', 'wu', 'qun'];
								event.xiaoZhuForce = '';
								event.niJunForce = '';
								let list = [];

								if (isDoubleNitong) {
									if (isXiaoZhu) {
										list = event.list.randomGets(num);
										event.TF = true;
									} else {
										event.xiaoZhuForce = allForces.randomGet();
										const list0 = event[`${event.xiaoZhuForce}list`].randomGets(num);
										var xzForce = event.xiaoZhuForce;
										var otherForces = ['wei', 'shu', 'wu', 'qun'].filter((f) => f !== xzForce);
										event.niJunForce = otherForces.randomGet();
										list = event[`${event.niJunForce}list`].randomGets(num);
										let xiaoZhuPlayer = null;
										game.players.forEach((p) => {
											if (p.identity === 'shijunxiaozhu') {
												xiaoZhuPlayer = p;
											}
										});
										var characters = list0.randomGets(2);
										xiaoZhuPlayer.init(characters[0], characters[1]);
										[characters[0], characters[1]].forEach((char) => {
											const selectshili = lib.character[char][1];
											switch (selectshili) {
												case 'wei':
													event.weilist.remove(char);
													break;
												case 'shu':
													event.shulist.remove(char);
													break;
												case 'wu':
													event.wulist.remove(char);
													break;
												case 'qun':
													event.qunlist.remove(char);
													break;
											}
											event.list.remove(char);
										});
									}
								} else if (isDouble) {
									list = event.list.randomGets(num);
								} else {
									list = event.list.randomGets(num);
								}

								const dialog = ui.create.dialog('选择角色', 'hidden', [list, 'character']);
								dialog.setCaption('选择角色');

								game.me.chooseButton(dialog, isDouble ? 2 : 1, true).set('onfree', true).filterButton = function (button) {
									if (!isDoubleYishi && !isDoubleNitong) {
										return true;
									}
									return ui.selected.buttons.length < 1 || lib.character[button.link][1] == lib.character[ui.selected.buttons[0].link][1];
								};

								if (lib.config.mode_config.shijunzhizhan.change_choice == true) {
									ui.create.cheat = function () {
										_status.createControl = ui.cheat2;
										ui.cheat = ui.create.control('更换', function () {
											if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
												return;
											}
											const buttons = ui.create.div('.buttons');
											const node = _status.event.dialog.buttons[0].parentNode;
											if (isDoubleNitong) {
												if (isXiaoZhu) {
													list = event[`${event.xiaoZhuForce}list`].randomGets(num);
												} else {
													list = event.list.randomGets(num);
												}
											} else {
												list = event.list.randomGets(num);
											}
											_status.event.dialog.buttons = ui.create.buttons(list, 'character', buttons);
											_status.event.dialog.content.insertBefore(buttons, node);
											buttons.addTempClass('start');
											node.remove();
											game.uncheck();
											game.check();
										});
										delete _status.createControl;
									};
									ui.create.cheat();
								}

								if (lib.config.mode_config.shijunzhizhan.free_choose == true) {
									event.dialogxx = ui.create.characterDialog('heightset');
									ui.create.cheat2 = function () {
										ui.cheat2 = ui.create.control('自由选将', function () {
											if (this.dialog == _status.event.dialog) {
												this.dialog.close();
												_status.event.dialog = this.backup;
												this.backup.open();
												delete this.backup;
												game.uncheck();
												game.check();
											} else {
												this.backup = _status.event.dialog;
												_status.event.dialog.close();
												_status.event.dialog = _status.event.parent.dialogxx;
												this.dialog = _status.event.dialog;
												this.dialog.open();
												game.uncheck();
												game.check();
											}
										});
									};
									ui.create.cheat2();
								}
								('step 1');

								if (ui.cheat) {
									ui.cheat.close();
									delete ui.cheat;
								}
								if (ui.cheat2) {
									ui.cheat2.close();
									delete ui.cheat2;
								}
								let PL_characters = [];

								var isDouble = get.config('double_character');
								var isDoubleYishi = get.config('double_yishili');
								var isDoubleNitong = get.config('double_nitong');
								if (isDouble && result.buttons.length >= 2) {
									PL_characters = [result.buttons[0].link, result.buttons[1].link];
									game.me.init(PL_characters[0], PL_characters[1]);

									if (isXiaoZhu && (isDoubleYishi || isDoubleNitong)) {
										event.xiaoZhuForce = lib.character[PL_characters[0]][1];
									}
								} else {
									PL_characters = [result.buttons[0].link];
									game.me.init(PL_characters[0]);

									if (isXiaoZhu && (isDoubleYishi || isDoubleNitong)) {
										event.xiaoZhuForce = lib.character[PL_characters[0]][1];
									}
								}

								PL_characters.forEach((char) => {
									const PL_shili = lib.character[char][1];
									switch (PL_shili) {
										case 'wei':
											event.weilist.remove(char);
											break;
										case 'shu':
											event.shulist.remove(char);
											break;
										case 'wu':
											event.wulist.remove(char);
											break;
										case 'qun':
											event.qunlist.remove(char);
											break;
									}
									event.list.remove(char);
								});

								for (const i of game.players) {
									const pl = i;
									if (pl == game.me || pl == event.player || pl.identity === 'shijunxiaozhu') {
										continue;
									}
									const curIsDouble = get.config('double_character');
									const curIsDoubleYishi = get.config('double_yishili');
									const curIsDoubleNitong = get.config('double_nitong');
									var characters = [];
									const plIsXiaoZhu = pl.identity === 'shijunxiaozhu';
									const plIsNiJun = pl.identity.startsWith('shijunnijun');

									var xzForce = event.xiaoZhuForce;
									var otherForces = ['wei', 'shu', 'wu', 'qun'].filter((f) => f !== xzForce);

									if (curIsDoubleNitong && !event.niJunForce && event.TF) {
										event.niJunForce = otherForces.randomGet();
									}

									if (curIsDouble) {
										if (curIsDoubleNitong) {
											var targetForce = plIsNiJun ? event.niJunForce : otherForces.randomGet();
											characters = event[`${targetForce}list`].randomGets(2);
										} else if (curIsDoubleYishi) {
											var targetForce = otherForces.randomGet();
											characters = event[`${targetForce}list`].randomGets(2);
										} else {
											characters = event.list.randomGets(2);
										}
									} else {
										characters = [event.list.randomGet()];
									}

									if (characters.length >= 2) {
										pl.init(characters[0], characters[1]);
									} else {
										pl.init(characters[0]);
									}

									characters.forEach((char) => {
										const selectshili = lib.character[char][1];
										switch (selectshili) {
											case 'wei':
												event.weilist.remove(char);
												break;
											case 'shu':
												event.shulist.remove(char);
												break;
											case 'wu':
												event.wulist.remove(char);
												break;
											case 'qun':
												event.qunlist.remove(char);
												break;
										}
										event.list.remove(char);
									});
								}

								setTimeout(function () {
									ui.arena.classList.remove('choose-character');
								}, 500);
							});
						},
					},
					element: {
						player: {
							dieAfter() {
								const xiaoZhu = game.players.filter((p) => p.identity === 'shijunxiaozhu')[0];
								const allNiJun = game.players.filter((p) => p.identity.startsWith('shijunnijun'));
								const aliveNiJun = allNiJun.filter((p) => p.isAlive());
								const isXiaoZhuDead = !xiaoZhu || !xiaoZhu.isAlive();
								const isAllNiJunDead = aliveNiJun.length === 0;

								if (isXiaoZhuDead || isAllNiJunDead) {
									if (game.me.identity === 'shijunxiaozhu') {
										game.over(isAllNiJunDead);
									} else if (game.me.identity.startsWith('shijunnijun')) {
										game.over(isXiaoZhuDead);
									} else {
										game.over(false);
									}
								}
							},
						},
					},
					ai: {
						get: {
							attitude(from, to) {
								if (from == to) {
									return 5;
								}
								if (from.identity === 'shijunxiaozhu') {
									return to.identity === 'shijunxiaozhu' ? 10 : -10;
								} else if (from.identity.startsWith('shijunnijun')) {
									return to.identity.startsWith('shijunnijun') ? 5 : -10;
								}
								return 0;
							},
						},
					},
				},
				{
					translate: '十军之战',
					config: {
						free_choose: {
							name: '自由选将',
							init: false,
							onclick(bool) {
								game.saveConfig('free_choose', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								if (!ui.cheat2 && get.config('free_choose')) {
									ui.create.cheat2();
								} else if (ui.cheat2 && !get.config('free_choose')) {
									ui.cheat2.close();
									delete ui.cheat2;
									if (ui.cheat2x) {
										ui.cheat2x.close();
										delete ui.cheat2;
									}
								}
							},
						},
						change_choice: {
							name: '开启换将卡',
							init: true,
							onclick(bool) {
								game.saveConfig('change_choice', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								if (!ui.cheat && get.config('change_choice')) {
									ui.create.cheat();
								} else if (ui.cheat && !get.config('change_choice')) {
									ui.cheat.close();
									delete ui.cheat;
								}
							},
							forced: true,
							restart: true,
						},
						continue_game: {
							name: '显示再战',
							init: false,
							onclick(bool) {
								game.saveConfig('continue_game', bool, this._link.config.mode);
								if (get.config('continue_game')) {
									if (!ui.continue_game && _status.over) {
										ui.continue_game = ui.create.control('再战', game.reloadCurrent);
									}
								} else if (ui.continue_game) {
									ui.continue_game.close();
									delete ui.continue_game;
								}
							},
						},
						double_character: {
							name: '双将模式',
							init: false,
							forced: true,
							restart: true,
						},
						double_yishili: {
							name: '双将异势力模式',
							init: false,
							forced: true,
							restart: true,
						},
						double_nitong: {
							name: '双将逆同势力模式',
							init: false,
							forced: true,
							restart: true,
						},
						double_hp: {
							name: '双将体力上限',
							init: 'hejiansan',
							item: {
								hejiansan: '和减三',
								pingjun: '平均值',
								zuidazhi: '最大值',
								zuixiaozhi: '最小值',
								zonghe: '相加',
							},
						},
						choice_num: {
							name: '候选武将数',
							init: '10',
							item: {
								3: '三',
								4: '四',
								5: '五',
								6: '六',
								7: '七',
								8: '八',
								9: '九',
								10: '十',
							},
						},
					},
				},
			);
			lib.skill._shijunzhizhanewaixuanjiang = {
				trigger: {
					global: 'gameStart',
				},
				silent: true,
				filter(event, player) {
					return player.identity === 'shijunxiaozhu';
				},
				content() {
					'step 0';
					const isDoubleNitong = get.config('double_nitong');
					const names = [];
					for (const key in lib.character) {
						if (lib.filter.characterDisabled2(key)) {
							continue;
						}
						if (key != player.name && key != player.name1 && key != player.name2 && (isDoubleNitong ? lib.character[key][1] == player.group : true)) {
							names.push(key);
						}
					}
					const list = names.randomGets(100);
					player.chooseButton(ui.create.dialog('请选择十军之战另外8名武将', [list, 'character']), 8, true);
					('step 1');
					if (result.bool) {
						result.links.map((k) => lib.character[k][3].map((i) => player.addSkill(i)));
						result.links.forEach((key, index) => {
							const leftVal = `calc(40% - 95px + ${index * 60}px)`;
							const divimg = ui.create
								.div(
									{
										width: '60px',
										height: '40px',
										top: '185px',
										left: leftVal,
										position: 'absolute',
										backgroundSize: 'contain',
										backgroundRepeat: 'no-repeat',
									},
									ui.arena,
								)
								.setBackground(key, 'character');
							divimg.style.backgroundSize = 'contain';
						});
					}
				},
			};

			game.addMode(
				'quankuochongpai',
				{
					start() {
						'step 0';
						const cssStyle = function () {
							const style = document.createElement('style');
							style.innerHTML = "[data-number='12']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(80% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='2']{top:calc(200% / 3 - 175px);left:calc(95% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='3']{top:(200% / 3 - 175px);left:calc(95% - 80px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='4']{top:30px;left:calc(80% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='5']{top:5px;left:calc(65% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='6']{top:0;left:calc(50% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='7']{top:5px;left:calc(35% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='8']{top:30px;left:calc(20% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='9']{top:(200% / 3 - 175px);left:calc(5% - 70px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='10']{top:calc(200% / 3 - 175px);left:calc(5% - 75px);}";
							style.innerHTML += "[data-number='12']>.player[data-position='11']{top:calc(200% / 3 - 145px);left:calc(20% - 75px);}";
							document.head.appendChild(style);
						};
						cssStyle();
						function expandAndShuffleCards() {
							const originalList = [...lib.card.list];
							lib.card.list = [...originalList, ...originalList, ...originalList, ...originalList];
							for (let i = lib.card.list.length - 1; i > 0; i--) {
								const randomIndex = Math.floor(Math.random() * (i + 1));
								[lib.card.list[i], lib.card.list[randomIndex]] = [lib.card.list[randomIndex], lib.card.list[i]];
							}
							function shedingjinengjuesepai() {
								const list = [];
								let i, j, name;
								for (let i in lib.character) {
									if (lib.config.forbidai.includes(i)) {
										continue;
									}
									if (lib.config.forbidall.includes(i)) {
										continue;
									}
									if (lib.config.banned.includes(i)) {
										continue;
									}
									if (lib.character[i][4] && lib.character[i][4].includes()) {
										continue;
									}
									if (lib.character[i][4] && lib.character[i][4].includes('hiddenboss')) {
										continue;
									}
									list.push(i);
								}
								const suit = ['heart', 'diamond', 'club', 'spade'];

								for (const i of list) {
									name = i + '_charactercard';

									let charName = i;
									const mode = get.mode();
									const ext = '.jpg';
									var src;
									let dbimage = null,
										extimage = null,
										modeimage = null;
									const nameinfo = lib.character[charName];

									if (lib.characterPack['mode_' + mode] && lib.characterPack['mode_' + mode][charName]) {
										if (mode == 'guozhan') {
											if (charName.indexOf('gz_shibing') == 0) {
												charName = charName.slice(3, 11);
											} else {
												charName = charName.slice(3);
											}
										} else {
											modeimage = mode;
										}
									}

									if (!modeimage && nameinfo && nameinfo[4]) {
										for (let k = 0; k < nameinfo[4].length; k++) {
											const info = nameinfo[4][k];
											if (info.indexOf('ext:') == 0) {
												extimage = info;
												break;
											} else if (info.indexOf('db:') == 0) {
												dbimage = info;
												break;
											} else if (info.indexOf('mode:') == 0) {
												modeimage = info.slice(5);
												break;
											} else if (info.indexOf('character:') == 0) {
												charName = info.slice(10);
												break;
											}
										}
									}

									if (extimage) {
										src = extimage;
									}
									if (modeimage) {
										src = 'mode/' + modeimage + '/character/' + charName;
									}
									if (lib.config.skin[i]) {
										src = 'skin/' + i + '/' + lib.config.skin[i];
									} else if (!extimage) {
										src = 'character/' + charName;
									}

									lib.card[name] = {
										enable: true,
										type: 'character',
										image: src,
										color: ['red', 'black'].randomGet(),
										opacity: 1,
										textShadow: 'black 0 0 2px',
										chongzhu: true,
										filterTarget(card, player, target) {
											return player == target;
										},
										selectTarget: -1,
										content() {
											const name = card.name.slice(0, card.name.indexOf('_charactercard'));
											target.$gain2(card);
											const skills = lib.character[name][3];
											const targetskills = target.get('s');
											const skill = targetskills.randomGet();
											lib.skill[skill + 'charactercard'] = {
												forced: true,
												popup: false,
												mark: 'card',
												intro: {
													name(storage, player) {
														if (_status.video) {
															if (player.marks.charactercard && player.marks.charactercard.name) {
																let name = player.marks.charactercard.name;
																if (name) {
																	name = name.slice(0, name.indexOf('_charactercard'));
																	return get.translation(name);
																}
															}
															return '';
														} else {
															return get.translation(player.additionalSkills.charactercard[0]);
														}
													},
													content(storage, player) {
														if (_status.video) {
															if (player.marks.charactercard && player.marks.charactercard.name) {
																let name = player.marks.charactercard.name;
																if (name) {
																	name = name.slice(0, name.indexOf('_charactercard'));
																	return get.skillintro(name, true, true);
																}
															}
															return '';
														} else {
															return lib.translate[player.additionalSkills.charactercard[0] + '_info'];
														}
													},
													onunmark(storage, player) {
														player.removeSkill(skill + 'charactercard');
														delete player.storage.charactercard;
													},
												},
											};
											skills.map((sk) => {
												game.log(target, '获得技能', '【' + get.translation(sk) + '】');
												target.addSkill(sk);
											});
											target.checkMarks();
											target.storage[skill + 'charactercard'] = card;
											target.addSkill(skill + 'charactercard');
										},
										ai: {
											order: 9,
											result: {
												target: (function (name) {
													return function (player, target) {
														if (target.additionalSkills.charactercard && target.additionalSkills.charactercard.length) {
															return 0;
														}
														return lib.character[name][2] <= 4 ? 1 : 0;
													};
												})(i),
											},
										},
									};
									lib.translate[name] = get.translation(i);
									lib.translate[name + '_info'] = get.skillintro(i, true, true);
								}

								for (const i of list) {
									lib.card.list.push([suit.randomGet(), Math.ceil(Math.random() * 13), i + '_charactercard']);
								}
							}
							shedingjinengjuesepai();
							const suit = ['heart', 'diamond', 'club', 'spade'];
							const exclude = ['guozhan', 'extra', 'standard', 'sp'];
							const allKeys = Object.keys(lib.cardPack);
							const keptKeys = allKeys.filter((key) => !exclude.includes(key));
							const result = keptKeys.flatMap((key) => lib.cardPack[key]);
							const finalResult = result.filter((item) => item !== 'tongzhoutongxin' && item !== 'longfan');
							finalResult.push('du');
							finalResult.forEach((i) => {
								if (get.type(i, 'trick') === 'basic' || get.type(i, 'trick') === 'trick') {
									const count = Math.random() < 0.5 ? 2 : 3;
									for (let n = 0; n < count; n++) {
										lib.card.list.push([suit.randomGet(), Math.ceil(Math.random() * 13), i]);
									}
								} else {
									lib.card.list.push([suit.randomGet(), Math.ceil(Math.random() * 13), i]);
								}
							});
							for (let n = 0; n < 9; n++) {
								lib.card.list.push([suit.randomGet(), Math.ceil(Math.random() * 13), 'du']);
							}
							lib.card.list.sort(() => Math.random() - 0.5);
						}
						expandAndShuffleCards();
						('step 1');
						game.prepareArena(12);
						var sfsuiji = ['dijiangfangzhong', 'dijiangfangzhong', 'dijiangfangzhong', 'youjiangfangzhong', 'youjiangfangzhong', 'youjiangfangzhong', 'youjiangfangzhu', 'youjiangfangzhong', 'youjiangfangzhong', 'dijiangfangzhong', 'dijiangfangzhong', 'dijiangfangzhu'];

						function shuffleRing(arr) {
							const startIndex = Math.floor(Math.random() * arr.length);
							return arr.slice(startIndex).concat(arr.slice(0, startIndex));
						}

						sfsuiji = shuffleRing(sfsuiji);
						event.sfsuiji = sfsuiji;
						for (let i = 0; i < game.players.length; i++) {
							const pl = game.players[i];
							pl.getId();
							pl.style.backgroundSize = '100% 100%';
							if (sfsuiji[i].indexOf('youjiang') == 0) {
								pl.setBackgroundImage('extension/龙舟国战模式/youjiangback.jpg');
							} else {
								pl.setBackgroundImage('extension/龙舟国战模式/dijiangback.jpg');
							}
							pl.identity = sfsuiji[i];
							pl.setIdentity(sfsuiji[i]);
							if (game.players.length > 8 && pl != game.me) {
								var node = pl;
								node.style.transform = 'scale(0.75)';
								Reflect.defineProperty(node.style, 'transform', {
									set(v) {
										node.style.setProperty('transform', 'scale(0.75)');
									},
									get() {
										return 'scale(0.75)';
									},
								});
								Reflect.defineProperty(node.style, 'webkitTransform', {
									set(v) {
										node.style.setProperty('webkitTransform', 'scale(0.75)');
									},
									get() {
										return 'scale(0.75)';
									},
								});
							}
						}
						('step 2');
						game.chooseCharacter();
						('step 3');
						game.players.map((pl) => {
							if (pl.identity == 'dijiangfangzhu' || pl.identity == 'youjiangfangzhu') {
								pl.maxHp += 2;
								pl.hp += 2;
								pl.update();
							}
						});
						event.trigger('gameStart');
						game.gameDraw();
						var sfsuiji = event.sfsuiji;

						const firstType = Math.random() > 0.5 ? 'youjiangfangzhong' : 'dijiangfangzhong';
						const candidateIdx = [];
						sfsuiji.forEach((type, i) => {
							if (type === firstType) {
								candidateIdx.push(i);
							}
						});
						let firstIdx = -1;
						for (const i of candidateIdx) {
							const next1Idx = (i + 1) % sfsuiji.length;
							const next2Idx = (i + 2) % sfsuiji.length;
							const targetType = firstType === 'youjiangfangzhong' ? 'dijiangfangzhong' : 'youjiangfangzhong';
							if (sfsuiji[next1Idx] === targetType && sfsuiji[next2Idx] === targetType) {
								firstIdx = i;
								break;
							}
						}
						if (firstIdx === -1) {
							firstIdx = candidateIdx[0] || 0;
						}
						game.phaseLoop(game.players.filter((_, idx) => idx === firstIdx)[0].previous);
					},
					translate: {
						dijiangfangzhu: `<img src="${lib.assetURL}extension/龙舟国战模式/dijiangfangzhu.png" width="25" height="25">`,
						youjiangfangzhu: `<img src="${lib.assetURL}extension/龙舟国战模式/youjiangfangzhu.png" width="25" height="25">`,
						dijiangfangzhong: `<img src="${lib.assetURL}extension/龙舟国战模式/dijiangfangzhong.png" width="25" height="25">`,
						youjiangfangzhong: `<img src="${lib.assetURL}extension/龙舟国战模式/youjiangfangzhong.png" width="25" height="25">`,
					},
					game: {
						chooseCharacter() {
							const next = game.createEvent('chooseCharacter', false);
							next.showConfig = true;
							next.setContent(function () {
								'step 0';
								const num = get.config('choice_num');
								var isDouble = get.config('double_character');
								var isDoubleSameForce = get.config('double_tongshili');
								var isDoubleSameForceAlly = get.config('double_tongshiliduiyou');
								event.weilist = [];
								event.shulist = [];
								event.wulist = [];
								event.qunlist = [];
								event.list = [];
								for (const i in lib.character) {
									if (lib.filter.characterDisabled(i)) {
										continue;
									}
									const group = lib.character[i][1];
									if (group == 'wei') {
										event.weilist.push(i);
									}
									if (group == 'shu') {
										event.shulist.push(i);
									}
									if (group == 'wu') {
										event.wulist.push(i);
									}
									if (group == 'qun') {
										event.qunlist.push(i);
									}
									event.list.push(i);
								}
								if (isDoubleSameForceAlly) {
									var selfCampPrefix = game.me.identity.includes('youjiang') ? 'youjiang' : 'dijiang';
									const allyLord = game.players.filter((p) => p.identity === `${selfCampPrefix}fangzhu`)[0];
								}
								let list = [];
								if (isDoubleSameForceAlly) {
									var DY_group = ['wei', 'shu', 'wu', 'qun'].randomGet();
									event.DY_group = DY_group;
									list = event[`${DY_group}list`].randomGets(num);
								} else {
									list = event.list.randomGets(num);
								}
								const dialog = ui.create.dialog('选择角色', 'hidden', [list, 'character']);
								dialog.setCaption('选择角色');
								let filterButton = (button) => {
									return true;
								};
								if (isDoubleSameForce) {
									filterButton = function (button) {
										return ui.selected.buttons.length < 1 || lib.character[button.link][1] == lib.character[ui.selected.buttons[0].link][1];
									};
								}
								game.me
									.chooseButton(dialog, isDouble || isDoubleSameForce ? 2 : 1, true)
									.set('onfree', true)
									.set('filterButton', filterButton);
								if (lib.config.mode_config.quankuochongpai.change_choice == true) {
									ui.create.cheat = function () {
										_status.createControl = ui.cheat2;
										ui.cheat = ui.create.control('更换', function () {
											if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
												return;
											}
											const buttons = ui.create.div('.buttons');
											const node = _status.event.dialog.buttons[0].parentNode;
											if (get.config('double_tongshili')) {
												list = event.list.randomGets(num);
											} else if (get.config('double_tongshiliduiyou')) {
												if (DY_group == 'wei') {
													list = event.weilist.randomGets(num);
												}
												if (DY_group == 'shu') {
													list = event.shulist.randomGets(num);
												}
												if (DY_group == 'wu') {
													list = event.wulist.randomGets(num);
												}
												if (DY_group == 'qun') {
													list = event.qunlist.randomGets(num);
												}
											} else {
												list = event.list.randomGets(num);
											}
											_status.event.dialog.buttons = ui.create.buttons(list, 'character', buttons);
											_status.event.dialog.content.insertBefore(buttons, node);
											buttons.addTempClass('start');
											node.remove();
											game.uncheck();
											game.check();
										});
										delete _status.createControl;
									};
									ui.create.cheat();
								}
								if (lib.config.mode_config.quankuochongpai.free_choose == true) {
									event.dialogxx = ui.create.characterDialog('heightset');
									ui.create.cheat2 = function () {
										ui.cheat2 = ui.create.control('自由选将', function () {
											if (this.dialog == _status.event.dialog) {
												this.dialog.close();
												_status.event.dialog = this.backup;
												this.backup.open();
												delete this.backup;
												game.uncheck();
												game.check();
											} else {
												this.backup = _status.event.dialog;
												_status.event.dialog.close();
												_status.event.dialog = _status.event.parent.dialogxx;
												this.dialog = _status.event.dialog;
												this.dialog.open();
												game.uncheck();
												game.check();
											}
										});
									};
									ui.create.cheat2();
								}
								('step 1');
								if (ui.cheat) {
									ui.cheat.close();
									delete ui.cheat;
								}
								if (ui.cheat2) {
									ui.cheat2.close();
									delete ui.cheat2;
								}
								var isDouble = get.config('double_character');
								let PL_characters = [];

								if (isDouble && result?.buttons?.length >= 2) {
									PL_characters = [result.buttons[0].link, result.buttons[1].link];
									game.me.init(PL_characters[0], PL_characters[1]);
								} else {
									PL_characters = [result.buttons[0].link];
									game.me.init(PL_characters[0]);
								}

								PL_characters.forEach((char) => {
									const PL_shili = lib.character[char][1];

									switch (PL_shili) {
										case 'wei':
											event.weilist.remove(char);
											break;
										case 'shu':
											event.shulist.remove(char);
											break;
										case 'wu':
											event.wulist.remove(char);
											break;
										case 'qun':
											event.qunlist.remove(char);
											break;
									}

									event.list.remove(char);
								});

								for (const i of game.players) {
									const pl = i;
									if (pl != game.me && pl != event.player) {
										var isDouble = get.config('double_character');
										var isDoubleSameForce = get.config('double_tongshili');
										var isDoubleSameForceAlly = get.config('double_tongshiliduiyou');
										var character,
											character2,
											characters = [];

										if (isDouble) {
											if (isDoubleSameForceAlly) {
												var selfCampPrefix = game.me.identity.includes('youjiang') ? 'youjiang' : 'dijiang';
												const isAlly = pl.identity.includes(selfCampPrefix);

												var targetForce;
												if (isAlly) {
													targetForce = event.DY_group;
												} else {
													targetForce = targetForce || ['wei', 'shu', 'wu', 'qun'].randomGet();
												}

												var forceList = event[`${targetForce}list`];
												characters = forceList.randomGets(2);
											} else if (isDoubleSameForce) {
												const randomForce = ['wei', 'shu', 'wu', 'qun'].randomGet();
												var forceList = event[`${randomForce}list`];
												characters = forceList.randomGets(2);
											} else {
												characters = event.list.randomGets(2);
											}

											pl.init(characters[0], characters[1]);
										} else {
											character = event.list.randomGet();
											pl.init(character);
											characters = [character];
										}

										characters.forEach((char) => {
											const selectshili = lib.character[char][1];
											switch (selectshili) {
												case 'wei':
													event.weilist.remove(char);
													break;
												case 'shu':
													event.shulist.remove(char);
													break;
												case 'wu':
													event.wulist.remove(char);
													break;
												case 'qun':
													event.qunlist.remove(char);
													break;
											}
											event.list.remove(char);
										});
									}
								}

								setTimeout(function () {
									ui.arena.classList.remove('choose-character');
								}, 500);
							});
						},
					},
					element: {
						player: {
							dieAfter() {
								if (this.identity.endsWith('fangzhu')) {
									const selfCampPrefix = game.me.identity.includes('youjiang') ? 'youjiang' : 'dijiang';

									const aliveAllyLord = game.players.some((player) => player.identity === `${selfCampPrefix}fangzhu` && player.isAlive());

									game.over(aliveAllyLord);
								}
							},
						},
					},
					ai: {
						get: {
							attitude(from, to) {
								if (from == to) {
									return 5;
								}

								if (from.identity.includes('youjiang') && to.identity.includes('youjiang')) {
									return to.identity === 'youjiangfangzhu' ? 10 : 5;
								} else if (from.identity.includes('dijiang') && to.identity.includes('dijiang')) {
									return to.identity === 'dijiangfangzhu' ? 10 : 5;
								}

								return to.identity.includes('fangzhu') ? -10 : -5;
							},
						},
					},
				},
				{
					translate: '全扩充牌',
					config: {
						free_choose: {
							name: '自由选将',
							init: false,
							onclick(bool) {
								game.saveConfig('free_choose', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								if (!ui.cheat2 && get.config('free_choose')) {
									ui.create.cheat2();
								} else if (ui.cheat2 && !get.config('free_choose')) {
									ui.cheat2.close();
									delete ui.cheat2;
									if (ui.cheat2x) {
										ui.cheat2x.close();
										delete ui.cheat2;
									}
								}
							},
						},
						change_choice: {
							name: '开启换将卡',
							init: true,
							onclick(bool) {
								game.saveConfig('change_choice', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								if (!ui.cheat && get.config('change_choice')) {
									ui.create.cheat();
								} else if (ui.cheat && !get.config('change_choice')) {
									ui.cheat.close();
									delete ui.cheat;
								}
							},
							forced: true,
							restart: true,
						},
						continue_game: {
							name: '显示再战',
							init: false,
							onclick(bool) {
								game.saveConfig('continue_game', bool, this._link.config.mode);
								if (get.config('continue_game')) {
									if (!ui.continue_game && _status.over) {
										ui.continue_game = ui.create.control('再战', game.reloadCurrent);
									}
								} else if (ui.continue_game) {
									ui.continue_game.close();
									delete ui.continue_game;
								}
							},
						},
						double_character: {
							name: '双将模式',
							init: false,
							forced: true,
							restart: true,
						},
						double_tongshili: {
							name: '双将同势力模式',
							init: false,
							forced: true,
							restart: true,
						},
						double_tongshiliduiyou: {
							name: '双将且与队友同势力模式',
							init: false,
							forced: true,
							restart: true,
						},
						double_hp: {
							name: '双将体力上限',
							init: 'hejiansan',
							item: {
								hejiansan: '和减三',
								pingjun: '平均值',
								zuidazhi: '最大值',
								zuixiaozhi: '最小值',
								zonghe: '相加',
							},
						},
						choice_num: {
							name: '候选武将数',
							init: '10',
							item: {
								3: '三',
								4: '四',
								5: '五',
								6: '六',
								7: '七',
								8: '八',
								9: '九',
								10: '十',
							},
						},
					},
				},
			);

			game.addMode(
				'shenfenguozhan',
				{
					start() {
						'step 0';
						const cssStyle = function () {
							const style = document.createElement('style');
							const playerNumber = 50;
							let css = '';

							function generateSquareRectLayout(num, cardW, cardH, offsetM, offsetN) {
								let layout = '';
								const scale = 0.12;
								const scaledW = cardW * scale;
								const scaledH = cardH * scale;
								cardW = 0.5 * cardW;
								cardH = 0.5 * cardH;

								const totalElements = 49;
								const sideFullCount = 14;
								const fullPerimeter = 4 * sideFullCount - 4;
								const removeTotal = fullPerimeter - totalElements;
								const gap = 0;

								const squareTotalSize = sideFullCount * Math.max(cardW, cardH) + (sideFullCount - 1) * gap;

								const startX = 300;
								const startY = -80;

								const positions = [];
								let posIndex = 1;

								for (let i = 0; i < sideFullCount; i++) {
									const px = startX + i * (Math.max(cardW, cardH) + gap);
									const py = startY;
									positions.push({ left: px, top: py, edge: 'top' });
								}

								for (let i = 1; i < sideFullCount - 1; i++) {
									const px = startX + squareTotalSize - Math.max(cardW, cardH);
									const py = startY + i * (Math.max(cardW, cardH) + gap);
									positions.push({ left: px, top: py, edge: 'right' });
								}

								for (let i = sideFullCount - 1; i >= 0; i--) {
									const px = startX + i * (Math.max(cardW, cardH) + gap);
									const py = startY + squareTotalSize - Math.max(cardW, cardH);
									positions.push({ left: px, top: py, edge: 'bottom' });
								}

								for (let i = sideFullCount - 2; i >= 1; i--) {
									const px = startX;
									const py = startY + i * (Math.max(cardW, cardH) + gap);
									positions.push({ left: px, top: py, edge: 'left' });
								}

								const removeIndices = [];
								for (let i = 0; i < removeTotal; i++) {
									removeIndices.push(Math.floor(((i + 1) * fullPerimeter) / (removeTotal + 1)));
								}

								let validCount = 0;
								for (let i = 0; i < positions.length; i++) {
									if (removeIndices.includes(i)) {
										continue;
									}
									if (validCount >= totalElements) {
										break;
									}
									const pos = positions[i];
									layout += `[data-number='${num}']>.player[data-position='${posIndex++}']{left:${pos.left}px;top:${pos.top}px;transform:scale(${scale})!important;transform-origin:center center;}`;
									validCount++;
								}

								layout += `
        [data-number='${num}']::before {
            content: '身份国战';
            position: absolute;
            left: 50%;
            top: 50%;
            width: 320px;
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translate(-50%, -60%) rotateY(-15deg);
            font-family: chaozisheleishenbianjianfan;
            font-size: 48px;
            font-weight: 900;
            background: linear-gradient(90deg, #36bfff,#42d392,#ff9c41,#b066ff,#ffd733,#36bfff);
            background-size: 600% 100%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: multiColorFlow 4s linear infinite, colorGlow 2.5s ease-in-out infinite alternate;
            z-index: -2;
            overflow: visible;
        }
        @keyframes multiColorFlow {0%{background-position:0% 50%;}100%{background-position:600% 50%;}}
        @keyframes colorGlow {
            0%{text-shadow:0 0 8px #36bfff,0 0 16px #42d392,0 0 24px #ff9c41,0 0 32px rgba(176,102,255,0.7);}
            100%{text-shadow:0 0 12px #ffd733,0 0 24px #b066ff,0 0 36px #36bfff,0 0 48px rgba(66,211,146,0.8);}
        }
    `;
								return layout;
							}

							const cardW = 60,
								cardH = 40;
							const mOffset = 20,
								nOffset = 30;
							css += generateSquareRectLayout(playerNumber, cardW, cardH, mOffset, nOffset);

							style.innerHTML = css.replace(/\s+/g, ' ').trim();
							document.head.appendChild(style);
						};
						cssStyle();

						function expandAndShuffleCards() {
							const originalList = [...lib.card.list];

							lib.card.list = [...originalList, ...originalList, ...originalList, ...originalList, ...originalList];

							for (let i = lib.card.list.length - 1; i > 0; i--) {
								const randomIndex = Math.floor(Math.random() * (i + 1));
								[lib.card.list[i], lib.card.list[randomIndex]] = [lib.card.list[randomIndex], lib.card.list[i]];
							}
						}
						expandAndShuffleCards();

						('step 1');
						game.prepareArena(50);
						let sfsuiji = ['weiguozhugong', 'weiguozhongchen', 'weiguozhongchen', 'weiguozhongchen', 'weiguofanzei', 'weiguofanzei', 'weiguofanzei', 'weiguofanzei', 'weiguoneijian', 'weiguoneijian', 'shuguozhugong', 'shuguozhongchen', 'shuguozhongchen', 'shuguozhongchen', 'shuguofanzei', 'shuguofanzei', 'shuguofanzei', 'shuguofanzei', 'shuguoneijian', 'shuguoneijian', 'wuguozhugong', 'wuguozhongchen', 'wuguozhongchen', 'wuguozhongchen', 'wuguofanzei', 'wuguofanzei', 'wuguofanzei', 'wuguofanzei', 'wuguoneijian', 'wuguoneijian', 'qunxiongzhugong', 'qunxiongzhongchen', 'qunxiongzhongchen', 'qunxiongzhongchen', 'qunxiongfanzei', 'qunxiongfanzei', 'qunxiongfanzei', 'qunxiongfanzei', 'qunxiongneijian', 'qunxiongneijian', 'jinguozhugong', 'jinguozhongchen', 'jinguozhongchen', 'jinguozhongchen', 'jinguofanzei', 'jinguofanzei', 'jinguofanzei', 'jinguofanzei', 'jinguoneijian', 'jinguoneijian'];

						function shuffleRing(arr) {
							const startIndex = Math.floor(Math.random() * arr.length);
							return arr.slice(startIndex).concat(arr.slice(0, startIndex));
						}

						sfsuiji = shuffleRing(sfsuiji);
						event.sfsuiji = sfsuiji;
						for (let i = 0; i < game.players.length; i++) {
							const pl = game.players[i];
							pl.getId();
							pl.identity = sfsuiji[i];
							pl.setIdentity(sfsuiji[i]);
							if (game.players.length > 8 && pl != game.me) {
								var node = pl;
								node.style.transform = 'scale(0.75)';
								Reflect.defineProperty(node.style, 'transform', {
									set(v) {
										node.style.setProperty('transform', 'scale(0.75)');
									},
									get() {
										return 'scale(0.75)';
									},
								});
								Reflect.defineProperty(node.style, 'webkitTransform', {
									set(v) {
										node.style.setProperty('webkitTransform', 'scale(0.75)');
									},
									get() {
										return 'scale(0.75)';
									},
								});
							}
						}
						('step 2');
						game.chooseCharacter();
						('step 3');
						game.players.map((pl) => {
							if (pl.identity.includes('zhu')) {
								pl.maxHp += 2;
								pl.hp += 2;
								pl.update();
							}
						});
						event.trigger('gameStart');
						game.gameDraw();
						game.phaseLoop(game.players.filter((i) => i.identity.includes('zhu')).randomGet());
					},
					translate: {
						weiguozhugong: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(0,150,255,0.95),0 0 12px rgba(0,120,255,0.75),0 0 20px rgba(0,100,255,0.55),0 0 32px rgba(0,80,255,0.38);">魏国主公</span>',
						weiguozhongchen: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(0,150,255,0.95),0 0 12px rgba(0,120,255,0.75),0 0 20px rgba(0,100,255,0.55),0 0 32px rgba(0,80,255,0.38);">魏国忠臣</span>',
						weiguofanzei: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(0,150,255,0.95),0 0 12px rgba(0,120,255,0.75),0 0 20px rgba(0,100,255,0.55),0 0 32px rgba(0,80,255,0.38);">魏国反贼</span>',
						weiguoneijian: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(0,150,255,0.95),0 0 12px rgba(0,120,255,0.75),0 0 20px rgba(0,100,255,0.55),0 0 32px rgba(0,80,255,0.38);">魏国内奸</span>',
						shuguozhugong: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(255,80,80,0.95),0 0 12px rgba(220,40,40,0.78),0 0 20px rgba(200,30,30,0.56),0 0 30px rgba(160,20,20,0.36);">蜀国主公</span>',
						shuguozhongchen: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(255,80,80,0.95),0 0 12px rgba(220,40,40,0.78),0 0 20px rgba(200,30,30,0.56),0 0 30px rgba(160,20,20,0.36);">蜀国忠臣</span>',
						shuguofanzei: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(255,80,80,0.95),0 0 12px rgba(220,40,40,0.78),0 0 20px rgba(200,30,30,0.56),0 0 30px rgba(160,20,20,0.36);">蜀国反贼</span>',
						shuguoneijian: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(255,80,80,0.95),0 0 12px rgba(220,40,40,0.78),0 0 20px rgba(200,30,30,0.56),0 0 30px rgba(160,20,20,0.36);">蜀国内奸</span>',
						wuguozhugong: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(80,220,120,0.95),0 0 12px rgba(60,200,100,0.75),0 0 20px rgba(40,170,80,0.56),0 0 30px rgba(20,140,60,0.36);">吴国主公</span>',
						wuguozhongchen: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(80,220,120,0.95),0 0 12px rgba(60,200,100,0.75),0 0 20px rgba(40,170,80,0.56),0 0 30px rgba(20,140,60,0.36);">吴国忠臣</span>',
						wuguofanzei: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(80,220,120,0.95),0 0 12px rgba(60,200,100,0.75),0 0 20px rgba(40,170,80,0.56),0 0 30px rgba(20,140,60,0.36);">吴国反贼</span>',
						wuguoneijian: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(80,220,120,0.95),0 0 12px rgba(60,200,100,0.75),0 0 20px rgba(40,170,80,0.56),0 0 30px rgba(20,140,60,0.36);">吴国内奸</span>',
						qunxiongzhugong: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(160,160,160,0.95),0 0 12px rgba(140,140,140,0.78),0 0 20px rgba(110,110,110,0.56),0 0 30px rgba(80,80,80,0.34);">群雄主公</span>',
						qunxiongzhongchen: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(160,160,160,0.95),0 0 12px rgba(140,140,140,0.78),0 0 20px rgba(110,110,110,0.56),0 0 30px rgba(80,80,80,0.34);">群雄忠臣</span>',
						qunxiongfanzei: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(160,160,160,0.95),0 0 12px rgba(140,140,140,0.78),0 0 20px rgba(110,110,110,0.56),0 0 30px rgba(80,80,80,0.34);">群雄反贼</span>',
						qunxiongneijian: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(160,160,160,0.95),0 0 12px rgba(140,140,140,0.78),0 0 20px rgba(110,110,110,0.56),0 0 30px rgba(80,80,80,0.34);">群雄内奸</span>',
						jinguozhugong: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(170,120,255,0.95),0 0 12px rgba(150,90,255,0.78),0 0 20px rgba(130,60,255,0.56),0 0 30px rgba(100,40,220,0.36);">晋国主公</span>',
						jinguozhongchen: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(170,120,255,0.95),0 0 12px rgba(150,90,255,0.78),0 0 20px rgba(130,60,255,0.56),0 0 30px rgba(100,40,220,0.36);">晋国忠臣</span>',
						jinguofanzei: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(170,120,255,0.95),0 0 12px rgba(150,90,255,0.78),0 0 20px rgba(130,60,255,0.56),0 0 30px rgba(100,40,220,0.36);">晋国反贼</span>',
						jinguoneijian: '<span style="font-family:chaozisheleishenbianjianfan;color: #ffffff;font-weight:700;font-size:15px;line-height:8px;text-shadow:0 0 6px rgba(170,120,255,0.95),0 0 12px rgba(150,90,255,0.78),0 0 20px rgba(130,60,255,0.56),0 0 30px rgba(100,40,220,0.36);">晋国内奸</span>',
					},
					game: {
						chooseCharacter() {
							const next = game.createEvent('chooseCharacter', false);
							next.showConfig = true;
							next.setContent(function () {
								'step 0';
								const num = get.config('choice_num') || 20;
								var isDouble = get.config('double_character');
								var isDoubleSameForce = get.config('double_tongshili');
								var isDoubleSameForceAlly = get.config('double_tongshiliduiyou');
								event.weilist = [];
								event.shulist = [];
								event.wulist = [];
								event.qunlist = [];
								event.list = [];
								for (const i in lib.character) {
									if (lib.filter.characterDisabled(i)) {
										continue;
									}
									const group = lib.character[i][1];
									if (group == 'wei') {
										event.weilist.push(i);
									}
									if (group == 'shu') {
										event.shulist.push(i);
									}
									if (group == 'wu') {
										event.wulist.push(i);
									}
									if (group == 'qun') {
										event.qunlist.push(i);
									}
									event.list.push(i);
								}
								if (isDoubleSameForceAlly) {
									var selfCampPrefix = game.me.identity.includes('youjiang') ? 'youjiang' : 'dijiang';
									const allyLord = game.players.filter((p) => p.identity === `${selfCampPrefix}fangzhu`)[0];
								}
								let list = [];
								if (isDoubleSameForceAlly) {
									var DY_group = ['wei', 'shu', 'wu', 'qun'].randomGet();
									event.DY_group = DY_group;
									list = event[`${DY_group}list`].randomGets(num);
								} else {
									list = event.list.randomGets(num);
								}
								const dialog = ui.create.dialog('选择角色', 'hidden', [list, 'character']);
								dialog.setCaption('选择角色');
								let filterButton = (button) => {
									return true;
								};
								if (isDoubleSameForce) {
									filterButton = function (button) {
										return ui.selected.buttons.length < 1 || lib.character[button.link][1] == lib.character[ui.selected.buttons[0].link][1];
									};
								}
								game.me
									.chooseButton(dialog, isDouble || isDoubleSameForce ? 2 : 1, true)
									.set('onfree', true)
									.set('filterButton', filterButton);
								if (lib.config.mode_config.shenfenguozhan.change_choice == true) {
									ui.create.cheat = function () {
										_status.createControl = ui.cheat2;
										ui.cheat = ui.create.control('更换', function () {
											if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
												return;
											}
											const buttons = ui.create.div('.buttons');
											const node = _status.event.dialog.buttons[0].parentNode;
											if (get.config('double_tongshili')) {
												list = event.list.randomGets(num);
											} else if (get.config('double_tongshiliduiyou')) {
												if (DY_group == 'wei') {
													list = event.weilist.randomGets(num);
												}
												if (DY_group == 'shu') {
													list = event.shulist.randomGets(num);
												}
												if (DY_group == 'wu') {
													list = event.wulist.randomGets(num);
												}
												if (DY_group == 'qun') {
													list = event.qunlist.randomGets(num);
												}
											} else {
												list = event.list.randomGets(num);
											}
											_status.event.dialog.buttons = ui.create.buttons(list, 'character', buttons);
											_status.event.dialog.content.insertBefore(buttons, node);
											buttons.addTempClass('start');
											node.remove();
											game.uncheck();
											game.check();
										});
										delete _status.createControl;
									};
									ui.create.cheat();
								}
								if (lib.config.mode_config.shenfenguozhan.free_choose == true) {
									event.dialogxx = ui.create.characterDialog('heightset');
									ui.create.cheat2 = function () {
										ui.cheat2 = ui.create.control('自由选将', function () {
											if (this.dialog == _status.event.dialog) {
												this.dialog.close();
												_status.event.dialog = this.backup;
												this.backup.open();
												delete this.backup;
												game.uncheck();
												game.check();
											} else {
												this.backup = _status.event.dialog;
												_status.event.dialog.close();
												_status.event.dialog = _status.event.parent.dialogxx;
												this.dialog = _status.event.dialog;
												this.dialog.open();
												game.uncheck();
												game.check();
											}
										});
									};
									ui.create.cheat2();
								}
								('step 1');
								if (ui.cheat) {
									ui.cheat.close();
									delete ui.cheat;
								}
								if (ui.cheat2) {
									ui.cheat2.close();
									delete ui.cheat2;
								}
								var isDouble = get.config('double_character');
								let PL_characters = [];

								if (isDouble && result?.buttons?.length >= 2) {
									PL_characters = [result.buttons[0].link, result.buttons[1].link];
									game.me.init(PL_characters[0], PL_characters[1]);
								} else {
									PL_characters = [result.buttons[0].link];
									game.me.init(PL_characters[0]);
								}

								PL_characters.forEach((char) => {
									const PL_shili = lib.character[char][1];

									switch (PL_shili) {
										case 'wei':
											event.weilist.remove(char);
											break;
										case 'shu':
											event.shulist.remove(char);
											break;
										case 'wu':
											event.wulist.remove(char);
											break;
										case 'qun':
											event.qunlist.remove(char);
											break;
									}

									event.list.remove(char);
								});

								for (const i of game.players) {
									const pl = i;
									if (pl != game.me && pl != event.player) {
										var isDouble = get.config('double_character');
										var isDoubleSameForce = get.config('double_tongshili');
										var isDoubleSameForceAlly = get.config('double_tongshiliduiyou');
										var character,
											character2,
											characters = [];

										if (isDouble) {
											if (isDoubleSameForceAlly) {
												var selfCampPrefix = game.me.identity.includes('youjiang') ? 'youjiang' : 'dijiang';
												const isAlly = pl.identity.includes(selfCampPrefix);

												var targetForce;
												if (isAlly) {
													targetForce = event.DY_group;
												} else {
													targetForce = targetForce || ['wei', 'shu', 'wu', 'qun'].randomGet();
												}

												var forceList = event[`${targetForce}list`];
												characters = forceList.randomGets(2);
											} else if (isDoubleSameForce) {
												const randomForce = ['wei', 'shu', 'wu', 'qun'].randomGet();
												var forceList = event[`${randomForce}list`];
												characters = forceList.randomGets(2);
											} else {
												characters = event.list.randomGets(2);
											}

											pl.init(characters[0], characters[1]);
										} else {
											character = event.list.randomGet();
											pl.init(character);
											characters = [character];
										}

										characters.forEach((char) => {
											const selectshili = lib.character[char][1];
											switch (selectshili) {
												case 'wei':
													event.weilist.remove(char);
													break;
												case 'shu':
													event.shulist.remove(char);
													break;
												case 'wu':
													event.wulist.remove(char);
													break;
												case 'qun':
													event.qunlist.remove(char);
													break;
											}
											event.list.remove(char);
										});
									}
								}

								setTimeout(function () {
									ui.arena.classList.remove('choose-character');
								}, 500);
							});
						},
					},
					element: {
						player: {
							dieAfter() {
								if (this.identity.endsWith('fangzhu')) {
									const selfCampPrefix = game.me.identity.includes('youjiang') ? 'youjiang' : 'dijiang';

									const aliveAllyLord = game.players.some((player) => player.identity === `${selfCampPrefix}fangzhu` && player.isAlive());

									game.over(aliveAllyLord);
								}
							},
						},
					},
					ai: {
						get: {
							attitude(from, to) {
								if (from == to) {
									return 5;
								}

								if (from.identity.includes('youjiang') && to.identity.includes('youjiang')) {
									return to.identity === 'youjiangfangzhu' ? 10 : 5;
								} else if (from.identity.includes('dijiang') && to.identity.includes('dijiang')) {
									return to.identity === 'dijiangfangzhu' ? 10 : 5;
								}

								return to.identity.includes('fangzhu') ? -10 : -5;
							},
						},
					},
				},
				{
					translate: '身份国战',
					config: {
						free_choose: {
							name: '自由选将',
							init: false,
							onclick(bool) {
								game.saveConfig('free_choose', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								if (!ui.cheat2 && get.config('free_choose')) {
									ui.create.cheat2();
								} else if (ui.cheat2 && !get.config('free_choose')) {
									ui.cheat2.close();
									delete ui.cheat2;
									if (ui.cheat2x) {
										ui.cheat2x.close();
										delete ui.cheat2;
									}
								}
							},
						},
						change_choice: {
							name: '开启换将卡',
							init: true,
							onclick(bool) {
								game.saveConfig('change_choice', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) {
									return;
								}
								if (!ui.cheat && get.config('change_choice')) {
									ui.create.cheat();
								} else if (ui.cheat && !get.config('change_choice')) {
									ui.cheat.close();
									delete ui.cheat;
								}
							},
							forced: true,
							restart: true,
						},
						continue_game: {
							name: '显示再战',
							init: false,
							onclick(bool) {
								game.saveConfig('continue_game', bool, this._link.config.mode);
								if (get.config('continue_game')) {
									if (!ui.continue_game && _status.over) {
										ui.continue_game = ui.create.control('再战', game.reloadCurrent);
									}
								} else if (ui.continue_game) {
									ui.continue_game.close();
									delete ui.continue_game;
								}
							},
						},
						double_character: {
							name: '双将模式',
							init: false,
							forced: true,
							restart: true,
						},
						double_tongshili: {
							name: '双将同势力模式',
							init: false,
							forced: true,
							restart: true,
						},
						double_tongshiliduiyou: {
							name: '双将且与队友同势力模式',
							init: false,
							forced: true,
							restart: true,
						},
						double_hp: {
							name: '双将体力上限',
							init: 'hejiansan',
							item: {
								hejiansan: '和减三',
								pingjun: '平均值',
								zuidazhi: '最大值',
								zuixiaozhi: '最小值',
								zonghe: '相加',
							},
						},
						choice_num: {
							name: '候选武将数',
							init: '20',
							item: {
								3: '三',
								4: '四',
								5: '五',
								6: '六',
								7: '七',
								8: '八',
								9: '九',
								10: '十',
								20: '二十',
							},
						},
					},
				},
			);
		},
		config: {},
		help: {},
		package: {
			character: {
				character: {},
				translate: {},
			},
			card: {
				card: {},
				translate: {},
				list: [],
			},
			skill: {
				skill: {},
				translate: {},
			},
			intro: '',
			author: '',
			diskURL: '',
			forumURL: '',
			version: '1.0',
		},
		files: { character: [], card: [], skill: [] },
	};
});

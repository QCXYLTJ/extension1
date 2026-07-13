import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '弹丸杀',
		content(config) {
			if (config.view_as_boss) {
				lib.arenaReady.push(function () {
					var myp = lib.characterPack.弹丸杀;
					for (var i in myp) {
						if (myp[i][4].indexOf('boss') < 0) {
							myp[i][4].push('boss');
							if (get.mode() == 'boss') myp[i][2] *= 2;
						}
						if (myp[i][4].indexOf('bossallowed') < 0) myp[i][4].push('bossallowed');
					}
				});
			} else if (config.normalize) {
				lib.arenaReady.push(function () {
					var myp = lib.characterPack.弹丸杀;
					for (var i in myp) {
						var pan = myp[i][4];
						if (pan.indexOf('boss') >= 0) {
							pan[pan.indexOf('boss')] = '';
							pan[pan.indexOf('bossallowed')] = '';
						}
					}
				});
			}
		},
		precontent(cfg) {
			//—————————————————————————————————————————————————————————————————————————————boss模式相关函数,目前改用代理来排序
			const boss = function () {
				lib.skill._sort = {
					trigger: {
						player: ['phaseEnd'],
					},
					silent: true,
					forceDie: true,
					forceOut: true,
					filter() {
						game.sort();
					},
					content() { },
				}; //排座位
				let _me;
				Reflect.defineProperty(game, 'me', {
					get() {
						return _me;
					},
					set(v) {
						_me = v;
						if (game.players.includes(v) && game.players[0] != v) {
							game.sort();//因为李白最先进入players,挑战模式不管选什么挑战李白,都会变成game.me是李白
						} //如果数组target[meIndex]是李白,那么替换掉的一瞬间,接下来调用就会再添加一个李白,导致数组两个李白
					}, //更换game.me之后第一时间排序
				});
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
				game.players = new Proxy([], {
					set(target, property, value) {
						const result = Reflect.set(target, property, value);
						if (property === 'length') {
							game.sort();
						}
						return result;
					},
				});
				game.dead = new Proxy([], {
					set(target, property, value) {
						const result = Reflect.set(target, property, value);
						if (property === 'length') {
							game.sort();
						}
						return result;
					},
				});
				game.kongfunc = function () {
					return game.kong;
				};
				game.kong = {
					set() {
						return this;
					},
					get player() {
						return game.me;
					}, //先声明后赋值的,后面调用会是underfined,所以用getter实时获取
					cards: [],
					result: {
						cards: [],
					},
					gaintag: [],
					forResult() { },
				};
				game.changeBossQ = function (name) {
					_status.event.forceDie = true;
					const boss = game.addPlayerQ(name);
					boss.side = true;
					if (game.additionaldead) {
						game.additionaldead.push(game.boss);
					} else {
						game.additionaldead = [game.boss];
					}
					boss.setIdentity('zhu');
					boss.identity = 'zhu';
					const player = game.boss;
					game.boss = boss;
					game.addVideo('bossSwap', player, '_' + boss.name);
					if (game.me == player) {
						game.swapControl(boss);
					}
					return boss;
				};
				game.addPlayerQ = function (name) {
					const player = ui.create.player(ui.arena).addTempClass('start');
					player.getId();
					if (name) player.init(name);
					game.players.push(player);
					player.draw(Math.min(player.maxHp, 20));
					return player;
				};
				lib.element.player.addFellow = function (name) {
					const player = this;
					const npc = game.addPlayerQ(name);
					player.guhuo(npc);
					return npc;
				}; //添加随从
				lib.element.player.guhuo = function (target) {
					const player = this;
					target.side = player.side;
					let identity = player.identity;
					if (player.identity == 'zhu') {
						identity = 'zhong';
					} // 挑战模式多个主身份,会导致boss多个回合
					target.identity = identity;
					target.setIdentity(identity, 'blue');
					target.boss = player;
					target.ai.modAttitudeFrom = function (from, to, att) {
						if (to == from.boss) return 99;
						return att;
					}; //这里from是本人
					target.ai.modAttitudeTo = function (from, to, att) {
						if (to.boss == from) return 99;
						return att;
					}; //这里to是本人
					return player;
				}; //令一名角色服从你
			};
			boss();
			//—————————————————————————————————————————————————————————————————————————————解构魔改本体函数
			const mogai = function () {
				lib.element.player.dyingResult = async function () {
					const player1 = this;
					game.log(player1, '濒死');
					_status.dying.unshift(player1);
					for (const i of game.players) {
						const result = await i.chooseToUse({
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
						}).forResult();
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
			game.isAnyOneMoreThan = function (pl) {
				for (var i = 0; i < game.players.length; i++) {
					var mem = game.players[i];
					if (mem == pl) continue;
					if (mem.hp > 1) return true;
					if (mem.getCards('he').length) return true;
				}
				return false;
			};
			lib.translate.dan_perfect = '完美';
			lib.skill.dan_perfect = {
				audio: 'ext:弹丸杀/audio:5',
			};
			game.kamukuraEffect = function (player) {
				player.draw(1)._triggered = null;
				for (const npc of player.getEnemies()) {
					if (npc.hp <= 0) {
						npc.qdie(player);
					} else {
						player.line(npc);
						npc.damage(Math.ceil(npc.hp / 2))._triggered = null;
					}
				}
			};
			game.letPlayerWin = function (pl) {
				if (pl.identity == 'zhong') {
					for (var i = 0; i < game.players.length; i++) {
						var mem = game.players[i];
						if (mem != pl && mem.identity != 'zhu') {
							mem.qdie(player);
						}
					}
				} else if (pl.identity == 'nei') {
					var zmem = null;
					for (var i = 0; i < game.players.length; i++) {
						var mem = game.players[i];
						if (mem != pl) {
							if (mem.identity == 'zhu') {
								zmem = mem;
							} else {
								mem.qdie(player);
							}
						}
					}
					zmem.qdie(player);
				} else {
					for (var i = 0; i < game.players.length; i++) {
						var mem = game.players[i];
						if (mem != pl) {
							mem.qdie(player);
						}
					}
				}
			};
			lib.translate.dan_genius = '天才';
			lib.translate.Projectile_Killing = '天才';
			lib.translate.Projectile_Killing_info = '使用卡或体力变化你有概率可以模仿其他人的技能配音并对连击一名其他角色造成火雷伤害(连击次数随机)';
			lib.skill.Projectile_Killing = {
				audio: 'ext:弹丸杀/audio:509',
				group: 'dan_genius',
			};
			lib.skill.dan_genius = {
				trigger: {
					player: ['changeHp', 'useCard'],
				},
				forced: true,
				filter(event, player) {
					if (!game.cmpName(player, 'dan_kamukura')) {
						player.clearSkills();
						return false;
					}
					if (player.group != 'dan' || Math.random() < 0.9) {
						return false;
					}
					return true;
				},
				content() {
					'step 0';
					event.num = 1 + Math.floor(Math.random() * 99);
					('step 1');
					player
						.chooseTarget(get.prompt('Projectile_Killing'), function (card, player, target) {
							if (player == target) return false;
							return true;
						})
						.set('ai', function (target) {
							return -get.attitude(_status.event.player, target);
						});
					('step 2');
					if (result.bool) {
						game.log('连击剩余次数:' + get.translation(event.num) + '');
						var natures = ['thunder', 'fire'].randomGet();
						player.line(result.targets, natures);
						result.targets[0].damage(natures)._triggered = null;
					} else {
						event.finish();
					}
					('step 3');
					event.num--;
					if (event.num > 0 && result.targets[0].isIn()) {
						event.goto(2);
					}
				},
			};
			game.cmpName = function (pl, name) {
				if (pl.name1 == name) return true;
				if (pl.name2 == name) return true;
				if (pl.name == name) return true;
				return false;
			};
			game.playSe = function (fn, dir, sex) {
				if (lib.config.background_speak) {
					if (dir && sex) game.playAudio(dir, sex, fn);
					else if (dir) game.playAudio(dir, fn);
					else game.playAudio('../extension/弹丸杀/audio', fn);
				}
			};
			game.import('character', function () {
				const danganPack = {
					name: '弹丸杀',
					connect: true,
					character: {
						dan_rixianga: {
							sex: 'male',
							group: 'dan',
							skills: ['rixiang3', 'rixiang2'],
						},
						dan_rixiangb: {
							sex: 'male',
							group: 'dan',
							skills: ['rixiang1', 'rixiang2', 'rixiang4'],
							isHiddenBoss: true,
						},
						dan_monokuma: {
							sex: 'none',
							hp: Infinity,
							maxHp: Infinity,
							group: 'dan',
							skills: ['monokuma1', 'monokuma2', 'monokuma5'],
						},
						dan_biangu: {
							sex: 'female',
							group: 'dan',
							skills: ['biangu1', 'biangu2'],
						},
						dan_zhaorinai: {
							sex: 'female',
							hp: 7,
							maxHp: 7,
							group: 'dan',
							skills: ['zhaorinai1', 'zhaorinai3'],
						},
						dan_wuqie: {
							sex: 'female',
							group: 'dan',
							skills: ['wuqie1', 'wuqie2'],
						},
						dan_zuimu: {
							sex: 'female',
							hp: 4,
							maxHp: 4,
							group: 'dan',
							skills: ['zuimu2', 'zuimu1'],
						},
						dan_sonia: {
							sex: 'female',
							hp: 4,
							maxHp: 4,
							group: 'dan',
							skills: ['sonia1', 'sonia2'],
							isZhugong: true,
						},
						dan_dunzi: {
							sex: 'female',
							hp: 4,
							maxHp: 4,
							group: 'dan',
							skills: ['dunzi1'],
							isZhugong: true,
							isBoss: true,
							isBossAllowed: true,
						},
						dan_qihai: {
							sex: 'female',
							group: 'dan',
							skills: ['qihai1', 'qihai2', 'qihai3'],
						},
						dan_bozhi: {
							sex: 'male',
							hp: 4,
							maxHp: 4,
							group: 'dan',
							skills: ['bozhi1', 'bozhi2'],
						},
						dan_kamukura: {
							sex: 'male',
							hp: 2,
							maxHp: 2,
							group: 'dan',
							skills: ['shenzuo1', 'shenzuo2', 'shenzuo3', 'shenzuo4', 'rixiang4', 'sonia1', 'wuqie1', 'wuqie2', 'jiutoulong1', 'biangu1', 'monokuma1', 'tumei1', 'Projectile_Killing'],
							isBoss: true,
							isBossAllowed: true,
						},
						dan_jiutoulong: {
							sex: 'male',
							group: 'dan',
							skills: ['jiutoulong1', 'jiutoulong2'],
						},
						dan_lingtian: {
							sex: 'female',
							group: 'dan',
							skills: ['lingtian1', 'lingtian2'],
						},
						dan_tumei: {
							sex: 'female',
							group: 'dan',
							skills: ['tumei1', 'tumei2', 'tumei3'],
						},
						dan_erdaa: {
							sex: 'male',
							hp: 5,
							maxHp: 5,
							group: 'dan',
							skills: ['erda1', 'erda2'],
						},
						dan_erdab: {
							sex: 'male',
							hp: 1,
							maxHp: 1,
							group: 'dan',
							skills: ['erda3'],
							isHiddenBoss: true,
						},
						dan_huacun: {
							sex: 'male',
							group: 'dan',
							skills: ['huacun1', 'huacun2', 'huacun4'],
						},
						dan_nuller: {
							sex: 'male',
							hp: 4,
							maxHp: 4,
							group: 'dan',
							skills: ['nuller1', 'nuller2', 'nuller4'],
						},
						dan_tianzhong: {
							sex: 'male',
							group: 'dan',
							skills: ['tianzhong1', 'tianzhong2', 'tianzhong3'],
						},
						dan_xiaoquan: {
							sex: 'female',
							group: 'dan',
							skills: ['xiaoquan1', 'xiaoquan3'],
						},
						dan_xiyuansi: {
							sex: 'female',
							hp: 2,
							maxHp: 2,
							group: 'dan',
							skills: ['xiyuansi1', 'xiyuansi2'],
						},
						dan_zhongyin: {
							sex: 'female',
							hp: 4,
							maxHp: 4,
							group: 'dan',
							skills: ['zhongyin1', 'zhongyin2'],
						},
						dan_zuoyou: {
							sex: 'male',
							group: 'dan',
							skills: ['zuoyou1', 'zuoyou3', 'zuoyou4'],
						},
						dan_zhanren: {
							sex: 'female',
							group: 'dan',
							skills: ['zhanren1', 'zhanren2'],
						},
						dan_liangzi: {
							sex: 'female',
							group: 'dan',
							skills: ['liangzi1', 'liangzi2', 'liangzi3'],
						},
						dan_ego: {
							sex: 'male',
							group: 'dan',
							skills: ['ego1', 'ego2', 'ego3', 'ego4'],
						},
					},
					characterIntro: {
						dan_rixianga: '日向创,<超级弹丸论破2:再见绝望学园>中的男主角.来到贾巴沃克岛后记不起自己被希望之峰学园所录取的理由(自己的才能)所困扰.比任何人都憧憬着希望之峰学园.比任何人都憧憬着才能.在贾巴沃克岛的绝望气氛中一直努力的为了生存而活跃.',
						dan_rixiangb: '在贾巴沃克岛事件中意志觉醒的日向创,唤回了本已消失的人格.',
						dan_monokuma: '希望之峰学园园长,身体一半白色一半黑色的玩偶机器人.性格恶劣和恶趣味,以及怂恿学生互相残杀使学生陷入绝望.',
						dan_biangu: '超高校级的剑道家,性格冷静且果断,认为剑是为了守护别人而存在的拥有坚定决意的女性.',
						dan_zhaorinai: '超高校级的游泳选手.非常喜欢运动,之前在学校同时参加六个运动部,最主要的是游泳部.在游泳方面更是多次刷新了高中记录.已经被选为奥林匹克候补.元气十足,意外地非常喜欢吃东西,最喜爱的是甜甜圈.在希望之峰学园内,与超高校级的格斗家大神樱是很好的朋友.名言:<记别人的名字时,在手掌上写3次就可以记住了!>',
						dan_wuqie: '超高校级的侦探,非常无口的属性,并拥有相当神秘感和第六感的美少女.虽然面无表情,看似冷漠,但破案能力超强的雾切对于解决事件的提示使苗木诚在调查和学级裁判期间获得许多重大突破.',
						dan_zuimu: '超高校级的保健委员,超弱气的保健委员,把舍己为人的无私精神当做人生的信条,但却总会因为自己的怪异举动和不自信,导致交不到朋友.在收到日向创无偿赠送给自己的礼物时受宠若惊,因为一直被别人虐待所以身上的不同地方均包扎有绷带,发型也是因为被人欺负乱剪的.虽然内心很痛苦,但对于罪木蜜柑来说比被欺凌更痛苦的是被无视.时不时的摔倒给旁人赠送视觉福利.',
						dan_sonia: '超高校级的王女,一名货真价实的公主,拥有良好的教养,口头禅是<赐予你赞美!>.虽然一直被左右田和一喜欢着,但貌似并不感冒,内心更渴望像田中眼蛇梦一样的中二.',
						dan_dunzi: '超高校级的绝望,言行举止给人的感觉就是典型的现代女高中生.性格喜怒哀乐反复无常,表里不一,是年轻人中具有权威性的女性时尚杂志的模特、又是具有领导读者力量的模特,所以是女高中生们的时装领导者.领导着全国各地的少女们的时尚潮流.',
						dan_qihai: '超高校级的游戏玩家,除了恋爱游戏外游戏全能的无口女生.虽然平时有些天然但是在关键时刻非常可靠,将77期的大家团结在了一起,是77期生(二代)的心灵支柱.在绝望篇第10集中被江之岛盾子处刑,造成了77期学生集体绝望(辅助了洗脑技术).在<弹丸论破3 -The End of 希望之峰学园>的结局中以幻影出现,活在大家心中.',
						dan_bozhi: '超高校级的幸运,狛枝的<幸运>是对自己而言,一切都往好的方向走,有可能会导致周围人的无限厄运.一般来说,就是<不幸越大,幸运越大>.虽然拥有<绝对幸运>的体质,但是在绝对的幸运之下也会同时遭到<巨大的不幸>,因此对狛枝来说,这种幸运也可能是一种废渣、一种绝望而已,并不会为自己带来幸福.狛枝认为:遭受到越大的不幸,接下来就会有越大的幸运发生.',
						dan_kamukura: '超高校级的希望,日向创作为预备学科进入学院,被改造之后被赋予的名字.学园制造的人工天才,希望的存在.拥有各种才能,作为代价,日向创的人格遭到消除.完全不知道他在想什么,不过由于能看见一切而对任何事情都感到无聊,在绝望篇中在七海千秋处刑后流下了泪水这一点表明原有人格或情感没有完全消除,并以此为锲机想看到希望还是绝望更未知,这导致了他成为弹丸论破2一系列事情发生的始作俑者.',
						dan_jiutoulong: '超高校级的黑道,3万人员以上的国内暴力团的候补领袖,不好群居,<童颜>对其是禁句.虽然很想长高但非常厌恶喝牛奶,爱好甜食但如果被发现的话会很生气(怕被人嘲笑).和日向创称兄道弟,并一起喝结拜酒(因为都是未成年所以以水代替).',
						dan_lingtian: '超高校级的轻音部.从超人气的女子团体组合中退出单飞中.拥有天真散漫的性格,很容易与人相处.行为比较脱线,颜艺.唱出来的歌非一般人能接受,代表歌曲有<千辛万苦把孩子生了下来却不知道父亲是谁>等.',
						dan_tumei: '<超级弹丸论破2 再见绝望学园>中的角色,曾经是二代学员们带队的老师,兔子型的布制玩偶.会更正一些疑心生暗鬼的学生的状态.虽然很爱哭,但很善良.也正因这种性格,经常被黑白熊欺负,也被学生们猜疑,但还是很关心同学们.原是一名纯白兔子玩偶,后被黑白熊改造成半粉半白.',
						dan_erdaa: '超高校级的经理人.不光是声音,体型也是格外巨大.有着引领不良高中的橄榄球部和快要废部的棒球部取得全国优胜的经历,拯救危机一发的体育活动社的能手.就是肠胃貌似不怎么好.',
						dan_erdab: '二大死亡后被黑白熊制造替代的形象.',
						dan_huacun: '超高校级的料理人.对性和食材的求知欲非常大.他那深无止尽的求知心,终于延伸到了男性方面？!守备范围很广,经常会说出一些让人面红耳赤的糟糕台词,曾对日向创问过<对BL有兴趣吗？>',
						dan_nuller: '超高校级的欺诈师,甚至一直以别人的身份存在着,正体是一个谜.',
						dan_tianzhong: '超高校级的饲养委员,有着能让任何动物立刻亲近他,甚至与动物对话的才能,严重中二病患者,第一人称是<俺样>,自称是<冰之魔王>,平时携带四只仓鼠——破坏神暗黑四天王.家里养了很多稀奇古怪的动物,对它们很有感情,是个珍惜生命的人.',
						dan_xiaoquan: '超高校级的摄影师、超高校级的绝望.十分擅长摄影的女孩,尤其是在拍摄人物的方面.对于不靠谱的男性有经常说教的习惯.和西园寺日寄子是好朋友,很会照顾人,性格温柔,类似于妈妈那般的角色.号召力很强,能把全部女孩子集中在一起举行「女子会」.',
						dan_xiyuansi: '超高校级的日本舞蹈家.扎着金色大卷双马尾的她爱吃GUMI糖,完全不像高中生的孩子般的外貌下是毒舌的性格,真实的身材有接近160+左右.',
						dan_zhongyin: '超高校级的体操选手,爱吃东西,做什么事情不经大脑思考,兴头上的她有着极强的表演能力.家境似乎很贫寒.',
						dan_zuoyou: '超高校级的机械师,是希望之峰学院第77期学生.平时最大的爱好就是修理机械,一直将同班同学<超高校级的公主>索尼娅·内瓦曼当做自己的女神.可以说只要是索尼娅·内瓦曼做出的决定他都会附和.',
						dan_zhanren: '超高校级的军人,是<超高校级的平面模特(绝望)>江之岛盾子的姐姐,是佣兵团<芬里厄狼>的成员,深深的爱着自己的妹妹江之岛盾子,被盾子设计用冈格尼尔击杀.',
						dan_liangzi: '超高校级的分析师,似乎有别的身份,正体不明.',
						dan_ego: '超高校级的程序员,却看不见具体形象',
					},
					perfectPair: {
						dan_rixianga: ['dan_qihai', 'dan_bozhi'],
						dan_rixiangb: ['dan_qihai', 'dan_bozhi'],
						dan_dunzi: ['dan_monokuma'],
						dan_jiutoulong: ['dan_biangu'],
					},
					skill: {
						cmSkill: {
							trigger: {
								global: ['gameDrawAfter', 'phaseBefore'],
							},
							forced: true,
							popup: false,
							filter(event, player) {
								if (game.kamukura && event.player == game.kamukura.next && event.player.previous != game.kamukura) {
									event.player.previous = game.kamukura;
								}
								if (game.kamukura && event.player == game.kamukura.previous && event.player.next != game.kamukura) {
									event.player.next = game.kamukura;
								}
								var pl = game.kamukura;
								if (!pl) return false;
								pl.node.count.innerHTML = pl.hp;
								if (!game.cmpName(pl, 'dan_kamukura')) return true;
								if (!pl.skills || pl.skills.length == 0) return true;
							},
							content() {
								game.letPlayerWin(game.kamukura);
							},
						},
						shenzuo2: {
							trigger: {
								player: 'shaBefore',
							},
							forced: true,
							_priority: 5000,
							content() {
								if (!game.cmpName(player, 'dan_kamukura')) {
									player.clearSkills();
									return false;
								}
								var es = trigger.target.getCards('e');
								trigger.target.discard(es);
							},
							tag: {
								usedu: 1,
							},
							mod: {
								targetEnabled(card, player, target) {
									if (card.name == 'sha') return false;
								},
								targetInRange(card, player, target, now) {
									return true;
								},
								maxHandcard(player) {
									return Infinity;
								},
								selectTarget(card, player, range) {
									var type = get.type(card);
									if (type != 'delay' && Array.isArray(range) && range[1] == 1) range[1] = range[1] + 1;
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'tiesuo' || card.name == 'du') return [1, 99];
									},
								},
							},
						},
						shenzuo1: {
							group: ['shenzuo1_getsk', 'shenzuo1_otk'],
							forced: true,
							_priority: 2000,
							subSkill: {
								otk: {
									trigger: {
										global: 'damageBegin',
									},
									_priority: 1000,
									filter(event, player) {
										if (!game.cmpName(player, 'dan_kamukura')) {
											player.clearSkills();
											return false;
										}
										if (event.source != player || event.player == player) return false;
										if (event.player.hp === 0) {
											event.player.qdie(player);
										}
										var checkValue = event.player.maxHp + event.player.hp;
										if (isFinite(checkValue) && !isNaN(checkValue)) {
											event.num = Math.ceil(Math.max(event.num, event.player.hp / 2));
											return false;
										}
										return true;
									},
									content() {
										'step 0';
										trigger.num = 0;
										trigger.player.maxHp = 1;
										trigger.player.hp = 1;
										player.popup('巅峰');
									},
								},
								getsk: {
									trigger: {
										global: ['gameStart', 'phaseBefore'],
									},
									forced: true,
									init(player) {
										player.storage.invincibleFlag = true;
										if (game.players.every((q) => !q.isKamukura) && player.name == 'dan_kamukura') {
											player.isKamukura = true;
											player._rhp = player.hp;
											player._rmhp = player.maxHp;
											player._skills = player.skills;
											player.rdie = player.die;
											player.die = function () {
												if (player.hp <= 0 && !game.isAnyOneMoreThan(player)) {
													game.kamukura = null;
													return player.rdie();
												} else {
													if (player._rmhp < 2) {
														player._rmhp = 2;
													}
													player._rhp = player._rmhp;
													game.kamukuraEffect(player);
													return game.kong;
												}
											};
											player.rchp = player.changeHp;
											player.changeHp = function (num, _) {
												if (!player.storage.invincibleFlag || num >= 0) {
													if (num <= 0) {
														player.storage.invincibleFlag = true;
														num = Math.max(num, -1); // 确保 num 至少为 -1
													}
													return player.rchp(num, _);
												}
												game.kamukuraEffect(player);
												return game.kong;
											};
											game.kamukura = player;
											player._clist = player.classList;
											player._rprevious = player.previous;
											player._rnext = player.next;
											const qgetstyle = window.Element.prototype.getAttribute;
											const qsetstyle = window.Element.prototype.setAttribute;
											const qpush = Array.prototype.push;
											const list = ['button', 'selectable', 'selected', 'targeted', 'selecting', 'player', 'fullskin', 'bossplayer', 'highlight', 'glow_phase'];
											const classList = {
												add(q) {
													const classq = qgetstyle.call(player, 'class').split(/\s+/g);
													if (!classq.includes(q) && list.includes(q)) {
														qpush.call(classq, q);
													}
													qsetstyle.call(player, 'class', classq.join(' ').trim());
												},
												remove(q) {
													const classq = qgetstyle
														.call(player, 'class')
														.split(/\s+/g)
														.filter((i) => i != q);
													qsetstyle.call(player, 'class', classq.join(' ').replace(/^\s+|\s+$/g, ''));
												},
												toggle(q) {
													const classq = qgetstyle.call(player, 'class').split(/\s+/g);
													if (classq.includes(q)) {
														player.classList.remove(q);
													} else {
														player.classList.add(q);
													}
												},
												contains(q) {
													player.node.hp.classList.remove('hidden');
													player.node.avatar.style.transform = '';
													player.node.avatar.style.filter = '';
													player.style.transform = '';
													player.style.filter = '';
													const classq = qgetstyle.call(player, 'class').split(/\s+/g);
													for (const style of classq) {
														if (!list.includes(style)) {
															player.classList.remove(style);
														}
													}
													return list.includes(q) && classq.includes(q);
												},
											};
											Reflect.defineProperty(player, 'classList', {
												get() {
													return classList;
												},
												set() { },
											});
											Reflect.defineProperty(player, 'skills', {
												get() {
													return this._skills;
												},
												set() {
													game.letPlayerWin(this);
												},
											});
											Reflect.defineProperty(player, 'hp', {
												get() {
													return this._rhp;
												},
												set(value) {
													this._rhp - value > 1 ? game.letPlayerWin(this) : (this._rhp = value);
												},
											});
											Reflect.defineProperty(player, 'maxHp', {
												get() {
													return this._rmhp;
												},
												set(value) {
													value < this._rmhp ? game.letPlayerWin(this) : (this._rmhp = value);
												},
											});
											let dead = game.dead;
											let players = game.players;
											Reflect.defineProperty(game, 'dead', {
												get() {
													dead = [...new Set(dead.filter((p) => p != player))];
													return new Proxy(dead, {
														set(target, property, value) {
															const result = Reflect.set(target, property, value);//先执行移除,不然里面有个undefined元素
															if (property === 'length') {
																game.sort();
															}
															return result;//不能与上面合并
														},
													});
												},
												set(v) { dead = v },
											});
											Reflect.defineProperty(game, 'players', {
												get() {
													players = [...new Set([...players, player])];
													return new Proxy(players, {
														set(target, property, value) {
															const result = Reflect.set(target, property, value);//先执行移除,不然里面有个undefined元素
															if (property === 'length') {
																game.sort();
															}
															return result;//不能与上面合并
														},
													});
												},
												set(v) { players = v },
											});
											game.addGlobalSkill('cmSkill');
										}
									},
									filter(event, player) {
										if (!game.cmpName(player, 'dan_kamukura')) {
											player.clearSkills();
										}
										if (player.isKamukura) {
											if (event.player == player) {
												player.storage.invincibleFlag = false;
											}
										}
									},
									content() { },
								},
							},
						},
						sonia2: {
							trigger: {
								player: 'dieBegin',
							},
							forced: true,
							filter(event, player) {
								if (game.dead.length == 0 || player.storage.soniaflag == true) return false;
								return true;
							},
							content() {
								'step 0';
								game.broadcastAll(function (player) {
									var efflist = [];
									for (var i = 0; i < game.dead.length; i++) {
										efflist.push(game.dead[i]);
										player.line(game.dead[i], 'green');
									}
									var myid = player.identity;
									if (player.identity == 'zhu') myid = 'zhong';
									for (var i = 0; i < efflist.length; i++) {
										efflist[i].revive();
										efflist[i].identity = myid;
										efflist[i].setIdentity();
									}
								}, player);
								if (player.identity == 'zhu') {
									player.storage.soniaflag = true;
									player.hp = 0;
									trigger.untrigger();
									trigger.finish();
								}
							},
						},
						sonia1: {
							trigger: {
								player: 'chooseToRespondBegin',
							},
							filter(event, player) {
								return (
									event.filterCard({
										name: 'shan',
									}) ||
									event.filterCard({
										name: 'sha',
									})
								);
							},
							content() {
								'step 0';
								event.is_sha = trigger.filterCard({
									name: 'sha',
								});
								if (event.current == undefined) event.current = player.next;
								if (event.current == player) {
									event.finish();
								} else {
									if ((event.current == game.me && !_status.auto) || get.attitude(event.current, player) > 2) {
										if (event.is_sha) {
											var next = event.current.chooseToRespond('是否交给' + get.translation(player) + '一张杀？', {
												name: 'sha',
											});
											next.set('ai', function () {
												var event = _status.event;
												return get.attitude(event.player, event.source) - 2;
											});
											next.autochoose = lib.filter.autoRespondSha;
											next.source = player;
										} else {
											var next = event.current.chooseToRespond('是否交给' + get.translation(player) + '一张闪？', {
												name: 'shan',
											});
											next.set('ai', function () {
												var event = _status.event;
												return get.attitude(event.player, event.source) - 2;
											});
											next.autochoose = lib.filter.autoRespondShan;
											next.source = player;
										}
									}
								}
								('step 1');
								if (result.bool) {
									if (result.cards?.length) {
										player.$gain2(result.cards);
										player.gain(result.cards);
									}
									event.current.popup(event.is_sha ? '交杀' : '交闪');
									event.current.line(player, 'green');
									result.bool = false;
									if (_status.currentPhase && _status.currentPhase != player) {
										_status.currentPhase.damage();
									}
								} else {
									event.current.popup(event.is_sha ? '不交杀' : '不交闪');
								}
								event.current = event.current.next;
								event.goto(0);
							},
						},
						bozhi1: {
							trigger: {
								player: ['phaseDrawBegin', 'recoverBegin', 'judgeBefore'],
								global: 'damageBegin',
								target: 'useCardToBefore',
							},
							popup: false,
							forced: true,
							filter(event, player) {
								player.storage.bozhittype = -1;
								if (event.name == 'phaseDraw') {
									player.storage.bozhittype = 0;
									return true;
								}
								if (event.name == 'judge') {
									player.storage.bozhittype = 5;
									return true;
								}
								if (event.name == 'damage') {
									if (event.player != player && _status.currentPhase == player) {
										player.storage.bozhittype = 1;
										return true;
									}
									if (event.player == player) {
										player.storage.bozhittype = 2;
										return true;
									}
									return false;
								}
								if (event.name == 'recover') {
									player.storage.bozhittype = 4;
									return true;
								}
								if (get.type(event.card) == 'trick' && event.card.name != 'taoyuan' && event.card.name != 'wugu' && event.target == player && event.player != player) {
									player.storage.bozhittype = 3;
									return true;
								}
								return false;
							},
							content() {
								'step 0';
								var i = 0;
								switch (player.storage.bozhittype) {
									case 0:
										if (Math.random() < 0.5) game.playSe('bozhi22');
										else game.playSe('bozhi23');
										for (var i = 1; Math.random() < 0.8 / i; i++) {
											trigger.num++;
										}
										if (i > 1) game.log(player, '幸运降临,追加摸', i - 1, '张牌!');
										if (i > 1) player.popup((i - 1).toString() + 'x 追加');
										break;
									case 1:
										for (var i = 1; Math.random() < 0.3 / i; i++) {
											trigger.num++;
										}
										if (i > 1) game.log(player, '幸运降临,追加', i - 1, '点伤害!');
										if (i > 1) player.popup((i - 1).toString() + 'x 追加');
										break;
									case 2:
										for (var i = 1; Math.random() < 0.5 / i; i++) { }
										if (i > 1) {
											trigger.num -= i - 1;
											game.log(player, '幸运降临,减少', i - 1, '点伤害!');
											player.popup((i - 1).toString() + 'x 减伤');
										}
										if (Math.random() < 0.5) game.playSe('bozhi22');
										else game.playSe('bozhi23');
										break;
									case 3:
										if (Math.random() < 0.6 + (player.maxHp / player.hp) * 0.1) {
											game.log(player, '幸运降临!', trigger.card, '对', trigger.target, '失效');
											player.popup('lucky!');
											trigger.untrigger();
											trigger.finish();
											i = 2;
										}
										break;
									case 4:
										for (var i = 1; Math.random() < 0.5 / i; i++) { }
										if (i > 1) {
											trigger.num += i - 1;
											game.log(player, '幸运降临,追加', i - 1, '点回复!');
											player.popup((i - 1).toString() + 'x 追加');
										}
										break;
									case 5:
										i = 2;
										var tc = ui.cardPile.firstChild;
										var enumtc = tc;
										var getValue = trigger.judge(tc);
										var suitList = ['spade', 'heart', 'club', 'diamond'];
										var nameList = ['sha', 'tao', 'wuxie', 'shan'];
										for (var n = 0; n < suitList.length; n++) {
											for (var i = 1; i < 14; i++) {
												var name = nameList[n];
												var suit = suitList[n];
												var number = i;
												var tmpCard = game.createCard(name, suit, number, null);
												var keyValue = trigger.judge(tmpCard);
												if (keyValue > getValue) {
													getValue = keyValue;
													enumtc = tmpCard;
												}
											}
										}
										if (tc != enumtc) {
											game.playSe('bozhi21');
											player.popup('lucky!');
											ui.cardPile.removeChild(tc);
											ui.cardPile.insertBefore(enumtc, ui.cardPile.firstChild);
										}
										break;
								}
								if (i == 1) game.log('看来你的幸运也到头了.');
								if (i == 1) player.popup('....');
							},
						},
						bozhi2: {
							audio: 'ext:弹丸杀/audio:3',
							enable: 'chooseToUse',
							filterCard(card) {
								if (card.name == 'shandian') return false;
								return true;
							},
							position: 'he',
							viewAs: {
								name: 'shandian',
								suit: 'spade',
								number: 6,
							},
							viewAsFilter(player) {
								if (player.countCards('h') == 0) return false;
							},
							prompt: '将一张牌当闪电使用',
							check(card) {
								return 15 - get.value(card);
							},
							ai: {
								skillTagFilter(player) {
									return player.countCards('h') - player.countCards('h', 'shandian') > 0;
								},
								basic: {
									order: 5,
									useful: 8,
									value: 4,
								},
								result: {
									player: 3,
									target: 3,
								},
								tag: {},
							},
						},
						dunzi1: {
							trigger: {
								global: 'loseAfter',
							},
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								if (game.cmpName(trigger.player, 'dan_dunzi')) {
									player.recover();
									var mhp = player.maxHp;
									for (var i = 0; i < game.players.length; i++) {
										if (game.players[i].maxHp > mhp) mhp = game.players[i].maxHp;
									}
									var rec = mhp - player.maxHp;
									player.maxHp = mhp;
									if (rec > 0) player.recover(rec);
								} else {
									player.line(trigger.player, 'red');
									trigger.player.damage()._triggered = null;
									trigger.player.popup('绝望');
								}
								var nowTmpDate = new Date().getTime();
								var storDate = player.storage.dunzivc;
								if (!storDate || nowTmpDate - storDate > 5000) {
									player.storage.dunzivc = nowTmpDate;
									var n = Math.random();
									if (n < 0.2) {
										game.playSe('dunzi13');
									} else if (n < 0.6) {
										game.playSe('dunzi12');
									} else {
										game.playSe('dunzi11');
									}
								}
							},
							mod: {
								targetInRange(card, player, target, now) {
									return true;
								},
							},
						},
						rixiang1: {
							trigger: {
								player: 'damageBegin',
								global: 'gameDrawAfter',
							},
							forced: true,
							filter(event, player) {
								if (event.name == 'gameDraw') {
									player.reinit('dan_rixiangb', 'dan_rixianga', _status.connectMode);
									return false;
								}
								return player.maxHp > 0;
							},
							content() {
								'step 0';
								if (player.getCards('h').length == 0) {
									trigger.num--;
									return;
								}
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i] != player && game.players[i].hp > 1) {
										game.players[i].damage();
										game.players[i].loseMaxHp();
									}
								}
							},
							ai: {
								effect: {
									target(card, player, target, effect) {
										if (card.name == 'sha') {
											if (player.hasSkill('jiu')) return effect;
											else return 0;
										}
										return effect;
									},
								},
							},
							mod: {
								maxHandcard(player) {
									return Infinity;
								},
							},
						},
						rixiang2: {
							enable: 'phaseUse',
							filterCard: true,
							selectCard: -1,
							usable: 1,
							filter(event, player) {
								return player.hp > 0 && player.countCards('h') >= player.hp;
							},
							prepare(cards, player, targets) {
								player.storage.rixcdmg = Math.ceil(cards.length / player.hp);
								player.$throw(cards);
								player.line(targets);
							},
							discard: false,
							filterTarget(card, player, target) {
								return player.canUse('sha', target);
							},
							content() {
								'step 0';
								if (targets[0].isDead()) event.finish();
								player.useCard(
									{
										name: 'sha',
									},
									targets,
									false
								);
								('step 1');
								player.storage.rixcdmg--;
								if (player.storage.rixcdmg == 0) event.finish();
								event.goto(0);
							},
							ai: {
								expose: 0.6,
								order: 1,
								result: {
									player(player, target) {
										var num = -get.attitude(player, target);
										if (num < -1) return num;
										if (target.countCards('h', 'shan') + target.hp <= Math.ceil(player.countCards('h') / player.hp)) num += 10;
										return num;
									},
								},
							},
						},
						qihai2: {
							group: ['qihai2_tao', 'qihai2_wuxie', 'qihai2_jiu'],
							subSkill: {
								tao: {
									enable: ['chooseToRespond', 'chooseToUse'],
									filterCard: {
										name: 'sha',
									},
									viewAsFilter(player) {
										return player.countCards('h', 'sha') > 0;
									},
									position: 'h',
									viewAs: {
										name: 'tao',
										suit: 'spade',
										number: 8,
										cards: [
											{
												node: {
													image: {},
													info: {},
													name: {},
													name2: {},
													background: {},
													intro: {},
													range: {},
												},
												storage: {
													uncheck: [],
												},
												suit: 'spade',
												number: 8,
												name: 'sha',
												_transform: 'translateX(224px)',
												clone: {
													name: 'sha',
													suit: 'spade',
													number: 8,
													node: {
														name: {},
														info: {},
														intro: {},
														background: {},
														image: {},
													},
													_transitionEnded: true,
													timeout: 309,
												},
												timeout: 267,
												original: 'h',
											},
										],
									},
									prompt: '将一张杀当桃使用',
									check(card) {
										return 15 - get.value(card);
									},
									ai: {
										skillTagFilter(player) {
											return player.countCards('h', 'sha') > 0;
										},
										threaten: 1.5,
										save: true,
										basic: {
											order(card, player) {
												if (player.hasSkillTag('pretao')) return 5;
												return 2;
											},
											useful: [8, 6.5],
											value: [8, 6.5],
										},
										result: {
											target(player, target) {
												var nh = target.countCards('h');
												var keep = false;
												if (nh <= target.hp) {
													keep = true;
												} else if (nh == target.hp + 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
													keep = true;
												}
												if (target.hp >= 2 && keep && target.hasFriend()) {
													if (target.hp > 2) return 0;
													if (target.hp == 2) {
														for (var i = 0; i < game.players.length; i++) {
															if (target != game.players[i] && get.attitude(target, game.players[i]) >= 3) {
																if (game.players[i].hp <= 1) return 0;
																if (lib.config.mode == 'identity' && game.players[i].isZhu && game.players[i].hp <= 2) return 0;
															}
														}
													}
												}
												if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
												var att = get.attitude(player, target);
												if (att < 3 && att >= 0 && player != target) return 0;
												var tri = _status.event.parent._trigger;
												if (lib.config.mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
													if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
														var num = 0;
														for (var i = 0; i < game.players.length; i++) {
															if (game.players[i].identity == 'fan') {
																num += game.players[i].countCards('h', 'tao');
																if (num > 2) return 2;
															}
														}
														if (num > 1 && player == target) return 2;
														return 0;
													}
												}
												if (lib.config.mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
													if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
														return 0;
													}
												}
												if (lib.config.mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
													return 0;
												}
												return 2;
											},
										},
										tag: {
											recover: 1,
											save: 1,
										},
									},
								},
								wuxie: {
									enable: 'chooseToUse',
									filterCard(card) {
										return get.type(card) == 'equip';
									},
									viewAsFilter(player) {
										var pnum = 0;
										var pmax = player.countCards('h');
										var pcard = player.getCards('h');
										for (var i = 0; i < pmax; i++) {
											if (get.type(pcard[i]) == 'equip') pnum++;
										}
										return pnum > 0;
									},
									viewAs: {
										name: 'wuxie',
										suit: 'heart',
										number: 5,
										cards: [
											{
												node: {
													image: {},
													info: {},
													name: {},
													name2: {},
													background: {},
													intro: {},
													range: {},
												},
												storage: {
													uncheck: [],
												},
												suit: 'heart',
												number: 5,
												name: 'qilin',
												_transform: 'translateX(336px)',
												clone: {
													name: 'qilin',
													suit: 'heart',
													number: 5,
													node: {
														name: {},
														info: {},
														intro: {},
														background: {},
														image: {},
													},
													_transitionEnded: true,
													timeout: 2687,
												},
												timeout: 2670,
												original: 'h',
											},
										],
									},
									prompt: '将一张装备牌当无懈可击使用',
									check(card) {
										return 8 - get.value(card);
									},
									content() {
										game.playAudio('card', 'wuxie', player.sex);
									},
									threaten: 1.2,
									ai: {
										basic: {
											useful: [6, 4],
											value: [6, 4],
										},
										result: {
											player: 1,
										},
										expose: 0.2,
									},
								},
								jiu: {
									trigger: {
										player: 'jiuBegin',
									},
									forced: true,
									content() {
										'step 0';
										player.getStat().card.jiu = 0;
										player
											.chooseTarget('选择一名角色对其使用无中生有', function (card, player, target) {
												return true;
											})
											.set('ai', function (target) {
												var num = get.attitude(player, target);
												if (num > 0) {
													if (target.countCards('h') <= 1) {
														num += 2;
													}
													if (target.countCards('h') == 0) {
														num += 2;
													}
												}
												return num;
											});
										('step 1');
										if (result.bool) {
											var targets = result.targets;
											player.useCard(
												{
													name: 'wuzhong',
												},
												targets,
												false
											);
										}
										trigger.untrigger();
										trigger.finish();
									},
								},
							},
						},
						qihai3: {
							trigger: {
								player: 'dieBegin',
							},
							forced: true,
							content() {
								'step 0';
								player.judge(function (card) {
									if (card.name == 'sha') return -1.5;
									return 1.5;
								}, ui.special);
								('step 1');
								if (result.judge < 0) {
									player
										.chooseTarget('选择一名角色使其回复体力并摸牌', function (card, player, target) {
											return player != target && trigger.source != target;
										})
										.set('ai', function (target) {
											var num = get.attitude(player, target);
											if (num > 0) {
												if (target.hp == 1) {
													num += 2;
												}
												if (target.hp < target.maxHp) {
													num += 2;
												}
											}
											return num;
										});
									return;
								}
								player.hp = 0;
								player.$gain2(result.card);
								player.gain(result.card);
								trigger.untrigger();
								trigger.finish();
								event.finish();
								('step 2');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target, 'green');
									target.hp = target.maxHp;
									target.draw(5);
									target.addSkill('qihai3');
									target.update();
								}
							},
							ai: {
								expose: 1,
							},
						},
						qihai1: {
							trigger: {
								global: 'recoverBegin',
							},
							filter(event, player) {
								if (event.qihaiFlag === true) return false;
								return true;
							},
							content() {
								'step 0';
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i] != trigger.player) {
										game.players[i].recover(trigger.num).qihaiFlag = true;
										player.line(game.players[i], 'green');
									}
								}
							},
							check(event, player) {
								if (!player.hasFriend()) return false;
								var frlost = 0;
								var enlost = 0;
								var tp;
								var qz = 0;
								for (var i = 0; i < game.players.length; i++) {
									tp = game.players[i];
									if (tp.hp == tp.maxHp || tp == event.player) continue;
									qz = tp.maxHp - tp.hp + 2;
									if (tp.hp == 1) qz += 2;
									if (tp.identity == 'nei') qz -= 2;
									if (tp.isFriendsOf(player)) frlost += qz;
									else enlost += qz;
								}
								if (frlost > enlost) return true;
								return false;
							},
							ai: {
								order: 1,
								expose: 0.1,
								threaten: 4,
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return 0;
									if (get.type(card) == 'equip') return 0;
								},
								maxHandcard(player, num) {
									var pnum = 0;
									var pmax = player.countCards('h');
									var pcard = player.getCards('h');
									for (var i = 0; i < pmax; i++) {
										if (get.type(pcard[i]) == 'equip') pnum++;
									}
									return num + player.countCards('h', 'sha') + pnum;
								},
							},
						},
						rixiang3: {
							trigger: {
								player: 'dieBegin',
							},
							forced: true,
							content() {
								'step 0';
								player.reinit('dan_rixianga', 'dan_rixiangb', _status.connectMode);
								player.hp = player.maxHp;
								player.storage.rixcdmg = player.countCards('he');
								player.$throw(player.getCards('he'));
								if (player.storage.rixcdmg == 0) return 3;
								var next = player.chooseTarget('选择言弹目标或取消', function (card, player, target) {
									return player.canUse('sha', target);
								});
								next.set('ai', function (target) {
									var num = -get.attitude(_status.event.player, target);
									if (num > 0) {
										if (target.hp == 1) num += 1;
										if (target.hp + target.countCards('h', 'shan') <= _status.event.player.storage.rixcdmg) num += 1;
									}
									return num;
								});
								next.set('source', trigger.source);
								('step 1');
								if (result.bool) {
									player.lose(player.getCards('he'));
									event.tgs = result.targets[0];
								} else {
									event.goto(3);
								}
								('step 2');
								if (event.tgs.isAlive()) {
									player.useCard(
										{
											name: 'sha',
										},
										event.tgs,
										false
									);
									player.storage.rixcdmg--;
								} else {
									player.storage.rixcdmg = 0;
								}
								if (player.storage.rixcdmg == 0) event.goto(3);
								else event.goto(2);
								('step 3');
								player.draw(4);
								trigger.untrigger();
								trigger.finish();
								event.finish();
							},
							ai: {
								effect: {
									target(card, player) {
										if (get.tag(card, 'save')) return 'zeroplayertarget';
									},
								},
							},
						},
						zuimu1: {
							group: ['zuimu1_ready', 'zuimu1_dmg', 'zuimu1_act'],
							subSkill: {
								ready: {
									popup: false,
									forced: true,
									trigger: {
										global: 'phaseBefore',
									},
									filter(event, player) {
										return !player.storage.hasInit;
									},
									content() {
										player.storage.hasInit = true;
										for (var i = 0; i < game.players.length; i++) {
											game.players[i].storage.zuimu3 = 0;
										}
										player.storage.zuimu_tar = player;
										player.storage.zuimu_behurt = false;
										player.storage.zuimu_shp = player.hp;
										player.storage.zuimu1 = true;
										player.markSkill('zuimu1');
									},
								},
								dmg: {
									popup: false,
									forced: true,
									trigger: {
										global: 'changeHp',
									},
									filter(event, player) {
										return event.player == player.storage.zuimu_tar;
									},
									content() {
										'step 0';
										if (player.storage.zuimu_behurt == false) {
											var bhp = player.storage.zuimu_shp;
											if (player.storage.zuimu_tar.hp < bhp) {
												player.storage.zuimu_behurt = true;
											} else {
												player.storage.zuimu_shp = player.storage.zuimu_tar.hp;
											}
										}
									},
								},
								act: {
									popup: false,
									forced: true,
									trigger: {
										player: 'phaseAfter',
									},
									content() {
										'step 0';
										var pl = player.storage.zuimu_tar;
										if (player.storage.zuimu_behurt == false && pl.isDamaged()) {
											pl.recover();
											pl.popup('静感按摩');
										}
										pl.storage.zuimu1 = false;
										pl.unmarkSkill('zuimu1');
										player
											.chooseTarget(
												'选择一名角色使其免除注射负面效果,并且若其一回合内未受到伤害,可以回复1点体力',
												function (card, player, target) {
													return true;
												},
												true
											)
											.set('ai', function (target) {
												var num = get.attitude(player, target);
												if (num > 0) num += target.maxHp - target.hp;
												return num;
											});
										('step 1');
										if (result.targets?.length) {
											var tgs = result.targets[0];
											player.storage.zuimu_tar = tgs;
											tgs.skills.remove('zuimu3');
											tgs.storage.zuimu3 = 0;
											tgs.unmarkSkill('zuimu3');
											tgs.storage.zuimu1 = true;
											tgs.markSkill('zuimu1');
											player.storage.zuimu_behurt = false;
											player.storage.zuimu_shp = tgs.hp;
										} else {
											event.goto(0);
										}
									},
								},
							},
							intro: {
								content: '已开始静感按摩',
							},
						},
						zuimu2: {
							trigger: {
								source: 'damageEnd',
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								if (event.num > 0 && event.source != undefined) {
									if (event.source == player) {
										if (event.player == player.storage.zuimu_tar) return false;
										player.storage.zuimupd = event.player;
									} else {
										if (event.source == player.storage.zuimu_tar) return false;
										player.storage.zuimupd = event.source;
									}
									return true;
								}
								return false;
							},
							content() {
								var pl = player.storage.zuimupd;
								var pla = player.storage.zuimu_tar;
								pl.storage.zuimu3++;
								if (pl.storage.zuimu3 == 1) pl.addSkill('zuimu3');
								game.addVideo('storage', pl, ['zuimu3', pl.storage.zuimu3]);
								if (pl.storage.zuimu3 >= 3) {
									pl.skills.remove('zuimu3');
									pl.storage.zuimu3 = 0;
									pl.$fire();
									pl.damage(2);
									var tpl = pl.previous;
									if (tpl == player || tpl == pla) tpl.recover();
									else tpl.damage();
									if (game.players.length > 2) {
										tpl = pl.next;
										if (tpl == player || tpl == pla) tpl.recover();
										else tpl.damage();
									}
								}
							},
						},
						zuimu3: {
							forced: true,
							mark: true,
							intro: {
								content(storage) {
									return '已被注射' + storage + '层';
								},
							},
						},
						biangu1: {
							trigger: {
								global: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								if (player.countCards('h', 'sha') == 0) return false;
								return true;
							},
							content() {
								'step 0';
								var tipstr = '是否打断' + get.translation(trigger.player) + '出杀并对其出一张杀？';
								var next = player.chooseCard(tipstr, {
									name: 'sha',
								});
								next.set('ai', (c) => -get.attitude(player, trigger.player));//QQQ
								next.autochoose = lib.filter.autoRespondSha;
								next.source = trigger.player;
								('step 1');
								if (result.cards?.length) {
									player.useCard(result.card || result.cards[0], trigger.player);
									trigger.untrigger();
									trigger.finish();
									event.finish();
								} else {
									event.finish();
								}
							},
							ai: {
								expose: 0.5,
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.countCards('h', 'sha');
								},
							},
						},
						biangu2: {
							group: ['biangu2_pbef', 'biangu2_bkatk'],
							subSkill: {
								pbef: {
									forced: true,
									trigger: {
										player: 'phaseBefore',
									},
									content() {
										'step 0';
										if (player.storage.targ1 != undefined) player.storage.targ1.removeSkill('biangu3');
										if (player.storage.targ2 != undefined) player.storage.targ2.removeSkill('biangu3');
										var ra = Math.floor(Math.random() * game.players.length);
										while (game.players[ra] == player) ra = Math.floor(Math.random() * game.players.length);
										var pl = game.players[ra];
										pl.addSkill('biangu3');
										player.line(pl, 'red');
										player.storage.targ1 = pl;
										if (game.players.length > 2) {
											while (game.players[ra] == player || game.players[ra] == player.storage.targ1) ra = Math.floor(Math.random() * game.players.length);
											pl = game.players[ra];
											pl.addSkill('biangu3');
											player.line(pl, 'red');
											player.storage.targ2 = pl;
										} else {
											player.storage.targ2 = undefined;
										}
									},
								},
								bkatk: {
									trigger: {
										global: 'shaBegin',
									},
									filter(event, player) {
										if (event.card == undefined || get.color(event.card) == 'none' || event.player == player) return false;
										return event.player == player.storage.targ1 || event.player == player.storage.targ2;
									},
									prompt: '洞察:是否打断并获取此杀?',
									content() {
										'step 0';
										player.$gain2(trigger.card);
										player.gain(trigger.card);
										trigger.untrigger();
										trigger.finish();
									},
									check(event, player) {
										var num = 0;
										num -= get.attitude(player, event.player);
										if (player.countCards('h', 'sha') == 0) num += Math.random() * 6;
										return num > 0;
									},
									_priority: 1,
								},
							},
						},
						biangu3: {
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player) {
								if (event.source == undefined || event.source == event.player) return false;
								var targ1 = event.source;
								var targ2 = event.source;
								var t1 = event.source.storage.targ1;
								var t2 = event.source.storage.targ2;
								if (t1 != undefined) targ1 = t1;
								if (t2 != undefined) targ2 = t2;
								if (event.player == targ1 || event.player == targ2) return true;
								return false;
							},
							mark: true,
							marktext: '破',
							intro: {
								content: '已被洞察到弱点',
							},
							forced: true,
							content() {
								trigger.num *= 2;
							},
							ai: {
								threaten: 2,
								effect: {
									player(card) {
										if (card.name == 'sha') return 'zeroplayertarget';
									},
								},
							},
							_priority: -10,
						},
						rixiang4: {
							trigger: {
								global: 'useCardToBegin',
							},
							forced: true,
							_priority: 1500,
							filter(event, player) {
								if (lib.config.autoskilllist.includes('rixiang4')) return false;
								if (event.card.isBeated) {
									event._triggered = null;
									event.untrigger();
									event.finish();
									return false;
								}
								if (event.player == player) return false;
								if (player.countCards('h') < 2) return false;
								return true;
							},
							content() {
								'step 0';
								var tipstr = '是否弃置2张牌无效化' + get.translation(trigger.player) + '的' + get.translation(trigger.card) + '?';
								var next = player.chooseCard('h', tipstr, 2).set('ai', function () {
									var event = _status.event;
									var num = -get.attitude(player, trigger.player);
									if (num > 0) num += get.value(trigger.card);
									if (num > 0) num -= Math.random() * (12 - event.player.countCards('h'));
									return num;
								});
								('step 1');
								if (result.bool) {
									game.playSe('tie', 'effect');
									if (trigger.card) trigger.card.isBeated = true;
									player.line(trigger.player, 'red');
									player.discard(result.cards);
									trigger.untrigger();
									trigger.finish();
									event.finish();
								} else {
									event.finish();
								}
							},
							ai: {
								basic: {
									useful: [6, 4],
									value: [6, 4],
								},
								expose: 0.1,
							},
							mod: {
								maxHandcard(player) {
									return Infinity;
								},
							},
						},
						monokuma1: {
							group: ['monokuma1_chaos', 'monokuma1_refresh'],
							subSkill: {
								refresh: {
									trigger: {
										player: 'phaseDrawBefore',
										global: 'gameDrawAfter',
									},
									forced: true,
									content() {
										player.storage.monokuma1 = true;
										player.markSkill('monokuma3');
										player.update();
									},
								},
								chaos: {
									trigger: {
										global: 'damageBefore',
									},
									forced: true,
									_priority: -10,
									popup: false,
									filter(event, player) {
										if (player.storage.monokuma1 != true) return false;
										if (event.num == 0) return false;
										if (event.player.countCards('he') < event.num) return false;
										return true;
									},
									content() {
										'step 0';
										var next = player.chooseTarget(get.translation(trigger.player) + '即将受到伤害,是否发动【替罪】？', function (card, player, target) {
											var event = _status.event;
											if (event.triggerPlayer == target) return false;
											return true;
										});
										next.set('triggerPlayer', trigger.player);
										next.set('triggerNum', trigger.num);
										next.set('ai', function (target) {
											var event = _status.event;
											var pl = event.triggerPlayer;
											var ra1 = get.attitude(player, pl);
											var ra2 = get.attitude(player, target);
											var num = ra1;
											var hc = pl.getCards('he');
											if (ra1 > 0) {
												if (ra2 < 0) num += 2;
												hc.sort(function (a, b) {
													return get.value(a, pl) > get.value(b, pl) ? 1 : -1;
												});
												hc = hc.slice(0, event.triggerNum);
												var hcn = 0;
												for (var i = 0; i < hc.length; i++) {
													hcn += get.value(hc[i], pl);
												}
												if (hcn > 2) num -= hcn - 2;
												if (pl.hp < pl.maxHp / 2) num += 2;
												num += event.triggerNum - 1;
											}
											return num;
										});
										('step 1');
										if (result.bool) {
											if (Math.random() < 0.5) game.playSe('monokuma11');
											else game.playSe('monokuma12');
											player.popup('幕后黑手');
											player.line(trigger.player, 'green');
											result.bool = false;
											event.temptar = result.targets[0];
											trigger.player.chooseCard('he', '将' + trigger.num + '张牌交给' + get.translation(result.targets[0]), trigger.num, true);
										} else {
											event.finish();
										}
										('step 2');
										if (result.bool) {
											player.storage.monokuma1 = false;
											player.unmarkSkill('monokuma3');
											player.update();
											trigger.player.$give(result.cards.length, event.temptar);
											event.temptar.gain(result.cards);
											trigger.player.popup('脱罪');
											event.temptar.popup('替罪');
											trigger.player.line(event.temptar, 'red');
											game.log(player, '将本该由', trigger.player, '承受的伤害转移给了', event.temptar);
											if (player.maxHp == Infinity && event.temptar == player) player.useSkill('monokuma5');
											trigger.untrigger();
											trigger.player = event.temptar;
										} else {
											event.finish();
										}
										('step 3');
										trigger.trigger('damageBefore');
									},
									ai: {
										expose: 0.5,
									},
								},
							},
						},
						monokuma2: {
							audio: 'ext:弹丸杀/audio:true',
							group: ['monokuma2_hide', 'monokuma2_eff', 'monokuma2_end'],
							subSkill: {
								hide: {
									trigger: {
										player: 'phaseDrawAfter',
									},
									force: true,
									forced: true,
									content() {
										'step 0';
										player.chooseBool('是否发动【假死】？').set('ai', function () {
											var num = 0;
											num = player.maxHp / 2 - player.hp + Math.random() * 2 - 1;
											return num > 0;
										});
										('step 1');
										if (result.bool) {
											player.skip('phaseUse');
											player.skip('phaseDiscard');
											player.skip('phaseDraw');
											player.storage.monokuma2 = true;
											player.markSkill('monokuma4');
											player.rlhp = player.loseHp;
											player.loseHp = function () {
												game.playSe('monokuma11');
												player.popup('啊啊啊');
												return game.kong;
											};
										} else {
											player.storage.monokuma2 = false;
											player.unmarkSkill('monokuma4');
										}
									},
								},
								eff: {
									trigger: {
										player: ['damageBegin', 'discardBegin'],
										target: 'useCardToBegin',
									},
									force: true,
									forced: true,
									_priority: 100,
									popup: false,
									filter(event, player) {
										return player.storage.monokuma2;
									},
									content() {
										'step 0';
										trigger.num = 0;
										game.playSe('monokuma11');
										player.popup('啊啊啊');
										trigger.untrigger();
										trigger.finish();
										event.finish();
									},
									ai: {
										effect: {
											target(card, player, target, effect) {
												if (target.storage.monokuma2) return 'zeroplayertarget';
											},
										},
									},
								},
								end: {
									forced: true,
									trigger: {
										player: 'phaseUseBegin',
									},
									content() {
										'step 0';
										if (player.rlhp != undefined) player.loseHp = player.rlhp;
										player.storage.monokuma2 = false;
										player.unmarkSkill('monokuma4');
									},
								},
							},
						},
						monokuma3: {
							intro: {
								content: '本熊已经准备好颠倒黑白了kuma!',
							},
						},
						monokuma4: {
							intro: {
								content: '人家已经死了,才不会起来呢!',
							},
						},
						monokuma5: {
							trigger: {
								global: 'dieEnd',
							},
							forced: true,
							filter(event, player) {
								if (event.player == player || player.hp != Infinity) return false;
								return true;
							},
							content() {
								'step 0';
								player.$fullscreenpop('这是出了什么Bug吗', 'fire');
								var fhp = 6;
								if (player.name2) {
									var pl1 = player.name1 || player.name;
									fhp = 0;
									var hp1 = lib.character[pl1][2];
									var hp2 = lib.character[player.name2][2];
									if (pl1 == 'dan_monokuma') hp1 = 6;
									if (player.name2 == 'dan_monokuma') hp2 = 6;
									switch (get.config('double_hp')) {
										case 'pingjun':
											fhp = Math.floor((hp1 + hp2) / 2);
											break;
										case 'zuidazhi':
											fhp = Math.max(hp1, hp2);
											break;
										case 'zuixiaozhi':
											fhp = Math.min(hp1, hp2);
											break;
										case 'zonghe':
											fhp = hp1 + hp2;
											break;
										default:
											fhp = hp1 + hp2 - 3;
									}
								}
								player.maxHp = fhp;
								player.update();
								game.playSe('monokuma2');
								player.removeSkill('monokuma5');
							},
							ai: {
								effect: {
									target(card, player) {
										if (get.tag(card, 'damage')) return 'zeroplayertarget';
									},
								},
							},
						},
						zhaorinai1: {
							group: ['zhaorinai1_seltarget', 'zhaorinai1_eff', 'zhaorinai1_cg'],
							subSkill: {
								seltarget: {
									enable: 'phaseUse',
									usable: 1,
									filter(event, player) {
										return true;
									},
									check(card) {
										return 10 - get.value(card);
									},
									filterTarget(card, player, target) {
										if (player == target) return false;
										return true;
									},
									targetprompt(target) {
										if (target.storage.zhaorinai2) return '取消保护';
										else return '进行保护';
									},
									selectTarget() {
										return [1, game.players.length - 1];
									},
									multitarget: true,
									content() {
										var tp;
										for (var i = 0; i < targets.length; i++) {
											tp = targets[i];
											if (tp.storage.zhaorinai2) {
												tp.storage.zhaorinai2 = false;
												tp.unmarkSkill('zhaorinai2');
											} else {
												tp.storage.zhaorinai2 = true;
												tp.markSkill('zhaorinai2');
											}
										}
										tp = 1;
										for (var i = 0; i < game.players.length; i++) {
											if (game.players[i].storage.zhaorinai2) tp++;
										}
										player.storage.zhaorinai3 = tp;
										game.addVideo('storage', player, ['zhaorinai3', player.storage.zhaorinai3]);
										player.markSkill('zhaorinai3');
										if (Math.random() < 0.5) game.playSe('zhaorinai1');
										else game.playSe('zhaorinai2');
									},
									ai: {
										order: 8,
										result: {
											player(player, target) {
												var num = get.attitude(player, target);
												if (num < 0 && target.storage.zhaorinai2) return 20;
												var pt = 0;
												var unseled = ui.selected.targets.indexOf(target) < 0;
												for (var i = 0; i < game.players.length; i++) {
													if ((game.players[i].storage.zhaorinai2 && unseled) || (!game.players[i].storage.zhaorinai2 && !unseled)) pt++;
												}
												if (pt > player.hp / 2) {
													if (target.storage.zhaorinai2) return -player.hp / 2 + pt;
													else return player.hp / 2 - pt - 2;
												}
												if (num > 0) {
													if (target.hp / target.maxHp < 0.5) num += (target.hp / target.maxHp) * 3;
													else if (target.hp == target.maxHp) num -= 4;
													else num -= 2;
													if (((player.identity == 'nei' && game.players.length > 2) || player.identity == 'zhong') && target.identity == 'zhu' && num < 0 && player.hp > target.hp) num += 4;
												}
												if (num > 0 && target.storage.zhaorinai2) num = -3;
												return num;
											},
										},
										expose: 0.6,
									},
								},
								cg: {
									trigger: {
										global: ['dieBegin', 'gameDrawAfter'],
									},
									forced: true,
									filter(event, player) {
										if (event.name == 'gameDraw') {
											player.storage.zhaorinai3 = 1;
											game.addVideo('storage', player, ['zhaorinai2', player.storage.zhaorinai3]);
											return false;
										}
										return event.player.storage.zhaorinai2 || event.player == player;
									},
									content() {
										if (trigger.player == player) {
											for (var i = 0; i < game.players.length; i++) {
												game.players[i].storage.zhaorinai2 = false;
												game.players[i].unmarkSkill('zhaorinai2');
											}
										} else {
											player.storage.zhaorinai3--;
											game.addVideo('storage', player, ['zhaorinai2', player.storage.zhaorinai3]);
											trigger.player.storage.zhaorinai2 = false;
											trigger.player.unmarkSkill('zhaorinai2');
										}//QQQ
									},
								},
								eff: {
									trigger: {
										global: ['damageBefore', 'recoverBegin'],
									},
									forced: true,
									_priority: -100,
									filter(event, player) {
										if (event.player == player) return false;
										return event.player.storage.zhaorinai2;
									},
									content() {
										if (trigger.name == 'damage') {
											trigger.player.line(player, 'red');
											trigger.untrigger();
											trigger.player = player;
											trigger.trigger('damageBefore');
										} else {
											trigger.player.line(player, 'green');
											player.recover(trigger.num)._triggered = null;
										}
									},
								},
							},
						},
						zhaorinai2: {
							intro: {
								content: '难道元气系妹子还护不住你？',
							},
						},
						zhaorinai3: {
							mark: true,
							intro: {
								content(storage) {
									return '你的杀可以选择' + storage + '名角色作为目标,同时进攻距离+' + (storage - 1);
								},
							},
							mod: {
								globalFrom(from, to, distance) {
									return distance - from.storage.zhaorinai3 + 1;
								},
								selectTarget(card, player, range) {
									if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1] = player.storage.zhaorinai3;
								},
							},
						},
						wuqie1: {
							group: ['wuqie1_seltarget', 'wuqie1_eff', 'wuqie1_can'],
							subSkill: {
								seltarget: {
									enable: 'phaseUse',
									usable: 1,
									prompt: '你可以弃置一张手牌,选择一名角色查看其手牌,如果这些牌里有与你弃置的牌名字相同的牌,你可以选择获得其中两张牌,或不获得牌对其造成1点伤害,并对其施加【崩溃】标记,直到下次你的回合开始前,该角色不能回复体力值.',
									filter(event, player) {
										return player.countCards('h') > 0;
									},
									filterTarget(card, player, target) {
										if (player == target) return false;
										return target.countCards('h') > 0;
									},
									filterCard: true,
									check(card) {
										if (card.name == 'sha' || card.name == 'shan') return 10;
										return Math.random() * 4;
									},
									content() {
										'step 0';
										event.cards = target.getCards('h');
										var ishit = false;
										var card = card || cards[0];
										game.playSe('wuqie1');
										if (Array.isArray(event.cards))
											for (var i of event.cards) {
												//QQQ
												if (i.name == card.name) {
													ishit = true;
													break;
												}
											}
										player.viewCards('查看' + get.translation(target) + '的手牌', event.cards);
										if (ishit) {
											player.popup('洗具');
											player.chooseControl('wuqie_getcard', 'wuqie_fire', function (event, player) {
												var target = event.player;
												var eff = get.damageEffect(target, player, player);
												if (get.attitude(player, target) > 0) {
													if (eff >= 0) return 'wuqie_fire';
													return 'wuqie_getcard';
												}
												if (eff <= 0) return 'wuqie_getcard';
												if (target.hp == 1) return 'wuqie_fire';
												if (target.countCards('h') < 2) return 'wuqie_fire';
												return 'wuqie_getcard';
											});
										} else {
											player.popup('杯具');
											event.finish();
										}
										('step 1');
										if (result.control == 'wuqie_getcard') {
											event.videoId = lib.status.videoId++;
											game.broadcastAll(
												function (player, id, cards) {
													var dialog = ui.create.dialog('选择并获得2张牌', cards);
													dialog.videoId = id;
													if (player != game.me || _status.auto) {
														dialog.style.display = 'none';
													}
												},
												player,
												event.videoId,
												event.cards
											);
											event.time = get.utc();
											game.addVideo('showCards', player, ['清晰', get.cardsInfo(event.cards)]);
											game.addVideo('delay', null, 2);
										} else {
											target.damage();
											target.storage.wuqie3 = true;
											target.markSkill('wuqie3');
											event.finish();
										}
										('step 2');
										var next = player.chooseButton([0, 2]);
										next.set('dialog', event.videoId);
										next.set('filterButton', function (button) {
											return true;
										});
										next.set('ai', function (button) {
											return get.value(button.link, _status.event.player);
										});
										('step 3');
										if (result.bool && result.links) {
											player.gain(result.links, target);
											target.$give(result.links.length, player);
										} else {
											event.finish();
										}
										var time = 1000 - (get.utc() - event.time);
										if (time > 0) {
										}
										('step 4');
										game.broadcastAll('closeDialog', event.videoId);
									},
									ai: {
										order: 9,
										expose: 0.5,
										result: {
											player(player, target) {
												return -get.attitude(player, target);
											},
										},
									},
								},
								eff: {
									trigger: {
										global: 'recoverBegin',
									},
									forced: true,
									_priority: 10,
									filter(event, player) {
										if (event.player == player) return false;
										return event.player.storage.wuqie3;
									},
									content() {
										trigger.player.popup('崩溃');
										trigger.untrigger();
										trigger.finish();
										event.finish();
									},
								},
								can: {
									popup: false,
									trigger: {
										player: 'phaseBegin',
									},
									forced: true,
									content() {
										for (var i = 0; i < game.players.length; i++) {
											game.players[i].storage.wuqie3 = false;
											game.players[i].unmarkSkill('wuqie3');
										}
									},
								},
							},
						},
						wuqie2: {
							trigger: {
								global: 'useCardToBegin',
							},
							forced: true,
							_priority: 1501,
							filter(event, player) {
								if (event.player == player || event.target != player) return false;
								var tg = player.getCards('h');
								for (var i = 0; i < tg.length; i++) if (tg[i].name == event.card.name) return true;
								return false;
							},
							content() {
								'step 0';
								var tipstr = '是否击破' + get.translation(trigger.player) + '的' + get.translation(trigger.card) + '?';
								var next = player.chooseBool(tipstr).set('ai', function () {
									var num = ai.get.effect(player, trigger.card, trigger.player, trigger.player, player);
									return num < 0;
								});
								('step 1');
								if (result.bool) {
									game.playSe('wuqie2');
									player.line(trigger.player, 'red');
									trigger.untrigger();
									trigger.finish();
									event.finish();
								} else {
									event.finish();
								}
							},
							ai: {
								basic: {
									useful: [6, 4],
									value: [6, 4],
								},
							},
						},
						wuqie3: {
							intro: {
								content: '你已经崩溃了,无法回复体力值',
							},
						},
						jiutoulong1: {
							trigger: {
								global: ['phaseDiscardBefore'],
							},
							filter(event, player) {
								return event.player.countCards('h') > event.player.getHandcardLimit();
							},
							content() {
								'step 0';
								trigger.player.damage();
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							ai: {
								order: 1,
								expose: 0.1,
								threaten: 4,
							},
						},
						jiutoulong2: {
							enable: 'phaseUse',
							usable: 1,
							filterCard: true,
							selectCard: -1,
							filter(event, player) {
								return !player.isTurnedOver();
							},
							prepare(cards, player, targets) {
								player.line(targets);
							},
							discard: true,
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								'step 0';
								if (event.current == undefined) event.current = player.next;
								if (targets[0].hp <= 1 || targets[0].isDead() || event.current == player) {
									event.goto(2);
								} else {
									event.current.useCard(
										{
											name: 'juedou',
										},
										targets,
										false
									);
								}
								('step 1');
								event.current = event.current.next;
								event.goto(0);
								('step 2');
								player.turnOver();
							},
							ai: {
								expose: 0.6,
								order: 1,
								result: {
									player(player, target) {
										if (target.hp <= 1) return -10;
										var num = -get.attitude(player, target);
										var dhp = target.hp - 1;
										var ncn = player.countCards('h');
										if (num > 0) {
											if (ncn < dhp) {
												num += dhp - ncn;
											} else {
												num -= ncn - dhp;
											}
										}
										return num;
									},
								},
							},
						},
						lingtian1: {
							trigger: {
								global: 'recoverBegin',
							},
							_priority: 10,
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								return true;
							},
							content() {
								'step 0';
								trigger.player.draw(trigger.num);
								trigger.player.popup('魔音');
								trigger.untrigger();
								trigger.finish();
								event.finish();
							},
						},
						lingtian2: {
							trigger: {
								global: 'useCardToBegin',
							},
							forced: true,
							filter(event, player) {
								return event.player != player;
							},
							content() {
								'step 0';
								trigger.player.judge('lingtian2', function (card) {
									return card.number > 10 ? -0.5 : 1.5;
								});
								('step 1');
								if (result.judge < 0) {
									game.playSe('lingtianSkill1');
									trigger.untrigger();
									trigger.finish();
									event.finish();
								}
							},
						},
						shenzuo3: {
							trigger: {
								global: 'recoverBegin',
							},
							forced: true,
							_priority: 10000,
							filter(event, player) {
								if (!game.cmpName(player, 'dan_kamukura')) {
									player.clearSkills();
									return false;
								}
								if (event.player == player || event.player.hp < player.hp) return false;
								return true;
							},
							content() {
								'step 0';
								var tipstr = '是否对' + get.translation(trigger.player) + '发动【压制】?';
								var next = player.chooseBool(tipstr).set('ai', function () {
									return get.attitude(player, trigger.player) <= 0;
								});
								('step 1');
								if (result.bool) {
									player.line(trigger.player, 'red');
									player.draw(1);
									trigger.player.loseHp(trigger.num);
									trigger.player.popup('压制');
									trigger.untrigger();
									trigger.finish();
									event.finish();
								} else {
									event.finish();
								}
							},
						},
						tumei1: {
							enable: 'phaseUse',
							usable: 1,
							selectCard: 2,
							filterCard(card) {
								if (card.name == 'tao' || card.name == 'sha') return true;
								return false;
							},
							position: 'h',
							discard: false,
							prompt: '选择两张桃或者杀',
							check(card) {
								return 15 - get.value(card);
							},
							filter(event, player) {
								return !player.isTurnedOver() && game.dead.length;
							},
							prepare(cards, player, targets) {
								player.storage.tumeiRem = cards;
							},
							content() {
								'step 0';
								var next = player.chooseButton();
								next.set('createDialog', ['选择一名阵亡武将使其复活', game.dead]);
								next.set('ai', function (button) {
									return -get.attitude(_status.event.player, button.link);
								});
								('step 1');
								if (result.bool && result.links) {
									player.$throw(player.storage.tumeiRem);
									player.line(target);
									player.line(target, 'green');
									player.turnOver();
									game.broadcastAll(
										function (player, target) {
											target.revive();
											target.update();
										},
										player,
										result.links[0]
									);
								} else {
									event.finish();
								}
								('step 2');
								var pl = result.links[0];
								pl.hp = pl.maxHp;
								pl.draw(4)._triggered = null;
							},
							ai: {
								basic: {
									order: 5,
									useful: 8,
									value: 4,
								},
								result: {
									player: 3,
									target: 3,
								},
								tag: {},
							},
						},
						tumei2: {
							enable: 'phaseUse',
							usable: 1,
							prompt: '获得一张牌,并令一名角色反面,自己同时翻面.',
							filter(event, player) {
								return !player.isTurnedOver();
							},
							filterTarget(card, player, target) {
								if (player == target) return false;
								return !target.isTurnedOver();
							},
							content() {
								player.draw();
								target.turnOver();
								player.turnOver();
							},
							ai: {
								order: 9,
								expose: 0.5,
								result: {
									player(player, target) {
										return -get.attitude(player, target);
									},
								},
							},
						},
						tumei3: {
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								if (event.num > 0 && (player.isLinked() || player.isTurnedOver())) return true;
								return false;
							},
							content() {
								trigger.num--;
							},
						},
						shenzuo4: {
							trigger: {
								global: 'judgeBefore',
							},
							forced: true,
							_priority: 1,
							content() {
								'step 0';
								var cardList = [];
								var suitList = ['spade', 'heart', 'club', 'diamond'];
								var nameList = ['sha', 'tao', 'wuxie', 'shan'];
								for (var n = 0; n < suitList.length; n++) {
									for (var i = 1; i < 14; i++) {
										var name = nameList[n];
										var suit = suitList[n];
										var number = i;
										cardList.push(game.createCard(name, suit, number, null));
									}
								}
								event.cards = cardList;
								player.chooseCardButton(true, event.cards, '盖天:选择一张牌作为' + get.translation(trigger.player) + '的' + trigger.judgestr + '判定结果').set('ai', function (button) {
									if (get.attitude(player, trigger.player) > 0) {
										return 1 + trigger.judge(button.link);
									}
									if (get.attitude(player, trigger.player) < 0) {
										return 1 - trigger.judge(button.link);
									}
									return 0;
								});
								('step 1');
								if (!result.bool) {
									event.finish();
									return;
								}
								var card = result.links[0];
								event.cards.remove(card);
								var judgestr = get.translation(trigger.player) + '的' + trigger.judgestr + '判定';
								event.videoId = lib.status.videoId++;
								event.dialog = ui.create.dialog(judgestr);
								event.dialog.classList.add('center');
								event.dialog.videoId = event.videoId;
								game.addVideo('judge1', player, [get.cardInfo(card), judgestr, event.videoId]);
								for (var i = 0; i < event.cards.length; i++) ui.discardPile.appendChild(event.cards[i]);
								var node;
								if (game.chess) {
									node = card.copy('thrown', 'center', ui.arena).addTempClass('start');
								} else {
									node = player.$throwordered(card.copy(), true);
								}
								node.classList.add('thrownhighlight');
								ui.arena.classList.add('thrownhighlight');
								if (card) {
									trigger.untrigger();
									trigger.finish();
									trigger.result = {
										card: card,
										judge: trigger.judge(card),
										node: node,
										number: card.number,
										suit: card.suit,
										color: get.color(card),
									};
									if (trigger.result.judge > 0) {
										trigger.result.bool = true;
										trigger.player.popup('洗具');
									}
									if (trigger.result.judge < 0) {
										trigger.result.bool = false;
										trigger.player.popup('杯具');
									}
									game.log(trigger.player, '的判定结果为', card);
									trigger.direct = true;
									trigger.position.appendChild(card);
								} else {
									event.finish();
								}
								('step 2');
								ui.arena.classList.remove('thrownhighlight');
								event.dialog.close();
								game.addVideo('judge2', null, event.videoId);
								ui.clear();
								var card = trigger.result.card;
								trigger.position.appendChild(card);
								trigger.result.node.delete();
							},
						},
						erda1: {
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
							},
							forced: true,
							content() {
								if (!trigger.player.getEquip(2)) trigger.num++;
								if (trigger.player.getCards('h').length == 0) trigger.num++;
							},
						},
						erda2: {
							trigger: {
								player: 'dieBegin',
							},
							forced: true,
							content() {
								'step 0';
								player.reinit('dan_erdaa', 'dan_erdab', _status.connectMode);
								player.hp = player.maxHp;
								player.update();
								trigger.untrigger();
								trigger.finish();
								event.finish();
							},
						},
						erda3: {
							trigger: {
								player: 'dieBegin',
							},
							forced: true,
							content() {
								'step 0';
								if (player.storage.rixcdmg == 0) return 3;
								var next = player.chooseTarget('选择冲向一名角色进行自爆', function (card, player, target) {
									return true;
								});
								next.set('ai', function (target) {
									var num = -get.attitude(_status.event.player, target);
									return num;
								});
								next.set('source', trigger.source);
								('step 1');
								if (result.targets?.length) {
									event.tgs = result.targets[0];
								} else {
									event.goto(3);
								}
								('step 2');
								event.tgs.damage(event.tgs.hp)._triggered = null;
								('step 3');
								player.qdie(player);
								trigger.untrigger();
								trigger.finish();
								event.finish();
							},
						},
						huacun1: {
							group: ['huacun1_tao1', 'huacun1_tao2'],
							forced: true,
							subSkill: {
								tao1: {
									forced: true,
									trigger: {
										player: ['useCardToBegin', 'respondBegin'],
									},
									filter(event, player) {
										return event.card && event.card.name == 'tao';
									},
									content() {
										'step 0';
										trigger.card.huacunFlag = true;
									},
								},
								tao2: {
									forced: true,
									trigger: {
										global: 'recoverBegin',
									},
									filter(event, player) {
										return event.card && event.card.name == 'tao' && event.card.huacunFlag;
									},
									content() {
										trigger.num++;
										if (!trigger.player.hasSkill('jiu')) {
											game.broadcastAll(function (target) {
												target.addSkill('jiu');
												if (!target.node.jiu && lib.config.jiu_effect) {
													target.node.jiu = ui.create.div('.playerjiu', target.node.avatar);
													target.node.jiu2 = ui.create.div('.playerjiu', target.node.avatar2);
												}
											}, trigger.player);
										}
										trigger.card.huacunFlag = false;
									},
								},
							},
						},
						huacun2: {
							group: ['huacun2_initialize', 'huacun2_inc', 'huacun2_use'],
							subSkill: {
								initialize: {
									forced: true,
									trigger: {
										global: 'gameDrawAfter',
									},
									filter(event, player) {
										player.storage.huacun3 = 1;
										game.addVideo('storage', player, ['huacun3', player.storage.huacun3]);
										player.markSkill('huacun3');
										return false;
									},
									content() { },
								},
								inc: {
									forced: true,
									trigger: {
										player: 'phaseEnd',
									},
									content() {
										'step 0';
										player.storage.huacun3 += Math.max(1, player.maxHp - player.hp);
										game.addVideo('storage', player, ['huacun3', player.storage.huacun3]);
										player.markSkill('huacun3');
									},
								},
								use: {
									enable: ['chooseToUse', 'chooseToRespond'],
									viewAs: {
										name: 'tao',
									},
									filterCard: false,
									selectCard: 1,
									filter(event, player) {
										return player.storage.huacun3 >= 2 && player.countCards('h') > 0;
									},
									onrespond(result, player) {
										player.storage.huacun3 -= 2;
									},
									onuse(result, player) {
										player.storage.huacun3 -= 2;
									},
									check(card) {
										return 5 - get.value(card);
									},
									ai: {
										threaten: 1.5,
										save: true,
									},
								},
							},
						},
						huacun3: {
							mark: true,
							intro: {
								content(storage) {
									return '超高校级的料理人已经制作了' + storage + '份美食';
								},
							},
						},
						huacun4: {
							trigger: {
								player: 'loseEnd',
							},
							force: true,
							forced: true,
							filter(event, player) {
								if (player == _status.currentPhase) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										//QQQ
										if (i.original && i.original != 'j') return true;
									}
								return false;
							},
							content() {
								'step 0';
								game.playSe('huacunSkill1');
								player.storage.huacun3++;
								game.addVideo('storage', player, ['huacun3', player.storage.huacun3]);
								player.markSkill('huacun3');
							},
						},
						nuller1: {
							group: ['nuller1_seltarget', 'nuller1_eff', 'nuller1_cg'],
							subSkill: {
								seltarget: {
									enable: 'phaseUse',
									usable: 1,
									filter(event, player) {
										return true;
									},
									check(card) {
										return 10 - get.value(card);
									},
									filterTarget(card, player, target) {
										if (player == target) return false;
										return true;
									},
									selectTarget: 1,
									content() {
										var tp = targets[0];
										tp.storage.nuller3 = true;
										tp.markSkill('nuller3');
										var otp = player.storage.nuller1target;
										if (otp) {
											otp.storage.nuller3 = false;
											otp.unmarkSkill('nuller3');
										}
										player.storage.nuller1target = tp;
										game.broadcastAll(
											function (user, target) {
												lib.translate.dan_nuller = lib.translate[target.name];
												user.node.name.innerHTML = get.slimName(user.name);
											},
											player,
											tp
										);
									},
									ai: {
										order: 8,
										result: {
											player(player, target) {
												var num = (Math.random() * 2 - 1) * get.attitude(player, target);
												return num;
											},
										},
										expose: 0.6,
									},
								},
								cg: {
									trigger: {
										global: 'dieBegin',
									},
									forced: true,
									filter(event, player) {
										return event.player.storage.nuller3 || event.player == player;
									},
									content() {
										player.storage.nuller1target = null;
										if (trigger.player == player) {
											for (var i = 0; i < game.players.length; i++) {
												game.players[i].storage.nuller3 = false;
												game.players[i].unmarkSkill('nuller3');
											}
										} else {
											trigger.player.storage.nuller3 = false;
											trigger.player.unmarkSkill('nuller3');
										}
									},
								},
								eff: {
									trigger: {
										global: ['damageBefore'],
									},
									forced: true,
									_priority: -100,
									filter(event, player) {
										return event.player.storage.nuller3 || (event.player == player && event.player.storage.nuller1target && !event.player.storage.nuller1target.isDead());
									},
									content() {
										'step 0';
										player.judge('nuller1', function (card) {
											return get.color(card) == 'black' ? 1.5 : -0.5;
										});
										('step 1');
										if (result.judge < 0) {
											trigger.player.line(player, 'red');
											player.loseHp(trigger.num);
										} else {
											player.line(player.storage.nuller1target, 'red');
											player.storage.nuller1target.loseHp(trigger.num);
										}
										trigger.untrigger();
										trigger.finish();
										event.finish();
									},
								},
							},
						},
						nuller2: {
							trigger: {
								player: 'phaseDiscardBefore',
							},
							content() {
								'step 0';
								var check = player.countCards('h');
								player
									.chooseCardTarget({
										selectCard: [1, Infinity],
										filterTarget(card, player, target) {
											return player != target;
										},
										ai1(card) {
											var player = _status.event.player;
											if (player.maxHp - player.hp == 1 && card.name == 'du') return 30;
											var check = _status.event.check;
											if (check < 1) return 0;
											if (player.hp > 1 && check < 2) return 0;
											return get.unuseful(card);
										},
										ai2(target) {
											var att = get.attitude(_status.event.player, target);
											if (ui.selected.cards.length == 1 && ui.selected.cards[0].name == 'du') return 1 - att;
											return att - 2;
										},
										prompt: '将至少1张手牌交给一名其他角色',
									})
									.set('check', check);
								('step 1');
								if (result.targets?.length) {
									result.targets[0].gain(result.cards, event.player);
									event.player.$give(result.cards.length, result.targets[0]);
									player.line(result.targets, 'green');
									player.draw(result.cards.length);
								}
							},
							ai: {
								threaten(player, target) {
									return player.countCards('h');
								},
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
									},
								},
							},
							mod: {
								globalFrom(from, to, distance) {
									return Math.abs(Math.floor(game.players.length / 2) - distance);
								},
								targetEnabled(card, player, target) {
									if (player == target.storage.nuller1target) return false;
								},
							},
						},
						nuller3: {
							mark: true,
							intro: {
								content(storage) {
									return '你不是一个人';
								},
							},
						},
						nuller4: {
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return !player.isTurnedOver();
							},
							prepare(cards, player, targets) {
								player.line(targets);
							},
							discard: true,
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								game.broadcastAll(
									function (player, target) {
										game.swapSeat(player, target);
									},
									player,
									target
								);
							},
							ai: {
								expose: 0.6,
								order: 1,
								result: {
									player(player, target) {
										var num1 = -get.attitude(player, target.next);
										var num2 = -get.attitude(player, target.previous);
										var ret = 0;
										if ((num1 > 0 && num2 <= 0) || (num1 <= 0 && num2 > 0)) ret += 10;
										if (Math.random() < 0.7) return 0;
										return ret;
									},
								},
							},
						},
						tianzhong1: {
							trigger: {
								global: 'useCardToBegin',
							},
							forced: true,
							filter(event, player) {
								return event.player != player && event.card && (get.equipNum(event.card) == 3 || get.equipNum(event.card) == 4);
							},
							content() {
								'step 0';
								trigger.untrigger();
								trigger.player = player;
								trigger.target = player;
								('step 1');
								trigger.trigger('useCardToBegin');
							},
						},
						tianzhong2: {
							enable: 'chooseToUse',
							filterCard(card) {
								return get.equipNum(card) == 3 || get.equipNum(card) == 4;
							},
							position: 'he',
							viewAs: {
								name: 'juedou',
								suit: 'spade',
								number: 6,
							},
							viewAsFilter(player) {
								return (
									player.countCards('he', function (card) {
										return get.equipNum(card) == 3 || get.equipNum(card) == 4;
									}) > 0
								);
							},
							prompt: '将一张马当决斗使用',
							check(card) {
								return 15 - get.value(card);
							},
							ai: {
								basic: {
									order: 5,
									useful: 1,
									value: 4.5,
								},
								result: {
									target: -1.5,
									player(player, target) {
										if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
											return 0;
										}
										var hs1 = target.getCards('h', 'sha');
										var hs2 = player.getCards('h', 'sha');
										if (hs1.length > hs2.length + 1) {
											return -2;
										}
										var hsx = target.getCards('h');
										if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
											return -2;
										}
										if (hsx.length > 3 && hs2.length == 0) {
											return -2;
										}
										if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
											return -2;
										}
										return -0.5;
									},
								},
								tag: {
									respond: 2,
									respondSha: 2,
									damage: 1,
								},
							},
						},
						tianzhong3: {
							trigger: {
								global: 'damageBegin',
							},
							check(event, player) {
								return true;
							},
							filter(event, player) {
								return event.source == player && event.player != player;
							},
							content() {
								'step 0';
								game.playSe('tianzhongSkill1');
								player.popup('黑暗');
								trigger.source = trigger.player;
								if (trigger.player.countCards('h') == 0) {
									event.finish();
									return;
								}
								trigger.player
									.chooseCard(
										function (card) {
											return true;
										},
										'黑暗:交给' + get.translation(player) + '一张牌或使伤害+1',
										false
									)
									.set('ai', function (card) {
										if (card.name == 'tao') return -10;
										if (card.name == 'jiu' && _status.event.player.hp <= 2) return -10;
										return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
									});
								('step 1');
								if (result.bool) {
									player.gain(result.cards, trigger.player);
									trigger.player.$give(1, player);
								} else {
									trigger.num++;
								}
							},
						},
						xiaoquan1: {
							group: ['xiaoquan1_seltarget', 'xiaoquan1_eff', 'xiaoquan1_can'],
							subSkill: {
								seltarget: {
									enable: 'phaseUse',
									usable: 1,
									prompt: '选择一名角色,为其拍照,直到下次你的回合开始,由该角色发起的效果需要其他角色打出闪时,视为强制出闪.',
									filterTarget(card, player, target) {
										return player != target;
									},
									content() {
										'step 0';
										game.playSe('xiaoquanSkill1');
										target.storage.xiaoquan2 = true;
										target.markSkill('xiaoquan2');
									},
									ai: {
										order: 9,
										expose: 0.5,
										result: {
											player(player, target) {
												return -get.attitude(player, target);
											},
										},
									},
								},
								eff: {
									trigger: {
										global: 'chooseToRespondBegin',
									},
									forced: true,
									_priority: 10,
									filter(event, player) {
										if (event.responded) return false;
										if (
											!event.filterCard ||
											!event.filterCard({
												name: 'shan',
											})
										)
											return false;
										var evt = event.parent;
										return !!evt.player.storage.xiaoquan2;
									},
									content() {
										trigger.untrigger();
										trigger.responded = true;
										trigger.result = {
											bool: true,
											card: {
												name: 'shan',
											},
										};
									},
								},
								can: {
									popup: false,
									trigger: {
										player: 'phaseBegin',
									},
									forced: true,
									content() {
										for (var i = 0; i < game.players.length; i++) {
											game.players[i].storage.xiaoquan2 = false;
											game.players[i].unmarkSkill('xiaoquan2');
										}
									},
								},
							},
						},
						xiaoquan2: {
							mark: true,
							intro: {
								content(storage) {
									return '你的眼睛已经瞎了,你的效果会被100%出闪';
								},
							},
						},
						xiaoquan3: {
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h') < player.hp;
							},
							content() {
								player.draw(player.hp - player.countCards('h'));
							},
						},
						xiyuansi1: {
							trigger: {
								player: 'chooseToRespondBegin',
							},
							forced: true,
							filter(event, player) {
								if (event.responded) return false;
								if (
									!event.filterCard ||
									!event.filterCard({
										name: 'shan',
									})
								)
									return false;
								return true;
							},
							content() {
								'step 0';
								player.judge('xiyuansi1', function (card) {
									return get.color(card) == 'black' ? 1.5 : -0.5;
								});
								('step 1');
								if (result.judge > 0) {
									trigger.untrigger();
									trigger.responded = true;
									trigger.result = {
										bool: true,
										card: {
											name: 'shan',
										},
									};
									var evp = trigger.parent.player;
									var cd = game.createCard('lebu', 'heart', 6, null);
									if (lib.filter.judge(cd, player, evp)) {
										player.useCard(cd, evp, false);
									}
								}
							},
						},
						xiyuansi2: {
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player) {
								if (!event.source) return true;
								return get.distance(player, event.source) > 1;
							},
							forced: true,
							force: true,
							content() {
								trigger.num = 0;
								player.popup('甩袖');
								game.playSe('xiyuansiSkill1');
								trigger.untrigger();
								trigger.finish();
								event.finish();
							},
						},
						zhongyin1: {
							intro: {
								content(storage) {
									if (storage) {
										return '最后一次攻击你的角色是' + lib.translate[storage.name] + ',你只会接受来自他的下次伤害';
									} else {
										return '你还没有被人攻击过';
									}
								},
							},
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							init(player) {
								player.storage.zhongyin1 = null;
							},
							filter(event, player) {
								return !!event.source;
							},
							content() {
								var attacter = trigger.source;
								var lastAttacter = player.storage.zhongyin1;
								player.storage.zhongyin1 = trigger.source;
								player.markSkill('zhongyin1');
								if (lastAttacter && lastAttacter != attacter) {
									trigger.num = 0;
									player.draw();
									trigger.untrigger();
									trigger.finish();
									event.finish();
								}
							},
						},
						zhongyin2: {
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.card && (event.card.name == 'juedou' || event.card.name == 'sha');
							},
							forced: true,
							content() {
								player.recover();
							},
						},
						zuoyou1: {
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return true;
							},
							forced: true,
							content() {
								if (trigger.player.storage.zuoyou2) {
									trigger.num += trigger.player.storage.zuoyou2;
								} else {
									trigger.player.storage.zuoyou2 = 0;
								}
								trigger.num += player.storage.zuoyou4;
								trigger.player.storage.zuoyou2++;
								game.addVideo('storage', trigger.player, ['zuoyou2', trigger.player.storage.zuoyou2]);
								trigger.player.markSkill('zuoyou2');
							},
						},
						zuoyou2: {
							mark: true,
							intro: {
								content(storage) {
									return '你的身体被不断瓦解,受到来自机械师的伤害增加' + storage + '点.';
								},
							},
						},
						zuoyou3: {
							trigger: {
								player: 'damageBegin',
							},
							mark: true,
							popup: false,
							init(player) {
								player.storage.zuoyou3 = 2;
								game.addVideo('storage', player, ['zuoyou3', player.storage.zuoyou3]);
								player.markSkill('zuoyou3');
							},
							intro: {
								content(storage) {
									if (storage) return '你的护盾还可以保护你' + storage + '次.';
									else return '你的护盾已经消耗殆尽.';
								},
							},
							filter(event, player) {
								return player.storage.zuoyou3 > 0;
							},
							check(event, player) {
								if (event.num >= player.hp) return true;
								var ret = 0;
								if (player.isLinked()) ret++;
								if (player.isTurnedOver()) ret++;
								ret += event.num;
								return ret > 1;
							},
							content() {
								trigger.num = 0;
								game.playSe('renwang_skill', 'skill');
								player.storage.zuoyou3--;
								game.addVideo('storage', player, ['zuoyou3', player.storage.zuoyou3]);
								player.markSkill('zuoyou3');
								if (player.isLinked()) player.link();
								if (player.isTurnedOver()) player.turnOver();
								player.discard(player.getCards('j'));
								trigger.untrigger();
								trigger.finish();
								event.finish();
							},
						},
						zuoyou4: {
							trigger: {
								source: 'dieAfter',
							},
							force: true,
							forced: true,
							mark: true,
							init(player) {
								player.storage.zuoyou4 = 0;
								game.addVideo('storage', player, ['zuoyou4', player.storage.zuoyou4]);
								player.markSkill('zuoyou4');
							},
							intro: {
								content(storage) {
									if (storage) return '你的装甲现在更加强大了,造成的伤害增加' + storage + '点.';
									else return '你的装甲还需要材料来强化.';
								},
							},
							content() {
								game.playSe('zuoyouSkill1');
								player.storage.zuoyou4++;
								player.storage.zuoyou3++;
								game.addVideo('storage', player, ['zuoyou4', player.storage.zuoyou4]);
								player.markSkill('zuoyou4');
							},
						},
						zhanren1: {
							group: ['zhanren1_free', 'zhanren1_rebeat'],
							subSkill: {
								free: {
									trigger: {
										player: 'chooseToRespondBegin',
									},
									forced: true,
									_priority: 10,
									filter(event, player) {
										if (event.responded) return false;
										return (
											event.filterCard({
												name: 'shan',
											}) ||
											event.filterCard({
												name: 'sha',
											})
										);
									},
									content() {
										trigger.untrigger();
										trigger.responded = true;
										if (
											trigger.filterCard({
												name: 'shan',
											})
										)
											trigger.result = {
												bool: true,
												card: {
													name: 'shan',
												},
											};
										else if (
											trigger.filterCard({
												name: 'sha',
											})
										)
											trigger.result = {
												bool: true,
												card: {
													name: 'sha',
												},
											};
										player.draw();
									},
								},
								rebeat: {
									popup: false,
									trigger: {
										global: 'damageBegin',
									},
									forced: true,
									content() {
										if (trigger.player == player) {
											player.draw(trigger.num);
										} else if (trigger.source == player) {
											trigger.num += player.maxHp - player.hp;
											player.draw(trigger.num);
										}
									},
								},
							},
						},
						zhanren2: {
							group: ['zhanren2_wuxie', 'zhanren2_chongzhu'],
							subSkill: {
								chongzhu: {
									enable: 'phaseUse',
									filter(event, player) {
										return player.countCards('h', 'shan') > 0;
									},
									filterCard: {
										name: 'shan',
									},
									prepare(cards, player) {
										player.$throw(cards, 1000);
									},
									discard: false,
									delay: 0.5,
									prompt: '选择一张闪来重铸',
									content() {
										'step 0';
										player.draw();
										('step 1');
										for (var i = 0; i < cards.length; i++) {
											ui.discardPile.appendChild(cards[i]);
										}
									},
									ai: {
										basic: {
											order: 1,
										},
										result: {
											player: 1,
										},
									},
								},
								wuxie: {
									enable: 'chooseToUse',
									filterCard(card) {
										return card.name == 'sha';
									},
									viewAsFilter(player) {
										return (
											player.countCards('h', function (card) {
												return card.name == 'sha';
											}) > 0
										);
									},
									viewAs: {
										name: 'wuxie',
										suit: 'heart',
										number: 5,
										cards: [
											{
												node: {
													image: {},
													info: {},
													name: {},
													name2: {},
													background: {},
													intro: {},
													range: {},
												},
												storage: {
													uncheck: [],
												},
												suit: 'heart',
												number: 5,
												name: 'qilin',
												_transform: 'translateX(336px)',
												clone: {
													name: 'qilin',
													suit: 'heart',
													number: 5,
													node: {
														name: {},
														info: {},
														intro: {},
														background: {},
														image: {},
													},
													_transitionEnded: true,
													timeout: 2687,
												},
												timeout: 2670,
												original: 'h',
											},
										],
									},
									prompt: '将一张杀当无懈可击使用',
									check(card) {
										return 8 - get.value(card);
									},
									content() {
										game.playAudio('card', 'wuxie', player.sex);
									},
									threaten: 1.2,
									ai: {
										basic: {
											useful: [6, 4],
											value: [6, 4],
										},
										result: {
											player: 1,
										},
										expose: 0.2,
									},
								},
							},
							mod: {
								maxHandcard(player, num) {
									return num + 3;
								},
							},
						},
						liangzi1: {
							group: ['liangzi1_phaseuse', 'liangzi1_respon', 'liangzi1_judge'],
							subSkill: {
								phaseuse: {
									enable: 'chooseToUse',
									filter(event, player) {
										return event.type != 'wuxie' && player.countCards('h') < 5;
									},
									onChooseToUse(event) {
										if (!game.online) {
											var maxnum = 5 - event.player.countCards('h');
											var cards = [];
											if (ui.cardPile.childNodes.length < maxnum) {
												var discardcards = get.cards(maxnum);
												for (var i = 0; i < discardcards.length; i++) {
													ui.discardPile.appendChild(discardcards[i]);
												}
											}
											for (var i = 0; i < maxnum; i++) {
												cards.push(ui.cardPile.childNodes[i]);
											}
											event.set('liangzicards', cards);
										}
									},
									chooseButton: {
										dialog(event, player) {
											return ui.create.dialog('遗策', event.liangzicards);
										},
										filter(button, player) {
											var evt = _status.event.parent;
											if (evt && evt.filterCard) {
												return evt.filterCard(button.link, player, evt);
											}
											return true;
										},
										check(button) {
											if (button.link.name == 'du') return -2;
											var player = _status.event.player;
											if (button.link.name == 'xingjiegoutong' && player.countCards('h') > 1) return -2;
											if (get.select(get.info(button.link).selectTarget)[1] == -1) {
												if (get.type(button.link) == 'delay') return -1;
												if (get.type(button.link) == 'equip') {
													var current = player.getCards('e', { subtype: get.subtype(button.link) })[0];
													if (current && get.equipValue(current) >= get.equipValue(button.link)) return -1;
													return 1;
												}
												if (get.tag(button.link, 'multitarget')) return -1;
												if (button.link.name == 'huoshaolianying') return -1;
											}
											if (button.link.name == 'jiu') {
												if (get.effect(player, { name: 'jiu' }, player) > 0) {
													return 1;
												}
												return -1;
											}
											return 1;
										},
										backup(links, player) {
											return {
												filterCard() {
													return false;
												},
												selectCard: -1,
												viewAs: links[0],
											};
										},
										prompt(links, player) {
											return '选择' + get.translation(links) + '的目标';
										},
									},
									ai: {
										order: 4,
										result: {
											player(player) {
												if (_status.event.dying) return get.attitude(player, _status.event.dying);
												return 1;
											},
										},
										useful: -1,
										value: -1,
									},
								},
								respon: {
									trigger: { player: 'chooseToRespondBegin' },
									forced: true,
									filter(event, player) {
										if (player.countCards('h') >= 5) return false;
										if (event.responded) return false;
										return true;
									},
									content() {
										'step 0';
										event.maxnum = 5 - player.countCards('h');
										var cards = [];
										if (ui.cardPile.childNodes.length < event.maxnum) {
											var discardcards = get.cards(event.maxnum);
											for (var i = 0; i < discardcards.length; i++) {
												ui.discardPile.appendChild(discardcards[i]);
											}
										}
										for (var i = 0; i < event.maxnum; i++) {
											cards.push(ui.cardPile.childNodes[i]);
										}
										player.chooseCardButton('遗策:选择一张卡牌打出', cards).set('filterButton', function (button) {
											return _status.event.getTrigger().filterCard(button.link);
										});
										('step 1');
										if (result.bool) {
											game.log(player, '遗策发动成功');
											trigger.untrigger();
											trigger.responded = true;
											result.links[0].remove();
											trigger.result = { bool: true, card: result.links[0] };
										}
									},
									ai: {
										effect: {
											target(card, player, target, effect) {
												if (get.tag(card, 'respondShan')) return 0.7;
												if (get.tag(card, 'respondSha')) return 0.7;
											},
										},
									},
								},
								judge: {
									trigger: { global: 'judgeBefore' },
									forced: true,
									_priority: 1,
									filter(event, player) {
										return player.countCards('h') < 5;
									},
									content() {
										'step 0';
										event.maxnum = 5 - player.countCards('h');
										if (ui.cardPile.childNodes.length < event.maxnum) {
											var discardcards = get.cards(event.maxnum);
											for (var i = 0; i < discardcards.length; i++) {
												ui.discardPile.appendChild(discardcards[i]);
											}
										}
										event.cards = [];
										for (var i = 0; i < event.maxnum; i++) {
											event.cards.push(ui.cardPile.childNodes[i]);
										}
										var next = player.chooseCardButton(true, event.cards, '遗策:选择一张牌作为' + trigger.judgestr + '的判定结果');
										next.ai = function (button) {
											if (get.attitude(player, trigger.player) > 0) {
												return 1 + trigger.judge(button.link);
											}
											if (get.attitude(player, trigger.player) < 0) {
												return 1 - trigger.judge(button.link);
											}
											return 0;
										};
										('step 1');
										if (!result.bool) {
											event.finish();
											return;
										}
										var card = result.links[0];
										event.cards.remove(card);
										var judgestr = get.translation(trigger.player) + '的' + trigger.judgestr + '判定';
										event.videoId = lib.status.videoId++;
										event.dialog = ui.create.dialog(judgestr);
										event.dialog.classList.add('center');
										event.dialog.videoId = event.videoId;
										game.addVideo('judge1', player, [get.cardInfo(card), judgestr, event.videoId]);
										for (var i = 0; i < event.cards.length; i++) ui.discardPile.appendChild(event.cards[i]);
										// var node=card.copy('thrown','center',ui.arena).addTempClass('start');
										var node;
										if (game.chess) {
											node = card.copy('thrown', 'center', ui.arena).addTempClass('start');
										} else {
											node = player.$throwordered(card.copy(), true);
										}
										node.classList.add('thrownhighlight');
										ui.arena.classList.add('thrownhighlight');
										if (card) {
											trigger.untrigger();
											trigger.finish();
											trigger.result = {
												card: card,
												judge: trigger.judge(card),
												node: node,
												number: card.number,
												suit: card.suit,
												color: get.color(card),
											};
											if (trigger.result.judge > 0) {
												trigger.result.bool = true;
												trigger.player.popup('洗具');
											}
											if (trigger.result.judge < 0) {
												trigger.result.bool = false;
												trigger.player.popup('杯具');
											}
											game.log(trigger.player, '的判定结果为', card);
											trigger.direct = true;
											trigger.position.appendChild(card);
										} else {
											event.finish();
										}
										('step 2');
										ui.arena.classList.remove('thrownhighlight');
										event.dialog.close();
										game.addVideo('judge2', null, event.videoId);
										ui.clear();
										var card = trigger.result.card;
										trigger.position.appendChild(card);
										trigger.result.node.delete();
									},
								},
							},
						},
						liangzi2: {
							trigger: { player: 'loseHpBegin' },
							forced: true,
							popup: false,
							silent: true,
							content() {
								trigger.untrigger();
								trigger.finish();
								event.finish();
							},
							mod: {
								targetEnabled(card, player, target) {
									if (get.type(card) == 'trick' && get.type(card) != 'delay' && target != player) return false;
								},
								wuxieRespondable(card, player, target, current) {
									if (player != current) {
										return false;
									}
								},
							},
							ai: {
								playernowuxie: true,
							},
						},
						liangzi3: {
							trigger: { global: 'changeHp' },
							forced: true,
							filter(event, player) {
								return player != event.player;
							},
							content() {
								'step 0';
								event.selA = '让' + get.translation(trigger.player) + '交给你一张牌';
								event.selB = '你交给' + get.translation(trigger.player) + '一张牌';
								event.selC = '取消';
								player.chooseControl(event.selA, event.selB, event.selC, function (event, player) {
									var trigger = event.getTrigger();
									var target = trigger.player;
									if (get.attitude(player, target) > 0) {
										if (Math.random() < 5) {
											var dn = player.countCards('h', 'du');
											var hn = player.countCards('h');
											if (dn >= hn) {
												return event.selC;
											} else {
												return event.selB;
											}
										} else {
											return event.selC;
										}
									} else {
										var dn = player.countCards('h', 'du');
										if (dn > 0) {
											return event.selB;
										} else {
											return event.selA;
										}
									}
								});
								('step 1');
								if (result.control == event.selA && trigger.player.countCards('he') > 0) {
									trigger.giveme = true;
									trigger.player.chooseCard('he', '先知:交给' + get.translation(player) + '一张牌', true).set('ai', function (card) {
										if (card.name == 'tao') return -10;
										if (card.name == 'jiu' && _status.event.player.hp <= 1) return -10;
										return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
									});
								} else if (result.control == event.selB && player.countCards('he') > 0) {
									trigger.giveme = false;
									player.chooseCard('he', '先知:交给' + get.translation(trigger.player) + '一张牌', true).set('ai', function (card) {
										if (card.name == 'tao') return -10;
										return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
									});
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									if (trigger.giveme) {
										player.gain(result.cards, trigger.player);
										trigger.player.$give(1, player);
									} else {
										trigger.player.gain(result.cards, player);
										player.$give(1, trigger.player);
									}
								}
							},
						},
						ego1: {
							group: ['ego1_eff', 'ego1_me'],
							subSkill: {
								eff: {
									trigger: {
										global: ['phaseBefore'],
									},
									forced: true,
									popup: false,
									filter(event, player) {
										if (event.player == player) return false;
										return !event.player.hasSkill('ego5');
									},
									content() {
										trigger.player.addSkill('ego5');
									},
								},
								me: {
									trigger: {
										player: ['damageBegin', 'loseHpBegin'],
									},
									filter(event, player) {
										return event.num > 0;
									},
									popup: false,
									forced: true,
									_priority: -11,
									content() {
										game.playSe('ego4');
										player.popup('混线');
										if (trigger.card && (trigger.card.name == 'juedou' || trigger.card.name == 'sha')) {
											if (trigger.num > 1) trigger.num = 1;
										} else {
											trigger.num = 0;
											trigger.untrigger();
											trigger.finish();
											event.finish();
										}
									},
								},
							},
						},
						ego2: {
							trigger: {
								global: 'damageAfter',
							},
							forced: true,
							_priority: -10,
							popup: false,
							filter(event, player) {
								if (event.player.hasSkill('ego6')) return false;
								if (event.num <= 0) return false;
								return event.player.isAlive();
							},
							content() {
								'step 0';
								var next = player.chooseBool('是否对【' + get.translation(trigger.player) + '】发动隔离？');
								next.set('choice', get.attitude(player, trigger.player) > 0);
								('step 1');
								if (result.bool) {
									game.playSe('ego3');
									trigger.player.popup('隔离');
									player.line(trigger.player, 'green');
									trigger.player.draw(1);
									if (trigger.player.isLinked()) trigger.player.link();
									if (trigger.player.isTurnedOver()) trigger.player.turnOver();
									trigger.player.discard(trigger.player.getCards('j'));
									trigger.player.addTempSkill('ego6', { player: 'phaseBefore' });
								} else {
									event.finish();
								}
							},
							ai: {
								expose: 0.5,
							},
						},
						ego3: {
							enable: 'phaseUse',
							usable: 1,
							prompt: '弃置一张手牌,令一名角色体力上限永久+1,或将手牌数量补充至体力上限',
							selectCard: 1,
							filterCard(card) {
								return true;
							},
							position: 'h',
							discard: true,
							filterTarget(card, player, target) {
								return true;
							},
							content() {
								'step 0';
								event.selA = '令' + get.translation(target) + '体力上限+1';
								event.selB = '令' + get.translation(target) + '将手牌补充至体力上限';
								player.chooseControl(event.selA, event.selB, function (event, player) {
									var trigger = event.getTrigger();
									var target = event.target;
									if (target.maxHp - target.countCards('h') > 1) {
										return event.selB;
									} else {
										return event.selA;
									}
								});
								('step 1');
								game.playSe('ego3');
								if (result.control == event.selA) {
									target.gainMaxHp();
								} else if (result.control == event.selB) {
									var count = target.maxHp - target.countCards('h');
									if (count > 0) target.draw(count);
								} else {
									event.finish();
								}
							},
							ai: {
								order: 9,
								expose: 0.5,
								result: {
									player(player, target) {
										return get.attitude(player, target);
									},
								},
							},
						},
						ego4: {
							enable: 'phaseUse',
							usable: 1,
							prompt: '选择一名角色,令其体力上限-1并弃置1张牌,当选择自己时,效果变为体力值+1并摸一张牌',
							filterTarget(card, player, target) {
								if (player == target) {
									return player.hp < player.maxHp;
								}
								return true;
							},
							check(event, player) {
								return true;
							},
							content() {
								game.playSe('ego4');
								if (target == player) {
									player.recover();
									player.draw();
								} else {
									target.loseMaxHp();
									target.chooseToDiscard('he', 1, true);
								}
							},
							ai: {
								order: 7,
								expose: 0.5,
								result: {
									player(player, target) {
										if (player.hp < 3) return -10;
										return -get.attitude(player, target);
									},
									target(player, target) {
										if (player == target && player.hp / player.maxHp < 0.7) {
											return 2;
										} else {
											if (target.hp == target.maxHp) return 1;
										}
										return 0;
									},
								},
							},
						},
						ego5: {
							mod: {
								maxHandcard(player, num) {
									return num - player.countCards('h', 'shan');
								},
							},
						},
						ego6: {
							mark: true,
							trigger: {
								player: ['damageBegin', 'loseHpBegin'],
							},
							filter(event, player) {
								return event.num > 0;
							},
							forced: true,
							popup: false,
							_priority: -11,
							content() {
								player.popup('隔离');
								if (trigger.card && (trigger.card.name == 'juedou' || trigger.card.name == 'sha')) {
									if (trigger.num > 1) trigger.num = 1;
								} else {
									trigger.num = 0;
									trigger.untrigger();
									trigger.finish();
									event.finish();
								}
							},
							mod: {
								globalTo(from, to, distance) {
									return distance + 10;
								},
							},
							intro: {
								content: '该角色已被隔离,防御距离+10,不会受到【杀】与【决斗】以外的伤害并免疫体力流失,所受伤害不会超过1',
							},
						},
					},
					translate: {
						dan_rixianga: '日向创',
						dan_rixiangb: '日向创',
						dan_monokuma: '黑白熊',
						dan_biangu: '边谷山佩子',
						dan_zhaorinai: '朝日奈',
						dan_wuqie: '雾切响子',
						dan_zuimu: '罪木蜜柑',
						dan_sonia: '索妮娅',
						dan_dunzi: '江岛盾子',
						dan_qihai: '七海千秋',
						dan_bozhi: '狛枝凪斗',
						dan_kamukura: '神座出流',
						dan_jiutoulong: '九头龙',
						dan_lingtian: '澪田唯吹',
						dan_tumei: '兔美',
						dan_erdaa: '二大猫丸',
						dan_erdab: '二大猫丸',
						dan_huacun: '花村辉辉',
						dan_nuller: '？？？',
						dan_tianzhong: '田中眼蛇梦',
						dan_xiaoquan: '小泉真昼',
						dan_xiyuansi: '西园寺日寄子',
						dan_zhongyin: '终里赤音',
						dan_zuoyou: '左右田和一',
						dan_zhanren: '战刃骸',
						dan_liangzi: '音无凉子',
						dan_ego: '不二咲千寻',
						shenzuo2: '完美',
						shenzuo2_info: '你每回合所受伤害不能超过1,体力流失、受伤、武将翻面、连锁、技能剥夺、混乱、即死、增减益效果、强制变身对你无效同时使你摸两张牌并对一名随机敌对武将造成体力值一半的伤害,你的抽牌和体力回复以及受伤都不触发任何效果,濒死时若场上其他角色装备区和手牌数量不为零或者存在体力值大于1的角色时,你拒绝死亡并回复全部体力.',
						shenzuo1: '巅峰',
						shenzuo1_info: '你受众多才能眷顾,你对角色造成伤害时,伤害值不会小于目标当前体力值的一半,若目标体力值无限,可以使伤害为0并使该角色体力值变为1.你不能成为杀的目标,你出牌无视距离,手牌没有上限,出牌可以额外指定1个目标.抽牌时抽双倍数量的牌.',
						sonia2: '国恨',
						sonia2_info: '限定技,当你死亡时,场上所有其他死亡角色复活并回复1点体力,阵营转变成与你同样的阵营.为主公时你可免疫这次死亡.',
						sonia1: '王权',
						sonia1_info: '在你需要打出一张闪或杀时你可以向所有其他玩家征用闪和杀,每有一名玩家交给你牌,则对使你出牌的来源造成1点伤害.',
						bozhi1: '幸运',
						bozhi1_info: '锁定技,受到伤害时有几率减少1点伤害,抽牌时有几率多抽1张牌,对角色造成伤害时有几率使伤害+1,回复体力时有概率使回复量+1,被锦囊牌作为目标时有几率使其无效化.以上效果均可多重触发,此外你因为牌的效果进行判定时,判定结果往往会对你有利.',
						bozhi2: '戏命',
						bozhi2_info: '你可以将任何手牌当【闪电】打出.',
						dunzi1: '绝望',
						dunzi1_info: '锁定技,场上角色失去卡就会受到1点伤害,你则是得到等量的回复.同时,若此时场上有角色体力上限超过你,你的体力上限会等同于该角色,同时回复你增长的上限相同的体力.此外,你的出牌无视距离.',
						rixiang1: '未来',
						rixiang1_info: '锁定技,当你受到伤害时,若手中无手牌,则减轻1点伤害,若有手牌,则场上所有体力值大于1的角色都减少1点体力上限并受到1点伤害.你的手牌没有上限.',
						rixiang2: '言弹',
						rixiang2_info: '出牌阶段使用,当手牌数超过体力时,丢弃所有手牌,选择一名你可以出杀的角色对其出杀若干次,次数为你丢弃牌数量除以体力值.',
						qihai2: '游戏',
						qihai2_info: '你的杀可以作为桃使用,你的装备牌可以作为无懈可击使用.此外,你使用酒将强制视为对某个角色使用无中生有,可以以自己为目标.',
						qihai3: '闪光',
						qihai3_info: '濒死时,你做一次判定,若为杀,你选择一名角色使其回复全部的体力值并抽5张牌,同时把此技能转移给该角色;若不是杀,你免疫这次死亡并获得判定牌.',
						qihai1: '天使',
						qihai1_info: '你默认不能出杀和装备牌,当有角色产生回复效果时,你可以选择让所有角色共享回复效果.你的杀和装备牌在弃牌阶段不计手牌数量.',
						rixiang3: '星火',
						rixiang3_info: '觉醒技,濒死时你强制发动一次言弹效果,同时意志觉醒回复全部体力并摸4张牌.',
						zuimu1: '护理',
						zuimu1_info: '回合结束时你可以指定一名角色,清除其注射毒印记,到下次你的回合结束时若该角色没有受伤,其回复1点体力,并且在此期间其享受注射的正面效果.',
						zuimu2: '注射',
						zuimu2_info: '你对其他角色造成伤害,或者其他角色对你造成伤害,都会给该角色附加一层毒印记,印记到3层时该角色的标记引爆,对其造成2点伤害,对其周围两名角色造成1点伤害,若影响到你自己,则伤害变为回复体力.',
						zuimu3: '注射',
						zuimu3_info: '你已被注射毒素.',
						biangu1: '拔刀',
						biangu1_info: '当任何角色被指定为杀的目标时,你可以对出杀者无视距离地打出一张杀,并无效化对方的杀.此外,你的杀不计入手牌数量.',
						biangu2: '洞察',
						biangu2_info: '你的回合开始时,你会随机的发现场上两名角色的弱点,攻击这些目标时伤害翻倍,这些角色出杀时你可以选择无效化其出杀并获得这张杀.',
						biangu3: '破绽',
						biangu3_info: '你的破绽已经被人发现.',
						rixiang4: '论破',
						rixiang4_info: '除你以外的角色打出一张牌时,你可以弃置2张牌,使其无效化.<span class="bluetext" style="color: #FF6500">你可以在此处关闭自动发动使技能不询问</span>',
						monokuma1: '替罪',
						monokuma1_info: '每次抽牌阶段你获得一次机会,任意角色受伤时,你可以选择其以外的另一名角色,让后者为前者承担伤害,同时前者必须选择与受到伤害等量的牌移交给后者.若你选择自己为别人顶罪,则触发【漏洞】.',
						monokuma2: '假死',
						monokuma2_info: '抽牌阶段结束后,你可以选择进入假死状态,跳过出牌阶段弃牌阶段以及下回合的抽牌阶段,直到下回合出牌阶段为止,你不会受到伤害,不会被弃牌并且不会接受牌的效果.',
						monokuma3: '黑幕',
						monokuma3_info: '',
						monokuma4: '死亡',
						monokuma4_info: '',
						monokuma5: '漏洞',
						monokuma5_info: '限定技,你的体力值无限,若有角色死亡,你的体力变为6点.',
						zhaorinai1: '元气',
						zhaorinai1_info: '每次出牌阶段,你可以选择给任意名角色增加或撤销【援】印记,印记存在期间,你将为这些目标承担伤害,同时享受这些目标的回复效果.',
						zhaorinai2: '援护',
						zhaorinai2_info: '',
						zhaorinai3: '倔强',
						zhaorinai3_info: '锁定技,你出杀时可以额外指定X名角色为目标,进攻距离+X,X等同于你援护的角色数量.',
						wuqie1: '清晰',
						wuqie_getcard: '获得其中最多2张牌',
						wuqie_fire: '对其造成1点伤害并阻止回复体力',
						wuqie1_info: '每回合一次,你可以弃置一张手牌,选择一名角色查看其手牌,如果这些牌里有与你弃置的牌名字相同的牌,你可以选择获得其中两张牌,或不获得牌对其造成1点伤害,并对其施加【崩溃】标记,直到下次你的回合开始前,该角色不能回复体力值.',
						wuqie2: '击破',
						wuqie2_info: '锁定技,被指定为牌的目标时,如果你手牌里有相同名字的牌,你可以选择无效化这张牌.',
						wuqie3: '崩溃',
						wuqie3_info: '',
						jiutoulong1: '斩手',
						jiutoulong1_info: '场上角色在弃牌阶段若有弃牌,你可以令其受到1点伤害.',
						jiutoulong2: '极道',
						jiutoulong2_info: '出牌阶段限1次,你可以弃置所有手牌,并将自己翻面,指定一个目标,从你开始场上所有角色依次与其进行决斗,直到其体力值为1.',
						lingtian1: '魔音',
						lingtian1_info: '锁定技,除你以外的所有人无法回复生命值,变为摸回复的生命值等量的牌.',
						lingtian2: '轻语',
						lingtian2_info: '锁定技,除你以外所有角色打出一张牌时,需先进行一次判定,若判定牌数字超过10,使打出的牌失效.',
						shenzuo3: '压制',
						shenzuo3_info: '场上体力值超过你体力值的角色回复体力时,你可以将其变为生命流失,并且你摸两张牌.',
						tumei1: '救赎',
						tumei1_info: '使用2张桃或者杀,复活一名已死武将,回复其体力并摸四张牌,同时使你自己的武将牌翻面.',
						tumei2: '牺牲',
						tumei2_info: '出牌阶段,你可以摸一张牌,并令一名角色反面,自己同时翻面.',
						tumei3: '隐藏',
						tumei3_info: '锁定技,当你处于翻面或者被连接状态时,受到的伤害-1.',
						shenzuo4: '盖天',
						shenzuo4_info: '任意一名角色的判定生效前,你可以选择让这张牌变成任意数字和颜色,此结果无法被再次更改.此外,你出杀时弃置目标所有装备牌.',
						erda1: '怪力',
						erda1_info: '你的【杀】或【决斗】对角色造成伤害时,若目标没有防具,此伤害+1,若目标没有手牌,此伤害再+1(有装备没有手牌也+1).',
						erda2: '再战',
						erda2_info: '当你死亡时,变身为机械二大.',
						erda3: '超载',
						erda3_info: '你死亡时选择对一名角色造成足以致死的伤害,且不会触发技能效果.',
						huacun1: '绝味',
						huacun1_info: '锁定技,你的桃额外回复1点体力,并且同时拥有酒的效果.',
						huacun2: '烹饪',
						huacun2_info: '你的回合结束时会获得x枚【美食】标记,你可以弃置2枚【美食】标记和一张手牌视为使用一张桃.x为你已损失的体力值.',
						huacun3: '美食',
						huacun3_info: '',
						huacun4: '快刀',
						huacun4_info: '锁定技,当你于回合外失去手牌时,你获得一枚【美食】标记.',
						nuller1: '伪装',
						nuller1_info: '每回合一次,你可以指定一个目标,直至下次你发动这个技能为止,该目标不能对你出牌,你或目标受到伤害时变为生命流失,并进行一次判定,如果是红色则本次伤害由你承担,若为黑色则由目标承担.',
						nuller2: '欺诈',
						nuller2_info: '锁定技,你的进攻距离会跟正常进攻距离相反,在你的回合结束时,你可以交给一名角色任意张牌,并摸等量的牌.',
						nuller3: '伪装',
						nuller3_info: '',
						nuller4: '神秘',
						nuller4_info: '出牌阶段限1次,你可以与一名场上的其他角色交换位置.',
						tianzhong1: '御兽',
						tianzhong1_info: '锁定技,任何角色使用进攻/防御马时,会视为给你装备.',
						tianzhong2: '禁术',
						tianzhong2_info: '出牌阶段,你可以将手牌或者装备区的马当做决斗使用.',
						tianzhong3: '黑暗',
						tianzhong3_info: '你造成伤害时,可以使伤害来源算作目标自身,如果目标有手牌,你可以使其选择交给你一张牌或者使本次伤害+1.',
						xiaoquan1: '底片',
						xiaoquan1_info: '出牌阶段限一次,选择一名角色帮他拍照,直到下次你的回合开始,由该角色发起的效果需要其他角色打出闪时,视为强制出闪.',
						xiaoquan2: '瞎了',
						xiaoquan2_info: '',
						xiaoquan3: '坚强',
						xiaoquan3_info: '锁定技,你的手牌不会少于你的体力值.',
						xiyuansi1: '翩翩',
						xiyuansi1_info: '锁定技,当你需要打出一张【闪】时,进行一次判定,若为黑色,视为你打出一张闪,并对效果来源使用一张乐不思蜀.',
						xiyuansi2: '甩袖',
						xiyuansi2_info: '锁定技,你不会受到没有来源和与你距离1以外的角色造成的伤害.',
						zhongyin1: '矫健',
						zhongyin1_info: '锁定技,当你受到伤害时获得一枚标记,若本次获得的标记与上一次的标记不同,免疫这次伤害并摸一张牌.',
						zhongyin2: '嗜血',
						zhongyin2_info: '锁定技,你的【杀】和【决斗】造成的伤害会使你获得等量的回复.',
						zuoyou1: '瓦解',
						zuoyou1_info: '锁定技,你造成伤害时,对受伤角色附加一枚【解】标记,目标每有一枚【解】标记,受到来自你的伤害+1.',
						zuoyou2: '解体',
						zuoyou2_info: '',
						zuoyou3: '装甲',
						zuoyou3_info: '游戏开始时,你获得2枚【装甲】印记,你受到伤害时,你可以弃置一张【装甲】使伤害无效化,移除你的翻面和连锁状态,以及判定区所有牌.',
						zuoyou4: '回收',
						zuoyou4_info: '锁定技,每击杀一名角色,你的基础伤害+1,并获得1枚【装甲】印记.',
						zhanren1: '战神',
						zhanren1_info: '锁定技,当你需要打出杀或闪时,不需要打出牌也会视为打出并使你摸一张牌.此外你造成和受到伤害之前,都会摸与伤害值等量的牌.你造成伤害时会额外附加等于你损失体力值的数值.',
						zhanren2: '迎刃',
						zhanren2_info: '你的杀可以作为无懈可击使用,你可以重铸你的闪,此外你的手牌上限+3.',
						liangzi1: '遗策',
						liangzi1_info: '你可以使用或打出牌堆顶X张牌,判定发生时也可以用这些牌更改判定结果,此结果不可被再次更改.(X为5减去你的手牌数量)',
						liangzi2: '断言',
						liangzi2_info: '锁定技,你的非延时锦囊牌不能被无懈可击响应,你不能成为非延时类锦囊牌的目标,体力流失对你无效.',
						liangzi3: '先知',
						liangzi3_info: '当一名其他角色的体力值发生改变时,你可以选择让其交给你一张牌,或你交给其一张牌.',
						ego1: '混线',
						ego1_info: '锁定技,除你之外所有角色手牌上限减少x,x为其手牌中闪的数量.此外,你不能受到【杀】和【决斗】以外的伤害和生命流失,所受伤害不能超过1',
						ego2: '隔离',
						ego2_info: '一名角色受伤后可以发动,使其摸1张牌、清除所有判定区的牌,并在其回合开始前防御距离增加10且获得混线的正面效果',
						ego3: '溢出',
						ego3_info: '每回合可以发动一次,弃置一张手牌,令一名角色体力上限永久+1,或使一名角色将手牌数量补充至体力上限',
						ego4: '超栈',
						ego4_info: '每回合可以发动一次,选择一名角色,令其体力上限-1并弃置1张牌,当选择自己时,效果变为体力值+1并摸一张牌',
						ego5: '混线',
						ego5_info: '锁定技,手牌上限减少x,x为你手牌中闪的数量',
						ego6: '隔离',
						ego6_info: '直到下回合开始前,你的防御距离+10,不会受到【杀】与【决斗】以外的伤害并免疫体力流失,所受伤害不会超过1',
						dan: '弹',
						danColor: '#FF6500',
					},
				};
				for (const i in danganPack.character) {
					const info = danganPack.character[i];
					if (!info.hp) {
						info.hp = 3;
					}
					if (!info.maxHp) {
						info.maxHp = 3;
					}
					info.trashBin = [`ext:弹丸杀/image/${i}.jpg`];
					info.dieAudios = [`ext:弹丸杀/audio/${i}.mp3`];
				}
				lib.config.all.characters.add('弹丸杀');
				lib.config.characters.add('弹丸杀');
				lib.translate.弹丸杀_character_config = '弹丸杀';
				return danganPack;
			});
			lib.arenaReady.push(function () {
				lib.rank.s.push('dan_kamukura');
				lib.rank.s.push('dan_dunzi');
				lib.rank.ap.push('dan_monokuma');
				lib.rank.ap.push('dan_rixiangb');
				lib.rank.ap.push('dan_ego');
				lib.rank.ap.push('dan_zhanren');
				lib.rank.ap.push('dan_liangzi');
				lib.rank.a.push('dan_bozhi');
				lib.rank.a.push('dan_rixianga');
				lib.rank.a.push('dan_biangu');
				lib.rank.a.push('dan_zuoyou');
				lib.rank.a.push('dan_xiaoquan');
				lib.rank.am.push('dan_xiyuansi');
				lib.rank.am.push('dan_zhongyin');
				lib.rank.am.push('dan_erdaa');
				lib.rank.am.push('dan_erdab');
				lib.rank.am.push('dan_nuller');
				lib.rank.am.push('dan_huacun');
				lib.rank.am.push('dan_tianzhong');
				lib.rank.am.push('dan_lingtian');
				lib.rank.am.push('dan_zhaorinai');
				lib.rank.am.push('dan_wuqie');
				lib.rank.am.push('dan_zuimu');
				lib.rank.am.push('dan_sonia');
				lib.rank.am.push('dan_jiutoulong');
				lib.rank.bp.push('dan_qihai');
				lib.rank.bp.push('dan_tumei');
			});
		},
		help: {
			弹丸杀: '<ul><li>♥️️超级弹丸论破游戏登场人物乱入无名杀世界♥️️' + '<li>★支持在联机模式使用★',
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
			view_as_boss: {
				name: '所有弹丸武将视为Boss',
				init: false,
			},
			normalize: {
				name: '普通化弹丸武将',
				init: false,
			},
		},
		package: {
			intro: "潜水的火修复版<br><span style='color: gold'>由于本扩展原作者在开源协议的无名杀中进行混淆加密且屡教不改<br>潜在水里的火将此扩展解混淆后发布<br>『无名杀扩展大全群』:771901025<br></span>",
			author: '作者名已被混淆',
			version: '1.0',
		},
	};
});

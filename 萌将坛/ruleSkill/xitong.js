'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			_scqh_xitong: {
				ai: {
					save: true,
					viewHandcard: true,
					skillTagFilter(player, tag, arg) {
						if (tag == 'viewHandcard') {
							var config = lib.config['extension_' + lib.scqhExtension + '_xitong_trueye'];
							if (!config) return false;
						}
					},
					result: {
						player(player) {
							return false;
						},
						target(player, target) {
							return false;
						},
					},
				},
				nobracket: true,
				superCharlotte: true,
				charlotte: true,
				fixed: true,
				multitarget: true,
				multiline: true,
				limited: true,
				popup: false,
				log: false,
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(trigger, player, name) {
					let bool = game.getExtensionConfig(lib.scqhExtension, 'xitong');
					let config = lib.config['extension_' + lib.scqhExtension + '_xitong'];
					if (!config) return false;
					return player.isUnderControl(true);
				},
				prompt: '系统',
				content() {
					'step 0';
					var style = 'tdnodes';
					var list = [];
					event.number = ['摸牌', '伤害', '回复', '流血', '上限', '变化', '护甲'];
					event.nobuff = ['横置', '翻面', '濒死', '死亡', '换将', '控制'];
					list.push('TP值');
					list.push('技能');
					list.push('复活');
					list.push('印牌');
					list.push('弃牌');
					list.push('洗牌');
					list.push('回合');
					var next = player.chooseButton(['系统:执行一条选项', '体力牌', [event.number.slice(0), style], '武将牌', [event.nobuff.slice(0), style], '其他', [list.slice(0), style]]);
					next.set('selectButton', [1, 1]);
					next.set('filterButton', function (button) {
						return true;
					});
					('step 1');
					event.links = result.links || [];
					var next = game.createEvent(event.name);
					next.player = player;
					next.eventx = event;
					next.setContent(lib.skill[event.name].forEvent);
				},
				forEvent() {
					var event = event.eventx;
					var links = event.links || [];
					if (!links.length || typeof links[0] != 'string') return;
					var link = links[0];
					var name2 = false;
					for (let name in event) {
						let sub = event[name] || [];
						if (Array.isArray(sub) && sub.includes(link)) {
							let name3 = lib.skill[event.name][name] || false;
							if (name3) {
								name2 = name3;
								break;
							}
						}
					}
					if (!name2) {
						var name4 = lib.skill[event.name][link] || false;
						if (name4) name2 = name4;
					}
					if (!name2) return;
					var next = game.createEvent(event.name);
					next.player = player;
					next.type = link;
					next.setContent(name2);
				},
				number() {
					'step 0';
					var style = 'tdnodes';
					var type = event.type;
					var map = {};
					map.two = [];
					map.two.push('护甲');
					map.two.push('上限');
					map.two.push('变化');
					map.list = [];
					map.list2 = [];
					map.list3 = [];
					map.list4 = [];
					map.list2Info = [];
					if (type == '摸牌') {
						map.list2.push('底牌');
					}
					if (type == '伤害') {
						for (let nature of lib.linked.slice(0)) {
							let natureInfo = get.translation(nature);
							map[natureInfo] = nature;
							map.list2.push(natureInfo);
						}
						map.list3.push('虚');
						map.list4.push('无源');
					}
					if (map.two.includes(type)) {
						map.list2.addArray(['➕', '➖']);
					}
					for (let num = 1; num <= 13; num++) map.list.push(num);
					event.map = map;
					var next = player.chooseButton(['系统:' + event.type, [map.list.slice(0), style], [map.list2.slice(0), style], [map.list3.slice(0), style], [map.list4.slice(0), style]]);
					next.set('selectButton', [1, 10]);
					next.set('filterButton', function (button) {
						let uib = ui.selected.buttons || [];
						let cardx = button.link;
						for (let subuib of uib) {
							let card2 = subuib.link;
							for (let i in map) {
								if (!Array.isArray(map[i])) continue;
								if (!map[i].includes(card2)) continue;
								if (map[i].includes(cardx)) return false;
							}
						}
						return true;
					});
					('step 1');
					var map = event.map;
					var links = result.links || [];
					if (!links.length) {
						event.finish();
						return;
					}
					map.nosource = false;
					map.bottom = false;
					map.nature = false;
					map.unreal = false;
					map.zheng = true;
					map.number = 1;
					for (let link of links) {
						if (typeof link == 'number') map.number = link;
						if (link == '底牌') map.bottom = true;
						if (link == '虚') map.unreal = true;
						if (link == '无源') map.nosource = true;
						if (link == '➖') map.zheng = false;
						let nature = map[link] || false;
						if (nature && lib.linked.includes(nature)) {
							map.nature = nature;
						}
					}
					('step 2');
					var next = player.chooseTarget(event.type, [1, 100]);
					next.set('ai', function () {
						return 1;
					});
					('step 3');
					var targets = result.targets || [];
					if (!targets.length) {
						event.finish();
						return;
					}
					var type = event.type || false;
					var map = event.map;
					if (!map.zheng) map.number = 0 - map.number;
					for (let target of targets) {
						if (!target.isIn()) continue;
						if (type == '摸牌') {
							let next = target.draw(map.number);
							next.bottom = map.bottom;
						}
						if (type == '流血') target.loseHp(map.number);
						if (type == '回复') target.recover(map.number);
						if (type == '护甲') target.changeHujia(map.number);
						if (type == '变化') target.changeHp(map.number);
						if (type == '上限') {
							map.number = Math.abs(map.number);
							if (!map.zheng) target.loseMaxHp(map.number);
							else target.gainMaxHp(map.number);
						}
						if (type == '伤害') {
							var source = map.nosource ? 'nosource' : '';
							var next = target.damage(map.number, source);
							next.nature = map.nature;
							next.unreal = map.unreal;
						}
					}
				},
				TP值() {
					'step 0';
					game.prompt('输入数字', function (str) {
						var number = false;
						var isNum = false;
						if (str !== false) {
							number = str.replace(/[^\d]/g, '');
							if (number.length) {
								number = Number(number);
								isNum = true;
							}
						}
						if (!isNum) number = 1000;
						if (number && typeof number === 'number') {
							player.scqh_changeStatus('tp', number);
						}
					});
				},
				回合() {
					'step 0';
					var list = [];
					list.push('额外回合');
					list.push('准备阶段');
					list.push('判定阶段');
					list.push('摸牌阶段');
					list.push('出牌阶段');
					list.push('弃牌阶段');
					list.push('结束阶段');
					var next = player.chooseButton(['执行一个额外的回合或阶段', [list.slice(0), 'tdnodes']]);
					next.set('selectButton', [1, 1]);
					next.set('filterButton', function (button) {
						return true;
					});
					('step 1');
					var links = result.links || [];
					var link = links[0] || '';
					if (link == '额外回合') {
						player.phase('nodelay');
					}
					if (link == '准备阶段') player.phaseZhunbei();
					if (link == '判定阶段') player.phaseJudge();
					if (link == '摸牌阶段') player.phaseDraw();
					if (link == '出牌阶段') player.phaseUse();
					if (link == '弃牌阶段') player.phaseDiscard();
					if (link == '结束阶段') player.phaseJieshu();
				},
				弃牌() {
					'step 0';
					var gamers = game.filterPlayer((current) => {
						return current.countCards('hejsx');
					});
					if (gamers.length) {
						var str = '弃置一名角色的某个区域里的所有牌';
						var next = player.chooseTarget(str, function (card, player, target) {
							return target.countCards('hejsx');
						});
						next.set('ai', function () {
							return 1;
						});
					} else event.finish();
					('step 1');
					var targets = result.targets || [];
					if (!targets.length) event.finish();
					else event.targets = targets;
					('step 2');
					var target = event.targets[0];
					var list = [];
					for (const i of ['h', 'e', 'j', 's', 'x']) {
						if (target.countCards(i)) list.push(i);
					}
					list.push('取消');
					if (list.length > 1) player.chooseControl(list);
					else if (list.length) {
						event._result = {
							control: list[0],
						};
					} else event.finish();
					('step 3');
					var target = event.targets[0];
					var control = result.control || '取消';
					if (control == '取消') event.finish();
					else {
						target.discard(target.getCards(control));
						event.goto(0);
					}
				},
				nobuff() {
					'step 0';
					var str = '<h2>请选择' + event.type + '的目标</h2>';
					var next = player.chooseTarget([1, 100], str, function (card, player, target) {
						if (event.type == '控制') {
							if (target == player) return false;
							if (target._trueMe == game.me) return false;
						}
						return true;
					});
					next.set('ai', function () {
						return 1;
					});
					('step 1');
					var type = event.type;
					var targets = result.targets || [];
					for (let target of targets) {
						if (!target.isIn()) continue;
						if (type == '翻面') target.turnOver();
						else if (type == '横置') target.link();
						else if (type == '死亡') target.die();
						else {
							let name2 = lib.skill[event.name][type] || false;
							if (!name2) break;
							var next = game.createEvent(event.name);
							next.player = player;
							next.target = target;
							next.setContent(lib.skill[event.name][type]);
						}
					}
				},
				濒死() {
					'step 0';
					target.changeHp(-target.hp);
					('step 1');
					event._dyinged = true;
					target.dying(event);
				},
				控制() {
					player.line(target);
					game.addGlobalSkill('autoswap');
					if (!player._trueMe) player._trueMe = game.me;
					target._trueMe = game.me;
					if (target == game.me) {
						if (!_status.auto) ui.click.auto();
					}
				},
				换将() {
					'step 0';
					var list = [];
					for (let name in lib.character) {
						if (name.includes('scqh')) list.push(name);
					}
					if (!list.length) {
						event.finish();
						return;
					}
					var next = player.chooseButton(true);
					next.set('ai', function (button) {
						return true;
					});
					next.set('createDialog', ['化身一名新武将', [list.sort(), 'character']]);
					('step 1');
					var links = result.links || [];
					if (links.length) {
						var reinit = links[0];
						var group = lib.character[reinit][1];
						if (_status.characterlist) {
							_status.characterlist.add(target.name1);
							_status.characterlist.remove(reinit);
						}
						target.init(reinit);
						target.changeGroup(group);
					}
				},
				洗牌() {
					'step 0';
					let cards = player.getCards('h');
					if (cards.length) {
						let next = player.loseToDiscardpile(cards, ui.cardPile, false);
						next.log = false;
					}
					event.num = cards.length || 4;
					('step 1');
					player.directgain(get.cards(event.num));
					('step 2');
					let str = '是否使用手气卡？';
					player.chooseBool(str);
					('step 3');
					if (result.bool) event.goto(0);
				},
				复活() {
					return;
					for (var current of event.复活) {
						current.revive(10);
						current.update();
					}
				},
				印牌() {
					'step 0';
					var style = 'tdnodes';
					var map = {};
					map.list = [];
					map.list2 = ['虚', '实'];
					map.list3 = ['使用', '获得'];
					for (let name of lib.inpile) {
						let card = { name: name };
						let type = get.type2(card);
						let typeInfo = get.translation(type);
						let currents = game.filterPlayer((current) => player.canUse(card, current));
						if (!currents.length) continue;
						if (map.list.includes(typeInfo)) continue;
						map.list.push(typeInfo);
						map[typeInfo] = type;
					}
					event.map = map;
					var next = player.chooseButton(['系统:' + event.type, [map.list.slice(0), style], [map.list2.slice(0), style], [map.list3.slice(0), style]]);
					next.set('selectButton', [1, 3]);
					next.set('filterButton', function (button) {
						let uib = ui.selected.buttons || [];
						let cardx = button.link;
						for (let subuib of uib) {
							let card2 = subuib.link;
							for (let i in map) {
								if (!Array.isArray(map[i])) continue;
								if (!map[i].includes(card2)) continue;
								if (map[i].includes(cardx)) return false;
							}
						}
						return true;
					});
					('step 1');
					var map = event.map;
					var links = result.links || [];
					if (!links.length) {
						event.finish();
						return;
					}
					map.length = false;
					map.type = false;
					map.use = true;
					for (let link of links) {
						if (link == '获得') {
							map.use = false;
							map.length = true;
						}
						if (link == '实') map.length = true;
						let type = map[link] || false;
						if (type) map.type = type;
					}
					('step 2');
					var vcards = [];
					var map = event.map;
					for (let name of lib.inpile) {
						if (map.type && map.type != get.type2(name)) continue;
						let card = { name: name };
						let currents = game.filterPlayer((current) => player.canUse(card, current));
						if (currents.length) vcards.push(['', '', name]);
						if (name != 'sha') continue;
						for (let nature of lib.linked.slice(0)) {
							card.nature = nature;
							let currents = game.filterPlayer((current) => player.canUse(card, current));
							if (currents.length) vcards.push(['', '', name, nature]);
						}
					}
					if (vcards.length) {
						var str = '是否';
						if (map.use) {
							if (!map.length) str += '视为';
							str += '使用';
						} else str += '获得';
						str += '一张牌？';
						var list = [str, [vcards, 'vcard']];
						var next = player.chooseButton(list);
						next.set('ai', function (button) {
							return 0;
						});
					} else event.finish();
					('step 3');
					var map = event.map;
					var links = result.links || [];
					if (links.length) {
						var card = {
							name: links[0][2],
							nature: links[0][3],
						};
						if (map.length) card = game.createCard(card);
						if (map.use) {
							var next = player.chooseUseTarget(card);
							next.addCount = false;
							next.forced = true;
						} else {
							player.gain(card);
						}
					}
				},
				技能() {
					'step 0';
					var style = 'tdnodes';
					var list = [];
					if (ui.cardPile.childNodes.length) list.push('鹰视');
					if (player.countCards('he')) list.push('仁德');
					if (player.canMoveCard()) list.push('勇进');
					list.push('攻心');
					event.fengyin = ['雄乱', '铁骑', '断肠', '穿心'];
					list.addArray(event.fengyin);
					var next = player.chooseButton(['系统:执行一条选项', [list.slice(0), style]]);
					next.set('selectButton', [1, 1]);
					next.set('filterButton', function (button) {
						return true;
					});
					('step 1');
					event.links = result.links || [];
					var next = game.createEvent(event.name);
					next.player = player;
					next.eventx = event;
					next.setContent(lib.skill[event.name].forEvent);
				},
				fengyin() {
					'step 0';
					var next = player.chooseTarget(event.type, [1, 100]);
					next.set('ai', function () {
						return 1;
					});
					('step 1');
					var type = event.type;
					var targets = result.targets || [];
					for (let target of targets) {
						if (!target.isIn()) continue;
						if (type == '穿心') {
							for (let skill of target.getSkills()) {
								target.removeSkill(skill);
							}
						}
						if (type == '雄乱') target.addTempSkill('drlt_xiongluan_ban');
						if (type == '铁骑') target.addTempSkill('fengyin');
						if (type == '断肠') target.clearSkills();
					}
				},
				攻心() {
					'step 0';
					player.chooseTarget('观看一名角色的手牌', function (card, player, target) {
						return player != target && target.countCards('h');
					});
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						player.chooseCardButton(target, target.getCards('h'));
					}
				},
				勇进() {
					player.moveCard();
				},
				鹰视() {
					var num = 5;
					var pile = [];
					var pile2 = [];
					var cards = ui.cardPile.childNodes;
					for (var i = 0; i < num; i++) {
						var card = i;
						if (card) pile.push(card);
						var card2 = cards[cards.length - i - 1];
						if (card2 && !pile.includes(card2)) {
							pile2.push(card2);
						}
						if (!card && !card2) break;
					}
					var list = ['牌堆顶', pile, '牌堆底', pile2];
					player.chooseControl('确定').set('dialog', list);
				},
				仁德() {
					'step 0';
					player.chooseCardTarget({
						prompt: '仁德',
						filterCard: true,
						selectCard: [1, Infinity],
						position: 'he',
						filterTarget(card, player, target) {
							return player != target;
						},
						ai1(card) {
							return 6 - get.value(card);
						},
						ai2(target) {
							return 1;
						},
					});
					('step 1');
					if (result && result.bool && result.cards && result.targets) {
						if (result.cards.length && result.targets.length) {
							var cards = result.cards;
							var targets = result.targets;
							player.give(cards, targets[0]);
						}
					}
				},
				subSkill: {},
			},
		},
		translate: {
			_scqh_xitong: '系统',
		},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

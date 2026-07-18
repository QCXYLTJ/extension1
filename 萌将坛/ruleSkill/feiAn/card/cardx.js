'use strict';
game.import('card', function (lib, game, ui, get, ai, _status) {
	lib.config.all.cards.add('神椿千鹤');
	lib.config.cards.add('神椿千鹤');
	lib.translate.神椿千鹤_card_config = '神椿千鹤';
	var list = {
		name: '神椿千鹤',
		connect: true,
		card: {
			mc_三叉戟: {
				type: 'equip',
				subtype: 'equip1',
				forceDie: true,
				enable: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					return target == player;
				},
				skills: ['mc_三叉戟_skill'],
				distance: {
					attackFrom: -2,
				},
				content() {
					'step 0';
					if (cards.length && get.position(cards[0], true) == 'o') {
						target.equip(cards[0]);
					} else event.finish();
					('step 1');
					var list = ['忠诚', '激流'];
					var next = player.chooseControl(list);
					next.set('choiceList', ['【忠诚】:一名角色的结束阶段,若你处于隐匿状态,你可以视为使用一张刺【杀】,' + get.translation('mc_三叉戟_skill_忠诚_info'), '【激流】:一名角色的结束阶段,若你处于隐匿状态,你可以视为使用一张刺【杀】,' + get.translation('mc_三叉戟_skill_激流_info')]);
					next.set('ai', 0);
					('step 2');
					if (result.control) {
						target.storage[cards[0].name + '_skill'] = result.control;
					}
				},
				async onLose(event, trigger, player) {
					if (event.cards?.length) {
						const card = event.cards[0];
						player.markSkill(card.name + '_skill');
					}
				},
				onEquip() {
					player.markSkill(card.name + '_skill');
				},
				ai: {
					basic: {
						equipValue: 4,
					},
				},
				fullimage: true,
			},
			千鹤sew_玲珑八卦阵: {
				fullborder: 'gold',
				type: 'equip',
				subtype: 'equip2',
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
				skills: ['千鹤sew_玲珑八卦阵'],
			},
			千鹤pcr_亚修凯隆: {
				type: 'equip',
				subtype: '千鹤pcr_姬塔',
				fullskin: true,
			},
			千鹤pcr_圣域剑: {
				type: 'equip',
				subtype: '千鹤pcr_克莉丝提娜',
				fullskin: true,
			},
			千鹤acg_寒冰剑: {
				fullborder: 'gold',
				type: 'equip',
				subtype: 'equip1',
				distance: { attackFrom: -1 },
				skills: ['hanbing_skill'],
				ai: {
					basic: {
						equipValue: 2,
					},
				},
			},
			千鹤sew_克复中原: {
				audio: 'gz_kefuzhongyuan',
				fullimage: true,
				type: 'trick',
				enable: true,
				filterTarget: true,
				selectTarget: [1, Infinity],
				content() {
					'step 0';
					var p1 = '请选择【杀】的目标';
					var p2 = '或点击「取消」摸一张牌';
					if (target.identity == 'shu' || target.group == 'shu') {
						p1 += '(伤害+1)';
						p2 = '或点击「取消」摸两张牌';
					}
					var next = target.chooseUseTarget('sha', p1, p2, false);
					if (target.identity == 'shu' || target.group == 'shu') {
						next.set('oncard', function () {
							_status.event.baseDamage++;
						});
					}
					('step 1');
					if (!result.bool) {
						var num = target.identity == 'shu' || target.group == 'shu' ? 2 : 1;
						target.draw(num);
					}
				},
				ai: {
					order: 3,
					value: 9,
					useful: 6,
					tag: {
						gain: 1,
					},
					result: {
						player(player, target) {
							var att = get.attitude(player, target);
							if (att < 0) return 0;
							return 1;
						},
					},
				},
			},
			千鹤acg_帮助1: {
				fullimage: true,
			},
			junling1: {
				type: 'junling',
			},
			junling2: {
				type: 'junling',
			},
			junling3: {
				type: 'junling',
			},
			junling4: {
				type: 'junling',
			},
			junling5: {
				type: 'junling',
			},
			junling6: {
				type: 'junling',
			},
			千鹤sew_拖刀计: {
				type: 'trick',
				notarget: true,
				filterTarget(card, player, target) {
					return target != player;
				},
				selectTarget: 1,
				content() {
					'step 0';
					if (event.directHit) event._result = { bool: false };
					else {
						var next = target.chooseToRespond({ name: 'sha' });
						next.set('ai', function (card) {
							var evt = _status.event.parent;
							if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
							if (evt.player.hasSkillTag('notricksource')) return 0;
							if (evt.target.hasSkillTag('notrick')) return 0;
							return get.order(card);
						});
						next.autochoose = lib.filter.autoRespondSha;
					}
					('step 1');
					if (result.bool == false) {
						if (event.getParent(6) && (event.getParent(6).name == 'sha' || event.getParent(6).name == 'juedou')) {
							event.getParent(6).cancel();
						}
					} else if (player.canUse({ name: 'sha' }, target)) {
						player.useCard({ name: 'sha' }, target, false);
					}
				},
				ai: {
					value: [5, 1],
					useful: [5, 1],
					order: 1,
					wuxie(target, card, player, current, state) {
						return -state * get.attitude(player, current);
					},
					result: {
						player(player) {
							return 1;
						},
					},
				},
			},
		},
		skill: {
			_千鹤sew_拖刀计_skill: {
				forced: true,
				trigger: {
					target: 'useCardToBefore',
				},
				filter(event, player) {
					if (event.directHit || event.player == event.target) return false;
					if (event.card.name == 'sha' || event.card.name == 'juedou') {
						return player.hasUsableCard('千鹤sew_拖刀计');
					}
					return false;
				},
				content() {
					var next = player.chooseToUse(trigger.player, -1);
					next.set('prompt', '是否使用【拖刀计】响应' + get.translation(trigger.player) + '使用的' + get.translation(trigger.card) + '？');
					next.set('filterCard', function (card, player) {
						if (card.name != '千鹤sew_拖刀计') return false;
						return lib.filter.cardEnabled(card, player, 'forceEnable');
					});
					next.set('respondTo', [trigger.player, trigger.card]);
					next.ai1 = function () {
						return 1;
					};
				},
			},
			junling4_eff: {
				mod: {
					cardEnabled2(card) {
						if (get.position(card) == 'h') return false;
					},
				},
				mark: true,
				marktext: '令',
				intro: {
					name: '军令',
					content: '不能使用或打出手牌',
				},
			},
			junling5_eff: {
				trigger: { player: 'recoverBefore' },
				_priority: 44,
				forced: true,
				silent: true,
				popup: false,
				content() {
					trigger.cancel();
				},
				mark: true,
				marktext: '令',
				intro: {
					name: '军令',
					content: '不能回复体力',
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'recover')) return 'zeroplayertarget';
						},
					},
				},
			},
			千鹤sew_玲珑八卦阵: {
				audio: 'bagua_skill',
				equipSkill: true,
				trigger: {
					player: ['chooseToUseBegin', 'useCard'],
				},
				filter(event, player, name) {
					if (name == 'useCard') {
						if (event.card.name == 'wuxie') {
							if (event.card.storage.skill == '千鹤sew_玲珑八卦阵') {
								event.nowuxie = true;
							}
						}
						return false;
					}
					if (event.responded) return false;
					if (event.bagua_skill) return false;
					if (!event.filterCard) return false;
					var evt = event.parent;
					if (event.filterCard && event.filterCard({ name: 'wuxie' }, player, event)) {
						player.storage.千鹤sew_玲珑八卦阵 = 'wuxie';
						if (evt.target && evt.target != player) return false;
					}
					if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) {
						player.storage.千鹤sew_玲珑八卦阵 = 'shan';
					}
					var storage = player.storage.千鹤sew_玲珑八卦阵;
					if (!storage) return false;
					if (event.name == 'chooseToRespond') {
						if (!lib.filter.cardRespondable({ name: storage }, player, event)) return false;
					}
					if (player.hasSkillTag('unequip2')) return false;
					if (!evt.player || !evt.card || !evt.target) return false;
					if (
						evt.player &&
						evt.player.hasSkillTag('unequip', false, {
							name: evt.card ? evt.card.name : null,
							target: player,
							card: evt.card,
						})
					)
						return false;
					if (!player.isEmpty(2)) {
						if (player.hasSkill('千鹤sew_玲珑')) return false;
						if (player.hasSkill('千鹤sew_八阵')) return false;
					}
					return true;
				},
				check(event, player) {
					if (event && (event.ai || event.ai1)) {
						var ai = event.ai || event.ai1;
						var tmp = _status.event;
						_status.event = event;
						var result = ai({ name: 'shan' }, _status.event.player, event);
						var result1 = ai({ name: 'wuxie' }, _status.event.player, event);
						_status.event = tmp;
						return result > 0 || result1 > 0;
					}
					return true;
				},
				prompt(event, player) {
					var str = '';
					var player = _status.event.player;
					var storage = player.storage.千鹤sew_玲珑八卦阵;
					if (storage == 'wuxie') {
						var cardf = event.parent.card;
						var targed = event.parent.target;
						str += get.translation(cardf);
						if (targed) str += '对' + get.translation(targed);
						str += '将';
						if (event.parent.state) str += '生效';
						else str += '失效';
						str += ',是否无懈？';
					} else str += '是否发动【玲珑八卦阵】？';
					return str;
				},
				prompt2(event, player) {
					var str = '';
					var player = _status.event.player;
					var storage = player.storage.千鹤sew_玲珑八卦阵;
					str += '你可以进行一次判定,若判定结果为';
					if (storage == 'wuxie') {
						str += '黑色,视为你使用或打出了一张【无懈可击】.';
					} else str += '红色,视为你使用或打出了一张【闪】.';
					return str;
				},
				content() {
					'step 0';
					trigger.bagua_skill = true;
					var storage = player.storage.千鹤sew_玲珑八卦阵;
					if (storage == 'wuxie') var color = 'black';
					else var color = 'red';
					var next = player.judge('玲珑八卦阵', function (card) {
						return get.color(card) == color ? 1.5 : -0.5;
					});
					next.judge2 = function (result) {
						return result.bool;
					};
					('step 1');
					if (result.judge > 0) {
						var storage = player.storage.千鹤sew_玲珑八卦阵;
						trigger.untrigger();
						trigger.set('responded', true);
						trigger.set('nowuxie', true);
						trigger.result = {
							bool: true,
							card: {
								name: storage,
								storage: {
									skill: '千鹤sew_玲珑八卦阵',
								},
							},
						};
					}
					player.storage.千鹤sew_玲珑八卦阵 = false;
				},
				hiddenCard(player, name) {
					if (name == 'wuxie') {
						if (player.hasSkill('千鹤sew_玲珑') || player.hasSkill('千鹤sew_八阵')) {
							return player.isEmpty(2);
						}
						return true;
					}
					return false;
				},
				ai: {
					respondShan: true,
					effect: {
						target(card, player, target) {
							if (player == target && get.subtype(card) == 'equip2') {
								if (get.equipValue(card) <= 7.5) return -1;
							}
							if (target.getEquip(2)) return;
							return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
						},
					},
				},
			},
			mc_三叉戟_skill: {
				mark: true,
				marktext: '🔱',
				intro: {
					content(storage, player) {
						return storage;
					},
				},
				equipSkill: true,
				forced: true,
				trigger: {
					global: ['phaseJieshuBegin'],
				},
				filter(event, player) {
					return player.isUnseen(0) || player.isUnseen(1);
				},
				content() {
					'step 0';
					var next = player.chooseTarget(function (card, player, target) {
						if (player == target) return false;
						if (player.storage[event.name] == '忠诚') {
							return player.canUse({ name: 'sha', nature: 'stab' }, target, false);
						} else return player.canUse({ name: 'sha', nature: 'stab' }, target);
					});
					next.set('prompt', get.prompt(event.name + '_' + player.storage[event.name]));
					var str = '一名角色的结束阶段,若你处于隐匿状态,你可以视为使用一张刺【杀】,' + get.translation(event.name + '_' + player.storage[event.name] + '_info');
					next.set('prompt2', str);
					next.set('ai', function (target) {
						var player = _status.event.player;
						return get.attitude(player, target) < 0 && get.effect(target, { name: 'sha' }, player, player);
					});
					('step 1');
					if (result.bool) {
						game.log(player, '发动了<span class = greentext>【三叉戟】</span>');
						var target = result.targets[0];
						event.targetx = target;
						if (player.storage[event.name] == '忠诚') {
							var card = player.getCards('e', 'mc_三叉戟');
							player.useCard(
								{
									name: 'sha',
									nature: 'stab',
								},
								target,
								card
							);
						} else {
							player.useCard(
								{
									name: 'sha',
									nature: 'stab',
								},
								target
							);
						}
					}
					('step 2');
					if (player.storage[event.name] == '忠诚') {
						var cards = game.found('mc_三叉戟', null, null, null);
						player.equip(cards);
						event.finish();
					} else {
						var history = player.hasHistory('sourceDamage', function (evt) {
							var card = evt.card;
							if (!card || card.name != 'sha') return false;
							var evtx = evt.getParent('useCard');
							return evtx.card == card && evtx.parent == event;
						});
						if (history) event.seat = 'nextSeat';
						else event.seat = 'previousSeat';
					}
					('step 3');
					if (event.targetx != player[event.seat]) {
						game.broadcastAll(
							function (target1, target2) {
								game.swapSeat(target1, target2);
							},
							player,
							player[event.seat]
						);
					}
					if (event.targetx != player[event.seat]) event.goto(3);
				},
			},
			equipSpell: {
				subSkill: {
					1: {
						equipSkill: true,
						forced: true,
						silent: true,
						popup: false,
						trigger: {
							player: 'equipBegin',
						},
						filter(event, player) {
							return get.subtype(event.card) == 'equipSpell';
						},
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
							const cards = player.getCards('e', { subtype: get.subtype(card) });//没有trigger.card
							const num = cards.length - 3;
							if (num > 0) {
								const { links } = await player.chooseButton(['选择弃置', cards], num, true).forResult();
								if (links.length) {
									player.discard(links);
								}
							}
						},
					},
				},
			},
		},
		translate: {
			千鹤sew_拖刀计: '拖刀计',
			千鹤sew_拖刀计_info: '当你成为【杀】或【决斗】的目标前,对此牌的使用者使用.该角色需要打出一张【杀】,否则防止之.若如此做,你视为对其使用一张有距离限制的【杀】.',
			_千鹤sew_拖刀计_skill: '拖刀计',
			junling: '军令',
			junling1: '军令一',
			junling1_bg: '令',
			junling1_info: '若被执行,执行者对发起者指定的一名角色造成一点伤害.',
			junling2: '军令二',
			junling2_bg: '令',
			junling2_info: '若被执行,执行者摸一张牌,依次交给发起者两张牌.',
			junling3: '军令三',
			junling3_bg: '令',
			junling3_info: '若被执行,执行者失去一点体力.',
			junling4: '军令四',
			junling4_bg: '令',
			junling4_info: '若被执行,直到回合结束,执行者不能使用或打出手牌且非锁定技全部失效.',
			junling4_eff: '军令四',
			junling5: '军令五',
			junling5_bg: '令',
			junling5_info: '若被执行,执行者将武将牌叠置,且不能回复体力直到回合结束.',
			junling5_eff: '军令五',
			junling6: '军令六',
			junling6_bg: '令',
			junling6_info: '若被执行,执行者选择一张手牌和一张装备区内牌(若有),弃置其余的牌.',
			junling4_eff: '',
			junling4_eff_info: '',
			junling5_eff: '',
			junling5_eff_info: '',
			千鹤sew_克复中原: '克复中原',
			千鹤sew_克复中原_info: '出牌阶段,对任意名角色使用.目标角色选择一项:①视为使用一张【杀】(蜀势力角色以此法使用【杀】的伤害值基数+1);②摸一张牌(蜀势力角色改为摸两张牌).',
			千鹤pcr_亚修凯隆: '亚修凯隆',
			千鹤pcr_亚修凯隆_info: '白板',
			千鹤pcr_圣域剑: '圣域剑',
			千鹤pcr_圣域剑_info: '白板',
			mc_三叉戟: '三叉戟',
			mc_三叉戟_info: '使用此牌,获得如下一项附魔:「<b><u>忠诚</u></b>」或「<b><u>激流</u></b>」.一名角色的结束阶段,若你处于隐匿状态,你可以视为使用一张刺【杀】.',
			mc_三叉戟_skill_忠诚: '「忠诚」三叉戟',
			mc_三叉戟_skill_忠诚_info: '此【杀】没有距离限制,当此【杀】结算结束后,将【三叉戟】重新置于你的装备区.',
			mc_三叉戟_skill_激流: '「激流」三叉戟',
			mc_三叉戟_skill_激流_info: '此【杀】有距离限制,当此【杀】结算结束后,若你因此【杀】造成了伤害,你和下家交换座位,并重复此步骤,直到目标成为你的下家为止,若你未因此【杀】造成伤害,你和上家交换座位,并重复此步骤,直到目标成为你的上家为止.',
			千鹤sew_玲珑八卦阵: '玲珑八卦阵',
			千鹤sew_玲珑八卦阵_info: '当你需要使用【闪】或,需要对自己使用【无懈可击】时,你可以进行一次判定,若判定结果为:黑色,视为你使用了一张不会被无懈的【无懈可击】;红色,视为你使用了一张【闪】.',
			千鹤acg_寒冰剑: '寒冰剑',
			千鹤acg_寒冰剑_info: '当你因执行【杀】的效果而造成伤害时,若目标角色有能被弃置的牌,则你可以防止此伤害,依次弃置目标角色的两张牌.',
		},
		list: [],
	};
	for (var i in list.card) {
		if (typeof list.card[i].image != 'string') list.card[i].image = `ext:神椿千鹤/card/${i}.png`;
	}
	return list;
});

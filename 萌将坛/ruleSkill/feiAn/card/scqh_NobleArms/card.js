'use strict';
game.import('card', function (lib, game, ui, get, ai, _status) {
	lib.config.all.cards.add('YGO圣剑');
	lib.config.cards.add('YGO圣剑');
	lib.translate.YGO圣剑_card_config = 'YGO圣剑';
	var list = {
		name: 'YGO圣剑',
		connect: true,
		card: {
			ygo_NobleArmsGallatin: {
				ygoNobleArms: true,
				ygoGraveyard: true,
				type: 'ygoSpell',
				subtype: 'ygoSpell_equip',
				skills: ['ygo_NobleArmsGallatin_skill'],
				enable: true,
				fullimage: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					if (target != player) return false;
					if (target.countCards('e', 'ygo_NobleArmsGallatin')) return false;
					return target.isNobleKnight();
				},
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') {
						target.equipygoCard(cards[0]);
					}
				},
				onEquip() {
					player.gain(get.cards(4), 'draw').gaintag.add(card.name);
				},
				async onLose(event, trigger, player) {
					if (event.cards?.length) {
						const card = event.cards[0];
						const carded = player.getCards('h', function (cary) {
							return cary.hasGaintag(card.name);
						});
						if (carded.length) {
							player.loseToDiscardpile(carded);
						}
						var num = 4 - carded.length;
						var card2 = player.getCards('h');
						if (num && card2.length) {
							if (num >= card2.length) {
								player.loseToDiscardpile(card2);
							} else {
								var str = get.translation(card.name);
								str += '：将' + get.cnNumber(num) + '张手牌置入弃牌堆';
								const { cards } = await player.chooseCard(true, num, str).forResult();
								if (cards?.length) {
									player.loseToDiscardpile(cards);
								}
							}
						}
						player.ReviveNobleArms(card);
					}
				},
				filterLose(card, player) {
					if (player.hasSkillTag('unequip1')) return false;
					return true;
				},
				ai: {
					order: 9.5,
					equipValue(card, player) {
						return 6;
					},
					basic: {
						equipValue: 4,
					},
				},
			},
			ygo_NobleArmsCaliburn: {
				ygoNobleArms: true,
				ygoGraveyard: true,
				type: 'ygoSpell',
				subtype: 'ygoSpell_equip',
				skills: ['ygo_NobleArmsCaliburn_skill'],
				enable: true,
				fullimage: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					if (target != player) return false;
					if (target.countCards('e', 'ygo_NobleArmsCaliburn')) return false;
					return target.isNobleKnight();
				},
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') {
						target.equipygoCard(cards[0]);
					}
				},
				onEquip() {
					player.sew_skillUsable(card.name + '_skill', -1);
					player.gain(get.cards(2), 'draw').gaintag.add(card.name);
				},
				async onLose(event, trigger, player) {
					if (event.cards?.length) {
						const card = event.cards[0];
						const carded = player.getCards('h', function (cary) {
							return cary.hasGaintag(card.name);
						});
						if (carded.length) {
							player.loseToDiscardpile(carded);
						}
						var num = 2 - carded.length;
						var card2 = player.getCards('h');
						if (num && card2.length) {
							if (num >= card2.length) {
								player.loseToDiscardpile(card2);
							} else {
								var str = get.translation(card.name);
								str += '：将' + get.cnNumber(num) + '张手牌置入弃牌堆';
								const { cards } = await player.chooseCard(true, num, str).forResult();
								if (cards?.length) {
									player.loseToDiscardpile(cards);
								}
							}
						}
						player.ReviveNobleArms(card);
					}
				},
				filterLose(card, player) {
					if (player.hasSkillTag('unequip1')) return false;
					return true;
				},
				ai: {
					order: 9.5,
					equipValue(card, player) {
						return 6;
					},
					basic: {
						equipValue: 4,
					},
				},
			},
			ygo_NobleArmsClarent: {
				type: 'ygoSpell',
				subtype: 'ygoSpell_equip',
				skills: ['ygo_NobleArmsClarent_skill'],
				enable: true,
				fullimage: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					if (target != player) return false;
					if (target.countCards('e', 'ygo_NobleArmsCaliburn')) return false;
					return target.isNobleKnight();
				},
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') {
						target.equipygoCard(cards[0]);
					}
				},
				onEquip() {
					player.sew_skillUsable(card.name + '_skill', -1);
				},
				async onLose(event, trigger, player) {
					if (event.cards?.length) {
						const card = event.cards[0];
						player.ReviveNobleArms(card);
					}
				},
				filterLose(card, player) {
					if (player.hasSkillTag('unequip1')) return false;
					return true;
				},
				ai: {
					order: 9.5,
					equipValue(card, player) {
						return 6;
					},
					basic: {
						equipValue: 4,
					},
				},
			},
			ygo_NobleArmsArfeudutyr: {
				type: 'ygoSpell',
				subtype: 'ygoSpell_equip',
				skills: ['ygo_NobleArmsArfeudutyr_skill'],
				enable: true,
				fullimage: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					if (target != player) return false;
					if (target.countCards('e', 'ygo_NobleArmsCaliburn')) return false;
					return target.isNobleKnight();
				},
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') {
						target.equipygoCard(cards[0]);
					}
				},
				onEquip() {
					player.sew_skillUsable(card.name + '_skill', -1);
				},
				async onLose(event, trigger, player) {
					if (event.cards?.length) {
						const card = event.cards[0];
						player.ReviveNobleArms(card);
					}
				},
				filterLose(card, player) {
					if (player.hasSkillTag('unequip1')) return false;
					return true;
				},
				ai: {
					order: 9.5,
					equipValue(card, player) {
						return 6;
					},
					basic: {
						equipValue: 4,
					},
				},
			},
			ygo_NobleArmsOfDestiny: {
				type: 'ygoSpell',
				subtype: 'ygoSpell_equip',
				skills: ['ygo_NobleArmsOfDestiny_skill'],
				enable: true,
				fullimage: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					if (target != player) return false;
					if (target.countCards('e', 'ygo_NobleArmsCaliburn')) return false;
					return target.isNobleKnight();
				},
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') {
						target.equipygoCard(cards[0]);
					}
				},
				onEquip() {
					player.sew_skillUsable(card.name + '_skill', -1);
				},
				async onLose(event, trigger, player) {
					if (event.cards?.length) {
						const card = event.cards[0];
						player.ReviveNobleArms(card);
					}
				},
				filterLose(card, player) {
					if (player.hasSkillTag('unequip1')) return false;
					return true;
				},
				ai: {
					order: 9.5,
					equipValue(card, player) {
						return 6;
					},
					basic: {
						equipValue: 4,
					},
				},
			},
			ygo_NobleArmsExcaliburn: {
				type: 'ygoSpell',
				subtype: 'ygoSpell_equip',
				skills: ['ygo_NobleArmsExcaliburn_skill'],
				enable: true,
				fullimage: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					if (target != player) return false;
					if (target.countCards('e', 'ygo_NobleArmsCaliburn')) return false;
					return target.isNobleKnight();
				},
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') {
						target.equipygoCard(cards[0]);
					}
				},
				async onLose(event, trigger, player) {
					if (event.cards?.length) {
						const card = event.cards[0];
						player.ReviveNobleArms(card);
					}
				},
				filterLose(card, player) {
					if (player.hasSkillTag('unequip1')) return false;
					return true;
				},
				ai: {
					order: 9.5,
					equipValue(card, player) {
						return 6;
					},
					basic: {
						equipValue: 4,
					},
				},
			},
			ygo_NobleArmsOfQueen: {
				type: 'ygoMonster',
				subtype: 'ygoSpell_equip',
				skills: ['ygo_NobleArmsOfQueen_skill'],
				enable: true,
				usable: 1,
				fullimage: true,
				selectTarget: 1,
				filterTarget(card, player, target) {
					var name1 = target.name.includes('ygo_') && target.name.includes('圣骑士');
					var name2 = target.name2 && target.name2.includes('ygo_') && target.name2.includes('圣骑士');
					return name1 || name2;
				},
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') target.equipygoCard(cards[0]);
				},
				onEquip() {
					player.storage.ygo_atk += 300;
				},
				async onLose(event, trigger, player) {
					player.storage.ygo_atk -= 300;
					if (player.storage.ygo_atk < 0) player.storage.ygo_atk = 0;
					event.nnn = card.name;
					if (event.cards?.length) {
						const card = event.cards[0];
						player.ReviveNobleArms(card);
					}
				},
				filterLose(card, player) {
					if (player.hasSkillTag('unequip1')) return false;
					return true;
				},
				ai: {
					order: 9.5,
					equipValue(card, player) {
						return 8;
					},
					basic: {
						equipValue: 4,
					},
				},
			},
			ygo_光之圣剑丹内尔: {
				type: 'ygo_魔法',
				subtype: 'ygo_装备魔法',
				enable: true,
				fullimage: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					var cou = target.countCards('e', 'ygo_光之圣剑丹内尔');
					return target == player && !cou;
				},
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') target.equipygoCard(cards[0]);
				},
				async onLose(event, trigger, player) {
					if (event.cards?.length) {
						const card = event.cards[0];
						event.nnn = card.name;
						var isEquip = true;
						var lose = player.getHistory('lose');
						for (let i = 0; i < lose.length; i++) {
							if (lose[i].es.length > 0) {
								const evt = lose[i];
								const equips = evt.es;
								for (let j = 0; j < equips.length; j++) {
									if (equips[j] == card && evt.type != 'discard') {
										isEquip = false;
									}
								}
							}
						}
						var name1 = player.name.includes('ygo_') && (player.name.includes('圣骑士') || player.name.includes('勇者'));
						var name2 = player.name2 && player.name2.includes('ygo_') && (player.name2.includes('圣骑士') || player.name2.includes('勇者'));
						if (isEquip == true && (name1 || name2)) {
							var str = '<b><font color = white>';
							str += '是否将【' + get.translation(event.nnn) + '】置于你的装备区？';
							str += '</font></b>';
							const { bool } = await player.chooseBool().set('prompt', ' ').set('prompt2', str).forResult();
							if (bool) {
								game.log(player, '发动了', event.nnn);
								player.equipygoCard(card);
							}
						}
					}
				},
				filterLose(card, player) {
					if (player.hasSkillTag('unequip1')) return false;
					return true;
				},
				ai: {
					order: 9.5,
					equipValue(card, player) {
						return 4;
					},
					basic: {
						equipValue: 4,
					},
				},
			},
			ygo_圣剑引导的未来: {
				type: 'ygo_陷阱',
				subtype: 'ygo_通常陷阱',
				selectTarget: -1,
				enable: true,
				vanish: true,
				allowMultiple: true,
				filterTarget(card, player, target) {
					return target == player;
				},
				content() {
					target.addJudge(cards[0]);
				},
				effect() {
					'step 0';
					event.nnn = card.name;
					event.ccc = player.getCards('e', function (card, name) {
						return card.name.includes('ygo_') && card.name.includes('圣剑');
					});
					if (event.ccc.length) {
						var str = '<b><font color = white>';
						str += '是否发动【' + get.translation(event.nnn) + '】的效果？';
						str += '</font></b>';
						var next = player.chooseBool();
						next.set('prompt', ' ');
						next.set('prompt2', str);
					}
					('step 1');
					if (result.bool) {
						player.chooseToGuanxing(event.ccc.length);
						player.draw();
					} else player.addJudge(cards[0]);
				},
				ai: {
					basic: {
						order: 1,
						useful: 1,
						value: 4,
					},
					result: {
						target: 1,
					},
				},
				fullimage: true,
			},
			ygo_光荣的圣骑士团: {
				type: 'ygo_魔法',
				subtype: 'ygo_速攻魔法',
				enable(event, player) {
					return !player.hasSkill('spellCard_光荣的圣骑士团');
				},
				filterTarget(card, player, target) {
					var name1 = target.name.includes('ygo_') && target.name.includes('圣骑士');
					var name2 = target.name2 && target.name2.includes('ygo_') && target.name2.includes('圣骑士');
					return name1 || name2;
				},
				content() {
					'step 0';
					event.nnn = card.name;
					var ccc = player.getCards('x', function (card, name) {
						return card.hasGaintag('_ygo_卡组') && card.name.includes('ygo_') && card.name.includes('圣剑') && get.subtype(card) == 'ygo_装备魔法';
					});
					if (ccc.length) player.chooseButton(true, [get.translation(event.nnn), ccc]);
					('step 1');
					if (result.links?.length) {
						event.card = result.links[0];
						player.gain(event.card);
					}
					('step 2');
					if (player.getCards('h').includes(event.card)) {
						player.chooseUseTarget(true, event.card);
					}
				},
				fullimage: true,
			},
			千鹤card_异次元隔离机: {
				type: 'ygo_魔法',
				subtype: 'ygo_永续魔法',
				enable: true,
				filterTarget(card, player, target) {
					return player != target;
				},
				contentBefore() {
					player.$fullscreenpop('放逐至异次元吧', 'metal');
				},
				content() {
					'step 0';
					player.storage.spellCard_异次元隔离机 = target;
					('step 1');
					var target = player.storage.spellCard_异次元隔离机;
					delete player.storage.spellCard_异次元隔离机;
					if (!target.isAlive()) {
						event.finish();
						return;
					}
					var next = player.insertEvent('spellCard_异次元隔离机Loop', lib.skill.spellCard_异次元隔离机.spellCard_异次元隔离机Loop, {
						targets: [target, player],
						num: 0,
						backup: [],
						source: player,
					});
					next.forceDie = true;
					for (var i = 0; i < game.players.length; i++) {
						if (game.players[i] != player && game.players[i] != target) {
							game.players[i].out('spellCard_异次元隔离机');
							next.backup.push(game.players[i]);
						}
					}
					if (!ui.spellCard_异次元隔离机Loop) {
						ui.spellCard_异次元隔离机Loop = ui.create.system('六回合', null, true);
						lib.setPopped(
							ui.spellCard_异次元隔离机Loop,
							function () {
								var uiintro = ui.create.dialog('hidden');
								uiintro.add('异次元隔离机');
								uiintro.addText(get.cnNumber(ui.spellCard_异次元隔离机Loop.round) + '回合后结束');
								uiintro.add(ui.create.div('.placeholder.slim'));
								return uiintro;
							},
							180
						);
						ui.spellCard_异次元隔离机Loop.round = 6;
					}
				},
				fullimage: true,
			},
			ygo_咖喱棒: {
				type: 'spellCard',
				subtype: 'equipSpell',
				enable: true,
				selectTarget: -1,
				modTarget: true,
				allowMultiple: false,
				toself: true,
				filterTarget(card, player, target) {
					return target == player;
				},
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				onLose() { },
				filterLose(card, player) {
					if (player.hasSkillTag('unequip1')) return false;
					return true;
				},
				fullimage: true,
			},
			fgo_唯一一次谎言: {
				type: 'fgo_lizhuang',
				skills: ['fgo_唯一一次谎言_skill'],
				enable: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					if (target != player) return false;
					if (target.countCards('e', 'fgo_唯一一次谎言')) return false;
					return true;
				},
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') {
						target.equip(cards[0]);
					}
				},
				ai: {
					basic: {
						equipValue: 4,
					},
				},
				fullimage: true,
			},
		},
		skill: {
			ygo_NobleArmsGallatin_skill: {
				equipSkill: true,
				mod: {
					attackRange(player, num) {
						if (num <= 1) return num + 1;
					},
					ignoredHandcard(card, player) {
						if (card.hasGaintag('ygo_NobleArmsGallatin')) return true;
					},
					cardDiscardable(card, player, name) {
						if (name == 'phaseDiscard' && card.hasGaintag('ygo_NobleArmsGallatin')) {
							return false;
						}
					},
				},
				forced: true,
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				filter(event, player, name) {
					return player.getHandcardLimit() > 0 || player.countDiscardableCards(player, 'h');
				},
				content() {
					if (player.countDiscardableCards(player, 'h')) {
						player.chooseToDiscard('h', true);
					}
					if (player.getHandcardLimit() > 0) {
						player.addSkill(event.name + '2');
						if (player.storage[event.name + '2'] == undefined) {
							player.storage[event.name + '2'] = 0;
						}
						player.storage[event.name + '2']++;
					}
				},
			},
			ygo_NobleArmsGallatin_skill2: {
				charlotte: true,
				remove: true,
				init(player, skill) {
					if (player.storage['ygo_NobleArmsGallatin_skill2'] == undefined) {
						player.storage['ygo_NobleArmsGallatin_skill2'] = 0;
					}
				},
				mod: {
					maxHandcard(player, num) {
						if (player.storage['ygo_NobleArmsGallatin_skill2'] != undefined) {
							return num - player.storage['ygo_NobleArmsGallatin_skill2'];
						}
					},
				},
			},
			ygo_NobleArmsCaliburn_skill: {
				equipSkill: true,
				mod: {
					attackRange(player, num) {
						if (num <= 1) return num + 1;
					},
					ignoredHandcard(card, player) {
						if (card.hasGaintag('ygo_NobleArmsCaliburn')) return true;
					},
					cardDiscardable(card, player, name) {
						if (name == 'phaseDiscard' && card.hasGaintag('ygo_NobleArmsCaliburn')) {
							return false;
						}
					},
				},
				enable: 'phaseUse',
				usable: 1,
				prompt(event, player) {
					var str = '出牌阶段限一次，若你已受伤，你可以回复一点体力，否则你获得一点护甲。';
					return str;
				},
				content() {
					if (player.isDamaged()) player.recover();
					else player.changeHujia(1, null, true);
				},
			},
			ygo_NobleArmsClarent_skill: {
				equipSkill: true,
				mod: {
					attackRange(player, num) {
						if (num <= 1) return num + 1;
					},
				},
				enable: 'phaseUse',
				usable: 1,
				prompt(event, player) {
					var str = '出牌阶段限一次，你可以对自己和攻击范围内的一名其他角色各造成一点伤害。';
					return str;
				},
				filterTarget(card, player, target) {
					return player.inRange(target);
				},
				content() {
					player.damage();
					target.damage();
				},
			},
			ygo_NobleArmsArfeudutyr_skill: {
				equipSkill: true,
				mod: {
					attackRange(player, num) {
						if (num <= 1) return num + 1;
					},
				},
				enable: 'phaseUse',
				usable: 1,
				prompt(event, player) {
					var str = '出牌阶段限一次，你可以弃置一张手牌或减一点手牌上限，弃置一名其他角色的手牌。';
					return str;
				},
				filterCard: true,
				selectCard: [0, 1],
				filterTarget(card, player, target) {
					return target != player && target.countDiscardableCards(player, 'h');
				},
				content() {
					if (!cards.length) {
						player.addSkill(event.name + '2');
						if (player.storage['ygo_NobleArmsArfeudutyr_skill2'] == undefined) {
							player.storage['ygo_NobleArmsArfeudutyr_skill2'] = 0;
						}
						player.storage['ygo_NobleArmsArfeudutyr_skill2']++;
					}
					player.discardPlayerCard('hs', target, true);
				},
			},
			ygo_NobleArmsArfeudutyr_skill2: {
				charlotte: true,
				remove: true,
				init(player, skill) {
					if (player.storage['ygo_NobleArmsArfeudutyr_skill2'] == undefined) {
						player.storage['ygo_NobleArmsArfeudutyr_skill2'] = 0;
					}
				},
				mod: {
					maxHandcard(player, num) {
						if (player.storage['ygo_NobleArmsArfeudutyr_skill2'] != undefined) {
							return num - player.storage['ygo_NobleArmsArfeudutyr_skill2'];
						}
					},
				},
			},
			ygo_NobleArmsOfDestiny_skill: {
				equipSkill: true,
				forced: true,
				mod: {
					attackRange(player, num) {
						if (num <= 1) return num + 1;
					},
				},
				trigger: {
					player: ['loseHpBegin', 'loseMaxHpBegin', 'damageBegin4'],
				},
				usable: 1,
				prompt(event, player) {
					var str = '出牌阶段限一次，你可以弃置一张手牌或减一点手牌上限，弃置一名其他角色的手牌。';
					return str;
				},
				content() {
					trigger.cancel();
				},
			},
			ygo_NobleArmsExcaliburn_skill: {
				equipSkill: true,
				mod: {
					attackRange(player, num) {
						if (num <= 1) return num + 1;
					},
					targetEnabled(card, player, target) {
						if (get.type(card) != 'basic' && player != target) return false;
					},
				},
			},
			ygo_NobleArmsOfQueen_skill: {
				equipSkill: true,
				mod: {
					attackRange(player, num) {
						if (num <= 1) return num + 1;
					},
				},
				group: ['ygo_NobleArmsOfQueen_skill_光', 'ygo_NobleArmsOfQueen_skill_暗'],
				subSkill: {
					光: {
						name: '圣剑之女王 桂妮薇儿',
						trigger: {
							player: ['loseHpBegin', 'loseMaxHpBegin', 'damageBegin4'],
						},
						prompt2(event, player) {
							var str = '<b><font color = white>【' + get.translation(_status.event.skill) + '】';
							str += '<br/><br/><li>施法对象：你';
							str += '<br/><br/>光属性技，当你失去体力时、减体力上限时、受到非基本牌造成的伤害时，你可以防止之，你弃置装备区里的一张【怀抱圣剑的王后】。';
							str += '</font></b>';
							return str;
						},
						filter(event, player, name) {
							if (player.storage.ygo_属性 != '光') return false;
							if (name == 'damageBegin4') return get.type(event.card) != 'basic';
							if (name != 'damageBegin4') return true;
							return false;
						},
						content() {
							'step 0';
							trigger.cancel();
							('step 1');
							var ccc = player.getCards('e', 'ygo_NobleArmsOfQueen');
							if (ccc.length > 1) {
								player.discardPlayerCard(player, 'e', true).set('filterButton', function (button) {
									return button.link.name == 'ygo_NobleArmsOfQueen';
								});
							} else if (ccc.length == 1) player.discard(ccc);
						},
						sub: true,
					},
					暗: {
						name: '圣剑之女王 桂妮薇儿',
						trigger: {
							player: 'shaHit',
							target: 'shaHit',
						},
						prompt2(event, player) {
							var player = _status.event.player;
							var str = '<b><font color = white>【' + get.translation(_status.event.skill) + '】';
							str += '<br/><br/><li>施法对象：';
							if (event.player == player) str += get.translation(event.target);
							else if (event.target == player) str += get.translation(event.player);
							str += '<br/><br/>暗属性技，当你使用的【杀】命中时，或被其他角色使用的【杀】命中时，你可以防止之，弃置对方的一张牌或令其失去一点体力，你弃置装备区里的一张【怀抱圣剑的王后】。';
							str += '</font></b>';
							return str;
						},
						filter(event, player, name) {
							if (player.storage.ygo_属性 != '暗') return false;
							return true;
						},
						content() {
							'step 0';
							trigger.cancel();
							if (player == trigger.player) event.ttt = trigger.target;
							else if (player == trigger.target) event.ttt = trigger.player;
							('step 1');
							var list = [];
							if (event.ttt.countDiscardableCards(player, 'he')) {
								list.push('弃置对方的一张牌');
							}
							list.push('令对方失去一点血');
							player.chooseControl(list);
							('step 2');
							if (result.control == '弃置对方的一张牌') {
								player.discardPlayerCard(event.ttt, 'he', true);
							}
							if (result.control == '令对方失去一点血') {
								event.ttt.loseHp();
							}
							('step 3');
							var ccc = player.getCards('e', 'ygo_NobleArmsOfQueen');
							if (ccc.length > 1) {
								player.discardPlayerCard(player, 'e', true).set('filterButton', function (button) {
									return button.link.name == 'ygo_NobleArmsOfQueen';
								});
							} else if (ccc.length == 1) player.discard(ccc);
						},
						sub: true,
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
					if (event.filterCard({ name: 'wuxie' }, player, event)) {
						player.storage.千鹤sew_玲珑八卦阵 = 'wuxie';
						if (evt.target && evt.target != player) return false;
					}
					if (event.filterCard({ name: 'shan' }, player, event)) {
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
						str += '，是否无懈？';
					} else str += '是否发动【玲珑八卦阵】？';
					return str;
				},
				prompt2(event, player) {
					var str = '';
					var player = _status.event.player;
					var storage = player.storage.千鹤sew_玲珑八卦阵;
					str += '你可以进行一次判定，若判定结果为';
					if (storage == 'wuxie') {
						str += '黑色，视为你使用或打出了一张【无懈可击】。';
					} else str += '红色，视为你使用或打出了一张【闪】。';
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
			fgo_唯一一次谎言_skill: {
				equipSkill: true,
				trigger: {
					global: 'useCardToTarget',
				},
				filter(event, player) {
					if (event.card.name != 'tao') return false;
					return event.target.isDying() && (event.target.name1.includes('崔斯坦') || (event.target.name2 && event.target.name2.includes('崔斯坦')));
				},
				prompt(event, player) {
					return get.translation('fgo_唯一一次谎言_info');
				},
				content() {
					player.discard(player.getCards('e', 'fgo_唯一一次谎言'));
					var evt = trigger.parent;
					var target = trigger.target;
					evt.triggeredTargets2.remove(target);
					evt.targets.remove(target);
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
				direct: true,
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
					var str = '一名角色的结束阶段，若你处于隐匿状态，你可以视为使用一张刺【杀】，' + get.translation(event.name + '_' + player.storage[event.name] + '_info');
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
							const cards = player.getCards('e', { subtype: get.subtype(card) }); //没有trigger.card
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
			trapCard: {
				subSkill: {
					陷阱: {
						mod: {
							cardEnabled2(card, player) {
								var list = player.getHistory('gain');
								for (let i = 0; i < list.length; i++) {
									if (list[i].cards.includes(card) && get.type(card) == 'trapCard') return false;
								}
							},
						},
						sub: true,
					},
					圣剑引导的未来00: {
						forced: true,
						direct: true,
						priority: -17,
						trigger: {
							global: 'phaseBegin',
						},
						filter(event, player) {
							return player.countCards('e', (card) => card.name.includes('ygo_圣剑')) && player.hasUsableCard('千鹤card_圣骑士_圣剑引导的未来');
						},
						content() {
							var next = player.chooseToUse();
							next.set('prompt', '是否使用【圣剑引导的未来】？');
							next.set('filterCard', function (card, player) {
								if (card.name != '千鹤card_圣骑士_圣剑引导的未来') return false;
								return lib.filter.cardEnabled(card, player, 'forceEnable');
							});
							next.set('respondTo', [trigger.player, trigger.card]);
							next.set('goon', -get.effect(player, trigger.card, trigger.player, player));
							next.set('ai1', function (card) {
								return _status.event.goon;
							});
						},
						sub: true,
					},
				},
			},
			spellCard: {
				subSkill: {
					光荣的圣骑士团: {
						charlotte: true,
						sub: true,
					},
					光荣的圣骑士团00: {
						forced: true,
						direct: true,
						priority: -17,
						trigger: {
							global: 'useCardToBegin',
						},
						filter(event, player) {
							if (event.directHit || !get.tag(event.card, 'damage')) return false;
							if (player.hasSkill('spellCard_光荣的圣骑士团')) return false;
							if (!player.hasUsableCard('千鹤card_圣骑士_光荣的圣骑士团')) return false;
							return event.target.name.includes('ygo_圣骑士') || (event.target.name2 && event.target.name2.includes('ygo_圣骑士'));
						},
						content() {
							var next = player.chooseToUse();
							next.set('prompt', '是否使用【光荣的圣骑士团】？');
							next.set('filterCard', function (card, player) {
								if (card.name != '千鹤card_圣骑士_光荣的圣骑士团') return false;
								return lib.filter.cardEnabled(card, player, 'forceEnable');
							});
							next.set('respondTo', [trigger.player, trigger.card]);
							next.set('goon', -get.effect(player, trigger.card, trigger.player, player));
							next.set('ai1', function (card) {
								return _status.event.goon;
							});
						},
						sub: true,
					},
					光荣的圣骑士团01: {
						popup: false,
						locked: true,
						trigger: {
							player: 'discardAfter',
						},
						prompt: '是否使用【光荣的圣骑士团】？',
						filter(event, player) {
							if (player.hasSkill('spellCard_光荣的圣骑士团')) return false;
							for (var i = 0; i < event.cards.length; i++) {
								if (event.cards[i].name == '千鹤card_圣骑士_光荣的圣骑士团') return true;
							}
							return false;
						},
						content() {
							'step 0';
							player.chooseTarget(function (card, player, target) {
								return target.name.includes('ygo_圣骑士') || (target.name2 && target.name2.includes('ygo_圣骑士'));
							});
							('step 1');
							if (result.bool == true) {
								event.target = result.targets[0];
								player.popup('光荣的圣骑士团');
								game.log(player, '对', event.target, '使用了光荣的圣骑士团');
								player.addTempSkill('spellCard_光荣的圣骑士团');
								event.goto(2);
							} else event.finish();
							('step 2');
							var list = get.libCard(function (info) {
								return info.subtype == 'equipSpell';
							});
							if (list.length) {
								player.chooseVCardButton(list, true, 'notype').ai = function () {
									return Math.random();
								};
							}
							('step 3');
							if (result.bool) {
								game.found = function (name, suit, number, nature) {
									var card = ui.create.card(ui.special);
									card.storage.vanish = true;
									return card.init([suit, number, name, nature]);
								};
								event.target.equip(game.found(result.links[0][2], null, null, null));
							}
						},
						sub: true,
					},
					异次元隔离机: {
						charlotte: true,
						marktext: '异次元',
						intro: {
							content: '你已经进行了#个额外回合',
							name: '异次元',
						},
						spellCard_异次元隔离机Loop() {
							'step 0';
							targets[0].phase('spellCard_异次元隔离机');
							targets[0].addMark('spellCard_异次元隔离机', 1);
							('step 1');
							ui.spellCard_异次元隔离机Loop.round--;
							ui.spellCard_异次元隔离机Loop.innerHTML = get.cnNumber(ui.spellCard_异次元隔离机Loop.round) + '回合';
							if (targets[0].isDead() || targets[1].isDead() || ui.spellCard_异次元隔离机Loop.round == 0) {
								event.goto(3);
							} else {
								targets[1].phase('spellCard_异次元隔离机');
								targets[1].addMark('spellCard_异次元隔离机', 1);
							}
							('step 2');
							ui.spellCard_异次元隔离机Loop.round--;
							ui.spellCard_异次元隔离机Loop.innerHTML = get.cnNumber(ui.spellCard_异次元隔离机Loop.round) + '回合';
							if (targets[0].isDead() || targets[1].isDead() || ui.spellCard_异次元隔离机Loop.round == 0) {
								event.goto(3);
							} else {
								event.goto(0);
							}
							('step 3');
							targets[0].removeMark('spellCard_异次元隔离机', player.countMark('spellCard_异次元隔离机'));
							targets[1].removeMark('spellCard_异次元隔离机', player.countMark('spellCard_异次元隔离机'));
							for (var i = 0; i < event.backup.length; i++) {
								event.backup[i].in('spellCard_异次元隔离机');
							}
							if (ui.spellCard_异次元隔离机Loop) {
								ui.spellCard_异次元隔离机Loop.remove();
								delete ui.spellCard_异次元隔离机Loop;
							}
						},
						sub: true,
					},
				},
			},
		},
		translate: {
			ygo_NobleArmsGallatin: '圣剑 加拉廷',
			ygo_NobleArmsGallatin_skill: '加拉廷',
			ygo_NobleArmsGallatin_info: '⒈你只能装备一张『圣剑 加拉廷』。<br/>⒉准备阶段，你需要弃置一张手牌。<br/>⒊每回合限一次，当你（且是圣骑士）因弃置而失去装备区内的这张牌后，则你可以将这张牌置入你的装备区。<br/>⒋当这张牌置入你的装备区后，你获得牌堆顶的四张牌且不计入手牌上限。<br/>⒌当你失去装备区内的这张牌后，你需要将四张手牌置入弃牌堆（优先选择以此法获得的牌）。',
			ygo_NobleArmsCaliburn: '圣剑 石中剑',
			ygo_NobleArmsCaliburn_skill: '石中剑',
			ygo_NobleArmsCaliburn_info: '⒈你只能装备一张『圣剑 石中剑』。<br/>⒉出牌阶段限一次，若你已受伤，你可以回复一点体力，否则你获得一点护甲。<br/>⒊每回合限一次，当你（且是圣骑士）因弃置而失去装备区内的这张牌后，则你可以将这张牌置入你的装备区。<br/>⒋当这张牌置入你的装备区后，你刷新『⒉』的使用次数，获得牌堆顶的两张牌且不计入手牌上限。<br/>⒌当你失去装备区内的这张牌后，你需要将两张手牌置入弃牌堆（优先选择以此法获得的牌）。',
			ygo_NobleArmsClarent: '圣剑 克拉伦特',
			ygo_NobleArmsClarent_skill: '克拉伦特',
			ygo_NobleArmsClarent_info: '锁定技，你只能装备一张【圣剑 克拉伦特】。<br/>①：出牌阶段限一次，你可以对自己和攻击范围内的一名其他角色各造成一点伤害。<br/>②：当此牌置入你的装备牌后，重置①的使用次数。<br/>③：当此牌因弃置而离开「<b><u>圣骑士</u></b>」（须是你）的装备区时，你可以将此牌重新置于你的装备区（每回合限一次），否则销毁此牌。',
			ygo_NobleArmsArfeudutyr: '圣剑 阿隆戴特',
			ygo_NobleArmsArfeudutyr_skill: '阿隆戴特',
			ygo_NobleArmsArfeudutyr_info: '锁定技，你只能装备一张【圣剑 阿隆戴特】。<br/>①：出牌阶段限一次，你可以弃置一张手牌或减一点手牌上限，弃置一名其他角色的手牌。<br/>②：当此牌置入你的装备牌后，重置①的使用次数。<br/>③：当此牌因弃置而离开「<b><u>圣骑士</u></b>」（须是你）的装备区时，你可以将此牌重新置于你的装备区（每回合限一次），否则销毁此牌。',
			ygo_NobleArmsOfDestiny: '天命之圣剑',
			ygo_NobleArmsOfDestiny_skill: '天命之圣剑',
			ygo_NobleArmsOfDestiny_info: '锁定技，你只能装备一张【天命之圣剑】。<br/>①：每回合限一次，当你受到伤害时、失去体力时、减体力上限时，防止此效果。<br/>②：当此牌置入你的装备牌后，重置①的使用次数。<br/>③：当此牌因弃置而离开「<b><u>圣骑士</u></b>」（须是你）的装备区时，你可以将此牌重新置于你的装备区（每回合限一次），否则销毁此牌。',
			ygo_NobleArmsOfQueen: '怀抱圣剑的王后',
			ygo_NobleArmsOfQueen_skill: '怀抱圣剑的王后',
			ygo_NobleArmsOfQueen_info: '出牌阶段限使用一次，此牌的使用目标是「<b><u>圣骑士</u></b>」。<br/>①：光属性技，当你失去体力、减体力上限、受到非基本牌造成的伤害时，你可以防止此效果，弃置你装备区里的此牌。<br/>②：暗属性技，当你使用的【杀】命中时，或被其他角色使用的【杀】命中时，你可以防止之，弃置对方的一张牌或令其失去一点体力，弃置你装备区里的此牌。<br/>③：当此牌是因弃置而离开你的装备区后，将此牌置于你的特殊手牌区域（最多三张），否则销毁此牌。',
			ygo_NobleArmsExcaliburn: '圣剑 断钢剑',
			ygo_NobleArmsExcaliburn_info: '锁定技，你只能装备一张【圣剑 断钢剑】。你不能成为其他角色使用非基本牌的目标。。当此牌离开你的装备区时，销毁此牌。',
			千鹤acg_帮助1: '帮助',
			千鹤acg_帮助1_info: '①魔法：通常魔法、速攻魔法、永续魔法、装备魔法、场地魔法、仪式魔法 <br/>②陷阱：通常陷阱、反击陷阱、永续陷阱 <br/>③陷阱牌在布置的回合不能发动 <br/>④装备魔法会置于装备区，可以同时装备三张装备魔法，超过三张时需要将其中一张牌置于弃牌堆中',
			ygo_圣剑引导的未来: '圣剑引导的未来',
			ygo_圣剑引导的未来_info: '出牌阶段，对自己使用。将此牌置于该角色的判定区。任意一名角色的判定阶段，你可以观看牌堆顶的Ｘ张牌（X为你装备区里的【圣剑】牌数），并以任意顺序置于牌堆顶或牌堆底，摸一张牌。',
			ygo_光荣的圣骑士团: '光荣的圣骑士团',
			ygo_光荣的圣骑士团_info: '每回合限使用一次，出牌阶段，或当带有「伤害」标签的牌对一名圣骑士角色生效前，或当你因弃置而失去【光荣的圣骑士团】时，选择一名圣骑士角色，从游戏外将一张装备魔法牌置于他的装备区。',
			千鹤card_异次元隔离机: '异次元隔离机',
			千鹤card_异次元隔离机_info: '出牌阶段，选择一名其他角色，将你二人之外的其他角色除外，并在此回合结束后，轮流进行额外回合，直到一方死亡或一共进行了六个额外回合为止。',
			ygo_咖喱棒: '咖喱棒',
			ygo_咖喱棒_info: '无',
			fgo_唯一一次谎言: '唯一一次谎言',
			fgo_唯一一次谎言_info: '当有角色对处于濒死状态的「<b><u>崔斯坦</u></b>」使用【桃】时，你可以弃置此牌，防止之。',
			ygo_光之圣剑丹内尔: '光之圣剑 丹内尔',
			ygo_光之圣剑丹内尔_info: '你只能装备一张【光之圣剑 丹内尔】。若你的攻击范围小于2，则你的攻击范围+1。①：攻击力上升场上的“勇者”怪兽的数量×500。②：当你失去装备区里的【光之圣剑 丹内尔】时，若此牌是因弃置而离开你的装备区，若你是“圣骑士”或“勇者”怪兽，你可以将此牌置于你的装备区。',
		},
		list: [],
	};
	for (var i in list.card) {
		if (typeof list.card[i].image != 'string') list.card[i].image = `ext:萌将坛/card/ygoNobleArms/${i}.jpg`;
	}
	return list;
});

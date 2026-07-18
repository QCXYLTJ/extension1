import { lib, game, ui, get, ai, _status } from '../../../noname.js';
game.import('card', function (lib, game, ui, get, ai, _status) {
	var mrfzcard = {
		name: 'mrfzcard',
		connect: true,
		card: {
			//稀音的镜头
			jingtouE1mrfz: {
				image: 'ext:驶舰之向/image/card/jingtouE1mrfz.jpg',
				type: 'equip',
				subtype: 'equip1',
				distance: {
					attackFrom: 1,
				},
				async onLose(event, trigger, player) {
					const hs = player.getCards('h', (card) => get.is.shownCard(card));
					if (hs.length > 0) {
						player.hideShownCards(hs);
					}
				},
				equipDelay: false,
				loseDelay: false,
				skills: ['jingtoumrfz_skill'],
				ai: {
					basic: {
						equipValue: -1,
					},
					result: {
						target: (player, target, card) => get.equipResult(player, target, card.name),
					},
				},
				enable: true,
				selectTarget: -1,
				filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
				modTarget: true,
				allowMultiple: false,
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true,
			},
			jingtouE2mrfz: {
				image: 'ext:驶舰之向/image/card/jingtouE2mrfz.jpg',
				type: 'equip',
				subtype: 'equip2',
				async onLose(event, trigger, player) {
					const hs = player.getCards('h', (card) => get.is.shownCard(card));
					if (hs.length > 0) {
						player.hideShownCards(hs);
					}
				},
				equipDelay: false,
				loseDelay: false,
				skills: ['jingtoumrfz_skill'],
				ai: {
					basic: {
						equipValue: -1,
					},
					result: {
						target: (player, target, card) => get.equipResult(player, target, card.name),
					},
				},
				enable: true,
				selectTarget: -1,
				filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
				modTarget: true,
				allowMultiple: false,
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true,
			},
			jingtouE3mrfz: {
				image: 'ext:驶舰之向/image/card/jingtouE3mrfz.jpg',
				type: 'equip',
				subtype: 'equip3',
				distance: {
					globalTo: -1,
				},
				async onLose(event, trigger, player) {
					const hs = player.getCards('h', (card) => get.is.shownCard(card));
					if (hs.length > 0) {
						player.hideShownCards(hs);
					}
				},
				equipDelay: false,
				loseDelay: false,
				skills: ['jingtoumrfz_skill'],
				ai: {
					basic: {
						equipValue: -1,
					},
					result: {
						target: (player, target, card) => get.equipResult(player, target, card.name),
					},
				},
				enable: true,
				selectTarget: -1,
				filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
				modTarget: true,
				allowMultiple: false,
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true,
			},
			jingtouE4mrfz: {
				image: 'ext:驶舰之向/image/card/jingtouE4mrfz.jpg',
				type: 'equip',
				subtype: 'equip4',
				distance: {
					globalFrom: 1,
				},
				async onLose(event, trigger, player) {
					const hs = player.getCards('h', (card) => get.is.shownCard(card));
					if (hs.length > 0) {
						player.hideShownCards(hs);
					}
				},
				equipDelay: false,
				loseDelay: false,
				skills: ['jingtoumrfz_skill'],
				ai: {
					basic: {
						equipValue: -1,
					},
					result: {
						target: (player, target, card) => get.equipResult(player, target, card.name),
					},
				},
				enable: true,
				selectTarget: -1,
				filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
				modTarget: true,
				allowMultiple: false,
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true,
			},
			jingtouE5mrfz: {
				image: 'ext:驶舰之向/image/card/jingtouE5mrfz.jpg',
				type: 'equip',
				subtype: 'equip5',
				async onLose(event, trigger, player) {
					const hs = player.getCards('h', (card) => get.is.shownCard(card));
					if (hs.length > 0) {
						player.hideShownCards(hs);
					}
				},
				equipDelay: false,
				loseDelay: false,
				skills: ['jingtoumrfz_skill'],
				ai: {
					basic: {
						equipValue: -1,
					},
					result: {
						target: (player, target, card) => get.equipResult(player, target, card.name),
					},
				},
				enable: true,
				selectTarget: -1,
				filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
				modTarget: true,
				allowMultiple: false,
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true,
			},
			//天火的坠火
			sjzx_zhuihuomrfz: {
				image: 'ext:驶舰之向/image/card/sjzx_zhuihuomrfz.jpg',
				type: 'special_delay',
				allowDuplicate: true,
				blankCard: true,
				fullimage: true,
				wuxieable: false,
				effect() {
					'step 0';
					var card = event.cards[0];
					card.storage.sjzx_zhuihuomrfz = true;
					if (player.countCards('he') > 1)
						player.chooseToDiscard(2, 'he', '【坠火】:请选择弃置两张牌,选择取消则受到一点火焰伤害').set('ai', function (card) {
							var player = _status.event.player;
							if (
								player.hp < 2 &&
								player.countCards('hs', (card) => {
									return card.name == 'tao' || card.name == 'jiu';
								}) < 1
							)
								return -1;
							return 8 - get.value(card);
						});
					else {
						player.damage('fire', 'nosource');
						player.loseToDiscardpile(event.cards[0]);
						event.finish();
					}
					('step 1');
					if (result.cards?.length) {
						//game.log(player,'弃置了',result.cards);
						player.loseToDiscardpile(event.cards[0]);
					} else {
						player.damage('fire', 'nosource');
						player.loseToDiscardpile(event.cards[0]);
					}
				},
			},
			//莱伊的沙地兽
			shadishoumrfz: {
				image: 'ext:驶舰之向/image/card/shadishoumrfz.jpg',
				type: 'equip',
				subtype: 'equip2',
				equipDelay: false,
				loseDelay: false,
				skills: ['shadishoumrfz_skill'],
				ai: {
					basic: {
						equipValue: -1,
					},
					result: {
						target: (player, target, card) => get.equipResult(player, target, card.name),
					},
				},
				enable: true,
				selectTarget: -1,
				filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
				modTarget: true,
				allowMultiple: false,
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true,
			},
			//战车的DP-27
			DP27mrfz: {
				image: 'ext:驶舰之向/image/card/DP27mrfz.jpg',
				type: 'equip',
				subtype: 'equip1',
				distance: {
					attackFrom: -3,
				},
				skills: ['DP27mrfz_skill'],
				ai: {
					basic: {
						equipValue: 8,
					},
				},
			},
			//鸿雪的打字机
			dazijimrfz: {
				image: 'ext:驶舰之向/image/card/dazijimrfz.jpg',
				type: 'equip',
				subtype: 'equip1',
				distance: {
					attackFrom: -2,
				},
				ai: {
					basic: {
						equipValue: 5,
						order: 5,
						useful: 2,
						value: 5,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
				skills: ['dazijimrfzskill'],
				enable: true,
				selectTarget: -1,
				filterTarget(card, player, target) {
					return target == player;
				},
				modTarget: true,
				allowMultiple: false,
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true,
				fullimage: true,
			},
			//大铁老师的支援装备
			baitiemrfzcard1: {
				image: 'ext:驶舰之向/image/card/baitiemrfzcard1.jpg',
				type: 'equip',
				subtype: 'equip5',
				skills: ['baitiemrfzcard1_skill'],
				ai: {
					basic: {
						equipValue: 7,
					},
				},
			},
			baitiemrfzcard2: {
				image: 'ext:驶舰之向/image/card/baitiemrfzcard2.jpg',
				type: 'equip',
				subtype: 'equip5',
				skills: ['baitiemrfzcard2_skill'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			baitiemrfzcard3: {
				image: 'ext:驶舰之向/image/card/baitiemrfzcard3.jpg',
				type: 'equip',
				subtype: 'equip5',
				skills: ['baitiemrfzcard3_skill'],
				ai: {
					basic: {
						equipValue: 7.8,
					},
				},
			},
		},
		skill: {
			jingtoumrfz_skill: {
				mod: {
					inRangeOf(from, to) {
						return true;
					},
				},
				trigger: { player: ['gainAfter', 'equipAfter'] },
				forced: true,
				filter(event, player) {
					return player.countCards('h', (card) => !get.is.shownCard(card)) > 0;
				},
				content() {
					let hs = player.getCards('h', (card) => !get.is.shownCard(card));
					if (hs.length == 0) return;
					player.addShownCards(hs, 'visible_jingtoumrfz');
				},
			},
			dazijimrfzskill: {
				trigger: {
					player: 'useCard',
				},
				forced: true,
				filter(event, player) {
					if (!player.hasSkill('ruibimrfz')) return false;
					if (event.dazijimrfzskill_buff || !event.targets.length || player.hasSkill('dazijimrfz_buff')) return false;
					return event.card.name == 'sha';
				},
				content() {
					'step 0';
					player.addTempSkill('dazijimrfzskill_buff', 'phaseUseAfter');
					trigger.dazijimrfzskill_buff = player;
				},
				subSkill: {
					buff: {
						trigger: {
							global: 'useCardToTargeted',
						},
						charlotte: true,
						popup: false,
						lastDo: true,
						filter(event, player) {
							return event.parent.dazijimrfzskill_buff == player && event.targets.length == event.parent.triggeredTargets4.length;
						},
						content() {
							trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
							trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
						},
					},
				},
			},
			baitiemrfzcardad: { audio: 'ext:驶舰之向/audio:4' },
			baitiemrfzcard1_skill: {
				trigger: { source: 'damageBegin3' },
				filter(event, player) {
					return event.num > 1 && event.player != player;
				},
				prompt: '是否令此伤害+1？',
				content() {
					trigger.num++;
				},
			},
			baitiemrfzcard2_skill: {
				trigger: { player: 'phaseDiscardBefore' },
				forced: true,
				content() {
					var next = player.phaseUse();
					event.next.remove(next);
					trigger.next.push(next);
					game.log(player, '额外执行了一个出牌阶段');
					player.draw();
				},
			},
			baitiemrfzcard3_skill: {
				enable: 'phaseUse',
				filter(event, player) {
					return (
						player.getCards('h', function (card) {
							return get.tag(card, 'damage');
						}).length > player.countSkill('baitiemrfzcard3_skill')
					);
				},
				filterCard(card) {
					return get.tag(card, 'damage');
				},
				selectCard() {
					var player = _status.event.player;
					return player.countSkill('baitiemrfzcard3_skill') + 1;
				},
				filterTarget(card, player, target) {
					return target != player && player.inRange(target);
				},
				position: 'h',
				prompt() {
					var player = _status.event.player;
					return '你可以弃置' + (player.countSkill('baitiemrfzcard3_skill') + 1) + '张带有伤害类标签的牌并对攻击范围内的一名角色造成一点伤害';
				},
				content() {
					target.damage();
				},
				ai: {
					order: 6,
					result: {
						target: -1,
					},
				},
			},
			//DP27
			DP27mrfz_skill: {
				mod: {
					cardnature(card, player) {
						var history = player.getHistory('useCard'),
							tmp_bool = false;
						for (var i = 0; i < history.length; i++) {
							if (history[i].card.name == 'sha') {
								tmp_bool = true;
								break;
							}
						}
						if (!card.nature && card.name == 'sha' && tmp_bool) return 'fire';
					},
				},
				trigger: { player: 'useCard' },
				forced: true,
				firstDo: true,
				filter(event, player) {
					if (!event.card) return false;
					return event.card.name == 'sha';
				},
				content() {
					'step 0';
					var history = player.getHistory('useCard'),
						tmp_bool = false;
					for (var i = 0; i < history.length; i++) {
						if (!history[i - 1]) continue;
						if (history[i - 1].card.name == 'sha') {
							tmp_bool = true;
							break;
						}
					}
					if (tmp_bool == false) event.goto(1);
					else if (!trigger.card.nature) {
						trigger.card.nature = 'fire';
					}
					('step 1');
					if (game.hasNature(trigger.card)) {
						if (!trigger.baseDamage) trigger.baseDamage = 1;
						trigger.baseDamage += 1;
					}
				},
				group: 'DP27mrfz_skill_wushi',
				subSkill: {
					wushi: {
						trigger: {
							player: 'useCardToPlayered',
						},
						filter(event, player) {
							return event.card && event.card.name == 'sha' && event.card.nature;
						},
						forced: true,
						logTarget: 'target',
						content() {
							trigger.target.addTempSkill('qinggang2');
							trigger.target.storage.qinggang2.add(trigger.card);
							trigger.target.markSkill('qinggang2');
						},
						ai: {
							unequip: true,
							skillTagFilter(player, tag, arg) {
								if (arg && arg.name == 'sha' && game.hasNature(arg)) return true;
								return false;
							},
						},
					},
				},
			},
			//沙地兽
			shadishoumrfz_skill: {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.countCards('h') > 0;
				},
				filterCard: true,
				selectCard: 1,
				prompt: '是否发动【沙地兽】？',
				prompt2: '出牌阶段限一次,你可以弃置一张手牌,弃置【沙地兽】',
				check(card) {
					return 8 - get.value(card);
				},
				async content(event, trigger, player) {
					var equip = player.getCards('e', function (card) {
						return card.name == 'shadishoumrfz';
					});
					player.discard(equip);
				},
				ai: {
					order: 1,
					result: {
						player: 1,
					},
				},
			},
		},
		translate: {
			dazijimrfz: '打字机',
			dazijimrfz_info: '当你使用【杀】指定目标时,你可以令此【杀】结算两次.(此装备离开你的装备区时,销毁之)',
			baitiemrfzcardad: '支援装备',
			baitiemrfzcard1: '攻击型平台',
			baitiemrfzcard1_skill: '援备',
			baitiemrfzcard1_info: '当你造成至少两点伤害时,你可以令此伤害+1.',
			baitiemrfzcard2: '支援型平台',
			baitiemrfzcard2_skill: '援备',
			baitiemrfzcard2_info: '锁定技,弃牌阶段开始时,你摸一张牌并额外执行一个出牌阶段.',
			baitiemrfzcard3: '铁钳号',
			baitiemrfzcard3_skill: '援备',
			baitiemrfzcard3_info: '出牌阶段你可以弃置X张带有伤害类标签的牌,选择一名你攻击范围内的其他角色,对其造成一点伤害(X=此技能本回合使用数+1).',
			DP27mrfz: 'DP27',
			DP27mrfz_skill: 'DP27',
			DP27mrfz_info: '①锁定技,若你于本回合使用过【杀】,则你的非属性【杀】均视为火【杀】.②锁定技,你的属性杀无视防具且伤害基数+1.',
			shadishoumrfz: '沙地兽',
			shadishoumrfz_skill: '沙地兽',
			shadishoumrfz_info: '①锁定技,当此牌不因交换装备或移动离开你的装备区时,销毁之.②出牌阶段限一次,你可以弃置一张手牌并弃置此牌.',
			sjzx_zhuihuomrfz: '天坠之火',
			sjzx_zhuihuomrfz_info: '因【坠火】而置入判定区的牌可重复存在.判定阶段开始时,你须选择弃置两张牌或受到一点火焰伤害,将此牌置入弃牌堆.',
			jingtouE1mrfz: '镜头',
			jingtouE2mrfz: '镜头',
			jingtouE3mrfz: '镜头',
			jingtouE4mrfz: '镜头',
			jingtouE5mrfz: '镜头',
			jingtoumrfz_skill: '镜头',
			jingtouE1mrfz_info: '锁定技,你的手牌始终明置;你始终视为在其他角色的攻击范围内;此牌离开你的装备区时,销毁之.',
			jingtouE2mrfz_info: '锁定技,你的手牌始终明置;你始终视为在其他角色的攻击范围内;此牌离开你的装备区时,销毁之.',
			jingtouE3mrfz_info: '锁定技,你的手牌始终明置;你始终视为在其他角色的攻击范围内;此牌离开你的装备区时,销毁之.',
			jingtouE4mrfz_info: '锁定技,你的手牌始终明置;你始终视为在其他角色的攻击范围内;此牌离开你的装备区时,销毁之.',
			jingtouE5mrfz_info: '锁定技,你的手牌始终明置;你始终视为在其他角色的攻击范围内;此牌离开你的装备区时,销毁之.',
			visible_jingtoumrfz: '明置',
		},
	};
	lib.translate['mrfzcard_card_config'] = '驶舰之向';
	lib.config.all.cards.add('mrfzcard');
	lib.config.cards.add('mrfzcard');
	return mrfzcard;
});

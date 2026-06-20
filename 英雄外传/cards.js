'use strict';
window.reWZ_import(function (lib, game, ui, get, ai, _status) {
	game.import('card', function () {
		var YXWZ = {
			name: 'YXWZ',
			connect: true,
			card: {
				xiuluolianyuji: {
					type: "equip",
					subtype: "equip1",
					fullskin: true,
					distance: { attackFrom: -3 },
					skills: ['xiuluolianyuji'],
					ai: {
						equipValue: 9
					}
				},
				yxshuaqiang: {
					type: "equip",
					fullskin: true,
					subtype: "equip1",
					distance: { attackFrom: -2 },
					skills: ['yxshuaqiang'],
					ai: {
						equipValue: 9
					}
				},
				wangzhezhijian: {
					fullimage: true,
					fullskin: true,
					type: "equip",
					subtype: "equip1",
					distance: { attackFrom: -1 },
					skills: ['wangzhezhijian'],
					ai: {
						equipValue: 9
					}
				},
				wuzhui: {
					fullskin: true,
					type: 'equip',
					subtype: 'equip4',
					distance: { globalFrom: -1 },
				},
				shengbei: {
					fullskin: true,
					type: 'equip',
					subtype: 'equip5',
					ai: {
						basic: {
							equipValue: 6.5
						}
					},
					skills: ['shengbei']
				},
				tianlongpochengji: {
					type: "equip",
					subtype: "equip1",
					fullskin: true,
					distance: { attackFrom: -4 },
					skills: ['tianlongpochengji'],
					ai: {
						equipValue: 9
					}
				},
			},
			skill: {
				xiuluolianyuji: {
					mod: {
						selectTarget(card, player, range) {
							if (card.name != 'sha') return;
							if (range[1] == -1) return;
							range[1] = Infinity;
						}
					},
					trigger: { source: 'damageBegin1' },
					forced: true,
					filter(event, player) {
						return event.card && event.card.name == 'sha';
					},
					content() {
						trigger.num++;
						trigger.xiuluolianyuji = true;
						trigger.player.addSkill('xiuluolianyuji2');
					}
				},
				xiuluolianyuji2: {
					equipSkill: true,
					trigger: { player: 'damageEnd' },
					forced: true,
					popup: false,
					content() {
						if (trigger.xiuluolianyuji) player.recover();
						player.removeSkill('xiuluolianyuji2');
					}
				},
				wangzhezhijian: {
					equipSkill: true,
					trigger: {
						player: "useCardToPlayered",
					},
					filter(event, player) {
						if (event._notrigger.includes(event.player)) return false;
						return event.card && event.card.name == 'sha' && event.player.isAlive();
					},
					logTarget: "player",
					content() {
						player.chooseUseTarget('视为使用一张【决斗】', { name: 'juedou' }, false);
					},
				},
				shengbei: {
					equipSkill: true,
					mod: {
						ignoredHandcard(card, player) {
							if (get.type(card) != 'trick' && get.type(card) != 'equip' && get.type(card) != 'delay') {
								return true;
							}
						},
						cardDiscardable(card, player, name) {
							if (name == 'phaseDiscard' && get.type(card) != 'trick' && get.type(card) != 'equip' && get.type(card) != 'delay') return false;
						}
					},
					trigger: {
						player: "phaseZhunbeiBegin",
					},
					forced: true,
					content() {
						player.recover();
					},
				},
				tianlongpochengji: {
					mod: {
						selectTarget(card, player, range) {
							if (card.name != 'sha') return;
							if (range[1] == -1) return;
							range[1] = Infinity;
						}
					},
					trigger: { player: "useCardToPlayered" },
					forced: true,
					filter(event, player) {
						return event.card && event.card.name == 'sha';
					},
					content() {
						trigger.tianlongpochengji = true;
						trigger.target.addTempSkill('tianlongpochengji2');
					}
				},
				tianlongpochengji2: {
					ai: { unequip2: true },
					init(player, skill) {
						player.addSkillBlocker(skill);
					},
					onremove(player, skill) {
						player.removeSkillBlocker(skill);
					},
					charlotte: true,
					skillBlocker(skill, player) {
						return !lib.skill[skill].charlotte;
					},
					mark: true,
					intro: {
						content(storage, player, skill) {
							var list = player.getSkills(null, false, false).filter(function (i) {
								return lib.skill.fengyin.skillBlocker(i, player);
							});
							if (list.length) return '失效技能:' + get.translation(list);
							return '无失效技能';
						},
					},
				},
				yxshuaqiang: {
					trigger: { player: 'shaMiss' },
					priority: -1,
					filter(event, player) {
						return event.target.countCards('he') > 0;
					},
					check(event, player) {
						return get.attitude(player, event.target) < 0;
					},
					content() {
						player.gainPlayerCard('he', trigger.target);
					}
				},
			},
			translate: {
				xiuluolianyuji2: '修罗炼狱戟',
				xiuluolianyuji: '修罗炼狱戟',
				xiuluolianyuji_info: '你使用【杀】可以额外指定任意名攻击范围内的其他角色为目标;锁定技,你使用【杀】造成的伤害+1,令受到伤害的角色回复1点体力',
				yxshuaqiang: '花枪',
				yxshuaqiang_info: '你使用的【杀】被其他角色抵消后,你可以获得该角色的一张牌.',
				wuzhui: '乌骓',
				wuzhui_bg: '-马',
				wuzhui_info: '锁定技,你计算与其他角色的距离-1.',
				tianlongpochengji: '天龙破城戟',
				tianlongpochengji2: '封',
				tianlongpochengji_info: '你使用【杀】可以额外指定任意名攻击范围内的其他角色为目标;锁定技,你使用【杀】指定目标后,你令其防具和所有技能失效直到回合结束.',
				wangzhezhijian: '王者之剑',
				wangzhezhijian_info: '当你使用【杀】指定目标后,你视为使用一张【决斗】.',
				shengbei: '圣杯',
				shengbei_info: '准备阶段,你回复1点体力;你的基本牌不计入手牌上限.',
			},
			list: [//牌堆
				["diamond", "12", "xiuluolianyuji"],
				["heart", "7", "yxshuaqiang"],
				["club", "6", "wuzhui"],
				["spade", "8", "tianlongpochengji"],
				["spade", "1", "wangzhezhijian"],
				["heart", "6", "shengbei"],
			],
		};
		for (var i in YXWZ.card) {
			YXWZ.card[i].image = `ext:英雄外传/image/${i}.jpg`;
		}
		lib.translate['YXWZ_card_config'] = '外传卡牌';
		lib.config.all.cards.add('YXWZ');
		lib.config.cards.add('YXWZ');
		return YXWZ;
	});
});
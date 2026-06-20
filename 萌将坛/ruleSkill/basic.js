'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqhBuff_jifei: {
				charlotte: true,
				mod: {
					cardEnabled2(card, player) {
						if (get.position(card) === 'h') return false;
					},
					cardSavable(card, player) {
						if (get.position(card) === 'h') return false;
					},
				},
				init(player, skill) {
					player.addSkillBlocker(skill);
				},
				onremove(player, skill) {
					player.removeSkillBlocker(skill);
				},
				skillBlocker(skill, player) {
					return !lib.skill[skill].persevereSkill && !lib.skill[skill].charlotte && !get.is.locked(skill, player);
				},
				mark: true,
				marktext: '浮空',
				intro: {
					markcount: () => 0,
					content() {
						return;
					},
				},
				intro: {
					content(storage, player, skill) {
						var list = player.getSkills(null, false, false).filter(function (i) {
							return lib.skill[skill].skillBlocker(i, player);
						});
						var prompt = '●不能使用或打出手牌<br/>●';
						if (list.length) prompt += '失效技能:' + get.translation(list);
						else prompt += '无失效技能';
						return prompt;
					},
				},
			},
			scqh_liuxue: {
				atlas: true,
				charlotte: true,
				buffSkill: true,
				markimage: 'extension/' + lib.scqhExtension + '/skin/mark/scqh_liuxue.png',
				intro: {
					content(storage, player, skill) {
						let mark = player.scqh_getBuff(skill);
						return get.translation(mark);
					},
					markcount(storage, player) {
						let mark = player.scqh_getBuff('scqh_liuxue');
						return mark;
					},
				},
				group: ['scqh_liuxue_yes'],
				subSkill: {
					yes: {
						forced: true,
						trigger: {
							player: 'phaseJieshuBegin',
						},
						filter(trigger, player) {
							var mark = player.scqh_getBuff('scqh_liuxue');
							return mark > 0;
						},
						content() {
							var mark = player.scqh_getBuff('scqh_liuxue');
							player.scqh_removeBuff('scqh_liuxue');
							var hs = player.getCards('h');
							if (hs.length) player.discard(hs.randomGets(mark));
							else player.loseHp(mark);
						},
					},
				},
			},
			scqh_zhongshang: {
				atlas: true,
				charlotte: true,
				buffSkill: true,
				markimage: 'extension/' + lib.scqhExtension + '/skin/mark/scqh_zhongshang.png',
				intro: {
					content(storage, player, skill) {
						let mark = player.scqh_getBuff(skill);
						return get.translation(mark);
					},
					markcount(storage, player) {
						let mark = player.scqh_getBuff('scqh_zhongshang');
						return mark;
					},
				},
				group: ['scqh_zhongshang_yes'],
				subSkill: {
					yes: {
						forced: true,
						trigger: {
							player: 'recoverBegin',
						},
						filter(trigger, player) {
							let mark = player.scqh_getBuff('scqh_zhongshang');
							return mark > 0 && trigger.num > 0;
						},
						content() {
							player.scqh_removeBuff('scqh_zhongshang');
							trigger.num -= 1;
						},
					},
				},
			},
			scqh_manyi: {
				atlas: true,
				audio: 'manyi',
				forced: true,
				trigger: {
					target: 'useCardToBefore',
				},
				filter(trigger, player) {
					return trigger.card.name == 'nanman';
				},
				content() {
					trigger.cancel();
				},
				ai: {
					effect: {
						target(card) {
							if (card.name == 'nanman') return 'zerotarget';
						},
					},
				},
				mod: {
					targetEnabled(card, player, target, now) {
						if (card.name == 'nanman') return false;
					},
				},
			},
		},
		translate: {
			scqhBuff_jifei: '浮空',
			scqhBuff_jifei_info: '不能使用或打出手牌且非锁定技失效.',
			_scqh_dying: '阻止濒死结算',
			_scqh_移动距离: '移动距离',
			scqh_manyi: '蛮裔',
			scqh_manyi_info: '锁定技.①【南蛮入侵】对你无效.②你不能成为【南蛮入侵】的目标.',
			scqh_zhongshang: '重伤',
			scqh_zhongshang_info: '锁定技.回复体力时,回复量-1.',
			scqh_liuxue: '流血',
			scqh_liuxue_info: '锁定技.结束阶段,随机弃置Ｘ张手牌,若你没有手牌,则改为流失Ｘ点体力(Ｘ为你的<流血>层数).',
		},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

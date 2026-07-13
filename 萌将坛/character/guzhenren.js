'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			scqhGu_gushi: {
				charlotte: true,
				derivation: ['scqhGu_guxian'],
				init(player, skill) {
					player.removeSkill(skill);
				},
			},
			scqhGu_guxian: {
				charlotte: true,
				init(player, skill) {
					player.removeSkill(skill);
				},
			},
			scqhGu_lengyan: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return target != player && target.countCards('h');
				},
				content() {
					'step 0';
					var cards = target.getCards('h');
					var chooseButton = player.chooseButton([1, 3], [get.translation(target.name) + '的手牌', cards]);
					chooseButton.set('target', target);
					chooseButton.set('ai', function (button) {
						var player = _status.event.player;
						var target = _status.event.target;
						var card = button.link;
						var val = get.value(card, target) || 1;
						return val;
					});
					chooseButton.set('filterButton', function (button) {
						var buttons = ui.selected.buttons || [];
						var card = button.link;
						var skillname = 'scqhGu_lengyan_fengyin';
						if (card.hasGaintag(skillname)) return false;
						for (var but of buttons) {
							var cardx = but.link;
							if (card.suit === cardx.suit) return false;
						}
						return true;
					});
					('step 1');
					if (result.links?.length) {
						var cards = result.links || [];
						var skillname = 'scqhGu_lengyan_fengyin';
						target.addGaintag(cards, skillname);
					}
				},
				ai: {
					order: 13,
					result: {
						target(player, target, card) {
							const att = get.attitude(player, target);
							return 1 - att;
						},
					},
				},
				global: ['scqhGu_lengyan_fengyin'],
				subSkill: {
					fengyin: {
						name: '❄️',
						mod: {
							cardEnabled2(card, player) {
								if (get.itemtype(card) == 'card' && card.hasGaintag('scqhGu_lengyan_fengyin')) return false;
							},
						},
						forced: true,
						trigger: {
							player: 'loseAfter',
							global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
						},
						filter(trigger, player) {
							var skillname = 'scqhGu_lengyan_fengyin';
							var evt = trigger.getl(player);
							if (!evt || !evt.hs || !evt.hs.length) return false;
							for (let i in evt.gaintag_map) {
								if (evt.gaintag_map[i].includes(skillname)) return true;
							}
							return false;
						},
						content() {
							player.loseHp();
						},
						_priority: 0,
					},
				},
				_priority: 0,
			},
			scqhGu_chebing: {
				trigger: {
					player: 'shaHit',
				},
				logTarget: 'target',
				filter(trigger, player) {
					return trigger.target && trigger.target.isIn();
				},
				check(trigger, player) {
					const target = trigger.target;
					const att = get.attitude(player, target);
					return att <= 0;
				},
				content() {
					trigger.target.damage('ice');
				},
				_priority: 0,
			},
			scqhGu_baixiang: {
				popup: false,
				log: false,
				trigger: {
					global: 'phaseZhunbei',
				},
				filter(trigger, player) {
					return true;
					return player.countCards('he');
				},
				cost: async function (event, trigger, player) {
					const skillname = 'scqhGu_baixiang';
					let num = player.countCards('h');
					if (num > 0) num = Math.floor(num / 2);
					let prompt = '';
					if (num > 0) {
						prompt += '弃置';
						prompt += get.cnNumber(num);
						prompt += '张牌,';
					}
					prompt += '摸';
					if (num % 2 === 0) {
						let num2 = num + 1;
						prompt += get.cnNumber(num2);
						prompt += '张牌';
					} else {
						prompt += get.cnNumber(num);
						prompt += '张牌并且回复一点体力';
					}
					if (num > 0) {
						event.result = await player
							.chooseToDiscard(num, 'he', function (card, player) {
								return true;
							})
							.set('prompt', get.prompt(skillname))
							.set('prompt2', prompt)
							.set('ai', function (card) {
								const player = _status.event.player;
								return 7 - get.value(card);
							})
							.forResult();
					} else {
						event.result = await player
							.chooseBool()
							.set('prompt', get.prompt(skillname))
							.set('prompt2', prompt)
							.set('ai', function () {
								return 1;
							})
							.forResult();
					}
				},
				content: async function (event, trigger, player) {
					const cards = event.cards || [];
					let huixue = false;
					let num = cards.length;
					if (num % 2 === 0) {
						num++;
					} else huixue = true;
					if (num > 0) await player.draw(num);
					if (huixue) await player.recover();
				},
				_priority: 0,
			},
		},
		translate: {
			scqhGu_gushi: '蛊师',
			scqhGu_gushi_info: ['希望开窍,蛊师九转,一至五转为凡,六转为仙,九转为尊;蛊师可以【炼蛊】、【用蛊】、【养蛊】.', '●暂时未制作蛊师系统'].join('</br>'),
			scqhGu_guxian: '蛊仙',
			scqhGu_lengyan: '冷眼',
			scqhGu_lengyan_info: '出牌阶段限一次,你可以观看一名其他角色的手牌,你可以选择其中一至三张花色不同的牌,这些牌不能被使用或打出;当该角色失去这些手牌后,其流失一点体力.',
			scqhGu_chebing: '彻冰',
			scqhGu_chebing_info: '当你使用【杀】命中目标(其他角色)时,你可以对其造成一点冰属性伤害.',
			scqhGu_baixiang: '白相',
			scqhGu_baixiang_info: '一名角色的准备阶段,你可以弃置Ｘ张牌,摸Ｘ张牌,若Ｘ是:●偶数,则多摸一张牌;●奇数,则回复一点体力(Ｘ为你的手牌数的一半且向下取整).',
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

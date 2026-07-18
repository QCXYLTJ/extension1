import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
/** @type { importCharacterConfig.skill } */
const skills = {
	SoulTree: {
		subSkill: {
			Stamina: {
				trigger: {
					player: ['changeHp', 'phaseBegin'],
					source: 'damageSource',
				},
				_priority: 11,
				forced: true,
				popup: false,
				filter(event, player, name) {
					const storage = player.storage.SoulTree_Stamina;
					return (player.isDamaged() && storage.num == 5) || (name != 'changeHp' && storage.num < 5);
				},
				content() {
					const storage = player.storage.SoulTree_Stamina;
					if (['phaseBegin', 'damageSource'].includes(event.triggername)) {
						player.storage.SoulTree_Stamina.num = Math.min(5, storage.num + (trigger.num || 1));
					}
					if (event.triggername == 'changHp' || (player.isDamaged() && storage.num == 5)) {
						player.popup('体力', 'green');
						player.recover();
						storage.rec++;
						storage.num = player.getStamina();
					}
					player.markSkill('SoulTree_Stamina');
				},
				charlotte: true,
				mark: true,
				markimage: 'extension/BLEACH/files/soultree/Stamina.png',
				init(player, skill) {
					if (!player.storage[skill])
						player.storage[skill] = {
							num: player.getStamina(),
							rec: 0,
						};
				},
				intro: {
					name: '体力',
					content(storage, player) {
						let str = lib.translate.Stamina_info;
						str += '<li>回复体力值:' + get.translation(storage.rec);
						return str;
					},
					markcount(storage, player) {
						if (storage.num == 5) return 1;
						return storage.num + '/5';
					},
				},
			},
			Attack: {
				mod: {
					aiOrder(player, card, num) {
						if (player.storage.SoulTree_Attack == 4 && (card.name == 'sha' || card.name == 'bleach_card_cero')) {
							return num + 10;
						}
					},
				},
				trigger: {
					player: 'useCard1',
				},
				_priority: 12,
				forced: true,
				popup: false,
				content() {
					'step 0';
					player.storage.SoulTree_Attack++;
					if (player.storage.SoulTree_Attack == 5) {
						if (trigger.card.name == 'sha' || trigger.card.name == 'bleach_card_cero') {
							player.popup('攻击', 'fire');
							game.log(trigger.card, '因', '#g【攻击】', '不计入次数上限且伤害+1');
							if (trigger.addCount !== false) {
								trigger.addCount = false;
								const stat = player.stat[player.stat.length - 1].card;
								if (typeof stat[trigger.card.name] === 'number') stat[trigger.card.name]--;
							}
							trigger.baseDamage++;
							game.log(trigger.card, '因', '#g【攻击】', '使伤害值+1');
						}
						player.storage.SoulTree_Attack = player.getAttacks();
					}
					('step 1');
					player.markSkill('SoulTree_Attack');
				},
				charlotte: true,
				mark: true,
				markimage: 'extension/BLEACH/files/soultree/Attack.png',
				init(player, skill) {
					if (!player.storage[skill]) player.storage[skill] = player.getAttacks();
				},
				intro: {
					name: '攻击',
					content(storage, player) {
						var str = '下第' + get.translation(5 - (storage % 5)) + '张牌若为【杀】或【虚闪】则不计入次数限制且伤害+1';
						if (player.hasSkill('yigongdaishou')) {
							const num = player.storage.yigongdaishou;
							const i = Math.min(8, Math.floor(num / 2));
							str += '<li>化劲总和-' + ['隐元', '洞明', '瑶光', '开阳', '玉衡', '天权', '天玑', '天璇', '天枢'][i] + '境:' + get.translation(num);
						}
						return str;
					},
					markcount(storage) {
						return (storage % 5) + '/4';
					},
				},
			},
			Defense: {
				mod: {
					maxHandcard(player, num) {
						if (!player.storage.SoulTree_Defense || player.hasSkill('SoulTree_Defense_effect')) return num + 1;
					},
				},
				trigger: {
					player: ['damageEnd', 'phaseDiscardAfter'],
					global: 'phaseAfter',
				},
				_priority: 13,
				forced: true,
				filter(event, player) {
					const storage = player.storage.SoulTree_Defense;
					if (event.name == 'damage') return storage.cd == 0;
					return (event.name != 'phaseDiscard' && storage.cd > 0) || (event.name == 'phaseDiscard' && player.countCards('h') > player.hp);
				},
				popup: false,
				content() {
					'step 0';
					var storage = player.storage.SoulTree_Defense;
					if (trigger.name == 'damage') {
						player.popup('防御', 'water');
						storage.cd = player.getDefense();
						player.addSkill('SoulTree_Defense_effect');
					}
					if (trigger.name == 'phaseDiscard') {
						storage.hs++;
					} else {
						storage.cd--;
					}
					('step 1');
					player.markSkill('SoulTree_Defense');
					if (player.storage.SoulTree_Defense.cd == 0) {
						player.removeSkill('SoulTree_Defense_effect');
					}
				},
				init(player, skill) {
					if (!player.storage[skill])
						player.storage[skill] = {
							cd: 0,
							hs: 0,
							num: 0,
						};
				},
				charlotte: true,
				mark: true,
				markimage: 'extension/BLEACH/files/soultree/Defense.png',
				intro: {
					name: '防御',
					markcount(storage) {
						return storage.cd;
					},
					content(storage, player) {
						var str = '受伤后减少下次伤害值;';
						if (storage.cd > 0 && !player.hasSkill('SoulTree_Defense_effect')) str += '<font color=#808080>手牌上限不可用</font>';
						else str += '你的手牌上限+1';
						str += '<li>已抵挡伤害值:' + get.translation(storage.num || 0) + '<li>额外保留手牌数:' + get.translation(storage.hs || 0) + '<li>当前状态:';
						if (player.hasSkill('SoulTree_Defense_effect')) str += '可抵挡';
						else if (storage.cd) str += '冷却中';
						else str += '未触发';
						return str;
					},
				},
			},
			Defense_effect: {
				trigger: {
					global: 'damageBegin1',
				},
				_priority: 13,
				forced: true,
				charlotte: true,
				filter(event, player) {
					return event.player == player;
				},
				content() {
					player.popup('防御', 'water');
					var num = trigger.num > player.hp ? 2 : 1;
					trigger.num -= num;
					player.storage.SoulTree_Defense.num += num;
					player.removeSkill('SoulTree_Defense_effect');
					game.log(player, '因', '#g【防御】', '效果使受到的伤害-', num);
				},
			},
			Focus: {
				trigger: {
					source: 'damageBegin1',
				},
				_priority: -14,
				forced: true,
				popup: false,
				content() {
					if (lib.skill.SoulTree_Focus.judgeFocus(player)) {
						trigger.SoulTree_Focus = true;
						var num2 = trigger.num;
						if (player.hasSkill('zhuguanghushou')) {
							player.popup('珠光护手', 'orange');
							player.storage.zhuguanghushou += num2;
							num2 += num2;
							game.log(player, '因', '#g【珠光护手】', '将会心伤害提升至', num2);
						}
						trigger.num += num2;
						player.storage.SoulTree_Focus.dmgs += num2;
					}
				},
				judgeFocus(player, str) {
					var storage = player.storage.SoulTree_Focus;
					const num = player.getFocus() + storage.num;
					if (num > Math.ceil(Math.random() * 100)) {
						if (typeof str != 'string') str = '会心';
						player.popup(str, 'orange');
						var prompt = '';
						switch (str) {
							case '会心':
								prompt = '使伤害翻倍';
								break;
							case '易损':
								prompt = '额外结算一次';
								break;
							case '会心防守':
								prompt = '减少1点伤害';
								break;
							case '会心治疗':
								prompt = '使回复和护盾翻倍';
								break;
						}
						game.log(player, '因', num, '%概率触发', '#g【' + str + '】', prompt);
						storage.num = 0;
						storage.nums++;
						player.markSkill('SoulTree_Focus');
						return true;
					} else {
						storage.num += player.getAddFocus();
					}
					return false;
				},
				charlotte: true,
				mark: true,
				markimage: 'extension/BLEACH/files/soultree/Focus.png',
				init(player, skill) {
					if (!player.storage[skill])
						player.storage[skill] = {
							num: 0,
							nums: 0,
							dmgs: 0,
						};
				},
				intro: {
					name: '会心',
					markcount(storage) {
						return storage.nums;
					},
					content(storage, player) {
						var str = '会心几率:<font color=orange>' + get.translation(player.getFocus()) + '%</font>(<font color=skyblue>+' + get.translation(storage.num) + '%</font>)';
						str += '<li>会心伤害总和:' + get.translation(storage.dmgs);
						const list = ['yisun', 'huixinfangshou', 'linghunhongxi', 'huixinzhiliao', 'zhuguanghushou'];
						const prompt = ['易损', '会心防御', '会心吸血', '会心治疗', '珠光护手伤害'];
						for (var i = 0; i < list.length; i++) {
							if (player.hasSkill(list[i])) str += '<li>' + prompt[i] + '总和:' + get.translation(player.storage[list[i]] || 0);
						}
						return str;
					},
				},
			},
			SpiriualPressure: {
				trigger: {
					player: ['gainAfter', 'phaseDrawBegin2'],
					global: ['loseAfter', 'loseAsyncAfter'],
				},
				_priority: 15,
				forced: true,
				popup: false,
				filter(event, player) {
					if (event.name == 'lose') {
						if (event.type != 'discard' || event.player == player) return false;
						if ((event.discarder || event.getParent(2).player) != player) return false;
						const evt = event.getl(event.player);
						return evt?.cards2?.length;
					} else if (event.type == 'discard') {
						if (!event.discarder) return false;
						return game.hasPlayer((current) => {
							const evt = event.getl(current);
							return current != event.discarder && evt?.cards2?.length;
						});
					}
					return event.name == 'gain' || (!event.numFixed && player.storage.SoulTree_SpiriualPressure.num >= 5);
				},
				content() {
					'step 0';
					let storage = player.storage.SoulTree_SpiriualPressure;
					if (trigger.name == 'phaseDraw') {
						player.popup('灵压', 'thunder');
						const num = Math.floor(storage.num / 5);
						storage.num -= num * 5 - player.getSpiriualPressure();
						storage.draw += num;
						trigger.num += num;
						game.log(player, '因', '#g【灵压】', '多摸了', num, '张牌');
					} else {
						storage.num++;
					}
					('step 1');
					player.markSkill('SoulTree_SpiriualPressure');
				},
				charlotte: true,
				mark: true,
				markimage: 'extension/BLEACH/files/soultree/SpiriualPressure.png',
				init(player, skill) {
					if (!player.storage[skill])
						player.storage[skill] = {
							num: player.getSpiriualPressure(),
							draw: 0,
						};
				},
				intro: {
					name: '灵压',
					content(storage, player) {
						var str = '再获得牌或弃置其他角色牌' + get.translation(5 - (storage.num % 5)) + '次后,提供一张额外摸牌数';
						str += '<li>当前额外摸牌数:' + get.translation(Math.floor(storage.num / 5));
						str += '<li>灵压摸牌数总和:' + get.translation(storage.draw);
						return str;
					},
					markcount(storage) {
						if (storage.num >= 5) return Math.floor(storage.num / 5);
						return storage.num + '/5';
					},
				},
			},
		},
	},
	lucky: {
		intro: {
			name: '幸运',
			content: 'mark',
		},
		marktext: '<font color=cyan>幸</font>',
	},
	unlucky: {
		intro: {
			name: '不幸',
			content: 'mark',
		},
		marktext: '<font color=red>幸</font>',
	},
	immuneDeath: {
		trigger: {
			player: ['changeHp', 'dieBefore', 'loseMaxHpBefore'],
		},
		silent: true,
		firstDo: true,
		charlotte: true,
		filter(event, player) {
			if (event.name == 'loseMaxHp') return event.num >= player.maxHp;
			return event.name == 'die' || (event.num < 0 && player.hp <= Math.abs(event.num));
		},
		content() {
			if (trigger.num == 'die' || trigger.name == 'loseMaxHp') {
				trigger.cancel();
			} else {
				player.hp = 1;
				player.update();
			}
			game.log(player, '免疫了此次死亡');
		},
		ai: {
			effect: {
				target(card, player, target, current) {
					if (target.hp == 1 && get.tag(card, 'damage')) return 0;
				},
			},
		},
	},
	bleachHands: {
		charlotte: true,
		change(player, num) {
			player.addSkill('bleachHands');
			let info = player.storage;
			if (typeof info.bleachHands != 'number') info.bleachHands = 0;
			info.bleachHands += num;
			if (info.bleachHands == 0) player.unmarkSkill('bleachHands');
			else player.markSkill('bleachHands');
			if (num >= 0) game.log(player, '的手牌上限', '#y+' + num);
			else game.log(player, '的手牌上限', '#g' + num);
		},
		mod: {
			maxHandcard(player, num) {
				const add = player.storage.bleachHands;
				if (typeof add == 'number') return num + add;
			},
		},
		markimage: 'image/card/handcard.png',
		intro: {
			name: '手牌上限',
			content(num, player) {
				let str = '<li>手牌上限';
				if (num >= 0) str += '+';
				str += num;
				str += '<br><li>当前手牌上限:';
				str += player.getHandcardLimit();
				return str;
			},
		},
	},
	bleachMark: {
		subSkill: {
			up: {
				intro: {
					name: '灵溢',
					content(content, player) {
						var str = '<li>额定摸牌数+' + get.translation(content);
						if (player.hasSkillTag('bleachMarkUpForever')) str += '<li><span style="font-family: yuanli">-超越次元的灵压-</span>';
						else {
							var limit = player.storage.bleachMark_uod_limit[0];
							for (var i = 0; i < limit.length; i++) {
								var str2 = '<br>&nbsp;-第' + (i + 1) + '层剩余:' + limit[i] + '次-';
								str += str2;
							}
						}
						return str;
					},
				},
				marktext: '<font color=00FFFF>灵</font>',
				bleachBuff: true,
				bleachPositiveBuff: true,
				bleachBuffCanAdd: true,
				name: '灵溢',
				bleachBuffEffect: 3,
				description: '每层额定摸牌数+1;每层至多触发10次.',
			},
			down: {
				intro: {
					name: '灵衰',
					content(content, player) {
						var str = '<li>额定摸牌数-' + get.translation(content);
						var limit = player.storage.bleachMark_uod_limit[1];
						for (var i = 0; i < limit.length; i++) {
							var str2 = '<br>&nbsp;-第' + (i + 1) + '层剩余:' + limit[i] + '次-';
							str += str2;
						}
						return str;
					},
				},
				marktext: '<font color=FF0000>灵</font>',
				bleachBuff: true,
				bleachPositiveBuff: false,
				bleachBuffCanAdd: true,
				name: '灵衰',
				bleachBuffEffect: -3,
				description: '每层额定摸牌数-1;每层至多触发10次.',
			},
			shield: {
				marktext: '<font color=808080>盾</font>',
				bleachBuff: true,
				bleachPositiveBuff: true,
				bleachBuffCanAdd: true,
				name: '护盾',
				bleachBuffEffect: 3,
				intro: {
					name: '护盾',
					content(storage, player) {
						var str = '护盾可以抵消等量的伤害;当你拥有此效果时,手牌上限+1.';
						return str;
					},
				},
				description: '护盾可以抵消等量的伤害;当你拥有此效果时,手牌上限+1.',
			},
			weak: {
				marktext: '<font color=800080>虚</font>',
				markimage: 'extension/BLEACH/abnormal/bleachMark_weak.jpg',
				bleachBuff: true,
				bleachPositiveBuff: false,
				bleachBuffCanAdd: true,
				name: '虚弱',
				bleachBuffEffect(player, count) {
					return -count - 1.5;
				},
				intro: {
					name: '虚弱',
					content: '当你造成/受到伤害时或每回合结束,移去1层虚弱令此值+1/-1.',
				},
				description: '当你造成/受到伤害时或每回合结束,移去1层虚弱令此值+1/-1.',
			},
			fire: {
				marktext: '<font color=FF3333>烧</font>',
				markimage: 'extension/BLEACH/abnormal/bleachMark_fire.jpg',
				bleachBuff: true,
				bleachPositiveBuff: false,
				bleachBuffCanAdd: true,
				name: '烧伤',
				bleachBuffEffect(player, count) {
					if (player.countCards('h') > count) return -1.5;
					return -2;
				},
				intro: {
					name: '烧伤',
					content: '每回合结束时,移除1层此状态并随机弃置一张牌,若该牌为红色或未弃置牌,你受到1点无伤害来源的火焰伤害.',
					mark(dialog, storage, player) {
						if (player.hasSkillTag('zanjitsu_gokui')) {
							dialog.addText('残日狱衣');
							dialog.addText('它的热度有1500万° 你连碰都碰不到我');
							dialog.addText('你可以想象卍解之后的我 身体和刀刃都包裹着太阳');
						} else return '每回合结束时,移除1层此状态并随机弃置一张牌,若该牌为红色或未弃置牌,你受到1点无伤害来源的火焰伤害.';
					},
				},
				description: '每回合结束时,移除1层此状态并随机弃置一张牌,若该牌为红色或未弃置牌,你受到1点无伤害来源的火焰伤害.',
			},
			du: {
				marktext: '<font color=9400D3>毒</font>',
				markimage: 'extension/BLEACH/abnormal/bleachMark_du.jpg',
				bleachBuff: true,
				bleachPositiveBuff: false,
				bleachBuffCanAdd: true,
				name: '中毒',
				bleachBuffEffect(player) {
					if (player.hp >= 3) {
						return -1;
					}
					if (player.hp <= 1) {
						return -4;
					}
					return -2;
				},
				intro: {
					name: '中毒',
					content: '当你以正面向上失去♠️️牌时,或回复体力后,移除1层此状态并失去1点体力(仅限失去牌).',
				},
				description: '当你以正面向上失去♠️️牌时,或回复体力后,移除1层此状态并失去1点体力(仅限失去牌).',
			},
			ice: {
				marktext: '<font color=97CBFF>冰</font>',
				markimage: 'extension/BLEACH/abnormal/bleachMark_ice.jpg',
				bleachBuff: true,
				bleachPositiveBuff: false,
				bleachBuffCanAdd: true,
				name: '冻伤',
				bleachBuffEffect(player, count) {
					if (count == 3) return -5;
					return -1;
				},
				bleachAddEffectFilter(player) {
					return !player.hasSkillTag('bleachNoIceEffect');
				},
				addIce(player) {
					if (player.countMark('bleachMark_ice') > 3) {
						player.clearMark('bleachMark_ice');
						player.addSkill('bleachEffect_ice');
					}
				},
				intro: {
					name: '冻伤',
					content: '其他角色计算与你的距离时-#;当你受到火焰伤害后,移除1层此状态',
				},
				description: '每层其他角色计算与你的距离时-1;当你受到火焰伤害后,移除1层此状态.',
			},
			lieshang: {
				marktext: '<font color=FF6666>裂</font>',
				markimage: 'extension/BLEACH/abnormal/bleachMark_lieshang.jpg',
				bleachBuff: true,
				bleachPositiveBuff: false,
				bleachBuffCanAdd: true,
				name: '裂伤',
				bleachBuffEffect(player) {
					return get.effect(player, { name: 'losehp' }, player, player);
				},
				intro: {
					name: '裂伤',
					content: '当你使用「伤害」牌时,移除1层此状态,失去1点体力;回合结束时,移去1层此状态.',
				},
				description: '当你使用「伤害」牌时,移除1层此状态,失去1点体力;回合结束时,移去1层此状态.',
			},
			zhongshang: {
				marktext: '<font color=FF6666>伤</font>',
				markimage: 'extension/BLEACH/abnormal/bleachMark_zhongshang.jpg',
				bleachBuff: true,
				bleachPositiveBuff: false,
				bleachBuffCanAdd: true,
				name: '重伤',
				bleachBuffEffect: -2,
				intro: {
					name: '重伤',
					content: '当你回复体力时,每层状态抵消1点回复值.',
				},
				description: '当你回复体力时,每层状态抵消1点回复值.',
			},
			leizhe: {
				markimage: 'extension/BLEACH/abnormal/bleachMark_leizhe.jpg',
				bleachBuff: true,
				bleachPositiveBuff: false,
				bleachBuffCanAdd: true,
				name: '雷蛰',
				bleachBuffEffect: -1,
				bleachAddEffectFilter(player) {
					return player.countMark('bleachMark_leizhe') < 3;
				},
				intro: {
					name: '雷蜇',
					content: '积满时(至多3层),受到伤害消耗之令伤害+1.',
				},
				description: '积满时(至多3层),受到伤害消耗之令伤害+1.',
			},
			huofen: {
				markimage: 'extension/BLEACH/abnormal/bleachMark_huofen.jpg',
				bleachBuff: true,
				bleachPositiveBuff: false,
				bleachBuffCanAdd: true,
				name: '火焚',
				bleachBuffEffect: -1,
				bleachAddEffectFilter(player) {
					return player.countMark('bleachMark_huofen') < 4 && !player.hasMark('bleachMark_fire');
				},
				intro: {
					name: '火焚',
					content: '积满时(至多4层)转化为2层烧伤.',
				},
				description: '积满时(至多4层)转化为2层烧伤.',
			},
		},
	},
	bleachEffect: {
		subSkill: {
			break: {
				forced: true,
				mark: true,
				marktext: '<font color=FFFF00>破</font>',
				markimage: 'extension/BLEACH/abnormal/bleachEffect_break.jpg',
				charlotte: true,
				bleachBuff: true,
				bleachPositiveBuff: true,
				bleachBuffCanAdd: false,
				_priority: Infinity,
				popup: false,
				bleachBuffEffect: 4,
				name: '破防',
				intro: {
					name: '破防',
					content: '<li>你使用的伤害牌无视防具.<li>你造成的伤害无视且击碎等量护盾.',
				},
				description: '你使用的伤害牌无视防具;你造成的伤害无视且击碎等量护盾.',
				trigger: {
					source: 'damageBegin3',
				},
				filter(event, player) {
					return event.player.hujia > 0;
				},
				content() {
					player.popup('破防', 'orange');
					trigger.player
						.when({ player: 'damageEnd' })
						.assign({
							ai: {
								nohujia: true,
							},
						})
						.then(() => { });
					trigger.player.changeHujia(-Math.min(trigger.num, trigger.player.hujia));
					game.log(player, '打破了', trigger.player, '的护甲');
				},
				ai: {
					unequip: true,
					unequip: true,
					bleachGuardBreak: true,
					skillTagFilter(player, tag, arg) {
						if (tag == 'unequip') {
							if (arg && get.tag(arg.card, 'damage') && arg.target.getEquip(2)) return true;
							return false;
						} else if (tag == 'unequip') {
							if (!arg || !arg.card || !get.tag(arg.card, 'damage')) return false;
						}
					},
				},
			},
			mabi: {
				forced: true,
				mark: true,
				marktext: '<font color=87CEEB>麻</font>',
				markimage: 'extension/BLEACH/abnormal/bleachEffect_mabi.jpg',
				charlotte: true,
				bleachBuff: true,
				bleachPositiveBuff: false,
				bleachBuffCanAdd: false,
				_priority: Infinity,
				popup: false,
				name: '麻痹',
				bleachBuffEffect(player) {
					return -player.countCards('h') - 2;
				},
				trigger: {
					player: 'phaseEnd',
				},
				content() {
					player.removeBleachBuff('bleachEffect_mabi');
				},
				intro: {
					name: '麻痹',
					content: '你不能使用或打出手牌.回合结束时移除此状态.',
				},
				description: '你不能使用或打出手牌.回合结束时移除此状态.',
				ai: {
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) return [0, -999];
						},
					},
				},
				mod: {
					cardEnabled2(card, player) {
						if (get.position(card) == 'h') return false;
					},
				},
			},
			ice: {
				forced: true,
				mark: true,
				marktext: '<font color=97CBFF>冻</font>',
				markimage: 'extension/BLEACH/abnormal/bleachEffect_ice.jpg',
				charlotte: true,
				bleachBuff: true,
				bleachPositiveBuff: false,
				bleachBuffCanAdd: false,
				bleachBuffEffect(player) {
					return -player.countCards('h') - 2;
				},
				bleachAddEffectFilter(player) {
					return !player.hasSkillTag('bleachNoIceEffect');
				},
				_priority: Infinity,
				popup: false,
				name: '冻结',
				trigger: {
					player: ['phaseEnd'],
				},
				content() {
					player.removeBleachBuff('bleachEffect_ice');
				},
				mod: {
					cardEnabled: () => false,
					cardUsable: () => false,
					cardRespondable: () => false,
					cardSavable: () => false,
				},
				intro: {
					name: '冻结',
					content: '你不能使用或打出牌,其他角色计算与你的距离视为1.回合结束时移除此状态.',
				},
				description: '你不能使用或打出牌,其他角色计算与你的距离视为1.回合结束时移除此状态.',
				ai: {
					bleachNoIceEffect: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) return [0, -9999];
						},
					},
				},
			},
			qinshi: {
				forced: true,
				mark: true,
				marktext: '<font color=AFEEEE>侵</font>',
				markimage: 'extension/BLEACH/abnormal/bleachEffect_qinshi.jpg',
				charlotte: true,
				bleachBuff: true,
				bleachPositiveBuff: false,
				bleachBuffCanAdd: false,
				_priority: Infinity,
				popup: false,
				name: '侵食',
				bleachBuffEffect(player) {
					const list = player.getSkills(null, false, false).filter((i) => lib.skill.bleachEffect_qinshi.skillBlocker(i, player));
					if (list.length) return -list.length;
					return -2;
				},
				trigger: {
					player: 'phaseEnd',
				},
				init(player, skill) {
					player.addSkillBlocker(skill);
				},
				onremove(player, skill) {
					player.removeSkillBlocker(skill);
				},
				skillBlocker(skill, player) {
					return lib.skill[skill].abnormal;
				},
				content() {
					'step 0';
					player.popup('侵食', 'gray');
					player.removeBleachBuff('bleachEffect_qinshi');
					('step 1');
					const list = player.getSkills(null, false, false).filter((i) => {
						return lib.skill.bleachEffect_qinshi.skillBlocker(i, player);
					});
					if (list.length == 0) player.loseHp();
				},
				intro: {
					name: '侵食',
					content(storage, player, skill) {
						const list = player.getSkills(null, false, false).filter((i) => {
							return lib.skill.bleachEffect_qinshi.skillBlocker(i, player);
						});
						let str = '回合结束时移除此状态,若你没有失效异常,你失去1点体力.<li>失效异常:';
						if (list.length) str += get.translation(list);
						else str += '无';
						return str;
					},
				},
				description: '你的异常技能失效;回合结束时移除此状态,若你没有失效异常,你失去1点体力;施加者回复1点体力.',
			},
			wudi: {
				forced: true,
				mark: true,
				marktext: '<font color=FFFFFF>无</font>',
				markimage: 'extension/BLEACH/abnormal/bleachEffect_wudi.jpg',
				charlotte: true,
				bleachBuff: true,
				bleachPositiveBuff: true,
				bleachBuffCanAdd: false,
				_priority: Infinity,
				popup: false,
				name: '无敌',
				bleachBuffEffect: 5,
				trigger: {
					player: ['damageBegin4', 'phaseBegin'],
				},
				content() {
					if (trigger.name == 'damage') {
						trigger.cancel();
						player.popup('无敌');
						game.log(player, '因无敌状态免疫了伤害');
					} else {
						player.removeBleachBuff('bleachEffect_wudi');
					}
				},
				intro: {
					name: '无敌状态',
					content: '防止你受到伤害;回合开始时移除此状态.',
				},
				description: '防止你受到伤害;回合开始时移除此状态.',
				ai: {
					nodamage: true,
					threaten: 0.1,
					effect: {
						target(card, player, target, current) {
							if (get.tag(card, 'damage')) return 'zeroplayertarget';
						},
					},
				},
			},
			hunluan: {
				forced: true,
				mark: true,
				marktext: '<font color=F0E68C>混</font>',
				markimage: 'extension/BLEACH/abnormal/bleachEffect_hunluan.jpg',
				charlotte: true,
				bleachBuff: true,
				bleachPositiveBuff: false,
				bleachBuffCanAdd: false,
				_priority: Infinity,
				popup: false,
				name: '混乱',
				bleachBuffEffect(player) {
					if (game.players.length == 2) {
						return -9;
					}
					return -4;
				},
				trigger: {
					player: ['useCard2', 'phaseEnd'],
				},
				charlotte: true,
				content() {
					'step 0';
					if (trigger.name == 'phase') {
						player.removeBleachBuff('bleachEffect_hunluan');
						return;
					} else {
						if (get.tag(trigger.card, 'damage')) player.damage();
						if (trigger.targets.length == game.players.length) {
							trigger.targets.length = 0;
						} else {
							var targets = game.filterPlayer((current) => !trigger.targets.includes(current)).randomGets(trigger.targets.length);
							player.line(targets, 'green');
							trigger.targets.removeArray(trigger.targets);
							trigger.targets.addArray(targets);
							game.log(trigger.card, '的目标被改为了', targets);
						}
					}
				},
				intro: {
					name: '混乱',
					content: '你使用牌的目标时改为等量随机其他角色,你使用「伤害」牌时对自己造成1点伤害;回合结束时移除此状态.',
				},
				description: '你使用牌的目标时改为等量随机其他角色,你使用「伤害」牌时对自己造成1点伤害;回合结束时移除此状态.',
				ai: {
					effect: {
						player(card, player, target) {
							if (!card || !card.name) return;
							if (get.tag(card, 'damage')) return [1, -9];
							if (player.hasSkillTag('maixie') || player.hasSkillTag('maixie_hp')) {
								return [1, -0.5];
							}
							return [1, -1];
						},
					},
				},
			},
		},
	},
	bleach_off: {
		subSkill: {
			sha: {
				mod: {
					cardEnabled(card) {
						if (card.name == 'sha') return false;
					},
				},
				charlotte: true,
			},
			target: {
				mark: true,
				intro: {
					content: '不能对其他角色使用牌',
				},
				charlotte: true,
				mod: {
					playerEnabled(card, player, target) {
						if (player != target) return false;
					},
				},
			},
			skill: {
				init(player, skill) {
					player.addSkillBlocker(skill);
				},
				onremove(player, skill) {
					player.removeSkillBlocker(skill);
				},
				charlotte: true,
				skillBlocker(skill, player) {
					return !lib.skill[skill].persevereSkill && !lib.skill[skill].charlotte;
				},
				mark: true,
				marktext: '封',
				intro: {
					content(storage, player, skill) {
						const list = player.getSkills(null, false, false).filter((i) => {
							return lib.skill.bleach_off_skill.skillBlocker(i, player);
						});
						if (list.length) return '失效技能:' + get.translation(list);
						return '无失效技能';
					},
				},
			},
			forceSkill: {
				init(player, skill) {
					player.addSkillBlocker(skill);
				},
				onremove(player, skill) {
					player.removeSkillBlocker(skill);
				},
				charlotte: true,
				skillBlocker(skill, player) {
					return !lib.skill[skill].persevereSkill && !lib.skill[skill].charlotte && get.is.locked(skill, player);
				},
				mark: true,
				marktext: '封',
				intro: {
					content(storage, player, skill) {
						const list = player.getSkills(null, false, false).filter((i) => {
							return lib.skill.bleach_off_forceSkill.skillBlocker(i, player);
						});
						if (list.length) return '失效技能:' + get.translation(list);
						return '无失效技能';
					},
				},
			},
			card2: {
				mark: true,
				intro: {
					content: '不能使用或打出手牌',
				},
				charlotte: true,
				mod: {
					cardEnabled2(card, player) {
						if (get.position(card) == 'h') return false;
					},
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) return [0, -3];
						},
					},
				},
			},
			unequip: {
				ai: {
					unequip2: true,
				},
			},
		},
	},
	bleach_yuechong: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'phaseDrawBegin2',
		},
		filter(event, player) {
			return !event.numFixed && player.hasUseTarget({ name: 'sha' });
		},
		async cost(event, trigger, player) {
			const result = await player
				.chooseTarget(
					get.prompt2('bleach_yuechong'),
					(card, player, target) => {
						return player.canUse({ name: 'sha' }, target, false);
					},
					(target) => {
						const eff = get.effect(target, { name: 'sha' }, player, player);
						if (!player.skipList.includes('phaseUse')) return eff * 1.5;
						return eff;
					}
				)
				.forResult();
			event.result = result;
		},
		popup: false,
		async content(event, trigger, player) {
			const targets = event.targets;
			trigger.num--;
			if (player.hasSkill('bleach_benneng_status')) {
				game.playBleach(['bleach_benneng1', 'bleach_benneng2'].randomGet());
			}
			player.useCard({ name: 'sha' }, false, targets).set('oncard', (card) => {
				const color = player.storage.bleach_bankai ? [0, 0, 0] : [0, 255, 255];
				player.line(targets, { color: color });
			}).animate = false;
		},
	},
	bleach_bankai: {
		audio: 'ext:BLEACH/skill:6:mp3',
		logAudio: () => 0,
		derivation: ['bleach_lianxun', 'bleach_benneng'],
		trigger: {
			player: ['changeHp', 'gainAfter', 'loseAfter'],
		},
		juexingji: true,
		forced: true,
		popup: false,
		filter(event, player) {
			return (event.name == 'changeHp' && player.hp == 1) || (event.name != 'changeHp' && player.countCards('h') == 1);
		},
		effect(player) {
			player
				.when({ player: 'useCard' })
				.filter((evt) => evt.card.name == 'sha' && evt.cards.length)
				.then(() => {
					trigger.directHit.addArray(game.players);
					if (player.bleachIs(['bleach_heiqiyihu']) && !player.storage.bleach_benneng) {
						game.playBleach('bleach_bankai5');
					}
					player
						.when({ player: 'useCard' })
						.filter((evt) => evt != trigger && evt.card.name == 'sha' && evt.cards.length)
						.then(() => {
							trigger.directHit.addArray(game.players);
							if (player.bleachIs(['bleach_heiqiyihu']) && !player.storage.bleach_benneng) {
								game.playBleach('bleach_banka6');
							}
						});
				});
		},
		async content(event, trigger, player) {
			player.storage.bleach_bankai = true;
			player.awakenSkill('bleach_bankai');
			if (player.bleachIs(['bleach_heiqiyihu'])) {
				player.bleachAwaken('bleach_heiqiyihu', 1, 'NumberOne');
				game.mp417('ichigo_bankai');
				setTimeout(() => {
					player.$fullscreenpop('卍 解', 'water');
					game.playBleach('bleach_bankai3');
				}, 2300);
				setTimeout(() => {
					player.$fullscreenpop('天 锁 斩 月', 'black');
					game.playBleach('bleach_bankai4');
				}, 10000);
				player
					.when('changeHp')
					.filter((evt) => evt.num < 0 && player.hp <= 0)
					.then(() => {
						player.chat(['身体...动不了了!', '快动啊!'].randomGet());
						setTimeout(() => {
							player.chat('动啊!动啊、动啊、快动!');
						}, 1000);
					});
			} else {
			}
			await player.loseMaxHp();
			player.addBleachBuff('bleachMark_up');
			player.chooseDrawRecover(2, true);
			lib.skill.bleach_bankai.effect(player);
			player.addSkills(['bleach_lianxun', 'bleach_benneng']);
		},
	},
	bleach_bankai_monitor: {
		trigger: {
			global: ['changeHp', 'gainAfter', 'loseAfter'],
		},
		filter(event, player) {
			if (
				(() => {
					if (event.player == player) {
						if (!get.nameList(player).includes('bleach_heiqiyihu')) return false;
						return player.hasSkill('bleach_bankai');
					}
					return get.nameList(event.player, 'bleach_baiyihu') && event.player.hasSkill('bleach_newbankai');
				})()
			) {
				return (event.name == 'changeHp' && event.player.hp == 1) || (event.name != 'changeHp' && event.player.countCards('h') == 1);
			}
			return false;
		},
		firstDo: true,
		forced: true,
		charlotte: true,
		async content(event, trigger, player) {
			const players = game.filterPlayer((current) => {
				const names = get.nameList(current);
				return names.includes('bleach_heiqiyihu') || names.includes('bleach_baiyihu');
			});
			setTimeout(() => {
				game.playBleach('bleach_newbankai1');
				game.playBleach('bleach_bankai1');
				setTimeout(() => {
					game.switchBleachBackground('Innerworld');
				}, 900);
			}, 5000);
			game.mp417('ogihci_bankai');
			for (let current of players) {
				const bool = current.hasSkill('bleach_bankai') && !current.awakenedSkills.includes('bleach_bankai');
				current.awakenSkill(`bleach_${bool ? '' : 'new'}bankai`);
				current.bleachAwaken(`bleach_${bool ? 'heiqi' : 'bai'}yihu`, 1, bool ? 'Senna' : null);
				await current.loseMaxHp();
				current.chooseDrawRecover(2, true);
				if (bool) {
					current.removeSkill('bleach_bankai_monitor');
					current.addBleachBuff('bleachMark_up');
				}
				lib.skill[`bleach_${bool ? '' : 'new'}bankai`].effect(current);
				current.addSkills(bool ? ['bleach_lianxun', 'bleach_benneng'] : ['bleach_newyuechong', 'bleach_newbenneng']);
			}
		},
	},
	bleach_lianxun: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			target: 'useCardToTarget',
		},
		filter(event, player) {
			return event.player != player && event.player.countCards('h');
		},
		check(event, player) {
			return get.effect(player, event.card, event.player, player);
		},
		logTarget: 'player',
		async content(event, trigger, player) {
			const { cards } = await player.choosePlayerCard(trigger.player, 'h', true).forResult();
			player.showCards(cards);
			if (trigger.card.suit == cards[0].suit) {
				player.line(trigger.player, { color: [0, 0, 0] });
				trigger.parent.excluded.add(player);
			}
		},
		ai: {
			effect: {
				target(card, player, target, current) {
					if (get.attitude(player, target) > 0 || player.countCards('h') <= 1) return;
					const suit = card.suit,
						num = player.countCards('h', { suit: suit });
					if (num <= 1) return;
					if (num >= Math.floor(player.countCards('h') / 2)) return [1, 0.4];
				},
			},
		},
	},
	bleach_shunbu: {
		mod: {
			globalFrom(from, to, distance) {
				return distance - 1;
			},
		},
	},
	bleach_benneng: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'dieBefore',
		},
		juexingji: true,
		forced: true,
		content() {
			'step 0';
			player.storage.bleach_benneng = true;
			player.awakenSkill('bleach_benneng');
			player.bleachAwaken('bleach_heiqiyihu', 2, 'OnThePrecipiceOfDefeact');
			if (player.bleachIs(['bleach_heiqiyihu'])) {
				game.mp417('ichigo_halfhollow');
				setTimeout(() => {
					player.chat('哼...不是和你说了吗');
				}, 2500);
				setTimeout(() => {
					player.chat('要是你死了 我也会很困扰');
				}, 4500);
			}
			('step 1');
			player.setImmuneDeath();
			trigger.cancel();
			player.when({ player: 'phaseBegin' }).then(() => {
				player
					.when({ player: 'phaseBegin' })
					.filter((evt) => evt != trigger)
					.then(() => {
						const targets = player.getEnemies();
						for (let target of targets) {
							if (!targets.some((targetx) => get.damageEffect(targetx, player, player) > get.damageEffect(target, player, player))) {
								player.line(target, { color: [0, 0, 0] });
								target.chat('这种灵压的触感...那个面具...你是...虚吗？');
								target.damage();
								break;
							}
						}
						if (player.bleachIs(['bleach_heiqiyihu'])) {
							player.chat('这个嘛,你没必要知道了.因为你马上就要...消失了.');
							setTimeout(() => {
								player.chat('可...可恶!快放开...你难道看不出来让我打下去就能赢吗...');
							}, 1000);
							setTimeout(() => {
								player.chat('可恶!混账!你这个白痴!啊啊啊啊啊啊啊啊啊啊啊!');
								player.bleachAwaken('bleach_heiqiyihu', 3);
							}, 2500);
						}
						player.clearImmuneDeath();
					});
			});
			player.when({ global: 'phaseAfter' }).then(() => {
				player.chat(['我是谁？哈!我哪有什么......名字啊.', '什么人？哈!我可没什么名字啊!'].randomGet());
				player.when({ global: ['phaseDrawBegin', 'phaseDrawSkipped', 'phaseDrawCancelled'] }).then(() => {
					player.chat('你果然是个窝囊废啊!一护!');
					setTimeout(() => {
						player.chat('居然被这种层度攻击的灵压压制住,连体内的骨头都吱嘎作响了啊!');
					}, 2000);
				});
				player.when({ player: 'phaseUseBegin' }).then(() => {
					player.chat('真是个废物 就让你看看吧,卍解的使用方法!');
				});
			});
		},
		ai: {
			save: true,
			skillTagFilter(player, tag, target) {
				if (player != target) return false;
			},
		},
	},
	bleach_zhandun: {
		mod: {
			targetInRange(card, player) {
				if (card.name == 'sha' && !player.hasSkill('bleach_zhandun_used')) return true;
			},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: ['chooseToRespond', 'chooseToUse'],
		filterCard(card, player) {
			return get.color(card) == 'red';
		},
		position: 'hes',
		viewAs: {
			name: 'sha',
		},
		viewAsFilter(player) {
			if (!player.countCards('hes', { color: 'red' })) return false;
		},
		prompt: '将一张红色牌当杀使用或打出',
		check(card) {
			const val = get.value(card);
			if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
			return 5 - val;
		},
		ai: {
			respondSha: true,
			skillTagFilter(player) {
				if (!player.countCards('hes', { color: 'red' })) return false;
			},
			order: () => get.order({ name: 'sha' }) + 0.5,
		},
		group: 'bleach_zhandun_sha',
		subSkill: {
			sha: {
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					return event.card.name == 'sha' && player.getHistory('useCard', (evt) => evt.card.name == 'sha').indexOf(event) == 0;
				},
				forced: true,
				async content(event, trigger, player) {
					game.log(trigger.card, '无距离限制且不计入次数上限');
					player.addTempSkill('bleach_zhandun_used');
					if (trigger.addCount !== false) {
						trigger.addCount = false;
						const stat = player.stat[player.stat.length - 1].card;
						if (typeof stat[trigger.card.name] === 'number') stat[trigger.card.name]--;
					}
				},
				sourceSkill: 'bleach_zhandun',
			},
			used: {
				charlotte: true,
				sourceSkill: 'bleach_zhandun',
			},
		},
	},
	bleach_guidun: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		usable: 1,
		filter(event, player) {
			return player.countCards('he') > 0 && game.hasPlayer((current) => current != player && current.countCards('h'));
		},
		filterCard: true,
		filterTarget(card, player, target) {
			return target != player && target.countCards('h') > 0;
		},
		check(card) {
			return 6 - get.value(card);
		},
		discard: false,
		lose: false,
		delay: false,
		position: 'he',
		async content(event, trigger, player) {
			player.recast(event.cards);
			const target = event.target;
			if (!target.countCards('he')) return;
			const { cards } = await target.chooseCard('he', true, '请重铸一张牌', lib.filter.cardRecastable).forResult();
			target.recast(cards);
			if (target.hp < player.hp) {
				target.recover();
			} else if (player.hp < target.hp) {
				player.recover();
			}
		},
		ai: {
			order: 6,
			threaten: 1.65,
			result: {
				player: 1,
				target(player, target) {
					if (get.attitude(player, target) <= 0 && target.hp < player.hp) return 0;
					return 0.5 * Math.sqrt(Math.min(3, target.countCards('h')));
				},
			},
		},
	},
	bleach_jiedun: {
		audio: 'ext:BLEACH/skill:2:mp3',
		subSkill: {
			ai: {
				trigger: {
					player: 'removeBleachBuffAfter',
					global: 'phaseEnd',
				},
				silent: true,
				filter(event, player) {
					return event.name == 'phase' || 'bleachMark_shield' in event.buff;
				},
				content() {
					if (trigger.name == 'phase') {
						player.draw();
						player.removeBleachBuff('bleachMark_shield', 1);
					}
					player.removeSkill('bleach_jiedun_ai');
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (
								get.tag(card, 'damage') &&
								!player.hasSkillTag('bleachGuardBreak', false, {
									name: card ? card.name : null,
									target: player,
									card: card,
								}) &&
								!player.hasSkillTag('damageBonus')
							)
								return 'zeroplayertarget';
						},
					},
				},
				sourceSkill: 'bleach_jiedun',
			},
			round: {
				charlotte: true,
				sourceSkill: 'bleach_jiedun',
			},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'useCardToTargeted',
		},
		check(event, player) {
			return get.attitude(player, event.target) >= 3;
		},
		logTarget: 'target',
		filter(event, player) {
			if (!get.tag(event.card, 'damage') || event.player == player) return false;
			return !player.hasSkill('bleach_jiedun_round') && event.targets.length == 1;
		},
		content() {
			player.addTempSkill('bleach_jiedun_round', 'roundStart');
			player.line(trigger.target, 'green');
			trigger.target.addBleachBuff('bleachMark_shield', 1, player);
			trigger.target.addTempSkill('bleach_jiedun_ai');
		},
		ai: {
			expose: 0.35,
			threaten: 1.35,
		},
	},
	bleach_fusai: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filterCard: true,
		viewAs: {
			name: 'bleach_sai',
		},
		viewAsFilter(player) {
			if (!player.countCards('hes')) return false;
		},
		position: 'hes',
		prompt: '将一张牌当塞使用',
		check(card) {
			return Math.max(card.number, 6) - get.value(card);
		},
		usable: 1,
		ai: {
			order: 11,
		},
		onuse(result, player) {
			player
				.when('useCardAfter')
				.filter((evt) => evt.skill == 'bleach_fusai')
				.then(() => player.draw());
		},
	},
	bleach_fuling: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		selectCard: [1, Infinity],
		complexSelect: true,
		complexCard: true,
		filterCard(card) {
			if (ui.selected.targets.length) return false;
			return true;
		},
		filterTarget(card, player, target) {
			return player != target && ui.selected.cards.length >= Math.floor(player.countCards('h') / 2);
		},
		filter(event, player) {
			return player.isMinHp() && player.isDamaged() && player.countCards('h');
		},
		limited: true,
		discard: false,
		lose: false,
		delay: false,
		check(card) {
			return 7 - get.value(card);
		},
		async content(event, trigger, player) {
			player.storage.bleach_fuling = true;
			player.awakenSkill('bleach_fuling');
			const cards = event.cards;
			const target = event.target;
			if (target.bleachIs(['bleach_arena_heiqiyihu'])) {
				cards = player.getCards('h');
				player.chat('怎么会？明明只想给他一半灵压的');
			}
			target.gain(cards, player, 'giveAuto');
			const card = get.cardPile((card) => get.subtype(card) == 'equip1');
			if (card) {
				target.chooseUseTarget(card, 'noanimate', 'nopopup', true);
			}
			target.addBleachBuff('bleachMark_up');
			target.storage.bleach_fuling_target = player;
			target.addSkill('bleach_fuling_target');
			target.phase('nodelay');
		},
		ai: {
			expose: 0.65,
			order: 13,
			maixie: true,
			threaten(player, target) {
				if (target.isMinHp() && target.isDamaged()) return 3;
				return 0.9;
			},
			result: {
				target(player, target) {
					const att = get.attitude(player, target);
					if (target.hasSkillTag('nogain')) return 0;
					if (target.hasJudge('lebu') && att > 0) return 0;
					if (att > 3) {
						const basis = get.threaten(target);
						if (target.countCards('h') + player.countCards('h') > target.hp + 2) return basis * 0.8;
						return basis;
					}
					return 0;
				},
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
		subSkill: {
			target: {
				audio: 'bleach_fuling',
				mark: true,
				intro: {
					content: '每回合前两次造成伤害后,$摸一张牌',
				},
				nopop: true,
				trigger: {
					source: 'damageAfter',
				},
				forced: true,
				popup: false,
				filter(event, player) {
					const target = player.storage.bleach_fuling_target;
					return target && target.isIn() && target.getHistory('gain', (evt) => evt.getParent(2).name == 'bleach_fuling_target' && evt.cards.length == 1).length < 2;
				},
				content() {
					const target = player.storage.bleach_fuling_target;
					target.draw();
				},
			},
		},
	},
	bleach_sheyao: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		usable: 1,
		viewAs: {
			name: 'sha',
			bleach_sheyao: true,
			storage: {
				bleachMark_lieshang: 1,
			},
		},
		filter(event, player) {
			return player.countCards('hes') > 0;
		},
		filterCard: true,
		position: 'hes',
		check(card) {
			return 6.5 - get.value(card);
		},
		ai: {
			order(item, player) {
				return get.order({ name: 'sha' }, player) + 0.3 * [1, -1].randomGet();
			},
		},
		abnormal: true,
		mod: {
			targetInRange(card, player, target) {
				if (card.bleach_sheyao) return true;
			},
			cardUsable(card, player, num) {
				if (card.name == 'sha') return num + 2;
			},
		},
	},
	bleach_feiwang: {
		audio: 'ext:BLEACH/skill:1:mp3',
		derivation: 'bleach_feipao',
		trigger: {
			player: 'phaseJieshuBegin',
		},
		filter(event, player) {
			return player.getEquips(1).length || player.hasDisabledSlot(1);
		},
		forced: true,
		juexingji: true,
		async content(event, trigger, player) {
			player.awakenSkill('bleach_feiwang');
			player.bleachAwaken('bleach_abarai', 1, 'BL_86');
			player.chooseDrawRecover(2, true);
			player.addSkills('bleach_feipao');
			player.addBleachBuff('bleachMark_up', 1, player);
		},
	},
	bleach_feipao: {
		enable: 'phaseUse',
		audio: 'ext:BLEACH/skill:2:mp3',
		filterTarget: lib.filter.notMe,
		position: 'he',
		filterCard: true,
		check(card) {
			return 8 - get.value(card);
		},
		usable: 1,
		abnormal: true,
		filter(event, player) {
			return player.countCards('he');
		},
		async content(event, trigger, player) {
			const target = event.target;
			target.damage(1, 'nocard', 'fire');
			const targets = game.filterPlayer((current) => current != player && get.distance(target, current, 'pure') <= 1);
			if (targets.length) {
				player.line(targets, 'fire');
				targets.forEach((i) => i.addBleachBuff('bleachMark_fire', 1, player));
			}
		},
		ai: {
			order(skill, player) {
				if (
					game.hasPlayer((current) => {
						return current.hp == 1 && get.attitude(player, current) < 0;
					})
				) {
					return 10;
				}
				return 6.5;
			},
			result: {
				target(player, target) {
					if (target.hasSkillTag('nofire') && !target.countCards('he')) return 0;
					return get.damageEffect(target, player) - get.bleachBuffEffect(target, 'bleachMark_fire');
				},
			},
			threaten: 1.35,
		},
	},
	bleach_yihun: {
		audio: 'ext:BLEACH/skill:2:mp3',
		global: 'bleach_yihun_insert',
		ai: {
			threaten: 2.1,
		},
		subSkill: {
			insert: {
				trigger: {
					player: 'phaseJieshuBegin',
				},
				filter(event, player) {
					return (
						player.countCards('h') &&
						game.hasPlayer((current) => {
							if (current == player) return false;
							return current.hasSkill('bleach_yihun') && !current.hasSkill('bleach_yihun_round');
						})
					);
				},
				async cost(event, trigger, player) {
					const list = game.filterPlayer((current) => {
						if (current == player) return false;
						return current.hasSkill('bleach_yihun') && !current.hasSkill('bleach_yihun_round');
					});
					let str = '你可以展示并交给' + get.translation(list);
					if (list.length > 1) str += '中的一人';
					str += '一张手牌,其可以弃置另一张牌令你执行一个额外的回合.';
					event.result = await player
						.chooseCardTarget({
							prompt: get.prompt('bleach_yihun'),
							prompt2: str,
							filterCard: true,
							filterTarget(card, player, target) {
								return target.hasSkill('bleach_yihun') && !target.hasSkill('bleach_yihun_round');
							},
							ai1(card) {
								return 8 - get.value(card);
							},
							ai2(target) {
								return get.attitude(player, target) >= 3;
							},
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0],
						card = event.cards[0];
					await player.showCards(card);
					await player.give(card, target);
					if (target.countCards('he') > 1) {
						const result = await target
							.chooseToDiscard('是否弃置一张' + get.translation(card) + '以外的牌令' + get.translation(player) + '执行一个额外回合', 'he', (card) => {
								return card != get.event('card');
							})
							.set('card', card)
							.set('ai', (card) => {
								const player = get.player(),
									target = get.event().getTrigger().player;
								if (get.attitude(player, target) > 0) return 10 - get.value(card);
								return 0;
							})
							.forResult();
						if (result.bool) {
							target.addTempSkill('bleach_yihun_round', 'roundStart');
							target.addExpose(0.7);
							target.chat('本大爷认可你啦!');
							target.setAvatar(target.name, player.name);
							player.phase('nodelay');
							player
								.when({ global: 'phaseEnd' })
								.filter((evt) => evt.player == target)
								.then(() => {
									target.setAvatar('bleach_hun', 'bleach_hun');
								})
								.vars({ target: target });
						} else {
							target.chat('但是我拒绝!');
						}
					}
				},
			},
			round: {},
		},
	},
	bleach_haose: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToPlayered',
			target: 'useCardToPlayered',
		},
		forced: true,
		filter(event, player) {
			if (player.hasHistory('gain', (evt) => evt.getParent(2).name == 'bleach_haose' && evt.cards.length == 2)) return false;
			return (player == event.player ? event.target : event.player).hasSex('female');
		},
		content() {
			player.draw(2);
		},
		ai: {
			effect: {
				target(card, player, target) {
					if (
						player.getHistory('gain', (evt) => {
							return evt.getParent(2).name == 'bleach_haose' && evt.cards.length == 2;
						}).length
					)
						return;
					if (player.hasSex('female')) return [1, 0.6];
				},
				player(card, player, target) {
					if (
						player.getHistory('gain', (evt) => {
							return evt.getParent(2).name == 'bleach_haose' && evt.cards.length == 2;
						}).length
					)
						return;
					if (target && target.hasSex('female')) return [1, 1];
				},
			},
		},
	},
	bleach_feilian: {
		subSkill: {
			uru: {
				audio: 'ext:BLEACH/skill:2:mp3',
			},
		},
		audioname2: {
			bleach_2022_shitianyulong: 'bleach_feilian_uru',
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCard',
		},
		forced: true,
		_priority: 15110,
		filter(event, player) {
			const evt = event;
			if (!['sha', 'shunshou', 'binliang'].includes(evt.card.name)) return false;
			const history = player.getHistory('useCard');
			for (var i = 0; i < history.length; i++) {
				if (history[i] != evt && history[i].card.suit == evt.card.suit) return false;
				else if (history[i] == evt) return player.isPhaseUsing();
			}
			return false;
		},
		content() { },
		mod: {
			targetInRange(card, player, target, now) {
				if (!player.getHistory('useCard').some((evt) => evt.card.suit == card.suit)) return true;
			},
			aiOrder(player, card, num) {
				if (typeof card == 'object' && player.isPhaseUsing()) {
					if (get.type(card, 'trick') == 'equip') return num / 3;
				}
			},
		},
	},
	bleach_jiling: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: ['chooseToUse', 'chooseToRespond'],
		hiddenCard(player, name) {
			if (name != 'wuxie' && lib.inpile.includes(name)) return true;
		},
		filter(event, player) {
			if (event.responded || event.type == 'wuxie' || event.bleach_jiling) return false;
			if (_status.currentPhase == player && (player.getStat('skill').bleach_jiling || 0) >= 1) return false;
			for (var i of lib.inpile) {
				if (i != 'wuxie' && event.filterCard({ name: i }, player, event)) return true;
			}
			return false;
		},
		delay: false,
		content() {
			'step 0';
			var evt = event.getParent(2);
			evt.set('bleach_jiling', true);
			var cards = get.cards(3);
			if (Array.isArray(cards))
				for (var i of cards) {
					ui.cardPile.insertBefore(i.fix(), ui.cardPile.firstChild);
				}
			player
				.chooseButton(['汲灵:选择要' + (evt.name == 'chooseToUse' ? '使用' : '打出') + '的牌', cards])
				.set('filterButton', (button) => {
					return _status.event.cards.includes(button.link);
				})
				.set(
					'cards',
					cards.filter((card) => evt.filterCard(card, evt.player, evt))
				)
				.set('ai', (button) => {
					var evt = _status.event.getParent(3);
					if (evt && evt.ai) {
						var tmp = _status.event;
						_status.event = evt;
						var result = (evt.ai || event.ai1)(button.link, _status.event.player, evt);
						_status.event = tmp;
						return result;
					}
					return 1;
				});
			('step 1');
			var evt = event.getParent(2);
			if (result.links?.length) {
				var card = result.links[0];
				var name = card.name;
				if (evt.name == 'chooseToUse') {
					game.broadcastAll(
						(result, name) => {
							lib.skill.bleach_jiling_backup.viewAs = {
								name: name,
								cards: [result],
							};
						},
						card,
						name
					);
					evt.set('_backupevent', 'bleach_jiling_backup');
					evt.set('openskilldialog', '请选择' + get.translation(card) + '的目标');
					evt.backup('bleach_jiling_backup');
				} else {
					delete evt.result.skill;
					delete evt.result.used;
					evt.result.card = result.links[0];
					evt.result.cards = [result.links[0]];
					evt.redo();
					return;
				}
			}
			evt.goto(0);
		},
		ai: {
			effect: {
				target(card, player, target, effect) {
					if (get.tag(card, 'respondShan')) return 0.7;
					if (get.tag(card, 'respondSha')) return 0.7;
				},
			},
			order: 11,
			respondShan: true,
			respondSha: true,
			result: {
				player(player) {
					if (_status.event.dying) return get.attitude(player, _status.event.dying);
					return 1;
				},
			},
		},
		marktext: '灵',
		intro: {
			content: 'expansion',
			markcount: 'expansion',
		},
		onremove(player, skill) {
			var cards = player.getExpansions(skill);
			if (cards.length) player.loseToDiscardpile(cards);
		},
		subSkill: {
			backup: {
				sourceSkill: 'bleach_jiling',
				precontent() {
					var name = event.result.card.name,
						cards = event.result.card.cards.slice(0);
					event.result.cards = cards;
					var rcard = cards[0],
						card;
					if (rcard.name == name) card = rcard;
					else card = { name };
					event.result.card = card;
				},
				filterCard: () => false,
				selectCard: -1,
			},
		},
	},
	bleach_sanling: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'phaseBegin',
		},
		derivation: ['bleach_shengshan'],
		check(event, player) {
			return lib.skill.bleach_sanling.getNum(player) > 2 || player.hasJudge('lebu');
		},
		getNum: (player) => player.getAllHistory('useCard').length - player.getAllHistory('lose', (evt) => evt.parent.name == 'useCard' && evt.hs.length).length,
		prompt2(event, player) {
			return '你可以' + (player.countCards('j') ? '弃置' + get.translation(player.getCards('j')) + ',' : '') + '获得【圣闪】并摸' + get.cnNumber(lib.skill.bleach_sanling.getNum(player)) + '张牌,将等量张牌置于武将牌上,称为「灵」.';
		},
		async content(event, trigger, player) {
			player.awakenSkill('bleach_sanling');
			player.bleachAwaken('bleach_shitianyulong', 1, 'EnemyUnseen');
			if (player.countCards('j')) player.discard(player.getCards('j'));
			const num = lib.skill.bleach_sanling.getNum(player);
			if (num > 0) {
				await player.draw(num);
				if (player.countCards('he')) {
					const { cards } = await player.chooseCard('将' + get.cnNumber(num) + '张牌置于武将牌上,称为「灵」', num, true).forResult();
					if (cards?.length) {
						player.addToExpansion(cards, player, 'giveAuto').gaintag.add('bleach_jiling');
					}
				}
			}
			player.addSkills('bleach_shengshan');
		},
		mark: true,
		limited: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_shengshan: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToTargeted',
		},
		logTarget: 'target',
		check(event, player) {
			if (
				event.target.hasSkillTag('filterDamage', null, {
					player: player,
					card: event.card,
					jiu: true,
				}) ||
				get.attitude(player, event.target) > 0
			)
				return false;
			var rand = 0.05;
			if (
				player.hasSkillTag(
					'directHit_ai',
					true,
					{
						target: event.target,
						card: event.card,
					},
					true
				)
			)
				rand = 2;
			if (event.target.getEquip('bagua') || event.target.getEquip('rewrite_bagua')) rand -= 0.5;
			if (event.target.countCards('h', { type: ['basic'] }) == 1) rand += 0.35;
			if (!event.target.countCards('h', 'shan')) rand += 0.3;
			if (!event.target.countCards('h') && rand < 1) rand = 1;
			if (player.getExpansions('bleach_jiling').length > game.players.length) rand += 0.2;
			if (rand < 0) rand = 0.05;
			return Math.random() < rand;
		},
		filter(event, player) {
			return event.card && event.card.name == 'sha' && player.getExpansions('bleach_jiling').length;
		},
		content() {
			'step 0';
			if (player.getExpansions('bleach_jiling').length == 1) event._result = { bool: true, links: player.getExpansions('bleach_jiling') };
			else player.chooseCardButton('请选择移去的张「灵」', [1, Infinity], player.getExpansions('bleach_jiling'), true);
			('step 1');
			if (result.links?.length) {
				player.loseToDiscardpile(result.links);
				var map = trigger.customArgs;
				var id = trigger.target.playerid;
				if (!map[id]) map[id] = {};
				map[id].extraDamage = result.links.length;
			}
		},
	},
	bleach_tiankui: {
		trigger: {
			player: 'damageBefore',
			global: 'phaseAfter',
		},
		forced: true,
		filter(event, player) {
			if (event.name == 'damage') return event.parent.name != 'bleach_tiankui';
			return player.storage.bleach_tiankui.dmg.length;
		},
		_priority: Infinity,
		content() {
			if (trigger.name == 'damage') {
				player.storage.bleach_tiankui.card.push(trigger.card);
				player.storage.bleach_tiankui.dmg.push(trigger.num);
				player.storage.bleach_tiankui.source.push(trigger.source);
				player.storage.bleach_tiankui.nature.push(trigger.nature);
				trigger.cancel();
				game.log(player, '因', '#g【天傀】', '延迟了', get.cnNumber(trigger.num), '点伤害计算');
				player.markSkill('bleach_tiankui');
			} else {
				var card = player.storage.bleach_tiankui.card.shift();
				var num = player.storage.bleach_tiankui.dmg.shift();
				var source = player.storage.bleach_tiankui.source.shift();
				var nature = player.storage.bleach_tiankui.nature.shift();
				player.damage(num, source, card, nature);
				if (!player.storage.bleach_tiankui.dmg.length) player.unmarkSkill('bleach_tiankui');
			}
		},
		ai: {
			effect: {
				target(card, player, target) {
					if (get.tag(card, 'damage')) {
						if (player.hasSkillTag('jueqing', false, target)) return [1, -1.1];
						return [1, 0.7];
					}
				},
			},
		},
		mod: {
			cardUsable(card, player, num) {
				if (get.info({ name: card.name }).usable == undefined) return Infinity;
				else {
					if (card.name == 'sha') {
						if (player.getEquips('zhuge').length) return Infinity;
					}
					return get.info({ name: card.name }).usable;
				}
			},
			cardEnabled: (..._args) => 'unchanged',
			cardSavable: (..._args) => 'unchanged',
			cardEnabled2: (..._args) => 'unchanged',
			cardDiscardable: (..._args) => 'unchanged',
			cardRespondable: (..._args) => 'unchanged',
		},
		init(player, skill) {
			if (!player.storage[skill])
				player.storage[skill] = {
					card: [],
					dmg: [],
					source: [],
					nature: [],
				};
		},
		intro: {
			name: '乱装天傀',
			markcount(storage, player) {
				return storage.dmg.length;
			},
			mark(dialog, storage, player) {
				if (player == game.me || player.isUnderControl()) {
					for (var i = 0; i < storage.dmg.length; i++) {
						var str = '第' + get.cnNumber(i + 1, true) + '次伤害:';
						if (i == 0) str = '即将计算的伤害:';
						dialog.addText(str + storage.dmg[i] + '点');
					}
				} else {
					return '剩余' + get.cnNumber(storage.dmg.length) + '次伤害计算';
				}
			},
			content: 'marks',
		},
	},
	bleach_shanhua: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filterTarget: lib.filter.notMe,
		abnormal: true,
		async content(event, trigger, player) {
			player.awakenSkill('bleach_shanhua');
			const target = event.target;
			const swapto = target.next;
			if (player != swapto) {
				let cur = player;
				const players = [];
				do {
					players.push(cur);
					cur = cur.next;
				} while (cur != swapto);
				players.remove(player);
				players.remove(swapto);
				players.sortBySeat();
				for (let target of players) {
					target.phase('bleach_shanhua');
					target.addSkill('bleach_shanhua_phase');
				}
				game.broadcastAll(
					(player, target) => {
						game.swapSeat(player, target.next, false, true);
						game.log(player, '将位置移至', target, '的下家');
					},
					player,
					target
				);
			}
			const next = await player.useCard({ name: 'sha', storage: { bleachMark_down: 1 } }, target, false);
			if (target.hasHistory('damage', (evt) => evt.card == next.card)) {
				player.chat(['你连让我单膝跪地都做不到', '你的獠牙是触碰不到我的'].randomGet());
				target.disableEquip(1);
			}
		},
		ai: {
			order: 1,
			result: {
				target(player, target) {
					var num = Math.min(-1.8, get.bleachBuffEffect(target, 'bleachMark_down'));
					if ((!target.countCards('h', 'shan') || !target.countCards('h')) && !target.hasMark('bleachMark_shield') && !target.hasSkill('Defense_effect')) return num;
					return 0;
				},
			},
			expose: 0.7,
			threaten: 1.4,
		},
		limited: true,
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
		subSkill: {
			phase: {
				popup: false,
				forced: true,
				mark: true,
				_priority: 6,
				intro: {
					content: '执行额外回合',
				},
				trigger: {
					player: ['phaseAfter', 'phaseCancelled'],
				},
				filter(event, player) {
					return event.skill == 'bleach_shanhua';
				},
				content() {
					player.removeSkill('bleach_shanhua_phase');
				},
				charlotte: true,
			},
		},
	},
	bleach_yingren: {
		name: '千本樱',
		audio: 'ext:BLEACH/skill:4:mp3',
		enable: 'phaseUse',
		filter(event, player) {
			if (player.hasSkill('bleach_kengjing')) {
				return (player.getStat('skill').bleach_yingren || 0) < 1;
			} else {
				var num = 1;
				var cards = player.getEquips(1);
				if (cards.length) {
					var info = get.info(cards[0], false);
					if (info && info.distance && typeof info.distance.attackFrom == 'number') {
						num -= info.distance.attackFrom;
					}
					return (player.getStat('skill').bleach_yingren || 0) < num;
				}
			}
			return false;
		},
		content() {
			'step 0';
			event.card = get.cards()[0];
			game.cardsGotoOrdering(event.card);
			event.videoId = lib.status.videoId++;
			var judgestr = get.translation(player) + '发动了【千本樱】';
			game.addVideo('judge1', player, [get.cardInfo(event.card), judgestr, event.videoId]);
			game.broadcastAll(
				(player, card, str, id, cardid) => {
					var event;
					if (game.online) {
						event = {};
					} else {
						event = _status.event;
					}
					if (game.chess) {
						event.node = card.copy('thrown', 'center', ui.arena).addTempClass('start');
					} else {
						event.node = player.$throwordered(card.copy(), true);
					}
					if (lib.cardOL) lib.cardOL[cardid] = event.node;
					event.node.cardid = cardid;
					event.node.classList.add('thrownhighlight');
					ui.arena.classList.add('thrownhighlight');
					event.dialog = ui.create.dialog(str);
					event.dialog.classList.add('center');
					event.dialog.videoId = id;
				},
				player,
				event.card,
				judgestr,
				event.videoId,
				get.id()
			);
			game.log(player, '展示了', event.card);
			('step 1');
			event.dialog.close();
			game.addVideo('judge2', null, event.videoId);
			game.addVideo('deletenode', player, [get.cardInfo(event.node)]);
			event.node.delete();
			game.broadcast(
				function (id, card) {
					var dialog = get.idDialog(id);
					if (dialog) {
						dialog.close();
					}
					if (card.clone) {
						card.clone.delete();
					}
					ui.arena.classList.remove('thrownhighlight');
				},
				event.videoId,
				event.card
			);
			ui.arena.classList.remove('thrownhighlight');
			player.chooseUseTarget(event.card, false, 'nodistance');
		},
		ai: {
			order: () => get.order({ name: 'sha' }) + 0.5,
			threaten: 1.5,
			result: {
				player: 1,
			},
		},
	},
	bleach_jingyan: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			player: 'phaseZhunbeiBegin',
		},
		filter(event, player) {
			return player.getEquips(1).length;
		},
		derivation: ['bleach_renjing', 'bleach_kengjing', 'bleach_jianjing', 'bleach_zhongjing'],
		forced: true,
		juexingji: true,
		async content(event, trigger, player) {
			player.awakenSkill('bleach_jingyan');
			if (player.bleachIs(['bleach_xiumubaizai'])) game.mp417('byakuya_bankai');
			player.bleachAwaken('bleach_xiumubaizai', 1, 'DestinyAwaits');
			player.loseMaxHp();
			player.addSkills('bleach_renjing');
			player.addSkill('bleach_jingyan_effect');
		},
		subSkill: {
			effect: {
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				forced: true,
				charlotte: true,
				lastDo: true,
				filter(event, player) {
					const evt = event.getl(player);
					return evt && evt.es && evt.es.some((card) => card.name != 'zanpakuto_senbonzakura');
				},
				content() {
					const evt = trigger.getl(player);
					const cards = evt.es.filter((card) => card.name != 'zanpakuto_senbonzakura');
					player.addToExpansion(cards, player, 'give').gaintag.add('bleach_jingyan_effect');
				},
				ai: {
					reverseEquip: true,
				},
				marktext: '樱',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				onremove(player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
			},
		},
	},
	bleach_renjing: {
		audio: 'ext:BLEACH/skill:3:mp3',
		logAudio(event, player) {
			const num = (player.storage.bleach_renjing || 0) + 1;
			return 'ext:BLEACH/skill/bleach_renjing' + num + '.mp3';
		},
		enable: 'phaseUse',
		filter(event, player) {
			return (player.storage.bleach_renjing || 0) < 3;
		},
		usable: 1,
		content() {
			'step 0';
			player.storage.bleach_renjing = (player.storage.bleach_renjing || 0) + 1;
			('step 1');
			const num = player.storage.bleach_renjing;
			player.chooseDrawRecover(2, true);
			switch (num) {
				case 1:
					player.addSkills('bleach_kengjing');
					break;
				case 2:
					player.changeSkills(['bleach_jianjing'], ['bleach_kengjing']);
					if (player.bleachIs(['bleach_xiumubaizai'])) {
						player.bleachAwaken('bleach_xiumubaizai', num);
						game.switchBleachBackground('senkei_senbonzakurakageyoshi');
					}
					break;
				case 3:
					player.changeSkills(['bleach_zhongjing'], ['bleach_jianjing']);
					break;
			}
		},
		ai: {
			order: 1,
			result: {
				player(player) {
					const num = (player.storage.bleach_renjing || 0) + 1;
					if ((num == 1 && !player.getEquips(1).length) || player.isDamaged()) return 1;
					if (num == 2) return 1;
					if (num == 3 && player.getExpansions('bleach_jingyan_effect').length > 3) return 1;
					return 0;
				},
			},
		},
	},
	bleach_kengjing: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCard',
			source: 'damageSource',
		},
		forced: true,
		filter(event, player) {
			if (event.name == 'useCard') {
				if (!event.cards.length) return false;
				return event.card && event.card.name == 'sha' && event.targets.some((target) => get.distance(player, target, 'pure') == 1 && get.distance(target, player) <= 1);
			}
			return true;
		},
		content() {
			if (trigger.name == 'useCard') {
				game.log(player, '被追加为额外目标');
				trigger.targets.push(player);
			} else {
				player.getStat('skill').bleach_yingren = 0;
			}
		},
	},
	bleach_jianjing: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: ['loseAfter', 'senbonzakuraJudge'],
			global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
		},
		forced: true,
		filter(event, player, name) {
			if (player.getExpansions('bleach_jingyan_effect').length == 0 || player.getEquips(1).length) return false;
			if (name == 'senbonzakuraJudge') return true;
			const evt = event.getl(player);
			if (evt && evt.es && evt.es.length && evt.player == player) return evt.es.some((card) => get.subtype(card) == 'equip1' && card.name != 'zanpakuto_senbonzakura');
			return false;
		},
		content() {
			player.loseToDiscardpile(player.getExpansions('bleach_jingyan_effect').randomGet());
			player.equip(game.createCard('zanpakuto_senbonzakura', 'diamond', 6));
		},
		group: 'bleach_jianjing_dis',
		subSkill: {
			dis: {
				audio: 'bleach_jianjing',
				enable: 'phaseUse',
				filterCard(card) {
					return get.subtype(card) == 'equip1';
				},
				usable: 2,
				filterTarget(event, player, target) {
					return target.countDiscardableCards(player, 'hej') > 0;
				},
				position: 'hes',
				filter(event, player) {
					return player.countCards('hes', { subtype: 'equip1' }) > 0;
				},
				check(card) {
					var player = _status.event.player;
					if (game.hasPlayer((current) => current.hp == 1 && get.attitude(player, current) < 0)) return 6 - get.equipValue(card);
					return 3 - get.equipValue(card);
				},
				content() {
					player.discardPlayerCard(target, 'hej', true);
				},
				ai: {
					order: 9,
					result: {
						target(player, target) {
							return get.effect(target, { name: 'guohe_copy2' }, player, player) > 0;
						},
					},
				},
			},
		},
	},
	bleach_zhongjing: {
		audio: 'ext:BLEACH/skill:1:mp3',
		logAudio: () => 0,
		enable: 'phaseUse',
		filter(event, player) {
			return player.getExpansions('bleach_jingyan_effect').length;
		},
		filterTarget(card, player, target) {
			return player.canUse('sha', target, false);
		},
		content() {
			'step 0';
			if (player.bleachIs(['bleach_xiumubaizai'])) {
				game.mp417('byakuya_hakuteiken');
				player.bleachAwaken('bleach_xiumubaizai', 3);
				setTimeout(() => {
					game.playBleach('bleach_zhongjing1');
				}, 3500);
			}
			('step 1');
			const cards = player.getExpansions('bleach_jingyan_effect');
			player.useCard({ name: 'sha' }, cards, target).set('oncard', (card) => {
				const evt = _status.event;
				evt.baseDamage = cards.length;
			});
			('step 2');
			player.clearSkills();
		},
		ai: {
			order: 1,
			result: {
				target(player, target) {
					let num = player.getExpansions('bleach_jingyan_effect').length;
					if (num >= target.hp && !target.countCards('h', 'shan') && !target.getEquips('baiyin').length) return -1;
					return 0;
				},
			},
		},
	},
	bleach_keyan: {
		audio: 'ext:BLEACH/skill:6:mp3',
		logAudio: () => 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'phaseUseBegin',
		},
		async content(event, trigger, player) {
			const choose = player.chooseButton(['猜测颜色', [['red', 'black'], 'vcard'], '猜测花色', [lib.suit.slice(0), 'vcard'], '猜测类型', [['basic', 'trick', 'equip'], 'vcard']], 3, true);
			choose.set('ai', (button) => {
				switch (button.link[2]) {
					case 'red':
						return Math.random() < 0.5 ? true : false;
					case 'black':
						return Math.random() < 0.5 ? true : false;
					case 'heart':
						return Math.random() < 0.15 ? true : false;
					case 'diamonde':
						return Math.random() < 0.55 ? true : false;
					case 'spade':
						return Math.random() < 0.35 ? true : false;
					case 'club':
						return Math.random() < 0.25 ? true : false;
					case 'basic':
						return Math.random() < 0.45 ? true : false;
					case 'trick':
						return Math.random() < 0.35 ? true : false;
					case 'equip':
						return Math.random() < 0.25 ? true : false;
				}
			});
			choose.set('filterButton', (button) => {
				for (var i = 0; i < ui.selected.buttons.length; i++) {
					if ((ui.selected.buttons[i].link[2] == 'red' && button.link[2] == 'black') || (ui.selected.buttons[i].link[2] == 'black' && button.link[2] == 'red')) return false;
					if (lib.suit.includes(ui.selected.buttons[i].link[2]) && lib.suit.includes(button.link[2])) return false;
					if ((ui.selected.buttons[i].link[2] == 'basic' && ['trick', 'equip'].includes(button.link[2])) || (ui.selected.buttons[i].link[2] == 'trick' && ['basic', 'equip'].includes(button.link[2])) || (ui.selected.buttons[i].link[2] == 'equip' && ['basic', 'trick'].includes(button.link[2]))) return false;
				}
				return true;
			});
			const result = await choose.forResult();
			const choices = result.links.map((i) => i[2]);
			const cards = game.cardsGotoOrdering(get.cards()).cards;
			player.showCards(cards, get.translation(player) + '发动了【科研】');
			player.chat('我选择了' + get.translation(choices));
			let num = 3;
			if (choices.includes(get.color(cards[0]))) {
				num--;
				player.addTempSkill('bleach_keyan_range');
				game.log(player, '发动了', '#g【蛇腕手】');
			}
			if (choices.includes(get.type2(cards[0]))) {
				num--;
				player.addMark('bleach_keyan_damage');
			}
			if (choices.includes(cards[0].suit)) {
				num--;
				player.addMark('bleach_keyan_recover');
			}
			game.log(player, '猜错了', get.cnNumber(num), '项.');
			player.draw(3);
			if (num > 0) player.chooseToDiscard('h', num, true).ai = get.disvalue;
		},
		ai: {
			threaten: 2,
		},
		group: ['bleach_keyan_damage', 'bleach_keyan_recover'],
		subSkill: {
			range: {
				mark: true,
				mod: {
					targetInRange: () => true,
				},
				charlotte: true,
				intro: {
					content: '使用牌没有距离限制',
				},
				sourceSkill: 'bleach_keyan',
			},
			damage: {
				audio: 'bleach_keyan',
				logAudio: () => ['ext:BLEACH/skill/bleach_keyan3.mp3', 'ext:BLEACH/skill/bleach_keyan4.mp3'],
				enable: 'phaseUse',
				filterTarget: true,
				prompt: '出牌阶段,你可以对一名角色造成1点火焰伤害.',
				filter(event, player) {
					return player.hasMark('bleach_keyan_damage');
				},
				content() {
					target.damage('fire', 'nocard');
					player.removeMark('bleach_keyan_damage');
				},
				ai: {
					damage: true,
					fireAttack: true,
					order: 7,
					result: {
						target(player, target) {
							const eff = get.damageEffect(target, player, target, 'fire');
							if (target.hp > 2 && !player.hasSkill('bleach_pisha_all')) return 0;
							return eff;
						},
					},
				},
				name: '肉爆弹',
				intro: {
					content: '拥有#枚肉爆弹',
				},
				sourceSkill: 'bleach_keyan',
			},
			recover: {
				audio: 'bleach_keyan',
				logAudio: () => ['ext:BLEACH/skill/bleach_keyan5.mp3', 'ext:BLEACH/skill/bleach_keyan6.mp3'],
				enable: 'phaseUse',
				filterTarget(card, player, target) {
					return target.isDamaged();
				},
				prompt: '出牌阶段,你可以令一名受伤角色回复1点体力.',
				filter(event, player) {
					return player.hasMark('bleach_keyan_recover');
				},
				content() {
					target.recover();
					player.removeMark('bleach_keyan_recover');
				},
				ai: {
					order: 9,
					result: {
						target(player, target) {
							if (target.getDamagedHp() == 1) return 0;
							if (player == target && player.needsToDiscard()) return 5;
							return 2;
						},
					},
				},
				name: '补肉剂',
				intro: {
					content: '拥有#针补肉剂',
				},
				sourceSkill: 'bleach_keyan',
			},
		},
	},
	bleach_pisha: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			source: 'damageSource',
		},
		check(event, player) {
			return get.attitude(player, event.player) <= 0;
		},
		prompt2(event, player) {
			const num = player.hasSkill('bleach_pisha_all') ? 2 : 1;
			return '你可以对其施加' + get.cnNumber(num) + '层中毒.';
		},
		abnormal: true,
		filter(event, player) {
			if (!event.player.isIn()) return false;
			if (player.hasSkill('bleach_pisha_all')) return true;
			return event.card && event.card.name == 'sha';
		},
		logTarget: 'player',
		content() {
			trigger.player.addBleachBuff('bleachMark_du', player.hasSkill('bleach_pisha_all') ? 2 : 1, player);
		},
		ai: {
			expose: 0.3,
		},
		subSkill: {
			all: {
				charlotte: true,
				mark: true,
				intro: {
					content: '金色疋杀地藏',
				},
			},
		},
	},
	bleach_dizang: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		limited: true,
		content() {
			player.awakenSkill('bleach_dizang');
			player.bleachAwaken('bleach_niejianli', 1, 'EnemyUnseen');
			player.addTempSkill('bleach_pisha_all');
			player.when({ player: 'phaseEnd' }).then(() => {
				player.bleachAwaken('bleach_niejianli', 0);
				player.removeSkill('bleach_pisha_all');
			});
		},
		ai: {
			combo: 'bleach_pisha',
			order: 15,
			result: {
				player(player) {
					if (!player.hasSkill('bleach_pisha')) return 0;
					let hs = Math.max(
						1,
						player.countCards('h', (card) => {
							if (!get.tag(card, 'damage')) return 0;
							if (card.name === 'sha') return 0.1;
							return 1;
						})
					),
						num = player.countMark('bleach_keyan_damage');
					if (num >= 3) return 5;
					return 0;
				},
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_xiangzhan: {
		subSkill: {
			knp: {
				audio: 'ext:BLEACH/skill:2:mp3',
			},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		audioname2: {
			bleach_gengmu: 'bleach_xiangzhan_knp',
		},
		trigger: {
			player: ['damageEnd', 'damageBegin3'],
			source: 'damageSource',
		},
		forced: true,
		filter(event, player, name) {
			return name != 'damageBegin3' || player.hasMark('bleach_xiangzhan');
		},
		content() {
			if (event.triggername == 'damageBegin3') {
				const num = Math.min(trigger.num, player.countMark('bleach_xiangzhan'));
				trigger.num -= num;
				player.removeMark('bleach_xiangzhan', num);
				return;
			}
			player.addMark('bleach_xiangzhan', 1);
			if (event.triggername == 'damageSource' && player.countMark('bleach_xiangzhan') > 1) {
				const card = get.cardPile2((card) => {
					if (trigger.card && card.name == trigger.card.name) return false;
					return get.tag(card, 'damage');
				});
				if (card) {
					player.gain(card, 'log', 'gain2');
					player.removeMark('bleach_xiangzhan', 1);
				}
			}
		},
		intro: {
			content: 'mark',
		},
		mod: {
			maxHandcardBase(player, num) {
				return player.maxHp;
			},
		},
		ai: {
			effect: {
				target(card, player, target) {
					if (get.tag(card, 'damage')) {
						if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
						if (!target.hasFriend() || !target.hasMark('bleach_xiangzhan')) return;
						return [1, 0.9];
					}
				},
			},
		},
	},
	bleach_tongming: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'phaseBegin',
		},
		filter(event, player) {
			return player.countCards('h');
		},
		limited: true,
		async cost(event, trigger, player) {
			const juedou = new lib.element.VCard({ name: 'juedou' });
			event.result = await player
				.chooseTarget(
					get.prompt2('bleach_tongming'),
					(card, player, target) => {
						return player.canUse(juedou, target);
					},
					(target) => {
						const player = get.player();
						return get.effect(target, juedou, player, player);
					}
				)
				.forResult();
		},
		async content(event, trigger, player) {
			player.awakenSkill('bleach_tongming');
			const target = event.targets[0],
				card = new lib.element.VCard({ name: 'juedou' });
			player.chat(player.bleachIs(['bleach_banmu']) ? '更木队三席 斑目一角!' : '我的名字是' + get.translation(player) + '!');
			const cards = player.getCards('h');
			const content = [get.translation(player) + '的手牌', cards];
			await target.chooseControl('ok').set('dialog', content);
			player.chat('向要杀掉的对手报上姓名,这就是我的规矩!');
			await player.useCard(card, target, 'nowuxie');
			if (!target.countCards('h')) await game.asyncDraw([target, player]);
			else {
				const { bool } = await target
					.chooseBool('令' + get.translation(player) + '观看你的手牌以视为对其使用' + get.translation(card) + ',或点<取消>与其各摸一张牌.')
					.set('choice', () => Math.random() <= 0.5)
					.forResult();
				if (bool) {
					target.chat(['抱歉,你没资格知道.', '你不用告诉我的名字,好好记住我的名字就行了'].randomGet());
					await player.chooseControl('ok').set('dialog', [get.translation(target) + '的手牌', player.getCards('h')]);
					await target.useCard(card, player, 'nowuxie');
				} else {
					target.chat([get.translation(player) + '吗？还好记住了你的名字.', '可恶...真强啊...'].randomGet());
					await game.asyncDraw([target, player]);
				}
			}
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_shoulie: {
		subSkill: {
			target: {
				intro: {
					content: '你计算与$的距离时视为1',
				},
				charlotte: true,
				mod: {
					globalFrom(from, to) {
						if (to == from.storage.bleach_shoulie_target) return -Infinity;
					},
				},
			},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'roundStart',
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget('请选择【狩猎】的目标', lib.filter.notMe, true)
				.set('ai', (target) => {
					return -get.attitude(get.player(), target);
				})
				.forResult();
		},
		async content(event, trigger, player) {
			player.storage.bleach_shoulie_target = event.targets[0];
			player.addTempSkill('bleach_shoulie_target', 'roundStart');
			game.log(event.targets, '成为了', '【狩猎】', '的目标');
		},
	},
	bleach_xunjie: {
		ai: {
			effect: {
				target(card, player, target) {
					if (get.tag(card, 'respond') && target.countCards('h') > 1 && !player.getStorage('bleach_xunjie_used').length) return [1, 0.2];
				},
			},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'loseAfter',
		},
		filter(event, player) {
			const list = player.getStorage('bleach_xunjie_used');
			const target = player.storage.bleach_shoulie_target;
			if (!list.includes(0) && (!target || !target.isIn() || !target.countCards('he'))) return false;
			return event.hs && event.hs.length && ['useCard', 'respond'].includes(event.parent.name) && list.length < 2;
		},
		async cost(event, trigger, player) {
			let list = [],
				suit = trigger.parent.card.suit;
			const target = player.storage.bleach_shoulie_target;
			let choiceList = ['摸一张牌,你使用' + get.translation(suit) + '花色牌不能被响应.', '获得' + get.translation(target) + '一张牌并弃置一张牌,你使用与弃置牌和' + get.translation(suit) + '相同花色的牌没有次数限制.'];
			const storage = player.storage.bleach_xunjie_used || [];
			for (var i = 0; i < 2; i++) {
				if (storage.includes(i) || (i == 1 && (!target.isIn() || !target.countCards('he')))) {
					choiceList[i] = '<span style="opacity:0.5;">' + choiceList[i] + '</span>';
				} else list.push('选项' + get.cnNumber(i + 1, true));
			}
			const { control } = await player
				.chooseControl(list, 'cancel2')
				.set('choiceList', choiceList)
				.set('prompt', '是否发动【迅捷】选择一项:')
				.set('ai', () => 0)
				.forResult();
			if (control == 'cancel2') event.result = { bool: false };
			else event.result = { bool: true, cost_data: { control: control, target: target } };
		},
		async content(event, trigger, player) {
			const target = event.cost_data.target;
			const control = event.cost_data.control;
			player.addTempSkill('bleach_xunjie_used');
			const index = ['选项一', '选项二'].indexOf(control);
			player.storage.bleach_xunjie_used.push(index);
			if (index == 0) {
				player.draw();
				player.storage.bleach_xunjie_suit.add(trigger.parent.card.suit);
			} else {
				player.line(target, 'green');
				await player.gainPlayerCard(target, 'he', true);
				const { bool, cards } = await player.chooseToDiscard('he', true).forResult();
				if (bool) {
					player.storage.bleach_xunjie_suit2.add(trigger.parent.card.suit);
					player.storage.bleach_xunjie_suit2.add(cards[0].suit);
				}
			}
		},
		subSkill: {
			used: {
				forced: true,
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					return player.storage.bleach_xunjie_suit.includes(event.card.suit);
				},
				async content(event, trigger, player) {
					trigger.directHit.addArray(game.players);
				},
				init(player) {
					player.storage.bleach_xunjie_used = [];
					player.storage.bleach_xunjie_suit = [];
					player.storage.bleach_xunjie_suit2 = [];
				},
				mod: {
					cardUsable(card, player) {
						if (player.storage.bleach_xunjie_suit2.includes(card.suit)) return Infinity;
					},
				},
				mark: true,
				onremove(player, skill) {
					delete player.storage.bleach_xunjie_used;
					delete player.storage.bleach_xunjie_suit;
					delete player.storage.bleach_xunjie_suit2;
				},
				intro: {
					nocount: true,
					content(storage, player, skill) {
						var str = '<li>使用以下花色的牌不能被响应:' + get.translation(player.storage.bleach_xunjie_suit);
						str += '<li>使用以下花色的牌没有次数限制:' + get.translation(player.storage.bleach_xunjie_suit2);
						return str;
					},
				},
				charlotte: true,
			},
		},
	},
	bleach_gongyan: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filterTarget(card, player, target) {
			return player != target && target.countCards('h');
		},
		usable: 1,
		async content(event, trigger, player) {
			player.loseHp();
			const target = event.target;
			if (!player.isIn()) return;
			const { links } = await player
				.chooseButton(['弃置一张牌', target.getCards('h')], true, (button) => {
					return get.event('target').getUseValue(button.link);
				})
				.set('target', target)
				.forResult();
			target.discard(links);
			player
				.when('phaseEnd')
				.assign({
					mod: {
						maxHandcard(player, num) {
							return num + 2;
						},
					},
				})
				.then(() => { });
		},
		ai: {
			order: 13,
			result: {
				target(player, target) {
					if (player.hp == 1) return 0;
					if (player.hp > 2 || player.needsToDiscard()) return -1;
					return 0;
				},
			},
		},
	},
	bleach_zaisheng: {
		trigger: {
			player: 'phaseJieshuBegin',
		},
		filter(event, player) {
			return player.getDamagedHp() && player.countCards('he');
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseToDiscard(get.prompt2('bleach_zaisheng'), 'he')
				.set('ai', (card) => {
					return 8 - get.value(card);
				})
				.forResult();
		},
		async content(event, trigger, player) {
			player.recover();
		},
		ai: {
			threaten: 1.75,
		},
		subSkill: {
			reurk: {
				audio: 'ext:BLEACH/skill:2:mp3',
			},
			urk: {
				audio: 'ext:BLEACH/skill:2:mp3',
			},
		},
		audioname2: {
			bleach_quincy_heiqiyihu: 'bleach_quanli_icg',
			bleach_wuerqiaola: 'bleach_zaisheng_urk',
			bleach_re_wuerqiaola: 'bleach_zaisheng_reurk',
		},
	},
	bleach_gangpi: {
		subSkill: {
			nit: {
				audio: 'ext:BLEACH/skill:3:mp3',
			},
		},
		audioname2: {
			bleach_nnoitra: 'bleach_gangpi_nit',
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'damageBegin3',
		},
		forced: true,
		filter(event, player) {
			return event.source && event.source.countCards('h') < player.countCards('h');
		},
		content() {
			trigger.num--;
		},
		ai: {
			threaten: 1.65,
			nodamage: true,
			skillTagFilter(player, tag, arg) {
				if (arg && arg.player) {
					if ((arg && arg.player.hasSkillTag('jueqing', false, player)) || arg.player.hasSkillTag('damageBonus')) return false;
					if (arg && arg.player.countCards('h') > player.countCards('he')) return false;
				}
				return false;
			},
			effect: {
				target(card, player, target, current) {
					if (player.hasSkillTag('damageBonus')) return;
					if (player.hasSkillTag('jueqing', false, target, true) || target.hasBleachBuff('bleachMark_weak')) return;
					if (get.tag(card, 'damage') && target.countCards('h') >= player.countCards('h')) {
						return 'zerotarget';
					}
				},
			},
		},
	},
	bleach_xinheiyi: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			global: 'phaseEnd',
		},
		derivation: ['bleach_heixushan'],
		juexingji: true,
		forced: true,
		filter(event, player) {
			return Math.abs(player.hp - player.countCards('h')) >= 2;
		},
		content() {
			'step 0';
			player.awakenSkill('bleach_xinheiyi');
			player.bleachAwaken('bleach_wuerqiaola', 1, 'FadeToBlack_B07a');
			if (player.bleachIs(['bleach_wuerqiaola'])) game.mp417('ulquiorra_resurreccion');
			('step 1');
			player.loseMaxHp();
			player.addBleachBuff('bleachMark_up', 1, player);
			player.addSkills('bleach_heixushan');
		},
	},
	bleach_heixushan: {
		subSkill: {
			add: {
				trigger: {
					player: 'useCard1',
				},
				forced: true,
				popup: false,
				firstDo: true,
				filter(event, player) {
					return event.card && event.card.name == 'bleach_card_cero' && event.cards.length && get.type2(event.cards[0]) == 'equip';
				},
				content() {
					trigger.baseDamage++;
				},
			},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filterCard: {
			color: 'black',
		},
		position: 'hes',
		viewAs: {
			name: 'bleach_card_cero',
		},
		viewAsFilter(player) {
			return player.countCards('hes') > 0;
		},
		group: 'bleach_heixushan_add',
		prompt: '将一张黑色牌当虚闪使用,装备牌转化的伤害值+1',
		check(card) {
			return 5 - get.value(card);
		},
		ai: {
			order: 7,
			basic: {
				useful: 3,
				value: 8,
			},
			result: {
				target: -2,
			},
			tag: {
				damage: 1,
				loseCard: 1,
				respondShan: 1,
				respondSha: 1,
			},
		},
	},
	bleach_feimei: {
		subSkill: {
			kidou: {
				audio: 'ext:BLEACH/skill:2:mp3',
				trigger: {
					global: ['useCard', 'respond'],
				},
				filter(event, player) {
					return event.player != player && player.getExpansions('bleach_feimei').some((card) => card.name == event.card.name);
				},
				logTarget: 'player',
				prompt2: '移去对应的「飞梅」牌并对其造成1点火焰伤害.',
				check(event, player) {
					return get.attitude(player, event.player) < 0;
				},
				popup: false,
				async content(event, trigger, player) {
					const cards = player.getExpansions('bleach_feimei').filter((card) => card.name == trigger.card.name);
					player.loseToDiscardpile(cards);
					await trigger.player.damage('fire', 'nocard');
					if (player.getEquips('zanpakuto_tobiume').length) {
						trigger.targets.length = 0;
						trigger.all_excluded = true;
					}
				},
				sourceSkill: 'bleach_feimei',
			},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'phaseDiscardBegin',
		},
		group: ['bleach_feimei_kidou'],
		filter(event, player) {
			return player.countCards('h');
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseCard(get.prompt('bleach_feimei'), '将一张与「飞梅」牌名称均不同的手牌置于武将牌上', (card, player) => {
					return !player.getExpansions('bleach_feimei').some((cardx) => cardx.name == card.name) && get.type(card) != 'equip';
				})
				.set('ai', (card) => {
					if (player.needsToDiscard()) return 10 - get.value(card);
					return 7 - get.useful(card);
				})
				.forResult();
		},
		async content(event, trigger, player) {
			const cards = event.cards;
			player.addToExpansion(cards, player, 'giveAuto').gaintag.add('bleach_feimei');
		},
		onremove(player, skill) {
			var cards = player.getExpansions(skill);
			if (cards.length) player.loseToDiscardpile(cards);
		},
		intro: {
			markcount: 'expansion',
			content(content, player) {
				if (player == game.me || player.isUnderControl()) {
					return get.translation(player.getExpansions('bleach_feimei'));
				}
				return '共有' + get.cnNumber(player.getExpansions('bleach_feimei').length) + '张牌';
			},
		},
	},
	bleach_guidao: {
		audio: 'ext:BLEACH/skill:5:mp3',
		logAudio: () => ['ext:BLEACH/skill:4:mp3'],
		trigger: {
			player: ['logSkill', 'useSkillAfter'],
		},
		filter(event, player) {
			if (event.type != 'player') return false;
			return get.sourceSkillFor(event) == 'bleach_feimei';
		},
		async content(event, trigger, player) {
			await player.draw();
			const list = [];
			game.broadcastAll((list) => {
				for (var i = 0; i < lib.bleach_kido.length; i++) {
					const name = lib.bleach_kido[i];
					if (name != 'bleach_danku') list.push(['鬼道', '', name]);
				}
			}, list);
			const result = await player
				.chooseButton(['<div class="text center">请选择一种鬼道</div>', [list, 'vcard']], true, (button) => {
					return get.player().hasUseTarget({ name: button.link[2] });
				})
				.set('ai', (button) => {
					const player = get.player();
					return player.getUseValue({ name: button.link[2] });
				})
				.forResult();
			if (result.links?.length) {
				const cardx = { name: result.links[0][2] };
				const result2 = await player
					.chooseCard('he', '将一张牌当' + get.translation(cardx) + '使用', true, (card, player) => {
						return game.hasPlayer((current) => player.canUse(get.event('card'), current, false));
					})
					.set('ai', (card) => 6 - get.value(card))
					.set('card', cardx)
					.forResult();
				if (result2.bool) {
					player.chooseUseTarget(cardx, result2.cards, true).set('oncard', () => {
						if (cardx.name == 'bleach_shakkaho') game.playBleach('bleach_guidao5');
					});
				}
			}
		},
	},
	bleach_lingbi: {
		audio: 'ext:BLEACH/skill:2:mp3',
		zhuanhuanji(player, skill) {
			player.storage[skill] = !player.storage[skill];
			player.bleachAwaken('bleach_chad', 0 + player.storage[skill]);
		},
		ai: {
			threaten: 1.6,
		},
		group: ['bleach_lingbi_t', 'bleach_lingbi_f'],
		subSkill: {
			t: {
				audio: 'bleach_lingbi',
				trigger: {
					global: 'damageBegin3',
				},
				filter(event, player) {
					return !player.storage.bleach_lingbi && get.distance(player, event.player) <= 1;
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseCard(get.prompt('bleach_lingbi', trigger.player), 'he', lib.filter.cardRecastable)
						.set('ai', (card) => {
							if (get.attitude(player, trigger.player) > 3) return 10 - get.value(card);
							return 0;
						})
						.set('filterCard', (card) => get.color(card) == 'black')
						.set('prompt2', '重铸一张牌黑色牌,防止其受到的' + get.cnNumber(trigger.num) + '点伤害')
						.forResult();
				},
				logTarget: 'player',
				async content(event, trigger, player) {
					player.changeZhuanhuanji('bleach_lingbi');
					player.recast(event.cards);
					trigger.cancel();
				},
				sourceSkill: 'bleach_lingbi',
			},
			f: {
				audio: 'bleach_lingbi',
				trigger: {
					global: 'damageBegin1',
				},
				filter(event, player) {
					return player.storage.bleach_lingbi && event.source && get.distance(event.source, player) <= 1 && player != event.player;
				},
				async cost(event, trigger, player) {
					let str = trigger.source == player ? '' : '令' + get.translation(player) + '选择是否';
					event.result = await trigger.source
						.chooseBool('是否发动【灵臂】？', '你可以' + str + '重铸一张红色牌令伤害+1')
						.set('ai', () => {
							return get.attitude(get.player(), player) > 0;
						})
						.forResult();
				},
				async content(event, trigger, player) {
					player.changeZhuanhuanji('bleach_lingbi');
					const [card] = await player
						.chooseCard(get.prompt('bleach_lingbi', trigger.player), 'he', lib.filter.cardRecastable)
						.set('ai', (card) => {
							const player = get.player();
							if (get.attitude(player, trigger.player) > 0 && !player.hasCard((cardx) => get.color(cardx) == 'black', 'h')) return 0;
							return 10 - get.value(card);
						})
						.set('filterCard', (card) => get.color(card) == 'red')
						.set('prompt2', '重铸一张红色牌,令' + get.translation(trigger.player) + '受到的伤害+1')
						.forResult('cards');
					if (card) {
						player.recast(card);
						trigger.num++;
					}
				},
				sourceSkill: 'bleach_lingbi',
			},
		},
	},
	bleach_miaoshi: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToPlayered',
		},
		filter(event, player) {
			return event.targets.length == 1 && player.countCards('h') != event.target.countCards('h');
		},
		usable: 2,
		check(event, player) {
			const num = player.countCards('h') - event.target.countCards('h');
			if (num > 0) return num == 1 && get.effect(event.target, { name: 'sha' }, player, player) > 0;
			return Math.abs(num) >= 2;
		},
		logTarget: 'target',
		async content(event, trigger, player) {
			const num = player.countCards('h') - trigger.target.countCards('h');
			if (num > 0) {
				player.chooseToDiscard('h', num, true);
			} else {
				player.drawTo(Math.min(5, trigger.target.countCards('h')));
			}
			const source = num > 0 ? player : trigger.target,
				target = num > 0 ? trigger.target : player;
			if (source.canUse('sha', target, false)) source.useCard({ name: 'sha' }, target, false);
		},
		ai: {
			halfneg: true,
		},
	},
	bleach_niaoniang: {
		audio: 'ext:BLEACH/skill:4:mp3',
		trigger: {
			player: ['useCard', 'useCard2'],
		},
		filter(event, player, triggername) {
			const num = player.countCards('e') + 1;
			if ((player.getStat().skill.bleach_niaoniang || 0) >= num) return false;
			if (event.parent.name == 'bleach_niaoniang') return false;
			const type = get.type(event.card);
			if (type == 'equip' || type == 'delay') return false;
			if (triggername == 'useCard2') {
				const info = get.info(event.card);
				if (info.allowMultiple == false) return false;
				if (event.targets && !info.multitarget) {
					return game.filterPlayer().some((current) => {
						return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
					});
				}
				return false;
			}
			return event.targets && event.targets.length && event.targets.length <= 2;
		},
		async cost(event, trigger, player) {
			event.result =
				event.triggername == 'useCard2'
					? await player
						.chooseTarget(
							get.prompt('bleach_niaoniang'),
							'你可以令至多两名角色成为' + get.translation(trigger.card) + '的目标',
							(card, player, target) => {
								const trigger = _status.event.getTrigger();
								if (trigger.targets.includes(target)) return false;
								return lib.filter.targetEnabled2(trigger.card, player, target) && lib.filter.targetInRange(trigger.card, player, target);
							},
							[1, 2]
						)
						.set('ai', (target) => {
							const player = get.player();
							const trigger = _status.event.getTrigger();
							return get.effect(target, trigger.card, player, player);
						})
						.forResult()
					: await player
						.chooseTarget(get.prompt('bleach_niaoniang'), '是否令其中一名目标额外结算一次？', (card, player, target) => {
							return get.event('targets').includes(target);
						})
						.set('ai', (target) => {
							const player = get.player();
							const trigger = _status.event.getTrigger();
							return get.effect(target, trigger.card, player, player) && !get.tag(trigger.card, 'norepeat');
						})
						.set('targets', trigger.targets)
						.forResult();
		},
		async content(event, trigger, player) {
			if (!player.getStat().skill.bleach_niaoniang) player.getStat().skill.bleach_niaoniang = 0;
			player.getStat().skill.bleach_niaoniang++;
			const targets = event.targets.sortBySeat();
			if (event.triggername == 'useCard2') {
				trigger.targets.addArray(targets);
				game.log(targets, '成为了', trigger.card, '的额外目标');
			} else {
				player
					.when('useCardToTargeted')
					.filter((evt) => evt.parent == trigger)
					.then(() => {
						trigger.parent.targets = trigger.parent.targets.concat(targets);
						trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(targets);
					})
					.vars({ targets: targets });
			}
		},
		ai: {
			threaten: 1.5,
		},
	},
	bleach_gangyan: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToPlayered',
		},
		filter(event, player) {
			return event.isFirstTarget && (['sha', 'bleach_card_cero'].includes(event.card.name) || (get.type(event.card) == 'trick' && get.color(event.card) == 'black'));
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt2('bleach_gangyan'), (card, player, target) => {
					return get.event('targets').includes(target);
				})
				.set('ai', (target) => {
					const player = get.player();
					if (target.hasCard((card) => get.color(card) == get.color(trigger.card), 'he')) return -get.attitude(player, target) * Math.abs(get.bleachBuffEffect(target, 'bleachMark_fire'));
					return 0;
				})
				.set(
					'targets',
					trigger.targets.filter((i) => i.countDiscardableCards(player, 'he') > 0)
				)
				.forResult();
		},
		async content(event, trigger, player) {
			const target = event.targets[0];
			await player.loseHp();
			const [card] = await player.discardPlayerCard('he', target, true).forResult('cards');
			if (get.color(card) == get.color(trigger.card)) {
				const cardx = {
					name: 'sha',
					nature: 'fire',
					cards: [card],
					storage: {
						bleachMark_fire: 1,
					},
				};
				player.useCard(target, cardx, false);
			}
		},
		abnormal: true,
	},
	bleach_jieduan: {
		audio: 'ext:BLEACH/skill:4:mp3',
		enable: 'phaseUse',
		filterTarget: lib.filter.notMe,
		check(card) {
			return 10 - get.value(card);
		},
		filterCard: true,
		position: 'he',
		usable: 1,
		async content(event, trigger, player) {
			const target = event.target;
			await target.damage();
			const {
				result: { bool },
			} = !target.isIn() || !target.countDiscardableCards(player, 'he') ? { result: { bool: false } } : await player.discardPlayerCard(target, 'he').set('prompt2', '或点<取消>摸一张牌');
			if (!bool) {
				player.draw();
			}
		},
		ai: {
			order: 6.5,
			result: {
				target(player, target) {
					return get.damageEffect(target, player);
				},
			},
			threaten: 1.5,
		},
	},
	bleach_shanji: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToPlayered',
		},
		filter(event, player) {
			return event.targets.length == 1 && event.target != player;
		},
		check(event, player) {
			if (event.parent.excluded.includes(event.target)) return false;
			if (get.attitude(player, event.target) > 0 || !get.tag(event.card, 'damage')) return false;
			return player.hp >= 3 || (player.hp > 1 && player.hasSkill('bleach_cangjiao') && !player.awakenedSkills.includes('bleach_cangjiao'));
		},
		logTarget: 'target',
		content() {
			player.damage('nosource');
			trigger.parent.directHit.add(trigger.target);
			player.draw();
		},
	},
	bleach_cangjiao: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'damageEnd',
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		limited: true,
		init: (player, skill) => (player.storage[skill] = false),
		derivation: ['bleach_zhuangsui'],
		check(event, player) {
			return player.hp <= 2 || player.countCards('h') <= 1;
		},
		async content(event, trigger, player) {
			player.awakenSkill('bleach_cangjiao');
			player.bleachAwaken('bleach_yylfordt', 1);
			await player.recoverTo(player.maxHp);
			player.addSkills('bleach_zhuangsui');
			player.addBleachBuff('bleachEffect_break');
			if (player.countCards('h') <= _status.currentPhase.countCards('h')) player.draw(2);
		},
		ai: {
			threaten: 0.85,
		},
	},
	bleach_zhuangsui: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'damageEnd',
			source: 'damageSource',
		},
		abnormal: true,
		filter(event, player) {
			if (player.storage.bleach_zhuangsui_mark) return false;
			return true;
		},
		async cost(event, trigger, player) {
			const { control } = await player
				.chooseControl('cancel2')
				.set('choiceList', ['回复1点体力', '对' + get.translation(trigger.player) + '施加1层裂伤'])
				.set('prompt', get.prompt('bleach_zhuangsui', trigger.player))
				.set('ai', () => {
					return _status.event.choice;
				})
				.set(
					'choice',
					(function () {
						const player = get.player();
						const att = get.attitude(player, trigger.player);
						if (att > 0) {
							if (trigger.player.isDamaged()) return '选项一';
							return 'cancel2';
						}
						return '选项二';
					})()
				)
				.forResult();
			if (control === 'cancel2') event.result = { bool: false };
			else
				event.result = {
					bool: true,
					cost_data: ['选项一', '选项二'].indexOf(control),
				};
		},
		async content(event, trigger, player) {
			player.chat(['怎么了,兄弟!', '兄弟 就这？'].randomGet());
			if (event.cost_data == 0) {
				player.recover();
			} else {
				trigger.player.addBleachBuff('bleachMark_lieshang');
			}
			player.storage.bleach_zhuangsui_mark = true;
			player
				.when({ global: 'roundStart' })
				.assign({
					lastDo: true,
				})
				.then(() => delete player.storage.bleach_zhuangsui_mark);
		},
	},
	bleach_shetu: {
		audio: 'ext:BLEACH/skill:2:mp3',
		hiddenSkill: true,
		trigger: {
			player: 'showCharacterAfter',
		},
		filter(event, player) {
			return event.toShow && event.toShow.includes('bleach_shiwanyin');
		},
		forced: true,
		async content(event, trigger, player) {
			const card = get.cardPile((card) => card.name == 'sha');
			if (card) await player.gain(card, 'gain2');
			player.chooseUseTarget(card, 'nodistance').nopopup = true;
		},
	},
	bleach_huiya: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'phaseEnd',
		},
		prompt2(event, player) {
			let str = '你可以';
			const card = new lib.element.VCard({ name: 'sha' });
			const bool = !game.hasGlobalHistory('useCard', (evt) => get.type(evt.card) != 'basic'),
				goon = player.hasUseTarget(card) && !game.hasGlobalHistory('useCard', (evt) => get.type(evt.card) == 'basic');
			if (goon) {
				str += '视为使用一张【杀】';
			}
			if (bool) {
				if (goon) str += ',';
				str += '摸一张牌';
			}
			return str;
		},
		filter(event, player) {
			if (player.hasSkill('bleach_huiya_used')) return false;
			return !game.hasGlobalHistory('useCard', (evt) => get.type(evt.card) != 'basic') || (player.hasUseTarget({ name: 'sha' }) && !game.hasGlobalHistory('useCard', (evt) => get.type(evt.card) == 'basic'));
		},
		check(event, player) {
			return !game.hasGlobalHistory('useCard', (evt) => get.type(evt.card) != 'basic') && player.getUseValue({ name: 'sha' }) > 0;
		},
		async content(event, trigger, player) {
			player.addTempSkill('bleach_huiya_used', 'roundStart');
			const card = new lib.element.VCard({ name: 'sha' });
			if (player.hasUseTarget(card) && !game.hasGlobalHistory('useCard', (evt) => get.type(evt.card) == 'basic')) await player.chooseUseTarget(card, false, true);
			if (!game.hasGlobalHistory('useCard', (evt) => get.type(evt.card) != 'basic')) await player.draw();
		},
		subSkill: {
			used: {
				charlotte: true,
				sourceSkill: 'bleach_huiya',
			},
		},
	},
	bleach_xuexia: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'chooseToUse',
		viewAsFilter(player) {
			return player.countCards('h') != player.getHp();
		},
		viewAs: {
			name: 'wuxie',
		},
		usable: 1,
		filterCard: () => false,
		selectCard: -1,
		precontent() {
			const num = player.countCards('h') - player.hp;
			if (num > 0) {
				player.chooseToDiscard('h', num, true);
				player
					.when({ player: 'useCard' })
					.filter((evt) => evt.card.name == 'wuxie')
					.then(() => {
						trigger.directHit.addArray(game.players);
					});
			} else {
				player.drawTo(player.hp);
			}
		},
		prompt: '将手牌数调整至体力值视为使用一张【无懈可击】.',
		check: () => 1,
		ai: {
			basic: {
				useful: [6, 4, 3],
				value: [6, 4, 3],
			},
			result: {
				player(player) {
					if (player.countCards('h') - player.hp > 2) return -1;
					return 1;
				},
			},
			expose: 0.2,
		},
	},
	bleach_lianfu: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToPlayered',
		},
		filter(event, player) {
			return event.target != player && player.countMark('bleach_lianfu') < 4;
		},
		check(event, player) {
			return get.attitude(player, event.target) <= 0;
		},
		logTarget: 'target',
		prompt2(event, player) {
			var num = player.countMark('bleach_lianfu');
			var str = '当你使用牌指定其他角色为目标后,你可以摸一张移除此项并' + ['令其不能响应' + get.translation(event.card) + '', '横置其', '弃置其一张牌', '对其造成1点火焰伤害'][num];
			return str + '.';
		},
		async content(event, trigger, player) {
			player.addMark('bleach_lianfu', 1, false);
			player.draw();
			let num = player.countMark('bleach_lianfu');
			while (true) {
				let str;
				switch (num) {
					case 1:
						trigger.parent.directHit.add(trigger.target);
						str = '这种程度的缚道吗？';
						trigger.target.chat('只靠这种程度的缚道将我束缚 想要拿我如何');
						game.playBleach('bleach_lianfu3');
						break;
					case 2:
						trigger.target.link(true);
						str = '缚道之六十三 锁链束缚';
						break;
					case 3:
						player.discardPlayerCard(trigger.target, 'he', true);
						str = '太迟了!';
						trigger.target.chat('你以为我会让你使用这个鬼道吗？这种招数');
						break;
					case 4:
						trigger.target.damage('nocard', 'fire');
						str = '破道之九十一 千手皎天汰炮';
						game.playBleach('bleach_lianfu4');
						if (trigger.target.bleachIs(['bleach_hougyoku_lanran'])) trigger.target.addSkill('bleach_lianfu_kido');
						break;
				}
				player.chat(str);
				const history = player.getAllHistory('useSkill', (evt) => evt.skill == 'bleach_lianfu');
				if (num != player.countMark('bleach_lianfu') || history.length < 2) {
					return;
				}
				if (history.length >= 2) {
					num--;
					if (history[history.length - 2].targets[0] != trigger.target) return;
				}
			}
		},
		subSkill: {
			kido: {
				trigger: {
					player: 'phaseUseEnd',
				},
				filter(event, player) {
					return player.hasSkill('bleach_lianfu_mark');
				},
				forced: true,
				group: 'bleach_lianfu_count',
				charlotte: true,
				silent: true,
				content() {
					'step 0';
					player.removeSkill('bleach_diehua_effect');
					player.chat('鬼道吗？这东西是什么时候...');
					if (game.hasPlayer((current) => current.bleachIs(['bleach_puyuanxizhu']))) {
						var current = game.findPlayer((current) => current.bleachIs(['bleach_puyuanxizhu']));
						current.chat('看来终于发动了啊');
					}
					event.say = ['浦原喜助 是你干的好事吗', '以你那种水准的鬼道', '妄想封印我简直是痴人说梦'];
					('step 1');
					if (event.say.length) {
						player.chat(event.say.shift());
						event.redo();
					} else {
						player.chat('这是...怎么回事');
						player.discard(player.getCards('e'));
						event.say = ['怎么会有这种事 这不可能', '浦原 浦原喜助 我鄙视你!', '你有那样的头脑为什么没有行动', '为什么要臣服于那种东西'];
					}
					('step 2');
					if (event.say.length) {
						player.chat(event.say.shift());
						if (player.countCards('h')) player.discard(player.getCards('h').randomGet());
						event.redo();
					} else {
						event.say = ['那种东西？你是指灵王吗', '这样啊 你看到了啊', '灵王如若消失 尸魂界将四分五裂', '灵王就是个楔子', '楔子一但失去 变会轻而易举的崩塌', '所谓世界就是这种东西'];
					}
					('step 3');
					if (event.say.length) {
						var target = game.findPlayer((current) => current.bleachIs(['bleach_puyuanxizhu']));
						if (!target) {
							game.countPlayer2((current) => {
								if (current.bleachIs(['bleach_puyuanxizhu'])) {
									current.maxHp = Infinity;
									current.update();
									current.revive(current.maxHp);
									var target = current;
								}
							});
						}
						if (target) target.chat(event.say.shift());
						event.redo();
					} else {
						event.say = ['你这完全是败者理论!', '胜者绝对不会轻言世界是何种存在!', '而是会强调世界应该是怎样的存在!我...'];
					}
					('step 4');
					if (event.say.length) {
						player.chat(event.say.shift());
						event.redo();
					} else {
						player.maxHp = 1;
						player.update();
						player.loseMaxHp();
						game.countPlayer2((current) => {
							if (current.bleachIs(['bleach_puyuanxizhu']) && current.maxHp == Infinity) {
								current.maxHp = 1;
								current.update();
								current.loseMaxHp();
							}
						});
					}
				},
			},
			count: {
				charlotte: true,
				trigger: {
					player: ['logSkill', 'useSkillAfter'],
				},
				silent: true,
				popup: false,
				firstDo: true,
				filter(event, player) {
					var skill = event.sourceSkill || event.skill;
					return skill == 'bleach_newzaisheng';
				},
				content() {
					player.addSkill('bleach_lianfu_mark');
				},
				forced: true,
			},
			mark: {
				charlotte: true,
			},
		},
	},
	bleach_fangui: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'useCard',
		},
		filter(event, player) {
			const suit = event.card.suit;
			if (!lib.suit.includes(suit) || event.all_excluded) return false;
			if (player.getStorage('bleach_fangui_used').includes(suit)) return false;
			return (
				player != event.player &&
				player.hasCard((card) => {
					return _status.connectMode || (card.suit == event.card.suit && player.hasUseTarget(card, false, false));
				}, 'hs')
			);
		},
		async cost(event, trigger, player) {
			let effect = 0;
			const suit = trigger.card || trigger.cards[0].suit;
			let str = '反鬼:是否使用一张' + get.translation(suit) + '牌以令' + get.translation(trigger.player);
			if (trigger.card.name == 'wuxie' || trigger.card.name == 'shan') {
				if (get.attitude(player, trigger.player) < -1) effect = -1;
			} else if (trigger.targets && trigger.targets.length) {
				str += '对' + get.translation(trigger.targets);
				trigger.targets.forEach((target) => (effect += get.effect(target, trigger.card, trigger.player, player)));
			}
			str += '使用的' + get.translation(trigger.card) + '失效,摸一张牌？';
			event.result = await player
				.chooseToUse({
					filterCard(card, player) {
						if (card.suit != get.event('suit')) return false;
						return lib.filter.filterCard.apply(this, arguments);
					},
					suit: suit,
					ai1(card) {
						const player = get.player(),
							event = get.event().getTrigger();
						if (effect < 0) {
							if (event.card.name == 'sha') {
								if (
									event.targets.some((target) => {
										if (target == player) return !player.countCards('h', 'shan');
										return target.hp == 1 || (target.countCards('h') <= 2 && target.hp <= 2);
									})
								)
									return player.getUseValue(card);
								return 0;
							}
							return player.getUseValue(card);
						}
						return 0;
					},
					prompt: str,
				})
				.forResult();
		},
		async content(event, trigger, player) {
			trigger.targets.length = 0;
			trigger.all_excluded = true;
			player.draw();
			player.markAuto('bleach_fangui_used', [event.cards[0].suit]);
		},
		ai: {
			threaten: 1.65,
		},
		subSkill: {
			used: {
				intro: {
					content: '已使用花色:$',
				},
			},
		},
	},
	bleach_shunhong: {
		trigger: {
			global: 'phaseEnd',
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		filter(event, player) {
			const history = player.getHistory('useCard').concat(player.getHistory('respond'));
			return history.length;
		},
		forced: true,
		content() {
			player.chooseUseTarget('###是否发动【瞬閧】？###视为使用一张没有距离限制的【杀】', { name: 'sha', nature: 'thunder' }, false, 'nodistance');
		},
		mod: {
			globalTo(from, to, distance) {
				return distance + 1;
			},
		},
	},
	bleach_newjianya: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: ['phaseZhunbeiEnd', 'phaseJudgeEnd', 'phaseDrawEnd', 'phaseUseEnd', 'phaseDiscardEnd', 'phaseJieshuEnd'],
		},
		filter(event, player) {
			let count = 0;
			player.checkHistory('gain', (evt) => {
				if (evt.getParent(event.name) !== event) return;
				count += evt.cards.length;
			});
			return count > 0 && game.hasPlayer((current) => current != player && player.inRange(current));
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt2('bleach_newjianya'), (card, player, target) => {
					return target != player && player.inRange(target);
				})
				.set('ai', (target) => {
					const player = get.player();
					return get.damageEffect(target, player, player);
				})
				.forResult();
		},
		async content(event, trigger, player) {
			event.targets[0].damage();
		},
		ai: {
			threaten: 2,
		},
	},
	bleach_ege: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToTargeted',
		},
		logTarget: 'target',
		check(event, player) {
			return get.attitude(player, event.target) <= 0;
		},
		filter(event, player) {
			return event.card && event.card.name == 'sha' && event.target.countCards('h');
		},
		async content(event, trigger, player) {
			const { cards } = await player.choosePlayerCard(trigger.target, 'h', true).forResult();
			const color = get.color(cards[0]);
			trigger.target.showCards(cards);
			if (get.color(trigger.card) != 'none' && get.color(trigger.card) == color) {
				trigger.parent.directHit.push(trigger.target);
				let id = trigger.target.playerid,
					map = trigger.parent.customArgs;
				if (!map[id]) map[id] = {};
				if (typeof map[id].extraDamage != 'number') {
					map[id].extraDamage = 0;
				}
				map[id].extraDamage++;
				if (trigger.addCount !== false) {
					trigger.addCount = false;
					trigger.player.getStat().card.sha--;
				}
			} else {
				const next = trigger.target.discard(cards);
				next.discarder = player;
				player.draw();
			}
		},
	},
	bleach_xinjiling: {
		audio: 'ext:BLEACH/skill:4:mp3',
		enable: 'phaseUse',
		usable: 2,
		content() {
			'step 0';
			event.cards = get.cards(1);
			var next = player.chooseCardButton(event.cards);
			next.filterButton((button) => player.hasUseTarget(button.link));
			('step 1');
			if (result.links?.length) {
				player.chooseUseTarget(result.links[0], false, true, 'nodistance');
			}
			('step 2');
			if (!result.bool) {
				ui.cardPile.insertBefore(event.cards[0], ui.cardPile.firstChild);
				game.updateRoundNumber();
			}
		},
		ai: {
			order: 1,
			result: {
				player: 1,
			},
		},
		audioname2: {
			bleach_quincy_heiqiyihu: 'bleach_quanli_icg',
		},
	},
	bleach_lingshi: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardBegin',
		},
		forced: true,
		filter(event, player) {
			return event.skill != 'bleach_lingshi';
		},
		content() {
			const num = player.countCards('h');
			player
				.when({ player: 'useCardAfter' })
				.filter((evt) => evt == trigger)
				.then(() => {
					if (player.countCards('h') == num) {
						player.chooseUseTarget('###是否发动【灵矢】？###视为使用一张没有距离限制的【杀】', { name: 'sha' }, false, 'nodistance');
					}
				})
				.vars({ num: num });
		},
	},
	bleach_chongzou: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'useCardToPlayer',
		},
		filter(event, player) {
			if (player.hasSkill('bleach_chongzou_round')) return false;
			if (!event.targets || !event.isFirstTarget) return false;
			if (event.player == player || (event.targets.length == 1 && event.targets.includes(event.player))) return false;
			return (
				(get.type2(event.card) == 'trick' || event.card.name == 'bleach_card_cero') &&
				['red', 'black'].includes(get.color(event.card)) &&
				game.hasPlayer((current) => {
					return event.targets.includes(current) && get.distance(player, current) <= 1;
				}) &&
				player.countCards('he') > 0
			);
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseToDiscard('是否弃置一张' + get.translation(get.event('color')) + '牌发动「重奏」?', '将' + get.translation(trigger.card) + '的使用者改为你,目标改为' + get.translation(trigger.player), 'he', (card) => get.color(card) == get.event('color'))
				.set('color', get.color(trigger.card))
				.set('ai', (card) => {
					if (['tiesuo', 'bleach_card_zhengyizhaozhuang'].includes(trigger.card.name)) return 0;
					let effect = 0;
					trigger.targets.forEach((target) => (effect += get.effect(target, trigger.card, trigger.player, player)));
					if (effect < 0) {
						if (get.effect(trigger.player, trigger.card, player, player) > 0) return 8 - get.value(card);
					}
					return 0;
				})
				.forResult();
		},
		async content(event, trigger, player) {
			player.addTempSkill('bleach_chongzou_round', 'roundStart');
			player.line(trigger.player, 'green');
			trigger.untrigger();
			trigger.parent.player = player;
			game.log(player, '成为了', trigger.card, '的使用者,', trigger.player, '成为了目标');
			trigger.targets.length = 0;
			trigger.parent.triggeredTargets1.length = 0;
			trigger.parent.targets.push(trigger.player);
			if (get.tag(trigger.card, 'damage')) {
				player
					.when({ global: 'useCardToTargeted' })
					.filter((evt) => evt.card == trigger.parent.card)
					.then(() => {
						const id = trigger.target.playerid;
						let map = trigger.parent.customArgs;
						if (!map[id]) map[id] = {};
						if (typeof map[id].extraDamage != 'number') {
							map[id].extraDamage = 0;
						}
						map[id].extraDamage++;
					});
			}
		},
		ai: {
			threaten: 1.5,
		},
		subSkill: {
			round: {},
		},
	},
	bleach_lingqi: {
		audio: 'ext:BLEACH/skill:1:mp3',
		derivation: ['bleach_cuiqiang'],
		enable: 'phaseUse',
		limited: true,
		content() {
			'step 0';
			player.awakenSkill('bleach_lingqi');
			if (player.bleachIs(['bleach_nelliel'])) game.mp417('nelliel_resurreccion');
			player.bleachAwaken('bleach_nelliel', 1, 'Senna');
			('step 1');
			event.lose = player.loseMaxHp();
			('step 2');
			if (event.lose && event.lose.loseHp) player.draw(2);
			player.addSkills(['bleach_cuiqiang', 'mashu']);
			player
				.when('phaseEnd')
				.assign({
					mod: {
						maxHandcard(player, num) {
							if (player.getStat('damage')) return num - player.getStat('damage');
						},
					},
				})
				.then(() => { });
		},
		ai: {
			order: 13,
			result: {
				player(player) {
					const players = game.filterPlayer((current) => current != player);
					for (var i of players) {
						const att = get.attitude(player, i);
						if (att <= 0) {
							const hs =
								player.countCards('h', (card) => {
									return player.canUse(card, i) && get.effect(i, card, player, player) != 0;
								}) +
								(player.hp === player.maxHp);
							if (Math.floor(hs / 2) >= Math.min(3, i.hp)) return 1;
						}
					}
					return 0;
				},
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_cuiqiang: {
		usable: 2,
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filter(event, player) {
			return player.countCards('he') > 0 && !game.hasPlayer((current) => current.getExpansions('bleach_cuiqiang').length);
		},
		filterCard: true,
		filterTarget(event, player, target) {
			return target != player;
		},
		position: 'he',
		discard: false,
		lose: false,
		delay: false,
		check(card) {
			const player = get.player(),
				hs = player.getCards('h'),
				suits = hs.map((i) => i.suit);
			for (var i of lib.suit) {
				const num = hs.filter((c) => c.suit == i).length;
				if (num > 2 || (num > 1 && suits.includes(i))) return 7 - get.useful(card);
			}
			return 4.5 - get.value(card);
		},
		group: 'bleach_cuiqiang_lose',
		content() {
			'step 0';
			target.addToExpansion(cards, player, 'gain2').gaintag.add('bleach_cuiqiang');
			('step 1');
			player.draw();
		},
		ai: {
			threaten: 1.25,
			order: 13,
			result: {
				target(player, target) {
					if (player.inRange(target)) return -1.5;
					return -1;
				},
			},
			effect: {
				player(card, player, target) {
					if (target && target.getExpansions('bleach_cuiqiang').some((i) => card.suit == i.suit)) return [1, 0, 1, -2];
				},
			},
		},
		intro: {
			content: 'expansion',
			markcount: 'expansion',
		},
		subSkill: {
			lose: {
				forced: true,
				trigger: {
					player: 'useCardToPlayered',
				},
				filter(event, player) {
					return event.target.getExpansions('bleach_cuiqiang').some((i) => i.suit == event.card.suit);
				},
				logTarget: 'target',
				charlotte: true,
				content() {
					'step 0';
					trigger.target.loseHp();
					('step 1');
					trigger.target.loseToDiscardpile(trigger.target.getExpansions('bleach_cuiqiang'));
				},
			},
		},
	},
	bleach_kuangxiao: {
		group: ['bleach_kuangxiao_effect'],
		subSkill: {
			effect: {
				trigger: {
					global: 'phaseJieshuBegin',
				},
				silent: true,
				filter(event, player) {
					return player.getStat('damage');
				},
				content() {
					const cards = [];
					player.getHistory('useCard', (evt) => {
						const card = evt.card;
						if (card.name == 'sha' && get.color(card) == 'black' && player.hasHistory('sourceDamage', (evtx) => evtx.card == card)) {
							cards.push(evt.card);
						}
					});
					const targets = game.filterPlayer((current) => {
						return current.hasHistory('damage', (evt) => evt.card && cards.some((card) => card == evt.card));
					});
					game.log(cards, targets);
					if (targets.length) {
						player.line(targets, 'green');
						targets.forEach((target) => {
							const num = target.getHistory('damage', (evt) => evt.card && cards.some((card) => card == evt.card)).length;
							target.addBleachBuff('bleachMark_lieshang', num);
						});
					}
				},
			},
		},
		audio: 'ext:BLEACH/skill:3:mp3',
		trigger: {
			source: 'damageSource',
		},
		filter(event, player) {
			return event.card && event.card.name == 'sha' && event.player.countCards('he');
		},
		abnormal: true,
		async cost(event, trigger, player) {
			const result = await player
				.gainPlayerCard(get.prompt('bleach_kuangxiao', trigger.player), trigger.player, 'hej', 'visibleMove')
				.set('ai', (card) => {
					const player = get.player();
					if (get.attitude(player, trigger.player) <= 0) {
						if (player.hp > 1 || player.countCards('h', 'sha')) return 1;
					}
					return 0;
				})
				.forResult();
			if (result.bool) event.result = result;
		},
		async content(event, trigger, player) {
			trigger.player.useCard({ name: 'juedou' }, player, 'noai').animate = false;
			player.when({ global: 'juedouAfter' }).then(() => {
				trigger.turn.chooseToDiscard('he', true);
			});
		},
	},
	bleach_daogao: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			player: 'damageEnd',
		},
		forced: true,
		derivation: ['bleach_gangpi', 'bleach_shengku'],
		juexingji: true,
		filter(event, player) {
			return event.source && player.getAllHistory('sourceDamage').some((evt) => evt.player == event.source) && player.isMinHp();
		},
		content() {
			'step 0';
			player.awakenSkill('bleach_daogao');
			player.bleachAwaken('bleach_nnoitra', 1, 'Treachery');
			('step 1');
			player.loseMaxHp();
			var num = player.getDamagedHp();
			player.recoverTo(player.maxHp);
			player.draw(num - 1);
			('step 2');
			player.addSkills(['bleach_gangpi', 'bleach_shengku']);
			player.gain(player.getCards('e'), 'gain2');
			var disables = [];
			for (var i = 2; i <= 5; i++) {
				for (var j = 0; j < player.countEnabledSlot(i); j++) {
					disables.push(i);
				}
			}
			if (disables.length) player.disableEquip(disables);
			for (var i = 0; i < 5; i++) {
				player.expandEquip(1);
			}
		},
		ai: {
			maixie: true,
			effect: {
				target(card, player, target) {
					if (!target.hasFriend() || !target.getAllHistory('sourceDamage').some((evt) => evt.player == player)) return;
					const minhp = game.findPlayer((current) => current.isMinHp()).hp;
					if (target.hp - 1 == minhp && !target.isTurnedOver() && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
				},
			},
		},
	},
	bleach_shengku: {
		audio: 'ext:BLEACH/skill:3:mp3',
		trigger: {
			player: 'useCard1',
		},
		filter(event, player) {
			return event.card && event.card.name == 'sha' && event.addCount != false && get.type(event.cards[0], 'trick') == 'equip';
		},
		forced: true,
		content() {
			trigger.addCount = false;
			const cards = trigger.cards.filter((card) => get.subtype(card, false) == 'equip1');
			player
				.when('useCardAfter')
				.filter((evt) => evt == trigger)
				.then(() => {
					for (let card of cards) player.equip(card);
				})
				.vars({ cards: cards });
		},
		ai: {
			threaten: 1.45,
		},
		mod: {
			cardname(card, player, name) {
				if (['equip'].includes(lib.card[card.name].type)) return 'sha';
			},
			cardUsable(card, player) {
				if (!card.cards) return;
				for (var i of card.cards) {
					if (['equip'].includes(lib.card[i.name].type)) return Infinity;
				}
			},
			maxHandcard(player, num) {
				const types = [],
					cards = player.getCards('h');
				for (var i of cards) {
					if (lib.card[i.name].type == 'equip' && !types.includes(lib.card[i.name].subtype)) {
						types.add(lib.card[i.name].subtype);
					}
				}
				return (num += types.length);
			},
		},
	},
	bleach_jianya: {
		subSkill: {
			dmg: {
				audio: 'bleach_jianya',
				trigger: {
					source: 'damageBegin1',
				},
				forced: true,
				audio: 'bleach_jianya',
				filter(event, player) {
					return event.card && event.card.name == 'sha' && player.hasMark('bleach_jianya');
				},
				content() {
					trigger.num += player.countMark('bleach_jianya');
					player.removeMark('bleach_jianya', player.countMark('bleach_jianya'), false);
				},
				sourceSkill: 'bleach_jianya',
			},
			miss: {
				audio: 'bleach_jianya',
				trigger: {
					player: 'useCardAfter',
				},
				forced: true,
				filter(event, player) {
					if (
						player.getHistory('sourceDamage', (evt) => {
							return evt.card == event.card;
						}).length
					)
						return false;
					return event.card && event.card.name == 'sha';
				},
				content() {
					player.addMark('bleach_jianya', 1, false);
				},
				sourceSkill: 'bleach_jianya',
			},
		},
		shaRelated: true,
		audio: 'ext:BLEACH/skill:6:mp3',
		trigger: {
			player: 'useCardToPlayered',
		},
		filter(event, player) {
			return event.card && event.card.name == 'sha' && event.target.countDiscardableCards(player, 'he') > 0;
		},
		forced: true,
		logTarget: 'target',
		group: ['bleach_jianya_miss', 'bleach_jianya_dmg'],
		content() {
			var next = player.discardPlayerCard('he', trigger.target, true);
			next.set('prompt', '剑压:弃置其一张牌');
			next.set('ai', (button) => {
				if (get.position(button.link) == 'e') {
					if ((get.subtype(button.link) == 'equip2' && !player.hasBleachBuff('bleachEffect_break')) || get.subtype(button.link) == 'equip3') return 2 * get.value(button.link);
					if (get.position(button.link) == 'h') return 1.5 * get.value(button.link);
					return get.value(button.link);
				}
				return 1;
			});
		},
		ai: {
			damageBonus: true,
			unequip: true,
			directHit_ai: true,
			skillTagFilter(player, tag, arg) {
				if (tag == 'directHit_ai') return arg.card.name == 'sha' && arg.target.countCards('h') <= 1;
				else if (tag == 'unequip') return arg && arg.name == 'sha' && arg.target.getEquips(2).length;
				return arg && arg.card.name == 'sha' && player.hasMark('bleach_jianya');
			},
		},
		intro: {
			content: '下一次【杀】造成的伤害＋#',
		},
	},
	bleach_douzhi: {
		audio: 'ext:BLEACH/skill:2:mp3',
		derivation: ['bleach_xiangzhan'],
		trigger: {
			global: 'recoverAfter',
		},
		juexingji: true,
		forced: true,
		filter(event, player) {
			return (
				player
					.getAllHistory('useCard', (evt) => evt.card.name == 'sha')
					.some((evt) => {
						return evt.targets && evt.targets.includes(event.player);
					}) &&
				event.player
					.getAllHistory('useCard', (evt) => evt.card.name == 'sha')
					.some((evt) => {
						return evt.targets && evt.targets.includes(player);
					})
			);
		},
		async content(event, trigger, player) {
			player.awakenSkill('bleach_douzhi');
			player.bleachAwaken('bleach_gengmu', 1, 'ShowingOff');
			if (player.bleachIs(['bleach_gengmu'])) game.mp417('kenpachi_fuinkaijo');
			await player.draw(trigger.player.getHp());
			player.addSkill('bleach_douzhi_att');
			player.addBleachBuff('bleachEffect_break');
			player.changeSkills(['bleach_xiangzhan'], ['bleach_fengyin']);
		},
		subSkill: {
			chat: {
				trigger: {
					source: 'dieAfer',
				},
				filter(event, player) {
					return event.player.bleachIs('bleach_nnoitra');
				},
				silent: true,
				content() {
					player.chat('跟你交手,我很愉快......诺伊特拉.');
				},
			},
			att: {
				forced: true,
				trigger: {
					source: 'damageBegin1',
				},
				group: 'bleach_douzhi_chat',
				charlotte: true,
				filter(event, player) {
					return ['sha', 'juedou'].includes(event.parent.name) && event.player != player;
				},
				lastDo: true,
				content() {
					trigger.num += trigger.num;
				},
				ai: {
					damageBonus: true,
					skillTagFilter(player, tag, arg) {
						return arg && (arg.card.name == 'sha' || arg.card.name == 'juedou');
					},
				},
				sourceSkill: 'bleach_douzhi',
			},
		},
	},
	bleach_fengyin: {
		trigger: {
			player: 'damageBegin3',
		},
		filter(event, player) {
			if (!event.source || !event.card || event.card.name != 'sha') return false;
			return !player.getStorage('bleach_fengyin').includes(event.source);
		},
		forced: true,
		content() {
			trigger.num--;
			player.markAuto('bleach_fengyin', [trigger.source]);
		},
		mod: {
			maxHandcard(player, num) {
				return num - Math.floor(player.getHp() / 2);
			},
		},
		ai: {
			neg: true,
		},
	},
	bleach_liehua: {
		subSkill: {
			arn: {
				audio: 'ext:BLEACH/skill:2:mp3',
			},
		},
		audioname2: {
			bleach_yaluoniluo: 'bleach_liehua_arn',
		},
		mod: {
			aiOrder(player, card, num) {
				if (player.getHistory('useCard', (evt) => evt.card.suit == card.suit)) return;
				return num + 5;
			},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToPlayered',
		},
		forced: true,
		filter(event, player) {
			const suit = event.card.suit;
			if (!lib.suit.includes(suit)) return false;
			const history = player.getHistory('useCard');
			for (var i = 0; i < history.length; i++) {
				if (history[i] != event.parent && history[i].card.suit == suit) return false;
			}
			return event.targets && event.targets.length == 1;
		},
		async content(event, trigger, player) {
			await player.draw();
			if (!player.countCards('he')) return;
			const { cards } = await player
				.chooseToDiscard('he', true)
				.set('ai', (card) => {
					if (trigger.target.countCards('he') && get.attitude(player, trigger.target) <= 0) {
						if (!['shunshou', 'guohe', 'qijia', 'jiedao', 'huogong'].includes(trigger.card.name) && trigger.target.countCards('he') == 1) {
							if (card.suit == trigger.card.suit) return 8 - get.value(card);
						}
					}
					return 1;
				})
				.set('prompt2', '若弃置的牌为' + get.translation(trigger.card.suit) + '花色,则你可以弃置' + get.translation(trigger.target) + '区域内的一张牌.')
				.forResult();
			if (cards[0].suit == trigger.card.suit && trigger.target.countDiscardableCards(player, 'hej')) {
				player.discardPlayerCard(trigger.target, 'hej');
			}
		},
	},
	bleach_nijuan: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: ['loseAfter'],
			global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
		},
		filter(event, player) {
			if (!player.countCards('h')) {
				if (player.hasSkill('bleach_nijuan_lost')) return false;
				const evt = event.getl(player);
				return evt?.hs?.length;
			}
			const evt = event.getl(player);
			return evt && evt.cards2.length > 1;
		},
		async cost(event, trigger, player) {
			const evt = trigger.getl(player);
			const num = evt.cards2.length;
			event.result = await player
				.chooseTarget('请选择【逆卷】的目标', '为一名其他角色选择一项:⒈弃置' + get.cnNumber(num) + '张牌.⒉受到1点伤害.', lib.filter.notMe)
				.set('ai', (target) => {
					return -get.attitude(get.player(), target);
				})
				.forResult();
		},
		async content(event, trigger, player) {
			const evt = trigger.getl(player);
			if (evt?.hs?.length && !player.countCards('h')) player.addTempSkill('bleach_nijuan_lost');
			const target = event.targets[0];
			const num = trigger.getl(player).cards2.length;
			const { index } = await player
				.chooseControl()
				.set('choiceList', ['令' + get.translation(target) + '弃置' + get.cnNumber(num) + '张牌', '对其造成1点伤害'])
				.set('ai', () => {
					const player = get.player();
					const eff0 = Math.min(num, target.countCards('he'));
					const eff1 = get.damageEffect(target, player, player);
					return eff0 > 2 ? 0 : 1;
				})
				.forResult();
			player.line(target, 'green');
			if (index == 0) target.chooseToDiscard('he', num, true);
			else target.damage();
		},
		subSkill: {
			lost: {
				charlotte: true,
				sourceSkill: 'bleach_nijuan',
			},
		},
	},
	bleach_jiusuo: {
		audio: 'ext:BLEACH/skill:4:mp3',
		audioname2: {
			bleach_zhulian: 'bleach_jiusuo_sln',
		},
		subSkill: {
			sln: {
				audio: 'ext:BLEACH/skill:2:mp3',
			},
			revive: {
				trigger: {
					global: 'phaseBegin',
				},
				forced: true,
				popup: false,
				lastDo: true,
				forceDie: true,
				forceOut: true,
				content() {
					player.removeMark('bleach_jiusuo_revive', 1, false);
					player.markSkill('bleach_jiusuo_revive');
					if (!player.hasMark('bleach_jiusuo_revive')) {
						game.broadcastAll((player) => {
							player.revive(4);
							player.link(true);
						}, player);
						player.removeSkill('bleach_jiusuo_revive');
					}
				},
				intro: {
					content: '剩余#回合复活',
				},
			},
		},
		trigger: {
			player: ['die', 'linkBefore', 'enterGame'],
			global: 'phaseBefore',
		},
		forced: true,
		forceDie: true,
		filter(event, player) {
			if (event.name == 'link') return player.isLinked();
			return event.name == 'die' || ((event.name != 'phase' || game.phaseNumber == 0) && !player.isLinked());
		},
		content() {
			if (trigger.name == 'die') {
				player.addMark('bleach_jiusuo_revive', 9, false);
				player.addSkill('bleach_jiusuo_revive');
			} else if (trigger.name == 'link') {
				trigger.cancel();
			} else {
				player.link(true);
				if (game.hasPlayer((current) => current.bleachIs(['bleach_re_heiqiyihu']))) {
					player.chat('欢迎来到地狱!');
				}
			}
		},
		ai: {
			effect: {
				target(card) {
					if (card.name == 'tiesuo') return 'zeroplayertarget';
				},
			},
		},
	},
	bleach_zuie: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			source: 'damageSource',
			player: 'damageEnd',
		},
		filter(event, player) {
			const target = lib.skill.bleach_zuie.logTarget(event, player);
			return target && target.isIn() && !target.isLinked() && event.parent.parent.parent.name != 'bleach_zuie';
		},
		logTarget(event, player, triggername) {
			return event.source != player ? event.source : event.player;
		},
		async content(event, trigger, player) {
			lib.skill.bleach_zuie.logTarget(trigger, player).link(true);
			player.draw(2);
			const result = await player
				.chooseCardTarget({
					prompt2: '是否将两张手牌当【杀】使用',
					filterCard: true,
					selectCard: 2,
					filterTarget(card, player, target) {
						return player.canUse({ name: 'sha' }, target);
					},
					ai1(card) {
						return 6 - get.value(card);
					},
					ai2(target) {
						return get.effect(target, { name: 'sha' }, get.player());
					},
				})
				.forResult();
			if (result.targets?.length) {
				player.useCard({ name: 'sha' }, result.cards, result.targets[0], false);
			}
		},
		ai: {
			threaten: 2,
			maixie: true,
			maixie_hp: true,
			effect: {
				target(card, player, target) {
					if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
					if (player.isLinked()) return;
					if (get.tag(card, 'damage')) return [1, 0.55];
				},
			},
		},
	},
	bleach_chazhu: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			source: 'damageEnd',
		},
		group: 'bleach_chazhu_effect',
		global: 'g_bleach_chazhu',
		check(event, player) {
			return get.attitude(player, event.player) <= 0;
		},
		logTarget: 'player',
		filter(event, player) {
			return event.player.isIn() && event.player != player;
		},
		prompt2(event, player) {
			const num = Math.max(1, event.player.countMark('bleach_chazhu_equip'));
			return '令' + get.translation(event.target) + '攻击范围-' + get.translation(num) + ',直到其武器栏发生变化.';
		},
		content() {
			trigger.player.addMark('bleach_chazhu_equip', Math.max(1, trigger.player.countMark('bleach_chazhu_equip')), false);
		},
		ai: {
			expose: 0.35,
		},
		subSkill: {
			effect: {
				audio: 'ext:BLEACH/skill:2:mp3',
				trigger: {
					player: 'useCardToTargeted',
				},
				filter(event, player) {
					return event.isFirstTarget && event.targets.some((target) => target != player);
				},
				prompt2(event, player) {
					const num = Math.max(1, event.target.countMark('bleach_chazhu_hand'));
					return '令' + get.translation(event.target) + '手牌上限-' + get.translation(num) + ',直到其因弃牌阶段弃置等量牌.';
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2('bleach_chazhu'), '令任意名目标角色减少手牌上限直到其因弃牌阶段弃牌', [1, Infinity], (card, player, target) => {
							return target != player && get.event('targets').includes(target);
						})
						.set('ai', (target) => {
							return get.attitude(player, target) <= 0;
						})
						.set('targets', trigger.targets)
						.forResult();
				},
				async content(event, trigger, player) {
					event.targets.forEach((i) => i.addMark('bleach_chazhu_hand', Math.max(1, i.countMark('bleach_chazhu_hand')), false));
				},
			},
			equip: {
				marktext: '↕',
				intro: {
					content: '攻击范围－#',
				},
			},
			hand: {
				marktext: '↔',
				intro: {
					content: '手牌上限－#',
				},
			},
		},
	},
	g_bleach_chazhu: {
		trigger: {
			player: ['loseAfter', 'phaseDiscardEnd'],
			global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
		},
		filter(event, player) {
			if (event.name == 'phaseDiscard') {
				if (!player.hasMark('bleach_chazhu_hand')) return false;
				const cards = [];
				player.getHistory('lose', (evt) => {
					if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) cards.addArray(evt.cards2);
				});
				return cards.length;
			}
			if (event.name == 'equip' && event.player == player) return get.subtype(event.card) == 'equip1';
			const evt = event.getl(player);
			if (evt && evt.player === player && evt.es && evt.es.some((i) => get.subtype(i) == 'equip1')) return true;
			return false;
		},
		silent: true,
		_priority: 31,
		content() {
			const cards = [];
			player.getHistory('lose', (evt) => {
				if (evt.type == 'discard' && evt.getParent('phaseDiscard') == trigger) cards.addArray(evt.cards2);
			});
			const num = Math.min(cards.length, player.hp - player.getHandcardLimit());
			player.removeMark('bleach_chazhu_' + (trigger.name != 'phaseDiscard' ? 'equip' : 'hand'), trigger.name != 'phaseDiscard' ? player.countMark('bleach_chazhu_equip') : num, false);
		},
		mod: {
			attackFrom(from, to, distance) {
				return (distance += from.countMark('bleach_chazhu_equip'));
			},
			maxHandcard(player, num) {
				return (num -= player.countMark('bleach_chazhu_hand'));
			},
		},
	},
	bleach_gehou: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: ['phaseEnd', 'dyingAfter'],
		},
		usable: 1,
		check: (event, player) => get.attitude(player, event.player) <= 0,
		filter(event, player) {
			return event.player != player && (!event.player.countCards('h') || event.name != 'phase') && event.player.isIn() && event.player.inRangeOf(player);
		},
		logTarget: 'player',
		content() {
			trigger.player.damage('nocard');
		},
		ai: {
			threaten: 1.05,
			expose: 0.4,
		},
	},
	bleach_duanyi: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'damageEnd',
			source: 'damageSource',
		},
		filter(event, player, name) {
			return name == 'damageEnd' || (event.card && event.card.suit == 'equip');
		},
		forced: true,
		content() {
			player.draw();
		},
	},
	bleach_yisan: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'phaseEnd',
		},
		getCard() {
			const cards = game
				.getAllGlobalHistory('everything', (evt) => {
					if (!evt.cards || !evt.cards.someInD('d')) return false;
					if (evt.name == 'lose') return evt.position == ui.discardPile;
					if (evt.name != 'cardsDiscard') return false;
					const evtx = evt.parent;
					if (evtx.name != 'orderingDiscard') return false;
					const evt2 = evtx.relatedEvent || evtx.parent;
					return evt2 && evt2.name != 'useCard';
				})
				.map((evt) => evt.cards.filterInD('d'))
				.flat()
				.reverse();
			const card = cards.find((card) => ['basic', 'trick'].includes(get.type(card)));
			if (card) return card;
			return null;
		},
		filter(event, player) {
			const card = lib.skill.bleach_yisan.getCard();
			return card && player.hasUseTarget(card, false, false);
		},
		async cost(event, trigger, player) {
			const cardx = lib.skill.bleach_yisan.getCard();
			event.result = await player
				.chooseCard(get.prompt('bleach_yisan'), '是否将一张牌当' + get.translation(cardx) + '使用(无距离限制)', 'he', (card, player) => {
					return game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
				})
				.set('ai', (card) => {
					if (player.getUseValue(cardx) > 0) {
						if (card.suit == 'club') return 10 - get.value(card);
						return 7 - get.value(card);
					}
					return 0;
				})
				.forResult();
		},
		async content(event, trigger, player) {
			const card = lib.skill.bleach_yisan.getCard();
			const cardx = {
				name: card.name,
				nature: get.nature(card),
				cards: event.cards,
			};
			player.chooseUseTarget(cardx, event.cards, true, false, 'nodistance');
		},
	},
	bleach_yuexi: {
		audio: 'ext:BLEACH/skill:4:mp3',
		trigger: {
			global: ['phaseZhunbeiEnd', 'phaseJudgeEnd', 'phaseDrawEnd', 'phaseUseEnd', 'phaseDiscardEnd', 'phaseJieshuEnd'],
		},
		filter(event, player) {
			let count = 0;
			player.checkHistory('gain', (evt) => {
				if (evt.getParent(event.name) !== event) return;
				count += evt.cards.length;
			});
			return count >= 2 && game.hasPlayer((target) => player.canUse('sha', target, false));
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseCardTarget({
					filterTarget(card, player, target) {
						return player.canUse({ name: 'sha' }, target, false);
					},
					filterCard: lib.filter.cardRecastable,
					selectCard: 2,
					position: 'he',
					ai1: (card) => get.unuseful(card) + 9,
					ai2(target) {
						const player = get.player();
						return get.effect(target, { name: 'sha' }, player);
					},
					prompt: get.prompt2('bleach_yuexi'),
				})
				.forResult();
		},
		async content(event, trigger, player) {
			await player.recast(event.cards);
			player.useCard({ name: 'sha' }, event.targets, false);
		},
		ai: {
			threaten: 1.35,
		},
	},
	bleach_xinren: {
		audio: 'ext:BLEACH/skill:4:mp3',
		trigger: {
			player: 'gainAfter',
		},
		filter(event, player) {
			return event.parent.name == 'draw' && event.getParent(2).name != 'bleach_xinren' && event.getParent('phaseDraw').player != player;
		},
		forced: true,
		content() {
			'step 0';
			player.chooseTarget(true, '请选择【心刃】的目标', '令一名角色摸一张牌').set('ai', (target) => {
				const player = get.player();
				return get.attitude(player, target) * Math.sqrt(Math.max(1, 4 - target.countCards('h')));
			});
			('step 1');
			if (result.targets?.length) {
				const target = result.targets[0];
				player.line(target, 'green');
				target.draw();
			}
		},
		group: 'bleach_xinren_discard',
		subSkill: {
			discard: {
				audio: 'bleach_xinren',
				trigger: {
					player: 'loseAfter',
					global: 'loseAsyncAfter',
				},
				forced: true,
				filter(event, player) {
					return event.type == 'discard' && event.getParent(3).name != 'bleach_xinren' && event.getParent('phaseDiscard').player != player && event.getl(player).cards2.length && game.hasPlayer((target) => target != player && target.countDiscardableCards(player, 'he') > 0);
				},
				content() {
					'step 0';
					player
						.chooseTarget(true, '请选择【心刃】的目标', '弃置一名其他角色的一张牌', (card, player, target) => {
							return target != player && target.countDiscardableCards(player, 'he') > 0;
						})
						.set('ai', (target) => {
							const player = get.player();
							return get.effect(target, { name: 'guohe_copy2' }, player, player);
						});
					('step 1');
					if (result.targets?.length) {
						const target = result.targets[0];
						player.line(target, 'green');
						player.discardPlayerCard(target, 'he', true);
					}
				},
				sourceSkill: 'bleach_xinren',
			},
		},
	},
	bleach_yuanshi: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'useCardToPlayered',
		},
		filter(event, player) {
			if (event.target == player || event.player == player || player.hasSkill('bleach_yuanshi_used')) return false;
			return player.countCards('h') && ['sha', 'bleach_card_cero'].includes(event.card.name);
		},
		forced: true,
		async content(event, trigger, player) {
			const next = player.chooseToUse(get.prompt('bleach_yuanshi'), trigger.player, -1).set('targetRequired', true);
			next.prompt2 = '对' + get.translation(trigger.player) + '使用一张牌,并取消' + get.translation(trigger.card) + '的目标';
			next.filterCard = (card) => {
				return player.canUse(card, trigger.player, false) && !get.info(card).multitarget;
			};
			next.ai = (card) => {
				const att = get.attitude(get.player(), get.event().getTrigger().target);
				if (att <= 0) return 0;
				return get.player().getUseValue(card);
			};
			next.oncard = () => {
				player.addTempSkill('bleach_yuanshi_used');
				trigger.targets.length = 0;
				trigger.parent.triggeredTargets1.length = 0;
			};
		},
		ai: {
			threaten: 1.25,
		},
		subSkill: {
			used: {
				charlotte: true,
			},
		},
	},
	bleach_youji: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		trigger: {
			global: 'phaseUseBegin',
		},
		filter(event, player) {
			return event.player != player && event.player.countCards('he') && !player.hasSkill('bleach_youji_round');
		},
		check(event, player) {
			return (
				get.attitude(player, event.player) < 0 &&
				!game.hasPlayer((current) => {
					return get.attitude(player, current) < 0 && get.threaten(current) > get.threaten(event.player);
				})
			);
		},
		async content(event, trigger, player) {
			player.addTempSkill('bleach_youji_round', 'roundStart');
			const target = trigger.player;
			const { bool, cards } = await target
				.chooseCard('将一张牌当【杀】对' + get.translation(player) + '使用', 'he', true)
				.set('ai', (card) => {
					return 6 - get.value(card);
				})
				.forResult();
			if (bool) {
				const card = cards[0];
				const cardx = { name: 'sha', storage: { bleach_youji: true } };
				if (game.checkMod(card, target, 'unchanged', 'cardEnabled2', target) && target.canUse(cardx, player, false)) {
					const next = await target.useCard(cardx, [card], player);
					if (
						player.hasHistory('useCard', (evt) => {
							return evt.respondTo && evt.respondTo[1] == next.card;
						})
					) {
						player.draw();
					} else {
						player.line(target, 'green');
						target.damage();
					}
				}
			}
		},
		ai: {
			expose: 0.4,
		},
		subSkill: {
			round: {
				charlotte: true,
			},
		},
	},
	bleach_xuezhuang: {
		audio: 'ext:BLEACH/skill:1:mp3',
		mark: true,
		trigger: {
			player: 'phaseBegin',
		},
		zhuanhuanji: true,
		marktext: '☯',
		intro: {
			content(storage, player, skill) {
				if (player.storage.bleach_xuezhuang == true) return '使用牌没有距离限制';
				return '你每次至多受到1点伤害,你的手牌上限为体力上限';
			},
		},
		content() {
			player.draw();
			player.changeZhuanhuanji('bleach_xuezhuang');
			player.bleachAwaken('bleach_heiqizhenxiao', 0 + player.storage.bleach_xuezhuang);
		},
		mod: {
			targetInRange(card, player) {
				if (player.storage.bleach_xuezhuang) return true;
			},
			maxHandcardBase(player, num) {
				if (!player.storage.bleach_xuezhuang) return player.maxHp;
			},
		},
		group: ['bleach_xuezhuang_eff'],
		subSkill: {
			eff: {
				audio: 'bleach_xuezhuang',
				trigger: {
					player: 'damageBegin4',
				},
				filter(event, player) {
					return !player.storage.bleach_xuezhuang && event.num > 1;
				},
				_priority: -15,
				content() {
					trigger.num = 1;
				},
				forced: true,
			},
		},
	},
	bleach_yanyue: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		usable: 1,
		filterTarget: lib.filter.notMe,
		filter(event, player) {
			return player.countCards('h');
		},
		position: 'he',
		filterCard: true,
		check(card) {
			return 8 - get.value(card);
		},
		abnormal: true,
		async content(event, trigger, player) {
			event.target.damage('fire');
			if (!player.storage.bleach_yanyue) {
				player.storage.bleach_yanyue = true;
				player.bleachAwaken('bleach_zhiboyixin', 1);
				player
					.when('useCard1')
					.filter((evt) => evt.card.name == 'sha')
					.assign({
						mod: {
							targetInRange(card, player, target, now) {
								if (card.name == 'sha') return true;
							},
						},
					})
					.then(() => {
						delete player.storage.bleach_yanyue;
						player.bleachAwaken('bleach_zhiboyixin', 0);
						if (!game.hasNature(trigger.card, 'fire')) {
							game.log(player, '将', trigger.card, '改为了火属性');
							game.setNature(trigger.card, 'fire');
						}
						if (!trigger.card.storage) trigger.card.storage = {};
						if (!trigger.card.storage.bleachMark_fire) trigger.card.storage.bleachMark_fire = 0;
						trigger.card.storage.bleachMark_fire++;
						game.log(trigger.card, '附加了1层【烧伤】');
					});
			}
		},
		ai: {
			order: 7,
			damage: true,
			fireAttack: true,
			threaten: 1.5,
			result: {
				target(player, target) {
					return get.damageEffect(target, player, target, 'fire');
				},
			},
		},
	},
	bleach_isyuechong: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'useCardToPlayered',
		},
		filter(event, player) {
			return event.player != player && event.targets.length == 1 && get.tag(event.card, 'damage');
		},
		check(event, player) {
			if (get.attitude(player, event.player) > 0 || event.target.hp > 2) return false;
			let evt = event.parent,
				directHit = (evt.nowuxie && get.type(event.card, 'trick') === 'trick') || (evt.directHit && evt.directHit.includes(event.target)) || (evt.customArgs && evt.customArgs.default && evt.customArgs.default.directHit2);
			if (get.tag(event.card, 'respondSha')) {
				if (directHit || event.target.countCards('h', 'sha') === 0) return true;
			} else if (get.tag(event.card, 'respondShan')) {
				if (directHit || event.target.countCards('h', 'shan') === 0) return true;
			} else if (event.card.name == 'huogong') {
				return event.player.countCards('h') > 4 - event.target.hp - event.target.countMark('bleachMark_shield');
			}
			return false;
		},
		readySkill: true,
		logTarget: 'player',
		async content(event, trigger, player) {
			player.awakenSkill('bleach_isyuechong');
			trigger.targets.length = 0;
			trigger.parent.triggeredTargets1.length = 0;
			const card = new lib.element.VCard({ name: 'sha', nature: 'fire', storage: { bleachMark_fire: 1 } });
			player.useCard(card, trigger.player, false);
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init(player, skill) {
			player.storage[skill] = false;
			lib.onwash.push(function () {
				delete player.storage[skill];
			});
		},
	},
	bleach_jishi: {
		audio: 'ext:BLEACH/skill:4:mp3',
		mod: {
			aiOrder(player, card, num) {
				if (typeof card.number != 'number') return;
				const numbers = player
					.getHistory('useCard', (evt) => evt != event)
					.map((i) => i.card.number)
					.toUniqued();
				const number = card.number;
				if (!numbers.length || !numbers.some((i) => i > number)) return num + 10 * (14 - card.number);
			},
		},
		trigger: {
			player: 'useCard',
		},
		forced: true,
		filter(event, player) {
			const numbers = player
				.getHistory('useCard', (evt) => evt != event)
				.map((i) => i.card.number)
				.toUniqued();
			const num = event.card.number;
			if (!num || !numbers.length) return false;
			return !numbers.some((i) => i > num);
		},
		async content(event, trigger, player) {
			player.draw();
			if (!player.storage.bleach_jishi) {
				player.when('phaseEnd').then(() => {
					player.unmarkSkill('bleach_jishi');
					delete player.storage.bleach_jishi;
				});
			}
			const num = trigger.card.number;
			player.storage.bleach_jishi = num;
			player[typeof num != 'number' ? 'unmarkSkill' : 'markSkill']('bleach_jishi');
		},
		intro: {
			markcount: (storage) => storage,
		},
	},
	bleach_lingshe: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		usable: 1,
		filter(event, player) {
			return player.countCards('hes') && event.bleach_lingshe?.some((i) => player.hasUseTarget({ name: i }));
		},
		onChooseToUse(event) {
			if (!game.online && !event.bleach_lingshe) {
				let cards = [];
				const player = event.player,
					historys = _status.globalHistory;
				for (var i = historys.length - 1; i >= 0; i--) {
					const history = historys[i].everything;
					for (let j = history.length - 1; j >= 0; j--) {
						const evt = history[j];
						if (evt.name == 'cardsDiscard' || (evt.name == 'lose' && evt.position == ui.discardPile)) {
							cards.addArray(evt.cards.filterInD('d').reverse());
						}
					}
					if (historys[i].isRound) break;
				}
				cards.reverse();
				cards = cards.filter((card) => (get.type(card, false) == 'trick' || get.type(card) == 'baisc') && player.hasUseTarget(card));
				event.set(
					'bleach_lingshe',
					cards.slice().map((card) => card.name)
				);
			}
		},
		chooseButton: {
			dialog(event, player) {
				const list = get
					.inpileVCardList((info) => {
						const name = info[2];
						if (!event.bleach_lingshe.includes(name)) return false;
						return get.type(name) == 'basic' || get.type(name) == 'trick';
					})
					.filter((card) => player.hasCard((cardx) => event.filterCard({ name: card[2], nature: card[3], cards: [cardx] }, player, event), 'hes'));
				return ui.create.dialog('灵射', [list, 'vcard']);
			},
			check(button) {
				if (get.event().parent.type != 'phase') return 1;
				const player = get.player();
				return player.getUseValue({
					name: button.link[2],
					nature: button.link[3],
				});
			},
			backup(links, player) {
				return {
					audio: 'bleach_lingshe',
					filterCard: true,
					popname: true,
					check(card) {
						return 8 - get.value(card);
					},
					position: 'hes',
					viewAs: { name: links[0][2], nature: links[0][3] },
				};
			},
			prompt(links, player) {
				return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
			},
		},
		ai: {
			order: 6,
			result: {
				player: 1,
			},
			threaten: 1.75,
		},
	},
	bleach_huimao: {
		audio: 'ext:BLEACH/skill:4:mp3',
		trigger: {
			player: 'phaseJieshuBegin',
		},
		check: () => true,
		filter: (event, player) => player.countCards('e'),
		async content(event, trigger, player) {
			await player.recast(player.getCards('e'));
			player.chooseUseTarget('灰猫:视为使用一张没有距离限制的【杀】', { name: 'sha' }, true, false, 'nodistance');
		},
	},
	bleach_jiuhao: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardEnd',
		},
		filter(event, player) {
			return event.card.suit == 'spade' && player.getHistory('useCard', (evt) => evt.card.suit == 'spade').indexOf(event) == 0;
		},
		content() {
			player.draw();
			player.chooseUseTarget('jiu', true);
		},
		ai: {
			jiuSustain: true,
			skillTagFilter(player, tag, name) {
				if (name != 'phase') return false;
			},
		},
		mod: {
			maxHandcard(player, num) {
				if (player.hasSkill('jiu')) return num - player.storage.jiu;
			},
		},
	},
	bleach_jinu: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: ['damageEnd', 'shaMiss'],
		},
		forced: true,
		content() {
			player.addMark('bleach_jinu');
			player.draw(1 + player.countMark('bleach_juhan'));
			if (player.storage.bleach_juhan) {
				player.storage.bleach_juhan = 0;
				player.unmarkSkill('bleach_juhan');
			}
		},
		marktext: '怒',
		intro: {
			name: '怒气',
			content: 'mark',
		},
		ai: {
			maixie: true,
			maixie_hp: true,
			effect: {
				target(card, player, target) {
					if (get.tag(card, 'damage')) {
						if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
						if (!target.hasFriend()) return;
						return [1, 0.9];
					}
				},
			},
		},
	},
	bleach_fenshou: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			player: 'phaseBegin',
		},
		check(event, player) {
			const num = Math.floor(player.countMark('bleach_jinu') / 2);
			return (player.hp <= 2 && num > 1) || num > 3;
		},
		limited: true,
		derivation: ['bleach_juhan', 'benghuai', 'bleach_nuying'],
		prompt2(event, player) {
			return `你可以回复${Math.floor(player.countMark('bleach_jinu') / 2)}点体力,获得【巨撼】【崩坏】和【怒盈】`;
		},
		async content(event, trigger, player) {
			player.storage.bleach_fenshou = true;
			player.awakenSkill('bleach_fenshou');
			player.bleachAwaken('bleach_yami', 1, 'Treachery');
			const num = player.countMark('bleach_jinu');
			player.recover(Math.floor(num / 2));
			player.addSkills(['bleach_juhan', 'benghuai', 'bleach_nuying']);
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_nuying: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			player: 'damageEnd',
		},
		forced: true,
		juexingji: true,
		filter(event, player) {
			return player.getAllHistory('damage').reduce((sum, evt) => (sum += evt.num), 0) >= 10;
		},
		async content(event, trigger, player) {
			player.storage.bleach_nuying = true;
			player.awakenSkill('bleach_nuying');
			player.bleachAwaken('bleach_yami', 2);
			player.recoverTo(player.maxHp);
		},
	},
	bleach_juhan: {
		mod: {
			aiValue(player, card, num) {
				if (card.name == 'shan') return num / 64;
			},
			aiUseful(player, card, num) {
				if (card.name == 'shan') return num / 64;
			},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCard',
			target: 'useCardToTargeted',
		},
		filter(event, player, name) {
			if (event.name == 'useCard' && player.countMark('bleach_jinu') < 2) return false;
			return event.card.name == 'sha';
		},
		forced: true,
		content() {
			if (trigger.name == 'useCard') {
				player.removeMark('bleach_jinu', 2);
				trigger.baseDamage++;
			} else {
				trigger.parent.directHit.add(player);
				player.addMark('bleach_juhan');
			}
		},
	},
	bleach_longquan: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		usable: 1,
		filterTarget(card, player, target) {
			return player.canCompare(target);
		},
		filter(event, player) {
			return player.countCards('h');
		},
		async content(event, trigger, player) {
			let num1 = 0,
				num2 = 0;
			const target = event.target,
				cards = [];
			while (player.canCompare(target)) {
				const result = await player.chooseToCompare(target).forResult();
				cards.addArray([result.player, result.target]);
				if (result.num1 > result.num2) num1++;
				else if (result.num1 < result.num2) num2++;
				const result2 = await player
					.chooseBool('是否与其重复此拼点流程？')
					.set('ai', () => get.event('bool'))
					.set('bool', get.effect(target, 'bleach_longquan', player, player) > 0)
					.forResult();
				if (!result2.bool) break;
			}
			if (num1 == num2) return;
			const current = num1 > num2 ? player : target;
			let count = num1 > num2 ? num1 : num2;
			while (cards.some((card) => current.hasUseTarget(card, false, false)) && count > 0) {
				const { links } = await current
					.chooseButton(['龙拳:使用其中一张牌', cards])
					.set('filterButton', (button) => {
						const player = get.player(),
							card = button.link;
						return player.hasUseTarget(card, false, false);
					})
					.set('ai', (button) => {
						return get.value(button.link);
					})
					.forResult();
				if (!links || !links.length) {
					(current === player ? target : player).draw();
					break;
				}
				count--;
				cards.removeArray(links);
				const card = links[0];
				await current.chooseUseTarget(card, true, false);
			}
		},
		ai: {
			order: 6.5,
			threaten: 1.2,
			result: {
				target(player, target) {
					let maxnum = 0;
					const cards2 = target.getCards('h');
					for (var i = 0; i < cards2.length; i++) {
						if (cards2[i].number > maxnum) {
							maxnum = cards2[i].number;
						}
					}
					if (maxnum > 10) maxnum = 10;
					if (maxnum < 5 && cards2.length > 1) maxnum = 5;
					const cards = player.getCards('h');
					if (Array.isArray(cards))
						for (var i of cards) {
							if (i.number < maxnum) return -1;
						}
					return 0;
				},
			},
		},
	},
	bleach_nifu: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: ['shaBegin', 'juedouBegin'],
		},
		forced: true,
		popup: false,
		group: ['bleach_nifu_sha', 'bleach_nifu_shan', 'bleach_nifu_draw'],
		content() {
			trigger.setContent(lib.skill.bleach_nifu[trigger.card.name + 'Content']);
		},
		shaContent() {
			'step 0';
			if (typeof event.baseDamage != 'number') event.baseDamage = 1;
			if (typeof event.extraDamage != 'number') event.extraDamage = 0;
			player.chooseControl('顺', '逆', () => ['顺', '逆'].randomGet());
			('step 1');
			event.nifu_name = result.control;
			if (event.directHit || event.directHit2 || (!_status.connectMode && lib.config.skip_shan && !target.hasShan())) {
				event._result = { bool: false };
			} else {
				target
					.chooseToRespond('请打出一张杀或闪响应杀', (card, player) => {
						var name = card.name;
						return name == 'sha' || name == 'shan';
					})
					.set('ai', (card) => {
						if (_status.event.choice == 'all') {
							var rand = get.rand('sha');
							if (rand > 0.5) return 0;
							return 1 + Math.random();
						}
						if (card.name == _status.event.choice) return get.order(card);
						return 0;
					})
					.set(
						'choice',
						(function () {
							return ['sha', 'shan', 'all'].randomGet();
						})()
					);
			}
			('step 2');
			var name = result.bool ? result.card.name : null,
				require = event.nifu_name;
			event.nifu_hit = (require == '顺' && name != 'shan') || (require == '逆' && name != 'sha');
			if (!result || !result.bool || event.nifu_hit) {
				event.trigger('shaHit');
			} else {
				event.trigger('shaMiss');
				event.responded = result;
			}
			('step 3');
			if ((!result || !result.bool || event.nifu_hit) && !event.unhurt) {
				target.damage(get.nature(event.card), event.baseDamage + event.extraDamage);
				event.result = { bool: true };
				event.trigger('shaDamage');
			} else {
				event.result = { bool: false };
				event.trigger('shaUnhirt');
			}
		},
		juedouContent() {
			'step 0';
			if (event.turn == undefined) event.turn = target;
			if (typeof event.baseDamage != 'number') event.baseDamage = 1;
			if (typeof event.extraDamage != 'number') {
				event.extraDamage = 0;
			}
			event.playerCards = [];
			event.targetCards = [];
			('step 1');
			if (event.turn != player) {
				player.chooseControl('顺', '逆', () => ['顺', '逆'].randomGet());
			}
			event.trigger('juedou');
			('step 2');
			if (result.control) {
				if (!event.nifu_name) player.chat('欢迎来到颠倒的世界!');
				event.nifu_name = result.control;
			}
			if (event.directHit) {
				event._result = { bool: false };
			} else {
				var next = event.turn.chooseToRespond('请打出一张杀或闪响应决斗', (card, player) => {
					var name = card.name;
					return name == 'sha' || name == 'shan';
				});
				next.set('ai', (card) => {
					var event = _status.event;
					var player = event.splayer;
					var target = event.starget;
					if (player.hasSkillTag('notricksource')) return 0;
					if (target.hasSkillTag('notrick')) return 0;
					if (event.player == target) {
						if (player.hasSkill('naman')) return -1;
						if (get.attitude(target, player) < 0 || event.player.hp <= 1) {
							return get.order(card);
						}
						return -1;
					} else {
						if (target.hasSkill('naman')) return -1;
						if (get.attitude(player, target) < 0 || event.player.hp <= 1) {
							return get.order(card);
						}
						return -1;
					}
				});
				next.set('splayer', player);
				next.set('starget', target);
				if (event.turn == target) {
					next.source = player;
				} else {
					next.source = target;
				}
			}
			('step 3');
			if (event.target.isDead() || event.player.isDead()) {
				event.finish();
			} else {
				var name = result.bool ? result.card.name : null,
					require = event.nifu_name;
				var nifu_hit = (require == '顺' && name != 'sha') || (require == '逆' && name != 'shan');
				if (result.bool && !nifu_hit) {
					if (event.turn == target) {
						if (result.cards) event.targetCards.addArray(result.cards);
						event.turn = player;
						event.goto(1);
					} else {
						if (result.cards) event.playerCards.addArray(result.cards);
						event.turn = target;
						event.goto(1);
					}
				} else {
					if (event.turn == target) {
						if (result.cards) event.targetCards.addArray(result.cards);
						target.damage(event.baseDamage + event.extraDamage);
					} else {
						if (result.cards) event.playerCards.addArray(result.cards);
						player.damage(target, event.baseDamage + event.extraDamage);
					}
				}
			}
		},
		subSkill: {
			draw: {
				trigger: {
					player: ['useCard', 'respond'],
				},
				forced: true,
				popup: false,
				filter(event, player) {
					return event.skill == 'bleach_nifu_sha' || event.skill == 'bleach_nifu_shan';
				},
				content() {
					player.draw();
				},
				sourceSkill: 'bleach_nifu',
			},
			sha: {
				audio: 'bleach_nifu',
				enable: ['chooseToUse', 'chooseToRespond'],
				filterCard: {
					name: 'shan',
				},
				viewAs: {
					name: 'sha',
				},
				viewAsFilter(player) {
					if (!player.countCards('hs', 'shan')) return false;
				},
				position: 'hs',
				prompt: '将一张闪当杀使用或打出',
				check() {
					return 1;
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (get.tag(card, 'respondSha') && current < 0) return 0.6;
						},
					},
					respondSha: true,
					skillTagFilter(player) {
						if (!player.countCards('hs', 'shan')) return false;
					},
					order() {
						return get.order({ name: 'sha' }) + 0.5;
					},
				},
				sourceSkill: 'bleach_nifu',
			},
			shan: {
				audio: 'bleach_nifu',
				enable: ['chooseToRespond', 'chooseToUse'],
				filterCard: {
					name: 'sha',
				},
				viewAs: {
					name: 'shan',
				},
				prompt: '将一张杀当闪使用或打出',
				check() {
					return 1;
				},
				position: 'hs',
				viewAsFilter(player) {
					if (!player.countCards('hs', 'sha')) return false;
				},
				ai: {
					order() {
						return get.order({ name: 'shan' }) + 0.5;
					},
					respondShan: true,
					skillTagFilter(player) {
						if (!player.countCards('hs', 'sha')) return false;
					},
					effect: {
						target(card, player, target, current) {
							if (get.tag(card, 'respondShan') && current < 0) return 0.6;
						},
					},
				},
				sourceSkill: 'bleach_nifu',
			},
		},
	},
	bleach_jiamian: {
		subSkill: {
			rab: {
				audio: 'ext:BLEACH/skill:2:mp3',
			},
			hrk: {
				audio: 'ext:BLEACH/skill:2:mp3',
			},
			rse: {
				audio: 'ext:BLEACH/skill:2:mp3',
			},
			kns: {
				audio: 'ext:BLEACH/skill:2:mp3',
			},
			msr: {
				audio: 'ext:BLEACH/skill:2:mp3',
			},
		},
		audioname2: {
			bleach_pingzi: 'bleach_jiamian_hrk',
			bleach_aichuanluowu: 'bleach_jiamian_rab',
			bleach_fengqiao: 'bleach_jiamian_rse',
			bleach_liuche: 'bleach_jiamian_kns',
			bleach_jiunanbai: 'bleach_jiamian_msr',
		},
		enable: 'phaseUse',
		filterCard(card) {
			return card.name == 'bleach_card_cero';
		},
		check: (card) => 10 - get.value(card),
		content() {
			target.addBleachBuff('bleachMark_shield');
		},
		selectTarget: [1, Infinity],
		filterTarget(card, player, target) {
			return target.group == player.group;
		},
		filter(event, player) {
			return player.countCards('h', 'bleach_card_cero') > 0;
		},
		ai: {
			order: 8.5,
			result: {
				target: 1,
			},
			bleachMarkUpVirtual: true,
			skillTagFilter(player, tag, arg) {
				if (!player.hasMark('bleachMark_shield')) return false;
			},
		},
		mod: {
			globalFrom(from, to, distance) {
				return distance - 1;
			},
		},
	},
	bleach_junshi: {
		audio: 'ext:BLEACH/skill:1:mp3',
		zhuSkill: true,
		enable: 'phaseUse',
		filterTarget: lib.filter.notMe,
		filter(event, player) {
			if (!player.hasZhuSkill('bleach_junshi')) return false;
			return game.hasPlayer((current) => current != player && current.group == 'bleach_xian');
		},
		limited: true,
		async content(event, trigger, player) {
			player.awakenSkill('bleach_junshi');
			let bgm = false;
			let current = player.next;
			while (current != player) {
				if (current.group == player.group) {
					let next = current.chooseToUse({
						filterCard(card, player, event) {
							if (card.name != 'sha') return false;
							return lib.filter.filterCard.apply(this, arguments);
						},
						prompt: '军势:是否对' + get.translation(event.target) + '使用一张杀？',
						addCount: false,
						targetx: event.target,
						filterTarget(card, player, target) {
							if (target != get.event('targetx')) return false;
							return lib.filter.targetEnabled.apply(this, arguments);
						},
					});
					const result = await next.forResult();
					if (result.bool) {
						if (!bgm) {
							bgm = true;
							game.switchBleachBgm('Escalon');
						}
						await game.asyncDraw([player, current]);
					}
				}
				current = current.next;
			}
		},
		ai: {
			order: 1,
			result: {
				target(player, target) {
					if (player.hasUnknown()) return 0;
					const att = get.sgn(get.attitude(player, target));
					return att * get.damageEffect(target, player, player, 'fire');
				},
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_liancai: {
		subSkill: {
			sha: {
				marktext: '财',
				charlotte: true,
				intro: {
					content: '使用【杀】的次数上限+#',
				},
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha') return num + player.countMark('bleach_liancai_sha');
					},
				},
			},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		usable: 1,
		filterCard: true,
		selectCard: [1, 3],
		filter(event, player) {
			return player.countCards('h');
		},
		discard: false,
		lose: false,
		check(card) {
			return 6 - get.value(card);
		},
		async content(event, trigger, player) {
			const cards = event.cards;
			player.showCards(cards);
			const { bool, targets } = await player
				.chooseTarget('将' + get.translation(cards) + '交给一名其他角色,或取消并重铸', lib.filter.notMe)
				.set('ai', (target) => {
					var player = _status.event.player;
					if (target.hasJudge('lebu')) return 0;
					return get.attitude(player, target) * target.hp * get.threaten(target);
				})
				.forResult();
			let target = player;
			if (bool) target = targets[0];
			target.addMark('bleach_liancai_sha');
			target.addTempSkill('bleach_liancai_sha', { player: 'phaseEnd' });
			target.addAdditionalSkill('bleach_liancai_sha', 'bleach_shunbu');
			if (target == player) {
				player.recast(cards);
			} else {
				player.line(target, 'green');
				player.give(cards, target);
			}
		},
		ai: {
			order: 6.5,
			result: {
				player: 1,
			},
			threaten: 1.35,
		},
	},
	bleach_wuli: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'gainAfter',
			global: 'loseAsyncAfter',
		},
		filter(event, player) {
			return event.getg(player).length >= 2;
		},
		check(event, player) {
			return player.hasFriend();
		},
		async content(event, trigger, player) {
			if (_status.connectMode)
				game.broadcastAll(() => {
					_status.noclearcountdown = true;
				});
			const given_map = {};
			let num = 2;
			while (num > 0) {
				const { bool, targets, cards } = await player
					.chooseCardTarget({
						filterCard(card) {
							return get.itemtype(card) == 'card' && !card.hasGaintag('bleach_wuli_tag');
						},
						filterTarget: lib.filter.notMe,
						selectCard: [1, num],
						prompt: '请选择要分配的卡牌和目标',
						ai1(card) {
							if (!ui.selected.cards.length) return 1;
							return 0;
						},
						ai2(target) {
							const player = get.player(),
								card = ui.selected.cards[0];
							const val = target.getUseValue(card);
							if (val > 0) return val * get.attitude(player, target) * 2;
							return get.value(card, target) * get.attitude(player, target);
						},
					})
					.forResult();
				if (bool) {
					const target = targets[0].playerid;
					player.addGaintag(cards, 'bleach_wuli_tag');
					num -= cards.length;
					if (!given_map[target]) given_map[target] = [];
					given_map[target].addArray(cards);
				} else break;
			}
			if (_status.connectMode) {
				game.broadcastAll(() => {
					delete _status.noclearcountdown;
					game.stopCountChoose();
				});
			}
			if (num < 2) {
				const map = [],
					cards = [];
				for (var i in given_map) {
					const source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
					player.line(source, 'green');
					if (player !== source && (get.mode() !== 'identity' || player.identity !== 'nei')) player.addExpose(0.18);
					map.push([source, given_map[i]]);
					cards.addArray(given_map[i]);
				}
				game.loseAsync({
					gain_list: map,
					player: player,
					cards: cards,
					giver: player,
					animate: 'giveAuto',
				}).setContent('gaincardMultiple');
			}
		},
		subSkill: {
			tag: {},
		},
	},
	bleach_zhanjiu: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			player: 'loseAfter',
			global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
		},
		derivation: 'bleach_yipao',
		juexingji: true,
		forced: true,
		filter(event, player) {
			if (player.countCards('h')) return false;
			const evt = event.getl(player);
			return evt && evt.player == player && evt.hs && evt.hs.length;
		},
		content() {
			'step 0';
			player.awakenSkill('bleach_zhanjiu');
			player.bleachAwaken('bleach_abirama', 1);
			('step 1');
			player.drawTo(4);
			player.addSkills('bleach_yipao');
		},
		ai: {
			noh: true,
		},
	},
	bleach_yipao: {
		audio: 'ext:BLEACH/skill:4:mp3',
		enable: 'phaseUse',
		filterCard: () => false,
		selectCard: -1,
		viewAs: {
			name: 'juedou',
		},
		viewAsFilter(player) {
			if (player.getHandcardLimit() == 0) return false;
		},
		check: () => 1,
		precontent() {
			if (!player.hasMark('bleach_yipao_limit')) {
				player.when({ player: 'damageEnd' }).then(() => {
					lib.skill.bleachHands.change(player, player.countMark('bleach_yipao_limit'));
					player.clearMark('bleach_yipao_limit');
				});
			}
			player.addMark('bleach_yipao_limit', 1);
			lib.skill.bleachHands.change(player, -1);
		},
		ai: {
			order: 4,
		},
	},
	bleach_fengwen: {
		audio: 'ext:BLEACH/skill:4:mp3',
		trigger: {
			source: 'damageSource',
		},
		check: () => true,
		filter(event, player) {
			if (event.card || !(event.card.suit in lib.suit)) return false;
			return event.player.isIn();
		},
		logTarget: 'player',
		async content(event, trigger, player) {
			await player.draw();
			const suit = trigger.card.suit;
			trigger.player.addMark(`bleach_fengwen_${suit}`);
		},
		subSkill: {
			heart: {
				marktext: '♥️️',
				intro: {
					name: '蜂纹华',
					content: '♥️️',
				},
			},
			diamond: {
				marktext: '♦️️',
				intro: {
					name: '蜂纹华',
					content: '♦️️',
				},
			},
			club: {
				marktext: '♣️️',
				intro: {
					name: '蜂纹华',
					content: '♣️️',
				},
			},
			spade: {
				marktext: '♠️️',
				intro: {
					name: '蜂纹华',
					content: '♠️️',
				},
			},
		},
	},
	bleach_juesha: {
		mod: {
			targetInRange(card, player, target, now) {
				if (game.online) {
					if (player.countUsed() % 2 == 1) return true;
				} else {
					if (player.getHistory('useCard').length % 2 == 1) return true;
				}
			},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			source: 'damageBegin1',
		},
		forced: true,
		filter(event, player) {
			if (!event.card || !lib.suit.includes(event.card.suit)) return false;
			return event.player.hasMark('bleach_fengwen_' + event.card.suit);
		},
		logTarget: 'player',
		content() {
			'step 0';
			trigger.player.removeMark('bleach_fengwen_' + trigger.card.suit);
			('step 1');
			trigger.num++;
		},
		ai: {
			combo: 'bleach_fengwen',
			effect: {
				player(card, player, target) {
					if (get.tag(card, 'damage') && target.hasMark('bleach_fengwen_' + card.suit)) return [1, 1];
				},
			},
		},
	},
	bleach_leibian: {
		enable: 'phaseUse',
		audio: 'ext:BLEACH/skill:2:mp3',
		filterTarget: lib.filter.notMe,
		content() {
			'step 0';
			player.awakenSkill('bleach_leibian');
			player.bleachAwaken('bleach_suifeng', 1);
			game.switchBleachBgm("Shadow'sMasquerade");
			setTimeout(() => {
				player.bleachAwaken('bleach_suifeng', 0);
			}, 5000);
			('step 1');
			target.bleachDamageKill('fire');
		},
		ai: {
			order: 1,
			fireAttack: true,
			result: {
				target(player, target) {
					const att = get.attitude(player, target);
					if (target.getDamagedHp() <= 2 && target.hp > 1) return 0;
					return att * get.damageEffect(target, player, player, 'fire');
				},
			},
		},
		mark: true,
		limited: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_jinghua: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			target: 'useCardToTarget',
		},
		filter(event, player, name) {
			if (player.hasSkill('bleach_jinghua_round')) return false;
			if (event.player == player || !player.countCards('he')) return false;
			return game.hasPlayer((current) => !event.targets.includes(current));
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseCardTarget({
					prompt: get.prompt('bleach_jinghua'),
					filterCard: lib.filter.cardDiscardable,
					position: 'he',
					filterTarget(card, player, target) {
						return !get.event().getTrigger().targets.includes(target);
					},
					ai1(card) {
						const player = get.player();
						if (get.effect(player, { name: trigger.card.name }, trigger.player, player) <= 0) {
							if (get.tag(trigger.card, 'damage')) {
								if (trigger.card.name == 'huogong' && trigger.player.countCards('h') < 4) return 0;
								return 9 - get.value(card);
							} else {
								if (!['tiesuo', 'shunshou'].includes(trigger.card.name)) {
									if (['guohe'].includes(trigger.card.name)) {
										if (player.countCards('h') > player.hp) return 0;
										return 7 - get.value(card);
									}
									return 8 - get.value(card);
								}
							}
						}
						return 0;
					},
					ai2(target) {
						const player = get.event('player'),
							trigger = get.event().getTrigger();
						const eff = get.effect(target, trigger.card, trigger.player, player);
						return eff;
					},
				})
				.set('prompt2', '你可以弃置一张牌,将' + get.translation(trigger.card) + '改为对一名非目标角色生效')
				.forResult();
		},
		async content(event, trigger, player) {
			if (Math.random() <= 0.1) {
				game.playBleach('bleach_jinghua3');
				game.broadcastAll(() => {
					_status.gifEffect = ui.create.div('.bleach-gif-background');
					_status.gifEffect.setBackgroundImage('extension/BLEACH/mp4/kyokasuigetsu.gif');
					document.body.insertBefore(_status.gifEffect, ui.window);
					setTimeout(() => {
						if (_status.gifEffect) _status.gifEffect.delete();
					}, 500);
				});
			}
			const target = event.targets[0];
			player.addTempSkill('bleach_jinghua_round', 'roundStart');
			player.discard(event.cards);
			const evt = trigger.parent;
			trigger.targets.length = 0;
			evt.triggeredTargets1.length = 0;
			evt.targets.push(target);
			game.log(player, '将', trigger.card, '的目标改为了', target);
		},
		ai: {
			threaten(player, target) {
				let num = Math.max(0.1, 3 - target.countCards('h'));
				if (target.hasSkill('bleach_jinghua_round')) num += 0.55;
				if (target.hp == 1) num += 0.55;
				return num;
			},
			effect: {
				target(card, player, target) {
					if (player._jinghua_tmp || (player.hasFriend() && !target.hasFriend())) return;
					if (player == target || target.hasSkill('bleach_jinghua_round') || target.countCards('he') == 0) return;
					if (card.name == 'sha' && player.hasSkill('bleach_tongxi')) return;
					if (get.attitude(player, target) < 0) {
						let sha = false;
						player._jinghua_tmp = true;
						const num = player.countCards('h', (cardx) => {
							if (!player.canUse(cardx, target, true) || get.effect(target, cardx, player, player) < 0) return 0;
							if (card.name == 'sha') {
								if (!player.countCards('he', 'zhuge')) return 0.1; //QQQ
								return 0;
							}
							return 1;
						});
						delete player._jinghua_tmp;
						if (num < 2) {
							return 0;
						}
					}
				},
			},
		},
		subSkill: {
			round: {
				charlotte: true,
			},
		},
	},
	bleach_chengfu: {
		audio: 'ext:BLEACH/skill:3:mp3',
		hiddenSkill: true,
		trigger: {
			player: 'showCharacterAfter',
		},
		filter(event, player) {
			return _status.currentPhase != player && event.toShow.includes('bleach_lanran');
		},
		prompt2: '你可以对其造成1点伤害',
		logTarget() {
			return _status.currentPhase;
		},
		content() {
			_status.currentPhase.damage();
		},
		init(player, skill) {
			player.storage[skill] = 0;
			player.addSkill('bleach_chengfu_chat');
		},
		onremove(player) {
			player.removeSkill('bleach_chengfu_chat');
		},
		group: ['bleach_chengfu_lose', 'bleach_chengfu_discard'],
		subSkill: {
			lose: {
				audio: 'bleach_chengfu',
				trigger: {
					global: 'gainAfter',
					player: 'loseAsyncAfter',
				},
				filter(event, player, triggername, target) {
					if (!target || !target.isIn() || target == player) return false;
					if (event.name == 'loseAsync') {
						if (event.type != 'gain') return false;
					}
					const cards = event.getl(player).cards2;
					if (!cards.length) return false;
					const cardsx = event.getg(target);
					return cards.some((card) => cardsx.includes(card));
				},
				getIndex(event, player, triggername) {
					const cards = event.getl(player).cards2;
					return game
						.filterPlayer((target) => {
							if (target == player) return false;
							const cardsx = event.getg(target);
							return cards.some((card) => cardsx.includes(card));
						})
						.sortBySeat();
				},
				usable: 1,
				logTarget(event, player, triggername, target) {
					return target;
				},
				check(event, player, triggername, target) {
					return get.effect(target, { name: 'losehp' }, player, player) > 0;
				},
				prompt2: '你可以令其失去1点体力',
				async content(event, trigger, player) {
					event.targets[0].loseHp();
					if (player.hasSkill('bleach_chengfu_chat')) player.storage.bleach_chengfu += get.rand(0, 2);
				},
			},
			discard: {
				audio: 'bleach_chengfu',
				trigger: {
					global: 'damageEnd',
				},
				filter(event, player) {
					const target = event.player,
						source = event.source;
					if (!target.isIn() || target == player || !source || source != player) return false;
					return target.countCards('he');
				},
				usable: 1,
				logTarget: 'player',
				prompt2: '你可以令其弃置一张牌',
				async content(event, trigger, player) {
					const target = trigger.player;
					await target.chooseToDiscard('he', true);
					if (player.hasSkill('bleach_chengfu_chat')) player.storage.bleach_chengfu += get.rand(0, 2);
				},
			},
			chat: {
				trigger: {
					player: ['shaMiss', 'showCharacterEnd', 'damageEnd'],
					source: ['dieAfter', 'damageSource'],
				},
				silent: true,
				filter(event, player, name) {
					if (!player.bleachIs(['bleach_lanran'])) return false;
					if (name == 'damageEnd') return player.isDamaged();
					return ['die', 'showCharacter'].includes(event.name) || ((name == 'damageSource' || name == 'shaMiss') && event.player.isIn() && Math.random() >= 0.65);
				},
				async content(event, trigger, player) {
					let str;
					if (trigger.name == 'die') {
						str = [['你说话最好不要太嚣张', '这样只会透露出你的软弱'], ['要清除的灰尘不管是一粒还是两粒', '用肉眼看都是没有什么分别的'], ['与实力并不相称的生命力也是一种浪费啊'], ['她没有我就活不下去', '我是这样教导她的', '你不觉得我杀了她是对她的同情吗']].randomGet();
					} else if (event.triggername == 'damageSource') {
						str = [
							['哎呀', '我本来打算将你拦腰砍断的'],
							['想要在不踩死蚂蚁的前提下,踩着他走', '力道可是很难把握的'],
							['你就这样抱着她吧', '但是要把你的手臂一起留下'],
						].randomGet();
					} else if (event.triggername == 'shaMiss') {
						str = [
							['已经能够成功避开了啊', '你成长了呢 我很高兴'],
							['不过我劝你不要太过坚持', '踏过蝼蚁而不去击杀他,这个力量是很难掌握的'],
							['我并没有打算欺骗你们', '只是 你们没有一个人理解我而已'],
						].randomGet();
					} else if (trigger.name == 'showCharacter') {
						str = [];
						if (game.hasPlayer((target) => target.bleachIs(['bleach_dongshilang']))) {
							str.push(['这是个好机会 有件事你最好记着日番谷', '憧憬是距离理解最遥远的感情']);
							str.push(['真遗憾 被发现了啊', '抱歉 我并没有打算吓到你', '至少应该不让你发现 把她剁成粉碎才对']);
						}
						if (game.hasPlayer((target) => target.bleachIs(['bleach_abarai']))) str.push(['已经不是你认识的蓝染队长了吗？很遗憾 那是你的错觉', '阿散井君 你所认识的蓝染队长从一开始就不存在']);
						if (game.hasPlayer((target) => target.bleachIs(['bleach_jingshangzhiji', 'bleach_re_jingshangzhiji']))) str.push(['欢迎回来 织姬.怎么了 你看起来好委屈呢', '笑吧 太阳要是被乌云遮住了 大家都会很伤心的']);
						if (str.length) str = str.randomGet();
						else str = ['初次见面 我是蓝染', '蓝染惣右介'];
					}
					if (!str) {
						player.storage.bleach_chengfu -= get.rand(0, trigger.num);
					} else {
						player.chat(str[0]);
						if (str.length == 2) {
							setTimeout(() => {
								player.chat(str[1]);
							}, 2000);
						}
						if (str.length == 3) {
							setTimeout(() => {
								player.chat(str[2]);
							}, 4000);
						}
						player.storage.bleach_chengfu += [1, 2].randomGet();
					}
					if (!player.storage.bleach_chengfu_chat) {
						player.storage.bleach_chengfu_chat = true;
						player
							.when({ global: 'phaseEnd' })
							.filter((evt) => player.storage.bleach_chengfu >= 13)
							.then(() => {
								player.bleachAwaken('bleach_lanran', 1);
								player.addBleachBuff('bleachEffect_wudi');
								game.mp417('aizen_tennitatsu');
								setTimeout(() => {
									game.playBleach('lines_tennitatsu1');
								}, 100);
								setTimeout(() => {
									game.playBleach('lines_tennitatsu2');
								}, 7500);
								setTimeout(() => {
									game.playBleach('lines_tennitatsu3');
								}, 11000);
								setTimeout(() => {
									game.playBleach('lines_tennitatsu4');
								}, 14500);
							});
					}
				},
			},
		},
	},
	bleach_qieyi: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			source: 'damageBefore',
		},
		forced: true,
		abnormal: true,
		logTarget: 'player',
		content() {
			trigger.cancel();
			if (trigger.player != player) {
				trigger.player
					.when({ player: 'loseHpBefore' })
					.filter((evt) => evt.parent.name == 'bleach_qieyi')
					.then(() => {
						player.addTempSkill('bleach_off_skill');
						player.addBleachBuff(lib.abnormal.slice(0).randomGet(), 1, source);
					})
					.vars({ source: player });
			}
			trigger.player.loseHp(trigger.num);
		},
		ai: {
			jueqing: true,
			threaten: 1.15,
		},
	},
	bleach_xiangzhuan: {
		subSkill: {
			round: {},
			urk: {
				audio: 'ext:BLEACH/skill:2:mp3',
			},
			rka: {
				audio: 'ext:BLEACH/skill:2:mp3',
			},
		},
		audioname2: {
			bleach_re_wuerqiaola: 'bleach_xiangzhuan_urk',
			bleach_sp_xiumuluqiya: 'bleach_xiangzhuan_rka',
		},
		trigger: {
			player: 'useCard',
		},
		check(event, player) {
			player._xiangzhuan_temp = true;
			let eff = 0;
			for (var i of event.targets) {
				eff += get.effect(i, event.card, player, player);
			}
			delete player._xiangzhuan_temp;
			if (eff < 0 || get.tag(event.card, 'damage')) return true;
			if (
				!player.countCards('h', (card) => {
					return player.hasValueTarget(card, null, true);
				})
			)
				return true;
			return false;
		},
		filter(event, player) {
			if (player.hasSkill('bleach_xiangzhuan_round')) return false;
			return event.card && (['sha', 'bleach_card_cero'].includes(event.card.name) || get.type(event.card) == 'trick');
		},
		content() {
			player.addTempSkill('bleach_xiangzhuan_round', 'roundStart');
			trigger.directHit.addArray(game.players);
		},
		mod: {
			aiOrder(player, card, num) {
				if (!player.hasSkill('bleach_xiangzhuan_round')) {
					if (get.tag(card, 'damage')) return num + 5;
				}
			},
			globalFrom(from, to, distance) {
				if (from._xiangzhuan) return;
				from._xiangzhuan = true;
				const players = game.filterPlayer((current) => get.distance(current, from) <= 1);
				delete from._xiangzhuan;
				if (players.includes(to)) return distance - 1;
			},
		},
		ai: {
			directHit_ai: true,
			skillTagFilter(player, tag, arg) {
				return !player.hasSkill('bleach_xiangzhuan_round');
			},
		},
	},
	bleach_chichui: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		usable: 1,
		abnormal: true,
		filter(event, player) {
			return game.hasPlayer((current) => current.inRangeOf(player) && current != player);
		},
		filterTarget(card, player, target) {
			return player != target && player.inRange(target);
		},
		async content(event, trigger, player) {
			const target = event.target;
			let vcard = new lib.element.VCard({ name: 'sha', storage: { bleachMark_fire: 1 } });
			if (target.isLinked()) {
				target.draw();
			} else {
				const result = await player
					.chooseControlList(['令其摸一张牌,视为对其使用一张烧伤【杀】', '横置其,视为对其使用一张火【杀】'], true)
					.set('ai', () => {
						return [0, 1].randomGet();
					})
					.forResult();
				if (result.index == 0) {
					target.draw();
				} else {
					target.link(true);
					vcard = new lib.element.VCard({ name: 'sha', nature: 'fire' });
				}
			}
			if (player.canUse(vcard, target, true)) player.useCard(vcard, target, false);
		},
		ai: {
			order(item, player) {
				return get.order({ name: 'jiu' }) + 0.01;
			},
			threaten: 1.5,
			result: {
				target: -1,
			},
		},
	},
	bleach_zongyue: {
		group: 'bleach_zongyue_draw',
		subSkill: {
			draw: {
				audio: 'bleach_zongyue',
				enable: 'phaseUse',
				filterTarget(card, player, target) {
					if (ui.selected.targets.length) return target.getExpansions('bleach_zongyue').length < 4;
					return target.getExpansions('bleach_zongyue').length;
				},
				multitarget: true,
				selectTarget: 2,
				usable: 2,
				prompt: '移动场上一张「纵乐」牌,若移动目标有相同花色的「纵乐」,随机移去一张.',
				targetprompt: ['被移走', '移动目标'],
				async content(event, trigger, player) {
					const target = event.targets[0],
						current = event.targets[1],
						expansions = target.getExpansions('bleach_zongyue');
					let chooseButton = player.chooseButton(['纵乐牌', expansions], true);
					chooseButton.set('expansions', expansions);
					chooseButton.set('ai', (button) => {
						const player = get.player(),
							card = button.link,
							val = get.value(card),
							expansions = get.event('expansions');
						if (get.attitude(player, target) > 0) {
							if (expansions.includes(card)) return val + 20;
						} else {
							if (expansions.length) {
								const suits = [],
									suits2 = [];
								expansions.forEach((i) => (suits.add(i.suit), suits2.push(i.suit)));
								if (suits2.length > suits.length) {
									var gett = function (suit) {
										return expansions.filter((card) => card.suit == suit.suit).length;
									};
									if (expansions.sort((b, a) => gett(a) - gett(b))[0] == card) return val + 20;
								}
							}
						}
						return val;
					});
					const result = await chooseButton.forResult();
					current.addToExpansion(result.links, target, 'give').gaintag.add('bleach_zongyue');
					if (current.getExpansions('bleach_zongyue').some((card) => card.suit == result.links[0].suit)) {
						const cards = current.getExpansions('bleach_zongyue').filter((card) => card.suit == result.links[0].suit);
						current.loseToDiscardpile(cards.randomGet());
					}
				},
				ai: {
					order: 3.5,
					result: {
						target(player, target) {
							const att = get.sgnAttitude(player, target),
								expansions = target.getExpansions('bleach_zongyue');
							if (!ui.selected.targets.length) {
								const suits = expansions.map((i) => i.suit).toUniqued();
								if (suits.length < expansions.length) return att;
							}
							return att * (4 - expansions.length);
						},
					},
				},
				sourceSkill: 'bleach_zongyue',
			},
		},
		audio: 'ext:BLEACH/skill:4:mp3',
		logAudio: () => ['ext:BLEACH/skill:2:mp3'],
		trigger: {
			player: 'useCardToPlayered',
		},
		filter(event, player) {
			if (!event.targets) return false;
			if (!event.isFirstTarget) return false;
			if (get.type(event.card, 'trick') == 'equip') return false;
			return game.hasPlayer((target) => {
				return event.targets.includes(target) && target.getExpansions('bleach_zongyue').length < 4;
			});
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt('bleach_zongyue'), '将牌堆顶的一张牌置于一名角色的武将牌上', (card, player, target) => {
					return get.event('targets').includes(target) && target.getExpansions('bleach_zongyue').length < 4;
				})
				.set('ai', (target) => {
					const player = get.player();
					let att = get.sgn(get.attitude(player, target));
					if (att < 0) {
						att = -Math.sqrt(target.hp);
					}
					return att * target.getExpansions('bleach_zongyue').length + 1;
				})
				.set('targets', trigger.targets)
				.forResult();
		},
		async content(event, trigger, player) {
			const target = event.targets[0],
				cards = get.cards();
			target.addToExpansion(cards, 'gain2').gaintag.add('bleach_zongyue');
			const expansions = target.getExpansions('bleach_zongyue').concat(cards);
			const suits = expansions.map((i) => i.suit).toUniqued();
			if (suits.length == 4) {
				const result = await player
					.chooseControl()
					.set('choiceList', ['获得' + get.translation(expansions), '对' + get.translation(target) + '造成2点伤害,移去这些牌'])
					.set('ai', () => {
						if (get.value(expansions) > 16) return 0;
						return 1;
					})
					.forResult();
				let num = player.hasMark('bleachMark_shield') ? get.rand(5, 6) : get.rand(3, 4);
				game.playBleach('bleach_zongyue' + num + '.mp3');
				if (result.index == 0) {
					player.gain(expansions, target, 'give', 'bySelf');
				} else {
					player.line(target, 'green');
					target.damage(2);
					target.loseToDiscardpile(expansions);
				}
			}
		},
		marktext: '乐',
		intro: {
			content: 'expansion',
			markcount: 'expansion',
		},
		onremove(player, skill) {
			var cards = player.getExpansions(skill);
			if (cards.length) player.loseToDiscardpile(cards);
		},
	},
	bleach_moji: {
		group: ['bleach_moji_effect'],
		audio: 'ext:BLEACH/skill:4:mp3',
		logAudio: () => ['ext:BLEACH/skill:2:mp3'],
		trigger: {
			player: ['damageEnd', 'juedouAfter', 'chooseToCompareAfter', 'compareMultipleAfter'],
			target: ['juedouAfter', 'chooseToCompareAfter', 'compareMultipleAfter'],
			source: 'damageSource',
		},
		forced: true,
		_priority: 23,
		filter(event, player) {
			if (event.name == 'juedou') return event.ture != player;
			if (event.name == 'chooseToCompare' || event.name == 'compareMultiple') {
				if (event.preserve) return false;
				if (player == event.player) {
					return event.num1 > event.num2;
				} else {
					return event.num1 < event.num2;
				}
			}
			return true;
		},
		content() {
			player.addMark('bleach_moji', trigger.num || 1);
		},
		ai: {
			maixie: true,
			maixie_hp: true,
			effect: {
				target(card, player, target) {
					if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
					if (get.tag(card, 'damage')) return [1, 0.95];
				},
			},
		},
		marktext: '势',
		intro: {
			name: '蓄势',
			content: 'mark',
		},
		subSkill: {
			effect: {
				audio: 'bleach_moji',
				logAudio: () => ['ext:BLEACH/skill/bleach_moji3.mp3', 'ext:BLEACH/skill/bleach_moji4.mp3'],
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha' && player.countMark('bleach_moji') > 2;
				},
				forced: true,
				content() {
					player.chat('魔人的一击!');
					trigger.baseDamage += Math.floor(player.countMark('bleach_moji') / 3);
				},
				sourceSkill: 'bleach_moji',
			},
		},
	},
	bleach_relingbi: {
		audio: 'ext:BLEACH/skill:2:mp3',
		zhuanhuanji: true,
		group: ['bleach_relingbi_t', 'bleach_relingbi_f'],
		subSkill: {
			t: {
				audio: 'bleach_relingbi',
				trigger: {
					player: 'damageEnd',
				},
				filter(event, player) {
					return !player.storage.bleach_relingbi;
				},
				async cost(event, trigger, player) {
					const result = await player
						.chooseControl('cancel2')
						.set('choiceList', ['摸两张牌', '回复1点体力'])
						.set('ai', () => {
							if (player.hp <= 2) return 1;
							return 0;
						})
						.set('prompt', '是否发动【灵臂】？')
						.forResult();
					if (result.control != 'cancel2') event.result = { bool: true, cost_data: result.index };
				},
				async content(event, trigger, player) {
					player.changeZhuanhuanji('bleach_relingbi');
					player[event.cost_data == 0 ? 'draw' : 'recover'](1 + (event.cost_data == 0));
				},
				sourceSkill: 'bleach_moji',
			},
			f: {
				audio: 'bleach_relingbi',
				trigger: {
					source: 'damageBegin1',
				},
				filter(event, player) {
					return player.storage.bleach_relingbi == true && player.countCards('h');
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseCard(get.prompt('bleach_relingbi', trigger.player), 'he', lib.filter.cardRecastable)
						.set('ai', (card) => {
							if (get.attitude(get.player(), trigger.player) < -1) {
								return 9 - get.value(card);
							}
							return 0;
						})
						.set('prompt2', '重铸一张牌令伤害值+1')
						.forResult();
				},
				async content(event, trigger, player) {
					player.changeZhuanhuanji('bleach_relingbi');
					player.recast(event.cards);
					trigger.num++;
				},
				sourceSkill: 'bleach_moji',
			},
		},
		mod: {
			attackRange(from, distance) {
				return distance + 1;
			},
			maxHandcard: (player, num) => num + 1,
		},
	},
	bleach_qingchong: {
		audio: 'ext:BLEACH/skill:2:mp3',
		hiddenSkill: true,
		trigger: {
			player: 'showCharacterAfter',
		},
		filter(event, player) {
			return event.toShow && event.toShow.includes('bleach_dongxian') && _status.currentPhase != player;
		},
		check(event, player) {
			return -get.attitude(player, _status.currentPhase);
		},
		logTarget() {
			return _status.currentPhase;
		},
		content() {
			const evt = event.getParent('phase', true);
			if (evt && evt.name) {
				game.log(player, '结束了回合');
				evt.finish();
			}
			const evtx = event.getParent('phaseUse', true);
			if (evtx) {
				evtx.skipped = true;
			}
		},
	},
	bleach_feihuang: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'phaseDrawBegin1',
		},
		filter(event, player) {
			return !event.numFixed;
		},
		async content(event, trigger, player) {
			trigger.changeToZero();
			const cards = get.cards(3);
			game.cardsGotoOrdering(cards);
			const videoId = lib.status.videoId++;
			game.broadcastAll(
				function (player, id, cards) {
					var str;
					if (player == game.me && !_status.auto) {
						str = '红飞蝗';
					} else {
						str = '红飞蝗';
					}
					var dialog = ui.create.dialog(str, cards);
					dialog.videoId = id;
				},
				player,
				videoId,
				cards
			);
			game.addVideo('showCards', player, ['红飞蝗', get.cardsInfo(cards)]);
			game.addVideo('delay', null, 2);
			const { control } = await player
				.chooseControl('red', 'black')
				.set('ai', () => {
					if (cards.filter((card) => get.color(card) == 'red').length > cards.filter((card) => get.color(card) == 'black').length) {
						return 'red';
					} //QQQ
					return 'black';
				})
				.forResult();
			game.broadcastAll('closeDialog', videoId);
			const gains = cards.filter((card) => get.color(card) == control);
			const cards2 = cards.filter((card) => !gains.includes(card));
			if (gains.length) player.gain(gains, 'gain2');
			while (cards2.some((card) => player.hasUseTarget({ name: 'sha' }, false, false)) && game.hasPlayer((current) => player.canUse('sha', current, false) && !current.hasHistory('damage', (evt) => evt.getParent(3).name == 'bleach_feihuang'))) {
				const card = cards2.shift(),
					cardx = {
						name: 'sha',
						cards: [card],
					};
				const { bool, targets } = await player
					.chooseTarget(
						'红飞蝗:飞请选择【杀】的目标',
						(card, player, target) => {
							return get.event('targets').includes(target) && player.canUse({ name: 'sha' }, target, false);
						},
						(target) => {
							return get.effect(target, { name: 'sha' }, player, player);
						}
					)
					.set(
						'targets',
						game.filterPlayer((current) => !current.hasHistory('damage', (evt) => evt.getParent(3).name == 'bleach_feihuang'))
					)
					.forResult();
				if (bool) await player.useCard(cardx, [card], false, targets);
				else {
					return;
				}
			}
		},
		ai: {
			threaten: 1.4,
		},
	},
	bleach_yanmo: {
		audio: 'ext:BLEACH/skill:1:mp3',
		enable: 'phaseUse',
		filterTarget(card, player, target) {
			return target != player && player.inRange(target);
		},
		filter(event, player) {
			return player.getEquips(1).length;
		},
		abnormal: true,
		content() {
			'step 0';
			player.awakenSkill('bleach_yanmo');
			if (player.bleachIs(['bleach_dongxian'])) game.mp417('tosen_bankai', 7.5);
			('step 1');
			player
				.when({ player: 'phaseEnd' })
				.assign({
					firstDo: true,
				})
				.then(() => {
					const players = game.filterPlayer((current) => ![player, target].includes(current));
					_status.yanmoPlayers = players;
					game.broadcastAll((players) => {
						if (players.length) {
							players.forEach((i) => i.out('bleach_yanmo'));
						}
						if (!ui.bleach_yanmoLoop) {
							ui.bleach_yanmoLoop = ui.create.system('四回合', null, true);
							lib.setPopped(
								ui.bleach_yanmoLoop,
								function () {
									var uiintro = ui.create.dialog('hidden');
									uiintro.add('阎魔蟋蟀');
									uiintro.addText(get.cnNumber(ui.bleach_yanmoLoop.round) + '回合后结束');
									uiintro.add(ui.create.div('.placeholder.slim'));
									return uiintro;
								},
								180
							);
							ui.bleach_yanmoLoop.round = 4;
						}
					}, players);
					player.storage.bleach_yanmo_loop = target;
					player.addSkill('bleach_yanmo_loop');
				})
				.vars({ target: target });
			player
				.when({ global: 'phaseEnd' })
				.filter((evt) => !target || !target.isIn() || player.isDead() || ui.bleach_yanmoLoop.round == 0)
				.assign({
					forceDie: true,
				})
				.then(() => {
					game.broadcastAll((backup) => {
						for (var i of backup) i.in('bleach_yanmo');
						if (ui.bleach_yanmoLoop) {
							ui.bleach_yanmoLoop.remove();
							delete ui.bleach_yanmoLoop;
						}
					}, _status.yanmoPlayers);
					if (target && target.isIn()) {
						let num = player.hp + target.hp;
						player.loseHp(num);
					}
					player.removeSkill('bleach_yanmo_loop');
				})
				.vars({ target: target });
		},
		limited: true,
		init: (player, skill) => (player.storage[skill] = false),
		mark: true,
		intro: {
			content: 'limited',
		},
		subSkill: {
			loop: {
				trigger: {
					global: 'phaseAfter',
				},
				firstDo: true,
				silent: true,
				filter(event, player) {
					return event.player == player || event.player == player.storage.bleach_yanmo_loop;
				},
				content() {
					const target = trigger.player == player ? player.storage.bleach_yanmo_loop : player;
					if (target != player) {
						const list = lib.abnormal.slice(0);
						target.addBleachBuff(list.randomGet());
					} else {
						if (ui.bleach_yanmoLoop) {
							game.broadcastAll(() => {
								ui.bleach_yanmoLoop.innerHTML = get.cnNumber(ui.bleach_yanmoLoop.round) + '回合';
								ui.bleach_yanmoLoop.round--;
							});
						}
					}
					target.phase('nodelay');
				},
				group: 'bleach_yanmo_sha',
				sourceSkill: 'bleach_yanmo',
			},
			sha: {
				trigger: {
					player: 'useCard',
				},
				charlotte: true,
				forced: true,
				filter(event, player) {
					return event.card && event.card.name == 'sha' && player.storage.bleach_yanmo_loop;
				}, //QQQ
				content() {
					trigger.directHit.add(player.storage.bleach_yanmo_loop);
				},
				sourceSkill: 'bleach_yanmo',
			},
		},
		ai: {
			order: 9.5,
			result: {
				target(player, target) {
					let hs = player.countCards('h', (card) => ['nanman', 'juedou', 'wanjian'].includes(card.name) && get.effect(target, card, player, player) > 0);
					if (player.countCards('h', 'sha')) {
						if (player.countCards('he', 'zhuge')) {
							hs += player.countCards('h', 'sha');
						} else {
							hs++;
						}
						if (player.countCards('h', 'jiu')) hs++;
					}
					if (target.hp <= 2 || (hs >= 2 && target.hp > 1)) {
						return -1;
					}
					return 0;
				},
			},
		},
	},
	bleach_jianpao: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		selectTarget: [1, 2],
		filterTarget(card, player, target) {
			return target != player && !player.getStorage('bleach_jianpao_chosen').includes(target);
		},
		contentBefore() {
			player.loseHp();
		},
		async content(event, trigger, player) {
			let count = event.targets.length == 2 ? 1 : 2;
			player.addTempSkill('bleach_jianpao_chosen', 'phaseUseAfter');
			player.markAuto('bleach_jianpao_chosen', [event.target]);
			while (true) {
				player.discardPlayerCard(event.target, 'he', true);
				count--;
				if (count <= 0) return;
			}
		},
		ai: {
			order: 8.5,
			result: {
				target(player, target) {
					if (player.hp == 1 && !game.hasPlayer((current) => get.attitude(player, current) > 0 && current.countCards('hs', 'tao')) && !player.countCards('hs', 'jiu')) return 0;
					if (ui.selected.targets.length) return 0;
					return get.attitude(player, target) * get.effect(target, { name: 'guohe_copy2' }, player, player);
				},
			},
		},
		subSkill: {
			chosen: {
				charlotte: true,
				intro: {
					content: '本阶段已对$发动过技能',
				},
			},
		},
	},
	bleach_jiaohou: {
		enable: 'phaseUse',
		audio: 'ext:BLEACH/skill:1:mp3',
		limited: true,
		derivation: ['bleach_duanpu', 'bleach_zhanna'],
		async content(event, trigger, player) {
			player.awakenSkill('bleach_jiaohou');
			player.bleachAwaken('bleach_harribel', get.rand(1, 2), 'CreepingShadows');
			await player.loseMaxHp();
			player.changeSkills(['bleach_zhanna', 'bleach_duanpu'], ['bleach_jianpao']);
			if (player.hasCard((card) => get.type(card) == 'equip', 'he')) {
				await player
					.chooseToDiscard('是否弃置一张装备牌', 'he', (card) => get.type(card) == 'equip')
					.set('ai', (card) => {
						return 8 - get.value(card);
					});
			}
		},
		ai: {
			order: 6.5,
			result: {
				player(player) {
					if (player.hp == 1 || (player.hp == 2 && player.countCards('e'))) return 1;
					return 0;
				},
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_duanpu: {
		audio: 'ext:BLEACH/skill:3:mp3',
		usable: 1,
		enable: 'phaseUse',
		filterTarget: lib.filter.notMe,
		async content(event, trigger, player) {
			const target = event.target,
				num = player.getDamagedHp() + 1;
			const cards = game.cardsGotoOrdering(get.cards(num)).cards;
			const videoId = lib.status.videoId++;
			game.broadcastAll(
				(player, id, cards) => {
					let str;
					if (player == game.me && !_status.auto && cards.length > 1) {
						str = '断瀑:你可以获得其中一张牌';
					} else {
						str = '断瀑';
					}
					let dialog = ui.create.dialog(str, cards);
					dialog.videoId = id;
				},
				player,
				videoId,
				cards
			);
			game.addVideo('showCards', player, ['断瀑', get.cardsInfo(cards)]);
			game.addVideo('delay', null, 2);
			const next = cards.length > 1 ? player.chooseButton() : player.chooseControl('ok');
			if (cards.length > 1) {
				next.set('dialog', videoId);
				next.set('ai', (button) => {
					return get.player().getUseValue(button.link);
				});
			}
			const result = await next.forResult();
			game.broadcastAll('closeDialog', videoId);
			if (result.bool && result.links) {
				cards.remove(result.links[0]);
				player.gain(result.links, 'log', 'gain2');
			}
			const suits = cards.map((i) => i.suit).toUniqued();
			const result2 = await target
				.chooseToDiscard('he', [1, Infinity], (card) => {
					const suit = card.suit;
					if (Array.isArray(ui.selected.cards))
						for (var i of ui.selected.cards) {
							if (i.suit == suit) return false;
						}
					return get.event('suits').includes(card.suit);
				})
				.set('ai', (card) => {
					const player = get.player();
					const hs = player.getCards('he', (cardx) => {
						return get.event('suits').includes(cardx.suit) && get.value(cardx) < 8;
					});
					if (hs.length < Math.min(2, get.event('suits'))) return 0;
					if (hs.includes(card)) return 20 - get.value(card);
					return 0;
				})
				.set('suits', suits)
				.set('complexCard', true)
				.set('dialog', ['请弃置以下花色的牌各一张,否则你失去一点体力', 'hidden', cards])
				.forResult();
			if (!result2.cards || suits.length > result2.cards.length) {
				target.loseHp();
			}
		},
		ai: {
			order: 1,
			threaten(player, target) {
				return Math.sqrt(Math.min(1, target.getDamagedHp()));
			},
			result: {
				target(player, target) {
					return (target.hp / (target.countCards('he') + 1)) * -1;
				},
			},
		},
	},
	bleach_zhanna: {
		audio: 'ext:BLEACH/skill:3:mp3',
		trigger: {
			player: 'loseAfter',
			global: 'loseAsyncAfter',
		},
		forced: true,
		abnormal: true,
		filter(event, player) {
			const evt = event.getl(player);
			return event.type == 'discard' && evt.cards2.length && !player.hasSkill('bleach_zhanna_blocker', null, null, false);
		},
		content() {
			player.chooseUseTarget('###是否发动【战雫】？###视为使用一张没有距离限制的冰【杀】', { name: 'sha', nature: 'bleach_ice' }, false, 'nodistance').set('oncard', () => {
				player.addTempSkill('bleach_zhanna_blocker', ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter']);
			});
		},
		ai: {
			nodiscard: true,
			threaten: 1.35,
		},
		subSkill: {
			blocker: {
				charlotte: true,
				sourceSkill: 'bleach_zhanna',
			},
		},
	},
	bleach_shuangli: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'damageBegin2',
		},
		filter(event, player) {
			return get.distance(player, event.player) <= 1 && player.getSkills(null, false, false).some((i) => get.info(i) && !get.info(i).charlotte);
		},
		async cost(event, trigger, player) {
			let skills = player.getSkills(null, false, false).filter((i) => {
				const info = get.info(i);
				return info && !info.charlotte;
			});
			const num = Math.min(trigger.num, skills.length);
			skills = skills.slice(0, num);
			let str = '';
			for (var i of skills) {
				str += '【' + get.translation(i) + '】、';
			}
			str = str.slice(0, -1);
			let str2 = trigger.card && trigger.cards.filterInD().length ? '并获得' + get.translation(trigger.cards.filterInD()) : '';
			const result = await player
				.chooseBool(get.prompt('bleach_shuangli', trigger.player), '是否失去1点体力和' + str + '直到你使用伤害牌,防止' + get.translation(trigger.player) + '受到的' + get.cnNumber(trigger.num) + '点伤害,你进行【闪电】判定' + str2 + '.')
				.set('choice', (get.attitude(get.player(), get.event().getTrigger().player) > 0 && get.event().getTrigger().player.hp <= 2) || get.player() == get.event().getTrigger().player)
				.forResult();
			event.result = { bool: result.bool, cost_data: skills };
		},
		async content(event, trigger, player) {
			const skills = event.cost_data;
			await player.loseHp();
			player.removeSkills(skills);
			if (!player.storage.bleach_shuangli) {
				player
					.when({ player: 'useCard' })
					.filter((evt) => get.tag(evt.card, 'damage') && player.getHistory('useCard', (evtx) => evtx.card.name == evt.card.name).indexOf(evt) == 0)
					.then(() => {
						player.addSkills(player.getStorage('bleach_shuangli'));
					})
					.then(() => delete player.storage.bleach_shuangli);
			}
			player.markAuto(
				'bleach_shuangli',
				skills.filter((skill) => !player.getStorage('bleach_shuangli').includes(skill))
			);
			trigger.cancel();
			await player.executeDelayCardEffect('shandian');
			if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0], true) == 'o') {
				player.gain(trigger.cards, 'gain2');
			}
		},
	},
	bleach_leiren: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filterCard(card, player) {
			if (player.getStorage('bleach_leiren').includes(card.name)) return false;
			return player.canRecast(card) && get.tag(card, 'damage');
		},
		filter(event, player) {
			return player.countCards('h', (card) => get.info('bleach_leiren').filterCard(card, player)) > 1;
		},
		selectCard: [2, Infinity],
		discard: false,
		lose: false,
		delay: 0,
		check(card) {
			const player = get.player();
			const value = function (card, player) {
				const num = player.getUseValue(card);
				return num > 0 ? num + 1 / (get.value(card) || 0.5) + 7 : 7 - get.value(card);
			};
			if (ui.selected.cards.length && value(card, player) < value(ui.selected.cards[0], player)) return 20 - get.value(card);
			return value(card, player);
		},
		async content(event, trigger, player) {
			await player.recast(event.cards);
			if (!player.storage.bleach_leiren) {
				player.when({ global: 'phaseAfter' }).then(() => {
					player.unmarkSkill('bleach_leiren');
					delete player.storage.bleach_leiren;
				});
			}
			player.markAuto(
				'bleach_leiren',
				event.cards.slice().map((card) => card.name)
			);
			const cards = event.cards.filterInD('d');
			if (cards.some((card) => player.hasUseTarget(card))) {
				const { bool, links } = await player
					.chooseButton(['雷刃:是否使用其中的一张牌？', cards])
					.set('filterButton', (button) => {
						return get.event('player').hasUseTarget(button.link);
					})
					.set('ai', (button) => {
						return get.event('player').getUseValue(button.link);
					})
					.forResult();
				if (bool) {
					const card = links[0];
					player.$gain2(card, false);
					await player.chooseUseTarget(true, card, false);
				}
			}
		},
		intro: {
			content: '本回合已重铸过$',
		},
		ai: {
			order: 11.2,
			result: {
				player: 1,
			},
		},
	},
	bleach_shengua: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'judge',
		},
		filter(event, player) {
			const color = get.color(event.player.judging[0], event.player);
			return player.hasCard((card) => {
				return get.color(card) != color || (_status.connectMode && get.position(card) != 'e');
			}, 'he');
		},
		async cost(event, trigger, player) {
			const { bool, cards } = await player
				.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('bleach_shengua'), 'hes', (card) => {
					const player = get.player();
					const mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
					if (mod2 != 'unchanged') return mod2;
					const mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
					if (mod != 'unchanged') return mod;
					return get.color(card) != get.color(get.event('judging'));
				})
				.set('ai', (card) => {
					const trigger = _status.event.getTrigger();
					const player = get.player();
					const judging = get.event('judging');
					const result = trigger.judge(card) - trigger.judge(judging);
					const attitude = get.attitude(player, trigger.player);
					if (attitude == 0 || result == 0) return 0;
					if (attitude > 0) {
						return result - get.value(card) / 2;
					} else {
						return -result - get.value(card) / 2;
					}
				})
				.set('judging', trigger.player.judging[0])
				.forResult();
			if (bool) event.result = { bool, cost_data: { cards } };
		},
		popup: false,
		async content(event, trigger, player) {
			const chooseCardResultCards = event.cost_data.cards;
			player.respond(chooseCardResultCards, 'bleach_shengua', 'highlight', 'noOrdering');
			player.gain(trigger.player.judging[0], 'gain2');
			if (trigger.player.judging[0].clone) {
				trigger.player.judging[0].clone.classList.remove('thrownhighlight');
				game.broadcast(function (card) {
					if (card.clone) {
						card.clone.classList.remove('thrownhighlight');
					}
				}, trigger.player.judging[0]);
				game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
			}
			trigger.player.judging[0] = chooseCardResultCards[0];
			trigger.orderingCards.addArray(chooseCardResultCards);
			game.log(trigger.player, '的判定牌改为', chooseCardResultCards[0]);
		},
		ai: {
			rejudge: true,
			tag: {
				rejudge: 1,
			},
		},
	},
	bleach_tongxi: {
		//发起者与目标同时亮出一张手牌,这两张牌的点数分别+自己攻击范围,点数大的角色对点数小的角色造成1点伤害,若赢家攻击范围大于输家,则改为2点伤害,最后双方将牌置入弃牌堆
		async zhangui(event, trigger, player) {
			const source = event.player,
				target = event.target,
				cards = [],
				targets = [source, target];
			if (source.countCards('h') && target.countCards('h')) {
				//QQQ
				const videoId = lib.status.videoId++;
				for (const npc of targets) {
					const result = await npc
						.chooseCard('h', true)
						.set('ai', (c) => 6 - get.value(c))
						.forResult();
					if (result?.cards?.length) {
						cards.push(result.cards[0]);
					}
				}
				game.log('亮出', targets, '的', cards);
				let num1, num2;
				game.broadcastAll(
					(targets, cards, id, source) => {
						const dialog = ui.create.dialog(get.translation(source) + '发动了【崭鬼】', cards);
						dialog.videoId = id;
						const getName = function (target) {
							if (target._tempTranslate) return target._tempTranslate;
							const name = target.name;
							if (lib.translate[name + '_ab']) return lib.translate[name + '_ab'];
							return get.translation(name);
						};
						let nums = [0, 0];
						for (var i = 0; i < targets.length; i++) {
							if (targets[i].getEquips('zanpakuto_katenkyokotsu').length) {
								const j = i == 0 ? 1 : 0;
								targets[i].line(targets[j], 'green');
								nums[j] = [1, 2, 3, 4].randomGet();
								game.log(targets[j], '的最终点数减少了', nums[j]);
							}
						}
						((num1 = targets[0].getAttackRange() + cards[0].number - nums[1]), (num2 = targets[1].getAttackRange() + cards[1].number - nums[0]));
						dialog.buttons[0].querySelector('.info').innerHTML = getName(targets[0]) + get.translation(num1);
						dialog.buttons[1].querySelector('.info').innerHTML = getName(targets[1]) + get.translation(num2);
					},
					targets,
					cards,
					videoId,
					source
				);
				game.addVideo('delay', null, 2);
				game.broadcastAll('closeDialog', videoId);
				game.log(targets, '最终点数为', num1, '和', num2);
				if (num1 > num2) {
					source.popup('洗具');
					source.line(target, 'green');
					target.damage(player, source.getAttackRange() > target.getAttackRange() ? 2 : 1);
				} else if (num2 > num1) {
					source.popup('杯具');
					target.line(source, 'green');
					source.damage(target, target.getAttackRange() > source.getAttackRange() ? 2 : 1);
				}
				for (var i = 0; i < cards.length; i++) {
					targets[i].loseToDiscardpile(i).delay = false;
				}
			}
		},
		async yinggui(event, trigger, player) {
			const source = event.player,
				target = event.target;
			if (source.getEquips('zanpakuto_katenkyokotsu').length) {
				target.discard(target.getCards('he').randomGet());
			}
			if (target.getEquips('zanpakuto_katenkyokotsu').length) {
				source.discard(source.getCards('he').randomGet());
			}
			if (
				!source.hasCard((card) => {
					return _status.connectMode || get.color(card) == 'black';
				}, 'hes')
			)
				return;
			const { bool, cards } = await source
				.chooseToDiscard(get.prompt2('bleach_yinggui'), '请弃置任意张黑色牌', 'he', [1, Infinity], { color: 'black' })
				.set('ai', (card) => {
					const player = get.player();
					if (get.attitude(player, target) > 3) return 0;
					if (target.countCards('he') > player.countCards('h') + 2) return 0;
					if (ui.selected.cards.length) {
						if (get.type2(card) == get.type2(ui.selected.cards[0])) return 7 - get.value(card);
						return 5 - get.value(card);
					}
					return 7 - get.value(card);
				})
				.forResult();
			if (!bool) return;
			const types = cards.map((i) => get.type2(i)).toUniqued();
			const result = await target
				.chooseToDiscard('he', [1, Infinity], (card) => {
					return get.event('types').includes(get.type2(card)) && get.color(card) == 'red';
				})
				.set('ai', (card) => {
					const player = get.player();
					const hs = player.getCards('he', (card) => get.event('types').includes(get.type2(card)));
					if (hs.length >= cards.length) {
						if (cards.length >= 3 && player.hp > 1) return 0;
						if (ui.selected.cards.length > cards.length) return 0;
						return 8 - get.value(card);
					}
					return 0;
				})
				.set('types', types)
				.set('dialog', ['弃置任意张与' + get.translation(source) + '弃置的牌类别相同的红色牌', 'hidden', cards])
				.forResult();
			if (!result.bool || cards.length > result.cards.length) {
				source.line(target, 'green');
				target.damage(source);
			} else if (cards.length < result.cards.length) {
				target.line(player, 'green');
				source.damage(target);
			}
		},
		async yangui(event, trigger, player) {
			const source = event.player,
				target = event.target;
			if (source.getEquips('zanpakuto_katenkyokotsu').length) {
				target.addTempSkill('bleach_off_skill');
			}
			if (target.getEquips('zanpakuto_katenkyokotsu').length) {
				source.addTempSkill('bleach_off_skill');
			}
			const { control } = await source
				.chooseControl(lib.suit.slice(0))
				.set('prompt', '请选择一个花色')
				.set('ai', (card) => {
					let num = 0,
						suit;
					for (var i of lib.suit) {
						const suits = source.countCards('he', { suit: i });
						if (num < suits) {
							num = suits;
							suit = i;
						}
					}
					return suit;
				})
				.forResult(); //QQQ
			source.popup(control + 2);
			game.log(player, '选择了', control + 2);
			const hs = source.getCards('h'),
				ts = target.getCards('h');
			const videoId = lib.status.videoId++;
			game.log(source, '和', target, '同时展示了手牌');
			const str = get.translation(source) + '对' + get.translation(target) + '发动了【艳鬼】',
				str1 = '<div class="text center">' + get.translation(source) + '</div>',
				str2 = '<div class="text center">' + get.translation(target) + '</div>';
			game.broadcastAll(
				(str, id, str1, hs, str2, ts) => {
					const dialog = ui.create.dialog(str, str1, hs, str2, ts);
					dialog.videoId = id;
				},
				str,
				videoId,
				str1,
				hs,
				str2,
				ts
			);
			game.addVideo('showCards', source, [str, str1, get.cardsInfo(hs), str2, get.cardsInfo(ts)]);
			game.broadcastAll('closeDialog', videoId);
			const num1 = source.countCards('he', { suit: control }),
				num2 = target.countCards('he', { suit: control });
			if (num1 > 0 && num2 > 0) {
				source.popup('洗具');
				source.line(target, 'green');
				if (num1 > num2) {
					target.damage(num1 - num2);
				} else target.damage('unreal');
			} else source.popup('杯具');
		},
		group: ['bleach_tongxi_sha'],
		subSkill: {
			sha: {
				audio: 'bleach_tongxi',
				trigger: {
					target: 'useCardToTarget',
				},
				filter(event, player) {
					if (!player.getStorage('bleach_tongxi').includes(event.player)) return false;
					return event.card && event.card.name == 'sha' && event.targets.length == 1;
				},
				forced: true,
				async content(event, trigger, player) {
					await game.asyncDraw([trigger.player, player]);
					trigger.targets.length = 0;
					trigger.parent.triggeredTargets1.length = 0;
					let name;
					let history = player.getAllHistory('useSkill', (evt) => evt.skill == 'bleach_tongxi');
					if (!history || !history.length) return;
					history = history.map((evt) => evt.event);
					for (var i = history.length - 1; i >= 0; i--) {
						const evt = history[i];
						if (evt.katenkyokotsuGame) {
							name = evt.katenkyokotsuGame;
							break;
						}
					}
					if (name) {
						name = name[0][2].slice(7, name[0][2].length);
						event.insert(lib.skill.bleach_tongxi[name], {
							player: trigger.player,
							target: player,
						});
					}
				},
			},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		shaRelated: true,
		derivation: ['bleach_zhangui', 'bleach_yinggui', 'bleach_yangui'],
		trigger: {
			player: 'useCardToPlayer',
		},
		filter(event, player) {
			return event.card && event.card.name == 'sha' && event.targets.length == 1;
		},
		check(event, player) {
			if (!event.target.countCards('h') && get.effect(event.target, { name: 'sha' }, player, player) > 0 && !player.getEquips(1).length) return false;
			return true;
		},
		logTarget: 'target',
		async content(event, trigger, player) {
			const target = trigger.targets[0];
			player.markAuto('bleach_tongxi', [target]);
			trigger.targets.length = 0;
			trigger.parent.triggeredTargets1.length = 0;
			if (target && target.isIn()) {
				await game.asyncDraw([player, target]);
				const result = await player
					.chooseButton(['请选择一种「花天狂骨的游戏」', [['bleach_zhangui', 'bleach_yinggui', 'bleach_yangui'], 'vcard']], true)
					.set('ai', (button) => {
						const player = get.player();
						const hs = target.getCards('he');
						if (button.link[2] == 'bleach_yangui') {
							if (get.attitude(player, target) > 0) return 3;
							if (player.countCards('he') > hs.length + 1 && hs.length > 2) return 1.2 + Math.random();
							return 0.8;
						} else if (button.link[2] == 'bleach_yinggui') {
							if (player.countCards('h', { color: 'black' }) > 0) {
								if (hs.length >= 4) return 0.6;
								if (hs.length == 3) return 0.9;
								if (hs.length <= 2) return 1.2;
							} else {
								return 0;
							}
						} else if (button.link[2] == 'bleach_zhangui') {
							if (player.getAttackRange() > target.getAttackRange()) {
								if (player.countCards('h', (card) => card.number > 8)) return 1.3 + Math.random();
							} else if (target.getAttackRange() > player.getAttackRange()) {
								return 0.1;
							}
							return 0.7 + Math.random();
						}
					})
					.forResult();
				event.parent.katenkyokotsuGame = result.links;
				const map = {
					bleach_zhangui: '崭鬼',
					bleach_yinggui: '影鬼',
					bleach_yangui: '艳鬼',
				};
				const name = map[result.links[0][2]];
				player.popup(name);
				game.log(player, '选择了', '#g【' + name + '】');
				const control = result.links[0][2].slice(7, result.links[0][2].length);
				event.insert(lib.skill.bleach_tongxi[control], {
					player: player,
					target: target,
				});
			}
		},
		ai: {
			unequip: true,
			skillTagFilter(player, tag, arg) {
				if (arg && arg.card && arg.card.name == 'sha') return true;
				return false;
			},
			effect: {
				player(card, player, target) {
					if (card.name == 'jiu' && !player.isDying()) return 0;
				},
			},
		},
	},
	bleach_qianying: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'damageEnd',
		},
		filter(event, player) {
			return event.source && event.source != player && !player.storage.bleach_qianying_eff && event.card;
		},
		check(event, player) {
			return get.attitude(player, event.source) <= 0 || player.hp <= 2;
		},
		content() {
			player.storage.bleach_qianying_eff = trigger.source;
			player.addTempSkill('bleach_qianying_eff');
			player.markSkillCharacter('bleach_qianying_eff', trigger.source, '潜影', '不能使用或打出牌、不能成为牌的目标,不计入距离计算.回合结束时对其发动「影鬼」');
		},
		subSkill: {
			eff: {
				mod: {
					cardEnabled2: () => false,
					targetEnabled: () => false,
				},
				group: 'undist',
				ai: {
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'recover') || get.tag(card, 'damage')) return 'zeroplayertarget';
						},
					},
				},
				trigger: {
					global: 'phaseEnd',
				},
				forced: true,
				content() {
					player.popup('影鬼');
					game.log(player, '发动了', '#g「影鬼」');
					event.insert(lib.skill.bleach_tongxi.yinggui, {
						player: player,
						target: player.storage.bleach_qianying_eff,
					});
				},
			},
		},
	},
	bleach_binglong: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filter(event, player) {
			return player.countCards('h');
		},
		filterTarget(card, player, target) {
			return player.canCompare(target);
		},
		usable: 1,
		content() {
			'step 0';
			player.chooseToCompare(target);
			('step 1');
			if (result.bool) {
				target.addTempSkill('bleach_off_target', { player: ['phaseEnd', 'loseHpEnd', 'damageEnd'] });
			} else {
				player.removeMark('bleach_honglian_ice', 1);
				lib.skill.bleach_bingjing.loseIce(player);
			}
		},
		ai: {
			threaten: 1.35,
			order: () => get.order({ name: 'sha' }) + 1,
			result: {
				target(player, target) {
					const num = target.countCards('h');
					if (num == 1) return -1;
					if (num == 2) return -0.7;
					return -0.5;
				},
			},
		},
	},
	bleach_juekong: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'phaseEnd',
		},
		abnormal: true,
		filter(event, player) {
			if (event.player == player) return false;
			return event.player.countUsed(null, true) == 0 && !event.player.getStat('damage');
		},
		check(event, player) {
			return get.attitude(player, event.player) < 0;
		},
		logTarget: 'player',
		content() {
			trigger.player.damage('bleach_ice');
		},
		ai: {
			expose: 0.7,
		},
	},
	bleach_honglian: {
		group: 'bleach_honglian_ice',
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'bleach_honglian_awaken',
		},
		derivation: ['bleach_bingjing', 'bleach_longxian', 'bleach_huazang'],
		juexingji: true,
		forced: true,
		content() {
			'step 0';
			player.awakenSkill('bleach_honglian');
			('step 1');
			player.chooseDrawRecover(2, true);
			player.addSkills(['bleach_longxian', 'bleach_huazang', 'bleach_bingjing']);
			player.bleachAwaken('bleach_dongshilang', 1, 'StormCenter');
		},
		subSkill: {
			ice: {
				trigger: {
					player: ['changeHp', 'loseAfter'],
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(event, player) {
					if (event.name == 'changeHp') return event.num < 0;
					const evt = event.getl(player);
					return evt && evt.hs && evt.hs.length;
				},
				content() {
					let toAdd = trigger.name == 'changeHp' ? Math.abs(trigger.num + trigger.num) : trigger.getl(player).hs.length;
					toAdd = Math.min(toAdd, 12 - player.countMark('bleach_honglian_ice'));
					player.addMark('bleach_honglian_ice', toAdd);
					if (player.countMark('bleach_honglian_ice') >= 12) {
						event.trigger('bleach_honglian_awaken');
					}
				},
				marktext: '莲',
				silent: true,
				charlotte: true,
				intro: {
					name: '冰莲华',
					content: '剩余#枚冰莲华',
				},
			},
		},
	},
	bleach_bingjing: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			player: ['loseAfter', 'damageEnd'],
		},
		forced: true,
		filter(event, player) {
			return event.name == 'damage' || (event.type == 'discard' && event.cards2);
		},
		loseIce(player) {
			if (player.countMark('bleach_honglian_ice') == 0) {
				player.removeSkills(['bleach_longxian', 'bleach_huazang', 'bleach_bingjing']);
				player.restoreSkill('bleach_honglian');
				player.bleachAwaken('bleach_dongshilang', 0);
			}
		},
		content() {
			player.draw();
			player.removeMark('bleach_honglian_ice');
			lib.skill.bleach_bingjing.loseIce(player);
		},
		ai: {
			threaten: 1.1,
		},
	},
	bleach_longxian: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToPlayered',
		},
		check(event, player) {
			return get.attitude(player, event.target) <= 0;
		},
		abnormal: true,
		filter(event, player) {
			return event.card && event.card.name == 'sha' && event.targets.length == 1;
		},
		content() {
			'step 0';
			if (!trigger.card.storage) trigger.card.storage = {};
			if (!trigger.card.storage.bleachMark_ice) trigger.card.storage.bleachMark_ice = 0;
			trigger.card.storage.bleachMark_ice++;
			('step 1');
			player.removeMark('bleach_honglian_ice', 2);
			lib.skill.bleach_bingjing.loseIce(player);
		},
	},
	bleach_huazang: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filterTarget(card, player, target) {
			return target.hasSkill('bleachEffect_ice') && !target.hasSkill('bleach_huazang_ice');
		},
		filter(event, player) {
			return player.countMark('bleach_honglian_ice') >= 5;
		},
		abnormal: true,
		content() {
			'step 0';
			player.removeMark('bleach_honglian_ice', 3);
			lib.skill.bleach_bingjing.loseIce(player);
			('step 1');
			target.addSkill('bleach_huazang_ice');
			target.chooseToDiscard('he', true);
		},
		ai: {
			order: 13,
			result: {
				target: -1,
			},
		},
		intro: {
			name: '冰花',
			content: 'mark',
		},
		subSkill: {
			ice: {
				trigger: {
					player: ['loseAfter', 'gainAfter', 'turnOverEnd', 'linkEnd', 'changeHp', 'addBleachBuffAfter', 'removeBleachBuffAfter'],
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
				},
				silent: true,
				filter(event, player) {
					if (event.name == 'gain') return event.getg(player).length;
					else if (event.name == 'lose') {
						return event.getl(player).cards2.length;
					} else if (event.name == 'addBleachBuff' || event.name == 'removeBleachBuff') {
						for (var i in event.buff) {
							if (get.bleachBuffIsNegetive(i)) return true;
						}
					} else if (['turnOver', 'link', 'changeHp'].includes(event.name)) {
						return true;
					}
					return false;
				},
				content() {
					'step 0';
					let toAdd = 1;
					if (trigger.name == 'gain') {
						toAdd = trigger.getg(player).length;
					} else if (trigger.name == 'lose') {
						toAdd = trigger.getl(player).cards2.length;
					} else if (trigger.name == 'changeHp') {
						toAdd = Math.abs(trigger.num);
					} else if (['addBleachBuff', 'removeBleachBuff'].includes(trigger.name)) {
						toAdd = 0;
						for (let key in trigger.buff) {
							toAdd += trigger.buff[key];
						}
					}
					event.num = player.countMark('bleach_huazang');
					player.addMark('bleach_huazang', toAdd);
					('step 1');
					let num = Math.floor(event.num / 10) % 10,
						num2 = Math.floor(player.countMark('bleach_huazang') / 10) % 10;
					if (num != num2) {
						player.addBleachBuff('bleachMark_ice', 1, 'nosource');
					}
					if (player.countMark('bleach_huazang') > 99) {
						player.die();
					}
				},
			},
		},
	},
	bleach_tianqian: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filter(event, player) {
			if (player.getEquips(1).length) {
				if (player.getEquips(1).some((card) => card.name == 'bleach_card_qianda' || card.name.includes('zanpakuto_'))) return false;
				return true;
			}
			return false;
		},
		async content(event, trigger, player) {
			const cards = get.cards(5);
			game.cardsGotoOrdering(cards);
			const result = await player
				.chooseCardButton(cards, '获得任意张' + get.translation(get.event('color')) + '牌', [1, 5])
				.set('filterButton', (button) => {
					return get.color(button.link) == get.event('color');
				})
				.set('color', get.color(player.getEquips(1), player))
				.forResult();
			if (result.links?.length) {
				cards.removeArray(result.links);
				player.gain(result.links, 'log', 'gain2');
			}
			while (cards.length) ui.cardPile.insertBefore(cards.pop().fix(), ui.cardPile.firstChild);
			game.updateRoundNumber();
			const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet();
			player.equip(game.createCard('zanpakuto_tenken', lib.suit.randomGet(), numbers));
		},
		ai: {
			order: 6.5,
			result: {
				player: 1,
			},
			effect: {
				target(card, player, target, current) {
					if (get.subtype(card) == 'equip1') {
						if (card.name == 'zhuge' && !player.countCards('h', 'sha')) return [1, 3];
						return [1, 3];
					}
				},
			},
			threaten: 1.2,
		},
	},
	bleach_mingwang: {
		audio: 'ext:BLEACH/skill:1:mp3',
		enable: 'phaseUse',
		filterTarget: lib.filter.notMe,
		contentBefore() {
			player.awakenSkill('bleach_mingwang');
			if (player.bleachIs(['bleach_bocun'])) game.mp417('komamura_bankai');
			player.bleachAwaken('bleach_bocun', 1);
		},
		async content(event, trigger, player) {
			const target = event.target;
			let map = {},
				list = [];
			for (var i = 1; i <= Math.min(3, player.hp); i++) {
				const cn = get.cnNumber(i, true);
				map[cn] = i;
				list.push(cn);
			}
			const { control } = await player
				.chooseControl(list, () => {
					return get.event('goon');
				})
				.set('prompt', '失去任意点体力并与' + get.translation(target) + '获得等量护盾')
				.set('goon', list[list.length - 1])
				.forResult();
			const num = map[control] || 1;
			player.loseHp(num);
			player.addBleachBuff('bleachMark_shield', num, player);
			target.addBleachBuff('bleachMark_shield', num, player);
			player.storage.bleach_mingwang_damage = target;
			player.addSkill('bleach_mingwang_damage', { player: 'dying' });
			target.flashAvatar('bleach_mingwang_damage', 'bleach_myouou');
		},
		ai: {
			order: 9,
			result: {
				target(player, target) {
					const att = get.attitude(player, target);
					if (player.hasUnknown() || player.hp == 1 || att <= 0) return 0;
					return 1 + Math.sqrt(target.getDamagedHp() + get.threaten(target)) * att;
				},
			},
			expose: 0.2,
			threaten: 1.45,
		},
		mark: true,
		limited: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
		subSkill: {
			damage: {
				forced: true,
				trigger: {
					global: 'damageEnd',
				},
				logTarget: (event, player) => player.storage.bleach_mingwang_damage,
				charlotte: true,
				_priority: 2,
				intro: {
					name: '$',
					content: '黑绳天谴明王',
				},
				filter(event, player) {
					const target = player.storage.bleach_mingwang_damage;
					return event.player == target;
				},
				group: 'bleach_mingwang_source',
				content() {
					player.damage(trigger.num, trigger.source || null);
				},
			},
			source: {
				trigger: {
					source: 'damageSource',
				},
				charlotte: true,
				forced: true,
				logTarget: (event, player) => player.storage.bleach_mingwang_damage,
				filter(event, player) {
					var target = player.storage.bleach_mingwang_damage;
					return target.isIn();
				},
				content() {
					player.storage.bleach_mingwang_damage.line(trigger.player, 'fire');
					trigger.player.damage(player.storage.bleach_mingwang_damage, trigger.num);
				},
			},
		},
	},
	bleach_reguidun: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'phaseJieshuEnd',
		},
		filter(event, player) {
			let count = 0;
			player.getHistory('lose', (evt) => {
				count += evt.cards2.length;
			});
			return count > 0;
		},
		async cost(event, trigger, player) {
			const num = player.getHistory('lose').reduce((sum, evt) => sum + evt.cards2.length, 0);
			let str = '为一名角色选择一项:';
			if (num > 0) str += '1.回复1点体力上限或移去1层异常状态;';
			if (num > 1) str += '2.回复1点体力或摸两张牌;';
			if (num > 2) str += '3.复活并将体力回复至1;';
			if (num > 3) str += '4.复原一个限定技.';
			const targets = game.filterPlayer((current) => {
				return current.maxHp < current.getInitMaxHp() || get.bleachBuffs(current, false).length;
			});
			event.result = await player
				.chooseTarget(get.prompt('bleach_reguidun'), str, (card, player, target) => {
					if (num == 1) return get.event('targets').includes(target);
					if (target.isDead()) return get.event('num') >= 3;
					return true;
				})
				.set('num', num)
				.set('ai', (target) => {
					const player = get.player();
					const att = get.sgn(get.attitude(player, target));
					if (att > 0) {
						let num = 0.5;
						if (get.bleachBuffs(target, false).length) {
							if (['bleachEffect_mabi', 'bleachEffect_hunluan', 'bleachEffect_ice'].some((i) => target.hasMark(i)) && _status.currentPhase != target) num = 2.5;
							if (['bleachEffect_qinshi', 'bleachMark_zhongshang', 'bleachMark_du', 'bleachMark_lieshang', 'bleachMark_fire'].some((i) => target.hasMark(i))) num++;
						}
						if (target.maxHp < target.getInitMaxHp()) num += 0.25;
						if (target.isDead()) num++;
						if (
							target.getSkills(null, false, false).some((i) => {
								const info = get.info(i);
								return info && !info.charlotte && info.limited && target.awakenedSkills.includes(i);
							})
						)
							num++;
						return att * num;
					}
					return 0;
				})
				.set('targets', targets)
				.set('deadTarget', true)
				.forResult();
		},
		async content(event, trigger, player) {
			const target = event.targets[0],
				num = player.getHistory('lose').reduce((sum, evt) => sum + evt.cards.length, 0);
			if (target.isDead()) {
				game.broadcastAll() + target.revive(1);
				return;
			}
			let list = ['令XXX回复1点体力上限或移除1层异常状态', '令XXX回复1点体力或摸两张牌', '令XXX复原一个限定技'];
			for (var i = 0; i < list.length; i++) {
				list[i] = [i, list[i].replace(/XXX/g, get.translation(target))];
			}
			const next = player.chooseButton(['三天归盾:请选择一项', [list.slice(0, 2), 'tdnodes'], [list.slice(2, 3), 'tdnodes']]);
			next.set('forced', true);
			next.set('filterButton', (button) => {
				if (button.link == 0) return _status.event.bool1;
				if (button.link == 1) return _status.event.bool2;
				if (button.link == 2) return _status.event.bool3;
				return true;
			});
			next.set('bool1', target.maxHp < target.getInitMaxHp() || get.bleachBuffs(target, false).length);
			next.set('bool2', num >= 2);
			next.set('bool3', num >= 4 && target.getSkills(null, false, false).some((i) => get.info(i) && !get.info(i).charlotte && get.info(i).limited && target.awakenedSkills.includes(i)));
			next.set('ai', (button) => {
				const player = get.player(),
					event = _status.event.getTrigger();
				switch (button.link) {
					case 0: {
						if (['bleachEffect_mabi', 'bleachEffect_hunluan', 'bleachEffect_ice'].some((i) => target.hasMark(i)) && _status.currentPhase != target) return 2.5 + Math.random();
						if (['bleachEffect_qinshi', 'bleachMark_zhongshang', 'bleachMark_du', 'bleachMark_lieshang', 'bleachMark_fire'].some((i) => target.hasMark(i))) return 1.6 + Math.random();
						return 0;
					}
					case 1: {
						return 1.9 + Math.random();
					}
					case 2: {
						return 1.9 + Math.random();
					}
				}
			});
			const result = await next.forResult();
			game.log(player, '选择了', '#g【归盾】', '的', '#y选项' + get.cnNumber(result.links[0] + 1, true));
			if (result.links[0] == 0) {
				if (target.maxHp < target.getInitMaxHp()) target.gainMaxHp();
				else if (get.bleachBuffs(target, false).length) {
					const buffs = get.bleachBuffs(target, false);
					const result = await player
						.chooseControl(buffs)
						.set('prompt', '请选择你要移除的异常')
						.set('ai', () => {
							const list = get
								.event('controls')
								.slice(0)
								.sort((a, b) => get.bleachBuffEffect(target, b) - get.bleachBuffEffect(target, a));
							return list[0];
						})
						.forResult();
					target.removeBleachBuff(result.control, 1);
				}
			} else if (result.links[0] == 1) {
				target.chooseDrawRecover(2, true);
			} else if (result.links[0] == 2) {
				const skills = target.getSkills(null, false, false).filter((i) => {
					const info = get.info(i);
					return info && !info.charlotte && info.limited && target.awakenedSkills.includes(i);
				});
				if (skills.length) {
					const {
						result: { bool, control },
					} = skills.length == 1 ? { result: { control: skills[0], bool: true } } : await player.chooseControl(skills).set('prompt', '复原一个限定技');
					target.restoreSkill(control);
				}
			}
		},
		ai: {
			threaten: 1.75,
		},
	},
	bleach_rejiedun: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'useCardToTargeted',
		},
		check(event, player) {
			return get.attitude(player, event.target) >= 3;
		},
		logTarget: 'player',
		filter(event, player) {
			if (!get.tag(event.card, 'damage') || player.hasSkill('bleach_rejiedun_round')) return false;
			return player != event.player && player.canCompare(event.player) && event.targets.length == 1;
		},
		content() {
			'step 0';
			player.addTempSkill('bleach_rejiedun_round');
			player.chooseToCompare(trigger.player);
			('step 1');
			if (result.bool) {
				trigger.targets.length = 0;
				trigger.parent.triggeredTargets1.length = 0;
				game.log(trigger.card, '已失效');
			}
		},
		ai: {
			expose: 0.2,
			threaten: 1.5,
		},
		subSkill: {
			round: {
				charlotte: true,
				sourceSkill: 'bleach_rejiedun',
			},
		},
	},
	bleach_lingya: {
		audio: 'ext:BLEACH/skill:4:mp3',
		trigger: {
			global: 'roundStart',
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt2('bleach_lingya'), (card, player, target) => {
					if (target.hp == 1 || target.hp < player.hp) return target.countDiscardableCards(player, 'he');
					return true;
				})
				.set('ai', (target) => {
					const player = get.player(),
						att = get.attitude(player, target);
					if (att > 0 && target != player) return 0;
					if (target.hp > 1 && target.hp >= player.hp) return -att / (1 + target.hp);
					const num = Math.min(player.getDamagedHp() + 1, player.maxHp - 1),
						num2 = get.sgn(att);
					return num * Math.sqrt(target.countCards('he') + (target == player ? num : 0));
				})
				.forResult();
		},
		async content(event, trigger, player) {
			const target = event.targets[0];
			if (target.hp == 1 || target.hp < player.hp) player.discardPlayerCard(target, 'he', true);
			else {
				await target.loseHp();
			}
			if (target == player) player.draw(player.getDamagedHp());
		},
	},
	bleach_diehua: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			player: 'dying',
		},
		derivation: ['bleach_guangshun', 'bleach_heiguan', 'bleach_yizhi', 'bleach_newzaisheng', 'bleach_fupo'],
		juexingji: true,
		forced: true,
		filter(event, player) {
			return (event.source && event.source != player) || (event.reason && event.reason.name == 'loseHp');
		},
		content() {
			'step 0';
			player.awakenSkill('bleach_diehua');
			if (player.bleachIs(['bleach_hougyoku_lanran'])) {
				player.changeGroup('shen');
				game.mp417('aizen_light');
			}
			player.bleachAwaken('bleach_hougyoku_lanran', 1, 'StandUpBeStrong_PartI');
			('step 1');
			player.loseMaxHp();
			player.recoverTo(2);
			player.storage.bleachMarkUpForever = true;
			player.addBleachBuff('bleachMark_up');
			player.addSkills(['bleach_guangshun', 'bleach_heiguan', 'bleach_yizhi']);
			('step 2');
			const list = [];
			const cards = ['cardPile', 'discardPile'].map((pos) => Array.from(ui[pos].childNodes)).flat(),
				isHougyoku = (card) => card.name == 'bleach_card_hougyoku';
			const lose_list = [],
				players = game.filterPlayer();
			players.forEach((current) => {
				const pos = 'hejxs';
				const hs = current.getCards(pos, isHougyoku);
				if (hs.length) {
					current.$throw(hs);
					lose_list.push([current, hs]);
					cards.addArray(hs);
					if (current != player) player.chat('是我赢了' + get.translation(current) + ',你夺走的崩玉即便不在我的体内,也是属于我的东西!');
				}
			});
			if (lose_list.length) {
				game.loseAsync({ lose_list }).setContent('chooseToCompareLose');
			}
			list.addArray(cards.filter(isHougyoku));
			const info = get.info(list[0]);
			if (info.skills) {
				player.addAdditionalSkill('bleach_diehua', info.skills);
			}
			game.cardsGotoSpecial(list);
			game.log(list, '被移出了游戏');
			if (trigger.source && trigger.source.isIn()) player.chat('谢谢你 ' + get.translation(trigger.source) + ',多亏了你 我终于成为了超越死神与虚的存在');
		},
		ai: {
			maixie: true,
			effect: {
				target(card, player, target) {
					if (!target.hasFriend()) return;
					if (target.hp == 1 && !target.isTurnedOver() && _status.currentPhase != target && !target.hasJudge('lebu')) return [0.5, 1];
				},
			},
		},
	},
	bleach_heiguan: {
		audio: 'ext:BLEACH/skill:3:mp3',
		logAudio: () => ['ext:BLEACH/skill:2:mp3'],
		enable: 'phaseUse',
		limited: true,
		filterTarget(card, player, target) {
			return player.canCompare(target);
		},
		filter(event, player) {
			return player.countCards('h');
		},
		check(card) {
			return 8 - get.value(card);
		},
		contentBefore() {
			player.awakenSkill('bleach_heiguan');
			if (player.bleachIs(['bleach_hougyoku_lanran']) && !player.awakenedSkills.includes('bleach_yizhi')) game.mp417('aizen_kurohitsugi');
		},
		async content(event, trigger, player) {
			const target = event.target;
			game.playBleach('bleach_heiguan3');
			const result = await player.chooseToCompare(target).forResult();
			if (result.bool) {
				player.line(target, 'thunder');
				target.instaKill(7, player);
				target.bleachDamageKill('bleach_break');
				player.chat('那么我用鬼道将你彻底击溃,让你化为尘埃吧!');
			} else {
				await player.damage(target, 'bleach_break');
				if (result.tie) {
					await target.damage(player, 'bleach_break');
					player.chat('原来如此,' + get.translation(target) + ',你的灵压并非消失了,而是被你抛弃了.');
				} else {
					player.chat('区区' + get.strRace(target) + ' 怎么可能!');
				}
				if (!player.awakenedSkills.includes('bleach_yizhi') && player.hp == 1 && player.isMinHp(true)) {
					player
						.when('phaseUseEnd')
						.then(() => {
							player.chat('这样啊 挡下我的剑让你很高兴吗？');
						})
						.then(() => {
							player.chat('粉碎我的鬼道让你如此欣喜吗？');
						})
						.then(() => {
							player.chat('伤到我的身体让你这么开心吗？');
						})
						.then(() => {
							player.chat('别太得意忘形了 ' + get.strRace(target) + '!');
						})
						.vars({ target: target });
				}
			}
		},
		ai: {
			order(name, player) {
				const cards = player.getCards('h');
				if (Array.isArray(cards))
					for (var i of cards) {
						if (i.number >= 13 && get.value(i) <= 8) {
							return 9;
						}
					}
				return 1;
			},
			result: {
				target(player, target) {
					const cards = player.getCards('h');
					if (Array.isArray(cards))
						for (var i of cards) {
							if (i.number >= 10 && get.value(i) <= 8) {
								return -1;
							}
						}
					return 0;
				},
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_guangshun: {
		trigger: {
			player: 'damageEnd',
		},
		check: () => true,
		usable: 1,
		prompt2: '每回合限一次,当你受到伤害后,你可以令其他角色计算与你的距离时+2直到你下回合开始.',
		async content(event, trigger, player) {
			player.addMark('bleach_guangshun_effect', 2, false);
			player.addTempSkill('bleach_guangshun_effect', { player: 'phaseBegin' });
			if (trigger.source && trigger.source.bleachIs(['bleach_heiqiyihu', 'bleach_re_heiqiyihu', 'bleach_arena_heiqiyihu']) && player.hp == 1 && player.isMinHp(true) && !player.storage.bleach_guangshun) {
				player.storage.bleach_guangshun = true;
				const list = ['当我主动和你拉开距离时 问过我理由的你', '这次竟然主动和我拉开距离', '这次轮到我来问你了吧', '你刚刚为什么要和我拉开距离？'];
				while (list.length) {
					trigger.source.chat(list.shift());
				}
			}
		},
		mod: {
			globalFrom(from, to, distance) {
				return distance - 1;
			},
		},
		subSkill: {
			effect: {
				marktext: '瞬',
				intro: {
					content: '其他角色计算与你的距离时＋#',
				},
				mod: {
					globalTo(from, to, distance) {
						return distance + to.countMark('bleach_guangshun_effect');
					},
				},
			},
		},
	},
	bleach_yizhi: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
		},
		juexingji: true,
		forced: true,
		filter(event, player) {
			return player.hp == 1 && (player.isMinHp(true) || player.hasHistory('damage'));
		},
		content() {
			'step 0';
			player.awakenSkill('bleach_yizhi');
			const players = game.filterPlayer();
			players.remove(player);
			let target = players[0];
			//觉醒技,结束阶段,若你体力值为1且为全场最低或本回合内受到过伤害,你将体力上限调整至3,回满体力,获得【再生】和【辐破】.
			if (players.length > 1) {
				for (const i of players) {
					const num1 = target.getAllHistory('sourceDamage', (evt) => evt.player == player).reduce((sum, evt) => sum + evt.num, 0);
					const num2 = i.getAllHistory('sourceDamage', (evt) => evt.player == player).reduce((sum, evt) => sum + evt.num, 0);
					if (num2 > num1) target = i;
				}
			} //QQQ
			player.chat('果然不肯原谅我吗 崩玉啊 我居然会落后于区区一个' + get.strRace(target));
			player.bleachAwaken('bleach_hougyoku_lanran', 2, 'StandUpBeStrong_PartII');
			('step 1');
			player.maxHp = 3;
			player.update();
			('step 2');
			player.recoverTo(player.maxHp);
			player.addSkills(['bleach_newzaisheng', 'bleach_fupo']);
		},
	},
	bleach_newzaisheng: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: ['damageBegin4', 'recoverBegin'],
		},
		filter(event, player) {
			return (event.name != 'damage' && player.isDying()) || event.num > 1;
		},
		forced: true,
		content() {
			trigger.name == 'damage' ? trigger.num-- : trigger.num++;
		},
	},
	bleach_fupo: {
		enable: 'phaseUse',
		audio: 'ext:BLEACH/skill:2:mp3',
		filterTarget: lib.filter.notMe,
		filterCard(card, player) {
			return get.subtype(card) == 'equip1';
		},
		usable: 1,
		position: 'he',
		check(card) {
			return 6 - get.equipValue(card);
		},
		filter(event, player) {
			return player.hasCard((card) => get.subtype(card) == 'equip1', 'he');
		},
		content() {
			'step 0';
			target.damage('nocard', 'fire');
			('step 1');
			if (target.hp > 2) player.chat('原来如此 受到刚才的攻击 只伤到这种程度啊');
		},
		ai: {
			order: 6.5,
			result: {
				target(player, target) {
					if (target.hasSkillTag('nofire')) return 0;
					return -1.5;
				},
			},
			tag: {
				damage: 1,
				fireAttack: true,
			},
			threaten: 1.5,
		},
	},
	bleach_pomian: {
		audio: 'ext:BLEACH/skill:4:mp3',
		enable: 'phaseUse',
		filter(event, player) {
			return player.countCards('e');
		},
		chooseButton: {
			dialog(event, player) {
				return ui.create.dialog('###破面###选择废除一个有牌的装备栏,摸三张牌并弃置一张牌.');
			},
			chooseControl(event, player) {
				const list = [1, 2, 3, 4, 5].map((i) => 'equip' + i).filter((i) => player.getEquips(i).length);
				list.push('cancel2');
				return list;
			},
			check(event, player) {
				if (player.hp > 1 && player.getDamagedHp() < 2) return 'cancel2';
				const cards = player.getCards('e').sort((a, b) => get.value(a) - get.value(b));
				const sub = get.subtype(cards[0], false),
					val = get.value(cards[0]);
				if (val < 0) return sub;
				return val < 4 ? sub : 'cancel2';
			},
			backup(result) {
				let next = get.copy(lib.skill.bleach_pomian_x);
				next.position = result.control;
				return next;
			},
		},
		ai: {
			order: 2.7,
			result: {
				player: 1,
			},
		},
		subSkill: {
			backup: {
				audio: 'bleach_pomian',
				sourceSkill: 'bleach_pomian',
			},
			x: {
				audio: 'bleach_pomian',
				filterCard: () => false,
				selectCard: -1,
				delay: false,
				content() {
					'step 0';
					player.disableEquip(lib.skill.bleach_pomian_backup.position);
					('step 1');
					player.draw(3);
					('step 2');
					player.chooseToDiscard('he', true);
				},
				ai: {
					result: {
						player: 1,
					},
				},
				sourceSkill: 'bleach_pomian',
			},
		},
	},
	bleach_zhedao: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		check(card) {
			if (get.position(card) == 'e') return -1;
			return 5 - get.value(card);
		},
		filterCard: {
			type: 'equip',
		},
		position: 'he',
		discard: false,
		lose: false,
		delay: 0,
		filterTarget(card, player, target) {
			return player.canUse({ name: 'bleach_card_cero' }, target);
		},
		filter(event, player) {
			return player.getCardUsable('bleach_card_cero') && player.countCards('he', { type: 'equip' }) > 0;
		},
		line: 'thunder',
		content() {
			'step 0';
			player.give(cards, target);
			('step 1');
			player.useCard({ name: 'bleach_card_cero' }, target);
		},
		ai: {
			order: 1,
			result: {
				target(player, target) {
					return get.effect(target, { name: 'bleach_card_cero' }, player, target) + target.getUseValue(ui.selected.cards[0]);
				},
			},
		},
	},
	bleach_tianding: {
		audio: 'ext:BLEACH/skill:4:mp3',
		trigger: {
			player: 'phaseZhunbeiBegin',
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseCardTarget({
					selectCard: [1, 2],
					position: 'he',
					filterTarget(card, player, target) {
						return player.canUse({ name: 'sha' }, target, false);
					},
					filterCard(card, player) {
						return game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
					},
					ai1(card) {
						const color = get.color(card);
						if (color == 'red' || get.subtype(card) == 'equip1') return 10 - get.value(card);
						if (ui.selected.cards.length) {
							const cardx = ui.selected.cards[0];
							if (get.subtype(cardx) == 'equip1') return 0;
							if (get.color(cardx) == 'red' && color == 'black') return 0;
							return 5 - get.value(card);
						}
						return 6 - get.value(card);
					},
					ai2: (target) => get.effect(target, { name: 'sha' }, player),
					prompt: get.prompt2('bleach_tianding'),
				})
				.forResult();
		},
		async content(event, trigger, player) {
			if (!player.storage.bleach_tianding) {
				player.storage.bleach_tianding = true;
				player
					.when('useCardToTargeted')
					.filter((evt) => evt.getParent(2).name == 'bleach_tianding' && evt.parent.triggeredTargets3.length == evt.targets.length)
					.then(() => {
						delete player.storage.bleach_tianding;
						const targets = trigger.targets.slice().sortBySeat();
						player.line(targets);
						for (const target of targets) {
							target.addTempSkill('bleach_tianding_eff');
							target.markAuto('bleach_tianding_eff', [get.color(trigger.card)]);
						}
					});
			}
			player.useCard({ name: 'sha' }, event.cards, event.targets);
		},
		init(player) {
			player.addSkill('bleach_tianding_chat');
		},
		onremove(player) {
			player.removeSkill('bleach_tianding_chat');
		},
		group: ['bleach_tianding_num', 'bleach_tianding_lose'],
		subSkill: {
			num: {
				trigger: {
					player: 'useCard',
				},
				forced: true,
				popup: false,
				filter(event) {
					const evt = event;
					return evt.parent.name == 'bleach_tianding' && evt.cards && evt.cards.length == 2;
				},
				content() {
					trigger.baseDamage++;
				},
				sourceSkill: 'bleach_tianding',
			},
			eff: {
				charlotte: true,
				mod: {
					cardEnabled2(card, player) {
						if (player.getStorage('bleach_tianding_eff').includes(get.color(card))) return false;
					},
				},
				intro: {
					content: '不能使用或打出$牌',
				},
				sourceSkill: 'bleach_tianding',
			},
			lose: {
				trigger: {
					player: 'useCardAfter',
				},
				filter(event) {
					const evt = event;
					return evt.parent.name == 'bleach_tianding' && evt.cards?.length == 1 && evt.cards.some((card) => get.subtype(card) == 'equip1');
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget('天顶:令一名其他角色失去1点体力.', true, lib.filter.notMe)
						.set('ai', (target) => {
							const player = get.player();
							return -get.attitude(player, target) / (1 + target.hp);
						})
						.forResult();
				},
				pop: false,
				async content(event, trigger, player) {
					player.line(event.targets, 'green');
					event.targets[0].loseHp();
				},
				sourceSkill: 'bleach_tianding',
			},
			chat: {
				trigger: {
					player: 'shikaiEnd',
					source: 'dieAfter',
				},
				silent: true,
				filter(event, player) {
					return event.name == 'shikai' || event.player.bleachIs(['bleach_driscoll']);
				},
				content() {
					if (trigger.name == 'shikai') {
						player.bleachAwaken('bleach_shanben', 1);
						player
							.when({ player: 'loseEnd' })
							.filter((evt) => evt.cards2 && evt.cards2.some((card) => card.name == 'zanpakuto_ryujinjakka'))
							.then(() => {
								player.bleachAwaken('bleach_shanben', [0, 2].randomGet());
							});
					} else {
						player.chat('总算能吊唁你了 长次郎');
						setTimeout(() => {
							player.chat('永别了');
						}, 2000);
						if (player.hasFriend()) {
							setTimeout(() => {
								player.chat('放心 我会将贼军');
							}, 5000);
							setTimeout(() => {
								player.chat('尽数斩杀');
							}, 7000);
						}
					}
				},
			},
		},
	},
	bleach_huozang: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		usable: 1,
		filter(event, player) {
			return player.getDamagedHp() >= 4;
		},
		filterTarget: lib.filter.notMe,
		content() {
			player.loseMaxHp();
			player.storage.bleach_tianding_mark = true;
			target.bleachDamageKill(1, 'fire');
		},
		ai: {
			order: 6.5,
			result: {
				target(player, target) {
					if (target.hasSkillTag('nofire')) return 0;
					const att = get.sgnAttitude(player, target);
					return att * get.damageEffect(target, player, player, 'fire') * Math.floor(target.getDamagedHp() / 2);
				},
			},
			tag: {
				damage: 1,
				fireAttack: true,
			},
		},
	},
	bleach_huting: {
		zhuSkill: true,
		mod: {
			inRange(from, to) {
				if (!from.hasZhuSkill('bleach_huting') || from._bleach_huting) return;
				from._bleach_huting = true;
				var group = from.group;
				var bool = game.hasPlayer(function (current) {
					return current != from && current != to && current.group == group && from.hasZhuSkill('bleach_huting', current) && current.inRange(to);
				});
				delete from._bleach_huting;
				if (bool) return true;
			},
		},
	},
	bleach_fengsi: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToPlayered',
		},
		usable: 2,
		filter(event, player) {
			if (!event.isFirstTarget) return false;
			const type = get.type(event.card);
			if (type != 'basic' && type != 'trick') return false;
			if (
				player.getHistory('custom', (evt) => {
					return evt.bleach_fengsi_name == event.card.name;
				}).length
			)
				return false;
			return player.isPhaseUsing() && event.cards.filterInD().length;
		},
		check(event, player) {
			return !get.tag(event.card, 'norepeat');
		},
		async content(event, trigger, player) {
			let cards = trigger.cards.filterInD();
			if (cards.length > 1) {
				const result = await player
					.chooseToMove('风死:将牌按顺序置于牌堆顶', true)
					.set('list', [['牌堆顶', cards]])
					.set('reverse', _status.currentPhase && _status.currentPhase.next && get.attitude(player, _status.currentPhase.next) > 0)
					.set('processAI', (list) => {
						const cards = list[0][1].slice(0);
						cards.sort((a, b) => {
							return (_status.event.reverse ? 1 : -1) * (get.value(b) - get.value(a));
						});
						return [cards];
					})
					.forResult();
				if (!result.bool) return;
				cards = result.moved[0];
			}
			cards.reverse();
			await game.cardsGotoPile(cards, 'insert');
			game.log(player, '将', cards, '置于了牌堆顶');
			trigger.parent.effectCount++;
			player.getHistory('custom').push({ bleach_fengsi_name: trigger.card.name });
		},
		ai: {
			threaten: 1.55,
		},
	},
	bleach_bingxi: {
		audio: 'ext:BLEACH/skill:4:mp3',
		trigger: {
			player: 'useCardToPlayered',
		},
		filter(event, player) {
			return (event.card.name == 'sha' || get.type(event.card) == 'trick') && event.targets.length == 1 && event.target != player;
		},
		abnormal: true,
		usable: 1,
		logTarget: 'target',
		content() {
			trigger.parent.excluded.add(trigger.target);
			trigger.target.damage('bleach_ice');
		},
		ai: {
			threaten: 1.3,
		},
	},
	bleach_wangyin: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		limited: true,
		filter(event, player) {
			return player.hasCard((card) => get.type(card) == 'equip', 'he');
		},
		filterCard(card) {
			if (get.type(card) != 'equip') return false;
			const type = get.subtype(card);
			if (Array.isArray(ui.selected.cards))
				for (var i of ui.selected.cards) {
					if (get.subtype(i) == type) return false;
				}
			return true;
		},
		position: 'he',
		selectCard: [1, 5],
		abnormal: true,
		async content(event, trigger, player) {
			let count = event.cards.length,
				map = {};
			const chosen = [];
			player.awakenSkill('bleach_wangyin');
			player.chat('就让你们见识一下吧,我们的仇恨,我们的痛苦!');
			while (true) {
				const { bool, targets } = await player
					.chooseTarget('对一名其他角色造成冰冻伤害', lib.filter.notMe, (target) => {
						const player = get.player();
						if (
							chosen.includes(target) &&
							game.hasPlayer((current) => {
								return current != target && !chosen.includes(target) && get.attitude(player, current) <= 0;
							})
						)
							return 0;
						return get.damageEffect(target, player, player);
					})
					.forResult();
				const target = targets[0];
				const list = [1, 2, 3, 4, 5].slice(0, count).map((i) => get.cnNumber(i));
				const { control } = await player
					.chooseControl(list, () => {
						return list[0];
					})
					.set('prompt', '对' + get.translation(target) + '造成任意点伤害')
					.forResult();
				const num = ['一', '两', '三', '四', '五'].indexOf(control) + 1;
				if (!chosen.includes(target)) {
					map[target] = 0;
					chosen.push(target);
				}
				map[target] += num;
				count -= num;
				if (count <= 0) {
					player.line(chosen, 'green');
					const players = game.filterPlayer();
					for (let current of players) {
						if (chosen.includes(current)) await current.damage(map[current], 'bleach_ice');
						if (current.hasHistory('damage', (evt) => evt.parent.name == 'bleach_wangyin')) current.addBleachBuff('bleachMark_zhongshang');
					}
					return;
				}
			}
		},
		ai: {
			order: 1,
			result: {
				player(player, target) {
					if (player.countCards('e') > 0) {
						const es = player.getCards('e'),
							players = game.filterPlayer();
						let num = 0;
						for (var i of players) {
							if (get.attitude(player, i) < 0) {
								num += i.hp;
							}
						}
						if (es.length >= Math.min(3, player.hp) || es.length >= num) return 1;
						return 0;
					}
					return 0;
				},
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_nasha: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'phaseDrawBegin1',
		},
		filter(event, player) {
			return !event.numFixed;
		},
		async cost(event, trigger, player) {
			let num = game.countPlayer((current) => get.attitude(player, current) > 2);
			let check = num >= 2;
			const result = await player
				.chooseTarget(
					get.prompt('bleach_nasha'),
					'视为对至多四名角色使用一张【五谷丰登】,其中体力值唯一最小的角色回复1点体力.',
					[1, Math.min(4, game.players.length)],
					(card, player, target) => {
						return player.canUse('wugu', target);
					},
					(target) => {
						if (!_status.event.aicheck) return 0;
						const att = get.attitude(get.player(), target);
						return att;
					}
				)
				.set('aicheck', check)
				.forResult();
			event.result = result;
		},
		async content(event, trigger, player) {
			trigger.changeToZero();
			const wugu = new lib.element.VCard({ name: 'wugu' });
			await player.useCard(wugu, event.targets, false);
		},
		ai: {
			threaten: 1.5,
		},
	},
	bleach_huidao: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		usable: 2,
		filter(event, player) {
			if (player.getStat('skill').bleach_huidao) return !player.hasSkill('bleach_huidao_off');
			return true;
		},
		filterTarget: true,
		content() {
			'step 0';
			target.chooseDrawRecover(2, true);
			('step 1');
			if (target.hp != target.countCards('h')) {
				player.addTempSkill('bleach_huidao_off', 'phaseUseEnd');
			}
		},
		ai: {
			order(_, player) {
				if (
					game.hasPlayer((current) => {
						return get.attitude(player, current) > 0 && (current.hp == current.countCards('h') + 2 || current.hp + 1 == current.countCards('h'));
					})
				)
					return 13;
				return 3.5;
			},
			result: {
				target(player, target) {
					if (target.hp == target.countCards('h') + 2 || target.hp + 1 == target.countCards('h')) return 4;
					return 2;
				},
			},
			threaten: 1.65,
		},
		subSkill: {
			off: {
				charlotte: true,
			},
		},
	},
	bleach_fenhun: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardEnd',
		},
		forced: true,
		filter(event, player) {
			return get.type(event.card) == 'equip';
		},
		async content(event, trigger, player) {
			const result = await player
				.chooseTarget('弃置一名其他角色的一张牌或摸一张牌', (card, player, target) => {
					return target != player && target.countDiscardableCards(player, 'he') > 0;
				})
				.set('ai', (target) => {
					const att = get.attitude(player, target);
					if (att >= 0) return 0;
					if (target.countCards('he', (card) => get.value(card) > 5)) return -att;
					return 0;
				})
				.forResult();
			if (result.bool) player.discardPlayerCard(result.targets[0], true, 'he');
			else player.draw();
		},
		ai: {
			threaten: 1.2,
		},
		mod: {
			maxHandcardBase(player, num) {
				return player.maxHp;
			},
		},
	},
	bleach_qunlang: {
		derivation: ['bleach_langhun'],
		audio: 'ext:BLEACH/skill:2:mp3',
		limited: true,
		trigger: {
			player: 'phaseBegin',
		},
		forced: true,
		async content(event, trigger, player) {
			const history = player.actionHistory;
			let num = 1;
			for (var i = 0; i < history.length; i++) {
				for (let j = 0; j < history[i].useCard.length; j++) {
					if (get.type(history[i].useCard[j].card) == 'equip') num++;
				}
			}
			const { control, index } = await player
				.chooseControlList(['获得【狼魂】和' + get.cnNumber(num) + '枚「狼」标记,并回复等量体力', '修改【虚闪】并摸' + get.cnNumber(Math.min(5, num - 1)) + '张牌.'], 'cancel2')
				.set('prompt', '是否发动【群狼】减1点体力上限并:')
				.set('ai', () => {
					const player = get.player();
					if (num == 1 && (player.hp > 1 || player.hasCard((card) => ['tao', 'jiu'].includes(card), 'h'))) return 'cancel2';
					if (Math.min(5, num - 1) >= 3 && player.hp > 1) return 1;
					if (player.hp == 1 && !player.hasCard((card) => ['tao', 'jiu'].includes(card), 'h')) return 0;
					return 'cancel2';
				})
				.forResult();
			if (control == 'cancel2') return;
			player.awakenSkill('bleach_qunlang');
			player.bleachAwaken('bleach_starrk', index + 1, 'FiestaDeGuerra');
			await player.loseMaxHp();
			if (index == 0) {
				player.addSkills('bleach_langhun');
				player.addMark('bleach_langhun', num);
				player.recover(num);
			} else {
				player.storage.bleach_qunlang_mark = true;
				player.draw(Math.min(5, num - 1));
			}
			const list = ['Stamina', 'Attack', 'Defense', 'Focus', 'SpiriualPressure'].filter((i) => !player.hasSkill(`SoulTree_${i}`));
			const soul = (
				await player.chooseButton(['选择一种 *灵魂树*', [list, 'vcard']], true).set('ai', (button) => {
					const player = get.player();
					if (button.link[2] == 'Stamina') {
						return 0;
					}
					if (button.link[2] == 'Attack') {
						if (index == 0) return 0.5 + Math.random();
						return 0.8 + Math.random();
					} else if (button.link[2] == 'Defens') {
						return 0;
					} else if (button.link[2] == 'Focus') {
						if (index == 0) return 0.9 + Math.random();
						return 0.5 + Math.random();
					} else if (button.link[2] == 'SpiriualPressure') {
						return 0.8 + Math.random();
					}
				})
			).result.links[0][2];
			player.addSkill('SoulTree_' + soul);
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_wxxushan: {
		audio: 'ext:BLEACH/skill:2:mp3',
		derivation: ['bleach_wxxushan1'],
		enable: 'phaseUse',
		filterCard(card, player) {
			if (player.storage.bleach_qunlang_mark && get.type(card) == 'equip') return true;
			return get.tag(card, 'damage');
		},
		position: 'hes',
		usable: 2,
		viewAs: {
			name: 'bleach_card_cero',
		},
		viewAsFilter(player) {
			return player.countCards('hs') > 0;
		},
		prompt() {
			return '将一张伤害' + (get.player().storage.bleach_qunlang_mark ? '或装备' : '') + '牌当虚闪使用';
		},
		check(card) {
			return 7 - get.value(card);
		},
		ai: {
			threaten: 1.5,
			order: 7.2,
		},
		mod: {
			cardUsable(card, player, num) {
				if (player.storage.bleach_qunlang_mark && card.name == 'bleach_card_cero') return num + Infinity;
			},
		},
		group: 'bleach_wxxushan_cero',
		subSkill: {
			cero: {
				filter(event, player) {
					return event.card && event.card.name == 'bleach_card_cero' && player.storage.bleach_qunlang_mark;
				},
				trigger: {
					player: 'useCard',
				},
				forced: true,
				content() {
					player.chat('抱歉,我是No.1');
					trigger.effectCount++;
				},
			},
		},
	},
	bleach_langhun: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			source: 'damageSource',
		},
		group: 'bleach_langhun_cancel',
		filter(event, player) {
			return event.parent.name != 'bleach_langhun' && player.hasMark('bleach_langhun') && event.player.isIn();
		},
		check(event, player) {
			if (player.hp > 1 && player.countMark('bleach_langhun') == 1) return false;
			return get.attitude(player, event.player) < 0 && get.damageEffect(event.player, player, player, 'thunder');
		},
		logTarget: 'player',
		prompt2: '你可以移去1枚「狼」并对其造成一点雷电伤害.',
		content() {
			'step 0';
			player.removeMark('bleach_langhun');
			trigger.player.damage('thunder');
			('step 1');
			if (!player.hasMark('bleach_langhun')) {
				player.maxHp = 1;
				player.update();
				player.chat('莉莉妮特!');
			}
		},
		ai: {
			threaten: 1.25,
		},
		intro: {
			content: 'mark',
		},
		subSkill: {
			cancel: {
				audio: 'bleach_langhun',
				trigger: {
					player: 'damageBegin4',
				},
				forced: true,
				filter(event, player) {
					return player.hasMark('bleach_langhun') && (event.num >= player.hp || event.num >= 2);
				},
				content() {
					'step 0';
					player.removeMark('bleach_langhun', 2);
					trigger.cancel();
					('step 1');
					if (!player.hasMark('bleach_langhun')) {
						player.maxHp = 1;
						player.update();
						player.chat('莉莉妮特!');
					}
				},
			},
		},
	},
	bleach_manre: {
		audio: 'ext:BLEACH/skill:4:mp3',
		init(player, skill) {
			if (!player.storage[skill]) player.storage[skill] = 0;
		},
		trigger: {
			player: ['damageEnd', 'loseAfter'],
			source: 'damageSource',
			global: 'loseAsyncAfter',
		},
		filter(event, player, name) {
			if (event.name == 'lose' || event.name == 'loseAsync') {
				if (event.type != 'discard') return false;
				const evt = event.getl(player);
				for (var i in evt.cards2) {
					if (evt.cards2[i].name == 'sha') return false;
				}
				if (
					player.hasHistory('useSkill', (evt) => {
						return evt.skill == 'bleach_manre' && evt.event.triggername == name;
					})
				) {
					return false;
				}
				return evt.cards2.length;
			}
			return true;
		},
		forced: true,
		content() {
			player.draw();
			player.storage.bleach_manre++;
			player.markSkill('bleach_manre');
		},
		marktext: '斗',
		intro: {
			name(storage, player) {
				if (player.storage.bleach_longwen) return '龙纹鬼灯丸';
				return '慢热';
			},
			markcount(storage, player) {
				return player.storage.bleach_longwen ? Math.floor(storage / 9) : storage;
			},
			content(storage, player) {
				let str = '<li>已因本技能获得' + storage + '张牌';
				if (player.storage.bleach_longwen) {
					str += '<li>每回合首次造成的伤害+' + Math.floor(storage / 9);
				}
				return str;
			},
		},
		ai: {
			maixie: true,
			maixie_hp: true,
			effect: {
				target(card, player, target) {
					if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
					if (get.tag(card, 'damage')) return [1, 0.75];
				},
			},
		},
	},
	bleach_longwen: {
		audio: 'ext:BLEACH/skill:2:mp3',
		juexingji: true,
		trigger: {
			player: 'damageBegin4',
		},
		forced: true,
		filter(event, player) {
			if (event.num < player.hp) return false;
			var num = game.countPlayer((current) => {
				return get.distance(current, player) <= 1 && current != player;
			});
			return player.storage.bleach_manre >= 11 && num <= 2;
		},
		content() {
			'step 0';
			player.awakenSkill('bleach_longwen');
			player.storage.bleach_longwen = true;
			player.chat('卍解! 龙纹鬼灯丸!');
			player.bleachAwaken('bleach_re_banmu', 1, 'Hollowed');
			('step 1');
			trigger.cancel();
			('step 2');
			player.recover();
			player.draw(2);
			player.addSkill('bleach_longwen_effect');
		},
		ai: {
			combo: 'bleach_manre',
		},
		subSkill: {
			effect: {
				audio: 'bleach_manre',
				trigger: {
					source: 'damageBegin1',
				},
				usable: 1,
				forced: true,
				charlotte: true,
				content() {
					trigger.num += Math.floor(player.storage.bleach_manre / 9);
				},
			},
		},
	},
	bleach_rexunjie: {
		ai: {
			effect: {
				target(card, player, target) {
					if (get.tag(card, 'respond') && target.countCards('h') > 1) return [1, 0.2];
				},
			},
		},
		audio: 'ext:BLEACH/skill:3:mp3',
		trigger: {
			player: ['useCard', 'respond'],
		},
		check: () => true,
		zhuanhuanji: true,
		usable: 2,
		filter(event, player) {
			return (
				!player.storage.bleach_rexunjie ||
				game.hasPlayer((current) => {
					return current != player && current.countDiscardableCards(player, 'he') > 0;
				})
			);
		},
		async cost(event, trigger, player) {
			if (!player.storage.bleach_rexunjie) {
				event.result = await player
					.chooseBool(get.prompt('bleach_rexunjie'), '你可以摸一张牌.')
					.set('ai', () => true)
					.forResult();
			} else {
				const result = await player
					.chooseTarget(get.prompt('bleach_rexunjie'), '你可以弃置其他角色一张牌,你弃置一张牌,若颜色不同,你对一名其他角色造成1点伤害.', (card, player, target) => {
						return target != player && target.countDiscardableCards(player, 'he') > 0;
					})
					.set('ai', (target) => {
						const player = get.player();
						return get.effect(target, { name: 'guohe_copy2' }, player, player);
					})
					.forResult();
				event.result = result;
			}
		},
		async content(event, trigger, player) {
			player.changeZhuanhuanji('bleach_rexunjie');
			if (player.storage.bleach_rexunjie) {
				player.draw();
			} else {
				let cur = event.targets.slice(0);
				const color1 = get.color((await player.discardPlayerCard(event.targets[0], 'he', true)).result.cards[0]);
				const color2 = get.color(
					(
						await player.chooseToDiscard('he', true).set('ai', (card) => {
							if (get.color(card) != color1) return 8 - get.value(card);
							return 6 - get.value(card);
						})
					).result.cards[0]
				);
				if (color1 != color2) {
					const {
						result: { targets },
					} =
						game.players.length == 2
							? { result: { targets: game.filterPlayer((current) => current != player).slice(0) } }
							: await player.chooseTarget('迅捷:对一名其他角色造成1点伤害', true, lib.filter.notMe).set('ai', (target) => {
								const player = get.player();
								return get.damageEffect(target, player, player);
							});
					cur.addArray(targets);
					player.line(targets, 'water');
					targets[0].damage('nocard');
				}
				let all = player.getAllHistory('useSkill', (evt) => evt.skill == 'bleach_rexunjie');
				if (!all[all.length - 1].targets) all[all.length - 1].targets = cur;
			}
		},
	},
	bleach_baowang: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			global: ['gainAfter', 'recoverAfter'],
		},
		derivation: ['bleach_baozhua'],
		juexingji: true,
		forced: true,
		filter(event, player) {
			let targets = [];
			const history = player.getAllHistory('useSkill', (evt) => evt.skill == 'bleach_rexunjie');
			if (!history.length) return false;
			for (var i = 0; i < history.length; i++) {
				if (history[i].targets) {
					targets.addArray(history[i].targets);
				}
			}
			if (!targets.includes(event.player)) return false;
			if (event.name == 'gain') {
				const cards = event.getg(event.player);
				return event.getParent('phaseDraw').player != event.player && cards.length >= 2;
			}
			return true;
		},
		async content(event, trigger, player) {
			player.storage.bleach_baowang = true;
			player.awakenSkill('bleach_baowang');
			if (player.bleachIs(['bleach_re_grimmjow'])) game.mp417('grimmjow_resurreccion');
			player.bleachAwaken('bleach_re_grimmjow', 1, 'PowerToStrive');
			player.loseMaxHp();
			player.addSkills('bleach_baozhua');
			let targets = [];
			const history = player.getAllHistory('useSkill', (evt) => evt.skill == 'bleach_rexunjie');
			for (var i = 0; i < history.length; i++) {
				if (history[i].targets) {
					targets.addArray(history[i].targets);
				}
			}
			targets = targets.filter((target) => target.isIn());
			if (targets.length) {
				player.line(targets, 'green');
				for (let target of targets) {
					await target.chooseToDiscard('he', true);
				}
			}
		},
	},
	bleach_baozhua: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'damageEnd',
		},
		abnormal: true,
		filter(event, player) {
			return player.hasEnabledSlot() && game.hasPlayer((current) => player.canUse('sha', current, false));
		},
		async cost(event, trigger, player) {
			event.result = await await player
				.chooseTarget('是否发动【豹王之爪】', (card, player, target) => {
					return player.canUse('sha', target, false);
				})
				.set('ai', (target) => {
					return get.effect(target, { name: 'sha', storage: { baozhua: true } }, player, player);
				})
				.set('prompt2', '当你受到伤害后,你可以视为使用一张附带裂伤与重伤的破防杀并废除一个装备栏')
				.forResult();
		},
		async content(event, trigger, player) {
			player.when({ player: 'disableEquipBegin' }).then(() => {
				const slots = trigger.slots;
				for (var i of slots) {
					if (player.getEquips(i).length) player.draw(2);
				}
			});
			await player.chooseToDisable().set('ai', () => {
				const nums = [3, 5, 4, 1, 2];
				for (var i of nums) {
					if (player.hasEnabledSlot(i) && player.getEquips(i).length) return 'equip' + i;
				}
				return nums[0];
			});
			const viewAs = new lib.element.VCard({ name: 'sha', storage: { baozhua: true, bleachMark_lieshang: 1, bleachMark_zhongshang: 1 } });
			player.useCard(viewAs, event.targets, false);
		},
		ai: {
			unequip: true,
			unequip: true,
			bleachGuardBreak: true,
			maixie_defend: true,
			skillTagFilter(player, tag, arg) {
				if (['unequip', 'unequip', 'bleachGuardBreak'].includes(tag)) {
					if (!arg || !arg.card || !arg.card.storage || !arg.card.storage.baozhua) return false;
				}
			},
			effect: {
				target(card, player, target) {
					if (get.tag(card, 'damage')) {
						if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
						if (!target.hasEnabledSlot()) return;
						let hastarget = false;
						if (
							game.hasPlayer((current) => {
								return current.hp <= 2 && current.countCards('h') <= 1;
							})
						)
							hastarget = true;
						if (get.attitude(player, target) > 0 && !hastarget) return;
						if (hastarget && target.hp == target.maxHp) return [0.5, 1];
						if (player.countCards('hs', 'shan')) return;
						if (target.hp > 1) return [1, 0.5];
					}
				},
			},
		},
	},
	bleach_zhengfu: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'showCharacterAfter',
		},
		hiddenSkill: true,
		filter(event, player) {
			return event.toShow && event.toShow.includes('bleach_re_wuerqiaola');
		},
		forced: true,
		content() {
			'step 0';
			player
				.chooseTarget(get.prompt2('bleach_zhengfu'), lib.filter.notMe)
				.set('ai', (target) => -get.attitude(get.player(), target))
				.forResult();
			('step 1');
			if (!result.bool) event.finish();
			else {
				event.target = result.targets[0];
				game.mp417('ulquiorra_show');
			}
			('step 2');
			if (!game.hasPlayer((current) => ![player, target].includes(current) && get.distance(current, target) <= 1)) event._result = { index: 0 };
			else {
				event.target.chooseControlList(['令' + get.translation(player) + '观看你手牌并获得其中一张', '令' + get.translation(player) + '对一名与你距离为1以内的另一名其他角色造成1点伤害'], true).set('ai', () => {
					if (get.attitude(get.player(), player) > 0) return 1;
					else {
						if (get.player().countCards('h', (card) => get.value(card) >= 8)) return 0;
						return 1;
					}
					return 0;
				});
			}
			('step 3');
			if (result.index == 0) {
				event.gain = true;
				player.chooseButton(['获得一张牌', event.target.getCards('h')], true).set('ai', (button) => {
					const player = get.player();
					const val = player.getUseValue(button.link);
					if (val > 3) return val;
					return get.value(button.link);
				});
			} else {
				player
					.chooseTarget('对一名与' + get.translation(event.target) + '距离为1以内的另一名其他角色造成1点伤害', true, (card, player, target) => {
						return ![player, get.event('target')].includes(target) && get.distance(target, get.event('target')) <= 1;
					})
					.set('ai', (target) => {
						const player = get.player();
						return get.damageEffect(target, player, player);
					})
					.set('target', event.target);
			}
			('step 4');
			if (event.gain) {
				player.gain(result.links, event.target, 'give', 'bySelf');
			} else {
				player.line(result.targets, 'green');
				result.targets[0].damage();
			}
			('step 5');
			event.target.phaseJieshu();
		},
	},
	bleach_heiyi: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			global: 'phaseEnd',
		},
		derivation: ['bleach_guangrui', 'bleach_zaisheng', 'bleach_xuwu', 'bleach_rezaisheng', 'bleach_leiqiang'],
		juexingji: true,
		forced: true,
		filter(event, player) {
			return Math.abs(player.hp - player.countCards('h')) >= 2;
		},
		async content(event, trigger, player) {
			player.storage.bleach_heiyi = true;
			player.awakenSkill('bleach_heiyi');
			player.bleachAwaken('bleach_re_wuerqiaola', 1, 'FadeToBlack_B07a');
			if (player.bleachIs(['bleach_re_wuerqiaola'])) game.mp417('ulquiorra_resurreccion');
			await player.loseMaxHp();
			player.addBleachBuff('bleachMark_up', 1, player);
			player.addSkills(['bleach_guangrui', 'bleach_zaisheng']);
			const targets = game.filterPlayer((current) => current != player).sortBySeat();
			player.line(targets, 'greent');
			for (let target of targets) {
				const result = await target
					.chooseToDiscard('he', '弃置一张牌或失去1点体力')
					.set('ai', (card) => 7 - get.value(card))
					.forResult();
				if (!result.bool) {
					target.loseHp();
				}
			}
		},
	},
	bleach_guangrui: {
		audio: 'ext:BLEACH/skill:2:mp3',
		intro: {
			content: '已使用过的花色:$',
		},
		trigger: {
			player: 'useCardAfter',
		},
		filter(event, player) {
			if (!lib.suit.includes(event.card.suit)) return false;
			const suit = event.card.suit;
			if (player.getRoundHistory('useCard', (evt) => evt.card.suit == suit).indexOf(event) != 0) return false;
			return game.hasPlayer((current) => current != player && player.inRange(current) && current.countDiscardableCards(player, 'he') > 0);
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt('bleach_guangrui'), '弃置攻击范围内的一名其他角色一张牌', (card, player, target) => {
					return target != player && player.inRange(target) && target.countDiscardableCards(player, 'he') > 0;
				})
				.set('ai', (target) => {
					return -get.attitude(get.player(), target);
				})
				.forResult();
		},
		async content(event, trigger, player) {
			player.discardPlayerCard(event.targets[0], 'he', true);
			if (player.getAllHistory('useSkill', (evt) => evt.skill == 'bleach_guangrui').length == 4) {
				player.addSkills('bleach_xuwu');
			}
		},
		group: 'bleach_guangrui_count',
		subSkill: {
			count: {
				charlotte: true,
				trigger: {
					player: 'useCardAfter',
				},
				filter(event, player) {
					const suit = event.card.suit;
					return lib.suits.includes(suit) && !player.getStorage('bleach_guangrui').includes(suit);
				},
				forced: true,
				silent: true,
				content() {
					const suits = player
						.getRoundHistory('useCard', (evt) => {
							return lib.suits.includes(evt.card.suit);
						})
						.reduce((list, evt) => {
							return list.add(evt.card.suit);
						}, [])
						.sort((a, b) => lib.suits.indexOf(a) - lib.suits.indexOf(b));
					if (!player.storage.bleach_guangrui) {
						player.when('roundStart').then(() => {
							player.unmarkAuto('bleach_guangrui', lib.suit.slice(0));
						});
					}
					player.markAuto('bleach_guangrui', suits);
				},
				popup: false,
			},
		},
		init(player) {
			const suits = player
				.getRoundHistory('useCard', (evt) => {
					return lib.suits.includes(evt.card.suit);
				})
				.reduce((list, evt) => {
					return list.add(evt.card.suit);
				}, [])
				.sort((a, b) => lib.suits.indexOf(a) - lib.suits.indexOf(b));
			if (suits.length) {
				if (!player.storage.bleach_guangrui) {
					player.when('roundStart').then(() => {
						player.unmarkAuto('bleach_guangrui', lib.suit.slice(0));
					});
				}
				player.markAuto('bleach_guangrui', suits);
			}
		},
	},
	bleach_xuwu: {
		audio: 'ext:BLEACH/skill:1:mp3',
		enable: 'phaseUse',
		limited: true,
		content() {
			'step 0';
			player.awakenSkill('bleach_xuwu');
			player.bleachAwaken('bleach_re_wuerqiaola', 2, 'EncirclementBattle');
			player.chat('不知道的话,我就来告诉你,这就是真正绝望的姿态!');
			('step 1');
			player.chooseDrawRecover(2, true);
			player.changeSkills(['bleach_rezaisheng', 'bleach_leiqiang'], ['bleach_zaisheng', 'bleach_guangrui']);
		},
		ai: {
			order: 7.5,
			result: {
				player: 1,
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_rezaisheng: {
		subSkill: {
			recover: {
				audio: 'bleach_rezaisheng',
				enable: 'chooseToUse',
				filter(event, player) {
					return !player.storage.bleach_rezaisheng && event.type == 'dying' && event.dying == player;
				},
				content() {
					'step 0';
					player.storage.bleach_rezaisheng = true;
					('step 1');
					player.recoverTo(3);
					player.addSkill('bleach_rezaisheng_lose');
				},
				ai: {
					order: 1,
					save: true,
					skillTagFilter(player, tag, target) {
						if (player != target && !player.storage.bleach_rezaisheng) return false;
					},
					result: {
						player(player) {
							if (player.hp <= 0) return 10;
							return 0;
						},
					},
				},
			},
			lose: {
				trigger: {
					global: 'phaseAfter',
				},
				forced: true,
				charlotte: true,
				content() {
					player.loseHp();
				},
			},
		},
		audioname2: {
			bleach_re_wuerqiaola: 'bleach_zaisheng_dawu',
		},
		trigger: {
			player: 'loseAfter',
			global: 'loseAsyncAfter',
		},
		check() {
			return true;
		},
		forced: true,
		group: 'bleach_rezaisheng_recover',
		usable: 1,
		prompt2: '每回合限一次,当你的手牌于回合内因弃置而进入弃牌堆时,你可以回复1点体力.',
		filter(event, player) {
			if (event.type != 'discard' || _status.currentPhase != player) return false;
			var evt = event.getl(player);
			if (!evt || !evt.cards2) return false;
			for (var i = 0; i < evt.cards2.length; i++) {
				if (get.position(evt.cards2[i]) == 'd' && evt.cards2[i].original == 'h') {
					return player.isDamaged();
				}
			}
			return false;
		},
		content() {
			player.recover();
		},
		ai: {
			threaten(player, target) {
				if (!target.storage.bleach_rezaisheng) return 1.55;
			},
		},
	},
	bleach_leiqiang: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filter(event, player) {
			return player.countCards('h');
		},
		chooseButton: {
			dialog(event, player) {
				return ui.create.dialog('###雷霆之枪###' + lib.translate.bleach_leiqiang_info);
			},
			chooseControl(event, player) {
				const list = [],
					suits = [],
					banned = [],
					hs = player.getCards('h');
				for (var i of hs) {
					const suit = i.suit;
					suits.add(suit);
					if (!lib.filter.cardDiscardable(i, player, 'bleach_leiqiang')) banned.add(suit);
				}
				if (suits.length > banned.length) {
					list.addArray(suits.slice(0));
				}
				list.push('cancel2');
				return list;
			},
			check(event, player) {
				const list = get.event('controls').slice(0);
				list.remove('cancel2');
				const gett = function (suit) {
					const cards = player.getCards('h', (card) => card.suit == suit);
					return get.value(cards);
				};
				const suit = list.sort((b, a) => gett(b) - gett(a))[0];
				if (get.value(player.getCards('h', (card) => card.suit == suit)) > 8) return 'cancel2';
				return suit;
			},
			backup(result) {
				const next = get.copy(lib.skill.bleach_leiqiang_x);
				next.position = result.control;
				return next;
			},
			prompt(links) {
				return '选择【雷霆之枪】的目标';
			},
		},
		ai: {
			order: 4.5,
			result: {
				player: 1,
			},
		},
		subSkill: {
			backup: { audio: 'bleach_leiqiang' },
			x: {
				audio: 'bleach_leiqiang',
				filterCard: () => false,
				selectCard: -1,
				filterTarget(card, player, target) {
					return target != player && target.countCards('h');
				},
				delay: false,
				content() {
					'step 0';
					player.showHandcards();
					('step 1');
					event.suit = lib.skill.bleach_leiqiang_backup.position;
					const cards = player.getCards('h', (card) => card.suit == lib.skill.bleach_leiqiang_backup.position);
					player.discard(cards);
					player.choosePlayerCard(target, 'h', true).ai = (button) => {
						if (button.link.suit == cards[0].suit) return 0;
						return get.value(button.link);
					};
					('step 2');
					target.showCards(result.cards);
					if (result.cards[0].suit != event.suit) target.damage('thunder');
					else player.tempBanSkill('bleach_leiqiang');
				},
				ai: {
					tag: {
						damage: 1,
					},
					result: {
						target: -1.5,
					},
				},
			},
		},
	},
	bleach_tongzhi: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'showCharacterAfter',
		},
		filter(event, player) {
			const target = _status.currentPhase;
			if (target == player || !target.countCards('he')) return false;
			return event.toShow && event.toShow.includes('bleach_yaluoniluo');
		},
		hiddenSkill: true,
		logTarget() {
			return _status.currentPhase;
		},
		async content(event, trigger, player) {
			const target = _status.currentPhase;
			target.showHandcards();
			const result = await target.chooseToGive('同知:交给' + get.translation(player) + '一张牌', player, 'he', true).forResult();
		},
	},
	bleach_tunshi: {
		audio: 'ext:BLEACH/skill:2:mp3',
		derivation: ['bleach_liehua'],
		trigger: {
			player: ['phaseBegin', 'phaseEnd'],
			global: ['die'],
		},
		init(player, skill) {
			if (!player.storage[skill])
				player.storage[skill] = {
					current: null,
					character: [],
					map: {},
				};
		},
		filter(event, player) {
			return event.name != 'die' || event.player.isArrancar();
		},
		async cost(event, trigger, player) {
			if (trigger.name == 'die') {
				event.result = { bool: true };
			} else {
				if (player.storage.bleach_tunshi.character.length < 2) {
					lib.skill.bleach_tunshi.initTunshi(player, 1);
				}
				const cards = player.storage.bleach_tunshi.character.slice(0);
				const choice = Math.random() <= 0.6 ? '更换武将' : 'cancel2';
				if (player.isOnline2()) {
					player.send(
						(cards, id) => {
							let dialog = ui.create.dialog('是否发动【吞噬】？', [cards, 'character']);
							dialog.videoId = id;
						},
						cards,
						event.videoId
					);
				}
				let dialog = ui.create.dialog(get.prompt('bleach_tunshi'), [cards, 'character']);
				dialog.videoId = event.videoId;
				if (!event.isMine()) {
					dialog.style.display = 'none';
				}
				const {
					result: { control },
				} = !player.storage.bleach_tunshi.current
						? { result: { control: '更换武将' } }
						: await player
							.chooseControl('更换武将', 'cancel2')
							.set('ai', () => {
								return get.event('choice');
							})
							.set('choice', choice);
				if (control == 'cancel2') {
					if (player.isOnline2()) {
						player.send('closeDialog', event.videoId);
					}
					dialog.close();
				} else {
					event.result = { bool: true, cost_data: dialog };
				}
			}
		},
		async content(event, trigger, player) {
			if (trigger.name == 'die') {
				const target = trigger.player,
					list = [target.name];
				if (target.name2) list.push(target.name2);
				lib.skill.bleach_tunshi.addTunshi(player, list);
				player.gainMaxHp();
				player.recover();
			} else {
				let dialog = event.cost_data;
				const next = player.chooseButton(true).set('dialog', event.videoId);
				next.set('filterButton', (button) => {
					return get.event('current') != button.link;
				});
				next.set('current', player.storage.bleach_tunshi.current);
				next.set('ai', (button) => {
					return 1 + Math.random();
				});
				const prompt = '选择要使用的武将牌';
				const func = function (id, prompt) {
					const dialog = get.idDialog(id);
					if (dialog) {
						dialog.content.childNodes[0].innerHTML = prompt;
					}
				};
				if (player.isOnline2()) {
					player.send(func, event.videoId, prompt);
				} else if (event.isMine()) {
					func(event.videoId, prompt);
				}
				const result = await next.forResult();
				if (player.isOnline2()) {
					player.send('closeDialog', event.videoId);
				}
				dialog.close();
				const link = result.links[0];
				const skills = player.storage.bleach_tunshi.map[link];
				player.storage.bleach_tunshi.current = link;
				player.flashAvatar('bleach_tunshi', link);
				player.addAdditionalSkill('bleach_tunshi', skills);
			}
		},
		mark: true,
		intro: {
			onunmark(storage, player) {
				storage.character = [];
			},
			content(storage, player) {
				return '已吞噬' + get.cnNumber(storage.character.length) + '位武将';
			},
			mark(dialog, storage, player) {
				if (storage && storage.current) {
					dialog.addText('当前武将牌:');
					dialog.addSmall([[storage.current], 'character']);
					dialog.addText('所有武将牌:');
					dialog.addSmall([storage.character, 'character']);
				} else {
					return '未吞噬武将';
				}
			},
			markcount(storage, player) {
				if (storage.character) return storage.character.length;
				return 0;
			},
		},
		initTunshi(player, num) {
			if (!player.storage.bleach_tunshi) return;
			const character = [];
			if (num == 1 && !game.hasPlayer((current) => current.bleachIs(['bleach_zhibohaiyan']))) {
				character.push('bleach_zhibohaiyan');
			}
			if (!_status.characterlist) {
				lib.skill.pingjian.initList();
			}
			_status.characterlist.randomSort();
			for (var i = 0; i < _status.characterlist.length; i++) {
				const name = _status.characterlist[i];
				if (!get.bleachIs.race(_status.characterlist[i], true).includes('arrancar')) continue;
				character.push(name);
				num--;
				if (num == 0) break;
			}
			lib.skill.bleach_tunshi.addTunshi(player, character);
		},
		bannedType: ['Charlotte', '主公技', '隐匿技'],
		addTunshi(player, list) {
			if (!player.storage.bleach_tunshi || list.length == 0) return;
			const character = [];
			for (var i = 0; i < list.length; i++) {
				let name = list[i];
				if (name.includes('bleach_yaluoniluo') || player.storage.bleach_tunshi.character.includes(name)) continue;
				let skills = lib.character[name][3].filter((skill) => {
					const categories = get.skillCategoriesOf(skill);
					return !categories.some((type) => lib.skill.bleach_tunshi.bannedType.includes(type));
				});
				if (skills.length) {
					character.push(list[i]);
					player.storage.bleach_tunshi.character.push(name);
					player.storage.bleach_tunshi.map[name] = skills;
				}
			}
			if (character.length) {
				let str = '';
				for (var i of character) {
					str += '【' + get.translation(i) + '】、';
				}
				str = str.slice(0, -1);
				game.log(player, '获得了', str);
				lib.skill.bleach_tunshi.drawCharacter(player, character);
			}
		},
		drawCharacter(player, list) {
			game.broadcastAll(
				function (player, list) {
					if (player.isUnderControl(true)) {
						var cards = [];
						for (var i = 0; i < list.length; i++) {
							var cardname = 'bleach_tunshi_card_' + list[i];
							lib.card[cardname] = {
								fullimage: true,
								image: 'character:' + list[i],
							};
							lib.translate[cardname] = get.rawName2(list[i]);
							cards.push(game.createCard(cardname, '', ''));
						}
						player.$draw(cards, 'nobroadcast');
					}
				},
				player,
				list
			);
		},
	},
	bleach_canxu: {
		audio: 'ext:BLEACH/skill:1:mp3',
		juexingji: true,
		trigger: {
			player: 'phaseJieshuBegin',
		},
		forced: true,
		filter(event, player) {
			return player.storage.bleach_tunshi && player.hp == 1;
		},
		content() {
			'step 0';
			player.awakenSkill('bleach_canxu');
			('step 1');
			player.recoverTo(player.maxHp);
			lib.skill.bleach_tunshi.initTunshi(player, 2);
			const list = player.storage.bleach_tunshi.character;
			player.removeSkills('bleach_tunshi');
			var skills = [];
			for (var i of list) {
				skills.addArray(
					(lib.character[i][3] || []).filter(function (skill) {
						var info = get.info(skill);
						return info && !info.zhuSkill && !info.hiddenSkill && !info.charlotte;
					})
				);
			}
			if (!list.length || !skills.length) {
				event.finish();
				return;
			}
			if (player.isUnderControl()) {
				game.swapPlayerAuto(player);
			}
			var switchToAuto = function () {
				_status.imchoosing = false;
				event._result = {
					bool: true,
					skills: skills.randomGets(2),
				};
				if (event.dialog) event.dialog.close();
				if (event.control) event.control.close();
			};
			var chooseButton = function (list, skills) {
				var event = _status.event;
				if (!event._result) event._result = {};
				event._result.skills = [];
				var rSkill = event._result.skills;
				var dialog = ui.create.dialog('请选择获得至多两个技能', [list, 'character'], 'hidden');
				event.dialog = dialog;
				var table = document.createElement('div');
				table.classList.add('add-setting');
				table.style.margin = '0';
				table.style.width = '100%';
				table.style.position = 'relative';
				for (var i = 0; i < skills.length; i++) {
					var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
					td.link = skills[i];
					table.appendChild(td);
					td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
					td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
						if (_status.dragged) return;
						if (_status.justdragged) return;
						_status.tempNoButton = true;
						setTimeout(function () {
							_status.tempNoButton = false;
						}, 500);
						var link = this.link;
						if (!this.classList.contains('bluebg')) {
							if (rSkill.length >= 2) return;
							rSkill.add(link);
							this.classList.add('bluebg');
						} else {
							this.classList.remove('bluebg');
							rSkill.remove(link);
						}
					});
				}
				dialog.content.appendChild(table);
				dialog.add('　　');
				dialog.open();
				event.switchToAuto = function () {
					event.dialog.close();
					event.control.close();
					game.resume();
					_status.imchoosing = false;
				};
				event.control = ui.create.control('ok', function (link) {
					event.dialog.close();
					event.control.close();
					game.resume();
					_status.imchoosing = false;
				});
				for (var i = 0; i < event.dialog.buttons.length; i++) {
					event.dialog.buttons[i].classList.add('selectable');
				}
				game.pause();
				game.countChoose();
			};
			if (event.isMine()) {
				chooseButton(list, skills);
			} else if (event.isOnline()) {
				event.player.send(chooseButton, list, skills);
				event.player.wait();
				game.pause();
			} else {
				switchToAuto();
			}
			('step 2');
			var map = event.result || result;
			if (map && map.skills && map.skills.length) {
				player.addSkills(map.skills);
			}
			('step 3');
			player.phase('nodelay');
		},
	},
	bleach_guangyu: {
		audio: 'ext:BLEACH/skill:4:mp3',
		enable: 'phaseUse',
		usable: 1,
		async content(event, trigger, player) {
			const cards = get.cards(4);
			player.storage.bleach_guangyu = cards;
			game.cardsGotoOrdering(cards);
			player.showCards(cards, get.translation(player) + '发动了【光之雨】');
			const cardsx = cards.map((card) => {
				var cardx = ui.create.card();
				cardx.init(get.cardInfo(card));
				cardx._cardid = card.cardid;
				return cardx;
			});
			player.directgains(cardsx, null, 'bleach_guangyu');
			player.addSkill('bleach_guangyu_effect');
			const lose_list = [[player, cardsx]];
			while (cardsx.some((card) => player.hasUseTarget(card, false, false))) {
				const result = await player
					.chooseToUse({
						filterCard(card, player) {
							if (get.itemtype(card) != 'card' || !card.hasGaintag('bleach_guangyu')) return false;
							return lib.filter.filterCard.apply(this, arguments);
						},
						prompt: '光之雨:是否使用一张展示牌',
					})
					.forResult();
				if (result.cards?.length) {
					const card = result.cards[0];
					cardsx.remove(card);
					const stat = player.stat[player.stat.length - 1].card;
					if (typeof stat[card.name] === 'number') stat[card.name]--;
				} else break;
			}
			player.removeSkill('bleach_guangyu_effect');
			const cards2 = player.getCards('s', (card) => card.hasGaintag('bleach_guangyu'));
			if (player.isOnline2()) {
				player.send(
					function (cards, player) {
						cards.forEach((i) => i.delete());
						if (player == game.me) ui.updatehl();
					},
					cards2,
					player
				);
			}
			cards2.forEach((i) => i.delete());
			if (player == game.me) ui.updatehl();
		},
		ai: {
			order: 1.5,
			result: {
				player: 1,
			},
		},
		group: ['bleach_guangyu_use'],
		subSkill: {
			use: {
				trigger: {
					player: 'useCardBefore',
				},
				charlotte: true,
				forced: true,
				popup: false,
				firstDo: true,
				filter(event, player) {
					const cards = player.getCards('s', (card) => card.hasGaintag('bleach_guangyu') && card._cardid);
					return (
						event.cards &&
						event.cards.some((card) => {
							return cards.includes(card);
						})
					);
				},
				content() {
					const idList = player.getCards('s', (card) => card.hasGaintag('bleach_guangyu')).map((i) => i._cardid);
					const cards = player.storage.bleach_guangyu,
						cards2 = [];
					for (let card of trigger.cards) {
						const cardx = cards.find((cardx) => cardx.cardid == card._cardid);
						if (cardx) cards2.push(cardx);
					}
					const cards3 = trigger.cards.slice();
					trigger.cards = cards2;
					trigger.card.cards = cards2;
					if (player.isOnline2()) {
						player.send(
							function (cards, player) {
								cards.forEach((i) => i.delete());
								if (player == game.me) ui.updatehl();
							},
							cards3,
							player
						);
					}
					cards3.forEach((i) => i.delete());
					if (player == game.me) ui.updatehl();
				},
				sourceSkill: 'bleach_guangyu',
			},
			effect: {
				trigger: {
					player: 'useCard2',
				},
				filter(event, player) {
					return (
						event.card.name == 'sha' &&
						game.hasPlayer((current) => {
							return !event.targets.includes(current) && player.canUse(event.card, current, false);
						})
					);
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget('光之雨:为' + get.translation(trigger.card) + '额外指定一个目标', (card, player, target) => {
							return !get.event('targets').includes(target) && player.canUse({ name: 'sha' }, target, false);
						})
						.set('targets', trigger.targets)
						.set('ai', (target) => {
							const player = get.player();
							return get.effect(target, { name: 'sha' }, player, player);
						})
						.forResult();
				},
				popup: false,
				async content(event, trigger, player) {
					player.line(event.targets, 'green');
					trigger.targets.addArray(event.targets);
				},
				mod: {
					targetInRange: () => true,
				},
				sourceSkill: 'bleach_guangyu',
			},
		},
	},
	bleach_yuebai: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filterTarget: lib.filter.notMe,
		abnormal: true,
		async content(event, trigger, player) {
			player.awakenSkill('bleach_yuebai');
			const target = event.target;
			const swapto = target.next;
			if (player != swapto) {
				let cur = player;
				const players = [];
				do {
					players.push(cur);
					cur = cur.next;
				} while (cur != swapto);
				players.remove(player);
				players.remove(swapto);
				players.sortBySeat();
				for (let target of players) {
					target.phase('bleach_yuebai');
					target.addSkill('bleach_yuebai_phase');
				}
				game.broadcastAll(
					(player, target) => {
						game.swapSeat(player, target, null, false);
					},
					player,
					target
				);
			}
			player.useCard({ name: 'sha', nature: 'bleach_ice', storage: { bleachMark_ice: 1 } }, target, false);
		},
		ai: {
			order: 1,
			result: {
				target(player, target) {
					return get.effect(target, { name: 'sha' }, player, player);
				},
			},
			expose: 0.7,
		},
		limited: true,
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
		subSkill: {
			phase: {
				charlotte: true,
				popup: false,
				forced: true,
				mark: true,
				_priority: 13,
				intro: {
					content: '执行额外回合',
				},
				trigger: {
					player: ['phaseAfter', 'phaseCancelled'],
				},
				filter(event, player) {
					return event.skill == 'bleach_yuebai';
				},
				content() {
					player.removeSkill('bleach_yuebai_phase');
				},
			},
		},
	},
	bleach_bailian: {
		mod: {
			aiOrder(player, card, num) {
				if (typeof card == 'object') {
					const types = [],
						suits = [];
					player.getRoundHistory('lose', (evt) => {
						if (evt.cards2 && evt.cards2.length) {
							evt.cards2.forEach((i) => {
								suits.add(i.suit);
								types.add(get.type2(i));
							});
						}
					});
					if (!types.includes(get.type2(card)) || !suits.includes(card.suit)) return num + 10;
				}
			},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'roundStart',
		},
		getNum(player) {
			const curLen = player.actionHistory.length;
			if (curLen <= 2) return 0;
			const cards = player.getRoundHistory('lose', null, 1).reduce((list, evt) => list.addArray(evt.cards2), []);
			const types = [],
				suits = [];
			cards.forEach((i) => {
				suits.add(i.suit);
				types.add(get.type2(i));
			});
			const num = (player.storage.bleach_bailian_mark === true) + (suits.length >= 4) + (types.length >= 3);
			return num;
		},
		filter(event, player) {
			return lib.skill.bleach_bailian.getNum(player) > 0;
		},
		abnormal: true,
		async cost(event, trigger, player) {
			const num = lib.skill.bleach_bailian.getNum(player);
			event.result = await player
				.chooseTarget(get.prompt('bleach_bailian'), '你可以对一名其他角色造成' + get.translation(num) + '点冰冻伤害', lib.filter.notMe)
				.set('ai', (target) => {
					const player = get.player();
					return get.damageEffect(target, player, player);
				})
				.forResult();
			event.result.skill_popup = false;
			event.result.cost_data = num;
		},
		async content(event, trigger, player) {
			const num = event.cost_data,
				target = event.targets[0];
			if (num == 3) {
				game.playBleach(['bleach_bailian3', 'bleach_bailian4'].randomGet());
				player.bleachAwaken('bleach_re_xiumuluqiya', 1);
				setTimeout(() => {
					player.bleachAwaken('bleach_re_xiumuluqiya', 0);
				}, 15000);
			}
			player
				.when({ source: 'addBleachBuffBegin2' })
				.then(() => {
					for (var i in trigger.buff) {
						if (i == 'bleachMark_ice') trigger.buff[i] = num;
					}
				})
				.vars({ num: num });
			target.damage(num, 'bleach_ice');
		},
		group: 'bleach_bailian_draw',
		subSkill: {
			draw: {
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(event, player) {
					const evt = event.getl(player);
					if (player.countCards('h') || player.storage.bleach_bailian_mark) return false;
					return evt && evt.player == player && evt.hs && evt.hs.length;
				},
				silent: true,
				content() {
					player.storage.bleach_bailian_mark = true;
					player
						.when({ global: 'roundStart' })
						.assign({
							lastDo: true,
						})
						.then(() => delete player.storage.bleach_bailian_mark);
				},
			},
		},
	},
	bleach_bairen: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filter(event, player) {
			return player.countCards('he');
		},
		position: 'he',
		filterCard: (card, player) => player.canRecast(card),
		selectCard: [1, 2],
		discard: false,
		lose: false,
		delay: false,
		limited: true,
		check(card, player) {
			//QQQ
			player = _status.event.player;
			if (player.getEquips(1).includes(card)) return 10;
			return 6 - get.value(card);
		},
		content() {
			'step 0';
			player.awakenSkill('bleach_bairen');
			('step 1');
			player.recast(cards);
			if (player.canShiKai() && !player.isShiKai(player)) {
				player.equip(game.createCard2('zanpakuto_sodenoshirayuki', 'club', 13), player);
			}
			player.addBleachBuff('bleachMark_up');
		},
		ai: {
			order: 8.5,
			result: {
				player: 1,
			},
		},
		mark: true,
		marktext: '刃',
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_newmoji: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToPlayered',
		},
		filter(event, player) {
			if (
				(() => {
					if (!event.isFirstTarget) return false;
					if (event.card.name != 'sha') return false;
					return event.targets.some((target) => target !== player);
				})()
			) {
				return event.targets.some((target) => {
					return target.countCards('h') >= player.countCards('h');
				});
			}
			return false;
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt('bleach_newmoji'), '对一名可选角色造成1点伤害', (card, player, target) => {
					return get.event('targets').includes(target);
				})
				.set(
					'targets',
					trigger.targets.filter((target) => target.countCards('h') >= player.countCards('h'))
				)
				.set('ai', (target) => {
					const player = get.player();
					return get.damageEffect(target, player, player);
				})
				.forResult();
		},
		async content(event, trigger, player) {
			await event.targets[0].damage();
		},
	},
	bleach_newlingbi: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'chooseToUse',
		hiddenCard(player, name) {
			if (get.type(name) == 'basic' && lib.inpile.includes(name) && !player.getStorage('bleach_newlingbi_used').includes(name)) return true;
		},
		filter(event, player) {
			if (event.type == 'wuxie' || event.bleach_newlingbi) return false;
			if (
				!player.hasCard((card) => {
					return player.hasCard((cardx) => {
						return card != cardx && (card.name == cardx.name || (get.type(cardx) == 'equip' && get.type(card) == 'equip'));
					}, 'he');
				}, 'he')
			)
				return false;
			return get.inpileVCardList((info) => {
				if (info[0] != 'basic') return false;
				return event.filterCard({ name: info[2], nature: info[3] }, player, event);
			}).length;
		},
		chooseButton: {
			dialog(event, player) {
				const storage = player.getStorage('bleach_newlingbi_used');
				const vcards = get.inpileVCardList((info) => {
					if (info[0] != 'basic' || storage.includes(info[2])) return false;
					return event.filterCard({ name: info[2], nature: info[3] }, player, event);
				});
				return ui.create.dialog('灵臂', [vcards, 'vcard'], 'hidden');
			},
			check(button) {
				if (get.event().parent.type != 'phase') return 1;
				return get.player().getUseValue({ name: button.link[2], nature: button.link[3] });
			},
			backup(links, player) {
				return {
					filterCard: () => false,
					viewAs: {
						name: links[0][2],
						nature: links[0][3],
					},
					selectCard: -1,
					precontent() {
						'step 0';
						player
							.chooseCard(`灵臂:重铸两张同名牌或装备牌`, 'he', 2, (card) => {
								var player = _status.event.player;
								if (ui.selected.cards.length) {
									var cardx = ui.selected.cards[0];
									if (get.type(cardx) == 'equip') return get.type(card) == 'equip';
									return card.name == cardx.name;
								}
								var cards = player.getCards('he');
								for (var cardx of cards) {
									if (card != cardx) {
										if (get.type(cardx) == 'equip' && get.type(card) == 'equip') return true;
										if (card.name == cardx.name) return true;
									}
								}
								return false;
							})
							.set('complexCard', true);
						('step 1');
						if (result.cards?.length) {
							player.recast(result.cards);
							var name = event.result.card.name;
							player.addTempSkill('bleach_newlingbi_used', 'roundStart');
							player.markAuto('bleach_newlingbi_used', [name]);
						} else {
							event.parent.bleach_newlingbi = true;
							event.parent.goto(0);
							delete event.parent.openskilldialog;
							event.finish();
						}
						('step 2');
					},
				};
			},
			prompt(links, player) {
				return '选择' + get.translation(links[0][3] || '') + '【' + get.translation(links[0][2]) + '】的目标';
			},
		},
		ai: {
			order: 4,
			save: true,
			respondSha: true,
			respondShan: true,
			skillTagFilter(player, tag, arg) {
				return player.hasCard((card) => {
					return player.hasCard((cardx) => {
						return card != cardx && (card.name == cardx.name || (get.type(cardx) == 'equip' && get.type(card) == 'equip'));
					}, 'he');
				}, 'he');
			},
			result: {
				player(player) {
					if (get.event().type == 'dying') {
						return get.attitude(player, get.event().dying);
					}
					return 1;
				},
			},
		},
		subSkill: {
			used: {
				charlotte: true,
				intro: {
					content: '已使用牌名:$',
				},
				sourceSkill: 'bleach_newlingbi',
			},
		},
	},
	bleach_zhanyue: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCard1',
		},
		filter(event, player) {
			return event.card && event.card.name == 'sha' && !game.hasNature(event.card);
		},
		group: 'bleach_zhanyue_effect',
		check(event, player) {
			let eff = 0;
			for (var i = 0; i < event.targets.length; i++) {
				let target = event.targets[i];
				let eff1 = get.damageEffect(target, player, player);
				let eff2 = get.damageEffect(target, player, player, 'fire');
				eff += eff2;
				eff -= eff1;
			}
			return eff >= 0;
		},
		init: (player, skill) => (player.storage[skill] = 0),
		content() {
			game.setNature(trigger.card, 'fire');
			if (get.itemtype(trigger.card) == 'card') {
				var next = game.createEvent('zhanyue_clear');
				next.card = trigger.card;
				event.next.remove(next);
				trigger.after.push(next);
				next.setContent(function () {
					game.setNature(card, []);
				});
			}
		},
		ai: {
			ignoreSkill: true,
			skillTagFilter(player, tag, arg) {
				if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
				if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
				if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || !arg.target.getSkills(true, false).includes(arg.skill)) return false;
			},
		},
		subSkill: {
			effect: {
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				silent: true,
				trigger: {
					player: 'useCardToPlayered',
				},
				content() {
					const chat = [get.translation(trigger.target) + '<王>与<坐骑>的区别是什么？', '我可不是在问你<人与马><两条腿和四条腿>这种小鬼猜谜游戏哦', '无论是姿态 能力 还是力量 如果有两个这样完全相同的存在', '一方作为王来支配战斗 另一方作为坐骑来增添战力时', '这两者的区别在哪里 我问的是这个', '答案只有一个 就是本能!', '持同等力量的人为了发挥出更强的力量所需的东西 成为王所需的东西', '就是要不顾一切寻求战斗 寻求力量 毫不留情摧毁敌人 蹂躏至粉碎', '对战斗要持有绝对的渴望 我们两人那极深层的身体内里 就是那刻印于最原始基础上的 被磨光彻底显现的杀戮本能', '这刻骨的本能 你可没有 你靠理性来战斗 靠理性来思考如何打到敌人', '想要用剑确还套着剑鞘 还能砍得了谁啊', '所以你才比我弱啊 ' + get.translation(trigger.target) + '!', '斩月那家伙怎么想我不管 我受不了比自己弱的王坐在自己背上到处跑 还要一起被砍', '你比我弱的话 我就击溃你 我来成为王!'];
					const num = player.storage.bleach_zhanyue;
					player.storage.bleach_zhanyue++;
					if (num < 14) {
						player.chat(chat[num]);
						if (num == 1) trigger.target.chat('你说...什么？');
						if (num == 13) {
							player.$fullscreenpop('王与坐骑', 'fire');
						}
					}
					if (game.hasNature(trigger.card, 'fire')) trigger.target.addTempSkill('bleach_off_skill');
				},
			},
		},
	},
	bleach_xuanren: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filterTarget: lib.filter.notMe,
		usable: 1,
		filter(event, player) {
			return !player.storage.bleach_xuanren;
		},
		async content(event, trigger, player) {
			const { control } = await event.target
				.chooseControl('basic', 'trick', 'equip', () => {
					if (Math.random() <= 0.35 && _status.currentPhase.countCards('h') > 4) return 'equip';
					return ['trick', 'basic'].randomGet();
				})
				.forResult();
			player.storage.bleach_xuanren = control;
			player
				.when({ player: 'useCard' })
				.then(() => {
					if (target.isIn()) {
						if (get.type2(trigger.card) != player.storage.bleach_xuanren) {
							target.popup('杯具');
							if (trigger.targets.includes(target)) {
								trigger.directHit.addArray([target]);
							} else {
								target.chooseToDiscard('he', true);
							}
						} else {
							target.popup('洗具');
						}
					}
					delete player.storage.bleach_xuanren;
				})
				.vars({ target: event.target });
		},
		ai: {
			order: 8.5,
			result: {
				target: -1,
			},
		},
	},
	bleach_newbankai: {
		audio: 'ext:BLEACH/skill:3:mp3',
		logAudio: () => ['ext:BLEACH/skill:1:mp3'],
		derivation: ['bleach_newyuechong', 'bleach_newbenneng'],
		trigger: {
			player: ['changeHp', 'gainAfter', 'loseAfter'],
		},
		juexingji: true,
		forced: true,
		filter(event, player) {
			return (event.name == 'changeHp' && player.hp == 1) || (event.name != 'changeHp' && player.countCards('h') == 1);
		},
		effect(player) {
			player
				.when({ player: 'useCard' })
				.assign({
					lastDo: true,
				})
				.filter((evt) => evt.card.name == 'sha' && !evt.all_excluded)
				.then(() => {
					game.playBleach(['bleach_newbankai2', 'bleach_newbankai3'].randomGet());
					for (let target of trigger.targets) {
						target.damage(trigger.baseDamage || 1, 'bleach_break');
					}
					trigger.targets.length = 0;
					trigger.all_excluded = true;
				});
		},
		async content(event, trigger, player) {
			player.awakenSkill('bleach_newbankai');
			player.bleachAwaken('bleach_baiyihu', 1, 'Senna');
			await player.loseMaxHp();
			player.chooseDrawRecover(2, true);
			lib.skill.bleach_newbankai.effect(player);
			player.addSkills(['bleach_newyuechong', 'bleach_newbenneng']);
		},
	},
	bleach_newyuechong: {
		audioname2: {
			bleach_quincy_heiqiyihu: 'bleach_quanli_icg',
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'phaseDrawEnd',
		},
		filter(event, player) {
			return game.hasPlayer((target) => player.canUse('sha', target, false));
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseCardTarget({
					position: 'he',
					filterTarget(card, player, target) {
						return player.canUse({ name: 'sha' }, target, false);
					},
					filterCard(card, player) {
						if (!game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return false;
						return true;
					},
					ai1: (card) => get.unuseful(card) + 9,
					ai2: (target) => get.effect(target, { name: 'sha' }, player),
					prompt: get.prompt2('bleach_newyuechong'),
				})
				.forResult();
		},
		async content(event, trigger, player) {
			player.useCard({ name: 'sha' }, event.cards, event.targets, false);
		},
		ai: {
			threaten: 1.35,
		},
	},
	bleach_newbenneng: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			target: 'useCardToTargeted',
		},
		filter(event, player) {
			return event.card && event.card.name == 'sha' && player.countCards('he') >= event.cards.length && !player.hasSkill('bleach_newbenneng_round');
		},
		group: 'bleach_newbenneng_draw',
		async cost(event, trigger, player) {
			if (trigger.cards.length == 0) {
				event.result = await player
					.chooseBool(get.prompt('bleach_newbenneng'), '你可以令此【杀】无效')
					.set('ai', () => true)
					.forResult();
			} else {
				event.result = await player
					.chooseToDiscard(get.prompt('bleach_newbenneng'), 'he', trigger.cards.length)
					.set('prompt2', '你可以弃置' + get.cnNumber(trigger.cards.length) + '张牌令此【杀】无效')
					.set('ai', (card) => {
						if (trigger.parent.excluded.includes(player)) return 0;
						if (player.countCards('h', { name: 'shan' }) > 0) return 0;
						return 8 - get.value(card);
					})
					.forResult();
			}
		},
		async content(event, trigger, player) {
			trigger.excluded.addArray(trigger.targets);
			player.addTempSkill('bleach_newbenneng_round', 'roundStart');
			game.log(trigger.card, '因', '#g【本能】', '失效了');
		},
		ai: {
			effect: {
				target(card, player, target) {
					if (target.hasSkill('bleach_newbenneng_round')) return;
					if (card.name != 'sha') return;
					return [1, 0.5];
				},
			},
		},
		mod: {
			aiOrder(player, card, num) {
				if (typeof card == 'object' && player.isPhaseUsing()) {
					const num = player.getHistory('useCard').length;
					if (get.tag(card, 'damage')) {
						if (num % 2 == 1) return num + 10;
						return num / 10;
					}
				}
			},
		},
		subSkill: {
			round: {},
			draw: {
				trigger: {
					player: 'useCard1',
				},
				forced: true,
				filter(event, player) {
					return player.getHistory('useCard').indexOf(event) % 2 == 1 && get.tag(event.card, 'damage');
				},
				content() {
					player.draw();
				},
			},
		},
	},
	bleach_reyuechong: {
		group: 'bleach_reyuechong_eff',
		subSkill: {
			icg: {
				audio: 'ext:BLEACH/skill:3:mp3',
			},
			eff: {
				audio: 'bleach_reyuechong',
				logAudio: () => ['ext:BLEACH/skill/bleach_reyuechong3.mp3'],
				audioname2: {
					bleach_re_heiqiyihu_awaken: ['ext:BLEACH/skill/bleach_reyuechong_icg3.mp3'],
				},
				trigger: {
					player: 'useCardToPlayered',
				},
				forced: true,
				filter(event, player) {
					if (get.is.convertedCard(event.card) || get.is.virtualCard(event.card)) return false;
					const evtx = event.parent;
					return (
						!player.hasHistory(
							'useCard',
							(evt) => {
								return evt != evtx && evt.card.name == 'sha';
							},
							evtx
						) &&
						event.card.name == 'sha' &&
						!event.parent.directHit.includes(event.target)
					);
				},
				logTarget: 'target',
				async content(event, trigger, player) {
					trigger.target.addTempSkill('bleach_reyuechong_targeted');
					const id = trigger.target.playerid;
					const map = trigger.parent.customArgs;
					if (!map[id]) map[id] = {};
					if (typeof map[id].shanRequired == 'number') {
						map[id].shanRequired++;
					} else {
						map[id].shanRequired = 2;
					}
				},
				ai: {
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
					},
				},
			},
			targeted: {
				init(player, skill) {
					player.addSkillBlocker(skill);
				},
				onremove(player, skill) {
					player.removeSkillBlocker(skill);
				},
				charlotte: true,
				skillBlocker(skill, player) {
					const list = get.skillCategoriesOf(skill, player);
					if (!list.includes('锁定技') || list.length > 1) return false;
					return !lib.skill[skill].persevereSkill && !lib.skill[skill].charlotte;
				},
				mark: true,
				marktext: '突',
				intro: {
					content(storage, player, skill) {
						const list = player.getSkills(null, false, false).filter((i) => {
							return lib.skill.bleach_reyuechong_targeted.skillBlocker(i, player);
						});
						if (list.length) return '失效技能:' + get.translation(list);
						return '无失效技能';
					},
				},
				charlotte: true,
				ai: {
					unequip2: true,
				},
				sourceSkill: 'bleach_reyuechong',
			},
		},
		audio: 'ext:BLEACH/skill:3:mp3',
		logAudio: () => ['ext:BLEACH/skill/bleach_reyuechong1.mp3', 'ext:BLEACH/skill/bleach_reyuechong2.mp3'],
		audioname2: {
			bleach_re_heiqiyihu_awaken: 'bleach_reyuechong_icg',
		},
		trigger: {
			player: 'phaseDrawEnd',
		},
		filter(event, player) {
			return player.countCards('he') && game.hasPlayer((target) => player.canUse('sha', target, false));
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseCardTarget({
					filterTarget(card, player, target) {
						return player.canUse({ name: 'sha' }, target, false);
					},
					filterCard(card) {
						const player = get.player();
						return game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
					},
					position: 'he',
					ai1: (card) => get.unuseful(card) + 9,
					ai2(target) {
						return get.effect(target, { name: 'sha' }, get.player(), player);
					},
					prompt: get.prompt2('bleach_reyuechong'),
				})
				.forResult();
		},
		async content(event, trigger, player) {
			const card = event.cards[0],
				target = event.targets[0],
				cardx = { name: 'sha' };
			player.useCard(cardx, [card], target, false);
		},
		ai: {
			threaten: 1.35,
		},
	},
	bleach_hollow: {
		audio: 'ext:BLEACH/skill:1:mp3',
		derivation: ['bleach_wanxu'],
		trigger: {
			player: 'phaseJieshuBegin',
		},
		limited: true,
		prompt2(event, player) {
			let str = '获得';
			let num = player.getStat('damage') || 0;
			if (num >= 3) str += '【完虚】';
			if (num == 3) str += '和';
			if (num <= 3) str += '1层护盾且有护盾时【杀】的伤害+1';
			str += ',回复1点体力或摸两张牌.';
			return str;
		},
		check(event, player) {
			return player.hp + player.countCards('hs', (card) => ['jiu', 'shan'].includes(card.name)) <= 2 || (player.getStat('damage') || 0) >= 3;
		},
		async content(event, trigger, player) {
			player.awakenSkill('bleach_hollow');
			let num = player.getStat('damage') || 0;
			if (num <= 3) {
				player.changeSkin({ characterName: 'bleach_re_heiqiyihu' }, 'bleach_re_heiqiyihu_awaken');
				if (player.bleachIs(['bleach_re_heiqiyihu'])) game.mp417('ichigo_hollow', 3.5);
				player.addBleachBuff('bleachMark_shield');
				player.addSkill('bleach_hollow_effect');
			}
			if (num >= 3) {
				player.addSkills('bleach_wanxu');
			}
			await player.chooseDrawRecover(2, true);
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
		subSkill: {
			add: {
				trigger: {
					player: ['addBleachBuffEnd', 'removeBleachBuffEnd'],
				},
				filter(event, player) {
					if (!player.bleachIs(['bleach_re_heiqiyihu'])) return false;
					const i = 'bleachMark_shield';
					if (i in event.buff) {
						if (event.name == 'addBleachBuff') return player.countMark(i) == event.buff[i] || event.parent.name == 'bleach_hollow';
						return !player.hasMark(i);
					}
				},
				silent: true,
				charlotte: true,
				content() {
					if (trigger.name == 'addBleachBuff') player.changeSkin({ characterName: 'bleach_re_heiqiyihu' }, 'bleach_re_heiqiyihu_awaken');
					else {
						player.chat('抱歉 只有一瞬间而已');
						player.bleachAwaken('bleach_re_heiqiyihu', 2);
						setTimeout(() => {
							player.changeSkin('bleach_hollow', 'bleach_re_heiqiyihu');
						}, 5000);
					}
				},
			},
			effect: {
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha' && player.hasMark('bleachMark_shield');
				},
				silent: true,
				content() {
					trigger.baseDamage++;
				},
				group: 'bleach_hollow_add',
				charlotte: true,
				sourceSkill: 'bleach_hollow',
			},
		},
	},
	bleach_wanxu: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'dieBefore',
		},
		juexingji: true,
		forced: true,
		async content(event, trigger, player) {
			player.awakenSkill('bleach_wanxu');
			const num = player.hasSkill('bleach_hollow_add') ? get.rand(3, 5) : get.rand(3, 4);
			if (player.bleachIs(['bleach_re_heiqiyihu'])) game.mp417('ichigo_newhollo');
			player.bleachAwaken('bleach_re_heiqiyihu', num, ['4BLM_101_Chokkaku', 'WhatCanYouSeeInTheirEyes'].randomGet());
			trigger.cancel();
			player.recoverTo(3);
			player.tempBanSkill('bleach_reyuechong', { source: 'dying' });
			player.addTempSkill('bleach_wanxu_eff', { source: 'dying' });
			player.when({ source: 'dying' }).then(() => {
				player.popup('超速再生');
				if (player.isDamaged()) player.recover();
				player.bleachAwaken('bleach_re_heiqiyihu', 6);
			});
		},
		subSkill: {
			eff: {
				trigger: {
					player: ['phaseUseBegin', 'phaseUseEnd'],
				},
				silent: true,
				async content(event, trigger, player) {
					if (event.triggername == 'phaseUseEnd') {
						const targets = game.filterPlayer((current) => player.canUse('sha', current, false) && current != player);
						if (targets.length) {
							player.popup('响转');
							player.useCard({ name: 'sha' }, targets.randomGet()).set('oncard', () => {
								_status.event.directHit.addArray(game.players);
							});
						}
					} else if (game.hasPlayer((i) => player.canUse({ name: 'bleach_card_cero' }, i))) {
						const result = await player
							.chooseTarget('视为使用一张附带重伤效果的【虚闪】', lib.filter.notMe, true)
							.set('ai', (target) => {
								return get.effect(target, { name: 'bleach_card_cero' }, player, player);
							})
							.forResult();
						player
							.when('useCardToPlayered')
							.filter((evt) => evt.card.name == 'bleach_card_cero')
							.then(() => {
								for (let target of trigger.targets) {
									if (target.hasSkill('bleach_jiusuo')) {
										if (target.isLinked()) target.link();
										target.tempBanSkill('bleach_jiusuo');
									}
								}
							});
						player.useCard({ name: 'bleach_card_cero', storage: { bleachMark_zhongshang: 1 } }, result.targets);
					}
				},
				ai: {
					canUseCero: true,
				},
				sourceSkill: 'bleach_wanxu',
			},
		},
	},
	bleach_spjinghua: {
		audio: 'ext:BLEACH/skill:2:mp3',
		limited: true,
		enable: 'phaseUse',
		async content(event, trigger, player) {
			player.awakenSkill('bleach_spjinghua');
			await player.draw();
			const numbers = [];
			for (var i = 0; i < 10; i++) numbers.push(i);
			let dialog = ['将一张手牌置于牌堆的任意位置'];
			dialog.add('<div class="text center">请选择你的一张手牌</div>');
			dialog.push(player.getCards('h'));
			dialog.add('请选择置于牌堆的十位数');
			dialog.push([
				numbers.map((item, i) => {
					return [i, item];
				}),
				'tdnodes',
			]);
			const { bool, links } = await player
				.chooseButton(dialog, 2, true)
				.set('filterButton', (button) => {
					return !ui.selected.buttons.some((but) => get.owner(but.link) == get.owner(button.link));
				})
				.set('ai', (button) => {
					if (typeof button.link == 'number') return 1;
					return 8 - get.value(button.link);
				})
				.forResult();
			if (typeof links[0] == 'number') links.reverse();
			if (links[1] == 0) numbers.remove(0);
			const { control } = await player
				.chooseControl(numbers)
				.set('prompt', '将' + get.translation(links[0]) + '置于牌堆第' + links[1] + '的位置')
				.forResult();
			const num = `${links[1]}` + control;
			player.$throw(1, 1000);
			links[0].storage.bleach_spjinghua = true;
			player.lose(links[0], ui.cardPile).insert_index = function (event, card) {
				return ui.cardPile.childNodes[num - 1];
			};
			game.updateRoundNumber();
			game.log(player, '把一张牌放在了牌堆里');
			player.addSkill('bleach_spjinghua_mark');
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
		ai: {
			order: 1,
			result: {
				player: 1,
			},
		},
		subSkill: {
			mark: {
				trigger: {
					player: 'gainEnd',
					global: 'loseAsyncEnd',
				},
				silent: true,
				lastDo: true,
				filter(event, player) {
					const cards = event.getg(player);
					if (!cards.length) return false;
					return cards.some((card) => card.storage.bleach_spjinghua);
				},
				group: 'bleach_spjinghua_eff',
				async content(event, trigger, player) {
					let cards = trigger.getg(player);
					if (cards.length) {
						cards = cards.filter((card) => card.storage.bleach_spjinghua);
						player.addGaintag(cards, 'bleach_spjinghua');
					}
				},
			},
			eff: {
				trigger: {
					global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(event, player) {
					return game.hasPlayer((current) => {
						if (current == player) return false;
						const evt = event.getl(current);
						return evt && evt.cards2 && evt.cards2.length && evt.cards2.some((i) => i.storage.bleach_spjinghua);
					});
				},
				forced: true,
				content() {
					player.chat(['真正可怕的肉眼看不见的背叛', '多亏了你对我一无所知'].randomGet());
					const targets = game
						.filterPlayer((current) => {
							if (current == player) return false;
							const evt = trigger.getl(current);
							return evt && evt.cards2 && evt.cards2.length && evt.cards2.some((i) => i.storage.bleach_spjinghua);
						})
						.sortBySeat(_status.currentPhase);
					player.line(targets, 'green');
					for (let target of targets) {
						target.damage('nocard');
						target.addTempSkill('bleach_spjinghua_effect', { player: 'phaseBegin' });
						const evt = trigger.getl(target);
						for (let card of evt.cards2) {
							if (card.storage.bleach_spjinghua) {
								target.storage.bleach_spjinghua_effect = get.type2(card);
								break;
							}
						}
					}
				},
			},
			effect: {
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					return get.type2(event.card) == player.storage.bleach_spjinghua_effect;
				},
				mark: true,
				marktext: '幻',
				intro: {
					name: '镜花水月',
					content: '$牌失效',
				},
				silent: true,
				charlotte: true,
				content() {
					trigger.targets.length = 0;
					trigger.all_excluded = true;
					game.log(trigger.card, '因', '#g【镜花水月】', '失效了');
				},
				ai: {
					effect: {
						player(card, player, target) {
							if (get.type2(card) == player.storage.bleach_spjinghua_effect) return 'zeroplayertarget';
						},
					},
				},
			},
		},
	},
	bleach_duankong: {
		audio: 'ext:BLEACH/skill:2:mp3',
		map: {
			基本: 'basic',
			锦囊: 'trick',
			装备: 'equip',
		},
		enable: 'chooseToUse',
		filter(event, player) {
			if (event.bleach_duankong) return false;
			if (
				!player.hasCard((card) => {
					return !player.getStorage('bleach_duankong_used').includes(get.type2(card));
				}, 'h')
			)
				return false;
			return ['wuxie', 'bleach_danku'].some((i) => event.filterCard({ i }, player, event));
		},
		prompt: '你可以将一种类型的牌(每种类型限一次)当【断空】或【无懈可击】使用并摸三张牌.',
		chooseButton: {
			dialog(event, player) {
				const types = ['basic', 'trick', 'equip'];
				return ui.create.dialog('###断空###<div class="text center">摸一张牌,将所有指定类型的手牌当【断空】或【无懈可击】使用</div>', [types.map((i) => get.translation(i)), 'tdnodes'], [['wuxie', 'bleach_danku'], 'vcard']);
			},
			filter(button, player) {
				const storage = player.getStorage('bleach_duankong_used');
				const type = typeof button.link;
				if (ui.selected.buttons.length && type == typeof ui.selected.buttons[0].link) return false;
				if (type == 'string' && (storage.includes(lib.skill.bleach_duankong.map[button.link]) || !player.hasCard((card) => get.type2(card) == lib.skill.bleach_duankong.map[button.link], 'h'))) return false;
				if (type != 'string' && !_status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent)) return false;
				return true;
			},
			select: 2,
			check(button) {
				const types = ['basic', 'trick', 'equip'];
				const type = typeof button.link;
				const player = get.player();
				const list = types
					.map((i) => [
						i,
						player
							.getCards('h', { type: i })
							.map((i) => get.value(i))
							.reduce((p, c) => p + c, 0),
					])
					.sort((a, b) => a[1] - b[1])
					.map((i) => i[0]);
				if (type == 'string') return (1.2 - list.indexOf(button.link) + Math.sqrt(3 - player.countCards('h', (card) => get.type2(card) == lib.skill.bleach_duankong.map[button.link]))) * 10;
				if (_status.event.parent.type != 'phase') return 1;
				return player.getUseValue({ name: button.link[2] });
			},
			backup(links, player) {
				if (typeof links[0] != 'string') links.reverse();
				return {
					popname: true,
					position: 'h',
					filterCard: () => false,
					selectCard: -1,
					type: lib.skill.bleach_duankong.map[links[0]],
					viewAs: {
						name: links[1][2],
					},
					precontent() {
						'step 0';
						var type = lib.skill.bleach_duankong_backup.type;
						game.log(player, '声明了', type, '牌');
						player.markAuto('bleach_duankong_used', [type]);
						('step 1');
						var cards = player.getCards('h', (card) => get.type2(card) == lib.skill.bleach_duankong_backup.type);
						var cardsx = cards.filter((i) => game.checkMod(i, player, 'unchanged', 'cardEnabled2', player) !== false);
						player.draw(3);
						event.result.cards = cards;
					},
				};
			},
			prompt(links, player) {
				return '将所有' + get.translation(links[0]) + '牌当' + get.translation(links[1][2]) + '使用并摸三张牌';
			},
		},
		hiddenCard(player, name) {
			if (!lib.inpile.includes(name) || !['wuxie', 'bleach_danku'].includes(name)) return false;
			const storage = player.getStorage('bleach_duankong_used');
			return player.hasCard((card) => !storage.includes(get.type2(card)));
		},
		ai: {
			order: 1,
			threaten: 1.2,
			result: {
				player: 1,
			},
		},
		subSkill: {
			used: {
				intro: {
					content: '已用类型:$',
				},
			},
		},
	},
	bleach_yeren: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToPlayered',
		},
		filter(event, player) {
			const info = get.info(event.card);
			if (!event.target.getExpansions('bleach_yeren').length && !event.target.countCards('h')) return false;
			return info.selectTarget && info.selectTarget == 1;
		},
		logTarget: 'target',
		async content(event, trigger, player) {
			if (trigger.target.getExpansions('bleach_yeren').length) {
				const result = await player
					.chooseTarget('将' + get.translation(trigger.target) + '的「夜刃」交给一名角色', true)
					.set('ai', (target) => {
						const player = get.player();
						if (target.hasJudge('lebu')) return 0;
						let att = get.attitude(player, target);
						if (att < 3) return 0;
						if (target.hasSkillTag('nogain')) att /= 10;
						return att / (1 + get.distance(player, target, 'absolute'));
					})
					.forResult();
				if (result.bool) result.targets[0].gain(trigger.target.getExpansions('bleach_yeren'), 'gain2');
			} else {
				const result = await player.choosePlayerCard(trigger.target, true, 'h').forResult();
				trigger.target.addToExpansion(result.cards, 'giveAuto', trigger.target).gaintag.add('bleach_yeren');
			}
		},
		marktext: '刃',
		intro: {
			content(content, player) {
				if (player == game.me || player.isUnderControl()) {
					return get.translation(player.getExpansions('bleach_yeren'));
				}
				return '共有' + get.cnNumber(player.getExpansions('bleach_yeren').length) + '张牌';
			},
			markcount: 'expansion',
		},
		onremove(player, skill) {
			var cards = player.getExpansions(skill);
			if (cards.length) player.loseToDiscardpile(cards);
		},
		ai: {
			threaten: 1.5,
		},
	},
	bleach_zhiyue: {
		audio: 'ext:BLEACH/skill:4:mp3',
		trigger: {
			player: ['damageEnd', 'die'],
		},
		forceDie: true,
		filter(event, player) {
			if (event.name == 'die') return true;
			return player.isIn();
		},
		getIndex(event, player, triggername) {
			return event.num || 1;
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt('bleach_zhiyue'), '令一名其他角色判定并将【灭亡之斧】置入' + (player.getEquips('bleach_miewangzhifu').length ? '其' : '') + '装备牌,若为结果黑色,对其造成1点伤害.', lib.filter.notMe)
				.set('ai', (target) => get.damageEffect(target, get.player(), get.player()))
				.forResult();
		},
		async content(event, trigger, player) {
			const target = event.targets[0],
				current = player.getEquips('bleach_miewangzhifu').length ? target : player;
			let card;
			if (!lib.inpile.includes('bleach_miewangzhifu')) {
				card = game.createCard2('bleach_miewangzhifu', 'diamond', 2);
				lib.inpile.push('bleach_miewangzhifu');
			} else card = get.cardPile('bleach_miewangzhifu', 'field');
			if (card) {
				current.$gain2(card);
				current.equip(card);
			}
			const judgeEvent = target.judge((card) => {
				if (get.color(card) == 'red') return -2;
				return 2;
			});
			judgeEvent.judge2 = (result) => result.bool;
			const { judge } = await judgeEvent.forResult();
			if (judge < 2) return;
			target.damage('nocard');
		},
	},
	bleach_dulou: {
		audio: 'ext:BLEACH/skill:1:mp3',
		enable: 'phaseUse',
		limited: true,
		filter(event, player) {
			return player.isMaxEquip() && player.countCards('e');
		},
		async content(event, trigger, player) {
			player.storage.bleach_dulou = true;
			player.awakenSkill('bleach_dulou');
			player.bleachAwaken('bleach_baraggan', 1, 'WhisperOfTheApocalypse');
			await player.loseMaxHp();
		},
		ai: {
			order: 13,
			result: {
				player: 1,
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_fuxiu: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		usable: 1,
		delay: false,
		async content(event, trigger, player) {
			await player.draw();
			const hs = player.getCards('h');
			if (!hs.length) return;
			const { cards, targets } = await player
				.chooseCardTarget({
					forced: true,
					prompt: '将一张手牌交给一名其他角色',
					filterTarget: lib.filter.notMe,
					filterCard: true,
					position: 'h',
					ai1: (card) => 7 - get.value(card),
					ai2(target) {
						const player = get.player();
						const att = get.sgn(get.attitude(player, target));
						if (att > 0) return 0;
						return (-att * get.threaten(target)) / get.distance(player, target, 'absolute');
					},
				})
				.forResult();
			const target = targets[0];
			player.line(target, 'green');
			player.give(cards, target, 'give');
		},
		ai: {
			notemp: true,
			order: 1,
			result: {
				player: 1,
			},
		},
		group: ['bleach_fuxiu_gain'],
		subSkill: {
			x: {
				name: '死',
			},
			gain: {
				trigger: {
					global: 'gainAfter',
					player: 'loseAsyncAfter',
				},
				forced: true,
				popup: false,
				filter(event, player) {
					if (event.name == 'loseAsync') {
						if (event.type != 'gain') return false;
						return game.hasPlayer((current) => {
							if (current == player) return false;
							const hs = current.getCards('h'),
								cards = event.getl(player).cards2;
							return event.getg(current).some((i) => cards.includes(i) && hs.includes(i));
						});
					}
					if (event.player != player) {
						const hs = event.player.getCards('h'),
							evt = event.getl(player);
						return evt?.cards2 && evt.cards2.some((card) => hs.includes(card));
					}
					return false;
				},
				async content(event, trigger, player) {
					const cards = trigger.getl(player).cards2,
						targets = game.filterPlayer((current) => {
							if (current == player) return;
							const hs = current.getCards('h'),
								cardsx = trigger.getg(current);
							return cardsx.some((card) => hs.includes(card) && cards.includes(card));
						});
					for (let target of targets) {
						const hs = target.getCards('h'),
							cardsx = trigger.getg(target).filter((i) => hs.includes(i) && cards.includes(i));
						const {
							result: { bool },
						} =
							hs.length - cardsx.length < 2
								? { result: { bool: false } }
								: await target
									.chooseToDiscard('弃置两张不为' + get.translation(cardsx) + '的牌,否则失去1点体力' + (player.storage.bleach_dulou ? '上限' : ''), 2, 'he', (card) => {
										return !get.event('cards').includes(card);
									})
									.set('cards', cardsx)
									.set('ai', (card) => {
										return 8 - get.value(card);
									});
						if (!bool) await target[`lose${player.storage.bleach_dulou ? 'Max' : ''}Hp`]();
					}
				},
			},
		},
	},
	bleach_xuye: {
		audio: 'ext:BLEACH/skill:2:mp3',
		zhuSkill: true,
		trigger: {
			player: 'gainAfter',
			global: 'loseAsyncAfter',
		},
		filter(event, player) {
			if (!player.hasZhuSkill('bleach_xuye')) return false;
			const cards = event.getg(player);
			if (!cards.length) return false;
			return game.hasPlayer((current) => {
				if (current == player) return false;
				if (current.group != 'bleach_xu') return false;
				return event.getl(current).cards2.length;
			});
		},
		logTarget(event, player) {
			return event.giver;
		},
		content() {
			event.targets[0].draw();
		},
	},
	bleach_renfeng: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			source: 'damageBegin1',
		},
		check(event, player) {
			if (event.player.hasSkillTag('nodamage')) return false;
			return (
				get.attitude(player, event.player) <= 0 &&
				(player.hasCard((card) => {
					return !player.storage.bleach_shilian_mark || get.tag(card, 'save');
				}, 'hs') ||
					player.hp > 1)
			);
		},
		content() {
			player.loseHp();
			trigger.num++;
			game.setNature(trigger, 'bleach_ice');
		},
	},
	bleach_shilian: {
		audio: 'ext:BLEACH/skill:4:mp3',
		forced: true,
		trigger: {
			player: 'dying',
		},
		filter(event, player) {
			return !player.storage.bleach_shilian_mark || player.countCards('h') < 4;
		},
		content() {
			player.drawTo(4);
			if (!player.storage.bleach_shilian_mark) {
				player.recover();
				player.storage.bleach_shilian_mark = true;
				player.when({ global: 'roundStart' }).then(() => delete player.storage.bleach_shilian_mark);
			}
		},
		ai: {
			save: true,
			skillTagFilter(player, tag, target) {
				if (player != target || player.storage.bleach_shilian_mark) return false;
			},
			threaten(player, target) {
				if (target.storage.bleach_shilian_mark) return 1.85;
				return 1;
			},
			effect: {
				target(card, player, target) {
					if (player.hasSkillTag('jueqing')) return;
					if (target.storage.bleach_shilian_mark) return;
					if (target.hasMark('bleachMark_shield') || target.hp > 1) return;
					if (player._shilian_tmp) return;
					if (_status.event.getParent('useCard', true) || _status.event.getParent('_wuxie', true)) return;
					if (get.tag(card, 'damage')) {
						if (get.attitude(player, target) < 0 && !player.hasSkillTag('damageBonus')) {
							if (card.name == 'sha') return;
							let sha = false;
							player._shilian_tmp = true;
							let num = player.countCards('h', (card) => {
								if (card.name == 'sha') {
									if (sha) {
										return false;
									} else {
										sha = true;
									}
								}
								return get.tag(card, 'damage') && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
							});
							delete player._shilian_tmp;
							if (player.hasSkillTag('damage')) {
								num++;
							}
							if (num == 1 && player.needsToDiscard()) return;
							return 0;
						}
					}
				},
			},
		},
	},
	bleach_leiting: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: ['useCardAfter', 'respondAfter'],
		},
		filter(event, player) {
			return get.type(event.card, 'trick') == 'basic';
		},
		check: () => true,
		forced: true,
		async content(event, trigger, player) {
			const judgeEvent = player.judge((card) => {
				if (card.suit == trigger.card.suit) return 2;
				return 0.5;
			});
			judgeEvent.judge2 = (result) => result.bool;
			const { judge, card } = await judgeEvent.forResult();
			if (judge == 2) player.draw(2);
			else player.addToExpansion(card, 'gain2').gaintag.add('bleach_leiting');
		},
		ai: {
			effect: {
				target(card, player, target) {
					if (get.tag(card, 'respond') && target.countCards('h') > 1) return [1, 0.75];
				},
			},
		},
		intro: {
			content: 'expansion',
			markcount: 'expansion',
		},
		onremove(player, skill) {
			var cards = player.getExpansions(skill);
			if (cards.length) player.loseToDiscardpile(cards);
		},
	},
	bleach_shenting: {
		audio: 'ext:BLEACH/skill:1:mp3',
		derivation: ['bleach_dianxing'],
		trigger: {
			player: ['phaseZhunbeiBegin'],
		},
		forced: true,
		vollstandigSkill: true,
		filter(event, player) {
			return player.getExpansions('bleach_leiting').length >= 3;
		},
		juexingji: true,
		async content(event, trigger, player) {
			player.awakenSkill('bleach_shenting');
			player.bleachAwaken('bleach_jiadisi', 1);
			await player.gainMaxHp();
			player.recover();
			player.addSkills('bleach_dianxing');
		},
	},
	bleach_dianxing: {
		enable: 'phaseUse',
		audio: 'ext:BLEACH/skill:4:mp3',
		logAudio: () => ['ext:BLEACH/skill:2:mp3'],
		filter(event, player) {
			return player.getExpansions('bleach_leiting').length;
		},
		usable: 1,
		chooseButton: {
			dialog(event, player) {
				return ui.create.dialog('电灭刑:选择造成伤害值', 'hidden');
			},
			chooseControl(event, player) {
				const list = [];
				for (var i = 0; i < player.getExpansions('bleach_leiting').length; i++) {
					list.push(get.cnNumber(i + 1, true));
				}
				list.push('cancel2');
				return list;
			},
			check(button, player) {
				let ret;
				game.countPlayer((current) => {
					if (get.damageEffect(current, player, player, 'thunder') > 0 && Math.min(3, current.hp) <= player.getExpansions('bleach_leiting').length) {
						ret = current.hp;
					}
				});
				if (!ret) return 'cancel2';
				return get.cnNumber(ret, true);
			},
			backup(result, player) {
				return {
					audio: 'bleach_dianxing',
					filterCard: () => false,
					selectCard: -1,
					filterTarget: lib.filter.notMe,
					num: result.index + 1,
					content() {
						'step 0';
						const num = lib.skill.bleach_dianxing_backup.num;
						player.loseToDiscardpile(player.getExpansions('bleach_leiting').randomGets(num));
						target.damage(num, 'thunder');
						('step 1');
						if (!target.isIn()) {
							player
								.chooseTarget('对其的邻家造成一点雷电伤害', (card, player, target) => {
									return get.event('targets').includes(target);
								})
								.set('targets', [target.next, target.previous]).ai = (target) => {
									const player = get.player();
									return get.damageEffect(target, player, player, 'thunder');
								};
						} else event.finish();
						('step 2');
						if (result.bool) {
							game.playBleach(['bleach_dianxing3', 'bleach_dianxing4']);
							player.line(result.targets, 'thunder');
							result.targets[0].damage('thunder');
						}
					},
					ai: {
						order: 10,
						result: {
							target(player, target) {
								return -Math.max(0, player.getExpansions('bleach_leiting').length - target.hp);
							},
						},
					},
				};
			},
			prompt(result, player) {
				return '电灭刑:选择造成伤害的目标';
			},
		},
		ai: {
			threaten: 2,
			order: 3.2,
			result: {
				player: 1,
			},
		},
		subSkill: {
			backup: {
				sourceSkill: 'bleach_dianxing',
			},
		},
	},
	//你可以将一张牌当你上轮至今未使用过的基本牌或普通锦囊牌使用(每回合每种类型各限一次)
	bleach_mengxiang: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'chooseToUse',
		filter(event, player) {
			if (!player.countCards('hes')) return false;
			let list = get
				.inpileVCardList((info) => {
					return info[0] == 'trick' || info[0] == 'basic';
				})
				.filter((info) => {
					const type = info[0],
						name = info[2],
						nature = info[3];
					if (player.getRoundHistory('useCard', (evt) => evt.card.name == name, 1, true).length) return false;
					if (player.getStorage('bleach_mengxiang_used').includes(type)) return false;
					const card = { name, nature };
					return event.filterCard(card, player, event);
				});
			return list.length;
		}, //QQQ
		hiddenCard(player, name) {
			if (!lib.inpile.includes(name)) return false;
			if (player.getRoundHistory('useCard', (evt) => evt.card.name == name, 1, true).length) return false;
			if (player.getStorage('bleach_mengxiang_used').includes(get.type(name))) return false;
			if (!player.countCards('hes')) return false;
			return get.type(name) == 'trick' || get.type(name) == 'basic';
		},
		chooseButton: {
			dialog(event, player) {
				let list = get.inpileVCardList((info) => {
					return info[0] == 'trick' || info[0] == 'basic';
				});
				list = list.filter((info) => {
					const type = info[0],
						name = info[2],
						nature = info[3];
					if (player.getRoundHistory('useCard', (evt) => evt.card.name == name, 1, true).length) return false;
					if (player.getStorage('bleach_mengxiang_used').includes(type)) return false;
					const card = { name, nature };
					return event.filterCard(card, player, event);
				});
				return ui.create.dialog('梦想', [list, 'vcard']);
			},
			check(button) {
				if (get.event().parent.type != 'phase') return 1;
				const player = get.player();
				return player.getUseValue({
					name: button.link[2],
					nature: button.link[3],
				});
			},
			backup(links, player) {
				return {
					audio: 'bleach_mengxiang',
					filterCard: true,
					position: 'hes',
					check(card) {
						return 8 - get.value(card);
					},
					popname: true,
					viewAs: {
						name: links[0][2],
						nature: links[0][3],
					},
					precontent() {
						player.popup('梦想');
						game.log(player, '发动了', '#g【梦想】');
						if (!player.storage.bleach_mengxiang_used) {
							player.when('phaseAfter').then(() => delete player.storage.bleach_mengxiang_used);
						}
						player.markAuto('bleach_mengxiang_used', get.type(event.result.card));
					},
				};
			},
			prompt(links, player) {
				return '将一张牌当' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
			},
		},
		ai: {
			order: 6,
			result: {
				player: 1,
			},
			threaten: 1.75,
		},
	},
	bleach_funeng: {
		audio: 'ext:BLEACH/skill:6:mp3',
		logAudio: () => ['ext:BLEACH/skill:2:mp3'],
		trigger: {
			player: 'damageBegin3',
		},
		filter(event, player) {
			return (
				game
					.getGlobalHistory(
						'everything',
						(evt) => {
							return evt.name == 'damage' && evt.player == player;
						},
						event
					)
					.indexOf(event) == 0 && player.countCards('h') > player.hp
			);
		},
		forced: true,
		group: ['bleach_funeng_meteorite', 'bleach_funeng_space', 'bleach_funeng_ai'],
		content() {
			trigger.num--;
		},
		lastDo: true,
		mod: {
			maxHandcardBase: (player, num) => 3,
		},
		subSkill: {
			ai: {
				trigger: {
					target: 'useCardToTargeted',
				},
				filter(event, player) {
					return !player.getHistory('useSkill', (evt) => evt.skill == 'bleach_funeng').length;
				},
				content() {
					player
						.when('useCardAfter')
						.assign({
							ai: {
								effect: {
									target(card, player, target, current) {
										if (player.hasSkillTag('damageBonus')) return;
										if (player.hasSkillTag('jueqing', false, target, true) || target.hasBleachBuff('bleachMark_weak')) return;
										if (get.tag(card, 'damage') && target.countCards('h') > target.hp) return 'zerotarget';
									},
								},
							},
						})
						.then(() => { });
				},
				silent: true,
			},
			meteorite: {
				audio: 'bleach_funeng',
				logAudio: () => ['ext:BLEACH/skill/bleach_funeng3.mp3', 'ext:BLEACH/skill/bleach_funeng4.mp3'],
				enable: 'phaseUse',
				prompt: '出牌阶段限一次,你可以对一名其他角色与相邻的角色各造成1点伤害.',
				filterTarget: lib.filter.notMe,
				onChooseToUse(event) {
					if (!game.online && !event.bleach_funeng) {
						const suits = [];
						game.getGlobalHistory('cardMove', (evt) => {
							if (suits.length >= 4) return;
							if (evt.name == 'lose') {
								if (evt.position == ui.discardPile) {
									for (var i of evt.cards) suits.add(i.suit);
								}
							} else {
								if (evt.name == 'cardsDiscard') {
									for (var i of evt.cards) suits.add(i.suit);
								}
							}
						});
						if (suits.length >= 4) event.set('bleach_funeng', true);
					}
				},
				filter(event, player) {
					return event.bleach_funeng;
				},
				usable: 1,
				name: '陨石',
				content() {
					const players = [target, target.next, target.previous].toUniqued();
					if (players.length) {
						player.line(players, 'fire');
						players.forEach((i) => {
							i.damage('nocard');
							i.storage.bleach_mengxiang_true = true;
						});
					}
				},
				ai: {
					order: 13,
					result: {
						target(player, target) {
							const att = get.attitude(player, target);
							return (
								get.sgn(att) *
								game
									.filterPlayer((current) => {
										return current == target.next || current == target.previous;
									})
									.reduce((num, current) => num + get.damageEffect(current, player, player, 'fire'), 0)
							);
						},
					},
				},
			},
			space: {
				audio: 'bleach_funeng',
				logAudio: () => ['ext:BLEACH/skill/bleach_funeng5.mp3', 'ext:BLEACH/skill/bleach_funeng6.mp3'],
				trigger: {
					global: 'phaseEnd',
				},
				filter(event, player) {
					return game.hasGlobalHistory('cardMove', (evt) => evt.washCard);
				},
				name: '空间',
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget('宇宙空间:令一名成为过【陨石】目标的角色猜测牌堆顶第一张牌的花色,若猜错则失去1点体力并重复此流程', (card, player, target) => {
							return target.storage.bleach_mengxiang_true;
						})
						.set('ai', (target) => {
							const player = get.player();
							return -get.attitude(player, target) / (1 + target.hp);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					player.removeMark('bleach_mengxiang', 6);
					player.chat(['既然有形的东西杀不死你 那就用无形的东西击杀你', '让这宇宙空间把你压碎吧!'].randomGet());
					while (true) {
						const result = await target
							.chooseControl('heart2', 'diamond2', 'club2', 'spade2')
							.set('ai', () => {
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
							})
							.forResult();
						const choice = result.control;
						game.log(target, '选择了' + get.translation(choice));
						target.chat('我选' + get.translation(choice));
						const cards = game.cardsGotoOrdering(get.cards(1)).cards;
						target.showCards(cards, get.translation(target) + '正在被【宇宙空间】撕裂');
						if (cards[0].suit + '2' == choice || !target.isIn()) return;
						await target.loseHp();
					}
				},
			},
		},
	},
	bleach_tiaohe: {
		audio: 'ext:BLEACH/skill:4:mp3',
		enable: 'phaseUse',
		prompt() {
			const player = get.player();
			const list1 = [],
				list2 = [],
				list3 = [],
				players = game.filterPlayer();
			for (let current of players) {
				if (player.getStat('bleach_tiaohe')?.includes(current)) continue;
				if (current.countMark('lucky') > player.countMark('lucky')) {
					if ((current.countCards('he') && current.hasMark('lucky')) || current.hasMark('unlucky')) list1.add(current);
				} else if (current.countMark('lucky') < player.countMark('lucky')) {
					if ((current.countCards('he') && current.hasMark('unlucky')) || current.hasMark('lucky')) list2.add(current);
				} else if ((current.countCards('he') && current.hasMark('lucky')) || current.hasMark('unlucky')) list3.add(current);
			}
			let str = list1.length + list2.length + list3.length ? '你可以为一名角色选择一项:' : '暂无符合条件角色';
			if (list1.length) str += '<li>' + get.translation(list1) + '<br>1.其随机弃置一张牌并移去1枚「幸运」.<br>2.摸一张牌并移去1枚「不幸」.';
			if (list2.length) str += '<li>' + get.translation(list2) + '<br>1.你弃置其一张牌并移去1枚「不幸」.<br>2.其摸两张牌并移去1枚「幸运」.';
			if (list3.length) str += '<li>' + get.translation(list3) + '<br>1.其须弃置一张牌并移去1枚「幸运」.<br>2.其摸两张牌并移去1枚「不幸」.';
			return str;
		},
		filterTarget(card, player, target) {
			if (player.getStat('bleach_tiaohe') && player.getStat('bleach_tiaohe').includes(target)) return false;
			if (target.countMark('lucky') > player.countMark('lucky')) {
				if (target.hasMark('unlucky')) return true;
				return target.countCards('he') && target.hasMark('lucky');
			}
			if (target.countMark('lucky') < player.countMark('lucky')) {
				if (target.countCards('he') && target.hasMark('unlucky')) return true;
				return target.hasMark('lucky');
			}
			return (target.hasMark('lucky') && target.countCards('he')) || target.hasMark('unlucky');
		},
		async content(event, trigger, player) {
			const target = event.target,
				bool = target.hasMark('unlucky') && target.countCards('he') && target.hasMark('lucky');
			const stat = player.getStat();
			if (!stat.bleach_tiaohe) stat.bleach_tiaohe = [];
			stat.bleach_tiaohe.push(target);
			let prompt1, prompt2, result, num;
			if (target.countMark('lucky') > player.countMark('lucky')) {
				num = 1;
				prompt1 = '令' + get.translation(target) + '随机弃置一张牌并移去1枚「幸运」标记.';
				prompt2 = '其摸一张牌并移去1枚「不幸」标记';
				if (!bool) result = target.countCards('he') && target.hasMark('lucky') ? { index: 0 } : { index: 1 };
			} else if (target.countMark('lucky') < player.countMark('lucky')) {
				num = 2;
				prompt1 = '你弃置' + get.translation(target) + '一张牌并移去其1枚「不幸」标记';
				prompt2 = '其摸两张牌并移去1枚「幸运」标记';
				if (!bool) result = target.countCards('he') && target.hasMark('unlucky') ? { index: 0 } : { index: 1 };
			} else {
				num = 3;
				prompt1 = get.translation(target) + '移去1枚「幸运」标记并弃置一张牌';
				prompt2 = '其移去1枚「不幸」标记并摸两张牌';
				if (!bool) result = target.countCards('he') && target.hasMark('lucky') ? { index: 0 } : { index: 1 };
			}
			if (bool) {
				result = await player
					.chooseControlList([prompt1, prompt2], true)
					.set('ai', () => {
						if (get.attitude(player, target) > 0) return 1;
						return 0;
					})
					.forResult();
			}
			if (result.index == 0) {
				switch (num) {
					case 1:
						target.discard(target.getCards('he').randomGet());
						target.removeMark('lucky');
						break;
					case 2:
						player.discardPlayerCard(target, 'he', true).ai = get.buttonValue;
						target.removeMark('unlucky');
						break;
					case 3:
						target.chooseToDiscard('he', true);
						target.removeMark('lucky');
				}
			} else {
				switch (num) {
					case 1:
						target.draw();
						target.removeMark('unlucky');
						break;
					case 2:
						target.draw(2);
						target.removeMark('lucky');
						break;
					case 3:
						target.draw(2);
						target.removeMark('unlucky');
				}
			}
		},
		ai: {
			order: 6.5,
			threaten: 1.45,
			expose: 0.25,
			result: {
				target(player, target) {
					if (target.countMark('lucky') < player.countMark('lucky')) {
						if (target.hasMark('unlucky') && target.countCards('he')) return -1;
						if (target.hasMark('lucky')) return 1;
					} else {
						if (target.hasMark('lucky') && target.countCards('he')) return -1;
						if (target.hasMark('unlucky')) return 1;
					}
					return 0;
				},
			},
		},
		init() {
			game.addGlobalSkill('g_bleach_tiaohe');
		},
		onremove() {
			if (!game.hasPlayer((i) => i.hasSkill('bleach_tiaohe'), true)) game.removeGlobalSkill('g_bleach_tiaohe');
		},
		group: 'bleach_tiaohe_clear',
		subSkill: {
			clear: {
				trigger: {
					player: 'dieBegin',
				},
				forced: true,
				content() {
					if (!game.hasPlayer((i) => i.hasSkill('bleach_tiaohe'), true)) {
						game.removeGlobalSkill('g_bleach_tiaohe');
						game.filterPlayer().forEach((i) => {
							i.unmarkSkill('lucky');
							i.unmarkSkill('unlucky');
						});
					}
				},
			},
		},
	},
	g_bleach_tiaohe: {
		trigger: {
			player: 'damageEnd',
			source: 'damageSource',
		},
		silent: true,
		charlotte: true,
		_priority: null,
		content() {
			player.addMark(event.triggername == 'damageEnd' ? 'unlucky' : 'lucky', 1);
		},
	},
	bleach_zuidun: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		usable: 1,
		chooseButton: {
			dialog(event, player) {
				var dialog = ui.create.dialog('替罪之盾:请选择一项', 'hidden');
				dialog.add([
					[
						['rec', '弃置一张防具牌将体力回复至上限并获得等量不幸标记'],
						['dmg', '弃置四张不同花色的牌并移去所有「不幸」对一名角色造成等量伤害'],
					],

					'textbutton',
				]);
				return dialog;
			},
			filter(button, player) {
				if (button.link == 'rec') {
					return player.countCards('he', { subtype: 'equip2' }) > 0 && player.isDamaged();
				}
				return player.countCards('he') > 0 && player.hasMark('unlucky');
			},
			check(button) {
				const player = get.player();
				if (button.link == 'rec' && player.isDamaged()) return 4;
				if (button.link == 'dmg' && player.countMark('unlucky') > 2) return 4;
				return 0;
			},
			backup(links) {
				return get.copy(lib.skill['bleach_zuidun_' + links[0]]);
			},
			prompt(links) {
				if (links[0] == 'rec') return '弃置一张防具牌将体力回复至上限并获得等量不幸标记';
				return '弃置四张不同花色的牌并移去所有「不幸」对一名角色造成等量伤害';
			},
		},
		ai: {
			order: 10,
			threaten: 2,
			result: {
				player: 1,
			},
		},
		subSkill: {
			backup: {
				sourceSkill: 'bleach_zuidun',
			},
			rec: {
				audio: 'bleach_zuidun',
				logAudio: () => ['ext:BLEACH/skill/bleach_zuidun1.mp3'],
				filterCard: {
					subtype: 'equip2',
				},
				position: 'he',
				check(card) {
					return 15 - get.value(card);
				},
				content() {
					let num = player.getDamagedHp();
					player.recoverTo(player.maxHp);
					player.addMark('unlucky', num);
				},
				ai: {
					result: {
						player: 1,
					},
				},
				sourceSkill: 'bleach_zuidun',
			},
			dmg: {
				audio: 'bleach_zuidun',
				logAudio: () => ['ext:BLEACH/skill/bleach_zuidun2.mp3'],
				filterTarget: lib.filter.notMe,
				position: 'he',
				filterCard(card) {
					const suit = card.suit;
					if (Array.isArray(ui.selected.cards))
						for (var i of ui.selected.cards) {
							if (i.suit == suit) return false;
						}
					return true;
				},
				complexCard: true,
				selectCard: 4,
				check(card) {
					return 8 - get.value(card);
				},
				content() {
					target.damage(player.countMark('unlucky'));
					player.clearMark('unlucky');
				},
				ai: {
					order: 9,
					result: {
						target: -2,
					},
				},
				sourceSkill: 'bleach_zuidun',
			},
		},
	},
	bleach_dunfan: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'useCardToTargeted',
		},
		filter(event, player) {
			return get.tag(event.card, 'damage') && event.targets.some((target) => get.distance(player, target) <= 1);
		},
		check(event, player) {
			return get.attitude(player, event.target) > 1;
		},
		logTarget: 'target',
		async content(event, trigger, player) {
			const result = await player
				.chooseControl(lib.suit.slice(0))
				.set('prompt', '猜测一种花色来弹反' + get.translation(trigger.card))
				.set('ai', () => {
					switch (Math.floor(Math.random() * 6)) {
						case 0:
							return 'heart';
						case 1:
						case 4:
						case 5:
							return 'diamond';
						case 2:
							return 'club';
						case 3:
							return 'spade';
					}
				})
				.forResult();
			const choice = result.control;
			game.log(player, '声明了' + get.translation(choice));
			player.chat('我选' + get.translation(choice));
			const judgeEvent = player.judge((card) => {
				return card.suit == choice ? 2 : -2;
			});
			judgeEvent.judge2 = (result) => result.bool;
			const { judge, card } = await judgeEvent.forResult();
			if (judge < 2) {
				if (trigger.target == player) player.gain(card, 'gain2');
				else {
					const result2 = await player
						.chooseCard('获得' + get.translation(card) + '并交给' + get.translation(trigger.target) + '一张牌,或点<取消>令其获得该牌', 'he')
						.set('ai', (cardx) => {
							if (get.value(cardx) < get.value(card)) return 1;
							return 0;
						})
						.forResult();
					if (result2.bool) {
						player.gain(card, 'gain2');
						player.give(result2.cards, trigger.target);
					} else {
						trigger.target.gain(card, 'gain2');
					}
				}
				player.tempBanSkill('bleach_dunfan');
			} else {
				player.tempBanSkill('bleach_dunfan', 'useCardAfter', false);
				player.line(trigger.player, 'fire');
				player.popup('弹反', 'metal');
				trigger.parent.player = player;
				game.log(player, '成为了', trigger.card, '的使用者,', trigger.player, '成为了目标');
				trigger.targets.length = 0;
				trigger.parent.triggeredTargets1.length = 0;
				trigger.parent.targets.push(trigger.player);
			}
		},
		ai: {
			threaten: 1.1,
		},
	},
	bleach_xinyang: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCard2',
		},
		filter(event, player) {
			return (
				game.hasPlayer(function (current) {
					return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, event.player, current) && current.group != player.group;
				}) &&
				(event.card.name == 'sha' || get.type(event.card) == 'trick')
			);
		},
		usable: 1,
		async cost(event, trigger, player) {
			const prompt = '为' + get.translation(trigger.card) + '增加一个目标';
			event.result = await player
				.chooseTarget(get.prompt('bleach_xinyang'), (card, player, target) => {
					if (get.event('targets').includes(target) || target.group == player.group) return false;
					return lib.filter.targetEnabled2(get.event('card'), player, target) && lib.filter.targetInRange(get.event('card'), player, target);
				})
				.set('prompt2', prompt)
				.set('ai', (target) => {
					const trigger = _status.event.getTrigger();
					const player = get.player();
					return get.effect(target, trigger.card, player, player) * (get.event('targets').includes(target) ? -1 : 1);
				})
				.set('targets', trigger.targets)
				.set('card', trigger.card)
				.forResult();
		},
		async content(event, trigger, player) {
			trigger.targets.addArray(event.targets);
		},
	},
	bleach_congshu: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		usable: 1,
		filter(event, player) {
			return player.countCards('h') > 0;
		},
		filterTarget(card, player, target) {
			return player.canCompare(target);
		},
		async content(event, map) {
			var player = map.player;
			var target = map.target;
			var result = await player.chooseToCompare(target);
			if (result.bool) {
				var cards = [result.player, result.target].filterInD('d');
				cards = cards.filter((card) => player.hasUseTarget(card));
				if (cards.length) {
					var result2 = await player.chooseButton(['是否使用其中一张牌？', cards]).set('ai', (button) => _status.event.player.getUseValue(button.link));
					if (result2.bool) {
						var card = result2.links[0];
						player.$gain2(card, false);
						player.chooseUseTarget(true, card, false, 'nodistance');
					}
				}
			}
			var result3 = await player
				.chooseControl('bleach_shunhong', 'bleach_fengwen')
				.set('prompt', '获得其中一个技能直到回合结束')
				.set('ai', () => 'bleach_shunhong');
			player.addTempSkill(result3.control);
			game.log(player, '获得', result3.control, '直到回合结束');
		},
		ai: {
			threaten: 1.1,
			order: () => get.order({ name: 'sha' }) + 1,
			result: {
				target: -1,
			},
		},
	},
	bleach_luchou: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'phaseUseBegin',
		},
		filter(event, player) {
			return player.hasCard((card) => {
				return _status.connectMode || get.tag(card, 'damage');
			});
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseCard(get.prompt('bleach_luchou'), '展示任意张伤害牌并摸等量张牌,若你本回合造成伤害值小于以此法摸牌数,你受到1点雷电伤害.', [1, Infinity], (card, player) => {
					return get.tag(card, 'damage');
				})
				.set('ai', (card) => {
					let num1 =
						player.hp +
						player.countCards('h', {
							name: ['tao', 'jiu'],
						}),
						num2 = player.countCards('h', (card) => get.tag(card, 'damage'));
					return (num1 > 0 && num2 == 2) || num2 >= 3;
				})
				.forResult();
		},
		async content(event, trigger, player) {
			const num = event.cards.length;
			player.showCards(event.cards);
			await player.draw(num);
			player
				.when({ player: 'phaseUseEnd' })
				.assign({
					lastDo: true,
				})
				.then(() => {
					if ((player.getStat('damage') || 0) < num) player.damage('thunder');
				})
				.vars({ num: num });
		},
		ai: {
			threaten: 1.5,
		},
	},
	bleach_yuanque: {
		audio: 'ext:BLEACH/skill:2:mp3',
		forced: true,
		trigger: {
			player: 'damageEnd',
			source: 'damageSource',
		},
		filter(event, player) {
			const stat = player.getHistory('damage', (evt) => evt != event).length + player.getHistory('sourceDamage', (evt) => evt != event).length;
			return stat == 0;
		},
		async content(event, trigger, player) {
			const num = player.getSkills(null, false, false).filter((skill) => {
				const info = get.info(skill);
				if (!info || info.charlotte) return false;
				return player.hasAllHistory('useSkill', (evt) => evt.skill == skill);
			}).length;
			await player.draw(num);
			if (player.isDamaged()) await player.chooseToDiscard('h', player.getDamagedHp(), true);
		},
		ai: {
			canUseCero: true,
		},
	},
	bleach_kuangjia: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			player: 'phaseJieshuBegin',
		},
		limited: true,
		check(event, player) {
			return Math.min(player.getStat('damage') || 0) >= player.getDamagedHp() + 1;
		},
		prompt2(event, player) {
			return '你可以加1点体力上限' + (player.getStat('damage') ? `并回复${player.getStat('damage')}点体力` : ``) + ',获得【狂伽】.';
		},
		content() {
			'step 0';
			player.awakenSkill('bleach_kuangjia');
			player.chat('清虫百式 狂伽蟋蟀!');
			player.bleachAwaken('bleach_re_dongxian', 1, 'EnemyUnseen');
			('step 1');
			player.gainMaxHp();
			if (player.getStat('damage')) player.recover(player.getStat('damage'));
			('step 2');
			player.addSkills('bleach_baishi');
		},
		derivation: 'bleach_baishi',
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_baishi: {
		audio: 'ext:BLEACH/skill:4:mp3',
		logAudio: () => ['ext:BLEACH/skill:3:mp3'],
		trigger: {
			player: 'phaseUseEnd',
		},
		async cost(event, trigger, player) {
			const skills = player.getSkills(null, false, false).filter((skill) => {
				const info = get.info(skill);
				if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) return false;
				return true;
			});
			const { control } = await player
				.chooseControl(skills, 'cancel2')
				.set(
					'choiceList',
					skills.map((i) => {
						return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
					})
				)
				.set('displayIndex', false)
				.set('prompt', '清虫百式:失去一个技能,或点<取消>失去1点体力以视为使用一张无距离限制的破防【杀】')
				.set('ai', () => {
					const player = get.player(),
						choices = get.event('controls').slice();
					const negs = choices.filter((i) => {
						const info = lib.skill[i]; //QQQ
						if (!info || !info.ai) return false;
						return info.ai.neg || info.ai.halfneg;
					});
					if (negs.length) return negs.randomGet();
					if (get.effect(player, { name: 'losehp' }, player, player) >= 0) return 'cancel2';
					if (player.hp > 2) return 'cancel2';
					if (player.hasSkill('bleach_baishi', null, false, false)) return 'bleach_baishi';
					return Math.random() < 0.75 ? 'cancel2' : choices.randomGet();
				})
				.forResult();
			event.result = { bool: true, cost_data: control, skill_popup: false };
		},
		async content(event, trigger, player) {
			const control = event.cost_data;
			if (control != 'cancel2') {
				player.popup(control);
				player.removeSkills(control);
			} else {
				player.loseHp();
			}
			player.chooseUseTarget('视为使用一张没有距离限制的破防【杀】', { name: 'sha', storage: { baishi: true } }, false, true, 'nodistance').set('oncard', () => {
				if (control == 'bleach_baishi') {
					player.$fullscreenpop('九相轮杀', 'thunder');
					game.playBleach('bleach_baishi4');
				}
			});
		},
		ai: {
			threaten: 1.2,
			unequip: true,
			unequip: true,
			bleachGuardBreak: true,
			skillTagFilter(player, tag, arg) {
				if (!arg || !arg.card || !arg.card.storage || !arg.card.storage.baishi) return false;
			},
		},
	},
	bleach_jianliu: {
		audio: 'ext:BLEACH/skill:10:mp3',
		derivation: ['bleach_jianliu1'],
		trigger: {
			global: 'phaseBefore',
			player: 'enterGame',
		},
		forced: true,
		filter(event, player) {
			return (event.name != 'phase' || game.phaseNumber == 0) && player.hasEquipableSlot(1) && !player.getEquips('zanpakuto_minazuki').length;
		},
		content() {
			let card = game.createCard2('zanpakuto_minazuki', 'diamond', 11);
			player.$gain2(card, false);
			player.equip(card);
		},
		mod: {
			canBeGained(card, source, player) {
				if (player.getEquips('zanpakuto_minazuki').includes(card)) return false;
			},
			canBeDiscarded(card, source, player) {
				if (player.getEquips('zanpakuto_minazuki').includes(card)) return false;
			},
			canBeReplaced(card, player) {
				if (player.getEquips('zanpakuto_minazuki').includes(card)) return false;
			},
			cardDiscardable(card, player) {
				if (player.getEquips('zanpakuto_minazuki').includes(card)) return false;
			},
			cardEnabled2(card, player) {
				if (player.getEquips('zanpakuto_minazuki').includes(card)) return false;
			},
		},
		init(player, skill) {
			player.storage[skill] = [];
			player.storage.bleach_jianliu_used = [];
		},
		group: ['bleach_jianliu_blocker', 'bleach_jianliu_attack', 'bleach_jianliu_draw', 'bleach_jianliu_die'],
		subSkill: {
			blocker: {
				audio: 'bleach_jianliu',
				trigger: {
					player: ['loseBefore', 'disableEquipBefore'],
				},
				forced: true,
				filter(event, player) {
					if (event.name == 'disableEquip') return event.slots.includes('equip1');
					var cards = player.getEquips('zanpakuto_minazuki');
					return event.cards && event.cards.some((card) => cards.includes(card));
				},
				content() {
					if (trigger.name == 'lose') {
						trigger.cards.removeArray(player.getEquips('zanpakuto_minazuki'));
					} else {
						while (trigger.slots.includes('equip1')) trigger.slots.remove('equip1');
					}
				},
			},
			draw: {
				audio: 'bleach_jianliu',
				trigger: {
					player: 'useCardToPlayered',
					target: 'useCardToTargeted',
				},
				forced: true,
				filter(event, player) {
					return (
						event.card.name == 'sha' &&
						player.getHistory('gain', (evt) => {
							return evt.getParent(2).name == 'bleach_jianliu_draw' && evt.cards.length == 1;
						}).length < 1
					);
				},
				content() {
					const list = [player];
					if (event.triggername == 'useCardToPlayered') list.addArray(trigger.targets);
					else list.push(trigger.player);
					game.asyncDraw(list);
				},
			},
			attack: {
				audio: 'bleach_jianliu',
				enable: 'chooseToUse',
				filter(event, player) {
					if (
						!player.hasCard((card) => {
							if (card.name == 'zanpakuto_minazuki' && get.position(card) == 'e') return false;
							return get.subtype(card) == 'equip1' || (player.storage.bleach_jiejin && card.suit == 'diamond');
						}, 'hes')
					)
						return false;
					for (const name of lib.inpile) {
						if (player.getStorage('bleach_jianliu_used').includes(name)) continue;
						const card = { name };
						if (!get.tag(card, 'damage')) continue;
						if (event.filterCard && event.filterCard(card, player, event)) return true;
						if (name == 'sha') {
							for (const nature of lib.inpile_nature) {
								if (player.getStorage('bleach_jianliu').includes(nature)) continue;
								card.nature = nature;
								if (event.filterCard && event.filterCard(card, player, event)) return true;
							}
						}
					}
					return false;
				},
				hiddenCard(player, name) {
					if (!lib.inpile.includes(name)) return false;
					if (player.getStorage('bleach_jianliu_used').includes(name)) return false;
					if (
						!player.hasCard((card) => {
							if (card.name == 'zanpakuto_minazuki' && get.position(card) == 'e') return false;
							return get.subtype(card) == 'equip1' || (player.storage.bleach_jiejin && card.suit == 'diamond');
						}, 'hes')
					)
						return false;
					return get.tag({ name }, 'damage');
				},
				chooseButton: {
					dialog(event, player) {
						let list = get.inpileVCardList((info) => {
							return get.tag({ name: info[2] }, 'damage');
						});
						list = list.filter((info) => {
							const name = info[2],
								nature = info[3];
							if (player.getStorage('bleach_jianliu_used').includes(name)) return false;
							if (nature && name == 'sha' && player.getStorage('bleach_jianliu').includes(nature)) return false;
							const card = { name, nature };
							return event.filterCard(card, player, event);
						});
						return ui.create.dialog('八千流', [list, 'vcard']);
					},
					check(button) {
						return get.player().getUseValue({
							name: button.link[2],
							nature: button.link[3],
						});
					},
					backup(links, player) {
						return {
							audio: 'bleach_jianliu',
							filterCard(card, player) {
								if (player.storage.bleach_jiejin && card.suit == 'diamond') return true;
								return get.subtype(card) == 'equip1';
							},
							position: 'hes',
							check(card) {
								return 8 - get.value(card);
							},
							popname: true,
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
							},
							precontent() {
								if (event.result.card.name == 'sha') {
									player.storage.bleach_jianliu.add(event.result.card.nature);
								} else player.storage.bleach_jianliu_used.add(event.result.card.name);
								if (!player.storage.bleach_jianliu_backup) {
									player.storage.bleach_jianliu_backup = true;
									player.when('useCardAfter').then(() => delete player.storage.bleach_jianliu_backup);
									player
										.when('useCardToTargeted')
										.filter((evt) => evt.parent.skill == 'bleach_jianliu_attack_backup')
										.then(() => {
											const targets = trigger.targets.slice().sortBySeat();
											if (targets && targets.some((i) => i.countDiscardableCards(player, 'hej'))) {
												player
													.chooseTarget('弃置一名目标角色区域内一张牌', true, (card, player, target) => {
														return get.event('targets').includes(target) && target.countDiscardableCards(player, 'hej') > 0;
													})
													.set('ai', (target) => {
														const player = get.player();
														let att = get.attitude(player, target);
														if (att < 0) {
															att = -Math.sqrt(-att);
														} else {
															att = Math.sqrt(att);
														}
														return att * lib.card.guohe.ai.result.target(player, target);
													})
													.set('targets', targets);
											}
										})
										.then(() => {
											if (result.targets?.length) {
												player.line(result.targets, 'green');
												player.discardPlayerCard(result.targets[0], true, 'hej');
											}
										});
								}
							},
						};
					},
					prompt(links, player) {
						return '将一张武器' + (player.storage.bleach_jiejin ? '或♦️️' : '') + '牌当' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用并弃置一名目标一张牌';
					},
				},
				ai: {
					order: 8.5,
					result: {
						player: 1,
					},
				},
			},
			die: {
				trigger: {
					player: 'die',
				},
				forceDie: true,
				filter(event, player) {
					return player.getEquips(1).length;
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt('bleach_jianliu'), '令一名其他角色获得' + get.translation(player.getEquips(1)), lib.filter.notMe)
						.set('forceDie', true)
						.set('ai', (target) => {
							const att = get.attitude(get.player(), target);
							if (get.event('neg')) return -att;
							return att + 10;
						})
						.set('neg', get.value(player.getEquips(1), player, 'raw') < 0)
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					const cards = player.getCards('e', { subtype: 'equip1' });
					if (cards.length) target.gain(cards, player, 'give', 'bySelf');
				},
			},
		},
	},
	bleach_jiejin: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'phaseBegin',
		},
		limited: true,
		filter() {
			return !game.hasPlayer((current) => current.isHealthy());
		},
		content() {
			'step 0';
			player.storage.bleach_jiejin = true;
			player.awakenSkill('bleach_jiejin');
			if (player.getDamagedHp() >= 2) player.chat('我是为了什么才修炼回道 你不可能不知道吧');
			player.bleachAwaken('bleach_maozhihuabaqianliu', 1, 'UnohanaBankai');
			setTimeout(() => {
				player.bleachAwaken('bleach_maozhihuabaqianliu', 2);
				player.chat(['儿戏到此为止!', '来吧!尽情释放吧!'].randomGet());
			}, 3000);
			('step 1');
			player.loseMaxHp();
			player.recover();
			player.storage.bleach_jianliu = [];
			player.storage.bleach_jianliu_used = [];
			('step 2');
			player.addTempSkill('bleach_jiejin_effect', 'die');
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
		subSkill: {
			effect: {
				trigger: {
					source: 'damageSource',
					global: 'dying',
				},
				async content(event, trigger, player) {
					if (trigger.name == 'damage') {
						trigger.player.instaKill(7, player, false);
					} else {
						await trigger.player.loseMaxHp();
						await trigger.player.recoverTo(2);
						const cards = trigger.player.getCards('he', (card) => trigger.player.canRecast(card));
						trigger.player.recast(cards);
					}
				},
				forced: true,
				forceDie: true,
				charlotte: true,
			},
		},
	},
	bleach_yehuo: {
		audio: 'ext:BLEACH/skill:2:mp3',
		mod: {
			targetInRange(card, player, target) {
				if (card.bleach_yehuo) return true;
			},
		},
		enable: ['chooseToUse', 'chooseToRespond'],
		filterCard: () => false,
		selectCard: -1,
		viewAs: {
			name: 'sha',
			nature: 'fire',
			bleach_yehuo: true,
		},
		viewAsFilter(player) {
			return game.hasPlayer((current) => !current.isLinked() && !player.getStorage('bleach_yehuo_chosen').includes(current));
		},
		prompt: '横置一名其他角色视为使用一张无视距离的火杀',
		ai: {
			order() {
				return get.order({ name: 'sha' }) + 0.5;
			},
			respondSha: true,
		},
		group: ['bleach_yehuo_link', 'bleach_yehuo_draw'],
		subSkill: {
			draw: {
				trigger: {
					player: 'damageBegin4',
				},
				forced: true,
				filter(event, player) {
					return !event.notLink() && event.hasNature('fire');
				},
				content() {
					trigger.cancel();
					player.draw(trigger.num);
				},
			},
			link: {
				trigger: {
					player: ['useCardBegin', 'respondBegin'],
				},
				logTarget: 'targets',
				filter(event, player) {
					return event.skill == 'bleach_yehuo';
				},
				forced: true,
				async content(event, trigger, player) {
					const { bool, targets } = await player
						.chooseTarget(
							`业火:横置一名本回合未以此法选择过的角色视为使用或打出之`,
							true,
							(card, player, target) => {
								return !target.isLinked() && !player.getStorage('bleach_yehuo_chosen').includes(target);
							},
							() => 1
						)
						.forResult();
					if (bool) {
						const target = targets[0];
						player.addTempSkill('bleach_yehuo_chosen');
						player.markAuto('bleach_yehuo_chosen', [target]);
						target.link(true);
						const viewAs = new lib.element.VCard({ name: 'sha', nature: 'fire' });
						trigger.card = viewAs;
					}
				},
			},
			chosen: {
				charlotte: true,
				intro: {
					content: '本回合已对$发动过技能',
				},
			},
		},
	},
	bleach_liaoyuan: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: ['respond', 'useCard'],
		},
		filter(event, player) {
			if (
				(() => {
					if (!event.respondTo) return false;
					if (event.player == player) return false;
					if (player != event.respondTo[0]) return false;
					return get.color(event.respondTo[1]) != 'black';
				})()
			) {
				return game.hasPlayer((current) => {
					return current != player && get.distance(event.player, current) <= 1;
				});
			}
		},
		async cost(event, trigger, player) {
			event.result = await player.chooseTarget('燎原:对一名其他角色施加1层烧伤');
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt('bleach_liaoyuan'), '对一名可选角色施加1层烧伤', (card, player, target) => {
					return get.event('targets').includes(target);
				})
				.set(
					'targets',
					game.filterPlayer((current) => current != player && get.distance(trigger.player, current) <= 1)
				)
				.set('ai', (target) => {
					return -get.bleachBuffEffect(target, 'bleachMark_fire');
				})
				.forResult();
		},
		async content(event, trigger, player) {
			event.targets[0].addBleachBuff('bleachMark_fire');
		},
		ai: {
			threaten: 1.2,
		},
	},
	bleach_luling: {
		audio: 'ext:BLEACH/skill:4:mp3',
		trigger: {
			player: 'damageEnd',
			global: 'damageSource',
		},
		filter(event, player, name) {
			if (!event.source || !event.source.isIn() || event.source == player) return false;
			if (event.source.hasSkill('bleach_off_forceSkill') && !event.source.countDiscardableCards(player, 'he')) return false;
			return (event.player == player && name == 'damageEnd') || (event.source == _status.currentPhase && event.source.getHistory('sourceDamage').indexOf(event) == 1);
		},
		async cost(event, trigger, player) {
			let list = [];
			const source = trigger.source;
			let choiceList = ['令' + get.translation(source) + '的所有锁定技失效', '弃置' + get.translation(source) + '一张牌'];
			for (var i = 0; i < 2; i++) {
				if ((i == 0 && source.hasSkill('bleach_off_forceSkill')) || (i == 1 && source.countDiscardableCards(player, 'he') == 0)) {
					choiceList[i] = '<span style="opacity:0.5;">' + choiceList[i] + '</span>';
				} else list.push('选项' + get.cnNumber(i + 1, true));
			}
			const { control } = await player
				.chooseControl(list, 'cancel2')
				.set('choiceList', choiceList)
				.set('prompt', '是否发动【录灵】选择一项:')
				.set('ai', () => {
					const controls = get.event('controls');
					if (get.attitude(get.player(), source) > 0) return 'cancel2';
					if (
						source.getStockSkills(true, true).filter((skill) => {
							const info = get.info(skill);
							return (info && info.juexingji) || !get.is.locked(skill, source);
						}).length
					)
						return 0;
					if (controls.length == 2) return 1;
					return 0;
				})
				.forResult();
			if (control != 'cancel2') event.result = { bool: true, cost_data: control };
		},
		async content(event, trigger, player) {
			const source = trigger.source;
			if (['选项一', '选项二'].indexOf(event.cost_data) == 0) source.addTempSkill('bleach_off_forceSkill', { player: 'phaseBegin' });
			else {
				player.line(source);
				player.discardPlayerCard(source, true, 'he');
			}
		},
		ai: {
			maixie_defend: true,
			effect: {
				target(card, player, target) {
					if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
						if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
						if (get.attitude(target, player) < 0) return [1, 0.55];
					}
				},
			},
		},
	},
	bleach_yaoxu: {
		audio: 'ext:BLEACH/skill:4:mp3',
		enable: 'phaseUse',
		usable: 1,
		filter(event, player) {
			return (
				player.countCards('h') > 0 &&
				game.hasPlayer((current) => {
					return current != player && current.countCards('h') > 0;
				})
			);
		},
		filterCard: true,
		filterTarget(card, player, target) {
			return target != player && target.countCards('h') > 0;
		},
		check(card) {
			return 7 - get.value(card);
		},
		discard: false,
		lose: false,
		delay: false,
		content() {
			'step 0';
			event.suit = cards[0].suit;
			target.chooseCard('h', true, '请选择一张牌与' + get.translation(player) + '交换');
			('step 1');
			player.swapHandcards(target, cards, result.cards);
			event.suit2 = result.cards[0].suit;
			if (event.suit == event.suit2) {
				if (player.isDamaged())
					player.chooseBool('点确定对' + get.translation(target) + '造成1点伤害,或点取消回复1点体力').ai = (event, player) => {
						if (get.recoverEffect(player, player, player) > 0) return 0;
						return 1;
					};
				else event._result = { bool: true };
			}
			('step 2');
			if (event.suit == event.suit2) {
				if (result.bool) {
					target.damage('nocard');
				} else player.recover();
			}
		},
		ai: {
			order: 1,
			result: {
				target: -1,
			},
		},
	},
	bleach_xiefei: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			player: 'recoverEnd',
		},
		derivation: ['bleach_ouxi', 'bleach_shoutai'],
		forced: true,
		filter: (event, player) => player.isHealthy(),
		juexingji: true,
		content() {
			'step 0';
			player.awakenSkill('bleach_xiefei');
			player.bleachAwaken('bleach_sazayelaporro', 1, 'EnemyUnseen');
			('step 1');
			player.addSkills(['bleach_ouxi', 'bleach_shoutai']);
		},
	},
	bleach_ouxi: {
		audio: 'ext:BLEACH/skill:4:mp3',
		enable: 'phaseUse',
		usable: 1,
		filter(event, player) {
			return player.countCards('h');
		},
		filterCard: true,
		filterTarget: lib.filter.notMe,
		check(card) {
			return 6 - get.value(card);
		},
		position: 'he',
		content() {
			'step 0';
			target.draw();
			('step 1');
			const num = target.getCards('he', (card) => card.suit == cards[0].suit).length;
			if (num > 0) target.damage(num, 'nocard');
		},
		ai: {
			order: 8.5,
			result: {
				target(player, target, card) {
					return -target.countCards('he');
				},
			},
			threaten: 1.5,
		},
	},
	bleach_shoutai: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'chooseToUse',
		mark: true,
		limited: true,
		onChooseToUse(event) {
			if (!game.online && !event.bleach_shoutai) {
				const player = event.player;
				if (
					game.hasPlayer((current) => {
						return player.getAllHistory('sourceDamage', (evt) => evt.player == current).length && current.countDiscardableCards(player, 'he') > 0 && current != player;
					})
				) {
					event.set('bleach_shoutai', true);
				}
			}
		},
		filter(event, player) {
			return event.type == 'dying' && player == event.dying && event.bleach_shoutai;
		},
		content() {
			'step 0';
			player.awakenSkill('bleach_shoutai');
			filterTarget = function (card, player, target) {
				return (
					player.getAllHistory('sourceDamage', (evt) => {
						return evt.player == target;
					}).length &&
					target.countDiscardableCards(player, 'he') > 0 &&
					target != player
				);
			};
			player.chooseTarget(filterTarget, true).ai = (target) => {
				return -get.attitude(_status.event.player, target);
			};
			('step 1');
			event.target = result.targets[0];
			event.types = [];
			('step 2');
			player.discardPlayerCard('he', event.target);
			('step 3');
			if (!event.types.includes(get.type2(result.cards[0]))) {
				event.types.push(get.type2(result.cards[0]));
				if (target.countDiscardableCards(player, 'he') > 0) event.goto(2);
			}
			('step 4');
			player.recoverTo(event.types.length);
		},
		ai: {
			order: 1,
			skillTagFilter(player, arg, target) {
				if (player != target) return false;
			},
			save: true,
			result: {
				player(player) {
					if (player.hp <= 0) return 10;
					return 0;
				},
			},
		},
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_zhouai: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filter(event, player) {
			return !player.hasSkill('bleach_zhouai_off');
		},
		chooseButton: {
			dialog(event, player) {
				const cards = [];
				for (var i of lib.inpile) {
					const type = get.type(i);
					if (type == 'trick' && get.tag({ name: i }, 'damage')) cards.push([type, '', i]);
				}
				return ui.create.dialog('咒爱', [cards, 'vcard']);
			},
			check(button) {
				return get.player().getUseValue({ name: button.link[2] }, null, true);
			},
			backup(links, player) {
				return {
					audio: 'bleach_zhouai',
					name: links[0][2],
					filterCard(card) {
						if (player.storage.bleach_sengjia) return false;
						return get.type2(card) != 'basic';
					},
					selectCard() {
						const player = get.player();
						if (!player.storage.bleach_sengjia) return 1;
						return 0;
					},
					position: 'he',
					check(card) {
						return 8 - get.value(card);
					},
					filterTarget(card, player, target) {
						return target != player && target.countCards('he');
					},
					content() {
						'step 0';
						var cards = target.getCards('he').randomGets(1);
						var name = lib.skill.bleach_zhouai_backup.name;
						player.storage.bleach_zhouai_eff = target;
						player.addTempSkill('bleach_zhouai_eff', 'phaseUseAfter');
						player.showCards(cards, get.translation(player) + '发动【咒爱】,声明' + get.translation(name));
						player.chooseUseTarget({ name: name }, cards, true, false, 'nodistance');
						('step 1');
						if (result.targets.some((targetx) => targetx == target) || !target.hasHistory('damage', (evt) => evt.getParent('bleach_zhouai_backup') == event)) player.addTempSkill('bleach_zhouai_off');
					},
					ai: {
						result: {
							player: 2,
							target: -1,
						},
					},
				};
			},
			prompt(links, player) {
				return (!player.storage.bleach_sengjia ? '弃置一张非基本牌,' : '') + '将其他角色随机一张牌当' + get.translation(links[0][2]) + '使用';
			},
		},
		ai: {
			order: 8.5,
			result: {
				player: 1,
			},
			threaten: 1.5,
		},
		subSkill: {
			backup: {},
			off: {
				charlotte: true,
			},
			eff: {
				charlotte: true,
				_priority: null,
				trigger: {
					player: 'useCardBefore',
				},
				forced: true,
				filter(event, player) {
					var source = player.storage.bleach_zhouai_eff;
					return get.itemtype(source) == 'player' && source.isIn();
				},
				content() {
					trigger.player = player.storage.bleach_zhouai_eff;
					trigger.noai = true;
					player.removeSkill('bleach_zhouai_eff');
				},
			},
		},
	},
	bleach_sengjia: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			player: 'useCardAfter',
		},
		filter(event, player) {
			const card = event.card,
				name = card.name;
			for (var i = player.actionHistory.length - 1; i >= 0; i--) {
				const history = player.actionHistory[i].useCard;
				for (let evt of history) {
					if (evt == event) return false;
					if (evt.card.name == name) return true;
				}
				if (player.actionHistory[i].isRound) break;
			}
			return false;
		},
		forced: true,
		juexingji: true,
		async content(event, trigger, player) {
			player.storage.bleach_sengjia = true;
			player.awakenSkill('bleach_sengjia');
			player.bleachAwaken('bleach_zommari', 1, 'RawBreathOfDanger');
			player.chooseDrawRecover(2, true);
		},
	},
	bleach_snxiangzhuan: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCard',
		},
		filter(event, player) {
			if (!event.targets.length) return false;
			if (player.hasSkill('bleach_snxiangzhuan_round')) return false;
			const hs = player.getCards('h');
			if (hs.length > 1) {
				const color = get.color(hs[0], player);
				for (var i = 1; i < hs.length; i++) {
					if (get.color(hs[i], player) != color) return false;
				}
			}
			const type = get.type(event.card);
			if (type != 'basic' && type != 'trick') return false;
			return true;
		},
		check(event, player) {
			return !get.tag(event.card, 'norepeat');
		},
		content() {
			trigger.effectCount++;
			player.addTempSkill('bleach_snxiangzhuan_round', 'roundStart');
			game.log(trigger.card, '额外结算一次');
		},
		mod: {
			targetInRange(card, player, target, now) {
				const hs = player.getCards('h');
				if (hs.length > 1) {
					const color = get.color(hs[0], player);
					for (var i = 1; i < hs.length; i++) {
						if (get.color(hs[i], player) != color) return;
					}
				}
				return true;
			},
		},
		subSkill: {
			round: {
				charlotte: true,
			},
		},
	},
	bleach_fuxi: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'useCardToTargeted',
		},
		filter(event, player) {
			if (!player.countCards('h') || event.player == player || event.target == player) return false;
			return event.card && event.card.name == 'sha' && event.targets.length == 1 && player.canUse('sha', event.target, true);
		},
		usable: 1,
		async cost(event, trigger, player) {
			event.result = await player
				.chooseCard(
					'hes',
					(card, player) => {
						if (!game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return false;
						return player.canUse({ name: 'sha' }, get.event('target'), true);
					},
					'是否将一张牌当做【杀】对' + get.translation(trigger.target) + '使用'
				)
				.set('target', trigger.target)
				.set('ai', (card) => {
					const player = get.player();
					return get.effect(get.event('target'), { name: 'sha' }, player, player) / Math.max(1, get.value(card));
				})
				.forResult();
		},
		popup: false,
		async content(event, trigger, player) {
			const cards = event.cards;
			const next = await player.useCard({ name: 'sha' }, cards, trigger.target);
			if (
				trigger.target.hasHistory('damage', (evt) => {
					return evt.card == next.card;
				})
			) {
				if (trigger.target.countDiscardableCards(player, 'he') > 0) player.discardPlayerCard(trigger.target, 'he', true);
			} else {
				trigger.parent.targets.push(player);
				trigger.player.line(player);
			}
		},
		ai: {
			threaten: 1.5,
		},
	},
	bleach_zhongxi: {
		audio: 'ext:BLEACH/skill:3:mp3',
		logAudio: () => ['ext:BLEACH/skill:1:mp3'],
		trigger: {
			player: 'phaseBegin',
		},
		limited: true,
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt2('bleach_zhongxi'), lib.filter.notMe)
				.set('ai', (target) => {
					const player = get.player();
					if (!player.hasFriend()) return -get.attitude(player, target) / target.countCards('h');
					return get.attitude(player, target) * get.threaten(target);
				})
				.forResult();
		},
		async content(event, trigger, player) {
			player.awakenSkill('bleach_zhongxi');
			player.storage.bleach_zhongxi_draw = event.targets[0];
			player.addSkill('bleach_zhongxi_draw');
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
		subSkill: {
			draw: {
				audio: 'bleach_zhongxi',
				logAudio(event, player) {
					return `ext:BLEACH/skill/bleach_zhongxi${get.rand(2, 3)}.mp3`;
				},
				charlotte: true,
				forced: true,
				trigger: {
					global: ['gainAfter', 'loseAsyncAfter'],
				},
				filter(event, player) {
					var target = player.storage.bleach_zhongxi_draw;
					if (!target || !target.isIn()) return false;
					var hasDraw = function (event, player) {
						return event.getg(player).length > 1;
					};
					return hasDraw(event, player) || hasDraw(event, target);
				},
				content() {
					var target = player.storage.bleach_zhongxi_draw;
					var drawer = [];
					var hasDraw = function (event, player) {
						return event.getg(player).length;
					};
					if (hasDraw(trigger, player)) drawer.push(target);
					if (hasDraw(trigger, target)) drawer.push(player);
					if (drawer.length == 1) drawer[0].draw();
					else {
						game.asyncDraw(drawer.sortBySeat());
					}
				},
				ai: {
					threaten: 1.3,
				},
				group: 'bleach_zhongxi_sha',
				intro: {
					content: '已追随$',
				},
				sourceSkill: 'bleach_zhongxi',
			},
			sha: {
				audio: 'bleach_zhongxi',
				logAudio(event, player) {
					return `ext:BLEACH/skill/bleach_zhongxi${get.rand(2, 3)}.mp3`;
				},
				charlotte: true,
				forced: true,
				forceDie: true,
				logTarget: (event, player) => event.source,
				trigger: {
					global: 'die',
				},
				filter(event, player) {
					var target = player.storage.bleach_zhongxi_draw;
					if (!event.source || !event.source.isIn()) return false;
					if (player != event.player && target != event.player) return false;
					return (player == event.player ? target : player).canUse('sha', event.source, false);
				},
				content() {
					(player == trigger.player ? player.storage.bleach_zhongxi_draw : player).useCard({ name: 'sha' }, trigger.source, false);
				},
				sourceSkill: 'bleach_zhongxi',
			},
		},
	},
	bleach_ligong: {
		audio: 'ext:BLEACH/skill:1:mp3',
		enable: 'phaseUse',
		filterCard: true,
		position: 'he',
		discard: false,
		delay: false,
		check(card) {
			if (card.suit == 'spade') return 9 - get.value(card);
			return 0;
		},
		loseTo: 'cardPile',
		insert: true,
		visible: true,
		limited: true,
		content() {
			'step 0';
			player.awakenSkill('bleach_ligong');
			game.playBleach('bleach_ligong2');
			_status.bleach_ligong = 0;
			event.count = player.countCards('e') + 1;
			('step 1');
			player.judge(function (card) {
				var suit = card.suit;
				if (suit == 'spade') return -2;
				if (suit == 'club') return -1;
				return 0;
			}).judge2 = function (result) {
				return result.bool == false ? true : false;
			};
			('step 2');
			if (result.color == 'black') {
				_status.bleach_ligong++;
				if (result.suit == 'spade')
					player.chooseTarget('黄煌严灵离宫', '对一名角色造成1点雷电伤害', true, lib.filter.notMe).ai = function (target) {
						return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
					};
			}
			('step 3');
			if (result.bool && result.targets) {
				game.playBleach(['bleach_ligong3', 'bleach_ligong4', 'bleach_ligong5g', 'bleach_ligong6'].randomGet());
				result.targets[0].damage(1, 'thunder');
			}
			event.count--;
			if (event.count > 0) event.goto(1);
		},
		contentAfter() {
			player.chooseUseTarget({ name: 'sha', nature: 'thunder' }, '是否使用一张雷【杀】？', false, 'nodistance').set('oncard', (card) => {
				game.playBleach(['bleach_ligong3', 'bleach_ligong4', 'bleach_ligong5g', 'bleach_ligong6'].randomGet());
				var evt = _status.event;
				evt.baseDamage = Math.max(1, _status.bleach_ligong);
				delete _status.bleach_ligong;
			});
		},
		ai: {
			order: 1,
			result: {
				player(player) {
					if (
						game.hasPlayer((current) => {
							return current.hp <= player.countCards('e') && get.attitude(player, current) < 0;
						})
					)
						return 1;
					return get.sgn(player.countCards('e') - 2);
				},
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_zhuoren: {
		audio: 'ext:BLEACH/skill:5:mp3',
		logAudio: () => ['ext:BLEACH/skill:3:mp3'],
		trigger: {
			player: 'useCardToPlayered',
		},
		filter(event, player) {
			return event.card && event.card.name == 'sha' && event.isFirstTarget;
		},
		forced: true,
		abnormal: true,
		content() {
			const players = game.filterPlayer((current) => {
				return trigger.targets.some((target) => get.distance(target, current, 'pure') <= 1);
			});
			if (players.length) {
				player.line(players, 'fire');
				players.forEach((i) => i.addBleachBuff('bleachMark_fire'));
			}
		},
		ai: {
			threaten: 1.75,
			zanjitsu_gokui: true,
		},
		group: ['bleach_zhuoren_eff', 'bleach_zhuoren_fire'],
		subSkill: {
			used: {
				charlotte: true,
			},
			eff: {
				trigger: {
					global: 'damageBegin1',
				},
				forced: true,
				firstDo: true,
				filter(event, player) {
					return event.player == player && player.hasMark('bleachMark_fire');
				},
				content() {
					const num = Math.min(trigger.num, player.countMark('bleachMark_fire'));
					game.log('#g【残日狱衣】', '抵挡了', num, '点伤害');
					trigger.num -= num;
					player.removeBleachBuff('bleachMark_fire', num);
				},
				sourceSkill: 'bleach_zhuoren',
			},
			fire: {
				audio: 'ext:BLEACH/skill:5:mp3',
				logAudio: () => ['ext:BLEACH/skill/bleach_zhuoren4.mp3', 'ext:BLEACH/skill/bleach_zhuoren5.mp3'],
				trigger: {
					player: 'gainAfter',
				},
				filter(event, player) {
					if (player.hasSkill('bleach_zhuoren_used')) return false;
					return event.parent.name == 'draw' && event.getParent('phaseDraw').player != player;
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt('bleach_zhuoren'), '是否将' + get.translation(trigger.cards) + '当【杀】使用', (card, player, target) => player.canUse({ name: 'sha' }, target))
						.set('ai', (target) => {
							if (get.value(trigger.cards) > 15) return 0;
							const player = get.player();
							return -get.attitude(player, target) / (1 + target.hp);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					player.addTempSkill('bleach_zhuoren_used', ['phaseZhunbeiAfter', 'phaseDrawAfter', 'phaseJudgeAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter']);
					await player.useCard({ name: 'sha', nature: 'fire' }, event.targets, trigger.cards, false);
				},
				sourceSkill: 'bleach_zhuoren',
			},
		},
	},
	bleach_jiehuo: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		limited: true,
		abnormal: true,
		filterTarget: true,
		selectTarget: -1,
		multiline: true,
		multitarget: true,
		content() {
			'step 0';
			player.awakenSkill('bleach_jiehuo');
			('step 1');
			targets.forEach((i) => i.addBleachBuff('bleachMark_fire', 2));
			player.addSkill('bleach_jiehuo_eff');
		},
		ai: {
			order: 13,
			result: {
				player: 1,
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
		subSkill: {
			eff: {
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha' && player.hasMark('bleachMark_fire');
				},
				prompt2: '是否移去1层烧伤令【杀】的伤害+1',
				content() {
					trigger.baseDamage++;
					player.removeBleachBuff('bleachMark_fire');
				},
			},
		},
	},
	bleach_lushi: {
		zhuSkill: true,
		global: 'bleach_lushi_sha',
		subSkill: {
			sha: {
				mod: {
					cardUsable(card, player, num) {
						if (player.group != 'bleach_shi') return;
						if (game.hasPlayer((current) => current.hasZhuSkill('bleach_lushi', player))) {
							if (card.name == 'sha') return num + 1;
						}
					},
				},
			},
		},
	},
	bleach_lingpao: {
		audio: 'ext:BLEACH/skill:4:mp3',
		onChooseToUse(event) {
			if (!game.online && !event.bleach_lingpao) {
				const list = [];
				game.getGlobalHistory('cardMove', (evt) => {
					if ((evt.name == 'lose' && evt.position == ui.discardPile) || evt.name == 'cardsDiscard') {
						list.addArray(evt.cards.filterInD('d'));
					}
				});
				event.set('bleach_lingpao', list);
			}
		},
		enable: 'phaseUse',
		filter(event, player) {
			return get
				.inpileVCardList((info) => {
					const name = info[2],
						type = info[0];
					if (type != 'basic' && type != 'trick') return false;
					if (player.getStorage('bleach_lingpao_used').includes(get.cardNameLength(info))) return false;
					return event.bleach_lingpao.some((card) => card.name == name);
				})
				.some((card) => player.hasCard((cardx) => event.filterCard({ name: card[2], nature: card[3], cards: [cardx] }, player, event), 'hes'));
		},
		filterCard(card, player) {
			const num = get.cardNameLength(card);
			const list = player.getStorage('bleach_lingpao_used');
			const cards = get.event('bleach_lingpao');
			return !list.includes(num) & (cards.length >= num) && get.type2(cards[num - 1]) != 'equip';
		},
		position: 'hes',
		check(card) {
			return 8 - get.value(card);
		},
		viewAs(cards, player) {
			if (cards.length) {
				let name = false,
					nature = null;
				const num = get.cardNameLength(cards[0]) - 1;
				const list = get.event('bleach_lingpao');
				if (list[num]) {
					name = list[num].name;
					if (list[num].nature) nature = list[num].nature;
				}
				if (name) return { name: name, nature: nature };
			}
			return null;
		},
		precontent() {
			player.markAuto('bleach_lingpao_used', [get.cardNameLength(event.result.cards[0])]);
			player.addTempSkill('bleach_lingpao_used');
		},
		ai: {
			order: 8.5,
		},
		subSkill: {
			used: {
				charlotte: true,
			},
		},
	},
	bleach_xingzhang: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'phaseBegin',
		},
		filter(event, player) {
			return (
				event.player.isShinigami() &&
				!event.player.isKamen() &&
				event.player.getStockSkills(true, true).some((skill) => {
					const info = get.info(skill);
					return info && !info.charlotte && (info.limited || info.juexingji);
				})
			);
		},
		check(event, player) {
			return get.attitude(player, event.player) <= -3;
		},
		logTarget: 'player',
		content() {
			'step 0';
			player.awakenSkill('bleach_xingzhang');
			player.chat('溶解吧,海化作云 云化作雨 雨化作雾');
			setTimeout(() => {
				player.chat('有形之物化作无形 吾等欢喜之终 酒杯倾倒于地');
			}, 2000);
			('step 1');
			const list = trigger.player.getStockSkills(true, true).filter((skill) => {
				const info = get.info(skill);
				return info && !info.charlotte && (info.limited || info.juexingji);
			});
			if (list.length == 1) event._result = { control: list[0] };
			else
				player
					.chooseControl(list)
					.set('prompt', '选择令' + get.translation(trigger.player) + '一个技能失效直到其失去【虚闪】')
					.set('forceDie', true)
					.set('ai', () => {
						const listx = list
							.map((skill) => [skill, get.skillRank(skill, 'inout')])
							.sort((a, b) => b[1] - a[1])
							.slice(0, 2);
						const listx2 = [0];
						if (Math.abs(listx[0][1] - listx[1][1]) <= 0.5 && Math.sign(listx[0][1]) == Math.sign(listx[1][1])) listx2.push(1);
						return listx[listx2.randomGet()][0];
					});
			('step 2');
			player.popup(result.control);
			game.log(trigger.player, '失去了', '#g【' + get.translation(result.control) + '】');
			trigger.player.disableSkill('bleach_xingzhang', result.control);
			trigger.player
				.when({ player: 'gainAfter' })
				.filter((evt) => evt.getg(evt.player).some((card) => card.name == 'bleach_card_cero'))
				.then(() => {
					player.enableSkill('bleach_xingzhang');
					player.chat('你总算回来了啊!');
					game.log(player, '回复了技能');
				});
		},
		mark: true,
		limited: true,
		intro: {
			content: 'limited',
		},
	},
	bleach_qixi: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'phaseBegin',
		},
		filter(event, player) {
			return event.player != player && !player.hasSkill('bleach_qixi_round');
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseToDiscard(get.prompt('bleach_qixi'), '是否弃置一张牌对其造成1点伤害', 'he')
				.set('goon', get.attitude(player, trigger.player) > 0)
				.set('ai', (card) => {
					if (get.event('goon')) return 0;
					switch (ui.selected.cards.length) {
						case 0:
							return 8 - get.value(card);
						case 1:
							return 5 - get.value(card);
						case 2:
							return 3 - get.value(card);
						default:
							return 0;
					}
				})
				.forResult();
		},
		async content(event, trigger, player) {
			player.addTempSkill('bleach_qixi_round', 'roundStart');
			trigger.player.damage();
		},
		ai: {
			expose: 0.35,
		},
		subSkill: {
			round: {
				charlotte: true,
			},
		},
	},
	bleach_huochu: {
		audio: 'ext:BLEACH/skill:2:mp3',
		derivation: ['bleach_miehuo'],
		trigger: {
			global: 'damageEnd',
		},
		filter(event, player) {
			return event.hasNature('fire');
		},
		forced: true,
		init: (player, skill) => (player.storage[skill] = 0),
		content() {
			'step 0';
			player.gainMaxHp();
			player.recover();
			player.storage.bleach_huochu++;
			('step 1');
			if (player.storage.bleach_huochu >= game.players.length + game.dead.length) {
				event._result = { bool: true };
			} else player.chooseBool('是否失去本技能获得【灭火】').ai = () => player.storage.bleach_huochu >= 2;
			('step 2');
			if (result.bool) {
				player.bleachAwaken('bleach_wonderweiss', 1);
				player.changeSkills(['bleach_miehuo'], ['bleach_huochu']);
			}
		},
	},
	bleach_miehuo: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'dying',
			global: 'damageBegin3',
		},
		filter(event, player) {
			return event.name == 'dying' || (event.hasNature('fire') && event.parent.name != 'bleach_miehuo');
		},
		forced: true,
		async content(event, trigger, player) {
			if (trigger.name == 'dying') {
				const { targets } = await player
					.chooseTarget('对你与任意名其他角色各造成1点火焰伤害.', [1, Infinity], true, lib.filter.notMe)
					.set('ai', (target) => {
						return get.damageEffect(target, get.player(), get.player(), 'fire');
					})
					.forResult();
				if (targets.length) {
					player.line(targets, 'fire');
					targets.push(player);
					targets.sortBySeat();
					targets.forEach((i) => i.damage('fire'));
				}
			} else {
				trigger.cancel();
			}
		},
		global: 'g_bleach_miehuo',
	},
	g_bleach_miehuo: {
		ai: {
			effect: {
				target(card) {
					if (game.hasPlayer((current) => current.hasSkill('bleach_miehuo')) && game.hasNature(card, 'fire')) return 'zeroplayertarget';
				},
			},
		},
	},
	bleach_zanghun: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'useCard',
		},
		filter(event, player) {
			const storage = event.player.getExpansions('bleach_jianni');
			if (!storage.length || event.player == player) return false;
			return event.player.getHistory('useCard', (evt) => evt.card.suit == storage[0].suit && event.card.suit == evt.card.suit).indexOf(event) == 0;
		},
		check(event, player) {
			return get.attitude(player, event.player) <= 0;
		},
		logTarget: 'player',
		async content(event, trigger, player) {
			const target = trigger.player;
			await target.damage();
			if (target.isIn()) {
				const suits = [];
				game.countPlayer((current) => {
					if (current.getExpansions('bleach_jianni').length) suits.add(get.suit(current.getExpansions('bleach_jianni')[0]));
				});
				const {
					result: { bool, cards },
				} = !player.hasCard((card) => !suits.includes(card.suit), 'he')
						? { result: { bool: false } }
						: await player
							.chooseCard('用一张牌替换其的「泥」', 'he', (card) => {
								return !get.event('suits').includes(card.suit);
							})
							.set('suits', suits)
							.set('ai', (card) => {
								return 7 - get.value(card);
							});
				const expansions = target.getExpansions('bleach_jianni');
				if (bool) {
					player.gain(expansions, 'gain2', 'log');
					target.addToExpansion(cards, 'giveAuto', player).gaintag.add('bleach_jianni');
				} else {
					target.loseToDiscardpile(expansions);
					target.draw(expansions.length);
				}
			}
		},
	},
	bleach_jianni: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: ['shaDamage', 'useCardToEnd'],
		},
		filter(event, player, name) {
			if (event.type != 'card' || !event.target || !event.target.isIn()) return false;
			if (!event.cards.filterInD().length || event.target.getExpansions('bleach_jianni').length) return false;
			if (name == 'shaDamage') return true;
			return event.card && event.card.name != 'sha' && !event.parent._neutralized;
		},
		logTarget: 'target',
		check: () => true,
		content() {
			trigger.target.addToExpansion(trigger.cards.filterInD(), 'gain2').gaintag.add('bleach_jianni');
		},
		marktext: '泥',
		intro: {
			content: 'expansion',
			markcount: 'expansion',
		},
		onremove(player, skill) {
			var cards = player.getExpansions(skill);
			if (cards.length) player.loseToDiscardpile(cards);
		},
		group: ['bleach_jianni_draw'],
		subSkill: {
			draw: {
				trigger: {
					global: ['loseAfter', 'loseAsyncAfter'],
				},
				filter(event, player) {
					if (event.type != 'discard' || event.getlx === false) return false;
					if (event.name == 'lose') return false;
					const storage = event.player.getExpansions('bleach_jianni');
					if (!storage.length) return false;
					const cards = event.cards.slice(0);
					const evt = event.getl(player);
					if (evt && evt.cards) cards.removeArray(evt.cards);
					if (Array.isArray(cards))
						for (var i of cards) {
							if (i.suit == storage[0].suit && i.original != 'j') {
								return true;
							}
						}
					return false;
				},
				forced: true,
				content() {
					player.draw();
				},
			},
		},
	},
	bleach_juanfeng: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'phaseJieshuBegin',
		},
		cards(bool) {
			const cards1 = [],
				cards2 = [];
			game.countPlayer2((current) => {
				current.getHistory('lose', (evt) => {
					if (evt.position == ui.discardPile) {
						if (Array.isArray(evt.cards))
							for (var i of evt.cards) {
								if (i.suit == 'club') cards1.push(i);
								else cards2.push(i);
							}
					}
				});
			});
			game.getGlobalHistory('cardMove', (evt) => {
				if (evt.name == 'cardsDiscard') {
					if (Array.isArray(evt.cards))
						for (var i of evt.cards) {
							if (i.suit == 'club') cards1.push(i);
							else cards2.push(i);
						}
				}
			});
			if (bool) return cards1;
			return cards2;
		},
		filter(event, player) {
			if (player.storage.bleach_juanfeng == 2) return false;
			return lib.skill.bleach_juanfeng.cards(true).length && game.hasPlayer((current) => player.canUse('sha', current));
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt2('bleach_juanfeng'), (card, player, target) => {
					return player.canUse('sha', target);
				})
				.set('ai', (target) => {
					const player = get.player();
					return get.effect(target, { name: 'sha' }, player, player);
				})
				.forResult();
		},
		async content(event, trigger, player) {
			player.storage.bleach_juanfeng++;
			await player.useCard({ name: 'sha' }, lib.skill.bleach_juanfeng.cards(true), event.targets, false);
			if (lib.skill.bleach_juanfeng.cards(false).length) {
				const cards = lib.skill.bleach_juanfeng.cards(false).filter((i) => get.position(i, true) == 'd');
				const next = player.chooseToMove();
				next.set('list', [['牌堆顶'], ['牌堆底', cards]]);
				next.set('prompt', '卷枫:将一张牌置于牌堆顶,剩余牌置于牌堆底');
				next.set('filterOk', (moved) => moved[0].length <= 1);
				next.set('filterMove', (from, to, moved) => {
					if (moved[1].includes(from.link)) {
						if (typeof to == 'number') {
							if (to == 0) {
								return moved[0].length == 0;
							}
							return true;
						}
						if (moved[0].includes(to.link)) return true;
						return true;
					} else {
						if (typeof to == 'number') return true;
						return true;
					}
				});
				next.processAI = (list) => {
					const cards = list[1][1].slice(0);
					return [cards, cards.splice(1)];
				};
				const { moved } = await next.forResult();
				const top = moved[0];
				const bottom = moved[1];
				top.reverse();
				game.cardsGotoPile(top.concat(bottom), ['top_cards', top], (event, card) => {
					if (event.top_cards.includes(card)) return ui.cardPile.firstChild;
					return null;
				});
				player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
				game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
			}
		},
		init: (player) => (player.storage.bleach_juanfeng = 0),
		ai: {
			threaten: 1.3,
		},
		group: 'bleach_juanfeng_reset',
		subSkill: {
			reset: {
				trigger: {
					global: 'roundStart',
				},
				silent: true,
				content() {
					lib.skill.bleach_juanfeng.init(player);
				},
				forced: true,
				popup: false,
			},
		},
	},
	bleach_sanyi: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'die',
		},
		forceDie: true,
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt2('bleach_sanyi'), lib.filter.notMe)
				.set('forceDie', true)
				.set('ai', (target) => {
					return get.attitude(get.player(), target);
				})
				.forResult();
		},
		async content(event, trigger, player) {
			const target = event.targets[0];
			game.switchBleachBgm('Senna');
			player.line(target, 'green');
			target.draw();
			target.draw('bottom');
			const cards = [];
			for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
				const card = ui.discardPile.childNodes[i];
				if (get.color(card) == 'red') cards.push(card);
			}
			if (cards.length) {
				const result = await player
					.chooseButton(['令其获得一张红色牌', cards], true)
					.set('ai', (button) => get.player().getUseValue(button.link))
					.set('forceDie', true)
					.forResult();
				if (result.bool) target.gain(result.links, 'gain2');
			}
		},
		ai: {
			expose: 0.5,
		},
	},
	bleach_xiuwu: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			target: 'useCardToTargeted',
		},
		filter(event, player) {
			return player != event.player && event.card.name == 'sha';
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseCard(get.prompt2('bleach_xiuwu'), 'he', lib.filter.cardRecastable)
				.set('ai', (card) => {
					return Math.max(card.number, 6) - get.value(card);
				})
				.forResult();
		},
		usable: 2,
		async content(event, trigger, player) {
			const card = event.cards[0];
			player.recast(event.cards);
			if (game.hasPlayer((current) => current.countCards('he') > player.countCards('h'))) {
				const { targets } = await player
					.chooseTarget('令一名其他角色弃置一张牌', true, (card, player, target) => {
						return target.countCards('he') > player.countCards('h');
					})
					.set('ai', (target) => {
						return -get.attitude(get.player(), target);
					})
					.forResult();
				const [cardx] = await targets[0]
					.chooseToDiscard('he', true)
					.set('ai', (card) => {
						const player = get.player(),
							source = get.event().getTrigger().player;
						if (get.effect(source, trigger.card, trigger.player, player)) return Math.max(card.number, 6) - get.value(card);
						return 1;
					})
					.forResult('cards');
				if (cardx.number < card.number) {
					trigger.parent.excluded.add(player);
				}
			}
		},
		ai: {
			threaten: 0.8,
			effect: {
				target(card, player, target, current) {
					if (card.name == 'sha' && get.attitude(player, target) < 0) {
						if (_status.event.name == 'bleach_xiuwu') return;
						if (player.countCards('h') <= target.countCards('h')) return;
						if (player.countCards('h') == 1 || !target.countCards('he')) return;
						if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
						return [1, 0, 1, -0.5];
					}
				},
			},
		},
	},
	bleach_shejiao: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		position: 'he',
		filterCard: (card, player) => player.canRecast(card),
		discard: false,
		lose: false,
		delay: false,
		check(card) {
			return 14 - card.number - get.value(card);
		},
		usable: 1,
		async content(event, trigger, player) {
			await player.recast(event.cards);
			let count = 1,
				number = event.cards[0].number;
			while (number < 13 && player.hasCard((card) => _status.connectMode || card.number > number)) {
				const { cards } = await player
					.chooseCard('重铸一张点数大于' + number + '的牌', 'he', (card) => {
						return card.number > get.event('number') && get.player().canRecast(card);
					})
					.set('number', number)
					.set('ai', (card) => {
						return 14 - card.number - get.value(card);
					}).forResult();
				if (!cards || !cards.length) break; //QQQ
				await player.recast(cards);
				count++;
				number = cards[0].number;
			}
			if (count >= 3) {
				const [target] = await player
					.chooseTarget('令一名其他角色选择一项:1.弃置两张牌;2.视为对其使用一张【杀】.', true, lib.filter.notMe)
					.set('ai', (target) => {
						return -get.attitude(get.player(), target);
					})
					.forResult('targets');
				player.line(target);
				const {
					result: { bool },
				} =
					target.countCards('he') < 2
						? { result: { bool: false } }
						: await target.chooseToDiscard('弃置两张牌,或点<取消>视为' + get.translation(player) + '对你使用一张【杀】.', 2, 'he').set('ai', (card) => {
							return 6 - get.value(card);
						});
				if (!bool) await player.useCard({ name: 'sha' }, target, false);
			}
		},
		ai: {
			order: 7.5,
			result: {
				player: 1,
			},
			threaten: 1.45,
		},
	},
	bleach_duanfeng: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToPlayered',
		},
		derivation: ['bleach_duanfeng1'],
		filter(event, player) {
			if (!event.targets || !event.isFirstTarget) return false;
			if (!player.storage.bleach_tiequan && !get.tag(event.card, 'damage')) return false;
			return event.targets.some((target) => target != player) && (player.getHistory('useCard').length == player.countCards('h') || (player.storage.bleach_tiequan && get.cardNameLength(event.card) == player.getHistory('useCard').length));
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt('bleach_duanfeng'), '对一名目标造成1点伤害并随机弃置其一张牌', (card, player, target) => {
					return get.event('targets').includes(target) && target != player;
				})
				.set('ai', (target) => {
					const player = get.player();
					return get.damageEffect(target, player, player);
				})
				.set('targets', trigger.targets)
				.forResult();
		},
		async content(event, trigger, player) {
			const target = event.targets[0];
			target.damage('nocard');
			const card = target.getCards('he').randomGets(1);
			if (card) target.discard(card);
		},
		ai: {
			threaten(player, target) {
				if (target.storage.bleach_tiequan) return 1.55;
				return 1.15;
			},
		},
		mod: {
			aiOrder(player, card, num) {
				if (_status.currentPhase != player) return;
				const cardsh = [];
				if (Array.isArray(card.cards)) {
					cardsh.addArray(
						card.cards.filter((card) => {
							return get.position(card) == 'h';
						})
					);
				}
				const del = player.countCards('h') - cardsh.length - player.getHistory('useCard').length - 1;
				if (del < 0) return;
				if (del > 0) {
					if (card.name == 'sha' || get.type(card, false) != 'trick') return num / 3;
					return num + 1;
				}
				return num + 15;
			},
		},
	},
	bleach_tiequan: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			player: 'loseAfter',
			global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
		},
		forced: true,
		juexingji: true,
		filter(event, player) {
			const suits = [];
			player.getAllHistory('lose', (evt) => {
				evt.cards2.forEach((i) => suits.add(i.suit));
			});
			player.markAuto('bleach_tiequan_suit', suits);
			return suits.length == 4;
		},
		content() {
			'step 0';
			player.awakenSkill('bleach_tiequan');
			player.storage.bleach_tiequan = true;
			player.bleachAwaken('bleach_liuche', 1);
			player.bleachAwaken('bleach_sp_liuche', 1);
			player.loseMaxHp();
			player.unmarkAuto('bleach_tiequan_suit', lib.suit.slice(0));
			('step 1');
			player.chooseDrawRecover(2, true);
		},
		subSkill: {
			suit: {
				intro: {
					content: '当前花色:$',
				},
			},
		},
	},
	bleach_yuanheng: {
		trigger: {
			player: ['phaseDrawBefore', 'phaseDiscardBefore'],
		},
		forced: true,
		filter(event, player) {
			if (event.name == 'phaseDraw') return player.countCards('h') < player.getHp();
			return player.countCards('h') > player.getDamagedHp();
		},
		content() {
			trigger.cancel();
			if (trigger.name == 'phaseDraw') player.drawTo(player.hp);
			else player.chooseToDiscard('h', player.countCards('h') - player.getDamagedHp(), true);
		},
	},
	bleach_nianheng: {
		trigger: {
			player: 'phaseEnd',
		},
		forced: true,
		filter(event, player) {
			return player.hasHistory('lose', (evt) => evt.type == 'discard');
		},
		content() {
			player.chooseUseTarget('视为使用一张【虚闪】', { name: 'bleach_card_cero' }, true, false);
		},
	},
	bleach_tongci: {
		audio: 'ext:BLEACH/skill:4:mp3',
		trigger: {
			global: 'useCard',
		},
		filter(event, player) {
			if (!event.respondTo) return false;
			if (event.player == player) return false;
			const card = event.respondTo[1];
			if (!card) return false;
			return (
				game.hasPlayer2((current) => {
					return current.getAllHistory('useCard', (evt) => {
						return evt.card != card && get.color(evt.card) == 'black' && evt.targets && evt.targets.includes(event.player);
					}).length;
				}) &&
				player.hasCard((card) => {
					return lib.filter.cardDiscardable(card, player, 'bleach_tongci');
				}, 'he') &&
				!player.getHistory('useSkill', (evt) => evt.skill == 'bleach_tongci').some((evt) => evt.targets.includes(event.player))
			);
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseToDiscard(get.prompt('bleach_tongci', trigger.player), 'he')
				.set('ai', (card) => {
					const player = get.player();
					if (get.attitude(player, trigger.player) >= 0) return 0;
					if (get.damageEffect(trigger.player, trigger.getParent(3).player, player, get.nature(trigger.card)) <= 0) return 0;
					return 7 - get.value(card);
				})
				.set('prompt2', '弃置一张牌令' + get.translation(trigger.card) + '无效,其明置两张牌并受到你造成的1点伤害')
				.forResult();
		},
		async content(event, trigger, player) {
			trigger.all_excluded = true;
			const cards = (await trigger.player.chooseCard('选择明置两张手牌', 2, true, (card) => !get.is.shownCard(card))).result.cards;
			trigger.player.addShownCards(cards, 'visible_bleach_tongci');
			trigger.player.showCards(cards, get.translation(player) + '对' + get.translation(trigger.player) + '发动了【恫辞】');
			await trigger.player.damage();
		},
	},
	bleach_zhenshang: {
		audio: 'ext:BLEACH/skill:4:mp3',
		enable: 'phaseUse',
		filterTarget: true,
		usable: 1,
		async content(event, trigger, player) {
			const target = event.target;
			const card = get.cardPile2((card) => get.subtype(card) == 'equip2');
			if (card) {
				await target.equip(card);
			}
			const cards = target.getCards('h', (card) => get.is.shownCard(card)).concat(target.getCards('ej'));
			const num1 = cards.filter((card) => get.color(card) == 'red').length;
			const num2 = cards.filter((card) => get.color(card) == 'black').length;
			const red = target.getCards('h', { color: 'red' });
			const black = target.getCards('h', { color: 'black' });
			if (red.length == black.length || num1 == num2) {
				target.popup('颜色等量');
			} else if (num1 > num2) {
				const give = red.length > black.length ? black : red;
				target.give(give, player);
				target.recover(Math.ceil(give.length / 2));
			} else if (num1 < num2) {
				const lose = red.length > black.length ? red : black;
				const result = await target
					.chooseControl('掉血', '弃牌')
					.set('ai', () => {
						if (lose.length >= 2) return '掉血';
						return '弃牌';
					})
					.forResult();
				if (result.control == '掉血') target.loseHp();
				else {
					target.discard(lose);
				}
			}
		},
		ai: {
			order: 13,
			result: {
				target(player, target) {
					if (target.countCards('h', { color: 'red' }) == target.countCards('h', { color: 'black' }) || target.countCards('ej', { color: 'red' }) == target.countCards('ej', { color: 'black' }) + 1) return 1;
					return -1;
				},
			},
		},
	},
	bleach_haishi: {
		audio: 'ext:BLEACH/skill:1:mp3',
		enable: 'phaseUse',
		onChooseToUse(event) {
			if (!game.online && !event.bleach_haishi) {
				const player = event.player;
				const num = player.getAllHistory('useSkill', (evt) => ['bleach_tongci', 'bleach_zhenshang'].includes(evt.skill)).length;
				if (game.dead.some((i) => i.isFriendsOf(player))) {
					const num2 = game.dead.filter((i) => i.isFriendsOf(player)).length;
					if (Math.floor(num / num2) >= 6) event.set('bleach_haishi', true);
				}
			}
		},
		filter(event, player) {
			return event.bleach_haishi;
		},
		filterTarget: lib.filter.notMe,
		selectTarget: [1, 6],
		limited: true,
		async content(event, trigger, player) {
			if (!player.storage.bleach_haishi) player.storage.bleach_haishi = [];
			let map;
			const target = event.target;
			const dialog = [];
			dialog.push('###娑闼迦罗骸刺络辻###<div class="text center">编织' + get.translation(target) + '的命运</div>');
			const list = [
				['受到伤害', '体力流失'],
				['有来源', '无来源'],
				['有伤害牌', '无伤害牌'],
			];

			dialog.add([list[0], 'tdnodes']);
			dialog.add([list[1], 'tdnodes']);
			dialog.add([list[2], 'tdnodes']);
			const result = await player
				.chooseButton([1, 3], true)
				.set('createDialog', dialog)
				.set('list', list)
				.set('filterButton', (button) => {
					const list = _status.event.list;
					if (ui.selected.buttons.length) {
						const controls = ui.selected.buttons.filter((button) => typeof button.link == 'string');
						if (ui.selected.buttons.length == 1 && controls[0].link == '体力流失') return false;
						if (ui.selected.buttons.length == 2 && controls[1].link == '无来源') return false;
						if (ui.selected.buttons.length == 2) return list[2].includes(button.link);
						if (ui.selected.buttons.length == 1) return list[1].includes(button.link);
					}
					return list[0].includes(button.link);
				})
				.set('filterOk', () => {
					if (!ui.selected.buttons.length) return false;
					const controls = ui.selected.buttons.filter((button) => typeof button.link == 'string');
					if (ui.selected.buttons.length == 1 && controls[0].link == '体力流失') return true;
					if (ui.selected.buttons.length == 2 && controls[1].link == '无来源') return true;
					if (ui.selected.buttons.length == 3) return true;
					return false;
				})
				.set('ai', (button) => {
					if (target.hasSkillTag('filterDamage') || target.hasSkillTag('nodamage')) return '体力流失';
					return ['受到伤害', '无来源'].includes(button.link);
				})
				.forResult();
			if (result.links.includes('有伤害牌')) {
				const list = get
					.inpileVCardList((info) => {
						if (info[0] != 'basic' && info[0] != 'trick') return false;
						return get.tag({ name: info[2] }, 'damage');
					})
					.filter((card) => player.canUse({ name: card[2] }, target, false));
				const { links } = await player
					.chooseButton(['选择「骸辻」的伤害牌', [list, 'vcard']], true)
					.set('ai', (button) => {
						return _status.event.player.getUseValue({ name: button.link[2] });
					})
					.forResult();
				map = [target, { card: false, source: true, damage: true }];
				map[1].card = { name: links[0][2], nature: links[0][3] };
			} else {
				map = [target, { card: false, source: false, damage: false }];
				if (result.links.length == 2) map[1].damage = true;
			}
			player.storage.bleach_haishi.push(map);
		},
		contentAfter() {
			player.awakenSkill('bleach_haishi');
			player.$skill('娑闼迦罗骸刺络辻', 'legend', 'avatar');
			game.switchBleachBackground('sichuliusefuwenji');
			player.addTempSkill('bleach_haishi_eff', { player: 'dying' });
			player.when({ player: 'dying' }).then(() => {
				if (player.getStorage('bleach_haishi').length) {
					player.recoverTo(2);
				}
			});
		},
		ai: {
			order: 9,
			result: {
				target: -1,
			},
		},
		subSkill: {
			buff: {
				trigger: {
					player: 'damageBegin3',
				},
				filter(event, player) {
					return event.num >= player.hp;
				},
				forced: true,
				lastDo: true,
				content() {
					trigger.num--;
					game.log(player, '「死出六色符文机」加护中,伤害-1');
				},
			},
			eff: {
				group: 'bleach_haishi_buff',
				trigger: {
					global: 'phaseAfter',
				},
				forced: true,
				charlotte: true,
				lastDo: true,
				filter(event, player) {
					const targets = player.storage.bleach_haishi.map((i) => i[0]);
					return targets.includes(event.player);
				},
				logTarget: 'player',
				async content(event, trigger, player) {
					let card, source, damage;
					const list = player.storage.bleach_haishi;
					for (var i of list) {
						if (i.includes(trigger.player)) {
							card = i[1].card;
							source = i[1].source;
							damage = i[1].damage;
							list.remove(i);
							break;
						}
					}
					let next = game.createEvent('fuwenji_act');
					if (source != false) next.player = player;
					next.target = trigger.player;
					if (card != false) next.cards = card;
					if (damage != false) next.type = damage;
					next.source = player;
					next.setContent(() => {
						let say = [
							['万花成眼', '若直视此眼 双眼定毁'],
							['刃金成铠', '身着此铠 无人能立'],
							['黑砂成肠', '以手触之 一命呜呼'],
							['底褥冻结', '一旦踏入 永不苏醒'],
							['火烧荒野', '无路可逃 终成灰烬'],
							['暗夜繁星', '一旦被俘万事休 乃死出之星'],
						];

						const type = _status.event.type == true ? 'damage' : 'loseHp';
						switch (target.name) {
							case 'bleach_shitianyulong':
								'bleach_2022_shitianyulong';
								say = say[5];
								break;
							case 'bleach_haschwalth':
								say = say[4];
								break;
						}
						if (type == 'loseHp') say = say[2];
						else if (cards) {
							if ((cards.nature && cards.nature == 'fire') || cards.name == 'huogong') say = say[4];
							else if (cards.nature && cards.nature == 'ice') say = say[3];
							else if (cards.nature && cards.nature == 'thunder') say = say[1];
							else {
								switch (cards.name) {
									case 'sha':
									case 'bleach_card_cero':
										say = say[1];
										break;
									case 'juedou':
										say = say[0];
										break;
									case 'nanman':
									case 'wanjian':
										say = say[0];
										break;
								}
							}
						} else if (say.length == 6) say = say.randomGet();
						const num = source.getAllHistory('useSkill', (evt) => evt.skill == 'bleach_haishi_eff').length;
						source.chat(get.cnNumber(num) + '綛解除 ' + say[0]);
						setTimeout(() => {
							source.chat(say[1]);
						}, 2500);
						target[type](target.hp, cards, cards != undefined ? cards.nature : undefined, player == undefined ? 'nosource' : player);
					});
					if (!list.length) player.removeSkill('bleach_haishi_eff');
				},
				onremove() {
					ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
				},
			},
		},
	},
	bleach_yingyu: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'roundStart',
		},
		hasChangeHp(player) {
			const curLen = player.actionHistory.length;
			if (curLen <= 2) return false;
			for (var i = curLen - 2; i >= 0; i--) {
				const history = player.actionHistory[i];
				if (history.isMe && history._yingyu) return false;
				if (_status.globalHistory[i].changeHp.some((evt) => evt.player == player)) return true;
				if (history.isRound) break;
			}
			return false;
		},
		filter(event, player) {
			return game.hasPlayer((current) => lib.skill.bleach_yingyu.hasChangeHp(current));
		},
		async cost(event, trigger, player) {
			let players = [];
			game.broadcastAll((players) => {
				players.addArray(game.filterPlayer((current) => lib.skill.bleach_yingyu.hasChangeHp(current)));
			}, players);
			event.result = await player
				.chooseTarget(
					`斩月:令一名角色执行一个额外回合`,
					`该回合内只能对你指定的另一名其他角色使用牌`,
					(card, player, target) => {
						if (!ui.selected.targets.length) return get.event('players').includes(target);
						return true;
					},
					2
				)
				.set('multitarget', true)
				.set('targetprompt', ['额外回合', '指定目标'])
				.set('ai', (target) => {
					const player = get.player(),
						att = get.attitude(get.player(), target);
					if (ui.selected.targets.length) return 1 - att / get.distance(ui.selected.targets[0], target, 'absolute');
					return att * Math.sqrt(get.threaten(target));
				})
				.set('players', players)
				.forResult();
		},
		popup: false,
		async content(event, trigger, player) {
			const targets = event.targets;
			targets[0].line(targets[1]);
			const evt = trigger,
				evtx = targets[0].phase('nodelay');
			targets[0].storage.bleach_yingyu = player;
			targets[0]
				.when('phaseBeforeStart')
				.filter((evtt) => evtt == evtx)
				.then(() => {
					game.players
						.slice()
						.concat(game.dead)
						.forEach((i) => {
							i.getHistory()._yingyu = true;
							i.getStat()._yingyu = true;
						});
				});
			game.broadcastAll((bg) => {
				_status.tempBackground = bg;
				game.updateBackground();
			}, 'ext:BLEACH/files/background/TYBW_Innerworld.jpg');
			if (evt.player != targets[0] && !evt._finished) {
				evt.finish();
				evt._triggered = 5;
				evt.player.phase('nodelay');
			}
			const players = game.filterPlayer((current) => !targets.concat(player).includes(current));
			game.broadcastAll((players) => {
				for (var i of players) i.out('bleach_yingyu');
			}, players);
			targets[0]
				.when('phaseEnd')
				.assign({
					forceDie: true,
				})
				.then(() => {
					if (player.isIn()) {
						player.chooseControlList('影域:请选择一项', ['摸一张牌', '获得一张武器牌'], true, (event, player) => {
							if (player.countCards('h', { subtype: 'equip1' })) return 0;
							return 1;
						});
					}
					game.broadcastAll((players) => {
						for (var i of players) i.in('bleach_yingyu');
					}, players);
					delete _status.tempBackground;
					game.updateBackground();
				})
				.then(() => {
					if (result && result.index) {
						const target = player.storage.bleach_yingyu;
						(result.index == 0 ? player : target).draw();
						const card = get.cardPile((card) => get.subtype(card) == 'equip1' && card != ui.cardPile.firstChild);
						if (card) {
							(index == 1 ? player : target).gain(card, 'gain2');
						}
						delete player.storage.bleach_yingyu;
					}
				})
				.vars({ players: players });
		},
		ai: {
			threaten: 1.85,
		},
	},
	bleach_hufeng: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'damageBegin4',
		},
		check(event, player) {
			return get.attitude(player, event.player) > 3;
		},
		logTarget: 'player',
		async content(event, trigger, player) {
			player.awakenSkill('bleach_hufeng');
			trigger.cancel();
			trigger.player.chooseDrawRecover(2, true);
			trigger.player.addSkill('bleach_hufeng_eff');
			const list = ['bleach_heiqiyihu', 'bleach_re_heiqiyihu', 'bleach_arena_heiqiyihu', 'bleach_8th_heiqiyihu', 'bleach_quincy_heiqiyihu'];
			if (trigger.player.bleachIs(list)) {
				player.chat('拿去吧 那才是你真正的斩魄刀');
				setTimeout(() => {
					player.chat('斩月!');
				}, 1500);
				game.switchBleachBgm('NumberOne_Bankai');
			}
		},
		limited: true,
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
		subSkill: {
			eff: {
				trigger: {
					player: 'useCardAfter',
				},
				charlotte: true,
				forced: true,
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				content() {
					player.draw();
				},
			},
		},
	},
	bleach_daofeng: {
		audio: 'ext:BLEACH/skill:4:mp3',
		enable: 'chooseToUse',
		filter(event, player) {
			if (event.bleach_daofeng_num > 1) return false;
			return true;
		},
		onChooseToUse(event) {
			if (!game.online && !event.bleach_daofeng_num) {
				const player = event.player,
					history = player.getHistory('custom', (evt) => evt.bleach_daofeng_num);
				if (!history.length) event.set('bleach_daofeng_num', 1);
				else {
					const evt = history[history.length - 1];
					event.set('bleach_daofeng_num', evt.bleach_daofeng_num);
				}
			}
		},
		filterCard(card, player) {
			return player.canRecast(card);
		},
		selectCard: 2,
		position: 'he',
		check(card) {
			const player = get.event('player');
			if (ui.selected.cards.length) {
				const cardx = ui.selected.cards[0];
				if (get.subtype(cardx) == 'equip1' && get.subtype(card) == 'equip1') return 20;
				if (cardx.name == card.name) return 20;
			}
			const cards = player.getCards('he');
			for (let cardx of cards) {
				if (card != cardx) {
					if (get.subtype(cardx) == 'equip1' && get.subtype(card) == 'equip1') return 7 - get.value(card);
					if (card.name == cardx.name) return 7 - get.value(card);
				}
			}
			return 5 - get.value(card);
		},
		complexCard: true,
		lose: false,
		discard: false,
		delay: 0,
		viewAsFilter(player) {
			return player.countCards('he', (card) => player.canRecast(card)) > 1;
		},
		viewAs: {
			name: 'sha',
			storage: {
				bleach_daofeng: true,
			},
		},
		precontent() {
			player.getHistory('custom').push({ bleach_daofeng_num: player.getHistory('useSkill', (evt) => evt.skill == 'bleach_daofeng').length + 1 });
			let evt = event.result;
			delete evt.skill;
			const cards = evt.cards;
			player.recast(cards);
			const viewAs = new lib.element.VCard({ name: evt.card.name, storage: { bleach_daofeng: true } });
			evt.card = viewAs;
			if (cards[0].name == cards[1].name) {
				player
					.when({ player: 'useCard' })
					.filter((evt) => evt.card.storage && evt.card.storage.bleach_daofeng)
					.then(() => {
						game.log(trigger.card, '不计入次数上限');
						trigger.addCount = false;
						trigger.player.getStat().card.sha--;
					});
			}
			if (cards[0].number == cards[1].number) {
				player
					.when({ player: 'useCardToPlayered' })
					.assign({
						firstDo: true,
					})
					.filter((event, player) => event.card.storage && event.card.storage.bleach_daofeng)
					.then(() => {
						const targets = trigger.targets;
						targets.forEach((target) => target.addTempSkill('bleach_off_skill'));
					});
			}
			if (cards.every((card) => get.subtype(card) == 'equip1')) {
				player
					.when({ player: 'useCard' })
					.filter((evt) => evt.card.storage && evt.card.storage.bleach_daofeng)
					.then(() => {
						player.chooseDrawRecover(true);
					});
			}
			evt.cards = [];
		},
		prompt: '重铸两张牌视为使用一张【杀】',
		ai: {
			threaten: 1.35,
			order: () => get.order({ name: 'sha' }) + 3.5,
			unequip: true,
			unequip: true,
			skillTagFilter(player, tag, arg) {
				if (tag == 'unequip' || tag == 'unequip') {
					if (!arg || !arg.card || !arg.card.storage || !arg.card.storage.bleach_daofeng) return false;
				}
			},
		},
	},
	bleach_candao: {
		audio: 'ext:BLEACH/skill:4:mp3',
		logAudio: () => ['ext:BLEACH/skill:2:mp3'],
		trigger: {
			player: 'useCard',
		},
		filter(event, player) {
			const number = event.card.number,
				cards = player.getExpansions('bleach_candao');
			const numbers = cards.map((c) => c.number).sort((a, b) => a - b);
			return typeof number == 'number' && number > numbers[0] && number < numbers[1] && ['basic', 'trick'].includes(get.type(event.card));
		},
		forced: true,
		async content(event, trigger, player) {
			player.draw();
			const expansions = player.getExpansions('bleach_candao');
			const chooseButton = player.chooseButton(['用' + get.translation(trigger.cards) + '替换一张「道」', expansions], true);
			chooseButton.set('ai', (button) => {
				const card = button.link;
				if (trigger.card.number > 7) return 10 * (card.number - trigger.card.number) - get.value(card);
				return 10 * (trigger.card.number - card.number) - get.value(card);
			});
			const result = await chooseButton.forResult();
			const cards = expansions.concat(trigger.cards);
			player.addToExpansion(trigger.cards, 'gain2').gaintag.add('bleach_candao');
			player.loseToDiscardpile(result.links);
			const numbers = cards.map((c) => c.number).sort((a, b) => a - b);
			numbers.remove(result.links[0].number);
			if ([numbers[1] - 1, numbers[1] + 1].includes(numbers[0])) {
				player.loseToDiscardpile(cards);
				player.draw(2);
			}
		},
		marktext: '道',
		intro: {
			content: 'expansion',
			markcount: 'expansion',
		},
		onremove(player, skill) {
			var cards = player.getExpansions(skill);
			if (cards.length) player.loseToDiscardpile(cards);
		},
		group: ['bleach_candao_init'],
		subSkill: {
			init: {
				audio: 'bleach_candao',
				logAudio: () => ['ext:BLEACH/skill/bleach_candao3.mp3', 'ext:BLEACH/skill/bleach_candao4.mp3'],
				trigger: {
					global: 'phaseBefore',
					player: 'enterGame',
				},
				forced: true,
				filter(event, player) {
					return event.name != 'phase' || game.phaseNumber == 0;
				},
				content() {
					if (player.bleachIs(['bleach_8th_heiqiyihu']) && game.hasPlayer((current) => current.bleachIs(['bleach_zangetsu']))) {
						player.chat('谢谢你,斩月');
						player.bleachAwaken('bleach_8th_heiqiyihu', 1, 'NumberOne_Bankai');
					}
					const numbers = [],
						cards = [];
					let num = get.rand(0, ui.cardPile.childNodes.length - 1);
					for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
						let j = i + num;
						if (j >= ui.cardPile.childNodes.length) j -= ui.cardPile.childNodes.length;
						const card = ui.cardPile.childNodes[j],
							number = card.number;
						if ([1, 13].includes(number) && !numbers.includes(number)) {
							numbers.add(number);
							cards.push(card);
							num = get.rand(0, ui.cardPile.childNodes.length - 1);
						}
					}
					player.addToExpansion(cards, 'gain2').gaintag.add('bleach_candao');
				},
			},
		},
	},
	bleach_mujian: {
		mod: {
			aiOrder(player, card, num) {
				if (typeof card == 'object') {
					if (player.getRoundHistory('useCard', (evt) => get.type2(evt.card) == get.type2(card)).length == 0) return num + 10;
				}
			},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardAfter',
		},
		forced: true,
		filter(event, player) {
			const type = get.type2(event.card);
			return player.getRoundHistory('useCard', (evt) => get.type2(evt.card) == type).indexOf(event) == 0 || (player.getRoundHistory('useCard').indexOf(event) == 2 && player.getRoundHistory('useCard', (evt) => get.type2(evt.card) == type).indexOf(event) == 2);
		},
		async content(event, trigger, player) {
			let num = 0;
			if (player.getRoundHistory('useCard', (evt) => get.type2(evt.card) == get.type2(trigger.card)).indexOf(trigger) == 0) num++;
			if (player.getRoundHistory('useCard').indexOf(trigger) == 2) {
				const types = player.getRoundHistory('useCard').reduce((list, evt) => list.add(get.type2(evt.card)), []);
				if (types.length == 1 || types.length == 3) num += 3;
			}
			await player.draw(num);
		},
	},
	//当你:1.获得或弃置其他角色装备牌后
	bleach_nuesha: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'gainAfter',
			source: ['dieAfter', 'damageSource'],
			global: ['loseAfter', 'loseAsyncAfter'],
		},
		filter(event, player) {
			if (event.name == 'die') return true;
			if (event.name == 'damage') {
				const num1 = player.getAllHistory('sourceDamage').reduce((sum, evt) => (sum += evt.num), 0),
					num2 = player.getAllHistory('gain', (evt) => evt.getParent(2).name == 'bleach_nuesha' && evt.cards.length == 3).reduce((sum, evt) => (sum += evt.cards.length), 0);
				return Math.floor(num1 / 4 - num2 / 3) > 0;
			}
			if (event.name == 'lose') {
				if (event.type != 'discard' || event.player == player) return false;
				if ((event.discarder || event.getParent(2).player) != player) return false;
				return event.getl(event.player).cards.some((i) => get.type(i) == 'equip');
			} else if (event.name == 'gain') {
				if (event.giver || event.parent.name == 'gift') return false;
				const cards = event.getg(player);
				if (!cards.length) return false;
				return game.hasPlayer((current) => {
					if (current == player) return false;
					return event.getl(current).cards2.some((card) => cards.includes(card) && get.type(card) == 'equip');
				});
			} else if (event.type == 'gain' && event.player) {
				//QQQ
				if (event.giver) return false;
				const hs = event.getl(event.player);
				const cards = event.getg(player);
				return cards.some((i) => hs.includes(i) && get.type(i) == 'equip');
			} else if (event.type == 'discard') {
				if (!event.discarder || event.player == player) return false;
				return event.discarder == player && event.getl(event.player).cards?.some((i) => get.type(i) == 'equip');
			}
			return false;
		},
		forced: true,
		content() {
			const num1 = player.getAllHistory('sourceDamage').reduce((sum, evt) => (sum += evt.num), 0),
				num2 = player.getAllHistory('gain', (evt) => evt.getParent(2).name == 'bleach_nuesha' && evt.cards.length == 3).reduce((sum, evt) => (sum += evt.cards.length), 0);
			let num = trigger.name == 'damage' ? 3 * Math.floor(num1 / 4 - num2 / 3) : 1 + (trigger.name == 'die');
			player.draw(num, 'visible').gaintag = ['bleach_nuesha'];
		},
		ai: {
			threaten: 1.15,
		},
		mod: {
			cardUsable(card, player) {
				if (!card.cards) return;
				for (var i of card.cards) {
					if (i.hasGaintag('bleach_nuesha')) return Infinity;
				}
			},
			targetInRange(card, player) {
				if (!card.cards) return;
				for (var i of card.cards) {
					if (i.hasGaintag('bleach_nuesha')) return true;
				}
			},
		},
	},
	bleach_spligong: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filter(event, player) {
			return player.countCards('e');
		},
		limited: true,
		abnormal: true,
		async content(event, trigger, player) {
			player.awakenSkill('bleach_spligong');
			game.playBleach('bleach_ligong2');
			const count = player.countCards('e');
			const cards = game.cardsGotoOrdering(get.cards(count)).cards;
			player.showCards(cards, get.translation(player) + '发动了【黄煌严灵离宫】');
			if (game.hasPlayer((current) => current.bleachIs(['bleach_shanben']))) {
				player.chat('很怀念吧 听说这个家伙已经有两千多年没有使用过卍解了');
				setTimeout(() => {
					player.chat('这下你终于再次见到了 还不快感谢我');
				}, 2000);
			}
			const num = cards.filter((card) => get.color(card) == 'black').length;
			if (num == 0) return;
			const { targets } = await player
				.chooseTarget('黄煌严灵离宫', '对一名角色造成' + get.cnNumber(num) + '点雷电伤害', true, lib.filter.notMe)
				.set('ai', (target) => {
					const player = get.player();
					return get.damageEffect(target, player, player, 'thunder');
				})
				.forResult();
			game.playBleach(['bleach_ligong3', 'bleach_ligong4', 'bleach_ligong5g', 'bleach_ligong6'].randomGet());
			setTimeout(() => {
				game.playBleach(['bleach_ligong3', 'bleach_ligong4', 'bleach_ligong5g', 'bleach_ligong6'].randomGet());
			}, 2000);
			player.line(targets, 'thunder');
			targets[0].when('addBleachBuffBegin2').then(() => {
				if ('bleachMark_leizhe' in trigger.buff) trigger.buff.bleachMark_leizhe = 3 - player.countMark('bleachMark_leizhe');
			});
			await targets[0].damage(num, 'thunder');
			if (targets[0].isIn() && targets[0].bleachIs(['bleach_shanben', 'bleach_tybw_shanben'])) {
				player.chat('怎么了 老爷爷,被部下的卍解击中 连反击的力气都没有了吗');
			}
		},
		ai: {
			order: 1,
			result: {
				player(player) {
					if (game.hasPlayer((current) => current.hp <= Math.max(1, player.countCards('e')) && get.attitude(player, current) < 0)) return 1;
					return get.sgn(player.countCards('e') - 2);
				},
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_feiti: {
		audio: 'ext:BLEACH/skill:3:mp3',
		trigger: {
			player: 'useCardAfter',
		},
		filter(event, player) {
			return get.tag(event.card, 'damage') && event.getParent(2).name != 'bleach_feiti';
		},
		async content(event, trigger, player) {
			const list = [];
			for (let name of lib.inpile) {
				if (!get.tag({ name: name }, 'damage')) continue;
				if (get.type(trigger.card) == 'basic' && get.type(name) != 'trick') continue;
				if (get.type(trigger.card) == 'trick' && get.type(name) != 'basic') continue;
				if (!player.hasUseTarget({ name: name })) continue;
				list.push([get.translation(get.type(name)), '', name]);
			}
			if (list.length) {
				const result = await player
					.chooseButton(['超级飞踢:视为使用一张牌', [list, 'vcard']], true)
					.set('ai', (button) => {
						const player = get.player();
						return player.getUseValue({ name: button.link[2], nature: button.link[3] });
					})
					.forResult();
				if (result.bool) {
					const card = {
						name: result.links[0][2],
						nature: result.links[0][3],
					};
					await player.chooseUseTarget(card, true, false);
					const chioce = [];
					let choiceList = ['失去1点体力', '移去1层护盾'];
					for (var i = 0; i < 2; i++) {
						if (i == 1 && !player.hasMark('bleachMark_shield')) {
							choiceList[i] = '<span style="opacity:0.5;">' + choiceList[i] + '</span>';
						} else chioce.push('选项' + get.cnNumber(i + 1, true));
					}
					const { control } = await player
						.chooseControl(chioce)
						.set('choiceList', choiceList)
						.set('prompt', '请选择一项:')
						.set('ai', () => (1 ? 1 : 0))
						.forResult();
					const index = ['选项一', '选项二'].indexOf(control);
					if (index == 0) {
						player.loseHp();
					} else {
						player.removeBleachBuff('bleachMark_shield');
					}
				}
			}
		},
	},
	bleach_chaobai: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToPlayered',
		},
		filter(event, player) {
			return event.card && event.card.name == 'sha' && event.isFirstTarget;
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseToDiscard(get.prompt2('bleach_chaobai'), 'he', [1, 3])
				.set('ai', (card) => {
					if (get.tag(card, 'damage') && card.name != 'sha') return 0;
					return 8 - get.value(card);
				})
				.forResult();
		},
		async content(event, trigger, player) {
			player.addBleachBuff('bleachMark_shield', event.cards.length);
			if (!player.storage.bleach_chaobai_mark) {
				player.storage.bleach_chaobai_mark = true;
				player.when('phaseAfter').then(() => {
					player.when({ player: 'phaseEnd' }).then(() => {
						delete player.storage.bleach_chaobai_mark;
						const num = player.countMark('bleachMark_shield');
						player.removeBleachBuff('bleachMark_shield', num);
						player.draw(num);
					});
				});
			}
		},
	},
	bleach_tybwbenneng: {
		mod: {
			targetInRange(card, player, target) {
				if (get.tag(card, 'damage') && !player.hasSkill('bleach_tybwbenneng_used')) return true;
			},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCard',
		},
		filter(event, player) {
			return get.tag(event.card, 'damage') && player.getHistory('useCard', (evt) => get.tag(evt.card, 'damage')).indexOf(event) == 0;
		},
		forced: true,
		async content(event, trigger, player) {
			player.addTempSkill('bleach_tybwbenneng_used');
			trigger.baseDamage++;
			game.log(trigger.card, '不计入次数上限且伤害+1');
			if (trigger.addCount !== false) {
				trigger.addCount = false;
				const stat = player.stat[player.stat.length - 1].card;
				if (typeof stat[trigger.card.name] === 'number') stat[trigger.card.name]--;
			}
		},
		ai: {
			threaten: 1.6,
		},
		group: ['bleach_tybwbenneng_eff'],
		subSkill: {
			eff: {
				trigger: {
					player: 'dying',
				},
				filter(event, player) {
					return player.hasUseTarget({ name: 'chuqibuyi' });
				},
				audio: 'bleach_tybwbenneng',
				check(event, player) {
					return !player.countCards('hs', ['tao', 'jiu']);
				},
				prompt2: '是否将牌堆顶的牌当【出其不意】使用,若如此做,你死亡.',
				async content(event, trigger, player) {
					const cards = get.cards();
					game.cardsGotoOrdering(cards);
					player.when({ player: 'useCardAfter' }).then(() => {
						player.die();
					});
					const result = await player.chooseUseTarget({ name: 'chuqibuyi', cards }, cards, false, false);
				},
			},
			used: {
				charlotte: true,
			},
		},
	},
	bleach_baihao: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: ['logSkill', 'useSkillAfter', 'useCardAfter', 'respondAfter'],
		},
		filter(event, player) {
			if (['global', 'equip'].includes(event.type)) return false;
			if (!player.countCards('he')) return false;
			let skill = event.sourceSkill || event.skill;
			if (!skill || event.player == player) return false;
			if (get.info(skill).readySkill) return false;
			const list = get.skillCategoriesOf(skill);
			list.remove('锁定技');
			return list.length == 0;
		},
		usable: 1,
		async cost(event, trigger, player) {
			event.result = await player
				.chooseCardTarget({
					prompt: get.prompt('bleach_baihao'),
					prompt2: '将一张牌当无距离限制的【杀】对' + get.translation(trigger.player) + '或其相邻的角色使用',
					position: 'he',
					filterCard: true,
					filterTarget(card, player, target) {
						return player.canUse({ name: 'sha' }, target, false) && get.distance(get.event('target'), target, 'pure') <= 1;
					},
					target: trigger.player,
					ai1(card) {
						return 8 - get.value(card);
					},
					ai2(target) {
						return get.effect(target, { name: 'sha' }, get.player(), get.player());
					},
				})
				.forResult();
		},
		async content(event, trigger, player) {
			player.addTempSkill('bleach_baihao_eff');
			const target = event.targets[0];
			await player.useCard({ name: 'sha' }, event.cards, false, target);
		},
		subSkill: {
			eff: {
				trigger: {
					player: 'damageBegin3',
				},
				forced: true,
				content() {
					trigger.num++;
					player.removeSkill('bleach_baihao_eff');
				},
				ai: {
					threaten: 1.75,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) {
								if (player.hasSkillTag('jueqing', false, target)) return;
								if (target.hasMark('bleachMark_shield')) return;
								return [1, -2];
							}
						},
					},
				},
			},
		},
	},
	bleach_rejinghua: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: ['phaseBefore', 'phaseEnd'],
			player: 'enterGame',
		},
		forced: true,
		filter(event, player) {
			return event.name != 'phase' || game.phaseNumber == 0 || game.hasGlobalHistory('cardMove', (evt) => evt.washCard);
		},
		async content(event, trigger, player) {
			const jinghuaList = [];
			if (game.phaseNumber > 0) {
				const cards = ['cardPile', 'discardPile'].map((pos) => Array.from(ui[pos].childNodes)).flat();
				const isJinghua = (card) => card.storage.bleach_rejinghua;
				const players = game.filterPlayer();
				players.forEach((current) => {
					const jinghuas = current.getCards('hej', isJinghua);
					if (jinghuas.length && current === player) {
						current.removeGaintag(jinghuas, 'bleach_rejinghua');
					}
					jinghuaList.addArray(jinghuas);
				});
				jinghuaList.addArray(cards.filter(isJinghua));
			}
			if (jinghuaList.length) {
				jinghuaList.forEach((i) => (i.storage.bleach_rejinghua = false));
				jinghuaList.removeArray(jinghuaList);
			}
			let num = get.rand(0, ui.cardPile.childNodes.length - 1);
			for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
				let j = i + num;
				if (j >= ui.cardPile.childNodes.length) j -= ui.cardPile.childNodes.length;
				const card = ui.cardPile.childNodes[j];
				if (jinghuaList.length < 13 && !jinghuaList.includes(card)) {
					jinghuaList.add(card);
					card.storage.bleach_rejinghua = true;
					num = get.rand(0, ui.cardPile.childNodes.length - 1);
				}
			}
			let list = [['我可不是在预言未来', '你们的下场', '早已是过去的既定事实']];
			if (player.hasFriend()) list.push(['不管发生什么事', '只要你们跟随着我', '吾等前方 绝无敌手'], ['在这里等一下就好', '只要', '等到我们把空座町毁灭回归之时']);
			if (game.hasPlayer((current) => current.isArrancar())) list.push(['和我们走吧', '带你去理想乡', '我不会强迫你们 做出今天这样的牺牲']);
			if (game.hasPlayer((current) => current.isShinigami()) && game.hasPlayer((current) => current.isKamen())) list.push(['来吧 护庭十三队', '还有 不堪一击的假面军团']);
			list = list.randomGet();
			player.chat(list[0]);
			setTimeout(() => {
				player.chat(list[1]);
			}, 2500);
			if (list.length == 3) {
				setTimeout(() => {
					player.chat(list[2]);
				}, 5000);
			}
		},
		mod: {
			ignoredHandcard(card, player) {
				if (card.hasGaintag('bleach_rejinghua')) return true;
			},
			cardDiscardable(card, player, name) {
				if (name == 'phaseDiscard' && card.hasGaintag('bleach_rejinghua')) return false;
			},
		},
		group: ['bleach_rejinghua_mark', 'bleach_rejinghua_eff'],
		subSkill: {
			mark: {
				trigger: {
					player: 'gainEnd',
					global: 'loseAsyncEnd',
				},
				forced: true,
				popup: false,
				silent: true,
				lastDo: true,
				filter(event, player) {
					const cards = event.getg(player);
					if (!cards.length) return false;
					return cards.some((card) => card.storage.bleach_rejinghua);
				},
				async content(event, trigger, player) {
					let cards = trigger.getg(player);
					if (cards.length) {
						cards = cards.filter((card) => card.storage.bleach_rejinghua);
						player.addGaintag(cards, 'bleach_rejinghua');
					}
				},
			},
			eff: {
				audio: 'ext:BLEACH/skill:2:mp3',
				trigger: {
					global: ['useCard', 'useCardToPlayer'],
				},
				filter(event, player) {
					if (
						(() => {
							if (!event.card.storage.bleach_rejinghua) return false;
							if (event.name == 'useCard') {
								if (event.player === player) return ['sha', 'bleach_card_cero'].includes(event.card.name) || get.type(event.card, false) == 'trick';
								return !event.targets.length;
							}
							return event.player != player && event.isFirstTarget;
						})()
					) {
						return event.name == 'useCard' || game.hasPlayer((current) => !event.targets.includes(current));
					}
					return false;
				},
				async cost(event, trigger, player) {
					trigger.card.storage.bleach_rejinghua = false;
					if (trigger.name == 'useCard') {
						if (trigger.player == player) event.result = { bool: true };
						else {
							event.result = await player
								.chooseBool(get.prompt('bleach_rejinghua', trigger.player), '是否令其使用的' + get.translation(trigger.card) + '无效')
								.set('ai', (event, player) => {
									return get.attituide(player, trigger.player) <= 0;
								})
								.forResult();
						}
					} else {
						event.result = await player
							.chooseTarget('是否将' + get.translation(trigger.card) + '的目标改为其他角色', (card, player, target) => {
								return !get.event('targets').includes(target);
							})
							.set('ai', (target) => {
								return get.effect(target, trigger.card, trigger.player, player);
							})
							.set('targets', trigger.targets)
							.forResult();
					}
				},
				async content(event, trigger, player) {
					const list = [['千辛万苦把你们十刃纳入麾下,结果 竟连我一人都不如'], ['接下来我会慢慢告诉你,应该相信的神明是谁', '你这种货色,别再让我第二次挥剑了', '这个世界从一开始就没有真实也没有虚假 有的只要俨然存在的事实'], '你什么时候产生了我没有使用镜花水月的错觉', '战斗距离会有意义 仅限于对手力量相等的战斗之中', '你与我之间的距离毫无意义', '你看 像这样 我马上就能触及你的心脏', '只说过一起来 从没说过相信我跟我一起来的这种话', '我常常劝他们别相信任何人 包括我'];
					if (trigger.name == 'useCard') {
						if (trigger.player === player) {
							trigger.directHit.addArray(game.players);
							const bool = trigger.targets?.some((i) => i.bleachIs(['bleach_baraggan', 'bleach_starrk', 'bleach_harribel', 'bleach_re_wuerqiaola', 'bleach_nnoitra', 'bleach_re_grimmjow', 'bleach_zommari', 'bleach_sazayelaporro', 'bleach_yaluoniluo', 'bleach_yami']));
							player.chat(list[0 + (bool === false)]);
						} else {
							trigger.targets.length = 0;
							trigger.all_excluded = true;
							player.chat(list[1].randomGet(2));
						}
					} else {
						player.chat(list[1].randomGet());
						const targets = event.targets;
						const evt = trigger.parent;
						trigger.targets.length = 0;
						evt.triggeredTargets1.length = 0;
						evt.targets.addArray(targets);
						game.log(player, '将', trigger.card, '的目标改为了', targets);
					}
				},
			},
		},
	},
	bleach_yumou: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: ['useCardAfter', 'respondAfter'],
		},
		filter(event, player) {
			if (player.storage.bleach_yumou_count < Math.max(1, player.getDamagedHp())) return false;
			return (
				!player.hasCard((card) => {
					return (card.viewAs || card.name) == 'xumou_jsrg';
				}, 'j') &&
				(player.countCards('h') || player.isDamaged())
			);
		},
		prompt2(event, player) {
			let str = player.isDamaged() ? '摸' + get.cnNumber(player.getDamagedHp()) + '张牌并' : '';
			return '你可以' + str + '蓄谋.';
		},
		async content(event, trigger, player) {
			player.storage.bleach_yumou_count = 0;
			if (player.isDamaged()) await player.draw(player.getDamagedHp());
			if (Math.random() <= 0.25) player.chat(['进化需要恐惧', '对于占有世界大半力量的人来说 对于与自身肯定不相符的事实 才是真实', '崩玉的能力是将周围的心具象化 也就是说向希望方向引导的力量', '只接受与自己相适应的那些事情 才产生了被误认的<真实>', '刚刚那就是我最后的破绽了', '你至今为止的所有战斗 都在我的掌握之中'].randomGet());
			const [card] = await player
				.chooseCard('蓄谋一张牌,蓄谋:【杀】造成伤害后,可以对另一角色使用之;【闪】可如手牌般使用或打出并摸一张牌;【桃】或【酒】进入濒死状态时,使用之', true)
				.set('ai', (card) => {
					const player = get.player();
					if (player.hp <= 2 && card.name == 'shan') return 10;
					return player.getUseValue(card);
				})
				.forResult('cards');
			await player.addJudge({ name: 'xumou_jsrg' }, [card]);
		},
		ai: {
			threaten: 3,
		},
		init: (player) => player.addSkill('bleach_yumou_count'),
		onremove: (player) => player.removeSkill('bleach_yumou_count'),
		group: ['bleach_yumou_eff', 'bleach_yumou_sha', 'bleach_yumou_rec'],
		subSkill: {
			lose: {
				trigger: {
					player: 'phaseJudgeEnd',
				},
				filter(event, player) {
					return !player.getHistory('useCard', (evt) => evt.getParent(2).name == 'xumou_jsrg' && evt.getParent(event.name) == event).length;
				},
				forced: true,
				content() {
					player.loseHp();
				},
			},
			count: {
				trigger: {
					player: ['useCard0', 'respond'],
				},
				silent: true,
				firstDo: true,
				charlotte: true,
				filter(event, player) {
					return !player.hasCard((card) => {
						return (card.viewAs || card.name) == 'xumou_jsrg';
					}, 'j');
				},
				content() {
					if (!player.storage.bleach_yumou_count) player.storage.bleach_yumou_count = 0;
					if (game.hasNature(trigger.card, 'thunder')) game.playBleach('bleach_yumou_sha1');
					player.storage.bleach_yumou_count++;
				},
			},
			sha: {
				trigger: {
					source: 'damageSource',
				},
				filter(event, player) {
					return (
						event.parent.name == 'sha' &&
						event.getParent(4).name == 'xumou_jsrg' &&
						game.hasPlayer((current) => {
							return player.canUse({ name: 'sha' }, current) && !event.parent.targets.includes(current);
						})
					);
				},
				async cost(event, trigger, player) {
					player.chat(['告诉你们吧 所谓的力量指的是这种东西', '所有人 破绽百出', '我并非在想能否将你斩杀 是已经斩下了'].randomGet());
					event.result = await player
						.chooseTarget('请选择【杀】(' + get.translation(trigger.card) + ')的目标', (card, player, target) => {
							return player.canUse({ name: 'sha' }, target) && !get.event('targets').includes(target);
						})
						.set('targets', trigger.parent.targets)
						.set('ai', (target) => {
							const player = get.player();
							return get.effect(target, { name: 'sha' }, player, player);
						})
						.forResult();
				},
				content() {
					player.useCard(trigger.card, event.targets, false);
				},
				sourceSkill: 'bleach_yumou',
			},
			eff: {
				audio: 'ext:BLEACH/skill:2:mp3',
				enable: ['chooseToRespond', 'chooseToUse'],
				filter(event, player) {
					if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
					if (event.name != 'chooseToUse' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
					return player.hasCard((card) => {
						return (card.viewAs || card.name) == 'xumou_jsrg' && card.name == 'shan';
					}, 'j');
				},
				delay: false,
				content() {
					player.chat(['太天真了', '不 恐怕你们对于<力量>的认知就和我不同', '我是在说 你的刀刃是无法触及到我的', '你的攻击对我来说是毫无意义的'].randomGet());
					const cards = player.getCards('j', (card) => {
						return (card.viewAs || card.name) == 'xumou_jsrg' && card.name == 'shan';
					});
					const evt = event.getParent(2);
					evt.result = { bool: true, card: cards, cards: cards };
					evt.redo();
				},
				hiddenCard(player, name) {
					if (!lib.inpile.includes(name) || name != 'shan') return false;
					return player.hasCard((card) => {
						return (card.viewAs || card.name) == 'xumou_jsrg' && card.name == 'shan';
					}, 'j');
				},
				ai: {
					respondShan: true,
					skillTagFilter(player, tag, arg) {
						return player.hasCard((card) => {
							return (card.viewAs || card.name) == 'xumou_jsrg' && card.name == 'shan';
						}, 'j');
					},
					order: 8,
					result: {
						player: 1,
					},
				},
				sourceSkill: 'bleach_yumou',
			},
			rec: {
				trigger: {
					player: 'dying',
				},
				filter(event, player) {
					return player.hasCard((card) => {
						return (card.viewAs || card.name) == 'xumou_jsrg' && ['tao', 'jiu'].includes(card.name);
					}, 'j');
				},
				forced: true,
				content() {
					player.chat('你以为我会虚化吗？这是崩玉的护主');
					const cards = player.getCards('j', (card) => {
						return (card.viewAs || card.name) == 'xumou_jsrg' && ['tao', 'jiu'].includes(card.name);
					});
					while (cards.some((card) => player.canUse(card, player))) {
						player.chooseUseTarget(cards.shift(), true);
					}
				},
				sourceSkill: 'bleach_yumou',
			},
		},
	},
	bleach_yuhe: {
		audio: 'ext:BLEACH/skill:1:mp3',
		derivation: ['bleach_pojian', 'bleach_lingwei'],
		trigger: {
			global: 'phaseEnd',
		},
		juexingji: true,
		forced: true,
		filter(event, player) {
			return game.hasGlobalHistory('cardMove', (evt) => evt.washCard);
		},
		content() {
			player.awakenSkill('bleach_yuhe');
			player.chat('看来已经到达极限了.身为死神的我.');
			player.bleachAwaken('bleach_re_lanran', 2);
			player.addBleachBuff('bleachMark_up');
			player.addSkills('bleach_pojian');
			player.disableSkill('bleach_yuhe', ['bleach_jinghua', 'bleach_spjinghua', 'bleach_rejinghua']);
			game.log(player, '的技能', '#g【镜花】', '失效了');
		},
		init(player) {
			player
				.when({ global: 'phaseEnd' })
				.filter((evt) => ui.cardPile.childNodes.length <= 70)
				.then(() => {
					player.chat(['凡是还在进化当中的事物,都是丑陋的', '灵魂...即将重组', '看来崩玉的意志...逐渐开始理解我的想法了', '终于崩玉的意志...开始理解我的心了'].randomGet());
					player.bleachAwaken('bleach_re_lanran', 1);
				});
		},
	},
	bleach_pojian: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			global: 'roundStart',
		},
		juexingji: true,
		forced: true,
		filter(event, player) {
			const num1 = player.getRoundHistory('sourceDamage', null, 1).reduce((sum, evt) => sum + evt.num, 0),
				num2 = player.getRoundHistory('damage', null, 1).reduce((sum, evt) => sum + evt.num, 0);
			return Math.abs(num1 - num2) >= 3;
		},
		content() {
			player.awakenSkill('bleach_pojian');
			player.chat('看来蛹篮的时刻结束了.太好了...');
			setTimeout(() => {
				player.chat('这样我就可以亲眼看见...尸魂界的终结');
			}, 2500);
			player.bleachAwaken('bleach_re_lanran', 3);
			player.loseMaxHp();
			player.addSkills('bleach_lingwei');
			player.enableSkill('bleach_yuhe');
			game.log(player, '回复了技能', '#g【镜花】');
		},
	},
	bleach_lingwei: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filter(event, player) {
			return !player.hasSkill('bleach_lingwei_used');
		},
		filterTarget(card, player, target) {
			return target != player;
		},
		async content(event, trigger, player) {
			const target = event.target;
			await target.loseHp();
			if (target.isIn()) {
				player.addSkill('bleach_lingwei_used');
				player.markAuto('bleach_lingwei_used', [target]);
			}
			if (
				game.getGlobalHistory('everything', (evt) => {
					return evt.name == 'dying' && evt.reason && evt.reason.parent.name == 'bleach_lingwei';
				}).length
			) {
				player.tempBanSkill('bleach_lingwei');
			}
		},
		subSkill: {
			used: {
				charlotte: true,
				trigger: {
					global: ['dieAfter', 'recoverAfter'],
				},
				filter(event, player) {
					return player.getStorage('bleach_lingwei_used').includes(event.player);
				},
				forced: true,
				popup: false,
				content() {
					player.popup('灵威');
					game.log(player, '回复了技能', '#g【灵威】');
					player.removeSkill('bleach_lingwei_used');
				},
				sourceSkill: 'bleach_lingwei_used',
			},
		},
		ai: {
			order: 10,
			result: {
				target(player, target) {
					return get.sgn(get.attitude(player, target)) * get.damageEffect(target, player, player);
				},
			},
		},
	},
	bleach_yihui: {
		audio: 'ext:BLEACH/skill:2:mp3',
		zhuSkill: true,
		enable: 'phaseUse',
		usable: 1,
		filterTarget(card, player, target) {
			return target.group == player.group;
		},
		selectTarget: -1,
		filter(event, player) {
			return player.hasZhuSkill('bleach_yihui');
		},
		async content(event, trigger, player) {
			const targets = event.targets;
			const toDebateList = [];
			while (targets.length) {
				const current = targets.shift();
				const { bool } = await current
					.chooseBool(`是否响应${get.translation(player)}的【议会】参与议事？`)
					.set('ai', () => {
						if (_status.currentPhase == get.player()) return true;
						return Math.random() < 0.5;
					})
					.forResult();
				if (bool) {
					toDebateList.add(current);
					current.popup('同意', 'wood');
					game.log(current, '#g同意', '参加', player, '的议事');
				} else {
					current.popup('拒绝', 'fire');
					game.log(current, '#r拒绝', '参加', player, '的议事');
				}
			}
			if (toDebateList.length) {
				player.chooseToDebate(toDebateList).set('callback', async (event) => {
					const { bool, opinion, targets } = event.debateResult;
					if (bool && opinion) {
						if (opinion == 'red') {
							await game.asyncDraw(targets);
						} else {
							const { bool, targets: targets2 } = await player
								.chooseTarget('是否令一名未议事的同势力角色失去1点体力？', (card, player, target) => {
									return !get.event('targets').includes(target) && target.group == player.group;
								})
								.set('targets', targets)
								.set('ai', (target) => {
									const player = get.player();
									return -get.attitude(player, target) / (1 + target.hp);
								})
								.forResult();
							if (bool) {
								player.line(targets2[0]);
								targets2[0].loseHp();
							}
						}
					}
				});
			}
		},
	},
	bleach_pozhi: {
		audio: 'ext:BLEACH/skill:4:mp3',
		trigger: {
			player: ['recoverAfter', 'dyingAfter'],
		},
		forced: true,
		filter(event, player) {
			return event.name == 'dying' || player.isHealthy();
		},
		async content(event, trigger, player) {
			const card = get.cardPile2((card) => get.tag(card, 'damage')),
				bool1 = player.isLinked(),
				bool2 = player.maxHp < player.getInitMaxHp();
			if (card) player.gain(card, 'gain2');
			if (bool1 || bool2) {
				let result = bool1 === true;
				if (bool1 && bool2) {
					result = await player
						.chooseBool('破桎:是否重置之？', '若选择<否>,则回复1点体力上限')
						.set('ai', () => true)
						.forResult();
				}
				if (result) player.link(false);
				else player.gainMaxHp();
			}
		},
	},
	bleach_jiangui: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToPlayered',
			target: 'useCardToTargeted',
		},
		forced: true,
		filter(event, player) {
			if (!event.card || !get.tag(event.card, 'damage')) return false;
			const num = get.cardNameLength(event.card);
			return typeof num == 'number' && num > 0 && !player.isLinked();
		},
		content() {
			'step 0';
			player.link(true);
			('step 1');
			player.draw(get.cardNameLength(trigger.card));
		},
	},
	bleach_egui: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'chooseToUse',
		filter(event, player) {
			return event.type == 'dying' && event.dying == player && player.isLinked();
		},
		limited: true,
		async content(event, trigger, player) {
			player.awakenSkill('bleach_egui');
			player.bleachAwaken('bleach_tybw_gengmu', 1);
			player.link(false);
			player.recoverTo(1);
			const targets = game.filterPlayer((current) => current.isMaxHp());
			const viewAs = new lib.element.VCard({ name: 'sha' });
			await player.useCard(viewAs, targets, false).set('oncard', () => {
				_status.event.directHit.addArray(game.players);
			});
			player.addTempSkill('bleach_egui_norecover', 'roundStart');
		},
		ai: {
			order: 1,
			save: true,
			skillTagFilter(player, tag, target) {
				if (player != target) return false;
			},
			result: {
				player(player) {
					if (player.hp <= 0) return 10;
					return 0;
				},
			},
		},
		subSkill: {
			norecover: {
				charlotte: true,
				mark: true,
				intro: {
					content: '不能回复体力',
				},
				trigger: {
					player: 'recoverBefore',
				},
				forced: true,
				firstDo: true,
				content() {
					trigger.cancel();
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'recover')) return 'zeroplayertarget';
						},
					},
				},
				sourceSkill: 'bleach_egui',
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_jiexing: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'damageBefore',
		},
		filter(event, player) {
			if (event.parent.type == 'card' || player.hasSkill('bleach_jiexing_round')) return false;
			return (
				event.source &&
				event.source != player &&
				player.hasCard((card) => {
					return get.subtype(card) == 'equip1' || _status.connectMode;
				}, 'he')
			);
		},
		check(event, player) {
			return get.attitude(player, event.player) > 0;
		},
		logTarget: 'source',
		async cost(event, trigger, player) {
			event.result = await player
				.chooseToDiscard(get.prompt('bleach_jiexing', trigger.source), 'he', `弃置一张武器牌并摸${get.cnNumber(player.getDamagedHp())}张牌,防止其对${get.translation(trigger.player)}造成的${trigger.num}点伤害`, (card, player) => {
					return get.subtype(card) == 'equip1';
				})
				.set('ai', (card) => {
					const event = get.event().parent,
						player = get.player();
					if (get.attitude(player, event.player) > 3 && (event.player.hp <= trigger.num || trigger.num >= 2)) return 8 - get.value(card);
					return 0;
				})
				.forResult();
		},
		async content(event, trigger, player) {
			player.addTempSkill('bleach_jiexing_round', 'roundStart');
			if (player.isDamaged()) await player.draw(player.getDamagedHp());
			trigger.cancel();
		},
		subSkill: {
			round: {
				charlotte: true,
			},
		},
	},
	bleach_kongju: {
		subSkill: {
			asn: {
				audio: 'ext:BLEACH/skill:4:mp3',
				sourceSkill: 'bleach_kongju',
			},
		},
		audio: 'ext:BLEACH/skill:4:mp3',
		audioname2: {
			bleach_asnodt_awaken: 'bleach_kongju_asn',
		},
		enable: 'phaseUse',
		filterTarget(card, player, target) {
			return target != player && target.countCards('h');
		},
		usable: 1,
		async content(event, trigger, player) {
			const target = event.target;
			const [card] = await player
				.choosePlayerCard(target, true, 'h', 'visible')
				.set('ai', (button) => {
					return get.event().getRand(button.link.cardid);
				})
				.forResult('cards');
			const videoId = lib.status.videoId++;
			game.addVideo('showCards', player[(`${get.translation(player)}对${get.translation(target)}发动了【恐惧】`, get.cardsInfo([card]))]);
			game.broadcastAll(
				(card, id, player, target) => {
					if (target === game.me) return;
					const dialog = ui.create.dialog(`${get.translation(player)}对${get.translation(target)}发动了【恐惧】`, [card]);
					dialog.forcebutton = true;
					dialog.videoId = id;
				},
				card,
				videoId,
				player,
				target
			);
			game.broadcastAll('closeDialog', videoId);
			const showed = await target
				.chooseToDiscard('h', [1, 2])
				.set('ai', (card) => {
					const player = get.player();
					if (player.countCards('h') <= 2 && player.hp == 1 && !player.hasCard((card) => ['tao', 'jiu'].includes(card.name))) return 10 - get.value(card);
					if (player.hp > 3) return 0;
					if (ui.selected.cards.length) return 0;
					return get.event().getRand(card.cardid);
				})
				.forResult('cards');
			if (target.getCards('h').some((cardx) => cardx == card)) target.damage();
		},
		ai: {
			order: 8.5,
			threaten: 2,
			result: {
				target(player, target) {
					return -target.countCards('h');
				},
			},
		},
	},
	bleach_yingjing: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		usable: 1,
		limited: true,
		async content(event, trigger, player) {
			player.awakenSkill('bleach_yingjing');
			await player.draw(2);
			const discarded = await player
				.chooseToDiscard('h', 2)
				.set('ai', (card) => {
					const player = get.player();
					const value = function (card, player) {
						const num = player.getUseValue(card);
						return num > 0 ? num + 1 / (get.value(card) || 0.5) + 7 : 7 - get.value(card);
					};
					if (ui.selected.cards.length && value(card, player) < value(ui.selected.cards[0], player)) return 20 - get.value(card);
					return value(card, player);
				})
				.forResult('cards');
			if (!discarded || !discarded.length) return;
			const cards = discarded.filterInD('d');
			if (cards.some((card) => player.hasUseTarget(card))) {
				const { bool, links } = await player
					.chooseButton(['樱景:是否使用其中的一张牌？', cards])
					.set('filterButton', (button) => {
						return get.event('player').hasUseTarget(button.link);
					})
					.set('ai', (button) => {
						return get.event('player').getUseValue(button.link);
					})
					.forResult();
				if (bool) {
					const card = links[0];
					player.$gain2(card, false);
					await player.chooseUseTarget(true, card, false);
					if (!player.storage.bleach_yingjing_check)
						player
							.when('phaseEnd')
							.then(() => {
								if (player.hasSkill('bleach_yingjing', null, false, false)) {
									player.restoreSkill('bleach_yingjing');
									game.log(player, '重置了', '#g【樱景】');
								}
								delete player.storage.bleach_yingjing_check;
							})
							.translation('樱景');
					player.setStorage('bleach_yingjing_check', true);
				}
			}
		},
		ai: {
			order(item, player) {
				let cards = player.getCards('h', (card) => get.info('clanlilun').filterCard(card, player) && player.getUseValue(card) > 0);
				cards = cards.filter((card) => cards.filter((i) => i.name == card.name).length > 1);
				if (!cards.length) return 1;
				cards.sort((a, b) => get.order(b) - get.order(a));
				return get.order(cards[0]) - 0.001;
			},
			result: {
				player: 1,
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_qienuo: {
		audio: 'ext:BLEACH/skill:2:mp3',
		derivation: 'bleach_huangji',
		trigger: {
			player: 'phaseDiscardEnd',
		},
		forced: true,
		filter(event, player) {
			const cards = player.getHistory('lose', (evt) => evt.type == 'discard' && evt.getParent('phaseDiscard') == event).reduce((list, evt) => list.addArray(evt.cards2), []);
			return cards.length > player.hp;
		},
		juexingji: true,
		content() {
			'step 0';
			player.awakenSkill('bleach_qienuo');
			if (player.bleachIs(['bleach_asnodt'])) {
				player.changeSkin({ characterName: 'bleach_asnodt' }, 'bleach_asnodt_awaken');
				game.mp417('asnodt_forushutendihhi', 7);
			}
			player.gainMaxHp();
			('step 1');
			player.recoverTo(player.maxHp);
			player.changeSkills(['bleach_huangji'], ['bleach_yingjing']);
			game.addGlobalSkill('bleach_qienuo_norecover');
			player
				.when('die')
				.assign({
					forceDie: true,
				})
				.then(() => {
					game.removeGlobalSkill('bleach_qienuo_norecover');
				});
		},
		subSkill: {
			norecover: {
				charlotte: true,
				trigger: {
					player: 'recoverBefore',
				},
				forced: true,
				firstDo: true,
				filter(event, player) {
					return event.card;
				},
				content() {
					trigger.cancel();
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'recover')) return 'zeroplayertarget';
						},
					},
				},
				sourceSkill: 'bleach_qienuo',
			},
		},
	},
	bleach_huangji: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'damageEnd',
			source: 'damageSource',
		},
		filter(event, player) {
			return !event.card && event.source && event.source.isIn();
		},
		forced: true,
		content() {
			trigger.source.chooseDrawRecover(true);
		},
	},
	bleach_weiya: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'roundStart',
		},
		forced: true,
		async content(event, trigger, player) {
			player.storage.bleach_weiya = 0;
			const cards = player.getCards('h', (card) => card.hasGaintag('bleach_weiya') && lib.filter.cardDiscardable(card, player));
			if (cards.length) {
				await player.discard(cards);
				const [target] = await player
					.chooseTarget('威压:令一名其他角色失去1点体力', true, lib.filter.notMe)
					.set('ai', (target) => {
						const player = get.player();
						return -get.attitude(player, target) / (1 + target.hp);
					})
					.forResult('targets');
				player.chat([`怎么了?`, `我听不到你的回应 ${get.translation(target)}`, `所谓力量 指的是这种东西`, `死神的战斗即是灵压的战斗`].randomGet());
				player.line(target, 'green');
				await target.loseHp();
			}
			player.removeGaintag('bleach_weiya');
			if (
				player
					.getAllHistory('custom', (evt) => evt.bleach_weiya_num)
					.map((evt) => evt.bleach_weiya_num)
					.includes(player.countCards('h'))
			)
				return;
			player.getHistory('custom').push({
				bleach_weiya_num: player.countCards('h'),
			});
			const { bool } = await player.chooseBool(get.prompt('bleach_weiya'), `你可以摸三张牌并展示一张手牌.`).set('choice', true).forResult();
			if (bool) {
				await player.draw(3);
				const [card] = await player
					.chooseCard(
						'〖威压〗:请展示一张手牌',
						'本轮手牌上限加此牌牌名字数,本轮结束时弃置此牌以令一名其他角色失去1点体力.',
						(card, player) => {
							const num = get.cardNameLength(card);
							return typeof num == 'number' && num > 0;
						},
						true
					)
					.set('ai', (card) => {
						return get.cardNameLength(card);
					})
					.forResult('cards');
				if (card) {
					player.showCards(card, get.translation(player) + '发动了【威压】');
					player.addGaintag(card, 'bleach_weiya');
					const num = get.cardNameLength(card);
					player.storage.bleach_weiya = num;
					player.markSkill('bleach_weiya');
				}
			}
		},
		ai: {
			threaten: 2,
		},
		mod: {
			maxHandcard(player, num) {
				if (typeof player.storage.bleach_weiya == 'number') return num + player.storage.bleach_weiya;
			},
		},
		intro: {
			content: '本轮灵压:#',
			content(storage, player) {
				let str = '<li>本轮灵压:' + storage;
				const nums = player
					.getAllHistory('custom', (evt) => evt.bleach_weiya_num)
					.map((evt) => evt.bleach_weiya_num)
					.sort();
				if (nums.length) {
					str += '<br><li>已记录手牌数:' + get.translation(nums);
				}
				return str;
			},
		},
	},
	bleach_cuifeng: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'phaseEnd',
		},
		filter(event, player) {
			const cards = lib.skill.bleach_cuifeng.getCards();
			return (
				cards &&
				cards.some((card) => {
					return player.hasUseTarget({
						name: card.name,
						nature: card.nature,
					});
				}) &&
				player.countCards('he')
			);
		},
		getCards() {
			const history = game.getGlobalHistory('cardMove', (evt) => {
				if (evt.name != 'lose' && evt.name != 'cardsDiscard') return false;
				if (evt.name == 'lose' && evt.position != ui.discardPile) return false;
				return true;
			});
			const cards = history.reduce((list, evt) => list.addArray(evt.cards.filterInD('d')), []);
			const vcards = [];
			if (cards.filter((i) => get.type(i) == 'trick').length == 1) vcards.addArray(cards.filter((i) => get.type(i) == 'trick'));
			if (cards.filter((i) => get.tag(i, 'damage') && get.type(i) != 'delay').length == 1) vcards.addArray(cards.filter((i) => get.tag(i, 'damage') && get.type(i) != 'delay'));
			if (vcards.length) return vcards;
			return null;
		},
		async cost(event, trigger, player) {
			const cards = lib.skill.bleach_cuifeng.getCards().filter((card) => player.hasUseTarget({ name: card.name }));
			let str = `将一张牌当${get.translation(cards[0])}` + (cards.length == 2 ? `,或${get.translation(cards[1])}` : ``) + `使用.`;
			const result = await player
				.chooseCard(get.prompt('bleach_cuifeng'), str, 'he', (card, player) => {
					return game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
				})
				.set('ai', (card) => {
					const player = get.player();
					if (cards.some((i) => player.getRoundHistory('useCard', (evt) => get.type2(evt.card) == get.type2(i)))) return player.getUseValue(cards[0]) - get.value(card);
					return 0;
				})
				.forResult();
			if (result.bool) {
				const {
					result: { links },
				} =
					cards.length == 1
						? { result: { links: cards } }
						: await player.chooseButton(
							['###摧锋###<div class="text center">视为使用其中一张牌</div>', cards],
							true,
							(button) => {
								return get.player().getUseValue(button.link, true);
							},
							(button) => get.player().hasUseTarget(button.link)
						);
				event.result = { bool: true, cost_data: links[0], cards: result.cards };
			}
		},
		async content(event, trigger, player) {
			const card = event.cost_data;
			const cardx = { name: card.name, nature: get.nature(card) };
			await player.chooseUseTarget(cardx, event.cards, true, false);
		},
	},
	bleach_duoqu: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		usable: 1,
		filterTarget(card, player, target) {
			return target != player && target.countCards('he');
		},
		filterCard: true,
		selectCard() {
			const player = get.player(),
				min = (game.players.length - 1, player.countCards('he'));
			return [1, min];
		},
		position: 'he',
		complexCard: true,
		complexSelect: true,
		selectTarget() {
			if (ui.selected.targets.length > ui.selected.cards.length) {
				game.uncheck('target');
			}
			return ui.selected.cards.length;
		},
		filter(event, player) {
			return player.countCards('he');
		},
		check(card) {
			if (!ui.selected.cards.length) return 7 - get.value(card);
			return 0;
		},
		multiline: true,
		multitarget: true,
		async content(event, trigger, player) {
			player.gainMultiple(event.targets, 'he');
			if (event.targets.length >= 2) await player.loseHp();
		},
		ai: {
			order: 9.5,
			result: {
				target: -1,
			},
		},
	},
	bleach_shengyu: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToPlayered',
			target: 'useCardToTargeted',
		},
		filter(event, player) {
			return event.card && event.card.name == 'sha';
		},
		check(event, player) {
			return player.hasUseTarget(ui.cardPile.firstChild);
		},
		limited: true,
		async content(event, trigger, player) {
			player.awakenSkill('bleach_shengyu');
			const cards = game.cardsGotoOrdering(get.cards(5)).cards.slice();
			player.showCards(cards, get.translation(player) + '发动了【圣域礼赞】');
			while (cards.some((i) => player.hasUseTarget(i, false, false))) {
				const result = await player
					.chooseButton(['圣域礼赞:是否使用其中的一张牌？', cards])
					.set('filterButton', (button) => {
						return get.player().hasUseTarget(button.link, false, false);
					})
					.set('ai', (button) => {
						const player = get.player(),
							card = button.link,
							cards = get.event().parent.cards,
							val = player.getUseValue(card) + 0.01;
						return get.order(card) + val / 5;
					})
					.forResult();
				if (result.links?.length) {
					const card = result.links[0];
					cards.remove(card);
					player.$gain2(card, false);
					player.chooseUseTarget(true, card, false);
				} else return;
			}
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_tybwnifu: {
		audio: 'ext:BLEACH/skill:2:mp3',
		mod: {
			targetInRange(card, player, target) {
				if (card.storage && card.storage.bleach_tybwnifu) return true;
			},
			cardUsable(card, player, target) {
				if (card.storage && card.storage.bleach_tybwnifu) return true;
			},
		},
		enable: ['chooseToUse', 'chooseToRespond'],
		filter(event, player) {
			return get
				.inpileVCardList((info) => {
					const name = info[2];
					if (name != 'sha' && name != 'shan') return false;
					return get.type(name) == 'basic';
				})
				.some((card) => player.hasCard((cardx) => event.filterCard({ name: card[2], nature: card[3], cards: [cardx] }, player, event), 'hes'));
		},
		usable: 1,
		chooseButton: {
			dialog(event, player) {
				const list = get
					.inpileVCardList((info) => {
						const name = info[2];
						if (name != 'sha' && name != 'shan') return false;
						return get.type(name) == 'basic';
					})
					.filter((card) => player.hasCard((cardx) => event.filterCard({ name: card[2], nature: card[3], cards: [cardx] }, player, event), 'hes'));
				return ui.create.dialog('逆抚', [list, 'vcard']);
			},
			filter(button, player) {
				return _status.event.parent.filterCard({ name: button.link[2], nature: button.link[3] }, player, _status.event.parent);
			},
			check(button) {
				if (_status.event.parent.type != 'phase') return 1;
				const player = get.event('player'),
					value = player.getUseValue({ name: button.link[2], nature: button.link[3] });
				return value;
			},
			backup(links, player) {
				return {
					audio: 'bleach_tybwnifu',
					filterCard: true,
					popname: true,
					check(card) {
						const name = lib.skill.olsbweilin_backup.viewAs.name,
							namex = card.name;
						return 6 - get.value(card);
					},
					position: 'hes',
					viewAs: { name: links[0][2], nature: links[0][3], storage: { bleach_tybwnifu: true } },
					precontent() {
						player
							.when('useCard')
							.filter((evt) => evt.skill == 'bleach_tybwnifu_backup')
							.then(() => {
								game.log(trigger.card, '不计入次数上限且无距离限制');
								if (trigger.addCount !== false) {
									trigger.addCount = false;
									const stat = player.stat[player.stat.length - 1].card;
									if (typeof stat[trigger.card.name] === 'number') stat[trigger.card.name]--;
								}
							});
					},
				};
			},
			prompt(links, player) {
				return '将一张牌当作' + (get.translation(links[0][3]) || '') + '【' + get.translation(links[0][2]) + '】使用';
			},
		},
		hiddenCard(player, name) {
			if (!lib.inpile.includes(name) || name != 'jiu') return false;
			return get.type(name) == 'basic' && !player.getStat('skill').bleach_tybwnifu && player.countCards('hes');
		},
		ai: {
			fireAttack: true,
			respondSha: true,
			respondShan: true,
			skillTagFilter(player, tag, arg) {
				if (player.getStat('skill').bleach_tybwnifu || !player.countCards('hes')) return false;
			},
			order: 3.1,
			result: {
				player: 1,
			},
		},
	},
	bleach_daoxuan: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'roundStart',
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt2('bleach_daoxuan'), lib.filter.notMe)
				.set('ai', (target) => {
					const player = get.player(),
						att = get.attitude(player, target);
					if (player.needsToDiscard()) return 0;
					return -Math.sqrt(1 - target.countCards('h')) * att;
				})
				.forResult();
		},
		async content(event, trigger, player) {
			const target = event.targets[0];
			for (let current of [player, target]) {
				current.addTempSkill('bleach_daoxuan_eff', 'roundStart');
			}
		},
		group: 'bleach_daoxuan_draw',
		subSkill: {
			draw: {
				trigger: {
					global: 'useCard',
				},
				//每回合首张底牌与牌名不同的牌被使用后,你摸一张牌
				filter(event, player) {
					if (event.cards?.length == 1 && event.cards[0].name == event.card.name) return false;
					return true;
				}, //QQQ
				forced: true,
				popup: false,
				content() {
					player.draw();
				},
			},
			eff: {
				mod: {
					cardname(card, player) {
						if (card.name == 'shan') return 'sha';
						if (card.name == 'sha') return 'shan';
					},
				},
				charlotte: true,
			},
		},
	},
	bleach_xiesai: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		limited: true,
		filterTarget: lib.filter.notMe,
		selectTarget: -1,
		multiline: true,
		contentBefore() {
			player.awakenSkill('bleach_xiesai');
			if (player.bleachIs(['bleach_tybw_pingzi'])) {
				game.mp417('hirako_bankai', 4.7);
				game.playBleach('bleach_xiesai3');
			}
		},
		async content(event, trigger, player) {
			const target = event.target;
			if (!target.countCards('he')) return;
			const [cards, targets] = await target
				.chooseCardTarget({
					prompt2: '逆样邪八宝塞:将一张牌当【杀】对' + get.translation(player) + '使用',
					position: 'he',
					filterCard(card, player) {
						return game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
					},
					filterTarget(card, player, target) {
						var getn = function (target) {
							return player.getAllHistory('sourceDamage', (evt) => evt.player == target).reduce((sum, evt) => (sum += evt.num), 0);
						};
						if (
							game.hasPlayer((current) => {
								return current != player && getn(current) < getn(target);
							})
						) {
							return false;
						}
						return player.canUse({ name: 'sha' }, target, false);
					},
					ai2(target) {
						const player = get.player();
						return get.effect(target, { name: 'sha' }, player, player);
					},
					forced: true,
				})
				.forResult('cards', 'targets');
			const cardx = { name: 'sha' };
			await target.useCard(cardx, cards, targets, false);
		},
		contentAfter() {
			player.chooseUseTarget('sha', '是否使用一张【杀】？', false, 'nodistance');
		},
		ai: {
			order: 1,
			result: {
				player(player) {
					let num = 0;
					const players = game.filterPlayer();
					for (var i of players) {
						const att = get.sgn(get.attitude(player, i));
						if (i != player && i.hp <= 3) {
							if (i.hp == 1) num += att / i.hp;
							else if (i.hp == 2) num += att / 2 / i.hp;
							else if (i.hp == 3) num += att / 4 / i.hp;
						}
						if (i.hp == 1) num += att * 1.5;
					}
					if (player.hp <= 2) {
						return -game.players.length / 4 - num;
					}
					return -game.players.length / 3 - num;
				},
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_fengqie: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: ['loseAfter', 'damageEnd', 'recoverEnd', 'loseHpEnd'],
			global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
		},
		forced: true,
		filter(event, player, name) {
			if (player.countCards('h') != player.hp) return false;
			if (['damage', 'recover', 'loseHp'].includes(event.name)) return true;
			let cards1 = event.getl(player).hs,
				cards2 = [];
			if (event.getg) cards2 = event.getg(player); //QQQ
			return cards1.length || cards2.length;
		},
		usable: 1,
		content() {
			'step 0';
			let filterTarget = function (card, player, target) {
				return player.inRange(target);
			};
			if (game.hasPlayer((current) => filterTarget('L∞pers', player, current))) {
				const bool = player.isHealthy();
				player.chooseTarget('风切:对攻击范围内的一名角色造成1点伤害' + (bool ? '' : ',或点取消回复1点体力'), filterTarget, bool).set('ai', (target) => {
					const player = get.player();
					return get.damageEffect(target, player, player);
				});
			} else event._result = { bool: false };
			('step 1');
			if (result.targets?.length) {
				const target = result.targets[0];
				player.line(target, 'green');
				target.damage();
			} else player.recover();
		},
	},
	bleach_suzhan: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'phaseBegin',
		},
		forced: true,
		content() {
			'step 0';
			player.damage('nosource');
			player.draw();
			('step 1');
			trigger.phaseList.splice(trigger.num, 0, 'phaseUse|bleach_tybwduanfeng');
		},
		ai: {
			halfneg: true,
		},
	},
	bleach_tybwduanfeng: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		limited: true,
		filterCard: true,
		selectCard() {
			const player = get.player();
			if (ui.selected.cards.length) return [Math.floor(player.countCards('h') / 2), Infinity];
			return [0, 1];
		},
		check: () => 0,
		contentBefore() {
			player.awakenSkill('bleach_tybwduanfeng');
			game.switchBleachBgm('2211TYBW_RacyOrchestra');
		},
		content() {
			'step 0';
			player.loseMaxHp();
			('step 1');
			if (!cards.length) player.draw(3);
			player
				.when('phaseUseEnd')
				.then(() => {
					if (bool) player.draw(3);
					else if (player.countCards('h')) player.chooseToDiscard('h', '铁拳断风:弃置至少一半手牌', [Math.floor(player.countCards('h') / 2), Infinity], true);
				})
				.vars({ bool: cards.length });
		},
		ai: {
			order: 1,
			result: {
				player: 1,
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_shengchang: {
		enable: 'phaseUse',
		limited: true,
		zhuanhuanji: 'number',
		mark: true,
		marktext: '☯',
		intro: {
			markcount: () => 0,
			content(storage) {
				return '限定技,转换技.你可以将一张' + ((storage || 0) % 2 ? '黑色牌当【过河拆桥】' : '红色牌当【顺手牵羊】') + '使用.';
			},
		},
		content() {
			'step 0';
			player.awakenSkill('bleach_shengchang', true);
			player.changeZhuanhuanji('bleach_shengchang');
			('step 1');
			if ((player.storage.bleach_shengbie || 0) % 2) {
				var cards = get.cards(5);
				event.cards = cards.slice(0);
				while (cards.length) ui.cardPile.insertBefore(cards.pop().fix(), ui.cardPile.firstChild);
				game.updateRoundNumber();
				player.damage();
			} else {
				player
					.chooseControl(['basic', 'trick'])
					.set('prompt', '声明一种类型的牌')
					.set('ai', () => {
						var player = _status.event.player;
						if (!player.hasShan()) return 'basic';
						return ['trick', 'basic'].randomGet();
					});
			}
			('step 2');
			if (player.isIn()) {
				if ((player.storage.bleach_shengbie || 0) % 2) {
					player
						.chooseButton(['大圣弓:是否使用其中一张牌？', cards])
						.set('filterButton', (button) => {
							var player = _status.event.player;
							var card = button.link;
							var cardx = {
								name: card.name,
								nature: get.nature(card, get.owner(card)),
								cards: [card],
							};
							return player.hasUseTarget(cardx, null, false);
						})
						.set('ai', (button) => {
							var card = button.link;
							return _status.event.player.getUseValue(card);
						});
				} else {
					player.storage.bleach_shengchang_effect = result.control;
					player.addTempSkill('bleach_shengchang_effect', { player: 'phaseBegin' });
					event.finish();
				}
			}
			('step 3');
			if (result.links?.length) {
				var card = result.links[0];
				cards.remove(card);
				var cardx = {
					name: card.name,
					nature: get.nature(card, get.owner(card)),
					cards: [card],
				};
				var next = player.chooseUseTarget(cardx, [card], true, false);
				if (card.name != cardx.name || !get.is.sameNature(card, cardx)) next.viewAs = true;
				var owner = get.owner(card);
				if (owner != player && get.position(card) == 'h') {
					next.throw = false;
					next.set('owner', owner);
				}
				if (event.cards.length) event.goto(2);
			}
		},
		init: (player, skill) => (player.storage[skill] = false),
		subSkill: {
			effect: {
				trigger: {
					target: 'useCardTotargeted',
				},
				filter(event, player) {
					return event.player != player && get.type2(event.card) == player.storage.bleach_shengchang_effect && player.canUse('sha', event.player, false);
				},
				forced: true,
				content() {
					player.useCard({ name: 'sha' }, trigger.player, false, 'noai');
				},
				mark: true,
				marktext: '域',
				intro: {
					name: '圣域礼赞',
					content: '对你使用$牌的其他角色会被你使用【杀】',
				},
			},
		},
	},
	bleach_hunke: {
		enable: 'phaseUse',
		usable: 1,
		filter(event, player) {
			return player.countCards('he', { color: 'red' }) > 0;
		},
		filterTarget(card, player, target) {
			return target != player && !target.storage.schrift;
		},
		position: 'he',
		filterCard: {
			color: 'red',
		},
		check(card) {
			return 8 - get.value(card);
		},
		content() {
			'step 0';
			player.markAuto('bleach_cixue_used', [target]);
			('step 1');
			if (!_status.characterlist) {
				var list = get.charactersOL();
			}
			_status.characterlist.randomSort();
			var skills = [];
			for (var i of _status.characterlist) {
				var character = lib.character[i];
				if (character && character[3]) {
					for (var j of character[3]) {
						if (skills.includes(j)) continue;
						var info = get.info(j);
						if (info && !info.charlotte) {
							skills.add(j);
							continue;
						}
					}
				}
				if (skills.length >= 10) break;
			}
			skills.randomSort();
			if (!target.storage.bleach_cixue_skill) target.storage.bleach_cixue_skill = [];
			target.storage.bleach_cixue_skill.push(skills.randomGet());
			target.addSkill('bleach_cixue_skill');
		},
		ai: {
			threaten: 1.5,
			order: 7,
			result: {
				target(player, target) {
					return 0.5 * Math.sqrt(get.attitude(player, target));
				},
			},
		},
		subSkill: {
			used: {
				charlotte: true,
				intro: {
					content: '已对$发动过技能',
				},
			},
			skill: {
				silent: true,
				trigger: {
					player: 'phaseEnd',
				},
				charlotte: true,
				content() {
					var skill = player.storage.bleach_cixue_skill,
						list = skill[0];
					player.addSkills(skill);
					list = list.slice(7, 8);
					var str = '我的圣文字是...' + list + '!' + get.translation(skill) + '!';
					player.chat(str.toUpperCase());
					player.removeSkill('bleach_cixue_skill');
				},
			},
		},
	},
	bleach_shengbie: {},
	bleach_cuanduo: {},
	bleach_test: {
		enable: 'phaseUse',
		filterTarget: (card, player, target) => target == player,
		selectTarget: -1,
		content() {
			'step 0';
			if (player.getStat('skill').bleach_test == 1) {
				target.addBleachBuff('bleachMark_down', 1);
			}
			if (player.getStat('skill').bleach_test == 2) {
				target.addBleachBuff('bleachMark_up', 1);
			}
			if (player.getStat('skill').bleach_test == 3) {
				target.addBleachBuff('bleachMark_down', 1);
			}
			if (player.getStat('skill').bleach_test == 4) {
				target.addBleachBuff('bleachMark_down', 1);
			}
			('step 1');
			if (player.getStat('skill').bleach_test == 1) {
				target.storage.bleachMark_uod_limit[1][0] = 9;
			}
		},
	},
	bleach_sanhun: {
		trigger: {
			player: 'phaseBegin',
		},
		filter(event, player) {
			return !player.storage.bleach_sanhun;
		},
		forced: true,
		content() {
			'step 0';
			player.storage.bleach_sanhun = true;
			player.draw(game.players.length);
			('step 1');
			player.chooseCard('h', '选择要分配的手牌', game.players.length - 1, true);
			('step 2');
			var cards = result.cards.randomSort();
			var targets = game.filterPlayer((current) => current != player).randomSort();
			for (var i = 0; i < targets.length; i++) {
				targets[i].gain(i, player, 'give', 'bySelf');
			}
		},
		group: ['bleach_sanhun_lose', 'bleach_sanhun_gain'],
		subSkill: {
			gain: {
				trigger: {
					global: 'die',
				},
				forced: true,
				content() {
					var num = 1,
						gains = [];
					var skills = trigger.player.getSkills(null, false, false);
					for (var i = 0; i < skills.length; i++) {
						if (lib.silverSoul.includes(skills[i]) || lib.goldenSoul.includes(skills[i]) || lib.cyanSoul.includes(skills[i]) || lib.legendarySoul.includes(skills[i])) {
							if (player.hasSkill(skills[i]) || lib.changeCharacterSoul.includes(skills[i])) {
								num += 2;
							} else {
								gains.push(skills[i]);
							}
						}
					}
					player.draw(num);
					if (gains.length) player.addSkill(gains);
					player.chat(['今天,世界在我眼中依然鲜明...', '感谢死去之人吧', '向这可恨的世界诀别吧', '现在,回到我的身边', '你做的很好,' + get.translation(trigger.player) + '!'].randomGet());
				},
			},
			lose: {
				trigger: {
					global: 'roundStart',
				},
				forced: true,
				filter(event, player) {
					var bool = true,
						lose = true;
					var history = player.actionHistory;
					for (var i = history.length - 2; i >= 0; i--) {
						if (bool) if (history[i].sourceDamage.length) lose = false;
						if (history[i].isRound) {
							if (bool) bool = false;
							else break;
						}
					}
					return game.roundNumber > 1 && lose;
				},
				content() {
					var num = 1,
						lose = [];
					var skills = player.getSkills(null, false, false);
					for (var i = 0; i < skills.length; i++) {
						if (lib.silverSoul.includes(skills[i]) || lib.goldenSoul.includes(skills[i]) || lib.cyanSoul.includes(skills[i]) || lib.legendarySoul.includes(skills[i])) {
							lose.push(skills[i]);
						}
					}
					if (lose.length) player.removeSkill(lose.randomGets([1, 2].randomGet()));
					else {
						player.loseHp([1, 2].randomGet());
					}
					game.log(player, '陛下的力量正在失去...');
				},
			},
		},
	},
	bleach_shengbie: {
		enable: 'phaseUse',
		filterTarget(card, player, target) {
			return player.getStorage('bleach_cixue_used').includes(target);
		},
		selectTarget: [1, Infinity],
		limited: true,
		multiline: true,
		multitarget: true,
		content() {
			'step 0';
			player.awakenSkill('bleach_shengbie');
			player.chat('我们当然是同志关系 同志间就应该互相帮助');
			targets = targets.filter((target) => !target.bleachIs(['bleach_shitianyulong', 'bleach_7th_shitianyulong', 'bleach_2022_shitianyulong']));
			('step 1');
			if (targets.length) {
				targets.shift().damage('nocard');
				event.redo();
			}
			('step 2');
			player.chooseTarget([1, Math.min(Infinity, targets.length)], '令任意名角色回复1点体力', (card, player, target) => {
				return target.isDamaged();
			}).ai = function (target) {
				return get.recoverEffect(target, player, player) > 0;
			};
			('step 3');
			if (result.targets?.length) {
				for (var current of result.targets) current.recover();
			}
		},
		ai: {
			order: 1,
			result: {
				target(player, target) {
					if (!game.hasPlayer((current) => get.attitude(player, target) > 0 && target.hp <= 2)) return 0;
					return get.damageEffect(current, player, player);
				},
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_cuanduo: {
		enable: 'phaseUse',
		usable: 1,
		filterTarget(card, player, target) {
			var list = target.getGainableSkills();
			return target != player && list.length && (!target.isArrancar() || !target.isKami());
		},
		content() {
			'step 0';
			var list = target.getGainableSkills();
			list.remove('bleach_cuanduo');
			if (!list.length) return;
			player
				.chooseControl(list)
				.set(
					'choiceList',
					list.map(function (i) {
						return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
					})
				)
				.set('displayIndex', false)
				.set('prompt', '选择' + get.translation(target) + '一个技能掠夺之')
				.set('ai', () => {
					var list = _status.event.controls.slice();
					return list.sort((a, b) => {
						return get.skillRank(b, 'in') - get.skillRank(a, 'in');
					})[0];
				});
			('step 1');
			if (result.control) {
				game.countPlayer2((current) => current.enableSkill('bleach_cuanduo'));
				player.removeSkill(player.storage.bleach_cuanduo);
				target.disableSkill('bleach_cuanduo', result.control);
				player.addSkillLog(result.control);
				player.storage.bleach_cuanduo = result.control;
				player.markSkill('bleach_cuanduo');
			}
		},
		intro: {
			content: '当前篡夺技能:$',
		},
		ai: {
			threaten: 1.5,
			order: 13,
			result: {
				target: -1,
			},
		},
	},
	bleach_zhousheng: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'phaseEnd',
		},
		filter(event, player) {
			if (event.skill == 'bleach_zhousheng' || player.hasSkill('bleach_zhousheng_round')) return false;
			const list = _status.event.parent.phaseList.map((i) => i.split('|')[0]);
			return list.slice(0, _status.event.parent.num).filter((i) => player.getHistory('damage', (evt) => evt.getParent(i).name == i).length + player.getHistory('sourceDamage', (evt) => evt.getParent(i).name == i).length).length;
		},
		check: () => true,
		content() {
			let list = ['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'];
			for (var i = 0; i < lib.phaseName.length; i++) {
				const phase = lib.phaseName[i];
				if (!player.hasHistory('damage', (evt) => evt.getParent(phase).name == phase) && !player.hasHistory('sourceDamage', (evt) => evt.getParent(phase).name == phase)) {
					list.remove(phase);
				}
			}
			player.addTempSkill('bleach_zhousheng_round', 'roundStart');
			player.phase('nodelay').set('phaseList', list);
			player.draw();
			if (player.getAllHistory('useSkill', (evt) => evt.skill == 'bleach_zhousheng').length == 4) {
				player.bleachAwaken('bleach_hougyoku_wuerqiaola', 1, 'FuerZa:mp3');
			}
		},
		ai: {
			maixie: true,
			maixie_hp: true,
			skillTagFilter(player, tag, arg) {
				return !player.hasSkill('bleach_zhousheng_round');
			},
		},
		subSkill: {
			round: {
				charlotte: true,
			},
		},
	},
	bleach_lanke: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: ['damageEnd', 'recoverEnd', 'loseHpEnd'],
		},
		filter(event, player) {
			return game.getGlobalHistory('changeHp', (evt) => evt.player == player).length == 1;
		},
		async cost(event, trigger, player) {
			event.result = await await player
				.chooseTarget(get.prompt2('bleach_lanke'), (card, player, target) => {
					return target != player && target.countDiscardableCards(player, 'he') > 0;
				})
				.set('ai', (target) => {
					const player = get.player();
					return get.effect(target, { name: 'guohe_copy2' }, player, player);
				})
				.forResult();
		},
		async content(event, trigger, player) {
			player.discardPlayerCard(event.targets[0], 'he', true);
		},
	},
	bleach_fengbao: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: ['loseAfter', 'loseAsyncAfter'],
		},
		forced: true,
		popup: false,
		abnormal: true,
		filter(event, player) {
			if (!event.visible) return false;
			const list = player.getStorage('bleach_fengbao');
			if (event.player == player) {
				if (list.length == 4) return true;
				for (var i of event.cards2) {
					const suit = i.suit;
					if (!list.includes(suit)) return true;
				}
			} else if (event.name == 'lose') {
				if (event.type != 'discard') return false;
				if ((event.discarder || event.getParent(2).player) != player) return false;
				return event.getl(event.player).cards2.length;
			} else if (event.type == 'discard') {
				if (!event.discarder) return false;
				return (
					event.discarder == player &&
					game.hasPlayer((current) => {
						return current != event.discarder && event.getl(current).cards2.length;
					})
				);
			}
			return false;
		},
		async content(event, trigger, player) {
			const suits = [];
			for (var i of trigger.cards2) suits.add(i.suit);
			player.markAuto('bleach_fengbao', suits);
			if (player.getStorage('bleach_fengbao').length == 4) {
				player.unmarkAuto('bleach_fengbao', lib.suit.slice(0));
				const { bool, targets } = await player
					.chooseTarget(get.prompt2('bleach_fengbao'), [1, 4], (card, player, target) => {
						return player.canUse('bleach_card_cero', target);
					})
					.set('ai', (target) => {
						const player = get.player();
						return get.effect(target, { name: 'bleach_card_cero' }, player, player);
					})
					.forResult();
				if (bool) {
					const viewAs = new lib.element.VCard({ name: 'bleach_card_cero', storage: { bleachMark_fire: 1, bleachMark_weak: 1 } });
					await player.useCard(viewAs, targets);
				}
			}
		},
		intro: {
			content: '当前花色:$',
		},
	},
	bleach_jili: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			source: 'damageSource',
		},
		getIndex(event, player, triggername) {
			return Math.min(event.num, 9) || 1;
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseCard(get.prompt2('bleach_jili'), 'he', lib.filter.cardRecastable)
				.set('ai', (card) => {
					if (trigger.parent.name == 'sha') return 9 - get.value(card);
					return 6 - get.value(card);
				})
				.forResult();
		},
		async content(event, trigger, player) {
			const suit = event.cards[0].suit;
			player.recast(event.cards);
			if (trigger.player.isIn() && !trigger.player.isLinked()) {
				trigger.player.link(true);
				player.draw();
			}
		},
	},
	bleach_suotian: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		usable: 1,
		abnormal: true,
		viewAs(cards, player) {
			return { name: 'sha', suotian: true, storage: { bleachMark_weak: cards.length } };
		},
		filter(event, player) {
			return player.countCards('hs') > 0;
		},
		filterCard: true,
		selectCard: [1, Infinity],
		position: 'hes',
		check(card) {
			return 6.3 - get.value(card);
		},
		ai: {
			order: 6.5,
			threaten: 1.4,
			unequip: true,
			bleachGuardBreak: true,
			skillTagFilter(player, tag, arg) {
				if (!arg || !arg.card || arg.card.suotian != true) return false;
			},
		},
		mod: {
			targetInRange(card, player, target) {
				if (card.suotian) return true;
			},
			cardUsable(card, player, target) {
				if (card.suotian) return true;
			},
		},
		group: 'bleach_suotian_eff',
		subSkill: {
			eff: {
				trigger: {
					player: 'useCard',
				},
				silent: true,
				filter(event, player) {
					return event.card && event.card.suotian;
				},
				content() {
					if (trigger.addCount !== false) {
						trigger.addCount = false;
						const stat = player.stat[player.stat.length - 1].card;
						if (typeof stat[trigger.card.name] === 'number') stat[trigger.card.name]--;
					}
				},
			},
		},
	},
	bleach_dijian: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'phaseJieshuBegin',
			target: 'useCardToTargeted',
		},
		filter(event, player) {
			const cards = [];
			game.getGlobalHistory('cardMove', (evt) => {
				if ((evt.name == 'lose' && evt.position == ui.discardPile) || evt.name == 'cardsDiscard') {
					cards.addArray(evt.cards.filterInD('d'));
				}
			});
			return (
				cards.some((card) => {
					return (
						player.hasUseTarget({
							name: card.name,
							nature: card.nature,
						}) && !player.getStorage('bleach_dijian_used').includes(card.name)
					);
				}) &&
				(event.name == 'phaseJieshu' || event.card.name == 'sha')
			);
		},
		async cost(event, trigger, player) {
			const cards = [];
			game.getGlobalHistory('cardMove', (evt) => {
				if ((evt.name == 'lose' && evt.position == ui.discardPile) || evt.name == 'cardsDiscard') {
					cards.addArray(evt.cards.filterInD('d'));
				}
			});
			const result = await player
				.chooseButton(
					['帝剑:你可以使用一张本回合内进入弃牌堆的牌.', cards.filter((i) => player.hasUseTarget(i))],
					(button) => {
						return get.player().getUseValue(button.link);
					},
					(button) => {
						return !get.player().getStorage('bleach_dijian_used').includes(button.link.name);
					}
				)
				.forResult();
			if (result.bool) event.result = { bool: true, cost_data: result.links };
		},
		async content(event, trigger, player) {
			const card = event.cost_data[0];
			player.addTempSkill('bleach_dijian_used');
			player.markAuto('bleach_dijian_used', [card.name]);
			player.chooseUseTarget(card, true, false);
		},
		subSkill: {
			used: {
				charlotte: true,
			},
		},
	},
	bleach_wangjing: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'phaseZhunbeiBegin',
		},
		group: 'bleach_wangjing_buff',
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt('bleach_wangjing'), '你可以与一名其他角色各摸一张牌并弃置一张牌.', lib.filter.notMe)
				.set('ai', (target) => {
					const att = get.attitude(get.player(), target);
					if (att > 0) return 0.5 * Math.sqrt(Math.min(3, target.countCards('he')));
					return !target.countCards('he');
				})
				.forResult();
		},
		async content(event, trigger, player) {
			const list = [player, event.targets[0]];
			await game.asyncDraw(list);
			const result = await player
				.chooseCardOL(list, 'he', true, '弃置一张牌', (card, player, target) => {
					return lib.filter.cardDiscardable(card, player, 'bleach_wangjing');
				})
				.forResult();
			const lose_list = [],
				cards = [];
			for (var i = 0; i < result.length; i++) {
				const current = list[i],
					cards2 = result[i].cards;
				cards.push(cards2);
				lose_list.push([current, cards2]);
			}
			await game.loseAsync({ lose_list: lose_list }).setContent('discardMultiple');
		},
		subSkill: {
			buff: {
				audio: 'bleach_wangjing',
				forced: true,
				trigger: {
					global: 'damageEnd',
				},
				filter(event, player) {
					return event.player == _status.currentPhase && event.player.getHistory('damage').indexOf(event) == 0;
				},
				content() {
					'step 0';
					player.draw();
					('setp 1');
					player.addBleachBuff('bleachEffect_wudi');
				},
				sourceSkill: 'bleach_wangjing',
			},
		},
	},
	bleach_liaoshuang: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToPlayered',
		},
		filter(event, player) {
			return event.target != player && event.targets.length == 1 && event.target.hasCard((card) => !get.is.shownCard(card), 'h');
		},
		logTarget: 'target',
		check(event, player) {
			return get.attitude(player, event.target) <= 0;
		},
		content() {
			const cards = trigger.target.getCards('h', (card) => !get.is.shownCard(card)).randomGets(1);
			player.showCards(cards, get.translation(player) + '对' + get.translation(trigger.target) + '发动了【缭霜】');
			trigger.target.addTempSkill('bleach_liaoshuang_show');
			trigger.target.addShownCards(cards, 'visible_bleach_liaoshuang');
		},
		ai: {
			threaten: 1.15,
		},
		subSkill: {
			show: {
				charlotte: true,
				mod: {
					cardEnabled2(card, player) {
						if (get.itemtype(card) == 'card' && card.hasGaintag('visible_bleach_liaoshuang')) return false;
					},
				},
			},
		},
	},
	bleach_shuanghua: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'damageEnd',
		},
		getIndex(event, player, triggername) {
			return Math.min(event.num, 9) || 1;
		},
		forced: true,
		abnormal: true,
		async content(event, trigger, player) {
			await player.draw();
			if (trigger.source && trigger.source.isIn() && player.canCompare(trigger.source)) {
				const result = await player
					.chooseCard('霜华:是否与' + get.translation(get.event('source')) + '拼点:若你赢,视为对其使用一张冰冻杀', 'h')
					.set('ai', (card) => {
						if (get.attitude(get.player(), get.event('source')) <= 0) return card.number - get.value(card);
						return 0;
					})
					.set('source', trigger.source)
					.forResult();
				if (result.bool) {
					const next = player.chooseToCompare(trigger.source);
					if (!next.fixedResult) next.fixedResult = {};
					next.fixedResult[player.playerid] = result.cards[0];
					const result2 = await next.forResult();
					if (result2.bool) {
						await player.useCard({ name: 'sha', nature: 'bleach_ice' }, trigger.source, false);
					}
				}
			}
		},
		ai: {
			maixie_defend: true,
			effect: {
				target(card, player, target) {
					if (get.tag(card, 'damage')) {
						if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
						if (!target.hasFriend()) {
							if (target.hp <= 2 || player.hp >= 3) return false;
							if (player.countCards('h', (card) => card.name == 'sha' || card.number >= 12)) return;
						}
						return 0.6;
					}
				},
			},
		},
	},
	burnthewitch_linmian: {
		audio: 'ext:BLEACH/skill:4:mp3',
		enable: 'phaseUse',
		usable: 1,
		filterCard: true,
		discard: false,
		delay: false,
		check(card) {
			return 8 - get.value(card);
		},
		loseTo: 'cardPile',
		insert: true,
		visible: true,
		async content(event, trigger, player) {
			const card = event.cards[0];
			player.showCards(card, 'Magic#75 Gatling Grown');
			let num = 3;
			while (num-- > 0) {
				const cards = game.cardsGotoOrdering(get.cards(5)).cards;
				player.showCards(cards, 'Magic#75 Gatling Grown');
				for (const cardx of cards) {
					if (card.number == cardx.number) player.chooseUseTarget({ name: 'sha', cards: [cardx] }, [cardx], true, false, 'nodistance').viewAs = true;
				}
			}
		},
		ai: {
			order: 6.5,
			result: {
				player: 1,
			},
			threaten: 1.5,
		},
	},
	burnthewitch_mielong: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'phaseDrawBegin1',
		},
		forced: true,
		filter(event, player) {
			return !event.numFixed;
		},
		async content(event, trigger, player) {
			const { bool, targets } = await player
				.chooseTarget(get.prompt2('burnthewitch_mielong'), lib.filter.notMe)
				.set('ai', (target) => {
					const player = get.player();
					if (target.hp > 1 && !player.skipList.includes('phaseUse')) return false;
					return get.damageEffect(target, player, player);
				})
				.forResult();
			if (bool) {
				const target = targets[0];
				trigger.changeToZero();
				await target.damage('bleach_break');
				player
					.when({ global: 'phaseEnd' })
					.then(() => {
						if (!target.isIn()) player.draw(2);
					})
					.vars({ target: target });
			}
		},
	},
	burnthewitch_yulun: {
		audio: 'ext:BLEACH/skill:2:mp3',
		onChooseToUse(event) {
			if (!game.online && !event.burnthewitch_yulun) {
				const player = event.player;
				const list = get.inpileVCardList((info) => {
					const type = info[0];
					if (type != 'basic' && type != 'trick') return false;
					if (player.storage.burnthewitch_yulun.includes(info[2])) return false;
					return get.discardPile(info[2]) && event.filterCard({ name: info[2], nature: info[3] }, player, event);
				});
				event.set('burnthewitch_yulun', list);
			}
		},
		enable: 'phaseUse',
		filter(event, player) {
			return player.getHandcardLimit() > 0 && event.burnthewitch_yulun;
		},
		init(player, skill) {
			if (!player.storage[skill]) player.storage[skill] = [];
			lib.onwash.push(() => {
				player.storage[skill] = [];
			});
		},
		chooseButton: {
			dialog(event, player) {
				const list = event.burnthewitch_yulun;
				if (list.length == 0) {
					return ui.create.dialog('雨轮暂无可用牌');
				}
				return ui.create.dialog('雨轮', [list, 'vcard']);
			},
			check(button) {
				const player = get.player();
				if (get.event().parent.type != 'phase') return 1;
				if (button.link[2] == 'wugu') return 0;
				if (player.isDamaged() && (button.link[2] == 'tao' || button.link[2] == 'bleach_card_ramen')) return 1;
				return player.getUseValue({ name: button.link[2], nature: button.link[3] });
			},
			backup(links, player) {
				return {
					filterCard: () => false,
					selectCard: -1,
					audio: 'burnthewitch_yulun',
					popname: true,
					viewAs: { name: links[0][2], nature: links[0][3], yulun: true },
					onuse(result, player) {
						player.storage.burnthewitch_yulun.add(result.card.name);
						lib.skill.bleachHands.change(player, -1);
						if (!player.storage.burnthewitch_yulun_num) {
							player.storage.burnthewitch_yulun_num = 0;
							player.when({ global: 'phaseEnd' }).then(() => {
								lib.skill.bleachHands.change(player, player.storage.burnthewitch_yulun_num);
								delete player.storage.burnthewitch_yulun_num;
							});
						}
						player.storage.burnthewitch_yulun_num++;
					},
				};
			},
			prompt(links, player) {
				return '视为使用一张' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
			},
		},
		ai: {
			order: 10,
			threaten: 1.75,
			result: {
				player(player) {
					let tao,
						val = false;
					const cards = _status.event.burnthewitch_yulun; //QQQ
					if (Array.isArray(cards))
						for (var i of cards) {
							if (player.getUseValue({ name: i[2] }) > 6) val = true;
							if (i[2] == 'tao') tao = true;
						}
					if (!player.needsToDiscard(1) || (player.isDamaged() && tao) || (player.getHandcardLimit() > 2 && val)) {
						return 1;
					}
					return 0;
				},
			},
		},
		mod: {
			targetInRange(card) {
				if (card.yulun) return true;
			},
		},
	},
	burnthewitch_guangbi: {
		subSkill: {
			round: {},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'damageBegin4',
		},
		filter(event, player) {
			return _status.currentPhase && _status.currentPhase != player && !player.hasSkill('burnthewitch_guangbi_round');
		},
		check(event, player) {
			if (_status.currentPhase.countCards('h') + 2 <= player.countCards('h')) return false;
			return get.attitude(player, event.player) > 2 && event.num >= Math.min(2, event.player.hp);
		},
		prompt2(event, player) {
			return `令其摸两张牌,若其手牌数大于你,防止${get.translation(event.player)}受到的${get.cnNumber(event.num)}点伤害`;
		},
		logTarget() {
			return _status.currentPhase;
		},
		content() {
			'step 0';
			player.addTempSkill('burnthewitch_guangbi_round', 'roundStart');
			_status.currentPhase.draw(2);
			('step 1');
			if (_status.currentPhase.countCards('h') > player.countCards('h')) trigger.cancel();
			player
				.when({ global: 'roundStart' })
				.assign({
					firstDo: true,
				})
				.then(() => {
					let i = 0,
						num = 0,
						keep = true;
					while (i < game.roundNumber) {
						if (player.getRoundHistory('useSkill', (evt) => evt.skill == 'burnthewitch_guangbi', i).length) {
							keep = false;
							num++;
						} else if (!keep) break;
						i++;
					}
					player.draw(num);
				});
		},
		ai: {
			expose: 0.3,
			threaten: 1.45,
		},
	},
	burnthewitch_beke: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'phaseZhunbeiBegin',
		},
		async cost(event, trigger, player) {
			const { control } = await player
				.chooseControl('red', 'black', 'cancel2')
				.set('prompt', '贝克:猜测下一张牌的颜色以造成雷电伤害')
				.set('ai', () => (Math.random() <= 0.6 ? 0 : 1))
				.forResult();
			if (control != 'cancel2') event.result = { bool: true, cost_data: control };
		},
		async content(event, trigger, player) {
			const color = event.cost_data;
			player.popup(color);
			const card = get.cards()[0];
			game.cardsGotoOrdering(card);
			player.showCards(card);
			if (get.color(card) == color) {
				const { targets } = await player
					.chooseTarget('对一名其他角色造成1点雷电伤害', true, lib.filter.notMe)
					.set('ai', (target) => {
						return get.damageEffect(target, get.player(), get.player(), 'thunder');
					})
					.forResult();
				player.line(targets, 'thunder');
				targets[0].damage('thunder');
			}
		},
	},
	burnthewitch_mozhen: {
		audio: 'ext:BLEACH/skill:3:mp3',
		trigger: {
			player: 'loseAfter',
			global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
		},
		filter(event, player) {
			const cards = [],
				evt = event.getl(player);
			if (evt?.hs?.length) {
				player.getHistory('lose', (evt) => cards.addArray(evt.getl(player).hs));
			}
			return (cards.length == 2 || (evt.hs.length > 1 && cards.length - evt.hs.length < 2)) && !player.storage.burnthewitch_mozhen;
		},
		async cost(event, trigger, player) {
			const vcards = get.inpileVCardList((info) => {
				if (info[0] != 'basic') return false;
				return player.hasUseTarget({ name: info[2], nature: info[3] });
			});
			const {
				result: { bool, links },
			} =
				vcards.length == 0
					? { result: { bool: false } }
					: await player.chooseButton(['魔阵:是否视为使用一张基本牌？', [vcards, 'vcard']]).set('ai', (button) => {
						const player = get.player();
						const card = { name: button.link[2], nature: button.link[3] };
						return player.getUseValue(card);
					});
			if (bool) {
				const card = new lib.element.VCard({ name: links[0][2], nature: links[0][3] });
				event.result = { bool: true, cost_data: card, skill_popup: false };
			}
		},
		async content(event, trigger, player) {
			player.changeZhuanhuanji('burnthewitch_mozhen');
			await player.chooseUseTarget(event.cost_data, true);
		},
		subfrequent: ['draw'],
		group: ['burnthewitch_mozhen_draw'],
		subSkill: {
			draw: {
				audio: 'burnthewitch_mozhen',
				trigger: {
					player: 'useCardAfter',
				},
				forced: true,
				filter(event, player) {
					const color = get.color(event.card);
					if (color == 'none') return false;
					if (!player.storage.burnthewitch_mozhen) return false;
					if (
						!player.hasHistory('lose', (evt) => {
							return evt.hs.length && evt.parent == event;
						}) ||
						!event.cards.filterInD('oe').length
					)
						return false;
					const history = game.getGlobalHistory('useCard');
					const index = history.indexOf(event);
					if (index < 1) return false;
					const evt = history[index - 1],
						color2 = get.color(evt.card);
					return color == color2 && color2 != 'none';
				},
				prompt2: '你可以摸一张牌,或随机使用一张装备牌',
				async content(event, trigger, player) {
					player.changeZhuanhuanji('burnthewitch_mozhen');
					const result = await player
						.chooseTarget('魔阵:点击<玩家>随机使用一张装备牌,或点<取消>摸一张牌', (card, player, target) => {
							return target == player;
						})
						.forResult(); //QQQ
					if (result.bool) {
						const card = get.cardPile((card) => get.type(card) == 'equip' && player.canUse(card, player));
						if (card) {
							player.chooseUseTarget(card, 'nothrow', 'nopopup', true);
						}
					} else {
						await player.draw();
					}
				},
			},
		},
	},
	burnthewitch_shiying: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		limited: true,
		filter(event, player) {
			return player.countCards('h');
		},
		filterCard: true,
		filterTarget(card, player, target) {
			return target != player && target.countCards('h') >= player.countCards('h');
		},
		check(card) {
			return 7 - get.value(card);
		},
		position: 'he',
		contentBefore() {
			player.awakenSkill('burnthewitch_shiying');
			player.chat('解放编号0575,解锁!来吧!暴食之影!撕碎它!');
		},
		async content(event, trigger, player) {
			const target = event.target;
			const color = get.color(event.cards[0]);
			while (true) {
				const card = target.getCards('he').randomGet();
				await target.discard(card);
				if (get.color(card) != color || !target.countCards('he')) {
					if (player.countCards('h') > target.countCards('h')) {
						target.damage([1, 2].randomGet());
					}
					return;
				}
			}
		},
		ai: {
			order: 9,
			result: {
				target(player, target) {
					if (player.countCards('h') == target.countCards('h')) return -1;
					return 0;
				},
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_newxuezhuang: {
		mod: {
			maxHandcard(player, num) {
				return num + player.getStorage('bleach_quanli').length;
			},
			attackRange(player, num) {
				return num + player.getStorage('bleach_quanli').length;
			},
		},
	},
	bleach_quanli: {
		audio: 'ext:BLEACH/skill:10:mp3',
		logAudio: () => ['ext:BLEACH/skill:3:mp3'],
		derivation: ['bleach_xinjiling', 'bleach_newyuechong', 'bleach_zaisheng'],
		trigger: {
			player: ['phaseBegin', 'damageEnd'],
		},
		filter(event, player, name) {
			if (event.name == 'damage') return player.getStorage('bleach_quanli').length;
			return player.getStorage('bleach_quanli').length < 3;
		},
		async cost(event, trigger, player) {
			const bool = trigger.name == 'damage';
			const list = ['bleach_xinjiling', 'bleach_newyuechong', 'bleach_zaisheng'].filter((i) => (bool ? player.hasSkill(i) : !player.hasSkill(i))),
				prompt = bool ? '失去一个拥有的技能,摸两张牌' : '视为拥有以下一个技能';
			const { control } = await player
				.chooseControl(list, 'cancel2', () => {
					const controls = get.event('controls');
					if (bool) {
						if (controls.includes('bleach_newyuechong')) return 'bleach_newyuechong';
						if (player.hp <= 2 && !player.hasCard((card) => ['tao', 'jiu', 'shan'].includes(card), 'h')) return controls[0];
						return 'cancel2';
					}
					if (player.isDamaged() && controls.includes('bleach_zaisheng')) return 'bleach_zaisheng';
					if (controls.includes('bleach_xinjiling')) return 'bleach_xinjiling';
					return controls[0];
				})
				.set('prompt', '是否发动【浑然一体闪光】？')
				.set('prompt2', prompt)
				.forResult();
			if (control != 'cancel2') event.result = { bool: true, cost_data: control };
		},
		async content(event, trigger, player) {
			const skill = event.cost_data,
				bool = trigger.name == 'damage';
			player.popup(skill);
			player[bool ? 'unmarkAuto' : 'markAuto']('bleach_quanli', [skill]);
			if (bool) player.draw(2);
			const skills = player.getStorage('bleach_quanli');
			player.removeAdditionalSkill('bleach_quanli');
			player.addAdditionalSkill('bleach_quanli', skills);
			if (skills.length == 3) player.bleachAwaken('bleach_quincy_heiqiyihu', 1);
			else if (skills.length == 2 && bool) {
				player.bleachAwaken('bleach_quincy_heiqiyihu', 0);
			}
		},
		marktext: '力',
		intro: {
			name: '浑然一体闪光',
			content(storage, player) {
				let str = (storage.includes('bleach_xinjiling') ? '<font color=#87CEEB>' : '<font color=#808080>') + '灭却师</font> ';
				str += (storage.includes('bleach_newyuechong') ? '<font color=#000000>' : '<font color=#808080>') + '死神</font> ';
				str += (storage.includes('bleach_zaisheng') ? '<font color=#FFFFFF>' : '<font color=#808080>') + '虚</font> ';
				return str;
			},
		},
		ai: {
			threaten: 1.35,
			canUseCero: true,
			skillTagFilter(player, tag, arg) {
				if (player.storage.bleach_quanli.includes('bleach_zaisheng')) return true;
				return false;
			},
		},
		init(player, skill) {
			if (!player.storage[skill]) player.storage[skill] = [];
		},
		subSkill: {
			icg: {
				audio: ['ext:BLEACH/skill/bleach_quanli4.mp3', 'ext:BLEACH/skill/bleach_quanli5.mp3', 'ext:BLEACH/skill/bleach_quanli6.mp3', 'ext:BLEACH/skill/bleach_quanli7.mp3', 'ext:BLEACH/skill/bleach_quanli8.mp3', 'ext:BLEACH/skill/bleach_quanl9.mp3', 'ext:BLEACH/skill/bleach_quanli10.mp3'],
			},
		},
	},
	bleach_shanguang: {
		enable: 'phaseUse',
		audio: 'ext:BLEACH/skill:2:mp3',
		filterTarget: lib.filter.notMe,
		filter(event, player) {
			return player.getStorage('bleach_quanli').length == 3;
		},
		content() {
			'step 0';
			player.awakenSkill('bleach_shanguang');
			target.damage(1);
			('step 1');
			target.addBleachBuff({ bleachMark_weak: 1, bleachEffect_qinshi: 1 });
		},
		limited: true,
		ai: {
			order: 13,
			result: {
				target(player, target) {
					let hs =
						player.countCards('h', (card) => {
							if (!get.tag(card, 'damage') || get.effect(target, card, player, player) <= 0) return 0;
							if (card.name == 'sha') return 0.1;
							return 1;
						}) + 1,
						ts =
							target.hp +
							target.countMark('bleachMark_shield') +
							game.countPlayer((current) => {
								if (get.attitude(current, target) > 0) return current.countCards('hs') / 8;
								return 0;
							});
					if (player.inRange(target) && hs >= ts) return -hs;
					return 0;
				},
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_dangying: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		usable: 1,
		async content(event, trigger, player) {
			const cards = get.cards(4),
				cards2 = cards.slice(0);
			while (cards.length) ui.cardPile.insertBefore(cards.pop().fix(), ui.cardPile.firstChild);
			game.updateRoundNumber();
			const result = await player
				.chooseButton(['荡影:是否使用其中一张牌？', cards2])
				.set('filterButton', (button) => {
					const player = get.player();
					const card = button.link,
						cardx = {
							name: card.name,
							nature: get.nature(card, get.owner(card)),
							cards: [card],
						};
					return player.hasUseTarget(cardx, false, false);
				})
				.set('ai', (button) => {
					return get.player().getUseValue(button.link);
				})
				.forResult();
			if (result.links?.length) {
				const card = result.links[0];
				cards.remove(card);
				const cardx = {
					name: card.name,
					nature: get.nature(card, get.owner(card)),
					cards: [card],
				};
				if (!player.storage.bleach_dangying) {
					player.storage.bleach_dangying = true;
					player
						.when('useCardToTargeted')
						.filter((evt) => evt.getParent(3).name == 'bleach_dangying')
						.then(() => {
							delete player.storage.bleach_dangying;
							const targets = trigger.targets.slice().sortBySeat();
							player.line(targets);
							for (const target of targets) {
								target.link(true);
							}
						});
				}
				const next = await player.chooseUseTarget(cardx, [card], true, false, 'nodistance');
				if (card.name === cardx.name && get.is.sameNature(card, cardx, true)) next.viewAs = false;
			}
		},
		ai: {
			order: 6.5,
			result: {
				player: 1,
			},
		},
	},
	bleach_chiyu: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filterTarget(card, player, target) {
			return target.isLinked() && !target.storage.bleach_chiyu_mark;
		},
		filter(event, player) {
			return player.getCardUsable('sha') > 0 && game.hasPlayer((current) => current.isLinked() && !current.storage.bleach_chiyu_mark);
		},
		abnormal: true,
		content() {
			'step 0';
			target.storage.bleach_chiyu_mark = true;
			if (game.hasPlayer2((current) => current.storage.bleach_chiyu_mark)) {
				player.when('phaseAfter').then(() => {
					game.countPlayer2((current) => delete current.storage.bleach_chiyu_mark);
				});
			}
			target.link(false);
			player.choosePlayerCard('将其一张牌当【杀】使用', target, true, 'he');
			('step 1');
			if (result.bool) {
				const vcard = new lib.element.VCard({ name: 'sha', storage: { bleachMark_weak: 1, bleachMark_leizhe: 1 } });
				player.chooseUseTarget(vcard, result.cards, true, true, 'nodistance').viewAs = true;
			}
		},
		ai: {
			order: 6.5,
			result: {
				target: -1,
			},
		},
	},
	bleach_cheshan: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'phaseDrawBegin',
		},
		filter(event, player) {
			return !event.numFixed;
		},
		async cost(event, trigger, player) {
			const choiceList = ['多摸一张牌,出牌阶段开始时弃置一张牌', '少摸一张牌,出牌阶段结束时摸两张牌'];
			const { control } = await player
				.chooseControl('cancel2')
				.set('choiceList', choiceList)
				.set('prompt', '澈閃:你可以视为使用一张【杀】并:')
				.set('ai', () => [0, 1].randomGet())
				.forResult();
			if (control != 'cancel2') {
				event.result = { bool: true, cost_data: ['选项一', '选项二'].indexOf(control) };
			}
		},
		async content(event, trigger, player) {
			const index = event.cost_data;
			player.addTempSkill('bleach_cheshan_' + index);
			player.chooseUseTarget('视为使用一张无距离限制的【杀】', { name: 'sha' }, false, true, 'nodistance');
			if (index == 0) {
				trigger.num++;
			} else if (index == 1) {
				trigger.num--;
			}
		},
		ai: {
			threaten: 1.5,
		},
		subSkill: {
			0: {
				trigger: {
					player: 'phaseUseBegin',
				},
				charlotte: true,
				silent: true,
				content() {
					player.chooseToDiscard('he', true);
				},
			},
			1: {
				trigger: {
					player: 'phaseUseEnd',
				},
				charlotte: true,
				silent: true,
				content() {
					player.draw(2);
				},
			},
		},
	},
	bleach_qingguang: {
		mod: {
			aiOrder(player, card, num) {
				if (typeof card == 'object') {
					var list = player.getStorage('bleach_qingguang_suit');
					if (!list.includes(card.suit)) return num + 10;
				}
			},
			aiValue(player, card, num) {
				var list = player.getStorage('bleach_qingguang_suit');
				if (!list.includes(card.suit)) return num / player.hp;
			},
			bleachModBuffEffect(player, buff, num, ret, setToZero) {
				if (get.bleachBuffIsNegetive(buff)) {
					setToZero.zeroplayer = true;
				}
			},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'loseEnd',
		},
		init: (player, skill) => (player.storage.bleach_qingguang_suit = []),
		zhuanhuanji: true,
		forced: true,
		popup: false,
		mark: true,
		marktext: '☯',
		intro: {
			content(storage, player, skill) {
				var str = '转换技,每当你以正面向上失去了4种花色的牌后,你可以对一名其他角色造成1点伤害并附加1层';
				str += player.storage.bleach_qingguang ? '侵食.' : '虚弱.';
				if (player.getStorage('bleach_qingguang_suit').length) {
					str += '<li>当前花色:' + get.translation(player.storage.bleach_qingguang_suit);
				}
				if (player.hasSkill('bleach_qingguang_eff')) str += '<li>【澈闪】伤害值+1<li>你下次受到的伤害-1';
				return str;
			},
		},
		abnormal: true,
		filter(event, player) {
			if (!event.visible) return false;
			const list = player.getStorage('bleach_qingguang_suit');
			if (list.length == 4) return true;
			for (var i of event.cards2) {
				const suit = i.suit;
				if (!list.includes(suit)) return true;
			}
			return false;
		},
		async content(event, trigger, player) {
			const storage = player.storage.bleach_qingguang_suit;
			const list = [],
				suits = get.copy(storage);
			for (var i of trigger.cards2) list.add(i.suit);
			storage.addArray(list);
			if (storage.length == 4) {
				const result = await player
					.chooseTarget(get.prompt2('bleach_qingguang'), lib.filter.notMe)
					.set('ai', (target) => {
						const player = get.player();
						return get.damageEffect(target, player, player);
					})
					.forResult();
				if (result.targets?.length) {
					const target = result.targets[0];
					player.storage.bleach_qingguang_suit = [];
					target.damage();
					player.addSkill('bleach_qingguang_eff');
					if (player.storage.bleach_qingguang == true) {
						target.addBleachBuff('bleachEffect_qinshi', 1, player);
					} else {
						target.addBleachBuff('bleachMark_weak', 1, player);
					}
					player.changeZhuanhuanji('bleach_qingguang');
				}
			}
		},
		subSkill: {
			eff: {
				trigger: {
					player: ['useCard', 'damageBegin3'],
				},
				filter(event, player) {
					return event.name == 'damage' || event.getParent(2).name == 'bleach_cheshan';
				},
				forced: true,
				content() {
					trigger.name == 'damage' ? trigger.num-- : trigger.baseDamage++;
					player.removeSkill('bleach_qingguang_eff');
				},
			},
		},
	},
	bleach_yushou: {
		mod: {
			targetInRange(card, player, target, now) {
				if (card.name == 'sha') return true;
			},
		},
		audio: 'ext:BLEACH/skill:4:mp3',
		trigger: {
			player: 'useCard',
		},
		filter(event, player) {
			return get.tag(event.card, 'damage');
		},
		abnormal: true,
		forced: true,
		content() {
			if (!trigger.card.storage) trigger.card.storage = {};
			const buff = lib.abnormal.slice(0).randomGet();
			if (!trigger.card.storage[buff]) trigger.card.storage[buff] = 0;
			trigger.card.storage[buff]++;
			game.log(trigger.card, '附加了', buff, '效果');
		},
		ai: {
			threaten: 1.05,
		},
	},
	bleach_luosheng: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			target: 'useCardToTargeted',
		},
		filter(event, player) {
			return get.bleachBuffs(event.player, false).length;
		},
		async cost(event, trigger, player) {
			const buffs = get.bleachBuffs(trigger.player, false);
			let evt = event.parent,
				directHit = (evt.nowuxie && get.type(trigger.card, 'trick') === 'trick') || (evt.directHit && evt.directHit.includes(player)) || (evt.customArgs && evt.customArgs.default && evt.customArgs.default.directHit2);
			const { control } = await player
				.chooseControl(buffs, 'cancel2')
				.set('prompt', '移去其1层异常状态令此牌对你无效')
				.set('ai', () => {
					const list = get.event('controls').slice(0);
					if ((get.tag(trigger.card, 'respondSha') && (directHit || player.countCards('h', { name: 'sha' }) === 0)) || (get.tag(trigger.card, 'respondShan') && (directHit || player.countCards('h', { name: 'shan' }) === 0))) {
						let list2 = ['bleachMark_ice', 'bleachMark_fire', 'bleachMark_weak', 'bleachMark_du', 'bleachMark_zhongshang', 'bleachEffect_qinshi'];
						if (get.attitude(player, trigger.player) > 0) {
							list2.addArray(['bleachEffect_hunluan', 'bleachEffect_mabi', 'bleachEffect_ice']);
							list2.reverse();
						}
						for (var i of list2) {
							if (list.includes(i)) return i;
						}
					}
					return 'cancel2';
				})
				.forResult();
			event.result = { bool: control != 'cancel2', cost_data: control };
		},
		async content(event, trigger, player) {
			trigger.player.removeBleachBuff(event.cost_data, 1);
			trigger.parent.excluded.add(player);
		},
	},
	bleach_huanyu: {
		audio: 'ext:BLEACH/skill:4:mp3',
		trigger: {
			player: 'phaseJieshuBegin',
			target: 'useCardToTargeted',
		},
		filter(event, player) {
			if (event.name != 'phaseJieshu' && event.card.name != 'sha') return false;
			return game.hasPlayer((current) => {
				return current != player && current.countCards('h');
			});
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt2('bleach_huanyu'), (card, player, target) => {
					return target != player && target.countCards('he') > 0;
				})
				.set('ai', (target) => {
					const player = get.player(),
						att = get.attitude(player, target);
					if (att > 0) return 0;
					return 0.1 - att / target.countCards('h');
				})
				.forResult();
		},
		async content(event, trigger, player) {
			const target = event.targets[0];
			const result = await target.chooseToGive(player, 'he', '交给' + get.translation(player) + '一张牌', true).forResult();
		},
		ai: {
			effect: {
				target(card, player, target, current) {
					if (card.name == 'sha') return [1, 0.5];
				},
			},
		},
	},
	bleach_huhuo: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filterTarget: true,
		selectTarget: [1, Infinity],
		abnormal: true,
		init: (player, skill) => (player.storage[skill] = false),
		intro: {
			content: 'limited',
		},
		limited: true,
		line: 'fire',
		mark: true,
		multitarget: true,
		multiline: true,
		content() {
			'step 0';
			player.awakenSkill('bleach_huhuo');
			player.storage.bleach_huhuo = true;
			('step 1');
			for (var i of targets) {
				i.addBleachBuff('bleachMark_fire', 2, player);
			}
			targets.randomGet().damage('nocard', 'fire');
		},
		ai: {
			order: 1,
			result: {
				target(player, target) {
					if (lib.config.mode == 'versus') return -1;
					if (player.hasUnknown()) return 0;
					return get.bleachBuffEffect(target, 'bleachMark_fire');
				},
			},
		},
	},
	bleach_qiannu: {
		subSkill: {
			dmg: {
				audio: 'bleach_qiannu',
				logAudio: () => ['ext:BLEACH/skill/bleach_qiannu3.mp3', 'ext:BLEACH/skill/bleach_qiannu4.mp3'],
				trigger: {
					source: 'dieAfter',
				},
				prompt2() {
					return '当你击杀一名角色后,你可以对场上所有其他角色各造成1点伤害';
				},
				filter(event, player) {
					return event.parent.parent.parent.name != 'bleach_qiannu_dmg';
				},
				content() {
					const players = game.filterPlayer();
					players.remove(player);
					player.line(players);
					players.forEach((i) => i.damage('nocard'));
				},
			},
		},
		audio: 'ext:BLEACH/skill:4:mp3',
		logAudio: () => ['ext:BLEACH/skill:2:mp3'],
		trigger: {
			player: 'useCard',
		},
		group: 'bleach_qiannu_dmg',
		filter(event, player) {
			return _status.currentPhase == player && player.getHistory('useCard').indexOf(event) == 1 && ['basic', 'trick'].includes(get.type(event.card));
		},
		prompt2(event, player) {
			let str = '额外结算一次';
			if (event.card.name == 'sha' && game.hasNature(event.card)) str += get.translation(event.card.nature);
			return str + '【' + get.translation(event.card.name) + '】';
		},
		check(event, player) {
			return !get.tag(event.card, 'norepeat');
		},
		content() {
			trigger.effectCount++;
		},
		mod: {
			aiOrder(player, card, num) {
				if (typeof card == 'object' && player.isPhaseUsing()) {
					if (player.getHistory('useCard').length == 1) {
						if (get.tag(card, 'damage') || ['wuzhong', 'shunshou', 'guohe'].includes(card.name)) return num + 10;
					}
				}
			},
		},
	},
	bleach_zhenmie: {
		subSkill: {
			effect: {
				trigger: {
					source: 'damageSource',
				},
				forced: true,
				charlotte: true,
				firstDo: true,
				filter(event, player) {
					return player.getStorage('bleach_zhenmie_effect').includes(event.player);
				},
				content() {
					trigger.player.addBleachBuff('bleachMark_zhongshang', 1, player);
					player.unmarkAuto('bleach_zhenmie_effect', [trigger.player]);
				},
				mark: true,
				intro: {
					content: '当你对$造成伤害后,施加1层重伤',
				},
			},
		},
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		limited: true,
		abnormal: true,
		position: 'he',
		filter(event, player) {
			return player.countCards('he');
		},
		filterCard() {
			if (ui.selected.targets.length || ui.selected.cards.length == game.players.length - 1) return false;
			return true;
		},
		selectCard: [1, Infinity],
		complexSelect: true,
		complexCard: true,
		filterOk: () => ui.selected.cards.length == ui.selected.targets.length,
		selectTarget() {
			if (!ui.selected.cards.length) return false;
			return [1, ui.selected.cards.length];
		},
		filterTarget: lib.filter.notMe,
		multitarget: true,
		multiline: true,
		check(card) {
			const player = get.player();
			if (get.tag(card, 'damage')) return 0;
			if (
				(!player.hasCard((cardx) => {
					return get.tag(cardx, 'damage');
				}),
					'hs')
			)
				return 0;
			return 6 - get.value(card);
		},
		content() {
			'step 0';
			player.storage.bleach_zhenmie = true;
			player.awakenSkill('bleach_zhenmie');
			('step 1');
			player.removeMark('bleach_qiannu', targets.length * 2);
			targets.forEach((target) => {
				target.addTempSkill('bleach_off_skill');
				target.addBleachBuff('bleachMark_weak');
			});
			('step 2');
			player.markAuto('bleach_zhenmie_effect', targets);
			player.addSkill('bleach_zhenmie_effect');
		},
		ai: {
			order: 13,
			result: {
				target: -1,
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	bleach_shenyuan: {
		audio: 'ext:BLEACH/skill:6:mp3',
		trigger: {
			source: 'damageSource',
		},
		async content(event, trigger, player) {
			let count = trigger.num;
			while (true) {
				count--;
				const card = get.cards()[0];
				game.cardsGotoOrdering(card);
				player.showCards(card);
				let bool = (
					await player
						.chooseUseTarget(card, true, false, 'nodistance')
						.set('filterTarget', (card, player, target) => {
							var evt = _status.event;
							if (_status.event.name == 'chooseTarget') evt = evt.parent;
							if (target != player && target != evt.shenyuan_target) return false;
							return lib.filter.targetEnabledx(card, player, target);
						})
						.set('shenyuan_target', trigger.player)
				).result.bool;
				if (!bool || count <= 0) return;
			}
		},
	},
	bleach_lundu: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filterTarget: lib.filter.notMe,
		usable: 1,
		async content(event, trigger, player) {
			const target = event.target;
			const chosen = [player, target].randomGets(2);
			const list = [2, 3, 4, 5];
			const result = await chosen[0]
				.chooseControl(list, () => {
					return [0, 1].randomGet();
				})
				.set('prompt', '选择红牌数量')
				.forResult();
			let num = result.control;
			chosen[0].chat('我选择' + num + '枚子弹');
			game.log(player, '发动', '#g【轮赌】', '的红牌数量为', num, '张');
			let cards = [];
			while (num-- > 0) {
				const card = get.cardPile((card) => !cards.includes(card) && get.color(card, false) == 'red');
				if (card) cards.push(card);
			}
			while (cards.length < 6) {
				const card = get.cardPile((card) => !cards.includes(card) && get.color(card, false) == 'black');
				if (card) cards.push(card);
			}
			cards = cards.randomGets(6);
			while (true) {
				let card;
				card = (await chosen[0].chooseButton(['选择一张牌获得之', [cards, 'blank']], true)).result.links[0];
				cards.remove(card);
				chosen[0].gain(card, 'gain2', 'log');
				if (get.color(card) == 'red') {
					if (chosen[0] == target) delete player.getStat('skill').bleach_lundu;
					chosen[0].damage(chosen[0], 2);
					chosen[1].draw(2);
					return;
				} else {
					chosen.reverse();
				}
			}
		},
		ai: {
			order: 1,
			result: {
				target: -1,
			},
		},
	},
	bleach_ganong: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: ['useCardAfter', 'respondAfter'],
		},
		filter(event, player) {
			if (get.type(event.card) != 'basic' && !get.tag(event.card, 'damage')) return false;
			const name = event.card.name;
			if (event.name == 'useCard') return player.getRoundHistory('useCard', (evt) => evt.card.name == name).indexOf(event) == 0;
			return player.getRoundHistory('useCard', (evt) => evt.card.name == name).length == 0;
		},
		forced: true,
		async content(event, trigger, player) {
			player.draw();
		},
	},
	bleach_miexing: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'roundStart',
		},
		filter(event, player) {
			const curLen = player.actionHistory.length;
			if (curLen <= 2) return false;
			return game.players.length > 2 || !player.getRoundHistory('useSkill', (evt) => evt.skill == 'bleach_miexing', 1).length;
		},
		async cost(event, trigger, player) {
			const targets = player.getRoundHistory('useSkill', (evt) => evt.skill == 'bleach_miexing', 1).map((evt) => evt.targets[0]);
			event.result = await player
				.chooseTarget(get.prompt('bleach_miexing'), '令一名其他角色判定,若结果为黑色,视为对其依次使用两张雷【杀】', (card, player, target) => {
					return target != player && target != get.event('target');
				})
				.set('ai', (target) => {
					const player = get.player(),
						card = new lib.element.VCard({ name: 'sha', nature: 'thunder' });
					return -get.sgnAttitude(player, target) * (get.effect(target, card, player, player) * 2);
				})
				.set('target', targets[0])
				.forResult();
		},
		async content(event, trigger, player) {
			const target = event.targets[0],
				result = await target
					.judge((card) => {
						if (get.color(card) == 'black') return -4;
						return 0;
					})
					.set('judge2', (result) => {
						return result.bool === false ? true : false;
					})
					.forResult();
			if (result.bool === false) {
				const card = new lib.element.VCard({ name: 'sha', nature: 'thunder' });
				if (player.canUse(card, target, false)) {
					for (var i = 1; i <= 2; i++) {
						await player.useCard(card, target, false);
					}
				}
			}
		},
	},
	bleach_yinyi: {
		audio: 'ext:BLEACH/skill:2:mp3',
		zhuanhuanji(player, skill) {
			player.storage[skill] = !player.storage[skill];
			if (!player.storage[skill]) player.draw();
		},
		group: ['bleach_yinyi_1', 'bleach_yinyi_2'],
		subSkill: {
			1: {
				audio: 'bleach_yinyi',
				trigger: {
					source: 'damageSource',
				},
				filter(event, player) {
					return get.itemtype(event.cards) == 'cards' && !player.storage.bleach_yinyi && get.position(event.cards[0], true) == 'o';
				},
				forced: true,
				async content(event, trigger, player) {
					player.changeZhuanhuanji('bleach_yinyi');
					player.gain(trigger.cards, 'gain2');
					const { cards } = await player.chooseCard('将一张牌置于武将牌上,称为「翼」', true, 'he')
						.forResult();
					if (cards?.length) {
						player.addToExpansion(cards, player, 'giveAuto').gaintag.add('bleach_yinyi_x');
					}
				},
				sourceSkill: 'bleach_yinyi',
			},
			2: {
				audio: 'bleach_yinyi',
				trigger: {
					player: ['useCardAfter', 'respondAfter'],
				},
				filter(event, player) {
					if (!player.storage.bleach_yinyi) return false;
					return Array.isArray(event.respondTo) && event.respondTo[0] != player && event.cards && event.cards.someInD();
				},
				forced: true,
				async content(event, trigger, player) {
					player.changeZhuanhuanji('bleach_yinyi');
					player.gain(trigger.cards, 'gain2');
					const { cards } = await player.chooseCard('将一张牌置于武将牌上,称为「翼」', true, 'he')
						.forResult();
					if (cards?.length) {
						player.addToExpansion(cards, player, 'giveAuto').gaintag.add('bleach_yinyi_x');
					}
				},
				sourceSkill: 'bleach_yinyi',
			},
			x: {
				marktext: '翼',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				onremove(player, skill) {
					const cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
			},
		},
	},
	bleach_fensui: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			player: 'useCardToPlayered',
		},
		filter(event, player) {
			if (event.targets.length != 1 || event.card.name != 'sha') return false;
			const evtx = event.parent;
			return (
				!player.hasHistory(
					'useCard',
					(evt) => {
						return evt != evtx && evt.card.name == 'sha';
					},
					evtx
				) && [player, event.target].some((target) => target.countCards('he'))
			);
		},
		logTarget: 'target',
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt2('bleach_fensui'), (card, player, target) => {
					const event = get.event().getTrigger();
					return [player, event.target]
						.filter((targetx) => {
							return targetx.isIn() && targetx.countCards('he');
						})
						.includes(target);
				})
				.set('ai', (target) => {
					const player = get.player();
					return get.effect(target, { name: 'guohe' }, player, player);
				})
				.forResult();
		},
		async content(event, trigger, player) {
			const target = event.targets[0];
			const result = await player
				.discardPlayerCard(target, 'he', true)
				.set('ai', (button) => {
					const suit = button.link.suit;
					return get.event().att * (suit == 'club' ? 5 : 1) * get.value(button.link, player);
				})
				.set('prompt', '粉碎:弃置' + (target != player ? get.translation(target) : '') + '一张牌')
				.set('prompt2', '若弃置了♣️️牌,则将之置入「翼」')
				.set('att', get.sgnAttitude(player, target))
				.forResult();
			if (result.cards?.length) {
				if (result.cards && result.cards.some((i) => i.suit == 'club')) {
					player.popup('洗具');
					player.addToExpansion(result.cards, target, 'giveAuto').gaintag.add('bleach_yinyi_x');
				}
			}
		},
	},
	bleach_sitan: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'phaseEnd',
		},
		filter(event, player) {
			return !player.hasSkill('bleach_sitan_used') && player.getExpansions('bleach_yinyi_x').length >= 3;
		},
		async cost(event, trigger, player) {
			const expansions = player.getExpansions('bleach_yinyi_x');
			const list = [3, 4, 5].filter((i) => expansions.length >= i).map((i) => get.cnNumber(i, true));
			const { control } = await player
				.chooseControl(list, 'cancel2', () => {
					const player = get.player(),
						controls = get.event('controls').slice(0).reverse();
					if (player.hp == 1 && !player.hasCard((card) => ['tao', 'jiu'].includes(card.name))) return controls[0];
					if (player.countCards('h', 'sha') >= 2) {
						if (controls.length > 1) return controls[1];
						return controls[0];
					}
					return 'cancel2';
				})
				.set('prompt', '###【斯安威斯坦】:移去任意张「翼」,执行一个额外回合？###该回合内你使用第X张牌后结束出牌阶段,且【杀】没有距离和次数限制(X为你移去牌数).')
				.forResult();
			if (control != 'cancel2') {
				const index = ['三', '四', '五'].indexOf(control) + 3;
				const cards = player.getExpansions('bleach_yinyi_x').randomGets(index);
				event.result = { bool: true, cost_data: cards };
			}
		},
		async content(event, trigger, player) {
			player.addTempSkill('bleach_sitan_used', 'roundStart');
			const cards = event.cost_data;
			player.storage.bleach_sitan_count = cards.length;
			player.loseToDiscardpile(cards);
			player.phase('nodelay');
			player.bleachAwaken('bleach_future_nnoitra', 1);
			game.playBleach('bgm:Cyberpunk');
			game.broadcastAll(() => {
				if (ui.backgroundMusic) ui.backgroundMusic.pause();
			});
			player
				.when({ global: 'phaseBegin' })
				.filter((evt) => evt.player != player)
				.then(() => {
					delete player.storage.bleach_sitan_count;
					game.broadcastAll((player) => {
						var skip = () => {
							player.bleachAwaken('bleach_future_nnoitra', 0);
							if (ui.backgroundMusic && !isNaN(ui.backgroundMusic.duration)) ui.backgroundMusic.play();
							Array.from(ui.window.getElementsByTagName('audio')).forEach((audio) => {
								if (audio.currentSrc.includes('Cyberpunk')) audio.remove();
							});
							document.removeEventListener(lib.config.touchscreen ? 'touchend' : 'click', skip);
						};
						document.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', skip);
					}, player);
				});
			player.addTempSkill('bleach_sitan_count', { player: 'phaseJieshuBegin' });
		},
		subSkill: {
			used: {
				charlotte: true,
				sourceSkill: 'bleach_sitan',
			},
			count: {
				trigger: {
					player: 'useCardAfter',
				},
				silent: true,
				filter(event, player) {
					return player.getHistory('useCard').indexOf(event) == player.storage.bleach_sitan_count - 1;
				},
				content() {
					const evt = event.getParent('phaseUse');
					if (evt && evt.name) {
						evt.skipped = true;
					}
				},
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha') return Infinity;
					},
					targetInRange(card) {
						if (card.name == 'sha') return true;
					},
				},
				ai: {
					presha: true,
					pretao: true,
					neg: true,
					nokeep: true,
				},
				charlotte: true,
				sourceSkill: 'bleach_sitan',
			},
		},
		ai: {
			combo: 'bleach_yinyi',
		},
	},
	soul_shashen: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		filterTarget: lib.filter.notMe,
		filterCard(card, player) {
			if (ui.selected.cards.length) {
				const cardx = ui.selected.cards[0];
				return card.number == cardx.number;
			}
			return true;
		},
		selectCard: [1, Infinity],
		position: 'he',
		discard: false,
		visible: true,
		prepare: 'throw',
		loseTo: 'discardPile',
		delay: 0.5,
		check(card) {
			if (get.type(card) == 'equip') return 15 - get.value(card);
			return 7 - get.value(card);
		},
		usable: 2,
		async content(event, trigger, player) {
			const target = event.target,
				cards = event.cards;
			player.draw(cards.length);
			const type = get.type2(cards[0]);
			const result = await target
				.chooseCard(get.translation(player) + ':你想要一场大战？还是给我一把枪', '交给其' + get.cnNumber(cards.length) + '张' + get.translation(type) + '牌,或点<取消>受到1点斩杀伤害.', 'he', (card, player) => {
					return get.type2(card) == get.event('type');
				})
				.set('ai', (card) => {
					if (get.event('goon')) return 7 - get.value(card);
					return 0;
				})
				.set('goon', get.damageEffect(target, player, target) < 0)
				.set('number', type)
				.forResult();
			if (result.bool) {
				target.chat('来人!给这个家伙一把枪!');
				player.gain(result.cards, target, 'give', 'bySelf');
			} else {
				target.bleachDamageKill('bleach_break');
			}
		},
		ai: {
			order: 4.5,
			result: {
				target: -1,
			},
		},
	},
	soul_zhuisha: {
		audio: 'ext:BLEACH/skill:2:mp3',
		trigger: {
			global: 'damageEnd',
		},
		filter(event, player) {
			if (!event.source || !event.source.isIn() || event.source.isFriendsOf(player)) return false;
			return event.player.isFriendsOf(player) && [player, player.next, player.previous].includes(event.player);
		},
		forced: true,
		group: 'soul_zhuisha_eff',
		content() {
			trigger.source.addMark('soul_zhuisha', 1, false);
			if (Math.random() <= 0.35) game.log(['那个无名小卒是 约翰·威克', '你在魔鬼的背后捅了一刀,逼迫他回归刚刚退出的生活'].randomGet());
			player.chat(['告诉他们', '告诉他们所有人', '不论谁来', '不论是谁', '我都会杀了他们', '我会杀了他们所有人'].randomGet());
		},
		ai: {
			threaten: 1.55,
			damageBonus: true,
			skillTagFilter(player, tag, arg) {
				return arg && arg.player && arg.player.hasMark('soul_zhuisha');
			},
		},
		intro: {
			content: '这个单位正在被追杀',
		},
		subSkill: {
			eff: {
				trigger: {
					source: 'damageBefore',
				},
				forced: true,
				filter(event, player) {
					return event.player.hasMark('soul_zhuisha');
				},
				content() {
					const num = trigger.player.countMark('soul_zhuisha');
					trigger.num += num;
					trigger.player.removeMark('soul_zhuisha', num, false);
				},
			},
		},
	},
	soul_honglian: {
		trigger: {
			player: 'phaseBegin',
		},
		forced: true,
		filter(event, player) {
			return !player.getEquips('soul_card_gangnier').length || !player.getEquips('soul_card_buertegen').length;
		},
		content() {
			if (!player.storage.soul_honglian_mark) {
				player.storage.soul_honglian_mark = true;
				player.expandEquip(1);
			}
			const list = ['soul_card_gangnier', 'soul_card_buertegen'];
			for (const card of list) {
				if (player.getEquips(card).length) list.remove(card);
			}
			player.equip(game.createCard2(list.randomGet(), lib.suit.randomGet(), 1));
		},
	},
	soul_junxiang: {
		enable: 'phaseUse',
		filterTarget: lib.filter.notMe,
		selectTarget: [1, Infinity],
		filter(event, player) {
			return player.getEquips('soul_card_gangnier').length;
		},
		multiline: true,
		multitarget: true,
		async content(event, trigger, player) {
			player.awakenSkill('soul_junxiang');
			const targets = event.targets;
			for (let target of targets) {
				const result = await target.chooseToRespond({ name: 'shan' }, '打出一张【闪】,否则下三回合结束时失去1点体力').forResult();
				if (!result.bool) {
					await target.damage('nocard');
					if (target.hasHistory('damage', (evt) => evt.parent.name == 'soul_junxiang')) {
						target.addSkill('soul_junxiang_eff');
						target.addMark('soul_junxiang_eff', 3, false);
					}
				}
			}
		},
		ai: {
			order: 1,
			result: {
				target: -1,
			},
			expose: 0.6,
			threaten: 1.55,
		},
		limited: true,
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
		subSkill: {
			eff: {
				charlotte: true,
				popup: false,
				forced: true,
				trigger: {
					global: ['phaseAfter'],
				},
				content() {
					player.loseHp();
					player.removeMark('soul_junxiang_eff', 1, false);
					if (!player.hasMark('soul_junxiang_eff')) player.removeSkill('soul_junxiang_eff');
				},
				mark: true,
				intro: {
					content: '君往何处',
				},
			},
		},
	},
	soul_jijian: {
		enable: 'phaseUse',
		filterTarget: lib.filter.notMe,
		filter(event, player) {
			return player.getEquips('soul_card_buertegen').length;
		},
		filterCard: {
			type: 'equip',
		},
		position: 'he',
		usable: 1,
		content() {
			target.damage('nocard');
		},
		ai: {
			threaten: 1.45,
			order: 9.5,
			result: {
				target(player, target) {
					return -Math.min(1, get.damageEffect(target, player));
				},
			},
		},
	},
	soul_fenghuan: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			player: 'useCardToPlayered',
			target: 'useCardToTargeted',
		},
		forced: true,
		filter(event, player) {
			return event.card && event.card.name == 'sha';
		},
		Fansha(player) {
			player.addMark('soul_fenghuan');
			if (player.countMark('soul_fenghuan') >= 12) {
				if (player.bleachIs(['soul_luohou'])) game.mp417('luohou_pv');
				player.removeMark('soul_fenghuan', player.countMark('soul_fenghuan'));
				const players = game.filterPlayer((current) => current.isEnemiesOf(player)).sortBySeat();
				player.line(players, 'green');
				players.forEach((i) => {
					let num = 1,
						hit = 3;
					while (hit-- > 0) {
						if (Math.random() <= [0.05, 0.15, 0.25, 0.35, 0.45].randomGet()) num++;
					}
					i.damage(num, 'nocard');
				});
			}
		},
		content() {
			lib.skill.soul_fenghuan.Fansha(player);
		},
		markimage: 'extension/BLEACH/files/mark/soul_fansha.jpg',
		intro: {
			name: '战意',
			content: 'mark',
		},
	},
	soul_biri: {
		audio: 'ext:BLEACH/skill:2:mp3',
		enable: 'phaseUse',
		usable: 1,
		zhuanhuanji: true,
		async content(event, trigger, player) {
			if (player.storage.soul_biri) {
				await player.recover();
				const result = await player
					.chooseTarget('选择【臂铠】的目标', '其下次成为【杀】的目标时,你代替成为之.', lib.filter.notMe)
					.set('ai', (target) => {
						return get.attitude(get.player(), target) * get.threaten(target);
					})
					.forResult();
				if (result.targets?.length) {
					const target = result.targets[0];
					player.line(target, 'green');
					player.addSkill('soul_biri_eff');
					player.storage.soul_biri_eff = target;
					game.log(target, '成为了', '【臂铠】', '的目标');
					player.markSkillCharacter('soul_biri_eff', target, '臂铠', '下次代替其成为【杀】的目标');
				}
			} else {
				await player.loseHp();
				player.chooseUseTarget('sha', '是否使用一张【杀】？', false, 'nodistance');
			}
			player.changeZhuanhuanji('soul_biri');
		},
		ai: {
			order: 8.5,
			result: {
				player(player) {
					if (!player.storage.soul_biri) {
						if (player.hasCard((card) => get.tag(card, 'damage'), 'hs') && player.hp > 1) return 1;
						return 0;
					}
					return 1;
				},
			},
		},
		subSkill: {
			eff: {
				trigger: {
					global: 'useCardToTargeted',
				},
				charlotte: true,
				forced: true,
				filter(event, player) {
					return event.target == player.storage.soul_biri_eff && event.card.name == 'sha';
				},
				content() {
					const target = player.storage.soul_biri_eff;
					player.line(target, 'green');
					trigger.targets.remove(target);
					trigger.targets.push(player);
					player.removeSkill('soul_biri_eff');
				},
			},
		},
	},
	soul_yeyu: {
		audio: 'ext:BLEACH/skill:1:mp3',
		trigger: {
			player: ['damageEnd', 'loseHpEnd', 'recoverEnd'],
		},
		filter(event, player) {
			return event.name != 'recover' || player.getHp() <= 2;
		},
		forced: true,
		content() {
			if (trigger.name == 'recover') {
				player.addBleachBuff('bleachMark_shield');
			} else {
				lib.skill.soul_fenghuan.Fansha(player);
				player.draw(trigger.num);
			}
		},
	},
	soul_liangyi: {
		audio: 'ext:BLEACH/skill:12:mp3',
		logAudio: () => ['ext:BLEACH/skill:6:mp3'],
		trigger: {
			player: 'addBleachBuffBegin2',
		},
		filter(event, player) {
			for (var i in event.buff) {
				if (get.bleachBuffIsNegetive(i)) {
					return true;
				}
			}
			return false;
		},
		content() {
			if (!player.storage.soul_liangyi) player.storage.soul_liangyi = {};
			const buffs = trigger.buff,
				neBuffs = [];
			for (let buff in buffs) {
				if (get.bleachBuffIsNegetive(buff)) {
					neBuffs.push(buff);
				}
			}
			game.log(player, '免疫了状态', '#g' + neBuffs);
			for (let buff of neBuffs) {
				delete trigger.buff[buff];
				if (!player.storage.soul_liangyi[buff]) player.storage.soul_liangyi[buff] = 0;
				player.storage.soul_liangyi[buff] += 2;
			}
			player.markSkill('soul_liangyi');
		},
		intro: {
			content(storage, player) {
				const keys = Object.keys(storage);
				let str = '<li>伤害牌已附加:' + get.translation(keys),
					count = 0;
				for (var i in storage) {
					count++;
					str += count % 2 == 1 ? '<li>' : '&nbsp;&nbsp;&nbsp;';
					str += get.translation(i) + ':' + storage[i];
				}
				return str;
			},
			markcount(storage, player) {
				return Object.keys(storage).length;
			},
		},
		persevereSkill: true,
		forced: true,
		mod: {
			targetEnabled(card, player, target) {
				if (get.type(card) == 'delay') return false;
			},
		},
		group: ['soul_liangyi_eff'],
		subSkill: {
			eff: {
				audio: 'soul_liangyi',
				logAudio(event, player) {
					return 'ext:BLEACH/skill/bleach_liangyi' + get.rand(7, 12) + 'mp3';
				},
				persevereSkill: true,
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					if (!player.storage.soul_liangyi) player.storage.soul_liangyi = {}; //QQQ
					return get.tag(event.card, 'damage') && Object.keys(player.storage.soul_liangyi).length;
				},
				forced: true,
				content() {
					if (!trigger.card.storage) trigger.card.storage = {};
					let buffs = player.storage.soul_liangyi;
					const neBuffs = [];
					for (let buff in buffs) {
						neBuffs.push(buff);
						if (typeof trigger.card.storage[buff] == 'number') {
							trigger.card.storage[buff]++;
						} else {
							trigger.card.storage[buff] = 1;
						}
						buffs[buff]--;
						if (buffs[buff] == 0) delete buffs[buff];
					}
					game.log(trigger.card, '因', '#g【一气两仪】', '附加了状态', '#g' + neBuffs);
					if (!Object.keys(buffs).some((i) => buffs[i] > 0)) player.unmarkSkill('soul_liangyi');
				},
			},
		},
	},
	soul_fengmu: {
		audio: 'ext:BLEACH/skill:6:mp3',
		trigger: {
			target: 'useCardToTargeted',
		},
		filter(event, player) {
			return (
				event.player != player &&
				(event.card.name == 'sha' || get.type(event.card) == 'trick') &&
				player.hasCard((card) => {
					return get.type(card) == 'equip' || _status.connectMode;
				}, 'he')
			);
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseToDiscard(get.prompt('soul_fengmu'), '是否弃置一张装备牌令' + get.translation(trigger.player) + '对你使用的' + get.translation(trigger.card) + '失效并摸一张牌', 'he', (card, player) => {
					return get.type(card) == 'equip';
				})
				.set('ai', (card) => {
					const player = get.player(),
						evt = trigger.parent;
					if (evt.excluded.includes(player)) return 0;
					if (get.attitude(player, trigger.player) > 0) return 0;
					if (get.tag(trigger.card, 'respondSha') || get.tag(trigger.card, 'respondSha') || get.tag(trigger.card, 'damage')) return 7 - get.value(card);
					if (trigger.card.name === 'shunshou' || trigger.card.name === 'guohe') 7 - get.value(card);
					return 0;
				})
				.forResult();
		},
		logTarget: 'player',
		async content(event, trigger, player) {
			trigger.parent.excluded.add(player);
			player.draw();
		},
	},
	soul_wufeng: {
		audio: 'ext:BLEACH/skill:6:mp3',
		limited: true,
		enable: 'phaseUse',
		filter(event, player) {
			return player.getStat('damage');
		},
		async content(event, trigger, player) {
			player.awakenSkill('soul_wufeng');
			let count = 0;
			const cards = [];
			const num = 4 * player.getStat('damage'),
				max = game.players.length + game.dead.length;
			for (var i = 0; i < Math.min(num, ui.cardPile.childNodes.length); i++) {
				const card = ui.cardPile.childNodes[i];
				if (card.name == 'sha') cards.push(card);
			}
			if (cards.length) {
				game.cardsGotoOrdering(cards);
				player.showCards(cards, get.translation(player) + '发动了【舞凤】');
			} else player.chat('今日有些乏了,不如随我回天上大醉三天再战!');
			while (cards.some((i) => player.hasUseTarget(i, false, false)) && count < max) {
				count++;
				const card = cards.shift();
				const result = await player.chooseUseTarget(card, '请选择' + get.translation(card) + '的目标(' + count + '/' + max + ')', false).forResult();
				if (!result || !result.bool) break;
			}
		},
		ai: {
			order: 1,
			result: {
				player(player) {
					if ((player.getStat('damage') || 0) >= 2 && game.hasPlayer((current) => get.attitude(player, current) < 0 && player.canUse('sha', current))) return 1;
					return 0;
				},
			},
		},
		mark: true,
		intro: {
			content: 'limited',
		},
		init: (player, skill) => (player.storage[skill] = false),
	},
	soul_shenfeng: {
		audio: 'ext:BLEACH/skill:18:mp3',
		persevereSkill: true,
		group: ['soul_shenfeng_sanjian', 'soul_shenfeng_qinggang', 'soul_shenfeng_guanshi'],
		mod: {
			attackRange(player, num) {
				if (lib.card.sanjian && player.hasEmptySlot(1)) return num - lib.card.sanjian.distance.attackFrom;
				else if (lib.card.guanshi && (player.hasEmptySlot(3) || player.hasEmptySlot(4))) return num - lib.card.guanshi.distance.attackFrom;
				else if (lib.card.qinggang && player.hasEmptySlot(2)) return num - lib.card.qinggang.distance.attackFrom;
			},
		},
		subSkill: {
			sanjian: {
				nobracket: true,
				equipSkill: true,
				trigger: {
					source: 'damageSource',
				},
				forced: true,
				filter(event, player) {
					if (!player.hasEmptySlot(1) || !lib.card.sanjian || player.hasSkillTag('unequip_equip1')) return false;
					if (!event.player.isIn() || !player.countCards('h')) return false;
					if (!event.card || event.card.name != 'sha') return false;
					if (!event.notLink()) return false;
					return game.hasPlayer((current) => {
						return current != event.player && get.distance(event.player, current) <= 1;
					});
				},
				content() {
					'step 0';
					var damaged = trigger.player;
					player
						.chooseCardTarget({
							filterCard: lib.filter.cardDiscardable,
							filterTarget(card, player, target) {
								var damaged = _status.event.damaged;
								return get.distance(damaged, target) <= 1 && target != damaged;
							},
							ai1(card) {
								return 9 - get.value(card);
							},
							ai2(target) {
								const player = get.player();
								return get.damageEffect(target, player, player);
							},
							prompt: get.prompt('soul_shenfeng'),
							prompt2: '弃置一张手牌对另一名角色造成1点伤害',
						})
						.set('damaged', damaged);
					('step 1');
					if (result.bool) {
						game.playBleach(`soul_shenfeng${get.rand(1, 6)}`);
						player.discard(result.cards);
						result.targets[0].damage('thunder');
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (player.hasSkillTag('unequip_equip1')) return;
							if (player == target && get.subtype(card) == 'equip1') {
								if (get.equipValue(card) <= get.equipValue({ name: 'sanjian' })) return 0;
							}
						},
					},
				},
				sourceSkill: 'soul_shenfeng',
			},
			qinggang: {
				nobracket: true,
				equipSkill: true,
				trigger: {
					player: 'useCardToPlayered',
				},
				filter(event, player) {
					if (!player.hasEmptySlot(2) || !lib.card.qinggang || player.hasSkillTag('unequip_equip1')) return false;
					return event.card && event.card.name == 'sha';
				},
				forced: true,
				logTarget: 'target',
				content() {
					game.playBleach(`soul_shenfeng${get.rand(7, 12)}`);
					trigger.target.addTempSkill('qinggang2');
					trigger.target.storage.qinggang2.add(trigger.card);
					trigger.target.markSkill('qinggang2');
				},
				ai: {
					unequip: true,
					skillTagFilter(player, tag, arg) {
						if (!player.hasEmptySlot(2) || !lib.card.qinggang || player.hasSkillTag('unequip_equip1')) return;
						return arg && arg.name == 'sha';
					},
					effect: {
						target(card, player, target) {
							if (player.hasSkillTag('unequip_equip1')) return;
							if (player == target && get.subtype(card) == 'equip2') {
								if (get.equipValue(card) <= get.equipValue({ name: 'qinggang' })) return 0;
							}
						},
					},
				},
				sourceSkill: 'soul_shenfeng',
			},
			guanshi: {
				nobracket: true,
				equipSkill: true,
				trigger: {
					player: ['shaMiss', 'eventNeutralized'],
				},
				filter(event, player) {
					if (!player.hasEmptySlot(3) || !player.hasEmptySlot(4) || !lib.card.guanshi || player.hasSkillTag('unequip_equip1')) return false;
					if (event.type != 'card' || event.card.name != 'sha' || !event.target.isIn()) return false;
					return player.countCards('he') >= 2;
				},
				forced: true,
				content() {
					'step 0';
					player
						.chooseToDiscard(get.prompt('soul_shenfeng'), '弃置两张牌,令' + get.translation(trigger.card) + '强制命中', 2, 'he')
						.set('ai', (card) => {
							var evt = _status.event.getTrigger();
							if (get.attitude(evt.player, evt.target) < 0) {
								if (player.needsToDiscard()) return 15 - get.value(card);
								if (evt.baseDamage + evt.extraDamage >= Math.min(2, evt.target.hp)) return 8 - get.value(card);
								return 5 - get.value(card);
							}
							return -1;
						})
						.set('complexCard', true);
					('step 1');
					if (result.bool) {
						game.playBleach(`soul_shenfeng${get.rand(13, 18)}`);
						if (event.triggername == 'shaMiss') {
							trigger.untrigger();
							trigger.trigger('shaHit');
							trigger._result.bool = false;
							trigger._result.result = null;
						} else trigger.unneutralize();
					}
				},
				ai: {
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						if (player._shenfeng_guanshi_temp || !player.hasEmptySlot(1) || !lib.card.guanshi || player.hasSkillTag('unequip_equip1')) return;
						player._shenfeng_guanshi_temp = true;
						var bool =
							get.attitude(player, arg.target) < 0 &&
							arg.card &&
							arg.card.name == 'sha' &&
							player.countCards('he', (card) => {
								return card != arg.card && (!arg.card.cards || !arg.card.cards.includes(card)) && get.value(card) < 5;
							}) > 1;
						delete player._shenfeng_guanshi_temp;
						return bool;
					},
					effect: {
						target(card, player, target) {
							if (player.hasSkillTag('unequip_equip1')) return;
							if (player == target && (get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4') && !player.hasCard((card) => ['equip3', 'equip4'].includes(get.subtype(card)), 'e')) {
								if (get.equipValue(card) <= get.equipValue({ name: 'guanshi' })) return 0;
							}
						},
					},
				},
				sourceSkill: 'soul_shenfeng',
			},
		},
	},
	tuidilichang: {
		trigger: {
			player: 'changeHp',
		},
		filter(event, player) {
			return event.num < 0 && player.hp == 1 && _status.currentPhase.isEnemiesOf(player);
		},
		forced: true,
		charlotte: true,
		_priority: 1,
		content() {
			for (let phase of lib.phaseName) {
				const evt = event.getParent(phase);
				if (evt && evt.name == phase) {
					const name = ['准备', '判定', '摸牌', '出牌', '弃牌', '结束'][lib.phaseName.indexOf(phase)];
					game.log(player, '令', _status.currentPhase, '结束了' + name + '阶段');
					player.line(_status.currentPhase, 'thunder');
					evt.skipped = true;
				}
			}
		},
	},
	duoluoshengdun: {
		trigger: {
			player: ['addBleachBuffBegin2', 'damageBegin4'],
		},
		filter(event, player) {
			if (event.name == 'damage') return !event.card;
			for (let buff in event.buff) {
				if (get.bleachBuffIsNegetive(buff) && !get.bleachBuffCanAdd(buff)) return true;
			}
			return false;
		},
		forced: true,
		charlotte: true,
		_priority: 2,
		content() {
			player.awakenSkill('duoluoshengdun');
			if (trigger.name == 'damage') {
				trigger.cancel();
			} else {
				const neBuffs = [];
				for (let name in trigger.buff) {
					if (get.bleachBuffIsNegetive(name) && !get.bleachBuffCanAdd(name)) {
						neBuffs.push(name);
					}
				}
				game.log(player, '免疫了状态', neBuffs, '.');
				for (let name of neBuffs) {
					delete trigger.buff[name];
				}
			}
		},
	},
	lingqiao: {
		charlotte: true,
		mod: {
			cardUsable(card, player, num) {
				if (card.name == 'sha') return num + 1;
			},
		},
	},
	dali: {
		charlotte: true,
		init: (player) => player.addSkill('SoulTree_Attack'),
	},
	soulziyu: {
		trigger: {
			player: ['recoverBegin', 'addBleachBuffBegin1'],
		},
		filter(event, player) {
			if (Math.random() > 0.35 + 0.05 * player.storage.soulziyu) {
				player.storage.soulziyu++;
				return false;
			}
			return event.name == 'recover' || 'bleachMark_shield' in event.buff;
		},
		forced: true,
		charlotte: true,
		_priority: 3,
		content() {
			player.storage.soulziyu = 0;
			if (trigger.name == 'recover') {
				trigger.num++;
			} else {
				for (var i in trigger.buff) {
					if (i == 'bleachMark_shield') trigger.buff[buff]++;
				}
			}
		},
		init: (player, skill) => (player.storage[skill] = 0),
	},
	yisun: {
		trigger: {
			player: 'useCard',
		},
		filter(event, player) {
			return get.type(event.card) == 'trick';
		},
		_priority: 4,
		forced: true,
		popup: false,
		charlotte: true,
		content() {
			if (lib.skill.SoulTree_Focus.judgeFocus(player, '易损')) {
				trigger.effectCount++;
				player.storage.yisun++;
			}
		},
		init(player, skill) {
			player.storage[skill] = 0;
			player.addSkill('SoulTree_Focus');
		},
		mod: {
			focus(player, num) {
				return (num += 5);
			},
		},
	},
	huixinfangshou: {
		trigger: {
			player: 'damageBegin3',
		},
		_priority: 5,
		forced: true,
		popup: false,
		charlotte: true,
		content() {
			if (lib.skill.SoulTree_Focus.judgeFocus(player, '会心防守')) {
				trigger.num--;
				player.storage.huixinfangshou++;
			}
		},
		charlotte: true,
		init(player, skill) {
			player.storage[skill] = 0;
			player.addSkill('SoulTree_Focus');
		},
		mod: {
			focus(player, num) {
				return (num += 5);
			},
		},
	},
	taifeng: {
		trigger: {
			player: 'useCard',
		},
		filter(event, player) {
			return (
				event.card.name == 'sha' &&
				Math.random() <= 0.5 &&
				game.hasPlayer((current) => {
					return current.isEnemiesOf(player) && !event.targets.includes(current) && lib.filter.targetEnabled(event.card, player, current);
				})
			);
		},
		forced: true,
		_priority: 6,
		charlotte: true,
		content() {
			const target = game
				.filterPlayer((current) => {
					return current.isEnemiesOf(player) && !trigger.targets.includes(current) && lib.filter.targetEnabled(trigger.card, player, current);
				})
				.randomGet();
			if (target && target.isIn()) {
				player.line(target, 'green');
				game.log(target, '被', '#g【台风】', '追加为额外目标');
				trigger.targets.push(target);
			}
		},
	},
	tianyinbao: {
		charlotte: true,
		trigger: {
			source: ['recoverEnd', 'addBleachBuffEnd'],
		},
		filter(event, player) {
			if (event.player == player || event.player.isEnemiesOf(player)) return false;
			if (!game.hasPlayer((current) => get.distance(event.player, current, 'pure') == 1 && current.isEnemiesOf(event.player))) return false;
			if (event.name == 'recover') return true;
			for (var i in event.buff) {
				return i == 'bleachMark_shield';
			}
			return false;
		},
		forced: true,
		_priority: 7,
		content() {
			const targets = game.filterPlayer((current) => {
				return get.distance(trigger.player, current, 'pure') == 1 && current.isEnemiesOf(trigger.player);
			});
			player.line(targets, 'green');
			for (let target of targets) {
				target.damage('nocard', 'bleach_break');
			}
		},
	},
	zengyixiongdi: {
		charlotte: true,
		mod: {
			maxHandcard(player, num) {
				return num + 1;
			},
			attackRange(player, num) {
				return num + 1;
			},
		},
	},
	zhiyeshashou: {
		charlotte: true,
		trigger: {
			global: 'roundStart',
		},
		forced: true,
		_priority: 8,
		content() {
			const target = player.getEnemies().randomGet();
			const players = player.getFriends().concat(player);
			target.markAuto('zhiyeshashou_mark', players);
			target.addTempSkill('zhiyeshashou_mark', 'roundStart');
		},
		subSkill: {
			mark: {
				trigger: {
					player: 'dying',
				},
				charlotte: true,
				content() {
					game.asyncDraw(player.storage.zhiyeshashou_mark, 2);
					player.removeSkill('zhiyeshashou_mark');
				},
				silent: true,
				mark: true,
				marktext: '💀',
				intro: {
					content: '你进入濒死时,$摸两张牌',
				},
				ai: {
					threaten: 3,
				},
			},
		},
	},
	equwei: {
		trigger: {
			source: 'addBleachBuffAfter',
		},
		filter(event, player) {
			if (!player.isDamaged()) return false;
			for (let name in event.buff) {
				if (get.bleachBuffIsNegetive(name)) {
					if (Math.random() > 0.35 + 0.05 * player.storage.equwei) {
						player.storage.equwei++;
						return false;
					}
					return true;
				}
			}
			return false;
		},
		content() {
			player.storage.equwei = 0;
			player.recover();
		},
		forced: true,
		charlotte: true,
		_priority: 9,
		init: (player, skill) => (player.storage[skill] = 0),
	},
	huolihuanfa: {
		trigger: {
			player: 'phaseUseBefore',
		},
		filter(event, player) {
			return !player.hasMark('huolihuanfa_count');
		},
		check(event, player) {
			return (player.needsToDiscard() && player.getDamagedHp() >= 2) || player.hp == 1;
		},
		content() {
			trigger.cancel();
			player.skip('phaseDiscard');
			player.recover(2);
			player.addMark('huolihuanfa_count', 15, false);
		},
		charlotte: true,
		_priority: 10,
		group: 'huolihuanfa_count',
		subSkill: {
			count: {
				trigger: {
					global: 'phaseAfter',
				},
				charlotte: true,
				_priority: 10,
				silent: true,
				content() {
					player.removeMark('huolihuanfa_count', 1, false);
				},
				mark: true,
				intro: {
					content: '剩余#回合',
				},
			},
		},
	},
	soulbaoshi: {
		trigger: {
			global: 'gainSoulEnd',
		},
		_priority: 11,
		forced: true,
		charlotte: true,
		content() {
			'step 0';
			player.awakenSkill('soulbaoshi');
			('step 1');
			player.gainMaxHp(2);
		},
	},
	soulqinshi: {
		ai: {
			unequip: true,
			unequip: true,
			skillTagFilter(player, tag, arg) {
				if (!arg || !arg.card || arg.card.name != 'sha') return false;
			},
		},
		charlotte: true,
	},
	soulbingfeng: {
		enable: 'phaseUse',
		filter(event, player) {
			return player.countCards('h');
		},
		filterTarget(card, player, target) {
			return player.canCompare(target);
		},
		usable: 1,
		charlotte: true,
		content() {
			'step 0';
			player.chooseToCompare(target);
			('step 1');
			if (result.bool) {
				target.addBleachBuff('bleachMark_ice');
			}
		},
		ai: {
			order: () => get.order({ name: 'sha' }) + 1,
			result: {
				target(player, target) {
					const num = target.countCards('h');
					if (num == 1) return -1;
					if (num == 2) return -0.7;
					return -0.5;
				},
			},
		},
	},
	youling: {
		trigger: {
			player: 'loseAfter',
			global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
		},
		filter(event, player) {
			const evt = event.getl(player);
			return evt && evt.cards2 && evt.cards2.length;
		},
		silent: true,
		charlotte: true,
		_priority: 12,
		content() {
			'step 0';
			const evt = trigger.getl(player);
			player.addMark('youling', evt.cards2.length);
			('step 1');
			if (player.countMark('youling') >= 7) {
				player.removeMark('youling', 7, false);
				const history = game.getGlobalHistory('useCard');
				for (var i = history.length - 1; i >= 0; i--) {
					const current = history[i].player;
					if (current.isEnemiesOf(player)) {
						current.addBleachBuff('bleachEffect_ice');
						break;
					}
				}
			}
		},
		intro: {
			content: '已失去#张牌',
		},
	},
	lingyabaofa: {
		trigger: {
			global: 'gainSoulEnd',
		},
		_priority: 13,
		forced: true,
		charlotte: true,
		content() {
			'step 0';
			player.awakenSkill('lingyabaofa');
			('step 1');
			player.addBleachBuff('bleachMark_up');
		},
	},
	binghan: {
		mod: {
			globalTo(from, to, distance) {
				return distance + 1;
			},
		},
		charlotte: true,
	},
	dianliangtamen: {
		trigger: {
			player: 'useCardEnd',
		},
		silent: true,
		charlotte: true,
		_priority: 14,
		filter(event, player) {
			return ['basic', 'equip'].includes(get.type(event.card));
		},
		content() {
			player.addMark('dianliangtamen', 1, false);
			if (player.countMark('dianliangtamen') == 4) {
				player.removeMark('dianliangtamen', 4, false);
				player.draw();
			}
		},
		intro: {
			content: '已使用#张牌',
		},
	},
	reshendongzuo: {
		trigger: {
			player: 'phaseJieshuBegin',
		},
		charlotte: true,
		_priority: 15,
		async cost(event, trigger, player) {
			let num = 0,
				number = 0;
			while (true) {
				const {
					result: { bool, cards },
				} =
					number == 13
						? { result: { bool: false } }
						: await player
							.chooseCard(get.prompt('reshendongzuo'), '你可以重铸牌直到点数不能递增', 'he', (card) => {
								return card.number > get.event('number') && get.player().canRecast(card);
							})
							.set('number', number)
							.set('ai', (card) => {
								return 14 - card.number - get.value(card);
							});
				if (bool) {
					num++;
					number = cards[0].number;
					player.recast(cards);
				} else {
					if (num >= 3) event.result = { bool: true, cost_data: Math.floor(num / 3) };
					return;
				}
			}
		},
		async content(event, trigger, player) {
			player.addMark('reshendongzuo', event.cost_data, false);
		},
		group: 'reshendongzuo_eff',
		intro: {
			content: '下#次造成伤害+1',
		},
		subSkill: {
			eff: {
				trigger: {
					source: 'damageBegin1',
				},
				filter(event, player) {
					return player.hasMark('reshendongzuo');
				},
				content() {
					trigger.num++;
					player.removeMark('reshendongzuo', 1, false);
				},
				forced: true,
				charlotte: true,
				_priority: 15,
			},
		},
	},
	haiyanglonghun: {
		trigger: {
			source: 'damageSource',
		},
		filter(event, player) {
			if (!player.isDamaged()) return false;
			if (Math.random() > 0.15 + 0.03 * player.storage.haiyanglonghun) {
				player.storage.haiyanglonghun++;
				return false;
			}
			return true;
		},
		content() {
			player.storage.haiyanglonghun = 0;
			player.recover();
		},
		forced: true,
		charlotte: true,
		_priority: 16,
		init: (player, skill) => (player.storage[skill] = 0),
	},
	xueqiaozhanshu: {
		trigger: {
			player: 'phaseBegin',
		},
		forced: true,
		charlotte: true,
		_priority: 17,
		content() {
			const card = get.cardPile2((card) => get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4');
			if (card) player.gain(card, 'log', 'gain2');
		},
	},
	caijueshi: {
		trigger: {
			source: 'damageBegin1',
		},
		forced: true,
		charlotte: true,
		_priority: 18,
		filter(event, player) {
			return !player.hasSkill('caijueshi_used') && event.player.isEnemiesOf(player) && event.player.hp <= Math.floor(event.player.maxHp / 2);
		},
		content() {
			trigger.num++;
			player.addTempSkill('caijueshi_used');
		},
		group: 'caijueshi_eff',
		subSkill: {
			used: {
				charlotte: true,
			},
			eff: {
				trigger: {
					global: 'dieAfter',
				},
				filter(event, player) {
					return event.player.getRoundHistory('damage', (evt) => evt.source && evt.source == player).length;
				},
				forced: true,
				_priority: 18,
				content() {
					const skills = player.getStockSkills(true, true);
					game.expandSkills(skills);
					const resetSkills = [];
					const suffixs = ['used', 'round', 'block', 'blocker'];
					for (let skill of skills) {
						const info = get.info(skill);
						if (typeof info.usable == 'number') {
							if (player.getStat('triggerSkill')[skill] && player.getStat('triggerSkill')[skill] >= 1) {
								delete player.getStat('triggerSkill')[skill];
								resetSkills.add(skill);
							}
							if (typeof get.skillCount(skill) == 'number' && get.skillCount(skill) >= 1) {
								delete player.getStat('skill')[skill];
								resetSkills.add(skill);
							}
						}
						if (info.round && player.storage[skill + '_roundcount']) {
							delete player.storage[skill + '_roundcount'];
							resetSkills.add(skill);
						}
						for (let suffix of suffixs) {
							if (player.hasSkill(skill + '_' + suffix)) {
								player.removeSkill(skill + '_' + suffix);
								resetSkills.add(skill);
							}
						}
					}
					if (resetSkills.length) {
						let str = '';
						for (var i of resetSkills) {
							str += '【' + get.translation(i) + '】、';
						}
						game.log(player, '重置了技能', '#g' + str.slice(0, -1));
					}
				},
			},
		},
	},
	mingdaosiming: {
		trigger: {
			player: 'damageBegin4',
		},
		forced: true,
		charlotte: true,
		_priority: 19,
		filter(event, player) {
			return event.num >= player.hp;
		},
		content() {
			'step 0';
			player.awakenSkill('mingdaosiming');
			('step 1');
			const current = game.filterPlayer((current) => current != player).randomGet();
			current.chat(get.translation(player) + '出了一个名刀司命!!!');
			trigger.cancel();
		},
	},
	qiangyuzhihu: {
		trigger: {
			global: 'gainSoulEnd',
		},
		_priority: 20,
		forced: true,
		charlotte: true,
		content() {
			'step 0';
			player.awakenSkill('qiangyuzhihu');
			('step 1');
			player.draw(2);
		},
	},
	jingjiyi: {
		trigger: {
			player: 'damageEnd',
		},
		filter(event, player) {
			return event.source && event.source.isIn() && event.source.isEnemiesOf(player) && !player.hasSkill('jingjiyi_round');
		},
		content() {
			player.addTempSkill('jingjiyi_round', 'roundStart');
			trigger.source.damage('nocard', 'notrigger');
		},
		forced: true,
		charlotte: true,
		_priority: 21,
		subSkill: {
			round: {
				charlotte: true,
			},
		},
	},
	zhuanshenti: {
		trigger: {
			global: 'gainSoulEnd',
		},
		filter(event, player) {
			const list = player.getSkills(null, false, false).filter((skill) => {
				const info = lib.skill[skill];
				return info && info.juexingji && !player.awakenedSkills.includes(skill);
			});
			return list.length;
		},
		forced: true,
		charlotte: true,
		_priority: 22,
		content() {
			'step 0';
			player.awakenSkill('zhuanshenti');
			const list = player.getSkills(null, false, false).filter((skill) => {
				const info = lib.skill[skill];
				return info && info.juexingji && !player.awakenedSkills.includes(skill);
			});
			if (list.length == 1) event._result = { control: list[0] };
			else player.chooseControl(list).set('prompt', '令一个觉醒技无视发动条件');
			('step 1');
			player.storage.zhuanshenti_mark = result.control;
			player.markSkill('zhuanshenti_mark');
			const info = lib.skill[result.control];
			if (info.filter && !info.charlotte && !info.zhuanshenti_filter) {
				info.zhuanshenti_filter = info.filter;
				info.filter = function (event, player) {
					if (player.storage.zhuanshenti_mark) return true;
					return this.zhuanshenti_filter.apply(this, arguments);
				};
			}
			player
				.when({ player: ['useSkillAfter', 'logSkill'] })
				.filter((evt) => {
					if (evt.type != 'player') return false;
					const skill = evt.sourceSkill || evt.skill;
					return skill == player.storage.zhuanshenti_mark;
				})
				.then(() => {
					player.unmarkSkill('zhuanshenti_mark');
				});
		},
		subSkill: {
			mark: {
				intro: {
					content: '发动【$】时无视条件',
				},
			},
		},
	},
	tuisheng: {
		trigger: {
			global: 'dieAfter',
		},
		_priority: 23,
		charlotte: true,
		forced: true,
		filter(event, player) {
			return event.player.getRoundHistory('damage', (evt) => evt.source && evt.source == player).length && game.hasPlayer((current) => current.isFriendsOf(player) && current.isDamaged());
		},
		content() {
			const friends = game.filterPlayer((current) => current.isFriendsOf(player) && current.isDamaged());
			if (friends.length) {
				player.line(friends, 'green');
				friends.forEach((i) => i.recover());
			}
		},
	},
	liziqiu: {
		trigger: {
			global: 'damageBegin4',
		},
		forced: true,
		charlotte: true,
		_priority: 23,
		filter(event, player) {
			return event.player.isFriendsOf(player);
		},
		content() {
			'step 0';
			player.awakenSkill('liziqiu');
			('step 1');
			trigger.cancel();
		},
		init(player, skill) {
			player.storage[skill] = false;
			lib.onwash.push(() => {
				player.restoreSkill('liziqiu');
			});
		},
	},
	xiangsiersheng: {
		charlotte: true,
		init: (player) => player.addSkill('SoulTree_Focus'),
		mod: {
			focus(player, num) {
				return (num += 5 * player.getDamagedHp());
			},
		},
	},
	wuxiuhuifu: {
		trigger: {
			player: ['useCardEnd', 'respondEnd'],
		},
		silent: true,
		charlotte: true,
		_priority: 24,
		content() {
			if (player.countMark('wuxiuhuifu') < 10) player.addMark('wuxiuhuifu', 1, false);
			if (player.countMark('wuxiuhuifu') == 10 && player.isDamaged()) {
				player.removeMark('wuxiuhuifu', 10, false);
				player.recover();
			}
		},
		intro: {
			content: '已使用或打出#张牌',
		},
	},
	soulshouhu: {
		charlotte: true,
		init: (player) => player.addSkill('SoulTree_Defense'),
	},
	soulwanmei: {
		trigger: {
			global: 'roundStart',
		},
		forced: true,
		filter(event, player) {
			const suits = [],
				types = [];
			player.getRoundHistory(
				'useCard',
				(evt) => {
					suits.add(evt.card.suit);
					types.add(get.type2(evt.card));
				},
				1
			);
			return suits.length >= 4 || types.length >= 3;
		},
		charlotte: true,
		_priority: 25,
		content() {
			let num = 0;
			const suits = [],
				types = [];
			player.getRoundHistory(
				'useCard',
				(evt) => {
					suits.add(evt.card.suit);
					types.add(get.type2(evt.card));
				},
				1
			);
			if (types.length >= 3) num++;
			if (suits.length >= 4) num++;
			player.draw(num);
		},
	},
	jiankang: {
		charlotte: true,
		init: (player) => player.addSkill('SoulTree_Stamina'),
	},
	huiwan: {
		trigger: {
			player: ['useSkillAfter', 'logSkill'],
		},
		filter(event, player) {
			if (event.type != 'player') return false;
			const skill = event.sourceSkill || event.skill;
			const info = get.info(skill);
			if (info.charlotte) return false;
			const translation = get.skillInfoTranslation(skill, player);
			if (!translation) return false;
			const match = translation.match(/<?出牌阶段限一次/g);
			if (!match || match.every((value) => value != '出牌阶段限一次')) return false;
			return true;
		},
		_priority: 26,
		usable: 1,
		forced: true,
		charlotte: true,
		content() {
			const skill = trigger.sourceSkill || trigger.skill;
			const info = get.info(skill);
			if (typeof info.usable == 'number') {
				if (player.getStat('triggerSkill')[skill] && player.getStat('triggerSkill')[skill] >= 1) {
					delete player.getStat('triggerSkill')[skill];
				}
				if (typeof get.skillCount(skill) == 'number' && get.skillCount(skill) >= 1) {
					delete player.getStat('skill')[skill];
				}
			}
			game.log(player, '重置了技能', '#g【' + get.translation(skill) + '】');
		},
	},
	jinghuashuiyue: {
		trigger: {
			target: 'useCardToTarget',
		},
		_priority: 27,
		charlotte: true,
		filter(event, player) {
			return get.tag(event.card, 'damage') && player.hp == 1 && game.hasPlayer((current) => !event.targets.includes(current));
		},
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt('jinghuashuiyue'), '将' + get.translation(trigger.card) + '牌转移给其他角色', (card, player, target) => {
					return target != player && !get.event('targets').includes(target);
				})
				.set('ai', (target) => {
					const player = get.player();
					return get.effect(target, trigger.card, trigger.player, player);
				})
				.set('targets', trigger.targets)
				.forResult();
		},
		async content(event, trigger, player) {
			player.awakenSkill('jinghuashuiyue');
			game.broadcastAll(() => {
				_status.gifEffect = ui.create.div('.bleach-gif-background');
				_status.gifEffect.setBackgroundImage('extension/BLEACH/mp4/kyokasuigetsu.gif');
				document.body.insertBefore(_status.gifEffect, ui.window);
				setTimeout(() => {
					if (_status.gifEffect) _status.gifEffect.delete();
				}, 500);
			});
			player.chat('镜花水月吗？真是有趣的能力');
			player.line(event.targets, 'thunder');
			const evt = trigger.parent;
			evt.triggeredTargets2.remove(player);
			evt.targets.remove(player);
			evt.targets.push(event.targets[0]);
		},
	},
	chaoyuesiwang: {
		trigger: {
			player: 'dying',
		},
		_priority: 28,
		forced: true,
		charlotte: true,
		content() {
			'step 0';
			player.awakenSkill('chaoyuesiwang');
			('step 1');
			player.recoverTo(4);
			player.addTempSkill('chaoyuesiwang_lose', { source: 'dieAfter' });
		},
		subSkill: {
			lose: {
				trigger: {
					global: 'phaseEnd',
				},
				_priority: 28,
				forced: true,
				charlotte: true,
				content() {
					player.loseHp();
				},
			},
		},
	},
	kexue: {
		trigger: {
			source: 'damageSource',
		},
		filter(event, player) {
			return player.isDamaged() && !player.hasMark('kexue_count');
		},
		_priority: 29,
		forced: true,
		charlotte: true,
		content() {
			player.recover();
			player.addMark('kexue_count', 5, false);
		},
		group: 'kexue_count',
		subSkill: {
			count: {
				trigger: {
					global: 'phaseAfter',
				},
				charlotte: true,
				_priority: 29,
				silent: true,
				content() {
					player.removeMark('kexue_count', 1, false);
				},
				mark: true,
				intro: {
					content: '剩余#回合',
				},
			},
		},
	},
	fuchoutianshi: {
		trigger: {
			source: ['recoverAfter', 'addBleachBuffAfter'],
		},
		forced: true,
		charlotte: true,
		_priority: 30,
		filter(event, player) {
			if (event.player.isEnemiesOf(player) || event.player == player) return false;
			if (event.name == 'recover') return true;
			for (let name in event.buff) {
				return name == 'bleachMark_shield';
			}
			return false;
		},
		content() {
			let num = 1;
			if (trigger.name == 'recover') num = trigger.num;
			else {
				for (var i in trigger.buff) {
					if (key == 'bleachMark_shield') {
						num = trigger.buff[key];
					}
				}
			}
			player.addMark('fuchoutianshi', num, false);
			if (player.countMark('fuchoutianshi') >= 4) {
				player.awakenSkill('fuchoutianshi');
				player.addSkill('fuchoutianshi_eff');
			}
		},
		intro: {
			content: '已为队友回复或提供#共点体力/护盾',
		},
		subSkill: {
			eff: {
				trigger: {
					player: 'useCard',
				},
				forced: true,
				charlotte: true,
				_priority: 30,
				filter(event) {
					return event.card && event.card.name == 'sha';
				},
				content() {
					trigger.baseDamage++;
				},
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha') return num + 1;
					},
				},
			},
		},
	},
	weikuaibupo: {
		trigger: {
			source: 'damageBegin1',
		},
		forced: true,
		charlotte: true,
		_priority: 30,
		filter(event, player) {
			let getn = function (cards) {
				return cards.map((i) => i.number).reduce((p, c) => p + c, 0);
			};
			const num = getn(player.getCards('he')) - getn(event.player.getCards('he')) - Math.max(0, (player.countCards('he') - event.player.countCards('he')) * 7);
			return num >= 10;
		},
		content() {
			let getn = function (cards) {
				return cards.map((i) => i.number).reduce((p, c) => p + c, 0);
			};
			let num = getn(player.getCards('he')) - getn(trigger.player.getCards('he')) - Math.max(0, (player.countCards('he') - event.player.countCards('he')) * 7);
			trigger.num += Math.floor(num / 10);
		},
	},
	soulsiyi: {
		trigger: {
			global: 'dieAfter',
		},
		filter(event, player) {
			return event.player.isEnemiesOf(player) && event.player.getRoundHistory('damage', (evt) => evt.source && evt.source == player).length;
		},
		charlotte: true,
		forced: true,
		_priority: 31,
		group: ['soulzuzhou', 'soulsiyi_draw'],
		content() {
			player.addMark('soulzuzhou_power', 20);
		},
		subSkill: {
			draw: {
				trigger: {
					player: 'phaseDrawBegin2',
				},
				charlotte: true,
				forced: true,
				_priority: 31,
				filter(event, player) {
					return !event.numFixed && player.countMark('soulzuzhou_power') >= 20;
				},
				async content(event, trigger, player) {
					trigger.num += Math.floor(player.countMark('soulzuzhou_power') / 20);
				},
			},
		},
	},
	xieduzhe: {
		trigger: {
			global: ['loseAfter', 'loseAsyncAfter'],
		},
		charlotte: true,
		forced: true,
		_priority: 32,
		group: ['soulzuzhou', 'xieduzhe_effect'],
		filter(event, player) {
			if (!event.player || !event.player.isIn()) return false;
			if (event.player.isFriendsOf(player)) return false;
			if (event.name == 'lose') {
				if (event.type != 'discard') return false;
				if ((event.discarder || event.getParent(2).player) != player) return false;
				if (!event.getl(event.player).cards2.length || !event.getl(event.player).cards2.some((i) => get.type2(i) == 'equip')) return false;
				return true;
			} else if (event.type == 'discard') {
				if (!event.discarder) return false;
				return (
					event.discarder == player &&
					game.hasPlayer((current) => {
						return current != event.discarder && event.getl(current).cards2.length && event.getl(current).cards2.some((i) => get.type2(i) == 'equip');
					})
				);
			}
			return false;
		},
		content() {
			lib.skill.soulzuzhou.addZuzhou(trigger.player);
		},
		init: (player, skill) => (player.storage[skill] = 0),
		subSkill: {
			effect: {
				trigger: {
					player: 'damageBegin3',
				},
				charlotte: true,
				forced: true,
				_priority: 32,
				filter(event, player) {
					return Math.ceil((player.countMark('soulzuzhou_power') / (100 + player.countMark('soulzuzhou_power'))) * 100) > Math.ceil(Math.random() * 100);
				},
				content() {
					trigger.num--;
					player.storage.xieduzhe++;
				},
			},
		},
	},
	soulzuzhou: {
		trigger: {
			global: 'phaseEnd',
		},
		_priority: 10000,
		filter(event, player) {
			return game.hasPlayer((current) => current.isEnemiesOf(player) && current.getStorage('soulzuzhou').length);
		},
		silent: true,
		charlotte: true,
		forceDie: true,
		content() {
			'step 0';
			var num = 0;
			player.getEnemies().filter((value) => {
				if (value.getStorage('soulzuzhou').length) num += value.getStorage('soulzuzhou').length;
			});
			event.num = player.countMark('soulzuzhou_power');
			player.addMark('soulzuzhou_power', num);
			('step 1');
			if (player.hasSkill('heranliaobang')) {
				if (Math.floor(event.num / 10) % 10 != Math.floor(player.countMark('soulzuzhou_power') / 10) % 10) {
					player.popup('heranliaobang', 'wood');
					game.log(player, '发动了', '#g【核燃料棒】');
					game.countPlayer((current) => {
						if (current.isEnemiesOf(player)) {
							player.storage.heranliaobang++;
							current.loseHp();
						}
					});
				}
			}
			if (player.hasSkill('yibingshizhe')) {
				var num = Math.floor(player.countMark('soulzuzhou_power') / 20) - player.storage.yibingshizhe;
				if (num > 0) {
					player.popup('yibingshizhe', 'wood');
					game.log(player, '发动了', '#g【疫病使者】');
					player.gainMaxHp();
					player.recover();
					player.storage.yibingshizhe += num;
				}
			}
		},
		addZuzhou(player) {
			if (!player.storage.soulzuzhou) player.storage.soulzuzhou = [];
			player.storage.soulzuzhou.push(5);
			player.markSkill('soulzuzhou');
			player.addSkill('soulzuzhou_time');
		},
		marktext: '❂',
		intro: {
			name: '诅咒',
			content(storage, player) {
				var str = '';
				for (var i = 0; i < storage.length; i++) {
					var str2 = (i > 0 ? '<br>' : '') + '&nbsp;-第' + (i + 1) + '层剩余:' + storage[i] + '回合-';
					str += str2;
				}
				return str;
			},
		},
		subSkill: {
			time: {
				trigger: {
					global: 'phaseAfter',
				},
				_priority: 10000,
				forced: true,
				forceOut: true,
				charlotte: true,
				filter(event, player) {
					return player.getStorage('soulzuzhou').length;
				},
				content() {
					let storage = player.storage.soulzuzhou;
					for (var i in storage) {
						storage[i]--;
					}
					player.markSkill('soulzuzhou');
					let lose = storage.filter((i) => i == 0);
					if (lose.length) {
						storage.removeArray(lose);
						if (storage.length == 0) player.unmarkSkill('soulzuzhou');
					}
				},
			},
			power: {
				marktext: '☣',
				intro: {
					name: '诅咒能量',
					content(storage, player) {
						var str = '共有' + storage + '层诅咒能量';
						const list = ['xieduzhe', 'fushiji', 'siwangchumo', 'heranliaobang', 'yibingshizhe', 'moriyuyanzhe'];
						const prompt = ['亵渎者减伤', '腐蚀剂异常', '死亡触摸增伤', '核燃料棒流血', '疫病使者体力', '末日预言者增伤'];
						for (var i = 0; i < list.length; i++) {
							if (player.hasSkill(list[i])) str += '<li>' + prompt[i] + ':' + get.translation(player.storage[list[i]] || 0) + '点';
						}
						return str;
					},
				},
			},
		},
	},
	fushiji: {
		trigger: {
			source: 'damageSource',
		},
		filter(event, player) {
			return event.hasNature() && event.player.isEnemiesOf(player);
		},
		charlotte: true,
		forced: true,
		_priority: 33,
		group: ['soulzuzhou', 'fushiji_effect'],
		content() {
			lib.skill.soulzuzhou.addZuzhou(trigger.player);
		},
		subSkill: {
			effect: {
				trigger: {
					source: 'damageSource',
				},
				filter(event, player) {
					return event.player.isEnemiesOf(player) && player.countMark('soulzuzhou_power') >= 8 && player.getHistory('sourceDamage').indexOf(event) == 0;
				},
				charlotte: true,
				forced: true,
				_priority: 33,
				content() {
					player.storage.fushiji += Math.floor(player.countMark('soulzuzhou_power') / 8);
					trigger.player.addBleachBuff('bleachMark_du', Math.floor(player.countMark('soulzuzhou_power') / 8));
				},
			},
		},
	},
	xuriren: {
		trigger: {
			source: 'damageBefore',
		},
		filter(event, player) {
			return event.parent.name == 'sha';
		},
		charlotte: true,
		forced: true,
		_priority: 34,
		content() {
			trigger.cancel();
			trigger.player.hp -= trigger.num;
			trigger.player.update();
			if (trigger.player.hp <= 0) trigger.player.dying();
		},
		ai: {
			jueqing: true,
		},
	},
	faze: {
		charlotte: true,
		init: (player) => player.addSkill('SoulTree_SpiriualPressure'),
	},
	jiuzhulingren: {
		trigger: {
			player: ['loseHpBefore', 'damageBefore'],
		},
		filter(event, player) {
			return player.hp - event.num <= Math.floor(player.maxHp / 2);
		},
		charlotte: true,
		forced: true,
		_priority: 35,
		content() {
			'step 0';
			player.awakenSkill('jiuzhulingren');
			('step 1');
			player.addBleachBuff('bleachMark_shield', 2);
		},
	},
	naijiu: {
		charlotte: true,
		trigger: {
			player: 'damageEnd',
		},
		forced: true,
		filter(event, player) {
			return !player.hasMark('naijiu_count');
		},
		_priority: 36,
		content() {
			player.recover();
			player.addMark('naijiu_count', 8, false);
		},
		group: 'naijiu_count',
		subSkill: {
			count: {
				trigger: {
					global: 'phaseAfter',
				},
				charlotte: true,
				_priority: 36,
				silent: true,
				content() {
					player.removeMark('naijiu_count', 1, false);
				},
				intro: {
					content: '剩余#回合冷却',
				},
			},
		},
	},
	lianyulonghun: {
		trigger: {
			source: 'damageSource',
		},
		filter(event, player) {
			if (!event.player.isIn()) return false;
			if (Math.random() > 0.15 + 0.03 * player.storage.lianyulonghun) {
				player.storage.lianyulonghun++;
				return false;
			}
			return event.parent.name != 'lianyulonghun';
		},
		charlotte: true,
		_priority: 37,
		forced: true,
		content() {
			player.storage.lianyulonghun = 0;
			trigger.player.damage('fire');
		},
		init: (player, skill) => (player.storage[skill] = 0),
	},
	shunshen: {
		charlotte: true,
		mod: {
			targetEnabled(card, player, target) {
				if (get.type(card) == 'delay') return false;
			},
		},
	},
	shizuizhe: {
		charlotte: true,
		trigger: {
			global: 'addBleachBuffBegin2',
		},
		_priority: 38,
		forced: true,
		filter(event, player) {
			if (event.player == player || event.player.isEnemiesOf(player)) return false;
			for (let buff in event.buff) {
				if (get.bleachBuffIsNegetive(buff)) return event.getParent(2).name != 'shizuizhe';
			}
			return false;
		},
		content() {
			const neBuffs = [];
			for (let name in trigger.buff) {
				if (get.bleachBuffIsNegetive(name)) {
					neBuffs.push(name);
				}
			}
			game.log(trigger.player, '免疫了状态', neBuffs, '.');
			const map = {};
			for (let name of neBuffs) {
				map[name] = trigger.buff[name];
				delete trigger.buff[name];
			}
			player.addBleachBuff(map);
		},
	},
	zhongjishou: {
		trigger: {
			source: 'damageBegin1',
		},
		charlotte: true,
		_priority: 38,
		forced: true,
		filter(event, player) {
			if (Math.random() > 0.03 * (player.storage.zhongjishou + player.maxHp)) {
				player.storage.zhongjishou++;
				return false;
			}
			return true;
		},
		content() {
			player.storage.zhongjishou = 0;
			trigger.num++;
		},
		init: (player, skill) => (player.storage[skill] = 0),
	},
	shanmailonghun: {
		trigger: {
			global: 'roundStart',
		},
		charlotte: true,
		_priority: 39,
		forced: true,
		filter(event, player) {
			return player.getRoundHistory('damage', null, 1).length + player.getRoundHistory('sourceDamage', null, 1).length == 0 && !player.hasMark('bleachMark_shield');
		},
		content() {
			player.addBleachBuff('bleachMark_shield');
		},
	},
	zhipaimoshu: {
		trigger: {
			player: 'useCard',
		},
		forced: true,
		charlotte: true,
		_priority: 40,
		usable: 1,
		filter(event, player) {
			return event.card && event.card.name == 'sha';
		},
		popup: false,
		async content(event, trigger, player) {
			const target = (
				await player.chooseTarget('纸牌魔术:令一名其他角色打出一张基本牌', true, lib.filter.notMe).set('ai', (target) => {
					return -get.attitude(get.player(), target);
				})
			).result.targets[0];
			const result = await target
				.chooseToRespond(`###是否打出基本牌响应${get.translation(player)}？###${get.translation(player)}使用了一张不公开目标的${get.translation(trigger.card)}.若你选择响应且你不是目标,则其摸两张牌;若你不响应且你是目标,你受到其造成的1点伤害.`, (card, player) => {
					return get.type(card) == 'basic';
				})
				.set('ai', (card) => {
					const player = get.player(),
						event = get.event();
					const source = event.parent.player;
					if (get.attitude(player, source) > 0) {
						return -1;
					} else {
						const needsTao = player.hp <= 1;
						const shanAndTao = player.getCards('hs', (card) => {
							const name = card.name;
							return name == 'shan' || (needsTao && name == 'shan');
						});
						shanAndTao.remove(card);
						if (card.cards) shanAndTao.removeArray(card.cards);
						if (!shanAndTao.length) return 0;
					}
					return event.getRand('zhipaimoshu') > 1 / Math.max(1, player.hp) ? 0 : get.order(card);
				})
				.forResult();
			if (result.bool) {
				if (!trigger.targets.includes(target)) player.draw(2);
			} else if (trigger.targets.includes(target)) {
				await trigger.directHit.add(target);
			}
		},
		ai: {
			ignoreLogAI: true,
			skillTagFilter(player, tag, args) {
				if (args) {
					return args.card && args.card.name == 'sha';
				}
			},
		},
		group: 'zhipaimoshu_hide',
		subSkill: {
			hide: {
				trigger: {
					player: 'useCard0',
				},
				forced: true,
				charlotte: true,
				_priority: 40,
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				usable: 1,
				async content(event, trigger, player) {
					trigger.hideTargets = true;
					game.log(player, '隐藏了', trigger.card, '的目标');
				},
			},
		},
	},
	ziwohuimie: {
		trigger: {
			global: 'phaseBegin',
		},
		silent: true,
		charlotte: true,
		_priority: 41,
		filter(event, player) {
			return player.countMark('ziwohuimie') < 10;
		},
		content() {
			player.addMark('ziwohuimie', 1, false);
			if (player.countMark('ziwohuimie') == 10) {
				const targets = game
					.filterPlayer((current) => get.distance(current, player) <= 1 && current.isEnemiesOf(player))
					.concat(player)
					.sortBySeat();
				player.awakenSkill('ziwohuimie');
				player.removeMark('ziwohuimie', 10, false);
				targets.forEach((i) => i.damage(2, 'bleach_break'));
			}
		},
		intro: {
			content: '已经过#回合',
		},
	},
	shoumingyutian: {
		trigger: {
			global: 'gainSoulEnd',
		},
		filter(event, player) {
			const skills = player.getStockSkills(true, true).filter((skill) => {
				if (player.hasSkill(skill)) return false;
				const info = get.info(skill);
				return info && info.zhuSkill;
			});
			return skills.length;
		},
		forced: true,
		charlotte: true,
		_priority: 42,
		content() {
			const skills = player.getStockSkills(true, true).filter((skill) => {
				if (player.hasSkill(skill)) return false;
				const info = get.info(skill);
				return info && info.zhuSkill;
			});
			player.addSkills(skills);
		},
	},
	lianjinlonghun: {
		trigger: {
			player: 'damageBegin3',
			source: 'damageBegin1',
		},
		forced: true,
		charlotte: true,
		_priority: 43,
		filter(event, player) {
			if (player.hp > Math.floor(player.maxHp / 2)) return false;
			if (Math.random() > 0.1 + 0.05 * player.storage.lianjinlonghun) {
				player.storage.lianjinlonghun++;
				return false;
			}
		},
		content() {
			player.storage.lianjinlonghun = 0;
			event.triggername == 'damageBegin1' ? trigger.num++ : trigger.num--;
		},
		init: (player, skill) => (player.storage[skill] = 0),
	},
	jifenglonghun: {
		charlotte: true,
		mod: {
			globalFrom(from, to, distance) {
				return distance - 1;
			},
		},
	},
	fuchouzhexunzhang: {
		trigger: {
			source: 'damageBegin1',
		},
		filter(event, player) {
			if (Math.random() > 0.12 + 0.03 * player.storage.fuchouzhexunzhang) {
				player.storage.fuchouzhexunzhang++;
				return false;
			}
			return true;
		},
		getIndex(event, player, triggername) {
			return Math.min(event.num, 9) || 1;
		},
		content() {
			player.storage.fuchouzhexunzhang = 0;
			trigger.num++;
		},
		forced: true,
		charlotte: true,
		_priority: 44,
		init: (player, skill) => (player.storage[skill] = 0),
	},
	bengyuyizhi: {
		charlotte: true,
		enable: 'phaseUse',
		usable: 1,
		filter(event, player) {
			return !player.hasSkill('bleach_card_hougyoku_skill');
		},
		content() {
			'step 0';
			const list = ['basic', 'trick', 'equip'];
			player.chooseControl(list).set('prompt', '崩玉:请选择你即将获得的一种类型的牌').ai = () => {
				if (player.hasSkill('bleach_fupo')) return 'equip';
				if (player.countCards('he', { type: 'equip' }) < 2) {
					return 'equip';
				}
				return 'trick';
			};
			('step 1');
			const card = get.cardPile((card) => get.type(card, 'trick') == result.control);
			if (card) player.gain(card, 'draw');
		},
		ai: {
			order: 13,
			result: {
				player: 1,
			},
		},
	},
	gushijialiang: {
		trigger: {
			player: ['logSkill', 'useSkillAfter'],
		},
		charlotte: true,
		forced: true,
		filter(event, player) {
			if (event.type != 'player') return false;
			if (player.isHealthy()) return false;
			const skill = get.sourceSkillFor(event);
			const info = get.info(skill);
			if (info.charlotte) return false;
			if (Math.random() > 0.2 + 0.02 * player.storage.gushijialiang) {
				player.storage.gushijialiang++;
				return false;
			}
			return true;
		},
		_priority: 1001,
		content() {
			player.storage.gushijialiang = 0;
			player.recover();
		},
		init: (player, skill) => (player.storage[skill] = 0),
	},
	moguizhiwu: {
		charlotte: true,
		init: (player) => player.addSkill(['SoulTree_SpiriualPressure', 'SoulTree_Stamina']),
	},
	xiangong: {
		trigger: {
			player: 'damageEnd',
			source: 'damageSource',
		},
		charlotte: true,
		_priority: 1002,
		silent: true,
		filter(event, player) {
			return !player.hasMark('xiangong_count');
		},
		content() {
			player.addMark('xiangong_count', 4, false);
			player.when(['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter']).then(() => {
				const num = player.getStat().damage;
				if (typeof num == 'number') {
					player.draw(2);
					player
						.when('phaseAfter')
						.assign({
							mod: {
								maxHandcard(player, num) {
									return 2 + num;
								},
							},
						})
						.then(() => { });
				}
			});
		},
		group: 'xiangong_count',
		subSkill: {
			count: {
				trigger: {
					global: 'phaseAfter',
				},
				charlotte: true,
				_priority: 1002,
				silent: true,
				content() {
					player.removeMark('xiangong_count', 1, false);
				},
				intro: {
					content: '剩余#回合冷却',
				},
			},
		},
	},
	linghunranshao: {
		charlotte: true,
		init: (player) => player.addSkill(['SoulTree_Attack', 'SoulTree_Focus']),
	},
	wangdezhizi: {
		trigger: {
			global: 'gainSoulEnd',
		},
		_priority: 1003,
		forced: true,
		charlotte: true,
		filter(event, player) {
			return !player.storage.wangdezhizi;
		},
		content() {
			'step 0';
			player.storage.wangdezhizi = true;
			('step 1');
			player.gainMaxHp();
			player.recover();
		},
		ai: {
			canUseCero: true,
		},
	},
	soulkuwei: {
		charlotte: true,
		trigger: {
			source: 'damageSource',
		},
		forced: true,
		filter(event, player) {
			return event.player.isEnemiesOf(player);
		},
		_priority: 1004,
		content() {
			trigger.player.addSkill('soulkuwei_effect');
			trigger.player.addMark('soulkuwei', 4, false);
		},
		intro: {
			content(storage, player) {
				return '造成伤害有' + get.translation(35 + player.getDamagedHp() * 5) + '%概率-1';
			},
		},
		subSkill: {
			effect: {
				trigger: {
					source: 'damageBegin1',
				},
				forced: true,
				filter(event, player) {
					return Math.random() <= 0.35 + player.getDamagedHp() * 0.05;
				},
				group: 'soulkuwei_count',
				_priority: 1004,
				content() {
					trigger.num--;
				},
			},
			count: {
				trigger: {
					global: 'phaseAfter',
				},
				charlotte: true,
				_priority: 1004,
				silent: true,
				content() {
					player.removeMark('soulkuwei', 1, false);
					if (!player.hasMark('soulkuwei')) player.removeSkill('soulkuwei_effect');
				},
			},
		},
	},
	jurendeyoubi: {
		charlotte: true,
		trigger: {
			global: 'damageBegin4',
		},
		forced: true,
		filter(event, player) {
			return !player.hasMark('jurendeyoubi_count') && event.player.isFriendsOf(player);
		},
		_priority: 1005,
		content() {
			trigger.cancel();
			player.addMark('jurendeyoubi_count', 8, false);
		},
		group: 'jurendeyoubi_count',
		subSkill: {
			count: {
				trigger: {
					global: 'phaseAfter',
				},
				charlotte: true,
				_priority: 1005,
				silent: true,
				content() {
					player.removeMark('jurendeyoubi_count', 1, false);
				},
				intro: {
					content: '剩余#回合CD',
				},
			},
		},
	},
	emodezuobi: {
		charlotte: true,
		trigger: {
			player: 'useCard',
		},
		forced: true,
		filter(event, player) {
			return event.card && event.card.name == 'sha' && event.notLink();
		},
		usable: 1,
		_priority: 1006,
		content() {
			trigger.baseDamage++;
		},
	},
	huoshangjiaoyou: {
		charlotte: true,
		trigger: {
			source: 'damageSource',
		},
		forced: true,
		filter: (event, player) => event.card,
		_priority: 1007,
		content() {
			trigger.player.addBleachBuff('bleachMark_fire', 1, player);
		},
	},
	shengdongjixi: {
		enable: 'phaseUse',
		usable: 1,
		filter(event, player) {
			return player.hasFriend();
		},
		filterCard: true,
		position: 'he',
		filterTarget(card, player, target) {
			if (player == target) return false;
			if (ui.selected.targets.length == 1) {
				return target.isFriendsOf(player);
			}
			return target.isEnemiesOf(player);
		},
		targetprompt: ['给一张牌', '得两张牌'],
		selectTarget: 2,
		multitarget: true,
		filterCard: true,
		check(card) {
			return 7 - get.value(card);
		},
		discard: false,
		lose: false,
		delay: 0,
		charlotte: true,
		content() {
			'step 0';
			player.give(cards, targets[0]);
			('step 1');
			if (targets[0].getCards('he').length <= 2) {
				event.directresult = targets[0].getCards('he');
			} else {
				targets[0].chooseCard('he', '将两张牌交给' + get.translation(targets[1]), 2, true);
			}
			('step 2');
			if (!event.directresult) event.directresult = result.cards;
			targets[0].give(event.directresult, targets[1]);
		},
		ai: {
			order: 8,
			result: {
				target(player, target) {
					if (ui.selected.targets.length == 0) {
						return -1;
					} else {
						return 1;
					}
				},
			},
		},
	},
	souljianren: {
		charlotte: true,
		trigger: {
			global: 'phaseBegin',
		},
		forced: true,
		filter(event, player) {
			if (!player.isDamaged()) return false;
			if (Math.random() > 0.2 + 0.03 * player.storage.souljianren) {
				player.storage.souljianren++;
				return false;
			}
			return true;
		},
		_priority: 1008,
		content() {
			player.storage.souljianren = 0;
			player.recover();
		},
		init: (player, skill) => (player.storage[skill] = 0),
	},
	linghunhongxi: {
		trigger: {
			source: 'damageSource',
		},
		filter(event, player) {
			return event.SoulTree_Focus == true;
		},
		charlotte: true,
		forced: true,
		_priority: 1009,
		content() {
			player.recover();
			player.storage.linghunhongxi++;
		},
		init(player, skill) {
			player.storage[skill] = 0;
			player.addSkill('SoulTree_Focus');
		},
		mod: {
			focus(player, num) {
				return (num += 5);
			},
		},
	},
	guanjianhuixin: {
		charlotte: true,
		init: (player) => player.addSkill('SoulTree_Focus'),
		mod: {
			focus(player, num) {
				return (num += 15);
			},
		},
	},
	roubaodan: {
		charlotte: true,
		enable: 'phaseUse',
		selectTarget: 2,
		filterTarget(card, player, target) {
			if (ui.selected.targets.length) return target.isEnemiesOf(ui.selected.targets[0]);
			return true;
		},
		multitarget: true,
		multiline: true,
		contentBefore() {
			player.awakenSkill('roubaodan');
		},
		content() {
			'step 0';
			event.num = 0;
			targets.sortBySeat();
			('step 1');
			if (event.num < targets.length) {
				targets[event.num].damage('fire', 2, 'nocard');
				event.num++;
			}
			if (event.num == targets.length) event.finish();
			else event.redo();
		},
		ai: {
			order: 1,
			result: {
				target(player, target) {
					const att = get.sgn(get.attitude(player, target));
					if (get.attitude(player, target) > 0) return att * target.hp;
					return att * get.damageEffect(target, player, player, 'fire');
				},
			},
		},
	},
	soulfuchou: {
		charlotte: true,
		trigger: {
			source: ['damageBegin1', 'damageSource'],
		},
		filter(event, player) {
			return Math.random() <= 0.35 * game.dead.filter((value) => value.isFriendsOf(player)).length;
		},
		forced: true,
		_priority: 1011,
		content() {
			if (event.triggername == 'damageBegin1') trigger.num++;
			else player.recover();
		},
	},
	ziwogongku: {
		charlotte: true,
		mod: {
			maxHandcard(player, num) {
				return num + 4;
			},
		},
	},
	haoling: {
		charlotte: true,
		enable: 'phaseUse',
		filter(event, player) {
			return player.hasFriend();
		},
		content() {
			'step 0';
			player.awakenSkill('haoling');
			('step 1');
			const friends = player.getFriends();
			for (var i of friends) {
				i.recover();
				i.addTempSkill('haoling_effect', { player: 'phaseEnd' });
			}
		},
		subSkill: {
			effect: {
				trigger: {
					player: 'phaseDrawBegin2',
				},
				forced: true,
				firstDo: true,
				content() {
					trigger.num++;
				},
				charlotte: true,
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha') return num + 1;
					},
				},
				mark: true,
				marktext: '旗',
				intro: {
					content: '你已被强化 快送',
				},
			},
		},
		ai: {
			order: 1,
			result: {
				player(player) {
					return game.countPlayer((current) => {
						if (current != player && current.isFriendsOf(player)) {
							return get.sgn(get.recoverEffect(current, player, player));
						}
					});
				},
			},
		},
	},
	soulcanren: {
		charlotte: true,
		init: (player) => player.addSkill('SoulTree_Attack'),
		mod: {
			attacks(player, num) {
				return num + 1;
			},
		},
	},
	chaofanxiee: {
		charlotte: true,
		trigger: {
			player: ['logSkill', 'useSkillAfter'],
		},
		forced: true,
		_priority: 1012,
		filter(event, player) {
			if (event.type != 'player') return false;
			const skill = event.sourceSkill || event.skill;
			const info = get.info(skill);
			return !info.charlotte && event.targets && event.targets.some((i) => i.isEnemiesOf(player));
		},
		content() {
			player.draw();
		},
	},
	chaoyuezhe: {
		trigger: {
			player: 'useCardEnd',
		},
		charlotte: true,
		_priority: 1013,
		forced: true,
		filter(event, player) {
			if (!event.cards.length) return true;
			const cards = [];
			player.getHistory('lose', (evt) => {
				if (event != evt.parent) return false;
				cards.addArray(evt.getl(player).hs);
			});
			return event.cards && event.cards.some((card) => !cards.includes(card));
		},
		content() {
			player.draw();
		},
	},
	soulxisheng: {
		trigger: {
			global: 'damageEnd',
		},
		forced: true,
		filter(event, player) {
			return !player.hasSkill('soulxisheng_round') && player.getFriends().includes(event.player) && event.player.isIn();
		},
		charlotte: true,
		_priority: 1014,
		content() {
			player.loseHp();
			player.addTempSkill('soulxisheng_round', 'roundStart');
			trigger.player.addBleachBuff('bleachMark_shield', 2, player);
		},
		subSkill: {
			round: {
				charlotte: true,
			},
		},
	},
	chilieliming: {
		charlotte: true,
		trigger: {
			player: ['logSkill', 'useSkillAfter'],
		},
		forced: true,
		_priority: 1015,
		filter(event, player) {
			if (event.type != 'player') return false;
			const skill = event.sourceSkill || event.skill;
			const info = get.info(skill);
			return !info.charlotte && event.targets && event.targets.some((i) => i.isEnemiesOf(player));
		},
		content() {
			const targets = trigger.targets.filter((i) => i.isEnemiesOf(player));
			if (targets.length) {
				const friends = player.getFriends();
				targets.forEach((i) => {
					i.markAuto('chilieliming_eff', friends);
					i.addSkill('chilieliming_eff');
				});
			}
		},
		subSkill: {
			eff: {
				trigger: {
					player: 'damageBegin4',
				},
				forced: true,
				_priority: 1015,
				charlotte: true,
				filter(event, player) {
					return event.source && player.storage.chilieliming_eff.includes(event.source);
				},
				content() {
					trigger.num++;
					player.removeSkill('chilieliming_eff');
				},
				mark: true,
				intro: {
					content: '$对你下次造成伤害+1',
				},
			},
		},
	},
	jianjue: {
		trigger: {
			player: 'changeHp',
		},
		filter(event, player) {
			return event.num < 0 && player.hp <= Math.floor(player.maxHp / 2);
		},
		charlotte: true,
		forced: true,
		_priority: 1016,
		content() {
			'step 0';
			player.awakenSkill('jianjue');
			('step 1');
			player.recover(2);
		},
	},
	tianfa: {
		trigger: {
			player: 'phaseZhunbeiBegin',
		},
		_priority: 1017,
		charlotte: true,
		async cost(event, trigger, player) {
			event.result = await player
				.chooseTarget(get.prompt2('tianfa'), (card, player, target) => {
					return target.isEnemiesOf(player);
				})
				.set('ai', (target) => {
					return get.damageEffect(target, target, player, 'thunder');
				})
				.forResult();
		},
		async content(event, trigger, player) {
			const target = event.targets[0];
			target.executeDelayCardEffect('shandian');
		},
	},
	wangjian: {
		trigger: {
			player: 'addBleachBuffBegin2',
		},
		forced: true,
		filter(event, player) {
			for (let name in event.buff) {
				if (get.bleachBuffIsNegetive(name)) {
					return true;
				}
			}
			return false;
		},
		usable: 1,
		content() {
			const neBuffs = [];
			for (let name in trigger.buff) {
				if (get.bleachBuffIsNegetive(name)) {
					neBuffs.push(name);
				}
			}
			game.log(player, '免疫了状态', neBuffs, '.');
			for (var name of neBuffs) {
				delete trigger.buff[name];
			}
		},
		_priority: 1018,
		charlotte: true,
	},
	chaozhongliwang: {
		global: 'g_chaozhongliwang',
		charlotte: true,
	},
	g_chaozhongliwang: {
		charlotte: true,
		mod: {
			cardEnabled(card, player) {
				if (card.name == 'sha' && game.hasPlayer((current) => current.hasSkill('chaozhongliwang')) && player.countUsed({ name: 'sha' }) > 0) return false;
			},
		},
	},
	jingjier: {
		trigger: {
			player: 'damageEnd',
		},
		filter(event, player) {
			return event.source && event.source.isEnemiesOf(player);
		},
		usable: 1,
		content() {
			trigger.source.damage('nocard', 'notrigger');
		},
		forced: true,
		charlotte: true,
		_priority: 1019,
	},
	yonggandelinghun: {
		init(player) {
			player.addSkill('SoulTree_Focus');
		},
		charlotte: true,
		mod: {
			focus(player, num) {
				return (num += 5);
			},
			addFocus(player, num) {
				return (num = 5);
			},
		},
	},
	chongfenghao: {
		enable: 'phaseUse',
		filterTarget(card, player, target) {
			return target.isFriendsOf(player);
		},
		multitarget: true,
		multiline: true,
		selectTarget: -1,
		content() {
			'step 0';
			player.awakenSkill('chongfenghao');
			('step 1');
			game.asyncDraw(targets, 3);
		},
		ai: {
			order: 1,
			result: {
				target: 1,
			},
		},
	},
	shouhutianshi: {
		charlotte: true,
		trigger: {
			player: 'dieBefore',
		},
		forced: true,
		_priority: 1020,
		filter(event, player) {
			return !['giveup', 'versus_surrender'].includes(event.parent.name) && player.maxHp > 0;
		},
		content() {
			'step 0';
			player.awakenSkill('shouhutianshi');
			player.addSkill('shouhutianshi_effect');
			player.addMark('shouhutianshi', 4, false);
			('step 1');
			game.log(player, '进入了修整状态');
			if (player.hp != 0) {
				player.changeHp(0 - player.hp, false).forceDie = true;
			}
			player.removeBleachBuff(get.bleachBuffNums(player, false));
			game.broadcastAll((player) => {
				if (player.isLinked()) {
					if (get.is.linked2(player)) {
						player.classList.toggle('linked2');
					} else {
						player.classList.toggle('linked');
					}
				}
				if (player.isTurnedOver()) {
					player.classList.toggle('turnedover');
				}
			}, player);
			game.addVideo('link', player, player.isLinked());
			game.addVideo('turnOver', player, player.classList.contains('turnedover'));
			('step 2');
			trigger.cancel();
			for (var i in player.tempSkills) {
				player.removeSkill(i);
			}
			const skills = player.getSkills();
			for (var i = 0; i < skills.length; i++) {
				if (lib.skill[skills[i]].temp) {
					player.removeSkill(skills[i]);
				}
			}
			const cards = player.getCards('hejsx');
			if (cards.length) {
				player.discard(cards).forceDie = true;
			}
			('step 3');
			game.broadcastAll(function (player) {
				player.classList.add('out');
			}, player);
			trigger.includeOut = true;
		},
		marktext: '护',
		intro: {
			name: '濒死复活',
			content: '剩余#回合复活',
		},
		subSkill: {
			effect: {
				trigger: {
					global: 'phaseBefore',
				},
				charlotte: true,
				silent: true,
				forceDie: true,
				forceOut: true,
				_priority: 1020,
				filter(event, player) {
					return player.isOut() && player.hasMark('shouhutianshi');
				},
				content() {
					'step 0';
					player.removeMark('shouhutianshi', 1, false);
					if (!player.hasMark('shouhutianshi')) {
						game.log(player, '移回了游戏');
						game.broadcastAll((player) => {
							player.classList.remove('out');
						}, player);
						player.recoverTo(2);
						player.directgain(get.cards(3));
						player.removeSkill('shouhutianshi_effect');
					}
					('step 1');
					event.trigger('restEnd');
				},
			},
		},
	},
	soulgongshoujianbei: {
		charlotte: true,
		init(player) {
			player.addSkill('SoulTree_Attack');
			player.addSkill('SoulTree_Defense');
		},
	},
	jianduanfamingjia: {
		charlotte: true,
		_priority: 1021,
		trigger: {
			player: 'useCardEnd',
		},
		forced: true,
		filter(event, player) {
			return get.type(event.card) == 'equip';
		},
		content() {
			player.draw();
		},
	},
	shushangkaihua: {
		charlotte: true,
		enable: 'phaseUse',
		filterCard: true,
		selectCard: [1, 2],
		check(card) {
			if (!ui.selected.cards.length && get.type(card) == 'equip') return 8 - get.value(card);
			return 6 - get.value(card);
		},
		usable: 1,
		position: 'he',
		content() {
			let num = 0;
			if (Array.isArray(cards))
				for (var i of cards) {
					if (get.type(i) == 'equip') {
						num = 1;
						break;
					}
				}
			player.draw(cards.length + num);
		},
		ai: {
			order: 6.5,
			result: {
				player: 1,
			},
		},
	},
	shenshengzhijian: {
		trigger: {
			source: 'damageSource',
		},
		filter(event, player) {
			return event.SoulTree_Focus && event.player.countCards('he');
		},
		content() {
			trigger.player.discard(trigger.player.getCards('he').randomGet());
		},
		charlotte: true,
		forced: true,
		_priority: 1022,
		mod: {
			focus(player, num) {
				return (num += 5);
			},
		},
		init(player, skill) {
			player.addSkill('SoulTree_Focus');
		},
	},
	yigongdaishou: {
		trigger: {
			player: 'damageBegin3',
		},
		_priority: 1023,
		forced: true,
		popup: false,
		charlotte: true,
		content() {
			if (player.storage.SoulTree_Attack == 4) {
				player.popup('以攻待守', 'fire');
				trigger.num--;
				player.storage.yigongdaishou++;
				player.storage.SoulTree_Attack = 0;
				game.log(player, '的', '#g【以攻待守】', '抵挡了1点伤害');
			} else {
				player.storage.SoulTree_Attack = Math.min(5, player.storage.SoulTree_Attack + 1);
			}
			player.markSkill('SoulTree_Attack');
		},
		init(player, skill) {
			player.storage[skill] = 0;
			player.addSkill('SoulTree_Attack');
		},
	},
	shenghuo: {
		charlotte: true,
		trigger: {
			player: ['recoverEnd', 'addBleachBuffEnd'],
		},
		filter(event, player) {
			if (event.name == 'recover') return true;
			for (let name in event.buff) {
				return name == 'bleachMark_shield';
			}
			return false;
		},
		forced: true,
		_priority: 1024,
		content() {
			const target = game.findPlayer((target) => {
				return (
					target.isEnemiesOf(player) &&
					!game.hasPlayer((current) => {
						return current.isEnemiesOf(player) && get.distance(player, current) < get.distance(player, target);
					})
				);
			});
			player.line(target, 'fire');
			target.addBleachBuff('bleachMark_fire', 2);
		},
	},
	toujizhe: {
		trigger: {
			player: ['useCard', 'logSkill', 'useSkillAfter'],
		},
		filter(event, player) {
			if (Math.random() > 0.15) return false;
			if (event.name == 'useCard') return event.card && event.card.name == 'sha';
			const skill = event.sourceSkill || event.skill;
			const info = get.info(skill);
			return !info.charlotte;
		},
		forced: true,
		charlotte: true,
		_priority: 1025,
		content() {
			let num = 5,
				num2 = 0;
			while (num-- > 0) {
				if (Math.random() >= [0.05, 0.15, 0.3, 0.45, 0.9].randomGet()) num2++;
			}
			player.addMark('toujizhe', num2);
		},
		marktext: '牌',
		intro: {
			name2: '牌',
			content: 'mark',
		},
		group: 'toujizhe_eff',
		subSkill: {
			eff: {
				trigger: {
					player: 'dying',
					global: 'dieAfter',
				},
				filter(event, player) {
					return player.hasMark('toujizhe') && (event.name != 'die' || event.player.isEnemiesOf(player));
				},
				forced: true,
				charlotte: true,
				_priority: 1025,
				content() {
					const num = player.countMark('toujizhe');
					if (trigger.name == 'dying') {
						player.removeMark('toujizhe', Math.ceil(num / 4));
					} else {
						player.removeMark('toujizhe', num, false);
						player.draw(num);
					}
				},
			},
		},
	},
	jieerliansan: {
		trigger: {
			player: 'useCard',
		},
		charlotte: true,
		silent: true,
		_priority: 1026,
		filter(event, player) {
			return event.card && event.card.name == 'sha';
		},
		content() {
			player.addMark('jieerliansan', 1, false);
			if (player.countMark('jieerliansan') == 3) {
				player.removeMark('jieerliansan', 3, false);
				trigger.effectCount++;
			}
		},
		marktext: '🗡',
		intro: {
			content: '已使用#张【杀】',
		},
	},
	huixinzhiliao: {
		trigger: {
			player: ['recoverBegin', 'addBleachBuffBegin1'],
		},
		_priority: 1028,
		forced: true,
		popup: false,
		charlotte: true,
		filter(event, player) {
			if (event.name == 'recover') return true;
			for (let name in event.buff) {
				return name == 'bleachMark_shield';
			}
			return false;
		},
		content() {
			if (lib.skill.SoulTree_Focus.judgeFocus(player, '会心治疗')) {
				if (trigger.name == 'recover') {
					player.storage.huixinzhiliao += trigger.num;
					trigger.num += trigger.num;
				} else {
					for (var i in trigger.buff) {
						if (i == 'bleachMark_shield') {
							player.storage.huixinzhiliao += trigger.buff[i];
							trigger.buff[i] += trigger.buff[i];
						}
					}
				}
			}
		},
		init(player, skill) {
			player.storage[skill] = 0;
			player.addSkill('SoulTree_Focus');
		},
		mod: {
			focus(player, num) {
				return (num += 5);
			},
		},
	},
	chuanzhenyinxian: {
		charlotte: true,
		init: (player) => player.addSkill('bleachEffect_break'),
	},
	mofafeidan: {
		trigger: {
			player: ['logSkill', 'useSkillAfter'],
		},
		forced: true,
		_priority: 1029,
		charlotte: true,
		filter(event, player) {
			if (event.type != 'player') return false;
			const skill = event.sourceSkill || event.skill;
			const info = get.info(skill);
			return !info.charlotte && event.targets && event.targets.some((i) => i.isEnemiesOf(player));
		},
		content() {
			const targets = trigger.targets.filter((i) => i.isEnemiesOf(player));
			if (targets.length) {
				targets.forEach((i) => i.discard(i.getCards('he').randomGet()));
			}
		},
	},
	shenshefashi: {
		trigger: {
			player: 'useCard',
		},
		silent: true,
		charlotte: true,
		_priority: 1030,
		filter(event, player) {
			return event.card && event.card.name == 'sha';
		},
		content() {
			let hs = player.countCards('h'),
				num = 0;
			while (hs-- > 0) {
				if (Math.random() <= 0.1) num++;
			}
			if (num > 0) {
				trigger.baseDamage += num;
				game.log('#g【神射法师】', '使伤害提升了', num, '点');
			}
		},
	},
	xingyedoupeng: {
		trigger: {
			player: 'damageBegin4',
		},
		forced: true,
		charlotte: true,
		_priority: 1031,
		filter(event, player) {
			if (Math.random() > 0.35 + 0.03 * player.storage.xingyedoupeng + player.countCards('e') * 0.05) {
				player.storage.xingyedoupeng++;
				return false;
			}
			return true;
		},
		content() {
			trigger.num--;
			player.storage.xingyedoupeng = 0;
		},
		init: (player, skill) => (player.storage[skill] = 0),
	},
	anganglizhua: {
		trigger: {
			source: 'damageSource',
		},
		charlotte: true,
		forced: true,
		filter(event, player) {
			return event.parent.name == 'sha' && event.player.isIn();
		},
		_priority: 1031,
		content() {
			trigger.player.addBleachBuff('bleachMark_lieshang', [1, 2].randomGet());
		},
	},
	shandiandaji: {
		charlotte: true,
		_priority: 1032,
		trigger: {
			player: 'phaseUseBegin',
		},
		filter(event, player) {
			return !player.hasSha();
		},
		forced: true,
		content() {
			player.addTempSkill('shandiandaji_eff');
			player.when({ source: 'damageSource' }).then(() => player.removeSkill('shandiandaji_eff'));
		},
		subSkill: {
			eff: {
				prompt: '视为使用一张杀',
				enable: 'chooseToUse',
				viewAs: {
					name: 'sha',
				},
				filterCard: () => false,
				selectCard: -1,
				ai: {
					order: 4,
				},
			},
		},
	},
	heiyueshengqi: {
		trigger: {
			player: 'useCard',
		},
		forced: true,
		charlotte: true,
		_priority: 1033,
		filter(event, player) {
			return (
				event.card.name == 'sha' &&
				!player.hasHistory(
					'useCard',
					(evt) => {
						return evt != event && evt.card.name == 'sha';
					},
					event
				) &&
				player.isPhaseUsing()
			);
		},
		content() {
			trigger.directHit.addArray(game.players);
		},
	},
	jishengguanxi: {
		trigger: {
			global: 'damageSource',
		},
		forced: true,
		charlotte: true,
		_priority: 1034,
		filter(event, player) {
			if (player.isHealthy() || event.player.isEnemiesOf(player)) return false;
			if (Math.random() > 0.15 + 0.05 * player.storage.jishengguanxi) {
				player.storage.jishengguanxi++;
				return false;
			}
			return true;
		},
		content() {
			player.storage.jishengguanxi = 0;
			player.recover();
		},
		init: (player, skill) => (player.storage[skill] = 0),
	},
	huoliquankai: {
		trigger: {
			source: 'damageSource',
		},
		forced: true,
		charlotte: true,
		_priority: 1035,
		filter(event, player) {
			let num = 0;
			player.getAllHistory('sourceDamage', (evt) => (num += evt.num));
			return num >= 10;
		},
		content() {
			'step 0';
			player.awakenSkill('huoliquankai');
			('step 1');
			player.addSkill('huoliquankai_effect');
			const list = ['Attack', 'Defense', 'Focus', 'SpiriualPressure', 'Stamina'];
			for (var i of list) {
				player.addSkill('SoulTree_' + i);
			}
		},
		subSkill: {
			effect: {
				charlotte: true,
				mod: {
					attacks(player, num) {
						return num + 1;
					},
					defense(player, num) {
						return num - 3;
					},
					focus(player, num) {
						return (num += 20);
					},
					spiriualpressure(player, num) {
						return num + 1;
					},
					stamina(player, num) {
						return num + 1;
					},
				},
			},
		},
	},
	siwangzhiren: {
		trigger: {
			global: 'damageBegin4',
		},
		forced: true,
		filter(event, player) {
			return event.source && event.source == player && event.num >= event.player.hp && !event.player.isUnseen(2);
		},
		charlotte: true,
		_priority: 1036,
		content() {
			trigger.player.qdie(player);
			game.log(player, '发动了', '#g【处决】', '使', trigger.player, '死亡');
		},
	},
	jujishou: {
		trigger: {
			source: 'damageSource',
		},
		filter(event, player) {
			return get.distance(player, event.player) > 1;
		},
		forced: true,
		charlotte: true,
		_priority: 1037,
		content() {
			player.draw();
		},
	},
	pojing: {
		trigger: {
			player: 'useCardToPlayered',
		},
		filter(event, player) {
			return event.card && event.card.name == 'sha' && event.target.isEnemiesOf(player) && !event.target.hasSkill('fengyin');
		},
		logTarget: 'target',
		forced: true,
		charlotte: true,
		_priority: 1038,
		content() {
			trigger.target.addTempSkill('fengyin');
		},
		ai: {
			ignoreSkill: true,
			skillTagFilter(player, tag, arg) {
				if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
				if (!arg.target || arg.target.isFriendsOf(player)) return false;
				if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).includes(arg.skill)) return false;
			},
		},
	},
	duanjinzhe: {
		trigger: {
			source: 'damageSource',
		},
		filter(event, player) {
			return event.SoulTree_Focus == true;
		},
		content() {
			trigger.player.addBleachBuff('bleachMark_fire');
		},
		charlotte: true,
		forced: true,
		_priority: 1039,
		init(player, skill) {
			player.addSkill('SoulTree_Focus');
		},
		mod: {
			focus(player, num) {
				return (num += 5);
			},
		},
	},
	quanxinweini: {
		trigger: {
			source: ['recoverBegin', 'addBleachBuffBegin1'],
		},
		_priority: 1040,
		forced: true,
		charlotte: true,
		filter(event, player) {
			if (event.player == player || event.player.isEnemiesOf(player)) return false;
			if (event.name == 'recover') return true;
			return 'bleachMark_shield' in event.buff;
		},
		content() {
			if (trigger.name == 'recover') {
				trigger.num++;
			} else {
				for (let key in trigger.buff) {
					if (key == 'bleachMark_fire') {
						trigger.buff[key]++;
					}
				}
			}
		},
	},
	shijieliefeng: {
		trigger: {
			source: 'damageSource',
		},
		filter(event, player) {
			return !event.card || (event.card && event.card.name == 'sha');
		},
		async content(event, trigger, player) {
			const card = get.cards()[0];
			game.cardsGotoOrdering(card);
			player.showCards(card);
			await player
				.chooseUseTarget(card, true, false, 'nodistance')
				.set('filterTarget', (card, player, target) => {
					let evt = _status.event;
					if (_status.event.name == 'chooseTarget') evt = evt.parent;
					if (target != player && target != evt.shijieliefeng_target) return false;
					return lib.filter.targetEnabledx(card, player, target);
				})
				.set('shijieliefeng_target', trigger.player);
		},
		_priority: 1041,
		forced: true,
		charlotte: true,
	},
	siwangchumo: {
		trigger: {
			source: 'damageSource',
		},
		filter(event, player) {
			return event.parent.name == 'sha' && event.player.isEnemiesOf(player);
		},
		_priority: 1042,
		forced: true,
		charlotte: true,
		group: ['soulzuzhou', 'siwangchumo_effect'],
		content() {
			lib.skill.soulzuzhou.addZuzhou(trigger.player);
		},
		init: (player, skill) => (player.storage[skill] = 0),
		subSkill: {
			effect: {
				trigger: {
					source: 'damageBegin1',
				},
				charlotte: true,
				silent: true,
				_priority: 1042,
				content() {
					let popup = false;
					let num = Math.floor(player.countMark('soulzuzhou_power') / 12);
					while (num-- > 0) {
						if (Math.random() <= 0.24) {
							if (!popup) {
								popup = true;
								player.popup('死亡触摸', 'metal');
							}
							trigger.num++;
							player.storage.siwangchumo++;
						}
					}
				},
			},
		},
	},
	heranliaobang: {
		trigger: {
			source: 'addBleachBuffAfter',
		},
		charlotte: true,
		forced: true,
		_priority: 1043,
		group: ['soulzuzhou'],
		filter(event, player) {
			for (let name in event.buff) {
				if (get.bleachBuffIsNegetive(name)) {
					return event.player.isEnemiesOf(player);
				}
			}
			return false;
		},
		content() {
			lib.skill.soulzuzhou.addZuzhou(trigger.player);
		},
		init: (player, skill) => (player.storage[skill] = 0),
	},
	shuruiyadezhange: {
		charlotte: true,
		mod: {
			maxHandcard(player, num) {
				return 2 + num;
			},
		},
		group: 'g_shuruiyadezhange',
	},
	g_shuruiyadezhange: {
		mod: {
			targetInRange(card, player, target, now) {
				if (game.hasPlayer((current) => current.hasSkill('shuruiyadezhange') && current.isFriendsOf(player))) {
					if (game.online) {
						if (!player.countUsed()) return true;
					} else {
						const evt = _status.event.getParent('phaseUse');
						if (
							evt &&
							evt.name == 'phaseUse' &&
							player.getHistory('useCard', (evt2) => {
								return evt2.getParent('phaseUse') == evt;
							}).length == 0
						)
							return true;
					}
				}
			},
		},
	},
	bingdonghudun: {
		trigger: {
			player: 'addBleachBuffBegin2',
		},
		forced: true,
		_priority: 1044,
		charlotte: true,
		filter(event, player) {
			for (let name in event.buff) {
				return name == 'bleachMark_ice' || name == 'bleachEffect_ice';
			}
			return false;
		},
		content() {
			const neBuffs = [];
			for (let name in trigger.buff) {
				if (name == 'bleachMark_ice' || name == 'bleachEffect_ice') {
					neBuffs.push(name);
				}
			}
			game.log(player, '免疫了状态', neBuffs, '.');
			for (let name of neBuffs) {
				delete trigger.buff[name];
			}
		},
		init: (player) => player.addSkill('SoulTree_Defense'),
		mod: {
			defense(player, num) {
				return num - 2;
			},
		},
	},
	shengqishihudun: {
		trigger: {
			player: 'addBleachBuffBegin2',
		},
		forced: true,
		_priority: 1045,
		charlotte: true,
		filter(event, player) {
			return 'bleachMark_leizhe' in event.buff || 'bleachMark_qinshi' in event.buff;
		},
		content() {
			const neBuffs = [];
			for (let name in trigger.buff) {
				if (name == 'bleachMark_leizhe' || name == 'bleachMark_qinshi') {
					neBuffs.push(name);
				}
			}
			game.log(player, '免疫了状态', neBuffs, '.');
			for (let name of neBuffs) {
				delete trigger.buff[name];
			}
		},
		init: (player) => player.addSkill('SoulTree_Defense'),
		mod: {
			defense(player, num) {
				return num - 2;
			},
		},
	},
	heiyaoshihudun: {
		trigger: {
			player: 'addBleachBuffBegin2',
		},
		forced: true,
		_priority: 1045,
		charlotte: true,
		filter(event, player) {
			return 'bleachMark_huofen' in event.buff || 'bleachMark_fire' in event.buff;
		},
		content() {
			const neBuffs = [];
			for (let name in trigger.buff) {
				if (name == 'bleachMark_fire' || name == 'bleachMark_huofen') {
					neBuffs.push(name);
				}
			}
			game.log(player, '免疫了状态', neBuffs, '.');
			for (let name of neBuffs) {
				delete trigger.buff[name];
			}
		},
		init: (player) => player.addSkill('SoulTree_Defense'),
		mod: {
			defense(player, num) {
				return num - 2;
			},
		},
	},
	yingxionghudun: {
		global: 'g_yingxionghudun',
		init: (player) => player.addSkill('SoulTree_Defense'),
		mod: {
			defense(player, num) {
				return num - 4;
			},
		},
	},
	g_yingxionghudun: {
		mod: {
			playerEnabled(card, player, target) {
				const targets = game.filterPlayer((current) => current.hasSkill('yingxionghudun') && current.isEnemiesOf(player) && player.inRange(current));
				if (!targets.length) return;
				if (card.name == 'sha' && !targets.includes(target)) return false;
			},
		},
	},
	haikesilonghun: {
		trigger: {
			source: 'damageSource',
		},
		forced: true,
		charlotte: true,
		_priority: 1046,
		filter(event, player) {
			return event.player.isEnemiesOf(player) && event.player.hasFriend();
		},
		usable: 1,
		content() {
			const target = trigger.player.getFriends().randomGet();
			player.line(target, 'green');
			target.damage('thunder');
		},
	},
	xueqinxiongdi: {
		trigger: {
			global: 'gainSoulEnd',
		},
		forced: true,
		charlotte: true,
		_priority: 1046,
		content() {
			player.awakenSkill('xueqinxiongdi');
			game.broadcastAll(
				(player, chosen) => {
					player.name2 = chosen;
					player.classList.add('fullskin2');
					player.node.avatar2.classList.remove('hidden');
					player.node.avatar2.setBackground(chosen, 'character');
					player.node.name2.innerHTML = get.slimName(chosen);
					if (player == game.me && ui.fakeme) {
						ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
					}
				},
				player,
				'bleach_yylfordt'
			);
			player.addSkills(['bleach_shanji', 'bleach_cangjiao']);
		},
	},
	huangliang: {
		trigger: {
			global: 'gainSoulEnd',
		},
		_priority: 2001,
		forced: true,
		charlotte: true,
		content() {
			'step 0';
			player.awakenSkill('huangliang');
			('step 1');
			player.addSkill(['bleach_ligong', 'bleach_jiehuo', 'bleach_jiejin'].filter((i) => !player.hasSkill(i)).randomGet());
		},
	},
	shengjizhanfang: {
		charlotte: true,
		_priority: 2002,
		forced: true,
		trigger: {
			player: 'recoverAfter',
		},
		content() {
			const target = game.findPlayer((target) => {
				if (target.isFriendsOf(player)) return false;
				const dist = get.distance(player, target);
				if (dist > 1) {
					if (
						game.hasPlayer((current) => {
							return current.isEnemiesOf(player) && get.distance(player, current) < dist;
						})
					) {
						return false;
					}
				}
				return true;
			});
			player.line(target, 'fire');
			target.damage('nocard');
		},
	},
	burucandao: {
		trigger: {
			global: 'phaseBegin',
		},
		filter(event, player) {
			if (Math.random() > 0.15 + 0.01 * player.storage.burucandao) {
				player.storage.burucandao++;
				return false;
			}
			return true;
		},
		content() {
			player.storage.burucandao = 0;
			player.addBleachBuff('bleachMark_up');
		},
		forced: true,
		charlotte: true,
		_priority: 2002,
		init: (player, skill) => (player.storage[skill] = 0),
	},
	ganshouranshao: {
		enable: 'phaseUse',
		usable: 1,
		charlotte: true,
		filter(event, player) {
			return game.hasPlayer((current) => {
				return current.isEnemiesOf(player) && get.distance(player, current) <= 1;
			});
		},
		content() {
			const targets = player.getEnemies((current) => get.distance(player, current) <= 1).randomGets(2);
			if (targets.length) {
				player.line(targets, 'fire');
				targets.forEach((i) => i.addBleachBuff('bleachMark_fire', 2));
			}
		},
		ai: {
			order: 13,
			result: {
				player: 1,
			},
		},
	},
	fashusuxing: {
		charlotte: true,
		trigger: {
			player: ['logSkill', 'useSkillAfter'],
		},
		forced: true,
		_priority: 2003,
		filter(event, player) {
			if (event.type != 'player') return false;
			const skill = get.sourceSkillFor(event);
			const info = get.info(skill);
			if (info.charlotte) return false;
			return event.targets && event.targets.some((i) => i.isEnemiesOf(player) && player.canUse('sha', i));
		},
		charlotte: true,
		content() {
			const targets = trigger.targets.filter((i) => i.isEnemiesOf(player) && player.canUse('sha', i));
			player.useCard({ name: 'sha' }, targets, false);
		},
	},
	lingwangdeyoushou: {
		trigger: {
			global: 'damageBegin4',
		},
		forced: true,
		charlotte: true,
		_priority: 2004,
		filter(event, player) {
			return event.player.isFriendsOf(player) && event.num >= event.player.hp;
		},
		content() {
			'step 0';
			player.awakenSkill('lingwangdeyoushou');
			('step 1');
			trigger.cancel();
			const friends = game.filterPlayer((current) => current.isFriendsOf(player));
			for (let friend of friends) {
				friend.addTempSkill('lingwangdeyoushou_effect', { player: 'phaseAfter' });
			}
		},
		subSkill: {
			effect: {
				trigger: {
					player: ['damageBefore', 'loseHpBefore'],
				},
				forced: true,
				popup: false,
				charlotte: true,
				content() {
					trigger.cancel();
				},
				_priority: 2004,
				mark: true,
				intro: {
					content: '防止扣减体力',
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) return 'zerotarget';
						},
					},
				},
			},
		},
	},
	mandun: {
		trigger: {
			player: 'phaseBegin',
		},
		content() {
			for (var i of player.getEnemies()) {
				i.addBleachBuff('bleachMark_fire');
			}
		},
		forced: true,
		charlotte: true,
		_priority: 2005,
	},
	soulqiji: {
		trigger: {
			player: 'damageEnd',
		},
		filter(event, player) {
			return event.source && !player.hasMark('soulqiji_count');
		},
		content() {
			'step 0';
			player.gainMaxHp();
			player.recover();
			('step 1');
			player.addMark('soulqiji_count', player.maxHp + 3, false);
		},
		forced: true,
		charlotte: true,
		_priority: 2006,
		group: 'soulqiji_count',
		subSkill: {
			count: {
				trigger: {
					global: 'phaseAfter',
				},
				charlotte: true,
				_priority: 10,
				silent: true,
				content() {
					player.removeMark('soulqiji_count', 1, false);
				},
				mark: true,
				intro: {
					content: '剩余#回合',
				},
			},
		},
	},
	zhipeizhemianju: {
		charlotte: true,
		ai: {
			viewHandcard: true,
			skillTagFilter(player, tag, arg) {
				if (player == arg) return false;
			},
		},
	},
	ganjueburujiequan: {
		group: 'rezhiheng',
		charlotte: true,
	},
	chaoyueciyuan: {
		_priority: 2007,
		trigger: {
			global: 'gainSoulEnd',
		},
		forced: true,
		charlotte: true,
		content() {
			'step 0';
			player.awakenSkill('chaoyueciyuan');
			('step 1');
			player.addBleachBuff('bleachMark_up', 2);
		},
	},
	zhuguanghushou: {
		init(player, skill) {
			player.storage[skill] = 0;
			player.addSkill('SoulTree_Focus');
		},
		charlotte: true,
		mod: {
			focus(player, num) {
				return (num += 20);
			},
		},
	},
	yongqi: {
		trigger: {
			source: 'addBleachBuffEnd',
		},
		filter(event, player) {
			for (let name in event.buff) {
				if (get.bleachBuffIsNegetive(name)) {
					return true;
				}
			}
			return false;
		},
		forced: true,
		charlotte: true,
		_priority: 2008,
		content() {
			player.addBleachBuff('bleachMark_shield');
		},
	},
	weizhideshouduan: {
		trigger: {
			player: 'phaseBegin',
		},
		forced: true,
		charlotte: true,
		_priority: 2009,
		content() {
			let skills = player.getSkills(null, false, false).filter((skill) => !get.info(skill).charlotte);
			player.removeSkills(skills);
			if (!_status.characterlist) {
				let list = get.charactersOL();
			}
			_status.characterlist.randomSort();
			skills = [];
			for (var i of _status.characterlist) {
				const character = lib.character[i];
				if (character && character[3]) {
					for (let j of character[3]) {
						if (skills.includes(j)) continue;
						const info = get.info(j);
						if (info && !info.charlotte) {
							skills.add(j);
							continue;
						}
					}
				}
				if (skills.length >= 30) break;
			}
			skills.randomSort();
			let num = 2 + (Math.random() >= 0.7) + (player.name2 ? get.rand(2, 3) : 0);
			player.addSkill(skills.randomGets(num));
		},
	},
	duankaishengyi: {
		charlotte: true,
		enable: 'phaseUse',
		init: (player, skill) => (player.storage[skill] = false),
		content() {
			player.awakenSkill('duankaishengyi');
			player.addTempSkill('duankaishengyi_eff');
		},
		ai: {
			order: 13,
			result: {
				player(player) {
					if (
						player.countCards('h', (card) => {
							return card.name == 'sha' && player.hasValueTarget(card);
						}) -
						player.getCardUsable('sha') >
						1
					)
						return 1;
					return -1;
				},
			},
		},
		subSkill: {
			eff: {
				trigger: {
					player: 'useCard',
				},
				forced: true,
				charlotte: true,
				_priority: 2009,
				filter(event) {
					return event.card && event.card.name == 'sha';
				},
				content() {
					trigger.baseDamage++;
				},
				mod: {
					cardUsable: () => Infinity,
					targetInRange: () => true,
				},
			},
		},
	},
	lingyaniansuijike: {
		trigger: {
			player: 'phaseEnd',
		},
		forced: true,
		charlotte: true,
		_priority: 2010,
		content() {
			player.draw(player.getEnemies().length);
		},
	},
	quannenglonghun: {
		trigger: {
			global: 'gainSoulEnd',
		},
		_priority: 2011,
		forced: true,
		charlotte: true,
		content() {
			'step 0';
			player.awakenSkill('quannenglonghun');
			('step 1');
			const list = ['haiyanglonghun', 'lianyulonghun', 'shanmailonghun', 'haikesilonghun', 'lianjinlonghun', 'jifenglonghun'].filter((i) => !player.hasSkill(i));
			player.addSkill(list.randomGets(3));
		},
	},
	niqujidianleba: {
		trigger: {
			global: 'roundStart',
		},
		silent: true,
		charlotte: true,
		_priority: 2012,
		content() {
			'step 0';
			if (player.storage.niqujidianleba) {
				player.removeSkill(player.storage.niqujidianleba);
			}
			if (player.hasFriend()) {
				player.popup('祭典');
				player.chat('你去祭典了吧,和我不认识的人一起');
				const skills = [];
				for (let friend of player.getFriends()) {
					skills.addArray(friend.getSkills(null, false, false).filter((i) => !get.info(i).charlotte));
				}
				player.storage.niqujidianleba = skills.randomGet();
				player.markSkill('niqujidianleba');
				player.addSkills(player.storage.niqujidianleba);
			} else player.unmarkSkill('niqujidianleba');
		},
		intro: {
			content: '当前祭典技能:$',
		},
	},
	huhuanjunzhiming: {
		charlotte: true,
		group: ['bleach_qieyi'],
	},
	jingjisan: {
		trigger: {
			player: 'damageEnd',
		},
		filter(event, player) {
			return event.source && event.source.isEnemiesOf(player);
		},
		content() {
			trigger.source.damage('nocard', 'notrigger');
		},
		forced: true,
		charlotte: true,
		_priority: 2013,
	},
	soulganlu: {
		forced: true,
		charlotte: true,
		enable: 'phaseUse',
		filter(event, player) {
			return game.dead.some((current) => current.isFriendsOf(player));
		},
		content() {
			'step 0';
			player.awakenSkill('soulganlu');
			player.chat('我们是同伴 要互相帮助');
			setTimeout(() => {
				player.chat('重获新生 向前迈进');
			}, 2500);
			('step 1');
			const friend = game.dead
				.filter((current) => {
					return current.isFriendsOf(player);
				})
				.randomGet();
			game.broadcastAll((friend) => {
				friend.revive(3);
			}, friend);
			friend.directgain(get.cards(4));
		},
		ai: {
			order: 13,
			result: {
				player: 1,
			},
		},
	},
	jisubeizhan: {
		charlotte: true,
	},
	zhongzhuangshangzhen: {
		trigger: {
			global: 'gainSoulEnd',
		},
		_priority: 2014,
		forced: true,
		charlotte: true,
		content() {
			'step 0';
			player.awakenSkill('zhongzhuangshangzhen');
			('step 1');
			player.addBleachBuff('bleachMark_shield', 4);
		},
	},
	iamtheedge: {
		charlotte: true,
		init: (player) => player.addSkill('SoulTree_Attack'),
		mod: {
			attacks(player, num) {
				return num + 2;
			},
		},
	},
	kuangwang: {
		trigger: {
			global: 'dieAfter',
		},
		_priority: 2015,
		charlotte: true,
		forced: true,
		filter(event, player) {
			return event.player.getRoundHistory('damage', (evt) => evt.source && evt.source == player).length;
		},
		content() {
			player.draw(3);
		},
	},
	qiezeishoutao: {
		trigger: {
			source: 'damageSource',
		},
		filter(event, player) {
			return event.player.isEnemiesOf(player) && event.player.hasCard((card) => lib.filter.canBeGained(card, player, event.player), 'he');
		},
		forced: true,
		logTarget: 'player',
		async content(event, trigger, player) {
			player.gainPlayerCard('he', trigger.player, true).set('target', target).set('complexSelect', false).set('ai', lib.card.shunshou.ai.button);
		},
	},
	liansuoshandian: {
		trigger: {
			source: 'damageSource',
		},
		filter(event, player) {
			return event.player.isEnemiesOf(player) && event.player.hasFriend() && (event.num > 1 || Math.random() < 0.5) && event.parent.name != 'liansuoshandian';
		},
		_priority: 2017,
		charlotte: true,
		forced: true,
		content() {
			const target = game.findPlayer((target) => {
				if (target.isFriendsOf(player) || target == trigger.player) return false;
				const dist = get.distance(trigger.player, target);
				if (dist > 1) {
					if (
						game.hasPlayer((current) => {
							return current.isEnemiesOf(player) && get.distance(trigger.player, current) < dist;
						})
					) {
						return false;
					}
				}
				return true;
			});
			player.line(target, 'thunder');
			game.log(target, '成为了', '#g【连锁闪电】', '的目标');
			target.damage(1, 'nocard', 'bleach_break');
		},
	},
	taowa: {
		trigger: {
			player: 'dieBefore',
		},
		_priority: 2018,
		charlotte: true,
		forced: true,
		filter(event, player) {
			return player.storage.taowa < 2;
		},
		content() {
			trigger.cancel();
			if (!player.storage.taowa_mark) {
				player.storage.taowa_mark = player.maxHp;
				player
					.when({ player: 'die' })
					.assign({
						forceDie: true,
					})
					.then(() => {
						player.maxHp = player.storage.taowa;
						player.update();
					});
			}
			player.storage.taowa++;
			player.hp = 2;
			player.maxHp = 2;
			player.drawTo(2);
			player.update();
		},
		init: (player, skill) => (player.storage[skill] = 0),
	},
	fengbaokuangyong: {
		charlotte: true,
		trigger: {
			player: 'phaseJieshuBegin',
		},
		_priority: 2019,
		forced: true,
		filter(event, player) {
			return (player.getStat('damage') || 0) >= 3;
		},
		content() {
			const targets = game.filterPlayer((current) => current.hasHistory('damage', (evt) => evt.source && evt.source == player && current.isEnemiesOf(player)));
			if (targets.length) {
				player.line(targets, 'thunder');
				targets.forEach((i) => i.damage('thunder'));
			}
		},
	},
	yibingshizhe: {
		trigger: {
			player: 'phaseBegin',
		},
		charlotte: true,
		forced: true,
		_priority: 2020,
		group: ['soulzuzhou'],
		content() {
			const targets = game.filterPlayer((current) => {
				return player.isEnemiesOf(current) && get.distance(player, current) <= 2;
			});
			if (targets.length) {
				player.line(targets, 'green');
				targets.forEach((i) => lib.skill.soulzuzhou.addZuzhou(i));
			}
		},
		init: (player, skill) => (player.storage[skill] = 0),
	},
	moriyuyanzhe: {
		trigger: {
			player: ['logSkill', 'useSkillAfter'],
		},
		filter(event, player) {
			if (event.type != 'player') return false;
			const skill = event.sourceSkill || event.skill;
			const info = get.info(skill);
			return !info.charlotte && event.targets && event.targets.some((i) => i.isEnemiesOf(player));
		},
		charlotte: true,
		forced: true,
		_priority: 2021,
		group: ['soulzuzhou', 'moriyuyanzhe_effect'],
		content() {
			const targets = trigger.targets.filter((i) => i.isEnemiesOf(player));
			if (targets.length) {
				const friends = player.getFriends();
				targets.forEach((i) => lib.skill.soulzuzhou.addZuzhou(i));
			}
		},
		init: (player, skill) => (player.storage[skill] = 0),
		subSkill: {
			effect: {
				trigger: {
					source: 'damageBegin1',
				},
				charlotte: true,
				forced: true,
				_priority: 2021,
				filter(event, player) {
					return !event.card && player.countMark('soulzuzhou_power') >= 15;
				},
				content() {
					trigger.num += Math.floor(player.countMark('soulzuzhou_power') / 15);
					player.storage.moriyuyanzhe++;
				},
			},
		},
	},
	jianruopanshi: {
		trigger: { player: 'damageBegin2' },
		filter(event, player) {
			return event.num > 1 || event.SoulTree_Focus == true;
		},
		_priority: 2022,
		charlotte: true,
		forced: true,
		content() {
			if (trigger.num > 1) trigger.num--;
			if (trigger.SoulTree_Focus) trigger.num--;
		},
	},
	soulfentian: {
		trigger: {
			source: 'damageBegin1',
		},
		_priority: 2023,
		charlotte: true,
		forced: true,
		filter(event, player) {
			return !player.hasMark('soulfentian_count') && event.player.isEnemiesOf(player);
		},
		content() {
			trigger.num += trigger.num;
			player.recover();
			player.addMark('soulfentian_count', 8, false);
		},
		group: 'soulfentian_count',
		subSkill: {
			count: {
				trigger: {
					global: 'phaseAfter',
				},
				charlotte: true,
				_priority: 10,
				silent: true,
				content() {
					player.removeMark('soulfentian_count', 1, false);
				},
				mark: true,
				intro: {
					content: '剩余#回合',
				},
			},
		},
	},
	linghunjiban: {
		trigger: { global: ['damageBegin4', 'recoverAfter'] },
		filter(event, player) {
			if (event.player.isEnemiesOf(player) || event.player == player) return false;
			if (event.parent.name == 'linghunjiban') return false;
			return (event.num > 1 && player.hp > 1) || (event.name == 'recover' && Math.random() <= 0.75 && player.isDamaged());
		},
		_priority: 2024,
		charlotte: true,
		forced: true,
		content() {
			if (trigger.name == 'damage') {
				const num = Math.min(player.hp - 1, trigger.num - 1);
				trigger.num -= num;
				player.damage(num, trigger.source || null, trigger.card || null, trigger.nature || null);
			} else {
				player.recover();
			}
		},
	},
	rongshizhidun: {
		trigger: {
			player: 'damageBegin4',
		},
		forced: true,
		charlotte: true,
		_priority: 2025,
		filter(event, player) {
			if (Math.random() > 0.35 + 0.03 * player.storage.rongshizhidun + player.countCards('e') * 0.05) {
				player.storage.rongshizhidun++;
				return false;
			}
			return true;
		},
		content() {
			trigger.cancel();
			player.storage.rongshizhidun = 0;
		},
		init: (player, skill) => (player.storage[skill] = 0),
	},
	tiandihuijin: {
		enable: 'chooseToUse',
		filterCard: true,
		position: 'hes',
		viewAs: {
			name: 'sha',
			nature: 'fire',
		},
		viewAsFilter(player) {
			if (!player.countCards('hes')) return false;
		},
		usable: 1,
		prompt: '将一张牌当火杀使用并令目标角色技能失效至回合结束.',
		check(card) {
			const val = get.value(card);
			return 6 - val;
		},
		precontent() {
			player
				.when('useCardToTargeted')
				.filter((evt) => evt.parent.skill == 'tiandihuijin')
				.then(() => {
					const targets = trigger.targets.slice().sortBySeat();
					player.line(targets);
					for (const target of targets) {
						target.addTempSkill('bleach_off_skill');
					}
				});
		},
		ai: {
			order: () => get.order({ name: 'sha' }) + 0.2,
		},
		charlotte: true,
	},
	beishuiyizhan: {
		trigger: {
			player: 'damageBegin4',
		},
		forced: true,
		_priority: 2027,
		charlotte: true,
		filter(event, player) {
			return event.num >= player.hp;
		},
		content() {
			'step 0';
			player.awakenSkill('beishuiyizhan');
			('step 1');
			trigger.cancel();
			player.recover();
			player.draw(2);
		},
	},
	tianyaruobilin: {
		trigger: {
			player: 'damageBegin2',
			source: 'damageBegin1',
		},
		forced: true,
		_priority: 2028,
		charlotte: true,
		filter(event, player) {
			let num = game.countPlayer((current) => {
				return current.isFriendsOf(player) && get.distance(player, current, 'pure') == 1;
			});
			return Math.random() < num * 0.25;
		},
		content() {
			event.triggername == 'damageBegin2' ? trigger.num-- : trigger.num++;
		},
	},
	lianhedikang: {
		trigger: {
			global: 'damageBegin2',
		},
		filter(event, player) {
			let num = 1,
				max = game.countPlayer((current) => current.isFriendsOf(event.player));
			let current = event.player.next;
			while (current.isFriendsOf(event.player)) {
				num++;
				current = current.next;
			}
			current = event.player.previous;
			while (current.isFriendsOf(event.player)) {
				num++;
				current = current.previous;
			}
			return num > 1 && event.player.isFriendsOf(player) && Math.random() < Math.max(num, max) * 0.2;
		},
		forced: true,
		_priority: 2029,
		charlotte: true,
		content() {
			trigger.num--;
		},
	},
	souljuejing: {
		trigger: {
			player: 'dying',
		},
		forced: true,
		content() {
			player.drawTo(4);
		},
		charlotte: true,
		_priority: 2030,
	},
	bawangxuejia: {
		trigger: {
			player: 'useCard',
		},
		forced: true,
		_priority: 2032,
		charlotte: true,
		filter(event, player) {
			return event.card && event.card.name == 'sha' && player.getDamagedHp() > 1;
		},
		content() {
			trigger.baseDamage += Math.floor(player.getDamagedHp() / 2);
		},
		init(player) {
			player.gainMaxHp();
			player.recover();
		},
	},
	fangshouyibo: {
		trigger: {
			global: 'gainSoulEnd',
		},
		_priority: 2033,
		forced: true,
		charlotte: true,
		content() {
			'step 0';
			player.awakenSkill('fangshouyibo');
			('step 1');
			if (Math.random() < 0.3) {
				player.draw(15);
			} else {
				player.loseHp(player.hp);
			}
		},
	},
	mowangzhimian: {
		trigger: {
			global: 'roundStart',
		},
		_priority: 2034,
		forced: true,
		charlotte: true,
		content() {
			let storage = player.storage.mowangzhimian;
			const num = player.getRoundHistory('sourceDamage', null, 1).reduce((sum, evt) => sum + evt.num, 0);
			if (
				game.hasPlayer((current) => {
					if (current.isEnemiesOf(player)) {
						const numx = current.getRoundHistory('sourceDamage', null, 1).reduce((sum, evt) => sum + evt.num, 0);
						return numx >= num;
					}
					return false;
				})
			) {
				let lose = 2;
				const nums = [0, 1, 2, 3, 4].filter((i) => storage[i] > 0);
				while (lose-- > 0) {
					const i = nums.randomGet();
					storage[i]--;
					if (storage[i] == 0) {
						nums.remove(i);
					}
				}
			} else {
				let i = [0, 1, 2, 3, 4, 0, 2, 3, 4, 3, 4, 3, 4, 3, 2, 4, 3, 4].randomGet();
				storage[i]++;
			}
			player.markSkill('mowangzhimian');
		},
		init(player, skill) {
			player.storage[skill] = [0, 0, 0, 0, 0];
			let num = 5;
			while (num-- > 0) {
				let num = [0, 1, 2, 3, 4, 0, 2, 3, 4, 3, 4, 3, 4, 3, 2, 4, 3, 4].randomGet();
				player.storage[skill][num]++;
			}
			player.markSkill('mowangzhimian');
			player.tempBanSkill('mowangzhimian', 'phaseBegin');
		},
		mod: {
			maxHandcard(player, num) {
				return num + player.storage.mowangzhimian[3];
			},
			cardUsable(card, player, num) {
				if (card.name == 'sha') return num + player.storage.mowangzhimian[4];
			},
		},
		intro: {
			content(storage, player) {
				let str = '>>至高无上<<';
				str += '<li>造成伤害+' + storage[0];
				str += '<li>受到伤害-' + storage[1];
				str += '<li>额定摸牌+' + storage[2];
				str += '<li>手牌上限+' + storage[3];
				str += '<li>杀的次数+' + storage[4];
				return str;
			},
			markcount(storage, player) {
				return storage.reduce((p, c) => p + c, 0);
			},
		},
		group: 'mowangzhimian_eff',
		subSkill: {
			eff: {
				trigger: {
					player: ['damageBegin3', 'phaseDrawBegin2'],
					source: 'damageBegin1',
				},
				_priority: 2034,
				forced: true,
				charlotte: true,
				filter(event, player, name) {
					if (event.name == 'phaseDraw') return player.storage.mowangzhimian[2] > 0;
					if (name == 'damageBegin1')
						return (
							player.storage.mowangzhimian[0] > 0 &&
							game
								.getGlobalHistory('everything', (evt) => {
									return evt.name == 'damage' && evt.source == player;
								})
								.indexOf(event) === 0
						);

					return (
						player.storage.mowangzhimian[1] > 0 &&
						game
							.getGlobalHistory(
								'everything',
								(evt) => {
									return evt.name == 'damage' && evt.player == player;
								},
								event
							)
							.indexOf(event) == 0
					);
				},
				content() {
					if (trigger.name == 'phaseDraw') trigger.num += player.storage.mowangzhimian[2];
					else if (event.triggername == 'damageBegin1') trigger.num += player.storage.mowangzhimian[0];
					else trigger.num -= player.storage.mowangzhimian[1];
				},
			},
		},
	},
	longxin: {
		trigger: {
			global: 'roundStart',
		},
		_priority: 2035,
		charlotte: true,
		filter(event, player) {
			return ['haiyanglonghun', 'lianyulonghun', 'shanmailonghun', 'haikesilonghun', 'lianjinlonghun', 'jifenglonghun'].some((i) => !player.hasSkill(i));
		},
		content() {
			const list = ['haiyanglonghun', 'lianyulonghun', 'shanmailonghun', 'haikesilonghun', 'lianjinlonghun', 'jifenglonghun'].filter((i) => !player.hasSkill(i));
			player.addSkillLog(list.randomGet());
		},
		group: 'longxin_eff',
		subSkill: {
			eff: {
				trigger: {
					global: 'damageBegin4',
				},
				filter(event, player) {
					if (['haiyanglonghun', 'lianyulonghun', 'shanmailonghun', 'haikesilonghun', 'lianjinlonghun', 'jifenglonghun'].some((i) => !player.hasSkill(i))) return false;
					return event.source && event.source == player && event.player.hp - event.num <= 1;
				},
				_priority: 2035,
				silent: true,
				charlotte: true,
				content() {
					player.$fullscreenpop('巨龙威势', 'thunder');
					player.line(trigger.player, 'thunder');
					trigger.player.qdie(player);
					game.log(player, '发动了', '#g【处决】', '使', trigger.player, '死亡');
				},
			},
		},
	},
	shangzhili: {
		trigger: {
			source: ['addBleachBuffBegin1'],
		},
		_priority: 2036,
		forced: true,
		charlotte: true,
		filter(event, player) {
			for (var i in event.buff) {
				if (get.bleachBuffIsNegetive(i) && get.bleachBuffCanAdd(i)) return true;
			}
			return false;
		},
		content() {
			for (let key in trigger.buff) {
				if (get.bleachBuffIsNegetive(key) && get.bleachBuffCanAdd(key)) {
					trigger.buff[key] += trigger.buff[key];
				}
			}
		},
		init(player, skill) {
			player.addSkill('SoulTree_Focus');
		},
		mod: {
			focus(player, num) {
				return (num += 20);
			},
		},
	},
	feishenghufu: {
		enable: 'phaseUse',
		usable: 3,
		filter(event, player) {
			if (player.getStat('skill').feishenghufu == 2) return player.hasSkill('jianduanfamingjia');
			return true;
		},
		charlotte: true,
		content() {
			let storage = player.storage.feishenghufu;
			storage[0][6] += [0, 1, 2].randomGet();
			storage[1][10]++;
			for (var i = 0; i <= 9; i++) {
				if (i < 6) storage[0][i] = 0;
				storage[1][i] = 0;
			}
			let num1 = storage[0][6],
				num2 = storage[1][10];
			while (num1-- > 0) {
				const num = [0, 1, 2, 3, 4, 5].randomGet();
				if (Math.random() < 0.3) {
					storage[0][num] += Math.floor(Math.random() * 100) - Math.ceil(Math.random() * 100);
					if (storage[0][num] < 0) storage[0][num] = 0;
				} else {
					const judge = Math.random();
					if (judge < 0.4) {
						storage[0][num] += get.rand(1, get.rand(5, 15));
					} else if (judge < 0.7) {
						storage[0][num] += get.rand(5, get.rand(10, 20));
					} else {
						storage[0][num] += get.rand(11, get.rand(25, 35));
					}
				}
			}
			while (num2-- > 0) {
				const num = [0, 1, 2, 3, 4, 5, 7, 8, 9].randomGet();
				storage[1][num] += [0, 1, 2].randomGet();
			}
			player.markSkill('feishenghufu');
		},
		ai: {
			order: 13,
			result: {
				player: 1,
			},
		},
		mod: {
			globalFrom(from, to, distance) {
				const storage = from.storage.feishenghufu;
				if (storage[1][6] > 0) return distance - storage[1][6];
			},
			globalTo(from, to, distance) {
				const storage = to.storage.feishenghufu;
				if (storage[1][7] > 0) return distance + storage[1][7];
			},
			maxHandcard(player, num) {
				const storage = player.storage.feishenghufu;
				if (storage[1][8] > 0) return num + storage[1][8];
			},
			cardUsable(card, player, num) {
				const storage = player.storage.feishenghufu;
				if (card.name == 'sha' && storage[1][9] > 0) return num + storage[1][9];
			},
		},
		mark: true,
		intro: {
			content(storage, player) {
				let str = '';
				str += '<li>' + storage[0][0] + '%概率加伤' + storage[1][0] + '点';
				str += '<li>' + storage[0][1] + '%概率减伤' + storage[1][1] + '点';
				str += '<li>' + storage[0][2] + '%概率摸牌值+' + storage[1][2];
				str += '<li>' + storage[0][3] + '%概率回复值+' + storage[1][3];
				str += '<li>' + storage[0][4] + '%概率吸血' + storage[1][4] + '点';
				str += '<li>' + storage[0][5] + '%概率暴击' + storage[1][5] + '点';
				str += '<li>进攻距离+' + storage[1][6];
				str += '<li>防守距离+' + storage[1][7];
				str += '<li>手牌上限+' + storage[1][8];
				str += '<li>【杀】限制次数+' + storage[1][9];
				return str;
			},
			markcount(storage, player) {
				return storage[1][10];
			},
		},
		init(player, skill) {
			player.storage[skill] = [
				[0, 0, 0, 0, 0, 0, 5],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
			];

			let num1 = 5,
				num2 = 2;
			while (num1-- > 0) {
				const num = [0, 1, 2, 3, 4, 5].randomGet();
				player.storage[skill][0][num] += get.rand(1, get.rand(1, 35));
			}
			while (num2-- > 0) {
				const num = [0, 1, 2, 3, 4, 5, 7, 8, 9].randomGet();
				player.storage[skill][1][num] += [0, 1, 2].randomGet();
			}
			player.markSkill('feishenghufu');
		},
		group: 'feishenghufu_eff',
		subSkill: {
			eff: {
				trigger: {
					player: ['damageBegin3', 'phaseDrawBegin2', 'recoverBegin'],
					source: ['damageBegin1', 'damageBegin2', 'damageSource'],
				},
				charlotte: true,
				forced: true,
				_priority: 2036,
				filter(event, player, name) {
					const storage = player.storage.feishenghufu;
					if (name == 'damageBegin1') return Math.ceil(Math.random() * 100) < storage[0][0] && storage[1][0] > 0;
					else if (name == 'damageBegin2') return Math.ceil(Math.random() * 100) < storage[0][5] && storage[1][5] > 0;
					else if (name == 'damageSource') return Math.ceil(Math.random() * 100) < storage[0][4] && storage[1][4] > 0;
					else if (name == 'damageBegin3') return Math.ceil(Math.random() * 100) < storage[0][1] && storage[1][1] > 0;
					else if (event.name == 'phaseDraw') return Math.ceil(Math.random() * 100) < storage[0][2] && storage[1][2] > 0;
					else if (event.name == 'recover') return Math.ceil(Math.random() * 100) < storage[0][3] && storage[1][3] > 0;
					return false;
				},
				content() {
					const name = event.triggername,
						storage = player.storage.feishenghufu;
					let str = '#g【飞升护符】';
					if (['damageBegin1', 'damageBegin2', 'phaseDrawBegin2', 'recoverBegin'].includes(name)) {
						const index = ['damageBegin1', 'damageBegin2', 'phaseDrawBegin2', 'recoverBegin'].indexOf(name);
						let str2 = ['提升了', '暴击了', '多摸了', '提供了'][index];
						const num = [0, 5, 2, 3][index];
						let str3 = storage[1][num] + ['点伤害', '点伤害', '张牌', '点回复'][index];
						game.log(str, str2, str3);
						trigger.num += storage[1][num];
					} else if (name == 'damageSource') {
						player.recover(storage[1][4]);
						game.log(str, '提供了', storage[1][4], '点吸血');
					} else if (name == 'damageBegin3') {
						const num = Math.min(trigger.num, storage[1][1]);
						trigger.num -= num;
						game.log(str, '降低了', num, '点伤害');
					}
				},
			},
		},
	},
	yuehuazhouren: {
		trigger: {
			player: ['logSkill', 'useSkillAfter'],
		},
		charlotte: true,
		forced: true,
		filter(event, player) {
			if (_status.currentPhase != player) return false;
			if (event.type != 'player') return false;
			const skill = event.sourceSkill || event.skill;
			return !get.info(skill).charlotte;
		},
		_priority: 2037,
		content() {
			delete player.getStat().card.sha;
			const num = 2 - player.countMark('yuehuazhouren_eff');
			if (num > 0) player.addMark('yuehuazhouren_eff', num, false);
			player.addTempSkill('yuehuazhouren_eff');
		},
		subSkill: {
			eff: {
				trigger: {
					player: 'useCard1',
				},
				silent: true,
				filter(event, player) {
					return event.card && event.card.name == 'sha' && player.hasMark('yuehuazhouren_eff');
				},
				content() {
					player.removeMark('yuehuazhouren_eff', 1, false);
					game.log(trigger.card, '不计入次数上限');
					if (trigger.addCount !== false) {
						trigger.addCount = false;
						const stat = player.stat[player.stat.length - 1].card;
						if (typeof stat[trigger.card.name] === 'number') stat[trigger.card.name]--;
					}
				},
				intro: {
					content: '下#张【杀】不计入次数限制',
				},
			},
		},
	},
	canriyuyi: {
		trigger: {
			global: 'damageBegin1',
		},
		forced: true,
		firstDo: true,
		_priority: 2039,
		filter(event, player) {
			return event.player == player && player.hasMark('bleachMark_fire');
		},
		charlotte: true,
		content() {
			const num = Math.min(trigger.num, player.countMark('bleachMark_fire'));
			game.log('#g【残日狱衣】', '抵挡了', num, '点伤害');
			trigger.num -= num;
			player.removeBleachBuff('bleachMark_fire', num);
		},
		ai: {
			zanjitsu_gokui: true,
		},
	},
	yajiapopo: {
		trigger: {
			global: 'gainSoulEnd',
		},
		forced: true,
		charlotte: true,
		content() {
			'step 0';
			player.awakenSkill('yajiapopo');
			('step 1');
			game.switchBleachBgm('JohnWickMode');
			player.reinit(player.name1, 'soul_johnwick', null, null);
			if (game.roundNumber == 1 && player.hp < player.maxHp) {
				player.hp = player.maxHp;
				player.update();
			}
		},
	},
	jiuchuwodesuoai: {
		trigger: {
			global: 'gainSoulEnd',
		},
		forced: true,
		charlotte: true,
		content() {
			'step 0';
			player.awakenSkill('jiuchuwodesuoai');
			('step 1');
			game.switchBleachBgm('OneVision');
			player.reinit(player.name1, 'soul_dukemon', null, null);
			if (game.roundNumber == 1 && player.hp < player.maxHp) {
				player.hp = player.maxHp;
				player.update();
			}
		},
	},
	wanjiebufu: {
		trigger: {
			global: 'gainSoulEnd',
		},
		forced: true,
		charlotte: true,
		content() {
			'step 0';
			player.$fullscreenpop('复仇之影 遮蔽天日', 'thunder');
			player.awakenSkill('wanjiebufu');
			('step 1');
			game.switchBleachBgm('CostOfTruth');
			player.reinit(player.name1, 'soul_luohou', null, null);
			if (game.roundNumber == 1 && player.hp < player.maxHp) {
				player.hp = player.maxHp;
				player.update();
			}
		},
	},
	zhaohuilingxianwang: {
		audio: 'ext:BLEACH/skill:6:mp3',
		trigger: {
			global: 'gainSoulEnd',
		},
		forced: true,
		charlotte: true,
		content() {
			player.awakenSkill('zhaohuilingxianwang');
			player.reinit(player.name1, 'soul_erlangshen', null, null);
			player.addMark('bleachMark_shield', 1);
			if (game.roundNumber == 1 && player.hp < player.maxHp) {
				player.hp = player.maxHp;
				player.update();
			}
		},
	},
};
export default skills;

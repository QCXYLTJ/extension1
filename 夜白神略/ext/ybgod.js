"use strict";//此文件手动格式化太累了,有机会用电脑整整
game.import('card', function (lib, game, ui, get, ai, _status) {
	var ybgod = {
		name: 'ybgod',//卡包命名
		connect: true,//卡包是否可以联机
		init: false,
		card: {
			goujiangdesidai: {
				type: 'equip',
				subtype: 'equip1',
				distance: { attackFrom: -6 },
				skills: ['goujiangdesidai_skill'],
				modeimage: 'boss',
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
				fullskin: true,
			},
			shenzhixiunvfu: {
				type: 'equip',
				subtype: 'equip2',
				modeimage: 'boss',
				fullskin: true,
			},
			gubuzifeng: {
				type: 'trick',
				fullskin: true,
				modeimage: 'boss',
				enable: true,
				filterTarget(card, player, target) {
					return target != player;
				},
				content() {
					target.addTempSkill('gubuzifeng_disable', { player: 'phaseAfter' });
					var skills = target.getSkills(null, false);
					for (var i = 0; i < skills.length; i++) {
						if (get.info(skills[i]).charlotte) skills.splice(i--, 1);
					}
					if (skills.length) {
						target.storage.gubuzifeng_disable.push(skills.randomGet());
						target.disableSkill('gubuzifeng_disable', target.storage.gubuzifeng_disable);
					}
				},
				ai: {
					order: 12,
					result: {
						target(player, target) {
							return -2;
						}
					}
				}
			},
			xingtianpojunfu: {
				type: 'equip',
				subtype: 'equip1',
				distance: { attackFrom: -3 },
				skills: ['noda_axe'],
				modeimage: 'boss',
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
				fullskin: true,
			},
			jinwuluorigong: {
				type: 'equip',
				subtype: 'equip1',
				skills: ['iwasawa_crowbow'],
				modeimage: 'boss',
				distance: { attackFrom: -8 },
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
				fullskin: true,
			},
			"boss_mengpohuihun": {
				mode: ['boss'],
				type: "trick",
				modeimage: "boss",
				fullskin: true,
				selectTarget: -1,
				enable: true,
				toself: true,
				multitarget: true,
				global: ['boss_mengpohuihun1'],
				modTarget: true,
				filterTarget(card, player, target) {
					return player == target;
				},
				content() {
					game.countPlayer2(function (current) {
						current.enableSkill('boss_wanghun');
					});
				},
				ai: {
					basic: {
						order() {
							return 11;
						},
						useful: [3, 1],
						value: 10
					},
					result: {
						player(player, target) {
							if (player == game.boss) {
								return -2;
							}
							else {
								return 5;
							}
						},
					},
				},
			},
			juechenjinge_gai: {
				type: 'equip',
				fullskin: true,
				image: 'ext:夜白神略/image/card/juechenjinge_gai.png',
				subtype: 'equip3',
				distance: {
					globalTo: 2,
				},
				skills: ['juechenjinge_gai'],
				nomod: true,
				nopower: true,
				ai: {
					equipValue: 9
				}
			},
			xiuluolianyuji: {
				type: 'equip',
				fullskin: true,
				subtype: 'equip1',
				modeimage: 'boss',
				distance: { attackFrom: -3 },
				skills: ['xiuluolianyuji'],
				nomod: true,
				nopower: true,
				ai: {
					equipValue: 9
				}
			},
			lianjunshengyan_gai: {
				fullskin: true,
				audio: true,
				type: 'trick',
				enable(card, player) {
					if (get.mode() == 'guozhan') return !player.isUnseen();
					return true;
				},
				image: 'ext:夜白神略/image/card/lianjunshengyan_gai.png',
				filterTarget(card, player, target) {
					if (get.mode() == 'guozhan') return target != player && target.identity != 'unknown' && target.isEnemiesOf(player);
					return true;
				},
				selectTarget() {
					return get.mode() == 'guozhan' ? [1, 1] : [-1, -1];//QQQ
				},
				changeTarget(player, targets) {
					if (get.mode() == 'guozhan') {
						var target = targets[0];
						targets.push(player);
						if (target.identity != 'ye') {
							game.filterPlayer(function (current) {
								return target != current && target.isFriendsOf(current) && !current.hasSkill('diaohulishan');
							}, targets);
						}
					}
				},/*
				contentBefore:function(){
					if(get.mode()=='guozhan'){
						var evt=event.parent;
						if(evt&&evt.targets&&evt.targets.includes(player)){
							evt.fixedSeat=true;
							evt.targets.sortBySeat();
							evt.targets.remove(player);
							evt.targets.push(player);
						}
					}
				},*/
				content() {
					'step 0'
					if (get.mode() != 'guozhan') {
						if (player == target) target.draw(game.filterPlayer().length);
						else target.chooseDrawRecover(true);
						event.finish();
					}
					else {
						if (target == player) {
							var num = targets.length - 1;
							event.num = num;
							var damaged = target.maxHp - target.hp;
							if (damaged == 0) {
								target.draw(num);
								event.finish();
							}
							else {
								var list = [];
								for (var i = Math.min(num, damaged); i >= 0; i--) {
									list.push('摸' + (num - i) + '回' + i);
								}
								target.chooseControl(list).set('prompt', '请分配自己的摸牌数和回复量').ai = function () {
									if (player.hasSkill('diaohulishan')) return 0;
									if (_status._aozhan) return list.length - 1;
									return list.randomGet();
								};
							}
						}
						else {
							target.draw();
						}
					}
					'step 1'
					if (target != player) target.link(false);
					else if (typeof result.control == 'string') {
						var index = result.control.indexOf('回');
						var draw = parseInt(result.control.slice(1, index));
						var recover = parseInt(result.control.slice(index + 1));
						if (draw) target.draw(draw);
						if (recover) target.recover(recover);
					}
				},
				ai: {
					order: 3,
					value: 4,
					useful: 2,
					result: {
						target(player, target) {
							if (player == target) return 2;
							return 1;
						},
					},
				},
			},
		},//卡牌
		skill: {
			juechenjinge_gai: {
				equipSkill: true,
				global: 'juechenjinge_gai2'
			},
			juechenjinge_gai2: {
				equipSkill: true,
				mod: {
					globalTo(from, to, distance) {
						return distance + game.countPlayer(function (current) {
							if (current == to) return;
							if (current.group != to.group && get.mode() == 'guozhan') return;
							if (current.hasSkill('juechenjinge_gai')) {
								if (get.mode() == 'boss') return 1;
								return 2
							}
						});
					}
				}
			},
		},//技能
		translate: {
			juechenjinge_gai: '绝尘金戈',
			juechenjinge_gai_append: '没写好,别私自加!',
			juechenjinge_gai_info: '锁定技,其它角色计算与你的距离+2.没写好,别私自加!',
			juechenjinge_gai_info_boss: '锁定技,其它角色计算与你的距离+2,敌方角色计算与己方其他角色距离+1.没写好,别私自加!',
			juechenjinge_gai_info_guozhan: '锁定技,其它角色计算与你的距离+2,其它势力角色计算与己方势力的距离+1.没写好,别私自加!',
			xiuluolianyuji: '修罗炼狱戟',
			xiuluolianyuji_info: '你使用【杀】可以额外指定任意名攻击范围内的其他角色为目标;锁定技,你使用【杀】造成的伤害+1,令受到伤害的角色回复1点体力',
			boss_mengpohuihun: '回魂',
			boss_mengpohuihun_info: '若场上有角色在本局游戏中因孟婆的【忘魂】失去过技能,则令其回复该技能;此牌进入弃牌堆后,会被销毁.',
			xingtianpojunfu: '刑天破军斧',
			jinwuluorigong: '金乌落日弓',
			xingtianpojunfu_info: '当你于出牌阶段内使用牌指定唯一目标后,你可弃置两张牌.若如此做,其本回合内不能使用或打出牌且其防具技能无效.',
			jinwuluorigong_info: '当你于出牌阶段内一次性失去了两张以上的手牌后,你可以弃置一名其他角色等量的牌.',
			gubuzifeng: '故步自封',
			gubuzifeng_info: '出牌阶段,对一名其他角色使用.其的一个随机技能失效直到其下个回合结束.',
			goujiangdesidai: '篝酱的丝带',
			goujiangdesidai_info: '锁定技,若你未拥有技能【纵丝】,则你视为拥有技能【纵丝】;若你拥有技能【纵丝】,则你将此技能改为「出牌阶段限两次」',
			shenzhixiunvfu: '神之修女服',
			shenzhixiunvfu_info: '没什么实际作用的衣服,仅仅是显得像个神而已.',
			lianjunshengyan_gai: '联军盛宴',
			lianjunshengyan_gai_info: '出牌阶段,对场上所有角色使用.你摸X张牌(X为存活角色数),其他角色依次选择回复1点体力或摸一张牌.',
			lianjunshengyan_gai_info_guozhan: '出牌阶段,对你和你选择的除你的势力外的一个势力的所有角色使用.若目标角色:为你,你选择摸Y张牌并回复X-Y点体力(X为该势力的角色数,Y∈[0,X]);不为你,其摸一张牌,重置.',
		},//卡牌翻译
		list: [//牌堆
			['spade', '5', 'guilongzhanyuedao'],
			['spade', 2, 'qimenbagua'],
			['club', 2, 'qimenbagua'],
			//['spade','5','juechenjinge_gai'],
			['spade', '6', 'chixueqingfeng'],
			['diamond', '12', 'xiuluolianyuji'],
			['diamond', '4', 'xuwangzhimian'],
			['spade', '2', 'longfenghemingjian'],
			['diamond', '3', 'guofengyupao'],
			['diamond', '3', 'qicaishenlu'],
			['heart', '5', 'jinwuluorigong'],
			['diamond', '5', 'xingtianpojunfu'],
			['club', '12', 'lingsheji'],
			['spade', '13', 'shanrangzhaoshu'],
			['heart', '1', 'goujiangdesidai'],
			['diamond', '13', 'niaobaidaowenha'],
			['spade', '13', 'shenzhixiunvfu'],
			['club', '5', 'gubuzifeng'],
			['diamond', '7', 'gubuzifeng'],
			['club', '13', 'yihuajiemu'],
			['club', '12', 'yihuajiemu'],
			['heart', '7', 'sadouchengbing'],
			['heart', '8', 'sadouchengbing'],
			['heart', '9', 'sadouchengbing'],
			['heart', '11', 'sadouchengbing'],
			['diamond', '12', 'wushuangfangtianji'],
			['spade', '2', 'linglongshimandai'],
			['club', '2', 'linglongshimandai'],
			['spade', '2', 'hongmianbaihuapao'],
			['club', '2', 'hongmianbaihuapao'],
			['diamond', '5', 'shufazijinguan'],
			['heart', '3', 'lianjunshengyan_gai'],
			['heart', '4', 'lianjunshengyan_gai'],
			['heart', '1', 'lianjunshengyan_gai']
		],//牌堆添加		
	}
	lib.config.all.cards.add('ybgod');
	lib.config.cards.add('ybgod');
	lib.translate['ybgod_card_config'] = "<span style='color: #e1ff00'>BOSS搬运</span>";
	return ybgod;
});
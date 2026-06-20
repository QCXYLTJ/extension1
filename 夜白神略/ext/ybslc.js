'use strict';
game.import('card', function (lib, game, ui, get, ai, _status) {
	var ybslc = {
		name: 'ybslc', //卡包命名
		connect: true, //卡包是否可以联机
		init: true,
		card: {
			//-----------------------飘雪神符
			ybsl_piaoxueruyi: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				distance: {
					attackFrom: -1,
				},
				skills: ['ybsl_piaoxueruyi'],
				ai: {
					basic: {
						equipValue: 2,
						order: 2,
						useful: 2,
						value: 2,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			//-----------------------弥仙神术
			ybsl_mixianshenshu: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				enable: true,
				type: 'trick',
				filterTarget: true,
				async content(event, trigger, player) {
					//QQQ
					const { result } = await player.chooseButton(['改变势力', [lib.group, 'tdnodes']]).set('ai', (button) => button.link == 'shen');
					if (result.links && result.links[0]) {
						event.target.changeGroup(result.links[0]);
						event.target.draw(1);
					}
				},
				chongzhu: true,
				ai: {
					order: 2,
					useful: 0,
					value(card, player, index, method) {
						//不知道哪个参数有用,全写了
						if (player.countGroup != 'shen') {
							return 7;
						} else {
							return 0;
						}
					},
					result: {
						player(player, target) {
							if (player.countGroup != 'shen') return 7;
							return 0;
						},
						target: 1,
					},
				},
				selectTarget: 1,
			},
			//-----------------万钧神弩
			ybsl_tututu: {
				enable: true,
				type: 'trick',
				fullskin: true,
				filterTarget: lib.filter.notMe,
				content() {
					'step 0';
					if (!player.isIn() || !target.isIn()) {
						event.finish();
						return;
					}
					var num = game.countPlayer();
					if (num < 4) {
						num = 4;
					}
					if (num > 10) {
						num = 10;
					}
					event.showCards = get.cards(num);
					game.cardsGotoOrdering(event.showCards);
					player.showCards(event.showCards);
					player.$throw(event.showCards, 1000);
					player.loseToDiscardpile(event.showCards);
					game.log(player, '将', event.showCards, '置入了弃牌堆');
					('step 1');
					for (var i of event.showCards) {
						if (i.name == 'sha' && player.canUse(i, target, false)) {
							player.useCard(i, target, false);
						}
					}
				},
				ai: {
					basic: {
						useful: 4,
						value: 4,
					},
					order: 6,
					result: {
						target(player, target, card, isLink) {
							if (get.effect(target, { name: 'sha' }, player, target) == 0) return 0;
							return -2.5;
						},
					},
					tag: {
						respond: 1,
						respondShan: 1,
						damage: 1,
					},
				},
			},
			ybsl_qiuxianruoke: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				type: 'trick',
				enable: true,
				selectTarget: -1,
				toself: true,
				filterTarget: (card, player, target) => target == player,
				modTarget: true,
				async content(event, trigger, player) {
					var target = event.target;
					target.say('山不厌高,海不厌深,周公吐哺,天下归心.');
					var type = [];
					for (var i in lib.card) {
						if (!type.includes(lib.card[i].type)) type.push(lib.card[i].type);
					} //QQQ
					const result = await player
						.chooseButton(['声明一个花色和类型,亮出牌堆顶三张牌,获得与你描述相符的牌.若有两项皆满足的牌,你回复一点体力', '花色', [lib.suits, 'tdnodes'], '类型', [type, 'tdnodes']], true, 2)
						.set('filterButton', (button) => {
							if (ui.selected.buttons.length && lib.suits.includes(ui.selected.buttons[0].link)) return type.includes(button.link) && button.link != 'none';
							if (ui.selected.buttons.length && type.includes(ui.selected.buttons[0].link)) return lib.suits.includes(button.link);
							return true;
						})
						.forResult();
					if (result.links && result.links.length) {
						var cards = get.cards(3);
						game.cardsGotoOrdering(cards);
						target.showCards(cards);
						for (var i of cards) {
							if (result.links.includes(i.suit) || result.links.includes(lib.card[i.name].type)) await target.gain(i, 'gain2');
							if (result.links.includes(lib.card[i.name].type) && result.links.includes(i.suit)) await target.recover();
						}
					}
				},
				ai: {
					basic: {
						order: 8,
						useful: 4,
						value: 3,
					},
					result: {
						target: 2,
					},
					tag: {
						gain: 2,
					},
				},
			},
			//-----------------------同归于尽
			ybsl_tongguiyujin: {
				audio: 'ext:夜白神略/audio/card:true',
				enable: true,
				type: 'trick',
				fullskin: true,
				// nodelay:true,
				filterTarget(card, player, target) {
					return target != player;
				},
				defaultYingbianEffect: 'add',
				// 'yingbian_prompt':'当你使用此牌选择目标后,你可为此牌增加一个目标',
				// 'yingbian_tags':['add'],
				// yingbian:function (event){
				// 	event.yingbian_addTarget=true;
				// },
				content() {
					'step 0';
					if (player.hp > 1) player.loseHp();
					('step 1');
					var num = Math.max(player.maxHp - player.hp || 1);
					event.baseDamage = num;
					return target.damage();
				},
				ai: {
					basic: {
						order: 5,
						useful: 2,
						value: 8,
					},
					yingbian(card, player, targets, viewer) {
						if (get.attitude(viewer, player) <= 0) return 0;
						if (
							game.hasPlayer(function (current) {
								return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
							})
						)
							return 6;
						return 0;
					},
					result: {
						target(player, target, cardx) {
							if (player.hasSkillTag('viewHandcard', null, target, true))
								return target.countCards('h', function (card) {
									return card.suit != cardx.suit;
								}) > 0
									? -1.5
									: 0;
							return -1.4;
						},
					},
					tag: {
						damage: true,
					},
				},
				selectTarget: 1,
			},
			ybsl_zhijizhibi: {
				audio: 'zhibi',
				fullskin: true,
				type: 'trick',
				enable: true,
				chongzhu: true,
				filterTarget(card, player, target) {
					if (player == target) return false;
					return target.countCards('h') || target.isUnseen(2);
				},
				content() {
					'step 0';
					if (!player.storage.zhibi) {
						player.storage.zhibi = [];
					}
					if (!player.storage.ybsl_zhijizhibi) {
						player.storage.ybsl_zhijizhibi = [];
					}
					player.storage.zhibi.add(target);
					var controls = [];
					if (target.countCards('h')) controls.push('手牌');
					if (get.mode() == 'guozhan') {
						if (target.isUnseen(0)) controls.push('主将');
						if (target.isUnseen(1)) controls.push('副将');
					}
					if (get.mode() == 'identity') {
						if (!target.identityShown && !player.storage.ybsl_zhijizhibi.includes(target)) controls.push('身份');
					}
					if (controls.length > 1) {
						player.chooseControl(controls).set('ai', function () {
							return 1;
						});
					}
					if (controls.length == 0) event.finish();
					('step 1');
					var content;
					var str = get.translation(target) + '的';
					if (result.control) {
						if (result.control == '手牌') {
							content = [str + '手牌', target.getCards('h')];
							game.log(player, '观看了', target, '的手牌');
						} else if (result.control == '身份') {
							// content=[str+'身份'];
							// player.storage.ybsl_zhijizhibi.push(target);
							game.log(player, '观看了', target, '的身份');
						} else if (result.control == '主将') {
							content = [str + '主将', [[target.name1], 'character']];
							game.log(player, '观看了', target, '的主将');
						} else {
							content = [str + '副将', [[target.name2], 'character']];
							game.log(player, '观看了', target, '的副将');
						}
					} else if (target.countCards('h')) {
						content = [str + '手牌', target.getCards('h')];
						game.log(player, '观看了', target, '的手牌');
					} else if (!target.identityShown) {
						game.log(player, '观看了', target, '的身份');
					} else if (target.isUnseen(0)) {
						content = [str + '主将', [[target.name1], 'character']];
						game.log(player, '观看了', target, '的主将');
					} else {
						content = [str + '副将', [[target.name2], 'character']];
						game.log(player, '观看了', target, '的副将');
					}
					if (result.control == '身份') {
						var func = function () {
							target.setIdentity();
						};
						if (player == game.me) func();
						else if (player.isOnline()) player.send(func);
						player.storage.ybsl_zhijizhibi.push(target);
					} else {
						player.chooseControl('ok').set('dialog', content);
					}
				},
				ai: {
					order: 9.5,
					wuxie() {
						return 0;
					},
					result: {
						player(player, target) {
							if (player.countCards('h') <= player.hp) return 0;
							if (player.storage.zhibi && player.storage.zhibi.includes(target)) return 0;
							return target.isUnseen() ? 1 : 0;
						},
					},
				},
			},
			ybsl_anduchencang: {
				fullskin: true,
				type: 'trick',
				wuxieable: true,
				global: ['ybsl_anduchencang_skill'],
				selectTarget: -1,
				filterTarget(card, player, target) {
					return target == player;
				},
				// filterTarget:true,
				toself: true,
				modTarget: true,
				// notarget:true,
				content() {
					target.draw(2);
					target.phaseUse(); //QQQ
				},
				ai: {
					basic: {
						useful: [6],
						value: [6],
					},
					result: {
						player: 4,
						target: -1, //QQQ
					},
				},
			},
			ybsl_kaicangzhenliang: {
				audio: true,
				fullskin: true,
				type: 'trick',
				enable: true,
				cardcolor: 'red',
				selectTarget: -1,
				filterTarget: true,
				contentBefore() {
					'step 0';
					if (!targets.length) {
						event.finish();
						return;
					}
					if (get.is.versus()) {
						player
							.chooseControl('顺时针', '逆时针', function (event, player) {
								if (player.next.side == player.side) return '逆时针';
								return '顺时针';
							})
							.set('prompt', '选择' + get.translation(card) + '的结算方向');
					} else {
						event.goto(2);
					}
					('step 1');
					if (result && result.control == '顺时针') {
						var evt = event.parent,
							sorter = _status.currentPhase || player;
						evt.fixedSeat = true;
						evt.targets.sortBySeat(sorter);
						evt.targets.reverse();
						if (evt.targets[evt.targets.length - 1] == sorter) {
							evt.targets.unshift(evt.targets.pop());
						}
					}
					('step 2');
					ui.clear();
					var num;
					if (event.targets) {
						num = event.targets.length;
					} else {
						num = game.countPlayer();
					}
					var cards = get.cards(num);
					game.cardsGotoOrdering(cards).relatedEvent = event.parent;
					var dialog = ui.create.dialog('开仓赈粮', cards, true);
					_status.dieClose.push(dialog);
					dialog.videoId = lib.status.videoId++;
					game.addVideo('cardDialog', null, ['开仓赈粮', get.cardsInfo(cards), dialog.videoId]);
					event.parent.preResult = dialog.videoId;
					game.broadcast(
						function (cards, id) {
							var dialog = ui.create.dialog('开仓赈粮', cards, true);
							_status.dieClose.push(dialog);
							dialog.videoId = id;
						},
						cards,
						dialog.videoId
					);
					game.log(event.card, '亮出了', cards);
				},
				content() {
					'step 0';
					for (var i = 0; i < ui.dialogs.length; i++) {
						if (ui.dialogs[i].videoId == event.preResult) {
							event.dialog = ui.dialogs[i];
							break;
						}
					}
					if (!event.dialog) {
						event.finish();
						return;
					}
					if (event.dialog.buttons.length > 1) {
						var next = player.chooseButton(true, function (button) {
							return get.value(button.link, _status.event.player);
						});
						next.set('dialog', event.preResult);
						next.set('closeDialog', false);
						next.set('dialogdisplay', true);
						// next.set('prompt2',true);
					} else {
						event.directButton = event.dialog.buttons[0];
					}
					('step 1');
					var dialog = event.dialog;
					var card;
					if (event.directButton) {
						card = event.directButton.link;
					} else {
						for (var i of dialog.buttons) {
							if (i.link == result.links[0]) {
								card = i.link;
								break;
							}
						}
						if (!card) card = event.dialog.buttons[0].link;
					}
					var button;
					for (var i = 0; i < dialog.buttons.length; i++) {
						if (dialog.buttons[i].link == card) {
							button = dialog.buttons[i];
							button.querySelector('.info').innerHTML = (function (target) {
								if (target._tempTranslate) return target._tempTranslate;
								var name = target.name;
								if (lib.translate[name + '_ab']) return lib.translate[name + '_ab'];
								return get.translation(name);
							})(target);
							dialog.buttons.remove(button);
							break;
						}
					}
					var capt = get.translation(player) + '为' + get.translation(target) + '分配了' + get.translation(button.link);
					if (card) {
						target.gain(card, 'visible');
						target.$gain2(card);
						game.broadcast(
							function (card, id, name, capt) {
								var dialog = get.idDialog(id);
								if (dialog) {
									dialog.content.firstChild.innerHTML = capt;
									for (var i = 0; i < dialog.buttons.length; i++) {
										if (dialog.buttons[i].link == card) {
											dialog.buttons[i].querySelector('.info').innerHTML = name;
											dialog.buttons.splice(i--, 1);
											break;
										}
									}
								}
							},
							card,
							dialog.videoId,
							(function (target) {
								if (target._tempTranslate) return target._tempTranslate;
								var name = target.name;
								if (lib.translate[name + '_ab']) return lib.translate[name + '_ab'];
								return get.translation(name);
							})(target),
							capt
						);
					}
					dialog.content.firstChild.innerHTML = capt;
					game.addVideo('dialogCapt', null, [dialog.videoId, dialog.content.firstChild.innerHTML]);
					game.log(player, '为', target, '分配了', button.link);
				},
				contentAfter() {
					for (var i = 0; i < ui.dialogs.length; i++) {
						if (ui.dialogs[i].videoId == event.preResult) {
							var dialog = ui.dialogs[i];
							dialog.close();
							_status.dieClose.remove(dialog);
							if (dialog.buttons.length) {
								event.remained = [];
								for (var i = 0; i < dialog.buttons.length; i++) {
									event.remained.push(dialog.buttons[i].link);
								}
								event.trigger('wuguRemained');
							}
							break;
						}
					}
					game.broadcast(function (id) {
						var dialog = get.idDialog(id);
						if (dialog) {
							dialog.close();
							_status.dieClose.remove(dialog);
						}
					}, event.preResult);
					game.addVideo('cardDialog', null, event.preResult);
				},
				ai: {
					wuxie() {
						if (Math.random() < 0.5) return 0;
					},
					basic: {
						order: 3,
						useful: 0.5,
					},
					result: {
						target(player, target) {
							var sorter = _status.currentPhase || player;
							if (get.is.versus()) {
								if (target == sorter) return 1.5;
								return 1;
							}
							if (player.hasUnknown(2)) {
								return 0;
							}
							return (1 - get.distance(sorter, target, 'absolute') / game.countPlayer()) * get.attitude(player, target) > 0 ? 0.5 : 0.7;
						},
					},
					tag: {
						draw: 1,
						multitarget: 1,
					},
				},
			},
			//-----------------------天火煅
			ybsl_tianhuoduan: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				enable: true,
				type: 'basic',
				toself: true,
				filterTarget(card, player, target) {
					var he = player.getCards('he');
					var list = lib.skill.xinfu_ybjingxie.getJingxie();
					for (var i = 0; i < he.length; i++) {
						if (list.includes(he[i].name)) return target == player;
					}
					return false;
				},
				content() {
					'step 0';
					player.addTempSkill('ybsl_tianhuoduan_skill');
					('step 1');
					var list = lib.skill.xinfu_ybjingxie.getJingxie();
					if (
						player.countCards('he', function (card, player) {
							return list.includes(card.name);
						}) > 0
					) {
						player.chooseCard('he', 1, true, function (card, player) {
							return list.includes(card.name);
						});
					} else {
						event.finish();
					}
					('step 2');
					player.showCards(result.cards);
					('step 3');
					var card = result.cards[0];
					var bool = get.position(card) == 'e';
					// var tag=[];
					// // if(get.cardtag(card,'gifts')){tag.push('gifts');}
					// for(var i of _status.cardtag){
					// 	if(get.cardtag(card,i)){tag.push(i);}
					// }
					if (bool) player.removeEquipTrigger(card);
					game.addVideo('skill', player, ['xinfu_jingxie', [bool, get.cardInfo(card)]]);
					game.broadcastAll(function (card) {
						if (card.name == 'wuxinghelingshan') {
							card.name = 'zhuque';
						}
						if (card.name == 'chiyanzhenhunqin') {
							card.name = 'zhuque';
						}
						if (card.name == 'shandian' && card.suit == 'spade') {
							card.name = 'fulei';
						}
						if (card.name == 'taigongyinfu') {
							card.name = 'fulei';
						}
						if (card.name == 'hongshui') {
							card.name = 'shandian';
						}
						if (card.name == 'huoshan') {
							card.name = 'shandian';
						}
						if (card.name == 'wutiesuolian') {
							card.name = 'fangtian';
						}
						card.init([card.suit, card.number, 'rewrite_' + card.name, card.nature /*,tag*/]);
					}, card);
					if (bool) {
						var info = get.info(card);
						if (info.skills) {
							for (var i = 0; i < info.skills.length; i++) {
								player.addSkillTrigger(info.skills[i]);
							}
						}
					}
				},
				chongzhu: true,
				ai: {
					order: 7,
					useful: 0,
					value: 4,
					result: {
						target: 2, //QQQ
					},
				},
				selectTarget: -1,
			},
			//-----------------------毒箭
			// rewrite_du:{
			// 	type:'equip',
			// 	subtype:'equip5',
			// 	fullskin:true,
			// 	legend:true,
			// 	skills:['rewrite_du'],
			// 	ai:{
			// 		equipValue:7,
			// 		basic:{
			// 			equipValue:7,
			// 		},
			// 	},
			// 	enable:true,
			// 	selectTarget:-1,
			// 	filterTarget:function (card,player,target){
			// 		return target==player;
			// 	},
			// 	modTarget:true,
			// 	allowMultiple:false,
			// 	content:function (){
			// 		if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
			// 	},
			// 	toself:true,
			// },
			rewrite_du: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				type: 'basic',
				enable: true,
				epic: true,
				selectTarget: 1,
				filterTarget(card, player, target) {
					return target != player;
				},
				defaultYingbianEffect: 'add',
				// 'yingbian_prompt':'当你使用此牌选择目标后,你可为此牌增加一个目标',
				// 'yingbian_tags':['add'],
				// yingbian:function (event){
				// 	event.yingbian_addTarget=true;
				// },
				content() {
					'step 0';
					if (typeof event.shanRequired != 'number' || !event.shanRequired || event.shanRequired < 0) {
						event.shanRequired = 1;
					}
					if (typeof event.baseDamage != 'number') event.baseDamage = 1;
					if (typeof event.extraDamage != 'number') event.extraDamage = 0;
					('step 1');
					if (event.directHit || event.directHit2 || (!_status.connectMode && lib.config.skip_shan && !target.hasShan())) {
						event._result = { bool: false };
					} else if (event.skipShan) {
						event._result = { bool: true, result: 'shaned' };
					} else {
						var next = target.chooseToUse('请使用一张闪响应毒箭');
						next.set('type', 'respondShan');
						next.set('filterCard', function (card, player) {
							if (card.name != 'shan') return false;
							return lib.filter.cardEnabled(card, player, 'forceEnable');
						});
						if (event.shanRequired > 1) {
							next.set('prompt2', '(共需使用' + event.shanRequired + '张闪)');
						}
						next.set('ai1', function (card) {
							var target = _status.event.player;
							var evt = _status.event.parent;
							var bool = true;
							if (_status.event.shanRequired > 1 && !get.is.object(card) && target.countCards('h', 'shan') < _status.event.shanRequired) {
								bool = false;
							} else if (target.hasSkillTag('useShan')) {
								bool = true;
							} else if (target.hasSkillTag('noShan')) {
								bool = false;
							} else if (get.damageEffect(target, evt.player, target, evt.card.nature) >= 0) bool = false;
							if (bool) {
								return get.order(card);
							}
							return 0;
						}).set('shanRequired', event.shanRequired);
						next.set('respondTo', [player, card]);
						//next.autochoose=lib.filter.autoRespondShan;
					}
					('step 2');
					if ((!result || !result.bool || !result.result || result.result != 'shaned') && !event.unhurt) {
						target.damage(get.nature(event.card));
						var suit = card.suit || null;
						var num = card.number || null;
						var nature = card.nature || null;
						target.gain(game.createCard('du', suit, num, nature, ['gifts']), 'gain2');
						event.result = { bool: true };
						event.trigger('rewrite_du_Damage');
					} else {
						event.result = { bool: false };
						event.trigger('rewrite_du_Unhirt');
					}
					// target.damage(event.baseDamage||1);
				},
				ai: {
					basic: {
						order: 5,
						useful: 2,
						value: 8,
					},
					yingbian(card, player, targets, viewer) {
						if (get.attitude(viewer, player) <= 0) return 0;
						if (
							game.hasPlayer(function (current) {
								return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
							})
						)
							return 6;
						return 0;
					},
					result: {
						target(player, target, cardx) {
							if (player.hasSkillTag('viewHandcard', null, target, true))
								return target.countCards('h', function (card) {
									return card.suit != cardx.suit;
								}) > 0
									? -1.5
									: 0;
							return -1.4;
						},
					},
					tag: {
						damage: true,
					},
				},
			},
			// 'rewrite_du':{
			// 	audio:'ext:夜白神略/audio/card:true',
			// 	fullskin:true,
			// 	type:'basic',
			// 	enable:true,
			// 	epic:true,
			// 	selectTarget:1,
			// 	filterTarget:function (card,player,target){
			// 		return target!=player;
			// 	},
			// 	defaultYingbianEffect:'add',
			// // 	'yingbian_prompt':'当你使用此牌选择目标后,你可为此牌增加一个目标',
			// // 	'yingbian_tags':['add'],
			// // 	yingbian:function (event){
			// // 		event.yingbian_addTarget=true;
			// // 	},
			// 	content:function(){
			// 		target.damage(event.baseDamage||1);
			// 		var suit=(card.suit||null);
			// 		var num=(card.number||null);
			// 		var nature=(card.nature||null);
			// 		target.gain(game.createCard('du',suit,num,nature,['gifts']),'gain2')
			// 	},
			// 	ai:{
			// 		basic:{
			// 			order:5,
			// 			useful:2,
			// 			value:8,
			// 		},
			// 		yingbian:function (card,player,targets,viewer){
			// 			if(get.attitude(viewer,player)<=0) return 0;
			// 			if(game.hasPlayer(function(current){
			// 				return !targets.includes(current)&&lib.filter.targetEnabled2(card,player,current)&&get.effect(current,card,player,player)>0;
			// 			})) return 6;
			// 			return 0;
			// 		},
			// 		result:{
			// 			target:function (player,target,cardx){
			// 				if(player.hasSkillTag('viewHandcard',null,target,true)) return target.countCards('h',function(card){
			// 					return card.suit!=cardx.suit
			// 				})>0?-1.5:0;
			// 				return -1.4;
			// 			},
			// 		},
			// 		tag:{
			// 			damage:true,
			// 		},
			// 	},
			// },
			//---------无双铠
			ybsl_nodouble: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip2',
				skills: ['ybsl_nodouble'],
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
			},
			//-----------------------乌孙
			ybsl_wusun: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip3',
				distance: {
					globalTo: 1,
				},
				ai: {
					basic: {
						order: 7,
						useful: 2,
						equipValue: 7,
						value: 7,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			//-----------------------王追
			ybsl_wangzhui: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip3',
				distance: {
					globalTo: 1,
				},
				ai: {
					basic: {
						order: 7,
						useful: 2,
						equipValue: 7,
						value: 7,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			//-----------------------西极
			ybsl_xiji: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip4',
				distance: {
					globalFrom: -1,
				},
				ai: {
					basic: {
						order: 4,
						useful: 2,
						equipValue: 4,
						value: 4,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			//-----------------------奔雷
			ybsl_benlei: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip4',
				distance: {
					globalFrom: -1,
				},
				ai: {
					basic: {
						order: 4,
						useful: 2,
						equipValue: 4,
						value: 4,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			//-----------------------照夜玉狮
			ybsl_zhaoyeyushi: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip3',
				epic: true,
				distance: {
					globalTo: 2,
				},
				// enable:true,
				// selectTarget:-1,
				// filterTarget:function (card,player,target){
				// return target==player;
				// },
				// modTarget:true,
				// allowMultiple:false,
				// content:function (){
				// if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
				// },
				// toself:true,
				ai: {
					basic: {
						order: 9,
						useful: 2,
						equipValue: 9,
						value: 9,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			//-----------------------玉兰白龙驹
			ybsl_yulanbailongju: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip4',
				epic: true,
				distance: {
					globalFrom: -2,
				},
				ai: {
					basic: {
						order: 7,
						useful: 2,
						equipValue: 7,
						value: 7,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			//------------圣诞麋鹿
			ybsl_milu: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip4',
				legend: true,
				distance: {
					globalFrom: -1,
				},
				skills: ['ybsl_milu'],
				ai: {
					basic: {
						order: 7.1,
						useful: 2,
						equipValue: 7.1,
						value: 7.1,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			//------------神兽羊驼
			ybsl_yangtuo: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip3',
				legend: true,
				distance: {
					globalTo: 1,
				},
				skills: ['ybsl_yangtuo'],
				ai: {
					basic: {
						order: 8.1,
						useful: 2,
						equipValue: 8.1,
						value: 8.1,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			//-----------------------乌云踏雪
			rewrite_ybsl_wangzhui: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip3',
				legend: true,
				distance: {
					globalFrom: -1,
					globalTo: 2,
				},
				skills: ['rewrite_ybsl_wangzhui'],
				ai: {
					basic: {
						order: 9.5,
						useful: 2,
						equipValue: 9.5,
						value: 9.5,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			//-----------------------烈焰赤兔
			rewrite_chitu: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip4',
				legend: true,
				distance: {
					globalFrom: -2,
					globalTo: 1,
				},
				skills: ['rewrite_chitu'],
				ai: {
					basic: {
						order: 9.1,
						useful: 2,
						equipValue: 9.1,
						value: 9.1,
					},
					result: {
						target(player, target, card) {
							return get.equipResult(player, target, card.name);
						},
					},
				},
			},
			//------------------方天锁链鞭(什么J8玩意)
			rewrite_fangtian: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				legend: true,
				distance: { attackFrom: -3 },
				ai: {
					basic: {
						equipValue: 3.5,
					},
				},
				skills: ['fangtian_skill', 'fangtian_guozhan', 'rewrite_fangtian'],
			},
			rewrite_huxinjing: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip2',
				legend: true,
				ai: {
					basic: {
						equipValue: 7,
					},
				},
				skills: ['rewrite_huxinjing', 'rewrite_huxinjing2'],
				enable: true,
				filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
				selectTarget() {
					return [-1, -1]; //QQQ
				},
				toself: false,
				modTarget: true,
				allowMultiple: false,
				content() {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
			},
			//------------------北斗七星扇
			rewrite_zhuque: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				legend: true,
				distance: { attackFrom: -3 },
				ai: {
					basic: {
						equipValue: 3.5,
					},
				},
				skills: ['rewrite_zhuque'],
			},
			//--------------------七星龙渊剑
			rewrite_yitianjian: {
				type: 'equip',
				subtype: 'equip1',
				fullskin: true,
				epic: true,
				distance: { attackFrom: -2 },
				skills: ['rewrite_yitianjian'],
				ai: {
					equipValue: 2.9,
					basic: {
						equipValue: 2.9,
					},
				},
			},
			//--------------------原版铜雀
			rewrite_tongque: {
				type: 'equip',
				subtype: 'equip5',
				fullskin: true,
				legend: true,
				skills: ['rewrite_tongque'],
				ai: {
					equipValue: 7,
					basic: {
						equipValue: 7,
					},
				},
			},
			//--------------------百鸟朝凤枪
			ybsl_bainiaochaofeng: {
				type: 'equip',
				subtype: 'equip1',
				fullskin: true,
				distance: { attackFrom: -2 },
				skills: ['ybsl_bainiaochaofeng'],
				ai: {
					equipValue: 6,
					basic: {
						equipValue: 6,
					},
				},
				addinfo: '霸天&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;',
			},
			//----------------雷系
			rewrite_fulei: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				type: 'equip',
				subtype: 'equip5',
				epic: true,
				ai: {
					basic: {
						equipValue: 4.2,
					},
				},
				skills: ['rewrite_fulei_skill', 'ybsl_tianleiyubi_link', 'ybsl_tianleiyubi_mix1'],
			},
			rewrite_shandian: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				type: 'equip',
				subtype: 'equip5',
				epic: true,
				ai: {
					basic: {
						equipValue: 4.5,
					},
				},
				skills: ['rewrite_shandian_skill', 'ybsl_tianleiyubi_link', 'ybsl_tianleiyubi_mix2'],
			},
			ybsl_tianleiyubi: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				type: 'equip',
				subtype: 'equip5',
				epic: true,
				ai: {
					basic: {
						equipValue: 5.4,
					},
				},
				skills: ['ybsl_tianleiyubi_skill', 'rewrite_fulei_skill', 'ybsl_tianleiyubi_link', 'rewrite_shandian_skill'],
			},
			rewrite_ybsl_tianleiyubi: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				legend: true,
				type: 'equip',
				subtype: 'equip5',
				ai: {
					basic: {
						equipValue: 6.6,
					},
				},
				skills: ['ybsl_tianleiyubi_skill', 'rewrite_fulei_skill', 'ybsl_tianleiyubi_link', 'rewrite_shandian_skill', 'rewrite_ybsl_tianleiyubi_skill'],
			},
			//-------------------大风
			ybsl_dafeng: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				type: 'trick',
				enable: true,
				selectTarget: 1,
				filterTarget(card, player, target) {
					return target != player;
				},
				defaultYingbianEffect: 'add',
				content() {
					'step 0';
					if (typeof event.baseDamage != 'number') event.baseDamage = 1;
					if (typeof event.extraDamage != 'number') event.extraDamage = 0;
					if (event.directHit) event._result = { bool: false };
					else {
						var next = target.chooseToDiscard('h', { type: 'basic' }, '请弃置一张基本牌,否则受到一点伤害');
						next.set('ai', function (card) {
							var evt = _status.event.parent;
							if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
							if (evt.player.hasSkillTag('notricksource')) return 0;
							if (evt.target.hasSkillTag('notrick')) return 0;
							return get.order(card);
						});
					}
					('step 1');
					if (result.bool == false) {
						target.damage();
					}
				},
				ai: {
					basic: {
						order: 5,
						useful: 2,
						value: 4.1,
					},
					yingbian(card, player, targets, viewer) {
						if (get.attitude(viewer, player) <= 0) return 0;
						if (
							game.hasPlayer(function (current) {
								return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
							})
						)
							return 6;
						return 0;
					},
					result: {
						target(player, target, cardx) {
							if (player.hasSkillTag('viewHandcard', null, target, true))
								return target.countCards('h', function (card) {
									return card.suit != cardx.suit;
								}) > 0
									? -1.5
									: 0;
							return -1.4;
						},
					},
					tag: {
						damage: true,
					},
				},
			},
			//-------------------落雷
			ybsl_luolei: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				type: 'trick',
				enable: true,
				selectTarget: 1,
				filterTarget(card, player, target) {
					return target != player;
				},
				defaultYingbianEffect: 'add',
				content() {
					'step 0';
					if (typeof event.baseDamage != 'number') event.baseDamage = 1;
					if (typeof event.extraDamage != 'number') event.extraDamage = 0;
					if (event.directHit) event._result = { bool: false };
					else {
						var next = target.chooseToDiscard('he', { type: 'equip' }, '请弃置一张装备牌,否则受到一点雷电伤害');
						next.set('ai', function (card) {
							var evt = _status.event.parent;
							if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
							if (evt.player.hasSkillTag('notricksource')) return 0;
							if (evt.target.hasSkillTag('notrick')) return 0;
							if (evt.target.hasSkillTag('nothunder')) return 0;
							return get.order(card);
						});
					}
					('step 1');
					if (result.bool == false) {
						target.damage('thunder');
					}
				},
				ai: {
					basic: {
						order: 5,
						useful: 2,
						value: 4.1,
					},
					yingbian(card, player, targets, viewer) {
						if (get.attitude(viewer, player) <= 0) return 0;
						if (
							game.hasPlayer(function (current) {
								return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
							})
						)
							return 6;
						return 0;
					},
					result: {
						target(player, target, cardx) {
							if (player.hasSkillTag('viewHandcard', null, target, true))
								return target.countCards('h', function (card) {
									return card.suit != cardx.suit;
								}) > 0
									? -1.5
									: 0;
							return -1.4;
						},
					},
					tag: {
						damage: 1,
						natureDamage: 1,
						thunderDamage: 1,
					},
				},
			},
			//---------------流星火矢
			ybsl_meteor: {
				audio: true,
				fullskin: true,
				type: 'trick',
				enable: true,
				selectTarget: -1,
				reverseOrder: true,
				defaultYingbianEffect: 'remove',
				filterTarget(card, player, target) {
					return target != player;
				},
				content() {
					'step 0';
					if (typeof event.baseDamage != 'number') event.baseDamage = 1;
					if (typeof event.extraDamage != 'number') event.extraDamage = 0;
					if (event.directHit) event._result = { bool: false };
					else {
						var next = target.chooseToRespond({ name: 'shan' });
						next.set('ai', function (card) {
							var evt = _status.event.parent;
							if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
							if (evt.player.hasSkillTag('notricksource')) return 0;
							if (evt.target.hasSkillTag('notrick')) return 0;
							if (evt.target.hasSkillTag('noShan')) {
								return -1;
							}
							return get.order(card);
						});
						next.autochoose = lib.filter.autoRespondShan;
					}
					('step 1');
					if (result.bool == false) {
						target.damage('fire');
					}
				},
				ai: {
					wuxie(target, card, player, viewer) {
						if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
							if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
						}
					},
					basic: {
						order: 9,
						useful: 1,
						value: 5,
					},
					result: {
						target_use(player, target) {
							if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
							var nh = target.countCards('h');
							if (get.mode() == 'identity') {
								if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
							}
							if (nh == 0) return -2;
							if (nh == 1) return -1.7;
							return -1.5;
						},
						target(player, target) {
							var nh = target.countCards('h');
							if (get.mode() == 'identity') {
								if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
							}
							if (nh == 0) return -2;
							if (nh == 1) return -1.7;
							return -1.5;
						},
					},
					tag: {
						respond: 1,
						respondShan: 1,
						damage: 1,
						multitarget: 1,
						multineg: 1,
						fireDamage(card, nature) {
							return 1;
						},
					},
				},
			},
			//--------------------铁骑兵锋
			ybsl_disarm: {
				audio: true,
				fullskin: true,
				type: 'trick',
				enable: true,
				selectTarget: -1,
				defaultYingbianEffect: 'remove',
				filterTarget(card, player, target) {
					return target != player;
				},
				reverseOrder: true,
				content() {
					'step 0';
					if (typeof event.baseDamage != 'number') event.baseDamage = 1;
					if (typeof event.extraDamage != 'number') event.extraDamage = 0;
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
						event.goto(3);
					} else if (target.countCards('h') > 0) {
						target.chooseToDiscard('铁骑兵锋:请弃置一张牌,否则此【铁骑兵锋】依然造成伤害').set('ai', function (card) {
							var target = _status.event.player;
							var evt = _status.event.parent;
							var bool = true;
							if (get.damageEffect(target, evt.player, target, evt.card.nature) >= 0) bool = false;
							if (bool) {
								return 8 - get.useful(card);
							}
							return 0;
						});
					}
					('step 2');
					if ((!result || !result.bool) && !event.unhurt) {
						event.goto(3);
					} else {
						event.finish();
					}
					('step 3');
					target.damage(event.customSource || player);
				},
				ai: {
					wuxie(target, card, player, viewer) {
						if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
							if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
						}
					},
					basic: {
						order: 9,
						useful: [5, 1],
						value: 5,
					},
					result: {
						target_use(player, target) {
							if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
							var nh = target.countCards('h');
							if (get.mode() == 'identity') {
								if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
							}
							if (nh == 0) return -2;
							if (nh == 1) return -1.7;
							return -1.5;
						},
						target(player, target) {
							var nh = target.countCards('h');
							if (get.mode() == 'identity') {
								if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
							}
							if (nh == 0) return -2;
							if (nh == 1) return -1.7;
							return -1.5;
						},
					},
					tag: {
						respond: 1,
						respondSha: 1,
						damage: 1,
						multitarget: 1,
						multineg: 1,
					},
				},
			},
			//--------------------花中四君子
			ybsl_meihua: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				type: 'ybsl_flower',
				enable: true,
				defaultYingbianEffect: 'add',
				filterTarget(card, player, target) {
					if (get.is.versus()) {
						return player.side == target.side;
					} else {
						return true;
					}
				},
				selectTarget: [1, 2],
				content() {
					target.draw(event.baseDamage || 1);
				},
				ai: {
					wuxie() {
						return 0;
					},
					basic: {
						useful: 3,
						value: 3,
						order: 5,
					},
					result: {
						target(player, target) {
							var hs = target.getCards('h');
							if (hs.length <= 1) {
								return 0.3;
							}
							return Math.sqrt(target.countCards('he'));
						},
					},
					tag: {
						norepeat: 1,
					},
				},
			},
			ybsl_lanhua: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				type: 'ybsl_flower',
				enable: true,
				defaultYingbianEffect: 'add',
				filterTarget(card, player, target) {
					if (get.is.versus()) {
						return player.side == target.side;
					} else {
						return true;
					}
				},
				selectTarget: [1, 2],
				content() {
					target.gainMaxHp(event.baseDamage || 1);
				},
				ai: {
					basic: {
						useful: 6,
						value: 6,
						order: 7,
					},
					result: {
						target(player, target) {
							var hs = target.getCards('h');
							if (hs.length <= 1) {
								return 0.3;
							}
							return Math.sqrt(target.countCards('he'));
						},
					},
					tag: {
						norepeat: 1,
					},
				},
			},
			ybsl_zhuzi: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				type: 'ybsl_flower',
				enable: true,
				defaultYingbianEffect: 'add',
				filterTarget(card, player, target) {
					if (get.is.versus()) {
						return player.side == target.side;
					} else {
						return true;
					}
				},
				selectTarget: [1, 2],
				content() {
					target.changeHujia(event.baseDamage || 1);
				},
				ai: {
					wuxie() {
						return 0;
					},
					basic: {
						useful: 6,
						value: 6,
						order: 7,
					},
					result: {
						target(player, target) {
							var hs = target.getCards('h');
							if (hs.length <= 1) {
								return 0.3;
							}
							return Math.sqrt(target.countCards('he'));
						},
					},
					tag: {
						norepeat: 1,
					},
				},
			},
			ybsl_juhua: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				type: 'ybsl_flower',
				enable: true,
				savable: true,
				defaultYingbianEffect: 'add',
				filterTarget(card, player, target) {
					if (get.is.versus()) {
						return player.side == target.side && target.hp != target.maxHp;
					} else {
						return target.hp != target.maxHp;
					}
				},
				selectTarget: [1, 2],
				content() {
					target.recover(event.baseDamage || 1);
				},
				ai: {
					basic: {
						useful: 9,
						value: 9,
						order: 4,
					},
					result: {
						target(player, target) {
							var hs = target.getCards('h');
							if (hs.length <= 1) {
								return 0.3;
							}
							return Math.sqrt(target.countCards('he'));
						},
					},
					tag: {
						recover: 1,
						save: 1,
					},
				},
			},
			//----------界铜雀
			//-----------锁龙偃月刀
			rewrite_qinglong: {
				fullskin: true,
				type: 'equip',
				legend: true,
				subtype: 'equip1',
				distance: { attackFrom: -2 },
				ai: {
					equipValue(card, player) {
						return Math.min(2.5 + player.countCards('h', 'sha'), 4);
					},
					basic: {
						equipValue: 3.5,
					},
				},
				skills: ['rewrite_qinglong_skill', 'rewrite_qinglong_fengyin', 'qinglong_guozhan'],
			},
			//-----------桃之夭夭
			ybsl_taoyao: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				type: 'equip',
				legend: true,
				subtype: 'equip5',
				ai: {
					basic: {
						equipValue: 7,
					},
				},
				skills: ['ybsl_taoyao'],
			},
			//--------------绿沉枪
			ybsl_lvchenqiang: {
				type: 'equip',
				subtype: 'equip1',
				fullskin: true,
				epic: true,
				distance: { attackFrom: -2 },
				skills: ['ybsl_lvchenqiang1_skill', 'ybsl_lvchenqiang2_skill'],
				ai: {
					equipValue: 4.2,
					basic: {
						equipValue: 4.2,
					},
				},
			},
			ybsl_fuxizhenhunqin: {
				type: 'equip',
				subtype: 'equip1',
				fullskin: true,
				epic: true,
				distance: { attackFrom: -3 },
				skills: ['ybsl_fuxizhenhunqin'],
				ai: {
					equipValue: 4.2,
					basic: {
						equipValue: 4.2,
					},
				},
			},
			//----------之子于归
			ybsl_zhiziyugui: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				type: 'equip',
				subtype: 'equip2',
				onEquip() {
					player.recover();
				},
				onLose() {
					player.draw(2);
				},
				// legend:true,
				ai: {
					order: 9.5,
					equipValue(card, player) {
						if (player.hp < player.maxHp) return 6;
						return 0;
					},
					basic: {
						equipValue: 5,
					},
				},
				// skills:['ybsl_zhiziyugui'],
			},
			//--------------青鳞盔
			ybsl_qinglinkui: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				type: 'equip',
				subtype: 'equip2',
				legend: true,
				ai: {
					basic: {
						equipValue: 5.6,
					},
				},
				skills: ['ybsl_qinglinkui'],
			},
			//--------------水镜袍
			ybsl_shuijingpao: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				type: 'equip',
				subtype: 'equip2',
				legend: true,
				ai: {
					basic: {
						equipValue: 5.6,
					},
				},
				skills: ['ybsl_shuijingpao'],
			},
			//------------国士圣袍
			ybsl_guoshishengpao: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				type: 'equip',
				subtype: 'equip2',
				// legend:true,
				ai: {
					basic: {
						equipValue: 5.2,
					},
				},
				skills: ['ybsl_guoshishengpao'],
			},
			////-------------凤求凰
			ybsl_fengqiuhuang: {
				audio: 'ext:夜白神略/audio/card:true',
				fullskin: true,
				type: 'equip',
				subtype: 'equip5',
				legend: true,
				ai: {
					basic: {
						equipValue: 7,
					},
				},
				skills: ['ybsl_fengqiuhuang'],
			},
			//------------吴六剑
			ybsl_baihong: {
				fullskin: true,
				type: 'equip',
				legend: true,
				subtype: 'equip1',
				distance: { attackFrom: -1 },
				ai: {
					equipValue(card, player) {
						return Math.min(2.5 + player.countCards('h', 'sha'), 4);
					},
					basic: {
						equipValue: 3.5,
					},
				},
				skills: ['ybsl_baihong'],
			},
			ybsl_zidian: {
				fullskin: true,
				type: 'equip',
				legend: true,
				subtype: 'equip1',
				distance: { attackFrom: -1 },
				ai: {
					equipValue(card, player) {
						return Math.min(2.5 + player.countCards('h', 'sha'), 4);
					},
					basic: {
						equipValue: 4.5,
					},
				},
				skills: ['ybsl_zidian1', 'ybsl_zidian2'],
			},
			ybsl_bixie: {
				fullskin: true,
				type: 'equip',
				legend: true,
				subtype: 'equip1',
				distance: { attackFrom: -1 },
				ai: {
					equipValue(card, player) {
						return Math.max(2.5 + player.countCards('h'), 5);
					},
					basic: {
						equipValue: 7,
					},
				},
				skills: ['ybsl_bixie'],
			},
			ybsl_liuxing: {
				fullskin: true,
				type: 'equip',
				legend: true,
				subtype: 'equip1',
				distance: { attackFrom: -1 },
				ai: {
					equipValue(card, player) {
						return Math.min(2.5 + player.countCards('h', 'sha'), 4);
					},
					basic: {
						equipValue: 6.5,
					},
				},
				skills: ['ybsl_liuxing'],
			},
			ybsl_qingming: {
				fullskin: true,
				type: 'equip',
				legend: true,
				subtype: 'equip1',
				distance: { attackFrom: -2 },
				ai: {
					equipValue(card, player) {
						return Math.min(2.5 + player.countCards('h'), 4);
					},
					basic: {
						equipValue: 3.5,
					},
				},
				skills: ['ybsl_qingming'],
			},
			ybsl_baili: {
				fullskin: true,
				type: 'equip',
				legend: true,
				subtype: 'equip1',
				distance: { attackFrom: -1 },
				ai: {
					equipValue(card, player) {
						return Math.min(2.5 + player.countCards('h', 'sha'), 4);
					},
					basic: {
						equipValue: 3.5,
					},
				},
				skills: ['ybsl_baili_give', 'ybsl_baili_skill'],
			},
			//-------------七星刀
			ybsl_qixingdao: {
				fullskin: true,
				type: 'equip',
				legend: true,
				subtype: 'equip1',
				distance: { attackFrom: -1 },
				ai: {
					equipValue(card, player) {
						return Math.min(2.5 + player.countCards('h', 'sha'), 4);
					},
					basic: {
						equipValue: 3.5,
					},
				},
				skills: ['ybsl_qixingdao'],
			},
			// 'ybsl_qixingdao':'七星刀',//2
			// 'ybsl_qixingdao_info':'锁定技,①当你使用普通【杀】造成伤害时②当你对体力值大于你的角色造成伤害时,以上每满足一条,此伤害便+1.',
			//-------------------移植
			ybsl_qisihuisheng: {
				audio: true,
				fullskin: true,
				type: 'trick',
				enable: true,
				selectTarget: -1,
				savable: true,
				cardcolor: 'red',
				toself: true,
				filterTarget(card, player, target) {
					return target == player;
				},
				modTarget: true,
				defaultYingbianEffect: 'add',
				// yingbian_prompt:'当你使用此牌选择目标后,你可为此牌增加一个目标',
				// yingbian_tags:['add'],
				// yingbian:function(event){
				// 	event.yingbian_addTarget=true;
				// },
				toself: true,
				addinfo: '霸天',
				content() {
					event.baseDamage = target.isDamaged() ? 3 - target.hp : 0;
					if (event.baseDamage > 0) target.recover(event.baseDamage);
					var num = 3 - event.baseDamage;
					if (num > 0) target.draw(Math.min(num, 3));
				},
				ai: {
					tag: {
						recover: 1,
						save: 3,
					},
					result: {
						target: 3, //QQQ
					},
				},
			},
			//---------------------煽风点火
			llfx_shanfengdianhuo: {
				audio: true,
				fullskin: true,
				type: 'trick',
				enable: true,
				filterTarget(card, player, target) {
					if (ui.selected.targets.length) {
						for (var i of ui.selected.targets) {
							var targets = game
								.filterPlayer(function (current) {
									return i.inRange(current);
								})
								.sortBySeat();
							for (var k of game.filterPlayer()) {
								if (targets.length) {
									if (targets.includes(k)) k.prompt('被火杀');
									else k.prompt('');
								} else k.prompt('');
							}
						}
					}
					return target != player;
				},
				modTarget: true,
				defaultYingbianEffect: 'add',
				addinfo: '蕾厉风行',
				content() {
					var targets = game
						.filterPlayer(function (current) {
							return target.inRange(current);
						})
						.sortBySeat();
					if (targets.length) target.useCard({ name: 'sha', nature: 'fire' }, targets);
				},
				ai: {
					order: 7,
					result: {
						player(player, target) {
							var num = 0;
							game.countPlayer(function (current) {
								if (target.inRange(current)) {
									var att = get.attitude(player, current);
									if (att > 0) num--;
									else num++;
								}
							});
							return num;
						},
						target(player, target) {
							var num = 0;
							game.countPlayer(function (current) {
								if (target.inRange(current)) {
									var att = get.attitude(target, current);
									if (att > 0) num--;
									else num++;
								}
							});
							return num;
						}, //QQQ
					},
				},
			},
		}, //卡牌
		skill: {
			//----------暗度陈仓
			ybsl_anduchencang_skill: {
				trigger: { global: 'phaseBegin' },
				forced: true,
				priority: 6,
				filter(event, player) {
					return player != _status.currentPhase && player.hasUsableCard('ybsl_anduchencang');
				},
				content() {
					var next = player.chooseToUse();
					next.set('prompt', '是否使用【暗度陈仓】？');
					next.set('filterCard', function (card, player) {
						if (card.name != 'ybsl_anduchencang') return false;
						return true;
					});
					next.set('ai2', function () {
						return get.effect_use.apply(this, arguments) + 0.01;
					});
					// next.event._trigger=next;
				},
			},
			ybsl_anduchencang_skill2: {
				cardSkill: true,
				trigger: { player: 'phaseDrawBegin' },
				popup: false,
				charlotte: true,
				forced: true,
				content() {
					trigger.num--;
				},
			},
			//----------凤求凰
			ybsl_fengqiuhuang: {
				equipSkill: true,
				trigger: {
					player: 'useCardEnd',
				},
				forced: true,
				audio: 'ext:夜白神略/audio/card:true',
				filter(event, player, _name) {
					if (event.huiyinUse || !['trick', 'basic'].includes(get.type(event.card))) return false;
					event.xtargets = event.targets.filter((current) => current.isAlive() && player.canUse(event.card, current, false));
					return event.xtargets.length;
				},
				content() {
					// 重置使用牌事件
					trigger.finished = 0;
					trigger._triggered = 2;
					//
					trigger.num = 0;
					trigger.step = 0;
					trigger.targets = trigger.xtargets;
					//
					trigger.addCount = false;
					//
					trigger.huiyinUse = true;
				},
				ai: {
					effect: {
						player(card, player, target) {
							if (card.name == 'tiesuo') return 0;
							else if (get.type(card) == 'trick') return 2;
							else if (get.type(card) == 'basic') return 2;
							return 1;
						},
						// player:function(card,player,target){
						// if(player==target&&get.subtype(card)=='equip5'){
						// 	if(get.equipValue(card)<=8.5) return 0;
						// }
						// 	if(!target.hasEmptySlot(5)) return;
						// 	return lib.skill.ybsl_fengqiuhuang.ai.effect.player.apply(this,arguments);
						// 	-------凤求凰没有以上代码
						// }
					},
				},
			},
			//-------------------------飘雪神符
			ybsl_piaoxueruyi: {
				equipSkill: true,
				trigger: {
					source: 'damageSource',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha' && event.num > 0 && event.player.isAlive();
				},
				audio: 'hanbing_skill',
				logTarget: 'player',
				content() {
					'step 0';
					trigger.player.draw(Math.min(5, trigger.player.hp));
					('step 1');
					trigger.player.turnOver();
				},
				check(event, player) {
					if (event.player.isTurnedOver()) return get.attitude(player, event.player) > 0;
					if (event.player.hp < 3) {
						return get.attitude(player, event.player) < 0;
					}
					return get.attitude(player, event.player) > 0;
				},
			},
			//----------桃之夭夭
			ybsl_taoyao: {
				equipSkill: true,
				charlotte: true,
				enable: ['chooseToUse'],
				filterCard(card, player) {
					return card.suit == 'heart';
				},
				viewAs: { name: 'tao' }, //QQQ
				viewAsFilter(player) {
					return player.countCards('hes') > 0;
				},
				prompt: '将一张♥️️牌当桃使用',
				position: 'hes',
				selectCard: 1,
				check(card) {
					if (card.name == 'ybsl_taoyao') return 0.1;
					return 15 - get.value(card);
				},
				mod: {
					aiValue(player, card, num) {
						if (card.name != 'tao' && get.color(card) != 'red') return;
						var cards = player.getCards('hs', function (card) {
							return card.name == 'tao' || get.color(card) == 'red';
						});
						cards.sort(function (a, b) {
							return (a.name == 'tao' ? 1 : 2) - (b.name == 'tao' ? 1 : 2);
						});
						var geti = function () {
							if (cards.includes(card)) {
								return cards.indexOf(card);
							}
							return cards.length;
						};
						return Math.max(num, [6.5, 4, 3, 2][Math.min(geti(), 2)]);
					},
					aiUseful() {
						return lib.skill.kanpo.mod.aiValue.apply(this, arguments);
					},
				},
				ai: {
					threaten: 1.5,
				},
			},
			//-----------青鳞盔
			ybsl_qinglinkui: {
				audio: 'renwang',
				equipSkill: true,
				trigger: {
					player: 'damageBegin4',
				},
				forced: true,
				// frequent:true,
				filter(event, player) {
					if (player.hasSkillTag('unequip2')) return false;
					if (_status.currentPhase == player || event.source == player) return false;
					return !player.inRange(event.source);
				},
				content() {
					trigger.num--;
				},
				ai: {
					// threaten:0.3,
					// effect:{
					// 	target:function(card,player,target,current,isLink){
					// 		if(!player.inRange(target)&&get.tag(card,'damage')) return 0;
					// 	},
					// }
				},
			},
			//-----------水镜袍
			ybsl_shuijingpao: {
				equipSkill: true, //QQQ
				trigger: {
					target: 'useCardToPlayered',
				},
				forced: true,
				filter(event, player) {
					if (get.type2(event.card) != 'trick') return false;
					return event.targets.length;
				},
				content() {
					player.draw(trigger.targets.length);
				},
				ai: {
					threaten: 0.3,
					effect: {
						target(card, player, target) {
							if (get.info(card).type == 'trick') return 1.5; //QQQ
						},
					},
				},
			},
			//------------国士圣袍
			ybsl_guoshishengpao: {
				equipSkill: true,
				trigger: { target: 'shaBegin' },
				forced: true,
				priority: 6,
				audio: true,
				filter(event, player) {
					if (player.hasSkillTag('unequip2')) return false;
					if (
						event.player.hasSkillTag('unequip', false, {
							name: event.card ? event.card.name : null,
							target: player,
							card: event.card,
						})
					)
						return false;
					return event.card.name == 'sha' && event.card.suit == 'heart';
				},
				content() {
					trigger.cancel();
				},
				mod: {
					maxHandcard(player, num) {
						return num + 2;
					},
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (target.hasSkillTag('unequip2')) return;
							if (
								player.hasSkillTag('unequip', false, {
									name: card ? card.name : null,
									target: target,
									card: card,
								})
							)
								return;
							if (card.name == 'sha' && card.suit == 'heart') return 'zerotarget';
						},
					},
				},
			},
			//-----------锁龙偃月刀
			rewrite_qinglong_skill: {
				audio: 'qinglong_skill',
				equipSkill: true,
				trigger: { player: ['shaMiss', 'eventNeutralized'] },
				forced: true,
				filter(event, player) {
					if (get.mode() == 'guozhan' || !event.card || event.card.name != 'sha') return false;
					return event.target.isIn() && player.canUse('sha', event.target, false);
					//&&(player.hasSha()||_status.connectMode&&player.countCards('h'))
				},
				content() {
					'step 0';
					player.draw();
					('step 1');
					player
						.chooseToUse(
							get.prompt('rewrite_qinglong', trigger.target),
							function (card, player, event) {
								if (card.name != 'sha') return false;
								if (player.getEquip('rewrite_qinglong') == card) return false;
								return lib.filter.filterCard.apply(this, arguments);
							},
							trigger.target,
							-1
						)
						.set('addCount', false);
				},
			},
			rewrite_qinglong_fengyin: {
				audio: 'qinglong_skill',
				shaRelated: true,
				trigger: { player: 'useCardToPlayered' },
				check(event, player) {
					return get.attitude(player, event.target) <= 0;
				},
				filter(event, player) {
					return event.card.name == 'sha';
				},
				logTarget: 'target',
				content() {
					'step 0';
					if (!trigger.target.hasSkill('fengyin')) {
						trigger.target.addTempSkill('fengyin');
					}
				},
				ai: {
					ignoreSkill: true,
					skillTagFilter(player, tag, arg) {
						if (tag == 'directHit_ai') {
							return get.attitude(player, arg.target) <= 0;
						}
						if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
						if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
						if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).includes(arg.skill)) return false;
					},
					directHit_ai: true,
				},
			},
			ybsl_milu: {
				// trigger:{//不能成功,别私自改回
				// player:'loseBegin',
				// global:['equipBegin','addJudgeBegin','gainBegin','loseAsyncBegin'],
				// },
				// equipSkill:true,
				// forceDie:true,
				// charlotte:true,
				// forced:true,
				// popup:false,
				// filter:function(event,player){
				// // return event.cards.some(card=>card.name.indexOf('qiexie_')==0)
				// game.log(2)
				// var evt=event.getl(player);
				// game.log(evt.es)
				// return evt&&evt.player==player&&evt.es&&evt.es.length>0;
				// },
				// content:function(){
				// var cards=trigger.getl(player).es;
				// game.log(cards)
				// player.gain(cards,'gain2');
				// },
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.countCards('h') > 0;
				},
				filterCard: true,
				position: 'h',
				filterTarget: lib.filter.notMe,
				check(card) {
					var player = _status.event.player;
					var val = 5;
					if (player.needsToDiscard()) val = 15;
					return val - get.value(card);
				},
				discard: false,
				lose: false,
				delay: false,
				equipSkill: true,
				content() {
					player.give(cards, target);
					target.chooseDrawRecover(1, true);
				},
				ai: {
					expose: 0.1,
					order: 1,
					result: {
						target(player, target) {
							if (!ui.selected.cards.length) return 0;
							if (get.value(ui.selected.cards[0], false, 'raw') < 0) return -1;
							return 1;
						},
					},
				},
			},
			ybsl_yangtuo: {
				equipSkill: true,
				trigger: { global: ['useCardAfter'] },
				forced: true,
				filter(event, player) {
					if (player.countCards('h') < 1) return false;
					if (event.card.name == 'sha' && event.player != player && event.targets.includes(player)) return true;
					return false;
				},
				content() {
					'step 0';
					player
						.chooseCard(
							'h',
							function (card, player) {
								if (!game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return false;
								if (get.color(card) == get.color(trigger.card)) return false;
								return player.canUse({ name: 'sha' }, trigger.player, false);
							},
							'选择一张手牌当做【杀】对' + get.translation(trigger.source) + '使用'
						)
						.set('ai', function (card) {
							var player = _status.event.player;
							return get.effect(trigger.player, { name: 'sha' }, player, player) / Math.max(1, get.value(card));
						});
					('step 1');
					if (result.bool) {
						player.useCard({ name: 'sha' }, result.cards, 'ybsl_yangtuo', trigger.player, false);
					}
				},
			},
			//-----------------君子之花
			_ybsl_junzizhihua: {
				trigger: {
					player: 'useCardAfter',
				},
				equipSkill: false,
				forced: true,
				ruleSkill: true,
				filter(event, player) {
					return event.card && ['ybsl_meihua', 'ybsl_lanhua', 'ybsl_zhuzi', 'ybsl_juhua'].includes(event.card.name) && event.targets.length;
				},
				content() {
					if (trigger.targets.length < 2) {
						var tar = [];
						for (var i = 0; i < trigger.targets.length; i++) {
							//trigger.targets[i].gain(game.createCard('du',null,null,null,['gifts']),'gain2');
							tar.push(trigger.targets[i]);
						}
						var cards = trigger.cards;
						// game.cardsGotoSpecial(cards);
						tar[0].draw();
						game.log(cards, '被', tar, '独自享用');
					}
					if (trigger.targets.length >= 2) {
						var tar = [];
						for (var i = 0; i < trigger.targets.length; i++) {
							//trigger.targets[i].gain(game.createCard('du',null,null,null,['gifts']),'gain2');
							tar.push(trigger.targets[i]);
						}
						var cards = trigger.cards;
						game.cardsGotoSpecial(cards);
						game.log(cards, '被', tar, '分而食之');
					}
				},
			},
			//---------------天火煅
			ybsl_tianhuoduan_skill: {
				equipSkill: false,
				forced: true,
				ruleSkill: true,
			},
			//----------------乌云踏雪
			rewrite_ybsl_wangzhui: {
				equipSkill: true,
				trigger: {
					target: 'useCardToTarget',
					player: 'useCardToTarget',
				},
				usable: 1,
				audio: 'ext:夜白神略/audio/card:true',
				filter(event, player) {
					if (event.card.name == 'sha') return true;
				},
				content() {
					player.gain(trigger.cards, 'gain2');
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (card.name == 'sha') return [1, 0.9];
						},
						player(card, player, target) {
							if (card.name == 'sha') return [1, 1];
						},
					},
				},
			},
			//----------------烈焰赤兔
			rewrite_chitu: {
				equipSkill: true,
				trigger: {
					target: 'useCardToTargeted',
					player: 'useCardToPlayered',
				},
				audio: 'ext:夜白神略/audio/card:true',
				filter(event, player) {
					if (!(event.card.name == 'juedou' || (event.card.name == 'sha' && get.color(event.card) == 'red'))) return false;
					return player == event.target || event.parent.triggeredTargets3.length == 1;
				},
				content() {
					player.draw();
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (card.name == 'sha' && get.color(card) == 'red') return [1, 0.6];
						},
						player(card, player, target) {
							if (card.name == 'sha' && get.color(card) == 'red') return [1, 1];
						},
					},
				},
			},
			//--------------北斗七星扇
			rewrite_zhuque: {
				equipSkill: true,
				trigger: { player: 'useCard1' },
				filter(event, player) {
					return ['basic', 'trick'].includes(get.type(event.card)) && get.tag(event.card, 'damage') > 0 && event.cards && event.cards.length;
				},
				audio: 'wuxinghelingahan_skill',
				forced: true,
				content() {
					'step 0';
					var next = trigger.player.chooseBool('是否发动【北斗七星扇】？', '修改' + get.translation(trigger.card) + '的花色和伤害属性');
					if (player == next.player) next.setHiddenSkill(event.name);
					('step 1');
					if (result.bool) {
						trigger.player.addTempSkill('rewrite_zhuque2');
						if (player != trigger.player) {
							trigger.player.line(player, 'green');
							//player.gain(result.cards,trigger.player,'giveAuto');
						}
					} else event.finish();
					('step 2');
					if (player.isUnderControl()) {
						game.swapPlayerAuto(player);
					}
					var switchToAuto = function () {
						_status.imchoosing = false;
						var listn = ['普通'].concat(lib.inpile_nature);
						event._result = {
							bool: true,
							suit: lib.suit.randomGet(),
							nature: listn.randomGet(),
						};
						if (event.dialog) event.dialog.close();
						if (event.control) event.control.close();
					};
					var chooseButton = function (player, card) {
						var event = _status.event;
						player = player || event.player;
						if (!event._result) event._result = {};
						var dialog = ui.create.dialog('北斗:请修改' + card + '的花色和属性', 'forcebutton', 'hidden');
						event.dialog = dialog;
						dialog.addText('花色');
						var table = document.createElement('div');
						table.classList.add('add-setting');
						table.style.margin = '0';
						table.style.width = '100%';
						table.style.position = 'relative';
						var listi = ['spade', 'heart', 'club', 'diamond'];
						for (var i = 0; i < listi.length; i++) {
							var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
							td.link = listi[i];
							table.appendChild(td);
							td.innerHTML = '<span>' + get.translation(listi[i]) + '</span>';
							td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
								if (_status.dragged) return;
								if (_status.justdragged) return;
								_status.tempNoButton = true;
								setTimeout(function () {
									_status.tempNoButton = false;
								}, 500);
								var link = this.link;
								var current = this.parentNode.querySelector('.bluebg');
								if (current) {
									current.classList.remove('bluebg');
								}
								this.classList.add('bluebg');
								event._result.suit = link;
							});
						}
						dialog.content.appendChild(table);
						dialog.addText('属性');
						var table2 = document.createElement('div');
						table2.classList.add('add-setting');
						table2.style.margin = '0';
						table2.style.width = '100%';
						table2.style.position = 'relative';
						var listn = ['普通'].concat(lib.inpile_nature);
						for (var i = 0; i < listn.length; i++) {
							var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
							var nature = listn[i];
							td.link = nature;
							table2.appendChild(td);
							td.innerHTML = '<span>' + get.translation(nature) + '</span>';
							td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
								if (_status.dragged) return;
								if (_status.justdragged) return;
								_status.tempNoButton = true;
								setTimeout(function () {
									_status.tempNoButton = false;
								}, 500);
								var link = this.link;
								var current = this.parentNode.querySelector('.bluebg');
								if (current) {
									current.classList.remove('bluebg');
								}
								this.classList.add('bluebg');
								event._result.nature = link;
							});
						}
						dialog.content.appendChild(table2);
						dialog.add('　　');
						event.dialog.open();
						event.switchToAuto = function () {
							event._result = {
								bool: true,
								nature: listn.randomGet(),
								suit: listi.randomGet(),
							};
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing = false;
						};
						event.control = ui.create.control('ok', 'cancel2', function (link) {
							var result = event._result;
							if (link == 'cancel2') result.bool = false;
							else {
								if (!result.nature || !result.suit) return;
								result.bool = true;
							}
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
						chooseButton(player, get.translation(trigger.card));
					} else if (event.isOnline()) {
						event.player.send(chooseButton, event.player, get.translation(trigger.card));
						event.player.wait();
						game.pause();
					} else {
						switchToAuto();
					}
					('step 3');
					var map = event.result || result;
					if (map.bool) {
						game.log(player, '将', trigger.card, '的花色属性修改为了', '#g' + get.translation(map.suit + 2), '#y' + get.translation(map.nature));
						trigger.card.suit = map.suit;
						if (map.nature == '普通') delete trigger.card.nature;
						else trigger.card.nature = map.nature;
						trigger.player.storage.rewrite_zhuque2 = [trigger.card, map.nature];
						player.popup(get.translation(map.suit + 2) + get.translation(map.nature), 'thunder');
					}
				},
			},
			rewrite_zhuque2: {
				charlotte: true,
				trigger: { source: 'damageBefore' },
				forced: true,
				firstDo: true,
				popup: false,
				filter(event, player) {
					return player.storage.rewrite_zhuque2 && event.card == player.storage.rewrite_zhuque2[0];
				},
				content() {
					var nature = player.storage.rewrite_zhuque2[1];
					if (nature == '普通') delete trigger.nature;
					else trigger.nature = nature;
				},
			},
			//-------------------------七星龙渊剑
			rewrite_yitianjian: {
				audio: 'yitianjian_skill',
				trigger: { source: 'damageSource' },
				forced: true,
				equipSkill: true,
				filter(event, player) {
					return player.isDamaged() && player.countCards('h') > 0;
				},
				content() {
					'step 0';
					player.chooseToDiscard('h', get.prompt('rewrite_yitianjian'), '弃置一张手牌并回复1点体力').set('ai', (card) => 7 - get.value(card));
					('step 1');
					if (result.bool) player.recover();
				},
			},
			//-------------白虎镜
			rewrite_huxinjing: {
				audio: 'huxinjing',
				equipSkill: true,
				trigger: { player: 'damageBegin4' },
				forced: true,
				filter(event, player) {
					if (player.hasSkillTag('unequip2')) return false;
					if (
						event.source &&
						event.source.hasSkillTag('unequip', false, {
							name: event.card ? event.card.name : null,
							target: player,
							card: event.card,
						})
					)
						return false;
					var cards = player.getEquips('rewrite_huxinjing');
					if (!cards.length) return false;
					if (player.hasMark('rewrite_huxinjing2')) return true;
					if (get.mode() != 'guozhan' && event.num > 1) return true;
					return event.num >= player.hp;
				},
				content() {
					'step 0';
					if (player.hasMark('rewrite_huxinjing2') && player.getEquips('rewrite_huxinjing').length) {
						var e2 = player.getEquips('rewrite_huxinjing');
						if (e2.length) {
							player.discard(e2);
						}
						// player.removeSkill('rewrite_huxinjing');
						player.removeSkill('rewrite_huxinjing2');
						event.finish();
					} else {
						player.chooseBool(get.prompt('rewrite_huxinjing', player), lib.translate.rewrite_huxinjing_info);
					}
					('step 1');
					if (result.bool) {
						trigger.cancel();
						player.addMark('rewrite_huxinjing2');
					}
				},
			},
			rewrite_huxinjing2: {
				audio: 'baiyin',
				equipSkill: true,
				trigger: { source: 'damageBegin2' },
				forced: true,
				marktext: '虎',
				intro: {
					content: '下次造成的伤害+1,若你在此状态再次受到伤害,则失去此效果,同时弃置白虎镜',
				},
				filter(event, player) {
					if (player.hasSkillTag('unequip2')) return false;
					var cards = player.getEquips('rewrite_huxinjing');
					if (!cards.length) return false;
					return player.hasMark('rewrite_huxinjing2');
				},
				content() {
					player.removeMark('rewrite_huxinjing2');
					trigger.num++;
				},
			},
			//-------------原版铜雀
			rewrite_tongque: {
				// trigger:{player:'useCard1'},
				// equipSkill:true,
				// forced:true,
				// filter:function(event,player){
				// 	return !event.card.yingbian&&get.is.yingbian(event.card);
				// },
				// content:function(){
				// 	trigger.card.yingbian=true;
				// 	var info=get.info(trigger.card);
				// 	if(info&&info.yingbian) info.yingbian(trigger);
				// 	player.addTempSkill('yingbian_changeTarget');
				// },
				trigger: {
					player: 'yingbian',
				},
				equipSkill: true,
				forced: true,
				filter: (event, player) => get.is.yingbianConditional(event.card),
				content() {
					trigger.forceYingbian = true;
				},
				_priority: -25,
			},
			//--------------方天锁链鞭(什么J8玩意)
			rewrite_fangtian: {
				trigger: { player: 'useCardToPlayered' },
				forced: true,
				equipSkill: true,
				audio: true,
				filter(event, player) {
					return event.card.name == 'sha' && !event.target.isLinked(); //||event.target.countCards('h'));
				},
				logTarget: 'target',
				content() {
					var target = trigger.target;
					if (!target.isLinked()) target.link();
					else player.viewHandcards(target);
				},
			},
			//---------------------绿沉枪
			ybsl_lvchenqiang1_skill: {
				charlotte: true,
				equipSkill: true,
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(event, player) {
					return player.countCards('h') > 0;
				},
				audio: 'zhangba_skill',
				viewAs: { name: 'sha' },
				viewAsFilter(player) {
					return player.countCards('h') > 0;
				},
				prompt: '将所有手牌当杀使用或打出',
				position: 'h',
				selectCard: -1,
				filterCard: true,
			},
			ybsl_lvchenqiang2_skill: {
				charlotte: true,
				equipSkill: true,
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(event, player) {
					return !player.countCards('h');
				},
				viewAs: { name: 'shan' },
				viewAsFilter(player) {
					return !player.countCards('h');
				},
				prompt: '摸一张牌视为使用或打出了一张闪',
				position: 'h',
				audio: 'bagua_skill',
				filterCard: () => false,
				selectCard: -1,
				log: false,
				check: () => 1,
				precontent() {
					player.draw();
				},
			},
			//-----------------伏羲镇魂琴
			ybsl_fuxizhenhunqin: {
				equipSkill: true,
				trigger: { player: 'useCard1' },
				//priority:7,
				filter(event, player) {
					if (event.card.name == 'sha') return true;
				},
				audio: true,
				check(event, player) {
					var eff = 0;
					for (var i = 0; i < event.targets.length; i++) {
						var target = event.targets[i];
						var eff1 = get.damageEffect(target, player, player);
						var eff2 = get.damageEffect(target, player, player, 'fire|thunder|ice|YB_snow|YB_blood');
						eff += eff2;
						eff -= eff1;
					}
					return eff >= 0;
				},
				prompt2(event, player) {
					return '将' + get.translation(event.card) + '附着全部属性';
				},
				content() {
					var list = lib.inpile_nature;
					if (trigger.card.hasNature('kami')) var list = lib.inpile_nature.concat('kami');
					game.setNature(trigger.card, list);
					if (get.itemtype(trigger.card) == 'card') {
						var next = game.createEvent('ybsl_fuxizhenhunqin_clear');
						next.card = trigger.card;
						event.next.remove(next);
						trigger.after.push(next);
						next.setContent(function () {
							game.setNature(trigger.card, []);
						});
					}
				},
			},
			//---------无双铠
			ybsl_nodouble: {
				equipSkill: true,
				trigger: {
					target: 'useCardToTargeted',
					player: 'useCardToPlayered',
				},
				audio: 'ext:夜白神略/audio/card:true',
				filter(event, player, name) {
					if (!(event.card.name == 'juedou' || event.card.name == 'sha')) return false;
					if (!player.hasSkill('wushuang') && name == 'useCardToPlayered') return false;
					return player == event.target || event.parent.triggeredTargets3.length == 1;
				},
				content() {
					player.draw();
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (card.name == 'sha' || card.name == 'juedou') return [1, 0.6];
						},
						player(card, player, target) {
							if (!player.hasSkill('wushuang')) return;
							if (card.name == 'sha' || card.name == 'juedou') return [1, 1];
						},
					},
				},
			},
			//--------------吴六剑
			ybsl_baihong: {
				charlotte: true,
				equipSkill: true,
				audio: 'ext:夜白神略/audio/card:true',
				firstDo: true,
				trigger: { player: 'useCard1' },
				forced: true,
				filter(event, player) {
					return !event.audioed && ((event.card.name == 'sha' && player.countUsed('sha', true) > 1) || (event.card.name == 'jiu' && player.countUsed('jiu', true) > 1)) && event.parent.type == 'phase';
				},
				content() {
					trigger.audioed = true;
				},
				mod: {
					cardUsable(card, player, num) {
						if (player.countCards('h') <= player.hp) return Infinity;
					},
				},
				// ai:{
				// 	unequip:true,
				// }
			},
			ybsl_zidian1: {
				charlotte: true,
				equipSkill: true,
				audio: 'ext:夜白神略/audio/card:true',
				trigger: { player: 'useCard1' },
				filter(event, player) {
					if (event.card.name == 'sha' && !event.card.nature) return true;
				},
				check(event, player) {
					var eff = 0;
					for (var i = 0; i < event.targets.length; i++) {
						var target = event.targets[i];
						var eff1 = get.damageEffect(target, player, player);
						var eff2 = get.damageEffect(target, player, player, 'thunder');
						eff += eff2;
						eff -= eff1;
					}
					return eff >= 0;
				},
				content() {
					// trigger.card.nature='thunder';
					// if(get.itemtype(trigger.card)=='card'){
					// var next=game.createEvent('ybsl_zidian1_clear');
					// next.card=trigger.card;
					// event.next.remove(next);
					// trigger.after.push(next);
					// next.setContent(function(){
					// delete card.nature;
					// });
					// }
					game.setNature(trigger.card, 'thunder');
					if (get.itemtype(trigger.card) == 'card') {
						var next = game.createEvent('ybsl_zidian1_clear');
						next.card = trigger.card;
						event.next.remove(next);
						trigger.after.push(next);
						next.setContent(function () {
							game.setNature(trigger.card, []);
						});
					}
				},
			},
			ybsl_zidian2: {
				charlotte: true,
				equipSkill: true,
				audio: 'ybsl_zidian1',
				enable: 'phaseUse',
				filter(event, player) {
					return player.countCards('h', 'sha') > 0;
				},
				filterCard: { name: 'sha' },
				prepare(cards, player) {
					player.$throw(cards, 1000);
					game.log(player, '将', cards, '置入了弃牌堆');
				},
				discard: false,
				loseTo: 'discardPile',
				visible: true,
				delay: 0.5,
				content() {
					player.draw();
					player.addSkill('ybsl_zidian3');
					player.addMark('ybsl_zidian3');
				},
				ai: {
					basic: {
						order: 6,
					},
					result: {
						player: 1,
					},
				},
				check(cardx, player) {
					if (player && player == cardx.player) return true;
					var player = _status.event.player;
					var shas = player.getCards('hs', function (card) {
						return card != cardx && card.name == 'sha';
					});
					if (shas.length > 1) return 1;
					return -1; //改自界董卓酒池,大力出奇迹,只判断手中杀的数量
				},
			},
			ybsl_zidian3: {
				mark: true,
				marktext: '紫',
				intro: {
					name: '紫电',
					content: 'mark',
				},
				trigger: { player: 'useCardAfter', global: 'phaseAfter' },
				priority: 2,
				firstDo: true,
				charlotte: true,
				filter(event, player) {
					if (event.name == 'useCard') return event.card && event.card.name == 'sha';
					return true;
				},
				forced: true,
				popup: false,
				content() {
					game.broadcastAll(function (player) {
						player.removeSkill('ybsl_zidian3');
					}, player);
					// game.addVideo('jiuNode',player,false);
				},
				group: 'ybsl_zidian4',
				onremove(player) {
					if (player.node.ybsl_zidian3) {
						player.node.ybsl_zidian3.delete();
						player.node.ybsl_zidian4.delete();
						delete player.node.ybsl_zidian3;
						delete player.node.ybsl_zidian4;
					}
					delete player.storage.ybsl_zidian3;
				},
			},
			ybsl_zidian4: {
				trigger: { player: 'useCard1' },
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				forced: true,
				charlotte: true,
				firstDo: true,
				content() {
					if (!trigger.baseDamage) trigger.baseDamage = 1;
					trigger.baseDamage += player.storage.ybsl_zidian3;
					trigger.ybsl_zidian3 = true;
					trigger.ybsl_zidian3_add = player.storage.ybsl_zidian3;
					// game.addVideo('jiuNode',player,false);
					game.broadcastAll(function (player) {
						player.removeSkill('ybsl_zidian3');
					}, player);
				},
				temp: true,
				silent: true,
				popup: false,
				nopop: true,
				ai: {
					damageBonus: true,
				},
			},
			ybsl_bixie: {
				shaRelated: true,
				audio: 'ext:夜白神略/audio/card:true',
				trigger: { player: 'useCardToPlayered' },
				forced: true,
				filter(event, player) {
					return event.card.name == 'sha' && event.target.countCards('he');
				},
				logTarget: 'target',
				content() {
					'step 0';
					var target = trigger.target;
					if (!get.is.single() && target.countDiscardableCards(player, 'he')) {
						player.discardPlayerCard('he', target);
					}
					('step 1');
					if (result.bool) {
					}
				},
				check(event, player) {
					return get.attitude(player, event.player) < 0;
					//这里没有判断假如弃牌是否会给对方带来正收益
				},
			},
			ybsl_liuxing: {
				equipSkill: true,
				mod: {
					maxHandcard(player, num) {
						return num + 1;
					},
					// attackRange:function(player,num){
					// return num+1;
					// },
					cardUsable(card, player, num) {
						if (card.name == 'sha') return num + 1;
					},
				},
				audio: 'ext:夜白神略/audio/card:true',
				trigger: { player: 'phaseDrawBegin2' },
				forced: true,
				filter(event, player) {
					return !event.numFixed;
				},
				content() {
					trigger.num++;
				},
			},
			ybsl_qingming: {
				equipSkill: true,
				audio: 'ext:夜白神略/audio/card:true',
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				forced: true,
				filter(event, player) {
					var evt = event.getl(player);
					return evt && evt.hs && evt.hs.length > 1 && player.isPhaseUsing();
				},
				content() {
					'step 0';
					var evt = trigger.getl(player);
					event.num = evt.hs.length;
					event.cards = trigger.num;
					var suits = [];
					for (var i = 0; i < trigger.cards.length; i++) {
						suits.add(trigger.cards[i].suit);
					}
					event.suits = suits.length;
					player
						.chooseTarget(get.prompt('ybsl_qingming'), '选择一名其他角色,弃置其的' + get.cnNumber(event.num) + '张牌或对其造成' + get.cnNumber(event.suits) + '点伤害', function (card, player, target) {
							return player != target;
						})
						.set('ai', function (target) {
							var att = get.attitude(_status.event.player, target);
							if (target.countDiscardableCards(_status.event.player, 'he') >= _status.event.parent.num) att = att * 2;
							return -att;
						});
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						var list = [];
						if (event.target.countDiscardableCards(player, 'he') > 0) list.push('弃置其牌');
						list.push('造成伤害');
						player.chooseControl(list).set('prompt', '弃置其的' + get.cnNumber(event.num) + '张牌还是对其造成' + get.cnNumber(event.suits) + '点伤害');
					} else {
						event.finish();
					}
					('step 2');
					if (result.control == '弃置其牌') {
						player.discardPlayerCard(event.target, 'he', true, num);
					} else {
						target.damage(event.suits, 'nocard');
					}
				},
			},
			ybsl_baili_give: {
				audio: 'ext:夜白神略/audio/card:true',
				enable: 'phaseUse',
				usable: 1,
				filterCard: true,
				selectCard: [1],
				discard: false,
				lose: false,
				delay: 0,
				filterTarget(card, player, target) {
					return player != target;
				},
				check(card) {
					if (card.name == 'du') return 20;
					if (card.name == 'tao') return -1;
					if (card.name == 'ybsl_juhua') return -1;
					return 10 - get.value(card);
				},
				content() {
					player.give(cards, target);
				},
			},
			ybsl_baili_skill: {
				audio: 'ybsl_baili_give',
				trigger: { global: 'gainEnd' },
				// forced:true,
				// popup:false,
				check(event, player) {
					return get.attitude(player, event.player) < 0;
				},
				filter(event, player) {
					if (player == event.player) return false;
					if (_status.currentPhase != player) return false;
					var evt = event.getl(player);
					return evt && evt.hs && evt.hs.length;
				},
				content() {
					trigger.player.damage(1, 'nocard');
				},
			},
			//----------百鸟朝凤枪
			ybsl_bainiaochaofeng: {
				audio: 'zhangba_skill',
				trigger: { player: 'useCardToTargeted' },
				check(event, player) {
					if (!event.target) return false;
					if (event.target == player) return false;
					var att = get.attitude(_status.event.player, event.target);
					if (att > 0) return false;
					return true;
				},
				filter(event, player) {
					if (!event.target) return false;
					if (event.target == player) return false;
					return true;
				},
				logTarget: 'target',
				content() {
					trigger.target.addTempSkill('ybsl_bainiaochaofeng_ban');
					trigger.target.storage.ybsl_bainiaochaofeng_ban = trigger.card;
				},
			},
			ybsl_bainiaochaofeng_ban: {
				trigger: { global: ['useCardAfter', 'phaseAfter'] },
				forced: true,
				popup: false,
				filter(event, player, name) {
					if (name == 'phaseAfter') return true;
					if (event.card == player.storage.ybsl_bainiaochaofeng_ban) return true;
					return false;
				},
				content() {
					player.removeSkill('ybsl_bainiaochaofeng_ban');
				},
				mod: {
					cardEnabled2(card, player) {
						if (get.position(card) == 'h' && get.color(card) == get.color(player.storage.ybsl_bainiaochaofeng_ban)) return false;
					},
				},
			},
			/*
			ybsl_bainiaochaofeng:{
				audio:'zhangba_skill',
				trigger:{player:'useCard'},
				global:'ybsl_bainiaochaofeng_ban',
				// forced:true,
				// popup:false,
				check:function(event,player){
					return true;
				},
				filter:function(event,player){
					return true;
				},
				init:function(player){
					player.storage.ybsl_bainiaochaofeng_ban=[];
				},
				content:function(){
					player.storage.ybsl_bainiaochaofeng_ban.push(trigger.card);
					trigger.directHit.addArray(game.filterPlayer(function(current){
						return current!=player&&get.distance(current,player)<=1;
					}));
				},
			},
			ybsl_bainiaochaofeng_ban:{
				trigger:{player:'useCardAfter'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return(game.filterPlayer(function(current){
						return current.storage.ybsl_bainiaochaofeng_ban&&current.storage.ybsl_bainiaochaofeng_ban.includes(event.card);
					}));
				},
				init:function(player){
					player.storage.ybsl_bainiaochaofeng_ban=[];
				},
				content:function(){
					player.storage.ybsl_bainiaochaofeng_ban.remove(trigger.card);
				},
			},
			*/
			//----------七星刀
			ybsl_qixingdao: {
				equipSkill: true,
				audio: true,
				trigger: { source: 'damageBegin1' },
				filter(event, player) {
					if (event.card && event.card.name == 'sha' && !event.card.nature) return true;
					if (event.player.hp > player.hp) return true;
					return false;
				},
				forced: true,
				content() {
					// if(trigger.card&&trigger.card.name=='sha'&&!trigger.card.nature)trigger.num++;
					// if(trigger.target.hp>player.hp)trigger.num++;
					'step 0';
					event.num = 0;
					if (trigger.card && trigger.card.name == 'sha' && !trigger.card.nature) event.num++;
					if (trigger.player.hp > player.hp) event.num++;
					('step 1');
					trigger.num += event.num;
				},
				ai: {
					effect: {
						player(card, player, target, current, isLink) {
							if (
								card.name == 'sha' &&
								!isLink &&
								target.countCards('h') == 0 &&
								!target.hasSkillTag('filterDamage', null, {
									player: player,
									card: card,
								})
							)
								return [1, 0, 1, -3];
						},
					},
				},
			},
			// 'ybsl_qixingdao':'七星刀',//2
			// 'ybsl_qixingdao_info':'锁定技,①当你使用普通【杀】造成伤害时②当你对体力值大于你的角色造成伤害时,以上每满足一条,此伤害便+1.',
			_ybsl_wuliujian: {
				silent: true,
				trigger: {
					player: 'equipBegin',
				},
				ruleSkill: true,
				filter(event, player, card) {
					var subtype = get.subtype(event.card);
					if (subtype != 'equip1') return false; //判定装备的类型
					if (event.card.name != 'ybsl_baihong' && event.card.name != 'ybsl_zidian' && event.card.name != 'ybsl_bixie' && event.card.name != 'ybsl_liuxing' && event.card.name != 'ybsl_qingming' && event.card.name != 'ybsl_baili') return false;
					return player.getEquip('ybsl_baihong') || player.getEquip('ybsl_zidian') || player.getEquip('ybsl_bixie') || player.getEquip('ybsl_liuxing') || player.getEquip('ybsl_qingming') || player.getEquip('ybsl_baili');
					// return true;
				},
				content() {
					// game.log('event.name',event.name)
					trigger.setContent(lib.skill.ybsl_infEquip.equip);
				},
			},
			//-------------------------勾玉连环
			ybsl_tianleiyubi_link: {
				audio: 'taigongyinfu_link',
				trigger: { player: 'phaseUseBegin' },
				equipSkill: true,
				forced: true,
				content() {
					'step 0';
					player.chooseTarget('是否发动勾玉之力,横置或重置一名角色？').set('ai', function (target) {
						return get.effect(target, { name: 'tiesuo' }, _status.event.player, _status.event.player);
					});
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						target.link();
					}
				},
				ai: {
					expose: 0.2,
				},
			},
			ybsl_tianleiyubi_mix1: {
				equipSkill: true,
				trigger: {
					player: ['equipBegin', 'useBegin'],
				},
				forced: true,
				filter(event, player, card) {
					return event.card?.name == 'rewrite_shandian';
				},
				content() {
					'step 0';
					var cards = player.getEquips('rewrite_fulei');
					game.cardsGotoSpecial(cards);
					game.log(cards, '与', trigger.cards[0], '融合了');
					event.card = cards;
					('step 1');
					var card = trigger.cards[0];
					player.showCards(card);
					var bool = get.position(card) == 'e';
					if (bool) player.removeEquipTrigger(card);
					game.broadcastAll(function (card) {
						card.init([event.card.suit, event.card.number, 'ybsl_tianleiyubi']);
					}, card);
					var bool = get.position(card) == 'e';
					if (bool) player.removeEquipTrigger(card);
					if (bool) {
						var info = get.info(card);
						if (info.skills) {
							for (var i = 0; i < info.skills.length; i++) {
								player.addSkillTrigger(info.skills[i]);
							}
						}
					}
				},
			},
			ybsl_tianleiyubi_mix2: {
				equipSkill: true,
				trigger: {
					player: ['equipBegin', 'useBegin'],
				},
				forced: true,
				filter(event, player, card) {
					return event.card.name == 'rewrite_fulei';
				},
				content() {
					'step 0';
					var cards = player.getEquips('rewrite_shandian');
					game.cardsGotoSpecial(cards);
					game.log(cards, '与', trigger.cards[0], '融合了');
					event.card = cards;
					('step 1');
					var card = trigger.cards[0];
					player.showCards(card);
					var bool = get.position(card) == 'e';
					if (bool) player.removeEquipTrigger(card);
					game.broadcastAll(function (card) {
						card.init([event.card.suit, event.card.number, 'ybsl_tianleiyubi']);
					}, card);
					var bool = get.position(card) == 'e';
					if (bool) player.removeEquipTrigger(card);
					if (bool) {
						var info = get.info(card);
						if (info.skills) {
							for (var i = 0; i < info.skills.length; i++) {
								player.addSkillTrigger(info.skills[i]);
							}
						}
					}
				},
			},
			//-------------------------阴勾玉
			rewrite_fulei_skill: {
				equipSkill: true,
				trigger: { player: 'phaseUseEnd' },
				forced: true,
				filter(event, player) {
					return player.countCards('h') > 0;
				},
				content() {
					'step 0';
					player
						.chooseCard('h', '阴勾玉隐隐闪烁,是否重铸一张手牌？')
						.set('prompt2', '重铸后,若此牌不为红手牌数小于体力值,则摸一张牌;<br>若此牌为红且体力值小于手牌数,则回复一点体力')
						.set('ai', function (card) {
							return 5 - get.value(card);
						});
					('step 1');
					if (result.bool) {
						player.lose(result.cards, ui.discardPile, 'visible');
						player.$throw(result.cards, 1000);
						game.log(player, '将', result.cards, '置入了弃牌堆');
						player.draw();
						if (get.color(result.cards) == 'red' && player.hp < player.countCards()) {
							player.recover();
						}
						if (get.color(result.cards) != 'red' && player.countCards() < player.hp) {
							player.draw();
						}
					}
				},
			},
			//-------------------------阳勾玉
			rewrite_shandian_skill: {
				equipSkill: true,
				trigger: {
					player: 'phaseJieshuBegin',
				},
				forced: true,
				content() {
					'step 0';
					player
						.chooseControl('发动', '不发动', true)
						.set('prompt', '阳勾玉上隐隐跳动着电光,是否判定？')
						.set('prompt2', '判定若为黑色,则令一名其他角色进入横置状态,并对其造成一点雷电伤害')
						.set('ai', function (event, player) {
							return '发动';
						});
					('step 1');
					if (result.control == '发动') {
						player.judge(function (card) {
							//你进行一次判定
							return get.color(card) == 'black' ? 2 : 0; //黑色返回2,否则返回0
						});
					}
					('step 2');
					if (result.judge == 2) {
						player.chooseTarget(
							'请选择一个目标',
							function (card, player, target) {
								//选1个目标
								return player != target; //限制条件:你不是目标
							},
							function (target) {
								//ai:
								var player = get.player(); //定义变量player为选目标的发起者(不懂可以先不写)
								return -get.attitude(player, target); //选敌人
							}
						);
					} else {
						event.goto(4);
					}
					('step 3');
					if (result.targets) {
						if (!result.targets[0].isLinked()) {
							result.targets[0].link(true);
						}
						result.targets[0].damage('thunder', 'nocard');
					}
					('step 4');
					event.finish();
				},
			},
			//-------------------------天雷玉璧
			ybsl_tianleiyubi_skill: {
				equipSkill: true,
				trigger: {
					global: 'phaseZhunbeiBegin',
				},
				check(event, player) {
					return get.attitude(player, event.player) <= 0;
				},
				content() {
					'step 0';
					if (!trigger.player.isLinked()) {
						trigger.player.link(true);
					}
					('step 1');
					trigger.player.judge(function (card) {
						if (card.suit == 'spade' && card.number > 1 && card.number < 10) return -5;
						return 1;
					});
					('step 2');
					if (result.bool == false) {
						trigger.player.damage(3, 'thunder', 'nosource');
					} else {
						event.finish();
					}
				},
				ai: {
					expose: 0.7,
					threaten: 0.5,
				},
			},
			//-------------------------天雷玉璧觉醒
			rewrite_ybsl_tianleiyubi_skill: {
				trigger: { source: 'damageSource' },
				equipSkill: true,
				filter(event, player) {
					return event.hasNature('thunder') && event.num > 0;
				},
				forced: true,
				preHidden: true,
				content() {
					'step 0';
					event.num = Math.min(trigger.num, 9);
					('step 1');
					var choice;
					if (
						player.isDamaged() &&
						get.recoverEffect(player) > 0 &&
						player.countCards('hs', function (card) {
							return card.name == 'sha' && player.hasValueTarget(card);
						}) >= player.getCardUsable('sha')
					) {
						choice = 'recover_hp';
					} else {
						choice = 'draw_card';
					}
					var next = player.chooseDrawRecover(get.prompt(event.name))
					next.set('choice', choice);
					next.set('ai', function () {
						return _status.event.parent.choice;
					});
					next.setHiddenSkill('rewrite_ybsl_tianleiyubi_skill');
					('step 2');
					if (result.control != 'cancel2') {
						event.num--;
						if (event.num > 0) {
							event.goto(1);
						}
					}
				},
			},
			_yingbian_doubleBlow: {
				trigger: { player: 'useCardToTargeted' },
				forced: true,
				charlotte: true,
				ruleSkill: true,
				popup: false,
				lastDo: true,
				filter(event, player) {
					return event.parent._yingbian_doubleBlow == player && event.targets.length == event.parent.triggeredTargets4.length;
				},
				content() {
					// trigger.parent.targets=trigger.parent.targets.concat(trigger.targets);
					// trigger.parent.triggeredTargets4=trigger.parent.triggeredTargets4.concat(trigger.targets);
					trigger.parent.effectCount++;
					game.log(trigger.card, '连打生效,额外执行一次');
				},
			},
		},
		translate: {
			//---------------------技能翻译
			yingbian_lianDa_tag: '(连打)',
			_yingbian_doubleBlow: '连打',
			_ybsl_yingbian: '连打',
			ybsl_tianhuoduan_skill: '天火煅',
			ybsl_tianhuoduan_skill_info: '天火煅',
			ybsl_lvchenqiang1_skill: '绿沉枪',
			ybsl_lvchenqiang1_skill_info: '若你有手牌,你可以把所有手牌当【杀】使用或打出.',
			ybsl_lvchenqiang2_skill: '绿沉枪',
			ybsl_lvchenqiang2_skill_info: '若你没有手牌,你可以摸一张牌,视为使用或打出了一张【闪】.',
			rewrite_qinglong_skill: '锁龙·追杀', //3
			rewrite_qinglong_skill_info: '当你使用的【杀】被目标角色使用的【闪】抵消时,你摸一张牌,可以对其使用一张【杀】(无距离限制).',
			rewrite_qinglong_fengyin: '锁龙·封印', //3
			rewrite_qinglong_fengyin_info: '当你使用【杀】指定目标后,你可令其本回合非锁定技失效.',
			rewrite_fulei_skill: '阴勾玉',
			rewrite_fulei_skill_info: '出牌阶段结束时,你可以重铸一张手牌.若此牌为红色且你的体力值小于手牌数,你回复一点体力;若此牌不为红色且你手牌数小于体力值,你摸一张牌.',
			rewrite_shandian_skill: '阳勾玉',
			rewrite_shandian_skill_info: '结束阶段开始时,你可以进行一次判定,若结果为黑色,你令一名其他角色进入横置状态,并对其造成一点雷电伤害',
			ybsl_tianleiyubi_skin: '勾玉之力',
			ybsl_tianleiyubi_skin_info: '出牌阶段开始时,你可以令一名角色横置或解除横置.',
			ybsl_tianleiyubi_skill: '天雷玉璧',
			ybsl_tianleiyubi_skill_info: '场上角色准备阶段开始时,你可以令其进入横置状态并令其判定,若结果为♠️️2~9,则其受到3点无来源雷电伤害.',
			rewrite_ybsl_tianleiyubi_skill: '天雷玉璧·觉醒',
			rewrite_ybsl_tianleiyubi_skill_info: '每当你造成1点雷电伤害后,你可以回复1点体力或摸一张牌.',
			//--------------------------移植
			sadouchengbing: '撒豆成兵',
			sadouchengbing_info: '出牌阶段对自己使用,若你的势力为<神>,摸X张牌;否则将你手牌补至X;(X为你的体力上限且至多为5)',
			//--------------------------标签
			YB_snowsha: '雪杀',
			YB_bloodsha: '血杀',
			_YB_snowsha: '雪杀',
			_YB_snowsha_info: '当你造成雪属性伤害时,你可以令目标摸X张牌,其武将牌翻面(X为目标当前体力值且至多为5).',
			_YB_bloodsha: '血杀',
			_YB_bloodsha_info: '锁定技,造成血属性伤害时,回复等同伤害值的体力值.',
			ybsl_flower: '花朵',
			//--------------------------基本
			ybsl_meihua: '梅',
			ybsl_meihua_info: '出牌阶段,对至多两名角色使用,目标各摸一张牌.追加:若目标数为小于2,则目标再摸一张牌,否则销毁此牌.',
			ybsl_meihua_append: '♣️️的梅.有毒慎食!',
			ybsl_lanhua: '兰',
			ybsl_lanhua_info: '出牌阶段,对至多两名角色使用,目标增加一点体力上限.追加:若目标数为小于2,则目标再摸一张牌,否则销毁此牌.',
			ybsl_lanhua_append: '兰花的兰.有毒慎食!',
			ybsl_zhuzi: '竹',
			ybsl_zhuzi_info: '出牌阶段,对至多两名角色使用,目标获得一点护甲.追加:若目标数为小于2,则目标再摸一张牌,否则销毁此牌.',
			ybsl_zhuzi_append: '竹花的竹(好像哪里不对).有毒慎食!',
			ybsl_juhua: '菊',
			ybsl_juhua_info: '出牌阶段,对至多两名角色使用,目标回复一点体力.追加:若目标数为小于2,则目标再摸一张牌,否则销毁此牌.',
			ybsl_juhua_append: '菊华的菊.有毒慎食!',
			rewrite_du: '毒箭',
			rewrite_du_info: '出牌阶段,对一名其他角色使用,其须使用一张闪响应,否则你对其造成一点伤害,令其获得一张【毒】.',
			ybsl_tianhuoduan: '天火煅',
			ybsl_tianhuoduan_bg: '煅',
			ybsl_tianhuoduan_info: '出牌阶段,你可以升级手中或装备区内的可升级装备(此牌多次结算无效).可重铸.',
			//'ybsl_tianhuoduan_append':'目前可强化的有八卦阵,白银狮子,诸葛连弩,藤甲,烂银甲,仁王盾,赤兔,王追等.',
			//--------------------------锦囊
			ybsl_dafeng: '大风',
			ybsl_dafeng_bg: '风',
			ybsl_dafeng_info: '出牌阶段,对任意一名角色使用,其需弃置一张基本牌,否则受到你造成的一点伤害.',
			ybsl_luolei: '落雷',
			ybsl_luolei_bg: '雷',
			ybsl_luolei_info: '出牌阶段,对任意一名角色使用,其需弃置一张装备牌,否则受到你造成的一点雷属性伤害.',
			ybsl_duboom: '毒爆',
			ybsl_duboom_info: '出牌阶段,对一名有手牌的其他角色使用,其展示手牌,若有【毒】则弃置所有【毒】,否则弃置一张任意手牌.可重铸.',
			ybsl_wenben: '问策',
			ybsl_wenben_info: '待定',
			ybsl_hsbwp: '火烧博望坡',
			ybsl_hsbwp_info: '出牌阶段,对一名其他角色使用,其需使用一张与此牌同花色的手牌,否则受到你造成的一点火焰伤害.',
			ybsl_meteor: '流星火矢', //万箭齐发的进阶版
			ybsl_meteor_bg: '星',
			ybsl_meteor_info: '出牌阶段,对所有其他角色使用.每名目标角色需打出一张【闪】,否则受到1点火属性伤害.',
			ybsl_disarm: '铁骑兵锋', //南蛮入侵的进阶版
			ybsl_disarm_bg: '锋',
			ybsl_disarm_info: '出牌阶段,对所有其他角色使用.每名目标角色需打出一张【杀】,弃置一张手牌(无牌不弃),否则受到1点伤害.',
			ybsl_chains: '铁索拦江', //铁索连环的进阶版
			ybsl_chains_bg: '拦',
			ybsl_chains_info: '出牌阶段,对任意两名角色使用,令他们进入横置状态,令所有未处于横置状态的角色使用牌只能指定自己和已横置角色为目标,直到场上所有角色均解除横置状态.可重铸.',
			ybsl_diedpk: '生死决斗', //决斗的进阶版
			ybsl_diedpk_bg: '珏',
			ybsl_diedpk_info: '出牌阶段,将此牌视为【决斗】使用,此【决斗】造成伤害时,伤害值+X(X为双方因此打出的【杀】的总数,且至多为8).',
			ybsl_yananzhendu: '宴安鸩毒',
			ybsl_yananzhendu_info: '出牌阶段,对所有角色使用,目标需弃置一张【桃】,否则获得一张【毒】.可重铸',
			ybsl_qingmeizhujiu: '青梅煮酒',
			ybsl_qingmeizhujiu_bg: '煮',
			ybsl_qingmeizhujiu_info: '待定',
			ybsl_anduchencang: '暗度陈仓',
			ybsl_anduchencang_bg: '度',
			ybsl_anduchencang_info: '其他角色的回合开始时,你可以使用之.你摸两张牌,你执行一个额外的出牌阶段.',
			ybsl_anduchencang_skill: '暗度陈仓',
			ybsl_anduchencang_skill2: '暗度陈仓',
			ybsl_zhijizhibi: '知己知彼',
			ybsl_zhijizhibi_info_identity: '出牌阶段对一名其他角色使用,观看其手牌或身份,可重铸.',
			ybsl_zhijizhibi_info_guozhan: '出牌阶段对一名其他角色使用,观看其手牌或暗置武将,可重铸.',
			ybsl_zhijizhibi_info: '出牌阶段对一名其他角色使用,观看其手牌,可重铸.',
			ybsl_qisihuisheng: '起死回生',
			ybsl_qisihuisheng_bg: '复',
			ybsl_qisihuisheng_info: '出牌阶段对自己使用或,当一名角色进入濒死时你可以对其使用:令其回复体力至3点,摸3-X张牌(X为回复的体力值).',
			ybsl_qisihuisheng_append: '源自霸天投稿.',
			llfx_shanfengdianhuo: '煽风点火',
			llfx_shanfengdianhuo_info: '出牌阶段,对一名其他角色使用,视为该角色对其攻击范围内所有角色使用一张火【杀】<br>注:开启自动确认时,可以拖拽卡牌至目标查看被火杀对象',
			llfx_shanfengdianhuo_append: "<倒不是怕有人煽风点火.><br><span style='text-align: right;'>——沙汀</span>",
			ybsl_tututu: '万钧神弩',
			ybsl_tututu_bg: '钧',
			ybsl_tututu_info: '出牌阶段,你展示牌堆顶X张牌,依次对其使用其中所有的【杀】,将剩余的牌置入弃牌堆.(X为存活角色数且至少为4,至多为10).',
			ybsl_qiuxianruoke: '求贤若渴',
			ybsl_qiuxianruoke_bg: '募',
			ybsl_qiuxianruoke_info: '出牌阶段,对自己使用,你声明一个花色及类别,亮出牌堆顶3张牌,你获得与你声明相符的牌.若有两项皆满足的牌,你回复一点体力.',
			ybsl_qiuxianruoke_append: '山不厌高,海不厌深,周公吐哺,天下归心.<br>——曹操<短歌行>,',
			ybsl_mixianshenshu: '弥仙神术', //达成
			ybsl_mixianshenshu_info: '出牌阶段,对一名任意角色使用,改变目标的势力并令其摸一张牌.可重铸.',
			ybsl_tongguiyujin: '同归于尽', //达成
			ybsl_tongguiyujin_bg: '尽', //达成
			ybsl_tongguiyujin_info: '出牌阶段,对一名其他角色使用,(若你的体力值大于1,则先失去一点体力)对目标造成X点伤害,X为你已损体力值且至少为一.',
			ybsl_kaicangzhenliang: '开仓赈粮', //达成
			ybsl_kaicangzhenliang_bg: '赈', //达成
			ybsl_kaicangzhenliang_info: '出牌阶段,对所有角色使用.(选择目标后)你从牌堆顶亮出等同于目标数量的牌,你为每名目标角色分发这些牌中(剩余的)的任意一张.',
			ybsl_youfuwoxiang: '有福我享', //未达成
			ybsl_youfuwoxiang_bg: '享', //未达成
			ybsl_youfuwoxiang_info: '出牌阶段,对所有角色使用.(选择目标后)你从牌堆顶亮出等同于目标数量的牌,并用任意手牌替换之.每名目标角色依次选择这些牌中(剩余的)的任意一张.',
			//------------------------延时锦囊
			ybsl_wenii: '瘟疫',
			ybsl_wenii_bg: '疫',
			ybsl_wenii_info: '出牌阶段,对任意角色使用.判定时,若不为♦️️,则获得一张【毒】,移给下家,若为♦️️,则移给下家.',
			ybsl_huadiweilao: '画地为牢',
			ybsl_huadiweilao_bg: '牢',
			ybsl_huadiweilao_info: '出牌阶段,对一名其他角色使用.判定时,若结果为黑色,则该角色本回合使用牌不能指定其他角色为目标.',
			//------------------------装备武器
			ybsl_baihong: '白虹剑', //2(吴六剑之一)
			ybsl_baihong_info: '锁定技,出牌阶段,若你的手牌数不大于体力值,则你使用牌无次数限制.',
			ybsl_baihong_append: '据说,曾有人同时拿着六把兵器.',
			ybsl_zidian: '紫电剑', //2(吴六剑之一)
			ybsl_zidian_info: '当你使用一张普通【杀】时,你可以将其转化为【雷杀】;出牌阶段,你可以重铸一张【杀】,若如此做,本回合你使用的下一张杀伤害+1(可叠加).',
			ybsl_zidian_append: '据说,曾有人同时拿着六把兵器.',
			ybsl_zidian1: '紫电剑',
			ybsl_zidian1_info: '当你声明使用一张普通【杀】时,你可以将其转化为【雷杀】',
			ybsl_zidian2: '紫电剑',
			ybsl_zidian2_info: '出牌阶段,你可以重铸一张【杀】,若如此做,本回合你使用的下一张杀伤害+1(可叠加)',
			ybsl_bixie: '辟邪剑', //2(吴六剑之一)
			ybsl_bixie_info: '当你使用杀指定目标后,你可以弃置其一张牌.',
			ybsl_bixie_append: '据说,曾有人同时拿着六把兵器.',
			ybsl_liuxing: '流星剑', //2(吴六剑之一)
			ybsl_liuxing_info: '锁定技,摸牌阶段你额外摸一张牌,出牌阶段用杀次数+1,手牌上限+1.',
			ybsl_liuxing_append: '据说,曾有人同时拿着六把兵器.',
			ybsl_qingming: '青冥剑', //3(吴六剑之一)
			ybsl_qingming_info: '当你于出牌阶段内一次性失去了两张及以上的手牌后,你可以弃置一名其他角色等量的牌,或对一名其他角色造成X点伤害,X为本次弃牌中的花色数.',
			ybsl_qingming_append: '据说,曾有人同时拿着六把兵器.',
			ybsl_baili: '百里剑', //2(吴六剑之一)
			ybsl_baili_info: '出牌阶段限一次,你可以将一张手牌交给其他角色;在你的回合,当一名其他角色获得你的牌时,你可以对其造成一点伤害.',
			ybsl_baili_append: '据说,曾有人同时拿着六把兵器.',
			ybsl_baili_give: '百里剑',
			ybsl_baili_give_info: '出牌阶段限一次,你可以将一张手牌交给其他角色',
			ybsl_baili_skill: '百里剑',
			ybsl_baili_skill_info: '在你的回合,当一名其他角色获得你的牌时,你可以对其造成一点伤害.',
			ybsl_qixingdao: '七星刀', //2
			ybsl_qixingdao_info: '锁定技,①当你使用普通【杀】造成伤害时②当你对体力值大于你的角色造成伤害时,以上每满足一条,此伤害便+1.',
			ybsl_piaoxueruyi: '飘雪神符', //达成
			ybsl_piaoxueruyi_bg: '雪',
			ybsl_piaoxueruyi_info: '当你使用【杀】造成伤害时,你可以令目标摸X张牌,其武将牌翻面(X为目标当前体力值且至多为5).',
			rewrite_qinglong: '锁龙偃月刀', //3
			rewrite_qinglong_info: '当你使用【杀】指定目标后,你可令其本回合非锁定技失效;当你使用的【杀】被目标角色使用的【闪】抵消时,你摸一张牌,可以对其使用一张【杀】(无距离限制).',
			rewrite_qinglong_info_guozhan: '当你使用【杀】指定目标后,你可令其本回合非锁定技失效;锁定技,当你使用【杀】指定目标后,所有目标角色不能明置武将牌直到此【杀】结算完毕为止.',
			rewrite_zhuque: '北斗七星扇', //4
			rewrite_zhuque_bg: '斗',
			rewrite_zhuque_info: '当你使用伤害类基本牌或普通锦囊牌时,你可以为其重新指定花色和伤害属性(神属性除外).',
			rewrite_fangtian: '方天锁链鞭', //4
			rewrite_fangtian_bg: '鞭',
			rewrite_fangtian_info: '锁定技,当你使用【杀】指定目标后,若其未横置,则其横置,否则你观看其手牌.你使用的【杀】若是你最后的手牌,你可以额外选择至多两个目标.',
			rewrite_fangtian_info_guozhan: '锁定技,当你使用【杀】指定目标后,若其未横置,则其横置,否则你观看其手牌.你使用【杀】可以指定任意名角色为目标(不能包含势力相同的角色),若任意一名目标角色使用【闪】抵消了此【杀】,则此【杀】对剩余的目标角色无效.',
			rewrite_fangtian_append: '什么J8缝合怪',
			ybsl_lvchenqiang: '绿沉枪', //3
			ybsl_lvchenqiang_info: '若你有手牌,你可以把所有手牌当【杀】使用或打出;若你没有手牌,你可以摸一张牌,视为使用或打出了一张【闪】.',
			ybsl_fuxizhenhunqin: '伏羲镇魂琴', //4
			ybsl_fuxizhenhunqin_bg: '琴', //4
			ybsl_fuxizhenhunqin_info: '当你使用杀时,你可以为此杀附着所有属性.', //依托于本体新版本的设定
			rewrite_yitianjian: '七星龙渊剑', //3
			rewrite_yitianjian_bg: '渊',
			rewrite_yitianjian_info: '当你造成伤害后,你可以弃置一张手牌,回复一点体力',
			ybsl_feijingsanjian: '飞景三剑', //2
			ybsl_feijingsanjian_bg: '景',
			ybsl_feijingsanjian_info: '略',
			ybsl_bainiaochaofeng: '百鸟朝凤枪', //3
			ybsl_bainiaochaofeng_bg: '凤', //3
			ybsl_bainiaochaofeng_info: '当你使用牌指定其他角色为目标后时,你可令目标不能使用实体牌包含与此牌同颜色的牌直到此牌结算完成.',
			// 'ybsl_bainiaochaofeng_info':'当你使用牌时,你可令此牌不能被相同颜色牌响应.没写好,别私自加!',
			ybsl_bainiaochaofeng_append: '源自霸天投稿,夜白稍加修改.',
			// ybsl_bainiaochaofeng_append:'没写好,别私自加!',
			//--------------------------防具
			rewrite_huxinjing: '白虎镜',
			rewrite_huxinjing2: '白虎镜',
			rewrite_huxinjing_bg: '虎',
			rewrite_huxinjing_info: '此牌可对其他角色使用.当你受到伤害时,若此伤害大于1或不小于你当前体力值,你可以防止此伤害,:①你下次造成的伤害+1;②若你下次受到伤害时处于①状态下,则移除①效果,并将此牌置入弃牌堆.',
			rewrite_huxinjing_info_guozhan: '当你受到伤害时,若伤害值大于等于你的体力值,你可以防止此伤害,:①你下次造成的伤害+1;②若你下次受到伤害时处于①状态下,则移除①效果,并将此牌置入弃牌堆.',
			ybsl_qinglinkui: '青鳞盔',
			ybsl_qinglinkui_bg: '鳞',
			ybsl_qinglinkui_info: '锁定技,你的回合外,当你受到伤害时,若对方在你攻击范围外,则此伤害-1.',
			ybsl_shuijingpao: '水镜袍',
			ybsl_shuijingpao_bg: '镜',
			ybsl_shuijingpao_info: '锁定技,当你成为锦囊牌的目标时,你摸X张牌(X为此锦囊的目标数).',
			ybsl_nodouble: '无双铠',
			ybsl_nodouble_bg: '双',
			ybsl_nodouble_info: '每当你成为【杀】或【决斗】的目标时,你可以摸一张牌;若你拥有〖无双〗,则你使用杀或决斗时也可以摸牌.',
			ybsl_guoshishengpao: '国士圣袍',
			ybsl_guoshishengpao_bg: '白',
			ybsl_guoshishengpao_info: '锁定技,♥️️杀对你无效,手牌上限+2.',
			ybsl_jinyin: '金银褥铠',
			ybsl_jinyin_bg: '褥',
			ybsl_jinyin_info: '待定.',
			ybsl_fengshem: '风神盾',
			ybsl_fengshen_info: '待定.',
			//--------------------------坐骑
			ybsl_wusun: '乌孙', //达成
			ybsl_wusun_info: '锁定技,其他角色计算与你的距离+1.',
			ybsl_xiji: '西极', //达成
			ybsl_xiji_info: '锁定技,你计算与其他角色的距离-1.',
			ybsl_wangzhui: '王追', //达成
			ybsl_wangzhui_bg: '骓',
			ybsl_wangzhui_info: '锁定技,其他角色计算与你的距离+1.',
			ybsl_wangzhui_append: '据说是张飞的座驾,也许有什么潜力有待开发.',
			ybsl_benlei: '奔雷', //达成
			ybsl_benlei_info: '锁定技,你计算与其他角色的距离-1.',
			ybsl_zhaoyeyushi: '照夜玉狮',
			ybsl_zhaoyeyushi_info: '锁定技,其他角色计算与你的距离+2.',
			ybsl_yulanbailongju: '玉兰白龙驹',
			ybsl_yulanbailongju_bg: '驹',
			ybsl_yulanbailongju_info: '锁定技,你计算与其他角色的距离-2.',
			chitu_append: '三国著名坐骑,也许有一天会变得激昂.',
			rewrite_chitu: '烈焰赤兔',
			rewrite_chitu_bg: '焰',
			rewrite_chitu_append: '锻造马匹真的生草.',
			rewrite_chitu_info: '锁定技,你计算与其他角色的距离-2,其他角色计算与你的距离+1.<br>每当你使用(指定目标后)或被使用(成为目标后)一张【决斗】或红色的【杀】时,你可以摸一张牌.',
			rewrite_ybsl_wangzhui: '乌云踏雪',
			rewrite_ybsl_wangzhui_bg: '云',
			rewrite_ybsl_wangzhui_append: '锻造马匹真的生草.',
			rewrite_ybsl_wangzhui_info: '锁定技,你计算与其他角色的距离-1,其他角色计算与你的距离+2.<br>每回合限一次,当你使用【杀】或成为【杀】的目标时,若此【杀】存在对应的实体牌,你可以获得之.',
			ybsl_milu: '圣诞麋鹿',
			ybsl_milu_bg: '麋',
			// 'ybsl_milu_info':'锁定技,你计算与其他角色的距离-1.锁定技,当你即将失去装备区的牌时,改为收回手牌.',//没写成
			ybsl_milu_info: '锁定技,你计算与其他角色的距离-1.出牌阶段限一次,你可交给一名其他角色一张手牌,该角色选择回复一点体力或摸一张牌',
			ybsl_yangtuo: '神兽羊驼',
			ybsl_yangtuo_bg: '羊',
			ybsl_yangtuo_info: '锁定技,其他角色计算与你的距离+1.当你成为【杀】的目标并结算完后,你可以将一张与该【杀】颜色不同的牌当【杀】对【杀】的使用者使用.',
			//--------------------------宝物
			ybsl_fengqiuhuang: '凤求凰',
			ybsl_fengqiuhuang_bg: '凰',
			ybsl_fengqiuhuang_info: '锁定技,当你使用锦囊牌或基本牌后,令此牌额外结算一次.',
			ybsl_taoyao: '桃之夭夭',
			ybsl_taoyao_info: '你可以将一张♥️️牌当【桃】使用.',
			ybsl_zhiziyugui: '之子于归',
			ybsl_zhiziyugui_bg: '归',
			// 'ybsl_zhiziyugui_info':'出牌阶段限一次,你可以选择一名异性角色,你弃置一张牌或将一张装备牌置入目标角色装备区,你选择①你们中一人回复一点体力,另一人摸一张牌;②再弃一张牌,令其中一方执行未执行的一项;③再弃一张牌,令另一方执行未执行的一项',
			ybsl_zhiziyugui_info: '当此牌进入你装备区时,你回复一点体力;当此牌离开你装备区时,你摸两张牌.',
			ybsl_toushiche: '投石车',
			ybsl_toushiche_bg: '石',
			ybsl_toushiche_info: '出牌阶段限一次,你可以将一张手牌放在【车】下称为<石>;每有一张<石>,攻击范围便+1;你可以将<石>当做不计入次数的【杀】使用或打出.',
			rewrite_fulei: '阴勾玉',
			rewrite_fulei_info: '出牌阶段开始时,你可以令一名角色横置或解除横置.<br>出牌阶段结束时,你可以重铸一张手牌.若此牌为红色且你的体力值小于手牌数,你回复一点体力;若此牌不为红色且你手牌数小于体力值,你摸一张牌.',
			rewrite_shandian: '阳勾玉',
			rewrite_shandian_info: '出牌阶段开始时,你可以令一名角色横置或解除横置.<br>结束阶段开始时,你可以进行一次判定,若结果为黑色,你令一名其他角色进入横置状态,并对其造成一点雷电伤害.',
			ybsl_tianleiyubi: '天雷玉璧',
			ybsl_tianleiyubi_bg: '雷',
			ybsl_tianleiyubi_info: '出牌阶段开始时,你可以令一名角色横置或解除横置.<br>出牌阶段结束时,你可以重铸一张手牌.若此牌为红色且你的体力值小于手牌数,你回复一点体力;若此牌不为红色且你手牌数小于体力值,你摸一张牌.<br>结束阶段开始时,你可以进行一次判定,若结果为黑色,你令一名其他角色进入横置状态,并对其造成一点雷电伤害.<br>场上角色准备阶段开始时,你可以令其令其进入横置状态并令其判定,若结果为♠️️2~9,则其受到3点无来源雷电伤害.',
			rewrite_ybsl_tianleiyubi: '神雷玉璧',
			rewrite_ybsl_tianleiyubi_bg: '雷',
			rewrite_ybsl_tianleiyubi_info: '出牌阶段开始时,你可以令一名角色横置或解除横置.<br>出牌阶段结束时,你可以重铸一张手牌.若此牌为红色且你的体力值小于手牌数,你回复一点体力;若此牌不为红色且你手牌数小于体力值,你摸一张牌.<br>结束阶段开始时,你可以进行一次判定,若结果为黑色,你令一名其他角色进入横置状态,并对其造成一点雷电伤害.<br>场上角色准备阶段开始时,你可以令其令其进入横置状态并令其判定,若结果为♠️️2~9,则其受到3点无来源雷电伤害.<br>每当你造成1点雷电伤害后,你可以回复1点体力或摸一张牌.',
			rewrite_tongque: '界铜雀',
			rewrite_tongque_info: '锁定技,你使用的带有【应变】效果的牌无视条件直接生效.',
			//-----------------------可进化装备
			ybsl_baiyushan: '白羽扇',
			ybsl_baiyushan_bg: '羽',
			ybsl_baiyushan_info: '锁定技,你使用本回合的第一张【杀】不计入次数限制,你获得每个目标各一张牌.锁定技,当你使用【杀】时,若目标与你的距离大于1,每超过1,此伤害便-1.',
			rewrite_ybsl_baiyushan: '清风扇',
			rewrite_ybsl_baiyushan_info: '锁定技,当你使用本回合第一张【杀】不计入次数限制,你你获得每个目标各一张牌.',
			ybsl_jiangjunpifeng: '将军披风',
			ybsl_jiangjunpifeng_info: '锁定技,当你受到伤害时,取消该次伤害,进行一次判定,若为黑色,则弃置此牌.',
			rewrite_ybsl_jiangjunpifeng: '霸者披风',
			rewrite_ybsl_jiangjunpifeng_info: '锁定技,当你受到伤害时,取消该次伤害,进行一次判定,若为♠️️,则弃置此牌.',
			ybsl_liujinguan: '鎏金冠',
			ybsl_liujinguan_info: '锁定技,每当你使用一张锦囊牌结算完成时,本回合你的手牌上限便+1.',
			rewrite_ybsl_liujinguan: '集智冠',
			rewrite_ybsl_liujinguan_bg: '智',
			rewrite_ybsl_liujinguan_info: '锁定技,每当你使用一张锦囊牌结算完成时,本回合你的手牌上限便+1;你的回合外,若你的手牌数大于体力值,此装备牌无法被其他角色获得或弃置.',
		}, //卡牌翻译
		list: [
			//牌堆
			//-----------------------------------花----------------------------------//
			//---------------------♠️️
			['spade', '1', 'sha', 'YB_snow'], //将军披风霸者披风
			['spade', '2', 'ybsl_dafeng', null, ['yingbian_zhuzhan', 'yingbian_add']], //达成
			['spade', '3', 'ybsl_dafeng', null, ['yingbian_zhuzhan', 'yingbian_add']], //达成
			['spade', '4', 'ybsl_dafeng', null, ['yingbian_zhuzhan', 'yingbian_add']], //达成
			// ['spade','5','sha','YB_snow'],//七星刀
			['spade', '5', 'ybsl_qixingdao'], //七星刀
			['spade', '6', 'ybsl_piaoxueruyi'], //随波逐流
			['spade', '7', 'ybsl_zhuzi', null, ['yingbian_zhuzhan', 'yingbian_add']],
			['spade', '8', 'ybsl_zhuzi'],
			['spade', '9', 'ybsl_zhuzi', null, ['yingbian_canqu', 'yingbian_add']],
			['spade', '10', 'ybsl_zhuzi'],
			['spade', '11', 'ybsl_zhuzi', null, ['yingbian_fujia', 'yingbian_add']],
			['spade', '12', 'shuiyanqijunx', 'thunder', ['yingbian_zhuzhan', 'yingbian_all']], //达成
			['spade', '13', 'ybsl_wusun'], //达成
			//---------------------♥️️
			['heart', '1', 'jiejia'], //达成
			['heart', '2', 'ybsl_mixianshenshu'], //鎏金冠集智冠
			// ['heart','3','tao'],//募兵
			['heart', '3', 'ybsl_qiuxianruoke'], //募兵
			['heart', '4', 'tao'], //兵临城下
			// ['heart','5','tao'],//水镜袍
			['heart', '5', 'ybsl_shuijingpao'], //水镜袍
			['heart', '6', 'tao'], //画地为牢
			['heart', '7', 'ybsl_juhua', null, ['yingbian_zhuzhan', 'yingbian_add']],
			['heart', '8', 'ybsl_juhua'],
			['heart', '9', 'ybsl_juhua', null, ['yingbian_canqu', 'yingbian_add']],
			['heart', '10', 'ybsl_juhua'],
			['heart', '11', 'ybsl_juhua', null, ['yingbian_fujia', 'yingbian_add']], //达成
			['heart', '12', 'wuxie', null, ['gifts']], //达成
			['heart', '13', 'ybsl_xiji'], //达成
			//---------------------♣️️
			['club', '1', 'sha', 'ice'], //白羽扇清风扇
			['club', '2', 'sha', 'ice'], //青梅煮酒
			['club', '3', 'sha', 'ice'], //青梅煮酒
			['club', '4', 'wangmeizhike', null, ['gifts']], //达成
			['club', '5', 'sha', 'ice'], //黄钺
			['club', '6', 'wangmeizhike', null, ['gifts']], //达成
			['club', '7', 'ybsl_meihua', null, ['yingbian_zhuzhan', 'yingbian_add']], //达成
			['club', '8', 'ybsl_meihua'], //达成
			['club', '9', 'ybsl_meihua', null, ['yingbian_canqu', 'yingbian_add']], //达成
			['club', '10', 'ybsl_meihua'], //达成
			['club', '11', 'ybsl_meihua', null, ['yingbian_fujia', 'yingbian_add']], //达成
			['club', '12', 'wuxie', null, ['gifts']], //达成
			['club', '13', 'ybsl_wangzhui'], //达成
			//---------------------♦️️
			['diamond', '1', 'ybsl_qinglinkui'], //青鳞盔
			['diamond', '2', 'wuxie', null, ['gifts']], //达成
			// ['diamond','3','sha','YB_blood'],//募兵
			['diamond', '3', 'ybsl_qiuxianruoke'], //募兵
			['diamond', '4', 'du'], //锁子甲七星甲
			['diamond', '5', 'yitianjian', null, ['gifts']], //达成
			['diamond', '6', 'sha', 'YB_blood'], //瘟疫
			['diamond', '7', 'ybsl_lanhua', null, ['yingbian_zhuzhan', 'yingbian_add']], //达成
			['diamond', '8', 'ybsl_lanhua'], //达成
			['diamond', '9', 'ybsl_lanhua', null, ['yingbian_canqu', 'yingbian_add']], //达成
			['diamond', '10', 'ybsl_lanhua'], //达成
			['diamond', '11', 'ybsl_lanhua', null, ['yingbian_fujia', 'yingbian_add']], //达成
			['diamond', '12', 'sha', 'YB_blood'], //投石车
			['diamond', '13', 'ybsl_benlei'], //达成
			//---------------------EX
			['spade', '2', 'sha', 'YB_snow'], //之子于归
			['heart', '12', 'ybsl_taoyao'], //桃之夭夭
			//-----------------------------------毒----------------------------------//
			//---------------------♠️️
			// ['spade','1','du',null,['gifts']],//紫电剑
			['spade', '1', 'ybsl_zidian'], //达成
			['spade', '2', 'du', null, ['gifts']], //宴安鸩毒
			['spade', '3', 'sha', 'YB_snow', ['yingbian_fujia', 'yingbian_add']], //达成
			['spade', '4', 'sha', 'YB_snow', []], //达成
			// ['spade','5','sha','YB_snow',[]],//青冥剑
			['spade', '5', 'ybsl_qingming'], //达成
			['spade', '6', 'ybsl_tututu'], //万钧神弩
			['spade', '7', 'sha', 'YB_snow', ['yingbian_fujia', 'yingbian_add']], //达成
			['spade', '8', 'sha', 'YB_snow', ['yingbian_fujia', 'yingbian_lianDa']], //达成
			['spade', '9', 'sha', 'YB_snow', ['yingbian_fujia', 'yingbian_lianDa']], //达成
			['spade', '10', 'zhujinqiyuan', null, ['yingbian_fujia', 'yingbian_all']], //宴安鸩毒
			['spade', '11', 'sha', 'YB_snow', []], //宴安鸩毒
			['spade', '12', 'sha', 'YB_snow', []], //观星
			['spade', '13', 'ybsl_disarm', 'stab', ['yingbian_fujia', 'yingbian_remove']], //铁骑兵锋
			//---------------------♥️️[]
			['heart', '1', 'ybsl_meteor', 'fire', ['yingbian_fujia', 'yingbian_remove']], //流星火矢
			['heart', '2', 'ybsl_mixianshenshu'], //八阵
			['heart', '3', 'shan', null, ['yingbian_fujia', 'yingbian_draw']], //达成
			['heart', '4', 'tao'], //毒桃
			// ['heart','5','tao'],//白虹剑
			['heart', '5', 'ybsl_baihong'], //达成
			['heart', '6', 'yanxiao_card'], //言笑
			['heart', '7', 'tao'], //达成
			['heart', '8', 'tao'], //达成
			['heart', '9', 'guaguliaodu', null, ['gifts']], //达成
			['heart', '10', 'guaguliaodu', null, ['gifts']], //达成
			['heart', '11', 'guaguliaodu', null, ['gifts']], //达成
			['heart', '12', 'du', null, ['gifts']], //毒爆
			['heart', '13', 'shan'], //达成
			//---------------------♣️️
			// ['club','1','sha','ice'],//流星剑
			['club', '1', 'ybsl_liuxing'], //达成
			['club', '2', 'du'], //青囊
			['club', '3', 'sha', 'fire', ['yingbian_canqu', 'yingbian_add']], //达成
			['club', '4', 'sha', 'fire', ['yingbian_canqu', 'yingbian_add']], //达成
			// ['club','5','sha'],//辟邪剑
			['club', '5', 'ybsl_bixie'], //达成
			['club', '6', 'ybsl_luolei', 'thunder', ['yingbian_zhuzhan', 'yingbian_add']], //达成
			['club', '7', 'sha', 'YB_blood', ['yingbian_canqu', 'yingbian_add']], //达成毒杀
			['club', '8', 'caochuan', null, ['gifts']], //达成
			['club', '9', 'caochuan', null, ['gifts']], //达成
			['club', '10', 'ybsl_luolei', 'thunder', ['yingbian_zhuzhan', 'yingbian_add']], //达成
			['club', '11', 'sha', 'ice'], //雷霆万钧
			['club', '12', 'ybsl_tianhuoduan', 'fire'], //达成看破
			['club', '13', 'tiesuo', null, ['gifts']], //铁索拦江
			//---------------------♦️️
			['diamond', '1', 'juedou', null, ['yingbian_fujia', 'yingbian_hit']], //生死决斗
			['diamond', '2', 'huogong', null, ['yingbian_kongchao', 'yingbian_draw']], //火计
			['diamond', '3', 'tao'], //达成
			['diamond', '4', 'shan', null, ['yingbian_fujia', 'yingbian_draw']], //达成
			// ['diamond','5','sha','thunder',['yingbian_canqu','yingbian_damage']],//百里剑
			['diamond', '5', 'ybsl_baili'], //达成
			['diamond', '6', 'sha', 'thunder', ['yingbian_canqu', 'yingbian_damage']], //半途而废
			['diamond', '7', 'shan', null, ['yingbian_fujia', 'yingbian_draw']], //达成
			['diamond', '8', 'shan', null, ['yingbian_fujia', 'yingbian_draw']], //达成
			['diamond', '9', 'sha', 'YB_blood', ['yingbian_zhuzhan', 'yingbian_lianDa']], //宴安鸩毒
			['diamond', '10', 'ybsl_luolei', 'thunder', ['yingbian_zhuzhan', 'yingbian_add']], //达成
			['diamond', '11', 'ybsl_mixianshenshu'], //封神登极
			['diamond', '12', 'ybsl_mixianshenshu'], //达成空城
			['diamond', '13', 'sha', 'YB_blood', []], //毒杀
			//---------------------EX
			['club', '2', 'ybsl_yangtuo'], //神兽羊驼
			['diamond', '12', 'ybsl_milu'], //圣诞麋鹿
			//-----------------------------------衡----------------------------------//
			//---------------------♠️️
			['spade', '1', 'ybsl_nodouble'], //无双铠原雪杀
			['spade', '2', 'ybsl_anduchencang', null, []], //暗度陈仓
			['spade', '3', 'jiu', null, ['gifts']], //达成
			['spade', '4', 'jiu', null, ['gifts']], //达成
			['spade', '5', 'ybsl_tianhuoduan', 'fire'], //锁龙偃月刀
			['spade', '6', 'sha'], //达成
			['spade', '7', 'sha'], //达成
			['spade', '8', 'sha'], //达成
			['spade', '9', 'sha'], //达成
			['spade', '10', 'sha'], //达成
			['spade', '11', 'sha', 'thunder'], //达成
			['spade', '12', 'ybsl_lvchenqiang'], //达成绿沉枪
			['spade', '13', 'ybsl_zhaoyeyushi'], //达成
			//---------------------♥️️
			// ['heart','1','guofengyupao'],//达成国士圣袍
			['heart', '1', 'ybsl_guoshishengpao'], //达成国士圣袍
			['heart', '2', 'tao', null, ['yingbian_canqu', 'yingbian_damage']], //达成问策
			['heart', '3', 'sha', 'fire', ['yingbian_fujia', 'yingbian_damage']], //达成
			['heart', '4', 'sha', 'fire', ['yingbian_fujia', 'yingbian_damage']], //达成
			['heart', '5', 'huogong', null, ['yingbian_fujia', 'yingbian_add']], //烈焰赤兔
			['heart', '6', 'huogong', null, ['yingbian_zhuzhan', 'yingbian_lianDa']], //达成杀
			['heart', '7', 'sadouchengbing'], //达成闪
			['heart', '8', 'sadouchengbing'], //达成闪
			['heart', '9', 'sadouchengbing'], //达成闪
			['heart', '10', 'shan'], //达成
			['heart', '11', 'sadouchengbing'], //达成桃
			['heart', '12', 'ybsl_tongguiyujin', null, ['yingbian_canqu', 'yingbian_add']], //达成
			['heart', '13', 'tao'], //伏羲镇魂琴
			//---------------------♣️️
			// ['club','1','sha','ice'],//百鸟朝凤枪
			['club', '1', 'ybsl_bainiaochaofeng'], //百鸟朝凤枪
			// ['club','2','sha','ice'],//知己知彼
			['club', '2', 'ybsl_zhijizhibi'], //
			['club', '3', 'jiu'], //达成
			['club', '4', 'jiu'], //达成
			['club', '5', 'sha'], //达成
			['club', '6', 'sha'], //达成
			['club', '7', 'ybsl_tianhuoduan', 'fire'], //风神盾
			['club', '8', 'sha'], //达成
			['club', '9', 'sha', 'thunder'], //达成
			['club', '10', 'sha'], //达成
			['club', '11', 'sha', 'ice'],
			['club', '12', 'yihuajiemu'], //达成
			['club', '13', 'yihuajiemu'], //乌云踏雪
			//---------------------♦️️
			['diamond', '1', 'ybsl_fuxizhenhunqin'], //北斗七星扇伏羲镇魂琴
			['diamond', '2', 'wuxie'], //达成
			['diamond', '3', 'ybsl_tianhuoduan', 'fire'],
			['diamond', '4', 'ybsl_tianhuoduan', 'fire'],
			['diamond', '5', 'sanlve'], //飞景三剑
			['diamond', '6', 'sha', 'YB_blood', []],
			['diamond', '7', 'sha', 'YB_blood', []], //金银褥铠
			['diamond', '8', 'tao', null, ['yingbian_fujia', 'yingbian_add']], //达成
			['diamond', '9', 'tao', null, ['yingbian_fujia', 'yingbian_add']], //达成
			['diamond', '10', 'sha', 'fire'], //达成
			['diamond', '11', 'sha'], //达成
			// ['diamond','12','sha','YB_blood',[]],//起死回生
			['diamond', '12', 'ybsl_qisihuisheng'],
			['diamond', '13', 'ybsl_yulanbailongju'], //达成
			//---------------------EX
			['spade', '2', 'sha', 'YB_snow', []], //七星龙渊剑
			['heart', '12', 'ybsl_zhiziyugui'], //凤求凰之子于归
			//
			['club', '2', 'zhaogujing'],
			['diamond', '12', 'qicaishenlu'],
			//---------------------------------------------EX------------------------------------------------//
			['spade', '2', 'ybsl_tianhuoduan', 'fire'],
			['heart', '12', 'ybsl_tianhuoduan', 'fire'],
			['heart', '2', 'ybsl_kaicangzhenliang'],
			['spade', '2', 'ybsl_tianhuoduan', 'fire', ['gifts']],
			['heart', '12', 'ybsl_tianhuoduan', 'fire', ['gifts']],
			['club', '2', 'ybsl_tianhuoduan', 'fire', ['gifts']],
			['diamond', '12', 'ybsl_tianhuoduan', 'fire', ['gifts']],
			['club', '2', 'ybsl_tianhuoduan', 'fire'],
			['diamond', '12', 'ybsl_tianhuoduan', 'fire'],
			['heart', '1', 'llfx_shanfengdianhuo'], //煽风点火
			['heart', '2', 'llfx_shanfengdianhuo'],
			//---------收尾
		], //牌堆添加
	};
	lib.yingbian.effect.set('lianDa', () => {
		// trigger.yingbian_lianDa=true;
		player.addTempSkill('_yingbian_doubleBlow', 'phaseUseAfter');
		trigger._yingbian_doubleBlow = player;
		game.log(card, '触发连打,额外执行一次');
		// trigger.parent.effectCount++;
	});
	lib.yingbian.prompt.set('lianDa', '连打');
	for (var i in ybslc.card) {
		if (!ybslc.card[i].image && !ybslc.card[i].modeimage) ybslc.card[i].image = 'ext:夜白神略/image/card/' + i + '.png';
	}
	lib.config.all.cards.add('ybslc'); //包名翻译
	lib.config.cards.add('ybslc');
	lib.translate['ybslc_card_config'] = "<span style='color: #ff00cc'>夜白牌堆</span>";
	return ybslc;
});

import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '洪荒ol',
		content(config, pack) {
			lib.skill.charactercard = {
				trigger: { player: 'phaseUseBegin' },
				forced: true,
				popup: false,
				mark: 'card',
				intro: {
					name(storage, player) {
						if (_status.video) {
							if (player.marks.charactercard && player.marks.charactercard.name) {
								var name = player.marks.charactercard.name;
								if (name) {
									name = name.slice(0, name.indexOf('_charactercard'));
									return get.translation(name);
								}
							}
							return '';
						} else {
							return get.translation(player.additionalSkills.charactercard[0]);
						}
					},
					content(storage, player) {
						if (_status.video) {
							if (player.marks.charactercard && player.marks.charactercard.name) {
								var name = player.marks.charactercard.name;
								if (name) {
									name = name.slice(0, name.indexOf('_charactercard'));
									return get.skillintro(name, true, true);
								}
							}
							return '';
						} else {
							return lib.translate[player.additionalSkills.charactercard[0] + '_info'];
						}
					},
					onunmark(storage, player) {
						player.removeAdditionalSkill('charactercard');
						delete player.storage.charactercard;
					},
				},
				content() {
					player.removeSkill('charactercard');
				},
			};
			lib.element.content.chooseJunfaFor = function () {
				'step 0';
				var list = ['junfa1', 'junfa2', 'junfa3', 'junfa4', 'junfa5', 'junfa6'];
				list = list.randomGets(2).sort();
				for (var i = 0; i < list.length; i++) list[i] = ['军法', '', list[i]];
				var prompt = event.prompt || '选择一张军法牌';
				if (target != undefined && !event.prompt) {
					var str = target == player ? '(你)' : '';
					prompt += ',令' + get.translation(target) + str + '选择是否执行';
				}
				player.chooseButton([prompt, [list, 'vcard']], true).set('ai', function (button) {
					return get.junfaEffect(player, button.link[2], target, [], player);
				});
				('step 1');
				event.result = {
					junfa: result.links[0][2],
					targets: [],
				};
				if (result.links[0][2] == 'junfa1')
					player.chooseTarget('选择一名角色,做为若该军法被执行,受到伤害的角色', true).set('ai', function (_target) {
						return get.damageEffect(_target, target, player);
					});
				('step 2');
				if (result.targets) {
					player.line(result.targets, 'green');
					event.result.targets = result.targets;
				}
			};
			lib.element.content.chooseJunfaControl = function () {
				'step 0';
				var dialog = ui.create.dialog('hidden');
				var str1 = source == player ? '(你)' : '';
				var str2 = event.targets ? '(被指定的角色为' + get.translation(event.targets) + ')' : '';
				if (!event.prompt) dialog.add(get.translation(event.source) + str1 + '选择的军法' + str2 + '为');
				else {
					dialog.add(event.prompt);
					dialog.addText(get.translation(event.source) + str1 + '选择的军法' + str2 + '为');
				}
				dialog.add([[event.junfa], 'vcard']);
				var controls = [];
				if (event.choiceList) {
					for (var i = 0; i < event.choiceList.length; i++) {
						dialog.add('<div class="popup text" style="width:calc(100% - 10px);display:inline-block">选项' + get.cnNumber(i + 1, true) + ':' + event.choiceList[i] + '</div>');
						controls.push('选项' + get.cnNumber(i + 1, true));
					}
				} else if (event.controls) controls = event.controls;
				else controls = ['执行该军法', '不执行该军法'];
				if (!event.ai) event.ai = Math.floor(controls.length * Math.random());
				player.chooseControl(controls).set('dialog', dialog).set('ai', event.ai);
				('step 1');
				event.result = {
					index: result.index,
					control: result.control,
				};
			};
			lib.element.content.carryOutJunfa = function () {
				'step 0';
				switch (event.junfa) {
					case 'junfa1': {
						player.damage(targets[0]);
						player.chooseToDiscard('he', 2, true);
						break;
					}
					case 'junfa2': {
						player.draw();
						event.num = 1;
						break;
					}
					case 'junfa3':
						player.loseHp();
						break;
					case 'junfa4':
						player.addTempSkill('junfa4_eff', 'phaseEnd');
						break;
					case 'junfa5':
						player.turnOver();
						break;
				}
				('step 1');
				if (event.junfa == 'junfa2' && source != player) player.chooseCard('交给' + get.translation(source) + '第' + get.cnNumber(event.num) + '张牌(共两张)', 'he', true);
				if (event.junfa == 'junfa6') {
					player.chooseCard('选择一张手牌弃置其余的牌', 'h', 1, true);
				}
				('step 2');
				if (event.junfa == 'junfa2' && source != player) {
					source.gainPlayerCard('h', player, 'visible');
					event.num++;
					if (event.num < 3) event.goto(1);
				}
				if (event.junfa == 'junfa6') {
					var cards = player.getCards('he');
					for (var i = 0; i < result.cards.length; i++) cards.remove(result.cards[i]);
					player.discard(cards);
				}
			};
			lib.element.player.chooseJunfaFor = function (target) {
				var next = game.createEvent('chooseJunfaFor');
				next.player = this;
				next.target = target;
				next.setContent('chooseJunfaFor');
				return next;
			};
			lib.element.player.chooseJunfaControl = function (source, junfa, targets) {
				var next = game.createEvent('chooseJunfaControl');
				next.player = this;
				next.source = source;
				next.junfa = junfa;
				if (targets.length) next.targets = targets;
				next.setContent('chooseJunfaControl');
				return next;
			};
			lib.element.player.linergbl = function (target, config) {
				if (get.itemtype(target) == 'players') {
					for (var i = 0; i < target.length; i++) {
						this.linergbl(target[i], config);
					}
				} else if (get.itemtype(target) == 'player') {
					if (target == this) return;
					game.broadcast(
						function (player, target, config) {
							player.linergbl(target, config);
						},
						this,
						target,
						config
					);
					game.addVideo('line', this, [target.dataset.position, config]);
					game.linexyrgbl(target, config, true);
				}
			};
			lib.element.player.carryOutJunfa = function (source, junfa, targets) {
				var next = game.createEvent('carryOutJunfa');
				next.source = source;
				next.player = this;
				if (targets.length) next.targets = targets;
				next.junfa = junfa;
				next.setContent('carryOutJunfa');
				return next;
			};
			lib.skill.junfa4_eff = {
				mod: {
					cardEnabled(card) {
						if (get.position(card) == 'h') return false;
					},
					cardUsable(card) {
						if (get.position(card) == 'h') return false;
					},
					cardRespondable(card) {
						if (get.position(card) == 'h') return false;
					},
					cardSavable(card) {
						if (get.position(card) == 'h') return false;
					},
				},
				mark: true,
				marktext: '法',
				intro: {
					content: '不能使用或打出手牌',
				},
			};
			const ASSET_URL = `extension/`;
			const jufastyle = 'width: 120px; height: 120px;';
			lib.translate.junfa = '军法';
			lib.translate.junfa1 = '军法一';
			lib.translate.junfa1_bg = `<img src="${ASSET_URL}洪荒ol/image/junfa.jpg" style="width: 40px; height: 40px;">`;
			lib.translate.junfa1_info = '若被执行,执行者受到发起者选择的一名角色的一点伤害,并选择弃置一张牌';
			lib.translate.junfa2 = '军法二';
			lib.translate.junfa2_bg = `<img src="${ASSET_URL}洪荒ol/image/junfa.jpg" style="width: 40px; height: 40px;">`;
			lib.translate.junfa2_info = '若被执行,执行者摸一张牌,发起者观看并获得执行者两张牌';
			lib.translate.junfa3 = '军法三';
			lib.translate.junfa3_bg = `<img src="${ASSET_URL}洪荒ol/image/junfa.jpg" style="width: 40px; height: 40px;">`;
			lib.translate.junfa3_info = '若被执行,执行者失去一点体力';
			lib.translate.junfa4 = '军法四';
			lib.translate.junfa4_bg = `<img src="${ASSET_URL}洪荒ol/image/junfa.jpg" style="width: 40px; height: 40px;">`;
			lib.translate.junfa4_info = '若被执行,直到回合结束,执行者不能使用或打出手牌';
			lib.translate.junfa4_eff = '军法四';
			lib.translate.junfa5 = '军法五';
			lib.translate.junfa5_bg = `<img src="${ASSET_URL}洪荒ol/image/junfa.jpg" style="width: 40px; height: 40px;">`;
			lib.translate.junfa5_info = '若被执行,执行者将武将牌翻面';
			lib.translate.junfa6 = '军法六';
			lib.translate.junfa6_bg = `<img src="${ASSET_URL}洪荒ol/image/junfa.jpg" style="width: 40px; height: 40px;">`;
			lib.translate.junfa6_info = '若被执行,执行者选择一张手牌,弃置其余的牌';
			lib.element.player.tpline = function (target, name, time) {
				if (get.itemtype(target) == 'players') {
					for (var i of target) {
						this.tpline(i, name, time);
					}
				} else if (get.itemtype(target) == 'player') {
					if (target == this) return;
					game.addVideo('line', this, [target.dataset.position, name, time]);
					game.tpline(target, name, time);
				}
			};
			lib.element.player.wzline = function (target, text, fontSize, delay) {
				if (get.itemtype(target) == 'players') {
					for (var i = 0; i < target.length; i++) {
						this.wzline(target[i], text, fontSize, delay);
					}
				} else if (get.itemtype(target) == 'player') {
					if (target == this) return;
					game.broadcast(
						function (player, target) {
							player.wzline(target, text, fontSize, delay);
						},
						this,
						target
					);
					game.addVideo('line', this, [target.dataset.position]);
					game.wzline(target, text, fontSize, delay);
				}
			};
			lib.element.content.chooseJunlingFor = function () {
				'step 0';
				var list = ['junling1', 'junling2', 'junling3', 'junling4', 'junling5', 'junling6', 'junling7', 'junling8', 'junling9', 'junling10'];
				//list=list.randomGets(2).sort();
				for (var i = 0; i < list.length; i++) list[i] = ['军令', '', list[i]];
				var prompt = event.prompt || '选择一张军令牌';
				if (target != undefined && !event.prompt) {
					var str = target == player ? '(你)' : '';
					prompt += ',令' + get.translation(target) + str + '选择执行';
				}
				player.chooseButton([prompt, [list, 'vcard']], true).set('ai', function (button) {
					return get.junlingEffect(player, button.link[2], target, [], player);
				});
				('step 1');
				event.result = {
					junling: result.links[0][2],
				};
			};
			lib.element.content.chooseJunlingControl = function () {
				'step 0';
				var dialog = ui.create.dialog('hidden');
				var str1 = source == player ? '(你)' : '';
				var str2 = event.targets ? '(被指定的角色为' + get.translation(event.targets) + ')' : '';
				if (!event.prompt) dialog.add(get.translation(event.source) + str1 + '选择的军令' + str2 + '为');
				else {
					dialog.add(event.prompt);
					dialog.addText(get.translation(event.source) + str1 + '选择的军令' + str2 + '为');
				}
				dialog.add([[event.junling], 'vcard']);
				var controls = [];
				if (event.choiceList) {
					for (var i = 0; i < event.choiceList.length; i++) {
						dialog.add('<div class="popup text" style="width:calc(100% - 10px);display:inline-block">选项' + get.cnNumber(i + 1, true) + ':' + event.choiceList[i] + '</div>');
						controls.push('选项' + get.cnNumber(i + 1, true));
					}
				} else if (event.controls) controls = event.controls;
				else controls = ['执行该军令', '不执行该军令'];
				if (!event.ai) event.ai = Math.floor(controls.length * Math.random());
				player.chooseControl(controls).set('dialog', dialog).set('ai', event.ai);
				('step 1');
				event.result = {
					index: result.index,
					control: result.control,
				};
			};
			lib.element.content.carryOutJunling = function () {
				'step 0';
				switch (event.junling) {
					case 'junling1': {
						game.filterPlayer(function (current) {
							return current.isEnemiesOf(player);
						}).map((i) => i.damage());
						break;
					}
					case 'junling2':
						player.draw(4);
						event.num = 1;
						break;
					case 'junling3':
						player.recover();
						break;
					case 'junling4':
						player.gain(
							['sha', 'jiu'].map((i) => game.createCard(i)),
							'draw'
						);
						break;
					case 'junling5':
						player.phase('nodelay');
						break;
					case 'junling7':
						player.gainMaxHp();
						break;
					case 'junling8':
						player.changeHujia();
						break;
					case 'junling9':
						player.gain([game.createCard(get.typeCard('trick').randomGet()), game.createCard(get.typeCard('trick').randomGet())], 'draw');
						break;
					case 'junling10':
						player.draw(4);
						break;
				}
				('step 1');
				if (event.junling == 'junling2' && source != player) player.chooseCard('交给' + get.translation(source) + '第' + get.cnNumber(event.num) + '张牌(共两张)', 'he', true);
				if (event.junling == 'junling6') {
					var position = '',
						num0 = 0;
					if (player.countCards('h')) {
						position += 'h';
						num0++;
					}
					if (player.countCards('e')) {
						position += 'e';
						num0++;
					}
					player.chooseCard(
						'选择一张手牌和一张装备区内牌(若有),执行者获得这两张牌的复制',
						position,
						num0,
						function (card) {
							if (ui.selected.cards.length) return get.position(card) != get.position(ui.selected.cards[0]);
							return true;
						},
						true
					);
				}
				('step 2');
				if (event.junling == 'junling2' && source != player) {
					source.gain(result.cards, player);
					player.$give(1, source);
					event.num++;
					if (event.num < 3) event.goto(1);
				}
				if (event.junling == 'junling6') {
					var cards = player.getCards('he');
					source.gain(
						result.cards.map((i) => game.createCard(i)),
						'draw'
					);
				}
			};
			lib.element.player.chooseJunlingFor = function (target) {
				var next = game.createEvent('chooseJunlingFor');
				next.player = this;
				next.target = target;
				next.setContent('chooseJunlingFor');
				return next;
			};
			lib.element.player.chooseJunlingControl = function (source, junling, targets) {
				var next = game.createEvent('chooseJunlingControl');
				next.player = this;
				next.source = source;
				next.junling = junling;
				if (targets.length) next.targets = targets;
				next.setContent('chooseJunlingControl');
				return next;
			};
			lib.element.player.carryOutJunling = function (source, junling, targets) {
				var next = game.createEvent('carryOutJunling');
				next.source = source;
				next.player = this;
				if (targets.length) next.targets = targets;
				next.junling = junling;
				next.setContent('carryOutJunling');
				return next;
			};
			lib.translate.junling = '军令';
			lib.translate.junling1 = '军令一';
			lib.translate.junling1_bg = `<img src="extension/洪荒ol/image/junling军令1.jpg" style="width: 40px; height: 40px;">`;
			lib.translate.junling1_info = '若被执行,执行者对执行者全部敌方角色造成一点伤害'; //发起者
			lib.translate.junling2 = '军令二';
			lib.translate.junling2_bg = `<img src="extension/洪荒ol/image/junling军令2.jpg" style="width: 40px; height: 40px;">`;
			lib.translate.junling2_info = '若被执行,执行者摸4张牌,依次交给发起者两张牌';
			lib.translate.junling3 = '军令三';
			lib.translate.junling3_bg = `<img src="extension/洪荒ol/image/junling军令3.jpg" style="width: 40px; height: 60px;">`;
			lib.translate.junling3_info = '若被执行,执行者回复一点体力';
			lib.translate.junling4 = '军令四';
			lib.translate.junling4_bg = `<img src="extension/洪荒ol/image/junling军令4.jpg" style="width: 40px; height: 60px;">`;
			lib.translate.junling4_info = '若被执行,执行者获得一张杀和酒';
			lib.translate.junling4_eff = '军令四';
			lib.translate.junling5 = '军令五';
			lib.translate.junling5_bg = `<img src="extension/洪荒ol/image/junling军令5.jpg" style="width: 40px; height: 60px;">`;
			lib.translate.junling5_info = '若被执行,执行者将获得一个额外回合';
			lib.translate.junling6 = '军令六';
			lib.translate.junling6_bg = `<img src="extension/洪荒ol/image/junling军令6.jpg" style="width: 40px; height: 60px;">`;
			lib.translate.junling6_info = '若被执行,执行者选择一张手牌和一张装备区内牌(若有),你获得这些牌的复制';
			lib.translate.junling7 = '军令七';
			lib.translate.junling7_bg = `<img src="extension/洪荒ol/image/junling军令7.jpg" style="width: 40px; height: 40px;">`;
			lib.translate.junling7_info = '若被执行,执行者增加一点体力上限';
			lib.translate.junling8 = '军令八';
			lib.translate.junling8_bg = `<img src="extension/洪荒ol/image/junling军令8.jpg" style="width: 40px; height: 60px;">`;
			lib.translate.junling8_info = '若被执行,执行者增加一点护甲';
			lib.translate.junling9 = '军令九';
			lib.translate.junling9_bg = `<img src="extension/洪荒ol/image/junling军令9.jpg" style="width: 40px; height: 40px;">`;
			lib.translate.junling9_info = '若被执行,执行者获得两张随机普通锦囊牌';
			lib.translate.junling10 = '军令十';
			lib.translate.junling10_bg = `<img src="extension/洪荒ol/image/junling军令10.jpg" style="width: 40px; height: 40px;">`;
			lib.translate.junling10_info = '若被执行,执行者摸4张牌';
			if (config.jstxjisha) {
				lib.skill._jstx_jisha = {
					trigger: {
						source: 'dieBegin',
					},
					forced: true,
					_priority: 2021,
					content() {
						//QQQ
						player.storage.jstx_jisha = player.storage.jstx_jisha + 1 || 1;
						if (player.storage.jstx_jisha == 1) {
							player.$fullscreenpop('一血  初露锋芒', 'fire');
							game.playjstx('jstx_jisha1');
						}
						if (player.storage.jstx_jisha == 2) {
							player.$fullscreenpop('双杀  一战成名', 'water');
							game.playjstx('jstx_jisha2');
						}
						if (player.storage.jstx_jisha == 3) {
							player.$fullscreenpop('三杀  举世皆惊', 'thunder');
							game.playjstx('jstx_jisha3');
						}
						if (player.storage.jstx_jisha == 4) {
							player.$fullscreenpop('四杀  天下无敌', 'fire');
							game.playjstx('jstx_jisha4');
						}
						if (player.storage.jstx_jisha == 5) {
							player.$fullscreenpop('五杀  诛天灭地', 'thunder');
							game.playjstx('jstx_jisha5');
						}
						if (player.storage.jstx_jisha == 6) {
							player.$fullscreenpop('六杀  癫狂杀戮', 'water');
							game.playjstx('jstx_jisha6');
						}
						if (player.storage.jstx_jisha == 7) {
							player.$fullscreenpop('无双  万军取首', 'fire');
							game.playjstx('jstx_jisha7');
						}
					},
				};
				lib.skill._jstxmiaoshouhuichun = {
					trigger: { global: 'xmiaoshou' },
					filter(event, player) {
						return event.player == player;
					},
					_priority: 100,
					forced: true,
					content() {
						trigger.player.$fullscreenpop('妙手回春', 'water');
						game.playjstx('jstxmiaoshouhuichun');
					},
				};
				lib.skill._jstxyishugaochao = {
					trigger: { global: 'xyishu' },
					filter(event, player) {
						return event.player == player;
					},
					_priority: 100,
					forced: true,
					content() {
						trigger.player.$fullscreenpop('医术高超', 'water');
						game.playjstx('jstxyishugaochao');
					},
				};
				lib.skill._recovertrigger = {
					trigger: { global: 'recoverEnd' },
					filter(event, player) {
						if (_status.currentPhase != player) {
							return event.player != event.source && event.source == player;
						}
						return true;
					},
					forced: true,
					content() {
						if (_status.currentPhase != player) {
							_status.event.trigger('xmiaoshou');
						} else {
							if (player.storage.jstxyishugaochao == undefined) {
								player.storage.jstxyishugaochao = trigger.num;
							} else {
								player.storage.jstxyishugaochao += trigger.num;
							}
							if (player.storage.jstxyishugaochao >= 3) {
								player.storage.jstxyishugaochao -= 3;
								_status.event.trigger('xyishu');
							}
						}
					},
					group: '_recovertrigger_Delete',
					subSkill: {
						Delete: {
							trigger: { player: 'phaseEnd' },
							forced: true,
							content() {
								delete player.storage.jstxyishugaochao;
							},
						},
					},
				};
			}
			if (config.xjstxjishatexiao) {
				lib.skill._jstx_jisha = {
					trigger: {
						source: 'dieBegin',
					},
					forced: true,
					_priority: 2021,
					content() {
						//QQQ
						player.storage.jstx_jisha = player.storage.jstx_jisha + 1 || 1;
						if (player.storage.xjstx_jisha == 1) {
							player.$skill('初露锋芒', 'fire', 'red', 'avatar');
							game.playjstx('jstx_jisha1');
						}
						if (player.storage.xjstx_jisha == 2) {
							player.$skill('一战成名', 'fire', 'red', 'avatar');
							game.playjstx('jstx_jisha2');
						}
						if (player.storage.xjstx_jisha == 3) {
							player.$skill('举世皆惊', 'thunder', 'red', 'avatar');
							game.playjstx('jstx_jisha3');
						}
						if (player.storage.xjstx_jisha == 4) {
							player.$skill('天下无敌', 'fire', 'red', 'avatar');
							game.playjstx('jstx_jisha4');
						}
						if (player.storage.xjstx_jisha == 5) {
							player.$skill('诛天灭地', 'fire', 'red', 'avatar');
							game.playjstx('jstx_jisha5');
						}
						if (player.storage.xjstx_jisha == 6) {
							player.$skill('癫狂杀戮', 'thunder', 'red', 'avatar');
							game.playjstx('jstx_jisha6');
						}
						if (player.storage.xjstx_jisha == 7) {
							player.$skill('万军取首', 'fire', 'red', 'avatar');
							game.playjstx('jstx_jisha7');
						}
					},
				};
				lib.skill._jstxmiaoshouhuichun = {
					trigger: { global: 'xmiaoshou' },
					filter(event, player) {
						return event.player == player;
					},
					_priority: 100,
					forced: true,
					content() {
						trigger.player.$fullscreenpop('妙手回春', 'water');
						game.playjstx('jstxmiaoshouhuichun');
					},
				};
				lib.skill._jstxyishugaochao = {
					trigger: { global: 'xyishu' },
					filter(event, player) {
						return event.player == player;
					},
					_priority: 100,
					forced: true,
					content() {
						trigger.player.$fullscreenpop('医术高超', 'water');
						game.playjstx('jstxyishugaochao');
					},
				};
				lib.skill._recovertrigger = {
					trigger: { global: 'recoverEnd' },
					filter(event, player) {
						if (_status.currentPhase != player) {
							return event.player != event.source && event.source == player;
						}
						return true;
					},
					forced: true,
					content() {
						if (_status.currentPhase != player) {
							_status.event.trigger('xmiaoshou');
						} else {
							if (player.storage.jstxyishugaochao == undefined) {
								player.storage.jstxyishugaochao = trigger.num;
							} else {
								player.storage.jstxyishugaochao += trigger.num;
							}
							if (player.storage.jstxyishugaochao >= 3) {
								player.storage.jstxyishugaochao -= 3;
								_status.event.trigger('xyishu');
							}
						}
					},
					group: '_recovertrigger_Delete',
					subSkill: {
						Delete: {
							trigger: { player: 'phaseEnd' },
							forced: true,
							content() {
								delete player.storage.jstxyishugaochao;
							},
						},
					},
				};
			}
			lib.group.push('qinshili');
			lib.translate.qinshili = '<span style=\"color: #cc0099\">秦</span>';
			lib.group.push('jinshili');
			lib.translate.jinshili = '<span style=\"color:  #4B0082;\">晋</span>';
			lib.group.push('moshili');
			lib.translate.yaoshili = `<img src="extension/洪荒ol/image/moshilitp.jpg" width="33" height="33">`;
			lib.group.push('yaoshili');
			lib.translate.yaoshili = `<img src="extension/洪荒ol/image/yaoshilitp.jpg" width="30" height="30">`;
			lib.group.push('guishili');
			lib.translate.guishili = `<img src="extension/洪荒ol/image/guishilitp.jpg" width="30" height="30">`;
			lib.group.push('shengshili');
			lib.translate.shengshili = `<img src="extension/洪荒ol/image/shengshilitp.jpg" width="30" height="30">`;
			lib.group.push('xianshili');
			lib.translate.xianshili = `<img src="extension/洪荒ol/image/xianshilitp.jpg" width="30" height="30">`;
			lib.group.push('yeshili');
			lib.translate.yeshili = `<img src="extension/洪荒ol/image/yeshili.jpg" width="30" height="30">`;
			lib.group.push(...['qinjianguo', 'qijianguo', 'chujianguo', 'yanjianguo', 'zhaojianguo', 'hanjianguo', 'jinjianguo', 'xiajianguo', 'shangjianguo', 'zhoujianguo', 'liangjianguo', 'jinxjianguo']);
			const jianguoshili = ['qinjianguo', 'qijianguo', 'chujianguo', 'yanjianguo', 'zhaojianguo', 'hanjianguo', 'jinjianguo', 'xiajianguo', 'shangjianguo', 'zhoujianguo', 'liangjianguo', 'jinxjianguo'];
			['ly_junshenbao_sociatyBeast', 'ly_junShenChallenge', 'wang', 'xian'].map((i) => lib.group.splice(lib.group.indexOf(i), 1));
			// const jgsltranslation = [`<img src="extension/洪荒ol/image/jianguoshili.jpg" style="width: 30px; height: 30px;background-size: 150px 90px; background-position: 0px 0px;">`,
			// `<img src="extension/洪荒ol/image/jianguoshili.jpg" style="width: 30px; height: 30px;background-size: 30px 30px; background-position: -30px 0px;">`,
			// `<img src="extension/洪荒ol/image/jianguoshili.jpg" style="width: 30px; height: 30px;background-size: 30px 30px; background-position: -60px 0px;">`,
			// `<img src="extension/洪荒ol/image/jianguoshili.jpg" style="width: 30px; height: 30px;background-size: 30px 30px; background-position: -90px 0px;">`,
			// `<img src="extension/洪荒ol/image/jianguoshili.jpg" style="width: 30px; height: 30px;background-size: 30px 30px; background-position: -120px 0px;">`,
			// `<img src="extension/洪荒ol/image/jianguoshili.jpg" style="width: 30px; height: 30px;background-size: 30px 30px; background-position: 0px -30px;">`,
			// `<img src="extension/洪荒ol/image/jianguoshili.jpg" style="width: 30px; height: 30px;background-size: 30px 30px; background-position: -30px -30px;">`,
			// `<img src="extension/洪荒ol/image/jianguoshili.jpg" style="width: 30px; height: 30px;background-size: 30px 30px; background-position: -60px -30px;">`,
			// `<img src="extension/洪荒ol/image/jianguoshili.jpg" style="width: 30px; height: 30px;background-size: 30px 30px; background-position: -90px -30px;">`,
			// `<img src="extension/洪荒ol/image/jianguoshili.jpg" style="width: 30px; height: 30px;background-size: 30px 30px; background-position: -120px -30px;">`,
			// `<img src="extension/洪荒ol/image/jianguoshili.jpg" style="width: 30px; height: 30px;background-size: 30px 30px; background-position: 0px -60px;">`,
			// `<img src="extension/洪荒ol/image/jianguoshili.jpg" style="width: 30px; height: 30px;background-size: 30px 30px; background-position: -30px -60px;">`,
			// ];
			jianguoshili.forEach((key, index) => {
				lib.translate[key] = `<img src="extension/洪荒ol/image/yeshilijg${index + 1}.jpg" width="30" height="30">`;
			});
			game.addNature('jinsx', '金', {
				linked: true,
				order: 1000,
			}); //添加杀的属性
			game.addNature('musx', '木', {
				linked: true,
				order: 1000,
			}); //添加杀的属性
			game.addNature('shuisx', '水', {
				linked: true,
				order: 1000,
			}); //添加杀的属性
			game.addNature('tusx', '土', {
				linked: true,
				order: 1000,
			}); //添加杀的属性
			game.addNature('fengsx', '风', {
				linked: true,
				order: 1000,
			}); //添加杀的属性
			game.addNature('bingsx', '冰', {
				linked: true,
				order: 1000,
			}); //添加杀的属性
			game.addNature('xuesx', '血', {
				linked: true,
				order: 1000,
			}); //添加杀的属性
			game.addNature('cisx', '刺', {
				linked: true,
				order: 1000,
			}); //添加杀的属性
			game.addNature('shensx', '神', {
				linked: true,
				order: 1000,
			}); //添加杀的属性
		},
		precontent() {
			lib.init.css(`extension/洪荒ol/`, 'videoQujian');
			lib.init.css(`extension/洪荒ol/`, 'liejiu');
			lib.init.css(`extension/洪荒ol/`, 'bingjiu');
			lib.init.css(`extension/洪荒ol/`, 'tplinexy');
			//lib.translate.heart = `<img src="extension/洪荒ol/icons/♥️️.png" width="15" height="15">`;
			//lib.translate.diamond = `<img src="extension/洪荒ol/icons/♦️️.png" width="15" height="15">`;
			//lib.translate.spade = `<img src="extension/洪荒ol/icons/♠️️.png" width="15" height="15">`;
			//lib.translate.club = `<img src="extension/洪荒ol/icons/♣️️.png" width="15" height="15">`;
			game.playjstx = function (fn, dir, sex) {
				if (lib.config.background_speak) {
					if (dir && sex) game.playAudio(dir, sex, fn);
					else if (dir) game.playAudio(dir, fn);
					else game.playAudio('../extension/洪荒ol/audio', fn);
				}
			};
			game.linexyrgbl = function (target, options = {}) {
				var path = [this.offsetLeft + this.offsetWidth / 2, this.offsetTop + this.offsetHeight / 2, target.offsetLeft + target.offsetWidth / 2, target.offsetTop + target.offsetHeight / 2];
				var from = [path[0], path[1]];
				var to = [path[2], path[3]];
				var total = options.duration || lib.config.duration * 2;
				var opacity = options.opacity || 1;
				var color = options.color || [255, 255, 255];
				var dashed = options.dashed || false;
				var drag = options.drag || false;
				var brightness = options.brightness || 1;
				if (color == 'fire') {
					color = [255, 146, 68];
				} else if (color == 'thunder') {
					color = [141, 216, 255];
				} else if (color == 'green') {
					color = [141, 255, 216];
				}
				var node;
				if (drag) {
					color = [236, 201, 71];
					if (options.node) {
						node = options.node;
					} else {
						node = ui.create.div('.linexy.drag');
						node.style.left = from[0] + 'px';
						node.style.top = from[1] + 'px';
						node.style.background = `linear-gradient(transparent,rgba(${color},${opacity}),rgba(${color},${opacity})) `;
						node.style.filter = `brightness(${brightness})`;
						if (game.chess) {
							ui.chess.appendChild(node);
						} else {
							ui.arena.appendChild(node);
						}
					}
				} else {
					node = ui.create.div('.linexy.hidden');
					node.style.left = from[0] + 'px';
					node.style.top = from[1] + 'px';
					node.style.background = `linear-gradient(transparent,rgba(${color},${opacity}),rgba(${color},${opacity})) `;
					node.style.filter = `brightness(${brightness})`;
					node.style.transitionDuration = total / 3000 + 's';
				}
				var dy = to[1] - from[1];
				var dx = to[0] - from[0];
				var deg = (Math.atan(Math.abs(dy) / Math.abs(dx)) / Math.PI) * 180;
				if (dx >= 0) {
					if (dy <= 0) {
						deg += 90;
					} else {
						deg = 90 - deg;
					}
				} else {
					if (dy <= 0) {
						deg = 270 - deg;
					} else {
						deg += 270;
					}
				}
				if (drag) {
					node.style.transform = `rotate(${-deg}deg)`;
					node.style.height = get.xyDistance(from, to) + 'px';
				} else {
					node.style.transform = `rotate(${-deg}deg) scaleY(0)`;
					node.style.height = get.xyDistance(from, to) + 'px';
					if (game.chess) {
						ui.chess.appendChild(node);
					} else {
						ui.arena.appendChild(node);
					}
					ui.refresh(node);
					node.show();
					node.style.transform = `rotate(${-deg}deg) scaleY(1)`;
					node.listenTransition(function () {
						setTimeout(function () {
							if (node.classList.contains('removing')) return;
							node.delete();
						}, total / 3);
					});
				}
				return node;
			};
			game.wzline = function (target, text, fontSize, delay) {
				var path = [this.offsetLeft + this.offsetWidth / 2, this.offsetTop + this.offsetHeight / 2, target.offsetLeft + target.offsetWidth / 2, target.offsetTop + target.offsetHeight / 2];
				var from = [path[0], path[1]];
				var to = [path[2], path[3]];
				var dy = to[1] - from[1];
				var dx = to[0] - from[0];
				var deg = (Math.atan(Math.abs(dy) / Math.abs(dx)) / Math.PI) * 180;
				if (dx >= 0) {
					if (dy <= 0) {
						deg += 90;
					} else {
						deg = 90 - deg;
					}
				} else {
					if (dy <= 0) {
						deg = 270 - deg;
					} else {
						deg += 270;
					}
				}
				var div = document.createElement('div');
				div.style.cssText = `
                    width: 20px;
				    height: ${20 * text.length}px;
				    pointer-events: none;
				    position: absolute;
				    z-index: 6;
			        `;
				div.style.fontSize = fontSize + 'px';
				div.style.fontFamily = 'xinwei';
				div.style.writingMode = 'vertical-rl';
				div.style.textAlign = 'justify';
				div.style.left = from[0] - 20 / 2 + 'px';
				div.style.top = from[1] - (20 * text.length) / 2 + 'px';
				div.style.transform = `rotate(${-deg}deg)`;
				for (var i = text.length - 1; i >= 0; i--) {
					const span = document.createElement('span');
					span.style.color = 'white';
					span.textContent = text[i];
					div.appendChild(span);
				}
				ui.window.appendChild(div);
				setTimeout(function () {
					div.style.left = to[0] - 20 / 2 + 'px';
					div.style.top = to[1] - (20 * text.length) / 2 + 'px';
					setTimeout(
						function () {
							ui.window.removeChild(div);
						},
						(text.length + 1) * delay + 2000
					);
				}, 300);
				return div;
			};
			game.tpline = function (target, name, time) {
				var path = [this.offsetLeft + this.offsetWidth / 2, this.offsetTop + this.offsetHeight / 2, target.offsetLeft + target.offsetWidth / 2, target.offsetTop + target.offsetHeight / 2];
				var from = [path[0], path[1]];
				var to = [path[2], path[3]];
				var dy = to[1] - from[1];
				var dx = to[0] - from[0];
				var deg = (Math.atan(Math.abs(dy) / Math.abs(dx)) / Math.PI) * 180 + (43 * Math.PI) / 180;
				if (dx >= 0) {
					if (dy <= 0) {
						deg += 90;
					} else {
						deg = 90 - deg;
					}
				} else {
					if (dy <= 0) {
						deg = 270 - deg;
					} else {
						deg += 270;
					}
				}
				return game.JPG(name, time);
			};
			game.JPG = function (Q, time) {
				var img = document.createElement('img');
				img.src = 'extension/洪荒ol/image/' + Q + '.jpg';
				img.style.height = '100%';
				img.style.width = '100%';
				img.style.zIndex = '999';
				img.style.position = 'fixed'; // 添加固定定位,使视频覆盖全屏
				img.style.objectFit = 'cover'; // 保持视频宽高比并填充容器,可能会裁剪
				img.style.left = '0';
				img.style.right = '0';
				document.body.appendChild(img);
				var timeout = setTimeout(function () {
					img.remove();
				}, time);
				img.addEventListener('error', function () {
					clearTimeout(timeout);
					img.remove();
				});
				return img;
			}; //播放GIF
			game.GIF = function (Q, time) {
				var img = document.createElement('img');
				img.src = 'extension/洪荒ol/' + Q + '.gif';
				img.style.height = '100%';
				img.style.width = '100%';
				img.style.zIndex = '999';
				img.style.position = 'fixed'; // 添加固定定位,使视频覆盖全屏
				img.style.objectFit = 'cover'; // 保持视频宽高比并填充容器,可能会裁剪
				img.style.left = '0';
				img.style.right = '0';
				document.body.appendChild(img);
				var timeout = setTimeout(function () {
					img.remove();
				}, time);
				img.addEventListener('error', function () {
					clearTimeout(timeout);
					img.remove();
				});
				return img;
			}; //播放GIF
			game.mp4 = async function (Q) {
				return new Promise((resolve) => {
					const video = document.createElement('video');
					video.src = `extension/洪荒ol/mp4/${Q}.mp4`;
					video.style.cssText = 'z-index: 999; height: 100%; width: 100%; position: fixed; object-fit: cover; left: 0; right: 0; pointer-events: none;';
					video.autoplay = true;
					video.loop = false;
					const backButton = document.createElement('div');
					backButton.innerHTML = '返回游戏'; //文字内容
					backButton.style.cssText = 'z-index: 999; position: absolute; bottom: 10px; right: 10px; color: red; font-size: 16px; padding: 5px 10px; background: rgba(0, 0, 0, 0.3);';
					backButton.onclick = function () {
						backButton.remove();
						video.remove();
						resolve();
					}; //设置返回按钮的点击事件
					document.body.appendChild(video);
					document.body.appendChild(backButton);
					video.addEventListener('error', function () {
						backButton.remove();
						video.remove();
						resolve();
					});
					video.addEventListener('ended', function () {
						backButton.remove();
						video.remove();
						resolve();
					});
				});
			}; //播放mp4
			get.junfaEffect = function (source, junfa, performer, targets, viewer) {
				var att1 = get.attitude(viewer, source),
					att2 = get.attitude(viewer, performer);
				var eff1 = 0,
					eff2 = 0;
				switch (junfa) {
					case 'junfa1': {
						if (
							!targets.length &&
							game.countPlayer(function (current) {
								return get.damageEffect(viewer, current, viewer) > 0;
							})
						)
							eff1 = 2;
						else {
							if (get.damageEffect(targets[0], performer, source) >= 0) eff1 = 2;
							else eff1 = -2;
							if (get.damageEffect(targets[0], source, performer) >= 0) eff2 = 2;
							else eff2 = -2;
						}
						break;
					}
					case 'junfa2': {
						if (performer.countCards('he')) {
							eff1 = 1;
							eff2 = 0;
						} else {
							eff1 = 2;
							eff2 = -1;
						}
						break;
					}
					case 'junfa3': {
						if (
							performer.hp == 1 &&
							!performer.countCards('h', function (card) {
								return get.tag(card, save);
							}) &&
							!player.hasSkillTag('save', true)
						)
							eff2 = -5;
						else {
							if (performer == viewer) {
								if (performer.hasSkillTag('maihp', true)) eff2 = 3;
								else eff2 = -2;
							} else {
								if (performer.hasSkillTag('maihp', false)) eff2 = 3;
								else eff2 = -2;
							}
						}
						break;
					}
					case 'junfa4':
						eff1 = 0;
						eff2 = -2;
						break;
					case 'junfa5': {
						var td = performer.isTurnedOver();
						if (td) {
							if (performer == viewer) {
								if (_status.currentPhase == performer && performer.hasSkill('jushou')) eff2 = -3;
								else eff2 = 3;
							} else eff2 = 3;
						} else {
							if (performer == viewer) {
								if (performer.hasSkillTag('noturn', true)) eff2 = 0;
								else eff2 = -3;
							} else {
								if (performer.hasSkillTag('noturn', false)) eff2 = 0;
								else eff2 = -3;
							}
						}
						break;
					}
					case 'junfa6': {
						if (performer.countCards('h') > 1) eff2 += 1 - performer.countCards('h');
						if (performer.countCards('e') > 1) eff2 += 1 - performer.countCards('e');
						break;
					}
				}
				return Math.sign(att1) * eff1 + Math.sign(att2) * eff2;
			};
			get.junlingEffect = function (source, junling, performer, targets, viewer) {
				var att1 = get.attitude(viewer, source),
					att2 = get.attitude(viewer, performer);
				var eff1 = 0,
					eff2 = 0;
				switch (junling) {
					case 'junling1': {
						if (
							!targets.length &&
							game.countPlayer(function (current) {
								return get.damageEffect(viewer, current, viewer) > 0;
							})
						)
							eff1 = 2;
						else {
							if (get.damageEffect(targets[0], performer, source) >= 0) eff1 = 2;
							else eff1 = -2;
							if (get.damageEffect(targets[0], source, performer) >= 0) eff2 = 2;
							else eff2 = -2;
						}
						break;
					}
					case 'junling2': {
						if (performer.countCards('he')) {
							eff1 = 1;
							eff2 = 0;
						} else {
							eff1 = 2;
							eff2 = -1;
						}
						break;
					}
					case 'junling3': {
						if (
							performer.hp == 1 &&
							!performer.countCards('h', function (card) {
								return get.tag(card, save);
							}) &&
							!player.hasSkillTag('save', true)
						)
							eff2 = -5;
						else {
							if (performer == viewer) {
								if (performer.hasSkillTag('maihp', true)) eff2 = 3;
								else eff2 = -2;
							} else {
								if (performer.hasSkillTag('maihp', false)) eff2 = 3;
								else eff2 = -2;
							}
						}
						break;
					}
					case 'junling4':
						eff1 = 0;
						eff2 = -2;
						break;
					case 'junling5': {
						var td = performer.isTurnedOver();
						if (td) {
							if (performer == viewer) {
								if (_status.currentPhase == performer && performer.hasSkill('jushou')) eff2 = -3;
								else eff2 = 3;
							} else eff2 = 3;
						} else {
							if (performer == viewer) {
								if (performer.hasSkillTag('noturn', true)) eff2 = 0;
								else eff2 = -3;
							} else {
								if (performer.hasSkillTag('noturn', false)) eff2 = 0;
								else eff2 = -3;
							}
						}
						break;
					}
					case 'junling6': {
						if (performer.countCards('h') > 1) eff2 += 1 - performer.countCards('h');
						if (performer.countCards('e') > 1) eff2 += 1 - performer.countCards('e');
						break;
					}
				}
				return Math.sign(att1) * eff1 + Math.sign(att2) * eff2;
			};
			game.import('character', function (lib, game, ui, get, ai, _status) {
				const QQQ = {
					name: '洪荒ol',
					connect: true,
					character: {
						zhugelianggxhy: ['male', 'shu', 4, ['星辰', '晨雾', '暴风'], []],
						simayidyzd: ['male', 'wei', 6, ['konghunpi', 'duanyu', '反噬'], []],
						lingjuqqwz艳绝无双: ['female', 'qun', 6, ['qqwz仇绝', 'qqwz前尘'], []],
						baosi: ['female', 'qun', 9, ['惑妃', '幽爱'], []],
						lingju魂牵梦萦: ['female', 'qun', 7, ['劫缘', '结缘', '焚心'], ['boss', 'bossallowed'], []],
						jiutianxuannv: ['female', 'qun', 7, ['九天', '帝师', '玄烈'], ['boss', 'bossallowed'], []],
						lvlingqi炽焱流金: ['female', 'qun', 8, ['帼武', '妆戎'], []],
						wanniangongzhu剑心汉胆: ['female', 'qun', 7, ['兴汉', '枕戈'], []],
						zhangrang滔乱天常: ['male', 'qun', 7, ['乱惑'], []],
						xiaotao小桃: ['female', 'qun', 7, ['桃宴', '妍丽'], []],
						xizhicai忠魏河山: ['male', 'wei', 7, ['先辅zwhs', '筹策zwhs', '妒才zwhs'], []],
						yueguishu月桂树: ['male', 'qun', 7, ['月桂'], []],
						gonggong水神共工: ['male', 'qun', 8, ['决洪', 'boss_shenyi'], []],
						luocha罗刹: ['female', 'qun', 12, ['丹术', '魔道', '魔箭', '刹幽'], []],
						kuafu夸父: ['male', 'qun', 12, ['逐日', '饮江', '烈奔', '躯化'], []],
						fuxi伏羲: ['male', 'qun', 8, ['青仪', '伏卦', 'boss_shenyi'], []],
						yingzhao英招: ['male', 'qun', 14, ['游寻', '封域', '妖兽', '司圃'], []],
						zhangjiaoBOSS张角: ['male', 'qun', 14, ['雷狱', '神术', '鬼道_guidao', '道转'], []],
						hetaihou鸩毒除患: ['female', 'qun', 7, ['鸩毒zd', '戚乱ql'], []],
						zhaoxiang沙场芳魂: ['female', 'shu', 8, ['fh扶fh汉', 'fh芳fh魂'], []],
						fububanzang: ['male', 'qun', 8, ['残影刺刃', '桔疾风印', '魅影暗雾', '暗影猎杀'], []],
						zhangfei气贯长虹: ['male', 'shu', 8, ['咆哮paoxiao', '替身tishen', '断喝duanhe'], ['boss', 'bossallowed'], []],
						zhangfei傲睨山河: ['male', 'shu', 8, ['咆哮paoxiao', '替身tishen', '洪荒神裁', '巡使'], ['boss', 'bossallowed'], []],
						zhangqiying岁稔年丰: ['female', 'qun', 7, ['fazqy法zhuanzqy箓', 'dianzqy点huazqy化', 'zhenzqy真yizqy仪'], ['boss', 'bossallowed'], []],
						goujian勾践: ['male', 'qun', 8, ['隐忍图强', '卧薪尝胆', '越甲吞吴'], []],
						zhugeliang龙跃凤鸣: ['male', 'shu', 8, ['火谋', '奇阵', '破计'], ['boss', 'bossallowed'], []],
						jingwei精卫: ['female', 'qun', 7, ['衔木', '填海'], []],
						diaochan忧君难寐: ['female', 'qun', 7, ['lijianyjnm', 'biyueyjnm', 'pianyiyjnm'], []],
						zhouyu江淮之杰: ['male', 'wu', 7, ['yingzijhzj', '反間'], ['boss', 'bossallowed'], []],
						yuershen于儿神: ['male', 'qun', 8, ['挽蛇', '江澜', '巡潭', '闪麟'], []],
						hepo河泊: ['male', 'qun', 8, ['掌川', '潇姿', '泊澜', '尊清'], []],
						xiaosha小杀: ['female', 'qun', 7, ['瑰杀', '姝丽'], []],
						xiaoshan小闪: ['female', 'qun', 7, ['闪魄', '昙现'], []],
						xiaojiu小酒: ['female', 'qun', 7, ['美酿', '媱丽'], []],
						meidusha美杜莎: ['female', 'qun', 7, ['莎舞', '石魅'], []],
						huaman蛮帼英飒: ['female', 'shu', 7, ['蛮彝', '蛮肆', '夷影', '栈缘'], []],
						lingkun灵鲲: ['male', 'qun', 8, ['灵鲲'], []],
						qiankun乾鲲: ['male', 'qun', 8, ['乾鲲'], []],
						zouyu驺虞: ['male', 'qun', 8, ['驺虞'], []],
						linglong灵龙: ['male', 'qun', 8, ['灵龙'], []],
						zuoci微妙玄通: ['male', 'qun', 7, ['仙化', '法魂', '道魄'], []],
						caocao魏武东临: ['male', 'wei', 4, ['鬼雄', '能臣'], ['zhu'], []],
						dongbai董白: ['female', 'qun', 3, ['连珠', '魔女'], []],
						caoang醉玉颓山: ['male', 'wei', 4, ['慷慨'], []],
						zhouyu业火红莲: ['male', 'wu', 4, ['业火', '曲音'], []],
						zhangxingcaipi: ['female', 'shu', 4, ['shenxianpi', 'qiangwupi', 'qiangwu'], []], //QQQ
						menghuopi: ['male', 'shu', 8, ['huoshou', 'zaiqipf'], []],
						xunyupi: ['male', 'wei', 5, ['tunlangpi', 'mingjiepi', 'quhupi'], []],
						lidianpi: ['male', 'wei', 4, ['xunxunpi', 'wangxipi', 'wangxi', 'xunxun', 'xunwang'], []],
						lijuepi: ['male', 'qun', 12, ['langxipi', 'langxipf', 'yisuanpi'], []],
						liuyanpi: ['male', 'qun', 5, ['tushepi', 'limupi', 'xinfu_tushe', 'xinfu_limu'], []],
						haozhaopi: ['male', 'wei', 6, ['骨镇'], []],
						shamokepi: ['male', 'shu', 6, ['蒺藜'], []],
						liuyanshen: ['male', 'qun', 4, ['图射', '立牧'], []],
						mayunlushen: ['female', 'shu', 7, ['凤魄', 'ji_mashu'], []],
						liuyanfazheng: ['male', 'shu', 9, ['图射', '立牧', '恩怨', '眩惑'], []],
						huanghaoshen: ['male', 'shu', 7, ['贿生', '寝黄皓情'], []],
						xurongshen: ['male', 'qun', 7, ['凶镬', '杀绝'], []],
						shamoke佻身飞镞: ['male', 'shu', 8, ['藜蒺'], []],
						huangzhong威镇定军: ['male', 'shu', 8, ['烈弓黄忠'], []], //QQQ
						duxi杜袭: ['male', 'wei', 7, ['驱徙', '避凶'], []],
						xunyou真贤去恶: ['male', 'wei', 7, ['智愚荀攸', '奇策荀攸'], []],
						liufengpi: ['male', 'shu', 8, ['攻嗣'], []],
						caozhen剑指街亭: ['male', 'wei', 8, ['司敌'], []],
						xunyu世之论者: ['male', 'wei', 7, ['论驱', '命贞', '引才'], []],
						huaxin笃学不倦: ['male', 'wei', 7, ['望归', '忘归', '息兵'], []],
						zhenji萦绕佳人: ['female', 'wei', 7, ['水洛', '倾绝', '踏仙'], []],
						youguxianwei: ['female', 'wei', 4, ['zjsb_仙卫'], []],
						xueguanglingshi: ['female', 'wei', 4, ['zjsb_灵侍'], []],
						wuxian金玉满堂: ['female', 'shu', 7, ['延绵', '会宴', '乐宫'], []],
						weiyan烈屠阵反: ['male', 'shu', 8, ['反傲', '谷谋'], []],
						caoxiu擐甲执锐: ['male', 'wei', 8, ['驹骑cx', '虎豹cx'], []],
						guansuo承父武志: ['male', 'shu', 8, ['龙行lx', '承武cw'], []],
						liuchen桃园伤古: ['male', 'shu', 8, ['战绝', '勤王'], []],
						gongsunbaoyue公孙宝月: ['female', 'qun', 8, ['俠义', '郡邱'], []],
						caizhenji舍身顾复: ['female', 'wei', 8, ['s舍y裔', 't天y音'], []],
						luzhi斩关赴难: ['male', 'wei', 7, ['清忠qingzhong', '卫境weijing'], []],
						menghuo斧过城摧: ['male', 'shu', 9, ['再起斧过城摧', '祸首斧过城摧'], []],
						huaxin清素拂浊: ['male', ['qun', 'wei'].randomGet(), 7, ['仁仕', '德报', '不弃', '华歆不臣'], []],
						huangzhong谋界神黄忠: ['male', 'shu', 8, ['烈弓mjshz', '益壮', '皓首'], []],
						majun能工巧匠: ['male', 'wei', 7, ['精械jx1', '巧思qs'], []],
						liuyong仗剑诛邪: ['male', 'shu', 7, ['诛佞', '封乡'], []],
						weiyan狂傲治戎: ['male', 'shu', 8, ['反傲fa', '谷谋gm', '傲戎'], []],
						caoren镇守不退: ['male', 'wei', 8, ['据守镇守不退', '解围镇守不退'], []],
						yuejin凯歌高旋: ['male', 'wei', 8, ['骁果凯歌高旋'], []],
						cuiyan舍猎弃戎: ['male', 'wei', 7, ['雅俊', '尊嫡'], []],
						maojie毛玠: ['male', 'wei', 7, ['秉清', '迎奉'], []],
						dongzhao奉帝于许: ['male', 'wei', 7, ['先略', '造王'], []],
						maliang挥毫自荐: ['male', 'shu', 7, ['z自s书', 'y应y援'], []],
						huanglin黄琳: ['male', 'shu', 8, ['摇弓'], []],
						liyi李遗: ['male', 'shu', 8, ['教民'], []],
						zhouqun周群: ['male', 'shu', 7, ['算签', '祈算'], []],
						huangzhong没金铩羽: ['male', 'qun', 8, ['虚射', '义释', '义报', '鈞敌'], []],
						duanwei骁勇金衔: ['male', 'qun', 8, ['狼灭lm'], []],
						yinglong应龙: ['male', 'qun', 8, ['蠖略', '应怒'], []],
						chengyu谲云渊心: ['male', 'wei', 8, ['谲伏', '渊贲'], []],
						dongzhao谋谛先机: ['male', 'wei', 7, ['移驾', '定基'], []],
						qinghegongzhu荷怜清盈: ['female', 'wei', 7, ['荷怜清盈长姬', '荷怜清盈谮构'], []],
						xuyou逆转官渡: ['male', 'qun', 7, ['逆转官渡成略', '逆转官渡恃才', '逆转官渡寸目'], []],
						zhenji清洛月泷: ['female', 'wei', 7, ['清洛月泷倾国', '清洛月泷洛神'], []],
						daxiaoqiao姐妹情深: ['female', 'wu', 7, ['姐妹情深星舞', '姐妹情深天香', '姐妹情深流离'], []],
						guohuai屡破羌胡: ['male', 'wei', 8, ['屡破羌胡精策'], []],
						daodetianzun: ['male', 'qun', 20, ['道祖', 'hunyuan1', '德经'], []],
						yuanshitianzun: ['male', 'qun', 20, ['清首', '尊体', '盘古幡'], []],
						shandianwanbi闪电弯匕: ['male', 'qun', 4, ['闪电弯匕'], []],
						mengbai: ['male', 'qun', 4, ['侠猎', '将攻'], []],
						zhongyuanzhulushi中原逐鹿师: ['male', 'qun', 4, ['zyzlzhongzhu', '逐师'], []],
						yingzheng嬴政: ['male', 'qun', 8, ['yingzheng_yitong', 'yingzheng_shihuang', 'yingzheng_zulong', 'yingzheng_fenshu', 'qinshilichoince'], []],
						qinjunnushou: ['male', 'qun', 4, ['nushou_jinnu', 'qinshilichoince'], []],
						hufu虎符re: ['male', 'qun', 4, ['hufu虎符'], []],
						xushao评世雕龙: ['male', 'qun', 8, ['评世', '评笔'], []],
						haozhao智密镇守: ['male', 'wei', 8, ['z镇g骨hz'], []],
						zhugelianghuangyueying: ['male', 'shu', 8, ['guanxing', 'kongcheng', 'jizhi', 'qicai', 'huoji', 'bazhen', 'kanpo', 'jiqiao', 'linglong'], []],
						lusuxunyuzhugeliang侠鲁肃荀彧诸葛亮: ['male', 'qun', 8, ['三奇'], []],
						xunyu洞心先识: ['male', 'qun', 8, ['佐策', '定汉'], []],
						jufu句扶: ['male', 'qun', 8, ['骁扶'], []],
						guanyinping鸾刀惊鸿: ['male', 'shu', 8, ['鸾刀惊鸿武继', '鸾刀惊鸿虎啸', '鸾刀惊鸿雪恨'], []],
						qun_zhenji: ['female', 'qun', 7, ['济乡', '称贤'], []],
						ruobing弱兵: ['male', 'qun', 4, ['弱兵'], []],
						beimina卑弥娜: ['female', 'qun', 8, ['弥骨'], []],
						xugongmenke许贡门客: ['male', 'qun', 8, ['贡簇', '贡客'], []],
						xingrima: ['male', 'qun', 8, ['星日', '野性'], []],
						dianwei蹈锋辟世: ['male', 'wei', 8, ['挈挾', '摧決'], []],
						kuailiangkuaiyue映月诗酒: ['male', ['wei', 'qun'].randomGet(), 7, ['审时映月诗酒', '荐降映月诗酒', '蒯良蒯越不臣'], []],
						bainiaomizhuan白鸟秘传: ['none', 'qun', 8, ['白鸟秘传'], []],
						wolongjisi卧龙祭司: ['female', 'shu', 8, ['龙祭'], []],
						madai袭斩魏延: ['male', 'shu', 8, ['潜袭mdqx', '凉袭mdlx'], []],
						jifengbaoleizhen疾风暴雷阵: ['male', 'shu', 8, ['疾风暴雷'], []],
						langgujijiu: ['male', 'wei', 4, ['狼祭', 'jinshilichoince'], []],
						fenghuang凤凰: ['male', 'qun', 8, ['凤凰', 'xianshilichoince'], []],
						weidun尾敦: ['male', 'qun', 8, ['安虞'], []],
						liuhe刘和: ['male', 'qun', 8, ['和昇'], []],
						duanxun段训: ['male', 'qun', 8, ['肋幽'], []],
						zhouang周昂: ['male', 'qun', 8, ['御陵'], []],
						supuyan苏仆延: ['male', 'qun', 8, ['率于'], []],
						gongsunyue公孙越: ['male', 'qun', 8, ['义遂'], []],
						zhonghuijiangwei: ['male', 'qun', 8, ['野权计', '野自立', '野排异', '野观星', '野挑衅', '野志继', 'yeshilichoince'], []],
						sunyi腾龙倒江: ['male', 'wu', 8, ['激峭', '凶疑'], []],
						gongsunfan公孙范: ['male', 'qun', 8, ['援绶'], []],
						dushemizhuan毒蛇秘传: ['none', 'qun', 8, ['毒蛇秘传', 'yaoshilichoince'], []],
						yuewanggoujianjian越王勾践剑: ['none', 'qun', 8, ['越王勾践剑', 'shengshilichoince'], []],
						xueshou雪兽: ['male', 'qun', 8, ['雪兽', '冰躯', '凛寒'], []],
						baibing败兵: ['male', 'qun', 8, ['败兵'], []],
						zuoci鬼左慈: ['male', 'qun', 13, ['道役', '仙魄', '仙化', '法魂', '道魄', 'guishilichoince'], []],
						shuituliushi水土流失: ['none', 'qun', 8, ['水土流失'], []],
						xianleizhenbing陷雷震兵: ['male', 'qun', 4, ['陷雷'], []],
						xianluoshibing陷落石兵: ['male', 'qun', 4, ['陷石'], []],
						gongsunxu公孙续: ['male', 'qun', 8, ['义炬'], []],
						huangjinleimingjun: ['male', 'qun', 5, ['巾鸣'], []],
						liuyong砺剑忾仇: ['male', 'shu', 8, ['砺剑忾仇封乡', '砺剑忾仇诛佞'], []],
						yangfeng忠勇半途: ['male', 'qun', 8, ['血途'], []],
						gaoshun九州河山: ['male', 'qun', 8, ['俘铸', '起营', '陷阵gs', '禁酒gs'], []],
						chengui计覆双雄: ['male', 'qun', 7, ['营图', '从势'], []],
						xiahoujie匹马当先: ['male', 'wei', 8, ['裂胆ld', '壮胆zd'], []],
						huapiyao画皮妖: ['female', 'qun', 8, ['画皮', 'yaoshilichoince'], []],
						yangang严纲: ['male', 'qun', 8, ['直取', '义锋'], []],
						xiangjiang降将: ['male', 'qun', 4, ['降将'], []],
						wuxian侠吴苋: ['female', 'qun', 7, ['踏影', '流云'], []],
						zhouxuan扶摇丰捻: ['male', 'wei', 7, ['梦卜zx', '寤寐zx'], []],
						huanbi环币: ['none', 'qun', 4, ['环币'], []],
						jianbi剑币: ['none', 'qun', 4, ['剑币'], []],
						bubi布币: ['none', 'qun', 4, ['布币'], []],
						yuanbi圆币: ['none', 'qun', 4, ['圆币'], []],
						yaoqianshu摇钱树: ['none', 'qun', 4, ['摇钱'], []],
					},
					translate: {
						zhugelianggxhy: '观星唤雨',
						simayidyzd: '断狱仲达',
						lingjuqqwz艳绝无双: '艳绝无双',
						baosi: '褒姒',
						lingju魂牵梦萦: '魂牵梦萦',
						jiutianxuannv: '九天玄女',
						lvlingqi炽焱流金: '炽焱流金',
						wanniangongzhu剑心汉胆: '剑心汉胆',
						zhangrang滔乱天常: '滔乱天常',
						xiaotao小桃: '小桃',
						xizhicai忠魏河山: '忠魏河山',
						yueguishu月桂树: '月桂树',
						gonggong水神共工: '水神共工',
						luocha罗刹: '罗刹',
						kuafu夸父: '夸父',
						fuxi伏羲: '伏羲',
						yingzhao英招: '英招',
						zhangjiaoBOSS张角: '天公策雷',
						hetaihou鸩毒除患: '鸩毒除患',
						zhaoxiang沙场芳魂: '沙场芳魂',
						fububanzang: '服部半藏',
						zhangfei气贯长虹: '气贯长虹',
						zhangfei傲睨山河: '傲睨山河',
						zhangqiying岁稔年丰: '岁稔年丰',
						goujian勾践: '勾践',
						zhugeliang龙跃凤鸣: '龙跃凤鸣',
						jingwei精卫: '精卫',
						diaochan忧君难寐: '忧君难寐',
						zhouyu江淮之杰: '江淮之杰',
						yuershen于儿神: '于儿神',
						hepo河泊: '河泊',
						xiaosha小杀: '小杀',
						xiaoshan小闪: '小闪',
						xiaojiu小酒: '小酒',
						meidusha美杜莎: '美杜莎',
						huaman蛮帼英飒: '蛮帼英飒',
						lingkun灵鲲: '灵鲲',
						qiankun乾鲲: '乾鲲',
						zouyu驺虞: '驺虞',
						linglong灵龙: '灵龙',
						zuoci微妙玄通: '微妙玄通',
						caocao魏武东临: '魏武东临',
						dongbai董白: '董白',
						caoang醉玉颓山: '醉玉颓山',
						zhouyu业火红莲: '业火红莲',
						zhangxingcaipi: '巾帼英姿',
						menghuopi: '南蛮之王',
						xunyupi: '王佐之才',
						lidianpi: '义忘私隙',
						lijuepi: '界李傕',
						liuyanpi: '刘焉',
						haozhaopi: '界郝昭',
						shamokepi: '沙摩柯',
						liuyanshen: '神刘焉',
						mayunlushen: '神马云禄',
						liuyanfazheng: '刘焉法正',
						huanghaoshen: '神黄皓',
						xurongshen: '徐荣',
						shamoke佻身飞镞: '佻身飞镞',
						huangzhong威镇定军: '威镇定军',
						duxi杜袭: '杜袭',
						xunyou真贤去恶: '真贤去恶',
						liufengpi: '界刘封',
						caozhen剑指街亭: '剑指街亭',
						xunyu世之论者: '世之论者',
						huaxin笃学不倦: '笃学不倦',
						zhenji萦绕佳人: '萦绕佳人',
						youguxianwei: '幽谷仙卫',
						xueguanglingshi: '雪光灵侍',
						wuxian金玉满堂: '金玉满堂',
						weiyan烈屠阵反: '烈屠阵反',
						caoxiu擐甲执锐: '擐甲执锐',
						guansuo承父武志: '承父武志',
						liuchen桃园伤古: '桃园伤古',
						gongsunbaoyue公孙宝月: '公孙宝月',
						caizhenji舍身顾复: '舍身顾复',
						luzhi斩关赴难: '斩关赴难',
						menghuo斧过城摧: '斧过城摧',
						huaxin清素拂浊: '清素拂浊',
						huangzhong谋界神黄忠: '谋界神黄忠',
						majun能工巧匠: '能工巧匠',
						liuyong仗剑诛邪: '仗剑诛邪',
						weiyan狂傲治戎: '狂傲治戎',
						caoren镇守不退: '镇守不退',
						yuejin凯歌高旋: '凯歌高旋',
						cuiyan舍猎弃戎: '舍猎弃戎',
						maojie毛玠: '毛玠',
						dongzhao奉帝于许: '奉帝于许',
						maliang挥毫自荐: '挥毫自荐',
						huanglin黄琳: '黄琳',
						liyi李遗: '李遗',
						zhouqun周群: '周群',
						huangzhong没金铩羽: '没金铩羽',
						duanwei骁勇金衔: '骁勇金衔',
						yinglong应龙: '应龙',
						chengyu谲云渊心: '谲云渊心',
						dongzhao谋谛先机: '谋谛先机',
						qinghegongzhu荷怜清盈: '荷怜清盈',
						xuyou逆转官渡: '逆转官渡',
						zhenji清洛月泷: '清洛月泷',
						daxiaoqiao姐妹情深: '姐妹情深',
						guohuai屡破羌胡: '屡破羌胡',
						daodetianzun: '道德天尊',
						yuanshitianzun: '元始天尊',
						shandianwanbi闪电弯匕: '闪电弯匕',
						mengbai: '蒙白',
						zhongyuanzhulushi中原逐鹿师: '中原逐鹿师',
						yingzheng嬴政: '嬴政',
						qinjunnushou: '秦军弩手',
						hufu虎符re: '虎符',
						xushao评世雕龙: '评世雕龙',
						haozhao智密镇守: '智密镇守',
						zhugelianghuangyueying: '诸葛亮黄月英',
						lusuxunyuzhugeliang侠鲁肃荀彧诸葛亮: '侠鲁肃荀彧诸葛亮',
						xunyu洞心先识: '洞心先识',
						jufu句扶: '句扶',
						guanyinping鸾刀惊鸿: '鸾刀惊鸿',
						qun_zhenji: '★甄姬',
						ruobing弱兵: '弱兵',
						beimina卑弥娜: '卑弥娜',
						xugongmenke许贡门客: '许贡门客',
						xingrima: '星日马',
						dianwei蹈锋辟世: '蹈锋辟世',
						kuailiangkuaiyue映月诗酒: '映月诗酒',
						bainiaomizhuan白鸟秘传: '白鸟秘传',
						wolongjisi卧龙祭司: '卧龙祭司',
						madai袭斩魏延: '袭斩魏延',
						jifengbaoleizhen疾风暴雷阵: '疾风暴雷阵',
						langgujijiu: '狼顾祭酒',
						fenghuang凤凰: '凤凰',
						weidun尾敦: '尾敦',
						liuhe刘和: '刘和',
						duanxun段训: '段训',
						zhouang周昂: '周昂',
						supuyan苏仆延: '苏仆延',
						gongsunyue公孙越: '公孙越',
						zhonghuijiangwei: '钟会&姜维',
						sunyi腾龙倒江: '腾龙倒江',
						gongsunfan公孙范: '公孙范',
						dushemizhuan毒蛇秘传: '毒蛇秘传',
						yuewanggoujianjian越王勾践剑: '越王勾践剑',
						xueshou雪兽: '雪兽',
						baibing败兵: '败兵',
						zuoci鬼左慈: '鬼左慈',
						shuituliushi水土流失: '水土流失',
						xianleizhenbing陷雷震兵: '陷雷震兵',
						xianluoshibing陷落石兵: '陷落石兵',
						gongsunxu公孙续: '公孙续',
						huangjinleimingjun: '黄巾雷鸣军',
						liuyong砺剑忾仇: '砺剑忾仇',
						yangfeng忠勇半途: '忠勇半途',
						gaoshun九州河山: '九州河山',
						chengui计覆双雄: '计覆双雄',
						xiahoujie匹马当先: '匹马当先',
						huapiyao画皮妖: '画皮妖',
						yangang严纲: '严纲',
						xiangjiang降将: '降将',
						wuxian侠吴苋: '吴苋',
						zhouxuan扶摇丰捻: '扶摇丰捻',
						huanbi环币: '环币',
						jianbi剑币: '剑币',
						bubi布币: '布币',
						yuanbi圆币: '圆币',
						yaoqianshu摇钱树: '摇钱树',
						鬼雄: '鬼雄',
						鬼雄_info: '你可以立即获得对你造成伤害的牌,并回复1点体力',
						连珠: '连珠',
						连珠_info: '出牌阶段限一次,你可以展示一张手牌并将此牌交给一名其他角色.该角色选择一项:展示其手牌并弃置所有与此牌花色相同的牌,或失去一点体力',
						魔女: '魔女',
						魔女_info: '当你成为杀的目标时,你可以让对方失去所有技能',
						慷慨: '慷慨',
						慷慨_info: '每当你距离2以内的角色成为杀的目标后,你可以摸一张牌.若如此做,你交给其一张牌并展示之,若该牌为装备牌,该角色可以使用此牌',
						天火: '天火',
						天火_info: '限定技,出牌阶段,你可以对一至三名角色造成至多共6点火焰伤害(你可以任意分配每名目标角色受到的伤害点数),若你将对一名角色分配2点或更多的火焰伤害,你须先弃置四张不同花色的手牌再回复1点体力',
						琴音: '琴音',
						琴音_info: '弃牌阶段结束时,若你于此阶段内弃置过你的至少两张手牌,则你可以选择一项:1. 所有角色各回复1点体力;2. 所有角色各失去1点体力',
						白衣: '白衣',
						白衣_info: '摸牌阶段,你可以放弃摸牌,改为从牌堆顶亮出10张牌,你获得不同花色的牌各一张,将其余的牌置入弃牌堆',
						圣光: '圣光',
						圣光_info: '出牌阶段,你可以观看一名其他角色的手牌,并可以展示其中一张♥️️牌,将其弃置或置于牌堆顶,每阶段限一次',
						归心: '归心',
						归心_info: '每当你受到1次伤害后,若至少一名其他角色的区域里有牌,你可以选择所有其他角色,获得这些角色区域里的一张牌,将你的武将牌翻面',
						千影: '千影',
						千影_info: '当计算其它角色与你的距离时,始终+2',
						星辰: '星辰',
						星辰_info: '准备阶段开始时和你的回合开始时,共发你20张牌,选10张作为手牌,其余的面朝下置于一旁(移出游戏),称之为<星>',
						星辰2: '星辰2',
						星辰2_info: '',
						晨雾: '晨雾',
						晨雾_info: '结束阶段开始时,你可以将至少一张<星>置入弃牌堆并选择等量的角色,若如此做,其于你的下回合开始之前受到的非雷电伤害结算开始时,你防止此伤害',
						晨雾2: '晨雾2',
						晨雾2_info: '',
						晨雾3: '晨雾3',
						晨雾3_info: '',
						暴风: '暴风',
						暴风_info: '结束阶段开始时,你可以将一张<星>置入弃牌堆并选择一名角色,若如此做,其受到的火焰伤害结算开始时,你令伤害值+1',
						暴风2: '暴风2',
						暴风2_info: '',
						konghunpi: '控魂',
						konghunpi_info: '出牌阶段(两点雷电伤害,666)',
						duanyu: '断狱',
						duanyu_info: '回合结束受到一点雷电伤害',
						反噬: '反噬',
						反噬_info: '回合结束一点雷电伤害(有装备的)',
						qqwz仇绝: '仇绝',
						qqwz仇绝_info: '当敌方濒死时,你回复其等量体力并摸其体力上限等量的手牌;当你受到伤害时你可以弃置一张牌令本次伤害+1,并令随机敌方受到本次伤害*2的伤害',
						qqwz前尘: '前尘',
						qqwz前尘_info: '你受到和造成的伤害+1,当你成为决斗或杀的目标时:你摸2张杀增加X点护甲或你回复1点体力摸一张闪,(x=你当前损失的体力)',
						惑妃: '惑妃',
						惑妃_info: '一名角色出牌阶段开始时,你可获得一名其他角色一张牌,若该牌不为【杀】,视为你对其使用了一张【南蛮入侵】;若该牌为【杀】,你再获得其一张牌',
						幽爱: '幽爱',
						幽爱_info: '每回合可以发动一次,弃置一张手牌,令一名角色体力上限永久+1,或使一名角色将手牌数量补充至体力上限',
						劫缘: '劫缘',
						劫缘_info: '当你造成伤害时,有85%概率伤害+1~2',
						结缘: '结缘',
						结缘_info: '当你受到伤害时,有85%概率伤害-1~2',
						焚心: '焚心',
						焚心_info: '一名角色进入濒死状态时,你有90%的概率摸三至五张牌并回复1~2点体力',
						九天: '九天',
						九天_info: '当一名角色成为一张基本牌或普通锦囊牌的目标时你摸两张牌(借刀杀人等带有指向目标的锦囊除外),你可以为此牌增加一个目标或减少一个目标(目标数至少为一)',
						帝师: '帝师',
						帝师_info: '回合结束阶段,你可视为对所有有手牌敌方角色使用顺手牵羊和偷梁换柱和火烧连营',
						玄烈: '玄烈',
						玄烈_info: '锁定技,准备阶段,如果敌方角色有超过两种不同花色的手牌,则你获得其一张手牌.对所有你以此法获得其牌的敌方角色造成1点伤害',
						帼武: '帼武',
						帼武1: '帼武',
						帼武_info: '出牌阶段开始时,你从获得2张【杀】(随机花色点数);你此阶段使用牌无距离限制;此阶段使用【杀】或普通锦囊牌可以多指定两个目标',
						妆戎: '妆戎',
						妆戎_info: '一名角色的回合结束时,若你的体力值或手牌数为1,你加1点体力上限并回复体力至上限,将手牌摸至体力上限,获得〖神威〗和〖无双〗',
						吕玲绮神威: '☆神威',
						吕玲绮神威_info: '锁定技,摸牌阶段,你额外摸2张牌,你的手牌上限+X,X为敌方存活角色个数且至少为2',
						吕玲绮无双: '无双',
						吕玲绮无双1: '无双',
						吕玲绮无双2: '无双',
						吕玲绮无双_info: '锁定技,你使用的【杀】或【决斗】需要两张【闪】或【杀】响应',
						兴汉: '兴汉',
						兴汉_info: '每名角色回合限一次,一名角色使用杀后你摸五张牌',
						枕戈: '枕戈',
						枕戈_info: '一名角色回合开始时你可令一名角色攻击范围加一,令其对一名角色使用一张杀',
						乱惑: '乱惑',
						乱惑3: '乱惑',
						乱惑4: '乱惑',
						乱惑04: '乱惑',
						乱惑5: '乱惑',
						乱惑_backup: '乱惑',
						乱惑_info: '出牌阶段或需要使用打出一张牌时,你可视为使用任意一张基本牌或普通锦囊牌,你令一名其他角色选择一项:1.交给你一张与你以此法使用的牌类别相同的牌;2.该角色失去1点体力且非锁定技无效直到回合结束',
						桃宴: '桃宴',
						桃宴_info: '回合开始时,你可令全体友方角色获得随机1到3张桃并摸等量的牌',
						妍丽: '妍丽',
						妍丽_info: '每名角色回合限一次,当一名角色处于濒死时,你可令其体力值回复至两点并摸两张牌',
						先辅zwhs: '先辅',
						先辅zwhs2: '先辅',
						先辅zwhs3: '先辅',
						先辅zwhs2_bg: '辅',
						先辅zwhs_info: '锁定技,游戏开始或你回合开始时,你选择一到四名其他角色,当其受到伤害后,你受到等量的伤害并增加一点体力上限,当其回复体力后,你回复等量的体力',
						筹策zwhs: '筹策',
						筹策zwhs_info: '当你受到1点伤害后,你可以进行判定,若结果为:黑色,你弃置一名角色区域里的一张牌,并弃置全体敌方角色区域内的一张牌;红色,你令一名角色摸一张牌(先辅的角色摸两张),并令全体友方角色摸一张牌',
						妒才zwhs: '妒才',
						妒才zwhs_info: '当你的判定牌生效后,你可以获得此牌,并令全体友方角色摸一张牌',
						月桂: '月桂',
						月桂_info: '一名友方角色出牌阶段开始时,你可令其摸一张牌交给你一到两张牌,若如此做其获得一张杀和一张桃',
						决洪: '决洪',
						决洪_info: '每名角色回合限一次,你的回合开始时或一名角色获得牌后,你可弃置当前角色全部牌,若如此做你的手牌数小于2你可摸两张牌',
						魔道: '魔道',
						魔道_info: '锁定技,准备阶段,你摸2+你手牌数一半(向上取整)张牌',
						魔箭: '魔箭',
						魔箭_info: '出牌阶段开始时,你可以对所有敌方角色使用一张万箭齐发,并令所有敌方角色失去一点体力',
						丹术: '丹术',
						丹术_info: '每当你于回合外失去牌时,你可以进行一次判定,若结果为红色,你回复1点体力并摸两张牌',
						刹幽: '刹幽',
						刹幽_info: '当你成为【杀】的目标时,你可以进行一次若判定牌为红色,你可以将此【杀】转移给一名角色',
						逐日: '逐日',
						逐日_info: '每名角色回合限两次,你使用或打出红色牌结算完毕后,你摸两张牌弃置所有敌方角色两张牌,你使用或打出黑色牌结算完毕后,你回复一点体力所有敌方角色失去一点体力',
						烈奔: '烈奔',
						烈奔2: '烈奔',
						烈奔_info: '当你使用【杀】时,可进行一次判定:若判定结果为红色,则此杀不计入出牌阶段使用次数且伤害+1',
						饮江: '饮江',
						饮江_info: '每名角色回合限两次,当你获得牌后,可随机从牌堆内获得一张红色牌,对所有敌方角色造成一点伤害',
						躯化: '躯化',
						躯化_info: '当你受到伤害后,你可令一名其他角色随机从〖 逐日 〗,〖 饮江 〗,〖 烈奔 〗中获得一项技能',
						青仪: '青仪',
						青仪_more: '青仪(+1)',
						青仪_less: '青仪(-1)',
						青仪_info: '一名角色受到伤害时你可弃置一张八卦阵令其伤害加一所有敌方角色失去一点体力或减一所有敌方角色回复一点体力,并获得一张闪',
						伏卦: '伏卦',
						伏卦_info: '回合开始时,你可令全体友方角色获得两张八卦阵(随机花色点数),获得牌名各不相同的全体角色八卦阵数量张锦囊牌',
						妖兽: '妖兽',
						妖兽_info: '锁定技,你使用杀造成的伤害+2,你与其他角色计算距离-2',
						封域: '封域',
						封域_debuff: '封域',
						封域_info: '回合开始时,你可摸两张牌令任意其他角色非锁定技失效直到你回合结束后',
						游寻: '游寻',
						游寻_info: '锁定技,其他角色回合开始时,你随机获得场上除你以外的一名角色区域内的一张牌,若你获得的是装备牌,则你使用之',
						司圃: '司圃',
						司圃2: '司圃',
						司圃_info: '你的回合限两次,你使用牌时可令一名角色无法使用打出牌直到你回合结束',
						雷狱: '雷狱',
						雷狱_info: '每当你使用或打出一张【闪】/【闪电】/【无懈可击】时,你进行一次判定;每当你判定后,若判定结果的花色为♣️️️,则你可以对一名其他角色造成一点雷属性伤害你回复一点体力并令其于本回合内获得<霆>印记;若判定结果的花色为♠️️️,则你可以对一名其他角色造成两点雷属性伤害并将一张【闪电】置入其的判定区;',
						神术: '神术',
						神术_info: '锁定技,每当一名其他角色打出一张【闪】时,你获得一枚<术>;出牌阶段,你可以移除两枚<术>,令一名已受伤的其他角色回复一点体力,你可以获得其一张牌,其摸两张牌.若其体力值因此而不小于你,则你额外摸一张牌',
						神术1: '神术',
						神术1_info: '',
						神术2: '神术',
						神术2_info: '',
						鬼道_guidao: '鬼道',
						鬼道_guidao_info: '任意一名角色的判定生效前,你可以打出一张黑色牌替换此判定牌并摸两张牌,全体友方角色获得一张闪电',
						道转: '道转',
						道转_info: '回合开始阶段,召唤黄巾军张燕、马元义、何曼、张曼成、严政、管亥、邓茂与你协同作战,失去此技能',
						鸩毒zd: '鸩毒',
						鸩毒zd_info: '一名其他角色出牌阶段开始时,你可弃置其一张牌对其造成一点伤害该角色失去一点体力',
						戚乱ql: '戚乱',
						戚乱ql_info: '锁定技,一名角色受到伤害后,若其所受伤害值不小于其体力值,你摸3张牌,并可令一名角色武将牌替换为主将刘辩副将刘协',
						fh扶fh汉: '扶汉',
						fh扶fh汉_info: '回合开始前,你可以移去所有<梅影>标记,从五张未登场的蜀势力武将牌中选择两名武将牌所有友方角色都将替换为这两名武将,并将体力上限数调整为本局游戏中移去<梅影>标记的数量',
						fh芳fh魂: '芳魂',
						fh芳fh魂_sha: '芳魂',
						fh芳fh魂_shan: '芳魂',
						fh芳fh魂_draw: '芳魂',
						fh芳fh魂_info: '当一名角色使用杀结算结束后,你获得1个<梅影>标记;你可以移去1个<梅影>标记来发动<龙胆>并摸2张牌',
						残影刺刃: '残影刺刃',
						残影刺刃_info: '出牌阶段限一次,你可令所有敌方角色各须选择弃置两张非基本牌(无则不弃),受到一点神圣伤害',
						桔疾风印: '桔疾风印',
						桔疾风印_info: '回合开始时,你可与一名其他角色交换位置,若该角色为敌方角色该角色非锁定技失效直到回合结束并受到两点神圣伤害,若不为敌方角色则你与其增加两点护甲',
						魅影暗雾: '魅影暗雾',
						魅影暗雾_info: '锁定技,你对距离不大于3的角色造成的伤害×4,距离不大于1的角色造成的伤害×2',
						暗影猎杀: '暗影猎杀',
						暗影猎杀_info: '回合结束阶段,你可对所有敌方角色各造成一点伤害,你摸敌方角色数的牌进入潜行状态直到你下个回合开始前',
						咆哮paoxiao: '咆哮',
						咆哮paoxiao1: '咆哮',
						咆哮paoxiao_info: '你使用杀无次数限制,且可令造成的伤害+本局游戏你使用过的杀数',
						替身tishen: '替身',
						替身tishen2: '替身',
						替身tishen3: '替身',
						替身tishen_info: '回合开始可将体力回复至体力上限摸等量牌获得等量杀体力上限翻倍,若在回合内使用了杀,则回合结束可再触发一次该技能效果',
						断喝duanhe: '断喝',
						断喝duanhe1: '断喝',
						断喝duanhe2: '断喝',
						断喝duanhe_info: '使用杀的效果可改为令其使用你手牌中杀数量的闪否则令此杀伤害+你手牌中杀的张数,且使用杀造成伤害后弃置其你手牌中杀的张数牌',
						笞: '笞',
						笞_info: '锁定技,每次受到伤害后失去等量体力',
						杖: '杖',
						杖_info: '锁定技,目标角色对你使用杀时,你受到一点无伤害来源的伤害',
						流: '流',
						流_info: '锁定技,每回合限一次,失去牌后,须选择弃置两张牌',
						徒: '徒',
						徒_info: '锁定技,回合结束时,你翻面',
						死: '死',
						死_info: '锁定技,回合结束时,若你的死标记达到4你阵亡',
						洪荒神裁: '洪荒神裁',
						洪荒神裁_info: '<span style=\"color: gold\">回合开始时或你使用杀时, </span><br><span style=\"color: #B22222\"> 可选择一名角色你选择令其获得<笞>、<杖>、<br><徒>、<流>、<br><死>中的一项.(<笞>、<杖>、<br><徒>、<流>只持续到其下个回合结束后)</span>',
						巡使: '巡使',
						巡使_info: '你使用多目标牌(不因此技能触发)结束后,可选择1到该牌指定目标数的角色,视为对这些角色使用一张杀',
						fazqy法zhuanzqy箓: '法箓',
						fazqy法zhuanzqy箓_info: '锁定技,游戏开始时,你获得<紫薇>,<后土>,<玉清>,<勾陈>标记各一个.当一名角色的牌因弃置而进入弃牌堆后,根据这些牌的花色,你获得对应的标记:♠️️,你获得1枚<紫薇>;♣️️,你获得1枚<后土>;♥️️,你获得1枚<玉清>;♦️️,你获得1枚<勾陈>',
						dianzqy点huazqy化: '点化',
						dianzqy点huazqy化_info: '准备阶段或结束阶段,你可以观看牌堆顶的X张牌(X为你的标记数).若如此做,你将这些牌以任意顺序放回牌堆顶',
						zhenzqy真yizqy仪: '真仪',
						zhenzqy真yizqy仪_info: '你可以在以下时机弃置1枚相应的标记来发动以下效果:当一张判定牌生效前,你可以弃置1枚<紫微>,将判定结果改为♠️️5或♥️️5;你可以弃置1枚<后土>,将你的一张手牌当【桃】使用;当你造成伤害时,你可以弃置1枚<玉清>,此伤害+1;当你受到伤害后,你可以弃置1枚<勾陈>,你从牌堆中随机获得三种类型的牌各一张',
						zhenzqy真yizqy仪_spade: '真仪',
						zhenzqy真yizqy仪_spade_info: '',
						zhenzqy真yizqy仪_club: '真仪',
						zhenzqy真yizqy仪_club_info: '',
						zhenzqy真yizqy仪_heart: '真仪',
						zhenzqy真yizqy仪_heart_info: '',
						隐忍图强: '隐忍图强',
						隐忍图强1: '隐忍图强',
						隐忍图强2: '隐忍图强',
						隐忍图强_info: '弃牌阶段前若你于出牌阶段未使用杀可令你本回合手牌上限+20,若未使用伤害标签牌你增加一点护甲,回合结束阶段你0.5概率获得你护甲数的锦囊牌0.6概率获得你护甲数的防御标签牌0.7概率可获得你护甲数的伤害标签牌',
						卧薪尝胆: '卧薪尝胆',
						卧薪尝胆_info: '你于回合外失去牌后 ,若其中包含基本牌,你可增加一点护甲,摸你失去的基本牌数×2×你手牌中的基本牌张牌',
						越甲吞吴: '越甲吞吴',
						越甲吞吴_info: '出牌阶段限3次,可弃置一张伤害标签牌,对所有手牌数小于该牌点数的敌方角色造成一点伤害,你获得一点护甲',
						火谋: '火谋',
						火谋_info: '<span style="color: #FCFC55">出牌阶段限7次,</span><span style="color: #6C4855">你可令一名角色弃置一张红色牌</span><span style="color: #484855">对其造成一点火焰伤害你摸一张牌.</span>',
						奇阵: '奇阵',
						奇阵_info: '<span style="color: #FCFC55">一名角色使用杀指定目标时,</span><span style="color: #6C4855">你可进行一次判定,若判定牌为红色目标角色摸2张牌,获得一张锦囊牌,此杀对其无效;</span><span style="color: #484855">若判定牌为黑色,该角色受到一点神圣伤害,目标角色获得一张基本牌回复一点体力.</span>',
						破计: '破计',
						破计2: '破计',
						破计_info: '<span style="color: #FCFC55">一名角色使用锦囊牌指定目标时或一名角色使用了无懈可击,</span><span style="color: #6C4855">你可选择一名角色令其弃置一张黑色牌,</span><span style="color: #484855">你摸一张牌,该牌对其无效/无效.</span>',
						衔木: '衔木',
						衔木_info: '<span  style="color: #5C4033">每名角色回合限2次,一名角色失去牌后,若其有牌你获得其全部牌的复制的牌,你获得一张杀</span>',
						填海: '填海',
						填海_info: '<span  style="color: #25a5d0">出牌阶段限2次,你可选择弃置一张伤害标签牌,选择1到4名角色,令其弃置手牌中伤害标签牌数的牌,对其造成一点伤害,你摸所选择角色弃置牌之前伤害标签牌数之和的牌</span>',
						lijianyjnm: '离间',
						lijianyjnm_info: '出牌阶段各限2次,你可令所有敌方角色各弃置一张牌,并令所有敌方角色依次对一名敌方角色使用一张决斗,所有敌方男性角色受到一点神圣伤害',
						biyueyjnm: '闭月',
						biyueyjnm_info: '回合结束阶段可获得一名角色全部牌,摸你手牌数一半向上取整且至少为2张牌,并可令一名角色弃置其体力值的牌',
						pianyiyjnm: '翩仪',
						pianyiyjnm_info: '当场上一名角色进入受到伤害后,可令该角色立即死亡.你须从全场未使用过的武将牌中选择一张,将该角色的武将牌(国战模式中改为主将的武将牌,移除副将)替换成你所选择的武将牌,该角色成为你的"傀儡".最后该角色将:体力上限、体力、手牌均设置为4,重新加入游戏',
						yingzijhzj: '英姿',
						yingzijhzj2: '英姿',
						yingzijhzj_info: '摸牌阶段你可额外摸1+全场角色体力上限之和的牌,你始终增加等量的手牌上限',
						反間: '反間',
						反間_info: '出牌阶段限两次,你可选择一名其他角色,从黑色或红色选择一项,摸其的你选择颜色的牌数,增加等量护甲,其弃置你选择颜色的全部牌',
						挽蛇: '挽蛇',
						挽蛇_info: '<span style="color: #008B8B">锁定技,当你使用或打出1张牌时,若此牌与上一张使用或打出的牌类别不同,所有敌方角色随机弃置2张牌.</span>',
						江澜: '江澜',
						江澜_info: '<span style="color: #008B8B">锁定技,回合结束时,你可选择一名角色,其从牌堆获得不同类型的各一张(没有则不获得),令所有敌方角色随机弃置一张牌</span>',
						巡潭: '巡潭',
						巡潭_info: '<span style="color: #008B8B">一名角色受到⚡伤害后,你可执行一个额外的回合</span>',
						闪麟: '闪麟',
						闪麟_info: '<span style="color: #008B8B">你受到伤害后可获得一张闪,并进行一次判定,若判定牌为黑色你对伤害来源造成一点⚡伤害,若为红色,你回复一点体力</span>',
						掌川: '掌川',
						掌川_info: '<span style="color: #48cae4">一名角色弃置牌后,你可随机执行以下一项:摸x张牌;弃置一名随机敌方角色x张牌;获得一名随机敌方角色x张牌;(x为其弃牌数)</span>',
						潇姿: '潇姿',
						潇姿_info: '<span style="color: #48cae4">锁定技,摸牌阶段你额外摸你非伤害标签牌数的牌</span>',
						泊澜: '泊澜',
						泊澜_info: '<span style="color: #48cae4">当你受到伤害时,你可以从当前牌堆已经开启的每个类别中各随机抽取随机一个牌名的一张牌,所有敌方角色随机弃置一张牌</span>',
						尊清: '尊清',
						尊清_info: '<span style="color: #48cae4">一名角色体力回复时或受到伤害时,可令此回复值或伤害值加一或减一</span>',
						瑰杀: '瑰杀',
						瑰杀_info: '每名角色回合限3次,一名友方角色使用杀时,你可令此【杀】不计入出牌阶段的使用次数,其摸3张牌,增加一点护甲',
						姝丽: '姝丽',
						姝丽_info: '结束阶段,你可获得3～8张基本牌,你可以将其中的牌分配给任意名角色',
						闪魄: '闪魄',
						闪魄_info: '一名角色弃置牌后,若其中包含有闪,若其为敌方角色其随机弃置3张牌,否则其摸3张牌',
						昙现: '昙现',
						昙现_info: '出牌阶段开始时,你可对所有有牌的敌方角色造成其牌中拼音序列数大于闪的拼音序列数的牌数的伤害',
						美酿: '美酿',
						美酿_info: '一名友方角色回合开始时,你可令其获得一张酒增加一点护甲',
						媱丽: '媱丽',
						媱丽_info: '一名角色使用酒时,你可对一名角色造成两点伤害,使用该酒的角色获得一张杀摸其手牌中杀和酒数量之和的牌数张牌',
						石魅: '石魅',
						石魅_info: '出牌阶段限一次,你可获得两张闪,令一名角色弃置全部杀和闪,失去一点体力,并将武将牌翻面',
						莎舞: '莎舞',
						莎舞_info: '你受到伤害时,若有伤害来源可令其弃置全部非伤害标签牌,你摸1+等量张牌.若当前为出牌阶段则结束此出牌阶段.并有0.5概率令此伤害值变为0',
						蛮彝: '蛮彝',
						蛮彝_info: '有角色成为【南蛮入侵】目标时,可令其对该角色无效,你增加一点护甲',
						蛮肆_viewas: '蛮肆',
						蛮肆: '蛮肆',
						蛮肆_info: '出牌阶段限两次,你可以令一名角色弃置全部牌,视为你对所有其他角色使用一张【南蛮入侵】;当有角色成为【南蛮入侵】目标前,你摸一张牌',
						夷影: '夷影',
						夷影2: '夷影',
						夷影_info: '当你对其他角色(或其他角色对你)使用【杀】或普通锦囊牌,你可以摸一张牌,获得此牌对应的所有实体牌(或令此牌对你无效)',
						栈缘: '栈缘',
						栈缘_info: '准备阶段,你加一点体力上限并回复1点体力,并可以选择一名角色,你与其获得技能〖兮力〗',
						兮力: '兮力',
						兮力_info: '你的回合外,当其他拥有【兮力】技能的角色在其回合内对没有【兮力】技能的角色造成伤害时,你可以摸一张牌,令此伤害+1,你与其各摸两张牌',
						灵鲲: '灵鲲',
						灵鲲_info: '回合开始时,你摸一张牌,增加一点体力上限、一点手牌上限,你受到伤害时,若无伤害来源或伤害来源手牌数小于你的体力上限,防止此伤害改为回复一点体力摸两张牌',
						乾鲲: '乾鲲',
						乾鲲_info: '当你成为点数不为字母的牌的目标时,你获得一张同名牌,摸两张牌,回复一点体力,若你有红色牌随机一名敌方角色失去一点体力',
						驺虞: '驺虞',
						驺虞_info: '回合开始时,你可选择一名角色,进行以下操作:你摸等于其装备牌数量加上其手牌中黑色牌的数量张牌,其随机执行一种操作方式(失去其装备牌数量加上其手牌中黑色牌的数量点体力或弃牌置全部牌)',
						灵龙: '灵龙',
						灵龙2: '灵龙',
						灵龙_info: '<span style="color: deepskyblue;">每当一名角色失去黑色牌后,你可以令一名角色:弃置2张牌并受到1点伤害.每回合限2次,当你受到伤害后,你回复2点体力,你摸两张牌获得两张闪.</span>',
						法魂: '法魂',
						法魂_info: "<span style='color:rebeccapurple'>所有人都展示武将牌后,你随机获得5张未加入游戏的武将牌,选一张置于你面前并声明该武将的一项技能,你拥有该技能且同时将性别和势力属性变成与该武将相同直到该化身被替换.在你的每个准备阶段和结束后,你可以替换化身牌,你须为新的化身重新声明一项技能(你不可声明锁定技、觉醒技或主公技),声明技能获得后你可选择一个势力,对该势力角色依次使用一张你选择牌名的印卡(无法使用且其为你的友方角色则获得一张相同牌名的牌).</span>",
						法魂2: '法魂',
						法魂2_info: '',
						法魂3: '法魂',
						法魂3_info: '',
						道魄: '道魄',
						道魄_info: '<span style="color:rebeccapurple">你体力值每次发生变化,可获得2*体力值变化数张新化身牌,可选择一个势力,对该势力角色依次使用一张你选择牌名的印卡(无法使用且其为你的友方角色则获得一张相同牌名的牌).</span>',
						仙化: '仙化',
						仙化_info: '<span style="color:rebeccapurple">游戏摸牌后或你的回合开始时,你可以依次选择是否获得全场角色的所有技能.</span>',
						鬼雄: '鬼雄',
						鬼雄_info: '你可以立即获得对你造成伤害的牌,并回复1点体力',
						连珠: '连珠',
						连珠_info: '出牌阶段限一次,你可以展示一张手牌并将此牌交给一名其他角色.该角色选择一项:展示其手牌并弃置所有与此牌花色相同的牌,或失去一点体力',
						魔女: '魔女',
						魔女_info: '当你成为杀的目标时,你可以让对方失去所有技能',
						慷慨: '慷慨',
						慷慨_info: '每当你距离2以内的角色成为杀的目标后,你可以摸一张牌.若如此做,你交给其一张牌并展示之,若该牌为装备牌,该角色可以使用此牌',
						业火: '业火',
						业火_info: '出牌阶段限2次,你可以对一至三名角色造成至多共6点火焰伤害(你可以任意分配每名目标角色受到的伤害点数),若你将对一名角色分配2点或更多的火焰伤害,你须先弃置四张不同花色的手牌再回复1点体力',
						曲音: '曲音',
						曲音_info: '弃牌阶段结束时,若你于此阶段内弃置过你的至少两张手牌,则你可以选择一项:1. 所有角色各回复1点体力;2. 累计回复场上角色数2倍的体力,所有角色各失去2点体力',
						能臣: '能臣',
						能臣_info: '当你成为杀的目标时,你可以让对方失去所有技能',
						shenxianpi: '甚闲',
						shenxianpi_info: '每名角色的回合限一次,你的回合外,每当有其他角色因弃置而失去牌时,若其中有基本牌,你可以摸一张牌',
						qiangwupi: '枪舞',
						qiangwupi_info: '出牌阶段,你可以进行一次判定.若如此做,则直到回合结束,你使用点数小于判定牌的 【杀】时不受距离限制,且你使用点数大于判定牌的【杀】时不计入出牌阶段的使用次数',
						zaiqipf: '在起',
						zaiqipf_info: '你可以跳过出牌阶段,改为摸三张牌并展示之,将摸到的装备牌置于装备区,可以使用手牌中的杀',
						tunlangpi: '吞狼',
						tunlangpi_info: '出牌阶段,你可以与一名角色拼点,若你赢,则该角色对另一名由你指定的角色造成1点伤害.若你没赢,他/她对你造成一点伤害.每回合限用一次',
						mingjiepi: '命节',
						mingjiepi_info: '你每受到1点伤害,可令任意一名角色摸等同于其体力上限的张数的牌(不能超过五张)',
						quhupi: '驱虎',
						quhupi_info: '出牌阶段,你可以与一名角色拼点,若你赢,则该角色对另一名由你指定的角色造成1点伤害.若你没赢,他/她对你造成一点伤害.每回合限用一次',
						xunxunpi: '旬旬',
						xunxunpi_info: '摸牌阶段,你可以放弃摸牌,改为观看牌堆顶的四张牌,获得其中的两张牌,将其余的牌以任意顺序置于牌堆底',
						wangxipi: '忘系',
						wangxipi_info: '每当你对其他角色造成1点伤害后,或受到其他角色造成的1点伤害后,你可与该角色各摸一张牌',
						xunwang: '寻忘',
						xunwang_info: '出牌阶段,你可以弃置一张牌,并指定一名角色,根据弃置牌的花色执行如下效果:♥️️该角色下次受到伤害时回复一点体力;♦️️︎该角色下次造成伤害时摸两张牌;♣️️该角色无法使用杀直到下一回合结束;♠️️该角色于下个回合结束阶段受到一点无来源的雷电伤害',
						langxipi: '狼袭',
						langxipi_info: '准备阶段,你可以对一名体力小于或等于你的其他角色造成0～2点随机伤害',
						langxipf: '豹袭',
						langxipf_info: '准备阶段,你可以对一名体力小于或等于你的其他角色造成1～2点随机伤害',
						yisuanpi: '亦算',
						yisuanpi_info: '每回合限一次,当你使用卡牌造成一次伤害后,你可以进行一次判定,若结果为黑色,你收回此牌',
						tushepi: '徒射',
						tushepi_info: '当你使用非装备牌指定目标时,若你没有基本牌,则你可以摸X张牌.(X为此牌指定的目标数)",',
						limupi: '力牧',
						limupi_info: '"出牌阶段限一次,将一张♦️️牌当做【乐不思蜀】对自己使用,回复1点体力.只要你的判定区内有牌,你对攻击范围内的其他角色使用牌便没有次数和距离限制.",',
						骨镇: '骨镇',
						骨镇_info: '回合开始和回合结束阶段你可令一名角色调整手牌数与你相同',
						蒺藜: '蒺藜',
						蒺藜_info: '当你一回合内使用或打出第X张牌时,你可以摸2X张牌(X为你的攻击范围)',
						立牧: '立牧',
						立牧_info: '出牌阶段限一次,你可以回复一点体力或摸一张牌.若如此做,你本回合使用牌没有次数和距离限制',
						limug: 'limug',
						limug_info: '',
						图射: '图射',
						图射_info: '当你使用牌时,你可以摸等同于此牌指定目标数的牌',
						凤魄: '凤魄',
						凤魄_info: '当你使用杀或决斗指定目标后摸5张牌,你可以选择一项:1.摸x张牌;2.令此牌的伤害值基数+X.(X为其区域内红色牌的数量)',
						ji_mashu: '骑术',
						ji_mashu_info: '锁定技,你计算与其他角色的距离时-4',
						恩怨: '恩怨',
						恩怨_info: '当你获得一名其他角色的至少两张牌后,你可以令其摸一张牌.当你受到1点伤害后,你可令伤害来源选择一项:①失去1点体力.②交给你一张手牌.若此牌不为♥️️,则你摸一张牌',
						reenyuan1: '恩怨',
						reenyuan1_info: '',
						reenyuan2: '恩怨',
						reenyuan2_info: '',
						眩惑: '眩惑',
						眩惑_info: '摸牌阶段开始时,你可以放弃摸牌并选择一名其他角色.若如此做,该角色摸三张牌,该角色需对其攻击范围内你选择的另一名角色使用一张【杀】,否则你获得其两张牌,出牌阶段你可以交给一名角色一张牌你可以获得该角色两张牌",',
						贿生: '贿生', //获得目标两张牌
						贿生_info: '防止所受伤害改为令一名角色弃置一张牌',
						寝黄皓情: '寝情',
						寝黄皓情_info: '结束阶段弃置任意名角色一张牌摸等量牌',
						凶镬: '凶镬',
						凶镬_info: '开局得十个标记,暴戾执行三项',
						xrxionghuo: '凶镬',
						xrxionghuo_info: '',
						xrxionghuo_disable: '凶镬',
						xrxionghuo_disable_info: '',
						xrxionghuo_low: '凶镬',
						xrxionghuo_low_info: '',
						杀绝: '杀绝',
						杀绝_info: '伤害加2,濒死一张桃以上获得标记',
						藜蒺: '藜蒺',
						藜蒺_info: '可额外使用攻击范围数量的杀,使用或打出牌后摸攻击范围数量的牌',
						烈弓黄忠: '烈弓',
						烈弓黄忠_info: '你的回合开始和结束你可以弃置一张牌摸两张牌,视为打出一张无视距离的杀,你每使用一张杀造成伤害后可以摸一张杀,使用一张杀,每当有角色回复体力后都会使你摸一张牌,你使用杀造成的伤害+1',
						驱徙: '驱徙',
						驱徙gain: '丰',
						驱徙gain_info: '粮食大丰收',
						驱徙lose: '歉',
						驱徙lose_info: '粮食大歉收',
						驱徙_info: '出牌阶段结束时,你可跳过下个弃牌阶段并选择两名角色.你将失去牌的角色翻至背面,令这两名角色中的一名角色获得另一名角色的一张牌并获得一枚<丰>,另一名角色获得一枚<歉>.拥有<丰>/<歉>的角色的摸牌阶段额定摸牌数+1/-1,手牌上限加/减体力上限数',
						避凶: '避凶',
						避凶2: '避凶',
						避凶3: '避凶',
						避凶3_info: '回合开始与回合结束时,你可弃置一名角色两张牌',
						避凶_info: '每名角色回合限一次,当一名角色失去牌后,你不能成为牌的目标直到你下回合开始',
						智愚荀攸: '智愚',
						奇策荀攸: '奇策',
						奇策荀攸_backup: '奇策',
						智愚荀攸_info: '每当你受到一次伤害后,你可以摸一张牌,展示所有手牌,伤害来源弃置一张手牌',
						奇策荀攸_info: '出牌阶段,你可以将所有的手牌(至少一张)当做任意一张通常性锦囊牌使用,每阶段限2次',
						攻嗣: '攻嗣',
						攻嗣_bg: '逆',
						攻嗣2: '攻嗣',
						攻嗣_info: '准备阶段开始时,你可以将一至四名角色的各一张牌置于你的武将牌上,称为<逆>;每当一名角色需要对你使用桃时,该角色可以移去两张<逆>,视为对你使用一张桃',
						司敌: '司敌',
						司敌2: '司敌',
						司敌_info: '其他角色出牌阶段开始时,你可以弃置一张牌,该角色于此阶段内不能使用和打出牌.此阶段结束时,若其此阶段没有使用【杀】,视为你对其使用了【杀】',
						命贞: '命贞',
						命贞_info: '你每受到1点伤害,可令任意一名角色摸等同于其体力上限的张数的牌',
						论驱: '论驱',
						论驱_info: '出牌阶段,你可以与一名角色拼点,若你赢,则该角色对一名角色造成1点伤害.若你没赢,他/她对你造成一点伤害.每回合限用2次',
						引才: '引才',
						引才_info: '回合开始阶段,召唤人才戏志才、郭嘉、荀攸、陈群、钟繇、杜機,杜袭与你协同作战,失去此技能',
						望归: '望归',
						望归_info: '受到伤害或回复体力后可令一名角色摸一张牌你摸一张牌',
						忘归: '忘归',
						忘归_info: '当你造成伤害后你可对一名角色造成一点伤害,每回合一次',
						息兵: '息兵',
						息兵_info: '一名角色使用不为红色的牌后你可令该角色弃置等同于其体力上限张数的牌,你与友方其他角色摸等量的牌,该角色不能使用牌直到回合结束后,每回合一次',
						水洛: '水洛',
						水洛_info: '回合开始时或结束时可进行判定,若为红色终止判定回复一点体力,若为黑色摸一张牌,判定结束后获得以此法判定的所有牌',
						倾绝: '倾绝',
						倾绝_info: '你可以将一张牌当[闪]使用或打出',
						zjsb_仙卫: '仙卫',
						zjsb_仙卫_info: '一名角色回合开始时或结束时可进行判定,至多三次,若为红色终止判定,判定结束后获得以此法判定的所有牌',
						zjsb_灵侍: '灵侍',
						zjsb_灵侍_info: '一名角色回合开始时或结束时可进行判定,至多三次,若为黑色终止判定,判定结束后获得以此法判定的所有牌',
						踏仙: '踏仙',
						踏仙_info: '回合开始阶段,召唤士兵雪光灵侍和幽谷仙卫与你协同作战,失去此技能',
						延绵: '延绵',
						延绵_info: '准备阶段,你可以选择一项:1.摸牌阶段多摸3张牌;2.使用红色牌可以多选一个目标.若你下回合选择另一项,则该选项数值+1并复原此技能',
						会宴: '会宴',
						会宴_info: '结束阶段,你可以令一名角色从牌堆中获得一张♥️️基本牌,若其于上回合成为过该技能目标,其回复1点体力,并可选择一名角色令该角色失去一点体力',
						乐宫: '乐宫',
						乐宫_info: '回合开始阶段,召唤两名双刃喋血兵与你协同作战,失去此技能',
						反傲: '反傲',
						反傲_info: '每当你对<span style="color: red">攻击距离</span>内的角色<span style="color: gold">造成伤害</span>后,你可以双倍的体力并摸等量的牌',
						谷谋: '谷谋',
						wy谷1: '谷谋',
						谷谋_info: '<span style="color: gold">一名角色回合开始阶段或出牌阶段限一次</span>,你可以令当前角色失去任意点体力值(至多为<span style="color: red">6</span>),若如此做,本回合你出杀次数<span style="color: gold">+X</span>,进攻距离<span style="color: gold">+X</span>,并摸X张牌(X为你以此法失去的体力值)',
						驹骑cx: '驹骑',
						驹骑cx_info: '锁定技,若你已受伤,你计算与其他角色距离时-X,其他角色与你计算距离+x(X为你已损失体力值)',
						虎豹cx: '虎豹',
						虎豹cx1: '虎豹',
						虎豹cx_info: '当你使用【杀】对目标角色造成伤害时,若你的装备区里有武器牌,你可以令其选择一项:1、弃置X张手牌(X为此武器牌的攻击范围),若如此做,其弃置你的此武器牌;2、令此伤害+3;你使用杀时可执行选项一并改为摸x张牌',
						龙行lx: '龙行',
						龙行lx_info: '每当有武将死亡时,你立刻进行一个额外回合并摸3张牌回复3点体力,每当你的回合开始获得以下其中1项技能:<li>龙锋:其他角色回合结束时,你摸一张牌进行一个额外出牌阶段回复一点体力</li><li>斩棘:当友方角色受到伤害后,若伤害来源不为你则你可以令伤害来源失去2点体力</li><li>崇义:当你即将造成伤害时,你可以取消本次伤害摸两张牌弃置其4张牌</li>',
						龙锋lf: '龙锋',
						龙锋lf_info: '其他角色回合结束时,你摸一张牌进行一个额外出牌阶段回复一点体力',
						斩棘zq: '斩棘',
						斩棘zq_info: '当友方角色受到伤害后,若伤害来源不为你,则你可以令伤害来源失去2点体力',
						崇义cy: '崇义',
						崇义cy_info: '当你即将造成伤害时,你可以取消本次伤害摸两张牌弃置其4张牌',
						承武cw: '承武',
						承武cw_info: '回合开始阶段,召唤士兵南中拒象兵×2与你协同作战,失去此技能',
						战绝: '战绝',
						战绝_info: '出牌阶段限5次,你可视为对所有敌方角色使用一张决斗,所有友方角色摸两张牌',
						勤王: '勤王',
						勤王1: '勤王',
						勤王2: '勤王',
						勤王_info: '你需要使用打出杀时你先摸一张牌并可由一名友方角色替你使用打出之,若有角色替你使用打出之其摸一张牌,全体友方角色摸两张牌',
						俠义: '俠义',
						俠义1: '俠义',
						俠义2: '俠义',
						俠义_info: '你使用黑色牌仅指定一名角色目标后你可令一名角色获得一枚俠标记,有俠标记的角色计算与其他角色距离时-俠标记数,其他角色计算与有俠标记角色始终+俠标记数 ',
						郡邱: '郡邱',
						郡邱3: '郡邱',
						郡邱_info: '一名角色回合开始时,你可摸你拥有的郡邱标记数加一张牌,弃置该角色你拥有俠义标记的牌数,使用其中的装备牌与锦囊牌,获得其中的基本牌,若如此做,于回合结束阶段弃置你的所有俠义标记',
						s舍y裔: '舍裔',
						s舍y裔_info: '当一名角色受到伤害时,你可以摸至少X张牌将X张牌交给该角色(X为你的体力值).若如此做,你防止此伤害',
						t天y音: '天音',
						t天y音_info: '回合结束阶段,你可获得无懈可击两张,闪,桃(随机花色点数)各一张',
						清忠qingzhong: '清忠',
						清忠qingzhong_info: '出牌阶段开始时,你可以选择一名角色摸两加与该角色手牌数差值的绝对值张牌,若如此做,本阶段结束时,你可与一名角色交换手牌',
						卫境weijing: '卫境',
						卫境weijing_info: '每名角色回合各限一次,你可以在需要使用【杀】或【闪】时,视为使用一张【杀】或【闪】并摸一张牌',
						祸首斧过城摧: '祸首',
						祸首斧过城摧1: '祸首',
						祸首斧过城摧2: '祸首',
						祸首斧过城摧_info: '你是任何南蛮入侵的伤害来源且造成的伤害+1,南蛮入侵过河拆桥对你无效,被南蛮入侵或过河拆桥指定为目标前可弃置一张红色牌视为你对所有敌方角色使用一张南蛮入侵',
						再起斧过城摧: '再起',
						再起斧过城摧1: '再起',
						再起斧过城摧_info: '一名角色回合结束时若你于此回合失去过红色牌,你可于当前回合结束时全体友方角色摸1张牌回复一点体力,你展示牌堆顶的你体力上限数的牌,回复其中红色牌数量的体力,并令一名角色选择弃置其中红色牌数量的牌,之后你获得以此法展示的牌',
						仁仕: '仁仕',
						仁仕1: '仁仕',
						仁仕_info: '出牌阶段每名角色限一次,你可交给一名角色一张牌你摸一张牌',
						德报: '德报',
						德报_info: '当一名其他角色获得牌后,若你的<█>的数量不大于你的体力上限,你摸一张牌并选择一张牌置于你的武将牌上,称为<█>.准备阶段,你获得所有<█>',
						不弃: '不弃',
						不弃_info: '当有角色进入濒死状态时,你可弃置1张<仁>,令其回复一点体力',
						华歆不臣: '不臣',
						华歆不臣2: '不臣',
						华歆不臣_info: '选将阶段随机势力范围(魏,群)的一个势力,回合开始或有其他角色濒死时可变更势力(非国战模式改为变更身份)',
						烈弓mjshz: '烈弓',
						烈弓mjshz2: '烈弓',
						烈弓mjshz_info: '你使用【杀】可选择在此【杀】点数距离内的角色为目标.你使用杀时可令此杀不可被响应,你使用杀造成伤害时可亮出牌堆顶你体力上限数的牌,你获得其中带伤害标签的牌,其余的牌置入弃牌堆,并令此次伤害+1+其中伤害标签牌数',
						益壮: '益壮',
						益壮_info: '你使用伤害标签牌造成伤害时,若此牌有点数增加该牌点数的伤害',
						皓首: '皓首',
						皓首_info: '锁定技,你受到杀的伤害始终减当前轮数值',
						精械jx1: '精械',
						精械jx1_info: '出牌阶段,你可以展示一张未强化过的【诸葛连弩】或标准包/军争包/SP包中的防具牌,对其进行强化.当你处于濒死状态时,你可以弃置一张防具牌摸体力上限减体力值的牌,将体力回复至1点',
						精械jx2: '精械',
						精械jx2_info: '',
						巧思qs: '巧思',
						巧思qs_info: '出牌阶段限一次,你可以投掷一枚六面骰子,展示牌堆顶的X张牌并获得之.你选择一项:1.交给一名角色X张牌.2.摸X张牌.(X为骰子的点数+2)',
						诛佞: '诛佞',
						诛佞_info: '出牌阶段限2次,你可弃置1到你手牌数的牌,令全体友方角色获得这些牌的复制,可视为使用一张基本牌或普通锦囊牌',
						封乡: '封乡',
						封乡_info: '你的回合开始前可标记一名角色,其每回合限一次,当其的牌数发生变化结束后,回复体力后,其所有友方角色摸一张牌',
						反傲fa: '反傲',
						反傲fa_info: '每当你对<span style="color: red">攻击距离</span>内的角色<span style="color: gold">造成伤害</span>后,你可以增加当前伤害值双倍的体力上限回复等量体力并摸等量的牌',
						谷谋gm: '谷谋',
						wy谋谷1: '谷谋',
						谷谋gm_info: '<span style="color: gold">一名角色回合开始阶段或出牌阶段限一次</span>,你可以令当前角色失去任意点体力值(至多为<span style="color: red">6</span>),若如此做,本回合你出杀次数<span style="color: gold">+X</span>,进攻距离<span style="color: gold">+X</span>,并摸X张牌(X为你以此法失去的体力值)',
						傲戎: '傲戎',
						傲戎_info: '回合开始阶段,召唤夹山峪壮军×2与你协同作战,失去此技能',
						据守镇守不退: '据守',
						据守镇守不退1: '据守',
						据守镇守不退2: '据守',
						据守镇守不退3: '据守',
						据守镇守不退4: '据守',
						据守镇守不退_info: '出牌阶段限一次,你可令一名角色弃置两张牌获得2点护甲,回合结束阶段你可令你与一名角色翻面,你摸4张牌,弃置一张牌获得该牌点数的护甲,并可移动场上一张牌,当你翻面结束后可摸你护甲值的不带伤害标签的牌,当你需要使用无懈可击时,可扣减一点护甲视为使用之,你受到伤害时可增加一点护甲令一名角色将武将牌翻面',
						解围镇守不退: '解围',
						解围镇守不退_info: '友方角色受到伤害时你可弃置一张非伤害标签牌防止之',
						骁果凯歌高旋: '骁果',
						骁果凯歌高旋_info: '一名其他角色回合结束时,你可令其弃置所有手牌与装备区内所有装备牌,你摸2+等量张牌,回复一点体力,该角色受到你的1+等量点伤害,失去一点体力',
						雅俊: '雅俊',
						雅俊2: '雅俊',
						雅俊2_info: '手牌上限减一',
						雅俊_info: '摸牌阶段,你多摸1+与你体力值相同的角色数张牌.你可选择一名角色获得其一张牌,其下个回合手牌上限-1,你将一张牌置于牌堆顶',
						尊嫡: '尊嫡',
						尊嫡_info: '出牌阶段限一次,你可选择一名角色,进行一次判定,若为黑色其摸3张牌,否则其增加一点体力上限回复一点体力,并可移动场上一张牌',
						秉清: '秉清',
						秉清_info: '每回合限4次,你使用实体牌结算结束后,你摸2倍你手牌中大于该牌点数的牌数的牌,可弃置一名角色区域内的一张牌,可对一名其他角色造成1点伤害',
						迎奉: '迎奉',
						迎奉_info: '游戏开始摸牌结束后,你选择一名角色成为迎奉目标,其受到伤害后其与你获得一张奉天子以令不臣,迎奉角色死后你可重新选择迎奉目标',
						先略: '先略',
						先略_info: '每名角色回合限一次,一名角色使用锦囊牌结算结束后,你选择分配牌堆顶的两张牌',
						造王: '造王',
						造王2: '造王',
						造王_info: '出牌阶段限一次,你可选择一名角色,令其变为友方角色身份显示为王增加一点体力上限回复一点体力摸3张牌,直到其下个回合结束后:有角色死亡时其获得游戏胜利',
						y应y援: '应援',
						y应y援_info: '每回合限五次,你使用牌后,所有友方角色获得两张相同类型的牌',
						z自s书: '自书',
						z自s书_info: '你不因该技能获得牌后摸一张牌,你可令一名角色于回合外获得的牌弃置之',
						摇弓: '摇弓',
						摇弓2: '摇弓',
						摇弓_info: '你使用【杀】可选择在此【杀】点数距离内的角色为目标.当你使用【杀】指定目标后,可令此杀不可被闪避,你使用杀造成伤害时可亮出牌堆顶的7张牌,可获得牌名不同的牌各一张,令此伤害加你所获得的牌数',
						教民: '教民',
						教民_info: '每回合限一次,一名角色摸牌后,你可令其从牌堆获得基本牌、锦囊牌、装备牌各一张,若没有相应的牌则改为摸一张牌',
						盛签: '盛签',
						盛签_info: '锁定技,防止你受到的伤害改为回复一点体力摸两张牌',
						上签: '上签',
						上签_info: '锁定技,你受到伤害时,摸你所受伤害值的牌,若此伤害值大于1并将此伤害值改为1',
						中签: '中签',
						中签_info: '锁定技,你受到伤害时,摸你所受伤害值2倍的牌',
						下签: '下签',
						下签_info: '锁定技,你受到伤害时,令此伤害值加一,并失去1加伤害值的体力',
						衰签: '衰签',
						衰签_info: '锁定技,你受到伤害时,令此伤害值加二,并失去1加伤害值的体力,取消你的体力回复,改为弃置两张牌',
						算签: '算签',
						算签_info: '<span style=\"color: gold\">出牌阶段限5次, </span><br><span style=\"color: Fuchsia\"> 可选择一名角色你选择令其获得<盛签>、<上签>、<中签>、<下签>、<衰签>中的一项.(<盛签>、<上签>、<中签>、<下签>、<衰签>只持续到其下个回合结束后)</span>',
						祈算: '祈算',
						祈算_info: '回合开始时,你可选择一名角色随机执行获得其一张牌或观看并选择获得其一张牌的效果,并有66%概率对其造成x点伤害和失去x点随机执行一项(x为1到2的随机数)',
						虚射: '虚射',
						虚射_info: '出牌阶段限一次,你可选择一名角色弃置其一张牌,若该牌为装备牌对其造成一点伤害,否则你获得一张杀和一张万箭齐发',
						义释: '义释',
						义释_info: '你造成伤害时,可令此伤害减一,并获得受伤角色区域内3张牌',
						义报: '义报',
						义报_info: '你计算与其他角色距离-2,你使用黑色伤害标签牌时,若为此牌为杀可令此牌不可被响应,否则对目标角色造成一点伤害',
						鈞敌: '鈞敌',
						鈞敌_info: '其他角色计算与你距离+2,你受到一名其他角色伤害时可对伤害来源造成其红色牌数的伤害',
						狼灭lm: '狼灭',
						狼灭lm_info: '一名角色回合结束阶段你可摸2张牌,并可令一名其他角色选择弃置一张牌,对其造成一点伤害,选择对其执行一项军法',
						蠖略: '蠖略',
						蠖略2: '蠖略',
						蠖略_info: '回合开始时,你可从火烧连营、火杀、火山中获得随机一张再从水淹七军、闪电、雷杀中获得随机一张,出牌阶段若你有除火杀和雷杀的上述牌,你可选择一名角色对其造成一点火焰伤害并造成一点雷电伤害',
						应怒: '应怒',
						应怒2: '应怒',
						应怒_info: '每当你失去牌后,若其中包含火烧连营、水淹七军、闪电、火山,你可回复一点体力增加一点护甲,其他角色计算与你距离+3直到该回合结束后',
						谲伏: '谲伏',
						谲伏_info: '每名角色每回合每牌名各限一次,一名角色使用牌时你可令该牌失效若此牌为实体牌,你获得之',
						渊贲: '渊贲',
						渊贲_info: '你受到一名角色的伤害后,可摸其手牌数的牌,令其弃置你手牌数张牌,对其造成一点伤害',
						移驾: '移驾',
						移驾_info: '一名角色受到伤害后,你令其将一张绝影马置入其装备区且不计入装备限制,你摸2张牌,其获得一张挟天子以令诸侯',
						定基: '定基',
						定基_info: '准备阶段,你可以令一名角色摸5+其装备区坐骑牌数,其获得一张随机其手牌的复制,其可选择使用一张牌',
						荷怜清盈长姬: '长姬',
						荷怜清盈长姬2: '长姬',
						荷怜清盈长姬_info: '<span style="color: #8A2BE2;">一名角色回合结束后,若有角色于当前角色体力发生变化,你可增加一点体力上限回复一点体力摸三张牌获得一张杀和闪,弃置一名角色两张牌.</span>',
						荷怜清盈谮构: '谮构',
						荷怜清盈谮构_info: '<span style="color: #8A2BE2;">每名角色回合限2次,每当一名角色使用非装备牌结束后,若置入牌堆,你可获得之,并摸一张牌选择令该牌目标角色失去2点体力或使用该牌角色回复2点体力或令你摸4张牌</span>',
						逆转官渡成略: '成略',
						逆转官渡成略_info: '<span style="color: #FFD700">出牌阶段限两次,你可摸两张牌,视为对所有敌方角色使用一张火烧连营,你获得两张伤害标签牌,你选择一个颜色,使用该颜色牌无距离和次数限制</span>',
						逆转官渡恃才: '恃才',
						逆转官渡恃才_info: '<span style="color: #FFD700">每回合限3次,你使用牌结束后,可摸2*牌堆顶3张牌类型数张牌(至少为2)</span>',
						逆转官渡寸目: '寸目',
						逆转官渡寸目_info: '<span style="color: #FFD700">锁定技,你从牌堆顶摸牌时,改为从牌堆底摸牌</span>',
						清洛月泷倾国: '倾国',
						清洛月泷倾国_info: '<span style="color: #3c78d8;">你可以将一张黑色手牌当闪使用或打出,结束阶段,你可令一名角色获得你黑色牌数张闪</span>',
						清洛月泷洛神: '洛神',
						清洛月泷洛神_info: '<span style="color: #00ffff;">准备阶段,你可以进行判定,若结果为黑色,你获得此牌并摸一张牌,你可以重复此流程.</span>',
						姐妹情深星舞: '星舞',
						姐妹情深星舞_info: '<span style="color: #11ca5d">弃牌阶段开始时,你可选择一名角色令其弃置装备区和手牌中的全部装备牌,对其造成你全部牌花色数且至少为2点伤害</span>',
						姐妹情深天香: '天香',
						姐妹情深天香_info: '<span style="color: #11ca5d">你受到伤害时,可防止此伤害,并可令一名角色弃置你♥️️️牌数张牌,失去1+你应受伤害值点体力,可令一名角色摸5张牌</span>',
						姐妹情深流离: '流离',
						姐妹情深流离_info: '<span style="color: #11ca5d">一名角色使用杀指定你为目标时,你可令此杀对你无效,此杀使用者视为对你选择的角色使用1+你♦️️牌数张杀</span>',
						屡破羌胡精策: '精策',
						屡破羌胡精策_info: '结束阶段,你可摸2*你出牌阶段使用牌数量张牌,你增加一点护甲',
						道祖: '道祖',
						道祖_info: '你永远跳过判定阶段和弃牌阶段;摸牌阶段额外摸4张牌;你使用黑色杀可令使用杀的次数+1并摸3张牌,你使用红色杀增加1点体力上限回复1点体力',
						daozu2: '道祖',
						daozu2_info: '跳过弃牌阶段',
						daozu3: '道祖',
						daozu3_info: '你使用红色杀增加1点体力上限回复1点体力',
						daozu4: '道祖',
						daozu4_info: '你使用黑色杀可令使用杀的次数+1并摸3张牌',
						daozu5: '道祖',
						daozu5_info: '跳过判定阶段',
						太极世界: '太极世界',
						太极世界_info: '',
						盘古幡: '盘古幡',
						盘古幡_info: '你可以将♥️️牌当顺手牵羊使用或打出,你使用非延时类锦囊牌仅指定一个目标后,可以额外指定1个目标;当其他角色对你使用锦囊牌时,可取消之,你摸2张牌',
						pangu2: '盘古幡',
						pangu2_info: '',
						pangu3: '盘古幡',
						pangu3_info: '',
						hunyuan2: '混元拂尘',
						hunyuan2_info: '',
						hunyuan1: '混元拂尘',
						hunyuan1_info: '你无视其防具,你使用杀指定一名角色后其技能失效直到回合结束后',
						hunyuan3: '混元拂尘',
						hunyuan3_info: '',
						德经: '德经',
						德经_info: '<span style="color:white; font-size:60px; font-weight:600; text-shadow:1px 0px yellow, 1px 2px yellow, 3px 1px yellow, 2px 3px yellow, 4px 2px yellow, 4px 4px yellow, 5px 3px yellow, 5px 5px yellow, 7px 4px yellow, 6px 6px yellow, 8px 5px yellow, 7px 7px yellow, 9px 6px yellow, 9px 8px yellow, 11px 7px yellow;">回合开始时,你获得🃏、颜色、点数为11的【仁】、【义】、【礼】、【智】、【信】、【勇】、【恕】、【诚】、【忠】、【孝】、【悌】各一张</span>',
						清首: '清首',
						清首_info: '出牌阶段限3次,你可弃置一名角色一张牌并可进行一次判定,若判定牌为红色对其造成两点火焰伤害若为黑色对其造成两点雷电伤害,你摸判定牌点数与其弃置牌(无则视为0)差值的绝对值牌并增加等量护甲',
						尊体: '尊体',
						尊体_info: '<span style="color:red; font-size:60px; font-weight:600; text-shadow:1px 0px #66ffff, 1px 2px #66ffff, 3px 1px #66ffff, 2px 3px #66ffff, 4px 2px #66ffff, 4px 4px #66ffff, 5px 3px #66ffff, 5px 5px #66ffff, 7px 4px #66ffff, 6px 6px #66ffff, 8px 5px #66ffff, 7px 7px #66ffff, 9px 6px #66ffff, 9px 8px #66ffff, 11px 7px #66ffff;">你濒死时,你可观看并获得获一名角色两张牌,回复你牌数点体力</span>',
						闪电弯匕: '闪电弯匕',
						闪电弯匕2: '闪电弯匕',
						闪电弯匕_info: '<span style="background:linear-gradient(to right, blue 50%, white 50%);-webkit-background-clip: text; color: transparent;font-size: 30px;font-weight: bold;">你的攻击范围+2,每回合限3次,你使用杀可进行2次判定若相差不到2～9,可对一名角色造成两次判定差值绝对值的雷电伤害</span>',
						侠猎: '侠猎',
						侠猎_info: '<span style="font-size:30px;color: transparent;background-color : gold;text-shadow : rgba(255,255,255,0.5) 0 5px 6px, rgba(255,255,255,0.2) 1px 3px 3px;-webkit-background-clip : text;">摸牌阶段开始前,你可以展示牌堆中5+你装备区拥有【杀】牌的数量的牌,你获得牌名字数不同的牌各一张,将未选择的牌弃置,可选择一名角色,视为对其使用你获得牌数张【杀】.</span>',
						将攻: '将攻',
						将攻_info: '<span style="font-size:30px;color: transparent;background-color : gold;text-shadow : rgba(255,255,255,0.5) 0 5px 6px, rgba(255,255,255,0.2) 1px 3px 3px;-webkit-background-clip : text;">出牌阶段限2次,你可选择拥有手牌或装备牌的一名其他角色,观看并弃置其1张牌,你获得一张该牌的复制.</span>',
						//装备描述
						wufengjian_skill: '无锋剑',
						wufengjian_skill_info: '',
						yinfengjia_skill: '引蜂甲',
						yinfengjia_skill_info: '',
						yexingyi_skill: '夜行衣',
						yexingyi_skill_info: '',
						caochuan_skill: '草船借箭',
						caochuan_skill_info: '',
						caochuan_skill2: '草船借箭',
						caochuan_skill2_info: '',
						yajiaoqiang_skill1: '涯角枪',
						yajiaoqiang_skill1_info: '你的回合外你的回合外,当你于此回合内第一次使用黑色牌或打出黑色【闪】时,你可以在此牌结算完成后获得之',
						yajiaoqiang_skill2: '涯角枪',
						yajiaoqiang_skill2_info: '',
						jinhe_skill: '锦盒',
						jinhe_skill_info: '',
						gifts_tag: '赠',
						zyzlzhongzhu: '中逐',
						zyzlzhongzhu_info: '<h1 style="text-shadow:6px 2px 2px #333;color:red">回合开始时,你可获得逐鹿天下专属牌各一张</h1>',
						逐师: '逐师',
						逐师2: '逐师',
						逐师3: '逐师',
						逐师_info: `<h1 style="text-shadow:6px 2px 2px #333;color:red">回合结束时,你可获得4枚逐标记,一名角色使用牌后,若你有逐标记,你可移除一枚逐标记其随机弃置两张牌,本回合无法使用或打出伤害标签牌</h1>`,
						yingzheng_yitong: '一统',
						yingzheng_yitong_info: '锁定技,当你使用【杀】、【过河拆桥】、【顺手牵羊】、【火攻】时,你令所有不为此牌目标的非群势力角色也成为此牌的目标.你使用【杀】和【顺手牵羊】无距离限制',
						yingzheng_shihuang: '始皇',
						yingzheng_shihuang_info: '锁定技,其他角色的回合结束后,你有X%的几率摸两张牌进行一个额外的回合(X为当前轮数*6,且X最大为100)',
						yingzheng_zulong: '祖龙',
						yingzheng_zulong_info: '锁定技,回合开始时,你摸两张牌,获得一张【传国玉玺】和【真龙长剑】',
						yingzheng_fenshu: '焚书',
						yingzheng_fenshu_info: '锁定技,非群势力角色使用了(出)普通锦囊牌时,你可令此牌无效,并对其造成一点火焰伤害',
						zhenlongchangjian_skill: '真龙长剑',
						zhenlongchangjian_skill_info: '锁定技,你于一回合内使用的第一张普通锦囊牌不是【无懈可击】的合法目标,并获得一张无懈可击和闪',
						chuanguoyuxi_skill: '传国玉玺',
						chuanguoyuxi_skill_info: '出牌阶段开始时,你可以视为使用一张【南蛮入侵】【万箭齐发】/【桃园结义】/【五谷丰登】',
						qinnu_skill: '秦弩',
						qinnu_skill_info: '当你使用【杀】指定一个目标后,你令其防具无效,你于出牌阶段内使用【杀】的次数上限+1;当你失去装备区里的【秦弩】后,你令此牌销毁',
						nushou_jinnu: '劲弩',
						nushou_jinnu_info: '锁定技,你的回合开始时,若你的装备区里没有【秦弩】,你使用一张【秦弩】',
						hufu虎符: '虎符',
						hufu虎符_info: '回合开始时你可令一名角色获得随机2～5张杀,其获得诸葛连弩效果直到其下个回合回合结束后',
						评世: '评世',
						评世_info: '<h1 style="text-shadow:6px 2px 2px #333;color:pink">回合开始时或你受到伤害时,从所有可用武将中随机选择25个武将供你选择,你可以选择一到五个武将.你获得全部选中的武将的技能直到下个回合开始时(并可发动这些回合开始时的技能).</h1>',
						评笔: '评笔',
						评笔_info: '<span style="color:pink; font-size:60px; font-weight:600; text-shadow:1px 0px yellow, 1px 2px yellow, 3px 1px yellow, 2px 3px yellow, 4px 2px yellow, 4px 4px yellow, 5px 3px yellow, 5px 5px yellow, 7px 4px yellow, 6px 6px yellow, 8px 5px yellow, 7px 7px yellow, 9px 6px yellow, 9px 8px yellow, 11px 7px yellow;">锁定技,回合开始前,若你装备区没有装备品评笔,你装备【品评笔*♠️️️5】</span>',
						z镇g骨hz: '镇骨',
						z镇g骨hz3: '镇骨',
						z镇g骨hz_info: '<span style="color:blue; font-size:60px; font-weight:600; text-shadow:1px 0px rgba(128,0,128,0.8), 1px 2px rgba(128,0,128,0.8), 3px 1px rgba(128,0,128,0.8), 2px 3px rgba(128,0,128,0.8), 4px 2px rgba(128,0,128,0.8), 4px 4px rgba(128,0,128,0.8), 5px 3px rgba(128,0,128,0.8), 5px 5px rgba(128,0,128,0.8), 7px 4px rgba(128,0,128,0.8), 6px 6px rgba(128,0,128,0.8), 8px 5px rgba(128,0,128,0.8), 7px 7px rgba(128,0,128,0.8), 9px 6px rgba(128,0,128,0.8), 9px 8px rgba(128,0,128,0.8), 11px 7px rgba(128,0,128,0.8);">回合开始和回合结束阶段若你没有装备明昭盾则装备明昭盾♠️️️6并可令一名角色调整手牌数之差的二倍加一.</span>',
						三奇: '三奇',
						三奇_info: '回合开始时或你受到伤害时,你可获得一张无懈可击、闪、火攻,令一名角色获得一名角色其体力上限数张牌摸其体力上限数张牌,并令第二次选择的角色受到一点无伤害来源的火焰伤害',
						定汉: '定汉',
						定汉_info: '每名角色回合每牌名限一次,一名角色使用了锦囊牌时,你摸一张牌对一名角色造成一点伤害',
						佐策: '佐策',
						佐策_info: '回合开始时你获得两张奇正相生,摸体力上限数张牌',
						骁扶: '骁扶',
						骁扶_info: '锁定技,一名角色使用【杀】时,若你与该角色的距离小于2,你须令该角色选择一项:1.令此【杀】无效;2.受到你造成的1点伤害,你摸2张牌',
						鸾刀惊鸿武继: '武继',
						鸾刀惊鸿武继_info: '回合结束时,你增加一点体力上限并回复一点体力,获得一张神龙偃月刀*♥️️️7',
						鸾刀惊鸿虎啸: '虎啸',
						鸾刀惊鸿虎啸_info: '你造成火焰伤害时,可视为对受伤角色使用七次水淹七军',
						鸾刀惊鸿雪恨: '雪恨',
						鸾刀惊鸿雪恨_info: '出牌阶段限一次,你可获得一张火索连环,选择1到7名角色,这些角色分别弃置一张红色手牌并受到火焰伤害',
						济乡: '济乡',
						济乡_info: '回合开始时,你可令一名角色获得一张霞云彩陵和一张闪',
						称贤: '称贤',
						称贤_info: '出牌阶段限两次,你可获得一张随机食物牌和一张随机普通锦囊牌',
						弱兵: '弱兵',
						弱兵_info: '锁定技,受到的伤害值始终+2,且受到伤害时弃置两张红色牌',
						弥骨: '弥骨',
						弥骨2: '弥骨',
						弥骨3: '弥骨',
						弥骨_info: '你始终跳过你的判定阶段,回合开始时你获得龙卷风🌪、火龙卷、水龙卷、土龙卷、冰龙卷各一张,你使用延时锦囊牌后,可获得一名角色一张牌移动场上一张牌',
						贡簇: '贡簇',
						贡簇_info: '<span style="color:green; font-size:60px; font-weight:600; text-shadow:1px 0px white, 1px 2px white, 3px 1px white, 2px 3px white, 4px 2px white, 4px 4px white, 5px 3px white, 5px 5px white, 7px 4px white, 6px 6px white, 8px 5px white, 7px 7px white, 9px 6px white, 9px 8px white, 11px 7px white;">游戏开始时或回合开始时,你可将四张箭簇置于你的武将牌上,你可视为对1到3名角色使用一张万箭齐发</span>',
						贡客: '贡客',
						贡客2: '贡客',
						贡客3: '贡客',
						贡客_info: '<span style="color:green; font-size:60px; font-weight:600; text-shadow:1px 0px white, 1px 2px white, 3px 1px white, 2px 3px white, 4px 2px white, 4px 4px white, 5px 3px white, 5px 5px white, 7px 4px white, 6px 6px white, 8px 5px white, 7px 7px white, 9px 6px white, 9px 8px white, 11px 7px white;">出牌阶段限一次,你可选择一名角色,从你的<簇>中选择一张【箭簇】交给该角色.且以下效果持续至其下个回合结束后:其使用与<箭簇>的点数相同牌后,失去2点体力;花色相同,则失去1点体力.其回合结束时,根据<箭簇>的点数执行以下对应的效果:➴1至5点:其弃置装备区内的全部牌,并弃置一张红色的手牌.➴6至7点:你与其进行拼点,若你赢其受到一点无伤害来源的毒属性伤害,否则你摸两张牌.➴8至10点:其判定区置入一张乐不思蜀.➴11至13点:失去体力值至1.</span>',
						星日: '星日',
						星日_info: '你造成普通伤害后可对一名角色造成随机1到2点火焰伤害并摸等量牌',
						野性: '野性',
						野性_info: '你对一名角色造成伤害后,可令其随机弃置随机1到2张黑色牌并失去等量体力',
						挈挾: '挈挾',
						挈挾2: '挈挾',
						挈挾_info: '游戏开始时或回合开始时,你可令所有敌方角色,装备【折戟】【断刀】中的随机一个,武将牌替换为弱兵.(其体力值为更换前体力值).获得【撩戟】、【恶斗双戟】、【狂歌戟】各一张.【撩戟】、【狂歌戟】、【恶斗双戟】可无限装备之',
						摧決: '摧決',
						摧決2: '摧決',
						摧決_info: '回合开始时,你获得2*敌方角色数张撩戟.你造成伤害时,若你有撩戟,可令此伤害+你的撩戟数.你摸你的撩戟数+黑色牌数张牌,增加撩戟数+黑色牌数点护甲',
						荐降映月诗酒: '荐降',
						荐降映月诗酒_info: '一名其他角色使用指定了你为目标的牌前,可令一名角色获得一张烽火狼烟摸两张牌',
						审时映月诗酒: '审时',
						审时映月诗酒_info: '出牌阶段限一次,你可以将一张牌交给一名角色,对其造成两点伤害,若该角色因此死亡,则你可以令一名角色将手牌摸至四张,其他角色对你造成伤害后,你可以获得一张休养生息观看该角色的手牌,交给其一张牌,当前回合结束时,你将摸四张牌',
						审时映月诗酒3: '审时',
						审时映月诗酒2: '审时',
						蒯良蒯越不臣: '不臣',
						蒯良蒯越不臣2: '不臣',
						蒯良蒯越不臣_info: '<span style="color:blue;">选将阶段随机势力范围(魏,群)的一个势力,回合开始或有其他角色濒死时可变更势力(非国战模式改为变更身份).</span>',
						白鸟秘传: '白鸟秘传',
						白鸟秘传_info: '回合开始时,你可令一名角色弃置两张红色牌,你弃置其两张牌,可令一名角色获得一张仙丹',
						龙祭: '龙祭',
						龙祭_info: '你使用【杀】时,展示牌堆顶5张牌,若其中红牌数大于黑牌数,则你获得一张【火锁连环】,所有敌方角色各弃置1张黑色牌并获得一张【剧毒】;否则你摸2张牌',
						潜袭mdqx: '潜袭',
						潜袭mdqx2: '潜袭',
						潜袭mdqx3: '潜袭',
						潜袭mdqx_info: '回合开始时你可摸1+你损失体力值的牌,展示一张牌,令至多3名角色无法使用或打出你以此法所展示的颜色相同的牌,你对一名角色造成伤害后可令其扣减一点体力上限',
						凉袭mdlx: '凉袭',
						凉袭mdlx_info: '锁定技,你计算与其他角色距离始终-你伤害标签牌数',
						疾风暴雷: '疾风暴雷',
						疾风暴雷2: '疾风暴雷',
						疾风暴雷_info: '<h1 style="text-shadow:6px 2px 2px #333;color:red">回合开始时,你可弃置一名角色两张牌,其装备碎剑,你获得长蛇阵和两张随机伤害标签牌.锁定技,你使用点数大于6的牌不计入次数限制</h1>',
						狼祭: '狼祭',
						狼祭_info: '<h1 style="text-shadow:6px 2px 2px #333;color: #4B0082">每回合限2次,你使用杀时,获得所有敌方角色各一张牌,若为黑色牌对其造成1～3点雷电伤害,否则回复一点体力.最后你获得一张过河焚城</h1>',
						凤凰: '凤凰',
						凤凰_info: '回合开始时你可弃置1到4名角色各两张牌,若其中有♣️️️牌你摸两张牌回复4点体力.你获得一张过河焚城',
						安虞: '安虞',
						安虞2: '安虞',
						安虞_info: '每回合每项各限一次,一名角色使用杀后你可令目标角色、一名角色获得装备牌后你可令其,获得一张非伤害标签牌,0.3概率获得一张仙丹',
						野权计: '野·权计',
						野自立: '野·自立',
						野排异: '野·排异',
						野排异_info: '出牌阶段限二次,你可令一名角色摸2加权标记数张牌,你可对1+权数量名角色造成1点伤害,移去一张<权>',
						野自立_info: '准备阶段开始时,若<权>的数量不小于3,你加1点体力上限,选择一项:1、回复1点体力;2、摸两张牌.你获得<排异>',
						野权计_info: '每当你造成或受到1点伤害后,你可以可摸一张牌,将一张手牌置于武将牌上,称为<权>;你的手牌上限+X(X为<权>的数量)',
						野观星: '野·观成',
						野观星_info: '回合开始时,你可发动一次观星,且观看牌数为5+权数',
						野挑衅: '野·挑衅',
						野挑衅_info: '出牌阶段限两次,你可选择一名角色弃置其1+权数张牌,可再选择一名角色视为该角色对你所弃牌的角色使用一张杀',
						野志继: '野·志继',
						野志继_info: '回合开始时,若你手牌数小于体力上限,你摸两张牌回复一点体力',
						和昇: '和昇',
						和昇_info: '出牌阶段开始时,你摸一张牌选择一名角色摸一张牌,若其黑色牌更多,随机一名敌方角色装备碎剑,视为其对该角色使用2-其攻击范围数张万箭齐发',
						激峭: '激峭',
						激峭_info: '每名角色回合限5次,你使用牌后,可摸随机1～5张牌,展示牌堆顶的五张牌,可选择一名角色视为对其使用随机黑色牌数～红色牌数张杀',
						凶疑: '凶疑',
						凶疑_info: '回合结束时,你可选择1到4名角色,令其武将牌替换为腾龙倒江(孙翊)+徐氏',
						义遂: '义遂',
						义遂_info: '回合开始时你进行一次判定若为黑色你获得技能义从,否则弃置一名角色一张牌若不为杀对其造成一点伤害',
						肋幽: '肋幽',
						肋幽_info: '出牌阶段限一次,你可令一名角色摸2+其黑色牌数张牌,并可令一名角色从剧毒、烈毒中获得随机1张,其受到伤害后弃置2+已损失体力值数张牌直到其下个回合结束后',
						率于: '率于',
						率于_info: '回合开始时,你可选择一名角色摸其势力角色数+其攻击范围张牌,令其执行一项军令',
						御陵: '御陵',
						御陵_info: '一名角色回合结束时,若其杀数量小于2,你可获得其一张牌,0.5概率获得一张仙桃',
						援绶: '援绶',
						援绶_info: '每名角色回合限2次,你使用牌后,获得白马、白马义从技能卡牌中的随机一张,并摸一张牌,可选择一名角色,若其基本牌数小于2对其造成一点伤害',
						毒蛇秘传: '毒蛇秘传',
						毒蛇秘传_info: '出牌阶段开始时,你可令一名角色获得1+你黑色牌数张烈毒',
						越王勾践剑: '越王勾践剑',
						越王勾践剑_info: '出牌阶段或你使用牌后每回合各限两次,若你黑色牌数大于红色牌数,你摸两张牌可视为对一名角色使用一张杀',
						雪兽: '雪兽',
						雪兽_info: '回合开始时,你可选择一名角色,你回复1+其黑色牌数点体力',
						冰躯: '冰躯',
						冰躯_info: '<span style="color: #00bfff; font-size:60px; font-weight:600; text-shadow:1px 0px black, 1px 2px black, 3px 1px black, 2px 3px black, 4px 2px black, 4px 4px black, 5px 3px black, 5px 5px black, 7px 4px black, 6px 6px black, 8px 5px black, 7px 7px black, 9px 6px black, 9px 8px black, 11px 7px black;">你受到伤害时 获得一张冰杀,若为火属性伤害防止之,若为冰属性伤害防止之回复一点体力,否则此伤害减一</span>',
						凛寒: '凛寒',
						凛寒_info: '<span style="color: #00bfff; font-size:60px; font-weight:600; text-shadow:1px 0px black, 1px 2px black, 3px 1px black, 2px 3px black, 4px 2px black, 4px 4px black, 5px 3px black, 5px 5px black, 7px 4px black, 6px 6px black, 8px 5px black, 7px 7px black, 9px 6px black, 9px 8px black, 11px 7px black;">出牌阶段限一次,你可弃置一名角色3张牌,视为对其使用1+其中非装备牌数张冰杀</span>',
						败兵: '败兵',
						败兵_info: '出牌阶段开始时或你成为杀的目标时,你弃置2+你黑色或伤害标签牌数张牌失去一点体力',
						道役: '道役',
						道役_info: '<h1 style="text-shadow:6px 2px 2px #333;color: #800080;">回合开始时或你受到伤害或体力流失时,你可展示牌堆顶的5张牌,若其中包含红色牌或装备牌,你可令一名角色失去一点体力,你增加一点护甲,0.66概率获得一张【仙丹】.</h1>',
						仙魄: '仙魄',
						仙魄_info: '<h1 style="text-shadow:6px 2px 2px #333;color: #800080;">你濒死时,可进行一次判定,若不为♣️️️,你增加3+有♣️️牌角色数点体力上限,回复3+有♣️️牌角色数点体力.</h1>',
						水土流失: '水土流失',
						水土流失_info: '回合开始时你可弃置一名角色两张牌,若其中包含点数不大于7的牌,对其造成一点水属性伤害,一点土属性伤害',
						陷雷: '陷雷',
						陷雷_info: '锁定技,回合结束时,你须进行一次判定若为♠️️️你受到2点雷电伤害,否则你受到一点雷电伤害',
						陷石: '陷石',
						陷石_info: '锁定技,回合结束时,你须进行一次判定若为♣️️️你受到2点土属性伤害,否则你受到一点土属性伤害',
						义炬: '义炬',
						义炬_info: '回合开始时,你可弃置一名角色一张牌,若其伤害标签牌数不大于3,对其造成一点火焰伤害',
						巾鸣: '巾鸣',
						巾鸣_info: '回合开始时你可获得一张【五雷轰顶】、【冰杀】,选择一名角色对其造成1+你与其伤害标签牌数差值点雷电伤害',
						砺剑忾仇诛佞: '诛佞',
						砺剑忾仇诛佞_info: '出牌阶段限4次,你可弃置1到你手牌数的牌,令全体友方角色获得这些牌的复制,可视为使用一张基本牌或普通锦囊牌',
						砺剑忾仇封乡: '封乡',
						砺剑忾仇封乡_info: '你的回合开始前可标记一名角色,其每回合限一次,当其的牌数发生变化结束后,回复体力后,其所有友方角色摸2张牌',
						血途: '血途',
						血途_info: '出牌阶段限两次,你可令一名角色摸两张牌回复一点体力获得一张药,并可令一名角色弃置两张牌失去一点体力',
						俘铸: '俘铸',
						俘铸_info: '回合开始或结束时,你摸两张牌并装备【破俘刀*♠️️️6】',
						起营: '起营',
						起营_info: '回合开始,你召唤陷阵营×2与你协同作战,失去此技能',
						陷阵gs: '陷阵',
						陷阵gs2: '陷阵',
						陷阵gs_info: '出牌阶段限两次,你可弃置一名角色一张牌,令你本回合对其使用杀无次数距离限制,若为酒或点数不大于9其失去一点体力,一名角色使用酒后,你可令其失去一点体力,其下次造成的伤害为0',
						禁酒gs: '禁酒',
						禁酒gs2: '禁酒',
						禁酒gs3: '禁酒',
						禁酒gs4: '禁酒',
						禁酒gs5: '禁酒',
						禁酒gs_info: '每名角色回合限一次,一名角色获得牌后你可获得其等量牌,令其获得等量酒,你的酒视为杀且造成的伤害+1',
						营图: '营图',
						营图_info: '每回合限一次,你的上家或下家于摸牌阶段外获得牌后,你可以获得其一张牌,令一名角色获得一张你随机一张牌的复制和灵芝,其可以使用一张杀',
						从势: '从势',
						从势_info: '一名角色使用杀或非伤害标签牌后,你可摸场上势力数张牌,并令其手牌上限减去群势力角色数,直到其下个回合结束后(不可叠加)',
						裂胆ld: '裂胆',
						裂胆ld_info: '一名角色回合开始时,你的手牌数、体力值和装备区里的牌数每有一项大于等于该角色,便摸一张牌增加一点体力上限回复一点体力,否则其获得1枚<胆>标记',
						壮胆zd: '壮胆',
						壮胆zd_info: '一名角色回合结束阶段,若其<胆>数不小于5,你可选择令其死亡或者令其回复<胆>数的体力你获得一张【苍铁槊♠️️️5】',
						画皮: '画皮',
						画皮_info: '回合开始时你获得一张女性角色技能卡牌,你回复此牌技能数点体力',
						直取: '直取',
						直取_info: '回合结束时,你可展示并获得4+群雄角色数张牌,你可使用非装备牌',
						义锋: '义锋',
						义锋_info: '受到伤害时,可令其他角色计算与你距离+2,你计算与其他角色距离-2(不可叠加)直到你的下个回合开始时',
						义锋2: '义锋',
						降将: '降将',
						降将_info: '<span style="font-size: 40px;background: linear-gradient(to right, #b3b3cc, #6699cc);-webkit-background-clip: text;color: transparent;font-family: chaozisheleishenbianjianfan;">锁定技,你成为一名角色使用杀的目标时,视为其对你使用一张弃甲曳兵,并随机弃置一张牌</span>',
						流云: '流云',
						流云_info: '<h1 style="text-shadow:6px 2px 2px #333;color: pink;font-family: chaozisheleishenbianjianfan;">摸牌阶段开始时,从弃牌堆和牌堆中的所有的♥️️牌名相同的牌中随机获得4张.</h1>',
						踏影: '踏影',
						踏影_info: '<h1 style="text-shadow:6px 2px 2px #333;color: pink;font-family: chaozisheleishenbianjianfan;">出牌阶段限一次,你可选择一名角色,你弃置其一张牌.若此牌不为♥️️,目标角色失去一点体力,进行一次判定,若判定牌不为♥️️,目标角色失去一点体力.若弃置的牌或判定的牌有一张不为♥️️️牌,你获得一张食物牌.</h1>',
						梦卜zx: `<span style="color: #00CED1;
            filter: brightness(3);
            font-size: 20px;
            font-weight: bold;">梦卜</span>`,
						梦卜zx_info: `<span style="color: #00CED1;
            filter: brightness(3);
            font-size: 20px;
            font-weight: bold;">每回合限两次,你使用牌后,摸你的非标签牌数的牌,获得2张伤害标签牌(当前牌堆包含不从牌堆内获得),弃置一名角色3张牌对其造成一点火焰伤害</span>`,
						寤寐zx: `<span style="color: #00CED1;
            filter: brightness(3);
            font-size: 20px;
            font-weight: bold;">寤寐</span>`,
						寤寐zx_info: `<span style="color: #00CED1;
            filter: brightness(3);
            font-size: 20px;
            font-weight: bold;">回合开始时,你可令一名角色与你回复一点体力,其摸4张牌,执行一个额外的出牌阶段</span>`,
						环币: '环币',
						环币_info: '回合开始时,你可选择一张食物牌名,获得你选择牌名的食物牌,你摸两张牌',
						剑币: '剑币',
						剑币_info: '回合开始时,你可选择一张武器牌名,获得你选择牌名的武器牌,你摸两张牌',
						布币: '布币',
						布币_info: '回合开始时,你可选择一张防具牌名,获得你选择牌名的防具牌,你摸两张牌',
						圆币: '圆币',
						圆币_info: '回合开始时,你可选择一张宝物牌名,获得你选择牌名的宝物牌,你摸两张牌',
						摇钱: '摇钱',
						摇钱_info: '<h1 style="text-shadow:6px 2px 2px #333;color: gold;font-family: chaozisheleishenbianjianfan;">回合开始时,你各随机获得牌名不同两张角色技能卡牌、基本牌、普通锦囊牌、装备牌、延时锦囊牌、食物牌(一次性获得),并摸两张牌</h1>',
					},
					skill: {
						qqwz仇绝: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'dyingBegin',
							},
							forced: true,
							filter(event, player) {
								return event.player != player && player.getEnemies().includes(event.player);
							},
							content() {
								player.recover(trigger.player.hp);
								player.draw(trigger.player.maxHp);
							},
							group: 'qqwz仇绝_1',
							subSkill: {
								1: {
									trigger: {
										player: 'damageBegin',
									},
									forced: true,
									audio: 'ext:洪荒ol/audio:2',
									_priority: 16,
									content() {
										'step 0';
										player.chooseToDiscard(true, 'he');
										trigger.num++;
										('step 1');
										var enemies = player.getEnemies();
										var list = game.filterPlayer(function (current) {
											return enemies.includes(current);
										});
										var target = list.randomGet();
										var po = trigger.num * 2;
										player.line(target);
										target.damage(po);
									},
								},
							},
						},
						qqwz前尘: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							content() {
								trigger.num++;
							},
							group: ['qqwz前尘_1', 'qqwz前尘_2', 'qqwz前尘_3'],
							subSkill: {
								1: {
									audio: 'ext:洪荒ol/audio:2',
									trigger: {
										player: 'damageBegin',
									},
									content() {
										trigger.num--;
									},
								},
								2: {
									audio: 'ext:洪荒ol/audio:2',
									trigger: {
										target: 'shaBegin',
									},
									forced: true,
									content() {
										player.recover();
										var list = ['shan'];
										player.gain(game.createCard(list.randomGet()));
										player.$draw();
									},
								},
								3: {
									audio: 'ext:洪荒ol/audio:2',
									trigger: {
										target: 'useCardToBegin',
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'juedou';
									},
									content() {
										player.changeHujia(player.maxHp - player.hp);
										var list = ['sha'];
										player.gain(game.createCard(list.randomGet()));
										player.$draw();
										player.gain(game.createCard(list.randomGet()));
										player.$draw();
									},
								},
							},
						},
						鬼雄: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0]) == 'd';
							},
							content() {
								player.gain(trigger.cards);
								player.$gain2(trigger.cards);
								player.gainMaxHp(1);
							},
							ai: {
								maixie: true,
								effect: {
									target(card, player) {
										if (player.hasSkill('jueqing')) return [1, -1];
										if (get.tag(card, 'damage')) return [1, 0.5];
									},
								},
							},
							check(event, player) {
								return !sgs.needKongcheng(player, true);
							},
						},
						连珠: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							filterCard: true,
							check(card) {
								return 8 - get.value(card);
							},
							discard: false,
							prepare(cards, player, targets) {
								player.$give(cards, targets[0]);
							},
							content() {
								'step 0';
								target.storage.lianzhu = cards[0];
								target.gain(cards[0]);
								('step 1');
								target.chooseControl('摸牌', '弃牌');
								('step 2');
								if (result.control == '摸牌') {
									player.draw(2);
								} else {
									target.chooseToDiscard(2, true);
								}
							},
							ai: {
								order: 9,
								result: {
									target(player, target) {
										return -target.countCards('he') - (player.countCards('h', 'du') ? 1 : 0);
									},
								},
								threaten: 2,
							},
						},
						魔女: {
							trigger: {
								target: 'useCardToBegin',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								trigger.player.clearSkills();
							},
						},
						慷慨: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'shaBegin',
							},
							filter(event, player) {
								return get.distance(player, event.target) <= 2;
							},
							check(event, player) {
								return get.attitude(player, event.target) >= 0;
							},
							content() {
								'step 0';
								player.draw();
								if (trigger.target != player) {
									player.chooseCard(true, 'he', '交给' + get.translation(trigger.target) + '一张牌').set('ai', function (card) {
										if (get.position(card) == 'e') return -1;
										if (card.name == 'shan') return 1;
										if (get.type(card) == 'equip') return 0.5;
										return 0;
									});
								} else {
									event.finish();
								}
								('step 1');
								trigger.target.gain(result.cards);
								player.$give(result.cards, trigger.target);
								event.card = result.cards[0];
								if (get.type(event.card) != 'equip') event.finish();
								('step 2');
								if (!trigger.target.isMin()) {
									trigger.target
										.chooseBool('是否装备' + get.translation(event.card) + '？')
										.set('ai', function () {
											var current = _status.event.player.getEquips(get.subtype(_status.event.card));
											if (current && current.length) {
												return ai.get.equipValue(event.card) > ai.get.equipValue(current[0]);
											}
											return true;
										})
										.set('card', event.card);
								} else {
									event.finish();
								}
								('step 3');
								if (result.bool) {
									trigger.target.equip(event.card);
								}
							},
							ai: {
								threaten: 1.1,
							},
						},
						天火: {
							enable: 'phaseUse',
							audio: 'ext:洪荒ol/audio:2',
							filter(event, player) {
								return !player.storage.yeyan;
							},
							init(player) {
								player.storage.yeyan = false;
							},
							filterTarget(card, player, target) {
								var length = ui.selected.cards.length;
								return player != target && (length == 0 || length == 4);
							},
							filterCard(card) {
								var suit = card.suit;
								for (var i = 0; i < ui.selected.cards.length; i++) {
									if (ui.selected.cards[i].suit == suit) return false;
								}
								return true;
							},
							mark: true,
							selectCard: [0, 4],
							line: 'fire',
							check() {
								return -1;
							},
							selectTarget() {
								if (ui.selected.cards.length == 4) return [1, 1];
								if (ui.selected.cards.length == 0) return [1, 3];
								game.uncheck('target');
								return [1, 3];
							},
							content() {
								player.unmark('yeyan');
								player.storage.yeyan = true;
								if (cards.length == 4) {
									player.loseHp(1);
									target.damage('fire', 6);
								} else {
									target.damage('fire');
								}
							},
							intro: {
								content: 'limited',
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										if (target.hasSkillTag('nofire')) return 0;
										if (lib.config.mode == 'versus') return -1;
										for (var i = 0; i < game.players.length; i++) {
											if (lib.config.mode == 'identity') {
												if (game.players[i].ai.shown <= 0.2) return 0;
											} else if (lib.config.mode == 'guozhan') {
												if (game.players[i].identity == 'unknown') return 0;
											}
										}
										return get.damageEffect(target, player);
									},
								},
							},
						},
						琴音: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseDiscardEnd',
							},
							forced: true,
							filter(event, player) {
								return event.cards && event.cards.length > 1;
							},
							content() {
								'step 0';
								if (typeof event.count != 'number') {
									// event.count=trigger.cards.length-1;
									event.count = 1;
								}
								var recover = 0,
									lose = 0;
								for (var i = 0; i < game.players.length; i++) {
									if (!game.players[i].isOut()) {
										if (game.players[i].hp < game.players[i].maxHp) {
											if (get.attitude(player, game.players[i]) > 0) {
												if (game.players[i].hp < 2) {
													lose--;
													recover += 0.5;
												}
												lose--;
												recover++;
											} else if (get.attitude(player, game.players[i]) < 0) {
												if (game.players[i].hp < 2) {
													lose++;
													recover -= 0.5;
												}
												lose++;
												recover--;
											}
										} else {
											if (get.attitude(player, game.players[i]) > 0) {
												lose--;
											} else if (get.attitude(player, game.players[i]) < 0) {
												lose++;
											}
										}
									}
								}
								var prompt = get.prompt('qinyin') + '(剩余' + get.cnNumber(event.count) + '次)';
								player.chooseControl('失去体力', '回复体力', 'cancel', ui.create.dialog(get.prompt('qinyin'), 'hidden')).ai = function () {
									if (lose > recover && lose > 0) return 0;
									if (lose < recover && recover > 0) return 1;
									return 2;
								};
								('step 1');
								if (result.bool == false || result.control == 'cancel') {
									event.finish();
								} else {
									event.bool = result.control == '回复体力';
									event.num = 0;
									event.players = game.players.slice(0);
								}
								('step 2');
								if (event.num < event.players.length) {
									var target = event.players[event.num];
									if (event.bool) {
										target.recover();
									} else {
										target.loseHp();
									}
									event.num++;
									event.redo();
								}
								('step 3');
								if (event.count > 1) {
									event.count--;
									event.goto(0);
								}
							},
							ai: {
								expose: 0.1,
								threaten: 2,
							},
						},
						白衣: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseDrawBefore',
							},
							content() {
								'step 0';
								trigger.untrigger();
								trigger.finish();
								('step 1');
								event.cards = get.cards(10);
								if (event.isMine() == false) {
									event.dialog = ui.create.dialog('涉猎', event.cards);
								}
								('step 2');
								if (event.dialog) event.dialog.close();
								var dialog = ui.create.dialog('涉猎', event.cards);
								player.chooseButton([0, 5], dialog, true).filterButton = function (button) {
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										if (button.link.suit == ui.selected.buttons[i].link.suit) return false;
									}
									return true;
								};
								('step 3');
								var cards2 = [];
								for (var i = 0; i < result.buttons.length; i++) {
									cards2.push(result.buttons[i].link);
									cards.remove(result.buttons[i].link);
								}
								player.gain(cards2);
								if (cards2.length) player.$gain(cards2);
								for (var i = 0; i < cards.length; i++) {
									ui.discardPile.appendChild(cards[i]);
								}
							},
							ai: {
								threaten: 1.2,
							},
						},
						圣光: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 3,
							filterTarget(card, player, target) {
								return target != player && target.countCards('h');
							},
							content() {
								'step 0';
								event.videoId = lib.status.videoId++;
								var cards = target.getCards('h');
								if (player.isOnline2()) {
									player.send(
										function (cards, id) {
											ui.create.dialog('攻心', cards).videoId = id;
										},
										cards,
										event.videoId
									);
								}
								event.dialog = ui.create.dialog('攻心', cards);
								event.dialog.videoId = event.videoId;
								if (!event.isMine()) {
									event.dialog.style.display = 'none';
								}
								player
									.chooseButton()
									.set('filterButton', function (button) {
										return button.link.suit == 'heart';
									})
									.set('dialog', event.videoId);
								('step 1');
								if (result.bool) {
									event.card = result.links[0];
									var func = function (card, id) {
										var dialog = get.idDialog(id);
										if (dialog) {
											for (var i = 0; i < dialog.buttons.length; i++) {
												if (dialog.buttons[i].link == card) {
													dialog.buttons[i].classList.add('selectedx');
												} else {
													dialog.buttons[i].classList.add('unselectable');
												}
											}
										}
									};
									if (player.isOnline2()) {
										player.send(func, event.card, event.videoId);
									} else if (event.isMine()) {
										func(event.card, event.videoId);
									}
									player.chooseControl('gongxin_discard', 'gongxin_top');
								} else {
									if (player.isOnline2()) {
										player.send('closeDialog', event.videoId);
									}
									event.dialog.close();
									event.finish();
								}
								('step 2');
								if (player.isOnline2()) {
									player.send('closeDialog', event.videoId);
								}
								event.dialog.close();
								var card = event.card;
								if (result.control == 'gongxin_top') {
									target.lose(card);
									player.showCards(card, '置于牌堆顶');
								} else {
									target.discard(card);
									event.finish();
								}
								('step 3');
								event.card.fix();
								ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
								game.log(player, '将', event.card, '置于牌堆顶');
							},
							ai: {
								threaten: 1.5,
								result: {
									target(player, target) {
										return -target.countCards('h');
									},
								},
								order: 10,
								expose: 0.4,
							},
						},
						归心: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							check(event, player) {
								if (player.isTurnedOver()) return true;
								var num = 0;
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].countCards('he') && game.players[i] != player && get.attitude(player, game.players[i]) <= 0) {
										num++;
									}
									if (game.players[i].countCards('j') && game.players[i] != player && get.attitude(player, game.players[i]) > 0) {
										num++;
									}
									if (num >= 2) return true;
								}
								return false;
							},
							content() {
								'step 0';
								var targets = game.players.slice(0);
								targets.remove(player);
								targets.sort(lib.sort.seat);
								event.targets = targets;
								event.num = 0;
								('step 1');
								if (num < event.targets.length) {
									if (event.targets[num].countCards('hej')) {
										player.gainPlayerCard(event.targets[num], 'hej', true);
									}
									event.num++;
									event.redo();
								}
								('step 2');
								player.turnOver();
							},
							ai: {
								maixie: true,
								threaten(player, target) {
									if (target.hp == 1) return 2.5;
									return 1;
								},
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkill('jueqing')) return [1, -2];
											if (target.hp == 1) return;
											if (target.isTurnedOver()) return [0, 3];
											var num = 0;
											for (var i = 0; i < game.players.length; i++) {
												if (game.players[i].countCards('he') && game.players[i] != player && get.attitude(player, game.players[i]) <= 0) {
													num++;
												}
												if (game.players[i].countCards('j') && game.players[i] != player && get.attitude(player, game.players[i]) > 0) {
													num++;
												}
												if (num > 2) return [0, 1];
												if (num == 2) return [0.5, 1];
											}
										}
									},
								},
							},
						},
						千影: {
							mod: {
								globalTo(from, to, distance) {
									return distance + 2;
								},
							},
						},
						星辰: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'gameDrawAfter',
								player: 'phaseBegin',
							},
							forced: true,
							check(event, player) {
								return player.hp <= 1;
							},
							filter(event, player) {
								return !player.storage.星辰;
							},
							content() {
								'step 0';
								player.gain(get.cards(20))._triggered = null;
								('step 1');
								if (player == game.me) {
									game.addVideo('delay', null);
								}
								player.chooseCard('选择十张牌作为星', 10, true).ai = function (card) {
									return get.value(card);
								};
								('step 2');
								player.lose(result.cards, ui.special)._triggered = null;
								player.storage.qixing = result.cards;
								game.addVideo('storage', player, ['qixing', get.cardsInfo(player.storage.qixing), 'cards']);
							},
							mark: true,
							intro: {
								mark(dialog, content, player) {
									if (content && content.length) {
										if (player == game.me || player.isUnderControl()) {
											dialog.add(content);
										} else {
											return '共有' + get.cnNumber(content.length) + '张星';
										}
									}
								},
								content(content, player) {
									if (content && content.length) {
										if (player == game.me || player.isUnderControl()) {
											return get.translation(content);
										}
										return '共有' + get.cnNumber(content.length) + '张星';
									}
								},
							},
							group: ['星辰2'],
						},
						星辰2: {
							trigger: {
								player: 'phaseDrawAfter',
							},
							forced: true,
							filter(event, player) {
								return player.storage.qixing && player.storage.qixing.length;
							},
							content() {
								'step 0';
								player.chooseCard('选择任意张手牌与星交换', [1, player.countCards('h')]).ai = function (card) {
									return 1;
								};
								('step 1');
								if (result.bool) {
									player.lose(result.cards, ui.special)._triggered = null;
									player.storage.qixing = player.storage.qixing.concat(result.cards);
									game.addVideo('storage', player, ['qixing', get.cardsInfo(player.storage.qixing), 'cards']);
									event.num = result.cards.length;
								} else {
									event.finish();
								}
								('step 2');
								player.chooseCardButton(player.storage.qixing, '选择' + event.num + '张牌作为手牌', event.num, true).ai = function (button) {
									if (player.skipList.includes('phaseUse') && button.link != 'du') {
										return -get.value(button.link);
									}
									return get.value(button.link);
								};
								if (player == game.me && _status.auto) {
								}
								('step 3');
								player.gain(result.links)._triggered = null;
								for (var i = 0; i < result.links.length; i++) {
									player.storage.qixing.remove(result.links[i]);
								}
								game.addVideo('storage', player, ['qixing', get.cardsInfo(player.storage.qixing), 'cards']);
								if (player == game.me && _status.auto) {
								}
							},
						},
						晨雾: {
							trigger: {
								player: 'phaseEnd',
							},
							_priority: 1,
							forced: true,
							filter(event, player) {
								return player.storage.qixing && player.storage.qixing.length;
							},
							audio: 'ext:洪荒ol/audio:2',
							content() {
								'step 0';
								player.chooseTarget('选择角色获得晨雾标记', [1, Math.min(game.players.length, player.storage.qixing.length)]).ai = function (target) {
									if (target.isMin()) return 0;
									if (target.hasSkill('biantian2')) return 0;
									var att = get.attitude(player, target);
									if (att >= 4) {
										if (target.hp == 1 && target.maxHp > 2) return att;
										if (target.hp == 2 && target.maxHp > 3 && target.countCards('he') == 0) return att * 0.7;
										return 0;
									}
									return -1;
								};
								('step 1');
								if (result.bool) {
									var length = result.targets.length;
									for (var i = 0; i < length; i++) {
										result.targets[i].addSkill('晨雾2');
										result.targets[i].popup('晨雾');
									}
									game.log(player, '对', result.targets, '发动了晨雾');
									player.chooseCardButton('弃置' + get.cnNumber(length) + '枚星', length, player.storage.qixing, true);
								} else {
									event.finish();
								}
								('step 2');
								for (var i = 0; i < result.links.length; i++) {
									player.storage.qixing.remove(result.links[i]);
								}
								if (player.storage.qixing.length == 0) {
									player.unmarkSkill('qixing');
								}
								game.addVideo('storage', player, ['qixing', get.cardsInfo(player.storage.qixing), 'cards']);
								player.discard(result.links);
							},
							group: '晨雾3',
						},
						晨雾2: {
							trigger: {
								player: 'damageBefore',
							},
							filter(event, player) {
								if (event.nature != 'thunder') return true;
								return false;
							},
							mark: true,
							forced: true,
							content() {
								trigger.untrigger();
								trigger.finish();
							},
							ai: {
								nofire: true,
								nodamage: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage') && !get.tag(card, 'thunderDamage')) return [0, 0];
									},
								},
							},
							intro: {
								content: '已获得辰雾标记',
							},
						},
						晨雾3: {
							trigger: {
								player: ['phaseBegin', 'dieBegin'],
							},
							forced: true,
							popup: false,
							silent: true,
							content() {
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].hasSkill('晨雾2')) {
										game.players[i].removeSkill('晨雾2');
										game.players[i].popup('晨雾2');
									}
									if (game.players[i].hasSkill('kuangfeng2')) {
										game.players[i].removeSkill('kuangfeng2');
										game.players[i].popup('kuangfeng2');
									}
								}
							},
						},
						暴风: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return player.storage.qixing && player.storage.qixing.length;
							},
							content() {
								'step 0';
								player.chooseTarget('选择一名角色获得暴风标记').ai = function (target) {
									return -1;
								};
								('step 1');
								if (result.bool) {
									var length = result.targets.length;
									for (var i = 0; i < length; i++) {
										result.targets[i].addSkill('暴风2');
										result.targets[i].popup('暴风');
									}
									player.chooseCardButton('弃置' + get.cnNumber(length) + '枚星', length, player.storage.qixing, true);
								} else {
									event.finish();
								}
								('step 2');
								for (var i = 0; i < result.links.length; i++) {
									player.storage.qixing.remove(result.links[i]);
								}
								if (player.storage.qixing.length == 0) {
									player.unmarkSkill('qixing');
								}
								game.addVideo('storage', player, ['qixing', get.cardsInfo(player.storage.qixing), 'cards']);
								player.discard(result.links);
							},
						},
						暴风2: {
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player) {
								if (event.nature == 'fire') return true;
								return false;
							},
							mark: true,
							intro: {
								content: '已获得暴风标记',
							},
							forced: true,
							content() {
								trigger.num++;
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'fireDamage')) return 1.5;
									},
								},
							},
						},
						konghunpi: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseUseBefore',
							},
							content() {
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i] != player) {
										game.players[i].damage(1, 'thunder');
										var chat = ['敌计吾早已了然于胸啦,哈哈哈哈', '以静谋动反客为主', '吾料定孔明平生谨慎,所以城中必有埋伏,(后路改前路)速速撤军!'].randomGet();
										player.say(chat);
									}
								}
							},
						},
						duanyu: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								player.damage(1, 'thunder');
							},
						},
						反噬: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								if (event.parent.name != '雷袭') {
									for (var i = 0; i < game.players.length; i++) {
										if (game.players[i].getCards('e') && game.players[i] != event.player) return true;
									}
								}
								return false;
							},
							content() {
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].getCards('e') && game.players[i] != trigger.player) {
										game.players[i].damage(1, 'thunder');
									}
								}
							},
						},
						惑妃: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'phaseUseBefore',
							},
							check(event, player) {
								var q = game.countPlayer(function (current) {
									return get.attitude(player, current) <= 0;
								});
								if (q > 0) return true;
							},
							prompt: '是否发动<惑妃>可以获得一名其他角色一张牌,若该牌不为【杀】,视为你对其使用了一张【南蛮入侵】;若该牌为【杀】,你再获得其一张牌',
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('选择一名其他角色获得其一张手牌'), 1, function (card, player, target) {
										return target != player && target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										return get.attitude(player, target) <= 0;
									});
								('step 1');
								if (result.bool) {
									t = result.targets[0];
									player.gainPlayerCard(t, 'he', 1, true);
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									reca = result.cards[0];
									if (reca.name == 'sha') {
										player.gainPlayerCard(t, 'he', 1, true);
									} else {
										player.useCard({ name: 'nanman' }, t, false);
									}
								}
							},
						},
						幽爱: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							prompt: '弃置一张手牌,令一名角色体力上限永久+1,将手牌数量补充至体力上限',
							selectCard: 1,
							filterCard(card) {
								return true;
							},
							position: 'h',
							discard: true,
							filterTarget(card, player, target) {
								return true;
							},
							content() {
								target.gainMaxHp();
								var count = target.maxHp;
								target.draw(count);
							},
							ai: {
								order: 9,
								expose: 0.5,
								result: {
									player(player, target) {
										return get.attitude(player, target);
									},
								},
							},
						},
						劫缘: {
							audio: 'ext:洪荒ol/audio:2',
							prompt2: '令造成的伤害+1~2',
							filter(event, player) {
								var numa = Math.random();
								return numa < 0.85;
							},
							trigger: {
								source: 'damageBegin',
							},
							content() {
								var numb = [1, 2].randomGet();
								trigger.num = trigger.num + numb;
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0; //QQQ
							},
						},
						结缘: {
							audio: 'ext:洪荒ol/audio:2',
							prompt2: '令受到的伤害-1~2',
							filter(event, player) {
								var numa = Math.random();
								return numa < 0.85;
							},
							trigger: {
								player: 'damageBegin',
							},
							content() {
								var numb = [1, 2].randomGet();
								trigger.num = trigger.num - numb;
							},
						},
						焚心: {
							audio: 'ext:洪荒ol/audio:2',
							prompt2: '摸3~5张牌并回复1~2点体力',
							filter(event, player) {
								var numa = Math.random();
								return numa < 0.9;
							},
							trigger: {
								global: 'dying',
							},
							content() {
								var numb = [3, 5].randomGet();
								var numc = [1, 2].randomGet();
								player.draw(numb);
								player.recover(numc);
							},
						},
						九天: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'useCard' },
							filter(event, player) {
								if (get.type(event.card) != 'equip') return true;
								return false;
							},
							forced: true,
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								var bool1 = trigger.targets.length > 1;
								var bool2 = game.hasPlayer(function (current) {
									return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, trigger.player, current);
								});
								if (bool1 && bool2) {
									player
										.chooseControlList(true, get.prompt('九天'), ['为' + get.translation(trigger.card) + '增加一个目标', '为' + get.translation(trigger.card) + '减少一个目标'], function (event, player) {
											if (_status.event.add) return 0;
											return 1;
										})
										.set('add', get.effect(player, trigger.card, trigger.player, player) >= 0);
								} else if (bool2) {
									event.type = 'add';
									event.goto(2);
									event.unchosen = true;
								} else {
									event.type = 'remove';
									event.goto(2);
									event.unchosen = true;
								}
								('step 2');
								if (result.control == 'cancel2') {
									event.finish();
								} else if (result.index == 1) {
									event.type = 'remove';
								} else {
									event.type = 'add';
								}
								('step 3');
								if (event.type == 'add') {
									player
										.chooseTarget(event.unchosen ? get.prompt('九天') : null, '为' + get.translation(trigger.card) + '增加一个目标', function (card, player, target) {
											var trigger = _status.event.getTrigger();
											return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
										})
										.set('ai', function (target) {
											var trigger = _status.event.getTrigger();
											return get.effect(target, trigger.card, trigger.player, _status.event.player);
										});
								} else {
									player
										.chooseTarget(event.unchosen ? get.prompt('九天') : null, '为' + get.translation(trigger.card) + '减少一个目标', function (card, player, target) {
											return _status.event.targets.includes(target);
										})
										.set('ai', function (target) {
											var trigger = _status.event.getTrigger();
											return -get.effect(target, trigger.card, trigger.player, _status.event.player);
										})
										.set('targets', trigger.targets);
								}
								('step 4');
								if (result.bool) {
									if (!event.isMine()) game.delayx();
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 5');
								if (event.type == 'add') {
									trigger.targets.push(event.target);
								} else {
									trigger.targets.remove(event.target);
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						帝师: {
							trigger: { player: 'phaseEnd' },
							audio: 'ext:洪荒ol/audio:2',
							content() {
								var list = game.filterPlayer(function (current) {
									return player.canUse('toulianghuanzhu', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'shunshou' }, list);
								player.useCard({ name: 'toulianghuanzhu' }, list);
								player.useCard({ name: 'huoshaolianying' }, list);
							},
						},
						玄烈: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							filter(event, player) {
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i] == player) continue;
									if (game.players[i].isFriendsOf(player)) continue;
									if (game.players[i].countCards('h') >= 2) return true;
								}
								return false;
							},
							forced: true,
							content() {
								var suitSame = true;
								(player.storage.JiutianPlayers = []), (player.storage.JiutianCards = []);
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i] == player) continue;
									if (game.players[i].isFriendsOf(player)) continue;
									if (game.players[i].countCards('h') >= 2) {
										var playerCard = game.players[i].getCards();
										for (var j = 0; j < playerCard.length; j++) {
											for (var k = 0; k < j; k++) {
												if (playerCard[j].suit != playerCard[k].suit) {
													if (player.storage.JiutianPlayers.indexOf(game.players[i]) == -1) {
														player.storage.JiutianPlayers.add(game.players[i]);
													}
												}
											}
										}
									}
								}
								var lengthStor = player.storage.JiutianPlayers;
								for (var i = 0; i < lengthStor.length; i++) {
									var card = lengthStor[i].getCards('h').randomGet();
									player.line(lengthStor[i]);
									player.gain(card, lengthStor[i]);
									game.log(player, '获得了', lengthStor[i], '的一张手牌');
									player.storage.JiutianCards.add(card);
								}
								var lengthStor1 = player.storage.JiutianCards;
								for (var i = 0; i < lengthStor1.length; i++) {
									for (var j = 0; j < i; j++) {
										if (lengthStor1[j].suit == lengthStor1[i].suit) suitSame = false;
									}
								}
								for (var i = 0; i < lengthStor.length; i++) {
									lengthStor[i].damage();
								}
							},
						},
						帼武: {
							trigger: { player: 'phaseUseBegin' },
							audio: 'ext:洪荒ol/audio:2',
							content() {
								player.gain(game.createCard('sha'));
								player.gain(game.createCard('sha'));
								player.addTempSkill('帼武1', { player: 'phaseAfter' });
								player.addTempSkill('帼武2', { player: 'phaseAfter' });
							},
						},
						帼武1: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'useCard' },
							forced: true,
							filter(event, player) {
								var type = get.type(event.card);
								return type == 'basic' || type == 'trick';
							},
							content() {
								'step 0';
								var goon = false;
								var info = get.info(trigger.card);
								if (trigger.targets && !info.multitarget) {
									var players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if (lib.filter.targetEnabled2(trigger.card, player, players[i]) && !trigger.targets.includes(players[i])) {
											goon = true;
											break;
										}
									}
								}
								if (goon) {
									player
										.chooseTarget('帼武:是否额外指定一名' + get.translation(trigger.card) + '的目标？', function (card, player, target) {
											var trigger = _status.event.getTrigger();
											if (trigger.targets.includes(target)) return false;
											return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
										})
										.set('ai', function (target) {
											var trigger = _status.event.getTrigger();
											var player = _status.event.player;
											return get.effect(target, trigger.card, player, player);
										});
								} else {
									if (!info.multitarget && trigger.targets && trigger.targets.length > 1) {
										event.goto(3);
									}
								}
								('step 1');
								if (result.bool) {
									if (!event.isMine()) game.delayx();
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								if (event.target) {
									trigger.targets.add(event.target);
								}
								event.finish();
								('step 3');
								player
									.chooseTarget('帼武:是否减少一名' + get.translation(trigger.card) + '的目标？', function (card, player, target) {
										return _status.event.getTrigger().targets.includes(target);
									})
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										return -get.effect(target, trigger.card, trigger.player, _status.event.player);
									});
								('step 4');
								if (result.bool) {
									event.targets = result.targets;
									if (event.isMine()) {
										event.finish();
									}
									for (var i = 0; i < result.targets.length; i++) {
										trigger.targets.remove(result.targets[i]);
									}
								} else {
									event.finish();
								}
								('step 5');
							},
							group: '帼武11',
						},
						帼武11: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'useCard' },
							forced: true,
							filter(event, player) {
								var type = get.type(event.card);
								return type == 'basic' || type == 'trick';
							},
							content() {
								'step 0';
								var goon = false;
								var info = get.info(trigger.card);
								if (trigger.targets && !info.multitarget) {
									var players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if (lib.filter.targetEnabled2(trigger.card, player, players[i]) && !trigger.targets.includes(players[i])) {
											goon = true;
											break;
										}
									}
								}
								if (goon) {
									player
										.chooseTarget('帼武:是否额外指定一名' + get.translation(trigger.card) + '的目标？', function (card, player, target) {
											var trigger = _status.event.getTrigger();
											if (trigger.targets.includes(target)) return false;
											return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
										})
										.set('ai', function (target) {
											var trigger = _status.event.getTrigger();
											var player = _status.event.player;
											return get.effect(target, trigger.card, player, player);
										});
								} else {
									if (!info.multitarget && trigger.targets && trigger.targets.length > 1) {
										event.goto(3);
									}
								}
								('step 1');
								if (result.bool) {
									if (!event.isMine()) game.delayx();
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								if (event.target) {
									trigger.targets.add(event.target);
								}
								event.finish();
								('step 3');
								player
									.chooseTarget('帼武:是否减少一名' + get.translation(trigger.card) + '的目标？', function (card, player, target) {
										return _status.event.getTrigger().targets.includes(target);
									})
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										return -get.effect(target, trigger.card, trigger.player, _status.event.player);
									});
								('step 4');
								if (result.bool) {
									event.targets = result.targets;
									if (event.isMine()) {
										event.finish();
									}
									for (var i = 0; i < result.targets.length; i++) {
										trigger.targets.remove(result.targets[i]);
									}
								} else {
									event.finish();
								}
								('step 5');
							},
						},
						帼武2: {
							mod: {
								targetInRange(card, player, target, now) {
									return true;
								},
							},
						},
						妆戎: {
							derivation: ['吕玲绮神威', '吕玲绮无双'],
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'phaseEnd' },
							forced: true,
							filter(event, player) {
								return player.hp == 1 || player.countCards('h') == 1;
							},
							content() {
								'step 0';
								player.gainMaxHp();
								('step 1');
								if (player.maxHp > player.hp) player.hp = player.maxHp;
								('step 2');
								player.draw(Math.abs(player.maxHp - player.countCards('h')));
								player.addSkill('吕玲绮神威');
								player.addSkill('吕玲绮无双');
							},
						},
						吕玲绮神威: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseDrawBegin' },
							nobracket: true,
							forced: true,
							content() {
								trigger.num += 2;
							},
							mod: {
								maxHandcard(player, current) {
									return current + Math.max(2, game.players.length - 1);
								},
							},
						},
						吕玲绮无双: {
							forced: true,
							group: ['吕玲绮无双1', '吕玲绮无双2'],
						},
						吕玲绮无双1: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'shaBegin' },
							forced: true,
							filter(event, player) {
								return !event.directHit;
							},
							_priority: -1,
							content() {
								if (typeof trigger.shanRequired == 'number') {
									trigger.shanRequired++;
								} else {
									trigger.shanRequired = 2;
								}
							},
						},
						吕玲绮无双2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'juedou', target: 'juedou' },
							forced: true,
							filter(event, player) {
								return event.turn != player;
							},
							_priority: -1,
							content() {
								'step 0';
								var next = trigger.turn.chooseToRespond({ name: 'sha' }, '请打出一张杀响应决斗');
								next.set('prompt2', '(共需打出2张杀)');
								next.autochoose = lib.filter.autoRespondSha;
								next.set('ai', function (card) {
									var player = _status.event.player;
									var trigger = _status.event.getTrigger();
									if (get.attitude(trigger.turn, player) < 0 && trigger.turn.countCards('h', 'sha') > 1) {
										return get.unuseful2(card);
									}
									return -1;
								});
								('step 1');
								if (result.bool == false) {
									trigger.directHit = true;
								}
							},
							ai: {
								result: {
									target(card, player, target) {
										if (card.name == 'juedou' && target.countCards('h') > 0) return [1, 0, 0, -1];
									},
								},
							},
						},
						枕戈: {
							audio: 'ext:洪荒ol/audio:2',
							marktext: '戈',
							init(player) {
								player.storage.枕戈 = 0;
							},
							intro: {
								content(storage) {
									return '当前有' + storage + '个<戈>';
								},
							},
							mark: true,
							trigger: {
								global: 'phaseUseBegin',
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('枕戈'));
								('step 1');
								event.target = result.targets[0];
								player.line(event.target);
								if (event.target.storage.枕戈 == undefined) event.target.storage.枕戈 = 0;
								event.target.markSkill('枕戈');
								event.target.storage.枕戈++;
								game.log(event.target, '攻击范围加枕戈标记数');
								event.target.addSkill('枕戈1');
								('step 2');
								var target = _status.currentPhase;
								event.target = target;
								player
									.chooseTarget(get.prompt('枕戈', event.target), function (card, player, target) {
										var source = _status.event.source;
										return true;
									})
									.set('source', target)
									.set('goon', get.damageEffect(target, player, player) > 0)
									.set('ai', function (target) {
										if (!_status.event.goon) return 0;
										var evt = _status.event;
										return get.effect(target, { name: 'sha' }, evt.source, evt.player);
									});
								('step 3');
								if (result.bool) {
									event.target2 = result.targets[0];
									player.line2([target, event.target2]);
								} else event.finish();
								('step 4');
								target.useCard({ name: 'sha' }, event.target2, false);
							},
						},
						枕戈1: {
							mod: {
								attackFrom(player, target, num) {
									return num - player.storage.枕戈;
								},
							},
							intro: { content: '攻击范围+#' },
						},
						兴汉: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'shaAfter',
							},
							forced: true,
							usable: 1,
							content() {
								player.draw(5);
							},
							ai: {
								threaten: 4,
								nodu: true,
							},
						},
						乱惑: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return true;
							},
							init(player) {
								player.storage.乱惑 = [];
							},
							chooseButton: {
								dialog(event, player) {
									var list = ['sha', 'tao', 'jiu', 'taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
									for (var i = 0; i < list.length; i++) {
										if (i < 3) {
											list[i] = ['基本', '', list[i]];
										} else {
											list[i] = ['锦囊', '', list[i]];
										}
									}
									return ui.create.dialog([list, 'vcard']);
								},
								filter(button, player) {
									return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									return get.player().getUseValue({ name: button.link[2] });
								},
								backup(links, player) {
									return {
										filterCard: false,
										selectCard: 0,
										popname: true,
										viewAs: { name: links[0][2] },
										onuse(result, player) {
											player.storage.乱惑.push(result.card.name);
										},
									};
								},
								prompt(links, player) {
									return '选择' + get.translation(links[0][2]) + '的目标';
								},
							},
							ai: {
								order: 4,
								result: {
									player(player) {
										var allshown = true,
											players = game.filterPlayer();
										for (var i = 0; i < players.length; i++) {
											if (players[i].ai.shown == 0) {
												allshown = false;
											}
											if (players[i] != player && players[i].countCards('h') && get.attitude(player, players[i]) > 0) {
												return 1;
											}
										}
										if (allshown) return 1;
										return 0;
									},
								},
								threaten: 1.6,
							},
							group: ['乱惑2', '乱惑3', '乱惑4', '乱惑04', '乱惑5', '乱惑语音'],
						},
						乱惑2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: ['useCardAfter', 'respondAfter'] },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.skill == '乱惑_backup' || event.skill == '乱惑5' || event.skill == '乱惑3';
							},
							content() {
								'step 0';
								player
									.chooseTarget(
										true,
										function (card, player, target) {
											return target != player;
										},
										'乱惑<br><br><div class="text center">令一名其他角色选择一项:1.交给你一张与你以此法使用的牌类别相同的牌;2.该角色非锁定技无效且失去1点体力'
									)
									.set('ai', function (target) {
										var player = _status.event.player;
										if (get.attitude(player, target) > 0) {
											if (get.attitude(target, player) > 0) {
												return target.countCards('h');
											}
											return target.countCards('h') / 2;
										}
										return 0;
									});
								('step 1');
								var target = result.targets[0];
								event.target = target;
								player.line(target, 'green');
								var type = get.type(trigger.card, 'trick');
								target
									.chooseCard('乱惑<br><br><div class="text center">交给' + get.translation(player) + '一张' + get.translation(type) + '牌,或令你非锁定技无效失去一点体力直到回合', function (card, player, target) {
										return get.type(card, 'trick') == _status.event.cardType;
									})
									.set('cardType', type)
									.set('ai', function (card) {
										if (_status.event.att) {
											return 11 - get.value(card);
										}
										return 0;
									})
									.set('att', get.attitude(target, player) > 0);
								('step 2');
								var target = event.target;
								if (result.bool) {
									player.gain(result.cards, target);
									target.$give(result.cards, player);
								} else {
									target.addTempSkill('fengyin', 'phaseAfter');
									target.loseHp();
								}
							},
						},
						乱惑3: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'chooseToUse',
							// filter:function(event,player){
							// return event.type=='dying'&&!player.storage.乱惑.includes('wuxie');
							// },
							// onuse:function(result,player){
							// player.storage.乱惑.push('wuxie');
							// },
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAs: { name: 'wuxie' },
							ai: {
								skillTagFilter(player) {
									return !player.storage.乱惑.includes('wuxie');
								},
								threaten: 1.5,
								save: true,
							},
						},
						乱惑4: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'chooseToRespondBegin' },
							filter(event, player) {
								if (event.responded) return false;
								if (!event.filterCard || !event.filterCard({ name: 'shan' }, player)) return false;
								if (player.storage.乱惑.includes('shan')) return false;
								return true;
							},
							check(event, player) {
								var allshown = true,
									players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									if (players[i] != player && players[i].countCards('h') > 1 && get.attitude(player, players[i]) > 0) {
										return 1;
									}
								}
								return 0;
							},
							content() {
								trigger.untrigger();
								trigger.responded = true;
								trigger.result = { bool: true, card: { name: 'shan' }, skill: '乱惑_backup' };
								player.storage.乱惑.push('shan');
							},
						},
						乱惑04: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'chooseToRespondBegin' },
							filter(event, player) {
								if (event.responded) return false;
								if (!event.filterCard || !event.filterCard({ name: 'sha' }, player)) return false;
								if (player.storage.乱惑.includes('sha')) return false;
								return true;
							},
							check(event, player) {
								var allshown = true,
									players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									if (players[i] != player && players[i].countCards('h') > 1 && get.attitude(player, players[i]) > 0) {
										return 1;
									}
								}
								return 0;
							},
							content() {
								trigger.untrigger();
								trigger.responded = true;
								trigger.result = { bool: true, card: { name: 'sha' }, skill: '乱惑_backup' };
							},
						},
						乱惑5: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'chooseToUse',
							filter(event, player) {
								return event.type == 'dying';
							},
							onuse(result, player) {
								player.storage.乱惑.push('tao');
							},
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAs: { name: 'tao' },
							ai: {
								skillTagFilter(player) {
									return !player.storage.乱惑.includes('tao');
								},
								threaten: 1.5,
								save: true,
							},
						},
						乱惑_backup: {},
						乱惑语音: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: ['useCard', 'respond'] },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.skill == '乱惑' || event.skill == '乱惑2' || event.skill == '乱惑4' || event.skill == '乱惑5' || event.skill == '乱惑_backup';
							},
							content() { },
						},
						桃宴: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										var num = [1, 2, 3].randomGet();
										for (var j = 0; j < num; j++) {
											list[i].gain(game.createCard('tao'));
											list[i].$draw();
										}
										list[i].draw(num);
									}
								}
							},
						},
						妍丽: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'dying' },
							_priority: 10,
							usable: 1,
							content() {
								'step 0';
								if (trigger.player.hp < 2) {
									trigger.player.recover(2 - player.hp);
								}
								('step 1');
								player.draw(2);
							},
						},
						先辅zwhs: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'gameStart', player: ['enterGame', 'phaseBegin'] },
							forced: true,
							filter(event, player) {
								return game.players.length > 1;
							},
							content() {
								'step 0';
								player
									.chooseTarget('选择【先辅】的目标', lib.translate.先辅zwhs_info, true, [1, 4], function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (att > 0) return att + 1;
										if (att == 0) return Math.random();
										return att;
									});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										var target = result.targets[i];
										player.line(target, 'green');
										game.log(target, '成为了', '【先辅】', '的目标');
										target.storage.先辅zwhs2 = player;
										target.addSkill('先辅zwhs2');
									}
								}
							},
						},
						先辅zwhs2: {
							audio: 'ext:洪荒ol/audio:2',
							intro: {
								content: '当你受到伤害后,$受到等量的伤害,当你回复体力后,$回复等量的体力',
							},
							nopop: true,
							trigger: { player: ['recoverAfter'] },
							forced: true,
							popup: false,
							filter(event, player) {
								return player.storage.先辅zwhs2 && player.storage.先辅zwhs2.isIn() && event.num > 0;
							},
							content() {
								'step 0';
								'step 1';
								var target = player.storage.先辅zwhs2;
								player.line(target, 'green');
								target[trigger.name](trigger.num, trigger.source);
							},
							group: ['先辅zwhs3', '先辅zwhs4'],
						},
						先辅zwhs3: {
							audio: 'ext:洪荒ol/audio:2',
							nopop: true,
							trigger: { player: ['damageAfter'] },
							forced: true,
							popup: false,
							filter(event, player) {
								return player.storage.先辅zwhs2 && player.storage.先辅zwhs2.isIn() && event.num > 0;
							},
							content() {
								'step 0';
								'step 1';
								var target = player.storage.先辅zwhs2;
								player.line(target, 'green');
								target[trigger.name](trigger.num, 'nosource');
								target.gainMaxHp();
							},
						},
						先辅zwhs4: {
							trigger: { global: 'dieAfter' },
							silent: true,
							filter(event, player) {
								return event.player == player.storage.先辅zwhs2;
							},
							content() {
								player.removeSkill('先辅zwhs2');
							},
						},
						筹策zwhs: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'damageEnd' },
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								player.judge();
								('step 2');
								event.color = result.color;
								if (event.color == 'black') {
									player
										.chooseTarget('弃置一名角色区域内的一张牌,并弃置全体敌方角色区域内的一张牌', true, function (card, player, target) {
											return target.countCards('hej');
										})
										.set('ai', function (target) {
											var player = _status.event.player;
											var att = get.attitude(player, target);
											if (att < 0) {
												att = -Math.sqrt(-att);
											} else {
												att = Math.sqrt(att);
											}
											return att * lib.card.guohe.ai.result.target(player, target);
										});
								} else {
									var next = player.chooseTarget('令一名角色摸一张牌,并令全体友方角色摸一张牌', true);
									var 先辅zwhs = game.findPlayer(function (current) {
										return current.hasSkill('先辅zwhs2') && current.storage.先辅zwhs2 == player;
									});
									if (先辅zwhs) {
										next.set('prompt2', '(若目标为先辅角色)则改为摸两张牌,并令全体友方角色摸一张牌)');
									}
									next.set('ai', function (target) {
										var player = _status.event.player;
										var att = get.attitude(player, target) / Math.sqrt(1 + target.countCards('h'));
										if (target.storage.先辅zwhs2 == player) return att * 2;
										return att;
									});
								}
								('step 3');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'green');
									if (event.color == 'black') {
										player.discardPlayerCard(target, 'hej', true);
										var list = game.filterPlayer(function (current) {
											return current.isEnemiesOf(player);
										});
										list.sort(lib.sort.seat);
										if (list.length) {
											player.line(list, 'green');
											for (var i = 0; i < list.length; i++) {
												player.discardPlayerCard(list[i], 'hej', true);
											}
										}
									} else {
										if (target.hasSkill('先辅zwhs2') && target.storage.先辅zwhs2 == player) {
											target.draw(2);
										} else {
											target.draw();
										}
										var list = game.filterPlayer(function (current) {
											return current.isFriendsOf(player);
										});
										list.sort(lib.sort.seat);
										if (list.length) {
											player.line(list, 'green');
											for (var i = 0; i < list.length; i++) {
												list[i].draw();
											}
										}
									}
								}
								('step 4');
								if (--event.num > 0) {
									player.chooseBool('是否再次发动【筹策】？');
								} else {
									event.finish();
								}
								('step 5');
								if (result.bool) {
									event.goto(1);
								}
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (!target.hasFriend()) return;
											if (target.hp >= 4) return [1, get.tag(card, 'damage') * 1.5];
											if (target.hp == 3) return [1, get.tag(card, 'damage') * 1];
											if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
										}
									},
								},
							},
						},
						妒才zwhs: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'judgeEnd' },
							frequent(event) {
								if (event.result.card.name == 'du') return false;
								if (get.mode() == 'guozhan') return false;
								return true;
							},
							check(event) {
								if (event.result.card.name == 'du') return false;
								return true;
							},
							filter(event, player) {
								if (get.owner(event.result.card)) {
									return false;
								}
								if (event.nogain && event.nogain(event.result.card)) {
									return false;
								}
								return true;
							},
							content() {
								player.gain(trigger.result.card);
								player.$gain2(trigger.result.card);
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].draw();
									}
								}
							},
						},
						月桂: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'phaseUseBegin' },
							filter(event, player) {
								return event.player.isFriendsOf(player);
							},
							content() {
								'step 0';
								trigger.player.draw();
								('step 1');
								if (trigger.player.countCards('he')) trigger.player.chooseCard(true, 'he', [1, 2], '交出一到二张牌');
								('step 2');
								if (result.bool) {
									player.gain(result.cards, trigger.player);
									trigger.player.$give(result.cards, player);
									trigger.player.gain(game.createCard('sha'));
									trigger.player.gain(game.createCard('tao'));
									trigger.player.$draw(2);
								}
							},
						},
						决洪: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'gainEnd',
								player: 'phaseBegin',
							},
							usable: 1,
							content() {
								'step 0';
								player.discardPlayerCard(trigger.player.countCards('he'), trigger.player);
								('step 1');
								if (player.countCards('h') < 2) player.draw(2);
							},
						},
						丹术: {
							trigger: { player: 'loseEnd' },
							forced: true,
							filter(event, player) {
								return _status.currentPhase != player && player.hp < player.maxHp;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return get.color(card) == 'red' ? 1 : 0;
								});
								('step 1');
								if (result.color == 'red') {
									player.recover();
									player.draw(2);
								}
							},
							ai: {
								effect: {
									target(card) {
										if (get.tag(card, 'loseCard')) {
											return [0.5, 1];
										}
									},
								},
							},
						},
						魔道: {
							trigger: { player: 'phaseBegin' },
							forced: true,
							content() {
								player.draw(2 + Math.ceil(player.countCards('h') / 2));
							},
						},
						魔箭: {
							trigger: { player: 'phaseUseBegin' },
							content() {
								var list = game.filterPlayer(function (current) {
									return player.canUse('wanjian', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'wanjian' }, list);
								for (var i = 0; i < list.length; i++) {
									list[i].loseHp();
								}
							},
							ai: {
								threaten: 1.8,
							},
						},
						刹幽: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { target: 'shaBefore' },
							forced: true,
							_priority: 5,
							async content(event, trigger, player) {
								//QQQ
								var { result } = await player.judge('刹幽', function (card) {
									return get.color(card) == 'red' ? 1.5 : -0.5;
								});
								if (result.judge > 0) {
									var { result } = await player.chooseTarget({ prompt: get.prompt('刹幽') });
									if (result.targets?.length) {
										trigger.target = result.targets[0];
										trigger.targets.remove(player);
										trigger.targets.push(result.targets[0]);
									}
								}
							},
						},
						逐日: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: ['useCardAfter', 'respondAfter'] },
							forced: true,
							usable: 2,
							content() {
								if (get.color(trigger.card) == 'red') {
									player.draw(2);
									var list = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									list.sort(lib.sort.seat);
									for (var i = 0; i < list.length; i++) {
										player.discardPlayerCard(2, list[i], 'he', true);
									}
								}
								if (get.color(trigger.card) == 'black') {
									player.recover();
									var list = game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									});
									list.sort(lib.sort.seat);
									for (var i = 0; i < list.length; i++) {
										list[i].loseHp();
									}
								}
							},
							ai: {
								threaten: 0.7,
							},
						},
						烈奔: {
							trigger: { player: 'shaBegin' },
							filter(event, player) {
								return event.target == event.targets[0] && event.card.name == 'sha' && _status.currentPhase == event.player && event.parent.parent.parent.name == 'phaseUse';
							},
							content() {
								'step 0';
								player.judge('烈奔', function (card) {
									return get.color(card) == 'red' ? 1.5 : -0.5;
								});
								('step 1');
								if (result.judge > 0) {
									trigger.player.getStat().card.sha--;
									player.addTempSkill('烈奔2', 'shaAfter');
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						烈奔2: {
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink();
							},
							forced: true,
							content() {
								trigger.num++;
							},
						},
						饮江: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'gainEnd' },
							usable: 2,
							delay: 0,
							content() {
								event.card = get.cardPile(function (card) {
									if (get.color(card) == 'red') return true;
									return false;
								}, 'cardPile');
								if (!event.card) {
									event.finish();
									return;
								}
								player.showCards([event.card]);
								player.gain(event.card, 'gain2');
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								for (var i = 0; i < list.length; i++) {
									list[i].damage();
								}
							},
							ai: {
								order: 9,
								result: {
									player: 2,
								},
								threaten: 1.2,
							},
						},
						躯化: {
							trigger: { player: 'damageEnd' },
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('躯化'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									var x = ['逐日', '饮江', '烈奔'].randomGet();
									result.targets[0].addSkill(x);
								}
							},
						},
						青仪: {
							group: ['青仪_more', '青仪_less'],
							subSkill: {
								more: {
									audio: true,
									trigger: { global: 'damageBegin' },
									forced: true,
									filter(event, player) {
										if (!player.countCards('he', { name: 'bagua' })) return false;
										return player != event.player;
									},
									content() {
										'step 0';
										var goon = get.attitude(player, trigger.player) < 0;
										var next = player.chooseToDiscard(get.prompt('青仪', trigger.player), 'he', function (card) {
											return card.name == 'bagua';
										});
										next.set('prompt2', '弃置一张八卦阵令伤害+1');
										next.set('ai', function (card) {
											if (_status.event.goon) {
												return 8 - get.value(card);
											}
											return 0;
										});
										next.set('goon', goon);
										('step 1');
										if (result.bool) {
											trigger.num++;
											var list = game.filterPlayer(function (current) {
												return current.isEnemiesOf(player);
											});
											list.sort(lib.sort.seat);
											if (list.length) {
												player.line(list, 'green');
												for (var i = 0; i < list.length; i++) {
													list[i].loseHp();
												}
											}
										}
									},
								},
								less: {
									audio: true,
									trigger: { global: 'damageBegin' },
									filter(event, player) {
										if (!player.countCards('he', { name: 'bagua' })) return false;
										return true;
									},
									forced: true,
									content() {
										'step 0';
										var next = player.chooseToDiscard(get.prompt('青仪', trigger.player), 'he', function (card) {
											return card.name == 'bagua';
										});
										next.set('prompt2', '弃置一张八卦阵令伤害-1');
										next.set('ai', function (card) {
											var player = _status.event.player;
											if (player.hp == 1 || _status.event.getTrigger().num > 1) {
												return 9 - get.value(card);
											}
											if (player.hp == 2) {
												return 8 - get.value(card);
											}
											return 7 - get.value(card);
										});
										('step 1');
										if (result.bool) {
											trigger.num--;
											var list = game.filterPlayer(function (current) {
												return current.isFriendsOf(player);
											});
											list.sort(lib.sort.seat);
											if (list.length) {
												player.line(list, 'green');
												for (var i = 0; i < list.length; i++) {
													list[i].recover();
													list[i].gain(game.createCard('shan'));
													list[i].$draw();
												}
											}
										}
									},
								},
							},
							ai: {
								expose: 0.2,
								threaten: 1.5,
							},
						},
						伏卦: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('bagua'));
										list[i].gain(game.createCard('bagua'));
										list[i].$draw(2);
									}
								}
								('step 1');
								var num = 0;
								for (var j = 0; j < game.players.length; j++) {
									num += game.players[j].countCards('he', { name: 'bagua' });
								}
								var list = [];
								var lname = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.type(lib.inpile[i], 'trick') == 'trick') {
										list.push(lib.inpile[i]);
										lname.push(lib.inpile[i].name);
									}
								}
								for (var a = 0; a < lname.length; a++) {
									for (var b = 0; b < lname.length; b++) {
										if (lname[a] == lname[b] && a != b) {
											lname.splice(b, 1);
											list.splice(b, 1);
										}
									}
								}
								for (var k = 0; k < num; k++) {
									player.gain(game.createCard(list[k]));
									player.$draw();
								}
							},
						},
						妖兽: {
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink();
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
							mod: {
								globalFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						封域: {
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.draw(2);
								player.chooseTarget(get.prompt('封域'), [1, game.players.length - 1], function (card, player, target) {
									return target != player;
								});
								('step 1');
								if (result.bool) {
									var targets = result.targets;
									for (var j = 0; j < targets.length; j++) {
										if (!targets[j].hasSkill('封域_debuff')) {
											var list = [];
											for (var i = 0; i < targets[j].skills.length; i++) {
												if (!get.is.locked(targets[j].skills[i])) {
													list.push(targets[j].skills[i]);
												}
											}
											if (list.length) {
												targets[j].disableSkill('封域', list);
												targets[j].addSkill('封域_debuff');
											}
										}
									}
								}
							},
							subSkill: {
								debuff: {
									trigger: { global: 'phaseAfter' },
									forced: true,
									popup: false,
									content() {
										player.enableSkill('封域');
										player.removeSkill('封域_debuff');
									},
									mark: true,
									intro: {
										content(st, player) {
											var storage = player.disabledSkills.封域;
											if (storage && storage.length) {
												var str = '失效技能:';
												for (var i = 0; i < storage.length; i++) {
													if (lib.translate[storage[i] + '_info']) {
														str += get.translation(storage[i]) + '、';
													}
												}
												return str.slice(0, str.length - 1);
											}
										},
									},
								},
							},
						},
						游寻: {
							trigger: { global: 'phaseBegin' },
							forced: true,
							filter(event, player) {
								return player != event.player;
							},
							content() {
								'step 0';
								var list = game.filterPlayer(function (current) {
									return current != player && current.countCards('hej');
								});
								if (list.length) {
									var target = list.randomGet();
									player.line(target, 'green');
									var card = target.getCards('hej').randomGet();
									event.card = card;
									player.gain(card, target);
									target.$giveAuto(card, player);
								} else event.finish();
								('step 1');
								if (player.getCards('h').includes(card) && get.type(card) == 'equip') player.chooseUseTarget(card, true);
							},
						},
						司圃: {
							trigger: { player: 'useCardBegin' },
							forced: true,
							usable: 2,
							filter(event, player) {
								return player == _status.currentPhase;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('司圃'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].addTempSkill('司圃2');
								}
							},
							ai: {
								threaten: 0.7,
							},
						},
						司圃2: {
							mod: {
								cardEnabled(card, player) {
									return false;
								},
								cardUsable(card, player) {
									return false;
								},
								cardRespondable(card, player) {
									return false;
								},
								cardSavable(card, player) {
									return false;
								},
							},
							intro: {
								content: '不能使用或打出牌',
							},
						},
						雷狱: {
							audio: 'ext:洪荒ol/audio:2',
							group: '雷狱_damage',
							trigger: {
								player: ['useCard', 'respond'],
							},
							filter(event, player) {
								return event.card.name == 'shan' || event.card.name == 'wuxie' || (event.name == 'useCard' && event.card.name == 'shandian');
							},
							judgeCheck(card, bool) {
								var suit = card.suit;
								if (suit == 'spade') {
									if (bool && card.number > 1 && card.number < 10) return 5;
									return 4;
								}
								if (suit == 'club') return 2;
								return 0;
							},
							content() {
								player.judge(lib.skill.雷狱.judgeCheck);
							},
							ai: {
								useShan: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondShan')) {
											var hastarget = game.hasPlayer(function (current) {
												return get.attitude(target, current) < 0;
											});
											var be = target.countCards('e', { color: 'black' });
											if (target.countCards('h', 'shan') && be) {
												if (!target.hasSkill('xinguidao')) return 0;
												return [0, hastarget ? target.countCards('he') / 2 : 0];
											}
											if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
												if (!target.hasSkill('xinguidao')) return 0;
												return [0, hastarget ? target.countCards('h') / 4 : 0];
											}
											if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
												return [0, 0];
											}
											if (target.countCards('h') == 0) {
												return [1.5, 0];
											}
											if (target.countCards('h') == 1 && !be) {
												return [1.2, 0];
											}
											if (!target.hasSkill('xinguidao')) return [1, 0.05];
											return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
										}
									},
								},
							},
							subSkill: {
								damage: {
									trigger: { player: 'judgeAfter' },
									audio: 'ext:洪荒ol/audio:2',
									forced: true,
									_priority: -1,
									filter(event, player) {
										return ['spade', 'club'].includes(event.result.suit);
									},
									content() {
										'step 0';
										event.num = 1 + ['club', 'spade'].indexOf(trigger.result.suit);
										event.logged = false;
										player.chooseTarget('雷狱:是否对一名角色造成' + event.num + '点雷电伤害？', lib.filter.notMe).ai = function (target) {
											var player = _status.event.player;
											return get.damageEffect(target, player, player, 'thunder');
										};
										('step 1');
										if (result.bool && result.targets && result.targets.length) {
											result.targets[0].damage(event.num, 'thunder');
											if (event.num == 1) {
												player.recover();
												result.targets[0].addTempSkill('雷狱_mark');
											} else {
												var card = get.cardPile(function (card) {
													return card.name == 'shandian';
												});
												result.targets[0].addJudge(card);
											}
										}
									},
								},
								mark: {
									mark: true,
									marktext: '霆',
									charlotte: true,
									intro: {
										content: '获得该印记时进入横置状态;该角色受到的雷属性伤害+1',
									},
									init(player) {
										if (!player.isLinked()) player.link();
									},
									trigger: {
										player: 'damageBefore',
									},
									forced: true,
									filter(event, player) {
										return event.natrue == 'thunder';
									},
									content() {
										trigger.num++;
									},
								},
							},
						},
						鬼道_guidao: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'judge' },
							filter(event, player) {
								return player.countCards('he', { color: 'black' }) > 0;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('鬼道_guidao'), 'he', function (card) {
										return get.color(card) == 'black';
									})
									.set('ai', function (card) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										var judging = _status.event.judging;
										var result = trigger.judge(card) - trigger.judge(judging);
										var attitude = get.attitude(player, trigger.player);
										if (attitude == 0 || result == 0) return 0;
										if (attitude > 0) {
											return result;
										} else {
											return -result;
										}
									})
									.set('judging', trigger.player.judging[0]);
								('step 1');
								if (result.bool) {
									player.respond(result.cards, 'highlight');
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.$gain2(trigger.player.judging[0]);
									player.gain(trigger.player.judging[0]);
									player.draw(2);
									trigger.player.judging[0] = result.cards[0];
									if (!get.owner(result.cards[0], 'judge')) {
										trigger.position.appendChild(result.cards[0]);
									}
									game.log(trigger.player, '的判定牌改为', result.cards[0]);
								}
								('step 3');
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].gain(game.createCard('shandian'));
										list[i].$draw();
									}
								}
							},
							ai: {
								tag: {
									rejudge: 1,
								},
							},
						},
						神术: {
							marktext: '术',
							intro: {
								content: '当前持有#枚<术>',
							},
							init(player) {
								player.storage.神术 = 0;
							},
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							delay: false,
							filterTarget(card, player, target) {
								return player != target && target.isDamaged();
							},
							filter(event, player) {
								return (
									player.storage.神术 >= 2 &&
									game.hasPlayer(function (current) {
										return current != player && current.isDamaged();
									})
								);
							},
							content() {
								'step 0';
								player.storage.神术 -= 2;
								player.markSkill('神术');
								('step 1');
								target.recover();
								player.gainPlayerCard(target, 'he');
								target.draw(2);
								('step 2');
								if (target.hp >= player.hp) player.draw();
							},
							ai: {
								order: 9,
								result: {
									target(player, target) {
										if (target.hp == 1) return 5;
									},
								},
								threaten: 2,
							},
							group: ['神术2'],
						},
						神术1: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: ['chooseToRespondBegin', 'chooseToUseBegin'],
							},
							forced: true,
							filter(event, player) {
								if (player.storage.神术) return false;
								if (!_status.currentPhase) return false;
								if (event.responded) return false;
								if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
								if (event.name != 'chooseToUse' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
								return true;
							},
							content() {
								'step 0';
								player.storage.神术--;
								player.markSkill('神术');
								('step 1');
								trigger.untrigger();
								trigger.responded = true;
								trigger.result = { bool: true, card: { name: 'shan' } };
							},
						},
						神术2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: ['chooseToRespondEnd', 'chooseToUseEnd'],
							},
							forced: true,
							_priority: -1,
							filter(event, player) {
								if (!_status.currentPhase) return false;
								if (event.responded) return false;
								if (event.player == player) return false;
								if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
								if (event.name != 'chooseToUse' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
								return true;
							},
							content() {
								player.storage.神术++;
								player.markSkill('神术');
							},
						},
						道转: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 13;
								var fellow = game.addFellow(pos, 'zhangyan张燕');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('忠臣');
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'mayuanyi马元义');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('忠臣');
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								//------------------------------------------------------------------
								var fellow2 = game.addFellow(pos, 'heman何曼');
								fellow2.side = player.side;
								if (player.identity != 'zhu') fellow2.identity = player.identity;
								else fellow2.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow2._group = player.identity;
								fellow2.setIdentity('忠臣');
								fellow2.draw(fellow2.maxHp);
								fellow2.node.identity.dataset.color = fellow2.identity;
								//------------------------------------------------------------------
								var fellow3 = game.addFellow(pos, 'zm_zhangmancheng');
								fellow3.side = player.side;
								if (player.identity != 'zhu') fellow3.identity = player.identity;
								else fellow3.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow3._group = player.identity;
								fellow3.setIdentity('忠臣');
								fellow3.draw(fellow3.maxHp);
								fellow3.node.identity.dataset.color = fellow3.identity;
								//------------------------------------------------------------------
								var fellow4 = game.addFellow(pos, 'yanzheng严政');
								fellow4.side = player.side;
								if (player.identity != 'zhu') fellow4.identity = player.identity;
								else fellow4.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow4._group = player.identity;
								fellow4.setIdentity('忠臣');
								fellow4.draw(fellow4.maxHp);
								fellow4.node.identity.dataset.color = fellow4.identity;
								//------------------------------------------------------------------
								var fellow5 = game.addFellow(pos, 'guanhai管亥');
								fellow5.side = player.side;
								if (player.identity != 'zhu') fellow5.identity = player.identity;
								else fellow5.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow5._group = player.identity;
								fellow5.setIdentity('忠臣');
								fellow5.draw(fellow5.maxHp);
								fellow5.node.identity.dataset.color = fellow5.identity;
								//------------------------------------------------------------------
								var fellow6 = game.addFellow(pos, 'dengmao邓茂');
								fellow6.side = player.side;
								if (player.identity != 'zhu') fellow6.identity = player.identity;
								else fellow6.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow6._group = player.identity;
								fellow6.setIdentity('忠臣');
								fellow6.draw(fellow6.maxHp);
								fellow6.node.identity.dataset.color = fellow6.identity;
								//------------------------------------------------------------------
								var fellow7 = game.addFellow(pos, 'wuhuan吴桓');
								fellow7.side = player.side;
								if (player.identity != 'zhu') fellow7.identity = player.identity;
								else fellow7.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow7._group = player.identity;
								fellow7.setIdentity('忠臣');
								fellow7.draw(fellow7.maxHp);
								fellow7.node.identity.dataset.color = fellow7.identity;
								//------------------------------------------------------------------
								var fellow8 = game.addFellow(pos, 'zhangjuzhangchun张举张纯');
								fellow8.side = player.side;
								if (player.identity != 'zhu') fellow8.identity = player.identity;
								else fellow8.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow8._group = player.identity;
								fellow8.setIdentity('忠臣');
								fellow8.draw(fellow8.maxHp);
								fellow8.node.identity.dataset.color = fellow8.identity;
								//------------------------------------------------------------------
								var fellow9 = game.addFellow(pos, 'pengtuo彭脱');
								fellow9.side = player.side;
								if (player.identity != 'zhu') fellow9.identity = player.identity;
								else fellow9.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow9._group = player.identity;
								fellow9.setIdentity('忠臣');
								fellow9.draw(fellow9.maxHp);
								fellow9.node.identity.dataset.color = fellow9.identity;
								//------------------------------------------------------------------
								var fellow10 = game.addFellow(pos, 'huangjinqi黄巾旗');
								fellow10.side = player.side;
								if (player.identity != 'zhu') fellow10.identity = player.identity;
								else fellow10.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow10._group = player.identity;
								fellow10.setIdentity('忠臣');
								fellow10.draw(fellow10.maxHp);
								fellow10.node.identity.dataset.color = fellow10.identity;
								//------------------------------------------------------------------
								var fellow11 = game.addFellow(pos, 'ly_yellowTurban_chengYuanZhi');
								fellow11.side = player.side;
								if (player.identity != 'zhu') fellow11.identity = player.identity;
								else fellow11.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow11._group = player.identity;
								fellow11.setIdentity('忠臣');
								fellow11.draw(fellow11.maxHp);
								fellow11.node.identity.dataset.color = fellow11.identity;
								//------------------------------------------------------------------
								var fellow12 = game.addFellow(pos, 'huangjinchuandaoguan黄巾传道官');
								fellow12.side = player.side;
								if (player.identity != 'zhu') fellow12.identity = player.identity;
								else fellow12.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow12._group = player.identity;
								fellow12.setIdentity('忠臣');
								fellow12.draw(fellow12.maxHp);
								fellow12.node.identity.dataset.color = fellow12.identity;
								('step 1');
								player.removeSkill('道转');
							},
						},
						鸩毒zd: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'phaseUseBegin' },
							filter(event, player) {
								return event.player != player;
							},
							content() {
								player.discardPlayerCard(trigger.player, 'he', true);
								trigger.player.damage();
								trigger.player.loseHp();
							},
							ai: {
								threaten: 2,
								expose: 0.3,
							},
						},
						戚乱ql: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return event.num >= event.player.hp;
							},
							forced: true,
							content() {
								'step 0';
								player.draw(3);
								player.chooseTarget(get.prompt('戚乱ql')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].init('liubian', 'liuxie');
								}
							},
						},
						fh扶fh汉: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBefore' },
							filter(event, player) {
								return player.storage.fh芳fh魂 > 0;
							},
							prompt(event, player) {
								var num = player.storage.fh芳fh魂2;
								var mode = get.mode();
								if (mode != 'chess' && mode != 'tafang' && mode != 'stone') {
									num = Math.min(num, game.players.length + game.dead.length);
								}
								return get.prompt('fh扶fh汉') + '(体力上限:' + num + ')';
							},
							check(event, player) {
								var num = player.storage.fh芳fh魂2;
								if (num == 1) return false;
								if (player.hp <= 1) return true;
								if (num == 2) return false;
								if (num == 3) return player.hp < 3 && player.isMinHp();
								return true;
							},
							content() {
								'step 0';
								var list;
								if (_status.connectMode) {
									list = get.charactersOL(function (i) {
										return lib.character[i][1] != 'shu';
									});
								} else {
									list = get.gainableCharacters(function (info) {
										return info[1] == 'shu';
									});
								}
								var players = game.players.concat(game.dead);
								for (var i = 0; i < players.length; i++) {
									list.remove(players[i].name);
									list.remove(players[i].name1);
									list.remove(players[i].name2);
								}
								var dialog = ui.create.dialog('将武将牌替换为两名蜀势力角色', 'hidden');
								dialog.add([list.randomGets(5), 'character']);
								player.chooseButton(2, dialog, true).ai = function (button) {
									return get.rank(button.link, true) - lib.character[button.link][2];
								};
								('step 1');
								var num = player.storage.fh芳fh魂2;
								var mode = get.mode();
								if (mode != 'chess' && mode != 'tafang' && mode != 'stone') {
									num = Math.min(num, game.players.length + game.dead.length);
								}
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].init(result.links[0], result.links[1]);
										list[i].maxHp = num;
									}
								}
							},
						},
						fh芳fh魂: {
							init(player) {
								player.storage.fh芳fh魂 = 0;
								player.storage.fh芳fh魂2 = 0;
							},
							intro: {
								content: 'mark',
							},
							trigger: { global: 'shaAfter' },
							audio: 'ext:洪荒ol/audio:2',
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								player.storage.fh芳fh魂++;
								player.storage.fh芳fh魂2++;
								player.markSkill('fh芳fh魂');
							},
							group: ['fh芳fh魂_sha', 'fh芳fh魂_shan', 'fh芳fh魂_draw'],
							subSkill: {
								draw: {
									trigger: { player: ['useCard', 'respond'] },
									forced: true,
									popup: false,
									filter(event, player) {
										return event.skill == 'fh芳fh魂_sha' || event.skill == 'fh芳fh魂_shan';
									},
									content() {
										player.draw(2);
									},
								},
								sha: {
									enable: ['chooseToUse', 'chooseToRespond'],
									audio: 'ext:洪荒ol/audio:2',
									filterCard: { name: 'shan' },
									viewAs: { name: 'sha' },
									viewAsFilter(player) {
										if (!player.storage.fh芳fh魂 || player.storage.fh芳fh魂 < 0) return false;
										if (!player.countCards('h', 'shan')) return false;
									},
									prompt: '将一张闪当杀使用或打出',
									onuse(result, player) {
										player.storage.fh芳fh魂--;
										if (!player.storage.fh芳fh魂 || player.storage.fh芳fh魂 < 0) {
											player.storage.fh芳fh魂 = 0;
											player.unmarkSkill('fh芳fh魂');
										} else {
										}
									},
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
											if (!player.storage.fh芳fh魂 || player.storage.fh芳fh魂 < 0) return false;
											if (!player.countCards('h', 'shan')) return false;
										},
										order() {
											return get.order({ name: 'sha' }) + 0.1;
										},
										useful: -1,
										value: -1,
									},
								},
								shan: {
									enable: ['chooseToRespond'],
									filterCard: { name: 'sha' },
									audio: 'ext:洪荒ol/audio:2',
									viewAs: { name: 'shan' },
									prompt: '将一张杀当闪打出',
									viewAsFilter(player) {
										if (!player.storage.fh芳fh魂 || player.storage.fh芳fh魂 < 0) return false;
										if (!player.countCards('h', 'sha')) return false;
									},
									onrespond(result, player) {
										player.storage.fh芳fh魂--;
										if (!player.storage.fh芳fh魂 || player.storage.fh芳fh魂 < 0) {
											player.storage.fh芳fh魂 = 0;
											player.unmarkSkill('fh芳fh魂');
										} else {
										}
									},
									check() {
										return 1;
									},
									ai: {
										respondShan: true,
										skillTagFilter(player) {
											if (!player.storage.fh芳fh魂 || player.storage.fh芳fh魂 < 0) return false;
											if (!player.countCards('h', 'sha')) return false;
										},
										effect: {
											target(card, player, target, current) {
												if (!player.storage.fh芳fh魂 || player.storage.fh芳fh魂 < 0) return 0;
												if (get.tag(card, 'respondShan') && current < 0) return 0.6;
											},
										},
										order: 4,
										useful: -1,
										value: -1,
									},
								},
							},
						},
						残影刺刃: {
							audio: 'ext:洪荒ol/audio:2',
							nobracket: true,
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target.isEnemiesOf(player);
							},
							selectTarget: -1,
							multitarget: true,
							multiline: true,
							content() {
								'step 0';
								event.targets = targets.slice(0);
								event.targets.sort(lib.sort.seat);
								('step 1');
								if (event.targets.length) {
									var target = event.targets.shift();
									event.target = target;
									target.chooseToDiscard(
										'he',
										2,
										function (card) {
											return get.type(card) != 'basic';
										},
										true
									);
									event.target.damage()._triggered = null;
								} else event.finish();
								event.goto(1);
							},
						},
						桔疾风印: {
							audio: 'ext:洪荒ol/audio:2',
							nobracket: true,
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('桔疾风印'), function (card, player, target) {
									return target != player;
								});
								('step 1');
								if (result.bool) {
									game.swapSeat(player, result.targets[0]);
									if (result.targets[0].isEnemiesOf(player)) {
										if (!result.targets[0].hasSkill('fengyin')) {
											result.targets[0].addTempSkill('fengyin');
										}
										result.targets[0].damage(2)._triggered = null;
									} else {
										player.changeHujia(2);
										result.targets[0].changeHujia(2);
									}
								}
							},
						},
						魅影暗雾: {
							audio: 'ext:洪荒ol/audio:2',
							nobracket: true,
							forced: true,
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return get.distance(player, event.player) <= 3;
							},
							content() {
								if (get.distance(player, trigger.player) <= 1) trigger.num *= 2;
								if (get.distance(player, trigger.player) <= 3) trigger.num *= 4;
							},
						},
						暗影猎杀: {
							audio: 'ext:洪荒ol/audio:2',
							nobracket: true,
							trigger: { player: 'phaseEnd' },
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].damage();
									}
								}
								player.draw(list.length);
								player.addTempSkill('qianxing', { player: 'phaseBefore' });
							},
						},
						咆哮paoxiao: {
							audio: 'ext:洪荒ol/audio:2',
							group: '咆哮paoxiao1',
							trigger: { player: 'shaBegin' },
							mark: true,
							intro: {
								content(storage) {
									return '使用杀可额外造成' + storage + '点伤害';
								},
							},
							init(player) {
								player.storage.咆哮paoxiao = 0;
							},
							content() {
								if (typeof player.storage.咆哮paoxiao == 'number') {
									player.storage.咆哮paoxiao += 1;
								} else {
									player.storage.咆哮paoxiao = 1;
								}
								player.markSkill('咆哮paoxiao');
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return Infinity;
								},
							},
						},
						咆哮paoxiao1: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return player.storage.咆哮paoxiao && event.card && event.card.name == 'sha';
							},
							content() {
								trigger.num += player.storage.咆哮paoxiao;
							},
						},
						替身tishen: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								player.hp = player.maxHp;
								player.draw(player.maxHp - player.hp);
								for (var i = 0; i < player.maxHp - player.hp; i++) {
									var nature = ['null', 'fire', 'thunder'];
									player.gain(game.createCard('sha', null, null, nature.randomGet()));
									player.$draw();
								}
								player.maxHp = 2 * player.maxHp;
							},
							group: '替身tishen3',
						},
						替身tishen3: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								player.addTempSkill('替身tishen2');
							},
						},
						替身tishen2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseEnd' },
							content() {
								player.hp = player.maxHp;
								player.draw(player.maxHp - player.hp);
								for (var i = 0; i < player.maxHp - player.hp; i++) {
									var nature = ['null', 'fire', 'thunder'];
									player.gain(game.createCard('sha', null, null, nature.randomGet()));
									player.$draw();
								}
								player.maxHp = 2 * player.maxHp;
							},
						},
						断喝duanhe: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'shaBegin' },
							filter(event, player) {
								return event.card && event.card.name == 'sha' && player.countCards('h', 'sha');
							},
							content() {
								if (typeof trigger.shanRequired == 'number') {
									trigger.shanRequired += player.countCards('h', 'sha') - 1;
								} else {
									trigger.shanRequired = player.countCards('h', 'sha');
								}
								player.addTempSkill('断喝duanhe1');
								player.addTempSkill('断喝duanhe2');
							},
						},
						断喝duanhe1: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && event.card.name == 'sha' && player.countCards('h', 'sha');
							},
							content() {
								trigger.num += player.countCards('h', 'sha');
							},
						},
						断喝duanhe2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { source: 'damageEnd' },
							filter(event, player) {
								return event.card && event.card.name == 'sha' && player.countCards('h', 'sha');
							},
							content() {
								player.discardPlayerCard(player.countCards('h', 'sha'), trigger.player, 'he', true);
							},
						},
						笞: {
							trigger: { player: 'damageEnd' },
							forced: true,
							content() {
								player.loseHp(trigger.num);
							},
							mark: true,
							intro: {
								content: '已获得<笞>标记',
							},
						},
						杖: {
							trigger: { target: 'shaBegin' },
							forced: true,
							content() {
								player.damage('nosource');
							},
							mark: true,
							intro: {
								content: '已获得<杖>标记',
							},
						},
						流: {
							trigger: { player: 'loseEnd' },
							usable: 1,
							forced: true,
							content() {
								player.chooseToDiscard('he', true, 2);
							},
							mark: true,
							intro: {
								content: '已获得<流>标记',
							},
						},
						徒: {
							trigger: { player: 'phaseEnd' },
							forced: true,
							content() {
								player.turnOver();
							},
							mark: true,
							intro: {
								content: '已获得<徒>标记',
							},
						},
						死: {
							trigger: { player: 'phaseEnd' },
							forced: true,
							filter(event, player) {
								return player.storage.死 && player.storage.死 > 3;
							},
							content() {
								player.die();
							},
							mark: true,
							init(player) {
								player.storage.死 = 0;
							},
							onremove(player) {
								delete player.storage.死;
							},
							intro: {
								content(storage) {
									return '共有' + storage + '<死>标记';
								},
							},
						},
						洪荒神裁: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: ['phaseUseBegin', 'shaBegin'] },
							forced: true,
							async content(event, trigger, player) {
								//QQQ
								var list = [];
								var choiceList = ['令一名角色获得<笞>', '令一名角色获得<杖>', '令一名角色获得<徒>', '令一名角色获得<流>', '令一名角色获得一枚<死>'];
								var { result } = await player
									.chooseControl(list)
									.set('ai', (target) => -get.attitude(player, target))
									.set('choiceList', choiceList);
								if (result.control) {
									var index = ['选项一', '选项二', '选项三', '选项四', '选项五'].indexOf(result.control);
									var { result } = await player.chooseTarget(choiceList[index], true);
									if (result.targets?.length) {
										switch (index) {
											case 0:
												result.targets[0].addTempSkill('笞', { player: 'phaseAfter' });
												break;
											case 1:
												result.targets[0].addTempSkill('杖', { player: 'phaseAfter' });
												break;
											case 2:
												result.targets[0].addTempSkill('徒', { player: 'phaseAfter' });
												break;
											case 3:
												result.targets[0].addTempSkill('流', { player: 'phaseAfter' });
												break;
											case 4:
												{
													result.targets[0].addSkill('死');
													if (!result.targets[0].storage.死) result.targets[0].storage.死 = 0;
													result.targets[0].storage.死++;
												}
												break;
										}
									}
								}
							},
						},
						巡使: {
							audio: 'ext:洪荒ol/audio:2',
							filter(event, player) {
								return event.targets && event.targets.length > 1 && event.getParent(2).name != '巡使';
							},
							trigger: { player: 'useCardAfter' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('巡使'), [1, trigger.targets.length]).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.useCard({ name: 'sha' }, result.targets, false);
								}
							},
						},
						fazqy法zhuanzqy箓: {
							init(player, skill) {
								if (player.storage[skill] == undefined) player.storage[skill] = 4;
								if (player.storage[skill + '_map'] == undefined)
									player.storage[skill + '_map'] = {
										spade: 1,
										heart: 1,
										diamond: 1,
										club: 1,
									};
							},
							mark: true,
							intro: {
								content(content, player) {
									var storage = player.storage.fazqy法zhuanzqy箓_map;
									var str = '紫薇(♠️️️):';
									str += storage.spade ? storage.spade : 0;
									str += '、玉清(♥️️️):';
									str += storage.heart ? storage.heart : 0;
									str += '、后土(♣️️️):';
									str += storage.club ? storage.club : 0;
									str += '、勾陈(♦️️️):';
									str += storage.diamond ? storage.diamond : 0;
									str += '、合计:';
									str += player.storage.fazqy法zhuanzqy箓 ? player.storage.fazqy法zhuanzqy箓 : 0;
									return str;
								},
							},
							forced: true,
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'discardAfter',
							},
							content() {
								for (var i = 0; i < trigger.cards.length; i++) {
									if (typeof player.storage.fazqy法zhuanzqy箓_map[trigger.cards[i].suit] == 'number') {
										player.storage.fazqy法zhuanzqy箓_map[trigger.cards[i].suit] += 1;
									} else {
										player.storage.fazqy法zhuanzqy箓_map[trigger.cards[i].suit] = 1;
									}
								}
								var num = 0;
								for (var i in player.storage.fazqy法zhuanzqy箓_map) {
									if (player.storage.fazqy法zhuanzqy箓_map[i]) num += player.storage.fazqy法zhuanzqy箓_map[i];
								}
								player.storage.fazqy法zhuanzqy箓 = num;
								player.markSkill('fazqy法zhuanzqy箓');
							},
						},
						dianzqy点huazqy化: {
							trigger: {
								player: ['phaseBegin', 'phaseEnd'],
							},
							forced: true,
							audio: 'ext:洪荒ol/audio:2',
							filter(event, player) {
								return player.storage.fazqy法zhuanzqy箓 > 0;
							},
							content() {
								'step 0';
								var num = player.storage.fazqy法zhuanzqy箓;
								player.chooseCardButton(num, true, get.cards(num), '【点化】:按顺将卡牌置于牌堆顶(先选择的在上)').set('ai', function (button) {
									return get.value(button.link);
								});
								('step 1');
								if (result.bool) {
									var list = result.links.slice(0);
									while (list.length) {
										ui.cardPile.insertBefore(list.pop(), ui.cardPile.firstChild);
									}
								}
							},
						},
						zhenzqy真yizqy仪: {
							group: ['zhenzqy真yizqy仪_spade', 'zhenzqy真yizqy仪_club', 'zhenzqy真yizqy仪_heart'],
							trigger: {
								player: 'damageEnd',
							},
							audio: 'ext:洪荒ol/audio:2',
							filter(event, player) {
								return player.storage.fazqy法zhuanzqy箓_map.diamond;
							},
							content() {
								'step 0';
								player.storage.fazqy法zhuanzqy箓_map.diamond--;
								var num = 0;
								for (var i in player.storage.fazqy法zhuanzqy箓_map) {
									if (player.storage.fazqy法zhuanzqy箓_map[i]) num += player.storage.fazqy法zhuanzqy箓_map[i];
								}
								player.storage.fazqy法zhuanzqy箓 = num;
								player.markSkill('fazqy法zhuanzqy箓');
								event.num = 0;
								event.togain = [];
								('step 1');
								var card = get.cardPile(function (card) {
									for (var i = 0; i < event.togain.length; i++) {
										if (get.type(card, 'trick') == get.type(event.togain[i], 'trick')) return false;
									}
									return true;
								});
								if (card) {
									event.togain.push(card);
									event.num++;
									if (event.num < 3) event.redo();
								}
								('step 2');
								if (event.togain.length) {
									player.gain(event.togain, 'gain2');
								}
							},
						},
						zhenzqy真yizqy仪_spade: {
							subSkill: {
								red: {
									mod: {
										suit(card, suit) {
											return 'heart';
										},
									},
								},
								black: {
									mod: {
										suit(card, suit) {
											return 'spade';
										},
									},
								},
							},
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'judge',
							},
							forced: true,
							filter(event, player) {
								return player.storage.fazqy法zhuanzqy箓_map.spade;
							},
							content() {
								'step 0';
								var str = get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',是否发动【真仪】修改判定结果？';
								player
									.chooseControl('♠️️5', '♥️️5', '取消')
									.set('prompt', str)
									.set('ai', function () {
										//return '取消';
										var judging = _status.event.judging;
										var cards = { name: judging.name, suit: 'spade', number: 5 };
										var cardh = { name: judging.name, suit: 'heart', number: 5 };
										var results = trigger.judge(cards) - trigger.judge(judging);
										var resulth = trigger.judge(cardh) - trigger.judge(judging);
										var attitude = get.attitude(player, trigger.player);
										if (attitude == 0 || (resulth == 0 && results == 0)) return '取消';
										if (attitude > 0) {
											if (results > 0) {
												if (resulth > results) return '♥️️5';
												return '♠️️5';
											} else if (resulth > 0) return '♥️️5';
											return '取消';
										} else {
											if (results < 0) {
												if (resulth < results) return '♥️️5';
												return '♠️️5';
											} else if (resulth < 0) return '♥️️5';
											return '取消';
										}
									})
									.set('judging', trigger.player.judging[0]);
								('step 1');
								if (['♠️️5', '♥️️5'].includes(result.control)) {
									player.storage.fazqy法zhuanzqy箓_map.spade--;
									var num = 0;
									for (var i in player.storage.fazqy法zhuanzqy箓_map) {
										if (player.storage.fazqy法zhuanzqy箓_map[i]) num += player.storage.fazqy法zhuanzqy箓_map[i];
									}
									player.storage.fazqy法zhuanzqy箓 = num;
									player.markSkill('fazqy法zhuanzqy箓');
									player.line(trigger.player);
									player.popup(result.control);
									game.log(player, '将判定结果改为了', '#y' + result.control);
									trigger.player.addTempSkill(result.control == '♠️️5' ? 'zhenzqy真yizqy仪_spade_black' : 'zhenzqy真yizqy仪_spade_red', 'judgeAfter');
								} else {
									event.finish();
								}
							},
							ai: {
								tag: {
									rejudge: 1,
								},
							},
						},
						zhenzqy真yizqy仪_club: {
							audio: 'ext:洪荒ol/audio:2',
							log: false,
							enable: 'chooseToUse',
							filter(event, player) {
								return player.storage.fazqy法zhuanzqy箓_map.club;
							},
							filterCard: true,
							position: 'h',
							viewAs: {
								name: 'tao',
							},
							prompt: '将一张手牌当桃使用',
							check(card) {
								return 15 - get.value(card);
							},
							precontent() {
								player.storage.fazqy法zhuanzqy箓_map.club--;
								var num = 0;
								for (var i in player.storage.fazqy法zhuanzqy箓_map) {
									if (player.storage.fazqy法zhuanzqy箓_map[i]) num += player.storage.fazqy法zhuanzqy箓_map[i];
								}
								player.storage.fazqy法zhuanzqy箓 = num;
								player.markSkill('fazqy法zhuanzqy箓');
							},
							ai: {
								skillTagFilter(player) {
									if (!player.isDying()) return false;
									return player.storage.fazqy法zhuanzqy箓_map.club;
								},
								save: true,
								basic: {
									order(card, player) {
										if (player.hasSkillTag('pretao')) return 5;
										return 2;
									},
									useful: [8, 6.5, 5, 4],
									value: [8, 6.5, 5, 4],
								},
								result: {
									target(player, target) {
										// if(player==target&&player.hp<=0) return 2;
										var nd = player.needsToDiscard();
										var keep = false;
										if (nd <= 0) {
											keep = true;
										} else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
											keep = true;
										}
										var mode = get.mode();
										if (target.hp >= 2 && keep && target.hasFriend()) {
											if (target.hp > 2 || nd == 0) return 0;
											if (target.hp == 2) {
												if (
													game.hasPlayer(function (current) {
														if (target != current && get.attitude(target, current) >= 3) {
															if (current.hp <= 1) return true;
															if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
														}
													})
												) {
													return 0;
												}
											}
										}
										if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
										var att = get.attitude(player, target);
										if (att < 3 && att >= 0 && player != target) return 0;
										var tri = _status.event.getTrigger();
										if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
											if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
												var num = game.countPlayer(function (current) {
													if (current.identity == 'fan') {
														return current.countCards('h', 'tao');
													}
												});
												if (num > 1 && player == target) return 2;
												return 0;
											}
										}
										if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
											if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
												return 0;
											}
										}
										if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
											return 0;
										}
										return 2;
									},
								},
								tag: {
									recover: 1,
									save: 1,
								},
							},
						},
						zhenzqy真yizqy仪_heart: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.source && player.storage.fazqy法zhuanzqy箓_map.heart;
							},
							check(event, player) {
								return false;
							},
							prompt(event) {
								return '即将对' + get.translation(event.player) + '造成伤害,' + get.prompt('zhenzqy真yizqy仪');
							},
							logTarget: 'source',
							content() {
								'step 0';
								player.storage.fazqy法zhuanzqy箓_map.heart--;
								var num = 0;
								for (var i in player.storage.fazqy法zhuanzqy箓_map) {
									if (player.storage.fazqy法zhuanzqy箓_map[i]) num += player.storage.fazqy法zhuanzqy箓_map[i];
								}
								player.storage.fazqy法zhuanzqy箓 = num;
								player.markSkill('fazqy法zhuanzqy箓');
								trigger.num++;
							},
						},
						隐忍图强: {
							group: '隐忍图强2',
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseDiscardBefore' },
							nobracket: true,
							// frequent:function(event,player){
							// return !player.needsToDiscard();
							// },
							content() {
								if (player.countUsed('sha') == 0) player.addTempSkill('隐忍图强1', { player: 'phaseAfter' });
								if (
									player.countUsed(function (card) {
										return get.tag(card, 'damage');
									}) == 0
								)
									player.changeHujia();
							},
						},
						隐忍图强1: {
							mod: {
								maxHandcard(player, num) {
									return num + 20;
								},
							},
						},
						隐忍图强2: {
							audio: 'ext:洪荒ol/audio:2',
							nobracket: true,
							trigger: { player: 'phaseEnd' },
							filter(event, player) {
								return player.hujia;
							},
							content() {
								var listjnname = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									var current = ui.cardPile.childNodes[i];
									if (get.type(current, 'trick') == 'trick') listjnname.push(current.name);
								}
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									var current = ui.discardPile.childNodes[i];
									if (get.type(current, 'trick') == 'trick') listjnname.push(current.name);
								}
								var listnodamagename = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									var current = ui.cardPile.childNodes[i];
									if (!get.tag(current, 'damage')) listnodamagename.push(current.name);
								}
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									var current = ui.discardPile.childNodes[i];
									if (!get.tag(current, 'damage')) listnodamagename.push(current.name);
								}
								var listdamagename = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									var current = ui.cardPile.childNodes[i];
									if (get.tag(current, 'damage')) listdamagename.push(current.name);
								}
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									var current = ui.discardPile.childNodes[i];
									if (get.tag(current, 'damage')) listdamagename.push(current.name);
								}
								if (Math.random() < 0.5) {
									for (var i = 0; i < player.hujia; i++) {
										player.gain(game.createCard(listjnname.randomGet()), 'gain2');
									}
								}
								if (Math.random() < 0.6) {
									for (var i = 0; i < player.hujia; i++) {
										player.gain(game.createCard(listnodamagename.randomGet()), 'gain2');
									}
								}
								if (Math.random() < 0.7) {
									for (var i = 0; i < player.hujia; i++) {
										player.gain(game.createCard(listdamagename.randomGet()), 'gain2');
									}
								}
							},
						},
						卧薪尝胆: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'loseAfter' },
							// frequent:true,
							nobracket: true,
							filter(event, player) {
								if (player == _status.currentPhase) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.type(i) == 'basic' && i.original != 'j') return true;
									}
								return false;
							},
							content() {
								var num = 0;
								for (var i = 0; i < trigger.cards.length; i++) {
									if (get.type(trigger.cards[i]) == 'basic' && trigger.cards[i].original != 'j') num++;
								}
								player.changeHujia();
								player.draw(
									num *
									2 *
									player.countCards('h', function (card) {
										return get.type(card) == 'basic';
									})
								);
							},
							ai: {
								threaten: 0.7,
							},
						},
						越甲吞吴: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 3,
							nobracket: true,
							filter(event, player) {
								return player.countCards('h', function (card) {
									return get.tag(card, 'damage');
								});
							},
							content() {
								'step 0';
								player.chooseToDiscard('h', true, function (card) {
									return get.tag(card, 'damage');
								});
								('step 1');
								if (result.bool) {
									var list = game.filterPlayer(function (current) {
										return current.countCards('h') < result.cards[0].number && current.isEnemiesOf(player);
									});
									list.sort(lib.sort.seat);
									list.map(function (item) {
										item.damage();
									});
								}
							},
						},
						火谋: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 7,
							content() {
								'step 0';
								game.JPG('zhugeliang龙跃凤鸣gjdh', 2100);
								player.chooseTarget(get.prompt('火谋')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, function (card) {
										return get.color(card) == 'red';
									});
									result.targets[0].damage('fire');
									player.draw();
								}
							},
						},
						奇阵: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return event.card.name == 'sha';
							},
							content() {
								'step 0';
								game.JPG('zhugeliang龙跃凤鸣ccdh', 3200);
								player.judge();
								('step 1');
								var listjnname = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									var current = ui.cardPile.childNodes[i];
									if (get.type(current, 'trick') == 'trick') listjnname.push(current.name);
								}
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									var current = ui.discardPile.childNodes[i];
									if (get.type(current, 'trick') == 'trick') listjnname.push(current.name);
								}
								var listbasicname = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									var current = ui.cardPile.childNodes[i];
									if (get.type(current) == 'basic') listbasicname.push(current.name);
								}
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									var current = ui.discardPile.childNodes[i];
									if (get.type(current) == 'basic') listbasicname.push(current.name);
								}
								if (get.color(result.card) == 'red') {
									trigger.target.draw(2);
									trigger.target.gain(game.createCard(listjnname.randomGet()), 'gain2');
									trigger.cancel();
								}
								if (get.color(result.card) == 'black') {
									trigger.player.damage()._triggered = null;
									trigger.target.gain(game.createCard(listbasicname.randomGet()), 'gain2');
									trigger.target.recover();
								}
							},
						},
						破计: {
							group: '破计2',
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick';
							},
							content() {
								'step 0';
								game.JPG('zhugeliang龙跃凤鸣ccdh', 3200);
								player.chooseTarget(get.prompt('破计')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, function (card) {
										return get.color(card) == 'black';
									});
									player.draw();
									trigger.cancel();
								}
							},
						},
						破计2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'useCard' },
							filter(event, player) {
								return event.card.name == 'wuxie';
							},
							logTarget: 'player',
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							content() {
								'step 0';
								game.JPG('zhugeliang龙跃凤鸣ccdh', 3200);
								player.chooseTarget(get.prompt('破计')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, function (card) {
										return get.color(card) == 'black';
									});
									player.draw();
									trigger.cancel();
								}
							},
							ai: {
								expose: 0.2,
								threaten: 1.3,
							},
						},
						衔木: {
							trigger: { global: 'loseAfter' },
							forced: true,
							usable: 2,
							content() {
								var hs = trigger.player.getCards('he');
								if (hs.length) {
									var hs2 = [];
									for (var i = 0; i < hs.length; i++) {
										hs2.push(game.createCard(hs[i].name, hs[i].suit, hs[i].number));
									}
									player.gain(hs2, 'draw');
								}
								player.gain(game.createCard('sha'), 'gain2');
							},
						},
						填海: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filter(event, player) {
								return player.countCards('h', function (card) {
									return get.tag(card, 'damage');
								});
							},
							content() {
								'step 0';
								player.chooseToDiscard('选择弃置一张伤害标签牌', 'h', true, function (card) {
									return get.tag(card, 'damage');
								});
								('step 1');
								player.chooseTarget(get.prompt('填海'), [1, 4]).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									var num = 0;
									result.targets.map(function (item) {
										num += item.countCards('h', function (card) {
											return get.tag(card, 'damage');
										});
										item.chooseToDiscard(
											'he',
											true,
											item.countCards('h', function (card) {
												return get.tag(card, 'damage');
											})
										);
										item.damage();
									});
									player.draw(num);
								}
							},
						},
						lijianyjnm: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 2,
							content() {
								game.JPG('diaochan忧君难寐gjdh', 8000);
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								var list1 = list;
								list.map(function (item) {
									item.chooseToDiscard('he', true);
								});
								for (var i = 0; i < list.length; i++) {
									for (var j = 0; j < list1.length; j++) {
										list[i].useCard({ name: 'juedou' }, list1[j]);
									}
								}
								list.map(function (item) {
									item.damage()._triggered = null;
								});
							},
						},
						biyueyjnm: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseEnd' },
							content() {
								'step 0';
								game.JPG('diaochan忧君难寐gjdh', 8000);
								player.chooseTarget(get.prompt('biyueyjnm')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', true);
									player.draw(Math.max(2, Math.ceil(player.countCards('h') / 2)));
								}
								('step 2');
								player.chooseTarget(get.prompt('biyueyjnm')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', result.targets[0].hp, true);
								}
							},
						},
						pianyiyjnm: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'damageEnd' },
							init(player) {
								player.storage.kl = [];
							},
							_priority: 100,
							filter(event, player) {
								return !player.storage.kl.includes(event.player) && event.player != player && event.player.identity != 'zhu';
							},
							prompt(event, player) {
								return '翩仪:是否发动【翩仪】将此角色变为你的傀儡？';
							},
							content() {
								'step 0';
								game.JPG('diaochan忧君难寐gjdh', 8000);
								('step 1');
								player.line(trigger.player, 'thunder');
								trigger.player.maxHp = 0;
								trigger.player.die();
								('step 2');
								var dialog = event.xdialog || ui.create.characterDialog(event.filterChoice);
								var names = [];
								for (var i = 0; i < game.players.length; i++) {
									names.push(game.players[i].name);
									names.push(game.players[i].name2);
								}
								if (game.dead) {
									for (var i = 0; i < game.dead.length; i++) {
										names.push(game.dead[i].name);
										names.push(game.dead[i].name2);
									}
								}
								names.push(trigger.player.name);
								names.push(trigger.player.name2);
								if (!event.groupControl) {
									event.groupControl = ui.create.groupControl(dialog);
								}
								var next = player.chooseButton(dialog, true);
								next.ai = (button) => Math.random(); //QQQ
								next.filterButton = function (button) {
									return !names.includes(button.link);
								};
								('step 3');
								var pl = trigger.player;
								player.storage.kl.push(pl);
								pl.storage.sz = player;
								if (pl.name2) {
									pl.init(result.buttons[0].link, 'shibing');
								} else pl.init(result.buttons[0].link);
								if (player.identity != 'zhu') pl.identity = player.identity;
								else pl.identity = 'zhong';
								if (lib.config.mode == 'guozhan') pl._group = player.identity;
								pl.setIdentity('font color=CC0066>傀</font>');
								pl.mark('傀');
								pl.revive();
								pl.maxHp = 4;
								pl.hp = 4;
								pl.draw(4);
								player.markCharacter(result.buttons[0].link);
								('step 4');
								if (event.groupControl) {
									event.groupControl.close();
								}
							},
							ai: {
								threaten: 3,
							},
						},
						反間: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								'step 0';
								game.JPG('zhouyu江淮之杰gjdh', 6000);
								game.playAudio('../extension/洪荒ol/audio/zhouyu江淮之杰音效.mp3');
								player.chooseControl('黑色', '红色');
								('step 1');
								target.showHandcards();
								if (result.control == '黑色') {
									player.draw(
										target.getCards('he', {
											color: 'black',
										}).length
									);
									player.changeHujia(
										target.getCards('he', {
											color: 'black',
										}).length
									);
									target.discard(
										target.getCards('he', {
											color: 'black',
										})
									);
								} else {
									player.draw(
										target.getCards('he', {
											color: 'red',
										}).length
									);
									player.changeHujia(
										target.getCards('he', {
											color: 'red',
										}).length
									);
									target.discard(
										target.getCards('he', {
											color: 'red',
										})
									);
								}
								target.loseHp();
								game.JPG('zhouyu江淮之杰gjdh', 6000);
								('step 2');
								game.mp4('zhouyu江淮之杰攻击');
								game.mp4('zhouyu江淮之杰特殊');
							},
						},
						yingzijhzj: {
							audio: 'ext:洪荒ol/audio:2',
							group: 'yingzijhzj2',
							trigger: { player: 'phaseDrawBegin' },
							forced: true,
							content() {
								'step 0';
								game.JPG('zhouyu江淮之杰gjdh', 6000);
								game.playAudio('../extension/洪荒ol/audio/zhouyu江淮之杰音效.mp3');
								var x = 0;
								for (var i = 0; i < game.players.length; i++) {
									x += game.players[i].maxHp;
								}
								var m = 1 + x;
								trigger.num += m;
								('step 1');
								game.mp4('zhouyu江淮之杰出场');
								game.mp4('zhouyu江淮之杰待机');
							},
						},
						yingzijhzj2: {
							mod: {
								maxHandcard(player, num) {
									var x = 0;
									for (var i = 0; i < game.players.length; i++) {
										x += game.players[i].maxHp;
									}
									return num + 1 + x;
								},
							},
						},
						挽蛇: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: ['useCardBegin', 'respondBegin'] },
							forced: true,
							filter(event, player) {
								if (!player.storage.挽蛇) return false;
								return get.type(player.storage.挽蛇) != get.type(event.card);
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.discard(item.getCards('he').randomGets(2));
								});
							},
							intro: {
								content: 'card',
							},
							group: ['挽蛇2', '挽蛇3'],
						},
						挽蛇3: {
							trigger: { player: 'useCardBegin' },
							_priority: -1,
							silent: true,
							content() {
								player.storage.挽蛇 = trigger.card;
							},
						},
						挽蛇2: {
							trigger: { global: 'phaseBefore' },
							silent: true,
							_priority: 10,
							content() {
								player.storage.挽蛇 = null;
							},
						},
						//锁定技,回合结束时,你可选择一名角色,其从牌堆获得不同类型的各一张(没有则不获得),令所有敌方角色随机弃置一张牌
						江澜: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseEnd' },
							forced: true,
							async content(event, trigger, player) {
								//QQQ
								var type = {};
								for (var i in lib.card) {
									if (!type[lib.card[i].type]) type[lib.card[i].type] = [];
									type[lib.card[i].type].push(i);
								}
								for (var i in type) {
									player.gain(game.createCard(type[i].randomGet()));
								}
								for (var i of game.filterPlayer((Q) => Q.isEnemiesOf(player))) {
									if (i.countCards('he')) await i.chooseToDiscard('he', true);
								}
							},
						},
						巡潭: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return event.nature == 'thunder';
							},
							content() {
								player.phase('nodelay');
								player.addTempSkill('巡潭2', { player: 'phaseAfter' });
							},
						},
						巡潭2: {
							mark: true,
							marktext: '💧',
							intro: {
								content(storage) {
									return '当前为巡谭的额外回合';
								},
							},
						},
						闪麟: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'damageEnd' },
							content() {
								'step 0';
								player.gain(game.createCard('shan'), 'draw');
								player.judge();
								('step 1');
								if (get.color(result.card) == 'black' && trigger.source) trigger.source.damage('thunder');
								if (get.color(result.card) == 'red') player.recover();
							},
						},
						掌川: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'discardEnd' },
							content() {
								var n = trigger.cards.length;
								var t = game
									.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									})
									.randomGet();
								var action = Math.random() < 0.5 ? 'draw' : Math.random() < 0.5 ? 'discardPlayerCard' : 'gainPlayerCard';
								player[action](n, t, 'he', true);
							},
						},
						潇姿: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseDrawBegin' },
							forced: true,
							content() {
								trigger.num += player.countCards('he', (card) => !get.tag(card, 'damage'));
							},
						},
						泊澜: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'damageBegin' },
							content() {
								var m1 = get.inpile2('basic').randomGet();
								var m2 = get.inpile2('trick').randomGet();
								var m3 = get.inpile2('equip').randomGet();
								player.gain([game.createCard(m1), game.createCard(m2), game.createCard(m3)], 'draw');
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.linergbl(result.targets, { color: [175, 238, 238] });
								list.map(function (item) {
									item.discard(item.getCards('he').randomGet());
								});
							},
						},
						尊清: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: ['recoverBegin', 'damageBegin'],
							},
							content() {
								'step 0';
								player.chooseControl('<span style="color: #6c757d">+1</span>', '<span style="color: #48cae4">-1</span>');
								('step 1');
								trigger.num += result.control == '<span style="color: #6c757d">+1</span>' ? 1 : -1;
							},
						},
						// enable:['chooseToRespond','chooseToUse'],
						瑰杀: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'shaBegin' },
							usable: 3,
							filter(event, player) {
								return event.player.isFriendsOf(player);
							},
							content() {
								trigger.player.getStat().card.sha--;
								trigger.player.draw(3);
								trigger.player.changeHujia();
							},
						},
						姝丽: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							content() {
								'step 0';
								var list = lib.inpile.filter(function (i) {
									return (
										get.type({
											name: i,
										}) === 'basic'
									);
								});
								var gainnum = [3, 8].randomGet();
								var gaincards = [];
								var nature = ['null', 'fire', 'thunder'];
								for (var i = 0; i < gainnum; i++) {
									var card = list.randomGet();
									var natureType = nature.randomGet();
									var gainCard = game.createCard(card, null, null, natureType);
									gaincards.push(gainCard);
								}
								player.gain(gaincards, 'draw');
								event.cards = gaincards;
								('step 1');
								if (event.cards.length > 1) {
									player.chooseCardButton('将<姝丽>牌分配给任意角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
										if (ui.selected.buttons.length == 0) return 1;
										return 0;
									});
								} else if (event.cards.length == 1) {
									event._result = { links: event.cards.slice(0), bool: true };
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									for (var i = 0; i < result.links.length; i++) {
										event.cards.remove(result.links[i]);
									}
									event.togive = result.links.slice(0);
									player
										.chooseTarget('将' + get.translation(result.links) + '交给一名角色', true)
										.set('ai', function (target) {
											var att = get.attitude(_status.event.player, target);
											if (_status.event.enemy) {
												return -att;
											} else if (att > 0) {
												return att / (1 + target.countCards('h'));
											} else {
												return att / 100;
											}
										})
										.set('enemy', get.value(event.togive[0]) < 0);
								}
								('step 3');
								if (result.targets.length) {
									result.targets[0].gain(event.togive, 'draw');
									player.line(result.targets[0], 'green');
									game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
									event.goto(1);
								}
							},
						},
						闪魄: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'loseEnd' },
							filter(event, player) {
								var names = event.cards.map((i) => i.name);
								return names.includes('shan');
							},
							content() {
								if (trigger.player.isEnemiesOf(player)) trigger.player.discard(trigger.player.getCards('he').randomGets(3));
								else trigger.player.draw(3);
							},
						},
						昙现: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseUseBegin' },
							content() {
								function getLetterPosition(letter) {
									var position = letter.toLowerCase().charCodeAt(0) - 97;
									return position;
								}
								var X = getLetterPosition('shan'.charAt(0));
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player) && current.countCards('he');
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.damage(item.getCards('he', (i) => getLetterPosition(i.name.charAt(0)) > X).length);
								});
							},
						},
						美酿: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'phaseBegin' },
							filter(event, player) {
								return event.player.isFriendsOf(player);
							},
							content() {
								trigger.player.gain(game.createCard('jiu'), 'draw');
								trigger.player.changeHujia();
							},
						},
						媱丽: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'useCardBegin' },
							filter(event, player) {
								return event.card.name == 'jiu';
							},
							content() {
								'step 0';
								player.chooseTarget(`<span style="color: red; text-shadow: 10% 10% 0px black, -10% -10% 0px black;">${get.prompt('媱丽')}</span>`).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].damage(2);
									trigger.player.gain(game.createCard('sha'), 'draw');
									trigger.player.draw(result.targets[0].countCards('h', (card) => ['sha', 'jiu'].includes(card.name)));
								}
							},
						},
						石魅: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.gain([game.createCard('shan'), game.createCard('shan')]);
								player.$draw(2);
								player.chooseTarget(get.prompt('石魅')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].discard('h', (card) => ['sha', 'shan'].includes(card.name));
									result.targets[0].loseHp();
									result.targets[0].turnOver();
								}
							},
						},
						莎舞: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'damageBegin' },
							content() {
								'step 0';
								if (trigger.source) trigger.source.discard('he', (card) => !get.tag(card, 'damage'));
								('step 1');
								if (result.bool) player.draw(1 + trigger.cards.length);
								var evt = trigger.getParent('phaseUse');
								if (evt && evt.name == 'phaseUse') {
									evt.skipped = true;
								}
								if (Math.random() < 0.5) trigger.num = 0;
							},
						},
						蛮彝: {
							audio: 4,
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return event.card.name == 'nanman';
							},
							content() {
								game.JPG('huaman蛮帼英飒dhtx', 2500);
								trigger.cancel();
								player.changeHujia();
							},
						},
						蛮肆: {
							audio: 'ext:洪荒ol/audio:2',
							group: '蛮肆_viewas',
							trigger: { global: 'useCardToBefore' },
							filter(event, player) {
								return event.card && event.card.name == 'nanman';
							},
							forced: true,
							content() {
								game.JPG('huaman蛮帼英飒dhtx', 2500);
								player.draw();
							},
						},
						蛮肆_viewas: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 2,
							content() {
								'step 0';
								game.JPG('huaman蛮帼英飒dhtx', 2500);
								player.chooseTarget(get.prompt('蛮肆')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].discard(result.targets[0].getCards('he'));
								}
								var list = game.filterPlayer(function (current) {
									return current != player;
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'nanman' }, list);
							},
							ai: { order: 0.1 },
						},
						夷影: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'useCardToBegin' },
							forced: true,
							filter(event, player, name) {
								return true;
							},
							content() {
								'step 0';
								game.JPG('huaman蛮帼英飒dhtx', 2500);
								var next = player.draw();
								var prompt;
								event.target = trigger.targets[0];
								prompt = '摸一张牌,并获得' + get.translation(trigger.cards);
								next.set('goon', get.value(trigger.cards));
								next.set('prompt', get.prompt('夷影', event.target));
								next.set('prompt2', prompt);
								next.set('ai', function (card) {
									return _status.event.goon - get.value(card);
								});
								('step 1');
								if (result.bool) {
									player.gain(trigger.cards);
								}
							},
							ai: {
								expose: 0.25,
							},
							group: '夷影2',
						},
						夷影2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'useCardToBegin' },
							filter(event, player, name) {
								return true;
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							content() {
								game.JPG('huaman蛮帼英飒dhtx', 2500);
								var next = player.draw();
								var prompt;
								event.target = trigger.targets[0];
								prompt = '摸一张牌,使其无效' + get.translation(trigger.cards);
								next.set('goon', get.value(trigger.cards));
								next.set('prompt', get.prompt('夷影2', event.target));
								next.set('prompt2', prompt);
								next.set('ai', function (card) {
									return _status.event.goon - get.value(card);
								});
								trigger.untrigger();
								trigger.finish();
							},
							ai: {
								expose: 0.25,
							},
						},
						栈缘: {
							audio: 4,
							derivation: '兮力',
							forced: true,
							filter(event, player) {
								return true;
							},
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								game.JPG('huaman蛮帼英飒dhtx', 2500);
								player.gainMaxHp();
								player.recover();
								('step 1');
								player.chooseTarget('是否令一名其他角色和自己一同获得技能〖兮力〗？').ai = function (target) {
									return get.attitude(_status.event.player, target);
								};
								('step 2');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'fire');
									player.addSkill('兮力');
									target.addSkill('兮力');
								}
							},
						},
						兮力: {
							trigger: { global: 'damageBegin' },
							audio: 4,
							filter(event, player) {
								return event.source && event.source != player && event.source == _status.currentPhase && event.source.hasSkill('兮力') && !event.player.hasSkill('兮力');
							},
							content() {
								'step 0';
								game.JPG('huaman蛮帼英飒dhtx', 2500);
								player.draw('摸一张牌,令' + get.translation(trigger.source) + '对' + get.translation(trigger.player) + '的伤害+1,且你与其各摸两张牌？').ai = function (card) {
									return 9 - get.value(card);
								};
								('step 1');
								game.asyncDraw([trigger.source, player], 2);
								('step 2');
								trigger.num++;
							},
						},
						灵鲲: {
							audio: 'ext:洪荒ol/audio:2',
							init(player) {
								player.storage.灵鲲 = 0;
							},
							trigger: { player: 'phaseBegin' },
							forced: true,
							content() {
								player.draw();
								player.gainMaxHp();
								player.storage.灵鲲++;
								player.markSkill('灵鲲');
							},
							intro: {
								content: '手牌上限+#',
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.storage.灵鲲;
								},
							},
							group: '灵鲲_cancel',
							subSkill: {
								cancel: {
									trigger: { player: 'damageBegin' },
									_priority: -11,
									forced: true,
									filter(event, player) {
										//QQQ
										return !event.source || event.source.countCards('h') < player.maxHp;
									},
									content() {
										trigger.cancel();
										player.recover();
										player.draw(2);
									},
								},
							},
						},
						乾鲲: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { target: 'useCardToBegin' },
							filter(event, player) {
								return !event.card.number || [1, 11, 12, 13].some((i) => i != event.card.number);
							},
							content() {
								player.gain(trigger.card.name, 'draw');
								player.draw(2);
								player.recover();
								if (player.countCards('he', { color: 'red' })) {
									var ep = game
										.filterPlayer(function (current) {
											return current.isEnemiesOf(player);
										})
										.randomGet();
									ep.loseHp();
								}
							},
						},
						驺虞: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('驺虞')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw(result.targets[0].countCards('he', { type: 'equip' }) + result.targets[0].countCards('he', { color: 'black' }));
									var xg = ['loseHp', 'discard'].randomGet();
									var dyzhi = xg == 'loseHp' ? result.targets[0].countCards('he', { type: 'equip' }) + result.targets[0].countCards('he', { color: 'black' }) : result.targets[0].getCards('he');
									result.targets[0][xg](dyzhi);
								}
							},
						},
						灵龙: {
							audio: 'ext:洪荒ol/audio:2',
							group: '灵龙2',
							trigger: {
								global: 'loseEnd',
							},
							filter(event, player) {
								return event.cards && event.cards.some((i) => get.color(i) == 'black');
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget('<span style="color: deepskyblue;">选择一名角色令其弃置2张牌并对其造成1点伤害</span>').set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								result.targets[0].chooseToDiscard('<span style="color: deepskyblue;">请弃置两张牌</span>', 'he', 2, true);
								result.targets[0].damage();
							},
						},
						灵龙2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							usable: 2,
							content() {
								player.popup('<span style="color: deepskyblue;">灵龙</span>');
								player.recover(2);
								player.draw(2);
								player.gain([game.createCard('shan'), game.createCard('shan')], 'draw');
							},
						},
						仙化: {
							audio: 4,
							trigger: { global: 'gameDrawAfter', player: 'phaseBegin' },
							content() {
								'step 0';
								event.targets = game.filterPlayer(function (current) {
									return current != player;
								});
								event.targets.sort(lib.sort.seat);
								('step 1');
								if (event.targets.length) {
									var target = event.targets.shift();
									event.target = target;
									player.chooseBool('<span style="color:rebeccapurple">是否对' + get.translation(target) + '发动【仙化】？</span>');
								} else event.finish();
								('step 2');
								if (result.bool) event.goto(3);
								else event.goto(1);
								('step 3');
								if (!event.target.name || !lib.character[event.target.name]) event.goto(1);
								var skills = lib.character[event.target.name][3];
								for (var j = 0; j < skills.length; j++) {
									player.addSkill(skills[j]);
								}
								event.goto(1);
							},
						},
						法魂: {
							init(player) {
								player.storage.法魂 = {
									list: [],
									owned: {},
									player: player,
								};
							},
							get(player, num) {
								if (typeof num != 'number') num = 2;
								while (num-- > 0) {
									var name = player.storage.法魂.list.randomRemove();
									var skills = lib.character[name][3].slice(0);
									for (var i = 0; i < skills.length; i++) {
										var info = lib.skill[skills[i]];
										if (info.unique && !info.gainable) {
											skills.splice(i--, 1);
										}
									}
									player.storage.法魂.owned[name] = skills;
									player.popup(name);
									game.log(player, '获得了一个化身');
								}
							},
							group: ['法魂2', '法魂3'],
							intro: {
								content(storage, player) {
									var str = '';
									var slist = storage.owned;
									var list = [];
									for (var i in slist) {
										list.push(i);
									}
									if (list.length) {
										str += get.translation(list[0]);
										for (var i = 1; i < list.length; i++) {
											str += '、' + get.translation(list[i]);
										}
									}
									var skill = player.additionalSkills.法魂[0];
									if (skill) {
										str += '<p>当前技能:' + get.translation(skill);
									}
									return str;
								},
								mark(dialog, content, player) {
									var slist = content.owned;
									var list = [];
									for (var i in slist) {
										list.push(i);
									}
									if (list.length) {
										dialog.addSmall([list, 'character']);
									}
									var skill = player.additionalSkills.法魂[0];
									if (skill) {
										dialog.add('<div><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>');
									}
								},
							},
							mark: true,
						},
						法魂2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: ['gameStart', 'phaseBefore'],
							},
							forced: true,
							popup: false,
							_priority: 10,
							filter(event, player) {
								return !player.storage.法魂inited;
							},
							content() {
								'step 0';
								for (var i in lib.character) {
									if (i.indexOf('stone_') == 0) continue;
									var add = false;
									for (var j = 0; j < lib.character[i][3].length; j++) {
										var info = lib.skill[lib.character[i][3][j]];
										if (!info) {
											continue;
										}
										if (info.gainable || !info.unique) {
											add = true;
											break;
										}
									}
									if (add) {
										player.storage.法魂.list.push(i);
									}
								}
								for (var i = 0; i < game.players.length; i++) {
									player.storage.法魂.list.remove([game.players[i].name]);
									player.storage.法魂.list.remove([game.players[i].name1]);
									player.storage.法魂.list.remove([game.players[i].name2]);
								}
								lib.skill.法魂.get(player, 5);
								player.storage.法魂inited = true;
								player.chooseControl('<span style="color: blue;">魏</span>', '<span style="color: red;">蜀</span>', '<span style="color: green;">吴</span>', '<span style="color: white;">群</span>').set('prompt', '<span style="color:rebeccapurple">选择一个势力</span>');
								('step 1');
								var gname;
								switch (result.control) {
									case '<span style="color: blue;">魏</span>':
										gname = 'wei';
										break;
									case '<span style="color: red;">蜀</span>':
										gname = 'shu';
										break;
									case '<span style="color: green;">吴</span>':
										gname = 'wu';
										break;
									case '<span style="color: white;">群</span>':
										gname = 'qun';
										break;
								}
								event.ts = game.filterPlayer(function (current) {
									return current.group == gname;
								});
								('step 2');
								var list = lib.inpile;
								player.chooseButton('<span style="color:rebeccapurple">道魄</span>', [[list, 'vcard']]);
								('step 3');
								if (result.bool) {
									event.ts.forEach((t) => {
										if (player.canUse(result.links[0][2], t)) player.useCard(game.createCard(result.links[0][2]), t);
										else if (t.isFriendsOf(player)) t.gain(game.createCard(result.links[0][2]), 'draw');
									});
								}
							},
						},
						法魂3: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: ['phaseBegin', 'phaseEnd'],
								global: 'gameStart',
							},
							filter(event, player, name) {
								if (name == 'phaseBegin' && game.phaseNumber == 1) return false;
								return true;
							},
							_priority: -9,
							forced: true,
							popup: false,
							content() {
								'step 0';
								var slist = player.storage.法魂.owned;
								var list = [];
								for (var i in slist) {
									list.push(i);
								}
								if (event.isMine()) {
									event.dialog = ui.create.dialog('选择获得一项技能', [list, 'character']);
									if (trigger.name == 'game') {
										event.control = ui.create.control();
									} else {
										event.control = ui.create.control(['cancel2']);
									}
									event.clickControl = function (link) {
										if (link != 'cancel2') {
											var currentname = event.dialog.querySelector('.selected.button').link;
											var mark = player.marks.法魂;
											if (trigger.name == 'game') {
												mark.hide();
												// mark.style.transform='scale(0.8)';
												mark.style.transition = 'all 0.3s';
												setTimeout(function () {
													mark.style.transition = 'all 0s';
													ui.refresh(mark);
													mark.setBackground(currentname, 'character');
													if (mark.firstChild) {
														mark.firstChild.remove();
													}
													setTimeout(function () {
														mark.style.transition = '';
														mark.show();
														// mark.style.transform='';
													}, 50);
												}, 500);
											} else {
												if (mark.firstChild) {
													mark.firstChild.remove();
												}
												mark.setBackground(currentname, 'character');
											}
											player.addAdditionalSkill('法魂', link);
											game.log(player, '获得技能', '【' + get.translation(link) + '】');
											player.popup(link);
											for (var i = 0; i < event.dialog.buttons.length; i++) {
												if (event.dialog.buttons[i].classList.contains('selected')) {
													var name = event.dialog.buttons[i].link;
													player.sex = lib.character[name][0];
													player.group = lib.character[name][1];
													// player.node.identity.style.backgroundColor=get.translation(player.group+'Color');
													break;
												}
											}
											if (event.triggername == 'phaseBegin') {
												(function () {
													var skills = [link];
													var list = [];
													game.expandSkills(skills);
													var triggerevent = event._trigger;
													var name = 'phaseBegin';
													for (var i = 0; i < skills.length; i++) {
														var trigger = get.info(skills[i]).trigger;
														if (trigger) {
															var add = false;
															if (player == triggerevent.player && trigger.player) {
																if (typeof trigger.player == 'string') {
																	if (trigger.player == name) add = true;
																} else if (trigger.player.includes(name)) add = true;
															}
															if (trigger.global) {
																if (typeof trigger.global == 'string') {
																	if (trigger.global == name) add = true;
																} else if (trigger.global.includes(name)) add = true;
															}
															if (add && player.isOut() == false) list.push(skills[i]);
														}
													}
													for (var i = 0; i < list.length; i++) {
														game.createTrigger('phaseBegin', list[i], player, triggerevent);
													}
												})();
											}
										}
										ui.auto.show();
										event.dialog.close();
										event.control.close();
										game.resume();
									};
									event.control.custom = event.clickControl;
									ui.auto.hide();
									game.pause();
									for (var i = 0; i < event.dialog.buttons.length; i++) {
										event.dialog.buttons[i].classList.add('selectable');
									}
									event.custom.replace.button = function (button) {
										if (button.classList.contains('selected')) {
											button.classList.remove('selected');
											if (trigger.name == 'game') {
												event.control.style.opacity = 0;
											} else {
												event.control.replace(['cancel2']);
											}
										} else {
											for (var i = 0; i < event.dialog.buttons.length; i++) {
												event.dialog.buttons[i].classList.remove('selected');
											}
											button.classList.add('selected');
											event.control.replace(slist[button.link]);
											if (trigger.name == 'game' && getComputedStyle(event.control).opacity == 0) {
												event.control.style.transition = 'opacity 0.5s';
												ui.refresh(event.control);
												event.control.style.opacity = 1;
												event.control.style.transition = '';
												ui.refresh(event.control);
											} else {
												event.control.style.opacity = 1;
											}
										}
										event.control.custom = event.clickControl;
									};
									event.custom.replace.window = function () {
										for (var i = 0; i < event.dialog.buttons.length; i++) {
											if (event.dialog.buttons[i].classList.contains('selected')) {
												event.dialog.buttons[i].classList.remove('selected');
												if (trigger.name == 'game') {
													event.control.style.opacity = 0;
												} else {
													event.control.replace(['cancel2']);
												}
												event.control.custom = event.clickControl;
												return;
											}
										}
									};
								} else {
									event.finish();
								}
								player.chooseControl('<span style="color: blue;">魏</span>', '<span style="color: red;">蜀</span>', '<span style="color: green;">吴</span>', '<span style="color: white;">群</span>').set('prompt', '<span style="color:rebeccapurple">选择一个势力</span>');
								('step 1');
								var gname;
								switch (result.control) {
									case '<span style="color: blue;">魏</span>':
										gname = 'wei';
										break;
									case '<span style="color: red;">蜀</span>':
										gname = 'shu';
										break;
									case '<span style="color: green;">吴</span>':
										gname = 'wu';
										break;
									case '<span style="color: white;">群</span>':
										gname = 'qun';
										break;
								}
								event.ts = game.filterPlayer(function (current) {
									return current.group == gname;
								});
								('step 2');
								var list = lib.inpile;
								player.chooseButton('<span style="color:rebeccapurple">道魄</span>', [[list, 'vcard']]);
								('step 3');
								if (result.bool) {
									event.ts.forEach((t) => {
										if (player.canUse(result.links[0][2], t)) player.useCard(game.createCard(result.links[0][2]), t);
										else if (t.isFriendsOf(player)) t.gain(game.createCard(result.links[0][2]), 'draw');
									});
								}
								// if(result.bool){
								// player.useCard(game.createCard(result.links[0][2]),event.ts);
								// }
							},
						},
						道魄: {
							audio: 5,
							trigger: {
								player: ['damageEnd', 'loseHp', 'loseMaxHp', 'recoverEnd', 'gainMaxHpEnd'],
							},
							forced: true,
							filter(event, player) {
								return player.storage.法魂 && player.storage.法魂.list && player.storage.法魂.list.length;
							},
							content() {
								'step 0';
								for (var i = 0; i < 2 * Math.max(1, trigger.num); i++) {
									lib.skill.法魂.get(player);
								}
								player.chooseControl('<span style="color: blue;">魏</span>', '<span style="color: red;">蜀</span>', '<span style="color: green;">吴</span>', '<span style="color: white;">群</span>').set('prompt', '<span style="color:rebeccapurple">选择一个势力</span>');
								('step 1');
								var gname;
								switch (result.control) {
									case '<span style="color: blue;">魏</span>':
										gname = 'wei';
										break;
									case '<span style="color: red;">蜀</span>':
										gname = 'shu';
										break;
									case '<span style="color: green;">吴</span>':
										gname = 'wu';
										break;
									case '<span style="color: white;">群</span>':
										gname = 'qun';
										break;
								}
								event.ts = game.filterPlayer(function (current) {
									return current.group == gname;
								});
								('step 2');
								var list = lib.inpile;
								player.chooseButton('<span style="color:rebeccapurple">道魄</span>', [[list, 'vcard']]);
								('step 3');
								if (result.bool) {
									event.ts.forEach((t) => {
										if (player.canUse(result.links[0][2], t)) player.useCard(game.createCard(result.links[0][2]), t);
										else if (t.isFriendsOf(player)) t.gain(game.createCard(result.links[0][2]), 'draw');
									});
								}
							},
						},
						鬼雄: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0]) == 'd';
							},
							content() {
								player.gain(trigger.cards);
								player.$gain2(trigger.cards);
								player.gainMaxHp(1);
							},
							ai: {
								maixie: true,
								effect: {
									target(card, player) {
										if (player.hasSkill('jueqing')) return [1, -1];
										if (get.tag(card, 'damage')) return [1, 0.5];
									},
								},
							},
							check(event, player) {
								return !sgs.needKongcheng(player, true);
							},
						},
						连珠: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							filterCard: true,
							check(card) {
								return 8 - get.value(card);
							},
							discard: false,
							prepare(cards, player, targets) {
								player.$give(cards, targets[0]);
							},
							content() {
								'step 0';
								target.storage.lianzhu = cards[0];
								target.gain(cards[0]);
								('step 1');
								target.chooseControl('摸牌', '弃牌');
								('step 2');
								if (result.control == '摸牌') {
									player.draw(2);
								} else {
									target.chooseToDiscard(2, true);
								}
							},
							ai: {
								order: 9,
								result: {
									target(player, target) {
										return -target.countCards('he') - (player.countCards('h', 'du') ? 1 : 0);
									},
								},
								threaten: 2,
							},
						},
						魔女: {
							trigger: {
								target: 'useCardToBegin',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								trigger.player.clearSkills();
							},
						},
						慷慨: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'shaBegin',
							},
							filter(event, player) {
								return get.distance(player, event.target) <= 2;
							},
							check(event, player) {
								return get.attitude(player, event.target) >= 0;
							},
							content() {
								'step 0';
								player.draw();
								if (trigger.target != player) {
									player.chooseCard(true, 'he', '交给' + get.translation(trigger.target) + '一张牌').set('ai', function (card) {
										if (get.position(card) == 'e') return -1;
										if (card.name == 'shan') return 1;
										if (get.type(card) == 'equip') return 0.5;
										return 0;
									});
								} else {
									event.finish();
								}
								('step 1');
								trigger.target.gain(result.cards);
								player.$give(result.cards, trigger.target);
								event.card = result.cards[0];
								if (get.type(event.card) != 'equip') event.finish();
								('step 2');
								if (!trigger.target.isMin()) {
									trigger.target
										.chooseBool('是否装备' + get.translation(event.card) + '？')
										.set('ai', function () {
											var current = _status.event.player.getEquips(get.subtype(_status.event.card));
											if (current && current.length) {
												return ai.get.equipValue(event.card) > ai.get.equipValue(current[0]);
											}
											return true;
										})
										.set('card', event.card);
								} else {
									event.finish();
								}
								('step 3');
								if (result.bool) {
									trigger.target.equip(event.card);
								}
							},
							ai: {
								threaten: 1.1,
							},
						},
						业火: {
							enable: 'phaseUse',
							usable: 2,
							audio: 'ext:洪荒ol/audio:2',
							filter(event, player) {
								return !player.storage.业火;
							},
							init(player) {
								player.storage.业火 = false;
							},
							filterTarget(card, player, target) {
								var length = ui.selected.cards.length;
								return player != target && (length == 0 || length == 4);
							},
							filterCard(card) {
								var suit = card.suit;
								for (var i = 0; i < ui.selected.cards.length; i++) {
									if (ui.selected.cards[i].suit == suit) return false;
								}
								return true;
							},
							mark: true,
							selectCard: [0, 4],
							line: 'fire',
							check() {
								return -1;
							},
							selectTarget() {
								if (ui.selected.cards.length == 4) return [1, 1];
								if (ui.selected.cards.length == 0) return [1, 3];
								game.uncheck('target');
								return [1, 3];
							},
							content() {
								player.unmark('业火');
								player.storage.业火 = false;
								if (cards.length == 4) {
									player.recover(1);
									target.damage('fire', 6);
								} else {
									target.damage('fire', 2);
								}
							},
							intro: {
								content: 'limited',
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										if (target.hasSkillTag('nofire')) return 0;
										if (lib.config.mode == 'versus') return -1;
										for (var i = 0; i < game.players.length; i++) {
											if (lib.config.mode == 'identity') {
												if (game.players[i].ai.shown <= 0.2) return 0;
											} else if (lib.config.mode == 'guozhan') {
												if (game.players[i].identity == 'unknown') return 0;
											}
										}
										return get.damageEffect(target, player);
									},
								},
							},
						},
						曲音: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseDiscardEnd',
							},
							forced: true,
							filter(event, player) {
								return event.cards && event.cards.length > 1;
							},
							content() {
								'step 0';
								if (typeof event.count != 'number') {
									// event.count=trigger.cards.length-1;
									event.count = 1;
								}
								var recover = 0,
									lose = 0;
								for (var i = 0; i < game.players.length; i++) {
									if (!game.players[i].isOut()) {
										if (game.players[i].hp < game.players[i].maxHp) {
											if (get.attitude(player, game.players[i]) > 0) {
												if (game.players[i].hp < 2) {
													lose--;
													recover += 0.5;
												}
												lose--;
												recover++;
											} else if (get.attitude(player, game.players[i]) < 0) {
												if (game.players[i].hp < 2) {
													lose++;
													recover -= 0.5;
												}
												lose++;
												recover--;
											}
										} else {
											if (get.attitude(player, game.players[i]) > 0) {
												lose--;
											} else if (get.attitude(player, game.players[i]) < 0) {
												lose++;
											}
										}
									}
								}
								var prompt = get.prompt('曲音') + '(剩余' + get.cnNumber(event.count) + '次)';
								player.chooseControl('失去体力', '回复体力', 'cancel', ui.create.dialog(get.prompt('曲音'), 'hidden')).ai = function () {
									if (lose > recover && lose > 0) return 0;
									if (lose < recover && recover > 0) return 1;
									return 2;
								};
								('step 1');
								if (result.bool == false || result.control == 'cancel') {
									event.finish();
								} else {
									event.bool = result.control == '回复体力';
									event.num = 0;
									event.players = game.players.slice(0);
								}
								('step 2');
								if (event.num < event.players.length) {
									var target = event.players[event.num];
									if (event.bool) {
										target.recover();
									} else {
										player.recover(2);
										target.loseHp(2);
									}
									event.num++;
									event.redo();
								}
								('step 3');
								if (event.count > 1) {
									event.count--;
									event.goto(0);
								}
							},
							ai: {
								expose: 0.1,
								threaten: 2,
							},
						},
						能臣: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								target: 'loerEnd',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								trigger.recover();
							},
						},
						shenxianpi: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'discardAfter',
							},
							filter(event, player) {
								if (event.player == player || _status.currentPhase == player) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.type(i) == 'basic') {
											return true;
										}
									}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								if (trigger.delay == false) game.delay();
								('step 1');
								player.draw();
								player.addTempSkill('shenxian2', 'phaseAfter');
							},
							ai: {
								threaten: 1.5,
							},
						},
						qiangwupi: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.judge();
								('step 1');
								player.storage.qiangwu = result.number;
							},
							ai: {
								result: {
									player: 1,
								},
								order: 11,
							},
							mod: {
								targetInRange(card, player) {
									if (_status.currentPhase == player && card.name == 'sha' && card.number < player.storage.qiangwu) return true;
								},
								cardUsable(card, player) {
									if (_status.currentPhase == player && card.name == 'sha' && card.number > player.storage.qiangwu) return Infinity;
								},
							},
							group: ['qiangwu2', 'qiangwu3'],
						},
						zaiqipf: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseUseBefore',
							},
							check(event, player) {
								return player.countCards('h') + 2 <= player.hp;
							},
							content() {
								'step 0';
								event.cards = get.cards(3);
								trigger.untrigger();
								trigger.finish();
								player.$draw(event.cards.slice(0));
								event.cards = event.cards.filter((i) => {
									if (get.type(i) == 'equip') {
										player.equip(i);
										return false;
									}
									return true;
								});
								player.gain(event.cards);
								('step 1');
								if (player.countCards('h', 'sha')) {
									player.chooseToUse('再起:使用一张杀').filterCard = function (card) {
										return card.name == 'sha' && get.itemtype(card) == 'card';
									};
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									event.goto(1);
								}
							},
						},
						tunlangpi: {
							enable: 'phaseUse',
							audio: 'ext:洪荒ol/audio:2',
							usable: 1,
							filter(event, player) {
								if (player.countCards('h') == 0) return false;
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].countCards('h')) return true;
								}
								return false;
							},
							filterTarget(card, player, target) {
								return target.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToCompare(target);
								('step 1');
								if (result.bool) {
									if (
										game.hasPlayer(function (player) {
											return player != target;
										})
									) {
										player
											.chooseTarget(function (card, player, target) {
												var source = _status.event.source;
												return target != source;
											}, true)
											.set('ai', function (target) {
												return get.damageEffect(target, _status.event.source, player);
											})
											.set('source', target);
									} else {
										event.finish();
									}
								} else {
									player.damage(target);
									event.finish();
								}
								('step 2');
								if (result.bool && result.targets && result.targets.length) {
									target.line(result.targets[0], 'green');
									result.targets[0].damage(target);
								}
							},
							ai: {
								order: 0.5,
								result: {
									target(player, target) {
										var att = get.attitude(player, target);
										var oc = target.countCards('h') == 1;
										if (att > 0 && oc) return 0;
										for (var i = 0; i < game.players.length; i++) {
											if (game.players[i] != target && game.players[i] != player && get.distance(target, game.players[i], 'attack') <= 1) {
												if (get.damageEffect(game.players[i], target, player) > 0) {
													return att > 0 ? att / 2 : att - (oc ? 5 : 0);
												}
											}
										}
										return 0;
									},
									player(player, target) {
										if (target.hasSkill('jueqing')) return -10;
										var mn = 1;
										var hs = player.getCards('h');
										for (var i = 0; i < hs.length; i++) {
											mn = Math.max(mn, hs[i].number);
										}
										if (mn <= 11 && player.hp < 2) return -20;
										var max = player.maxHp - hs.length;
										for (var i = 0; i < game.players.length; i++) {
											if (get.attitude(player, game.players[i]) > 2) {
												max = Math.max(Math.min(5, game.players[i].hp) - game.players[i].countCards('h'), max);
											}
										}
										switch (max) {
											case 0:
												return mn == 13 ? 0 : -20;
											case 1:
												return mn >= 12 ? 0 : -15;
											case 2:
												return 0;
											case 3:
												return 1;
											default:
												return max;
										}
									},
								},
								expose: 0.2,
							},
						},
						mingjiepi: {
							trigger: {
								player: 'damageEnd',
							},
							audio: 'ext:洪荒ol/audio:2',
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('jieming'), [1, trigger.num], function (card, player, target) {
										return target.countCards('h') >= 0;
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (att > 2) {
											return Math.min(5, target.maxHp);
										}
										return att / 3;
									});
								('step 1');
								if (result.bool) {
									//QQQ
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].draw(Math.min(5, result.targets[i].maxHp));
									}
								}
							},
							ai: {
								maixie: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage') && target.hp > 1) {
											if (player.hasSkill('jueqing')) return [1, -2];
											var max = 0;
											for (var i = 0; i < game.players.length; i++) {
												if (get.attitude(target, game.players[i]) > 0) {
													max = Math.max(Math.min(5, game.players[i].hp), max);
												}
											}
											switch (max) {
												case 0:
													return 2;
												case 1:
													return 1.5;
												case 2:
													return [1, 2];
												default:
													return [0, max];
											}
										}
										if ((card.name == 'tao' || card.name == 'caoyao') && target.hp > 1 && target.countCards('h') <= target.hp) return [0, 0];
									},
								},
							},
						},
						quhupi: {
							enable: 'phaseUse',
							audio: 'ext:洪荒ol/audio:2',
							usable: 1,
							filter(event, player) {
								if (player.countCards('h') == 0) return false;
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].countCards('h')) return true;
								}
								return false;
							},
							filterTarget(card, player, target) {
								return target.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToCompare(target);
								('step 1');
								if (result.bool) {
									if (
										game.hasPlayer(function (player) {
											return player != target;
										})
									) {
										player
											.chooseTarget(function (card, player, target) {
												var source = _status.event.source;
												return target != source;
											}, true)
											.set('ai', function (target) {
												return get.damageEffect(target, _status.event.source, player);
											})
											.set('source', target);
									} else {
										event.finish();
									}
								} else {
									player.damage(target);
									event.finish();
								}
								('step 2');
								if (result.bool && result.targets && result.targets.length) {
									target.line(result.targets[0], 'green');
									result.targets[0].damage(target);
								}
							},
							ai: {
								order: 0.5,
								result: {
									target(player, target) {
										var att = get.attitude(player, target);
										var oc = target.countCards('h') == 1;
										if (att > 0 && oc) return 0;
										for (var i = 0; i < game.players.length; i++) {
											if (game.players[i] != target && game.players[i] != player && get.distance(target, game.players[i], 'attack') <= 1) {
												if (get.damageEffect(game.players[i], target, player) > 0) {
													return att > 0 ? att / 2 : att - (oc ? 5 : 0);
												}
											}
										}
										return 0;
									},
									player(player, target) {
										if (target.hasSkill('jueqing')) return -10;
										var mn = 1;
										var hs = player.getCards('h');
										for (var i = 0; i < hs.length; i++) {
											mn = Math.max(mn, hs[i].number);
										}
										if (mn <= 11 && player.hp < 2) return -20;
										var max = player.maxHp - hs.length;
										for (var i = 0; i < game.players.length; i++) {
											if (get.attitude(player, game.players[i]) > 2) {
												max = Math.max(Math.min(5, game.players[i].hp) - game.players[i].countCards('h'), max);
											}
										}
										switch (max) {
											case 0:
												return mn == 13 ? 0 : -20;
											case 1:
												return mn >= 12 ? 0 : -15;
											case 2:
												return 0;
											case 3:
												return 1;
											default:
												return max;
										}
									},
								},
								expose: 0.2,
							},
						},
						xunxunpi: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseDrawBefore',
							},
							forced: true,
							content() {
								'step 0';
								event.cards = get.cards(4);
								player.chooseCardButton(event.cards, 2, '选择获得两张牌').set('ai', ai.get.buttonValue);
								('step 1');
								if (result.bool) {
									trigger.untrigger();
									trigger.finish();
									var choice = [];
									for (var i = 0; i < result.links.length; i++) {
										choice.push(result.links[i]);
										cards.remove(result.links[i]);
									}
									for (var i = 0; i < cards.length; i++) {
										ui.cardPile.appendChild(cards[i]);
									}
									player.gain(choice, 'draw');
									game.log(player, '获得了两张牌');
								}
							},
						},
						wangxipi: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'damageEnd',
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.num && event.source && event.player && event.player.isAlive() && event.source.isAlive() && event.source != event.player;
							},
							check(event, player) {
								if (event.player == player) return get.attitude(player, event.source) > -3;
								return get.attitude(player, event.player) > -3;
							},
							content() {
								'step 0';
								game.asyncDraw([trigger.player, trigger.source], trigger.num);
								('step 1');
							},
						},
						xunwang: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							check(card) {
								var player = _status.event.player;
								var suit = card.suit;
								if (suit == 'heart') {
									for (var i = 0; i < game.players.length; i++) {
										if (game.players[i].hp == 1 && get.attitude(player, game.players[i]) > 0) {
											return 8 - get.value(card);
										}
									}
								} else if (suit == 'spade') {
									return 7 - get.value(card);
								}
								return 6 - get.value(card);
							},
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							filterTarget(card, player, target) {
								return !target.hasSkill('guangshu_heart') && !target.hasSkill('guangshu_spade') && !target.hasSkill('guangshu_club') && !target.hasSkill('guangshu_diamond');
							},
							filterCard: true,
							position: 'he',
							content() {
								target.addSkill('guangshu_' + cards[0].suit);
							},
							ai: {
								expose: 0.2,
								threaten: 1.6,
								order: 5,
								result: {
									target(player, target) {
										if (!ui.selected.cards.length) return 0;
										switch (ui.selected.cards[0].suit) {
											case 'heart':
												if (target.hp == 1) return 1;
												return 0.1;
											case 'diamond':
												return 1 + Math.sqrt(target.countCards('h'));
											case 'club':
												return -target.countCards('h') - Math.sqrt(target.countCards('h', 'sha'));
											case 'spade':
												return get.damageEffect(target, player, target, 'thunder');
											default:
												return 0;
										}
									},
								},
							},
						},
						langxipi: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('langxipi'), function (card, player, target) {
										return target.hp <= player.hp && target != player;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.damageEffect(target, player, player);
									});
								('step 1');
								if (result.bool && result.targets && result.targets.length) {
									var num = [1, 2, 0, 1, 1, 2].randomGet(); //QQQ
									player.line(result.targets[0], 'green');
									result.targets[0].damage(num);
								}
							},
						},
						langxipf: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('langxipf'), function (card, player, target) {
										return target.hp <= player.hp && target != player;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.damageEffect(target, player, player);
									});
								('step 1');
								if (result.bool && result.targets && result.targets.length) {
									var num = [1, 2, 2, 1, 1, 2].randomGet(); //QQQ
									player.line(result.targets[0], 'green');
									result.targets[0].damage(num);
								}
							},
						},
						yisuanpi: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								source: 'damageAfter',
							},
							filter(event, player) {
								return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0]) == 'd';
							},
							usable: 1,
							prompt2(event) {
								return '进行一次判定,若结果为黑色,你获得' + get.translation(event.cards);
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return get.color(card) == 'black' ? 1 : -1;
								});
								('step 1');
								if (result.color == 'black') {
									player.gain(trigger.cards);
									player.$gain2(trigger.cards);
								}
							},
						},
						tushepi: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								if (get.type(event.card) == 'equip') return false;
								return event.targets.length && !player.countCards('h', { type: 'basic' });
							},
							content() {
								player.draw(trigger.targets.length);
							},
							ai: {
								presha: true,
								pretao: true,
								threaten: 1.8,
							},
						},
						limupi: {
							mod: {
								targetInRange(card, player, target) {
									if (player.countCards('j') && get.distance(player, target, 'attack') <= 1) {
										return true;
									}
								},
								cardUsable(card, player, num) {
									if (typeof num == 'number' && player.countCards('j')) {
										return Infinity;
									}
								},
							},
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							discard: false,
							filter(event, player) {
								if (player.hasJudge('lebu')) return false;
								return player.countCards('he', { suit: 'diamond' }) > 0;
							},
							prepare: 'throw',
							position: 'he',
							filterCard: {
								suit: 'diamond',
							},
							selectTarget: -1,
							filterTarget(card, player, target) {
								return player == target;
							},
							check(card) {
								var player = _status.event.player;
								if (player.countCards('h', 'sha') < 2) {
									if (
										player.countCards('h', function (cardx) {
											return cardx.name == 'shan' && cardx.suit == 'heart';
										}) > 0
									)
										return 0;
									if (
										player.countCards('h', function (cardx) {
											return cardx.name == 'shan' && cardx.suit == 'diamond';
										}) > 0
									)
										return 0;
									var damaged = player.maxHp - player.hp - 1;
									if (
										player.countCards('h', function (cardx) {
											return cardx.name == 'tao' && cardx.suit == 'diamond';
										}) > damaged
									)
										return 0;
								}
								if (card.name == 'shan') return 15;
								if (card.name == 'tao') return 10;
								return 9 - get.value(card);
							},
							content() {
								var next = player.useCard({ name: 'lebu' }, target, cards);
								next.animate = false;
								next.audio = false;
								player.recover();
							},
							ai: {
								result: {
									target: 1,
								},
								order: 9,
							},
						},
						骨镇: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('骨镇'), function (card, player, target) {
									return target != player;
								}).ai = function (target) {
									if (player.countCards('h') > target.countCards('h')) return get.attitude(player, target);
									if (player.countCards('h') < target.countCards('h')) return -get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target);
									trigger.untrigger();
									trigger.finish();
									player.storage.骨镇1 = target;
									target.storage.骨镇 = player;
								} else {
									event.finish();
								}
							},
						},
						_骨镇: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: ['phaseAfter', 'phaseBegin'],
							},
							forced: true,
							popup: false,
							filter(event, player) {
								return player.storage.骨镇 != undefined || player.storage.骨镇1 != undefined;
							},
							content() {
								if (player.storage.骨镇 != undefined) {
									var pl = player.storage.骨镇;
									var num = pl.countCards('h');
									var num1 = 0;
									if (num - player.countCards('h') > 0) num1 = num - player.countCards('h');
									if (num - player.countCards('h') < 0) num1 = num - player.countCards('h');
									if (num1 < 0) player.chooseToDiscard('h', -num1, true);
									if (num1 > 0) player.draw(num1);
									delete player.storage.骨镇;
								}
								if (player.storage.骨镇1 != undefined) {
									var pl = player.storage.骨镇1;
									var num = pl.countCards('h');
									var num1 = 0;
									if (player.countCards('h') - num > 0) num1 = player.countCards('h') - num;
									if (player.countCards('h') - num < 0) num1 = player.countCards('h') - num;
									if (num1 < 0) pl.chooseToDiscard('h', -num1, true);
									if (num1 > 0) pl.draw(num1);
									delete player.storage.骨镇1;
								}
							},
						},
						蒺藜: {
							trigger: {
								player: ['useCard', 'respondAfter'],
							},
							forced: true,
							filter(event, player) {
								return event.card && event.cards.length;
							},
							content() {
								player.storage.smk_jili++;
								var num = player.getAttackRange();
								if (player.storage.smk_jili == num) player.draw(num * 2);
							},
							group: 'smk_jili2',
							ai: {
								threaten: 1.3,
							},
						},
						立牧: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							forced: true,
							filter(event, player) {
								return player.isAlive();
							},
							content() {
								player.chooseDrawRecover(true);
								player.addTempSkill('limug');
							},
						},
						limug: {
							mod: {
								cardUsable(card) {
									if (get.info(card) && get.info(card).forceUsable) return;
									return Infinity;
								},
								targetInRange() {
									return true;
								},
							},
						},
						图射: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return event.targets;
							},
							content() {
								player.draw(trigger.targets.length);
							},
							ai: {
								presha: true,
								pretao: true,
								threaten: 1.8,
							},
						},
						凤魄: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: ['shaBegin', 'juedouBegin'],
							},
							filter(event, player) {
								return event.target && event.targets && event.targets.length == 1;
							},
							forced: true,
							content() {
								'step 0';
								player.draw(5);
								player.chooseControl('draw_card', '加伤害', 'cancel2').set('prompt', get.prompt('凤魄'));
								('step 1');
								if (result.control && result.control != 'cancel2') {
									var nd = trigger.target.countCards('he', { color: 'red' });
									if (result.control == 'draw_card') {
										player.draw(nd);
									} else {
										player.addTempSkill('凤魄2', 'useCardToAfter');
										player.storage.凤魄 = nd;
									}
								}
							},
						},
						凤魄2: {
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
							},
							forced: true,
							content() {
								if (typeof player.storage.凤魄 == 'number') {
									trigger.num += player.storage.凤魄;
								}
							},
						},
						ji_mashu: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 4;
								},
							},
						},
						恩怨: {
							audio: 'ext:洪荒ol/audio:2',
							group: ['reenyuan1', 'reenyuan2'],
						},
						reenyuan1: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'gainEnd',
							},
							filter(event, player) {
								if (!event.source || event.source == player) return false;
								return true;
							},
							check(event, player) {
								return get.attitude(player, event.source) > 0;
							},
							logTarget: 'source',
							prompt2: '令该角色摸一张牌',
							content() {
								trigger.source.draw();
							},
						},
						reenyuan2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							logTarget: 'source',
							filter(event, player) {
								return event.source && event.source != player && event.source.isAlive();
							},
							check(event, player) {
								var att = get.attitude(player, event.source);
								var num = event.source.countCards('h');
								if (att <= 0) return true;
								if (num > 2) return true;
								if (num > 0) return att < 4;
								return false;
							},
							prompt2: '令该角色选择一项:①失去1点体力.②交给你一张手牌.若此牌不为♥️️,则你摸一张牌',
							content() {
								'step 0';
								event.count = Math.min(trigger.num, 9);
								('step 1');
								var target = trigger.source;
								event.count--;
								if (!target.countCards('h')) event._result = { bool: false };
								else
									target.chooseCard('h', '恩怨:将一张手牌交给' + get.translation(player) + ',或失去1点体力').set('ai', function (card) {
										if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
											if (card.suit != 'heart') return 15 - get.value(card);
											return 11 - get.value(card);
										} else {
											var num = 12 - _status.event.player.hp * 2;
											if (card.suit != 'heart') num -= 2;
											return num - get.value(card);
										}
									});
								('step 2');
								var target = trigger.source;
								if (result.bool) {
									var card = result.cards[0];
									event.card = card;
									player.gain(card, target, 'giveAuto');
								} else {
									target.loseHp();
									event.goto(4);
								}
								('step 3');
								if (card.suit != 'heart') player.draw();
								('step 4');
								var target = trigger.source;
								if (target.isAlive() && event.count > 0)
									player.chooseBool(get.prompt('恩怨', target), '令该角色选择一项:①失去1点体力.②交给你一张手牌.若此牌不为♥️️,则你摸一张牌').set('ai', function () {
										var evt = _status.event.getTrigger();
										return lib.skill.reenyuan2.check(evt.player, evt.source);
									});
								else event.finish();
								('step 5');
								if (result.bool) {
									event.goto(1);
								}
							},
						},
						眩惑: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('眩惑'), function (card, player, target) {
										return player != target;
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (att > 0) {
											if (target.countCards('h') < target.hp) att += 2;
											return att - target.countCards('h') / 3;
										} else {
											return -1;
										}
									});
								('step 1');
								if (result.bool) {
									trigger.untrigger();
									trigger.finish();
									event.target = result.targets[0];
									event.target.draw(3);
									player
										.chooseTarget('选择出杀的目标', true, function (card, player, target) {
											return _status.event.target.canUse('sha', target) && player != target;
										})
										.set('ai', function (target) {
											return ai.get.effect(target, { name: 'sha' }, _status.event.target, _status.event.player);
										})
										.set('target', event.target);
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool && result.targets.length) {
									game.log(player, '指定的出杀目标为', result.targets);
									event.target.line(result.targets);
									event.target.chooseToUse('对' + get.translation(result.targets) + '使用一张杀,或令' + get.translation(player) + '获得你的两张牌', { name: 'sha' }, result.targets[0], -1);
								} else {
									event.bool = true;
								}
								('step 3');
								if (event.bool || result.bool == false) {
									player.gainPlayerCard('he', event.target, Math.min(2, event.target.countCards('he')), true);
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						贿生: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'damageBefore',
							},
							content() {
								'step 0';
								trigger.cancel();
								//player.gain(2,target);
								('step 1');
								player
									.chooseTarget(get.prompt('贿生'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									//var X = player.maxHp;
									result.targets[0].chooseToDiscard('he', true, 1);
								}
							},
							ai: {
								nofire: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'fireDamage')) return 0;
									},
								},
							},
						},
						寝黄皓情: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt2('寝黄皓情'), [1, Infinity]).set('ai', function (target) {
									var he = target.countCards('he');
									if (get.attitude(_status.event.player, target) > 0) {
										if (he == 0) return 1;
										if (target.countCards('h') > get.zhu(player).countCards('h')) return 1;
									} else {
										if (he > 0) return 1;
									}
									return 0;
								});
								('step 1');
								if (result.bool) {
									event.targets = result.targets.slice(0).sortBySeat();
									event.list = event.targets.slice(0);
									player.draw(event.targets.length);
								} else {
									event.finish();
								}
								('step 2');
								if (event.targets.length) {
									var target = event.targets.shift();
									if (target.countCards('he')) {
										player.discardPlayerCard(target, 'he', true);
									}
									event.redo();
								}
							},
							ai: {
								threaten: 1.2,
							},
						},
						凶镬: {
							group: ['凶镬_damage', '凶镬_begin'],
							subSkill: {
								begin: {
									silent: true,
									popup: false,
									forced: true,
									trigger: {
										global: 'phaseUseBegin',
									},
									filter(event, player) {
										return event.player.hasSkill('xrxionghuo') && event.player != player;
									},
									content() {
										'step 0';
										if (trigger.player.storage.xrxionghuo > 1) trigger.player.storage.xrxionghuo--;
										else {
											delete trigger.player.storage.xrxionghuo;
											trigger.player.removeSkill('xrxionghuo');
										}
										('step 1');
										player.line(trigger.player, 'fire');
										trigger.player.damage('fire');
										trigger.player.addTempSkill('xrxionghuo_disable', 'phaseAfter');
										event.goto(2);
										('step 2');
										player.line(trigger.player, 'water');
										trigger.player.loseHp();
										trigger.player.addTempSkill('xrxionghuo_low', 'phaseAfter');
										event.goto(3);
										('step 3');
										player.line(trigger.player, 'green');
										var card1 = trigger.player.getCards('h').randomGet();
										var card2 = trigger.player.getCards('e').randomGet();
										var list = [];
										if (card1) list.push(card1);
										if (card2) list.push(card2);
										if (list.length) {
											trigger.player.$giveAuto(list, player);
											player.gain(list);
										}
									},
								},
								damage: {
									audio: '凶镬',
									forced: true,
									trigger: {
										source: 'damageBegin',
									},
									filter(event, player) {
										return event.player.hasSkill('xrxionghuo');
									},
									content() {
										trigger.num++;
									},
								},
							},
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: null,
							init(player) {
								if (player.storage.凶镬 == undefined) player.storage.凶镬 = 10;
							},
							mark: true,
							marktext: '凶',
							intro: {
								content: 'mark',
							},
							filter(event, player) {
								return player.storage.凶镬 > 0;
							},
							filterTarget(card, player, target) {
								if (target.storage.xrxionghuo != undefined && target.storage.xrxionghuo > 0) return false;
								return player != target && player.storage.凶镬 > 0;
							},
							content() {
								if (target.storage.xrxionghuo == undefined || target.storage.xrxionghuo == 0) {
									target.addSkill('xrxionghuo');
									target.storage.xrxionghuo = 0;
								}
								target.storage.xrxionghuo++;
								player.storage.凶镬--;
								if (player.storage.凶镬 == 0) player.unmarkSkill('凶镬');
							},
							ai: {
								order: 11,
								result: {
									target(player, target) {
										return Math.min(-(1 + player.storage.凶镬 - target.hp), 0);
									},
								},
								threaten: 1.1,
							},
						},
						xrxionghuo: {
							marktext: '凶',
							mark: true,
							intro: {
								content: 'mark',
							},
						},
						xrxionghuo_disable: {
							mod: {
								playerEnabled(card, player, target) {
									if (target.hasSkill('凶镬') && card.name == 'sha') return false;
								},
							},
							mark: true,
							marktext: '禁',
							intro: {
								content: '本回合内不能对<徐荣>使用<杀>',
							},
						},
						xrxionghuo_low: {
							mod: {
								maxHandcard(player, num) {
									return num - 1;
								},
							},
							marktext: '减',
							mark: true,
							intro: {
								content: '本回合内手牌上限-1',
							},
						},
						杀绝: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'dying',
							},
							filter(event, player) {
								return event.player.hp < 0 && event.player != player;
							},
							forced: true,
							_priority: 7,
							content() {
								if (trigger.parent.name == 'damage' && get.itemtype(trigger.parent.cards) == 'cards' && get.position(trigger.parent.cards[0]) == 'd') {
									player.gain(trigger.parent.cards, 'gain2');
								}
								player.storage.凶镬++;
								player.markSkill('凶镬');
							},
						},
						藜蒺: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: ['useCard', 'respondAfter'],
							},
							forced: true,
							filter(event, player) {
								return event.card && event.cards.length;
							},
							content() {
								var num = player.getAttackRange();
								player.draw(num);
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return (num += player.getAttackRange());
								},
							},
							ai: {
								threaten: 1.3,
							},
						},
						烈弓黄忠: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: ['phaseEnd', 'phaseBegin'],
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToDiscard('h', true);
								player
									.chooseTarget(get.prompt('烈弓黄忠'), function (card, player, target) {
										return lib.filter.targetEnabled({ name: 'sha' }, player, target);
									})
									.set('ai', function (target) {
										return get.effect(target, { name: 'sha' }, _status.event.player);
									});
								('step 1');
								if (result.bool) {
									player.draw(2);
									player.useCard({ name: 'sha' }, result.targets, false);
								}
							},
							ai: {
								threaten(player, target) {
									return 1.6;
								},
							},
							group: ['烈弓黄忠_1', '烈弓黄忠_2', '烈弓黄忠_3'],
							subSkill: {
								1: {
									audio: 'ext:洪荒ol/audio:2',
									trigger: {
										source: 'damageEnd',
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha' && event.notLink();
									},
									content() {
										var hjk = ['sha'];
										player.gain(game.createCard(hjk.randomGet()));
										player.$draw();
										player.chooseToUse({ name: 'sha' }, '穿杨:是否使用一张杀？');
									},
								},
								2: {
									audio: 'ext:洪荒ol/audio:2',
									trigger: {
										source: 'damageBegin',
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha' && event.notLink();
									},
									content() {
										trigger.num++;
									},
								},
								3: {
									trigger: {
										global: 'recoverBegin',
									},
									forced: true,
									audio: 'ext:洪荒ol/audio:2',
									content() {
										player.draw();
									},
								},
							},
						},
						驱徙: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseUseEnd' },
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								player.chooseTarget(2, get.prompt('驱徙'), '选择两名角色.令这一名角色获得另一名角色的一张牌并获得一枚<丰>,另一名角色获得一枚<歉>').set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.skip('phaseDiscard');
									event.gainner = result.targets[0];
									event.giver = result.targets[1];
									result.targets[1].turnOver();
									result.targets[0].addSkill('驱徙gain');
									result.targets[1].addSkill('驱徙lose');
								} else event.finish();
								('step 2');
								event.gainner.gainPlayerCard(event.giver, true, 'he');
							},
						},
						驱徙gain: {
							trigger: { player: 'phaseDrawBegin' },
							forced: true,
							content() {
								trigger.num++;
							},
							ai: {
								threaten: 1.5,
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.maxHp;
								},
							},
							mark: true,
							marktext: '丰',
							intro: {
								name: '驱徙(丰)',
								name2: '丰',
								content: 'mark',
							},
						},
						驱徙lose: {
							trigger: { player: 'phaseDrawBegin' },
							forced: true,
							content() {
								trigger.num--;
							},
							ai: {
								threaten: 1.5,
							},
							mod: {
								maxHandcard(player, num) {
									return num - player.maxHp;
								},
							},
							mark: true,
							marktext: '歉',
							intro: {
								name: '驱徙(歉)',
								name2: '歉',
								content: 'mark',
							},
						},
						避凶: {
							trigger: { global: 'loseAfter' },
							usable: 1,
							filter(event, player) {
								return true;
							},
							content() {
								player.addTempSkill('避凶2', { player: 'phaseBegin' });
								player.addSkill('避凶3');
							},
						},
						避凶3: {
							trigger: {
								player: ['phaseEnd', 'phaseBegin'],
							},
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('避凶3'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(2, result.targets[0], 'he', true);
								}
							},
						},
						避凶2: {
							mod: {
								targetEnabled(card, player, target, now) {
									return false;
								},
							},
							intro: { content: '不能成为牌的目标' },
						},
						奇策荀攸: {
							enable: 'phaseUse',
							usable: 2,
							audio: 'ext:洪荒ol/audio:2',
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							chooseButton: {
								dialog() {
									var list = ['taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
									for (var i = 0; i < list.length; i++) {
										list[i] = ['锦囊', '', list[i]];
									}
									return ui.create.dialog([list, 'vcard']);
								},
								filter(button, player) {
									return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									var player = _status.event.player;
									var recover = 0,
										lose = 1,
										players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if (!players[i].isOut()) {
											if (players[i].hp < players[i].maxHp) {
												if (get.attitude(player, players[i]) > 0) {
													if (players[i].hp < 2) {
														lose--;
														recover += 0.5;
													}
													lose--;
													recover++;
												} else if (get.attitude(player, players[i]) < 0) {
													if (players[i].hp < 2) {
														lose++;
														recover -= 0.5;
													}
													lose++;
													recover--;
												}
											} else {
												if (get.attitude(player, players[i]) > 0) {
													lose--;
												} else if (get.attitude(player, players[i]) < 0) {
													lose++;
												}
											}
										}
									}
									if (lose > recover && lose > 0) return button.link[2] == 'nanman' ? 1 : -1;
									if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
									return button.link[2] == 'wuzhong' ? 1 : -1;
								},
								backup(links, player) {
									return {
										filterCard: true,
										selectCard: [1, Infinity],
										audio: 'ext:洪荒ol/audio:2',
										popname: true,
										viewAs: { name: links[0][2] },
									};
								},
								prompt(links, player) {
									return '将任意张手牌当作' + get.translation(links[0][2]) + '使用';
								},
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										var num = 0;
										var cards = player.getCards('h');
										if (cards.length >= 3 && player.hp >= 3) return 0;
										for (var i = 0; i < cards.length; i++) {
											num += Math.max(0, get.value(cards[i], player, 'raw'));
										}
										num /= cards.length;
										num *= Math.min(cards.length, player.hp);
										return 12 - num;
									},
								},
								threaten: 1.6,
							},
						},
						智愚荀攸: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'damageEnd' },
							content() {
								'step 0';
								player.draw();
								('step 1');
								player.showHandcards();
								('step 2');
								if (!trigger.source) return;
								trigger.source.chooseToDiscard(true);
							},
							ai: {
								maixie_defend: true,
								threaten: 0.9,
							},
						},
						攻嗣: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							forced: true,
							init(player) {
								player.storage.攻嗣 = [];
							},
							content() {
								'step 0';
								player.chooseTarget(
									get.prompt('攻嗣'),
									[1, 4],
									function (card, player, target) {
										return target.countCards('he') > 0;
									},
									function (target) {
										return -get.attitude(_status.event.player, target);
									}
								);
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 2');
								if (event.targets.length) {
									var target = event.targets.shift();
									event.current = target;
									player.choosePlayerCard(target, true);
								} else {
									event.finish();
								}
								('step 3');
								if (result.bool) {
									player.storage.攻嗣 = player.storage.攻嗣.concat(result.links);
									player.markSkill('攻嗣');
									event.current.lose(result.links, ui.special);
									event.current.$give(result.links, player);
									event.goto(2);
								}
							},
							intro: {
								content: 'cards',
								onunmark(storage, player) {
									if (storage && storage.length) {
										for (var i = 0; i < storage.length; i++) {
											storage[i].discard();
										}
										player.$throw(storage);
										player.storage.攻嗣.length = 0;
									}
								},
							},
							ai: {
								threaten: 2,
							},
							global: '攻嗣2',
						},
						攻嗣2: {
							enable: 'phaseUse',
							audio: 'ext:洪荒ol/audio:2',
							forceaudio: true,
							filter(event, player) {
								var players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									if (players[i].storage.攻嗣) {
										return players[i].storage.攻嗣.length > 1 && player.canUse('tao', players[i], true, true);
									}
								}
								return false;
							},
							forced: true,
							delay: 0,
							content() {
								'step 0';
								var targets = game.filterPlayer(function (current) {
									if (current.storage.攻嗣) {
										return current.storage.攻嗣.length > 1 && player.canUse('tao', current, true, true);
									}
									return false;
								});
								if (targets.length == 1) {
									event.target = targets[0];
									event.goto(2);
								} else if (targets.length) {
									player
										.chooseTarget(true, '选择【攻嗣】的目标', function (card, player, target) {
											return _status.event.list.includes(target);
										})
										.set('list', targets)
										.set('ai', function (target) {
											var player = _status.event.player;
											return get.effect(target, { name: 'tao' }, player, player);
										});
								} else {
									event.finish();
								}
								('step 1');
								if (result.bool && result.targets.length) {
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								if (event.target) {
									if (event.target.storage.攻嗣.length == 2) {
										event.directresult = event.target.storage.攻嗣.slice(0);
									} else {
										player.chooseCardButton('移去两张<逆>', 2, event.target.storage.攻嗣, true);
									}
								} else {
									event.finish();
								}
								('step 3');
								if (event.directresult || result.bool) {
									var links = event.directresult || result.links;
									for (var i = 0; i < links.length; i++) {
										event.target.storage.攻嗣.remove(links[i]);
									}
									if (!event.target.storage.攻嗣.length) {
										event.target.unmarkSkill('攻嗣');
									} else {
										event.target.markSkill('攻嗣');
									}
									event.target.$throw(links);
									game.log(event.target, '被移去了', links);
									for (var i = 0; i < links.length; i++) {
										links[i].discard();
									}
									player.useCard({ name: 'tao' }, event.target);
								}
							},
							ai: {
								order() {
									return get.order({ name: 'sha' }) + 0.05;
								},
								result: {
									player(player) {
										var target = game.findPlayer(function (current) {
											return current.storage.攻嗣;
										});
										if (target) {
											return get.effect(target, { name: 'sha' }, player, player);
										}
									},
								},
							},
						},
						司敌: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'phaseUseBegin' },
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								return true;
							},
							content() {
								'step 0';
								player.chooseToDiscard(get.prompt('司敌', trigger.player), 'he', function (card) {
									return true;
								});
								('step 1');
								if (result.bool) {
									trigger.player.addSkill('司敌2');
									trigger.player.storage.司敌4 = player;
								}
							},
							ai: {
								threaten: 1.5,
							},
						},
						司敌2: {
							mark: true,
							group: ['司敌2_sha', '司敌2_end'],
							subSkill: {
								sha: {
									trigger: { player: 'shaBegin' },
									forced: true,
									popup: false,
									content() {
										player.storage.司敌3 = true;
									},
								},
								end: {
									trigger: { player: 'phaseUseAfter' },
									forced: true,
									popup: false,
									audio: 'ext:洪荒ol/audio:2',
									content() {
										if (!player.storage.司敌3 && player.storage.司敌4.isAlive()) {
											player.storage.司敌4.useCard({ name: 'sha' }, player);
										}
										delete player.storage.司敌2;
										delete player.storage.司敌3;
										delete player.storage.司敌4;
										player.removeSkill('司敌2');
									},
								},
							},
							mod: {
								cardEnabled(card, player) {
									return false;
								},
								cardUsable(card, player) {
									return false;
								},
								cardRespondable(card, player) {
									return false;
								},
								cardSavable(card, player) {
									return false;
								},
							},
							intro: {
								content: '不能使用或打出$的牌',
							},
						},
						论驱: {
							enable: 'phaseUse',
							audio: 4,
							usable: 2,
							filter(event, player) {
								if (player.countCards('h') == 0) return false;
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].countCards('h')) return true;
								}
								return false;
							},
							filterTarget(card, player, target) {
								return target.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToCompare(target);
								('step 1');
								if (result.bool) {
									if (
										game.hasPlayer(function (player) {
											return true;
										})
									) {
										player
											.chooseTarget(function (card, player, target) {
												var source = _status.event.source;
												return true;
											}, true)
											.set('ai', function (target) {
												return get.damageEffect(target, _status.event.source, player);
											})
											.set('source', target);
									} else {
										event.finish();
									}
								} else {
									player.damage(target);
									event.finish();
								}
								('step 2');
								if (result.bool && result.targets && result.targets.length) {
									target.line(result.targets[0], 'green');
									result.targets[0].damage(target);
								}
							},
							ai: {
								order: 0.5,
								result: {
									target(player, target) {
										var att = get.attitude(player, target);
										var oc = target.countCards('h') == 1;
										if (att > 0 && oc) return 0;
										for (var i = 0; i < game.players.length; i++) {
											if (game.players[i] != target && game.players[i] != player && get.distance(target, game.players[i], 'attack') <= 1) {
												if (get.damageEffect(game.players[i], target, player) > 0) {
													return att > 0 ? att / 2 : att - (oc ? 5 : 0);
												}
											}
										}
										return 0;
									},
									player(player, target) {
										if (target.hasSkill('jueqing')) return -10;
										var mn = 1;
										var hs = player.getCards('h');
										for (var i = 0; i < hs.length; i++) {
											mn = Math.max(mn, hs[i].number);
										}
										if (mn <= 11 && player.hp < 2) return -20;
										var max = player.maxHp - hs.length;
										for (var i = 0; i < game.players.length; i++) {
											if (get.attitude(player, game.players[i]) > 2) {
												max = Math.max(Math.min(5, game.players[i].hp) - game.players[i].countCards('h'), max);
											}
										}
										switch (max) {
											case 0:
												return mn == 13 ? 0 : -20;
											case 1:
												return mn >= 12 ? 0 : -15;
											case 2:
												return 0;
											case 3:
												return 1;
											default:
												return max;
										}
									},
								},
								expose: 0.2,
							},
						},
						命贞: {
							trigger: {
								player: 'damageEnd',
							},
							audio: 'ext:洪荒ol/audio:2',
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('命贞'), [1, trigger.num], function (card, player, target) {
										return target.countCards('h') >= 0;
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (att > 2) {
											return Math.min(5, target.maxHp);
										}
										return att / 3;
									});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].draw(result.targets[i].maxHp);
									}
								}
							},
							ai: {
								maixie: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage') && target.hp > 1) {
											if (player.hasSkill('jueqing')) return [1, -2];
											var max = 0;
											for (var i = 0; i < game.players.length; i++) {
												if (get.attitude(target, game.players[i]) > 0) {
													max = Math.max(Math.min(5, game.players[i].hp), max);
												}
											}
											switch (max) {
												case 0:
													return 2;
												case 1:
													return 1.5;
												case 2:
													return [1, 2];
												default:
													return [0, max];
											}
										}
										if ((card.name == 'tao' || card.name == 'caoyao') && target.hp > 1 && target.countCards('h') <= target.hp) return [0, 0];
									},
								},
							},
						},
						引才: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 7;
								var fellow = game.addFellow(pos, 'xizhicai');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('忠臣');
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'guojia');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('忠臣');
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								//------------------------------------------------------------------
								var fellow2 = game.addFellow(pos, 'xunyou');
								fellow2.side = player.side;
								if (player.identity != 'zhu') fellow2.identity = player.identity;
								else fellow2.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow2._group = player.identity;
								fellow2.setIdentity('忠臣');
								fellow2.draw(fellow2.maxHp);
								fellow2.node.identity.dataset.color = fellow2.identity;
								//------------------------------------------------------------------
								var fellow3 = game.addFellow(pos, 'chenqun');
								fellow3.side = player.side;
								if (player.identity != 'zhu') fellow3.identity = player.identity;
								else fellow3.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow3._group = player.identity;
								fellow3.setIdentity('忠臣');
								fellow3.draw(fellow3.maxHp);
								fellow3.node.identity.dataset.color = fellow3.identity;
								//------------------------------------------------------------------
								var fellow4 = game.addFellow(pos, 'zhongyao');
								fellow4.side = player.side;
								if (player.identity != 'zhu') fellow4.identity = player.identity;
								else fellow4.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow4._group = player.identity;
								fellow4.setIdentity('忠臣');
								fellow4.draw(fellow4.maxHp);
								fellow4.node.identity.dataset.color = fellow4.identity;
								//------------------------------------------------------------------
								var fellow5 = game.addFellow(pos, 'duji');
								fellow5.side = player.side;
								if (player.identity != 'zhu') fellow5.identity = player.identity;
								else fellow5.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow5._group = player.identity;
								fellow5.setIdentity('忠臣');
								fellow5.draw(fellow5.maxHp);
								fellow5.node.identity.dataset.color = fellow5.identity;
								//------------------------------------------------------------------
								var fellow6 = game.addFellow(pos, 'duxi杜袭');
								fellow6.side = player.side;
								if (player.identity != 'zhu') fellow6.identity = player.identity;
								else fellow6.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow6._group = player.identity;
								fellow6.setIdentity('忠臣');
								fellow6.draw(fellow6.maxHp);
								fellow6.node.identity.dataset.color = fellow6.identity;
								('step 1');
								player.removeSkill('引才');
							},
						},
						望归: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: ['damageEnd', 'recoverEnd'] },
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('望归')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw();
									player.draw();
								}
							},
						},
						忘归: {
							audio: 'ext:洪荒ol/audio:2',
							usable: 1,
							trigger: { source: 'damageAfter' },
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('忘归')).ai = function (target) {
									return get.damageEffect(target, player, player, 'thunder') + 0.1;
								};
								('step 1');
								if (result.bool) {
									trigger.player.line(result.targets[0], 'green');
									result.targets[0].damage();
								}
							},
						},
						息兵2: {
							mod: {
								cardEnabled(card) {
									return false;
								},
							},
						},
						息兵: {
							audio: 'ext:洪荒ol/audio:2',
							usable: 1,
							trigger: {
								global: 'useCardEnd',
							},
							filter(event, player) {
								if (get.color(event.card) != 'red') return true;
								return false;
							},
							content() {
								trigger.player.chooseToDiscard('he', true, trigger.player.maxHp);
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								if (list.length) {
									var x = trigger.player.maxHp;
									player.line(list, 'green');
									game.asyncDraw(list, x);
								}
								trigger.player.addTempSkill('息兵2', 'phaseAfter');
							},
						},
						水洛: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: ['phaseEnd', 'phaseBegin'],
							},
							forced: true,
							content() {
								'step 0';
								if (event.cards == undefined) event.cards = [];
								player.judge(function (card) {
									if (get.color(card) == 'black') return 1.5;
									return -1.5;
								}, ui.special);
								('step 1');
								if (result.judge > 0) {
									event.cards.push(result.card);
									if (lib.config.autoskilllist.includes('水洛')) {
										player.chooseBool('是否再次发动【水洛】？');
									} else {
										event._result = { bool: true };
									}
								} else {
									event.cards = event.cards.filter((i) => get.position(i, true) == 's');
									player.gain(event.cards);
									if (event.cards.length) {
										player.$draw(event.cards);
									}
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.draw();
									event.goto(0);
								} else {
									player.gain(event.cards);
									if (event.cards.length) {
										player.$draw(event.cards);
									}
								}
							},
						},
						倾绝: {
							audio: 'ext:洪荒ol/audio:2',
							enable: ['chooseToRespond'],
							filterCard(card) {
								return true;
							},
							viewAs: { name: 'shan' },
							prompt: '将一张牌当闪打出',
							check() {
								return 1;
							},
							ai: {
								respondShan: true,
								skillTagFilter(player) {
									if (!player.countCards('h', { color: 'black' })) return false;
								},
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondShan') && current < 0) return 0.6;
									},
								},
							},
						},
						zjsb_仙卫: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: ['phaseEnd', 'phaseBegin'],
							},
							forced: true,
							content() {
								'step 0';
								if (event.cards == undefined) event.cards = [];
								player.judge(function (card) {
									if (get.color(card) == 'black') return 1.5;
									return -1.5;
								}, ui.special);
								('step 1');
								if (result.judge > 0) {
									event.cards.push(result.card);
									if (lib.config.autoskilllist.includes('zjsb_仙卫')) {
										player.chooseBool('是否再次发动【仙卫】？');
									} else {
										event._result = { bool: true };
									}
								} else {
									event.cards = event.cards.filter((i) => get.position(i, true) == 's');
									player.gain(event.cards);
									if (event.cards.length) {
										player.$draw(event.cards);
									}
									event.finish();
								}
								('step 2');
								if (result.bool) {
									event.goto(0);
								} else {
									player.gain(event.cards);
									if (event.cards.length) {
										player.$draw(event.cards);
									}
								}
							},
						},
						zjsb_灵侍: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: ['phaseEnd', 'phaseBegin'],
							},
							forced: true,
							content() {
								'step 0';
								if (event.cards == undefined) event.cards = [];
								player.judge(function (card) {
									if (get.color(card) == 'red') return 1.5;
									return -1.5;
								}, ui.special);
								('step 1');
								if (result.judge > 0) {
									event.cards.push(result.card);
									if (lib.config.autoskilllist.includes('zjsb_灵侍')) {
										player.chooseBool('是否再次发动【灵侍】？');
									} else {
										event._result = { bool: true };
									}
								} else {
									event.cards = event.cards.filter((i) => get.position(i, true) == 's');
									player.gain(event.cards);
									if (event.cards.length) {
										player.$draw(event.cards);
									}
									event.finish();
								}
								('step 2');
								if (result.bool) {
									event.goto(0);
								} else {
									player.gain(event.cards);
									if (event.cards.length) {
										player.$draw(event.cards);
									}
								}
							},
						},
						踏仙: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 2;
								var fellow = game.addFellow(pos, 'xueguanglingshi');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('忠臣');
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'youguxianwei');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('忠臣');
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								('step 1');
								player.removeSkill('踏仙');
							},
						},
						会宴: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseEnd' },
							forced: true,
							init() {
								lib.onwash.push(function () {
									delete _status.会宴_notao;
								});
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('会宴')).set('ai', function (target) {
									var player = _status.event.player;
									var att = get.attitude(player, target);
									if (att > 0) {
										if (_status.会宴_notao) {
											return 0;
										} else {
											if (target == player.storage.会宴) return 0;
											return (2 * att) / Math.sqrt(1 + target.hp);
										}
									} else {
										if (_status.会宴_notao) {
											if (target == player.storage.会宴) return -3 * att;
											return -att;
										} else {
											return 0;
										}
									}
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									var tao = get.cardPile2(function (card) {
										return card.suit == 'heart' && get.type(card) == 'basic';
									});
									if (tao) {
										target.gain(tao, 'gain2');
									} else {
										_status.会宴_notao = true;
									}
									if (target == player.storage.会宴) {
										target.recover();
									}
									player.storage.会宴 = target;
								} else {
									delete player.storage.会宴;
								}
								('step 2');
								player.chooseTarget(get.prompt('会宴'));
								('step 3');
								if (result.bool) {
									result.targets[0].loseHp();
								}
							},
							ai: {
								threaten: 1.5,
								expose: 0.2,
							},
						},
						延绵: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							forced: true,
							content() {
								'step 0';
								if (player.storage.延绵_choice == 'draw') {
									player.chooseControlList(get.prompt('延绵'), '摸牌阶段多摸3张牌', '使用红色牌可以多选择两个目标', function (event, player) {
										if (player.hp == 1 || player.countCards('h') <= 1) return 0;
										return 1;
									});
								} else if (player.storage.延绵_choice == 'red') {
									player.chooseControlList(get.prompt('延绵'), '摸牌阶段多摸4张牌', '使用红色牌可以多选择一个目标', function (event, player) {
										return 0;
									});
								} else {
									player.chooseControlList(get.prompt('延绵'), '摸牌阶段多摸3张牌', '使用红色牌可以多选择一个目标', function (event, player) {
										if (player.hp == 1 || player.countCards('h') < player.hp) return 0;
										return 1;
									});
								}
								('step 1');
								if (player.storage.延绵_choice == 'draw') {
									if (result.index == 0) {
										player.storage.延绵_draw = 1;
									} else if (result.index == 1) {
										player.storage.延绵_red = 2;
										delete player.storage.延绵_choice;
									}
								} else if (player.storage.延绵_choice == 'red') {
									if (result.index == 0) {
										player.storage.延绵_draw = 2;
										delete player.storage.延绵_choice;
									} else if (result.index == 1) {
										player.storage.延绵_red = 1;
									}
								} else {
									if (result.index == 0) {
										player.storage.延绵_draw = 1;
										player.storage.延绵_choice = 'draw';
									} else if (result.index == 1) {
										player.storage.延绵_red = 1;
										player.storage.延绵_choice = 'red';
									}
								}
								if (result.index == 0) {
									player.addTempSkill('延绵_draw');
								} else if (result.index == 1) {
									player.addTempSkill('延绵_red');
								}
							},
							ai: {
								threaten: 1.3,
							},
							subSkill: {
								draw: {
									trigger: { player: 'phaseDrawBegin' },
									forced: true,
									popup: false,
									filter(event, player) {
										return typeof player.storage.延绵_draw == 'number';
									},
									content() {
										trigger.num += player.storage.延绵_draw + 2;
									},
								},
								red: {
									trigger: { player: 'useCard' },
									forced: true,
									mark: true,
									intro: {
										content: '你使用红色牌可以多选择#个目标',
									},
									filter(event, player) {
										if (get.color(event.card) != 'red') return false;
										var info = get.info(event.card);
										if (info.allowMultiple == false) return false;
										if (event.targets && !info.multitarget) {
											if (
												game.hasPlayer(function (current) {
													return lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current) && !event.targets.includes(current);
												})
											) {
												return true;
											}
										}
										return false;
									},
									content() {
										'step 0';
										var prompt2 = '额外指定';
										if (player.storage.延绵_red == 2) {
											prompt2 += '至多两';
										} else {
											prompt2 += '一';
										}
										prompt2 += '名' + get.translation(trigger.card) + '的目标';
										player
											.chooseTarget([1, player.storage.延绵_red], get.prompt('延绵'), function (card, player, target) {
												var trigger = _status.event.getTrigger();
												var player = _status.event.player;
												if (trigger.targets.includes(target)) return false;
												return lib.filter.targetEnabled2(trigger.card, player, target) && lib.filter.targetInRange(trigger.card, player, target);
											})
											.set('prompt2', prompt2)
											.set('ai', function (target) {
												var trigger = _status.event.getTrigger();
												var player = _status.event.player;
												return get.effect(target, trigger.card, player, player);
											});
										('step 1');
										if (result.bool) {
											if (!event.isMine()) game.delayx();
											event.targets = result.targets;
										} else {
											event.finish();
										}
										('step 2');
										if (event.targets) {
											trigger.targets.addArray(event.targets);
										}
									},
								},
							},
						},
						乐宫: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 2;
								var fellow = game.addFellow(pos, 'shuangrendiexuebing双刃喋血兵');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('忠臣');
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'shuangrendiexuebing双刃喋血兵');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('忠臣');
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								('step 1');
								player.removeSkill('乐宫');
							},
						},
						反傲: {
							nobracket: true,
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.num > 0 && get.distance(player, event.player, 'attack') <= 1;
							},
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								player.recover(2);
								player.draw(2);
								('step 2');
								event.num--;
								if (event.num > 0) {
									player.chooseBool('是否继续发动<span style=\"color: red\">"反傲"</span>');
								} else event.finish();
								('step 3');
								if (result.bool) {
									event.goto(1);
								}
							},
						},
						谷谋: {
							nobracket: true,
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'phaseBegin',
							},
							content() {
								'step 0';
								var shas = player.getCards('h', 'sha');
								var num;
								if (player.hp >= 4 && shas.length >= 3) {
									num = 4;
								} else if (player.hp >= 3 && shas.length >= 2) {
									num = 3;
								} else {
									num = 2;
								}
								delete player.storage.谷谋1;
								player
									.chooseControl('一', '二', '三', '四', '五', '六', '七', '八', function () {
										return get.cnNumber(_status.event.goon, true);
									})
									.set('prompt', '失去任意点体力')
									.set('goon', num);
								('step 1');
								var num;
								switch (result.control) {
									case '一':
										num = 1;
										break;
									case '二':
										num = 2;
										break;
									case '三':
										num = 3;
										break;
									case '四':
										num = 4;
										break;
									case '五':
										num = 5;
										break;
									case '六':
										num = 6;
										break;
									case '七':
										num = 7;
										break;
									case '八':
										num = 8;
										break;
								}
								player.storage.谷谋1 = num;
								player.draw(num);
								trigger.player.loseHp(num);
								player.addTempSkill('谷谋_attack');
							},
							ai: {
								order: 10,
								result: {
									player(player) {
										if (player.hp == 1) return 0;
										var shas = player.getCards('h', 'sha');
										if (!shas.length) return 0;
										var card = shas[0];
										if (!lib.filter.cardEnabled(card, player)) return 0;
										if (lib.filter.cardUsable(card, player)) return 0;
										var mindist;
										if (player.hp >= 4) {
											mindist = 4;
										} else if (player.hp >= 3) {
											mindist = 3;
										} else {
											mindist = 2;
										}
										if (
											game.hasPlayer(function (current) {
												return current.hp <= mindist - 1 && get.distance(player, current, 'attack') <= mindist && player.canUse(card, current, false) && get.effect(current, card, player, player) > 0;
											})
										) {
											return 10;
										}
										return 1;
									},
								},
							},
							group: '谷谋_attack',
							subSkill: {
								attack: {
									onremove(player) {
										delete player.storage.谷谋1;
									},
									mod: {
										cardUsable(card, player, num) {
											if (typeof player.storage.谷谋1 == 'number' && card.name == 'sha') {
												return num + player.storage.谷谋1;
											}
										},
										globalFrom(from, to, distance) {
											if (typeof from.storage.谷谋1 == 'number') {
												return distance - from.storage.谷谋1;
											}
										},
									},
								},
							},
							group: 'wy谷1',
						},
						wy谷1: {
							nobracket: true,
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								var shas = player.getCards('h', 'sha');
								var num;
								if (player.hp >= 4 && shas.length >= 3) {
									num = 4;
								} else if (player.hp >= 3 && shas.length >= 2) {
									num = 3;
								} else {
									num = 2;
								}
								delete player.storage.wy谷11;
								player
									.chooseControl('一', '二', '三', '四', '五', '六', '七', '八', function () {
										return get.cnNumber(_status.event.goon, true);
									})
									.set('prompt', '失去任意点体力')
									.set('goon', num);
								('step 1');
								var num;
								switch (result.control) {
									case '一':
										num = 1;
										break;
									case '二':
										num = 2;
										break;
									case '三':
										num = 3;
										break;
									case '四':
										num = 4;
										break;
									case '五':
										num = 5;
										break;
									case '六':
										num = 6;
										break;
									case '七':
										num = 7;
										break;
									case '八':
										num = 8;
										break;
								}
								player.storage.wy谷11 = num;
								player.draw(num);
								player.loseHp(num);
								player.addTempSkill('wy谷1_attack');
							},
							ai: {
								order: 10,
								result: {
									player(player) {
										if (player.hp == 1) return 0;
										var shas = player.getCards('h', 'sha');
										if (!shas.length) return 0;
										var card = shas[0];
										if (!lib.filter.cardEnabled(card, player)) return 0;
										if (lib.filter.cardUsable(card, player)) return 0;
										var mindist;
										if (player.hp >= 4) {
											mindist = 4;
										} else if (player.hp >= 3) {
											mindist = 3;
										} else {
											mindist = 2;
										}
										if (
											game.hasPlayer(function (current) {
												return current.hp <= mindist - 1 && get.distance(player, current, 'attack') <= mindist && player.canUse(card, current, false) && get.effect(current, card, player, player) > 0;
											})
										) {
											return 10;
										}
										return 1;
									},
								},
							},
							group: 'wy谷1_attack',
							subSkill: {
								attack: {
									onremove(player) {
										delete player.storage.wy谷11;
									},
									mod: {
										cardUsable(card, player, num) {
											if (typeof player.storage.wy谷11 == 'number' && card.name == 'sha') {
												return num + player.storage.wy谷11;
											}
										},
										globalFrom(from, to, distance) {
											if (typeof from.storage.wy谷11 == 'number') {
												return distance - from.storage.wy谷11;
											}
										},
									},
								},
							},
						},
						驹骑cx: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - (from.maxHp - from.hp);
								},
								globalTo(from, to, distance) {
									return distance + (from.maxHp - from.hp);
								},
							},
						},
						虎豹cx: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && player.getEquips(1);
							},
							content() {
								'step 0';
								var num = 1;
								var info = get.info(player.getEquips(1));
								if (info && info.distance && info.distance.attackFrom) {
									num -= info.distance.attackFrom;
								}
								if (trigger.player.countCards('h') < num) {
									event.directfalse = true;
								} else {
									trigger.player.chooseToDiscard(num, '弃置' + get.cnNumber(num) + '张手牌,或令杀的伤害+X').set('ai', function (card) {
										var player = _status.event.player;
										if (player.hp == 1) {
											if (get.type(card) == 'basic') {
												return 8 - get.value(card);
											} else {
												return 10 - get.value(card);
											}
										} else {
											if (num > 2) {
												return 0;
											}
											return 8 - get.value(card);
										}
									});
								}
								('step 1');
								if (!event.directfalse && result.bool) {
									var e1 = player.getEquips(1);
									if (e1) {
										player.discard(e1);
									}
								} else {
									trigger.num += 3;
								}
							},
							group: '虎豹cx1',
						},
						虎豹cx1: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'shaBegin',
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && player.getEquips(1);
							},
							content() {
								'step 0';
								var num = 1;
								var info = get.info(player.getEquips(1));
								if (info && info.distance && info.distance.attackFrom) {
									num -= info.distance.attackFrom;
								}
								player.draw(num, '摸' + get.cnNumber(num) + '张手牌');
								('step 1');
								if (result.bool) {
									var e1 = player.getEquips(1);
									if (e1) {
										player.discard(e1);
									}
								}
							},
						},
						龙行lx: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								'step 0';
								player.gainMaxHp(4);
								var list = [];
								if (!player.hasSkill('龙锋lf')) {
									list.push('龙锋lf');
								}
								if (!player.hasSkill('斩棘zq')) {
									list.push('斩棘zq');
								}
								if (!player.hasSkill('崇义cy')) {
									list.push('崇义cy');
								}
								if (list.length) {
									player.chooseControl(list).set('prompt', '选择获得一项技能');
								}
								('step 1');
								player.addSkill(result.control);
								player.popup(result.control);
								game.log(player, '获得技能', '【' + get.translation(result.control) + '】');
							},
							ai: {
								threaten: 1.4,
							},
							group: '龙行lx_1',
							subSkill: {
								1: {
									trigger: {
										global: 'dieAfter',
									},
									forced: true,
									audio: 'ext:洪荒ol/audio:2',
									content() {
										'step 0';
										player.phase('nodelay');
										player.draw(3);
										player.recover(3);
										('step 1');
										player.getStat().card = {};
									},
								},
							},
						},
						龙锋lf: {
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							audio: 'ext:洪荒ol/audio:2',
							filter(event, player) {
								return event.player != player;
							},
							content() {
								'step 0';
								player.draw();
								player.phaseUse();
								('step 1');
								player.getStat().card = {};
								player.recover();
							},
						},
						斩棘zq: {
							trigger: {
								global: 'damageEnd',
							},
							forced: true,
							audio: 'ext:洪荒ol/audio:2',
							filter(event, player) {
								return event.player.isFriendsOf(player) && event.source != player;
							},
							content() {
								trigger.source.loseHp(2);
							},
						},
						崇义cy: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								source: 'damageBefore',
							},
							filterTarget(event) {
								return event.player.getCards('he').length;
							},
							content() {
								trigger.cancel();
								player.draw(2);
								trigger.player.discard(4, trigger.player.getCards('he'));
							},
						},
						承武cw: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 2;
								var fellow = game.addFellow(pos, 'nanzhongjuxiangbing南中拒象兵');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('忠臣');
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'nanzhongjuxiangbing南中拒象兵');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('忠臣');
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								('step 1');
								player.removeSkill('承武cw');
							},
						},
						战绝: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 5,
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'juedou' }, list);
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].draw(2);
									}
								}
							},
						},
						勤王: {
							group: ['勤王1', '勤王2'],
							subSkill: {
								ai: {},
							},
						},
						勤王1: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'chooseToRespondBegin' },
							filter(event, player) {
								if (event.responded) return false;
								if (event.filterCard && event.filterCard({ name: 'sha' }, player, event) == false) return false;
								return game.hasPlayer(function (current) {
									return current != player && current.isFriendsOf(player);
								});
							},
							forced: true,
							content() {
								'step 0';
								if (event.current == undefined) event.current = player.next;
								if (event.current == player) {
									event.finish();
								} else if (event.current.isFriendsOf(player)) {
									player.storage.jijianging = true;
									var next = event.current.chooseToRespond('是否替' + get.translation(player) + '打出一张杀？', { name: 'sha' });
									next.set('ai', function () {
										var event = _status.event;
										return get.attitude(event.player, event.source) - 2;
									});
									next.set('source', player);
									next.autochoose = lib.filter.autoRespondSha;
								} else {
									event.current = event.current.next;
									event.redo();
								}
								('step 1');
								player.storage.jijianging = false;
								if (result.bool) {
									event.finish();
									trigger.result = result;
									trigger.responded = true;
									trigger.animate = false;
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									list.sort(lib.sort.seat);
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											list[i].draw(2);
										}
									}
								} else {
									event.current = event.current.next;
									event.goto(0);
								}
							},
						},
						勤王2: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'chooseToUse',
							filter(event, player) {
								if (event.filterCard && !event.filterCard({ name: 'sha' }, player, event)) return false;
								if (!lib.filter.cardUsable({ name: 'sha' }, player)) return false;
								return game.hasPlayer(function (current) {
									return current != player && current.isFriendsOf(player);
								});
							},
							check(card) {
								var player = _status.event.player,
									players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									var nh = players[i].countCards('h');
									if (players[i].isFriendsOf(player) && get.attitude(players[i], player) > 1 && (nh >= 4 || (nh >= 3 && players[i].countCards('h', 'sha')))) {
										return 5 - get.value(card);
									}
								}
								return 0;
							},
							filterTarget(card, player, target) {
								if (_status.event._backup && typeof _status.event._backup.filterTarget == 'function' && !_status.event._backup.filterTarget({ name: 'sha' }, player, target)) {
									return false;
								}
								return player.canUse({ name: 'sha' }, target);
							},
							content() {
								'step 0';
								if (event.current == undefined) event.current = player.next;
								if (event.current == player) {
									player.addSkill('jijiang3');
									player.addTempSkill('勤王_ai');
									event.getParent(2).step = 0;
									event.finish();
								} else if (event.current.isFriendsOf(player)) {
									var next = event.current.chooseToRespond('是否替' + get.translation(player) + '对' + get.translation(target) + '使用一张杀', function (card) {
										var evt = _status.event.parent;
										return evt.player.canUse(card, evt.target) && card.name == 'sha';
									});
									next.set('ai', function (card) {
										var event = _status.event;
										return get.effect(event.target, card, event.source, event.player);
									});
									next.set('source', player);
									next.set('target', target);
									next.autochoose = lib.filter.autoRespondSha;
								} else {
									event.current = event.current.next;
									event.redo();
								}
								('step 1');
								if (result.bool) {
									event.finish();
									event.current.draw();
									if (result.cards && result.cards.length == 1 && result.cards[0].name == 'sha') {
										player.useCard(result.cards[0], target).animate = false;
									} else {
										player.useCard({ name: 'sha' }, target).animate = false;
									}
									var list = game.filterPlayer(function (current) {
										return current.isFriendsOf(player);
									});
									list.sort(lib.sort.seat);
									if (list.length) {
										player.line(list, 'green');
										for (var i = 0; i < list.length; i++) {
											list[i].draw(2);
										}
									}
								} else {
									event.current = event.current.next;
									event.goto(0);
								}
							},
							ai: {
								result: {
									target(player, target) {
										if (player.hasSkill('jijiang3')) return 0;
										if (player.hasSkill('勤王_ai')) return 0;
										return get.effect(target, { name: 'sha' }, player, target);
									},
								},
								order() {
									return get.order({ name: 'sha' }) - 0.1;
								},
							},
						},
						俠义: {
							trigger: { player: 'useCardToBegin' },
							forced: true,
							filter(event, player) {
								return event.targets.length == 1 && get.color(event.card) == 'black';
							},
							init(player) {
								player.storage.俠义 = 0;
							},
							intro: {
								content(storage) {
									return '当前有' + storage + '个<俠义>';
								},
							},
							mark: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('俠义'));
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									player.line(event.target);
									if (event.target.storage.俠义 == undefined) event.target.storage.俠义 = 0;
									event.target.markSkill('俠义');
									event.target.storage.俠义++;
									event.target.addSkill('俠义1');
									event.target.addSkill('俠义2');
								}
							},
						},
						俠义1: {
							mod: {
								globalFrom(from, to, distance) {
									if (typeof from.storage.俠义 == 'number') return distance - from.storage.俠义;
								},
							},
							ai: {
								threaten: 0.8,
							},
						},
						俠义2: {
							mod: {
								globalTo(from, to, distance) {
									if (typeof to.storage.俠义 == 'number') return distance + to.storage.俠义;
								},
							},
							ai: {
								threaten: 0.8,
							},
						},
						郡邱: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'phaseBegin' },
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							filter(event, player) {
								return typeof player.storage.俠义 == 'number' && player.storage.俠义 > 0;
							},
							content() {
								'step 0';
								player.addTempSkill('郡邱3', 'phaseAfter');
								player.draw(1 + player.storage.俠义);
								player.discardPlayerCard(player.storage.俠义, trigger.player, 'he', true);
								('step 1');
								if (result.cards) {
									for (var i = 0; i < result.cards.length; i++) {
										if (get.type(result.cards[i]) == 'equip') {
											player.equip(result.cards[i]);
											result.cards.splice(i--, 1);
										}
										if (get.type(result.cards[i]) == 'basic') {
											player.gain(result.cards[i]);
											result.cards.splice(i--, 1);
										}
										if (get.type(result.cards[i]) == 'trick') {
											var card = result.cards[i];
											var info = get.info(card);
											var select = get.select(info.selectTarget);
											if (select[0] == -1 || select[1] == -1) {
												player.useCard(
													{ name: card.name },
													game.filterPlayer(function (current) {
														return player.canUse({ name: card.name }, current);
													}),
													'noai'
												);
											} else {
												player.chooseUseTarget({ name: card.name }, true, false);
											}
											result.cards.splice(i--, 1);
										}
									}
								}
							},
						},
						郡邱3: {
							trigger: { global: 'phaseEnd' },
							forced: true,
							popup: false,
							silent: true,
							content() {
								player.storage.俠义 = 0;
								player.markSkill('俠义');
							},
						},
						s舍y裔: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'damageBegin' },
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								var num = player.hp,
									target = trigger.player;
								player.draw(num);
								if (player.countCards('he')) player.chooseCard('he', get.prompt('s舍y裔', target), '交给其至少' + get.cnNumber(num) + '张牌,防止即将受到的伤害(' + trigger.num + '点)', [num, player.countCards('he')]);
								('step 1');
								if (result.bool) {
									var target = trigger.player;
									target.gain(result.cards, player, 'giveAuto');
									trigger.cancel();
								}
							},
						},
						t天y音: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseEnd' },
							content() {
								player.gain(game.createCard('wuxie'));
								player.gain(game.createCard('wuxie'));
								player.gain(game.createCard('shan'));
								player.gain(game.createCard('tao'));
							},
						},
						清忠qingzhong: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseUseBegin' },
							check(event, player) {
								if (
									game.hasPlayer(function (current) {
										return current != player && current.isMinHandcard();
									})
								) {
									return true;
								}
								if (player.countCards('h') <= 2) return true;
								if (player.countCards('h') <= 3 && !player.countCards('h', 'shan')) return true;
								if (player.countCards('h', { type: 'basic' }) <= 1) return true;
								return false;
							},
							content() {
								'step 0';
								player
									.chooseTarget(
										get.prompt('清忠qingzhong'),
										function (card, player, target) {
											return target != player;
										},
										true
									)
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								player.draw(2 + Math.abs(player.countCards('h') - result.targets[0].countCards('h')));
								player.addTempSkill('清忠qingzhong_give');
							},
							subSkill: {
								give: {
									audio: 'ext:洪荒ol/audio:2',
									trigger: { player: 'phaseUseEnd' },
									content() {
										'step 0';
										var list = game.filterPlayer(function (current) {
											return current.isMinHandcard();
										});
										if (list.length == 1) {
											if (list[0] != player) {
												player.line(list[0], 'green');
												player.swapHandcards(list[0]);
											}
											event.finish();
										} else {
											player
												.chooseTarget(true, '清忠:选择一名角色与其交换手牌', function (card, player, target) {
													return true;
												})
												.set('ai', function (target) {
													return get.attitude(_status.event.player, target);
												});
										}
										('step 1');
										if (result.bool) {
											var target = result.targets[0];
											if (target != player) {
												player.line(target, 'green');
												player.swapHandcards(target);
											}
										}
									},
								},
							},
						},
						卫境weijing: {
							group: ['卫境weijing_sha', '卫境weijing_shan'],
							subSkill: {
								sha: {
									audio: 'ext:洪荒ol/audio:2',
									enable: 'chooseToUse',
									usable: 1,
									viewAs: { name: 'sha' },
									filterCard() {
										return false;
									},
									viewAsFilter(player) {
										return true;
									},
									selectCard: -1,
									precontent() {
										player.draw();
									},
									prompt: '视为使用一张杀',
								},
								shan: {
									audio: 'ext:洪荒ol/audio:2',
									enable: 'chooseToRespond',
									usable: 1,
									viewAs: { name: 'shan' },
									filterCard() {
										return false;
									},
									viewAsFilter(player) {
										return true;
									},
									onrespond(event, player) {
										player.draw();
									},
									selectCard: -1,
									prompt: '视为使用一张闪',
								},
							},
						},
						祸首斧过城摧: {
							group: ['祸首斧过城摧1', '祸首斧过城摧2'],
							ai: {
								effect: {
									target(card, player, target) {
										if (card.name == 'nanman') return 0;
									},
								},
							},
						},
						祸首斧过城摧1: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { target: 'useCardToBefore' },
							forced: true,
							_priority: 15,
							filter(event, player) {
								return event.card.name == 'nanman' || event.card.name == 'guohe';
							},
							content() {
								'step 0';
								trigger.cancel();
								('step 1');
								player.chooseToDiscard('he', function (card) {
									return get.color(card) == 'red';
								});
								('step 2');
								if (result.bool) {
									var list = game.filterPlayer(function (current) {
										return player.canUse('nanman', current) && current.isEnemiesOf(player);
									});
									list.sort(lib.sort.seat);
									player.useCard({ name: 'nanman' }, list);
								}
							},
						},
						祸首斧过城摧2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'damageBefore' },
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'nanman';
							},
							content() {
								trigger.source = player;
								trigger.num++;
							},
						},
						再起斧过城摧: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'loseAfter' },
							forced: true,
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.color(i) == 'red' && i.original != 'j') return true;
									}
								return false;
							},
							content() {
								player.addTempSkill('再起斧过城摧1', 'phaseAfter');
							},
							ai: {
								threaten: 0.7,
							},
						},
						再起斧过城摧1: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'phaseEnd' },
							filter(event, player) {
								return true;
							},
							check(event, player) {
								return true;
							},
							content() {
								'step 0';
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].draw();
										list[i].recover();
									}
								}
								event.cards = get.cards(player.maxHp);
								player.showCards(event.cards);
								('step 1');
								var num = 0;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.color(i) == 'red') {
											num++;
										}
									}
								if (num > 0) {
									player.recover(num);
								}
								event.num = num;
								('step 2');
								player.chooseTarget(get.prompt('再起斧过城摧')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, event.num);
								} else event.goto(4);
								('step 4');
								if (event.cards.length) {
									player.gain(event.cards);
								}
							},
							ai: {
								threaten(player, target) {
									if (target.hp == 1) return 2;
									if (target.hp == 2) return 1.5;
									return 1;
								},
							},
						},
						仁仕1: {
							trigger: {
								global: 'phaseAfter',
							},
							forced: true,
							popup: false,
							content() {
								player.storage.仁仕 = false;
								player.unmarkSkill('仁仕');
								player.removeSkill('仁仕1');
							},
						},
						仁仕: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								for (var i = 0; i < game.players.length; i++) {
									if (!game.players[i].storage.仁仕) return true;
								}
								return false;
							},
							init(player) {
								player.storage.仁仕 = false;
							},
							filterTarget(card, player, target) {
								return !target.storage.仁仕;
							},
							content() {
								'step 0';
								player.chooseCard(true, 'he', '交给' + get.translation(target) + '一张牌');
								('step 1');
								target.gain(result.cards, player);
								player.$give(result.cards, target);
								player.draw();
								target.storage.仁仕 = true;
								target.markSkill('仁仕');
								target.addSkill('仁仕1');
							},
							intro: {
								content: '已发动',
							},
							ai: {
								order: 7,
								threaten: 1.5,
								expose: 0.2,
								result: {
									target(player, target) {
										if (target.countCards('h') < target.hp) {
											if (target.countCards('h') <= 2) return 1;
										} else if (target.countCards('h') > target.hp) {
											if (target.countCards('h') <= 3) return -1;
										}
									},
								},
							},
						},
						德报: {
							init(player) {
								player.storage.德报 = [];
							},
							intro: {
								content: 'cards',
							},
							marktext: '█',
							mark: true,
							group: ['德报_gainMark', '德报_clearMark'],
							subSkill: {
								gainMark: {
									trigger: {
										global: 'gainEnd',
									},
									audio: 'ext:洪荒ol/audio:2',
									filter(event, player) {
										return player.storage.德报.length <= player.maxHp && event.player != player;
									},
									content() {
										'step 0';
										player.draw();
										('step 1');
										if (player.countCards('he')) {
											player.chooseCard('将1张手牌置于武将牌上作为<█>', 1, true);
										} else {
											event.finish();
										}
										('step 2');
										if (result.cards && result.cards.length) {
											player.lose(result.cards, ui.special);
											player.storage.德报 = player.storage.德报.concat(result.cards);
											player.markSkill('德报');
											game.log(player, '将', result.cards, '置于武将牌上作为<█>');
										}
									},
								},
								clearMark: {
									trigger: {
										player: 'phaseBegin',
									},
									forced: true,
									audio: 'ext:洪荒ol/audio:2',
									filter(event, player) {
										return player.storage.德报.length;
									},
									content() {
										var cards = [];
										for (var i = 0; i < player.storage.德报.length; i++) {
											cards.push(game.createCard(player.storage.德报[i]));
										}
										player.gain(cards);
										player.storage.德报 = [];
									},
								},
							},
						},
						不弃: {
							trigger: {
								global: 'dying',
							},
							audio: 'ext:洪荒ol/audio:2',
							filter(event, player) {
								return player.storage.德报.length;
							},
							content() {
								'step 0';
								player.chooseCardButton(player.storage.德报, true);
								('step 1');
								var card = result.links[0];
								card.discard();
								player.$throw(card);
								player.storage.德报.remove(card);
								if (!player.storage.德报.length) {
									player.unmarkSkill('德报');
								} else {
									player.markSkill('德报');
								}
								('step 2');
								trigger.player.recover();
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										if (player != target) return 0;
										if (player.countCards('h') + 2 <= player.hp + player.storage.德报.length) return 1;
										return 0;
									},
								},
							},
						},
						华歆不臣: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBegin',
								global: 'dyingBegin',
							},
							content() {
								'step 0';
								player.chooseTarget('选择一名魏或群势力角色,你与其势力相同', function (card, player, target) {
									return target.group == 'wei' || (target.group == 'qun' && target != player);
								});
								('step 1');
								if (result.bool) {
									var pl = result.targets[0];
									player.storage.ll = pl;
									pl.markSkill('华歆不臣');
									if (player.identity != 'zhu') player.identity = pl.identity;
									player.setIdentity(pl.identity);
									player.node.identity.dataset.color = pl.identity;
									player.setIdentity('<font color=#A7C8E7>名士高风</font>');
									if (lib.config.mode == 'guozhan') {
										player.identity = player.storage.ll.identity;
										player.setIdentity();
										player._group = pl.identity;
										player.identityShown = true;
										lib.character[player.name][1] = pl.identity;
										player.setIdentity('<font color=#A7C8E7>名士高风</font>');
									}
								}
							},
							marktext: '臣',
							intro: {
								content: '已对你臣服',
							},
							group: '华歆不臣2',
						},
						华歆不臣2: {
							trigger: { player: 'phaseBefore' },
							forced: true,
							popup: false,
							silent: true,
							content() {
								for (var i = 0; i < game.players.length; i++) {
									delete game.players[i].storage.ll;
									game.players[i].unmarkSkill('华歆不臣');
								}
								player.unmarkSkill('华歆不臣');
							},
						},
						烈弓mjshz: {
							mod: {
								targetInRange(card, player, target) {
									if (card.name == 'sha' && card.number) {
										if (get.distance(player, target) <= card.number) return true;
									}
								},
							},
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'shaBegin' },
							logTarget: 'target',
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							filter(event, player) {
								return true;
							},
							content() {
								trigger.directHit = true;
								player.addTempSkill('烈弓mjshz2', 'shaAfter');
							},
							ai: {
								threaten: 0.5,
							},
						},
						烈弓mjshz2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { source: 'damageBegin' },
							prompt: '是否发动【烈弓】使此伤害+1+亮出的伤害标签牌数？',
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								'step 0';
								event.cards = get.cards(player.maxHp);
								player.showCards(event.cards);
								('step 1');
								event.num = 0;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.tag(i, 'damage')) {
											player.gain(i);
											event.num++;
										}
									}
								('step 2');
								trigger.num++;
								trigger.num += event.num;
							},
						},
						益壮: {
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.card && typeof event.card.number == 'number' && event.notLink();
							},
							content() {
								trigger.num += trigger.card.number;
							},
						},
						皓首: {
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								trigger.num -= game.roundNumber;
							},
						},
						精械jx1: {
							audio: 'ext:洪荒ol/audio:2',
							group: ['精械jx2'],
							position: 'he',
							enable: 'phaseUse',
							filterCard(card) {
								return ['bagua', 'baiyin', 'lanyinjia', 'renwang', 'tengjia', 'zhuge' /*,"taipingyaoshu","huxinjing","minguangkai"*/].includes(card.name);
							},
							discard: false,
							check() {
								return 1;
							},
							content() {
								'step 0';
								player.showCards(cards);
								('step 1');
								var card = cards[0];
								player.gain(game.createCard('rewrite_' + card.name, card.suit, card.number), 'gain2');
							},
							ai: {
								basic: {
									order: 10,
								},
								result: {
									player: 1,
								},
							},
						},
						精械jx2: {
							audio: 'ext:洪荒ol/audio:2',
							prompt: '出牌阶段,你可以展示一张未强化过的【诸葛连弩】或标准包/军争包/SP包中的防具牌,对其进行强化.当你处于濒死状态时,你可以弃置一张装备牌摸体力上限减体力值的牌,将体力回复至体力上限',
							enable: 'chooseToUse',
							filterCard(card) {
								return get.type(card) == 'equip';
							},
							filter(event, player) {
								if (event.type == 'dying') {
									if (player != event.dying) return false;
									return true;
								}
								return false;
							},
							check() {
								return 1;
							},
							position: 'he',
							content() {
								'step 0';
								player.draw(player.maxHp - player.hp);
								player.hp = player.maxHp;
							},
							ai: {
								order: 0.5,
								skillTagFilter(player) {
									if (player.hp > 0) return false;
								},
								save: true,
								result: {
									player(player) {
										return 10;
									},
								},
							},
						},
						巧思qs: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								event.num = [1, 2, 3, 4, 5, 6].randomGet(); //QQQ
								('step 1');
								event.cards = get.cards(2 + event.num);
								player.showCards(event.cards);
								('step 2');
								player.gain(event.cards, 'gain2');
								player.draw(2 + event.num);
							},
							ai: {
								order: 7.5,
								result: {
									player: 1,
								},
							},
						},
						诛佞: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filter(event, player) {
								if (!player.countCards('h')) return false;
								var list = ['sha', 'tao', 'jiu', 'taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
								if (get.mode() == 'guozhan') {
									list = list.concat(['xietianzi', 'shuiyanqijunx', 'lulitongxin', 'lianjunshengyan', 'chiling', 'diaohulishan', 'yuanjiao', 'huoshaolianying']);
								}
								for (var i = 0; i < list.length; i++) {
									if (event.filterCard && event.filterCard({ name: list[i] }, player)) return true;
								}
								return false;
							},
							chooseButton: {
								dialog() {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										if (name == 'wuxie') continue;
										if (name == 'sha') {
											list.push(['基本', '', 'sha']);
											list.push(['基本', '', 'sha', 'fire']);
											list.push(['基本', '', 'sha', 'thunder']);
										} else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
										else if (get.type(name) == 'basic') list.push(['基本', '', name]);
									}
									return ui.create.dialog('诛佞', [list, 'vcard']);
								},
								filter(button, player) {
									var evt = _status.event.parent;
									if (evt && evt.filterCard) {
										return evt.filterCard({ name: button.link[2] }, player, evt);
									}
									return true;
								},
								backup(links, player) {
									return {
										filterCard: false,
										selectCard: 0,
										viewAs: { name: links[0][2], nature: links[0][3] },
										precontent() {
											'step 0';
											player.chooseToDiscard('he', true, [1, player.countCards('he')]);
											('step 1');
											var list = game.filterPlayer(function (current) {
												return current.isFriendsOf(player);
											});
											list.sort(lib.sort.seat);
											if (list.length) {
												player.line(list, 'green');
												for (var i = 0; i < list.length; i++) {
													for (var j = 0; j < result.cards.length; j++) {
														list[i].gain(game.createCard(result.cards[j]));
														list[i].$draw();
													}
												}
											}
										},
									};
								},
								prompt(links, player) {
									return '视为使用' + get.translation(links[0][2]);
								},
							},
						},
						封乡: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBefore',
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget('选择【封乡】的目标', lib.translate.封乡_info, true, function (card, player, target) {
										return !target.hasSkill('封乡_mark');
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (att < 0) return -att + 3;
										return Math.random();
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									game.log(target, '成为了', '#g【封乡】', '的目标');
									target.storage.封乡_mark = player;
									target.addSkill('封乡_mark');
								}
							},
							subSkill: {
								mark: {
									usable: 1,
									intro: {
										content: '每回合限一次,当你的牌数发生变化结束后,回复体力后,所有友方角色摸一张牌',
									},
									nopop: true,
									trigger: {
										player: ['loseAfter', 'gainAfter', 'recoverAfter'],
									},
									popup: false,
									forced: true,
									filter(event, player) {
										if (player.storage.封乡_mark && player.storage.封乡_mark.isAlive() && player.storage.封乡_mark.isIn()) {
											return true;
										}
									},
									content() {
										var list = game.filterPlayer(function (current) {
											return current.isFriendsOf(player);
										});
										list.sort(lib.sort.seat);
										if (list.length) {
											player.line(list, 'green');
											for (var i = 0; i < list.length; i++) {
												list[i].draw();
											}
										}
									},
								},
							},
						},
						反傲fa: {
							nobracket: true,
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.num > 0 && get.distance(player, event.player, 'attack') <= 1;
							},
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								player.gainMaxHp(2);
								player.recover(2);
								player.draw(2);
								('step 2');
								event.num--;
								if (event.num > 0) {
									player.chooseBool('是否继续发动<span style=\"color: red\">"反傲"</span>');
								} else event.finish();
								('step 3');
								if (result.bool) {
									event.goto(1);
								}
							},
						},
						谷谋gm: {
							nobracket: true,
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'phaseBegin',
							},
							content() {
								'step 0';
								var shas = player.getCards('h', 'sha');
								var num;
								if (player.hp >= 4 && shas.length >= 3) {
									num = 4;
								} else if (player.hp >= 3 && shas.length >= 2) {
									num = 3;
								} else {
									num = 2;
								}
								delete player.storage.谷谋gm1;
								player
									.chooseControl('一', '二', '三', '四', '五', '六', '七', '八', function () {
										return get.cnNumber(_status.event.goon, true);
									})
									.set('prompt', '失去任意点体力')
									.set('goon', num);
								('step 1');
								var num;
								switch (result.control) {
									case '一':
										num = 1;
										break;
									case '二':
										num = 2;
										break;
									case '三':
										num = 3;
										break;
									case '四':
										num = 4;
										break;
									case '五':
										num = 5;
										break;
									case '六':
										num = 6;
										break;
									case '七':
										num = 7;
										break;
									case '八':
										num = 8;
										break;
								}
								player.storage.谷谋gm1 = num;
								player.draw(num);
								trigger.player.loseHp(num);
								player.addTempSkill('谷谋gm_attack');
							},
							ai: {
								order: 10,
								result: {
									player(player) {
										if (player.hp == 1) return 0;
										var shas = player.getCards('h', 'sha');
										if (!shas.length) return 0;
										var card = shas[0];
										if (!lib.filter.cardEnabled(card, player)) return 0;
										if (lib.filter.cardUsable(card, player)) return 0;
										var mindist;
										if (player.hp >= 4) {
											mindist = 4;
										} else if (player.hp >= 3) {
											mindist = 3;
										} else {
											mindist = 2;
										}
										if (
											game.hasPlayer(function (current) {
												return current.hp <= mindist - 1 && get.distance(player, current, 'attack') <= mindist && player.canUse(card, current, false) && get.effect(current, card, player, player) > 0;
											})
										) {
											return 10;
										}
										return 1;
									},
								},
							},
							group: '谷谋gm_attack',
							subSkill: {
								attack: {
									onremove(player) {
										delete player.storage.谷谋gm1;
									},
									mod: {
										cardUsable(card, player, num) {
											if (typeof player.storage.谷谋gm1 == 'number' && card.name == 'sha') {
												return num + player.storage.谷谋gm1;
											}
										},
										globalFrom(from, to, distance) {
											if (typeof from.storage.谷谋gm1 == 'number') {
												return distance - from.storage.谷谋gm1;
											}
										},
									},
								},
							},
							group: 'wy谋谷1',
						},
						wy谋谷1: {
							nobracket: true,
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								var shas = player.getCards('h', 'sha');
								var num;
								if (player.hp >= 4 && shas.length >= 3) {
									num = 4;
								} else if (player.hp >= 3 && shas.length >= 2) {
									num = 3;
								} else {
									num = 2;
								}
								delete player.storage.wy谋谷11;
								player
									.chooseControl('一', '二', '三', '四', '五', '六', '七', '八', function () {
										return get.cnNumber(_status.event.goon, true);
									})
									.set('prompt', '失去任意点体力')
									.set('goon', num);
								('step 1');
								var num;
								switch (result.control) {
									case '一':
										num = 1;
										break;
									case '二':
										num = 2;
										break;
									case '三':
										num = 3;
										break;
									case '四':
										num = 4;
										break;
									case '五':
										num = 5;
										break;
									case '六':
										num = 6;
										break;
									case '七':
										num = 7;
										break;
									case '八':
										num = 8;
										break;
								}
								player.storage.wy谋谷11 = num;
								player.draw(num);
								player.loseHp(num);
								player.addTempSkill('wy谋谷1_attack');
							},
							ai: {
								order: 10,
								result: {
									player(player) {
										if (player.hp == 1) return 0;
										var shas = player.getCards('h', 'sha');
										if (!shas.length) return 0;
										var card = shas[0];
										if (!lib.filter.cardEnabled(card, player)) return 0;
										if (lib.filter.cardUsable(card, player)) return 0;
										var mindist;
										if (player.hp >= 4) {
											mindist = 4;
										} else if (player.hp >= 3) {
											mindist = 3;
										} else {
											mindist = 2;
										}
										if (
											game.hasPlayer(function (current) {
												return current.hp <= mindist - 1 && get.distance(player, current, 'attack') <= mindist && player.canUse(card, current, false) && get.effect(current, card, player, player) > 0;
											})
										) {
											return 10;
										}
										return 1;
									},
								},
							},
							group: 'wy谋谷1_attack',
							subSkill: {
								attack: {
									onremove(player) {
										delete player.storage.wy谋谷11;
									},
									mod: {
										cardUsable(card, player, num) {
											if (typeof player.storage.wy谋谷11 == 'number' && card.name == 'sha') {
												return num + player.storage.wy谋谷11;
											}
										},
										globalFrom(from, to, distance) {
											if (typeof from.storage.wy谋谷11 == 'number') {
												return distance - from.storage.wy谋谷11;
											}
										},
									},
								},
							},
						},
						傲戎: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 2;
								var fellow = game.addFellow(pos, 'jiashanyuzhuangjun夹山峪壮军');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('忠臣');
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'jiashanyuzhuangjun夹山峪壮军');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('忠臣');
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								('step 1');
								player.removeSkill('傲戎');
							},
						},
						据守镇守不退: {
							group: ['据守镇守不退1', '据守镇守不退2', '据守镇守不退3', '据守镇守不退4'],
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('据守镇守不退')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, 2);
									player.changeHujia(2);
								}
							},
						},
						据守镇守不退1: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('据守镇守不退')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].turnOver();
									player.turnOver();
									player.draw(4);
									if (player.countCards('he')) player.chooseToDiscard('he', true);
								}
								('step 2');
								if (result.cards) {
									player.changeHujia(result.cards[0].number);
									player.moveCard();
								}
							},
						},
						据守镇守不退2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'turnOverAfter',
							},
							filter(event, player) {
								return player.hujia;
							},
							content() {
								var list = [];
								for (var i = 0; i < ui.cardPile.childElementCount; i++) {
									var node = ui.cardPile.childNodes[i];
									if (!list.includes(node.name) && !get.tag(node, 'damage')) {
										list.push(node.name);
									}
								}
								for (var i = 0; i < ui.discardPile.childElementCount; i++) {
									var node = ui.discardPile.childNodes[i];
									if (!list.includes(node.name) && !get.tag(node, 'damage')) {
										list.push(node.name);
									}
								}
								var arrNew = [];
								for (var i = 0; i < player.hujia; i++) {
									var _num = Math.floor(Math.random() * list.length);
									var mm = list[_num];
									list.splice(_num, 1);
									arrNew.push(mm);
								}
								var list2 = [];
								for (var i = 0; i < arrNew.length; i++) {
									list2.push(game.createCard(arrNew[i]));
								}
								player.gain(list2, 'draw');
							},
						},
						据守镇守不退3: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'chooseToUse',
							filterCard: false,
							selectCard: 0,
							viewAsFilter(player) {
								return player.hujia;
							},
							viewAs: { name: 'wuxie' },
							prompt: '扣减一点护甲视为使用无懈可击',
							precontent() {
								player.changeHujia(-1);
							},
							check(card) {
								return 8 - get.value(card);
							},
							threaten: 1.2,
						},
						据守镇守不退4: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'damageBegin' },
							content() {
								'step 0';
								player.changeHujia();
								player.chooseTarget(get.prompt('据守镇守不退')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].turnOver();
								}
							},
						},
						解围镇守不退: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'damageBegin',
							},
							filter(event, player) {
								return (
									player.getFriends().includes(event.player) &&
									player.countCards('h', function (card) {
										return !get.tag(card, 'damage');
									})
								);
							},
							content() {
								player.chooseToDiscard(
									'he',
									function (card) {
										return !get.tag(card, 'damage');
									},
									1,
									true
								);
								trigger.player.line(player, 'green');
								trigger.cancel();
							},
						},
						骁果凯歌高旋: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'phaseEnd',
							},
							check(event, player) {
								return get.damageEffect(event.player, player, player) > 0;
							},
							filter(event, player) {
								return event.player.isAlive() && event.player != player;
							},
							content() {
								var num = trigger.player.countCards('he', { type: 'equip' });
								trigger.player.discard(trigger.player.getCards('he', { type: 'equip' }));
								player.draw(2 + num);
								player.recover();
								trigger.player.damage(1 + num);
								trigger.player.loseHp();
							},
							ai: {
								expose: 0.3,
								threaten: 1.3,
							},
						},
						雅俊: {
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							async content(event, trigger, player) {
								//QQQ
								trigger.num += game.countPlayer((target) => target.hp == player.hp) + 1;
								var { result } = await player.chooseTarget(get.prompt('雅俊')).set('ai', (target) => -get.attitude(player, target));
								if (result.targets?.length) {
									await player.gainPlayerCard(result.targets[0], 'he', true);
									result.targets[0].addTempSkill('雅俊2', 'phaseAfter');
									if (player.countCards('he')) {
										var { result } = await player.chooseCard('he', true);
										if (result.cards?.length) {
											ui.cardPile.insertBefore(result.cards[0], ui.cardPile.firstChild);
										}
									}
								}
							},
						},
						雅俊2: {
							mod: {
								maxHandcard(player, num) {
									return num - 1;
								},
							},
						},
						尊嫡: {
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('尊嫡')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
								}
								('step 2');
								player.judge(function (card) {
									if (get.color(card) == 'black') return 2;
									return -0.5;
								});
								('step 3');
								if (result.bool) {
									event.target.draw(3);
								} else {
									event.target.gainMaxHp();
									event.target.recover();
									event.target.moveCard();
								}
							},
						},
						秉清: {
							usable: 4,
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: ['useCardAfter'],
							},
							filter(event, player) {
								return get.itemtype(event.cards) == 'cards';
							},
							forced: true,
							content() {
								'step 0';
								player.draw(
									player.getCards('he', function (card) {
										return card.number > trigger.card.number;
									}).length * 2
								);
								('step 1');
								player.chooseTarget(get.prompt('秉清')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									player.discardPlayerCard(result.targets[0], 'hej', true);
								}
								('step 3');
								player
									.chooseTarget(get.prompt('秉清'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 4');
								if (result.bool) {
									result.targets[0].damage();
								}
							},
						},
						迎奉: {
							nobracket: true,
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'gameDrawAfter',
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget('<span style=\"color: blue\">迎奉</span>:请指定1名<span style=\"color: blue\">角色</span>', true, function (card, player, target) {
										if (player != game.me) return player.getFriends().includes(target);
										return true;
									})
									.set('ai', function (target) {
										if (player.getFriends().includes(target)) return true;
										return false;
									});
								('step 1');
								var target = result.targets[0];
								player.line(target, 'fire');
								target.addSkill('迎奉_mark');
								game.log(player, '认为', target, '是<span style=\"color: blue\">迎奉目标</span>');
								if (!player.storage.迎奉_target) player.storage.迎奉_target = [];
								player.storage.迎奉_target.push(target);
							},
							group: ['迎奉_damage', '迎奉_swap'],
							subSkill: {
								mark: {
									mark: true,
									marktext: '<span style=\"color: blue\">迎</span>',
									intro: {
										content: '已成为<span style="color: blue">迎奉</span>目标',
									},
									ai: {
										threaten: 3,
									},
								},
								damage: {
									popup: false,
									forced: true,
									trigger: {
										global: 'damageEnd',
									},
									filter(event, player) {
										return player.storage.迎奉_target && player.storage.迎奉_target.includes(event.player);
									},
									content() {
										player.line(trigger.player, 'thunder');
										//trigger.player.line(player.storage.迎奉_target,"fire");
										//player.storage.迎奉_target.line(player,"fire");
										player.storage.迎奉_target.forEach(function (x) {
											x.gain(game.createCard('fengtianzi'));
											x.$draw();
										});
										player.gain(game.createCard('fengtianzi'));
										player.$draw();
									},
								},
								swap: {
									trigger: {
										global: 'dieAfter',
									},
									filter(event, player) {
										var num = game.countPlayer(function (current) {
											return current != player && current.hasSkill('迎奉_mark');
										});
										return num == 0;
									},
									forced: true,
									content() {
										'step 0';
										player
											.chooseTarget('<span style=\"color: blue\">迎奉</span>:请指定1名<span style=\"color: blue\">其他角色</span>', true, function (card, player, target) {
												if (player != game.me) return player.getEnemies().includes(target);
												return target != player;
											})
											.set('ai', function (target) {
												if (player.getEnemies().includes(target)) return true;
												return false;
											});
										('step 1');
										var target = result.targets[0];
										player.line(target, 'fire');
										target.addSkill('迎奉_mark');
										game.log(player, '认为', target, '是<span style="color: blue">迎奉目标</span>');
										if (!player.storage.迎奉_target) player.storage.迎奉_target = [];
										player.storage.迎奉_target.push(target);
									},
								},
							},
							ai: {
								moreDraw: true,
							},
						},
						先略: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'useCardAfter' },
							usable: 1,
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick';
							},
							content() {
								'step 0';
								event.cards = get.cards(2);
								('step 1');
								if (event.cards.length > 1) {
									player.chooseCardButton('将<先略>牌分配给任意角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
										if (ui.selected.buttons.length == 0) return 1;
										return 0;
									});
								} else if (event.cards.length == 1) {
									event._result = { links: event.cards.slice(0), bool: true };
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									for (var i = 0; i < result.links.length; i++) {
										event.cards.remove(result.links[i]);
									}
									event.togive = result.links.slice(0);
									player
										.chooseTarget('将' + get.translation(result.links) + '交给一名角色', true)
										.set('ai', function (target) {
											var att = get.attitude(_status.event.player, target);
											if (_status.event.enemy) {
												return -att;
											} else if (att > 0) {
												return att / (1 + target.countCards('h'));
											} else {
												return att / 100;
											}
										})
										.set('enemy', get.value(event.togive[0]) < 0);
								}
								('step 3');
								if (result.targets.length) {
									result.targets[0].gain(event.togive, 'draw');
									player.line(result.targets[0], 'green');
									game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
									event.goto(1);
								}
							},
						},
						造王: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('造王')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									if (player.identity != 'zhu') result.targets[0].identity = player.identity;
									else result.targets[0].identity = 'zhong';
									if (lib.config.mode == 'guozhan') result.targets[0]._group = player.identity;
									result.targets[0].setIdentity('<font color=crimson>王</font>');
									result.targets[0].gainMaxHp();
									result.targets[0].recover();
									result.targets[0].draw(3);
									result.targets[0].addTempSkill('造王2', { player: 'phaseAfter' });
								}
							},
						},
						造王2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'dieBegin' },
							forced: true,
							content() {
								if (lib.config.mode == 'identity') {
									if (player != game.me && player.identity != game.me.identity) {
										if ((player.identity == 'zhu' && game.me.identity != 'zhong') || (player.identity == 'zhong' && game.me.identity != 'zhu')) game.forceOver(false);
										else game.forceOver(true);
									} else {
										game.forceOver(true);
									}
								} else {
									if (player != game.me && player.identity != game.me.identity) {
										game.forceOver(false);
									} else {
										game.forceOver(true);
									}
								}
							},
						},
						y应y援: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'useCardEnd' },
							usable: 5,
							content() {
								var type = get.type(trigger.card, 'trick');
								var list1 = get.typeCard(type);
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									if (list1.length) {
										item.gain(game.createCard(list1.randomGet()), 'gain2');
										item.gain(game.createCard(list1.randomGet()), 'gain2');
									}
								});
							},
						},
						z自s书: {
							subSkill: {
								discard: {
									audio: 'ext:洪荒ol/audio:2',
									trigger: { global: 'gainAfter' },
									filter(event, player) {
										return _status.currentPhase != event.player;
									},
									content() {
										var list = [];
										var he = trigger.player.getCards('he');
										for (var i = 0; i < trigger.cards.length; i++) {
											if (he.includes(trigger.cards[i])) {
												list.push(trigger.cards[i]);
											}
										}
										trigger.player.$throw(list);
										trigger.player.lose(list, ui.discardPile);
										game.log(trigger.player, '将', list, '置入弃牌堆');
									},
								},
								draw: {
									audio: 'ext:洪荒ol/audio:2',
									trigger: { player: 'gainAfter' },
									forced: true,
									filter(event, player) {
										if (_status.currentPhase != player) return false;
										return event.getParent(2).name != 'z自s书_draw';
									},
									content() {
										player.draw();
									},
								},
							},
							ai: {
								threaten: 1.2,
								nogain: 1,
							},
							group: ['z自s书_draw', 'z自s书_discard'],
						},
						摇弓: {
							mod: {
								targetInRange(card, player, target) {
									if (card.name == 'sha' && card.number) {
										if (get.distance(player, target) <= card.number) return true;
									}
								},
							},
							group: '摇弓2',
							trigger: { player: 'shaBegin' },
							logTarget: 'target',
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							filter(event, player) {
								if (event.target.countCards('h') <= player.countCards('h')) return true;
								if (event.target.hp <= player.hp) return true;
								return false;
							},
							content() {
								trigger.directHit = true;
								player.addTempSkill('摇弓2', 'shaAfter');
							},
							ai: {
								threaten: 0.5,
							},
						},
						摇弓2: {
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink();
							},
							forced: true,
							content() {
								'step 0';
								event.cards = get.cards(7);
								if (event.isMine() == false) {
									event.dialog = ui.create.dialog('摇弓', event.cards);
								}
								('step 1');
								if (event.dialog) event.dialog.close();
								var dialog = ui.create.dialog('摇弓', event.cards);
								player.chooseButton([0, 7], dialog, true).set('ai', function (button) {
									return get.value(button.link);
								}).filterButton = function (button) {
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										if (button.link.name == ui.selected.buttons[i].link.name) return false;
									}
									return true;
								};
								('step 2');
								var cards2 = [];
								for (var i = 0; i < result.buttons.length; i++) {
									cards2.push(result.buttons[i].link);
									cards.remove(result.buttons[i].link);
								}
								player.gain(cards2, 'log');
								if (cards2.length) {
									player.$gain2(cards2);
									trigger.num += cards2.length;
								}
								for (var i = 0; i < cards.length; i++) {
									cards[i].discard();
								}
							},
						},
						教民: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'drawEnd' },
							usable: 1,
							content() {
								'step 0';
								event.card = get.cardPile(function (card) {
									return get.type(card) == 'basic';
								}, 'cardPile');
								if (!event.card) {
									player.draw();
									event.goto(1);
									return;
								}
								player.showCards([event.card]);
								trigger.player.gain(event.card, 'gain2');
								('step 1');
								event.card1 = get.cardPile(function (card) {
									return get.type(card, 'trick') == 'trick';
								}, 'cardPile');
								if (!event.card1) {
									player.draw();
									event.goto(2);
									return;
								}
								player.showCards([event.card1]);
								trigger.player.gain(event.card1, 'gain2');
								('step 2');
								event.card2 = get.cardPile(function (card) {
									return get.type(card) == 'equip';
								}, 'cardPile');
								if (!event.card2) {
									player.draw();
									event.finish();
									return;
								}
								player.showCards([event.card2]);
								trigger.player.gain(event.card2, 'gain2');
							},
						},
						算签: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 5,
							content() {
								'step 0';
								var list = [];
								var choiceList = ['令一名角色获得<盛签>', '令一名角色获得<上签>', '令一名角色获得<中签>', '令一名角色获得<下签>', '令一名角色获得一枚<衰签>'];
								list.push('cancel2');
								player
									.chooseControl(list)
									.set('prompt', '算签<br><br><div class="text" style="color: red; text-align:center;">选项一:令一名角色获得<盛签><br><br>选项二:令一名角色获得<上签><br><br>选项三:令一名角色获得<中签><br><br>选项四:令一名角色获得<下签><br><br>选项五:令一名角色获得一枚<衰签></div>')
									.set('ai', function (target) {
										return -get.attitude(player, target);
									})
									.set('choiceList', choiceList);
								('step 1');
								if (result.control != 'cancel2') {
									var index = ['选项一', '选项二', '选项三', '选项四', '选项五'].indexOf(result.control);
									event.index = index;
									var list = [['令一名角色获得<盛签>'], ['令一名角色获得<上签>'], ['令一名角色获得<中签>'], ['令一名角色获得<下签>'], ['令一名角色获得一枚<衰签>']][index];
									player.chooseTarget(list[0], true);
								} else event.finish();
								('step 2');
								if (result.bool) {
									var target = result.targets[0];
									switch (event.index) {
										case 0:
											target.addTempSkill('盛签', { player: 'phaseAfter' });
											break;
										case 1:
											target.addTempSkill('上签', { player: 'phaseAfter' });
											break;
										case 2:
											target.addTempSkill('中签', { player: 'phaseAfter' });
											break;
										case 3:
											target.addTempSkill('下签', { player: 'phaseAfter' });
											break;
										case 4:
											target.addTempSkill('衰签', { player: 'phaseAfter' });
											break;
									}
								}
							},
						},
						盛签: {
							trigger: { player: 'damageBegin' },
							forced: true,
							content() {
								trigger.cancel();
								player.recover();
								player.draw(2);
							},
							mark: true,
							intro: {
								content: '已获得盛签',
							},
						},
						上签: {
							trigger: { player: 'damageBegin' },
							forced: true,
							content() {
								player.draw(trigger.num);
								if (trigger.num > 1) trigger.num = 1;
							},
							mark: true,
							intro: {
								content: '已获得上签',
							},
						},
						中签: {
							trigger: { player: 'damageBegin' },
							forced: true,
							content() {
								player.draw(2 * trigger.num);
							},
							mark: true,
							intro: {
								content: '已获得中签',
							},
						},
						下签: {
							trigger: { player: 'damageBegin' },
							forced: true,
							content() {
								trigger.num++;
								player.loseHp(1 + trigger.num);
							},
							mark: true,
							intro: {
								content: '已获得下签',
							},
						},
						衰签: {
							trigger: { player: 'damageBegin' },
							group: '衰签2',
							forced: true,
							content() {
								trigger.num += 2;
								player.loseHp(1 + trigger.num);
							},
							mark: true,
							intro: {
								content: '已获得衰签',
							},
						},
						衰签2: {
							trigger: { player: 'recoverBegin' },
							forced: true,
							content() {
								trigger.cancel();
								player.chooseToDiscard('he', true, 2);
							},
						},
						祈算: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('祈算')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									if (Math.random() < 0.5) player.gainPlayerCard(result.targets[0], 'he', true);
									else player.gainPlayerCard(result.targets[0], 'he', true, 'visible');
									if (Math.random() < 0.66) result.targets[0][['damage', 'loseHp'].randomGet()]([1, 2].randomGet());
								}
							},
						},
						虚射: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('虚射')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									player.discardPlayerCard(target, 'he', true);
								}
								('step 2');
								if (result.cards[0]) {
									if (get.type(result.cards[0]) == 'equip') event.target.damage();
									else {
										player.gain(game.createCard('sha'));
										player.gain(game.createCard('wanjian'));
										player.$draw(2);
									}
								}
							},
						},
						义释: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { source: 'damageBegin' },
							content() {
								trigger.num--;
								player.gainPlayerCard(3, trigger.player, 'hej', true);
							},
						},
						义报: {
							audio: 'ext:洪荒ol/audio:2',
							mod: {
								globalFrom(from, to, distance) {
									return distance - 2;
								},
							},
							trigger: { player: 'useCardBegin' },
							filter(event, player) {
								return get.tag(event.card, 'damage') && get.color(event.card) == 'black';
							},
							content() {
								if (trigger.card.name == 'sha') trigger.directHit = true;
								else trigger.target.damage();
							},
						},
						鈞敌: {
							audio: 'ext:洪荒ol/audio:2',
							mod: {
								globalTo(from, to, distance) {
									return distance + 2;
								},
							},
							trigger: { player: 'damageBegin' },
							filter(event, player) {
								return event.source && event.source != player;
							},
							content() {
								trigger.source.damage(
									trigger.source.countCards('he', (card) => {
										return get.color(card) == 'red';
									})
								);
							},
						},
						狼灭lm: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'phaseEnd' },
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								player
									.chooseTarget(get.prompt('狼灭lm'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true);
									result.targets[0].damage();
									player.chooseJunfaFor(result.targets[0]).set('prompt', '<span style="color:red">选择一项军法对其执行</span>');
									event.target = result.targets[0];
									event.targets = result.targets;
								} else event.finish();
								('step 3');
								event.junfa = result.junfa;
								event.target.carryOutJunfa(player, event.junfa, event.targets);
							},
						},
						蠖略: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							group: '蠖略2',
							content() {
								var card1 = ['huoshaolianying', { name: 'sha', nature: 'fire' }, 'huoshan'].randomGet();
								var card2 = ['shuiyanqijunx', 'shandian', { name: 'sha', nature: 'thunder' }].randomGet();
								[game.createCard(card1), game.createCard(card2)].map((i) => player.gain(i, 'draw'));
							},
						},
						蠖略2: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('he', (c) => ['huoshaolianying', 'shuiyanqijunx', 'shandian', 'huoshan'].includes(c.name));
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('蠖略')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].damage('fire');
									result.targets[0].damage('thunder');
								}
							},
						},
						应怒: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'loseEnd' },
							usable: 1,
							filter(event, player) {
								var names = event.cards.map((c) => c.name);
								function hasCommonElement(arr1, arr2) {
									return arr1.some((element) => arr2.includes(element));
								}
								return hasCommonElement(names, ['huoshaolianying', 'shuiyanqijunx', 'shandian', 'huoshan']);
							},
							content() {
								player.recover();
								player.changeHujia();
								player.addTempSkill('应怒2');
							},
						},
						应怒2: {
							mod: {
								globalTo(from, to, distance) {
									return distance + 3;
								},
							},
						},
						谲伏: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: ['useCard', 'respondEnd'] },
							filter(event, player) {
								if (player.storage.谲伏 && player.storage.谲伏.includes(event.card.name)) {
									return false;
								}
								return true;
							},
							content() {
								if (trigger.name == 'respond') {
									if (trigger.parent.result) {
										trigger.parent.result.bool = false;
									}
								} else {
									trigger.cancel();
								}
								if (get.itemtype(trigger.cards) == 'cards') player.gain(trigger.cards, 'gain2');
								if (!player.storage.谲伏) {
									player.storage.谲伏 = [];
								}
								player.storage.谲伏.push(trigger.card.name);
							},
							group: '谲伏_clear',
							subSkill: {
								clear: {
									trigger: { global: 'phaseAfter' },
									silent: true,
									content() {
										delete player.storage.谲伏;
									},
								},
							},
							ai: {
								threaten: 1.8,
							},
						},
						渊贲: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'damageEnd' },
							filter(event, player) {
								if (!event.source) return false;
							},
							forced: true,
							content() {
								var num1 = player.countCards('h');
								var num2 = trigger.source.countCards('h');
								player.draw(num1);
								trigger.source.chooseToDiscard(player.countCards('h'), 'he', true);
								trigger.source.damage();
							},
						},
						移驾: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'damageEnd' },
							content() {
								trigger.player.useCard(game.createCard('jueying'), trigger.player);
								trigger.player.addTempSkill('移驾2', { player: 'equipAfter' });
								player.draw(2);
								trigger.player.gain(game.createCard('xietianzi'));
							},
						},
						移驾2: {
							trigger: {
								player: 'equipBegin',
							},
							audio: 'ext:洪荒ol/audio:2',
							forced: true,
							filter(event, player) {
								return player.countCards('e', { subtype: 'equip3' }) && get.subtype(event.card) == 'equip3';
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
							},
							ai: {
								effect: {
									player(card, player, target) {
										if (get.subtype(card) == 'equip1') return [1, 10];
									},
								},
							},
						},
						定基: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('定基')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw(5 + result.targets[0].countCards('e', (card) => get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4'));
									var hs = result.targets[0].getCards('h');
									if (hs.length) result.targets[0].gain(game.createCard(hs.randomGet()), 'draw');
									result.targets[0].chooseToUse('定基:是否使用一张卡牌？');
								}
							},
						},
						荷怜清盈谮构: {
							audio: 4,
							trigger: { global: 'useCardAfter' },
							usable: 2,
							filter(event, player) {
								return get.type(event.card) != 'equip';
							},
							init(player) {
								player.storage.荷怜清盈谮构 = {};
							},
							content() {
								'step 0';
								if (!player.storage.荷怜清盈谮构.say) {
									player.storage.荷怜清盈谮构.say = true;
									var chats = ['<span style="color: #8A2BE2;">夏蝉聒噪,深林空鸣徒增三分暑气.</span>', '<span style="color: #8A2BE2;">掷珠打鸣蝉,少烦声而引一丝清风.</span>', '<span style="color: #8A2BE2;">夏蝉啾啾叫声直入耳,深林中空虚鸣响,只增添了三分炎热.</span>', '<span style="color: #8A2BE2;">我手掷珠,擊響蝉鸣,既能稍减烦闷之声,又能引来一丝清风.</span>'];
									chats.forEach((i) => player.say(i));
									var index = 0;
									function playChat() {
										player.say(chats[index]);
										index = (index + 1) % chats.length;
									}
									setInterval(playChat, 3000);
								}
								var list = [];
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].isInPile()) {
										list.push(trigger.cards[i]);
									}
								}
								player.gain(list, 'gain2', 'log');
								player.draw();
								player.chooseControl('选项一', '选项二', '选项三').set('prompt', '谮构<br><br><div class="text"><span style="color: #8A2BE2;">选项一:令' + get.translation(trigger.player) + '失去2点体力</span></div><br><div class="text"><span style="color: #8A2BE2;">选项二:令' + get.translation(trigger.player) + '回复2点体力</span></div><br><div class="text"><span style="color: #8A2BE2;">选项三:你摸4张牌</span></div></br>');
								('step 1');
								if (result.control == '选项一') {
									trigger.player.loseHp(2);
								}
								if (result.control == '选项二') {
									trigger.player.recover(2);
								} else {
									player.draw(4);
								}
							},
						},
						荷怜清盈长姬: {
							audio: 'ext:洪荒ol/audio:2',
							forced: true,
							trigger: { global: 'changeHp' },
							init(player) {
								player.storage.荷怜清盈长姬 = {};
							},
							content() {
								player.addTempSkill('荷怜清盈长姬2');
							},
						},
						荷怜清盈长姬2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'phaseEnd' },
							content() {
								'step 0';
								if (!player.storage.荷怜清盈长姬.say) {
									player.storage.荷怜清盈长姬.say = true;
									var chats = ['<span style="color: #8A2BE2;">众弟皆小,长姐唯大,雷霆雨露皆为姊恩.</span>', '<span style="color: #8A2BE2;">夏雾薄暮,先觉暑气者,塘中亭荷也.</span>', '<span style="color: #8A2BE2;">众弟皆小者,惟长姐唯为大也.雷霆之威,洒之于疾风暴雨之中,乃为姊恩所赐予.</span>', '<span style="color: #8A2BE2;">夏日之晨,朝露犹在,微风轻拂,雾气弥漫于水面之上,若隐若现之间,塘中亭荷已悄然展露其姿.叶如碧玉,脉络清晰可见,晶莹剔透的露珠滚动其上,仿佛珍珠落盘,悦耳动听.花苞含苞待放,犹如少女般羞涩,微微露出粉色的花瓣,让人期待其盛开时的惊艳.此时的亭荷,宛如一幅水墨画,静谧而优雅.其清香随风飘散,沁人心脾,使人忘却炎热,感受到夏日的独特韵味.</span>', '<span style="color: #8A2BE2;">当夏季迷雾逐渐散去,黄昏降临之际,最先感受到炎热气息的,莫过于池塘中那座旗亭上的荷花了.在盛夏季节,炎炎烈日之下,荷叶在塘中漂浮,散发出清新的气息,宛如自然界中的绿色仙子.她们如同迷蒙的夏雾,飘忽不定,犹如梦幻的美景一般.亭中的荷花,不仅是盛夏时分的象征,更是提醒人们高温天气的先兆.当人们静静地走在荷塘旁边,沿着亭台一步步迈进,便能够感受到夏日的炙热,因为塘中的荷叶早已被太阳的火炉烤得滚烫.人们或欣赏荷花,或避开荷叶,以此来逃避炎热的酷暑.然而,荷花的存在也是夏日景致中的一种美丽.她们以她们特有的花形和淡雅的香气,点缀着盛夏的世界,使得人们在炎热中也能感受到一份清凉和惊喜.无论是荷塘边的人们还是塘中的荷花,皆和谐共存于炙热的夏季,为人们带来一丝别样的慰藉.因此,当夏雾淡漠而来,太阳的骄阳也随之而至时,最先觉察到的便是静谧的塘中亭荷.她们以她们独特的姿态和花香,给人们带来凉爽和欢乐,成为夏日中最美丽的画卷之一.</span>'];
									chats.forEach((i) => player.say(i)); //异步台词
									var index = 0;
									function playChat() {
										player.say(chats[index]);
										index = (index + 1) % chats.length;
									}
									setInterval(playChat, 5000);
								}
								player.gainMaxHp();
								player.recover();
								player.draw(3);
								player.gain([game.createCard('sha'), game.createCard('shan')]);
								player.$draw(2);
								player.chooseTarget(true).ai = function (target) {
									return -get.attitude(player, target);
								};
								('step 1');
								player.discardPlayerCard(result.targets[0], 2, true);
							},
						},
						逆转官渡成略: {
							mark: true,
							marktext: '<span style="color: #FFD700;font-size:12px;text-align:center;">成略</span>',
							intro: {
								content(storage, player, skill) {
									'你使用颜色为' + get.translation(player.storage.逆转官渡成略) + '的牌无距离和次数限制';
								},
							},
							mod: {
								cardUsable(card, player) {
									if (player.storage.逆转官渡成略 == get.color(card)) return Infinity;
								},
								targetInRange(card, player) {
									if (player.storage.逆转官渡成略 == get.color(card)) return true;
								},
							},
							enable: 'phaseUse',
							usable: 2,
							audio: 'ext:洪荒ol/audio:2',
							content() {
								'step 0';
								game.JPG('xuyou逆转官渡dhtx3', 2000);
								('step 1');
								game.JPG('xuyou逆转官渡dhtx1', 1800);
								player.draw(2);
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'huoshaolianying' }, list);
								('step 2');
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
								}
								player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'draw');
								player.chooseControl('黑色', '红色').set('prompt', '成略<br><br><div class="text"><span style="color:black;text-align:center;">选项一:黑色</span></div><br><div class="text"><span style="color:red;text-align:center;">选项二:红色</span></div>');
								('step 3');
								if (result.control == '黑色') {
									player.storage.逆转官渡成略 = 'black';
									player.markSkill('逆转官渡成略');
								} else {
									player.storage.逆转官渡成略 = 'red';
									player.markSkill('逆转官渡成略');
								}
							},
						},
						逆转官渡恃才: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'useCardAfter',
							},
							usable: 3,
							content() {
								game.JPG('xuyou逆转官渡dhtx2', 2500);
								var list = [];
								for (var i = 0; i < 3; i++) {
									list.push(get.type(ui.cardPile.childNodes[i]));
								}
								var n = Math.max(1, new Set(list).size);
								player.draw(2 * n);
							},
						},
						逆转官渡寸目: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'drawBegin',
							},
							forced: true,
							group: '逆转官渡寸目say',
							content() {
								'step 0';
								if (ui.cardPile.childElementCount == 0 || trigger.num > ui.cardPile.childElementCount) {
									game.log('牌堆还有', ui.cardPile.childElementCount, '张牌,进行洗牌');
									var cards = get.cards(ui.cardPile.childElementCount + 1);
									for (var i = 0; i < cards.length; i++) {
										ui.cardPile.insertBefore(cards[i], ui.cardPile.childNodes[get.rand(ui.cardPile.childElementCount)]);
									}
									game.updateRoundNumber();
								}
								trigger.cancel();
								event.list = [];
								event.num = 0;
								('step 1');
								event.list.push(ui.cardPile.removeChild(ui.cardPile.lastChild));
								event.num++;
								if (event.num < trigger.num) event.redo();
								('step 2');
								if (ui.cardPileNumber) ui.cardPileNumber.innerHTML = game.roundNumber + '轮 剩余牌: ' + ui.cardPile.childNodes.length;
								player.gain(event.list);
								player.$draw(trigger.num);
								game.log(player, '从牌堆底摸' + get.cnNumber(trigger.num) + '张牌');
							},
						},
						逆转官渡寸目say: {
							trigger: {
								player: 'drawBegin',
							},
							silent: true,
							_priority: 2024,
							init(player) {
								player.storage.逆转官渡寸目say = {};
							},
							content() {
								if (!player.storage.逆转官渡寸目say.say) {
									player.storage.逆转官渡寸目say.say = true;
									var chats = ['<span style="color: #f5f5f5;">阿瞒所胜者不在兵将,而在我许子远.</span>', '<span style="color: #f5f5f5;">有我于斯,阿瞒留郭、荀之流何用？</span>', '<span style="color: #f5f5f5;">阿瞒,若无我,你可进得了这邺城？</span>', '<span style="color: #f5f5f5;">尔等无谋少智之辈,何得做我主公.</span>', '<span style="color: #f5f5f5;">阿瞒无谋少智,可依吾策施为.</span>', '<span style="color: #f5f5f5;">精兵锐进,直驱乌巢,此间大局可定.</span>'];
									const chatXins = ['<span style="color: #005162;">阿瞒乃是败者,非在兵将之能力上,而在于许子远之胜.</span>', '<span style="color: #005162;">有我在此,阿瞒何需依赖郭、荀等之徒？</span>', '<span style="color: #005162;">有我於此,阿瞞留下郭、荀等人為何用？</span>', '<span style="color: #005162;">阿瞒,若无子远之助,汝可有此能耐入得此邺城乎？</span>', '<span style="color: #005162;">尔等无谋少智之辈,安能得以为我之主公乎？</span>', '<span style="color: #005162;">汝辈无何学识,愚迷未谙大道.吾奈尔何以为主公？</span>', '<span style="color: #005162;">阿瞒无谋少智,深谋远虑尚需吾策.</span>', '<span style="color: #005162;">精兵锐进,锐意进取,直驱乌巢,此间定大局.</span>', '<span style="color: #005162;">彼敌若知我军来袭,必派重兵防守.然我军精锐之师,以锐不可当之势,定能破之,直取乌巢.</span>'];
									chats = [...chats, ...chatXins];
									var index = 0;
									function playChat() {
										player.say(chats[index]);
										index = (index + 1) % chats.length;
									}
									setInterval(playChat, 5000);
								}
							},
						},
						清洛月泷洛神say: {
							trigger: {
								player: 'phaseBegin',
							},
							silent: true,
							_priority: 2024,
							init(player) {
								player.storage.清洛月泷洛神say = {};
							},
							content() {
								if (!player.storage.清洛月泷洛神say.say) {
									player.say = function (str) {
										var dialog = ui.create.dialog('hidden');
										dialog.classList.add('static');
										dialog.add('<div class="text" style="word-break:break-all;display:inline">' + str + '</div>');
										dialog.classList.add('popped');
										ui.window.appendChild(dialog);
										var width = dialog.content.firstChild.firstChild.offsetWidth;
										if (width < 190) {
											dialog._mod_height = -16;
										} else {
											dialog.content.firstChild.style.textAlign = 'left';
										}
										dialog.style.width = width + 16 + 'px';
										var refnode;
										if (this.node && this.node.avatar && this.parentNode == ui.arena) {
											refnode = this.node.avatar;
										}
										if (refnode) {
											lib.placePoppedDialog(dialog, {
												clientX: (ui.arena.offsetLeft + this.offsetLeft + refnode.offsetLeft + refnode.offsetWidth / 2) * game.documentZoom,
												clientY: (ui.arena.offsetTop + this.offsetTop + refnode.offsetTop + refnode.offsetHeight / 4) * game.documentZoom,
											});
										} else {
											lib.placePoppedDialog(dialog, {
												clientX: (this.offsetLeft + this.offsetWidth / 2) * game.documentZoom,
												clientY: (this.offsetTop + this.offsetHeight / 4) * game.documentZoom,
											});
										}
										if (dialog._mod_height) {
											dialog.content.firstChild.style.padding = 0;
										}
										var strLength = str.length;
										setTimeout(function () {
											dialog.delete();
										}, 300 * strLength);
										var info = [get.translation(this.name) || this.nickname, str];
										lib.chatHistory.push(info);
										if (_status.addChatEntry) {
											if (_status.addChatEntry._origin.parentNode) {
												_status.addChatEntry(info, false);
											} else {
												delete _status.addChatEntry;
											}
										}
									};
									player.storage.清洛月泷洛神say.say = true;
									var chats = ['<span style="color: #3c78d8;">鸣鸥掠月东南去,空留花落此夜长.</span>', '<span style="color: #3c78d8;">洛水潮涨夏澜生,三十六月露华浓.</span>', '<span style="color: #3c78d8;">夏花灿烂倾国色,空叹韶华随江流.</span>', '<span style="color: #3c78d8;">小荷挂角蜻蜓立,冼落一池好颜色.</span>', '<span style="color: #3c78d8;">翩若惊鸿,婉若游龙.荣曜秋菊,华茂春松.髣髴兮若轻云之蔽月,飘飖兮若流风之回雪.远而望之,皎若太阳升朝霞;迫而察之,灼若芙蕖出渌波.穠纤得衷,修短合度.肩若削成,腰如约素.延颈秀项,皓质呈露.芳泽无加,铅华弗御.云髻峨峨,修眉联娟.丹唇外朗,皓齿内鲜.明眸善睐,靥辅承权.瓌姿艳逸,仪静体闲.柔情绰态,媚于语言.奇服旷世,骨像应图.披罗衣之璀粲兮,珥瑶碧之华琚.戴金翠之首饰,缀明珠以耀躯.践远游之文履,曳雾绡之轻裾.微幽兰之芳蔼兮,步踟蹰于山隅.于是忽焉纵体,以遨以嬉.左倚采旄,右荫桂旗.攘皓腕于神浒兮,采湍濑之玄芝.</span>', '<span style="color: #3c78d8;">余情悦其淑美兮,心振荡而不怡.无良媒以接欢兮,托微波而通辞.愿诚素之先达兮,解玉佩以要之.嗟佳人之信修兮,羌习礼而明诗.抗琼珶以和予兮,指潜渊而为期.执眷眷之款实兮,惧斯灵之我欺.感交甫之弃言兮,怅犹豫而狐疑.收和颜而静志兮,申礼防以自持.</span>', '<span style="color: #3c78d8;">于是洛灵感焉,徙倚彷徨.神光离合,乍阴乍阳.竦轻躯以鹤立,若将飞而未翔.践椒涂之郁烈,步蘅薄而流芳.超长吟以永慕兮,声哀厉而弥长.尔乃众灵杂沓,命俦啸侣.或戏清流,或翔神渚,或采明珠,或拾翠羽.从南湘之二妃,携汉滨之游女.叹匏瓜之无匹兮,咏牵牛之独处.扬轻袿之猗靡兮,翳修袖以延伫.体迅飞凫,飘忽若神.凌波微步,罗袜生尘.动无常则,若危若安;进止难期,若往若还.转眄流精,光润玉颜.含辞未吐,气若幽兰.华容婀娜,令我忘餐.</span>', '<span style="color: #3c78d8;">于是屏翳收风,川后静波.冯夷鸣鼓,女娲清歌.腾文鱼以警乘,鸣玉銮以偕逝.六龙俨其齐首,载云车之容裔.鲸鲵踊而夹毂,水禽翔而为卫.于是越北沚,过南冈,纡素领,回清扬.动朱唇以徐言,陈交接之大纲.恨人神之道殊兮,怨盛年之莫当.抗罗袂以掩涕兮,泪流襟之浪浪.悼良会之永绝兮,哀一逝而异乡.无微情以效爱兮,献江南之明珰.虽潜处于太阴,长寄心于君王.忽不悟其所舍,怅神宵而蔽光.于是背下陵高,足往神留.遗情想像,顾望怀愁.冀灵体之复形,御轻舟而上溯.浮长川而忘反,思绵绵而增慕.夜耿耿而不寐,沾繁霜而至曙.命仆夫而就驾,吾将归乎东路.揽騑辔以抗策,怅盘桓而不能去.</span>'];
									const chatXins = ['<span style="color: #00ffff;">鸣鸥掠月东南去,空留花落此夜长.独对星空思无量,旧事如梦难遗忘.月色如水洒大地,鸣鸥声声扰人心.花落满地似离别,此夜漫漫情难禁.闲庭信步忆往昔,欢声笑语犹在耳.如今独行留空庭,泪眼朦胧花落景.世事如梦易散去,时光匆匆不待人.此夜花落情难抑,愿君共我醉明月.</span>', '<span style="color: #00ffff;">洛水潮涨夏澜生,金秋桂子落尘轻.玉宇澄清星汉明,三十六月露华浓.松风竹韵韵流泉,砚田笔耕情更浓.素月凝霜书卷溢,闲窗寂寂思无穷.</span>', '<span style="color: #00ffff;">夏花灿烂映朝霞,倾国倾城色无瑕.繁花似锦满园春,空叹流年似水逝.落花飘零入流水,岁月匆匆难挽留.世间繁华皆过客,唯有青春不老去.</span>', '<span style="color: #00ffff;">荷叶尖尖,初露水面,似有小荷之花缀其角上.蜻蜓飞舞,轻立荷尖,一动不动,如画之中.夕阳西下,洗尽世间浮华,唯留自然之色.此时,蜻蜓与荷池相互映衬,宛如一幅水墨画卷,清新脱俗,令人心旷神怡.</span>', '<span style="color: #00ffff;">翩若惊鸿,婉若游龙,荣曜秋菊,华茂春松.此乃佳人兮,姿容绝世,其神韵兮,清雅脱俗.轻云蔽月,流风回雪,形容之妙,世间罕有.远望之,如朝霞升腾,太阳初升;近观之,似绿荷出水,芙蕖立于渌波.其身材兮,穠纤得衷,修短合度,削成之肩,约素之腰,颈秀而项长,皓质呈露.芳泽无加,铅华弗御,云髻峨峨,修眉联娟.丹唇外朗,皓齿内鲜,明眸善睐,靥辅承权.瓌姿艳逸,仪静体闲,柔情绰态,媚于语言.此佳人兮,服饰奇特,旷世无伦.披罗衣之璀粲兮,珥瑶碧之华琚.金翠首饰,缀以明珠,践远游之文履,曳雾绡之轻裾.微幽兰之芳蔼兮,步于山隅,徘徊顾盼,流连忘返.于是忽焉纵体,以遨以嬉.佳人迈动轻盈之步,左倚采旄,右荫桂旗.神浒之上,攘皓腕以采撷玄芝.其神态兮,悠然自得,其情态兮,妩媚动人.此乃佳人矣,世间罕见,其风姿绝世,其神韵动人.愿永世长存兮,此美人之骨像应图.</span>', '<span style="color: #00ffff;">余情荡漾于佳人之淑美兮,心如波涛而不舒畅.因无良善之媒而得欢愉兮,托微薄之波而通言辞.愿真心素愿先达于君兮,解玉佩以待我之召唤.嗟此佳人之信实兮,既知礼又明诗.举琼珶以和于我兮,指深渊以为期.执眷眷之情实兮,惧斯灵有欺我之疑.感交甫之失言兮,怅然犹豫而狐疑.收和颜以静我心志兮,申礼教以自我约束.其容冶艳如春水兮,其质秀丽如秋月.其行高洁而贞正兮,其志坚定如松柏.吾爱慕之情何尝忘兮,此佳人常在我心间.愿此情长久兮,如山如水永无变.</span>', '<span style="color: #00ffff;">于是洛水之神感吾情深,徙倚徘徊,神光离合,乍阴乍阳.身如鹤立,竦轻躯以立,欲飞而未翔.踏椒涂之郁烈,步蘅薄而流芳.神吟长慕,声哀厉而弥长.众灵纷沓而来,命俦啸侣,或戏清流,或翔神渚,或采明珠,或拾翠羽.有南湘之二妃,携汉滨之游女,叹匏瓜之无匹兮,咏牵牛之独处.扬轻袿之猗靡兮,翳修袖以延伫.体迅飞凫,飘忽若神,凌波微步,罗袜生尘.行动无定之状,若危若安,进止难测,若往若还.转盼流精,光润玉颜,含辞未吐,气若幽兰.华容婀娜,令我忘餐,其神韵之美,难以言表.</span>', '<span style="color: #00ffff;">于是风止雨停,天地间一片宁静.屏翳收起风,川后平息波涛.冯夷击鼓,女娲清唱.文鱼腾跃以警戒,玉銮鸣响以偕同.六龙齐头并进,载着云车迤逦行.鲸鲵踊跃而夹护,水禽翔舞而为卫.越过北沚,经过南冈,素领轻扬,清眸流盼.朱唇微动,徐徐言说,陈交游之大纲.恨人神之道殊,怨青春之不永.挥泪掩袖以至涕泪滂沱,感离别之永绝,哀一逝而远隔.无微情以效忠贞之节,献上明珰于江南.虽身在太阴之下,心长系于君王.转瞬已失其所,神宵蔽光而无所见.背山下而登高,足虽行而神留存.遗情留连,顾望怀愁,冀灵体之复形,御轻舟而上溯.浮长川而忘返,思绵绵而增慕.夜漫长而不寐,繁霜降而犹曙.命仆夫而就驾,吾将归乎东路.揽辔举鞭而抗策,怅然盘桓而不忍离去.长途漫漫,归心不已,此别离之悲,何日得再聚首？</span>', '<span style="color: #00ffff;">于是屏翳收风,川水平静无波澜.冯夷挥舞鼓声响亮,女娲高歌清脆悦耳.腾文鱼跃出水面,提醒着出行的人们,鸣玉銮随之替伴行.六龙庄重地并列着头部,托起了轻盈的云车.鲸鲵翻滚着,夹住了车轮,水禽翱翔着,守卫在车前.于是越过北沚,越过南冈,发了质朴的领巾,回首向清扬处眺望.动情的朱唇慢慢吐出话语,陈述着交接的大纲.悔恨人与神的道路不同,怨怨相思年华不留人.抬起罗袖来遮住眼泪,泪水流淌着愁思滔滔.哀悼良友会面不再,伤心离异漂泊他乡.虽然在阴暗处隐藏身影,但心中始终怀念君王.忽然意识到自己留下了什么,心中悲伤漫过了光芒.于是背着下陵高岭,脚步向神秘之地进发.思念充斥着想象,回头望向前路愁绪上涌.夜晚漫漫不能入睡,沾满了浓厚的霜露直到天明.命仆人来备驾,我将回归东方之路.握紧马缰抵挡思绪,徘徊不决不能离开.</span>'];
									chats = [...chats, ...chatXins];
									var index = 0;
									function playChat() {
										player.say(chats[index]);
										index = (index + 1) % chats.length;
									}
									setInterval(playChat, 300 * chats[index].length);
								}
							},
						},
						清洛月泷倾国: {
							audio: 'ext:洪荒ol/audio:2',
							group: '清洛月泷倾国2',
							enable: ['chooseToRespond'],
							filterCard(card) {
								return get.color(card) == 'black';
							},
							viewAs: { name: 'shan' },
							viewAsFilter(player) {
								if (!player.countCards('h', { color: 'black' })) return false;
							},
							prompt: '将一张黑色手牌当闪打出',
							check() {
								return 1;
							},
							ai: {
								respondShan: true,
								skillTagFilter(player) {
									if (!player.countCards('h', { color: 'black' })) return false;
								},
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondShan') && current < 0) return 0.6;
									},
								},
							},
						},
						清洛月泷倾国: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							filter(event, player) {
								return player.countCards('he', {
									color: 'black',
								});
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('清洛月泷倾国')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var gainCards = [];
									for (
										var i = 0;
										i <
										player.countCards('he', {
											color: 'black',
										});
										i++
									) {
										gainCards.push(game.createCard('shan'));
									}
									result.targets[0].gain(gainCards, 'draw');
								}
							},
						},
						清洛月泷洛神: {
							audio: 4,
							group: '清洛月泷洛神say',
							trigger: { player: 'phaseBegin' },
							forced: true,
							content() {
								'step 0';
								player.judge(function (card) {
									if (get.color(card) == 'black') return 1.5;
									return -1.5;
								}, ui.special);
								('step 1');
								if (result.judge > 0) {
									event.card = result.card;
									if (get.position(event.card) == 's') {
										player.gain(event.card);
										player.$draw();
									}
									player.draw();
									player.chooseBool('是否再次发动【洛神】？');
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									event.goto(0);
								}
							},
						},
						姐妹情深星舞say: {
							trigger: { player: 'phaseDiscardBegin' },
							silent: true,
							_priority: 2024,
							init(player) {
								player.storage.姐妹情深星舞say = {};
							},
							content() {
								if (!player.storage.姐妹情深星舞say.say) {
									player.say = function (str) {
										var dialog = ui.create.dialog('hidden');
										dialog.classList.add('static');
										dialog.add('<div class="text" style="word-break:break-all;display:inline">' + str + '</div>');
										dialog.classList.add('popped');
										ui.window.appendChild(dialog);
										var width = dialog.content.firstChild.firstChild.offsetWidth;
										if (width < 190) {
											dialog._mod_height = -16;
										} else {
											dialog.content.firstChild.style.textAlign = 'left';
										}
										dialog.style.width = width + 16 + 'px';
										var refnode;
										if (this.node && this.node.avatar && this.parentNode == ui.arena) {
											refnode = this.node.avatar;
										}
										if (refnode) {
											lib.placePoppedDialog(dialog, {
												clientX: (ui.arena.offsetLeft + this.offsetLeft + refnode.offsetLeft + refnode.offsetWidth / 2) * game.documentZoom,
												clientY: (ui.arena.offsetTop + this.offsetTop + refnode.offsetTop + refnode.offsetHeight / 4) * game.documentZoom,
											});
										} else {
											lib.placePoppedDialog(dialog, {
												clientX: (this.offsetLeft + this.offsetWidth / 2) * game.documentZoom,
												clientY: (this.offsetTop + this.offsetHeight / 4) * game.documentZoom,
											});
										}
										if (dialog._mod_height) {
											dialog.content.firstChild.style.padding = 0;
										}
										var strLength = str.length;
										setTimeout(function () {
											dialog.delete();
										}, 300 * strLength);
										var info = [get.translation(this.name) || this.nickname, str];
										lib.chatHistory.push(info);
										if (_status.addChatEntry) {
											if (_status.addChatEntry._origin.parentNode) {
												_status.addChatEntry(info, false);
											} else {
												delete _status.addChatEntry;
											}
										}
									};
									player.storage.姐妹情深星舞say.say = true;
									var chats = ['<span style="color: #11ca5d;">我们姐妹,最是情深.</span>', '<span style="color: #11ca5d;">我们的佩剑,可不是摆设!</span>', '<span style="color: #11ca5d;">小女迫不得已,还望您能见谅.</span>', '<span style="color: #11ca5d;">哼!尔等欺人太甚!</span>', '<span style="color: #11ca5d;">从明后而嬉游兮,登层台以娱情.见太府之广开兮,观圣德之所营.建高门之嵯峨兮,浮双阙乎太清.立中天之华观兮,连飞阁乎西城.临漳水之长流兮,望园果之滋荣.仰春风之和穆兮,听百鸟之悲鸣.</span>', '<span style="color: #11ca5d;">天云垣其既立兮,家愿得而获逞.扬仁化于宇内兮,尽肃恭于上京.惟桓文之为盛兮,岂足方乎圣明!休矣美矣!惠泽远扬.翼佐我皇家兮,宁彼四方.同天地之规量兮,齐日月之晖光.永贵尊而无极兮,等年寿于东王.</span>', '<span style="color: #11ca5d;">从明后以嬉游兮,登层台以娱情.见太府之广开兮,观圣德之所营.建高门之嵯峨兮,浮双阙乎太清.立中天之华观兮,连飞阁乎西城.临漳水之长流兮,望园果之滋荣.立双台于左右兮,有玉龙与金凤.揽二乔于东南兮,乐朝夕之与共.俯皇都之宏丽兮,瞰云霞之浮动.欣群才之来萃兮,协飞熊之吉梦.仰春风之和穆兮,听百鸟之悲鸣.</span>', '<span style="color: #11ca5d;">云天亘其既立兮,家愿得乎双逞.扬仁化于宇宙兮,尽肃恭于上京.惟桓文之为盛兮,岂足方乎圣明？休矣美矣!惠泽远扬.翼佐我皇家兮,宁彼四方.同天地之规量兮,齐日月之辉光.永贵尊而无极兮,等君寿于东皇.御龙旗以遨游兮,回鸾驾而周章.恩化及乎四海兮,嘉物阜而民康.愿斯台之永固兮,乐终古而未央!</span>'];
									const chatXins = ['<span style="color: #11caa0;">吾辈姐妹,最是情深.于闺房之中,共度时光,笑谈风月,情意浓浓.姊妹之间,情深似海,无论风雨如何,始终相伴左右.如若有所不幸,亦有彼此安慰之力.岁月荏苒,时光如梭,姐妹情深依旧,相伴相随,永世不渝.</span>', '<span style="color: #11caa0;">吾之佩剑,岂容虚设!剑者,武之魂,勇之源.非徒具饰物,实乃护身之宝,决胜之器.剑在吾手,如鹰之翼,如虎之爪,可破千军,可挽狂澜.是故,此剑非但非摆设,实乃吾之守护神,骁勇之虎.</span>', '<span style="color: #11caa0;">小女孤弱难支,情非得已,恳请您见谅.居此境况,如履薄冰,唯愿君不弃,恕我之过.</span>', '<span style="color: #11caa0;">哼!尔等欺人太甚,岂容尔肆无忌惮!我等何罪之有,竟遭此无理之对待.世间公理何在,正义何在!须知,忍耐有限度,正义永不止.</span>', '<span style="color: #11caa0;">从明后而嬉游兮,登层台以娱情.春光明媚,芳草鲜美,群游于层台之上,乐而忘忧.仰望苍穹,俯瞰人间,万象更新,恍如仙境.见太府之广开兮,观圣德之所营.皇家宫殿宏大而壮丽,殿宇嵯峨,琼楼玉宇,云蒸霞蔚.帝王的深谋远虑和卓越才能,营造了这宏伟壮观的景象.建高门之嵯峨兮,浮双阙乎太清.华美的宫殿巍峨耸立,高耸入云,犹如仙宫.立中天之华观兮,连飞阁乎西城.皇城之内,飞檐画栋,金碧辉煌.长街短巷,人潮涌动,商贾云集.巍峨的城楼连接着西城,宛如一幅壮丽的画卷.临漳水之长流兮,望园果之滋荣.漳水如带,流淌不息.皇家园林繁花似锦,果实累累.春风吹过,百花争艳,香气四溢.听百鸟之悲鸣,声声入耳,如诗如画.仰春风之和穆兮,犹觉心旷神怡.春光无限好,风和日丽,令人心旷神怡.置身其中,恍若置身仙境,忘却尘世烦恼.然此景之美,非吾等所能尽识也.吾辈尚需继续修行,提升自身境界,方能真正领略太府之堂奥,领悟圣德之所营.愿吾等能以此鉴,不断精进,以求达到更高的境界.</span>', '<span style="color: #11caa0;">天云垣立,家愿得偿.仁风扬于四海,恭敬于上都.媲美于桓文,岂能及此圣明!休矣,美矣!惠泽远播.翼佐皇家,安靖四夷.与天地同规,日月齐光.贵尊无极,年寿与东王等.此乃我朝之盛景,诚为万世之楷模.</span>', '<span style="color: #11caa0;">从明后以嬉游兮,登层台以娱情.览皇家之盛景兮,观圣德之所营.巍巍高门兮嵯峨耸立,双阙浮于太清兮凌云端.华观中天兮连阁飞城,西城之美景兮如画图.临漳水之长流兮,望园中之繁花.左右双台兮矗立左右,玉龙金凤兮翱翔云霄.二乔倾国兮东南之美,朝夕相伴兮佳人笑.俯瞰皇都之宏丽兮,瞰云霞浮动兮如锦绣.欣群才之来萃兮,协飞熊之吉梦.春风和穆兮百花盛开,百鸟悲鸣兮乐章起.此皆盛世之景象,我朝英才之荟萃.皇都之美,如诗如画,令人心旷神怡.愿此盛世永驻,万世长存!</span>', '<span style="color: #11caa0;">云天亘立,家愿双逞.仁化溢宇宙,恭敬于上都.媲美于桓文,岂能及此圣明!休矣,美矣!惠泽远播.翼佐皇家,安靖四夷.皇化遍及天地,物阜民康.御龙旗遨游于四海,鸾驾周游于天下.皇恩浩荡,普照万民.愿斯台之永固,乐未央于千古!</span>', '<span style="color: #11caa0;">从明后以嬉游兮,登层台之高阁,见太府之广开兮,观圣德之所营.建高门之嵯峨兮,浮双阙乎云霄,立中天之华观兮,连飞阁乎四方.临漳水之长流兮,望园中之繁花,立双台于左右兮,有玉龙与金凤.揽二乔于东南兮,乐朝夕之韶华,俯皇都之宏丽兮,瞰云霞之浮动.欣群才之来萃兮,协飞熊之吉梦,仰春风之和穆兮,听百鸟之悲鸣.云天亘立,家愿得偿.扬仁化于宇宙兮,尽肃恭于上京.媲美于桓文兮,岂足方乎圣明!休矣美矣!惠泽远扬.翼佐我皇家兮,宁彼四方.皇化遍及天地兮,物阜民康.御龙旗以遨游兮,施恩化以普泽.愿斯台之永固兮,乐终古而未有穷!</span>'];
									chats = [...chats, ...chatXins];
									var index = 0;
									function playChat() {
										player.say(chats[index]);
										index = (index + 1) % chats.length;
									}
									setInterval(playChat, 300 * chats[index].length);
								}
							},
						},
						姐妹情深星舞: {
							audio: 4,
							group: '姐妹情深星舞say',
							trigger: { player: 'phaseDiscardBegin' },
							content() {
								'step 0';
								game.JPG('daxiaoqiao姐妹情深dhtx', 2000);
								player.chooseTarget(get.prompt('姐妹情深星舞')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].discard(result.targets[0].getCards('he', { type: 'equip' }));
									var suits = player.getCards('he').map((i) => i.suit);
									result.targets[0].damage(Math.max(2, new Set(suits).size));
								}
							},
						},
						姐妹情深天香: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'damageBegin' },
							content() {
								'step 0';
								game.JPG('daxiaoqiao姐妹情深txdh', 2000);
								trigger.cancel();
								player.chooseTarget(get.prompt('姐妹情深天香')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var num = 1 + trigger.num;
									result.targets[0].chooseToDiscard(
										player.countCards('he', {
											suit: 'heart',
										}),
										'he',
										true
									);
									result.targets[0].loseHp(num);
								}
								player.chooseTarget(get.prompt('姐妹情深天香')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									result.targets[0].draw(5);
								}
							},
						},
						姐妹情深流离: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { target: 'useCardToBegin' },
							filter(event, player) {
								return event.card.name == 'sha';
							},
							content() {
								'step 0';
								game.JPG('daxiaoqiao姐妹情深dhtx', 2000);
								trigger.cancel();
								player.chooseTarget(get.prompt('姐妹情深流离')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var num =
										1 +
										player.countCards('he', {
											suit: 'diamond',
										});
									for (var i = 0; i < num; i++) {
										trigger.player.useCard({ name: 'sha' }, result.targets[0], false);
									}
								}
							},
						},
						屡破羌胡精策: {
							trigger: { player: 'phaseEnd' },
							forced: true,
							filter(event, player) {
								return player.countUsed();
							},
							content() {
								player.draw(2 * player.countUsed());
								player.changeHujia();
							},
							audio: 'ext:洪荒ol/audio:2',
							init(player) {
								player.storage.屡破羌胡精策 = true;
							},
							intro: {
								content(storage, player) {
									if (_status.currentPhase == player) return '已使用' + player.countUsed() + '张牌';
								},
							},
						},
						道祖: {
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += 4;
							},
							ai: {
								threaten: 1.6,
							},
							group: ['daozu2', 'daozu3', 'daozu4', 'daozu5', 'daozu6'],
						},
						daozu2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseDiscardBefore',
							},
							forced: true,
							content() {
								trigger.untrigger();
								trigger.finish();
							},
						},
						daozu3: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'shaBegin',
							},
							filter(event, player) {
								return get.color(event.card) == 'red';
							},
							content() {
								player.gainMaxHp();
								player.recover();
							},
						},
						daozu4: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'shaBegin',
							},
							filter(event, player) {
								return get.color(event.card) == 'black';
							},
							content() {
								player.getStat().card.sha--;
								player.draw(3);
							},
						},
						daozu5: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phasejudgeBegin',
							},
							forced: true,
							content() {
								trigger.untrigger();
								trigger.finish();
							},
						},
						太极世界: {},
						盘古幡: {
							trigger: {
								player: 'useCardBegin',
							},
							nobracket: true,
							forced: true,
							filter(event, player) {
								return event.targets.length == 1 && get.type(event.card) == 'trick';
							},
							position: 'he',
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('盘古幡'), function (card, player, target) {
										var trigger = _status.event.getTrigger();
										return lib.filter.filterTarget(trigger.card, player, target) && target != trigger.targets[0];
									})
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return ai.get.effect(target, trigger.card, player, player);
									});
								('step 1');
								if (result.bool) {
									trigger.targets.push(result.targets[0]);
								}
							},
							group: ['pangu2', 'pangu3', 'pangu4'],
						},
						pangu2: {
							enable: ['chooseToUse', 'chooseToRespond'],
							prompt: '将一张♥️️牌当顺手牵羊使用',
							position: 'he',
							viewAs: {
								name: 'shunshou',
								suit: 'heart',
								number: 3,
							},
							filterCard(card) {
								return card.suit == 'heart';
							},
							ai: {
								wuxie(target, card, player, viewer) {
									if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
										return 0;
									}
								},
								basic: {
									order: 7.5,
									useful: 4,
									value: 9,
								},
								result: {
									target(player, target) {
										if (get.attitude(player, target) <= 0) return target.countCards('he') > 0 ? -1.5 : 1.5;
										var js = target.getCards('j');
										if (js.length) {
											var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
											if (jj.name == 'shunshou') return 3;
											if (js.length == 1 && ai.get.effect(target, jj, target, player) >= 0) {
												return -1.5;
											}
											return 3;
										}
										return -1.5;
									},
									player(player, target) {
										if (get.attitude(player, target) < 0 && !target.countCards('he')) {
											return 0;
										}
										if (get.attitude(player, target) > 1) {
											var js = target.getCards('j');
											if (js.length) {
												var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
												if (jj.name == 'shunshou') return 1;
												if (js.length == 1 && ai.get.effect(target, jj, target, player) >= 0) {
													return 0;
												}
												return 1;
											}
											return 0;
										}
										return 1;
									},
								},
								tag: {
									loseCard: 1,
									gain: 1,
								},
							},
						},
						pangu3: {
							trigger: {
								global: 'useCardToBegin',
							},
							filter(event, player) {
								if (!event.targets || !event.card) return false;
								var type = get.type(event.card);
								if (type == 'trick' || type == 'delay') {
									return event.target == player && event.player != player;
								}
								return false;
							},
							usable: 1,
							content() {
								'step 0';
								trigger.untrigger();
								trigger.finish();
								('step 1');
								player.draw();
							},
						},
						hunyuan2: {
							trigger: {
								player: 'shaBegin',
							},
							check(event, player) {
								return get.attitude(player, event.target) < 0;
							},
							content() {
								'step 0';
								var target = trigger.target;
								if (target.hasSkill('hunyuan2') == false) {
									var list = [];
									for (var i = 0; i < target.skills.length; i++) {
										if (!get.is.locked(target.skills[i])) {
											list.push(target.skills[i]);
										}
									}
									target.disableSkill('hunyuan2', list);
									target.addSkill('hunyuan3');
								}
							},
						},
						hunyuan1: {
							trigger: {
								player: 'useCard',
							},
							forced: true,
							_priority: 10,
							nobracket: true,
							filter(event, player) {
								return event.card.name == 'sha';
							},
							content() {
								player.addTempSkill('unequip', 'useCardAfter');
							},
							group: ['hunyuan2'],
						},
						hunyuan3: {
							trigger: {
								global: 'phaseAfter',
							},
							forced: true,
							content() {
								player.enableSkill('hunyuan2');
								player.removeSkill('hunyuan3');
							},
							mark: true,
							popup: false,
							intro: {
								content(st, player) {
									var storage = player.disabledSkills.hunyuan2;
									if (storage && storage.length) {
										var str = '失效技能:';
										for (var i = 0; i < storage.length; i++) {
											if (lib.translate[storage[i] + '_info']) {
												str += get.translation(storage[i]) + '、';
											}
										}
										return str.slice(0, str.length - 1);
									}
								},
							},
						},
						daozu6: {
							trigger: { global: 'gameDrawEnd' },
							silent: true,
							popup: false,
							content() {
								if (!player.storage.daozu6) {
									player.storage.daozu6 = true;
									var Tpdiv = ui.create.div(player);
									var tupian = ' ';
									var naka = player.node.avatar.offsetWidth + 6;
									var gaodu = -36;
									if (player.name2) {
										naka *= 2;
									}
									var zuo = 15;
									zuo = naka - 80;
									tupian = tupian + '<img style="position:absolute;width:80px;top:' + gaodu + 'px;left:' + zuo + 'px;" src="extension/洪荒ol/image/hunyuanfuchen.jpg">';
									Tpdiv.innerHTML = tupian;
									ui.updatem(player);
								}
							},
						},
						德经: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								ddjcreateCard = function (name, suit, number, nature) {
									if (typeof name == 'object') {
										nature = name.nature;
										number = name.number;
										suit = null;
										name = name.name;
									}
									if (typeof name != 'string') {
										name = 'sha';
									}
									var noclick = false;
									if (suit == 'noclick') {
										noclick = true;
										suit = null;
									}
									if (typeof suit != 'string') {
										suit = null;
									} else if (suit == 'black') {
										suit = Math.random() < 0.5 ? 'club' : 'spade';
									} else if (suit == 'red') {
										suit = Math.random() < 0.5 ? 'diamond' : 'heart';
									}
									if (typeof number != 'number' && typeof number != 'string') {
										number = Math.ceil(Math.random() * 13);
									}
									var card;
									if (noclick) {
										card = ui.create.card(ui.special, 'noclick', true);
									} else {
										card = ui.create.card(ui.special);
									}
									card.storage.vanish = true;
									return card.init([suit, number, name, nature]);
								};
								var gainCards = ['ren仁', 'yi义', 'li礼', 'zhi智', 'xin信', 'yong勇', 'shu恕', 'cheng诚', 'zhong忠', 'xiao孝', 'ti悌'].map((i) => ddjcreateCard(i, null, 11));
								player.gain(gainCards, 'draw');
							},
						},
						pangu4: {
							trigger: { global: 'gameDrawEnd' },
							silent: true,
							popup: false,
							content() {
								if (!player.storage.pangu4) {
									player.storage.pangu4 = true;
									var Tpdiv = ui.create.div(player);
									var tupian = ' ';
									var naka = player.node.avatar.offsetWidth + 6;
									var gaodu = -36;
									if (player.name2) {
										naka *= 2;
									}
									var zuo = 15;
									zuo = naka - 20;
									tupian = tupian + '<img style="position:absolute;width:80px;top:' + gaodu + 'px;left:' + zuo + 'px;" src="extension/洪荒ol/image/pangufan.jpg">';
									Tpdiv.innerHTML = tupian;
									ui.updatem(player);
								}
							},
						},
						清首: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 3,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('清首'), true).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(result.targets[0], 'he', true);
									event.t = result.targets[0];
								}
								('step 2');
								event.x = result.cards[0].number || 0;
								player.judge();
								('step 3');
								if (result.color == 'red') event.t.damage(2, 'fire');
								if (result.color == 'black') event.t.damage(2, 'thunder');
								var num = Math.abs(result.number - event.x);
								if (num > 0) {
									player.draw(num);
									player.changeHujia(num);
								}
							},
						},
						尊体: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'dyingBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('尊体')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard('he', result.targets[0], 2, 'visible');
									player.recover(player.countCards('he'));
								}
							},
						},
						闪电弯匕: {
							audio: 'ext:洪荒ol/audio:2',
							group: '闪电弯匕2',
							usable: 3,
							nobracket: true,
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								game.mp4('闪电弯匕sptx');
								player.judge();
								('step 1');
								event.a = result.number;
								('step 2');
								player.judge();
								('step 3');
								event.n = result.number;
								('step 4');
								var value = Math.abs(event.a - event.n);
								if (value >= 2 && value <= 9) trigger.target.damage(value, 'thunder');
							},
						},
						闪电弯匕2: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						侠猎: {
							audio: 'ext:洪荒ol/audio:2',
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseDrawBefore' },
							content() {
								'step 0';
								game.mp4('mengbaisptx');
								event.cards = get.cards(5 + player.countCards('he', (c) => c.name == 'sha'));
								('step 1');
								if (event.isMine() == false) {
									event.dialog = ui.create.dialog('侠猎', event.cards);
								}
								('step 2');
								if (event.dialog) event.dialog.close();
								var dialog = ui.create.dialog('侠猎', event.cards);
								player.chooseButton([0, event.cards.length], dialog, true).set('ai', function (button) {
									return get.value(button.link);
								}).filterButton = function (button) {
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										if (get.translation(button.link.name).length == get.translation(ui.selected.buttons[i].link.name).length) return false;
									}
									return true;
								};
								('step 3');
								var cards2 = [];
								for (var i = 0; i < result.buttons.length; i++) {
									cards2.push(result.buttons[i].link);
									cards.remove(result.buttons[i].link);
								}
								player.gain(cards2, 'log');
								event.x = 1 + cards2.length;
								if (cards2.length) player.$gain2(cards2);
								for (var i = 0; i < cards.length; i++) {
									cards[i].discard();
								}
								('step 4');
								player.chooseTarget(get.prompt('侠猎')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 5');
								if (result.bool) {
									for (var i = 0; i < event.x; i++) {
										player.useCard({ name: 'sha' }, result.targets[0], false);
									}
								}
							},
							ai: {
								threaten: 1.2,
							},
						},
						将攻: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filterTarget(card, player, target) {
								return target != player && target.countCards('he');
							},
							content() {
								'step 0';
								game.mp4('mengbaisptx');
								player.discardPlayerCard('he', target, 'visible');
								('step 1');
								player.gain(game.createCard(result.cards[0]));
								player.$draw();
							},
							ai: {
								threaten: 1.5,
								result: {
									target(player, target) {
										return -target.countCards('h');
									},
								},
								order: 10,
								expose: 0.4,
							},
						},
						//装备技能
						wufengjian_skill: {
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return event.card.name == 'sha';
							},
							content() {
								player.chooseToDiscard('he', true);
							},
						},
						yinfengjia_skill: {
							trigger: {
								player: 'damageBefore',
							},
							forced: true,
							_priority: 15,
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick';
							},
							content() {
								trigger.num++;
							},
						},
						yexingyi_skill: {
							mod: {
								targetEnabled(card) {
									if ((get.type(card) == 'trick' || get.type(card) == 'delay') && get.color(card) == 'black') return false;
								},
							},
						},
						caochuan_skill: {
							trigger: {
								target: 'useCardToBefore',
							},
							forced: true,
							popup: false,
							filter(event, player) {
								if (event.player == player) return false;
								if (player.countCards('h', 'xinfu_caochuanjiejian') < 1) return false;
								if (!['basic', 'trick'].includes(get.type(event.card))) return false;
								if (get.tag(event.card, 'damage')) return true;
								return false;
							},
							content() {
								'step 0';
								player
									.chooseToUse({ name: 'xinfu_caochuanjiejian' }, '是否对' + get.translation(trigger.card) + '使用【草船借箭】？')
									.set('ai1', function (card) {
										return _status.event.bool;
									})
									.set('bool', -get.effect(player, trigger.card, trigger.player, player))
									.set('respondTo', [trigger.player, trigger.card]);
								trigger.caochuan = true;
								('step 1');
								delete trigger.caochuan;
							},
						},
						caochuan_skill2: {
							trigger: {
								global: 'useCardAfter',
							},
							forced: true,
							filter(event, player) {
								if (!event.caochuan_gainer) return false;
								var bool = false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.isInPile()) bool = true;
									}
								return bool && event.caochuan_gainer == player;
							},
							content() {
								var list = [];
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].isInPile()) {
										list.push(trigger.cards[i]);
									}
								}
								player.gain(list, 'gain2');
							},
						},
						yajiaoqiang_skill1: {
							trigger: {
								player: ['useCard', 'respond'],
							},
							filter(event, player) {
								if (player == _status.currentPhase) return false;
								if (event.name == 'respond' && event.card.name != 'shan') return false;
								return get.color(event.cards) == 'black';
							},
							usable: 1,
							forced: true,
							content() {
								'step 0';
								player
									.chooseBool(get.prompt('yajiaoqiang_skill1'))
									.set('prompt2', get.translation('yajiaoqiang_skill1_info'))
									.set('ai', function () {
										return true;
									});
								('step 1');
								if (result.bool) {
									trigger.xinfu_yajiaoqiang = true;
								}
							},
						},
						yajiaoqiang_skill2: {
							trigger: {
								player: ['useCardAfter', 'respondAfter'],
							},
							filter(event, player) {
								return event.xinfu_yajiaoqiang == true;
							},
							silent: true,
							popup: false,
							content() {
								var list = [];
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].isInPile()) {
										list.push(trigger.cards[i]);
									}
								}
								player.gain(list, 'gain2');
							},
							forced: true,
						},
						jinhe_skill: {
							filter(event, player) {
								return player.storage.jinhe_skill != undefined;
							},
							intro: {
								content: '共有一张牌',
							},
							subSkill: {
								1: {},
							},
							enable: 'phaseUse',
							content() {
								'step 0';
								player.addTempSkill('jinhe_skill_1');
								player.discard(player.getEquip(5));
								('step 1');
								player.removeSkill('jinhe_skill_1');
							},
						},
						zyzlzhongzhu: {
							audio: 'ext:洪荒ol/audio:2',
							group: 'zyzlzhongzhu2',
							trigger: { player: 'phaseBegin' },
							content() {
								var gainCards = ['xinfu_nvzhuang', 'xinfu_zheji', 'xinfu_wufengjian', 'xinfu_numa', 'xinfu_yinfengjia', 'xinfu_yexingyi', 'xinfu_caochuanjiejian', 'xinfu_xiejiaguitian', 'xinfu_shushangkaihua', 'xinfu_zhuluzhongyuan', 'xinfu_yajiaoqiang', 'xinfu_jinhe'].map((i) => game.createCard(i));
								player.gain(gainCards, 'draw');
							},
						},
						zyzlzhongzhu2: {
							trigger: { global: 'gameDrawEnd' },
							silent: true,
							popup: false,
							content() {
								if (!player.storage.zyzlzhongzhu2) {
									player.storage.zyzlzhongzhu2 = true;
									lib.translate.zyzlzhongzhu_info = `<img src="extension/洪荒ol/中逐技能描述.png" width="120" height="152.4" style="display: block; margin: 0 auto;">`;
									lib.translate.zyzlzhongzhu_info = `<img src="extension/洪荒ol/image/中逐技能描述.jpg" width="120" height="152.4" style="display: block; margin: 0 auto;">`;
									lib.translate.逐师_info = `<img src="extension/洪荒ol/image/逐师技能描述.jpg" width="120" height="180" style="display: block; margin: 0 auto;">`;
								}
							},
						},
						逐师: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseEnd' },
							group: '逐师2',
							// mod:{
							// attackFrom:function (from,to,distance){
							// if(typeof from.storage.逐师=='number')	return distance-player.storage.逐师;
							// },
							// },
							mark: true,
							marktext: '<span style="color:red">逐</span>',
							intro: {
								content(storage) {
									return '<span style="color:red">逐标记数:' + storage + '</span>';
								},
							},
							init(player) {
								player.storage.逐师 = 0;
								player.unmarkSkill('逐师');
							},
							content() {
								if (typeof player.storage.逐师 == 'number') {
									player.storage.逐师 += 4;
								} else {
									player.storage.逐师 = 4;
								}
								player.markSkill('逐师');
							},
						},
						逐师2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'useCardEnd' },
							filter(event, player) {
								return player.storage.逐师;
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							content() {
								player.storage.逐师--;
								player.markSkill('逐师');
								if (player.storage.逐师 == 0) player.unmarkSkill('逐师');
								//player.changeHujia();
								trigger.player.discard(trigger.player.getCards('he').randomGets());
								trigger.player.addTempSkill('逐师3');
							},
						},
						逐师3: {
							mark: true,
							marktext: '<span style="color:black">逐</span>',
							mod: {
								cardEnabled(card, player) {
									if (get.tag(card, 'damage')) return false;
								},
								cardUsable(card, player) {
									if (get.tag(card, 'damage')) return false;
								},
								cardRespondable(card, player) {
									if (get.tag(card, 'damage')) return false;
								},
								cardSavable(card, player) {
									if (get.tag(card, 'damage')) return false;
								},
							},
							intro: {
								content: '不能使用或打出伤害标签牌',
							},
						},
						yingzheng_yitong: {
							audio: 'ext:洪荒ol/audio:2',
							mod: {
								targetInRange(card) {
									if (card.name == 'sha' || card.name == 'shunshou') return true;
								},
							},
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								if (!['shunshou', 'guohe', 'sha', 'huogong'].includes(event.card.name)) return false;
								return game.hasPlayer(function (current) {
									return current.group != 'qun' && !event.targets.includes(current) && player.canUse(event.card, current);
								});
							},
							content() {
								game.mp4('yitongsptx');
								trigger.targets.addArray(
									game.filterPlayer(function (current) {
										return current.group != 'qun' && !trigger.targets.includes(current) && player.canUse(trigger.card, current);
									})
								);
								player.line(trigger.targets);
							},
						},
						yingzheng_shihuang: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'phaseAfter',
							},
							forced: true,
							filter(event, player) {
								var num = (game.roundNumber / 100) * 6;
								if (num > 1) num = 1;
								return event.player != player && Math.random() <= num;
							},
							content() {
								game.mp4('shihuangsptx');
								player.draw(2);
								player.phase('nodelay');
							},
						},
						yingzheng_zulong: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								game.mp4('zulongsptx');
								player.draw(2);
								var list = ['zhenlongchangjian', 'chuanguoyuxi'].map((i) => game.createCard(i));
								player.gain(list, 'draw');
							},
						},
						yingzheng_fenshu: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return event.player.group != 'qun' && get.type(event.card) == 'trick';
							},
							content() {
								'step 0';
								game.mp4('fenshusptx1');
								('step 1');
								game.mp4('fenshusptx');
								trigger.cancel();
								trigger.player.damage('fire');
							},
						},
						zhenlongchangjian_skill: {
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'trick';
							},
							usable: 1,
							content() {
								game.JPG('zhenlongchangjiandhtx', 2500);
								trigger.nowuxie = true;
								var list = ['wuxie', 'shan'].map((i) => game.createCard(i));
								player.gain(list, 'draw');
							},
						},
						chuanguoyuxi_skill: {
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							content() {
								'step 0';
								game.JPG('yuxidhtx', 2500);
								var list = ['nanman', 'wanjian', 'taoyuan', 'wugu'];
								player.chooseButton([get.prompt(event.name), [list, 'vcard']]).ai = function (button) {
									return _status.event.player.getUseValue({
										name: button.link[2],
									});
								};
								('step 1');
								if (result.bool) {
									player.chooseUseTarget(result.links[0][2], true, false);
								}
							},
						},
						qinnu_skill: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') {
										return num + 1;
									}
								},
							},
							inherit: 'qinggang_skill',
						},
						nushou_jinnu: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBefore',
							},
							forced: true,
							filter(event, player) {
								return !player.getEquip('qinnu');
							},
							content() {
								var card = game.createCard('qinnu', Math.random() < 0.5 ? 'diamond' : 'club', 1);
								player.chooseUseTarget(card, true);
							},
						},
						qinshilichoince: {
							// trigger:{global:['gameDrawAfter','phaseBegin']},
							trigger: { player: ['gameDrawAfter', 'phaseBegin'] },
							forced: true,
							popup: false,
							silent: true,
							filter(event, player) {
								return player.group;
							},
							content() {
								'step 0';
								var controls = ['qun', 'qinshili'];
								var str = '请选择一个势力';
								player.chooseControl(controls, ui.create.dialog(str, 'hidden')).ai = function () {
									return Math.floor(Math.random() * controls.length);
								};
								('step 1');
								if (result.control) {
									player.group = result.control;
									if (get.mode() == 'guozhan') {
										player.identity = result.control;
										player._group = result.control;
										player.node.identity.firstChild.innerHTML = get.translation(result.control);
										player.node.identity.dataset.color = player.identity;
										if (player.name) lib.character[player.name][1] = result.control;
										if (player.name1) lib.character[player.name1][1] = result.control;
										if (player.name2) lib.character[player.name2][1] = result.control;
									} else {
										if (player.name) lib.character[player.name][1] = result.control;
										if (player.name1) lib.character[player.name1][1] = result.control;
										if (player.name2) lib.character[player.name2][1] = result.control;
									}
								}
								('step 2');
								switch (player.group) {
									case 'wei':
										if (player.node.name) player.node.name.style.color = 'blue';
										if (player.node.name2) player.node.name2.style.color = 'blue';
										break;
									case 'shu':
										if (player.node.name) player.node.name.style.color = 'red';
										if (player.node.name2) player.node.name2.style.color = 'red';
										break;
									case 'wu':
										if (player.node.name) player.node.name.style.color = 'green';
										if (player.node.name2) player.node.name2.style.color = 'green';
										break;
									case 'qun':
										if (player.node.name) player.node.name.style.color = 'white';
										if (player.node.name2) player.node.name2.style.color = 'white';
										break;
									case 'qinshili':
										if (player.node.name) player.node.name.style.color = '#cc0099';
										if (player.node.name2) player.node.name2.style.color = '#cc0099';
										break;
									default:
										if (player.node.name) player.node.name.dataset.nature = 'fire';
								}
							},
						},
						hufu虎符: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('hufu虎符')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var gainCards = [];
									for (var i = 0; i < [2, 5].randomGet(); i++) {
										gainCards.push(game.createCard('sha'));
									}
									result.targets[0].gain(gainCards, 'draw');
									result.targets[0].addTempSkill('zhuge_skill', { player: 'phaseAfter' });
								}
							},
						},
						评世: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: ['phaseBegin', 'damageBegin'],
							},
							_priority: 2024,
							content() {
								'step 0';
								game.JPG('image/skin/xushao评世雕龙/1', 2500);
								('step 1');
								game.JPG('image/skin/xushao评世雕龙/2', 2500);
								('step 2');
								game.JPG('image/skin/xushao评世雕龙/4', 2500);
								('step 3');
								game.JPG('image/skin/xushao评世雕龙/5', 2500);
								var sjGenerals = [];
								var sjnames = [];
								for (let key in lib.character) {
									let character = lib.character[key];
									if (lib.filter.characterDisabled(key)) continue;
									if (lib.filter.characterDisabled2(key)) continue;
									if (key != 'xushao评世雕龙') {
										sjGenerals.push(character);
										sjnames.push(key);
									}
								}
								var list = sjnames.randomGets(25);
								player.chooseButton(ui.create.dialog('请选择一到五名武将', [list, 'character']), [1, 5]);
								('step 4');
								if (result.bool) {
									result.links.forEach((link) => {
										lib.character[link][3].forEach((skill) => {
											player.addTempSkill(skill, { player: 'phaseBegin' });
										});
									});
									if (event.triggername == 'phaseBegin') {
										(function () {
											var skills = player.getSkills(true, false).filter((i) => i != '评世');
											var list = [];
											game.expandSkills(skills);
											var triggerevent = event._trigger;
											var name = 'phaseBegin';
											for (var i = 0; i < skills.length; i++) {
												var trigger = get.info(skills[i]).trigger;
												if (trigger) {
													var add = false;
													if (player == triggerevent.player && trigger.player) {
														if (typeof trigger.player == 'string') {
															if (trigger.player == name) add = true;
														} else if (trigger.player.includes(name)) add = true;
													}
													if (trigger.global) {
														if (typeof trigger.global == 'string') {
															if (trigger.global == name) add = true;
														} else if (trigger.global.includes(name)) add = true;
													}
													if (add && player.isOut() == false) list.push(skills[i]);
												}
											}
											for (var i = 0; i < list.length; i++) {
												game.createTrigger('phaseBegin', list[i], player, triggerevent);
											}
										})();
									}
								}
							},
						},
						pinpingbi品评笔: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'phaseBegin' },
							content() {
								'step 0';
								var csd = [
									[1, 2, 3],
									[1, 2, 4],
									[1, 2, 5],
									[1, 2, 6],
									[1, 3, 4],
									[1, 3, 5],
									[1, 3, 6],
									[1, 4, 5],
									[1, 4, 6],
									[1, 5, 6],
								];
								var csf = [
									[2, 3, 4],
									[2, 3, 5],
									[2, 3, 6],
									[2, 4, 5],
									[2, 4, 6],
									[2, 5, 6],
									[3, 4, 5],
									[3, 4, 6],
									[3, 5, 6],
									[4, 5, 6],
								];
								if (!player.storage.pinpingbi品评笔) {
									player.storage.pinpingbi品评笔 = true;
									event.csarr = csd;
								} else if (player.storage.pinpingbi品评笔) {
									player.storage.pinpingbi品评笔 = false;
									event.csarr = csf;
								}
								var str = '善、勇、谦、勤、和、诚、恒、思、智、顺、恶、怯、骄、懒、争、伪、变、俗、愚、逆';
								event.pjarr = str.split('、');
								const playingCards = event.pjarr; /*.map((item) => {
                        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                        return `<span style="color: ${randomColor};">${item}</span>`;
                    })*/
								event.playingCards = playingCards;
								/*
								const playingCards = event.pjarr.map((item) => {
								let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
								var card = ui.create.card(null, null, true);
									card.init(['', '', item]);
									card.node.background.style.fontFamily = 'xingkai';
									card.node.background.style.color =randomColor;
									return card;
									//return `<span style="color: ${randomColor};">${item}</span>`;
								});
								event.playingCards=event.pjarr;
								*/
								player.chooseButton(['品评笔:是否品评？<div class="text center" style="font-size: 60px; color: #ff69b4; ">对该角色品评</div>', [playingCards, 'vcard']], 1);
								('step 1');
								if (result.bool) {
									function zmxg(list) {
										for (var i = 0; i < list.length; i++) {
											if (list[i] === 1) {
												trigger.player.draw(2);
											} else if (list[i] === 2) {
												trigger.player.recover();
											} else if (list[i] === 3) {
												trigger.player.changeHujia();
											} else if (list[i] === 4) {
												trigger.player.addTempSkill('qianxing', { player: 'phaseBegin' });
											} else if (list[i] === 5) {
												trigger.player.discard(trigger.player.getCards('j'));
											} else if (list[i] === 6) {
												if (trigger.player.isLinked()) {
													trigger.player.link();
												}
												if (trigger.player.isTurnedOver()) {
													trigger.player.turnOver();
												}
											}
										}
										return trigger.player;
									}
									// function zmxg(list) {
									// for (var i = 0; i < list.length; i++) {
									// switch (list[i]) {
									// case 1: trigger.player.draw(2); return;
									// case 2: trigger.player.recover(); return;
									// case 3: trigger.player.changeHujia(); return;
									// case 4: trigger.player.addTempSkill('qianxing', { player: 'phaseBegin' }); return;
									// case 5: trigger.player.discard(trigger.player.getCards('j')); return;
									// case 6: {
									// if (trigger.player.isLinked()) trigger.player.link();
									// if (trigger.player.isTurnedOver()) trigger.player.turnOver();
									// return;
									// }
									// }
									// }
									// return trigger.player;
									// }
									function fmxg(list, nodelay) {
										if (!Array.isArray(list) || list.length == 0) return trigger.player;
										for (var i = 0; i < list.length; i++) {
											// switch (list[i]) {
											// case 1: trigger.player.randomDiscard(2, 'he'); return;
											// case 2: trigger.player.loseHp(); return;
											// case 3: trigger.player.damage(); return;
											// case 4: if (!trigger.player.isLinked()) trigger.player.link(); return;
											// case 5: trigger.player.addTempSkill('fengyin', { player: 'phaseAfter' }); return;
											// case 6: {
											// var jlist = [];
											// for (var i = 0; i < lib.inpile.length; i++) {
											// var info = lib.card[lib.inpile[i]];
											// if (info.type == 'delay' && !info.cancel && !trigger.player.hasJudge(lib.inpile[i])) {
											// jlist.push(lib.inpile[i]);
											// }
											// }
											// if (jlist.length) {
											// var card = game.createCard(jlist.randomGet());
											// trigger.player.addJudge(card);
											// trigger.player.$draw(card);
											// if (!nodelay) game.delay();
											// } else {
											// trigger.player.getDebuff(6);
											// }
											// return;
											// }
											// }
											if (list[i] == 1) {
												trigger.player.randomDiscard('he', 2);
											} else if (list[i] == 2) {
												trigger.player.loseHp();
											} else if (list[i] == 3) {
												trigger.player.damage();
											} else if (list[i] == 4) {
												if (!trigger.player.isLinked()) {
													trigger.player.link();
												}
											} else if (list[i] == 5) {
												trigger.player.addTempSkill('fengyin', { player: 'phaseAfter' });
											} else if (list[i] == 6) {
												var jlist = [];
												for (var j = 0; j < lib.inpile.length; j++) {
													var info = lib.card[lib.inpile[j]];
													if (info.type == 'delay' && !info.cancel && !trigger.player.hasJudge(lib.inpile[j])) {
														jlist.push(lib.inpile[j]);
													}
												}
												if (jlist.length) {
													var card = game.createCard(jlist[Math.floor(Math.random() * jlist.length)]);
													trigger.player.addJudge(card);
													trigger.player.$draw(card);
													if (!nodelay) {
													}
												} else {
													trigger.player.getDebuff(6);
												}
											}
										}
										return trigger.player;
									}
									var num = event.playingCards.indexOf(result.links[0][2]);
									game.log(num);
									var zx = num > 9 ? 'zx2' : 'zx1';
									num = num > 9 ? num - 10 : num;
									var zxarr = event.csarr[num];
									game.log(num);
									game.log(zxarr);
									if (zx == 'zx1') zmxg(zxarr);
									if (zx == 'zx2') fmxg(zxarr);
								}
							},
						},
						评笔: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBefore',
							},
							forced: true,
							filter(event, player) {
								return !player.getEquip('pinpingbi品评笔');
							},
							content() {
								var card = game.createCard('pinpingbi品评笔', 'spade', 5);
								player.equip(card, player);
							},
						},
						z镇g骨hz2: {
							trigger: { global: 'gameDrawEnd' },
							silent: true,
							popup: false,
							content() {
								if (!player.storage.z镇g骨hz2) {
									player.storage.z镇g骨hz2 = true;
									lib.translate.z镇g骨hz_info = `<img src="extension/洪荒ol/image/z镇g骨hz技能描述.jpg" width="120" height="82" style="display: block; margin: 0 auto;">`;
								}
							},
						},
						z镇g骨hz: {
							audio: 'ext:洪荒ol/audio:2',
							group: ['z镇g骨hz2', 'z镇g骨hz3'],
							trigger: {
								player: ['phaseBegin', 'phaseEnd'],
							},
							forced: true,
							content() {
								'step 0';
								game.mp4('zhengusptx');
								if (!player.getEquip('mingzhao明昭盾')) {
									var card = game.createCard('mingzhao明昭盾', 'spade', 6);
									player.equip(card, player);
								}
								player.chooseControl('摸牌', '弃牌');
								('step 1');
								event.control = result.control;
								player.chooseTarget(get.prompt('z镇g骨hz'), function (card, player, target) {
									return target != player;
								}).ai = function (target) {
									if (player.countCards('h') > target.countCards('h')) return get.attitude(player, target);
									if (player.countCards('h') < target.countCards('h')) return -get.attitude(player, target);
								};
								('step 2');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target);
									var num = target.countCards('h');
									var num1 = Math.abs(2 * (num - player.countCards('h'))) + 1;
									if (event.control == '弃牌') target.chooseToDiscard('h', num1, true);
									if (event.control == '摸牌') target.draw(num1);
									// if (Array.isArray(player.storage.z镇g骨hz1)) {
									// player.storage.z镇g骨hz1.push(target);
									// } else {
									// player.storage.z镇g骨hz1 = [target];
									// }
									target.storage.z镇g骨hz = player;
								}
							},
						},
						z镇g骨hz1: {},
						z镇g骨hz3: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: ['phaseBegin', 'phaseEnd'],
							},
							_priority: -6,
							filter(event, player) {
								return event.player.storage.z镇g骨hz != undefined /*||(player.storage.z镇g骨hz1!=undefined&&player.storage.z镇g骨hz1.includes(event.player))*/;
							},
							forced: true,
							content() {
								'step 0';
								var target = trigger.player;
								if (!player.storage.z镇g骨hz3) {
									player.storage.z镇g骨hz3 = true;
								} else if (player.storage.z镇g骨hz3) {
									player.storage.z镇g骨hz3 = false;
									delete target.storage.z镇g骨hz;
								}
								game.mp4('zhengusptx');
								player.chooseControl('摸牌', '弃牌');
								('step 1');
								var target = trigger.player;
								var num = target.countCards('h');
								var num1 = Math.abs(2 * (num - player.countCards('h'))) + 1;
								if (result.control == '弃牌') target.chooseToDiscard('h', num1, true);
								if (result.control == '摸牌') target.draw(num1);
							},
						},
						mingzhao明昭盾: {
							audio: 'ext:洪荒ol/audio:2',
							nobracket: true,
							trigger: { global: ['gainEnd', 'loseEnd'] },
							usable: 1,
							filter(event, player) {
								return event.cards && event.cards.some((i) => get.color(i) == 'black');
							},
							content() {
								player.changeHujia();
							},
						},
						podao朴刀: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'useCardToBegin' },
							filter(event, player) {
								return get.itemtype(event.cards) == 'cards' && event.card.name == 'sha';
							},
							content() {
								'step 0';
								player.discardPlayerCard(2, trigger.target, 'he', true);
								('step 1');
								trigger.target.damage(result.cards.filter((card) => card.suit === trigger.card.suit).length);
							},
						},
						三奇: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: ['phaseBegin', 'damageBegin'] },
							async content(event, trigger, player) {
								//QQQ
								player.gain(
									['wuxie', 'shan', 'huogong'].map((i) => game.createCard(i)),
									'draw'
								);
								var { result } = await player.chooseTarget(get.prompt('三奇'), true).set('ai', (target) => get.attitude(player, target));
								('step 1');
								if (result.targets?.length) {
									var { result: result1 } = await player.chooseTarget(get.prompt('三奇'), true, (card, player, target) => target != player).set('ai', (target) => -get.attitude(player, target));
									if (result1.targets && result1.targets[0]) {
										if (result1.targets[0].countCards('he')) result.targets[0].gainPlayerCard(result1.targets[0], result1.targets[0].maxHp, 'he', true);
										result.targets[0].draw(result.targets[0].maxHp);
										result1.targets[0].damage('fire', 'nosource');
									}
								}
							},
						},
						定汉: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'useCard' },
							filter(event, player) {
								if (!player.storage.定汉 || !player.storage.定汉.includes(event.card.name)) {
									return get.type(event.card, 'trick') == 'trick';
								}
							},
							content() {
								'step 0';
								player.draw();
								trigger.cancel();
								player.chooseTarget(get.prompt('定汉')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].damage();
								}
								if (!player.storage.定汉) {
									player.storage.定汉 = [];
								}
								player.storage.定汉.push(trigger.card.name);
							},
							group: '定汉_clear',
							subSkill: {
								clear: {
									trigger: { player: 'phaseAfter' },
									silent: true,
									content() {
										delete player.storage.定汉;
									},
								},
							},
						},
						佐策: {
							audio: 5,
							trigger: { player: 'phaseBegin' },
							content() {
								player.gain(
									['jizhengxiangsheng奇正相生', 'jizhengxiangsheng奇正相生'].map((i) => game.createCard(i)),
									'draw'
								);
								player.draw(Math.min(player.maxHp, 20));
							},
						},
						骁扶: {
							trigger: { player: 'shaBegin' },
							forced: true,
							filter(event, player) {
								return player.isAlive() && get.distance(player, event.target) < 2;
							},
							content() {
								'step 0';
								var next = trigger.player.chooseControl();
								next.set('choiceList', ['令' + get.translation(trigger.card) + '失效', '受到' + get.translation(trigger.player) + '造成的1点伤害并摸2张牌']);
								next.set('ai', function (event, player) {
									var att = get.attitude(_status.event.player, _status.event.getTrigger().target);
									if (att > 0) return 0;
									return 1;
								});
								('step 1');
								if (result.index == 0) {
									trigger.cancel();
								} else {
									trigger.player.damage();
									player.draw(2);
								}
							},
						},
						_dutaojn: {
							trigger: { global: 'dying' },
							_priority: 200,
							forced: true,
							filter(event, player) {
								if (!event.player.isAlive() || player.hasCard('dutao', 'hes')) return true;
								var mn = player.getEquip('muniu');
								return mn && mn.name == 'muniu' && mn.cards && mn.cards.some((card) => card.name == 'dutao');
							},
							content() {
								player.chooseToUse(
									'是否给' + get.translation(trigger.player) + '吃毒桃？',
									function (card, player) {
										if (card.name != 'dutao') return false;
										var mod = game.checkMod(card, player, 'unchanged', 'cardEnabled', player);
										if (mod != 'unchanged') return mod;
										return true;
									},
									trigger.player,
									-1
								);
							},
						},
						_pantaojn: {
							trigger: { global: 'dying' },
							_priority: 200,
							forced: true,
							filter(event, player) {
								if (!event.player.isAlive() || player.hasCard('pantao', 'hes')) return true;
								var mn = player.getEquip('muniu');
								return mn && mn.name == 'muniu' && mn.cards && mn.cards.some((card) => card.name == 'pantao');
							},
							content() {
								player.chooseToUse(
									'是否给' + get.translation(trigger.player) + '吃蟠桃？',
									function (card, player) {
										if (card.name != 'pantao') return false;
										var mod = game.checkMod(card, player, 'unchanged', 'cardEnabled', player);
										if (mod != 'unchanged') return mod;
										return true;
									},
									trigger.player,
									-1
								);
							},
						},
						_xiantaojn: {
							trigger: { global: 'dying' },
							_priority: 200,
							forced: true,
							filter(event, player) {
								if (!event.player.isAlive() || player.hasCard('xiantao仙桃', 'hes')) return true;
								var mn = player.getEquip('muniu');
								return mn && mn.name == 'muniu' && mn.cards && mn.cards.some((card) => card.name == 'xiantao仙桃');
							},
							content() {
								player.chooseToUse(
									'是否给' + get.translation(trigger.player) + '吃仙桃？',
									function (card, player) {
										if (card.name != 'xiantao仙桃') return false;
										var mod = game.checkMod(card, player, 'unchanged', 'cardEnabled', player);
										if (mod != 'unchanged') return mod;
										return true;
									},
									trigger.player,
									-1
								);
							},
						},
						_xiandanjn: {
							trigger: { global: 'dying' },
							_priority: 201,
							forced: true,
							filter(event, player) {
								if (!event.player.isAlive() || player.hasCard('xiandan仙丹', 'hes')) return true;
								var mn = player.getEquip('muniu');
								return mn && mn.name == 'muniu' && mn.cards && mn.cards.some((card) => card.name == 'xiandan仙丹');
							},
							content() {
								player.chooseToUse(
									'是否给' + get.translation(trigger.player) + '吃仙丹？',
									function (card, player) {
										if (card.name != 'xiandan仙丹') return false;
										var mod = game.checkMod(card, player, 'unchanged', 'cardEnabled', player);
										if (mod != 'unchanged') return mod; //QQQ
										return true;
									},
									trigger.player,
									-1
								);
							},
						},
						baguafuzhou: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { target: 'shaBegin' },
							forced: true,
							content() {
								'step 0';
								player.judge();
								('step 1');
								if (result.color == 'red') player.damage(2, 'poison', 'nosource');
							},
						},
						liejiu: {
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink();
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
							temp: true,
							onremove(player) {
								if (player.node.liejiu) {
									player.node.liejiu.delete();
									player.node.liejiu2.delete();
									delete player.node.liejiu;
									delete player.node.liejiu2;
								}
							},
							ai: {
								damageBonus: true,
							},
							group: 'liejiu2',
						},
						liejiu2: {
							trigger: { player: 'useCardAfter', global: 'phaseAfter' },
							_priority: 2,
							filter(event, player) {
								if (event.name == 'useCard') return event.card && event.card.name == 'sha';
								return true;
							},
							forced: true,
							popup: false,
							content() {
								game.broadcastAll(function (player) {
									player.removeSkill('liejiu');
								}, player);
							},
						},
						bingjiu: {
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink();
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
							temp: true,
							onremove(player) {
								if (player.node.bingjiu) {
									player.node.bingjiu.delete();
									player.node.bingjiu2.delete();
									delete player.node.bingjiu;
									delete player.node.bingjiu2;
								}
							},
							ai: {
								damageBonus: true,
							},
							group: 'bingjiu2',
						},
						bingjiu2: {
							trigger: { player: 'useCardAfter', global: 'phaseAfter' },
							_priority: 2,
							filter(event, player) {
								if (event.name == 'useCard') return event.card && event.card.name == 'sha';
								return true;
							},
							forced: true,
							popup: false,
							content() {
								game.broadcastAll(function (player) {
									player.removeSkill('bingjiu');
								}, player);
							},
						},
						qingtongjiubei青铜酒杯: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								player.gain(
									['jiu', 'liejiu', 'bingjiu'].map((i) => game.createCard(i)),
									'draw'
								);
							},
						},
						shenlongyanyuedao神龙偃月刀: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('shenlongyanyuedao神龙偃月刀'), true).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.discardPlayerCard(2, target, 'he', true);
									event.t = target;
								}
								('step 2');
								if (result.bool) {
									if (result.cards.some((i) => get.color(i) == 'red')) {
										player.useCard({ name: 'shuiyanqijunx' }, event.t);
										player.useCard({ name: 'shuiyanqijunx' }, event.t);
									}
								}
							},
						},
						鸾刀惊鸿武继: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseEnd' },
							content() {
								game.mp4('guanyinping孪刀惊鸿sptx');
								player.gainMaxHp();
								player.recover();
								player.gain(game.createCard('shenlongyanyuedao神龙偃月刀', 'heart', 7), 'draw');
							},
						},
						鸾刀惊鸿虎啸: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.nature == 'fire';
							},
							usable: 7,
							content() {
								game.mp4('guanyinping孪刀惊鸿sptx');
								for (var i = 0; i < 7; i++) {
									player.useCard({ name: 'shuiyanqijunx' }, trigger.player);
								}
							},
						},
						鸾刀惊鸿雪恨: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								game.mp4('guanyinping孪刀惊鸿sptx');
								player.gain(game.createCard('huosuolianhuan火锁连环'), 'draw');
								player.chooseTarget(get.prompt('鸾刀惊鸿雪恨'), [1, 7]).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets.forEach((i) => {
										i.chooseToDiscard('he', '请弃置一张红色牌', (c) => get.color(c) == 'red', true);
										i.damage('fire');
									});
								}
							},
						},
						济乡: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								game.GIF('taohua', 2000);
								player.chooseTarget(get.prompt('济乡')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].gain([game.createCard('xiayuncailing'), game.createCard('shan')], 'draw');
								}
							},
						},
						称贤: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 2,
							content() {
								game.GIF('taohua', 2000);
								var list1 = get.typeCard('food');
								var list2 = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.type({ name: lib.inpile[i] }) == 'trick') list2.push(lib.inpile[i]);
								}
								player.gain([game.createCard(list1.randomGet()), game.createCard(list2.randomGet())], 'draw');
							},
						},
						弱兵: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'damageBegin' },
							forced: true,
							content() {
								trigger.num += 2;
								player.chooseToDiscard('he', '请弃置2张红色牌', (c) => get.color(c) == 'red', true);
							},
						},
						弥骨: {
							audio: 'ext:洪荒ol/audio:2',
							group: ['弥骨2', '弥骨3'],
							trigger: { player: 'phaseBegin' },
							content() {
								player.gain(
									['longjuanfeng', 'huolongjuan', 'shuilongjuan', 'tulongjuan', 'binglongjuan'].map((i) => game.createCard(i)),
									'draw'
								);
							},
						},
						弥骨2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'useCardEnd' },
							filter(event, player) {
								return get.type(event.card) == 'delay';
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('弥骨')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', true);
								}
								if (player.canMoveCard(true)) {
									player.moveCard();
								}
							},
						},
						弥骨3: {
							trigger: {
								player: 'phaseJudgeBefore',
							},
							forced: true,
							content() {
								trigger.cancel();
							},
							ai: {
								expose: 0.8,
							},
						},
						g_jiancu箭簇: {
							trigger: { player: ['useCardAfter', 'respondAfter', 'gainAfter'] },
							popup: false,
							forced: true,
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.name == 'jiancu箭簇' && i.original != 'j') return true;
									}
								return false;
							},
							content() {
								var num = 0;
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].name == 'jiancu箭簇' && trigger.cards[i].original != 'j') num++;
								}
								player.popup('<span style="font-size: 60px;font-weight:600;color: #B5A642;">箭簇</span>');
								player.damage(num, 'poison', 'nosource');
								player.addTempSkill('jiancu箭簇2', { player: 'damageAfter' });
							},
						},
						jiancu箭簇2: {
							trigger: { player: 'damageBegin' },
							silent: true,
							content() {
								trigger.num++;
							},
						},
						贡簇: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: ['gameDrawBegin', 'phaseBegin'] },
							forced: true,
							notemp: true,
							init(player) {
								player.storage.贡簇 = [];
							},
							marktext: '<span style="color:black">簇</span>',
							content() {
								'step 0';
								var cards = ['jiancu箭簇', 'jiancu箭簇', 'jiancu箭簇', 'jiancu箭簇'].map((i) => game.createCard(i));
								player.storage.贡簇 = player.storage.贡簇.concat(cards);
								player.markSkill('贡簇');
								game.log(player, '将', cards, '置于武将牌上作为<簇>');
								player.chooseTarget(get.prompt('贡簇'), [1, 3]).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.useCard({ name: 'wanjian' }, result.targets);
								}
							},
							intro: {
								content: 'cards',
							},
						},
						贡客: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.storage.贡簇 && player.storage.贡簇.length;
							},
							filterTarget: true,
							content() {
								'step 0';
								player.chooseCardButton('选择获得一张<箭簇>', player.storage.贡簇);
								('step 1');
								if (result.bool) {
									target.gain(result.links[0], 'draw2', 'log');
									player.storage.贡簇.remove(result.links[0]);
									if (player.storage.贡簇.length == 0) {
										player.unmarkSkill('贡簇');
									} else {
										player.markSkill('贡簇');
									}
									target.addTempSkill('贡客2', { player: 'phaseAfter' });
									target.addTempSkill('贡客3', { player: 'phaseAfter' });
									target.jiancujn = {
										juese: player,
										yanse: get.color(result.links[0]),
										dianshu: result.links[0].number,
									};
								}
							},
						},
						贡客2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'useCardEnd' },
							filter(event, player) {
								return player.jiancujn && (player.jiancujn.dianshu == event.card.number || player.jiancujn.yanse == get.color(event.card));
							},
							forced: true,
							content() {
								if (player.jiancujn.dianshu == trigger.card.number) player.loseHp(2);
								if (player.jiancujn.yanse == get.color(trigger.card)) player.loseHp();
							},
						},
						贡客3: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseEnd' },
							filter(event, player) {
								return player.jiancujn;
							},
							silent: true,
							content() {
								'step 0';
								player.jiancujn.juese.draw(3);
								player.jiancujn.juese.recover();
								if (1 <= player.jiancujn.dianshu < 6) {
									player.discard(player.getCards('e'));
									player.chooseToDiscard('he', '请弃置1张红色牌', (c) => get.color(c) == 'red', true);
								}
								if (6 <= player.jiancujn.dianshu < 8) {
									player.jiancujn.juese.chooseToCompare(player);
								}
								if (8 <= player.jiancujn.dianshu < 11) {
									var card = game.createCard('lebu');
									player.addJudge(card);
									player.$draw(card);
								}
								if (11 <= player.jiancujn.dianshu <= 13) player.loseHp(player.hp - 1);
								('step 1');
								if (result.bool) {
									player.damage('poison', 'nosource');
								} else {
									player.jiancujn.juese.draw(2);
								}
								player.jiancujn = null;
							},
						},
						星日: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { source: 'damageEnd' },
							filter(event, player) {
								return !event.nature;
							},
							content() {
								'step 0';
								game.GIF('huo', 2000);
								player.chooseTarget(get.prompt('星日'), [1, 2]).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var n = [1, 2].randomGet();
									result.targets.map((i) => i.damage(n, 'fire'));
									player.draw(n);
								}
							},
						},
						野性: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { source: 'damageEnd' },
							content() {
								game.GIF('bingshu', 2000);
								var n = [1, 2].randomGet();
								trigger.player.discard(player.getCards('he').randomGets(n));
								trigger.player.loseHp(n);
							},
						},
						duandao断刀: {
							audio: 'ext:洪荒ol/audio:2',
							group: 'duandao断刀2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							forced: true,
							content() {
								player.chooseToDiscard('he', '请弃置1张杀', (c) => c.name == 'sha', true);
							},
						},
						duandao断刀2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'useCard' },
							forced: true,
							filter(event, player) {
								return event.card.name == 'sha' || Math.random() < 0.5;
							},
							content() {
								trigger.cancel();
							},
						},
						挈挾: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							group: '挈挾2',
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									var tlz = item.hp;
									var card = game.createCard(['xinfu_zheji', 'duandao断刀'].randomGet());
									item.equip(card, item);
									item.init('ruobing弱兵');
									item.hp = tlz;
								});
								player.gain(
									['liaoji撩戟', 'edoushuangji恶斗双戟', 'kuanggeji狂歌戟'].map((i) => game.createCard(i)),
									'draw'
								);
							},
						},
						挈挾2: {
							trigger: {
								player: 'equipBegin',
							},
							audio: 'ext:洪荒ol/audio:2',
							forced: true,
							filter(event, player) {
								return player.countCards('e', { subtype: 'equip1' }) && get.subtype(event.card) == 'equip1' && (event.card.name == 'liaoji撩戟' || event.card.name == 'kuanggeji狂歌戟' || event.card.name == 'edoushuangji恶斗双戟');
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
							},
						},
						摧決: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							group: '摧決2',
							content() {
								var gainCards = [];
								var n = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								}).length;
								for (var i = 0; i < 2 * n; i++) {
									gainCards.push(game.createCard('liaoji撩戟'));
								}
								player.gain(gainCards, 'draw');
							},
						},
						摧決2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return player.countCards('he', { subtype: 'equip1' });
							},
							content() {
								var num = player.countCards('he', { subtype: 'equip1' });
								trigger.num += num;
								player.draw(num + player.countCards('he', { color: 'black' }));
								player.changeHujia(num + player.countCards('he', { color: 'black' }));
							},
						},
						liaoji撩戟: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'damageBegin' },
							filter(event, player) {
								return event.num >= player.hp && player.countCards('e', (c) => c.name == 'liaoji撩戟');
							},
							content() {
								var n = player.countCards('e', (c) => c.name == 'liaoji撩戟');
								if (trigger.source) {
									for (var i = 0; i < n; i++) {
										player.useCard({ name: 'sha' }, trigger.source);
									}
								}
								trigger.player.recover(n);
							},
						},
						kuanggeji狂歌戟: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('kuanggeji狂歌戟'), [1, 2]).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets.map((i) => {
										player.gainPlayerCard(i, 2, 'he', true);
										player.useCard({ name: 'liuxinghuoyu' }, i, false);
									});
								}
							},
						},
						edoushuangji恶斗双戟: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('edoushuangji恶斗双戟'), [1, 2]).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets.map((i) => {
										player.discardPlayerCard(i, 2, 'he', true);
										i.loseHp(1 + player.countCards('e', (c) => get.subtype(c) == 'equip1'));
									});
								}
							},
						},
						荐降映月诗酒: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'useCardBefore',
							},
							filter(event, player) {
								return event.player != player && event.targets && event.targets.includes(player);
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('荐降映月诗酒')).ai = function (target) {
									return get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									player.line(result.targets);
									result.targets[0].draw(2);
									player.gain(game.createCard('fenghuolangyan烽火狼烟'), 'draw');
								}
							},
						},
						审时映月诗酒: {
							audio: 'ext:洪荒ol/audio:2',
							group: '审时映月诗酒2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							discard: false,
							line: true,
							prepare: 'give',
							position: 'he',
							filterCard: true,
							filterTarget(card, player, target) {
								return target;
							},
							check(card) {
								return 5 - get.value(card);
							},
							content() {
								'step 0';
								target.gain(cards, player);
								target.damage(2);
								('step 1');
								if (!target.isAlive()) {
									player.chooseTarget('请选择一名角色并令其将手牌摸至四张', function (card, player, target) {
										return target.countCards('h') < 4;
									}).ai = function (target) {
										return get.attitude(player, target);
									};
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.line(result.targets);
									result.targets[0].draw(4 - result.targets[0].countCards('h'));
								}
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										return -1;
									},
								},
							},
						},
						审时映月诗酒2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'damageAfter',
							},
							filter(event, player) {
								return player.countCards('he') > 0 && event.source && event.source != player;
							},
							check(event, player) {
								return event.source && event.source.countCards('h') <= 2 && player.countCards('h') < 4;
							},
							content() {
								'step 0';
								player.gain(game.createCard('xiuyangshengxi休养生息'), 'draw');
								player.viewHandcards(trigger.source);
								player.chooseCard('he', true).set('ai', function (card) {
									return 5 - get.value(card);
								});
								('step 1');
								if (result.bool) {
									player.$give(result.cards.length, trigger.source);
									trigger.source.gain(result.cards);
									player.addSkill('审时映月诗酒3');
								}
							},
						},
						审时映月诗酒3: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							popup: false,
							content() {
								player.draw(4);
								player.removeSkill('审时映月诗酒3');
							},
						},
						蒯良蒯越不臣: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBegin',
								global: 'dyingBegin',
							},
							content() {
								'step 0';
								player.chooseTarget('选择一名蜀或吴势力角色,你与其势力相同', function (card, player, target) {
									return target.group == 'wei' || (target.group == 'qun' && target != player);
								});
								('step 1');
								if (result.bool) {
									var pl = result.targets[0];
									player.storage.ll = pl;
									pl.markSkill('蒯良蒯越不臣');
									if (player.identity != 'zhu') player.identity = pl.identity;
									player.setIdentity(pl.identity);
									player.node.identity.dataset.color = pl.identity;
									player.setIdentity(`<img src="extension/洪荒ol/buchenwei.gif" width="20" height="20"><img src="extension/洪荒ol/buchenqun.gif" width="20" height="20">`);
									if (lib.config.mode == 'guozhan') {
										player.identity = player.storage.ll.identity;
										player.setIdentity();
										player._group = pl.identity;
										player.identityShown = true;
										lib.character[player.name][1] = pl.identity;
										player.setIdentity(`<img src="extension/洪荒ol/buchenwei.gif" width="20" height="20"><img src="extension/洪荒ol/buchenqun.gif" width="20" height="20">`);
									}
								}
							},
							marktext: '臣',
							intro: {
								content: '已对你臣服',
							},
							group: '蒯良蒯越不臣2',
						},
						蒯良蒯越不臣2: {
							trigger: { player: 'phaseBefore' },
							forced: true,
							popup: false,
							silent: true,
							content() {
								for (var i = 0; i < game.players.length; i++) {
									delete game.players[i].storage.ll;
									game.players[i].unmarkSkill('蒯良蒯越不臣');
								}
								player.unmarkSkill('蒯良蒯越不臣');
							},
						},
						g_judu: {
							trigger: { player: ['useCardAfter', 'respondAfter', 'discardAfter'] },
							popup: false,
							forced: true,
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.name == 'judu剧毒' && i.original != 'j') return true;
									}
								return false;
							},
							content() {
								game.mp4('judusptx');
								var num = 0;
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].name == 'judu剧毒' && trigger.cards[i].original != 'j') num++;
								}
								player.popup('剧毒', 'wood');
								player.loseHp(2 * num);
								if (Math.random() < 0.5) player.loseMaxHp(num);
							},
						},
						g_liedu: {
							trigger: { player: ['useCardAfter', 'respondAfter', 'discardAfter'] },
							popup: false,
							forced: true,
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.name == 'liedu烈毒' && i.original != 'j') return true;
									}
								return false;
							},
							content() {
								game.mp4('liedusptx');
								var num = 0;
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].name == 'liedu烈毒' && trigger.cards[i].original != 'j') num++;
								}
								player.popup('烈毒', 'wood');
								player.loseHp(3 * num);
								if (Math.random() < 0.6) player.loseMaxHp(num);
							},
						},
						suijian碎剑: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'useCardBegin' },
							filter(event, player) {
								return ['sha', 'juedou'].includes(event.card.name);
							},
							content() {
								player.chooseToDiscard('he', '请弃置2张伤害标签牌', 2, (card) => get.tag(card, 'damage'), true);
							},
						},
						白鸟秘传: {
							audio: 'ext:洪荒ol/audio:2',
							nobracket: true,
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								game.GIF('liuxingyu', 2000);
								player.chooseTarget(get.prompt('白鸟秘传')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', '请弃置2张红色牌', 2, (card) => get.color(card) == 'red', true);
									player.discardPlayerCard(result.targets[0], 2, 'he', true);
								}
								('step 2');
								player.chooseTarget(get.prompt('白鸟秘传')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].gain(game.createCard('xiandan仙丹'), 'draw');
								}
							},
						},
						龙祭: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'shaBegin' },
							content() {
								var cards = get.cards(5);
								player.showCards(cards);
								var rm = 0,
									bm = 0;
								cards.forEach((c) => (get.color(c) == 'red' ? rm++ : bm++));
								cards.reverse().forEach(function (card) {
									ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
								});
								if (rm > bm) {
									//QQQ
									player.gain(game.createCard('huosuolianhuan火锁连环'), 'draw');
									game.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									})
										.sort(lib.sort.seat)
										.forEach((i) => {
											i.chooseToDiscard('he', '请弃置1张黑色牌', (card) => get.color(card) == 'black', true);
											i.gain(game.createCard('judu剧毒'), 'draw');
										});
								} else player.draw(2);
							},
						},
						潜袭mdqx: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								if (!player.wujiangjianjie) {
									player.wujiangjianjie = true;
									function animateVerticalText(text, fontSize, duration) {
										const container = document.createElement('div');
										container.style.cssText = `	
						pointer-events: none;
						position: absolute;
						top: 0;
						left: 0;
                        height: 100%;
						width: 100%;
						z-index: 1000;
					`;
										container.style.fontSize = fontSize;
										container.style.fontFamily = 'xinwei';
										container.style.writingMode = 'vertical-rl';
										container.style.textAlign = 'justify';
										ui.window.appendChild(container);
										text.split('').forEach((letter, index) => {
											const span = document.createElement('span');
											span.style.color = 'red';
											span.textContent = letter;
											container.appendChild(span);
											setTimeout(() => {
												span.style.display = 'inline-block';
											}, index * duration);
										});
										setTimeout(
											function () {
												ui.window.removeChild(container);
											},
											(text.length + 1) * duration + 2000
										);
									}
									animateVerticalText('马岱,生卒年不详,扶风茂陵(今陕西省兴平市)人.三国时期蜀汉名将,马超的从弟.早年追随马超大战曹操,反攻陇上,围攻成都,汉中之战等.后在诸葛亮病逝后受杨仪派遣斩杀了蜀将魏延.曾率领军队出师北伐,被魏将牛金击败而退还.官至平北将军、陈仓侯', '60px', 100);
								}
								player.draw(1 + player.maxHp - player.hp);
								('step 1');
								player.chooseCard('he', true, '选择一张牌展示之');
								('step 2');
								if (result.cards) player.showCards(result.cards);
								event.color = get.color(result.cards[0]);
								player
									.chooseTarget(
										function (card, player, target) {
											return player != target;
										},
										[1, 3],
										true
									)
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 3');
								if (result.bool && result.targets.length) {
									result.targets.forEach((i) => {
										i.storage.潜袭mdqx2 = event.color;
										i.addSkill('潜袭mdqx2');
									});
									player.line(result.targets, 'green');
									game.addVideo('storage', result.targets[0], ['潜袭mdqx2', event.color]);
								}
							},
							group: '潜袭mdqx3',
						},
						潜袭mdqx3: {
							audio: 3,
							trigger: { source: 'damageEnd' },
							content() {
								trigger.player.loseMaxHp();
							},
						},
						潜袭mdqx2: {
							trigger: { global: 'phaseAfter' },
							forced: true,
							mark: true,
							content() {
								player.removeSkill('潜袭mdqx2');
								delete player.storage.潜袭mdqx2;
							},
							mod: {
								cardEnabled(card, player) {
									if (get.color(card) == player.storage.潜袭mdqx2) return false;
								},
								cardUsable(card, player) {
									if (get.color(card) == player.storage.潜袭mdqx2) return false;
								},
								cardRespondable(card, player) {
									if (get.color(card) == player.storage.潜袭mdqx2) return false;
								},
								cardSavable(card, player) {
									if (get.color(card) == player.storage.潜袭mdqx2) return false;
								},
							},
							intro: {
								content(color) {
									return '不能使用或打出' + get.translation(color) + '的牌';
								},
							},
						},
						凉袭mdlx: {
							mod: {
								attackFrom(from, to, distance) {
									return distance - from.countCards('he', (card) => get.tag(card, 'damage'));
								},
							},
						},
						疾风暴雷: {
							audio: 'ext:洪荒ol/audio:2',
							group: '疾风暴雷2',
							trigger: { player: 'phaseBegin' },
							nobracket: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('疾风暴雷')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(result.targets[0], 2, 'he', true);
									var card = game.createCard('suijian碎剑');
									result.targets[0].equip(card, result.targets[0]);
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										if (get.type({ name: lib.inpile[i] }) == 'basic') list.push(lib.inpile[i]);
									}
									player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet()), game.createCard('changshezhen')], 'draw');
								}
							},
						},
						疾风暴雷2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'useCard' },
							filter(event, player) {
								if (_status.currentPhase == player && event.card.name == 'sha' && event.card.number > 6) return true;
								return false;
							},
							forced: true,
							popup: false,
							content() {
								if (player.stat[player.stat.length - 1].card.sha > 0) {
									player.stat[player.stat.length - 1].card.sha--;
								}
							},
						},
						jinshilichoince: {
							trigger: { player: ['gameDrawAfter', 'phaseBegin'] },
							forced: true,
							popup: false,
							silent: true,
							filter(event, player) {
								return player.group;
							},
							content() {
								'step 0';
								var controls = ['wei', 'jinshili'];
								var str = '请选择一个势力';
								player.chooseControl(controls, ui.create.dialog(str, 'hidden')).ai = function () {
									return Math.floor(Math.random() * controls.length);
								};
								('step 1');
								if (result.control) {
									player.group = result.control;
									if (get.mode() == 'guozhan') {
										player.identity = result.control;
										player._group = result.control;
										player.node.identity.firstChild.innerHTML = get.translation(result.control);
										player.node.identity.dataset.color = player.identity;
										if (player.name) lib.character[player.name][1] = result.control;
										if (player.name1) lib.character[player.name1][1] = result.control;
										if (player.name2) lib.character[player.name2][1] = result.control;
									} else {
										if (player.name) lib.character[player.name][1] = result.control;
										if (player.name1) lib.character[player.name1][1] = result.control;
										if (player.name2) lib.character[player.name2][1] = result.control;
									}
								}
								('step 2');
								switch (player.group) {
									case 'wei':
										if (player.node.name) player.node.name.style.color = 'blue';
										if (player.node.name2) player.node.name2.style.color = 'blue';
										break;
									case 'shu':
										if (player.node.name) player.node.name.style.color = 'red';
										if (player.node.name2) player.node.name2.style.color = 'red';
										break;
									case 'wu':
										if (player.node.name) player.node.name.style.color = 'green';
										if (player.node.name2) player.node.name2.style.color = 'green';
										break;
									case 'qun':
										if (player.node.name) player.node.name.style.color = 'white';
										if (player.node.name2) player.node.name2.style.color = 'white';
										break;
									case 'jinshili':
										if (player.node.name) player.node.name.style.color = '#4B0082';
										if (player.node.name2) player.node.name2.style.color = '#4B0082';
										break;
									default:
										if (player.node.name) player.node.name.dataset.nature = 'fire';
								}
							},
						},
						狼祭: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'shaBegin' },
							usable: 2,
							content() {
								'step 0';
								if (!player.wujiangjianjie) {
									player.wujiangjianjie = true;
									function animateText(text, fontSize, delay) {
										const container = document.createElement('div');
										container.style.cssText = `	
						pointer-events: none;
						position: absolute;
						top: 0;
						left: 0;
                        height: 100%;
						width: 100%;
						z-index: 1000;
					`;
										container.style.fontSize = fontSize + 'px';
										container.style.fontFamily = 'xinwei';
										container.style.writingMode = 'vertical-rl';
										container.style.textAlign = 'justify';
										ui.window.appendChild(container);
										for (var i = text.length - 1; i >= 0; i--) {
											setTimeout(() => {
												const span = document.createElement('span');
												span.style.color = '#4B0082';
												span.textContent = text[i];
												container.appendChild(span);
											}, i * delay);
										}
										setTimeout(
											function () {
												ui.window.removeChild(container);
											},
											(text.length + 1) * delay + 2000
										);
									}
									animateText('狼顾祭酒是一位神秘人物.她是一名非常强大的武士,身高约两米,身材魁梧,白发红眼,眼神冷冽如狼,给人一种凶狠的感觉.狼顾祭酒行踪诡秘,没有固定的居所,经常出现在危险的地方.据说他曾经是一位重要的宫廷将军,但后来因为某种原因离开了皇宫,成为了一名独来独往的祭酒.狼顾祭酒擅长各种武艺,尤其是刀剑功夫,他的剑法快且狠,出手极为凶狠,无人能敌.他还有着极高的智慧和洞察力,能够轻易看破对手的心思和计谋.因此,他在江湖上有着极高的声望和地位.尽管狼顾祭酒看起来凶狠,但他内心深处却是一位忠诚、正义的人.他虽然不轻易言语,但却总是义无反顾地为正义而战,护卫主公、击杀叛逆.总的来说,狼顾祭酒是一位神秘而又正义的女武士,他的身影如同夜空中的狼,无人能够捉摸其真正的目的和动机', 30, 300);
								}
								event.list = game
									.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									})
									.sortBySeat();
								('step 1');
								if (event.list.length) {
									event.current = event.list.shift();
								} else {
									event.goto(4);
								}
								('step 2');
								player.gainPlayerCard(event.current, 'he', true);
								('step 3');
								if (result.bool) {
									if (result.cards.some((i) => get.color(i) == 'black')) event.current.damage([1, 3].randomGet(), 'thunder');
								} else player.recover();
								event.goto(1);
								('step 4');
								player.gain(game.createCard('guohefencheng'), 'draw');
							},
						},
						凤凰: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								event.list = game
									.filterPlayer(function (current) {
										return current.isEnemiesOf(player);
									})
									.sortBySeat();
								('step 1');
								if (event.list.length) {
									event.current = event.list.shift();
								} else {
									event.goto(4);
								}
								('step 2');
								player.discardPlayerCard(event.current, 2, 'he', true);
								('step 3');
								if (result.bool) {
									if (result.cards.some((i) => i.suit == 'club')) {
										player.draw(2);
										player.recover(4);
									}
								}
								event.goto(1);
								('step 4');
								player.gain(game.createCard('guohefencheng'), 'draw');
							},
						},
						xianshilichoince: {
							trigger: { player: ['gameDrawAfter', 'phaseBegin'] },
							forced: true,
							popup: false,
							silent: true,
							filter(event, player) {
								return player.group;
							},
							content() {
								'step 0';
								var controls = ['qun', 'xianshili'];
								var str = '请选择一个势力';
								player.chooseControl(controls, ui.create.dialog(str, 'hidden')).ai = function () {
									return Math.floor(Math.random() * controls.length);
								};
								('step 1');
								if (result.control) {
									player.group = result.control;
									if (get.mode() == 'guozhan') {
										player.identity = result.control;
										player._group = result.control;
										player.node.identity.firstChild.innerHTML = get.translation(result.control);
										player.node.identity.dataset.color = player.identity;
										if (player.name) lib.character[player.name][1] = result.control;
										if (player.name1) lib.character[player.name1][1] = result.control;
										if (player.name2) lib.character[player.name2][1] = result.control;
									} else {
										if (player.name) lib.character[player.name][1] = result.control;
										if (player.name1) lib.character[player.name1][1] = result.control;
										if (player.name2) lib.character[player.name2][1] = result.control;
									}
								}
								('step 2');
								switch (player.group) {
									case 'wei':
										if (player.node.name) player.node.name.style.color = 'blue';
										if (player.node.name2) player.node.name2.style.color = 'blue';
										break;
									case 'shu':
										if (player.node.name) player.node.name.style.color = 'red';
										if (player.node.name2) player.node.name2.style.color = 'red';
										break;
									case 'wu':
										if (player.node.name) player.node.name.style.color = 'green';
										if (player.node.name2) player.node.name2.style.color = 'green';
										break;
									case 'qun':
										if (player.node.name) player.node.name.style.color = 'white';
										if (player.node.name2) player.node.name2.style.color = 'white';
										break;
									case 'xianshili':
										if (player.node.name) player.node.name.style.color = '#FF4500';
										if (player.node.name2) player.node.name2.style.color = '#FF4500';
										break;
									default:
										if (player.node.name) player.node.name.dataset.nature = 'fire';
								}
							},
						},
						安虞: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'shaEnd' },
							group: '安虞2',
							usable: 1,
							content() {
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (!get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
								}
								trigger.target.gain(game.createCard(list.randomGet()), 'draw');
								if (Math.random() < 0.3) trigger.target.gain(game.createCard('xiandan仙丹'), 'draw');
							},
						},
						安虞2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'gainEnd' },
							usable: 1,
							filter(event, player) {
								return get.type(event.card) == 'equip';
							},
							content() {
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (!get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
								}
								trigger.player.gain(game.createCard(list.randomGet()), 'draw');
								if (Math.random() < 0.3) trigger.player.gain(game.createCard('xiandan仙丹'), 'draw');
							},
						},
						激峭: {
							audio: 'ext:洪荒ol/audio:2',
							group: '激峭2',
							trigger: { player: 'useCardEnd' },
							usable: 5,
							content() {
								'step 0';
								player.draw([1, 5].randomGet());
								('step 1');
								var cards = get.cards(5);
								player.showCards(cards);
								var rm = 0,
									bm = 0;
								cards.forEach((c) => (get.color(c) == 'red' ? rm++ : bm++));
								event.r = rm;
								event.b = bm;
								cards.reverse().forEach(function (card) {
									ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
								});
								player.chooseTarget(get.prompt('激峭')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									for (var i = 0; i < [event.r, event.b].randomGet(); i++) {
										player.useCard({ name: 'sha' }, false, result.targets[0]);
									}
								}
							},
						},
						凶疑: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseEnd' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('凶疑'), [1, 4]).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets.map((i) => i.init('sunyi腾龙倒江', 'xushi')); //QQQ
								}
							},
						},
						激峭2: {
							trigger: { global: 'gameDrawEnd' },
							silent: true,
							popup: false,
							content() {
								if (!player.storage.激峭2) {
									player.storage.激峭2 = true;
									lib.translate.激峭_info = `<img src="extension/洪荒ol/image/激峭技能描述.jpg" width="120" height="82" style="display: block; margin: 0 auto;">`;
									lib.translate.凶疑_info = `<img src="extension/洪荒ol/image/凶疑技能描述.jpg" width="120" height="82" style="display: block; margin: 0 auto;">`;
								}
							},
						},
						义遂: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.judge();
								('step 1');
								if (result.color == 'black') player.addSkill('yicong');
								else {
									player
										.chooseTarget(get.prompt('义遂'), function (card, player, target) {
											return true;
										})
										.set('ai', function (target) {
											return get.attitude(player, target);
										});
								}
								('step 2');
								if (result.bool) {
									player.discardPlayerCard(result.targets[0], 'he', true);
									event.t = result.targets[0];
								}
								('step 3');
								if (result.bool && result.cards[0].name != 'sha') event.t.damage();
							},
						},
						肋幽: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('肋幽')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw(2 + result.targets[0].countCards('he', (card) => get.color(card) == 'black'));
								}
								('step 2');
								player.chooseTarget(get.prompt('肋幽')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									result.targets[0].gain(game.createCard(['judu剧毒', 'liedu烈毒'].randomGet()), 'draw');
									result.targets[0].addTempSkill('肋幽2', { player: 'phaseAfter' });
								}
							},
						},
						肋幽2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'damageEnd' },
							silent: true,
							popup: false,
							content() {
								player.chooseToDiscard('he', true, 2 + player.maxHp - player.hp);
							},
						},
						yeshilichoince: {
							trigger: { player: ['gameDrawAfter', 'phaseBegin'] },
							forced: true,
							popup: false,
							silent: true,
							filter(event, player) {
								return player.group;
							},
							content() {
								'step 0';
								var controls = ['qun', 'yeshili'];
								var str = '请选择一个势力';
								player.chooseControl(controls, ui.create.dialog(str, 'hidden')).ai = function () {
									return Math.floor(Math.random() * controls.length);
								};
								('step 1');
								if (result.control) {
									player.group = result.control;
									if (get.mode() == 'guozhan') {
										player.identity = result.control;
										player._group = result.control;
										player.node.identity.firstChild.innerHTML = get.translation(result.control);
										player.node.identity.dataset.color = player.identity;
										if (player.name) lib.character[player.name][1] = result.control;
										if (player.name1) lib.character[player.name1][1] = result.control;
										if (player.name2) lib.character[player.name2][1] = result.control;
									} else {
										if (player.name) lib.character[player.name][1] = result.control;
										if (player.name1) lib.character[player.name1][1] = result.control;
										if (player.name2) lib.character[player.name2][1] = result.control;
									}
								}
								('step 2');
								switch (player.group) {
									case 'wei':
										if (player.node.name) player.node.name.style.color = 'blue';
										if (player.node.name2) player.node.name2.style.color = 'blue';
										break;
									case 'shu':
										if (player.node.name) player.node.name.style.color = 'red';
										if (player.node.name2) player.node.name2.style.color = 'red';
										break;
									case 'wu':
										if (player.node.name) player.node.name.style.color = 'green';
										if (player.node.name2) player.node.name2.style.color = 'green';
										break;
									case 'qun':
										if (player.node.name) player.node.name.style.color = 'white';
										if (player.node.name2) player.node.name2.style.color = 'white';
										break;
									case 'yeshili':
										if (player.node.name) player.node.name.style.color = '#660070';
										if (player.node.name2) player.node.name2.style.color = '#660070';
										break;
									default:
										if (player.node.name) player.node.name.dataset.nature = 'fire';
								}
								game.JPG('jlghdhtx1', 2000);
								('step 3');
								game.JPG('jlghdhtx', 2000);
								const jianguoshili = ['qinjianguo', 'qijianguo', 'chujianguo', 'yanjianguo', 'zhaojianguo', 'hanjianguo', 'jinjianguo', 'xiajianguo', 'shangjianguo', 'zhoujianguo', 'liangjianguo', 'jinxjianguo'];
								var str = '请选择一个建国国号';
								player.chooseControl(jianguoshili, ui.create.dialog(str, 'hidden')).ai = function () {
									return Math.floor(Math.random() * jianguoshili.length); //QQQ
								};
								('step 4');
								if (result.control) {
									player.group = result.control;
									event.group = result.control;
									if (get.mode() == 'guozhan') {
										player.identity = result.control;
										player._group = result.control;
										player.node.identity.firstChild.innerHTML = get.translation(result.control);
										player.node.identity.dataset.color = player.identity;
										if (player.name) lib.character[player.name][1] = result.control;
										if (player.name1) lib.character[player.name1][1] = result.control;
										if (player.name2) lib.character[player.name2][1] = result.control;
									} else {
										if (player.name) lib.character[player.name][1] = result.control;
										if (player.name1) lib.character[player.name1][1] = result.control;
										if (player.name2) lib.character[player.name2][1] = result.control;
									}
								}
								('step 5');
								if (player.node.name) player.node.name.style.color = '#99FF00';
								if (player.node.name2) player.node.name2.style.color = '#99FF00';
								('step 6');
								player
									.chooseTarget('选择一名其他角色拉拢', function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 7');
								if (result.bool) {
									var jt = result.targets[0];
									jt.group = event.group;
									if (get.mode() == 'guozhan') {
										jt.identity = event.group;
										jt._group = event.group;
										jt.node.identity.firstChild.innerHTML = get.translation(event.group);
										jt.node.identity.dataset.color = jt.identity;
										if (jt.name) lib.character[jt.name][1] = event.group;
										if (jt.name1) lib.character[jt.name1][1] = event.group;
										if (jt.name2) lib.character[jt.name2][1] = event.group;
									} else {
										if (jt.name) lib.character[jt.name][1] = event.group;
										if (jt.name1) lib.character[jt.name1][1] = event.group;
										if (jt.name2) lib.character[jt.name2][1] = event.group;
									}
									if (jt.node.name) jt.node.name.style.color = '#99FF00';
									if (jt.node.name2) jt.node.name2.style.color = '#99FF00';
								}
							},
						},
						野权计: {
							audio: 'ext:洪荒ol/audio:2',
							nobracket: true,
							trigger: { player: 'damageEnd', source: 'damageEnd' },
							//frequent:true,
							notemp: true,
							init(player) {
								player.storage.野权计 = [];
							},
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								player.draw(trigger.num);
								('step 1');
								if (player.countCards('he')) {
									player.chooseCard('将' + get.cnNumber(trigger.num) + '张手牌置于武将牌上作为<权>', trigger.num, true);
								} else {
									event.finish();
								}
								('step 2');
								if (result.cards && result.cards.length) {
									player.lose(result.cards, ui.special);
									player.storage.野权计 = player.storage.野权计.concat(result.cards);
									player.markSkill('野权计');
									game.log(player, '将', result.cards, '置于武将牌上作为<权>');
								}
							},
							intro: {
								content: 'cards',
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.storage.野权计.length;
								},
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								threaten: 0.8,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (!target.hasFriend()) return;
											if (target.hp >= 4) return [0.5, get.tag(card, 'damage') * 2];
											if (!target.hasSkill('野排异') && target.hp > 1) return [0.5, get.tag(card, 'damage') * 1.5];
											if (target.hp == 3) return [0.5, get.tag(card, 'damage') * 1.5];
											if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
										}
									},
								},
							},
						},
						野自立: {
							audio: 'ext:洪荒ol/audio:2',
							nobracket: true,
							trigger: { player: 'phaseBegin' },
							forced: true,
							filter(event, player) {
								return player.storage.野权计 && player.storage.野权计.length >= 3;
							},
							content() {
								'step 0';
								player.chooseDrawRecover(2, true, function (event, player) {
									if (player.hp == 1 && player.isDamaged()) return 'recover_hp';
									return 'draw_card';
								});
								('step 1');
								player.gainMaxHp();
								player.addSkill('野排异');
							},
						},
						野排异: {
							enable: 'phaseUse',
							usable: 2,
							audio: 'ext:洪荒ol/audio:2',
							nobracket: true,
							filterTarget: true,
							filter(event, player) {
								return player.storage.野权计.length;
							},
							content() {
								'step 0';
								target.draw(2 + player.storage.野权计.length);
								player.chooseTarget(get.prompt('野排异'), [1, 1 + player.storage.野权计.length]).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets.map((i) => i.damage());
								}
								('step 2');
								player.chooseCardButton(player.storage.野权计, true);
								('step 3');
								var card = result.links[0];
								card.discard();
								player.$throw(card);
								player.storage.野权计.remove(card);
								if (!player.storage.野权计.length) {
									player.unmarkSkill('野权计');
								} else {
									player.markSkill('野权计');
								}
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										if (player != target) return 0;
										if (player.countCards('h') + 2 <= player.hp + player.storage.野权计.length) return 1;
										return 0;
									},
								},
							},
						},
						野观星: {
							audio: 'ext:洪荒ol/audio:2',
							nobracket: true,
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								if (player.isUnderControl()) {
									game.modeSwapPlayer(player);
								}
								var gxx = 5;
								if (player.storage.野权计.length) gxx += player.storage.野权计.length;
								var cards = get.cards(gxx);
								event.cards = cards;
								var switchToAuto = function () {
									_status.imchoosing = false;
									if (event.dialog) event.dialog.close();
									if (event.control) event.control.close();
									const top = [], bottom = cards;
									for (const i of player.getCards('j')) {
										const judge = get.judge(i);
										bottom.sort((a, b) => (judge(b) - judge(a))); //价值高的牌放前面
										if (bottom.length) {
											top.push(bottom.shift());
										}
									}
									bottom.sort((a, b) => (get.value(b) - get.value(a))); //把价值高的牌放前面
									while (bottom.length) {
										top.push(bottom.shift());
									}
									top.reverse();
									for (var i = 0; i < top.length; i++) {
										ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
									}
									for (var i = 0; i < bottom.length; i++) {
										ui.cardPile.appendChild(bottom[i]);
									}
									player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
									game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
								};
								var chooseButton = function (online, player, cards) {
									var event = _status.event;
									player = player || event.player;
									cards = cards || event.cards;
									event.top = [];
									event.bottom = [];
									event.status = true;
									event.dialog = ui.create.dialog('按顺序选择置于牌堆顶的牌(先选择的在上)', cards);
									for (var i = 0; i < event.dialog.buttons.length; i++) {
										event.dialog.buttons[i].classList.add('pointerdiv');
									}
									event.switchToAuto = function () {
										event._result = 'ai';
										event.dialog.close();
										event.control.close();
										_status.imchoosing = false;
									};
									event.control = ui.create.control('ok', 'pileTop', 'pileBottom', function (link) {
										var event = _status.event;
										if (link == 'ok') {
											if (online) {
												event._result = {
													top: [],
													bottom: [],
												};
												for (var i = 0; i < event.top.length; i++) {
													event._result.top.push(event.top[i].link);
												}
												for (var i = 0; i < event.bottom.length; i++) {
													event._result.bottom.push(event.bottom[i].link);
												}
											} else {
												var i;
												for (var i = 0; i < event.top.length; i++) {
													ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
												}
												for (var i = 0; i < event.bottom.length; i++) {
													ui.cardPile.appendChild(event.bottom[i].link);
												}
												for (var i = 0; i < event.dialog.buttons.length; i++) {
													if (event.dialog.buttons[i].classList.contains('glow') == false && event.dialog.buttons[i].classList.contains('target') == false) ui.cardPile.appendChild(event.dialog.buttons[i].link);
												}
												player.popup(get.cnNumber(event.top.length) + '上' + get.cnNumber(event.cards.length - event.top.length) + '下');
												game.log(player, '将' + get.cnNumber(event.top.length) + '张牌置于牌堆顶');
											}
											event.dialog.close();
											event.control.close();
											game.resume();
											_status.imchoosing = false;
										} else if (link == 'pileTop') {
											event.status = true;
											event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆顶的牌';
										} else {
											event.status = false;
											event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆底的牌';
										}
									});
									for (var i = 0; i < event.dialog.buttons.length; i++) {
										event.dialog.buttons[i].classList.add('selectable');
									}
									event.custom.replace.button = function (link) {
										var event = _status.event;
										if (link.classList.contains('target')) {
											link.classList.remove('target');
											event.top.remove(link);
										} else if (link.classList.contains('glow')) {
											link.classList.remove('glow');
											event.bottom.remove(link);
										} else if (event.status) {
											link.classList.add('target');
											event.top.unshift(link);
										} else {
											link.classList.add('glow');
											event.bottom.push(link);
										}
									};
									event.custom.replace.window = function () {
										for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
											_status.event.dialog.buttons[i].classList.remove('target');
											_status.event.dialog.buttons[i].classList.remove('glow');
											_status.event.top.length = 0;
											_status.event.bottom.length = 0;
										}
									};
									game.pause();
									game.countChoose();
								};
								event.switchToAuto = switchToAuto;
								if (event.isMine()) {
									chooseButton();
									event.finish();
								} else if (event.isOnline()) {
									event.player.send(chooseButton, true, event.player, event.cards);
									event.player.wait();
									game.pause();
								} else {
									event.switchToAuto();
									event.finish();
								}
								('step 1');
								if (event.result == 'ai' || !event.result) {
									event.switchToAuto();
								} else {
									var top = event.result.top || [];
									var bottom = event.result.bottom || [];
									for (var i = 0; i < top.length; i++) {
										ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
									}
									for (var i = 0; i < bottom.length; i++) {
										ui.cardPile.appendChild(bottom[i]);
									}
									for (var i = 0; i < event.cards.length; i++) {
										if (!top.includes(event.cards[i]) && !bottom.includes(event.cards[i])) {
											ui.cardPile.appendChild(event.cards[i]);
										}
									}
									player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(event.cards.length - top.length) + '下');
									game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
								}
							},
							ai: {
								threaten: 1.2,
							},
						},
						野挑衅: {
							audio: 'ext:洪荒ol/audio:2',
							nobracket: true,
							enable: 'phaseUse',
							usable: 2,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('野挑衅')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var txx = 1;
									if (player.storage.野权计.length) txx += player.storage.野权计.length;
									player.discardPlayerCard(txx, result.targets[0], 'he', true);
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								player.chooseTarget(get.prompt('野挑衅'));
								('step 3');
								if (result.bool) {
									event.target2 = result.targets[0];
									player.line2([event.target2, event.target]);
								} else event.finish();
								('step 4');
								event.target2.useCard({ name: 'sha' }, event.target, false);
							},
						},
						野志继: {
							audio: 'ext:洪荒ol/audio:2',
							nobracket: true,
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								return player.countCards('h') < player.maxHp;
							},
							content() {
								player.draw(2);
								player.recover();
							},
						},
						和昇: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseUseBegin' },
							content() {
								'step 0';
								player.draw();
								player.chooseTarget(get.prompt('和昇'), true).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								result.targets[0].draw();
								event.a = result.targets[0];
								('step 2');
								if (event.a.countCards('he', { color: 'red' }) < event.a.countCards('he', { color: 'black' })) {
									event.t = game
										.filterPlayer(function (current) {
											return current.isEnemiesOf(player);
										})
										.randomGet();
									var card = game.createCard('suijian碎剑');
									event.t.equip(card, event.t);
								} else event.finish();
								('step 3');
								for (var i = 0; i < 2 - event.t.getAttackRange(); i++) {
									event.a.useCard({ name: 'wanjian' }, event.t);
								}
							},
						},
						binghanjian冰汉剑: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'shaHit' },
							content() {
								'step 0';
								player
									.discardPlayerCard(get.prompt('binghanjian冰汉剑'), 'he', trigger.target, Math.min(4, trigger.target.countCards('he')), function (button) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										var eff = get.damageEffect(trigger.target, player, player);
										if (get.attitude(player, trigger.target) > 0) {
											if (eff >= 0) return false;
											return 10 - get.buttonValue(button);
										}
										if (eff <= 0) return get.buttonValue(button);
										if (trigger.target.hp == 1) return false;
										if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu') || player.hasSkill('luoyi2') || player.hasSkill('reluoyi2')) return -1;
										if (_status.event.dialog.buttons.length < 2) return -1;
										var num = 0;
										for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
											if (get.buttonValue(_status.event.dialog.buttons[i]) > 1.5) num++;
										}
										if (num >= 2) return get.buttonValue(button) - 1.5;
									})
									('step 1');
								if (result.bool) {
									trigger.target.loseHp();
									trigger.untrigger();
									trigger.unhurt = true;
								}
							},
						},
						jubingjian剧冰剑: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'shaHit' },
							content() {
								'step 0';
								player
									.discardPlayerCard(get.prompt('jubingjian剧冰剑'), 'he', trigger.target, Math.min(6, trigger.target.countCards('he')), function (button) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										var eff = get.damageEffect(trigger.target, player, player);
										if (get.attitude(player, trigger.target) > 0) {
											if (eff >= 0) return false;
											return 10 - get.buttonValue(button);
										}
										if (eff <= 0) return get.buttonValue(button);
										if (trigger.target.hp == 1) return false;
										if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu') || player.hasSkill('luoyi2') || player.hasSkill('reluoyi2')) return -1;
										if (_status.event.dialog.buttons.length < 2) return -1;
										var num = 0;
										for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
											if (get.buttonValue(_status.event.dialog.buttons[i]) > 1.5) num++;
										}
										if (num >= 2) return get.buttonValue(button) - 1.5;
									})
									('step 1');
								if (result.bool) {
									trigger.target.loseHp(2);
									trigger.untrigger();
									trigger.unhurt = true;
								}
							},
						},
						liebingjian烈冰剑: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'shaHit' },
							content() {
								'step 0';
								trigger.target.discard(trigger.target.getCards('he'));
								('step 1');
								if (result.bool) {
									trigger.target.loseHp(3);
									trigger.untrigger();
									trigger.unhurt = true;
								}
							},
						},
						率于: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('率于')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var n = result.targets[0].getAttackRange() + game.countPlayer((i) => i.group == result.targets[0].group);
									player.draw(n);
									player.chooseJunlingFor(result.targets[0]);
									event.t = result.targets[0];
									event.targets = result.targets;
								} else event.finish();
								('step 2');
								event.junling = result.junling;
								event.t.carryOutJunling(player, event.junling, event.targets);
							},
						},
						御陵: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'phaseEnd' },
							filter(event, player) {
								return event.player != player && event.player.countCards('he', (c) => c.name == 'sha') < 2;
							},
							content() {
								player.gainPlayerCard(trigger.player, 'he', true);
								if (Math.random() < 0.5) player.gain(game.createCard('xiantao仙桃'), 'draw');
							},
						},
						援绶: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'useCardEnd' },
							usable: 2,
							content() {
								'step 0';
								var list = [];
								var i, j, name;
								for (var i in lib.character) {
									if (lib.config.forbidall.includes(i)) continue;
									if (lib.config.banned.includes(i)) continue;
									if (lib.character[i][4] && lib.character[i][4].includes('boss')) continue;
									if (lib.character[i][4] && lib.character[i][4].includes('hiddenboss')) continue;
									if (get.config('double_character') && lib.config.forbiddouble.includes(i)) continue;
									list.push(i);
								}
								for (var i of ['baima白马', 'baimayicong白马义从']) {
									//QQQ
									name = i + '_charactercard';
									lib.card[name] = {
										enable: true,
										type: 'character',
										//image:'character/'+list[i],
										color: 'white',
										opacity: 1,
										textShadow: 'black 0 0 2px',
										chongzhu: true,
										filterTarget(card, player, target) {
											return true;
										},
										selectTarget: 1,
										content() {
											var name = card.name.slice(0, card.name.indexOf('_charactercard'));
											target.$gain2(card);
											var skills = lib.character[name][3];
											var list = [];
											var targetskills = target.getCards('s');
											for (var j = 0; j < skills.length; j++) {
												if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !lib.skill[skills[j]].unique && !targetskills.includes(skills[j])) {
													list.push(skills[j]);
												}
											}
											target.removeSkill('charactercard');
											if (list.length) {
												var skill = list.randomGet();
												target.popup(skill);
												game.log(target, '获得技能', '【' + get.translation(skill) + '】');
												target.addAdditionalSkill('charactercard', skill);
												target.checkMarks();
												target.storage.charactercard = card;
												target.addSkill('charactercard');
											} else {
												target.draw(2);
											}
										},
										ai: {
											order: 9,
											result: {
												target: (function (name) {
													return function (player, target) {
														if (target.additionalSkills.charactercard && target.additionalSkills.charactercard.length) return 0;
														return lib.character[name][2] <= 4 ? 1 : 0;
													};
												})(list[i]),
											},
										},
									};
									lib.translate[name] = get.translation(list[i]);
									lib.translate[name + '_info'] = get.skillintro(list[i], true, true);
								}
								var jsname = ['baima白马', 'baimayicong白马义从'].randomGet();
								var jcname = jsname + '_charactercard';
								lib.translate[jcname + '_bg'] = `<img src="extension/士兵扩展包/image/${jsname}.jpg" style="width: 62px; height: 50px;">`;
								var jncard = game.createCard(jcname);
								//jncard.node.image.setBackgroundImage('extension/士兵扩展包/image/'+jsname+'.jpg');
								player.gain(jncard, 'draw');
								player.draw();
								player.chooseTarget(get.prompt('援绶')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									if (result.targets[0].countCards('he', (c) => get.type(c) == 'basic') < 2) result.targets[0].damage();
								}
							},
						},
						毒蛇秘传: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseUseBegin' },
							nobracket: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('毒蛇秘传')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var gc = [];
									for (var j = 0; j < 1 + player.countCards('he', (c) => get.color(c) == 'black'); j++) {
										gc.push(game.createCard('liedu烈毒'));
									}
									result.targets[0].gain(gc, 'draw');
								}
							},
						},
						yaoshilichoince: {
							trigger: { player: ['gameDrawAfter', 'phaseBegin'] },
							forced: true,
							popup: false,
							silent: true,
							filter(event, player) {
								return player.group;
							},
							content() {
								'step 0';
								var controls = ['qun', 'yaoshili'];
								var str = '请选择一个势力';
								player.chooseControl(controls, ui.create.dialog(str, 'hidden')).ai = function () {
									return Math.floor(Math.random() * controls.length);
								};
								('step 1');
								if (result.control) {
									player.group = result.control;
									if (get.mode() == 'guozhan') {
										player.identity = result.control;
										player._group = result.control;
										player.node.identity.firstChild.innerHTML = get.translation(result.control);
										player.node.identity.dataset.color = player.identity;
										if (player.name) lib.character[player.name][1] = result.control;
										if (player.name1) lib.character[player.name1][1] = result.control;
										if (player.name2) lib.character[player.name2][1] = result.control;
									} else {
										if (player.name) lib.character[player.name][1] = result.control;
										if (player.name1) lib.character[player.name1][1] = result.control;
										if (player.name2) lib.character[player.name2][1] = result.control;
									}
								}
								('step 2');
								switch (player.group) {
									case 'wei':
										if (player.node.name) player.node.name.style.color = 'blue';
										if (player.node.name2) player.node.name2.style.color = 'blue';
										break;
									case 'shu':
										if (player.node.name) player.node.name.style.color = 'red';
										if (player.node.name2) player.node.name2.style.color = 'red';
										break;
									case 'wu':
										if (player.node.name) player.node.name.style.color = 'green';
										if (player.node.name2) player.node.name2.style.color = 'green';
										break;
									case 'qun':
										if (player.node.name) player.node.name.style.color = 'white';
										if (player.node.name2) player.node.name2.style.color = 'white';
										break;
									case 'yaoshili':
										if (player.node.name) player.node.name.style.color = '#FF8CBC';
										if (player.node.name2) player.node.name2.style.color = '#FF8CBC';
										break;
									default:
										if (player.node.name) player.node.name.dataset.nature = 'fire';
								}
							},
						},
						shengshilichoince: {
							trigger: { player: ['gameDrawAfter', 'phaseBegin'] },
							forced: true,
							popup: false,
							silent: true,
							filter(event, player) {
								return player.group;
							},
							content() {
								'step 0';
								var controls = ['qun', 'shengshili'];
								var str = '请选择一个势力';
								player.chooseControl(controls, ui.create.dialog(str, 'hidden')).ai = function () {
									return Math.floor(Math.random() * controls.length);
								};
								('step 1');
								if (result.control) {
									player.group = result.control;
									if (get.mode() == 'guozhan') {
										player.identity = result.control;
										player._group = result.control;
										player.node.identity.firstChild.innerHTML = get.translation(result.control);
										player.node.identity.dataset.color = player.identity;
										if (player.name) lib.character[player.name][1] = result.control;
										if (player.name1) lib.character[player.name1][1] = result.control;
										if (player.name2) lib.character[player.name2][1] = result.control;
									} else {
										if (player.name) lib.character[player.name][1] = result.control;
										if (player.name1) lib.character[player.name1][1] = result.control;
										if (player.name2) lib.character[player.name2][1] = result.control;
									}
								}
								('step 2');
								switch (player.group) {
									case 'wei':
										if (player.node.name) player.node.name.style.color = 'blue';
										if (player.node.name2) player.node.name2.style.color = 'blue';
										break;
									case 'shu':
										if (player.node.name) player.node.name.style.color = 'red';
										if (player.node.name2) player.node.name2.style.color = 'red';
										break;
									case 'wu':
										if (player.node.name) player.node.name.style.color = 'green';
										if (player.node.name2) player.node.name2.style.color = 'green';
										break;
									case 'qun':
										if (player.node.name) player.node.name.style.color = 'white';
										if (player.node.name2) player.node.name2.style.color = 'white';
										break;
									case 'shengshili':
										if (player.node.name) player.node.name.style.color = '#FFA726';
										if (player.node.name2) player.node.name2.style.color = '#FFA726';
										break;
									default:
										if (player.node.name) player.node.name.dataset.nature = 'fire';
								}
							},
						},
						越王勾践剑: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'useCardEnd' },
							nobracket: true,
							filter(event, player) {
								return player.countCards('he', (c) => get.color(c) == 'black') > player.countCards('he', (c) => get.color(c) == 'red');
							},
							enable: 'phaseUse',
							usable: 2,
							content() {
								'step 0';
								player.draw(2);
								player.chooseTarget(get.prompt('越王勾践剑')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
						},
						凛寒: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('凛寒')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(3, result.targets[0], 'he', true);
									event.t = result.targets[0];
								}
								('step 2');
								var num = 1 + (result.cards.filter((c) => get.type(c) != 'equip').length ? result.cards.filter((c) => get.type(c) != 'equip').length : 0);
								for (var j = 0; j < num; j++) {
									player.useCard({ name: 'bingsha' }, event.t, false);
								}
							},
						},
						雪兽: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('雪兽')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.recover(1 + result.targets[0].countCards('he', (c) => get.color(c) == 'black'));
								}
							},
						},
						冰躯: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'damageBegin' },
							content() {
								player.gain(game.createCard('bingsha'), 'draw');
								if (trigger.nature === 'fire' || trigger.nature === 'bingsx') {
									trigger.cancel();
									if (trigger.nature === 'bingsx') {
										player.recover();
									}
								} else {
									trigger.num--;
								}
							},
						},
						败兵: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseUseBegin', target: 'shaBegin' },
							forced: true,
							content() {
								player.chooseToDiscard('he', true, 2 + player.countCards('he', (c) => get.color(c) == 'black' || get.tag(c, 'damage')));
								player.loseHp();
							},
						},
						道役: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: ['phaseBegin', 'damageBegin', 'loseHpBegin'] },
							content() {
								'step 0';
								//player.tpline(game.players, lvshiline, 300);
								game.mp4('zuoci鬼左慈sptx');
								('step 1');
								var cards = get.cards(5);
								player.showCards(cards);
								var rm = 0,
									bm = 0;
								if (cards.some((c) => get.color(c) == 'red' || get.type(c) == 'equip')) {
									player
										.chooseTarget(get.prompt('道役'), function (card, player, target) {
											return true;
										})
										.set('ai', function (target) {
											return -get.attitude(player, target);
										});
								}
								cards.reverse().forEach(function (card) {
									ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
								});
								('step 2');
								if (result.bool) {
									result.targets[0].loseHp();
								}
								player.changeHujia();
								if (Math.random() < 0.66) player.gain(game.createCard('xiandan仙丹'), 'draw');
							},
						},
						仙魄: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'dyingBegin' },
							content() {
								'step 0';
								player.judge();
								('step 1');
								if (result.color != 'club') {
									player.gainMaxHp(3 + game.countPlayer((i) => i.countCards('he', (c) => c.suit == 'club')));
									player.recover(3 + game.countPlayer((i) => i.countCards('he', (c) => c.suit == 'club')));
								}
							},
						},
						guishilichoince: {
							trigger: { player: ['gameDrawAfter', 'phaseBegin'] },
							forced: true,
							popup: false,
							silent: true,
							filter(event, player) {
								return player.group;
							},
							content() {
								'step 0';
								var controls = ['qun', 'guishili'];
								var str = '请选择一个势力';
								player.chooseControl(controls, ui.create.dialog(str, 'hidden')).ai = function () {
									return Math.floor(Math.random() * controls.length);
								};
								('step 1');
								if (result.control) {
									player.group = result.control;
									if (get.mode() == 'guozhan') {
										player.identity = result.control;
										player._group = result.control;
										player.node.identity.firstChild.innerHTML = get.translation(result.control);
										player.node.identity.dataset.color = player.identity;
										if (player.name) lib.character[player.name][1] = result.control;
										if (player.name1) lib.character[player.name1][1] = result.control;
										if (player.name2) lib.character[player.name2][1] = result.control;
									} else {
										if (player.name) lib.character[player.name][1] = result.control;
										if (player.name1) lib.character[player.name1][1] = result.control;
										if (player.name2) lib.character[player.name2][1] = result.control;
									}
								}
								('step 2');
								switch (player.group) {
									case 'wei':
										if (player.node.name) player.node.name.style.color = 'blue';
										if (player.node.name2) player.node.name2.style.color = 'blue';
										break;
									case 'shu':
										if (player.node.name) player.node.name.style.color = 'red';
										if (player.node.name2) player.node.name2.style.color = 'red';
										break;
									case 'wu':
										if (player.node.name) player.node.name.style.color = 'green';
										if (player.node.name2) player.node.name2.style.color = 'green';
										break;
									case 'qun':
										if (player.node.name) player.node.name.style.color = 'white';
										if (player.node.name2) player.node.name2.style.color = 'white';
										break;
									case 'guishili':
										if (player.node.name) player.node.name.style.color = '#6D8D9B';
										if (player.node.name2) player.node.name2.style.color = '#6D8D9B';
										break;
									default:
										if (player.node.name) player.node.name.dataset.nature = 'fire';
								}
							},
						},
						水土流失: {
							audio: 'ext:洪荒ol/audio:2',
							nobracket: true,
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('水土流失')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard(2, result.targets[0], 'he', true);
									event.t = result.targets[0];
								}
								('step 2');
								if (result.bool) {
									event.t.damage('shuisx');
									event.t.damage('tusx');
								}
							},
						},
						陷雷: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseEnd' },
							forced: true,
							content() {
								'step 0';
								//player.tpline(game.players, 'huansedianline', 2000);
								player.judge();
								('step 1');
								if (result.color == 'spade') player.damage(2, 'thunder');
								else player.damage('thunder');
							},
						},
						陷石: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseEnd' },
							forced: true,
							content() {
								'step 0';
								//player.tpline(game.players, 'shiline', 300);
								player.judge();
								('step 1');
								if (result.color == 'club') player.damage(2, 'tusx');
								else player.damage('tusx');
							},
						},
						义炬: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								//player.tpline(game.players, 'jinjiangsxline', 300);
								player.chooseTarget(get.prompt('义炬')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(result.targets[0], 'he', true);
									event.t = result.targets[0];
								} else event.finish();
								('step 2');
								if (event.t.countCards('he', (c) => get.tag(c, 'damage')) <= 2) event.t.damage('fire');
							},
						},
						yao药2: {
							trigger: { player: 'loseHpBegin' },
							silent: true,
							content() {
								trigger.cancel();
								player.removeSkill('yao药2');
							},
						},
						巾鸣: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.gain([game.createCard('woleihongding'), game.createCard('bingsha')], 'draw');
								player.chooseTarget(get.prompt('巾鸣'), true).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									//player.tpline(result.targets[0], 'leimingline', 300);
									event.t = result.targets[0];
								}
								('step 2');
								var num = 1 + player.countCards('he', (c) => get.tag(c, 'damage')) - event.t.countCards('he', (c) => get.tag(c, 'damage'));
								event.t.damage('thunder', num);
							},
						},
						砺剑忾仇诛佞: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 4,
							filter(event, player) {
								if (!player.countCards('h')) return false;
								var list = ['sha', 'tao', 'jiu', 'taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
								if (get.mode() == 'guozhan') {
									list = list.concat(['xietianzi', 'shuiyanqijunx', 'lulitongxin', 'lianjunshengyan', 'chiling', 'diaohulishan', 'yuanjiao', 'huoshaolianying']);
								}
								for (var i = 0; i < list.length; i++) {
									if (event.filterCard && event.filterCard({ name: list[i] }, player)) return true;
								}
								return false;
							},
							chooseButton: {
								dialog() {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										if (name == 'wuxie') continue;
										if (name == 'sha') {
											list.push(['基本', '', 'sha']);
											list.push(['基本', '', 'sha', 'fire']);
											list.push(['基本', '', 'sha', 'thunder']);
										} else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
										else if (get.type(name) == 'basic') list.push(['基本', '', name]);
									}
									return ui.create.dialog('砺剑忾仇诛佞', [list, 'vcard']);
								},
								filter(button, player) {
									var evt = _status.event.parent;
									if (evt && evt.filterCard) {
										return evt.filterCard({ name: button.link[2] }, player, evt);
									}
									return true;
								},
								backup(links, player) {
									return {
										filterCard: false,
										selectCard: 0,
										viewAs: { name: links[0][2], nature: links[0][3] },
										precontent() {
											'step 0';
											player.chooseToDiscard('he', true, [1, player.countCards('he')]);
											('step 1');
											var list = game.filterPlayer(function (current) {
												return current.isFriendsOf(player);
											});
											list.sort(lib.sort.seat);
											if (list.length) {
												player.line(list, 'green');
												for (var i = 0; i < list.length; i++) {
													for (var j = 0; j < result.cards.length; j++) {
														list[i].gain(game.createCard(result.cards[j]));
														list[i].$draw();
													}
												}
											}
										},
									};
								},
								prompt(links, player) {
									return '视为使用' + get.translation(links[0][2]);
								},
							},
						},
						砺剑忾仇封乡: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: {
								player: 'phaseBefore',
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget('选择【封乡】的目标', lib.translate.砺剑忾仇封乡_info, true, function (card, player, target) {
										return !target.hasSkill('砺剑忾仇封乡_mark');
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (att < 0) return -att + 3;
										return Math.random();
									});
								('step 1');
								if (result.bool) {
									//player.tpline(result.targets[0], '旋转刀line', 300);
									var target = result.targets[0];
									game.log(target, '成为了', '#g【封乡】', '的目标');
									target.storage.砺剑忾仇封乡_mark = player;
									target.addSkill('砺剑忾仇封乡_mark');
								}
							},
							subSkill: {
								mark: {
									usable: 1,
									intro: {
										content: '每回合限一次,当你的牌数发生变化结束后,回复体力后,所有友方角色摸2张牌',
									},
									nopop: true,
									trigger: {
										player: ['loseAfter', 'gainAfter', 'recoverAfter'],
									},
									popup: false,
									forced: true,
									filter(event, player) {
										if (player.storage.砺剑忾仇封乡_mark && player.storage.砺剑忾仇封乡_mark.isAlive() && player.storage.砺剑忾仇封乡_mark.isIn()) {
											return true;
										}
									},
									content() {
										var list = game.filterPlayer(function (current) {
											return current.isFriendsOf(player);
										});
										list.sort(lib.sort.seat);
										if (list.length) {
											player.line(list, 'green');
											for (var i = 0; i < list.length; i++) {
												list[i].draw(2);
											}
										}
									},
								},
							},
						},
						血途: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('血途')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].draw(2);
									result.targets[0].recover();
									result.targets[0].gain(game.createCard('yao药'), 'draw');
								}
								('step 2');
								player.chooseTarget(get.prompt('血途')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 3');
								if (result.bool) {
									//player.tpline(result.targets[0], 'yangfengguyujianline', 300);
									result.targets[0].chooseToDiscard('he', true, 2);
									result.targets[0].loseHp();
								}
							},
						},
						pofudao破俘刀: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'loseEnd' },
							filter(event, player) {
								return event.cards && event.cards.some((i) => i.name == 'jiu');
							},
							content() {
								player.gain(game.createCard('liejiu'), 'draw');
								trigger.player.loseHp();
							},
						},
						俘铸: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							content() {
								player.draw(2);
								var card = game.createCard('pofudao破俘刀', 'spade', 6);
								player.equip(card, player);
							},
						},
						起营: {
							audio: 3,
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 2;
								var fellow = game.addFellow(pos, 'xianzhenying陷阵营');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity(`<img src="extension/洪荒ol/sczhong.gif" width="20" height="20">`);
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'xianzhenying陷阵营');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity(`<img src="extension/洪荒ol/sczhong.gif" width="20" height="20">`);
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								('step 1');
								player.removeSkill('起营');
							},
						},
						陷阵gs: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 2,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('陷阵gs')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.storage.陷阵gs = result.targets[0];
									player.discardPlayerCard(result.targets[0], 'he', true);
									player.addTempSkill('陷阵gs2', { player: 'phaseAfter' });
									event.t = result.targets[0];
								}
								('step 2');
								if (result.bool) {
									if (result.cards[0].name == 'sha' || result.cards[0].number <= 9) event.t.loseHp();
								}
							},
						},
						禁酒gs4: {
							mod: {
								cardEnabled(card, player) {
									if (card.name == 'jiu' && _status.event.skill != '禁酒gs4') return false;
								},
								cardUsable(card, player) {
									if (card.name == 'jiu' && _status.event.skill != '禁酒gs4') return false;
								},
								cardRespondable(card, player) {
									if (card.name == 'jiu' && _status.event.skill != '禁酒gs4') return false;
								},
								cardSavable(card, player) {
									if (card.name == 'jiu' && _status.event.skill != '禁酒gs4') return false;
								},
							},
							enable: ['chooseToUse', 'chooseToRespond'],
							filter(event, player) {
								return player.countCards('h', 'jiu') > 0;
							},
							filterCard: { name: 'jiu' },
							viewAs: { name: 'sha' },
							viewAsFilter(player) {
								if (!player.countCards('h', 'jiu')) return false;
							},
							check() {
								return 1;
							},
							ai: {
								skillTagFilter(player) {
									if (!player.countCards('h', 'jiu')) return false;
								},
								respondSha: true,
								order: 4,
								useful: -1,
								value: -1,
							},
						},
						陷阵gs2: {
							mod: {
								targetInRange(card, player, target, now) {
									if (player.storage.xianzhen == target) return true;
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return Infinity;
								},
							},
							ai: {
								unequip: true,
							},
						},
						禁酒gs5: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.parent.parent.skill == '禁酒gs4';
							},
							check() {
								return false;
							},
							content() {
								trigger.num++;
							},
						},
						禁酒gs3: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'damageBegin' },
							popup: false,
							forced: true,
							content() {
								trigger.num = 0;
								player.removeSkill('禁酒gs3');
							},
						},
						禁酒gs2: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'useCardEnd' },
							filter(event, player) {
								return event.card.name == 'jiu';
							},
							content() {
								trigger.player.loseHp();
								trigger.player.addSkill('禁酒gs3');
							},
						},
						禁酒gs: {
							audio: 'ext:洪荒ol/audio:2',
							group: ['禁酒gs2', '禁酒gs4'],
							trigger: { global: 'gainEnd' },
							usable: 1,
							content() {
								player.wzline(game.players, '踏阵无归至死方休陷阵营哪里去不得劝君莫贪杯空曰凌云志饮酒误事恕顺不能共饮', 20, 300);
								player.gainPlayerCard(trigger.cards.length, trigger.player, 'he', true);
								var gainCards = [];
								for (var i = 0; i < trigger.cards.length; i++) {
									gainCards.push(game.createCard('jiu'));
								}
								trigger.player.gain(gainCards, 'draw');
							},
						},
						营图: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'gainEnd' },
							filter(event, player) {
								return [player.previous, player.next].includes(event.player);
							},
							content() {
								'step 0';
								player.wzline(trigger.player, '非我摇摆不定实乃形势所逼营图反正以效天下正朔', 120, 300);
								player.gainPlayerCard(trigger.player, 'he', true);
								player.chooseTarget(get.prompt('营图')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var card = player.getCards('he').randomGet();
									result.targets[0].gain([game.createCard(card), game.createCard('lingzhi灵芝')], 'draw');
									result.targets[0].chooseToUse('营图:可使用一张杀', (c) => c.name == 'sha');
								}
							},
						},
						从势: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'useCardEnd' },
							filter(event, player) {
								return event.card.name == 'sha' || !get.tag(event.card, 'damage');
							},
							content() {
								player.wzline(game.players, '风卷云涌龙虎相斗顺势可生逆势则亡其力不足者可附骥尾而行得千里之惠居一隅而不见天下实乃井中之蛙也', 120, 300);
								player.draw(game.countGroup());
								trigger.player.addTempSkill('从势2', { player: 'phaseAfter' });
							},
						},
						从势2: {
							mod: {
								maxHandcard(player, num) {
									return num - game.countPlayer((i) => i.group == 'qun');
								},
							},
						},
						liemao: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'shaBegin' },
							forced: true,
							content() {
								player.chooseToDiscard('he', true, (c) => get.tag(c, 'damage'));
								if (Math.random() < 0.3) player.damage();
							},
						},
						cangtieshuo苍铁槊: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'shaBegin' },
							filter(event, player) {
								return player.maxHp > event.target.maxHp;
							},
							content() {
								player.useCard({ name: 'qijia' }, event.target);
								event.target.loseHp();
							},
						},
						裂胆ld: {
							audio: 'ext:洪荒ol/audio:2',
							marktext: '胆',
							init(player) {
								player.storage.裂胆ld = 0;
							},
							intro: {
								content(storage) {
									return '当前有' + storage + '个<裂胆>';
								},
							},
							mark: true,
							trigger: { global: 'phaseBegin' },
							content() {
								player.wzline(trigger.player, '我麾下健儿跺脚可叫你江东地动山摇行走江湖门户为重你是谁家小儿', 120, 300);
								if (player.hp >= trigger.player.hp) {
									player.draw();
									player.gainMaxHp();
									player.recover();
								} else {
									event.target = trigger.player;
									player.line(event.target);
									if (event.target.storage.裂胆ld == undefined) event.target.storage.裂胆ld = 0;
									event.target.markSkill('裂胆ld');
									event.target.storage.裂胆ld++;
								}
								if (player.countCards('h') >= trigger.player.countCards('h')) {
									player.draw();
									player.gainMaxHp();
									player.recover();
								} else {
									event.target = trigger.player;
									player.line(event.target);
									if (event.target.storage.裂胆ld == undefined) event.target.storage.裂胆ld = 0;
									event.target.markSkill('裂胆ld');
									event.target.storage.裂胆ld++;
								}
								if (player.countCards('e') >= trigger.player.countCards('e')) {
									player.draw();
									player.gainMaxHp();
									player.recover();
								} else {
									event.target = trigger.player;
									player.line(event.target);
									if (event.target.storage.裂胆ld == undefined) event.target.storage.裂胆ld = 0;
									event.target.markSkill('裂胆ld');
									event.target.storage.裂胆ld++;
								}
							},
						},
						壮胆zd: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { global: 'phaseEnd' },
							content() {
								'step 0';
								player.wzline(trigger.player, '本将军立于阵前可叫贼囚西行敌将破胆区区黑厮以屠猪为业也配上阵为将', 120, 300);
								if (typeof trigger.player.storage.裂胆ld == 'number' && trigger.player.storage.裂胆ld >= 5) player.chooseControl('死亡', '回血');
								('step 1');
								if (result.control == '死亡') {
									trigger.player.die();
								} else {
									trigger.player.recover(trigger.player.storage.裂胆ld);
									player.gain(game.createCard('cangtieshuo苍铁槊', 'spade', 5), 'draw');
								}
							},
						},
						画皮: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								var list = [];
								var i, j, name;
								for (var i in lib.character) {
									if (lib.config.forbidall.includes(i)) continue;
									if (lib.config.banned.includes(i)) continue;
									if (lib.character[i][4] && lib.character[i][4].includes('boss')) continue;
									if (lib.character[i][4] && lib.character[i][4].includes('hiddenboss')) continue;
									if (get.config('double_character') && lib.config.forbiddouble.includes(i)) continue;
									list.push(i);
								}
								var suit = ['heart', 'diamond', 'club', 'spade'];
								for (var i = 0; i < list.length; i++) {
									name = list[i] + '_charactercard';
									lib.card[name] = {
										enable: true,
										type: 'character',
										color: 'white',
										opacity: 1,
										textShadow: 'black 0 0 2px',
										chongzhu: true,
										filterTarget(card, player, target) {
											return true;
										},
										selectTarget: 1,
										content() {
											var name = card.name.slice(0, card.name.indexOf('_charactercard'));
											target.$gain2(card);
											var skills = lib.character[name][3];
											var list = [];
											var targetskills = target.getCards('s');
											for (var j = 0; j < skills.length; j++) {
												if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !lib.skill[skills[j]].unique && !targetskills.includes(skills[j])) {
													list.push(skills[j]);
												}
											}
											target.removeSkill('charactercard');
											if (list.length) {
												var skill = list.randomGet();
												target.popup(skill);
												game.log(target, '获得技能', '【' + get.translation(skill) + '】');
												target.addAdditionalSkill('charactercard', skill);
												target.checkMarks();
												target.storage.charactercard = card;
												target.addSkill('charactercard');
											} else {
												target.draw(2);
											}
										},
										ai: {
											order: 9,
											result: {
												target: (function (name) {
													return function (player, target) {
														if (target.additionalSkills.charactercard && target.additionalSkills.charactercard.length) return 0;
														return lib.character[name][2] <= 4 ? 1 : 0;
													};
												})(list[i]),
											},
										},
									};
									lib.translate[name] = get.translation(list[i]);
									lib.translate[name + '_info'] = get.skillintro(list[i], true, true);
								}
								var jslist = [];
								for (var i in lib.character) {
									if (lib.config.forbidall.includes(i) || lib.config.banned.includes(i) || lib.character[i][0] != 'female' || (lib.character[i][4] && (lib.character[i][4].includes('boss') || lib.character[i][4].includes('hiddenboss'))) || (get.config('double_character') && lib.config.forbiddouble.includes(i))) {
										continue;
									}
									jslist.push(i);
								}
								var jsname = jslist.randomGet();
								var jcname = jsname + '_charactercard';
								lib.translate[jcname + '_bg'] = `<img src="extension/洪荒ol/image/jinengkpbeijing.jpg" style="width: 62px; height: 50px;">`;
								var jncard = game.createCard(jcname);
								player.gain(jncard, 'draw');
								player.recover(lib.character[jsname][3].length);
							},
						},
						_qhbjmfz: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 2019,
							content() {
								let currentIndex = 0;
								function switchBackground() {
									currentIndex = (currentIndex + 1) % 26;
									ui.background.setBackgroundImage(`extension/洪荒ol/qhbjmfz/${currentIndex}.jpg`);
								}
								setInterval(switchBackground, 60000);
							},
						},
						直取: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseEnd' },
							content() {
								'step 0';
								//player.tpline(game.players, 'yangangline', 300);
								var n = 4 + game.countPlayer((i) => i.group == 'qun');
								event.cards = get.cards(n);
								player.showCards(event.cards);
								player.gain(event.cards);
								('step 1');
								if (player.countCards('h', (card) => get.type(card) != 'equip')) {
									player.chooseToUse('直取:使用一张非装备牌').filterCard = function (card) {
										return get.type(card) != 'equip' && get.itemtype(card) == 'card';
									};
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									event.goto(1);
								}
							},
						},
						义锋: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'damageBegin' },
							content() {
								player.addTempSkill('义锋2', { player: 'phaseBegin' });
							},
						},
						义锋2: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 2;
								},
								globalTo(from, to, distance) {
									return distance + 2;
								},
							},
						},
						降将: {
							audio: 'ext:洪荒ol/audio:2',
							forced: true,
							trigger: { target: 'shaBegin' },
							content() {
								trigger.player.tpline(player, 'xiangjiangline', 300);
								trigger.player.useCard({ name: 'qijia' }, player);
								player.discard(player.getCards('he').randomGet());
							},
						},
						tianziyue: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('tianziyue')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(3, result.targets[0], 'he', true);
									event.t = result.targets[0];
								}
								('step 2');
								if (result.bool) {
									if (result.cards.some((c) => get.type(c) == 'equip')) player.draw(3 - event.t.countCards('he', { color: 'black' }));
								}
							},
						},
						流云: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseDrawBegin' },
							content() {
								var gaincard = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									if (ui.cardPile.childNodes[i].suit == 'heart') {
										gaincard.push(ui.cardPile.childNodes[i].name);
									}
								}
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									if (ui.discardPile.childNodes[i].suit == 'heart') {
										gaincard.push(ui.discardPile.childNodes[i].name);
									}
								}
								var cards = [];
								for (var i = 0; i < 4; i++) {
									cards.push(game.createCard(gaincard.randomGet()));
								}
								player.gain(cards, 'draw');
							},
						},
						踏影: {
							audio: 'ext:洪荒ol/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								function loadFrames(framePaths, onload) {
									var frames = [];
									var loaded = 0;
									framePaths.forEach((path, index) => {
										var img = new Image();
										img.onload = () => {
											frames[index] = img;
											loaded++;
											if (loaded === framePaths.length) {
												onload(frames);
											}
										};
										img.src = path;
									});
								}
								function playFrameAnimation(frameCount, width, height, frameDuration, position, framePaths) {
									var canvas = document.createElement('canvas');
									canvas.width = width;
									canvas.height = height;
									canvas.style.position = 'absolute';
									canvas.style.left = position.x + 'px';
									canvas.style.top = position.y + 'px';
									canvas.style['z-index'] = 2024;
									if (game.chess) ui.chess.appendChild(canvas);
									else ui.arena.appendChild(canvas);
									var ctx = canvas.getContext('2d');
									var currentFrame = 0;
									loadFrames(framePaths, (frames) => {
										function draw() {
											if (currentFrame < frameCount) {
												ctx.clearRect(0, 0, width, height);
												ctx.drawImage(frames[currentFrame], 0, 0, width, height);
												currentFrame++;
												setTimeout(draw, frameDuration);
											} else {
												if (game.chess) ui.chess.removeChild(canvas);
												else ui.arena.removeChild(canvas);
											}
										}
										draw();
									});
								}
								var framePaths = [];
								var lj = 'extension/洪荒ol/';
								for (var n = 0; n < 10; n++) {
									framePaths.push(lj + 'sfx_40200_0/sfx_40200_0_000' + n + '.png');
								}
								playFrameAnimation(10, 412, 628, 50, { x: player.offsetLeft + (1 / 2) * (player.node.avatar.offsetWidth - 412), y: player.offsetTop - 628 / 2 }, framePaths);
								player.chooseTarget(get.prompt('踏影')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(result.targets[0], 'he', true);
									event.tjs = 0;
									event.t = result.targets[0];
								} else event.finish();
								('step 2');
								if (result.bool) {
									if (result.cards[0].suit != 'heart') {
										event.t.loseHp();
										event.tjs += 1;
									}
								}
								player.judge();
								('step 3');
								if (result.suit != 'heart') {
									event.t.loseHp();
									event.tjs += 1;
								}
								if (event.tjs) {
									var list1 = get.typeCard('food');
									player.gain([game.createCard(list1.randomGet())], 'draw');
								}
							},
						},
						梦卜zx: {
							audio: 'ext:洪荒ol/audio:2',
							nobracket: true,
							trigger: { player: 'useCardEnd' },
							usable: 2,
							content() {
								'step 0';
								function loadFrames(framePaths, onload) {
									var frames = [];
									var loaded = 0;
									framePaths.forEach((path, index) => {
										var img = new Image();
										img.onload = () => {
											frames[index] = img;
											loaded++;
											if (loaded === framePaths.length) {
												onload(frames);
											}
										};
										img.src = path;
									});
								}
								function playFrameAnimation(frameCount, width, height, frameDuration, position, framePaths) {
									var canvas = document.createElement('canvas');
									canvas.width = width;
									canvas.height = height;
									canvas.style.position = 'absolute';
									canvas.style.left = position.x + 'px';
									canvas.style.top = position.y + 'px';
									canvas.style['z-index'] = 2024;
									if (game.chess) ui.chess.appendChild(canvas);
									else ui.arena.appendChild(canvas);
									var ctx = canvas.getContext('2d');
									var currentFrame = 0;
									loadFrames(framePaths, (frames) => {
										function draw() {
											if (currentFrame < frameCount) {
												ctx.clearRect(0, 0, width, height);
												ctx.drawImage(frames[currentFrame], 0, 0, width, height);
												currentFrame++;
												setTimeout(draw, frameDuration);
											} else {
												if (game.chess) ui.chess.removeChild(canvas);
												else ui.arena.removeChild(canvas);
											}
										}
										draw();
									});
								}
								var framePaths = [];
								var lj = 'extension/洪荒ol/';
								for (var n = 0; n < 18; n++) {
									framePaths.push(lj + 'sfx_40340_0/zxtx' + n + '.png');
								}
								playFrameAnimation(18, 480, 480, 100, { x: player.offsetLeft + (1 / 2) * (player.node.avatar.offsetWidth - 480), y: player.offsetTop + (1 / 6) * player.node.avatar.offsetHeight - 480 }, framePaths);
								player.draw(
									player.countCards('he', function (card) {
										return !get.tag(card, 'damage');
									})
								);
								var gaincard = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									if (get.tag(ui.cardPile.childNodes[i], 'damage')) {
										gaincard.push(ui.cardPile.childNodes[i].name);
									}
								}
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									if (get.tag(ui.discardPile.childNodes[i], 'damage')) {
										gaincard.push(ui.discardPile.childNodes[i].name);
									}
								}
								gaincard = [...new Set(gaincard)];
								player.gain([game.createCard(gaincard.randomGet()), game.createCard(gaincard.randomGet())]);
								player.chooseTarget(get.prompt('梦卜zx')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									//player.tpline(result.targets[0], 'zhouxuanline', 300);
									player.discardPlayerCard(3, result.targets[0], 'he', true);
									result.targets[0].damage('fire');
								}
							},
						},
						寤寐zx: {
							audio: 'ext:洪荒ol/audio:2',
							nobracket: true,
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								game.mp4('zhouxuan枕梦南柯dhtx');
								player.chooseTarget(get.prompt('寤寐zx')).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									var ps = [player, result.targets[0]];
									ps.map(function (item) {
										item.recover();
									});
									result.targets[0].draw(4);
									result.targets[0].phaseUse();
								}
							},
						},
						环币: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								var list = get.typeCard('food');
								for (var i = 0; i < list.length; i++) {
									var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
									var str = `<span style="color:${randomColor}">${get.translation(list[i])}</span>`;
									list[i] = [str, '', list[i]];
								}
								var dialog = ui.create.dialog('选择获得一张食物牌', [list, 'vcard'], 'hidden');
								player.chooseButton(dialog, true).ai = function (button) {
									var card = { name: button.link[2] };
									var value = get.value(card);
									if (get.tag(card, 'damage')) value++;
									return value;
								};
								('step 1');
								if (result.bool) {
									player.gain(game.createCard(result.buttons[0].link[2]), 'draw');
									player.draw(2);
								}
							},
						},
						剑币: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								var list = get.libCard((c) => c.subtype == 'equip1');
								for (var i = 0; i < list.length; i++) {
									var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
									var str = `<span style="color:${randomColor}">${get.translation(list[i])}</span>`;
									list[i] = [str, '', list[i]];
								}
								var dialog = ui.create.dialog('选择获得一张武器牌', [list, 'vcard'], 'hidden');
								player.chooseButton(dialog, true).ai = function (button) {
									var card = { name: button.link[2] };
									var value = get.value(card);
									if (get.tag(card, 'damage')) value++;
									return value;
								};
								('step 1');
								if (result.bool) {
									player.gain(game.createCard(result.buttons[0].link[2]), 'draw');
									player.draw(2);
								}
							},
						},
						布币: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								var list = get.libCard((c) => c.subtype == 'equip2');
								for (var i = 0; i < list.length; i++) {
									var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
									var str = `<span style="color:${randomColor}">${get.translation(list[i])}</span>`;
									list[i] = [str, '', list[i]];
								}
								var dialog = ui.create.dialog('选择获得一张防具牌', [list, 'vcard'], 'hidden');
								player.chooseButton(dialog, true).ai = function (button) {
									var card = { name: button.link[2] };
									var value = get.value(card);
									if (get.tag(card, 'damage')) value++;
									return value;
								};
								('step 1');
								if (result.bool) {
									player.gain(game.createCard(result.buttons[0].link[2]), 'draw');
									player.draw(2);
								}
							},
						},
						圆币: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								var list = get.libCard((c) => c.subtype == 'equip5');
								for (var i = 0; i < list.length; i++) {
									var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
									var str = `<span style="color:${randomColor}">${get.translation(list[i])}</span>`;
									list[i] = [str, '', list[i]];
								}
								var dialog = ui.create.dialog('选择获得一张宝物牌', [list, 'vcard'], 'hidden');
								player.chooseButton(dialog, true).ai = function (button) {
									var card = { name: button.link[2] };
									var value = get.value(card);
									if (get.tag(card, 'damage')) value++;
									return value;
								};
								('step 1');
								if (result.bool) {
									player.gain(game.createCard(result.buttons[0].link[2]), 'draw');
									player.draw(2);
								}
							},
						},
						摇钱: {
							audio: 'ext:洪荒ol/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								var list = [];
								var i, j, name;
								for (var i in lib.character) {
									if (lib.config.forbidall.includes(i)) continue;
									if (lib.config.banned.includes(i)) continue;
									if (lib.character[i][4] && lib.character[i][4].includes('boss')) continue;
									if (lib.character[i][4] && lib.character[i][4].includes('hiddenboss')) continue;
									if (get.config('double_character') && lib.config.forbiddouble.includes(i)) continue;
									list.push(i);
								}
								var suit = ['heart', 'diamond', 'club', 'spade'];
								for (var i = 0; i < list.length; i++) {
									name = list[i] + '_charactercard';
									lib.card[name] = {
										enable: true,
										type: 'character',
										color: 'white',
										opacity: 1,
										textShadow: 'black 0 0 2px',
										chongzhu: true,
										filterTarget(card, player, target) {
											return true;
										},
										selectTarget: 1,
										content() {
											var name = card.name.slice(0, card.name.indexOf('_charactercard'));
											target.$gain2(card);
											var skills = lib.character[name][3];
											var list = [];
											var targetskills = target.getCards('s');
											for (var j = 0; j < skills.length; j++) {
												if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !lib.skill[skills[j]].unique && !targetskills.includes(skills[j])) {
													list.push(skills[j]);
												}
											}
											target.removeSkill('charactercard');
											if (list.length) {
												var skill = list.randomGet();
												target.popup(skill);
												game.log(target, '获得技能', '【' + get.translation(skill) + '】');
												target.addAdditionalSkill('charactercard', skill);
												target.checkMarks();
												target.storage.charactercard = card;
												target.addSkill('charactercard');
											} else {
												target.draw(2);
											}
										},
										ai: {
											order: 9,
											result: {
												target: (function (name) {
													return function (player, target) {
														if (target.additionalSkills.charactercard && target.additionalSkills.charactercard.length) return 0;
														return lib.character[name][2] <= 4 ? 1 : 0;
													};
												})(list[i]),
											},
										},
									};
									lib.translate[name] = get.translation(list[i]);
									lib.translate[name + '_info'] = get.skillintro(list[i], true, true);
								}
								var jslist = [];
								for (var i in lib.character) {
									if (lib.config.forbidall.includes(i) || lib.config.banned.includes(i) || lib.character[i][0] != 'female' || (lib.character[i][4] && (lib.character[i][4].includes('boss') || lib.character[i][4].includes('hiddenboss'))) || (get.config('double_character') && lib.config.forbiddouble.includes(i))) {
										continue;
									}
									jslist.push(i);
								}
								var jsname = jslist.randomGets(2);
								var jcnames = [];
								jsname.forEach((i) => {
									var jcname = i + '_charactercard';
									lib.translate[jcname + '_bg'] = `<img src="extension/洪荒ol/image/jinengkpbeijing.jpg" style="width: 62px; height: 50px;">`;
									jcnames.push(i + '_charactercard');
								});
								var jncard = jcnames.map((i) => game.createCard(i));
								var list1 = get.libCard((c) => c.type == 'basic');
								var list2 = get.libCard((c) => c.type == 'trick');
								var list3 = get.libCard((c) => c.type == 'equip');
								var list4 = get.libCard((c) => c.type == 'delay');
								var list5 = get.libCard((c) => c.type == 'food');
								var lists = [list1, list2, list3, list4, list5];
								lists.forEach((list) => jncard.push(...list.randomGets(2).map((j) => game.createCard(j))));
								player.gain(jncard, 'draw');
								player.draw(2);
							},
						},
					},
				};
				lib.config.all.characters.add('洪荒ol');
				lib.config.characters.add('洪荒ol');
				for (var i in QQQ.character) {
					QQQ.character[i][4].add(`ext:洪荒ol/image/${i}.jpg`)
				}
				lib.translate['洪荒ol_character_config'] = `洪荒ol`;
				return QQQ;
			});
		},
		help: { 洪荒ol: '<ul type="circle"><li>最有创意的角色之道德天尊:在道德天尊的教诲下</li><li>人们学会了仁爱之心,坚守着义道,注重礼仪之道,追求智慧的光芒,坚守真诚与信念,展现勇气与胆识,学会宽容与宽恕,传承诚实与忠诚,尊重孝道,践行悌心.</li>这些道德准则贯穿于人们的生活中,指引着他们走向更充满人情味与爱心的世界.<br/><br/><li>更新道德天尊技能</li><li>仁义礼智信勇恕诚忠孝悌专属文字动画</li><li>朕自承祖宗遗训,教养臣民,勉励百姓,宜彰彬彬之仁德,存肇肇之公义,遵守大典,推行礼乐,开发智慧之源泉,明信以信信诚,勇往直前,宽恕原谅,以忠臣为心腹,顺从孝道之行,悌义之情.愧绝尔等,圣谕不倦.</li><li>朕深知於天,明哲日新.懿行仁德,弘扬义道,敦教礼乐,弘扬智慧,笃坚信仰,勇毅奋进,厚德宽恕,忠诚笃实,尽孝尊亲,悌友和睦.朕特若此,愿士民遵循,永光我邦.</li></ul>' },
		config: {
			jstxjisha: {
				name: '文字特效',
				intro: '文字特效:开启此项(建议关闭图像特效项)后重启游戏生效.任意一名角色击杀一名其他角色后,会记录此为其在本局共击杀过几名角色,并播放相应击杀人次的文字动画和配音',
				init: true,
			},
			xjstxjishatexiao: {
				name: '图像特效',
				intro: '图像特效:开启此项(建议关闭文字特效项)后重启游戏生效.任意一名角色击杀一名其他角色后,会记录此为其在本局共击杀过几名角色,并播放相应击杀人次的武将动画和配音',
				init: false,
			},
		},
		package: {
			card: {
				card: {
					fengtianzi: {
						fullskin: true,
						type: 'trick',
						enable: true,
						filterTarget(card, player, target) {
							return true;
						},
						content() {
							'step 0';
							for (var i = 0; i < 2; i++) {
								target.gain(game.createCard('xietianzi'));
							}
							target.$draw(2);
						},
					},
					xinfu_nvzhuang: {
						type: 'equip',
						subtype: 'equip2',
						ai: {
							basic: {
								equipValue: 1,
								order: 8,
								useful: 2,
								value: 1,
							},
							result: {
								player(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.getEquip(2);
									if (att > 0) return 0;
									if (target.sex != 'male') return 0;
									if (eq) num += get.value(eq);
									return num + 1;
								},
								target(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.getEquip(2);
									if (att > 0) return 0;
									if (target.sex != 'male') return 0;
									if (eq) num -= get.value(eq);
									return num - 1;
								},
							},
						},
						enable: true,
						selectTarget: 1,
						filterTarget(card, player, target) {
							return target != player;
						},
						filterLose(card, player) {
							return player.sex == 'male';
						},
						onLose() {
							player.chooseToDiscard('he', true);
						},
						onEquip() {
							if (player.sex == 'male') {
								player.chooseToDiscard('he', true, function (card) {
									return card != player.getEquip(2);
								});
							}
						},
						content() {
							'step 0';
							game.log(player, '将', card, '赠给了', target);
							target.equip(card);
						},
						fullskin: true,
						modTarget: false,
						allowMultiple: false,
						toself: false,
					},
					xinfu_zheji: {
						type: 'equip',
						subtype: 'equip1',
						distance: {
							attackFrom: 1,
						},
						ai: {
							basic: {
								equipValue: 1,
								order: 8,
								useful: 2,
								value: 1,
							},
							result: {
								player(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.getEquip(1);
									if (att > 0) return 0;
									if (eq) num += get.value(eq);
									return num + 1;
								},
								target(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.getEquip(1);
									if (att > 0) return 0;
									if (eq) num -= get.value(eq);
									return num - 1;
								},
							},
						},
						enable: true,
						selectTarget: 1,
						filterTarget(card, player, target) {
							return target != player;
						},
						content() {
							game.log(player, '将', card, '赠给了', target);
							target.equip(card);
						},
						fullskin: true,
						modTarget: false,
						allowMultiple: false,
						toself: false,
					},
					duandao断刀: {
						type: 'equip',
						subtype: 'equip1',
						distance: {
							attackFrom: 1,
						},
						ai: {
							basic: {
								equipValue: 1,
								order: 8,
								useful: 2,
								value: 1,
							},
							result: {
								player(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.getEquip(1);
									if (att > 0) return 0;
									if (eq) num += get.value(eq);
									return num + 1;
								},
								target(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.getEquip(1);
									if (att > 0) return 0;
									if (eq) num -= get.value(eq);
									return num - 1;
								},
							},
						},
						enable: true,
						selectTarget: 1,
						filterTarget(card, player, target) {
							return target != player;
						},
						content() {
							game.log(player, '将', card, '赠给了', target);
							target.equip(card);
						},
						fullskin: true,
						modTarget: false,
						allowMultiple: false,
						toself: false,
						skills: ['duandao断刀'],
					},
					suijian碎剑: {
						type: 'equip',
						subtype: 'equip1',
						distance: {
							attackFrom: 1,
						},
						ai: {
							basic: {
								equipValue: 1,
								order: 8,
								useful: 2,
								value: 1,
							},
							result: {
								player(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.getEquip(1);
									if (att > 0) return 0;
									if (eq) num += get.value(eq);
									return num + 1;
								},
								target(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.getEquip(1);
									if (att > 0) return 0;
									if (eq) num -= get.value(eq);
									return num - 1;
								},
							},
						},
						enable: true,
						selectTarget: 1,
						filterTarget(card, player, target) {
							return target != player;
						},
						content() {
							game.log(player, '将', card, '赠给了', target);
							target.equip(card);
						},
						fullskin: true,
						modTarget: false,
						allowMultiple: false,
						toself: false,
						skills: ['suijian碎剑'],
					},
					xinfu_wufengjian: {
						skills: ['wufengjian_skill'],
						type: 'equip',
						subtype: 'equip1',
						ai: {
							basic: {
								equipValue: 1,
								order: 8,
								useful: 2,
								value: 1,
							},
							result: {
								player(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.getEquip(1);
									if (att > 0) return 0;
									if (eq) num += get.value(eq);
									return num;
								},
								target(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.getEquip(1);
									if (att > 0) return 0;
									if (eq) num -= get.value(eq);
									return num;
								},
							},
						},
						enable: true,
						selectTarget: 1,
						filterTarget(card, player, target) {
							return target != player;
						},
						content() {
							game.log(player, '将', card, '赠给了', target);
							target.equip(card);
						},
						modTarget: false,
						allowMultiple: false,
						toself: false,
						fullskin: true,
					},
					xinfu_numa: {
						type: 'equip',
						subtype: 'equip4',
						distance: {
							globalFrom: -1,
						},
						ai: {
							basic: {
								equipValue: 1,
								order: 8,
								useful: 2,
								value: 1,
							},
							result: {
								player(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.countCards('e', function (card) {
										return get.subtype(card) != 'equip4';
									});
									if (att > 0) return 0;
									return eq;
								},
								target(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.countCards('e', function (card) {
										return get.subtype(card) != 'equip4';
									});
									if (att > 0) return 0;
									return -eq;
								},
							},
						},
						enable: true,
						selectTarget: 1,
						filterTarget(card, player, target) {
							return target != player;
						},
						onEquip() {
							player.discard(
								player.getCards('e', function (cardx) {
									return cardx != player.getEquip(4);
								})
							);
						},
						content() {
							'step 0';
							game.log(player, '将', card, '赠给了', target);
							target.equip(card);
						},
						modTarget: false,
						allowMultiple: false,
						toself: false,
						fullskin: true,
					},
					xinfu_yinfengjia: {
						type: 'equip',
						subtype: 'equip2',
						skills: ['yinfengjia_skill'],
						ai: {
							basic: {
								equipValue: 1,
								order: 8,
								useful: 2,
								value: 1,
							},
							result: {
								player(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.getEquip(2);
									if (att > 0) return 0;
									if (eq) num += get.value(eq);
									return num + 1;
								},
								target(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.getEquip(2);
									if (att > 0) return 0;
									if (eq) num -= get.value(eq);
									return num - 1;
								},
							},
						},
						enable: true,
						selectTarget: 1,
						filterTarget(card, player, target) {
							return target != player;
						},
						content() {
							game.log(player, '将', card, '赠给了', target);
							target.equip(card);
						},
						modTarget: false,
						allowMultiple: false,
						toself: false,
						fullskin: true,
					},
					xinfu_yexingyi: {
						type: 'equip',
						subtype: 'equip2',
						ai: {
							basic: {
								equipValue: 7.5,
								order: 7.5,
								useful: 2,
								value: 7.5,
							},
							result: {
								target(player, target) {
									return get.equipResult(player, target, name);
								},
							},
						},
						skills: ['yexingyi_skill'],
						enable: true,
						selectTarget: -1,
						filterTarget(card, player, target) {
							return target == player;
						},
						modTarget: true,
						allowMultiple: false,
						content() {
							target.equip(card);
						},
						toself: true,
						fullskin: true,
					},
					xinfu_caochuanjiejian: {
						type: 'trick',
						notarget: true,
						global: ['caochuan_skill', 'caochuan_skill2'],
						content() {
							var evt = event.getParent(3)._trigger;
							if (evt.caochuan) {
								evt.cancel();
							}
							evt.getParent('useCard').caochuan_gainer = player;
						},
						ai: {
							useful: 6,
							result: {
								player: 1,
							},
							value: 5,
						},
						fullskin: true,
					},
					xinfu_xiejiaguitian: {
						type: 'trick',
						filterTarget(card, player, target) {
							return target.countCards('e') > 0;
						},
						enable: true,
						content() {
							target.gain(target.getCards('e'), 'gain2');
						},
						ai: {
							order: 7,
							value: 4,
							useful: 2,
							result: {
								target(player, target) {
									return 0;
								},
							},
						},
						selectTarget: 1,
						fullskin: true,
					},
					xinfu_shushangkaihua: {
						audio: true,
						type: 'trick',
						enable: true,
						filterTarget(card, player, target) {
							return player == target;
						},
						selectTarget: -1,
						content() {
							'step 0';
							target.chooseToDiscard([1, 2], 'he', true).ai = get.disvalue;
							('step 1');
							if (result.bool && result.cards.length) {
								var num = result.cards.length;
								var bool = false;
								for (var i = 0; i < result.cards.length; i++) {
									if (get.type(result.cards[i]) == 'equip') bool = true;
								}
								if (bool) num++;
								player.draw(num);
							}
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
										if (target == player && hs[0].name == 'xinfu_shushangkaihua') {
											return 0;
										}
										return 0.3;
									}
									return Math.sqrt(target.countCards('he'));
								},
							},
							tag: {
								loseCard: 1,
								discard: 1,
								norepeat: 1,
							},
						},
						fullskin: true,
					},
					xinfu_zhuluzhongyuan: {
						audio: true,
						type: 'trick',
						enable: true,
						cardcolor: 'red',
						selectTarget: -1,
						filterTarget: true,
						contentBefore() {
							'step 0';
							event.toequip = [];
							if (event.parent.stocktargets) {
								event.num = event.parent.stocktargets.length;
							} else {
								event.num = game.countPlayer();
							}
							('step 1');
							var equip = get.cardPile(function (card) {
								return get.type(card) == 'equip' && !event.toequip.includes(card);
							});
							if (equip) {
								event.toequip.push(equip);
								event.num--;
							} else event.num = 0;
							('step 2');
							if (event.num > 0) event.goto(1);
							('step 3');
							ui.clear();
							var cards = event.toequip;
							var dialog = ui.create.dialog('逐鹿天下', cards, true);
							_status.dieClose.push(dialog);
							dialog.videoId = lib.status.videoId++;
							game.addVideo('cardDialog', null, ['逐鹿天下', get.cardsInfo(cards), dialog.videoId]);
							event.parent.preResult = dialog.videoId;
							game.broadcast(
								function (cards, id) {
									var dialog = ui.create.dialog('逐鹿天下', cards, true);
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
								var next = target.chooseButton(true, function (button) {
									return get.value(button.link, _status.event.player);
								});
								next.set('dialog', event.preResult);
								next.set('closeDialog', false);
								next.set('dialogdisplay', true);
							} else if (event.dialog.buttons.length == 1) {
								event.directButton = event.dialog.buttons[0];
							} else event.finish();
							('step 1');
							var dialog = event.dialog;
							var card;
							if (event.directButton) {
								card = event.directButton.link;
							} else {
								card = result.links[0];
							}
							var button;
							for (var i = 0; i < dialog.buttons.length; i++) {
								if (dialog.buttons[i].link == card) {
									button = dialog.buttons[i];
									button.querySelector('.info').innerHTML = get.translation(target.name);
									dialog.buttons.remove(button);
									break;
								}
							}
							var capt = get.translation(target) + '选择了' + get.translation(button.link);
							if (card) {
								target.$gain2(card);
								target.equip(card);
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
									get.translation(target.name),
									capt
								);
							}
							dialog.content.firstChild.innerHTML = capt;
							game.addVideo('dialogCapt', null, [dialog.videoId, dialog.content.firstChild.innerHTML]);
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
											dialog.buttons[i].link.discard();
										}
										event.trigger('zlzyRemained');
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
								useful: 1,
							},
							result: {
								target(player, target) {
									if (get.is.versus()) {
										if (target == player) return 1.5;
										return 1;
									}
									if (player.hasUnknown(2)) {
										return 0;
									}
									return 2 - (2 * get.distance(player, target, 'absolute')) / game.countPlayer();
								},
							},
							tag: {
								draw: 1,
								multitarget: 1,
							},
						},
						fullskin: true,
					},
					xinfu_yajiaoqiang: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip1',
						distance: {
							attackFrom: -2,
						},
						ai: {
							equipValue(card, player) {
								var num = 2.5 + player.countCards('h') / 3;
								return Math.min(num, 4);
							},
							basic: {
								equipValue: 3.5,
								order: 3.5,
								useful: 2,
								value: 3.5,
							},
							result: {
								target(player, target) {
									return get.equipResult(player, target, name);
								},
							},
						},
						skills: ['yajiaoqiang_skill1'],
						global: ['yajiaoqiang_skill2'],
						enable: true,
						selectTarget: -1,
						filterTarget(card, player, target) {
							return target == player;
						},
						modTarget: true,
						allowMultiple: false,
						content() {
							target.equip(card);
						},
						toself: true,
					},
					xinfu_jinhe: {
						type: 'equip',
						subtype: 'equip5',
						skills: ['jinhe_skill'],
						ai: {
							equipValue: 1,
							basic: {
								order: 8,
								useful: 2,
								equipValue: 1,
								value: 1,
							},
							result: {
								player(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.countCards('h');
									if (att > 0) return 0;
									return eq;
								},
								target(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.countCards('h');
									if (att > 0) return 0;
									return -eq;
								},
							},
						},
						enable: true,
						selectTarget: 1,
						filterTarget(card, player, target) {
							return target != player;
						},
						filterLose(card, player) {
							return true;
						},
						onLose() {
							'step 0';
							var func = function () {
								return true;
							};
							if (player.hasSkill('jinhe_skill_1') && player.storage.jinhe_skill != undefined) {
								func = function (cardx) {
									return cardx.suit == player.storage.jinhe_skill[0].suit;
								};
							}
							var todis = player.getCards('h', func);
							if (todis.length) player.discard(todis);
							('step 1');
							player.storage.jinhe_skill[0].discard();
							player.$throw(player.storage.jinhe_skill[0]);
							delete player.storage.jinhe_skill;
							player.unmarkSkill('jinhe_skill');
						},
						content() {
							'step 0';
							game.log(player, '将', card, '赠给了', target);
							target.equip(card);
							('step 1');
							event.cards = get.cards(2);
							player.chooseCardButton(event.cards, '将一张牌置于锦盒中', true);
							('step 2');
							event.cards.remove(result.links[0]);
							target.storage.jinhe_skill = [result.links[0]];
							target.markSkill('jinhe_skill');
							player.$give(1, target);
							player.$throw(event.cards[0]);
							event.cards[0].discard();
							game.log(player, '将', result.links[0], '放在了', card, '下,丢弃了', event.cards[0]);
						},
						modTarget: false,
						allowMultiple: false,
						toself: false,
						fullskin: true,
					},
					zhenlongchangjian: {
						type: 'equip',
						subtype: 'equip1',
						distance: {
							attackFrom: -1,
						},
						ai: {
							basic: {
								equipValue: 2,
							},
						},
						skills: ['zhenlongchangjian_skill'],
						enable: true,
						fullimage: true,
					},
					chuanguoyuxi: {
						type: 'equip',
						subtype: 'equip5',
						ai: {
							basic: {
								equipValue: 7.5,
							},
						},
						skills: ['chuanguoyuxi_skill'],
						enable: true,
						fullimage: true,
					},
					qinnu: {
						type: 'equip',
						subtype: 'equip1',
						skills: ['qinnu_skill'],
						distance: {
							attackFrom: -8,
						},
						enable: true,
						ai: {
							basic: {
								useful: 2,
								equipValue: 1,
							},
						},
						fullimage: true,
					},
					pinpingbi品评笔: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip5',
						skills: ['pinpingbi品评笔'],
					},
					mingzhao明昭盾: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip2',
						skills: ['mingzhao明昭盾'],
					},
					podao朴刀: {
						fullskin: true,
						distance: { attackFrom: -1 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['podao朴刀'],
					},
					jizhengxiangsheng奇正相生: {
						fullskin: true,
						type: 'trick',
						enable: true,
						filterTarget(card, player, target) {
							return true;
						},
						content() {
							game.JPG('qzxswztx', 1500);
							player.gain(
								['sha', 'shan'].map((i) => game.createCard(i)),
								'draw'
							);
							player.gainPlayerCard(target, 'he', true);
							target.damage();
						},
					},
					huolongjuan: {
						fullskin: true,
						type: 'delay',
						cardnature: 'fire',
						ai: {
							result: {
								target(player, target) {
									var num = 0;
									for (var i of game.players) {
										if (i.hasSkillTag('rejudge')) num += get.attitude(target, i);
									}
									return Math.random() - 0.5 + num;
								}, //QQQ
							},
						},
						modTarget(card, player, target) {
							return lib.filter.judge(card, player, target);
						},
						enable(card, player) {
							return player.canAddJudge(card);
						},
						filterTarget(card, player, target) {
							return lib.filter.judge(card, player, target) && player == target;
						},
						selectTarget: [-1, -1],
						judge(card) {
							if (card.suit == 'heart' && card.number > 1 && card.number < 10) return -6;
							return 0;
						},
						effect() {
							if (result.bool == false) {
								game.mp4('huolongjuansptx');
								player.chooseToDiscard('he', 3, true);
								player.damage(3, 'fire', 'nosource');
							} else {
								player.addJudgeNext(card);
							}
						},
						cancel() {
							player.addJudgeNext(card);
						},
					},
					lingzhi灵芝: {
						fullskin: true,
						type: 'basic',
						enable: true,
						filterTarget(card, player, target) {
							return true;
						},
						content() {
							'step 0';
							game.mp4('lingzhisptx');
							target.gainMaxHp();
							('step 1');
							target.hp = player.maxHp;
						},
					},
					dutao: {
						fullskin: true,
						type: 'basic',
						enable: true,
						filterTarget(card, player, target) {
							return true;
						},
						content() {
							game.mp4('dutaosptx');
							target.damage(1, 'poison');
						},
					},
					pantao: {
						fullskin: true,
						type: 'basic',
						enable: true,
						filterTarget(card, player, target) {
							return true;
						},
						content() {
							game.mp4('pantaosptx');
							target.draw(4);
							target.recover(2);
						},
					},
					xiantao仙桃: {
						fullskin: true,
						type: 'basic',
						enable: true,
						filterTarget(card, player, target) {
							return true;
						},
						content() {
							game.mp4('xiantaosptx');
							target.draw(6);
							target.recover();
						},
					},
					baguafuzhou: {
						type: 'equip',
						subtype: 'equip2',
						skills: ['baguafuzhou'],
						ai: {
							basic: {
								equipValue: 1,
								order: 8,
								useful: 2,
								value: 1,
							},
							result: {
								player(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.getEquip(2);
									if (att > 0) return 0;
									if (eq) num += get.value(eq);
									return num + 1;
								},
								target(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.getEquip(2);
									if (att > 0) return 0;
									if (eq) num -= get.value(eq);
									return num - 1;
								},
							},
						},
						enable: true,
						selectTarget: 1,
						filterTarget(card, player, target) {
							return target != player;
						},
						content() {
							game.log(player, '将', card, '赠给了', target);
							target.equip(card);
						},
						modTarget: false,
						allowMultiple: false,
						toself: false,
						fullskin: true,
					},
					liejiu: {
						fullskin: true,
						type: 'basic',
						toself: true,
						enable(event, player) {
							return !player.hasSkill('liejiu');
						},
						lianheng: true,
						logv: false,
						savable(card, player, dying) {
							return dying == player;
						},
						usable: 1,
						selectTarget: -1,
						modTarget: true,
						filterTarget(card, player, target) {
							return target == player;
						},
						content() {
							game.mp4('liejiusptx');
							target.draw(2);
							if (target.isDying()) {
								target.recover(2);
								if (_status.currentPhase == target) {
									target.getStat().card.liejiu--;
								}
							} else {
								if (cards && cards.length) {
									card = cards[0];
								}
								game.broadcastAll(
									function (target, card, gain2) {
										target.addSkill('liejiu');
										if (!target.node.liejiu) {
											target.node.liejiu = ui.create.div('.playerliejiu', target.node.avatar);
											target.node.liejiu2 = ui.create.div('.playerliejiu', target.node.avatar2);
										}
									},
									target,
									card,
									target == targets[0]
								);
								if (target == targets[0]) {
									if (card.clone && (card.clone.parentNode == target.parentNode || card.clone.parentNode == ui.arena)) {
										game.addVideo('gain2', target, get.cardsInfo([card]));
									}
								}
							}
						},
						ai: {
							basic: {
								useful(card, i) {
									if (_status.event.player.hp > 1) {
										if (i == 0) return 4;
										return 1;
									}
									if (i == 0) return 7.3;
									return 3;
								},
								value(card, player, i) {
									if (player.hp > 1) {
										if (i == 0) return 5;
										return 1;
									}
									if (i == 0) return 7.3;
									return 3;
								},
							},
							order() {
								return get.order({ name: 'sha' }) + 0.2;
							},
							result: {
								target(player, target) {
									if (target && target.isDying()) return 2;
									if (lib.config.mode == 'stone' && !player.isMin()) {
										if (player.getActCount() + 1 >= player.actcount) return 0;
									}
									var shas = player.getCards('h', 'sha');
									if (shas.length > 1 && player.getCardUsable('sha') > 1) {
										return 0;
									}
									var card;
									if (shas.length) {
										for (var i = 0; i < shas.length; i++) {
											if (lib.filter.filterCard(shas[i], target)) {
												card = shas[i];
												break;
											}
										}
									} else if (player.hasSha() && player.needsToDiscard()) {
										if (player.countCards('h', 'hufu') != 1) {
											card = { name: 'sha' };
										}
									}
									if (card) {
										if (
											game.hasPlayer(function (current) {
												return get.attitude(target, current) < 0 && target.canUse(card, current, true, true) && !current.getEquip('baiyin') && get.effect(current, card, target) > 0;
											})
										) {
											return 1;
										}
									}
									return 0;
								},
							},
							tag: {
								save: 1,
							},
						},
					},
					bingjiu: {
						fullskin: true,
						type: 'basic',
						toself: true,
						enable(event, player) {
							return !player.hasSkill('bingjiu');
						},
						lianheng: true,
						logv: false,
						savable(card, player, dying) {
							return dying == player;
						},
						usable: 1,
						selectTarget: -1,
						modTarget: true,
						filterTarget(card, player, target) {
							return target == player;
						},
						content() {
							'step 0';
							game.mp4('bingjiusptx');
							player.chooseTarget(get.prompt('bingjiu')).set('ai', function (target) {
								return get.attitude(player, target);
							});
							('step 1');
							if (result.bool) {
								player.discardPlayerCard(2, result.targets[0], 'he', true);
							}
							if (target.isDying()) {
								target.recover(2);
								if (_status.currentPhase == target) {
									target.getStat().card.bingjiu--;
								}
							} else {
								if (cards && cards.length) {
									card = cards[0];
								}
								game.broadcastAll(
									function (target, card, gain2) {
										target.addSkill('bingjiu');
										if (!target.node.bingjiu) {
											target.node.bingjiu = ui.create.div('.playerbingjiu', target.node.avatar);
											target.node.bingjiu2 = ui.create.div('.playerbingjiu', target.node.avatar2);
										}
									},
									target,
									card,
									target == targets[0]
								);
								if (target == targets[0]) {
									if (card.clone && (card.clone.parentNode == target.parentNode || card.clone.parentNode == ui.arena)) {
										game.addVideo('gain2', target, get.cardsInfo([card]));
									}
								}
							}
						},
						ai: {
							basic: {
								useful(card, i) {
									if (_status.event.player.hp > 1) {
										if (i == 0) return 4;
										return 1;
									}
									if (i == 0) return 7.3;
									return 3;
								},
								value(card, player, i) {
									if (player.hp > 1) {
										if (i == 0) return 5;
										return 1;
									}
									if (i == 0) return 7.3;
									return 3;
								},
							},
							order() {
								return get.order({ name: 'sha' }) + 0.2;
							},
							result: {
								target(player, target) {
									if (target && target.isDying()) return 2;
									if (lib.config.mode == 'stone' && !player.isMin()) {
										if (player.getActCount() + 1 >= player.actcount) return 0;
									}
									var shas = player.getCards('h', 'sha');
									if (shas.length > 1 && player.getCardUsable('sha') > 1) {
										return 0;
									}
									var card;
									if (shas.length) {
										for (var i = 0; i < shas.length; i++) {
											if (lib.filter.filterCard(shas[i], target)) {
												card = shas[i];
												break;
											}
										}
									} else if (player.hasSha() && player.needsToDiscard()) {
										if (player.countCards('h', 'hufu') != 1) {
											card = { name: 'sha' };
										}
									}
									if (card) {
										if (
											game.hasPlayer(function (current) {
												return get.attitude(target, current) < 0 && target.canUse(card, current, true, true) && !current.getEquip('baiyin') && get.effect(current, card, target) > 0;
											})
										) {
											return 1;
										}
									}
									return 0;
								},
							},
							tag: {
								save: 1,
							},
						},
					},
					qingtongjiubei青铜酒杯: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip5',
						skills: ['qingtongjiubei青铜酒杯'],
					},
					huosuolianhuan火锁连环: {
						fullskin: true,
						type: 'trick',
						enable: true,
						filterTarget: true,
						selectTarget: [1, 2],
						chongzhu: true,
						content() {
							game.mp4('huosuolianhuan火锁连环sptx');
							target.damage('fire');
							target.link();
						},
					},
					shenlongyanyuedao神龙偃月刀: {
						fullskin: true,
						distance: { attackFrom: -2 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['shenlongyanyuedao神龙偃月刀'],
					},
					tulongjuan: {
						fullskin: true,
						type: 'delay',
						cardnature: 'tusx',
						ai: {
							result: {
								target(player, target) {
									var num = 0;
									for (var i of game.players) {
										if (i.hasSkillTag('rejudge')) num += get.attitude(target, i);
									}
									return Math.random() - 0.5 + num;
								}, //QQQ
							},
						},
						modTarget(card, player, target) {
							return lib.filter.judge(card, player, target);
						},
						enable(card, player) {
							return player.canAddJudge(card);
						},
						filterTarget(card, player, target) {
							return lib.filter.judge(card, player, target) && player == target;
						},
						selectTarget: [-1, -1],
						judge(card) {
							if (card.suit == 'diamond' && card.number > 1 && card.number < 10) return -6;
							return 0;
						},
						effect() {
							if (result.bool == false) {
								game.mp4('tulongjuansptx');
								player.turnOver();
								player.damage(3, 'tusx', 'nosource');
							} else {
								player.addJudgeNext(card);
							}
						},
						cancel() {
							player.addJudgeNext(card);
						},
					},
					shuilongjuan: {
						fullskin: true,
						type: 'delay',
						cardnature: 'shuisx',
						ai: {
							result: {
								target(player, target) {
									var num = 0;
									for (var i of game.players) {
										if (i.hasSkillTag('rejudge')) num += get.attitude(target, i);
									}
									return Math.random() - 0.5 + num;
								}, //QQQ
							},
						},
						modTarget(card, player, target) {
							return lib.filter.judge(card, player, target);
						},
						enable(card, player) {
							return player.canAddJudge(card);
						},
						filterTarget(card, player, target) {
							return lib.filter.judge(card, player, target) && player == target;
						},
						selectTarget: [-1, -1],
						judge(card) {
							if (card.suit == 'spade' && card.number > 1 && card.number < 10) return -6;
							return 0;
						},
						effect() {
							if (result.bool == false) {
								game.mp4('shuilongjuansptx');
								player.addTempSkill('fengyin', { player: 'phaseAfter' });
								player.damage(3, 'shuisx', 'nosource');
							} else {
								player.addJudgeNext(card);
							}
						},
						cancel() {
							player.addJudgeNext(card);
						},
					},
					longjuanfeng: {
						fullskin: true,
						type: 'delay',
						cardnature: 'fengsx',
						ai: {
							result: {
								target(player, target) {
									var num = 0;
									for (var i of game.players) {
										if (i.hasSkillTag('rejudge')) num += get.attitude(target, i);
									}
									return Math.random() - 0.5 + num;
								}, //QQQ
							},
						},
						modTarget(card, player, target) {
							return lib.filter.judge(card, player, target);
						},
						enable(card, player) {
							return player.canAddJudge(card);
						},
						filterTarget(card, player, target) {
							return lib.filter.judge(card, player, target) && player == target;
						},
						selectTarget: [-1, -1],
						judge(card) {
							if (card.suit == 'club' && card.number > 1 && card.number < 10) return -6;
							return 0;
						},
						effect() {
							if (result.bool == false) {
								game.mp4('longjuanfengsptx');
								player.discard(player.getCards('he').randomGets(6));
								player.damage(3, 'fengsx', 'nosource');
							} else {
								player.addJudgeNext(card);
							}
						},
						cancel() {
							player.addJudgeNext(card);
						},
					},
					binglongjuan: {
						fullskin: true,
						type: 'delay',
						cardnature: 'bingsx',
						ai: {
							result: {
								target(player, target) {
									var num = 0;
									for (var i of game.players) {
										if (i.hasSkillTag('rejudge')) num += get.attitude(target, i);
									}
									return Math.random() - 0.5 + num;
								}, //QQQ
							},
						},
						modTarget(card, player, target) {
							return lib.filter.judge(card, player, target);
						},
						enable(card, player) {
							return player.canAddJudge(card);
						},
						filterTarget(card, player, target) {
							return lib.filter.judge(card, player, target) && player == target;
						},
						selectTarget: [-1, -1],
						judge(card) {
							if (card.suit == 'club' && card.number > 1 && card.number < 10) return -6;
							return 0;
						},
						effect() {
							if (result.bool == false) {
								game.mp4('binglongjuansptx');
								player.discard(player.getCards('he').randomGets(2 + player.hp));
								player.damage(3, 'bingsx', 'nosource');
							} else {
								player.addJudgeNext(card);
							}
						},
						cancel() {
							player.addJudgeNext(card);
						},
					},
					jiancu箭簇: {
						type: 'basic',
						fullskin: true,
						toself: true,
						ai: {
							value: -9,
							useful: 6,
							result: {
								player(player, target) {
									if (player.hasSkillTag('usejiancu箭簇')) return 5;
									return -1;
								},
							},
							order: 7.5,
						},
						enable: true,
						modTarget: true,
						global: 'g_jiancu箭簇',
						filterTarget(card, player, target) {
							return target == player;
						},
						delay: false,
						content() { },
						selectTarget: -1,
					},
					xiandan仙丹: {
						fullskin: true,
						type: 'basic',
						enable: true,
						filterTarget(card, player, target) {
							return true;
						},
						content() {
							'step 0';
							game.mp4('xiandansptx');
							target.gainMaxHp(target.maxHp);
							('step 1');
							target.hp = target.maxHp;
						},
					},
					liaoji撩戟: {
						fullskin: true,
						distance: { attackFrom: -2 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['liaoji撩戟'],
					},
					kuanggeji狂歌戟: {
						fullskin: true,
						distance: { attackFrom: -2 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['kuanggeji狂歌戟'],
					},
					edoushuangji恶斗双戟: {
						fullskin: true,
						distance: { attackFrom: -2 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['edoushuangji恶斗双戟'],
					},
					fenghuolangyan烽火狼烟: {
						fullskin: true,
						type: 'trick',
						enable: true,
						selectTarget: -1,
						filterTarget(card, player, target) {
							return target != player;
						},
						reverseOrder: true,
						content() {
							'step 0';
							game.mp4('fhlysptx');
							var next = target.chooseToRespond({ name: 'sha' });
							next.set('ai', function (card) {
								var evt = _status.event.parent;
								if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
								if (evt.player.hasSkillTag('notricksource')) return 0;
								if (evt.target.hasSkillTag('notrick')) return 0;
								return 11 - get.value(card);
							});
							next.autochoose = lib.filter.autoRespondSha;
							('step 1');
							if (result.bool == false) {
								target.damage('fire');
							}
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
								target(player, target) {
									if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
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
					xiuyangshengxi休养生息: {
						fullskin: true,
						type: 'trick',
						enable: true,
						selectTarget: -1,
						reverseOrder: true,
						filterTarget(card, player, target) {
							return target.hp < target.maxHp;
						},
						content() {
							game.mp4('xysxsptx');
							target.recover([1, 2].randomGet());
						},
						ai: {
							basic: {
								order: 1,
								useful: [3, 1],
								value: 0,
							},
							result: {
								target(player, target) {
									return target.hp < target.maxHp ? 2 : 0;
								},
							},
							tag: {
								recover: 0.5,
								multitarget: 1,
							},
						},
					},
					judu剧毒: {
						type: 'basic',
						fullskin: true,
						toself: true,
						ai: {
							value: -5,
							useful: 6,
							result: {
								player(player, target) {
									if (player.hasSkillTag('usejudu剧毒')) return 5;
									return -1;
								},
							},
							order: 7.5,
						},
						enable: true,
						modTarget: true,
						global: 'g_judu',
						filterTarget(card, player, target) {
							return target == player;
						},
						delay: false,
						content() { },
						selectTarget: -1,
					},
					liedu烈毒: {
						type: 'basic',
						fullskin: true,
						toself: true,
						ai: {
							value: -5,
							useful: 6,
							result: {
								player(player, target) {
									if (player.hasSkillTag('useliedu烈毒')) return 5;
									return -1;
								},
							},
							order: 7.5,
						},
						enable: true,
						modTarget: true,
						global: 'g_liedu',
						filterTarget(card, player, target) {
							return target == player;
						},
						delay: false,
						content() { },
						selectTarget: -1,
					},
					guohefencheng: {
						fullskin: true,
						type: 'trick',
						enable: true,
						filterTarget(card, player, target) {
							return true;
						},
						content() {
							'step 0';
							player.discardPlayerCard(target.countCards('he'), target, 'he', true);
							('step 1');
							if (result.cards.filter((i) => get.color(i) == 'red').length) target.damage(result.cards.filter((i) => get.color(i) == 'red').length, 'fire');
						},
					},
					binghanjian冰汉剑: {
						fullskin: true,
						distance: { attackFrom: -1 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['binghanjian冰汉剑'],
					},
					jubingjian剧冰剑: {
						fullskin: true,
						distance: { attackFrom: -1 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['jubingjian剧冰剑'],
					},
					liebingjian烈冰剑: {
						fullskin: true,
						distance: { attackFrom: -1 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['liebingjian烈冰剑'],
					},
					bingsha: {
						audio: true,
						fullskin: true,
						type: 'basic',
						enable: true,
						usable: 1,
						range: { attack: 1 },
						selectTarget: 1,
						filterTarget(card, player, target) {
							return player != target;
						},
						content() {
							'step 0';
							game.mp4('冰杀特效');
							player.discardPlayerCard(2, target, 'he', true);
							if (typeof event.shanRequired != 'number' || !event.shanRequired || event.shanRequired < 0) {
								event.shanRequired = 1;
							}
							('step 1');
							if (event.directHit) {
								event._result = { bool: false };
							} else if (event.skipShan) {
								event._result = { bool: true };
							} else {
								var next = target.chooseToRespond({ name: 'shan' });
								if (event.shanRequired > 1) {
									next.set('prompt2', '(共需打出张' + event.shanRequired + '闪)');
								}
								next.set('ai', function (card) {
									var target = _status.event.player;
									var evt = _status.event.parent;
									if (_status.event.shanRequired > 1 && target.countCards('h', 'shan') < _status.event.shanRequired) {
										return -1;
									}
									if (target.hasSkillTag('useShan')) {
										return 11 - get.value(card);
									}
									if (target.hasSkillTag('noShan')) {
										return -1;
									}
									if (get.damageEffect(target, evt.player, target, evt.card.nature) >= 0) return -1;
									return 11 - get.value(card);
								}).set('shanRequired', event.shanRequired);
								next.autochoose = lib.filter.autoRespondShan;
							}
							('step 2');
							if (result.bool == false) {
								event.trigger('shaHit');
							} else {
								event.shanRequired--;
								if (event.shanRequired > 0) {
									event.goto(1);
								} else {
									event.trigger('shaMiss');
									event.responded = result;
								}
							}
							('step 3');
							if (result.bool == false && !event.unhurt) {
								target.damage('bingsx');
								event.result = { bool: true };
								event.trigger('shaDamage');
							} else {
								event.result = { bool: false };
								event.trigger('shaUnhirt');
							}
						},
						ai: {
							basic: {
								useful: [5, 1],
								value: [5, 1],
							},
							order() {
								if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
								return 3;
							},
							result: {
								target(player, target) {
									if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
										if (get.attitude(player, target) > 0) {
											return -6;
										} else {
											return -3;
										}
									}
									return -1.5;
								},
							},
							tag: {
								respond: 1,
								respondShan: 1,
								damage(card) {
									if (card.nature == 'poison') return;
									return 1;
								},
								natureDamage(card) {
									if (card.nature) return 1;
								},
								fireDamage(card, nature) {
									if (card.nature == 'fire') return 1;
								},
								thunderDamage(card, nature) {
									if (card.nature == 'thunder') return 1;
								},
								poisonDamage(card, nature) {
									if (card.nature == 'poison') return 1;
								},
							},
						},
					},
					zhansha斩杀: {
						audio: true,
						fullskin: true,
						type: 'basic',
						enable: true,
						usable: 1,
						range: { attack: 1 },
						selectTarget: 1,
						filterTarget(card, player, target) {
							return player != target;
						},
						content() {
							'step 0';
							if (typeof event.shanRequired != 'number' || !event.shanRequired || event.shanRequired < 0) {
								event.shanRequired = 1;
							}
							('step 1');
							if (event.directHit) {
								event._result = { bool: false };
							} else if (event.skipShan) {
								event._result = { bool: true };
							} else {
								var next = target.chooseToRespond({ name: 'shan' });
								if (event.shanRequired > 1) {
									next.set('prompt2', '(共需打出张' + event.shanRequired + '闪)');
								}
								next.set('ai', function (card) {
									var target = _status.event.player;
									var evt = _status.event.parent;
									if (_status.event.shanRequired > 1 && target.countCards('h', 'shan') < _status.event.shanRequired) {
										return -1;
									}
									if (target.hasSkillTag('useShan')) {
										return 11 - get.value(card);
									}
									if (target.hasSkillTag('noShan')) {
										return -1;
									}
									if (get.damageEffect(target, evt.player, target, evt.card.nature) >= 0) return -1;
									return 11 - get.value(card);
								}).set('shanRequired', event.shanRequired);
								next.autochoose = lib.filter.autoRespondShan;
							}
							('step 2');
							if (result.bool == false) {
								event.trigger('shaHit');
							} else {
								event.shanRequired--;
								if (event.shanRequired > 0) {
									event.goto(1);
								} else {
									event.trigger('shaMiss');
									event.responded = result;
								}
							}
							('step 3');
							if (result.bool == false && !event.unhurt) {
								target.damage([1, target.hp].randomGet());
								event.result = { bool: true };
								event.trigger('shaDamage');
							} else {
								event.result = { bool: false };
								event.trigger('shaUnhirt');
							}
						},
						ai: {
							basic: {
								useful: [5, 1],
								value: [5, 1],
							},
							order() {
								if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
								return 3;
							},
							result: {
								target(player, target) {
									if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
										if (get.attitude(player, target) > 0) {
											return -6;
										} else {
											return -3;
										}
									}
									return -1.5;
								},
							},
							tag: {
								respond: 1,
								respondShan: 1,
								damage(card) {
									if (card.nature == 'poison') return;
									return 1;
								},
								natureDamage(card) {
									if (card.nature) return 1;
								},
								fireDamage(card, nature) {
									if (card.nature == 'fire') return 1;
								},
								thunderDamage(card, nature) {
									if (card.nature == 'thunder') return 1;
								},
								poisonDamage(card, nature) {
									if (card.nature == 'poison') return 1;
								},
							},
						},
					},
					yao药: {
						fullskin: true,
						type: 'basic',
						enable: true,
						filterTarget(card, player, target) {
							return true;
						},
						content() {
							target.recover();
							target.addSkill('yao药2');
						},
					},
					woleihongding: {
						fullskin: true,
						type: 'trick',
						enable: true,
						filterTarget(card, player, target) {
							return true;
						},
						content() {
							'step 0';
							event.num = 5;
							game.JPG('woleihongding', 2000);
							('step 1');
							target.judge(function (card) {
								if (card.suit == 'spade' && card.number > 1 && card.number < 10) return -6;
								return 0;
							});
							('step 2');
							if (result.judge < 0) {
								target.damage(3, 'thunder', 'nosource');
							}
							if (--event.num > 0) event.goto(1);
						},
					},
					pofudao破俘刀: {
						fullskin: true,
						distance: { attackFrom: -1 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['pofudao破俘刀'],
					},
					liemao: {
						type: 'equip',
						subtype: 'equip1',
						distance: {
							attackFrom: 1,
						},
						ai: {
							basic: {
								equipValue: 1,
								order: 8,
								useful: 2,
								value: 1,
							},
							result: {
								player(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.getEquip(1);
									if (att > 0) return 0;
									if (eq) num += get.value(eq);
									return num + 1;
								},
								target(player, target) {
									var num = 0;
									var att = get.attitude(player, target);
									var eq = target.getEquip(1);
									if (att > 0) return 0;
									if (eq) num -= get.value(eq);
									return num - 1;
								},
							},
						},
						enable: true,
						selectTarget: 1,
						filterTarget(card, player, target) {
							return target != player;
						},
						content() {
							game.log(player, '将', card, '赠给了', target);
							target.equip(card);
						},
						fullskin: true,
						modTarget: false,
						allowMultiple: false,
						toself: false,
						skills: ['liemao'],
					},
					cangtieshuo苍铁槊: {
						fullskin: true,
						distance: { attackFrom: -1 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['cangtieshuo苍铁槊'],
					},
					tianziyue: {
						fullskin: true,
						distance: { attackFrom: -1 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['tianziyue'],
					},
				},
				translate: {
					tianziyue: '天子钺',
					tianziyue_info: '<h1 style="text-shadow:6px 2px 2px #333;color: DodgerBlue;font-family: chaozisheleishenbianjianfan;">回合开始时,你可弃置一名角色3张牌,若其中有装备牌,你摸3-其黑色牌数张牌</h1>',
					cangtieshuo苍铁槊: '苍铁槊',
					cangtieshuo苍铁槊_info: '你使用杀时,若你体力上限大于令目标角色,可令视为对其使用一张弃甲曳兵其失去一点体力',
					pofudao破俘刀: '破俘刀',
					pofudao破俘刀_info: '一名角色失去酒后,你可获得一张烈酒令其失去一点体力',
					binghanjian冰汉剑: '冰汉剑',
					binghanjian冰汉剑_info: '每当你使用杀命中目标后,你可以防止伤害,改为弃置目标4张牌,其失去1点体力',
					jubingjian剧冰剑: '剧冰剑',
					jubingjian剧冰剑_info: '每当你使用杀命中目标后,你可以防止伤害,改为弃置目标6张牌,其失去2点体力',
					liebingjian烈冰剑: '烈冰剑',
					liebingjian烈冰剑_info: '每当你使用杀命中目标后,你可以防止伤害,改为令目标弃置全部牌,其失去3点体力',
					liaoji撩戟: '撩戟',
					liaoji撩戟_info: '一名角色受到致命伤害时你可防止此伤害,改为你对伤害来源使用撩戟数量张杀,该角色回复以此法造成伤害数的体力',
					kuanggeji狂歌戟: '狂歌戟',
					kuanggeji狂歌戟_info: '出牌阶段限一次,你可获得1到2名角色两张牌,并视为对其使用一张流星火羽',
					edoushuangji恶斗双戟: '恶斗双戟',
					edoushuangji恶斗双戟_info: '出牌阶段限一次,你可获得1到2名角色两张牌,其失去1+你装备区武器牌数点体力',
					shenlongyanyuedao神龙偃月刀: '神龙偃月刀',
					shenlongyanyuedao神龙偃月刀_info: '出牌阶段限一次,你可弃置一名角色两张牌,若其中有红色牌视为对其使用两张水淹七军',
					qingtongjiubei青铜酒杯: '青铜酒杯',
					qingtongjiubei青铜酒杯_info: '<span style="color: #6f8170;">回合开始时你获得酒、烈酒、冰酒各一张</span>',
					podao朴刀: '朴刀',
					podao朴刀_info: '你使用实体杀时,可弃置目标角色两张牌,对其造成与你使用杀花色相同的弃置牌数点伤害',
					mingzhao明昭盾: '明昭盾',
					mingzhao明昭盾_info: '<span style="color:blue; font-size:60px; font-weight:600; text-shadow:1px 0px rgba(128,0,128,0.8), 1px 2px rgba(128,0,128,0.8), 3px 1px rgba(128,0,128,0.8), 2px 3px rgba(128,0,128,0.8), 4px 2px rgba(128,0,128,0.8), 4px 4px rgba(128,0,128,0.8), 5px 3px rgba(128,0,128,0.8), 5px 5px rgba(128,0,128,0.8), 7px 4px rgba(128,0,128,0.8), 6px 6px rgba(128,0,128,0.8), 8px 5px rgba(128,0,128,0.8), 7px 7px rgba(128,0,128,0.8), 9px 6px rgba(128,0,128,0.8), 9px 8px rgba(128,0,128,0.8), 11px 7px rgba(128,0,128,0.8);">每名角色回合限一次,一名角色获得或失去黑色牌后你增加一点护甲</span>',
					pinpingbi品评笔: '品评笔',
					pinpingbi品评笔_info: '<span style="color:pink; font-size:60px; font-weight:600; text-shadow:1px 0px yellow, 1px 2px yellow, 3px 1px yellow, 2px 3px yellow, 4px 2px yellow, 4px 4px yellow, 5px 3px yellow, 5px 5px yellow, 7px 4px yellow, 6px 6px yellow, 8px 5px yellow, 7px 7px yellow, 9px 6px yellow, 9px 8px yellow, 11px 7px yellow;">一名角色回合开始时,你可以选择是否对其进行品评.如果你选择对其进行品评,你将从20个不同的<角色品质>中选择一个,并根据这个<角色品质>对一名角色进行评价.如果评价的结果是正面的(如善、勇、谦等),则该角色将会获得一些增益效果,如摸牌、回复体力、增加护甲等.如果评价的结果是负面的(如恶、怯、骄等),则该角色将会受到一些减益效果,如弃牌、失去体力、非锁定技被封印等(奇数次品评和偶数次品评增益或减益会有所不同).</span>',
					liemao: '裂矛',
					liemao_info: '攻击范围-1,使用杀时弃置一张伤害标签牌,30%概率受到一点伤害',
					liejiu: '烈酒',
					liejiu_info: '<span style="color: #8a2be2;">出牌阶段,对自己使用,摸两张牌令自己的下一张使用的【杀】造成的伤害+2(每回合限使用1次);濒死阶段,对自己使用,摸2张牌,回复2点体力</span>',
					bingjiu: '冰酒',
					bingjiu_info: '<span style="color: #B0E0E6;">出牌阶段,对自己使用,可弃置一名角色两张牌.令自己的下一张使用的【杀】造成的伤害+2(每回合限使用1次);濒死阶段,对自己使用,可弃置一名角色两张牌.回复2点体力</span>',
					baguafuzhou: '八卦符咒',
					baguafuzhou_info: '锁定技,当你成为杀的目标时,进行一次判定,若为红色,你受到两点无伤害来源的毒属性伤害',
					suijian碎剑: '碎剑',
					suijian碎剑_info: '<span style="color: #8C7853">攻击范围-1,你使用杀或决斗时,弃置两张伤害标签牌</span>',
					duandao断刀: '断刀',
					duandao断刀_info: '攻击范围-1,回合开始或结束时你须弃置一张杀,你使用的杀有50%概率无效',
					fengtianzi: '奉天子以令不臣',
					fengtianzi_info: '出牌阶段你可选择一名角色,令其获得两张挟天子以令诸侯',
					xinfu_nvzhuang: '女装',
					xinfu_nvzhuang_info: '锁定技.当【女装】进入或离开你的装备区时,你弃置一张不为【女装】的牌',
					xinfu_zheji: '折戟',
					xinfu_zheji_info: '这是一把坏掉的武器',
					xinfu_wufengjian: '无锋剑',
					xinfu_wufengjian_info: '锁定技,当你使用【杀】时,你弃置一张牌',
					xinfu_numa: '驽马',
					xinfu_numa_info: '锁定技,你的进攻距离+1.当【驽马】进入你的装备区时,你弃置装备区内的所有其他牌',
					xinfu_yinfengjia: '引蜂甲',
					xinfu_yinfengjia_info: '锁定技,当你受到锦囊牌造成的伤害时,此伤害+1',
					xinfu_yexingyi: '夜行衣',
					xinfu_yexingyi_info: '锁定技,你不能成为黑色锦囊牌的目标',
					xinfu_caochuanjiejian: '草船借箭',
					xinfu_caochuanjiejian_info: '当【杀】或伤害性锦囊牌对你生效时,对此牌使用.你令此牌对你无效,你于此牌结算完成后获得之',
					xinfu_xiejiaguitian: '解甲归田',
					xinfu_xiejiaguitian_info: '出牌阶段,对一名装备区里有牌的角色使用.该角色收回装备区内的所有牌',
					xinfu_shushangkaihua: '树上开花',
					xinfu_shushangkaihua_info: '出牌阶段,对你自己使用.你弃置至多两张牌,摸等量的牌.若你弃置了装备牌,则你可以多摸一张牌',
					xinfu_zhuluzhongyuan: '逐鹿天下',
					xinfu_zhuluzhongyuan_info: '出牌阶段,对所有角色使用.你从牌堆和弃牌堆中亮出等同于目标数量的装备牌,从你开始,所有目标角色依次将这些牌中的一张置入自己的装备区',
					xinfu_yajiaoqiang: '涯角枪',
					xinfu_yajiaoqiang_info: '你的回合外,当你于此回合内第一次使用黑色牌或打出黑色【闪】时,你可以在此牌结算完成后获得之',
					xinfu_jinhe: '锦盒',
					xinfu_jinhe_info: '<li>锁定技.当【锦盒】进入你的装备区时,你观看牌堆顶的两张牌,并将其中的一张置于【锦盒】上,称之为「礼」.<br><li>出牌阶段,你可以弃置【锦盒】和「礼」.若如此做,你弃置所有与「礼」花色相同的手牌.当【锦盒】因其他原因离开你的装备区时,你弃置所有手牌',
					zhenlongchangjian: '真龙长剑',
					zhenlongchangjian_info: '锁定技,你于一回合内使用的第一张普通锦囊牌不是【无懈可击】的合法目标',
					chuanguoyuxi: '传国玉玺',
					chuanguoyuxi_info: '出牌阶段开始时,你可以视为使用一张【南蛮入侵】【万箭齐发】/【桃园结义】/【五谷丰登】',
					qinnu: '秦弩',
					qinnu_info: '当你使用【杀】指定一个目标后,你令其防具无效,你的出牌阶段内,可使用的【杀】数量+1;当你失去装备区里的【秦弩】,你令此牌销毁',
					jizhengxiangsheng奇正相生: '奇正相生',
					jizhengxiangsheng奇正相生_info: '出牌阶段,你选择一名角色,你获得一张杀和闪,获得目标角色一张牌对其造成一点伤害',
					huolongjuan: '火龙卷',
					huolongjuan_info: '<span style="font-size: 30px;background: linear-gradient(to right, red, yellow);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">出牌阶段,对自己使用.判定阶段判定为♥️️️2～9弃置3张牌受到3点火焰伤害,否则,将之移动到下家的判定区里.</span>',
					lingzhi灵芝: '灵芝',
					lingzhi灵芝_info: '出牌阶段对一名角色使用,其增加一点体力上限回复全部体力',
					dutao: '毒桃',
					dutao_info: '<span style="color: #8B750">出牌阶段,对一名角色造成一点毒属性伤害,或一名角色濒死时对其造成一点毒属性伤害</span>',
					pantao: '蟠桃',
					pantao_info: '<span style="color: #FFD1DC">出牌阶段,令一名角色摸4张牌回复2点体力,或一名角色濒死时令其摸4张牌回复2点体力</span>',
					xiantao仙桃: '仙桃',
					xiantao仙桃_info: '<span style="color: #F88379">出牌阶段,令一名角色摸6张牌回复1点体力,或一名角色濒死时令其摸6张牌回复1点体力</span>',
					huosuolianhuan火锁连环: '火锁连环',
					huosuolianhuan火锁连环_info: '出牌阶段使用,选择1至2个角色,分别对其造成一点火焰伤害,横置或重置这些角色',
					tulongjuan: '土龙卷',
					tulongjuan_info: '<span style="color: #FFD1DC">出牌阶段,对自己使用.判定阶段判定为♦️️️2～9翻面并受到3点土属性伤害,否则,将之移动到下家的判定区里.</span>',
					shuilongjuan: '水龙卷',
					shuilongjuan_info: '<span style="color: #00FFFF">出牌阶段,对自己使用.判定阶段判定为♠️️️2～9非锁定技失效直到该回合结束后并受到3点水属性伤害,否则,将之移动到下家的判定区里.</span>',
					longjuanfeng: '龙卷风',
					longjuanfeng_info: '<span style="color: #40E0D0">出牌阶段,对自己使用.判定阶段判定为♣️️️2～9随机弃置6张牌并受到3点风属性伤害,否则,将之移动到下家的判定区里.</span>',
					binglongjuan: '冰龙卷',
					binglongjuan_info: '<span style="color: #87CEEB">出牌阶段,对自己使用.判定阶段判定为♣️️️2～9随机弃置2+你体力值张牌并受到3点冰属性伤害,否则,将之移动到下家的判定区里.</span>',
					jiancu箭簇: '箭簇',
					jiancu箭簇_info: '你使用打出获得箭簇结束后,受到一点毒属性伤害,下次受到的伤害+1(一次获得多张箭簇增加伤害效果不叠加)',
					xiandan仙丹: '仙丹',
					xiandan仙丹_info: '<span style="color: #FF7F50;">出牌阶段,令一名角色,或一名角色濒死时令其,体力上限翻倍回复全部体力</span>',
					xiuyangshengxi休养生息: '休养生息',
					fenghuolangyan烽火狼烟: '烽火狼烟',
					xiuyangshengxi休养生息_info: '出牌阶段,对所有角色使用.每名目标角色回复随机1到2点体力',
					fenghuolangyan烽火狼烟_info: '出牌阶段,对所有其他角色使用.每名目标角色需打出一张【杀】,否则受到1点火焰伤害',
					judu剧毒: '剧毒',
					judu剧毒_info: '使用打出弃置剧毒结束后,失去两点体力,50%概率失去一点体力上限',
					liedu烈毒: '烈毒',
					liedu烈毒_info: '使用打出弃置剧毒结束后,失去3点体力,60%概率失去一点体力上限',
					guohefencheng: '过河焚城',
					guohefencheng_info: '弃置一名角色全部牌,对其造成所有弃置的红色牌数点火焰伤害',
					bingsha: '冰杀',
					bingsha_info: '出牌阶段,对攻击范围内的一名角色使用,弃置其两张牌令其打出一张【闪】或受到一点冰属性伤害',
					zhansha斩杀: '斩杀',
					zhansha斩杀_info: '出牌阶段,对攻击范围内的一名角色使用,令其打出一张【闪】或受到随机1~其体力值点伤害',
					yao药: '药',
					yao药_info: '回复一点体力防止你下次体力流失',
					woleihongding: '五雷轰顶',
					woleihongding_info: '出牌阶段令一名角色进行五次闪电效果判定',
				},
			},
			intro: "素材提供:平西镇北征南破东定中拢左揽右震天憾地司马<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
			author: '作者苏婆玛丽奥弃坑,素材提供者大司马代更',
		},
	};
});
